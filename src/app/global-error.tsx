"use client"; // les limites d'erreur doivent être des Client Components

/**
 * app/global-error.tsx
 * Harmonia — filet de secours si la mise en page racine elle-même plante.
 *
 * Remplace tout l'arbre (y compris `[locale]/layout.tsx`) : pas de Provider
 * next-intl disponible ici, donc pas de traduction — texte en dur, sobre.
 * Signature `unstable_retry` (et non `reset`) : convention de cette version
 * de Next.js, vérifiée dans node_modules/next/dist/docs avant d'écrire ceci.
 */
import * as Sentry from "@sentry/nextjs";
import { useEffect } from "react";

export default function GlobalError({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <html lang="fr">
      <body style={{ fontFamily: "system-ui, sans-serif", textAlign: "center", padding: "4rem 1.5rem", color: "#1a1a1a" }}>
        <h1 style={{ fontSize: 22, fontWeight: 600, marginBottom: 10 }}>Une erreur est survenue</h1>
        <p style={{ color: "#666", marginBottom: 24, fontSize: 14 }}>
          L&apos;équipe en a été informée automatiquement. Vous pouvez réessayer ou revenir à l&apos;accueil.
        </p>
        <button
          onClick={() => unstable_retry()}
          style={{ padding: "10px 20px", marginRight: 10, borderRadius: 6, border: "1px solid #1a1a1a", background: "#1a1a1a", color: "#fff", cursor: "pointer", fontSize: 14 }}
        >
          Réessayer
        </button>
        <a href="/" style={{ fontSize: 14, color: "#185FA5" }}>Retour à l&apos;accueil</a>
      </body>
    </html>
  );
}
