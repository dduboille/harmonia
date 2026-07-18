# Squelette harmonique — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Un outil `/squelette-harmonique` : poser des accords (banque par fonction, renversements) sur 8 mesures × (1-2 accords), réalisation SATB conduite (repli bloc), gravure Verovio + lecture, fautes colorées + fiches, analyse fonctionnelle + cadence, export vers l'atelier.

**Architecture:** Spec `docs/superpowers/specs/2026-07-17-squelette-harmonique-design.md`. Modules purs testés (modèle, réalisation, MusicXML, export, analyse) + un composant client qui assemble les briques existantes (`palette-fonctionnelle`, `voicing-ecole`, `StudioScore`/Verovio, `validateSATB`, `PianoPlayer`, `piece-model`).

**Tech Stack:** TypeScript strict, vitest, React (Next.js — App Router), next-intl, Verovio (WASM).

---

## Notes transverses (donner à CHAQUE implémenteur)

- Branche : `squelette-harmonique`. Départ : **565 tests verts**, main = 4cdadb4.
- **Ne JAMAIS `npx tsc --noEmit`** (OOM). Build : `NODE_OPTIONS="--max-old-space-size=8192" npm run build`. Tests : `npx vitest run`. Ne pas toucher `lilypond-service`.
- TDD sur tout module pur : test d'abord, échec constaté, implémentation, succès.
- Commentaires en français, style du dépôt (contraintes, pas mécanique).
- **Constante de temps Verovio** (verrou existant) : défaut 120 BPM → ronde 4/4 = **2000 ms**, blanche = **1000 ms**. Onset de la mesure i (0-based) = `i*2000` ; 2e blanche d'une mesure = `i*2000 + 1000`.
- Briques (LIRE avant d'appeler) :
  - `src/lib/palette-fonctionnelle.ts` : `construirePalette(tonicPc, mode, niveau) → GroupeFonctionnel[]` ; `AccordPalette { id, nom, pcs, bassPc, degree, fonction, categorie }`.
  - `src/lib/voicing-ecole.ts` : `voiceProgression(specs: SpecEntry[], tonicPc, minor) → VoicedMeasure[] | null` ; `SpecEntry { spec: ChordSpec, firstSopranoPc, bassPc }` ; `ChordSpec { rootPc, thirdPc, fifthPc, seventhPc|null, pcs, fifthOmissible }` ; `VoicedMeasure { soprano, alto, tenor, bass }` (MIDI) ; `RANGES`.
  - `src/lib/satb-rules.ts` : `validateSATB(measures, keySignature?, checkAccidentals?, solution?, regles?)`, `noteToMidi`, `tonaliteDeSignature`, types `Measure`/`Voice`/`ValidationError`.
  - `src/lib/composition-guidee-vers-musicxml.ts` : contient un `decoderMidi` **au diapason de l'armure** (fifths<0 → bémols, =0 → table neutre) et une logique d'armure via `KEY_ACCIDENTALS` — modèle à réutiliser pour épeler les MIDI du squelette.
  - `src/lib/verovio-appariement.test.ts` : le contrat de chargement Verovio en Node (`loadData → renderToMIDI → options → SVG`).
  - `src/components/StudioScore.tsx` : `musicxml` in, `onReady`, `onSelectNote`, `surlignerSelection`, `surlignerFautes`, largeur fluide.
  - `src/components/HarmoniaEditor.tsx` : le bloc « Comprendre ces remarques » (fiches) à extraire (Task 6).
  - `src/lib/piece-model.ts` : `Piece`, `Note` ; `src/components/AtelierComposition.tsx` : `useState<Piece>(pieceEditionVierge)` (l.128) — point d'injection de l'export.

---

## Task 1 : modèle du squelette (pur)

**Files:** Create `src/lib/squelette-model.ts`, Create `src/lib/squelette-model.test.ts`.

Types (repris de la spec) :
```typescript
import type { AccordPalette } from "@/lib/palette-fonctionnelle";
export interface EmplacementAccord { accord: AccordPalette | null; }
export interface MesureSquelette { emplacements: EmplacementAccord[]; } // longueur 1 ou 2
export interface Tonalite { tonicPc: number; mode: "major" | "minor"; keySignature: string; }
export interface Squelette { tonalite: Tonalite; niveau: 1 | 2; mesures: MesureSquelette[]; }
```

Fonctions pures (immuables — renvoient un nouveau `Squelette`) :
- `squeletteVierge(tonalite: Tonalite, niveau: 1|2): Squelette` — 8 mesures, chacune `{ emplacements: [{ accord: null }] }`.
- `poserAccord(sq, mesure: number, emplacement: number, accord: AccordPalette): Squelette`.
- `viderEmplacement(sq, mesure, emplacement): Squelette`.
- `basculerSubdivision(sq, mesure): Squelette` — 1→2 (ajoute un `{accord:null}`), 2→1 (retire le 2e, garde le 1er).
- `changerTonalite(sq, tonalite): Squelette` — vide TOUS les accords (les degrés d'une tonalité n'ont pas de sens dans une autre) mais garde la structure 8×subdivisions.
- `changerNiveau(sq, niveau): Squelette` — si on repasse à 1 (diatonique), vider les emplacements dont l'accord est chromatique (`categorie` hors diatonique) ; sinon inchangé.
- `accordsEnSuite(sq): Array<{ mesure: number; emplacement: number; accord: AccordPalette }>` — les accords remplis, dans l'ordre de lecture (mesure puis emplacement), pour la réalisation.

- [ ] Écrire les tests d'abord : vierge = 8 mesures × 1 emplacement null ; poser/vider ; bascule 1↔2 (et retour) ; `changerTonalite` vide tout ; `changerNiveau(→1)` retire un accord chromatique posé mais garde un diatonique ; `accordsEnSuite` respecte l'ordre et saute les null. Utiliser un `AccordPalette` bâti par `construirePalette` (Do majeur) pour des cas réels.
- [ ] Run → FAIL. Implémenter. Run → PASS. Suite complète verte.
- [ ] Commit `feat(squelette): modele du squelette harmonique (pose, subdivision, tonalite)`

## Task 2 : réalisation SATB (pur)

**Files:** Create `src/lib/squelette-realisation.ts`, Create `src/lib/squelette-realisation.test.ts`.

- `accordVersChordSpec(a: AccordPalette): ChordSpec` — root=`pcs[0]`, third=`pcs[1]`, fifth=`pcs[2]`, seventh=`pcs[3] ?? null`, `pcs`=`a.pcs`, `fifthOmissible` = `((fifth - root + 12) % 12) === 7`. **VÉRIFIER d'abord sur les accords chromatiques** de `construirePalette(niveau 2)` que `pcs[0]` est bien la fondamentale (napolitain, sixte augmentée, dominante secondaire) — écrire un test qui l'atteste ; si un cas échoue, déduire la fondamentale autrement (ex. parse du `degree`) et documenter.
- `realiserSquelette(sq: Squelette): { mesures: VoicedMeasure[][]; approx: boolean }` :
  - Récupère `accordsEnSuite`. Construit `SpecEntry[]` : `bassPc` = `accord.bassPc` ; `firstSopranoPc` pour la 1re entrée = choisir la note la plus haute d'un voicing de départ (implémentation : prendre `spec.rootPc` porté à l'octave soprano, ou tester quelques `pcs` et prendre le 1er qui donne un `buildCandidates` non vide — détail libre, documenté).
  - Appelle `voiceProgression(specs, tonicPc, minor)`. Si non-`null` → `approx=false`, regrouper les `VoicedMeasure` par mesure/emplacement (même ordre que `accordsEnSuite`).
  - Si `null` → **repli bloc** : pour chaque accord, `bass = bassPc` porté dans la tessiture basse ; soprano/alto/ténor = les autres `pcs` empilés vers le haut dans leurs tessitures (fonction locale simple, garantie non-nulle). `approx=true`.
  - Regroupement : renvoie `mesures[i]` = tableau de `VoicedMeasure` (1 ou 2) alignés sur `sq.mesures[i].emplacements` **remplis** (une mesure sans accord → `[]`).
