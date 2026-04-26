/**
 * exercises/generator.ts
 * Harmonia — Générateur automatique d'exercices SATB
 *
 * Principe :
 * 1. Définir un template (progression d'accords avec intervalles)
 * 2. Transposer dans les 24 tonalités
 * 3. Calculer le voicing SATB pour les 4 positions (1, 3, 5, 7 au soprano)
 * 4. Générer l'exercice complet avec solution, hint, explication
 */

import type { SATBExercise } from "@/types/exercise";

// ─── Types internes ───────────────────────────────────────────────────────────

/** Intervalle en demi-tons depuis la fondamentale */
interface ChordTemplate {
  degreeLabel: string;  // ex: "II", "V7", "I"
  /** Intervalles depuis la fondamentale (en demi-tons) pour les 4 notes */
  intervals: [number, number, number, number]; // [fondamentale, tierce, quinte, septième]
  quality: string; // "m7" | "7" | "Maj7" | "m7b5" | "dim7" | "M" | "m"
}

/** Une mesure dans le template */
interface ProgressionTemplate {
  id: string;
  title: string;
  cours: number;
  difficulty: 1 | 2 | 3;
  tags: string[];
  concepts: string[];
  hint: string;
  explanation: string;
  /** Accords de la progression */
  chords: ChordTemplate[];
  /** Applicable en majeur, mineur, ou les deux */
  modes: ("major" | "minor")[];
}

/** Une note SATB calculée */
interface NoteEntry { name: string | null; octave: number; }
type SATBMeasure = { soprano: NoteEntry; alto: NoteEntry; tenor: NoteEntry; bass: NoteEntry };

// ─── Ordre chromatique ────────────────────────────────────────────────────────

const CHROMATIC = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];

function noteIndex(note: string): number {
  const map: Record<string,number> = {
    "C":0,"C#":1,"Db":1,"D":2,"D#":3,"Eb":3,"E":4,"Fb":4,
    "F":5,"E#":5,"F#":6,"Gb":6,"G":7,"G#":8,"Ab":8,
    "A":9,"A#":10,"Bb":10,"B":11,"Cb":11,"B#":0,
  };
  return map[note] ?? 0;
}

/** Transposes une note de `semitones` demi-tons, retourne note + octave */
function transposeNote(rootNote: string, rootOctave: number, semitones: number): { name: string; octave: number } {
  const base = noteIndex(rootNote);
  const total = base + semitones;
  const oct   = rootOctave + Math.floor(total / 12);
  const idx   = ((total % 12) + 12) % 12;
  return { name: CHROMATIC[idx], octave: oct };
}

// ─── Intervalles standard ─────────────────────────────────────────────────────
// [fondamentale(0), tierce, quinte, septième] en demi-tons

const INT = {
  Maj7:  [0, 4, 7, 11] as [number,number,number,number],
  m7:    [0, 3, 7, 10] as [number,number,number,number],
  "7":   [0, 4, 7, 10] as [number,number,number,number],
  m7b5:  [0, 3, 6, 10] as [number,number,number,number],
  dim7:  [0, 3, 6,  9] as [number,number,number,number],
  M:     [0, 4, 7,  7] as [number,number,number,number], // triade maj (quinte doublée)
  m:     [0, 3, 7,  7] as [number,number,number,number], // triade min
  dim:   [0, 3, 6,  6] as [number,number,number,number], // triade dim
};

// ─── Templates de progressions ────────────────────────────────────────────────

/**
 * Degré en demi-tons depuis la tonique pour les gammes majeures
 * I=0, II=2, III=4, IV=5, V=7, VI=9, VII=11
 */
const MAJOR_DEGREES: Record<string, number> = {
  "I":0,"II":2,"III":4,"IV":5,"V":7,"VI":9,"VII":11,
  "bII":1,"bVII":10,"bIII":3,"bVI":8,
};

