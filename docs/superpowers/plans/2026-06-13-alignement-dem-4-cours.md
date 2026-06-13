# Alignement DEM — 4 cours · Plan d'implémentation

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Créer 4 nouveaux cours (38–41) alignés sur les attendus DEM écriture, intégralement traduits dans les 6 langues, intégrés au hub et au routeur.

**Architecture:** Chaque cours = un fichier de données `src/data/cours[N]Content.ts` (interface typée, 6 locales), un composant React `src/components/Cours[N].tsx` calqué sur un cours analogue, un câblage routeur + hub, et des clés i18n dans `messages/*.json`. Build → review → correction par cours, puis validation utilisateur avant le cours suivant.

**Tech Stack:** Next.js 16, React 19, TypeScript, next-intl (i18n), VexFlow, Tone.js/PianoPlayer. Pas de framework de test unitaire → vérification par `npx tsc --noEmit`, `npm run lint`, et rendu de route.

**Spec de référence :** `docs/superpowers/specs/2026-06-13-alignement-dem-4-cours-design.md`

---

## AMENDEMENT 2026-06-13 (après checkpoint cours 38) — exigences renforcées

Décisions utilisateur en cours d'exécution, applicables à **TOUS** les cours (38–41) :

1. **Pool de quiz : 80 à 110 questions par cours** (au lieu de 6-8), de difficulté
   progressive, couvrant tous les modules du cours. **Traduit intégralement dans
   les 6 langues** (pas d'héritage du FR) : chaque locale du content file possède
   son propre tableau `questions` traduit. Un sous-ensemble (ex. 10) est tiré par
   session de quiz, comme dans les cours existants.

2. **Exercices reliés au générateur SATB**, 3 à 5 par cours, **adaptés au sujet** :
   - Cours 38 (notes étrangères) → exercices `identify` / `build` (repérer/identifier les notes étrangères).
   - Cours 39 (7èmes d'espèces) → exercices `satb` à 4 voix (réaliser des progressions avec 7e sur divers degrés).
   - Cours 40 (invention à 2 voix) → exercices `identify` / `build` (analyser sujet/réponse, repérer l'imitation).
   - Cours 41 (écriture de style) → exercices `satb` à 4 voix (réalisations de style).

   Intégration via le système existant :
   - Ajouter les objets exercice (types `SATBExercise` / `IdentifyExercise` /
     `BuildExercise` de `src/types/exercise.ts`) dans un nouveau fichier
     `src/exercises/cours38-41-exercises.ts`, agrégé dans
     `src/exercises/all-exercises.ts` (`ALL_EXERCISES`).
   - Ajouter l'entrée du cours dans `COURS_META` de
     `src/app/[locale]/cours/[id]/exercices/page.tsx` (titre + badge).
   - Les solutions SATB (`solution: SATBMeasure[]`) doivent être **musicalement
     correctes** (4 voix, tessitures S=C4-G5/A=G3-C5/T=C3-G4/B=E2-C4, pas de
     quintes/octaves parallèles, sensible résolue, 7e préparée/résolue) — point de
     vigilance majeur pour le reviewer et l'utilisateur.

3. **Citations :** citer précisément les références (au minimum **Dubois** ET
   **Gallon** pour le cours 38 ; références propres à chaque cours sinon).

### Conséquence sur le déroulé de chaque tâche cours

Ordre révisé par cours : (a) build FR — composant + 80-110 questions FR + narrative
+ exercices ; (b) vérif `tsc`/`lint` ; (c) **CHECKPOINT utilisateur** (valide le
contenu FR ET les exercices/solutions) ; (d) traduction intégrale 6 langues du quiz
+ namespaces messages ; (e) `node scripts/check-cours-i18n.mjs N` + `tsc` ; (f) commit.

Le volume du quiz (80-110 × 6 langues) justifie de **scinder la traduction par
langue** (un sous-agent par langue, ou par lots), pour rester dans les limites de
contexte.

---

## Référence partagée (à lire avant toute tâche)

### Anatomie d'un cours existant

Un cours `N` repose sur :

1. **`src/data/cours[N]Content.ts`** — données pédagogiques structurées. Interface typée + un objet par locale + un export `Record<string, ...>` final. Exemple de pied de fichier (cours1) :
   ```ts
   export const cours1Content: Record<string, Cours1Locale> = {
     fr: { degrees: degreesFr, intervals: intervalsFr, questions: questionsFr },
     en: { degrees: degreesEn, intervals: intervalsEn, questions: questionsEn },
     es: { degrees: degreesEs, intervals: intervalsEs, questions: questionsFr },
     de: { degrees: degreesDe, intervals: intervalsDe, questions: questionsFr },
     it: { degrees: degreesIt, intervals: intervalsIt, questions: questionsFr },
     pt: { degrees: degreesPt, intervals: intervalsPt, questions: questionsFr },
   };
   ```

2. **`src/components/Cours[N].tsx`** — composant `"use client"`. Importe `useCoursI18n("cours[N]")`, `useCoursContent(cours[N]Content)`, `useTerm`, et selon le besoin `PianoPlayer`, `MaitreCard`, `VexFlowScoreClient`. La prose longue vient du namespace i18n (`tc("narrative.xxx")`), les données structurées du content file.

3. **`messages/{fr,en,es,de,it,pt}.json`** — namespace `cours[N]` (badge, title, subtitle, sections, quiz.perfect/veryGood/keepGoing, narrative.*) ET, dans le namespace `coursHub`, les clés `c[N]` (titre carte) et `d[N]` (description carte).

### Mécanisme i18n exact (à respecter)

- Le composant lit ses labels via `useCoursI18n("cours[N]")` → impose une entrée dans l'union `CoursKey` de `src/hooks/useCoursI18n.ts`.
- La carte du hub affiche `t("coursHub.c[N]")` (titre) et `t("coursHub.d[N]")` (desc). Les **tags** du tableau `COURS` sont rendus bruts (non traduits) — convention existante, on la suit.
- `useCoursContent` retombe sur `fr` si une locale manque. La complétude « vraie » = toutes les locales peuplées dans le content file + clés `cours[N]` et `c[N]`/`d[N]` présentes dans les 6 JSON.

### Convention de notation

Affichage des notes en anglais (C, D, E…) ; `dotKeys`/`playNote` du PianoPlayer en français (Do, Ré…). Voir l'en-tête de `src/components/Cours13.tsx`.

### Correspondance cours → modèle analogue

| Cours à créer | N° | Niveau | Analogue à copier comme squelette |
|---------------|----|--------|-----------------------------------|
| Notes étrangères | 38 | 1 | `Cours5.tsx` + `cours5Content.ts` |
| 7èmes d'espèces | 39 | 2 | `Cours11.tsx` + `cours11Content.ts` |
| Invention à 2 voix | 40 | 2 | `Cours13.tsx` + `cours13Content.ts` |
| Écriture de style | 41 | 5 | `Cours26.tsx` + `cours26Content.ts` |

### Commandes de vérification (utilisées partout)

- Compilation : `npx tsc --noEmit`  → attendu : aucune erreur.
- Lint : `npm run lint`  → attendu : aucune erreur sur les fichiers touchés.
- Build d'une route (optionnel, lourd) : `npm run build`.
- Complétude i18n : voir le script du Task 0.

### Couche `conservatoireData` (conditionnelle)

Certains cours affichent une couche « conservatoire » (intuition, référence,
voix, répertoire, pièges, résumé). Au Step 2 de chaque tâche : **si l'analogue
copié consomme cette couche**, créer aussi `src/data/conservatoireData[N].ts` sur
le modèle de `src/data/conservatoireData37.ts` (6 locales) et la câbler comme dans
l'analogue. Sinon, l'omettre — elle n'est pas bloquante pour l'alignement DEM.

### Adaptation TDD

Ce dépôt n'a pas de framework de test unitaire et les livrables sont des
composants de contenu. La boucle « test » est donc remplacée par :
**(a)** `tsc --noEmit` vert, **(b)** `lint` vert, **(c)** script de complétude
i18n vert, **(d)** la route `/fr/cours/[N]` et `/en/cours/[N]` rendent sans
erreur. Chaque tâche de build se termine par ces vérifications.

---

## Task 0 : Outil de vérification de complétude i18n

**Files:**
- Create: `scripts/check-cours-i18n.mjs`

- [ ] **Step 1 : Écrire le script de vérification**

Crée `scripts/check-cours-i18n.mjs` :

```js
// Vérifie qu'un cours donné a toutes ses clés i18n dans les 6 langues.
// Usage : node scripts/check-cours-i18n.mjs 38
import fs from "node:fs";

const LOCALES = ["fr", "en", "es", "de", "it", "pt"];
const num = process.argv[2];
if (!num) { console.error("Usage: node scripts/check-cours-i18n.mjs <num>"); process.exit(1); }

let ok = true;

// 1) namespace coursHub.c<num> et d<num> présents dans chaque langue
for (const loc of LOCALES) {
  const m = JSON.parse(fs.readFileSync(`messages/${loc}.json`, "utf8"));
  for (const key of [`c${num}`, `d${num}`]) {
    if (!m.coursHub || typeof m.coursHub[key] !== "string" || !m.coursHub[key].trim()) {
      console.error(`[KO] messages/${loc}.json : coursHub.${key} manquant`);
      ok = false;
    }
  }
  if (!m[`cours${num}`]) {
    console.error(`[KO] messages/${loc}.json : namespace cours${num} manquant`);
    ok = false;
  }
}

// 2) clés du namespace cours<num> identiques entre fr et les autres langues
function flat(obj, prefix = "") {
  return Object.entries(obj ?? {}).flatMap(([k, v]) =>
    v && typeof v === "object" ? flat(v, `${prefix}${k}.`) : [`${prefix}${k}`]
  );
}
const fr = JSON.parse(fs.readFileSync("messages/fr.json", "utf8"));
const frKeys = new Set(flat(fr[`cours${num}`]));
for (const loc of LOCALES.filter(l => l !== "fr")) {
  const m = JSON.parse(fs.readFileSync(`messages/${loc}.json`, "utf8"));
  const locKeys = new Set(flat(m[`cours${num}`]));
  for (const k of frKeys) {
    if (!locKeys.has(k)) { console.error(`[KO] messages/${loc}.json : cours${num}.${k} manquant`); ok = false; }
  }
}

console.log(ok ? `[OK] Cours ${num} : i18n complet dans les 6 langues.` : `[KO] Cours ${num} : clés manquantes.`);
process.exit(ok ? 0 : 1);
```

- [ ] **Step 2 : Vérifier que le script tourne (sans cible encore créée)**

Run: `node scripts/check-cours-i18n.mjs 1`
Expected: `[OK] Cours 1 : i18n complet dans les 6 langues.` (le cours 1 existe déjà ; valide la mécanique du script).

- [ ] **Step 3 : Commit**

```bash
git add scripts/check-cours-i18n.mjs
git commit -m "chore: script de vérification complétude i18n des cours"
```

---

## Task 1 : Cours 38 — Les notes étrangères (Niveau 1)

**Files:**
- Create: `src/data/cours38Content.ts`
- Create: `src/components/Cours38.tsx`
- Modify: `src/hooks/useCoursI18n.ts` (union `CoursKey`)
- Modify: `src/app/[locale]/cours/[id]/page.tsx` (import + map + generateStaticParams)
- Modify: `src/components/CoursHub.tsx` (tableau `COURS`)
- Modify: `messages/fr.json` (namespaces `cours38` + `coursHub.c38/d38`)

**Contenu pédagogique (modules à couvrir) :** note de passage (diatonique/chromatique, temps faible) · broderie (sup./inf.) · appogiature (temps fort, résolution conjointe descendante) · retard (préparation–percussion–résolution ; 4-3, 7-6, 9-8, 2-3 à la basse) · échappée · note de passage accentuée · anticipation · pédale (tonique/dominante) · repérage à l'analyse + emploi à la réalisation de chant/basse donnés. Réf. Dubois/Gallon ; répertoire : choral de Bach. 6–8 questions de quiz orientées DEM.

- [ ] **Step 1 : Créer le fichier de données FR**

Copier la structure de `src/data/cours5Content.ts` (interface + objets locale + export `Record`). Remplir **uniquement la locale `fr`** avec le contenu des modules ci-dessus (les autres locales pointeront temporairement sur `fr` dans l'export, à traduire au Step 6). Le quiz : 6–8 objets `{ q, opts, a, fb }` portant sur les notes étrangères (ex. « Sur quel temps se place l'appogiature ? », « Quelle note étrangère exige une préparation ? » → le retard).

- [ ] **Step 2 : Créer le composant `Cours38.tsx`**

Copier `src/components/Cours5.tsx` comme squelette. Adapter : `useCoursI18n("cours38")`, `useCoursContent(cours38Content)`, sections = les familles de notes étrangères, exemples sonores via PianoPlayer (ex. retard 4-3 sur une cadence). La prose va dans `tc("narrative.*")`.

- [ ] **Step 3 : Étendre l'union `CoursKey`**

Dans `src/hooks/useCoursI18n.ts`, ajouter `| "cours38"` à l'union `CoursKey` (après `| "cours37"`).

- [ ] **Step 4 : Câbler le routeur**

Dans `src/app/[locale]/cours/[id]/page.tsx` :
- ajouter `import Cours38 from "@/components/Cours38";` après l'import de `Cours37`,
- ajouter `38: Cours38,` dans la map `COURS`,
- ajouter `38` au tableau de `generateStaticParams`.

- [ ] **Step 5 : Câbler le hub + clés FR**

Dans `src/components/CoursHub.tsx`, ajouter en fin du tableau `COURS` :
```ts
{ num: 38, level: 1 as const, title: "Les notes étrangères", desc: "Retard, appogiature, broderie, note de passage, échappée, anticipation et pédale — l'ornementation mélodique de l'harmonie.", tags: ["Notes étrangères", "Retard", "Appogiature"] },
```
Dans `messages/fr.json` : ajouter le namespace `cours38` (badge `"Niveau 1 · Cours 38"`, title, subtitle, sections, quiz.perfect/veryGood/keepGoing, narrative.*) et, dans `coursHub`, `"c38"` (= titre) et `"d38"` (= desc).

- [ ] **Step 6 : Traduire les 5 autres langues**

Traduire en en/es/de/it/pt : (a) les objets locale du content file (remplacer les renvois `fr` par de vraies traductions là où c'est du texte affiché), (b) le namespace `cours38` dans `messages/{en,es,de,it,pt}.json`, (c) `coursHub.c38/d38` dans ces 5 fichiers. Terminologie musicale : suivre `src/data/musicTerms.ts` et les conventions des cours déjà traduits.

- [ ] **Step 7 : Vérifier (compile + lint + i18n)**

Run :
```bash
npx tsc --noEmit && npm run lint && node scripts/check-cours-i18n.mjs 38
```
Expected : aucune erreur TS, lint propre, `[OK] Cours 38 : i18n complet dans les 6 langues.`

- [ ] **Step 8 : Vérifier le rendu de route**

Démarrer `npm run dev` (si pas déjà lancé) et confirmer que `http://localhost:3000/fr/cours/38` et `/en/cours/38` rendent sans erreur console. (En exécution par sous-agent : vérifier via build ou inspection ; sinon laisser ce check à l'utilisateur au checkpoint.)

- [ ] **Step 9 : Commit**

```bash
git add src/data/cours38Content.ts src/components/Cours38.tsx src/hooks/useCoursI18n.ts "src/app/[locale]/cours/[id]/page.tsx" src/components/CoursHub.tsx messages/
git commit -m "feat: cours 38 — Les notes étrangères (niveau 1, aligné DEM, 6 langues)"
```

- [ ] **CHECKPOINT — validation utilisateur**

Présenter le cours 38 à l'utilisateur pour validation de la justesse musicale et pédagogique. Ne passer au Task 2 qu'après son accord.

---

## Task 2 : Cours 39 — Les 7èmes d'espèces (Niveau 2)

**Files:**
- Create: `src/data/cours39Content.ts`
- Create: `src/components/Cours39.tsx`
- Modify: `src/hooks/useCoursI18n.ts` (union `CoursKey`)
- Modify: `src/app/[locale]/cours/[id]/page.tsx`
- Modify: `src/components/CoursHub.tsx`
- Modify: `messages/*.json`

**Contenu pédagogique (modules à couvrir) :** rappel du V7, puis 7e sur chaque degré (II7, III7, IV7, VI7, VII7 ; majeur & mineur) · nature de la 7e selon le degré · préparation de la 7e · résolution descendante par degré conjoint · renversements (6/5, 4/3, +2) · marche d'harmonie de 7èmes par cycle des quintes descendant · VII7 diminué et demi-diminué en mineur · emploi à l'écriture à 4 voix. Réf. Piston/Dubois ; répertoire : Bach, Corelli. 6–8 questions de quiz orientées DEM.

- [ ] **Step 1 : Créer le fichier de données FR**

Copier la structure de `src/data/cours11Content.ts`. Remplir la locale `fr` avec le contenu ci-dessus ; autres locales → `fr` temporairement. Quiz : 6–8 questions (ex. « Comment se résout la 7e d'un accord de 7e d'espèce ? » → descente conjointe ; « Quelle est la nature du VII7 en majeur ? » → demi-diminué).

- [ ] **Step 2 : Créer le composant `Cours39.tsx`**

Copier `src/components/Cours11.tsx` comme squelette. Adapter : `useCoursI18n("cours39")`, `useCoursContent(cours39Content)`, sections = construction/préparation/résolution/renversements/marche, exemples sonores via PianoPlayer (chaîne de 7èmes au cycle des quintes).

- [ ] **Step 3 : Étendre l'union `CoursKey`**

Dans `src/hooks/useCoursI18n.ts`, ajouter `| "cours39"` à l'union `CoursKey`.

- [ ] **Step 4 : Câbler le routeur**

Dans `src/app/[locale]/cours/[id]/page.tsx` : `import Cours39 from "@/components/Cours39";`, `39: Cours39,` dans la map, `39` dans `generateStaticParams`.

- [ ] **Step 5 : Câbler le hub + clés FR**

Dans `CoursHub.tsx`, en fin de tableau `COURS` :
```ts
{ num: 39, level: 2 as const, title: "Les 7èmes d'espèces", desc: "Au-delà du V7 : l'accord de septième sur chaque degré, sa préparation, sa résolution et la marche de 7èmes.", tags: ["Septièmes", "Préparation", "Résolution"] },
```
Dans `messages/fr.json` : namespace `cours39` (badge `"Niveau 2 · Cours 39"`, etc.) + `coursHub.c39/d39`.

- [ ] **Step 6 : Traduire les 5 autres langues**

Identique au Task 1 Step 6, pour le cours 39 (content file + `cours39` + `c39/d39` dans en/es/de/it/pt).

- [ ] **Step 7 : Vérifier (compile + lint + i18n)**

Run : `npx tsc --noEmit && npm run lint && node scripts/check-cours-i18n.mjs 39`
Expected : tout vert + `[OK] Cours 39`.

- [ ] **Step 8 : Vérifier le rendu de route**

`/fr/cours/39` et `/en/cours/39` rendent sans erreur.

- [ ] **Step 9 : Commit**

```bash
git add src/data/cours39Content.ts src/components/Cours39.tsx src/hooks/useCoursI18n.ts "src/app/[locale]/cours/[id]/page.tsx" src/components/CoursHub.tsx messages/
git commit -m "feat: cours 39 — Les 7èmes d'espèces (niveau 2, aligné DEM, 6 langues)"
```

- [ ] **CHECKPOINT — validation utilisateur**

Présenter le cours 39. Ne passer au Task 3 qu'après accord.

---

## Task 3 : Cours 40 — L'invention à 2 voix (Niveau 2)

**Files:**
- Create: `src/data/cours40Content.ts`
- Create: `src/components/Cours40.tsx`
- Modify: `src/hooks/useCoursI18n.ts` (union `CoursKey`)
- Modify: `src/app/[locale]/cours/[id]/page.tsx`
- Modify: `src/components/CoursHub.tsx`
- Modify: `messages/*.json`

**Contenu pédagogique (modules à couvrir) :** le sujet (motif générateur, tête de sujet) · l'imitation à l'octave (réponse) · le contre-sujet libre · les épisodes (séquences, fragmentation motivique) · le plan tonal (I → V → relatif → retour à I) · procédés (inversion, augmentation, strette légère) · cadences intermédiaires et conclusive · composer une invention de 8–16 mesures. Réf. Bach BWV 772-786, Gédalge. 6–8 questions de quiz.

- [ ] **Step 1 : Créer le fichier de données FR**

Copier la structure de `src/data/cours13Content.ts` (cours de contrepoint, le plus proche). Remplir la locale `fr` ; autres → `fr` temporairement. Quiz : 6–8 questions (ex. « À quel intervalle se fait l'imitation dans l'invention BWV 772 ? » → l'octave ; « Qu'est-ce qu'un épisode ? »).

- [ ] **Step 2 : Créer le composant `Cours40.tsx`**

Copier `src/components/Cours13.tsx` comme squelette (gère déjà la lecture à 2 voix via PianoPlayer). Adapter : `useCoursI18n("cours40")`, `useCoursContent(cours40Content)`, sections = sujet/imitation/épisodes/plan tonal/procédés, exemples sonores (tête de sujet + réponse à l'octave). Utiliser `VexFlowScoreClient` pour montrer sujet/réponse si pertinent.

- [ ] **Step 3 : Étendre l'union `CoursKey`**

Ajouter `| "cours40"` dans `src/hooks/useCoursI18n.ts`.

- [ ] **Step 4 : Câbler le routeur**

`import Cours40 from "@/components/Cours40";`, `40: Cours40,`, `40` dans `generateStaticParams`.

- [ ] **Step 5 : Câbler le hub + clés FR**

Dans `CoursHub.tsx`, en fin de tableau `COURS` :
```ts
{ num: 40, level: 2 as const, title: "L'invention à 2 voix", desc: "Sujet, imitation à l'octave, contre-sujet et épisodes — l'écriture de l'invention dans le style de Bach.", tags: ["Invention", "Bach", "Imitation"] },
```
Dans `messages/fr.json` : namespace `cours40` (badge `"Niveau 2 · Cours 40"`, etc.) + `coursHub.c40/d40`.

- [ ] **Step 6 : Traduire les 5 autres langues**

Identique, pour le cours 40.

- [ ] **Step 7 : Vérifier (compile + lint + i18n)**

Run : `npx tsc --noEmit && npm run lint && node scripts/check-cours-i18n.mjs 40`
Expected : tout vert + `[OK] Cours 40`.

- [ ] **Step 8 : Vérifier le rendu de route**

`/fr/cours/40` et `/en/cours/40` rendent sans erreur.

- [ ] **Step 9 : Commit**

```bash
git add src/data/cours40Content.ts src/components/Cours40.tsx src/hooks/useCoursI18n.ts "src/app/[locale]/cours/[id]/page.tsx" src/components/CoursHub.tsx messages/
git commit -m "feat: cours 40 — L'invention à 2 voix (niveau 2, aligné DEM, 6 langues)"
```

- [ ] **CHECKPOINT — validation utilisateur**

Présenter le cours 40. Ne passer au Task 4 qu'après accord.

---

## Task 4 : Cours 41 — L'écriture de style (Niveau 5)

**Files:**
- Create: `src/data/cours41Content.ts`
- Create: `src/components/Cours41.tsx`
- Modify: `src/hooks/useCoursI18n.ts` (union `CoursKey`)
- Modify: `src/app/[locale]/cours/[id]/page.tsx`
- Modify: `src/components/CoursHub.tsx`
- Modify: `messages/*.json`

**Contenu pédagogique (modules à couvrir) :** style classique (chant donné pour quatuor à cordes, texture et cadences mozartiennes) · style romantique (Schumann/Brahms — chromatisme expressif, harmonie enrichie) · style début XXe (Ravel/Debussy/Fauré — modalité, accords parallèles, 9es/11es non résolues) · méthode de pastiche (identifier les signatures, les reproduire) · corrigés commentés. Réf. cursus DEM CPES (Lyon). 6–8 questions de quiz.

- [ ] **Step 1 : Créer le fichier de données FR**

Copier la structure de `src/data/cours26Content.ts` (cours méthodo DEM avec exercices/corrigés). Remplir la locale `fr` ; autres → `fr` temporairement. Quiz : 6–8 questions (ex. « Quel trait harmonique signe le style de Debussy ? » → accords parallèles/9es non résolues ; « Quelle texture pour un chant donné classique ? » → quatuor à cordes).

- [ ] **Step 2 : Créer le composant `Cours41.tsx`**

Copier `src/components/Cours26.tsx` comme squelette (méthode + corrigés guidés). Adapter : `useCoursI18n("cours41")`, `useCoursContent(cours41Content)`, sections = les 3 styles + méthode de pastiche, exemples via PianoPlayer/VexFlow (extrait classique vs romantique vs XXe).

- [ ] **Step 3 : Étendre l'union `CoursKey`**

Ajouter `| "cours41"` dans `src/hooks/useCoursI18n.ts`.

- [ ] **Step 4 : Câbler le routeur**

`import Cours41 from "@/components/Cours41";`, `41: Cours41,`, `41` dans `generateStaticParams`.

- [ ] **Step 5 : Câbler le hub + clés FR**

Dans `CoursHub.tsx`, en fin de tableau `COURS` :
```ts
{ num: 41, level: 5 as const, title: "L'écriture de style", desc: "Pasticher le classique, le romantique et le début du XXe — la discipline d'écriture stylistique du DEM.", tags: ["Style", "Pastiche", "DEM"] },
```
Dans `messages/fr.json` : namespace `cours41` (badge `"Niveau 5 · Cours 41"`, etc.) + `coursHub.c41/d41`.

- [ ] **Step 6 : Traduire les 5 autres langues**

Identique, pour le cours 41.

- [ ] **Step 7 : Vérifier (compile + lint + i18n)**

Run : `npx tsc --noEmit && npm run lint && node scripts/check-cours-i18n.mjs 41`
Expected : tout vert + `[OK] Cours 41`.

- [ ] **Step 8 : Vérifier le rendu de route**

`/fr/cours/41` et `/en/cours/41` rendent sans erreur.

- [ ] **Step 9 : Commit**

```bash
git add src/data/cours41Content.ts src/components/Cours41.tsx src/hooks/useCoursI18n.ts "src/app/[locale]/cours/[id]/page.tsx" src/components/CoursHub.tsx messages/
git commit -m "feat: cours 41 — L'écriture de style (niveau 5, aligné DEM, 6 langues)"
```

- [ ] **CHECKPOINT — validation utilisateur**

Présenter le cours 41.

---

## Task 5 : Vérification d'intégration finale

**Files:** aucun (vérification seule)

- [ ] **Step 1 : Compilation globale**

Run : `npx tsc --noEmit`
Expected : aucune erreur.

- [ ] **Step 2 : Lint global**

Run : `npm run lint`
Expected : aucune erreur.

- [ ] **Step 3 : Complétude i18n des 4 cours**

Run : `for n in 38 39 40 41; do node scripts/check-cours-i18n.mjs $n; done`
Expected : `[OK]` pour 38, 39, 40, 41.

- [ ] **Step 4 : Build de production**

Run : `npm run build`
Expected : build réussi, les routes `/cours/38..41` générées (`generateStaticParams`).

- [ ] **Step 5 : Vérification hub**

Confirmer visuellement que les 4 cours apparaissent à leur niveau dans le hub (`/fr/cours/niveau-1` → 38 ; `niveau-2` → 39, 40 ; `niveau-5` → 41).

- [ ] **Step 6 : Commit final si ajustements**

```bash
git add -A
git commit -m "test: vérification d'intégration des 4 cours DEM"
```

---

## Notes d'exécution

- **Ordre impératif :** Task 0 → 1 → (checkpoint) → 2 → (checkpoint) → 3 → (checkpoint) → 4 → (checkpoint) → 5.
- **Boucle build↔review par cours :** à chaque Task 1–4, un sous-agent builder produit le cours, un sous-agent reviewer vérifie alignement DEM + justesse musicale + structure + `tsc`/`lint`, et corrige en boucle jusqu'au vert avant le checkpoint utilisateur.
- **FR d'abord, traduction ensuite** (Step 6 de chaque tâche) : le contenu pédagogique est validé en français avant d'être propagé, pour éviter de traduire un contenu qui changera.
