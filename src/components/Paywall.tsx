/**
 * components/Paywall.tsx
 * Harmonia — L'unique écran de fonction réservée.
 *
 * Il n'en reste qu'un. Le verrou des cours a disparu avec la gratuité, et des
 * six pages autrefois « Pro », quatre n'appelaient aucun modèle : comparateur,
 * atelier, bibliothèque de progressions et studio sont ouverts. Ne subsistent
 * que l'assistant conversationnel et le commentaire rédigé de l'analyseur,
 * seuls endroits du site à consommer des jetons facturés.
 */

import Link from "next/link";
import { getTranslations } from "next-intl/server";

/**
 * Verrou des fonctions reposant sur l'intelligence artificielle.
 *
 * C'est le seul paywall encore atteignable : les cours, eux, sont ouverts à
 * tous. Il ne propose plus d'acheter un plan — il n'y en a plus — mais renvoie
 * vers `/demarche`, qui explique pourquoi ces fonctions font exception et
 * conduit à l'offre des établissements.
 */
export async function ProPaywall({
  locale,
  title,
  description,
}: {
  locale: string;
  title: string;
  description: string;
}) {
  const t = await getTranslations({ locale, namespace: "paywall" });

  return (
    <main style={{ minHeight: "100vh", background: "#f4f1ec", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem 1rem" }}>
      <div style={{ maxWidth: 480, textAlign: "center" as const }}>
        <div aria-hidden="true" style={{ fontSize: 40, marginBottom: 16 }}>✦</div>
        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", color: "#9A5F12", textTransform: "uppercase" as const, marginBottom: 8, fontFamily: "system-ui, sans-serif" }}>
          {t("proLabel")}
        </div>
        <h1 style={{ fontSize: 22, fontWeight: 600, color: "#1a1a1a", margin: "0 0 12px", fontFamily: "Georgia, serif" }}>
          {title}
        </h1>
        <p style={{ fontSize: 14, color: "#5f5f5f", lineHeight: 1.65, margin: "0 0 28px", fontFamily: "system-ui, sans-serif" }}>
          {description}
        </p>
        <div style={{ display: "flex", flexDirection: "column" as const, gap: 10, alignItems: "center" }}>
          <Link
            href={`/${locale}/demarche`}
            style={{ display: "inline-block", padding: "14px 32px", borderRadius: 10, background: "#5C3D6E", color: "#fff", fontSize: 14, fontWeight: 700, textDecoration: "none", fontFamily: "system-ui, sans-serif" }}
          >
            {t("proCta")}
          </Link>
          <Link
            href={`/${locale}/dashboard`}
            style={{ fontSize: 12, color: "#5f5f5f", textDecoration: "none", fontFamily: "system-ui, sans-serif", padding: "10px 0" }}
          >
            {t("proBack")}
          </Link>
        </div>
      </div>
    </main>
  );
}
