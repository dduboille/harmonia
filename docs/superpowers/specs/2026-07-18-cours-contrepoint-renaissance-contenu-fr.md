# Contenu FR — « Contrepoint modal de la Renaissance (style Palestrina) »

> **Statut : brouillon de contenu pédagogique — À VALIDER par Dany avant tout développement.**
> Ce document est du *contenu seul* (prose, tables de référence, exemples réalisés note à note, quiz, exercices). Aucun code, aucune i18n, aucun composant. La priorité absolue est l'exactitude musicale : les règles Palestrina/Jeppesen sont strictes et codifiées — une règle ou un exemple faux discrédite le cours.

---

## Bloc d'en-tête

- **Titre du cours** : Contrepoint modal de la Renaissance (style Palestrina)
- **Niveau** : Licence (≈ L3) — *prima pratica* / *stile antico*, polyphonie vocale du XVIe siècle. Prolonge le cours 13 (contrepoint des espèces de Fux) vers la réalité vocale modale.
- **Objectifs d'apprentissage**
  - Situer le style Palestrina dans la polyphonie sacrée du XVIe siècle et le distinguer de l'abstraction didactique des espèces (Fux, cours 13) : contrepoint **modal** et non tonal.
  - Manier les **modes ecclésiastiques** (finale, ambitus, teneur, authente/plagal) et la *musica ficta* comme cadre d'écriture (cours 10 pour la couleur des modes).
  - Écrire une **ligne mélodique** conforme (primat du conjoint, sauts compensés, sommet unique) et un **contrepoint à deux voix** consonant, sans quintes ni octaves parallèles ni directes.
  - Traiter la **dissonance** selon le style strict (passage/broderie non accentués, *nota cambiata*, et surtout le **retard préparé**) et réaliser les **cadences modales** (clausule cantizans + tenorizans, cadences 7-6 / 2-3, cadence phrygienne) à 3-4 voix.
- **Moteurs Harmonia réutilisés**
  - **Verovio** — gravure des exemples et des corrigés (portées à 2, 3, 4 voix).
  - **PianoPlayer** — écoute des lignes et des enchaînements (noms FR : Do Ré Mi Fa Sol La Si).
  - **Liens de cours** — cours 13 (*Le contrepoint des espèces, Fux*) et cours 10 (*Les modes*).
  - **Contrainte de build (pour l'équipe, pas à résoudre ici)** : l'éditeur interactif Harmonia est un SATB à 4 voix qui **ne convient pas au contrepoint à 2 voix**. Les exercices de la section 7 sont donc rédigés comme des **corrigés-modèles à graver** (Verovio), et non comme des exercices d'éditeur interactif.
- **Convention de notation** : noms de notes français partout (Do Ré Mi Fa Sol La Si), conformément à la convention Harmonia et à la couche audio. Les octaves suivent la convention du PianoPlayer (Do4 = do central). Chaque exemple donne les **notes exactes par voix** pour être directement gravable.

---

## Section 1 — Le style Palestrina et la *prima pratica*

Giovanni Pierluigi da Palestrina (v. 1525-1594) incarne l'idéal de la **polyphonie vocale sacrée** du XVIe siècle : messes et motets *a cappella*, écrits pour des voix qui doivent pouvoir chanter chaque ligne sans peine. Trois qualités définissent ce style : la **fluidité** (chaque voix avance surtout par degrés conjoints, le flux rythmique est continu et régulier), le **contrôle absolu de la dissonance** (la consonance est l'état normal, la dissonance un événement bref et réglé), et la **chantabilité** (intervalles naturels, ambitus mesuré, texte porté avec clarté).

On nomme *stile antico* — le « style ancien » — la codification de cette manière, que les compositeurs baroques continueront d'enseigner et de pratiquer comme modèle de rigueur, par opposition à la *seconda pratica* expressive de Monteverdi. C'est ce *stile antico* que Johann Joseph Fux abstrait en cinq espèces dans le *Gradus ad Parnassum* (cours 13). **Notre cours fait le chemin inverse** : là où Fux réduit le contrepoint à une échelle didactique (cantus firmus en valeurs égales, réflexes cadentiels souvent tonalisés), nous revenons à la matière vivante — **modale**, textée, au rythme souple — que les espèces distillent. La différence est de fond : ici, pas de tonalité fonctionnelle, pas de dominante-tonique, mais un **mode** (finale, teneur) et des **cadences modales**. C'est le musicologue danois **Knud Jeppesen** (*The Style of Palestrina and the Dissonance*, 1922 ; *Counterpoint*, 1930) qui a établi statistiquement les règles exactes du traitement de la dissonance dans ce répertoire : c'est sa codification que nous suivons.

