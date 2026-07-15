# Tonalité glissante (modulations) — Plan d'implémentation

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Détecter les modulations vers les tons voisins, confirmées par une cadence, avec l'accord pivot en double étiquette, et produire un plan tonal de la pièce.

**Architecture :** Une couche pure au-dessus de la suite d'accords, `src/lib/modulations.ts`. Elle ne réécrit aucune théorie : elle **rejoue `analyzeChord` calé sur une tonalité candidate** (cette fonction prend déjà tonique et mode en paramètres) pour tester si une région colle mieux à un ton voisin. Balayage séquentiel avec état : la tonalité courante bascule dès qu'une cadence dans un voisin est confirmée par une prédominante préparée, et le pivot est le dernier accord commun aux deux tons.

**Tech Stack :** TypeScript strict, vitest, Next.js 16. Aucune dépendance nouvelle.

**Spec :** `docs/superpowers/specs/2026-07-15-modulations-design.md`

**Contraintes d'environnement :**
- **NE JAMAIS lancer `npx tsc --noEmit`** : cela sature la mémoire de ce poste. Le contrôle d'intégration est `NODE_OPTIONS="--max-old-space-size=8192" npm run build`.
- Tests : `npx vitest run`. La suite compte **224 tests** avant ce chantier.
- TypeScript strict, pas de `any`. Commentaires et identifiants en **français**, disant le POURQUOI.

**Ce qui existe déjà (à lire avant de commencer) :**
- `src/lib/harmonic-analysis.ts` — exporte `analyzeChord(chord, tonicPc, mode)`, `diatonicSet(tonicPc, mode)`, `NOTE_FR`, `ROMANS`, les types `Chord` et `ChordResult`. `ChordResult` porte `{ rootPc, rootFr, quality, pcs, bassPc?, degree, degreeNum, fonction, categorie, cible?, beat? }`.
- `src/app/api/analyse-partition/route.ts` — construit `chordSequence: Array<{ result: ChordResult; measure: number }>`, applique `annotateResolutions`, détecte les cadences du ton principal, et renvoie `AnalysisResult`. C'est ici que le plan tonal se branchera, **après** `annotateResolutions`.
- `src/lib/analyse-pipeline.test.ts` — le test de bout en bout sur un choral à quatre voix **sans modulation**. C'est le garde-fou : il ne doit pas bouger.

---

## Structure des fichiers

| Fichier | Responsabilité |
|---|---|
| `src/lib/modulations.ts` *(nouveau)* | Tout l'algorithme : tons voisins, détection de cadence dans un ton, prédominante préparée, pivot, et l'assembleur `construirePlanTonal`. Pur. |
| `src/app/api/analyse-partition/route.ts` *(modifié)* | Appelle `construirePlanTonal`, ajoute `planTonal` à `AnalysisResult`. |
| `src/components/AnalysePartition.tsx` *(modifié)* | Onglet « Plan tonal » ; double étiquette du pivot dans le tableau des mesures. |
| `src/app/api/analyse-partition/commentaire/route.ts` *(modifié)* | Le prompt raconte le plan tonal. |
| `src/lib/analyse-pipeline.test.ts` *(modifié)* | Un second choral, qui module, en test de bout en bout. |

---

## Task 1 : Tonalités et voisinage

**Files:**
- Create: `src/lib/modulations.ts`
- Test: `src/lib/modulations.test.ts`

- [ ] **Step 1: Écrire les tests qui échouent**

Créer `src/lib/modulations.test.ts` :

```ts
import { describe, it, expect } from "vitest";
import {
  nomTonalite,
  tonsVoisins,
  estDiatoniqueEn,
  type Tonalite,
} from "./modulations";
import { identifyChordFromNotes, analyzeChord, type ChordResult } from "./harmonic-analysis";

const DO: Tonalite = { tonicPc: 0, mode: "major" };
const LAm: Tonalite = { tonicPc: 9, mode: "minor" };

/** Un accord analysé, pour les tests, à partir de ses classes de hauteurs. */
function acc(pcs: number[], bassPc?: number): ChordResult {
  return analyzeChord(identifyChordFromNotes(pcs, bassPc)!, 0, "major");
}

describe("nomTonalite", () => {
  it("nomme en français", () => {
    expect(nomTonalite(DO)).toBe("Do majeur");
    expect(nomTonalite(LAm)).toBe("La mineur");
  });
});

describe("tonsVoisins — les cinq tons proches", () => {
  it("depuis Do majeur : Sol, Fa majeurs ; La, Mi, Ré mineurs", () => {
    const noms = tonsVoisins(DO).map(nomTonalite).sort();
    expect(noms).toEqual(
      ["Fa majeur", "La mineur", "Mi mineur", "Ré mineur", "Sol majeur"].sort(),
    );
  });

  it("depuis La mineur : Do majeur, Ré/Mi mineurs, Fa/Sol majeurs (mêmes armures)", () => {
    const noms = tonsVoisins(LAm).map(nomTonalite).sort();
    expect(noms).toEqual(
      ["Do majeur", "Ré mineur", "Mi mineur", "Fa majeur", "Sol majeur"].sort(),
    );
  });

  it("un ton n'est jamais son propre voisin", () => {
    expect(tonsVoisins(DO).some((t) => t.tonicPc === 0 && t.mode === "major")).toBe(false);
  });
});

describe("estDiatoniqueEn", () => {
  it("Do majeur est diatonique en Do et en Sol, pas en Ré", () => {
    const doMaj = acc([0, 4, 7]);
    expect(estDiatoniqueEn(doMaj, DO)).toBe(true);
    expect(estDiatoniqueEn(doMaj, { tonicPc: 7, mode: "major" })).toBe(true);  // Sol : Do = IV
    expect(estDiatoniqueEn(doMaj, { tonicPc: 2, mode: "major" })).toBe(false); // Ré : Do# attendu
  });
});
```

