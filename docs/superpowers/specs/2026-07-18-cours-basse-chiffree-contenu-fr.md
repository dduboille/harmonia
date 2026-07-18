# Contenu FR — « Harmonisation au clavier & basse chiffrée »

> **Statut : brouillon de contenu pédagogique — À VALIDER par Dany avant tout développement.**
> Ce document est du *contenu seul* (prose, tables de référence, exemples réalisés note à note, quiz, exercices). Aucun code, aucune i18n. La priorité absolue est l'exactitude musicale : un seul chiffrage ou exemple faux discrédite le cours.

---

## Bloc d'en-tête

- **Titre du cours** : Harmonisation au clavier & basse chiffrée
- **Niveau** : Licence (≈ L3) — basso continuo et réalisation à quatre voix
- **Objectifs d'apprentissage**
  - Lire et décoder un chiffrage de basse continue (accord parfait, sixte, 6/4, septième et ses renversements, altérations, tiret).
  - Réaliser un chiffrage donné à quatre voix (SATB), puis au clavier (disposition main gauche / main droite).
  - Maîtriser les chiffrages courants et les marches (6/4 cadentiel, retards 4-3 et 7-6, marche de sixtes).
  - Distinguer la **basse chiffrée** (harmonie codée à réaliser exactement) de la **basse donnée** (harmonie à choisir, cf. cours 26) et déchiffrer un court extrait de continuo à l'examen.
- **Moteurs Harmonia réutilisés**
  - **Éditeur SATB** — saisie et vérification des quatre voix (conformité, quintes/octaves parallèles).
  - **Analyseur de chiffrage** — contrôle du chiffrage saisi vs. l'accord réalisé.
  - **PianoPlayer** — écoute des accords et des réalisations (noms FR : Do Ré Mi Fa Sol La Si).
  - **Verovio** — gravure des portées (basse chiffrée + réalisation).
- **Convention de notation** : noms de notes français partout (Do Ré Mi Fa Sol La Si), conformément à la convention Harmonia et à la couche audio. Les octaves suivent la convention du PianoPlayer (Do4 = do central de la zone médiane).

---

## Section 1 — Qu'est-ce que la basse chiffrée ?

La **basse chiffrée** (ou *basse continue*, *basso continuo*) est le système de notation abrégée qui a régné sur toute la musique baroque, d'environ 1600 à 1750. Le compositeur n'écrit qu'une seule ligne — la basse — surmontée de **chiffres** : ces chiffres codent les intervalles à superposer au-dessus de chaque note de basse, et donc l'harmonie complète. Une portée de deux lignes (basse + chiffres) suffit ainsi à noter tout l'accompagnement.

À l'époque, ce chiffrage était **réalisé en temps réel** par un instrument polyphonique — le **clavecin** ou l'**orgue**, souvent doublé d'un violoncelle ou d'une basse de viole tenant la ligne de basse. Le claveciniste lisait la basse, interprétait les chiffres et improvisait la texture des accords : c'est la *réalisation*. Le continuo est le socle harmonique de la cantate, de la sonate en trio, de l'opéra et de l'oratorio.

Comprendre la basse chiffrée, c'est donc apprendre à lire l'harmonie « en code » et à la déployer. C'est aussi la clé d'entrée vers l'analyse harmonique et l'accompagnement au clavier. On distingue dès maintenant deux situations que le cours ne confondra jamais : la **basse chiffrée** (les chiffres imposent l'harmonie exacte : on *réalise*) et la **basse donnée** sans chiffres (on *choisit* l'harmonie — travail étudié au cours 26, « Harmonisation : basse donnée et soprano donné »).

---

## Section 2 — Le code des chiffrages

