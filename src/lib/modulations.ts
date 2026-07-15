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