- [ ] **Step 2: Lancer les tests, vérifier qu'ils échouent**

Run: `npx vitest run src/lib/modulations.test.ts`
Expected: FAIL — `Failed to resolve import "./modulations"`.

- [ ] **Step 3: Écrire le socle du module**

Créer `src/lib/modulations.ts` :

```ts
/**
 * lib/modulations.ts
 * Harmonia — La TONALITÉ GLISSANTE : où la pièce module, par quels pivots.
 *
 * Ce module n'invente aucune théorie. `analyzeChord` sait déjà lire un accord DANS
 * une tonalité donnée (tonique et mode en paramètres) : détecter une modulation vers
 * Sol, c'est rejouer cette lecture calée sur Sol et voir si une région y trouve sa
 * cadence. C2 est une couche AU-DESSUS de la suite d'accords, pas un nouveau moteur.
 */

import {
  analyzeChord,
  diatonicSet,
  NOTE_FR,
  type Chord,
  type ChordResult,
} from "./harmonic-analysis";

export interface Tonalite {
  tonicPc: number;
  mode: "major" | "minor";
}

export function nomTonalite(t: Tonalite): string {
  return `${NOTE_FR[t.tonicPc] ?? "?"} ${t.mode === "major" ? "majeur" : "mineur"}`;
}

/**
 * Les CINQ tons voisins (armures à un accident près) — là où va l'immense majorité
 * des modulations tonales. Depuis un ton MAJEUR : sa dominante et sa sous-dominante
 * (majeures), son relatif et les relatifs de sa dominante et de sa sous-dominante
 * (mineurs). Depuis un ton MINEUR : le même cercle, vu depuis le relatif.
 */
const VOISINS_MAJEUR: ReadonlyArray<{ offset: number; mode: "major" | "minor" }> = [
  { offset: 7, mode: "major" }, // dominante
  { offset: 5, mode: "major" }, // sous-dominante
  { offset: 9, mode: "minor" }, // relatif
  { offset: 4, mode: "minor" }, // relatif de la dominante
  { offset: 2, mode: "minor" }, // relatif de la sous-dominante
];

const VOISINS_MINEUR: ReadonlyArray<{ offset: number; mode: "major" | "minor" }> = [
  { offset: 3, mode: "major" },  // relatif majeur (III)
  { offset: 5, mode: "minor" },  // sous-dominante (iv)
  { offset: 7, mode: "minor" },  // dominante (v)
  { offset: 8, mode: "major" },  // VI
  { offset: 10, mode: "major" }, // VII
];

export function tonsVoisins(t: Tonalite): Tonalite[] {
  const table = t.mode === "major" ? VOISINS_MAJEUR : VOISINS_MINEUR;
  return table.map((v) => ({ tonicPc: (t.tonicPc + v.offset) % 12, mode: v.mode }));
}

/** Reconstruit un `Chord` minimal depuis un résultat, pour le relire dans un autre ton. */
function chordDeResult(r: ChordResult): Chord {
  return {
    rootPc: r.rootPc,
    rootFr: r.rootFr,
    quality: r.quality,
    pcs: r.pcs,
    bassPc: r.bassPc,
  };
}

/** Relit un accord DANS une tonalité donnée : c'est tout le principe de C2. */
export function analyseEn(r: ChordResult, t: Tonalite): ChordResult {
  return analyzeChord(chordDeResult(r), t.tonicPc, t.mode);
}

/** Toutes les notes de l'accord appartiennent-elles à la gamme du ton ? */
export function estDiatoniqueEn(r: ChordResult, t: Tonalite): boolean {
  const dia = diatonicSet(t.tonicPc, t.mode);
  return r.pcs.every((pc) => dia.has(pc));
}
```

- [ ] **Step 4: Lancer les tests, vérifier qu'ils passent**

Run: `npx vitest run src/lib/modulations.test.ts`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/lib/modulations.ts src/lib/modulations.test.ts
git commit -m "feat(analyse): tonalites, tons voisins et lecture d'un accord dans un ton"
```

---

## Task 2 : Cadence dans un ton, prédominante préparée

**Contexte :** une cadence dans Sol = une dominante de Sol résolue sur sa tonique. La distinction tonicisation/modulation tient à la **prédominante préparée** : la dominante du nouveau ton doit être abordée depuis ce ton (une ii, IV ou vi de Sol avant elle), en tolérant une quarte-et-sixte cadentielle (la tonique de Sol au 2e renversement) entre les deux.

**Files:**
- Modify: `src/lib/modulations.ts`
- Test: `src/lib/modulations.test.ts`

- [ ] **Step 1: Écrire les tests qui échouent**

Ajouter à `src/lib/modulations.test.ts` :

```ts
import { estDominanteDe, estToniqueDe, aPredominantePreparee } from "./modulations";

