import { describe, it, expect } from "vitest";
import { parseMusicXML, TPQ } from "./musicxml-parse";
import { pieceVersMusicXML } from "./piece-vers-musicxml";
import { pieceVierge, type Piece, type Note, type Hauteur } from "./piece-model";

/** Raccourci : une note simple. */
function n(lettre: Hauteur["lettre"], octave: number, base: Note["duree"]["base"], points: 0 | 1 | 2 = 0, extra: Partial<Note> = {}): Note {
  return { type: "note", hauteurs: [{ lettre, alteration: 0, octave }], duree: { base, points }, ...extra };
}

/** Une pièce d'une mesure : voix du haut et du bas fournies. */
function piece1(haut: Piece["mesures"][0]["portees"][0], bas: Piece["mesures"][0]["portees"][1]): Piece {
  return { armure: 0, chiffrage: { temps: 4, unite: 4 }, mesures: [{ portees: [haut, bas] }] };
}

describe("pieceVersMusicXML — aller-retour par le parseur", () => {
  it("quatre noires à la portée du haut se relisent aux bons instants", () => {
    const xml = pieceVersMusicXML(piece1(
      [n("C", 5, "noire"), n("D", 5, "noire"), n("E", 5, "noire"), n("F", 5, "noire")],
      [{ type: "silence", duree: { base: "ronde", points: 0 }, mesureEntiere: true }],
    ));
    const score = parseMusicXML(xml);
    const haut = score.notes.filter((x) => x.midi >= 71).sort((a, b) => a.onset - b.onset);
    expect(haut.map((x) => x.onset)).toEqual([0, TPQ, 2 * TPQ, 3 * TPQ]);
    expect(haut.map((x) => x.midi)).toEqual([72, 74, 76, 77]); // Do5 Ré5 Mi5 Fa5
  });

  it("la portée du bas est lue simultanément (grâce au <backup>)", () => {
    const xml = pieceVersMusicXML(piece1(
      [n("C", 5, "ronde")],
      [n("C", 3, "ronde")],
    ));
    const score = parseMusicXML(xml);
    // Do5 (72) en haut et Do3 (48) en bas, tous deux à l'instant 0.
    const a0 = score.notes.filter((x) => x.onset === 0).map((x) => x.midi).sort((a, b) => a - b);
    expect(a0).toEqual([48, 72]);
  });

  it("une noire POINTÉE dure 1,5 temps", () => {
    const xml = pieceVersMusicXML(piece1(
      [n("C", 5, "noire", 1), n("D", 5, "croche"), n("E", 5, "noire"), n("F", 5, "noire")],
      [{ type: "silence", duree: { base: "ronde", points: 0 }, mesureEntiere: true }],
    ));
    const doNote = parseMusicXML(xml).notes.find((x) => x.midi === 72)!;
    expect(doNote.duration).toBe(Math.round(1.5 * TPQ));
  });

  it("deux notes LIÉES se fondent en une seule tenue", () => {
    const xml = pieceVersMusicXML(piece1(
      [n("C", 5, "blanche", 0, { liee: true }), n("C", 5, "blanche")],
      [{ type: "silence", duree: { base: "ronde", points: 0 }, mesureEntiere: true }],
    ));
    const dos = parseMusicXML(xml).notes.filter((x) => x.midi === 72);
    expect(dos).toHaveLength(1);            // fusionnées
    expect(dos[0].duration).toBe(4 * TPQ);  // deux blanches = une ronde
  });

  it("un TRIOLET de croches occupe le temps de deux croches", () => {
    const triolet = (l: Hauteur["lettre"]): Note => ({
      type: "note", hauteurs: [{ lettre: l, alteration: 0, octave: 5 }],
      duree: { base: "croche", points: 0, nolet: { reelles: 3, normales: 2 } },
    });
    const xml = pieceVersMusicXML(piece1(
      [triolet("C"), triolet("D"), triolet("E"), n("F", 5, "noire"), n("G", 5, "noire"), n("A", 5, "noire")],
      [{ type: "silence", duree: { base: "ronde", points: 0 }, mesureEntiere: true }],
    ));
    const score = parseMusicXML(xml);
    const trio = score.notes.filter((x) => [72, 74, 76].includes(x.midi)).sort((a, b) => a.onset - b.onset);
    // Trois notes dans un temps (768) : chacune 256.
    expect(trio.map((x) => x.duration)).toEqual([256, 256, 256]);
    expect(trio[2].onset).toBe(512);
    // La note SUIVANTE (Fa) tombe bien au 2e temps.
    expect(score.notes.find((x) => x.midi === 77)!.onset).toBe(TPQ);
  });

  it("un triolet porte le CROCHET (tuplet start/stop) sur ses bornes", () => {
    const triolet = (l: Hauteur["lettre"]): Note => ({
      type: "note", hauteurs: [{ lettre: l, alteration: 0, octave: 5 }],
      duree: { base: "croche", points: 0, nolet: { reelles: 3, normales: 2 } },
    });
    const xml = pieceVersMusicXML(piece1(
      [triolet("C"), triolet("D"), triolet("E"), n("F", 5, "noire"), n("G", 5, "noire"), n("A", 5, "noire")],
      [{ type: "silence", duree: { base: "ronde", points: 0 }, mesureEntiere: true }],
    ));
    // Un seul crochet ouvert et un seul fermé pour le groupe de trois.
    expect((xml.match(/<tuplet type="start"\/>/g) ?? []).length).toBe(1);
    expect((xml.match(/<tuplet type="stop"\/>/g) ?? []).length).toBe(1);
  });

  it("un ACCORD empile ses hauteurs au même instant", () => {
    const accord: Note = {
      type: "note",
      hauteurs: [
        { lettre: "C", alteration: 0, octave: 4 },
        { lettre: "E", alteration: 0, octave: 4 },
        { lettre: "G", alteration: 0, octave: 4 },
      ],
      duree: { base: "ronde", points: 0 },
    };
    const xml = pieceVersMusicXML(piece1(
      [accord],
      [{ type: "silence", duree: { base: "ronde", points: 0 }, mesureEntiere: true }],
    ));
    const a0 = parseMusicXML(xml).notes.filter((x) => x.onset === 0).map((x) => x.midi).sort((a, b) => a - b);
    expect(a0).toEqual([60, 64, 67]); // Do-Mi-Sol
  });

  it("une altération est conservée (Fa# se relit en Fa#)", () => {
    const faDiese: Note = {
      type: "note", hauteurs: [{ lettre: "F", alteration: 1, octave: 5 }], duree: { base: "ronde", points: 0 },
    };
    const xml = pieceVersMusicXML(piece1(
      [faDiese],
      [{ type: "silence", duree: { base: "ronde", points: 0 }, mesureEntiere: true }],
    ));
    const note = parseMusicXML(xml).notes.find((x) => x.onset === 0 && x.midi > 60)!;
    expect(note.step).toBe("F");
    expect(note.alter).toBe(1);
  });
});

describe("pieceVersMusicXML — la pièce vierge", () => {
  it("produit un MusicXML de 8 mesures relisible", () => {
    const score = parseMusicXML(pieceVersMusicXML(pieceVierge()));
    expect(score.measures).toHaveLength(8);
    expect(score.fifths).toBe(0);
    expect(score.signature).toBe("4/4");
  });
});
