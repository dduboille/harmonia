# Spec — Squelette harmonique (roadmap n° 5)

**Date :** 2026-07-17
**Auteur :** Dany Duboille (avec Claude Code)
**Statut :** validé (brainstorming + réponses produit du 2026-07-17)

## Contexte

Nouvel outil de **travail préparatoire de composition** : l'élève pose une succession
d'accords sur 8 mesures (« le squelette harmonique »), les voit réalisés à quatre voix, les
entend, vérifie que l'enchaînement tient la route, puis exporte le tout vers l'atelier
`/composer` pour l'étoffer note à note.

Demande de Dany : « 8 mesures, poser des accords depuis la banque totale des accords par
tonalité, avec renversements ; réfléchir à une manière de présenter la banque. »

## Décisions validées (brainstorming)

1. **But** : autonome **+ export vers l'atelier** `/composer`.
2. **Réalisation** : **SATB à quatre voix, conduite propre** (moteur partagé
   `src/lib/voicing-ecole.ts`), gravée Verovio, jouable.
3. **Banque** : **groupée par fonction** (Tonique / Prédominante / Dominante / Chromatisme —
   c'est déjà ce que produit `src/lib/palette-fonctionnelle.ts`), pastilles cliquables, les
   renversements sont des pastilles distinctes (I, I6, V7, V65…). Interrupteur de niveau
   **diatonique / +chromatismes**.
4. **Granularité** : 8 mesures, **1 ou 2 accords par mesure** (ronde, ou deux blanches).
5. **Tonalité** : **une seule**, majeure ou mineure (pas de modulation en v1).
6. **Vérification de conduite dès la v1** : réutiliser `validateSATB` + les **fautes colorées**
   et les **fiches « Comprendre ces remarques »** livrées au chantier n° 3.

## Architecture

Nouvelle page `src/app/[locale]/squelette-harmonique/page.tsx` + composant client
`src/components/SqueletteHarmonique.tsx`. Presque tout est de l'assemblage de briques existantes ;
le code neuf tient dans le modèle du squelette, un convertisseur, l'UI de la banque/grille et le
pont d'export.

### Modèle (état, pur)

```typescript
interface EmplacementAccord { accord: AccordPalette | null; }   // AccordPalette de palette-fonctionnelle
interface MesureSquelette   { emplacements: EmplacementAccord[]; } // longueur 1 (ronde) ou 2 (blanches)
interface Squelette {
  tonalite: { tonicPc: number; mode: "major" | "minor"; keySignature: string }; // ex. "C", "Am"
  niveau: 1 | 2;               // 1 = diatonique, 2 = + chromatismes
  mesures: MesureSquelette[];  // toujours 8
}
```

### Banque

`construirePalette(tonicPc, mode, niveau)` → `GroupeFonctionnel[]` (Tonique/Prédominante/
Dominante/Chromatisme). L'UI rend chaque groupe en colonne de pastilles. `niveau` gouverne quels
groupes/catégories apparaissent (le chromatisme n'existe qu'au niveau 2). Chaque `AccordPalette`
porte `pcs`, `bassPc`, `degree`, `nom`, `fonction`.

### Réalisation SATB (le cœur)

Convertir la suite des accords posés (dans l'ordre mesure→emplacement) en `SpecEntry[]` puis
appeler `voiceProgression(specs, tonicPc, minor)` de `voicing-ecole` :
- **Construction du `ChordSpec`** depuis un `AccordPalette` : `pcs` connus ; la palette empile
  fondamentale→tierce→quinte→[7e] et met le renversement dans `bassPc` (les diatoniques via
  `accordDiatonique` renvoient `pcs[0]` = fondamentale même en renversement). Prendre root =
  `pcs[0]`, third = `pcs[1]`, fifth = `pcs[2]`, seventh = `pcs[3] ?? null`. **À confirmer au plan
  pour les accords chromatiques** (napolitain bII6, sixte augmentée, dominantes secondaires) :
  vérifier que `pcs[0]` y est bien la fondamentale ; sinon la déduire du `degree`. `fifthOmissible`
  = quinte juste (root→fifth = 7 demi-tons). `bassPc` = celui de l'`AccordPalette`.
- **Soprano de la 1re mesure** : `voiceProgression` impose `firstSopranoPc` ; on le choisit
  automatiquement (la note la plus haute d'un voicing fondamental de départ, ou simplement la
  quinte/octave — détail d'implémentation), l'élève ne saisit pas de soprano.
- **Voicing incrémental stable** : recalculer tout le voicing à chaque frappe rebrasse les mesures
  déjà posées (DFS global). Pour éviter que poser un accord en mesure 8 change la mesure 3, on
  **fige le préfixe déjà voicé** et on n'étend le DFS que sur le suffixe modifié (ou, si trop
  complexe, on garde le recalcul global mais on documente le comportement). Choix tranché au plan.
- **Repli bloc** : si `voiceProgression` renvoie `null` (suite libre inconduisible), réaliser
  chaque accord en **bloc** (basse = `bassPc`, les autres `pcs` empilés dans les tessitures) pour
  que l'outil affiche TOUJOURS quelque chose. Un indicateur discret signale « réalisation
  approximative » dans ce cas.

### Gravure et lecture

Étendre `src/lib/satb-vers-musicxml.ts` (ou un convertisseur dédié `squelette-vers-musicxml.ts`
qui le réutilise) pour accepter **1 ronde ou 2 blanches par mesure** au lieu d'une ronde fixe.
Rendu par `StudioScore` (Verovio) ; lecture par le chemin audio existant (PianoPlayer /
studio-playback). Décision import/extension au plan (préférer étendre proprement, pas de 3e copie).

### Vérification de conduite (fautes + fiches)

Sur le SATB réalisé, appeler `validateSATB(mesures, keySignature, false, undefined, "ecole")`
(mode école, sans solution : seules les règles de conduite, pas la conformité à une grille).
Réutiliser tel quel : la **coloration des têtes** (rouge/ambre via `StudioScore.surlignerFautes`)
et le **panneau des fiches** « Comprendre ces remarques » (composant extrait de `HarmoniaEditor`
si le partage est propre, sinon réplication minimale du bloc). `cross_relation` non colorée
(cohérence avec le barème). Sur réalisation « bloc » (repli), la vérif est désactivée (le voicing
n'est pas censé être conduit).

### Export vers l'atelier

Bouton « Étoffer dans l'atelier ». Convertir le squelette voicé en modèle `Piece`
(`src/lib/piece-model.ts`), le déposer en `sessionStorage` sous une clé convenue, naviguer vers
`/composer`. `AtelierComposition` lit cette clé **au montage** (aujourd'hui il démarre sur
`pieceEditionVierge`) : si une pièce est présente, il l'adopte puis efface la clé (chargement
unique). Modification minimale et ciblée d'`AtelierComposition`.

### Interaction UI

- Cliquer un **emplacement** le sélectionne (surligné) ; cliquer une **pastille** le remplit.
- Un bouton par mesure bascule **1 ↔ 2 accords** (2 → l'emplacement existant devient la 1re
  blanche, un emplacement vide s'ajoute ; revenir à 1 supprime le 2e).
- Cliquer un emplacement rempli le **vide** (croix).
- Sélecteur de **tonalité** (majeur/mineur) et interrupteur de **niveau** en tête.
- Sous la portée : la **frise fonctionnelle** (T / PD / D / chrom par accord, depuis
  `AccordPalette.fonction`) et la **cadence finale** détectée (parfaite V→I, plagale IV→I,
  demi-cadence …→V, rompue V→vi — règle simple sur les deux derniers accords).

## Vérification

- Tests purs neufs : construction `AccordPalette → ChordSpec` (root/third/fifth/seventh corrects,
  triades et 7es, renversements → `bassPc`) ; convertisseur 1 ronde / 2 blanches par mesure
  (MusicXML bien formé, durées, appariement onset) ; squelette voicé → `Piece` (export) ;
  détection de cadence.
- Verrous existants inchangés (565 tests, dont verovio-appariement, pedagogie-i18n, invariant
  corpus). `voiceProgression`, `construirePalette`, `validateSATB` déjà couverts.
- Build + suite verts. Contrôle manuel Dany : poser une cadence parfaite → SATB conduit + cadence
  détectée ; poser des quintes parallèles volontaires → têtes rouges + fiche ; « étoffer dans
  l'atelier » → la pièce arrive dans `/composer` ; tonalité mineure ; mesure à 2 accords.

## Périmètre (YAGNI)

- **Inclus v1** : une tonalité (maj/min), 8 mesures × (1-2 accords), banque par fonction + niveau,
  SATB voicé (repli bloc), vérif de conduite (fautes + fiches), analyse fonctionnelle + cadence,
  lecture, export atelier.
- **Reporté** : modulation / changement de tonalité en cours ; rythmes plus fins que la blanche ;
  réharmonisation ou voicings alternatifs au choix ; sauvegarde/partage du squelette ;
  saisie d'un soprano imposé.

## Critères de succès

- La page pose des accords depuis une banque lisible par fonction, réalise un SATB conduit,
  colore les fautes avec les fiches, détecte la cadence, joue, et exporte vers l'atelier.
- Aucune régression (565+ tests verts). Nouveau code testé (modèle, convertisseur, export).
