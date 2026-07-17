# Exercices cours 24-37 — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Doter les 14 cours sans exercices (24-37) de 4-6 exercices chacun, alignés sur leur contenu, passant l'invariant du corpus, livrés par lots validés par Dany. Étoffer le cours 11.

**Architecture:** Spec : `docs/superpowers/specs/2026-07-17-exercices-cours-24-37-design.md` (règles d'écriture À LA LETTRE). Nouveau `src/exercises/cours24-37-exercises.ts` agrégé dans `all-exercises.ts` ; complément 11 dans `cours10-23-exercises.ts`. Un commit par cours ; merge par lot après validation Dany.

**Tech Stack:** TypeScript strict, vitest, l'éditeur SATB remis d'équerre (`validateSATB` 5 args, invariant de corpus).

---

## Notes transverses

- **Ne JAMAIS `npx tsc --noEmit`**. Build : `NODE_OPTIONS="--max-old-space-size=8192" npm run build`.
- Boucle qualité SATB : `npx tsx scripts/audit-corpus-satb.ts` (0 bloqué, 0 <100 exigé) ;
  l'invariant `src/exercises/corpus-invariant.test.ts` doit rester vert.
- Chaque tâche-cours : LIRE `src/data/cours<N>Content.ts` d'abord ; suivre la spec (types,
  champs, interdits) ; tessitures moteur S C4-G5, A G3-C5, T C3-G4, B E2-C4 ; `regles: "libre"`
  pour le non-tonal.
- Modèles de facture : `src/exercises/cours38-41-exercises.ts` (structure de fichier) et les
  exercices du cours 11 dans `cours10-23-exercises.ts` (extensions en 4 voix).

## Lot 1 (vitrines)

- [ ] **Task 1 : infrastructure + cours 26 (Harmonisation DEM)** — créer
  `cours24-37-exercises.ts` (export `COURS24_37_EXERCISES`), l'agréger dans `all-exercises.ts` ;
  écrire 5-6 exercices du cours 26 : au moins 2 SATB « basse donnée » et 1 « soprano donné »
  (réalisation école stricte), 1-2 identify sur la méthode en 5 étapes du cours. Commit.
- [ ] **Task 2 : cours 24 (sixtes augmentées)** — 5-6 exercices : identify It+6/Fr+6/Al+6
  (structures exactes), build (construire une Al+6 sur une basse donnée), 2 SATB de résolution
  (Al+6 → V via 6/4 de cadence, It+6 → V) — `regles: "libre"` SEULEMENT si la règle des 7es
  gêne la résolution caractéristique (documenter le choix). Commit.
- [ ] **Task 3 : cours 32 (extensions altérées) + complément cours 11** — cours 32 : 5
  exercices (identify tensions b9/#9/#11/b13 et leur gamme source, build voicings altérés,
  1-2 SATB jazz `regles: "libre"`) ; cours 11 : +2-3 (une 9e préparée en SATB école si
  réalisable, identify tensions disponibles par degré). Commit.
- [ ] **Task 4 : vérification du lot 1** — invariant + suite complète + build verts ; revue
  (sous-agent : alignement cours, exactitude, distracteurs, français) ; PRÉSENTATION à Dany
  (contenu complet lisible) ; après validation → merge + push. STOP si Dany demande des
  retouches.

## Lots suivants (mêmes gabarits de tâche)

- [ ] **Lot 2 : cours 27, 28, 29** (analyse fonctionnelle, formes, comparatif — dominante
  identify/analysis-style en identify, quelques build).
- [ ] **Lot 3 : cours 30, 31, 36** (gammes par tons/Messiaen en build, planing/quartal en SATB
  libre, identify).
- [ ] **Lot 4 : cours 33, 34, 35** (choral école en SATB strict, cinéma identify, voicings jazz
  libre).
- [ ] **Lot 5 : cours 25, 37** (chromatisme avancé, Schenker — identify exigeants).
- [ ] **Vérification finale** : 14 cours dotés, invariant vert, audit 0/0, récap à Dany.
