# Contenu FR — « Méthodologie du relevé »

> **Statut : brouillon de contenu pédagogique — À VALIDER par Dany avant tout développement.**
> Ce document est du *contenu seul* (prose, tables de référence, exemples note à note, quiz, exercices). Aucun code, aucune i18n, aucun composant. La priorité absolue est l'exactitude musicale et méthodologique : les stratégies enseignées (la basse d'abord, la cadence d'abord, l'écoute par formules) sont le canon de la formation musicale supérieure, énoncées comme méthode avec leurs nuances.

---

## Bloc d'en-tête

- **Titre du cours** : Méthodologie du relevé
- **Niveau** : Niveau 3 (≈ L3 · DNSPM) — **dernier cours du parcours DNSPM**. Il est le compagnon méthodologique de l'outil `/releve` : le cours enseigne les stratégies, l'outil est le gymnase.
- **Objectifs d'apprentissage**
  - Comprendre la nature de l'épreuve de relevé (FM supérieure, concours d'entrée des Pôles sup et CNSM) et ce qu'elle entraîne réellement : mémoire harmonique, oreille intérieure, audiation.
  - Maîtriser la **stratégie de la basse d'abord** : chanter intérieurement la basse, la solfier **en degrés**, l'entendre **à l'octave près** (classe de hauteur).
  - Entendre les **fonctions avant les accords** : identifier la cadence finale en premier, reconnaître les formules types comme des blocs (II6–V–I, I6/4–V, marches de quintes), pas accord par accord.
  - Reconnaître les **renversements à l'oreille** : position fondamentale, accord de sixte, quarte-et-sixte ; la 7e qui descend comme signature de V7.
  - Appliquer la **discipline des 6 écoutes** : un objectif par écoute, noter les certitudes d'abord, se raccrocher à la cadence suivante en cas de décrochage.
  - Boucler la boucle **écriture ↔ écoute** : diagnostiquer ses erreurs de relevé et savoir quel palier de `/releve` les corrige.
