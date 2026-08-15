/**
 * src/lib/licences.ts
 * Harmonia — Les licences d'établissement : le droit d'accès qui vient d'un
 * conservatoire, et non d'un achat individuel.
 *
 * Logique PURE, sans accès à la base : les requêtes vivent dans
 * `licences-db.ts`. C'est ce qui rend les règles de validité testables sans
 * Supabase.
 *
 * Le modèle historique portait tout droit sur `user_subscriptions`, une ligne
 * par personne. Un établissement ne pouvait donc pas payer POUR ses élèves :
 * rejoindre une classe servait au suivi et n'ouvrait aucun cours. Ici, l'accès
 * découle de l'appartenance à une classe rattachée à un établissement dont la
 * licence court — le professeur propriétaire de la classe étant couvert comme
 * ses élèves.
 */


export interface Licence {
  id: string;
  etablissement_id: string;
  sieges: number;
  valid_from: string;   // date ISO (AAAA-MM-JJ)
  valid_until: string;  // incluse : une licence au 30 juin couvre le 30 juin
  statut: string;
  reference: string | null;
}

/** Compare deux dates au JOUR près, en ignorant l'heure et le fuseau. */
function jour(d: Date | string): string {
  return typeof d === "string" ? d.slice(0, 10) : d.toISOString().slice(0, 10);
}

/**
 * Une licence court-elle à cette date ?
 *
 * Les bornes sont INCLUSES des deux côtés : une licence du 1er septembre au
 * 30 juin couvre le 30 juin en entier. Une comparaison par horodatage aurait
 * fait expirer la licence à minuit le matin du dernier jour.
 */
export function licenceActive(l: Pick<Licence, "statut" | "valid_from" | "valid_until">, a: Date = new Date()): boolean {
  if (l.statut !== "active") return false;
  const j = jour(a);
  return jour(l.valid_from) <= j && j <= jour(l.valid_until);
}

/** Les sièges ouverts par les licences en cours d'un établissement. */
export function siegesDisponibles(licences: Licence[], a: Date = new Date()): number {
  return licences.filter((l) => licenceActive(l, a)).reduce((n, l) => n + l.sieges, 0);
}
