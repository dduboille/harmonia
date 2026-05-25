# Commercialisation Harmonia — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Préparer Harmonia pour la commercialisation en appliquant 7 points de polish : formulaire de contact conservatoire, SEO metadata, sitemap, section Outils landing, badges Nouveau dashboard, email de bienvenue mis à jour, et build final propre.

**Architecture:** 8 tâches indépendantes — 2 nouveaux fichiers (API route + composant formulaire), 1 nouveau layout, modifications ciblées de 8 fichiers existants. Aucune refactorisation, aucun état global.

**Tech Stack:** Next.js App Router, React 18, Resend (emails), TypeScript strict, 100 % styles inline.

---

## Fichiers

| Fichier | Statut | Tâche |
|---|---|---|
| `src/app/api/contact-conservatoire/route.ts` | Créer | 1 |
| `src/components/ContactConservatoireForm.tsx` | Créer | 2 |
| `src/app/[locale]/conservatoire/page.tsx` | Modifier | 2 & 3 |
| `src/app/[locale]/notes-etrangeres/page.tsx` | Modifier | 3 |
| `src/app/[locale]/generateur-satb/page.tsx` | Modifier | 3 |
| `src/app/[locale]/composition/page.tsx` | Modifier | 3 |
| `src/app/[locale]/editeur-melodique/page.tsx` | Modifier | 3 |
| `src/app/[locale]/dictee/layout.tsx` | Créer | 3 |
| `src/app/sitemap.ts` | Modifier | 4 |
| `src/app/[locale]/page.tsx` | Modifier | 5 |
| `src/app/[locale]/dashboard/page.tsx` | Modifier | 6 |
| `src/app/api/webhooks/clerk/route.ts` | Modifier | 7 |

---

## Task 1 : API route `/api/contact-conservatoire`

**Files:**
- Create: `src/app/api/contact-conservatoire/route.ts`

- [ ] **Step 1 : Créer le fichier**

```typescript
// src/app/api/contact-conservatoire/route.ts
import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { nom, email, etablissement, nbEleves, message } = await req.json();

    if (!nom || !email || !etablissement || !message) {
      return NextResponse.json({ error: "Champs requis manquants" }, { status: 400 });
    }
    if (!email.includes("@")) {
      return NextResponse.json({ error: "Email invalide" }, { status: 400 });
    }

    // Email interne → contact@getharmonia.app
    await resend.emails.send({
      from: "Harmonia <bonjour@getharmonia.app>",
      to: "contact@getharmonia.app",
      replyTo: email,
      subject: `Demande démo conservatoire — ${etablissement}`,
      html: `
<div style="font-family:system-ui,sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#f4f1ec;">
  <h2 style="font-size:22px;font-weight:700;color:#1a1a1a;margin:0 0 24px;">Nouvelle demande de démonstration</h2>
  <table cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse;">
    ${[
      ["Nom", nom],
      ["Email", email],
      ["Établissement", etablissement],
      ["Nombre d'élèves", nbEleves || "Non précisé"],
      ["Message", message],
    ].map(([label, val]) => `
    <tr>
      <td style="padding:10px 0;border-bottom:0.5px solid #e8e3db;font-size:13px;color:#888;width:140px;vertical-align:top;">${label}</td>
      <td style="padding:10px 0;border-bottom:0.5px solid #e8e3db;font-size:14px;color:#1a1a1a;vertical-align:top;">${val}</td>
    </tr>`).join("")}
  </table>
