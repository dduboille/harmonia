# Spec — Composition libre, phase 2 · 2g : accords empilés dans une voix

**Date :** 2026-07-16
**Auteur :** Dany Duboille (avec Claude Code)
**Statut :** validé (design)
**Situe :** module 2 (composition libre) → phase 2 → sous-projet **2g** (les accords dans une voix)

## Contexte

L'atelier `/composer` écrit un choral SATB (2c), corrige sur place (2d), contrôle la conduite des
voix (2e) et analyse en direct (2f). La saisie reste MÉLODIQUE : une hauteur par note. Or le modèle
prévoit l'accord depuis 2a (`Note.hauteurs: Hauteur[]` — « 1 = note simple, 2+ = accord »),
l'export écrit déjà `<chord/>`, la lecture et l'analyse (via MusicXML) les suivent sans travail.
Le 2g débloque l'INTERACTION : empiler, éditer, contrôler des accords dans une même voix.

C'est le **troisième** des quatre enrichissements demandés (conduite des voix → analyse en direct
→ **accords dans une voix** → insertion au milieu).

## Décisions de cadrage (validées)

1. **Geste d'empilement** : **Maj+lettre** au clavier — la hauteur s'ajoute à la note sélectionnée,
   ou à la DERNIÈRE note posée de la voix en mode ajout — et une **bascule « Accord »** dans la
   palette (état visible, comme le triolet) pour la souris. Pas d'empilement par bouton « + ».
