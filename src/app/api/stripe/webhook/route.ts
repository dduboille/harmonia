/**
 * src/app/api/stripe/webhook/route.ts
 * Harmonia — Webhook Stripe (activation abonnement)
 */

import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { supabaseAdmin } from "@/lib/supabase";
import Stripe from "stripe";

export async function POST(req: NextRequest) {
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
        const session = event.data.object as Stripe.CheckoutSession;
        const userId  = session.metadata?.clerk_user_id;
        if (!userId) break;

        // Récupérer l'abonnement
        const subscription = await stripe.subscriptions.retrieve(
          session.subscription as string
        );

        const priceId   = subscription.items.data[0].price.id;
        const isAnnual  = priceId === process.env.STRIPE_PRICE_PRO_ANNUAL;
        const plan      = isAnnual ? "annual" : "pro";
        const periodEnd = new Date(subscription.current_period_end * 1000).toISOString();

        await supabaseAdmin
          .from("user_subscriptions")
          .upsert({
            user_id: userId,
            plan,
            stripe_customer_id: session.customer as string,
            stripe_subscription_id: subscription.id,
            current_period_end: periodEnd,
            updated_at: new Date().toISOString(),
          }, { onConflict: "user_id" });

        break;
      }

      case "customer.subscription.updated": {
        const subscription = event.data.object as Stripe.Subscription;
        const userId = subscription.metadata?.clerk_user_id;
        if (!userId) break;

        const priceId   = subscription.items.data[0].price.id;
        const isAnnual  = priceId === process.env.STRIPE_PRICE_PRO_ANNUAL;
        const plan      = subscription.status === "active"
          ? (isAnnual ? "annual" : "pro")
          : "free";
        const periodEnd = new Date(subscription.current_period_end * 1000).toISOString();

        await supabaseAdmin
          .from("user_subscriptions")
          .upsert({
            user_id: userId,
            plan,
            stripe_subscription_id: subscription.id,
            current_period_end: periodEnd,
            updated_at: new Date().toISOString(),
          }, { onConflict: "user_id" });

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

// Désactiver le body parsing pour les webhooks Stripe
export const config = { api: { bodyParser: false } };