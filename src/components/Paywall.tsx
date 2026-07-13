/**
 * components/Paywall.tsx
 * Harmonia — Écrans d'invitation à l'abonnement.
 *
 * Le même bloc « Fonctionnalité Pro » était recopié dans chaque page Pro, avec
 * des couleurs et des contrastes qui divergeaient d'une copie à l'autre. Il est
 * centralisé ici — ce qui rend aussi visible la page qui l'avait tout simplement
 * oublié (/comparateur, vendue comme fonction Pro sans aucun contrôle).
 */

import Link from "next/link";
import type { CoursMeta } from "@/lib/catalogue";
import { COURS_COUNT, FREE_COURS } from "@/lib/catalogue";

const FREE_COUNT = FREE_COURS.length;

/** Verrou d'une fonctionnalité réservée au plan Pro. */
export function ProPaywall({
  locale,
  title,
  description,
}: {
  locale: string;
  title: string;
  description: string;
}) {
  return (
    <main style={{ minHeight: "100vh", background: "#f4f1ec", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem 1rem" }}>
      <div style={{ maxWidth: 480, textAlign: "center" as const }}>
        <div aria-hidden="true" style={{ fontSize: 40, marginBottom: 16 }}>✦</div>
        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", color: "#9A5F12", textTransform: "uppercase" as const, marginBottom: 8, fontFamily: "system-ui, sans-serif" }}>
          Fonctionnalité Pro
        </div>
        <h1 style={{ fontSize: 22, fontWeight: 600, color: "#1a1a1a", margin: "0 0 12px", fontFamily: "Georgia, serif" }}>
          {title}
        </h1>
        <p style={{ fontSize: 14, color: "#5f5f5f", lineHeight: 1.65, margin: "0 0 28px", fontFamily: "system-ui, sans-serif" }}>
          {description}
        </p>
        <div style={{ display: "flex", flexDirection: "column" as const, gap: 10, alignItems: "center" }}>
          <Link
            href={`/${locale}/upgrade`}
            style={{ display: "inline-block", padding: "14px 32px", borderRadius: 10, background: "#5C3D6E", color: "#fff", fontSize: 14, fontWeight: 700, textDecoration: "none", fontFamily: "system-ui, sans-serif" }}
          >
            Passer Pro →
          </Link>
          <Link
            href={`/${locale}/dashboard`}
            style={{ fontSize: 12, color: "#5f5f5f", textDecoration: "none", fontFamily: "system-ui, sans-serif", padding: "10px 0" }}
          >
            Retour au tableau de bord
          </Link>
        </div>
      </div>
    </main>
  );
}

/**
 * Verrou d'un cours (ou de ses exercices) réservé aux abonnés.
 * Le titre et la description restent servis : la page demeure indexable et
 * indique au visiteur ce qu'il débloque.
 */
export function CoursPaywall({
  locale,
  cours,
  signedIn,
  subject = "cours",
}: {
  locale: string;
  cours: CoursMeta;
  signedIn: boolean;
  subject?: "cours" | "exercices";
}) {
  const isExercices = subject === "exercices";

  return (
    <main style={{ minHeight: "100vh", background: "#faf8f4", padding: "3rem 1rem" }}>
      <article style={{ maxWidth: 680, margin: "0 auto" }}>
        <div style={{ fontSize: 12, color: "#6b6b6b", fontFamily: "system-ui, sans-serif", marginBottom: 16 }}>
          <Link href={`/${locale}/cours`} style={{ color: "#6b6b6b", textDecoration: "none" }}>Cours</Link>
          {" › "}
          <span>Cours {cours.num}</span>
        </div>

        <h1 style={{ fontSize: "clamp(26px, 4vw, 36px)", fontWeight: 400, fontFamily: "Georgia, serif", color: "#1a1a1a", margin: "0 0 12px", lineHeight: 1.25 }}>
          {isExercices ? `Exercices — ${cours.title}` : cours.title}
        </h1>
        <p style={{ fontSize: 16, color: "#4a4a4a", lineHeight: 1.7, fontFamily: "system-ui, sans-serif", margin: "0 0 20px" }}>
          {cours.desc}
        </p>

        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" as const, marginBottom: 36 }}>
          {cours.tags.map(tag => (
            <span key={tag} style={{ fontSize: 11, color: "#4a4a4a", background: "#f0ece4", padding: "3px 10px", borderRadius: 6, fontFamily: "system-ui, sans-serif" }}>
              {tag}
            </span>
          ))}
        </div>

        <div style={{ border: "1px solid #F6AD55", background: "#FAEEDA", borderRadius: 14, padding: "32px 28px", textAlign: "center" as const }}>
          <div aria-hidden="true" style={{ fontSize: 32, marginBottom: 12 }}>🔒</div>
          <h2 style={{ fontSize: 20, fontWeight: 500, fontFamily: "Georgia, serif", color: "#1a1a1a", margin: "0 0 10px" }}>
            {isExercices
              ? "Ces exercices font partie de l'abonnement"
              : "Ce cours fait partie de l'abonnement"}
          </h2>
          <p style={{ fontSize: 14, color: "#5c3d00", lineHeight: 1.7, fontFamily: "system-ui, sans-serif", margin: "0 0 24px" }}>
            Les cours 1 à {FREE_COUNT} sont en accès libre. Débloquez les {COURS_COUNT} cours,
            les exercices SATB de tous niveaux et le suivi de progression.
          </p>
          <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" as const }}>
            <Link
              href={`/${locale}/upgrade`}
              style={{ display: "inline-block", padding: "13px 28px", borderRadius: 6, background: "#1a1a1a", color: "#fff", textDecoration: "none", fontSize: 14, fontWeight: 500, fontFamily: "system-ui, sans-serif" }}
            >
              Voir les abonnements
            </Link>
            <Link
              href={signedIn ? `/${locale}/cours/1` : `/${locale}/sign-up`}
              style={{ display: "inline-block", padding: "13px 28px", borderRadius: 6, background: "transparent", color: "#1a1a1a", textDecoration: "none", fontSize: 14, fontFamily: "system-ui, sans-serif", border: "1px solid #a8792c" }}
            >
              {signedIn ? "Commencer par le cours 1" : "Essayer gratuitement"}
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
