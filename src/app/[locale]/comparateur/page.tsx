import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import ComparateurStyles from "@/components/ComparateurStyles";

interface Props {
  params: Promise<{ locale: string }>;
}

/**
 * Le comparateur était réservé au plan Pro, alors qu'il ne fait appel à aucun
 * modèle : il harmonise une même progression dans onze styles par des règles
 * écrites, sans coût par requête. Seuls l'assistant conversationnel et le
 * commentaire rédigé de l'analyseur restent réservés.
 */
export default async function ComparateurPage({ params }: Props) {
  const { locale } = await params;
  const { userId } = await auth();

  if (!userId) redirect(`/${locale}/sign-in?redirect_url=/${locale}/comparateur`);

  return <ComparateurStyles />;
}
