/**
 * src/app/[locale]/dashboard/page.tsx
 * Harmonia — Dashboard utilisateur
 */

import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { getAllProgress, getCoursStats, getUserPlan, canAccessCours } from "@/lib/progression";
import { ALL_EXERCISES } from "@/exercises/all-exercises";
import { supabaseAdmin } from "@/lib/supabase";
import MaClasseSection from "@/components/MaClasseSection";
import { getTranslations } from "next-intl/server";

const COURS_META = [
  { id: 1,  title: "La gamme, les degrés et les intervalles" },
  { id: 2,  title: "Les accords" },
  { id: 3,  title: "Fonctions tonales et conduites de voix" },
  { id: 4,  title: "Cadences et progressions" },
  { id: 5,  title: "Emprunts et suites harmoniques classiques" },
  { id: 6,  title: "Construire une harmonisation" },
  { id: 7,  title: "La tonicisation" },
  { id: 8,  title: "Modulation par accord pivot" },
  { id: 9,  title: "Modulations avancées et pédales harmoniques" },
  { id: 10, title: "Les modes de la gamme majeure" },
  { id: 11, title: "Les extensions d'accords" },
  { id: 12, title: "La substitution tritonique" },
  { id: 13, title: "Le contrepoint à 2 voix" },
  { id: 14, title: "L'harmonisation modale" },
  { id: 15, title: "Les progressions jazz avancées" },
  { id: 16, title: "La réharmonisation" },
  { id: 17, title: "La phrase musicale et la forme" },
  { id: 18, title: "Le développement motivique" },
  { id: 19, title: "Introduction à l'orchestration" },
  { id: 20, title: "Analyse des grands compositeurs classiques" },
  { id: 21, title: "Analyse des compositeurs modernes et contemporains" },
  { id: 22, title: "La réharmonisation avancée" },
  { id: 23, title: "Composer dans le style des maîtres" },
];

const COURS_NIVEAU_1 = COURS_META.filter(c => c.id <= 9);
const COURS_NIVEAU_2 = COURS_META.filter(c => c.id >= 10);

