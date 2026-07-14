/**
 * lib/voice-lines.ts
 * Harmonia — Reconstituer les LIGNES MÉLODIQUES d'une partition.
 *
 * Une note étrangère ne se reconnaît qu'à la façon dont on l'ABORDE et dont on la
 * QUITTE : une note de passage traverse par degrés conjoints, une broderie revient
 * sur ses pas, une échappée s'enfuit par un saut. Sans ligne mélodique, aucune de
 * ces distinctions n'existe — et le coût d'un abandon (cf. `chord-choice`) non plus.
 *
 * MusicXML porte cette information : `part` et `voice`. Encore faut-il qu'elle
 * décrive vraiment une ligne — voir `voisinage`.
 */

import type { ParsedNote } from "./musicxml-parse";

export interface Voisinage {
  precedente?: ParsedNote;
  suivante?: ParsedNote;
}

export interface CarteMelodique {
  /**
   * Voisinage mélodique d'une note, ou `null` si sa voix ne forme pas une LIGNE à
   * cet instant — c'est le cas des accords plaqués de l'écriture pianistique, où
   * plusieurs notes partagent la même voix au même instant. On ne devine pas quelle
   * note « précède » laquelle : la note sera dite étrangère sans être nommée.
   */
  voisinage(note: ParsedNote): Voisinage | null;
}

export function carteMelodique(notes: ParsedNote[]): CarteMelodique {
  const lignes = new Map<string, ParsedNote[]>();
  for (const n of notes) {
    const cle = `${n.part}|${n.voice}`;
    const ligne = lignes.get(cle) ?? [];
    ligne.push(n);
    lignes.set(cle, ligne);
  }

  const carte = new Map<ParsedNote, Voisinage | null>();

  for (const ligne of lignes.values()) {
    ligne.sort((a, b) => a.onset - b.onset || a.midi - b.midi);

    // Les notes qui partagent un onset dans la MÊME voix : la voix n'est pas une
    // ligne à cet instant. Ni elles, ni leurs voisines immédiates ne peuvent être
    // situées mélodiquement — on ne saurait pas laquelle précède laquelle.
    const simultanees = new Set<number>();
    for (let i = 1; i < ligne.length; i++) {
      if (ligne[i].onset === ligne[i - 1].onset) {
        simultanees.add(ligne[i].onset);
      }
    }

    for (let i = 0; i < ligne.length; i++) {
      const note = ligne[i];
      const precedente = ligne[i - 1];
      const suivante = ligne[i + 1];

      const ambigu =
        simultanees.has(note.onset) ||
        (precedente !== undefined && simultanees.has(precedente.onset)) ||
        (suivante !== undefined && simultanees.has(suivante.onset));

      carte.set(note, ambigu ? null : { precedente, suivante });
    }
  }

  return {
    voisinage: (note) => carte.get(note) ?? null,
  };
}
