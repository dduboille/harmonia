# Analyse harmonique en direct (2f) — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Afficher en direct, dans l'atelier `/composer`, l'analyse harmonique (accords chiffrés, fonctions, notes étrangères, cadences) de la pièce en cours d'écriture, dans une tonalité choisie par l'élève — en réutilisant LA chaîne d'analyse du Studio, extraite de la route en module pur (et en corrigeant au passage la tonique du mode mineur).

**Architecture:** L'orchestration `analyze()` de `/api/analyse-partition` déménage dans `src/lib/analyse-resultat.ts` (pur, testé) avec une dérivation de tonique `toniqueDe(fifths, mode)` qui gère le relatif mineur ; la route ne garde que le HTTP et ré-exporte les types. `Piece` gagne un `mode` optionnel exporté en MusicXML. L'atelier analyse son propre MusicXML à chaque frappe (`useMemo`) et l'affiche dans un panneau compact `AtelierAnalyse`, sous la partition, avant « Conduite des voix ». Un sélecteur de tonalité (armure × mode) pilote gravure et analyse.

**Tech Stack:** TypeScript strict, React 19, Verovio 6.2.0, vitest.

---

## Notes transverses (à lire avant de commencer)

- **Ne JAMAIS `npx tsc --noEmit`** (OOM). Vérif types via `NODE_OPTIONS="--max-old-space-size=8192" npm run build`.
- Tests : `npx vitest run <fichier>`.
- La chaîne d'analyse est déjà pure et testée (`analyse-chaine.ts`, `harmonic-analysis.ts`,
  `modulations.ts`) — on ne la modifie PAS, on déplace son ORCHESTRATION (aujourd'hui dans la
  route, `src/app/api/analyse-partition/route.ts` fonction `analyze`, lignes ~27-173).
- `Studio.tsx` et `StudioAnalyse.tsx` importent leurs types depuis la route
  (`@/app/api/analyse-partition/route`) : les ré-exports de la route doivent rester complets.
- `NOTE_FR` (noms français des 12 pitch classes) est exporté par `harmonic-analysis.ts`.
- Modèle atelier : `Piece = { armure, chiffrage, mesures }` (`piece-model.ts:67`), export MusicXML
  par `pieceVersMusicXML` (`piece-vers-musicxml.ts`), parse par `parseMusicXML`
  (`musicxml-parse.ts`, lit déjà `<mode>`, défaut `"major"`).

---

## Task 1 : `analyse-resultat.ts` — extraction + tonique du mineur

**Files:**
- Create: `src/lib/analyse-resultat.ts`
- Test: `src/lib/analyse-resultat.test.ts`

- [ ] **Step 1 : Écrire les tests**

Créer `src/lib/analyse-resultat.test.ts` :

