/**
 * data/tonalites.ts
 * Harmonia — Données complètes des 24 tonalités (12 majeures + 12 mineures)
 */

export type NoteAlter = "natural" | "sharp" | "flat";

export interface KeyNote {
  name: string;      // Nom de la note (C, D, Eb, F#...)
  solfege: string;   // Nom solfège (Do, Ré, Mib, Fa#...)
  alter: NoteAlter;
}

export interface DiatonicChord {
  degree: string;    // "I", "ii", "iii", "IV", "V", "vi", "vii°"
  name: string;      // "C", "Dm", "G7"...
  quality: "major" | "minor" | "diminished" | "augmented" | "dominant7" | "major7" | "minor7" | "halfDim";
  function: "T" | "SD" | "D" | "?";
}

export interface Tonalite {
  id: string;
  name: string;           // "C major"
  label: string;          // "Do majeur"
  labelShort: string;     // "Do M"
  mode: "major" | "minor";
  root: string;           // "C"
  rootSolfege: string;    // "Do"
  sharps: number;         // nombre de dièses (0-7)
  flats: number;          // nombre de bémols (0-7)
  keySignatureNotes: string[];  // notes altérées à la clé
  scale: string[];        // 7 notes de la gamme
  scaleSolfege: string[]; // en solfège
  relativeMajor?: string; // pour les mineures
  relativeMinor?: string; // pour les majeures
  parallel?: string;      // tonalité homonyme (C major ↔ C minor)
  chords: DiatonicChord[];
  tips: string[];         // astuces mnémotechniques
}

// ─── Gammes majeures ──────────────────────────────────────────────────────────

