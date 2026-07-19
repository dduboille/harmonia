# Contenu FR — « Analyser une œuvre qu'on va jouer »

> **Statut : brouillon de contenu pédagogique — À VALIDER par Dany avant tout développement.**
> Ce document est du *contenu seul* (prose, tables, exemples note à note, quiz, exercices). Aucun code, aucune i18n, aucun composant. La priorité absolue est l'exactitude musicale : tous les exemples donnent les notes exactes par voix, la conduite des voix est vérifiée, et les conséquences interprétatives sont énoncées comme des **propositions argumentées**, jamais comme des dogmes.

---

## Bloc d'en-tête

- **Titre du cours** : Analyser une œuvre qu'on va jouer
- **Niveau** : 3 (≈ L3 · DNSPM) — **premier cours du parcours DNSPM** (diplôme d'interprète, Pôles supérieurs). Son identité : l'analyse **au service de l'interprétation**, partition en main. Ni commentaire d'écoute (cours 45 — œuvre inconnue, à l'oreille), ni analyse pour elle-même (cours 17, 18, 27, 28) : ici, on analyse l'œuvre que l'on est en train de travailler, pour en tirer des **décisions** de jeu.
- **Objectifs d'apprentissage**
  - Comprendre pourquoi l'analyse précède le travail instrumental : elle fonde les choix de direction, de timing et d'équilibre — selon le fil conducteur **analyser → décider → entendre**.
  - Dresser la **carte formelle** d'une œuvre (sections, retours, proportions, plan tonal) et en déduire l'architecture de l'interprétation (où est le vrai sommet, ce qu'on garde en réserve, les rapports de tempo entre sections).
  - Réduire la surface au **squelette harmonique de l'interprète** : cadences (respirations), dominantes et résolutions (timing tension→détente), pédales (stabilité), modulations (couleurs), rythme harmonique (élan).
  - Établir le **plan de phrasé** : périodes et phrases-« sentence », élisions, hémioles, respirations placées et respirations interdites, direction par anacrouse.
  - Identifier la **hiérarchie des voix** — quelle ligne conduit, quelles voix intérieures projeter, la basse comme seconde mélodie.
  - Produire le livrable du cours : la **fiche d'interprétation** en une page, chaque décision adossée à un fait d'analyse.
- **Moteurs Harmonia réutilisés**
  - **Analyseur de partitions** (`/analyse-partition`) — import de **votre propre partition MusicXML** (`.xml`, `.musicxml`, `.mxl`) : gravure, lecture, analyse harmonique automatique (degrés, fonctions, cadences, commentaire pédagogique). C'est l'outil de l'exercice final.
  - **Squelette harmonique** (`/squelette-harmonique`) — réduction guidée d'une surface à sa progression sous-jacente.
  - **Verovio** — gravure des exemples ; **PianoPlayer** — écoute de tous les exemples (noms FR : Do Ré Mi Fa Sol La Si).
  - **Liens de cours** — cours 17 (*La phrase musicale et la forme*), cours 18 (*Le développement motivique*), cours 27 (*Analyse fonctionnelle profonde* — la réduction), cours 28 (*Formes musicales approfondies*), cours 45 (*Méthodologie du commentaire d'écoute* — l'épreuve sœur, à l'oreille).
- **Convention de notation** : noms de notes français partout ; Do4 = do central ; chiffrages de degrés dans la notation du cours (I, vi, IV, II6, I6/4, V7).

---

## Section 1 — Pourquoi analyser avant de jouer ?

Un interprète qui ouvre une partition prend, qu'il le veuille ou non, des dizaines de décisions : où respirer, où mener le crescendo, quelle voix faire entendre, combien de temps tenir cette arrivée. La seule question est de savoir si ces décisions sont **fondées** ou improvisées. L'analyse n'est pas la garniture académique du travail instrumental : elle en est le fondement — c'est elle qui dit **où va la phrase** (direction), **où l'harmonie se tend et se détend** (timing), **quelle voix conduit** (équilibre).

Concrètement, savoir que la mesure 6 porte une appoggiature de dominante change le geste : on y appuie, on ne s'y précipite pas. Savoir que la vraie tension d'un menuet culmine à la fin de sa section centrale interdit de tout donner dès la première reprise. Savoir que la ligne expressive est à l'alto interdit de laisser le soprano l'écraser.

Deux pièges symétriques guettent. L'**intuition seule** : elle produit des interprétations séduisantes par endroits et incohérentes à l'échelle de l'œuvre — on phrase joliment une mesure contre le sens de la forme. Et l'**analyse qui ne devient jamais du son** : le tableau de degrés impeccable qui ne change rien au jeu est du temps perdu. D'où la règle du cours, qui structure tout ce qui suit :

> **Analyser → décider → entendre.**
> Chaque observation analytique doit se traduire en une décision de jeu, et chaque décision doit être vérifiée à l'oreille, instrument en main. Une analyse qui ne produit pas de décision est incomplète ; une décision que l'oreille dément se révise (voir la clause d'humilité, section 6).

---

## Section 2 — La carte de l'œuvre : forme et proportions

Première passe, partition sur la table, **avant** de jouer : dresser la carte. On repère les **sections** (doubles barres, reprises, changements de texture ou d'armure), les **retours** (qu'est-ce qui revient, identique ou varié ?), les **proportions** (combien de mesures chacune ?) et le **plan tonal** (où va-t-on, quand revient-on ?). Les outils sont ceux des cours 17 et 28 (période, carrure, formes binaire, ternaire, rondo, sonate) — mais la finalité change : la carte sert à décider l'**architecture de l'interprétation**. Où est le **vrai sommet** de l'œuvre ? Qu'est-ce qu'on garde **en réserve** pour lui ? Quels rapports de tempo et de caractère entre sections ?

On **annote la partition** : lettres de section (A, B, A′) au crayon, flèches vers les points de tension, encadrement des cadences. Une partition de travail non annotée est une carte muette.

**Exemple travaillé — un menuet classique de 24 mesures** (binaire à reprises avec retour, ||: A :||: B + A′ :||) :

| Section | Mesures | Plan tonal | Fonction dramatique | Conséquence interprétative |
|---|---|---|---|---|
| A | 1–8 | Do majeur → cadence parfaite en **Sol majeur** (m. 8) | exposition, élan initial | son affirmé mais **réserve dynamique** : rien au-dessus de *mf* |
| B | 9–16 | séquence par La mineur, puis **pédale de dominante** (Sol) m. 13–16 | instabilité croissante, tension maximale | crescendo de longue portée ; **sommet de l'œuvre m. 15–16**, léger élargissement |
| A′ | 17–24 | retour Do majeur, cadence parfaite conclusive (m. 24) | résolution, retour éclairé | une **arrivée**, pas un recommencement : détente, son plus rond qu'en A |

La carte tranche d'emblée la question la plus coûteuse : le sommet n'est **pas** dans A (erreur fréquente : tout donner d'entrée), il est au bout de B, là où la pédale de dominante suspend le retour. Tout le plan dynamique découle de cette seule observation.

---

## Section 3 — Le squelette harmonique de l'interprète

Deuxième passe : réduire la surface (arpèges, broderies, figuration) à la **progression sous-jacente** — le geste du cours 27 (réduction, prolongation), outillé sur la plateforme par `/squelette-harmonique`. L'interprète y cherche quatre choses : les **cadences** (ce sont les respirations), les **dominantes et leurs résolutions** (le timing tension→détente), les **pédales** (plages de stabilité ou de suspens), les **modulations** (changements de couleur à projeter). S'y ajoute le **rythme harmonique** : quand les accords changent plus vite à l'approche d'une cadence, la musique accélère intérieurement — c'est un élan à soutenir, même à tempo constant.

**Exemple travaillé — phrase de 8 mesures en Do majeur, à 4/4** (mélodie + basse, un accord par mesure sauf indication) :

| Mesure | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|---|---|---|---|---|---|---|---|---|
| **Mélodie** | Do4 Ré4 Mi4 Fa4 (noires) | Sol4 – Mi4 (blanches) | La4 – Do5 (blanches) | Do5, Si4 (noires) La4 (blanche) | La4 – **Ré5** (blanches) | Do5 (ronde) | Si4 (ronde) | Do5 (ronde) |
| **Basse** (rondes) | Do3 | Do3 | La2 | Fa2 | Fa2 | Sol2 | Sol2 | Do3 |
| **Degré** | I | I | vi | IV | II6 | I6/4 | V7 | I |

(Ré4, Fa4 et Si4 sont des notes de passage ; toutes les autres notes de la mélodie appartiennent à l'accord.)

Le squelette est **I – vi – IV – II6 – I6/4 – V7 – I**, et chaque événement commande une décision :

| Événement | Fait d'analyse | Décision de jeu |
|---|---|---|
| I (m. 1–2) | tonique prolongée, rythme harmonique lent (1 accord / 2 mesures) | installer le tempo, son posé, aucune urgence |
| vi (m. 3) | première inflexion, ombre relative | changement de **couleur**, pas d'accent |
| IV → II6 (m. 4–5) | zone de pré-dominante ; le rythme harmonique est passé à 1 accord/mesure ; basse commune Fa | l'élan vers la cadence commence : **crescendo directionnel**, lier m. 4–5 sur la basse tenue |
| Ré5 (m. 5) | **sommet mélodique** — mais pas le sommet de tension | le faire sonner sans s'y arrêter : la phrase n'est pas finie |
| I6/4 (m. 6) | appoggiature de la dominante (Do5, quarte au-dessus de la basse Sol) : **sommet de tension harmonique** | point culminant dynamique, léger appui ; **ne pas respirer** avant sa résolution |
| V7 (m. 7) | résolution de l'appoggiature (Do5 → Si4) : la détente commence | le 6/4 → V7 est l'**expiration harmonique** — placer le diminuendo ici |
| I (m. 8) | arrivée, cadence parfaite | tenuto d'arrivée, puis respiration **après** l'accord |

Noter la dissociation sommet mélodique (m. 5) / sommet harmonique (m. 6) : c'est elle qui donne à la phrase sa trajectoire en deux temps — et c'est exactement le genre de fait que l'intuition seule manque.

---

## Section 4 — Phrasé, carrures et respirations

Troisième passe : le plan de phrasé. Les catégories viennent du cours 17 : la **période** (antécédent qui suspend — souvent demi-cadence —, conséquent qui conclut) et la **phrase de type « sentence »** (présentation 2+2, puis continuation vers la cadence). S'y ajoutent les accidents de carrure : l'**élision** (la mesure d'arrivée d'une phrase est en même temps la première de la suivante), l'**extension** (cadence évitée puis reconquise), l'**hémiole** (à 3/4, deux mesures entendues comme trois groupes de 2 temps — signal quasi systématique d'approche de cadence dans les danses baroques et les menuets).

Règles de respiration de l'interprète : on respire **aux cadences et fins de phrase**, après l'arrivée ; on ne respire **jamais** entre une tension et sa résolution (6/4 → V7, sensible → tonique), ni **à travers une élision** — la respiration y romprait le relais que le compositeur a précisément soudé. Une hémiole se phrase selon ses appuis réels (par 2 temps), avec l'élargissement naturel qu'elle induit vers la cadence. Enfin, le phrasé par **anacrouse** : une levée se dirige *vers* le temps fort suivant, elle ne s'accentue pas. Le modèle de tout cela reste le **chant** : là où un chanteur devrait respirer, la phrase respire — quel que soit l'instrument.

**Conventions d'annotation du cours** : `→` direction (« va vers »), `∨` respiration, `(∨)` demi-respiration (césure sans rupture), `—` tenuto d'arrivée.

**La phrase de la section 3, annotée** : m. 1–2 présentation, `(∨)` légère après le Mi4 de la m. 2 ; m. 3–4 réponse, `(∨)` après m. 4 ; puis un seul grand geste `→` de la m. 5 jusqu'au Do5 de la m. 6 (sommet), **aucune respiration** de m. 5 à m. 8 ; `—` sur le Do5 final (m. 8), `∨` franche après. La structure est une « sentence » : 2+2 puis continuation de 4 mesures d'un seul tenant.

---

## Section 5 — Hiérarchie des voix et conduite intérieure

Quatrième passe : qui conduit ? Le réflexe « la voix supérieure est la mélodie » est statistiquement juste et musicalement paresseux. La ligne directrice peut être **intérieure** (descentes chromatiques, chaînes de retards — les projeter est un des gestes les plus payants du jeu polyphonique) ou à la **basse**, qu'il faut toujours travailler comme une **seconde mélodie** : c'est elle qui porte le squelette de la section 3. Au piano, cette hiérarchie se réalise par le **voicing** (doser les doigts d'un même accord) ; en ensemble, par l'**équilibre** (qui joue la ligne qui compte cède le premier plan). Même une texture d'apparence homophone s'écoute polyphoniquement : chaque voix a une ligne, et l'une d'elles mérite le premier plan.

**Exemple note à note — 4 accords, écriture SATB d'école, en Do majeur** (un accord par mesure) :

| Voix | Accord 1 | Accord 2 | Accord 3 | Accord 4 |
|---|---|---|---|---|
| Soprano | Sol4 | Sol4 | Sol4 | Ré4 |
| **Alto** | **Do4** | **Si3** | **Si♭3** | **La3** |
| Ténor | Mi3 | Ré3 | Mi3 | Fa3 |
| Basse | Do3 | Sol2 | Do3 | Fa2 |
| Degré | I | V | V7/IV | II6 |

Le soprano est **immobile** (Sol4 tenu trois accords) : il ne conduit rien. La ligne expressive est la **descente chromatique de l'alto** Do4 – Si3 – Si♭3 – La3 : l'inflexion Si → Si♭ (dans la même voix, comme il se doit) fait basculer la tonique en dominante de IV — c'est l'instant d'ombre du passage, à faire entendre. Décision : projeter l'alto (au piano, le doigt de l'alto sonne un plan au-dessus des autres ; en quatuor, le second violon ou l'alto mène), soprano en retrait, basse Do–Sol–Do–Fa ferme mais sobre. La suite logique du II6 est la cadence de la section 3 (I6/4 – V7 – I) : les deux exemples se raccordent.

*Conduite vérifiée : mouvements conjoints ou obliques dans les voix supérieures, aucune quinte ni octave consécutive, septième Si♭ introduite par inflexion chromatique dans la même voix et résolue par degré descendant sur La.*

---

## Section 6 — De l'analyse à la décision : la fiche d'interprétation

Le livrable de la méthode tient sur **une page** — la fiche d'interprétation, à glisser dans la partition. Cinq rubriques : **1. Carte formelle** (sections, mesures, plan tonal — la table de la section 2) ; **2. Squelette harmonique** avec cadences encadrées et pédales ; **3. Plan de phrasé** (respirations `∨`, directions `→`, élisions signalées) ; **4. Hiérarchie des voix** par section ; **5. Trois à cinq décisions d'interprétation**, chacune avec sa **justification analytique** — c'est la rubrique qui distingue une fiche d'un devoir d'analyse.

**Fiche modèle — le menuet de la section 2** :

> **Menuet en Do majeur, 24 mes.** — Forme : ||: A 1–8 :||: B 9–16 + A′ 17–24 :||. Plan tonal : A module à Sol (CP m. 8) ; B séquence vers La mineur puis pédale de dominante m. 13–16 ; A′ conclut en Do (CP m. 24). Squelette : cadences m. 8, m. 16 (demi-cadence sur la pédale), m. 24 ; rythme harmonique s'accélérant m. 6–7 et 22–23 ; hémiole m. 6–7 et 22–23. Phrasé : périodes 4+4 en A ; respirations après m. 4, 8, 12, 24 ; **aucune** entre m. 15 et 17 (la pédale se résout dans le retour). Voix : soprano conduit en A ; m. 9–12 la basse mène (marche) ; m. 13–16 tenir la pédale comme un fil.
> **Décisions** : ① A à *mf* maximum — le sommet est m. 15–16 (pédale de dominante, tension maximale de la forme). ② Hémioles phrasées par 2 temps, léger élargissement vers les cadences. ③ A′ plus rond et plus détendu que A : c'est une arrivée (retour de tonique après tension), pas une reprise. ④ M. 9–12 : basse au premier plan (c'est elle qui séquence). ⑤ Reprises : première fois sobre, seconde fois ornementée — la forme le permet, la carrure le supporte.

**Discuter une édition** : les indications d'un éditeur (liaisons, nuances, doigtés) sont des interprétations, pas le texte. Armé de l'analyse, on peut s'en écarter — par exemple refuser un *crescendo* imprimé qui culmine en A quand la forme place la tension en B — à condition de savoir dire *pourquoi*, et de distinguer ce qui vient du compositeur de ce qui vient de l'éditeur.

**Clause d'humilité** : l'analyse **informe**, l'oreille **décide**. Si une décision analytiquement impeccable sonne faux à l'instrument, c'est la décision qu'on révise — souvent parce qu'un paramètre (tessiture, acoustique, tempo réel) manquait à l'analyse. La fiche est un document de travail, pas un contrat.

---

## Section 7 — Entraînement

**La méthode en 5 passes** : ① **forme** (carte, proportions, plan tonal) → ② **harmonie** (squelette, cadences, pédales, rythme harmonique) → ③ **phrasé** (carrures, respirations, élisions, hémioles) → ④ **voix** (qui conduit, section par section) → ⑤ **fiche** (les décisions et leurs justifications). Dans cet ordre : chaque passe s'appuie sur la précédente.

### Quiz (10 questions)

1. **Une période de 8 mesures se conclut par une cadence parfaite. Où respirer ?**
   a) avant le V7 · b) entre le V7 et le I · c) **après le I** ✓ · d) nulle part
   *On respire après l'arrivée — jamais entre une tension et sa résolution.*

2. **La cadence d'arrivée d'une phrase est aussi le premier temps de la suivante (élision). Que faire ?**
   a) respirer quand même · b) **enchaîner sans respirer** ✓ · c) ralentir pour compenser · d) accentuer l'arrivée
   *L'élision soude fin et début : une respiration romprait le relais écrit par le compositeur.*

