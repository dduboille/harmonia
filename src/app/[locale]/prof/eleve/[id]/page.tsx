import { auth } from "@clerk/nextjs/server";
import { clerkClient } from "@clerk/nextjs/server";
import { redirect, notFound } from "next/navigation";
import Link from "next/link";
import { supabaseAdmin } from "@/lib/supabase";
import { ALL_EXERCISES } from "@/exercises/all-exercises";
import EleveBilanButton from "@/components/EleveBilanButton";
import type { EleveBilanData } from "@/lib/pdf-bilan";

const COURS_NOMS: Record<number, string> = {
  1: "La gamme, les degrés et les intervalles",
  2: "Les accords",
  3: "Fonctions tonales et conduites de voix",
  4: "Cadences et progressions",
  5: "Emprunts et suites harmoniques classiques",
  6: "Construire une harmonisation",
  7: "La tonicisation",
  8: "Modulation par accord pivot",
  9: "Modulations avancées et pédales harmoniques",
  10: "Les modes de la gamme majeure",
  11: "Les extensions d'accords",
  12: "La substitution tritonique",
  13: "Le contrepoint à 2 voix",
  14: "L'harmonisation modale",
  15: "Les progressions jazz avancées",
  16: "La réharmonisation",
  17: "La phrase musicale et la forme",
  18: "Le développement motivique",
  19: "Introduction à l'orchestration",
  20: "Analyse des grands compositeurs classiques",
  21: "Analyse des compositeurs modernes et contemporains",
  22: "La réharmonisation avancée",
  23: "Composer dans le style des maîtres",
};

const ERROR_LABELS: Record<string, string> = {
  parallel_fifth: "Quintes parallèles",
  parallel_octave: "Octaves parallèles",
  cross_relation: "Fausses relations",
  leading_tone: "Sensible non résolue",
  seventh: "Septième mal traitée",
  spacing: "Espacement excessif",
  crossing: "Croisement de voix",
  range: "Note hors tessiture",
  missing_accidental: "Altération manquante",
};

interface Props {
  params: Promise<{ locale: string; id: string }>;
  searchParams: Promise<{ classeId?: string }>;
}