export const MAJOR_KEYS: Tonalite[] = [
  {
    id: "C",
    name: "C major", label: "Do majeur", labelShort: "Do M",
    mode: "major", root: "C", rootSolfege: "Do",
    sharps: 0, flats: 0, keySignatureNotes: [],
    scale: ["C","D","E","F","G","A","B"],
    scaleSolfege: ["Do","Ré","Mi","Fa","Sol","La","Si"],
    relativeMinor: "Am",
    parallel: "Cm",
    chords: [
      { degree:"I",    name:"C",    quality:"major",   function:"T"  },
      { degree:"ii",   name:"Dm",   quality:"minor",   function:"SD" },
      { degree:"iii",  name:"Em",   quality:"minor",   function:"?"  },
      { degree:"IV",   name:"F",    quality:"major",   function:"SD" },
      { degree:"V",    name:"G7",   quality:"dominant7",function:"D" },
      { degree:"vi",   name:"Am",   quality:"minor",   function:"T"  },
      { degree:"vii°", name:"Bdim", quality:"diminished",function:"D"},
    ],
    tips: ["Aucune altération — la tonalité de référence","Le triton fonctionnel : Fa–Si (F–B)"],
  },
  {
    id: "G",
    name: "G major", label: "Sol majeur", labelShort: "Sol M",
    mode: "major", root: "G", rootSolfege: "Sol",
    sharps: 1, flats: 0, keySignatureNotes: ["F#"],
    scale: ["G","A","B","C","D","E","F#"],
    scaleSolfege: ["Sol","La","Si","Do","Ré","Mi","Fa#"],
    relativeMinor: "Em",
    parallel: "Gm",
    chords: [
      { degree:"I",    name:"G",    quality:"major",    function:"T"  },
      { degree:"ii",   name:"Am",   quality:"minor",    function:"SD" },
      { degree:"iii",  name:"Bm",   quality:"minor",    function:"?"  },
      { degree:"IV",   name:"C",    quality:"major",    function:"SD" },
      { degree:"V",    name:"D7",   quality:"dominant7",function:"D"  },
      { degree:"vi",   name:"Em",   quality:"minor",    function:"T"  },
      { degree:"vii°", name:"F#dim",quality:"diminished",function:"D" },
    ],
    tips: ["1 dièse : F#","Triton fonctionnel : C–F# (Do–Fa#)","Astuce : 1 dièse = tonique à la quinte de Do"],
  },
  {
    id: "D",
    name: "D major", label: "Ré majeur", labelShort: "Ré M",
    mode: "major", root: "D", rootSolfege: "Ré",
    sharps: 2, flats: 0, keySignatureNotes: ["F#","C#"],
    scale: ["D","E","F#","G","A","B","C#"],
    scaleSolfege: ["Ré","Mi","Fa#","Sol","La","Si","Do#"],
    relativeMinor: "Bm",
    parallel: "Dm",
    chords: [
      { degree:"I",    name:"D",    quality:"major",    function:"T"  },
      { degree:"ii",   name:"Em",   quality:"minor",    function:"SD" },
      { degree:"iii",  name:"F#m",  quality:"minor",    function:"?"  },
      { degree:"IV",   name:"G",    quality:"major",    function:"SD" },
      { degree:"V",    name:"A7",   quality:"dominant7",function:"D"  },
      { degree:"vi",   name:"Bm",   quality:"minor",    function:"T"  },
      { degree:"vii°", name:"C#dim",quality:"diminished",function:"D" },
    ],
    tips: ["2 dièses : F# C#","Triton fonctionnel : G–C# (Sol–Do#)"],
  },
  {
    id: "A",
    name: "A major", label: "La majeur", labelShort: "La M",
    mode: "major", root: "A", rootSolfege: "La",
    sharps: 3, flats: 0, keySignatureNotes: ["F#","C#","G#"],
    scale: ["A","B","C#","D","E","F#","G#"],
    scaleSolfege: ["La","Si","Do#","Ré","Mi","Fa#","Sol#"],
    relativeMinor: "F#m",
    parallel: "Am",
    chords: [
      { degree:"I",    name:"A",    quality:"major",    function:"T"  },
      { degree:"ii",   name:"Bm",   quality:"minor",    function:"SD" },
      { degree:"iii",  name:"C#m",  quality:"minor",    function:"?"  },
      { degree:"IV",   name:"D",    quality:"major",    function:"SD" },
      { degree:"V",    name:"E7",   quality:"dominant7",function:"D"  },
      { degree:"vi",   name:"F#m",  quality:"minor",    function:"T"  },
      { degree:"vii°", name:"G#dim",quality:"diminished",function:"D" },
    ],
    tips: ["3 dièses : F# C# G#","Triton fonctionnel : D–G# (Ré–Sol#)"],
  },
  {
    id: "E",
    name: "E major", label: "Mi majeur", labelShort: "Mi M",
    mode: "major", root: "E", rootSolfege: "Mi",
    sharps: 4, flats: 0, keySignatureNotes: ["F#","C#","G#","D#"],
    scale: ["E","F#","G#","A","B","C#","D#"],
    scaleSolfege: ["Mi","Fa#","Sol#","La","Si","Do#","Ré#"],
    relativeMinor: "C#m",
    parallel: "Em",
    chords: [
      { degree:"I",    name:"E",    quality:"major",    function:"T"  },
      { degree:"ii",   name:"F#m",  quality:"minor",    function:"SD" },
      { degree:"iii",  name:"G#m",  quality:"minor",    function:"?"  },
      { degree:"IV",   name:"A",    quality:"major",    function:"SD" },
      { degree:"V",    name:"B7",   quality:"dominant7",function:"D"  },
      { degree:"vi",   name:"C#m",  quality:"minor",    function:"T"  },
      { degree:"vii°", name:"D#dim",quality:"diminished",function:"D" },
    ],
    tips: ["4 dièses : F# C# G# D#","Triton fonctionnel : A–D# (La–Ré#)"],
  },
  {
    id: "B",
    name: "B major", label: "Si majeur", labelShort: "Si M",
    mode: "major", root: "B", rootSolfege: "Si",
    sharps: 5, flats: 0, keySignatureNotes: ["F#","C#","G#","D#","A#"],
    scale: ["B","C#","D#","E","F#","G#","A#"],
    scaleSolfege: ["Si","Do#","Ré#","Mi","Fa#","Sol#","La#"],
    relativeMinor: "G#m",
    parallel: "Bm",
    chords: [
      { degree:"I",    name:"B",    quality:"major",    function:"T"  },
      { degree:"ii",   name:"C#m",  quality:"minor",    function:"SD" },
      { degree:"iii",  name:"D#m",  quality:"minor",    function:"?"  },
      { degree:"IV",   name:"E",    quality:"major",    function:"SD" },
      { degree:"V",    name:"F#7",  quality:"dominant7",function:"D"  },
      { degree:"vi",   name:"G#m",  quality:"minor",    function:"T"  },
      { degree:"vii°", name:"A#dim",quality:"diminished",function:"D" },
    ],
    tips: ["5 dièses : F# C# G# D# A#","Enharmonique de Cb majeur (7 bémols)"],
  },
  {
    id: "F#",
    name: "F# major", label: "Fa# majeur", labelShort: "Fa# M",
    mode: "major", root: "F#", rootSolfege: "Fa#",
    sharps: 6, flats: 0, keySignatureNotes: ["F#","C#","G#","D#","A#","E#"],
    scale: ["F#","G#","A#","B","C#","D#","E#"],
    scaleSolfege: ["Fa#","Sol#","La#","Si","Do#","Ré#","Mi#"],
    relativeMinor: "D#m",
    parallel: "F#m",
    chords: [
      { degree:"I",    name:"F#",   quality:"major",    function:"T"  },
      { degree:"ii",   name:"G#m",  quality:"minor",    function:"SD" },
      { degree:"iii",  name:"A#m",  quality:"minor",    function:"?"  },
      { degree:"IV",   name:"B",    quality:"major",    function:"SD" },
      { degree:"V",    name:"C#7",  quality:"dominant7",function:"D"  },
      { degree:"vi",   name:"D#m",  quality:"minor",    function:"T"  },
      { degree:"vii°", name:"E#dim",quality:"diminished",function:"D" },
    ],
    tips: ["6 dièses : F# C# G# D# A# E#","Enharmonique de Gb majeur (6 bémols)"],
  },
  {
    id: "Db",
    name: "Db major", label: "Réb majeur", labelShort: "Réb M",
    mode: "major", root: "Db", rootSolfege: "Réb",
    sharps: 0, flats: 5, keySignatureNotes: ["Bb","Eb","Ab","Db","Gb"],
    scale: ["Db","Eb","F","Gb","Ab","Bb","C"],
    scaleSolfege: ["Réb","Mib","Fa","Solb","Lab","Sib","Do"],
    relativeMinor: "Bbm",
    parallel: "Dbm",
    chords: [
      { degree:"I",    name:"Db",   quality:"major",    function:"T"  },
      { degree:"ii",   name:"Ebm",  quality:"minor",    function:"SD" },
      { degree:"iii",  name:"Fm",   quality:"minor",    function:"?"  },
      { degree:"IV",   name:"Gb",   quality:"major",    function:"SD" },
      { degree:"V",    name:"Ab7",  quality:"dominant7",function:"D"  },
      { degree:"vi",   name:"Bbm",  quality:"minor",    function:"T"  },
      { degree:"vii°", name:"Cdim", quality:"diminished",function:"D" },
    ],
    tips: ["5 bémols : Bb Eb Ab Db Gb","Enharmonique de C# majeur (7 dièses)"],
  },
  {
    id: "Ab",
    name: "Ab major", label: "Lab majeur", labelShort: "Lab M",
    mode: "major", root: "Ab", rootSolfege: "Lab",
    sharps: 0, flats: 4, keySignatureNotes: ["Bb","Eb","Ab","Db"],
    scale: ["Ab","Bb","C","Db","Eb","F","G"],
    scaleSolfege: ["Lab","Sib","Do","Réb","Mib","Fa","Sol"],
    relativeMinor: "Fm",
    parallel: "Abm",
    chords: [
      { degree:"I",    name:"Ab",   quality:"major",    function:"T"  },
      { degree:"ii",   name:"Bbm",  quality:"minor",    function:"SD" },
      { degree:"iii",  name:"Cm",   quality:"minor",    function:"?"  },
      { degree:"IV",   name:"Db",   quality:"major",    function:"SD" },
      { degree:"V",    name:"Eb7",  quality:"dominant7",function:"D"  },
      { degree:"vi",   name:"Fm",   quality:"minor",    function:"T"  },
      { degree:"vii°", name:"Gdim", quality:"diminished",function:"D" },
    ],
    tips: ["4 bémols : Bb Eb Ab Db","Triton fonctionnel : Db–G (Réb–Sol)"],
  },
  {
    id: "Eb",
    name: "Eb major", label: "Mib majeur", labelShort: "Mib M",
    mode: "major", root: "Eb", rootSolfege: "Mib",
    sharps: 0, flats: 3, keySignatureNotes: ["Bb","Eb","Ab"],
    scale: ["Eb","F","G","Ab","Bb","C","D"],
    scaleSolfege: ["Mib","Fa","Sol","Lab","Sib","Do","Ré"],
    relativeMinor: "Cm",
    parallel: "Ebm",
    chords: [
      { degree:"I",    name:"Eb",   quality:"major",    function:"T"  },
      { degree:"ii",   name:"Fm",   quality:"minor",    function:"SD" },
      { degree:"iii",  name:"Gm",   quality:"minor",    function:"?"  },
      { degree:"IV",   name:"Ab",   quality:"major",    function:"SD" },
      { degree:"V",    name:"Bb7",  quality:"dominant7",function:"D"  },
      { degree:"vi",   name:"Cm",   quality:"minor",    function:"T"  },
      { degree:"vii°", name:"Ddim", quality:"diminished",function:"D" },
    ],
    tips: ["3 bémols : Bb Eb Ab","Tonalité de Beethoven (Héroïque, Pathétique...)"],
  },
  {
    id: "Bb",
    name: "Bb major", label: "Sib majeur", labelShort: "Sib M",
    mode: "major", root: "Bb", rootSolfege: "Sib",
    sharps: 0, flats: 2, keySignatureNotes: ["Bb","Eb"],
    scale: ["Bb","C","D","Eb","F","G","A"],
    scaleSolfege: ["Sib","Do","Ré","Mib","Fa","Sol","La"],
    relativeMinor: "Gm",
    parallel: "Bbm",
    chords: [
      { degree:"I",    name:"Bb",   quality:"major",    function:"T"  },
      { degree:"ii",   name:"Cm",   quality:"minor",    function:"SD" },
      { degree:"iii",  name:"Dm",   quality:"minor",    function:"?"  },
      { degree:"IV",   name:"Eb",   quality:"major",    function:"SD" },
      { degree:"V",    name:"F7",   quality:"dominant7",function:"D"  },
      { degree:"vi",   name:"Gm",   quality:"minor",    function:"T"  },
      { degree:"vii°", name:"Adim", quality:"diminished",function:"D" },
    ],
    tips: ["2 bémols : Bb Eb","Très utilisée en jazz et en fanfare"],
  },
  {
    id: "F",
    name: "F major", label: "Fa majeur", labelShort: "Fa M",
    mode: "major", root: "F", rootSolfege: "Fa",
    sharps: 0, flats: 1, keySignatureNotes: ["Bb"],
    scale: ["F","G","A","Bb","C","D","E"],
    scaleSolfege: ["Fa","Sol","La","Sib","Do","Ré","Mi"],
    relativeMinor: "Dm",
    parallel: "Fm",
    chords: [
      { degree:"I",    name:"F",    quality:"major",    function:"T"  },
      { degree:"ii",   name:"Gm",   quality:"minor",    function:"SD" },
      { degree:"iii",  name:"Am",   quality:"minor",    function:"?"  },
      { degree:"IV",   name:"Bb",   quality:"major",    function:"SD" },
      { degree:"V",    name:"C7",   quality:"dominant7",function:"D"  },
      { degree:"vi",   name:"Dm",   quality:"minor",    function:"T"  },
      { degree:"vii°", name:"Edim", quality:"diminished",function:"D" },
    ],
    tips: ["1 bémol : Bb","Triton fonctionnel : Bb–E (Sib–Mi)"],
  },
];

