/**
 * src/app/[locale]/dashboard/page.tsx
 * Harmonia — Dashboard utilisateur
 * Affiche la progression par cours + accès rapide aux exercices
 */

import { auth, currentUser } from "@clerk/nextjs/server";
import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { getAllProgress, getCoursStats, getUserPlan, canAccessCours } from "@/lib/progression";
import { ALL_EXERCISES } from "@/exercises/all-exercises";

const COURS_META = [
  { id: 1, title: "Gamme, degrés et intervalles" },
  { id: 2, title: "Les accords" },
  { id: 3, title: "Fonctions tonales et conduites de voix" },
  { id: 4, title: "Cadences et progressions" },
  { id: 5, title: "Emprunts et suites classiques" },
  { id: 6, title: "Construire une harmonisation" },
  { id: 7, title: "La tonicisation" },
  { id: 8, title: "Modulation par accord pivot" },
  { id: 9, title: "Modulations avancées et pédales" },
];

const PLAN_LABEL: Record<string, string> = {
  free:   "Gratuit",
  pro:    "Pro",
  annual: "Annuel",
};

const PLAN_COLOR: Record<string, string> = {
  free:   "#888",
  pro:    "#185FA5",
  annual: "#BA7517",
};

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function DashboardPage({ params }: Props) {
  const { locale } = await params;
  const { userId } = await auth();

  if (!userId) redirect(`/${locale}/sign-in`);

  const user = await currentUser();
  const plan = await getUserPlan(userId);

  // Calculer les stats par cours
  const coursStats = await Promise.all(
    COURS_META.map(async cours => {
      const totalInCours = ALL_EXERCISES.filter(e => e.cours === cours.id).length;
      const stats = await getCoursStats(userId, cours.id, totalInCours);
      const accessible = canAccessCours(cours.id, plan);
      return { ...cours, ...stats, accessible, totalInCours };
    })
  );

  // Exercices récents
  const allProgress = await getAllProgress(userId);
  const recentExercises = allProgress.slice(0, 5);

  // Stats globales
  const totalCompleted = coursStats.reduce((s, c) => s + c.completedExercises, 0);
  const totalExercises = ALL_EXERCISES.length;
  const globalPct = Math.round((totalCompleted / totalExercises) * 100);

  return (
    <main style={{ minHeight: "100vh", background: "#f4f1ec", padding: "2.5rem 1rem" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ marginBottom: "2rem", display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap" as const, gap: 12 }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", color: "#BA7517", textTransform: "uppercase" as const, marginBottom: 4 }}>
              Tableau de bord
            </div>
            <h1 style={{ fontSize: 26, fontWeight: 500, color: "#1a1a1a", margin: "0 0 4px" }}>
              Bonjour, {user?.firstName ?? "Musicien"} 👋
            </h1>
            <p style={{ fontSize: 13, color: "#888", margin: 0 }}>
              {user?.emailAddresses[0]?.emailAddress}
            </p>
          </div>

          {/* Badge plan + lien profil */}
          <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" as const }}>
            <div style={{
              padding: "6px 16px",
              borderRadius: 20,
              background: plan === "free" ? "#f0ece6" : plan === "pro" ? "#E6F1FB" : "#FAEEDA",
              fontSize: 12,
              fontWeight: 600,
              color: PLAN_COLOR[plan],
              border: `0.5px solid ${PLAN_COLOR[plan]}40`,
            }}>
              Plan {PLAN_LABEL[plan]}
              {plan === "free" && (
                <Link href={`/${locale}/upgrade`} style={{ marginLeft: 8, color: "#185FA5", textDecoration: "none" }}>
                  Passer Pro →
                </Link>
              )}
            </div>
            <Link href={`/${locale}/profil`} style={{
              fontSize: 12,
              color: "#888",
              textDecoration: "none",
              padding: "6px 14px",
              borderRadius: 20,
              background: "#fff",
              border: "0.5px solid #e0dbd3",
            }}>
              Mon profil
            </Link>
          </div>
        </div>

        {/* Stats globales */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12, marginBottom: "2rem" }}>
          {[
            { label: "Exercices complétés", value: totalCompleted, suffix: `/ ${totalExercises}` },
            { label: "Progression globale", value: `${globalPct}%`, suffix: "" },
            { label: "Cours commencés", value: coursStats.filter(c => c.completedExercises > 0).length, suffix: "/ 9" },
          ].map(stat => (
            <div key={stat.label} style={{ background: "#fff", border: "0.5px solid #e8e3db", borderRadius: 10, padding: "16px 20px" }}>
              <div style={{ fontSize: 28, fontWeight: 500, color: "#1a1a1a", lineHeight: 1 }}>
                {stat.value}
                {stat.suffix && <span style={{ fontSize: 14, color: "#bbb", fontWeight: 400 }}> {stat.suffix}</span>}
              </div>
              <div style={{ fontSize: 12, color: "#888", marginTop: 4 }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Grille des cours */}
        <div style={{ marginBottom: "2rem" }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: "#1a1a1a", marginBottom: 12 }}>
            Progression par cours
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 10 }}>
            {coursStats.map(cours => (
              <div key={cours.id} style={{
                background: "#fff",
                border: "0.5px solid #e8e3db",
                borderRadius: 10,
                padding: "16px",
                opacity: cours.accessible ? 1 : 0.6,
                position: "relative" as const,
              }}>
                {/* Cadenas si non accessible */}
                {!cours.accessible && (
                  <div style={{
                    position: "absolute" as const,
                    top: 12, right: 12,
                    fontSize: 14,
                  }}>🔒</div>
                )}

                <div style={{ fontSize: 10, color: "#bbb", fontWeight: 600, marginBottom: 4 }}>
                  COURS {cours.id}
                </div>
                <div style={{ fontSize: 14, fontWeight: 500, color: "#1a1a1a", marginBottom: 10, lineHeight: 1.3 }}>
                  {cours.title}
                </div>

                {/* Barre de progression */}
                <div style={{ height: 4, background: "#f0ece6", borderRadius: 4, marginBottom: 8, overflow: "hidden" }}>
                  <div style={{
                    height: "100%",
                    width: `${cours.progressPct}%`,
                    background: cours.progressPct === 100 ? "#0F6E56" : "#185FA5",
                    borderRadius: 4,
                    transition: "width .3s",
                  }} />
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 11, color: "#aaa" }}>
                  <span>{cours.completedExercises} / {cours.totalInCours} exercices</span>
                  <span style={{ fontWeight: 600, color: cours.progressPct > 0 ? "#185FA5" : "#bbb" }}>
                    {cours.progressPct}%
                  </span>
                </div>

                {cours.accessible ? (
                  <Link href={`/${locale}/cours/${cours.id}/exercices`} style={{
                    display: "block",
                    marginTop: 10,
                    padding: "6px 12px",
                    borderRadius: 6,
                    background: "#f4f1ec",
                    color: "#555",
                    fontSize: 12,
                    textDecoration: "none",
                    textAlign: "center" as const,
                  }}>
                    {cours.completedExercises === 0 ? "Commencer" : cours.progressPct === 100 ? "Revoir" : "Continuer"} →
                  </Link>
                ) : (
                  <Link href={`/${locale}`} style={{
                    display: "block",
                    marginTop: 10,
                    padding: "6px 12px",
                    borderRadius: 6,
                    background: "#FAEEDA",
                    color: "#BA7517",
                    fontSize: 12,
                    textDecoration: "none",
                    textAlign: "center" as const,
                  }}>
                    Passer Pro pour accéder →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Activité récente */}
        {recentExercises.length > 0 && (
          <div>
            <div style={{ fontSize: 13, fontWeight: 600, color: "#1a1a1a", marginBottom: 12 }}>
              Activité récente
            </div>
            <div style={{ background: "#fff", border: "0.5px solid #e8e3db", borderRadius: 10, overflow: "hidden" }}>
              {recentExercises.map((p, i) => (
                <div key={p.exercise_id} style={{
                  padding: "12px 16px",
                  borderBottom: i < recentExercises.length - 1 ? "0.5px solid #f0ece6" : "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 12,
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{
                      fontSize: 10,
                      fontWeight: 600,
                      color: "#185FA5",
                      background: "#E6F1FB",
                      padding: "2px 8px",
                      borderRadius: 6,
                      flexShrink: 0,
                    }}>
                      Cours {p.cours_id}
                    </span>
                    <span style={{ fontSize: 13, color: "#555" }}>
                      {p.exercise_id}
                    </span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
                    <span style={{
                      fontSize: 12,
                      fontWeight: 600,
                      color: p.score >= 80 ? "#0F6E56" : p.score >= 50 ? "#BA7517" : "#E53E3E",
                    }}>
                      {p.score}%
                    </span>
                    {p.completed && (
                      <span style={{ fontSize: 12, color: "#0F6E56" }}>✓</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </main>
  );
}
