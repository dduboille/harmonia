/**
 * Tests de la GRAVURE du squelette : grand staff, 1 ronde ou 2 blanches par mesure,
 * épellation au diapason de l'armure, silences pour les mesures vides.
 */

import { describe, it, expect } from "vitest";
import { parseMusicXML } from "./musicxml-parse";
import type { VoicedMeasure } from "./voicing-ecole";
import { squeletteVersMusicXML } from "./squelette-vers-musicxml";

// Do majeur : basse Do3, ténor Sol3, alto Mi4, soprano Do5.
const DO: VoicedMeasure = { bass: 48, tenor: 55, alto: 64, soprano: 72 };
// Sol majeur : basse Sol2, ténor Si3, alto Ré4, soprano Sol4.
const SOL: VoicedMeasure = { bass: 43, tenor: 59, alto: 62, soprano: 67 };

describe("squeletteVersMusicXML", () => {
  it("1 accord → 4 rondes, aux hauteurs attendues", () => {
    const xml = squeletteVersMusicXML([[DO]], "C");
    const notes = parseMusicXML(xml).notes;
    expect(notes).toHaveLength(4);
    expect(notes.map((n) => n.midi).sort((a, b) => a - b)).toEqual([48, 55, 64, 72]);
    expect((xml.match(/<type>whole<\/type>/g) ?? []).length).toBe(4);
    expect(xml).not.toContain("<type>half</type>");
  });

  it("2 accords → 2 blanches par voix, 8 notes, le 2e accord après le 1er", () => {
    const xml = squeletteVersMusicXML([[DO, SOL]], "C");
    const notes = parseMusicXML(xml).notes;
    expect(notes).toHaveLength(8);
    expect((xml.match(/<type>half<\/type>/g) ?? []).length).toBe(8);

    const premier = notes.filter((n) => n.onset === 0);
    const second = notes.filter((n) => n.onset > 0);
    expect(premier).toHaveLength(4);
    expect(second).toHaveLength(4);
    expect(premier.map((n) => n.midi).sort((a, b) => a - b)).toEqual([48, 55, 64, 72]);
    expect(second.map((n) => n.midi).sort((a, b) => a - b)).toEqual([43, 59, 62, 67]);
  });

  it("armure à bémols (Réb) : une touche noire s'épelle en bémol, pas en dièse", () => {
    // Soprano Mib4 (pc 3) : en Réb majeur, il s'écrit Mib (E♭), jamais Ré# (D♯).
    const mesure: VoicedMeasure = { bass: 49, tenor: 56, alto: 65, soprano: 63 };
    const xml = squeletteVersMusicXML([[mesure]], "Db");
    const notes = parseMusicXML(xml).notes;
    const mib = notes.find((n) => n.pc === 3)!;
    expect(mib.step).toBe("E");
    expect(mib.alter).toBe(-1);
    expect(xml).not.toMatch(/<step>D<\/step><alter>1<\/alter>/);
  });

  it("mesure vide → silences (aucune note gravée)", () => {
    const xml = squeletteVersMusicXML([[]], "C");
    expect(parseMusicXML(xml).notes).toHaveLength(0);
    expect(xml).toContain("<rest/>");
  });

  it("mélange (ronde, deux blanches, vide) : XML bien formé, bon décompte de notes", () => {
    const xml = squeletteVersMusicXML([[DO], [DO, SOL], []], "C");
    const parsed = parseMusicXML(xml);
    expect(parsed.notes).toHaveLength(4 + 8 + 0);
    expect(parsed.measures).toHaveLength(3);
  });
});
