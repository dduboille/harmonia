/**
 * src/app/api/stripe/webhook/route.ts
 * Harmonia — Webhook Stripe (activation abonnement)
 */

import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { supabaseAdmin } from "@/lib/supabase";
import Stripe from "stripe";

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

  console.log("Webhook event type:", event.type);

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        const userId  = session.metadata?.clerk_user_id;
        console.log("checkout.session.completed - userId:", userId);
        console.log("checkout.session.completed - subscription:", session.subscription);
        if (!userId) break;

        const subscription = await stripe.subscriptions.retrieve(
          session.subscription as string
        ) as any;

        console.log("subscription retrieved:", subscription.id);
        console.log("subscription status:", subscription.status);
        console.log("subscription current_period_end:", subscription.current_period_end);

        const priceId  = subscription.items.data[0].price.id;
        const isAnnual = priceId === process.env.STRIPE_PRICE_PRO_ANNUAL;
        const plan     = isAnnual ? "annual" : "pro";
        const periodEnd = subscription.current_period_end
          ? new Date(subscription.current_period_end * 1000).toISOString()
          : null;

        console.log("Upserting plan:", plan, "for userId:", userId);

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
          console.error("Supabase upsert error:", error);
        } else {
          console.log("Supabase upsert success for userId:", userId);
        }

        break;
      }

      case "customer.subscription.updated": {
        const subscription = event.data.object as any;
        const userId = subscription.metadata?.clerk_user_id;
        console.log("subscription.updated - userId:", userId);
        if (!userId) break;

        const priceId  = subscription.items.data[0].price.id;
        const isAnnual = priceId === process.env.STRIPE_PRICE_PRO_ANNUAL;
        const plan     = subscription.status === "active"
          ? (isAnnual ? "annual" : "pro")
          : "free";
        const periodEnd = subscription.current_period_end
          ? new Date(subscription.current_period_end * 1000).toISOString()
          : null;

        const { error } = await supabaseAdmin
          .from("user_subscriptions")
          .upsert({
            user_id: userId,
            plan,
            stripe_subscription_id: subscription.id,
            current_period_end: periodEnd,
            updated_at: new Date().toISOString(),
          }, { onConflict: "user_id" });

        if (error) console.error("Supabase upsert error:", error);
        break;
      }

      case "customer.subscription.deleted": {
        const subscription = event.data.object as any;
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