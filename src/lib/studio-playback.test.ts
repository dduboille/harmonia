import { describe, it, expect } from "vitest";
import { TPQ, type ParsedNote, type ParsedScore } from "./musicxml-parse";
import { planifierLecture, specDepuisMidi } from "./studio-playback";

function note(midi: number, onset: number, duration: number, voice = "1"): ParsedNote {
  return {
    step: "C", alter: 0, octave: 4, pc: ((midi % 12) + 12) % 12, midi,
    onset, duration, measure: 1, beat: 1, voice, part: "P1",
  };
}

function score(notes: ParsedNote[]): ParsedScore {
  return { fifths: 0, mode: "major", signature: "4/4", notes, measures: [
    { numero: 1, start: 0, length: 4 * TPQ },
  ] };
}

describe("specDepuisMidi — convention PianoPlayer (octave = standard − 1)", () => {
  it("Do4 (midi 60) → C:3", () => {
    expect(specDepuisMidi(60)).toBe("C:3");
  });
  it("La4 (midi 69) → A:3", () => {
    expect(specDepuisMidi(69)).toBe("A:3");
  });
});

describe("planifierLecture — onsets et durées en secondes", () => {
  it("à 60 BPM, une noire dure 1 s et commence à son onset réel", () => {
    // Une noire (TPQ ticks) qui attaque au 2e temps (onset = TPQ).
    const ev = planifierLecture(score([note(60, TPQ, TPQ)]), 60);
    expect(ev).toHaveLength(1);
    expect(ev[0].startTime).toBeCloseTo(1, 5);
    expect(ev[0].duration).toBeCloseTo(1, 5);
    expect(ev[0].spec).toBe("C:3");
  });

  it("le tempo change l'échelle de temps (120 BPM : deux fois plus vite)", () => {
    const ev = planifierLecture(score([note(60, TPQ, TPQ)]), 120);
    expect(ev[0].startTime).toBeCloseTo(0.5, 5);
    expect(ev[0].duration).toBeCloseTo(0.5, 5);
  });

  it("les voix simultanées produisent des événements au même instant", () => {
    const ev = planifierLecture(
      score([note(72, 0, 4 * TPQ, "1"), note(48, 0, 4 * TPQ, "2")]),
      60,
    );
    expect(ev).toHaveLength(2);
    expect(ev.every((e) => e.startTime === 0)).toBe(true);
    // La ronde de basse dure bien 4 s.
    expect(ev[1].duration).toBeCloseTo(4, 5);
  });

  it("les événements sont triés par instant de début", () => {
    const ev = planifierLecture(
      score([note(60, 2 * TPQ, TPQ), note(64, 0, TPQ), note(67, TPQ, TPQ)]),
      60,
    );
    expect(ev.map((e) => e.startTime)).toEqual([0, 1, 2]);
  });
});
