import { redirect } from "next/navigation";

/**
 * Ancienne page d'abonnement, RETIRÉE.
 *
 * Elle vendait trois plans individuels — Gratuit, Étudiant à 9 €, Pro à 19 € —
 * qui n'existent plus depuis que les {@link "@/lib/catalogue".FREE_COURS}
 * couvrent l'intégralité du catalogue. Aucun abonnement n'était en cours au
 * moment de la bascule : personne n'est lésé par sa disparition.
 *
 * On redirige plutôt que de supprimer, car de nombreux écrans y renvoyaient
 * encore (tableau de bord, profil, générateur SATB, relevé) et l'URL figurait
 * au sitemap. `/demarche` est la bonne destination : elle explique ce qui a
 * remplacé ces plans, et renvoie vers l'offre des établissements pour qui
 * cherchait les fonctions d'intelligence artificielle.
 */
export default async function UpgradeRedirect({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  redirect(`/${locale}/demarche`);
}
