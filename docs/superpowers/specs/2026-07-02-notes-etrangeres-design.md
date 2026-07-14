# Spec — Notes étrangères (analyseur de partitions)

**Date :** 2026-07-02
**Auteur :** Dany Duboille (avec Claude Code)
**Statut :** validé (design)
**Sous-projet :** C1 (préalable à C2, la tonalité glissante)

## Contexte

Le sous-projet A a donné à l'analyseur un moteur harmonique testé (dominantes secondaires,
emprunts, napolitain, arbitrage par la résolution). Le sous-projet B lui a donné un vrai modèle
de notes : durées, tenues, voix multiples, orthographe, **basse réelle** — d'où les renversements
et le chiffrage français.

Il lui manque la notion la plus élémentaire de l'écriture : **toutes les notes qui sonnent ne
font pas partie de l'accord.** Le moteur traite chaque tranche verticale comme un accord. Une
appoggiature, un retard, une pédale à la basse fabriquent donc des accords fantômes.

Ce sous-projet est le **préalable à la détection des modulations** (C2) : celle-ci raisonne sur
la suite des accords ; la nourrir de faux accords produirait de fausses modulations, et il serait
impossible de savoir laquelle des deux couches a menti.

## Le cœur du problème

**Accord et notes étrangères sont indissociables.** On ne peut pas connaître l'accord sans savoir
quelles notes lui sont étrangères, ni l'inverse. Ce n'est donc pas un filtre appliqué après coup,
mais une **optimisation sur le segment** : le moteur met plusieurs lectures en concurrence et
retient celle qui explique le mieux ce qu'il entend.

## Décisions de cadrage (validées)

- **Grille :** aucune. On découpe **sur chaque attaque réelle** de la partition, et non sur une
  grille métrique. La grille à la noire du sous-projet B rendait toute croche de passage
  invisible.
- **Taxonomie :** **complète et nommée** — note de passage, broderie, appoggiature, retard,
  échappée, anticipation, pédale. C'est la matière même du cours d'harmonie, et elle nourrit le
  commentaire pédagogique.
- **Retard vs appoggiature :** tranchés **strictement par la préparation**. Le retard était déjà
  là, consonant, dans l'accord précédent ; l'appoggiature est attaquée. Les deux tombent sur le
  temps fort et se résolvent par degré conjoint : c'est la seule différence qui tienne.

  Et **la préparation suffit** : l'écriture ne la défait pas. Un retard peut être **tenu** par
  liaison ou **réattaqué** à l'identique — c'est la même figure, la même dissonance, la même
  résolution ; seule change la plume. Exiger la liaison livrerait la moitié du répertoire à
  l'appoggiature, sur un détail de notation.

## Architecture

### 1. Voir toutes les notes — `harmony-segmentation.ts`

Le sous-projet B n'échantillonnait qu'**au début** de chaque temps : une croche de passage entre
deux temps était purement invisible. Le segment retient désormais **toutes les notes qui sonnent
à un moment quelconque de sa durée**, et non les seules notes présentes à son attaque.

**Deux échelles, à ne pas confondre :**
- la **visibilité** descend à chaque attaque réelle — aucune note n'échappe à l'analyse ;
- la **décision harmonique** reste prise **au temps**. L'harmonie change rarement plus vite que
  la pulsation, et une croche de passage n'a pas à réclamer son propre accord.

Les temps consécutifs portant le même accord continuent d'être fusionnés (rythme harmonique).

### 2. Les voix deviennent des lignes — `voice-lines.ts` (NOUVEAU)

Le parseur conserve `part` et `voice`. On reconstitue chaque **ligne mélodique** —
`Ligne = { cle: "P1|1", notes: ParsedNote[] }`, triée par onset — de sorte que toute note ait sa
**précédente** et sa **suivante** dans sa voix. Sans cela, aucune classification n'est possible :
une note étrangère ne se reconnaît qu'à la façon dont on l'aborde et dont on la quitte.

**Limite assumée :** quand une voix porte plusieurs notes simultanées (accords plaqués d'une
écriture pianistique), aucune ligne n'existe. La note sera alors dite **« étrangère »** sans être
nommée — mieux vaut ça qu'un nom inventé.

### 3. L'accord se choisit par le COÛT — `chord-choice.ts` (NOUVEAU)

Pour chaque segment, on met les accords candidats en concurrence et on score :

- ce qu'ils **expliquent** : chaque son de l'accord rapporte, pondéré par sa **durée** et son
  **poids métrique** (une longue note sur le temps fort pèse lourd) ;
- ce qu'ils **laissent de côté** : une note inexpliquée coûte — mais **pas toujours le même
  prix**. Une note abordée et quittée par degré conjoint est une étrangère *légitime*, presque
  gratuite. Une note qui arrive par saut et repart par saut est une anomalie coûteuse.

Un accord qui laisse trois notes de côté ne perd donc pas forcément contre un accord qui les
explique toutes, si ces trois notes se comportent en notes de passage.

### 4. La taxonomie, par le comportement mélodique — `notes-etrangeres.ts` (NOUVEAU)

Pour une note étrangère `N`, de précédente `P` et de suivante `S` dans sa voix :

