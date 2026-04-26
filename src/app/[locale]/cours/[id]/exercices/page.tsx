import Link from "next/link";
import { notFound } from "next/navigation";
import ExerciseCard from "@/components/ExerciseCard";
import { ALL_EXERCISES } from "@/exercises/all-exercises";
import { DIFFICULTY_LABEL, DIFFICULTY_COLOR } from "@/types/exercise";

const COURS_META: Record<number, { title: string; badge: string }> = {
  1: { title: "Gamme et intervalles", badge: "Cours 1" },
  2: { title: "Les accords", badge: "Cours 2" },
  3: { title: "Fonctions tonales et conduites de voix", badge: "Cours 3" },
  4: { title: "Cadences et progressions", badge: "Cours 4" },
  5: { title: "Emprunts et suites classiques", badge: "Cours 5" },
  6: { title: "Construire une harmonisation", badge: "Cours 6" },
  7: { title: "La tonicisation", badge: "Cours 7" },
  8: { title: "Modulation par accord pivot", badge: "Cours 8" },
  9: { title: "Modulations avancees et pedales", badge: "Cours 9" },
};

export default async function ExercicesPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { locale, id } = await params;
  const coursId = parseInt(id);
  const meta = COURS_META[coursId];
  if (!meta) return notFound();

  const exercises = ALL_EXERCISES.filter((e) => e.cours === coursId);

  return (
    <main style={{ minHeight: "100vh", background: "#f4f1ec", padding: "3rem 1rem" }}>
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        <div style={{ marginBottom: "1.5rem", fontSize: 12, color: "#aaa" }}>
          <Link href={`/${locale}/cours`} style={{ color: "#aaa", textDecoration: "none" }}>Cours</Link>
          {" · "}
          <Link href={`/${locale}/cours/${coursId}`} style={{ color: "#aaa", textDecoration: "none" }}>{meta.badge}</Link>
          {" · Exercices"}
        </div>

        <div style={{ marginBottom: "2rem" }}>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", color: "#BA7517", textTransform: "uppercase", marginBottom: 6 }}>
            {meta.badge} · Exercices
          </div>
          <h1 style={{ fontSize: 26, fontWeight: 500, color: "#1a1a1a", margin: "0 0 6px" }}>{meta.title}</h1>
          <p style={{ fontSize: 14, color: "#888", margin: 0 }}>
            {exercises.length} exercice{exercises.length > 1 ? "s" : ""}
          </p>
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <Link href={`/${locale}/atelier`} style={{ fontSize: 12, color: "#185FA5" }}>
            Voir tous les exercices dans l'Atelier →
          </Link>
        </div>

        {([1, 2, 3] as const).map((diff) => {
          const group = exercises.filter((e) => e.difficulty === diff);
          if (group.length === 0) return null;
          return (
            <div key={diff} style={{ marginBottom: "2rem" }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: DIFFICULTY_COLOR[diff], textTransform: "uppercase", marginBottom: 12 }}>
                {DIFFICULTY_LABEL[diff]} · {group.length} exercice{group.length > 1 ? "s" : ""}
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 12 }}>
                {group.map((ex) => (
                  <ExerciseCard key={ex.id} exercise={ex} locale={locale} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}