# Spec — Composition libre, phase 2 · 2h : insertion au milieu

**Date :** 2026-07-16
**Auteur :** Dany Duboille (avec Claude Code)
**Statut :** validé (design)
**Situe :** module 2 (composition libre) → phase 2 → sous-projet **2h** (l'insertion au milieu)

## Contexte

L'atelier `/composer` sait poser en fin de voix (2b/2c), corriger sur place (2d), contrôler la
conduite (2e), analyser en direct (2f) et empiler des accords (2g). Il ne sait PAS intercaler :
« j'ai oublié une note avant celle-ci » oblige à tout effacer depuis la fin. Le 2h ajoute
l'insertion avant la note sélectionnée.

C'est le **dernier** des quatre enrichissements demandés (conduite des voix → analyse en direct →
accords dans une voix → **insertion au milieu**).

## Décisions de cadrage (validées)

1. **Placement** : la note s'insère **AVANT la note sélectionnée** (convention du caret devant la
   sélection). Insérer « après » = sélectionner la note suivante.
2. **Débordement** : **refus local à la mesure** — l'insertion n'est acceptée que si la durée
   tient dans la mesure de la sélection (même logique de refus que `remplacerDuree`) ; les
   événements suivants DE LA MESURE se décalent, rien ne franchit la barre de mesure. Pas de
   décalage en cascade.
3. **Geste** : **bascule « Insérer »** (palette, style Triolet/Accord) + **touche I**. Mode actif
   et note sélectionnée : les lettres INSÈRENT au lieu de corriger ; la sélection RESTE sur la
   même note (on insère plusieurs notes de suite). Mode inactif : comportement actuel (lettre =
   correction).

## Architecture

### 1. `src/lib/composition-edition.ts` — l'édition pure

```ts
/**
 * Insère un événement (note ou silence) juste AVANT la note sélectionnée, si sa durée
 * tient dans la mesure (refus local : rien ne franchit la barre). Le curseur suit la
 * note sélectionnée — son index glisse de +1 — pour insérer plusieurs fois de suite.
 * Sans effet en mode ajout ("fin"), sur un silence pointé ou si ça ne tient pas.
 */
export function insererAvant(
  piece: Piece, curseur: Curseur, evenement: Evenement,
): { piece: Piece; curseur: Curseur };
```

- Garde : `curseur.note !== "fin"`, l'événement pointé est une note, et
  `dureePlacee(voix) + dureeEnDivisions(evenement.duree) <= capaciteMesure(chiffrage)`.
- Insertion par `splice` immuable à l'index sélectionné ; curseur rendu :
  `{ ...curseur, note: curseur.note + 1 }`.
- Aucun autre changement de la lib : `inserer` (fin), `supprimerNote`, `naviguer`,
  `positions` restent tels quels — `positions` renumérote naturellement.

### 2. `src/components/AtelierComposition.tsx` — l'interaction

- **État** : `const [insertion, setInsertion] = useState(false);`
- **Exclusivité** : activer « Insérer » éteint « Accord » et réciproquement (une lettre ne peut
  pas avoir deux sens). `toutEffacer` remet les deux à off.
- **Bascule** : bouton « Insérer » dans la palette à côté d'« Accord » (mêmes styles btn/btnOn,
  title « La prochaine note se pose avant la note sélectionnée (touche I) ») + rappel dans la
  barre de voix quand active : « Insertion : les notes se posent avant la sélection ».
- **Touche I** : bascule le mode (dans le `switch` du clavier, comme R pour le silence).
- **Lettres** : quand `insertion` est active ET qu'une note est sélectionnée, la lettre construit
  une note (durée `base`+`points` de la palette, **sans nolet**, altération de la palette,
  octave courante de la voix) et appelle `insererAvant` ; la note insérée SONNE
  (`playVoicing`, comme `poserNote`). En mode ajout ("fin"), la bascule est INERTE : les lettres
  posent en fin comme aujourd'hui (pas de surprise).
- **Silence** : le bouton Silence (et la touche R) insèrent un silence avant la sélection quand
  le mode est actif (même garde). Sinon comportement actuel.
- **Priorités des gestes sur une lettre, note sélectionnée** :
  Maj+lettre = empiler (2g, toujours prioritaire) ; bascule Insérer active = insérer ;
  bascule Accord active = empiler ; sinon = corriger. (Insérer et Accord étant exclusives,
  pas d'ambiguïté.)
- **Aide clavier** : ajouter « I = insérer avant la note sélectionnée ».

### 3. Ce qui ne demande AUCUN travail (recalculs par frappe déjà en place)

Gravure, analyse harmonique (2f), conduite des voix (2e), lecture, surlignages et appariement
clic (onsets recalculés par `onsetTicks` sur le modèle décalé).

## Tests (vitest) — `composition-edition.test.ts`

- Insertion simple : `[C, D]`, sélection sur D (index 1), insérer E → `[C, E, D]`, curseur sur D
  (index 2).
- Insertions consécutives : deux insertions de suite, la sélection reste sur la note d'origine.
- Refus si déborde : mesure 4/4 pleine (4 noires), insérer une noire → pièce ET curseur inchangés
  (mêmes références).
- Avant la première note : sélection index 0, insérer → la nouvelle note devient l'index 0.
- Avant un accord (2g) : l'insertion ne touche pas au bloc.
- Silence inséré : un silence s'intercale comme une note.
- Inerte : en mode "fin", sur pièce vide → mêmes références.
- Invariant d'appariement : après insertion, `onsetMsMidiDeSelection(piece, curseur)` pointe
  toujours la note initialement sélectionnée (mêmes midis, onset décalé de la durée insérée).

## Vérification

- `npx vitest run` → tout vert.
- `NODE_OPTIONS="--max-old-space-size=8192" npm run build` → succès. (⚠️ jamais `npx tsc --noEmit`.)
- Contrôle manuel (`/composer`, Pro) : écrire Do-Mi (noires) au soprano, sélectionner Mi,
  activer « Insérer » (ou I), taper d → Do-Ré-Mi, la sélection toujours sur Mi ; taper encore
  une lettre → elle s'intercale encore avant Mi ; mesure pleine → l'insertion ne fait rien ;
  désactiver → les lettres corrigent Mi comme avant ; R en mode insertion pose un silence avant Mi.

## Périmètre (YAGNI)

- **Pas** de décalage en cascade entre mesures.
- **Pas** d'insertion de triolets (la bascule triolet est ignorée en insertion).
- **Pas** de curseur inter-notes (caret) — le modèle `Curseur` ne change pas.
- **Pas** de geste « insérer après ».

## Points de vigilance

- **La sélection suit** : après `insererAvant`, le curseur doit désigner la MÊME note (index +1),
  sinon les insertions consécutives partent en vrille. C'est le point le plus testé.
- **Exclusivité des bascules** : Insérer et Accord ne doivent jamais être actives ensemble
  (une lettre aurait deux sens) ; vérifier les deux sens de bascule.
- **Touche I** : ne pas capturer I quand un champ de formulaire a le focus (le garde existant
  du clavier s'en charge déjà).
- **Le refus doit être silencieux mais visible** : pièce inchangée = pas de son (même garde
  `np !== piece` que les autres gestes).

## Critères de succès

- On intercale notes et silences avant la sélection, au clavier (I + lettres/R) et à la souris.
- La sélection reste sur la note d'origine ; insertions consécutives naturelles.
- Une mesure pleine refuse l'insertion sans rien casser.
- Analyse, conduite des voix, lecture et surlignages suivent sans travail supplémentaire.
- Build et tests verts.
