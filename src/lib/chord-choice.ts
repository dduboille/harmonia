/**
 * lib/chord-choice.ts
 * Harmonia — Choisir l'accord d'un segment PAR LE COÛT.
 *
 * L'accord et ses notes étrangères sont INDISSOCIABLES : on ne peut pas connaître
 * l'un sans l'autre. Ce n'est donc pas un filtre qu'on applique après coup, mais une
 * optimisation : on met les lectures en concurrence, et on retient celle qui explique
 * le mieux ce qu'on entend.
 *
 * Ce qu'un accord EXPLIQUE rapporte, pondéré par la DURÉE de la note et son POIDS
 * MÉTRIQUE : une longue note sur le temps fort pèse lourd, une croche du contretemps
 * ne pèse presque rien.
 *
 * Ce qu'il LAISSE DE CÔTÉ coûte — mais pas toujours le même prix. Une note abordée et
 * quittée par degré conjoint est une étrangère LÉGITIME, presque gratuite : c'est de
 * l'écriture, pas du bruit. Une note qui arrive par saut et repart par saut est une
 * anomalie, et se paie cher.
 *
 * Ce qu'il AFFIRME coûte aussi : chaque son qu'un accord revendique est une
 * prétention, et il doit la payer. Sans quoi le plus gros accord gagnerait toujours —
 * cf. `COUT_SON_REVENDIQUE`.
 *
 * C'est ce qui permet à un accord qui abandonne trois notes de battre un accord qui
 * les explique toutes — si ces trois notes se comportent en notes de passage.
 *
 * AVERTISSEMENT SUR LES PONDÉRATIONS : aucune des valeurs ci-dessous n'a de valeur
 * « vraie ». Ce sont des RÉGLAGES, calés sur des cas dont l'analyse est connue. Chacun
 * dit, en commentaire, ce qu'il corrige et dans quel intervalle il peut bouger. Les
 * déplacer sans relancer `chord-choice.test.ts`, c'est casser l'analyse en silence.
 */

import { TPQ, type ParsedNote } from "./musicxml-parse";
import type { Span } from "./harmony-segmentation";
import type { CarteMelodique } from "./voice-lines";
import { conjointe, contigues } from "./notes-etrangeres";
import { CHORD_PATTERNS, RETARDS, lecturesAccord, type Chord } from "./harmonic-analysis";

export interface ChoixAccord {
  /**
   * L'accord retenu. `pcs` ne contient QUE ses sons ; `bassPc` est le plus grave
   * de SES sons — et non la note la plus grave entendue, qui peut être une pédale
   * ou une note de passage à la basse.
   */
  chord: Chord;
  etrangeres: Array<{ note: ParsedNote; voix: string }>;
  /** Ce que cette lecture coûte. Le plus petit gagne ; il peut être négatif. */
  cout: number;
}

export interface OptionsChoix {
  /** Sons de l'accord précédent — un retard s'y prépare. */
  pcsAccordPrecedent?: number[];
}

/** Nombre de sons que chaque qualité REVENDIQUE, quinte comprise. */
const TAILLE_ACCORD: Record<string, number> = Object.fromEntries(
  CHORD_PATTERNS.map((p): [string, number] => [p.quality, p.intervals.length]),
);

// ── Les pondérations ─────────────────────────────────────────────────────────

/**
 * Majoration d'une note qui SONNE DÈS L'ATTAQUE du temps (attaquée dessus, ou tenue
 * depuis avant). Une croche du contretemps ne pèse pas ce que pèse la note du temps :
 * sans cette prime, une étrangère du temps fort et une étrangère du contretemps
 * coûteraient rigoureusement le même prix, et le poids métrique n'existerait pas.
 *
 * Les tests n'en contraignent que la BORNE INFÉRIEURE (il faut > 1) : aucun d'eux ne
 * se retourne quand on la monte, jusqu'à 3 au moins. 1,5 est la convention — la note
 * du temps vaut une fois et demie celle du contretemps — et non un optimum mesuré.
 * C'est le seul réglage de ce module dont l'intervalle de validité soit ouvert.
 */
const PRIME_ATTAQUE = 1.5;

/**
 * Les TROIS TARIFS de l'abandon. Ils multiplient le poids de la note abandonnée.
 *
 *  - LÉGITIME : elle se comporte comme une étrangère peut légitimement se comporter
 *    (degré conjoint, ou note tenue par-dessus le changement d'harmonie). C'est de
 *    l'écriture — presque gratuit.
 *  - INCONNU : sa voix ne forme pas une ligne (accord plaqué de l'écriture
 *    pianistique, cf. `voice-lines`). On ne sait rien de son comportement : on ne la
 *    récompense pas, mais on ne la condamne pas non plus. Sans ce tarif, une main
 *    gauche en accords plaqués — texture parfaitement normale — paierait plein tarif
 *    à chaque temps.
 *  - ANOMALIE : la ligne est connue, et le comportement est aberrant (arrivée par
 *    saut, départ par saut). L'accord qui laisse cette note de côté n'explique pas la
 *    musique : qu'il paie.
 */
