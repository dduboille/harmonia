# Analyse fonctionnelle du chromatisme — Plan d'implémentation

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Faire reconnaître à l'analyseur de partitions les dominantes secondaires, sensibles de degré, emprunts modaux et napolitains, au lieu de jeter tout le chromatisme dans une catégorie « inconnu ».

**Architecture:** On extrait le moteur théorique (fonctions pures) dans `src/lib/harmonic-analysis.ts`, testé unitairement avec vitest. La route HTTP garde le parsing MusicXML et délègue toute la théorie au module. L'UI affiche les nouvelles étiquettes, une ventilation du chromatisme et un onglet dédié.

**Tech Stack:** TypeScript, Next.js 16, vitest (à installer).

**Spec de référence :** `docs/superpowers/specs/2026-07-02-analyse-chromatique-design.md`

---

## Référence partagée (à lire avant toute tâche)

### Le piège du mode mineur (CRITIQUE)

La spec change la règle 1 : un accord n'est diatonique que si **toutes ses notes** sont dans la
gamme (et plus seulement sa fondamentale). **En mode mineur, appliqué naïvement, cela casse
l'accord de dominante.**

En Do mineur, le `MINOR_SCALE` actuel est le mineur **naturel** `[0,2,3,5,7,8,10]` (Si♭).
Or l'accord de V est **Sol-Si♮-Ré** : le Si♮ (intervalle 11) n'y est pas. Avec une règle
« toutes les notes dans la gamme », **le V de mineur deviendrait non diatonique** — une
régression grave (c'est l'accord le plus normal du mode mineur).

**Solution imposée par ce plan :** en mineur, l'ensemble diatonique inclut **la 7e élevée**
(mineur harmonique) : `{0,2,3,5,7,8,10,11}`. Le tableau des **degrés** reste à 7 éléments ;
seule la reconnaissance du 7e degré accepte 10 **ou** 11.

### Conventions de qualité d'accord

`CHORD_PATTERNS` (existant) produit ces `quality` : `""` (majeur), `"m"`, `"°"`, `"aug"`,
`"7"` (7e de dominante), `"Maj7"`, `"m7"`, `"°7"`, `"ø7"`, `"sus4"`, `"sus2"`.

- Qualités « dominantes » (pour les dominantes secondaires) : `""` et `"7"`.
- Qualités « sensibles » (pour les sensibles de degré) : `"°"`, `"°7"`, `"ø7"`.

### Cibles tonicisables

- Majeur : degrés 2 (`ii`), 3 (`iii`), 4 (`IV`), 5 (`V`), 6 (`vi`).
- Mineur : degrés 3 (`III`), 4 (`iv`), 5 (`V`), 6 (`VI`), 7 (`VII`).
- On exclut la tonique (ce serait le V réel) et les degrés diminués.

### AMENDEMENT (après Task 4) — deux corrections musicales

L'exécution des tâches 2-4 a révélé deux défauts que la rédaction initiale n'avait pas anticipés.
Ils sont corrigés dans la **Task 5**.

**1. La 7e diminuée reste ambiguë même en testant les 4 fondamentales.**
Plusieurs notes d'un `°7` peuvent se trouver un demi-ton sous une cible tonicisable *valide* :
`Do#°7 {1,4,7,10}` → Do# vise `ii`, **mais** Mi vise `IV`. Le code retient la première dans
l'ordre des notes ; or cet ordre vient du MusicXML. **L'étiquette dépendait donc de l'ordre
d'écriture des notes** — inacceptable.

*Correction :* c'est **la résolution qui désigne la cible**. Un `°7` suivi de Rém est un
`vii°7/ii` ; suivi de Sol, un `vii°7/V`. La cible est donc arbitrée **au niveau de la séquence**
(Task 5), avec un **ordre de priorité en repli** quand la résolution ne tranche pas :
majeur `V, ii, vi, IV, iii` · mineur `V, iv, VI, III, VII`.

**2. L'ensemble du mode homonyme est trop large.**
`parallelSet` réutilisait `diatonicSet(..., "minor")`, qui inclut la **7e élevée** (nécessaire
pour que le V de mineur reste diatonique, mais hors sujet ici). Conséquence : un **Mi♭ augmenté**
`{3,7,11}` en Do majeur passait pour un « emprunt bIII ».

*Correction :* l'emprunt modal se réfère au **mineur naturel** (sans 7e élevée). `parallelSet`
doit être construit sur les degrés bruts, pas sur `diatonicSet`.

### Commandes de vérification

