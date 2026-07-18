# Contenu FR — « Analyse post-tonale : la théorie des ensembles (set theory) »

> **Statut : brouillon de contenu pédagogique — À VALIDER par Dany avant tout développement.**
> Ce document est du *contenu seul* (prose, tables, exemples calculés note à note, quiz, exercices). Aucun code, aucune i18n, aucun composant. La priorité absolue est l'exactitude mathématico-musicale : chaque forme normale, forme première, vecteur d'intervalles et nombre de Forte a été recalculé plusieurs fois — une seule erreur d'arithmétique modulo 12 discrédite le cours.

---

## Bloc d'en-tête

- **Titre du cours** : Analyse post-tonale : la théorie des ensembles (*set theory*)
- **Niveau** : 5 (≈ Master 1) — clef de voûte du parcours licence/maîtrise. Répond à la question : « comment analyse-t-on la musique après la tonalité ? » (Schoenberg, Webern, Berg, Bartók…).
- **Objectifs d'apprentissage**
  - Comprendre pourquoi les catégories tonales (degrés, fonctions, chiffrages — et la réduction schenkérienne des cours 27 et 37) cessent de décrire la musique atonale libre après ~1908, et ce que la théorie des ensembles de classes de hauteurs propose à la place.
  - Maîtriser l'arithmétique modulo 12 : classes de hauteurs (0-11), classes d'intervalles (ic 0-6), transposition **Tn** et inversion **TnI**.
  - Déterminer la **forme normale**, la **forme première** et le **vecteur d'intervalles** d'un ensemble quelconque, et identifier les ensembles célèbres par leur **nombre de Forte** (trichorde viennois 3-5, collection octatonique 8-28, gamme par tons 6-35…).
  - Segmenter un court extrait atonal, comparer les ensembles obtenus (équivalence Tn/TnI, relation Z), et faire le pont vers la **technique dodécaphonique** (série, formes P/I/R/RI).