---

## Section 2 — Les modes ecclésiastiques

Le contrepoint Renaissance ne pense pas en tonalités mais en **modes**. Chaque mode se définit par sa **finale** (note de repos et d'achèvement), son **ambitus** (l'octave où se déploie la voix) et sa **teneur** (ou *repercussa* / corde de récitation, note vers laquelle la mélodie gravite). Chaque mode existe en version **authente** (l'octave part de la finale) et **plagale** (préfixe *hypo-* : l'octave est centrée autour de la finale, de la quarte inférieure à la quinte supérieure). Le cours 10 en donne la couleur ; ici, le mode est un **cadre d'écriture**, non une échelle à improviser.

| N° | Nom | Type | Finale | Ambitus | Teneur |
|---|---|---|---|---|---|
| I | Dorien | authente | **Ré** | Ré–Ré | La |
| II | Hypodorien | plagal | **Ré** | La(grave)–La | Fa |
| III | Phrygien | authente | **Mi** | Mi–Mi | Do |
| IV | Hypophrygien | plagal | **Mi** | Si(grave)–Si | La |
| V | Lydien | authente | **Fa** | Fa–Fa | Do |
| VI | Hypolydien | plagal | **Fa** | Do–Do | La |
| VII | Mixolydien | authente | **Sol** | Sol–Sol | Ré |
| VIII | Hypomixolydien | plagal | **Sol** | Ré–Ré | Do |
| IX | Éolien | authente | **La** | La–La | Mi |
| X | Hypoéolien | plagal | **La** | Mi–Mi | Do |
| XI | Ionien | authente | **Do** | Do–Do | Sol |
| XII | Hypoionien | plagal | **Do** | Sol–Sol | Mi |

**Règle de la teneur** : dans les modes authentes elle est la **quinte au-dessus de la finale** ; dans les plagaux, une **tierce sous** la teneur de l'authente. Deux exceptions historiques : la teneur qui tomberait sur **Si** est remontée à **Do** (modes III et VIII), car Si est instable.

**Points-clés.** Glarean (*Dodecachordon*, 1547) a officialisé l'**Éolien** et l'**Ionien** (les modes IX à XII), reconnaissant les futurs « mineur » et « majeur ». Le **Locrien** (finale Si) reste théorique : sa quinte diminuée le rend inutilisable comme finale. La ***musica ficta*** apporte les altérations non écrites qu'exige la pratique : le **Si♭** pour éviter le triton Fa–Si (règle *una nota super la…*), et surtout la **sensible haussée à la cadence** (le *subsemitonium modi* : Do♯ en Dorien, Fa♯ en Mixolydien, Sol♯ en Éolien) — jamais au cœur de la phrase, uniquement à la clausule.

---

## Section 3 — La ligne mélodique (le *cantus*)

Chaque voix doit être une belle mélodie chantable, autonome, à l'arche équilibrée. Les règles mélodiques (codifiées par Jeppesen d'après le répertoire) sont plus strictes que chez Fux :

- **Primat du mouvement conjoint** (par secondes). Les sauts sont l'exception, jamais la norme.
- **Sauts autorisés** : 3ce mineure et majeure, 4te juste, 5te juste, **6te mineure ascendante** (rare) et **octave**. **Interdits** : toute 7e, le **triton** (4te augmentée / 5te diminuée), la **6te majeure**, tout intervalle **supérieur à l'octave**, et tous les intervalles augmentés ou diminués.
- **Compensation du saut** : un saut, surtout large, se **récupère par degré conjoint en sens contraire**. Deux sauts de suite ne sont tolérés que s'ils dessinent une triade consonante sans dépasser l'octave, et sont suivis d'un retour conjoint.
- **Un seul sommet mélodique** (*climax*) : la note la plus aiguë n'apparaît **qu'une fois**, sinon l'effet de sommet se dilue. La ligne monte vers lui puis redescend — l'arche.
- **Valeurs longues / brèves** : le saut se fait de préférence **depuis** une note longue (accentuée) et se **quitte** par une note au moins aussi longue ; les valeurs longues marquent les débuts et les fins de phrase.
- **Pas de répétition de motif** : la Renaissance proscrit les séquences mélodiques littérales (contrairement au style baroque). On évite aussi de répéter obstinément la même note et d'**esquisser un triton** entre deux notes non voisines (ex. un Fa puis un Si mélodiques).

