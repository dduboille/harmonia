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
