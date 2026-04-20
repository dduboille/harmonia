// harmonyCheck.ts
// Validateur automatique de progressions harmoniques à 4 voix
// Basé sur HARMONIE_RULES.md

export type Voice = 'soprano' | 'alto' | 'tenor' | 'bass';

export interface Chord {
  label: string;
  soprano: string;
  alto: string;
  tenor: string;
  bass: string;
}

export interface HarmonyError {
  type: 'parallel_fifths' | 'parallel_octaves' | 'parallel_unison' |
        'direct_fifth' | 'direct_octave' |
        'leading_tone' | 'seventh_resolution' |
        'doubling' | 'range' | 'crossing' | 'overlap' |
        'augmented_second' | 'spacing';
  severity: 'error' | 'warning';
  message: string;
  chord?: number;
  voices?: [Voice, Voice];
}

// ── Conversion note → demi-tons depuis C0 ──
const NOTE_MAP: Record<string, number> = {
  C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11,
};

function noteToMidi(note: string): number {
  const match = note.match(/^([A-G])(#|b)?(\d)$/);
  if (!match) throw new Error(`Note invalide : ${note}`);
  const [, name, acc, octave] = match;
  const base = NOTE_MAP[name];
  const accidental = acc === '#' ? 1 : acc === 'b' ? -1 : 0;
  return (parseInt(octave) + 1) * 12 + base + accidental;
}

function intervalSemitones(a: string, b: string): number {
  return Math.abs(noteToMidi(a) - noteToMidi(b)) % 12;
}

function intervalRaw(a: string, b: string): number {
  return noteToMidi(b) - noteToMidi(a);
}

function isP5(a: string, b: string): boolean {
  return intervalSemitones(a, b) === 7;
}

function isP8(a: string, b: string): boolean {
  const diff = Math.abs(noteToMidi(a) - noteToMidi(b));
  return diff % 12 === 0 && diff !== 0;
}

function isUnison(a: string, b: string): boolean {
  return noteToMidi(a) === noteToMidi(b);
}

// Seconde augmentée = diatoniquement une seconde (notes adjacentes) 
// mais chromatiquement 3 demi-tons
function isAugmentedSecond(a: string, b: string): boolean {
  const noteNames = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
  const aName = a.replace(/[#b\d]/g, '');
  const bName = b.replace(/[#b\d]/g, '');
  const aIdx = noteNames.indexOf(aName);
  const bIdx = noteNames.indexOf(bName);
  if (aIdx === -1 || bIdx === -1) return false;
  const diatonicSteps = Math.abs(aIdx - bIdx);
  const chromatic = Math.abs(intervalRaw(a, b));
  // Seconde augmentée : 1 degré diatonique, 3 demi-tons chromatiques
  return diatonicSteps === 1 && chromatic === 3;
}

// ── Tessiturs ──
const RANGES: Record<Voice, [number, number]> = {
  soprano: [noteToMidi('C4'), noteToMidi('G5')],
  alto:    [noteToMidi('G3'), noteToMidi('C5')],
  tenor:   [noteToMidi('C3'), noteToMidi('G4')],
  bass:    [noteToMidi('E2'), noteToMidi('C4')],
};

const RANGE_LABELS: Record<Voice, string> = {
  soprano: 'C4–G5',
  alto:    'G3–C5',
  tenor:   'C3–G4',
  bass:    'E2–C4',
};

// ── Vérification principale ──
export function checkProgression(chords: Chord[]): HarmonyError[] {
  const errors: HarmonyError[] = [];
  const voices: Voice[] = ['soprano', 'alto', 'tenor', 'bass'];
  const pairs: [Voice, Voice][] = [
    ['soprano', 'alto'],
    ['soprano', 'tenor'],
    ['soprano', 'bass'],
    ['alto', 'tenor'],
    ['alto', 'bass'],
    ['tenor', 'bass'],
  ];

  chords.forEach((chord, ci) => {

    // ── 1. Tessiturs ──
    voices.forEach(v => {
      const midi = noteToMidi(chord[v]);
      const [min, max] = RANGES[v];
      if (midi < min || midi > max) {
        errors.push({
          type: 'range',
          severity: 'error',
          message: `Accord ${chord.label} — ${v} : ${chord[v]} hors tessiture (${RANGE_LABELS[v]})`,
          chord: ci,
          voices: [v, v],
        });
      }
    });

    // ── 2. Espacement soprano/alto et alto/ténor ──
    if (noteToMidi(chord.soprano) - noteToMidi(chord.alto) > 12) {
      errors.push({
        type: 'spacing',
        severity: 'warning',
        message: `Accord ${chord.label} — écart soprano/alto supérieur à une octave`,
        chord: ci,
        voices: ['soprano', 'alto'],
      });
    }
    if (noteToMidi(chord.alto) - noteToMidi(chord.tenor) > 12) {
      errors.push({
        type: 'spacing',
        severity: 'warning',
        message: `Accord ${chord.label} — écart alto/ténor supérieur à une octave`,
        chord: ci,
        voices: ['alto', 'tenor'],
      });
    }

    // ── 3. Croisements ──
    if (noteToMidi(chord.soprano) < noteToMidi(chord.alto)) {
      errors.push({
        type: 'crossing',
        severity: 'error',
        message: `Accord ${chord.label} — croisement soprano/alto (S:${chord.soprano} < A:${chord.alto})`,
        chord: ci,
        voices: ['soprano', 'alto'],
      });
    }
    if (noteToMidi(chord.alto) < noteToMidi(chord.tenor)) {
      errors.push({
        type: 'crossing',
        severity: 'error',
        message: `Accord ${chord.label} — croisement alto/ténor (A:${chord.alto} < T:${chord.tenor})`,
        chord: ci,
        voices: ['alto', 'tenor'],
      });
    }
    if (noteToMidi(chord.tenor) < noteToMidi(chord.bass)) {
      errors.push({
        type: 'crossing',
        severity: 'error',
        message: `Accord ${chord.label} — croisement ténor/basse (T:${chord.tenor} < B:${chord.bass})`,
        chord: ci,
        voices: ['tenor', 'bass'],
      });
    }

    // ── Vérifications entre accords consécutifs ──
    if (ci === 0) return;
    const prev = chords[ci - 1];

    // ── 4. Parallélismes (6 paires) ──
    pairs.forEach(([v1, v2]) => {
      const prev1 = prev[v1], prev2 = prev[v2];
      const curr1 = chord[v1], curr2 = chord[v2];
      const dir1 = Math.sign(intervalRaw(prev1, curr1));
      const dir2 = Math.sign(intervalRaw(prev2, curr2));
      const moving = dir1 !== 0 && dir2 !== 0;
      const parallel = dir1 === dir2;

      // Quintes parallèles
      if (moving && parallel && isP5(prev1, prev2) && isP5(curr1, curr2)) {
        errors.push({
          type: 'parallel_fifths',
          severity: 'error',
          message: `Quintes parallèles ${prev.label}→${chord.label} : ${v1}(${prev1}→${curr1}) / ${v2}(${prev2}→${curr2})`,
          chord: ci,
          voices: [v1, v2],
        });
      }

      // Octaves parallèles
      if (moving && parallel && isP8(prev1, prev2) && isP8(curr1, curr2)) {
        errors.push({
          type: 'parallel_octaves',
          severity: 'error',
          message: `Octaves parallèles ${prev.label}→${chord.label} : ${v1}(${prev1}→${curr1}) / ${v2}(${prev2}→${curr2})`,
          chord: ci,
          voices: [v1, v2],
        });
      }

      // Unissons parallèles
      if (moving && parallel && isUnison(prev1, prev2) && isUnison(curr1, curr2)) {
        errors.push({
          type: 'parallel_unison',
          severity: 'error',
          message: `Unissons parallèles ${prev.label}→${chord.label} : ${v1} et ${v2}`,
          chord: ci,
          voices: [v1, v2],
        });
      }
    });

    // ── 5. Quinte/octave directe soprano/basse ──
    const sPrev = prev.soprano, sCurr = chord.soprano;
    const bPrev = prev.bass,    bCurr = chord.bass;
    const sDir = Math.sign(intervalRaw(sPrev, sCurr));
    const bDir = Math.sign(intervalRaw(bPrev, bCurr));

    if (sDir === bDir && sDir !== 0) {
      if (isP5(sCurr, bCurr)) {
        errors.push({
          type: 'direct_fifth',
          severity: 'error',
          message: `Quinte directe soprano/basse ${prev.label}→${chord.label} : S(${sPrev}→${sCurr}) B(${bPrev}→${bCurr})`,
          chord: ci,
          voices: ['soprano', 'bass'],
        });
      }
      if (isP8(sCurr, bCurr)) {
        errors.push({
          type: 'direct_octave',
          severity: 'error',
          message: `Octave directe soprano/basse ${prev.label}→${chord.label} : S(${sPrev}→${sCurr}) B(${bPrev}→${bCurr})`,
          chord: ci,
          voices: ['soprano', 'bass'],
        });
      }
    }

    // ── 6. Sauts mélodiques interdits ──
    voices.forEach(v => {
      const leap = Math.abs(intervalRaw(prev[v], chord[v]));

      // Seconde augmentée (diatoniquement)
      if (isAugmentedSecond(prev[v], chord[v])) {
        errors.push({
          type: 'augmented_second',
          severity: 'error',
          message: `Seconde augmentée dans ${v} : ${prev[v]}→${chord[v]} (${prev.label}→${chord.label})`,
          chord: ci,
          voices: [v, v],
        });
      }

      // Saut excessif (> neuvième = 14 demi-tons)
      if (leap > 14) {
        errors.push({
          type: 'augmented_second',
          severity: 'warning',
          message: `Saut excessif dans ${v} : ${prev[v]}→${chord[v]} (${leap} demi-tons) — ${prev.label}→${chord.label}`,
          chord: ci,
          voices: [v, v],
        });
      }
    });

    // ── 7. Chevauchements ──
    voices.forEach((v, vi) => {
      if (vi === 0) return;
      const upper = voices[vi - 1];
      // La voix supérieure ne doit pas descendre sous la note précédente de la voix inférieure
      if (noteToMidi(chord[upper]) < noteToMidi(prev[v])) {
        errors.push({
          type: 'overlap',
          severity: 'warning',
          message: `Chevauchement ${upper}/${v} : ${chord[upper]} < ${prev[v]} (${prev.label}→${chord.label})`,
          chord: ci,
          voices: [upper, v],
        });
      }
      // La voix inférieure ne doit pas monter au-dessus de la note précédente de la voix supérieure
      if (noteToMidi(chord[v]) > noteToMidi(prev[upper])) {
        errors.push({
          type: 'overlap',
          severity: 'warning',
          message: `Chevauchement ${v}/${upper} : ${chord[v]} > ${prev[upper]} (${prev.label}→${chord.label})`,
          chord: ci,
          voices: [v, upper],
        });
      }
    });
  });

  return errors;
}

// ── Logger console ──
export function logHarmonyCheck(chords: Chord[], progressionName = 'Progression') {
  const errors = checkProgression(chords);
  const errCount = errors.filter(e => e.severity === 'error').length;
  const warnCount = errors.filter(e => e.severity === 'warning').length;

  if (errors.length === 0) {
    console.log(
      `%c✓ ${progressionName} — Aucune erreur harmonique`,
      'color: #C9A84C; font-weight: bold; font-size: 13px;'
    );
    return;
  }

  console.group(
    `%c⚠ ${progressionName} — ${errCount} erreur(s), ${warnCount} avertissement(s)`,
    'color: #E24B4A; font-weight: bold; font-size: 13px;'
  );
  errors.forEach(e => {
    const icon = e.severity === 'error' ? '✗' : '⚠';
    const color = e.severity === 'error' ? '#E24B4A' : '#EF9F27';
    console.log(`%c${icon} ${e.message}`, `color: ${color}; font-size: 12px;`);
  });
  console.groupEnd();
}