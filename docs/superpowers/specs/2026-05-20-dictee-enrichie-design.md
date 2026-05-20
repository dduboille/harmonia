# Dictée enrichie — Design Spec

**Goal:** Ajouter un mode "Dictée d'intervalles" et un panneau de visualisation (clavier + portée) à la page `/dictee` existante.

**Architecture:** 4 fichiers (2 modifiés, 2 créés). Le tab switcher vit dans la page, chaque mode est un composant autonome, `VisualisationNote` est partagé.

**Tech Stack:** React 18, Next.js (App Router), styles 100% inline, PianoPlayer existant (notes en français).

---

## 1. Fichiers

| Fichier | Statut | Rôle |
|---|---|---|
| `src/app/[locale]/dictee/page.tsx` | Modifier | Tab switcher "Accords / Intervalles" |
| `src/components/DicteeHarmonique.tsx` | Modifier | Intégrer VisualisationNote après chaque réponse |
| `src/components/DicteeIntervalles.tsx` | Créer | Mode dictée d'intervalles complet |
| `src/components/VisualisationNote.tsx` | Créer | Panneau slide-in : clavier 3 octaves + portée SVG complète |

---

## 2. Tab switcher — `dictee/page.tsx`

```tsx
"use client";
type Mode = "accords" | "intervalles";
// State: activeMode
// Render: 2 pills en haut → <DicteeHarmonique> ou <DicteeIntervalles>
```

- Style cohérent avec les sélecteurs de niveau existants dans DicteeHarmonique
- Pas de `useSearchParams` — état local uniquement
- `DicteeHarmonique` et `DicteeIntervalles` sont tous deux `"use client"`

---

## 3. VisualisationNote — interface

```typescript
interface VisualisationNoteProps {
  notes: Array<{ fr: string; oct: number }>;  // notes à surligner
  label: string;      // "DoMaj7" ou "Tierce majeure — 4 demi-tons"
  onNext: () => void; // appelé par le bouton "Suivant →"
}
```

### 3a. Clavier piano

- **Étendue fixe :** Do3 à Si5 (3 octaves, 21 touches blanches, 15 noires)
- **Proportions :** touches blanches 28 × 120 px, noires 18 × 74 px superposées
- **Touches actives :** background `#3B82F6` (bleu), label nom de la note dessus (blanc, 9px)
- **Mapping français → position chromatique :**

```
Do=0, Do#/Réb=1, Ré=2, Ré#/Mib=3, Mi=4,
Fa=5, Fa#/Solb=6, Sol=7, Sol#/Lab=8, La=9, La#/Sib=10, Si=11
```

### 3b. Portée SVG

- **Dimensions SVG :** 320 × 100 px (responsive via `viewBox`)
- **5 lignes :** espacement 10 px, ligne du bas = E4 (référence)
- **Clé de sol :** caractère Unicode `𝄞` (U+1D11E) ou path SVG simplifié, rendu à gauche
- **Position des notes :** degrés diatoniques depuis C0

```
positionDiatonique(fr, oct) = oct * 7 + diatonicIndex[fr]
  où diatonicIndex = { Do:0, Ré:1, Mi:2, Fa:3, Sol:4, La:5, Si:6 }

yNote = refY + (positionDiatonique("Mi",4) - positionDiatonique(fr, oct)) * 5
  (5 px = demi-espacement entre deux lignes)
  refY = y de la première ligne de portée depuis le bas
```

- **Tête de note :** ellipse SVG (rx=5, ry=4), remplie en noir
- **Queue :** ligne verticale de 28 px. Vers le haut si note < Si4, vers le bas sinon
- **Altérations :** symbole ♯ ou ♭ (11 px) positionné 12 px à gauche de la tête
- **Lignes supplémentaires :** tracées automatiquement pour toute note hors de la portée (Do4 = 1 ligne sous ; Do5/Ré5 = 1 ligne au-dessus ; etc.)
- **Label :** texte centré sous la portée, couleur `#5C3D6E`, 13 px

### 3c. Slide-in

- Panneau collé en bas de la carte principale
- Animation : `transform: translateY(100%)` → `translateY(0)` en 250 ms
- Bouton "Suivant →" aligné à droite, appelle `onNext()`
- Bouton "↺ Réécouter" à gauche (optionnel — le parent passe une prop `onReplay?`)

---

## 4. DicteeHarmonique — modifications

Seul changement : remplacer le bloc `setTimeout(1300)` d'auto-avance par :

```typescript
// Après setFeedback + setAnswers :
// 1. Jouer la note choisie (inchangé)
// 2. Si mauvaise réponse : jouer la bonne 700 ms après (inchangé)
// 3. setShowViz(true)  ← nouveau
// 4. Supprimer le setTimeout(1300) qui appelait setChordIdx / setPhase
```

Nouveau state : `showViz: boolean`.
Nouveau handler : `handleNext()` — logique déplacée depuis le setTimeout (avance chordIdx ou passe à "complete").

