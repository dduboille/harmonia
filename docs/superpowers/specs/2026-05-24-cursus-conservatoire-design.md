# Spec — Page vitrine Cursus Conservatoire

**Date :** 2026-05-24  
**Route :** `/[locale]/cursus`  
**Audience :** directeurs et professeurs de conservatoire  
**Ton :** académique, rigoureux, professionnel

---

## Architecture

### Fichiers créés
- `src/app/[locale]/cursus/page.tsx` — page principale `"use client"` (~700 lignes)
- `src/app/api/contact-cursus/route.ts` — API Resend pour le formulaire

### Fichiers modifiés
- `src/app/[locale]/page.tsx` — ajout lien "Cursus" dans nav entre "Tonalités" et `<LanguageSwitcher>`
- `src/components/AppNav.tsx` — ajout `<NavItem>` "🎓 CURSUS" après l'item `comparateur`

### Règles absolues
- 100% styles inline, zéro Tailwind
- Thème : fond `#faf8f4`, serif Georgia, accent `#BA7517`, noir `#1a1a1a`
- Formulaire sans `<form>` HTML — `onClick` handlers uniquement
- `npm run build` + `tsc --noEmit` avant commit
- `vercel --prod` après validation

---

## Page `cursus/page.tsx`

### Pattern général
```tsx
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function CursusPage() {
  const params = useParams();
  const locale = (params?.locale as string) ?? "fr";
  const [openLevels, setOpenLevels] = useState<Set<number>>(new Set());
  const [form, setForm] = useState({ prenom: "", nom: "", etablissement: "",
    ville: "", pays: "", fonction: "Directeur", nbEleves: "", message: "" });
  const [status, setStatus] = useState<"idle"|"loading"|"ok"|"error">("idle");
  // ...
}
```

### State
- `openLevels: Set<number>` — accordion multi-open indépendant (niveaux 1-5)
- `form` — objet avec tous les champs du formulaire
- `status: "idle"|"loading"|"ok"|"error"` — état de soumission

### Toggle accordion
```tsx
function toggleLevel(n: number) {
  setOpenLevels(prev => {
    const s = new Set(prev);
    s.has(n) ? s.delete(n) : s.add(n);
    return s;
  });
}
```

---

## Sections de la page (ordre)

### 1. Hero
- Badge : `"Cursus Conservatoire · Niveaux 1–5"` (style amber comme landing)
- H1 : `"Un cursus d'harmonie de niveau conservatoire — numérique et interactif"`
- Sous-titre : `"Cinq niveaux progressifs, des fondements tonals à l'harmonie contemporaine. Inspiré des grands traités (Dubois, Piston, Schönberg, Aldwell, Gallon, Fux)."`
- CTA principal → ancre `#contact` (noir `#1a1a1a`)
- CTA secondaire → ancre `#programme` (outline)
- Pas d'image de fond — fond `#faf8f4` pur, section centrée

### 2. Philosophie pédagogique
- Titre : `"Former un musicien, pas un empileur d'accords"`
- 3 colonnes (grid 3 colonnes sur desktop) :
  - `"Pourquoi les accords bougent"` — logique acoustique et psychologique
  - `"Écriture réelle à 4 voix"` — conduite des voix dès niveau 1, validation parallélismes
  - `"Analyse du répertoire"` — Bach → Debussy, théorie au service de la musique

### 3. Les 5 niveaux (`id="programme"`)
- Titre de section : `"Programme complet — 5 niveaux progressifs"`
- 5 cartes accordion, multi-open indépendant
- Header de carte : numéro + titre + références pédagogiques + chevron `▼`/`▲`
- Contenu déplié : objectif, niveau visé, liste des modules

**Données des 5 niveaux :**

| # | Titre | Références | Modules |
|---|-------|-----------|---------|
| 1 | Fondements tonals | Dubois · Piston · Gallon | 10 modules |
| 2 | Écriture avancée & modulation | Koechlin · Aldwell & Schachter · Schönberg | 8 modules |
| 3 | Analyse structurelle | Schönberg · Riemann · Aldwell | 7 modules |
| 4 | Harmonie élargie & modernité | Koechlin · Levine · Messiaen | 7 modules |
| 5 | Spécialisations | 5 parcours au choix | — |

