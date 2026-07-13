/**
 * lib/rate-limit.ts
 * Harmonia — Limite de débit par IP pour les routes publiques.
 *
 * Les formulaires de contact sont ouverts aux visiteurs non authentifiés : sans
 * garde-fou, un script peut inonder la boîte de réception et brûler le quota
 * Resend.
 *
 * Le compteur vit en mémoire du processus. Sur une plateforme serverless, chaque
 * instance a le sien : la limite est donc effective par instance, pas
 * globalement. C'est volontairement modeste — l'objectif est d'arrêter un
 * script naïf, pas une attaque distribuée. Pour une garantie stricte, il
 * faudrait un compteur partagé (Upstash, ou une table Supabase).
 */

interface Window {
  count: number;
  resetAt: number;
}

const buckets = new Map<string, Window>();

/** Évite que la Map ne grossisse indéfiniment sur une instance longue durée. */
function sweep(now: number): void {
  for (const [key, win] of buckets) {
    if (win.resetAt <= now) buckets.delete(key);
  }
}

export interface RateLimitResult {
  ok: boolean;
  /** Secondes avant réinitialisation, à renvoyer dans Retry-After. */
  retryAfter: number;
}

/**
 * @param key    identifiant de l'appelant (IP + nom de la route)
 * @param limit  requêtes autorisées par fenêtre
 * @param windowMs durée de la fenêtre
 */
export function rateLimit(key: string, limit: number, windowMs: number): RateLimitResult {
  const now = Date.now();

  if (buckets.size > 5000) sweep(now);

  const win = buckets.get(key);

  if (!win || win.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return { ok: true, retryAfter: 0 };
  }

  win.count += 1;

  if (win.count > limit) {
    return { ok: false, retryAfter: Math.ceil((win.resetAt - now) / 1000) };
  }

  return { ok: true, retryAfter: 0 };
}

/**
 * Adresse de l'appelant. Sur Vercel, `x-forwarded-for` est renseigné par le
 * proxy ; on prend la première entrée, la seule que le client ne contrôle pas.
 */
export function clientIp(req: Request): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return req.headers.get("x-real-ip") ?? "unknown";
}

/** Réponse 429 normalisée. */
export function tooManyRequests(retryAfter: number): Response {
  return Response.json(
    { error: "Trop de requêtes. Réessayez dans un instant." },
    { status: 429, headers: { "Retry-After": String(retryAfter) } }
  );
}
