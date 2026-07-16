import { describe, it, expect } from "vitest";
import { verticalites, detecterFautes } from "./conduite-voix";
import type { Piece, Note, NomVoix, Voix } from "./piece-model";

function note(lettre: Note["hauteurs"][0]["lettre"], octave: number, base: Note["duree"]["base"]): Note {
  return { type: "note", hauteurs: [{ lettre, alteration: 0, octave }], duree: { base, points: 0 } };
}
function piece1(voix: Partial<Record<NomVoix, Voix>>): Piece {
  return {
    armure: 0, chiffrage: { temps: 4, unite: 4 },
    mesures: [{ voix: { soprano: voix.soprano ?? [], alto: voix.alto ?? [], tenor: voix.tenor ?? [], basse: voix.basse ?? [] } }],
  };
}

describe("verticalites — reconstruire les accords malgre des rythmes independants", () => {
  it("une voix tenue pendant que l'autre bouge : 2 verticalites, la tenue en mouvement oblique", () => {
    const v = verticalites(piece1({
      soprano: [note("C", 5, "blanche")],
      basse: [note("C", 3, "noire"), note("D", 3, "noire")],
    }));
    expect(v).toHaveLength(2);
    expect(v[1].sons.soprano!.midi).toBe(72);
    expect(v[1].sons.soprano!.attaque).toBe(false);
    expect(v[1].sons.basse!.attaque).toBe(true);
  });
  it("chaque son porte la position (mesure, voix, note) de sa note", () => {
    const v = verticalites(piece1({ basse: [note("C", 3, "noire"), note("D", 3, "noire")] }));
    expect(v[1].sons.basse!.position).toEqual({ mesure: 0, voix: "basse", note: 1 });
  });
});

describe("detecterFautes — fautes verticales", () => {
  it("croisement : alto au-dessus du soprano", () => {
    const f = detecterFautes(piece1({ soprano: [note("C", 4, "ronde")], alto: [note("E", 4, "ronde")] }));
    expect(f.some((x) => x.type === "croisement")).toBe(true);
    const c = f.find((x) => x.type === "croisement")!;
    expect(c.severite).toBe("faute");
    expect(c.positions).toHaveLength(2);
  });
  it("ecart : soprano et alto a plus d'une octave", () => {
    const f = detecterFautes(piece1({ soprano: [note("C", 6, "ronde")], alto: [note("C", 4, "ronde")] }));
    expect(f.some((x) => x.type === "ecart")).toBe(true);
    expect(f.find((x) => x.type === "ecart")!.severite).toBe("avertissement");
  });
  it("ecart : exactement une octave n'est PAS signale", () => {
    const f = detecterFautes(piece1({ soprano: [note("C", 5, "ronde")], alto: [note("C", 4, "ronde")] }));
    expect(f.some((x) => x.type === "ecart")).toBe(false);
  });
  it("tessiture : une basse a Do5 est hors ambitus", () => {
    const f = detecterFautes(piece1({ basse: [note("C", 5, "ronde")] }));
    const t = f.find((x) => x.type === "tessiture")!;
    expect(t.severite).toBe("avertissement");
    expect(t.positions).toEqual([{ mesure: 0, voix: "basse", note: 0 }]);
  });
  it("un accord SATB bien place ne produit aucune faute verticale", () => {
    const f = detecterFautes(piece1({
      soprano: [note("G", 4, "ronde")], alto: [note("E", 4, "ronde")],
      tenor: [note("C", 4, "ronde")], basse: [note("C", 3, "ronde")],
    }));
    expect(f.filter((x) => ["croisement", "ecart", "tessiture"].includes(x.type))).toEqual([]);
  });
});
