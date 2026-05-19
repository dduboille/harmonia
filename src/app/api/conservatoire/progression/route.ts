import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

// GET ?classeId=xxx  → progression of all students in the class
export async function GET(req: NextRequest) {
  try {
    const { userId } = await auth();
    if (!userId) return NextResponse.json({ error: "Non authentifié" }, { status: 401 });

    const url = new URL(req.url);
    const classeId = url.searchParams.get("classeId");
    if (!classeId) return NextResponse.json({ error: "classeId requis" }, { status: 400 });

    // Verify requester is the prof
    const { data: classe } = await supabaseAdmin
      .from("classes")
      .select("prof_id")
      .eq("id", classeId)
      .single();

    if (!classe || classe.prof_id !== userId) {
      return NextResponse.json({ error: "Accès refusé" }, { status: 403 });
    }

    // Get all student IDs in this class
    const { data: members, error: membErr } = await supabaseAdmin
      .from("classe_eleves")
      .select("eleve_id")
      .eq("classe_id", classeId);

    if (membErr) throw membErr;
    if (!members || members.length === 0) return NextResponse.json({ progression: [] });

    const eleveIds = members.map((m: { eleve_id: string }) => m.eleve_id);

    // Fetch progress for all students from user_progress
    const { data: progress, error: progErr } = await supabaseAdmin
      .from("user_progress")
      .select("user_id, cours_id, completed, score, last_seen_at")
      .in("user_id", eleveIds);

    if (progErr) throw progErr;

    // Aggregate per student
    const byStudent: Record<string, {
      coursIds: Set<number>;
      scores: number[];
      lastSeen: string;
    }> = {};

    for (const p of progress ?? []) {
      if (!byStudent[p.user_id]) {
        byStudent[p.user_id] = { coursIds: new Set(), scores: [], lastSeen: "" };
      }
      if (p.completed) {
        byStudent[p.user_id].coursIds.add(p.cours_id);
        byStudent[p.user_id].scores.push(p.score);
      }
      if (p.last_seen_at > byStudent[p.user_id].lastSeen) {
        byStudent[p.user_id].lastSeen = p.last_seen_at;
      }
    }

    const progression = eleveIds.map((id: string) => {
      const data = byStudent[id] ?? { coursIds: new Set(), scores: [], lastSeen: "" };
      const scores = data.scores;
      return {
        userId: id,
        coursCompletés: data.coursIds.size,
        exercicesReussis: scores.filter(s => s >= 70).length,
        scoreMoyen: scores.length > 0 ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0,
        derniereActivite: data.lastSeen || "",
      };
    });

    return NextResponse.json({ progression });
  } catch (err) {
    console.error("GET /api/conservatoire/progression:", err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