export default async function ElevePage({ params, searchParams }: Props) {
  const { locale, id: eleveId } = await params;
  const { classeId } = await searchParams;
  const { userId } = await auth();
  if (!userId) redirect(`/${locale}/sign-in`);

  // Verify prof owns a class that contains this student
  let classeNom = "";
  if (classeId) {
    const { data: classeData } = await supabaseAdmin
      .from("classes")
      .select("prof_id, nom")
      .eq("id", classeId)
      .single();

    if (!classeData || classeData.prof_id !== userId) notFound();
    classeNom = classeData.nom;

    const { data: membership } = await supabaseAdmin
      .from("classe_eleves")
      .select("eleve_id")
      .eq("classe_id", classeId)
      .eq("eleve_id", eleveId)
      .maybeSingle();

    if (!membership) notFound();
  } else {
    // No classeId: verify the prof has any class with this student
    const { data: classes } = await supabaseAdmin
      .from("classes")
      .select("id, nom")
      .eq("prof_id", userId);

    const classIds = (classes ?? []).map((c: { id: string; nom: string }) => c.id);
    if (classIds.length === 0) notFound();

    const { data: membership } = await supabaseAdmin
      .from("classe_eleves")
      .select("classe_id")
      .eq("eleve_id", eleveId)
      .in("classe_id", classIds)
      .maybeSingle();

    if (!membership) notFound();
    const cls = (classes ?? []).find((c: { id: string; nom: string }) => c.id === membership.classe_id);
    classeNom = cls?.nom ?? "";
  }

  // Fetch student Clerk info
  const clerk = await clerkClient();
  let eleveNom = "";
  let eleveEmail = eleveId;
  try {
    const clerkUser = await clerk.users.getUser(eleveId);
    eleveNom = [clerkUser.firstName, clerkUser.lastName].filter(Boolean).join(" ");
    eleveEmail = clerkUser.emailAddresses?.[0]?.emailAddress ?? eleveId;
  } catch { /* user not found in Clerk */ }

  // Fetch course progression
  const { data: progress } = await supabaseAdmin
    .from("user_progress")
    .select("cours_id, completed, score, exercise_id, last_seen_at")
    .eq("user_id", eleveId)
    .order("last_seen_at", { ascending: false });

  const progressRows = progress ?? [];

  // Aggregate per-course stats
  const byCours: Record<number, { completed: number; total: number; scores: number[]; exercises: { id: string; score: number; completed: boolean; seenAt: string }[] }> = {};
  for (const p of progressRows) {
    if (!byCours[p.cours_id]) byCours[p.cours_id] = { completed: 0, total: 0, scores: [], exercises: [] };
    byCours[p.cours_id].total++;
    if (p.completed) {
      byCours[p.cours_id].completed++;
      byCours[p.cours_id].scores.push(p.score);
    }
    byCours[p.cours_id].exercises.push({
      id: p.exercise_id,
      score: p.score,
      completed: p.completed,
      seenAt: p.last_seen_at,
    });
  }

  const coursIds = Object.keys(byCours).map(Number).sort((a, b) => a - b);
  const totalCompleted = coursIds.reduce((s, c) => s + byCours[c].completed, 0);
  const totalExercices = progressRows.filter(p => p.completed).length;
  const allScores = progressRows.filter(p => p.completed).map(p => p.score);
  const scoreMoyen = allScores.length > 0 ? Math.round(allScores.reduce((a, b) => a + b, 0) / allScores.length) : 0;

  // Fetch soumissions (conservatoire devoirs)
  const { data: soumissions } = await supabaseAdmin
    .from("soumissions")
    .select("id, devoir_id, note, commentaire, submitted_at, devoirs(titre, type, reference_id)")
    .eq("eleve_id", eleveId)
    .order("submitted_at", { ascending: false })
    .limit(20);

  const soumissionsRows = (soumissions ?? []) as unknown as Array<{
    id: string;
    devoir_id: string;
    note: number | null;
    commentaire: string | null;
    submitted_at: string;
    devoirs: { titre: string; type: string; reference_id: string | null } | null;
  }>;

  // Erreurs récurrentes d'écriture SATB (agrégées sur tout le travail de l'élève)
  const { data: erreursRows } = await supabaseAdmin
    .from("eleve_erreurs")
    .select("erreurs")
    .eq("eleve_id", eleveId);

  const erreurTotals: Record<string, number> = {};
  for (const r of (erreursRows ?? []) as Array<{ erreurs: Record<string, number> | null }>) {
    for (const [type, n] of Object.entries(r.erreurs ?? {})) {
      erreurTotals[type] = (erreurTotals[type] ?? 0) + Number(n || 0);
    }
  }
  const erreurList = Object.entries(erreurTotals)
    .filter(([, n]) => n > 0)
    .sort((a, b) => b[1] - a[1]);
  const erreurMax = erreurList.length > 0 ? erreurList[0][1] : 0;

  const ACCENT = "#2D5A8E";

  // Données du bilan PDF de l'élève
  const bilanData: EleveBilanData = {
    eleveNom: eleveNom,
    eleveEmail: eleveEmail,
    classeNom: classeNom || undefined,
    stats: {
      coursCompletes: coursIds.filter(c => byCours[c].completed > 0).length,
      exercicesReussis: totalExercices,
      scoreMoyen,
    },
    progression: coursIds.map(coursId => {
      const d = byCours[coursId];
      const totalInCours = ALL_EXERCISES.filter(e => e.cours === coursId).length;
      const pct = totalInCours > 0 ? Math.round((d.completed / totalInCours) * 100) : 0;
      const avg = d.scores.length > 0 ? Math.round(d.scores.reduce((a, b) => a + b, 0) / d.scores.length) : 0;
      return { cours: coursId, nom: COURS_NOMS[coursId] ?? "", completed: d.completed, total: totalInCours, pct, avg };
    }),
    difficultes: erreurList.map(([type, n]) => ({ label: ERROR_LABELS[type] ?? type, count: n })),
    devoirs: soumissionsRows.map(s => ({
      titre: s.devoirs?.titre ?? "—",
      note: s.note,
      date: new Date(s.submitted_at).toLocaleDateString("fr-FR"),
      commentaire: s.commentaire ?? null,
    })),
  };

  return (
    <main style={{ minHeight: "100vh", background: "#f4f1ec", padding: "2rem 1rem", fontFamily: "system-ui, sans-serif" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>

        {/* Breadcrumb */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: "1.5rem", fontSize: 12, color: "#aaa" }}>
          <Link href={`/${locale}/prof`} style={{ color: "#aaa", textDecoration: "none" }}>Prof</Link>
          <span>›</span>
          {classeId && (
            <>
              <Link href={`/${locale}/prof/classe/${classeId}`} style={{ color: "#aaa", textDecoration: "none" }}>{classeNom}</Link>
              <span>›</span>
            </>
          )}
          <span style={{ color: "#555" }}>{eleveNom || eleveEmail}</span>
        </div>

        {/* Header */}
        <div style={{ background: "#fff", border: "0.5px solid #e8e3db", borderRadius: 14, padding: "24px 28px", marginBottom: "1.5rem" }}>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", color: ACCENT, textTransform: "uppercase", marginBottom: 6 }}>
                🎓 Profil élève
              </div>
              <h1 style={{ fontSize: 22, fontWeight: 700, color: "#1a1a1a", margin: "0 0 4px", fontFamily: "Georgia, serif" }}>
                {eleveNom || "—"}
              </h1>
              <div style={{ fontSize: 13, color: "#888", marginBottom: 12 }}>{eleveEmail}</div>
              <EleveBilanButton data={bilanData} />
            </div>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {[
                { label: "Cours complétés", value: `${coursIds.filter(c => byCours[c].completed > 0).length} / 23` },
                { label: "Exercices réussis", value: String(totalExercices) },
                { label: "Score moyen", value: scoreMoyen > 0 ? `${scoreMoyen}%` : "—" },
              ].map(stat => (
                <div key={stat.label} style={{
                  background: "#f4f1ec",
                  borderRadius: 10,
                  padding: "12px 18px",
                  textAlign: "center",
                  minWidth: 100,
                }}>
                  <div style={{ fontSize: 20, fontWeight: 700, color: ACCENT }}>{stat.value}</div>
                  <div style={{ fontSize: 11, color: "#888", marginTop: 2 }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Course progression */}
        {coursIds.length > 0 && (
          <div style={{ background: "#fff", border: "0.5px solid #e8e3db", borderRadius: 14, padding: "24px 28px", marginBottom: "1.5rem" }}>
            <h2 style={{ fontSize: 16, fontWeight: 700, color: "#1a1a1a", margin: "0 0 18px" }}>Progression par cours</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {coursIds.map(coursId => {
                const data = byCours[coursId];
                const totalInCours = ALL_EXERCISES.filter(e => e.cours === coursId).length;
                const pct = totalInCours > 0 ? Math.round((data.completed / totalInCours) * 100) : 0;
                const avg = data.scores.length > 0 ? Math.round(data.scores.reduce((a, b) => a + b, 0) / data.scores.length) : 0;
                return (
                  <div key={coursId}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4, alignItems: "center" }}>
                      <span style={{ fontSize: 13, color: "#333" }}>
                        <span style={{ fontWeight: 700, color: ACCENT, marginRight: 8 }}>Cours {coursId}</span>
                        {COURS_NOMS[coursId]}
                      </span>
                      <div style={{ display: "flex", gap: 10, alignItems: "center", flexShrink: 0 }}>
                        {avg > 0 && (
                          <span style={{
                            fontSize: 12, fontWeight: 700,
                            color: avg >= 70 ? "#0F6E56" : avg >= 50 ? "#BA7517" : "#E53E3E",
                          }}>
                            {avg}% moy.
                          </span>
                        )}
                        <span style={{ fontSize: 12, color: "#888" }}>{data.completed} / {totalInCours}</span>
                        <span style={{ fontSize: 12, fontWeight: 600, color: pct === 100 ? "#0F6E56" : ACCENT, minWidth: 36, textAlign: "right" }}>
                          {pct}%
                        </span>
                      </div>
                    </div>
                    <div style={{ height: 6, background: "#f0ece6", borderRadius: 4, overflow: "hidden" }}>
                      <div style={{
                        height: "100%",
                        width: `${pct}%`,
                        background: pct === 100 ? "#0F6E56" : ACCENT,
                        borderRadius: 4,
                        transition: "width .3s",
                      }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Erreurs récurrentes (écriture SATB) */}
        {erreurList.length > 0 && (
          <div style={{ background: "#fff", border: "0.5px solid #e8e3db", borderRadius: 14, padding: "24px 28px", marginBottom: "1.5rem" }}>
            <h2 style={{ fontSize: 16, fontWeight: 700, color: "#1a1a1a", margin: "0 0 6px" }}>Difficultés récurrentes</h2>
            <p style={{ fontSize: 12, color: "#999", margin: "0 0 18px" }}>
              Erreurs d'écriture à 4 voix rencontrées (nombre d'exercices concernés).
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {erreurList.map(([type, n]) => {
                const pct = erreurMax > 0 ? Math.round((n / erreurMax) * 100) : 0;
                return (
                  <div key={type}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                      <span style={{ fontSize: 13, color: "#333" }}>{ERROR_LABELS[type] ?? type}</span>
                      <span style={{ fontSize: 13, fontWeight: 700, color: "#C53030" }}>{n}×</span>
                    </div>
                    <div style={{ height: 6, background: "#f0ece6", borderRadius: 4, overflow: "hidden" }}>
                      <div style={{ height: "100%", width: `${pct}%`, background: "#E53E3E", borderRadius: 4 }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Devoir submissions */}
        {soumissionsRows.length > 0 && (
          <div style={{ background: "#fff", border: "0.5px solid #e8e3db", borderRadius: 14, padding: "24px 28px", marginBottom: "1.5rem" }}>
            <h2 style={{ fontSize: 16, fontWeight: 700, color: "#1a1a1a", margin: "0 0 18px" }}>Devoirs soumis</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {soumissionsRows.map(s => {
                const ok = (s.note ?? 0) >= 70;
                return (
                  <div key={s.id} style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "10px 14px",
                    background: "#fafafa",
                    borderRadius: 8,
                    border: "0.5px solid #e8e3db",
                    gap: 12,
                    flexWrap: "wrap",
                  }}>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <span style={{
                        fontSize: 10, fontWeight: 600, color: "#5C3D6E",
                        background: "#f0eaf8", padding: "1px 6px", borderRadius: 4, marginRight: 8,
                      }}>
                        {s.devoirs?.type ?? "devoir"}
                      </span>
                      <span style={{ fontSize: 14, color: "#1a1a1a" }}>{s.devoirs?.titre ?? "—"}</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
                      <span style={{ fontSize: 12, color: "#888" }}>
                        {new Date(s.submitted_at).toLocaleDateString("fr-FR")}
                      </span>
                      {s.note != null ? (
                        <span style={{ fontSize: 14, fontWeight: 700, color: ok ? "#0F6E56" : "#E53E3E" }}>
                          {s.note}%
                        </span>
                      ) : (
                        <span style={{ fontSize: 12, color: "#bbb" }}>Non noté</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {coursIds.length === 0 && soumissionsRows.length === 0 && erreurList.length === 0 && (
          <div style={{
            background: "#fff", border: "0.5px solid #e8e3db",
            borderRadius: 14, padding: "48px 28px",
            textAlign: "center", color: "#bbb", fontSize: 14,
          }}>
            Cet élève n'a pas encore d'activité enregistrée.
          </div>
        )}

        {/* Back link */}
        <div style={{ marginTop: "1.5rem", textAlign: "center" }}>
          {classeId ? (
            <Link href={`/${locale}/prof/classe/${classeId}`} style={{ fontSize: 13, color: "#888", textDecoration: "none" }}>
              ← Retour à la classe
            </Link>
          ) : (
            <Link href={`/${locale}/prof`} style={{ fontSize: 13, color: "#888", textDecoration: "none" }}>
              ← Retour
            </Link>
          )}
        </div>

      </div>
    </main>
  );
}
