/**
 * lib/harmony-segmentation.ts
 * Harmonia — « Quelles notes SONNENT à l'instant T », puis rythme harmonique.
 *
 * Une note sonne de son attaque à son extinction — pas seulement au temps où elle
 * est écrite. C'est toute la différence entre un accord complet et un accord privé
 * de sa basse.
 */

import { TPQ, type ParsedNote, type ParsedScore } from "./musicxml-parse";

/**
 * Durée d'un TEMPS RÉEL, celui que bat un musicien — pas toujours la noire.
 *
 * Reconnue à la SEULE armure de mesure (le dénominateur du chiffre), pas conjuguée
 * avec la basse ou l'harmonie : en 2/2 (cut time), le temps est la BLANCHE ; dans
 * une mesure COMPOSÉE (6/8, 9/8, 12/8 — dénominateur 8, numérateur multiple de 3),
 * c'est la NOIRE POINTÉE (trois croches). Sinon, la noire (4/4, 3/4, 2/4…).
 *
 * Sans cette distinction, une basse arpégée sur tout un 2/2 (une noire = un quart
 * de mesure) ne montre jamais plus de deux de ses quatre sons à la fois : le moteur
 * fragmente une seule harmonie tenue en plusieurs lectures partielles, chacune
 * moins chère que la lecture complète (cf. `chord-choice.ts`, COUT_SON_REVENDIQUE).
 * Constaté sur la Symphonie n°40 de Mozart (mesures 5-6, Am7b5 lu en Cm/Am/Ebmaj/Am).
 */
export function dureeDuTemps(signature: string): number {
  const [beatsStr, beatTypeStr] = signature.split("/");
  const beats = parseInt(beatsStr, 10);
  const beatType = parseInt(beatTypeStr, 10);
  if (!Number.isFinite(beats) || !Number.isFinite(beatType) || beatType <= 0) return TPQ;

  // Mesure COMPOSÉE (6/8, 9/8, 12/8 — jamais 3/8, qui est une simple à la croche) :
  // le temps est la noire pointée (trois croches), pas la valeur du dénominateur.
  if (beatType === 8 && beats > 3 && beats % 3 === 0) return 1.5 * TPQ;

  // Mesure SIMPLE : le temps est la valeur notée par le dénominateur — la noire en
  // 4/4, la blanche en 2/2 (cut time), la croche en 3/8…
  return (4 / beatType) * TPQ;
}

export interface Slice {
  measure: number;
  beat: number;        // 1-based, unité = le TEMPS RÉEL (cf. `dureeDuTemps`)
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
  const duree = dureeDuTemps(score.signature);

  for (const m of score.measures) {
    const nbTemps = Math.max(1, Math.ceil(m.length / duree));
    for (let beat = 1; beat <= nbTemps; beat++) {
      const onset = m.start + (beat - 1) * duree;
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

/**
 * Notes sonnant à un moment QUELCONQUE de l'intervalle `[debut, fin[`.
 *
 * `notesSoundingAt` ne regarde qu'un instant : elle ne voit pas la croche de
 * passage attaquée sur le contretemps, qui n'existe qu'ENTRE deux temps. C'était
 * commode tant qu'on ignorait les notes étrangères — c'est exactement ce qu'il faut
 * cesser d'ignorer.
 */
export function notesSoundingDuring(
  notes: ParsedNote[], debut: number, fin: number,
): ParsedNote[] {
  return notes.filter((n) => n.onset < fin && debut < n.onset + n.duration);
}

/**
 * Un SPAN par temps : la durée sur laquelle une harmonie est décidée.
 *
 * DEUX ÉCHELLES, à ne pas confondre : la VISIBILITÉ descend à chaque attaque (le
 * span voit toutes les notes qui sonnent pendant sa durée), mais la DÉCISION
 * HARMONIQUE reste prise au temps. L'harmonie change rarement plus vite que la
 * pulsation, et une croche de passage n'a pas à réclamer son propre accord.
 */
export interface Span {
  measure: number;
  beat: number;       // 1-based
  debut: number;      // ticks absolus
  fin: number;        // ticks absolus (exclusif)
  notes: ParsedNote[];
}

export function spansParTemps(score: ParsedScore): Span[] {
  const out: Span[] = [];
  const duree = dureeDuTemps(score.signature);

  for (const m of score.measures) {
    const nbTemps = Math.max(1, Math.ceil(m.length / duree));
    for (let beat = 1; beat <= nbTemps; beat++) {
      const debut = m.start + (beat - 1) * duree;
      if (debut >= m.start + m.length) break;
      const fin = Math.min(debut + duree, m.start + m.length);

      const notes = notesSoundingDuring(score.notes, debut, fin);
      if (notes.length === 0) continue;

      out.push({ measure: m.numero, beat, debut, fin, notes });
    }
  }

  return out;
}
