/**
 * Tests de l'EXPORT du squelette vers une `Piece` (chargée ensuite par l'atelier).
 */

import { describe, it, expect } from "vitest";
import { midiDeHauteur } from "./piece-model";
import { pieceVersMusicXML } from "./piece-vers-musicxml";
import { parseMusicXML } from "./musicxml-parse";
import type { VoicedMeasure } from "./voicing-ecole";
import type { Tonalite } from "./squelette-model";
import { squeletteVersPiece } from "./squelette-vers-piece";

const DO: VoicedMeasure = { bass: 48, tenor: 55, alto: 64, soprano: 72 };
const SOL: VoicedMeasure = { bass: 43, tenor: 59, alto: 62, soprano: 67 };
const DO_MAJEUR: Tonalite = { tonicPc: 0, mode: "major", keySignature: "C" };

describe("squeletteVersPiece", () => {
  it("produit une Piece à 4 voix : ronde pour 1 accord, deux blanches pour 2", () => {
    const piece = squeletteVersPiece([[DO], [DO, SOL]], DO_MAJEUR);
    expect(piece.armure).toBe(0);
    expect(piece.mode).toBe("major");
    expect(piece.chiffrage).toEqual({ temps: 4, unite: 4 });
    expect(piece.mesures).toHaveLength(2);

    // Mesure 0 : une ronde par voix, aux bonnes hauteurs.
    const m0 = piece.mesures[0];
    for (const v of ["soprano", "alto", "tenor", "basse"] as const) {
      expect(m0.voix[v]).toHaveLength(1);
      const ev = m0.voix[v][0];
      expect(ev.type).toBe("note");
      expect(ev.duree.base).toBe("ronde");
    }
    const noteDe = (v: "soprano" | "alto" | "tenor" | "basse", i: number) => {
      const ev = m0.voix[v][i];
      if (ev.type !== "note") throw new Error("attendu une note");
      return midiDeHauteur(ev.hauteurs[0]);
    };
    expect(noteDe("soprano", 0)).toBe(72);
    expect(noteDe("alto", 0)).toBe(64);
    expect(noteDe("tenor", 0)).toBe(55);
    expect(noteDe("basse", 0)).toBe(48);

    // Mesure 1 : deux blanches par voix.
    const m1 = piece.mesures[1];
    for (const v of ["soprano", "alto", "tenor", "basse"] as const) {
      expect(m1.voix[v]).toHaveLength(2);
      for (const ev of m1.voix[v]) {
        expect(ev.type).toBe("note");
        expect(ev.duree.base).toBe("blanche");
      }
    }
  });

  it("mesure vide → voix vides (l'atelier gravera les silences)", () => {
    const piece = squeletteVersPiece([[]], DO_MAJEUR);
    const m = piece.mesures[0];
    for (const v of ["soprano", "alto", "tenor", "basse"] as const) {
      expect(m.voix[v]).toHaveLength(0);
    }
  });

  it("round-trip via pieceVersMusicXML : les hauteurs sont cohérentes", () => {
    const piece = squeletteVersPiece([[DO], [DO, SOL]], DO_MAJEUR);
    const notes = parseMusicXML(pieceVersMusicXML(piece)).notes;
    const numsMesure = [...new Set(notes.map((n) => n.measure))].sort((a, b) => a - b);
    expect(numsMesure).toHaveLength(2);

    // 1re mesure : une ronde par voix → 4 notes (Do majeur).
    const m0 = notes.filter((n) => n.measure === numsMesure[0]);
    expect(m0).toHaveLength(4);
    expect(m0.map((n) => n.midi).sort((a, b) => a - b)).toEqual([48, 55, 64, 72]);

    // 2e mesure : deux blanches par voix → 8 notes, groupées par attaque.
    const m1 = notes.filter((n) => n.measure === numsMesure[1]);
    expect(m1).toHaveLength(8);
    const parOnset = new Map<number, number[]>();
    for (const n of m1) parOnset.set(n.onset, [...(parOnset.get(n.onset) ?? []), n.midi]);
    const onsets = [...parOnset.keys()].sort((a, b) => a - b);
    expect(onsets).toHaveLength(2);
    expect((parOnset.get(onsets[0]) ?? []).sort((a, b) => a - b)).toEqual([48, 55, 64, 72]);
    expect((parOnset.get(onsets[1]) ?? []).sort((a, b) => a - b)).toEqual([43, 59, 62, 67]);
  });

  it("tonalité à bémols : les touches noires sont épelées en bémol", () => {
    // Soprano Mib4 (pc 3) en Réb majeur → Mib (E♭), pas Ré♯.
    const mesure: VoicedMeasure = { bass: 49, tenor: 56, alto: 65, soprano: 63 };
    const REB: Tonalite = { tonicPc: 1, mode: "major", keySignature: "Db" };
    const piece = squeletteVersPiece([[mesure]], REB);
    expect(piece.armure).toBe(-5);
    const ev = piece.mesures[0].voix.soprano[0];
    if (ev.type !== "note") throw new Error("attendu une note");
    expect(ev.hauteurs[0].lettre).toBe("E");
    expect(ev.hauteurs[0].alteration).toBe(-1);
  });
});
