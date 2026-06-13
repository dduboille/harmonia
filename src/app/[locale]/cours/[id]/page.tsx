import { notFound } from "next/navigation";
import Link from "next/link";

export const dynamic = 'force-dynamic';

const SATB_COURS = new Set([3,4,5,6]);
const NE_COURS = new Set([6]);
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
import Cours21 from "@/components/Cours21";
import Cours22 from "@/components/Cours22";
import Cours23 from "@/components/Cours23";
import Cours24 from "@/components/Cours24";
import Cours25 from "@/components/Cours25";
import Cours26 from "@/components/Cours26";
import Cours27 from "@/components/Cours27";
import Cours28 from "@/components/Cours28";
import Cours29 from "@/components/Cours29";
import Cours30 from "@/components/Cours30";
import Cours31 from "@/components/Cours31";
import Cours32 from "@/components/Cours32";
import Cours33 from "@/components/Cours33";
import Cours34 from "@/components/Cours34";
import Cours35 from "@/components/Cours35";
import Cours36 from "@/components/Cours36";
import Cours37 from "@/components/Cours37";
import Cours38 from "@/components/Cours38";

const COURS: Record<number, React.ComponentType> = {
  1: Cours1, 2: Cours2, 3: Cours3, 4: Cours4, 5: Cours5,
  6: Cours6, 7: Cours7, 8: Cours8, 9: Cours9, 10: Cours10, 11: Cours11, 12: Cours12, 13: Cours13, 14: Cours14, 15: Cours15, 16: Cours16, 17: Cours17, 18: Cours18, 19: Cours19, 20: Cours20, 21: Cours21, 22: Cours22, 23: Cours23,
  24: Cours24, 25: Cours25, 26: Cours26,
  27: Cours27, 28: Cours28, 29: Cours29,
  30: Cours30, 31: Cours31, 32: Cours32,
  33: Cours33, 34: Cours34, 35: Cours35, 36: Cours36, 37: Cours37,
  38: Cours38,
};

export function generateStaticParams() {
  return [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38].map(id => ({ id: String(id) }));
}

export default async function CoursPage({ params }: { params: Promise<{ id: string; locale: string }> }) {
  const { id, locale } = await params;
  const num = parseInt(id);
  const C = COURS[num];
  if (!C) return notFound();
  return (
    <main style={{ minHeight:"100vh", padding:"2rem 1rem" }}>
      <C />
      {SATB_COURS.has(num) && (
        <div style={{ maxWidth: 800, margin: "2rem auto 0", padding: "0 1rem" }}>
          <Link href={`/${locale}/generateur-satb`} style={{ textDecoration: "none" }}>
            <div style={{
              display: "flex", justifyContent: "space-between", alignItems: "center",
              background: "linear-gradient(135deg, #E6F1FB 0%, #D8EAFA 100%)",
              border: "0.5px solid #A8C7EE", borderRadius: 12, padding: "16px 20px",
            }}>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, color: "#185FA5", marginBottom: 4 }}>
                  ⊞ Pratiquer avec le Générateur SATB
                </div>
                <div style={{ fontSize: 12, color: "#3A7CC7" }}>
                  Créez vos propres exercices de conduite des voix dans les 24 tonalités.
                </div>
              </div>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#185FA5", whiteSpace: "nowrap" as const }}>
                Accéder →
              </div>
            </div>
          </Link>
        </div>
      )}
      {NE_COURS.has(num) && (
        <div style={{ maxWidth: 800, margin: "1rem auto 0", padding: "0 1rem" }}>
          <Link href={`/${locale}/notes-etrangeres`} style={{ textDecoration: "none" }}>
            <div style={{
              display: "flex", justifyContent: "space-between", alignItems: "center",
              background: "linear-gradient(135deg, #FFF4E8 0%, #FFE8CC 100%)",
              border: "0.5px solid #F5C77E", borderRadius: 12, padding: "16px 20px",
            }}>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, color: "#BA7517", marginBottom: 4 }}>
                  ♪ S'entraîner sur les notes étrangères
                </div>
                <div style={{ fontSize: 12, color: "#8a5a10" }}>
                  20 exercices interactifs — coloriez et identifiez notes de passage, broderies, retards et appoggiatures.
                </div>
              </div>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#BA7517", whiteSpace: "nowrap" as const }}>
                Accéder →
              </div>
            </div>
          </Link>
        </div>
      )}
    </main>
  );
}