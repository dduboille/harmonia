import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

// GET ?classeId=xxx  → list students in a class
// POST /rejoindre    → student joins a class via code
export async function GET(req: NextRequest) {
  try {
    const { userId } = await auth();
    if (!userId) return NextResponse.json({ error: "Non authentifié" }, { status: 401 });

    const url = new URL(req.url);
    const classeId = url.searchParams.get("classeId");
    if (!classeId) return NextResponse.json({ error: "classeId requis" }, { status: 400 });

    // Verify the requester is the prof of this class
    const { data: classe } = await supabaseAdmin
      .from("classes")
      .select("prof_id")
      .eq("id", classeId)
      .single();

    if (!classe || classe.prof_id !== userId) {
      return NextResponse.json({ error: "Accès refusé" }, { status: 403 });
    }

    const { data: members, error } = await supabaseAdmin
      .from("classe_eleves")
      .select("eleve_id, joined_at")
      .eq("classe_id", classeId)
      .order("joined_at", { ascending: true });

    if (error) throw error;

    return NextResponse.json({ eleves: members ?? [] });
  } catch (err) {
    console.error("GET /api/conservatoire/eleves:", err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { userId } = await auth();
    if (!userId) return NextResponse.json({ error: "Non authentifié" }, { status: 401 });

    const url = new URL(req.url);
    const action = url.searchParams.get("action");

    if (action === "rejoindre") {
      const body = await req.json();
      const { codeAcces } = body;
      if (!codeAcces?.trim()) return NextResponse.json({ error: "Code requis" }, { status: 400 });

      const { data: classe, error: classErr } = await supabaseAdmin
        .from("classes")
        .select("id, nom")
        .eq("code_acces", codeAcces.toUpperCase().trim())
        .maybeSingle();

      if (classErr) throw classErr;
      if (!classe) return NextResponse.json({ error: "Code invalide" }, { status: 404 });

      // Upsert (idempotent)
      const { error: insertErr } = await supabaseAdmin
        .from("classe_eleves")
        .upsert({ classe_id: classe.id, eleve_id: userId }, { onConflict: "classe_id,eleve_id" });

      if (insertErr) throw insertErr;

      return NextResponse.json({ success: true, classeNom: classe.nom });
    }

    return NextResponse.json({ error: "Action inconnue" }, { status: 400 });
  } catch (err) {
    console.error("POST /api/conservatoire/eleves:", err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
