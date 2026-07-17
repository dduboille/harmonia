/**
 * Tests du convertisseur état-éditeur SATB → MusicXML grand staff.
 * Écrits AVANT l'implémentation (TDD). Le contrat visé :
 *  - une PARTIE, DEUX portées (S+A en clé de Sol, T+B en clé de Fa) ;
 *  - quatre voix en rondes, séparées par des <backup> ;
 *  - armure gravée (showKeySignature) ou altérations écrites sur chaque note.
 * Le roundtrip est vérifié par parseMusicXML (le lecteur MusicXML du projet).
 */

import { describe, it, expect } from "vitest";
import { satbVersMusicXML } from "./satb-vers-musicxml";
import { parseMusicXML } from "./musicxml-parse";
import type { Measure } from "./satb-rules";

/** Fabrique une mesure à partir des quatre hauteurs (bass, tenor, alto, soprano). */
function mesure(
  bass: [string, number] | null,
  tenor: [string, number] | null,
  alto: [string, number] | null,
  soprano: [string, number] | null,
): Measure {
  const e = (h: [string, number] | null) =>
    h === null ? { name: null, octave: 0 } : { name: h[0] as Measure["bass"]["name"], octave: h[1] };
  return { bass: e(bass), tenor: e(tenor), alto: e(alto), soprano: e(soprano) };
}

describe("satbVersMusicXML — structure grand staff", () => {
  it("(a) Do majeur C3/C4/E4/G4 : 1 partie, 2 portées, 4 rondes, divisions cohérentes", () => {
    const xml = satbVersMusicXML(
      [mesure(["C", 3], ["C", 4], ["E", 4], ["G", 4])],
      "C",
      true,
    );
    // Une seule partie, deux portées, deux clés.
    expect((xml.match(/<part id=/g) ?? []).length).toBe(1);
    expect(xml).toContain("<staves>2</staves>");
    expect(xml).toContain("<clef number=\"1\"><sign>G</sign><line>2</line></clef>");
    expect(xml).toContain("<clef number=\"2\"><sign>F</sign><line>4</line></clef>");
    expect(xml).toContain("<divisions>");
    // Quatre rondes, une par voix.
    expect((xml.match(/<type>whole<\/type>/g) ?? []).length).toBe(4);
    // Les quatre numéros de voix : S+A staff 1 (1/2), T+B staff 2 (5/6).
    expect(xml).toContain("<voice>1</voice>");
    expect(xml).toContain("<voice>2</voice>");
    expect(xml).toContain("<voice>5</voice>");
    expect(xml).toContain("<voice>6</voice>");
    // Roundtrip : parseMusicXML retrouve les quatre hauteurs.
    const parsed = parseMusicXML(xml);
    expect(parsed.notes.map((n) => n.midi).sort((a, b) => a - b)).toEqual([48, 60, 64, 67]);
    expect(parsed.fifths).toBe(0);
  });

  it("(b) armure Ré majeur gravée : <fifths>2</fifths> et AUCUNE altération accidentelle sur les notes en armure", () => {
    const xml = satbVersMusicXML(
      [mesure(["D", 3], ["A", 3], ["D", 4], ["F#", 4])],
      "D",
      true,
    );
    expect(xml).toContain("<fifths>2</fifths>");
    // F# est dans l'armure → pas d'<accidental> affiché.
    expect(xml).not.toContain("<accidental>");
    // La hauteur reste correcte (F#4 = 66).
    const parsed = parseMusicXML(xml);
    expect(parsed.notes.map((n) => n.midi)).toContain(66);
  });

  it("(c) Ré majeur SANS armure : <fifths>0</fifths> et altérations écrites sur chaque F#/C#", () => {
    const xml = satbVersMusicXML(
      [mesure(["D", 3], ["A", 3], ["C#", 4], ["F#", 4])],
      "D",
      false,
    );
    expect(xml).toContain("<fifths>0</fifths>");
    expect(xml).toContain("<alter>1</alter>");
    expect(xml).toContain("<accidental>sharp</accidental>");
    const parsed = parseMusicXML(xml);
    expect(parsed.notes.map((n) => n.midi).sort((a, b) => a - b)).toEqual([50, 57, 61, 66]);
  });

  it("(d) tonalité mineure Bm : armure du relatif majeur (<fifths>2</fifths>)", () => {
    const xml = satbVersMusicXML([mesure(["B", 2], ["F#", 3], ["B", 3], ["D", 4])], "Bm", true);
    expect(xml).toContain("<fifths>2</fifths>");
  });

  it("(e) case vide (name null) → silence de ronde dans la voix concernée", () => {
    const xml = satbVersMusicXML([mesure(["C", 3], null, ["E", 4], ["G", 4])], "C", true);
    expect(xml).toContain("<rest/>");
    // Trois notes réelles restantes.
    const parsed = parseMusicXML(xml);
    expect(parsed.notes).toHaveLength(3);
  });

  it("(f) doubles altérations : ## → alter 2 / double-sharp ; bb → alter -2 / flat-flat", () => {
    const xml = satbVersMusicXML([mesure(["F##", 3], ["G", 3], ["B", 3], ["Gbb", 4])], "C", false);
    expect(xml).toContain("<alter>2</alter>");
    expect(xml).toContain("<accidental>double-sharp</accidental>");
    expect(xml).toContain("<alter>-2</alter>");
    expect(xml).toContain("<accidental>flat-flat</accidental>");
  });

  it("(g) XML bien formé : en-tête score-partwise, part-list, une mesure par mesure d'exercice", () => {
    const xml = satbVersMusicXML(
      [mesure(["C", 3], ["C", 4], ["E", 4], ["G", 4]), mesure(["G", 2], ["B", 3], ["D", 4], ["G", 4])],
      "C",
      true,
    );
    expect(xml.startsWith("<?xml")).toBe(true);
    expect(xml).toContain("<score-partwise");
    expect(xml).toContain("<part-list>");
    expect((xml.match(/<measure number=/g) ?? []).length).toBe(2);
    // L'attributs (clés, armure) n'est émis QUE sur la première mesure.
    expect((xml.match(/<attributes>/g) ?? []).length).toBe(1);
    const parsed = parseMusicXML(xml);
    expect(parsed.measures).toHaveLength(2);
    expect(parsed.notes).toHaveLength(8);
  });
});
