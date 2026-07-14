# Spec — Modèle de notes, basse et renversements (analyseur de partitions)

**Date :** 2026-07-02
**Auteur :** Dany Duboille (avec Claude Code)
**Statut :** validé (design)
**Sous-projet :** B (sur 3)

## Contexte

Le sous-projet A a doté l'analyseur d'un moteur harmonique testé (95 tests) capable de
reconnaître dominantes secondaires, sensibles de degré, emprunts et napolitain, en arbitrant
les lectures ambiguës par la résolution.

Mais ce moteur travaille sur des accords fournis par un **parseur MusicXML défaillant**. Ce
sous-projet reconstruit le socle : le modèle de notes.

## Problèmes constatés (par lecture du code)

### 🔴 1. Le parseur ignore `<backup>` — les voix multiples sont désynchronisées

MusicXML écrit les **voix multiples** d'une même partie en reculant le curseur temporel avec des
balises `<backup>`. Le parseur actuel ne les traite pas : il accumule simplement
`currentOnset += lastDuration` en parcourant les `<note>`
([route.ts:181-207](../../../src/app/api/analyse-partition/route.ts#L181-L207)).

Conséquence : dans **toute partition à plusieurs voix** (choral SATB, piano à deux portées,
contrepoint), la voix 2 est placée **après** la voix 1 au lieu d'être simultanée. **Les onsets
sont faux, donc les accords verticaux aussi.** C'est vraisemblablement la cause principale des
résultats décevants sur le répertoire réel.

### 🔴 2. Les durées et les tenues ne sont pas modélisées

Chaque note n'est enregistrée qu'au **beat où elle attaque**
([route.ts:204-206](../../../src/app/api/analyse-partition/route.ts#L204-L206)). Une basse en
ronde sous des voix qui bougent **disparaît dès le 2e temps** : les accords des temps suivants
sont analysés sans leur basse, voire incomplets.

### 🟠 3. La basse n'est jamais identifiée

Le parseur convertit les notes en **classes de hauteurs** et jette l'octave
([route.ts:202](../../../src/app/api/analyse-partition/route.ts#L202)). Sans basse : aucun
renversement, aucun chiffrage, et l'ambiguïté Do6 / Am7 est tranchée **arbitrairement** par
l'ordre de la liste des motifs d'accords.

### 🟠 4. L'orthographe enharmonique est perdue

`step` + `alter` sont collapsés en classe de hauteur : un Mi♭ devient un Ré#. Cela empêche
de distinguer une **sixte allemande** d'une **septième de dominante** (enharmoniquement
identiques), et fait afficher des noms de notes faux.

## Décisions de cadrage (validées)

- **Périmètre :** modèle de notes complet — durées, tenues, octave **et** orthographe.
- **Chiffrage :** convention **française / conservatoire** — `I`, `I6`, `I6/4` ; `V7`, `V6/5`,
  `V+4`, `V+2`.
- **Granularité :** annotation **aux changements d'harmonie** (les temps consécutifs portant le
  même accord sont fusionnés en un segment), comme le ferait un musicien.
- **Sixtes augmentées :** détectées **par l'orthographe** (6te augmentée entre le ♭6 à la basse
  et le #4), ce qui les distingue d'un V7 enharmonique.

## Architecture

### 1. `src/lib/musicxml-parse.ts` — parseur pur (NOUVEAU)

XML → **timeline de notes réelles**, sans HTTP ni logique harmonique :

```ts
export interface ParsedNote {
  step: string;        // "C".."B" — orthographe conservée
  alter: number;       // -2..+2
  octave: number;
  pc: number;          // classe de hauteur (dérivée)
  midi: number;        // hauteur absolue → permet de trouver la basse
  onset: number;       // en divisions, depuis le début de la mesure
  duration: number;    // en divisions
  measure: number;
  voice: string;
}
```

Doit traiter correctement :
- **`<backup>` / `<forward>`** — déplacement du curseur temporel (voix multiples). **C'est le
  correctif le plus important du sous-projet.**
- **`<tie>`** — notes liées : la durée est étendue plutôt que de créer une nouvelle attaque.
- `<chord/>` (note simultanée à la précédente), `<rest>`, `<grace>` (sans durée), changements de
  `<divisions>`.

### 2. `src/lib/harmony-segmentation.ts` — segmentation (NOUVEAU)

De la timeline → **quelles notes sonnent à l'instant T** (une note sonne de `onset` à
`onset + duration`, tenues comprises). Puis **détection du rythme harmonique** : les temps
consécutifs portant le même accord sont fusionnés.

```ts
export interface Segment {
  measure: number;
  beatStart: number;
  beatEnd: number;
  notes: ParsedNote[];   // toutes les notes sonnantes
  bass: ParsedNote;      // la note réelle la plus grave (midi minimal)
}
```

### 3. Identification d'accord repensée

Fini le « premier motif trouvé » de `identifyChord`. **Sélection par score**, guidée par la
**basse** :
- on essaie chaque note du segment comme fondamentale ;
- on score les candidats (combien de notes de l'accord sont expliquées, combien restent
  étrangères) ;
- la **basse** départage : elle détermine le **renversement**, et tranche Do6 / Am7.

Sortie enrichie : `{ rootPc, quality, inversion, figure }` où `figure` est le **chiffrage
français** :

| Renversement | Triade | Septième |
|---|---|---|
| état fondamental | *(rien)* | `7` |
| 1er renversement | `6` | `6/5` |
| 2e renversement | `6/4` | `+4` |
| 3e renversement | — | `+2` |

Le degré affiché combine chiffre romain + chiffrage : `I`, `I6`, `I6/4`, `V7`, `V6/5`, `V+4`,
`V+2`.

### 4. Ce que la basse et l'orthographe débloquent

- **Renversements et chiffrage** sur tous les accords.
- **Napolitain confirmé** : `bII6` — le « 6 » (1er renversement), que le sous-projet A ne pouvait
  qu'annoncer sans le vérifier.
- **Sixtes augmentées** (italienne, française, allemande) : détectées par la 6te augmentée entre
  le ♭6 (à la basse) et le #4, grâce à l'orthographe conservée. Fonction **prédominante (SD)**.

### 5. Intégration

- `src/app/api/analyse-partition/route.ts` — consomme le parseur et la segmentation ; ne contient
  plus de parsing XML « maison ».
- `src/lib/harmonic-analysis.ts` (sous-projet A) — reçoit désormais la **basse** et
  l'**orthographe** ; ses règles gagnent le renversement et la détection des sixtes augmentées.
- `src/components/AnalysePartition.tsx` — affiche le chiffrage et la basse ; les accords sont
  présentés **par segment** (changements d'harmonie), plus par temps.

## Tests (vitest)

Le parseur est le cœur du risque. Tests sur des extraits MusicXML réels :

- **`<backup>` à deux voix** : deux voix simultanées produisent bien un accord vertical, pas deux
  accords successifs. *(Test de non-régression du bug principal.)*
- **Note liée (`<tie>`)** : une blanche liée à une blanche sonne bien pendant 4 temps, sans double
  attaque.
- **Basse tenue** : une ronde à la basse sous des voix mobiles reste présente aux temps 2, 3 et 4.
- **Basse et renversement** : Do-Mi-Sol avec Mi à la basse → `I6` ; avec Sol à la basse → `I6/4`.
- **Do6 vs Am7** : le même ensemble de notes donne `I6`... selon la basse (Do → accord de Do ;
  La → Am7).
- **Septièmes renversées** : `V6/5`, `V+4`, `V+2`.
- **Napolitain** : Réb-Fa-Lab avec Fa à la basse → `bII6`.
- **Sixte allemande vs V7** : Lab-Do-Mib-Fa# (6te augm. allemande) ≠ Lab-Do-Mib-Solb (V7 de Réb),
  distingués par l'orthographe.
- **Segmentation** : deux temps portant le même accord sont fusionnés en un seul segment.
- Non-régression : les 95 tests du sous-projet A continuent de passer.

## Vérification

- `npx vitest run` → tous les tests passent (les 95 de A + ceux de B).
- `NODE_OPTIONS="--max-old-space-size=8192" npm run build` → succès.
  (⚠️ `npx tsc --noEmit` seul sature la mémoire sur ce poste.)
- Contrôle manuel : importer un **choral de Bach** (partition à 4 voix réelles) et vérifier que
  les accords verticaux sont enfin corrects, avec leurs renversements.

## Hors périmètre (YAGNI)

- **Modulations, tonalité glissante, accords pivots** → sous-projet C.
- Reconnaissance des notes étrangères en tant que telles (le moteur reste tolérant : les notes
  hors accord sont ignorées par le score, pas étiquetées).
- Rythme, articulation, nuances : seule la hauteur et la durée sont exploitées.

## Critères de succès

- Un **choral à 4 voix** est analysé avec les bons accords verticaux (le bug `<backup>` est mort).
- Une **basse tenue** reste présente sur toute sa durée.
- Les **renversements et le chiffrage français** apparaissent (`I6`, `V6/5`, `V+2`…).
- Do6 et Am7 sont **distingués par la basse**.
- Le **napolitain** est confirmé en `bII6`, les **sixtes augmentées** sont reconnues.
- Le parseur et la segmentation sont des modules purs, couverts par des tests vitest.
- Aucune régression sur les 95 tests du sous-projet A ; le build passe.
