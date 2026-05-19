-- Harmonia Conservatoire — Migration SQL
-- À exécuter dans le Supabase SQL Editor

-- ── Tables ────────────────────────────────────────────────────────────────────

create table if not exists classes (
  id uuid default gen_random_uuid() primary key,
  prof_id text not null,
  nom text not null,
  description text,
  code_acces text unique not null,
  created_at timestamptz default now()
);

create table if not exists classe_eleves (
  id uuid default gen_random_uuid() primary key,
  classe_id uuid references classes(id) on delete cascade,
  eleve_id text not null,
  joined_at timestamptz default now(),
  unique(classe_id, eleve_id)
);

create table if not exists devoirs (
  id uuid default gen_random_uuid() primary key,
  classe_id uuid references classes(id) on delete cascade,
  prof_id text not null,
  titre text not null,
  type text not null,
  reference_id text,
  date_limite timestamptz,
  created_at timestamptz default now()
);

create table if not exists soumissions (
  id uuid default gen_random_uuid() primary key,
  devoir_id uuid references devoirs(id) on delete cascade,
  eleve_id text not null,
  contenu jsonb,
  note integer,
  commentaire text,
  submitted_at timestamptz default now(),
  corrected_at timestamptz
);

-- ── Row Level Security ────────────────────────────────────────────────────────

alter table classes       enable row level security;
alter table classe_eleves enable row level security;
alter table devoirs        enable row level security;
alter table soumissions    enable row level security;

-- Service role (used by supabaseAdmin) bypasses RLS — policies below are for
-- direct anon/authenticated access if ever needed.

-- classes: prof sees only their own classes
create policy "prof_classes" on classes
  for all using (prof_id = current_setting('request.jwt.claims', true)::jsonb->>'sub');

-- classe_eleves: elève sees their own memberships; prof sees their class members
create policy "eleve_classe_eleves" on classe_eleves
  for select using (
    eleve_id = current_setting('request.jwt.claims', true)::jsonb->>'sub'
    or classe_id in (
      select id from classes
      where prof_id = current_setting('request.jwt.claims', true)::jsonb->>'sub'
    )
  );

create policy "eleve_insert_classe_eleves" on classe_eleves
  for insert with check (
    eleve_id = current_setting('request.jwt.claims', true)::jsonb->>'sub'
  );

-- devoirs: prof and their elèves can read; only prof can write
create policy "read_devoirs" on devoirs
  for select using (
    prof_id = current_setting('request.jwt.claims', true)::jsonb->>'sub'
    or classe_id in (
      select classe_id from classe_eleves
      where eleve_id = current_setting('request.jwt.claims', true)::jsonb->>'sub'
    )
  );

create policy "prof_write_devoirs" on devoirs
  for insert with check (
    prof_id = current_setting('request.jwt.claims', true)::jsonb->>'sub'
  );

-- soumissions: elève sees their own; prof sees all in their classes
create policy "read_soumissions" on soumissions
  for select using (
    eleve_id = current_setting('request.jwt.claims', true)::jsonb->>'sub'
    or devoir_id in (
      select id from devoirs
      where prof_id = current_setting('request.jwt.claims', true)::jsonb->>'sub'
    )
  );

create policy "eleve_insert_soumissions" on soumissions
  for insert with check (
    eleve_id = current_setting('request.jwt.claims', true)::jsonb->>'sub'
  );

create policy "prof_update_soumissions" on soumissions
  for update using (
    devoir_id in (
      select id from devoirs
      where prof_id = current_setting('request.jwt.claims', true)::jsonb->>'sub'
    )
  );
