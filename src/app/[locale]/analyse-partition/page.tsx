import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { getUserPlan } from "@/lib/progression";
import { ProPaywall } from "@/components/Paywall";
import AnalysePartition from "@/components/AnalysePartition";

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function AnalysePartitionPage({ params }: Props) {
  const { locale } = await params;
  const { userId } = await auth();

  if (!userId) redirect(`/${locale}/sign-in?redirect_url=/${locale}/analyse-partition`);

  const plan = await getUserPlan(userId);

  if (plan === "free") {
    return (
      <ProPaywall
        locale={locale}
        title="Analyse de partition"
        description="Importez un fichier MusicXML et obtenez une analyse harmonique complète — tonalité, degrés, fonctions, cadences — accompagnée d'un commentaire pédagogique généré par l'IA. Réservé aux abonnés Pro."
      />
    );
  }

  return <AnalysePartition />;
}
