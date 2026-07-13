import { notFound } from "next/navigation";
import Link from "next/link";
import nextDynamic from "next/dynamic";
import type { Metadata } from "next";
import { auth } from "@clerk/nextjs/server";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { getUserPlan } from "@/lib/progression";
import { COURS, getCours, isFreeCours } from "@/lib/catalogue";

/**
 * Rendu à la demande : la page lit la session pour décider si elle sert le cours
 * ou l'aperçu payant. Elle ne peut donc pas être prérendue statiquement — le HTML
 * diffère selon le plan. Le rendu serveur reste parfaitement indexable.
 */
export const dynamic = "force-dynamic";

const SATB_COURS = new Set([3, 4, 5, 6]);
const NE_COURS = new Set([6]);

/**
 * Chargement paresseux : les 41 cours étaient importés statiquement, ce qui
 * réunissait tout leur contenu dans un seul chunk de ~2 Mo gzippé — ouvrir le
 * cours 1 téléchargeait le JavaScript des 40 autres. Chaque cours est désormais
 * son propre chunk.
 */
const COURS_COMPONENTS: Record<number, React.ComponentType> = {
  1: nextDynamic(() => import("@/components/Cours1")),
  2: nextDynamic(() => import("@/components/Cours2")),
  3: nextDynamic(() => import("@/components/Cours3")),
  4: nextDynamic(() => import("@/components/Cours4")),
  5: nextDynamic(() => import("@/components/Cours5")),
  6: nextDynamic(() => import("@/components/Cours6")),
  7: nextDynamic(() => import("@/components/Cours7")),
  8: nextDynamic(() => import("@/components/Cours8")),
  9: nextDynamic(() => import("@/components/Cours9")),
  10: nextDynamic(() => import("@/components/Cours10")),
  11: nextDynamic(() => import("@/components/Cours11")),
  12: nextDynamic(() => import("@/components/Cours12")),
  13: nextDynamic(() => import("@/components/Cours13")),
  14: nextDynamic(() => import("@/components/Cours14")),
  15: nextDynamic(() => import("@/components/Cours15")),
  16: nextDynamic(() => import("@/components/Cours16")),
  17: nextDynamic(() => import("@/components/Cours17")),
  18: nextDynamic(() => import("@/components/Cours18")),
  19: nextDynamic(() => import("@/components/Cours19")),
  20: nextDynamic(() => import("@/components/Cours20")),
  21: nextDynamic(() => import("@/components/Cours21")),
  22: nextDynamic(() => import("@/components/Cours22")),
  23: nextDynamic(() => import("@/components/Cours23")),
  24: nextDynamic(() => import("@/components/Cours24")),
  25: nextDynamic(() => import("@/components/Cours25")),
  26: nextDynamic(() => import("@/components/Cours26")),
  27: nextDynamic(() => import("@/components/Cours27")),
  28: nextDynamic(() => import("@/components/Cours28")),
  29: nextDynamic(() => import("@/components/Cours29")),
  30: nextDynamic(() => import("@/components/Cours30")),
  31: nextDynamic(() => import("@/components/Cours31")),
  32: nextDynamic(() => import("@/components/Cours32")),
  33: nextDynamic(() => import("@/components/Cours33")),
  34: nextDynamic(() => import("@/components/Cours34")),
  35: nextDynamic(() => import("@/components/Cours35")),
  36: nextDynamic(() => import("@/components/Cours36")),
  37: nextDynamic(() => import("@/components/Cours37")),
  38: nextDynamic(() => import("@/components/Cours38")),
  39: nextDynamic(() => import("@/components/Cours39")),
  40: nextDynamic(() => import("@/components/Cours40")),
  41: nextDynamic(() => import("@/components/Cours41")),
};

export async function generateMetadata({ params }: { params: Promise<{ id: string; locale: string }> }): Promise<Metadata> {
  const { id, locale } = await params;
  const cours = getCours(parseInt(id));
  if (!cours) return {};

  const title = `${cours.title} — Cours ${cours.num} | Harmonia`;
  const url = `https://www.getharmonia.app/${locale}/cours/${cours.num}`;

  return {
    title,
    description: cours.desc,
    alternates: { canonical: url },
    openGraph: { title, description: cours.desc, url, type: "article" },
    twitter: { card: "summary_large_image", title, description: cours.desc },
  };
}

