/**
 * lib/harmony-segmentation.ts
 * Harmonia — « Quelles notes SONNENT à l'instant T », puis rythme harmonique.
 *
 * Une note sonne de son attaque à son extinction — pas seulement au temps où elle
 * est écrite. C'est toute la différence entre un accord complet et un accord privé
 * de sa basse.
 */

import { TPQ, type ParsedNote, type ParsedScore } from "./musicxml-parse";

export interface Slice {
  measure: number;
  beat: number;        // 1-based, unité = noire
  onset: number;       // ticks absolus
  notes: ParsedNote[]; // toutes les notes sonnantes (attaques ET tenues)
  bass: ParsedNote;    // la plus grave (midi minimal) — c'est ELLE qui chiffre
  pcs: number[];       // classes de hauteurs uniques
}

/** Notes sonnant à l'instant `t` : attaquées au plus tard en `t`, pas encore éteintes. */
export function notesSoundingAt(notes: ParsedNote[], t: number): ParsedNote[] {
  return notes.filter((n) => n.onset <= t && t < n.onset + n.duration);
}

/** Une tranche par temps (noire) sur toute la partition. Les temps muets sont omis. */
export function sliceByBeat(score: ParsedScore): Slice[] {
  const out: Slice[] = [];

  for (const m of score.measures) {
    const nbTemps = Math.max(1, Math.ceil(m.length / TPQ));
    for (let beat = 1; beat <= nbTemps; beat++) {
      const onset = m.start + (beat - 1) * TPQ;
      if (onset >= m.start + m.length) break;

      const notes = notesSoundingAt(score.notes, onset);
      if (notes.length === 0) continue;

      const bass = notes.reduce((grave, n) => (n.midi < grave.midi ? n : grave));
      out.push({
        measure: m.numero,
        beat,
        onset,
        notes,
        bass,
        pcs: [...new Set(notes.map((n) => n.pc))],
      });
    }
  }

  return out;
}

/**
 * RYTHME HARMONIQUE — fusionne les tranches consécutives portant la même harmonie.
 *
 * `signature` rend l'identité harmonique d'une tranche (fondamentale, qualité,
 * basse). Deux tranches de signature identique n'en font qu'une : on garde la
 * PREMIÈRE, celle où l'accord change — c'est là qu'un musicien annote, et non sur
 * chaque temps d'une harmonie tenue.
 *
 * Une signature VIDE (accord non identifié) ne fusionne jamais : deux tranches
 * illisibles ne sont pas « la même harmonie ».
 */
export function mergeSlices(slices: Slice[], signature: (s: Slice) => string): Slice[] {
  const out: Slice[] = [];
  let precedente = "";

  for (const s of slices) {
    const sig = signature(s);
    if (sig !== "" && sig === precedente) continue;
    out.push(s);
    precedente = sig;
  }

  return out;
}
