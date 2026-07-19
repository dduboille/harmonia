/**
 * Tests du modèle pur du relevé supérieur (releve-model.ts).
 *
 * Tout l'aléa est injecté : les tests utilisent un générateur déterministe
 * (mulberry32) pour vérifier la reproductibilité du tirage, les propriétés des
 * pastilles de chiffrage (bonne réponse présente, distracteurs distincts,
 * position non fixe) et la notation octave-agnostique de la basse.
 */

import { describe, it, expect } from "vitest";
import {
  tirerExercice,
  noterBasse,
  noterChiffrages,
  optionsChiffrage,
  ECOUTES_EXAMEN,
  NB_OPTIONS_CHIFFRAGE,
  TONALITES_MAJEURES,
  TONALITES_MINEURES,
  type ExerciceReleve,
  type Rng,
} from "@/lib/releve-model";
import type { SATBMeasure } from "@/lib/satb-generator";
import type { NoteEntry } from "@/lib/satb-rules";

// ── Aléa déterministe (mulberry32) ─────────────────────────────────────────────

function mulberry32(seed: number): Rng {
  let a = seed >>> 0;
  return () => {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function exempleExercice(seed = 42): ExerciceReleve {
  const ex = tirerExercice(mulberry32(seed));
  expect(ex).not.toBeNull();
  return ex!;
}

// ── Constantes ─────────────────────────────────────────────────────────────────

describe("constantes du relevé", () => {
  it("le mode examen accorde 6 écoutes", () => {
    expect(ECOUTES_EXAMEN).toBe(6);
  });
});

// ── Tirage ─────────────────────────────────────────────────────────────────────

describe("tirerExercice", () => {
  it("tire un exercice complet et cohérent", () => {
    const ex = exempleExercice();
    expect(ex.solution.length).toBe(ex.template.symboles.length);
    expect(ex.symboles).toEqual(ex.template.symboles);
    expect(ex.genere.solution).toBe(ex.solution);
    expect(ex.genere.dotKeys.length).toBe(ex.solution.length);
  });

  it("est déterministe à graine égale, et varie selon la graine", () => {
    const a = tirerExercice(mulberry32(7))!;
    const b = tirerExercice(mulberry32(7))!;
    expect(`${a.template.id}·${a.tonalite}·${a.doigte}`)
      .toBe(`${b.template.id}·${b.tonalite}·${b.doigte}`);
    // 20 graines → au moins 2 combos distincts (l'éventail fait > 1500 combos).
    const combos = new Set(
      Array.from({ length: 20 }, (_, i) => {
        const ex = tirerExercice(mulberry32(i + 1))!;
        return `${ex.template.id}·${ex.tonalite}·${ex.doigte}`;
      }),
    );
    expect(combos.size).toBeGreaterThan(1);
  });

  it("respecte le filtre de niveau du gabarit", () => {
    for (let seed = 1; seed <= 10; seed++) {
      const ex = tirerExercice(mulberry32(seed), { niveau: 1 })!;
      expect(ex.template.difficulte).toBe(1);
    }
  });

  it("respecte le filtre de tonalités (majeures / mineures)", () => {
    for (let seed = 1; seed <= 10; seed++) {
      const maj = tirerExercice(mulberry32(seed), { tonalites: "majeures" })!;
      expect(TONALITES_MAJEURES).toContain(maj.tonalite);
      const min = tirerExercice(mulberry32(seed), { tonalites: "mineures" })!;
      expect(TONALITES_MINEURES).toContain(min.tonalite);
    }
  });

  it("respecte la restriction de gabarits (gating gratuit)", () => {
    for (let seed = 1; seed <= 5; seed++) {
      const ex = tirerExercice(mulberry32(seed), { templateIds: ["ii-v-i"] })!;
      expect(ex.template.id).toBe("ii-v-i");
    }
  });

  it("renvoie null si les filtres vident l'éventail", () => {
    expect(tirerExercice(mulberry32(1), { templateIds: [] })).toBeNull();
  });
});

// ── Notation de la basse (palier ①) ────────────────────────────────────────────

describe("noterBasse", () => {
  // Solution artificielle : basse Do3 – Sol2 – Do3.
  const solution = [
    { bass: { name: "C", octave: 3 } },
    { bass: { name: "G", octave: 2 } },
    { bass: { name: "C", octave: 3 } },
  ] as SATBMeasure[];

  const entree = (name: string | null, octave = 3): NoteEntry =>
    ({ name, octave } as NoteEntry);

  it("compare par classe de hauteurs — l'octave est libre (Do2 saisi vs Do3 attendu = juste)", () => {
    const r = noterBasse([entree("C", 2), entree("G", 4), entree("C", 5)], solution);
    expect(r.parMesure).toEqual([true, true, true]);
    expect(r.bonnes).toBe(3);
    expect(r.total).toBe(3);
  });

  it("accepte l'équivalence enharmonique de nom (Sol♯ ↔ La♭) mais pas une autre classe", () => {
    const sol = [{ bass: { name: "G#", octave: 2 } }] as SATBMeasure[];
    expect(noterBasse([entree("Ab", 3)], sol).parMesure).toEqual([true]);
    expect(noterBasse([entree("A", 3)], sol).parMesure).toEqual([false]);
  });

  it("une classe de hauteurs fausse est fausse — sur la bonne mesure", () => {
    const r = noterBasse([entree("C"), entree("A"), entree("C")], solution);
    expect(r.parMesure).toEqual([true, false, true]);
    expect(r.bonnes).toBe(2);
  });

  it("une case vide (null ou nom absent) est fausse", () => {
    const r = noterBasse([null, entree(null), entree("C")], solution);
    expect(r.parMesure).toEqual([false, false, true]);
  });

  it("une saisie plus courte que la solution laisse les mesures manquantes fausses", () => {
    const r = noterBasse([entree("C")], solution);
    expect(r.parMesure).toEqual([true, false, false]);
    expect(r.total).toBe(3);
  });
});

// ── Notation des chiffrages (palier ②) ─────────────────────────────────────────

describe("noterChiffrages", () => {
  const symboles = ["II6", "V7", "I"];

  it("exige la correspondance exacte, mesure par mesure", () => {
    const r = noterChiffrages(["II6", "V7", "I"], symboles);
    expect(r.parMesure).toEqual([true, true, true]);
    expect(r.bonnes).toBe(3);
  });

  it("un symbole voisin mais différent est faux (II ≠ II6, V ≠ V7)", () => {
    const r = noterChiffrages(["II", "V", "I"], symboles);
    expect(r.parMesure).toEqual([false, false, true]);
  });

  it("un choix absent (null) est faux", () => {
    const r = noterChiffrages([null, "V7", null], symboles);
    expect(r.parMesure).toEqual([false, true, false]);
    expect(r.total).toBe(3);
  });
});

// ── Pastilles du palier ② ──────────────────────────────────────────────────────

describe("optionsChiffrage", () => {
  it("propose par mesure la bonne réponse + des distracteurs distincts, sans doublon", () => {
    const ex = exempleExercice();
    const options = optionsChiffrage(ex, mulberry32(3));
    expect(options.length).toBe(ex.symboles.length);
    options.forEach((opts, i) => {
      expect(opts.length).toBe(NB_OPTIONS_CHIFFRAGE);
      expect(opts).toContain(ex.symboles[i]);
      // Sans doublon → les distracteurs sont ≠ entre eux et ≠ de la bonne réponse.
      expect(new Set(opts).size).toBe(opts.length);
    });
  });

  it("la bonne réponse n'occupe JAMAIS une position fixe (distribution sur les tirages)", () => {
    const ex = exempleExercice();
    const positions = new Set<number>();
    for (let seed = 1; seed <= 40; seed++) {
      const options = optionsChiffrage(ex, mulberry32(seed));
      options.forEach((opts, i) => positions.add(opts.indexOf(ex.symboles[i])));
    }
    // Sur 40 tirages × N mesures, la bonne réponse doit visiter plusieurs positions.
    expect(positions.size).toBeGreaterThan(1);
  });

  it("est déterministe à graine égale", () => {
    const ex = exempleExercice();
    expect(optionsChiffrage(ex, mulberry32(9))).toEqual(optionsChiffrage(ex, mulberry32(9)));
  });
});