const SOL: Tonalite = { tonicPc: 7, mode: "major" };

describe("estDominanteDe / estToniqueDe", () => {
  it("Ré7 est la dominante de Sol ; Sol majeur en est la tonique", () => {
    expect(estDominanteDe(acc([2, 6, 9, 0]), SOL)).toBe(true); // Ré-Fa#-La-Do
    expect(estToniqueDe(acc([7, 11, 2]), SOL)).toBe(true);     // Sol-Si-Ré
  });

  it("Ré majeur (sans 7e) est aussi une dominante de Sol", () => {
    expect(estDominanteDe(acc([2, 6, 9]), SOL)).toBe(true);
  });

  it("Sol7 n'est pas la tonique de Sol (c'est sa dominante à lui)", () => {
    expect(estToniqueDe(acc([7, 11, 2, 5]), SOL)).toBe(false);
  });
});

describe("aPredominantePreparee — la cellule cadentielle du nouveau ton", () => {
  // Séquence en Do, virant vers Sol : ... Lam (ii de Sol) — Ré7 (V de Sol) — Sol
  const seqVersSol: ChordResult[] = [
    acc([0, 4, 7]),      // 0 Do
    acc([9, 0, 4]),      // 1 Lam  (ii de Sol)
    acc([2, 6, 9, 0]),   // 2 Ré7  (V de Sol)  ← dominante en position 2
    acc([7, 11, 2]),     // 3 Sol
  ];

  it("reconnaît la prédominante (Lam = ii de Sol) juste avant la dominante", () => {
    expect(aPredominantePreparee(seqVersSol, 2, SOL, 0)).toBe(true);
  });

  it("tolère une quarte-et-sixte cadentielle entre la prédominante et la dominante", () => {
    const avecQ64: ChordResult[] = [
      acc([9, 0, 4]),        // 0 Lam  (ii de Sol)
      acc([7, 11, 2], 2),    // 1 Sol6/4 (tonique de Sol au 2e renversement)
      acc([2, 6, 9, 0]),     // 2 Ré7  (V de Sol)
      acc([7, 11, 2]),       // 3 Sol
    ];
    expect(aPredominantePreparee(avecQ64, 2, SOL, 0)).toBe(true);
  });

  it("refuse un V/V isolé, sans prédominante du nouveau ton", () => {
    // I  V7/V  V  I  en Do : Ré7 surgit après Do, aucune cellule en Sol.
    const isole: ChordResult[] = [
      acc([0, 4, 7]),      // 0 Do
      acc([2, 6, 9, 0]),   // 1 Ré7 (V de Sol) ← dominante en position 1
      acc([7, 11, 2]),     // 2 Sol
      acc([0, 4, 7]),      // 3 Do
    ];
    expect(aPredominantePreparee(isole, 1, SOL, 0)).toBe(false);
  });

  it("ne remonte pas au-delà de la borne gauche (début de région)", () => {
    expect(aPredominantePreparee(seqVersSol, 2, SOL, 2)).toBe(false);
  });
});
```

- [ ] **Step 2: Lancer les tests, vérifier qu'ils échouent**

Run: `npx vitest run src/lib/modulations.test.ts`
Expected: FAIL — `estDominanteDe is not exported`.

- [ ] **Step 3: Implémenter**

Ajouter à `src/lib/modulations.ts` :

```ts
/** L'accord est-il la DOMINANTE du ton (5e degré, fonction D) ? */
export function estDominanteDe(r: ChordResult, t: Tonalite): boolean {
  const lu = analyseEn(r, t);
  return lu.degreeNum === 5 && lu.fonction === "D";
}

/** L'accord est-il la TONIQUE du ton (1er degré, fonction T) ? */
export function estToniqueDe(r: ChordResult, t: Tonalite): boolean {
  const lu = analyseEn(r, t);
  return lu.degreeNum === 1 && lu.fonction === "T";
}

/** Degrés de PRÉDOMINANTE du nouveau ton : ii, IV, vi. */
const DEGRES_PREDOMINANTE = new Set([2, 4, 6]);

/**
 * Y a-t-il, avant la dominante (à `indexDominante`), une PRÉDOMINANTE du ton `t`,
 * annonçant une vraie cellule cadentielle — et non un simple V/V de passage ?
 *
 * On remonte tant que les accords appartiennent à `t` (la cellule est d'un seul
 * tenant), sans dépasser `borneGauche` (le début de la région courante). Une
 * quarte-et-sixte cadentielle — la tonique de `t` au 2e renversement — se glisse
 * légitimement entre la prédominante et la dominante : on la traverse. Le premier
 * accord ÉTRANGER au ton rompt la cellule.
 */
