# Notes étrangères — Plan d'implémentation

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Apprendre à l'analyseur que toutes les notes qui sonnent ne font pas partie de l'accord — reconnaître, nommer et écarter les notes étrangères (passage, broderie, appoggiature, retard, échappée, anticipation, pédale).

**Architecture :** L'accord et ses notes étrangères sont indissociables : on ne peut connaître l'un sans l'autre. Le choix de l'accord devient donc une **optimisation par le coût** — un accord qui laisse des notes de côté n'est pas disqualifié si ces notes se comportent en étrangères légitimes. Trois modules purs nouveaux : `voice-lines.ts` (reconstituer les lignes mélodiques, sans quoi rien n'est classable), `chord-choice.ts` (choisir l'accord par le coût), `notes-etrangeres.ts` (la taxonomie). Le segment voit désormais **toutes** les notes qui sonnent pendant sa durée, et non les seules présentes à son attaque.

**Tech Stack :** TypeScript strict, vitest, Next.js 16. Aucune dépendance nouvelle.

**Spec :** `docs/superpowers/specs/2026-07-02-notes-etrangeres-design.md`

**Contraintes d'environnement :**
- **NE JAMAIS lancer `npx tsc --noEmit`** : cela sature la mémoire de ce poste. Le contrôle d'intégration est `NODE_OPTIONS="--max-old-space-size=8192" npm run build`.
- Tests : `npx vitest run`. **161 tests verts** avant ce chantier.
- TypeScript strict, pas de `any`. Commentaires et identifiants en **français**, disant le POURQUOI.

**Ce qui existe déjà (sous-projets A et B, à lire avant de commencer) :**
- `src/lib/musicxml-parse.ts` — `ParsedNote { step, alter, octave, pc, midi, onset, duration, measure, beat, voice, part }`, `ParsedScore { fifths, mode, signature, notes, measures }`, `TPQ = 768`, `noteNameFr`.
- `src/lib/harmony-segmentation.ts` — `Slice`, `notesSoundingAt`, `sliceByBeat`, `mergeSlices`.
- `src/lib/harmonic-analysis.ts` — `CHORD_PATTERNS`, `identifyChordFromNotes`, `analyzeChord`, `annotateResolutions`, `buildChromaEvents`, `QUINTE_OMISSIBLE`, `RETARDS`.
- `src/lib/analyse-pipeline.test.ts` — le test de bout en bout sur un choral à quatre voix. **C'est le garde-fou de tout ce chantier.**

---

## Structure des fichiers

| Fichier | Responsabilité |
|---|---|
| `src/lib/voice-lines.ts` *(nouveau)* | Reconstituer les lignes mélodiques par (partie, voix) et donner à toute note sa précédente et sa suivante. Détecte les voix NON monodiques (accords plaqués) et refuse alors de statuer. |
| `src/lib/chord-choice.ts` *(nouveau)* | Choisir l'accord d'un segment **par le coût** : ce qu'il explique (pondéré par durée et poids métrique) contre ce qu'il laisse de côté (pondéré par la légitimité mélodique de l'abandon). Rend l'accord ET ses notes étrangères. |
| `src/lib/notes-etrangeres.ts` *(nouveau)* | La taxonomie : classer une note étrangère d'après son comportement mélodique et son contexte harmonique. |
| `src/lib/harmony-segmentation.ts` *(modifié)* | `notesSoundingDuring` (toutes les notes qui sonnent PENDANT le segment, et non seulement à son attaque) + `spansParTemps`. |
| `src/lib/harmonic-analysis.ts` *(modifié)* | `lecturesAccord(pcs)` — expose **toutes** les lectures possibles, et non la seule meilleure : c'est `chord-choice` qui arbitre désormais. |
| `src/app/api/analyse-partition/route.ts` *(modifié)* | Consomme la nouvelle chaîne ; expose les notes étrangères. |
| `src/app/api/analyse-partition/commentaire/route.ts` *(modifié)* | Le prompt exploite les notes étrangères nommées. |
| `src/components/AnalysePartition.tsx` *(modifié)* | Les affiche. |

---

## Task 1 : Les lignes mélodiques (`voice-lines.ts`)

**Pourquoi d'abord :** une note étrangère ne se reconnaît **qu'à la façon dont on l'aborde et dont on la quitte**. Sans ligne mélodique, aucune classification n'est possible — et le coût d'un abandon, dans la Task 3, en dépend aussi.

**Files:**
- Create: `src/lib/voice-lines.ts`
- Test: `src/lib/voice-lines.test.ts`

- [ ] **Step 1: Écrire les tests qui échouent**

Créer `src/lib/voice-lines.test.ts` :

```ts
import { describe, it, expect } from "vitest";
import { TPQ, type ParsedNote } from "./musicxml-parse";
import { carteMelodique } from "./voice-lines";

function n(
  midi: number, onset: number, duration: number, voice = "1", part = "P1",
): ParsedNote {
  return {
    step: "C", alter: 0, octave: 4, pc: ((midi % 12) + 12) % 12, midi,
    onset, duration, measure: 1, beat: 1, voice, part,
  };
}

describe("carteMelodique — la ligne d'une voix", () => {
  it("donne à chaque note sa précédente et sa suivante dans SA voix", () => {
    const do4 = n(60, 0, TPQ);
    const re4 = n(62, TPQ, TPQ);
    const mi4 = n(64, 2 * TPQ, TPQ);
    const carte = carteMelodique([do4, re4, mi4]);

    expect(carte.voisinage(re4)).toEqual({ precedente: do4, suivante: mi4 });
    expect(carte.voisinage(do4)).toEqual({ precedente: undefined, suivante: re4 });
    expect(carte.voisinage(mi4)).toEqual({ precedente: re4, suivante: undefined });
  });

  it("ne mélange pas les voix", () => {
    const sopr = n(72, 0, TPQ, "1");
    const basse = n(48, 0, TPQ, "2");
    const sopr2 = n(74, TPQ, TPQ, "1");
    const carte = carteMelodique([sopr, basse, sopr2]);

    expect(carte.voisinage(sopr)?.suivante).toBe(sopr2);
    expect(carte.voisinage(basse)?.suivante).toBeUndefined();
  });

  it("ne mélange pas les parties, même à numéro de voix identique", () => {
    const a = n(72, 0, TPQ, "1", "P1");
    const b = n(48, 0, TPQ, "1", "P2");
    const a2 = n(74, TPQ, TPQ, "1", "P1");
    const carte = carteMelodique([a, b, a2]);

    expect(carte.voisinage(a)?.suivante).toBe(a2);
    expect(carte.voisinage(b)?.suivante).toBeUndefined();
  });
});

describe("carteMelodique — la voix qui n'est pas une ligne", () => {
  it("rend null quand la voix porte un accord plaqué : aucune ligne n'existe", () => {
    // Écriture pianistique : trois notes simultanées dans la même voix.
    const do4 = n(60, 0, TPQ);
    const mi4 = n(64, 0, TPQ);
    const sol4 = n(67, 0, TPQ);
    const suite = n(65, TPQ, TPQ);
    const carte = carteMelodique([do4, mi4, sol4, suite]);

    expect(carte.voisinage(do4)).toBeNull();
    expect(carte.voisinage(mi4)).toBeNull();
    expect(carte.voisinage(sol4)).toBeNull();
  });

  it("l'accord plaqué ne contamine que SON instant, pas toute la voix", () => {
    const accord1 = n(60, 0, TPQ);
    const accord2 = n(64, 0, TPQ);
    const seule = n(65, TPQ, TPQ);
    const carte = carteMelodique([accord1, accord2, seule]);

    expect(carte.voisinage(accord1)).toBeNull();
    // La note isolée, elle, garde une ligne — mais sa précédente est ambiguë :
    // on ne peut pas dire laquelle des deux notes de l'accord la précède.
    expect(carte.voisinage(seule)).toBeNull();
  });
});
```

- [ ] **Step 2: Lancer les tests, vérifier qu'ils échouent**

Run: `npx vitest run src/lib/voice-lines.test.ts`
Expected: FAIL — `Failed to resolve import "./voice-lines"`.

- [ ] **Step 3: Écrire le module**

Créer `src/lib/voice-lines.ts` :

```ts
/**
 * lib/voice-lines.ts
 * Harmonia — Reconstituer les LIGNES MÉLODIQUES d'une partition.
 *
 * Une note étrangère ne se reconnaît qu'à la façon dont on l'ABORDE et dont on la
 * QUITTE : une note de passage traverse par degrés conjoints, une broderie revient
 * sur ses pas, une échappée s'enfuit par un saut. Sans ligne mélodique, aucune de
 * ces distinctions n'existe — et le coût d'un abandon (cf. `chord-choice`) non plus.
 *
 * MusicXML porte cette information : `part` et `voice`. Encore faut-il qu'elle
 * décrive vraiment une ligne — voir `voisinage`.
 */

import type { ParsedNote } from "./musicxml-parse";

export interface Voisinage {
  precedente?: ParsedNote;
  suivante?: ParsedNote;
}

export interface CarteMelodique {
  /**
   * Voisinage mélodique d'une note, ou `null` si sa voix ne forme pas une LIGNE à
   * cet instant — c'est le cas des accords plaqués de l'écriture pianistique, où
   * plusieurs notes partagent la même voix au même instant. On ne devine pas quelle
   * note « précède » laquelle : la note sera dite étrangère sans être nommée.
   */
  voisinage(note: ParsedNote): Voisinage | null;
}

export function carteMelodique(notes: ParsedNote[]): CarteMelodique {
  const lignes = new Map<string, ParsedNote[]>();
  for (const n of notes) {
    const cle = `${n.part}|${n.voice}`;
    const ligne = lignes.get(cle) ?? [];
    ligne.push(n);
    lignes.set(cle, ligne);
  }

  const carte = new Map<ParsedNote, Voisinage | null>();

  for (const ligne of lignes.values()) {
    ligne.sort((a, b) => a.onset - b.onset || a.midi - b.midi);

    // Les notes qui partagent un onset dans la MÊME voix : la voix n'est pas une
    // ligne à cet instant. Ni elles, ni leurs voisines immédiates ne peuvent être
    // situées mélodiquement — on ne saurait pas laquelle précède laquelle.
    const simultanees = new Set<number>();
    for (let i = 1; i < ligne.length; i++) {
      if (ligne[i].onset === ligne[i - 1].onset) {
        simultanees.add(ligne[i].onset);
      }
    }

    for (let i = 0; i < ligne.length; i++) {
      const note = ligne[i];
      const precedente = ligne[i - 1];
      const suivante = ligne[i + 1];

      const ambigu =
        simultanees.has(note.onset) ||
        (precedente !== undefined && simultanees.has(precedente.onset)) ||
        (suivante !== undefined && simultanees.has(suivante.onset));

      carte.set(note, ambigu ? null : { precedente, suivante });
    }
  }

  return {
    voisinage: (note) => carte.get(note) ?? null,
  };
}
```

- [ ] **Step 4: Lancer les tests, vérifier qu'ils passent**

Run: `npx vitest run src/lib/voice-lines.test.ts`
Expected: PASS (5 tests).

- [ ] **Step 5: Commit**

```bash
git add src/lib/voice-lines.ts src/lib/voice-lines.test.ts
git commit -m "feat(analyse): lignes melodiques par voix"
```

---

## Task 2 : Le segment voit toutes ses notes (`harmony-segmentation.ts`)

**Pourquoi :** `sliceByBeat` n'échantillonne qu'**au début** de chaque temps. Une croche de passage entre deux temps est donc purement invisible : on ne peut ni la nommer, ni s'en méfier. Le segment doit voir tout ce qui sonne **pendant** sa durée.

**Files:**
- Modify: `src/lib/harmony-segmentation.ts`
- Test: `src/lib/harmony-segmentation.test.ts`

- [ ] **Step 1: Écrire les tests qui échouent**

Ajouter à `src/lib/harmony-segmentation.test.ts` :

```ts
import { notesSoundingDuring, spansParTemps, type Span } from "./harmony-segmentation";

describe("notesSoundingDuring — tout ce qui sonne PENDANT le segment", () => {
  it("voit la croche de passage, que sliceByBeat ne voyait pas", () => {
    const tenue = n(60, 0, 4 * TPQ);                 // ronde
    const croche = n(62, TPQ + TPQ / 2, TPQ / 2);    // croche sur le « et » du 2
    const notes = [tenue, croche];

    // Le segment du temps 2 : de TPQ à 2·TPQ.
    const pendant = notesSoundingDuring(notes, TPQ, 2 * TPQ);
    expect(pendant.map((x) => x.midi).sort()).toEqual([60, 62]);

    // Alors qu'à l'ATTAQUE du temps 2, la croche ne sonne pas encore.
    expect(notesSoundingAt(notes, TPQ).map((x) => x.midi)).toEqual([60]);
  });

  it("une note qui s'éteint pile au début du segment n'y sonne pas", () => {
    expect(notesSoundingDuring([n(60, 0, TPQ)], TPQ, 2 * TPQ)).toHaveLength(0);
  });

  it("une note qui attaque pile à la fin du segment n'y sonne pas", () => {
    expect(notesSoundingDuring([n(60, 2 * TPQ, TPQ)], TPQ, 2 * TPQ)).toHaveLength(0);
  });
});

describe("spansParTemps", () => {
  it("un span par temps, avec toutes les notes sonnantes et la note d'attaque", () => {
    const xml =
      `<score-partwise><part-list><score-part id="P1"/></part-list>` +
      `<part id="P1"><measure number="1">` +
      `<attributes><divisions>2</divisions><key><fifths>0</fifths></key>` +
      `<time><beats>2</beats><beat-type>4</beat-type></time></attributes>` +
      // Temps 1 : Do et Ré en croches. Temps 2 : Mi en noire.
      `<note><pitch><step>C</step><octave>4</octave></pitch><duration>1</duration></note>` +
      `<note><pitch><step>D</step><octave>4</octave></pitch><duration>1</duration></note>` +
      `<note><pitch><step>E</step><octave>4</octave></pitch><duration>2</duration></note>` +
      `</measure></part></score-partwise>`;

    const spans = spansParTemps(parseMusicXML(xml));
    expect(spans).toHaveLength(2);
    expect(spans[0]).toMatchObject({ measure: 1, beat: 1 });
    // Le Ré, croche du contretemps, EST vu par le span du temps 1.
    expect(spans[0].notes.map((x) => x.step).sort()).toEqual(["C", "D"]);
    expect(spans[1].notes.map((x) => x.step)).toEqual(["E"]);
  });
});
```

- [ ] **Step 2: Lancer les tests, vérifier qu'ils échouent**

Run: `npx vitest run src/lib/harmony-segmentation.test.ts`
Expected: FAIL — `notesSoundingDuring is not exported`.

- [ ] **Step 3: Implémenter**

Ajouter à `src/lib/harmony-segmentation.ts` (sans rien supprimer : `sliceByBeat` et `mergeSlices` restent, le test de bout en bout s'en sert) :

```ts
/**
 * Notes sonnant à un moment QUELCONQUE de l'intervalle `[debut, fin[`.
 *
 * `notesSoundingAt` ne regarde qu'un instant : elle ne voit pas la croche de
 * passage attaquée sur le contretemps, qui n'existe qu'ENTRE deux temps. C'était
 * commode tant qu'on ignorait les notes étrangères — c'est exactement ce qu'il faut
 * cesser d'ignorer.
 */
export function notesSoundingDuring(
  notes: ParsedNote[], debut: number, fin: number,
): ParsedNote[] {
  return notes.filter((n) => n.onset < fin && debut < n.onset + n.duration);
}

/**
 * Un SPAN par temps : la durée sur laquelle une harmonie est décidée.
 *
 * DEUX ÉCHELLES, à ne pas confondre : la VISIBILITÉ descend à chaque attaque (le
 * span voit toutes les notes qui sonnent pendant sa durée), mais la DÉCISION
 * HARMONIQUE reste prise au temps. L'harmonie change rarement plus vite que la
 * pulsation, et une croche de passage n'a pas à réclamer son propre accord.
 */
export interface Span {
  measure: number;
  beat: number;       // 1-based
  debut: number;      // ticks absolus
  fin: number;        // ticks absolus (exclusif)
  notes: ParsedNote[];
}

export function spansParTemps(score: ParsedScore): Span[] {
  const out: Span[] = [];

  for (const m of score.measures) {
    const nbTemps = Math.max(1, Math.ceil(m.length / TPQ));
    for (let beat = 1; beat <= nbTemps; beat++) {
      const debut = m.start + (beat - 1) * TPQ;
      if (debut >= m.start + m.length) break;
      const fin = Math.min(debut + TPQ, m.start + m.length);

      const notes = notesSoundingDuring(score.notes, debut, fin);
      if (notes.length === 0) continue;

      out.push({ measure: m.numero, beat, debut, fin, notes });
    }
  }

  return out;
}
```

- [ ] **Step 4: Lancer les tests, vérifier qu'ils passent**

Run: `npx vitest run`
Expected: PASS — les nouveaux tests, ET les 161 anciens (rien n'a été supprimé).

- [ ] **Step 5: Commit**

```bash
git add src/lib/harmony-segmentation.ts src/lib/harmony-segmentation.test.ts
git commit -m "feat(analyse): le segment voit toutes les notes qui sonnent pendant sa duree"
```

---

## Task 3 : Toutes les lectures d'un accord (`harmonic-analysis.ts`)

**Pourquoi :** `identifyChordFromNotes` rend **une** lecture, celle que son score juge la meilleure. Mais son score ne connaît ni la durée des notes, ni leur poids métrique, ni leur comportement mélodique. C'est désormais `chord-choice` qui arbitre — il lui faut donc **toutes** les lectures, pas la gagnante.

**Files:**
- Modify: `src/lib/harmonic-analysis.ts`
- Test: `src/lib/harmonic-analysis.test.ts`

- [ ] **Step 1: Écrire les tests qui échouent**

Ajouter à `src/lib/harmonic-analysis.test.ts` :

```ts
import { lecturesAccord } from "./harmonic-analysis";

describe("lecturesAccord — toutes les lectures, pas la meilleure", () => {
  it("rend plusieurs lectures d'un même ensemble de notes", () => {
    // Do-Mi-Sol-La : La m7 complet, ou Do majeur laissant tomber le La.
    const lectures = lecturesAccord([0, 4, 7, 9]);
    const signatures = lectures.map((l) => `${l.rootPc}:${l.quality}`);
    expect(signatures).toContain("9:m7");
    expect(signatures).toContain("0:");
  });

  it("les quatre lectures d'une 7e diminuée sont toutes rendues", () => {
    const lectures = lecturesAccord([11, 2, 5, 8]).filter((l) => l.quality === "°7");
    expect(new Set(lectures.map((l) => l.rootPc))).toEqual(new Set([11, 2, 5, 8]));
  });

  it("chaque lecture dit quels sons sont les SIENS", () => {
    const doMajeur = lecturesAccord([0, 4, 7, 9]).find(
      (l) => l.rootPc === 0 && l.quality === "",
    )!;
    // `pcs` ne contient QUE les sons de l'accord : le La n'en est pas.
    expect(doMajeur.pcs.sort((a, b) => a - b)).toEqual([0, 4, 7]);
  });

  it("la 7e de dominante à quinte omise est une lecture valide", () => {
    const lectures = lecturesAccord([7, 11, 5]); // Sol-Si-Fa
    expect(lectures.some((l) => l.rootPc === 7 && l.quality === "7")).toBe(true);
  });

  it("une quinte à vide n'a aucune lecture", () => {
    expect(lecturesAccord([0, 7])).toHaveLength(0);
  });
});
```

- [ ] **Step 2: Lancer les tests, vérifier qu'ils échouent**

Run: `npx vitest run src/lib/harmonic-analysis.test.ts`
Expected: FAIL — `lecturesAccord is not exported`.

- [ ] **Step 3: Implémenter**

Dans `src/lib/harmonic-analysis.ts`, ajouter après `identifyChordFromNotes` :

```ts
/**
 * TOUTES les lectures possibles d'un ensemble de hauteurs — et non la meilleure.
 *
 * `identifyChordFromNotes` tranche seule, sur un score qui ne connaît ni la DURÉE
 * des notes, ni leur POIDS MÉTRIQUE, ni leur COMPORTEMENT MÉLODIQUE. Elle ne peut
 * donc pas savoir qu'un Ré de passage vaut moins qu'un Sol tenu sur le temps fort.
 * C'est `chord-choice` qui arbitre désormais, et il lui faut le champ complet.
 *
 * Chaque lecture ne porte dans `pcs` que LES SONS DE L'ACCORD : les notes qu'elle
 * laisse de côté sont, précisément, celles dont l'appelant devra payer le prix.
 * (`identifyChordFromNotes`, elle, y met toutes les hauteurs entendues — l'ancien
 * contrat, dont dépendent `analyzeChord` et ses règles.)
 *
 * Les mêmes garde-fous qu'à l'identification : la quinte seule peut manquer
 * (cf. `QUINTE_OMISSIBLE`), et jamais la tierce.
 */
export function lecturesAccord(pcs: number[]): Chord[] {
  const unique = [...new Set(pcs.map((p) => ((p % 12) + 12) % 12))];
  if (unique.length < 2) return [];

  const out: Chord[] = [];

  for (const pattern of CHORD_PATTERNS) {
    for (const root of unique) {
      const norm = new Set(unique.map((p) => (p - root + 12) % 12));
      const presents = pattern.intervals.filter((iv) => norm.has(iv));
      const manquantes = pattern.intervals.length - presents.length;

      if (manquantes > 1) continue;
      if (manquantes === 1 &&
          (!QUINTE_OMISSIBLE.has(pattern.quality) || norm.has(pattern.intervals[2]))) {
        continue;
      }

      out.push({
        rootPc: root,
        rootFr: NOTE_FR[root] ?? "?",
        quality: pattern.quality,
        pcs: presents.map((iv) => (root + iv) % 12),
      });
    }
  }

  return out;
}
```

- [ ] **Step 4: Lancer les tests, vérifier qu'ils passent**

Run: `npx vitest run`
Expected: PASS — les nouveaux, et les 161 anciens (rien d'existant n'a été touché).

- [ ] **Step 5: Commit**

```bash
git add src/lib/harmonic-analysis.ts src/lib/harmonic-analysis.test.ts
git commit -m "feat(analyse): exposer toutes les lectures d'un accord"
```

---

## Task 4 : La taxonomie (`notes-etrangeres.ts`)

**Pourquoi avant `chord-choice` :** le coût d'un abandon dépend de la LÉGITIMITÉ mélodique de la note abandonnée. Il faut donc savoir juger un comportement mélodique avant de pouvoir chiffrer un coût.

**Files:**
- Create: `src/lib/notes-etrangeres.ts`
- Test: `src/lib/notes-etrangeres.test.ts`

- [ ] **Step 1: Écrire les tests qui échouent**

Créer `src/lib/notes-etrangeres.test.ts` :

```ts
import { describe, it, expect } from "vitest";
import { TPQ, type ParsedNote } from "./musicxml-parse";
import { classer, conjointe, type ContexteEtrangere } from "./notes-etrangeres";

function n(midi: number, onset = 0, duration = TPQ): ParsedNote {
  return {
    step: "C", alter: 0, octave: 4, pc: ((midi % 12) + 12) % 12, midi,
    onset, duration, measure: 1, beat: 1, voice: "1", part: "P1",
  };
}

/** Contexte par défaut : accord de Do majeur, temps fort, note non tenue. */
function ctx(p: Partial<ContexteEtrangere> = {}): ContexteEtrangere {
  return {
    pcsAccord: [0, 4, 7],
    pcsAccordPrecedent: undefined,
    pcsAccordSuivant: undefined,
    debutSegment: 0,
    finSegment: TPQ,
    tempsFort: true,
    traverseAccords: false,
    ...p,
  };
}

describe("conjointe — le degré conjoint", () => {
  it("un demi-ton et un ton sont conjoints", () => {
    expect(conjointe(60, 61)).toBe(true);
    expect(conjointe(60, 62)).toBe(true);
    expect(conjointe(60, 58)).toBe(true);
  });
  it("une tierce est un saut", () => {
    expect(conjointe(60, 63)).toBe(false);
  });
  it("l'unisson n'est pas un mouvement conjoint", () => {
    expect(conjointe(60, 60)).toBe(false);
  });
});

describe("classer — les règles de degré conjoint", () => {
  it("NOTE DE PASSAGE : conjointe des deux côtés, même sens", () => {
    // Do → Ré → Mi
    const re = n(62, TPQ / 2, TPQ / 2);
    const t = classer(re, { precedente: n(60), suivante: n(64, TPQ) }, ctx());
    expect(t).toBe("passage");
  });

  it("BRODERIE : conjointe des deux côtés, sens inverse", () => {
    // Do → Ré → Do
    const re = n(62, TPQ / 2, TPQ / 2);
    const t = classer(re, { precedente: n(60), suivante: n(60, TPQ) }, ctx());
    expect(t).toBe("broderie");
  });

  it("ÉCHAPPÉE : abordée par degré conjoint, quittée par SAUT", () => {
    // Do → Ré → Sol
    const re = n(62, TPQ / 2, TPQ / 2);
    const t = classer(re, { precedente: n(60), suivante: n(67, TPQ) }, ctx());
    expect(t).toBe("echappee");
  });

  it("APPOGGIATURE : abordée par SAUT, quittée par degré conjoint", () => {
    // Sol → Fa → Mi, le Fa sur le temps fort
    const fa = n(65, 0, TPQ / 2);
    const t = classer(fa, { precedente: n(67, -TPQ), suivante: n(64, TPQ / 2) }, ctx());
    expect(t).toBe("appoggiature");
  });

  it("une note sans voisinage (accord plaqué) n'est PAS nommée", () => {
    expect(classer(n(62), null, ctx())).toBeNull();
  });

  it("une note qui saute des deux côtés n'est PAS nommée", () => {
    const t = classer(n(62), { precedente: n(67, -TPQ), suivante: n(57, TPQ) }, ctx());
    expect(t).toBeNull();
  });
});

describe("classer — retard et appoggiature : SEULE la préparation les sépare", () => {
  // Le 4-3 de cadence en Do majeur : le Do se retarde sur l'accord de Sol,
  // et se résout sur le Si.
  const solMajeur = [7, 11, 2];

  it("RETARD : le Do était consonant à l'accord PRÉCÉDENT, tenu, résolu vers le bas", () => {
    // La note attaque AVANT le segment courant : elle est préparée.
    const doTenu = n(72, -TPQ, 2 * TPQ);
    const t = classer(
      doTenu,
      { precedente: n(72, -2 * TPQ), suivante: n(71, TPQ) },
      ctx({
        pcsAccord: solMajeur,
        pcsAccordPrecedent: [0, 4, 7], // Do majeur : le Do y est consonant
        debutSegment: 0,
        finSegment: TPQ,
      }),
    );
    expect(t).toBe("retard");
  });

  it("APPOGGIATURE : le MÊME Do, mais ATTAQUÉ sur le temps — non préparé", () => {
    const doAttaque = n(72, 0, TPQ);
    const t = classer(
      doAttaque,
      { precedente: n(76, -TPQ), suivante: n(71, TPQ) },
      ctx({
        pcsAccord: solMajeur,
        pcsAccordPrecedent: [0, 4, 7],
        debutSegment: 0,
        finSegment: TPQ,
      }),
    );
    expect(t).toBe("appoggiature");
  });

  it("pas de retard si la note n'était PAS consonante à l'accord précédent", () => {
    const doTenu = n(72, -TPQ, 2 * TPQ);
    const t = classer(
      doTenu,
      { precedente: n(72, -2 * TPQ), suivante: n(71, TPQ) },
      ctx({
        pcsAccord: solMajeur,
        pcsAccordPrecedent: [2, 5, 9], // Ré mineur : le Do n'y est pas
        debutSegment: 0,
        finSegment: TPQ,
      }),
    );
    expect(t).not.toBe("retard");
  });

  it("pas de retard si la résolution monte", () => {
    const doTenu = n(72, -TPQ, 2 * TPQ);
    const t = classer(
      doTenu,
      { precedente: n(72, -2 * TPQ), suivante: n(74, TPQ) },
      ctx({
        pcsAccord: solMajeur,
        pcsAccordPrecedent: [0, 4, 7],
        debutSegment: 0,
        finSegment: TPQ,
      }),
    );
    expect(t).not.toBe("retard");
  });
});

describe("classer — anticipation et pédale", () => {
  it("ANTICIPATION : la note est un son de l'accord SUIVANT, sur temps faible, répétée", () => {
    const doAnticipe = n(72, TPQ / 2, TPQ / 2);
    const t = classer(
      doAnticipe,
      { precedente: n(74, 0), suivante: n(72, TPQ) },
      ctx({
        pcsAccord: [7, 11, 2],      // Sol majeur
        pcsAccordSuivant: [0, 4, 7], // Do majeur : le Do y est chez lui
        tempsFort: false,
      }),
    );
    expect(t).toBe("anticipation");
  });

  it("PÉDALE : la note traverse plusieurs accords", () => {
    const doPedale = n(36, 0, 4 * TPQ);
    const t = classer(
      doPedale,
      { precedente: undefined, suivante: n(36, 4 * TPQ) },
      ctx({ pcsAccord: [7, 11, 2, 5], traverseAccords: true }),
    );
    expect(t).toBe("pedale");
  });

  it("la pédale passe AVANT les règles de degré conjoint", () => {
    // Sans cet ordre, la note suivante (un degré conjoint plus haut, très loin
    // dans la voix) ferait passer la pédale pour une note de passage.
    const doPedale = n(36, 0, 4 * TPQ);
    const t = classer(
      doPedale,
      { precedente: n(34, -TPQ), suivante: n(38, 4 * TPQ) },
      ctx({ pcsAccord: [7, 11, 2, 5], traverseAccords: true }),
    );
    expect(t).toBe("pedale");
  });

  it("le RETARD passe avant la pédale : lui aussi est tenu par-dessus la barre", () => {
    const doTenu = n(72, -TPQ, 2 * TPQ);
    const t = classer(
      doTenu,
      { precedente: n(72, -2 * TPQ), suivante: n(71, TPQ) },
      ctx({
        pcsAccord: [7, 11, 2],
        pcsAccordPrecedent: [0, 4, 7],
        traverseAccords: true, // il traverse, mais c'est un retard
      }),
    );
    expect(t).toBe("retard");
  });
});
```

- [ ] **Step 2: Lancer les tests, vérifier qu'ils échouent**

Run: `npx vitest run src/lib/notes-etrangeres.test.ts`
Expected: FAIL — `Failed to resolve import "./notes-etrangeres"`.

- [ ] **Step 3: Écrire le module**

Créer `src/lib/notes-etrangeres.ts` :

```ts
/**
 * lib/notes-etrangeres.ts
 * Harmonia — La taxonomie des NOTES ÉTRANGÈRES.
 *
 * Une note qui n'appartient pas à l'accord n'est pas une anomalie : c'est de
 * l'écriture. Encore faut-il la NOMMER — c'est la matière même du cours d'harmonie,
 * et c'est ce qu'un élève doit savoir faire.
 *
 * Chacune se reconnaît à la façon dont on l'ABORDE et dont on la QUITTE, à quoi
 * s'ajoutent deux informations que la mélodie seule ne donne pas : ce qu'était
 * l'accord PRÉCÉDENT (pour le retard) et ce que sera le SUIVANT (pour l'anticipation).
 */

import type { ParsedNote } from "./musicxml-parse";
import type { Voisinage } from "./voice-lines";

export type TypeEtrangere =
  | "retard"
  | "pedale"
  | "anticipation"
  | "passage"
  | "broderie"
  | "echappee"
  | "appoggiature";

export const LIBELLE_ETRANGERE: Record<TypeEtrangere, string> = {
  retard: "retard",
  pedale: "pédale",
  anticipation: "anticipation",
  passage: "note de passage",
  broderie: "broderie",
  echappee: "échappée",
  appoggiature: "appoggiature",
};

export interface ContexteEtrangere {
  /** Sons de l'accord retenu pour le segment (classes de hauteurs). */
  pcsAccord: number[];
  pcsAccordPrecedent?: number[];
  pcsAccordSuivant?: number[];
  debutSegment: number;
  finSegment: number;
  tempsFort: boolean;
  /** La note sonne encore sous l'accord suivant (ou sonnait déjà sous le précédent). */
  traverseAccords: boolean;
}

/** Degré CONJOINT : un demi-ton ou un ton. L'unisson n'est pas un mouvement. */
export function conjointe(a: number, b: number): boolean {
  const d = Math.abs(a - b);
  return d === 1 || d === 2;
}

/**
 * Classe une note étrangère, ou rend `null` si aucune règle ne l'explique — le
 * moteur ne devine pas. Une note sans voisinage mélodique (accord plaqué dans sa
 * voix, cf. `voice-lines`) n'est jamais nommée : mieux vaut « étrangère » qu'un
 * nom inventé.
 *
 * L'ORDRE DES RÈGLES EST LA RÈGLE :
 *
 *  1. le RETARD d'abord — il est lui aussi tenu par-dessus la barre harmonique, et
 *     la pédale l'avalerait ;
 *  2. la PÉDALE ensuite — elle doit passer AVANT les règles de degré conjoint, qui
 *     la prendraient pour une échappée sur la foi de la note qui la suit, très loin,
 *     dans sa voix ;
 *  3. l'ANTICIPATION — elle exige de connaître l'accord suivant ;
 *  4. enfin les règles de DEGRÉ CONJOINT.
 */
export function classer(
  note: ParsedNote,
  voisinage: Voisinage | null,
  ctx: ContexteEtrangere,
): TypeEtrangere | null {
  if (!voisinage) return null;
  const { precedente, suivante } = voisinage;

  // ── 1. RETARD ──
  //
  // Ce qui le définit, et le sépare de l'appoggiature, c'est la PRÉPARATION : la
  // note était DÉJÀ là, et elle y était CONSONANTE. Elle ne fait que tarder à
  // rejoindre le son de l'accord, un degré plus bas.
  const preparee = note.onset < ctx.debutSegment;
  const consonanteAvant = ctx.pcsAccordPrecedent?.includes(note.pc) ?? false;
  const resoutEnDescendant =
    suivante !== undefined &&
    conjointe(note.midi, suivante.midi) &&
    suivante.midi < note.midi;

  if (preparee && consonanteAvant && resoutEnDescendant) return "retard";

  // ── 2. PÉDALE ──
  if (ctx.traverseAccords) return "pedale";

  // ── 3. ANTICIPATION ──
  //
  // La note n'est pas étrangère « en soi » : elle est en avance. Elle appartient à
  // l'accord SUIVANT, et l'attend en le répétant.
  if (
    !ctx.tempsFort &&
    ctx.pcsAccordSuivant?.includes(note.pc) &&
    suivante !== undefined &&
    suivante.midi === note.midi
  ) {
    return "anticipation";
  }

  // ── 4. DEGRÉ CONJOINT ──
  const entreConjoint = precedente !== undefined && conjointe(precedente.midi, note.midi);
  const sortConjoint = suivante !== undefined && conjointe(note.midi, suivante.midi);

  if (entreConjoint && sortConjoint) {
    const monteAvant = note.midi > precedente!.midi;
    const monteApres = suivante!.midi > note.midi;
    return monteAvant === monteApres ? "passage" : "broderie";
  }

  if (entreConjoint && suivante !== undefined) return "echappee";

  // Abordée par SAUT (ou par rien), quittée par degré conjoint : appoggiature.
  if (sortConjoint) return "appoggiature";

  return null;
}
```

- [ ] **Step 4: Lancer les tests, vérifier qu'ils passent**

Run: `npx vitest run src/lib/notes-etrangeres.test.ts`
Expected: PASS (14 tests).

- [ ] **Step 5: Commit**

```bash
git add src/lib/notes-etrangeres.ts src/lib/notes-etrangeres.test.ts
git commit -m "feat(analyse): taxonomie des notes etrangeres"
```

---

## Task 5 : Choisir l'accord par le coût (`chord-choice.ts`)

**Le cœur du sous-projet.** Un accord qui laisse trois notes de côté ne perd pas contre un accord qui les explique toutes, **si ces trois notes se comportent en notes de passage**.

**Files:**
- Create: `src/lib/chord-choice.ts`
- Test: `src/lib/chord-choice.test.ts`

- [ ] **Step 1: Écrire les tests qui échouent**

Créer `src/lib/chord-choice.test.ts` :

```ts
import { describe, it, expect } from "vitest";
import { parseMusicXML, TPQ } from "./musicxml-parse";
import { spansParTemps } from "./harmony-segmentation";
import { carteMelodique } from "./voice-lines";
import { choisirAccord } from "./chord-choice";

/** Une mesure à deux voix (soprano en haut, basse en bas), divisions à la croche. */
function partition(haut: string, bas: string, beats = 4): string {
  return (
    `<score-partwise><part-list><score-part id="P1"/></part-list>` +
    `<part id="P1"><measure number="1">` +
    `<attributes><divisions>2</divisions><key><fifths>0</fifths></key>` +
    `<time><beats>${beats}</beats><beat-type>4</beat-type></time></attributes>` +
    haut +
    `<backup><duration>${beats * 2}</duration></backup>` +
    bas +
    `</measure></part></score-partwise>`
  );
}

/** `C4:2` → une note Do4 de deux croches. */
function notes(spec: string, voice: string): string {
  return spec
    .split(" ")
    .map((s) => {
      const [nom, duree] = s.split(":");
      const step = nom[0];
      const alter = nom.includes("#") ? 1 : nom.includes("b") ? -1 : 0;
      const octave = nom[nom.length - 1];
      const alt = alter === 0 ? "" : `<alter>${alter}</alter>`;
      return (
        `<note><pitch><step>${step}</step>${alt}<octave>${octave}</octave></pitch>` +
        `<duration>${duree}</duration><voice>${voice}</voice></note>`
      );
    })
    .join("");
}

function premierAccord(xml: string, beat = 1) {
  const score = parseMusicXML(xml);
  const carte = carteMelodique(score.notes);
  const spans = spansParTemps(score);
  const span = spans.find((s) => s.beat === beat)!;
  return choisirAccord(span, carte, {});
}

describe("choisirAccord — la note de passage ne fait pas l'accord", () => {
  it("Do-Ré en croches sur une basse de Do-Mi-Sol : l'accord reste Do majeur", () => {
    // Soprano : Do5 Ré5 (croches) — le Ré est une note de passage vers Mi5.
    // Basse : Do3 tenue. Ténor/alto : Mi4 Sol4 tenus.
    const xml = partition(
      notes("C5:1 D5:1 E5:2", "1"),
      notes("C3:2 C3:2", "2"),
      2,
    );
    const choix = premierAccord(xml)!;
    expect(choix.chord.rootPc).toBe(0);
    expect(choix.chord.quality).toBe("");
    expect(choix.etrangeres.map((e) => e.note.step)).toEqual(["D"]);
  });
});

describe("choisirAccord — la pédale n'entre pas dans l'accord", () => {
  it("V7 sur pédale de tonique : la fondamentale est Sol, la basse d'accord aussi", () => {
    // Soprano : Sol4-Si4-Fa4 (V7 sans quinte, plaqué) — ici en une voix simple.
    // Basse : Do3 tenue sur toute la mesure (pédale).
    const xml = partition(
      notes("G4:2 B4:2 F4:2 G4:2", "1"),
      notes("C3:8", "2"),
      4,
    );
    const choix = premierAccord(xml)!;
    // La pédale de Do ne doit ni devenir fondamentale, ni entrer dans l'accord.
    expect(choix.chord.rootPc).not.toBe(0);
    expect(choix.chord.pcs).not.toContain(0);
  });
});

describe("choisirAccord — le coût décide", () => {
  it("une note abandonnée qui se comporte en étrangère coûte peu", () => {
    const xml = partition(notes("C5:1 D5:1 E5:2", "1"), notes("C3:2 C3:2", "2"), 2);
    const choix = premierAccord(xml)!;
    // Le Ré est abandonné, et c'est la bonne lecture : le coût est faible.
    expect(choix.etrangeres).toHaveLength(1);
    expect(choix.chord.pcs.sort((a, b) => a - b)).toEqual([0]);
  });

  it("aucune lecture possible → null", () => {
    const xml = partition(notes("C5:4", "1"), notes("G3:4", "2"), 2);
    expect(premierAccord(xml)).toBeNull(); // quinte à vide
  });
});
```

*(Note à l'implémenteur : ces tests sont un point de départ. Le calage des pondérations est la partie longue et empirique de la tâche — ajoute des cas au fur et à mesure, et fais-les passer en réglant le SCORE, jamais en affaiblissant l'assertion.)*

- [ ] **Step 2: Lancer les tests, vérifier qu'ils échouent**

Run: `npx vitest run src/lib/chord-choice.test.ts`
Expected: FAIL — `Failed to resolve import "./chord-choice"`.

- [ ] **Step 3: Écrire le module**

Créer `src/lib/chord-choice.ts` :

```ts
/**
 * lib/chord-choice.ts
 * Harmonia — Choisir l'accord d'un segment PAR LE COÛT.
 *
 * L'accord et ses notes étrangères sont INDISSOCIABLES : on ne peut pas connaître
 * l'un sans l'autre. Ce n'est donc pas un filtre qu'on applique après coup, mais une
 * optimisation : on met les lectures en concurrence, et on retient celle qui explique
 * le mieux ce qu'on entend.
 *
 * Ce qu'un accord EXPLIQUE rapporte, pondéré par la DURÉE de la note et son POIDS
 * MÉTRIQUE : une longue note sur le temps fort pèse lourd, une croche du contretemps
 * ne pèse presque rien.
 *
 * Ce qu'il LAISSE DE CÔTÉ coûte — mais pas toujours le même prix. Une note abordée et
 * quittée par degré conjoint est une étrangère LÉGITIME, presque gratuite : c'est de
 * l'écriture, pas du bruit. Une note qui arrive par saut et repart par saut est une
 * anomalie, et se paie cher.
 *
 * C'est ce qui permet à un accord qui abandonne trois notes de battre un accord qui
 * les explique toutes — si ces trois notes se comportent en notes de passage.
 */

import { TPQ, type ParsedNote } from "./musicxml-parse";
import type { Span } from "./harmony-segmentation";
import type { CarteMelodique } from "./voice-lines";
import { conjointe } from "./notes-etrangeres";
import { lecturesAccord, type Chord } from "./harmonic-analysis";

export interface ChoixAccord {
  /**
   * L'accord retenu. `pcs` ne contient QUE ses sons ; `bassPc` est le plus grave
   * de SES sons — et non la note la plus grave entendue, qui peut être une pédale
   * ou une note de passage à la basse.
   */
  chord: Chord;
  etrangeres: Array<{ note: ParsedNote; voix: string }>;
  cout: number;
}

export interface OptionsChoix {
  /** Sons de l'accord précédent — un retard s'y prépare (coût réduit). */
  pcsAccordPrecedent?: number[];
}

/**
 * Poids d'une note : sa durée EFFECTIVE dans le segment, majorée si elle attaque
 * sur le temps. Une note tenue depuis le segment précédent compte pour ce qu'elle
 * y sonne encore, ni plus ni moins.
 */
function poids(note: ParsedNote, span: Span): number {
  const debut = Math.max(note.onset, span.debut);
  const fin = Math.min(note.onset + note.duration, span.fin);
  const duree = Math.max(0, fin - debut) / TPQ;
  const surLeTemps = note.onset <= span.debut;
  return duree * (surLeTemps ? 1.5 : 1);
}

/**
 * Coût d'ABANDON d'une note.
 *
 * On ne peut pas la classer ici — la classification exige de connaître l'accord, et
 * l'accord est justement ce qu'on cherche. On se contente donc du test qui n'en
 * dépend pas : la note se comporte-t-elle comme une étrangère peut légitimement se
 * comporter ? Elle le fait si elle est abordée OU quittée par degré conjoint, ou si
 * elle est tenue (retard, pédale). Sinon, l'abandonner coûte cher.
 */
const COUT_LEGITIME = 0.3;
const COUT_ANOMALIE = 2.5;

function coutAbandon(
  note: ParsedNote, span: Span, carte: CarteMelodique, options: OptionsChoix,
): number {
  const p = poids(note, span);
  const v = carte.voisinage(note);

  const tenueDavant = note.onset < span.debut;
  const prepareeConsonante =
    tenueDavant && (options.pcsAccordPrecedent?.includes(note.pc) ?? false);

  const melodique =
    v !== null &&
    ((v.precedente !== undefined && conjointe(v.precedente.midi, note.midi)) ||
      (v.suivante !== undefined && conjointe(note.midi, v.suivante.midi)));

  const legitime = prepareeConsonante || melodique || tenueDavant;
  return p * (legitime ? COUT_LEGITIME : COUT_ANOMALIE);
}

/** Une quinte omise se paie : l'accord prétend un son qu'on n'entend pas. */
const COUT_QUINTE_OMISE = 0.4;

export function choisirAccord(
  span: Span, carte: CarteMelodique, options: OptionsChoix = {},
): ChoixAccord | null {
  const pcs = [...new Set(span.notes.map((n) => n.pc))];
  const lectures = lecturesAccord(pcs);
  if (lectures.length === 0) return null;

  let meilleur: ChoixAccord | null = null;

  for (const lecture of lectures) {
    const sons = new Set(lecture.pcs);

    let gain = 0;
    const etrangeres: Array<{ note: ParsedNote; voix: string }> = [];

    for (const note of span.notes) {
      if (sons.has(note.pc)) {
        gain += poids(note, span);
      } else {
        gain -= coutAbandon(note, span, carte, options);
        etrangeres.push({ note, voix: `${note.part}|${note.voice}` });
      }
    }

    // La quinte omise est une note que l'accord AFFIRME sans qu'on l'entende.
    if (lecture.pcs.length < 3) gain -= COUT_QUINTE_OMISE;

    // La BASSE de l'accord est le plus grave de SES sons — pas la note la plus
    // grave entendue. C'est ainsi qu'une pédale cesse de fausser le renversement.
    const sonsGraves = span.notes
      .filter((n) => sons.has(n.pc))
      .sort((a, b) => a.midi - b.midi);
    if (sonsGraves.length === 0) continue;

    const choix: ChoixAccord = {
      chord: { ...lecture, bassPc: sonsGraves[0].pc },
      etrangeres,
      cout: -gain,
    };

    if (meilleur === null || choix.cout < meilleur.cout) meilleur = choix;
  }

  return meilleur;
}
```

- [ ] **Step 4: Lancer les tests, régler le score jusqu'au vert**

Run: `npx vitest run src/lib/chord-choice.test.ts`

**C'est ici que le travail est long.** Les pondérations (`1.5` du temps fort, `COUT_LEGITIME`, `COUT_ANOMALIE`, `COUT_QUINTE_OMISE`) n'ont **pas de valeur « vraie »** : ce sont des réglages. Si un test échoue, règle le SCORE — jamais l'assertion. Et documente en commentaire ce qu'un réglage a corrigé : c'est la seule trace de pourquoi il vaut ce qu'il vaut.

- [ ] **Step 5: Vérifier la non-régression complète**

Run: `npx vitest run`
Expected: PASS — les 161 tests d'origine sont intacts (aucun module existant n'a changé de comportement).

- [ ] **Step 6: Commit**

```bash
git add src/lib/chord-choice.ts src/lib/chord-choice.test.ts
git commit -m "feat(analyse): choisir l'accord par le cout, les etrangeres comprises"
```

---

## Task 6 : Brancher la chaîne (route, prompt IA, UI)

**Files:**
- Modify: `src/app/api/analyse-partition/route.ts`
- Modify: `src/app/api/analyse-partition/commentaire/route.ts`
- Modify: `src/components/AnalysePartition.tsx`
- Test: `src/lib/analyse-pipeline.test.ts` (étendre)

- [ ] **Step 1: Étendre le test de bout en bout AVANT de toucher la route**

Dans `src/lib/analyse-pipeline.test.ts`, ajouter un second choral, **orné** : la même harmonie que le premier, mais avec une note de passage à la soprano, un retard 4-3 sur la cadence, et une pédale de tonique à la basse sur les deux derniers accords.

Le contrôle : **l'harmonie doit être la MÊME que celle du choral nu** (`I → V6/5 → I → V7/V ‖ V → I`), et les ornements doivent être nommés (`passage`, `retard`, `pedale`). C'est la démonstration que l'ornement ne trouble plus l'analyse.

Le test existant (choral nu) doit rester vert **sans être modifié** : c'est le garde-fou.

- [ ] **Step 2: Réécrire la chaîne dans la route**

`src/app/api/analyse-partition/route.ts` — remplacer `sliceByBeat` + `mergeSlices` + `identifyChordFromNotes` par :

```ts
const score = parseMusicXML(xml);
const carte = carteMelodique(score.notes);
const spans = spansParTemps(score);

// Deux passes : le choix de l'accord a besoin de l'accord PRÉCÉDENT (le retard s'y
// prépare), et la classification des étrangères a besoin du SUIVANT (l'anticipation
// s'y résout). On choisit donc tous les accords d'abord, on classe ensuite.
const choix = spans.map((span, i) => ({
  span,
  choix: choisirAccord(span, carte, {
    pcsAccordPrecedent: /* les pcs du choix précédent, calculé au fil de l'eau */,
  }),
}));
```

Puis, une fois les accords choisis : fusionner les spans consécutifs de même accord (rythme harmonique), classer les notes étrangères avec `classer(...)` (en fournissant `pcsAccordPrecedent`, `pcsAccordSuivant`, `tempsFort` = `span.beat === 1`, `traverseAccords` = la note déborde du segment fusionné), puis `analyzeChord` → `annotateResolutions` → `buildChromaEvents` comme aujourd'hui.

`AnalysisResult` gagne, sur chaque accord :

```ts
notesEtrangeres?: Array<{ nom: string; type: string | null; voix: string }>;
```

où `nom` vient de `noteNameFr(step, alter)` et `type` du `LIBELLE_ETRANGERE`.

- [ ] **Step 3: Le prompt du commentaire IA**

Dans `commentaire/route.ts`, ajouter au `SYSTEM_PROMPT` :

```
Chaque accord peut porter des "notesEtrangeres" : retard, appoggiature, note de passage, broderie, échappée, anticipation, pédale. Nomme-les et explique leur effet — c'est exactement ce qu'un professeur d'harmonie attend. Un retard crée une dissonance qui se résout par degré conjoint descendant ; une pédale maintient une note sous des harmonies qui lui deviennent étrangères ; une appoggiature accentue en retardant le son attendu.
```

- [ ] **Step 4: L'UI**

Dans `AnalysePartition.tsx` : une colonne (ou une ligne de repli) « Notes étrangères » dans le tableau des mesures, listant `nom (type)` — ex. « Ré (note de passage) ». Style inline, comme le reste du fichier.

- [ ] **Step 5: Vérifier**

Run: `npx vitest run` → tout vert, **le choral nu compris**.
Run: `NODE_OPTIONS="--max-old-space-size=8192" npm run build` → succès.
**Ne JAMAIS lancer `npx tsc --noEmit`.**

- [ ] **Step 6: Commit**

```bash
git add src/app/api/analyse-partition src/components/AnalysePartition.tsx src/lib/analyse-pipeline.test.ts
git commit -m "feat(analyse): la chaine ecarte et nomme les notes etrangeres"
```

---

## Task 7 : Vérification d'ensemble

- [ ] **Step 1:** `npx vitest run` — tout vert.
- [ ] **Step 2:** `NODE_OPTIONS="--max-old-space-size=8192" npm run build` — succès.
- [ ] **Step 3: Contrôle musical.** `npm run dev`, importer dans `/analyse-partition` :
  - un **choral de Bach** — l'harmonie ne doit pas avoir bougé par rapport à avant ce chantier, et les retards de cadence doivent être nommés ;
  - une **phrase ornementée** (Mozart, Chopin) — les broderies et notes de passage doivent être nommées, et l'harmonie ne doit pas en être troublée.

  **C'est ce contrôle, et non les tests, qui dit si le sous-projet a atteint son but.** Rapporter ce qu'on voit, sans l'enjoliver.

---

## Auto-relecture

**Couverture de la spec :**
- Grille : visibilité à chaque attaque (`notesSoundingDuring`), décision au temps (`spansParTemps`) → Task 2. ✅
- Lignes mélodiques, voix non monodiques → Task 1. ✅
- Choix par le coût, notes expliquées vs abandonnées → Task 5. ✅
- Taxonomie complète et nommée → Task 4. ✅
- Retard vs appoggiature tranchés par la seule PRÉPARATION → Task 4, deux tests jumeaux. ✅
- Ordre des règles (retard → pédale → anticipation → conjoint) → Task 4, testé. ✅
- La pédale corrige le chiffrage → Task 5 (`bassPc` = plus grave son de l'accord), testé. ✅
- Intégration route / prompt IA / UI → Task 6. ✅
- Non-régression du choral à quatre voix → Tasks 2, 3, 5, 6. ✅

**Cohérence des types :** `ParsedNote` (B) → `Span` (Task 2) → `choisirAccord` (Task 5) ; `CarteMelodique` (Task 1) est consommée par les Tasks 4 et 5 ; `Chord` (A/B) est rendu par `lecturesAccord` (Task 3) et par `choisirAccord` ; `TypeEtrangere` (Task 4) remonte jusqu'à l'UI (Task 6).

**Le point de vigilance, redit :** les pondérations de la Task 5 sont des réglages, pas des vérités. Elles se calent sur des extraits dont l'analyse est connue. Un test qui échoue là-bas se corrige **en réglant le score**, jamais en affaiblissant l'assertion.