3. **À 3/4, les deux mesures précédant la cadence s'entendent comme trois groupes de 2 temps. C'est…**
   a) une syncope, à accentuer temps par temps · b) **une hémiole : phraser par 2 temps, élargissement naturel vers la cadence** ✓ · c) un changement de mesure à ignorer · d) une erreur de gravure
   *L'hémiole se phrase selon ses appuis réels ; elle freine et élargit l'approche de la cadence.*

4. **Le rythme harmonique passe d'un accord par mesure à deux accords par mesure à l'approche de la cadence. Implication ?**
   a) ralentir aussitôt · b) jouer plus fort chaque accord · c) **soutenir l'élan : l'accélération harmonique est une intensification directionnelle** ✓ · d) aucune
   *Les accords qui se resserrent créent l'élan vers la cadence — même à tempo constant.*

5. **Texture à 4 voix : soprano tenu immobile, alto en descente chromatique. Quelle voix projeter ?**
   a) le soprano, c'est la voix supérieure · b) **l'alto : c'est lui qui conduit** ✓ · c) la basse, toujours · d) toutes également
   *La ligne directrice n'est pas toujours en haut : on projette la voix qui bouge et signifie.*

6. **Pédale de dominante à la fin d'une section centrale, avant le retour du thème. Conséquence ?**
   a) détendre : l'harmonie est stable · b) **maintenir la tension : la pédale suspend la résolution jusqu'au retour** ✓ · c) respirer au milieu de la pédale · d) accélérer
   *La pédale de dominante est un suspens : la détente n'arrive qu'avec le retour de la tonique.*

