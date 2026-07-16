# Spec — Composition libre, phase 2 · 2f : analyse harmonique en direct

**Date :** 2026-07-16
**Auteur :** Dany Duboille (avec Claude Code)
**Statut :** validé (design)
**Situe :** module 2 (composition libre) → phase 2 → sous-projet **2f** (l'analyse en direct)

## Contexte

L'atelier `/composer` écrit un choral SATB (2c), le corrige sur place (2d) et contrôle la conduite
des voix en direct (2e). Il manque le regard du moteur d'analyse : **quels accords l'élève est en
train d'écrire, et quelles cadences** — ce que le Studio fait déjà sur un MusicXML importé.

C'est le **deuxième** des quatre enrichissements demandés (conduite des voix → **analyse en
direct** → accords dans une voix → insertion au milieu).

## Décisions de cadrage (validées)

1. **Tonalité choisie par l'élève** : sélecteur armure (−7…+7) × mode (majeur/mineur) dans
   l'atelier. L'armure est déjà dans le modèle `Piece` ; le mode s'y ajoute. Changer de tonalité ne
   transpose PAS les notes posées (leurs altérations sont absolues) ; seule la notation (armure,
   altérations affichées) et la lecture analytique changent.
2. **Affichage** : panneau compact « Analyse harmonique » dans la colonne de l'atelier, à côté de
   « Conduite des voix » — une ligne par mesure.
