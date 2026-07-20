/**
 * src/instrumentation-client.ts
 * Harmonia — Sentry, navigateur.
 *
 * Convention Next.js (remplace l'ancien sentry.client.config.ts) : exécuté après
 * le chargement du HTML, avant l'hydratation React. `onRouterTransitionStart`
 * est repris par le routeur App Router pour donner à Sentry le contexte de
 * navigation (utile pour situer une erreur dans le bon écran).
 */
import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: 0.1,
  enabled: process.env.NODE_ENV === "production",
});

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;
