# Spec — Exercices des cours 24 à 37 (chantier vitrine ③)

**Date :** 2026-07-17
**Auteur :** Dany Duboille (avec Claude Code)
**Statut :** validé (design)
**Situe :** chantier « vitrine » ③ — après le moteur (①, mergé) et la notice (②, mergée).

## Contexte

14 cours sur 41 n'ont AUCUN exercice : 24 (sixtes augmentées), 25 (chromatisme avancé),
26 (harmonisation DEM), 27-29 (analyse, formes, comparatif), 30-31 (impressionnisme,
polytonalité/quartal), 32 (extensions altérées), 33 (fugue/choral), 34 (cinéma), 35 (jazz
avancé), 36 (Debussy/Ravel), 37 (Schenker). Le cours 11 (extensions) est maigre (6). Le moteur
SATB remis d'équerre (conformité, résolutions, mode `libre`, invariant de corpus) rend enfin
possible un contenu d'exercices exigeant.

## Décisions de cadrage (validées)

1. **Volume** : 4 à 6 exercices par cours (comme les cours 38-41), ~70 au total ; +2-3 pour
   étoffer le cours 11.
2. **Ordre des lots** (vitrines d'abord) : lot 1 = **26 (DEM), 24 (sixtes augmentées),
   32 (extensions altérées) + complément 11** ; lot 2 = 27, 28, 29 (analyse/formes) ;
   lot 3 = 30, 31, 36 (impressionnisme/polytonalité/Debussy) ; lot 4 = 33, 34, 35
   (fugue-choral/cinéma/jazz) ; lot 5 = 25, 37 (chromatisme avancé/Schenker).
3. **Validation par lot** : chaque lot passe le test d'invariant + revue, puis est présenté à
   Dany (contenu complet lisible) AVANT merge. Un lot = une validation = un merge.

## Règles d'écriture du contenu (les auteurs les suivent À LA LETTRE)

- **Alignement pédagogique** : avant d'écrire, LIRE `src/data/cours<N>Content.ts` (et le
  composant `Cours<N>.tsx` si besoin) — les exercices testent CE QUE LE COURS ENSEIGNE, avec
  son vocabulaire. Aucun concept non couvert par le cours.
- **Types** : `satb` (réalisation — chaque fois que le sujet le permet : sixtes augmentées et
  leurs résolutions, basse donnée DEM, choral, voicings d'extensions) ; `identify` (quiz 4
  options, 1 correcte, distracteurs plausibles) ; `build` (construire gamme/accord,
  `correctNotes` dans l'ordre).
- **Qualité SATB obligatoire** : toute solution DOIT passer
  `validateSATB(sol, keySignature, false, sol, regles)` avec 0 faute et 0 avertissement noté
  (l'invariant `corpus-invariant.test.ts` l'exige) — l'auteur VÉRIFIE avant de livrer
  (`npx tsx scripts/audit-corpus-satb.ts`). Contenu non tonal (planing, quartal, jazz de
  couleur, sixtes augmentées si la règle des 7es gêne la résolution caractéristique) →
  `regles: "libre"`. Tessitures moteur : S C4-G5, A G3-C5, T C3-G4, B E2-C4.
- **Champs** : ids `c<N>-<slug>` uniques ; `difficulty` étagée 1→3 dans chaque cours ;
  `tags`/`concepts` cohérents avec le cours ; `hint` = coup de pouce, `explanation` = la leçon
  qu'on retient (2-4 phrases, exactes) ; français soigné (le contenu EST le produit).
- **Interdits** : pas de doublon avec un exercice existant ; pas d'à-peu-près théorique (une
  sixte allemande est It/Fr/Al selon sa structure exacte ; b9/#9/#11/b13 sont des tensions
  précises) ; pas d'exercice « quiz de définition » paresseux quand une réalisation est possible.

## Architecture

- Nouveau fichier `src/exercises/cours24-37-exercises.ts` (même facture que
  `cours38-41-exercises.ts`), agrégé dans `all-exercises.ts`. Le complément du cours 11 rejoint
  le fichier où vivent ses exercices actuels (`cours10-23-exercises.ts`).
- Un LOT = une série de commits sur la branche `exercices-cours-24-37` (un commit par cours),
  merge de la branche seulement après validation Dany du lot… puis la branche continue pour le
  lot suivant (ou branches successives — au choix de l'exécution, mais JAMAIS de contenu non
  validé sur main).

## Vérification (par lot)

- `npx vitest run` (invariant compris) + build → verts.
- Revue (sous-agent) : alignement au cours, exactitude théorique, qualité des distracteurs,
  français.
- **Présentation à Dany** : pour chaque exercice — titre, type, question/consigne, bonne
  réponse (et réalisation SATB voix par voix pour les satb), en français lisible. Validation →
  merge du lot.

## Périmètre (YAGNI)

- Pas de nouveaux TYPES d'exercices (harmonize/analysis restent non branchés dans l'UI).
- Pas de refonte des pages d'exercices ; pas d'illustrations.
- Les cours 1-23 et 38-41 ne sont pas retouchés (hors complément 11).

## Critères de succès

- Les 14 cours ont chacun 4-6 exercices alignés sur leur contenu ; cours 11 étoffé.
- Invariant du corpus toujours vert ; zéro exercice « à peu près ».
- Chaque lot validé par Dany avant d'atteindre main.
