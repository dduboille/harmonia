/**
 * lib/trial-codes.ts
 * Harmonia — Logique pure des codes d'essai sans carte bancaire : génération,
 * calcul d'expiration, validation d'un rachat, garde admin. Aucune dépendance
 * à Supabase/Clerk ici — les routes API font les lectures/écritures et
 * appellent ces fonctions avec des données déjà chargées.
 */

/** Durée d'un essai, en jours. Valeur unique pour tous les codes (décision produit). */
export const ESSAI_DUREE_JOURS = 14;

// Alphabet sans caractères ambigus à l'écrit/à l'oral : pas de 0/O ni de 1/I.
const ALPHABET_CODE = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

/** Génère un code lisible de 8 caractères (majuscules + chiffres, sans 0/O/1/I). */
export function genererCode(): string {
  let code = "";
  for (let i = 0; i < 8; i++) {
    code += ALPHABET_CODE[Math.floor(Math.random() * ALPHABET_CODE.length)];
  }
  return code;
}

/** Date ISO, `depart` + ESSAI_DUREE_JOURS jours. */
export function calculerExpiration(depart: Date): string {
  const fin = new Date(depart.getTime());
  fin.setUTCDate(fin.getUTCDate() + ESSAI_DUREE_JOURS);
  return fin.toISOString();
}

export interface TrialCode {
  id: string;
  code: string;
  max_uses: number;
  uses_count: number;
  active: boolean;
}

export interface AbonnementExistant {
  stripe_subscription_id: string | null;
  current_period_end: string | null;
}

/**
 * Vrai si l'utilisateur a déjà un abonnement Stripe RÉEL et actif (payant,
 * pas un essai) — un tel abonnement ne doit jamais être raccourci par un
 * rachat de code d'essai. `stripe_subscription_id` distingue un vrai
 * abonnement d'une ligne posée par un essai précédent (qui ne porte jamais
 * cet identifiant).
 */
export function aAbonnementPayantActif(sub: AbonnementExistant | null): boolean {
  if (!sub || !sub.stripe_subscription_id || !sub.current_period_end) return false;
  return new Date(sub.current_period_end) > new Date();
}

/**
 * Identifiant STABLE du motif de refus. C'est lui qui traverse l'API : le
 * client le traduit dans la langue de la page. Le champ `erreur` qui
 * l'accompagne reste en français et ne sert plus qu'aux journaux serveur —
 * ne jamais l'afficher tel quel à l'utilisateur.
 */
export type CodeErreurEssai =
  | "abonnementActif"
  | "dejaUtilise"
  | "introuvable"
  | "inactif"
  | "limiteAtteinte";

export type ResultatValidation =
  | { ok: true }
  | { ok: false; status: 404 | 400 | 409; code: CodeErreurEssai; erreur: string };

/**
 * Valide un rachat de code AVANT toute écriture. `dejaConsomme` doit être
 * calculé par l'appelant (une ligne dans trial_redemptions pour ce user_id,
 * tous codes confondus). `abonnementPayantActif` doit venir de
 * `aAbonnementPayantActif`.
 *
 * Ordre des vérifications délibéré : l'éligibilité de la PERSONNE (abonnement
 * actif, essai déjà consommé) est vérifiée AVANT la validité du CODE lui-même.
 * Sinon, une personne inéligible pourrait distinguer "code inexistant" de
 * "code valide mais je n'y ai pas droit" selon la réponse reçue, et s'en
 * servir pour deviner des codes valides par tâtonnement.
 */
export function validerRachat(
  trialCode: TrialCode | null,
  dejaConsomme: boolean,
  abonnementPayantActif: boolean,
): ResultatValidation {
  if (abonnementPayantActif) {
    return { ok: false, status: 400, code: "abonnementActif", erreur: "Vous avez déjà un abonnement actif — inutile d'utiliser un code d'essai." };
  }
  if (dejaConsomme) {
    return { ok: false, status: 409, code: "dejaUtilise", erreur: "Vous avez déjà utilisé un essai." };
  }
  if (!trialCode) {
    return { ok: false, status: 404, code: "introuvable", erreur: "Code introuvable." };
  }
  if (!trialCode.active) {
    return { ok: false, status: 400, code: "inactif", erreur: "Ce code n'est plus actif." };
  }
  if (trialCode.uses_count >= trialCode.max_uses) {
    return { ok: false, status: 400, code: "limiteAtteinte", erreur: "Ce code a atteint sa limite d'utilisations." };
  }
  return { ok: true };
}

/** Compare l'e-mail de l'utilisateur courant à la variable d'environnement ADMIN_EMAIL. */
export function estAdmin(emailUtilisateur: string | undefined, adminEmail: string | undefined): boolean {
  if (!emailUtilisateur || !adminEmail) return false;
  return emailUtilisateur.toLowerCase() === adminEmail.toLowerCase();
}
