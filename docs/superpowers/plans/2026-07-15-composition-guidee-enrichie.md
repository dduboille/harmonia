# Composition guidée enrichie — Plan d'implémentation

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Faire de la composition guidée une façade pédagogique sur le moteur d'analyse : palette d'accords organisée par fonction (avec prédominantes et chromatisme), correction et notes étrangères par le vrai moteur, réalisation SATB qui honore les renversements.

**Architecture :** On ne réécrit aucune théorie. Une palette générée par `analyzeChord` (module pur `palette-fonctionnelle.ts`), une correction qui appelle `analyzeChord` + `annotateResolutions` + le classifieur de notes étrangères C1 (`correction-harmonisation.ts`, qui remplace `harmonization-engine.ts`), une réalisation SATB extraite en module testable qui suit la basse demandée. La copie de l'élève reste un `string[][]`, mais les cases portent des **identifiants de palette** (`"V6/5"`, `"bII6"`) qui connaissent leur basse.

**Tech Stack :** TypeScript strict, vitest, Next.js 16, React 19. Aucune dépendance nouvelle.

**Spec :** `docs/superpowers/specs/2026-07-15-composition-guidee-enrichie-design.md`

**Contraintes d'environnement :**
- **NE JAMAIS lancer `npx tsc --noEmit`** : cela sature la mémoire de ce poste. Contrôle d'intégration : `NODE_OPTIONS="--max-old-space-size=8192" npm run build`.
- Tests : `npx vitest run`. La suite compte **249 tests** avant ce chantier.
- TypeScript strict, pas de `any`. Commentaires et identifiants en **français**, disant le POURQUOI.

