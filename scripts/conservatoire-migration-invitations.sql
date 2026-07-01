-- Harmonia Conservatoire — Migration : import CSV / invitations d'élèves
-- À exécuter dans le Supabase SQL Editor AVANT de déployer le code. Idempotent.

-- Liste d'élèves attendus dans une classe (par e-mail). Rattachement automatique
-- dès que l'élève crée son compte avec cet e-mail (webhook + secours au chargement).
create table if not exists classe_invitations (
  id uuid default gen_random_uuid() primary key,
  classe_id uuid references classes(id) on delete cascade,
  email text not null,
  nom text,
  status text not null default 'pending',   -- 'pending' | 'joined'
  created_at timestamptz default now(),
  unique (classe_id, email)
);

-- Recherche par e-mail (auto-rattachement à l'inscription).
create index if not exists idx_classe_invitations_email on classe_invitations (lower(email));
