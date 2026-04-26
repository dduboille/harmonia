/**
 * src/app/api/stripe/checkout/route.ts
 * Harmonia — Créer une session Stripe Checkout
 */

import { auth, currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { stripe, PLANS } from "@/lib/stripe";
import { supabaseAdmin } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: "Non authentifié" }, { status: 401 });
    }

    const user = await currentUser();
    const { priceKey, locale } = await req.json();

    const plan = PLANS[priceKey as keyof typeof PLANS];
    if (!plan) {
      return NextResponse.json({ error: "Plan invalide" }, { status: 400 });
    }

    const baseUrl = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";
    const loc = locale ?? "fr";

    // Chercher ou créer le customer Stripe
    let customerId: string | undefined;
    const { data: sub } = await supabaseAdmin
      .from("user_subscriptions")
      .select("stripe_customer_id")
      .eq("user_id", userId)
      .single();

    if (sub?.stripe_customer_id) {
      customerId = sub.stripe_customer_id;
    } else {
      const customer = await stripe.customers.create({
        email: user?.emailAddresses[0]?.emailAddress,
        metadata: { clerk_user_id: userId },
      });
      customerId = customer.id;
    }

    // Créer la session Checkout
    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [{ price: plan.priceId, quantity: 1 }],
      success_url: `${baseUrl}/${loc}/dashboard?upgrade=success`,
      cancel_url: `${baseUrl}/${loc}/upgrade?canceled=true`,
      metadata: { clerk_user_id: userId, locale: loc },
      subscription_data: {
        metadata: { clerk_user_id: userId },
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    return NextResponse.json({ error: "Erreur Stripe" }, { status: 500 });
  }
}