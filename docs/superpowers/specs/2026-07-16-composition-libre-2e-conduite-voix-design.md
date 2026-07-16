# Spec — Composition libre, phase 2 · 2e : contrôle de la conduite des voix

**Date :** 2026-07-16
**Auteur :** Dany Duboille (avec Claude Code)
**Statut :** validé (design)
**Situe :** module 2 (composition libre) → phase 2 → sous-projet **2e** (la conduite des voix)

## Contexte

L'atelier `/composer` écrit un choral SATB à quatre voix (2c) qu'on peut corriger sur place (2d). Il
manque le contrôle qui fait le cœur de l'enseignement de l'harmonie : la **conduite des voix**.
L'ancien éditeur mélodique (retiré) le faisait sur un modèle « une note par temps » ; le 2e le
rebranche sur le modèle à **rythmes indépendants** de l'atelier, en direct.

C'est le **premier** des quatre enrichissements demandés (dans l'ordre : conduite des voix → analyse
en direct → accords dans une voix → insertion au milieu). Chacun est un sous-projet distinct.

## Décisions de cadrage (validées)

**Règles contrôlées :**

1. **Quintes / octaves parallèles** — sur **toutes** les paires de voix, entre deux verticalités
   consécutives : les deux voix bougent dans le même sens (intervalles de mouvement non nuls et de
   même signe) et l'intervalle réduit (mod 12) vaut **7** (quinte) avant ET après → quintes
   parallèles ; **0** (octave/unisson) avant ET après → octaves parallèles. **Sévérité : faute (rouge).**
2. **Quintes / octaves directes** — **seulement soprano–basse** : mouvement **direct** (les deux
   voix dans le même sens), arrivée sur un intervalle réduit de 7 (quinte) ou 0 (octave/unisson), et
   le soprano arrive **par saut** (|Δmidi soprano| > 2 demi-tons). **Sévérité : avertissement (orange).**
3. **Croisements** — à une verticalité : S sous A, A sous T, ou T sous B (midi de la voix haute <
   midi de la voix basse). **Sévérité : faute (rouge).**
4. **Écart** — à une verticalité : plus d'une octave (Δmidi > 12) entre **S–A** ou **A–T**.
   **Sévérité : avertissement (orange).**
5. **Tessiture** — une note hors ambitus de sa voix : **S 60-79, A 55-72, T 48-67, B 40-60** (midi).
   **Sévérité : avertissement (orange).**

**Affichage** : panneau listant les fautes en direct + surlignage des notes fautives sur la
partition (rouge = faute, orange = avertissement) + clic sur une faute → sélection de la note.

## Architecture

### 1. `src/lib/conduite-voix.ts` (nouveau) — pur, testé

**Verticalités.** Les voix ont des rythmes indépendants : on reconstruit les « accords » aux instants
d'attaque.

```ts
import type { NomVoix } from "./piece-model";
import type { Curseur } from "./composition-edition";

/** Une note qui sonne dans une voix à un instant, avec sa position pour le pointage. */
export interface SonVoix {
  midi: number;
  position: Curseur;   // { mesure, voix, note } — la note dont ce son provient
  attaque: boolean;    // true si la note commence exactement à cet instant
}

/** Une verticalité : ce qui sonne dans chaque voix à un instant d'attaque donné. */
export interface Verticalite {
  onset: number;                              // ticks depuis le début de la pièce
  mesure: number;                             // mesure où tombe cet instant (pour l'affichage)
  sons: Partial<Record<NomVoix, SonVoix>>;    // voix absente = silence / pas encore entrée
}

export function verticalites(piece: Piece): Verticalite[];
```

Construction : pour chaque voix, dérouler ses événements en `(onsetTicks, midi | null)` (null =
silence), une note occupant `[onset, onset+duree)`. Rassembler tous les onsets d'**attaque de note**
(dédupliqués, triés). Pour chaque onset `t`, la voix « sonne » la note dont l'intervalle contient
`t` ; `attaque = (onset de la note === t)`. Une voix silencieuse à `t` (silence ou pas encore
commencée) n'a pas d'entrée.

**Détection.**

```ts
export type TypeFaute =
  | "quintes-paralleles" | "octaves-paralleles"
  | "quinte-directe" | "octave-directe"
  | "croisement" | "ecart" | "tessiture";

export interface Faute {
  type: TypeFaute;
  severite: "faute" | "avertissement";
  message: string;      // ex. "Quintes ‖ S–B", "Soprano hors tessiture"
  mesure: number;       // 0-based ; l'affichage ajoute 1
  positions: Curseur[]; // 1 à 2 notes fautives (à surligner / sélectionner)
}

export function detecterFautes(piece: Piece): Faute[];
```

