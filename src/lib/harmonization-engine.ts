import type { MelodyExercise, MelodyNote, HarmonizationScore } from '@/types/composition';

// ── Note data ─────────────────────────────────────────────────────────────────

const SEMITONES: Record<string, number> = {
  'C': 0, 'C#': 1, 'Db': 1, 'D': 2, 'D#': 3, 'Eb': 3,
  'E': 4, 'F': 5, 'F#': 6, 'Gb': 6,
  'G': 7, 'G#': 8, 'Ab': 8, 'A': 9, 'A#': 10, 'Bb': 10, 'B': 11,
};

const EN_TO_FR: Record<string, string> = {
  'C': 'Do', 'C#': 'Do♯', 'Db': 'Ré♭', 'D': 'Ré', 'D#': 'Ré♯',
  'Eb': 'Mi♭', 'E': 'Mi', 'F': 'Fa', 'F#': 'Fa♯', 'Gb': 'Sol♭',
  'G': 'Sol', 'G#': 'Sol♯', 'Ab': 'La♭', 'A': 'La', 'A#': 'La♯',
  'Bb': 'Si♭', 'B': 'Si',
};

const DURATION_BEATS: Record<string, number> = {
  whole: 4, half: 2, quarter: 1, eighth: 0.5,
};

// ── Chord parsing ─────────────────────────────────────────────────────────────

interface ParsedChord {
  root: number;       // root pitch class 0–11
  tones: Set<number>; // all chord pitch classes (mod 12)
  name: string;
}