3. **Contenu** : accords chiffrés (degré + pastille de fonction T/SD/D colorée), notes étrangères
   nommées, cadences signalées à leur mesure. **Sans** plan tonal ni compteurs de chromatisme
   (8 mesures d'exercice : ils chargent plus qu'ils n'éclairent).
4. **Approche retenue** : extraire l'orchestration `analyze()` de la route
   `/api/analyse-partition` en module pur et l'appeler côté client — LA même chaîne partout
   (Studio, analyseur, atelier), même motif que l'extraction d'`analyse-chaine.ts`.
   Rejetés : analyser le modèle `Piece` sans passer par MusicXML (seconde voie d'analyse qui peut
   diverger, duplication de la segmentation testée) ; appeler la route en debounce (réseau + auth
   pour un calcul local).

## Bug corrigé au passage : la tonique du mode mineur

La route dérive la tonique de la seule armure (`FIFTHS_PC` = tonique **majeure**), sans regarder
le mode : une pièce en la mineur (armure 0, mode mineur) est analysée en « Do mineur », une pièce
en Do mineur (armure −3) en « Mi♭ mineur ». Le cœur (`analyzeChord`, sensible haussée…) gère bien
le mineur ; c'est la dérivation qui manque le relatif. **Correction dans le module extrait** :
mode mineur → tonique = relative mineure de l'armure (tonique majeure + 9 demi-tons, mod 12).
La route (donc le Studio et l'analyseur) en profite.

## Architecture

### 1. `src/lib/analyse-resultat.ts` (nouveau) — pur, testé

L'orchestration actuelle de la route, déménagée telle quelle, plus la dérivation de tonique :

```ts
/** Tonique (pitch class) d'une armure et d'un mode. Mineur = relatif de l'armure. */
export function toniqueDe(fifths: number, mode: "major" | "minor"): number;

/** L'analyse complète d'une partition déjà lue. Pure ; peut tourner au navigateur. */
export function analyserPartition(score: ParsedScore, fichier: string): AnalysisResult;
```

- Les types `AnalysisResult`, `MesureResult`, `CadenceResult` déménagent ici.
  La route les **ré-exporte** (avec `Fonction`, `Categorie`, etc. déjà ré-exportés) pour ne rien
  casser dans `Studio.tsx`/`StudioAnalyse.tsx` — leurs imports ne changent pas.
- `toniqueDe` : `FIFTHS_PC` (la table actuelle de la route) pour la tonique majeure ;
  si `mode === "minor"`, `(majeure + 9) % 12`. Le libellé (`tonalite`, `tonicFr`) suit.
- La route ne garde que le HTTP (auth, plan, lecture du fichier, .mxl) et appelle
  `analyserPartition`.

### 2. Modèle : le mode dans `Piece`

- `Piece` gagne `mode?: "major" | "minor"` (optionnel, défaut `"major"` — aucun constructeur
  existant à retoucher).
- `pieceVersMusicXML` écrit `<key><fifths>…</fifths><mode>…</mode></key>`.
- `parseMusicXML` lit déjà `<mode>` (défaut major) : l'aller-retour est complet.

### 3. Atelier : sélecteur de tonalité + analyse mémoïsée

- **Sélecteur de tonalité** dans la barre du sélecteur de voix : un `<select>` des 30 tonalités
  (armures −7…+7 × 2 modes), libellées « Do majeur », « La mineur », « Sol majeur »… (le format
  du moteur : tonique `NOTE_FR` + mode). Choisir met à jour `piece.armure` et
  `piece.mode` → regravure + réanalyse immédiates.
- **Analyse** : `const analyse = useMemo(() => { try { return analyserPartition(parseMusicXML(musicxml), ""); } catch { return null; } }, [musicxml]);`
  — recalcul à chaque frappe, comme `detecterFautes` (chaîne pure, 8 mesures : quelques ms).
  `parseMusicXML` et la chaîne tournent déjà au navigateur (le Studio les y utilise pour la
  lecture).

### 4. `src/components/AtelierAnalyse.tsx` (nouveau) — le panneau compact

- Props : `{ analyse: AnalysisResult | null }`.
- Une ligne par mesure : « M1 », puis les accords de la mesure — nom chiffré + degré + pastille
  de fonction (styles `FONC_STYLE` **exportés** depuis `StudioAnalyse.tsx`, additive) ; notes
  étrangères en petit sous l'accord (« Ré (note de passage) »).
- Les cadences de la mesure en fin de ligne (« Cadence parfaite »), style discret.
- Mesure sans accord : ligne omise. Aucune mesure analysée (pièce vide ou analyse en échec) :
  « Posez des notes pour voir l'analyse. »
- En tête du panneau : la tonalité lue (« La mineur ») — rappel de ce que le moteur regarde.
- Pas de plan tonal, pas de compteurs, pas de mesure active (pas de lecture synchronisée ici).

Dans `AtelierComposition.tsx`, le panneau vit sous la partition, juste AVANT le panneau
« Conduite des voix » (l'analyse dit ce qu'on écrit, la conduite ce qui cloche).

## Tests (vitest)

- **`analyse-resultat.test.ts`** :
  - `toniqueDe` : (0, major) → 0 (Do) ; (0, minor) → 9 (la) ; (−3, minor) → 0 (do) ;
    (1, major) → 7 (Sol) ; (2, minor) → 11 (si).
  - `analyserPartition` sur un MusicXML majeur simple : mêmes accords/cadences que la chaîne
    actuelle (non-régression de l'extraction) ; `tonalite` correcte.
  - `analyserPartition` sur un MusicXML la mineur (armure 0, mode minor) : `tonalite` = « La
    mineur », le V avec sol♯ reconnu comme dominante (degré V), pas comme chromatisme.
- **Aller-retour atelier** : une `Piece` SATB I–IV–V–I en Do (mode major par défaut) →
  `pieceVersMusicXML` → `parseMusicXML` → `analyserPartition` : degrés I, IV, V, I et une cadence
  parfaite à la dernière mesure.
- **`piece-vers-musicxml`** : le `<mode>` écrit (major par défaut, minor si `piece.mode`).

## Vérification

- `npx vitest run` → tout vert.
- `NODE_OPTIONS="--max-old-space-size=8192" npm run build` → succès. (⚠️ jamais `npx tsc --noEmit`.)
- Contrôle manuel (`/composer`, Pro) : écrire Do–Fa–Sol–Do en accords SATB → le panneau chiffre
  I, IV, V, I et signale la cadence parfaite en direct ; passer en « la mineur » relit la pièce
  dans le nouveau ton ; le Studio analyse toujours correctement un import majeur, et un import
  mineur affiche enfin la bonne tonalité.

## Périmètre (YAGNI)

- **Pas** de plan tonal/modulations ni compteurs de chromatisme dans le panneau (le moteur les
  calcule ; on ne les affiche pas).
- **Pas** de transposition des notes posées au changement d'armure.
- **Pas** de synchronisation lecture ↔ analyse (pas de « mesure active » dans le panneau).
- **Pas** de suggestion/correction : on MONTRE l'analyse, l'élève écrit.

## Points de vigilance

- **Voix incomplètes** : pendant la saisie, une mesure peut n'avoir qu'une ou deux voix — la
  chaîne voit des « accords » d'une note ou deux. C'est le comportement voulu (l'analyse suit ce
  qui existe) ; le choix par le coût peut rester prudent (`?`), et c'est acceptable.
- **Ré-exports de la route** : `Studio.tsx` et `StudioAnalyse.tsx` importent leurs types depuis
  la route — les ré-exports doivent rester exacts (vérifiés par le build).
- **Le mineur change des résultats existants** : la correction de la tonique modifie l'analyse
  des imports mineurs dans le Studio/l'analyseur — c'est le but, mais le noter au déploiement.
- **Performance** : recalcul par frappe = export MusicXML + parse + chaîne. Sur 8 mesures c'est
  quelques ms ; si un ralentissement se sentait un jour, un debounce serait trivial à ajouter
  (hors périmètre).

## Critères de succès

- Les accords et cadences s'affichent en direct pendant l'écriture, dans la tonalité choisie.
- Le sélecteur de tonalité change l'armure gravée ET la lecture analytique, sans transposer.
- Armure 0 + mineur = la mineur (bug du relatif corrigé, aussi pour le Studio/l'analyseur).
- Aucune régression : mêmes analyses qu'avant en majeur, build et tests verts.