export function aPredominantePreparee(
  seq: ChordResult[], indexDominante: number, t: Tonalite, borneGauche: number,
): boolean {
  for (let j = indexDominante - 1; j >= borneGauche; j--) {
    const r = seq[j];
    if (!estDiatoniqueEn(r, t)) return false; // la cellule est rompue
    const deg = analyseEn(r, t).degreeNum;
    if (DEGRES_PREDOMINANTE.has(deg)) return true; // prédominante trouvée
    if (deg === 1) continue;  // quarte-et-sixte cadentielle : on la traverse
    // Tout autre degré diatonique (une autre dominante, un iii…) ne prépare rien :
    // on continue de remonter, dans la limite de la borne.
  }
  return false;
}
```

- [ ] **Step 4: Lancer les tests, vérifier qu'ils passent**

Run: `npx vitest run src/lib/modulations.test.ts`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/lib/modulations.ts src/lib/modulations.test.ts
git commit -m "feat(analyse): cadence dans un ton et predominante preparee"
```

---

## Task 3 : L'accord pivot

**Contexte :** le pivot est le dernier accord diatonique **aux deux tonalités** avant la dominante du nouveau ton. S'il n'y en a pas (modulation sans pivot, par saut), on ne déclare rien — cela restera du chromatisme.

**Files:**
- Modify: `src/lib/modulations.ts`
- Test: `src/lib/modulations.test.ts`

- [ ] **Step 1: Écrire les tests qui échouent**

Ajouter à `src/lib/modulations.test.ts` :

```ts
import { trouvePivot } from "./modulations";

describe("trouvePivot — le dernier accord commun aux deux tons", () => {
  // Do  Lam  Ré7  Sol   —  home = Do, cible = Sol, dominante en 2.
  const seq: ChordResult[] = [
    acc([0, 4, 7]),      // 0 Do  (I en Do = IV en Sol : commun)
    acc([9, 0, 4]),      // 1 Lam (vi en Do = ii en Sol : commun) ← le dernier avant Ré7
    acc([2, 6, 9, 0]),   // 2 Ré7 (Fa# : étranger à Do)
    acc([7, 11, 2]),     // 3 Sol
  ];

  it("prend le dernier accord commun avant la dominante (Lam)", () => {
    expect(trouvePivot(seq, 2, DO, SOL, 0)).toBe(1);
  });

  it("rend null s'il n'existe aucun accord commun (modulation sans pivot)", () => {
    // Ré7 précédé d'un accord déjà étranger à Do (Fa#m) : rien de commun.
    const sansPivot: ChordResult[] = [
      acc([6, 9, 1]),      // 0 Fa#m (étranger à Do)
      acc([2, 6, 9, 0]),   // 1 Ré7
      acc([7, 11, 2]),     // 2 Sol
    ];
    expect(trouvePivot(sansPivot, 1, DO, SOL, 0)).toBeNull();
  });

  it("ne remonte pas au-delà de la borne gauche", () => {
    expect(trouvePivot(seq, 2, DO, SOL, 2)).toBeNull();
  });
});
```

- [ ] **Step 2: Lancer les tests, vérifier qu'ils échouent**

Run: `npx vitest run src/lib/modulations.test.ts`
Expected: FAIL — `trouvePivot is not exported`.

- [ ] **Step 3: Implémenter**

Ajouter à `src/lib/modulations.ts` :

```ts
/**
 * Le PIVOT : le dernier accord diatonique aux DEUX tonalités avant la dominante du
 * nouveau ton (à `indexDominante`). On remonte depuis la dominante ; le premier
 * accord commun rencontré est, par construction, le dernier avant la bascule.
 *
 * `null` s'il n'existe aucun accord commun dans la région : c'est une modulation
 * sans pivot (par saut, par juxtaposition), que la version stricte laisse en
 * chromatisme plutôt que de l'inventer.
 */
export function trouvePivot(
  seq: ChordResult[], indexDominante: number, ancien: Tonalite, nouveau: Tonalite,
  borneGauche: number,
): number | null {
  for (let j = indexDominante - 1; j >= borneGauche; j--) {
    if (estDiatoniqueEn(seq[j], ancien) && estDiatoniqueEn(seq[j], nouveau)) {
      return j;
    }
  }
  return null;
}
```

- [ ] **Step 4: Lancer les tests, vérifier qu'ils passent**

Run: `npx vitest run src/lib/modulations.test.ts`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/lib/modulations.ts src/lib/modulations.test.ts
git commit -m "feat(analyse): detection de l'accord pivot"
```

---

## Task 4 : L'assembleur — le plan tonal

**Le cœur du sous-projet.** Balayage séquentiel : la tonalité courante bascule dès qu'une cadence dans un voisin est confirmée (dominante + tonique) ET préparée (prédominante) ET pivotée (accord commun). Le pivot porte une double étiquette ; les accords de la nouvelle région sont relus dans le nouveau ton.

**Files:**
- Modify: `src/lib/modulations.ts`
- Test: `src/lib/modulations.test.ts`

- [ ] **Step 1: Écrire les tests qui échouent**

Ajouter à `src/lib/modulations.test.ts` :

```ts
import { construirePlanTonal, type AccordSequence } from "./modulations";

