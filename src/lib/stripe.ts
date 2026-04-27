/**
 * lib/stripe.ts
 * Harmonia — Client Stripe
 */

import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-04-22.dahlia",
});

export const PLANS = {
  pro_monthly: {
    priceId: process.env.STRIPE_PRICE_PRO_MONTHLY!,
    name: "Pro mensuel",
    price: 9,
    interval: "month" as const,
  },
  pro_annual: {
    priceId: process.env.STRIPE_PRICE_PRO_ANNUAL!,
    name: "Pro annuel",
    price: 79,
    interval: "year" as const,
  },
};