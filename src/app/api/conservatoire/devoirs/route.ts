import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

export async function GET(req: NextRequest) {
  try {
    const { userId } = await auth();
    if (!userId) return NextResponse.json({ error: "Non authentifié" }, { status: 401 });

    const url = new URL(req.url);
    const classeId = url.searchParams.get("classeId");
    if (!classeId) return NextResponse.json({ error: "classeId requis" }, { status: 400 });

    const { data: devoirs, error } = await supabaseAdmin
      .from("devoirs")
      .select("id, classe_id, titre, type, reference_id, date_limite, created_at")
      .eq("classe_id", classeId)
      .order("created_at", { ascending: false });

    if (error) throw error;

    const enriched = await Promise.all(
      (devoirs ?? []).map(async (d: { id: string; classe_id: string; titre: string; type: string; reference_id: string | null; date_limite: string | null; created_at: string }) => {
        const { count: total } = await supabaseAdmin
          .from("soumissions")
          .select("*", { count: "exact", head: true })
          .eq("devoir_id", d.id);
        const { count: corriges } = await supabaseAdmin
          .from("soumissions")
          .select("*", { count: "exact", head: true })
          .eq("devoir_id", d.id)
          .not("corrected_at", "is", null);
        return {
          id: d.id,
          classeId: d.classe_id,
          titre: d.titre,
          type: d.type,
          referenceId: d.reference_id ?? undefined,
          dateLimite: d.date_limite ?? undefined,
          soumissionsCount: total ?? 0,
          corrigésCount: corriges ?? 0,
        };
      })
    );

    return NextResponse.json({ devoirs: enriched });
  } catch (err) {
    console.error("GET /api/conservatoire/devoirs:", err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { userId } = await auth();
    if (!userId) return NextResponse.json({ error: "Non authentifié" }, { status: 401 });

    const body = await req.json();
    const { classeId, titre, type, referenceId, dateLimite } = body;

    if (!classeId || !titre?.trim() || !type) {
      return NextResponse.json({ error: "Données manquantes" }, { status: 400 });
    }

    // Verify the requester is the prof
    const { data: classe } = await supabaseAdmin
      .from("classes")
      .select("prof_id")
      .eq("id", classeId)
      .single();

    if (!classe || classe.prof_id !== userId) {
      return NextResponse.json({ error: "Accès refusé" }, { status: 403 });
    }

    const { data, error } = await supabaseAdmin
      .from("devoirs")
      .insert({
        classe_id: classeId,
        prof_id: userId,
        titre: titre.trim(),
        type,
        reference_id: referenceId ?? null,
        date_limite: dateLimite ?? null,
      })
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json({
      devoir: {
        id: data.id,
        classeId: data.classe_id,
        titre: data.titre,
        type: data.type,
        referenceId: data.reference_id ?? undefined,
        dateLimite: data.date_limite ?? undefined,
        soumissionsCount: 0,
        corrigésCount: 0,
      },
    });
  } catch (err) {
    console.error("POST /api/conservatoire/devoirs:", err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