const PLAN_LABEL_KEY: Record<string, string> = {
  free:   "planFree",
  pro:    "planPro",
  annual: "planAnnual",
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

  const t = await getTranslations({ locale, namespace: "dashboard" });
  const tHub = await getTranslations({ locale, namespace: "coursHub" });

  const user = await currentUser();
  const plan = await getUserPlan(userId);
  const isPro = plan === "pro" || plan === "annual";

  const coursStats = await Promise.all(
    COURS_META.map(async cours => {
      const totalInCours = ALL_EXERCISES.filter(e => e.cours === cours.id).length;
      const stats = await getCoursStats(userId, cours.id, totalInCours);
      const accessible = canAccessCours(cours.id, plan);
      const title = tHub(`c${cours.id}` as Parameters<typeof tHub>[0]);
      return { ...cours, title, ...stats, accessible, totalInCours };
    })
  );

  const allProgress = await getAllProgress(userId);
  const recentExercises = allProgress.slice(0, 5);

  // Fetch student's class membership (conservatoire feature)
  const { data: classeMembership } = await supabaseAdmin
    .from("classe_eleves")
    .select("classe_id, classes(id, nom, prof_id, code_acces)")
    .eq("eleve_id", userId)
    .limit(1)
    .maybeSingle();

  // Fetch devoirs for the class if member
  let classeDevoirs: Array<{ id: string; titre: string; dateLimite: string | null; type: string; exerciseUrl: string | null }> = [];
  if (classeMembership?.classe_id) {
    const { data: devoirsData } = await supabaseAdmin
      .from("devoirs")
      .select("id, titre, date_limite, type, reference_id")
      .eq("classe_id", classeMembership.classe_id)
      .order("created_at", { ascending: false })
      .limit(5);
    classeDevoirs = (devoirsData ?? []).map((d: { id: string; titre: string; date_limite: string | null; type: string; reference_id: string | null }) => {
      let exerciseUrl: string | null = null;
      if (d.type === "exercice" && d.reference_id) {
        const ex = ALL_EXERCISES.find(e => e.id === d.reference_id);
        if (ex) exerciseUrl = `/${locale}/cours/${ex.cours}/exercices/${ex.id}`;
      } else if (d.type === "cours" && d.reference_id) {
        exerciseUrl = `/${locale}/cours/${d.reference_id}`;
      }
      return { id: d.id, titre: d.titre, dateLimite: d.date_limite, type: d.type, exerciseUrl };
    });
  }

  const totalCompleted = coursStats.reduce((s, c) => s + c.completedExercises, 0);
  const totalExercises = ALL_EXERCISES.length;
  const globalPct = totalExercises > 0 ? Math.round((totalCompleted / totalExercises) * 100) : 0;
  const coursStarted = coursStats.filter(c => c.completedExercises > 0).length;

  return (
    <main style={{ minHeight: "100vh", background: "#f4f1ec", padding: "2.5rem 1rem" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>

        {/* ── Header ─────────────────────────────────────────── */}
        <div style={{ marginBottom: "2rem", display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap" as const, gap: 12 }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", color: "#BA7517", textTransform: "uppercase" as const, marginBottom: 4 }}>
              {t("title")}
            </div>
            <h1 style={{ fontSize: 26, fontWeight: 500, color: "#1a1a1a", margin: "0 0 4px" }}>
              {t("greeting", { name: user?.firstName ?? "Musicien" })}
            </h1>
            <p style={{ fontSize: 13, color: "#888", margin: 0 }}>
              {user?.emailAddresses[0]?.emailAddress}
            </p>
          </div>

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
              {t(PLAN_LABEL_KEY[plan] as Parameters<typeof t>[0])}
              {plan === "free" && (
                <Link href={`/${locale}/upgrade`} style={{ marginLeft: 8, color: "#185FA5", textDecoration: "none" }}>
                  {t("upgradeCta")}
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
              {t("myProfile")}
            </Link>
          </div>
        </div>

        {/* ── Stats globales ──────────────────────────────────── */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12, marginBottom: "2rem" }}>
          {[
            { label: t("statsExercises"), value: totalCompleted, suffix: `/ ${totalExercises}` },
            { label: t("statsProgress"), value: `${globalPct}%`, suffix: "" },
            { label: t("statsCourses"), value: coursStarted, suffix: `/ ${COURS_META.length}` },
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

        {/* ── Ma classe (conservatoire) ───────────────────────── */}
        <MaClasseSection locale={locale} membership={classeMembership as any} devoirs={classeDevoirs} />

        {/* ── Outils d'entraînement ───────────────────────────── */}
        <div style={{ marginBottom: "2rem" }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: "#1a1a1a", marginBottom: 12 }}>
            {t("toolsSection")}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 10 }}>

            {/* Dictée harmonique */}
            <Link href={`/${locale}/dictee`} style={{ textDecoration: "none" }}>
              <div style={{
                background: "#fff",
                border: "0.5px solid #e8e3db",
                borderRadius: 10,
                padding: "18px 20px",
                cursor: "pointer",
                transition: "border-color .15s",
                height: "100%",
                boxSizing: "border-box" as const,
              }}>
                <div style={{ fontSize: 22, marginBottom: 8 }}>🎧</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#1a1a1a", marginBottom: 6 }}>
                  {t("dicteeTitle")}
                </div>
                <div style={{ fontSize: 12, color: "#888", lineHeight: 1.5, marginBottom: 12 }}>
                  {t("dicteeDesc")}
                </div>
                <div style={{ fontSize: 12, color: "#185FA5", fontWeight: 600 }}>
                  {t("dicteeLink")}
                </div>
              </div>
            </Link>

            {/* Comparateur de styles */}
            <Link href={`/${locale}/comparateur`} style={{ textDecoration: "none" }}>
              <div style={{
                background: "#fff",
                border: "0.5px solid #e8e3db",
                borderRadius: 10,
                padding: "18px 20px",
                cursor: "pointer",
                height: "100%",
                boxSizing: "border-box" as const,
              }}>
                <div style={{ fontSize: 22, marginBottom: 8 }}>⟳</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#1a1a1a", marginBottom: 6 }}>
                  {t("comparateurTitle")}
                </div>
                <div style={{ fontSize: 12, color: "#888", lineHeight: 1.5, marginBottom: 12 }}>
                  {t("comparateurDesc")}
                </div>
                <div style={{ fontSize: 12, color: "#185FA5", fontWeight: 600 }}>
                  {t("comparateurLink")}
                </div>
              </div>
            </Link>

            {/* Éditeur mélodique */}
            <Link href={`/${locale}/editeur-melodique`} style={{ textDecoration: "none" }}>
              <div style={{
                background: "#fff",
                border: "0.5px solid #e8e3db",
                borderRadius: 10,
                padding: "18px 20px",
                cursor: "pointer",
                height: "100%",
                boxSizing: "border-box" as const,
              }}>
                <div style={{ fontSize: 22, marginBottom: 8 }}>♩</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#1a1a1a", marginBottom: 6 }}>
                  {t("editeurTitle")}
                </div>
                <div style={{ fontSize: 12, color: "#888", lineHeight: 1.5, marginBottom: 12 }}>
                  {t("editeurDesc")}
                </div>
                <div style={{ fontSize: 12, color: "#185FA5", fontWeight: 600 }}>
                  {t("editeurLink")}
                </div>
              </div>
            </Link>

            {/* Composition guidée */}
            <Link href={`/${locale}/composition`} style={{ textDecoration: "none" }}>
              <div style={{
                background: "linear-gradient(135deg, #F0EAFA 0%, #E8E0F5 100%)",
                border: "0.5px solid #C4B0E0",
                borderRadius: 10,
                padding: "18px 20px",
                cursor: "pointer",
                height: "100%",
                boxSizing: "border-box" as const,
              }}>
                <div style={{ fontSize: 22, marginBottom: 8 }}>✎</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#3D1F7A", marginBottom: 6 }}>
                  {t("compositionTitle")}
                </div>
                <div style={{ fontSize: 12, color: "#6B4FA0", lineHeight: 1.5, marginBottom: 12 }}>
                  {t("compositionDesc")}
                </div>
                <div style={{ fontSize: 12, color: "#6B3FA0", fontWeight: 600 }}>
                  {t("compositionLink")}
                </div>
              </div>
            </Link>

            {/* Générateur SATB */}
            <Link href={`/${locale}/generateur-satb`} style={{ textDecoration: "none" }}>
              <div style={{
                background: "linear-gradient(135deg, #E6F1FB 0%, #D8EAFA 100%)",
                border: "0.5px solid #A8C7EE",
                borderRadius: 10,
                padding: "18px 20px",
                cursor: "pointer",
                height: "100%",
                boxSizing: "border-box" as const,
              }}>
                <div style={{ fontSize: 22, marginBottom: 8 }}>⊞</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#185FA5", marginBottom: 6 }}>
                  {t("satbTitle")}
                </div>
                <div style={{ fontSize: 12, color: "#3A7CC7", lineHeight: 1.5, marginBottom: 12 }}>
                  {t("satbDesc")}
                </div>
                <div style={{ fontSize: 12, color: "#185FA5", fontWeight: 600 }}>
                  {t("satbLink")}
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* ── Vos Accès Pro ───────────────────────────────────── */}
        <div style={{ marginBottom: "2rem" }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: "#1a1a1a", marginBottom: 12 }}>
            {t("proSection")}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 10 }}>

            {/* Assistant IA */}
            {isPro ? (
              <Link href={`/${locale}/assistant`} style={{ textDecoration: "none" }}>
                <div style={{
                  background: "linear-gradient(135deg, #BA7517 0%, #7a4c0e 100%)",
                  border: "0.5px solid #E9C97E60",
                  borderRadius: 10,
                  padding: "18px 20px",
                  cursor: "pointer",
                  height: "100%",
                  boxSizing: "border-box" as const,
                }}>
                  <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", color: "#E9C97E", textTransform: "uppercase" as const, marginBottom: 6 }}>Pro</div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "#fff", marginBottom: 6 }}>{t("assistantTitle")}</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.75)", lineHeight: 1.5, marginBottom: 12 }}>
                    {t("assistantDesc")}
                  </div>
                  <div style={{ fontSize: 12, color: "#E9C97E", fontWeight: 700 }}>{t("assistantLink")}</div>
                </div>
              </Link>
            ) : (
              <div style={{
                background: "#fff",
                border: "0.5px solid #e8e3db",
                borderRadius: 10,
                padding: "18px 20px",
                opacity: 0.65,
                position: "relative" as const,
              }}>
                <div style={{ position: "absolute" as const, top: 12, right: 12, fontSize: 14 }}>🔒</div>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", color: "#BA7517", textTransform: "uppercase" as const, marginBottom: 6 }}>Pro</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#1a1a1a", marginBottom: 6 }}>{t("assistantTitle")}</div>
                <div style={{ fontSize: 12, color: "#888", lineHeight: 1.5, marginBottom: 12 }}>
                  {t("assistantDesc")}
                </div>
                <Link href={`/${locale}/upgrade`} style={{ fontSize: 12, color: "#BA7517", fontWeight: 600, textDecoration: "none" }}>
                  {t("upgradeCta")}
                </Link>
              </div>
            )}

            {/* Bibliothèque de progressions */}
            {isPro ? (
              <Link href={`/${locale}/progressions`} style={{ textDecoration: "none" }}>
                <div style={{
                  background: "linear-gradient(135deg, #185FA5 0%, #0d3d6b 100%)",
                  border: "0.5px solid #4a90d960",
                  borderRadius: 10,
                  padding: "18px 20px",
                  cursor: "pointer",
                  height: "100%",
                  boxSizing: "border-box" as const,
                }}>
                  <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", color: "#9fc8ef", textTransform: "uppercase" as const, marginBottom: 6 }}>Pro</div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "#fff", marginBottom: 6 }}>{t("bibliothequeTitle")}</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.75)", lineHeight: 1.5, marginBottom: 12 }}>
                    {t("bibliothequeDesc")}
                  </div>
                  <div style={{ fontSize: 12, color: "#9fc8ef", fontWeight: 700 }}>{t("bibliothequeLink")}</div>
                </div>
              </Link>
            ) : (
              <div style={{
                background: "#fff",
                border: "0.5px solid #e8e3db",
                borderRadius: 10,
                padding: "18px 20px",
                opacity: 0.65,
                position: "relative" as const,
              }}>
                <div style={{ position: "absolute" as const, top: 12, right: 12, fontSize: 14 }}>🔒</div>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", color: "#185FA5", textTransform: "uppercase" as const, marginBottom: 6 }}>Pro</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#1a1a1a", marginBottom: 6 }}>{t("bibliothequeTitle")}</div>
                <div style={{ fontSize: 12, color: "#888", lineHeight: 1.5, marginBottom: 12 }}>
                  {t("bibliothequeDesc")}
                </div>
                <Link href={`/${locale}/upgrade`} style={{ fontSize: 12, color: "#BA7517", fontWeight: 600, textDecoration: "none" }}>
                  {t("upgradeCta")}
                </Link>
              </div>
            )}

            {/* Analyse de partition */}
            {isPro ? (
              <Link href={`/${locale}/analyse-partition`} style={{ textDecoration: "none" }}>
                <div style={{
                  background: "linear-gradient(135deg, #0F6E56 0%, #084d3c 100%)",
                  border: "0.5px solid #2a9a7c60",
                  borderRadius: 10,
                  padding: "18px 20px",
                  cursor: "pointer",
                  height: "100%",
                  boxSizing: "border-box" as const,
                }}>
                  <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", color: "#6fd4b5", textTransform: "uppercase" as const, marginBottom: 6 }}>Pro</div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "#fff", marginBottom: 6 }}>{t("analyseTitle")}</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.75)", lineHeight: 1.5, marginBottom: 12 }}>
                    {t("analyseDesc")}
                  </div>
                  <div style={{ fontSize: 12, color: "#6fd4b5", fontWeight: 700 }}>{t("analyseLink")}</div>
                </div>
              </Link>
            ) : (
              <div style={{
                background: "#fff",
                border: "0.5px solid #e8e3db",
                borderRadius: 10,
                padding: "18px 20px",
                opacity: 0.65,
                position: "relative" as const,
              }}>
                <div style={{ position: "absolute" as const, top: 12, right: 12, fontSize: 14 }}>🔒</div>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", color: "#0F6E56", textTransform: "uppercase" as const, marginBottom: 6 }}>Pro</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#1a1a1a", marginBottom: 6 }}>{t("analyseTitle")}</div>
                <div style={{ fontSize: 12, color: "#888", lineHeight: 1.5, marginBottom: 12 }}>
                  {t("analyseDesc")}
                </div>
                <Link href={`/${locale}/upgrade`} style={{ fontSize: 12, color: "#BA7517", fontWeight: 600, textDecoration: "none" }}>
                  {t("upgradeCta")}
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* ── Cours Niveau 1 ──────────────────────────────────── */}
        <div style={{ marginBottom: "2rem" }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: "#1a1a1a", marginBottom: 12 }}>
            {t("level1Section")}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 10 }}>
            {coursStats.filter(c => c.id <= 9).map(cours => (
              <CoursCard key={cours.id} cours={cours} locale={locale} t={t} />
            ))}
          </div>
        </div>

        {/* ── Cours Niveau 2 ──────────────────────────────────── */}
        <div style={{ marginBottom: "2rem" }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: "#1a1a1a", marginBottom: 12 }}>
            {t("level2Section")}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 10 }}>
            {coursStats.filter(c => c.id >= 10).map(cours => (
              <CoursCard key={cours.id} cours={cours} locale={locale} t={t} />
            ))}
          </div>
        </div>

        {/* ── Activité récente ────────────────────────────────── */}
        {recentExercises.length > 0 && (
          <div>
            <div style={{ fontSize: 13, fontWeight: 600, color: "#1a1a1a", marginBottom: 12 }}>
              {t("recentActivity")}
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

// ── Cours card (shared between N1 and N2) ────────────────────────────────────

interface CoursCardData {
  id: number;
  title: string;
  completedExercises: number;
  totalInCours: number;
  progressPct: number;
  accessible: boolean;
}

type DashT = Awaited<ReturnType<typeof getTranslations<"dashboard">>>;

function CoursCard({ cours, locale, t }: { cours: CoursCardData; locale: string; t: DashT }) {
  const action = cours.completedExercises === 0 ? t("start") : cours.progressPct === 100 ? t("review") : t("continue");
  return (
    <div style={{
      background: "#fff",
      border: "0.5px solid #e8e3db",
      borderRadius: 10,
      padding: "16px",
      opacity: cours.accessible ? 1 : 0.6,
      position: "relative" as const,
    }}>
      {!cours.accessible && (
        <div style={{ position: "absolute" as const, top: 12, right: 12, fontSize: 14 }}>🔒</div>
      )}

      <div style={{ fontSize: 10, color: "#bbb", fontWeight: 600, marginBottom: 4 }}>
        {t("cours")} {cours.id}
      </div>
      <div style={{ fontSize: 14, fontWeight: 500, color: "#1a1a1a", marginBottom: 10, lineHeight: 1.3 }}>
        {cours.title}
      </div>

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
        <span>{cours.completedExercises} / {cours.totalInCours} {t("exercises")}</span>
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
          {action} →
        </Link>
      ) : (
        <Link href={`/${locale}/upgrade`} style={{
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
          {t("upgradeAccess")}
        </Link>
      )}
    </div>
  );
}
