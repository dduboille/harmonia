# Spec — Alignement DEM par création de 4 cours

**Date :** 2026-06-13
**Auteur :** Dany Duboille (avec Claude Code)
**Statut :** validé (design)

## Contexte et objectif

Harmonia vise institutionnellement le DEM (Diplôme d'Études Musicales), comme
l'affiche la page `/cursus` et le cours 26 (« Harmonisation DEM »). Une analyse
documentaire des référentiels d'écriture de conservatoires (Schéma national
d'orientation pédagogique 2023 ; cursus écriture des CRR de Lyon et Bordeaux) a
révélé des **écarts** entre les attendus DEM écriture et les 37 cours actuels.

L'objectif de ce chantier : **combler ces écarts en créant 4 nouveaux cours
dédiés**, alignés sur les attendus DEM, intégralement traduits dans les 6 langues
de la plateforme (fr, en, es, de, it, pt).

### Référentiel DEM écriture (source documentaire)

Progression technique du cycle spécialisé (3Cp → DEM), d'après le CRR de Lyon :
- 3Cp1 : accords 3 sons + 7e de dominante, cadences, modulations, plan tonal,
  contrepoint simple à 2 voix, chant/basse donnés à 4 voix
- 3Cp2 : 7èmes d'espèces, notes étrangères, invention à 2 voix pour clavier,
  écriture baroque à 4 voix
- 3Cp3 : instrumentation, pièce personnelle

UV stylistiques du DEM (CPES) : écriture **classique** (quatuor à cordes,
variations), **romantique** (Schumann/Brahms), **contrepoint Bach** (choral,
fugue, invention), **début XXe** (Ravel/Debussy/Fauré/Strauss).

Sources :
- https://www.conservatoire-lyon.fr/l-enseignement/musique/les-disciplines/culture-et-creation/ecriture/
- https://conservatoire.bordeaux.fr/fr/musiques/creations/ecriture-musicale
- Schéma national d'orientation pédagogique (Ministère de la Culture, 2023)

### Écarts identifiés (cours actuels vs DEM)

1. Pas de cours dédié aux **notes étrangères** (un fichier de données existe mais
   pas de cours).
2. Pas de cours sur les **7èmes d'espèces** (au-delà du seul V7).
3. **Invention à 2 voix** absente (cours 13 = espèces Fux ; cours 33 = fugue/choral).
4. **Écriture de style / pastiche** non structurée comme discipline d'examen
   (le cours 23 l'effleure seulement).

## Décisions de cadrage (validées)

- **Ancrage prioritaire :** DEM. Licence/Master musicologie et entrée CNSM ne sont
  PAS traités dans ce passage.
- **Nature de l'évolution :** création de nouveaux cours dédiés (pas
  d'enrichissement des cours existants ni de refonte).
- **Modèle de loop :** automatique par cours (builder ↔ reviewer jusqu'à review +
  compilation OK), puis **pause pour validation utilisateur** de la justesse
  musicale avant le cours suivant.

## Périmètre

### Les 4 cours à créer

Numérotation 38–41 (indépendante du niveau, comme les cours 24-26 placés en
niveau 2).

| N° | Titre | Niveau | Modèle technique |
|----|-------|--------|------------------|
| 38 | Les notes étrangères | 1 | Cours5 (conceptuel + PianoPlayer) |
| 39 | Les 7èmes d'espèces | 2 | Cours2 / Cours11 (accords) |
| 40 | L'invention à 2 voix | 2 | Cours13 (contrepoint) |
| 41 | L'écriture de style | 5 | Cours26 / Cours33 (méthodo + corrigés) |

### Contenu pédagogique de chaque cours

**Cours 38 — Les notes étrangères** *(DEM 3Cp1, fondamental)*
- Définition : note non constitutive de l'accord
- Note de passage (diatonique / chromatique, temps faible)
- Broderie (supérieure / inférieure)
- Appogiature (temps fort, résolution conjointe descendante)
- Retard (préparation–percussion–résolution ; 4-3, 7-6, 9-8, 2-3 à la basse)
- Échappée et note de passage accentuée
- Anticipation
- Pédale (tonique, dominante)
- Repérage à l'analyse + emploi à la réalisation de chant/basse donnés
- Réf. Dubois, Gallon — répertoire : choral de Bach

**Cours 39 — Les 7èmes d'espèces** *(DEM 3Cp2)*
- Rappel du V7, puis 7e sur chaque degré (II7, III7, IV7, VI7, VII7 ; majeur & mineur)
- Nature de la 7e selon le degré (majeure / mineure / diminuée)
- Préparation de la 7e (note préparée)
- Résolution de la 7e (descendante par degré conjoint)
- Renversements (6/5, 4/3, +2)
- Marche d'harmonie de 7èmes (cycle des quintes descendant)
- VII7 diminué et demi-diminué en mineur
- Emploi à l'écriture à 4 voix
- Réf. Piston, Dubois — répertoire : Bach, Corelli

**Cours 40 — L'invention à 2 voix** *(vers contrepoint Bach DEM)*
- Le sujet (motif générateur, tête de sujet)
- L'imitation à l'octave (réponse)
- Le contre-sujet libre
- Les épisodes (séquences, fragmentation motivique)
- Le plan tonal (I → V → relatif → retour à I)
- Procédés : inversion, augmentation, strette légère
- Cadences intermédiaires et conclusive
- Composer une invention de 8–16 mesures
- Réf. Bach BWV 772-786, Gédalge

**Cours 41 — L'écriture de style (pastiche)** *(UV stylistiques DEM)*
- Style classique : chant donné pour quatuor à cordes, texture et cadences mozartiennes
- Style romantique : Schumann/Brahms — chromatisme expressif, harmonie enrichie
- Style début XXe : Ravel/Debussy/Fauré — modalité, accords parallèles, 9es/11es non résolues
- Méthode de pastiche (identifier les signatures, les reproduire)
- Corrigés commentés
- Réf. cursus DEM CPES (Lyon)

Chaque cours comprend en plus :
- 6 à 8 questions de quiz orientées DEM
- une couche `conservatoireData` (intuition, référence, voix, répertoire, pièges, résumé)

## Architecture technique

### Modèle existant (à suivre)

Chaque cours est un composant React dédié `src/components/Cours[N].tsx` qui
consomme un fichier de données `src/data/cours[N]Content.ts` (interface typée,
6 locales) via les hooks `useCoursI18n`, `useCoursContent`, `useTerm`. Le titre et
la description du hub sont localisés dans `messages/*.json`.

### Fichiers à créer/modifier par cours

1. **Créer** `src/data/cours[N]Content.ts` — interface typée + 6 locales
   (fr/en/es/de/it/pt). Le FR fait foi ; les autres langues traduites ensuite.
2. **Créer** `src/components/Cours[N].tsx` — composant dédié, calqué sur l'analogue
   indiqué dans le tableau de périmètre. Réutilise PianoPlayer, MaitreCard,
   VexFlowScore selon le besoin.
3. **Modifier** `src/app/[locale]/cours/[id]/page.tsx` — ajouter l'import, l'entrée
   dans la map `COURS`, et le numéro dans `generateStaticParams`.
4. **Modifier** `src/components/CoursHub.tsx` — ajouter l'entrée dans le tableau
   `COURS` (`num`, `level`, `title`, `desc`, `tags`). L'entrée s'ajoute en fin de
   tableau ; elle apparaît à la fin de la liste de son niveau (convention déjà
   utilisée par les cours 24-26).
5. **Modifier** `messages/{fr,en,es,de,it,pt}.json` — clés titre/desc/tags du hub
   pour le nouveau cours, dans les 6 langues.
6. **Créer** `src/data/conservatoireData[N].ts` — couche conservatoire (recommandée).

### Convention de notation

Affichage des notes en anglais ; `dotKeys` du PianoPlayer en français
(convention documentée en tête de Cours13).

## Mécanique du loop (build → review → correction)

Pour **chaque** cours, en séquence (38 → 39 → 40 → 41) :

1. **Builder** (sous-agent) : produit le fichier de données + le composant + le
   câblage, en **français d'abord**, selon ce spec et le plan d'implémentation.
2. **Reviewer** (sous-agent) : vérifie
   - l'alignement DEM (le contenu couvre bien les modules listés),
   - la justesse musicale et terminologique,
   - la conformité de structure aux cours existants,
   - et lance `npx tsc --noEmit` + lint sur les fichiers touchés.
3. **Boucle** builder ↔ reviewer jusqu'à : review OK **et** compilation OK.
4. **Traduction** des 5 autres langues, puis re-check de complétude i18n
   (aucune clé manquante dans aucune langue).
5. **PAUSE** → l'utilisateur valide la justesse musicale et pédagogique avant le
   cours suivant.

La mécanique s'appuie sur les compétences superpowers (writing-plans, puis
subagent-driven-development / executing-plans avec checkpoints de review). On NE
crée PAS de slash-commands `/spec /build /review` littérales : le cycle est
identique via les sous-agents.

## Vérification (preuves exigées à chaque jalon)

- `npx tsc --noEmit` passe.
- Lint sans erreur sur les fichiers touchés.
- Complétude des 6 langues : aucune clé i18n manquante (toutes les locales du
  fichier `cours[N]Content.ts` peuplées ; clés du hub présentes dans les 6 JSON).
- La route `/fr/cours/[N]` (et au moins une autre langue) rend sans crash.

## Hors périmètre (YAGNI)

- Pas de refonte des cours existants (sauf écart bloquant découvert en cours de route).
- Pas d'enrichissement licence/master musicologie ni entrée CNSM dans ce passage.
- Pas de slash-commands Claude Code littérales.
- Pas de nouveaux composants génériques de rendu (on réutilise l'existant).

## Critères de succès

- Les 4 cours existent, sont accessibles via le hub à leur niveau, et rendent
  correctement dans les 6 langues.
- Leur contenu couvre les modules pédagogiques listés et reflète les attendus DEM.
- La compilation et le lint passent ; aucune clé i18n manquante.
- Chaque cours a été validé par l'utilisateur (expert) avant le suivant.
