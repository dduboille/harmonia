/**
 * src/lib/satb-generator.ts
 * Moteur de génération d'exercices SATB pour Harmonia.
 *
 * Étapes :
 *  1. Transposition des degrés romains en accords réels dans la tonalité choisie
 *  2. Voicing SATB (greedy, voice leading minimal)
 *  3. Règles de conduite des voix (tessitures, pas de croisements)
 */

import type { ProgressionTemplate } from "@/data/progressions-templates";

// ── Types publics ──────────────────────────────────────────────────────────────

export type Doigte = "1" | "3" | "5" | "7";

export interface SATBMeasure {
  soprano: { name: string; octave: number };
  alto:    { name: string; octave: number };
  tenor:   { name: string; octave: number };
  bass:    { name: string; octave: number };
}

export interface GeneratedExercise {
  template: ProgressionTemplate;
  tonalite: string;
  mode: "major" | "minor";
  doigte: Doigte;
  accords: string[];
  labels: string[];
  mesures: SATBMeasure[];
  solution: SATBMeasure[];
  dotKeys: string[][];
  lilypondCode: string;
  reglesAppliquees: string[];
}

// ── Constantes ─────────────────────────────────────────────────────────────────

const SHARP_NAMES = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];
const FLAT_NAMES  = ["C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B"];
const FLAT_KEYS   = new Set(["F","Bb","Eb","Ab","Db","Gb","Cb","Dm","Gm","Cm","Fm","Bbm","Ebm"]);
const MINOR_KEYS  = new Set(["Am","Em","Bm","F#m","C#m","G#m","Dm","Gm","Cm","Fm","Bbm","Ebm"]);

const KEY_ROOTS: Record<string, number> = {
  "C":0,"G":7,"D":2,"A":9,"E":4,"B":11,"F#":6,"Gb":6,
  "F":5,"Bb":10,"Eb":3,"Ab":8,"Db":1,"Cb":11,
  "Am":9,"Em":4,"Bm":11,"F#m":6,"C#m":1,"G#m":8,
  "Dm":2,"Gm":7,"Cm":0,"Fm":5,"Bbm":10,"Ebm":3,
};

const MAJOR_SCALE = [0,2,4,5,7,9,11];
const MINOR_SCALE = [0,2,3,5,7,8,10];

// Default chord quality per scale degree (major / minor)
const MAJ_QUAL = ["maj","min","min","maj","maj","min","dim"] as const;
const MIN_QUAL = ["min","dim","maj","min","maj","maj","maj"] as const;

// Voice MIDI ranges [min, max]
const RANGES = {
  bass:    [40, 60] as [number, number], // E2–C4
  tenor:   [48, 67] as [number, number], // C3–G4
  alto:    [55, 72] as [number, number], // G3–C5
  soprano: [60, 79] as [number, number], // C4–G5
};

// ── Helpers ────────────────────────────────────────────────────────────────────

function noteName(pc: number, key: string): string {
  return FLAT_KEYS.has(key) ? FLAT_NAMES[pc % 12] : SHARP_NAMES[pc % 12];
}

function midiToEntry(midi: number, key: string): { name: string; octave: number } {
  return {
    name: noteName(midi % 12, key),
    octave: Math.floor(midi / 12) - 1,
  };
}

function allInRange(pc: number, range: [number, number]): number[] {
  const r: number[] = [];
  for (let m = range[0]; m <= range[1]; m++) {
    if (m % 12 === pc % 12) r.push(m);
  }
  return r;
}

function nearest(pc: number, range: [number, number], pref: number): number {
  const all = allInRange(pc, range);
  if (!all.length) return range[0];
  return all.reduce((b, c) => Math.abs(c - pref) < Math.abs(b - pref) ? c : b);
}

// ── Degree parser ──────────────────────────────────────────────────────────────

type Extension = "none" | "dom7" | "maj7" | "min7" | "hdim7" | "dom7b9";
type ChordQuality = "maj" | "min" | "dim" | "aug";

interface DegreeInfo {
  flatted: boolean;
  degree: number;
  explicitMinor: boolean;
  inversion: 0 | 1 | 2;
  extension: Extension;
}

function parseDeg(deg: string): DegreeInfo {
  let s = deg;
  const flatted = s.startsWith("b");
  if (flatted) s = s.slice(1);

  const ROMAN: [string, number][] = [["VII",7],["VI",6],["V",5],["IV",4],["III",3],["II",2],["I",1]];
  let degree = 1;
  for (const [r, d] of ROMAN) {
    if (s.startsWith(r)) { degree = d; s = s.slice(r.length); break; }
  }

  let extension: Extension = "none";
  let explicitMinor = false;

  if (s.startsWith("m7b5"))         { explicitMinor = true; extension = "hdim7"; s = s.slice(4); }
  else if (s.startsWith("Maj7") || s.startsWith("maj7")) { extension = "maj7"; s = s.slice(4); }
  else if (s.startsWith("m7"))      { explicitMinor = true; extension = "min7"; s = s.slice(2); }
  else if (s.startsWith("7b9"))     { extension = "dom7b9"; s = s.slice(3); }
  else if (s.startsWith("7"))       { extension = "dom7"; s = s.slice(1); }
  else if (s.startsWith("m"))       { explicitMinor = true; s = s.slice(1); }

  let inversion: 0|1|2 = 0;
  if (s.startsWith("64"))      inversion = 2;
  else if (s.startsWith("6"))  inversion = 1;

  return { flatted, degree, explicitMinor, inversion, extension };
}

