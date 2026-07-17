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
import { validateSATB } from "@/lib/satb-rules";
import type { Measure } from "@/lib/satb-rules";
import { voiceProgression, type ChordSpec } from "@/lib/voicing-ecole";

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
  /** Régime de règles (défaut « ecole ») — les templates générés sont tous tonals. */
  regles?: "ecole" | "libre";
}

/** Une note SATB calculée */
interface NoteEntry { name: string | null; octave: number; }
type SATBMeasure = { soprano: NoteEntry; alto: NoteEntry; tenor: NoteEntry; bass: NoteEntry };

// ─── Ordre chromatique ────────────────────────────────────────────────────────

const CHROMATIC = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];

const SHARP_TO_FLAT: Record<string, string> = {
  "C#": "Db", "D#": "Eb", "F#": "Gb", "G#": "Ab", "A#": "Bb",
};

// Tonalités dont l'armure s'écrit en bémols — majeures ET mineures (la signature
// mineure porte désormais son vrai nom « Xm », cf. MINOR_KEY_DATA).
const FLAT_KEYS = new Set([
  "F", "Bb", "Eb", "Ab", "Db", "Gb",
  "Dm", "Gm", "Cm", "Fm", "Bbm", "Ebm",
]);

function noteIndex(note: string): number {
  const map: Record<string,number> = {
    "C":0,"C#":1,"Db":1,"D":2,"D#":3,"Eb":3,"E":4,"Fb":4,
    "F":5,"E#":5,"F#":6,"Gb":6,"G":7,"G#":8,"Ab":8,
    "A":9,"A#":10,"Bb":10,"B":11,"Cb":11,"B#":0,
  };
  return map[note] ?? 0;
}

/** Transposes une note de `semitones` demi-tons, retourne note + octave */
function transposeNote(rootNote: string, rootOctave: number, semitones: number, useFlats = false): { name: string; octave: number } {
  const base = noteIndex(rootNote);
  const total = base + semitones;
  const oct   = rootOctave + Math.floor(total / 12);
  const idx   = ((total % 12) + 12) % 12;
  const sharp = CHROMATIC[idx];
  return { name: useFlats ? (SHARP_TO_FLAT[sharp] ?? sharp) : sharp, octave: oct };
}

// ─── Orthographe de la sensible en mineur ─────────────────────────────────────
//
// La sensible (7e degré HAUSSÉ) d'un mineur en bémols doit s'écrire comme un
// dièse/naturel du 7e degré, jamais comme un bémol : en Ré mineur c'est un DO#
// (et non Réb), en Do mineur un SI naturel, etc. — même si la tonalité est en
// bémols. Fix ciblé : quand une hauteur produite tombe sur la sensible, on force
// l'orthographe correcte du 7e degré (repli sur l'orthographe par défaut si elle
// exigerait une graphie exotique — E#, B#, F## — que le moteur ne gère pas).

const LETTERS = ["C", "D", "E", "F", "G", "A", "B"];
const LETTER_PC: Record<string, number> = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };

/** Noms de notes que le moteur (noteToMidi) et le rendu savent lire sans risque. */
const SAFE_NAMES = new Set([...CHROMATIC, ...Object.values(SHARP_TO_FLAT)]);

