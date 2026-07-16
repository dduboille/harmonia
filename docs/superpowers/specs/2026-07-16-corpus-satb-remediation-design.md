# Spec — Remédiation du corpus SATB (addendum au chantier conformité)

**Date :** 2026-07-16
**Auteur :** Dany Duboille (avec Claude Code)
**Statut :** validé (design)
**Situe :** suite DIRECTE de `2026-07-16-editeur-satb-conformite-design.md` — même branche
`editeur-satb-conformite`, à fusionner ENSEMBLE.

## Contexte

La revue finale d'intégration du chantier conformité a passé les 470 solutions SATB du catalogue
au crible de leurs propres règles : 155 déclenchent des fautes bloquantes (un élève reproduisant
la solution ne peut pas Terminer), `c39-cycle-septiemes-do` est prouvé insoluble, et 109
exercices étaient DÉJÀ in-terminables avant la branche (parallèles voulues du planing,
espacements jazz — les règles préexistantes bloquaient leurs propres solutions ; seule
l'absence de conformité laissait une échappatoire). Causes racines identifiées :

- `src/exercises/generator.ts` : `MINOR_KEY_DATA` code les tonalités mineures avec l'armure du
  RELATIF MAJEUR (Am→"C") → les règles de sensible s'arment sur la mauvaise tonique.
- `computeVoicing` (générateur) distribue alto/ténor par modulo → voicings dégénérés (accords à
  2 pitch classes, sensible réellement doublée).
- Exercices modaux/jazz (dorien, planing, blues) : tonalité nominale "C" → règles d'école
  tonales absurdes.
- `cross_relation` (préexistant) : faux positifs enharmoniques qui coûtent désormais 10 pts.
- `/generateur-satb` passait `solution` à l'éditeur → armait la conformité hors spec.
- `/api/harmony-errors` `KNOWN_TYPES` (« miroir de validateSATB ») pas étendu.

## Décisions (validées)

**R1 — Tonalités mineures du générateur.** `MINOR_KEY_DATA` porte les vraies signatures
(`Am`, `Em`, `Bm`, `Dm`, `Gm`, `Cm`, `F#m`, …) au lieu du relatif majeur. L'armure AFFICHÉE ne
change pas (relatifs identiques) ; `KEY_ACCIDENTALS` connaît déjà les clés « Xm » ;
`tonaliteDeSignature` les lit déjà. Vérifier que le rendu (GrandStaffSATB/VexFlow) accepte les
signatures « Xm » — sinon, mapper à l'affichage seulement.

**R2 — Voicings du générateur.** `computeVoicing` doit produire des accords COMPLETS quand
c'est possible (alto/ténor couvrent les pitch classes manquantes de l'accord au lieu d'une
distribution par modulo) et ne jamais doubler la sensible de la tonalité. PLUS auto-filtrage :
après génération, tout exercice dont la solution ne passe pas
`validateSATB(sol, ks, false, sol, regles)` avec zéro erreur est ÉCARTÉ du catalogue
(ceinture et bretelles — le test d'invariant R8 fait foi).

**R3 — Drapeau `regles`.** `SATBExercise` gagne `regles?: "ecole" | "libre"` (défaut `ecole`).
`validateSATB` gagne un 5e paramètre optionnel `regles?: "ecole" | "libre"` (défaut `ecole`).
**libre = conformité (wrong_chord/wrong_bass) + tessitures (range) SEULEMENT** — pas de
parallèles, espacements, croisements, fausses relations, résolutions ni directes. À poser sur
les exercices modaux/jazz/planing (liste établie par le test d'invariant : tout exercice dont la
solution est musicalement voulue mais non tonale). `ExerciceContent` transmet le drapeau.

**R4 — Raffinement de la sensible (marches).** La règle de résolution (et elle seule — pas la
doublure) ne s'arme que si l'accord SUIVANT (identifié sur la solution) a sa fondamentale sur la
TONIQUE ou sur le SIXIÈME degré (résolution ou cadence rompue). Dans une marche (cycle de 7es :
Bø7→Em7…), la sensible perd sa fonction et la règle se tait. Adapter le test « rompue » existant
si besoin (il reste vert : VI est armé) ; ajouter le cas marche.
Le 6e degré : pc = tonique + 9 en majeur, tonique + 8 en mineur (VI abaissé) — utiliser le
`minor` de `tonaliteDeSignature`.

**R5 — Notation.** `cross_relation` reste AFFICHÉE (avertissement) mais ne compte PLUS dans la
note : le décompte passé à `noteExercice` exclut le type `cross_relation`. (Ses faux positifs
enharmoniques pénalisaient des copies conformes ; l'analyse fine de la règle est un suivi.)

**R6 — `/generateur-satb`.** `GenerateurSATB.tsx` cesse de passer `solution` à `HarmoniaEditor`
(retour exact au comportement d'avant la branche pour cette page). Sa mise à niveau est un
suivi séparé.

**R7 — Analytics.** `KNOWN_TYPES` de `src/app/api/harmony-errors/route.ts` gagne les cinq
nouveaux types (`wrong_chord`, `wrong_bass`, `doubled_leading_tone`, `hidden_fifth`,
`hidden_octave`).

**R8 — LE VERROU : test d'invariant du corpus.** Nouveau test vitest (fichier
`src/exercises/corpus-invariant.test.ts`) : pour CHAQUE exercice SATB de `ALL_EXERCISES`,
`validateSATB(solution, keySignature, false, solution, regles)` ne rend AUCUNE erreur, et le
décompte d'avertissements notés (hors cross_relation) vaut 0 — la reproduction du modèle vaut
100. Le test échoue tant que R1-R5 et les corrections de données ne sont pas complets ; il
verrouille le corpus pour toujours (tout futur exercice invalide casse la CI).

**Corrections de données** : les exercices ÉCRITS MAIN qui échouent encore après R1-R5 sont
corrigés à la donnée (voicing retouché a minima, ou drapeau `libre` si la nature de l'exercice
le veut). **La liste complète des exercices modifiés (id, nature du changement) est remise à
Dany pour validation pédagogique** avant fusion.

## Tests

- R8 est le juge de paix (corpus entier).
- `satb-rules.test.ts` : le mode `libre` (accord faux → wrong_chord ; parallèles présentes →
  silence ; hors tessiture → range) ; la sensible en marche (Bø7→Em7 → silence) vs cadence
  (V→I, V→VI → armée) ; non-régression des tests existants (le test « rompue » doit rester
  vert).
- Générateur : tonalités mineures « Xm » dans les exercices générés ; aucun voicing généré à
  moins de 3 pitch classes pour une tétrade étiquetée (ou l'exercice est écarté).

## Vérification

- `npx vitest run` → tout vert (invariant compris). Build OK. (⚠️ jamais `npx tsc --noEmit`.)
- Contrôle manuel (Dany) : un exercice mineur généré (sensible haussée contrôlée juste), un
  exercice planing (drapeau libre : terminable), `c39-cycle-septiemes-do` (réalisable),
  `/generateur-satb` inchangé.

## Périmètre (YAGNI)

- Pas de refonte de la règle cross_relation (suivi).
- Pas de mise à niveau de satb-generator.ts / page générateur (suivi).
- Pas de nouveaux exercices (chantier ③).

## Critères de succès

- Le test d'invariant passe sur TOUT le catalogue : chaque solution est terminable et vaut 100.
- Les exercices mineurs générés contrôlent la sensible sur la BONNE tonique.
- Les exercices modaux/planing sont terminables (drapeau libre), y compris ceux cassés avant la
  branche.
- `c39-cycle-septiemes-do` est réalisable ; V→I et V→VI contrôlent toujours la sensible.
- `/generateur-satb` strictement inchangé par rapport à main.