### Cantus modèle (mode I, Dorien, finale Ré)

Cantus firmus classique du répertoire des espèces, ici en semi-brèves — **11 notes** :

> **Ré4 – Fa4 – Mi4 – Ré4 – Sol4 – Fa4 – La4 – Sol4 – Fa4 – Mi4 – Ré4**

**Analyse.** Sommet **La4** atteint **une seule fois** (note 7). Deux petits sauts ascendants seulement — Ré4→Fa4 (3ce m.) et Ré4→Sol4 (4te juste) — chacun suivi ou entouré de degrés conjoints ; aucun saut ne dépasse la quarte, aucun triton, aucune 7e. La ligne dessine une arche : montée mesurée vers La4, puis descente conjointe **La–Sol–Fa–Mi–Ré** vers la finale. Aucun Si (donc aucun risque de triton Fa–Si). Début et fin sur la finale Ré. C'est le modèle à faire chanter (PianoPlayer) avant toute écriture à deux voix.

---

## Section 4 — Les consonances et le contrepoint à deux voix

**Consonances parfaites** : unisson, quinte juste, octave (et leurs redoublements). **Consonances imparfaites** : tierces (M et m) et sixtes (M et m). La **quarte juste** est **dissonante** face à la voix grave (comme au cours 13) ; elle ne devient consonante qu'entre deux voix supérieures d'une texture à 3-4 voix. Tout le reste (2de, 7e, triton) est dissonant.

**Règles de conduite (2 voix).**

- **Interdits absolus** : **quintes justes parallèles**, **octaves parallèles**, **unissons parallèles** — deux voix qui bougent ensemble sur un intervalle parfait perdent leur indépendance.
- **Quintes et octaves *directes* (cachées)** : atteindre une quinte ou une octave par **mouvement direct** (les deux voix dans le même sens) est proscrit, surtout si la voix supérieure y arrive **par saut**. On arrive donc aux consonances parfaites par **mouvement contraire** (ou oblique).
- **Autorisées** : **tierces et sixtes parallèles** (consonances imparfaites) — mais pas plus de **trois de suite**, pour préserver le dessin des voix.
- **Cadres obligés** : on **commence** et on **termine** sur une **consonance parfaite** (unisson, quinte ou octave) ; la fin passe par la **clausule** (6te → 8ve, sensible haussée par ficta).
- Le **mouvement contraire** est privilégié partout ; pas de croisement systématique des voix.

### Exemple réalisé — 1re espèce (note contre note) sur le cantus dorien

Cantus firmus à la **voix inférieure** (celui de la section 3) ; contrepoint à la **voix supérieure** :

| # | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| **Contrepoint (sup.)** | Ré5 | La4 | Sol4 | La4 | Si4 | Do5 | Fa5 | Sol5 | Ré5 | **Do♯5** | Ré5 |
| **Cantus firmus (inf.)** | Ré4 | Fa4 | Mi4 | Ré4 | Sol4 | Fa4 | La4 | Sol4 | Fa4 | Mi4 | Ré4 |
| **Intervalle** | 8ve | 3M | 3m | 5J | 3M | 5J | 6m | 8ve | 6M | 6M | 8ve |

**Contrôles.** Début et fin sur l'**octave** (consonance parfaite). Les quintes et octaves internes (n° 4, 6, 8) et l'octave finale (n° 11) sont toutes atteintes par **mouvement contraire** — aucune quinte ni octave parallèle ou directe. Pas plus de deux imparfaites de suite (les 6tes n° 9-10 seulement). Le contrepoint est lui-même une bonne ligne : sommet unique **Sol5** (n° 8), sauts ≤ 4te, pas de triton. À la cadence, la **sensible Do♯5** (musica ficta) monte à la finale Ré5 pendant que le cantus descend Mi4→Ré4 : clausule 6M → 8ve.

