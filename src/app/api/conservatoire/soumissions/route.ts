import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const { userId } = await auth();
    if (!userId) return NextResponse.json({ error: "Non authentifié" }, { status: 401 });

    const body = await req.json();
    const { devoirId, contenu } = body;
    if (!devoirId) return NextResponse.json({ error: "devoirId requis" }, { status: 400 });

    const { data, error } = await supabaseAdmin
      .from("soumissions")
      .insert({ devoir_id: devoirId, eleve_id: userId, contenu: contenu ?? null })
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json({
      soumission: {
        id: data.id,
        devoirId: data.devoir_id,
        eleveId: data.eleve_id,
        contenu: data.contenu,
        submittedAt: data.submitted_at,
      },
    });
  } catch (err) {
    console.error("POST /api/conservatoire/soumissions:", err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
