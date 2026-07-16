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
    expect(v[1].sons.soprano!.haut).toBe(72);
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

function piece2(voix: Partial<Record<NomVoix, [Note, Note]>>): Piece {
  const m = (i: 0 | 1): Record<NomVoix, Voix> => ({
    soprano: voix.soprano ? [voix.soprano[i]] : [],
    alto: voix.alto ? [voix.alto[i]] : [],
    tenor: voix.tenor ? [voix.tenor[i]] : [],
    basse: voix.basse ? [voix.basse[i]] : [],
  });
  return { armure: 0, chiffrage: { temps: 4, unite: 4 }, mesures: [{ voix: m(0) }, { voix: m(1) }] };
}

describe("detecterFautes — parallèles et directes", () => {
  it("quintes paralleles S-B : Sol4/Do3 -> La4/Re3", () => {
    const f = detecterFautes(piece2({
      soprano: [note("G", 4, "ronde"), note("A", 4, "ronde")],
      basse:   [note("C", 3, "ronde"), note("D", 3, "ronde")],
    }));
    expect(f.some((x) => x.type === "quintes-paralleles")).toBe(true);
    expect(f.find((x) => x.type === "quintes-paralleles")!.severite).toBe("faute");
  });
  it("mouvement contraire vers une quinte n'est PAS parallele", () => {
    const f = detecterFautes(piece2({
      soprano: [note("B", 4, "ronde"), note("A", 4, "ronde")],
      basse:   [note("C", 3, "ronde"), note("D", 3, "ronde")],
    }));
    expect(f.some((x) => x.type === "quintes-paralleles")).toBe(false);
  });
  it("octaves paralleles : Do5/Do4 -> Re5/Re4", () => {
    const f = detecterFautes(piece2({
      soprano: [note("C", 5, "ronde"), note("D", 5, "ronde")],
      alto:    [note("C", 4, "ronde"), note("D", 4, "ronde")],
    }));
    expect(f.some((x) => x.type === "octaves-paralleles")).toBe(true);
  });
  it("quinte directe S-B : soprano arrive sur la quinte par saut, meme sens que la basse", () => {
    const f = detecterFautes(piece2({
      soprano: [note("C", 5, "ronde"), note("C", 6, "ronde")],
      basse:   [note("C", 3, "ronde"), note("F", 3, "ronde")],
    }));
    expect(f.some((x) => x.type === "quinte-directe")).toBe(true);
    expect(f.find((x) => x.type === "quinte-directe")!.severite).toBe("avertissement");
  });
  it("quinte atteinte par degre conjoint au soprano n'est PAS une directe", () => {
    const f = detecterFautes(piece2({
      soprano: [note("C", 5, "ronde"), note("D", 5, "ronde")],
      basse:   [note("E", 3, "ronde"), note("G", 3, "ronde")],
    }));
    expect(f.some((x) => x.type === "quinte-directe")).toBe(false);
  });
  it("directe seulement S-B : une quinte directe entre A et T n'est pas signalee", () => {
    const f = detecterFautes(piece2({
      alto:  [note("C", 4, "ronde"), note("C", 5, "ronde")],
      tenor: [note("C", 4, "ronde"), note("F", 4, "ronde")],
    }));
    expect(f.some((x) => x.type === "quinte-directe" || x.type === "octave-directe")).toBe(false);
  });
});

/** Note à PLUSIEURS hauteurs (accord empilé), pour les tests d'extrêmes. */
function accord(hs: Array<[Note["hauteurs"][0]["lettre"], number]>, base: Note["duree"]["base"]): Note {
  return {
    type: "note",
    hauteurs: hs.map(([lettre, octave]) => ({ lettre, alteration: 0, octave })),
    duree: { base, points: 0 },
  };
}

describe("detecterFautes — accords empilés (hauteurs extrêmes)", () => {
  it("verticalites expose haut/bas/midis", () => {
    const v = verticalites(piece1({ basse: [accord([["C", 3], ["G", 3]], "ronde")] }));
    expect(v[0].sons.basse).toMatchObject({ haut: 55, bas: 48, midis: [48, 55] });
  });
  it("croisement sur extrêmes ADJACENTS : le grave du soprano sous l'aigu de l'alto", () => {
    // Soprano = accord Mi4+Do5 (bas = 64), Alto = La4 (69) : 64 < 69 → croisement.
    const f = detecterFautes(piece1({
      soprano: [accord([["E", 4], ["C", 5]], "ronde")],
      alto: [note("A", 4, "ronde")],
    }));
    expect(f.some((x) => x.type === "croisement")).toBe(true);
  });
  it("pas de faux croisement quand les extrêmes sont bien ordonnés", () => {
    // Soprano = Sol4+Do5 (bas = 67), Alto = Mi4 (64) : 67 > 64 → rien.
    const f = detecterFautes(piece1({
      soprano: [accord([["G", 4], ["C", 5]], "ronde")],
      alto: [note("E", 4, "ronde")],
    }));
    expect(f.some((x) => x.type === "croisement")).toBe(false);
  });
  it("parallèles sur la LIGNE extérieure : quintes S–B malgré une hauteur interne", () => {
    // S : Sol4→La4 (haut). B : accord Do3+Mi3 → accord Ré3+Fa3 : la LIGNE de basse est
    // le bas (Do3→Ré3). Sol4/Do3 = quinte, La4/Ré3 = quinte, même sens → parallèles.
    const f = detecterFautes(piece2({
      soprano: [note("G", 4, "ronde"), note("A", 4, "ronde")],
      basse: [accord([["C", 3], ["E", 3]], "ronde"), accord([["D", 3], ["F", 3]], "ronde")],
    }));
    expect(f.some((x) => x.type === "quintes-paralleles")).toBe(true);
  });
  it("tessiture : une hauteur EMPILÉE hors ambitus est signalée", () => {
    // Basse Do3 (dans l'ambitus) + Do5 empilé (72 > 60) → tessiture.
    const f = detecterFautes(piece1({ basse: [accord([["C", 3], ["C", 5]], "ronde")] }));
    expect(f.some((x) => x.type === "tessiture")).toBe(true);
  });
});