// ─── Gammes mineures (harmoniques) ────────────────────────────────────────────

export const MINOR_KEYS: Tonalite[] = [
  {
    id: "Am",
    name: "A minor", label: "La mineur", labelShort: "La m",
    mode: "minor", root: "A", rootSolfege: "La",
    sharps: 0, flats: 0, keySignatureNotes: [],
    scale: ["A","B","C","D","E","F","G#"],
    scaleSolfege: ["La","Si","Do","Ré","Mi","Fa","Sol#"],
    relativeMajor: "C",
    parallel: "A",
    chords: [
      { degree:"i",    name:"Am",   quality:"minor",    function:"T"  },
      { degree:"ii°",  name:"Bdim", quality:"diminished",function:"SD"},
      { degree:"III",  name:"C",    quality:"major",    function:"T"  },
      { degree:"iv",   name:"Dm",   quality:"minor",    function:"SD" },
      { degree:"V",    name:"E7",   quality:"dominant7",function:"D"  },
      { degree:"VI",   name:"F",    quality:"major",    function:"T"  },
      { degree:"VII°", name:"G#dim",quality:"diminished",function:"D" },
    ],
    tips: ["Relative de Do majeur — même armure","Sensible : G# (Sol#) — élevée d'un ½ ton","Triton fonctionnel : D–G# (Ré–Sol#)"],
  },
  {
    id: "Em",
    name: "E minor", label: "Mi mineur", labelShort: "Mi m",
    mode: "minor", root: "E", rootSolfege: "Mi",
    sharps: 1, flats: 0, keySignatureNotes: ["F#"],
    scale: ["E","F#","G","A","B","C","D#"],
    scaleSolfege: ["Mi","Fa#","Sol","La","Si","Do","Ré#"],
    relativeMajor: "G",
    parallel: "E",
    chords: [
      { degree:"i",    name:"Em",   quality:"minor",    function:"T"  },
      { degree:"ii°",  name:"F#dim",quality:"diminished",function:"SD"},
      { degree:"III",  name:"G",    quality:"major",    function:"T"  },
      { degree:"iv",   name:"Am",   quality:"minor",    function:"SD" },
      { degree:"V",    name:"B7",   quality:"dominant7",function:"D"  },
      { degree:"VI",   name:"C",    quality:"major",    function:"T"  },
      { degree:"VII°", name:"D#dim",quality:"diminished",function:"D" },
    ],
    tips: ["Relative de Sol majeur — 1 dièse (F#)","Sensible : D# (Ré#)","Très utilisée en guitare classique et rock"],
  },
  {
    id: "Bm",
    name: "B minor", label: "Si mineur", labelShort: "Si m",
    mode: "minor", root: "B", rootSolfege: "Si",
    sharps: 2, flats: 0, keySignatureNotes: ["F#","C#"],
    scale: ["B","C#","D","E","F#","G","A#"],
    scaleSolfege: ["Si","Do#","Ré","Mi","Fa#","Sol","La#"],
    relativeMajor: "D",
    parallel: "B",
    chords: [
      { degree:"i",    name:"Bm",   quality:"minor",    function:"T"  },
      { degree:"ii°",  name:"C#dim",quality:"diminished",function:"SD"},
      { degree:"III",  name:"D",    quality:"major",    function:"T"  },
      { degree:"iv",   name:"Em",   quality:"minor",    function:"SD" },
      { degree:"V",    name:"F#7",  quality:"dominant7",function:"D"  },
      { degree:"VI",   name:"G",    quality:"major",    function:"T"  },
      { degree:"VII°", name:"A#dim",quality:"diminished",function:"D" },
    ],
    tips: ["Relative de Ré majeur — 2 dièses (F# C#)","Sensible : A# (La#)"],
  },
  {
    id: "F#m",
    name: "F# minor", label: "Fa# mineur", labelShort: "Fa# m",
    mode: "minor", root: "F#", rootSolfege: "Fa#",
    sharps: 3, flats: 0, keySignatureNotes: ["F#","C#","G#"],
    scale: ["F#","G#","A","B","C#","D","E#"],
    scaleSolfege: ["Fa#","Sol#","La","Si","Do#","Ré","Mi#"],
    relativeMajor: "A",
    parallel: "F#",
    chords: [
      { degree:"i",    name:"F#m",  quality:"minor",    function:"T"  },
      { degree:"ii°",  name:"G#dim",quality:"diminished",function:"SD"},
      { degree:"III",  name:"A",    quality:"major",    function:"T"  },
      { degree:"iv",   name:"Bm",   quality:"minor",    function:"SD" },
      { degree:"V",    name:"C#7",  quality:"dominant7",function:"D"  },
      { degree:"VI",   name:"D",    quality:"major",    function:"T"  },
      { degree:"VII°", name:"E#dim",quality:"diminished",function:"D" },
    ],
    tips: ["Relative de La majeur — 3 dièses (F# C# G#)","Sensible : E# (Mi#) = enharmonique de F"],
  },
  {
    id: "C#m",
    name: "C# minor", label: "Do# mineur", labelShort: "Do# m",
    mode: "minor", root: "C#", rootSolfege: "Do#",
    sharps: 4, flats: 0, keySignatureNotes: ["F#","C#","G#","D#"],
    scale: ["C#","D#","E","F#","G#","A","B#"],
    scaleSolfege: ["Do#","Ré#","Mi","Fa#","Sol#","La","Si#"],
    relativeMajor: "E",
    parallel: "C#",
    chords: [
      { degree:"i",    name:"C#m",  quality:"minor",    function:"T"  },
      { degree:"ii°",  name:"D#dim",quality:"diminished",function:"SD"},
      { degree:"III",  name:"E",    quality:"major",    function:"T"  },
      { degree:"iv",   name:"F#m",  quality:"minor",    function:"SD" },
      { degree:"V",    name:"G#7",  quality:"dominant7",function:"D"  },
      { degree:"VI",   name:"A",    quality:"major",    function:"T"  },
      { degree:"VII°", name:"B#dim",quality:"diminished",function:"D" },
    ],
    tips: ["Relative de Mi majeur — 4 dièses","Sensible : B# (Si#) = enharmonique de C"],
  },
  {
    id: "G#m",
    name: "G# minor", label: "Sol# mineur", labelShort: "Sol# m",
    mode: "minor", root: "G#", rootSolfege: "Sol#",
    sharps: 5, flats: 0, keySignatureNotes: ["F#","C#","G#","D#","A#"],
    scale: ["G#","A#","B","C#","D#","E","F##"],
    scaleSolfege: ["Sol#","La#","Si","Do#","Ré#","Mi","Fa##"],
    relativeMajor: "B",
    parallel: "G#",
    chords: [
      { degree:"i",    name:"G#m",  quality:"minor",    function:"T"  },
      { degree:"ii°",  name:"A#dim",quality:"diminished",function:"SD"},
      { degree:"III",  name:"B",    quality:"major",    function:"T"  },
      { degree:"iv",   name:"C#m",  quality:"minor",    function:"SD" },
      { degree:"V",    name:"D#7",  quality:"dominant7",function:"D"  },
      { degree:"VI",   name:"E",    quality:"major",    function:"T"  },
      { degree:"VII°", name:"F##dim",quality:"diminished",function:"D"},
    ],
    tips: ["Relative de Si majeur — 5 dièses","Enharmonique de Ab mineur"],
  },
  {
    id: "Dm",
    name: "D minor", label: "Ré mineur", labelShort: "Ré m",
    mode: "minor", root: "D", rootSolfege: "Ré",
    sharps: 0, flats: 1, keySignatureNotes: ["Bb"],
    scale: ["D","E","F","G","A","Bb","C#"],
    scaleSolfege: ["Ré","Mi","Fa","Sol","La","Sib","Do#"],
    relativeMajor: "F",
    parallel: "D",
    chords: [
      { degree:"i",    name:"Dm",   quality:"minor",    function:"T"  },
      { degree:"ii°",  name:"Edim", quality:"diminished",function:"SD"},
      { degree:"III",  name:"F",    quality:"major",    function:"T"  },
      { degree:"iv",   name:"Gm",   quality:"minor",    function:"SD" },
      { degree:"V",    name:"A7",   quality:"dominant7",function:"D"  },
      { degree:"VI",   name:"Bb",   quality:"major",    function:"T"  },
      { degree:"VII°", name:"C#dim",quality:"diminished",function:"D" },
    ],
    tips: ["Relative de Fa majeur — 1 bémol (Bb)","Sensible : C# (Do#)","Tonalité du Requiem de Mozart"],
  },
  {
    id: "Gm",
    name: "G minor", label: "Sol mineur", labelShort: "Sol m",
    mode: "minor", root: "G", rootSolfege: "Sol",
    sharps: 0, flats: 2, keySignatureNotes: ["Bb","Eb"],
    scale: ["G","A","Bb","C","D","Eb","F#"],
    scaleSolfege: ["Sol","La","Sib","Do","Ré","Mib","Fa#"],
    relativeMajor: "Bb",
    parallel: "G",
    chords: [
      { degree:"i",    name:"Gm",   quality:"minor",    function:"T"  },
      { degree:"ii°",  name:"Adim", quality:"diminished",function:"SD"},
      { degree:"III",  name:"Bb",   quality:"major",    function:"T"  },
      { degree:"iv",   name:"Cm",   quality:"minor",    function:"SD" },
      { degree:"V",    name:"D7",   quality:"dominant7",function:"D"  },
      { degree:"VI",   name:"Eb",   quality:"major",    function:"T"  },
      { degree:"VII°", name:"F#dim",quality:"diminished",function:"D" },
    ],
    tips: ["Relative de Sib majeur — 2 bémols (Bb Eb)","Sensible : F# (Fa#)","Tonalité d'Autumn Leaves"],
  },
  {
    id: "Cm",
    name: "C minor", label: "Do mineur", labelShort: "Do m",
    mode: "minor", root: "C", rootSolfege: "Do",
    sharps: 0, flats: 3, keySignatureNotes: ["Bb","Eb","Ab"],
    scale: ["C","D","Eb","F","G","Ab","B"],
    scaleSolfege: ["Do","Ré","Mib","Fa","Sol","Lab","Si"],
    relativeMajor: "Eb",
    parallel: "C",
    chords: [
      { degree:"i",    name:"Cm",   quality:"minor",    function:"T"  },
      { degree:"ii°",  name:"Ddim", quality:"diminished",function:"SD"},
      { degree:"III",  name:"Eb",   quality:"major",    function:"T"  },
      { degree:"iv",   name:"Fm",   quality:"minor",    function:"SD" },
      { degree:"V",    name:"G7",   quality:"dominant7",function:"D"  },
      { degree:"VI",   name:"Ab",   quality:"major",    function:"T"  },
      { degree:"VII°", name:"Bdim", quality:"diminished",function:"D" },
    ],
    tips: ["Relative de Mib majeur — 3 bémols","Sensible : B (Si naturel)","Tonalité de la 5e Symphonie de Beethoven"],
  },
  {
    id: "Fm",
    name: "F minor", label: "Fa mineur", labelShort: "Fa m",
    mode: "minor", root: "F", rootSolfege: "Fa",
    sharps: 0, flats: 4, keySignatureNotes: ["Bb","Eb","Ab","Db"],
    scale: ["F","G","Ab","Bb","C","Db","E"],
    scaleSolfege: ["Fa","Sol","Lab","Sib","Do","Réb","Mi"],
    relativeMajor: "Ab",
    parallel: "F",
    chords: [
      { degree:"i",    name:"Fm",   quality:"minor",    function:"T"  },
      { degree:"ii°",  name:"Gdim", quality:"diminished",function:"SD"},
      { degree:"III",  name:"Ab",   quality:"major",    function:"T"  },
      { degree:"iv",   name:"Bbm",  quality:"minor",    function:"SD" },
      { degree:"V",    name:"C7",   quality:"dominant7",function:"D"  },
      { degree:"VI",   name:"Db",   quality:"major",    function:"T"  },
      { degree:"VII°", name:"Edim", quality:"diminished",function:"D" },
    ],
    tips: ["Relative de Lab majeur — 4 bémols","Sensible : E (Mi naturel)"],
  },
  {
    id: "Bbm",
    name: "Bb minor", label: "Sib mineur", labelShort: "Sib m",
    mode: "minor", root: "Bb", rootSolfege: "Sib",
    sharps: 0, flats: 5, keySignatureNotes: ["Bb","Eb","Ab","Db","Gb"],
    scale: ["Bb","C","Db","Eb","F","Gb","A"],
    scaleSolfege: ["Sib","Do","Réb","Mib","Fa","Solb","La"],
    relativeMajor: "Db",
    parallel: "Bb",
    chords: [
      { degree:"i",    name:"Bbm",  quality:"minor",    function:"T"  },
      { degree:"ii°",  name:"Cdim", quality:"diminished",function:"SD"},
      { degree:"III",  name:"Db",   quality:"major",    function:"T"  },
      { degree:"iv",   name:"Ebm",  quality:"minor",    function:"SD" },
      { degree:"V",    name:"F7",   quality:"dominant7",function:"D"  },
      { degree:"VI",   name:"Gb",   quality:"major",    function:"T"  },
      { degree:"VII°", name:"Adim", quality:"diminished",function:"D" },
    ],
    tips: ["Relative de Réb majeur — 5 bémols","Sensible : A (La naturel)"],
  },
  {
    id: "Ebm",
    name: "Eb minor", label: "Mib mineur", labelShort: "Mib m",
    mode: "minor", root: "Eb", rootSolfege: "Mib",
    sharps: 0, flats: 6, keySignatureNotes: ["Bb","Eb","Ab","Db","Gb","Cb"],
    scale: ["Eb","F","Gb","Ab","Bb","Cb","D"],
    scaleSolfege: ["Mib","Fa","Solb","Lab","Sib","Dob","Ré"],
    relativeMajor: "Gb",
    parallel: "Eb",
    chords: [
      { degree:"i",    name:"Ebm",  quality:"minor",    function:"T"  },
      { degree:"ii°",  name:"Fdim", quality:"diminished",function:"SD"},
      { degree:"III",  name:"Gb",   quality:"major",    function:"T"  },
      { degree:"iv",   name:"Abm",  quality:"minor",    function:"SD" },
      { degree:"V",    name:"Bb7",  quality:"dominant7",function:"D"  },
      { degree:"VI",   name:"Cb",   quality:"major",    function:"T"  },
      { degree:"VII°", name:"Ddim", quality:"diminished",function:"D" },
    ],
    tips: ["Relative de Solb majeur — 6 bémols","Enharmonique de D# mineur","Sensible : D (Ré naturel)"],
  },
];

