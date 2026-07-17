# Spec — Mise à niveau de `/generateur-satb` (suivi du chantier conformité)

**Date :** 2026-07-17
**Auteur :** Dany Duboille (avec Claude Code)
**Statut :** validé (roadmap n° 2, ordre validé par Dany)

## Contexte

Pendant la remédiation du corpus (chantier ①), la page `/generateur-satb` a été volontairement
REVENUE au comportement d'avant-conformité (retrait de la prop `solution` — commit R6) parce que
son générateur (`src/lib/satb-generator.ts`, 341 l., distinct du générateur d'exercices) produit
des solutions fautives : sweep de la revue d'intégration sur les 2112 combos
(gabarits × tonalités × doigtés) — **198 bloqués par les nouvelles règles, 581 par les
préexistantes, 524 avec avertissements seulement**. La page fonctionne mais n'arme ni la
conformité ni les résolutions : ses modes dictée/réalisation ont perdu la moitié de leur intérêt.

## Objectif

Le même standard que le corpus d'exercices : **toute solution générée est terminable et vaut
100 contre ses propres règles (école)**, et la page réarme `solution` (retour du contrôle en
direct de conformité + résolutions).

## Décisions

1. **Porter le playbook du chantier ①** sur `satb-generator.ts` : voicings complets construits
   par recherche avec retour arrière (couvrir les pitch classes de l'accord, doubler de
   préférence la fondamentale, JAMAIS la sensible ni la 7e ; rejets durs : parallèles,
   directes S–B, sensible externe non résolue, 7e non résolue), registres/tessitures moteur.
   Réutiliser le code de `src/exercises/generator.ts` par IMPORT si les structures s'y prêtent
   (en extraire un module partagé si c'est propre), sinon par transposition du motif — au choix
   de l'implémentation, mais pas de troisième copie divergente si un partage propre est possible.
2. **Auto-filtrage** : tout combo dont la solution ne passe pas
   `validateSATB(sol, ks, false, sol, "ecole")` sans erreur NI avertissement noté est écarté.
   Budget : si plus de ~15 % des 2112 combos sont écartés, améliorer le voicing plutôt
   qu'élargir le filtre (STOP si inatteignable).
3. **Tonalités mineures** : mêmes exigences que le chantier ① (vraies signatures « Xm » si le
   générateur en produit, sensible haussée, diatonie du mode — vérifier ce que ce générateur
   fait aujourd'hui et corriger à l'identique du playbook).
4. **Réarmement** : `GenerateurSATB.tsx` repasse `solution` (et `regles` si pertinent — ce
   générateur est d'école : `ecole`) à `HarmoniaEditor`. Retirer le commentaire « mise à niveau
   en suivi ».
5. **Verrou** : étendre la couverture de test — soit un test dédié
   (`src/lib/satb-generator.test.ts`) balayant TOUS les combos générables (0 faute, 0
   avertissement noté), soit l'intégration au test d'invariant existant si la volumétrie le
   permet (2112 validations : mesurer la durée ; si < ~10 s, un test dédié est bien).
6. **La page démo `/editeur`** (même retrait R6) : remettre `solution` UNIQUEMENT si ses deux
   solutions codées en dur sont recomposées propres (petit bonus si trivial une fois le moteur
   partagé ; sinon suivi séparé, ne pas bloquer ce chantier dessus).

## Vérification

- Sweep : 0 combo généré fautif ou < 100 ; taux d'écartement ≤ 15 % rapporté.
- `npx vitest run` + build verts. Page `/generateur-satb` : contrôle manuel Dany (dictée d'une
  solution générée → terminable à 100 ; accord hors sujet → refusé).

## Périmètre (YAGNI)

- Pas de nouveaux gabarits/modes de jeu sur la page ; pas de refonte UI.
- Pas d'unification forcée des deux générateurs si leurs structures divergent trop (le partage
  est souhaité, pas exigé).

## Critères de succès

- Sweep 2112 combos : zéro solution fautive/notée < 100 parmi les combos conservés.
- La page contrôle à nouveau conformité et résolutions en direct.
- Verrou de test en CI. Aucune régression ailleurs (444+ tests verts).
