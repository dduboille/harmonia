# Spec — Relevé supérieur : l'outil `/releve` (DNSPM ③, phase outil)

**Date :** 2026-07-19
**Auteur :** Dany Duboille (avec Claude Code)
**Statut :** validé (réponses produit du 2026-07-19 : relevé harmonique seul, par paliers
basse → chiffrage → SATB, nouvelle page `/releve`)

## Contexte

Dernier chantier de la piste DNSPM : le **relevé** (écoute synthétisée → notation), pilier de la
formation musicale supérieure. L'existant : `/dictee` (QCM d'étiquettes d'accords, VisualisationNote)
et le mode « dictée » du `/generateur-satb` (écrire les 4 voix de mémoire, tout-ou-rien). Le relevé
supérieur structure cela en **paliers progressifs** avec écoutes contrôlées, sur une page dédiée.
Une phase 2 (cours 48 « Méthodologie du relevé ») suivra, adossée à l'outil.

## Décisions validées

1. **Périmètre** : relevé **harmonique** uniquement (pas de relevé mélodique en v1).
2. **Trois paliers** : ① noter la **basse** seule → ② identifier les **chiffrages** → ③ écrire le
   **SATB complet**. L'élève choisit son palier librement (pas de verrouillage séquentiel en v1).
3. **Emplacement** : nouvelle page `/releve` (hub `/creation` ou section outils — suivre le montage
   des pages outil existantes). Le mode dictée du générateur reste tel quel.

## Architecture

Page `src/app/[locale]/releve/page.tsx` + composant client `src/components/Releve.tsx` +
un module pur `src/lib/releve-model.ts`. Tout le reste est réutilisation.

### Source des progressions (réutilisation totale)

`src/lib/satb-generator.ts` : les **2082 combos** gabarit × tonalité × doigté, tous voicés
d'école et notés 100 (verrou CI existant). Le tirage d'un exercice de relevé = un combo viable
(même logique de tirage que `GenerateurSATB`). La solution SATB complète, la basse et les degrés
(symboles du gabarit) en découlent — rien à générer de neuf.

### Modèle (pur, testé) — `src/lib/releve-model.ts`

```typescript
type Palier = "basse" | "chiffrage" | "satb";
type ModeEcoute = "entrainement" | "examen";      // examen : écoutes comptées
interface ExerciceReleve {
  template: …; tonalite: string; doigte: …;        // le combo tiré
  solution: Record<Voice, NoteEntry>[];             // du générateur
  symboles: string[];                               // degrés par mesure ("II6", "V7"…)
}
```
Fonctions pures : tirage (aléa injecté pour testabilité), **notation par palier** :
- `noterBasse(saisie: NoteEntry[], solution)` — comparaison par **classe de hauteurs** (l'octave
  libre : entendre une basse à l'octave près est le standard du relevé) ; résultat par mesure.
- `noterChiffrages(choix: string[], symboles)` — exact par mesure.
- palier SATB : rien de neuf — `validateSATB(…, solution, "ecole")` + `noteExercice` existants.
- `optionsChiffrage(exercice)` — les pastilles proposées au palier 2 : les symboles du gabarit
  + distracteurs plausibles tirés des autres gabarits (même nombre par mesure, mélangés —
  leçon : jamais la bonne réponse à position fixe).

### Écoute (réutilisation)

Lecture accord par accord et progression entière via le chemin audio existant (PianoPlayer,
même séquencement que le mode dictée du générateur). **Deux modes** :
- **Entraînement** : écoutes illimitées, réécoute par accord autorisée ;
- **Examen** : **6 écoutes** de la progression entière, pas de réécoute par accord, compteur
  affiché — la discipline du concours. (Valeur 6 constante nommée, ajustable.)

### Les trois paliers (UI)

- **① Basse** : `HarmoniaEditor` en saisie (sans solution armée, `regles:"libre"` pour ne pas
  colorer des « fautes » de conduite sur une basse seule) — l'élève ne remplit que la basse ;
  bouton « Vérifier » de la page lit l'état via **`onComplete`** (prop existante) ou un bouton
  dédié, et note via `noterBasse` : par-mesure vert/rouge + score. Après validation, révéler
  la basse corrigée gravée.
- **② Chiffrage** : la basse CORRECTE est donnée (affichée gravée, jouée) ; pour chaque mesure,
  choisir le chiffrage parmi les pastilles d'`optionsChiffrage`. Correction par mesure + score.
- **③ SATB complet** : l'expérience dictée complète — `HarmoniaEditor` avec `solution` armée
  (conformité + résolutions + fautes colorées + fiches, tout l'existant), notation `noteExercice`.
- Après chaque palier : bouton « Voir la solution » (gravure de la solution complète) et
  « Nouvel exercice » (nouveau tirage). Filtres : niveau du gabarit (1-3), tonalités
  (majeures/mineures/toutes) — mêmes filtres que le générateur si trivial, sinon tirage global.
- Score de session (bonnes mesures / total, par palier) — pas de persistance en v1.

## Vérification

- Tests purs : `noterBasse` (octave-agnostique, par mesure), `noterChiffrages`,
  `optionsChiffrage` (bonne réponse présente, distracteurs ≠ solution, ordre non biaisé —
  aléa injecté). Verrous existants inchangés (651 tests, dont satb-generator 2082 combos).
- Build + suite verts. Contrôle manuel Dany : palier 1 (entendre I-IV-V-I, noter la basse,
  se tromper d'une mesure → rouge sur la bonne mesure) ; palier 2 (pastilles) ; palier 3
  (dictée complète notée) ; mode examen (compteur d'écoutes qui bloque à 0).

## Périmètre (YAGNI)

- **Inclus v1** : les 3 paliers, 2 modes d'écoute, tirage sur les 2082 combos, scores de session.
- **Reporté** : relevé mélodique ; persistance/statistiques ; paliers verrouillés séquentiels ;
  saisie du rythme (tout est en rondes, comme le générateur) ; cours 48 « Méthodologie du
  relevé » = phase 2 du chantier (après validation de l'outil).

## Critères de succès

- `/releve` : entendre une progression d'école et la relever par paliers, avec la discipline
  d'examen (6 écoutes) ou en entraînement libre. Aucune régression (651+ tests verts).
