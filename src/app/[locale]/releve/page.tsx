import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { getUserPlan } from "@/lib/progression";
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
// requise, pas de barrière Pro à l'entrée — le plan gratuit est restreint à la
// progression II–V–I à l'intérieur de l'outil, comme au générateur.
export default async function RelevePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const { userId } = await auth();
  if (!userId) redirect(`/${locale}/sign-in`);

  const plan = await getUserPlan(userId);

  return (
    <main style={{ minHeight: "100vh", background: "#f4f1ec" }}>
      <Releve plan={plan} />
    </main>
  );
}