```ts
import { describe, it, expect } from "vitest";
import { toniqueDe, analyserPartition } from "./analyse-resultat";
import { parseMusicXML } from "./musicxml-parse";

// ── Fabrique de MusicXML (même écriture que analyse-pipeline.test.ts) ─────────

/** Une note : lettre, altération, octave, durée en noires. */
type N = [step: string, alter: number, octave: number, duree: number];

function note([step, alter, octave, duree]: N, voice: string): string {
  const alt = alter === 0 ? "" : `<alter>${alter}</alter>`;
  return (
    `<note><pitch><step>${step}</step>${alt}<octave>${octave}</octave></pitch>` +
    `<duration>${duree}</duration><voice>${voice}</voice></note>`
  );
}

/** Une mesure à deux voix, séparées par le <backup> — l'écriture réelle. */
function mesure(numero: number, haut: N[], bas: N[], attributs = ""): string {
  const duree = haut.reduce((t, n) => t + n[3], 0);
  return (
    `<measure number="${numero}">${attributs}` +
    haut.map((n) => note(n, "1")).join("") +
    `<backup><duration>${duree}</duration></backup>` +
    bas.map((n) => note(n, "2")).join("") +
    `</measure>`
  );
}

function attrs(fifths: number, mode: "major" | "minor"): string {
  return (
    `<attributes><divisions>1</divisions><key><fifths>${fifths}</fifths><mode>${mode}</mode></key>` +
    `<time><beats>4</beats><beat-type>4</beat-type></time></attributes>`
  );
}

function partition(fifths: number, mode: "major" | "minor", p1: string, p2: string): string {
  return (
    `<score-partwise><part-list><score-part id="P1"/><score-part id="P2"/></part-list>` +
    `<part id="P1">${p1}</part><part id="P2">${p2}</part></score-partwise>`
  );
}

describe("toniqueDe — la tonique d'une armure et d'un mode", () => {
  it("majeur : l'armure donne directement la tonique", () => {
    expect(toniqueDe(0, "major")).toBe(0);   // Do
    expect(toniqueDe(1, "major")).toBe(7);   // Sol
    expect(toniqueDe(-1, "major")).toBe(5);  // Fa
  });
  it("mineur : le RELATIF de l'armure (bug corrigé)", () => {
    expect(toniqueDe(0, "minor")).toBe(9);   // la mineur (et non Do !)
    expect(toniqueDe(-3, "minor")).toBe(0);  // do mineur
    expect(toniqueDe(2, "minor")).toBe(11);  // si mineur
  });
});

describe("analyserPartition — l'orchestration extraite de la route", () => {
  // Choral Do majeur : I | V | I — non-régression de l'extraction.
  const MAJEUR = partition(
    0, "major",
    mesure(1, [["G", 0, 4, 4]], [["E", 0, 4, 4]], attrs(0, "major")) +
      mesure(2, [["B", 0, 4, 4]], [["D", 0, 4, 4]]) +
      mesure(3, [["C", 0, 5, 4]], [["E", 0, 4, 4]]),
    mesure(1, [["C", 0, 4, 4]], [["C", 0, 3, 4]]) +
      mesure(2, [["G", 0, 3, 4]], [["G", 0, 2, 4]]) +
      mesure(3, [["G", 0, 3, 4]], [["C", 0, 3, 4]]),
  );

  it("majeur : tonalité, degrés et cadence parfaite", () => {
    const a = analyserPartition(parseMusicXML(MAJEUR), "test.xml");
    expect(a.tonalite).toBe("Do majeur");
    expect(a.fichier).toBe("test.xml");
    expect(a.nombreMesures).toBe(3);
    expect(a.mesures[0].accords[0].degreeNum).toBe(1);
    expect(a.mesures[1].accords[0].degreeNum).toBe(5);
    expect(a.mesures[2].accords[0].degreeNum).toBe(1);
    expect(a.cadences.some((c) => c.type === "parfaite" && c.measure === 3)).toBe(true);
  });

  // Choral la mineur (armure 0, mode minor) : i | V (avec sol#) | i.
  const MINEUR = partition(
    0, "minor",
    mesure(1, [["C", 0, 5, 4]], [["A", 0, 4, 4]], attrs(0, "minor")) +
      mesure(2, [["B", 0, 4, 4]], [["G", 1, 4, 4]]) +
      mesure(3, [["C", 0, 5, 4]], [["A", 0, 4, 4]]),
    mesure(1, [["E", 0, 3, 4]], [["A", 0, 2, 4]]) +
      mesure(2, [["E", 0, 3, 4]], [["E", 0, 2, 4]]) +
      mesure(3, [["E", 0, 3, 4]], [["A", 0, 2, 4]]),
  );

  it("mineur : armure 0 + minor = LA mineur, V reconnu comme dominante", () => {
    const a = analyserPartition(parseMusicXML(MINEUR), "test.xml");
    expect(a.tonalite).toBe("La mineur");
    expect(a.mode).toBe("minor");
    expect(a.mesures[0].accords[0].degreeNum).toBe(1);
    expect(a.mesures[1].accords[0].degreeNum).toBe(5);
    expect(a.mesures[1].accords[0].fonction).toBe("D");
    expect(a.cadences.some((c) => c.type === "parfaite" && c.measure === 3)).toBe(true);
  });
});
```

- [ ] **Step 2 : Lancer — échoue** — Run: `npx vitest run src/lib/analyse-resultat.test.ts` → FAIL (module absent).

- [ ] **Step 3 : Créer le module**

Créer `src/lib/analyse-resultat.ts`. Le corps de `analyserPartition` est la fonction `analyze()`
actuelle de `src/app/api/analyse-partition/route.ts` (lignes ~72-173), déplacée à l'identique —
SEULE la dérivation de la tonique change (elle passe par `toniqueDe`). Les interfaces
`CadenceResult`, `MesureResult`, `AnalysisResult` déménagent aussi, à l'identique.

