/**
 * lib/composition-edition.ts
 * Harmonia — La logique d'ÉDITION de l'atelier de composition (pure).
 *
 * Le modèle d'édition ne porte que les notes POSÉES par l'élève : une voix peut être
 * incomplète. Le remplissage en silences est une affaire de RENDU (`remplirSilences`),
 * pas d'édition — l'édition reste ainsi triviale (ajouter / retirer la dernière), et
 * `remplirSilences` produit une pièce toujours valide, sérialisable et gravable.
 */

import {
  dureeEnDivisions, DIVISIONS,
  type Piece, type Voix, type Evenement, type Silence, type Duree,
} from "./piece-model";

export interface Curseur {
  mesure: number;
  portee: 0 | 1;
}

/** Ticks d'une mesure : temps × (une noire) × 4 / unité. En 4/4 : 4×48. */
export function capaciteMesure(chiffrage: { temps: number; unite: number }): number {
  return (chiffrage.temps * DIVISIONS * 4) / chiffrage.unite;
}

/** Somme des durées POSÉES dans une voix. */
export function dureePlacee(voix: Voix): number {
  return voix.reduce((t, ev) => t + dureeEnDivisions(ev.duree), 0);
}

// Valeurs de silence standard, du plus long au plus court (ticks à divisions 48).
const SILENCES_STD: ReadonlyArray<{ ticks: number; duree: Duree }> = [
  { ticks: 144, duree: { base: "blanche", points: 1 } },
  { ticks: 96,  duree: { base: "blanche", points: 0 } },
  { ticks: 72,  duree: { base: "noire", points: 1 } },
  { ticks: 48,  duree: { base: "noire", points: 0 } },
  { ticks: 36,  duree: { base: "croche", points: 1 } },
  { ticks: 24,  duree: { base: "croche", points: 0 } },
  { ticks: 18,  duree: { base: "double", points: 1 } },
  { ticks: 12,  duree: { base: "double", points: 0 } },
];

/**
 * Comble un vide (en ticks) par des silences de valeurs standard, du plus grand au
 * plus petit. Suppose un vide « propre » (multiple de la double-croche = 12 ticks) —
 * ce que garantit une saisie où les triolets sont entrés en groupes complets.
 */
export function decouperEnSilences(ticks: number): Silence[] {
  const out: Silence[] = [];
  let reste = ticks;
  for (const s of SILENCES_STD) {
    while (reste >= s.ticks) {
      out.push({ type: "silence", duree: s.duree });
      reste -= s.ticks;
    }
  }
  return out;
}

/**
 * Complète chaque voix à la capacité de la mesure : une voix VIDE devient un silence
 * de mesure (centré) ; une voix partielle reçoit ses silences de complément. C'est
 * la pièce rendue par cette fonction qu'on sérialise et grave.
 */
export function remplirSilences(piece: Piece): Piece {
  const capacite = capaciteMesure(piece.chiffrage);
  const silenceMesure: Silence = {
    type: "silence", duree: { base: "ronde", points: 0 }, mesureEntiere: true,
  };

  const remplirVoix = (voix: Voix): Voix => {
    if (voix.length === 0) return [silenceMesure];
    const vide = capacite - dureePlacee(voix);
    return vide > 0 ? [...voix, ...decouperEnSilences(vide)] : [...voix];
  };

  return {
    ...piece,
    mesures: piece.mesures.map((m) => ({
      portees: [remplirVoix(m.portees[0]), remplirVoix(m.portees[1])] as [Voix, Voix],
    })),
  };
}

/** Remplace la voix (mesure, portée) par une nouvelle, sans muter la pièce. */
function avecVoix(piece: Piece, curseur: Curseur, voix: Voix): Piece {
  return {
    ...piece,
    mesures: piece.mesures.map((m, i) => {
      if (i !== curseur.mesure) return m;
      const portees: [Voix, Voix] = [m.portees[0], m.portees[1]];
      portees[curseur.portee] = voix;
      return { portees };
    }),
  };
}

/**
 * Insère un événement au curseur s'il tient dans le temps restant de la mesure.
 * Sinon (note trop longue) : rien ne change. Quand la mesure se remplit exactement,
 * le curseur passe à la mesure suivante (s'il en reste une).
 */
export function inserer(
  piece: Piece, curseur: Curseur, evenement: Evenement,
): { piece: Piece; curseur: Curseur } {
  const capacite = capaciteMesure(piece.chiffrage);
  const voix = piece.mesures[curseur.mesure].portees[curseur.portee];
  const reste = capacite - dureePlacee(voix);
  const d = dureeEnDivisions(evenement.duree);

  if (d > reste) return { piece, curseur }; // ne rentre pas : inchangé

  const nouvelleVoix = [...voix, evenement];
  const nouvellePiece = avecVoix(piece, curseur, nouvelleVoix);

  const pleine = dureePlacee(nouvelleVoix) >= capacite;
  const curseurSuivant: Curseur =
    pleine && curseur.mesure + 1 < piece.mesures.length
      ? { mesure: curseur.mesure + 1, portee: curseur.portee }
      : curseur;

  return { piece: nouvellePiece, curseur: curseurSuivant };
}

/**
 * Efface la dernière note posée. Si la mesure courante est vide et qu'on n'est pas à
 * la première, on recule à la précédente et on y retire la dernière — un seul Retour
 * arrière efface toujours quelque chose de visible.
 */
export function effacer(piece: Piece, curseur: Curseur): { piece: Piece; curseur: Curseur } {
  const voix = piece.mesures[curseur.mesure].portees[curseur.portee];
  if (voix.length > 0) {
    return { piece: avecVoix(piece, curseur, voix.slice(0, -1)), curseur };
  }
  if (curseur.mesure > 0) {
    const precedent: Curseur = { mesure: curseur.mesure - 1, portee: curseur.portee };
    const voixPrec = piece.mesures[precedent.mesure].portees[precedent.portee];
    const piecePrec = voixPrec.length > 0
      ? avecVoix(piece, precedent, voixPrec.slice(0, -1))
      : piece;
    return { piece: piecePrec, curseur: precedent };
  }
  return { piece, curseur };
}

/** Bascule entre la portée du haut (0) et du bas (1). */
export function basculerPortee(curseur: Curseur): Curseur {
  return { mesure: curseur.mesure, portee: curseur.portee === 0 ? 1 : 0 };
}
