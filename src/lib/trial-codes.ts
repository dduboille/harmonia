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

export type ResultatValidation =
  | { ok: true }
  | { ok: false; status: 404 | 400 | 409; erreur: string };

/**
 * Valide un rachat de code AVANT toute écriture. `dejaConsomme` doit être
 * calculé par l'appelant (une ligne dans trial_redemptions pour ce user_id,
 * tous codes confondus).
 */
export function validerRachat(
  trialCode: TrialCode | null,
  dejaConsomme: boolean,
): ResultatValidation {
  if (!trialCode) {
    return { ok: false, status: 404, erreur: "Code introuvable." };
  }
  if (!trialCode.active) {
    return { ok: false, status: 400, erreur: "Ce code n'est plus actif." };
  }
  if (trialCode.uses_count >= trialCode.max_uses) {
    return { ok: false, status: 400, erreur: "Ce code a atteint sa limite d'utilisations." };
  }
  if (dejaConsomme) {
    return { ok: false, status: 409, erreur: "Vous avez déjà utilisé un essai." };
  }
  return { ok: true };
}

/** Compare l'e-mail de l'utilisateur courant à la variable d'environnement ADMIN_EMAIL. */
export function estAdmin(emailUtilisateur: string | undefined, adminEmail: string | undefined): boolean {
  if (!emailUtilisateur || !adminEmail) return false;
  return emailUtilisateur.toLowerCase() === adminEmail.toLowerCase();
}