const COUT_LEGITIME = 0.3;
const COUT_INCONNU = 1.0;
const COUT_ANOMALIE = 2.5;

/**
 * PRIX DU SON REVENDIQUÉ — le rasoir d'Ockham de ce module, et le réglage le plus
 * important de tous.
 *
 * Sans lui, le modèle est monotone : un accord qui explique TOUT a un coût
 * d'abandon nul, et rien ne peut plus le battre. Do-Mi-Sol avec un La de croche
 * entre le Sol et le Si se lirait donc « Lam7 » — les quatre sons y sont — au lieu de
 * « Do majeur, La de passage ». La promesse même du module (« un accord qui abandonne
 * trois notes peut battre un accord qui les explique toutes ») serait mathématiquement
 * impossible.
 *
 * D'où ce prix : chaque son que l'accord AFFIRME se paie. Un accord de septième est
 * une prétention plus forte qu'une triade — il doit gagner sa septième. Concrètement,
 * un son ne vaut d'être revendiqué que si `poids × (1 + tarif) > COUT_SON_REVENDIQUE` :
 * une note qui tient tout le temps le franchit largement (1,5 × 1,3 = 1,95) ; une
 * croche du contretemps qui passe par degrés conjoints ne le franchit pas
 * (0,5 × 1,3 = 0,65). Le seuil tombe donc juste où doit passer la frontière entre une
 * note de structure et un ornement.
 *
 * INTERVALLE DE VALIDITÉ, mesuré sur les tests (et vérifié en les cassant) :
 *  - il faut > 0,65, sans quoi Lam7 bat Do majeur sur le La de passage — l'accord le
 *    plus gros gagnerait toujours, et la promesse du module tomberait ;
 *  - il faut < 1,95, sans quoi le V6/5 du choral (Sol-Si-Ré-Fa, quatre sons bien réels)
 *    se fait rétrograder en triade de Sol abandonnant son Fa.
 * 1,3 est le MILIEU de cet intervalle : les deux bords sont à 0,65, et aucune des deux
 * erreurs — l'accord trop gros, l'accord trop maigre — n'est plus proche que l'autre.
 */
const COUT_SON_REVENDIQUE = 1.3;

/**
 * Une quinte omise se paie : l'accord prétend un son qu'on n'entend pas.
 *
 * Elle est déjà « payée » en creux — un son de moins revendiqué, donc un
 * `COUT_SON_REVENDIQUE` en moins. Cette pénalité rétablit l'ordre : à notes entendues
 * égales, la lecture COMPLÈTE doit passer avant la lecture mutilée. Sans elle, un
 * accord parfait dont on n'entend que la fondamentale et la tierce coûterait moins
 * cher que le même accord entendu tout entier.
 */
const COUT_QUINTE_OMISE = 0.4;

// ── Le calcul ─────────────────────────────────────────────────────────────────

/**
 * Poids d'une note : sa durée EFFECTIVE dans le segment, majorée si elle sonne dès
 * l'attaque du temps. Une note tenue depuis le segment précédent compte pour ce
 * qu'elle y sonne encore, ni plus ni moins.
 */
function poids(note: ParsedNote, span: Span): number {
  const debut = Math.max(note.onset, span.debut);
  const fin = Math.min(note.onset + note.duration, span.fin);
  const duree = Math.max(0, fin - debut) / TPQ;
  const desLAttaque = note.onset <= span.debut;
  return duree * (desLAttaque ? PRIME_ATTAQUE : 1);
}

/**
 * Coût d'ABANDON d'une note.
 *
 * On ne peut pas la CLASSER ici — la classification exige de connaître l'accord, et
 * l'accord est justement ce qu'on cherche (cf. `notes-etrangeres.classer`, qui vient
 * après). On se contente donc du test qui n'en dépend pas : la note se comporte-t-elle
 * comme une étrangère peut légitimement se comporter ?
 */
