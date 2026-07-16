import { describe, it, expect } from "vitest";
import { parseMusicXML, TPQ } from "./musicxml-parse";
import { pieceVersMusicXML } from "./piece-vers-musicxml";
import { pieceVierge, type Piece, type Note, type Hauteur } from "./piece-model";
import {
  capaciteMesure, dureePlacee, decouperEnSilences, remplirSilences,
  inserer, effacer, type Curseur,
} from "./composition-edition";

const DO5: Hauteur = { lettre: "C", alteration: 0, octave: 5 };
function noteN(base: Note["duree"]["base"], points: 0 | 1 | 2 = 0): Note {
  return { type: "note", hauteurs: [DO5], duree: { base, points } };
}
/** Une pièce d'édition vide : mêmes 8 mesures que la vierge, mais VOIX VIDES
 *  (le modèle d'édition ne porte que les notes posées). */
function pieceEdition(): Piece {
  return {
    armure: 0, chiffrage: { temps: 4, unite: 4 },
    mesures: Array.from({ length: 8 }, () => ({ portees: [[], []] as [Note[], Note[]] })),
  };
}
const CURSEUR0: Curseur = { mesure: 0, portee: 0 };

describe("capaciteMesure / dureePlacee", () => {
  it("une mesure 4/4 vaut 4 noires", () => {
    expect(capaciteMesure({ temps: 4, unite: 4 })).toBe(4 * 48);
    expect(capaciteMesure({ temps: 3, unite: 4 })).toBe(3 * 48);
    expect(capaciteMesure({ temps: 6, unite: 8 })).toBe(6 * 24);
  });
  it("dureePlacee somme les durées posées", () => {
    expect(dureePlacee([noteN("noire"), noteN("croche")])).toBe(48 + 24);
  });
});

describe("decouperEnSilences — combler un vide en valeurs standard", () => {
  it("3 temps → une blanche pointée", () => {
    const s = decouperEnSilences(3 * 48);
    expect(s.map((x) => x.duree)).toEqual([{ base: "blanche", points: 1 }]);
  });
  it("la somme des silences vaut le vide", () => {
    const total = decouperEnSilences(3 * 48 + 24).reduce((t, x) => {
      const q: Record<string, number> = { ronde: 192, blanche: 96, noire: 48, croche: 24, double: 12 };
      return t + q[x.duree.base] * (x.duree.points === 1 ? 1.5 : 1);
    }, 0);
    expect(total).toBe(3 * 48 + 24);
  });
});

describe("remplirSilences — la pièce toujours renderable", () => {
  it("une voix vide devient un silence de mesure", () => {
    const p = remplirSilences(pieceEdition());
    const ev = p.mesures[0].portees[0][0];
    expect(ev.type).toBe("silence");
    expect(ev.type === "silence" && ev.mesureEntiere).toBe(true);
  });
  it("une voix partielle est complétée à la capacité", () => {
    const p = pieceEdition();
    p.mesures[0].portees[0] = [noteN("noire")];
    const rempli = remplirSilences(p);
    const voix = rempli.mesures[0].portees[0];
    // La noire + des silences dont le total complète la mesure.
    expect(voix[0].type).toBe("note");
    expect(voix.slice(1).every((e) => e.type === "silence")).toBe(true);
  });
});

describe("inserer", () => {
  it("insère une note qui tient et garde le curseur sur la mesure", () => {
    const { piece, curseur } = inserer(pieceEdition(), CURSEUR0, noteN("noire"));
    expect(piece.mesures[0].portees[0]).toHaveLength(1);
    expect(curseur).toEqual({ mesure: 0, portee: 0 });
  });
  it("quand la mesure se remplit, le curseur passe à la suivante", () => {
    let p = pieceEdition();
    let c = CURSEUR0;
    for (let i = 0; i < 4; i++) ({ piece: p, curseur: c } = inserer(p, c, noteN("noire")));
    expect(p.mesures[0].portees[0]).toHaveLength(4);
    expect(c).toEqual({ mesure: 1, portee: 0 });
  });
  it("refuse une note trop longue pour la place restante", () => {
    let p = pieceEdition();
    let c = CURSEUR0;
    ({ piece: p, curseur: c } = inserer(p, c, noteN("blanche", 1))); // 3 temps
    const avant = p;
    const res = inserer(p, c, noteN("ronde")); // 4 temps, il n'en reste qu'un
    expect(res.piece).toBe(avant);            // inchangé
    expect(res.piece.mesures[0].portees[0]).toHaveLength(1);
  });
});

describe("effacer", () => {
  it("retire la dernière note posée", () => {
    let p = pieceEdition();
    let c = CURSEUR0;
    ({ piece: p, curseur: c } = inserer(p, c, noteN("noire")));
    ({ piece: p, curseur: c } = inserer(p, c, noteN("noire")));
    ({ piece: p, curseur: c } = effacer(p, c));
    expect(p.mesures[0].portees[0]).toHaveLength(1);
  });
  it("sur une mesure vide, recule et efface la dernière de la précédente", () => {
    let p = pieceEdition();
    let c = CURSEUR0;
    for (let i = 0; i < 4; i++) ({ piece: p, curseur: c } = inserer(p, c, noteN("noire")));
    // c est sur la mesure 1 (vide) ; effacer doit revenir à la mesure 0 et retirer une note.
    ({ piece: p, curseur: c } = effacer(p, c));
    expect(c.mesure).toBe(0);
    expect(p.mesures[0].portees[0]).toHaveLength(3);
  });
});

describe("aller-retour complet par le socle 2a", () => {
  it("une pièce composée par insertions se relit aux bons instants", () => {
    let p = pieceEdition();
    let c = CURSEUR0;
    for (const l of ["C", "D", "E", "F"] as Hauteur["lettre"][]) {
      ({ piece: p, curseur: c } = inserer(p, c, {
        type: "note", hauteurs: [{ lettre: l, alteration: 0, octave: 5 }], duree: { base: "noire", points: 0 },
      }));
    }
    const score = parseMusicXML(pieceVersMusicXML(remplirSilences(p)));
    const haut = score.notes.filter((x) => x.midi >= 72 && x.onset < 4 * TPQ).sort((a, b) => a.onset - b.onset);
    expect(haut.map((x) => x.onset)).toEqual([0, TPQ, 2 * TPQ, 3 * TPQ]);
  });
});
