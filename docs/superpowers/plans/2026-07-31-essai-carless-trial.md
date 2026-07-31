# Essai gratuit sans CB (codes de trial) — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Let someone redeem a shareable code on a new public `/essai` page and get 14 days of card-less Pro access, with a small admin page for Dany to create/manage codes.

**Architecture:** Two new Supabase tables (`trial_codes`, `trial_redemptions`). A pure, fully-unit-tested validation/generation module (`src/lib/trial-codes.ts`) holds all the business logic (this codebase's convention: pure `src/lib/*.ts` functions get vitest coverage; thin Next.js route handlers wiring up Clerk/Stripe/Supabase do not — see `src/app/api/stripe/checkout/route.ts` and `.../webhook/route.ts`, both untested, for precedent). Route handlers and pages are thin wrappers around that module.

**Tech Stack:** Next.js App Router, Clerk (`@clerk/nextjs/server`), Supabase (`@supabase/supabase-js` via `supabaseAdmin`), vitest.

**Design reference:** `docs/superpowers/specs/2026-07-31-essai-carless-trial-design.md` — read it first if anything below is unclear; it has the full rationale.

---

### Task 1: SQL migration for the new tables

**Files:**
- Create: `scripts/trial-codes-migration.sql`

- [ ] **Step 1: Write the migration file**

```sql
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
```

- [ ] **Step 2: Run it in the Supabase SQL Editor**

This step is manual (Dany runs it against the project's Supabase instance — there is no migration runner in this repo, matching how every other `scripts/*-migration*.sql` file is applied). Confirm with Dany that both tables now appear in the Supabase dashboard's table list before continuing to Task 2.

- [ ] **Step 3: Commit**

```bash
git add scripts/trial-codes-migration.sql
git commit -m "feat(essai): migration SQL pour les codes d'essai sans CB"
```

---

### Task 2: Pure business-logic module + tests

**Files:**
- Create: `src/lib/trial-codes.ts`
- Test: `src/lib/trial-codes.test.ts`

- [ ] **Step 1: Write the failing tests**

```typescript
import { describe, it, expect } from "vitest";
import {
  ESSAI_DUREE_JOURS,
  genererCode,
  calculerExpiration,
  validerRachat,
  estAdmin,
  type TrialCode,
} from "./trial-codes";

describe("genererCode", () => {
  it("génère un code de 8 caractères", () => {
    expect(genererCode()).toHaveLength(8);
  });

  it("n'utilise que des lettres/chiffres non ambigus (pas de 0/O/1/I)", () => {
    const code = genererCode();
    expect(code).toMatch(/^[A-HJ-NP-Z2-9]+$/);
  });

  it("génère des codes différents à chaque appel (probabiliste, mais casse ici serait un vrai bug)", () => {
    const codes = new Set(Array.from({ length: 20 }, () => genererCode()));
    expect(codes.size).toBe(20);
  });
});

describe("calculerExpiration", () => {
  it("ajoute exactement ESSAI_DUREE_JOURS jours à la date donnée", () => {
    const depart = new Date("2026-08-01T00:00:00.000Z");
    const fin = calculerExpiration(depart);
    expect(ESSAI_DUREE_JOURS).toBe(14);
    expect(fin).toBe("2026-08-15T00:00:00.000Z");
  });
});

describe("validerRachat", () => {
  const codeValide: TrialCode = {
    id: "code-1",
    code: "ABCD2FGH",
    max_uses: 5,
    uses_count: 2,
    active: true,
  };

  it("accepte un code actif, sous sa limite, pour un utilisateur qui n'a jamais consommé d'essai", () => {
    expect(validerRachat(codeValide, false)).toEqual({ ok: true });
  });

  it("refuse un code introuvable (null)", () => {
    const res = validerRachat(null, false);
    expect(res).toEqual({ ok: false, status: 404, erreur: "Code introuvable." });
  });

  it("refuse un code désactivé", () => {
    const res = validerRachat({ ...codeValide, active: false }, false);
    expect(res).toEqual({ ok: false, status: 400, erreur: "Ce code n'est plus actif." });
  });

  it("refuse un code ayant atteint sa limite d'utilisations", () => {
    const res = validerRachat({ ...codeValide, uses_count: 5, max_uses: 5 }, false);
    expect(res).toEqual({ ok: false, status: 400, erreur: "Ce code a atteint sa limite d'utilisations." });
  });

  it("refuse un utilisateur ayant déjà consommé un essai (n'importe quel code)", () => {
    const res = validerRachat(codeValide, true);
    expect(res).toEqual({ ok: false, status: 409, erreur: "Vous avez déjà utilisé un essai." });
  });
});

describe("estAdmin", () => {
  it("reconnaît l'e-mail admin, insensible à la casse", () => {
    expect(estAdmin("Dany@Example.com", "dany@example.com")).toBe(true);
  });

  it("refuse un e-mail différent", () => {
    expect(estAdmin("quelquun@ailleurs.com", "dany@example.com")).toBe(false);
  });

  it("refuse si l'e-mail admin n'est pas configuré", () => {
    expect(estAdmin("dany@example.com", undefined)).toBe(false);
  });

  it("refuse si l'e-mail utilisateur est absent", () => {
    expect(estAdmin(undefined, "dany@example.com")).toBe(false);
  });
});
```

- [ ] **Step 2: Run the tests to verify they fail**

Run: `npx vitest run src/lib/trial-codes.test.ts`
Expected: FAIL — `Cannot find module './trial-codes'` (the module doesn't exist yet).

- [ ] **Step 3: Write the implementation**

```typescript
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
```

- [ ] **Step 4: Run the tests to verify they pass**

Run: `npx vitest run src/lib/trial-codes.test.ts`
Expected: PASS, all 13 tests green.

- [ ] **Step 5: Commit**

```bash
git add src/lib/trial-codes.ts src/lib/trial-codes.test.ts
git commit -m "feat(essai): logique pure des codes d'essai (génération, validation)"
```

---

### Task 3: Redemption API route

**Files:**
- Create: `src/app/api/trial/redeem/route.ts`

- [ ] **Step 1: Write the route**

```typescript
/**
 * src/app/api/trial/redeem/route.ts
 * Harmonia — Rachat d'un code d'essai sans CB : accorde 14 jours de plan
 * "pro" en écrivant directement dans user_subscriptions (aucun Stripe
 * impliqué). Toute la logique de validation vit dans lib/trial-codes.ts.
 */

import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { calculerExpiration, validerRachat } from "@/lib/trial-codes";

export async function POST(req: NextRequest) {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: "Non authentifié" }, { status: 401 });
  }

  const { code } = await req.json();
  if (!code || typeof code !== "string") {
    return NextResponse.json({ error: "Code manquant." }, { status: 400 });
  }

  const { data: trialCode } = await supabaseAdmin
    .from("trial_codes")
    .select("id, code, max_uses, uses_count, active")
    .eq("code", code.trim().toUpperCase())
    .single();

  const { data: redemptionExistante } = await supabaseAdmin
    .from("trial_redemptions")
    .select("id")
    .eq("user_id", userId)
    .maybeSingle();

  const validation = validerRachat(trialCode ?? null, !!redemptionExistante);
  if (!validation.ok) {
    return NextResponse.json({ error: validation.erreur }, { status: validation.status });
  }

  // Étape 1 : insérer la ligne de rachat. La contrainte unique sur user_id
  // protège contre un double-appel concurrent du même utilisateur.
  const { data: redemption, error: erreurRedemption } = await supabaseAdmin
    .from("trial_redemptions")
    .insert({ code_id: trialCode!.id, user_id: userId })
    .select("id")
    .single();

  if (erreurRedemption) {
    if (erreurRedemption.code === "23505") {
      return NextResponse.json({ error: "Vous avez déjà utilisé un essai." }, { status: 409 });
    }
    console.error("Erreur insert trial_redemptions:", erreurRedemption);
    return NextResponse.json({ error: "Erreur serveur. Réessayez." }, { status: 500 });
  }

  // Étape 2 : accorder l'accès Pro.
  const { error: erreurSub } = await supabaseAdmin
    .from("user_subscriptions")
    .upsert({
      user_id: userId,
      plan: "pro",
      current_period_end: calculerExpiration(new Date()),
      updated_at: new Date().toISOString(),
    }, { onConflict: "user_id" });

  if (erreurSub) {
    // Compensation : on retire la ligne qu'on vient de créer pour ne pas
    // bloquer définitivement cette personne — elle pourra resoumettre le code.
    await supabaseAdmin.from("trial_redemptions").delete().eq("id", redemption.id);
    console.error("Erreur upsert user_subscriptions (essai):", erreurSub);
    return NextResponse.json({ error: "Erreur serveur. Réessayez." }, { status: 500 });
  }

  // Étape 3 : incrémenter le compteur d'utilisations du code.
  const { error: erreurCompteur } = await supabaseAdmin
    .from("trial_codes")
    .update({ uses_count: trialCode!.uses_count + 1 })
    .eq("id", trialCode!.id);

  if (erreurCompteur) {
    // Non bloquant pour l'utilisateur (son accès Pro est déjà accordé) —
    // juste un compteur d'usage qui restera légèrement sous-évalué.
    console.error("Erreur increment uses_count:", erreurCompteur);
  }

  return NextResponse.json({ ok: true });
}
```

- [ ] **Step 2: Manual smoke test**

No automated test for this route (matches this codebase's existing convention — `src/app/api/stripe/checkout/route.ts` and `.../webhook/route.ts` are equally untested; the logic worth testing already has coverage in Task 2). Verify manually once Task 5 (the `/essai` page) exists, via Step 2 of Task 5.

- [ ] **Step 3: Commit**

```bash
git add src/app/api/trial/redeem/route.ts
git commit -m "feat(essai): route de rachat d'un code d'essai"
```

---

### Task 4: Add `/essai` to the public routes

**Files:**
- Modify: `src/proxy.ts:21-53` (the `isPublicRoute` matcher array)

- [ ] **Step 1: Add the route**

In `src/proxy.ts`, inside the `createRouteMatcher([...])` array, add `"/:locale/essai"` alongside the other public consumer pages:

```typescript
const isPublicRoute = createRouteMatcher([
  "/",
  "/:locale",
  "/:locale/cours(.*)",
  "/:locale/tonalites",
  "/:locale/upgrade",
  "/:locale/essai",
  "/:locale/cursus",
  // ...unchanged below
```

Note: `/api/trial/redeem` must NOT be added anywhere in this list — it needs Clerk auth, and relies on the middleware's existing default-protected behavior (401 JSON for unauthenticated API calls, already implemented at `src/proxy.ts:69-79`).

- [ ] **Step 2: Verify existing behavior is unaffected**

Run: `npx tsc --noEmit`
Expected: same single pre-existing error as before this change (`src/lib/pedagogie-i18n.test.ts(32,24)`), nothing new.

- [ ] **Step 3: Commit**

```bash
git add src/proxy.ts
git commit -m "feat(essai): rend /essai accessible sans compte"
```

---

### Task 5: Public `/essai` page

**Files:**
- Create: `src/app/[locale]/essai/page.tsx`

- [ ] **Step 1: Write the page**

```tsx
"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useParams, useSearchParams } from "next/navigation";
import Link from "next/link";

// `useSearchParams` exige un Suspense boundary en App Router (même convention
// que src/app/[locale]/rejoindre/page.tsx, qui lit aussi un ?code= — sans ce
// wrapper, le build échoue/avertit en production).
function EssaiInner() {
  const params = useParams();
  const locale = (params?.locale as string) ?? "fr";
  const searchParams = useSearchParams();

  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const fromUrl = searchParams?.get("code");
    if (fromUrl) setCode(fromUrl.toUpperCase());
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!code.trim()) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/trial/redeem", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: code.trim() }),
      });
      const data = await res.json();
      if (res.status === 401) {
        const retour = `/${locale}/essai?code=${encodeURIComponent(code.trim())}`;
        window.location.assign(`/${locale}/sign-in?redirect_url=${encodeURIComponent(retour)}`);
        return;
      }
      if (!res.ok) {
        setError(data.error ?? "Une erreur est survenue. Réessayez.");
        return;
      }
      setSuccess(true);
    } catch {
      setError("Erreur réseau. Vérifiez votre connexion et réessayez.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={{ minHeight: "100vh", background: "#f4f1ec", padding: "3rem 1rem" }}>
      <div style={{ maxWidth: 440, margin: "0 auto", fontFamily: "system-ui" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", color: "#9A5F12", textTransform: "uppercase", marginBottom: 8 }}>
            Essai gratuit
          </div>
          <h1 style={{ fontSize: "clamp(24px, 5vw, 32px)", fontWeight: 400, fontFamily: "Georgia, serif", color: "#1a1a1a", margin: "0 0 12px" }}>
            14 jours de Pro, sans carte bancaire
          </h1>
          <p style={{ fontSize: 14, color: "#5f5f5f", lineHeight: 1.6 }}>
            Entrez votre code d'essai pour débloquer tous les cours et les fonctionnalités IA.
          </p>
        </div>

        {success ? (
          <div style={{ background: "#fff", border: "0.5px solid #e0dbd3", borderRadius: 12, padding: "28px 24px", textAlign: "center" }}>
            <div style={{ fontSize: 32, marginBottom: 8 }}>✓</div>
            <div style={{ fontSize: 16, fontWeight: 500, color: "#1a1a1a", marginBottom: 8 }}>
              Votre essai Pro de 14 jours est activé.
            </div>
            <Link
              href={`/${locale}/dashboard`}
              style={{ display: "inline-block", marginTop: 8, padding: "10px 24px", borderRadius: 6, background: "#1a1a1a", color: "#fff", fontSize: 14, fontWeight: 500, textDecoration: "none" }}
            >
              Aller au tableau de bord
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ background: "#fff", border: "0.5px solid #e0dbd3", borderRadius: 12, padding: "24px" }}>
            <label htmlFor="code" style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#5f5f5f", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.04em" }}>
              Code d'essai
            </label>
            <input
              id="code"
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value.toUpperCase())}
              placeholder="ABCD2FGH"
              style={{ width: "100%", padding: "12px 14px", borderRadius: 6, border: "1px solid #c8c4bc", fontSize: 16, fontFamily: "monospace", letterSpacing: "0.1em", boxSizing: "border-box", marginBottom: 16 }}
              autoFocus
            />
            {error && (
              <div style={{ padding: "10px 14px", background: "#FFF5F5", border: "0.5px solid #FC8181", borderRadius: 8, fontSize: 13, color: "#C53030", marginBottom: 16 }}>
                {error}
              </div>
            )}
            <button
              type="submit"
              disabled={loading || !code.trim()}
              style={{ width: "100%", padding: "12px", borderRadius: 6, border: "none", background: "#1a1a1a", color: "#fff", fontSize: 14, fontWeight: 500, cursor: loading ? "wait" : "pointer", opacity: loading || !code.trim() ? 0.7 : 1 }}
            >
              {loading ? "Vérification..." : "Activer mon essai"}
            </button>
          </form>
        )}

        <div style={{ textAlign: "center", marginTop: 20 }}>
          <Link href={`/${locale}/upgrade`} style={{ fontSize: 12, color: "#767676", textDecoration: "none" }}>
            Pas de code ? Voir les tarifs →
          </Link>
        </div>
      </div>
    </main>
  );
}

export default function EssaiPage() {
  return (
    <Suspense fallback={null}>
      <EssaiInner />
    </Suspense>
  );
}
```

- [ ] **Step 2: Manual smoke test (also covers Task 3's route)**

1. Run the dev server: `npm run dev`
2. In the Supabase SQL Editor, insert a test code:
   `insert into trial_codes (code, max_uses) values ('TESTCODE', 3);`
3. Visit `/fr/essai` while signed out. Confirm the form renders.
4. Submit `TESTCODE`. Confirm redirect to sign-in with `redirect_url` pointing back to `/fr/essai?code=TESTCODE`.
5. Sign in (or create a test account). Confirm you land back on `/fr/essai` with the code pre-filled, and submitting shows the success state.
6. In Supabase, confirm: `user_subscriptions` has a row for your test user with `plan = 'pro'` and `current_period_end` ≈ 14 days out; `trial_redemptions` has one new row; `trial_codes.uses_count` is now `1`.
7. Submit `TESTCODE` again with the same account. Confirm a 409-style error ("Vous avez déjà utilisé un essai.") is shown instead of a second success.
8. Visit `/fr/cours/10` (a paid-only course) with that account. Confirm it's now accessible (plan-gating already reads `user_subscriptions` — no code change needed here, this just confirms the existing gating logic recognizes the trial row).

- [ ] **Step 3: Commit**

```bash
git add "src/app/[locale]/essai/page.tsx"
git commit -m "feat(essai): page publique de rachat de code d'essai"
```

---

### Task 6: Admin API routes (list, create, toggle)

**Files:**
- Create: `src/app/api/admin/trial-codes/route.ts`
- Create: `src/app/api/admin/trial-codes/[id]/route.ts`

- [ ] **Step 1: Write the list + create route**

```typescript
/**
 * src/app/api/admin/trial-codes/route.ts
 * Harmonia — Admin : lister et créer des codes d'essai. Réservé au compte
 * dont l'e-mail correspond à la variable d'environnement ADMIN_EMAIL.
 */

import { auth, currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { estAdmin, genererCode } from "@/lib/trial-codes";

async function verifierAdmin() {
  const { userId } = await auth();
  if (!userId) return { ok: false as const, status: 401 };
  const user = await currentUser();
  const email = user?.emailAddresses[0]?.emailAddress;
  if (!estAdmin(email, process.env.ADMIN_EMAIL)) return { ok: false as const, status: 403 };
  return { ok: true as const };
}

export async function GET() {
  const verif = await verifierAdmin();
  if (!verif.ok) {
    return NextResponse.json({ error: "Accès refusé" }, { status: verif.status });
  }

  const { data, error } = await supabaseAdmin
    .from("trial_codes")
    .select("id, code, max_uses, uses_count, active, created_at")
    .order("created_at", { ascending: false });

  if (error) {
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
  return NextResponse.json({ codes: data });
}

export async function POST(req: NextRequest) {
  const verif = await verifierAdmin();
  if (!verif.ok) {
    return NextResponse.json({ error: "Accès refusé" }, { status: verif.status });
  }

  const body = await req.json().catch(() => ({}));
  const codePersonnalise: string | undefined = body?.code?.trim().toUpperCase();
  const maxUses: number = Number.isInteger(body?.max_uses) && body.max_uses > 0 ? body.max_uses : 1;

  const { data, error } = await supabaseAdmin
    .from("trial_codes")
    .insert({ code: codePersonnalise || genererCode(), max_uses: maxUses })
    .select("id, code, max_uses, uses_count, active, created_at")
    .single();

  if (error) {
    if (error.code === "23505") {
      return NextResponse.json({ error: "Ce code existe déjà." }, { status: 409 });
    }
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
  return NextResponse.json({ code: data });
}
```

- [ ] **Step 2: Write the toggle-active route**

```typescript
/**
 * src/app/api/admin/trial-codes/[id]/route.ts
 * Harmonia — Admin : activer/désactiver un code d'essai existant.
 */

import { auth, currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { estAdmin } from "@/lib/trial-codes";

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: "Accès refusé" }, { status: 401 });
  }
  const user = await currentUser();
  const email = user?.emailAddresses[0]?.emailAddress;
  if (!estAdmin(email, process.env.ADMIN_EMAIL)) {
    return NextResponse.json({ error: "Accès refusé" }, { status: 403 });
  }

  const { id } = await params;
  const { active } = await req.json();
  if (typeof active !== "boolean") {
    return NextResponse.json({ error: "Champ 'active' manquant." }, { status: 400 });
  }

  const { error } = await supabaseAdmin
    .from("trial_codes")
    .update({ active })
    .eq("id", id);

  if (error) {
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
  return NextResponse.json({ ok: true });
}
```

- [ ] **Step 3: Commit**

```bash
git add src/app/api/admin/trial-codes/route.ts "src/app/api/admin/trial-codes/[id]/route.ts"
git commit -m "feat(essai): routes admin pour créer/lister/activer les codes"
```

---

### Task 7: Admin page

**Files:**
- Create: `src/app/[locale]/admin/essai/page.tsx`

- [ ] **Step 1: Write the page**

```tsx
"use client";

import React, { useState, useEffect, useCallback } from "react";

interface TrialCodeRow {
  id: string;
  code: string;
  max_uses: number;
  uses_count: number;
  active: boolean;
  created_at: string;
}

export default function AdminEssaiPage() {
  const [codes, setCodes] = useState<TrialCodeRow[] | null>(null);
  const [erreurChargement, setErreurChargement] = useState<string | null>(null);
  const [nouveauCode, setNouveauCode] = useState("");
  const [nouveauMaxUses, setNouveauMaxUses] = useState(10);
  const [creation, setCreation] = useState(false);
  const [erreurCreation, setErreurCreation] = useState<string | null>(null);

  const charger = useCallback(async () => {
    const res = await fetch("/api/admin/trial-codes");
    if (!res.ok) {
      setErreurChargement(res.status === 403 ? "Accès refusé." : "Erreur de chargement.");
      return;
    }
    const data = await res.json();
    setCodes(data.codes);
  }, []);

  useEffect(() => { charger(); }, [charger]);

  const creerCode = async (e: React.FormEvent) => {
    e.preventDefault();
    setCreation(true);
    setErreurCreation(null);
    try {
      const res = await fetch("/api/admin/trial-codes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: nouveauCode || undefined, max_uses: nouveauMaxUses }),
      });
      const data = await res.json();
      if (!res.ok) {
        setErreurCreation(data.error ?? "Erreur lors de la création.");
        return;
      }
      setNouveauCode("");
      await charger();
    } finally {
      setCreation(false);
    }
  };

  const toggleActif = async (id: string, active: boolean) => {
    await fetch(`/api/admin/trial-codes/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ active: !active }),
    });
    await charger();
  };

  if (erreurChargement) {
    return <main style={{ padding: "3rem 1rem", textAlign: "center", fontFamily: "system-ui" }}>{erreurChargement}</main>;
  }

  return (
    <main style={{ minHeight: "100vh", background: "#f4f1ec", padding: "3rem 1rem", fontFamily: "system-ui" }}>
      <div style={{ maxWidth: 640, margin: "0 auto" }}>
        <h1 style={{ fontSize: 24, fontWeight: 400, fontFamily: "Georgia, serif", marginBottom: 24 }}>
          Codes d'essai
        </h1>

        <form onSubmit={creerCode} style={{ background: "#fff", border: "0.5px solid #e0dbd3", borderRadius: 10, padding: 20, marginBottom: 24, display: "flex", gap: 12, alignItems: "flex-end", flexWrap: "wrap" }}>
          <div>
            <label style={{ display: "block", fontSize: 12, color: "#5f5f5f", marginBottom: 4 }}>Code (vide = généré)</label>
            <input
              value={nouveauCode}
              onChange={(e) => setNouveauCode(e.target.value.toUpperCase())}
              placeholder="NEWSLETTER2026"
              style={{ padding: "8px 10px", borderRadius: 6, border: "1px solid #c8c4bc", fontFamily: "monospace" }}
            />
          </div>
          <div>
            <label style={{ display: "block", fontSize: 12, color: "#5f5f5f", marginBottom: 4 }}>Utilisations max</label>
            <input
              type="number"
              min={1}
              value={nouveauMaxUses}
              onChange={(e) => setNouveauMaxUses(Number(e.target.value))}
              style={{ padding: "8px 10px", borderRadius: 6, border: "1px solid #c8c4bc", width: 100 }}
            />
          </div>
          <button
            type="submit"
            disabled={creation}
            style={{ padding: "9px 18px", borderRadius: 6, border: "none", background: "#1a1a1a", color: "#fff", fontSize: 14, cursor: "pointer" }}
          >
            {creation ? "Création..." : "Créer"}
          </button>
          {erreurCreation && <div style={{ color: "#C53030", fontSize: 13 }}>{erreurCreation}</div>}
        </form>

        <div style={{ background: "#fff", border: "0.5px solid #e0dbd3", borderRadius: 10, overflow: "hidden" }}>
          {codes === null ? (
            <div style={{ padding: 20, fontSize: 13, color: "#767676" }}>Chargement…</div>
          ) : codes.length === 0 ? (
            <div style={{ padding: 20, fontSize: 13, color: "#767676" }}>Aucun code pour l'instant.</div>
          ) : (
            codes.map((c) => (
              <div key={c.id} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px", borderBottom: "0.5px solid #eee" }}>
                <div>
                  <div style={{ fontFamily: "monospace", fontSize: 15, fontWeight: 600 }}>{c.code}</div>
                  <div style={{ fontSize: 12, color: "#767676" }}>{c.uses_count} / {c.max_uses} utilisations</div>
                </div>
                <button
                  onClick={() => toggleActif(c.id, c.active)}
                  style={{ padding: "6px 14px", borderRadius: 20, border: "1px solid #c8c4bc", background: c.active ? "#0F6E56" : "#e0dbd3", color: c.active ? "#fff" : "#5f5f5f", fontSize: 12, cursor: "pointer" }}
                >
                  {c.active ? "Actif" : "Inactif"}
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </main>
  );
}
```

- [ ] **Step 2: Set the ADMIN_EMAIL environment variable**

Add `ADMIN_EMAIL=<l'adresse e-mail du compte Clerk de Dany>` to the Vercel project's environment variables (and to local `.env.local` for testing). This step is manual — confirm with Dany which email/account to use before finishing this task.

- [ ] **Step 3: Manual smoke test**

1. Sign in with the account matching `ADMIN_EMAIL`. Visit `/fr/admin/essai`. Confirm the page loads and lists existing codes (including `TESTCODE` from Task 5 if not cleaned up).
2. Create a new code with a custom name and `max_uses: 2`. Confirm it appears in the list.
3. Toggle it inactive, refresh, confirm it stays inactive. Toggle it back active.
4. Sign in with a DIFFERENT (non-admin) account and visit `/fr/admin/essai`. Confirm it shows "Accès refusé." rather than the code list.

- [ ] **Step 4: Commit**

```bash
git add "src/app/[locale]/admin/essai/page.tsx"
git commit -m "feat(essai): page admin de gestion des codes d'essai"
```

---

### Task 8: Full verification pass

- [ ] **Step 1: Run the full test suite**

Run: `npx vitest run`
Expected: all existing tests still pass, plus the 13 new tests from Task 2.

- [ ] **Step 2: Typecheck**

Run: `npx tsc --noEmit`
Expected: only the single pre-existing unrelated error (`src/lib/pedagogie-i18n.test.ts(32,24)`).

- [ ] **Step 3: Clean up test data**

In the Supabase SQL Editor, remove the `TESTCODE` row and its associated `trial_redemptions`/`user_subscriptions` test rows created during manual smoke testing in Tasks 5 and 7, so they don't linger in production data.

---

## Self-Review Notes

- **Spec coverage**: all 6 numbered decisions in the design doc are implemented — dedicated `/essai` page (Task 5), shareable multi-use codes (`max_uses`/`uses_count`, Tasks 1–3), one-trial-per-person via the unique constraint (Tasks 1, 3), fixed Pro/14-day grant (Task 3, `ESSAI_DUREE_JOURS`), admin page for code creation (Tasks 6–7), multi-account limitation explicitly left unaddressed (noted in design doc, not reintroduced here).
- **No placeholders**: every step has real code, not descriptions of code.
- **Type consistency checked**: `TrialCode` (lib) has `id, code, max_uses, uses_count, active` — matches the columns selected in both the redeem route (Task 3) and the admin list route (Task 6, plus `created_at` which the lib type doesn't need). `ResultatValidation`'s `erreur`/`status` fields are read the same way in Task 3's route as they're produced in Task 2's `validerRachat`.
- **Sequencing**: Task 4 (public route) must land before or alongside Task 5, since visiting `/essai` while signed out needs the middleware change to render the page shell at all — kept as separate tasks for clean commits, but Task 5's smoke test depends on Task 4 being done.
