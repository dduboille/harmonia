/**
 * Tests de la RÉALISATION SATB du squelette (conduite + repli bloc).
 */

import { describe, it, expect } from "vitest";
import { construirePalette, type AccordPalette } from "./palette-fonctionnelle";
import { RANGES } from "./voicing-ecole";
import {
  squeletteVierge,
  poserAccord,
  basculerSubdivision,
  type Tonalite,
} from "./squelette-model";
import { accordVersChordSpec, realiserSquelette } from "./squelette-realisation";

const DO_MAJEUR: Tonalite = { tonicPc: 0, mode: "major", keySignature: "C" };
const LA_MINEUR: Tonalite = { tonicPc: 9, mode: "minor", keySignature: "Am" };

function accordParDegre(t: Tonalite, niveau: 1 | 2 | 3, degre: string): AccordPalette {
  for (const g of construirePalette(t.tonicPc, t.mode, niveau)) {
    const a = g.accords.find((x) => x.degree === degre);
    if (a) return a;
  }
  throw new Error(`Accord ${degre} introuvable`);
}

function accordParCategorie(t: Tonalite, categorie: string): AccordPalette {
  for (const g of construirePalette(t.tonicPc, t.mode, 3)) {
    const a = g.accords.find((x) => x.categorie === categorie);
    if (a) return a;
  }
  throw new Error(`Catégorie ${categorie} introuvable`);
}

describe("accordVersChordSpec", () => {
  it("triade I : root/tierce/quinte, pas de 7e, quinte omissible", () => {
    const I = accordParDegre(DO_MAJEUR, 1, "I");
    const s = accordVersChordSpec(I);
    expect(s.rootPc).toBe(0);
    expect(s.thirdPc).toBe(4);
    expect(s.fifthPc).toBe(7);
    expect(s.seventhPc).toBeNull();
    expect(s.fifthOmissible).toBe(true);
    expect(s.pcs).toEqual(I.pcs);
  });

  it("V7 : la 7e est présente", () => {
    const V7 = accordParDegre(DO_MAJEUR, 1, "V7");
    const s = accordVersChordSpec(V7);
    expect(s.rootPc).toBe(7); // Sol
    expect(s.thirdPc).toBe(11);
    expect(s.fifthPc).toBe(2);
    expect(s.seventhPc).toBe(5);
    expect(s.fifthOmissible).toBe(true);
  });

  it("ii6 (renversement) : root = fondamentale, pas la basse", () => {
    const ii6 = accordParDegre(DO_MAJEUR, 1, "ii6");
    const s = accordVersChordSpec(ii6);
    expect(s.rootPc).toBe(2); // Ré, fondamentale
    expect(ii6.bassPc).toBe(5); // Fa à la basse (1er renversement)
  });

  it("pcs[0] est bien la fondamentale sur TOUS les accords de la palette (diatoniques ET chromatiques)", () => {
    // Attestation : un empilement de tierces à partir de pcs[0] prouve que pcs[0]
    // est la fondamentale. Vaut pour napolitain, sixte augmentée, dominantes
    // secondaires (niveau 3) autant que pour les diatoniques.
    for (const tonalite of [DO_MAJEUR, LA_MINEUR]) {
      for (const g of construirePalette(tonalite.tonicPc, tonalite.mode, 3)) {
        for (const a of g.accords) {
          expect(a.pcs.length).toBeGreaterThanOrEqual(3);
          const tierce = (a.pcs[1] - a.pcs[0] + 12) % 12;
          const quinte = (a.pcs[2] - a.pcs[0] + 12) % 12;
          expect([3, 4]).toContain(tierce); // tierce mineure ou majeure
          expect([6, 7, 8]).toContain(quinte); // quinte diminuée, juste ou augmentée
          if (a.pcs[3] !== undefined) {
            const septieme = (a.pcs[3] - a.pcs[0] + 12) % 12;
            expect([9, 10, 11]).toContain(septieme); // 7e dim, min ou maj
          }
        }
      }
    }
  });

  it("napolitain et dominante secondaire : fondamentale attendue", () => {
    const napo = accordParCategorie(DO_MAJEUR, "napolitain");
    expect(accordVersChordSpec(napo).rootPc).toBe(1); // Réb (bII), fondamentale
    const secondaire = accordParDegre(DO_MAJEUR, 3, "V7/V");
    expect(accordVersChordSpec(secondaire).rootPc).toBe(2); // Ré (dominante de la dominante)
  });
});

