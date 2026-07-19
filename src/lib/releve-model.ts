/**
 * lib/releve-model.ts
 * Harmonia — Modèle pur du relevé supérieur (/releve).
 *
 * Le relevé harmonique par paliers : entendre une progression d'école
 * synthétisée, puis ① noter la basse, ② identifier les chiffrages,
 * ③ écrire le SATB complet. Ce module ne contient QUE la logique pure
 * (tirage d'exercice, notation par palier, pastilles de chiffrage) —
 * l'aléa est INJECTÉ (paramètre `rng`) pour la testabilité.
 *
 * Source des progressions : les combos viables du générateur SATB
 * (gabarit × tonalité × doigté, auto-filtrés par `generateSATBExercise`
 * qui renvoie `null` pour tout combo dont la solution ne vaut pas 100).
 * Rien n'est généré de neuf ici : le tirage réutilise ce moteur tel quel.
 */

import { PROGRESSION_TEMPLATES, type ProgressionTemplate } from "@/data/progressions-templates";
import {
  generateSATBExercise,
  type Doigte,
  type GeneratedExercise,
  type SATBMeasure,
} from "@/lib/satb-generator";
import { noteToMidi, noteName, type NoteEntry } from "@/lib/satb-rules";

// ── Types publics ──────────────────────────────────────────────────────────────

/** Générateur d'aléa injecté : renvoie un nombre dans [0, 1) (compatible Math.random). */
export type Rng = () => number;

export type Palier = "basse" | "chiffrage" | "satb";
export type ModeEcoute = "entrainement" | "examen";

/** Nombre d'écoutes de la progression entière en mode examen (discipline du concours). */
export const ECOUTES_EXAMEN = 6;

/** Nombre de pastilles proposées par mesure au palier ② (la bonne + 3 distracteurs). */
export const NB_OPTIONS_CHIFFRAGE = 4;

export interface ExerciceReleve {
  template: ProgressionTemplate;
  tonalite: string;
  doigte: Doigte;
  /** Solution SATB complète (du générateur — combo viable, vaut 100 à l'école). */
  solution: SATBMeasure[];
  /** Degrés par mesure ("II6", "V7"…) — les chiffrages à identifier au palier ②. */
  symboles: string[];
  /** L'exercice généré complet (dotKeys pour l'audio, labels, mode…). */
  genere: GeneratedExercise;
}

/** Filtres du tirage (tous optionnels — omis = tout l'éventail). */
export interface FiltresTirage {
  /** Niveau du gabarit (difficulté 1-3) ; null/undefined = tous. */
  niveau?: 1 | 2 | 3 | null;
  /** Restriction des tonalités ; défaut « toutes ». */
  tonalites?: "toutes" | "majeures" | "mineures";
  /** Restriction aux gabarits listés (gating gratuit) ; null/undefined = tous. */
  templateIds?: string[] | null;
}

/** Résultat d'une notation par mesure (paliers ① et ②). */
export interface ResultatNotation {
  parMesure: boolean[];
  bonnes: number;
  total: number;
}

// ── Tonalités offertes (miroir de KEYS_BY_LEVEL du GenerateurSATB) ─────────────

export const TONALITES_MAJEURES = ["C", "G", "F", "D", "A", "E", "Bb", "Eb", "B", "F#", "Db", "Ab"] as const;
export const TONALITES_MINEURES = ["Am", "Em", "Dm", "Bm", "F#m", "C#m", "Gm", "Cm", "G#m", "Ebm", "Bbm", "Fm"] as const;

const DOIGTES: Doigte[] = ["1", "3", "5", "7"];

// ── Helpers ────────────────────────────────────────────────────────────────────

/** Classe de hauteurs (0-11) d'une note nommée — indifférente à l'octave. */
function pcDe(name: string, octave: number): number {
  return ((noteToMidi(noteName(name), octave) % 12) + 12) % 12;
}

/** Tirage d'un indice dans [0, n) via l'aléa injecté. */
function tirerIndice(rng: Rng, n: number): number {
  return Math.min(n - 1, Math.floor(rng() * n));
}

