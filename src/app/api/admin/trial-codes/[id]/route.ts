/**
 * src/app/api/admin/trial-codes/[id]/route.ts
 * Harmonia — Admin : activer/désactiver un code d'essai existant.
 */

import { auth, currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { estAdmin } from "@/lib/trial-codes";

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: "Accès refusé" }, { status: 401 });
  }
  const user = await currentUser();
  const email = user?.emailAddresses[0]?.emailAddress;
  if (!estAdmin(email, process.env.ADMIN_EMAIL)) {
    return NextResponse.json({ error: "Accès refusé" }, { status: 403 });
  }

  const { id } = await params;
  const { active } = await req.json();
  if (typeof active !== "boolean") {
    return NextResponse.json({ error: "Champ 'active' manquant." }, { status: 400 });
  }

  const { error } = await supabaseAdmin
    .from("trial_codes")
    .update({ active })
    .eq("id", id);

  if (error) {
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
  return NextResponse.json({ ok: true });
}