```ts
/**
 * lib/analyse-resultat.ts
 * Harmonia — L'ORCHESTRATION de l'analyse : d'une partition lue (ParsedScore) au
 * résultat complet (accords par mesure, cadences, chromatisme, plan tonal).
 *
 * Extraite de la route `/api/analyse-partition` pour la même raison que la chaîne
 * avant elle : le Studio, l'analyseur ET l'atelier `/composer` doivent exécuter LA
 * même analyse — celle-ci tourne au navigateur (aucune dépendance serveur), l'atelier
 * l'appelle à chaque frappe. La route, elle, n'orchestre que le HTTP.
 *
 * LA TONIQUE : l'armure ne suffit pas — armure 0 c'est Do majeur OU la mineur. En
 * mode mineur, la tonique est le RELATIF de l'armure (majeure + 9 demi-tons). C'est
 * la correction d'un bug historique de la route, qui lisait « Do mineur » là où la
 * pièce était en la mineur.
 */

import type { ParsedScore } from "./musicxml-parse";
import { analyserHarmonie, type AccordAnalyse } from "./analyse-chaine";
import {
  annotateResolutions,
  buildChromaEvents,
  NOTE_FR,
  type ChordResult,
  type ChromaEvent,
} from "./harmonic-analysis";
import { construirePlanTonal, type PlanTonal } from "./modulations";

// ── Types (déménagés de la route, à l'identique) ──────────────────────────────

export interface CadenceResult {
  type: "parfaite" | "plagale" | "rompue" | "demi";
  label: string;
  measure: number;
  chords: string[];
}

export interface MesureResult {
  numero: number;
  /** Chaque accord porte, le cas échéant, les notes qu'il ÉCARTE (cf. `AccordAnalyse`). */
  accords: AccordAnalyse[];
}

export interface AnalysisResult {
  fichier: string;
  tonalite: string;
  tonicFr: string;
  mode: "major" | "minor";
  nombreMesures: number;
  signature: string;
  mesures: MesureResult[];
  cadences: CadenceResult[];
  nombreChromatiques: number;
  chromatisme: {
    tonicisations: number;
    emprunts: number;
    napolitains: number;
    sixtesAugmentees: number;
    inexpliques: number;
    evenements: ChromaEvent[];
  };
  planTonal: PlanTonal;
}

// ── La tonique ────────────────────────────────────────────────────────────────

/** Tonique MAJEURE (pitch class) de chaque armure. */
const FIFTHS_PC = new Map<number, number>([
  [0, 0], [1, 7], [2, 2], [3, 9], [4, 4], [5, 11], [6, 6], [7, 1],
  [-1, 5], [-2, 10], [-3, 3], [-4, 8], [-5, 1], [-6, 6], [-7, 11],
]);

/** Tonique (pitch class) d'une armure et d'un mode. Mineur = RELATIF de l'armure. */
export function toniqueDe(fifths: number, mode: "major" | "minor"): number {
  const majeure = FIFTHS_PC.get(fifths) ?? 0;
  return mode === "minor" ? (majeure + 9) % 12 : majeure;
}

// ── L'analyse complète ────────────────────────────────────────────────────────

/** L'analyse complète d'une partition déjà lue. Pure ; peut tourner au navigateur. */
export function analyserPartition(score: ParsedScore, fichier: string): AnalysisResult {
  const { mode, signature } = score;

  const tonicPc = toniqueDe(score.fifths, mode);
  const tonicFr = NOTE_FR[tonicPc] ?? "Do";
  const tonalite = `${tonicFr} ${mode === "major" ? "majeur" : "mineur"}`;

  // LA CHAÎNE. Elle segmente au temps mais VOIT toute note qui sonne, choisit chaque
  // accord par le coût de ce qu'il explique contre ce qu'il écarte, fusionne les temps
  // de même harmonie (le rythme harmonique), et nomme les notes étrangères.
  // Cf. `@/lib/analyse-chaine` — toute la théorie y est, et elle y est testée.
  const segments = analyserHarmonie(score, tonicPc, mode);

  const accordsParMesure = new Map<number, AccordAnalyse[]>();
  const chordSequence: Array<{ result: ChordResult; measure: number }> = [];

  for (const { measure, result } of segments) {
    const liste = accordsParMesure.get(measure) ?? [];
    liste.push(result);
    accordsParMesure.set(measure, liste);
    chordSequence.push({ result, measure });
  }

  const mesures: MesureResult[] = score.measures.map((m) => ({
    numero: m.numero,
    accords: accordsParMesure.get(m.numero) ?? [],
  }));

  // ── Arbitrage par la résolution (analyse au niveau de la SÉQUENCE) ──
  //
  // Cet appel peut CHANGER le degré, la catégorie, la cible et même la
  // fondamentale d'un accord (promotion en dominante secondaire, rétrogradation
  // en emprunt, révision de la cible d'une 7e diminuée). Il doit donc précéder
  // tout ce qui lit ces étiquettes : le comptage du chromatisme comme la
  // détection des cadences.
  annotateResolutions(chordSequence.map((c) => c.result), tonicPc, mode);

  // ── Plan tonal (les MODULATIONS) ──
  //
  // On construit le plan tonal APRÈS `annotateResolutions` : la détection des
  // modulations relit chaque accord dans une tonalité candidate, et cette lecture
  // n'a de sens que sur des degrés déjà stabilisés (dominantes secondaires promues,
  // cibles révisées). Couche PURE au-dessus de la séquence, cf. `@/lib/modulations`.
  const planTonal = construirePlanTonal(chordSequence, { tonicPc, mode });

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

  // Tout accord non diatonique compte pour le chromatisme (et plus seulement
  // ceux dont la fonction est inconnue : une dominante secondaire a une fonction).
  const nombreChromatiques = chordSequence.filter(
    ({ result }) => result.categorie !== "diatonique",
  ).length;

  // Cadence detection on the chord sequence
  const cadences: CadenceResult[] = [];
  for (let i = 1; i < chordSequence.length; i++) {
    const prev = chordSequence[i - 1].result;
    const curr = chordSequence[i].result;
    const prevName = `${prev.rootFr}${prev.quality}`;
    const currName = `${curr.rootFr}${curr.quality}`;
    const m = chordSequence[i].measure;

    if (prev.degreeNum === 5 && curr.degreeNum === 1 && curr.fonction === "T") {
      cadences.push({ type: "parfaite", label: "Cadence parfaite", measure: m, chords: [prevName, currName] });
    } else if (prev.degreeNum === 4 && curr.degreeNum === 1 && curr.fonction === "T") {
      cadences.push({ type: "plagale",  label: "Cadence plagale",  measure: m, chords: [prevName, currName] });
    } else if (prev.degreeNum === 5 && prev.fonction === "D" && curr.degreeNum === 6) {
      cadences.push({ type: "rompue",   label: "Cadence rompue",   measure: m, chords: [prevName, currName] });
    } else if (
      curr.degreeNum === 5 && curr.fonction === "D" &&
      (i === chordSequence.length - 1 || chordSequence[i + 1]?.result.degreeNum !== 1)
    ) {
      cadences.push({ type: "demi", label: "Demi-cadence", measure: m, chords: [prevName, currName] });
    }
  }

  return {
    fichier,
    tonalite,
    tonicFr,
    mode,
    nombreMesures: score.measures.length,
    signature,
    mesures,
    cadences,
    nombreChromatiques,
    chromatisme,
    planTonal,
  };
}
```

