# Modèle de notes, basse et renversements — Plan d'implémentation

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Donner à l'analyseur de partitions un vrai modèle de notes (durées, tenues, voix multiples, orthographe, basse) pour qu'il produise enfin les bons accords verticaux, avec renversements et chiffrage français.

**Architecture :** Deux nouveaux modules purs — `src/lib/musicxml-parse.ts` (XML → timeline de notes réelles, en corrigeant `<backup>` et les liaisons) et `src/lib/harmony-segmentation.ts` (timeline → tranches de notes sonnantes, fusionnées aux changements d'harmonie). Le moteur `src/lib/harmonic-analysis.ts` reçoit désormais la basse et l'orthographe : il identifie les accords par score plutôt que par ordre de liste, chiffre les renversements, et reconnaît les sixtes augmentées. La route et l'UI consomment des segments.

**Tech Stack :** TypeScript, vitest, Next.js 16 (App Router). Aucune dépendance nouvelle.

**Spec :** `docs/superpowers/specs/2026-07-02-analyse-basse-et-renversements-design.md`

**Contraintes d'environnement :**
- `npx tsc --noEmit` **sature la mémoire** sur ce poste. Le contrôle d'intégration est `NODE_OPTIONS="--max-old-space-size=8192" npm run build`.
- Les tests tournent avec `npx vitest run` (vitest est déjà configuré).
- Pas de `any`, TypeScript strict. Commentaires et identifiants en français, comme le reste du moteur.

**Écart assumé par rapport à la spec :** la spec annonçait « Do6 vs Am7 : le même ensemble de notes donne un accord de Do ou un Am7 selon la basse ». C'est musicalement faux en harmonie classique : Do-Mi-Sol-La **est** un Am7 dans les deux cas — la basse ne change pas la fondamentale, elle change le **renversement** (La à la basse → `vi7` ; Do à la basse → `vi6/5`). C'est ce que le plan implémente, et c'est ce que vérifie le test.

---

## Structure des fichiers

| Fichier | Responsabilité |
|---|---|
| `src/lib/musicxml-parse.ts` *(nouveau)* | XML → `ParsedScore` : notes réelles avec onset, durée, octave, orthographe, voix. Traite `<backup>`, `<forward>`, `<tie>`, `<chord/>`, `<rest>`, `<grace>`, `<divisions>`. Aucune théorie harmonique. |
| `src/lib/harmony-segmentation.ts` *(nouveau)* | `ParsedScore` → `Slice[]` : quelles notes sonnent à chaque temps (tenues comprises), quelle est la basse. Fusion des tranches identiques (rythme harmonique). |
| `src/lib/harmonic-analysis.ts` *(modifié)* | Identification par score guidée par la basse ; renversements et chiffrage français ; sixtes augmentées à l'orthographe. |
| `src/app/api/analyse-partition/route.ts` *(modifié)* | Ne parse plus de XML : orchestre parseur → segmentation → moteur. |
| `src/app/api/analyse-partition/commentaire/route.ts` *(modifié)* | Prompt système : chiffrage et sixtes augmentées. |
| `src/components/AnalysePartition.tsx` *(modifié)* | Colonne Basse, chiffrage dans le degré, style de la nouvelle catégorie. |

---

## Task 1 : Le parseur MusicXML (`musicxml-parse.ts`)

**Files:**
- Create: `src/lib/musicxml-parse.ts`
- Test: `src/lib/musicxml-parse.test.ts`

- [ ] **Step 1: Écrire les tests qui échouent**

Créer `src/lib/musicxml-parse.test.ts` :

```ts
import { describe, it, expect } from "vitest";
import { parseMusicXML, noteNameFr, TPQ } from "./musicxml-parse";

/** Enveloppe minimale : une partie, des mesures fournies telles quelles. */
function partition(mesures: string, divisions = 1): string {
  return `<score-partwise><part id="P1">${mesures.replace(
    "@ATTR@",
    `<attributes><divisions>${divisions}</divisions><key><fifths>0</fifths></key>` +
      `<time><beats>4</beats><beat-type>4</beat-type></time></attributes>`,
  )}</part></score-partwise>`;
}

function note(step: string, octave: number, duration: number, extra = ""): string {
  return `<note><pitch><step>${step}</step><octave>${octave}</octave></pitch>` +
    `<duration>${duration}</duration>${extra}</note>`;
}

describe("parseMusicXML — en-tête", () => {
  it("lit l'armure, le mode et la signature", () => {
    const s = parseMusicXML(partition(`<measure number="1">@ATTR@${note("C", 4, 4)}</measure>`));
    expect(s.fifths).toBe(0);
    expect(s.mode).toBe("major");
    expect(s.signature).toBe("4/4");
  });
});

describe("parseMusicXML — <backup> (LE bug)", () => {
  it("place les deux voix EN MÊME TEMPS, pas l'une après l'autre", () => {
    const xml = partition(
      `<measure number="1">@ATTR@` +
        `${note("C", 5, 4, "<voice>1</voice>")}` +
        `<backup><duration>4</duration></backup>` +
        `${note("E", 3, 4, "<voice>2</voice>")}` +
        `</measure>`,
    );
    const s = parseMusicXML(xml);
    expect(s.notes).toHaveLength(2);
    expect(s.notes.map((n) => n.onset)).toEqual([0, 0]);
    expect(s.notes.map((n) => n.measure)).toEqual([1, 1]);
    expect(s.notes.map((n) => n.beat)).toEqual([1, 1]);
  });

  it("<forward> avance le curseur", () => {
    const xml = partition(
      `<measure number="1">@ATTR@` +
        `<forward><duration>2</duration></forward>${note("G", 4, 2)}</measure>`,
    );
    const s = parseMusicXML(xml);
    expect(s.notes[0].onset).toBe(2 * TPQ);
    expect(s.notes[0].beat).toBe(3);
  });
});

describe("parseMusicXML — durées et liaisons", () => {
  it("une note liée sonne d'un seul tenant, sans seconde attaque", () => {
    const xml = partition(
      `<measure number="1">@ATTR@` +
        `${note("C", 4, 2, `<tie type="start"/><voice>1</voice>`)}` +
        `${note("C", 4, 2, `<tie type="stop"/><voice>1</voice>`)}` +
        `</measure>`,
    );
    const s = parseMusicXML(xml);
    expect(s.notes).toHaveLength(1);
    expect(s.notes[0].duration).toBe(4 * TPQ);
  });

  it("une liaison par-dessus la barre de mesure est fusionnée", () => {
    const xml = partition(
      `<measure number="1">@ATTR@${note("C", 4, 4, `<tie type="start"/><voice>1</voice>`)}</measure>` +
        `<measure number="2">${note("C", 4, 4, `<tie type="stop"/><voice>1</voice>`)}</measure>`,
    );
    const s = parseMusicXML(xml);
    expect(s.notes).toHaveLength(1);
    expect(s.notes[0].duration).toBe(8 * TPQ);
    expect(s.measures).toHaveLength(2);
  });

  it("les notes de <chord/> partagent l'onset de la précédente", () => {
    const xml = partition(
      `<measure number="1">@ATTR@` +
        `${note("C", 4, 4)}` +
        `<note><chord/><pitch><step>E</step><octave>4</octave></pitch><duration>4</duration></note>` +
        `<note><chord/><pitch><step>G</step><octave>4</octave></pitch><duration>4</duration></note>` +
        `</measure>`,
    );
    const s = parseMusicXML(xml);
    expect(s.notes.map((n) => n.onset)).toEqual([0, 0, 0]);
  });

  it("les silences avancent le curseur mais ne produisent pas de note", () => {
    const xml = partition(
      `<measure number="1">@ATTR@<note><rest/><duration>2</duration></note>${note("G", 4, 2)}</measure>`,
    );
    const s = parseMusicXML(xml);
    expect(s.notes).toHaveLength(1);
    expect(s.notes[0].beat).toBe(3);
  });

  it("les notes d'ornement (<grace>) sont ignorées et n'avancent pas le curseur", () => {
    const xml = partition(
      `<measure number="1">@ATTR@` +
        `<note><grace/><pitch><step>D</step><octave>4</octave></pitch></note>` +
        `${note("C", 4, 4)}</measure>`,
    );
    const s = parseMusicXML(xml);
    expect(s.notes).toHaveLength(1);
    expect(s.notes[0].step).toBe("C");
    expect(s.notes[0].onset).toBe(0);
  });

  it("normalise des <divisions> différentes sur la même grille de ticks", () => {
    const a = parseMusicXML(partition(`<measure number="1">@ATTR@${note("C", 4, 4)}</measure>`, 1));
    const b = parseMusicXML(partition(`<measure number="1">@ATTR@${note("C", 4, 96)}</measure>`, 24));
    expect(a.notes[0].duration).toBe(b.notes[0].duration);
    expect(a.notes[0].duration).toBe(4 * TPQ);
  });
});

describe("parseMusicXML — hauteur et orthographe", () => {
  it("conserve l'orthographe : un Mi bémol n'est pas un Ré dièse", () => {
    const xml = partition(
      `<measure number="1">@ATTR@` +
        `<note><pitch><step>E</step><alter>-1</alter><octave>4</octave></pitch><duration>4</duration></note>` +
        `</measure>`,
    );
    const n = parseMusicXML(xml).notes[0];
    expect(n.step).toBe("E");
    expect(n.alter).toBe(-1);
    expect(n.pc).toBe(3);
    expect(n.midi).toBe(63);
    expect(noteNameFr(n.step, n.alter)).toBe("Mib");
  });

  it("noteNameFr rend les altérations", () => {
    expect(noteNameFr("F", 1)).toBe("Fa#");
    expect(noteNameFr("A", -1)).toBe("Lab");
    expect(noteNameFr("D", 0)).toBe("Ré");
  });
});

describe("parseMusicXML — plusieurs parties", () => {
  it("aligne les parties sur la même grille temporelle", () => {
    const xml =
      `<score-partwise>` +
      `<part id="P1"><measure number="1">` +
      `<attributes><divisions>1</divisions><key><fifths>0</fifths></key></attributes>` +
      `${note("C", 5, 4)}</measure></part>` +
      `<part id="P2"><measure number="1">` +
      `<attributes><divisions>2</divisions></attributes>` +
      `${note("C", 3, 8)}</measure></part>` +
      `</score-partwise>`;
    const s = parseMusicXML(xml);
    expect(s.notes).toHaveLength(2);
    expect(s.notes.map((n) => n.onset)).toEqual([0, 0]);
    expect(s.notes.map((n) => n.duration)).toEqual([4 * TPQ, 4 * TPQ]);
  });
});
```

- [ ] **Step 2: Lancer les tests, vérifier qu'ils échouent**

Run: `npx vitest run src/lib/musicxml-parse.test.ts`
Expected: FAIL — `Failed to resolve import "./musicxml-parse"`.

- [ ] **Step 3: Écrire le parseur**

Créer `src/lib/musicxml-parse.ts` :

```ts
/**
 * lib/musicxml-parse.ts
 * Harmonia — Lecture d'un MusicXML en TIMELINE DE NOTES RÉELLES (fonctions pures,
 * sans HTTP ni théorie harmonique).
 *
 * Ce module remplace le parsing « au fil des <note> » qui vivait dans la route et
 * qui portait deux défauts rédhibitoires :
 *  - il ignorait <backup>, la balise par laquelle MusicXML recule le curseur pour
 *    écrire une SECONDE VOIX. Dans tout choral, toute pièce de piano, la voix 2
 *    était donc placée APRÈS la voix 1 : les onsets étaient faux, donc les accords ;
 *  - il n'enregistrait chaque note qu'à son ATTAQUE, sans durée. Une basse en ronde
 *    disparaissait dès le 2e temps, et les accords suivants étaient analysés sans elle.
 */

/**
 * Résolution interne : 768 ticks par noire. Divisible par 2, 3, 4, 6, 8, 12, 16…
 * — les <divisions> de chaque partie y sont converties, ce qui permet d'aligner
 * sur une même grille des parties qui n'ont pas la même résolution.
 */
export const TPQ = 768;

export interface ParsedNote {
  step: string;      // "C".."B" — l'orthographe est CONSERVÉE
  alter: number;     // -2..+2
  octave: number;
  pc: number;        // classe de hauteur (0-11), dérivée
  midi: number;      // hauteur absolue → permet de désigner la basse
  onset: number;     // ticks, depuis le début de la pièce
  duration: number;  // ticks
  measure: number;
  beat: number;      // temps dans la mesure (1-based, unité = noire)
  voice: string;
  part: string;
}

export interface ParsedMeasure {
  numero: number;
  start: number;   // ticks
  length: number;  // ticks
}

export interface ParsedScore {
  fifths: number;
  mode: "major" | "minor";
  signature: string;
  notes: ParsedNote[];
  measures: ParsedMeasure[];
}

const STEP_PC: Record<string, number> = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };
const STEP_FR: Record<string, string> = {
  C: "Do", D: "Ré", E: "Mi", F: "Fa", G: "Sol", A: "La", B: "Si",
};

/** Nom français d'une note, ORTHOGRAPHE COMPRISE : "Lab", pas "Sol#". */
export function noteNameFr(step: string, alter: number): string {
  const base = STEP_FR[step] ?? step;
  if (alter > 0) return base + "#".repeat(alter);
  if (alter < 0) return base + "b".repeat(-alter);
  return base;
}

function getTag(xml: string, tag: string): string {
  const m = new RegExp(`<${tag}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${tag}>`).exec(xml);
  return m ? m[1].trim() : "";
}

function intTag(xml: string, tag: string, fallback = 0): number {
  const n = parseInt(getTag(xml, tag), 10);
  return Number.isFinite(n) ? n : fallback;
}

/** Note telle que lue dans une mesure : onset RELATIF à la mesure. */
interface RawNote {
  step: string;
  alter: number;
  octave: number;
  midi: number;
  measure: number;
  rel: number;       // ticks depuis le début de la mesure
  abs: number;       // ticks depuis le début de la pièce (rempli en 2e passe)
  dur: number;
  voice: string;
  part: string;
  tieStart: boolean;
  tieStop: boolean;
}

/**
 * Lecture d'une partie. Le CURSEUR est la seule notion qui compte :
 *  - une note ordinaire l'avance de sa durée ;
 *  - une note de <chord/> ne l'avance pas et reprend l'onset de la précédente ;
 *  - <backup> le RECULE (c'est ainsi qu'on revient au début de la mesure pour
 *    écrire la voix suivante) et <forward> l'avance.
 */
function parsePart(content: string, partId: string): {
  notes: RawNote[];
  lengths: Map<number, number>;
} {
  const notes: RawNote[] = [];
  const lengths = new Map<number, number>();

  let divisions = 1; // divisions par noire, en vigueur (peut changer en cours de route)
  let seq = 0;

  const measureRe = /<measure\b([^>]*)>([\s\S]*?)<\/measure>/g;
  let mm: RegExpExecArray | null;

  while ((mm = measureRe.exec(content)) !== null) {
    seq++;
    const numero = parseInt(/number="(\d+)"/.exec(mm[1])?.[1] ?? "", 10) || seq;
    const body = mm[2];

    const div = intTag(body, "divisions", 0);
    if (div > 0) divisions = div;
    const toTicks = (d: number) => Math.round((d * TPQ) / divisions);

    let cursor = 0;    // ticks
    let prevOnset = 0; // onset de la dernière note NON-<chord/>
    let maxCursor = 0;

    const elemRe =
      /<note\b[^>]*>([\s\S]*?)<\/note>|<backup\b[^>]*>([\s\S]*?)<\/backup>|<forward\b[^>]*>([\s\S]*?)<\/forward>/g;
    let em: RegExpExecArray | null;

    while ((em = elemRe.exec(body)) !== null) {
      const [, noteBody, backupBody, forwardBody] = em;

      if (backupBody !== undefined) {
        cursor = Math.max(0, cursor - toTicks(intTag(backupBody, "duration")));
        continue;
      }
      if (forwardBody !== undefined) {
        cursor += toTicks(intTag(forwardBody, "duration"));
        maxCursor = Math.max(maxCursor, cursor);
        continue;
      }
      if (noteBody === undefined) continue;

      // Ornement : pas de durée, pas d'harmonie. On l'ignore, curseur inchangé.
      if (/<grace\b/.test(noteBody)) continue;

      const isChord = /<chord\s*\/?>/.test(noteBody);
      const dur = toTicks(intTag(noteBody, "duration"));
      const onset = isChord ? prevOnset : cursor;

      if (!isChord) {
        cursor += dur;
        prevOnset = onset;
        maxCursor = Math.max(maxCursor, cursor);
      }

      if (/<rest\b/.test(noteBody)) continue;

      const pitch = getTag(noteBody, "pitch");
      if (!pitch) continue;
      const step = getTag(pitch, "step");
      if (STEP_PC[step] === undefined) continue;

      const alter = Math.round(parseFloat(getTag(pitch, "alter") || "0")) || 0;
      const octave = intTag(pitch, "octave", 4);

      notes.push({
        step,
        alter,
        octave,
        midi: (octave + 1) * 12 + STEP_PC[step] + alter,
        measure: numero,
        rel: onset,
        abs: 0,
        dur,
        voice: getTag(noteBody, "voice") || "1",
        part: partId,
        tieStart: /<tie\b[^>]*type="start"/.test(noteBody),
        tieStop: /<tie\b[^>]*type="stop"/.test(noteBody),
      });
    }

    lengths.set(numero, Math.max(lengths.get(numero) ?? 0, maxCursor));
  }

  return { notes, lengths };
}

/**
 * Liaisons de TENUE : une note liée ne se réattaque pas, elle prolonge la
 * précédente. On fusionne donc les durées, y compris par-dessus la barre de mesure
 * (d'où l'usage d'onsets ABSOLUS ici).
 */
function mergeTies(raws: RawNote[]): RawNote[] {
  const sorted = [...raws].sort((a, b) => a.abs - b.abs);
  const out: RawNote[] = [];
  const ouvertes = new Map<string, RawNote>(); // partie|voix|hauteur

  for (const n of sorted) {
    const cle = `${n.part}|${n.voice}|${n.midi}`;
    const tenue = ouvertes.get(cle);

    if (n.tieStop && tenue && tenue.abs + tenue.dur === n.abs) {
      tenue.dur += n.dur;
      if (!n.tieStart) ouvertes.delete(cle);
      continue; // pas de nouvelle attaque
    }

    out.push(n);
    if (n.tieStart) ouvertes.set(cle, n);
    else ouvertes.delete(cle);
  }

  return out;
}

export function parseMusicXML(xml: string): ParsedScore {
  const fifths = intTag(xml, "fifths", 0);
  const mode: "major" | "minor" = getTag(xml, "mode") === "minor" ? "minor" : "major";
  const beats = getTag(xml, "beats");
  const beatType = getTag(xml, "beat-type");
  const signature = beats && beatType ? `${beats}/${beatType}` : "4/4";

  const raws: RawNote[] = [];
  const lengths = new Map<number, number>();

  const partRe = /<part\b([^>]*)>([\s\S]*?)<\/part>/g;
  let pm: RegExpExecArray | null;
  let idx = 0;

  while ((pm = partRe.exec(xml)) !== null) {
    idx++;
    const partId = /id="([^"]+)"/.exec(pm[1])?.[1] ?? `P${idx}`;
    const lu = parsePart(pm[2], partId);
    raws.push(...lu.notes);
    // Les parties d'un MusicXML valide ont les mêmes mesures ; on retient la
    // lecture la plus longue de chacune, pour rester robuste aux parties creuses.
    for (const [numero, len] of lu.lengths) {
      lengths.set(numero, Math.max(lengths.get(numero) ?? 0, len));
    }
  }

  const measures: ParsedMeasure[] = [];
  let start = 0;
  for (const numero of [...lengths.keys()].sort((a, b) => a - b)) {
    const length = lengths.get(numero) || 4 * TPQ;
    measures.push({ numero, start, length });
    start += length;
  }
  const startOf = new Map(measures.map((m) => [m.numero, m.start]));

  for (const r of raws) r.abs = (startOf.get(r.measure) ?? 0) + r.rel;

  const notes: ParsedNote[] = mergeTies(raws)
    .map((r) => ({
      step: r.step,
      alter: r.alter,
      octave: r.octave,
      pc: (((STEP_PC[r.step] + r.alter) % 12) + 12) % 12,
      midi: r.midi,
      onset: r.abs,
      duration: r.dur,
      measure: r.measure,
      beat: Math.floor(r.rel / TPQ) + 1,
      voice: r.voice,
      part: r.part,
    }))
    .sort((a, b) => a.onset - b.onset || a.midi - b.midi);

  return { fifths, mode, signature, notes, measures };
}
```

- [ ] **Step 4: Lancer les tests, vérifier qu'ils passent**

Run: `npx vitest run src/lib/musicxml-parse.test.ts`
Expected: PASS (12 tests).

- [ ] **Step 5: Commit**

```bash
git add src/lib/musicxml-parse.ts src/lib/musicxml-parse.test.ts
git commit -m "feat(analyse): parseur MusicXML avec durées, tenues et voix multiples"
```

---

## Task 2 : La segmentation (`harmony-segmentation.ts`)

**Files:**
- Create: `src/lib/harmony-segmentation.ts`
- Test: `src/lib/harmony-segmentation.test.ts`

- [ ] **Step 1: Écrire les tests qui échouent**

Créer `src/lib/harmony-segmentation.test.ts` :

```ts
import { describe, it, expect } from "vitest";
import { parseMusicXML, TPQ, type ParsedNote } from "./musicxml-parse";
import { notesSoundingAt, sliceByBeat, mergeSlices, type Slice } from "./harmony-segmentation";

function n(midi: number, onset: number, duration: number): ParsedNote {
  return {
    step: "C", alter: 0, octave: 4, pc: ((midi % 12) + 12) % 12, midi,
    onset, duration, measure: 1, beat: 1, voice: "1", part: "P1",
  };
}

describe("notesSoundingAt", () => {
  it("retient les notes TENUES, pas seulement celles qui attaquent", () => {
    const notes = [n(48, 0, 4 * TPQ), n(60, 2 * TPQ, TPQ)];
    expect(notesSoundingAt(notes, 0).map((x) => x.midi)).toEqual([48]);
    expect(notesSoundingAt(notes, 2 * TPQ).map((x) => x.midi)).toEqual([48, 60]);
    expect(notesSoundingAt(notes, 3 * TPQ).map((x) => x.midi)).toEqual([48]);
  });

  it("une note éteinte ne sonne plus (borne de fin exclusive)", () => {
    expect(notesSoundingAt([n(60, 0, TPQ)], TPQ)).toHaveLength(0);
  });
});

describe("sliceByBeat — la basse tenue ne disparaît plus", () => {
  it("une ronde à la basse reste présente aux temps 2, 3 et 4", () => {
    // Basse : Do2 en ronde. Dessus : Do-Ré-Mi-Fa en noires (2e voix, via <backup>).
    const xml =
      `<score-partwise><part id="P1"><measure number="1">` +
      `<attributes><divisions>1</divisions><key><fifths>0</fifths></key>` +
      `<time><beats>4</beats><beat-type>4</beat-type></time></attributes>` +
      `<note><pitch><step>C</step><octave>2</octave></pitch><duration>4</duration><voice>1</voice></note>` +
      `<backup><duration>4</duration></backup>` +
      ["C", "D", "E", "F"]
        .map(
          (s) =>
            `<note><pitch><step>${s}</step><octave>5</octave></pitch>` +
            `<duration>1</duration><voice>2</voice></note>`,
        )
        .join("") +
      `</measure></part></score-partwise>`;

    const slices = sliceByBeat(parseMusicXML(xml));
    expect(slices).toHaveLength(4);
    expect(slices.map((s) => s.beat)).toEqual([1, 2, 3, 4]);
    // La basse est la même sur les quatre temps : c'est la ronde.
    expect(slices.every((s) => s.bass.midi === 36)).toBe(true);
    expect(slices[3].pcs.sort((a, b) => a - b)).toEqual([0, 5]); // Do (basse) + Fa
  });
});

describe("mergeSlices — rythme harmonique", () => {
  const s = (beat: number, sig: string): Slice =>
    ({ measure: 1, beat, onset: beat * TPQ, notes: [], bass: n(36, 0, TPQ), pcs: [], _sig: sig } as unknown as Slice & { _sig: string });
  const sig = (x: Slice) => (x as unknown as { _sig: string })._sig;

  it("fusionne les temps consécutifs portant la même harmonie", () => {
    const out = mergeSlices([s(1, "C"), s(2, "C"), s(3, "G"), s(4, "C")], sig);
    expect(out.map((x) => x.beat)).toEqual([1, 3, 4]);
  });

  it("une signature vide (accord non identifié) ne fusionne jamais", () => {
    const out = mergeSlices([s(1, ""), s(2, ""), s(3, "")], sig);
    expect(out).toHaveLength(3);
  });
});
```

- [ ] **Step 2: Lancer les tests, vérifier qu'ils échouent**

Run: `npx vitest run src/lib/harmony-segmentation.test.ts`
Expected: FAIL — `Failed to resolve import "./harmony-segmentation"`.

- [ ] **Step 3: Écrire la segmentation**

Créer `src/lib/harmony-segmentation.ts` :

```ts
/**
 * lib/harmony-segmentation.ts
 * Harmonia — « Quelles notes SONNENT à l'instant T », puis rythme harmonique.
 *
 * Une note sonne de son attaque à son extinction — pas seulement au temps où elle
 * est écrite. C'est toute la différence entre un accord complet et un accord privé
 * de sa basse.
 */

import { TPQ, type ParsedNote, type ParsedScore } from "./musicxml-parse";

export interface Slice {
  measure: number;
  beat: number;        // 1-based, unité = noire
  onset: number;       // ticks absolus
  notes: ParsedNote[]; // toutes les notes sonnantes (attaques ET tenues)
  bass: ParsedNote;    // la plus grave (midi minimal) — c'est ELLE qui chiffre
  pcs: number[];       // classes de hauteurs uniques
}

/** Notes sonnant à l'instant `t` : attaquées au plus tard en `t`, pas encore éteintes. */
export function notesSoundingAt(notes: ParsedNote[], t: number): ParsedNote[] {
  return notes.filter((n) => n.onset <= t && t < n.onset + n.duration);
}

/** Une tranche par temps (noire) sur toute la partition. Les temps muets sont omis. */
export function sliceByBeat(score: ParsedScore): Slice[] {
  const out: Slice[] = [];

  for (const m of score.measures) {
    const nbTemps = Math.max(1, Math.ceil(m.length / TPQ));
    for (let beat = 1; beat <= nbTemps; beat++) {
      const onset = m.start + (beat - 1) * TPQ;
      if (onset >= m.start + m.length) break;

      const notes = notesSoundingAt(score.notes, onset);
      if (notes.length === 0) continue;

      const bass = notes.reduce((grave, n) => (n.midi < grave.midi ? n : grave));
      out.push({
        measure: m.numero,
        beat,
        onset,
        notes,
        bass,
        pcs: [...new Set(notes.map((n) => n.pc))],
      });
    }
  }

  return out;
}

/**
 * RYTHME HARMONIQUE — fusionne les tranches consécutives portant la même harmonie.
 *
 * `signature` rend l'identité harmonique d'une tranche (fondamentale, qualité,
 * basse). Deux tranches de signature identique n'en font qu'une : on garde la
 * PREMIÈRE, celle où l'accord change — c'est là qu'un musicien annote, et non sur
 * chaque temps d'une harmonie tenue.
 *
 * Une signature VIDE (accord non identifié) ne fusionne jamais : deux tranches
 * illisibles ne sont pas « la même harmonie ».
 */
export function mergeSlices(slices: Slice[], signature: (s: Slice) => string): Slice[] {
  const out: Slice[] = [];
  let precedente = "";

  for (const s of slices) {
    const sig = signature(s);
    if (sig !== "" && sig === precedente) continue;
    out.push(s);
    precedente = sig;
  }

  return out;
}
```

- [ ] **Step 4: Lancer les tests, vérifier qu'ils passent**

Run: `npx vitest run src/lib/harmony-segmentation.test.ts`
Expected: PASS (5 tests).

- [ ] **Step 5: Commit**

```bash
git add src/lib/harmony-segmentation.ts src/lib/harmony-segmentation.test.ts
git commit -m "feat(analyse): segmentation par notes sonnantes et rythme harmonique"
```

---

## Task 3 : Basse, renversements et chiffrage français

**Files:**
- Modify: `src/lib/harmonic-analysis.ts`
- Test: `src/lib/harmonic-analysis.test.ts` (ajouts + mise à jour)

**Contexte pour l'implémenteur :** le moteur existant chiffre chaque accord avec `romanOfDegree(deg, quality)` et une table `QUALITY_SUFFIX`. On remplace ce suffixe unique par **symbole de qualité + chiffrage du renversement**. Le renversement se déduit de la basse réelle. Attention : la fondamentale d'une 7e diminuée n'est arrêtée qu'après `annotateResolutions` — chaque site qui construit une étiquette doit donc recalculer le renversement à partir de la fondamentale qu'il vient de retenir. C'est pourquoi `inversionOf` est appelée localement partout, et non une fois pour toutes.

- [ ] **Step 1: Écrire les tests qui échouent**

Ajouter à la fin de `src/lib/harmonic-analysis.test.ts` :

```ts
import {
  identifyChordFromNotes,
  inversionOf,
  figureOf,
} from "./harmonic-analysis";

describe("identifyChordFromNotes — la basse arbitre", () => {
  it("Do-Mi-Sol-La est un La m7, quelle que soit la basse", () => {
    const pcs = [0, 4, 7, 9];
    expect(identifyChordFromNotes(pcs, 9)?.rootPc).toBe(9); // La à la basse
    expect(identifyChordFromNotes(pcs, 0)?.rootPc).toBe(9); // Do à la basse
    expect(identifyChordFromNotes(pcs, 0)?.quality).toBe("m7");
  });

  it("préfère la lecture qui n'abandonne aucune note", () => {
    // Sol-Si-Ré-Fa : la 7e de dominante explique tout ; la triade laisserait le Fa.
    const c = identifyChordFromNotes([7, 11, 2, 5], 7);
    expect(c?.rootPc).toBe(7);
    expect(c?.quality).toBe("7");
  });

  it("à égalité, préfère la fondamentale à la basse (état fondamental)", () => {
    // 7e diminuée : les quatre notes sont candidates. La basse tranche.
    expect(identifyChordFromNotes([11, 2, 5, 8], 5)?.rootPc).toBe(5);
    expect(identifyChordFromNotes([11, 2, 5, 8], 11)?.rootPc).toBe(11);
  });

  it("conserve la basse dans l'accord rendu", () => {
    expect(identifyChordFromNotes([0, 4, 7], 4)?.bassPc).toBe(4);
  });
});

describe("inversionOf / figureOf — chiffrage français", () => {
  it("triades", () => {
    expect(inversionOf(0, "", 0)).toBe(0);
    expect(inversionOf(0, "", 4)).toBe(1);
    expect(inversionOf(0, "", 7)).toBe(2);
    expect(figureOf("", 0)).toBe("");
    expect(figureOf("", 1)).toBe("6");
    expect(figureOf("", 2)).toBe("6/4");
  });

  it("septièmes", () => {
    expect(figureOf("7", 0)).toBe("7");
    expect(figureOf("7", 1)).toBe("6/5");
    expect(figureOf("7", 2)).toBe("+4");
    expect(figureOf("7", 3)).toBe("+2");
  });

  it("une basse ÉTRANGÈRE à l'accord (pédale) n'invente pas de renversement", () => {
    expect(inversionOf(0, "", 2)).toBe(0);
  });

  it("sans basse connue, on présume l'état fondamental", () => {
    expect(inversionOf(0, "", undefined)).toBe(0);
  });
});

describe("analyzeChord — le degré porte le chiffrage", () => {
  const DO = 0;

  it("I, I6, I6/4", () => {
    const deg = (bass: number) =>
      analyzeChord(identifyChordFromNotes([0, 4, 7], bass)!, DO, "major").degree;
    expect(deg(0)).toBe("I");
    expect(deg(4)).toBe("I6");
    expect(deg(7)).toBe("I6/4");
  });

  it("V7, V6/5, V+4, V+2", () => {
    const deg = (bass: number) =>
      analyzeChord(identifyChordFromNotes([7, 11, 2, 5], bass)!, DO, "major").degree;
    expect(deg(7)).toBe("V7");
    expect(deg(11)).toBe("V6/5");
    expect(deg(2)).toBe("V+4");
    expect(deg(5)).toBe("V+2");
  });

  it("vi7 et vi6/5 — Do-Mi-Sol-La selon la basse", () => {
    const deg = (bass: number) =>
      analyzeChord(identifyChordFromNotes([0, 4, 7, 9], bass)!, DO, "major").degree;
    expect(deg(9)).toBe("vi7");
    expect(deg(0)).toBe("vi6/5");
  });

  it("le vii°7 emprunté garde son symbole et prend son chiffrage", () => {
    const c = identifyChordFromNotes([11, 2, 5, 8], 11)!;
    expect(analyzeChord(c, DO, "major").degree).toBe("vii°7");
    const c6 = identifyChordFromNotes([11, 2, 5, 8], 2)!;
    expect(analyzeChord(c6, DO, "major").degree).toBe("vii°6/5");
  });

  it("la dominante secondaire est chiffrée elle aussi", () => {
    // La7 (La-Do#-Mi-Sol) en Do majeur → V7/ii ; avec Do# à la basse → V6/5/ii.
    const deg = (bass: number) =>
      analyzeChord(identifyChordFromNotes([9, 1, 4, 7], bass)!, DO, "major").degree;
    expect(deg(9)).toBe("V7/ii");
    expect(deg(1)).toBe("V6/5/ii");
  });

  it("la basse est rendue", () => {
    const r = analyzeChord(identifyChordFromNotes([0, 4, 7], 4)!, DO, "major");
    expect(r.bassPc).toBe(4);
  });
});
```

- [ ] **Step 2: Lancer les tests, vérifier qu'ils échouent**

Run: `npx vitest run src/lib/harmonic-analysis.test.ts`
Expected: FAIL — `identifyChordFromNotes is not exported` / `inversionOf is not a function`.

- [ ] **Step 3: Implémenter dans `src/lib/harmonic-analysis.ts`**

**3a — étendre `Chord` et `ChordResult`.** Remplacer les deux interfaces :

```ts
/** Une note telle qu'ÉCRITE — l'orthographe seule distingue un Fa# d'un Solb. */
export interface SpelledNote {
  step: string;
  alter: number;
  pc: number;
}

export interface Chord {
  rootPc: number;
  rootFr: string;
  quality: string;
  pcs: number[];
  /** Hauteur de la note la plus GRAVE. C'est elle qui donne le renversement. */
  bassPc?: number;
  /** Notes du segment avec leur orthographe (pour les sixtes augmentées). */
  spelled?: SpelledNote[];
}
```

et ajouter dans `ChordResult`, après `pcs` :

```ts
  bassPc?: number;
  /** Nom français de la basse, orthographe comprise ("Lab", pas "Sol#"). */
  bassFr?: string;
```

**3b — identification par score.** Ajouter après `identifyChord` :

```ts
/**
 * Identification d'accord par SCORE, la BASSE en arbitre.
 *
 * `identifyChord` rendait le PREMIER motif de `CHORD_PATTERNS` qui collait :
 * l'ordre du tableau décidait de l'analyse. On énumère ici toutes les lectures
 * (motif × fondamentale candidate) et on retient la meilleure :
 *  1. le moins de notes INEXPLIQUÉES — une 7e complète bat la triade + une note
 *     en trop ;
 *  2. à égalité, la lecture dont la fondamentale est à la BASSE : entre plusieurs
 *     lectures aussi complètes (7e diminuée, accord symétrique), l'état
 *     fondamental prime sur le renversement ;
 *  3. à égalité encore, l'ordre de `CHORD_PATTERNS`.
 *
 * (La fondamentale d'une 7e diminuée reste ensuite soumise à `canonicalRootPc`
 * puis à la résolution : voir `annotateResolutions`.)
 */
export function identifyChordFromNotes(pcs: number[], bassPc?: number): Chord | null {
  const unique = [...new Set(pcs.map((p) => ((p % 12) + 12) % 12))];
  if (unique.length < 2) return null;

  let meilleur: { chord: Chord; restes: number; fondAuBasse: boolean; rang: number } | null = null;

  for (let rang = 0; rang < CHORD_PATTERNS.length; rang++) {
    const pattern = CHORD_PATTERNS[rang];
    if (pattern.intervals.length > unique.length) continue;

    for (const root of unique) {
      const norm = unique.map((p) => (p - root + 12) % 12);
      if (!pattern.intervals.every((iv) => norm.includes(iv))) continue;

      const restes = unique.length - pattern.intervals.length;
      const fondAuBasse = bassPc !== undefined && root === bassPc;

      const mieux =
        meilleur === null ||
        restes < meilleur.restes ||
        (restes === meilleur.restes && fondAuBasse && !meilleur.fondAuBasse) ||
        (restes === meilleur.restes &&
          fondAuBasse === meilleur.fondAuBasse &&
          rang < meilleur.rang);

      if (mieux) {
        meilleur = {
          chord: {
            rootPc: root,
            rootFr: NOTE_FR[root] ?? "?",
            quality: pattern.quality,
            pcs: unique,
            bassPc,
          },
          restes,
          fondAuBasse,
          rang,
        };
      }
    }
  }

  return meilleur ? meilleur.chord : null;
}
```

**3c — renversement et chiffrage.** Remplacer la table `QUALITY_SUFFIX` et la fonction `qualitySuffix` par :

```ts
const INTERVALS_OF: Record<string, number[]> = Object.fromEntries(
  CHORD_PATTERNS.map((p) => [p.quality, p.intervals]),
);

/**
 * Renversement d'après la BASSE RÉELLE : 0 = état fondamental, 1/2/3 = 1er, 2e, 3e.
 *
 * Si la basse n'appartient pas à l'accord (pédale, note étrangère, basse
 * inconnue), on ne chiffre pas au jugé : état fondamental. Un chiffrage inventé
 * serait pire que pas de chiffrage — il se lit comme une affirmation.
 */
export function inversionOf(rootPc: number, quality: string, bassPc?: number): number {
  if (bassPc === undefined) return 0;
  const intervals = INTERVALS_OF[quality];
  if (!intervals) return 0;
  const idx = intervals.indexOf((((bassPc - rootPc) % 12) + 12) % 12);
  return idx === -1 ? 0 : idx;
}

/**
 * Symbole de QUALITÉ accolé au chiffre romain. La CASSE du chiffre dit déjà
 * majeur/mineur ; ce symbole dit le reste (diminué, demi-diminué, augmenté,
 * 7e majeure). Il n'est jamais facultatif : « ii7 » se lit Ré m7, ce n'est pas
 * Ré-Fa-Lab-Do (iiø7).
 */
const QUALITY_MARK: Record<string, string> = {
  "": "", "m": "",
  "°": "°", "aug": "+",
  "7": "", "m7": "",
  "Maj7": "Δ", "°7": "°", "ø7": "ø",
  "sus4": "sus4", "sus2": "sus2",
};

/** Chiffrage FRANÇAIS (convention conservatoire), par renversement. */
const FIGURES_TRIADE = ["", "6", "6/4"];
const FIGURES_SEPTIEME = ["7", "6/5", "+4", "+2"];

const SEVENTHS = new Set(["7", "m7", "Maj7", "°7", "ø7"]);

/** "" | "6" | "6/4" pour les triades ; "7" | "6/5" | "+4" | "+2" pour les 7es. */
export function figureOf(quality: string, inversion: number): string {
  const table = SEVENTHS.has(quality) ? FIGURES_SEPTIEME : FIGURES_TRIADE;
  return table[inversion] ?? table[0];
}

/** Suffixe complet d'un chiffre romain : symbole de qualité + chiffrage. */
function chiffrage(quality: string, inversion: number): string {
  return (QUALITY_MARK[quality] ?? quality) + figureOf(quality, inversion);
}
```

**3d — répercuter le chiffrage sur tous les sites d'étiquetage.**

`romanOfDegree` :

```ts
/** Chiffre romain : MAJUSCULE = majeur/augmenté, minuscule = mineur/diminué. */
function romanOfDegree(deg: number, quality: string, inversion: number): string {
  const roman = ROMANS[deg - 1];
  return (isMinorish(quality) ? roman.toLowerCase() : roman) + chiffrage(quality, inversion);
}
```

`leadingPrefix` :

```ts
function leadingPrefix(quality: string, inversion: number): string {
  return "vii" + chiffrage(quality, inversion);
}
```

`empruntLabel` — signature et corps :

```ts
function empruntLabel(
  chord: { rootPc: number; quality: string; bassPc?: number },
  tonicPc: number,
  mode: "major" | "minor",
): { label: string; fonction: Fonction } | null {
  const deg = degreeOfRoot(chord.rootPc, tonicPc, mode);
  const inv = inversionOf(chord.rootPc, chord.quality, chord.bassPc);

  if (deg !== null) {
    return {
      label: romanOfDegree(deg, chord.quality, inv),
      fonction: fonctionOfDegree(deg, chord.rootPc, tonicPc, mode),
    };
  }

  const iv = (chord.rootPc - tonicPc + 12) % 12;
  const alt = ALTERED_DEGREES[mode][iv];
  if (alt === undefined) return null;

  const roman = isMinorish(chord.quality) ? alt.roman.toLowerCase() : alt.roman;
  return { label: alt.prefix + roman + chiffrage(chord.quality, inv), fonction: alt.fonction };
}
```

`leadingReading` — ajouter `bassPc` en dernier paramètre et calculer le renversement à partir de la fondamentale RETENUE :

```ts
function leadingReading(
  quality: string, pcs: number[], root: number,
  target: { num: number; label: string }, tonicPc: number, mode: "major" | "minor",
  bassPc?: number,
): {
  rootPc: number; rootFr: string; degree: string;
  degreeNum: number; fonction: Fonction; categorie: Categorie; cible?: string;
} {
  // Le renversement dépend de la fondamentale que l'on vient de retenir : pour une
  // 7e diminuée, elle peut changer d'une lecture à l'autre. On le recalcule ici.
  const inv = inversionOf(root, quality, bassPc);
  const commun = {
    rootPc: root,
    rootFr: NOTE_FR[root] ?? "?",
    fonction: "D" as Fonction,
  };

  if (isTonicTarget(target)) {
    const dia = diatonicSet(tonicPc, mode);
    return {
      ...commun,
      degree: leadingPrefix(quality, inv),
      degreeNum: 7,
      categorie: pcs.every((pc) => dia.has(pc)) ? "diatonique" : "emprunt",
    };
  }

  return {
    ...commun,
    degree: leadingPrefix(quality, inv) + "/" + target.label,
    degreeNum: 0,
    categorie: "sensible_degre",
    cible: target.label,
  };
}
```

`analyzeChord` — `base` porte la basse, et les règles 1, 2 (dominante secondaire), 3 et 5 utilisent le chiffrage :

```ts
export function analyzeChord(
  chord: Chord, tonicPc: number, mode: "major" | "minor",
): ChordResult {
  const rootPc = canonicalRootPc(chord, tonicPc);
  const inv = inversionOf(rootPc, chord.quality, chord.bassPc);

  const base = {
    rootPc,
    rootFr: NOTE_FR[rootPc] ?? chord.rootFr,
    quality: chord.quality,
    pcs: chord.pcs,
    bassPc: chord.bassPc,
    bassFr: chord.bassPc === undefined ? undefined : NOTE_FR[chord.bassPc],
  };
  // … règle 1 : romanOfDegree(deg, chord.quality, inv)
  // … règle 2 (dominante secondaire) : "V" + chiffrage(chord.quality, inv) + "/" + t.label
  // … règle 3 : leadingReading(..., tonicPc, mode, chord.bassPc)
  // … règle 5 (napolitain) : degree: "bII" + figureOf("", inv)
}
```

Les quatre remplacements exacts, dans le corps existant :

| Avant | Après |
|---|---|
| `degree: romanOfDegree(deg, chord.quality),` | `degree: romanOfDegree(deg, chord.quality, inv),` |
| `degree: (chord.quality === "7" ? "V7/" : "V/") + t.label,` | `degree: "V" + chiffrage(chord.quality, inv) + "/" + t.label,` |
| `...leadingReading(chord.quality, chord.pcs, meilleur.root, meilleur.target, tonicPc, mode),` | `...leadingReading(chord.quality, chord.pcs, meilleur.root, meilleur.target, tonicPc, mode, chord.bassPc),` |
| `degree: "bII",` | `degree: "bII" + figureOf("", inv),` |

`promoteIfTonicizing` — la voie de la quinte :

```ts
    if (t) {
      c.degree = "V" + chiffrage(c.quality, inversionOf(c.rootPc, c.quality, c.bassPc)) + "/" + t.label;
      c.degreeNum = 0;
      c.fonction = "D";
      c.categorie = "dominante_secondaire";
      c.cible = t.label;
      return true;
    }
```

`reviseLeadingReading` — passer la basse :

```ts
  Object.assign(
    c,
    leadingReading(c.quality, c.pcs, confirmee.root, confirmee.target, tonicPc, mode, c.bassPc),
  );
```

- [ ] **Step 4: Lancer TOUS les tests du moteur**

Run: `npx vitest run src/lib/harmonic-analysis.test.ts`
Expected: les nouveaux tests passent. **Les tests existants qui affirment `"IΔ"` échouent désormais** : le chiffrage rend `"IΔ7"` (la 7e majeure en état fondamental porte bien un 7). C'est le comportement voulu — mettre ces assertions à jour (`IΔ` → `IΔ7`, `bVIΔ` → `bVIΔ7`, etc.). Aucune autre régression ne doit apparaître : si un test échoue pour une autre raison, c'est un bug d'implémentation, pas un test à réécrire.

- [ ] **Step 5: Commit**

```bash
git add src/lib/harmonic-analysis.ts src/lib/harmonic-analysis.test.ts
git commit -m "feat(analyse): renversements et chiffrage francais guides par la basse"
```

---

## Task 4 : Sixtes augmentées (reconnues à l'orthographe)

**Files:**
- Modify: `src/lib/harmonic-analysis.ts`
- Test: `src/lib/harmonic-analysis.test.ts`

- [ ] **Step 1: Écrire les tests qui échouent**

Ajouter à `src/lib/harmonic-analysis.test.ts` :

```ts
import { augmentedSixth, type SpelledNote } from "./harmonic-analysis";

/** Fabrique des notes orthographiées à partir de couples (lettre, altération). */
const STEP_PC_T: Record<string, number> = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };
function sp(...notes: Array<[string, number]>): SpelledNote[] {
  return notes.map(([step, alter]) => ({
    step, alter, pc: (((STEP_PC_T[step] + alter) % 12) + 12) % 12,
  }));
}

describe("sixtes augmentées — l'orthographe seule les distingue d'un V7", () => {
  const DO = 0;

  it("6te allemande : Lab-Do-Mib-Fa# (basse Lab)", () => {
    const notes = sp(["A", -1], ["C", 0], ["E", -1], ["F", 1]);
    const chord = identifyChordFromNotes(notes.map((n) => n.pc), 8)!;
    chord.spelled = notes;
    const r = analyzeChord(chord, DO, "major");
    expect(r.categorie).toBe("sixte_augmentee");
    expect(r.degree).toBe("+6 all.");
    expect(r.fonction).toBe("SD");
  });

  it("le MÊME son écrit Solb est une 7e de dominante, pas une 6te augmentée", () => {
    const notes = sp(["A", -1], ["C", 0], ["E", -1], ["G", -1]);
    const chord = identifyChordFromNotes(notes.map((n) => n.pc), 8)!;
    chord.spelled = notes;
    expect(analyzeChord(chord, DO, "major").categorie).not.toBe("sixte_augmentee");
  });

  it("6te italienne : Lab-Do-Fa#", () => {
    const notes = sp(["A", -1], ["C", 0], ["F", 1]);
    const chord = identifyChordFromNotes(notes.map((n) => n.pc), 8)!;
    chord.spelled = notes;
    expect(analyzeChord(chord, DO, "major").degree).toBe("+6 it.");
  });

  it("6te française : Lab-Do-Ré-Fa#", () => {
    const notes = sp(["A", -1], ["C", 0], ["D", 0], ["F", 1]);
    const chord = identifyChordFromNotes(notes.map((n) => n.pc), 8)!;
    chord.spelled = notes;
    expect(analyzeChord(chord, DO, "major").degree).toBe("+6 fr.");
  });

  it("en mineur aussi (le b6 y est diatonique, le #4 non)", () => {
    const notes = sp(["A", -1], ["C", 0], ["E", -1], ["F", 1]);
    const chord = identifyChordFromNotes(notes.map((n) => n.pc), 8)!;
    chord.spelled = notes;
    expect(analyzeChord(chord, DO, "minor").degree).toBe("+6 all.");
  });

  it("sans basse au b6, ce n'est pas une sixte augmentée", () => {
    const notes = sp(["A", -1], ["C", 0], ["E", -1], ["F", 1]);
    const chord = identifyChordFromNotes(notes.map((n) => n.pc), 0)!;
    chord.spelled = notes;
    expect(analyzeChord(chord, DO, "major").categorie).not.toBe("sixte_augmentee");
  });

  it("augmentedSixth rend null sans orthographe", () => {
    expect(augmentedSixth({ rootPc: 8, rootFr: "Lab", quality: "7", pcs: [8, 0, 3, 6], bassPc: 8 }, 0)).toBeNull();
  });
});

describe("napolitain — la basse confirme la sixte", () => {
  it("Réb-Fa-Lab avec Fa à la basse → bII6", () => {
    const r = analyzeChord(identifyChordFromNotes([1, 5, 8], 5)!, 0, "major");
    expect(r.categorie).toBe("napolitain");
    expect(r.degree).toBe("bII6");
  });
});
```

- [ ] **Step 2: Lancer les tests, vérifier qu'ils échouent**

Run: `npx vitest run src/lib/harmonic-analysis.test.ts`
Expected: FAIL — `augmentedSixth is not exported`.

- [ ] **Step 3: Implémenter**

Dans `src/lib/harmonic-analysis.ts` :

**3a — étendre la catégorie.**

```ts
export type Categorie =
  | "diatonique"
  | "dominante_secondaire"
  | "sensible_degre"
  | "emprunt"
  | "napolitain"
  | "sixte_augmentee"
  | "chromatique";
```

**3b — la détection**, à placer avant `analyzeChord` :

```ts
/**
 * Les trois sixtes augmentées se distinguent par ce qu'elles ajoutent au socle
 * commun (b6 à la basse + tonique + #4). L'ordre compte : l'allemande contient un
 * b3 que la française n'a pas, la française un 2 que l'italienne n'a pas.
 */
const SIXTES_AUGMENTEES: Array<{ ajout: number | null; label: string }> = [
  { ajout: 3, label: "+6 all." },   // b3 (Mib en Do) — 6te allemande
  { ajout: 2, label: "+6 fr." },    // 2  (Ré en Do)  — 6te française
  { ajout: null, label: "+6 it." }, // rien de plus   — 6te italienne
];

/**
 * SIXTE AUGMENTÉE — reconnue à l'ORTHOGRAPHE, seul moyen de la distinguer d'une
 * 7e de dominante ENHARMONIQUE : Lab-Do-Mib-Fa# (6te allemande en Do) et
 * Lab-Do-Mib-Solb (V7 de Réb) sonnent les mêmes hauteurs. Le triton y est écrit
 * #4 dans un cas (note ÉLEVÉE, alter > 0), b5 dans l'autre (note ABAISSÉE). C'est
 * cette différence, invisible aux classes de hauteurs, que le parseur conserve.
 *
 * Critères : la BASSE est le 6e degré abaissé (b6), la tonique est présente, et le
 * triton du degré est écrit comme un 4e degré ÉLEVÉ.
 *
 * Fonction : PRÉDOMINANTE (SD) — la sixte augmentée s'épanouit vers la dominante.
 */
export function augmentedSixth(chord: Chord, tonicPc: number): { degree: string } | null {
  const { bassPc, pcs, spelled } = chord;
  if (bassPc === undefined || !spelled) return null;
  if (bassPc !== (tonicPc + 8) % 12) return null; // basse = b6
  if (!pcs.includes(tonicPc)) return null;        // la tonique

  const quarte = spelled.find((n) => n.pc === (tonicPc + 6) % 12);
  if (!quarte || quarte.alter <= 0) return null;  // #4, et non b5

  for (const s of SIXTES_AUGMENTEES) {
    if (s.ajout === null) return { degree: s.label };
    if (pcs.includes((tonicPc + s.ajout) % 12)) return { degree: s.label };
  }
  return null;
}
```

**3c — l'insérer dans `analyzeChord` comme RÈGLE 2**, juste après la règle 1 (diatonique) et **avant** la dominante secondaire :

```ts
  // ── Règle 2 : sixte augmentée (l'orthographe tranche) ──
  //
  // Placée AVANT la dominante secondaire : une 6te allemande est enharmoniquement
  // une 7e de dominante, et se ferait happer par une règle qui ne lit que les
  // classes de hauteurs. Elle n'est jamais diatonique (le #4 n'est d'aucune
  // gamme), donc la règle 1 ne peut pas l'avoir prise.
  const sixte = augmentedSixth(chord, tonicPc);
  if (sixte) {
    return {
      ...base,
      degree: sixte.degree,
      degreeNum: 0,
      fonction: "SD",
      categorie: "sixte_augmentee",
    };
  }
```

Renuméroter les commentaires des règles suivantes (3 → dominante secondaire, 4 → sensible, 5 → emprunt, 6 → napolitain, 7 → chromatisme).

**3d — `buildChromaEvents`** : ajouter la branche, et corriger l'explication du napolitain (la basse est désormais connue) :

```ts
    } else if (c.categorie === "napolitain") {
      explication =
        c.degree === "bII6"
          ? "Accord napolitain (bII6), à l'état de sixte — prédominante expressive."
          : "Accord napolitain (bII). Rare hors du 1er renversement.";
    } else if (c.categorie === "sixte_augmentee") {
      explication =
        "Sixte augmentée : la basse (6e degré abaissé) et le 4e degré élevé forment " +
        "l'intervalle de sixte augmentée, qui s'épanouit sur la dominante. Prédominante chromatique.";
    } else {
```

- [ ] **Step 4: Lancer les tests, vérifier qu'ils passent**

Run: `npx vitest run src/lib/harmonic-analysis.test.ts`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/lib/harmonic-analysis.ts src/lib/harmonic-analysis.test.ts
git commit -m "feat(analyse): sixtes augmentees reconnues a l'orthographe"
```

---

## Task 5 : Brancher la route sur le parseur et la segmentation

**Files:**
- Modify: `src/app/api/analyse-partition/route.ts`
- Modify: `src/app/api/analyse-partition/commentaire/route.ts`

- [ ] **Step 1: Réécrire le parsing et l'analyse dans la route**

Dans `src/app/api/analyse-partition/route.ts` :

Remplacer les imports du haut par :

```ts
import { auth } from "@clerk/nextjs/server";
import { getUserPlan } from "@/lib/progression";
import { unzipSync, strFromU8 } from "fflate";
import { parseMusicXML, noteNameFr } from "@/lib/musicxml-parse";
import { sliceByBeat, mergeSlices, type Slice } from "@/lib/harmony-segmentation";
import {
  identifyChordFromNotes,
  analyzeChord,
  annotateResolutions,
  buildChromaEvents,
  NOTE_FR,
  type Fonction,
  type Categorie,
  type ChordResult,
  type ChromaEvent,
} from "@/lib/harmonic-analysis";

// La théorie harmonique vit dans `@/lib/harmonic-analysis`, la lecture du MusicXML
// dans `@/lib/musicxml-parse` et la segmentation dans `@/lib/harmony-segmentation`
// — tous testés unitairement. Cette route n'orchestre que le HTTP.
export type { Fonction, Categorie, ChordResult, ChromaEvent };
```

Supprimer `getTag`, `STEP_PC`, et toute la fonction `parseMusicXML` locale (lignes 55 à 160). **Garder** `FIFTHS_PC`.

Étendre le bloc `chromatisme` de `AnalysisResult` :

```ts
  chromatisme: {
    tonicisations: number;
    emprunts: number;
    napolitains: number;
    sixtesAugmentees: number;
    inexpliques: number;
    evenements: ChromaEvent[];
  };
```

Remplacer la fonction `analyze` (de sa signature jusqu'au bloc `chromatisme` inclus) par :

```ts
function analyze(xml: string, filename: string): AnalysisResult {
  const score = parseMusicXML(xml);
  const { mode, signature } = score;

  const tonicPc = FIFTHS_PC.get(score.fifths) ?? 0;
  const tonicFr = NOTE_FR[tonicPc] ?? "Do";
  const tonalite = `${tonicFr} ${mode === "major" ? "majeur" : "mineur"}`;

  // Identité harmonique d'une tranche : c'est elle qui définit le RYTHME
  // HARMONIQUE. Deux temps consécutifs de même identité ne font qu'un segment —
  // on n'annote qu'aux changements d'accord, comme le ferait un musicien.
  const identite = (s: Slice): string => {
    const c = identifyChordFromNotes(s.pcs, s.bass.pc);
    return c ? `${c.rootPc}:${c.quality}:${s.bass.pc}` : "";
  };
  const segments = mergeSlices(sliceByBeat(score), identite);

  const accordsParMesure = new Map<number, ChordResult[]>();
  const chordSequence: Array<{ result: ChordResult; measure: number }> = [];

  for (const s of segments) {
    if (s.pcs.length < 2) continue;
    const chord = identifyChordFromNotes(s.pcs, s.bass.pc);
    if (!chord) continue;

    // L'orthographe des notes du segment : sans elle, pas de sixte augmentée.
    chord.spelled = s.notes.map((n) => ({ step: n.step, alter: n.alter, pc: n.pc }));

    const result = analyzeChord(chord, tonicPc, mode);
    result.beat = s.beat;
    // La basse est nommée d'après ce qui est ÉCRIT : « Lab », jamais « Sol# ».
    result.bassFr = noteNameFr(s.bass.step, s.bass.alter);

    const liste = accordsParMesure.get(s.measure) ?? [];
    liste.push(result);
    accordsParMesure.set(s.measure, liste);
    chordSequence.push({ result, measure: s.measure });
  }

  const mesures: MesureResult[] = score.measures.map((m) => ({
    numero: m.numero,
    accords: accordsParMesure.get(m.numero) ?? [],
  }));

  // ── Arbitrage par la résolution (analyse au niveau de la SÉQUENCE) ──
  //
  // Cet appel peut CHANGER le degré, la catégorie, la cible et même la
  // fondamentale d'un accord. Il doit donc précéder tout ce qui lit ces
  // étiquettes : le comptage du chromatisme comme la détection des cadences.
  annotateResolutions(chordSequence.map((c) => c.result), tonicPc, mode);

  const evenements = buildChromaEvents(chordSequence, tonicPc, mode);

  const chromatisme = {
    tonicisations: evenements.filter(
      (e) => e.categorie === "dominante_secondaire" || e.categorie === "sensible_degre",
    ).length,
    emprunts: evenements.filter((e) => e.categorie === "emprunt").length,
    napolitains: evenements.filter((e) => e.categorie === "napolitain").length,
    sixtesAugmentees: evenements.filter((e) => e.categorie === "sixte_augmentee").length,
    inexpliques: evenements.filter((e) => e.categorie === "chromatique").length,
    evenements,
  };

  const nombreChromatiques = chordSequence.filter(
    ({ result }) => result.categorie !== "diatonique",
  ).length;
```

Le reste de `analyze` (détection des cadences, `return`) est **inchangé**, à une exception près : remplacer

```ts
    nombreMesures: measureBeats.length,
```
par
```ts
    nombreMesures: score.measures.length,
```

- [ ] **Step 2: Mettre à jour le prompt de commentaire IA**

Dans `src/app/api/analyse-partition/commentaire/route.ts`, dans `SYSTEM_PROMPT` :

Ajouter, après la ligne `- categorie "napolitain" (bII) …` :

```
- categorie "sixte_augmentee" (+6 it. / +6 fr. / +6 all.) : sixte augmentée, prédominante chromatique qui s'épanouit sur la dominante. Précise laquelle et son effet.
```

Et remplacer la ligne des chiffrages par :

```
- Utilisent les noms de notes en français (Do, Ré, Mi...) et les chiffrages tels qu'ils sont fournis : majuscules pour les accords majeurs, minuscules pour les mineurs et diminués, et le CHIFFRAGE FRANÇAIS du renversement est déjà inclus dans le degré (I, I6, I6/4, V7, V6/5, V+4, V+2, vii°7, bII6, V7/ii). Ne le recalcule pas, ne le traduis pas : reprends-le tel quel et commente le rôle du renversement (basse conjointe, cadence sur I6/4, etc.).
```

- [ ] **Step 3: Vérifier la compilation et la suite complète**

Run: `npx vitest run`
Expected: PASS — l'intégralité de la suite (moteur + parseur + segmentation).

Run: `NODE_OPTIONS="--max-old-space-size=8192" npm run build`
Expected: build réussi. (Ne PAS lancer `npx tsc --noEmit` : il sature la mémoire de ce poste.)

- [ ] **Step 4: Commit**

```bash
git add src/app/api/analyse-partition/route.ts src/app/api/analyse-partition/commentaire/route.ts
git commit -m "feat(analyse): la route consomme le parseur et la segmentation"
```

---

## Task 6 : L'interface (basse, chiffrage, sixtes augmentées)

**Files:**
- Modify: `src/components/AnalysePartition.tsx`

- [ ] **Step 1: Mettre les types du composant en miroir de la route**

Dans `src/components/AnalysePartition.tsx` :

```ts
type Categorie =
  | "diatonique"
  | "dominante_secondaire"
  | "sensible_degre"
  | "emprunt"
  | "napolitain"
  | "sixte_augmentee"
  | "chromatique";

interface ChordResult {
  rootFr: string;
  quality: string;
  bassFr?: string;
  degree: string;
  degreeNum: number;
  fonction: Fonction;
  categorie: Categorie;
  cible?: string;
  resolue?: boolean;
  beat?: number;
}
```

et dans `AnalysisResult` :

```ts
  chromatisme: {
    tonicisations: number;
    emprunts: number;
    napolitains: number;
    sixtesAugmentees: number;
    inexpliques: number;
    evenements: ChromaEvent[];
  };
```

- [ ] **Step 2: Style de la nouvelle catégorie**

Ajouter à `CAT_STYLE`, après `napolitain` :

```ts
  sixte_augmentee:      { bg: "#FDF0E6", color: "#A85416", label: "sixte augmentée" },
```

- [ ] **Step 3: Colonne « Basse » dans le tableau des mesures**

Dans l'en-tête du tableau, remplacer

```ts
                  {["Mesure", "Temps", "Accord", "Degré", "Fonction"].map(h => (
```
par
```ts
                  {["Mesure", "Temps", "Accord", "Basse", "Degré", "Fonction"].map(h => (
```

Dans la ligne « mesure vide », passer le `colSpan` de 3 à 4 :

```tsx
                        <td colSpan={4} style={{ padding: "10px 16px", color: "#ccc", fontSize: 13 }}>—</td>
```

Et insérer une cellule entre l'accord et le degré :

```tsx
                      <td style={{ padding: "10px 16px", fontSize: 13, color: "#767676", fontFamily: "Georgia, serif" }}>
                        {chord.bassFr ?? "—"}
                      </td>
```

- [ ] **Step 4: Carte « Sixtes augmentées » dans le résumé**

Dans le tableau des cartes du Résumé, après la carte « Emprunts » :

```ts
              { label: "Sixtes augmentées", value: String(analysis.chromatisme.sixtesAugmentees) },
```

- [ ] **Step 5: Vérifier le build**

Run: `NODE_OPTIONS="--max-old-space-size=8192" npm run build`
Expected: build réussi, aucune erreur de type.

- [ ] **Step 6: Commit**

```bash
git add src/components/AnalysePartition.tsx
git commit -m "feat(analyse): affichage de la basse, du chiffrage et des sixtes augmentees"
```

---

## Task 7 : Vérification d'ensemble

**Files:** aucun (contrôle)

- [ ] **Step 1: Suite complète**

Run: `npx vitest run`
Expected: PASS — tous les tests, y compris les 95 du sous-projet A (aux assertions `IΔ` → `IΔ7` près, mises à jour en Task 3).

- [ ] **Step 2: Build de production**

Run: `NODE_OPTIONS="--max-old-space-size=8192" npm run build`
Expected: succès.

- [ ] **Step 3: Contrôle musical manuel**

Lancer `npm run dev`, importer un **choral de Bach** (4 voix réelles) dans `/analyse-partition` et vérifier :
- les accords verticaux sont cohérents (le bug `<backup>` est mort) ;
- la colonne Basse est remplie et les chiffrages apparaissent (`I6`, `V6/5`, `V+2`…) ;
- une basse tenue reste présente sur toute sa durée ;
- les accords ne sont plus répétés à chaque temps quand l'harmonie ne change pas.

Rapporter le résultat — c'est ce contrôle, et non les tests, qui dit si le sous-projet a atteint son but.

---

## Auto-relecture

**Couverture de la spec :**
- Défaut 1 (`<backup>`) → Task 1, test dédié. ✅
- Défaut 2 (durées/tenues) → Task 1 (liaisons) + Task 2 (`notesSoundingAt`, basse tenue). ✅
- Défaut 3 (basse) → Task 2 (`Slice.bass`) + Task 3 (`identifyChordFromNotes`, `inversionOf`). ✅
- Défaut 4 (orthographe) → Task 1 (`step`/`alter` conservés, `noteNameFr`) + Task 4 (sixtes augmentées). ✅
- Chiffrage français `I / I6 / I6/4 / V7 / V6/5 / V+4 / V+2` → Task 3, tables `FIGURES_*`. ✅
- Annotation aux changements d'harmonie → Task 2 (`mergeSlices`) + Task 5 (`identite`). ✅
- Napolitain `bII6` confirmé → Task 4. ✅
- Sixtes augmentées it./fr./all. → Task 4. ✅
- Intégration route + moteur + UI → Tasks 5 et 6. ✅
- Tests vitest listés dans la spec → tous présents (Tasks 1, 2, 3, 4). ✅

**Cohérence des types :** `ParsedNote` (Task 1) est consommée par `Slice` (Task 2) ; `Chord.bassPc` / `Chord.spelled` (Task 3, 4) sont remplies par la route (Task 5) ; `ChordResult.bassFr` (Task 3) est lue par l'UI (Task 6) ; `chromatisme.sixtesAugmentees` est défini en Task 5 et lu en Task 6. `Categorie` gagne `sixte_augmentee` en Task 4 et est mise en miroir en Task 6.
