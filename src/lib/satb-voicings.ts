/**
 * lib/satb-voicings.ts
 * Harmonia — Voicings SATB avec conduite de voix
 *
 * Convention : notes en français (Do Ré Mi Fa Sol La Si)
 * Format dotKeys PianoPlayer : "Note:octave"
 */

export const SATB: Record<string, string[]> = {

  // ── Triades majeures ──────────────────────────────────────────────────────
  C:      ["Do:3", "Sol:3", "Mi:4", "Do:5"],
  F:      ["Fa:3", "Do:4", "La:3", "Fa:4"],
  G:      ["Sol:3", "Ré:3", "Si:3", "Sol:4"],
  A:      ["La:3", "Mi:3", "Do#:4", "La:4"],
  D:      ["Ré:3", "La:3", "Fa#:3", "Ré:4"],
  E:      ["Mi:3", "Si:3", "Sol#:3", "Mi:4"],
  Bb:     ["Sib:3", "Fa:3", "Ré:4", "Sib:4"],
  Eb:     ["Mib:3", "Sib:3", "Sol:4", "Mib:5"],
  Ab:     ["Lab:3", "Mib:3", "Do:4", "Lab:4"],
  Db:     ["Réb:3", "Lab:3", "Fa:4", "Réb:5"],

  // ── Triades mineures ──────────────────────────────────────────────────────
  Am:     ["La:3", "Mi:3", "Do:4", "La:4"],
  Dm:     ["Ré:3", "Fa:3", "La:3", "Ré:4"],
  Em:     ["Mi:3", "Si:3", "Sol:3", "Mi:4"],
  Bm:     ["Si:3", "Fa#:3", "Ré:4", "Si:4"],
  Gm:     ["Sol:3", "Ré:3", "Sib:3", "Sol:4"],
  Cm:     ["Do:3", "Sol:3", "Mib:4", "Do:5"],
  Fm:     ["Fa:3", "Do:3", "Lab:3", "Fa:4"],
  Ebm:    ["Mib:3", "Sib:3", "Solb:4", "Mib:5"],
  Dbm:    ["Réb:3", "Lab:3", "Fab:4", "Réb:5"],

  // ── Accord diminué ────────────────────────────────────────────────────────
  Bdim:   ["Si:3", "Ré:3", "Fa:3", "Si:3"],

  // ── Tétrades dominante 7 ──────────────────────────────────────────────────
  G7:     ["Sol:3", "Sol:3", "Si:3", "Fa:4"],
  D7:     ["Ré:3", "Ré:3", "Fa#:3", "Do:4"],
  A7:     ["La:3", "La:3", "Do#:4", "Sol:4"],
  E7:     ["Mi:3", "Mi:3", "Sol#:3", "Ré:4"],
  B7:     ["Si:3", "Si:3", "Ré#:4", "La:4"],
  C7:     ["Do:3", "Do:3", "Mi:3", "Sib:3"],
  F7:     ["Fa:3", "Fa:3", "La:3", "Mib:4"],
  Bb7:    ["Sib:3", "Sib:3", "Ré:4", "Lab:4"],
  Eb7:    ["Mib:3", "Mib:3", "Sol:3", "Réb:4"],
  Ab7:    ["Lab:3", "Lab:3", "Do:4", "Solb:4"],

  // ── Tétrades majeur 7 ─────────────────────────────────────────────────────
  CMaj7:  ["Do:3", "Sol:3", "Mi:4", "Si:4"],
  FMaj7:  ["Fa:3", "Do:4", "La:3", "Mi:4"],
  GMaj7:  ["Sol:3", "Ré:3", "Si:3", "Fa#:4"],
  EbMaj7: ["Mib:3", "Sib:3", "Sol:4", "Ré:5"],
  AbMaj7: ["Lab:3", "Mib:3", "Do:4", "Sol:4"],

  // ── Tétrades mineur 7 ─────────────────────────────────────────────────────
  Am7:    ["La:3", "Mi:3", "Do:4", "Sol:4"],
  Dm7:    ["Ré:3", "Do:3", "Fa:3", "La:3"],
  Em7:    ["Mi:3", "Si:3", "Sol:3", "Ré:4"],
  Bm7b5:  ["Si:3", "Fa:3", "La:3", "Ré:4"],
  Cm7:    ["Do:3", "Sol:3", "Mib:4", "Sib:4"],
  Fm7:    ["Fa:3", "Do:3", "Lab:3", "Mib:4"],
  Gm7:    ["Sol:3", "Ré:3", "Sib:3", "Fa:4"],
  Dm7b5:  ["Ré:3", "Lab:3", "Fa:3", "Do:4"],
  Bdim7:  ["Si:3", "Fa:3", "Lab:3", "Ré:4"],

  // ── Renversements 1er (tierce à la basse) ─────────────────────────────────
  "C/E":    ["Mi:3", "Sol:3", "Do:4", "Sol:4"],
  "F/A":    ["La:3", "Fa:3", "Do:4", "Fa:4"],
  "A7/G":   ["Sol:3", "La:3", "Do#:4", "Mi:4"],
  "D/F#":   ["Fa#:3", "Ré:3", "La:3", "Ré:4"],
  "G/B":    ["Si:3", "Sol:3", "Ré:4", "Sol:4"],
  "G7/B":   ["Si:3", "Sol:3", "Si:3", "Fa:4"],
  "D7/C":   ["Do:3", "Ré:3", "Fa#:3", "Do:4"],
  "Am/C":   ["Do:3", "La:3", "Mi:4", "La:4"],
  "Dm/F":   ["Fa:3", "Ré:3", "La:3", "Ré:4"],
  "Em/B":   ["Si:3", "Mi:3", "Sol:3", "Mi:4"],
  "Bdim/D": ["Ré:3", "Si:3", "Fa:3", "Si:3"],

  // ── Renversements 2e (quinte à la basse) ──────────────────────────────────
  "C/G":    ["Sol:3", "Mi:3", "Sol:3", "Do:5"],
  "G/D":    ["Ré:3", "Sol:3", "Si:3", "Sol:4"],

  // ── Renversements Do mineur ───────────────────────────────────────────────
  "Gm/Bb":  ["Sib:3", "Sol:3", "Ré:4", "Sol:4"],
  "Fm/Ab":  ["Lab:3", "Fa:3", "Do:4", "Fa:4"],
  "Cm/Eb":  ["Mib:3", "Do:3", "Sol:3", "Do:5"],

  // ── Progressions spéciales ────────────────────────────────────────────────
  "Am_pivot": ["La:3", "Mi:3", "Do:4", "La:4"],
  "G7sus4":   ["Sol:3", "Sol:3", "Do:4", "Fa:4"],
  "G7/C":     ["Do:3", "Sol:3", "Si:3", "Fa:4"],

  // ── Alias cours 5 ─────────────────────────────────────────────────────────
  Cm2:      ["Do:3", "Sol:3", "Mib:4", "Do:5"],

  // ── Triton seul ───────────────────────────────────────────────────────────
  tritone:  ["Si:3", "Fa:4"],

};

export function getSATBKeys(chordName: string): string[] {
  return SATB[chordName] ?? [];
}