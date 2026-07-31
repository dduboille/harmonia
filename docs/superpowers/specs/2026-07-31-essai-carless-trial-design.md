# Essai gratuit sans CB (codes de trial) — Design

**Statut :** approuvé par Dany le 2026-07-31 ("ok"), en attente du plan d'implémentation.

## Objectif

Aujourd'hui, les codes promo de Dany passent par le champ natif Stripe
(`allow_promotion_codes: true` sur la session Checkout) — ce qui suppose que la
personne aille jusqu'au bout du tunnel de paiement Stripe et y saisisse une
carte, même si le code annule le prix. Dany veut un essai **réellement sans
carte bancaire** : quelqu'un qui a un code doit pouvoir obtenir un accès Pro
temporaire sans jamais passer par Stripe.

## Ce qui existe déjà (contexte, ne pas re-router)

- **Auth** : Clerk (`@clerk/nextjs`). Middleware `src/proxy.ts` : liste blanche
  `isPublicRoute` pour les pages accessibles sans compte ; sinon 401 JSON (API)
  ou redirection vers `/{locale}/sign-in?redirect_url=...` (pages).
- **Abonnements** : Stripe + table Supabase `user_subscriptions` (`user_id`,
  `plan`, `stripe_customer_id`, `stripe_subscription_id`,
  `current_period_end`, `updated_at`).
- **Résolution du plan** : `getUserPlan(userId)` dans `src/lib/progression.ts`
  (lignes ~177-195) — lit `user_subscriptions`, renvoie `"free"` si aucune
  ligne OU si `current_period_end` est dans le passé, sinon normalise `plan`
  via `PLAN_MAP` (`"pro"` → `"pro"`, etc.). **Un essai est donc un simple
  upsert dans cette même table, avec `plan: "pro"` et un `current_period_end`
  dans le futur — aucune modification de `getUserPlan`, `canAccessCours`, ni
  d'aucune page qui vérifie déjà le plan (cours, assistant, analyse-partition,
  progressions, comparateur, profil).**
- **Pattern d'upsert de référence** : `src/app/api/stripe/webhook/route.ts`
  (`supabaseAdmin.from("user_subscriptions").upsert({...}, { onConflict:
  "user_id" })`).
- **Pattern "action protégée depuis une page publique"** : `/upgrade`
  (`src/app/[locale]/upgrade/page.tsx`) appelle `/api/stripe/checkout` ; sur
  401, redirection client `window.location.assign(`/${locale}/sign-in?redirect_url=/${locale}/upgrade`)`.
  Le nouveau flux d'essai réutilise EXACTEMENT ce pattern.
- **Migrations SQL** : convention `scripts/*-migration*.sql`, exécutées à la
  main dans le Supabase SQL Editor avant déploiement (voir
  `scripts/conservatoire-migration-invitations.sql` pour le style : `create
  table if not exists`, `uuid` + `gen_random_uuid()`, index, idempotent,
  commentaires en français).
- **Aucun rôle admin n'existe dans le code** (vérifié : aucune occurrence de
  `ADMIN`, `is_admin`, `role ===`). À créer.

## Décisions produit (déjà tranchées avec Dany)

1. **Parcours** : une page publique dédiée `/{locale}/essai`, accessible AVANT
   inscription. Pas un encart sur `/upgrade`, pas un champ dans `/profil`.
2. **Codes partageables** : un même code peut être utilisé par plusieurs
   personnes différentes, jusqu'à une limite d'utilisations configurable par
   code (`max_uses`).
3. **Anti-abus** : **un essai par personne, une seule fois, tous codes
   confondus.** Un utilisateur qui a déjà consommé un essai (n'importe quel
   code) ne peut pas en redémarrer un second avec un autre code.
4. **Plan et durée** : toujours Pro, toujours 14 jours. Aucun champ "plan" ni
   "durée" par code — un seul réglage global (`ESSAI_DUREE_JOURS`, constante
   de code, pas une colonne).
5. **Création des codes** : une page d'admin dans l'app (pas de SQL manuel à
   chaque code), réservée à Dany.
6. **Limite acceptée, non traitée** : rien n'empêche quelqu'un de créer
   plusieurs comptes Clerk avec des e-mails différents pour reconsommer
   l'essai — déjà vrai de l'inscription gratuite aujourd'hui, donc pas une
   régression. Hors périmètre.

## Schéma de données (nouvelles tables)

```sql
-- scripts/trial-codes-migration.sql (brouillon, à affiner en implémentation)

create table if not exists trial_codes (
  id uuid default gen_random_uuid() primary key,
  code text not null unique,              -- ex. "ABCD2FGH" ou "NEWSLETTER2026"
  max_uses integer not null default 1,     -- nombre de personnes différentes autorisées
  uses_count integer not null default 0,
  active boolean not null default true,    -- désactivation sans suppression
  created_at timestamptz default now()
);

-- Une ligne par (code, utilisateur) : sert à la fois de compteur d'usage
-- ET de verrou anti-répétition (un user_id ne doit apparaître qu'une fois
-- dans toute la table, tous codes confondus).
create table if not exists trial_redemptions (
  id uuid default gen_random_uuid() primary key,
  code_id uuid not null references trial_codes(id) on delete cascade,
  user_id text not null unique,            -- Clerk user id ; unique = 1 essai/personne, à vie
  redeemed_at timestamptz default now()
);

create index if not exists idx_trial_codes_code on trial_codes (code);
```

`user_id text not null unique` sur `trial_redemptions` est la contrainte qui
porte à elle seule la règle "un essai par personne" (décision 3) — un second
essai pour le même `user_id`, quel que soit le code, violerait la contrainte
d'unicité ; la route de rachat doit vérifier ce cas et renvoyer une erreur
utilisateur claire plutôt que de laisser Postgres renvoyer une 500 brute.