- [ ] **Step 4 : Lancer — passe** — Run: `npx vitest run src/lib/analyse-resultat.test.ts` → PASS.
  (Si l'assertion `fonction === "D"` du test mineur échoue parce que le moteur classe
  l'accord autrement, NE PAS modifier le moteur : vérifier d'abord la fixture — le sol♯
  doit bien être `["G", 1, 4, 4]` — puis STOP et demander à Dany.)

- [ ] **Step 5 : Commit**

```bash
git add src/lib/analyse-resultat.ts src/lib/analyse-resultat.test.ts
git commit -m "feat(analyse): module pur analyse-resultat — orchestration extraite + tonique du relatif mineur"
```

---

## Task 2 : la route ne garde que le HTTP

**Files:**
- Modify: `src/app/api/analyse-partition/route.ts`

- [ ] **Step 1 : Rebrancher la route sur le module**

Dans `src/app/api/analyse-partition/route.ts` :

1. Remplacer le bloc d'imports et de ré-exports du haut du fichier (tout ce qui précède
   `// ── Types ───` inclus, jusqu'à la fin de `const FIFTHS_PC = ...`) par :

```ts
import { auth } from "@clerk/nextjs/server";
import { getUserPlan } from "@/lib/progression";
import { unzipSync, strFromU8 } from "fflate";
import { parseMusicXML } from "@/lib/musicxml-parse";
import { analyserPartition } from "@/lib/analyse-resultat";
import type { AccordAnalyse, NoteEtrangere } from "@/lib/analyse-chaine";
import type { Fonction, Categorie, ChordResult, ChromaEvent } from "@/lib/harmonic-analysis";

// L'ANALYSE vit dans `@/lib/analyse-resultat` (orchestration) au-dessus de
// `@/lib/analyse-chaine` (la théorie) — toutes deux pures et testées, et partagées
// avec l'atelier `/composer` qui les exécute au navigateur. Cette route n'orchestre
// que le HTTP. Les ré-exports ci-dessous préservent les imports existants
// (Studio.tsx, StudioAnalyse.tsx, AnalysePartition.tsx…).
export type { Fonction, Categorie, ChordResult, ChromaEvent, AccordAnalyse, NoteEtrangere };
export type { AnalysisResult, MesureResult, CadenceResult } from "@/lib/analyse-resultat";
```

