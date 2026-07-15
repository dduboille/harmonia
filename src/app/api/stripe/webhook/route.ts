/**
 * src/app/api/stripe/webhook/route.ts
 * Harmonia — Webhook Stripe (activation abonnement)
 */

import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { supabaseAdmin } from "@/lib/supabase";
import Stripe from "stripe";

function resolvePlan(priceId: string): string {
  if (priceId === process.env.STRIPE_PRICE_STUDENT_MONTHLY) return "student";
  if (priceId === process.env.STRIPE_PRICE_STUDENT_ANNUAL)  return "student_annual";
  if (priceId === process.env.STRIPE_PRICE_PRO_MONTHLY)     return "pro";
  if (priceId === process.env.STRIPE_PRICE_PRO_ANNUAL)      return "pro_annual";
  return "pro";
}

/**
 * Fin de la période en cours.
 *
 * Depuis la version d'API `2025-03-31`, Stripe a DÉPLACÉ `current_period_end` :
 * le champ n'existe plus sur l'abonnement, il vit sur ses LIGNES. Or nous sommes
 * en `2026-04-22.dahlia`. L'ancienne lecture (`subscription.current_period_end`)
 * rendait donc `undefined` — et le `as any` qui traînait ici empêchait TypeScript
 * de le dire. La date partait à `null`, l'abonnement n'expirait jamais… quand
 * l'écriture ne se cassait pas franchement.
 *
 * On lit les lignes d'abord, et on retombe sur l'ancien emplacement pour rester
 * compatible avec les abonnements créés sous une version antérieure.
 */
function finDePeriode(subscription: Stripe.Subscription): string | null {
  const surLaLigne = subscription.items?.data?.[0]?.current_period_end;
  const surLAbonnement = (subscription as unknown as { current_period_end?: number })
    .current_period_end;

  const ts = surLaLigne ?? surLAbonnement;
  return typeof ts === "number" ? new Date(ts * 1000).toISOString() : null;
}

export async function POST(req: NextRequest) {
  const stripe = getStripe();
  const body = await req.text();
  const sig  = req.headers.get("stripe-signature")!;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    console.error("Webhook signature error:", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        const userId  = session.metadata?.clerk_user_id;
        if (!userId) break;

        // Un abonnement 100 % offert (bon de réduction) n'en est pas moins un
        // abonnement : Stripe le crée et le rattache à la session. Mais si le
        // rattachement manque, mieux vaut le dire que d'échouer en silence.
        if (!session.subscription) {
          console.error("Webhook checkout.session.completed sans abonnement", {
            sessionId: session.id,
            userId,
          });
          break;
        }

        const subscription = await stripe.subscriptions.retrieve(
          session.subscription as string
        );

        const priceId = subscription.items.data[0].price.id;
        const plan = resolvePlan(priceId);
        const periodEnd = finDePeriode(subscription);

        const { error } = await supabaseAdmin
          .from("user_subscriptions")
          .upsert({
            user_id: userId,
            plan,
            stripe_customer_id: session.customer as string,
            stripe_subscription_id: subscription.id,
            current_period_end: periodEnd,
            updated_at: new Date().toISOString(),
          }, { onConflict: "user_id" });

        if (error) {
          console.error("Supabase upsert error (checkout):", error);
          return NextResponse.json({ error: "DB error" }, { status: 500 });
        }

        break;
      }

      case "customer.subscription.updated": {
        const subscription = event.data.object as Stripe.Subscription;
        const userId = subscription.metadata?.clerk_user_id;
        if (!userId) break;

        const priceId = subscription.items.data[0].price.id;
        // « trialing » est un état actif : un abonnement en période d'essai donne
        // accès. Le refuser rétrogradait l'abonné en « free » dès la mise à jour.
        const actif = subscription.status === "active" || subscription.status === "trialing";
        const plan  = actif ? resolvePlan(priceId) : "free";
        const periodEnd = finDePeriode(subscription);

        const { error } = await supabaseAdmin
          .from("user_subscriptions")
          .upsert({
            user_id: userId,
            plan,
            stripe_subscription_id: subscription.id,
            current_period_end: periodEnd,
            updated_at: new Date().toISOString(),
          }, { onConflict: "user_id" });

        if (error) {
          console.error("Supabase upsert error (subscription.updated):", error);
          return NextResponse.json({ error: "DB error" }, { status: 500 });
        }
        break;
      }

      case "customer.subscription.deleted": {
        const subscription = event.data.object as Stripe.Subscription;
        const userId = subscription.metadata?.clerk_user_id;
        if (!userId) break;

        await supabaseAdmin
          .from("user_subscriptions")
          .upsert({
            user_id: userId,
            plan: "free",
            updated_at: new Date().toISOString(),
          }, { onConflict: "user_id" });

        break;
      }
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Webhook handler error:", error);
    return NextResponse.json({ error: "Webhook error" }, { status: 500 });
  }
}