/** Fabrique une séquence {result, measure} à partir de pcs et d'un numéro de mesure. */
function sq(items: Array<{ pcs: number[]; bass?: number; m: number }>): AccordSequence[] {
  return items.map((it) => ({ result: acc(it.pcs, it.bass), measure: it.m }));
}

describe("construirePlanTonal", () => {
  it("Do → Sol par pivot, confirmée par la cadence", () => {
    // Do  Sol  Do | Lam(=ii Sol)  Ré7(=V Sol)  Sol(cadence)
    const seq = sq([
      { pcs: [0, 4, 7], m: 1 },   // Do   I
      { pcs: [7, 11, 2], m: 1 },  // Sol  (V en Do)
      { pcs: [0, 4, 7], m: 2 },   // Do   I  ← pivot (I en Do = IV en Sol)
      { pcs: [9, 0, 4], m: 2 },   // Lam  ii en Sol
      { pcs: [2, 6, 9, 0], m: 3 },// Ré7  V en Sol
      { pcs: [7, 11, 2], m: 3 },  // Sol  I en Sol (cadence)
    ]);
    const plan = construirePlanTonal(seq, { tonicPc: 0, mode: "major" });

    expect(plan.regions.map((r) => r.nom)).toEqual(["Do majeur", "Sol majeur"]);
    const sol = plan.regions[1];
    expect(sol.pivot).toBeDefined();
    expect(sol.pivot!.etiquetteAncienne).toBe("I");   // en Do
    expect(sol.pivot!.etiquetteNouvelle).toBe("IV");  // en Sol
    expect(sol.mesureFin).toBe(3);
  });

  it("une simple tonicisation ne module pas : I V7/V V I reste en Do", () => {
    const seq = sq([
      { pcs: [0, 4, 7], m: 1 },    // Do
      { pcs: [2, 6, 9, 0], m: 1 }, // Ré7 (V/V) — pas de prédominante de Sol avant
      { pcs: [7, 11, 2], m: 2 },   // Sol
      { pcs: [0, 4, 7], m: 2 },    // Do
    ]);
    const plan = construirePlanTonal(seq, { tonicPc: 0, mode: "major" });
    expect(plan.regions).toHaveLength(1);
    expect(plan.regions[0].nom).toBe("Do majeur");
  });

  it("modulation au relatif mineur (Do → La mineur)", () => {
    // Do  Rém(=iv Lam)  Mi7(=V Lam)  Lam(cadence)
    const seq = sq([
      { pcs: [0, 4, 7], m: 1 },     // Do  ← pivot (I en Do = III en Lam)
      { pcs: [2, 5, 9], m: 1 },     // Rém iv en Lam
      { pcs: [4, 8, 11, 2], m: 2 }, // Mi7 V en Lam
      { pcs: [9, 0, 4], m: 2 },     // Lam i (cadence)
    ]);
    const plan = construirePlanTonal(seq, { tonicPc: 0, mode: "major" });
    expect(plan.regions.map((r) => r.nom)).toEqual(["Do majeur", "La mineur"]);
  });

  it("chaîne Do → Sol → Ré", () => {
    const seq = sq([
      { pcs: [0, 4, 7], m: 1 },     // Do   pivot vers Sol
      { pcs: [9, 0, 4], m: 1 },     // Lam  ii Sol
      { pcs: [2, 6, 9, 0], m: 2 },  // Ré7  V Sol
      { pcs: [7, 11, 2], m: 2 },    // Sol  I Sol   pivot vers Ré (I Sol = IV Ré)
      { pcs: [4, 7, 11], m: 3 },    // Mim  ii Ré
      { pcs: [9, 1, 4, 7], m: 3 },  // La7  V Ré
      { pcs: [2, 6, 9], m: 4 },     // Ré   I Ré (cadence)
    ]);
    const plan = construirePlanTonal(seq, { tonicPc: 0, mode: "major" });
    expect(plan.regions.map((r) => r.nom)).toEqual(["Do majeur", "Sol majeur", "Ré majeur"]);
  });

  it("aucune modulation → une seule région couvrant toute la pièce", () => {
    const seq = sq([
      { pcs: [0, 4, 7], m: 1 },   // Do
      { pcs: [5, 9, 0], m: 1 },   // Fa
      { pcs: [7, 11, 2], m: 2 },  // Sol
      { pcs: [0, 4, 7], m: 2 },   // Do
    ]);
    const plan = construirePlanTonal(seq, { tonicPc: 0, mode: "major" });
    expect(plan.regions).toHaveLength(1);
    expect(plan.regions[0].mesureDebut).toBe(1);
    expect(plan.regions[0].mesureFin).toBe(2);
  });
});
```

- [ ] **Step 2: Lancer les tests, vérifier qu'ils échouent**

Run: `npx vitest run src/lib/modulations.test.ts`
Expected: FAIL — `construirePlanTonal is not exported`.

- [ ] **Step 3: Implémenter**

Ajouter à `src/lib/modulations.ts` :

```ts
export interface AccordSequence {
  result: ChordResult;
  measure: number;
}

