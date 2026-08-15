/**
 * src/lib/demandes-etablissement.ts
 * Harmonia — Les demandes de devis des établissements.
 *
 * Elles ne vivaient jusqu'ici que dans deux e-mails Resend : un envoi qui échoue
 * ou une boîte mal relevée, et le prospect disparaissait sans laisser de trace.
 * On les écrit désormais en base AVANT d'envoyer quoi que ce soit.
 */

import { supabaseAdmin } from "@/lib/supabase";

/** Les états d'avancement d'une demande, du premier contact à sa conclusion. */
export const STATUTS_DEMANDE = ["nouveau", "contacte", "devis_envoye", "signe", "perdu"] as const;
export type StatutDemande = (typeof STATUTS_DEMANDE)[number];

export const LIBELLE_STATUT: Record<StatutDemande, string> = {
  nouveau: "Nouveau",
  contacte: "Contacté",
  devis_envoye: "Devis envoyé",
  signe: "Signé",
  perdu: "Perdu",
};

export interface DemandeEtablissement {
  id: string;
  nom: string;
  email: string;
  etablissement: string;
  fonction: string | null;
  ville: string | null;
  pays: string | null;
  nb_eleves: string | null;
  message: string | null;
  statut: StatutDemande;
  etablissement_id: string | null;
  notes: string | null;
  created_at: string;
  updated_at: string;
}

export interface NouvelleDemande {
  nom: string;
  email: string;
  etablissement: string;
  fonction?: string | null;
  ville?: string | null;
  pays?: string | null;
  nbEleves?: string | null;
  message?: string | null;
}

/**
 * Enregistre une demande. Ne LÈVE JAMAIS : une panne d'écriture ne doit pas
 * empêcher l'e-mail de partir, sans quoi on perdrait le prospect des deux côtés
 * à la fois. Rend l'identifiant créé, ou `null` si l'écriture a échoué — auquel
 * cas l'appelant journalise et poursuit.
 *
 * Tolère aussi que la table n'existe pas encore : la migration
 * `scripts/etablissements-migration.sql` peut n'avoir pas été passée.
 */
export async function enregistrerDemande(d: NouvelleDemande): Promise<string | null> {
  try {
    const { data, error } = await supabaseAdmin
      .from("demandes_etablissement")
      .insert({
        nom: d.nom,
        email: d.email,
        etablissement: d.etablissement,
        fonction: d.fonction ?? null,
        ville: d.ville ?? null,
        pays: d.pays ?? null,
        nb_eleves: d.nbEleves ?? null,
        message: d.message ?? null,
      })
      .select("id")
      .single();

    if (error) {
      console.error("Demande établissement non enregistrée :", error.message);
      return null;
    }
    return (data as { id: string }).id;
  } catch (e) {
    console.error("Demande établissement non enregistrée :", e);
    return null;
  }
}

/** Les demandes, les plus récentes d'abord. Pour l'écran d'administration. */
export async function listerDemandes(): Promise<DemandeEtablissement[]> {
  const { data, error } = await supabaseAdmin
    .from("demandes_etablissement")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Lecture des demandes impossible :", error.message);
    return [];
  }
  return (data ?? []) as DemandeEtablissement[];
}

/** Fait avancer une demande dans le suivi commercial. */
export async function majDemande(
  id: string,
  champs: { statut?: StatutDemande; notes?: string; etablissement_id?: string | null },
): Promise<boolean> {
  const { error } = await supabaseAdmin
    .from("demandes_etablissement")
    .update({ ...champs, updated_at: new Date().toISOString() })
    .eq("id", id);

  if (error) {
    console.error("Mise à jour de la demande impossible :", error.message);
    return false;
  }
  return true;
}
