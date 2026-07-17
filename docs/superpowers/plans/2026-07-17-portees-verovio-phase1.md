# Portées Verovio — Phase ① (vitrine SATB) — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** HarmoniaEditor (646 exercices, /editeur, /generateur-satb) gravé par Verovio avec clic-sur-note et fautes colorées ; VexFlow supprimé du projet.

**Architecture:** Spec : `docs/superpowers/specs/2026-07-17-portees-verovio-design.md`. Un convertisseur pur `satb-vers-musicxml.ts` (état éditeur → grand staff MusicXML), `StudioScore` réutilisé tel quel (il a DÉJÀ `onSelectNote`, `surlignerSelection`, `surlignerFautes`) + un petit prop additif `onReady`, câblage dans HarmoniaEditor sur le motif éprouvé d'AtelierComposition (effets re-appliqués sur `[musicxml, …]`).

**Tech Stack:** TypeScript strict, vitest, Verovio 6.2.0 (WASM, import dynamique), next-intl.

---

## Notes transverses (à donner à CHAQUE implémenteur)

- Branche : `portees-verovio`. Départ : 541 tests verts, main = d534af3.
- **Ne JAMAIS `npx tsc --noEmit`** (OOM). Build : `NODE_OPTIONS="--max-old-space-size=8192" npm run build`.
- Tests : `npx vitest run`. Ne pas toucher au sous-module `lilypond-service` (sale, on l'ignore).
- Verovio 6.2.0 : la table de temps MIDI ne se construit PAS paresseusement — séquence
  obligatoire `loadData → renderToMIDI → options → SVG` (cf. `src/lib/verovio-appariement.test.ts`).
- Tempo : Verovio par défaut = 120 BPM → ronde 4/4 = **2000 ms**. Onset de la mesure i
  (0-based) = `i * 2000` ms. Le test Node de la Task 2 VERROUILLE cette constante.
- État SATB : `Measure = Record<Voice, { name: NoteName | null; octave: number }>`,
  `Voice = "bass" | "tenor" | "alto" | "soprano"`, `NoteName` avec #/##/b/bb
  (types dans `src/lib/satb-rules.ts`). `noteToMidi(name, octave)` existe dans satb-rules.
- Armures : `keySignature` de type `"D"`, `"Bm"`, `"Eb"`… ; `showKeySignature: boolean`
  décide si l'armure est gravée (sinon altérations accidentelles sur chaque note).
- Leçon UI : les `<select>` volent le focus clavier — tout nouveau `<select>`/bouton doit
  `blur()` après usage (le garde keydown existant ignore SELECT).

## Task 1 : convertisseur `satb-vers-musicxml` (pur + tests)

**Files:** Create `src/lib/satb-vers-musicxml.ts`, Create `src/lib/satb-vers-musicxml.test.ts`.

- [ ] Écrire les tests d'abord (vitest) : signature
  `satbVersMusicXML(measures: Measure[], keySignature?: string, showKeySignature?: boolean): string`.
  Cas : (a) 1 mesure Do majeur C3/C4/E4/G4 → XML valide contenant 1 part, 2 staves,
  4 voix en rondes (S+A staff 1 voix 1/2, T+B staff 2 voix 5/6), `<divisions>` cohérentes ;
  (b) armure `"D"` avec `showKeySignature=true` → `<fifths>2</fifths>` et PAS d'`<accidental>`
  sur F#/C# ; (c) `showKeySignature=false` en Ré majeur → `<fifths>0</fifths>` et altérations
  écrites sur chaque F#/C# (`<alter>1</alter>` + `<accidental>sharp</accidental>`) ;
  (d) tonalité mineure `"Bm"` → `<fifths>2</fifths>` (armure du relatif majeur) ;
  (e) note absente (`name: null`) → silence (`<rest/>` ronde) dans la voix concernée ;
  (f) doubles altérations `##`/`bb` → `<alter>2/-2</alter>` ;
  (g) XML bien formé (parseable par un parseur XML strict — utiliser `parseMusicXML` de
  `src/lib/musicxml-parse.ts` si applicable, sinon un check de structure).
  Table des quintes : réutiliser/copier celle de `src/lib/piece-vers-musicxml.ts` (LIRE ce
  fichier d'abord et imiter son style/structure — c'est le grand frère de ce module).
- [ ] Run : `npx vitest run src/lib/satb-vers-musicxml.test.ts` → FAIL (module absent).
- [ ] Implémenter (module PUR, zéro import React). 4/4, rondes, une « mesure » d'exercice =
  une mesure gravée. Pas de `<sound>`/tempo explicite (le défaut 120 est le contrat).
- [ ] Run tests → PASS. Puis suite complète `npx vitest run` → 541+ verts.
- [ ] Commit : `feat(portees): convertisseur etat SATB vers MusicXML grand staff`

## Task 2 : contrat d'appariement sur le XML généré (test Node)

**Files:** Modify `src/lib/verovio-appariement.test.ts` (ajouter un `describe`, ne rien retirer).

- [ ] Nouveau `describe("appariement du MusicXML SATB genere")` : générer via
  `satbVersMusicXML` 2 mesures (m0 : C3/C4/E4/G4, m1 : G2/B3/D4/G4, armure "C"),
  charger dans Verovio (même séquence que le describe existant), puis vérifier :
  (a) `getElementsAtTime(0 * 2000 + 1).notes` contient 4 notes dont les
  `getMIDIValuesForElement(id).pitch` = {48, 60, 64, 67} ;
  (b) idem à `1 * 2000 + 1` → {43, 59, 62, 67} ;
  (c) chaque id a un `time` ≈ onset attendu (tolérance 1 ms). Ceci VERROUILLE la constante
  2000 ms/mesure et l'appariement clic/couleur de bout en bout.
- [ ] Run : `npx vitest run src/lib/verovio-appariement.test.ts` → PASS.
- [ ] Commit : `test(portees): contrat d'appariement du MusicXML SATB (2000 ms par mesure)`

## Task 3 : `StudioScore.onReady` (additif)

**Files:** Modify `src/components/StudioScore.tsx`.

- [ ] Ajouter un prop optionnel `onReady?: () => void`, appelé à la fin de `graver()`
  (gravure initiale ET regravures au resize). Garder la signature actuelle intacte —
  Studio et AtelierComposition ne changent pas. Utiliser une ref pour `onReady` afin de ne
  pas re-déclencher l'effet de gravure quand le callback change d'identité.
- [ ] `npx vitest run` (rien ne casse) + build vert.
- [ ] Commit : `feat(portees): StudioScore signale la fin de gravure (onReady)`

## Task 4 : bascule de HarmoniaEditor (cœur de la phase)

**Files:** Modify `src/components/HarmoniaEditor.tsx`.

- [ ] LIRE d'abord `src/components/AtelierComposition.tsx` lignes ~140-190 (le motif des
  effets de surlignage re-appliqués sur `[musicxml, …]` et du `onSelectNote`).
