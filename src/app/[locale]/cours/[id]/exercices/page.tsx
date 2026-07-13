import Link from "next/link";
import { notFound } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import ExerciseCard from "@/components/ExerciseCard";
import { ALL_EXERCISES } from "@/exercises/all-exercises";
import { DIFFICULTY_LABEL, DIFFICULTY_COLOR } from "@/types/exercise";
import { getUserPlan } from "@/lib/progression";
import { getCours, isFreeCours } from "@/lib/catalogue";
import { CoursPaywall } from "@/components/Paywall";

export const dynamic = "force-dynamic";

export default async function ExercicesPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { locale, id } = await params;
  const coursId = parseInt(id);
  // Les titres viennent du catalogue : cette page en tenait sa propre copie,
  // qui ne couvrait que 13 cours sur 41.
  const cours = getCours(coursId);
  if (!cours) return notFound();

  const meta = { title: cours.title, badge: `Cours ${cours.num}` };

  // Les exercices d'un cours payant étaient accessibles à tout compte gratuit :
  // seul le bouton « voir la solution » consultait le plan.
  const { userId } = await auth();
  const plan = userId ? await getUserPlan(userId) : "free";
  if (plan === "free" && !isFreeCours(coursId)) {
    return <CoursPaywall locale={locale} cours={cours} signedIn={Boolean(userId)} subject="exercices" />;
  }

  const exercises = ALL_EXERCISES.filter((e) => e.cours === coursId);

  return (
    <main style={{ minHeight: "100vh", background: "#f4f1ec", padding: "3rem 1rem" }}>
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        <div style={{ marginBottom: "1.5rem", fontSize: 12, color: "#767676" }}>
          <Link href={`/${locale}/cours`} style={{ color: "#767676", textDecoration: "none" }}>Cours</Link>
          {" · "}
          <Link href={`/${locale}/cours/${coursId}`} style={{ color: "#767676", textDecoration: "none" }}>{meta.badge}</Link>
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
            Voir tous les exercices dans l&apos;Atelier →
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