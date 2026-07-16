import { describe, it, expect } from "vitest";
import { dureeEnDivisions, pieceVierge, DIVISIONS, type Duree } from "./piece-model";

describe("dureeEnDivisions — durées entières en divisions 48", () => {
  const d = (base: Duree["base"], points: Duree["points"] = 0, nolet?: Duree["nolet"]): Duree =>
    ({ base, points, nolet });

  it("les valeurs de base", () => {
    expect(DIVISIONS).toBe(48);
    expect(dureeEnDivisions(d("ronde"))).toBe(192);
    expect(dureeEnDivisions(d("blanche"))).toBe(96);
    expect(dureeEnDivisions(d("noire"))).toBe(48);
    expect(dureeEnDivisions(d("croche"))).toBe(24);
    expect(dureeEnDivisions(d("double"))).toBe(12);
  });

  it("les points", () => {
    expect(dureeEnDivisions(d("noire", 1))).toBe(72);   // noire pointée = 1,5 noire
    expect(dureeEnDivisions(d("noire", 2))).toBe(84);   // double pointée = 1,75 noire
    expect(dureeEnDivisions(d("croche", 1))).toBe(36);
  });

  it("le triolet (3 dans le temps de 2)", () => {
    // Un triolet de croches : chaque croche vaut 2/3 d'une croche = 16.
    expect(dureeEnDivisions(d("croche", 0, { reelles: 3, normales: 2 }))).toBe(16);
    // Trois d'entre elles occupent bien deux croches (48).
    expect(3 * dureeEnDivisions(d("croche", 0, { reelles: 3, normales: 2 }))).toBe(48);
  });

  it("refuse une durée non représentable en divisions 48", () => {
    // Un quintolet (5 dans le temps de 4) exige des divisions multiples de 5 ; à 48
    // il ne tombe pas juste (croche = 24 ; 24 × 4/5 = 19,2). On refuse plutôt que de
    // produire une durée fractionnaire, invalide en MusicXML.
    // NB : l'exemple d'origine du plan (double pointée deux fois en triolet) valait
    // 14 ticks — un entier —, donc ne levait PAS ; corrigé ici en un cas réellement
    // fractionnaire, ce qui exerce bien le refus. Cf. rapport.
    expect(() => dureeEnDivisions(d("croche", 0, { reelles: 5, normales: 4 }))).toThrow();
  });
});

describe("pieceVierge — 8 mesures, Do majeur, 4/4", () => {
  it("a la bonne armure et le bon chiffrage", () => {
    const p = pieceVierge();
    expect(p.armure).toBe(0);
    expect(p.chiffrage).toEqual({ temps: 4, unite: 4 });
    expect(p.mesures).toHaveLength(8);
  });

  it("chaque mesure a les quatre voix, toutes vides", () => {
    for (const m of pieceVierge().mesures) {
      expect(Object.keys(m.voix).sort()).toEqual(["alto", "basse", "soprano", "tenor"]);
      for (const v of ["soprano", "alto", "tenor", "basse"] as const) {
        expect(m.voix[v]).toEqual([]);
      }
    }
  });
});
