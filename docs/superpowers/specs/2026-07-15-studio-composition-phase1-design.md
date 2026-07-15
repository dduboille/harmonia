# Spec — Studio de composition, phase 1 (import, gravure, lecture, analyse)

**Date :** 2026-07-15
**Auteur :** Dany Duboille (avec Claude Code)
**Statut :** validé (design)
**Module :** 2 du chantier « composition » — sous-projet 1 (sur 2 : phase MusicXML, puis l'éditeur)

## Contexte

Le module 1 (composition guidée enrichie) est déployé. Le module 2 est la **composition libre**.
Après discussion, deux décisions de stratégie ont été prises :

- **Cible : une toile à deux portées, style piano** (le plus général, proche de MuseScore).
- **Approche par phases : MusicXML d'abord, éditeur ensuite.** On ne reconstruit pas MuseScore.
  L'élève compose dans MuseScore, importe le MusicXML dans Harmonia, qui l'affiche, le joue et
  l'**analyse**. La saisie en direct dans Harmonia viendra en phase 2, par-dessus le même socle.

Cette spec couvre la **phase 1** : un **Studio de composition**, page dédiée, qui importe un
MusicXML et le rend gravé, jouable et analysé.

**Ce qui existe déjà et qu'on réutilise :**
- `src/lib/musicxml-parse.ts` — `parseMusicXML(xml): ParsedScore` (notes réelles, onsets, durées,
  voix, mesures). Testé.
- `src/app/api/analyse-partition/route.ts` — importe .mxl/.xml/.musicxml, renvoie `AnalysisResult`
  (mesures/accords, cadences, chromatisme, **plan tonal**, commentaire IA). **Pro-gated.**
- `src/components/PianoPlayer.tsx` — `playVoicing(specs, { startTime, duration, velocity })` :
  permet de programmer chaque note du morceau à son instant.

**La seule brique vraiment neuve : afficher la partition gravée.** L'analyseur actuel ne montre
que des tableaux.

## Décisions de cadrage (validées)

- **Nouveau « Studio de composition »**, page dédiée `/[locale]/studio` — pas un enrichissement de
  l'analyseur. Orienté compositeur : importer SON morceau, le voir, l'entendre, l'analyser. C'est
  le socle sur lequel se greffera l'éditeur en phase 2.
- **Rendu par OpenSheetMusicDisplay (OSMD)** — bibliothèque conçue pour afficher du MusicXML dans
  un navigateur : deux portées, voix multiples, doubles-croches, triolets, liaisons, ligatures,
  gérés nativement. Son **curseur** intégré parcourt la partition : il sert au surlignage de
  lecture. (VexFlow seul serait trop bas niveau ; Verovio impose un gros WASM. OSMD est bâti sur
  VexFlow et fait le travail de mise en page pour nous.)
- **Analyse dans un panneau synchronisé sous la partition** (degrés, fonctions, cadences, plan
  tonal par mesure), surligné à la lecture. L'annotation des chiffres romains gravés *sous* la
  portée est un raffinement reporté (plus délicat à positionner sur le SVG d'OSMD).
- **Fonctionnalité Pro**, comme l'analyseur.
- **Import seulement** en phase 1 (l'export MusicXML deviendra utile quand l'éditeur produira des
  compositions — phase 2).

## Architecture

### 1. La page `/[locale]/studio`

Un composant client (OSMD a besoin du DOM). Zone de dépôt de fichier (comme l'analyseur), puis,
une fois le morceau chargé : la partition gravée, les contrôles de lecture, et le panneau
d'analyse.

### 2. L'import et l'analyse — on réutilise la route

L'élève dépose un `.mxl`/`.musicxml`. Le fichier :
- part vers `/api/analyse-partition` (déjà là : contrôle Pro, analyse harmonique, commentaire IA) ;
- est lu **côté navigateur** (le texte MusicXML, en dézippant le `.mxl` avec `fflate` comme le fait
  déjà la route) pour alimenter OSMD.

On affiche gravure + analyse d'un même geste.

### 3. Le rendu — `src/components/StudioScore.tsx` (nouveau)

Composant client qui charge OSMD en **import dynamique** (`ssr: false`) et grave le MusicXML dans
un conteneur. Il expose le **curseur** OSMD (avancer, réinitialiser, position courante) pour le
surlignage.

### 4. La lecture — `src/lib/studio-playback.ts` (nouveau, pur) + `PianoPlayer`

`planifierLecture(score, tempo)` transforme le `ParsedScore` en une liste d'**événements audio
datés** `{ specs, startTime, duration, velocity }` (chaque note à son onset réel, en secondes,
voix multiples comprises). `PianoPlayer.playVoicing` les joue. Le **curseur OSMD** est avancé au
rythme du tempo pour surligner la mesure en cours ; contrôles lecture / pause / tempo.

### 5. Le panneau d'analyse synchronisé — `src/components/StudioAnalyse.tsx` (nouveau)

Affiche `AnalysisResult` **par mesure**, en regard de la partition : degrés + fonctions + chiffrage
de chaque accord, cadences, régions du plan tonal (bandeaux colorés). La mesure en cours de lecture
est surlignée. Le commentaire IA reste accessible (comme dans l'analyseur).

## Tests (vitest)

Le rendu OSMD est visuel (contrôle manuel) ; la logique testable est ailleurs :

- **`planifierLecture`** : un morceau à deux voix simultanées produit des événements aux bons
  instants (onsets convertis en secondes selon le tempo), les notes tenues ont la bonne durée, une
  basse en ronde sonne bien pendant quatre temps.
- **Alignement mesure ↔ analyse** : la fonction qui associe une mesure gravée à son analyse rend la
  bonne correspondance, même quand une mesure est vide.
- **Dézippage `.mxl` côté client** : le même chemin que la route (repérer le rootfile via
  `container.xml`, replier sur le premier `.xml`) — extrait bien le MusicXML.
- **Non-régression** : l'analyseur `/analyse-partition` et son parseur ne bougent pas.

## Vérification

- `npx vitest run` → tout vert.
- `NODE_OPTIONS="--max-old-space-size=8192" npm run build` → succès.
  (⚠️ `npx tsc --noEmit` sature la mémoire de ce poste — ne jamais le lancer.)
- Contrôle manuel : importer un vrai MusicXML exporté de MuseScore (un choral, une pièce à deux
  portées) → la partition est gravée fidèlement, se joue avec surlignage, et l'analyse s'affiche
  sous la portée.

## Hors périmètre (YAGNI)

- **La saisie / l'édition de notes** dans Harmonia → phase 2 (l'éditeur, par-dessus ce socle).
- **L'export MusicXML** → phase 2 (utile quand Harmonia produira des compositions).
- **Les chiffres romains gravés sous la portée** (annotation inline sur le SVG) → raffinement
  ultérieur ; phase 1 = panneau synchronisé.
- **Transposition, changement de tonalité/instrumentation** → non.

## Points de vigilance

- **OSMD est côté navigateur uniquement** : import dynamique, `ssr: false`. À vérifier dès la
  première tâche : qu'il s'installe proprement à côté du `vexflow` déjà présent (OSMD embarque sa
  propre version de VexFlow — surveiller d'éventuels conflits et le poids du bundle). **Repli** si
  OSMD pose problème : Verovio (WASM). Trancher tôt.
- **La synchronisation curseur ↔ audio** est le point délicat : avancer le curseur OSMD au tempo
  sans dériver de la lecture Tone.js. Rester simple (avance mesure par mesure) plutôt que
  note-parfait.
- **Correspondance des mesures** : le parseur (pour l'analyse et la lecture) et OSMD (pour la
  gravure) lisent le même fichier mais peuvent numéroter différemment une levée ou une mesure
  incomplète. Vérifier l'alignement sur un fichier à anacrouse.
- **Fichiers lourds** : garder la limite de taille de la route (5 Mo).

## Critères de succès

- Un MusicXML exporté de MuseScore est **gravé fidèlement** dans le studio (deux portées, voix,
  rythmes riches).
- Le morceau se **joue**, avec la mesure en cours **surlignée**.
- L'**analyse harmonique** (degrés, fonctions, cadences, plan tonal) s'affiche par mesure, en regard
  de la partition, et se synchronise à la lecture.
- Le studio est une page dédiée, Pro-gated, qui réutilise le parseur, le moteur et Tone.js.
- Aucune régression sur l'analyseur ; le build passe.
- Le socle est prêt à recevoir l'éditeur de saisie en phase 2.
