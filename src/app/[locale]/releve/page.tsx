import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Releve from "@/components/Releve";

export const metadata: Metadata = {
  title: "Relevé harmonique — Harmonia",
  description:
    "Écoutez une progression d'école à quatre voix et relevez-la par paliers : la basse, les chiffrages, puis le SATB complet. Modes entraînement et examen.",
  openGraph: {
    title: "Relevé harmonique — Harmonia",
    description: "Le relevé supérieur par paliers : basse, chiffrages, SATB complet.",
    url: "https://www.getharmonia.app/fr/releve",
    siteName: "Harmonia",
    type: "website",
  },
};

interface Props {
  params: Promise<{ locale: string }>;
}

// Montage identique au générateur SATB (l'outil frère) : authentification
// requise, et aucune restriction à l'intérieur de l'outil. Les deux limitaient
// autrefois le plan gratuit à la progression II–V–I ; les exercices sont
// désormais ouverts à tous, seules les fonctions IA restent réservées.
export default async function RelevePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const { userId } = await auth();
  if (!userId) redirect(`/${locale}/sign-in`);

  return (
    <main style={{ minHeight: "100vh", background: "#f4f1ec" }}>
      <Releve />
    </main>
  );
}