function coutAbandon(
  note: ParsedNote, span: Span, carte: CarteMelodique, options: OptionsChoix,
): number {
  const p = poids(note, span);
  const v = carte.voisinage(note);

  // Aucune ligne mélodique : on ne sait pas, on ne punit pas.
  if (v === null) return p * COUT_INCONNU;

  // TENUE par-dessus le changement d'harmonie. En écriture tonale, une note étrangère
  // qui se tient n'a que deux noms : RETARD ou PÉDALE. Ni l'un ni l'autre n'est une
  // anomalie.
  const tenue = note.onset < span.debut;

  // PRÉPARÉE : elle était consonante à l'accord précédent — la marque du retard.
  // Elle ne fait que CONFIRMER `tenue`, et c'est voulu : on ne s'en sert jamais pour
  // condamner. Une pédale survit à l'accord qui l'a préparée ; dès son troisième
  // temps, l'« accord précédent » est déjà une harmonie à laquelle elle est étrangère,
  // et exiger la préparation ferait payer plein tarif à toute pédale un peu longue.
  // L'information sert à NOMMER (cf. `classer`), pas à punir.
  const preparee = tenue && (options.pcsAccordPrecedent?.includes(note.pc) ?? false);

  // MÉLODIQUE : abordée ou quittée par degré conjoint — passage, broderie,
  // appoggiature, échappée. `contigues` est indispensable : sans elle, une voisine
  // située deux mesures plus loin rendrait n'importe quel abandon « légitime ».
  const abordeeConjointe =
    v.precedente !== undefined &&
    contigues(v.precedente, note) &&
    conjointe(v.precedente.midi, note.midi);
  const quitteeConjointe =
    v.suivante !== undefined &&
    contigues(note, v.suivante) &&
    conjointe(note.midi, v.suivante.midi);

  const legitime = preparee || tenue || abordeeConjointe || quitteeConjointe;
  return p * (legitime ? COUT_LEGITIME : COUT_ANOMALIE);
}

/**
 * Choisit l'accord d'un segment, et rend du même geste les notes qu'il laisse de côté.
 *
 * `null` si aucune lecture n'existe : une quinte à vide n'est pas un accord, et il
 * vaut mieux ne rien dire que de deviner.
 */
export function choisirAccord(
  span: Span, carte: CarteMelodique, options: OptionsChoix = {},
): ChoixAccord | null {
  const pcs = [...new Set(span.notes.map((n) => n.pc))];
  const lectures = lecturesAccord(pcs);
  if (lectures.length === 0) return null;

  // ── LA BARRIÈRE DES SUS ──
  //
  // `lecturesAccord` ne hiérarchise rien : elle n'a pas le garde-fou d'
  // `identifyChordFromNotes`. Or les accords « sus » ne sont pas des accords de
  // l'harmonie tonale — ce sont des RETARDS, une note qui tarde à rejoindre la tierce.
  // Et ils sont COMPLETS là où le vrai accord est incomplet : sur Sol-Si-Fa au-dessus
  // d'une pédale de Do, le `Csus4` a ses trois sons quand le V7 a perdu sa quinte. Il
  // gagnerait au coût, et retournerait la fonction tonale (T au lieu de D) sur la
  // texture la plus banale du répertoire.
  //
  // Cela ne se règle pas au score : on pose la barrière. Dès qu'une lecture EN TIERCES
  // existe, les `sus` sont écartés D'OFFICE — avant même qu'on calcule un coût.
  const enTierces = lectures.filter((l) => !RETARDS.has(l.quality));
  const candidates = enTierces.length > 0 ? enTierces : lectures;

  let meilleur: ChoixAccord | null = null;

  for (const lecture of candidates) {
    const sons = new Set(lecture.pcs);

    let gain = 0;
    const etrangeres: Array<{ note: ParsedNote; voix: string }> = [];

    for (const note of span.notes) {
      if (sons.has(note.pc)) {
        gain += poids(note, span);
      } else {
        gain -= coutAbandon(note, span, carte, options);
        etrangeres.push({ note, voix: `${note.part}|${note.voice}` });
      }
    }

    // Ce que l'accord AFFIRME, il le paie — y compris la quinte qu'il prétend sans
    // qu'on l'entende.
    gain -= sons.size * COUT_SON_REVENDIQUE;
    if (lecture.pcs.length < (TAILLE_ACCORD[lecture.quality] ?? lecture.pcs.length)) {
      gain -= COUT_QUINTE_OMISE;
    }

    // La BASSE de l'accord est le plus grave de SES sons — pas la note la plus grave
    // entendue. C'est ainsi qu'une pédale cesse de fausser le renversement.
    const sonsGraves = span.notes
      .filter((n) => sons.has(n.pc))
      .sort((a, b) => a.midi - b.midi);
    if (sonsGraves.length === 0) continue;

    const choix: ChoixAccord = {
      chord: { ...lecture, bassPc: sonsGraves[0].pc },
      etrangeres,
      cout: -gain,
    };

    if (meilleur === null || choix.cout < meilleur.cout) meilleur = choix;
  }

  return meilleur;
}
