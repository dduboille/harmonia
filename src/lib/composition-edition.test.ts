import { describe, it, expect } from "vitest";
import { parseMusicXML, TPQ } from "./musicxml-parse";
import { pieceVersMusicXML } from "./piece-vers-musicxml";
import { type Piece, type Note, type Hauteur } from "./piece-model";
import {
  capaciteMesure, dureePlacee, decouperEnSilences, voixActives,
  inserer, effacer, positionEcriture, type Curseur,
} from "./composition-edition";

const DO5: Hauteur = { lettre: "C", alteration: 0, octave: 5 };
function noteN(base: Note["duree"]["base"], points: 0 | 1 | 2 = 0): Note {
  return { type: "note", hauteurs: [DO5], duree: { base, points } };
}
/** Une pièce d'édition vide : 8 mesures aux QUATRE voix vides. */
function pieceEdition(): Piece {
  return {
    armure: 0, chiffrage: { temps: 4, unite: 4 },
    mesures: Array.from({ length: 8 }, () => ({
      voix: { soprano: [], alto: [], tenor: [], basse: [] },
    })),
  };
}
const CURSEUR0: Curseur = { mesure: 0, voix: "soprano", note: "fin" };

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

describe("voixActives — masquer les voix sans note", () => {
  it("ne retient que les voix qui ont une note", () => {
    const p = pieceEdition();
    p.mesures[0].voix.soprano = [noteN("noire")];
    p.mesures[3].voix.basse = [noteN("ronde")];
    expect(voixActives(p)).toEqual(["soprano", "basse"]);
  });
  it("une pièce entièrement vide n'a aucune voix active", () => {
    expect(voixActives(pieceEdition())).toEqual([]);
  });
});

describe("inserer", () => {
  it("insère une note qui tient et garde le curseur sur la mesure", () => {
    const { piece, curseur } = inserer(pieceEdition(), CURSEUR0, noteN("noire"));
    expect(piece.mesures[0].voix.soprano).toHaveLength(1);
    expect(curseur).toEqual({ mesure: 0, voix: "soprano", note: "fin" });
  });
  it("quand la mesure se remplit, le curseur passe à la suivante", () => {
    let p = pieceEdition();
    let c = CURSEUR0;
    for (let i = 0; i < 4; i++) ({ piece: p, curseur: c } = inserer(p, c, noteN("noire")));
    expect(p.mesures[0].voix.soprano).toHaveLength(4);
    expect(c).toEqual({ mesure: 1, voix: "soprano", note: "fin" });
  });
  it("refuse une note trop longue pour la place restante", () => {
    let p = pieceEdition();
    let c = CURSEUR0;
    ({ piece: p, curseur: c } = inserer(p, c, noteN("blanche", 1))); // 3 temps
    const avant = p;
    const res = inserer(p, c, noteN("ronde")); // 4 temps, il n'en reste qu'un
    expect(res.piece).toBe(avant);             // inchangé
    expect(res.piece.mesures[0].voix.soprano).toHaveLength(1);
  });
  it("insérer dans l'alto ne touche pas le soprano", () => {
    let p = pieceEdition();
    ({ piece: p } = inserer(p, { mesure: 0, voix: "soprano", note: "fin" }, noteN("noire")));
    ({ piece: p } = inserer(p, { mesure: 0, voix: "alto", note: "fin" }, noteN("blanche")));
    expect(p.mesures[0].voix.soprano).toHaveLength(1);
    expect(p.mesures[0].voix.alto).toHaveLength(1);
  });
});

describe("positionEcriture — où écrit chaque voix", () => {
  it("une voix vide écrit à la première mesure", () => {
    expect(positionEcriture(pieceEdition(), "alto")).toBe(0);
  });
  it("chaque voix a sa propre position : soprano rempli n'avance pas l'alto", () => {
    // On remplit la mesure 0 au soprano (une ronde) ; l'alto, lui, reste en mesure 0.
    let p = pieceEdition();
    ({ piece: p } = inserer(p, { mesure: 0, voix: "soprano", note: "fin" }, noteN("ronde")));
    expect(positionEcriture(p, "soprano")).toBe(1); // sa mesure 0 est pleine
    expect(positionEcriture(p, "alto")).toBe(0);    // l'alto écrit toujours en mesure 0
  });
  it("saute les mesures pleines jusqu'à la première place libre", () => {
    let p = pieceEdition();
    ({ piece: p } = inserer(p, { mesure: 0, voix: "tenor", note: "fin" }, noteN("ronde")));
    ({ piece: p } = inserer(p, { mesure: 1, voix: "tenor", note: "fin" }, noteN("ronde")));
    expect(positionEcriture(p, "tenor")).toBe(2);
  });
  it("toutes les mesures pleines : reste sur la dernière", () => {
    let p = pieceEdition();
    for (let i = 0; i < p.mesures.length; i++) {
      ({ piece: p } = inserer(p, { mesure: i, voix: "basse", note: "fin" }, noteN("ronde")));
    }
    expect(positionEcriture(p, "basse")).toBe(p.mesures.length - 1);
  });
});

describe("effacer", () => {
  it("retire la dernière note posée", () => {
    let p = pieceEdition();
    let c = CURSEUR0;
    ({ piece: p, curseur: c } = inserer(p, c, noteN("noire")));
    ({ piece: p, curseur: c } = inserer(p, c, noteN("noire")));
    ({ piece: p, curseur: c } = effacer(p, c));
    expect(p.mesures[0].voix.soprano).toHaveLength(1);
  });
  it("sur une mesure vide, recule et efface la dernière de la précédente", () => {
    let p = pieceEdition();
    let c = CURSEUR0;
    for (let i = 0; i < 4; i++) ({ piece: p, curseur: c } = inserer(p, c, noteN("noire")));
    // c est sur la mesure 1 (vide) ; effacer doit revenir à la mesure 0 et retirer une note.
    ({ piece: p, curseur: c } = effacer(p, c));
    expect(c.mesure).toBe(0);
    expect(p.mesures[0].voix.soprano).toHaveLength(3);
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
    const score = parseMusicXML(pieceVersMusicXML(p));
    const haut = score.notes.filter((x) => x.midi >= 72 && x.onset < 4 * TPQ).sort((a, b) => a.onset - b.onset);
    expect(haut.map((x) => x.onset)).toEqual([0, TPQ, 2 * TPQ, 3 * TPQ]);
  });
});
