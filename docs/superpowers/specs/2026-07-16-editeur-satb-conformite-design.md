# Spec — Éditeur SATB : conformité à l'harmonie demandée et règles de résolution

**Date :** 2026-07-16
**Auteur :** Dany Duboille (avec Claude Code)
**Statut :** validé (design)
**Situe :** éditeur d'exercices SATB (`HarmoniaEditor` / `satb-rules.ts`) — chantier « vitrine » ①

## Contexte

L'audit du 2026-07-16 a révélé trois trous dans le moteur de validation des exercices SATB :

1. **Aucune conformité à l'harmonie demandée** : un exercice « II–V–I » accepte n'importe quelle
   réalisation sans faute d'écriture (trois accords de Do majeur passent), et la note est 100 fixe.
2. **Règles déclarées jamais implémentées** : `leading_tone` et `seventh` existent dans
   `ValidationErrorType` mais `validateSATB` ne les produit pas — le moteur ne contrôle pas les
   résolutions qu'il enseigne.
3. **Règles d'école absentes** : quintes/octaves directes S–B (l'atelier `/composer` les a),
   doublure de la sensible.

## Décisions de cadrage (validées)

1. **Conformité = même accord + même basse que la solution** : les pitch classes posées doivent
   égaler celles de la solution, et la basse porter la même note (le renversement fait partie de
   l'intention pédagogique). Octaves et répartition entre voix LIBRES.
2. **Barème d'école** — FAUTES (bloquent « Terminer ») : accord non conforme, basse non conforme,
   sensible non résolue aux voix EXTRÊMES (S/B), sensible doublée. AVERTISSEMENTS : sensible non
   résolue aux voix internes (descente à la dominante tolérée sans avertissement), 7e non résolue,
   quintes/octaves directes S–B.
3. **Notation graduée** : score = max(60, 100 − 10 × avertissements restants). Les fautes restent
   impossibles à l'arrivée (Terminer bloqué).

## Architecture

### 1. `src/lib/satb-rules.ts` — le moteur (pur, testé)

**Signature étendue (additive)** :

```ts
export function validateSATB(
  measures: Measure[],
  keySignature?: string,
  checkAccidentals?: boolean,
  solution?: Measure[],          // ← NOUVEAU : arme conformité + résolutions + directes
): ValidationError[];
```

Sans `solution`, comportement STRICTEMENT identique à aujourd'hui (aucune régression pour les
appelants existants).

**Nouveaux types d'erreur** (l'union `ValidationErrorType` gagne) :
`"wrong_chord" | "wrong_bass" | "doubled_leading_tone" | "hidden_fifth" | "hidden_octave"`
(`leading_tone` et `seventh` existent déjà — ils prennent vie).

**Notions communes** :
- *Mesure complète* : les quatre voix ont une note. Toutes les nouvelles règles ne s'appliquent
  qu'aux mesures complètes (pas de fausse alerte pendant la saisie).
- *Tonalité* : `keySignature` (« C », « Bb », « Am »…) → tonique = pitch class du nom sans « m »,
  mode mineur si suffixe « m ». Sensible = `(tonique + 11) % 12` (vaut aussi en mineur : c'est la
  sensible HAUSSÉE). Dominante = `(tonique + 7) % 12`.
- *Accord attendu d'une mesure* : pitch classes de la SOLUTION + basse de la solution, identifiés
  par `identifyChordFromNotes(pcs, bassPc)` (import depuis `./harmonic-analysis`, pur). Fonction
  dominante = fondamentale sur la dominante, OU sur la sensible (vii°). Identification nulle →
  les règles de résolution se taisent pour cette mesure.

**Les règles** (dans l'ordre d'exécution, après les règles existantes) :

- **Conformité** (par mesure complète) : `pcs(élève) ≠ pcs(solution)` → `wrong_chord` (error) ;
  sinon `pc(basse élève) ≠ pc(basse solution)` → `wrong_bass` (error). Une seule des deux par
  mesure (wrong_bass seulement si l'accord est bon).
- **Sensible** (mesures m et m+1 complètes ET conformes ; accord de m à fonction dominante) :
  pour chaque voix portant la sensible en m, son mouvement vers m+1 :
  - monte d'un demi-ton (midi +1, arrive sur la tonique) → OK ;
  - tenue (midi identique) → OK ;
  - voix INTERNE descendant à la dominante (midi −4, arrive sur `dominante`) → OK (sensible
    « frustrée » d'école, autorisée aux voix internes) ;
  - sinon : soprano/basse → `leading_tone` **error** ; alto/ténor → `leading_tone` **warning**.
- **Sensible doublée** (mesure complète, conforme, fonction dominante) : ≥ 2 voix portent la
  sensible → `doubled_leading_tone` (error), une fois par mesure.
- **7e d'accord** (m et m+1 complètes et conformes ; l'accord de m contient une 7e = un pc du set
  à 10 ou 11 demi-tons au-dessus de la fondamentale identifiée) : la voix qui porte ce pc doit
  descendre par mouvement conjoint (midi −1 ou −2) ou tenir (midi identique) ; sinon → `seventh`
  (warning).
- **Directes S–B** (m et m+1 complètes ; indépendant de la solution mais activé par sa présence,
  cohérent avec le reste) : soprano et basse de même sens (Δ non nuls, même signe), saut au
  soprano (|Δ| > 2), arrivée sur un intervalle réduit de 7 (resp. 0) qui ne l'était PAS avant →
  `hidden_fifth` (resp. `hidden_octave`), warning. Mêmes conditions que `conduite-voix.ts`.

### 2. `src/components/HarmoniaEditor.tsx`

- Passe `solution` au `validateSATB` de la validation en direct (le composant la reçoit déjà en
  prop) : les nouveaux messages s'affichent comme les autres (✗ rouge / ⚠ ambre).
- « Terminer » : déjà bloqué par les seules fautes (`hasErrors` filtre `severity === "error"`) —
  aucun changement.
- Le libellé en dur « Terminer ✓ » passe par l'i18n (clé `finish` du même espace de noms que
  `play`/`complete`).

