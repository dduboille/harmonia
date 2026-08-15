import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Studio from "@/components/Studio";

interface Props {
  params: Promise<{ locale: string }>;
}

/**
 * Le studio était réservé au plan Pro. Import, gravure, lecture et analyse
 * harmonique y sont algorithmiques — l'analyse passe par `/api/analyse-partition`,
 * qui ne fait appel à aucun modèle. Seuls l'assistant conversationnel et le
 * commentaire rédigé de l'analyseur restent réservés.
 */
export default async function StudioPage({ params }: Props) {
  const { locale } = await params;
  const { userId } = await auth();

  if (!userId) redirect(`/${locale}/sign-in?redirect_url=/${locale}/studio`);

  return <Studio />;
}
