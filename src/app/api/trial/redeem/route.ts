/**
 * src/app/api/trial/redeem/route.ts
 * Harmonia — Rachat d'un code d'essai sans CB : accorde 14 jours de plan
 * "pro" en écrivant directement dans user_subscriptions (aucun Stripe
 * impliqué). Toute la logique de validation vit dans lib/trial-codes.ts.
 */

import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { calculerExpiration, validerRachat } from "@/lib/trial-codes";

export async function POST(req: NextRequest) {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: "Non authentifié" }, { status: 401 });
  }

  const { code } = await req.json();
  if (!code || typeof code !== "string") {
    return NextResponse.json({ error: "Code manquant." }, { status: 400 });
  }

  const { data: trialCode } = await supabaseAdmin
    .from("trial_codes")
    .select("id, code, max_uses, uses_count, active")
    .eq("code", code.trim().toUpperCase())
    .single();

  const { data: redemptionExistante } = await supabaseAdmin
    .from("trial_redemptions")
    .select("id")
    .eq("user_id", userId)
    .maybeSingle();

  const validation = validerRachat(trialCode ?? null, !!redemptionExistante);
  if (!validation.ok) {
    return NextResponse.json({ error: validation.erreur }, { status: validation.status });
  }

  // Étape 1 : insérer la ligne de rachat. La contrainte unique sur user_id
  // protège contre un double-appel concurrent du même utilisateur.
  const { data: redemption, error: erreurRedemption } = await supabaseAdmin
    .from("trial_redemptions")
    .insert({ code_id: trialCode!.id, user_id: userId })
    .select("id")
    .single();

  if (erreurRedemption) {
    if (erreurRedemption.code === "23505") {
      return NextResponse.json({ error: "Vous avez déjà utilisé un essai." }, { status: 409 });
    }
    console.error("Erreur insert trial_redemptions:", erreurRedemption);
    return NextResponse.json({ error: "Erreur serveur. Réessayez." }, { status: 500 });
  }

  // Étape 2 : accorder l'accès Pro.
  const { error: erreurSub } = await supabaseAdmin
    .from("user_subscriptions")
    .upsert({
      user_id: userId,
      plan: "pro",
      current_period_end: calculerExpiration(new Date()),
      updated_at: new Date().toISOString(),
    }, { onConflict: "user_id" });

  if (erreurSub) {
    // Compensation : on retire la ligne qu'on vient de créer pour ne pas
    // bloquer définitivement cette personne — elle pourra resoumettre le code.
    await supabaseAdmin.from("trial_redemptions").delete().eq("id", redemption.id);
    console.error("Erreur upsert user_subscriptions (essai):", erreurSub);
    return NextResponse.json({ error: "Erreur serveur. Réessayez." }, { status: 500 });
  }

  // Étape 3 : incrémenter le compteur d'utilisations du code.
  const { error: erreurCompteur } = await supabaseAdmin
    .from("trial_codes")
    .update({ uses_count: trialCode!.uses_count + 1 })
    .eq("id", trialCode!.id);

  if (erreurCompteur) {
    // Non bloquant pour l'utilisateur (son accès Pro est déjà accordé) —
    // juste un compteur d'usage qui restera légèrement sous-évalué.
    console.error("Erreur increment uses_count:", erreurCompteur);
  }

  return NextResponse.json({ ok: true });
}