const MINOR_DEGREES: Record<string, number> = {
  "i":0,"ii":2,"III":3,"iv":5,"V":7,"VI":8,"VII":10,"vii":11,
  "ii°":2,
};

export const PROGRESSION_TEMPLATES: ProgressionTemplate[] = [
  // ── Niveau 1 ──────────────────────────────────────────────────────────────
  {
    id: "iivi-major",
    title: "II–V–I",
    cours: 3,
    difficulty: 1,
    tags: ["II-V-I","conduite minimaliste","cadence"],
    concepts: ["notes communes","sensible","septième de dominante","triton"],
    hint: "De IIm7 à V7 : 2 notes restent en place. De V7 à I : sensible monte, septième descend.",
    explanation: "Le II–V–I est la cadence fondamentale de la musique tonale. IIm7 (SD) prépare V7 (D) qui résout sur I (T). Les notes communes entre IIm7 et V7 minimisent les mouvements.",
    modes: ["major"],
    chords: [
      { degreeLabel:"IIm7",  intervals: INT.m7,   quality:"m7"  },
      { degreeLabel:"V7",    intervals: INT["7"],  quality:"7"   },
      { degreeLabel:"IMaj7", intervals: INT.Maj7,  quality:"Maj7"},
    ],
  },
  {
    id: "i-iv-v7-i-major",
    title: "I – IV – V7 – I",
    cours: 4,
    difficulty: 1,
    tags: ["I-IV-V7-I","progression fondamentale","T-SD-D-T"],
    concepts: ["T-SD-D-T","notes communes","cadence parfaite"],
    hint: "I→IV : E monte vers F (conjoint). IV→V7 : C reste, A→B, F reste. V7→I : B→C, F→E.",
    explanation: "La progression cadentielle fondamentale. T–SD–D–T en version complète. Notes communes à exploiter entre chaque accord.",
    modes: ["major","minor"],
    chords: [
      { degreeLabel:"I",   intervals: INT.M,    quality:"M"  },
      { degreeLabel:"IV",  intervals: INT.M,    quality:"M"  },
      { degreeLabel:"V7",  intervals: INT["7"], quality:"7"  },
      { degreeLabel:"I",   intervals: INT.M,    quality:"M"  },
    ],
  },
  {
    id: "v7-i-perfect",
    title: "Cadence parfaite V7 – I",
    cours: 4,
    difficulty: 1,
    tags: ["cadence parfaite","V7-I","résolution"],
    concepts: ["cadence parfaite","sensible","septième de dominante","sucrée de quinte"],
    hint: "Sensible (VIIe) monte vers la tonique. Septième (IVe) descend vers la tierce de I.",
    explanation: "La cadence parfaite exige V7 et I à l'état fondamental. La quinte de I est supprimée (sucrée) pour faciliter la résolution.",
    modes: ["major","minor"],
    chords: [
      { degreeLabel:"V7", intervals: INT["7"], quality:"7" },
      { degreeLabel:"I",  intervals: INT.M,    quality:"M" },
    ],
  },
  {
    id: "iv-i-plagal",
    title: "Cadence plagale IV – I",
    cours: 4,
    difficulty: 1,
    tags: ["cadence plagale","IV-I","Amen"],
    concepts: ["cadence plagale","mouvement conjoint","couleur douce"],
    hint: "Pas de triton à résoudre. Les voix descendent conjointement. A→G, F→E, C reste.",
    explanation: "La cadence 'Amen'. Pas de sensible ni de septième — les voix bougent par degrés conjoints vers la tonique.",
    modes: ["major","minor"],
    chords: [
      { degreeLabel:"IV", intervals: INT.M,  quality:"M" },
      { degreeLabel:"I",  intervals: INT.M,  quality:"M" },
    ],
  },
  {
    id: "v7-vi-deceptive",
    title: "Cadence rompue V7 – VI",
    cours: 4,
    difficulty: 2,
    tags: ["cadence rompue","V7-VI","surprise"],
    concepts: ["cadence rompue","substitution tonique","surprise harmonique"],
    hint: "La sensible résout normalement vers la tonique — mais la basse va vers VI au lieu de I.",
    explanation: "V7 devrait résoudre sur I — mais va sur VI. La sensible résout toujours vers la tonique, c'est la basse qui surprend.",
    modes: ["major","minor"],
    chords: [
      { degreeLabel:"V7", intervals: INT["7"], quality:"7" },
      { degreeLabel:"VI", intervals: INT.m,    quality:"m" },
    ],
  },
  // ── Niveau 2 ──────────────────────────────────────────────────────────────
  {
    id: "i-vi-ii-v-i",
    title: "I – VI – II – V – I",
    cours: 4,
    difficulty: 2,
    tags: ["cycle","I-VI-II-V-I","progression complète"],
    concepts: ["substitution diatonique","notes communes","T-T-SD-D-T"],
    hint: "I→VI : seule la basse bouge (C→A). VI→II : E reste, C reste. II→V→I : conduite minimaliste.",
    explanation: "Progression complète T–T–SD–D–T. VI est la tonique de substitution. Les notes communes entre accords successifs permettent un mouvement minimal.",
    modes: ["major","minor"],
    chords: [
      { degreeLabel:"I",   intervals: INT.M,   quality:"M"  },
      { degreeLabel:"VI",  intervals: INT.m,   quality:"m"  },
      { degreeLabel:"IIm7",intervals: INT.m7,  quality:"m7" },
      { degreeLabel:"V7",  intervals: INT["7"],quality:"7"  },
      { degreeLabel:"I",   intervals: INT.M,   quality:"M"  },
    ],
  },
  {
    id: "v-of-v-tonicization",
    title: "V/V – V7 – I (tonicisation)",
    cours: 7,
    difficulty: 2,
    tags: ["tonicisation","V/V","dominante secondaire"],
    concepts: ["tonicisation","dominante secondaire","chromatisme ascendant","sensible temporaire"],
    hint: "V/V = dominante de la dominante. La sensible temporaire monte vers la fondamentale du V7.",
    explanation: "V/V tonicise la dominante — la rend brièvement tonique. La nouvelle sensible (3e du V/V) résout vers la fondamentale du V7.",
    modes: ["major","minor"],
    chords: [
      { degreeLabel:"I",    intervals: INT.M,    quality:"M"   },
      { degreeLabel:"V/V",  intervals: INT["7"],  quality:"7"   }, // dominante de V
      { degreeLabel:"V7",   intervals: INT["7"],  quality:"7"   },
      { degreeLabel:"I",    intervals: INT.M,     quality:"M"   },
    ],
  },
  {
    id: "iv-minor-borrow",
    title: "I – IVm – V7 – I (emprunt IV mineur)",
    cours: 5,
    difficulty: 2,
    tags: ["emprunt","IV mineur","homonyme","chromatisme"],
    concepts: ["emprunt à l'homonyme","IV mineur","chromatisme descendant"],
    hint: "IVm est emprunté à la tonalité mineure homonyme. La tierce mineure crée un chromatisme expressif.",
    explanation: "Le IV mineur apporte une couleur sombre romantique. Sa tierce bémolisée crée un chromatisme descendant expressif avant la dominante.",
    modes: ["major"],
    chords: [
      { degreeLabel:"I",   intervals: INT.M,    quality:"M"   },
      { degreeLabel:"IVm", intervals: INT.m,    quality:"m"   }, // emprunt
      { degreeLabel:"V7",  intervals: INT["7"], quality:"7"   },
      { degreeLabel:"I",   intervals: INT.M,    quality:"M"   },
    ],
  },
  // ── Niveau 3 ──────────────────────────────────────────────────────────────
  {
    id: "quintes-descendantes-minor",
    title: "Cycle des quintes descendantes",
    cours: 5,
    difficulty: 3,
    tags: ["cycle des quintes","Do mineur","suites classiques","Autumn Leaves"],
    concepts: ["cycle des quintes","mouvement de quinte","suites classiques"],
    hint: "Chaque fondamentale descend d'une quinte. Les voix intérieures restent aussi proches que possible.",
    explanation: "Archétype de la musique tonale — chaque accord résout sur le suivant par quinte descendante. Base de nombreux standards (Autumn Leaves).",
    modes: ["minor"],
    chords: [
      { degreeLabel:"i",   intervals: INT.m7,  quality:"m7"  },
      { degreeLabel:"iv",  intervals: INT.m7,  quality:"m7"  },
      { degreeLabel:"VII", intervals: INT.m7b5,quality:"m7b5"},
      { degreeLabel:"III", intervals: INT.Maj7,quality:"Maj7"},
    ],
  },
  {
    id: "iivi-minor",
    title: "IIø – V7 – I mineur",
    cours: 5,
    difficulty: 2,
    tags: ["II-V-I mineur","demi-diminué","conduite de voix"],
    concepts: ["gamme mineure harmonique","accord demi-diminué","sensible","triton"],
    hint: "En mineur, le IIe degré est demi-diminué (m7♭5). Le Ve degré est dominant7 avec la sensible élevée.",
    explanation: "Le II–V–I en mineur utilise le IIm7♭5 (demi-diminué) et le V7 avec sensible élevée. La conduite de voix suit les mêmes principes qu'en majeur.",
    modes: ["minor"],
    chords: [
      { degreeLabel:"IIm7b5", intervals: INT.m7b5, quality:"m7b5" },
      { degreeLabel:"V7",     intervals: INT["7"],  quality:"7"    },
      { degreeLabel:"Im7",    intervals: INT.m7,    quality:"m7"   },
    ],
  },
];

