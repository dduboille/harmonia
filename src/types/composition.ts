import type { Duration } from './melody';

export type { Duration };

export interface MelodyNote {
  note: string;    // English: C, D, Eb, F#, etc.
  octave: number;  // standard (C4 = middle C)
  duration: Duration;
}

export interface MelodyExercise {
  id: string;
  title: string;
  composer?: string;
  difficulty: 1 | 2 | 3;
  style: 'classique' | 'jazz' | 'modal' | 'romantique';
  keySignature: string;    // "C", "G", "Am", "F"...
  isMinor: boolean;
  timeSignature: '4/4' | '3/4';
  notes: MelodyNote[];
  measures: number;        // always 4 for now
  suggestedChords: string[][];   // [["C","Em"],["F","G"],...] per measure
  hint: string;
  concepts: string[];
  solutionExplanation: string[];  // one explanation per measure
}

export interface HarmonizationScore {
  global: number;       // 0-100
  compatibility: number; // 0-100 — note/accord
  functions: number;    // 0-100 — cohérence fonctionnelle
  cadences: number;     // 0-100 — cadence finale
  feedback: string[];
  valid: boolean;
}
