import { describe, it, expect } from "vitest";
import { toniqueDe, analyserPartition } from "./analyse-resultat";
import { parseMusicXML } from "./musicxml-parse";
import { pieceVersMusicXML } from "./piece-vers-musicxml";
import type { Piece, Note, NomVoix, Voix } from "./piece-model";

// ── Fabrique de MusicXML (même écriture que analyse-pipeline.test.ts) ─────────

/** Une note : lettre, altération, octave, durée en noires. */
type N = [step: string, alter: number, octave: number, duree: number];

function note([step, alter, octave, duree]: N, voice: string): string {
  const alt = alter === 0 ? "" : `<alter>${alter}</alter>`;
  return (
    `<note><pitch><step>${step}</step>${alt}<octave>${octave}</octave></pitch>` +
    `<duration>${duree}</duration><voice>${voice}</voice></note>`
  );
}

/** Une mesure à deux voix, séparées par le <backup> — l'écriture réelle. */
function mesure(numero: number, haut: N[], bas: N[], attributs = ""): string {
  const duree = haut.reduce((t, n) => t + n[3], 0);
  return (
    `<measure number="${numero}">${attributs}` +
    haut.map((n) => note(n, "1")).join("") +
    `<backup><duration>${duree}</duration></backup>` +
    bas.map((n) => note(n, "2")).join("") +
    `</measure>`
  );
}

function attrs(fifths: number, mode: "major" | "minor"): string {
  return (
    `<attributes><divisions>1</divisions><key><fifths>${fifths}</fifths><mode>${mode}</mode></key>` +
    `<time><beats>4</beats><beat-type>4</beat-type></time></attributes>`
  );
}

function partition(fifths: number, mode: "major" | "minor", p1: string, p2: string): string {
  return (
    `<score-partwise><part-list><score-part id="P1"/><score-part id="P2"/></part-list>` +
    `<part id="P1">${p1}</part><part id="P2">${p2}</part></score-partwise>`
  );
}

describe("toniqueDe — la tonique d'une armure et d'un mode", () => {
  it("majeur : l'armure donne directement la tonique", () => {
    expect(toniqueDe(0, "major")).toBe(0);   // Do
    expect(toniqueDe(1, "major")).toBe(7);   // Sol
    expect(toniqueDe(-1, "major")).toBe(5);  // Fa
  });
  it("mineur : le RELATIF de l'armure (bug corrigé)", () => {
    expect(toniqueDe(0, "minor")).toBe(9);   // la mineur (et non Do !)
    expect(toniqueDe(-3, "minor")).toBe(0);  // do mineur
    expect(toniqueDe(2, "minor")).toBe(11);  // si mineur
  });
});

describe("analyserPartition — l'orchestration extraite de la route", () => {
  // Choral Do majeur : I | V | I — non-régression de l'extraction.
  const MAJEUR = partition(
    0, "major",
    mesure(1, [["G", 0, 4, 4]], [["E", 0, 4, 4]], attrs(0, "major")) +
      mesure(2, [["B", 0, 4, 4]], [["D", 0, 4, 4]]) +
      mesure(3, [["C", 0, 5, 4]], [["E", 0, 4, 4]]),
    mesure(1, [["C", 0, 4, 4]], [["C", 0, 3, 4]]) +
      mesure(2, [["G", 0, 3, 4]], [["G", 0, 2, 4]]) +
      mesure(3, [["G", 0, 3, 4]], [["C", 0, 3, 4]]),
  );

  it("majeur : tonalité, degrés et cadence parfaite", () => {
    const a = analyserPartition(parseMusicXML(MAJEUR), "test.xml");
    expect(a.tonalite).toBe("Do majeur");
    expect(a.fichier).toBe("test.xml");
    expect(a.nombreMesures).toBe(3);
    expect(a.mesures[0].accords[0].degreeNum).toBe(1);
    expect(a.mesures[1].accords[0].degreeNum).toBe(5);
    expect(a.mesures[2].accords[0].degreeNum).toBe(1);
    expect(a.cadences.some((c) => c.type === "parfaite" && c.measure === 3)).toBe(true);
  });

  // Choral la mineur (armure 0, mode minor) : i | V (avec sol#) | i.
  const MINEUR = partition(
    0, "minor",
    mesure(1, [["C", 0, 5, 4]], [["A", 0, 4, 4]], attrs(0, "minor")) +
      mesure(2, [["B", 0, 4, 4]], [["G", 1, 4, 4]]) +
      mesure(3, [["C", 0, 5, 4]], [["A", 0, 4, 4]]),
    mesure(1, [["E", 0, 3, 4]], [["A", 0, 2, 4]]) +
      mesure(2, [["E", 0, 3, 4]], [["E", 0, 2, 4]]) +
      mesure(3, [["E", 0, 3, 4]], [["A", 0, 2, 4]]),
  );

  it("mineur : armure 0 + minor = LA mineur, V reconnu comme dominante", () => {
    const a = analyserPartition(parseMusicXML(MINEUR), "test.xml");
    expect(a.tonalite).toBe("La mineur");
    expect(a.mode).toBe("minor");
    expect(a.mesures[0].accords[0].degreeNum).toBe(1);
    expect(a.mesures[1].accords[0].degreeNum).toBe(5);
    expect(a.mesures[1].accords[0].fonction).toBe("D");
    expect(a.cadences.some((c) => c.type === "parfaite" && c.measure === 3)).toBe(true);
  });
});

describe("aller-retour atelier : Piece → MusicXML → parse → analyse", () => {
  function ronde(lettre: Note["hauteurs"][0]["lettre"], octave: number): Note {
    return { type: "note", hauteurs: [{ lettre, alteration: 0, octave }], duree: { base: "ronde", points: 0 } };
  }
  /** Un accord SATB par mesure (rondes). */
  function choral(accords: Array<Record<NomVoix, Note>>): Piece {
    return {
      armure: 0, chiffrage: { temps: 4, unite: 4 },
      mesures: accords.map((a) => ({
        voix: {
          soprano: [a.soprano] as Voix, alto: [a.alto] as Voix,
          tenor: [a.tenor] as Voix, basse: [a.basse] as Voix,
        },
      })),
    };
  }

  it("I–IV–V–I en Do : degrés et cadence parfaite en direct", () => {
    const piece = choral([
      { soprano: ronde("G", 4), alto: ronde("E", 4), tenor: ronde("C", 4), basse: ronde("C", 3) }, // I
      { soprano: ronde("A", 4), alto: ronde("F", 4), tenor: ronde("C", 4), basse: ronde("F", 3) }, // IV
      { soprano: ronde("B", 4), alto: ronde("D", 4), tenor: ronde("G", 3), basse: ronde("G", 2) }, // V
      { soprano: ronde("C", 5), alto: ronde("E", 4), tenor: ronde("G", 3), basse: ronde("C", 3) }, // I
    ]);
    const a = analyserPartition(parseMusicXML(pieceVersMusicXML(piece)), "");
    expect(a.tonalite).toBe("Do majeur");
    expect(a.mesures.map((m) => m.accords[0]?.degreeNum)).toEqual([1, 4, 5, 1]);
    expect(a.cadences.some((c) => c.type === "parfaite" && c.measure === 4)).toBe(true);
  });
});