export interface RegionTonale {
  tonicPc: number;
  mode: "major" | "minor";
  nom: string;
  indexDebut: number;   // position dans la séquence (incluse)
  indexFin: number;     // position dans la séquence (incluse)
  mesureDebut: number;
  mesureFin: number;
  /** L'accord charnière — absent pour la région initiale. */
  pivot?: {
    index: number;
    etiquetteAncienne: string; // degré dans le ton QUITTÉ
    etiquetteNouvelle: string; // degré dans le ton REJOINT
  };
  /** La cadence qui a confirmé cette région — absente pour la région initiale. */
  cadence?: { mesure: number };
}

export interface DegreRelu {
  index: number;
  degree: string;   // le degré dans le ton de sa région
  tonalite: string; // le nom du ton
}

export interface PlanTonal {
  regions: RegionTonale[];
  /** Étiquette de chaque accord dans le ton de SA région (pivot exclu : sa double
   *  étiquette vit dans `region.pivot`). */
  degresRelus: DegreRelu[];
}

/**
 * Construit le plan tonal par un balayage séquentiel à état. La tonalité courante
 * démarre sur `home` et bascule dès qu'une cadence dans un ton voisin est à la fois
 * CONFIRMÉE (dominante → tonique), PRÉPARÉE (prédominante du nouveau ton) et PIVOTÉE
 * (accord commun aux deux tons). Sans l'un de ces trois, on reste : c'est une
 * tonicisation, pas une modulation.
 */
export function construirePlanTonal(seq: AccordSequence[], home: Tonalite): PlanTonal {
  const regions: RegionTonale[] = [];
  const degresRelus: DegreRelu[] = [];

  let courant = home;
  let debut = 0;            // index de début de la région courante
  let pivotEntrant: RegionTonale["pivot"] | undefined; // pivot qui a ouvert la région
  let cadenceEntrante: RegionTonale["cadence"] | undefined;

  /** Clôt la région courante sur l'intervalle [debut, fin] et enregistre ses degrés. */
  const clore = (fin: number) => {
    if (fin < debut) return; // région vide (bascule immédiate) : rien à émettre
    regions.push({
      tonicPc: courant.tonicPc,
      mode: courant.mode,
      nom: nomTonalite(courant),
      indexDebut: debut,
      indexFin: fin,
      mesureDebut: seq[debut].measure,
      mesureFin: seq[fin].measure,
      pivot: pivotEntrant,
      cadence: cadenceEntrante,
    });
    for (let k = debut; k <= fin; k++) {
      // Le pivot porte une double étiquette (dans `region.pivot`) : on ne le remet
      // pas ici, pour ne pas afficher deux fois le même index.
      if (pivotEntrant && k === pivotEntrant.index) continue;
      degresRelus.push({
        index: k,
        degree: analyseEn(seq[k].result, courant).degree,
        tonalite: nomTonalite(courant),
      });
    }
  };

  let i = 1;
  while (i < seq.length - 1) {
    let bascule = false;

    for (const K of tonsVoisins(courant)) {
      // Cadence à cette position : seq[i] dominante de K, seq[i+1] tonique de K.
      if (!estDominanteDe(seq[i].result, K)) continue;
      if (!estToniqueDe(seq[i + 1].result, K)) continue;

      // Préparée ? Pivotée ? — sinon ce n'est qu'une tonicisation.
      if (!aPredominantePreparee(seq.map((s) => s.result), i, K, debut)) continue;
      const pivot = trouvePivot(seq.map((s) => s.result), i, courant, K, debut);
      if (pivot === null) continue;

      // On clôt la région courante JUSTE AVANT le pivot ; le pivot ouvre la nouvelle.
      const ancienne = analyseEn(seq[pivot].result, courant).degree;
      const nouvelle = analyseEn(seq[pivot].result, K).degree;
      clore(pivot - 1);

      debut = pivot;
      courant = K;
      pivotEntrant = { index: pivot, etiquetteAncienne: ancienne, etiquetteNouvelle: nouvelle };
      cadenceEntrante = { mesure: seq[i + 1].measure };

      i = i + 2; // on reprend le balayage APRÈS la tonique de cadence
      bascule = true;
      break;
    }

    if (!bascule) i++;
  }

  clore(seq.length - 1);
  return { regions, degresRelus };
}
```

**Note pour l'implémenteur :** `seq.map((s) => s.result)` est recalculé à chaque tour — si le profil le justifie, hisse-le hors de la boucle. Ne le fais que si les tests passent d'abord.

- [ ] **Step 4: Lancer les tests, vérifier qu'ils passent**

Run: `npx vitest run src/lib/modulations.test.ts`
Expected: PASS. Puis la suite complète :

Run: `npx vitest run`
Expected: 224 tests d'origine intacts + les nouveaux.

- [ ] **Step 5: Commit**

```bash
git add src/lib/modulations.ts src/lib/modulations.test.ts
git commit -m "feat(analyse): assembleur du plan tonal (balayage sequentiel a etat)"
```

---

## Task 5 : Brancher la route

**Files:**
- Modify: `src/app/api/analyse-partition/route.ts`

- [ ] **Step 1: Ajouter `planTonal` à `AnalysisResult` et l'appel**

Dans `src/app/api/analyse-partition/route.ts`, importer :

```ts
import { construirePlanTonal, type PlanTonal } from "@/lib/modulations";
```

Étendre `AnalysisResult` (après `chromatisme`) :

```ts
  planTonal: PlanTonal;
