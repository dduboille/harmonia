# Remédiation du corpus SATB — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rendre TOUT le catalogue d'exercices SATB terminable et noté 100 en reproduction du modèle : mode `libre` pour les exercices non tonals, sensible armée seulement vers I/VI, tonalités mineures vraies et voicings sains dans le générateur, cross_relation non notée, `/generateur-satb` inchangé, et un test d'invariant qui verrouille le corpus pour toujours.

**Architecture:** Spec : `docs/superpowers/specs/2026-07-16-corpus-satb-remediation-design.md` (R1-R8). Le moteur (`satb-rules.ts`) gagne le mode `regles` et le raffinement I/VI ; le générateur (`src/exercises/generator.ts`) est corrigé puis auto-filtré ; un script d'audit (`scripts/audit-corpus-satb.ts`) sert de boucle de retour pendant le travail ; le test d'invariant (`src/exercises/corpus-invariant.test.ts`) n'est commité qu'une fois vert (la suite reste verte à chaque commit).

**Tech Stack:** TypeScript strict, vitest, tsx.

---

## Notes transverses

- **Ne JAMAIS `npx tsc --noEmit`** (OOM). Build : `NODE_OPTIONS="--max-old-space-size=8192" npm run build`.
- Point de départ : branche `editeur-satb-conformite`, suite à 416 verts.
- Le moteur actuel : `validateSATB(measures, keySignature?, checkAccidentals?, solution?)` ;
  `conforme[]` et `accords[]` précalculés ; règles 4c (sensible), 4d (7e), 4e (directes),
  6 (conformité), 7 (doublure) ; `noteExercice`. `tonaliteDeSignature` exporté.
- Chiffres de la revue d'intégration (référence) : 470 exercices SATB, 122 propres, 155 bloqués
  par les nouvelles règles, 109 déjà bloqués par les préexistantes, 84 notés <100.

---

## Task 1 : le script d'audit (boucle de retour)

**Files:**
- Create: `scripts/audit-corpus-satb.ts`

- [ ] **Step 1 : Écrire le script**

