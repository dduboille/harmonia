/**
 * Tests du convertisseur mélodie + réalisation SATB → MusicXML (composition guidée).
 * Écrits AVANT l'implémentation (TDD). Le contrat visé :
 *  - mélodie SEULE → UNE portée (clé de Sol), la mélodie au rythme réel ;
 *  - mélodie + accompagnement → DEUX portées (S+A en Sol, T+B en Fa), les voix
 *    d'accompagnement en accords-blocs (une ou deux par mesure) alignés aux mesures ;
 *  - armure gravée, chiffrage de l'exercice, une mesure d'exercice = une mesure gravée.
 * Roundtrip vérifié par parseMusicXML (le lecteur MusicXML du projet).
 */

import { describe, it, expect } from "vitest";
import {
  compositionGuideeVersMusicXML,
  type AccompagnementSegment,
} from "./composition-guidee-vers-musicxml";
import { parseMusicXML } from "./musicxml-parse";
import type { MelodyNote } from "@/types/composition";

// Une mesure de Do majeur : C4 E4 G4 E4 (quatre noires).
const M1: MelodyNote[] = [
  { note: "C", octave: 4, duration: "quarter" },
  { note: "E", octave: 4, duration: "quarter" },
  { note: "G", octave: 4, duration: "quarter" },
  { note: "E", octave: 4, duration: "quarter" },
];

describe("compositionGuideeVersMusicXML — mélodie seule", () => {
  it("(a) une seule portée (clé de Sol), pas de <staves>, quatre noires", () => {
    const xml = compositionGuideeVersMusicXML(M1, null, {
      keySignature: "C",
      timeSignature: "4/4",
      measures: 1,
    });
    expect((xml.match(/<part id=/g) ?? []).length).toBe(1);
    expect(xml).not.toContain("<staves>");
    expect(xml).toContain('<clef><sign>G</sign><line>2</line></clef>');
    expect((xml.match(/<type>quarter<\/type>/g) ?? []).length).toBe(4);
    expect(xml).toContain("<beats>4</beats>");
    const parsed = parseMusicXML(xml);
    expect(parsed.notes.map((n) => n.midi)).toEqual([60, 64, 67, 64]);
  });

  it("(b) durées mêlées (blanche, croche) → types MusicXML corrects", () => {
    const melody: MelodyNote[] = [
      { note: "F", octave: 4, duration: "quarter" },
      { note: "A", octave: 4, duration: "quarter" },
      { note: "G", octave: 4, duration: "half" },
    ];
    const xml = compositionGuideeVersMusicXML(melody, null, {
      keySignature: "C",
      timeSignature: "4/4",
      measures: 1,
    });
    expect(xml).toContain("<type>half</type>");
    expect((xml.match(/<type>quarter<\/type>/g) ?? []).length).toBe(2);
  });

  it("(c) armure Sol majeur gravée : <fifths>1</fifths> et F# sans altération accidentelle", () => {
    const melody: MelodyNote[] = [
      { note: "G", octave: 4, duration: "quarter" },
      { note: "F#", octave: 4, duration: "quarter" },
      { note: "G", octave: 4, duration: "half" },
    ];
    const xml = compositionGuideeVersMusicXML(melody, null, {
      keySignature: "G",
      timeSignature: "4/4",
      measures: 1,
    });
    expect(xml).toContain("<fifths>1</fifths>");
    expect(xml).not.toContain("<accidental>");
    const parsed = parseMusicXML(xml);
    expect(parsed.notes.map((n) => n.midi)).toContain(66); // F#4
  });

  it("(d) chiffrage 3/4 : <beats>3</beats>", () => {
    const melody: MelodyNote[] = [
      { note: "C", octave: 4, duration: "quarter" },
      { note: "E", octave: 4, duration: "quarter" },
      { note: "G", octave: 4, duration: "quarter" },
    ];
    const xml = compositionGuideeVersMusicXML(melody, null, {
      keySignature: "C",
      timeSignature: "3/4",
      measures: 1,
    });
    expect(xml).toContain("<beats>3</beats>");
  });
});

