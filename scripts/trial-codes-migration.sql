-- Harmonia — Migration : codes d'essai sans carte bancaire
-- À exécuter dans le Supabase SQL Editor AVANT de déployer le code. Idempotent.

create table if not exists trial_codes (
  id uuid default gen_random_uuid() primary key,
  code text not null unique,
  max_uses integer not null default 1,
  uses_count integer not null default 0,
  active boolean not null default true,
  created_at timestamptz default now()
);

-- Une ligne par (code, utilisateur). La contrainte unique sur user_id porte
-- a elle seule la regle "un essai par personne, a vie, tous codes confondus".
create table if not exists trial_redemptions (
  id uuid default gen_random_uuid() primary key,
  code_id uuid not null references trial_codes(id) on delete cascade,
  user_id text not null unique,
  redeemed_at timestamptz default now()
);

create index if not exists idx_trial_codes_code on trial_codes (code);