- [ ] Tests d'abord : `accordVersChordSpec` sur I, V7, ii6, et un chromatique ; `realiserSquelette` sur I–IV–V–I (conduite propre, `approx=false`, 4 voix dans les tessitures) ; un cas volontairement inconduisible → `approx=true` et voicing non vide ; mesure vide → `[]`.
- [ ] Run → FAIL → implémenter → PASS. Suite verte.
- [ ] Commit `feat(squelette): realisation SATB conduite avec repli bloc`

## Task 3 : gravure MusicXML 1-2 accords/mesure (pur) + contrat Verovio

**Files:** Create `src/lib/squelette-vers-musicxml.ts`, Create `src/lib/squelette-vers-musicxml.test.ts`, Modify `src/lib/verovio-appariement.test.ts` (ajouter un `describe`).

- `squeletteVersMusicXML(mesures: VoicedMeasure[][], keySignature: string): string` — grand staff 2 portées (S+A portée 1, T+B portée 2), 4/4. Chaque mesure : si 1 accord → rondes ; si 2 accords → deux blanches. Épellation des MIDI **au diapason de l'armure** (réutiliser/extraire le `decoderMidi` key-aware + l'armure de `composition-guidee-vers-musicxml.ts` — préférer une extraction partagée `src/lib/midi-vers-musicxml.ts` si propre, sinon import direct des helpers ; PAS de 3e logique divergente). Mesure vide (`[]`) → silences (une ronde de silence par voix). `xml:id` déterministes optionnels (utile plus tard pour le clic ; non requis en v1).
- [ ] Tests d'abord : 1 mesure I (ronde) → 4 notes, pitches attendus ; 1 mesure à 2 accords (I puis V) → deux blanches par voix, 8 notes ; armure Réb (bémols) → une note noire épelée en bémol, pas en dièse ; mesure vide → silences ; XML bien formé (roundtrip `parseMusicXML`).
- [ ] Dans `verovio-appariement.test.ts` : `describe("appariement du squelette (blanches)")` — une mesure à 2 blanches chargée dans Verovio → `getElementsAtTime(0*2000+1).notes` = 1er accord, `getElementsAtTime(0*2000+1000+1).notes` = 2e accord (verrouille le 1000 ms de la blanche).
- [ ] Run → FAIL → implémenter → PASS. Suite verte + build vert.
- [ ] Commit `feat(squelette): gravure MusicXML 1-2 accords par mesure + contrat Verovio`

