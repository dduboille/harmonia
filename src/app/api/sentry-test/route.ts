/**
 * Route de diagnostic TEMPORAIRE — à supprimer dès la vérification Sentry faite.
 * Déclenche volontairement une erreur serveur pour confirmer que
 * `onRequestError` (instrumentation.ts) remonte bien jusqu'à Sentry.
 */
export async function GET() {
  throw new Error("Test Sentry — Harmonia (route de diagnostic, sans danger)");
}