2. **L'accord est un BLOC** : cliquer n'importe quelle tête sélectionne la note entière ;
   ↑/↓ transpose TOUTES les hauteurs ensemble ; Retour arrière **dépile** la dernière hauteur
   empilée (l'accord fond hauteur par hauteur, la note simple se supprime). Pas de sous-sélection
   par hauteur.
3. **Conduite des voix : les hauteurs EXTRÊMES** représentent la voix — croisement/écart entre
   voix voisines sur les extrêmes ADJACENTS (grave de la voix haute vs aigu de la voix basse),
   parallèles/directes sur l'extrême SUPÉRIEUR pour soprano/alto/ténor et INFÉRIEUR pour la basse,
   tessiture vérifiée sur TOUTES les hauteurs.

## Architecture

### 1. `src/lib/composition-edition.ts` — l'édition pure

```ts
/**
 * Empile une hauteur sur la note sélectionnée — ou sur la DERNIÈRE note posée de la
 * voix en mode ajout ("fin"). L'octave est celle passée (l'octave courante de la voix
 * dans l'atelier). Refuse le doublon exact (même midi) et les cibles non-note
 * (silence, voix vide) : pièce inchangée. L'ordre d'empilement est CONSERVÉ — c'est
 * lui que `retirerDerniereHauteur` dépile.
 */
export function empilerHauteur(
  piece: Piece, curseur: Curseur, lettre: LettreNote, alteration: number, octave: number,
): Piece;

/**
 * Dépile la dernière hauteur d'un ACCORD (2+ hauteurs) — sélectionné, ou dernière
 * note de la voix en mode ajout. Sur une note simple : pièce inchangée (la
 * suppression existante prend le relais).
 */
export function retirerDerniereHauteur(piece: Piece, curseur: Curseur): Piece;
```

- Le helper `avecHauteurSelectionnee` (qui ne transformait que `hauteurs[0]`) est généralisé pour
  transformer **toutes les hauteurs** : `transposerDegre` et `transposerOctave` déplacent le bloc
  entier. `transposerOctave` reste borné 1..7 : si UNE hauteur sort des bornes, rien ne bouge
  (le bloc reste soudé).
- `remplacerHauteur` (lettre seule sur une note sélectionnée) **remplace le bloc entier par une
  note SIMPLE** (lettre + altération de la palette, octave de la 1re hauteur) : le geste de
  correction reste net ; pour retoucher un accord, on dépile puis on rempile.
- `remplacerDuree` : inchangé (la durée est déjà commune au bloc).

### 2. Sélection et surlignage multi-têtes

- `trouverPosition(piece, onsetMs, midi)` apparie sur **n'importe quelle hauteur** de l'événement
  (aujourd'hui : `hauteurs[0]` seulement) — cliquer une tête empilée sélectionne le bloc.
- `onsetMsMidiDeSelection` renvoie désormais `{ onsetMs, midis: number[] }` (toutes les hauteurs).
- `StudioScore.surlignerSelection` accepte `{ onsetMs, midis: number[] }` et colore toutes les
  têtes correspondantes. Seul l'atelier consomme cette méthode et cette fonction : le changement
  de signature est localisé (adapter l'appelant dans `AtelierComposition`).
- Le surlignage des FAUTES suit le même mouvement : une `Faute` désigne une NOTE (un `Curseur`),
  pas une hauteur — sur un accord, toutes les têtes du bloc fautif sont colorées.
  `surlignerFautes` accepte donc `{ onsetMs, midis: number[], severite }` et l'appelant
  (l'effet des fautes dans `AtelierComposition`) suit le nouveau retour de
  `onsetMsMidiDeSelection`.

### 3. `src/components/AtelierComposition.tsx` — l'interaction

- **Maj+lettre** dans le handler clavier (le garde-fou actuel n'exclut pas Maj) : appelle
  `empilerHauteur` avec l'octave courante de la voix et l'altération de la palette.
- **Bascule « Accord »** dans la palette, à côté du triolet, même style d'état actif : quand elle
  est active, les BOUTONS de notes empilent au lieu de poser (le clavier a Maj+lettre, la bascule
  ne le change pas). L'état est remis à off par « Tout effacer ».
- Retour sonore : l'accord COMPLET est rejoué à chaque empilement (`playVoicing` avec toutes les
  hauteurs).
- **Retour arrière contextuel** enrichi : note sélectionnée à 2+ hauteurs → dépiler ; note simple
  sélectionnée → supprimer (existant) ; mode ajout → même logique sur la dernière note de la voix
  (dépiler si accord, effacer sinon).
- Le repère de position et l'aide clavier mentionnent le geste (« Maj+a…g = empiler »).

### 4. `src/lib/conduite-voix.ts` — les extrêmes

`SonVoix` devient :

```ts
export interface SonVoix {
  haut: number;        // midi le plus aigu qui sonne dans la voix à cet instant
  bas: number;         // midi le plus grave (== haut pour une note simple)
  midis: number[];     // toutes les hauteurs (tessiture)
  position: Curseur;
  attaque: boolean;
}
```

(Le champ `midi` disparaît — usages internes seulement, plus les tests à adapter.)

Règles adaptées :
- **Croisement** (voisines) : faute si `bas` de la voix HAUTE < `haut` de la voix BASSE.
- **Écart** (S–A, A–T) : avertissement si `bas` de la voix haute − `haut` de la voix basse > 12.
- **Parallèles** (toutes paires) et **directes** (S–B) : la LIGNE de chaque voix est son extrême
  SUPÉRIEUR (`haut`) pour soprano, alto, ténor, et INFÉRIEUR (`bas`) pour la basse — la voix
  extérieure qu'entend l'oreille.
- **Tessiture** : chaque hauteur de `midis` est vérifiée (une seule faute par note, listant la
  voix, comme aujourd'hui).

Pour des notes simples, `haut === bas === midi` : **tous les tests existants passent inchangés**
(seule l'écriture `sons.x!.midi` devient `sons.x!.haut` ou `bas` dans les tests).

### 5. Ce qui ne demande AUCUN travail (à vérifier par test)

- **Export** : `<chord/>` déjà écrit pour `hauteurs[2..n]` (`piece-vers-musicxml.ts`).
- **Analyse harmonique (2f)** : passe par le MusicXML complet — elle voit toutes les hauteurs.
- **Lecture** : `parseMusicXML` + `planifierLecture` jouent déjà les accords (le Studio le fait).

## Tests (vitest)

- **`composition-edition.test.ts`** :
  - `empilerHauteur` : ajoute à la note sélectionnée (2 hauteurs, ordre conservé) ; ajoute à la
    dernière note posée en mode "fin" ; refuse le doublon midi exact ; sans effet sur silence,
    voix vide, ou pièce vide.
  - `retirerDerniereHauteur` : dépile la dernière hauteur empilée ; sans effet sur note simple.
  - `transposerDegre`/`transposerOctave` sur un accord : TOUTES les hauteurs bougent ;
    octave bornée = bloc immobile si une hauteur sortirait.
  - `remplacerHauteur` sur un accord : bloc remplacé par une note simple.
  - `trouverPosition` : retrouve l'événement par une hauteur EMPILÉE (pas seulement la 1re) ;
    `onsetMsMidiDeSelection` renvoie tous les midis.
- **`conduite-voix.test.ts`** (adaptations + ajouts) :
  - Existants : `midi` → `haut`/`bas` (notes simples, mêmes verdicts).
  - Croisement sur extrêmes adjacents : soprano accord (Do5+Mi4) au-dessus d'un alto La4 → le
    `bas` du soprano (Mi4) sous le `haut` de l'alto (La4) = croisement détecté.
  - Pas de faux positif : accord soprano (Sol4+Do5) sur alto Mi4 → pas de croisement.
  - Parallèles sur la ligne extérieure : quintes S–B détectées sur `haut` du S et `bas` de B
    même quand une hauteur INTERNE empilée casserait le parallélisme apparent.
  - Tessiture : une hauteur empilée hors ambitus est signalée même si `hauteurs[0]` est dans
    l'ambitus.
- **`analyse-resultat.test.ts`** (ajout) : aller-retour d'une pièce avec accord EMPILÉ dans une
  voix (ex. basse Do3+Sol3, soprano Mi4) → l'analyse voit les trois sons (accord I identifié).

## Vérification

- `npx vitest run` → tout vert.
- `NODE_OPTIONS="--max-old-space-size=8192" npm run build` → succès. (⚠️ jamais `npx tsc --noEmit`.)
- Contrôle manuel (`/composer`, Pro) : poser Do à la basse, Maj+e puis Maj+g → l'accord Do-Mi-Sol
  se grave et sonne entier ; cliquer une tête empilée sélectionne le bloc ; ↑ transpose les trois
  sons ; Retour arrière dépile Sol puis Mi puis supprime Do ; la bascule « Accord » fait pareil à
  la souris ; l'analyse chiffre l'accord ; une hauteur empilée hors tessiture s'affiche en orange.

## Périmètre (YAGNI)

- **Pas** de sous-sélection d'une hauteur dans l'accord.
- **Pas** d'arpège ni de voicing automatique.
- **Pas** d'insertion au milieu (c'est le 2h).
- Les surlignages (sélection ET fautes) désignent des NOTES : sur un accord, toutes les têtes du
  bloc — pas de coloration d'une hauteur isolée.

## Points de vigilance

- **Appariement Verovio** : `getElementsAtTime` renvoie les ids des têtes de l'accord ;
  `getMIDIValuesForElement` par tête. Le clic remonte l'id d'UNE tête → son midi doit retrouver
  le bloc via `trouverPosition` élargi. À valider à la main (WASM non couvert par les tests),
  comme pour 2d.
- **Retour arrière en mode ajout** : bien dépiler la dernière note de la VOIX ACTIVE (pas d'une
  autre voix), et seulement si c'est un accord.
- **Conduite des voix** : ne pas casser les verdicts existants — les tests notes-simples doivent
  passer avec la seule substitution `midi` → `haut`/`bas`.
- **Doublon d'empilement** : refuser le même midi exact, mais accepter l'unisson d'ÉCRITURE
  différente (Do♯ vs Ré♭ = midis identiques → refusé aussi ; assumé, cas d'école rarissime).

## Critères de succès

- On empile/dépile des hauteurs au clavier (Maj+lettre) et à la souris (bascule « Accord »).
- L'accord se sélectionne d'un clic sur n'importe quelle tête, se transpose en bloc, se dépile.
- La conduite des voix contrôle les accords par leurs extrêmes ; la tessiture voit chaque hauteur.
- L'analyse harmonique chiffre les accords empilés ; la lecture les joue.
- Build et tests verts ; aucun verdict existant de conduite des voix modifié.
