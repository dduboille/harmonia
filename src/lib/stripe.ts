import Stripe from "stripe";

let _stripe: Stripe | null = null;

export function getStripe(): Stripe {
  if (!_stripe) {
    const key = process.env.STRIPE_SECRET_KEY;
    console.log("Initializing Stripe, key prefix:", key?.slice(0, 10));
    _stripe = new Stripe(key!, {
      apiVersion: "2026-04-22.dahlia",
    });
  }
  return _stripe;
}

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