// ─── Calcul du degré en demi-tons ────────────────────────────────────────────

function degreeToSemitones(degree: string, mode: "major" | "minor"): number {
  // Cas spéciaux
  if (degree === "V/V") {
    // Dominante de V = IIe degré de la gamme majeure + 4 (pour faire un accord dom7)
    return mode === "major" ? 9 : 9; // VIe degré = dominante de la dominante
  }
  if (degree === "IVm") return 5; // même position que IV
  if (degree === "IIm7" || degree === "II") return 2;
  if (degree === "IIm7b5" || degree === "IIø" || degree === "ii°") return 2;
  if (degree === "Im7" || degree === "i") return 0;
  if (degree === "IMaj7") return 0;

  const map = mode === "major" ? MAJOR_DEGREES : MINOR_DEGREES;
  const key = degree.replace("m7","").replace("Maj7","").replace("7","").replace("m7b5","").replace("dim7","");

  // Cherche dans la map
  for (const [k, v] of Object.entries(map)) {
    if (k.toLowerCase() === key.toLowerCase() || k === degree) return v;
  }

  // Fallback : parser les degrés romains
  const semitones: Record<string,number> = {
    "I":0,"II":2,"III":4,"IV":5,"V":7,"VI":9,"VII":11,
    "i":0,"ii":2,"iii":3,"iv":5,"v":7,"vi":8,"vii":10,
    "III":3,"VI":8,"VII":10,
  };
  return semitones[key] ?? 0;
}

