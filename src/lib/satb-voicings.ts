/**
 * lib/satb-voicings.ts
 * Harmonia — Voicings SATB avec conduite de voix
 *
 * Convention : notes en français (Do Ré Mi Fa Sol La Si)
 * Format dotKeys PianoPlayer : "Note:octave"
 *
 * Renversements :
 * - État fondamental : fondamentale à la basse
 * - 1er renversement (/tierce) : tierce à la basse
 * - 2e renversement (/quinte) : quinte à la basse
 * - 3e renversement (/septième) : septième à la basse (tétrades seulement)
 */

export const SATB: Record<string, string[]> = {

  // ── Triades majeures ──────────────────────────────────────────────────────
  C:      ["Do:3", "Sol:3", "Mi:4", "Do:5"],
  F:      ["Fa:2", "Do:3", "La:3", "Fa:4"],   // basse Fa grave
  G7:     ["Sol:2", "Si:3",  "Ré:4", "Fa:4"],   // basse Sol grave, quinte présente
  G:      ["Sol:3", "Ré:3", "Si:3", "Sol:4"],
  A:      ["La:3", "Mi:3", "Do#:4", "La:4"],
  D:      ["Ré:3", "La:3", "Fa#:3", "Ré:4"],
  E:      ["Mi:3", "Si:3", "Sol#:3", "Mi:4"],
  Bb:     ["Sib:3", "Fa:3", "Ré:4", "Sib:4"],
  Eb:     ["Mib:3", "Sib:3", "Sol:4", "Mib:5"],
  Ab:     ["Lab:3", "Mib:3", "Do:4", "Lab:4"],
  Db:     ["Réb:3", "Lab:3", "Fa:4", "Réb:5"],

  // ── Triades mineures ──────────────────────────────────────────────────────
  Am:     ["La:2", "Mi:3", "Do:4", "La:4"],
  Dm:     ["Ré:3", "Fa:3", "La:3", "Ré:4"],
  Em:     ["Mi:3", "Si:3", "Sol:3", "Mi:4"],
  Bm:     ["Si:3", "Fa#:3", "Ré:4", "Si:4"],
  Gm:     ["Sol:2", "Ré:3", "Sib:3", "Sol:4"],
  Cm:     ["Do:3", "Sol:3", "Mib:4", "Do:5"],
  Fm:     ["Fa:3", "Do:3", "Lab:3", "Fa:4"],
  Ebm:    ["Mib:3", "Sib:3", "Solb:4", "Mib:5"],
  Dbm:    ["Réb:3", "Lab:3", "Fab:4", "Réb:5"],

  // ── Accords diminués ──────────────────────────────────────────────────────
  Bdim:   ["Si:3", "Ré:3", "Fa:3", "Si:4"],
  Bdim7:  ["Si:3", "Fa:3", "Lab:3", "Ré:4"],

  // ── Tétrades dominante 7 (état fondamental) ───────────────────────────────
  // Structure : fondamentale, fondamentale (quinte sucrée), tierce, septième
  G7:     ["Sol:2", "Si:3",  "Ré:4", "Fa:4"],   // basse Sol grave, quinte présente
  D7:     ["Ré:3", "Ré:3",  "Fa#:3", "Do:4"],
  A7:     ["La:3", "La:3",  "Do#:4", "Sol:4"],
  E7:     ["Mi:3", "Mi:3",  "Sol#:3", "Ré:4"],
  B7:     ["Si:3", "Si:3",  "Ré#:4", "La:4"],
  C7:     ["Do:3", "Do:3",  "Mi:3",  "Sib:3"],
  F7:     ["Fa:3", "Fa:3",  "La:3",  "Mib:4"],
  Bb7:    ["Sib:3", "Sib:3", "Ré:4", "Lab:4"],
  Eb7:    ["Mib:3", "Mib:3", "Sol:3", "Réb:4"],
  Ab7:    ["Lab:3", "Lab:3", "Do:4",  "Solb:4"],

  // ── Tétrades majeur 7 ─────────────────────────────────────────────────────
  CMaj7:  ["Do:3", "Sol:3", "Mi:4",  "Si:4"],
  FMaj7:  ["Fa:3", "Do:4",  "La:3",  "Mi:4"],
  GMaj7:  ["Sol:3", "Ré:3", "Si:3",  "Fa#:4"],
  EbMaj7: ["Mib:3", "Sib:3", "Sol:4", "Ré:5"],
  AbMaj7: ["Lab:3", "Mib:3", "Do:4",  "Sol:4"],

  // ── Tétrades mineur 7 ─────────────────────────────────────────────────────
  Am7:    ["La:3", "Mi:3",  "Do:4",  "Sol:4"],
  Dm7:    ["Ré:3", "Do:3",  "Fa:3",  "La:3"],
  Em7:    ["Mi:3", "Si:3",  "Sol:3", "Ré:4"],
  Bm7b5:  ["Si:3", "Fa:3",  "La:3",  "Ré:4"],
  Cm7:    ["Do:3", "Sol:3", "Mib:4", "Sib:4"],
  Fm7:    ["Fa:3", "Do:3",  "Lab:3", "Mib:4"],
  Gm7:    ["Sol:3", "Ré:3", "Sib:3", "Fa:4"],
  Dm7b5:  ["Ré:3", "Fa:3",  "Lab:3", "Do:4"],

  // ── Renversements — Triades majeures ──────────────────────────────────────

  // C : tierce=Mi, quinte=Sol
  "C/E":    ["Mi:3",  "Sol:3", "Do:4",  "Sol:4"],  // 1er renversement
  "C/G":    ["Sol:3", "Mi:3",  "Sol:3", "Do:5"],   // 2e renversement

  // F : tierce=La, quinte=Do
  "F/A":  ["La:2", "Fa:3", "Do:4", "Fa:4"],   // basse La grave
  "F/C":  ["Do:3", "Fa:3", "La:3", "Fa:4"],   // basse Do

  // G : tierce=Si, quinte=Ré
  "G/B":    ["Si:3",  "Sol:3", "Ré:4",  "Sol:4"],  // 1er renversement
  "G/D":    ["Ré:3",  "Sol:3", "Si:3",  "Sol:4"],  // 2e renversement

  // D : tierce=Fa#, quinte=La
  "D/F#":   ["Fa#:3", "Ré:3",  "La:3",  "Ré:4"],   // 1er renversement

  // ── Renversements — Triades mineures ──────────────────────────────────────

  // Am : tierce=Do, quinte=Mi
  "Am/C":   ["Do:3",  "La:3",  "Mi:4",  "La:4"],   // 1er renversement
  "Am/E":   ["Mi:3",  "La:3",  "Do:4",  "La:4"],   // 2e renversement

  // Dm : tierce=Fa, quinte=La
  "Dm/F":   ["Fa:3",  "Ré:3",  "La:3",  "Ré:4"],   // 1er renversement

  // Em : tierce=Sol, quinte=Si
  "Em/B":   ["Si:3",  "Mi:3",  "Sol:3", "Mi:4"],   // 2e renversement (quinte)

  // Gm : tierce=Sib, quinte=Ré
  "Gm/Bb":  ["Sib:2", "Sol:3", "Ré:4",  "Sol:4"],  // 1er renversement
  "Gm/D":   ["Ré:3",  "Sol:3", "Sib:3", "Sol:4"],  // 2e renversement

  // Fm : tierce=Lab, quinte=Do
  "Fm/Ab":  ["Lab:3", "Fa:3",  "Do:4",  "Fa:4"],   // 1er renversement

  // Cm : tierce=Mib, quinte=Sol
  "Cm/Eb":  ["Mib:3", "Do:3",  "Sol:3", "Do:5"],   // 1er renversement

  // Bdim : tierce=Ré (doublée), quinte=Fa
  "Bdim/D": ["Ré:3",  "Si:3",  "Fa:3",  "Si:4"],   // 1er renversement

  // ── Renversements — G7 (Sol Si Ré Fa) ────────────────────────────────────
  // État fondamental : Sol à la basse
  // 1er renversement /B : Si (tierce) à la basse
  // 2e renversement /D : Ré (quinte) à la basse
  // 3e renversement /F : Fa (septième) à la basse

  "G7/B": ["Si:2",  "Sol:3", "Ré:4", "Fa:4"],   // basse Si grave
  "G7/D": ["Ré:3",  "Si:3",  "Fa:4", "Sol:4"],  // basse Ré
  "G7/F": ["Fa:3",  "Sol:3", "Si:3", "Ré:4"],   // basse Fa

  // ── Renversements — D7 (Ré Fa# La Do) ────────────────────────────────────
  // 1er /F# : Fa# (tierce) à la basse
  // 3e /C  : Do (septième) à la basse

  "D7/F#":  ["Fa#:3", "La:3",  "Do:4",  "Ré:4"],   // 1er renversement
  "D7/C":   ["Do:3",  "Ré:3",  "Fa#:3", "Do:4"],   // 3e renversement

  // ── Renversements — A7 (La Do# Mi Sol) ───────────────────────────────────
  // 1er /C# : Do# (tierce) à la basse
  // 3e /G  : Sol (septième) à la basse

  "A7/C#":  ["Do#:3", "La:3",  "Mi:4",  "Sol:4"],  // 1er renversement
  "A7/G":   ["Sol:3", "La:3",  "Do#:4", "Mi:4"],   // 3e renversement

  // ── Renversements — Db (accord napolitain, Réb Fa Lab) ───────────────────
  // 1er /F : Fa (tierce) à la basse

  "Db/F":   ["Fa:3",  "Réb:4", "Lab:4", "Réb:5"],  // 1er renversement (♭II6)
  "Db/Ab":  ["Lab:3", "Réb:4", "Fa:4",  "Réb:5"],  // 2e renversement

  // ── Progressions spéciales ────────────────────────────────────────────────
  "Am_pivot": ["La:3", "Mi:3",  "Do:4",  "La:4"],
  "G7sus4":   ["Sol:3", "Sol:3", "Do:4", "Fa:4"],
  "G7/C":     ["Do:3",  "Sol:3", "Si:3", "Fa:4"],  // accord appogiaturé

  // ── Alias ─────────────────────────────────────────────────────────────────
  Cm2:      ["Do:3", "Sol:3", "Mib:4", "Do:5"],

  // ── Triton seul ───────────────────────────────────────────────────────────
  tritone:  ["Si:3", "Fa:4"],

};

export function getSATBKeys(chordName: string): string[] {
  return SATB[chordName] ?? [];
}