/**
 * src/lib/licences-db.ts
 * Harmonia — Les lectures Supabase des licences d'établissement.
 *
 * Séparé de `licences.ts` (logique pure) pour que les règles de validité et de
 * décompte des sièges se testent sans base de données.
 */

import { supabaseAdmin } from "@/lib/supabase";
import { licenceActive, type Licence } from "@/lib/licences";

/**
 * Les établissements dont la licence couvre cet utilisateur, qu'il y soit élève
 * ou professeur. Rend une liste vide si l'utilisateur n'est rattaché à rien.
 */
export async function etablissementsCouvrant(userId: string): Promise<string[]> {
  // Les classes où il est élève, et celles dont il est le professeur.
  const [eleve, prof] = await Promise.all([
    supabaseAdmin
      .from("classe_eleves")
      .select("classes!inner(etablissement_id)")
      .eq("eleve_id", userId),
    supabaseAdmin
      .from("classes")
      .select("etablissement_id")
      .eq("prof_id", userId),
  ]);

  const ids = new Set<string>();
  // Selon la façon dont Supabase type la jointure, `classes` arrive soit comme
  // un objet, soit comme un tableau d'un élément : on accepte les deux plutôt
  // que de dépendre d'une forme qu'une régénération des types peut changer.
  type Jointure = { classes?: { etablissement_id: string | null } | Array<{ etablissement_id: string | null }> | null };
  for (const l of (eleve.data ?? []) as unknown as Jointure[]) {
    const c = Array.isArray(l.classes) ? l.classes[0] : l.classes;
    if (c?.etablissement_id) ids.add(c.etablissement_id);
  }
  for (const l of (prof.data ?? []) as Array<{ etablissement_id: string | null }>) {
    if (l.etablissement_id) ids.add(l.etablissement_id);
  }
  return [...ids];
}

/**
 * Cet utilisateur est-il couvert par la licence d'un établissement ?
 *
 * Volontairement tolérant à la panne : si la lecture échoue, on rend `false`
 * plutôt que de propager. Un incident Supabase doit dégrader l'accès vers le
 * plan individuel, jamais faire tomber la page.
 */
export async function couvertParUnEtablissement(userId: string, a: Date = new Date()): Promise<boolean> {
  try {
    const etabs = await etablissementsCouvrant(userId);
    if (etabs.length === 0) return false;

    const { data } = await supabaseAdmin
      .from("licences")
      .select("id, etablissement_id, sieges, valid_from, valid_until, statut, reference")
      .in("etablissement_id", etabs);

    return ((data ?? []) as Licence[]).some((l) => licenceActive(l, a));
  } catch {
    return false;
  }
}

/**
 * Sièges consommés par un établissement : les personnes DISTINCTES rattachées à
 * ses classes, élèves et professeurs confondus.
 *
 * Une même personne inscrite à trois classes ne consomme qu'un siège — c'est
 * ainsi qu'un conservatoire compte ses effectifs, et l'inverse ferait payer
 * trois fois un élève qui suit trois cours.
 */
export async function siegesConsommes(etablissementId: string): Promise<number> {
  const { data: classes } = await supabaseAdmin
    .from("classes")
    .select("id, prof_id")
    .eq("etablissement_id", etablissementId);

  const lignes = (classes ?? []) as Array<{ id: string; prof_id: string }>;
  if (lignes.length === 0) return 0;

  const personnes = new Set<string>(lignes.map((c) => c.prof_id));
  const { data: eleves } = await supabaseAdmin
    .from("classe_eleves")
    .select("eleve_id")
    .in("classe_id", lignes.map((c) => c.id));

  for (const e of (eleves ?? []) as Array<{ eleve_id: string }>) personnes.add(e.eleve_id);
  return personnes.size;
}
