/**
 * lib/composition-edition.ts
 * Harmonia — La logique d'ÉDITION de l'atelier de composition (pure), en écriture SATB
 * à quatre voix nommées.
 *
 * Le modèle d'édition ne porte que les notes POSÉES par l'élève : une voix peut être
 * incomplète, ou entièrement vide. Le remplissage en silences n'est PAS une affaire
 * d'édition mais de RENDU — il déménage dans l'export, car il dépend des voix actives
 * et de leur portée. L'édition reste ainsi triviale : ajouter / retirer la dernière
 * note de la voix pointée par le curseur.
 */

import {
  dureeEnDivisions, DIVISIONS, ORDRE_VOIX, midiDeHauteur,
  type Piece, type Voix, type Evenement, type Silence, type Duree, type NomVoix,
  type Note, type Hauteur, type LettreNote,
} from "./piece-model";

/** Le curseur d'édition : mesure, voix, et la note sélectionnée (ou "fin" = mode ajout). */
export interface Curseur {
  mesure: number;
  voix: NomVoix;
  note: number | "fin";
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
 * Les voix qui portent au moins une NOTE quelque part dans la pièce. Une voix sans
 * aucune note n'est pas gravée du tout (masquée) : c'est ce qui permet d'écrire à une,
 * deux ou trois voix sans traîner des portées vides.
 */
export function voixActives(piece: Piece): NomVoix[] {
  return ORDRE_VOIX.filter((v) =>
    piece.mesures.some((m) => m.voix[v].some((e) => e.type === "note")),
  );
}

/**
 * La mesure où l'on ÉCRIT dans une voix : la première mesure non pleine (là où la note
 * suivante ira). Si toutes les mesures de la voix sont pleines, on reste sur la dernière.
 * Sert au changement de voix : chaque voix a sa propre position d'écriture, indépendante
 * de celle des autres — on ne veut pas hériter du numéro de mesure de la voix précédente.
 */
export function positionEcriture(piece: Piece, voix: NomVoix): number {
  const capacite = capaciteMesure(piece.chiffrage);
  const i = piece.mesures.findIndex((m) => dureePlacee(m.voix[voix]) < capacite);
  return i === -1 ? piece.mesures.length - 1 : i;
}

/** Remplace une voix (mesure, voix nommée) par une nouvelle, sans muter la pièce. */
function avecVoix(piece: Piece, curseur: Curseur, voix: Voix): Piece {
  return {
    ...piece,
    mesures: piece.mesures.map((m, i) =>
      i === curseur.mesure ? { voix: { ...m.voix, [curseur.voix]: voix } } : m,
    ),
  };
}

/**
 * Insère un événement au curseur s'il tient dans le temps restant de la mesure (dans
 * la voix courante). Sinon (trop long) : rien ne change. Quand la voix se remplit
 * exactement, le curseur passe à la mesure suivante (même voix), s'il en reste une.
 */
export function inserer(
  piece: Piece, curseur: Curseur, evenement: Evenement,
): { piece: Piece; curseur: Curseur } {
  const capacite = capaciteMesure(piece.chiffrage);
  const voix = piece.mesures[curseur.mesure].voix[curseur.voix];
  const reste = capacite - dureePlacee(voix);
  if (dureeEnDivisions(evenement.duree) > reste) return { piece, curseur }; // ne rentre pas

  const nouvelleVoix = [...voix, evenement];
  const nouvellePiece = avecVoix(piece, curseur, nouvelleVoix);
  const pleine = dureePlacee(nouvelleVoix) >= capacite;
  const curseurSuivant: Curseur =
    pleine && curseur.mesure + 1 < piece.mesures.length
      ? { mesure: curseur.mesure + 1, voix: curseur.voix, note: "fin" }
      : { mesure: curseur.mesure, voix: curseur.voix, note: "fin" };
  return { piece: nouvellePiece, curseur: curseurSuivant };
}

/**
 * Les positions NAVIGABLES d'une voix : une entrée par NOTE (les silences saisis ne sont pas
 * sélectionnables), dans l'ordre de lecture, à travers les mesures. `note` est l'index BRUT
 * dans le tableau de la mesure.
 */
export function positions(piece: Piece, voix: NomVoix): Array<{ mesure: number; note: number }> {
  const out: Array<{ mesure: number; note: number }> = [];
  piece.mesures.forEach((m, mesure) => {
    m.voix[voix].forEach((ev, note) => {
      if (ev.type === "note") out.push({ mesure, note });
    });
  });
  return out;
}

/**
 * Déplace la sélection le long des `positions` de la voix active. `sens` = +1 (droite) ou -1
 * (gauche). Au-delà de la dernière note → mode ajout ("fin") sur la mesure d'écriture ; avant la
 * première → reste sur la première. Depuis "fin", gauche sélectionne la dernière note.
 */
export function naviguer(piece: Piece, curseur: Curseur, sens: -1 | 1): Curseur {
  const pos = positions(piece, curseur.voix);
  if (pos.length === 0) return { ...curseur, note: "fin" };

  const finCurseur: Curseur = { mesure: positionEcriture(piece, curseur.voix), voix: curseur.voix, note: "fin" };
  const indexCourant =
    curseur.note === "fin"
      ? pos.length
      : pos.findIndex((q) => q.mesure === curseur.mesure && q.note === curseur.note);

  const cible = indexCourant + sens;
  if (cible >= pos.length) return finCurseur;
  if (cible < 0) return { mesure: pos[0].mesure, voix: curseur.voix, note: pos[0].note };
  const q = pos[cible];
  return { mesure: q.mesure, voix: curseur.voix, note: q.note };
}

/** L'ordre diatonique des lettres, pour le déplacement sur la portée. */
const ECHELLE_LETTRES: LettreNote[] = ["C", "D", "E", "F", "G", "A", "B"];

/** Applique une transformation à la 1re hauteur de la note sélectionnée (sans effet en "fin"). */
function avecHauteurSelectionnee(
  piece: Piece, curseur: Curseur, f: (h: Hauteur) => Hauteur,
): Piece {
  if (curseur.note === "fin") return piece;
  const voix = piece.mesures[curseur.mesure].voix[curseur.voix];
  const ev = voix[curseur.note];
  if (!ev || ev.type !== "note") return piece;
  const nouvelle: Note = { ...ev, hauteurs: [f(ev.hauteurs[0]), ...ev.hauteurs.slice(1)] };
  const nouvelleVoix = voix.map((x, i) => (i === curseur.note ? nouvelle : x));
  return avecVoix(piece, curseur, nouvelleVoix);
}

/**
 * Transpose la note sélectionnée d'un DEGRÉ diatonique (déplacement sur la portée) : la lettre
 * avance/recule dans l'échelle, l'octave suit à la jonction B↔C, l'altération repasse à bécarre.
 */
export function transposerDegre(piece: Piece, curseur: Curseur, sens: -1 | 1): Piece {
  return avecHauteurSelectionnee(piece, curseur, (h) => {
    const i = ECHELLE_LETTRES.indexOf(h.lettre);
    const j = i + sens;
    const lettre = ECHELLE_LETTRES[(j + 7) % 7];
    const octave = h.octave + (j < 0 ? -1 : j > 6 ? 1 : 0);
    return { lettre, alteration: 0, octave };
  });
}

/** Transpose la note sélectionnée d'une OCTAVE (bornée 1..7). */
export function transposerOctave(piece: Piece, curseur: Curseur, sens: -1 | 1): Piece {
  return avecHauteurSelectionnee(piece, curseur, (h) => ({
    ...h, octave: Math.min(7, Math.max(1, h.octave + sens)),
  }));
}

/** Remplace lettre + altération de la note sélectionnée (garde octave et durée). */
export function remplacerHauteur(
  piece: Piece, curseur: Curseur, lettre: LettreNote, alteration: number,
): Piece {
  return avecHauteurSelectionnee(piece, curseur, (h) => ({ ...h, lettre, alteration }));
}

/**
 * Remplace la durée de la note sélectionnée (garde la hauteur), SI la nouvelle durée tient dans la
 * mesure (les autres notes ne bougent pas). Sinon renvoie la pièce inchangée.
 */
export function remplacerDuree(piece: Piece, curseur: Curseur, duree: Duree): Piece {
  if (curseur.note === "fin") return piece;
  const voix = piece.mesures[curseur.mesure].voix[curseur.voix];
  const ev = voix[curseur.note];
  if (!ev || ev.type !== "note") return piece;
  const capacite = capaciteMesure(piece.chiffrage);
  const autres = dureePlacee(voix) - dureeEnDivisions(ev.duree);
  if (autres + dureeEnDivisions(duree) > capacite) return piece;
  const nouvelle: Note = { ...ev, duree };
  const nouvelleVoix = voix.map((x, i) => (i === curseur.note ? nouvelle : x));
  return avecVoix(piece, curseur, nouvelleVoix);
}

/**
 * Supprime la note sélectionnée (décale la suite de la voix) et sélectionne la note PRÉCÉDENTE de
 * la voix (dans la même mesure) ; s'il n'y en a plus, repasse en mode ajout ("fin"). Sans effet en
 * mode ajout.
 */
export function supprimerNote(piece: Piece, curseur: Curseur): { piece: Piece; curseur: Curseur } {
  if (curseur.note === "fin") return { piece, curseur };
  const voix = piece.mesures[curseur.mesure].voix[curseur.voix];
  const index = curseur.note;
  const nouvelleVoix = voix.filter((_, i) => i !== index);
  const nouvellePiece = avecVoix(piece, curseur, nouvelleVoix);
  let prec = -1;
  for (let i = index - 1; i >= 0; i--) {
    if (nouvelleVoix[i]?.type === "note") { prec = i; break; }
  }
  const nouveauCurseur: Curseur =
    prec >= 0
      ? { mesure: curseur.mesure, voix: curseur.voix, note: prec }
      : { mesure: curseur.mesure, voix: curseur.voix, note: "fin" };
  return { piece: nouvellePiece, curseur: nouveauCurseur };
}

/**
 * Efface la dernière note posée dans la voix courante. Si la voix courante est vide et
 * qu'on n'est pas à la première mesure, on recule à la précédente et on y retire la
 * dernière — un seul Retour arrière efface toujours quelque chose de visible.
 */
export function effacer(piece: Piece, curseur: Curseur): { piece: Piece; curseur: Curseur } {
  const voix = piece.mesures[curseur.mesure].voix[curseur.voix];
  if (voix.length > 0) return { piece: avecVoix(piece, curseur, voix.slice(0, -1)), curseur };
  if (curseur.mesure > 0) {
    const precedent: Curseur = { mesure: curseur.mesure - 1, voix: curseur.voix, note: "fin" };
    const voixPrec = piece.mesures[precedent.mesure].voix[precedent.voix];
    const piecePrec = voixPrec.length > 0 ? avecVoix(piece, precedent, voixPrec.slice(0, -1)) : piece;
    return { piece: piecePrec, curseur: precedent };
  }
  return { piece, curseur };
}

/** ms par tick au tempo par défaut de Verovio (120 bpm, une noire = 500 ms, DIVISIONS ticks/noire). */
export const MS_PAR_TICK = 60000 / (120 * DIVISIONS);

/** Onset (en ticks) de la note d'index `note` dans sa voix (offset de mesure inclus). */
function onsetTicks(piece: Piece, mesure: number, voix: NomVoix, note: number): number {
  const capacite = capaciteMesure(piece.chiffrage);
  const evs = piece.mesures[mesure].voix[voix];
  let t = mesure * capacite;
  for (let i = 0; i < note; i++) t += dureeEnDivisions(evs[i].duree);
  return t;
}

/** (onsetMs, midi) de la note sélectionnée, pour surligner l'élément Verovio correspondant. */
export function onsetMsMidiDeSelection(
  piece: Piece, curseur: Curseur,
): { onsetMs: number; midi: number } | null {
  if (curseur.note === "fin") return null;
  const ev = piece.mesures[curseur.mesure].voix[curseur.voix][curseur.note];
  if (!ev || ev.type !== "note") return null;
  return {
    onsetMs: onsetTicks(piece, curseur.mesure, curseur.voix, curseur.note) * MS_PAR_TICK,
    midi: midiDeHauteur(ev.hauteurs[0]),
  };
}

/**
 * Retrouve la position (mesure, voix, note) d'une note à partir du couple (onsetMs, midi) remonté
 * par Verovio au clic. Tolérance d'un tick sur le temps. Renvoie null si aucune ne colle.
 */
export function trouverPosition(piece: Piece, onsetMs: number, midi: number): Curseur | null {
  const cibleTicks = Math.round(onsetMs / MS_PAR_TICK);
  for (const voix of ORDRE_VOIX) {
    const p = positions(piece, voix);
    for (const { mesure, note } of p) {
      const ev = piece.mesures[mesure].voix[voix][note] as Note;
      if (midiDeHauteur(ev.hauteurs[0]) !== midi) continue;
      if (Math.abs(onsetTicks(piece, mesure, voix, note) - cibleTicks) <= 1) {
        return { mesure, voix, note };
      }
    }
  }
  return null;
}
