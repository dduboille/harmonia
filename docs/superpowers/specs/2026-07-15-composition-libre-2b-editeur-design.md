# Spec — Composition libre, phase 2 · 2b : la saisie pas à pas (l'éditeur)

**Date :** 2026-07-15
**Auteur :** Dany Duboille (avec Claude Code)
**Statut :** validé (design)
**Situe :** module 2 (composition libre) → phase 2 → sous-projet **2b** (l'éditeur interactif)

## Contexte

Le 2a a posé la fondation : un **modèle de pièce** (`piece-model.ts`) et son **export MusicXML**
(`piece-vers-musicxml.ts`), vérifiés par aller-retour. Le 2b bâtit l'**atelier de composition** :
l'élève écrit sa pièce note à note, Verovio la regrave à chaque frappe (le composant `StudioScore`
existe), et il peut l'écouter (la lecture du Studio existe).

**Décisions déjà prises :**
- Architecture : **saisie pas à pas + gravure Verovio** (on n'écrit pas de moteur de gravure).
- Saisie de la hauteur : **clavier de piano à l'écran ET clavier d'ordinateur** dans le 2b. Le
  **clic directement sur la portée** est reporté à un chantier séparé (risque d'imprécision sur le
  SVG de Verovio, mécanique différente).
- **L'écoute** est dans le 2b ; l'**analyse harmonique en direct** est reportée juste après.

## Décisions de cadrage (validées)

- **Une nouvelle page** `/[locale]/composer` (Pro), qui part d'une **pièce vierge** (8 mesures,
  Do majeur, 4/4) et la laisse remplir.
- **Saisie par ajout, mesure par mesure, de gauche à droite.** On choisit une durée (+ points,
  altération, triolet, ou silence), puis une hauteur (piano ou clavier) : la note s'insère au
  curseur, on l'entend, le curseur avance. **Retour arrière** efface la dernière note. L'édition
  d'une note déjà posée au milieu viendra plus tard.
- **Deux portées** (Sol/Fa), une voix chacune ; on bascule de l'une à l'autre, on navigue entre
  mesures.
- **Écouter** rejoue la pièce (lecture du Studio, déjà en place).

## Architecture

### 1. La logique d'édition — `src/lib/composition-edition.ts` (nouveau, pur)

Le modèle porte, en cours d'édition, **les seuls événements POSÉS** par l'élève (une voix peut être
incomplète). Le remplissage en silences est une affaire de RENDU, pas d'édition : on garde ainsi
l'édition triviale (ajouter / retirer) et le modèle toujours sérialisable.

- `capaciteMesure(chiffrage): number` — ticks d'une mesure.
- `dureePlacee(voix): number` — somme des durées posées.
- `decouperEnSilences(ticks): Silence[]` — comble un vide par des silences standard (blanche,
  noire, croche, double, pointés), du plus grand au plus petit.
- `remplirSilences(piece): Piece` — complète chaque voix à la capacité : une voix vide devient un
  **silence de mesure** ; une voix partielle reçoit ses silences de complément. **C'est cette pièce
  remplie qu'on sérialise et qu'on grave.**
- `inserer(piece, curseur, evenement): { piece, curseur }` — si l'événement tient dans le temps
  restant de la mesure courante, il est ajouté et le curseur avance (passe à la mesure suivante
  quand elle est pleine) ; sinon l'insertion est refusée (la note est trop longue pour la place
  restante — l'UI le signale).
- `effacer(piece, curseur): { piece, curseur }` — retire la dernière note posée ; recule le curseur.
- `basculerPortee`, `allerMesure` — la navigation.

### 2. L'atelier — `src/components/AtelierComposition.tsx` (nouveau)

- **La palette** : durée (ronde → double-croche), points, altérations (♯ ♭ ♮), bouton **triolet**,
  bouton **silence**, choix de la **portée** (Sol/Fa).
