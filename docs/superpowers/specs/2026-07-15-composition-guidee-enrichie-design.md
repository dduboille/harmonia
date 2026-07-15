# Spec — Composition guidée enrichie (palette fonctionnelle)

**Date :** 2026-07-15
**Auteur :** Dany Duboille (avec Claude Code)
**Statut :** validé (design)
**Module :** 1 sur 2 du chantier « composition » (le module 2 sera la composition libre)

## Contexte

L'outil « Composition guidée » ([CompositionGuidee.tsx](../../../src/components/CompositionGuidee.tsx))
présente à l'élève une **mélodie imposée** ; il choisit un ou deux accords par mesure dans un
« pool », l'outil réalise le SATB, note la copie et montre une solution.

Deux limites aujourd'hui :

1. **Le pool est plat et sans fonction.** L'élève choisit `Do`, `Rém`, `Sol7`… sans jamais voir
   les rôles tonals. Impossible d'enseigner la **prédominante**.
2. **La théorie est dupliquée, et rudimentaire.** [harmonization-engine.ts](../../../src/lib/harmonization-engine.ts)
   a son propre `parseChord`, sa propre table de fonctions codée en dur (`chordFunction`), et un
   classifieur de notes étrangères inline (`guessNonChordType`) bien plus grossier que celui qu'on
   vient de bâtir. Or le moteur d'analyse (sous-projets A/B/C) fait tout cela, mieux et testé.

Ce module fait de la composition guidée une **façade pédagogique sur le moteur d'analyse** : la
palette et la correction n'inventent plus de théorie, elles appellent `analyzeChord` et le
classifieur de notes étrangères de C1.

## Décisions de cadrage (validées)

- **Palette organisée par fonction** : Tonique / Prédominante / Dominante / Chromatisme. Chaque
  accord porte son chiffre romain + chiffrage, calculé par le moteur.
- **Chromatisme oui, modulation non.** Les exercices restent en **une seule tonalité**. La palette
  couvre prédominantes, dominantes secondaires (V/x), sensibles de degré (vii°/x), emprunts,
  napolitain, sixtes augmentées, et la **taxonomie complète des notes étrangères** de C1. La
  modulation est reportée à un module ultérieur.
- **Palette filtrée par niveau** : niveau 1 = T / SD / D **diatoniques** ; niveau 2 = + dominantes
  secondaires et emprunts ; niveau 3 = tout (napolitain, sixtes augmentées incluses). Un débutant
  ne voit pas des accords qu'il n'utilisera pas.

## Architecture

Le principe : **on ne réécrit aucune théorie.** Tout passe par le moteur existant.

### 1. La palette fonctionnelle — `src/lib/palette-fonctionnelle.ts` (nouveau)

`construirePalette(tonicPc, mode, niveau)` génère la palette, en groupes fonctionnels. Chaque
entrée est un accord **avec sa basse** (pour les renversements et le napolitain) :

```ts
interface AccordPalette {
  id: string;          // "V7", "ii6", "bII6", "V7/ii"…
  nom: string;         // "Sol7", "Rém", "Réb"… (le nom réel, orthographe française)
  pcs: number[];       // classes de hauteurs
  bassPc: number;      // la basse (donne le renversement)
  degree: string;      // "V7", "ii6", "bII6"… — calculé par analyzeChord
  fonction: Fonction;  // "T" | "SD" | "D"
  categorie: Categorie; // diatonique | dominante_secondaire | … (via analyzeChord)
}

interface GroupeFonctionnel {
  titre: "Tonique" | "Prédominante" | "Dominante" | "Chromatisme";
  accords: AccordPalette[];
}
```

L'étiquette (`degree`, `fonction`, `categorie`) n'est **pas** codée à la main : elle vient de
`analyzeChord({ pcs, bassPc, … }, tonicPc, mode)`. La génération de la palette est donc elle-même
un client du moteur — DRY, et cohérente avec l'analyseur de partitions à l'affichage près.

### 2. L'analyse en direct de la copie — `src/lib/correction-harmonisation.ts` (nouveau)

Remplace `harmonization-engine.ts`. Prend l'exercice + la copie de l'élève (les accords posés,
avec leur basse) et rend, en s'appuyant sur le moteur :

- **par accord** : `analyzeChord` → chiffre romain, chiffrage, fonction, catégorie chromatique ;
  `annotateResolutions` sur la séquence → une dominante secondaire est-elle résolue sur sa cible ?
- **par note de la mélodie** : le classifieur `classer` de [notes-etrangeres.ts](../../../src/lib/notes-etrangeres.ts).
  La mélodie EST une ligne mélodique : on construit le voisinage (précédente/suivante) à partir des
  notes consécutives, et on classe chaque note contre l'accord actif (note de l'accord, ou retard /
  appoggiature / passage / broderie / échappée / anticipation / pédale).

### 3. Le score repensé

La note récompense la **syntaxe fonctionnelle**, jugée sur les fonctions RÉELLES du moteur (et non
la table codée en dur actuelle) :

- une vraie **prédominante avant la dominante** (SD → D → T) ;
- la **résolution des dominantes secondaires** sur leur cible (via `annotateResolutions`) ;
- une **cadence franche** en fin de phrase ;
- pénalise les enchaînements faibles (une dominante qui recule vers une sous-dominante).

