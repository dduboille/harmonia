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
import Cours10 from "@/components/Cours10";
import Cours11 from "@/components/Cours11";
import Cours12 from "@/components/Cours12";
import Cours13 from "@/components/Cours13";
import Cours14 from "@/components/Cours14";
import Cours15 from "@/components/Cours15";
import Cours16 from "@/components/Cours16";
import Cours17 from "@/components/Cours17";
import Cours18 from "@/components/Cours18";
import Cours19 from "@/components/Cours19";
import Cours20 from "@/components/Cours20";

const COURS: Record<number, React.ComponentType> = {
  1: Cours1, 2: Cours2, 3: Cours3, 4: Cours4, 5: Cours5,
  6: Cours6, 7: Cours7, 8: Cours8, 9: Cours9, 10: Cours10, 11: Cours11, 12: Cours12, 13: Cours13, 14: Cours14, 15: Cours15, 16: Cours16, 17: Cours17, 18: Cours18, 19: Cours19, 20: Cours20,
};

export function generateStaticParams() {
  return [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map(id => ({ id: String(id) }));
}

export default async function CoursPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const C = COURS[parseInt(id)];
  if (!C) return notFound();
  return <main style={{ minHeight:"100vh", padding:"2rem 1rem" }}><C /></main>;
}