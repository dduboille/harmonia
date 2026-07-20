/**
 * src/instrumentation.ts
 * Harmonia — point d'entrée d'instrumentation serveur (convention Next.js).
 *
 * `register()` s'exécute une fois au démarrage de chaque instance serveur ;
 * `onRequestError` capture les erreurs côté serveur (routes, Server Components,
 * Server Actions) que les error.tsx locaux ne voient jamais.
 */
import * as Sentry from "@sentry/nextjs";

export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    await import("./sentry.server.config");
  }
  if (process.env.NEXT_RUNTIME === "edge") {
    await import("./sentry.edge.config");
  }
}

export const onRequestError = Sentry.captureRequestError;
