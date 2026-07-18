/**
 * lib/note-musicxml.ts
 * Harmonia — Primitives PARTAGÉES de sérialisation d'une note vers MusicXML.
 *
 * Le décodage « nom de note → (lettre, altération) », le glyphe d'altération et
 * le calcul d'armure étaient enfermés dans satb-vers-musicxml.ts. Le graveur du
 * contrepoint (contrepoint-vers-musicxml.ts) a besoin exactement de la même
 * orthographe : on la factorise ici pour ÉVITER une seconde copie divergente de
 * la logique de hauteur. satb-vers-musicxml et contrepoint-vers-musicxml
 * importent tous deux ces primitives.
 */

import { KEY_ACCIDENTALS } from "@/lib/key-accidentals";
import type { NoteName } from "@/lib/satb-rules";

// Glyphe d'altération affiché en fonction du nombre de demi-tons.
export const GLYPHE_ALTERATION: Record<number, string> = {
  2: "double-sharp", 1: "sharp", 0: "natural", [-1]: "flat", [-2]: "flat-flat",
};

/** Lettre + altération (en demi-tons, -2..+2) d'un nom de note « F# », « Gbb »… */
export function decoderNote(name: NoteName): { step: string; alter: number } {
  const step = name[0];
  const suffixe = name.slice(1);
  const alter = suffixe.startsWith("#") ? suffixe.length : suffixe.startsWith("b") ? -suffixe.length : 0;
  return { step, alter };
}

/**
 * Armure : nombre de quintes (positif = dièses, négatif = bémols) et altération
 * ATTENDUE par lettre. Dérivés de KEY_ACCIDENTALS (source déjà utilisée par le
 * moteur de validation) : un mineur « Xm » reprend l'armure de son relatif majeur.
 * Une note dont l'altération diffère de l'attendu portera un <accidental> affiché.
 */
export function armureDe(keySignature: string): { fifths: number; attendu: Record<string, number> } {
  const entries = KEY_ACCIDENTALS[keySignature] ?? KEY_ACCIDENTALS[keySignature.replace(/m$/, "")] ?? [];
  const attendu: Record<string, number> = {};
  for (const e of entries) attendu[e.note] = e.acc === "#" ? 1 : -1;
  const fifths = entries.length === 0 ? 0 : entries[0].acc === "#" ? entries.length : -entries.length;
  return { fifths, attendu };
}
