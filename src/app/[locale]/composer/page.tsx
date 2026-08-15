import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import AtelierComposition from "@/components/AtelierComposition";

interface Props {
  params: Promise<{ locale: string }>;
}

/**
 * L'atelier de composition était réservé au plan Pro. Il n'appelle aucun
 * modèle : saisie note à note, gravure et lecture se font entièrement dans le
 * navigateur. Seuls l'assistant conversationnel et le commentaire rédigé de
 * l'analyseur restent réservés.
 */
export default async function ComposerPage({ params }: Props) {
  const { locale } = await params;
  const { userId } = await auth();

  if (!userId) redirect(`/${locale}/sign-in?redirect_url=/${locale}/composer`);

  return <AtelierComposition />;
}