- **Verticales** (croisement, écart, tessiture) : un passage sur chaque verticalité.
- **Horizontales** (parallèles, directes) : un passage sur chaque paire de verticalités consécutives.
  Pour une paire de voix, ne comparer que si les deux voix sonnent aux DEUX verticalités. Le
  mouvement d'une voix = `midi(v2) - midi(v1)`. **Parallèle** : les deux mouvements non nuls et de
  même signe, intervalle réduit 7 (ou 0) aux deux verticalités. **Direct (S–B)** : les deux
  mouvements non nuls et de même signe (mouvement direct — si une voix tient, ce n'est pas direct),
  arrivée sur 7 ou 0, et `|Δsoprano| > 2`.
- Les libellés de voix : S / A / T / B. Ambitus et labels centralisés dans une constante locale.
- `positions` : pour une faute verticale, la ou les notes en cause ; pour une faute horizontale, les
  notes de la **seconde** verticalité (là où la faute se констate), pour les deux voix concernées.

Numéros MIDI via `midiDeHauteur` (déjà dans `piece-model.ts`). Onsets via un calcul local
(cumul de `dureeEnDivisions` par voix + offset de mesure `mesure × capaciteMesure`).

### 2. `src/components/StudioScore.tsx` (modifié)

Nouvelle méthode sur `StudioScoreRef` pour surligner un ENSEMBLE de notes fautives, chacune avec sa
sévérité :

```ts
surlignerFautes(fautes: Array<{ onsetMs: number; midi: number; severite: "faute" | "avertissement" }>): void;
```

Deux classes CSS : `.harmonia-faute` (rouge, ex. `#E53E3E`) et `.harmonia-avert` (orange, ex.
`#DD6B20`). Même appariement que `surlignerSelection` (`getElementsAtTime` + `getMIDIValuesForElement`),
appliqué à plusieurs cibles. Efface le surlignage de fautes précédent à chaque appel. Indépendant du
surlignage de sélection (violet) et de lecture.

### 3. `src/components/AtelierComposition.tsx` (modifié)

- `const fautes = useMemo(() => detecterFautes(piece), [piece]);`
- Un effet surligne les fautes : pour chaque `Faute`, chaque position → `(onsetMs, midi)` via
  `onsetMsMidiDeSelection`, transmises à `scoreRef.current?.surlignerFautes(...)`. Recalcul quand
  `musicxml`/`piece` changent (comme la sélection).
- Un **panneau** « Conduite des voix » liste les fautes (rouge/orange selon la sévérité), avec le
  libellé + « mesure N ». Vide → un état « Aucune faute détectée ». Cliquer une ligne →
  `setCurseur(faute.positions[0])` (sélectionne la note, réutilise 2d).
- Le panneau vit à côté de l'analyse existante (dans la colonne, ou sous la partition — au choix de
  l'implémentation, cohérent avec la mise en page actuelle).

## Tests (vitest) — `src/lib/conduite-voix.test.ts`

- **Verticalités** : une voix tenue (blanche) pendant que l'autre bouge (deux noires) produit deux
  verticalités ; à la seconde, la voix tenue sonne toujours mais `attaque=false` → mouvement oblique,
  pas parallèle.
- **Quintes parallèles** : S et B montant de Do–Sol à Ré–La (deux quintes, même sens) → détecté ;
  mouvement contraire vers une quinte → non détecté.
- **Octaves parallèles** : Do–Do à Ré–Ré même sens → détecté.
- **Quinte directe (S–B)** : soprano arrivant sur la quinte par saut, même sens que la basse →
  détecté ; par degré conjoint → NON détecté ; entre voix internes (A–T) → NON détecté.
- **Croisement** : alto au-dessus du soprano → détecté (message « Alto au-dessus du soprano » ou
  équivalent).
- **Écart** : S–A > une octave → détecté ; exactement une octave → non.
- **Tessiture** : une basse à Do5 (72 > 60) → hors tessiture.
- **positions** : chaque faute pointe la (les) bonne(s) note(s) `{mesure, voix, note}`.
- **Pièce propre** : un court choral sans faute → `detecterFautes` renvoie `[]`.

## Vérification

- `npx vitest run` → tout vert.
- `NODE_OPTIONS="--max-old-space-size=8192" npm run build` → succès. (⚠️ jamais `npx tsc --noEmit`.)
- Contrôle manuel (`/composer`, Pro) : écrire des quintes parallèles S–B → apparaissent en rouge dans
  le panneau et sur la partition ; cliquer la faute sélectionne la note ; corriger la note fait
  disparaître la faute en direct.

## Périmètre (YAGNI)

- **Pas** de détection des unissons directs internes, fausses relations, quintes « par mouvement
  contraire » tolérées, résolution de la sensible, doublures interdites → au-delà du 2e.
- **Pas** de correction automatique : on SIGNALE, l'élève corrige (avec les outils de 2d).
- Le panneau ne trie/filtre pas finement (groupé par ordre d'apparition) : YAGNI.

## Points de vigilance

- **Rythmes indépendants** : bien traiter le mouvement oblique (une voix tient) comme non parallèle.
  C'est le piège principal du passage du modèle « par temps » au modèle à rythmes libres.
- **Faux positifs des directes** : la règle est volontairement restreinte (S–B + saut au soprano)
  pour rester enseignable ; ne pas l'élargir.
- **Surlignages concurrents** : fautes (rouge/orange), sélection (violet) et lecture (rouge) doivent
  coexister sans s'effacer mutuellement (classes distinctes, effacement ciblé par classe).
- **Cohérence des positions** : les `Curseur` renvoyés doivent être de vrais index de notes du
  modèle (utilisables tels quels par `onsetMsMidiDeSelection` et `setCurseur`).

## Critères de succès

- Les cinq familles de règles sont détectées en direct pendant l'écriture.
- Les notes fautives se surlignent (rouge = faute, orange = avertissement) et la liste les nomme.
- Cliquer une faute sélectionne la note concernée.
- Aucune faute sur un choral correct ; les rythmes indépendants ne créent pas de faux parallèles.
- Build et tests verts.