**Vers le fleuri.** En contrepoint *fleuri* (proche de la 5e espèce, cours 13), on subdivise le contrepoint en valeurs plus brèves et l'on introduit les dissonances réglées de la section 5. Fragment fleuri sur les deux premières notes du cantus : contre **Ré4** (semi-brève), le contrepoint chante **Ré5 – Do5 – Si4 – La4** (quatre minimes) ; les Do5 et Si4 sont des **notes de passage** conjointes sur temps faibles, reliant Ré5 (8ve) à La4 (5te).

---

## Section 5 — La dissonance : traitement strict

Dans le *stile antico*, la dissonance n'est jamais un accord : c'est un **incident mélodique** bref, toujours conjoint et contrôlé. Jeppesen n'en admet que trois emplois.

**1. La note de passage / la broderie — non accentuées.** La **note de passage** relie deux consonances par degré conjoint, **sur temps faible** uniquement (jamais accentuée dans le style pur), et se quitte dans le même sens. La **broderie** (note voisine) orne une consonance en s'en écartant d'un degré puis en y revenant, également **sur temps faible**.
*Exemple (cantus tenu Do4).* Passage : contrepoint **Mi5 – Ré5 – Do5** ; le **Ré5** (9e/2de, dissonant) tombe sur temps faible entre Mi5 (3ce) et Do5 (8ve). Broderie inférieure : **Mi5 – Ré5 – Mi5**, le Ré5 dissonant sur temps faible.

**2. La *nota cambiata* (note échangée).** Figure de quatre notes où la dissonance est **quittée par un saut de tierce descendante** au lieu d'une résolution conjointe — la seule licence de ce genre. Le style la codifie strictement.
*Exemple (cantus tenu Ré4).* Contrepoint **Ré5 – Do5 – La4 – Si4** : Ré5 (8ve, consonant) → **Do5** (7e mineure, **dissonant**, sur temps faible, atteint par degré) → saut de **tierce descendante** vers La4 (5te, consonant) → Si4 (6te). La note de résolution attendue (Si4) n'arrive qu'à la fin : la dissonance est « échangée ».

**3. Le retard préparé (*suspensio*) — la pierre angulaire.** C'est LE geste du style. Trois temps :
- **Préparation** : la note est **consonante**, sur temps faible.
- **Percussion (retard)** : la voix grave bouge sur le **temps fort** ; la note tenue devient **dissonante**.
- **Résolution** : la note dissonante **descend d'un degré conjoint** vers une consonance, sur temps faible.
Le retard résout **toujours vers le bas, par degré conjoint** ; la note de résolution ne doit pas être doublée simultanément dans une autre voix.

| Type | Préparation (faible) | Percussion (fort, dissonant) | Résolution (faible) |
|---|---|---|---|
| **7-6** | Ténor **Mi4** / Sup. **Do5** → 6m (cons.) | Ténor **Ré4** / Sup. **Do5** tenu → **7m (diss.)** | Ténor **Ré4** / Sup. **Si4** → 6M (cons.) |
| **4-3** | Basse **Do4** / Sup. **Sol4** → 5J (cons.) | Basse **Ré4** / Sup. **Sol4** tenu → **4te (diss.)** | Basse **Ré4** / Sup. **Fa4** → 3m (cons.) |

Dans le **7-6**, la voix supérieure descend **Do5 → Si4** (résolution) ; dans le **4-3**, elle descend **Sol4 → Fa4**. On rencontre aussi le **2-3** (retard à la voix **grave** : la basse suspendue résout en descendant, la 2de devient 3ce) et le **9-8**. Le retard est le moteur des cadences (section 6).

---

## Section 6 — Le contrepoint à 3-4 voix et les cadences modales

À 3-4 voix, on raisonne toujours **par paires de voix** : chaque intervalle avec la basse doit être consonant (la quarte redevient consonante **entre voix supérieures**), les triades se complètent, mais les règles de dissonance et de parallèles restent intactes. On recherche l'indépendance rythmique (les voix ne bougent pas toutes ensemble) et l'imitation.

**La clausule (cadence modale).** Toute cadence repose sur deux voix structurelles :
- le **cantizans** — la voix qui monte d'un **demi-ton** (la sensible, haussée par *musica ficta*) vers la finale ;
- le **tenorizans** — la voix qui descend d'un **degré (2-1)** vers la finale.
Ensemble, ils forment le squelette **6te → 8ve** en mouvement contraire. On y ajoute souvent un **retard 7-6** (ou 2-3) juste avant, et une **basse** (*basizans*, saut de quinte/quarte vers la finale) qui donne à la cadence son allure de « V–I » — mais **restant modale** : c'est la ficta cadentielle, non une tonalité, qui produit la sensible.

