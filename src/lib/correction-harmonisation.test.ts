import { describe, it, expect } from "vitest";
import { corrigerHarmonisation } from "./correction-harmonisation";
import type { MelodyExercise } from "@/types/composition";

/** Un exercice minimal en Do majeur, 2 mesures, pour les tests. */
function exo(notes: MelodyExercise["notes"]): MelodyExercise {
  return {
    id: "t", title: "t", difficulty: 1, style: "classique",
    keySignature: "C", isMinor: false, timeSignature: "4/4", measures: 2,
    notes, suggestedChords: [], hint: "", concepts: [], solutionExplanation: [],
  };
}

describe("corrigerHarmonisation — analyse par accord", () => {
  it("étiquette chaque accord par le moteur (fonction, degré)", () => {
    const melody = exo([
      { note: "C", octave: 4, duration: "whole" },
      { note: "B", octave: 3, duration: "whole" },
    ]);
    // Copie : I puis V7 (par leurs ids de palette).
    const r = corrigerHarmonisation(melody, [["I"], ["V7"]]);
    expect(r.accords[0].degree).toBe("I");
    expect(r.accords[0].fonction).toBe("T");
    expect(r.accords[1].degree).toBe("V7");
    expect(r.accords[1].fonction).toBe("D");
  });
});

describe("corrigerHarmonisation — notes étrangères par le classifieur C1", () => {
  it("nomme une note de passage dans la mélodie", () => {
    // Do–Ré–Mi en noires sur un accord de Do tenu : le Ré est une note de passage.
    const melody = exo([
      { note: "C", octave: 4, duration: "quarter" },
      { note: "D", octave: 4, duration: "quarter" },
      { note: "E", octave: 4, duration: "quarter" },
      { note: "C", octave: 4, duration: "quarter" },
    ]);
    const r = corrigerHarmonisation(melody, [["I"], []]);
    const types = r.notesMelodie.map((n) => n.type);
    expect(types).toContain("note de passage");
    expect(r.notesMelodie.filter((n) => n.type === null).length).toBeGreaterThan(0); // les notes d'accord
  });

  it("distingue une note d'accord d'une étrangère innommée", () => {
    // Do (accord) – Fa# (hors accord, abordé ET quitté par saut : rien ne la nomme)
    // – Do – Mi, sur un accord de Do tenu.
    const melody = exo([
      { note: "C", octave: 4, duration: "quarter" },
      { note: "F#", octave: 4, duration: "quarter" },
      { note: "C", octave: 4, duration: "quarter" },
      { note: "E", octave: 4, duration: "quarter" },
    ]);
    const r = corrigerHarmonisation(melody, [["I"], []]);
    // La note d'accord : estAccord true, type null.
    expect(r.notesMelodie[0].estAccord).toBe(true);
    expect(r.notesMelodie[0].type).toBeNull();
    // L'étrangère innommée : estAccord false, type null — mais distincte de la note d'accord.
    expect(r.notesMelodie[1].estAccord).toBe(false);
    expect(r.notesMelodie[1].type).toBeNull();
  });
});

describe("corrigerHarmonisation — score fonctionnel", () => {
  it("récompense prédominante → dominante → tonique", () => {
    const melody = exo([
      { note: "F", octave: 4, duration: "whole" },
      { note: "C", octave: 4, duration: "whole" },
    ]);
    const bonne = corrigerHarmonisation(melody, [["ii6"], ["V7"]]); // SD → D (…puis I implicite)
    const molle = corrigerHarmonisation(melody, [["V"], ["IV"]]);   // D → SD : recul
    expect(bonne.score.global).toBeGreaterThan(molle.score.global);
  });

  it("récompense une dominante secondaire résolue sur sa cible", () => {
    const melody = exo([
      { note: "A", octave: 4, duration: "whole" },
      { note: "D", octave: 4, duration: "whole" },
    ]);
    // V7/ii → ii : la dominante secondaire est résolue.
    const r = corrigerHarmonisation(melody, [["V7/ii"], ["ii"]]);
    expect(r.accords[0].resolue).toBe(true);
  });
});
