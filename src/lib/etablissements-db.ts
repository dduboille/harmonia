/**
 * src/lib/etablissements-db.ts
 * Harmonia — Établissements clients et leurs licences : lectures et écritures.
 *
 * La logique de validité vit dans `licences.ts`, sans base, pour rester testable.
 */

import { supabaseAdmin } from "@/lib/supabase";
import { licenceActive, siegesDisponibles, type Licence } from "@/lib/licences";

export interface Etablissement {
  id: string;
  nom: string;
  type: string | null;
  contact_nom: string | null;
  contact_email: string | null;
  siret: string | null;
  adresse_facturation: string | null;
  notes: string | null;
  created_at: string;
}

/** Un établissement avec ce qu'il faut pour le piloter d'un coup d'œil. */
export interface EtablissementDetaille extends Etablissement {
  licences: Licence[];
  siegesOuverts: number;
  siegesConsommes: number;
  sousLicence: boolean;
}

export async function creerEtablissement(
  e: Pick<Etablissement, "nom"> & Partial<Etablissement>,
): Promise<Etablissement | null> {
  const { data, error } = await supabaseAdmin
    .from("etablissements")
    .insert({
      nom: e.nom,
      type: e.type ?? null,
      contact_nom: e.contact_nom ?? null,
      contact_email: e.contact_email ?? null,
      siret: e.siret ?? null,
      adresse_facturation: e.adresse_facturation ?? null,
      notes: e.notes ?? null,
    })
    .select("*")
    .single();

  if (error) {
    console.error("Création d'établissement impossible :", error.message);
    return null;
  }
  return data as Etablissement;
}

export async function creerLicence(
  l: Pick<Licence, "etablissement_id" | "sieges" | "valid_from" | "valid_until"> & { reference?: string | null },
): Promise<Licence | null> {
  const { data, error } = await supabaseAdmin
    .from("licences")
    .insert({
      etablissement_id: l.etablissement_id,
      sieges: l.sieges,
      valid_from: l.valid_from,
      valid_until: l.valid_until,
      reference: l.reference ?? null,
    })
    .select("*")
    .single();

  if (error) {
    console.error("Création de licence impossible :", error.message);
    return null;
  }
  return data as Licence;
}

/** Change le statut d'une licence : `active`, `suspendue` ou `annulee`. */
export async function majStatutLicence(id: string, statut: string): Promise<boolean> {
  const { error } = await supabaseAdmin.from("licences").update({ statut }).eq("id", id);
  if (error) {
    console.error("Mise à jour de licence impossible :", error.message);
    return false;
  }
  return true;
}

/**
 * Tous les établissements, avec leurs licences et l'occupation des sièges.
 *
 * Trois lectures pour l'ensemble, et non trois par établissement : l'écran
 * d'administration en affiche la liste entière, et une requête par ligne
 * l'aurait rendu lent dès la dizaine de clients.
 */
export async function listerEtablissements(a: Date = new Date()): Promise<EtablissementDetaille[]> {
  const [etabs, lics, classes] = await Promise.all([
    supabaseAdmin.from("etablissements").select("*").order("nom"),
    supabaseAdmin.from("licences").select("*"),
    supabaseAdmin.from("classes").select("id, prof_id, etablissement_id").not("etablissement_id", "is", null),
  ]);

  if (etabs.error) {
    console.error("Lecture des établissements impossible :", etabs.error.message);
    return [];
  }

  const lignesClasses = (classes.data ?? []) as Array<{ id: string; prof_id: string; etablissement_id: string }>;

  // Une seule lecture des élèves pour toutes les classes de tous les clients.
  const elevesParClasse = new Map<string, string[]>();
  if (lignesClasses.length > 0) {
    const { data: eleves } = await supabaseAdmin
      .from("classe_eleves")
      .select("classe_id, eleve_id")
      .in("classe_id", lignesClasses.map((c) => c.id));
    for (const e of (eleves ?? []) as Array<{ classe_id: string; eleve_id: string }>) {
      const l = elevesParClasse.get(e.classe_id) ?? [];
      l.push(e.eleve_id);
      elevesParClasse.set(e.classe_id, l);
    }
  }

  const toutesLicences = (lics.data ?? []) as Licence[];

  return ((etabs.data ?? []) as Etablissement[]).map((e) => {
    const licences = toutesLicences.filter((l) => l.etablissement_id === e.id);
    const mesClasses = lignesClasses.filter((c) => c.etablissement_id === e.id);

    // Une personne inscrite à trois classes ne consomme qu'un siège : c'est
    // ainsi qu'un conservatoire compte ses effectifs.
    const personnes = new Set<string>();
    for (const c of mesClasses) {
      personnes.add(c.prof_id);
      for (const id of elevesParClasse.get(c.id) ?? []) personnes.add(id);
    }

    return {
      ...e,
      licences,
      siegesOuverts: siegesDisponibles(licences, a),
      siegesConsommes: personnes.size,
      sousLicence: licences.some((l) => licenceActive(l, a)),
    };
  });
}

export interface ClasseAdmin {
  id: string;
  nom: string;
  prof_id: string;
  code_acces: string;
  etablissement_id: string | null;
  nb_eleves: number;
}

/**
 * Toutes les classes, avec leur effectif et leur rattachement.
 *
 * C'est ce qui permet à l'administrateur de relier une classe créée par un
 * professeur à l'établissement qui paie — le geste sans lequel une licence
 * n'ouvre rien, puisque la couverture se calcule en remontant de la classe
 * vers son établissement.
 */
export async function listerClasses(): Promise<ClasseAdmin[]> {
  const { data, error } = await supabaseAdmin
    .from("classes")
    .select("id, nom, prof_id, code_acces, etablissement_id")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Lecture des classes impossible :", error.message);
    return [];
  }
  const classes = (data ?? []) as Array<Omit<ClasseAdmin, "nb_eleves">>;
  if (classes.length === 0) return [];

  // Un seul comptage pour toutes les classes plutôt qu'une requête par ligne.
  const { data: eleves } = await supabaseAdmin
    .from("classe_eleves")
    .select("classe_id")
    .in("classe_id", classes.map((c) => c.id));

  const parClasse = new Map<string, number>();
  for (const e of (eleves ?? []) as Array<{ classe_id: string }>) {
    parClasse.set(e.classe_id, (parClasse.get(e.classe_id) ?? 0) + 1);
  }

  return classes.map((c) => ({ ...c, nb_eleves: parClasse.get(c.id) ?? 0 }));
}

/** Rattache une classe existante à un établissement (ou l'en détache si `null`). */
export async function rattacherClasse(classeId: string, etablissementId: string | null): Promise<boolean> {
  const { error } = await supabaseAdmin
    .from("classes")
    .update({ etablissement_id: etablissementId })
    .eq("id", classeId);

  if (error) {
    console.error("Rattachement de classe impossible :", error.message);
    return false;
  }
  return true;
}
