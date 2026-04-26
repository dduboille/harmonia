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

  if (error || !data || data.length === 0) {
    return {
      coursId,
      totalExercises: totalExercisesInCours,
      completedExercises: 0,
      avgScore: 0,
      lastActivity: null,
      progressPct: 0,
    };
  }

  const completed = data.filter(d => d.completed).length;
  const avgScore  = Math.round(data.reduce((s, d) => s + d.score, 0) / data.length);
  const lastActivity = data
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
    progressPct: Math.round((completed / totalExercisesInCours) * 100),
  };
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

  return data.plan as "free" | "pro" | "annual";
}

// ── Cours accessibles selon le plan ──────────────────────────

export const FREE_COURS = [1, 2, 3]; // cours gratuits
export const PRO_COURS  = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export function getAccessibleCours(plan: "free" | "pro" | "annual"): number[] {
  return plan === "free" ? FREE_COURS : PRO_COURS;
}

export function canAccessCours(
  coursId: number,
  plan: "free" | "pro" | "annual"
): boolean {
  return getAccessibleCours(plan).includes(coursId);
}