describe("compositionGuideeVersMusicXML — mélodie + réalisation SATB", () => {
  // Un accord unique sur la mesure : C majeur (bass C3=48, tenor G3=55, alto E4=64).
  const unAccord: AccompagnementSegment[] = [
    { mesure: 0, debutBeats: 0, dureeBeats: 4, alto: 64, tenor: 55, bass: 48 },
  ];

  it("(e) deux portées, deux clés, alto sur portée 1, ténor/basse sur portée 2", () => {
    const xml = compositionGuideeVersMusicXML(M1, unAccord, {
      keySignature: "C",
      timeSignature: "4/4",
      measures: 1,
    });
    expect(xml).toContain("<staves>2</staves>");
    expect(xml).toContain('<clef number="1"><sign>G</sign><line>2</line></clef>');
    expect(xml).toContain('<clef number="2"><sign>F</sign><line>4</line></clef>');
    // La mélodie (soprano) + l'accord bloc (alto/ténor/basse).
    const parsed = parseMusicXML(xml);
    const midis = parsed.notes.map((n) => n.midi).sort((a, b) => a - b);
    expect(midis).toContain(48); // basse C3
    expect(midis).toContain(55); // ténor G3
    expect(midis).toContain(64); // alto E4 (et note de la mélodie)
  });

  it("(f) accord unique → ronde dans les voix d'accompagnement (whole)", () => {
    const xml = compositionGuideeVersMusicXML(M1, unAccord, {
      keySignature: "C",
      timeSignature: "4/4",
      measures: 1,
    });
    // Trois rondes d'accompagnement (alto, ténor, basse).
    expect((xml.match(/<type>whole<\/type>/g) ?? []).length).toBe(3);
  });

  it("(g) deux accords par mesure → blanches (half) dans les voix d'accompagnement", () => {
    const deuxAccords: AccompagnementSegment[] = [
      { mesure: 0, debutBeats: 0, dureeBeats: 2, alto: 64, tenor: 55, bass: 48 },
      { mesure: 0, debutBeats: 2, dureeBeats: 2, alto: 65, tenor: 57, bass: 53 },
    ];
    const xml = compositionGuideeVersMusicXML(M1, deuxAccords, {
      keySignature: "C",
      timeSignature: "4/4",
      measures: 1,
    });
    // 6 blanches : 2 par voix d'accompagnement × 3 voix.
    expect((xml.match(/<type>half<\/type>/g) ?? []).length).toBe(6);
  });

  it("(h) mesure sans accord (mode accompagnement) → silence dans les voix ATB", () => {
    const melodyDeuxMes: MelodyNote[] = [
      ...M1,
      { note: "C", octave: 4, duration: "whole" }, // M2, pas d'accord
    ];
    const xml = compositionGuideeVersMusicXML(melodyDeuxMes, unAccord, {
      keySignature: "C",
      timeSignature: "4/4",
      measures: 2,
    });
    expect(xml).toContain("<rest");
    expect((xml.match(/<measure number=/g) ?? []).length).toBe(2);
  });

  it("(i) XML bien formé : en-tête, part-list, attributs sur la 1re mesure seulement", () => {
    const xml = compositionGuideeVersMusicXML(M1, unAccord, {
      keySignature: "C",
      timeSignature: "4/4",
      measures: 1,
    });
    expect(xml.startsWith("<?xml")).toBe(true);
    expect(xml).toContain("<score-partwise");
    expect(xml).toContain("<part-list>");
    expect((xml.match(/<attributes>/g) ?? []).length).toBe(1);
  });
});

