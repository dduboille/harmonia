-- Harmonia — Migration : licences d'établissement
-- À exécuter dans le Supabase SQL Editor AVANT de déployer le code. Idempotent.
--
-- POURQUOI. Jusqu'ici, tout droit d'accès était porté par `user_subscriptions`,
-- une ligne par personne, écrite par Stripe ou par un code d'essai. Rien ne
-- permettait qu'un établissement paie POUR ses élèves : rejoindre une classe
-- servait au suivi de progression et n'accordait aucun droit. Un conservatoire
-- qui aurait payé aurait vu ses élèves rester bloqués derrière le paywall.
--
-- CE QUE ÇA AJOUTE. Un établissement, une ou plusieurs licences (un nombre de
-- sièges et une période), et le rattachement des classes à l'établissement.
-- L'accès d'un élève découle alors de son appartenance à une classe rattachée à
-- un établissement dont la licence court.

create table if not exists etablissements (
  id uuid default gen_random_uuid() primary key,
  nom text not null,
  -- CRR, CRD, CRI, CRC, école agréée, université, autre. Texte libre : la
  -- nomenclature change, et on ne veut pas d'une migration pour un nouveau cas.
  type text,
  contact_nom text,
  contact_email text,
  -- Facturation : une collectivité exige un SIRET et une adresse sur la facture.
  siret text,
  adresse_facturation text,
  notes text,
  created_at timestamptz default now()
);

-- Une licence = N sièges sur une période. Un établissement peut en avoir
-- plusieurs (renouvellement d'année en année, ou extension en cours d'année).
create table if not exists licences (
  id uuid default gen_random_uuid() primary key,
  etablissement_id uuid not null references etablissements(id) on delete cascade,
  sieges integer not null check (sieges > 0),
  valid_from date not null,
  valid_until date not null,
  -- active | suspendue | annulee. Une licence impayée se suspend sans se perdre.
  statut text not null default 'active',
  -- Référence du devis ou du bon de commande, pour retrouver le dossier.
  reference text,
  created_at timestamptz default now(),
  check (valid_until >= valid_from)
);

-- Le rattachement d'une classe à son établissement. NULL = classe personnelle,
-- créée par un professeur pour lui-même : le comportement actuel, préservé.
alter table classes add column if not exists etablissement_id uuid
  references etablissements(id) on delete set null;

-- Les deux lectures chaudes : « cet utilisateur est-il couvert ? » remonte de
-- classe_eleves vers classes puis licences.
create index if not exists idx_classes_etablissement on classes(etablissement_id);
create index if not exists idx_licences_etablissement on licences(etablissement_id);

-- ── Traçabilité de l'origine d'un droit ─────────────────────────────────────
--
-- `user_subscriptions` ne disait pas POURQUOI quelqu'un était « pro » : achat
-- Stripe, code d'essai ou établissement se confondaient. Sans cette colonne, on
-- ne peut ni révoquer en masse à la fin d'une licence, ni mesurer d'où vient
-- l'usage. `stripe` par défaut : c'est ce qu'étaient toutes les lignes existantes
-- écrites par le webhook.
alter table user_subscriptions add column if not exists source text default 'stripe';

-- ── Suivi commercial ────────────────────────────────────────────────────────
--
-- Les demandes de devis ne partaient qu'en e-mail : un envoi perdu, et le
-- prospect avec. On les persiste, avec leur état d'avancement.
create table if not exists demandes_etablissement (
  id uuid default gen_random_uuid() primary key,
  nom text not null,
  email text not null,
  etablissement text not null,
  fonction text,
  ville text,
  pays text,
  nb_eleves text,
  message text,
  -- nouveau | contacte | devis_envoye | signe | perdu
  statut text not null default 'nouveau',
  -- Rempli quand la demande aboutit, pour relier le prospect au client.
  etablissement_id uuid references etablissements(id) on delete set null,
  notes text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create index if not exists idx_demandes_statut on demandes_etablissement(statut, created_at desc);

-- RLS : comme les tables conservatoire existantes, tout passe par la clé de
-- service côté serveur ; on active quand même pour ne rien exposer par défaut.
alter table etablissements enable row level security;
alter table licences enable row level security;
alter table demandes_etablissement enable row level security;
