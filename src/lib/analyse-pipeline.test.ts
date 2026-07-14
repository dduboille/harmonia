/**
 * Test d'intégration de la chaîne complète : MusicXML → notes → tranches → accords.
 *
 * Les tests unitaires des trois modules ne prouvent rien de ce qui compte ici :
 * qu'un CHORAL À QUATRE VOIX, écrit comme un exportateur l'écrit vraiment (deux
 * portées, deux voix par portée, séparées par des <backup>), ressorte avec les bons
 * accords verticaux. C'est exactement ce que l'ancien parseur ne savait pas faire :
 * il sérialisait les voix au lieu de les superposer.
 */

import { describe, it, expect } from "vitest";
import { parseMusicXML, noteNameFr } from "./musicxml-parse";
import { sliceByBeat, mergeSlices, type Slice } from "./harmony-segmentation";
import {
  identifyChordFromNotes,
  analyzeChord,
  annotateResolutions,
  type ChordResult,
} from "./harmonic-analysis";

// ── Fabrique de MusicXML ──────────────────────────────────────────────────────

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

const ATTRS =
  `<attributes><divisions>1</divisions><key><fifths>0</fifths><mode>major</mode></key>` +
  `<time><beats>4</beats><beat-type>4</beat-type></time></attributes>`;

/**
 * Choral en Do majeur, quatre voix réelles sur deux portées.
 *
 *   temps    1        2        3        4     ‖    1        2-3-4
 *   S       Do5      Sol4     Mi5      Fa#4   ‖   Ré5      Do5 (tenu)
 *   A       Mi4      Ré4      Mi4      Do4    ‖   Si4      Mi4 (tenu)
 *   T       Sol3     Fa3      Sol3     La3    ‖   Sol3     Sol3 (tenu)
 *   B       Do3      Si2      Do3      Ré3    ‖   Sol2     Do3 (tenu)
 *           I       V6/5      I       V7/V    ‖    V         I
 *
 * Y sont réunis tout ce que le sous-projet devait débloquer : un RENVERSEMENT
 * (le V6/5, dont la basse est la sensible), une TONICISATION (le V7/V, avec son
 * Fa#), une BASSE TENUE sous des voix immobiles (le Do final, en blanche pointée),
 * et une CADENCE PARFAITE.
 */
const CHORAL =
  `<score-partwise><part-list><score-part id="P1"/><score-part id="P2"/></part-list>` +
  `<part id="P1">` +
  mesure(
    1,
    [["C", 0, 5, 1], ["G", 0, 4, 1], ["E", 0, 5, 1], ["F", 1, 4, 1]],
    [["E", 0, 4, 1], ["D", 0, 4, 1], ["E", 0, 4, 1], ["C", 0, 4, 1]],
    ATTRS,
  ) +
  mesure(2, [["D", 0, 5, 1], ["C", 0, 5, 3]], [["B", 0, 4, 1], ["E", 0, 4, 3]]) +
  `</part>` +
  `<part id="P2">` +
  mesure(
    1,
    [["G", 0, 3, 1], ["F", 0, 3, 1], ["G", 0, 3, 1], ["A", 0, 3, 1]],
    [["C", 0, 3, 1], ["B", 0, 2, 1], ["C", 0, 3, 1], ["D", 0, 3, 1]],
    ATTRS,
  ) +
  mesure(2, [["G", 0, 3, 1], ["G", 0, 3, 3]], [["G", 0, 2, 1], ["C", 0, 3, 3]]) +
  `</part></score-partwise>`;

// ── La chaîne, telle que la route l'assemble ─────────────────────────────────

interface Analyse {
  mesure: number;
  temps: number;
  degre: string;
  fonction: string;
  basse: string;
}

function analyser(xml: string, tonicPc: number): Analyse[] {
  const score = parseMusicXML(xml);

  const identite = (s: Slice): string => {
    const c = identifyChordFromNotes(s.pcs, s.bass.pc);
    return c ? `${c.rootPc}:${c.quality}:${s.bass.pc}` : "";
  };

  const sorties: Array<{ result: ChordResult; slice: Slice }> = [];
  for (const s of mergeSlices(sliceByBeat(score), identite)) {
    const chord = identifyChordFromNotes(s.pcs, s.bass.pc);
    if (!chord) continue;
    chord.spelled = s.notes.map((n) => ({ step: n.step, alter: n.alter, pc: n.pc }));
    const result = analyzeChord(chord, tonicPc, score.mode);
    result.bassFr = noteNameFr(s.bass.step, s.bass.alter);
    sorties.push({ result, slice: s });
  }

  annotateResolutions(sorties.map((x) => x.result), tonicPc, score.mode);

  return sorties.map(({ result, slice }) => ({
    mesure: slice.measure,
    temps: slice.beat,
    degre: result.degree,
    fonction: result.fonction,
    basse: result.bassFr ?? "?",
  }));
}

// ── Le contrôle ───────────────────────────────────────────────────────────────

describe("chaîne complète — un choral à quatre voix", () => {
  const analyse = analyser(CHORAL, 0); // Do majeur

  it("rend les bons accords verticaux (le <backup> ne sérialise plus les voix)", () => {
    expect(analyse).toEqual([
      { mesure: 1, temps: 1, degre: "I",    fonction: "T",  basse: "Do"  },
      { mesure: 1, temps: 2, degre: "V6/5", fonction: "D",  basse: "Si"  },
      { mesure: 1, temps: 3, degre: "I",    fonction: "T",  basse: "Do"  },
      { mesure: 1, temps: 4, degre: "V7/V", fonction: "D",  basse: "Ré"  },
      { mesure: 2, temps: 1, degre: "V",    fonction: "D",  basse: "Sol" },
      { mesure: 2, temps: 2, degre: "I",    fonction: "T",  basse: "Do"  },
    ]);
  });

  it("l'accord final TENU n'est annoté qu'une fois (rythme harmonique)", () => {
    // Le Do majeur sonne aux temps 2, 3 et 4 : trois tranches, un seul segment.
    expect(analyse.filter((a) => a.mesure === 2)).toHaveLength(2);
  });

  it("la basse tenue ne disparaît pas : elle porte encore le dernier accord", () => {
    expect(analyse.at(-1)).toMatchObject({ mesure: 2, temps: 2, basse: "Do" });
  });
});
