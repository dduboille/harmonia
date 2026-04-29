/**
 * lib/satb-voicings.ts
 * Harmonia — Voicings SATB avec conduite de voix
 *
 * Convention : notes en français (Do Ré Mi Fa Sol La Si)
 * Format dotKeys PianoPlayer : "Note:octave"
 *
 * Voicings calculés selon les règles SATB :
 * - Soprano : Do4–Sol5
 * - Alto    : Sol3–Do5
 * - Ténor   : Do3–Sol4
 * - Basse   : Mi2–Do4
 *
 * Disposition serrée (close position) pour les voix supérieures
 * Basse à l'octave inférieure pour le caractère harmonique
 */

export const SATB: Record<string, string[]> = {

  // ── Triades majeures ─────────────────────────────────────────────────────────

  // C majeur — I en Do majeur
  // B: Do3, T: Sol3, A: Mi4, S: Do5
  C:    ["Do:2", "Sol:3", "Mi:4", "Do:5"],

  // F majeur — IV en Do majeur
  // B: Fa2, T: Do3, A: La3, S: Fa4
  F:    ["Fa:2", "Do:3", "La:3", "Fa:4"],

  // G majeur — V en Do majeur
  // B: Sol2, T: Ré3, A: Si3, S: Sol4
  G:    ["Sol:2", "Ré:3", "Si:3", "Sol:4"],

  // A majeur — V en Ré majeur / tonicisation
  A:    ["La:2", "Mi:3", "Do#:4", "La:4"],

  // D majeur
  D:    ["Ré:2", "La:3", "Fa#:3", "Ré:4"],

  // E majeur
  E:    ["Mi:2", "Si:3", "Sol#:3", "Mi:4"],

  // Bb majeur
  Bb:   ["Sib:2", "Fa:3", "Ré:4", "Sib:4"],

  // Eb majeur
  Eb:   ["Mib:2", "Sib:3", "Sol:4", "Mib:5"],

  // Ab majeur
  Ab:   ["Lab:2", "Mib:3", "Do:4", "Lab:4"],

  // ── Triades mineures ─────────────────────────────────────────────────────────

  // Am — VI en Do majeur
  // B: La2, T: Mi3, A: Do4, S: La4
  Am:   ["La:2", "Mi:3", "Do:4", "La:4"],

  // Dm — II en Do majeur
  // B: Ré2, T: La3, A: Fa3, S: Ré4  (Fa doublé)
  Dm:   ["Ré:2", "Fa:3", "La:3", "Ré:4"],

  // Em — III en Do majeur
  Em:   ["Mi:2", "Si:3", "Sol:3", "Mi:4"],

  // Bm
  Bm:   ["Si:2", "Fa#:3", "Ré:4", "Si:4"],

  // Gm
  Gm:   ["Sol:2", "Ré:3", "Sib:3", "Sol:4"],

  // Cm
  Cm:   ["Do:2", "Sol:3", "Mib:4", "Do:5"],

  // Fm
  Fm:   ["Fa:2", "Do:3", "Lab:3", "Fa:4"],

  // ── Accord diminué ───────────────────────────────────────────────────────────

  // Bdim — VII en Do majeur
  // B: Si2, T: Ré3 (doublure tierce), A: Fa3, S: Si3
  Bdim: ["Si:2", "Ré:3", "Fa:3", "Si:3"],

  // ── Tétrades dominante 7 ─────────────────────────────────────────────────────

  // G7 — V7 en Do majeur — résolution clé
  // B: Sol2, T: Sol3 (quinte sucrée), A: Si3, S: Fa4
  // Résolution : Fa→Mi, Si→Do, Sol reste
  G7:   ["Sol:2", "Sol:3", "Si:3", "Fa:4"],

  // D7 — V7 en Sol majeur
  D7:   ["Ré:2", "Ré:3", "Fa#:3", "Do:4"],

  // A7 — V7 en Ré majeur
  A7:   ["La:2", "La:3", "Do#:4", "Sol:4"],

  // E7 — V7 en La majeur
  E7:   ["Mi:2", "Mi:3", "Sol#:3", "Ré:4"],

  // B7 — V7 en Mi majeur
  B7:   ["Si:2", "Si:3", "Ré#:4", "La:4"],

  // C7 — V7 en Fa majeur
  C7:   ["Do:2", "Do:3", "Mi:3", "Sib:3"],

  // F7
  F7:   ["Fa:2", "Fa:3", "La:3", "Mib:4"],

  // Bb7
  Bb7:  ["Sib:2", "Sib:3", "Ré:4", "Lab:4"],

  // ── Tétrades majeur 7 ────────────────────────────────────────────────────────

  // CMaj7 — IMaj7 en Do majeur
  CMaj7: ["Do:2", "Sol:3", "Mi:4", "Si:4"],

  // FMaj7 — IVMaj7 en Do majeur
  FMaj7: ["Fa:2", "Do:3", "La:3", "Mi:4"],

  // GMaj7
  GMaj7: ["Sol:2", "Ré:3", "Si:3", "Fa#:4"],

  // ── Tétrades mineur 7 ────────────────────────────────────────────────────────

  // Am7 — VIm7 en Do majeur
  Am7:  ["La:2", "Mi:3", "Do:4", "Sol:4"],

  // Dm7 — IIm7 en Do majeur — résout vers G7
  // B: Ré2, T: Do3, A: Fa3, S: La3
  // Notes communes avec G7 : Fa reste, Do→Si, La→Sol (ou reste)
  Dm7:  ["Ré:2", "Do:3", "Fa:3", "La:3"],

  // Em7
  Em7:  ["Mi:2", "Si:3", "Sol:3", "Ré:4"],

  // Bm7b5 — IIm7b5 en Do majeur
  Bm7b5: ["Si:2", "Fa:3", "La:3", "Ré:4"],

  // ── Renversements ────────────────────────────────────────────────────────────

  // C/E — I en 1er renversement (cadence imparfaite)
  "C/E":  ["Mi:2", "Sol:3", "Do:4", "Sol:4"],

  // C/G — I en 2e renversement (6/4 de cadence)
  "C/G":  ["Sol:2", "Mi:3", "Sol:3", "Do:5"],

  // G/B — V en 1er renversement
  "G/B":  ["Si:2", "Sol:3", "Ré:4", "Sol:4"],

  // G7/B — V7 en 1er renversement
  "G7/B": ["Si:2", "Sol:3", "Si:3", "Fa:4"],

  // F/A — IV en 1er renversement
  "F/A":  ["La:2", "Fa:3", "Do:4", "Fa:4"],

  // Am/C — VIm en 1er renversement
  "Am/C": ["Do:2", "La:3", "Mi:4", "La:4"],

  // Gm/Bb — pour basse de chaconne
  "Gm/Bb": ["Sib:2", "Sol:3", "Ré:4", "Sol:4"],

  // Fm/Ab — pour basse de chaconne
  "Fm/Ab": ["Lab:2", "Fa:3", "Do:4", "Fa:4"],

  // ── Progressions spéciales ───────────────────────────────────────────────────

  // Accords pivot (cours 8)
  "Am_pivot": ["La:2", "Mi:3", "Do:4", "La:4"],

  // V7sus4 (cours 8)
  "G7sus4": ["Sol:2", "Sol:3", "Do:4", "Fa:4"],

  // G7/C — accord appogiaturé (cours 9)
  "G7/C": ["Do:2", "Sol:3", "Si:3", "Fa:4"],

  // ── Emprunts à l'homonyme (cours 5) ─────────────────────────────────────────

  // Fm — IV mineur emprunté
  // Fm: ["Fa:2", "Do:3", "Lab:3", "Fa:4"],  // déjà défini

  // Ab — bVI emprunté
  // Ab: déjà défini

  // ── Triton / accord de triton ────────────────────────────────────────────────
  tritone: ["Si:3", "Fa:4"],

};

/**
 * Récupère les dotKeys SATB pour un accord donné
 * Fallback sur position fondamentale si accord inconnu
 */
export function getSATBKeys(chordName: string): string[] {
  return SATB[chordName] ?? [];
}