/**
 * src/app/api/progress/route.ts
 * Harmonia — API route : sauvegarder la progression
 */

import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { saveExerciseProgress } from "@/lib/progression";

export async function POST(req: NextRequest) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: "Non authentifié" }, { status: 401 });
    }

    const body = await req.json();
    const { exerciseId, coursId, exerciseType, score, completed } = body;

    if (!exerciseId || !coursId || !exerciseType) {
      return NextResponse.json({ error: "Données manquantes" }, { status: 400 });
    }

    await saveExerciseProgress(
      userId,
      exerciseId,
      parseInt(coursId),
      exerciseType,
      score ?? 0,
      completed ?? false
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur progression:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: "Non authentifié" }, { status: 401 });
    }

    const url = new URL(req.url);
    const exerciseId = url.searchParams.get("exerciseId");
    const coursId    = url.searchParams.get("coursId");

    if (!exerciseId && !coursId) {
      return NextResponse.json({ error: "Paramètre manquant" }, { status: 400 });
    }

    if (exerciseId) {
      const { getExerciseProgress } = await import("@/lib/progression");
      const progress = await getExerciseProgress(userId, exerciseId);
      return NextResponse.json({ progress });
    }

    if (coursId) {
      const { getCoursStats } = await import("@/lib/progression");
      const { ALL_EXERCISES } = await import("@/exercises/all-exercises");
      const total = ALL_EXERCISES.filter(e => e.cours === parseInt(coursId)).length;
      const stats = await getCoursStats(userId, parseInt(coursId), total);
      return NextResponse.json({ stats });
    }

    return NextResponse.json({ error: "Paramètre invalide" }, { status: 400 });
  } catch (error) {
    console.error("Erreur progression GET:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
