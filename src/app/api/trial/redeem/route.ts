/**
 * src/app/api/trial/redeem/route.ts
 * Harmonia — Rachat d'un code d'essai sans CB : accorde 14 jours de plan
 * "pro" en écrivant directement dans user_subscriptions (aucun Stripe
 * impliqué). Toute la logique de validation vit dans lib/trial-codes.ts.
 */

import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { aAbonnementPayantActif, calculerExpiration, validerRachat } from "@/lib/trial-codes";

export async function POST(req: NextRequest) {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: "Non authentifié" }, { status: 401 });
  }

  let code: unknown;
  try {
    ({ code } = await req.json());
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }
  if (!code || typeof code !== "string") {
    return NextResponse.json({ error: "Code manquant." }, { status: 400 });
  }

  const { data: trialCode, error: erreurCode } = await supabaseAdmin
    .from("trial_codes")
    .select("id, code, max_uses, uses_count, active")
    .eq("code", code.trim().toUpperCase())
    .single();
  if (erreurCode && erreurCode.code !== "PGRST116") {
    console.error("Erreur lecture trial_codes:", erreurCode);
    return NextResponse.json({ error: "Erreur serveur. Réessayez." }, { status: 500 });
  }

  const { data: redemptionExistante, error: erreurLectureRedemption } = await supabaseAdmin
    .from("trial_redemptions")
    .select("id")
    .eq("user_id", userId)
    .maybeSingle();
  if (erreurLectureRedemption) {
    console.error("Erreur lecture trial_redemptions:", erreurLectureRedemption);
    return NextResponse.json({ error: "Erreur serveur. Réessayez." }, { status: 500 });
  }

  // Un abonnement Stripe réel et actif ne doit JAMAIS être raccourci par un
  // rachat de code d'essai — sans cette vérification, quelqu'un déjà
  // abonné (via un code partagé largement, par exemple) verrait sa date de
  // fin d'abonnement réelle écrasée par les 14 jours de l'essai.
  const { data: abonnementExistant, error: erreurLectureAbo } = await supabaseAdmin
    .from("user_subscriptions")
    .select("stripe_subscription_id, current_period_end")
    .eq("user_id", userId)
    .maybeSingle();
  if (erreurLectureAbo) {
    console.error("Erreur lecture user_subscriptions:", erreurLectureAbo);
    return NextResponse.json({ error: "Erreur serveur. Réessayez." }, { status: 500 });
  }

  const validation = validerRachat(
    trialCode ?? null,
    !!redemptionExistante,
    aAbonnementPayantActif(abonnementExistant ?? null),
  );
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

  // Étape 2 : incrémenter le compteur de façon ATOMIQUE ET CONDITIONNELLE
  // (uses_count < max_uses dans la clause WHERE). Un simple "lire, puis
  // écrire lu+1" laisserait deux rachats concurrents sur le même code
  // partagé lire la même valeur et faire dépasser max_uses. Ici, si un
  // autre rachat a déjà fait passer la limite entre notre lecture initiale
  // et maintenant, aucune ligne ne correspond à la clause WHERE et la mise
  // à jour ne renvoie rien — on le détecte et on refuse proprement.
  const { data: compteurMisAJour, error: erreurCompteur } = await supabaseAdmin
    .from("trial_codes")
    .update({ uses_count: trialCode!.uses_count + 1 })
    .eq("id", trialCode!.id)
    .lt("uses_count", trialCode!.max_uses)
    .select("id")
    .maybeSingle();

  if (erreurCompteur || !compteurMisAJour) {
    await supabaseAdmin.from("trial_redemptions").delete().eq("id", redemption.id);
    if (erreurCompteur) console.error("Erreur increment uses_count:", erreurCompteur);
    return NextResponse.json({ error: "Ce code a atteint sa limite d'utilisations." }, { status: 400 });
  }

  // Étape 3 : accorder l'accès Pro.
  const { error: erreurSub } = await supabaseAdmin
    .from("user_subscriptions")
    .upsert({
      user_id: userId,
      plan: "pro",
      current_period_end: calculerExpiration(new Date()),
      updated_at: new Date().toISOString(),
    }, { onConflict: "user_id" });

  if (erreurSub) {
    // Compensation : on retire tout ce qu'on vient d'écrire pour ne pas
    // bloquer définitivement cette personne — elle pourra resoumettre le code.
    const { error: erreurAnnulationRedemption } = await supabaseAdmin
      .from("trial_redemptions")
      .delete()
      .eq("id", redemption.id);
    if (erreurAnnulationRedemption) {
      console.error("Compensation échouée (trial_redemptions) après erreur user_subscriptions:", erreurAnnulationRedemption);
    }
    const { error: erreurAnnulationCompteur } = await supabaseAdmin
      .from("trial_codes")
      .update({ uses_count: trialCode!.uses_count })
      .eq("id", trialCode!.id);
    if (erreurAnnulationCompteur) {
      console.error("Compensation échouée (uses_count) après erreur user_subscriptions:", erreurAnnulationCompteur);
    }
    console.error("Erreur upsert user_subscriptions (essai):", erreurSub);
    return NextResponse.json({ error: "Erreur serveur. Réessayez." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