- **Moteurs Harmonia réutilisés**
  - **`/releve`** — l'outil compagnon : relevé harmonique par paliers (① noter la basse → ② identifier les chiffrages → ③ écrire le SATB complet), modes **entraînement** (écoutes illimitées, réécoute par accord) et **examen** (**6 écoutes** de la progression entière, compteur affiché), tirage sur les progressions d'école du générateur SATB, filtres niveau (1-3) et tonalités (majeures/mineures/toutes).
  - **PianoPlayer** — écoute de tous les exemples (noms FR : Do Ré Mi Fa Sol La Si ; Do4 = do central).
  - **Verovio / satb-vers-musicxml** — gravure des exemples SATB.
  - **Liens de cours** — cours 3 (*degrés et fonctions*), cours 4 (*cadences et progressions*), cours 26 (*harmonisation DEM*), cours 42 (*harmonisation au clavier et basse chiffrée*), cours 45 (*méthodologie du commentaire d'écoute* — la discipline sœur), `/dictee` (dictées d'accords et d'intervalles).
- **Convention de notation** : noms de notes français partout (Do Ré Mi Fa Sol La Si). Chaque exemple sonore donne les **notes exactes par voix** pour être directement gravable et jouable.

### Note « Comment travailler ce cours » (contrainte assumée — à afficher en tête du cours)

> **Ici, le piano de synthèse est un atout, pas une limite.** Le cours 45 (commentaire d'écoute) devait avouer que l'absence de phonothèque interdisait le travail du timbre et de l'orchestration. Pour le relevé, c'est l'inverse : l'épreuve consiste à transcrire **exactement** des hauteurs et des accords, et un piano de synthèse est précisément l'instrument idéal pour cela — justesse parfaite, notes identiques à chaque réécoute, tempo stable, aucune réverbération qui masque la basse. C'est d'ailleurs au piano que la plupart des professeurs de FM font travailler le relevé harmonique. Tout ce que l'épreuve demande — entendre une basse, des chiffrages, quatre voix — se travaille intégralement dans `/releve`. La seule chose que l'outil n'entraîne pas est la reconnaissance des timbres : c'est l'affaire du commentaire d'écoute (cours 45), pas du relevé.

---

## Section 1 — Qu'est-ce que le relevé ?

Le relevé est l'exercice roi de la formation musicale supérieure : on vous fait entendre un fragment musical un nombre limité de fois, et vous devez le **transcrire exactement** — la basse, les accords, parfois les quatre voix. Il figure aux concours d'entrée des Pôles supérieurs et du CNSM, dans les cursus de FM supérieure et d'écriture. Là où le commentaire d'écoute (cours 45) demande de **décrire, identifier et situer** — un discours argumenté sur ce qu'on entend —, le relevé demande de **noter, note à note** : aucune approximation stylistique ne compense un accord faux. Et là où `/dictee` fait reconnaître des **accords isolés** (une étiquette par accord, hors contexte), le relevé porte sur une **progression syntaxique** : les accords s'enchaînent selon une grammaire, et cette grammaire est votre meilleure alliée — un accord deviné se vérifie par ceux qui l'entourent.

Ce que le relevé entraîne réellement dépasse l'épreuve : la **mémoire harmonique** (retenir une progression entière entre deux écoutes), l'**oreille intérieure** — ce que les anglo-saxons nomment *audiation* : entendre mentalement une musique absente —, et le réflexe d'entendre la musique **en fonctions et en voix**, pas en masse sonore. C'est la compétence même de l'écriture (cours 26 et 42), prise dans l'autre sens.

La règle d'or du cours, dans cet ordre et jamais dans l'autre :

> **La tonalité, puis la cadence, puis la basse, puis les chiffrages.**
> On ne transcrit jamais un accord isolé « au milieu » : on installe d'abord le cadre (tonalité, cadence finale), puis le squelette (la basse en degrés), et les chiffrages viennent s'y poser. Commencer par le détail est la faute méthodologique la plus coûteuse.

---

## Section 2 — La basse d'abord : la stratégie fondamentale

Pourquoi la basse ? Parce qu'elle **porte l'harmonie** : c'est elle qui décide du degré et du renversement, et tout chiffrage se définit par rapport à elle (cours 42). Et parce que l'oreille s'accroche naturellement aux **voix extrêmes** : le soprano (la mélodie) et la basse s'entendent mieux que les voix intérieures. Le soprano, on l'entend sans effort ; la basse, il faut apprendre à l'**isoler** — c'est le premier geste du relevé, et c'est tout l'objet du palier ① de `/releve`.

Trois techniques, à pratiquer dans cet ordre :

1. **Chanter intérieurement la basse** pendant l'écoute (ou à mi-voix en entraînement) : ce qu'on peut chanter, on peut le noter. Si vous ne pouvez pas la chanter, réécoutez — ne devinez pas.
2. **La solfier en degrés, pas en notes absolues** : chanter « 1 – 4 – 5 – 1 » et non « Do – Fa – Sol – Do ». Le degré est transférable à toutes les tonalités et dit immédiatement la fonction ; la note absolue n'est retrouvée qu'à la fin, en appliquant la tonalité identifiée à la première écoute.
3. **Repérer les mouvements types** : le saut de quarte ascendante ou de quinte descendante vers la tonique (5 → 1, la signature cadentielle), le mouvement conjoint (souvent signe de renversements — section 4), le chromatisme (souvent une dominante secondaire).

Enfin, le **principe de l'octave libre** : au relevé de basse, on note la **classe de la note** — entendre « un Sol » suffit, que ce soit Sol2 ou Sol3. C'est le standard de l'épreuve, et c'est exactement ainsi que le palier ① de `/releve` corrige : à l'octave près.

### Exemple travaillé — la basse chantée en degrés (Do majeur, I–VI–IV–V–I)

Basse entendue : **Do – La – Fa – Sol – Do** (Do3, La2, Fa2, Sol2, Do3). On la chante : **« 1 – 6 – 4 – 5 – 1 »**. La lecture en degrés raconte déjà l'harmonie : départ tonique, descente de tierce vers le relatif (6), la sous-dominante (4), la dominante (5), retour tonique — T, T-substitut, SD, D, T. Le SATB complet, pour l'oreille :

| Accord | I | VI | IV | V | I |
|---|---|---|---|---|---|
| Soprano | Do5 | Do5 | Do5 | Si4 | Do5 |
| Alto | Sol4 | La4 | La4 | Sol4 | Sol4 |
| Ténor | Mi4 | Mi4 | Fa4 | Ré4 | Mi4 |
| Basse | Do3 | La2 | Fa2 | Sol2 | Do3 |

**À entendre** : le soprano reste posé sur Do pendant trois accords — c'est la basse, et elle seule, qui fait avancer l'harmonie. Voilà pourquoi on la relève d'abord.

---

## Section 3 — Entendre les fonctions avant les accords

Le débutant transcrit accord par accord et se noie ; l'oreille formée entend des **fonctions** puis des **formules**. Première passe : la grille **T / SD / D** (cours 3 et 4) — chaque accord entendu est d'abord rangé dans une des trois familles (stable / préparation / tension). C'est une classification grossière, mais elle est **rapide et robuste** : on l'obtient dès la deuxième écoute, et elle réduit drastiquement les candidats pour chaque mesure.

Deuxième réflexe, le plus rentable de tout le cours : **identifier la cadence finale en premier**. Elle est l'endroit le plus prévisible et le plus audible de l'extrait ; elle confirme la tonalité et livre **gratuitement les deux derniers accords** (V–I si parfaite, arrêt sur V si demi-cadence, V–VI si rompue). Au relevé, on remplit la fin avant le milieu.

Troisième réflexe : reconnaître les **formules comme des blocs** (*chunks*), pas note à note — II6–V–I, I6/4–V, la marche de quintes. Le 6/4 cadentiel a une sonorité **immanquable** : un accord de tonique suspendu au-dessus de la basse de dominante, un appui qui appelle sa résolution (section 4). Qui reconnaît le bloc écrit trois chiffrages d'un coup.

### Exemple travaillé — cinq accords, deux blocs (Do majeur)

Progression entendue : basse **Do – Fa – Sol – Sol – Do** (degrés **1 – 4 – 5 – 5 – 1**).

| Accord | I | II6 | I6/4 | V7 | I |
|---|---|---|---|---|---|
| Soprano | Do5 | Ré5 | Do5 | Si4 | Do5 |
| Alto | Sol4 | La4 | Sol4 | Fa4 | Mi4 |
| Ténor | Mi4 | Fa4 | Mi4 | Ré4 | Do4 |
| Basse | Do3 | Fa2 | Sol2 | Sol2 | Do3 |

Raisonnement par blocs : premier accord = tonique d'installation (bloc 1). Puis l'oreille reconnaît **la grande formule cadentielle [II6 – I6/4 – V7 – I]** comme un seul geste : basse 4–5–5–1, l'appui caractéristique du 6/4 sur la dominante, la septième (Fa, à l'alto) qui descend sur Mi. Quatre chiffrages obtenus en une reconnaissance — au lieu de quatre paris successifs. Nuance honnête : le *chunking* suppose un vocabulaire déjà constitué ; il s'acquiert en réalisant ces formules à l'écrit (cours 26 et 42) jusqu'à ce qu'elles deviennent des unités d'écoute.

---

## Section 4 — Les renversements à l'oreille

Un même accord change de visage selon sa basse (cours 42). À l'oreille : la **position fondamentale** est stable, assise, conclusive ; l'**accord de sixte** (basse = tierce) est plus léger, ouvert, « en marche » — il donne envie de continuer ; la **quarte-et-sixte** est instable, suspendue — la quarte contre la basse demande résolution, et c'est ce qui rend le 6/4 cadentiel si reconnaissable.

Le test le plus fiable est celui de la **ligne de basse** : quand la basse se déplace **par degrés conjoints** alors que l'harmonie reste dans la même couleur, il y a très probablement des renversements — l'école écrit ses basses chantantes en intercalant des sixtes. Écoutez :

**I – I6 – IV** (Do majeur), basse **Do3 – Mi3 – Fa3** :

| Accord | I | I6 | IV |
|---|---|---|---|
| Soprano | Do5 | Do5 | Do5 |
| Alto | Sol4 | Sol4 | La4 |
| Ténor | Mi4 | Do4 | Do4 |
| Basse | Do3 | Mi3 | Fa3 |

Même couleur de tonique sur les deux premiers accords, mais la basse **monte d'une tierce puis d'un degré** : c'est la marque du I6 (la quinte de IV est doublée par prolongation du Do commun — doublure admise).

Pour les accords de septième, la signature de **V7 contre V** est la **septième qui descend**. Comparez en Do majeur — les deux accords ne diffèrent que d'une note (l'alto) :