## Flux de rachat

1. `GET /{locale}/essai` (nouvelle page, ajoutée à `isPublicRoute` dans
   `src/proxy.ts`) : formulaire avec un champ code. Pré-rempli si l'URL porte
   `?code=XXXX` (utile pour un lien direct type `getharmonia.app/fr/essai?code=NEWSLETTER2026`).
2. Soumission → `POST /api/trial/redeem` avec `{ code }`.
3. Dans la route (NON publique — protégée par le middleware Clerk comme
   toute route `/api/*` non listée) :
   - 401 si pas connecté → la page front-end intercepte ce cas et redirige
     vers `` `/${locale}/sign-in?redirect_url=/${locale}/essai?code=${code}` ``
     (même pattern qu'`/upgrade`), pour revenir sur `/essai` avec le code
     déjà rempli une fois connecté.
   - 404/400 si le code n'existe pas, est inactif, ou a atteint `max_uses`.
   - 409 si le `user_id` courant a déjà une ligne dans `trial_redemptions`
     (essai déjà consommé, tous codes confondus) — message dédié côté front
     ("vous avez déjà utilisé un essai").
   - Sinon, dans cet ordre précis :
     1. `insert` dans `trial_redemptions` (`user_id`, `code_id`). C'est
        l'étape qui protège contre un double-clic/double-appel concurrent du
        même utilisateur : la contrainte unique sur `user_id` fait échouer
        l'un des deux appels avec une erreur Postgres `23505`, AVANT que quoi
        que ce soit d'autre ne soit écrit. Cette erreur précise est traduite
        en 409 "essai déjà utilisé".
     2. Upsert `user_subscriptions` (`plan: "pro"`,
        `current_period_end: now + 14 jours`, `stripe_customer_id` /
        `stripe_subscription_id` laissés `null`).
     3. Incrémente `uses_count` sur `trial_codes`.
   - **Compensation si l'étape 2 ou 3 échoue** après le succès de l'étape 1 :
     supprimer la ligne `trial_redemptions` qui vient d'être créée (`delete
     ... where id = <celle qu'on vient d'insérer>`, pas un delete par
     `user_id`, pour ne jamais toucher une ligne d'un autre essai), puis
     renvoyer une 500 invitant à réessayer. Choix délibéré plutôt qu'un
     retry automatique : plus simple à tester, et l'utilisateur peut relancer
     lui-même en resoumettant le même code.
4. Succès → redirection vers `/{locale}/dashboard?essai=success` (page
   d'accueil affiche un message de bienvenue, pattern similaire à
   `?upgrade=success` déjà utilisé par le checkout Stripe).

## Expiration

Aucune logique nouvelle : `getUserPlan` bascule déjà toute ligne dont
`current_period_end` est dépassée vers `"free"`. Pas de cron, pas de
notification à construire pour cette version.

## Page d'admin (création des codes)

- Nouvelle route protégée, par ex. `/{locale}/admin/essai` — PAS dans
  `isPublicRoute` (donc déjà bloquée à tout utilisateur Clerk non identifié),
  MAIS il faut en plus vérifier que l'utilisateur connecté EST Dany : un
  utilisateur Pro quelconque ne doit pas pouvoir y accéder juste parce qu'il
  est connecté.
- Nouveau garde-fou (n'existe pas encore) : variable d'environnement
  `ADMIN_EMAIL`, comparée à `currentUser().emailAddresses[0].emailAddress`
  (pattern déjà utilisé pour récupérer l'e-mail dans
  `src/app/api/stripe/checkout/route.ts`). Si ça ne correspond pas → 403 /
  redirection.
- Formulaire : générer un code (auto-aléatoire 8 caractères alphanumériques
  majuscules, en excluant les caractères ambigus `0/O`, `1/I` — ou saisie
  manuelle d'un code personnalisé), régler `max_uses`. Liste des codes
  existants avec leur `uses_count`/`max_uses` et un bouton actif/inactif
  (update `active`).

## Hors périmètre (explicitement, pour cette version)

- Pas de plan/durée configurable par code (décision 4).
- Pas de prévention du multi-comptes (limite acceptée, décision 6).
- Pas de notification avant expiration de l'essai.
- Pas de conversion automatique essai → abonnement payant à l'expiration (la
  personne retombe simplement en `"free"`, comme n'importe quel abonnement
  expiré aujourd'hui).

## Tests à prévoir (pour la phase de plan, pas exhaustif ici)

- Rachat réussi : plan passe à `"pro"`, `current_period_end` ≈ maintenant +
  14 jours, `uses_count` incrémenté, ligne `trial_redemptions` créée.
- Code inexistant / inactif / `uses_count >= max_uses` → erreur, aucune
  écriture.
- Deuxième rachat par le même `user_id` (même code ou code différent) →
  erreur 409, aucune écriture supplémentaire.
- Non connecté → 401 depuis la route ; la page `/essai` redirige bien vers
  `sign-in` avec le `code` préservé dans `redirect_url`.
- Après expiration (`current_period_end` dans le passé), `getUserPlan`
  renvoie `"free"` — test de non-régression sur du code déjà existant, pas
  du nouveau code, mais à vérifier explicitement avec une ligne d'essai.
- Échec simulé de l'upsert `user_subscriptions` après succès de l'insert
  `trial_redemptions` → la ligne `trial_redemptions` est bien supprimée
  (compensation), l'utilisateur peut resoumettre le même code ensuite.
- Page admin : 403 pour un compte non-`ADMIN_EMAIL` connecté ; 401 si pas
  connecté du tout.
