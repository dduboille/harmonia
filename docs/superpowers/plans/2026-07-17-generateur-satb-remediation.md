# Mise à niveau /generateur-satb — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Toute solution de `satb-generator.ts` est terminable et vaut 100 (école) ; la page `/generateur-satb` réarme la conformité et les résolutions ; verrou de test en CI.

**Architecture:** Spec : `docs/superpowers/specs/2026-07-17-generateur-satb-remediation-design.md`. Playbook du chantier ① (`src/exercises/generator.ts` : buildCandidates/voiceProgression DFS, auto-filtrage) porté — ou partagé par extraction — vers `src/lib/satb-generator.ts` (341 l., 2112 combos). Boucle de retour : script de sweep dédié.

**Tech Stack:** TypeScript strict, vitest, tsx.

---

## Notes transverses

- **Ne JAMAIS `npx tsc --noEmit`**. Build : `NODE_OPTIONS="--max-old-space-size=8192" npm run build`.
- Départ : 444 tests verts, audit corpus exercices 646/0/0 (ne doit pas bouger).
- Référence sweep de la revue d'intégration : 2112 combos, 198 bloqués nouvelles règles,
  581 préexistantes, 524 avertissements seulement.
- Le juge : `validateSATB(sol, ks, false, sol, "ecole")` — zéro erreur ET zéro avertissement
  noté (hors cross_relation).

## Task 1 : le sweep (boucle de retour)

- [ ] Créer `scripts/audit-generateur-satb.ts` (tsx, lecture seule) : énumère TOUS les combos
  générables par `satb-generator.ts` (gabarits × tonalités × doigtés — lire le module pour
  l'énumération exacte), juge chaque solution, imprime les compteurs (total, propres, bloqués
  par types, <100) + `JSON:` machine-lisible. Run initial : confirmer l'ordre de grandeur de la
  référence. Commit `chore(generateur): sweep des combos contre les regles ecole`.

## Task 2 : le moteur (exploratoire — objectifs et invariants)

- [ ] LIRE `src/lib/satb-generator.ts` en entier + `src/exercises/generator.ts` (le playbook).
  DÉCIDER : import/extraction d'un module partagé de voicing (préféré si propre) ou
  transposition du motif DFS. Documenter le choix en commentaire de tête.
- [ ] Voicings complets, doublures saines, rejets durs (parallèles, directes S–B, sensible
  externe, 7e), registres ; tonalités mineures au standard du chantier ① si applicable.
- [ ] Auto-filtrage strict (erreurs ET avertissements notés). Sweep : 0 fautif / 0 <100 parmi
  les conservés, écartement ≤ 15 % (sinon améliorer le voicing ; STOP si inatteignable).
- [ ] `npx vitest run` + build verts. Commit
  `fix(generateur): voicings d'ecole complets et auto-filtrage — toute solution vaut 100`.

## Task 3 : réarmement + verrou

- [ ] `GenerateurSATB.tsx` : repasser `solution` à `HarmoniaEditor` (mode école), retirer le
  commentaire « mise à niveau en suivi ».
- [ ] `src/lib/satb-generator.test.ts` : test balayant tous les combos conservés (0 erreur,
  0 avertissement noté) — mesurer la durée, viser < 10 s.
- [ ] BONUS si trivial : `/editeur` (page démo) — recomposer ses 2 solutions en propre avec le
  moteur et repasser `solution` ; sinon laisser et noter en suivi.
- [ ] Suite + build verts. Commit
  `feat(generateur): la page rearme conformite et resolutions + verrou de test`.

## Task 4 : vérification finale

- [ ] Build + suite complète + sweep final (chiffres dans le rapport).
- [ ] Revue (sous-agent) puis présentation Dany : chiffres avant/après, taux d'écartement,
  choix partage/transposition du moteur. Merge après validation.
