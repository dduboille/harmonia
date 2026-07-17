/**
 * Tests de l'ANALYSE du squelette : frise fonctionnelle + détection de cadence.
 */

import { describe, it, expect } from "vitest";
import { construirePalette, type AccordPalette } from "./palette-fonctionnelle";
import {
  squeletteVierge,
  poserAccord,
  type Tonalite,
} from "./squelette-model";
import { etiquettesFonctionnelles, detecterCadence } from "./squelette-analyse";

const DO_MAJEUR: Tonalite = { tonicPc: 0, mode: "major", keySignature: "C" };

function accordParDegre(t: Tonalite, niveau: 1 | 2 | 3, degre: string): AccordPalette {
  for (const g of construirePalette(t.tonicPc, t.mode, niveau)) {
    const a = g.accords.find((x) => x.degree === degre);
    if (a) return a;
  }
  throw new Error(`Accord ${degre} introuvable : ${degre}`);
}

/** Le V6/5 (dominante 7e, 1er renversement : la basse porte la tierce). */
function accordV65(t: Tonalite): AccordPalette {
  for (const g of construirePalette(t.tonicPc, t.mode, 1)) {
    const a = g.accords.find(
      (x) => x.fonction === "D" && x.pcs.length === 4 && x.bassPc === x.pcs[1],
    );
    if (a) return a;
  }
  throw new Error("V6/5 introuvable");
}

/** Pose une suite d'accords (par degré) sur les premières mesures. */
function poserSuite(t: Tonalite, degres: string[]): ReturnType<typeof squeletteVierge> {
  let sq = squeletteVierge(t, 1);
  degres.forEach((d, i) => {
    sq = poserAccord(sq, i, 0, accordParDegre(t, 1, d));
  });
  return sq;
}

describe("etiquettesFonctionnelles", () => {
  it("expose la fonction de chaque accord posé (T / SD / D)", () => {
    const sq = poserSuite(DO_MAJEUR, ["I", "IV", "V"]);
    expect(etiquettesFonctionnelles(sq)).toEqual([
      { mesure: 0, emplacement: 0, fonction: "T" },
      { mesure: 1, emplacement: 0, fonction: "SD" },
      { mesure: 2, emplacement: 0, fonction: "D" },
    ]);
  });

  it("squelette vide : aucune étiquette", () => {
    expect(etiquettesFonctionnelles(squeletteVierge(DO_MAJEUR, 1))).toEqual([]);
  });
});

describe("detecterCadence", () => {
  it("V → I : cadence parfaite", () => {
    expect(detecterCadence(poserSuite(DO_MAJEUR, ["I", "IV", "V", "I"]))).toBe("parfaite");
  });

  it("IV → I : cadence plagale", () => {
    expect(detecterCadence(poserSuite(DO_MAJEUR, ["I", "V", "IV", "I"]))).toBe("plagale");
  });

  it("… → V : demi-cadence", () => {
    expect(detecterCadence(poserSuite(DO_MAJEUR, ["I", "IV", "V"]))).toBe("demi");
  });

  it("V → vi : cadence rompue", () => {
    expect(detecterCadence(poserSuite(DO_MAJEUR, ["I", "V", "vi"]))).toBe("rompue");
  });

  it("suite quelconque (I → ii) : aucune cadence", () => {
    expect(detecterCadence(poserSuite(DO_MAJEUR, ["I", "ii"]))).toBeNull();
  });

  it("un seul accord : aucune cadence", () => {
    expect(detecterCadence(poserSuite(DO_MAJEUR, ["I"]))).toBeNull();
  });

  it("robuste au renversement : V6/5 → I reste une cadence parfaite", () => {
    let sq = squeletteVierge(DO_MAJEUR, 1);
    sq = poserAccord(sq, 0, 0, accordV65(DO_MAJEUR));
    sq = poserAccord(sq, 1, 0, accordParDegre(DO_MAJEUR, 1, "I"));
    expect(detecterCadence(sq)).toBe("parfaite");
  });
});
