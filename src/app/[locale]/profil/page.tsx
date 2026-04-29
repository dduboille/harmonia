/**
 * src/app/[locale]/profil/page.tsx
 * Harmonia — Page profil utilisateur
 */

import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { getUserPlan } from "@/lib/progression";
import { supabaseAdmin } from "@/lib/supabase";

const PLAN_LABEL: Record<string, string> = {
  free:   "Gratuit",
  pro:    "Pro mensuel",
  annual: "Pro annuel",
};

const PLAN_COLOR: Record<string, string> = {
  free:   "#888",
  pro:    "#185FA5",
  annual: "#BA7517",
};

const PLAN_BG: Record<string, string> = {
  free:   "#f0ece6",
  pro:    "#E6F1FB",
  annual: "#FAEEDA",
};

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function ProfilPage({ params }: Props) {
  const { locale } = await params;
  const { userId } = await auth();

  if (!userId) redirect(`/${locale}/sign-in`);

  const user = await currentUser();
  const plan = await getUserPlan(userId);

  // Récupérer les infos d'abonnement
  const { data: subscription } = await supabaseAdmin
    .from("user_subscriptions")
    .select("*")
    .eq("user_id", userId)
    .single();

  const memberSince = user?.createdAt
    ? new Date(user.createdAt).toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric" })
    : "—";

  const periodEnd = subscription?.current_period_end
    ? new Date(subscription.current_period_end).toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric" })
    : null;

  return (
    <main style={{ minHeight: "100vh", background: "#f4f1ec", padding: "2.5rem 1rem" }}>
      <div style={{ maxWidth: 640, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ marginBottom: "2rem" }}>
          <Link href={`/${locale}/dashboard`} style={{ fontSize: 12, color: "#888", textDecoration: "none" }}>
            ← Retour au dashboard
          </Link>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", color: "#BA7517", textTransform: "uppercase" as const, marginTop: 16, marginBottom: 4 }}>
            Profil
          </div>
          <h1 style={{ fontSize: 26, fontWeight: 500, color: "#1a1a1a", margin: 0 }}>
            Mon compte
          </h1>
        </div>

        {/* Infos personnelles */}
        <div style={{ background: "#fff", border: "0.5px solid #e8e3db", borderRadius: 10, padding: "24px", marginBottom: 16 }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: "#888", textTransform: "uppercase" as const, letterSpacing: "0.08em", marginBottom: 16 }}>
            Informations
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
            {user?.imageUrl ? (
              <img
                src={user.imageUrl}
                alt="Avatar"
                style={{ width: 56, height: 56, borderRadius: "50%", objectFit: "cover" as const }}
              />
            ) : (
              <div style={{
                width: 56, height: 56, borderRadius: "50%",
                background: "#1a1a1a", color: "#fff",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 22, fontWeight: 500,
              }}>
                {(user?.firstName?.[0] ?? user?.emailAddresses[0]?.emailAddress?.[0] ?? "H").toUpperCase()}
              </div>
            )}
            <div>
              <div style={{ fontSize: 18, fontWeight: 500, color: "#1a1a1a" }}>
                {user?.firstName && user?.lastName
                  ? `${user.firstName} ${user.lastName}`
                  : user?.firstName ?? "Musicien"}
              </div>
              <div style={{ fontSize: 13, color: "#888", marginTop: 2 }}>
                {user?.emailAddresses[0]?.emailAddress}
              </div>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <div style={{ background: "#f4f1ec", borderRadius: 8, padding: "12px 16px" }}>
              <div style={{ fontSize: 11, color: "#aaa", fontWeight: 600, textTransform: "uppercase" as const, letterSpacing: "0.06em", marginBottom: 4 }}>
                Membre depuis
              </div>
              <div style={{ fontSize: 14, color: "#1a1a1a", fontWeight: 500 }}>
                {memberSince}
              </div>
            </div>
            <div style={{ background: "#f4f1ec", borderRadius: 8, padding: "12px 16px" }}>
              <div style={{ fontSize: 11, color: "#aaa", fontWeight: 600, textTransform: "uppercase" as const, letterSpacing: "0.06em", marginBottom: 4 }}>
                Identifiant
              </div>
              <div style={{ fontSize: 11, color: "#888", fontFamily: "monospace", wordBreak: "break-all" as const }}>
                {userId.slice(0, 24)}...
              </div>
            </div>
          </div>
        </div>

        {/* Abonnement */}
        <div style={{ background: "#fff", border: "0.5px solid #e8e3db", borderRadius: 10, padding: "24px", marginBottom: 16 }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: "#888", textTransform: "uppercase" as const, letterSpacing: "0.08em", marginBottom: 16 }}>
            Abonnement
          </div>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{
                padding: "4px 12px",
                borderRadius: 20,
                background: PLAN_BG[plan],
                color: PLAN_COLOR[plan],
                fontSize: 13,
                fontWeight: 600,
              }}>
                {PLAN_LABEL[plan]}
              </div>
              {plan !== "free" && (
                <div style={{ fontSize: 13, color: "#0F6E56", display: "flex", alignItems: "center", gap: 4 }}>
                  <span>✓</span> Actif
                </div>
              )}
            </div>

            {plan === "free" ? (
              <Link href={`/${locale}/upgrade`} style={{
                padding: "8px 16px",
                borderRadius: 6,
                background: "#1a1a1a",
                color: "#fff",
                fontSize: 13,
                fontWeight: 500,
                textDecoration: "none",
              }}>
                Passer Pro →
              </Link>
            ) : null}
          </div>

          {plan !== "free" && (
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {periodEnd && (
                <div style={{ background: "#f4f1ec", borderRadius: 8, padding: "12px 16px" }}>
                  <div style={{ fontSize: 11, color: "#aaa", fontWeight: 600, textTransform: "uppercase" as const, letterSpacing: "0.06em", marginBottom: 4 }}>
                    Renouvellement
                  </div>
                  <div style={{ fontSize: 14, color: "#1a1a1a", fontWeight: 500 }}>
                    {periodEnd}
                  </div>
                </div>
              )}
              <div style={{ background: "#f4f1ec", borderRadius: 8, padding: "12px 16px" }}>
                <div style={{ fontSize: 11, color: "#aaa", fontWeight: 600, textTransform: "uppercase" as const, letterSpacing: "0.06em", marginBottom: 4 }}>
                  Accès
                </div>
                <div style={{ fontSize: 14, color: "#1a1a1a", fontWeight: 500 }}>
                  9 cours · 700+ exercices
                </div>
              </div>
            </div>
          )}

          {plan !== "free" && (
            <div style={{ marginTop: 16, padding: "12px 16px", background: "#f9f7f4", borderRadius: 8, fontSize: 12, color: "#aaa" }}>
              Pour annuler ou gérer ton abonnement, contacte-nous à{" "}
              <a href="mailto:bonjour@getharmonia.app" style={{ color: "#185FA5" }}>
                bonjour@getharmonia.app
              </a>
            </div>
          )}
        </div>

        {/* Actions */}
        <div style={{ background: "#fff", border: "0.5px solid #e8e3db", borderRadius: 10, padding: "24px" }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: "#888", textTransform: "uppercase" as const, letterSpacing: "0.08em", marginBottom: 16 }}>
            Actions
          </div>

          <div style={{ display: "flex", flexDirection: "column" as const, gap: 10 }}>
            <Link href={`/${locale}/dashboard`} style={{
              padding: "12px 16px",
              borderRadius: 8,
              background: "#f4f1ec",
              color: "#1a1a1a",
              fontSize: 14,
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}>
              <span>📊 Voir ma progression</span>
              <span style={{ color: "#bbb" }}>→</span>
            </Link>

            <Link href={`/${locale}/cours`} style={{
              padding: "12px 16px",
              borderRadius: 8,
              background: "#f4f1ec",
              color: "#1a1a1a",
              fontSize: 14,
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}>
              <span>📚 Continuer les cours</span>
              <span style={{ color: "#bbb" }}>→</span>
            </Link>

            <a href="/sign-out" style={{
              padding: "12px 16px",
              borderRadius: 8,
              background: "#FFF5F5",
              color: "#E53E3E",
              fontSize: 14,
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}>
              <span>🚪 Se déconnecter</span>
              <span style={{ color: "#FC8181" }}>→</span>
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}
