/**
 * src/lib/admin.ts
 * Harmonia — Le contrôle du compte d'administration.
 *
 * Cette fonction vivait dans `trial-codes.ts`, où elle n'avait rien à faire :
 * elle n'a jamais rien eu à voir avec les codes d'essai, elle s'y trouvait
 * parce que l'administration des codes fut le premier écran réservé. La
 * disparition du système d'essai la laissait orpheline dans un module qui n'a
 * plus lieu d'être, alors que l'administration des établissements en dépend.
 */

/** Compare l'e-mail de l'utilisateur courant à la variable d'environnement ADMIN_EMAIL. */
export function estAdmin(emailUtilisateur: string | undefined, adminEmail: string | undefined): boolean {
  if (!emailUtilisateur || !adminEmail) return false;
  return emailUtilisateur.toLowerCase() === adminEmail.toLowerCase();
}