Les chiffres indiquent toujours des **intervalles comptés à partir de la note de basse** (ramenés à l'octave). Ils ne disent rien du registre : c'est le réalisateur qui dispose les notes. Voici la table de référence, illustrée en Do majeur.

### Table de référence des chiffrages

| Chiffrage | Nom | Position de l'accord | Intervalles sur la basse | Exemple (Do majeur) | Accord obtenu |
|---|---|---|---|---|---|
| *(rien)* ou **5/3** | accord parfait | état fondamental | 3ce + 5te | basse **Do** → Do-Mi-Sol | I |
| **6** (= 6/3) | sixte | 1er renversement | 3ce + 6te | basse **Mi** → Do-Mi-Sol (basse Mi) | I6 |
| **6/4** | quarte et sixte | 2e renversement | 4te + 6te | basse **Sol** → Do-Mi-Sol (basse Sol) | I6/4 |
| **7** | septième | état fond. (accord de 7e) | 3ce + 5te + 7e | basse **Sol** → Sol-Si-Ré-Fa | V7 |
| **6/5** | sixte et quinte | 1er renv. de 7e | 3ce + 5te + 6te | basse **Si** → Sol-Si-Ré-Fa (basse Si) | V6/5 |
| **4/3** | tierce et quarte | 2e renv. de 7e | 3ce + 4te + 6te | basse **Ré** → Sol-Si-Ré-Fa (basse Ré) | V4/3 |
| **2** (= 4/2, +2) | seconde | 3e renv. de 7e | 2de + 4te + 6te | basse **Fa** → Sol-Si-Ré-Fa (basse Fa) | V2 |

> **Mémo des renversements de l'accord de septième de dominante (Sol7 = Sol-Si-Ré-Fa) en Do majeur** : basse **Sol** = 7 (V7) ; basse **Si** = 6/5 (V6/5) ; basse **Ré** = 4/3 (V4/3) ; basse **Fa** = 2 / 4/2 (V2). On lit la basse, on identifie de quel degré de l'accord il s'agit, le chiffre confirme le renversement.

### Altérations et signes particuliers

| Signe | Signification |
|---|---|
| **♯ / ♭ / ♮ seul** (sous la basse) | altère la **tierce au-dessus de la basse** (jamais la basse elle-même) |
| **altération accolée à un chiffre** (ex. ♯6, 6♭, ♯4) | altère uniquement l'**intervalle chiffré** indiqué |
| **chiffre barré ou suivi de « + »** (ex. 4+, 6+) | **hausse la note d'un demi-ton** — c'est le plus souvent la **sensible** que l'on rehausse |
| **tiret horizontal ( — )** | **prolonge la même harmonie** pendant que la basse se déplace (note(s) tenue(s)) |

**Exemple clé de l'altération seule** : en **La mineur**, sous la basse **Mi** (fondamentale de la dominante), un **♯** seul hausse la tierce au-dessus de la basse (Sol → **Sol♯**). On obtient Mi-Sol♯-Si = l'accord de dominante **V** avec sa **sensible** Sol♯. C'est le réflexe indispensable en mineur, où la sensible n'est jamais à l'armure. En Do majeur, la sensible Si étant déjà diatonique, aucun signe n'est nécessaire.

---

## Section 3 — Réaliser un chiffrage à quatre voix

Réaliser, c'est passer de la basse + chiffre à quatre voix complètes (SATB : Soprano, Alto, Ténor, Basse). La méthode se déroule en trois temps.

1. **Identifier l'accord.** Lire la basse, lire le chiffre, en déduire l'accord et son renversement (table de la section 2). Ex. : basse **Ré** chiffrée **4/3** en Do majeur → 2e renversement de Sol7 → **V4/3** (notes Sol-Si-Ré-Fa).
2. **Disposer.** Choisir le doublement (à l'état fondamental et en sixte, on double de préférence la fondamentale ; au 6/4 cadentiel, on double la basse). L'accord de septième complet se réalise sans doublement (les quatre notes y sont). Respecter l'ordre des voix (B ≤ T ≤ A ≤ S) et l'écart maximal d'une octave entre voix supérieures voisines.
3. **Conduire les voix.** Garder les notes communes, privilégier le mouvement conjoint et contraire, **résoudre la sensible** (montée vers la tonique en voix extrême) et la **septième** (descente conjointe), proscrire les **quintes et octaves parallèles**.

### Exemple entièrement réalisé (Do majeur)

Basse et chiffres : **Do** *(5/3)* — **Fa** *(5/3)* — **Sol** *(6/4)* — **Sol** *(5/3)* — **Do** *(5/3)*
Enchaînement : **I – IV – I6/4 – V – I** (avec 6/4 cadentiel).

| Accord | I | IV | I6/4 | V | I |
|---|---|---|---|---|---|
| **Basse (chiffre)** | Do3 *(5/3)* | Fa3 *(5/3)* | Sol3 *(6/4)* | Sol3 *(5/3)* | Do3 *(5/3)* |
| **Soprano** | Sol4 | Fa4 | Mi4 | Ré4 | Mi4 |
| **Alto** | Do4 | Do4 | Do4 | Si3 | Do4 |
| **Ténor** | Mi3 | La3 | Sol3 | Sol3 | Sol3 |
| **Basse** | Do3 | Fa3 | Sol3 | Sol3 | Do3 |

**Contrôles de conduite** : soprano descendante Sol4-Fa4-Mi4-Ré4-Mi4 (mélodique) ; au 6/4 cadentiel, la **basse Sol est doublée** (Basse + Ténor) ; la résolution 6/4 → 5/3 fait descendre la **6te Mi → 5te Ré** (soprano) et la **4te Do → 3ce Si** (alto) ; la **sensible Si (alto) monte au Do** final ; aucune quinte ni octave parallèle. On peut sonoriser chaque colonne avec PianoPlayer et vérifier les quatre voix dans l'éditeur SATB.

---

## Section 4 — La réalisation au clavier

La réalisation à quatre voix « en partition » (SATB) espace les voix sur deux portées, chacune menant sa ligne. La réalisation **au clavier**, elle, cherche l'efficacité et le confort de jeu du continuiste. Le principe est différent : **la basse à la main gauche**, l'**accord serré à la main droite**.

- **Main gauche** : joue la note de basse (souvent seule, parfois doublée à l'octave).
- **Main droite** : réalise les trois autres notes de l'accord en **position serrée**, dans un ambitus resserré au centre du clavier (grosso modo entre Do4 et Do5), sans chercher l'écart régulier des voix SATB.

Deux principes rendent le jeu fluide : **garder les notes communes** d'un accord au suivant (les doigts bougent le moins possible) et **mélodiser le soprano**, c'est-à-dire soigner la note supérieure de la main droite pour qu'elle dessine une petite ligne. On applique les mêmes interdits (quintes/octaves parallèles) mais la disposition serrée les rend plus rares et l'oreille prime.

### Même progression, disposition clavier (Do majeur)

Progression **I – IV – I6/4 – V – I**. La main droite reste dans l'octave Do4-Do5, la main gauche donne la basse.

| Accord | I | IV | I6/4 | V | I |
|---|---|---|---|---|---|
| **Main droite (serré, grave→aigu)** | Mi4-Sol4-Do5 | Fa4-La4-Do5 | Mi4-Sol4-Do5 | Ré4-Sol4-Si4 | Mi4-Sol4-Do5 |
| **Main gauche (basse)** | Do3 | Fa3 | Sol3 | Sol3 | Do3 |

**Différence avec la disposition SATB** : ici les notes communes **Do5** (I, IV, I6/4, I) et **Sol4** (I, I6/4, V, I) restent sous les mêmes doigts ; l'accord est compact, prêt à improviser des ornements ou des arpèges. La disposition SATB, au contraire, répartit les voix sur près de deux octaves pour l'écriture chorale — la réalisation clavier n'est pas une « faute » de spacing, c'est une pratique d'accompagnement.

---

## Section 5 — Chiffrages courants et marches

Quelques formules reviennent sans cesse : les identifier accélère le déchiffrage.

### Le 6/4 cadentiel

Sur une **basse de dominante tenue**, le chiffrage **6/4 → 5/3** note le 6/4 cadentiel : la tonique posée « en suspens » sur la dominante, puis résolue sur l'accord de dominante. En Do majeur, basse **Sol** : le 6/4 donne Do/Mi au-dessus de Sol (accord de tonique, I6/4), puis **6te → 5te** et **4te → 3ce** donnent Ré/Si (V). C'est un ornement de la dominante, toujours sur temps fort, résolu au temps suivant (cf. cours 26).

| Étape | Basse | Chiffrage | S | A | T | B |
|---|---|---|---|---|---|---|
| 6/4 (temps fort) | Sol3 | 6/4 | Mi4 | Do4 | Sol3 | Sol3 |
| résolution | Sol3 | 5/3 | Ré4 | Si3 | Sol3 | Sol3 |
| tonique | Do3 | 5/3 | Mi4 | Do4 | Sol3 | Do3 |

### Le retard 4-3 (suspension)

Le retard **4-3** prolonge une note consonante qui devient une **quarte dissonante** sur la nouvelle basse, avant de résoudre par degré conjoint descendant sur la **tierce**. Trois temps : *préparation* (note consonante) → *percussion* (la basse change, la note devient dissonante) → *résolution* (descente d'un degré). En Do majeur, le **Do** de la tonique, tenu sur une basse **Sol**, devient une 4te (Sol-Do) et résout sur **Si** (3ce). Chiffrage : **5/4 → 5/3**, soit la formule « 4 — 3 » (cf. cours 38, le retard).

| Étape | Basse | Chiffrage | S | A | T | B |
|---|---|---|---|---|---|---|
| Préparation | Do3 | 5/3 | Sol4 | Do4 | Mi3 | Do3 |
| Percussion (retard) | Sol2 | 5/4 | Sol4 | **Do4** | Ré3 | Sol2 |
| Résolution | Sol2 | 5/3 | Sol4 | **Si3** | Ré3 | Sol2 |
| Tonique | Do3 | 5/3 | Sol4 | Do4 | Mi3 | Do3 |

La voix suspendue est l'**alto** : Do4 consonant (préparation), Do4 dissonant (4te sur la basse Sol), puis Do4 → **Si3** (résolution sur la 3ce). Le retard **7-6** fonctionne de même sur un accord de sixte : la 7e au-dessus de la basse résout sur la 6te (ex. sur une basse La, Sol → Fa au-dessus de La).

### La marche de sixtes

Une **marche de sixtes** est une chaîne d'accords de **sixte (6)** enchaînés par mouvement conjoint de la basse — un enchaînement de premiers renversements. Le modèle classique se réalise à **trois voix réelles** (faux-bourdon) : au-dessus de chaque basse, une voix à la **tierce** et une voix à la **sixte**. Les voix supérieures descendent en 6tes parallèles avec la basse (et en 3ces parallèles entre elles) — parallèles licites, à l'inverse des quintes/octaves.

Basse descendante **La3 – Sol3 – Fa3 – Mi3**, chaque note chiffrée **6** → **IV6 – iii6 – ii6 – I6**.

| Voix | 1 | 2 | 3 | 4 |
|---|---|---|---|---|
| **Soprano (6te sur la basse)** | Fa4 | Mi4 | Ré4 | Do4 |
| **Alto (3ce sur la basse)** | Do4 | Si3 | La3 | Sol3 |
| **Basse (chiffre 6)** | La3 | Sol3 | Fa3 | Mi3 |

> **Réalisation à quatre voix** : ajouter un ténor à une chaîne de 6/3 parallèles produit inévitablement des octaves ou quintes parallèles si l'on garde un doublement fixe. On **alterne alors le doublement** (une note double la basse, la suivante double la 6te, etc.) pour briser les parallèles. Le modèle à trois voix ci-dessus reste la référence à présenter et à faire entendre (PianoPlayer).

### Progressions types à connaître

- **T → SD → D → T** : I – IV (ou II6) – V(7) – I.
- **Cadence parfaite ornée** : I – IV – I6/4 – V(7) – I.
- **Descente par sixtes** puis cadence : marche de sixtes → II6 – V – I.
- **Retards à la cadence** : suspension 4-3 sur la dominante, ou 7-6 sur un accord de passage.

---

## Section 6 — Applications

### Réaliser un court extrait de continuo

On applique la méthode de la section 3 à un extrait de style baroque. Démarche recommandée :

1. **Repérer la tonalité** (armure + cadence finale) et le mode (présence de la sensible ?).
2. **Segmenter la basse** et lire chaque chiffre ; traduire chaque colonne en accord + renversement.
3. **Repérer les formules** (6/4 cadentiel, retards 4-3 / 7-6, marches) qui dictent la conduite.
4. **Réaliser** : d'abord la basse (main gauche / voix de basse), puis les voix supérieures en gardant les notes communes et en résolvant sensibles et septièmes.
5. **Vérifier** à l'oreille (PianoPlayer) et à l'écrit (éditeur SATB + analyseur de chiffrage).

Petit extrait modèle (Do majeur, à réaliser), basse et chiffres :
**Do** *(5/3)* — **La** *(6)* — **Ré** *(6)* — **Sol** *(6/4)* — **Sol** *(7)* — **Do** *(5/3)*.
Le corrigé (analyse et enchaînement) figure ci-dessous.

> **Corrigé de l'extrait** — analyse colonne par colonne :
> - **Do** *(5/3)* = **I** (Do-Mi-Sol).
> - **La** *(6)* = 1er renv. : basse La, 3ce Do, 6te Fa → **Fa-La-Do = IV6**.
> - **Ré** *(6)* = 1er renv. : basse Ré, 3ce Fa, 6te Si → **Si-Ré-Fa = VII6** (fonction de dominante).
> - **Sol** *(6/4)* = **I6/4** cadentiel (Do-Mi-Sol sur basse Sol).
> - **Sol** *(7)* = **V7** (Sol-Si-Ré-Fa).
> - **Do** *(5/3)* = **I**.
>
> Enchaînement : **I – IV6 – VII6 – I6/4 – V7 – I**. Le VII6 (sensible Si à la basse serait V6 ; ici la basse Ré évite la 5te diminuée à la basse) prépare le 6/4 cadentiel, puis V7 → I.

### Le déchiffrage à l'examen

À l'épreuve, le temps est compté : on chiffre d'abord **mentalement** la basse (degré + renversement) avant d'écrire une seule note, on **marque les sensibles et les septièmes** à résoudre, on repère les **formules** (6/4, retards, marches). On réalise ensuite proprement en surveillant les parallèles. Rappel de la distinction fondamentale : ici l'harmonie est **imposée** par les chiffres (basse chiffrée) — contrairement à la **basse donnée** du cours 26, où l'on *choisit* les accords. À l'examen, un chiffrage mal lu est une faute d'analyse, pas de goût.

---

## Section 7 — Entraînement

### Quiz (10 questions)

**Q1.** Dans une basse chiffrée, à partir de quelle note comptent les chiffres ?
- A. À partir du Do central — B. **À partir de la note de basse** — C. À partir du soprano — D. À partir de la tonique
- *Réponse : B.* Les chiffres notent des intervalles au-dessus de la note de basse, ramenés à l'octave (table de la section 2).

**Q2.** Quel chiffrage note l'accord parfait à l'état fondamental ?
- A. 6 — B. 6/4 — C. **Rien (ou 5/3)** — D. 7
- *Réponse : C.* Une basse sans chiffre (ou « 5/3 ») = accord parfait à l'état fondamental (3ce + 5te).

**Q3.** Le chiffre **6** seul indique :
- A. Un accord de septième — B. **Un accord de sixte (1er renversement)** — C. Un 2e renversement — D. Une pédale
- *Réponse : B.* « 6 » (= 6/3) = premier renversement : la basse est la tierce de l'accord (section 2).

**Q4.** En Do majeur, une basse **Si** chiffrée **6/5** correspond à :
- A. VII à l'état fondamental — B. **V6/5 (Sol-Si-Ré-Fa, 1er renversement)** — C. I6 — D. V4/3
- *Réponse : B.* Basse Si + 6/5 = premier renversement de l'accord de septième de dominante Sol-Si-Ré-Fa.

**Q5.** En Do majeur, une basse **Ré** chiffrée **4/3** correspond à :
- A. II à l'état fondamental — B. **V4/3 (Sol7, 2e renversement)** — C. V6/5 — D. I6/4
- *Réponse : B.* Basse Ré (quinte de Sol7) + 4/3 = deuxième renversement de l'accord de septième de dominante.

**Q6.** En Do majeur, une basse **Fa** chiffrée **2** (ou **4/2**) correspond à :
- A. IV à l'état fondamental — B. **V2 (Sol7, 3e renversement)** — C. V4/3 — D. II6
- *Réponse : B.* Basse Fa (septième de Sol7) + 2 / 4/2 = troisième renversement de l'accord de septième de dominante.

**Q7.** Un **♯ seul** placé sous une note de basse altère :
- A. La basse elle-même — B. La quinte au-dessus de la basse — C. **La tierce au-dessus de la basse** — D. Toutes les notes de l'accord
- *Réponse : C.* Une altération isolée agit sur la tierce au-dessus de la basse (section 2).

**Q8.** En **La mineur**, un **♯ seul** sous la basse **Mi** produit :
- A. Un accord de Mi mineur — B. **Mi-Sol♯-Si : l'accord de dominante V avec sa sensible Sol♯** — C. Un 6/4 — D. Une septième diminuée
- *Réponse : B.* Le ♯ hausse la tierce Sol → Sol♯ : c'est la sensible, qui fait de l'accord une vraie dominante (indispensable en mineur).

**Q9.** Sur une basse de dominante, le chiffrage **6/4 → 5/3** note :
- A. Une marche de sixtes — B. Un retard 7-6 — C. **Le 6/4 cadentiel (I6/4 → V)** — D. Une pédale de tonique
- *Réponse : C.* La tonique posée sur la dominante (6/4), puis 6te→5te et 4te→3ce : le 6/4 cadentiel, sur temps fort (cf. cours 26).

**Q10.** À quoi sert le **tiret horizontal ( — )** dans un chiffrage ?
- A. À supprimer l'accord — B. **À prolonger la même harmonie pendant que la basse se déplace** — C. À indiquer un silence — D. À doubler la basse
- *Réponse : B.* Le tiret prolonge les notes tenues : l'harmonie reste, seule la basse bouge (section 2).

> **Question bonus (distinction clé)** : quelle différence entre **basse chiffrée** et **basse donnée** ? *Réponse :* dans la basse **chiffrée**, les chiffres **imposent** l'harmonie exacte à réaliser ; dans la basse **donnée** (sans chiffres, cours 26), c'est à l'élève de **choisir** l'harmonie.

### Exercices de réalisation SATB

Réaliser à quatre voix (sauf mention contraire), en Do majeur. Le corrigé donne une réalisation-type ; d'autres dispositions correctes sont possibles.

**Exercice 1 — Cadence fondamentale.** Basse : **Do3** *(5/3)* — **Sol3** *(5/3)* — **Do3** *(5/3)* → **I – V – I**.

| Voix | I | V | I |
|---|---|---|---|
| **Soprano** | Mi4 | Ré4 | Mi4 |
| **Alto** | Do4 | Si3 | Do4 |
| **Ténor** | Sol3 | Sol3 | Sol3 |
| **Basse** | Do3 | Sol3 | Do3 |

*Points de contrôle : sensible Si3 (alto) → Do4 ; mouvement contraire basse/soprano ; pas de parallèles.*

**Exercice 2 — Septième de dominante, 1er renversement.** Basse : **Do3** *(5/3)* — **Si2** *(6/5)* — **Do3** *(5/3)* → **I – V6/5 – I**.

| Voix | I | V6/5 | I |
|---|---|---|---|
| **Soprano** | Do4 | Ré4 | Do4 |
| **Alto** | Sol3 | Sol3 | Sol3 |
| **Ténor** | Mi3 | Fa3 | Mi3 |
| **Basse** | Do3 | Si2 | Do3 |

*Points de contrôle : accord de 7e complet (aucun doublement) ; le triton Fa/Si résout vers l'intérieur (Fa3→Mi3, Si2→Do3) ; septième Fa3 (ténor) → Mi3.*

**Exercice 3 — Le 6/4 cadentiel.** Basse : **Fa3** *(5/3)* — **Sol3** *(6/4)* — **Sol3** *(5/3)* — **Do3** *(5/3)* → **IV – I6/4 – V – I**.

| Voix | IV | I6/4 | V | I |
|---|---|---|---|---|
| **Soprano** | Fa4 | Mi4 | Ré4 | Mi4 |
| **Alto** | Do4 | Do4 | Si3 | Do4 |
| **Ténor** | La3 | Sol3 | Sol3 | Sol3 |
| **Basse** | Fa3 | Sol3 | Sol3 | Do3 |

*Points de contrôle : au 6/4, doubler la basse Sol (Basse + Ténor) ; résolution 6te→5te (Mi4→Ré4) et 4te→3ce (Do4→Si3) ; sensible Si3 → Do4.*

**Exercice 4 — Marche de sixtes (3 voix, faux-bourdon).** Basse : **La3** *(6)* — **Sol3** *(6)* — **Fa3** *(6)* — **Mi3** *(6)* → **IV6 – iii6 – ii6 – I6**.

| Voix | 1 | 2 | 3 | 4 |
|---|---|---|---|---|
| **Soprano (6te)** | Fa4 | Mi4 | Ré4 | Do4 |
| **Alto (3ce)** | Do4 | Si3 | La3 | Sol3 |
| **Basse (6)** | La3 | Sol3 | Fa3 | Mi3 |

*Points de contrôle : soprano en 6tes parallèles avec la basse, alto en 3ces parallèles avec la basse (parallèles licites) ; aucune 5te ni 8ve parallèle. En réalisation à 4 voix, alterner le doublement du ténor pour éviter les octaves parallèles.*

---

### Notes de validation (à l'attention du relecteur)

- **Chiffrage du 3e renversement de V7 (Q6, table section 2)** : présenté comme **2 / 4/2** (formes standard, sans ambiguïté). La consigne mentionnait aussi « +2 » : dans l'accord (basse Fa, notes Fa-Sol-Si-Ré), la sensible **Si** est la **quarte augmentée** au-dessus de la basse — c'est donc le **4** qui porterait le « + » (forme **4+**), et non le 2. J'ai donc retenu **2 / 4/2** et signalé le triton ; **le « +2 » serait à confirmer** selon la tradition d'édition retenue (Danhauser/Dubois).
- Toutes les réalisations SATB ont été vérifiées à la main : conduite des voix, résolution des sensibles et des septièmes, absence de quintes/octaves parallèles. À revalider dans l'éditeur SATB + analyseur de chiffrage avant intégration.
- Le 6/4 cadentiel avec **basse doublée** produit un unisson Basse/Ténor sur Sol dans ce registre : c'est conforme au doublement attendu du 6/4 cadentiel, mais peut être re-disposé si le rendu Verovio le demande.
