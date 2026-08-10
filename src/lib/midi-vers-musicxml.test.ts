import { describe, it, expect } from "vitest";
import { nomsPourArmure, decoderMidi, decoderNom, armure, NOMS_NEUTRE } from "./midi-vers-musicxml";

/** MIDI de référence : Do4 = 60, donc Si3 = 59 et Mi4 = 64. */
const SI3 = 59;
const MI4 = 64;

describe("nomsPourArmure — les armures très bémolisées sont enfin atteintes", () => {
  it("mib mineur / Solb majeur (6♭) écrit Dob et Fab", () => {
    const noms = nomsPourArmure(-6);
    expect(noms[11]).toBe("Cb");
    expect(noms[4]).toBe("Fb");
  });

  it("Dob majeur (7♭) aussi", () => {
    const noms = nomsPourArmure(-7);
    expect(noms[11]).toBe("Cb");
    expect(noms[4]).toBe("Fb");
  });

  it("les armures bémolisées usuelles gardent leur orthographe d'avant", () => {
    const noms = nomsPourArmure(-3); // Mib majeur / do mineur
    expect(noms[3]).toBe("Eb");
    expect(noms[8]).toBe("Ab");
    expect(noms[10]).toBe("Bb");
    expect(noms[11]).toBe("B");     // pas de Dob en 3 bémols
  });

  it("les armures diésées restent en dièses", () => {
    const noms = nomsPourArmure(4);  // Mi majeur
    expect(noms[6]).toBe("F#");
    expect(noms[8]).toBe("G#");
    expect(noms[1]).toBe("C#");
  });

  it("Do majeur garde sa table écrite à la main, Réb compris", () => {
    expect(nomsPourArmure(0)).toEqual(NOMS_NEUTRE);
    expect(nomsPourArmure(0)[1]).toBe("Db");
  });
});

describe("decoderMidi — l'octave suit la lettre, pas la hauteur", () => {
  it("Si3 en do majeur, mais Dob4 en mib mineur — même touche", () => {
    expect(decoderMidi(SI3, nomsPourArmure(0))).toEqual({ step: "B", alter: 0, octave: 3 });
    expect(decoderMidi(SI3, nomsPourArmure(-6))).toEqual({ step: "C", alter: -1, octave: 4 });
  });

  it("Mi4 s'écrit Fab4 en mib mineur, sans glisser d'octave", () => {
    expect(decoderMidi(MI4, nomsPourArmure(-6))).toEqual({ step: "F", alter: -1, octave: 4 });
  });

  it("la hauteur gravée se relit TOUJOURS à la hauteur d'origine", () => {
    const PC = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 } as const;
    for (let f = -7; f <= 7; f++) {
      const noms = nomsPourArmure(f);
      for (let midi = 36; midi <= 84; midi++) {
        const { step, alter, octave } = decoderMidi(midi, noms);
        const relu = (octave + 1) * 12 + PC[step as keyof typeof PC] + alter;
        expect(relu, `armure=${f} midi=${midi} → ${step}${alter}/${octave}`).toBe(midi);
      }
    }
  });
});

describe("decoderNom", () => {
  it("lit lettre et altération, doubles comprises", () => {
    expect(decoderNom("F#")).toEqual({ step: "F", alter: 1 });
    expect(decoderNom("Eb")).toEqual({ step: "E", alter: -1 });
    expect(decoderNom("Cb")).toEqual({ step: "C", alter: -1 });
    expect(decoderNom("C")).toEqual({ step: "C", alter: 0 });
  });
});

describe("armure", () => {
  it("un mineur reprend l'armure de son relatif majeur", () => {
    expect(armure("Ebm").fifths).toBe(-6);
    expect(armure("Cm").fifths).toBe(-3);
    expect(armure("C").fifths).toBe(0);
    expect(armure("E").fifths).toBe(4);
  });
});