```

Dans `analyze`, **après** l'appel à `annotateResolutions` (les degrés y sont stabilisés) et avant le `return`, construire le plan et l'ajouter au résultat renvoyé :

```ts
  const planTonal = construirePlanTonal(chordSequence, { tonicPc, mode });
```

puis, dans l'objet retourné :

```ts
    chromatisme,
    planTonal,
  };
```

- [ ] **Step 2: Vérifier**

Run: `npx vitest run`
Expected: vert.

Run: `NODE_OPTIONS="--max-old-space-size=8192" npm run build`
Expected: build réussi. **Ne jamais lancer `npx tsc --noEmit`.**

- [ ] **Step 3: Commit**

```bash
git add src/app/api/analyse-partition/route.ts
git commit -m "feat(analyse): la route expose le plan tonal"
```

---

## Task 6 : L'interface — l'onglet « Plan tonal »

**Files:**
- Modify: `src/components/AnalysePartition.tsx`

- [ ] **Step 1: Types en miroir**

Ajouter dans `src/components/AnalysePartition.tsx`, près des autres types :

```ts
interface RegionTonale {
  nom: string;
  mesureDebut: number;
  mesureFin: number;
  pivot?: { index: number; etiquetteAncienne: string; etiquetteNouvelle: string };
  cadence?: { mesure: number };
}
interface DegreRelu { index: number; degree: string; tonalite: string; }
interface PlanTonal { regions: RegionTonale[]; degresRelus: DegreRelu[]; }
```

et dans `AnalysisResult` :

```ts
  planTonal: PlanTonal;
```

- [ ] **Step 2: Ajouter l'onglet**

Étendre le type `Tab` et le tableau `tabs` :

```ts
type Tab = "resume" | "mesures" | "cadences" | "chromatisme" | "plan" | "commentaire";
```

et, dans `tabs`, après l'entrée `chromatisme` :

```ts
    { id: "plan", label: `Plan tonal (${analysis.planTonal.regions.length})` },
