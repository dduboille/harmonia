/**
 * lib/modulations.ts
 * Harmonia — La TONALITÉ GLISSANTE : où la pièce module, par quels pivots.
 *
 * Ce module n'invente aucune théorie. `analyzeChord` sait déjà lire un accord DANS
 * une tonalité donnée (tonique et mode en paramètres) : détecter une modulation vers
 * Sol, c'est rejouer cette lecture calée sur Sol et voir si une région y trouve sa
 * cadence. C2 est une couche AU-DESSUS de la suite d'accords, pas un nouveau moteur.
 */

import {
  analyzeChord,
  diatonicSet,
  NOTE_FR,
  type Chord,
  type ChordResult,
} from "./harmonic-analysis";

export interface Tonalite {
  tonicPc: number;
  mode: "major" | "minor";
}

export function nomTonalite(t: Tonalite): string {
  return `${NOTE_FR[t.tonicPc] ?? "?"} ${t.mode === "major" ? "majeur" : "mineur"}`;
}

/**
 * Les CINQ tons voisins (armures à un accident près) — là où va l'immense majorité
 * des modulations tonales. Depuis un ton MAJEUR : sa dominante et sa sous-dominante
 * (majeures), son relatif et les relatifs de sa dominante et de sa sous-dominante
 * (mineurs). Depuis un ton MINEUR : le même cercle, vu depuis le relatif.
 */
const VOISINS_MAJEUR: ReadonlyArray<{ offset: number; mode: "major" | "minor" }> = [
  { offset: 7, mode: "major" }, // dominante
  { offset: 5, mode: "major" }, // sous-dominante
  { offset: 9, mode: "minor" }, // relatif
  { offset: 4, mode: "minor" }, // relatif de la dominante
  { offset: 2, mode: "minor" }, // relatif de la sous-dominante
];

const VOISINS_MINEUR: ReadonlyArray<{ offset: number; mode: "major" | "minor" }> = [
  { offset: 3, mode: "major" },  // relatif majeur (III)
  { offset: 5, mode: "minor" },  // sous-dominante (iv)
  { offset: 7, mode: "minor" },  // dominante (v)
  { offset: 8, mode: "major" },  // VI
  { offset: 10, mode: "major" }, // VII
];

export function tonsVoisins(t: Tonalite): Tonalite[] {
  const table = t.mode === "major" ? VOISINS_MAJEUR : VOISINS_MINEUR;
  return table.map((v) => ({ tonicPc: (t.tonicPc + v.offset) % 12, mode: v.mode }));
}

/** Reconstruit un `Chord` minimal depuis un résultat, pour le relire dans un autre ton. */
function chordDeResult(r: ChordResult): Chord {
  return {
    rootPc: r.rootPc,
    rootFr: r.rootFr,
    quality: r.quality,
    pcs: r.pcs,
    bassPc: r.bassPc,
  };
}

/** Relit un accord DANS une tonalité donnée : c'est tout le principe de C2. */
export function analyseEn(r: ChordResult, t: Tonalite): ChordResult {
  return analyzeChord(chordDeResult(r), t.tonicPc, t.mode);
}

/** Toutes les notes de l'accord appartiennent-elles à la gamme du ton ? */
export function estDiatoniqueEn(r: ChordResult, t: Tonalite): boolean {
  const dia = diatonicSet(t.tonicPc, t.mode);
  return r.pcs.every((pc) => dia.has(pc));
}

/** L'accord est-il la DOMINANTE du ton (5e degré, fonction D) ? */
export function estDominanteDe(r: ChordResult, t: Tonalite): boolean {
  const lu = analyseEn(r, t);
  return lu.degreeNum === 5 && lu.fonction === "D";
}

/** L'accord est-il la TONIQUE du ton (1er degré, fonction T) ? */
export function estToniqueDe(r: ChordResult, t: Tonalite): boolean {
  const lu = analyseEn(r, t);
  return lu.degreeNum === 1 && lu.fonction === "T";
}

/**
 * Y a-t-il, avant la dominante (à `indexDominante`), une PRÉDOMINANTE du ton `t`,
 * annonçant une vraie cellule cadentielle — et non un simple V/V de passage ?
 *
 * On remonte tant que les accords appartiennent à `t` (la cellule est d'un seul
 * tenant), sans dépasser `borneGauche` (le début de la région courante). Une
 * quarte-et-sixte cadentielle — la tonique de `t` au 2e renversement — se glisse
 * légitimement entre la prédominante et la dominante : on la traverse. Le premier
 * accord ÉTRANGER au ton rompt la cellule.
 *
 * Toute la difficulté tient à un piège d'homonymie de degré : le ii et le vi du
 * nouveau ton sont des prédominantes sans ambiguïté, mais son IV/iv ne l'est pas.
 * Le I d'un ton est le IV de sa dominante : dans « I V/V V » en Do, le Do de
 * départ SE RELIT « IV de Sol » sans rien préparer du tout — c'est le degré 4
 * fantôme du V/V isolé. On ne l'accepte donc comme prédominante que s'il est
 * LUI-MÊME abordé depuis un autre accord du nouveau ton : une cellule installée,
 * pas la tonique de départ filant vers une dominante secondaire.
 */
export function aPredominantePreparee(
  seq: ChordResult[], indexDominante: number, t: Tonalite, borneGauche: number,
): boolean {
  for (let j = indexDominante - 1; j >= borneGauche; j--) {
    const r = seq[j];
    if (!estDiatoniqueEn(r, t)) return false; // la cellule est rompue
    const deg = analyseEn(r, t).degreeNum;
    if (deg === 2 || deg === 6) return true; // ii ou vi : prédominante non ambiguë
    if (deg === 4) {
      // IV/iv : n'ouvre une vraie cellule que s'il est adossé, à gauche, à un
      // autre accord du ton — sinon c'est le degré 4 fantôme du V/V isolé.
      const precedent = j - 1;
      return precedent >= borneGauche && estDiatoniqueEn(seq[precedent], t);
    }
    if (deg === 1) continue;  // quarte-et-sixte cadentielle : on la traverse
    // Tout autre degré diatonique (une autre dominante, un iii…) ne prépare rien :
    // on continue de remonter, dans la limite de la borne.
  }
  return false;
}
