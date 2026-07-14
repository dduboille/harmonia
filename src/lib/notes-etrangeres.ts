/**
 * lib/notes-etrangeres.ts
 * Harmonia — La taxonomie des NOTES ÉTRANGÈRES.
 *
 * Une note qui n'appartient pas à l'accord n'est pas une anomalie : c'est de
 * l'écriture. Encore faut-il la NOMMER — c'est la matière même du cours d'harmonie,
 * et c'est ce qu'un élève doit savoir faire.
 *
 * Chacune se reconnaît à la façon dont on l'ABORDE et dont on la QUITTE, à quoi
 * s'ajoutent deux informations que la mélodie seule ne donne pas : ce qu'était
 * l'accord PRÉCÉDENT (pour le retard) et ce que sera le SUIVANT (pour l'anticipation).
 */

import type { ParsedNote } from "./musicxml-parse";
import type { Voisinage } from "./voice-lines";

export type TypeEtrangere =
  | "retard"
  | "pedale"
  | "anticipation"
  | "passage"
  | "broderie"
  | "echappee"
  | "appoggiature";

export const LIBELLE_ETRANGERE: Record<TypeEtrangere, string> = {
  retard: "retard",
  pedale: "pédale",
  anticipation: "anticipation",
  passage: "note de passage",
  broderie: "broderie",
  echappee: "échappée",
  appoggiature: "appoggiature",
};

export interface ContexteEtrangere {
  /** Sons de l'accord retenu pour le segment (classes de hauteurs). */
  pcsAccord: number[];
  pcsAccordPrecedent?: number[];
  pcsAccordSuivant?: number[];
  debutSegment: number;
  finSegment: number;
  tempsFort: boolean;
  /** La note sonne encore sous l'accord suivant (ou sonnait déjà sous le précédent). */
  traverseAccords: boolean;
}

/** Degré CONJOINT : un demi-ton ou un ton. L'unisson n'est pas un mouvement. */
export function conjointe(a: number, b: number): boolean {
  const d = Math.abs(a - b);
  return d === 1 || d === 2;
}

/**
 * Deux notes se SUIVENT dans le discours si la seconde attaque au plus tard là où
 * la première s'éteint. Sans cette garde, une note et sa voisine séparées par deux
 * mesures de silence passeraient pour un mouvement mélodique — et une note isolée
 * se ferait classer « note de passage » vers un futur lointain.
 *
 * `carteMelodique` rend en effet la note suivante DE LA VOIX, fût-elle très loin :
 * rien, là-bas, ne borne le fil du discours. C'est ici qu'on le borne.
 */
export function contigues(premiere: ParsedNote, seconde: ParsedNote): boolean {
  return seconde.onset <= premiere.onset + premiere.duration;
}

/**
 * Classe une note étrangère, ou rend `null` si aucune règle ne l'explique — le
 * moteur ne devine pas. Une note sans voisinage mélodique (accord plaqué dans sa
 * voix, cf. `voice-lines`) n'est jamais nommée : mieux vaut « étrangère » qu'un
 * nom inventé.
 *
 * L'ORDRE DES RÈGLES EST LA RÈGLE :
 *
 *  1. le RETARD d'abord — il est lui aussi tenu par-dessus la barre harmonique, et
 *     la pédale l'avalerait ;
 *  2. la PÉDALE ensuite — elle doit passer AVANT les règles de degré conjoint, qui
 *     la prendraient pour une échappée sur la foi de la note qui la suit, très loin,
 *     dans sa voix ;
 *  3. l'ANTICIPATION — elle exige de connaître l'accord suivant ;
 *  4. enfin les règles de DEGRÉ CONJOINT.
 */
export function classer(
  note: ParsedNote,
  voisinage: Voisinage | null,
  ctx: ContexteEtrangere,
): TypeEtrangere | null {
  if (!voisinage) return null;

  // Une voisine que le silence a détachée de la note n'est pas sa voisine dans le
  // DISCOURS : on la traite comme absente, faute de quoi tout se laisserait nommer.
  const precedente =
    voisinage.precedente !== undefined && contigues(voisinage.precedente, note)
      ? voisinage.precedente
      : undefined;
  const suivante =
    voisinage.suivante !== undefined && contigues(note, voisinage.suivante)
      ? voisinage.suivante
      : undefined;

  // ── 1. RETARD ──
  //
  // Ce qui le définit, et le sépare de l'appoggiature, c'est la PRÉPARATION : la
  // note était DÉJÀ là, et elle y était CONSONANTE. Elle ne fait que tarder à
  // rejoindre le son de l'accord, un degré plus bas.
  const preparee = note.onset < ctx.debutSegment;
  const consonanteAvant = ctx.pcsAccordPrecedent?.includes(note.pc) ?? false;
  const resoutEnDescendant =
    suivante !== undefined &&
    conjointe(note.midi, suivante.midi) &&
    suivante.midi < note.midi;

  if (preparee && consonanteAvant && resoutEnDescendant) return "retard";

  // ── 2. PÉDALE ──
  if (ctx.traverseAccords) return "pedale";

  // ── 3. ANTICIPATION ──
  //
  // La note n'est pas étrangère « en soi » : elle est en avance. Elle appartient à
  // l'accord SUIVANT, et l'attend en le répétant.
  if (
    !ctx.tempsFort &&
    (ctx.pcsAccordSuivant?.includes(note.pc) ?? false) &&
    suivante !== undefined &&
    suivante.midi === note.midi
  ) {
    return "anticipation";
  }

  // ── 4. DEGRÉ CONJOINT ──
  const entreConjoint = precedente !== undefined && conjointe(precedente.midi, note.midi);
  const sortConjoint = suivante !== undefined && conjointe(note.midi, suivante.midi);

  if (precedente !== undefined && suivante !== undefined && entreConjoint && sortConjoint) {
    const monteAvant = note.midi > precedente.midi;
    const monteApres = suivante.midi > note.midi;
    // Même sens : la note TRAVERSE (passage). Sens contraire : elle revient sur ses
    // pas (broderie).
    return monteAvant === monteApres ? "passage" : "broderie";
  }

  // Abordée par degré conjoint, puis quittée par un SAUT : elle s'échappe.
  if (entreConjoint && suivante !== undefined) return "echappee";

  // Abordée par SAUT (ou par rien), quittée par degré conjoint : appoggiature.
  if (sortConjoint) return "appoggiature";

  return null;
}
