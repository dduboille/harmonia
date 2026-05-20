// src/lib/key-accidentals.ts

export interface KSEntry {
  note: string;   // Base letter: "F", "C", "G", etc.
  acc: "#" | "b";
  frName: string; // French display name: "Fa#", "Sib"
}

/**
 * Circle-of-fifths accidentals for each key signature string.
 * Includes both major keys and natural-minor keys (relative minor = same accidentals as relative major).
 * Used for:
 *  1. "sans armure" real-time validation in HarmoniaEditor
 *  2. The hint banner in GenerateurSATB and ExerciceContent
 */
export const KEY_ACCIDENTALS: Record<string, KSEntry[]> = {
  // ── Major keys ───────────────────────────────────────────────────────────────
  "C":  [],
  "G":  [{ note:"F", acc:"#", frName:"Fa#" }],
  "D":  [{ note:"F", acc:"#", frName:"Fa#" }, { note:"C", acc:"#", frName:"Do#" }],
  "A":  [{ note:"F", acc:"#", frName:"Fa#" }, { note:"C", acc:"#", frName:"Do#" }, { note:"G", acc:"#", frName:"Sol#" }],
  "E":  [{ note:"F", acc:"#", frName:"Fa#" }, { note:"C", acc:"#", frName:"Do#" }, { note:"G", acc:"#", frName:"Sol#" }, { note:"D", acc:"#", frName:"Ré#" }],
  "B":  [{ note:"F", acc:"#", frName:"Fa#" }, { note:"C", acc:"#", frName:"Do#" }, { note:"G", acc:"#", frName:"Sol#" }, { note:"D", acc:"#", frName:"Ré#" }, { note:"A", acc:"#", frName:"La#" }],
  "F#": [{ note:"F", acc:"#", frName:"Fa#" }, { note:"C", acc:"#", frName:"Do#" }, { note:"G", acc:"#", frName:"Sol#" }, { note:"D", acc:"#", frName:"Ré#" }, { note:"A", acc:"#", frName:"La#" }, { note:"E", acc:"#", frName:"Mi#" }],
  "Gb": [{ note:"B", acc:"b", frName:"Sib" }, { note:"E", acc:"b", frName:"Mib" }, { note:"A", acc:"b", frName:"Lab" }, { note:"D", acc:"b", frName:"Réb" }, { note:"G", acc:"b", frName:"Solb" }, { note:"C", acc:"b", frName:"Dob" }],
  "F":  [{ note:"B", acc:"b", frName:"Sib" }],
  "Bb": [{ note:"B", acc:"b", frName:"Sib" }, { note:"E", acc:"b", frName:"Mib" }],
  "Eb": [{ note:"B", acc:"b", frName:"Sib" }, { note:"E", acc:"b", frName:"Mib" }, { note:"A", acc:"b", frName:"Lab" }],
  "Ab": [{ note:"B", acc:"b", frName:"Sib" }, { note:"E", acc:"b", frName:"Mib" }, { note:"A", acc:"b", frName:"Lab" }, { note:"D", acc:"b", frName:"Réb" }],
  "Db": [{ note:"B", acc:"b", frName:"Sib" }, { note:"E", acc:"b", frName:"Mib" }, { note:"A", acc:"b", frName:"Lab" }, { note:"D", acc:"b", frName:"Réb" }, { note:"G", acc:"b", frName:"Solb" }],
  "Cb": [{ note:"B", acc:"b", frName:"Sib" }, { note:"E", acc:"b", frName:"Mib" }, { note:"A", acc:"b", frName:"Lab" }, { note:"D", acc:"b", frName:"Réb" }, { note:"G", acc:"b", frName:"Solb" }, { note:"C", acc:"b", frName:"Dob" }],
  // ── Natural minor keys (same accidentals as relative major) ──────────────────
  "Am":  [],
  "Em":  [{ note:"F", acc:"#", frName:"Fa#" }],
  "Bm":  [{ note:"F", acc:"#", frName:"Fa#" }, { note:"C", acc:"#", frName:"Do#" }],
  "F#m": [{ note:"F", acc:"#", frName:"Fa#" }, { note:"C", acc:"#", frName:"Do#" }, { note:"G", acc:"#", frName:"Sol#" }],
  "C#m": [{ note:"F", acc:"#", frName:"Fa#" }, { note:"C", acc:"#", frName:"Do#" }, { note:"G", acc:"#", frName:"Sol#" }, { note:"D", acc:"#", frName:"Ré#" }],
  "G#m": [{ note:"F", acc:"#", frName:"Fa#" }, { note:"C", acc:"#", frName:"Do#" }, { note:"G", acc:"#", frName:"Sol#" }, { note:"D", acc:"#", frName:"Ré#" }, { note:"A", acc:"#", frName:"La#" }],
  "Dm":  [{ note:"B", acc:"b", frName:"Sib" }],
  "Gm":  [{ note:"B", acc:"b", frName:"Sib" }, { note:"E", acc:"b", frName:"Mib" }],
  "Cm":  [{ note:"B", acc:"b", frName:"Sib" }, { note:"E", acc:"b", frName:"Mib" }, { note:"A", acc:"b", frName:"Lab" }],
  "Fm":  [{ note:"B", acc:"b", frName:"Sib" }, { note:"E", acc:"b", frName:"Mib" }, { note:"A", acc:"b", frName:"Lab" }, { note:"D", acc:"b", frName:"Réb" }],
  "Bbm": [{ note:"B", acc:"b", frName:"Sib" }, { note:"E", acc:"b", frName:"Mib" }, { note:"A", acc:"b", frName:"Lab" }, { note:"D", acc:"b", frName:"Réb" }, { note:"G", acc:"b", frName:"Solb" }],
  "Ebm": [{ note:"B", acc:"b", frName:"Sib" }, { note:"E", acc:"b", frName:"Mib" }, { note:"A", acc:"b", frName:"Lab" }, { note:"D", acc:"b", frName:"Réb" }, { note:"G", acc:"b", frName:"Solb" }, { note:"C", acc:"b", frName:"Dob" }],
};

/**
 * Returns the hint string for the "sans armure" banner.
 * Tries `key` first, then strips trailing "m" as fallback.
 * Returns null for C major / A minor (no accidentals needed).
 */
export function getKeyAccidentalHint(key: string): string | null {
  const entries = KEY_ACCIDENTALS[key] ?? KEY_ACCIDENTALS[key.replace(/m$/, "")] ?? [];
  if (entries.length === 0) return null;
  return entries.map(e => `${e.note} → ${e.frName}`).join("  ·  ");
}