- Tests : `npx vitest run`
- Build (contrôle d'intégration) : `NODE_OPTIONS="--max-old-space-size=8192" npm run build`
  (⚠️ `npx tsc --noEmit` seul sature la mémoire sur ce poste — ne pas l'utiliser.)

---

## Task 0 : Mise en place de vitest

**Files:**
- Modify: `package.json`
- Create: `vitest.config.ts`
- Create: `src/lib/harmonic-analysis.test.ts` (test de fumée, étoffé aux tâches suivantes)

- [ ] **Step 1 : Installer vitest**

```bash
npm install -D vitest
```

- [ ] **Step 2 : Créer `vitest.config.ts`**

```ts
import { defineConfig } from "vitest/config";
import path from "node:path";

export default defineConfig({
  test: {
    environment: "node",
    include: ["src/**/*.test.ts"],
  },
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
});
```

- [ ] **Step 3 : Ajouter le script de test dans `package.json`**

Dans `"scripts"`, ajouter :

```json
"test": "vitest run"
```

- [ ] **Step 4 : Écrire un test de fumée qui échoue**

Créer `src/lib/harmonic-analysis.test.ts` :

```ts
import { describe, it, expect } from "vitest";
import { identifyChord } from "./harmonic-analysis";

describe("identifyChord", () => {
  it("reconnaît un accord parfait majeur", () => {
    // Do-Mi-Sol
    expect(identifyChord([0, 4, 7])?.quality).toBe("");
  });
});
```

- [ ] **Step 5 : Lancer le test pour vérifier qu'il échoue**

Run: `npx vitest run`
Expected: ÉCHEC — `Failed to resolve import "./harmonic-analysis"` (le module n'existe pas encore).

- [ ] **Step 6 : Commit**

```bash
git add package.json package-lock.json vitest.config.ts src/lib/harmonic-analysis.test.ts
git commit -m "chore: mise en place de vitest pour le moteur d'analyse harmonique"
```

---

## Task 1 : Moteur — types, constantes, identification et analyse diatonique

**Files:**
- Create: `src/lib/harmonic-analysis.ts`
- Modify: `src/lib/harmonic-analysis.test.ts`

**Objectif :** poser le module pur avec l'analyse **diatonique corrigée** (toutes les notes dans
la gamme ; 7e élevée acceptée en mineur). Le chromatisme retombe pour l'instant en
`categorie: "chromatique"` — les règles suivantes viendront aux tâches 2 à 4.

- [ ] **Step 1 : Écrire les tests qui échouent**

Remplacer le contenu de `src/lib/harmonic-analysis.test.ts` par :

```ts
import { describe, it, expect } from "vitest";
import { identifyChord, analyzeChord, PC } from "./harmonic-analysis";

// Aide : analyse un accord donné par ses classes de hauteurs, dans une tonalité.
function an(pcs: number[], tonicPc: number, mode: "major" | "minor") {
  const chord = identifyChord(pcs)!;
  return analyzeChord(chord, tonicPc, mode);
}

describe("identifyChord", () => {
  it("reconnaît un accord parfait majeur", () => {
    expect(identifyChord([0, 4, 7])?.quality).toBe("");
  });
  it("reconnaît une 7e de dominante", () => {
    const c = identifyChord([9, 1, 4, 7])!; // La-Do#-Mi-Sol
    expect(c.rootPc).toBe(9);
    expect(c.quality).toBe("7");
  });
});

describe("analyse diatonique (majeur)", () => {
  it("Sol7 en Do majeur est V7 (fonction D)", () => {
    const r = an([7, 11, 2, 5], PC.Do, "major"); // Sol-Si-Ré-Fa
    expect(r.degree).toBe("V7");
    expect(r.degreeNum).toBe(5);
    expect(r.fonction).toBe("D");
    expect(r.categorie).toBe("diatonique");
  });

  it("Rém en Do majeur est IIm (fonction SD)", () => {
    const r = an([2, 5, 9], PC.Do, "major"); // Ré-Fa-La
    expect(r.degreeNum).toBe(2);
    expect(r.fonction).toBe("SD");
    expect(r.categorie).toBe("diatonique");
  });
});

describe("analyse diatonique (mineur) — le piège de la 7e élevée", () => {
  it("Sol majeur en Do mineur reste diatonique (V), grâce à la 7e élevée", () => {
    const r = an([7, 11, 2], PC.Do, "minor"); // Sol-Si♮-Ré
    expect(r.categorie).toBe("diatonique");
    expect(r.degreeNum).toBe(5);
    expect(r.fonction).toBe("D");
  });
});

describe("chromatisme non encore classé", () => {
  it("La7 en Do majeur n'est pas diatonique", () => {
    const r = an([9, 1, 4, 7], PC.Do, "major"); // La-Do#-Mi-Sol
    expect(r.categorie).not.toBe("diatonique");
  });
});
```

- [ ] **Step 2 : Lancer les tests pour vérifier qu'ils échouent**

Run: `npx vitest run`
Expected: ÉCHEC — le module `./harmonic-analysis` n'existe pas.

- [ ] **Step 3 : Créer le module `src/lib/harmonic-analysis.ts`**

```ts
/**
 * lib/harmonic-analysis.ts
 * Harmonia — Moteur d'analyse harmonique (fonctions pures, sans XML ni HTTP).
 */

export type Fonction = "T" | "SD" | "D" | "?";

export type Categorie =
  | "diatonique"
  | "dominante_secondaire"
  | "sensible_degre"
  | "emprunt"
  | "napolitain"
  | "chromatique";

export interface Chord {
  rootPc: number;
  rootFr: string;
  quality: string;
  qualityName: string;
  pcs: number[];
}

export interface ChordResult {
  rootPc: number;
  rootFr: string;
  quality: string;
  degree: string;
  degreeNum: number;
  fonction: Fonction;
  categorie: Categorie;
  cible?: string;
  resolue?: boolean;
  beat?: number;
}

// ── Constantes ────────────────────────────────────────────────────────────────

export const NOTE_FR: Record<number, string> = {
  0: "Do", 1: "Do#", 2: "Ré", 3: "Ré#", 4: "Mi",
  5: "Fa", 6: "Fa#", 7: "Sol", 8: "Sol#", 9: "La", 10: "La#", 11: "Si",
};

/** Raccourci lisible pour les tests. */
export const PC = { Do: 0, Ré: 2, Mi: 4, Fa: 5, Sol: 7, La: 9, Si: 11 } as const;

export const CHORD_PATTERNS: Array<{ quality: string; name: string; intervals: number[] }> = [
  { quality: "Maj7", name: "maj7", intervals: [0, 4, 7, 11] },
  { quality: "7",    name: "dom7", intervals: [0, 4, 7, 10] },
  { quality: "m7",   name: "min7", intervals: [0, 3, 7, 10] },
  { quality: "°7",   name: "dim7", intervals: [0, 3, 6, 9]  },
  { quality: "ø7",   name: "m7b5", intervals: [0, 3, 6, 10] },
  { quality: "aug",  name: "aug",  intervals: [0, 4, 8]     },
  { quality: "",     name: "maj",  intervals: [0, 4, 7]     },
  { quality: "m",    name: "min",  intervals: [0, 3, 7]     },
  { quality: "°",    name: "dim",  intervals: [0, 3, 6]     },
  { quality: "sus4", name: "sus4", intervals: [0, 5, 7]     },
  { quality: "sus2", name: "sus2", intervals: [0, 2, 7]     },
];

/** Intervalles des 7 degrés (pour la numérotation romaine). */
const MAJOR_DEGREES = [0, 2, 4, 5, 7, 9, 11];
const MINOR_DEGREES = [0, 2, 3, 5, 7, 8, 10];

export const ROMANS = ["I", "II", "III", "IV", "V", "VI", "VII"];

// ── Identification d'accord ───────────────────────────────────────────────────

export function identifyChord(pcs: number[]): Chord | null {
  const unique = [...new Set(pcs.map((p) => ((p % 12) + 12) % 12))];
  if (unique.length < 2) return null;

  for (const pattern of CHORD_PATTERNS) {
    if (pattern.intervals.length > unique.length + 1) continue;
    for (const root of unique) {
      const norm = unique.map((p) => (p - root + 12) % 12);
      if (pattern.intervals.every((iv) => norm.includes(iv))) {
        return {
          rootPc: root,
          rootFr: NOTE_FR[root] ?? "?",
          quality: pattern.quality,
          qualityName: pattern.name,
          pcs: unique,
        };
      }
    }
  }
  return null;
}

// ── Helpers tonalité ──────────────────────────────────────────────────────────

/**
 * Ensemble des hauteurs considérées diatoniques.
 * En MINEUR, on inclut la 7e ÉLEVÉE (11) : sans cela, l'accord de V (Sol-Si♮-Ré
 * en Do mineur) serait déclaré non diatonique — régression inacceptable.
 */
export function diatonicSet(tonicPc: number, mode: "major" | "minor"): Set<number> {
  const base = mode === "major" ? MAJOR_DEGREES : [...MINOR_DEGREES, 11];
  return new Set(base.map((s) => (tonicPc + s) % 12));
}

/** Numéro de degré (1-7) de la fondamentale, ou null si chromatique. */
export function degreeOfRoot(
  rootPc: number, tonicPc: number, mode: "major" | "minor",
): number | null {
  const iv = (rootPc - tonicPc + 12) % 12;
  const degrees = mode === "major" ? MAJOR_DEGREES : MINOR_DEGREES;
  let idx = degrees.indexOf(iv);
  if (idx === -1 && mode === "minor" && iv === 11) idx = 6; // sensible (7e élevée)
  return idx === -1 ? null : idx + 1;
}

/** Hauteur (pc) d'un degré donné. */
export function pcOfDegree(num: number, tonicPc: number, mode: "major" | "minor"): number {
  const degrees = mode === "major" ? MAJOR_DEGREES : MINOR_DEGREES;
  return (tonicPc + degrees[num - 1]) % 12;
}

export function fonctionOfDegree(num: number): Fonction {
  if ([1, 3, 6].includes(num)) return "T";
  if ([2, 4].includes(num)) return "SD";
  if ([5, 7].includes(num)) return "D";
  return "?";
}

// ── Analyse d'un accord ───────────────────────────────────────────────────────

export function analyzeChord(
  chord: Chord, tonicPc: number, mode: "major" | "minor",
): ChordResult {
  const base = {
    rootPc: chord.rootPc,
    rootFr: chord.rootFr,
    quality: chord.quality,
  };

  // ── Règle 1 : diatonique = TOUTES les notes dans la gamme ──
  const dia = diatonicSet(tonicPc, mode);
  const toutesDiatoniques = chord.pcs.every((pc) => dia.has(pc));
  const deg = degreeOfRoot(chord.rootPc, tonicPc, mode);

  if (toutesDiatoniques && deg !== null) {
    return {
      ...base,
      degree: ROMANS[deg - 1] + chord.quality,
      degreeNum: deg,
      fonction: fonctionOfDegree(deg),
      categorie: "diatonique",
    };
  }

  // Les règles chromatiques (dominantes secondaires, sensibles de degré,
  // emprunts, napolitain) sont ajoutées aux tâches 2 à 4.
  return {
    ...base,
    degree: "chr",
    degreeNum: 0,
    fonction: "?",
    categorie: "chromatique",
  };
}
```

- [ ] **Step 4 : Lancer les tests pour vérifier qu'ils passent**

Run: `npx vitest run`
Expected: PASS — tous les tests verts (y compris le Sol majeur en Do mineur, qui valide la 7e élevée).

- [ ] **Step 5 : Commit**

```bash
git add src/lib/harmonic-analysis.ts src/lib/harmonic-analysis.test.ts
git commit -m "feat(analyse): moteur harmonique pur — analyse diatonique corrigée (7e élevée en mineur)"
```

---

## Task 2 : Dominantes secondaires (V/x, V7/x)

**Files:**
- Modify: `src/lib/harmonic-analysis.ts`
- Modify: `src/lib/harmonic-analysis.test.ts`

- [ ] **Step 1 : Écrire les tests qui échouent**

Ajouter à `src/lib/harmonic-analysis.test.ts` :

```ts
describe("dominantes secondaires", () => {
  it("La7 en Do majeur est V7/ii", () => {
    const r = an([9, 1, 4, 7], PC.Do, "major"); // La-Do#-Mi-Sol
    expect(r.degree).toBe("V7/ii");
    expect(r.categorie).toBe("dominante_secondaire");
    expect(r.cible).toBe("ii");
    expect(r.fonction).toBe("D");
  });

  it("Ré7 en Do majeur est V7/V", () => {
    const r = an([2, 6, 9, 0], PC.Do, "major"); // Ré-Fa#-La-Do
    expect(r.degree).toBe("V7/V");
    expect(r.cible).toBe("V");
  });

  it("Mi majeur en Do majeur est V/vi", () => {
    const r = an([4, 8, 11], PC.Do, "major"); // Mi-Sol#-Si
    expect(r.degree).toBe("V/vi");
    expect(r.cible).toBe("vi");
    expect(r.categorie).toBe("dominante_secondaire");
  });

  it("Sol7 en Do majeur reste V7 diatonique (et non V7/I)", () => {
    const r = an([7, 11, 2, 5], PC.Do, "major");
    expect(r.categorie).toBe("diatonique");
    expect(r.degree).toBe("V7");
  });
});
```

- [ ] **Step 2 : Lancer les tests pour vérifier qu'ils échouent**

Run: `npx vitest run`
Expected: ÉCHEC — `expected "chr" to be "V7/ii"`.

- [ ] **Step 3 : Implémenter la règle**

Dans `src/lib/harmonic-analysis.ts`, ajouter avant `analyzeChord` :

```ts
/** Cibles tonicisables : ni la tonique, ni un degré diminué. */
export function tonicizableTargets(mode: "major" | "minor"): Array<{ num: number; label: string }> {
  return mode === "major"
    ? [{ num: 2, label: "ii" }, { num: 3, label: "iii" }, { num: 4, label: "IV" },
       { num: 5, label: "V" }, { num: 6, label: "vi" }]
    : [{ num: 3, label: "III" }, { num: 4, label: "iv" }, { num: 5, label: "V" },
       { num: 6, label: "VI" }, { num: 7, label: "VII" }];
}

const DOMINANT_QUALITIES = new Set(["", "7"]);
```

Puis, dans `analyzeChord`, **remplacer** le bloc de retour « chromatique » final par :

```ts
  // ── Règle 2 : dominante secondaire ──
  if (DOMINANT_QUALITIES.has(chord.quality)) {
    for (const t of tonicizableTargets(mode)) {
      const targetPc = pcOfDegree(t.num, tonicPc, mode);
      if (chord.rootPc === (targetPc + 7) % 12) {
        return {
          ...base,
          degree: (chord.quality === "7" ? "V7/" : "V/") + t.label,
          degreeNum: 0,
          fonction: "D",
          categorie: "dominante_secondaire",
          cible: t.label,
        };
      }
    }
  }

  // Règles 3 à 5 ajoutées aux tâches suivantes.
  return {
    ...base,
    degree: "chr",
    degreeNum: 0,
    fonction: "?",
    categorie: "chromatique",
  };
```

- [ ] **Step 4 : Lancer les tests pour vérifier qu'ils passent**

Run: `npx vitest run`
Expected: PASS.

- [ ] **Step 5 : Commit**

```bash
git add src/lib/harmonic-analysis.ts src/lib/harmonic-analysis.test.ts
git commit -m "feat(analyse): dominantes secondaires (V/x, V7/x)"
```

---

## Task 3 : Sensibles de degré (vii°/x, vii°7/x, viiø7/x)

**Files:**
- Modify: `src/lib/harmonic-analysis.ts`
- Modify: `src/lib/harmonic-analysis.test.ts`

- [ ] **Step 1 : Écrire les tests qui échouent**

Ajouter à `src/lib/harmonic-analysis.test.ts` :

```ts
describe("sensibles de degré", () => {
  it("Do#°7 en Do majeur est vii°7/ii", () => {
    // Do#-Mi-Sol-La# (7e diminuée sur Do#), un demi-ton sous Ré (ii)
    const r = an([1, 4, 7, 10], PC.Do, "major");
    expect(r.degree).toBe("vii°7/ii");
    expect(r.categorie).toBe("sensible_degre");
    expect(r.cible).toBe("ii");
    expect(r.fonction).toBe("D");
  });

  it("Fa#°7 en Do majeur est vii°7/V", () => {
    // Fa#-La-Do-Mi♭ : un demi-ton sous Sol (V)
    const r = an([6, 9, 0, 3], PC.Do, "major");
    expect(r.degree).toBe("vii°7/V");
    expect(r.cible).toBe("V");
  });
});
```

- [ ] **Step 2 : Lancer les tests pour vérifier qu'ils échouent**

Run: `npx vitest run`
Expected: ÉCHEC — `expected "chr" to be "vii°7/ii"`.

- [ ] **Step 3 : Implémenter la règle**

Dans `src/lib/harmonic-analysis.ts`, ajouter près de `DOMINANT_QUALITIES` :

```ts
const LEADING_QUALITIES = new Set(["°", "°7", "ø7"]);

function leadingPrefix(quality: string): string {
  if (quality === "°7") return "vii°7";
  if (quality === "ø7") return "viiø7";
  return "vii°";
}
```

Puis, dans `analyzeChord`, **insérer après le bloc « Règle 2 »** (et avant le retour chromatique) :

```ts
  // ── Règle 3 : sensible de degré ──
  if (LEADING_QUALITIES.has(chord.quality)) {
    // ATTENTION : la 7e diminuée est SYMÉTRIQUE (empilement de tierces mineures).
    // Ses quatre notes peuvent chacune être la fondamentale, et `identifyChord`
    // en choisit une arbitrairement (la première rencontrée). On teste donc
    // chaque note de l'accord comme fondamentale potentielle, et on retient
    // celle qui désigne une cible tonicisable valide.
    const candidats = chord.quality === "°7" ? chord.pcs : [chord.rootPc];
    for (const cand of candidats) {
      for (const t of tonicizableTargets(mode)) {
        const targetPc = pcOfDegree(t.num, tonicPc, mode);
        if (cand === (targetPc + 11) % 12) { // un demi-ton sous la cible
          return {
            ...base,
            rootPc: cand,
            rootFr: NOTE_FR[cand] ?? chord.rootFr,
            degree: leadingPrefix(chord.quality) + "/" + t.label,
            degreeNum: 0,
            fonction: "D",
            categorie: "sensible_degre",
            cible: t.label,
          };
        }
      }
    }
  }
```

- [ ] **Step 4 : Lancer les tests pour vérifier qu'ils passent**

Run: `npx vitest run`
Expected: PASS.

- [ ] **Step 5 : Commit**

```bash
git add src/lib/harmonic-analysis.ts src/lib/harmonic-analysis.test.ts
git commit -m "feat(analyse): sensibles de degré (vii°7/x)"
```

---

## Task 4 : Emprunts modaux et napolitain

**Files:**
- Modify: `src/lib/harmonic-analysis.ts`
- Modify: `src/lib/harmonic-analysis.test.ts`

- [ ] **Step 1 : Écrire les tests qui échouent**

Ajouter à `src/lib/harmonic-analysis.test.ts` :

```ts
describe("emprunts modaux", () => {
  it("Fa mineur en Do majeur est iv (emprunt, SD)", () => {
    const r = an([5, 8, 0], PC.Do, "major"); // Fa-Lab-Do
    expect(r.degree).toBe("iv");
    expect(r.categorie).toBe("emprunt");
    expect(r.fonction).toBe("SD");
  });

  it("Lab majeur en Do majeur est bVI (emprunt)", () => {
    const r = an([8, 0, 3], PC.Do, "major"); // Lab-Do-Mib
    expect(r.degree).toBe("bVI");
    expect(r.categorie).toBe("emprunt");
    expect(r.fonction).toBe("SD");
  });

  it("Sib majeur en Do majeur est bVII (emprunt)", () => {
    const r = an([10, 2, 5], PC.Do, "major"); // Sib-Ré-Fa
    expect(r.degree).toBe("bVII");
    expect(r.categorie).toBe("emprunt");
  });

  it("Mib majeur en Do majeur est bIII (emprunt, T)", () => {
    const r = an([3, 7, 10], PC.Do, "major"); // Mib-Sol-Sib
    expect(r.degree).toBe("bIII");
    expect(r.fonction).toBe("T");
  });
});

describe("napolitain", () => {
  it("Réb majeur en Do majeur est bII (napolitain, SD)", () => {
    const r = an([1, 5, 8], PC.Do, "major"); // Réb-Fa-Lab
    expect(r.degree).toBe("bII");
    expect(r.categorie).toBe("napolitain");
    expect(r.fonction).toBe("SD");
  });
});

describe("résidu chromatique", () => {
  it("Do augmenté en Do majeur reste chromatique (inclassable)", () => {
    // Do-Mi-Sol# : ni dominante secondaire, ni sensible, ni emprunt, ni napolitain
    const r = an([0, 4, 8], PC.Do, "major");
    expect(r.categorie).toBe("chromatique");
    expect(r.fonction).toBe("?");
  });
});
```

- [ ] **Step 2 : Lancer les tests pour vérifier qu'ils échouent**

Run: `npx vitest run`
Expected: ÉCHEC — `expected "chr" to be "iv"`.

- [ ] **Step 3 : Implémenter les règles**

Dans `src/lib/harmonic-analysis.ts`, ajouter avant `analyzeChord` :

```ts
/** Ensemble diatonique du mode HOMONYME (pour détecter les emprunts). */
function parallelSet(tonicPc: number, mode: "major" | "minor"): Set<number> {
  return diatonicSet(tonicPc, mode === "major" ? "minor" : "major");
}

/** Étiquette d'un degré chromatique (fondamentale hors gamme). */
const FLAT_LABEL: Record<number, string> = {
  1: "bII", 3: "bIII", 6: "bV", 8: "bVI", 10: "bVII",
};

const FLAT_FONCTION: Record<number, Fonction> = {
  1: "SD", 3: "T", 6: "SD", 8: "SD", 10: "SD",
};

function isMinorish(quality: string): boolean {
  return quality === "m" || quality === "m7" || quality === "°" ||
         quality === "°7" || quality === "ø7";
}

/** Étiquette d'un accord emprunté : "iv", "bVI", "bVII7"… */
function empruntLabel(
  chord: Chord, tonicPc: number, mode: "major" | "minor",
): { label: string; fonction: Fonction } {
  const deg = degreeOfRoot(chord.rootPc, tonicPc, mode);
  const suffix = chord.quality.includes("7") ? "7" : "";

  if (deg !== null) {
    // Fondamentale diatonique, seule la qualité est empruntée (ex. Fa mineur → iv)
    const roman = ROMANS[deg - 1];
    const label = isMinorish(chord.quality) ? roman.toLowerCase() : roman;
    return { label: label + suffix, fonction: fonctionOfDegree(deg) };
  }

  // Fondamentale chromatique (ex. Lab en Do → bVI)
  const iv = (chord.rootPc - tonicPc + 12) % 12;
  return {
    label: (FLAT_LABEL[iv] ?? "chr") + suffix,
    fonction: FLAT_FONCTION[iv] ?? "?",
  };
}
```

Puis, dans `analyzeChord`, **insérer après le bloc « Règle 3 »** (et avant le retour chromatique) :

```ts
  // ── Règle 4 : emprunt modal (toutes les notes dans le mode homonyme) ──
  const par = parallelSet(tonicPc, mode);
  if (chord.pcs.every((pc) => par.has(pc))) {
    const { label, fonction } = empruntLabel(chord, tonicPc, mode);
    if (label !== "chr") {
      return {
        ...base,
        degree: label,
        degreeNum: degreeOfRoot(chord.rootPc, tonicPc, mode) ?? 0,
        fonction,
        categorie: "emprunt",
      };
    }
  }

  // ── Règle 5 : napolitain (accord majeur sur le 2e degré abaissé) ──
  if (chord.quality === "" && chord.rootPc === (tonicPc + 1) % 12) {
    return {
      ...base,
      degree: "bII",
      degreeNum: 0,
      fonction: "SD",
      categorie: "napolitain",
    };
  }
```

- [ ] **Step 4 : Lancer les tests pour vérifier qu'ils passent**

Run: `npx vitest run`
Expected: PASS. (Le Réb majeur ne contient pas que des notes du Do mineur naturel — le Réb n'y est pas —, il tombe donc bien en règle 5 et non en règle 4.)

- [ ] **Step 5 : Commit**

```bash
git add src/lib/harmonic-analysis.ts src/lib/harmonic-analysis.test.ts
git commit -m "feat(analyse): emprunts modaux et napolitain"
```

---

## Task 5 : Résolutions et événements chromatiques

**Files:**
- Modify: `src/lib/harmonic-analysis.ts`
- Modify: `src/lib/harmonic-analysis.test.ts`

- [ ] **Step 1 : Écrire les tests qui échouent**

Ajouter à `src/lib/harmonic-analysis.test.ts` :

```ts
import { annotateResolutions, buildChromaEvents } from "./harmonic-analysis";

// Construit une séquence analysée à partir de listes de pcs.
function seq(chords: number[][], tonicPc: number, mode: "major" | "minor") {
  return chords.map((pcs, i) => ({
    result: analyzeChord(identifyChord(pcs)!, tonicPc, mode),
    measure: i + 1,
  }));
}

describe("résolution des dominantes secondaires", () => {
  it("La7 → Rém : résolue", () => {
    const s = seq([[9, 1, 4, 7], [2, 5, 9]], PC.Do, "major");
    annotateResolutions(s.map((x) => x.result), PC.Do, "major");
    expect(s[0].result.resolue).toBe(true);
  });

  it("La7 → Fa : non résolue", () => {
    const s = seq([[9, 1, 4, 7], [5, 9, 0]], PC.Do, "major");
    annotateResolutions(s.map((x) => x.result), PC.Do, "major");
    expect(s[0].result.resolue).toBe(false);
  });

  it("Mi7 → La7 → Rém : chaîne de dominantes (Mi7 résolue)", () => {
    const s = seq([[4, 8, 11, 2], [9, 1, 4, 7], [2, 5, 9]], PC.Do, "major");
    annotateResolutions(s.map((x) => x.result), PC.Do, "major");
    expect(s[0].result.degree).toBe("V7/vi");
    expect(s[0].result.resolue).toBe(true);
    expect(s[1].result.degree).toBe("V7/ii");
    expect(s[1].result.resolue).toBe(true);
  });
});

describe("événements chromatiques", () => {
  it("produit un événement expliqué pour La7 → Rém", () => {
    const s = seq([[9, 1, 4, 7], [2, 5, 9]], PC.Do, "major");
    annotateResolutions(s.map((x) => x.result), PC.Do, "major");
    const events = buildChromaEvents(s, PC.Do, "major");
    expect(events).toHaveLength(1);
    expect(events[0].degree).toBe("V7/ii");
    expect(events[0].measure).toBe(1);
    expect(events[0].explication).toContain("Tonicise");
  });

  it("ne produit aucun événement pour une suite diatonique", () => {
    const s = seq([[7, 11, 2], [0, 4, 7]], PC.Do, "major"); // Sol → Do
    annotateResolutions(s.map((x) => x.result), PC.Do, "major");
    expect(buildChromaEvents(s, PC.Do, "major")).toHaveLength(0);
  });
});
```

- [ ] **Step 2 : Lancer les tests pour vérifier qu'ils échouent**

Run: `npx vitest run`
Expected: ÉCHEC — `annotateResolutions` et `buildChromaEvents` n'existent pas.

- [ ] **Step 3 : Implémenter**

Ajouter à la fin de `src/lib/harmonic-analysis.ts` :

```ts
export interface ChromaEvent {
  measure: number;
  beat?: number;
  accord: string;
  degree: string;
  categorie: Categorie;
  cible?: string;
  resolue?: boolean;
  explication: string;
}

/** Numéro de degré à partir de son étiquette ("ii", "IV"…). */
function numOfLabel(label: string): number {
  const idx = ROMANS.findIndex((r) => r.toLowerCase() === label.toLowerCase());
  return idx + 1;
}

/**
 * Renseigne `resolue` sur chaque accord porteur d'une cible, en regardant
 * l'accord suivant. Mutation en place (la séquence est l'unité d'analyse).
 */
export function annotateResolutions(
  chords: ChordResult[], tonicPc: number, mode: "major" | "minor",
): void {
  for (let i = 0; i < chords.length; i++) {
    const c = chords[i];
    if (!c.cible) continue;
    const targetPc = pcOfDegree(numOfLabel(c.cible), tonicPc, mode);
    const next = chords[i + 1];
    c.resolue = !!next && next.rootPc === targetPc;
  }
}

/** Construit les événements chromatiques expliqués (pour l'onglet dédié). */
export function buildChromaEvents(
  seq: Array<{ result: ChordResult; measure: number }>,
  tonicPc: number,
  mode: "major" | "minor",
): ChromaEvent[] {
  const events: ChromaEvent[] = [];

  for (let i = 0; i < seq.length; i++) {
    const { result: c, measure } = seq[i];
    if (c.categorie === "diatonique") continue;

    const next = seq[i + 1]?.result;
    const chaine = !!c.resolue && !!next &&
      (next.categorie === "dominante_secondaire" || next.categorie === "sensible_degre");

    let explication: string;
    if (c.categorie === "dominante_secondaire" || c.categorie === "sensible_degre") {
      const targetPc = pcOfDegree(numOfLabel(c.cible!), tonicPc, mode);
      const cibleNom = NOTE_FR[targetPc];
      const suite = c.resolue
        ? (chaine
            ? "Enchaîne sur une autre dominante secondaire (chaîne de dominantes)."
            : "Résolue sur sa cible à l'accord suivant.")
        : "Non résolue (rompue secondaire).";
      explication = `Tonicise le ${c.cible} (${cibleNom}). ${suite}`;
    } else if (c.categorie === "emprunt") {
      const homonyme = mode === "major" ? "mineur" : "majeur";
      explication = `Emprunt au mode homonyme (${homonyme}).`;
    } else if (c.categorie === "napolitain") {
      explication =
        "Accord napolitain (bII). Le renversement (sixte) sera confirmé lorsque la basse sera suivie.";
    } else {
      explication = "Accord chromatique non identifié.";
    }

    events.push({
      measure,
      beat: c.beat,
      accord: `${c.rootFr}${c.quality}`,
      degree: c.degree,
      categorie: c.categorie,
      cible: c.cible,
      resolue: c.resolue,
      explication,
    });
  }

  return events;
}
```

- [ ] **Step 4 : Lancer les tests pour vérifier qu'ils passent**

Run: `npx vitest run`
Expected: PASS.

- [ ] **Step 5 : Commit**

```bash
git add src/lib/harmonic-analysis.ts src/lib/harmonic-analysis.test.ts
git commit -m "feat(analyse): détection des résolutions et événements chromatiques expliqués"
```

---

## Task 6 : Câbler la route sur le moteur

**Files:**
- Modify: `src/app/api/analyse-partition/route.ts`

**Objectif :** supprimer la théorie dupliquée dans la route, déléguer au module, et enrichir
`AnalysisResult` du bloc `chromatisme`.

- [ ] **Step 1 : Remplacer les définitions théoriques par des imports**

Dans `src/app/api/analyse-partition/route.ts` :

1. **Supprimer** les déclarations locales suivantes : `NOTE_FR`, `CHORD_PATTERNS`,
   `MAJOR_SCALE`, `MINOR_SCALE`, `ROMANS`, `identifyChord`, `analyzeChord`, ainsi que les types
   `Fonction` et `ChordResult`.
2. **Ajouter** en tête du fichier :

```ts
import {
  identifyChord,
  analyzeChord,
  annotateResolutions,
  buildChromaEvents,
  NOTE_FR,
  type Fonction,
  type Categorie,
  type ChordResult,
  type ChromaEvent,
} from "@/lib/harmonic-analysis";

export type { Fonction, Categorie, ChordResult, ChromaEvent };
```

> `STEP_PC` et `FIFTHS_PC` restent dans la route : ils relèvent du parsing MusicXML, pas de la
> théorie harmonique. `NOTE_FR` est importé car la route s'en sert pour nommer la tonique.

- [ ] **Step 2 : Enrichir le type `AnalysisResult`**

Remplacer l'interface `AnalysisResult` par :

```ts
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
    inexpliques: number;
    evenements: ChromaEvent[];
  };
}
```

- [ ] **Step 3 : Brancher l'analyse de séquence dans `analyze()`**

Dans la fonction `analyze()`, **après** la boucle qui construit `mesures` et `chordSequence`, et
**avant** la détection des cadences, insérer :

```ts
  // Résolutions + événements chromatiques (analyse au niveau de la séquence)
  annotateResolutions(chordSequence.map((c) => c.result), tonicPc, mode);
  const evenements = buildChromaEvents(chordSequence, tonicPc, mode);

  const chromatisme = {
    tonicisations: evenements.filter(
      (e) => e.categorie === "dominante_secondaire" || e.categorie === "sensible_degre",
    ).length,
    emprunts: evenements.filter((e) => e.categorie === "emprunt").length,
    napolitains: evenements.filter((e) => e.categorie === "napolitain").length,
    inexpliques: evenements.filter((e) => e.categorie === "chromatique").length,
    evenements,
  };
```

Puis, dans l'objet retourné par `analyze()`, ajouter le champ `chromatisme`.

Enfin, **remplacer** le comptage existant `if (result.fonction === "?") nombreChromatiques++;`
par :

```ts
      if (result.categorie !== "diatonique") nombreChromatiques++;
```

- [ ] **Step 4 : Vérifier que le projet compile**

Run: `NODE_OPTIONS="--max-old-space-size=8192" npm run build`
Expected: `✓ Compiled successfully`, exit 0.

> Le build doit passer **dès cette tâche** : `AnalysePartition.tsx` déclare ses **propres**
> interfaces locales (il n'importe pas les types de la route). Enrichir `AnalysisResult` côté
> route ne casse donc pas l'UI — celle-ci ignore simplement les nouveaux champs jusqu'à la
> tâche 7. Si le build échoue, c'est une vraie erreur : la corriger avant de continuer.

- [ ] **Step 5 : Lancer aussi les tests**

Run: `npx vitest run`
Expected: PASS (le moteur est inchangé).

- [ ] **Step 6 : Commit**

```bash
git add "src/app/api/analyse-partition/route.ts"
git commit -m "refactor(analyse): la route délègue la théorie au moteur + bloc chromatisme"
```

---

## Task 7 : Interface — étiquettes, ventilation, onglet Chromatisme

**Files:**
- Modify: `src/components/AnalysePartition.tsx`

- [ ] **Step 1 : Mettre à jour les types locaux**

En tête de `src/components/AnalysePartition.tsx`, l'interface locale `ChordResult` doit gagner
les nouveaux champs, et un type `ChromaEvent` + le bloc `chromatisme` doivent être ajoutés à
l'interface d'analyse locale :

```ts
type Categorie =
  | "diatonique" | "dominante_secondaire" | "sensible_degre"
  | "emprunt" | "napolitain" | "chromatique";

interface ChordResult {
  rootFr: string;
  quality: string;
  degree: string;
  degreeNum: number;
  fonction: Fonction;
  categorie: Categorie;
  cible?: string;
  resolue?: boolean;
  beat?: number;
}

interface ChromaEvent {
  measure: number;
  beat?: number;
  accord: string;
  degree: string;
  categorie: Categorie;
  cible?: string;
  resolue?: boolean;
  explication: string;
}
```

Et dans l'interface du résultat d'analyse, ajouter :

```ts
  chromatisme: {
    tonicisations: number;
    emprunts: number;
    napolitains: number;
    inexpliques: number;
    evenements: ChromaEvent[];
  };
```

- [ ] **Step 2 : Ajouter le style des catégories**

Ajouter, à côté de `FONC_STYLE` :

```ts
const CAT_STYLE: Record<Categorie, { bg: string; color: string; label: string }> = {
  diatonique:           { bg: "#f0ece6", color: "#888",    label: "diatonique" },
  dominante_secondaire: { bg: "#FAEEDA", color: "#BA7517", label: "dominante secondaire" },
  sensible_degre:       { bg: "#FAEEDA", color: "#BA7517", label: "sensible de degré" },
  emprunt:              { bg: "#F0EBF8", color: "#5C3D6E", label: "emprunt" },
  napolitain:           { bg: "#E6F1FB", color: "#185FA5", label: "napolitain" },
  chromatique:          { bg: "#FCEBEB", color: "#A32D2D", label: "chromatique" },
};
```

- [ ] **Step 3 : Enrichir l'affichage de l'accord (onglet Mesures)**

Là où l'accord affiche `{chord.degree}` puis son badge de fonction, ajouter après le badge de
fonction :

```tsx
{chord.categorie !== "diatonique" && (
  <span style={{
    fontSize: 10, padding: "2px 7px", borderRadius: 6, fontWeight: 600,
    background: CAT_STYLE[chord.categorie].bg,
    color: CAT_STYLE[chord.categorie].color,
  }}>
    {CAT_STYLE[chord.categorie].label}
    {chord.resolue !== undefined && (chord.resolue ? " ✓" : " ✗")}
  </span>
)}
```

- [ ] **Step 4 : Ventiler le chromatisme dans le Résumé**

Remplacer la statistique existante `{ label: "Accords chromatiques", value: String(analysis.nombreChromatiques) }`
par ces trois statistiques :

```ts
{ label: "Tonicisations", value: String(analysis.chromatisme.tonicisations) },
{ label: "Emprunts",      value: String(analysis.chromatisme.emprunts + analysis.chromatisme.napolitains) },
{ label: "Chromatismes inexpliqués", value: String(analysis.chromatisme.inexpliques) },
```

- [ ] **Step 5 : Ajouter l'onglet « Chromatisme »**

1. Étendre le type `Tab` :

```ts
type Tab = "resume" | "mesures" | "cadences" | "chromatisme" | "commentaire";
```

2. Ajouter l'entrée dans la liste des onglets (à côté de `{ id: "cadences", … }`) :

```ts
{ id: "chromatisme", label: `Chromatisme (${analysis.chromatisme.evenements.length})` },
```

3. Ajouter le panneau correspondant, à côté du bloc `{activeTab === "cadences" && (…)}` :

```tsx
{activeTab === "chromatisme" && (
  <div>
    {analysis.chromatisme.evenements.length === 0 ? (
      <div style={{ textAlign: "center", padding: "36px 0", color: "#999", fontSize: 14 }}>
        Aucun chromatisme détecté — la partition est entièrement diatonique.
      </div>
    ) : (
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {analysis.chromatisme.evenements.map((e, i) => (
          <div key={i} style={{
            border: "0.5px solid #e8e3db", borderRadius: 10,
            padding: "14px 16px", background: "#fff",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", marginBottom: 6 }}>
              <span style={{ fontSize: 12, color: "#888" }}>m.{e.measure}</span>
              <strong style={{ fontSize: 15, color: "#1a1a1a" }}>{e.accord}</strong>
              <span style={{ fontFamily: "monospace", fontSize: 14, color: "#1a1a1a" }}>{e.degree}</span>
              <span style={{
                fontSize: 10, padding: "2px 7px", borderRadius: 6, fontWeight: 600,
                background: CAT_STYLE[e.categorie].bg, color: CAT_STYLE[e.categorie].color,
              }}>
                {CAT_STYLE[e.categorie].label}
              </span>
            </div>
            <div style={{ fontSize: 13, color: "#555", lineHeight: 1.6 }}>{e.explication}</div>
          </div>
        ))}
      </div>
    )}
  </div>
)}
```

- [ ] **Step 6 : Vérifier le build**

Run: `NODE_OPTIONS="--max-old-space-size=8192" npm run build`
Expected: `✓ Compiled successfully`, exit 0.

- [ ] **Step 7 : Commit**

```bash
git add src/components/AnalysePartition.tsx
git commit -m "feat(analyse): UI — étiquettes chromatiques, ventilation et onglet Chromatisme"
```

---

## Task 8 : Vérification finale

**Files:** aucun (vérification seule)

- [ ] **Step 1 : Tests unitaires**

Run: `npx vitest run`
Expected: tous les tests passent (identification, diatonique majeur/mineur, dominantes
secondaires, sensibles de degré, emprunts, napolitain, résolutions, événements).

- [ ] **Step 2 : Build de production**

Run: `NODE_OPTIONS="--max-old-space-size=8192" npm run build`
Expected: `✓ Compiled successfully`, exit 0.

- [ ] **Step 3 : Lint**

Run: `npm run lint`
Expected: aucune erreur nouvelle sur les fichiers touchés.

- [ ] **Step 4 : Contrôle manuel**

Lancer `npm run dev`, aller sur la page d'analyse de partition, importer un MusicXML contenant
une dominante secondaire (ex. un `La7` en Do majeur), et vérifier :
- l'onglet **Mesures** affiche `V7/ii` avec le badge « dominante secondaire » et ✓/✗ ;
- l'onglet **Résumé** ventile en tonicisations / emprunts / inexpliqués ;
- l'onglet **Chromatisme** liste l'événement avec son explication.

- [ ] **Step 5 : Commit final si ajustements**

```bash
git add -A
git commit -m "test: vérification d'intégration de l'analyse chromatique"
```

---

## Notes d'exécution

- **Ordre impératif :** Task 0 → 1 → 2 → 3 → 4 → 5 → 6 → 7 → 8. Chaque tâche laisse le moteur
  vert (tests passants).
- **TDD strict :** chaque tâche du moteur écrit d'abord un test qui échoue, puis le fait passer.
  C'est le garde-fou contre les régressions musicales.
- **Pas de migration DB, pas de déploiement bloquant** — cette évolution est purement applicative.