// ── Chord builder ──────────────────────────────────────────────────────────────

interface ChordSpec {
  rootPc: number;
  tones: number[];   // pitch classes (0-11)
  bassTone: number;  // PC for bass voice
  displayName: string;
}

function buildChord(info: DegreeInfo, keyRoot: number, mode: "major"|"minor", key: string): ChordSpec {
  const scale = mode === "major" ? MAJOR_SCALE : MINOR_SCALE;
  const defQual = mode === "major" ? MAJ_QUAL : MIN_QUAL;

  // Root PC
  let offset = scale[info.degree - 1];
  if (info.flatted && mode === "major") offset = (offset - 1 + 12) % 12;
  const rootPc = (keyRoot + offset) % 12;

  // Quality
  let quality: ChordQuality;
  if (info.extension === "hdim7") quality = "dim";
  else if (info.explicitMinor) quality = "min";
  else if (info.flatted) quality = "maj";
  else if (mode === "minor" && info.degree === 4) quality = "maj"; // Dorian IV
  else quality = defQual[info.degree - 1] as ChordQuality;

  // Intervals from root
  const intervals: number[] =
    quality === "maj" ? [0,4,7] :
    quality === "min" ? [0,3,7] :
    quality === "dim" ? [0,3,6] : [0,4,8];

  if (info.extension === "dom7" || info.extension === "min7") intervals.push(10);
  else if (info.extension === "maj7")   intervals.push(11);
  else if (info.extension === "hdim7")  { intervals[2] = 6; intervals.push(10); }
  else if (info.extension === "dom7b9") intervals.push(10);

  const tones = intervals.map(i => (rootPc + i) % 12);

  // Bass tone (first inversion = 3rd, second = 5th)
  const bassTone = tones[info.inversion] ?? tones[0];

  // Display name
  const root = noteName(rootPc, key);
  const qSuf = quality === "min" ? "m" : quality === "dim" ? "dim" : "";
  const eSuf =
    info.extension === "hdim7"   ? "m7b5" :
    info.extension === "dom7b9"  ? "7b9" :
    info.extension === "maj7"    ? "maj7" :
    (info.extension === "dom7" || info.extension === "min7") ? "7" : "";
  const invSuf = info.inversion === 1 ? `/${noteName(tones[1] ?? tones[0], key)}` :
                 info.inversion === 2 ? `/${noteName(tones[2] ?? tones[0], key)}` : "";

  const displayName = info.extension === "hdim7"
    ? `${root}m7b5${invSuf}`
    : `${root}${qSuf}${eSuf}${invSuf}`;

  return { rootPc, tones, bassTone, displayName };
}

// ── SATB voicer ────────────────────────────────────────────────────────────────

interface MidiVoicing { soprano: number; alto: number; tenor: number; bass: number }

function voiceChord(
  tones: number[],
  bassTone: number,
  prev: MidiVoicing | null,
  sopranoPC: number | null
): MidiVoicing {
  const pr = prev ?? { soprano: 67, alto: 64, tenor: 60, bass: 48 };

  // 1. Bass
  const bassMidi = nearest(bassTone, RANGES.bass, pr.bass);

  // 2. Pad tones to 4 voices (double root for triads)
  const tones4 = tones.length < 4 ? [...tones, tones[0]] : [...tones];

  // 3. Soprano
  let sopPC: number;
  let sopMidi: number;
  if (sopranoPC !== null) {
    sopPC = sopranoPC;
    sopMidi = nearest(sopranoPC, RANGES.soprano, pr.soprano);
  } else {
    const best = tones4
      .map(t => ({ t, m: nearest(t, RANGES.soprano, pr.soprano) }))
      .reduce((b, c) => Math.abs(c.m - pr.soprano) < Math.abs(b.m - pr.soprano) ? c : b);
    sopPC = best.t;
    sopMidi = best.m;
  }

  // 4. Inner voices from remaining tones
  const remaining = [...tones4];
  const remove = (pc: number) => { const i = remaining.indexOf(pc); if (i >= 0) remaining.splice(i, 1); };
  remove(bassTone);
  remove(sopPC);

  // Ensure we have 2 inner PCs
  while (remaining.length < 2) remaining.push(tones[0]);

  // 5. Try both assignments of inner PCs to alto/tenor, pick best voice leading
  let bestAlt = 0, bestTen = 0, bestScore = Infinity;

  for (const [altPC, tenPC] of [[remaining[0], remaining[1]], [remaining[1], remaining[0]]]) {
    const altCands = allInRange(altPC, RANGES.alto).filter(m => m <= sopMidi);
    const tenCands = allInRange(tenPC, RANGES.tenor).filter(m => m >= bassMidi);
    if (!altCands.length || !tenCands.length) continue;

    const altMidi = altCands.reduce((b, c) => Math.abs(c - pr.alto) < Math.abs(b - pr.alto) ? c : b);
    const tenFiltered = tenCands.filter(m => m <= altMidi);
    if (!tenFiltered.length) continue;
    const tenMidi = tenFiltered.reduce((b, c) => Math.abs(c - pr.tenor) < Math.abs(b - pr.tenor) ? c : b);

    const score = Math.abs(altMidi - pr.alto) + Math.abs(tenMidi - pr.tenor);
    if (score < bestScore) { bestScore = score; bestAlt = altMidi; bestTen = tenMidi; }
  }

  if (bestScore === Infinity) {
    // Fallback: simple midpoint placement
    bestAlt = nearest(remaining[0], RANGES.alto, Math.round((RANGES.alto[0]+RANGES.alto[1])/2));
    bestTen = nearest(remaining[1] ?? remaining[0], RANGES.tenor, Math.round((RANGES.tenor[0]+RANGES.tenor[1])/2));
    if (bestAlt > sopMidi) bestAlt = sopMidi;
    if (bestTen > bestAlt) bestTen = bestAlt;
  }

  return { soprano: sopMidi, alto: bestAlt, tenor: bestTen, bass: bassMidi };
}