`VisualisationNote` reçoit :
- `notes` = `prog.chords[chordIdx].notes`
- `label` = `prog.chords[chordIdx].label`
- `onNext` = `handleNext`

---

## 5. DicteeIntervalles — données

### 5a. Types

```typescript
interface CN { fr: string; oct: number; }
interface IvDef { name: string; semitones: number; level: 1 | 2 | 3; }
interface IvQuestion { note1: CN; note2: CN; interval: IvDef; level: 1 | 2 | 3; }
```

### 5b. Pool des 14 intervalles

| Nom | Demi-tons | Niv. min. |
|---|---|---|
| Unisson | 0 | 1 |
| Seconde mineure | 1 | 2 |
| Seconde majeure | 2 | 1 |
| Tierce mineure | 3 | 1 |
| Tierce majeure | 4 | 1 |
| Quarte juste | 5 | 1 |
| Quarte augmentée (triton) | 6 | 2 |
| Quinte juste | 7 | 1 |
| Sixte mineure | 8 | 2 |
| Sixte majeure | 9 | 1 |
| Septième mineure | 10 | 2 |
| Septième majeure | 11 | 3 |
| Octave | 12 | 1 |
| Neuvième majeure | 14 | 3 |

### 5c. 30 paires pré-définies

**Niveau 1 (10 paires) — Do4 comme note 1 :**

| note1 | note2 | intervalle |
|---|---|---|
| Do4 | Do4 | Unisson |
| Do4 | Ré4 | Seconde majeure |
| Do4 | Mib4 | Tierce mineure |
| Do4 | Mi4 | Tierce majeure |
| Do4 | Fa4 | Quarte juste |
| Do4 | Sol4 | Quinte juste |
| Do4 | La4 | Sixte majeure |
| Do4 | Do5 | Octave |
| Sol3 | La3 | Seconde majeure |
| La3 | Do4 | Tierce mineure |

**Niveau 2 (10 paires) :**

| note1 | note2 | intervalle |
|---|---|---|
| Do4 | Réb4 | Seconde mineure |
| Do4 | Fa#4 | Quarte augmentée |
| Do4 | Lab4 | Sixte mineure |
| Do4 | Sib4 | Septième mineure |
| Sol3 | Lab3 | Seconde mineure |
| Ré4 | Sol#4 | Quarte augmentée |
| Mi4 | Do5 | Sixte mineure |
| Fa3 | Mib4 | Septième mineure |
| La3 | Mib4 | Quarte augmentée |
| Sol3 | Fa4 | Septième mineure |

**Niveau 3 (10 paires) :**

| note1 | note2 | intervalle |
|---|---|---|
| Do4 | Si4 | Septième majeure |
| Do4 | Ré5 | Neuvième majeure |
| Sol3 | Fa#4 | Septième majeure |
| Ré4 | Do#5 | Septième majeure |
| Fa3 | Mi4 | Septième majeure |
| Mi4 | Fa#5 | Neuvième majeure |
| La3 | Sol#4 | Septième majeure |
| Si3 | Do#5 | Neuvième majeure |
| Ré4 | Mi5 | Neuvième majeure |
| Sol3 | La4 | Neuvième majeure |

### 5d. Options (8 boutons)

- Niveau 1 : les 8 intervalles du niveau 1 affichés tous (pool exact)
- Niveaux 2 & 3 : bonne réponse + 7 distracteurs tirés aléatoirement du pool du niveau, mélangés

### 5e. Flux de jeu

```
[idle]
  → clic "Commencer" → pioche 10 questions aléatoires du niveau → [question]

[question]  (questionIdx 0..9)
  → bouton "▶ Mélodie" : joue note1 puis note2 (délai 600 ms)
  → bouton "▶ Harmonie" : joue note1 + note2 simultanément
  → clic option → feedback couleur → show VisualisationNote
  → bouton "Suivant →" → questionIdx+1 ou [complete]

[complete]
  → score X/10 + bilan ligne par ligne + "Nouvelle dictée"
```

---

## 6. Styles communs

```typescript
const PURPLE = "#5C3D6E";
const BLUE   = "#3B82F6";
const GREEN  = "#16a34a";
const RED    = "#dc2626";
const BG     = "#faf8fc";
```

- 100 % styles inline, zéro Tailwind, zéro CSS module
- Police : `system-ui, sans-serif` partout
- Responsive : `maxWidth: 640` sur la carte principale

---

## 7. Contraintes techniques

- `npm run build` + `tsc --noEmit` verts avant commit
- Notes passées au PianoPlayer en français : `piano.current?.playNote("Do", 4)`
- `VisualisationNote` est un composant client (`"use client"`)
- Le PianoPlayer reste caché (`opacity: 0, pointerEvents: none`) dans les deux modes
- Pas d'état global — chaque mode gère son propre piano ref