describe("realiserSquelette", () => {
  it("I–IV–V–I : conduite propre (approx=false), 4 voix dans les tessitures", () => {
    let sq = squeletteVierge(DO_MAJEUR, 1);
    sq = poserAccord(sq, 0, 0, accordParDegre(DO_MAJEUR, 1, "I"));
    sq = poserAccord(sq, 1, 0, accordParDegre(DO_MAJEUR, 1, "IV"));
    sq = poserAccord(sq, 2, 0, accordParDegre(DO_MAJEUR, 1, "V"));
    sq = poserAccord(sq, 3, 0, accordParDegre(DO_MAJEUR, 1, "I"));

    const { mesures, approx } = realiserSquelette(sq);
    expect(approx).toBe(false);
    expect(mesures).toHaveLength(8);
    for (let i = 0; i < 4; i++) expect(mesures[i]).toHaveLength(1);
    for (let i = 4; i < 8; i++) expect(mesures[i]).toHaveLength(0);

    for (const bloc of mesures.slice(0, 4)) {
      const v = bloc[0];
      expect(v.bass).toBeGreaterThanOrEqual(RANGES.bass.min);
      expect(v.bass).toBeLessThanOrEqual(RANGES.bass.max);
      expect(v.tenor).toBeGreaterThanOrEqual(RANGES.tenor.min);
      expect(v.alto).toBeLessThanOrEqual(RANGES.alto.max);
      expect(v.soprano).toBeLessThanOrEqual(RANGES.soprano.max);
      // Pas de croisement.
      expect(v.bass).toBeLessThanOrEqual(v.tenor);
      expect(v.tenor).toBeLessThanOrEqual(v.alto);
      expect(v.alto).toBeLessThanOrEqual(v.soprano);
    }
  });

  it("regroupe deux accords d'une même mesure (2 blanches)", () => {
    let sq = squeletteVierge(DO_MAJEUR, 1);
    sq = poserAccord(sq, 0, 0, accordParDegre(DO_MAJEUR, 1, "I"));
    sq = basculerSubdivision(sq, 0);
    sq = poserAccord(sq, 0, 1, accordParDegre(DO_MAJEUR, 1, "V"));

    const { mesures } = realiserSquelette(sq);
    expect(mesures[0]).toHaveLength(2);
    expect(mesures[1]).toHaveLength(0);
  });

  it("cas inconduisible (V6 → vi : sensible à la basse) : approx=true, voicing non vide et cohérent", () => {
    let sq = squeletteVierge(DO_MAJEUR, 1);
    sq = poserAccord(sq, 0, 0, accordParDegre(DO_MAJEUR, 1, "V6"));
    sq = poserAccord(sq, 1, 0, accordParDegre(DO_MAJEUR, 1, "vi"));

    const { mesures, approx } = realiserSquelette(sq);
    expect(approx).toBe(true);
    expect(mesures[0]).toHaveLength(1);
    expect(mesures[1]).toHaveLength(1);
    for (const bloc of [mesures[0][0], mesures[1][0]]) {
      // Quatre voix posées, ascendantes (pas de croisement).
      expect(bloc.bass).toBeLessThanOrEqual(bloc.tenor);
      expect(bloc.tenor).toBeLessThanOrEqual(bloc.alto);
      expect(bloc.alto).toBeLessThanOrEqual(bloc.soprano);
      expect(Number.isFinite(bloc.bass)).toBe(true);
    }
    // La basse du repli porte bien la note du renversement (sensible pour V6).
    const V6 = accordParDegre(DO_MAJEUR, 1, "V6");
    expect(((mesures[0][0].bass % 12) + 12) % 12).toBe(V6.bassPc);
  });

  it("squelette vide : aucune approximation, que des mesures vides", () => {
    const sq = squeletteVierge(DO_MAJEUR, 1);
    const { mesures, approx } = realiserSquelette(sq);
    expect(approx).toBe(false);
    expect(mesures.every((m) => m.length === 0)).toBe(true);
  });
});