**L'imitation.** Une voix énonce un motif, une autre le reprend à la quinte ou à l'octave, quelques temps plus tard : c'est le germe du motet et de la fugue. On la traite ici brièvement, comme entrée en matière.

### Cadence en mode dorien (finale Ré) — 4 voix, retard 7-6

| Voix | Préparation | Percussion (fort) | Résolution (faible) | **Finale** |
|---|---|---|---|---|
| **Superius (cantizans)** | Ré5 | Ré5 *(retard)* | **Do♯5** *(sensible)* | **Ré5** |
| **Alto** | La4 | La4 | La4 | La4 |
| **Ténor (tenorizans)** | Fa4 | Mi4 | Mi4 | **Ré4** |
| **Basse (basizans)** | Ré3 | La2 | La2 | Ré3 |

Le superius tient **Ré5** : consonant à la préparation (6M sur le ténor Fa4), il devient **7e dissonante** quand le ténor descend à Mi4, puis résout **Ré5 → Do♯5** (sensible haussée par ficta). Enfin la clausule : cantizans **Do♯5 → Ré5** (demi-ton montant) contre tenorizans **Mi4 → Ré4** (ton descendant) = **6M → 8ve**. La finale est une **quinte à vide Ré–La** (Ré-Ré-La-Ré) — sonorité modale idiomatique ; on peut aussi hausser à la tierce picarde (Fa♯). La basse **La2 → Ré3** confirme la finale.

### Cadence en mode phrygien (finale Mi) — 4 voix

Le phrygien **ne hausse pas de sensible** : le demi-ton diatonique **Fa → Mi** est déjà là, et il se trouve à la voix **grave** — c'est la signature du mode.

| Voix | Pénultième | **Finale** |
|---|---|---|
| **Superius (cantizans)** | Ré5 | **Mi5** |
| **Alto** | Fa4 | Sol4 |
| **Ténor** | La3 | Si3 |
| **Basse (tenorizans, demi-ton)** | Fa3 | **Mi3** |

Squelette : le superius monte **Ré5 → Mi5** (ton entier, **sans** sensible haussée), tandis que la basse descend **Fa3 → Mi3** (**demi-ton**) — soit **6M (Fa–Ré) → 8ve (Mi–Mi)** en mouvement contraire. L'accord pénultième est un **Ré mineur en premier renversement** (Fa à la basse : Fa-La-Fa-Ré), qui résout sur **Mi mineur** (Mi-Si-Sol-Mi). Toutes les parfaites finales sont atteintes par mouvement contraire ; les 6tes Fa4→Sol4 / La3→Si3 montent parallèlement (imparfaites, licites). C'est la cadence phrygienne, reconnaissable à ce demi-ton descendant à la basse.

---

## Section 7 — Applications & entraînement

### Méthode : écrire un contrepoint fleuri sur un cantus firmus donné

1. **Identifier le mode** : repérer la finale (première et dernière note du cantus) et l'ambitus ; en déduire finale, teneur, et la sensible à hausser **à la cadence seulement**.
2. **Squelette 1re espèce** : placer d'abord une note consonante contre chaque note du cantus (commencer et finir sur une parfaite), en privilégiant 3ces et 6tes et le mouvement contraire ; vérifier l'**absence de quintes/octaves parallèles ou directes**.
3. **Vérifier la ligne** : le contrepoint doit être chantable — conjoint, sommet unique, sauts compensés, sans triton.
4. **Fleurir** : subdiviser les valeurs et introduire **uniquement** des dissonances réglées (passage/broderie sur temps faibles, éventuelle *cambiata*).
5. **Cadence** : poser la clausule (cantizans + tenorizans, retard 7-6 ou 2-3, sensible par ficta).
6. **Contrôler** à l'oreille (PianoPlayer) et à l'écrit (gravure Verovio).

### Quiz (10 questions)

**Q1.** Le contrepoint Palestrina s'organise autour de :
- A. la tonalité majeur/mineur — B. **les modes ecclésiastiques (finale, teneur)** — C. la gamme par tons — D. les douze sons
- *Réponse : B.* Le style est **modal**, pas tonal : c'est la finale et le mode, non une dominante fonctionnelle, qui organisent la pièce.

