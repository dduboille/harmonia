/**
 * types/exercise.ts
 * Harmonia — Types partagés pour le système d'exercices
 */

import type { NoteEntry, Voice } from "@/components/HarmoniaEditor";

// ─── Types de base ────────────────────────────────────────────────────────────

export type ExerciseType =
  | "satb"           // Réaliser une progression en 4 voix
  | "identify"       // Identifier les erreurs dans un voicing donné
  | "harmonize"      // Harmoniser une mélodie donnée
  | "analysis";      // Analyser une progression existante

export type Difficulty = 1 | 2 | 3; // 1=débutant, 2=intermédiaire, 3=avancé

// ─── Voicing SATB ─────────────────────────────────────────────────────────────

export type SATBMeasure = Record<Voice, NoteEntry>;

// ─── Exercice SATB ────────────────────────────────────────────────────────────

export interface SATBExercise {
  id: string;
  type: "satb";

  // Métadonnées
  cours: number;            // numéro du cours associé (1-9)
  title: string;
  subtitle?: string;
  difficulty: Difficulty;
  tags: string[];           // ex: ["II-V-I", "conduite minimaliste", "Do majeur"]

  // Contenu
  keySignature: string;     // ex: "C", "G", "F"
  measures: string[];       // labels des mesures, ex: ["II (Dm7)", "V (G7)", "I (CMaj7)"]
  solution: SATBMeasure[];  // voicing de référence

  // Pédagogie
  hint?: string;            // indice optionnel
  explanation?: string;     // explication de la solution
  concepts: string[];       // concepts mis en jeu, ex: ["triton", "sensible", "quintes parallèles"]

  // i18n — titres traduits (optionnel pour MVP)
  titleI18n?: Partial<Record<string, string>>;
}

// ─── Union type pour exercices futurs ─────────────────────────────────────────

export type Exercise = SATBExercise; // à étendre avec | IdentifyExercise | ...

// ─── Catalogue ────────────────────────────────────────────────────────────────

export interface ExerciseCatalog {
  [coursId: number]: Exercise[];
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

export function exercisesByCoursId(exercises: Exercise[], coursId: number): Exercise[] {
  return exercises.filter(e => e.cours === coursId);
}

export function exercisesByDifficulty(exercises: Exercise[], d: Difficulty): Exercise[] {
  return exercises.filter(e => e.difficulty === d);
}

export const DIFFICULTY_LABEL: Record<Difficulty, string> = {
  1: "Débutant",
  2: "Intermédiaire",
  3: "Avancé",
};

export const DIFFICULTY_COLOR: Record<Difficulty, string> = {
  1: "#0F6E56",
  2: "#BA7517",
  3: "#E53E3E",
};

export const DIFFICULTY_BG: Record<Difficulty, string> = {
  1: "#E1F5EE",
  2: "#FAEEDA",
  3: "#FFF5F5",
};