## Task 4 : analyse fonctionnelle + cadence (pur)

**Files:** Create `src/lib/squelette-analyse.ts`, Create `src/lib/squelette-analyse.test.ts`.

- `etiquettesFonctionnelles(sq): Array<{ mesure: number; emplacement: number; fonction: Fonction }>` — depuis `AccordPalette.fonction` de chaque accord posé (réexposition simple pour la frise).
- `detecterCadence(sq): "parfaite" | "plagale" | "demi" | "rompue" | null` — sur les **deux derniers accords posés** (par `accordsEnSuite`) via leurs `degree` : V(7)→I = parfaite ; IV→I = plagale ; …→V = demi-cadence ; V(7)→vi = rompue ; sinon `null`. Règle documentée, robuste aux renversements (comparer les degrés sans le chiffrage de renversement, ex. "V6"→"I" = parfaite ? non : une parfaite exige V et I à l'état fondamental — décision : parfaite = V/V7 fond. → I fond. ; sinon si V→I avec renversement = "authentique imparfaite" → on la classe `parfaite` quand même OU on ajoute une nuance ; **trancher simplement : parfaite dès que V(7)→I quel que soit le renversement**, la nuance imparfaite est hors périmètre v1).
- [ ] Tests : I–IV–V–I → parfaite ; …–IV–I → plagale ; …–V → demi ; …–V–vi → rompue ; suite quelconque → null ; robustesse au renversement (V65→I → parfaite).
- [ ] Run → FAIL → implémenter → PASS.
- [ ] Commit `feat(squelette): analyse fonctionnelle et detection de cadence`

## Task 5 : export vers l'atelier (pur + injection)

**Files:** Create `src/lib/squelette-vers-piece.ts`, Create `src/lib/squelette-vers-piece.test.ts`, Modify `src/components/AtelierComposition.tsx`.

- `squeletteVersPiece(mesures: VoicedMeasure[][], tonalite): Piece` — convertir le SATB voicé en modèle `Piece` (LIRE `piece-model.ts` pour la forme exacte : voix, notes, durées, armure/mode). 1 accord = notes rondes ; 2 accords = deux blanches. Chaque voix (S/A/T/B) → une `Voix` de la pièce.
- `AtelierComposition` : au montage, lire `sessionStorage.getItem("squelette->piece")` ; si présent, `JSON.parse` en `Piece`, l'adopter comme état initial (au lieu de `pieceEditionVierge`), puis `removeItem` (chargement unique). Garde-fou try/catch (pièce corrompue → vierge). Modification minimale, aucune régression du démarrage normal (clé absente → comportement actuel).
- [ ] Tests (pur) : `squeletteVersPiece` sur une mesure I + une mesure à 2 accords → `Piece` valide (4 voix, bon nombre de notes, durées ronde/blanche, armure). Idéalement round-trip via `pieceVersMusicXML` (déjà testé) → notes cohérentes.
- [ ] Run → FAIL → implémenter → PASS. Build vert (l'atelier compile).
- [ ] Commit `feat(squelette): export du squelette vers une Piece chargee par l'atelier`

## Task 6 : extraire les fiches pédagogiques en composant partagé

**Files:** Create `src/components/FichesErreurs.tsx`, Modify `src/components/HarmoniaEditor.tsx`.

- Extraire le bloc « Comprendre ces remarques » de `HarmoniaEditor` (la section `errors.length > 0` qui déduplique par type et rend une `<details>` par type avec pastille de sévérité + 3 volets i18n) dans `FichesErreurs.tsx` : props `{ errors: ValidationError[] }`, `useTranslations("satb")`. Aucune régression visuelle dans `HarmoniaEditor` (il importe et rend `<FichesErreurs errors={errors} />` à la même place).
- [ ] Vérif : `npx vitest run` (565 verts) + build vert ; le rendu de l'éditeur SATB est inchangé (revue de diff).
- [ ] Commit `refactor(satb): fiches pedagogiques en composant partage FichesErreurs`

## Task 7 : la page et le composant `SqueletteHarmonique`

**Files:** Create `src/app/[locale]/squelette-harmonique/page.tsx`, Create `src/components/SqueletteHarmonique.tsx`. Modify la navigation (LIRE comment `/composer` et `/composition` sont listés dans le menu/route et ajouter l'entrée au même endroit). Ajouter les clés i18n nécessaires dans `messages/*.json` (namespace neuf `squelette`, 6 langues — FR complet, autres traduites).

Le composant (client) assemble :
- **En-tête** : sélecteur de tonalité (majeur/mineur, ex. liste Do…Si + variantes mineures → `tonicPc` + `keySignature`), interrupteur niveau diatonique/+chromatismes. `blur()` après changement de `<select>` (leçon focus).
- **Banque** : `construirePalette(tonicPc, mode, niveau)` → 4 colonnes par `titre` de `GroupeFonctionnel` ; chaque `AccordPalette` = pastille (`nom` + `degree`) ; clic → `poserAccord` sur l'emplacement sélectionné.
- **Grille 8 mesures** : chaque mesure montre ses 1-2 emplacements (accord `nom`/`degree` ou vide), un bouton bascule 1↔2, clic sur emplacement = sélection (surligné), clic sur croix = `viderEmplacement`.
- **Portée** : `useMemo` → `realiserSquelette(sq)` → `squeletteVersMusicXML(...)` → `<StudioScore>` ; lecture via `PianoPlayer` (LIRE son API, comme `CompositionGuidee`). Bouton Écouter.
- **Fautes** : `validateSATB` travaille sur des `Measure` (noms de notes), une par verticalité, et compare les verticalités consécutives. Donc :
  - Construire la **séquence plate** des accords voicés (aplatir `mesures: VoicedMeasure[][]` en `VoicedMeasure[]`, dans l'ordre de lecture), puis convertir chaque `VoicedMeasure` (MIDI) en `Measure` (satb-rules : `{ bass, tenor, alto, soprano }` de `{ name, octave }`) via l'**épellation au diapason de l'armure** (le MÊME speller MIDI→note que Task 3 — réutiliser). Garder en parallèle, pour chaque index plat, sa position `(mesure, emplacement)`.
  - Si `!approx` : `validateSATB(measuresPlates, keySignature, false, undefined, "ecole")` → mapper chaque `ValidationError` (ses `params.from/to` 1-based / `measure` 0-based sur la séquence PLATE, comme dans HarmoniaEditor) vers l'onset de la position correspondante (`mesure*2000 + (emplacement===1 ? 1000 : 0)`) → `surlignerFautes` + `<FichesErreurs errors={erreurs} />`.
  - Si `approx` : masquer la vérif, afficher « réalisation approximative (conduite non garantie) ».
- **Frise fonctionnelle + cadence** : `etiquettesFonctionnelles` sous chaque accord, `detecterCadence` en fin.
- **Export** : bouton « Étoffer dans l'atelier » → `squeletteVersPiece` → `sessionStorage.setItem` → `router.push` vers `/composer`.
- [ ] Contrôle : `npx vitest run` (verts) + build vert. (Pas de test unitaire du composant ; la logique est dans les modules purs déjà testés.)
- [ ] Commit `feat(squelette): page et UI de l'outil squelette harmonique`

## Task 8 : vérification finale

- [ ] Suite complète + build. Revue (sous-agent) : exactitude de `accordVersChordSpec` sur les chromatiques, du regroupement 1-2 accords, de l'épellation au diapason, de l'export Piece, du câblage fautes/fiches (onsets des blanches), de l'i18n `squelette` (6 langues). Régressions HarmoniaEditor après extraction FichesErreurs.
- [ ] Présentation Dany : contrôle manuel (cadence parfaite → SATB + cadence ; quintes parallèles → têtes rouges + fiche ; mesure à 2 accords ; tonalité mineure ; export → pièce dans l'atelier). Merge après validation.