- **Moteurs Harmonia réutilisés**
  - **PianoPlayer** — écoute de chaque ensemble (plaqué puis arpégé) : la théorie des ensembles reste une théorie de *sons*, pas de chiffres. Noms de notes FR obligatoires (Do Ré Mi Fa Sol La Si).
  - **Verovio** — gravure des cellules analysées (cellule initiale de l'op. 11 n° 1 de Schoenberg, accord « Farben », série de la Symphonie op. 21 de Webern).
  - **Liens de cours** — cours 27 et 37 (*Schenker, analyse motivique*) : l'outil de référence **pour la musique tonale**, dont ce cours prend le relais hors tonalité ; cours 30, 31 et 36 (*harmonie impressionniste, polytonalité et harmonie quartale, Debussy/Ravel*) : le répertoire-charnière dont les collections (tons entiers, quartes superposées…) reçoivent ici leurs noms génériques.
- **Conventions de notation**
  - Noms de notes français partout (Do Ré Mi Fa Sol La Si, avec ♯/♭) ; **nombres 0-11 pour les classes de hauteurs** (Do = 0, convention « do fixe »).
  - `{accolades}` = ensemble non ordonné ; `[crochets]` = suite ordonnée (forme normale, forme première) ; `<chevrons>` = vecteur d'intervalles.
  - Toute l'arithmétique est **modulo 12** : 11 + 2 = 1 ; 3 − 7 = 8.

---

## Section 1 — Pourquoi une nouvelle théorie ?

Vers 1908-1909 — le finale du Deuxième Quatuor, les *Lieder* du *Livre des jardins suspendus*, puis les Trois Pièces op. 11 de Schoenberg —, une musique apparaît qui ne repose plus sur une tonique. C'est l'**atonalité libre** : plus de hiérarchie de degrés, plus de dissonance *par rapport à* une consonance de référence (Schoenberg parle d'« émancipation de la dissonance »), plus de cadences qui articulent la forme. Nos outils tonaux deviennent alors muets : chiffrer un accord suppose une fondamentale et une tierce empilée qu'il n'a souvent plus ; parler de « degré » suppose une gamme de référence ; et la réduction schenkérienne (cours 27 et 37) suppose précisément ce que cette musique abolit — la prolongation d'une triade tonique par des mouvements linéaires consonants. Schenker lui-même réservait explicitement sa théorie au répertoire tonal : pour Webern ou le Schoenberg atonal, il faut autre chose.

Ce vide conceptuel n'a été comblé que tardivement. À partir des travaux de Milton Babbitt (qui forge les notions de *pitch class* et de classe d'intervalles), **Allen Forte** systématise dans ***The Structure of Atonal Music* (1973)** une théorie des **ensembles de classes de hauteurs** (*pitch-class set theory*) : au lieu d'accords et de degrés, des *ensembles* de notes considérés à l'octave et à l'enharmonie près, comparables entre eux par transposition et inversion, catalogués et nommés. L'idée-force : dans l'atonalité libre, la cohérence ne vient plus de la syntaxe tonale mais de la **récurrence de petites collections d'intervalles** — des cellules que le compositeur transpose, renverse, superpose. La théorie des ensembles est aujourd'hui la *lingua franca* de l'analyse post-tonale ; le manuel de référence en est l'*Introduction to Post-Tonal Theory* de Joseph N. Straus, dont ce cours suit les conventions.

**À retenir** : la théorie des ensembles est un outil d'**analyse**, pas une méthode de composition ; elle ne remplace pas l'oreille, elle lui donne un vocabulaire exact. Et elle ne « détrône » pas Schenker : chacun règne sur son répertoire.

---

## Section 2 — Classes de hauteurs et classes d'intervalles

### Hauteur vs classe de hauteurs

Une **hauteur** (*pitch*) est un son précis dans un registre précis : Do4 (le do central du PianoPlayer) n'est pas Do5. Une **classe de hauteurs** (*pitch class*, « pc ») est ce qui reste quand on décide de deux équivalences :

- **équivalence d'octave** : Do1, Do4, Do7 appartiennent à la même classe « Do » ;
- **équivalence enharmonique** : Do♯ et Ré♭ sont la même classe (le tempérament égal les confond ; l'atonalité renonce à la distinction fonctionnelle que la tonalité leur donnait).

Il existe donc exactement **12 classes de hauteurs**, numérotées de 0 à 11 avec la convention « do fixe » **Do = 0** :

| pc | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Note | Do | Do♯/Ré♭ | Ré | Ré♯/Mi♭ | Mi | Fa | Fa♯/Sol♭ | Sol | Sol♯/La♭ | La | La♯/Si♭ | Si |

L'arithmétique est **modulo 12**, comme sur un cadran d'horloge : monter de 2 depuis Si (11) donne Do♯ (11 + 2 = 13 ≡ 1).

### Intervalles ordonnés, non ordonnés, classes d'intervalles

Entre **hauteurs**, l'**intervalle ordonné** compte les demi-tons avec leur direction : de Do4 à Si3, −1 ; de Do4 à Si4, +11. L'**intervalle non ordonné** en est la valeur absolue. Entre **classes de hauteurs**, l'intervalle ordonné de a vers b vaut b − a (mod 12) : de Si vers Do, 0 − 11 = 1 ; de Do vers Si, 11. Enfin, si l'on renonce aussi à la direction, on obtient la **classe d'intervalles** (*interval class*, « ic ») :

> **ic(i) = min(i, 12 − i)** — un intervalle et son renversement appartiennent à la même classe.

Il y a donc 7 classes d'intervalles, ic 0 à ic 6 :

| ic | Demi-tons (mod 12) | Intervalles tonals correspondants |
|---|---|---|
| 0 | 0 | unisson, octave |
| 1 | 1 ou 11 | seconde mineure / septième majeure |
| 2 | 2 ou 10 | seconde majeure / septième mineure |
| 3 | 3 ou 9 | tierce mineure / sixte majeure |
| 4 | 4 ou 8 | tierce majeure / sixte mineure |
| 5 | 5 ou 7 | quarte juste / quinte juste |
| 6 | 6 | triton (seul intervalle égal à son renversement) |

**Exemple** : de Sol♯ (8) vers Ré (2), intervalle ordonné 2 − 8 = 6 → ic 6, triton. De Mi (4) vers Do (0), intervalle ordonné 8 → ic(8) = min(8, 4) = 4, la classe « tierce majeure / sixte mineure ».

---

## Section 3 — Les ensembles de classes de hauteurs

### Définition

Un **ensemble de classes de hauteurs** (*pc set*) est une collection **non ordonnée et sans répétition** de classes de hauteurs. `{Sol, Sol♯, Si} = {7, 8, 11}` : peu importe l'ordre d'énonciation, le registre, le doublage. Le nombre d'éléments est la **cardinalité** : trichorde (3), tétracorde (4), pentacorde (5), hexacorde (6)…

### Transposition Tn et inversion TnI

Deux opérations engendrent les équivalences de la théorie :

- **Transposition Tn** : ajouter n (mod 12) à chaque pc. Tn(x) = x + n.
- **Inversion TnI** : inverser autour de 0 (x ↦ −x, c'est-à-dire 12 − x), **puis** transposer de n. TnI(x) = n − x (mod 12).

**Exemple travaillé** — la cellule d'ouverture des Trois Pièces op. 11 n° 1 (1909) de Schoenberg, les trois premières notes de la mélodie : **Si–Sol♯–Sol**, soit l'ensemble **{7, 8, 11}**.

| Opération | Calcul (sur {7, 8, 11}) | Résultat | En notes |
|---|---|---|---|
| T1 | 7+1, 8+1, 11+1 | {8, 9, 0} | Sol♯, La, Do |
| T5 | 7+5, 8+5, 11+5 | {0, 1, 4} | Do, Do♯, Mi |
| T0I | −7, −8, −11 | {5, 4, 1} = {1, 4, 5} | Do♯, Mi, Fa |
| T4I | 4−7, 4−8, 4−11 | {9, 8, 5} = {5, 8, 9} | Fa, Sol♯, La |

Tous ces ensembles « sonnent apparentés » : mêmes intervalles internes (un demi-ton et une tierce majeure imbriqués), registre et ordre mis à part. La théorie déclare **équivalents** deux ensembles reliés par une transposition ou une inversion : ils appartiennent à la même **classe d'ensembles** (*set class*). C'est l'exacte généralisation d'un réflexe tonal : nous considérons déjà tous les accords parfaits majeurs comme « le même accord » à transposition près — et la tonalité considère même majeur et mineur (inversions l'un de l'autre) comme deux espèces d'un même objet, la triade.

*(PianoPlayer : faire entendre {7,8,11} puis chaque transformation, plaquée puis arpégée — l'oreille reconnaît la parenté avant le calcul.)*

---

## Section 4 — Forme normale et forme première

Pour comparer des ensembles, il faut une **écriture canonique**. Deux niveaux : la *forme normale* (l'ensemble lui-même, rangé au plus compact) et la *forme première* (le représentant de toute la classe d'équivalence, commençant par 0).

### Forme normale : l'algorithme

1. Écrire les pcs en **ordre croissant** dans une octave, et former toutes les **rotations** (chaque pc devient tour à tour la première note, les précédentes passant à l'octave au-dessus, +12).
2. Retenir la rotation dont l'**intervalle extérieur** (dernière − première) est le **plus petit** : l'ensemble le plus compact.
3. En cas d'égalité, comparer l'intervalle de la première note à l'**avant-dernière**, puis à l'antépénultième, etc. : retenir le plus **tassé à gauche**.
4. (Égalité parfaite — ensembles totalement symétriques comme {0,4,8} : commencer par le plus petit numéro.)

> *Note de rigueur* : ce critère de départage « tassé à gauche » est celui de Rahn et de Straus, suivi par la quasi-totalité des outils actuels. Le critère originel de Forte (1973) diffère pour cinq classes seulement (5-20, 6-Z29, 6-31, 7-20, 8-26) — aucune n'apparaît dans ce cours.

**Exemple A** — {Do, Do♯, Mi} = {0, 1, 4}.
Rotations : (0,1,4) → étendue 4 ; (1,4,12) → 11 ; (4,12,13) → 9. La plus compacte : **forme normale [0,1,4]**.

**Exemple B** — {Sol, La, Do♯, Ré} = {7, 9, 1, 2}. Ordre croissant : 1, 2, 7, 9.

| Rotation | Étendue |
|---|---|
| (1, 2, 7, 9) | 9 − 1 = 8 |
| (2, 7, 9, 13) | 13 − 2 = 11 |
| **(7, 9, 13, 14)** | **14 − 7 = 7** ← la plus compacte |
| (9, 13, 14, 19) | 19 − 9 = 10 |

**Forme normale [7, 9, 1, 2]** (Sol, La, Do♯, Ré).

**Exemple C** — {Si, Do, Ré, Mi♭, Fa♯} = {11, 0, 2, 3, 6}. Ordre croissant : 0, 2, 3, 6, 11.

| Rotation | Étendue |
|---|---|
| (0, 2, 3, 6, 11) | 11 |
| (2, 3, 6, 11, 12) | 10 |
| (3, 6, 11, 12, 14) | 11 |
| (6, 11, 12, 14, 15) | 9 |
| **(11, 12, 14, 15, 18)** | **7** ← la plus compacte |

**Forme normale [11, 0, 2, 3, 6]** (Si, Do, Ré, Mi♭, Fa♯).

### Forme première : l'algorithme

1. Forme normale de l'ensemble, **transposée pour commencer à 0**.
2. Forme normale de son **inversion** (12 − chaque pc), transposée pour commencer à 0.
3. Retenir la plus **tassée à gauche** des deux (comparer chiffre à chiffre depuis la gauche). C'est la **forme première**, représentant unique de la classe d'ensembles.

**Exemple A (suite)** — [0,1,4] est déjà à 0. Inversion de {0,1,4} : {0, 11, 8} = {0, 8, 11}. Rotations : (0,8,11) → 11 ; (8,11,12) → 4 ; (11,12,20) → 9. Forme normale [8,11,0], transposée à 0 (−8) : [0,3,4]. Comparaison : **[0,1,4]** vs [0,3,4] → 1 < 3, la forme première est **[0,1,4]**.

**Exemple B (suite)** — [7,9,1,2] transposée à 0 (−7) : **[0,2,6,7]**. Inversion de {1,2,7,9} : {11, 10, 5, 3} = {3, 5, 10, 11}. Rotations : (3,5,10,11) → 8 ; (5,10,11,15) → 10 ; **(10,11,15,17) → 7** ; (11,15,17,22) → 11. Forme normale [10,11,3,5], transposée à 0 (−10) : **[0,1,5,7]**. Comparaison : [0,2,6,7] vs [0,1,5,7] → 1 < 2, la forme première est **[0,1,5,7]** (nombre de Forte : 4-16).

**Exemple C (suite)** — [11,0,2,3,6] transposée à 0 (−11) : **[0,1,3,4,7]**. Inversion de {0,2,3,6,11} : {0, 10, 9, 6, 1} = {0, 1, 6, 9, 10}. Rotations : (0,1,6,9,10) → 10 ; (1,6,9,10,12) → 11 ; **(6,9,10,12,13) → 7** ; (9,10,12,13,18) → 9 ; (10,12,13,18,21) → 11. Forme normale [6,9,10,0,1], transposée à 0 (−6) : **[0,3,4,6,7]**. Comparaison : [0,1,3,4,7] vs [0,3,4,6,7] → 1 < 3, la forme première est **[0,1,3,4,7]** (nombre de Forte : 5-16).

**Vérification-réflexe** : une forme première commence toujours par 0, et son dernier chiffre est l'étendue minimale de l'ensemble. Si votre forme première « penche à droite » (par ex. [0,3,4] alors que [0,1,4] existe dans la classe), c'est que l'inversion a été oubliée.

---

## Section 5 — Le vecteur d'intervalles et les nombres de Forte

### Le vecteur d'intervalles

Le **vecteur d'intervalles** (*interval-class vector*) compte, pour un ensemble donné, le nombre d'occurrences de chaque classe d'intervalles ic 1 à ic 6, entre **toutes les paires** de pcs. Un ensemble de cardinalité k contient k(k−1)/2 paires : 3 pour un trichorde, 6 pour un tétracorde, 10 pour un pentacorde. C'est l'« empreinte sonore » de l'ensemble : deux ensembles de même vecteur offrent la même réserve d'intervalles.

**Calcul complet 1** — [0, 1, 4] (la cellule de l'op. 11) :
paires (0,1) → ic 1 ; (0,4) → ic 4 ; (1,4) → ic 3. Vecteur : **<101100>**.

**Calcul complet 2** — la triade majeure/mineure [0, 3, 7] :
(0,3) → ic 3 ; (0,7) → ic 5 ; (3,7) → ic 4. Vecteur : **<001110>**. (Majeur et mineur, inversions l'un de l'autre, partagent ce vecteur — l'inversion ne change jamais le vecteur.)

**Calcul complet 3** — le tétracorde par tons [0, 2, 4, 6] :
(0,2) → ic 2 ; (0,4) → ic 4 ; (0,6) → ic 6 ; (2,4) → ic 2 ; (2,6) → ic 4 ; (4,6) → ic 2. Vecteur : **<030201>** (trois ic 2, deux ic 4, un ic 6 — aucun demi-ton, aucune tierce mineure, aucune quarte : le son « tons entiers »).

### Les nombres de Forte

Forte a catalogué toutes les classes d'ensembles (12 classes de trichordes, 29 de tétracordes, 38 de pentacordes, 50 d'hexacordes) et les a nommées **cardinalité-numéro d'ordre** : 3-3 est la 3e classe de trichordes de son catalogue, 4-Z15 la 15e classe de tétracordes. Ces étiquettes sont la référence universelle des écrits analytiques.

### La relation Z

Le vecteur ne détermine pas toujours la classe : deux ensembles peuvent avoir **le même vecteur sans être équivalents Tn/TnI**. Forte les dit en **relation Z** (le Z s'ajoute au nom). Paire classique :

- **4-Z15 = [0, 1, 4, 6]** : (0,1)→1 ; (0,4)→4 ; (0,6)→6 ; (1,4)→3 ; (1,6)→5 ; (4,6)→2 → vecteur **<111111>** ;
- **4-Z29 = [0, 1, 3, 7]** : (0,1)→1 ; (0,3)→3 ; (0,7)→5 ; (1,3)→2 ; (1,7)→6 ; (3,7)→4 → vecteur **<111111>**.

Même réserve d'intervalles — un exemplaire de chacune des six classes, d'où le surnom de *tétracordes toutes-classes* — mais formes premières distinctes : ils ne sont ni transposés ni renversés l'un de l'autre.

### Ensembles célèbres — table de référence

| Nom de Forte | Forme première | Vecteur | Identité |
|---|---|---|---|
| 3-1 | [0,1,2] | <210000> | cluster chromatique |
| 3-3 | [0,1,4] | <101100> | cellule d'ouverture de l'op. 11 n° 1 |
| 3-4 | [0,1,5] | <100110> | trichorde « seconde + quarte » |
| 3-5 | [0,1,6] | <100011> | **trichorde viennois** (demi-ton + triton), omniprésent chez Schoenberg/Webern |
| 3-11 | [0,3,7] | <001110> | triade majeure/mineure |
| 3-12 | [0,4,8] | <000300> | quinte augmentée |
| 4-16 | [0,1,5,7] | <110121> | notre exemple B (Sol–La–Do♯–Ré) |
| 4-21 | [0,2,4,6] | <030201> | tétracorde par tons |
| 4-28 | [0,3,6,9] | <004002> | septième diminuée |
| 5-Z17 | [0,1,3,4,8] | <212320> | accord « **Farben** », Schoenberg op. 16 n° 3 : Do–Sol♯–Si–Mi–La = {0,8,11,4,9} (Z-associé : 5-Z37 [0,3,4,5,8]) |
| 6-20 | [0,1,4,5,8,9] | <303630> | collection **hexatonique** (alternance 1-3) |
| 6-35 | [0,2,4,6,8,10] | <060603> | gamme par **tons entiers** (cours 30/36 : Debussy) |
| 7-35 | [0,1,3,5,6,8,10] | <254361> | collection **diatonique** (la gamme majeure comme *ensemble*) |
| 8-28 | [0,1,3,4,6,7,9,10] | <448444> | collection **octatonique** (ton-demi-ton : Stravinsky, Bartók, Messiaen ; cours 30/31) |

Relire cette table avec l'oreille (PianoPlayer) : 6-35 sans quartes ni demi-tons, 8-28 saturée de tierces mineures et de tritons, 7-35 dominée par les quartes/quintes (le chiffre 6 en ic 5) — le vecteur *se met à sonner*.

---

## Section 6 — Application analytique et introduction au sérialisme

### Une segmentation : Schoenberg, op. 11 n° 1, mes. 1-3

**Analyser, c'est d'abord segmenter** : découper l'extrait en unités plausibles (motifs mélodiques, accords, voix), puis identifier la classe de chaque segment et chercher les récurrences. La segmentation est un acte d'interprétation — on la justifie par le phrasé, le rythme, le registre, jamais par le seul désir de retrouver un ensemble connu.

Les cinq premières notes de la mélodie (main droite, mes. 1-3) : **Si–Sol♯–Sol–La–Fa** = 11, 8, 7, 9, 5. *(À graver via Verovio ; vérifier l'extrait sur la partition avant intégration, comme pour toute citation.)*

| Segment | pcs | Forme normale | Forme première | Classe |
|---|---|---|---|---|
| Si–Sol♯–Sol (l'incise initiale) | {7, 8, 11} | [7, 8, 11] | [0,1,4] | **3-3** |
| Sol♯–Sol–La (chevauchement) | {7, 8, 9} | [7, 8, 9] | [0,1,2] | 3-1 |
| Sol–La–Fa (la retombée) | {5, 7, 9} | [5, 7, 9] | [0,2,4] | 3-6 |
| Les cinq notes | {5, 7, 8, 9, 11} | [5, 7, 8, 9, 11] | [0,2,3,4,6] | 5-8 |

Le geste initial expose **3-3 [0,1,4]** — demi-ton et tierce majeure fondus en une seule sonorité, ni majeure ni mineure. C'est l'observation fondatrice des analyses classiques de cette pièce (Forte, Perle, Straus) : la cellule [0,1,4] y revient constamment, transposée, renversée, verticalisée — la section 3 a déjà montré T5 et T4I de {7,8,11}. La cohérence que la tonalité assurait par la syntaxe des degrés, Schoenberg l'obtient par la **saturation du tissu par une même classe d'ensembles**.

### Du motif à la série : le dodécaphonisme

Vers 1921-1923, Schoenberg systématise : au lieu de cellules libres, une **série** (*row*) — un ordre fixé une fois pour toutes des **douze** classes de hauteurs, matrice de toute la pièce. Quatre transformations engendrent la famille des formes sérielles :

- **P** (prime) : la série, transposable (P0…P11 — dans la convention de Straus, Pn commence sur le pc n) ;
- **I** : son inversion (chaque intervalle inversé) ;
- **R** : sa rétrogradation (ordre inverse) ;
- **RI** : le rétrograde de l'inversion.

Soit 12 × 4 = **48 formes**, que l'analyste consigne dans une matrice 12 × 12 (nous ne la construirons pas ici — l'exercice 3 en calcule les deux premières lignes, ce qui suffit à comprendre le principe).

**Exemple réel** — la série de la **Symphonie op. 21 (1928) de Webern**, transposée à 0 :

> **P0 = 0, 9, 10, 11, 7, 8, 2, 1, 5, 4, 3, 6**
> (Do, La, Si♭, Si, Sol, Sol♯, Ré, Do♯, Fa, Mi, Mi♭, Fa♯)

Calcul de **I0** : I0(x) = −x (mod 12), appliqué terme à terme :

> I0 = 0, 3, 2, 1, 5, 4, 10, 11, 7, 8, 9, 6
> (Do, Mi♭, Ré, Do♯, Fa, Mi, Si♭, Si, Sol, Sol♯, La, Fa♯)

Contrôle par les intervalles ordonnés : P0 descend de 3 (0→9), I0 monte de 3 (0→3) ; P0 monte de 1 (9→10), I0 descend de 1 (3→2) — chaque intervalle est bien inversé.

Cette série est célèbre pour sa symétrie : son **second hexacorde est le rétrograde du premier transposé au triton**. Vérification : premier hexacorde (0, 9, 10, 11, 7, 8) ; son rétrograde (8, 7, 11, 10, 9, 0) ; T6 de ce rétrograde : (2, 1, 5, 4, 3, 6) — exactement le second hexacorde. Conséquence : R6(P0) = P0… la série est son propre rétrograde transposé, et les 48 formes se réduisent à **24 formes distinctes**. Le sérialisme n'abolit pas la théorie des ensembles : les hexacordes, tétracordes et trichordes internes d'une série sont des ensembles, et leurs classes gouvernent l'harmonie de l'œuvre.

---

## Section 7 — Applications & entraînement

### La méthode, en résumé

1. **Segmenter** l'extrait (motifs, accords, strates), en justifiant chaque découpe musicalement.
2. **Identifier** chaque segment : pcs → forme normale → forme première (→ nombre de Forte, → vecteur si utile).
3. **Comparer** : mêmes classes ? relations Tn/TnI précises (quel n ?) ? relation Z ? sous-ensembles communs ?
4. **Interpréter** : que fait la récurrence ? saturation motivique, opposition de deux classes, progression d'une classe vers une autre… Le tableau de classes n'est pas l'analyse ; il en est la matière première.

### Quiz (10 questions)

1. **Quelle est la forme normale de {Do, Mi, Fa♯, Si} = {0, 4, 6, 11} ?**
   A. [0,4,6,11]  B. [11,0,4,6]  C. [4,6,11,0]  D. [6,11,0,4]
   **Réponse : B.** Étendues des rotations : 11, 8, 10 et 7 ; la rotation (11,12,16,18), soit [11,0,4,6], est la plus compacte (étendue 7).

2. **Quel est le vecteur d'intervalles du trichorde viennois 3-5 [0,1,6] ?**
   A. <100011>  B. <100110>  C. <110001>  D. <101100>
   **Réponse : A.** Paires : (0,1) → ic 1 ; (0,6) → ic 6 ; (1,6) → ic 5, d'où <100011>.

3. **{Ré, Mi♭, Sol} = {2,3,7} et {La, Do♯, Ré} = {9,1,2} sont-ils reliés par Tn, par TnI, les deux, ou aucun ?**
   A. Tn seulement  B. TnI seulement  C. Les deux  D. Aucun
   **Réponse : B.** Formes normales [2,3,7] (type [0,1,5]) et [9,1,2] (type [0,4,5]) : structures inversées, donc pas de Tn ; T4I envoie 2→2, 3→1, 7→9, soit exactement {9,1,2}.

4. **Quel est le vecteur d'intervalles de la triade majeure {Do, Mi, Sol} = {0,4,7} ?**
   A. <001110>  B. <011010>  C. <001101>  D. <010110>
   **Réponse : A.** (0,4) → ic 4 ; (0,7) → ic 5 ; (4,7) → ic 3 : <001110> — identique à celui de la triade mineure (même classe 3-11).

5. **Quelle est la forme première de {Ré, Fa, Fa♯, La} = {2,5,6,9} ?**
   A. [0,1,4,7]  B. [0,3,4,7]  C. [0,1,3,7]  D. [0,3,6,7]
   **Réponse : B.** Forme normale [2,5,6,9] (étendue 7) → −2 → [0,3,4,7] ; l'inversion {3,6,7,10} donne aussi [0,3,4,7] (ensemble symétrique) : classe 4-17, le tétracorde « majeur-mineur ».

6. **Combien d'intervalles compte au total le vecteur d'un pentacorde (somme de ses six chiffres) ?**
   A. 5  B. 10  C. 12  D. 15
   **Réponse : B.** Le vecteur compte toutes les paires : k(k−1)/2 = 5 × 4 / 2 = 10.

7. **4-Z15 [0,1,4,6] et 4-Z29 [0,1,3,7] ont le même vecteur <111111> sans être équivalents Tn/TnI. Comment nomme-t-on cette relation ?**
   A. Relation Z  B. Équivalence Tn  C. Équivalence TnI  D. Complémentarité
   **Réponse : A.** Même contenu intervallique, classes distinctes : c'est la définition de la relation Z de Forte.

8. **Que vaut T8({Do♯, Mi, La}) = T8({1, 4, 9}) ?**
   A. {0,5,9}  B. {9,0,4}  C. {1,5,8}  D. {2,7,11}
   **Réponse : A.** 1+8 = 9 ; 4+8 = 0 ; 9+8 = 5 (mod 12) → {9, 0, 5} = {0,5,9} (La, Do, Fa).

9. **Quelle est la forme première de la gamme par tons ?**
   A. [0,1,3,5,7,9]  B. [0,2,4,6,8,10]  C. [0,2,4,6,8,11]  D. [0,1,4,6,8,10]
   **Réponse : B.** Six pcs espacés de 2 demi-tons : classe 6-35, vecteur <060603>.

10. **Laquelle de ces propriétés d'un ensemble est invariante sous toutes les transpositions ET toutes les inversions ?**
    A. Sa forme normale  B. Son vecteur d'intervalles  C. Ses hauteurs réelles  D. L'ordre de ses notes
    **Réponse : B.** Tn et TnI préservent toutes les classes d'intervalles internes ; la forme normale, elle, change avec la transposition.

### Exercices écrits (corrigés complets)

#### Exercice 1 — Carte d'identité complète

**Énoncé** : pour l'ensemble {Si♭, Si, Ré, Fa} = {10, 11, 2, 5}, déterminer la forme normale, la forme première, le nombre de Forte et le vecteur d'intervalles.

**Corrigé** :
- *Forme normale.* Ordre croissant : 2, 5, 10, 11. Rotations et étendues : (2,5,10,11) → 9 ; (5,10,11,14) → 9 ; **(10,11,14,17) → 7** ; (11,14,17,22) → 11. **Forme normale [10, 11, 2, 5]** (Si♭, Si, Ré, Fa).
- *Forme première.* [10,11,2,5] − 10 → [0,1,4,7]. Inversion de {2,5,10,11} : {10, 7, 2, 1} = {1, 2, 7, 10} ; rotations : (1,2,7,10) → 9 ; (2,7,10,13) → 11 ; **(7,10,13,14) → 7** ; (10,13,14,19) → 9 ; forme normale [7,10,1,2] − 7 → [0,3,6,7]. Comparaison [0,1,4,7] vs [0,3,6,7] : 1 < 3. **Forme première [0,1,4,7]**, nombre de Forte **4-18**.
- *Vecteur.* Sur [0,1,4,7] : (0,1)→1 ; (0,4)→4 ; (0,7)→5 ; (1,4)→3 ; (1,7)→6 ; (4,7)→3. **Vecteur <102111>** (deux tierces mineures, tout le reste en un exemplaire — sauf ic 2, absente).

#### Exercice 2 — Démontrer une relation Z

**Énoncé** : démontrer que {0,1,4,6} et {0,1,3,7} sont en relation Z : (a) calculer leurs deux vecteurs ; (b) prouver qu'ils ne sont pas équivalents Tn/TnI en calculant leurs formes premières.

**Corrigé** :
- (a) {0,1,4,6} : (0,1)→1 ; (0,4)→4 ; (0,6)→6 ; (1,4)→3 ; (1,6)→5 ; (4,6)→2 → **<111111>**. {0,1,3,7} : (0,1)→1 ; (0,3)→3 ; (0,7)→5 ; (1,3)→2 ; (1,7)→6 ; (3,7)→4 → **<111111>**. Vecteurs identiques.
- (b) {0,1,4,6} : rotations (0,1,4,6) → 6 ; (1,4,6,12) → 11 ; (4,6,12,13) → 9 ; (6,12,13,16) → 10 : forme normale [0,1,4,6], déjà à 0. Inversion {0,11,8,6} = {0,6,8,11} : rotations (0,6,8,11) → 11 ; **(6,8,11,12) → 6** ; (8,11,12,18) → 10 ; (11,12,18,20) → 9 : [6,8,11,0] − 6 → [0,2,5,6]. Comparaison : **forme première [0,1,4,6]** (4-Z15).
  {0,1,3,7} : rotations (0,1,3,7) → 7 ; (1,3,7,12) → 11 ; (3,7,12,13) → 10 ; (7,12,13,15) → 8 : forme normale [0,1,3,7]. Inversion {0,11,9,5} = {0,5,9,11} : rotations (0,5,9,11) → 11 ; **(5,9,11,12) → 7** ; (9,11,12,17) → 8 ; (11,12,17,21) → 10 : [5,9,11,0] − 5 → [0,4,6,7]. Comparaison : **forme première [0,1,3,7]** (4-Z29).
- [0,1,4,6] ≠ [0,1,3,7] : classes distinctes, vecteurs identiques → **relation Z**. ∎

#### Exercice 3 — Formes sérielles

**Énoncé** : soit la série de la Symphonie op. 21 de Webern, transposée à 0 : P0 = 0, 9, 10, 11, 7, 8, 2, 1, 5, 4, 3, 6. (a) Calculer I0 et R0. (b) Vérifier que le second hexacorde de P0 est le rétrograde du premier transposé au triton.

**Corrigé** :
- (a) **I0** = (−x mod 12 pour chaque terme) = **0, 3, 2, 1, 5, 4, 10, 11, 7, 8, 9, 6** ; **R0** = (P0 lu à rebours) = **6, 3, 4, 5, 1, 2, 8, 7, 11, 10, 9, 0**.
- (b) Premier hexacorde : (0, 9, 10, 11, 7, 8). Rétrograde : (8, 7, 11, 10, 9, 0). T6 : (8+6, 7+6, 11+6, 10+6, 9+6, 0+6) = **(2, 1, 5, 4, 3, 6)** = le second hexacorde de P0. ∎ (On observera que R0 = T6(P0) comme suites ordonnées : la série est son propre rétrograde au triton, d'où 24 formes distinctes au lieu de 48.)

#### Exercice 4 — Identifier une relation précise

**Énoncé** : les cellules Mi–Fa–La = {4, 5, 9} et Sol–Si–Do = {7, 11, 0} appartiennent-elles à la même classe ? Si oui, par quelle opération exacte (Tn ou TnI, avec la valeur de n) passe-t-on de la première à la seconde ?

**Corrigé** :
- {4,5,9} : rotations (4,5,9) → 5 ; (5,9,16) → 11 ; (9,16,17) → 8 : forme normale [4,5,9], type [0,1,5]. Inversion {8,7,3} = {3,7,8} : rotations **(3,7,8) → 5** ; (7,8,15) → 8 ; (8,15,19) → 11 : [3,7,8] − 3 → [0,4,5]. Forme première **[0,1,5]** (3-4).
- {7,11,0} = {0,7,11} : rotations (0,7,11) → 11 ; **(7,11,12) → 5** ; (11,12,19) → 8 : forme normale [7,11,0], type [0,4,5] — la structure **inversée**. Forme première [0,1,5] également : **même classe 3-4**.
- L'une est de type [0,1,5], l'autre de type [0,4,5] : aucune transposition ne relie les deux (Tn préserve la suite des intervalles). On cherche n tel que n − {4,5,9} = {0,7,11} : n = 4 donne 4−4 = 0, 4−5 = 11, 4−9 = 7 ✓. **Opération : T4I.** (3-4 n'étant pas symétrique par inversion, la réponse Tn/TnI est exclusive : c'est TnI et seulement TnI.)

---

*Fin du contenu à valider. Rien de ce document n'est engageant tant que Dany n'a pas relu : (1) l'exactitude de chaque calcul (formes normales, formes premières, vecteurs, nombres de Forte) ; (2) les citations d'œuvres (notes exactes de l'op. 11 n° 1 mes. 1-3, accord « Farben » op. 16 n° 3, série de l'op. 21) à confronter aux partitions ; (3) le niveau (M1) et l'articulation avec les cours 27/30/31/36/37.*
