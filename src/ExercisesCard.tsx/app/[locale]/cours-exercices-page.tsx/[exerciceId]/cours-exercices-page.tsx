/**
 * src/app/[locale]/cours/[id]/exercices/page.tsx
 * Harmonia — Liste des exercices d'un cours
 */

import Link from "next/link";
import { notFound } from "next/navigation";
import ExerciseCard from "@/components/ExerciseCard";
import { ALL_EXERCISES } from "@/exercise.ts/all-exercises";
import { DIFFICULTY_LABEL, DIFFICULTY_COLOR } from "@/types/exercise";

// Métadonnées des cours pour le header
const COURS_META: Record<number, { title: string; badge: string }> = {
  1: { title: "La gamme, les degrés et les intervalles", badge: "Cours 1" },
  2: { title: "Les accords", badge: "Cours 2" },
  3: { title: "Fonctions tonales et conduites de voix", badge: "Cours 3" },
  4: { title: "Cadences et progressions", badge: "Cours 4" },
  5: { title: "Emprunts et suites harmoniques classiques", badge: "Cours 5" },
  6: { title: "Construire une harmonisation", badge: "Cours 6" },
  7: { title: "La tonicisation", badge: "Cours 7" },
  8: { title: "Modulation par accord pivot", badge: "Cours 8" },
  9: { title: "Modulations avancées et pédales harmoniques", badge: "Cours 9" },
};

interface Props {
  params: { locale: string; id: string };
}

export default function ExercicesPage({ params }: Props) {
  const coursId = parseInt(params.id);
  const locale  = params.locale;
  const meta    = COURS_META[coursId];

  if (!meta) return notFound();

  const exercises = ALL_EXERCISES.filter(e => e.cours === coursId);
  const byDifficulty = [1, 2, 3] as const;

  return (
    <main style={{
      minHeight: "100vh",
      background: "#f4f1ec",
      padding: "3rem 1rem",
    }}>
      <div style={{ maxWidth: 760, margin: "0 auto" }}>

        {/* Breadcrumb */}
        <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: "1.5rem", fontSize: 12, color: "#aaa" }}>
          <Link href={`/${locale}/cours`} style={{ color: "#aaa", textDecoration: "none" }}>
            ← Cours
          </Link>
          <span>·</span>
          <Link href={`/${locale}/cours/${coursId}`} style={{ color: "#aaa", textDecoration: "none" }}>
            {meta.badge}
          </Link>
          <span>·</span>
          <span style={{ color: "#666" }}>Exercices</span>
        </div>

        {/* Header */}
        <div style={{ marginBottom: "2rem" }}>
          <div style={{
            fontSize: 11, fontWeight: 600, letterSpacing: "0.1em",
            color: "#BA7517", textTransform: "uppercase" as const, marginBottom: 6,
          }}>
            Harmonia · {meta.badge} · Exercices
          </div>
          <h1 style={{ fontSize: 26, fontWeight: 500, color: "#1a1a1a", margin: "0 0 6px" }}>
            {meta.title}
          </h1>
          <p style={{ fontSize: 14, color: "#888", margin: 0, lineHeight: 1.7 }}>
            {exercises.length === 0
              ? "Les exercices de ce cours arrivent bientôt."
              : `${exercises.length} exercice${exercises.length > 1 ? "s" : ""} — place les notes sur la portée et reçois un feedback harmonique en temps réel.`}
          </p>
        </div>

        {/* Lien vers l'atelier global */}
        <div style={{
          background: "#fff",
          border: "0.5px solid #e8e3db",
          borderRadius: 10,
          padding: "10px 16px",
          marginBottom: "2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontSize: 13,
        }}>
          <span style={{ color: "#666" }}>Tous les exercices de tous les cours</span>
          <Link href={`/${locale}/atelier`} style={{
            color: "#185FA5", fontWeight: 500, textDecoration: "none", fontSize: 12,
          }}>
            Ouvrir l'Atelier →
          </Link>
        </div>

        {/* Exercices par difficulté */}
        {exercises.length === 0 ? (
          <div style={{
            background: "#fff",
            border: "0.5px solid #e8e3db",
            borderRadius: 12,
            padding: "3rem",
            textAlign: "center" as const,
            color: "#bbb",
            fontSize: 14,
          }}>
            <div style={{ fontSize: 32, marginBottom: 12 }}>🎼</div>
            Les exercices du cours {coursId} sont en cours de création.
          </div>
        ) : (
          byDifficulty.map(diff => {
            const group = exercises.filter(e => e.difficulty === diff);
            if (group.length === 0) return null;
            return (
              <div key={diff} style={{ marginBottom: "2rem" }}>
                <div style={{
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  color: DIFFICULTY_COLOR[diff],
                  textTransform: "uppercase" as const,
                  marginBottom: 12,
                }}>
                  {DIFFICULTY_LABEL[diff]} · {group.length} exercice{group.length > 1 ? "s" : ""}
                </div>
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                  gap: 12,
                }}>
                  {group.map(ex => (
                    <ExerciseCard key={ex.id} exercise={ex} locale={locale} />
                  ))}
                </div>
              </div>
            );
          })
        )}
      </div>
    </main>
  );
}