- **V → I** : (Sol2, Ré4, Sol4, Si4) → (Do3, Mi4, Sol4, Do5) — tension simple, résolue par la sensible.
- **V7 → I** : (Sol2, Ré4, **Fa4**, Si4) → (Do3, Do4, **Mi4**, Do5) — le Fa ajouté frotte contre le Si (triton) et **descend obligatoirement sur Mi**. C'est cette note qui tombe d'un degré au moment de la résolution qui trahit la septième : si vous l'entendez, écrivez V7 ; sinon, V.

---

## Section 5 — La mémoire harmonique : stratégies d'écoute limitée

Le mode examen de `/releve` reproduit la discipline du concours : **6 écoutes** de la progression entière, sans réécoute par accord, compteur affiché. Six écoutes semblent confortables ; elles fondent comme neige si chacune n'a pas un **objectif unique et déclaré d'avance**. La répartition d'école :

| Écoute | Objectif unique |
|---|---|
| **1** | **Tonalité et cadence finale** : chanter intérieurement la tonique, identifier le mode, nommer la cadence — noter les deux derniers accords. |
| **2** | **La basse, en degrés** : la chanter intérieurement d'un bout à l'autre, noter la suite de degrés (1–6–4–5–1…). |
| **3** | **Vérifier la basse** : confirmer les mesures sûres, cibler les mesures douteuses — c'est l'écoute de la certitude, pas de la nouveauté. |
| **4** | **Chiffrages et couleurs** : renversements (basse conjointe ?), septièmes (une note qui descend ?), le 6/4 cadentiel. |
| **5** | **Voix supérieures** : le soprano d'abord (il s'entend seul), puis les voix intérieures par déduction (les notes de l'accord non encore placées). |
| **6** | **Contrôle global** : relire sa copie en chantant intérieurement — l'écoute confronte ce qu'on a écrit à ce qui sonne. On ne découvre plus, on vérifie. |

Deux disciplines de crayon. D'abord, **noter les certitudes d'abord** : la cadence finale, les mesures évidentes — une copie de relevé se remplit par les deux bouts, jamais linéairement. Ensuite, la **discipline du décrochage** : une mesure perdue ne doit jamais faire dérailler la suite. On laisse un blanc, on garde le compte des mesures (la pulsation continue), et on **se raccroche à la cadence suivante** — point d'ancrage toujours reconnaissable. Un blanc coûte une mesure ; une panique coûte la copie.

---

## Section 6 — Du relevé à l'écriture : boucler la boucle

Le relevé est l'**inverse exact de la réalisation**. Aux cours 26 et 42, on vous donne une basse chiffrée et vous produisez les sons ; au relevé, on vous donne les sons et vous retrouvez la basse et les chiffrages. Ce sont les deux sens d'une même compétence : **ce qu'on sait écrire, on sait l'entendre — et réciproquement**. C'est pourquoi le palier ③ de `/releve` (écrire le SATB complet sous la dictée, avec la correction de conformité de l'éditeur) est la boucle complète : écoute → notation → vérification d'écriture, dans un seul exercice.

