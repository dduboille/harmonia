import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

// Types d'erreurs harmoniques reconnus (miroir de validateSATB)
const KNOWN_TYPES = new Set([
  "parallel_fifth", "parallel_octave", "spacing", "range",
  "crossing", "leading_tone", "seventh", "missing_accidental", "cross_relation",
]);

// POST : enregistre les types d'erreurs rencontrés par l'élève pendant une
// session d'écriture SATB (accumulés côté client). Une ligne par session.
export async function POST(req: NextRequest) {
  try {
    const { userId } = await auth();
    if (!userId) return NextResponse.json({ error: "Non authentifié" }, { status: 401 });

    const body = await req.json();
    const raw = body?.erreurs;
    if (!raw || typeof raw !== "object") {
      return NextResponse.json({ error: "erreurs requis" }, { status: 400 });
    }

    // Ne conserver que les types connus, valeurs numériques positives
    const erreurs: Record<string, number> = {};
    for (const [k, v] of Object.entries(raw)) {
      if (KNOWN_TYPES.has(k)) {
        const n = Number(v);
        if (Number.isFinite(n) && n > 0) erreurs[k] = Math.floor(n);
      }
    }
    if (Object.keys(erreurs).length === 0) {
      return NextResponse.json({ ok: true, skipped: true });
    }

    const { error } = await supabaseAdmin
      .from("eleve_erreurs")
      .insert({ eleve_id: userId, erreurs });

    if (error) throw error;

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("POST /api/harmony-errors:", err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
