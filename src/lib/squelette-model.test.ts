/**
 * Tests du MODÈLE du squelette harmonique (opérations pures et immuables).
 */

import { describe, it, expect } from "vitest";
import { construirePalette, type AccordPalette } from "./palette-fonctionnelle";
import {
  squeletteVierge,
  poserAccord,
  viderEmplacement,
  basculerSubdivision,
  changerTonalite,
  changerNiveau,
  accordsEnSuite,
  type Tonalite,
} from "./squelette-model";

const DO_MAJEUR: Tonalite = { tonicPc: 0, mode: "major", keySignature: "C" };
const SOL_MAJEUR: Tonalite = { tonicPc: 7, mode: "major", keySignature: "G" };

/** Retrouve un accord de la palette par son degré (au niveau donné). */
function accordParDegre(t: Tonalite, niveau: 1 | 2, degre: string): AccordPalette {
  for (const g of construirePalette(t.tonicPc, t.mode, niveau)) {
    const a = g.accords.find((x) => x.degree === degre);
    if (a) return a;
  }
  throw new Error(`Accord ${degre} introuvable au niveau ${niveau}`);
}

/** Un accord chromatique quelconque de la palette (colonne « Chromatisme »). */
function accordChromatique(t: Tonalite): AccordPalette {
  const groupe = construirePalette(t.tonicPc, t.mode, 2).find((g) => g.titre === "Chromatisme")!;
  return groupe.accords[0];
}

describe("squeletteVierge", () => {
  it("crée 8 mesures d'un emplacement vide chacune", () => {
    const sq = squeletteVierge(DO_MAJEUR, 1);
    expect(sq.mesures).toHaveLength(8);
    for (const m of sq.mesures) {
      expect(m.emplacements).toHaveLength(1);
      expect(m.emplacements[0].accord).toBeNull();
    }
    expect(sq.tonalite).toEqual(DO_MAJEUR);
    expect(sq.niveau).toBe(1);
  });
});

describe("poserAccord / viderEmplacement", () => {
  it("pose un accord sans muter l'original", () => {
    const sq = squeletteVierge(DO_MAJEUR, 1);
    const I = accordParDegre(DO_MAJEUR, 1, "I");
    const sq2 = poserAccord(sq, 2, 0, I);
    expect(sq2.mesures[2].emplacements[0].accord).toEqual(I);
    // Immuabilité : l'original reste vierge.
    expect(sq.mesures[2].emplacements[0].accord).toBeNull();
    expect(sq2).not.toBe(sq);
  });

  it("vide un emplacement rempli", () => {
    const sq = squeletteVierge(DO_MAJEUR, 1);
    const I = accordParDegre(DO_MAJEUR, 1, "I");
    const rempli = poserAccord(sq, 0, 0, I);
    const vide = viderEmplacement(rempli, 0, 0);
    expect(vide.mesures[0].emplacements[0].accord).toBeNull();
    // L'original rempli n'est pas muté.
    expect(rempli.mesures[0].emplacements[0].accord).toEqual(I);
  });
});

describe("basculerSubdivision", () => {
  it("passe de 1 à 2 emplacements (le 2e est vide) puis revient à 1 en gardant le 1er", () => {
    const sq = squeletteVierge(DO_MAJEUR, 1);
    const I = accordParDegre(DO_MAJEUR, 1, "I");
    const V = accordParDegre(DO_MAJEUR, 1, "V");
    const pose = poserAccord(sq, 3, 0, I);

    const deux = basculerSubdivision(pose, 3);
    expect(deux.mesures[3].emplacements).toHaveLength(2);
    expect(deux.mesures[3].emplacements[0].accord).toEqual(I);
    expect(deux.mesures[3].emplacements[1].accord).toBeNull();

    const deuxRempli = poserAccord(deux, 3, 1, V);
    const un = basculerSubdivision(deuxRempli, 3);
    expect(un.mesures[3].emplacements).toHaveLength(1);
    expect(un.mesures[3].emplacements[0].accord).toEqual(I); // on garde le 1er, on jette le 2e
  });
});

describe("changerTonalite", () => {
  it("vide TOUS les accords mais garde la structure des subdivisions", () => {
    let sq = squeletteVierge(DO_MAJEUR, 2);
    const I = accordParDegre(DO_MAJEUR, 2, "I");
    sq = poserAccord(sq, 0, 0, I);
    sq = basculerSubdivision(sq, 5); // mesure 5 : 2 emplacements
    sq = poserAccord(sq, 5, 1, I);

    const sol = changerTonalite(sq, SOL_MAJEUR);
    expect(sol.tonalite).toEqual(SOL_MAJEUR);
    // Structure conservée.
    expect(sol.mesures).toHaveLength(8);
    expect(sol.mesures[5].emplacements).toHaveLength(2);
    // Tous les accords sont effacés.
    for (const m of sol.mesures) {
      for (const e of m.emplacements) expect(e.accord).toBeNull();
    }
  });
});

describe("changerNiveau", () => {
  it("en repassant à 1, retire les accords chromatiques mais garde les diatoniques", () => {
    let sq = squeletteVierge(DO_MAJEUR, 2);
    const I = accordParDegre(DO_MAJEUR, 2, "I");
    const chrom = accordChromatique(DO_MAJEUR);
    expect(chrom.categorie).not.toBe("diatonique");
    sq = poserAccord(sq, 0, 0, I);
    sq = poserAccord(sq, 1, 0, chrom);

    const n1 = changerNiveau(sq, 1);
    expect(n1.niveau).toBe(1);
    expect(n1.mesures[0].emplacements[0].accord).toEqual(I); // diatonique gardé
    expect(n1.mesures[1].emplacements[0].accord).toBeNull(); // chromatique retiré
  });

  it("en passant à 2, ne retire rien", () => {
    let sq = squeletteVierge(DO_MAJEUR, 1);
    const I = accordParDegre(DO_MAJEUR, 1, "I");
    sq = poserAccord(sq, 0, 0, I);
    const n2 = changerNiveau(sq, 2);
    expect(n2.niveau).toBe(2);
    expect(n2.mesures[0].emplacements[0].accord).toEqual(I);
  });
});

describe("accordsEnSuite", () => {
  it("liste les accords remplis dans l'ordre de lecture (mesure puis emplacement), en sautant les vides", () => {
    let sq = squeletteVierge(DO_MAJEUR, 1);
    const I = accordParDegre(DO_MAJEUR, 1, "I");
    const IV = accordParDegre(DO_MAJEUR, 1, "IV");
    const V = accordParDegre(DO_MAJEUR, 1, "V");

    sq = poserAccord(sq, 0, 0, I);
    sq = basculerSubdivision(sq, 1); // mesure 1 : 2 emplacements
    sq = poserAccord(sq, 1, 0, IV);
    sq = poserAccord(sq, 1, 1, V);
    // mesure 2 laissée vide
    sq = poserAccord(sq, 3, 0, I);

    const suite = accordsEnSuite(sq);
    expect(suite).toEqual([
      { mesure: 0, emplacement: 0, accord: I },
      { mesure: 1, emplacement: 0, accord: IV },
      { mesure: 1, emplacement: 1, accord: V },
      { mesure: 3, emplacement: 0, accord: I },
    ]);
  });
});