</div>
      `,
    });

    // Email de confirmation → expéditeur
    await resend.emails.send({
      from: "Harmonia <bonjour@getharmonia.app>",
      to: email,
      subject: "Votre demande de démonstration Harmonia",
      html: `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f4f1ec;font-family:Georgia,serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f1ec;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">
        <tr>
          <td style="text-align:center;padding:40px 0 32px;">
            <span style="font-size:28px;font-weight:700;color:#1a1a1a;letter-spacing:-0.02em;">
              Harmonia<span style="color:#BA7517;">.</span>
            </span>
          </td>
        </tr>
        <tr>
          <td style="background:#fff;border-radius:12px;border:0.5px solid #e8e3db;padding:48px 40px;">
            <p style="font-size:13px;font-weight:600;letter-spacing:0.1em;color:#2D5A8E;text-transform:uppercase;margin:0 0 16px;font-family:system-ui,sans-serif;">
              Demande reçue
            </p>
            <h1 style="font-size:28px;font-weight:400;color:#1a1a1a;margin:0 0 20px;line-height:1.2;letter-spacing:-0.02em;">
              Merci, ${nom} 🎵
            </h1>
            <p style="font-size:16px;color:#555;line-height:1.8;margin:0 0 24px;font-family:system-ui,sans-serif;">
              Nous avons bien reçu votre demande de démonstration pour
              <strong>${etablissement}</strong>.
              Notre équipe reviendra vers vous sous 48 heures ouvrées.
            </p>
            <hr style="border:none;border-top:0.5px solid #e8e3db;margin:28px 0;">
            <p style="font-size:14px;color:#888;line-height:1.6;margin:0;font-family:system-ui,sans-serif;">
              En attendant, vous pouvez créer gratuitement votre première classe et inviter
              jusqu'à 10 élèves sur
              <a href="https://www.getharmonia.app/fr/prof" style="color:#2D5A8E;">getharmonia.app/fr/prof</a>.
            </p>
          </td>
        </tr>
        <tr>
          <td style="text-align:center;padding:32px 0 0;">
            <p style="font-size:12px;color:#bbb;font-family:system-ui,sans-serif;margin:0;">
              © 2026 Harmonia · <a href="https://www.getharmonia.app" style="color:#bbb;">getharmonia.app</a>
            </p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("contact-conservatoire error:", err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
```

- [ ] **Step 2 : Vérifier TypeScript**

```bash
npx tsc --noEmit
```

Expected : exit 0, aucune erreur.

- [ ] **Step 3 : Commit**

```bash
git add src/app/api/contact-conservatoire/route.ts
git commit -m "feat: API route /api/contact-conservatoire — Resend dual-send"
```

---

## Task 2 : Formulaire de contact + intégration page conservatoire

**Files:**
- Create: `src/components/ContactConservatoireForm.tsx`
- Modify: `src/app/[locale]/conservatoire/page.tsx`

- [ ] **Step 1 : Créer le composant client `ContactConservatoireForm`**

```tsx
"use client";
// src/components/ContactConservatoireForm.tsx
import React, { useState } from "react";

const ACCENT = "#2D5A8E";

export default function ContactConservatoireForm() {
  const [form, setForm] = useState({
    nom: "", email: "", etablissement: "", nbEleves: "", message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");

  const set = (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm(prev => ({ ...prev, [k]: e.target.value }));

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact-conservatoire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "ok" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "ok") {
    return (
      <div style={{ textAlign: "center", padding: "40px 0" }}>
        <div style={{ fontSize: 40, marginBottom: 16 }}>✓</div>
        <h3 style={{
          fontSize: 20, fontWeight: 700, color: "#1a1a1a",
          marginBottom: 8, fontFamily: "Georgia, serif",
        }}>
          Demande envoyée
        </h3>
        <p style={{ fontSize: 15, color: "#666", fontFamily: "system-ui, sans-serif" }}>
          Nous vous répondrons sous 48 h ouvrées.
        </p>
      </div>
    );
  }

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "10px 14px", borderRadius: 8,
    border: "1px solid #d0c8bd", fontSize: 14,
    fontFamily: "system-ui, sans-serif", color: "#1a1a1a",
    background: "#fff", boxSizing: "border-box", outline: "none",
  };
  const labelStyle: React.CSSProperties = {
    fontSize: 12, fontWeight: 600, color: "#555",
    fontFamily: "system-ui, sans-serif", display: "block", marginBottom: 6,
  };

  return (
    <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <div>
          <label style={labelStyle}>Nom *</label>
          <input required value={form.nom} onChange={set("nom")}
            style={inputStyle} placeholder="Sophie Martin" />
        </div>
        <div>
          <label style={labelStyle}>Email *</label>
          <input required type="email" value={form.email} onChange={set("email")}
            style={inputStyle} placeholder="sophie@conservatoire.fr" />
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <div>
          <label style={labelStyle}>Établissement *</label>
          <input required value={form.etablissement} onChange={set("etablissement")}
            style={inputStyle} placeholder="Conservatoire de Lyon" />
        </div>
        <div>
          <label style={labelStyle}>Nombre d'élèves</label>
          <input value={form.nbEleves} onChange={set("nbEleves")}
            style={inputStyle} placeholder="45" />
        </div>
      </div>
      <div>
        <label style={labelStyle}>Message *</label>
        <textarea required value={form.message} onChange={set("message")}
          rows={4} style={{ ...inputStyle, resize: "vertical" }}
          placeholder="Décrivez votre projet pédagogique..." />
      </div>
      {status === "error" && (
        <p style={{ color: "#dc2626", fontSize: 13, fontFamily: "system-ui, sans-serif", margin: 0 }}>
          Une erreur est survenue. Réessayez ou écrivez à contact@getharmonia.app
        </p>
      )}
      <button type="submit" disabled={status === "loading"} style={{
        background: ACCENT, color: "#fff", padding: "13px 28px",
        borderRadius: 8, fontWeight: 700, fontSize: 15,
        border: "none", cursor: status === "loading" ? "wait" : "pointer",
        fontFamily: "system-ui, sans-serif",
        opacity: status === "loading" ? 0.7 : 1, alignSelf: "flex-start",
      }}>
        {status === "loading" ? "Envoi…" : "Envoyer la demande →"}
      </button>
    </form>
  );
}
```

- [ ] **Step 2 : Modifier `conservatoire/page.tsx`**

En haut du fichier, ajouter l'import après `import Link from "next/link"` :

```tsx
import ContactConservatoireForm from "@/components/ContactConservatoireForm";
```

Changer le bouton Hero (ligne ~58) de :
```tsx
<a
  href="mailto:contact@getharmonia.app"
  style={{ ... }}
>
  Demander une démonstration
</a>
```
en :
```tsx
<a
  href="#contact-form"
  style={{
    background: "#fff",
    color: ACCENT,
    padding: "14px 28px",
    borderRadius: 10,
    fontWeight: 700,
    fontSize: 15,
    textDecoration: "none",
  }}
>
  Demander une démonstration
</a>
```

Ajouter une nouvelle section juste avant le commentaire `{/* ── CTA final ───... */}` (avant la section bleue finale) :

```tsx
{/* ── Formulaire de contact ─────────────────────────────── */}
<section id="contact-form" style={{ maxWidth: 680, margin: "0 auto", padding: "72px 24px" }}>
  <h2 style={{
    textAlign: "center",
    fontSize: 28,
    fontWeight: 800,
    color: "#1a1a1a",
    marginBottom: 12,
    fontFamily: "Georgia, serif",
  }}>
    Demander une démonstration
  </h2>
  <p style={{
    textAlign: "center", color: "#666", marginBottom: 40,
    fontSize: 16, fontFamily: "system-ui, sans-serif",
  }}>
    Réponse sous 48 h ouvrées. Sans engagement.
  </p>
  <ContactConservatoireForm />
</section>
```

- [ ] **Step 3 : Vérifier TypeScript**

```bash
npx tsc --noEmit
```

Expected : exit 0.

- [ ] **Step 4 : Commit**

```bash
git add src/components/ContactConservatoireForm.tsx src/app/[locale]/conservatoire/page.tsx
git commit -m "feat: formulaire contact conservatoire avec confirmation Resend"
```

---

## Task 3 : SEO — `export const metadata` sur les 6 pages

**Files:**
- Modify: `src/app/[locale]/notes-etrangeres/page.tsx`
- Modify: `src/app/[locale]/generateur-satb/page.tsx`
- Modify: `src/app/[locale]/composition/page.tsx`
- Modify: `src/app/[locale]/editeur-melodique/page.tsx`
- Modify: `src/app/[locale]/conservatoire/page.tsx`
- Create: `src/app/[locale]/dictee/layout.tsx`

> Note : `dictee/page.tsx` est un composant client (`"use client"`) — impossible d'y exporter `metadata`. On crée un `layout.tsx` serveur dans le même segment, ce qui est le pattern Next.js officiel pour ce cas.

- [ ] **Step 1 : `notes-etrangeres/page.tsx` — ajouter metadata**

Ajouter avant `interface Props` :

```typescript
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notes étrangères — Harmonia",
  description: "Identifiez les notes de passage, broderies, retards et appoggiatures. Exercices interactifs pour maîtriser les ornements harmoniques.",
  openGraph: {
    title: "Notes étrangères — Harmonia",
    description: "Identifiez les notes de passage, broderies, retards et appoggiatures.",
    url: "https://www.getharmonia.app/fr/notes-etrangeres",
    siteName: "Harmonia",
    type: "website",
  },
};
```

- [ ] **Step 2 : `generateur-satb/page.tsx` — ajouter metadata**

Ajouter avant les imports existants :

```typescript
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Générateur SATB — Harmonia",
  description: "Générez et réalisez des exercices d'harmonisation à 4 voix (Soprano, Alto, Ténor, Basse). Validation harmonique en temps réel.",
  openGraph: {
    title: "Générateur SATB — Harmonia",
    description: "Exercices d'harmonisation à 4 voix avec validation harmonique en temps réel.",
    url: "https://www.getharmonia.app/fr/generateur-satb",
    siteName: "Harmonia",
    type: "website",
  },
};
```

- [ ] **Step 3 : `composition/page.tsx` — ajouter metadata**

Ajouter avant les imports existants :

```typescript
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Composition guidée — Harmonia",
  description: "Créez une progression harmonique pas à pas avec l'aide de l'IA. Explorez les substitutions et enchaînements d'accords.",
  openGraph: {
    title: "Composition guidée — Harmonia",
    description: "Créez une progression harmonique pas à pas avec l'aide de l'IA.",
    url: "https://www.getharmonia.app/fr/composition",
    siteName: "Harmonia",
    type: "website",
  },
};
```

- [ ] **Step 4 : `editeur-melodique/page.tsx` — ajouter metadata**

Ajouter avant les imports existants :

```typescript
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Éditeur mélodique — Harmonia",
  description: "Composez et écoutez votre mélodie en temps réel. Éditeur de notes interactif avec rendu audio haute qualité.",
  openGraph: {
    title: "Éditeur mélodique — Harmonia",
    description: "Composez et écoutez votre mélodie en temps réel avec cet éditeur interactif.",
    url: "https://www.getharmonia.app/fr/editeur-melodique",
    siteName: "Harmonia",
    type: "website",
  },
};
```

- [ ] **Step 5 : `conservatoire/page.tsx` — ajouter metadata**

Ajouter avant `import Link from "next/link"` :

```typescript
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Harmonia pour les conservatoires — Outil pédagogique musical",
  description: "Plateforme d'harmonie tonale pour les conservatoires et écoles de musique. Suivez la progression de vos élèves en temps réel.",
  openGraph: {
    title: "Harmonia pour les conservatoires",
    description: "Plateforme d'harmonie tonale pour les conservatoires et écoles de musique.",
    url: "https://www.getharmonia.app/fr/conservatoire",
    siteName: "Harmonia",
    type: "website",
  },
};
```

- [ ] **Step 6 : Créer `dictee/layout.tsx`**

```typescript
// src/app/[locale]/dictee/layout.tsx
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Dictée harmonique — Harmonia",
  description: "Entraînez-vous à identifier les accords et intervalles à l'oreille. Dictée harmonique et dictée d'intervalles interactives.",
  openGraph: {
    title: "Dictée harmonique — Harmonia",
    description: "Identifiez les accords et intervalles à l'oreille avec ces exercices interactifs.",
    url: "https://www.getharmonia.app/fr/dictee",
    siteName: "Harmonia",
    type: "website",
  },
};

