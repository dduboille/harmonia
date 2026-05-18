export type Duration = 'whole' | 'half' | 'quarter' | 'eighth';

export interface MelodicNote {
  id: string;
  note: string;   // English: C, D, Eb, F#, etc.
  octave: number; // standard scientific (C4 = middle C)
  duration: Duration;
}

export interface IntervalInfo {
  semitones: number;
  direction: 'up' | 'down' | 'unison';
  name: string;
}

export interface MelodyAnalysis {
  intervals: IntervalInfo[];
  detectedScale: string | null;
  ambitus: { low: string; high: string } | null;
}
