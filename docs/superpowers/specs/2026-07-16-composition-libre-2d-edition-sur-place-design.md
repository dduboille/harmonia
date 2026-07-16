# Spec — Composition libre, phase 2 · 2d : édition sur place (naviguer, transposer, corriger)

**Date :** 2026-07-16
**Auteur :** Dany Duboille (avec Claude Code)
**Statut :** validé (design)
**Situe :** module 2 (composition libre) → phase 2 → sous-projet **2d** (l'édition sur place)

## Contexte

Le 2a-2c ont livré l'atelier `/composer` en écriture SATB à quatre voix, mais en saisie **au bout**
seulement : on ajoute la note à la suite, on efface la dernière. Impossible de **revenir sur une
mesure précédente** pour corriger, ni de **bouger une note déjà posée**. Le 2d ajoute la navigation
et l'édition sur place — sans changer le principe de saisie « au bout » pour l'ajout.

## Décisions de cadrage (validées)

- **Flèches `←` / `→`** : naviguer de note en note dans la voix active, **à travers les mesures**.
  Passé la dernière note → mode **ajout** (`"fin"`).
- **Flèches `↑` / `↓`** : quand une note est sélectionnée, la **transposer d'un degré sur la portée**
  (déplacement diatonique : C↔D↔E…, passage d'octave ; l'altération redevient **bécarre** sur le
  nouveau nom). **`Maj+↑` / `Maj+↓`** : transposer d'une **octave**.
  → Les flèches ne règlent **plus** l'octave de saisie ; celle-ci reste pilotée par les boutons
  **▲▼** à l'écran (une octave par voix, cf. 2c).
- **Clic sur une note** de la partition : la sélectionne **et bascule la voix active** sur la sienne.
- **Édition sur place** (note sélectionnée) :
  - bouton **C/D/E…** → **remplace la hauteur** (garde la durée ; applique l'altération courante de
    la palette, comme à la saisie) ;
  - bouton **durée / point / triolet** → **remplace la durée** (garde la hauteur) ; **refusé** si la
    nouvelle durée déborde la mesure (les autres notes de la voix ne bougent pas) ;
  - **Retour arrière** → **supprime** la note sélectionnée (décale la suite de la voix) et sélectionne
    la précédente (ou repasse en `"fin"` s'il n'y en a plus).
- **Ajout** (`"fin"`) : identique à aujourd'hui (`inserer` avec palette + octave de la voix).
- La note sélectionnée est **surlignée** dans la partition.

## Périmètre (YAGNI)

- **Pas d'insertion au milieu** : on corrige / transpose / supprime, on n'intercale pas entre deux
  notes. (Choix explicite : « remplacer », pas « insérer ».)
- **Pas d'accords empilés dans une voix**, pas d'analyse en direct, pas de conduite des voix — hors 2d.
- Le **clic sur la partition** est la partie la plus délicate (appariement SVG Verovio ↔ modèle) ;
  s'il s'avère fragile, les flèches suffisent seules à revenir corriger.

## Architecture

### 1. `src/lib/composition-edition.ts` (modifié) — logique pure, testée

Le curseur gagne la note sélectionnée :

```ts
export interface Curseur {
  mesure: number;
  voix: NomVoix;
  note: number | "fin"; // index d'une note existante, ou "fin" (mode ajout)
}
```

**Base d'index** : `note` est un index dans le tableau **brut** de la voix
(`mesures[mesure].voix[voix]`), qui peut contenir notes ET silences saisis. `positions`
n'énumère que les entrées de type `note` (leur index brut) : les silences ne sont donc pas
navigables/sélectionnables (édition d'un silence saisi = hors périmètre). Les fonctions
`remplacer*` / `supprimer*` opèrent directement sur `voix[note]`.

Nouvelles fonctions pures :

- `positions(piece, voix): Array<{ mesure: number; note: number }>` — énumère, dans l'ordre de
  lecture, toutes les **notes** de la voix (les silences ne sont pas navigables ; ils n'existent que
  posés — dans le modèle d'édition une voix ne contient que des notes et d'éventuels silences saisis).
  Sert à la navigation `←/→`.
- `naviguer(piece, curseur, sens: -1 | 1): Curseur` — déplace la sélection le long de `positions` ;
  au-delà de la dernière → `{ mesure: positionEcriture(piece, voix), voix, note: "fin" }` ; avant la
  première → reste sur la première.
- `transposerDegre(piece, curseur, sens: -1 | 1): Piece` — sur la note sélectionnée, monte/descend
  d'un **degré diatonique** (C→D→…→B→C+8ve ; altération remise à 0). Sans effet en `"fin"`.
- `transposerOctave(piece, curseur, sens: -1 | 1): Piece` — ±1 octave (bornée 1..7). Sans effet en
  `"fin"`.
- `remplacerHauteur(piece, curseur, lettre, alteration): Piece` — remplace la lettre + altération de
  la note sélectionnée, garde octave et durée. Sans effet en `"fin"`.
- `remplacerDuree(piece, curseur, duree): Piece` — remplace la durée de la note sélectionnée **si**
  elle tient dans la mesure (sinon renvoie la pièce inchangée). Sans effet en `"fin"`.
- `supprimerNote(piece, curseur): { piece; curseur }` — retire la note sélectionnée, décale la suite,
  sélectionne la précédente (ou `"fin"`).

`inserer` / `effacer` restent pour le mode ajout ; `inserer` n'opère qu'en `"fin"` (l'atelier
n'appelle `inserer` que dans ce mode).

**Note sur les hauteurs d'un accord** : une note d'édition a `hauteurs: Hauteur[]`. En 2d une voix ne
porte qu'une hauteur par note (pas d'accord empilé — hors périmètre) ; `remplacerHauteur` et
`transposer*` opèrent sur `hauteurs[0]`.

### 2. `src/components/StudioScore.tsx` (modifié)

- **Surligner une note par identité** : nouvelle méthode `surlignerNote(id: string | null)` sur
  `StudioScoreRef`, qui pose une classe `.harmonia-selection` (couleur distincte du rouge de lecture)
  sur l'élément Verovio d'`id`.
- **Appariement id ↔ modèle** : après gravure, exposer une façon d'obtenir, pour une note du modèle,
  son `id` Verovio, et inversement pour un clic. Approche : à partir des temps de la voix (via le
  planificateur / les divisions) et de `toolkit.getElementsAtTime(ms).notes` + les valeurs MIDI par
  élément, construire une **table** `positionModele ↔ idVerovio`. Le clic remonte l'`id` de l'élément
  `.note` cliqué, la table donne la position (mesure, voix, note).
- **Clic** : `onSelectNote?: (id: string) => void` posé sur le conteneur SVG ; au clic, trouver
  l'ancêtre `.note` porteur d'un `@id` et le remonter.

### 3. `src/components/AtelierComposition.tsx` (modifié)

- Clavier : `←/→` → `naviguer` ; `↑/↓` → `transposerDegre` (`Maj` → `transposerOctave`) ; `Retour
  arrière` → `supprimerNote` en mode sélection, `effacer` en `"fin"`.
- Les boutons **C/D/E…** appellent `remplacerHauteur` si une note est sélectionnée, sinon `poserNote`
  (ajout). Idem **durée/point/triolet** → `remplacerDuree` si sélection, sinon changent la palette de
  saisie.
- Surlignage de la note sélectionnée (via `surlignerNote` + la table d'appariement) ; clic sur la
  partition → sélection + bascule de voix.
- Repère texte : indiquer « note N / M » quand une note est sélectionnée, « ajout » sinon.

## Tests (vitest)

Logique pure (`composition-edition`), sans UI :

- `positions` énumère les notes d'une voix dans l'ordre, à travers les mesures (ignore une mesure
  vide, ignore les silences).
- `naviguer` avance/recule note à note ; au-delà de la dernière → `"fin"` sur la mesure d'écriture ;
  avant la première → reste sur la première.
- `transposerDegre` : C5 → D5 vers le haut ; B4 → C5 (passage d'octave) ; F#5 monté → G5 (altération
  effacée) ; sans effet en `"fin"`.
- `transposerOctave` : C5 → C6 ; borné (C7 ne dépasse pas 7).
- `remplacerHauteur` : remplace lettre + altération, garde octave et durée ; n'affecte pas les autres
  notes de la voix ni les autres voix.
- `remplacerDuree` : réussit si ça tient (noire → croche) ; **échoue sans rien changer** si ça déborde
  (croche → ronde dans une mesure déjà pleine).
- `supprimerNote` : retire la note, décale la suite, sélectionne la précédente ; sur la première,
  repasse en `"fin"`.
- Aller-retour : après une correction, `pieceVersMusicXML` + `parseMusicXML` relit la pièce corrigée.

## Vérification

- `npx vitest run` → tout vert (tests existants adaptés au nouveau `Curseur` + nouveaux).
- `NODE_OPTIONS="--max-old-space-size=8192" npm run build` → succès. (⚠️ jamais `npx tsc --noEmit`.)
- Contrôle manuel (`/composer`, Pro) : écrire quelques notes, revenir en arrière aux flèches `←`,
  transposer aux flèches `↑/↓`, remplacer une hauteur et une durée, supprimer ; vérifier le surlignage
  de la sélection et, si l'appariement tient, le clic sur une note.

## Points de vigilance

- **Adaptation du `Curseur`** : tous les appels et tests qui construisent un `Curseur` gagnent
  `note` ; par défaut `"fin"`. Vérifier que le mode ajout reste identique.
- **Appariement Verovio** : deux voix partagent un temps → surligner **par identité** (id), jamais par
  temps seul. L'appariement doit distinguer la voix (via MIDI + temps, ou l'ordre stable). Si fragile,
  le clic est dégradable ; les flèches restent le chemin robuste.
- **`remplacerDuree` qui déborde** : ne jamais tronquer ni pousser les notes suivantes — refuser
  simplement, comme `inserer`.
- **Transposition diatonique** : bien passer l'octave sur B→C (haut) et C→B (bas), et remettre
  l'altération à 0 (déplacement sur la portée, pas transposition chromatique).

## Critères de succès

- On revient à une mesure précédente aux flèches `←/→` (ou au clic) et on corrige une note en place.
- `↑/↓` transposent la note sélectionnée d'un degré, `Maj+↑/↓` d'une octave.
- Remplacer hauteur/durée et supprimer fonctionnent en place ; le mode ajout est inchangé.
- La note sélectionnée est surlignée ; l'aller-retour MusicXML relit la pièce corrigée.
- Le build passe.