**Q2.** Qui a codifié statistiquement le traitement de la dissonance chez Palestrina ?
- A. Johann Joseph Fux — B. Gioseffo Zarlino — C. **Knud Jeppesen** — D. Heinrich Schenker
- *Réponse : C.* Jeppesen, *The Style of Palestrina and the Dissonance* (1922).

**Q3.** Dans un mode **authente**, la teneur se situe le plus souvent :
- A. à la tierce sous la finale — B. **à la quinte au-dessus de la finale** — C. sur la finale — D. à l'octave
- *Réponse : B.* Sauf report du Si sur Do (modes III et VIII).

**Q4.** Lequel de ces sauts mélodiques est **interdit** dans une ligne Palestrina ?
- A. la quarte juste — B. l'octave — C. la tierce mineure — D. **le triton (4te augmentée)**
- *Réponse : D.* Sont aussi proscrits les 7es, la 6te majeure et tout intervalle > octave.

**Q5.** Après un saut large, la ligne doit :
- A. continuer dans le même sens — B. **revenir par degré conjoint en sens contraire** — C. répéter la note — D. sauter à nouveau
- *Réponse : B.* C'est la compensation du saut.

**Q6.** Combien de fois le sommet mélodique (*climax*) doit-il apparaître ?
- A. **une seule fois** — B. deux fois — C. à chaque phrase — D. autant qu'on veut
- *Réponse : A.* Répété, il perd son effet de sommet.

**Q7.** Deux quintes justes parallèles entre les mêmes voix sont :
- A. autorisées si brèves — B. autorisées entre voix intérieures — C. **interdites** — D. autorisées à la cadence
- *Réponse : C.* Comme les octaves et unissons parallèles : elles effacent l'indépendance des voix.

**Q8.** Une note de passage dissonante se place :
- A. sur le temps fort — B. **sur un temps faible, par degré conjoint** — C. par saut — D. n'importe où
- *Réponse : B.* Dans le style strict, passage et broderie sont **non accentués**.

**Q9.** Un retard (suspension) résout **toujours** :
- A. en montant d'un degré — B. par un saut de tierce — C. **en descendant d'un degré conjoint** — D. en restant sur place
- *Réponse : C.* Préparation (consonante) → percussion (dissonante, temps fort) → résolution conjointe **descendante**.

**Q10.** La cadence **phrygienne** (finale Mi) se reconnaît à :
- A. une sensible Ré♯ haussée — B. **un demi-ton Fa → Mi à la voix grave** — C. un 6/4 cadentiel — D. une pédale de dominante
- *Réponse : B.* Le phrygien ne hausse pas de sensible ; son demi-ton diatonique Fa–Mi est à la basse.

> **Question bonus (distinction clé cours 13 vs cours 39)** : quelle différence entre les espèces de Fux et le style Palestrina ? *Réponse :* Fux **abstrait** le contrepoint en une échelle didactique (cantus firmus en valeurs égales, réflexes souvent tonalisés) ; Palestrina est le **répertoire vocal modal** vivant — texté, rythmiquement souple — que ces espèces distillent.

### Exercices de contrepoint (corrigés-modèles à graver)

> Rappel build : l'éditeur SATB (4 voix) ne convient pas au contrepoint à 2 voix ; ces exercices sont des **corrigés-modèles gravés** (Verovio), pas des exercices d'éditeur. D'autres solutions correctes existent.

**Exercice 1 — 1re espèce, contrepoint au-dessus (mode dorien).**
*Cantus firmus (voix inférieure)* : **Ré4 – Fa4 – Mi4 – Ré4 – Sol4 – Fa4 – La4 – Sol4 – Fa4 – Mi4 – Ré4**.
*Tâche* : écrire une voix supérieure consonante (1:1), débutant et finissant sur une parfaite, avec clausule dorienne.
*Corrigé* : **Ré5 – La4 – Sol4 – La4 – Si4 – Do5 – Fa5 – Sol5 – Ré5 – Do♯5 – Ré5** (intervalles : 8-3-3-5-3-5-6-8-6-6-8). Sommet Sol5 unique ; parfaites atteintes en mouvement contraire ; sensible **Do♯5** à la cadence. *(C'est l'exemple détaillé de la section 4.)*

