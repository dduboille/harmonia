import { redirect } from "next/navigation";

/**
 * Ancienne vitrine conservatoire, RETIRÉE.
 *
 * Le site portait deux pages institutionnelles concurrentes, avec deux grilles
 * tarifaires incompatibles (par classe ici, par nombre d'élèves sur
 * `/conservatoire`) et deux formulaires branchés sur deux routes différentes —
 * celui-ci postait d'ailleurs vers `/api/contact-cursus`, forçait « Directeur »
 * en dur comme fonction et ne demandait pas l'effectif, c'est-à-dire justement
 * ce qui détermine le prix.
 *
 * L'offre retenue est celle qui était affichée ici — 199 € la classe, 499 €
 * l'établissement — mais elle est servie depuis `/conservatoire`, qui est
 * l'URL indexée, porte les métadonnées de partage et dispose du formulaire
 * correctement câblé.
 *
 * On redirige plutôt que de supprimer : la page était liée depuis `/demarche`,
 * et une URL déjà partagée ne doit pas finir en 404.
 */
export default async function LandingConservatoireRedirect({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  redirect(`/${locale}/conservatoire`);
}
