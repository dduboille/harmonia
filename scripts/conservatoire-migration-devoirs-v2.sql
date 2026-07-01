-- Harmonia Conservatoire — Migration v2 (devoirs : statut / date de début / assignation individuelle)
-- À exécuter dans le Supabase SQL Editor AVANT de déployer le code correspondant.
-- Idempotent : peut être relancé sans risque.

-- Statut de publication : 'brouillon' ou 'publie'. Défaut 'publie' pour que les
-- devoirs existants restent visibles (rétrocompatibilité).
alter table devoirs add column if not exists statut text not null default 'publie';

-- Date de début : tant qu'elle est dans le futur, le devoir n'apparaît pas à l'élève.
alter table devoirs add column if not exists date_debut timestamptz;

-- Assignation individuelle : NULL = toute la classe ; sinon l'id Clerk d'un élève.
alter table devoirs add column if not exists eleve_id text;

-- (Optionnel) La visibilité fine est appliquée côté application (service role).
-- Si un accès direct authenticated était activé, la policy de lecture pourrait
-- être renforcée pour respecter statut / date_debut / eleve_id.