- **La saisie de la hauteur** : un **clavier de piano** (clic) et le **clavier d'ordinateur**
  (lettres A–G = La…Sol, flèches pour l'octave). Les deux alimentent le même `inserer`. Chaque note
  posée est jouée par `PianoPlayer`.
- **La gravure** : `remplirSilences(piece)` → `pieceVersMusicXML` → `<StudioScore>` (Verovio).
  Un **repère** montre la position courante (la mesure/portée en cours).
- **Écouter** : `remplirSilences(piece)` → MusicXML → `parseMusicXML` → `planifierLecture` →
  `PianoPlayer` (exactement la mécanique du Studio).
- **Retour arrière** efface ; navigation entre mesures et portées.

### 3. La page — `src/app/[locale]/composer/page.tsx` (nouveau)

Page Pro, calquée sur `studio/page.tsx` (auth → plan → `ProPaywall` si free → `AtelierComposition`).
Entrée « Composer » ajoutée au hub `/[locale]/analyse`.

## Tests (vitest)

L'essentiel de la logique testable est dans `composition-edition.ts` (pur) :

- **Insertion qui tient** : dans une mesure 4/4 vide, insérer une noire → la voix a une noire
  posée, le curseur reste sur la mesure (3 temps restants).
- **Mesure qui se remplit** : insérer quatre noires → à la quatrième, le curseur passe à la mesure
  suivante.
- **Insertion refusée** : insérer une ronde alors qu'il ne reste qu'un temps → la pièce est
  inchangée.
- **Effacer** : après trois notes, effacer en retire une ; effacer sur une mesure vide recule à la
  précédente.
- **Remplissage en silences** : une voix avec une seule noire est complétée à quatre temps par des
  silences standard (une blanche pointée = 3 temps) ; une voix vide devient un silence de mesure.
- **Aller-retour complet** : construire une pièce par insertions successives → `remplirSilences` →
  `pieceVersMusicXML` → `parseMusicXML` rend les notes aux bons instants (réutilise le socle 2a).
- **Découpage en silences** : `decouperEnSilences` d'un vide de 3 temps rend des silences dont la
  somme fait 3 temps, en valeurs standard.

## Vérification

- `npx vitest run` → tout vert.
- `NODE_OPTIONS="--max-old-space-size=8192" npm run build` → succès.
  (⚠️ `npx tsc --noEmit` sature la mémoire — ne jamais le lancer.)
- Contrôle manuel (`/composer`, connecté Pro) : composer quelques mesures aux deux portées (notes,
  points, silences, un accord, une liaison), vérifier que la gravure suit, que le repère avance,
  que l'écoute joue juste. **C'est ce contrôle qui dit si le 2b a atteint son but.**

## Hors périmètre (YAGNI)

- **Clic directement sur la portée** → chantier séparé, juste après.
- **Analyse harmonique en direct** dans l'atelier → juste après (l'infrastructure existe).
- **Édition d'une note déjà posée au milieu** (sélectionner, changer la hauteur/durée) → 2c ;
  en 2b on ajoute et on efface la dernière.
- **Voix multiples par portée**, changements d'armure/chiffrage en cours de pièce, annulation/
  rétablissement (undo global), export/téléchargement du fichier → itérations suivantes.
- **Liaison par-dessus la barre** de mesure — on s'en tient aux liaisons dans une même mesure en 2b.

## Points de vigilance

- **Le triolet à la saisie est la partie la plus délicate.** Un triolet se saisit en **groupe
  complet de trois** ; tant qu'il est incomplet, le remplissage en silences d'un vide qui n'est pas
  un multiple de la double-croche (12 ticks) est ambigu. En 2b : on entre les trois notes du
  triolet d'affilée (le bouton triolet reste actif le temps du groupe), et `decouperEnSilences`
  suppose des vides « propres » (multiples de 12). Si l'implémentation révèle que le triolet à la
  saisie alourdit trop, il rejoint le clic-sur-portée en chantier séparé — à décider à ce moment.
- **Le remplissage en silences** doit produire des valeurs notables (pas un silence de 3 temps d'un
  seul tenant, mais blanche + noire, ou blanche pointée), sinon Verovio grave mal.
- **La regravure à chaque frappe** : Verovio est rapide (WASM), mais on regrave la pièce entière à
  chaque note. Sur 8 mesures c'est négligeable ; à surveiller si la pièce s'allonge beaucoup.
- **Le repère de position** pendant l'édition (≠ le repère de lecture du Studio) : montrer
  clairement où la prochaine note ira (mesure + portée courantes).

## Critères de succès

- On compose une pièce à deux portées note à note, au piano et au clavier, avec durées, points,
  altérations, silences, accords et liaisons.
- La partition se **grave** au fil de la saisie ; le **repère** montre la position ; **Retour
  arrière** efface.
- On **écoute** ce qu'on a écrit.
- Le modèle reste toujours valide et sérialisable (remplissage en silences).
- Aucune régression ; le build passe.