// ─── Calcul du voicing SATB ───────────────────────────────────────────────────

/**
 * Positions disponibles pour le soprano :
 * 0 = fondamentale, 1 = tierce, 2 = quinte, 3 = septième
 */
type Position = 0 | 1 | 2 | 3;

const POSITION_LABELS: Record<Position, string> = {
  0: "Fondamentale au soprano",
  1: "Tierce au soprano",
  2: "Quinte au soprano",
  3: "Septième au soprano",
};

const POSITION_SHORT: Record<Position, string> = {
  0: "1 au S", 1: "3 au S", 2: "5 au S", 3: "7 au S",
};

/**
 * Tessitures par voix (en MIDI, C4 = 60)
 */
const RANGES = {
  soprano: { min: 60, max: 79 }, // C4–G5
  alto:    { min: 55, max: 72 }, // G3–C5
  tenor:   { min: 48, max: 67 }, // C3–G4
  bass:    { min: 40, max: 60 }, // E2–C4
};

function noteToMidi(name: string, octave: number): number {
  return noteIndex(name) + (octave + 1) * 12;
}

function midiToNote(midi: number): { name: string; octave: number } {
  const oct  = Math.floor(midi / 12) - 1;
  const idx  = ((midi % 12) + 12) % 12;
  return { name: CHROMATIC[idx], octave: oct };
}