function parseChord(chord: string): ParsedChord {
  // Match root note (with optional accidental) + quality suffix
  const m = chord.match(/^([A-G][#b]?)(.*)$/);
  if (!m) return { root: 0, tones: new Set([0, 4, 7]), name: chord };

  const root = SEMITONES[m[1]] ?? 0;
  const qual = m[2];

  let intervals: number[];

  if (qual === '' || qual === 'maj' || qual === 'M') {
    intervals = [0, 4, 7];
  } else if (qual === 'm' || qual === 'min') {
    intervals = [0, 3, 7];
  } else if (qual === '7') {
    intervals = [0, 4, 7, 10]; // dominant 7
  } else if (qual === 'Maj7' || qual === 'maj7' || qual === 'M7' || qual === '△7') {
    intervals = [0, 4, 7, 11];
  } else if (qual === 'm7' || qual === 'min7') {
    intervals = [0, 3, 7, 10];
  } else if (qual === 'dim' || qual === 'o') {
    intervals = [0, 3, 6];
  } else if (qual === 'dim7' || qual === 'o7') {
    intervals = [0, 3, 6, 9];
  } else if (qual === 'm7b5' || qual === 'ø' || qual === 'Ø') {
    intervals = [0, 3, 6, 10];
  } else if (qual === 'aug' || qual === '+') {
    intervals = [0, 4, 8];
  } else if (qual === 'sus4' || qual === 'sus') {
    intervals = [0, 5, 7];
  } else if (qual === 'sus2') {
    intervals = [0, 2, 7];
  } else if (qual === '9') {
    intervals = [0, 4, 7, 10, 14]; // dominant 9
  } else if (qual === 'Maj9' || qual === 'maj9') {
    intervals = [0, 4, 7, 11, 14];
  } else if (qual === 'm9' || qual === 'min9') {
    intervals = [0, 3, 7, 10, 14];
  } else {
    intervals = [0, 4, 7]; // fallback to major
  }

  const tones = new Set(intervals.map(i => (root + i) % 12));
  return { root, tones, name: chord };
}

// ── Measure splitting ─────────────────────────────────────────────────────────

function getMeasures(notes: MelodyNote[], timeSignature: '4/4' | '3/4'): MelodyNote[][] {
  const beatsPerMeasure = timeSignature === '4/4' ? 4 : 3;
  const measures: MelodyNote[][] = [];
  let current: MelodyNote[] = [];
  let beats = 0;

  for (const note of notes) {
    const dur = DURATION_BEATS[note.duration] ?? 1;
    current.push(note);
    beats += dur;
    if (beats >= beatsPerMeasure - 0.01) {
      measures.push(current);
      current = [];
      beats = 0;
    }
  }
  if (current.length > 0) measures.push(current);
  return measures;
}

// ── Scoring helpers ───────────────────────────────────────────────────────────

function noteCompatScore(notePc: number, chord: ParsedChord): number {
  if (chord.tones.has(notePc)) return 1.0; // chord tone
  const dist = (notePc - chord.root + 12) % 12;
  if (dist === 6) return 0.0; // tritone from root — strong dissonance
  if (dist === 2 || dist === 9) return 0.65; // 9th or 13th — color tones
  return 0.35; // avoid note (4th, 2nd etc.)
}

function chordDegree(chordRoot: number, keyRoot: number): number {
  return (chordRoot - keyRoot + 12) % 12;
}

// T=0, SD=1, D=2, unknown=3
function chordFunction(chord: ParsedChord, keyRoot: number, isMinor: boolean): number {
  const deg = chordDegree(chord.root, keyRoot);
  if (isMinor) {
    // Minor scale degrees: 0, 2, 3, 5, 7, 8, 10
    if ([0, 3, 7].includes(deg)) return 0; // i, III, v → Tonic
    if ([5, 8].includes(deg)) return 1;    // iv, VI → Subdominant
    if ([2, 7, 10].includes(deg)) return 2; // II, V (with added semitone), VII → Dominant
  } else {
    // Major scale: I=0, II=2, III=4, IV=5, V=7, VI=9, VII=11
    if ([0, 4, 9].includes(deg)) return 0;  // I, III, VI → Tonic
    if ([2, 5].includes(deg)) return 1;     // II, IV → Subdominant
    if ([7, 11].includes(deg)) return 2;    // V, VII → Dominant
  }
  return 3; // outside diatonic
}

// ── Main evaluation ───────────────────────────────────────────────────────────

export function evaluateHarmonization(
  melody: MelodyExercise,
  attempt: string[][]
): HarmonizationScore {
  const keyRoot = SEMITONES[melody.keySignature.replace('m', '')] ?? 0;
  const beatsPerMeasure = melody.timeSignature === '4/4' ? 4 : 3;
  const measures = getMeasures(melody.notes, melody.timeSignature);
  const feedback: string[] = [];

  // ── 1. Compatibility (40 pts) ──────────────────────────────────────────────
  let compatSum = 0;
  let totalNotes = 0;
  const dissonances: string[] = [];

  for (let mi = 0; mi < measures.length && mi < attempt.length; mi++) {
    const mNotes = measures[mi];
    const mChords = (attempt[mi] ?? []).filter(c => c !== '');
    if (mChords.length === 0) continue;

    let beatPos = 0;
    for (const note of mNotes) {
      const beats = DURATION_BEATS[note.duration] ?? 1;
      const chordIdx = mChords.length === 2 && beatPos >= beatsPerMeasure / 2 ? 1 : 0;
      const chord = parseChord(mChords[chordIdx]);
      const notePc = SEMITONES[note.note] ?? 0;
      const score = noteCompatScore(notePc, chord);

      compatSum += score;
      totalNotes++;

      if (score === 0) {
        const nFr = EN_TO_FR[note.note] ?? note.note;
        dissonances.push(`⚠ ${nFr} en mesure ${mi + 1} forme un triton avec ${mChords[chordIdx]} — tension très forte`);
      }
      beatPos += beats;
    }
  }

  const compatRaw = totalNotes > 0 ? compatSum / totalNotes : 0;
  const compatScore = Math.round(compatRaw * 40);

  // ── 2. Functional coherence (30 pts) ──────────────────────────────────────
  const allChords = attempt.flat().filter(c => c !== '');
  let funcScore = 15; // base

  if (allChords.length >= 2) {
    const fns = allChords.map(c => chordFunction(parseChord(c), keyRoot, melody.isMinor));

    // SD → D progression: bonus
    for (let i = 0; i < fns.length - 1; i++) {
      if (fns[i] === 1 && fns[i + 1] === 2) funcScore += 4; // SD→D
      if (fns[i] === 2 && fns[i + 1] === 0) funcScore += 4; // D→T
    }

    // Final chord should be T (best) or D (acceptable half cadence)
    const lastFn = fns[fns.length - 1];
    if (lastFn === 0) funcScore += 6;
    else if (lastFn === 2) funcScore += 2; // half cadence
    else funcScore -= 4;
  }

  funcScore = Math.max(0, Math.min(30, funcScore));

  // ── 3. Cadence finale (10 pts) ────────────────────────────────────────────
  let cadenceScore = 0;
  const lastTwo = allChords.slice(-2);
  if (lastTwo.length === 2) {
    const a = parseChord(lastTwo[0]);
    const b = parseChord(lastTwo[1]);
    const degA = chordDegree(a.root, keyRoot);
    const degB = chordDegree(b.root, keyRoot);

    if (degA === 7 && degB === 0) cadenceScore = 10;       // V→I parfaite
    else if (degA === 11 && degB === 0) cadenceScore = 9;  // VII→I
    else if (degA === 5 && degB === 0) cadenceScore = 8;   // IV→I plagale
    else if (degA === 7 && degB !== 0) cadenceScore = 5;   // V→? demi-cadence
    else if (degB === 0) cadenceScore = 4;                  // ?→I
    else cadenceScore = 1;
  } else if (lastTwo.length === 1) {
    const b = parseChord(lastTwo[0]);
    cadenceScore = chordDegree(b.root, keyRoot) === 0 ? 5 : 1;
  }

  // ── Feedback messages ─────────────────────────────────────────────────────
  if (dissonances.length > 0) feedback.push(...dissonances.slice(0, 2));

  if (cadenceScore >= 9) feedback.push('✓ Cadence finale V→I excellente — conclusion claire et affirmée');
  else if (cadenceScore === 8) feedback.push('✓ Cadence plagale IV→I bien trouvée');
  else if (cadenceScore <= 3) feedback.push('⚠ La cadence finale n\'est pas concluante — essayez de terminer sur I ou précéder d\'un V7');

  if (compatRaw >= 0.85) feedback.push('✓ Très bonne compatibilité mélodie/accord — les notes s\'intègrent naturellement');
  else if (compatRaw < 0.55) feedback.push('⚠ Plusieurs notes de la mélodie sonnent comme des évitements — cherchez des accords qui incluent ces notes comme tierce ou quinte');

  if (funcScore >= 25) feedback.push('✓ Bonne cohérence fonctionnelle — les fonctions T/SD/D s\'enchaînent logiquement');
  else if (funcScore <= 12) feedback.push('⚠ La progression harmonique manque de direction — essayez une séquence SD→D→T pour chaque cadence');

  // Positive feedback for good choices
  const flatAttempt = attempt.flatMap((m, mi) =>
    (m ?? []).filter(c => c !== '').map(c => ({ chord: c, measure: mi + 1 }))
  );

  for (const { chord, measure } of flatAttempt) {
    const parsed = parseChord(chord);
    const sugFlat = melody.suggestedChords.flat();
    if (sugFlat.includes(chord) && feedback.filter(f => f.startsWith('✓')).length < 3) {
      feedback.push(`✓ ${chord} en mesure ${measure} est un excellent choix — bien vu`);
    }
  }

  const global = Math.min(100, compatScore + funcScore + cadenceScore);

  return {
    global,
    compatibility: Math.round(compatRaw * 100),
    functions: Math.round((funcScore / 30) * 100),
    cadences: cadenceScore * 10,
    feedback: feedback.slice(0, 6),
    valid: global >= 55,
  };
}

// ── Chord voicing for playback ─────────────────────────────────────────────────

const PITCH_CLASS_NAMES = ['C', 'C#', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'Ab', 'A', 'Bb', 'B'];

// Returns PianoPlayer "note:octave" specs for a chord root + notes in bass register
// pianoOctave is PianoPlayer convention (3 = middle C octave = C4 standard)
export function getChordBassSpecs(chord: string, pianoOctave: number = 2): string[] {
  const parsed = parseChord(chord);
  const rootName = PITCH_CLASS_NAMES[parsed.root];

  const specs: string[] = [`${rootName}:${pianoOctave}`];

  // Add third (simplified — just root + third)
  const thirdInterval = parsed.tones.has((parsed.root + 4) % 12) ? 4 : 3;
  const thirdPc = (parsed.root + thirdInterval) % 12;
  const thirdName = PITCH_CLASS_NAMES[thirdPc];
  specs.push(`${thirdName}:${pianoOctave}`);

  // Fifth (if not diminished or augmented)
  if (parsed.tones.has((parsed.root + 7) % 12)) {
    const fifthName = PITCH_CLASS_NAMES[(parsed.root + 7) % 12];
    specs.push(`${fifthName}:${pianoOctave}`);
  }

  return specs;
}