### 4. Références pédagogiques
- Titre : `"Fondé sur les grands traités"`
- Grille 3×2 de cartes (6 références) :
  - Dubois — Traité d'harmonie
  - Piston — Harmony
  - Schönberg — Theory of Harmony
  - Aldwell & Schachter — Harmony and Voice Leading
  - Gallon — Précis des règles du contrepoint
  - Levine — The Jazz Theory Book
- Chaque carte : auteur en accent `#BA7517`, titre, usage dans le cursus

### 5. Ce qui distingue Harmonia
- Titre : `"Au-delà du cours d'accords habituel"`
- Tableau comparatif 2 colonnes (Cours internet habituels vs Harmonia Cursus) :

| Critère | Cours internet | Harmonia Cursus |
|---------|---------------|-----------------|
| Contenu | Listes d'accords | Logique harmonique profonde |
| Références | Aucune | 6 grands traités |
| Exercices | Quiz simples | SATB temps réel, analyse, composition |
| Analyse | Absente | Répertoire réel (Bach → Ravel) |
| Évaluation | Score automatique | Correction professeur |
| Écriture | Accords isolés | Conduite des voix intégrée |

### 6. Pour les établissements
- Titre : `"Intégrez Harmonia dans votre enseignement"`
- 3 cartes horizontales :
  - Outil pédagogique complémentaire
  - Classe virtuelle
  - Cursus intégré

### 7. Tarifs établissement
- 3 colonnes :
  - Classe (≤30 élèves) : 199€/an
  - Conservatoire (≤100 élèves) : 499€/an — carte mise en avant (fond `#1a1a1a`, texte blanc)
  - Grand établissement (illimité) : Sur devis
- Notes : `"Chaque élève accède à tout Harmonia Pro + le cursus conservatoire complet"` + `"1 mois d'essai gratuit sur demande"`

### 8. Formulaire (`id="contact"`)
- Titre : `"Demander un accès établissement"`
- Champs :
  - Prénom + Nom (2 colonnes)
  - Email (pleine largeur, requis pour confirmation Resend)
  - Établissement (pleine largeur)
  - Ville + Pays (2 colonnes)
  - Fonction select : Directeur / Professeur / Autre
  - Nombre d'élèves concernés (input number)
  - Message (textarea, optionnel)
- Pas de `<form>` — div + bouton onClick
- Validation client : prenom, nom, etablissement, ville requis
- API : `POST /api/contact-cursus`
- État succès : message de confirmation inline (pas de redirect)

### 9. Footer
- Identique au footer de la landing page
- Ajout de `{ label: "Cursus", href: `/${locale}/cursus` }` dans la liste des liens

---

## API `contact-cursus/route.ts`

Copie du pattern `/api/contact-conservatoire/route.ts` avec adaptations :

**Champs :** `prenom`, `nom`, `email`, `etablissement`, `ville`, `pays`, `fonction`, `nbEleves`, `message`

**Validation :** `prenom + nom + email + etablissement` requis, `email.includes("@")`

**Email interne :** sujet `"Demande accès cursus conservatoire — ${etablissement}"`, to `contact@getharmonia.app`

**Email confirmation :** même template que conservatoire, adapté au contexte cursus

---

## Modifications `AppNav.tsx`

Après l'item `comparateur` (ligne ~202), ajouter :
```tsx
<NavItem href={`/${locale}/cursus`} active={active("cursus")} icon="🎓" label="CURSUS" />
```

## Modifications `page.tsx` (landing)

Dans le `<nav>` fixe, entre le lien `tonalites` et `<LanguageSwitcher>` :
```tsx
<Link href={`/${locale}/cursus`} style={{ fontSize: 13, color: "#666", textDecoration: "none" }}>
  Cursus
</Link>
```

---

## Critères de validation

- [ ] `tsc --noEmit` sans erreur
- [ ] `npm run build` sans erreur
- [ ] Les 5 accordions s'ouvrent/ferment indépendamment
- [ ] Le formulaire envoie sans `<form>` — deux emails Resend reçus
- [ ] Lien "Cursus" visible dans le nav landing + AppNav
- [ ] Footer cursus inclut le lien "Cursus"
- [ ] Styles 100% inline, zéro classe Tailwind
