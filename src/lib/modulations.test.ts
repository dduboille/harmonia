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