| Type | Abordée | Quittée | Signe distinctif |
|---|---|---|---|
| **Retard** | tenue ou répétée depuis l'accord précédent, où elle était **consonante** | degré conjoint **descendant** | la **préparation** |
| **Appoggiature** | attaquée (non préparée), souvent par saut | degré conjoint | sur temps **fort** |
| **Note de passage** | degré conjoint | degré conjoint, **même sens** | elle **traverse** |
| **Broderie** | degré conjoint | degré conjoint, **sens inverse** | elle **revient** |
| **Échappée** | degré conjoint | **saut** | elle **s'échappe** |
| **Anticipation** | — | — | c'est un son de l'accord **suivant** |
| **Pédale** | tenue ou répétée à travers plusieurs accords | — | étrangère à **au moins un** d'eux |

**L'ordre d'examen compte**, et il n'est pas celui du tableau :

1. **retard** — il exige l'accord précédent, et il est lui aussi tenu par-dessus la barre
   harmonique : il doit passer **avant** la pédale, qui l'avalerait ;
2. **pédale** — elle doit passer **avant** les règles de degré conjoint, qui la prendraient pour
   une échappée sur la foi de la note qui la suit, très loin, dans sa voix ;
3. **anticipation** — elle exige l'accord suivant ;
4. les règles de **degré conjoint** (passage, broderie, échappée, appoggiature).

Une note qu'aucune règle n'explique reste **« étrangère non classée »** : le moteur ne devine pas.

### 5. La pédale corrige le chiffrage

C'est le gain le plus immédiat. Une pédale à la basse **cesse d'entrer dans l'accord**, et le
renversement se lit sur le **plus grave des sons réels de l'accord**. Le `V7 sur pédale de
tonique` sera enfin chiffré `V7` — et non plus rafistolé par la règle des retards
(`RETARDS`) posée dans le sous-projet B, qui n'en était qu'un pansement.

### 6. Sortie et intégration

- `Segment` gagne `notesEtrangeres: Array<{ note: ParsedNote; type: TypeEtrangere | null; voix: string }>`.
- `AnalysisResult` les expose ; `AnalysePartition.tsx` les affiche (colonne ou repli par mesure).
- Le prompt du **commentaire IA** les exploite : nommer un retard, une appoggiature, une pédale
  est exactement ce qu'on attend d'un professeur.

## Tests (vitest)

- **Note de passage** : Do-Ré-Mi en croches sur une harmonie de Do majeur tenue → le Ré est vu,
  nommé « note de passage », et **exclu** de l'accord (qui reste `I`).
- **Broderie** : Do-Ré-Do → « broderie ».
- **Échappée** : Do-Ré-Sol → « échappée ».
- **Retard** : le 4-3 de cadence — la note préparée à l'accord précédent, tenue sur le temps fort,
  résolue par degré conjoint descendant → « retard », et l'accord est `V`, jamais `Vsus4`.
- **Appoggiature** : la même note, mais **attaquée** au lieu d'être préparée → « appoggiature ».
  *(C'est le test qui prouve que la préparation, et elle seule, tranche.)*
- **Anticipation** : la note finale de la mélodie attaquée avant l'accord de tonique.
- **Pédale** : `V7` sur pédale de tonique → chiffré `V7` (fonction D), le Do de basse étant
  déclaré pédale ; le renversement se lit sur le Sol.
- **Le coût décide** : un accord qui laisse tomber deux notes de passage bat un accord qui les
  explique toutes mais force la fondamentale.
- **Écriture pianistique** : une voix portant des accords plaqués rend des notes étrangères
  **non classées**, jamais mal nommées.
- **Non-régression** : les 161 tests des sous-projets A et B, et en particulier le test de bout
  en bout du choral à quatre voix.

## Vérification

- `npx vitest run` → tout vert.
- `NODE_OPTIONS="--max-old-space-size=8192" npm run build` → succès.
  (⚠️ `npx tsc --noEmit` sature la mémoire de ce poste — ne jamais le lancer.)
- Contrôle musical : un choral de Bach, puis une phrase ornementée (Mozart, Chopin) — les
  ornements doivent être nommés et l'harmonie ne doit pas en être troublée.

## Hors périmètre (YAGNI)

- **Modulations, tonalité glissante, accords pivots** → sous-projet C2, qui consommera la suite
  d'accords assainie par celui-ci.
- Analyse contrapuntique (mouvements parallèles, indépendance des voix) — le moteur SATB de
  l'éditeur s'en charge déjà, sur un autre terrain.
- Rythme, articulation, nuances.

## Points de vigilance

- **Le score se règle empiriquement.** Les pondérations (durée, poids métrique, coût d'une
  étrangère selon son comportement) n'ont pas de valeur « vraie ». Elles se caleront sur des
  extraits dont l'analyse est connue. C'est là que le travail sera long, et c'est là que les
  tests doivent être écrits avant le code.
- **Ce chantier peut casser le sous-projet B.** Écarter des notes change les accords trouvés.

## Critères de succès

- Une note de passage, une broderie, une appoggiature, un retard, une échappée, une anticipation
  et une pédale sont **reconnus et nommés**.
- Le retard et l'appoggiature sont distingués par la **seule préparation**.
- Une pédale de basse ne fausse plus ni la fondamentale, ni la fonction, ni le renversement.
- L'harmonie d'un passage ornementé n'est **pas troublée** par ses ornements.
- Aucune régression sur les 161 tests existants ; le build passe.
