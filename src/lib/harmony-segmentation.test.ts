import { describe, it, expect } from "vitest";
import { parseMusicXML, TPQ, type ParsedNote } from "./musicxml-parse";
import {
  notesSoundingAt,
  notesSoundingDuring,
  sliceByBeat,
  mergeSlices,
  spansParTemps,
  type Slice,
} from "./harmony-segmentation";

function n(midi: number, onset: number, duration: number): ParsedNote {
  return {
    step: "C", alter: 0, octave: 4, pc: ((midi % 12) + 12) % 12, midi,
    onset, duration, measure: 1, beat: 1, voice: "1", part: "P1",
  };
}

describe("notesSoundingAt", () => {
  it("retient les notes TENUES, pas seulement celles qui attaquent", () => {
    const notes = [n(48, 0, 4 * TPQ), n(60, 2 * TPQ, TPQ)];
    expect(notesSoundingAt(notes, 0).map((x) => x.midi)).toEqual([48]);
    expect(notesSoundingAt(notes, 2 * TPQ).map((x) => x.midi)).toEqual([48, 60]);
    expect(notesSoundingAt(notes, 3 * TPQ).map((x) => x.midi)).toEqual([48]);
  });

  it("une note éteinte ne sonne plus (borne de fin exclusive)", () => {
    expect(notesSoundingAt([n(60, 0, TPQ)], TPQ)).toHaveLength(0);
  });
});

describe("notesSoundingDuring — tout ce qui sonne PENDANT le segment", () => {
  it("voit la croche de passage, que sliceByBeat ne voyait pas", () => {
    const tenue = n(60, 0, 4 * TPQ);                 // ronde
    const croche = n(62, TPQ + TPQ / 2, TPQ / 2);    // croche sur le « et » du 2
    const notes = [tenue, croche];

    // Le segment du temps 2 : de TPQ à 2·TPQ.
    const pendant = notesSoundingDuring(notes, TPQ, 2 * TPQ);
    expect(pendant.map((x) => x.midi).sort()).toEqual([60, 62]);

    // Alors qu'à l'ATTAQUE du temps 2, la croche ne sonne pas encore.
    expect(notesSoundingAt(notes, TPQ).map((x) => x.midi)).toEqual([60]);
  });

  it("une note qui s'éteint pile au début du segment n'y sonne pas", () => {
    expect(notesSoundingDuring([n(60, 0, TPQ)], TPQ, 2 * TPQ)).toHaveLength(0);
  });

  it("une note qui attaque pile à la fin du segment n'y sonne pas", () => {
    expect(notesSoundingDuring([n(60, 2 * TPQ, TPQ)], TPQ, 2 * TPQ)).toHaveLength(0);
  });
});

describe("spansParTemps", () => {
  it("un span par temps, avec toutes les notes sonnantes et la note d'attaque", () => {
    const xml =
      `<score-partwise><part-list><score-part id="P1"/></part-list>` +
      `<part id="P1"><measure number="1">` +
      `<attributes><divisions>2</divisions><key><fifths>0</fifths></key>` +
      `<time><beats>2</beats><beat-type>4</beat-type></time></attributes>` +
      // Temps 1 : Do et Ré en croches. Temps 2 : Mi en noire.
      `<note><pitch><step>C</step><octave>4</octave></pitch><duration>1</duration></note>` +
      `<note><pitch><step>D</step><octave>4</octave></pitch><duration>1</duration></note>` +
      `<note><pitch><step>E</step><octave>4</octave></pitch><duration>2</duration></note>` +
      `</measure></part></score-partwise>`;

    const spans = spansParTemps(parseMusicXML(xml));
    expect(spans).toHaveLength(2);
    expect(spans[0]).toMatchObject({ measure: 1, beat: 1 });
    // Le Ré, croche du contretemps, EST vu par le span du temps 1.
    expect(spans[0].notes.map((x) => x.step).sort()).toEqual(["C", "D"]);
    expect(spans[1].notes.map((x) => x.step)).toEqual(["E"]);
  });
});

describe("sliceByBeat — la basse tenue ne disparaît plus", () => {
  it("une ronde à la basse reste présente aux temps 2, 3 et 4", () => {
    // Basse : Do2 en ronde. Dessus : Do-Ré-Mi-Fa en noires (2e voix, via <backup>).
    const xml =
      `<score-partwise><part id="P1"><measure number="1">` +
      `<attributes><divisions>1</divisions><key><fifths>0</fifths></key>` +
      `<time><beats>4</beats><beat-type>4</beat-type></time></attributes>` +
      `<note><pitch><step>C</step><octave>2</octave></pitch><duration>4</duration><voice>1</voice></note>` +
      `<backup><duration>4</duration></backup>` +
      ["C", "D", "E", "F"]
        .map(
          (s) =>
            `<note><pitch><step>${s}</step><octave>5</octave></pitch>` +
            `<duration>1</duration><voice>2</voice></note>`,
        )
        .join("") +
      `</measure></part></score-partwise>`;

    const slices = sliceByBeat(parseMusicXML(xml));
    expect(slices).toHaveLength(4);
    expect(slices.map((s) => s.beat)).toEqual([1, 2, 3, 4]);
    // La basse est la même sur les quatre temps : c'est la ronde.
    expect(slices.every((s) => s.bass.midi === 36)).toBe(true);
    expect(slices[3].pcs.sort((a, b) => a - b)).toEqual([0, 5]); // Do (basse) + Fa
  });
});

describe("mergeSlices — rythme harmonique", () => {
  // La signature d'une tranche est un paramètre de `mergeSlices` : on la fabrique
  // ici hors du Slice, dans une table annexe, plutôt que d'ajouter un champ étranger
  // au type.
  const signatures = new Map<Slice, string>();
  const s = (beat: number, sig: string): Slice => {
    const tranche: Slice = {
      measure: 1, beat, onset: beat * TPQ, notes: [], bass: n(36, 0, TPQ), pcs: [],
    };
    signatures.set(tranche, sig);
    return tranche;
  };
  const sig = (x: Slice) => signatures.get(x) ?? "";

  it("fusionne les temps consécutifs portant la même harmonie", () => {
    const out = mergeSlices([s(1, "C"), s(2, "C"), s(3, "G"), s(4, "C")], sig);
    expect(out.map((x) => x.beat)).toEqual([1, 3, 4]);
  });

  it("une signature vide (accord non identifié) ne fusionne jamais", () => {
    const out = mergeSlices([s(1, ""), s(2, ""), s(3, "")], sig);
    expect(out).toHaveLength(3);
  });
});
