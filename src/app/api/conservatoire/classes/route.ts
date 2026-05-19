import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

function genCode(): string {
  return Math.random().toString(36).slice(2, 8).toUpperCase();
}

export async function GET() {
  try {
    const { userId } = await auth();
    if (!userId) return NextResponse.json({ error: "Non authentifié" }, { status: 401 });

    const { data: classes, error } = await supabaseAdmin
      .from("classes")
      .select("id, nom, description, code_acces, created_at")
      .eq("prof_id", userId)
      .order("created_at", { ascending: false });

    if (error) throw error;

    const enriched = await Promise.all(
      (classes ?? []).map(async (c: { id: string; nom: string; description: string | null; code_acces: string; created_at: string }) => {
        const { count } = await supabaseAdmin
          .from("classe_eleves")
          .select("*", { count: "exact", head: true })
          .eq("classe_id", c.id);
        return {
          id: c.id,
          profId: userId,
          nom: c.nom,
          description: c.description ?? undefined,
          codeAcces: c.code_acces,
          elevesCount: count ?? 0,
          createdAt: c.created_at,
        };
      })
    );

    return NextResponse.json({ classes: enriched });
  } catch (err) {
    console.error("GET /api/conservatoire/classes:", err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { userId } = await auth();
    if (!userId) return NextResponse.json({ error: "Non authentifié" }, { status: 401 });

    const body = await req.json();
    const { nom, description } = body;
    if (!nom?.trim()) return NextResponse.json({ error: "Nom requis" }, { status: 400 });

    // Generate a unique 6-char code
    let codeAcces = genCode();
    for (let i = 0; i < 5; i++) {
      const { data } = await supabaseAdmin
        .from("classes")
        .select("id")
        .eq("code_acces", codeAcces)
        .maybeSingle();
      if (!data) break;
      codeAcces = genCode();
    }

    const { data, error } = await supabaseAdmin
      .from("classes")
      .insert({ prof_id: userId, nom: nom.trim(), description: description?.trim() || null, code_acces: codeAcces })
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json({
      classe: {
        id: data.id,
        profId: userId,
        nom: data.nom,
        description: data.description ?? undefined,
        codeAcces: data.code_acces,
        elevesCount: 0,
        createdAt: data.created_at,
      },
    });
  } catch (err) {
    console.error("POST /api/conservatoire/classes:", err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
