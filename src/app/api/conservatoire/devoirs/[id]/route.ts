import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

// PATCH : le prof modifie un devoir (publier un brouillon, ajuster les dates)
export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { userId } = await auth();
    if (!userId) return NextResponse.json({ error: "Non authentifié" }, { status: 401 });

    const { id } = await params;
    const body = await req.json();
    const { statut, dateLimite, dateDebut } = body;

    // Verify prof ownership
    const { data: devoir } = await supabaseAdmin
      .from("devoirs")
      .select("prof_id")
      .eq("id", id)
      .single();

    if (!devoir || devoir.prof_id !== userId) {
      return NextResponse.json({ error: "Accès refusé" }, { status: 403 });
    }

    const update: Record<string, unknown> = {};
    if (statut !== undefined) update.statut = statut === "brouillon" ? "brouillon" : "publie";
    if (dateLimite !== undefined) update.date_limite = dateLimite || null;
    if (dateDebut !== undefined) update.date_debut = dateDebut || null;

    if (Object.keys(update).length === 0) {
      return NextResponse.json({ error: "Rien à mettre à jour" }, { status: 400 });
    }

    const { data, error } = await supabaseAdmin
      .from("devoirs")
      .update(update)
      .eq("id", id)
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
        dateDebut: data.date_debut ?? undefined,
        statut: (data.statut ?? "publie") as "brouillon" | "publie",
        eleveId: data.eleve_id ?? null,
      },
    });
  } catch (err) {
    console.error("PATCH /api/conservatoire/devoirs/[id]:", err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
