# Spec — Tonalité glissante (modulations)

**Date :** 2026-07-15
**Auteur :** Dany Duboille (avec Claude Code)
**Statut :** validé (design)
**Sous-projet :** C2 — la dernière pièce de l'analyseur

## Contexte

Le sous-projet A a donné à l'analyseur un moteur harmonique testé : dominantes secondaires,
sensibles de degré, emprunts, napolitain, arbitrage par la résolution. B lui a donné la basse et
les renversements. C1 lui a appris que toutes les notes qui sonnent ne font pas partie de
l'accord. À la sortie, la route produit une **suite d'accords propre et chiffrée**, avec les
tonicisations déjà repérées (`V7/V`, `vii°7/ii`…).

Il manque le regard **de haut** : la pièce reste-t-elle dans sa tonalité, ou en **change-t-elle**
pour de bon ? Le moteur voit qu'un `A7` en Do majeur tonicise le second degré ; il ne sait pas
dire qu'à la mesure 9, la musique s'est **installée** en Sol majeur.

## Le principe fondateur

`analyzeChord` et `annotateResolutions` (sous-projet A) prennent déjà la **tonique et le mode en
paramètres**. Détecter une modulation vers Sol, c'est donc **rejouer l'analyse existante calée sur
Sol** et regarder si elle explique mieux la suite. Aucun nouveau moteur harmonique : C2 est une
couche *au-dessus* de la suite d'accords, dans un module pur nouveau `src/lib/modulations.ts`.

## Décisions de cadrage (validées)

- **Critère de modulation : la CADENCE.** Une nouvelle tonalité n'est déclarée que **confirmée par
  une cadence** (dominante du nouveau ton résolue sur sa tonique). Tant qu'il n'y a pas de cadence,
  on reste dans une tonicisation, si prolongée soit-elle. C'est le critère du conservatoire.
- **Le PIVOT, avec double étiquette.** Une fois la cadence confirmée, le moteur remonte à l'accord
  **pivot** — le dernier accord commun aux deux tonalités avant la bascule — et l'affiche dans les
  deux tons (`I (Do) = IV (Sol)`). Les accords entre le pivot et la cadence sont relus dans le
  nouveau ton.
- **Cinq tons voisins seulement.** Depuis Do majeur : Sol (dominante), Fa (sous-dominante),
  La mineur (relatif), Mi mineur (relatif de la dominante), Ré mineur (relatif de la
  sous-dominante). Une cadence hors de ces cinq tons reste lue comme du **chromatisme** — jamais
  une fausse modulation lointaine.

## L'algorithme — balayage séquentiel avec état

La **tonalité courante** démarre sur la tonalité d'origine. Le moteur avance dans la séquence et,
à chaque position :

### 1. Chercher une cadence dans un ton voisin

Une cadence dans Sol = une dominante de Sol (Ré ou Ré7, que le moteur étiquette déjà `V/V`)
résolue sur la tonique de Sol. Les cinq toniques voisines étant des degrés diatoniques du ton
courant, la machinerie de détection existe déjà.

### 2. Distinguer la tonicisation de la modulation — le cœur du problème

Un `V7/V → V` isolé, noyé dans un contexte de Do (`I V7/V V I`), est une **tonicisation**. Pour
qu'il y ait **modulation**, on exige une véritable **cellule cadentielle dans le nouveau ton** :
au minimum une **prédominante du nouveau ton** (ii, IV ou vi de Sol) *avant* sa dominante, puis la
cadence sur sa tonique. Autrement dit, la dominante du nouveau ton doit elle-même être abordée
*depuis ce ton*, et non surgir seule.

> **Règle stricte, validée.** Cette exigence de prédominante préparée évite de crier « modulation »
> à chaque `V/V`. Elle peut manquer une modulation qui arriverait par une dominante seule, non
> préparée — c'est un compromis assumé, du côté de la prudence.

### 3. Trouver le pivot et relire en double

Cadence confirmée, on remonte au **pivot** : le dernier accord diatonique **aux deux tonalités**
avant la bascule. Il reçoit une double étiquette ; tout ce qui va du pivot à la cadence est relu
dans le nouveau ton (via `analyzeChord` calé sur la nouvelle tonique). Si plusieurs accords sont
communs, on prend le **dernier** avant la dominante du nouveau ton (convention).

### 4. Basculer la tonalité courante et continuer

La tonalité courante devient le nouveau ton, et le balayage reprend depuis ses cinq voisins. Une
pièce peut ainsi moduler en chaîne (Do → Sol → Ré) ou revenir (Do → Sol → Do).

