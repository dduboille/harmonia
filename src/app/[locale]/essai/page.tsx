import { redirect } from "next/navigation";

/**
 * Ancienne page d'essai, RETIRÉE.
 *
 * Elle échangeait un code contre 14 jours de plan Pro. L'offre n'a plus d'objet
 * depuis que les cours sont ouverts à tous : il n'y a plus rien à débloquer
 * temporairement.
 *
 * La redirection compte davantage ici que pour les autres pages retirées, car
 * l'URL a circulé — elle était portée par le post LinkedIn de présentation du
 * répertoire, avec son code. Ceux qui suivront ce lien doivent trouver
 * l'explication de la gratuité, pas une 404 ni un formulaire qui refuse leur
 * code. La route `/api/trial/redeem` reste en place pour ne pas casser une
 * requête en vol ; elle n'est plus appelée par aucune page.
 */
export default async function EssaiRedirect({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  redirect(`/${locale}/demarche`);
}
