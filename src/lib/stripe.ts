import Stripe from "stripe";

let _stripe: Stripe | null = null;

export function getStripe(): Stripe {
  if (!_stripe) {
    const key = process.env.STRIPE_SECRET_KEY;
    _stripe = new Stripe(key!, {
      apiVersion: "2026-04-22.dahlia",
    });
  }
  return _stripe;
}

export const PLANS = {
  student_monthly: {
    priceId: process.env.STRIPE_PRICE_STUDENT_MONTHLY!,
    name: "Étudiant mensuel",
    price: 9,
    interval: "month" as const,
    plan: "student",
  },
  student_annual: {
    priceId: process.env.STRIPE_PRICE_STUDENT_ANNUAL!,
    name: "Étudiant annuel",
    price: 79,
    interval: "year" as const,
    plan: "student_annual",
  },
  pro_monthly: {
    priceId: process.env.STRIPE_PRICE_PRO_MONTHLY!,
    name: "Pro mensuel",
    price: 19,
    interval: "month" as const,
    plan: "pro",
  },
  pro_annual: {
    priceId: process.env.STRIPE_PRICE_PRO_ANNUAL!,
    name: "Pro annuel",
    price: 159,
    interval: "year" as const,
    plan: "pro_annual",
  },
};