```

- [ ] **Step 3: Le contenu de l'onglet — la frise des régions**

Ajouter, après le bloc `{activeTab === "chromatisme" && ( … )}` :

```tsx
{activeTab === "plan" && (
  <div>
    {analysis.planTonal.regions.length <= 1 ? (
      <div style={{ textAlign: "center", padding: "48px 0", color: "#767676", fontFamily: "system-ui, sans-serif", fontSize: 14 }}>
        Pas de modulation détectée — la pièce reste dans sa tonalité.
      </div>
    ) : (
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {analysis.planTonal.regions.map((r, i) => (
          <div key={i} style={{ background: "#fff", borderRadius: 12, padding: "16px 20px", boxShadow: "0 1px 4px rgba(0,0,0,0.07)", fontFamily: "system-ui, sans-serif" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
              <span style={{ fontSize: 15, fontWeight: 700, color: "#5C3D6E", fontFamily: "Georgia, serif" }}>{r.nom}</span>
              <span style={{ fontSize: 12, color: "#767676" }}>mesures {r.mesureDebut}–{r.mesureFin}</span>
            </div>
            {r.pivot && (
              <div style={{ fontSize: 13, color: "#555", marginTop: 8 }}>
                Pivot : <strong>{r.pivot.etiquetteAncienne}</strong> (ton précédent) = <strong>{r.pivot.etiquetteNouvelle}</strong> ({r.nom})
                {r.cadence && <> · confirmé par la cadence à la mesure {r.cadence.mesure}</>}
              </div>
            )}
          </div>
        ))}
      </div>
    )}
  </div>
)}
```

- [ ] **Step 4: La double étiquette du pivot dans le tableau des mesures**

Construire, en tête du composant de rendu (là où `analysis` est disponible), un index des degrés relus et des pivots par position d'accord. Comme le tableau des mesures itère `analysis.mesures[].accords[]` sans indice global, ajouter un compteur d'accords qui suit la position dans la séquence :

```ts
// Position globale de chaque accord (l'ordre des mesures suit l'ordre de la séquence).
const reluParIndex = new Map(analysis.planTonal.degresRelus.map((d) => [d.index, d]));
const pivotParIndex = new Map(
  analysis.planTonal.regions
    .filter((r) => r.pivot)
    .map((r) => [r.pivot!.index, r]),
);
```

Dans le rendu du tableau des mesures, maintenir un compteur `let idxAccord = 0;` avant le `flatMap`, l'incrémenter à chaque accord rendu, et afficher — quand la position est un pivot — la double étiquette à la place du degré :

```tsx
// à l'endroit où s'affiche chord.degree :
{(() => {
  const pivot = pivotParIndex.get(idxAccord);
  const relu = reluParIndex.get(idxAccord);
  if (pivot) {
    return `${pivot.pivot!.etiquetteAncienne} = ${pivot.pivot!.etiquetteNouvelle}`;
  }
  return relu ? relu.degree : chord.degree;
})()}
```

**Attention :** `idxAccord` doit s'incrémenter exactement une fois par accord rendu, dans le même ordre que `chordSequence` a été construit (mesure par mesure, accord par accord). Le mieux est de calculer la position AVANT le rendu, en aplatissant `analysis.mesures` en une liste d'accords avec leur index global, plutôt que de muter une variable pendant le JSX.

- [ ] **Step 5: Vérifier**

Run: `NODE_OPTIONS="--max-old-space-size=8192" npm run build`
Expected: build réussi, aucune erreur de type.

- [ ] **Step 6: Commit**

```bash
git add src/components/AnalysePartition.tsx
git commit -m "feat(analyse): onglet Plan tonal et double etiquette du pivot"
```

---

## Task 7 : Prompt IA, test de bout en bout, vérification

**Files:**
- Modify: `src/app/api/analyse-partition/commentaire/route.ts`
- Modify: `src/lib/analyse-pipeline.test.ts`

- [ ] **Step 1: Étendre le test de bout en bout AVANT de toucher au prompt**

Dans `src/lib/analyse-pipeline.test.ts`, ajouter un second morceau qui **module** de Do vers Sol par pivot, et vérifier via `construirePlanTonal` (importé du module) que le plan tonal a deux régions, le bon pivot et la bonne cadence. Le test du **choral nu existant reste inchangé** et sans modulation : `construirePlanTonal` sur sa séquence doit rendre **une seule région**. Ajoute explicitement cette assertion au choral nu — c'est le garde-fou anti-fausse-modulation.

- [ ] **Step 2: Le prompt du commentaire IA**

Dans `src/app/api/analyse-partition/commentaire/route.ts`, ajouter au `SYSTEM_PROMPT` :

```
L'analyse fournit un "planTonal" : la liste des régions tonales de la pièce, chacune avec ses mesures, son accord PIVOT (l'accord charnière, donné dans les deux tonalités) et la cadence qui la confirme. Raconte le parcours tonal : de quelle tonalité vers quelle tonalité, par quel pivot, confirmé par quelle cadence. Une seule région signifie que la pièce ne module pas — dis-le simplement. Ne confonds pas une modulation (installée, cadencée) avec une simple tonicisation (un accord de passage) : seul le planTonal fait foi pour les modulations.
```

- [ ] **Step 3: Vérifier l'ensemble**

Run: `npx vitest run`
Expected: tout vert, **le choral nu compris** (une seule région tonale).

Run: `NODE_OPTIONS="--max-old-space-size=8192" npm run build`
Expected: succès.

- [ ] **Step 4: Contrôle musical manuel**

`npm run dev`, importer dans `/analyse-partition` :
- un **choral de Bach qui module** (la plupart modulent au moins vers la dominante et le relatif) — l'onglet Plan tonal doit montrer les régions, les pivots et les cadences conformes à l'analyse écrite ;
- une **pièce qui ne module pas** — une seule région, aucune fausse modulation.

**C'est ce contrôle, et non les tests, qui dit si le sous-projet a atteint son but.** Rapporter ce qu'on voit, sans l'enjoliver.

- [ ] **Step 5: Commit**

```bash
git add src/app/api/analyse-partition/commentaire/route.ts src/lib/analyse-pipeline.test.ts
git commit -m "feat(analyse): le commentaire IA raconte le plan tonal"
```

---

## Auto-relecture

**Couverture de la spec :**
- Critère = cadence (dominante → tonique du nouveau ton) → Task 2 (`estDominanteDe`/`estToniqueDe`), Task 4. ✅
- Tonicisation vs modulation par prédominante préparée → Task 2 (`aPredominantePreparee`), testé par « I V7/V V I reste en Do ». ✅
- Pivot, dernier accord commun, double étiquette → Task 3 (`trouvePivot`), Task 4 (`pivot` de la région). ✅
- Cinq tons voisins seulement → Task 1 (`tonsVoisins`). ✅
- Chaîne de modulations et retour → Task 4 (état séquentiel), testés. ✅
- Cadence hors des voisins = chromatisme → conséquence de `tonsVoisins` (aucun K ne correspond), testé par « aucune modulation ». ✅
- Modulation sans pivot = chromatisme → Task 3 (`trouvePivot` rend `null`), Task 4 (on ne bascule pas). ✅
- Plan tonal exposé, UI, prompt IA → Tasks 5, 6, 7. ✅
- Non-régression du choral nu → Tasks 4 et 7. ✅

**Cohérence des types :** `Tonalite` (Task 1) traverse tout le module ; `AccordSequence` (Task 4) est la forme exacte de `chordSequence` de la route (Task 5) ; `PlanTonal`/`RegionTonale`/`DegreRelu` (Task 4) sont mis en miroir dans l'UI (Task 6). `analyseEn` (Task 1) est le seul point qui rejoue `analyzeChord` — réutilisé par les Tasks 2, 3, 4.

**Le point de vigilance, redit :** C2 peut renuméroter des degrés que C1 avait posés (un `V7/V` devient un `V7` de Sol dans une région modulée). Le test de non-régression du choral nu — qui ne module pas — garantit qu'aucune fausse modulation ne vient troubler une pièce qui reste chez elle.