7. **Sur un 6/4 de cadence, où se place le geste de détente ?**
   a) sur le 6/4 lui-même · b) **sur sa résolution 6/4 → V7 : l'appoggiature s'y résout** ✓ · c) après la tonique finale seulement · d) avant le 6/4
   *Le 6/4 est le sommet de tension (appoggiature de la dominante) ; le diminuendo se place sur sa résolution.*

8. **La note la plus aiguë de la phrase est-elle toujours son sommet expressif ?**
   a) oui, par définition · b) **non : le sommet de tension peut être harmonique et situé ailleurs** ✓ · c) oui, sauf en mineur · d) seulement dans les phrases de 8 mesures
   *Sommet mélodique et sommet harmonique peuvent se dissocier — la section 3 en donne un exemple.*

9. **Une phrase commence par une anacrouse (levée). On la joue…**
   a) accentuée : c'est la première note · b) **dirigée vers le temps fort suivant, sans accent** ✓ · c) détachée du reste · d) plus lente
   *La levée est un élan vers l'appui, pas un appui.*

10. **Dans une forme A–B–A′, où réserver en général le sommet dynamique ?**
    a) dès A, pour capter l'attention · b) **là où l'analyse situe la tension maximale — souvent la fin de B, quand la dominante prépare le retour** ✓ · c) toujours à la dernière mesure · d) au début de A′
    *La carte formelle décide : on garde en réserve ce que la forme dépense plus tard.*