export default function DicteeLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
```

- [ ] **Step 7 : Vérifier TypeScript**

```bash
npx tsc --noEmit
```

Expected : exit 0.

- [ ] **Step 8 : Commit**

```bash
git add src/app/[locale]/notes-etrangeres/page.tsx src/app/[locale]/generateur-satb/page.tsx src/app/[locale]/composition/page.tsx src/app/[locale]/editeur-melodique/page.tsx src/app/[locale]/conservatoire/page.tsx src/app/[locale]/dictee/layout.tsx
git commit -m "feat: SEO metadata — 6 nouvelles pages (notes-etrangeres, satb, composition, editeur, dictee, conservatoire)"
```

---

## Task 4 : Sitemap — ajouter les nouvelles routes

**Files:**
- Modify: `src/app/sitemap.ts`

- [ ] **Step 1 : Modifier `sitemap.ts`**

Remplacer le contenu complet par :

```typescript
// src/app/sitemap.ts
import { MetadataRoute } from "next";

const BASE_URL = "https://www.getharmonia.app";
const LOCALES = ["fr", "en", "es", "de", "pt", "it"];
const COURS_IDS = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const TOOL_ROUTES: Array<{ path: string; priority: number }> = [
  { path: "dictee",           priority: 0.8 },
  { path: "notes-etrangeres", priority: 0.8 },
  { path: "generateur-satb",  priority: 0.7 },
  { path: "editeur-melodique", priority: 0.7 },
  { path: "composition",      priority: 0.7 },
  { path: "conservatoire",    priority: 0.9 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of LOCALES) {
    entries.push({
      url: `${BASE_URL}/${locale}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    });
    entries.push({
      url: `${BASE_URL}/${locale}/cours`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    });
    entries.push({
      url: `${BASE_URL}/${locale}/tonalites`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    });
    entries.push({
      url: `${BASE_URL}/${locale}/upgrade`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    });

    for (const route of TOOL_ROUTES) {
      entries.push({
        url: `${BASE_URL}/${locale}/${route.path}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: route.priority,
      });
    }

    for (const id of COURS_IDS) {
      entries.push({
        url: `${BASE_URL}/${locale}/cours/${id}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      });
    }
  }

  return entries;
}
```

- [ ] **Step 2 : Vérifier TypeScript**

```bash
npx tsc --noEmit
```

Expected : exit 0.

- [ ] **Step 3 : Commit**

```bash
git add src/app/sitemap.ts
git commit -m "feat: sitemap — 6 nouvelles routes (dictee, notes-etrangeres, satb, editeur, composition, conservatoire)"
```

---

## Task 5 : Landing page — section "Outils d'entraînement"

**Files:**
- Modify: `src/app/[locale]/page.tsx`

La page est un composant client. La section "Features" (fond blanc) se termine vers la ligne 273. Juste après `</section>` et avant le commentaire `{/* Tarifs */}`, insérer la nouvelle section.

- [ ] **Step 1 : Insérer la section Outils dans `src/app/[locale]/page.tsx`**

Repérer le bloc :
```tsx
        </div>
        </section>

      {/* Tarifs */}
```

Le remplacer par :
```tsx
        </div>
        </section>

      {/* Outils d'entraînement */}
      <section style={{ padding: "80px 2rem", background: "#fff", borderBottom: "0.5px solid #e8e3db" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div style={{ textAlign: "center" as const, marginBottom: 64 }}>
            <div style={{
              fontSize: 11, fontWeight: 600, letterSpacing: "0.15em",
              color: "#5C3D6E", textTransform: "uppercase" as const,
              fontFamily: "system-ui", marginBottom: 12,
            }}>
              Outils d'entraînement
            </div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 400, margin: 0, letterSpacing: "-0.01em" }}>
              5 outils pour pratiquer
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16 }}>
            {([
              { icon: "🎧", title: "Dictée", desc: "Identifiez accords et intervalles à l'oreille", href: `/${locale}/dictee` },
              { icon: "✎", title: "Composition guidée", desc: "Construisez une progression harmonique pas à pas", href: `/${locale}/composition` },
              { icon: "⊞", title: "Générateur SATB", desc: "Harmonisation à 4 voix avec validation temps réel", href: `/${locale}/generateur-satb` },
              { icon: "♩", title: "Éditeur mélodique", desc: "Composez et écoutez votre mélodie", href: `/${locale}/editeur-melodique` },
              { icon: "♪", title: "Notes étrangères", desc: "Passes, broderies, retards, appoggiatures", href: `/${locale}/notes-etrangeres` },
            ] as const).map(tool => (
              <Link key={tool.title} href={tool.href} style={{ textDecoration: "none" }}>
                <div style={{
                  padding: "24px 20px",
                  border: "0.5px solid #e8e3db",
                  borderRadius: 10,
                  background: "#faf8f4",
                  height: "100%",
                  boxSizing: "border-box" as const,
                  cursor: "pointer",
                }}>
                  <div style={{ fontSize: 28, marginBottom: 12, lineHeight: 1 }}>{tool.icon}</div>
                  <h3 style={{ fontSize: 14, fontWeight: 600, margin: "0 0 8px", color: "#1a1a1a", fontFamily: "system-ui, sans-serif" }}>
                    {tool.title}
                  </h3>
                  <p style={{ fontSize: 12, color: "#888", lineHeight: 1.6, margin: 0, fontFamily: "system-ui, sans-serif" }}>
                    {tool.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Tarifs */}
```

- [ ] **Step 2 : Vérifier TypeScript**

```bash
npx tsc --noEmit
```

Expected : exit 0.

- [ ] **Step 3 : Commit**

```bash
git add src/app/[locale]/page.tsx
git commit -m "feat: landing — section Outils d'entraînement (5 cartes entre Features et Tarifs)"
```

---

## Task 6 : Dashboard — badges "Nouveau"

**Files:**
- Modify: `src/app/[locale]/dashboard/page.tsx`

Le dashboard est un Server Component. La logique : un outil est "nouveau" si moins de 30 jours se sont écoulés depuis sa date de création (hardcodée). Le badge est un span orange dans la carte.

- [ ] **Step 1 : Ajouter le helper `isNew` et les dates**

Après la ligne `const COURS_NIVEAU_2 = ...` (vers la ligne 42), ajouter :

```typescript
const TOOL_CREATION_DATES: Record<string, Date> = {
  "composition":      new Date("2026-05-15"),
  "generateur-satb":  new Date("2026-05-15"),
  "notes-etrangeres": new Date("2026-05-19"),
};

function isNew(toolPath: string): boolean {
  const d = TOOL_CREATION_DATES[toolPath];
  if (!d) return false;
  return Date.now() - d.getTime() < 30 * 24 * 60 * 60 * 1000;
}
```

- [ ] **Step 2 : Ajouter les badges sur les 3 cartes**

Dans les cartes Composition guidée, Générateur SATB et Notes étrangères, ajouter le badge "Nouveau" à côté du titre. Le pattern est identique pour les trois cartes :

**Carte Composition guidée** (chercher `{t("compositionTitle")}` dans le fichier) :
```tsx
<div style={{ fontSize: 14, fontWeight: 600, color: "#3D1F7A", marginBottom: 6, display: "flex", alignItems: "center", gap: 8 }}>
  {t("compositionTitle")}
  {isNew("composition") && (
    <span style={{ fontSize: 10, fontWeight: 700, background: "#EA580C", color: "#fff", padding: "2px 7px", borderRadius: 10, letterSpacing: "0.05em" }}>
      Nouveau
    </span>
  )}
</div>
```

**Carte Générateur SATB** (chercher `{t("satbTitle")}`) :
```tsx
<div style={{ fontSize: 14, fontWeight: 600, color: "#185FA5", marginBottom: 6, display: "flex", alignItems: "center", gap: 8 }}>
  {t("satbTitle")}
  {isNew("generateur-satb") && (
    <span style={{ fontSize: 10, fontWeight: 700, background: "#EA580C", color: "#fff", padding: "2px 7px", borderRadius: 10, letterSpacing: "0.05em" }}>
      Nouveau
    </span>
  )}
</div>
```

**Carte Notes étrangères** (chercher `Notes étrangères` — cette carte n'utilise pas t(), c'est du texte inline) :
```tsx
<div style={{ fontSize: 14, fontWeight: 600, color: "#BA7517", marginBottom: 6, display: "flex", alignItems: "center", gap: 8 }}>
  Notes étrangères
  {isNew("notes-etrangeres") && (
    <span style={{ fontSize: 10, fontWeight: 700, background: "#EA580C", color: "#fff", padding: "2px 7px", borderRadius: 10, letterSpacing: "0.05em" }}>
      Nouveau
    </span>
  )}
</div>
```

- [ ] **Step 3 : Vérifier TypeScript**

```bash
npx tsc --noEmit
```

Expected : exit 0.

- [ ] **Step 4 : Commit**

```bash
git add src/app/[locale]/dashboard/page.tsx
git commit -m "feat: dashboard — badge Nouveau sur Composition, SATB, Notes étrangères (expire 30 j)"
```

---

## Task 7 : Email de bienvenue — mentionner les nouveaux outils

**Files:**
- Modify: `src/app/api/webhooks/clerk/route.ts`

L'email actuel liste 3 cours dans "Ce qui t'attend". On ajoute une section "Nouveaux outils" après le `<hr>` de la section cours et avant le CTA.

- [ ] **Step 1 : Ajouter la section outils dans le template HTML**

Dans `src/app/api/webhooks/clerk/route.ts`, repérer le bloc :

```html
              <hr style="border:none;border-top:0.5px solid #e8e3db;margin:28px 0;">

              <!-- CTA -->
```

Le remplacer par :

```html
              <hr style="border:none;border-top:0.5px solid #e8e3db;margin:28px 0;">

              <!-- Nouveaux outils -->
              <p style="font-size:13px;font-weight:600;letter-spacing:0.08em;color:#888;text-transform:uppercase;margin:0 0 16px;font-family:system-ui,sans-serif;">
                Outils d'entraînement
              </p>

              <table width="100%" cellpadding="0" cellspacing="0">
                ${[
                  ["🎧", "Dictée harmonique", "Identifiez les accords et intervalles à l'oreille"],
                  ["⊞", "Générateur SATB", "Exercices d'harmonisation à 4 voix avec validation temps réel"],
                  ["✎", "Composition guidée", "Construisez une progression harmonique pas à pas"],
                  ["♩", "Éditeur mélodique", "Composez et écoutez votre mélodie en temps réel"],
                  ["♪", "Notes étrangères", "Notes de passage, broderies, retards et appoggiatures"],
                ].map(([icon, title, desc]) => \`
                <tr>
                  <td style="padding:8px 0;vertical-align:top;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td width="36" style="font-size:18px;vertical-align:top;padding-top:2px;">\${icon}</td>
                        <td>
                          <p style="margin:0;font-size:13px;font-weight:500;color:#1a1a1a;">\${title}</p>
                          <p style="margin:2px 0 0;font-size:12px;color:#888;font-family:system-ui,sans-serif;">\${desc}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>\`).join("")}
              </table>

              <hr style="border:none;border-top:0.5px solid #e8e3db;margin:28px 0;">

              <!-- CTA -->
```

> Note : les backticks dans `.map()` utilisent `\`` (échappé) car on est déjà dans un template literal.

- [ ] **Step 2 : Vérifier TypeScript**

```bash
npx tsc --noEmit
```

Expected : exit 0.

- [ ] **Step 3 : Commit**

```bash
git add src/app/api/webhooks/clerk/route.ts
git commit -m "feat: email bienvenue — section 5 nouveaux outils d'entraînement"
```

---

## Task 8 : Build final et vérification

**Files:** Aucun

- [ ] **Step 1 : Build complet**

```bash
npm run build
```

Expected : exit 0, aucun warning TypeScript, toutes les routes compilées.

Si des erreurs TypeScript apparaissent : les corriger avant de continuer.

- [ ] **Step 2 : Vérifier le sitemap en local**

Lancer le serveur de preview et visiter `/sitemap.xml` :

```bash
npm run start
```

Visiter `http://localhost:3000/sitemap.xml` — vérifier que les nouvelles routes apparaissent (`/fr/dictee`, `/fr/conservatoire`, etc.).

- [ ] **Step 3 : Commit final si correctif nécessaire**

Si une correction a été apportée au Step 1 :

```bash
git add -p
git commit -m "fix: build — correction erreurs TypeScript commercialisation"
```

---

## Checklist de vérification pré-déploiement

- [ ] `tsc --noEmit` → exit 0
- [ ] `npm run build` → exit 0, 0 warning TypeScript
- [ ] Formulaire conservatoire : POST `/api/contact-conservatoire` renvoie 200
- [ ] Email interne envoyé à contact@getharmonia.app
- [ ] Email de confirmation envoyé à l'expéditeur
- [ ] Page `/fr/conservatoire` : bouton "Demander une démonstration" scrolle vers `#contact-form`
- [ ] 6 pages ont un `<title>` non-vide (vérifier dans le DOM ou via curl)
- [ ] `/sitemap.xml` contient `/fr/dictee`, `/fr/conservatoire`, `/fr/generateur-satb`
- [ ] Landing `/fr` : section "Outils d'entraînement" visible entre Features et Tarifs
- [ ] Dashboard : badge orange "Nouveau" visible sur Composition, SATB, Notes étrangères
- [ ] Email de bienvenue : section "Outils d'entraînement" présente
