/**
 * lib/progression.ts
 * Harmonia — Gestion de la progression utilisateur
 * Toutes les fonctions s'exécutent côté serveur (service_role)
 */

import { supabaseAdmin, type UserProgress } from "@/lib/supabase";

// ── Lire la progression d'un exercice ─────────────────────────

export async function getExerciseProgress(
  userId: string,
  exerciseId: string
): Promise<UserProgress | null> {
  const { data, error } = await supabaseAdmin
    .from("user_progress")
    .select("*")
    .eq("user_id", userId)
    .eq("exercise_id", exerciseId)
    .single();

  if (error || !data) return null;
  return data as UserProgress;
}

// ── Sauvegarder/mettre à jour la progression ──────────────────

export async function saveExerciseProgress(
  userId: string,
  exerciseId: string,
  coursId: number,
  exerciseType: string,
  score: number,
  completed: boolean
): Promise<void> {
  const existing = await getExerciseProgress(userId, exerciseId);

  if (existing) {
    // Mise à jour — on garde le meilleur score
    await supabaseAdmin
      .from("user_progress")
      .update({
        score: Math.max(existing.score, score),
        completed: existing.completed || completed,
        attempts: existing.attempts + 1,
        last_seen_at: new Date().toISOString(),
      })
      .eq("user_id", userId)
      .eq("exercise_id", exerciseId);
  } else {
    // Création
    await supabaseAdmin
      .from("user_progress")
      .insert({
        user_id: userId,
        exercise_id: exerciseId,
        cours_id: coursId,
        exercise_type: exerciseType,
        score,
        completed,
        attempts: 1,
        last_seen_at: new Date().toISOString(),
      });
  }
}

// ── Progression par cours ─────────────────────────────────────

export interface CoursStats {
  coursId: number;
  totalExercises: number;
  completedExercises: number;
  avgScore: number;
  lastActivity: string | null;
  progressPct: number;
}

/** Les seules colonnes dont le calcul des stats a besoin. */
type LigneProgression = Pick<UserProgress, "completed" | "score" | "last_seen_at">;

/**
 * Calcul PUR des stats d'un cours, à partir de lignes DÉJÀ chargées.
 *
 * Le tableau de bord affiche les 23 cours. En appelant `getCoursStats` pour
 * chacun, il lançait 23 requêtes sur `user_progress` — puis une 24e, via
 * `getAllProgress`, qui ramenait EXACTEMENT les mêmes lignes (toutes celles de
 * l'utilisateur). Chaque requête est un aller-retour vers Supabase : la page
 * mettait plusieurs secondes à s'afficher, au point de passer pour bloquée.
 *
 * Une seule lecture suffit : ces stats sont un simple regroupement par cours.
 */
export function coursStatsFromRows(
  rows: LigneProgression[],
  coursId: number,
  totalExercisesInCours: number,
): CoursStats {
  if (rows.length === 0) {
    return {
      coursId,
      totalExercises: totalExercisesInCours,
      completedExercises: 0,
      avgScore: 0,
      lastActivity: null,
      progressPct: 0,
    };
  }

  const completed = rows.filter(d => d.completed).length;
  const avgScore  = Math.round(rows.reduce((s, d) => s + d.score, 0) / rows.length);
  const lastActivity = rows
    .map(d => d.last_seen_at)
    .filter(Boolean)
    .sort()
    .pop() ?? null;

  return {
    coursId,
    totalExercises: totalExercisesInCours,
    completedExercises: completed,
    avgScore,
    lastActivity,
    // Un cours sans exercice donnerait une division par zéro — donc un NaN, qui
    // traverse le JSON et s'affiche tel quel.
    progressPct: totalExercisesInCours > 0
      ? Math.round((completed / totalExercisesInCours) * 100)
      : 0,
  };
}

export async function getCoursStats(
  userId: string,
  coursId: number,
  totalExercisesInCours: number
): Promise<CoursStats> {
  const { data, error } = await supabaseAdmin
    .from("user_progress")
    .select("completed, score, last_seen_at")
    .eq("user_id", userId)
    .eq("cours_id", coursId);

  return coursStatsFromRows(
    error || !data ? [] : (data as LigneProgression[]),
    coursId,
    totalExercisesInCours,
  );
}

// ── Progression globale (tous les cours) ──────────────────────

export async function getAllProgress(userId: string): Promise<UserProgress[]> {
  const { data, error } = await supabaseAdmin
    .from("user_progress")
    .select("*")
    .eq("user_id", userId)
    .order("last_seen_at", { ascending: false });

  if (error || !data) return [];
  return data as UserProgress[];
}

// ── Abonnement utilisateur ────────────────────────────────────

// Normalise tous les noms de plan Stripe vers les 3 valeurs connues du dashboard.
// "student" / "student_annual" viennent du webhook actuel.
// "pro_annual" / "annual" sont les plans annuels.
const PLAN_MAP: Record<string, "free" | "pro" | "annual"> = {
  free:            "free",
  student:         "pro",
  étudiant:        "pro",
  etudiant:        "pro",
  student_annual:  "annual",
  pro:             "pro",
  pro_annual:      "annual",
  annual:          "annual",
};

export async function getUserPlan(
  userId: string
): Promise<"free" | "pro" | "annual"> {
  const { data } = await supabaseAdmin
    .from("user_subscriptions")
    .select("plan, current_period_end")
    .eq("user_id", userId)
    .single();

  if (!data) return "free";

  // Vérifier que l'abonnement n'est pas expiré
  if (data.current_period_end) {
    const expiry = new Date(data.current_period_end);
    if (expiry < new Date()) return "free";
  }

  return PLAN_MAP[data.plan] ?? "free";
}

// ── Cours accessibles selon le plan ──────────────────────────

import { COURS, FREE_COURS as CATALOGUE_FREE_COURS } from "@/lib/catalogue";

export const FREE_COURS = CATALOGUE_FREE_COURS;
export const PRO_COURS  = COURS.map(c => c.num);

export function getAccessibleCours(plan: "free" | "pro" | "annual"): number[] {
  return plan === "free" ? FREE_COURS : PRO_COURS;
}

export function canAccessCours(
  coursId: number,
  plan: "free" | "pro" | "annual"
): boolean {
  return getAccessibleCours(plan).includes(coursId);
}