// ─── Utilitaires ──────────────────────────────────────────────────────────────

export const ALL_KEYS = [...MAJOR_KEYS, ...MINOR_KEYS];

export function getKey(id: string): Tonalite | undefined {
  return ALL_KEYS.find(k => k.id === id);
}

export function getRelativeKey(key: Tonalite): Tonalite | undefined {
  const relId = key.mode === "major" ? key.relativeMinor : key.relativeMajor;
  return relId ? ALL_KEYS.find(k => k.id === relId) : undefined;
}

// Ordre du cycle des quintes (dièses)
export const CIRCLE_OF_FIFTHS_SHARPS = ["C","G","D","A","E","B","F#"];
// Ordre du cycle des quintes (bémols)
export const CIRCLE_OF_FIFTHS_FLATS  = ["C","F","Bb","Eb","Ab","Db"];

// Astuces globales
export const GLOBAL_TIPS = [
  {
    title: "Trouver les altérations à la clé (dièses)",
    content: "L'ordre des dièses : Fa Do Sol Ré La Mi Si. Pour trouver la tonique, prends le dernier dièse et monte d'un demi-ton. Ex : 3 dièses (F# C# G#) → G# + ½ = A majeur.",
  },
  {
    title: "Trouver les altérations à la clé (bémols)",
    content: "L'ordre des bémols : Si Mi La Ré Sol Do Fa. Pour trouver la tonique, prends l'avant-dernier bémol. Ex : 3 bémols (Bb Eb Ab) → avant-dernier = Eb majeur.",
  },
  {
    title: "Trouver la relative mineure",
    content: "La relative mineure est au VIe degré de la gamme majeure, soit 3 demi-tons en dessous de la tonique majeure. Ex : Do majeur → La mineur (C → A = -3 demi-tons).",
  },
  {
    title: "La sensible en mineur harmonique",
    content: "En mineur naturel, le VIIe degré est à 1 ton de la tonique (pas de tension). En mineur harmonique, on élève le VIIe d'un ½ ton pour créer la sensible — l'attraction vers la tonique.",
  },
  {
    title: "Le triton fonctionnel",
    content: "En majeur, il se forme entre le IVe (sous-dominante) et le VIIe (sensible). En mineur harmonique, identique : entre le IVe et le VIIe élevé. C'est le moteur de la tension harmonique.",
  },
];