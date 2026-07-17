# Spec — Présentation des portées : gravure Verovio partout (roadmap n° 4)

**Date :** 2026-07-17
**Auteur :** Dany Duboille (avec Claude Code)
**Statut :** validé (roadmap + 3 réponses produit du 2026-07-17 : clic-sur-note OUI,
fautes colorées OUI, vitrine d'abord)

## Contexte

Trois familles de rendu coexistent :

1. **Verovio** (`StudioScore.tsx`, 222 l.) — gravure professionnelle : Studio (import) et
   Atelier `/composer`. MusicXML → SVG, appariement (time, pitch) par tête, lecture MIDI.
2. **VexFlow** (`VexFlowScore.tsx`/`GrandStaffSATB`, 295 l.) — consommé UNIQUEMENT par
   `HarmoniaEditor.tsx` (portée d'AFFICHAGE : props `treble`/`bass` en chaînes
   `"(E5 C5)/w | …"`, interaction 100 % clavier/boutons). Porte toute la vitrine :
   646 exercices SATB, `/editeur`, `/generateur-satb`.
3. **SVG dessiné à la main** — `CompositionGuidee.tsx` (1191 l., « l'ancienne présentation »),
   `NotesEtrangeresAdvanced.tsx` (677 l.), `NotesEtrangeresExercice.tsx` (706 l.),
   `VisualisationNote.tsx` (297 l., utilisé par `DicteeHarmonique` et `DicteeIntervalles`).

Demande de Dany : la gravure professionnelle « dans ce module comme dans tous les autres ».

## Décisions

1. **Un composant partagé `PartitionVerovio`** (généralisation de `StudioScore`) :
   entrée MusicXML, options : `onSelectNote` (appariement clic → { time, pitch } comme
   aujourd'hui), **coloration par note** (liste d'`xml:id` → couleur, injectée en `fill`
   sur les têtes SVG), hauteur/échelle. `StudioScore` devient un alias/wrapper mince ou est
   remplacé — pas de troisième moteur. La séquence obligatoire reste
   `loadData → renderToMIDI → options → SVG` (verrou `verovio-appariement.test.ts`).
2. **Convertisseurs vers MusicXML par module** (pures, testables) :
   - `src/lib/satb-vers-musicxml.ts` : état de l'éditeur SATB (mesures × 4 voix, armure,
     altérations) → grand staff 2 portées / 4 voix avec `xml:id` déterministes
     (`m{mesure}-{voix}`) pour coloration et clic.
   - CompositionGuidee : mélodie + voicings SATB → même format (réutiliser
     `piece-vers-musicxml.ts` si le modèle s'y prête, sinon convertisseur dédié).
   - Dictées/notes étrangères : convertisseurs minimaux par cas (quelques notes/accords).
3. **Phase ① — la vitrine (HarmoniaEditor)** :
   - Remplacer `GrandStaffSATB` par `PartitionVerovio` + `satb-vers-musicxml`.
   - **Clic-sur-note** : cliquer une tête sélectionne (mesure, voix) — mêmes effets que la
     navigation clavier actuelle ; les flèches et raccourcis existants ne changent pas.
     Attention au vol de focus (leçon : `blur()` sur les `<select>`).
   - **Fautes colorées** : les notes visées par une erreur passent en rouge (#C53030), par un
     avertissement en ambre (#B7791F) — mêmes codes que les pastilles des fiches. Le moteur
     `validateSATB` fournit déjà mesure(s) et voix par erreur ; mapping erreur → `xml:id`.
     La note sélectionnée garde un marquage distinct (priorité visuelle : sélection > erreur).
   - VexFlow (`VexFlowScore*.tsx` + dépendance npm) est SUPPRIMÉ à la fin de la phase ①
     (aucun autre consommateur).
4. **Phase ② — CompositionGuidee** : le SVG main est remplacé par la gravure (mélodie +
   réalisation SATB). Portée d'affichage (l'interaction reste dans la palette d'accords).
5. **Phase ③ — NotesEtrangeres ×2 + VisualisationNote (dictées)** : même bascule ; les
   surlignages spécifiques (note étrangère en couleur) passent par la coloration par note.
6. **Chaque phase = branche, revue, validation Dany, merge séparé.** La phase ① est le
   présent chantier ; ② et ③ suivent le même gabarit.

## Vérification

- Verrous existants inchangés : 541 tests dont `verovio-appariement.test.ts` et
  `pedagogie-i18n.test.ts` ; l'invariant corpus ne bouge pas (le moteur de règles n'est pas touché).
- Nouveaux tests : `satb-vers-musicxml` (armures, altérations accidentelles, xml:id stables,
  4 voix sur 2 portées) ; appariement clic sur le MusicXML généré (même contrat Node que
  StudioScore) ; mapping erreur → ids colorés.
- Contrôle manuel Dany (phase ①) : exercice avec quinte parallèle → les 4 têtes fautives en
  rouge ; clic sur une tête → sélection correcte ; flèches inchangées ; `/generateur-satb`
  et `/editeur` identiques fonctionnellement.

## Périmètre (YAGNI)

- Pas de refonte des interactions au-delà du clic-sur-note validé ; pas de lecture MIDI
  ajoutée aux modules qui n'en avaient pas ; pas de zoom/mise en page avancée.
- `PianoPlayer`, `ScoreViewer` (music/) et le rendu des cours ne bougent pas dans ce chantier.

## Critères de succès (phase ①)

- Plus aucun import VexFlow dans `src/` ; dépendance retirée du `package.json`.
- Les 646 exercices, `/editeur` et `/generateur-satb` gravés par Verovio, clic + couleurs actifs.
- Suite + build verts ; aucune régression de notation (barème intact).