/**
 * Calcule le voicing SATB optimal pour un accord donné avec une position soprano
 */
function computeVoicing(
  rootNote: string,
  intervals: [number, number, number, number],
  sopranoPosition: Position,
): SATBMeasure | null {
  // Notes de l'accord (4 intervalles depuis la fondamentale)
  const chordNotes = intervals.map(int => noteIndex(rootNote) + int);

  // Note cible du soprano
  const sopranoPcIdx = ((chordNotes[sopranoPosition] % 12) + 12) % 12;

  // Trouver une hauteur soprano dans la tessiture
  let sopMidi = -1;
  for (let oct = 4; oct <= 5; oct++) {
    const m = sopranoPcIdx + (oct + 1) * 12;
    if (m >= RANGES.soprano.min && m <= RANGES.soprano.max) {
      sopMidi = m;
      break;
    }
  }
  if (sopMidi === -1) return null;

  // Basse = fondamentale (état fondamental)
  const bassPcIdx = ((chordNotes[0] % 12) + 12) % 12;
  let bassMidi = -1;
  for (let oct = 2; oct <= 3; oct++) {
    const m = bassPcIdx + (oct + 1) * 12;
    if (m >= RANGES.bass.min && m <= RANGES.bass.max) {
      bassMidi = m;
      break;
    }
  }
  if (bassMidi === -1) return null;

  // Alto et ténor — les deux notes restantes de l'accord
  const remaining = [0, 1, 2, 3].filter(i => i !== sopranoPosition && i !== 0);
  // Choisir 2 notes pour alto et ténor (toujours 4 notes dans un accord de 7e)
  // Si accord à 3 sons (triade), on double une note
  const altoTargetPc  = ((chordNotes[remaining[0] % remaining.length] % 12) + 12) % 12;
  const tenorTargetPc = ((chordNotes[remaining[1] % remaining.length] % 12) + 12) % 12;

  // Alto : entre la basse et le soprano, dans sa tessiture
  let altoMidi = -1;
  for (let oct = 3; oct <= 4; oct++) {
    const m = altoTargetPc + (oct + 1) * 12;
    if (m >= RANGES.alto.min && m <= RANGES.alto.max && m < sopMidi) {
      altoMidi = m;
      break;
    }
  }

  // Ténor : entre la basse et l'alto
  let tenorMidi = -1;
  for (let oct = 3; oct <= 4; oct++) {
    const m = tenorTargetPc + (oct + 1) * 12;
    if (m >= RANGES.tenor.min && m <= RANGES.tenor.max && m < (altoMidi !== -1 ? altoMidi : sopMidi)) {
      tenorMidi = m;
      break;
    }
  }

  if (altoMidi === -1 || tenorMidi === -1) return null;

  // Vérifier espacements
  if (sopMidi - altoMidi > 12)  return null; // S-A max 1 octave
  if (altoMidi - tenorMidi > 12) return null; // A-T max 1 octave

  const toEntry = (midi: number): NoteEntry => {
    const { name, octave } = midiToNote(midi);
    return { name, octave };
  };

  return {
    soprano: toEntry(sopMidi),
    alto:    toEntry(altoMidi),
    tenor:   toEntry(tenorMidi),
    bass:    toEntry(bassMidi),
  };
}