Vos erreurs de relevé sont des **diagnostics**. Les trois patrons les plus fréquents :

| Erreur récurrente | Ce qu'elle révèle | Remédiation |
|---|---|---|
| **Confondre I6 et VI** (deux notes communes : Do et Mi en Do majeur) | Vous entendez la **fonction** — la couleur de tonique prolongée — mais pas la **basse réelle** (Mi contre La). | Palier ① intensif : la basse seule, chantée en degrés, jusqu'à ce que Mi et La soient inconfondables. |
| **Rater les voix intérieures** (soprano et basse justes, alto/ténor faux) | Vous écoutez **en accords** (une couleur globale) et non **en lignes** (quatre voix qui chantent). | Palier ③ en entraînement, avec réécoute par accord : chanter chaque voix intérieure, puis la noter. La déduction aide : les notes de l'accord déjà identifié qui ne sont ni au soprano ni à la basse. |
| **Écrire V quand c'était V7** (ou l'inverse) | Vous n'avez pas suivi la **note qui descend** — la septième et sa résolution obligée (section 4). | Comparaisons ciblées V/V7 (l'exemple de la section 4, dans plusieurs tonalités), puis palier ② en traquant systématiquement les chiffrages de septième. |

Le progrès au relevé nourrit l'écriture en retour : qui a entendu cent fois la septième de V7 descendre ne l'écrira plus jamais montante. C'est la fermeture du cursus DNSPM : analyser, écrire, entendre — trois verbes, une seule oreille.