**Ce qui existe et qu'on réutilise (à lire avant de commencer) :**
- `src/lib/harmonic-analysis.ts` — `analyzeChord(chord, tonicPc, mode)`, `annotateResolutions(seq, tonicPc, mode)`, `identifyChordFromNotes`, `pcOfDegree(num, tonicPc, mode)`, `degreeOfRoot`, `diatonicSet`, `NOTE_FR`, `PC`, types `Chord`, `ChordResult`, `Fonction`, `Categorie`. **Lis les commentaires** : chacun consigne un piège musical.
- `src/lib/notes-etrangeres.ts` — `classer(note, voisinage, ctx)`, `conjointe`, `contigues`, `LIBELLE_ETRANGERE`, types `TypeEtrangere`, `ContexteEtrangere`.
- `src/lib/voice-lines.ts` — type `Voisinage { precedente?, suivante? }`.
- `src/lib/musicxml-parse.ts` — type `ParsedNote` (c'est le type que `classer` attend).
- `src/components/CompositionGuidee.tsx` — l'outil actuel (mélodie imposée, pool à plat, `computeATB`, `HarmonizationPanel`, scoring via `harmonization-engine`).
- `src/lib/harmonization-engine.ts` — la théorie DUPLIQUÉE à remplacer.
- `src/types/composition.ts` — `MelodyExercise`, `MelodyNote`, `HarmonizationScore`.
- `src/data/melodies-exercices.ts` — 15 exercices ; accords en notation anglaise (`"C"`, `"Dm"`, `"G7"`).

---

## Structure des fichiers

| Fichier | Responsabilité |
|---|---|
| `src/lib/palette-fonctionnelle.ts` *(nouveau)* | Générer la palette par tonalité + niveau, groupée T/SD/D/Chromatisme, chaque accord étiqueté par `analyzeChord`. Résoudre un id/nom d'accord en `{ pcs, bassPc }`. |
| `src/lib/satb-voicing.ts` *(nouveau)* | La réalisation SATB (extraite de `CompositionGuidee`), qui **honore la basse demandée**. Pure et testable. |
| `src/lib/correction-harmonisation.ts` *(nouveau)* | La correction : analyse par accord (moteur), notes étrangères (classifieur C1 adapté à une mélodie), score fonctionnel. Remplace `harmonization-engine.ts`. |
| `src/components/CompositionGuidee.tsx` *(modifié)* | Palette par groupes fonctionnels filtrée par niveau ; panneau d'analyse ; réalisation via `satb-voicing` ; score via `correction-harmonisation`. |
| `src/types/composition.ts` *(modifié)* | `pool` retiré ; `HarmonizationScore` enrichi. |
| `src/data/melodies-exercices.ts` *(modifié)* | `pool` retiré ; quelques exercices chromatiques ajoutés. |

---

## Task 1 : La palette fonctionnelle

**Files:**
- Create: `src/lib/palette-fonctionnelle.ts`
- Test: `src/lib/palette-fonctionnelle.test.ts`

**Principe :** on n'étiquette RIEN à la main. On génère une liste de candidats `{ pcs, bassPc }` (degrés diatoniques × renversements + recettes chromatiques), on les fait étiqueter par `analyzeChord`, puis on les range par catégorie et fonction, et on filtre par niveau.

- [ ] **Step 1: Écrire les tests qui échouent**

Créer `src/lib/palette-fonctionnelle.test.ts` :

```ts
import { describe, it, expect } from "vitest";
import { construirePalette, resoudreAccord } from "./palette-fonctionnelle";

const DO = 0;

describe("construirePalette — groupes fonctionnels", () => {
  it("niveau 3 en Do majeur : prédominantes, dominantes, chromatisme", () => {
    const groupes = construirePalette(DO, "major", 3);
    const parTitre = Object.fromEntries(groupes.map((g) => [g.titre, g.accords.map((a) => a.degree)]));

    // Prédominante : ii, ii6, IV, et le napolitain bII6
    expect(parTitre["Prédominante"]).toEqual(expect.arrayContaining(["ii", "ii6", "IV", "bII6"]));
    // Dominante : V, V7, V6/5, vii°7
    expect(parTitre["Dominante"]).toEqual(expect.arrayContaining(["V", "V7", "V6/5", "vii°7"]));
    // Chromatisme : V7/ii, V7/V, iv, bVI
    expect(parTitre["Chromatisme"]).toEqual(expect.arrayContaining(["V7/ii", "V7/V", "iv", "bVI"]));
  });

  it("niveau 1 : aucun accord chromatique", () => {
    const groupes = construirePalette(DO, "major", 1);
    const chroma = groupes.find((g) => g.titre === "Chromatisme");
    expect(chroma === undefined || chroma.accords.length === 0).toBe(true);
    // Mais la tonique et la dominante diatoniques sont là.
    const titres = groupes.filter((g) => g.accords.length > 0).map((g) => g.titre);
    expect(titres).toEqual(expect.arrayContaining(["Tonique", "Prédominante", "Dominante"]));
  });

  it("chaque accord porte le degré et la fonction que le moteur rendrait", () => {
    const groupes = construirePalette(DO, "major", 3);
    const v7 = groupes.flatMap((g) => g.accords).find((a) => a.degree === "V7")!;
    expect(v7.fonction).toBe("D");
    expect(v7.nom).toBe("Sol7");
    // La basse d'un V6/5 est la sensible (Si).
    const v65 = groupes.flatMap((g) => g.accords).find((a) => a.degree === "V6/5")!;
    expect(v65.bassPc).toBe(11);
  });
});

describe("resoudreAccord — id de palette OU nom d'accord", () => {
  it("résout un id de palette en pcs + basse", () => {
    const a = resoudreAccord("V6/5", DO, "major")!;
    expect(a.degree).toBe("V6/5");
    expect(a.bassPc).toBe(11);
  });

  it("résout un nom d'accord simple (fondamentale à la basse)", () => {
    // Les exercices existants donnent "C", "Dm", "G7" : on doit savoir les lire.
    const c = resoudreAccord("C", DO, "major")!;
    expect(c.pcs.sort((x, y) => x - y)).toEqual([0, 4, 7]);
    expect(c.bassPc).toBe(0);
    const g7 = resoudreAccord("G7", DO, "major")!;
    expect(g7.degree).toBe("V7");
  });

  it("rend null sur une entrée illisible", () => {
    expect(resoudreAccord("???", DO, "major")).toBeNull();
  });
});
```

- [ ] **Step 2: Lancer les tests, vérifier qu'ils échouent**

Run: `npx vitest run src/lib/palette-fonctionnelle.test.ts`
Expected: FAIL — `Failed to resolve import "./palette-fonctionnelle"`.

- [ ] **Step 3: Écrire le module**

Créer `src/lib/palette-fonctionnelle.ts` :

```ts
/**
 * lib/palette-fonctionnelle.ts
 * Harmonia — La palette d'accords de la composition guidée, ORGANISÉE PAR FONCTION.
 *
 * On n'étiquette rien à la main : on génère des candidats { pcs, basse }, et c'est
 * `analyzeChord` — le moteur de l'analyseur de partitions — qui leur donne leur
 * chiffre romain, leur fonction et leur catégorie. La composition guidée parle donc
 * exactement le même langage harmonique que l'analyseur.
 */

import {
  analyzeChord,
  identifyChordFromNotes,
  pcOfDegree,
  NOTE_FR,
  type Fonction,
  type Categorie,
} from "./harmonic-analysis";

export interface AccordPalette {
  id: string;          // = degree (unique dans une tonalité) : "V7", "ii6", "bII6"…
  nom: string;         // "Sol7", "Rém", "Réb"… (orthographe française simple)
  pcs: number[];
  bassPc: number;
  degree: string;
  fonction: Fonction;
  categorie: Categorie;
}

export interface GroupeFonctionnel {
  titre: "Tonique" | "Prédominante" | "Dominante" | "Chromatisme";
  accords: AccordPalette[];
}

const MAJOR_DEGREES = [0, 2, 4, 5, 7, 9, 11];
const MINOR_DEGREES = [0, 2, 3, 5, 7, 8, 10];

/** Un accord candidat, avant étiquetage : ses hauteurs et la note qu'on met à la basse. */
interface Candidat {
  pcs: number[];
  bassPc: number;
}

/** Triade/7e diatonique sur un degré, avec le renversement voulu (0=fond., 1, 2, 3). */
function accordDiatonique(
  degre: number, tonicPc: number, mode: "major" | "minor", avecSeptieme: boolean, renv: number,
): Candidat {
  const gamme = mode === "major" ? MAJOR_DEGREES : MINOR_DEGREES;
  const idx = degre - 1;
  const tons = [0, 2, 4, ...(avecSeptieme ? [6] : [])].map(
    (saut) => (tonicPc + gamme[(idx + saut) % 7]) % 12,
  );
  return { pcs: tons, bassPc: tons[renv % tons.length] };
}

/** 7e de dominante bâtie une quinte au-dessus d'un degré (dominante secondaire V7/x). */
function dominanteSecondaire(cibleDegre: number, tonicPc: number, mode: "major" | "minor"): Candidat {
  const ciblePc = pcOfDegree(cibleDegre, tonicPc, mode);
  const root = (ciblePc + 7) % 12;
  const pcs = [root, (root + 4) % 12, (root + 7) % 12, (root + 10) % 12];
  return { pcs, bassPc: root };
}

/**
 * Recettes chromatiques bâties à la main (leurs hauteurs, pas leurs étiquettes —
 * `analyzeChord` étiquette). En Do majeur : napolitain, emprunts, sixte allemande.
 */
function candidatsChromatiques(tonicPc: number, mode: "major" | "minor"): Candidat[] {
  const out: Candidat[] = [];
  // Dominantes secondaires des degrés tonicisables usuels.
  for (const d of mode === "major" ? [5, 2, 4, 6] : [5, 4, 6]) {
    out.push(dominanteSecondaire(d, tonicPc, mode));
  }
  if (mode === "major") {
    // Napolitain bII6 : accord majeur sur le 2e degré abaissé, 1er renversement (basse = 4e degré).
    const b2 = (tonicPc + 1) % 12;
    const napo = [b2, (b2 + 4) % 12, (b2 + 7) % 12];
    out.push({ pcs: napo, bassPc: (b2 + 4) % 12 });
    // Emprunts au mineur : iv, bVI.
    const iv = (tonicPc + 5) % 12;
    out.push({ pcs: [iv, (iv + 3) % 12, (iv + 7) % 12], bassPc: iv }); // iv (Fa mineur)
    const b6 = (tonicPc + 8) % 12;
    out.push({ pcs: [b6, (b6 + 4) % 12, (b6 + 7) % 12], bassPc: b6 }); // bVI (Lab)
    // Sixte allemande : b6 à la basse, tonique, b3, #4 (Lab-Do-Mib-Fa#).
    out.push({ pcs: [b6, tonicPc, (tonicPc + 3) % 12, (tonicPc + 6) % 12], bassPc: b6 });
  }
  return out;
}

/** Nom français simple d'un accord, d'après sa fondamentale et sa qualité (via le moteur). */
function nomAccord(pcs: number[], bassPc: number, mode: "major" | "minor", tonicPc: number): string {
  const chord = identifyChordFromNotes(pcs, bassPc);
  if (!chord) return "?";
  return (NOTE_FR[chord.rootPc] ?? "?") + chord.quality;
}

const CHROMATIQUES: Set<Categorie> = new Set([
  "dominante_secondaire", "sensible_degre", "emprunt", "napolitain", "sixte_augmentee",
]);

/** Niveau → catégories autorisées. */
function categoriesAutorisees(niveau: 1 | 2 | 3): Set<Categorie> {
  if (niveau === 1) return new Set(["diatonique"]);
  if (niveau === 2) return new Set(["diatonique", "dominante_secondaire", "sensible_degre", "emprunt"]);
  return new Set(["diatonique", "dominante_secondaire", "sensible_degre", "emprunt", "napolitain", "sixte_augmentee"]);
}

function etiqueter(c: Candidat, tonicPc: number, mode: "major" | "minor"): AccordPalette | null {
  const chord = identifyChordFromNotes(c.pcs, c.bassPc);
  if (!chord) return null;
  chord.spelled = undefined; // les recettes ne portent pas d'orthographe fine ; la sixte augm.
  //                            est captée par ses classes de hauteurs (b6 basse + tonique + #4).
  const r = analyzeChord(chord, tonicPc, mode);
  return {
    id: r.degree,
    nom: nomAccord(c.pcs, c.bassPc, mode, tonicPc),
    pcs: r.pcs,
    bassPc: c.bassPc,
    degree: r.degree,
    fonction: r.fonction,
    categorie: r.categorie,
  };
}

export function construirePalette(
  tonicPc: number, mode: "major" | "minor", niveau: 1 | 2 | 3,
): GroupeFonctionnel[] {
  const candidats: Candidat[] = [];

  // Diatoniques : triades sur chaque degré (fond. + 1er renversement pour I, IV, V),
  // plus le V7 et son 1er renversement, plus le vii°7.
  for (let d = 1; d <= 7; d++) {
    candidats.push(accordDiatonique(d, tonicPc, mode, false, 0));
    if ([1, 4, 5].includes(d)) candidats.push(accordDiatonique(d, tonicPc, mode, false, 1));
  }
  candidats.push(accordDiatonique(5, tonicPc, mode, true, 0)); // V7
  candidats.push(accordDiatonique(5, tonicPc, mode, true, 1)); // V6/5
  candidats.push(accordDiatonique(2, tonicPc, mode, true, 0)); // ii7
  candidats.push(accordDiatonique(7, tonicPc, mode, true, 0)); // vii°7 (en mineur) / viiø7 (majeur)

  candidats.push(...candidatsChromatiques(tonicPc, mode));

  const autorisees = categoriesAutorisees(niveau);
  const etiquetes = candidats
    .map((c) => etiqueter(c, tonicPc, mode))
    .filter((a): a is AccordPalette => a !== null && autorisees.has(a.categorie));

  // Dédoublonnage par degré (deux recettes peuvent tomber sur la même étiquette).
  const vus = new Set<string>();
  const uniques = etiquetes.filter((a) => (vus.has(a.id) ? false : (vus.add(a.id), true)));

  const groupe = (a: AccordPalette): GroupeFonctionnel["titre"] => {
    if (CHROMATIQUES.has(a.categorie)) return "Chromatisme";
    if (a.fonction === "T") return "Tonique";
    if (a.fonction === "SD") return "Prédominante";
    return "Dominante";
  };

  const titres: GroupeFonctionnel["titre"][] = ["Tonique", "Prédominante", "Dominante", "Chromatisme"];
  return titres.map((titre) => ({
    titre,
    accords: uniques.filter((a) => groupe(a) === titre),
  }));
}

/** Résout un id de palette OU un nom d'accord d'exercice ("C", "G7") en accord étiqueté. */
export function resoudreAccord(
  idOuNom: string, tonicPc: number, mode: "major" | "minor",
): AccordPalette | null {
  // 1) un id de palette ? (on régénère la palette du niveau maximal et on cherche)
  for (const g of construirePalette(tonicPc, mode, 3)) {
    const trouve = g.accords.find((a) => a.id === idOuNom);
    if (trouve) return trouve;
  }
  // 2) sinon, un nom d'accord "Root+qualité", fondamentale à la basse.
  const pcs = nomVersPcs(idOuNom);
  if (!pcs) return null;
  return etiqueter({ pcs, bassPc: pcs[0] }, tonicPc, mode);
}

const NAME_PC: Record<string, number> = {
  C: 0, "C#": 1, Db: 1, D: 2, "D#": 3, Eb: 3, E: 4, F: 5, "F#": 6, Gb: 6,
  G: 7, "G#": 8, Ab: 8, A: 9, "A#": 10, Bb: 10, B: 11,
};

/** "G7" → [7,11,2,5] ; "Dm" → [2,5,9] ; "C" → [0,4,7]. Sous-ensemble des qualités d'exercice. */
function nomVersPcs(nom: string): number[] | null {
  const m = nom.match(/^([A-G][#b]?)(.*)$/);
  if (!m || !(m[1] in NAME_PC)) return null;
  const root = NAME_PC[m[1]];
  const q = m[2];
  let ivs: number[];
  if (q === "" || q === "maj" || q === "M") ivs = [0, 4, 7];
  else if (q === "m" || q === "min") ivs = [0, 3, 7];
  else if (q === "7") ivs = [0, 4, 7, 10];
  else if (q === "m7" || q === "min7") ivs = [0, 3, 7, 10];
  else if (q === "Maj7" || q === "maj7" || q === "M7") ivs = [0, 4, 7, 11];
  else if (q === "dim" || q === "o") ivs = [0, 3, 6];
  else if (q === "dim7" || q === "o7") ivs = [0, 3, 6, 9];
  else if (q === "m7b5" || q === "ø") ivs = [0, 3, 6, 10];
  else if (q === "aug" || q === "+") ivs = [0, 4, 8];
  else return null;
  return ivs.map((i) => (root + i) % 12);
}
```

- [ ] **Step 4: Lancer les tests, vérifier qu'ils passent**

Run: `npx vitest run src/lib/palette-fonctionnelle.test.ts`
Expected: PASS. Si une étiquette diffère de l'attendu (ex. `viiø7` au lieu de `vii°7` en majeur), **corrige le TEST pour coller à ce que le moteur rend réellement** — le moteur fait foi, il est déjà relu. Note dans le rapport tout ajustement de ce genre.

- [ ] **Step 5: Commit**

```bash
git add src/lib/palette-fonctionnelle.ts src/lib/palette-fonctionnelle.test.ts
git commit -m "feat(compo): palette d'accords organisee par fonction, etiquetee par le moteur"
```

---

## Task 2 : La réalisation SATB qui honore le renversement

**Contexte :** `computeATB` (dans `CompositionGuidee.tsx`) met toujours la fondamentale à la basse. On l'extrait en module pur et on lui fait respecter une **basse imposée**.

**Files:**
- Create: `src/lib/satb-voicing.ts`
- Test: `src/lib/satb-voicing.test.ts`

- [ ] **Step 1: Écrire les tests qui échouent**

Créer `src/lib/satb-voicing.test.ts` :

```ts
import { describe, it, expect } from "vitest";
import { realiserSATB, type Voicing } from "./satb-voicing";

// midi utilitaire : Do4 = 60.
describe("realiserSATB — la basse suit le renversement demandé", () => {
  it("V7 fondamental : Sol à la basse", () => {
    // Sol7 = [7,11,2,5], basse imposée Sol (pc 7). Soprano = Ré5 (74).
    const v = realiserSATB([7, 11, 2, 5], 7, 74, null);
    expect(v.bass % 12).toBe(7);
  });

  it("V6/5 : la sensible (Si) à la basse", () => {
    const v = realiserSATB([7, 11, 2, 5], 11, 74, null);
    expect(v.bass % 12).toBe(11);
  });

  it("bII6 : la basse est la tierce du napolitain (Fa)", () => {
    // Réb majeur = [1,5,8], basse imposée Fa (pc 5).
    const v = realiserSATB([1, 5, 8], 5, 72, null);
    expect(v.bass % 12).toBe(5);
  });

  it("la basse reste dans un registre grave plausible", () => {
    const v = realiserSATB([0, 4, 7], 0, 72, null);
    expect(v.bass).toBeGreaterThanOrEqual(36);
    expect(v.bass).toBeLessThanOrEqual(60);
  });

  it("alto et ténor restent entre la basse et le soprano", () => {
    const v: Voicing = realiserSATB([0, 4, 7], 0, 72, null);
    expect(v.alto).toBeLessThan(72);
    expect(v.tenor).toBeLessThan(v.alto + 1);
    expect(v.tenor).toBeGreaterThan(v.bass - 1);
  });
});
```

- [ ] **Step 2: Lancer les tests, vérifier qu'ils échouent**

Run: `npx vitest run src/lib/satb-voicing.test.ts`
Expected: FAIL — `Failed to resolve import "./satb-voicing"`.

- [ ] **Step 3: Écrire le module**

Créer `src/lib/satb-voicing.ts` en s'inspirant de `computeATB` existant, mais avec une **basse imposée** :

```ts
/**
 * lib/satb-voicing.ts
 * Harmonia — Réalisation SATB pour la composition guidée : soprano imposé (la
 * mélodie), basse IMPOSÉE (le renversement de l'accord choisi), alto et ténor
 * conduits au plus proche de la voix précédente.
 *
 * Extrait de `CompositionGuidee` pour être testable — et corrigé sur un point : la
 * basse ne met plus systématiquement la fondamentale, elle suit la note demandée.
 * C'est ce qui permet enfin un I6, un V6/5, un napolitain bII6.
 */

export interface Voicing {
  alto: number;
  tenor: number;
  bass: number;
}

function toutesOctaves(pc: number, lo: number, hi: number): number[] {
  const r: number[] = [];
  for (let m = lo; m <= hi; m++) if (((m % 12) + 12) % 12 === pc) r.push(m);
  return r;
}

function plusProche(cands: number[], pref: number, repli: number): number {
  if (!cands.length) return repli;
  return cands.reduce((b, c) => (Math.abs(c - pref) < Math.abs(b - pref) ? c : b));
}

/**
 * @param pcs      classes de hauteurs de l'accord
 * @param bassePc  la classe de hauteur À LA BASSE (renversement)
 * @param sopMidi  le soprano (note de la mélodie), en midi
 * @param prev     la réalisation précédente, pour conduire alto/ténor
 */
export function realiserSATB(
  pcs: number[], bassePc: number, sopMidi: number, prev: Voicing | null,
): Voicing {
  const pr = prev ?? { alto: 64, tenor: 60, bass: 48 };

  // Basse : la note IMPOSÉE, dans le registre grave, au plus proche de la précédente.
  const bass = plusProche(toutesOctaves(bassePc, 40, 60), pr.bass, 48);

  const sopPC = ((sopMidi % 12) + 12) % 12;

  // Les deux hauteurs restantes à placer (alto, ténor) : l'accord moins la basse et
  // le soprano, complété si besoin en doublant une note (la fondamentale de préférence).
  const reste = [...pcs];
  const retirer = (pc: number) => { const i = reste.indexOf(pc); if (i >= 0) reste.splice(i, 1); };
  retirer(bassePc);
  retirer(sopPC);
  while (reste.length < 2) reste.push(pcs[0]);

  let bAlt = pr.alto, bTen = pr.tenor, meilleur = Infinity;
  for (const [aPC, tPC] of [[reste[0], reste[1]], [reste[1], reste[0]]] as [number, number][]) {
    const aCands = toutesOctaves(aPC, 55, 72).filter((m) => m < sopMidi && m > bass);
    const tCands = toutesOctaves(tPC, 48, 67).filter((m) => m > bass);
    if (!aCands.length || !tCands.length) continue;
    const aM = plusProche(aCands, pr.alto, aCands[0]);
    const tF = tCands.filter((m) => m <= aM);
    if (!tF.length) continue;
    const tM = plusProche(tF, pr.tenor, tF[0]);
    const sc = Math.abs(aM - pr.alto) + Math.abs(tM - pr.tenor);
    if (sc < meilleur) { meilleur = sc; bAlt = aM; bTen = tM; }
  }

  return { alto: bAlt, tenor: bTen, bass };
}
```

- [ ] **Step 4: Lancer les tests, vérifier qu'ils passent**

Run: `npx vitest run src/lib/satb-voicing.test.ts`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/lib/satb-voicing.ts src/lib/satb-voicing.test.ts
git commit -m "feat(compo): realisation SATB qui honore le renversement demande"
```

---

## Task 3 : La correction par le moteur

**Contexte :** remplace `harmonization-engine.ts`. Analyse chaque accord posé par le moteur, classe chaque note de la mélodie par le classifieur C1, et note la syntaxe fonctionnelle.

**Files:**
- Create: `src/lib/correction-harmonisation.ts`
- Test: `src/lib/correction-harmonisation.test.ts`

- [ ] **Step 1: Écrire les tests qui échouent**

Créer `src/lib/correction-harmonisation.test.ts` :

```ts
import { describe, it, expect } from "vitest";
import { corrigerHarmonisation } from "./correction-harmonisation";
import type { MelodyExercise } from "@/types/composition";

/** Un exercice minimal en Do majeur, 2 mesures, pour les tests. */
function exo(notes: MelodyExercise["notes"]): MelodyExercise {
  return {
    id: "t", title: "t", difficulty: 1, style: "classique",
    keySignature: "C", isMinor: false, timeSignature: "4/4", measures: 2,
    notes, suggestedChords: [], hint: "", concepts: [], solutionExplanation: [],
  };
}

describe("corrigerHarmonisation — analyse par accord", () => {
  it("étiquette chaque accord par le moteur (fonction, degré)", () => {
    const melody = exo([
      { note: "C", octave: 4, duration: "whole" },
      { note: "B", octave: 3, duration: "whole" },
    ]);
    // Copie : I puis V7 (par leurs ids de palette).
    const r = corrigerHarmonisation(melody, [["I"], ["V7"]]);
    expect(r.accords[0].degree).toBe("I");
    expect(r.accords[0].fonction).toBe("T");
    expect(r.accords[1].degree).toBe("V7");
    expect(r.accords[1].fonction).toBe("D");
  });
});

describe("corrigerHarmonisation — notes étrangères par le classifieur C1", () => {
  it("nomme une note de passage dans la mélodie", () => {
    // Do–Ré–Mi en noires sur un accord de Do tenu : le Ré est une note de passage.
    const melody = exo([
      { note: "C", octave: 4, duration: "quarter" },
      { note: "D", octave: 4, duration: "quarter" },
      { note: "E", octave: 4, duration: "quarter" },
      { note: "C", octave: 4, duration: "quarter" },
    ]);
    const r = corrigerHarmonisation(melody, [["I"], []]);
    const types = r.notesMelodie.map((n) => n.type);
    expect(types).toContain("note de passage");
    expect(r.notesMelodie.filter((n) => n.type === null).length).toBeGreaterThan(0); // les notes d'accord
  });
});

describe("corrigerHarmonisation — score fonctionnel", () => {
  it("récompense prédominante → dominante → tonique", () => {
    const melody = exo([
      { note: "F", octave: 4, duration: "whole" },
      { note: "C", octave: 4, duration: "whole" },
    ]);
    const bonne = corrigerHarmonisation(melody, [["ii6"], ["V7"]]); // SD → D (…puis I implicite)
    const molle = corrigerHarmonisation(melody, [["V"], ["IV"]]);   // D → SD : recul
    expect(bonne.score.global).toBeGreaterThan(molle.score.global);
  });

  it("récompense une dominante secondaire résolue sur sa cible", () => {
    const melody = exo([
      { note: "A", octave: 4, duration: "whole" },
      { note: "D", octave: 4, duration: "whole" },
    ]);
    // V7/ii → ii : la dominante secondaire est résolue.
    const r = corrigerHarmonisation(melody, [["V7/ii"], ["ii"]]);
    expect(r.accords[0].resolue).toBe(true);
  });
});
```

- [ ] **Step 2: Lancer les tests, vérifier qu'ils échouent**

Run: `npx vitest run src/lib/correction-harmonisation.test.ts`
Expected: FAIL — `Failed to resolve import`.

- [ ] **Step 3: Écrire le module**

Créer `src/lib/correction-harmonisation.ts`. Points clés :
- `keySignature` + `isMinor` → `tonicPc` + `mode`.
- Découper la mélodie en mesures (comme `getMeasures` de l'ancien moteur), et déterminer l'accord actif pour chaque note (1 ou 2 accords par mesure, bascule à la moitié).
- Résoudre chaque id de copie via `resoudreAccord` → `{ pcs, bassPc }`, `analyzeChord` → `ChordResult` ; passer la séquence à `annotateResolutions` pour renseigner `resolue`.
- Pour chaque note de la mélodie : construire un `ParsedNote` (onset/durée en ticks à partir des durées, `pc` depuis le nom), un `Voisinage` (note précédente/suivante de la mélodie), un `ContexteEtrangere` (pcs de l'accord actif, de l'accord précédent/suivant, tempsFort = position sur le temps fort), et appeler `classer`. Une note DE l'accord → `type: null`.
- Score : compatibilité (les notes non expliquées ET non classées comme étrangères légitimes pénalisent), syntaxe fonctionnelle (SD→D→T récompensé, D→SD pénalisé — via les `fonction` réelles), résolutions des dominantes secondaires, cadence finale.

```ts
/**
 * lib/correction-harmonisation.ts
 * Harmonia — La correction de la composition guidée, PAR LE MOTEUR.
 *
 * Remplace l'ancien `harmonization-engine`, qui avait sa propre théorie codée en
 * dur. Ici, chaque accord est analysé par `analyzeChord`/`annotateResolutions`, et
 * chaque note de la mélodie par le classifieur de notes étrangères de C1. La
 * composition guidée note donc sur la MÊME théorie que l'analyseur de partitions.
 */

import type { MelodyExercise, MelodyNote } from "@/types/composition";
import {
  analyzeChord, annotateResolutions, type ChordResult, type Fonction,
} from "./harmonic-analysis";
import { resoudreAccord } from "./palette-fonctionnelle";
import { classer, type ContexteEtrangere } from "./notes-etrangeres";
import type { ParsedNote } from "./musicxml-parse";
import type { Voisinage } from "./voice-lines";
import { LIBELLE_ETRANGERE } from "./notes-etrangeres";

const DUREE_BEATS: Record<string, number> = { whole: 4, half: 2, quarter: 1, eighth: 0.5 };
const NAME_PC: Record<string, number> = {
  C: 0, "C#": 1, Db: 1, D: 2, "D#": 3, Eb: 3, E: 4, F: 5, "F#": 6, Gb: 6,
  G: 7, "G#": 8, Ab: 8, A: 9, "A#": 10, Bb: 10, B: 11,
};
const STEP_ALTER: Record<string, { step: string; alter: number }> = {
  C: { step: "C", alter: 0 }, "C#": { step: "C", alter: 1 }, Db: { step: "D", alter: -1 },
  D: { step: "D", alter: 0 }, "D#": { step: "D", alter: 1 }, Eb: { step: "E", alter: -1 },
  E: { step: "E", alter: 0 }, F: { step: "F", alter: 0 }, "F#": { step: "F", alter: 1 },
  Gb: { step: "G", alter: -1 }, G: { step: "G", alter: 0 }, "G#": { step: "G", alter: 1 },
  Ab: { step: "A", alter: -1 }, A: { step: "A", alter: 0 }, "A#": { step: "A", alter: 1 },
  Bb: { step: "B", alter: -1 }, B: { step: "B", alter: 0 },
};

export interface AccordCorrige {
  degree: string;
  fonction: Fonction;
  categorie: string;
  resolue?: boolean;
  mesure: number;
}

export interface NoteMelodieCorrigee {
  nom: string;       // "Do", "Ré"…
  mesure: number;
  type: string | null; // null = note de l'accord ; sinon libellé C1
}

export interface CorrectionResult {
  accords: AccordCorrige[];
  notesMelodie: NoteMelodieCorrigee[];
  score: { global: number; compatibilite: number; fonctions: number; cadence: number; feedback: string[] };
}

const TPQ = 768;

export function corrigerHarmonisation(
  melody: MelodyExercise, copie: string[][],
): CorrectionResult {
  const tonicPc = NAME_PC[melody.keySignature.replace(/m$/, "")] ?? 0;
  const mode = melody.isMinor ? "minor" : "major";
  const bpm = melody.timeSignature === "4/4" ? 4 : 3;

  // … (voir la note ci-dessous : découpage en mesures, résolution des accords,
  //     construction des ParsedNote, appel à classer, scoring.)
  // Le corps complet est à écrire ici en suivant les tests.
  throw new Error("à implémenter");
}
```

**Note à l'implémenteur :** ce module est le plus dense. Écris-le pour faire passer les tests, en réutilisant strictement `analyzeChord`, `annotateResolutions`, `resoudreAccord`, `classer`. Structure indicative :
1. **Découper** `melody.notes` en mesures (accumuler les `DUREE_BEATS` jusqu'à `bpm`).
2. **Accord actif par note** : `copie[mi]` a 1 ou 2 ids ; l'accord bascule à `bpm/2`.
3. **Résoudre** chaque id via `resoudreAccord(id, tonicPc, mode)` ; construire la séquence de `ChordResult` par `analyzeChord`, puis `annotateResolutions` sur cette séquence → `resolue`.
4. **ParsedNote** de chaque note : `onset` = beats cumulés × TPQ, `duration` = beats × TPQ, `pc` = `NAME_PC`, `step/alter` = `STEP_ALTER`, `midi` = `(octave+1)*12+pc`, `voice="1"`, `part="P1"`, `measure`, `beat`.
5. **Classer** : `Voisinage` = note mélodique précédente/suivante ; `ContexteEtrangere` = { pcsAccord (accord actif), pcsAccordPrecedent, pcsAccordSuivant, debutSegment/finSegment (bornes de l'accord actif en ticks), tempsFort (la note tombe sur le 1er temps de son accord), traverseAccords (la note déborde des bornes de l'accord) }. Une note DONT le pc est dans l'accord → `type: null`. Sinon `LIBELLE_ETRANGERE[classer(...)]` (ou `null` si `classer` rend `null`).
6. **Score** : compatibilité = proportion de notes expliquées OU classées comme étrangères légitimes (passage, broderie, retard, appoggiature, échappée, anticipation) ; fonctions = base + bonus SD→D et D→T, malus D→SD, bonus dominante secondaire résolue ; cadence = motif final V(7)→I. Combine en `global` sur 100. Rédige quelques messages de `feedback` en français.

- [ ] **Step 4: Lancer les tests, vérifier qu'ils passent**

Run: `npx vitest run src/lib/correction-harmonisation.test.ts`
Expected: PASS. Ajuste les seuils du score si besoin — mais jamais en affaiblissant une assertion structurelle (fonction, degré, type d'étrangère).

- [ ] **Step 5: Commit**

```bash
git add src/lib/correction-harmonisation.ts src/lib/correction-harmonisation.test.ts
git commit -m "feat(compo): correction de l'harmonisation par le moteur (fonctions + notes etrangeres)"
```

---

## Task 4 : Brancher le composant

**Files:**
- Modify: `src/components/CompositionGuidee.tsx`
- Modify: `src/types/composition.ts`

- [ ] **Step 1: Types**

Dans `src/types/composition.ts` : retirer `pool: string[]` de `MelodyExercise`. (Le champ n'est plus utilisé — la palette est générée.)

- [ ] **Step 2: La palette par groupes fonctionnels, filtrée par niveau**

Dans `CompositionGuidee.tsx`, remplacer `ChordGrid` (qui lit `exercise.pool`) par une grille qui, pour chaque mesure, propose les accords de `construirePalette(tonicPc, mode, exercise.difficulty)` — organisés en sous-sections **Tonique / Prédominante / Dominante / Chromatisme**, chaque bouton affichant `accord.nom` et, en petit, `accord.degree`. La sélection stocke l'`accord.id` dans `attempt[mi]` (toujours `string[][]`, mais des ids de palette). Dériver `tonicPc`/`mode` de `exercise.keySignature`/`isMinor`.

- [ ] **Step 3: Le panneau d'analyse**

Remplacer `HarmonizationPanel` (et son `guessNonChordType` inline) par un panneau qui appelle `corrigerHarmonisation(exercise, attempt)` et affiche, par accord, `degree` + `fonction` ; par note de mélodie, le `type` (ou « ✓ accord » si `null`). Supprimer les helpers de théorie devenus inutiles dans le composant (`parseChordPCs` local, `getChordTonesPc`, `guessNonChordType`, `SEMITONES_H`) au profit des modules.

- [ ] **Step 4: La réalisation SATB via `satb-voicing`**

Remplacer `computeATB` (et ses helpers `parseChordPCs`, `ATBVoicing`) par `realiserSATB` de `@/lib/satb-voicing`, en résolvant chaque id de copie via `resoudreAccord` pour obtenir `{ pcs, bassPc }`. La basse de la portée suit désormais le renversement. Adapter `buildATBMap`, `MelodyStaff` (rendu du SATB) et la lecture audio (`handlePlayVersion`, `handlePlaySolution`) pour passer par le résolveur.

- [ ] **Step 5: Le score**

Remplacer l'appel à `evaluateHarmonization` par `corrigerHarmonisation`, et adapter l'écran de résultats aux champs de `CorrectionResult.score` (`global`, `compatibilite`, `fonctions`, `cadence`, `feedback`). Supprimer l'import de `harmonization-engine`.

- [ ] **Step 6: Vérifier**

Run: `npx vitest run` → tout vert (les 249 + les nouveaux).
Run: `NODE_OPTIONS="--max-old-space-size=8192" npm run build` → succès. **Jamais `npx tsc --noEmit`.**

- [ ] **Step 7: Commit**

```bash
git add src/components/CompositionGuidee.tsx src/types/composition.ts
git commit -m "feat(compo): palette fonctionnelle, analyse et SATB par le moteur dans l'outil"
```

---

## Task 5 : Le contenu et le nettoyage

**Files:**
- Modify: `src/data/melodies-exercices.ts`
- Delete: `src/lib/harmonization-engine.ts` (si plus aucun import)

- [ ] **Step 1: Retirer `pool` des exercices**

Supprimer le champ `pool` des 15 exercices (il n'est plus lu). Les `suggestedChords` (noms d'accords) restent : `resoudreAccord` sait les lire.

- [ ] **Step 2: Ajouter des exercices chromatiques**

Ajouter au moins **trois** exercices mettant en avant : (a) une prédominante ii6 avant la cadence ; (b) une dominante secondaire V7/V résolue ; (c) un emprunt à bVI ou une sixte augmentée (niveau 3). Chacun avec `suggestedChords`, `solutionExplanation`, `hint`, `concepts` cohérents. Les degrés cibles doivent exister dans la palette du niveau choisi.

- [ ] **Step 3: Retirer l'ancien moteur**

Vérifier qu'aucun fichier n'importe plus `harmonization-engine` (`grep -rn "harmonization-engine" src/`). S'il ne reste que `getChordBassSpecs`, déplacer cette fonction dans un module utilitaire ou dans `satb-voicing`, puis supprimer `harmonization-engine.ts`. Sinon, adapter les imports restants.

- [ ] **Step 4: Vérifier**

Run: `npx vitest run` → vert.
Run: `NODE_OPTIONS="--max-old-space-size=8192" npm run build` → succès.

- [ ] **Step 5: Commit**

```bash
git add src/data/melodies-exercices.ts src/lib/
git commit -m "feat(compo): exercices chromatiques, retrait de l'ancien moteur d'harmonisation"
```

---

## Task 6 : Vérification d'ensemble

- [ ] **Step 1:** `npx vitest run` — tout vert.
- [ ] **Step 2:** `NODE_OPTIONS="--max-old-space-size=8192" npm run build` — succès.
- [ ] **Step 3: Contrôle pédagogique manuel.** `npm run dev`, ouvrir `/composition` :
  - la palette est groupée par fonction et **filtrée par niveau** (niveau 1 sans chromatisme, niveau 3 complet) ;
  - poser une prédominante ii6 puis un V7 : l'analyse nomme les fonctions, le score récompense la syntaxe ;
  - une dominante secondaire V7/V bien résolue est valorisée ; une note de passage de la mélodie est nommée ;
  - un `V6/5` place bien la sensible à la basse dans la portée et à l'écoute.

  **C'est ce contrôle, et non les tests, qui dit si le module a atteint son but.** Rapporter ce qu'on voit.

---

## Auto-relecture

**Couverture de la spec :**
- Palette par fonction, étiquetée par le moteur → Task 1. ✅
- Filtrage par niveau → Task 1 (`categoriesAutorisees`), Task 4 (Step 2). ✅
- Prédominantes, V/x, emprunts, napolitain, sixtes augmentées → Task 1 (`candidatsChromatiques`). ✅
- Notes étrangères par la taxonomie C1 → Task 3 (`classer`). ✅
- Score fonctionnel (SD→D→T, résolutions, cadence) → Task 3. ✅
- SATB honore les renversements → Task 2 (`realiserSATB`), Task 4 (Step 4). ✅
- Remplacement de la théorie dupliquée → Task 3 + Task 5 (suppression de `harmonization-engine`). ✅
- Contenu (pool retiré, exercices chromatiques) → Task 5. ✅

**Cohérence des types :** `AccordPalette` (Task 1) est résolu par `resoudreAccord` et consommé par `realiserSATB` (Task 2) et `corrigerHarmonisation` (Task 3) ; la copie reste `string[][]` d'ids de palette de bout en bout ; `CorrectionResult` (Task 3) est affiché par le composant (Task 4).

**Le point de vigilance, redit :** puisque palette et correction utilisent le même moteur que l'analyseur de partitions, toute étiquette de la composition guidée doit coïncider avec ce que l'analyseur afficherait — si un test attend une étiquette que le moteur ne rend pas, c'est le test qui s'aligne sur le moteur (déjà relu), jamais l'inverse.
