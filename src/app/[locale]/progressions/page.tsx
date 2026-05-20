import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { getUserPlan } from "@/lib/progression";
import BibliothequeProgressions from "@/components/BibliothequeProgressions";

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function ProgressionsPage({ params }: Props) {
  const { locale } = await params;
  const { userId } = await auth();
  if (!userId) redirect(`/${locale}/sign-in`);

  const plan = await getUserPlan(userId);

  if (plan === "free") {
    return (
      <main style={{ minHeight: "100vh", background: "#f4f1ec", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem 1rem" }}>
        <div style={{ maxWidth: 480, textAlign: "center", fontFamily: "system-ui, sans-serif" }}>
          <div style={{ fontSize: 40, marginBottom: 16 }}>♩</div>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", color: "#BA7517", textTransform: "uppercase", marginBottom: 8 }}>
            Fonctionnalité Pro
          </div>
          <h1 style={{ fontSize: 22, fontWeight: 600, color: "#1a1a1a", margin: "0 0 12px", fontFamily: "Georgia, serif" }}>
            Bibliothèque de progressions
          </h1>
          <p style={{ fontSize: 14, color: "#666", lineHeight: 1.65, margin: "0 0 28px" }}>
            Plus de 200 progressions classiques, jazz, modales et contemporaines. Écoutez, analysez et jouez sur piano chaque progression. Disponible uniquement pour les abonnés Pro.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, alignItems: "center" }}>
            <Link href={`/${locale}/upgrade`} style={{
              display: "inline-block",
              padding: "12px 32px",
              borderRadius: 10,
              background: "#5C3D6E",
              color: "#fff",
              fontSize: 14,
              fontWeight: 700,
              textDecoration: "none",
            }}>
              Passer Pro →
            </Link>
            <Link href={`/${locale}/dashboard`} style={{ fontSize: 12, color: "#888", textDecoration: "none" }}>
              Retour au tableau de bord
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return <BibliothequeProgressions />;
}