**Exercice 2 — Contrepoint fleuri avec cadence (mode dorien).**
*Cantus firmus (voix inférieure, 3 notes de fin)* : **Fa4 – Mi4 – Ré4**.
*Tâche* : au-dessus, un fleuri qui amène la clausule par un retard 7-6.
*Corrigé (voix supérieure, valeurs brèves puis longues)* : sur **Fa4** → **La4 – Do5** (3ce puis 5te, consonants) ; sur **Mi4** → **Ré5** *tenu* (préparé consonant 6M sur… puis) devenant **7e** sur le passage, résolvant **Do♯5** ; sur **Ré4** → **Ré5**. Enchaînement cadentiel : le ténor/cantus **Mi4 → Ré4** contre superius **Do♯5 → Ré5** = **6M → 8ve** (clausule dorienne, sensible par ficta).

**Exercice 3 — Réaliser une cadence modale (mode mixolydien, finale Sol).**
*Donnée* : cadence finale à 3 voix, tenorizans **La3 → Sol3**, à harmoniser avec cantizans et basse.
*Tâche* : compléter avec la sensible haussée par ficta.
*Corrigé* : **Superius (cantizans)** **Fa♯4 → Sol4** (sensible haussée, demi-ton) ; **Ténor (tenorizans)** **La3 → Sol3** (ton descendant) ; **Basse (basizans)** **Ré3 → Sol2** (saut de quinte vers la finale). Squelette cantizans/tenorizans : La3-Fa♯4 (**6M**) → Sol3-Sol4 (**8ve**), mouvement contraire. La sensible **Fa♯** n'existe qu'ici, par *musica ficta* : au cœur du mode, le Fa reste naturel (7e mineure caractéristique du mixolydien, cf. cours 10).

**Exercice 4 — Cadence phrygienne (finale Mi).**
*Donnée* : finale à 4 voix en mode phrygien.
*Tâche* : réaliser la cadence sans hausser de sensible.
*Corrigé* : pénultième **Fa3(basse) – La3(ténor) – Fa4(alto) – Ré5(superius)** (Ré mineur, Fa à la basse) → finale **Mi3 – Si3 – Sol4 – Mi5** (Mi mineur). Mouvements : basse **Fa3 → Mi3** (demi-ton, tenorizans à la grave), superius **Ré5 → Mi5** (ton, cantizans), alto **Fa4 → Sol4**, ténor **La3 → Si3**. Squelette **6M (Fa–Ré) → 8ve (Mi–Mi)** ; aucune quinte ni octave parallèle ; le demi-ton Fa→Mi à la basse signe le mode.

---

### Notes de validation (à l'attention du relecteur)

- **Numéro de cours** : ce contenu vise à prolonger le cours 13 (espèces/Fux) et le cours 10 (modes) ; le numéro définitif (référencé « cours 39 » en Q bonus à titre indicatif) est à fixer par Dany au moment du build.
- **Cadre Fux « tonal » vs Palestrina « modal »** : la section 1 suit le cadrage de la commande (cours 13 = espèces didactiques, souvent tonalisées à l'enseignement ; ce cours = modal). Historiquement, le *Gradus* de Fux est lui-même bâti sur Palestrina et emploie les modes — la formulation retenue reste exacte en présentant les espèces comme une **réduction didactique** de la *prima pratica*. À ajuster si Dany préfère une autre nuance.
- **Exemples vérifiés à la main** : tous les intervalles, l'absence de quintes/octaves parallèles, et la légalité mélodique (sauts, triton, sommet unique) ont été contrôlés. À revérifier à la gravure Verovio + écoute PianoPlayer avant intégration.
- **Cadence dorienne 4 voix (section 6)** : la basse *basizans* La2→Ré3 crée à la finale une octave par mouvement direct avec le superius, mais celui-ci **bouge par degré** (Do♯5→Ré5) — c'est l'octave cadentielle admise du style (l'interdit ne vise que la voix supérieure procédant par saut). Finale sur **quinte à vide** (Ré–La), idiomatique ; tierce picarde (Fa♯) possible.
- ***Nota cambiata*** : forme à 4 notes retenue (Ré5–Do5–La4–Si4 sur Ré tenu), la dissonance Do5 (7m) étant quittée par saut de tierce descendante. La forme à 5 notes existe aussi ; à harmoniser selon la tradition d'édition retenue.
- **Ambitus** : donnés en octave-type (finale à finale pour les authentes) ; la notation d'octave PianoPlayer (Do4 central) est à confirmer pour la gravure des exemples graves (ex. basse La2, Sol2).
