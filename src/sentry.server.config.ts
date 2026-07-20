/**
 * src/sentry.server.config.ts
 * Harmonia — Sentry, runtime Node.js.
 *
 * Importé par `instrumentation.ts` (jamais directement) quand NEXT_RUNTIME=nodejs.
 * Sans `NEXT_PUBLIC_SENTRY_DSN`, `Sentry.init` reste un no-op silencieux : ce
 * fichier peut donc être déployé avant même que le projet Sentry n'existe.
 */
import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: 0.1,
  // N'envoie rien depuis un poste de développement, même si la variable
  // d'environnement est présente localement (ex. `vercel env pull`) — Sentry
  // ne doit recevoir que des erreurs réellement rencontrées par des visiteurs.
  enabled: process.env.NODE_ENV === "production",
});