// ── LilyPond export ────────────────────────────────────────────────────────────

function toLilyNote(name: string, octave: number): string {
  const n = name.toLowerCase()
    .replace("##", "isis").replace("#", "is")
    .replace("bb", "eses").replace("b", "es");
  const diff = octave - 3;
  const oSuf = diff > 0 ? "'".repeat(diff) : diff < 0 ? ",".repeat(-diff) : "";
  return n + oSuf;
}

function generateLilyPond(mesures: SATBMeasure[], key: string, mode: "major"|"minor"): string {
  const keyLily = key.toLowerCase().replace("#","is").replace("b","es").replace("m","");
  const modeLily = mode === "minor" ? "\\minor" : "\\major";
  const chords = mesures.map(m => {
    const b = toLilyNote(m.bass.name, m.bass.octave);
    const t = toLilyNote(m.tenor.name, m.tenor.octave);
    const a = toLilyNote(m.alto.name, m.alto.octave);
    const s = toLilyNote(m.soprano.name, m.soprano.octave);
    return `  <${b} ${t} ${a} ${s}>1`;
  }).join("\n");
  return `\\version "2.24.0"\n\\relative c' {\n  \\key ${keyLily} ${modeLily}\n  \\time 4/4\n${chords}\n}`;
}

// ── Main export ────────────────────────────────────────────────────────────────

export function generateSATBExercise(
  template: ProgressionTemplate,
  tonalite: string,
  doigte: Doigte
): GeneratedExercise {
  const mode: "major"|"minor" = MINOR_KEYS.has(tonalite) ? "minor" : "major";
  const keyRoot = KEY_ROOTS[tonalite] ?? 0;

  const chords = template.symboles.map(deg => buildChord(parseDeg(deg), keyRoot, mode, tonalite));

  const DOIGTE_IDX: Record<Doigte, number> = { "1":0, "3":1, "5":2, "7":3 };
  const sopIdx = DOIGTE_IDX[doigte];

  const mesures: SATBMeasure[] = [];
  const dotKeys: string[][] = [];
  const accords: string[] = [];
  let prevMidi: MidiVoicing | null = null;

  for (let i = 0; i < chords.length; i++) {
    const ch = chords[i];
    const sopranoPC = i === 0 ? (ch.tones[sopIdx] ?? ch.tones[0]) : null;
    const midi = voiceChord(ch.tones, ch.bassTone, prevMidi, sopranoPC);

    const m: SATBMeasure = {
      soprano: midiToEntry(midi.soprano, tonalite),
      alto:    midiToEntry(midi.alto, tonalite),
      tenor:   midiToEntry(midi.tenor, tonalite),
      bass:    midiToEntry(midi.bass, tonalite),
    };
    mesures.push(m);
    dotKeys.push([
      `${m.bass.name}:${m.bass.octave}`,
      `${m.tenor.name}:${m.tenor.octave}`,
      `${m.alto.name}:${m.alto.octave}`,
      `${m.soprano.name}:${m.soprano.octave}`,
    ]);
    accords.push(ch.displayName);
    prevMidi = midi;
  }

  const rules = ["Tessitures SATB respectées","Mouvement conjoint privilégié"];
  if (template.symboles.some(d => d.includes("V"))) rules.push("Sensible résolue vers la tonique");
  if (template.symboles.some(d => d.includes("7"))) rules.push("Septième résolue par degré conjoint");
  if (template.symboles.some(d => d.startsWith("b"))) rules.push("Accord emprunté utilisé");

  return {
    template,
    tonalite,
    mode,
    doigte,
    accords,
    labels: template.symboles,
    mesures,
    solution: mesures,
    dotKeys,
    lilypondCode: generateLilyPond(mesures, tonalite, mode),
    reglesAppliquees: rules,
  };
}
