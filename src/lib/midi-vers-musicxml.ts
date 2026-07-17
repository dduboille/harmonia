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

export const NOMS_DIESES = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
export const NOMS_BEMOLS = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];
export const NOMS_NEUTRE = ["C", "Db", "D", "Eb", "E", "F", "F#", "G", "Ab", "A", "Bb", "B"];

/** Table d'orthographe des hauteurs d'après le nombre de quintes de l'armure. */
export function nomsPourArmure(fifths: number): string[] {
  return fifths < 0 ? NOMS_BEMOLS : fifths > 0 ? NOMS_DIESES : NOMS_NEUTRE;
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

/** MIDI → hauteur écrite, orthographiée selon la table de l'armure (`noms`). */
export function decoderMidi(midi: number, noms: string[]): { step: string; alter: number; octave: number } {
  const pc = ((midi % 12) + 12) % 12;
  const octave = Math.floor(midi / 12) - 1;
  return { ...decoderNom(noms[pc]), octave };
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
