/**
 * L'audio des cours doit sonner À L'OCTAVE DE LA GRAVURE : « Do4 » gravé
 * (do central, midi 60) doit produire la spec PianoPlayer « Do:3 » — la même
 * octave-spec que le studio calcule depuis le midi (specDepuisMidi). Ce test
 * verrouille la correction appliquée par cours-audio (bug historique : les
 * cours 42/43/45 sonnaient une octave au-dessus de la partition affichée).
 */

import { describe, it, expect } from "vitest";
import { noteAudio, specAudio } from "./cours-audio";
import { specDepuisMidi } from "./studio-playback";

describe("cours-audio — la gravure et l'audio parlent la même octave", () => {
  it("Do3 gravé (basse du cours 42) sonne C3 = midi 48", () => {
    // specDepuisMidi(48) est la référence du studio pour midi 48.
    expect(specDepuisMidi(48)).toBe("C:2");
    expect(specAudio("Do3")).toBe("Do:2"); // même octave-spec → même hauteur
  });

  it("Do4 gravé (do central) rejoint la spec studio de midi 60", () => {
    expect(specDepuisMidi(60)).toBe("C:3");
    expect(specAudio("Do4")).toBe("Do:3");
  });

  it("conserve l'altération et gère playNote (nom + octave séparés)", () => {
    expect(specAudio("Sol#4")).toBe("Sol#:3");
    expect(specAudio("Mib5")).toBe("Mib:4");
    expect(noteAudio("Si3")).toEqual({ nom: "Si", octave: 2 });
  });
});