/** Mélange de Fisher-Yates NON destructif, piloté par l'aléa injecté. */
function melanger<T>(items: readonly T[], rng: Rng): T[] {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = tirerIndice(rng, i + 1);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/** Tonalités admissibles selon le filtre. */
function tonalitesAdmissibles(filtres?: FiltresTirage): string[] {
  const mode = filtres?.tonalites ?? "toutes";
  if (mode === "majeures") return [...TONALITES_MAJEURES];
  if (mode === "mineures") return [...TONALITES_MINEURES];
  return [...TONALITES_MAJEURES, ...TONALITES_MINEURES];
}

/** Gabarits admissibles selon les filtres. */
function gabaritsAdmissibles(filtres?: FiltresTirage): ProgressionTemplate[] {
  return PROGRESSION_TEMPLATES.filter(t => {
    if (filtres?.niveau && t.difficulte !== filtres.niveau) return false;
    if (filtres?.templateIds && !filtres.templateIds.includes(t.id)) return false;
    return true;
  });
}

// ── Tirage ─────────────────────────────────────────────────────────────────────

/**
 * Tire un exercice de relevé parmi les combos VIABLES du générateur.
 *
 * Échantillonnage par rejet : on tire (gabarit, tonalité, doigté) au hasard et
 * on écarte les combos que `generateSATBExercise` refuse (≤ 15 % du total —
 * budget verrouillé par satb-generator.test). Après un nombre borné d'essais,
 * repli sur un balayage systématique (jamais atteint en pratique, mais le
 * tirage ne peut ainsi JAMAIS échouer tant qu'un combo viable existe).
 */
export function tirerExercice(rng: Rng, filtres?: FiltresTirage): ExerciceReleve | null {
  const gabarits = gabaritsAdmissibles(filtres);
  const tonalites = tonalitesAdmissibles(filtres);
  if (gabarits.length === 0 || tonalites.length === 0) return null;

  const construire = (template: ProgressionTemplate, tonalite: string, doigte: Doigte): ExerciceReleve | null => {
    const genere = generateSATBExercise(template, tonalite, doigte);
    if (!genere) return null;
    return {
      template,
      tonalite,
      doigte,
      solution: genere.solution,
      symboles: [...template.symboles],
      genere,
    };
  };

  // Essais aléatoires bornés (le rejet est rare : ≤ 15 % des combos).
  const MAX_ESSAIS = 60;
  for (let essai = 0; essai < MAX_ESSAIS; essai++) {
    const template = gabarits[tirerIndice(rng, gabarits.length)];
    const tonalite = tonalites[tirerIndice(rng, tonalites.length)];
    const doigte = DOIGTES[tirerIndice(rng, DOIGTES.length)];
    const ex = construire(template, tonalite, doigte);
    if (ex) return ex;
  }

  // Repli déterministe : premier combo viable du balayage.
  for (const template of gabarits) {
    for (const tonalite of tonalites) {
      for (const doigte of DOIGTES) {
        const ex = construire(template, tonalite, doigte);
        if (ex) return ex;
      }
    }
  }
  return null;
}

// ── Notation palier ① — la basse ───────────────────────────────────────────────

/**
 * Note la basse saisie contre la basse de la solution, mesure par mesure.
 *
 * Comparaison par CLASSE DE HAUTEURS (octave libre) : entendre une basse à
 * l'octave près est le standard du relevé — Do2 saisi contre Do3 attendu est
 * juste. Une case vide (null / nom absent) est fausse.
 */
export function noterBasse(
  saisie: (NoteEntry | null)[],
  solution: SATBMeasure[],
): ResultatNotation {
  const parMesure = solution.map((sol, i) => {
    const entree = saisie[i];
    if (!entree || !entree.name) return false;
    return pcDe(entree.name, entree.octave) === pcDe(sol.bass.name, sol.bass.octave);
  });
  const bonnes = parMesure.filter(Boolean).length;
  return { parMesure, bonnes, total: parMesure.length };
}

// ── Notation palier ② — les chiffrages ─────────────────────────────────────────

/**
 * Note les chiffrages choisis contre les symboles du gabarit, mesure par mesure.
 * Correspondance EXACTE (les pastilles proviennent du même vocabulaire de
 * symboles — pas de normalisation à faire). Un choix absent (null) est faux.
 */
export function noterChiffrages(
  choix: (string | null)[],
  symboles: string[],
): ResultatNotation {
  const parMesure = symboles.map((sym, i) => choix[i] === sym);
  const bonnes = parMesure.filter(Boolean).length;
  return { parMesure, bonnes, total: parMesure.length };
}

// ── Pastilles du palier ② ──────────────────────────────────────────────────────

/** Vocabulaire de symboles : tous les degrés distincts de tous les gabarits. */
function vocabulaireSymboles(): string[] {
  const vus = new Set<string>();
  for (const t of PROGRESSION_TEMPLATES) for (const s of t.symboles) vus.add(s);
  return [...vus];
}

/**
 * Pastilles proposées par mesure au palier ② : le symbole correct + 3
 * distracteurs plausibles tirés du vocabulaire des autres gabarits (sans
 * doublon, jamais égaux à la bonne réponse), le tout MÉLANGÉ par l'aléa
 * injecté — leçon d'écriture d'exercices : jamais la bonne réponse à une
 * position fixe.
 */
export function optionsChiffrage(exercice: ExerciceReleve, rng: Rng): string[][] {
  const vocabulaire = vocabulaireSymboles();
  return exercice.symboles.map(correct => {
    const distracteurs = melanger(vocabulaire.filter(s => s !== correct), rng)
      .slice(0, NB_OPTIONS_CHIFFRAGE - 1);
    return melanger([correct, ...distracteurs], rng);
  });
}