describe("compositionGuideeVersMusicXML — revue phase ② (robustesse & épellation)", () => {
  it("(F5-a) mesure finale sous-remplie : le <backup> reste valide, un silence rembourre, l'accord tombe au bon instant", () => {
    // M1 pleine (4 noires), M2 ne porte que 3 noires (3/4 des 4/4 déclarés).
    const melody: MelodyNote[] = [
      ...M1,
      { note: "C", octave: 4, duration: "quarter" },
      { note: "D", octave: 4, duration: "quarter" },
      { note: "E", octave: 4, duration: "quarter" },
    ];
    const acc: AccompagnementSegment[] = [
      { mesure: 0, debutBeats: 0, dureeBeats: 4, alto: 64, tenor: 55, bass: 48 },
      { mesure: 1, debutBeats: 0, dureeBeats: 4, alto: 65, tenor: 57, bass: 53 },
    ];
    const xml = compositionGuideeVersMusicXML(melody, acc, {
      keySignature: "C",
      timeSignature: "4/4",
      measures: 2,
    });
    // Un silence de rembourrage complète la mélodie courte.
    expect(xml).toContain("<rest");
    const parsed = parseMusicXML(xml);
    expect(parsed.measures).toHaveLength(2);
    // L'accord de M2 (basse Fa2 = 53) attaque au 1er temps de la 2e mesure — preuve
    // que le <backup> n'a pas reculé le curseur en négatif (arithmétique intacte).
    const basseM2 = parsed.notes.find((n) => n.measure === 2 && n.midi === 53);
    expect(basseM2).toBeDefined();
    expect(basseM2!.beat).toBe(1);
  });

  it("(F5-b) tonalité mineure Cm : armure du relatif majeur (<fifths>-3</fifths>)", () => {
    const xml = compositionGuideeVersMusicXML(M1, null, {
      keySignature: "Cm",
      timeSignature: "4/4",
      measures: 1,
    });
    expect(xml).toContain("<fifths>-3</fifths>");
  });

  it("(F5-c) armure bémol (Fa majeur) : l'accompagnement MIDI 70 s'épelle Sib (B/-1), jamais La# (A/+1)", () => {
    const acc: AccompagnementSegment[] = [
      { mesure: 0, debutBeats: 0, dureeBeats: 4, alto: 70, tenor: 57, bass: 53 },
    ];
    const xml = compositionGuideeVersMusicXML(M1, acc, {
      keySignature: "F",
      timeSignature: "4/4",
      measures: 1,
    });
    expect(xml).toContain("<step>B</step><alter>-1</alter>");
    expect(xml).not.toContain("<step>A</step><alter>1</alter>");
    // Sib est dans l'armure de Fa → aucune altération accidentelle affichée pour lui.
    const parsed = parseMusicXML(xml);
    expect(parsed.notes.map((n) => n.midi)).toContain(70);
  });

  it("(F5-c bis) tonalité neutre (Do majeur) : un emprunt bVI s'épelle Lab/Mib (bémols), pas Sol#/Ré#", () => {
    // Accord de Lab majeur (bVI en Do) : basse Lab2=44, ténor Mib3=51, alto Do4=60.
    const acc: AccompagnementSegment[] = [
      { mesure: 0, debutBeats: 0, dureeBeats: 4, alto: 60, tenor: 51, bass: 44 },
    ];
    const xml = compositionGuideeVersMusicXML(M1, acc, {
      keySignature: "C",
      timeSignature: "4/4",
      measures: 1,
    });
    expect(xml).toContain("<step>A</step><alter>-1</alter>"); // Lab
    expect(xml).toContain("<step>E</step><alter>-1</alter>"); // Mib
    expect(xml).not.toContain("<step>G</step><alter>1</alter>"); // pas de Sol#
    expect(xml).not.toContain("<step>D</step><alter>1</alter>"); // pas de Ré#
  });

  it("(F5-d) 3/4, un accord par mesure : la ronde-pointée remplit la mesure et l'accompagnement somme à la capacité", () => {
    const melody: MelodyNote[] = [
      { note: "C", octave: 4, duration: "quarter" },
      { note: "E", octave: 4, duration: "quarter" },
      { note: "G", octave: 4, duration: "quarter" },
    ];
    const acc: AccompagnementSegment[] = [
      { mesure: 0, debutBeats: 0, dureeBeats: 3, alto: 64, tenor: 55, bass: 48 },
    ];
    const xml = compositionGuideeVersMusicXML(melody, acc, {
      keySignature: "C",
      timeSignature: "3/4",
      measures: 1,
    });
    // Trois blanches pointées (alto, ténor, basse) — une note pointée par voix.
    expect((xml.match(/<type>half<\/type><dot\/>/g) ?? []).length).toBe(3);
    expect((xml.match(/<dot\/>/g) ?? []).length).toBe(3);
    // La mesure fait bien 3 temps (3 noires) : la capacité est remplie sans débordement.
    const parsed = parseMusicXML(xml);
    expect(parsed.measures[0].length).toBe(3 * 768);
  });
});
