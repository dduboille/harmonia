/**
 * src/sentry.edge.config.ts
 * Harmonia — Sentry, runtime Edge (middleware next-intl, routes edge éventuelles).
 *
 * Importé par `instrumentation.ts` (jamais directement) quand NEXT_RUNTIME=edge.
 */
import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: 0.1,
  enabled: process.env.NODE_ENV === "production",
});
