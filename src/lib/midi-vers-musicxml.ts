/**
 * lib/midi-vers-musicxml.ts
 * Harmonia — L'épellation d'une hauteur MIDI en note écrite, AU DIAPASON DE L'ARMURE.
 *
 * Un seul et même orthographieur pour tous les convertisseurs qui partent de MIDI
 * (composition guidée, squelette harmonique) — pour ne PAS multiplier les logiques
 * divergentes. L'ancienne présentation épelait tout en dièses (des La# en Fa majeur,
 * des Sol#/Ré# là où un cours enseigne Lab/Mib) ; ici l'orthographe suit l'armure :
 *  • armure à dièses → dièses ;
 *  • armure à bémols → bémols ;
 *  • tonalité neutre (Do/La m) → bémols pour Mib/Lab/Sib/Réb (les emprunts au mineur
 *    parallèle, cas courant), mais Fa# conservé (sensibles des dominantes secondaires).
 */

import { KEY_ACCIDENTALS } from "@/lib/key-accidentals";
import { nomNoteEn } from "@/lib/orthographe-tonale";

export const NOMS_DIESES = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
export const NOMS_BEMOLS = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];
export const NOMS_NEUTRE = ["C", "Db", "D", "Eb", "E", "F", "F#", "G", "Ab", "A", "Bb", "B"];

/**
 * Table d'orthographe des hauteurs d'après le nombre de quintes de l'armure.
 *
 * Les trois tables figées ci-dessus s'arrêtent aux cinq bémols usuels : ni `Cb`
 * ni `Fb` n'y figurent, si bien qu'une armure à six ou sept bémols gravait un
 * « B » là où mi♭ mineur écrit « Cb ». Au-delà du cas neutre, la table est donc
 * calculée depuis le cycle des quintes, qui les atteint.
 *
 * Do majeur / la mineur gardent leur table écrite à la main : le choix d'y
 * graver Réb plutôt que Do♯ (l'emprunt au mineur parallèle est plus courant
 * qu'une sensible de dominante secondaire) est délibéré, et l'armure vide ne
 * permet pas de le déduire.
 */
export function nomsPourArmure(fifths: number): string[] {
  if (fifths === 0) return NOMS_NEUTRE;
  return Array.from({ length: 12 }, (_, pc) => nomNoteEn(pc, fifths));
}

/** Glyphe d'altération affiché en fonction du nombre de demi-tons. */
export const GLYPHE: Record<number, string> = {
  2: "double-sharp", 1: "sharp", 0: "natural", [-1]: "flat", [-2]: "flat-flat",
};

/** Lettre + altération (demi-tons, -2..+2) d'un nom anglais « F# », « Eb »… */
export function decoderNom(nom: string): { step: string; alter: number } {
  const step = nom[0];
  const suffixe = nom.slice(1);
  const alter = suffixe.startsWith("#") ? suffixe.length : suffixe.startsWith("b") ? -suffixe.length : 0;
  return { step, alter };
}

/** Classe de hauteur de chaque lettre, pour retrouver l'octave d'une orthographe. */
const PC_LETTRE: Record<string, number> = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };

/**
 * MIDI → hauteur écrite, orthographiée selon la table de l'armure (`noms`).
 *
 * L'octave se déduit de la LETTRE retenue, pas de la hauteur : Si3 et Do♭4 sont
 * la même touche, mais « Do » appartient à l'octave suivante. Prendre
 * `Math.floor(midi / 12) - 1` puis y coller un `Cb` gravait un Do♭3, une
 * septième trop bas — inoffensif tant que la table ne contenait aucun `Cb`,
 * faux dès qu'elle en contient.
 */
export function decoderMidi(midi: number, noms: string[]): { step: string; alter: number; octave: number } {
  const pc = ((midi % 12) + 12) % 12;
  const { step, alter } = decoderNom(noms[pc]);
  const octave = (midi - PC_LETTRE[step] - alter) / 12 - 1;
  return { step, alter, octave };
}

/**
 * Armure : nombre de quintes (positif = dièses, négatif = bémols) et altération
 * attendue par lettre, dérivés de KEY_ACCIDENTALS (un mineur « Xm » reprend l'armure
 * de son relatif majeur). Une note dont l'altération diffère de l'attendu s'affiche.
 */
export function armure(keySignature: string): { fifths: number; attendu: Record<string, number> } {
  const entries = KEY_ACCIDENTALS[keySignature] ?? KEY_ACCIDENTALS[keySignature.replace(/m$/, "")] ?? [];
  const attendu: Record<string, number> = {};
  for (const e of entries) attendu[e.note] = e.acc === "#" ? 1 : -1;
  const fifths = entries.length === 0 ? 0 : entries[0].acc === "#" ? entries.length : -entries.length;
  return { fifths, attendu };
}