### Exercices écrits

**Exercice 1 — Fiche sur description : sarabande baroque.** *Sarabande en Ré mineur, 3/4, 16 mesures ||: 8 :||: 8 :||, appui caractéristique sur le 2e temps. Mesures 1–4 : basse descendante Ré – Do – Si♭ – La (tétracorde de lamento), mélodie en valeurs longues. Demi-cadence sur La majeur m. 8. Seconde reprise : marche vers Fa majeur m. 9–12, retour de la basse descendante m. 13–14, hémiole m. 14–15, cadence parfaite en Ré mineur m. 16.* — Rédigez la fiche d'interprétation (5 rubriques, 3 décisions minimum).

> **Corrigé modèle.** Forme : binaire 8+8, plan tonal ré m. → La (DC m. 8) ; Fa (m. 9–12) → ré m. (CP m. 16). Squelette : tétracorde descendant m. 1–4 (et son retour m. 13–14) = colonne expressive de la pièce ; cadences m. 8 et 16 ; hémiole m. 14–15. Phrasé : 4+4 dans chaque reprise ; respirations après m. 4, 8, 12 et 16 ; l'hémiole se phrase par 2 temps et élargit vers la cadence finale. Voix : la **basse** conduit m. 1–4 et 13–14 (c'est elle qui « chante » le lamento) ; la mélodie reprend la main m. 5–8. **Décisions** : ① appui du 2e temps réalisé par durée (tenuto) plus que par accent — c'est une danse noble, pas une syncope ; ② projeter la basse descendante aux deux passages, mélodie en retrait ; ③ le retour du tétracorde m. 13 s'éclaire d'un *mezza voce* : même objet, second éclairage ; ④ hémiole m. 14–15 : élargissement, pas de respiration avant la résolution m. 16.

