import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { userId } = await auth();
    if (!userId) return NextResponse.json({ error: "Non authentifié" }, { status: 401 });

    const { id } = await params;
    const body = await req.json();
    const { note, commentaire } = body;

    if (typeof note !== "number" || note < 0 || note > 100) {
      return NextResponse.json({ error: "Note invalide (0–100)" }, { status: 400 });
    }

    // Verify the prof owns the devoir linked to this soumission
    const { data: soum } = await supabaseAdmin
      .from("soumissions")
      .select("devoir_id")
      .eq("id", id)
      .single();

    if (!soum) return NextResponse.json({ error: "Soumission introuvable" }, { status: 404 });

    const { data: devoir } = await supabaseAdmin
      .from("devoirs")
      .select("prof_id")
      .eq("id", soum.devoir_id)
      .single();

    if (!devoir || devoir.prof_id !== userId) {
      return NextResponse.json({ error: "Accès refusé" }, { status: 403 });
    }

    const { data, error } = await supabaseAdmin
      .from("soumissions")
      .update({ note, commentaire: commentaire ?? null, corrected_at: new Date().toISOString() })
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json({
      soumission: {
        id: data.id,
        devoirId: data.devoir_id,
        eleveId: data.eleve_id,
        note: data.note,
        commentaire: data.commentaire,
        submittedAt: data.submitted_at,
        correctedAt: data.corrected_at,
      },
    });
  } catch (err) {
    console.error("PATCH /api/conservatoire/soumissions/[id]:", err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