/** Orthographe du 7e degré haussé (sensible) d'une tonalité mineure. */
function raisedSeventhSpelling(tonicRoot: string, ltPc: number): string {
  const idx = LETTERS.indexOf(tonicRoot[0]);
  const seventhLetter = LETTERS[(idx + 6) % 7]; // lettre juste sous la tonique
  const diff = ((ltPc - LETTER_PC[seventhLetter]) % 12 + 12) % 12;
  const acc = diff === 0 ? "" : diff === 1 ? "#" : diff === 2 ? "##" : "";
  return seventhLetter + acc;
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

// ─── Déclinaison mineure des gabarits both-mode ───────────────────────────────
//
// Les gabarits marqués modes:["major","minor"] écrivaient leurs accords avec les
// QUALITÉS MAJEURES, transposées telles quelles en mineur — d'où des i/iv MAJEURS,
// un VI mineur, un IIm7 au lieu du iiø7 : 192 exercices mineurs non diatoniques.
// On corrige à la donnée : chaque degré reçoit sa qualité DIATONIQUE au mineur
// harmonique. Clé = degreeLabel du gabarit ; les degrés absents (V7, V/V) restent
// inchangés — la dominante porte déjà sa sensible haussée, la dominante secondaire
// est chromatique par nature.
const MINOR_DECLENSION: Record<string, {
  degreeLabel: string;
  intervals: [number, number, number, number];
  quality: string;
}> = {
  "I":    { degreeLabel: "i",    intervals: INT.m,    quality: "m"    }, // tonique mineure
  "IV":   { degreeLabel: "iv",   intervals: INT.m,    quality: "m"    }, // sous-dominante mineure
  "VI":   { degreeLabel: "VI",   intervals: INT.M,    quality: "M"    }, // VI MAJEUR (rompue authentique)
  "IIm7": { degreeLabel: "iiø7", intervals: INT.m7b5, quality: "m7b5" }, // demi-diminué
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
    // V/V = dominante de la dominante : sa fondamentale est sur le IIe degré
    // (tonique + 2). En Do → Ré (Ré7 → Sol7) ; en la min → Si (Si7 → Mi7).
    // La qualité (7e de dominante, tierce haussée = sensible de V) est posée par
    // le générateur (effIntervals = INT["7"]).
    return 2;
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

function midiToNote(midi: number, useFlats = false): { name: string; octave: number } {
  const oct  = Math.floor(midi / 12) - 1;
  const idx  = ((midi % 12) + 12) % 12;
  const sharp = CHROMATIC[idx];
  return { name: useFlats ? (SHARP_TO_FLAT[sharp] ?? sharp) : sharp, octave: oct };
}

// ─── R2a — voicings complets et conduite des voix ─────────────────────────────
//
// L'ancien `computeVoicing` distribuait alto/ténor par modulo (`chordNotes[i %
// n]`) : il produisait des accords dégénérés (7e à deux sons, sensible doublée)
// et n'assurait aucune conduite d'une mesure à l'autre — d'où les 134 sensibles
// doublées et 143 parallèles relevées à l'audit. Le moteur (recherche en
// profondeur avec retour arrière, rejets durs des parallèles/sensible/7e/
// directes) vit désormais dans le module PARTAGÉ `@/lib/voicing-ecole`, importé
// aussi par le générateur de la page /generateur-satb. Ce fichier ne garde que
// la construction du `ChordSpec` à partir de sa représentation [intervalles,
// qualité]. Ce que le DFS ne peut pas rendre propre, l'auto-filtrage (R2b)
// l'écarte.

/** Qualités dont la quinte (juste) peut être ellipsée — miroir de harmonic-analysis. */
const FIFTH_OMISSIBLE_QUALITIES = new Set(["M", "m", "7", "m7", "Maj7"]);

function chordSpec(
  rootNote: string,
  intervals: [number, number, number, number],
  quality: string,
): ChordSpec {
  const base = noteIndex(rootNote);
  const rootPc = base % 12;
  const thirdPc = (base + intervals[1]) % 12;
  const fifthPc = (base + intervals[2]) % 12;
  const isSeventh = intervals[3] !== intervals[2]; // les triades répètent la quinte
  const seventhPc = isSeventh ? (base + intervals[3]) % 12 : null;
  const pcs = isSeventh
    ? [rootPc, thirdPc, fifthPc, seventhPc as number]
    : [rootPc, thirdPc, fifthPc];
  return {
    rootPc, thirdPc, fifthPc, seventhPc,
    pcs: [...new Set(pcs)],
    fifthOmissible: FIFTH_OMISSIBLE_QUALITIES.has(quality),
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

// R1 — chaque tonalité mineure porte sa VRAIE signature (« Am », « Dm »…), et non
// plus celle de son relatif majeur. L'armure affichée est identique (relatifs de
// mêmes altérations) — les tonalités mineures sont passées sous la forme « Xm »,
// `KEY_ACCIDENTALS` les connaît, et `tonaliteDeSignature` en lit la vraie tonique :
// les règles de sensible s'arment désormais sur le bon degré.
const MINOR_KEY_DATA: KeyData[] = [
  { id:"Am",  root:"A",  label:"La mineur",  mode:"minor", keySignature:"Am",  cours:0 },
  { id:"Em",  root:"E",  label:"Mi mineur",  mode:"minor", keySignature:"Em",  cours:0 },
  { id:"Bm",  root:"B",  label:"Si mineur",  mode:"minor", keySignature:"Bm",  cours:0 },
  { id:"F#m", root:"F#", label:"Fa# mineur", mode:"minor", keySignature:"F#m", cours:0 },
  { id:"C#m", root:"C#", label:"Do# mineur", mode:"minor", keySignature:"C#m", cours:0 },
  { id:"G#m", root:"G#", label:"Sol# mineur",mode:"minor", keySignature:"G#m", cours:0 },
  { id:"Dm",  root:"D",  label:"Ré mineur",  mode:"minor", keySignature:"Dm",  cours:0 },
  { id:"Gm",  root:"G",  label:"Sol mineur", mode:"minor", keySignature:"Gm",  cours:0 },
  { id:"Cm",  root:"C",  label:"Do mineur",  mode:"minor", keySignature:"Cm",  cours:0 },
  { id:"Fm",  root:"F",  label:"Fa mineur",  mode:"minor", keySignature:"Fm",  cours:0 },
  { id:"Bbm", root:"Bb", label:"Sib mineur", mode:"minor", keySignature:"Bbm", cours:0 },
  { id:"Ebm", root:"Eb", label:"Mib mineur", mode:"minor", keySignature:"Ebm", cours:0 },
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
    const useFlats = FLAT_KEYS.has(key.keySignature);
    const tonicPc = noteIndex(key.root);
    const minor = key.mode === "minor";

    // Sensible (7e degré haussé) à orthographier juste en mineur — seulement si la
    // graphie du 7e degré est « sûre » (sinon repli sur l'orthographe par défaut).
    const ltPc = minor ? (tonicPc + 11) % 12 : -1;
    const ltName = minor ? raisedSeventhSpelling(key.root, ltPc) : "";
    const ltForce = minor && SAFE_NAMES.has(ltName);
    const toEntry = (midi: number): NoteEntry => {
      const base = midiToNote(midi, useFlats);
      return ltForce && ((midi % 12) + 12) % 12 === ltPc ? { name: ltName, octave: base.octave } : base;
    };

    for (const position of positions) {
      // Préparer chaque accord : fondamentale transposée, intervalles/qualité effectifs.
      const chordInfos = template.chords.map(chord => {
        const degreeSemitones = degreeToSemitones(chord.degreeLabel, key.mode);
        const chordRoot = transposeNote(key.root, 4, degreeSemitones, useFlats);
        // En mineur : qualité diatoniquement correcte (i/iv mineurs, VI majeur,
        // iiø7). V7/V/V restent inchangés. En majeur : V/V → 7e de dominante,
        // IVm → triade mineure (emprunt).
        const decl = minor ? MINOR_DECLENSION[chord.degreeLabel] : undefined;
        const effIntervals: [number,number,number,number] =
          decl ? decl.intervals :
          chord.degreeLabel === "V/V" ? INT["7"] :
          chord.degreeLabel === "IVm" ? INT.m     :
          chord.intervals;
        const effQuality =
          decl ? decl.quality :
          chord.degreeLabel === "V/V" ? "7" :
          chord.degreeLabel === "IVm" ? "m" :
          chord.quality;
        const degreeLabel = decl ? decl.degreeLabel : chord.degreeLabel;
        return { degreeLabel, chordRoot, effIntervals, effQuality };
      });

      const specs = chordInfos.map((ci, idx) => {
        const spec = chordSpec(ci.chordRoot.name, ci.effIntervals, ci.effQuality);
        return {
          spec,
          // Le soprano n'est imposé (position demandée) que sur la PREMIÈRE mesure.
          firstSopranoPc:
            idx === 0 ? (noteIndex(ci.chordRoot.name) + ci.effIntervals[position]) % 12 : 0,
          // Le corpus est en état fondamental : la basse porte toujours la fondamentale.
          bassPc: spec.rootPc,
        };
      });

      const voiced = voiceProgression(specs, tonicPc, minor);
      if (!voiced) continue; // aucune conduite légale : combinaison abandonnée

      const solution: SATBMeasure[] = voiced.map(vm => ({
        soprano: toEntry(vm.soprano),
        alto:    toEntry(vm.alto),
        tenor:   toEntry(vm.tenor),
        bass:    toEntry(vm.bass),
      }));

      const measureLabels = chordInfos.map(ci =>
        `${ci.degreeLabel} · ${ci.chordRoot.name}${ci.effQuality !== "M" && ci.effQuality !== "m" ? ci.effQuality : ci.effQuality === "m" ? "m" : ""}`,
      );

      // R2b — auto-filtrage : la solution doit passer le juge contre elle-même
      // sans AUCUNE erreur bloquante. Filet silencieux (le test d'invariant fait foi).
      const errs = validateSATB(
        solution as Measure[], key.keySignature, false, solution as Measure[], template.regles ?? "ecole",
      ).filter(e => e.severity === "error");
      if (errs.length > 0) continue;

      const posLabel = POSITION_SHORT[position];

      exercises.push({
        id: `gen-${template.id}-${key.id}-pos${position}`,
        type: "satb",
        cours: template.cours,
        title: `${template.title} en ${key.label}`,
        subtitle: `${posLabel} · ${key.label}`,
        difficulty: template.difficulty,
        tags: [...template.tags, key.label, posLabel],
        keySignature: key.keySignature,
        measures: measureLabels,
        solution: solution as SATBExercise["solution"],
        hint: template.hint,
        explanation: template.explanation,
        concepts: template.concepts,
        ...(template.regles ? { regles: template.regles } : {}),
      });
    }
  }

  return exercises;
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