**Exercice 2 — Fiche sur description : romance classique.** *Romance en Sol majeur, 4/4, mélodie accompagnée, forme A–B–A′. A (m. 1–16) : période 8+8, antécédent vers demi-cadence m. 8, conséquent vers cadence parfaite m. 16. B (m. 17–28) : Mi mineur, dialogue mélodie/basse en imitation, crescendo de tension jusqu'à une pédale de Ré (dominante de Sol) m. 25–28. A′ (m. 29–44) : retour orné de A, mais l'arrivée de la cadence m. 36 est élidée avec le départ d'une extension de 8 mesures qui reconquiert la cadence m. 44.* — Rédigez la fiche.

> **Corrigé modèle.** Forme : A (16) – B (12) – A′ étendu (16) ; plan tonal Sol → mi m. → pédale de Ré → Sol. Squelette : cadences m. 8 (DC), 16 (CP), pédale m. 25–28, cadence élidée m. 36, CP conclusive m. 44. Phrasé : période classique en A (respirer m. 8 et 16) ; **ne pas respirer** m. 36 (élision) — c'est la respiration interdite de la pièce ; l'extension m. 36–44 est un seul grand geste `→` vers la vraie conclusion. Voix : mélodie en A ; en B, le dialogue impose d'alterner le premier plan entre mélodie et basse, phrase par phrase ; sur la pédale, tenir le Ré comme un fil sous le crescendo. **Décisions** : ① sommet de l'œuvre m. 27–28 (fin de pédale), pas dans A′ ; ② A′ orné se joue plus intime que A (retour éclairé), la réserve dynamique étant déjà dépensée ; ③ l'élision m. 36 s'enchaîne sans césure, quitte à respirer discrètement m. 34 ; ④ cadence finale m. 44 : tenuto d'arrivée puis vraie respiration — la seule conclusive de la pièce.