---

## Section 7 — Entraînement

### La fiche réflexe du relevé (à mémoriser — 6 lignes)

1. **Tonalité d'abord** : chanter la tonique, identifier le mode.
2. **Cadence finale ensuite** : elle donne les deux derniers accords gratuitement.
3. **La basse avant tout**, chantée en degrés, à l'octave près.
4. **Des fonctions et des formules** (T/SD/D, II6–V–I, 6/4 cadentiel), jamais des accords isolés.
5. **Basse conjointe = renversements probables ; une note qui descend à la résolution = septième.**
6. **Au crayon, les certitudes d'abord** ; une mesure perdue = un blanc, et on se raccroche à la cadence suivante.

### Quiz (9 questions)

1. **À la première écoute d'un relevé, vous notez en priorité :**
   a) le premier accord — b) la tonalité et la cadence finale — c) la ligne de soprano — d) le rythme harmonique
   **Réponse : b.** Le cadre d'abord : la tonalité permet de traduire les degrés en notes, la cadence finale livre les deux derniers accords.

2. **La basse descend par degrés conjoints sous une harmonie qui garde la même couleur. Vous soupçonnez :**
   a) une modulation — b) une marche de quintes — c) des renversements — d) une pédale
   **Réponse : c.** Une basse conjointe sous une harmonie stable est la marque des accords de sixte intercalés (test de la ligne de basse, section 4).

3. **Pourquoi relever la basse avant tout ?**
   a) elle est la voix la plus grave donc la plus forte — b) elle porte l'harmonie et détermine degré et renversement — c) elle bouge moins que les autres voix — d) elle est toujours doublée
   **Réponse : b.** Tout chiffrage se définit par rapport à la basse ; le soprano s'entend sans effort, la basse se travaille.

4. **En fin de phrase, la basse monte d'une quarte (Sol → Do en Do majeur). Vous entendez :**
   a) une cadence plagale — b) une demi-cadence — c) une cadence parfaite — d) une cadence rompue
   **Réponse : c.** Le saut 5 → 1 est la signature de basse de la cadence parfaite (V–I).

5. **Qu'est-ce qui distingue V7 de V à l'oreille ?**
   a) V7 est plus fort — b) la septième, qui frotte (triton) et descend d'un degré à la résolution — c) V7 est toujours arpégé — d) la basse est différente
   **Réponse : b.** En Do majeur : le Fa ajouté contre le Si, qui tombe sur Mi. Si aucune note ne descend ainsi, c'était V.

6. **Le 6/4 cadentiel s'entend comme :**
   a) un accord conclusif et stable — b) un accord de tonique suspendu sur la basse de dominante, qui appelle V — c) une modulation à la dominante — d) un accord de passage sans importance
   **Réponse : b.** L'appui caractéristique avant V : basse déjà sur 5, accord de tonique au-dessus, résolution attendue (6→5, 4→3).

7. **Vous perdez le fil à la mesure 3 d'un relevé de huit mesures. Vous :**
   a) réécrivez la mesure 2 en attendant — b) laissez un blanc, gardez le compte des mesures et vous raccrochez à la cadence suivante — c) abandonnez la basse pour le soprano — d) demandez une écoute supplémentaire
   **Réponse : b.** Un blanc coûte une mesure ; un décrochage non maîtrisé coûte la copie (section 5).

8. **Pourquoi solfier la basse en degrés (1–6–4–5–1) plutôt qu'en notes absolues ?**
   a) c'est plus rapide à écrire — b) le degré est transférable à toutes les tonalités et dit la fonction — c) les notes absolues sont impossibles à entendre — d) c'est la seule notation acceptée aux concours
   **Réponse : b.** Le degré porte la fonction (T/SD/D) ; la note absolue se déduit à la fin, une fois la tonalité posée.

9. **Vous confondez régulièrement I6 et VI. Le diagnostic :**
   a) vous entendez la fonction (couleur de tonique), pas la basse réelle — b) vous ne connaissez pas vos gammes — c) votre mémoire est trop courte — d) vous écoutez trop la basse
   **Réponse : a.** Les deux accords partagent Do et Mi (en Do majeur) ; seule la basse (Mi contre La) les départage. Remède : palier ① de `/releve`.