/** Aperçu indexable + invitation à s'abonner, servi à la place d'un cours verrouillé. */
function Paywall({ locale, cours, signedIn }: { locale: string; cours: { num: number; title: string; desc: string; tags: string[] }; signedIn: boolean }) {
  return (
    <main style={{ minHeight: "100vh", background: "#faf8f4", padding: "3rem 1rem" }}>
      <article style={{ maxWidth: 680, margin: "0 auto" }}>
        <div style={{ fontSize: 12, color: "#6b6b6b", fontFamily: "system-ui, sans-serif", marginBottom: 16 }}>
          <Link href={`/${locale}/cours`} style={{ color: "#6b6b6b", textDecoration: "none" }}>Cours</Link>
          {" › "}
          <span>Cours {cours.num}</span>
        </div>

        <h1 style={{ fontSize: "clamp(26px, 4vw, 36px)", fontWeight: 400, fontFamily: "Georgia, serif", color: "#1a1a1a", margin: "0 0 12px", lineHeight: 1.25 }}>
          {cours.title}
        </h1>
        <p style={{ fontSize: 16, color: "#555", lineHeight: 1.7, fontFamily: "system-ui, sans-serif", margin: "0 0 20px" }}>
          {cours.desc}
        </p>

        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 36 }}>
          {cours.tags.map(tag => (
            <span key={tag} style={{ fontSize: 11, color: "#555", background: "#f0ece4", padding: "3px 10px", borderRadius: 6, fontFamily: "system-ui, sans-serif" }}>
              {tag}
            </span>
          ))}
        </div>

        <div style={{ border: "1px solid #F6AD55", background: "#FAEEDA", borderRadius: 14, padding: "32px 28px", textAlign: "center" }}>
          <div style={{ fontSize: 32, marginBottom: 12 }}>🔒</div>
          <h2 style={{ fontSize: 20, fontWeight: 500, fontFamily: "Georgia, serif", color: "#1a1a1a", margin: "0 0 10px" }}>
            Ce cours fait partie de l&apos;abonnement
          </h2>
          <p style={{ fontSize: 14, color: "#5c3d00", lineHeight: 1.7, fontFamily: "system-ui, sans-serif", margin: "0 0 24px" }}>
            Les cours 1 à 3 sont en accès libre. Débloquez les {COURS.length} cours,
            les exercices SATB de tous niveaux et le suivi de progression.
          </p>
          <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href={`/${locale}/upgrade`}
              style={{ display: "inline-block", padding: "13px 28px", borderRadius: 6, background: "#1a1a1a", color: "#fff", textDecoration: "none", fontSize: 14, fontWeight: 500, fontFamily: "system-ui, sans-serif" }}
            >
              Voir les abonnements
            </Link>
            <Link
              href={signedIn ? `/${locale}/cours/1` : `/${locale}/sign-up`}
              style={{ display: "inline-block", padding: "13px 28px", borderRadius: 6, background: "transparent", color: "#1a1a1a", textDecoration: "none", fontSize: 14, fontFamily: "system-ui, sans-serif", border: "1px solid #c8992c" }}
            >
              {signedIn ? "Commencer par le cours 1" : "Essayer gratuitement"}
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}

export default async function CoursPage({ params }: { params: Promise<{ id: string; locale: string }> }) {
  const { id, locale } = await params;
  const num = parseInt(id);
  const cours = getCours(num);
  const C = COURS_COMPONENTS[num];
  if (!cours || !C) return notFound();

  const { userId } = await auth();
  const plan = userId ? await getUserPlan(userId) : "free";

  if (plan === "free" && !isFreeCours(num)) {
    return <Paywall locale={locale} cours={cours} signedIn={Boolean(userId)} />;
  }

  // Le layout ne fournit que les namespaces partagés : on ajoute ici celui du
  // seul cours affiché, au lieu d'embarquer les 41 sur chaque page.
  // Le provider imbriqué remplace le contexte parent : il doit donc reprendre
  // les namespaces partagés (dont `common`, utilisé par useCoursI18n).
  const allMessages = (await getMessages()) as Record<string, unknown>;
  const coursKey = `cours${num}`;
  const coursMessages = Object.fromEntries(
    Object.entries(allMessages).filter(([key]) => !/^cours\d+$/.test(key) || key === coursKey)
  );

  return (
    <main style={{ minHeight: "100vh", padding: "2rem 1rem" }}>
      <NextIntlClientProvider messages={coursMessages}>
        <C />
      </NextIntlClientProvider>
      {SATB_COURS.has(num) && (
        <div style={{ maxWidth: 800, margin: "2rem auto 0", padding: "0 1rem" }}>
          <Link href={`/${locale}/generateur-satb`} style={{ textDecoration: "none" }}>
            <div style={{
              display: "flex", justifyContent: "space-between", alignItems: "center",
              background: "linear-gradient(135deg, #E6F1FB 0%, #D8EAFA 100%)",
              border: "0.5px solid #A8C7EE", borderRadius: 12, padding: "16px 20px",
            }}>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, color: "#185FA5", marginBottom: 4 }}>
                  ⊞ Pratiquer avec le Générateur SATB
                </div>
                <div style={{ fontSize: 12, color: "#2E6BAE" }}>
                  Créez vos propres exercices de conduite des voix dans les 24 tonalités.
                </div>
              </div>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#185FA5", whiteSpace: "nowrap" as const }}>
                Accéder →
              </div>
            </div>
          </Link>
        </div>
      )}
      {NE_COURS.has(num) && (
        <div style={{ maxWidth: 800, margin: "1rem auto 0", padding: "0 1rem" }}>
          <Link href={`/${locale}/notes-etrangeres`} style={{ textDecoration: "none" }}>
            <div style={{
              display: "flex", justifyContent: "space-between", alignItems: "center",
              background: "linear-gradient(135deg, #FFF4E8 0%, #FFE8CC 100%)",
              border: "0.5px solid #F5C77E", borderRadius: 12, padding: "16px 20px",
            }}>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, color: "#BA7517", marginBottom: 4 }}>
                  ♪ S&apos;entraîner sur les notes étrangères
                </div>
                <div style={{ fontSize: 12, color: "#8a5a10" }}>
                  20 exercices interactifs — coloriez et identifiez notes de passage, broderies, retards et appoggiatures.
                </div>
              </div>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#BA7517", whiteSpace: "nowrap" as const }}>
                Accéder →
              </div>
            </div>
          </Link>
        </div>
      )}
    </main>
  );
}
