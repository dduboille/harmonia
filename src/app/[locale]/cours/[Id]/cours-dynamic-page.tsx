/**
 * src/app/[locale]/cours/[id]/page.tsx
 * Harmonia — Page cours dynamique (remplace les dossiers statiques 1-9)
 */

import { notFound } from "next/navigation";
import Cours1 from "@/components/Cours1";
import Cours2 from "@/components/Cours2";
import Cours3 from "@/components/Cours3";
import Cours4 from "@/components/Cours4";
import Cours5 from "@/components/Cours5";
import Cours6 from "@/components/Cours6";
import Cours7 from "@/components/Cours7";
import Cours8 from "@/components/Cours8";
import Cours9 from "@/components/Cours9";

const COURS_COMPONENTS: Record<number, React.ComponentType> = {
  1: Cours1,
  2: Cours2,
  3: Cours3,
  4: Cours4,
  5: Cours5,
  6: Cours6,
  7: Cours7,
  8: Cours8,
  9: Cours9,
};

interface Props {
  params: { locale: string; id: string };
}

export function generateStaticParams() {
  return [1,2,3,4,5,6,7,8,9].map(id => ({ id: String(id) }));
}

export default function CoursPage({ params }: Props) {
  const id = parseInt(params.id);
  const CoursComponent = COURS_COMPONENTS[id];

  if (!CoursComponent) return notFound();

  return (
    <main style={{ minHeight: "100vh", padding: "2rem 1rem" }}>
      <CoursComponent />
    </main>
  );
}