### Exercices

#### Protocole guidé `/releve` — trois séances types

- **Séance 1 — Découverte (palier ①, mode entraînement).** Filtres : niveau 1, tonalités majeures. Écoutes illimitées, réécoute par accord autorisée. Pour chaque exercice : chanter la basse intérieurement **avant** de la noter, la solfier en degrés, puis seulement la saisir (l'octave est libre : la classe de note suffit). Faire cinq exercices ; objectif : toutes les mesures justes sur les deux derniers.
- **Séance 2 — Montée (palier ②, puis discipline d'examen).** Palier ② en entraînement : la basse correcte est donnée, choisir les chiffrages parmi les pastilles — traquer les renversements (basse conjointe ?) et les septièmes (note qui descend ?). Puis repasser au palier ① en **mode examen** : 6 écoutes comptées, appliquer la répartition de la section 5 (une écoute = un objectif). Ouvrir progressivement les filtres (niveau 2, tonalités mineures).
- **Séance 3 — Examen blanc (palier ③, mode examen).** Le relevé complet : écrire les quatre voix en 6 écoutes. Certitudes d'abord (cadence finale, puis basse), voix intérieures par déduction, dernière écoute en contrôle. Après notation, analyser chaque faute avec la table de diagnostic de la section 6 et en déduire la séance suivante.

#### Drill écrit 1 — Reconstruire un relevé décrit (Sol majeur)

*On vous décrit l'écoute :* « Sol majeur, cinq accords. La basse chante 1 – 4 – 5 – 5 – 1. Sur le premier des deux 5, l'accord sonne comme une tonique suspendue qui appelle la suite ; sur le second, une note frotte puis descend d'un degré à la résolution. Cadence parfaite conclusive. » **Écrivez la basse (notes exactes), les chiffrages, puis une réalisation SATB d'école.**

**Corrigé modèle.** Basse : **Sol2 – Do3 – Ré3 – Ré3 – Sol2**. Chiffrages : **I – II6 – I6/4 – V7 – I** (la « tonique suspendue » sur la basse de dominante = 6/4 cadentiel ; la note qui frotte et descend = la septième Do → Si). Réalisation :

| Accord | I | II6 | I6/4 | V7 | I |
|---|---|---|---|---|---|
| Soprano | Ré5 | Do5 | Si4 | La4 | Sol4 |
| Alto | Sol4 | La4 | Sol4 | Fa♯4 | Ré4 |
| Ténor | Si3 | Mi4 | Ré4 | Do4 | Si3 |
| Basse | Sol2 | Do3 | Ré3 | Ré3 | Sol2 |

(Résolutions du 6/4 : Si→La (6→5) au soprano, Sol→Fa♯ (4→3) à l'alto ; la septième Do (ténor) descend sur Si ; V7 complet → I complet, la sensible intérieure Fa♯ descendant sur Ré — licence d'école.) C'est la formule de la section 3, transposée : la preuve que le *chunk* se transporte dans toutes les tonalités.

#### Drill écrit 2 — Le tétracorde descendant (la mineur)

*On vous décrit l'écoute :* « La mineur, quatre accords. La basse descend par degrés conjoints de la tonique à la dominante : 1 – 7 – 6 – 5. Le dernier accord est majeur, suspensif — la phrase reste ouverte. » **Écrivez la basse (notes exactes) et les chiffrages, en justifiant les renversements.**

**Corrigé modèle.** Basse : **La2 – Sol2 – Fa2 – Mi2**. Chiffrages : **I – V6 – IV6 – V** (en mineur : i – v6 – iv6 – V). Justification : la basse conjointe sous une couleur qui reste sombre impose des renversements sur les degrés intermédiaires — Sol est la tierce de Mi–Sol–Si (v6, le 7e degré non sensible du mineur naturel descendant), Fa la tierce de Ré–Fa–La (iv6) ; l'arrivée sur Mi porte le V **majeur** (avec Sol♯ : Mi–Sol♯–Si), d'où la demi-cadence suspensive. C'est le **tétracorde de lamento**, formule d'école par excellence : qui le reconnaît comme un bloc écrit les quatre chiffrages en une seule écoute.

---

*Fin du contenu à valider. Après validation : transcription en `cours48Content.ts` (le FR fait foi, aucune note ni degré modifiés), traductions, composant, liens croisés avec `/releve`.*
