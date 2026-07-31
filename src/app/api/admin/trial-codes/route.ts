/**
 * src/app/api/admin/trial-codes/route.ts
 * Harmonia — Admin : lister et créer des codes d'essai. Réservé au compte
 * dont l'e-mail correspond à la variable d'environnement ADMIN_EMAIL.
 */

import { auth, currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { estAdmin, genererCode } from "@/lib/trial-codes";

async function verifierAdmin() {
  const { userId } = await auth();
  if (!userId) return { ok: false as const, status: 401 };
  const user = await currentUser();
  const email = user?.emailAddresses[0]?.emailAddress;
  if (!estAdmin(email, process.env.ADMIN_EMAIL)) return { ok: false as const, status: 403 };
  return { ok: true as const };
}

export async function GET() {
  const verif = await verifierAdmin();
  if (!verif.ok) {
    return NextResponse.json({ error: "Accès refusé" }, { status: verif.status });
  }

  const { data, error } = await supabaseAdmin
    .from("trial_codes")
    .select("id, code, max_uses, uses_count, active, created_at")
    .order("created_at", { ascending: false });

  if (error) {
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
  return NextResponse.json({ codes: data });
}

export async function POST(req: NextRequest) {
  const verif = await verifierAdmin();
  if (!verif.ok) {
    return NextResponse.json({ error: "Accès refusé" }, { status: verif.status });
  }

  const body = await req.json().catch(() => ({}));
  const codePersonnalise: string | undefined = body?.code?.trim().toUpperCase();
  const maxUses: number = Number.isInteger(body?.max_uses) && body.max_uses > 0 ? body.max_uses : 1;

  const { data, error } = await supabaseAdmin
    .from("trial_codes")
    .insert({ code: codePersonnalise || genererCode(), max_uses: maxUses })
    .select("id, code, max_uses, uses_count, active, created_at")
    .single();

  if (error) {
    if (error.code === "23505") {
      return NextResponse.json({ error: "Ce code existe déjà." }, { status: 409 });
    }
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
  return NextResponse.json({ code: data });
}
