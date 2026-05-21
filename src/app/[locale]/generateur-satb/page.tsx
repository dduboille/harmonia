import type { Metadata } from "next";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { getUserPlan } from "@/lib/progression";
import GenerateurSATB from "@/components/GenerateurSATB";

export const metadata: Metadata = {
  title: "Générateur SATB — Harmonia",
  description: "Générez et réalisez des exercices d'harmonisation à 4 voix (Soprano, Alto, Ténor, Basse). Validation harmonique en temps réel.",
  openGraph: {
    title: "Générateur SATB — Harmonia",
    description: "Exercices d'harmonisation à 4 voix avec validation harmonique en temps réel.",
    url: "https://www.getharmonia.app/fr/generateur-satb",
    siteName: "Harmonia",
    type: "website",
  },
};

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function GenerateurSATBPage({ params }: Props) {
  const { locale } = await params;
  const { userId } = await auth();
  if (!userId) redirect(`/${locale}/sign-in`);

  const plan = await getUserPlan(userId);

  return (
    <main style={{ minHeight: "100vh", background: "#f4f1ec" }}>
      <GenerateurSATB plan={plan} />
    </main>
  );
}