// ─── Données des tonalités ────────────────────────────────────────────────────

interface KeyData {
  id: string;
  root: string;
  label: string;
  mode: "major" | "minor";
  keySignature: string;
  cours: number; // cours associé (informatif)
}

const MAJOR_KEY_DATA: KeyData[] = [
  { id:"C",  root:"C",  label:"Do majeur",  mode:"major", keySignature:"C",  cours:0 },
  { id:"G",  root:"G",  label:"Sol majeur", mode:"major", keySignature:"G",  cours:0 },
  { id:"D",  root:"D",  label:"Ré majeur",  mode:"major", keySignature:"D",  cours:0 },
  { id:"A",  root:"A",  label:"La majeur",  mode:"major", keySignature:"A",  cours:0 },
  { id:"E",  root:"E",  label:"Mi majeur",  mode:"major", keySignature:"E",  cours:0 },
  { id:"B",  root:"B",  label:"Si majeur",  mode:"major", keySignature:"B",  cours:0 },
  { id:"F#", root:"F#", label:"Fa# majeur", mode:"major", keySignature:"F#", cours:0 },
  { id:"F",  root:"F",  label:"Fa majeur",  mode:"major", keySignature:"F",  cours:0 },
  { id:"Bb", root:"Bb", label:"Sib majeur", mode:"major", keySignature:"Bb", cours:0 },
  { id:"Eb", root:"Eb", label:"Mib majeur", mode:"major", keySignature:"Eb", cours:0 },
  { id:"Ab", root:"Ab", label:"Lab majeur", mode:"major", keySignature:"Ab", cours:0 },
  { id:"Db", root:"Db", label:"Réb majeur", mode:"major", keySignature:"Db", cours:0 },
];

const MINOR_KEY_DATA: KeyData[] = [
  { id:"Am",  root:"A",  label:"La mineur",  mode:"minor", keySignature:"C",  cours:0 },
  { id:"Em",  root:"E",  label:"Mi mineur",  mode:"minor", keySignature:"G",  cours:0 },
  { id:"Bm",  root:"B",  label:"Si mineur",  mode:"minor", keySignature:"D",  cours:0 },
  { id:"F#m", root:"F#", label:"Fa# mineur", mode:"minor", keySignature:"A",  cours:0 },
  { id:"C#m", root:"C#", label:"Do# mineur", mode:"minor", keySignature:"E",  cours:0 },
  { id:"G#m", root:"G#", label:"Sol# mineur",mode:"minor", keySignature:"B",  cours:0 },
  { id:"Dm",  root:"D",  label:"Ré mineur",  mode:"minor", keySignature:"F",  cours:0 },
  { id:"Gm",  root:"G",  label:"Sol mineur", mode:"minor", keySignature:"Bb", cours:0 },
  { id:"Cm",  root:"C",  label:"Do mineur",  mode:"minor", keySignature:"Eb", cours:0 },
  { id:"Fm",  root:"F",  label:"Fa mineur",  mode:"minor", keySignature:"Ab", cours:0 },
  { id:"Bbm", root:"Bb", label:"Sib mineur", mode:"minor", keySignature:"Db", cours:0 },
  { id:"Ebm", root:"Eb", label:"Mib mineur", mode:"minor", keySignature:"Gb", cours:0 },
];

const ALL_KEY_DATA = [...MAJOR_KEY_DATA, ...MINOR_KEY_DATA];

// ─── Générateur principal ─────────────────────────────────────────────────────

/**
 * Génère tous les exercices pour un template dans toutes les tonalités applicables
 */
