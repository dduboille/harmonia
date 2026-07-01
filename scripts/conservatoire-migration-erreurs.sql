-- Harmonia Conservatoire — Migration : suivi des erreurs récurrentes (écriture SATB)
-- À exécuter dans le Supabase SQL Editor. Idempotent.

-- Une ligne par session d'écriture SATB : les types d'erreurs rencontrés,
-- accumulés côté client puis envoyés (même s'ils ont été corrigés avant la remise).
create table if not exists eleve_erreurs (
  id uuid default gen_random_uuid() primary key,
  eleve_id text not null,
  erreurs jsonb not null,          -- { "parallel_fifth": 1, "cross_relation": 1, ... }
  created_at timestamptz default now()
);

-- Accélère l'agrégation par élève (vue prof).
create index if not exists idx_eleve_erreurs_eleve on eleve_erreurs (eleve_id);