### Exercice final — votre répertoire dans l'analyseur

**Importez dans `/analyse-partition` une œuvre de VOTRE répertoire** (fichier `.xml`, `.musicxml` ou `.mxl` — exportable depuis MuseScore ou tout éditeur de partitions) et produisez sa fiche d'interprétation. L'analyseur grave la partition, la joue et propose degrés, fonctions et cadences ; `/squelette-harmonique` vous aide à réduire les passages chargés. **Confrontez l'analyse automatique à la vôtre** — l'outil propose, vous disposez. La fiche doit contenir :

- [ ] la **carte formelle** : sections, mesures, plan tonal, proportions ;
- [ ] le **squelette harmonique** : cadences encadrées, pédales, zones d'accélération du rythme harmonique ;
- [ ] le **plan de phrasé** : respirations `∨`, directions `→`, élisions et hémioles signalées ;
- [ ] la **hiérarchie des voix**, section par section ;
- [ ] **3 à 5 décisions d'interprétation**, chacune justifiée par un fait d'analyse précis (mesure à l'appui) ;
- [ ] une **vérification à l'instrument** : au moins une décision confirmée — ou révisée — par l'oreille (clause d'humilité).

C'est ce geste — la fiche sur sa propre pièce — que ce cours vous demande de refaire pour chaque œuvre que vous monterez désormais.
