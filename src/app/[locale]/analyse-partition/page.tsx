import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import AnalysePartition from "@/components/AnalysePartition";

interface Props {
  params: Promise<{ locale: string }>;
}

/**
 * L'analyseur est un cas mixte, et c'est pourquoi le verrou ne vit plus ici.
 *
 * L'analyse elle-même — tonalité, degrés, fonctions, cadences, notes étrangères
 * — est algorithmique : elle sort de `@/lib/analyse-chaine`, sans aucun appel à
 * un modèle. Elle est donc ouverte à tous. Seul le COMMENTAIRE rédigé en fait
 * appel, et il reste réservé au niveau de sa propre route.
 */
export default async function AnalysePartitionPage({ params }: Props) {
  const { locale } = await params;
  const { userId } = await auth();

  if (!userId) redirect(`/${locale}/sign-in?redirect_url=/${locale}/analyse-partition`);

  return <AnalysePartition />;
}
