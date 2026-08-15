import { redirect } from "next/navigation";

/**
 * Ancien bac à sable de la landing, RETIRÉ.
 *
 * Il portait une copie figée de la page d'accueil, avec les trois abonnements
 * individuels et des chiffres périmés. Son en-tête disait « jamais en
 * production », mais il répondait bel et bien, et il aurait été le dernier
 * endroit du site à vendre des plans qui n'existent plus.
 *
 * Le composant `LandingPreview` n'est plus référencé nulle part.
 */
export default async function PreviewRedirect({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  redirect(`/${locale}/demarche`);
}