Les notes étrangères bien traitées (préparées, résolues) ne pénalisent plus la compatibilité : le
classifieur les explique au lieu de les compter comme des « évitements ».

### 4. La réalisation SATB honore le renversement

`computeATB` ([CompositionGuidee.tsx](../../../src/components/CompositionGuidee.tsx)) met
aujourd'hui **toujours la fondamentale à la basse**. Pour réaliser un `I6`, un `V6/5`, un `bII6`,
la basse doit être celle **spécifiée par l'accord de la palette** (`bassPc`). C'est le seul vrai
chantier interne du module : la conduite des voix supérieures reste inchangée, seule la basse
suit le renversement demandé.

### 5. L'affichage

- La **grille d'harmonisation** devient une palette à **groupes fonctionnels** (onglets ou
  colonnes T / SD / D / Chromatisme), filtrée par le niveau de l'exercice. Chaque bouton montre le
  nom réel **et** l'étiquette fonctionnelle.
- Le **panneau d'analyse** sous la grille affiche, par accord, fonction + chiffrage ; par note, la
  classification C1. Il remplace l'ébauche actuelle (`HarmonizationPanel`).
- La **solution de référence** gagne les étiquettes fonctionnelles (chiffres romains + chiffrage)
  à côté des noms d'accords.

### 6. Le contenu

- Le champ `pool: string[]` de `MelodyExercise` **disparaît** au profit de la palette générée
  (par tonalité + niveau). `suggestedChords`, `solutionExplanation`, `hint`, `concepts` restent.
- Les exercices existants restent jouables (leurs `suggestedChords` sont toujours valides — le
  moteur sait les étiqueter). On **ajoute quelques exercices** qui mettent en avant la prédominante
  et le chromatisme (une cadence avec ii6, un V7/V, un emprunt à bVI).
- La correction accepte désormais un accord **avec renversement** dans la copie de l'élève : le
  modèle de la copie passe de `string[][]` à une structure portant l'`id` de l'accord de palette
  (qui connaît sa basse).

## Tests (vitest)

- **Génération de palette** : en Do majeur niveau 3, la prédominante contient ii, ii6, IV, bII6 ;
  la dominante V, V7, V6/5, vii°7 ; le chromatisme V7/ii, V7/V, iv, bVI, la sixte allemande. En
  niveau 1, le groupe Chromatisme est vide.
- **Étiquettes via le moteur** : chaque entrée de palette a le `degree`/`fonction` que
  `analyzeChord` rendrait — pas d'étiquette codée en dur qui divergerait de l'analyseur.
- **Classification des notes de la mélodie** : une note de passage dans la mélodie contre un accord
  tenu est nommée « note de passage » ; un retard préparé, « retard ».
- **Score fonctionnel** : une harmonisation ii6 – V7 – I marque mieux qu'une IV – I – V ; une
  dominante secondaire résolue est récompensée, non résolue signalée.
- **Renversement SATB** : un `V6/5` place bien la sensible à la basse dans la réalisation.
- **Non-régression** : les exercices existants restent notés de façon cohérente (pas d'effondrement
  du score sur une copie correcte).

## Vérification

- `npx vitest run` → tout vert.
- `NODE_OPTIONS="--max-old-space-size=8192" npm run build` → succès.
  (⚠️ `npx tsc --noEmit` sature la mémoire de ce poste — ne jamais le lancer.)
- Contrôle pédagogique : harmoniser une mélodie avec une prédominante ii6 puis un V7 doit être
  reconnu, expliqué et bien noté ; un choix chromatique pertinent (V7/V bien résolu) valorisé.

## Hors périmètre (YAGNI)

- **Modulation** dans les exercices → module ultérieur (le moteur C2 existe, mais la pédagogie de
  la modulation guidée est un chantier à part).
- **Composition libre** (saisie de notes, durées riches) → module 2.
- Plus de deux accords par mesure, rythme harmonique fin → non traité ici.
- Réharmonisation jazz avancée (substitutions, extensions au-delà de la 7e) → hors sujet.

## Points de vigilance

- **Le modèle de la copie change** (`string[][]` → accords avec renversement). C'est une rupture
  interne : bien vérifier la sauvegarde/relecture de l'état, la lecture audio, et l'affichage.
- **La palette générée doit rester lisible.** Trop d'accords tuent la clarté ; le filtrage par
  niveau est le garde-fou, mais il faudra surveiller le niveau 3 (le plus fourni).
- **Cohérence avec l'analyseur.** Puisque la palette et la correction utilisent le même moteur, une
  étiquette de la composition guidée doit toujours coïncider avec ce que l'analyseur de partitions
  afficherait pour le même accord dans la même tonalité.

## Critères de succès

- La palette est organisée par fonction, étiquetée par le moteur, filtrée par niveau.
- Prédominantes, dominantes secondaires, emprunts, napolitain, sixtes augmentées sont proposés et
  correctement étiquetés.
- Les notes de la mélodie sont classées par la vraie taxonomie C1.
- Le score récompense la syntaxe fonctionnelle (prédominante → dominante → tonique, résolutions,
  cadences).
- La réalisation SATB honore les renversements.
- La théorie dupliquée de `harmonization-engine.ts` est remplacée par des appels au moteur.
- Aucune régression ; le build passe.