- [ ] Remplacer le bloc portées : supprimer l'import dynamique `VexFlowScoreClient` et les
  fonctions `measureToVexFlow`/`allMeasuresToVexFlow` (l.104-150 env.) ; importer
  `StudioScore` + `StudioScoreRef` et `satbVersMusicXML`.
  `const musicxml = useMemo(() => satbVersMusicXML(measures, keySignature, showKeySignature), […])`.
  Conserver les labels SOPRANO·ALTO / TÉNOR·BASSE et l'indicateur de mesure active existants.
- [ ] **Sélection** : effet sur `[musicxml, activeMeasure, activeVoice, pretDeGravure]` →
  `scoreRef.current?.surlignerSelection(...)` avec
  `{ onsetMs: activeMeasure * 2000, midis: [noteToMidi(name, octave)] }` si la note active
  existe, `null` sinon. `pretDeGravure` : compteur incrémenté par `onReady` (Task 3) pour
  re-appliquer après chaque regravure.
- [ ] **Fautes colorées** : effet sur `[musicxml, errors, pretDeGravure]` → construire les
  cibles depuis `errors` (shape `ValidationError` de satb-rules) :
  - mesures concernées : `params.from`/`params.to` sont en numérotation HUMAINE (1-based) →
    indices `from-1` et `to-1` ; sinon `measure` (vérifier sa base en lisant le moteur —
    l'implémenteur DOIT confirmer 0-based vs 1-based sur 2 exemples du code de validateSATB) ;
  - voix concernées : `voices` ([Voice, Voice]) ou `params.voice`, sinon TOUTES les voix de
    la mesure (cas wrong_chord/missing_accidental sans voix précise — vérifier dans le moteur) ;
  - pour chaque (mesureIdx, voix) : si la note existe →
    `{ onsetMs: mesureIdx*2000, midis: [midi], severite: severity==="error" ? "faute" : "avertissement" }`.
  - NE PAS colorer les `cross_relation` (signalée, non comptée — cohérence avec le barème) :
    décision spec ; les autres warnings (sensible interne, directes) SONT colorés en ambre.
  - Priorité visuelle : appliquer les fautes PUIS la sélection (l'ordre des appels suffit :
    `surlignerSelection` après `surlignerFautes` — vérifier le CSS de StudioScore : les
    classes coexistent, `harmonia-selection` doit gagner ; si conflit, ajuster l'ordre des
    règles CSS dans StudioScore, dernier `!important` gagne).
- [ ] **Clic-sur-note** : `onSelectNote={({ onsetMs, midi }) => …}` →
  `const mIdx = Math.round(onsetMs / 2000)` ; chercher dans `measures[mIdx]` la PREMIÈRE voix
  (ordre bass→tenor→alto→soprano) dont `noteToMidi(name, octave) === midi` →
  `setActiveMeasure(mIdx); setActiveVoice(voix)`. En cas d'unisson entre deux voix, la
  première gagne (comportement documenté en commentaire). Aucun changement aux flèches/raccourcis.
- [ ] Vérifier qu'aucune régression sur : saisie clavier, altérations, bouton solution,
  `showKeySignature`, responsive (le conteneur StudioScore est fluide — retirer le
  `width={700}` fixe, garder `overflow:auto`).
- [ ] `npx vitest run` + build verts. Contrôle visuel local si possible (`npm run dev`) :
  page `/editeur`.
- [ ] Commit : `feat(portees): l'editeur SATB grave par Verovio — clic sur note et fautes colorees`

## Task 5 : suppression de VexFlow

**Files:** Delete `src/components/VexFlowScore.tsx`, Delete `src/components/VexFlowScoreClient.tsx` ; Modify `package.json` (retirer `vexflow`), `src/components/HarmoniaEditor.tsx` (commentaire d'en-tête l.8), `src/exercises/generator.ts` (commentaire l.450 : reformuler sans référence VexFlow).

- [ ] `grep -ri vexflow src/` → uniquement des commentaires restants à nettoyer, puis zéro.
- [ ] `npm uninstall vexflow` (met à jour package.json + lockfile).
- [ ] `npx vitest run` + build verts.
- [ ] Commit : `chore(portees): suppression de VexFlow — Verovio grave toute la vitrine`

## Task 6 : vérification finale

- [ ] Suite complète + build + `grep -ri vexflow src/ package.json` vide.
- [ ] Revue finale (sous-agent) : exactitude musicale du convertisseur (armures mineures,
  doubles altérations), solidité du mapping erreurs → couleurs (chaque type d'erreur vérifié
  contre le moteur), régressions UI. Puis présentation Dany : contrôle manuel
  (quinte parallèle → têtes rouges ; clic ; flèches ; `/generateur-satb`). Merge après validation.
