import { describe, it, expect } from "vitest";
import { TPQ, type ParsedNote, type ParsedScore, type TempoEvent } from "./musicxml-parse";
import { planifierLecture, specDepuisMidi } from "./studio-playback";

function note(midi: number, onset: number, duration: number, measure = 1, voice = "1"): ParsedNote {
  return {
    step: "C", alter: 0, octave: 4, pc: ((midi % 12) + 12) % 12, midi,
    onset, duration, measure, beat: 1, voice, part: "P1",
  };
}

function score(notes: ParsedNote[], tempos: TempoEvent[] = [], measures?: ParsedScore["measures"]): ParsedScore {
  return {
    fifths: 0, mode: "major", signature: "4/4", notes, tempos,
    measures: measures ?? [{ numero: 1, start: 0, length: 4 * TPQ }],
  };
}

describe("specDepuisMidi — convention PianoPlayer (octave = standard − 1)", () => {
  it("Do4 (midi 60) → C:3", () => {
    expect(specDepuisMidi(60)).toBe("C:3");
  });
  it("La4 (midi 69) → A:3", () => {
    expect(specDepuisMidi(69)).toBe("A:3");
  });
});

describe("planifierLecture — tempo écrit et onsets en secondes", () => {
  it("à 60 noires/min, une noire dure 1 s et commence à son onset réel", () => {
    const { evenements } = planifierLecture(
      score([note(60, TPQ, TPQ)], [{ onset: 0, bpm: 60 }]),
      1,
    );
    expect(evenements).toHaveLength(1);
    expect(evenements[0].startTime).toBeCloseTo(1, 5);
    expect(evenements[0].duration).toBeCloseTo(1, 5);
    expect(evenements[0].spec).toBe("C:3");
  });

  it("la vitesse est un facteur global : 2 = deux fois plus vite", () => {
    const { evenements } = planifierLecture(
      score([note(60, TPQ, TPQ)], [{ onset: 0, bpm: 60 }]),
      2,
    );
    expect(evenements[0].startTime).toBeCloseTo(0.5, 5);
    expect(evenements[0].duration).toBeCloseTo(0.5, 5);
  });

  it("sans tempo écrit, replie sur 90 noires/min", () => {
    const { evenements } = planifierLecture(score([note(60, 0, TPQ)]), 1);
    expect(evenements[0].duration).toBeCloseTo(60 / 90, 5);
  });
});

describe("planifierLecture — CHANGEMENT de tempo (Grave puis Allegro)", () => {
  const mesures = [
    { numero: 1, start: 0, length: 4 * TPQ },
    { numero: 2, start: 4 * TPQ, length: 4 * TPQ },
  ];
  // Grave à 60 pour la mesure 1, Allegro à 120 dès la mesure 2.
  const tempos: TempoEvent[] = [
    { onset: 0, bpm: 60 },
    { onset: 4 * TPQ, bpm: 120 },
  ];

  it("chaque segment garde sa propre échelle de temps", () => {
    const notes = [
      note(60, 0, TPQ, 1),          // noire en mesure 1 (60) → 1 s
      note(62, 4 * TPQ, TPQ, 2),    // noire en mesure 2 (120) → 0,5 s
    ];
    const { evenements } = planifierLecture(score(notes, tempos, mesures), 1);
    expect(evenements[0].duration).toBeCloseTo(1, 5);
    expect(evenements[1].duration).toBeCloseTo(0.5, 5);
    // La mesure 1 dure 4 noires à 60 = 4 s : la note de mesure 2 commence à t=4 s.
    expect(evenements[1].startTime).toBeCloseTo(4, 5);
  });

  it("les débuts de mesure suivent aussi le tempo variable", () => {
    const { mesures: m } = planifierLecture(score([note(60, 0, TPQ, 1)], tempos, mesures), 1);
    expect(m.find((x) => x.numero === 1)!.debutSec).toBeCloseTo(0, 5);
    expect(m.find((x) => x.numero === 2)!.debutSec).toBeCloseTo(4, 5);
  });
});

describe("planifierLecture — mesures et durée totale", () => {
  it("rend les débuts de mesure et la durée totale", () => {
    const { mesures, dureeTotale } = planifierLecture(
      score([note(60, 0, 4 * TPQ)], [{ onset: 0, bpm: 60 }]),
      1,
    );
    expect(mesures[0]).toMatchObject({ numero: 1, debutSec: 0 });
    expect(dureeTotale).toBeCloseTo(4, 5); // une ronde à 60 = 4 s
  });

  it("les événements sont triés par instant de début", () => {
    const { evenements } = planifierLecture(
      score([note(60, 2 * TPQ, TPQ), note(64, 0, TPQ), note(67, TPQ, TPQ)], [{ onset: 0, bpm: 60 }]),
      1,
    );
    expect(evenements.map((e) => e.startTime)).toEqual([0, 1, 2]);
  });
});
