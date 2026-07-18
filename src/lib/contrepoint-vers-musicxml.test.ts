/**
 * Tests du graveur 1-2 voix pour le contrepoint (cours 43).
 * Contrat visé :
 *  - 1 ou 2 voix, UNE VOIX PAR PORTÉE (clé au choix), séparées par <backup> ;
 *  - AUCUN silence parasite (jamais de <rest>) — la raison d'être du module ;
 *  - rondes/blanches et liaisons de tenue (retards) ;
 *  - roundtrip par parseMusicXML : hauteurs exactes, XML bien formé.
 */

import { describe, it, expect } from "vitest";
import { contrepointVersMusicXML, type CpVoix } from "./contrepoint-vers-musicxml";
import { parseMusicXML } from "./musicxml-parse";

describe("contrepointVersMusicXML — 1-2 voix sans silence parasite", () => {
  it("(a) note contre note à 2 voix : 2 portées, backup, AUCUN silence, hauteurs exactes", () => {
    // 1re espèce (fragment) : dessus Ré5-La4-Sol4 / cantus Ré4-Fa4-Mi4, en rondes.
    const dessus: CpVoix = {
      clef: "sol",
      notes: [
        { name: "D", octave: 5, duree: "whole" },
        { name: "A", octave: 4, duree: "whole" },
        { name: "G", octave: 4, duree: "whole" },
      ],
    };
    const cantus: CpVoix = {
      clef: "sol",
      notes: [
        { name: "D", octave: 4, duree: "whole" },
        { name: "F", octave: 4, duree: "whole" },
        { name: "E", octave: 4, duree: "whole" },
      ],
    };
    const xml = contrepointVersMusicXML([dessus, cantus]);

    // Deux portées, deux clés, un seul <attributes> (mesure 1).
    expect(xml).toContain("<staves>2</staves>");
    expect((xml.match(/<clef /g) ?? []).length).toBe(2);
    expect((xml.match(/<attributes>/g) ?? []).length).toBe(1);
    // Voix séparées par un backup (2 voix × 3 mesures → 3 backups).
    expect((xml.match(/<backup>/g) ?? []).length).toBe(3);
    // AUCUN silence parasite.
    expect(xml).not.toContain("<rest");
    // Bien formé + roundtrip des hauteurs.
    expect(xml.startsWith("<?xml")).toBe(true);
    const parsed = parseMusicXML(xml);
    expect((xml.match(/<measure number=/g) ?? []).length).toBe(3);
    // Ré5=74 La4=69 Sol4=67 / Ré4=62 Fa4=65 Mi4=64
    expect(parsed.notes.map((n) => n.midi).sort((a, b) => a - b)).toEqual([62, 64, 65, 67, 69, 74]);
    expect(parsed.fifths).toBe(0);
  });

  it("(b) fleuri : blanches au dessus, tenue liée au grave — liaisons et pas de silence", () => {
    // Contre Ré4 tenu (ronde liée par-dessus la barre), 4 minimes Ré5-Do5-Si4-La4.
    const dessus: CpVoix = {
      clef: "sol",
      notes: [
        { name: "D", octave: 5, duree: "half" },
        { name: "C", octave: 5, duree: "half" },
        { name: "B", octave: 4, duree: "half" },
        { name: "A", octave: 4, duree: "half" },
      ],
    };
    const cantus: CpVoix = {
      clef: "sol",
      notes: [
        { name: "D", octave: 4, duree: "whole", lie: true },
        { name: "D", octave: 4, duree: "whole" },
      ],
    };
    const xml = contrepointVersMusicXML([dessus, cantus]);

    expect(xml).not.toContain("<rest");
    expect(xml).toContain('<tie type="start"/>');
    expect(xml).toContain('<tie type="stop"/>');
    expect(xml).toContain('<tied type="start"/>');
    // Deux mesures de 4/4 (4 blanches = 2 mesures ; le cantus s'aligne).
    expect((xml.match(/<measure number=/g) ?? []).length).toBe(2);

    const parsed = parseMusicXML(xml);
    // Les deux Ré4 liés fusionnent en UNE note tenue : 4 (dessus) + 1 (grave) = 5.
    expect(parsed.notes).toHaveLength(5);
    // Ré5=74 Do5=72 Si4=71 La4=69 Ré4=62
    expect(parsed.notes.map((n) => n.midi).sort((a, b) => a - b)).toEqual([62, 69, 71, 72, 74]);
  });

  it("(c) une seule voix : UNE portée, aucun backup, aucun silence", () => {
    const cantus: CpVoix = {
      clef: "sol",
      notes: [
        { name: "D", octave: 4, duree: "whole" },
        { name: "F", octave: 4, duree: "whole" },
        { name: "E", octave: 4, duree: "whole" },
        { name: "D", octave: 4, duree: "whole" },
      ],
    };
    const xml = contrepointVersMusicXML([cantus]);
    expect(xml).toContain("<staves>1</staves>");
    expect((xml.match(/<clef /g) ?? []).length).toBe(1);
    expect(xml).not.toContain("<backup>");
    expect(xml).not.toContain("<rest");
    const parsed = parseMusicXML(xml);
    expect(parsed.notes.map((n) => n.midi)).toEqual([62, 65, 64, 62]);
  });

  it("(d) modal (sans armure) : la sensible ficta Do#5 reçoit une altération écrite", () => {
    const dessus: CpVoix = {
      clef: "sol",
      notes: [{ name: "C#", octave: 5, duree: "whole" }, { name: "D", octave: 5, duree: "whole" }],
    };
    const cantus: CpVoix = {
      clef: "sol",
      notes: [{ name: "E", octave: 4, duree: "whole" }, { name: "D", octave: 4, duree: "whole" }],
    };
    const xml = contrepointVersMusicXML([dessus, cantus]);
    expect(xml).toContain("<fifths>0</fifths>");
    expect(xml).toContain("<alter>1</alter>");
    expect(xml).toContain("<accidental>sharp</accidental>");
    const parsed = parseMusicXML(xml);
    // Do#5 = 73
    expect(parsed.notes.map((n) => n.midi)).toContain(73);
  });

  it("(e) clé de fa possible et distincte par voix", () => {
    const haut: CpVoix = { clef: "sol", notes: [{ name: "G", octave: 4, duree: "whole" }] };
    const bas: CpVoix = { clef: "fa", notes: [{ name: "C", octave: 3, duree: "whole" }] };
    const xml = contrepointVersMusicXML([haut, bas]);
    expect(xml).toContain('<clef number="1"><sign>G</sign><line>2</line></clef>');
    expect(xml).toContain('<clef number="2"><sign>F</sign><line>4</line></clef>');
    expect(xml).not.toContain("<rest");
  });
});