2. Supprimer ENTIÈREMENT les interfaces locales `CadenceResult`, `MesureResult`,
   `AnalysisResult`, la constante `FIFTHS_PC` et la fonction `analyze(...)` (elles vivent
   désormais dans `analyse-resultat.ts`).

3. Dans `POST`, remplacer :

```ts
    return Response.json(analyze(xmlText, file.name));
```

par :

```ts
    return Response.json(analyserPartition(parseMusicXML(xmlText), file.name));
```

Le reste de `POST` (auth, plan, formats, .mxl) ne change pas.

- [ ] **Step 2 : Vérifier le build (ré-exports + suppression)**

Run: `NODE_OPTIONS="--max-old-space-size=8192" npm run build`
Expected: succès — `Studio.tsx` et `StudioAnalyse.tsx` compilent sans changement.

- [ ] **Step 3 : Lancer toute la suite** — Run: `npx vitest run` → tout vert.

- [ ] **Step 4 : Commit**

```bash
git add src/app/api/analyse-partition/route.ts
git commit -m "refactor(analyse): la route analyse-partition ne garde que le HTTP"
```

---

## Task 3 : le mode dans le modèle et l'export MusicXML

**Files:**
- Modify: `src/lib/piece-model.ts:67-71` (interface `Piece`)
- Modify: `src/lib/piece-vers-musicxml.ts:142-151` (`attributsXML`)
- Test: `src/lib/piece-vers-musicxml.test.ts` (ajout)
- Test: `src/lib/analyse-resultat.test.ts` (ajout : aller-retour atelier)

- [ ] **Step 1 : Écrire les tests**

Ajouter dans `src/lib/piece-vers-musicxml.test.ts` (adapter les imports existants du fichier ;
il existe déjà des fabriques de pièces dans ce fichier — réutiliser la plus simple) :

```ts
describe("le mode dans l'export", () => {
  it("sans mode : <mode>major</mode> par défaut", () => {
    const piece: Piece = {
      armure: 0, chiffrage: { temps: 4, unite: 4 },
      mesures: [{ voix: { soprano: [], alto: [], tenor: [], basse: [] } }],
    };
    expect(pieceVersMusicXML(piece)).toContain("<mode>major</mode>");
  });
  it("mode minor : <mode>minor</mode>", () => {
    const piece: Piece = {
      armure: 0, mode: "minor", chiffrage: { temps: 4, unite: 4 },
      mesures: [{ voix: { soprano: [], alto: [], tenor: [], basse: [] } }],
    };
    expect(pieceVersMusicXML(piece)).toContain("<mode>minor</mode>");
  });
});
```

Ajouter dans `src/lib/analyse-resultat.test.ts` (compléter les imports du fichier) :

```ts
import { pieceVersMusicXML } from "./piece-vers-musicxml";
import type { Piece, Note, NomVoix, Voix } from "./piece-model";
```

```ts
describe("aller-retour atelier : Piece → MusicXML → parse → analyse", () => {
  function ronde(lettre: Note["hauteurs"][0]["lettre"], octave: number): Note {
    return { type: "note", hauteurs: [{ lettre, alteration: 0, octave }], duree: { base: "ronde", points: 0 } };
  }
  /** Un accord SATB par mesure (rondes). */
  function choral(accords: Array<Record<NomVoix, Note>>): Piece {
    return {
      armure: 0, chiffrage: { temps: 4, unite: 4 },
      mesures: accords.map((a) => ({
        voix: {
          soprano: [a.soprano] as Voix, alto: [a.alto] as Voix,
          tenor: [a.tenor] as Voix, basse: [a.basse] as Voix,
        },
      })),
    };
  }

  it("I–IV–V–I en Do : degrés et cadence parfaite en direct", () => {
    const piece = choral([
      { soprano: ronde("G", 4), alto: ronde("E", 4), tenor: ronde("C", 4), basse: ronde("C", 3) }, // I
      { soprano: ronde("A", 4), alto: ronde("F", 4), tenor: ronde("C", 4), basse: ronde("F", 3) }, // IV
      { soprano: ronde("B", 4), alto: ronde("D", 4), tenor: ronde("G", 3), basse: ronde("G", 2) }, // V
      { soprano: ronde("C", 5), alto: ronde("E", 4), tenor: ronde("G", 3), basse: ronde("C", 3) }, // I
    ]);
    const a = analyserPartition(parseMusicXML(pieceVersMusicXML(piece)), "");
    expect(a.tonalite).toBe("Do majeur");
    expect(a.mesures.map((m) => m.accords[0]?.degreeNum)).toEqual([1, 4, 5, 1]);
    expect(a.cadences.some((c) => c.type === "parfaite" && c.measure === 4)).toBe(true);
  });
});
```

