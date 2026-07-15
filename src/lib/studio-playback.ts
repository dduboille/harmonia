/**
 * lib/studio-playback.ts
 * Harmonia — Planifier la LECTURE d'une partition importée dans le studio.
 *
 * Le parseur donne les notes en ticks (TPQ par noire) ; `PianoPlayer` joue en
 * SECONDES. Ce module fait la conversion : chaque note devient un événement daté,
 * prêt à être programmé. Pur — la programmation audio elle-même vit dans le composant.
 */

import { TPQ, type ParsedScore } from "./musicxml-parse";

/** Un événement audio : une note, quand elle sonne, combien de temps. */
export interface EvenementAudio {
  spec: string;      // "C:3" — convention PianoPlayer
  startTime: number; // secondes
  duration: number;  // secondes
  velocity: number;
  measure: number;   // pour un éventuel surlignage synchronisé
}

const NOMS_DIESE = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

/**
 * Spec PianoPlayer d'une hauteur midi. La justesse tient à la HAUTEUR (fréquence),
 * pas à l'orthographe : on nomme au dièse, l'octave PianoPlayer est l'octave
 * standard moins un (Do4 = midi 60 = « C:3 »).
 */
export function specDepuisMidi(midi: number): string {
  const nom = NOMS_DIESE[((midi % 12) + 12) % 12];
  const octaveStandard = Math.floor(midi / 12) - 1;
  return `${nom}:${octaveStandard - 1}`;
}

export function planifierLecture(score: ParsedScore, tempo: number): EvenementAudio[] {
  // tempo = noires par minute ; une noire vaut TPQ ticks.
  const secondesParTick = 60 / tempo / TPQ;

  return score.notes
    .map((n) => ({
      spec: specDepuisMidi(n.midi),
      startTime: n.onset * secondesParTick,
      duration: n.duration * secondesParTick,
      velocity: 0.75,
      measure: n.measure,
    }))
    .sort((a, b) => a.startTime - b.startTime);
}
