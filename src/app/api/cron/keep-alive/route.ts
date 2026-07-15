/**
 * src/app/api/cron/keep-alive/route.ts
 * Harmonia — Réveil quotidien de Supabase.
 *
 * Un projet Supabase en formule gratuite se met en PAUSE après quelques jours
 * sans activité — et, en pause, il ne répond plus. Tout le site retombe alors en
 * silence sur « free » (les lectures échouent, `getUserPlan` renvoie « free »), et
 * les webhooks Stripe échouent en 500 : un paiement passe, mais le plan n'est
 * jamais inscrit. C'est exactement l'incident qui a motivé ce garde-fou.
 *
 * Une simple lecture quotidienne suffit à maintenir le projet éveillé. C'est un
 * PANSEMENT, pas une garantie : il n'empêche pas une vraie panne, seulement la
 * mise en veille par inactivité. La vraie fiabilité passe par une formule Supabase
 * payante, qui ne se met jamais en pause.
 */

import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

// Ce cron doit joindre la vraie base à chaque exécution : aucune mise en cache.
export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  // Vercel signe ses appels de cron avec `Authorization: Bearer <CRON_SECRET>`
  // dès que la variable CRON_SECRET est définie sur le projet. On refuse tout
  // appel qui n'a pas ce jeton : la route touche la base, elle ne doit pas être
  // déclenchable par n'importe qui.
  const secret = process.env.CRON_SECRET;
  if (secret) {
    const attendu = `Bearer ${secret}`;
    if (req.headers.get("authorization") !== attendu) {
      return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
    }
  }

  try {
    // La lecture la plus légère possible : on ne veut aucune ligne, juste forcer
    // un aller-retour vers Postgres pour le garder éveillé.
    const { error } = await supabaseAdmin
      .from("user_subscriptions")
      .select("user_id", { count: "exact", head: true });

    if (error) {
      console.error("keep-alive: erreur Supabase", error);
      return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true, at: new Date().toISOString() });
  } catch (e) {
    const message = e instanceof Error ? e.message : String(e);
    console.error("keep-alive: exception", message);
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