export function generateExercisesForTemplate(
  template: ProgressionTemplate,
  positions: Position[] = [0, 1, 2, 3],
): SATBExercise[] {
  const exercises: SATBExercise[] = [];
  const keys = ALL_KEY_DATA.filter(k => template.modes.includes(k.mode));

  for (const key of keys) {
    for (const position of positions) {
      const solution: SATBMeasure[] = [];
      const measureLabels: string[] = [];
      let valid = true;

      // Calculer le voicing de chaque mesure
      for (let ci = 0; ci < template.chords.length; ci++) {
        const chord = template.chords[ci];

        // Calculer la fondamentale de l'accord dans cette tonalité
        const degreeSemitones = degreeToSemitones(chord.degreeLabel, key.mode);

        // Transposer depuis la tonique de la gamme
        const chordRoot = transposeNote(key.root, 4, degreeSemitones);

        // V/V : dominante de la dominante = sur le IIe degré de la gamme
        const effectiveIntervals: [number,number,number,number] =
          chord.degreeLabel === "V/V" ? INT["7"] :
          chord.degreeLabel === "IVm" ? INT.m     :
          chord.intervals;

        // Calculer le voicing SATB
        // Pour la première mesure, on utilise la position demandée
        // Pour les mesures suivantes, on optimise par notes communes
        const pos: Position = ci === 0 ? position : bestNextPosition(solution, chordRoot.name, effectiveIntervals);
        const voicing = computeVoicing(chordRoot.name, effectiveIntervals, pos);

        if (!voicing) { valid = false; break; }

        solution.push(voicing);
        measureLabels.push(`${chord.degreeLabel} · ${chordRoot.name}${chord.quality !== "M" && chord.quality !== "m" ? chord.quality : chord.quality === "m" ? "m" : ""}`);
      }

      if (!valid || solution.length === 0) continue;

      const posLabel = POSITION_SHORT[position];
      const difficulty = template.difficulty;

      exercises.push({
        id: `gen-${template.id}-${key.id}-pos${position}`,
        type: "satb",
        cours: template.cours,
        title: `${template.title} en ${key.label}`,
        subtitle: `${posLabel} · ${key.label}`,
        difficulty,
        tags: [...template.tags, key.label, posLabel],
        keySignature: key.keySignature,
        measures: measureLabels,
        solution,
        hint: template.hint,
        explanation: template.explanation,
        concepts: template.concepts,
      });
    }
  }

  return exercises;
}

/**
 * Trouve la meilleure position pour la prochaine mesure
 * (minimise le mouvement total des voix)
 */
function bestNextPosition(
  prevMeasures: SATBMeasure[],
  rootNote: string,
  intervals: [number,number,number,number],
): Position {
  if (prevMeasures.length === 0) return 3; // défaut : septième au soprano

  const prev = prevMeasures[prevMeasures.length - 1];
  const prevSopMidi = noteToMidi(prev.soprano.name!, prev.soprano.octave);

  let bestPos: Position = 0;
  let minMovement = Infinity;

  for (const pos of [0, 1, 2, 3] as Position[]) {
    const voicing = computeVoicing(rootNote, intervals, pos);
    if (!voicing || !voicing.soprano.name) continue;

    const sopMidi = noteToMidi(voicing.soprano.name, voicing.soprano.octave);
    const movement = Math.abs(sopMidi - prevSopMidi);

    if (movement < minMovement) {
      minMovement = movement;
      bestPos = pos;
    }
  }

  return bestPos;
}

/**
 * Génère TOUS les exercices pour tous les templates
 */
export function generateAllExercises(): SATBExercise[] {
  const all: SATBExercise[] = [];

  for (const template of PROGRESSION_TEMPLATES) {
    // Niveau 1 : position 3 (septième au soprano) — la plus guidée
    // Niveau 2 : positions 0, 1, 2, 3
    // Niveau 3 : toutes les positions
    const positions: Position[] = template.difficulty === 1
      ? [3, 1]
      : template.difficulty === 2
      ? [0, 1, 2, 3]
      : [0, 1, 2, 3];

    const generated = generateExercisesForTemplate(template, positions);
    all.push(...generated);
  }

  return all;
}

// Export des positions pour l'UI
export { POSITION_LABELS, POSITION_SHORT };
export type { Position, ProgressionTemplate };