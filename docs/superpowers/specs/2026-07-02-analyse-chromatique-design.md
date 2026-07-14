# Spec — Analyse fonctionnelle du chromatisme (analyseur de partitions)

**Date :** 2026-07-02
**Auteur :** Dany Duboille (avec Claude Code)
**Statut :** validé (design)
**Sous-projet :** A (sur 3) — voir « Découpage » ci-dessous

## Problème

L'analyseur de partitions (`src/app/api/analyse-partition/route.ts`) détecte les accords,
les degrés, les fonctions (T/SD/D) et les cadences. Mais sa logique fonctionnelle est
binaire : si la fondamentale d'un accord n'est **pas dans la gamme**, il est étiqueté
`degree: "chr"`, `fonction: "?"` et compté dans `nombreChromatiques`
([route.ts:116](../../../src/app/api/analyse-partition/route.ts#L116)).

Autrement dit **tout le chromatisme est jeté dans une poubelle « inconnu »**. Un `A7` en
Do majeur n'est pas reconnu comme la dominante secondaire du second degré (`V7/ii`),
alors que c'est le cas de chromatisme le plus courant du répertoire tonal.

## Constats techniques (établis par lecture du code)

1. **La détection d'accords est permissive, pas exacte.** `identifyChord` cherche un motif
   d'intervalles **inclus** dans l'ensemble des classes de hauteurs
   ([route.ts:93](../../../src/app/api/analyse-partition/route.ts#L93)). Les notes étrangères
   ne cassent donc pas la détection. **Mais** elle retourne le **premier motif de la liste**
   qui correspond : `Do-Mi-Sol-La` est lu **Am7**, pas **Do6** — arbitrairement.
2. **La basse n'est jamais suivie.** Le parseur convertit les notes en classes de hauteurs et
   jette l'octave ([route.ts:202](../../../src/app/api/analyse-partition/route.ts#L202)).
   Conséquence : aucun renversement, aucun chiffrage, et impossible de trancher Do6 / Am7.
3. **L'orthographe enharmonique est perdue** (un Sol♭ devient un Fa#). Combiné à l'absence de
   basse, cela rend les **sixtes augmentées** non fiables (une 6te allemande est
   enharmoniquement un accord de 7e de dominante).
4. **La tonalité est globale et fixe** (lue une fois dans le `fifths` du XML) : aucune
   modulation n'est possible en l'état.

## Découpage en sous-projets

Le chantier est trop gros pour une seule spec. Trois sous-projets indépendants :

| | Sous-projet | Contenu | Statut |
|---|---|---|---|
| **A** | **Chromatisme fonctionnel** | Dominantes secondaires, sensibles de degré, emprunts modaux, napolitain. Sur les accords déjà détectés. | **cette spec** |
| **B** | Fiabilité de la détection | Suivi de la basse → renversements/chiffrage, lève l'ambiguïté Do6/Am7, permet napolitain confirmé et sixtes augmentées (nécessite aussi de conserver l'orthographe). | à venir |
| **C** | Tonalité glissante | Tonicisation *vs* modulation, accords pivots, plan tonal. | à venir |

## Décisions de cadrage (validées)

- **Étiquetage :** on nomme **toujours** la dominante secondaire, et on **qualifie sa
  résolution** (résolue / non résolue / chaîne de dominantes). On n'attend pas la résolution
  pour nommer.
- **Catégories couvertes en A :** dominantes secondaires, sensibles de degré, emprunts modaux,
  napolitain. (Sixtes augmentées reportées en B — voir constat 3.)
- **Restitution :** étiquettes enrichies dans l'onglet Mesures + ventilation dans le Résumé +
  **nouvel onglet « Chromatisme »** avec explication rédigée par événement.
- **Tests :** ajout de **vitest** pour tester le moteur théorique sur des cas connus.

## Architecture

### Extraction du moteur

La logique musicale est aujourd'hui mêlée au parsing XML et à la couche HTTP dans un seul
fichier de 365 lignes. On **extrait le moteur théorique** dans un module pur :

- **Créer `src/lib/harmonic-analysis.ts`** — fonctions **pures**, sans XML ni HTTP :
  identification d'accord, analyse fonctionnelle diatonique, classification du chromatisme,
  détection de résolution. C'est ce module qui est testé unitairement.
- **`src/app/api/analyse-partition/route.ts`** conserve le parsing MusicXML et
  l'orchestration, et délègue toute la théorie au module.

Bénéfice : le cœur musical devient **testable et auditable** — indispensable pour un outil
destiné à des conservatoires, où une étiquette fausse décrédibilise l'ensemble.

### Règles d'analyse (ordre de priorité)

Pour un accord (fondamentale + qualité) dans une tonalité (tonique + mode) :

1. **Diatonique** — **toutes les classes de hauteurs de l'accord** sont dans la gamme → degré
   romain + fonction (T/SD/D).

   > **Correction importante par rapport au code actuel.** Aujourd'hui la diatonicité est jugée
   > sur la **seule fondamentale** ([route.ts:112-117](../../../src/app/api/analyse-partition/route.ts#L112-L117)).
   > Conséquence : un **Fa mineur en Do majeur** a une fondamentale diatonique (Fa) et serait
   > étiqueté `IVm` — il n'atteindrait jamais la règle « emprunt ». En exigeant que **toutes** les
   > notes soient dans la gamme, Fa mineur (qui contient un Lab) devient non diatonique et tombe
   > correctement en règle 4 → `iv` (emprunt). C'est un **changement de comportement volontaire** :
   > les accords à fondamentale diatonique mais à qualité altérée sont désormais correctement
   > reclassés.
2. **Dominante secondaire** — l'accord est de qualité **majeure** ou **7 de dominante**, et sa
   fondamentale est à la **quinte juste au-dessus** d'un degré **tonicisable** :
   - majeur : cibles `ii`, `iii`, `IV`, `V`, `vi` ;
   - mineur : cibles `III`, `iv`, `V`, `VI`, `VII`.
   - On **exclut** la tonique (ce serait le V réel) et les degrés diminués (on ne tonicise pas
     un degré diminué).
   → `degree = "V/x"` ou `"V7/x"`, `categorie = "dominante_secondaire"`, `cible = x`,
   `fonction = "D"`.
3. **Sensible de degré** — l'accord est **diminué**, **7e diminuée** ou **7e demi-diminuée**, et
   sa fondamentale est un **demi-ton sous** une cible tonicisable.
   → `degree = "vii°/x"` / `"vii°7/x"` / `"viiø7/x"`, `categorie = "sensible_degre"`,
   `cible = x`, `fonction = "D"`.
4. **Emprunt modal** — toutes les classes de hauteurs de l'accord appartiennent à la gamme du
   **mode homonyme** (majeur → mineur naturel, et inversement), et l'accord n'a pas déjà été
   classé en 2 ou 3.
   → `degree` = étiquette de degré altéré (`iv`, `bIII`, `bVI`, `bVII`, `ii°`…),
   `categorie = "emprunt"`, `fonction` selon le degré (voir table ci-dessous).
5. **Napolitain** — accord **majeur** dont la fondamentale est le **2e degré abaissé**
   (tonique + 1 demi-ton).
   → `degree = "bII"`, `categorie = "napolitain"`, `fonction = "SD"`. L'explication précise que
   le renversement (le « 6 ») ne sera confirmable qu'au sous-projet B.
6. **Sinon** — `categorie = "chromatique"`, `fonction = "?"` (le résidu réellement inexpliqué,
   désormais bien plus petit).

**Table des fonctions pour les emprunts** (majeur) : `iv` → SD · `ii°` → SD · `bVI` → SD ·
`bIII` → T · `bVII` → SD.

### Détection de la résolution

On examine l'accord **suivant** dans la séquence :
- sa fondamentale est celle de la **cible** → `resolue = true` (« résolue ») ;
- il est lui-même une **dominante secondaire dont la fondamentale est la cible** →
  `resolue = true`, explication « chaîne de dominantes » (ex. `E7 → A7 → Rém`) ;
- sinon → `resolue = false` (« non résolue — rompue secondaire »).

Si l'accord chromatique est le dernier de la séquence, `resolue = false`.

## Modèle de données

```ts
export type Categorie =
  | "diatonique"
  | "dominante_secondaire"
  | "sensible_degre"
  | "emprunt"
  | "napolitain"
  | "chromatique";

export interface ChordResult {
  rootFr: string;
  quality: string;
  degree: string;        // "V7/ii", "iv", "bVI", "bII", "I"… (plus jamais "chr" si expliqué)
  degreeNum: number;     // 0 si non diatonique
  fonction: Fonction;    // "T" | "SD" | "D" | "?"
  categorie: Categorie;  // NOUVEAU
  cible?: string;        // NOUVEAU — degré tonicisé, ex. "ii"
  resolue?: boolean;     // NOUVEAU
  beat?: number;
}

export interface ChromaEvent {
  measure: number;
  beat?: number;
  accord: string;        // "La7"
  degree: string;        // "V7/ii"
  categorie: Categorie;
  cible?: string;
  resolue?: boolean;
  explication: string;   // phrase rédigée, prête à afficher
}

export interface AnalysisResult {
  // … champs existants inchangés …
  nombreChromatiques: number;   // total d'accords non diatoniques (inchangé)
  chromatisme: {                // NOUVEAU
    tonicisations: number;      // dominantes secondaires + sensibles de degré
    emprunts: number;
    napolitains: number;
    inexpliques: number;
    evenements: ChromaEvent[];
  };
}
```

## Interface (`src/components/AnalysePartition.tsx`)

- **Onglet Mesures** : l'accord affiche son vrai chiffrage (`V7/ii` au lieu de `chr`), avec un
  **badge de catégorie** et une marque de résolution (✓ / ✗).
- **Onglet Résumé** : la statistique « Accords chromatiques » devient une **ventilation** :
  *3 tonicisations · 2 emprunts · 1 inexpliqué*.
- **Nouvel onglet « Chromatisme »** : la liste des événements, chacun avec son explication
  rédigée — ex. « m.5 · La7 = V7/ii — tonicise le ii (Ré mineur), résolue à la mesure suivante ».
  Si aucun chromatisme : message d'état vide.

## Tests (vitest)

Le projet n'a **aucun framework de test** aujourd'hui. On ajoute **vitest** et un fichier
`src/lib/harmonic-analysis.test.ts` couvrant au minimum :

- `A7` en Do majeur → `V7/ii`, cible `ii`, catégorie `dominante_secondaire`.
- `A7 → Rém` → `resolue = true` ; `A7 → Fa` → `resolue = false`.
- `E7 → A7 → Rém` → chaîne de dominantes (`E7` résolue).
- `D7` en Do majeur → `V7/V`. `E7` → `V7/vi`.
- `C#°7` en Do majeur → `vii°7/ii`.
- `Fam` (Fa mineur) en Do majeur → `iv`, catégorie `emprunt`, fonction `SD`.
- `Lab` en Do majeur → `bVI` (emprunt). `Sib` → `bVII` (emprunt).
- `Réb` en Do majeur → `bII` (napolitain), fonction `SD`.
- Un accord diatonique (`Sol7` en Do) reste `V7`, catégorie `diatonique` (non-régression).
- Un accord réellement inclassable reste `chromatique` / `?`.

## Vérification

- `npx vitest run` → tous les tests passent.
- `npm run build` → succès (le build complet est le contrôle d'intégration ; `tsc --noEmit`
  seul sature la mémoire sur ce poste).
- Contrôle manuel : importer une partition contenant un `A7` en Do majeur et vérifier
  l'étiquette, la ventilation du Résumé et l'onglet Chromatisme.

## Hors périmètre (YAGNI)

- **Sixtes augmentées** (nécessitent basse + orthographe → sous-projet B).
- **Renversements / chiffrage** (basse → sous-projet B).
- **Modulations, accords pivots, tonalité glissante** (sous-projet C).
- Refonte de la détection d'accords (l'ambiguïté Do6/Am7 est un problème réel mais relève du
  sous-projet B ; on ne la traite pas ici).
- Aucune modification des cadences existantes.

## Critères de succès

- Un `A7` en Do majeur est étiqueté `V7/ii` avec sa résolution qualifiée.
- Les quatre catégories (dominante secondaire, sensible de degré, emprunt, napolitain) sont
  reconnues et expliquées.
- Le nombre de chromatismes « inexpliqués » chute nettement sur une partition tonale réelle.
- Le moteur théorique est isolé dans un module pur, couvert par des tests vitest qui passent.
- Le build passe ; aucune régression sur l'analyse diatonique et les cadences.