Un script tsx qui parcourt `ALL_EXERCISES` (type "satb"), exécute
`validateSATB(solution, keySignature, false, solution /*, regles quand il existera */)` et
imprime : total, propres, bloqués (avec ids et types d'erreurs), notés <100 (avec décompte
d'avertissements par type). Sortie machine-lisible en fin (JSON une ligne) pour comparaison
avant/après. Run : `npx tsx scripts/audit-corpus-satb.ts` — noter les chiffres de départ dans
le rapport (attendus ≈ ceux de la revue : 155 bloqués « nouvelles règles », 109 « préexistantes »).

- [ ] **Step 2 : Commit**

```bash
git add scripts/audit-corpus-satb.ts
git commit -m "chore(satb): script d'audit du corpus contre ses propres regles"
```

---

## Task 2 : mode `regles: "ecole" | "libre"` (R3)

**Files:**
- Modify: `src/lib/satb-rules.ts`, `src/types/exercise.ts`, `src/components/HarmoniaEditor.tsx`, `src/components/ExerciceContent.tsx`
- Modify: la page qui construit les props d'`ExerciceContent` pour le type satb (la trouver : `grep -rn "ExerciceContent" src/app` — transmettre `regles`)
- Test: `src/lib/satb-rules.test.ts`

- [ ] **Step 1 : Tests (TDD)** — en mode `libre` : accord faux → `wrong_chord` ; solution avec
  quintes parallèles VOULUES reproduites → AUCUNE erreur (parallèles muettes) ; hors tessiture →
  `range` ; espacements/croisements/fausses relations/résolutions/directes → muets. En mode
  `ecole` (ou paramètre absent) : comportement strictement inchangé.
- [ ] **Step 2 : Lancer — échoue.**
- [ ] **Step 3 : Implémenter** — `validateSATB(measures, keySignature?, checkAccidentals?, solution?, regles: "ecole" | "libre" = "ecole")`.
  En `libre` : ne s'exécutent QUE les règles tessiture (1) et conformité (6) — les blocs 2, 3,
  4, 4b, 4c, 4d, 4e, 5, 7 sont sautés. `SATBExercise.regles?: "ecole" | "libre"` dans
  `src/types/exercise.ts` ; `SATBData.regles?` dans ExerciceContent, transmis à `HarmoniaEditor`
  (nouvelle prop, défaut "ecole") qui le passe au validateur en direct ; le recalcul de note le
  passe aussi ; la page qui construit les props transmet `exercise.regles`.
- [ ] **Step 4 : Tests + build verts.**
- [ ] **Step 5 : Commit** — `feat(satb): mode regles ecole/libre — conformite+tessiture seule pour les exercices non tonals`

---

## Task 3 : sensible armée vers I/VI seulement (R4) + notation (R5) + analytics (R7) + générateur-page (R6)

**Files:**
- Modify: `src/lib/satb-rules.ts` (+ test), `src/components/ExerciceContent.tsx`, `src/app/api/harmony-errors/route.ts`, `src/components/GenerateurSATB.tsx`

- [ ] **Step 1 : Tests (TDD, satb-rules)** — marche Bø7→Em7 en Do (basse B2→E3, solution
  conforme) → AUCUN `leading_tone` ; V→I et V→VI → toujours armés (tests existants verts) ;
  V→IV (accord suivant ni I ni VI) → muet.
- [ ] **Step 2 : Implémenter R4** — dans la règle 4c, condition supplémentaire : l'accord
  `accords[m]` (mesure d'arrivée) a sa fondamentale sur la tonique OU sur le 6e degré
  (`(tonicPc + 9) % 12` en majeur, `(tonicPc + 8) % 12` en mineur — via le `minor` de
  `tonaliteDeSignature`). Identification nulle → muet.
- [ ] **Step 3 : R5** — dans ExerciceContent, le décompte exclut cross_relation :
  `restants.filter(e => e.severity === "warning" && e.type !== "cross_relation").length`.
- [ ] **Step 4 : R7** — `KNOWN_TYPES` gagne les 5 nouveaux types (et le commentaire « miroir »
  redevient vrai).
- [ ] **Step 5 : R6** — `GenerateurSATB.tsx` ne passe plus `solution` à `HarmoniaEditor`
  (retirer la prop de CET appel — la page revient au comportement de main ; commentaire : mise à
  niveau en suivi).
- [ ] **Step 6 : Tests + build verts. Relancer l'audit** (`npx tsx scripts/audit-corpus-satb.ts`) —
  noter l'amélioration.
- [ ] **Step 7 : Commit** — `feat(satb): sensible armee vers I/VI, cross_relation non notee, analytics etendues, generateur-page inchange`

---

## Task 4 : le générateur — tonalités mineures vraies et voicings sains (R1+R2)

**Files:**
- Modify: `src/exercises/generator.ts` (600 l. — LIRE en entier d'abord)
- Test: le fichier de test du générateur s'il existe, sinon assertions dans `corpus-invariant` plus tard ; l'audit est la boucle de retour.

Cette tâche est EXPLORATOIRE — objectifs et invariants plutôt que code imposé :

- [ ] **Step 1 : R1** — `MINOR_KEY_DATA` : chaque entrée porte sa vraie signature (`Am`, `Em`,
  `Bm`, `Dm`, `Gm`, `Cm`, `F#m`, selon la liste existante). VÉRIFIER que le rendu accepte « Xm »
  (GrandStaffSATB/VexFlow — chercher comment `keySignature` y est consommé ; VexFlow accepte les
  clés mineures « Am »). Si le rendu casse : garder « Am » dans la donnée et mapper vers le
  relatif majeur UNIQUEMENT à l'affichage (dans le composant de rendu).
- [ ] **Step 2 : R2a** — `computeVoicing` : alto/ténor doivent couvrir les pitch classes de
  l'accord NON encore présentes (soprano+basse d'abord, puis compléter ; doubler de préférence
  la fondamentale, JAMAIS la sensible de la tonalité). Garder la logique de registre existante.
- [ ] **Step 3 : R2b — auto-filtrage** — à la fin de la génération, écarter tout exercice dont
  la solution ne passe pas `validateSATB(sol, ks, false, sol, regles ?? "ecole")` sans erreur.
  Log de build silencieux (pas de console en prod) — le simple filtrage suffit, l'audit compte.
- [ ] **Step 4 : Audit** — relancer le script : l'objectif est zéro exercice GÉNÉRÉ bloqué, et
  un catalogue généré qui ne fond pas de façon déraisonnable (si le filtrage écarte plus de ~15 %
  des générés, le voicing doit être amélioré, pas le filtre élargi — STOP et rapporter si
  l'objectif paraît inatteignable).
- [ ] **Step 5 : Suite + build verts** (les tests existants du site ne comptent pas les exercices
  générés un à un ; si un test compte le catalogue, l'adapter en le signalant).
- [ ] **Step 6 : Commit** — `fix(exercices): generateur — tonalites mineures vraies, voicings complets, auto-filtrage`

---

## Task 5 : corrections de données des exercices écrits main

**Files:**
- Modify: `src/exercises/*.ts` (données uniquement — PAS le moteur)

- [ ] **Step 1 : Lister** — audit : les exercices écrits main encore bloqués ou <100.
- [ ] **Step 2 : Trier** — pour chacun : (a) nature non tonale (modal, planing, jazz de couleur,
  pastiche XXe) → drapeau `regles: "libre"` ; (b) erreur de plume tonale (voicing perfectible,
  vraie sensible doublée…) → retoucher la solution A MINIMA (bouger le moins de notes possible,
  registre et esprit conservés) ; (c) cas douteux → NE PAS toucher, lister pour Dany.
- [ ] **Step 3 : Vérifier** — audit : zéro bloqué, zéro <100 sur tout le corpus.
- [ ] **Step 4 : LA LISTE POUR DANY** — produire dans le rapport final un tableau : id, cours,
  changement (libre / notes déplacées lesquelles / rien-douteux), justification d'une ligne.
  Cette liste conditionne la fusion — validation pédagogique humaine.
- [ ] **Step 5 : Commit** — `fix(exercices): corpus aligne sur ses propres regles (libre + retouches minimales)`

---

## Task 6 : le verrou (R8) + vérification finale

**Files:**
- Create: `src/exercises/corpus-invariant.test.ts`

- [ ] **Step 1 : Le test d'invariant** — pour chaque exercice SATB de `ALL_EXERCISES` :
  zéro erreur contre sa propre solution, et zéro avertissement NOTÉ (hors cross_relation) —
  la reproduction du modèle vaut 100. Messages d'échec parlants (id + types).
- [ ] **Step 2 : Vert du premier coup** (tout le travail précédent) — sinon STOP.
- [ ] **Step 3 : Build + suite complète.**
- [ ] **Step 4 : Commit** — `test(exercices): invariant du corpus — toute solution est terminable et vaut 100`
- [ ] **Step 5 : Contrôle manuel (Dany)** — après validation de la liste de la Task 5 :
  un mineur généré, un planing (libre), `c39-cycle-septiemes-do`, `/generateur-satb` inchangé,
  et le parcours complet d'un exercice avec avertissement (note 90).