- [ ] **Step 2 : Lancer — échoue** — Run: `npx vitest run src/lib/piece-vers-musicxml.test.ts src/lib/analyse-resultat.test.ts` → FAIL (`mode` inconnu de `Piece`, `<mode>` absent de l'export).

- [ ] **Step 3 : Implémenter**

Dans `src/lib/piece-model.ts`, compléter l'interface `Piece` :

```ts
export interface Piece {
  armure: number;                          // -7..+7
  /** Mode de la tonalité (l'armure ne suffit pas : 0 = Do majeur OU la mineur). Défaut : major. */
  mode?: "major" | "minor";
  chiffrage: { temps: number; unite: number };
  mesures: Mesure[];
}
```

Dans `src/lib/piece-vers-musicxml.ts`, fonction `attributsXML`, remplacer la ligne de l'armure :

```ts
    `<key><fifths>${piece.armure}</fifths></key>` +
```

par :

```ts
    `<key><fifths>${piece.armure}</fifths><mode>${piece.mode ?? "major"}</mode></key>` +
```

- [ ] **Step 4 : Lancer — passe** — Run: `npx vitest run src/lib/piece-vers-musicxml.test.ts src/lib/analyse-resultat.test.ts` → PASS.

- [ ] **Step 5 : Commit**

```bash
git add src/lib/piece-model.ts src/lib/piece-vers-musicxml.ts src/lib/piece-vers-musicxml.test.ts src/lib/analyse-resultat.test.ts
git commit -m "feat(compo): le mode (majeur/mineur) dans le modele de piece et l'export MusicXML"
```

---

## Task 4 : `AtelierAnalyse` — le panneau compact

**Files:**
- Modify: `src/components/StudioAnalyse.tsx` (exporter les styles partagés)
- Create: `src/components/AtelierAnalyse.tsx`

- [ ] **Step 1 : Exporter les briques de `StudioAnalyse`**

Dans `src/components/StudioAnalyse.tsx`, préfixer par `export` (sans rien changer d'autre) :

```ts
export const FONC_STYLE: Record<Fonction, { bg: string; color: string; label: string }> = { ... };
export const CAT_STYLE: Record<Categorie, { bg: string; color: string; label: string }> = { ... };
export function nomAccordAffichable(categorie: Categorie, nom: string): string | null { ... }
export function libelleEtrangere(e: NoteEtrangere): string { ... }
```

(Les corps ne changent pas — seul le mot-clé `export` s'ajoute aux quatre déclarations.)

- [ ] **Step 2 : Créer le composant**

Créer `src/components/AtelierAnalyse.tsx` :

```tsx
"use client";

import React from "react";
import type { AnalysisResult } from "@/lib/analyse-resultat";
import {
  FONC_STYLE, CAT_STYLE, nomAccordAffichable, libelleEtrangere,
} from "@/components/StudioAnalyse";

/**
 * AtelierAnalyse.tsx
 * Harmonia — L'analyse harmonique EN DIRECT de l'atelier `/composer` : le pendant
 * compact de StudioAnalyse. Une ligne par mesure ANALYSÉE (accords chiffrés, degré,
 * fonction, notes étrangères), les cadences signalées à leur mesure. Pas de plan
 * tonal ni de compteurs : sur 8 mesures d'exercice, ils chargent plus qu'ils
 * n'éclairent. Pas de « mesure active » non plus — ici on écrit, on ne suit pas
 * une lecture.
 */

const pastille = (bg: string, color: string): React.CSSProperties => ({
  background: bg, color, padding: "1px 8px", borderRadius: 10,
  fontSize: 11, fontWeight: 700,
});

export default function AtelierAnalyse({ analyse }: { analyse: AnalysisResult | null }) {
  const lignes = analyse ? analyse.mesures.filter((m) => m.accords.length > 0) : [];

  if (lignes.length === 0) {
    return (
      <p style={{ fontSize: 13, color: "#999", margin: 0, fontFamily: "system-ui, sans-serif" }}>
        Posez des notes pour voir l'analyse.
      </p>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      {/* La tonalité lue : le rappel de ce que le moteur regarde. */}
      <div style={{ fontSize: 11, color: "#999", fontFamily: "system-ui, sans-serif", marginBottom: 2 }}>
        Lue en <strong style={{ color: "#5C3D6E" }}>{analyse!.tonalite}</strong>
      </div>

      {lignes.map((m) => {
        const cadences = analyse!.cadences.filter((c) => c.measure === m.numero);
        return (
          <div
            key={m.numero}
            style={{
              display: "flex", alignItems: "baseline", flexWrap: "wrap", gap: 8,
              padding: "6px 10px", borderRadius: 6,
              border: "0.5px solid #e0dbd3", background: "#fff",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            <span style={{ fontSize: 11, color: "#999", fontWeight: 600, minWidth: 30 }}>
              m. {m.numero}
            </span>

            {m.accords.map((a, i) => {
              const nom = nomAccordAffichable(a.categorie, `${a.rootFr}${a.quality}`);
              return (
                <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 5, flexWrap: "wrap" }}>
                  <strong style={{ fontSize: 13, color: "#1a1a1a", fontFamily: "Georgia, serif" }}>
                    {nom ?? "—"}
                    {a.bassFr && a.bassFr !== a.rootFr && (
                      <span style={{ fontSize: 11, color: "#999", fontWeight: 400 }}>/{a.bassFr}</span>
                    )}
                  </strong>
                  <span style={pastille("#F0EBF8", "#5C3D6E")}>{a.degree}</span>
                  {a.fonction !== "?" ? (
                    <span style={pastille(FONC_STYLE[a.fonction].bg, FONC_STYLE[a.fonction].color)}>
                      {FONC_STYLE[a.fonction].label}
                    </span>
                  ) : (
                    <span style={pastille("#F5F5F5", "#999")}>chr</span>
                  )}
                  {a.categorie !== "diatonique" && (
                    <span style={{ ...pastille(CAT_STYLE[a.categorie].bg, CAT_STYLE[a.categorie].color), fontSize: 10, whiteSpace: "nowrap" }}>
                      {CAT_STYLE[a.categorie].label}
                    </span>
                  )}
                  {a.notesEtrangeres?.map((e, ei) => (
                    <span key={ei} title={`voix ${e.voix}`} style={{ ...pastille("#FDF3E3", "#8A5A12"), fontSize: 10, fontWeight: 600, whiteSpace: "nowrap" }}>
                      {libelleEtrangere(e)}
                    </span>
                  ))}
                  {i < m.accords.length - 1 && <span style={{ color: "#ddd" }}>·</span>}
                </span>
              );
            })}

            {cadences.map((c, ci) => (
              <span key={ci} style={{ ...pastille("#E1F5EE", "#0F6E56"), marginLeft: "auto", whiteSpace: "nowrap" }}>
                {c.label}
              </span>
            ))}
          </div>
        );
      })}
    </div>
  );
}
```

- [ ] **Step 3 : Vérifier le build** — Run: `NODE_OPTIONS="--max-old-space-size=8192" npm run build` → succès (composant pas encore branché ; exports additifs).

- [ ] **Step 4 : Commit**

```bash
git add src/components/StudioAnalyse.tsx src/components/AtelierAnalyse.tsx
git commit -m "feat(compo): AtelierAnalyse — panneau compact d'analyse (briques StudioAnalyse exportees)"
```

---

## Task 5 : l'atelier — sélecteur de tonalité + analyse en direct

**Files:**
- Modify: `src/components/AtelierComposition.tsx`

- [ ] **Step 1 : Imports et constantes**

Dans `src/components/AtelierComposition.tsx`, ajouter les imports :

```ts
import AtelierAnalyse from "@/components/AtelierAnalyse";
import { analyserPartition, toniqueDe, type AnalysisResult } from "@/lib/analyse-resultat";
import { NOTE_FR } from "@/lib/harmonic-analysis";
```

Ajouter près des autres constantes de module (après `VOIX_META`) :

```ts
/** Les 15 armures, du plus bémolisé au plus diésé. */
const ARMURES = [-7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7];

/**
 * Libellé d'une tonalité : « Do majeur », « La mineur », « Sol majeur (1♯) »…
 * L'armure est rappelée entre parenthèses — elle distingue les enharmonies
 * (Fa♯ majeur 6♯ / Sol♭ majeur 6♭, même pitch class).
 */
function libelleTonalite(fifths: number, mode: "major" | "minor"): string {
  const nom = `${NOTE_FR[toniqueDe(fifths, mode)] ?? "?"} ${mode === "major" ? "majeur" : "mineur"}`;
  if (fifths === 0) return nom;
  return `${nom} (${Math.abs(fifths)}${fifths > 0 ? "♯" : "♭"})`;
}
```

- [ ] **Step 2 : État et analyse mémoïsée**

`pieceEditionVierge()` : ajouter `mode: "major"` à l'objet retourné :

```ts
  return {
    armure: 0,
    mode: "major",
    chiffrage: { temps: 4, unite: 4 },
    ...
```

Après le `useMemo` de `fautes`, ajouter :

```ts
  // Analyse harmonique en direct : LA chaîne du Studio, au navigateur, à chaque
  // frappe. Dépend de `musicxml` (qui porte armure, mode et notes).
  const analyse = useMemo<AnalysisResult | null>(() => {
    try {
      return analyserPartition(parseMusicXML(musicxml), "");
    } catch {
      return null; // pièce vide ou non analysable : le panneau montre son état vide
    }
  }, [musicxml]);
```

Ajouter le callback (près de `choisirVoix`) :

```ts
  // Changer de tonalité ne TRANSPOSE pas : les notes gardent leurs hauteurs, seule
  // la notation (armure) et la lecture analytique changent.
  const choisirTonalite = useCallback((armure: number, mode: "major" | "minor") => {
    setPiece((p) => ({ ...p, armure, mode }));
  }, []);
```

- [ ] **Step 3 : Le sélecteur de tonalité**

Dans le JSX de la barre « Sélecteur de voix + repère de position », insérer APRÈS le bloc
`<div>` des boutons S/A/T/B (et avant le premier `{separateur}` qui le suit) :

```tsx
          {separateur}
          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
            <span style={groupeLabel}>TONALITÉ</span>
            <select
              value={`${piece.armure}|${piece.mode ?? "major"}`}
              onChange={(e) => {
                const [f, m] = e.target.value.split("|");
                choisirTonalite(Number(f), m as "major" | "minor");
              }}
              aria-label="Tonalité de la pièce"
              style={{ ...btn, padding: "6px 8px", maxWidth: 180 }}
            >
              <optgroup label="Majeur">
                {ARMURES.map((f) => (
                  <option key={`M${f}`} value={`${f}|major`}>{libelleTonalite(f, "major")}</option>
                ))}
              </optgroup>
              <optgroup label="Mineur">
                {ARMURES.map((f) => (
                  <option key={`m${f}`} value={`${f}|minor`}>{libelleTonalite(f, "minor")}</option>
                ))}
              </optgroup>
            </select>
          </div>
```

- [ ] **Step 4 : Le panneau**

Dans le JSX, insérer entre le bloc de la partition (`<StudioScore …/>` et son conteneur) et le
panneau « Conduite des voix » (l'analyse dit ce qu'on écrit, la conduite ce qui cloche) :

```tsx
        {/* ── Analyse harmonique en direct ──────────────────────────── */}
        <div style={{ ...carte }}>
          <h2 style={{ fontSize: 15, fontWeight: 600, color: "#1a1a1a", margin: "0 0 10px", fontFamily: "Georgia, serif" }}>
            Analyse harmonique
          </h2>
          <AtelierAnalyse analyse={analyse} />
        </div>
```

- [ ] **Step 5 : Vérifier le build** — Run: `NODE_OPTIONS="--max-old-space-size=8192" npm run build` → succès.

- [ ] **Step 6 : Lancer toute la suite** — Run: `npx vitest run` → tout vert.

- [ ] **Step 7 : Commit**

```bash
git add src/components/AtelierComposition.tsx
git commit -m "feat(compo): atelier — selecteur de tonalite + analyse harmonique en direct"
```

---

## Task 6 : Vérification finale

- [ ] **Step 1 : Build + tests complets**

Run: `NODE_OPTIONS="--max-old-space-size=8192" npm run build && npx vitest run`
Expected: build OK, tous les tests verts.

- [ ] **Step 2 : Contrôle manuel (Dany, en production, Pro)**

Sur `/composer` : écrire Do–Fa–Sol–Do en accords SATB → le panneau chiffre I, IV, V, I et signale
la cadence parfaite, en direct à chaque frappe. Passer la tonalité en « La mineur » → l'analyse
se relit dans le nouveau ton (l'armure gravée ne bouge pas pour armure 0 ; choisir « Sol majeur
(1♯) » doit regraver avec un dièse à la clé, sans transposer les notes). Sur le Studio : un
import majeur s'analyse comme avant ; un import en la mineur affiche enfin « La mineur ».