### 3. `src/components/ExerciceContent.tsx` — la note

À la complétion (`onComplete(measures)` fournit la copie) : re-exécuter
`validateSATB(measures, keySignature, !showKS, solution)` (pur), compter les warnings,
`score = Math.max(60, 100 - 10 * warnings)` au lieu du 100 fixe. (Les erreurs sont
structurellement absentes : Terminer était bloqué sinon.)

### 4. i18n — `messages/{fr,en,de,es,it,pt}.json`

Nouvelles clés dans l'espace `errors.*` du composant : `wrong_chord` (« Mesure {from} : ce n'est
pas l'accord demandé »), `wrong_bass` (« Mesure {from} : la basse attendue est {expected} »),
`doubled_leading_tone`, `leading_tone` (déjà des clés ? à vérifier — les créer sinon), `seventh`,
`hidden_fifth`, `hidden_octave` + la clé `finish`. Six langues (le français fait foi, les autres
traduites dans le ton des clés voisines). `wrong_bass` porte en `params.expected` le nom de la
note attendue TEL QU'ÉCRIT dans la solution (notation anglo-saxonne, ex. « G » — celle que
l'éditeur affiche déjà pour la note courante).

## Tests (vitest) — `satb-rules.test.ts`

- **Non-régression** : tous les tests existants passent inchangés (l'appel sans `solution` ne
  change RIEN).
- **Conformité** : accord faux → `wrong_chord` ; bon accord mauvaise basse → `wrong_bass` (et pas
  `wrong_chord`) ; bonne réalisation ALTERNATIVE (autre disposition, autres doublures, autres
  octaves, même accord même basse) → aucune erreur de conformité ; mesure incomplète → silence.
- **Sensible** : V→I avec sensible au soprano montant à la tonique → rien ; ne montant pas →
  `leading_tone` error ; à l'alto descendant à la dominante → rien ; à l'alto sautant ailleurs →
  warning ; V→VI (rompue) sensible montant → rien ; sensible TENUE (V→V7) → rien ; en la MINEUR
  (armure « Am », sol♯) → mêmes verdicts ; accord non dominant contenant le pc de la sensible
  (ex. iii) → la règle se tait.
- **Sensible doublée** : V avec sensible au ténor ET au soprano → `doubled_leading_tone`.
- **7e** : V7 avec la 7e descendant d'un degré → rien ; tenue → rien ; montant → `seventh`
  warning ; triade sans 7e → silence.
- **Directes** : S–B mouvement direct, saut du soprano vers une quinte → `hidden_fifth` ;
  mouvement conjoint du soprano → rien ; quinte déjà présente avant (parallèle, pas directe) →
  pas de doublon avec `parallel_fifth`.
- **Score** (test du calcul, fonction pure ou logique extraite si besoin) : 0 warning → 100 ;
  2 warnings → 80 ; 5 warnings → 60 (plancher).

## Vérification

- `npx vitest run` → tout vert. `NODE_OPTIONS="--max-old-space-size=8192" npm run build` → succès.
  (⚠️ jamais `npx tsc --noEmit`.)
- Contrôle manuel (exercice « II–V–I en Do », cours 3) : poser trois accords de Do → `wrong_chord`
  s'affiche, Terminer bloqué ; réaliser correctement avec la sensible qui ne monte pas au
  soprano → faute ; la faire descendre à la dominante à l'alto → rien ; terminer une copie avec
  une 7e non résolue → avertissement et note 90.

## Périmètre (YAGNI)

- **Pas** de chevauchement (overlap), pas de contrôle des doublures générales (tierce doublée…),
  pas de mouvement mélodique interdit (triton, 7e) — itération ultérieure si besoin.
- **Pas** d'alignement de l'atelier `/composer` sur ces règles (chantier distinct s'il est voulu).
- **Pas** de refonte du système de score au-delà de la formule décidée.

## Points de vigilance

- **Zéro régression sans solution** : `validateSATB` à 3 arguments doit rester bit-à-bit
  identique (les appels existants hors exercices, s'il y en a, ne changent pas).
- **Règles de résolution muettes sur mesures non conformes** : sinon un accord faux déclenche
  une cascade de messages absurdes.
- **Enharmonies** : les comparaisons se font en pitch classes midi (via `noteToMidi`), pas en
  noms — Sol♯ et La♭ y sont égaux ; c'est voulu (le contrôle d'orthographe reste la règle
  `missing_accidental` existante).
- **`identifyChordFromNotes`** importé par `satb-rules` : vérifier que cela ne crée pas de cycle
  d'imports (harmonic-analysis n'importe pas satb-rules — sûr aujourd'hui).

## Critères de succès

- Un accord hors sujet ou un mauvais renversement bloque « Terminer » avec un message clair.
- Les résolutions de sensible et de 7e sont contrôlées selon le barème d'école, mineur compris.
- Les directes S–B avertissent comme dans l'atelier.
- La note reflète la propreté de la copie (100 → 60).
- Aucune régression : appels sans solution inchangés, suite complète verte, 6 langues à jour.
