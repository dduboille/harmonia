/**
 * lib/piece-model.ts
 * Harmonia — Le MODÈLE d'une pièce composée dans le studio : source de vérité,
 * pure (aucun rendu, aucun XML). L'éditeur (2b) mutera ce modèle ; le sérialiseur
 * le convertit en MusicXML, d'où découlent la gravure (Verovio), l'analyse et l'export.
 *
 * Tout est nommé en français, comme le reste du moteur.
 */

export type LettreNote = "C" | "D" | "E" | "F" | "G" | "A" | "B";
export type BaseDuree = "ronde" | "blanche" | "noire" | "croche" | "double";

export interface Hauteur {
  lettre: LettreNote;
  alteration: number; // -2..+2 (0 = bécarre)
  octave: number;     // octave standard (Do4 = do central)
}

export interface Duree {
  base: BaseDuree;
  points: 0 | 1 | 2;
  /** n-olet : { reelles: 3, normales: 2 } pour le triolet. Absent = pas de n-olet. */
  nolet?: { reelles: number; normales: number };
}

export interface Note {
  type: "note";
  hauteurs: Hauteur[]; // 1 = note simple, 2+ = accord
  duree: Duree;
  /** Liaison de TENUE vers la note suivante. */
  liee?: boolean;
}

export interface Silence {
  type: "silence";
  duree: Duree;
  /** Silence occupant toute la mesure (la mesure vide) : se grave centré. */
  mesureEntiere?: boolean;
}

export type Evenement = Note | Silence;
export type Voix = Evenement[];

/** Les quatre voix nommées du choral (haut → bas). */
export type NomVoix = "soprano" | "alto" | "tenor" | "basse";

/** L'ordre canonique des voix (haut → bas), pour parcourir et masquer de façon stable. */
export const ORDRE_VOIX: NomVoix[] = ["soprano", "alto", "tenor", "basse"];

/**
 * Portée (1 = clé de Sol, 2 = clé de Fa) et sens de hampe de chaque voix, selon la
 * convention SATB : sur chaque portée, la voix du dessus a la hampe en HAUT, celle du
 * dessous en BAS — c'est ce qui rend les deux voix d'une même portée lisibles.
 */
export const CONFIG_VOIX: Record<NomVoix, { portee: 1 | 2; hampe: "up" | "down" }> = {
  soprano: { portee: 1, hampe: "up" },
  alto:    { portee: 1, hampe: "down" },
  tenor:   { portee: 2, hampe: "up" },
  basse:   { portee: 2, hampe: "down" },
};

/** Une mesure porte les quatre voix nommées (chacune peut être vide). */
export interface Mesure {
  voix: Record<NomVoix, Voix>;
}

export interface Piece {
  armure: number;                          // -7..+7
  /** Mode de la tonalité (l'armure ne suffit pas : 0 = Do majeur OU la mineur). Défaut : major. */
  mode?: "major" | "minor";
  chiffrage: { temps: number; unite: number };
  mesures: Mesure[];
}

/**
 * Divisions par NOIRE dans le MusicXML produit. 48 rend TOUTES les durées visées
 * entières : la double vaut 12, la croche 24, la noire 48 ; un triolet de croches
 * vaut 16 (24 × 2/3) ; une noire pointée 72. Sans ce dénominateur commun, points et
 * triolets tomberaient sur des durées fractionnaires, invalides en MusicXML.
 */
export const DIVISIONS = 48;

const NOIRES: Record<BaseDuree, number> = {
  ronde: 4, blanche: 2, noire: 1, croche: 0.5, double: 0.25,
};

// Facteur des points, en fraction exacte : 1, 3/2, 7/4.
const POINT_NUM = [1, 3, 7] as const;
const POINT_DEN = [1, 2, 4] as const;

/**
 * Durée en ticks (divisions). Le calcul est fait en fraction EXACTE (numérateur /
 * dénominateur) pour ne dépendre d'aucun arrondi flottant : une combinaison qui ne
 * tombe pas juste (un triolet de doubles pointées…) est REFUSÉE plutôt que de
 * produire une durée fractionnaire.
 */
export function dureeEnDivisions(duree: Duree, divisions: number = DIVISIONS): number {
  const baseTicks = NOIRES[duree.base] * divisions; // entier pour divisions = 48
  const num = POINT_NUM[duree.points] * (duree.nolet?.normales ?? 1);
  const den = POINT_DEN[duree.points] * (duree.nolet?.reelles ?? 1);
  const ticks = (baseTicks * num) / den;
  if (!Number.isInteger(ticks)) {
    throw new Error(`Durée non représentable en divisions=${divisions} : ${JSON.stringify(duree)}`);
  }
  return ticks;
}

/** Demi-tons de la fondamentale (Do) pour chaque lettre. */
const DEMI_LETTRE: Record<LettreNote, number> = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };

/** Numéro MIDI d'une hauteur (Do4 = 60). */
export function midiDeHauteur(h: Hauteur): number {
  return (h.octave + 1) * 12 + DEMI_LETTRE[h.lettre] + h.alteration;
}

/**
 * La pièce vierge de départ : 8 mesures (une phrase), Do majeur, 4/4, les quatre voix
 * VIDES. Le modèle d'édition ne porte que les notes posées ; les silences (complément
 * de mesure) sont ajoutés au moment du rendu MusicXML, pas ici.
 */
export function pieceVierge(): Piece {
  const mesureVide = (): Mesure => ({
    voix: { soprano: [], alto: [], tenor: [], basse: [] },
  });
  return {
    armure: 0,
    chiffrage: { temps: 4, unite: 4 },
    mesures: Array.from({ length: 8 }, mesureVide),
  };
}
