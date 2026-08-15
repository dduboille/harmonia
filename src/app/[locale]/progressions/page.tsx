import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import BibliothequeProgressions from "@/components/BibliothequeProgressions";

interface Props {
  params: Promise<{ locale: string }>;
}

/**
 * La bibliothèque de progressions était réservée au plan Pro. C'est un corpus
 * écrit à l'avance, servi tel quel : aucun modèle n'intervient. Seuls
 * l'assistant conversationnel et le commentaire rédigé de l'analyseur restent
 * réservés.
 */
export default async function ProgressionsPage({ params }: Props) {
  const { locale } = await params;
  const { userId } = await auth();
  if (!userId) redirect(`/${locale}/sign-in?redirect_url=/${locale}/progressions`);

  return <BibliothequeProgressions />;
}