## Ce que ça produit

Un **plan tonal** : la liste ordonnée des régions tonales, chacune avec son étendue en mesures, les
accords pivots signalés, et la relecture des degrés à l'intérieur de chaque région.

```ts
interface RegionTonale {
  tonicPc: number;
  mode: "major" | "minor";
  nom: string;              // "Sol majeur"
  mesureDebut: number;
  mesureFin: number;
  pivot?: {                 // l'accord charnière, sauf pour la région initiale
    index: number;          // position dans la séquence
    etiquetteAncienne: string; // "I" (Do)
    etiquetteNouvelle: string; // "IV" (Sol)
  };
  cadence: { type: string; mesure: number }; // la cadence qui a confirmé la région
}

interface PlanTonal {
  regions: RegionTonale[];
  // Étiquette effective de chaque accord, après relecture dans sa région.
  degresRelus: Array<{ index: number; degree: string; tonalite: string }>;
}
```

## Intégration

- `src/lib/modulations.ts` *(nouveau)* — le module pur : `construirePlanTonal(sequence, tonicPc, mode)`.
- `src/app/api/analyse-partition/route.ts` — appelle le module, ajoute `planTonal` à `AnalysisResult`.
- `src/components/AnalysePartition.tsx` — un onglet **« Plan tonal »** : la frise des régions, les
  pivots en double étiquette, et le degré relu affiché à côté du degré d'origine dans le tableau
  des mesures quand ils diffèrent.
- `src/app/api/analyse-partition/commentaire/route.ts` — le prompt raconte le plan tonal :
  quelles tonalités, par quels pivots, confirmées par quelles cadences.

## Tests (vitest)

- **Modulation à la dominante par pivot** : Do → (Do = IV de Sol) → ii–V–I de Sol → région Sol
  déclarée, pivot doublement étiqueté, cadence confirmée.
- **Tonicisation non promue** : `I V7/V V I` en Do → **aucune** modulation (pas de prédominante de
  Sol, pas de cellule cadentielle). C'est le test qui protège la règle stricte.
- **Modulation au relatif** : Do majeur → La mineur, confirmée par une cadence en La mineur
  (Mi7 → Lam).
- **Chaîne de modulations** : Do → Sol → Ré, chaque bascule confirmée par sa cadence.
- **Retour au ton principal** : Do → Sol → Do.
- **Cadence hors des cinq voisins** : reste du chromatisme, aucune région déclarée.
- **Pivot : dernier accord commun** : quand plusieurs accords sont communs aux deux tons, c'est le
  dernier avant la dominante du nouveau ton qui est le pivot.
- **Non-régression** : les tests A/B/C1, et en particulier le **choral à quatre voix sans
  modulation**, ne bougent pas.

## Vérification

- `npx vitest run` → tout vert.
- `NODE_OPTIONS="--max-old-space-size=8192" npm run build` → succès.
  (⚠️ `npx tsc --noEmit` sature la mémoire de ce poste — ne jamais le lancer.)
- Contrôle musical : un choral qui module (Bach en module presque tous), une sonate de Mozart
  (exposition I → V) — les régions et les pivots doivent correspondre à l'analyse écrite.

## Hors périmètre (YAGNI)

- **Modulations lointaines** (hors des cinq voisins) et modulations enharmoniques.
- **Modulation par accord commun chromatique** (sixte augmentée pivot, etc.) — la version stricte
  ne reconnaît que le pivot diatonique.
- Modulation **sans pivot** (par saut direct, par juxtaposition) — laissée en chromatisme.
- Le **micro-chromatisme** interne à une région reste géré par A/C1, inchangé.

## Points de vigilance

- **C2 peut renuméroter des degrés posés par C1.** Un `V7/V` devient un `V7` de Sol dans une région
  modulée. Le test de non-régression du choral non modulé est le garde-fou.
- **Le pivot peut être musicalement ambigu.** La convention (dernier accord commun) est défendable
  mais pas unique ; on l'assume.
- **Le critère de cadence est strict par choix.** Il ratera certaines modulations réelles non
  cadencées ou non préparées. C'est le prix de la prudence, et il est défendable devant un jury.

## Critères de succès

- Une modulation vers un ton voisin, confirmée par une cadence, est **déclarée**, avec son **pivot
  en double étiquette** et sa **cadence**.
- Une simple tonicisation (`V/V` non préparé) n'est **jamais** promue en modulation.
- Une chaîne de modulations et un retour au ton principal sont suivis correctement.
- Une cadence hors des cinq voisins reste du chromatisme.
- Aucune régression sur les tests existants ; le build passe.
