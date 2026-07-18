// Cours 44 — Analyse post-tonale : la théorie des ensembles (set theory) (Niveau 5, ≈ M1)
// Contenu pédagogique locale-clé : le FR fait foi (transcrit de la spec validée
// 2026-07-18-cours-set-theory-contenu-fr.md — AUCUN nombre, forme normale, forme
// première, vecteur ni nom de Forte modifié). Les cinq autres langues traduisent
// la prose avec le vocabulaire post-tonal correct (pitch class / Tonhöhenklasse /
// clase de altura / classe di altezze / classe de altura ; normal form / Normalform ;
// interval-class vector / Intervallvektor ; la relation Z reste « Z » partout).
// Les DONNÉES CHIFFRÉES invariantes (tables pc, rotations, transformations,
// P0/I0/R0, formes premières, vecteurs) vivent dans Cours44.tsx : elles sont
// identiques dans les six langues par construction.
// CONVENTION : les noms de notes restent en solfège FRANÇAIS partout
// (Do Ré Mi Fa Sol La Si) — exigence de la couche audio Harmonia.
// Verrou arithmétique : chaque valeur imprimée ici est reproduite par
// lib/pcset.ts et vérifiée par lib/pcset.test.ts.

export interface Question {
  q: string;
  opts: string[];
  a: number;
  fb: string;
}

/** Un exercice écrit (le corrigé complet est du texte, calculs inclus). */
export interface Exercice {
  titre: string;
  consigne: string;
  controle: string;
}

export interface Cours44Locale {
  // ── Maître (MaitreCard) ──
  maitreConcept: string;
  maitreAnecdote: string;
  maitreLesson: string;

  // ── Section 1 — Pourquoi une nouvelle théorie ? ──
  introH2: string;
  introP1: string;
  introP2: string;
  introBox: string;

  // ── Section 2 — Classes de hauteurs et classes d'intervalles ──
  pcsH2: string;
  hauteurH3: string;
  hauteurP1: string;
  hauteurEquiv: string[];
  hauteurP2: string;
  pcTableCaption: string;
  pcLabel: string;
  noteLabel: string;
  modP: string;
  intervH3: string;
  intervP1: string;
  icFormule: string;
  icTableCaption: string;
  icHeaders: string[];
  icTonal: string[]; // 7 libellés de la colonne « intervalles tonals »
  icExemple: string;

  // ── Section 3 — Les ensembles de classes de hauteurs ──
  ensH2: string;
  defH3: string;
  defP: string;
  opsH3: string;
  opsP: string;
  opsList: string[];
  exTravIntro: string;
  opsTableCaption: string;
  opsHeaders: string[];
  ensP2: string;
  ensEcoute: string;

  // ── Section 4 — Forme normale et forme première ──
  formesH2: string;
  formesP1: string;
  fnH3: string;
  fnSteps: string[];
  fnNote: string;
  rotHeaders: string[]; // ["Rotation", "Étendue"]
  exATitle: string;
  exAText: string;
  exBTitle: string;
  exBIntro: string;
  exBResult: string;
  exCTitle: string;
  exCIntro: string;
  exCResult: string;
  fpH3: string;
  fpSteps: string[];
  exA2Title: string;
  exA2Text: string;
  exB2Title: string;
  exB2Text: string;
  exC2Title: string;
  exC2Text: string;
  reflexBox: string;

  // ── Section 5 — Vecteur d'intervalles et nombres de Forte ──
  vecH2: string;
  vecP1: string;
  vecCalcs: string[]; // 3 calculs complets
  forteH3: string;
  forteP: string;
  zH3: string;
  zP1: string;
  zList: string[]; // 4-Z15, 4-Z29
  zP2: string;
  famousH3: string;
  famousCaption: string;
  famousHeaders: string[]; // 4
  famousIdentites: string[]; // 14 — colonne « Identité » (l'ordre suit FAMOUS_SETS)
  famousP2: string;

  // ── Section 6 — Application analytique et sérialisme ──
  analyseH2: string;
  segH3: string;
  segP1: string;
  segIntro: string;
  segHeaders: string[]; // 5
  segLabels: string[]; // 4 libellés de segments
  segP2: string;
  serieH3: string;
  serieP1: string;
  serieFormes: string[]; // P, I, R, RI
  serieP2: string;
  webernIntro: string;
  webernI0P: string;
  webernControle: string;
  webernSym: string;

  // ── Section 7 — Applications & entraînement ──
  entrainH2: string;
  methodeH3: string;
  methodeSteps: string[];
  calcTitle: string;
  calcHelp: string;
  calcNormalLabel: string;
  calcPrimeLabel: string;
  calcVectorLabel: string;
  calcEmpty: string;
  exercicesH3: string;
  exercices: Exercice[];
  voirCorrige: string;
  masquerCorrige: string;
  corrigeLabel: string;
  quizH3: string;
  questions: Question[];

  // ── UI partagée ──
  listenBtn: string;
}

// ════════════════════════════════════════════════════════════════════════════
// FR — fait foi (transcription de la spec validée)
// ════════════════════════════════════════════════════════════════════════════

const fr: Cours44Locale = {
  maitreConcept: "Les ensembles de classes de hauteurs — la lingua franca de l'analyse post-tonale",
  maitreAnecdote:
    "À partir des travaux de Milton Babbitt (qui forge les notions de pitch class et de classe d'intervalles), Allen Forte (1926-2014) systématise dans The Structure of Atonal Music (1973) une théorie des ensembles de classes de hauteurs : au lieu d'accords et de degrés, des ensembles de notes considérés à l'octave et à l'enharmonie près, comparables par transposition et inversion, catalogués et nommés — les « nombres de Forte ». Le manuel de référence en est l'Introduction to Post-Tonal Theory de Joseph N. Straus, dont ce cours suit les conventions.",
  maitreLesson:
    "La théorie des ensembles est un outil d'analyse, pas une méthode de composition ; elle ne remplace pas l'oreille, elle lui donne un vocabulaire exact. Et elle ne « détrône » pas Schenker : chacun règne sur son répertoire.",

  introH2: "Pourquoi une nouvelle théorie ?",
  introP1:
    "Vers 1908-1909 — le finale du Deuxième Quatuor, les <em>Lieder</em> du <em>Livre des jardins suspendus</em>, puis les Trois Pièces op. 11 de Schoenberg —, une musique apparaît qui ne repose plus sur une tonique. C'est l'<strong>atonalité libre</strong> : plus de hiérarchie de degrés, plus de dissonance <em>par rapport à</em> une consonance de référence (Schoenberg parle d'« émancipation de la dissonance »), plus de cadences qui articulent la forme. Nos outils tonaux deviennent alors muets : chiffrer un accord suppose une fondamentale et une tierce empilée qu'il n'a souvent plus ; parler de « degré » suppose une gamme de référence ; et la réduction schenkérienne (cours 27 et 37) suppose précisément ce que cette musique abolit — la prolongation d'une triade tonique par des mouvements linéaires consonants. Schenker lui-même réservait explicitement sa théorie au répertoire tonal : pour Webern ou le Schoenberg atonal, il faut autre chose.",
  introP2:
    "Ce vide conceptuel n'a été comblé que tardivement. À partir des travaux de Milton Babbitt (qui forge les notions de <em>pitch class</em> et de classe d'intervalles), <strong>Allen Forte</strong> systématise dans <strong><em>The Structure of Atonal Music</em> (1973)</strong> une théorie des <strong>ensembles de classes de hauteurs</strong> (<em>pitch-class set theory</em>) : au lieu d'accords et de degrés, des <em>ensembles</em> de notes considérés à l'octave et à l'enharmonie près, comparables entre eux par transposition et inversion, catalogués et nommés. L'idée-force : dans l'atonalité libre, la cohérence ne vient plus de la syntaxe tonale mais de la <strong>récurrence de petites collections d'intervalles</strong> — des cellules que le compositeur transpose, renverse, superpose. La théorie des ensembles est aujourd'hui la <em>lingua franca</em> de l'analyse post-tonale ; le manuel de référence en est l'<em>Introduction to Post-Tonal Theory</em> de Joseph N. Straus, dont ce cours suit les conventions.",
  introBox:
    "<strong>À retenir</strong> : la théorie des ensembles est un outil d'<strong>analyse</strong>, pas une méthode de composition ; elle ne remplace pas l'oreille, elle lui donne un vocabulaire exact. Et elle ne « détrône » pas Schenker : chacun règne sur son répertoire. Repères dans le cursus : cours 27 et 37 (Schenker, analyse motivique) — l'outil de référence <strong>pour la musique tonale</strong>, dont ce cours prend le relais hors tonalité ; cours 30, 31 et 36 (harmonie impressionniste, polytonalité et harmonie quartale, Debussy/Ravel) — le répertoire-charnière dont les collections reçoivent ici leurs noms génériques.",

  pcsH2: "Classes de hauteurs et classes d'intervalles",
  hauteurH3: "Hauteur vs classe de hauteurs",
  hauteurP1:
    "Une <strong>hauteur</strong> (<em>pitch</em>) est un son précis dans un registre précis : Do4 (le do central du PianoPlayer) n'est pas Do5. Une <strong>classe de hauteurs</strong> (<em>pitch class</em>, « pc ») est ce qui reste quand on décide de deux équivalences :",
  hauteurEquiv: [
    "<strong>équivalence d'octave</strong> : Do1, Do4, Do7 appartiennent à la même classe « Do » ;",
    "<strong>équivalence enharmonique</strong> : Do♯ et Ré♭ sont la même classe (le tempérament égal les confond ; l'atonalité renonce à la distinction fonctionnelle que la tonalité leur donnait).",
  ],
  hauteurP2:
    "Il existe donc exactement <strong>12 classes de hauteurs</strong>, numérotées de 0 à 11 avec la convention « do fixe » <strong>Do = 0</strong> :",
  pcTableCaption: "Les 12 classes de hauteurs (convention « do fixe », Do = 0)",
  pcLabel: "pc",
  noteLabel: "Note",
  modP:
    "L'arithmétique est <strong>modulo 12</strong>, comme sur un cadran d'horloge : monter de 2 depuis Si (11) donne Do♯ (11 + 2 = 13 ≡ 1).",
  intervH3: "Intervalles ordonnés, non ordonnés, classes d'intervalles",
  intervP1:
    "Entre <strong>hauteurs</strong>, l'<strong>intervalle ordonné</strong> compte les demi-tons avec leur direction : de Do4 à Si3, −1 ; de Do4 à Si4, +11. L'<strong>intervalle non ordonné</strong> en est la valeur absolue. Entre <strong>classes de hauteurs</strong>, l'intervalle ordonné de a vers b vaut b − a (mod 12) : de Si vers Do, 0 − 11 = 1 ; de Do vers Si, 11. Enfin, si l'on renonce aussi à la direction, on obtient la <strong>classe d'intervalles</strong> (<em>interval class</em>, « ic ») :",
  icFormule:
    "<strong>ic(i) = min(i, 12 − i)</strong> — un intervalle et son renversement appartiennent à la même classe.",
  icTableCaption: "Les 7 classes d'intervalles (ic 0 à ic 6)",
  icHeaders: ["ic", "Demi-tons (mod 12)", "Intervalles tonals correspondants"],
  icTonal: [
    "unisson, octave",
    "seconde mineure / septième majeure",
    "seconde majeure / septième mineure",
    "tierce mineure / sixte majeure",
    "tierce majeure / sixte mineure",
    "quarte juste / quinte juste",
    "triton (seul intervalle égal à son renversement)",
  ],
  icExemple:
    "<strong>Exemple</strong> : de Sol♯ (8) vers Ré (2), intervalle ordonné 2 − 8 = 6 → ic 6, triton. De Mi (4) vers Do (0), intervalle ordonné 8 → ic(8) = min(8, 4) = 4, la classe « tierce majeure / sixte mineure ».",

  ensH2: "Les ensembles de classes de hauteurs",
  defH3: "Définition",
  defP:
    "Un <strong>ensemble de classes de hauteurs</strong> (<em>pc set</em>) est une collection <strong>non ordonnée et sans répétition</strong> de classes de hauteurs. {Sol, Sol♯, Si} = {7, 8, 11} : peu importe l'ordre d'énonciation, le registre, le doublage. Le nombre d'éléments est la <strong>cardinalité</strong> : trichorde (3), tétracorde (4), pentacorde (5), hexacorde (6)…",
  opsH3: "Transposition Tn et inversion TnI",
  opsP: "Deux opérations engendrent les équivalences de la théorie :",
  opsList: [
    "<strong>Transposition Tn</strong> : ajouter n (mod 12) à chaque pc. Tn(x) = x + n.",
    "<strong>Inversion TnI</strong> : inverser autour de 0 (x ↦ −x, c'est-à-dire 12 − x), <strong>puis</strong> transposer de n. TnI(x) = n − x (mod 12).",
  ],
  exTravIntro:
    "<strong>Exemple travaillé</strong> — la cellule d'ouverture des Trois Pièces op. 11 n° 1 (1909) de Schoenberg, les trois premières notes de la mélodie : <strong>Si–Sol♯–Sol</strong>, soit l'ensemble <strong>{7, 8, 11}</strong>.",
  opsTableCaption: "Transformations de {7, 8, 11} (cellule de l'op. 11)",
  opsHeaders: ["Opération", "Calcul (sur {7, 8, 11})", "Résultat", "En notes"],
  ensP2:
    "Tous ces ensembles « sonnent apparentés » : mêmes intervalles internes (un demi-ton et une tierce majeure imbriqués), registre et ordre mis à part. La théorie déclare <strong>équivalents</strong> deux ensembles reliés par une transposition ou une inversion : ils appartiennent à la même <strong>classe d'ensembles</strong> (<em>set class</em>). C'est l'exacte généralisation d'un réflexe tonal : nous considérons déjà tous les accords parfaits majeurs comme « le même accord » à transposition près — et la tonalité considère même majeur et mineur (inversions l'un de l'autre) comme deux espèces d'un même objet, la triade.",
  ensEcoute:
    "Faites entendre {7, 8, 11} puis chaque transformation, plaquée puis arpégée — l'oreille reconnaît la parenté avant le calcul.",

  formesH2: "Forme normale et forme première",
  formesP1:
    "Pour comparer des ensembles, il faut une <strong>écriture canonique</strong>. Deux niveaux : la <em>forme normale</em> (l'ensemble lui-même, rangé au plus compact) et la <em>forme première</em> (le représentant de toute la classe d'équivalence, commençant par 0).",
  fnH3: "Forme normale : l'algorithme",
  fnSteps: [
    "Écrire les pcs en <strong>ordre croissant</strong> dans une octave, et former toutes les <strong>rotations</strong> (chaque pc devient tour à tour la première note, les précédentes passant à l'octave au-dessus, +12).",
    "Retenir la rotation dont l'<strong>intervalle extérieur</strong> (dernière − première) est le <strong>plus petit</strong> : l'ensemble le plus compact.",
    "En cas d'égalité, comparer l'intervalle de la première note à l'<strong>avant-dernière</strong>, puis à l'antépénultième, etc. : retenir le plus <strong>tassé à gauche</strong>.",
    "(Égalité parfaite — ensembles totalement symétriques comme {0,4,8} : commencer par le plus petit numéro.)",
  ],
  fnNote:
    "<em>Note de rigueur</em> : ce critère de départage « tassé à gauche » est celui de Rahn et de Straus, suivi par la quasi-totalité des outils actuels. Le critère originel de Forte (1973) diffère pour cinq classes seulement (5-20, 6-Z29, 6-31, 7-20, 8-26) — aucune n'apparaît dans ce cours.",
  rotHeaders: ["Rotation", "Étendue"],
  exATitle: "Exemple A — {Do, Do♯, Mi} = {0, 1, 4}",
  exAText:
    "Rotations : (0,1,4) → étendue 4 ; (1,4,12) → 11 ; (4,12,13) → 9. La plus compacte : <strong>forme normale [0,1,4]</strong>.",
  exBTitle: "Exemple B — {Sol, La, Do♯, Ré} = {7, 9, 1, 2}",
  exBIntro: "Ordre croissant : 1, 2, 7, 9.",
  exBResult: "<strong>Forme normale [7, 9, 1, 2]</strong> (Sol, La, Do♯, Ré).",
  exCTitle: "Exemple C — {Si, Do, Ré, Mi♭, Fa♯} = {11, 0, 2, 3, 6}",
  exCIntro: "Ordre croissant : 0, 2, 3, 6, 11.",
  exCResult: "<strong>Forme normale [11, 0, 2, 3, 6]</strong> (Si, Do, Ré, Mi♭, Fa♯).",
  fpH3: "Forme première : l'algorithme",
  fpSteps: [
    "Forme normale de l'ensemble, <strong>transposée pour commencer à 0</strong>.",
    "Forme normale de son <strong>inversion</strong> (12 − chaque pc), transposée pour commencer à 0.",
    "Retenir la plus <strong>tassée à gauche</strong> des deux (comparer chiffre à chiffre depuis la gauche). C'est la <strong>forme première</strong>, représentant unique de la classe d'ensembles.",
  ],
  exA2Title: "Exemple A (suite)",
  exA2Text:
    "[0,1,4] est déjà à 0. Inversion de {0,1,4} : {0, 11, 8} = {0, 8, 11}. Rotations : (0,8,11) → 11 ; (8,11,12) → 4 ; (11,12,20) → 9. Forme normale [8,11,0], transposée à 0 (−8) : [0,3,4]. Comparaison : <strong>[0,1,4]</strong> vs [0,3,4] → 1 &lt; 3, la forme première est <strong>[0,1,4]</strong>.",
  exB2Title: "Exemple B (suite)",
  exB2Text:
    "[7,9,1,2] transposée à 0 (−7) : <strong>[0,2,6,7]</strong>. Inversion de {1,2,7,9} : {11, 10, 5, 3} = {3, 5, 10, 11}. Rotations : (3,5,10,11) → 8 ; (5,10,11,15) → 10 ; <strong>(10,11,15,17) → 7</strong> ; (11,15,17,22) → 11. Forme normale [10,11,3,5], transposée à 0 (−10) : <strong>[0,1,5,7]</strong>. Comparaison : [0,2,6,7] vs [0,1,5,7] → 1 &lt; 2, la forme première est <strong>[0,1,5,7]</strong> (nombre de Forte : 4-16).",
  exC2Title: "Exemple C (suite)",
  exC2Text:
    "[11,0,2,3,6] transposée à 0 (−11) : <strong>[0,1,3,4,7]</strong>. Inversion de {0,2,3,6,11} : {0, 10, 9, 6, 1} = {0, 1, 6, 9, 10}. Rotations : (0,1,6,9,10) → 10 ; (1,6,9,10,12) → 11 ; <strong>(6,9,10,12,13) → 7</strong> ; (9,10,12,13,18) → 9 ; (10,12,13,18,21) → 11. Forme normale [6,9,10,0,1], transposée à 0 (−6) : <strong>[0,3,4,6,7]</strong>. Comparaison : [0,1,3,4,7] vs [0,3,4,6,7] → 1 &lt; 3, la forme première est <strong>[0,1,3,4,7]</strong> (nombre de Forte : 5-16).",
  reflexBox:
    "<strong>Vérification-réflexe</strong> : une forme première commence toujours par 0, et son dernier chiffre est l'étendue minimale de l'ensemble. Si votre forme première « penche à droite » (par ex. [0,3,4] alors que [0,1,4] existe dans la classe), c'est que l'inversion a été oubliée.",

  vecH2: "Le vecteur d'intervalles et les nombres de Forte",
  vecP1:
    "Le <strong>vecteur d'intervalles</strong> (<em>interval-class vector</em>) compte, pour un ensemble donné, le nombre d'occurrences de chaque classe d'intervalles ic 1 à ic 6, entre <strong>toutes les paires</strong> de pcs. Un ensemble de cardinalité k contient k(k−1)/2 paires : 3 pour un trichorde, 6 pour un tétracorde, 10 pour un pentacorde. C'est l'« empreinte sonore » de l'ensemble : deux ensembles de même vecteur offrent la même réserve d'intervalles.",
  vecCalcs: [
    "<strong>Calcul complet 1</strong> — [0, 1, 4] (la cellule de l'op. 11) : paires (0,1) → ic 1 ; (0,4) → ic 4 ; (1,4) → ic 3. Vecteur : <strong>&lt;101100&gt;</strong>.",
    "<strong>Calcul complet 2</strong> — la triade majeure/mineure [0, 3, 7] : (0,3) → ic 3 ; (0,7) → ic 5 ; (3,7) → ic 4. Vecteur : <strong>&lt;001110&gt;</strong>. (Majeur et mineur, inversions l'un de l'autre, partagent ce vecteur — l'inversion ne change jamais le vecteur.)",
    "<strong>Calcul complet 3</strong> — le tétracorde par tons [0, 2, 4, 6] : (0,2) → ic 2 ; (0,4) → ic 4 ; (0,6) → ic 6 ; (2,4) → ic 2 ; (2,6) → ic 4 ; (4,6) → ic 2. Vecteur : <strong>&lt;030201&gt;</strong> (trois ic 2, deux ic 4, un ic 6 — aucun demi-ton, aucune tierce mineure, aucune quarte : le son « tons entiers »).",
  ],
  forteH3: "Les nombres de Forte",
  forteP:
    "Forte a catalogué toutes les classes d'ensembles (12 classes de trichordes, 29 de tétracordes, 38 de pentacordes, 50 d'hexacordes) et les a nommées <strong>cardinalité-numéro d'ordre</strong> : 3-3 est la 3e classe de trichordes de son catalogue, 4-Z15 la 15e classe de tétracordes. Ces étiquettes sont la référence universelle des écrits analytiques.",
  zH3: "La relation Z",
  zP1:
    "Le vecteur ne détermine pas toujours la classe : deux ensembles peuvent avoir <strong>le même vecteur sans être équivalents Tn/TnI</strong>. Forte les dit en <strong>relation Z</strong> (le Z s'ajoute au nom). Paire classique :",
  zList: [
    "<strong>4-Z15 = [0, 1, 4, 6]</strong> : (0,1)→1 ; (0,4)→4 ; (0,6)→6 ; (1,4)→3 ; (1,6)→5 ; (4,6)→2 → vecteur <strong>&lt;111111&gt;</strong> ;",
    "<strong>4-Z29 = [0, 1, 3, 7]</strong> : (0,1)→1 ; (0,3)→3 ; (0,7)→5 ; (1,3)→2 ; (1,7)→6 ; (3,7)→4 → vecteur <strong>&lt;111111&gt;</strong>.",
  ],
  zP2:
    "Même réserve d'intervalles — un exemplaire de chacune des six classes, d'où le surnom de <em>tétracordes toutes-classes</em> — mais formes premières distinctes : ils ne sont ni transposés ni renversés l'un de l'autre.",
  famousH3: "Ensembles célèbres — table de référence",
  famousCaption: "Ensembles célèbres (nom de Forte, forme première, vecteur)",
  famousHeaders: ["Nom de Forte", "Forme première", "Vecteur", "Identité"],
  famousIdentites: [
    "cluster chromatique",
    "cellule d'ouverture de l'op. 11 n° 1",
    "trichorde « seconde + quarte »",
    "<strong>trichorde viennois</strong> (demi-ton + triton), omniprésent chez Schoenberg/Webern",
    "triade majeure/mineure",
    "triade augmentée",
    "notre exemple B (Sol–La–Do♯–Ré)",
    "tétracorde par tons",
    "septième diminuée",
    "accord « <strong>Farben</strong> », Schoenberg op. 16 n° 3 : Do–Sol♯–Si–Mi–La = {0,8,11,4,9} (Z-associé : 5-Z37 [0,3,4,5,8])",
    "collection <strong>hexatonique</strong> (alternance 1-3)",
    "gamme par <strong>tons entiers</strong> (cours 30/36 : Debussy)",
    "collection <strong>diatonique</strong> (la gamme majeure comme <em>ensemble</em>)",
    "collection <strong>octatonique</strong> (ton-demi-ton : Stravinsky, Bartók, Messiaen ; cours 30/31)",
  ],
  famousP2:
    "Relire cette table avec l'oreille (boutons 🔊) : 6-35 sans quartes ni demi-tons, 8-28 saturée de tierces mineures et de tritons, 7-35 dominée par les quartes/quintes (le chiffre 6 en ic 5) — le vecteur <em>se met à sonner</em>.",

  analyseH2: "Application analytique et introduction au sérialisme",
  segH3: "Une segmentation : Schoenberg, op. 11 n° 1, mes. 1-3",
  segP1:
    "<strong>Analyser, c'est d'abord segmenter</strong> : découper l'extrait en unités plausibles (motifs mélodiques, accords, voix), puis identifier la classe de chaque segment et chercher les récurrences. La segmentation est un acte d'interprétation — on la justifie par le phrasé, le rythme, le registre, jamais par le seul désir de retrouver un ensemble connu.",
  segIntro:
    "Les cinq premières notes de la mélodie (main droite, mes. 1-3) : <strong>Si–Sol♯–Sol–La–Fa</strong> = 11, 8, 7, 9, 5.",
  segHeaders: ["Segment", "pcs", "Forme normale", "Forme première", "Classe"],
  segLabels: [
    "Si–Sol♯–Sol (l'incise initiale)",
    "Sol♯–Sol–La (chevauchement)",
    "Sol–La–Fa (la retombée)",
    "Les cinq notes",
  ],
  segP2:
    "Le geste initial expose <strong>3-3 [0,1,4]</strong> — demi-ton et tierce majeure fondus en une seule sonorité, ni majeure ni mineure. C'est l'observation fondatrice des analyses classiques de cette pièce (Forte, Perle, Straus) : la cellule [0,1,4] y revient constamment, transposée, renversée, verticalisée — la section 3 a déjà montré T5 et T4I de {7,8,11}. La cohérence que la tonalité assurait par la syntaxe des degrés, Schoenberg l'obtient par la <strong>saturation du tissu par une même classe d'ensembles</strong>.",
  serieH3: "Du motif à la série : le dodécaphonisme",
  serieP1:
    "Vers 1921-1923, Schoenberg systématise : au lieu de cellules libres, une <strong>série</strong> (<em>row</em>) — un ordre fixé une fois pour toutes des <strong>douze</strong> classes de hauteurs, matrice de toute la pièce. Quatre transformations engendrent la famille des formes sérielles :",
  serieFormes: [
    "<strong>P</strong> (prime) : la série, transposable (P0…P11 — dans la convention de Straus, Pn commence sur le pc n) ;",
    "<strong>I</strong> : son inversion (chaque intervalle inversé) ;",
    "<strong>R</strong> : sa rétrogradation (ordre inverse) ;",
    "<strong>RI</strong> : le rétrograde de l'inversion.",
  ],
  serieP2:
    "Soit 12 × 4 = <strong>48 formes</strong>, que l'analyste consigne dans une matrice 12 × 12 (nous ne la construirons pas ici — l'exercice 3 en calcule les deux premières lignes, ce qui suffit à comprendre le principe).",
  webernIntro:
    "<strong>Exemple réel</strong> — la série de la <strong>Symphonie op. 21 (1928) de Webern</strong>, transposée à 0 :",
  webernI0P: "Calcul de <strong>I0</strong> : I0(x) = −x (mod 12), appliqué terme à terme :",
  webernControle:
    "Contrôle par les intervalles ordonnés : P0 descend de 3 (0→9), I0 monte de 3 (0→3) ; P0 monte de 1 (9→10), I0 descend de 1 (3→2) — chaque intervalle est bien inversé.",
  webernSym:
    "Cette série est célèbre pour sa symétrie : son <strong>second hexacorde est le rétrograde du premier transposé au triton</strong>. Vérification : premier hexacorde (0, 9, 10, 11, 7, 8) ; son rétrograde (8, 7, 11, 10, 9, 0) ; T6 de ce rétrograde : (2, 1, 5, 4, 3, 6) — exactement le second hexacorde. Conséquence : R6(P0) = P0… la série est son propre rétrograde transposé, et les 48 formes se réduisent à <strong>24 formes distinctes</strong>. Le sérialisme n'abolit pas la théorie des ensembles : les hexacordes, tétracordes et trichordes internes d'une série sont des ensembles, et leurs classes gouvernent l'harmonie de l'œuvre.",

  entrainH2: "Applications & entraînement",
  methodeH3: "La méthode, en résumé",
  methodeSteps: [
    "<strong>Segmenter</strong> l'extrait (motifs, accords, strates), en justifiant chaque découpe musicalement.",
    "<strong>Identifier</strong> chaque segment : pcs → forme normale → forme première (→ nombre de Forte, → vecteur si utile).",
    "<strong>Comparer</strong> : mêmes classes ? relations Tn/TnI précises (quel n ?) ? relation Z ? sous-ensembles communs ?",
    "<strong>Interpréter</strong> : que fait la récurrence ? saturation motivique, opposition de deux classes, progression d'une classe vers une autre… Le tableau de classes n'est pas l'analyse ; il en est la matière première.",
  ],
  calcTitle: "Calculateur d'ensembles",
  calcHelp:
    "Sélectionnez de 2 à 6 classes de hauteurs (0-11) : le moteur calcule la forme normale, la forme première et le vecteur d'intervalles — le même moteur qui verrouille chaque valeur imprimée dans ce cours.",
  calcNormalLabel: "Forme normale",
  calcPrimeLabel: "Forme première",
  calcVectorLabel: "Vecteur d'intervalles",
  calcEmpty: "Sélectionnez au moins 2 classes de hauteurs.",
  exercicesH3: "Exercices écrits (corrigés complets)",
  exercices: [
    {
      titre: "Exercice 1 — Carte d'identité complète",
      consigne:
        "Pour l'ensemble {Si♭, Si, Ré, Fa} = {10, 11, 2, 5}, déterminer la forme normale, la forme première, le nombre de Forte et le vecteur d'intervalles.",
      controle:
        "<strong>Forme normale.</strong> Ordre croissant : 2, 5, 10, 11. Rotations et étendues : (2,5,10,11) → 9 ; (5,10,11,14) → 9 ; <strong>(10,11,14,17) → 7</strong> ; (11,14,17,22) → 11. <strong>Forme normale [10, 11, 2, 5]</strong> (Si♭, Si, Ré, Fa).<br/><strong>Forme première.</strong> [10,11,2,5] − 10 → [0,1,4,7]. Inversion de {2,5,10,11} : {10, 7, 2, 1} = {1, 2, 7, 10} ; rotations : (1,2,7,10) → 9 ; (2,7,10,13) → 11 ; <strong>(7,10,13,14) → 7</strong> ; (10,13,14,19) → 9 ; forme normale [7,10,1,2] − 7 → [0,3,6,7]. Comparaison [0,1,4,7] vs [0,3,6,7] : 1 &lt; 3. <strong>Forme première [0,1,4,7]</strong>, nombre de Forte <strong>4-18</strong>.<br/><strong>Vecteur.</strong> Sur [0,1,4,7] : (0,1)→1 ; (0,4)→4 ; (0,7)→5 ; (1,4)→3 ; (1,7)→6 ; (4,7)→3. <strong>Vecteur &lt;102111&gt;</strong> (deux tierces mineures, tout le reste en un exemplaire — sauf ic 2, absente).",
    },
    {
      titre: "Exercice 2 — Démontrer une relation Z",
      consigne:
        "Démontrer que {0,1,4,6} et {0,1,3,7} sont en relation Z : (a) calculer leurs deux vecteurs ; (b) prouver qu'ils ne sont pas équivalents Tn/TnI en calculant leurs formes premières.",
      controle:
        "(a) {0,1,4,6} : (0,1)→1 ; (0,4)→4 ; (0,6)→6 ; (1,4)→3 ; (1,6)→5 ; (4,6)→2 → <strong>&lt;111111&gt;</strong>. {0,1,3,7} : (0,1)→1 ; (0,3)→3 ; (0,7)→5 ; (1,3)→2 ; (1,7)→6 ; (3,7)→4 → <strong>&lt;111111&gt;</strong>. Vecteurs identiques.<br/>(b) {0,1,4,6} : rotations (0,1,4,6) → 6 ; (1,4,6,12) → 11 ; (4,6,12,13) → 9 ; (6,12,13,16) → 10 : forme normale [0,1,4,6], déjà à 0. Inversion {0,11,8,6} = {0,6,8,11} : rotations (0,6,8,11) → 11 ; <strong>(6,8,11,12) → 6</strong> ; (8,11,12,18) → 10 ; (11,12,18,20) → 9 : [6,8,11,0] − 6 → [0,2,5,6]. Comparaison : <strong>forme première [0,1,4,6]</strong> (4-Z15).<br/>{0,1,3,7} : rotations (0,1,3,7) → 7 ; (1,3,7,12) → 11 ; (3,7,12,13) → 10 ; (7,12,13,15) → 8 : forme normale [0,1,3,7]. Inversion {0,11,9,5} = {0,5,9,11} : rotations (0,5,9,11) → 11 ; <strong>(5,9,11,12) → 7</strong> ; (9,11,12,17) → 8 ; (11,12,17,21) → 10 : [5,9,11,0] − 5 → [0,4,6,7]. Comparaison : <strong>forme première [0,1,3,7]</strong> (4-Z29).<br/>[0,1,4,6] ≠ [0,1,3,7] : classes distinctes, vecteurs identiques → <strong>relation Z</strong>. ∎",
    },
    {
      titre: "Exercice 3 — Formes sérielles",
      consigne:
        "Soit la série de la Symphonie op. 21 de Webern, transposée à 0 : P0 = 0, 9, 10, 11, 7, 8, 2, 1, 5, 4, 3, 6. (a) Calculer I0 et R0. (b) Vérifier que le second hexacorde de P0 est le rétrograde du premier transposé au triton.",
      controle:
        "(a) <strong>I0</strong> = (−x mod 12 pour chaque terme) = <strong>0, 3, 2, 1, 5, 4, 10, 11, 7, 8, 9, 6</strong> ; <strong>R0</strong> = (P0 lu à rebours) = <strong>6, 3, 4, 5, 1, 2, 8, 7, 11, 10, 9, 0</strong>.<br/>(b) Premier hexacorde : (0, 9, 10, 11, 7, 8). Rétrograde : (8, 7, 11, 10, 9, 0). T6 : (8+6, 7+6, 11+6, 10+6, 9+6, 0+6) = <strong>(2, 1, 5, 4, 3, 6)</strong> = le second hexacorde de P0. ∎ (On observera que R0 = T6(P0) comme suites ordonnées : la série est son propre rétrograde au triton, d'où 24 formes distinctes au lieu de 48.)",
    },
    {
      titre: "Exercice 4 — Identifier une relation précise",
      consigne:
        "Les cellules Mi–Fa–La = {4, 5, 9} et Sol–Si–Do = {7, 11, 0} appartiennent-elles à la même classe ? Si oui, par quelle opération exacte (Tn ou TnI, avec la valeur de n) passe-t-on de la première à la seconde ?",
      controle:
        "{4,5,9} : rotations (4,5,9) → 5 ; (5,9,16) → 11 ; (9,16,17) → 8 : forme normale [4,5,9], type [0,1,5]. Inversion {8,7,3} = {3,7,8} : rotations <strong>(3,7,8) → 5</strong> ; (7,8,15) → 8 ; (8,15,19) → 11 : [3,7,8] − 3 → [0,4,5]. Forme première <strong>[0,1,5]</strong> (3-4).<br/>{7,11,0} = {0,7,11} : rotations (0,7,11) → 11 ; <strong>(7,11,12) → 5</strong> ; (11,12,19) → 8 : forme normale [7,11,0], type [0,4,5] — la structure <strong>inversée</strong>. Forme première [0,1,5] également : <strong>même classe 3-4</strong>.<br/>L'une est de type [0,1,5], l'autre de type [0,4,5] : aucune transposition ne relie les deux (Tn préserve la suite des intervalles). On cherche n tel que n − {4,5,9} = {0,7,11} : n = 4 donne 4−4 = 0, 4−5 = 11, 4−9 = 7 ✓. <strong>Opération : T4I.</strong> (3-4 n'étant pas symétrique par inversion, la réponse Tn/TnI est exclusive : c'est TnI et seulement TnI.)",
    },
  ],
  voirCorrige: "Voir le corrigé",
  masquerCorrige: "Masquer le corrigé",
  corrigeLabel: "Corrigé complet",
  quizH3: "Quiz — 10 questions",
  questions: [
    {
      q: "Quelle est la forme normale de {Do, Mi, Fa♯, Si} = {0, 4, 6, 11} ?",
      opts: ["[0,4,6,11]", "[11,0,4,6]", "[4,6,11,0]", "[6,11,0,4]"],
      a: 1,
      fb: "Étendues des rotations : 11, 8, 10 et 7 ; la rotation (11,12,16,18), soit [11,0,4,6], est la plus compacte (étendue 7).",
    },
    {
      q: "Quel est le vecteur d'intervalles du trichorde viennois 3-5 [0,1,6] ?",
      opts: ["<100011>", "<100110>", "<110001>", "<101100>"],
      a: 0,
      fb: "Paires : (0,1) → ic 1 ; (0,6) → ic 6 ; (1,6) → ic 5, d'où <100011>.",
    },
    {
      q: "{Ré, Mi♭, Sol} = {2,3,7} et {La, Do♯, Ré} = {9,1,2} sont-ils reliés par Tn, par TnI, les deux, ou aucun ?",
      opts: ["Tn seulement", "TnI seulement", "Les deux", "Aucun"],
      a: 1,
      fb: "Formes normales [2,3,7] (type [0,1,5]) et [9,1,2] (type [0,4,5]) : structures inversées, donc pas de Tn ; T4I envoie 2→2, 3→1, 7→9, soit exactement {9,1,2}.",
    },
    {
      q: "Quel est le vecteur d'intervalles de la triade majeure {Do, Mi, Sol} = {0,4,7} ?",
      opts: ["<001110>", "<011010>", "<001101>", "<010110>"],
      a: 0,
      fb: "(0,4) → ic 4 ; (0,7) → ic 5 ; (4,7) → ic 3 : <001110> — identique à celui de la triade mineure (même classe 3-11).",
    },
    {
      q: "Quelle est la forme première de {Ré, Fa, Fa♯, La} = {2,5,6,9} ?",
      opts: ["[0,1,4,7]", "[0,3,4,7]", "[0,1,3,7]", "[0,3,6,7]"],
      a: 1,
      fb: "Forme normale [2,5,6,9] (étendue 7) → −2 → [0,3,4,7] ; l'inversion {3,6,7,10} donne aussi [0,3,4,7] (ensemble symétrique) : classe 4-17, le tétracorde « majeur-mineur ».",
    },
    {
      q: "Combien d'intervalles compte au total le vecteur d'un pentacorde (somme de ses six chiffres) ?",
      opts: ["5", "10", "12", "15"],
      a: 1,
      fb: "Le vecteur compte toutes les paires : k(k−1)/2 = 5 × 4 / 2 = 10.",
    },
    {
      q: "4-Z15 [0,1,4,6] et 4-Z29 [0,1,3,7] ont le même vecteur <111111> sans être équivalents Tn/TnI. Comment nomme-t-on cette relation ?",
      opts: ["Relation Z", "Équivalence Tn", "Équivalence TnI", "Complémentarité"],
      a: 0,
      fb: "Même contenu intervallique, classes distinctes : c'est la définition de la relation Z de Forte.",
    },
    {
      q: "Que vaut T8({Do♯, Mi, La}) = T8({1, 4, 9}) ?",
      opts: ["{0,5,9}", "{9,0,4}", "{1,5,8}", "{2,7,11}"],
      a: 0,
      fb: "1+8 = 9 ; 4+8 = 0 ; 9+8 = 5 (mod 12) → {9, 0, 5} = {0,5,9} (La, Do, Fa).",
    },
    {
      q: "Quelle est la forme première de la gamme par tons ?",
      opts: ["[0,1,3,5,7,9]", "[0,2,4,6,8,10]", "[0,2,4,6,8,11]", "[0,1,4,6,8,10]"],
      a: 1,
      fb: "Six pcs espacés de 2 demi-tons : classe 6-35, vecteur <060603>.",
    },
    {
      q: "Laquelle de ces propriétés d'un ensemble est invariante sous toutes les transpositions ET toutes les inversions ?",
      opts: ["Sa forme normale", "Son vecteur d'intervalles", "Ses hauteurs réelles", "L'ordre de ses notes"],
      a: 1,
      fb: "Tn et TnI préservent toutes les classes d'intervalles internes ; la forme normale, elle, change avec la transposition.",
    },
  ],

  listenBtn: "Écouter",
};

// ════════════════════════════════════════════════════════════════════════════
// EN
// ════════════════════════════════════════════════════════════════════════════

const en: Cours44Locale = {
  maitreConcept: "Pitch-class sets — the lingua franca of post-tonal analysis",
  maitreAnecdote:
    "Building on the work of Milton Babbitt (who coined the notions of pitch class and interval class), Allen Forte (1926-2014) systematized in The Structure of Atonal Music (1973) a theory of pitch-class sets: instead of chords and scale degrees, sets of notes considered up to octave and enharmonic equivalence, comparable under transposition and inversion, catalogued and named — the « Forte numbers ». The standard textbook is Joseph N. Straus's Introduction to Post-Tonal Theory, whose conventions this course follows.",
  maitreLesson:
    "Set theory is a tool for analysis, not a method of composition; it does not replace the ear, it gives it an exact vocabulary. And it does not « dethrone » Schenker: each reigns over its own repertoire.",

  introH2: "Why a new theory?",
  introP1:
    "Around 1908-1909 — the finale of the Second Quartet, the <em>Lieder</em> of the <em>Book of the Hanging Gardens</em>, then Schoenberg's Three Pieces op. 11 — a music appears that no longer rests on a tonic. This is <strong>free atonality</strong>: no more hierarchy of degrees, no more dissonance <em>relative to</em> a consonance of reference (Schoenberg speaks of the « emancipation of the dissonance »), no more cadences articulating the form. Our tonal tools then fall silent: labelling a chord presupposes a root and stacked thirds it often no longer has; speaking of a « degree » presupposes a reference scale; and Schenkerian reduction (courses 27 and 37) presupposes precisely what this music abolishes — the prolongation of a tonic triad by consonant linear motions. Schenker himself explicitly reserved his theory for the tonal repertoire: for Webern or atonal Schoenberg, something else is needed.",
  introP2:
    "This conceptual void was filled only belatedly. Building on the work of Milton Babbitt (who coined the notions of <em>pitch class</em> and interval class), <strong>Allen Forte</strong> systematized in <strong><em>The Structure of Atonal Music</em> (1973)</strong> a theory of <strong>pitch-class sets</strong> (<em>pitch-class set theory</em>): instead of chords and degrees, <em>sets</em> of notes considered up to octave and enharmonic equivalence, comparable to one another under transposition and inversion, catalogued and named. The key idea: in free atonality, coherence no longer comes from tonal syntax but from the <strong>recurrence of small collections of intervals</strong> — cells the composer transposes, inverts, superimposes. Set theory is today the <em>lingua franca</em> of post-tonal analysis; the standard textbook is Joseph N. Straus's <em>Introduction to Post-Tonal Theory</em>, whose conventions this course follows.",
  introBox:
    "<strong>Remember</strong>: set theory is a tool for <strong>analysis</strong>, not a method of composition; it does not replace the ear, it gives it an exact vocabulary. And it does not « dethrone » Schenker: each reigns over its own repertoire. Landmarks in the curriculum: courses 27 and 37 (Schenker, motivic analysis) — the reference tool <strong>for tonal music</strong>, from which this course takes over outside tonality; courses 30, 31 and 36 (impressionist harmony, polytonality and quartal harmony, Debussy/Ravel) — the hinge repertoire whose collections receive their generic names here.",

  pcsH2: "Pitch classes and interval classes",
  hauteurH3: "Pitch vs pitch class",
  hauteurP1:
    "A <strong>pitch</strong> is a precise sound in a precise register: Do4 (the PianoPlayer's middle do) is not Do5. A <strong>pitch class</strong> (« pc ») is what remains once we adopt two equivalences:",
  hauteurEquiv: [
    "<strong>octave equivalence</strong>: Do1, Do4, Do7 belong to the same class « Do »;",
    "<strong>enharmonic equivalence</strong>: Do♯ and Ré♭ are the same class (equal temperament conflates them; atonality gives up the functional distinction tonality gave them).",
  ],
  hauteurP2:
    "There are therefore exactly <strong>12 pitch classes</strong>, numbered 0 to 11 with the « fixed do » convention <strong>Do = 0</strong>:",
  pcTableCaption: "The 12 pitch classes (« fixed do » convention, Do = 0)",
  pcLabel: "pc",
  noteLabel: "Note",
  modP:
    "The arithmetic is <strong>modulo 12</strong>, as on a clock face: rising by 2 from Si (11) gives Do♯ (11 + 2 = 13 ≡ 1).",
  intervH3: "Ordered intervals, unordered intervals, interval classes",
  intervP1:
    "Between <strong>pitches</strong>, the <strong>ordered interval</strong> counts semitones with their direction: from Do4 to Si3, −1; from Do4 to Si4, +11. The <strong>unordered interval</strong> is its absolute value. Between <strong>pitch classes</strong>, the ordered interval from a to b is b − a (mod 12): from Si to Do, 0 − 11 = 1; from Do to Si, 11. Finally, if we also give up direction, we obtain the <strong>interval class</strong> (« ic »):",
  icFormule:
    "<strong>ic(i) = min(i, 12 − i)</strong> — an interval and its inversion belong to the same class.",
  icTableCaption: "The 7 interval classes (ic 0 to ic 6)",
  icHeaders: ["ic", "Semitones (mod 12)", "Corresponding tonal intervals"],
  icTonal: [
    "unison, octave",
    "minor second / major seventh",
    "major second / minor seventh",
    "minor third / major sixth",
    "major third / minor sixth",
    "perfect fourth / perfect fifth",
    "tritone (the only interval equal to its own inversion)",
  ],
  icExemple:
    "<strong>Example</strong>: from Sol♯ (8) to Ré (2), ordered interval 2 − 8 = 6 → ic 6, tritone. From Mi (4) to Do (0), ordered interval 8 → ic(8) = min(8, 4) = 4, the « major third / minor sixth » class.",

  ensH2: "Pitch-class sets",
  defH3: "Definition",
  defP:
    "A <strong>pitch-class set</strong> (<em>pc set</em>) is an <strong>unordered, repetition-free</strong> collection of pitch classes. {Sol, Sol♯, Si} = {7, 8, 11}: the order of statement, register and doubling do not matter. The number of elements is the <strong>cardinality</strong>: trichord (3), tetrachord (4), pentachord (5), hexachord (6)…",
  opsH3: "Transposition Tn and inversion TnI",
  opsP: "Two operations generate the theory's equivalences:",
  opsList: [
    "<strong>Transposition Tn</strong>: add n (mod 12) to each pc. Tn(x) = x + n.",
    "<strong>Inversion TnI</strong>: invert around 0 (x ↦ −x, that is 12 − x), <strong>then</strong> transpose by n. TnI(x) = n − x (mod 12).",
  ],
  exTravIntro:
    "<strong>Worked example</strong> — the opening cell of Schoenberg's Three Pieces op. 11 no. 1 (1909), the first three notes of the melody: <strong>Si–Sol♯–Sol</strong>, i.e. the set <strong>{7, 8, 11}</strong>.",
  opsTableCaption: "Transformations of {7, 8, 11} (the op. 11 cell)",
  opsHeaders: ["Operation", "Computation (on {7, 8, 11})", "Result", "As notes"],
  ensP2:
    "All these sets « sound related »: the same internal intervals (a semitone and a major third interlocked), register and order aside. The theory declares two sets <strong>equivalent</strong> when they are related by a transposition or an inversion: they belong to the same <strong>set class</strong>. This is the exact generalization of a tonal reflex: we already consider all major triads to be « the same chord » up to transposition — and tonality even considers major and minor (inversions of each other) as two species of one object, the triad.",
  ensEcoute:
    "Listen to {7, 8, 11} then each transformation, blocked then arpeggiated — the ear recognizes the kinship before the calculation does.",

  formesH2: "Normal form and prime form",
  formesP1:
    "To compare sets we need a <strong>canonical spelling</strong>. Two levels: the <em>normal form</em> (the set itself, arranged most compactly) and the <em>prime form</em> (the representative of the whole equivalence class, starting on 0).",
  fnH3: "Normal form: the algorithm",
  fnSteps: [
    "Write the pcs in <strong>ascending order</strong> within one octave, and form all the <strong>rotations</strong> (each pc becomes in turn the first note, the previous ones moving up an octave, +12).",
    "Keep the rotation whose <strong>outer interval</strong> (last − first) is <strong>smallest</strong>: the most compact arrangement.",
    "In case of a tie, compare the interval from the first note to the <strong>next-to-last</strong>, then to the antepenultimate, etc.: keep the most <strong>packed to the left</strong>.",
    "(Perfect tie — totally symmetric sets like {0,4,8}: start with the smallest number.)",
  ],
  fnNote:
    "<em>A note on rigour</em>: this « packed to the left » tie-breaking criterion is Rahn's and Straus's, followed by nearly all current tools. Forte's original criterion (1973) differs for five classes only (5-20, 6-Z29, 6-31, 7-20, 8-26) — none of which appears in this course.",
  rotHeaders: ["Rotation", "Span"],
  exATitle: "Example A — {Do, Do♯, Mi} = {0, 1, 4}",
  exAText:
    "Rotations: (0,1,4) → span 4; (1,4,12) → 11; (4,12,13) → 9. The most compact: <strong>normal form [0,1,4]</strong>.",
  exBTitle: "Example B — {Sol, La, Do♯, Ré} = {7, 9, 1, 2}",
  exBIntro: "Ascending order: 1, 2, 7, 9.",
  exBResult: "<strong>Normal form [7, 9, 1, 2]</strong> (Sol, La, Do♯, Ré).",
  exCTitle: "Example C — {Si, Do, Ré, Mi♭, Fa♯} = {11, 0, 2, 3, 6}",
  exCIntro: "Ascending order: 0, 2, 3, 6, 11.",
  exCResult: "<strong>Normal form [11, 0, 2, 3, 6]</strong> (Si, Do, Ré, Mi♭, Fa♯).",
  fpH3: "Prime form: the algorithm",
  fpSteps: [
    "Normal form of the set, <strong>transposed to begin on 0</strong>.",
    "Normal form of its <strong>inversion</strong> (12 − each pc), transposed to begin on 0.",
    "Keep the more <strong>left-packed</strong> of the two (compare digit by digit from the left). This is the <strong>prime form</strong>, the unique representative of the set class.",
  ],
  exA2Title: "Example A (continued)",
  exA2Text:
    "[0,1,4] already begins on 0. Inversion of {0,1,4}: {0, 11, 8} = {0, 8, 11}. Rotations: (0,8,11) → 11; (8,11,12) → 4; (11,12,20) → 9. Normal form [8,11,0], transposed to 0 (−8): [0,3,4]. Comparison: <strong>[0,1,4]</strong> vs [0,3,4] → 1 &lt; 3, the prime form is <strong>[0,1,4]</strong>.",
  exB2Title: "Example B (continued)",
  exB2Text:
    "[7,9,1,2] transposed to 0 (−7): <strong>[0,2,6,7]</strong>. Inversion of {1,2,7,9}: {11, 10, 5, 3} = {3, 5, 10, 11}. Rotations: (3,5,10,11) → 8; (5,10,11,15) → 10; <strong>(10,11,15,17) → 7</strong>; (11,15,17,22) → 11. Normal form [10,11,3,5], transposed to 0 (−10): <strong>[0,1,5,7]</strong>. Comparison: [0,2,6,7] vs [0,1,5,7] → 1 &lt; 2, the prime form is <strong>[0,1,5,7]</strong> (Forte number: 4-16).",
  exC2Title: "Example C (continued)",
  exC2Text:
    "[11,0,2,3,6] transposed to 0 (−11): <strong>[0,1,3,4,7]</strong>. Inversion of {0,2,3,6,11}: {0, 10, 9, 6, 1} = {0, 1, 6, 9, 10}. Rotations: (0,1,6,9,10) → 10; (1,6,9,10,12) → 11; <strong>(6,9,10,12,13) → 7</strong>; (9,10,12,13,18) → 9; (10,12,13,18,21) → 11. Normal form [6,9,10,0,1], transposed to 0 (−6): <strong>[0,3,4,6,7]</strong>. Comparison: [0,1,3,4,7] vs [0,3,4,6,7] → 1 &lt; 3, the prime form is <strong>[0,1,3,4,7]</strong> (Forte number: 5-16).",
  reflexBox:
    "<strong>Reflex check</strong>: a prime form always begins with 0, and its last digit is the set's minimal span. If your prime form « leans to the right » (e.g. [0,3,4] when [0,1,4] exists in the class), the inversion was forgotten.",

  vecH2: "The interval-class vector and the Forte numbers",
  vecP1:
    "The <strong>interval-class vector</strong> counts, for a given set, the number of occurrences of each interval class ic 1 to ic 6, between <strong>all pairs</strong> of pcs. A set of cardinality k contains k(k−1)/2 pairs: 3 for a trichord, 6 for a tetrachord, 10 for a pentachord. It is the set's « sonic fingerprint »: two sets with the same vector offer the same reservoir of intervals.",
  vecCalcs: [
    "<strong>Complete calculation 1</strong> — [0, 1, 4] (the op. 11 cell): pairs (0,1) → ic 1; (0,4) → ic 4; (1,4) → ic 3. Vector: <strong>&lt;101100&gt;</strong>.",
    "<strong>Complete calculation 2</strong> — the major/minor triad [0, 3, 7]: (0,3) → ic 3; (0,7) → ic 5; (3,7) → ic 4. Vector: <strong>&lt;001110&gt;</strong>. (Major and minor, inversions of each other, share this vector — inversion never changes the vector.)",
    "<strong>Complete calculation 3</strong> — the whole-tone tetrachord [0, 2, 4, 6]: (0,2) → ic 2; (0,4) → ic 4; (0,6) → ic 6; (2,4) → ic 2; (2,6) → ic 4; (4,6) → ic 2. Vector: <strong>&lt;030201&gt;</strong> (three ic 2, two ic 4, one ic 6 — no semitone, no minor third, no fourth: the « whole-tone » sound).",
  ],
  forteH3: "The Forte numbers",
  forteP:
    "Forte catalogued all set classes (12 trichord classes, 29 tetrachord classes, 38 pentachord classes, 50 hexachord classes) and named them <strong>cardinality-ordinal</strong>: 3-3 is the 3rd trichord class of his catalogue, 4-Z15 the 15th tetrachord class. These labels are the universal reference of analytical writing.",
  zH3: "The Z-relation",
  zP1:
    "The vector does not always determine the class: two sets can have <strong>the same vector without being Tn/TnI-equivalent</strong>. Forte says they are <strong>Z-related</strong> (the Z is added to the name). The classic pair:",
  zList: [
    "<strong>4-Z15 = [0, 1, 4, 6]</strong>: (0,1)→1; (0,4)→4; (0,6)→6; (1,4)→3; (1,6)→5; (4,6)→2 → vector <strong>&lt;111111&gt;</strong>;",
    "<strong>4-Z29 = [0, 1, 3, 7]</strong>: (0,1)→1; (0,3)→3; (0,7)→5; (1,3)→2; (1,7)→6; (3,7)→4 → vector <strong>&lt;111111&gt;</strong>.",
  ],
  zP2:
    "The same reservoir of intervals — one instance of each of the six classes, hence the nickname <em>all-interval tetrachords</em> — but distinct prime forms: neither is a transposition nor an inversion of the other.",
  famousH3: "Famous sets — reference table",
  famousCaption: "Famous sets (Forte name, prime form, vector)",
  famousHeaders: ["Forte name", "Prime form", "Vector", "Identity"],
  famousIdentites: [
    "chromatic cluster",
    "opening cell of op. 11 no. 1",
    "« second + fourth » trichord",
    "<strong>Viennese trichord</strong> (semitone + tritone), omnipresent in Schoenberg/Webern",
    "major/minor triad",
    "augmented triad",
    "our example B (Sol–La–Do♯–Ré)",
    "whole-tone tetrachord",
    "diminished seventh",
    "the « <strong>Farben</strong> » chord, Schoenberg op. 16 no. 3: Do–Sol♯–Si–Mi–La = {0,8,11,4,9} (Z-partner: 5-Z37 [0,3,4,5,8])",
    "<strong>hexatonic</strong> collection (1-3 alternation)",
    "<strong>whole-tone</strong> scale (courses 30/36: Debussy)",
    "<strong>diatonic</strong> collection (the major scale as a <em>set</em>)",
    "<strong>octatonic</strong> collection (whole-half: Stravinsky, Bartók, Messiaen; courses 30/31)",
  ],
  famousP2:
    "Reread this table with the ear (🔊 buttons): 6-35 without fourths or semitones, 8-28 saturated with minor thirds and tritones, 7-35 dominated by fourths/fifths (the 6 in ic 5) — the vector <em>begins to sound</em>.",

  analyseH2: "Analytical application and introduction to serialism",
  segH3: "A segmentation: Schoenberg, op. 11 no. 1, mm. 1-3",
  segP1:
    "<strong>To analyse is first to segment</strong>: cut the excerpt into plausible units (melodic motives, chords, voices), then identify the class of each segment and look for recurrences. Segmentation is an act of interpretation — justified by phrasing, rhythm, register, never by the mere desire to find a familiar set.",
  segIntro:
    "The first five notes of the melody (right hand, mm. 1-3): <strong>Si–Sol♯–Sol–La–Fa</strong> = 11, 8, 7, 9, 5.",
  segHeaders: ["Segment", "pcs", "Normal form", "Prime form", "Class"],
  segLabels: [
    "Si–Sol♯–Sol (the opening gesture)",
    "Sol♯–Sol–La (overlap)",
    "Sol–La–Fa (the descent)",
    "All five notes",
  ],
  segP2:
    "The opening gesture states <strong>3-3 [0,1,4]</strong> — semitone and major third fused into a single sonority, neither major nor minor. This is the founding observation of the classic analyses of this piece (Forte, Perle, Straus): the [0,1,4] cell returns constantly, transposed, inverted, verticalized — section 3 already showed T5 and T4I of {7,8,11}. The coherence tonality secured through the syntax of degrees, Schoenberg obtains through the <strong>saturation of the texture by a single set class</strong>.",
  serieH3: "From motive to row: dodecaphony",
  serieP1:
    "Around 1921-1923, Schoenberg systematizes: instead of free cells, a <strong>row</strong> — an order of the <strong>twelve</strong> pitch classes fixed once and for all, the matrix of the whole piece. Four transformations generate the family of row forms:",
  serieFormes: [
    "<strong>P</strong> (prime): the row, transposable (P0…P11 — in Straus's convention, Pn begins on pc n);",
    "<strong>I</strong>: its inversion (each interval inverted);",
    "<strong>R</strong>: its retrograde (reverse order);",
    "<strong>RI</strong>: the retrograde of the inversion.",
  ],
  serieP2:
    "That is 12 × 4 = <strong>48 forms</strong>, which the analyst records in a 12 × 12 matrix (we will not build it here — exercise 3 computes its first two rows, enough to grasp the principle).",
  webernIntro:
    "<strong>A real example</strong> — the row of <strong>Webern's Symphony op. 21 (1928)</strong>, transposed to 0:",
  webernI0P: "Computing <strong>I0</strong>: I0(x) = −x (mod 12), applied term by term:",
  webernControle:
    "Check via the ordered intervals: P0 descends by 3 (0→9), I0 rises by 3 (0→3); P0 rises by 1 (9→10), I0 descends by 1 (3→2) — each interval is indeed inverted.",
  webernSym:
    "This row is famous for its symmetry: its <strong>second hexachord is the retrograde of the first transposed by a tritone</strong>. Verification: first hexachord (0, 9, 10, 11, 7, 8); its retrograde (8, 7, 11, 10, 9, 0); T6 of this retrograde: (2, 1, 5, 4, 3, 6) — exactly the second hexachord. Consequence: R6(P0) = P0… the row is its own transposed retrograde, and the 48 forms reduce to <strong>24 distinct forms</strong>. Serialism does not abolish set theory: the internal hexachords, tetrachords and trichords of a row are sets, and their classes govern the work's harmony.",

  entrainH2: "Applications & training",
  methodeH3: "The method, in short",
  methodeSteps: [
    "<strong>Segment</strong> the excerpt (motives, chords, layers), justifying each cut musically.",
    "<strong>Identify</strong> each segment: pcs → normal form → prime form (→ Forte number, → vector if useful).",
    "<strong>Compare</strong>: same classes? precise Tn/TnI relations (which n?)? Z-relation? shared subsets?",
    "<strong>Interpret</strong>: what does the recurrence do? motivic saturation, opposition of two classes, progression from one class to another… The table of classes is not the analysis; it is its raw material.",
  ],
  calcTitle: "Set calculator",
  calcHelp:
    "Select 2 to 6 pitch classes (0-11): the engine computes the normal form, the prime form and the interval-class vector — the same engine that locks every value printed in this course.",
  calcNormalLabel: "Normal form",
  calcPrimeLabel: "Prime form",
  calcVectorLabel: "Interval-class vector",
  calcEmpty: "Select at least 2 pitch classes.",
  exercicesH3: "Written exercises (complete solutions)",
  exercices: [
    {
      titre: "Exercise 1 — A complete identity card",
      consigne:
        "For the set {Si♭, Si, Ré, Fa} = {10, 11, 2, 5}, determine the normal form, the prime form, the Forte number and the interval-class vector.",
      controle:
        "<strong>Normal form.</strong> Ascending order: 2, 5, 10, 11. Rotations and spans: (2,5,10,11) → 9; (5,10,11,14) → 9; <strong>(10,11,14,17) → 7</strong>; (11,14,17,22) → 11. <strong>Normal form [10, 11, 2, 5]</strong> (Si♭, Si, Ré, Fa).<br/><strong>Prime form.</strong> [10,11,2,5] − 10 → [0,1,4,7]. Inversion of {2,5,10,11}: {10, 7, 2, 1} = {1, 2, 7, 10}; rotations: (1,2,7,10) → 9; (2,7,10,13) → 11; <strong>(7,10,13,14) → 7</strong>; (10,13,14,19) → 9; normal form [7,10,1,2] − 7 → [0,3,6,7]. Comparison [0,1,4,7] vs [0,3,6,7]: 1 &lt; 3. <strong>Prime form [0,1,4,7]</strong>, Forte number <strong>4-18</strong>.<br/><strong>Vector.</strong> On [0,1,4,7]: (0,1)→1; (0,4)→4; (0,7)→5; (1,4)→3; (1,7)→6; (4,7)→3. <strong>Vector &lt;102111&gt;</strong> (two minor thirds, everything else once — except ic 2, absent).",
    },
    {
      titre: "Exercise 2 — Proving a Z-relation",
      consigne:
        "Prove that {0,1,4,6} and {0,1,3,7} are Z-related: (a) compute their two vectors; (b) prove they are not Tn/TnI-equivalent by computing their prime forms.",
      controle:
        "(a) {0,1,4,6}: (0,1)→1; (0,4)→4; (0,6)→6; (1,4)→3; (1,6)→5; (4,6)→2 → <strong>&lt;111111&gt;</strong>. {0,1,3,7}: (0,1)→1; (0,3)→3; (0,7)→5; (1,3)→2; (1,7)→6; (3,7)→4 → <strong>&lt;111111&gt;</strong>. Identical vectors.<br/>(b) {0,1,4,6}: rotations (0,1,4,6) → 6; (1,4,6,12) → 11; (4,6,12,13) → 9; (6,12,13,16) → 10: normal form [0,1,4,6], already on 0. Inversion {0,11,8,6} = {0,6,8,11}: rotations (0,6,8,11) → 11; <strong>(6,8,11,12) → 6</strong>; (8,11,12,18) → 10; (11,12,18,20) → 9: [6,8,11,0] − 6 → [0,2,5,6]. Comparison: <strong>prime form [0,1,4,6]</strong> (4-Z15).<br/>{0,1,3,7}: rotations (0,1,3,7) → 7; (1,3,7,12) → 11; (3,7,12,13) → 10; (7,12,13,15) → 8: normal form [0,1,3,7]. Inversion {0,11,9,5} = {0,5,9,11}: rotations (0,5,9,11) → 11; <strong>(5,9,11,12) → 7</strong>; (9,11,12,17) → 8; (11,12,17,21) → 10: [5,9,11,0] − 5 → [0,4,6,7]. Comparison: <strong>prime form [0,1,3,7]</strong> (4-Z29).<br/>[0,1,4,6] ≠ [0,1,3,7]: distinct classes, identical vectors → <strong>Z-relation</strong>. ∎",
    },
    {
      titre: "Exercise 3 — Row forms",
      consigne:
        "Given the row of Webern's Symphony op. 21, transposed to 0: P0 = 0, 9, 10, 11, 7, 8, 2, 1, 5, 4, 3, 6. (a) Compute I0 and R0. (b) Verify that the second hexachord of P0 is the retrograde of the first transposed by a tritone.",
      controle:
        "(a) <strong>I0</strong> = (−x mod 12 for each term) = <strong>0, 3, 2, 1, 5, 4, 10, 11, 7, 8, 9, 6</strong>; <strong>R0</strong> = (P0 read backwards) = <strong>6, 3, 4, 5, 1, 2, 8, 7, 11, 10, 9, 0</strong>.<br/>(b) First hexachord: (0, 9, 10, 11, 7, 8). Retrograde: (8, 7, 11, 10, 9, 0). T6: (8+6, 7+6, 11+6, 10+6, 9+6, 0+6) = <strong>(2, 1, 5, 4, 3, 6)</strong> = the second hexachord of P0. ∎ (Note that R0 = T6(P0) as ordered sequences: the row is its own retrograde at the tritone, hence 24 distinct forms instead of 48.)",
    },
    {
      titre: "Exercise 4 — Identifying a precise relation",
      consigne:
        "Do the cells Mi–Fa–La = {4, 5, 9} and Sol–Si–Do = {7, 11, 0} belong to the same class? If so, by exactly which operation (Tn or TnI, with the value of n) does one pass from the first to the second?",
      controle:
        "{4,5,9}: rotations (4,5,9) → 5; (5,9,16) → 11; (9,16,17) → 8: normal form [4,5,9], type [0,1,5]. Inversion {8,7,3} = {3,7,8}: rotations <strong>(3,7,8) → 5</strong>; (7,8,15) → 8; (8,15,19) → 11: [3,7,8] − 3 → [0,4,5]. Prime form <strong>[0,1,5]</strong> (3-4).<br/>{7,11,0} = {0,7,11}: rotations (0,7,11) → 11; <strong>(7,11,12) → 5</strong>; (11,12,19) → 8: normal form [7,11,0], type [0,4,5] — the <strong>inverted</strong> structure. Prime form [0,1,5] as well: <strong>same class 3-4</strong>.<br/>One is of type [0,1,5], the other of type [0,4,5]: no transposition links the two (Tn preserves the sequence of intervals). We seek n such that n − {4,5,9} = {0,7,11}: n = 4 gives 4−4 = 0, 4−5 = 11, 4−9 = 7 ✓. <strong>Operation: T4I.</strong> (Since 3-4 is not inversionally symmetric, the Tn/TnI answer is exclusive: it is TnI and only TnI.)",
    },
  ],
  voirCorrige: "Show the solution",
  masquerCorrige: "Hide the solution",
  corrigeLabel: "Complete solution",
  quizH3: "Quiz — 10 questions",
  questions: [
    {
      q: "What is the normal form of {Do, Mi, Fa♯, Si} = {0, 4, 6, 11}?",
      opts: ["[0,4,6,11]", "[11,0,4,6]", "[4,6,11,0]", "[6,11,0,4]"],
      a: 1,
      fb: "Rotation spans: 11, 8, 10 and 7; the rotation (11,12,16,18), i.e. [11,0,4,6], is the most compact (span 7).",
    },
    {
      q: "What is the interval-class vector of the Viennese trichord 3-5 [0,1,6]?",
      opts: ["<100011>", "<100110>", "<110001>", "<101100>"],
      a: 0,
      fb: "Pairs: (0,1) → ic 1; (0,6) → ic 6; (1,6) → ic 5, hence <100011>.",
    },
    {
      q: "Are {Ré, Mi♭, Sol} = {2,3,7} and {La, Do♯, Ré} = {9,1,2} related by Tn, by TnI, both, or neither?",
      opts: ["Tn only", "TnI only", "Both", "Neither"],
      a: 1,
      fb: "Normal forms [2,3,7] (type [0,1,5]) and [9,1,2] (type [0,4,5]): inverted structures, so no Tn; T4I sends 2→2, 3→1, 7→9, i.e. exactly {9,1,2}.",
    },
    {
      q: "What is the interval-class vector of the major triad {Do, Mi, Sol} = {0,4,7}?",
      opts: ["<001110>", "<011010>", "<001101>", "<010110>"],
      a: 0,
      fb: "(0,4) → ic 4; (0,7) → ic 5; (4,7) → ic 3: <001110> — identical to the minor triad's (same class 3-11).",
    },
    {
      q: "What is the prime form of {Ré, Fa, Fa♯, La} = {2,5,6,9}?",
      opts: ["[0,1,4,7]", "[0,3,4,7]", "[0,1,3,7]", "[0,3,6,7]"],
      a: 1,
      fb: "Normal form [2,5,6,9] (span 7) → −2 → [0,3,4,7]; the inversion {3,6,7,10} also gives [0,3,4,7] (symmetric set): class 4-17, the « major-minor » tetrachord.",
    },
    {
      q: "How many intervals does the vector of a pentachord count in total (sum of its six digits)?",
      opts: ["5", "10", "12", "15"],
      a: 1,
      fb: "The vector counts all pairs: k(k−1)/2 = 5 × 4 / 2 = 10.",
    },
    {
      q: "4-Z15 [0,1,4,6] and 4-Z29 [0,1,3,7] share the vector <111111> without being Tn/TnI-equivalent. What is this relation called?",
      opts: ["Z-relation", "Tn equivalence", "TnI equivalence", "Complementation"],
      a: 0,
      fb: "Same interval content, distinct classes: that is the definition of Forte's Z-relation.",
    },
    {
      q: "What is T8({Do♯, Mi, La}) = T8({1, 4, 9})?",
      opts: ["{0,5,9}", "{9,0,4}", "{1,5,8}", "{2,7,11}"],
      a: 0,
      fb: "1+8 = 9; 4+8 = 0; 9+8 = 5 (mod 12) → {9, 0, 5} = {0,5,9} (La, Do, Fa).",
    },
    {
      q: "What is the prime form of the whole-tone scale?",
      opts: ["[0,1,3,5,7,9]", "[0,2,4,6,8,10]", "[0,2,4,6,8,11]", "[0,1,4,6,8,10]"],
      a: 1,
      fb: "Six pcs spaced 2 semitones apart: class 6-35, vector <060603>.",
    },
    {
      q: "Which of these properties of a set is invariant under all transpositions AND all inversions?",
      opts: ["Its normal form", "Its interval-class vector", "Its actual pitches", "The order of its notes"],
      a: 1,
      fb: "Tn and TnI preserve all internal interval classes; the normal form, by contrast, changes with transposition.",
    },
  ],

  listenBtn: "Listen",
};

// ════════════════════════════════════════════════════════════════════════════
// DE
// ════════════════════════════════════════════════════════════════════════════

const de: Cours44Locale = {
  maitreConcept: "Tonhöhenklassen-Mengen — die Lingua franca der post-tonalen Analyse",
  maitreAnecdote:
    "Aufbauend auf den Arbeiten von Milton Babbitt (der die Begriffe pitch class und Intervallklasse prägte) systematisierte Allen Forte (1926-2014) in The Structure of Atonal Music (1973) eine Theorie der Tonhöhenklassen-Mengen: statt Akkorden und Stufen Mengen von Tönen, betrachtet bis auf Oktav- und enharmonische Gleichheit, vergleichbar unter Transposition und Umkehrung, katalogisiert und benannt — die « Forte-Nummern ». Das Standardlehrbuch ist Joseph N. Straus' Introduction to Post-Tonal Theory, dessen Konventionen dieser Kurs folgt.",
  maitreLesson:
    "Die Set-Theorie ist ein Analysewerkzeug, keine Kompositionsmethode; sie ersetzt nicht das Ohr, sie gibt ihm ein exaktes Vokabular. Und sie « entthront » Schenker nicht: Jeder herrscht über sein eigenes Repertoire.",

  introH2: "Warum eine neue Theorie?",
  introP1:
    "Um 1908-1909 — das Finale des Zweiten Quartetts, die <em>Lieder</em> aus dem <em>Buch der hängenden Gärten</em>, dann Schönbergs Drei Klavierstücke op. 11 — erscheint eine Musik, die nicht mehr auf einer Tonika ruht. Das ist die <strong>freie Atonalität</strong>: keine Stufenhierarchie mehr, keine Dissonanz <em>in Bezug auf</em> eine Referenzkonsonanz (Schönberg spricht von der « Emanzipation der Dissonanz »), keine Kadenzen mehr, die die Form gliedern. Unsere tonalen Werkzeuge verstummen: Einen Akkord zu beziffern setzt einen Grundton und geschichtete Terzen voraus, die er oft nicht mehr hat; von einer « Stufe » zu sprechen setzt eine Referenzskala voraus; und die Schenker-Reduktion (Lektionen 27 und 37) setzt genau das voraus, was diese Musik abschafft — die Prolongation eines Tonika-Dreiklangs durch konsonante lineare Bewegungen. Schenker selbst beschränkte seine Theorie ausdrücklich auf das tonale Repertoire: Für Webern oder den atonalen Schönberg braucht es etwas anderes.",
  introP2:
    "Diese konzeptuelle Lücke wurde erst spät geschlossen. Aufbauend auf den Arbeiten von Milton Babbitt (der die Begriffe <em>pitch class</em> und Intervallklasse prägte) systematisierte <strong>Allen Forte</strong> in <strong><em>The Structure of Atonal Music</em> (1973)</strong> eine Theorie der <strong>Tonhöhenklassen-Mengen</strong> (<em>pitch-class set theory</em>): statt Akkorden und Stufen <em>Mengen</em> von Tönen, betrachtet bis auf Oktav- und enharmonische Gleichheit, untereinander vergleichbar durch Transposition und Umkehrung, katalogisiert und benannt. Die Kernidee: In der freien Atonalität stammt die Kohärenz nicht mehr aus der tonalen Syntax, sondern aus der <strong>Wiederkehr kleiner Intervallsammlungen</strong> — Zellen, die der Komponist transponiert, umkehrt, überlagert. Die Set-Theorie ist heute die <em>Lingua franca</em> der post-tonalen Analyse; das Standardlehrbuch ist Joseph N. Straus' <em>Introduction to Post-Tonal Theory</em>, dessen Konventionen dieser Kurs folgt.",
  introBox:
    "<strong>Merke</strong>: Die Set-Theorie ist ein Werkzeug der <strong>Analyse</strong>, keine Kompositionsmethode; sie ersetzt nicht das Ohr, sie gibt ihm ein exaktes Vokabular. Und sie « entthront » Schenker nicht: Jeder herrscht über sein Repertoire. Wegmarken im Cursus: Lektionen 27 und 37 (Schenker, motivische Analyse) — das Referenzwerkzeug <strong>für tonale Musik</strong>, das dieser Kurs außerhalb der Tonalität ablöst; Lektionen 30, 31 und 36 (impressionistische Harmonik, Polytonalität und Quartenharmonik, Debussy/Ravel) — das Scharnier-Repertoire, dessen Kollektionen hier ihre generischen Namen erhalten.",

  pcsH2: "Tonhöhenklassen und Intervallklassen",
  hauteurH3: "Tonhöhe vs. Tonhöhenklasse",
  hauteurP1:
    "Eine <strong>Tonhöhe</strong> (<em>pitch</em>) ist ein präziser Klang in einem präzisen Register: Do4 (das eingestrichene Do des PianoPlayers) ist nicht Do5. Eine <strong>Tonhöhenklasse</strong> (<em>pitch class</em>, « pc ») ist das, was übrig bleibt, wenn man zwei Äquivalenzen annimmt:",
  hauteurEquiv: [
    "<strong>Oktaväquivalenz</strong>: Do1, Do4, Do7 gehören zur selben Klasse « Do »;",
    "<strong>enharmonische Äquivalenz</strong>: Do♯ und Ré♭ sind dieselbe Klasse (die gleichstufige Stimmung setzt sie gleich; die Atonalität verzichtet auf die funktionale Unterscheidung, die ihnen die Tonalität gab).",
  ],
  hauteurP2:
    "Es gibt also genau <strong>12 Tonhöhenklassen</strong>, nummeriert von 0 bis 11 mit der Konvention des « festen Do » <strong>Do = 0</strong>:",
  pcTableCaption: "Die 12 Tonhöhenklassen (Konvention « festes Do », Do = 0)",
  pcLabel: "pc",
  noteLabel: "Ton",
  modP:
    "Die Arithmetik ist <strong>modulo 12</strong>, wie auf einem Zifferblatt: Steigt man von Si (11) um 2, erhält man Do♯ (11 + 2 = 13 ≡ 1).",
  intervH3: "Geordnete Intervalle, ungeordnete Intervalle, Intervallklassen",
  intervP1:
    "Zwischen <strong>Tonhöhen</strong> zählt das <strong>geordnete Intervall</strong> die Halbtöne mit ihrer Richtung: von Do4 nach Si3, −1; von Do4 nach Si4, +11. Das <strong>ungeordnete Intervall</strong> ist sein Absolutbetrag. Zwischen <strong>Tonhöhenklassen</strong> beträgt das geordnete Intervall von a nach b b − a (mod 12): von Si nach Do, 0 − 11 = 1; von Do nach Si, 11. Verzichtet man schließlich auch auf die Richtung, erhält man die <strong>Intervallklasse</strong> (<em>interval class</em>, « ic »):",
  icFormule:
    "<strong>ic(i) = min(i, 12 − i)</strong> — ein Intervall und seine Umkehrung gehören zur selben Klasse.",
  icTableCaption: "Die 7 Intervallklassen (ic 0 bis ic 6)",
  icHeaders: ["ic", "Halbtöne (mod 12)", "Entsprechende tonale Intervalle"],
  icTonal: [
    "Prime, Oktave",
    "kleine Sekunde / große Septime",
    "große Sekunde / kleine Septime",
    "kleine Terz / große Sexte",
    "große Terz / kleine Sexte",
    "reine Quarte / reine Quinte",
    "Tritonus (das einzige Intervall, das gleich seiner Umkehrung ist)",
  ],
  icExemple:
    "<strong>Beispiel</strong>: von Sol♯ (8) nach Ré (2), geordnetes Intervall 2 − 8 = 6 → ic 6, Tritonus. Von Mi (4) nach Do (0), geordnetes Intervall 8 → ic(8) = min(8, 4) = 4, die Klasse « große Terz / kleine Sexte ».",

  ensH2: "Die Tonhöhenklassen-Mengen",
  defH3: "Definition",
  defP:
    "Eine <strong>Tonhöhenklassen-Menge</strong> (<em>pc set</em>) ist eine <strong>ungeordnete, wiederholungsfreie</strong> Sammlung von Tonhöhenklassen. {Sol, Sol♯, Si} = {7, 8, 11}: Reihenfolge der Nennung, Register und Verdopplung spielen keine Rolle. Die Zahl der Elemente ist die <strong>Kardinalität</strong>: Trichord (3), Tetrachord (4), Pentachord (5), Hexachord (6)…",
  opsH3: "Transposition Tn und Umkehrung TnI",
  opsP: "Zwei Operationen erzeugen die Äquivalenzen der Theorie:",
  opsList: [
    "<strong>Transposition Tn</strong>: n (mod 12) zu jedem pc addieren. Tn(x) = x + n.",
    "<strong>Umkehrung TnI</strong>: um 0 spiegeln (x ↦ −x, also 12 − x), <strong>dann</strong> um n transponieren. TnI(x) = n − x (mod 12).",
  ],
  exTravIntro:
    "<strong>Durchgerechnetes Beispiel</strong> — die Eröffnungszelle von Schönbergs Drei Klavierstücken op. 11 Nr. 1 (1909), die ersten drei Töne der Melodie: <strong>Si–Sol♯–Sol</strong>, also die Menge <strong>{7, 8, 11}</strong>.",
  opsTableCaption: "Transformationen von {7, 8, 11} (die Zelle aus op. 11)",
  opsHeaders: ["Operation", "Rechnung (auf {7, 8, 11})", "Ergebnis", "In Tönen"],
  ensP2:
    "Alle diese Mengen « klingen verwandt »: dieselben inneren Intervalle (ein Halbton und eine große Terz ineinander verschränkt), von Register und Reihenfolge abgesehen. Die Theorie erklärt zwei Mengen für <strong>äquivalent</strong>, wenn sie durch eine Transposition oder eine Umkehrung verbunden sind: Sie gehören zur selben <strong>Mengenklasse</strong> (<em>set class</em>). Das ist die exakte Verallgemeinerung eines tonalen Reflexes: Wir betrachten bereits alle Durdreiklänge als « denselben Akkord » bis auf Transposition — und die Tonalität betrachtet sogar Dur und Moll (Umkehrungen voneinander) als zwei Arten eines einzigen Objekts, des Dreiklangs.",
  ensEcoute:
    "{7, 8, 11} und dann jede Transformation anhören, erst als Akkord, dann arpeggiert — das Ohr erkennt die Verwandtschaft vor der Rechnung.",

  formesH2: "Normalform und Primform",
  formesP1:
    "Um Mengen zu vergleichen, braucht es eine <strong>kanonische Schreibweise</strong>. Zwei Ebenen: die <em>Normalform</em> (die Menge selbst, maximal kompakt angeordnet) und die <em>Primform</em> (der Repräsentant der ganzen Äquivalenzklasse, beginnend mit 0).",
  fnH3: "Normalform: der Algorithmus",
  fnSteps: [
    "Die pcs in <strong>aufsteigender Reihenfolge</strong> innerhalb einer Oktave schreiben und alle <strong>Rotationen</strong> bilden (jeder pc wird der Reihe nach erster Ton, die vorhergehenden rücken eine Oktave nach oben, +12).",
    "Die Rotation behalten, deren <strong>Außenintervall</strong> (letzter − erster) am <strong>kleinsten</strong> ist: die kompakteste Anordnung.",
    "Bei Gleichstand das Intervall vom ersten Ton zum <strong>vorletzten</strong> vergleichen, dann zum drittletzten usw.: die am stärksten <strong>nach links gepackte</strong> behalten.",
    "(Perfekter Gleichstand — vollständig symmetrische Mengen wie {0,4,8}: mit der kleinsten Zahl beginnen.)",
  ],
  fnNote:
    "<em>Anmerkung zur Strenge</em>: Dieses « links gepackt »-Kriterium ist das von Rahn und Straus, dem fast alle aktuellen Werkzeuge folgen. Fortes ursprüngliches Kriterium (1973) weicht nur bei fünf Klassen ab (5-20, 6-Z29, 6-31, 7-20, 8-26) — keine davon kommt in diesem Kurs vor.",
  rotHeaders: ["Rotation", "Spannweite"],
  exATitle: "Beispiel A — {Do, Do♯, Mi} = {0, 1, 4}",
  exAText:
    "Rotationen: (0,1,4) → Spannweite 4; (1,4,12) → 11; (4,12,13) → 9. Die kompakteste: <strong>Normalform [0,1,4]</strong>.",
  exBTitle: "Beispiel B — {Sol, La, Do♯, Ré} = {7, 9, 1, 2}",
  exBIntro: "Aufsteigende Reihenfolge: 1, 2, 7, 9.",
  exBResult: "<strong>Normalform [7, 9, 1, 2]</strong> (Sol, La, Do♯, Ré).",
  exCTitle: "Beispiel C — {Si, Do, Ré, Mi♭, Fa♯} = {11, 0, 2, 3, 6}",
  exCIntro: "Aufsteigende Reihenfolge: 0, 2, 3, 6, 11.",
  exCResult: "<strong>Normalform [11, 0, 2, 3, 6]</strong> (Si, Do, Ré, Mi♭, Fa♯).",
  fpH3: "Primform: der Algorithmus",
  fpSteps: [
    "Normalform der Menge, <strong>transponiert, sodass sie mit 0 beginnt</strong>.",
    "Normalform ihrer <strong>Umkehrung</strong> (12 − jeder pc), transponiert, sodass sie mit 0 beginnt.",
    "Die stärker <strong>nach links gepackte</strong> der beiden behalten (Ziffer für Ziffer von links vergleichen). Das ist die <strong>Primform</strong>, der eindeutige Repräsentant der Mengenklasse.",
  ],
  exA2Title: "Beispiel A (Fortsetzung)",
  exA2Text:
    "[0,1,4] beginnt bereits mit 0. Umkehrung von {0,1,4}: {0, 11, 8} = {0, 8, 11}. Rotationen: (0,8,11) → 11; (8,11,12) → 4; (11,12,20) → 9. Normalform [8,11,0], auf 0 transponiert (−8): [0,3,4]. Vergleich: <strong>[0,1,4]</strong> vs. [0,3,4] → 1 &lt; 3, die Primform ist <strong>[0,1,4]</strong>.",
  exB2Title: "Beispiel B (Fortsetzung)",
  exB2Text:
    "[7,9,1,2] auf 0 transponiert (−7): <strong>[0,2,6,7]</strong>. Umkehrung von {1,2,7,9}: {11, 10, 5, 3} = {3, 5, 10, 11}. Rotationen: (3,5,10,11) → 8; (5,10,11,15) → 10; <strong>(10,11,15,17) → 7</strong>; (11,15,17,22) → 11. Normalform [10,11,3,5], auf 0 transponiert (−10): <strong>[0,1,5,7]</strong>. Vergleich: [0,2,6,7] vs. [0,1,5,7] → 1 &lt; 2, die Primform ist <strong>[0,1,5,7]</strong> (Forte-Nummer: 4-16).",
  exC2Title: "Beispiel C (Fortsetzung)",
  exC2Text:
    "[11,0,2,3,6] auf 0 transponiert (−11): <strong>[0,1,3,4,7]</strong>. Umkehrung von {0,2,3,6,11}: {0, 10, 9, 6, 1} = {0, 1, 6, 9, 10}. Rotationen: (0,1,6,9,10) → 10; (1,6,9,10,12) → 11; <strong>(6,9,10,12,13) → 7</strong>; (9,10,12,13,18) → 9; (10,12,13,18,21) → 11. Normalform [6,9,10,0,1], auf 0 transponiert (−6): <strong>[0,3,4,6,7]</strong>. Vergleich: [0,1,3,4,7] vs. [0,3,4,6,7] → 1 &lt; 3, die Primform ist <strong>[0,1,3,4,7]</strong> (Forte-Nummer: 5-16).",
  reflexBox:
    "<strong>Reflex-Kontrolle</strong>: Eine Primform beginnt immer mit 0, und ihre letzte Ziffer ist die minimale Spannweite der Menge. Wenn Ihre Primform « nach rechts lehnt » (z. B. [0,3,4], obwohl [0,1,4] in der Klasse existiert), wurde die Umkehrung vergessen.",

  vecH2: "Der Intervallvektor und die Forte-Nummern",
  vecP1:
    "Der <strong>Intervallvektor</strong> (<em>interval-class vector</em>) zählt für eine gegebene Menge die Vorkommen jeder Intervallklasse ic 1 bis ic 6 zwischen <strong>allen Paaren</strong> von pcs. Eine Menge der Kardinalität k enthält k(k−1)/2 Paare: 3 für einen Trichord, 6 für einen Tetrachord, 10 für einen Pentachord. Er ist der « Klangfingerabdruck » der Menge: Zwei Mengen mit demselben Vektor bieten dasselbe Intervallreservoir.",
  vecCalcs: [
    "<strong>Vollständige Rechnung 1</strong> — [0, 1, 4] (die Zelle aus op. 11): Paare (0,1) → ic 1; (0,4) → ic 4; (1,4) → ic 3. Vektor: <strong>&lt;101100&gt;</strong>.",
    "<strong>Vollständige Rechnung 2</strong> — der Dur-/Moll-Dreiklang [0, 3, 7]: (0,3) → ic 3; (0,7) → ic 5; (3,7) → ic 4. Vektor: <strong>&lt;001110&gt;</strong>. (Dur und Moll, Umkehrungen voneinander, teilen diesen Vektor — die Umkehrung ändert den Vektor nie.)",
    "<strong>Vollständige Rechnung 3</strong> — der Ganzton-Tetrachord [0, 2, 4, 6]: (0,2) → ic 2; (0,4) → ic 4; (0,6) → ic 6; (2,4) → ic 2; (2,6) → ic 4; (4,6) → ic 2. Vektor: <strong>&lt;030201&gt;</strong> (drei ic 2, zwei ic 4, ein ic 6 — kein Halbton, keine kleine Terz, keine Quarte: der « Ganzton »-Klang).",
  ],
  forteH3: "Die Forte-Nummern",
  forteP:
    "Forte hat alle Mengenklassen katalogisiert (12 Trichord-Klassen, 29 Tetrachord-, 38 Pentachord-, 50 Hexachord-Klassen) und sie <strong>Kardinalität-Ordnungszahl</strong> benannt: 3-3 ist die 3. Trichord-Klasse seines Katalogs, 4-Z15 die 15. Tetrachord-Klasse. Diese Etiketten sind die universelle Referenz der analytischen Literatur.",
  zH3: "Die Z-Beziehung",
  zP1:
    "Der Vektor bestimmt die Klasse nicht immer: Zwei Mengen können <strong>denselben Vektor haben, ohne Tn/TnI-äquivalent zu sein</strong>. Forte nennt sie <strong>Z-verwandt</strong> (das Z tritt zum Namen). Das klassische Paar:",
  zList: [
    "<strong>4-Z15 = [0, 1, 4, 6]</strong>: (0,1)→1; (0,4)→4; (0,6)→6; (1,4)→3; (1,6)→5; (4,6)→2 → Vektor <strong>&lt;111111&gt;</strong>;",
    "<strong>4-Z29 = [0, 1, 3, 7]</strong>: (0,1)→1; (0,3)→3; (0,7)→5; (1,3)→2; (1,7)→6; (3,7)→4 → Vektor <strong>&lt;111111&gt;</strong>.",
  ],
  zP2:
    "Dasselbe Intervallreservoir — je ein Exemplar jeder der sechs Klassen, daher der Beiname <em>Allintervall-Tetrachorde</em> — aber verschiedene Primformen: Keiner ist Transposition oder Umkehrung des anderen.",
  famousH3: "Berühmte Mengen — Referenztabelle",
  famousCaption: "Berühmte Mengen (Forte-Name, Primform, Vektor)",
  famousHeaders: ["Forte-Name", "Primform", "Vektor", "Identität"],
  famousIdentites: [
    "chromatischer Cluster",
    "Eröffnungszelle von op. 11 Nr. 1",
    "Trichord « Sekunde + Quarte »",
    "<strong>Wiener Trichord</strong> (Halbton + Tritonus), allgegenwärtig bei Schönberg/Webern",
    "Dur-/Moll-Dreiklang",
    "übermäßiger Dreiklang",
    "unser Beispiel B (Sol–La–Do♯–Ré)",
    "Ganzton-Tetrachord",
    "verminderter Septakkord",
    "der « <strong>Farben</strong> »-Akkord, Schönberg op. 16 Nr. 3: Do–Sol♯–Si–Mi–La = {0,8,11,4,9} (Z-Partner: 5-Z37 [0,3,4,5,8])",
    "<strong>hexatonische</strong> Kollektion (1-3-Alternation)",
    "<strong>Ganztonleiter</strong> (Lektionen 30/36: Debussy)",
    "<strong>diatonische</strong> Kollektion (die Durtonleiter als <em>Menge</em>)",
    "<strong>oktatonische</strong> Kollektion (Ganzton-Halbton: Strawinsky, Bartók, Messiaen; Lektionen 30/31)",
  ],
  famousP2:
    "Diese Tabelle mit dem Ohr nachlesen (🔊-Buttons): 6-35 ohne Quarten und Halbtöne, 8-28 gesättigt mit kleinen Terzen und Tritoni, 7-35 dominiert von Quarten/Quinten (die 6 bei ic 5) — der Vektor <em>beginnt zu klingen</em>.",

  analyseH2: "Analytische Anwendung und Einführung in den Serialismus",
  segH3: "Eine Segmentierung: Schönberg, op. 11 Nr. 1, T. 1-3",
  segP1:
    "<strong>Analysieren heißt zuerst segmentieren</strong>: den Ausschnitt in plausible Einheiten zerlegen (melodische Motive, Akkorde, Stimmen), dann die Klasse jedes Segments bestimmen und nach Wiederkehrendem suchen. Die Segmentierung ist ein Akt der Interpretation — man rechtfertigt sie durch Phrasierung, Rhythmus, Register, nie durch den bloßen Wunsch, eine bekannte Menge wiederzufinden.",
  segIntro:
    "Die ersten fünf Töne der Melodie (rechte Hand, T. 1-3): <strong>Si–Sol♯–Sol–La–Fa</strong> = 11, 8, 7, 9, 5.",
  segHeaders: ["Segment", "pcs", "Normalform", "Primform", "Klasse"],
  segLabels: [
    "Si–Sol♯–Sol (die Eröffnungsgeste)",
    "Sol♯–Sol–La (Überlappung)",
    "Sol–La–Fa (der Abstieg)",
    "Alle fünf Töne",
  ],
  segP2:
    "Die Eröffnungsgeste exponiert <strong>3-3 [0,1,4]</strong> — Halbton und große Terz zu einer einzigen Klanglichkeit verschmolzen, weder Dur noch Moll. Das ist die Gründungsbeobachtung der klassischen Analysen dieses Stücks (Forte, Perle, Straus): Die Zelle [0,1,4] kehrt darin ständig wieder, transponiert, umgekehrt, vertikalisiert — Abschnitt 3 zeigte bereits T5 und T4I von {7,8,11}. Die Kohärenz, die die Tonalität durch die Syntax der Stufen sicherte, gewinnt Schönberg durch die <strong>Sättigung des Gewebes mit einer einzigen Mengenklasse</strong>.",
  serieH3: "Vom Motiv zur Reihe: die Dodekaphonie",
  serieP1:
    "Um 1921-1923 systematisiert Schönberg: statt freier Zellen eine <strong>Reihe</strong> (<em>row</em>) — eine ein für alle Mal festgelegte Ordnung der <strong>zwölf</strong> Tonhöhenklassen, Matrix des ganzen Stücks. Vier Transformationen erzeugen die Familie der Reihenformen:",
  serieFormes: [
    "<strong>P</strong> (Prime): die Reihe, transponierbar (P0…P11 — in Straus' Konvention beginnt Pn auf dem pc n);",
    "<strong>I</strong>: ihre Umkehrung (jedes Intervall gespiegelt);",
    "<strong>R</strong>: ihr Krebs (umgekehrte Reihenfolge);",
    "<strong>RI</strong>: die Krebsumkehrung.",
  ],
  serieP2:
    "Also 12 × 4 = <strong>48 Formen</strong>, die der Analytiker in einer 12 × 12-Matrix festhält (wir bauen sie hier nicht — Übung 3 berechnet ihre ersten beiden Zeilen, was genügt, um das Prinzip zu verstehen).",
  webernIntro:
    "<strong>Ein reales Beispiel</strong> — die Reihe von <strong>Weberns Symphonie op. 21 (1928)</strong>, auf 0 transponiert:",
  webernI0P: "Berechnung von <strong>I0</strong>: I0(x) = −x (mod 12), Glied für Glied angewandt:",
  webernControle:
    "Kontrolle über die geordneten Intervalle: P0 fällt um 3 (0→9), I0 steigt um 3 (0→3); P0 steigt um 1 (9→10), I0 fällt um 1 (3→2) — jedes Intervall ist tatsächlich gespiegelt.",
  webernSym:
    "Diese Reihe ist berühmt für ihre Symmetrie: Ihr <strong>zweiter Hexachord ist der Krebs des ersten, um einen Tritonus transponiert</strong>. Prüfung: erster Hexachord (0, 9, 10, 11, 7, 8); sein Krebs (8, 7, 11, 10, 9, 0); T6 dieses Krebses: (2, 1, 5, 4, 3, 6) — genau der zweite Hexachord. Folge: R6(P0) = P0… die Reihe ist ihr eigener transponierter Krebs, und die 48 Formen reduzieren sich auf <strong>24 verschiedene Formen</strong>. Der Serialismus schafft die Set-Theorie nicht ab: Die inneren Hexachorde, Tetrachorde und Trichorde einer Reihe sind Mengen, und ihre Klassen regieren die Harmonik des Werks.",

  entrainH2: "Anwendungen & Training",
  methodeH3: "Die Methode, kurz gefasst",
  methodeSteps: [
    "<strong>Segmentieren</strong> Sie den Ausschnitt (Motive, Akkorde, Schichten) und begründen Sie jeden Schnitt musikalisch.",
    "<strong>Identifizieren</strong> Sie jedes Segment: pcs → Normalform → Primform (→ Forte-Nummer, → Vektor falls nützlich).",
    "<strong>Vergleichen</strong> Sie: gleiche Klassen? präzise Tn/TnI-Beziehungen (welches n?)? Z-Beziehung? gemeinsame Teilmengen?",
    "<strong>Interpretieren</strong> Sie: Was bewirkt die Wiederkehr? motivische Sättigung, Opposition zweier Klassen, Fortschreiten von einer Klasse zur anderen… Die Klassentabelle ist nicht die Analyse; sie ist ihr Rohmaterial.",
  ],
  calcTitle: "Mengen-Rechner",
  calcHelp:
    "Wählen Sie 2 bis 6 Tonhöhenklassen (0-11): Der Motor berechnet Normalform, Primform und Intervallvektor — derselbe Motor, der jeden in diesem Kurs gedruckten Wert verriegelt.",
  calcNormalLabel: "Normalform",
  calcPrimeLabel: "Primform",
  calcVectorLabel: "Intervallvektor",
  calcEmpty: "Wählen Sie mindestens 2 Tonhöhenklassen.",
  exercicesH3: "Schriftliche Übungen (vollständige Lösungen)",
  exercices: [
    {
      titre: "Übung 1 — Ein vollständiger Steckbrief",
      consigne:
        "Bestimmen Sie für die Menge {Si♭, Si, Ré, Fa} = {10, 11, 2, 5} die Normalform, die Primform, die Forte-Nummer und den Intervallvektor.",
      controle:
        "<strong>Normalform.</strong> Aufsteigende Reihenfolge: 2, 5, 10, 11. Rotationen und Spannweiten: (2,5,10,11) → 9; (5,10,11,14) → 9; <strong>(10,11,14,17) → 7</strong>; (11,14,17,22) → 11. <strong>Normalform [10, 11, 2, 5]</strong> (Si♭, Si, Ré, Fa).<br/><strong>Primform.</strong> [10,11,2,5] − 10 → [0,1,4,7]. Umkehrung von {2,5,10,11}: {10, 7, 2, 1} = {1, 2, 7, 10}; Rotationen: (1,2,7,10) → 9; (2,7,10,13) → 11; <strong>(7,10,13,14) → 7</strong>; (10,13,14,19) → 9; Normalform [7,10,1,2] − 7 → [0,3,6,7]. Vergleich [0,1,4,7] vs. [0,3,6,7]: 1 &lt; 3. <strong>Primform [0,1,4,7]</strong>, Forte-Nummer <strong>4-18</strong>.<br/><strong>Vektor.</strong> Auf [0,1,4,7]: (0,1)→1; (0,4)→4; (0,7)→5; (1,4)→3; (1,7)→6; (4,7)→3. <strong>Vektor &lt;102111&gt;</strong> (zwei kleine Terzen, alles Übrige je einmal — außer ic 2, die fehlt).",
    },
    {
      titre: "Übung 2 — Eine Z-Beziehung beweisen",
      consigne:
        "Beweisen Sie, dass {0,1,4,6} und {0,1,3,7} Z-verwandt sind: (a) beide Vektoren berechnen; (b) beweisen, dass sie nicht Tn/TnI-äquivalent sind, indem Sie ihre Primformen berechnen.",
      controle:
        "(a) {0,1,4,6}: (0,1)→1; (0,4)→4; (0,6)→6; (1,4)→3; (1,6)→5; (4,6)→2 → <strong>&lt;111111&gt;</strong>. {0,1,3,7}: (0,1)→1; (0,3)→3; (0,7)→5; (1,3)→2; (1,7)→6; (3,7)→4 → <strong>&lt;111111&gt;</strong>. Identische Vektoren.<br/>(b) {0,1,4,6}: Rotationen (0,1,4,6) → 6; (1,4,6,12) → 11; (4,6,12,13) → 9; (6,12,13,16) → 10: Normalform [0,1,4,6], bereits auf 0. Umkehrung {0,11,8,6} = {0,6,8,11}: Rotationen (0,6,8,11) → 11; <strong>(6,8,11,12) → 6</strong>; (8,11,12,18) → 10; (11,12,18,20) → 9: [6,8,11,0] − 6 → [0,2,5,6]. Vergleich: <strong>Primform [0,1,4,6]</strong> (4-Z15).<br/>{0,1,3,7}: Rotationen (0,1,3,7) → 7; (1,3,7,12) → 11; (3,7,12,13) → 10; (7,12,13,15) → 8: Normalform [0,1,3,7]. Umkehrung {0,11,9,5} = {0,5,9,11}: Rotationen (0,5,9,11) → 11; <strong>(5,9,11,12) → 7</strong>; (9,11,12,17) → 8; (11,12,17,21) → 10: [5,9,11,0] − 5 → [0,4,6,7]. Vergleich: <strong>Primform [0,1,3,7]</strong> (4-Z29).<br/>[0,1,4,6] ≠ [0,1,3,7]: verschiedene Klassen, identische Vektoren → <strong>Z-Beziehung</strong>. ∎",
    },
    {
      titre: "Übung 3 — Reihenformen",
      consigne:
        "Gegeben die Reihe von Weberns Symphonie op. 21, auf 0 transponiert: P0 = 0, 9, 10, 11, 7, 8, 2, 1, 5, 4, 3, 6. (a) Berechnen Sie I0 und R0. (b) Prüfen Sie, dass der zweite Hexachord von P0 der um einen Tritonus transponierte Krebs des ersten ist.",
      controle:
        "(a) <strong>I0</strong> = (−x mod 12 für jedes Glied) = <strong>0, 3, 2, 1, 5, 4, 10, 11, 7, 8, 9, 6</strong>; <strong>R0</strong> = (P0 rückwärts gelesen) = <strong>6, 3, 4, 5, 1, 2, 8, 7, 11, 10, 9, 0</strong>.<br/>(b) Erster Hexachord: (0, 9, 10, 11, 7, 8). Krebs: (8, 7, 11, 10, 9, 0). T6: (8+6, 7+6, 11+6, 10+6, 9+6, 0+6) = <strong>(2, 1, 5, 4, 3, 6)</strong> = der zweite Hexachord von P0. ∎ (Man beachte: R0 = T6(P0) als geordnete Folgen — die Reihe ist ihr eigener Krebs im Tritonusabstand, daher 24 verschiedene Formen statt 48.)",
    },
    {
      titre: "Übung 4 — Eine präzise Beziehung bestimmen",
      consigne:
        "Gehören die Zellen Mi–Fa–La = {4, 5, 9} und Sol–Si–Do = {7, 11, 0} zur selben Klasse? Wenn ja, durch welche exakte Operation (Tn oder TnI, mit dem Wert von n) gelangt man von der ersten zur zweiten?",
      controle:
        "{4,5,9}: Rotationen (4,5,9) → 5; (5,9,16) → 11; (9,16,17) → 8: Normalform [4,5,9], Typ [0,1,5]. Umkehrung {8,7,3} = {3,7,8}: Rotationen <strong>(3,7,8) → 5</strong>; (7,8,15) → 8; (8,15,19) → 11: [3,7,8] − 3 → [0,4,5]. Primform <strong>[0,1,5]</strong> (3-4).<br/>{7,11,0} = {0,7,11}: Rotationen (0,7,11) → 11; <strong>(7,11,12) → 5</strong>; (11,12,19) → 8: Normalform [7,11,0], Typ [0,4,5] — die <strong>gespiegelte</strong> Struktur. Primform ebenfalls [0,1,5]: <strong>gleiche Klasse 3-4</strong>.<br/>Die eine ist vom Typ [0,1,5], die andere vom Typ [0,4,5]: Keine Transposition verbindet beide (Tn erhält die Intervallfolge). Wir suchen n mit n − {4,5,9} = {0,7,11}: n = 4 gibt 4−4 = 0, 4−5 = 11, 4−9 = 7 ✓. <strong>Operation: T4I.</strong> (Da 3-4 nicht umkehrungssymmetrisch ist, ist die Tn/TnI-Antwort exklusiv: Es ist TnI und nur TnI.)",
    },
  ],
  voirCorrige: "Lösung anzeigen",
  masquerCorrige: "Lösung verbergen",
  corrigeLabel: "Vollständige Lösung",
  quizH3: "Quiz — 10 Fragen",
  questions: [
    {
      q: "Wie lautet die Normalform von {Do, Mi, Fa♯, Si} = {0, 4, 6, 11}?",
      opts: ["[0,4,6,11]", "[11,0,4,6]", "[4,6,11,0]", "[6,11,0,4]"],
      a: 1,
      fb: "Spannweiten der Rotationen: 11, 8, 10 und 7; die Rotation (11,12,16,18), also [11,0,4,6], ist die kompakteste (Spannweite 7).",
    },
    {
      q: "Wie lautet der Intervallvektor des Wiener Trichords 3-5 [0,1,6]?",
      opts: ["<100011>", "<100110>", "<110001>", "<101100>"],
      a: 0,
      fb: "Paare: (0,1) → ic 1; (0,6) → ic 6; (1,6) → ic 5, also <100011>.",
    },
    {
      q: "Sind {Ré, Mi♭, Sol} = {2,3,7} und {La, Do♯, Ré} = {9,1,2} durch Tn, durch TnI, beides oder keines verbunden?",
      opts: ["Nur Tn", "Nur TnI", "Beides", "Keines"],
      a: 1,
      fb: "Normalformen [2,3,7] (Typ [0,1,5]) und [9,1,2] (Typ [0,4,5]): gespiegelte Strukturen, also kein Tn; T4I schickt 2→2, 3→1, 7→9, also genau {9,1,2}.",
    },
    {
      q: "Wie lautet der Intervallvektor des Durdreiklangs {Do, Mi, Sol} = {0,4,7}?",
      opts: ["<001110>", "<011010>", "<001101>", "<010110>"],
      a: 0,
      fb: "(0,4) → ic 4; (0,7) → ic 5; (4,7) → ic 3: <001110> — identisch mit dem des Molldreiklangs (gleiche Klasse 3-11).",
    },
    {
      q: "Wie lautet die Primform von {Ré, Fa, Fa♯, La} = {2,5,6,9}?",
      opts: ["[0,1,4,7]", "[0,3,4,7]", "[0,1,3,7]", "[0,3,6,7]"],
      a: 1,
      fb: "Normalform [2,5,6,9] (Spannweite 7) → −2 → [0,3,4,7]; die Umkehrung {3,6,7,10} ergibt ebenfalls [0,3,4,7] (symmetrische Menge): Klasse 4-17, der « Dur-Moll »-Tetrachord.",
    },
    {
      q: "Wie viele Intervalle zählt der Vektor eines Pentachords insgesamt (Summe seiner sechs Ziffern)?",
      opts: ["5", "10", "12", "15"],
      a: 1,
      fb: "Der Vektor zählt alle Paare: k(k−1)/2 = 5 × 4 / 2 = 10.",
    },
    {
      q: "4-Z15 [0,1,4,6] und 4-Z29 [0,1,3,7] teilen den Vektor <111111>, ohne Tn/TnI-äquivalent zu sein. Wie heißt diese Beziehung?",
      opts: ["Z-Beziehung", "Tn-Äquivalenz", "TnI-Äquivalenz", "Komplementarität"],
      a: 0,
      fb: "Gleicher Intervallgehalt, verschiedene Klassen: Das ist die Definition von Fortes Z-Beziehung.",
    },
    {
      q: "Was ergibt T8({Do♯, Mi, La}) = T8({1, 4, 9})?",
      opts: ["{0,5,9}", "{9,0,4}", "{1,5,8}", "{2,7,11}"],
      a: 0,
      fb: "1+8 = 9; 4+8 = 0; 9+8 = 5 (mod 12) → {9, 0, 5} = {0,5,9} (La, Do, Fa).",
    },
    {
      q: "Wie lautet die Primform der Ganztonleiter?",
      opts: ["[0,1,3,5,7,9]", "[0,2,4,6,8,10]", "[0,2,4,6,8,11]", "[0,1,4,6,8,10]"],
      a: 1,
      fb: "Sechs pcs im Abstand von 2 Halbtönen: Klasse 6-35, Vektor <060603>.",
    },
    {
      q: "Welche dieser Eigenschaften einer Menge ist unter allen Transpositionen UND allen Umkehrungen invariant?",
      opts: ["Ihre Normalform", "Ihr Intervallvektor", "Ihre realen Tonhöhen", "Die Reihenfolge ihrer Töne"],
      a: 1,
      fb: "Tn und TnI erhalten alle inneren Intervallklassen; die Normalform dagegen ändert sich mit der Transposition.",
    },
  ],

  listenBtn: "Anhören",
};

// ════════════════════════════════════════════════════════════════════════════
// ES
// ════════════════════════════════════════════════════════════════════════════

const es: Cours44Locale = {
  maitreConcept: "Los conjuntos de clases de alturas — la lingua franca del análisis post-tonal",
  maitreAnecdote:
    "A partir de los trabajos de Milton Babbitt (que forja las nociones de pitch class y de clase de intervalos), Allen Forte (1926-2014) sistematiza en The Structure of Atonal Music (1973) una teoría de los conjuntos de clases de alturas: en lugar de acordes y grados, conjuntos de notas considerados salvo octava y enarmonía, comparables por transposición e inversión, catalogados y nombrados — los « números de Forte ». El manual de referencia es la Introduction to Post-Tonal Theory de Joseph N. Straus, cuyas convenciones sigue este curso.",
  maitreLesson:
    "La teoría de conjuntos es una herramienta de análisis, no un método de composición; no sustituye al oído, le da un vocabulario exacto. Y no « destrona » a Schenker: cada uno reina sobre su repertorio.",

  introH2: "¿Por qué una nueva teoría?",
  introP1:
    "Hacia 1908-1909 — el final del Segundo Cuarteto, los <em>Lieder</em> del <em>Libro de los jardines colgantes</em>, luego las Tres Piezas op. 11 de Schoenberg —, aparece una música que ya no reposa sobre una tónica. Es la <strong>atonalidad libre</strong>: ya no hay jerarquía de grados, ni disonancia <em>con respecto a</em> una consonancia de referencia (Schoenberg habla de la « emancipación de la disonancia »), ni cadencias que articulen la forma. Nuestras herramientas tonales enmudecen: cifrar un acorde supone una fundamental y terceras apiladas que a menudo ya no tiene; hablar de « grado » supone una escala de referencia; y la reducción schenkeriana (lecciones 27 y 37) supone precisamente lo que esta música anula — la prolongación de una tríada de tónica mediante movimientos lineales consonantes. El propio Schenker reservaba explícitamente su teoría al repertorio tonal: para Webern o el Schoenberg atonal hace falta otra cosa.",
  introP2:
    "Este vacío conceptual solo se colmó tardíamente. A partir de los trabajos de Milton Babbitt (que forja las nociones de <em>pitch class</em> y de clase de intervalos), <strong>Allen Forte</strong> sistematiza en <strong><em>The Structure of Atonal Music</em> (1973)</strong> una teoría de los <strong>conjuntos de clases de alturas</strong> (<em>pitch-class set theory</em>): en lugar de acordes y grados, <em>conjuntos</em> de notas considerados salvo octava y enarmonía, comparables entre sí por transposición e inversión, catalogados y nombrados. La idea-fuerza: en la atonalidad libre, la coherencia ya no viene de la sintaxis tonal sino de la <strong>recurrencia de pequeñas colecciones de intervalos</strong> — células que el compositor transpone, invierte, superpone. La teoría de conjuntos es hoy la <em>lingua franca</em> del análisis post-tonal; el manual de referencia es la <em>Introduction to Post-Tonal Theory</em> de Joseph N. Straus, cuyas convenciones sigue este curso.",
  introBox:
    "<strong>Para recordar</strong>: la teoría de conjuntos es una herramienta de <strong>análisis</strong>, no un método de composición; no sustituye al oído, le da un vocabulario exacto. Y no « destrona » a Schenker: cada uno reina sobre su repertorio. Referencias en el cursus: lecciones 27 y 37 (Schenker, análisis motívico) — la herramienta de referencia <strong>para la música tonal</strong>, cuyo relevo toma este curso fuera de la tonalidad; lecciones 30, 31 y 36 (armonía impresionista, politonalidad y armonía cuartal, Debussy/Ravel) — el repertorio-bisagra cuyas colecciones reciben aquí sus nombres genéricos.",

  pcsH2: "Clases de alturas y clases de intervalos",
  hauteurH3: "Altura vs clase de altura",
  hauteurP1:
    "Una <strong>altura</strong> (<em>pitch</em>) es un sonido preciso en un registro preciso: Do4 (el do central del PianoPlayer) no es Do5. Una <strong>clase de altura</strong> (<em>pitch class</em>, « pc ») es lo que queda cuando se adoptan dos equivalencias:",
  hauteurEquiv: [
    "<strong>equivalencia de octava</strong>: Do1, Do4, Do7 pertenecen a la misma clase « Do »;",
    "<strong>equivalencia enarmónica</strong>: Do♯ y Ré♭ son la misma clase (el temperamento igual los confunde; la atonalidad renuncia a la distinción funcional que la tonalidad les daba).",
  ],
  hauteurP2:
    "Existen pues exactamente <strong>12 clases de alturas</strong>, numeradas de 0 a 11 con la convención de « do fijo » <strong>Do = 0</strong>:",
  pcTableCaption: "Las 12 clases de alturas (convención « do fijo », Do = 0)",
  pcLabel: "pc",
  noteLabel: "Nota",
  modP:
    "La aritmética es <strong>módulo 12</strong>, como en la esfera de un reloj: subir 2 desde Si (11) da Do♯ (11 + 2 = 13 ≡ 1).",
  intervH3: "Intervalos ordenados, no ordenados, clases de intervalos",
  intervP1:
    "Entre <strong>alturas</strong>, el <strong>intervalo ordenado</strong> cuenta los semitonos con su dirección: de Do4 a Si3, −1; de Do4 a Si4, +11. El <strong>intervalo no ordenado</strong> es su valor absoluto. Entre <strong>clases de alturas</strong>, el intervalo ordenado de a hacia b vale b − a (mod 12): de Si hacia Do, 0 − 11 = 1; de Do hacia Si, 11. Por último, si se renuncia también a la dirección, se obtiene la <strong>clase de intervalos</strong> (<em>interval class</em>, « ic »):",
  icFormule:
    "<strong>ic(i) = min(i, 12 − i)</strong> — un intervalo y su inversión pertenecen a la misma clase.",
  icTableCaption: "Las 7 clases de intervalos (ic 0 a ic 6)",
  icHeaders: ["ic", "Semitonos (mod 12)", "Intervalos tonales correspondientes"],
  icTonal: [
    "unísono, octava",
    "segunda menor / séptima mayor",
    "segunda mayor / séptima menor",
    "tercera menor / sexta mayor",
    "tercera mayor / sexta menor",
    "cuarta justa / quinta justa",
    "tritono (único intervalo igual a su inversión)",
  ],
  icExemple:
    "<strong>Ejemplo</strong>: de Sol♯ (8) hacia Ré (2), intervalo ordenado 2 − 8 = 6 → ic 6, tritono. De Mi (4) hacia Do (0), intervalo ordenado 8 → ic(8) = min(8, 4) = 4, la clase « tercera mayor / sexta menor ».",

  ensH2: "Los conjuntos de clases de alturas",
  defH3: "Definición",
  defP:
    "Un <strong>conjunto de clases de alturas</strong> (<em>pc set</em>) es una colección <strong>no ordenada y sin repetición</strong> de clases de alturas. {Sol, Sol♯, Si} = {7, 8, 11}: no importan el orden de enunciación, el registro ni la duplicación. El número de elementos es la <strong>cardinalidad</strong>: tricordo (3), tetracordo (4), pentacordo (5), hexacordo (6)…",
  opsH3: "Transposición Tn e inversión TnI",
  opsP: "Dos operaciones engendran las equivalencias de la teoría:",
  opsList: [
    "<strong>Transposición Tn</strong>: sumar n (mod 12) a cada pc. Tn(x) = x + n.",
    "<strong>Inversión TnI</strong>: invertir en torno a 0 (x ↦ −x, es decir 12 − x), <strong>luego</strong> transponer n. TnI(x) = n − x (mod 12).",
  ],
  exTravIntro:
    "<strong>Ejemplo trabajado</strong> — la célula inicial de las Tres Piezas op. 11 n.º 1 (1909) de Schoenberg, las tres primeras notas de la melodía: <strong>Si–Sol♯–Sol</strong>, es decir el conjunto <strong>{7, 8, 11}</strong>.",
  opsTableCaption: "Transformaciones de {7, 8, 11} (la célula del op. 11)",
  opsHeaders: ["Operación", "Cálculo (sobre {7, 8, 11})", "Resultado", "En notas"],
  ensP2:
    "Todos estos conjuntos « suenan emparentados »: mismos intervalos internos (un semitono y una tercera mayor imbricados), dejando aparte registro y orden. La teoría declara <strong>equivalentes</strong> dos conjuntos relacionados por una transposición o una inversión: pertenecen a la misma <strong>clase de conjuntos</strong> (<em>set class</em>). Es la exacta generalización de un reflejo tonal: ya consideramos todos los acordes perfectos mayores como « el mismo acorde » salvo transposición — y la tonalidad considera incluso mayor y menor (inversiones uno de otro) como dos especies de un mismo objeto, la tríada.",
  ensEcoute:
    "Escuche {7, 8, 11} y luego cada transformación, en bloque y arpegiada — el oído reconoce el parentesco antes que el cálculo.",

  formesH2: "Forma normal y forma prima",
  formesP1:
    "Para comparar conjuntos hace falta una <strong>escritura canónica</strong>. Dos niveles: la <em>forma normal</em> (el conjunto mismo, ordenado del modo más compacto) y la <em>forma prima</em> (el representante de toda la clase de equivalencia, empezando por 0).",
  fnH3: "Forma normal: el algoritmo",
  fnSteps: [
    "Escribir los pcs en <strong>orden creciente</strong> dentro de una octava, y formar todas las <strong>rotaciones</strong> (cada pc pasa a ser por turno la primera nota, las precedentes suben una octava, +12).",
    "Retener la rotación cuyo <strong>intervalo exterior</strong> (última − primera) sea el <strong>más pequeño</strong>: el conjunto más compacto.",
    "En caso de empate, comparar el intervalo de la primera nota a la <strong>penúltima</strong>, luego a la antepenúltima, etc.: retener el más <strong>compactado a la izquierda</strong>.",
    "(Empate perfecto — conjuntos totalmente simétricos como {0,4,8}: empezar por el número más pequeño.)",
  ],
  fnNote:
    "<em>Nota de rigor</em>: este criterio de desempate « compactado a la izquierda » es el de Rahn y de Straus, seguido por la casi totalidad de las herramientas actuales. El criterio original de Forte (1973) difiere solo para cinco clases (5-20, 6-Z29, 6-31, 7-20, 8-26) — ninguna aparece en este curso.",
  rotHeaders: ["Rotación", "Amplitud"],
  exATitle: "Ejemplo A — {Do, Do♯, Mi} = {0, 1, 4}",
  exAText:
    "Rotaciones: (0,1,4) → amplitud 4; (1,4,12) → 11; (4,12,13) → 9. La más compacta: <strong>forma normal [0,1,4]</strong>.",
  exBTitle: "Ejemplo B — {Sol, La, Do♯, Ré} = {7, 9, 1, 2}",
  exBIntro: "Orden creciente: 1, 2, 7, 9.",
  exBResult: "<strong>Forma normal [7, 9, 1, 2]</strong> (Sol, La, Do♯, Ré).",
  exCTitle: "Ejemplo C — {Si, Do, Ré, Mi♭, Fa♯} = {11, 0, 2, 3, 6}",
  exCIntro: "Orden creciente: 0, 2, 3, 6, 11.",
  exCResult: "<strong>Forma normal [11, 0, 2, 3, 6]</strong> (Si, Do, Ré, Mi♭, Fa♯).",
  fpH3: "Forma prima: el algoritmo",
  fpSteps: [
    "Forma normal del conjunto, <strong>transpuesta para empezar en 0</strong>.",
    "Forma normal de su <strong>inversión</strong> (12 − cada pc), transpuesta para empezar en 0.",
    "Retener la más <strong>compactada a la izquierda</strong> de las dos (comparar cifra a cifra desde la izquierda). Es la <strong>forma prima</strong>, representante único de la clase de conjuntos.",
  ],
  exA2Title: "Ejemplo A (continuación)",
  exA2Text:
    "[0,1,4] ya está en 0. Inversión de {0,1,4}: {0, 11, 8} = {0, 8, 11}. Rotaciones: (0,8,11) → 11; (8,11,12) → 4; (11,12,20) → 9. Forma normal [8,11,0], transpuesta a 0 (−8): [0,3,4]. Comparación: <strong>[0,1,4]</strong> vs [0,3,4] → 1 &lt; 3, la forma prima es <strong>[0,1,4]</strong>.",
  exB2Title: "Ejemplo B (continuación)",
  exB2Text:
    "[7,9,1,2] transpuesta a 0 (−7): <strong>[0,2,6,7]</strong>. Inversión de {1,2,7,9}: {11, 10, 5, 3} = {3, 5, 10, 11}. Rotaciones: (3,5,10,11) → 8; (5,10,11,15) → 10; <strong>(10,11,15,17) → 7</strong>; (11,15,17,22) → 11. Forma normal [10,11,3,5], transpuesta a 0 (−10): <strong>[0,1,5,7]</strong>. Comparación: [0,2,6,7] vs [0,1,5,7] → 1 &lt; 2, la forma prima es <strong>[0,1,5,7]</strong> (número de Forte: 4-16).",
  exC2Title: "Ejemplo C (continuación)",
  exC2Text:
    "[11,0,2,3,6] transpuesta a 0 (−11): <strong>[0,1,3,4,7]</strong>. Inversión de {0,2,3,6,11}: {0, 10, 9, 6, 1} = {0, 1, 6, 9, 10}. Rotaciones: (0,1,6,9,10) → 10; (1,6,9,10,12) → 11; <strong>(6,9,10,12,13) → 7</strong>; (9,10,12,13,18) → 9; (10,12,13,18,21) → 11. Forma normal [6,9,10,0,1], transpuesta a 0 (−6): <strong>[0,3,4,6,7]</strong>. Comparación: [0,1,3,4,7] vs [0,3,4,6,7] → 1 &lt; 3, la forma prima es <strong>[0,1,3,4,7]</strong> (número de Forte: 5-16).",
  reflexBox:
    "<strong>Verificación-reflejo</strong>: una forma prima empieza siempre por 0, y su última cifra es la amplitud mínima del conjunto. Si su forma prima « se inclina a la derecha » (p. ej. [0,3,4] cuando [0,1,4] existe en la clase), es que se olvidó la inversión.",

  vecH2: "El vector interválico y los números de Forte",
  vecP1:
    "El <strong>vector interválico</strong> (<em>interval-class vector</em>) cuenta, para un conjunto dado, el número de ocurrencias de cada clase de intervalos ic 1 a ic 6, entre <strong>todos los pares</strong> de pcs. Un conjunto de cardinalidad k contiene k(k−1)/2 pares: 3 para un tricordo, 6 para un tetracordo, 10 para un pentacordo. Es la « huella sonora » del conjunto: dos conjuntos con el mismo vector ofrecen la misma reserva de intervalos.",
  vecCalcs: [
    "<strong>Cálculo completo 1</strong> — [0, 1, 4] (la célula del op. 11): pares (0,1) → ic 1; (0,4) → ic 4; (1,4) → ic 3. Vector: <strong>&lt;101100&gt;</strong>.",
    "<strong>Cálculo completo 2</strong> — la tríada mayor/menor [0, 3, 7]: (0,3) → ic 3; (0,7) → ic 5; (3,7) → ic 4. Vector: <strong>&lt;001110&gt;</strong>. (Mayor y menor, inversiones una de otra, comparten este vector — la inversión no cambia nunca el vector.)",
    "<strong>Cálculo completo 3</strong> — el tetracordo de tonos enteros [0, 2, 4, 6]: (0,2) → ic 2; (0,4) → ic 4; (0,6) → ic 6; (2,4) → ic 2; (2,6) → ic 4; (4,6) → ic 2. Vector: <strong>&lt;030201&gt;</strong> (tres ic 2, dos ic 4, un ic 6 — ningún semitono, ninguna tercera menor, ninguna cuarta: el sonido « tonos enteros »).",
  ],
  forteH3: "Los números de Forte",
  forteP:
    "Forte catalogó todas las clases de conjuntos (12 clases de tricordos, 29 de tetracordos, 38 de pentacordos, 50 de hexacordos) y las nombró <strong>cardinalidad-número de orden</strong>: 3-3 es la 3.ª clase de tricordos de su catálogo, 4-Z15 la 15.ª clase de tetracordos. Estas etiquetas son la referencia universal de los escritos analíticos.",
  zH3: "La relación Z",
  zP1:
    "El vector no siempre determina la clase: dos conjuntos pueden tener <strong>el mismo vector sin ser equivalentes Tn/TnI</strong>. Forte los dice en <strong>relación Z</strong> (la Z se añade al nombre). Par clásico:",
  zList: [
    "<strong>4-Z15 = [0, 1, 4, 6]</strong>: (0,1)→1; (0,4)→4; (0,6)→6; (1,4)→3; (1,6)→5; (4,6)→2 → vector <strong>&lt;111111&gt;</strong>;",
    "<strong>4-Z29 = [0, 1, 3, 7]</strong>: (0,1)→1; (0,3)→3; (0,7)→5; (1,3)→2; (1,7)→6; (3,7)→4 → vector <strong>&lt;111111&gt;</strong>.",
  ],
  zP2:
    "La misma reserva de intervalos — un ejemplar de cada una de las seis clases, de ahí el apodo de <em>tetracordos de todos los intervalos</em> — pero formas primas distintas: no son ni transposición ni inversión uno de otro.",
  famousH3: "Conjuntos célebres — tabla de referencia",
  famousCaption: "Conjuntos célebres (nombre de Forte, forma prima, vector)",
  famousHeaders: ["Nombre de Forte", "Forma prima", "Vector", "Identidad"],
  famousIdentites: [
    "clúster cromático",
    "célula inicial del op. 11 n.º 1",
    "tricordo « segunda + cuarta »",
    "<strong>tricordo vienés</strong> (semitono + tritono), omnipresente en Schoenberg/Webern",
    "tríada mayor/menor",
    "tríada aumentada",
    "nuestro ejemplo B (Sol–La–Do♯–Ré)",
    "tetracordo de tonos enteros",
    "séptima disminuida",
    "acorde « <strong>Farben</strong> », Schoenberg op. 16 n.º 3: Do–Sol♯–Si–Mi–La = {0,8,11,4,9} (asociado Z: 5-Z37 [0,3,4,5,8])",
    "colección <strong>hexatónica</strong> (alternancia 1-3)",
    "escala de <strong>tonos enteros</strong> (lecciones 30/36: Debussy)",
    "colección <strong>diatónica</strong> (la escala mayor como <em>conjunto</em>)",
    "colección <strong>octatónica</strong> (tono-semitono: Stravinski, Bartók, Messiaen; lecciones 30/31)",
  ],
  famousP2:
    "Releer esta tabla con el oído (botones 🔊): 6-35 sin cuartas ni semitonos, 8-28 saturada de terceras menores y tritonos, 7-35 dominada por las cuartas/quintas (el 6 en ic 5) — el vector <em>se pone a sonar</em>.",

  analyseH2: "Aplicación analítica e introducción al serialismo",
  segH3: "Una segmentación: Schoenberg, op. 11 n.º 1, cc. 1-3",
  segP1:
    "<strong>Analizar es primero segmentar</strong>: recortar el fragmento en unidades plausibles (motivos melódicos, acordes, voces), luego identificar la clase de cada segmento y buscar las recurrencias. La segmentación es un acto de interpretación — se justifica por el fraseo, el ritmo, el registro, nunca por el mero deseo de reencontrar un conjunto conocido.",
  segIntro:
    "Las cinco primeras notas de la melodía (mano derecha, cc. 1-3): <strong>Si–Sol♯–Sol–La–Fa</strong> = 11, 8, 7, 9, 5.",
  segHeaders: ["Segmento", "pcs", "Forma normal", "Forma prima", "Clase"],
  segLabels: [
    "Si–Sol♯–Sol (la incisión inicial)",
    "Sol♯–Sol–La (solapamiento)",
    "Sol–La–Fa (la recaída)",
    "Las cinco notas",
  ],
  segP2:
    "El gesto inicial expone <strong>3-3 [0,1,4]</strong> — semitono y tercera mayor fundidos en una sola sonoridad, ni mayor ni menor. Es la observación fundadora de los análisis clásicos de esta pieza (Forte, Perle, Straus): la célula [0,1,4] vuelve constantemente, transpuesta, invertida, verticalizada — la sección 3 ya mostró T5 y T4I de {7,8,11}. La coherencia que la tonalidad aseguraba por la sintaxis de los grados, Schoenberg la obtiene por la <strong>saturación del tejido con una misma clase de conjuntos</strong>.",
  serieH3: "Del motivo a la serie: el dodecafonismo",
  serieP1:
    "Hacia 1921-1923, Schoenberg sistematiza: en lugar de células libres, una <strong>serie</strong> (<em>row</em>) — un orden fijado de una vez por todas de las <strong>doce</strong> clases de alturas, matriz de toda la pieza. Cuatro transformaciones engendran la familia de las formas seriales:",
  serieFormes: [
    "<strong>P</strong> (prima): la serie, transponible (P0…P11 — en la convención de Straus, Pn empieza en el pc n);",
    "<strong>I</strong>: su inversión (cada intervalo invertido);",
    "<strong>R</strong>: su retrogradación (orden inverso);",
    "<strong>RI</strong>: el retrógrado de la inversión.",
  ],
  serieP2:
    "O sea 12 × 4 = <strong>48 formas</strong>, que el analista consigna en una matriz 12 × 12 (no la construiremos aquí — el ejercicio 3 calcula sus dos primeras líneas, lo que basta para comprender el principio).",
  webernIntro:
    "<strong>Ejemplo real</strong> — la serie de la <strong>Sinfonía op. 21 (1928) de Webern</strong>, transpuesta a 0:",
  webernI0P: "Cálculo de <strong>I0</strong>: I0(x) = −x (mod 12), aplicado término a término:",
  webernControle:
    "Control por los intervalos ordenados: P0 baja 3 (0→9), I0 sube 3 (0→3); P0 sube 1 (9→10), I0 baja 1 (3→2) — cada intervalo queda efectivamente invertido.",
  webernSym:
    "Esta serie es célebre por su simetría: su <strong>segundo hexacordo es el retrógrado del primero transpuesto al tritono</strong>. Verificación: primer hexacordo (0, 9, 10, 11, 7, 8); su retrógrado (8, 7, 11, 10, 9, 0); T6 de ese retrógrado: (2, 1, 5, 4, 3, 6) — exactamente el segundo hexacordo. Consecuencia: R6(P0) = P0… la serie es su propio retrógrado transpuesto, y las 48 formas se reducen a <strong>24 formas distintas</strong>. El serialismo no anula la teoría de conjuntos: los hexacordos, tetracordos y tricordos internos de una serie son conjuntos, y sus clases gobiernan la armonía de la obra.",

  entrainH2: "Aplicaciones y entrenamiento",
  methodeH3: "El método, en resumen",
  methodeSteps: [
    "<strong>Segmentar</strong> el fragmento (motivos, acordes, estratos), justificando musicalmente cada corte.",
    "<strong>Identificar</strong> cada segmento: pcs → forma normal → forma prima (→ número de Forte, → vector si es útil).",
    "<strong>Comparar</strong>: ¿mismas clases? ¿relaciones Tn/TnI precisas (qué n)? ¿relación Z? ¿subconjuntos comunes?",
    "<strong>Interpretar</strong>: ¿qué hace la recurrencia? saturación motívica, oposición de dos clases, progresión de una clase hacia otra… La tabla de clases no es el análisis; es su materia prima.",
  ],
  calcTitle: "Calculadora de conjuntos",
  calcHelp:
    "Seleccione de 2 a 6 clases de alturas (0-11): el motor calcula la forma normal, la forma prima y el vector interválico — el mismo motor que verifica cada valor impreso en este curso.",
  calcNormalLabel: "Forma normal",
  calcPrimeLabel: "Forma prima",
  calcVectorLabel: "Vector interválico",
  calcEmpty: "Seleccione al menos 2 clases de alturas.",
  exercicesH3: "Ejercicios escritos (soluciones completas)",
  exercices: [
    {
      titre: "Ejercicio 1 — Carné de identidad completo",
      consigne:
        "Para el conjunto {Si♭, Si, Ré, Fa} = {10, 11, 2, 5}, determinar la forma normal, la forma prima, el número de Forte y el vector interválico.",
      controle:
        "<strong>Forma normal.</strong> Orden creciente: 2, 5, 10, 11. Rotaciones y amplitudes: (2,5,10,11) → 9; (5,10,11,14) → 9; <strong>(10,11,14,17) → 7</strong>; (11,14,17,22) → 11. <strong>Forma normal [10, 11, 2, 5]</strong> (Si♭, Si, Ré, Fa).<br/><strong>Forma prima.</strong> [10,11,2,5] − 10 → [0,1,4,7]. Inversión de {2,5,10,11}: {10, 7, 2, 1} = {1, 2, 7, 10}; rotaciones: (1,2,7,10) → 9; (2,7,10,13) → 11; <strong>(7,10,13,14) → 7</strong>; (10,13,14,19) → 9; forma normal [7,10,1,2] − 7 → [0,3,6,7]. Comparación [0,1,4,7] vs [0,3,6,7]: 1 &lt; 3. <strong>Forma prima [0,1,4,7]</strong>, número de Forte <strong>4-18</strong>.<br/><strong>Vector.</strong> Sobre [0,1,4,7]: (0,1)→1; (0,4)→4; (0,7)→5; (1,4)→3; (1,7)→6; (4,7)→3. <strong>Vector &lt;102111&gt;</strong> (dos terceras menores, todo lo demás en un ejemplar — salvo ic 2, ausente).",
    },
    {
      titre: "Ejercicio 2 — Demostrar una relación Z",
      consigne:
        "Demostrar que {0,1,4,6} y {0,1,3,7} están en relación Z: (a) calcular sus dos vectores; (b) probar que no son equivalentes Tn/TnI calculando sus formas primas.",
      controle:
        "(a) {0,1,4,6}: (0,1)→1; (0,4)→4; (0,6)→6; (1,4)→3; (1,6)→5; (4,6)→2 → <strong>&lt;111111&gt;</strong>. {0,1,3,7}: (0,1)→1; (0,3)→3; (0,7)→5; (1,3)→2; (1,7)→6; (3,7)→4 → <strong>&lt;111111&gt;</strong>. Vectores idénticos.<br/>(b) {0,1,4,6}: rotaciones (0,1,4,6) → 6; (1,4,6,12) → 11; (4,6,12,13) → 9; (6,12,13,16) → 10: forma normal [0,1,4,6], ya en 0. Inversión {0,11,8,6} = {0,6,8,11}: rotaciones (0,6,8,11) → 11; <strong>(6,8,11,12) → 6</strong>; (8,11,12,18) → 10; (11,12,18,20) → 9: [6,8,11,0] − 6 → [0,2,5,6]. Comparación: <strong>forma prima [0,1,4,6]</strong> (4-Z15).<br/>{0,1,3,7}: rotaciones (0,1,3,7) → 7; (1,3,7,12) → 11; (3,7,12,13) → 10; (7,12,13,15) → 8: forma normal [0,1,3,7]. Inversión {0,11,9,5} = {0,5,9,11}: rotaciones (0,5,9,11) → 11; <strong>(5,9,11,12) → 7</strong>; (9,11,12,17) → 8; (11,12,17,21) → 10: [5,9,11,0] − 5 → [0,4,6,7]. Comparación: <strong>forma prima [0,1,3,7]</strong> (4-Z29).<br/>[0,1,4,6] ≠ [0,1,3,7]: clases distintas, vectores idénticos → <strong>relación Z</strong>. ∎",
    },
    {
      titre: "Ejercicio 3 — Formas seriales",
      consigne:
        "Sea la serie de la Sinfonía op. 21 de Webern, transpuesta a 0: P0 = 0, 9, 10, 11, 7, 8, 2, 1, 5, 4, 3, 6. (a) Calcular I0 y R0. (b) Verificar que el segundo hexacordo de P0 es el retrógrado del primero transpuesto al tritono.",
      controle:
        "(a) <strong>I0</strong> = (−x mod 12 para cada término) = <strong>0, 3, 2, 1, 5, 4, 10, 11, 7, 8, 9, 6</strong>; <strong>R0</strong> = (P0 leído al revés) = <strong>6, 3, 4, 5, 1, 2, 8, 7, 11, 10, 9, 0</strong>.<br/>(b) Primer hexacordo: (0, 9, 10, 11, 7, 8). Retrógrado: (8, 7, 11, 10, 9, 0). T6: (8+6, 7+6, 11+6, 10+6, 9+6, 0+6) = <strong>(2, 1, 5, 4, 3, 6)</strong> = el segundo hexacordo de P0. ∎ (Obsérvese que R0 = T6(P0) como sucesiones ordenadas: la serie es su propio retrógrado al tritono, de ahí 24 formas distintas en lugar de 48.)",
    },
    {
      titre: "Ejercicio 4 — Identificar una relación precisa",
      consigne:
        "¿Las células Mi–Fa–La = {4, 5, 9} y Sol–Si–Do = {7, 11, 0} pertenecen a la misma clase? Si es así, ¿por qué operación exacta (Tn o TnI, con el valor de n) se pasa de la primera a la segunda?",
      controle:
        "{4,5,9}: rotaciones (4,5,9) → 5; (5,9,16) → 11; (9,16,17) → 8: forma normal [4,5,9], tipo [0,1,5]. Inversión {8,7,3} = {3,7,8}: rotaciones <strong>(3,7,8) → 5</strong>; (7,8,15) → 8; (8,15,19) → 11: [3,7,8] − 3 → [0,4,5]. Forma prima <strong>[0,1,5]</strong> (3-4).<br/>{7,11,0} = {0,7,11}: rotaciones (0,7,11) → 11; <strong>(7,11,12) → 5</strong>; (11,12,19) → 8: forma normal [7,11,0], tipo [0,4,5] — la estructura <strong>invertida</strong>. Forma prima [0,1,5] también: <strong>misma clase 3-4</strong>.<br/>Una es de tipo [0,1,5], la otra de tipo [0,4,5]: ninguna transposición las relaciona (Tn conserva la sucesión de los intervalos). Buscamos n tal que n − {4,5,9} = {0,7,11}: n = 4 da 4−4 = 0, 4−5 = 11, 4−9 = 7 ✓. <strong>Operación: T4I.</strong> (Como 3-4 no es simétrico por inversión, la respuesta Tn/TnI es exclusiva: es TnI y solo TnI.)",
    },
  ],
  voirCorrige: "Ver la solución",
  masquerCorrige: "Ocultar la solución",
  corrigeLabel: "Solución completa",
  quizH3: "Quiz — 10 preguntas",
  questions: [
    {
      q: "¿Cuál es la forma normal de {Do, Mi, Fa♯, Si} = {0, 4, 6, 11}?",
      opts: ["[0,4,6,11]", "[11,0,4,6]", "[4,6,11,0]", "[6,11,0,4]"],
      a: 1,
      fb: "Amplitudes de las rotaciones: 11, 8, 10 y 7; la rotación (11,12,16,18), es decir [11,0,4,6], es la más compacta (amplitud 7).",
    },
    {
      q: "¿Cuál es el vector interválico del tricordo vienés 3-5 [0,1,6]?",
      opts: ["<100011>", "<100110>", "<110001>", "<101100>"],
      a: 0,
      fb: "Pares: (0,1) → ic 1; (0,6) → ic 6; (1,6) → ic 5, de donde <100011>.",
    },
    {
      q: "¿{Ré, Mi♭, Sol} = {2,3,7} y {La, Do♯, Ré} = {9,1,2} están relacionados por Tn, por TnI, ambos o ninguno?",
      opts: ["Solo Tn", "Solo TnI", "Ambos", "Ninguno"],
      a: 1,
      fb: "Formas normales [2,3,7] (tipo [0,1,5]) y [9,1,2] (tipo [0,4,5]): estructuras invertidas, luego no hay Tn; T4I envía 2→2, 3→1, 7→9, es decir exactamente {9,1,2}.",
    },
    {
      q: "¿Cuál es el vector interválico de la tríada mayor {Do, Mi, Sol} = {0,4,7}?",
      opts: ["<001110>", "<011010>", "<001101>", "<010110>"],
      a: 0,
      fb: "(0,4) → ic 4; (0,7) → ic 5; (4,7) → ic 3: <001110> — idéntico al de la tríada menor (misma clase 3-11).",
    },
    {
      q: "¿Cuál es la forma prima de {Ré, Fa, Fa♯, La} = {2,5,6,9}?",
      opts: ["[0,1,4,7]", "[0,3,4,7]", "[0,1,3,7]", "[0,3,6,7]"],
      a: 1,
      fb: "Forma normal [2,5,6,9] (amplitud 7) → −2 → [0,3,4,7]; la inversión {3,6,7,10} da también [0,3,4,7] (conjunto simétrico): clase 4-17, el tetracordo « mayor-menor ».",
    },
    {
      q: "¿Cuántos intervalos cuenta en total el vector de un pentacordo (suma de sus seis cifras)?",
      opts: ["5", "10", "12", "15"],
      a: 1,
      fb: "El vector cuenta todos los pares: k(k−1)/2 = 5 × 4 / 2 = 10.",
    },
    {
      q: "4-Z15 [0,1,4,6] y 4-Z29 [0,1,3,7] tienen el mismo vector <111111> sin ser equivalentes Tn/TnI. ¿Cómo se llama esta relación?",
      opts: ["Relación Z", "Equivalencia Tn", "Equivalencia TnI", "Complementariedad"],
      a: 0,
      fb: "Mismo contenido interválico, clases distintas: es la definición de la relación Z de Forte.",
    },
    {
      q: "¿Cuánto vale T8({Do♯, Mi, La}) = T8({1, 4, 9})?",
      opts: ["{0,5,9}", "{9,0,4}", "{1,5,8}", "{2,7,11}"],
      a: 0,
      fb: "1+8 = 9; 4+8 = 0; 9+8 = 5 (mod 12) → {9, 0, 5} = {0,5,9} (La, Do, Fa).",
    },
    {
      q: "¿Cuál es la forma prima de la escala de tonos enteros?",
      opts: ["[0,1,3,5,7,9]", "[0,2,4,6,8,10]", "[0,2,4,6,8,11]", "[0,1,4,6,8,10]"],
      a: 1,
      fb: "Seis pcs espaciados 2 semitonos: clase 6-35, vector <060603>.",
    },
    {
      q: "¿Cuál de estas propiedades de un conjunto es invariante bajo todas las transposiciones Y todas las inversiones?",
      opts: ["Su forma normal", "Su vector interválico", "Sus alturas reales", "El orden de sus notas"],
      a: 1,
      fb: "Tn y TnI conservan todas las clases de intervalos internas; la forma normal, en cambio, cambia con la transposición.",
    },
  ],

  listenBtn: "Escuchar",
};

// ════════════════════════════════════════════════════════════════════════════
// IT
// ════════════════════════════════════════════════════════════════════════════

const it: Cours44Locale = {
  maitreConcept: "Gli insiemi di classi di altezze — la lingua franca dell'analisi post-tonale",
  maitreAnecdote:
    "A partire dai lavori di Milton Babbitt (che forgia le nozioni di pitch class e di classe di intervalli), Allen Forte (1926-2014) sistematizza in The Structure of Atonal Music (1973) una teoria degli insiemi di classi di altezze: al posto di accordi e gradi, insiemi di note considerati a meno dell'ottava e dell'enarmonia, confrontabili per trasposizione e inversione, catalogati e nominati — i « numeri di Forte ». Il manuale di riferimento è l'Introduction to Post-Tonal Theory di Joseph N. Straus, di cui questo corso segue le convenzioni.",
  maitreLesson:
    "La teoria degli insiemi è uno strumento di analisi, non un metodo di composizione; non sostituisce l'orecchio, gli dà un vocabolario esatto. E non « detronizza » Schenker: ciascuno regna sul proprio repertorio.",

  introH2: "Perché una nuova teoria?",
  introP1:
    "Verso il 1908-1909 — il finale del Secondo Quartetto, i <em>Lieder</em> del <em>Libro dei giardini pensili</em>, poi i Tre Pezzi op. 11 di Schönberg —, appare una musica che non poggia più su una tonica. È l'<strong>atonalità libera</strong>: niente più gerarchia di gradi, niente dissonanza <em>rispetto a</em> una consonanza di riferimento (Schönberg parla di « emancipazione della dissonanza »), niente cadenze che articolino la forma. I nostri strumenti tonali ammutoliscono: cifrare un accordo presuppone una fondamentale e terze sovrapposte che spesso non ha più; parlare di « grado » presuppone una scala di riferimento; e la riduzione schenkeriana (lezioni 27 e 37) presuppone precisamente ciò che questa musica abolisce — la prolungazione di una triade di tonica mediante movimenti lineari consonanti. Schenker stesso riservava esplicitamente la sua teoria al repertorio tonale: per Webern o lo Schönberg atonale serve altro.",
  introP2:
    "Questo vuoto concettuale è stato colmato solo tardivamente. A partire dai lavori di Milton Babbitt (che forgia le nozioni di <em>pitch class</em> e di classe di intervalli), <strong>Allen Forte</strong> sistematizza in <strong><em>The Structure of Atonal Music</em> (1973)</strong> una teoria degli <strong>insiemi di classi di altezze</strong> (<em>pitch-class set theory</em>): al posto di accordi e gradi, <em>insiemi</em> di note considerati a meno dell'ottava e dell'enarmonia, confrontabili tra loro per trasposizione e inversione, catalogati e nominati. L'idea-forza: nell'atonalità libera, la coerenza non viene più dalla sintassi tonale ma dalla <strong>ricorrenza di piccole collezioni di intervalli</strong> — cellule che il compositore traspone, inverte, sovrappone. La teoria degli insiemi è oggi la <em>lingua franca</em> dell'analisi post-tonale; il manuale di riferimento è l'<em>Introduction to Post-Tonal Theory</em> di Joseph N. Straus, di cui questo corso segue le convenzioni.",
  introBox:
    "<strong>Da ricordare</strong>: la teoria degli insiemi è uno strumento di <strong>analisi</strong>, non un metodo di composizione; non sostituisce l'orecchio, gli dà un vocabolario esatto. E non « detronizza » Schenker: ciascuno regna sul proprio repertorio. Riferimenti nel percorso: lezioni 27 e 37 (Schenker, analisi motivica) — lo strumento di riferimento <strong>per la musica tonale</strong>, di cui questo corso prende il testimone fuori dalla tonalità; lezioni 30, 31 e 36 (armonia impressionista, politonalità e armonia quartale, Debussy/Ravel) — il repertorio-cerniera le cui collezioni ricevono qui i loro nomi generici.",

  pcsH2: "Classi di altezze e classi di intervalli",
  hauteurH3: "Altezza vs classe di altezze",
  hauteurP1:
    "Un'<strong>altezza</strong> (<em>pitch</em>) è un suono preciso in un registro preciso: Do4 (il do centrale del PianoPlayer) non è Do5. Una <strong>classe di altezze</strong> (<em>pitch class</em>, « pc ») è ciò che resta quando si adottano due equivalenze:",
  hauteurEquiv: [
    "<strong>equivalenza di ottava</strong>: Do1, Do4, Do7 appartengono alla stessa classe « Do »;",
    "<strong>equivalenza enarmonica</strong>: Do♯ e Ré♭ sono la stessa classe (il temperamento equabile li confonde; l'atonalità rinuncia alla distinzione funzionale che la tonalità dava loro).",
  ],
  hauteurP2:
    "Esistono dunque esattamente <strong>12 classi di altezze</strong>, numerate da 0 a 11 con la convenzione del « do fisso » <strong>Do = 0</strong>:",
  pcTableCaption: "Le 12 classi di altezze (convenzione « do fisso », Do = 0)",
  pcLabel: "pc",
  noteLabel: "Nota",
  modP:
    "L'aritmetica è <strong>modulo 12</strong>, come sul quadrante di un orologio: salire di 2 da Si (11) dà Do♯ (11 + 2 = 13 ≡ 1).",
  intervH3: "Intervalli ordinati, non ordinati, classi di intervalli",
  intervP1:
    "Tra <strong>altezze</strong>, l'<strong>intervallo ordinato</strong> conta i semitoni con la loro direzione: da Do4 a Si3, −1; da Do4 a Si4, +11. L'<strong>intervallo non ordinato</strong> ne è il valore assoluto. Tra <strong>classi di altezze</strong>, l'intervallo ordinato da a verso b vale b − a (mod 12): da Si verso Do, 0 − 11 = 1; da Do verso Si, 11. Infine, se si rinuncia anche alla direzione, si ottiene la <strong>classe di intervalli</strong> (<em>interval class</em>, « ic »):",
  icFormule:
    "<strong>ic(i) = min(i, 12 − i)</strong> — un intervallo e il suo rivolto appartengono alla stessa classe.",
  icTableCaption: "Le 7 classi di intervalli (ic 0 a ic 6)",
  icHeaders: ["ic", "Semitoni (mod 12)", "Intervalli tonali corrispondenti"],
  icTonal: [
    "unisono, ottava",
    "seconda minore / settima maggiore",
    "seconda maggiore / settima minore",
    "terza minore / sesta maggiore",
    "terza maggiore / sesta minore",
    "quarta giusta / quinta giusta",
    "tritono (unico intervallo uguale al proprio rivolto)",
  ],
  icExemple:
    "<strong>Esempio</strong>: da Sol♯ (8) verso Ré (2), intervallo ordinato 2 − 8 = 6 → ic 6, tritono. Da Mi (4) verso Do (0), intervallo ordinato 8 → ic(8) = min(8, 4) = 4, la classe « terza maggiore / sesta minore ».",

  ensH2: "Gli insiemi di classi di altezze",
  defH3: "Definizione",
  defP:
    "Un <strong>insieme di classi di altezze</strong> (<em>pc set</em>) è una collezione <strong>non ordinata e senza ripetizioni</strong> di classi di altezze. {Sol, Sol♯, Si} = {7, 8, 11}: non contano l'ordine di enunciazione, il registro, il raddoppio. Il numero di elementi è la <strong>cardinalità</strong>: tricordo (3), tetracordo (4), pentacordo (5), esacordo (6)…",
  opsH3: "Trasposizione Tn e inversione TnI",
  opsP: "Due operazioni generano le equivalenze della teoria:",
  opsList: [
    "<strong>Trasposizione Tn</strong>: aggiungere n (mod 12) a ogni pc. Tn(x) = x + n.",
    "<strong>Inversione TnI</strong>: invertire attorno a 0 (x ↦ −x, cioè 12 − x), <strong>poi</strong> trasporre di n. TnI(x) = n − x (mod 12).",
  ],
  exTravIntro:
    "<strong>Esempio svolto</strong> — la cellula d'apertura dei Tre Pezzi op. 11 n. 1 (1909) di Schönberg, le prime tre note della melodia: <strong>Si–Sol♯–Sol</strong>, ossia l'insieme <strong>{7, 8, 11}</strong>.",
  opsTableCaption: "Trasformazioni di {7, 8, 11} (la cellula dell'op. 11)",
  opsHeaders: ["Operazione", "Calcolo (su {7, 8, 11})", "Risultato", "In note"],
  ensP2:
    "Tutti questi insiemi « suonano imparentati »: stessi intervalli interni (un semitono e una terza maggiore intrecciati), registro e ordine a parte. La teoria dichiara <strong>equivalenti</strong> due insiemi legati da una trasposizione o da un'inversione: appartengono alla stessa <strong>classe di insiemi</strong> (<em>set class</em>). È l'esatta generalizzazione di un riflesso tonale: consideriamo già tutti gli accordi perfetti maggiori come « lo stesso accordo » a meno di trasposizione — e la tonalità considera perfino maggiore e minore (inversioni l'uno dell'altro) come due specie di uno stesso oggetto, la triade.",
  ensEcoute:
    "Ascoltate {7, 8, 11} e poi ogni trasformazione, a blocco e arpeggiata — l'orecchio riconosce la parentela prima del calcolo.",

  formesH2: "Forma normale e forma prima",
  formesP1:
    "Per confrontare insiemi serve una <strong>scrittura canonica</strong>. Due livelli: la <em>forma normale</em> (l'insieme stesso, disposto nel modo più compatto) e la <em>forma prima</em> (il rappresentante dell'intera classe di equivalenza, che comincia da 0).",
  fnH3: "Forma normale: l'algoritmo",
  fnSteps: [
    "Scrivere i pc in <strong>ordine crescente</strong> entro un'ottava, e formare tutte le <strong>rotazioni</strong> (ogni pc diventa a turno la prima nota, le precedenti salgono all'ottava superiore, +12).",
    "Tenere la rotazione il cui <strong>intervallo esterno</strong> (ultima − prima) è il <strong>più piccolo</strong>: l'insieme più compatto.",
    "In caso di parità, confrontare l'intervallo dalla prima nota alla <strong>penultima</strong>, poi alla terzultima, ecc.: tenere il più <strong>compattato a sinistra</strong>.",
    "(Parità perfetta — insiemi totalmente simmetrici come {0,4,8}: cominciare dal numero più piccolo.)",
  ],
  fnNote:
    "<em>Nota di rigore</em>: questo criterio di spareggio « compattato a sinistra » è quello di Rahn e di Straus, seguito dalla quasi totalità degli strumenti attuali. Il criterio originale di Forte (1973) differisce solo per cinque classi (5-20, 6-Z29, 6-31, 7-20, 8-26) — nessuna compare in questo corso.",
  rotHeaders: ["Rotazione", "Ampiezza"],
  exATitle: "Esempio A — {Do, Do♯, Mi} = {0, 1, 4}",
  exAText:
    "Rotazioni: (0,1,4) → ampiezza 4; (1,4,12) → 11; (4,12,13) → 9. La più compatta: <strong>forma normale [0,1,4]</strong>.",
  exBTitle: "Esempio B — {Sol, La, Do♯, Ré} = {7, 9, 1, 2}",
  exBIntro: "Ordine crescente: 1, 2, 7, 9.",
  exBResult: "<strong>Forma normale [7, 9, 1, 2]</strong> (Sol, La, Do♯, Ré).",
  exCTitle: "Esempio C — {Si, Do, Ré, Mi♭, Fa♯} = {11, 0, 2, 3, 6}",
  exCIntro: "Ordine crescente: 0, 2, 3, 6, 11.",
  exCResult: "<strong>Forma normale [11, 0, 2, 3, 6]</strong> (Si, Do, Ré, Mi♭, Fa♯).",
  fpH3: "Forma prima: l'algoritmo",
  fpSteps: [
    "Forma normale dell'insieme, <strong>trasposta per cominciare da 0</strong>.",
    "Forma normale della sua <strong>inversione</strong> (12 − ogni pc), trasposta per cominciare da 0.",
    "Tenere la più <strong>compattata a sinistra</strong> delle due (confrontare cifra per cifra da sinistra). È la <strong>forma prima</strong>, rappresentante unico della classe di insiemi.",
  ],
  exA2Title: "Esempio A (seguito)",
  exA2Text:
    "[0,1,4] è già a 0. Inversione di {0,1,4}: {0, 11, 8} = {0, 8, 11}. Rotazioni: (0,8,11) → 11; (8,11,12) → 4; (11,12,20) → 9. Forma normale [8,11,0], trasposta a 0 (−8): [0,3,4]. Confronto: <strong>[0,1,4]</strong> vs [0,3,4] → 1 &lt; 3, la forma prima è <strong>[0,1,4]</strong>.",
  exB2Title: "Esempio B (seguito)",
  exB2Text:
    "[7,9,1,2] trasposta a 0 (−7): <strong>[0,2,6,7]</strong>. Inversione di {1,2,7,9}: {11, 10, 5, 3} = {3, 5, 10, 11}. Rotazioni: (3,5,10,11) → 8; (5,10,11,15) → 10; <strong>(10,11,15,17) → 7</strong>; (11,15,17,22) → 11. Forma normale [10,11,3,5], trasposta a 0 (−10): <strong>[0,1,5,7]</strong>. Confronto: [0,2,6,7] vs [0,1,5,7] → 1 &lt; 2, la forma prima è <strong>[0,1,5,7]</strong> (numero di Forte: 4-16).",
  exC2Title: "Esempio C (seguito)",
  exC2Text:
    "[11,0,2,3,6] trasposta a 0 (−11): <strong>[0,1,3,4,7]</strong>. Inversione di {0,2,3,6,11}: {0, 10, 9, 6, 1} = {0, 1, 6, 9, 10}. Rotazioni: (0,1,6,9,10) → 10; (1,6,9,10,12) → 11; <strong>(6,9,10,12,13) → 7</strong>; (9,10,12,13,18) → 9; (10,12,13,18,21) → 11. Forma normale [6,9,10,0,1], trasposta a 0 (−6): <strong>[0,3,4,6,7]</strong>. Confronto: [0,1,3,4,7] vs [0,3,4,6,7] → 1 &lt; 3, la forma prima è <strong>[0,1,3,4,7]</strong> (numero di Forte: 5-16).",
  reflexBox:
    "<strong>Verifica-riflesso</strong>: una forma prima comincia sempre da 0, e la sua ultima cifra è l'ampiezza minima dell'insieme. Se la vostra forma prima « pende a destra » (ad es. [0,3,4] quando [0,1,4] esiste nella classe), è che l'inversione è stata dimenticata.",

  vecH2: "Il vettore intervallare e i numeri di Forte",
  vecP1:
    "Il <strong>vettore intervallare</strong> (<em>interval-class vector</em>) conta, per un insieme dato, il numero di occorrenze di ogni classe di intervalli ic 1 a ic 6, tra <strong>tutte le coppie</strong> di pc. Un insieme di cardinalità k contiene k(k−1)/2 coppie: 3 per un tricordo, 6 per un tetracordo, 10 per un pentacordo. È l'« impronta sonora » dell'insieme: due insiemi con lo stesso vettore offrono la stessa riserva di intervalli.",
  vecCalcs: [
    "<strong>Calcolo completo 1</strong> — [0, 1, 4] (la cellula dell'op. 11): coppie (0,1) → ic 1; (0,4) → ic 4; (1,4) → ic 3. Vettore: <strong>&lt;101100&gt;</strong>.",
    "<strong>Calcolo completo 2</strong> — la triade maggiore/minore [0, 3, 7]: (0,3) → ic 3; (0,7) → ic 5; (3,7) → ic 4. Vettore: <strong>&lt;001110&gt;</strong>. (Maggiore e minore, inversioni l'una dell'altra, condividono questo vettore — l'inversione non cambia mai il vettore.)",
    "<strong>Calcolo completo 3</strong> — il tetracordo per toni interi [0, 2, 4, 6]: (0,2) → ic 2; (0,4) → ic 4; (0,6) → ic 6; (2,4) → ic 2; (2,6) → ic 4; (4,6) → ic 2. Vettore: <strong>&lt;030201&gt;</strong> (tre ic 2, due ic 4, un ic 6 — nessun semitono, nessuna terza minore, nessuna quarta: il suono « toni interi »).",
  ],
  forteH3: "I numeri di Forte",
  forteP:
    "Forte ha catalogato tutte le classi di insiemi (12 classi di tricordi, 29 di tetracordi, 38 di pentacordi, 50 di esacordi) e le ha nominate <strong>cardinalità-numero d'ordine</strong>: 3-3 è la 3ª classe di tricordi del suo catalogo, 4-Z15 la 15ª classe di tetracordi. Queste etichette sono il riferimento universale degli scritti analitici.",
  zH3: "La relazione Z",
  zP1:
    "Il vettore non determina sempre la classe: due insiemi possono avere <strong>lo stesso vettore senza essere equivalenti Tn/TnI</strong>. Forte li dice in <strong>relazione Z</strong> (la Z si aggiunge al nome). Coppia classica:",
  zList: [
    "<strong>4-Z15 = [0, 1, 4, 6]</strong>: (0,1)→1; (0,4)→4; (0,6)→6; (1,4)→3; (1,6)→5; (4,6)→2 → vettore <strong>&lt;111111&gt;</strong>;",
    "<strong>4-Z29 = [0, 1, 3, 7]</strong>: (0,1)→1; (0,3)→3; (0,7)→5; (1,3)→2; (1,7)→6; (3,7)→4 → vettore <strong>&lt;111111&gt;</strong>.",
  ],
  zP2:
    "Stessa riserva di intervalli — un esemplare di ciascuna delle sei classi, da cui il soprannome di <em>tetracordi di tutti gli intervalli</em> — ma forme prime distinte: non sono né trasposti né invertiti l'uno dell'altro.",
  famousH3: "Insiemi celebri — tavola di riferimento",
  famousCaption: "Insiemi celebri (nome di Forte, forma prima, vettore)",
  famousHeaders: ["Nome di Forte", "Forma prima", "Vettore", "Identità"],
  famousIdentites: [
    "cluster cromatico",
    "cellula d'apertura dell'op. 11 n. 1",
    "tricordo « seconda + quarta »",
    "<strong>tricordo viennese</strong> (semitono + tritono), onnipresente in Schönberg/Webern",
    "triade maggiore/minore",
    "triade aumentata",
    "il nostro esempio B (Sol–La–Do♯–Ré)",
    "tetracordo per toni interi",
    "settima diminuita",
    "accordo « <strong>Farben</strong> », Schönberg op. 16 n. 3: Do–Sol♯–Si–Mi–La = {0,8,11,4,9} (associato Z: 5-Z37 [0,3,4,5,8])",
    "collezione <strong>esatonica</strong> (alternanza 1-3)",
    "scala per <strong>toni interi</strong> (lezioni 30/36: Debussy)",
    "collezione <strong>diatonica</strong> (la scala maggiore come <em>insieme</em>)",
    "collezione <strong>ottatonica</strong> (tono-semitono: Stravinskij, Bartók, Messiaen; lezioni 30/31)",
  ],
  famousP2:
    "Rileggere questa tavola con l'orecchio (pulsanti 🔊): 6-35 senza quarte né semitoni, 8-28 satura di terze minori e tritoni, 7-35 dominata dalle quarte/quinte (il 6 in ic 5) — il vettore <em>si mette a suonare</em>.",

  analyseH2: "Applicazione analitica e introduzione al serialismo",
  segH3: "Una segmentazione: Schönberg, op. 11 n. 1, batt. 1-3",
  segP1:
    "<strong>Analizzare è anzitutto segmentare</strong>: ritagliare l'estratto in unità plausibili (motivi melodici, accordi, voci), poi identificare la classe di ogni segmento e cercare le ricorrenze. La segmentazione è un atto di interpretazione — la si giustifica con il fraseggio, il ritmo, il registro, mai con il solo desiderio di ritrovare un insieme noto.",
  segIntro:
    "Le prime cinque note della melodia (mano destra, batt. 1-3): <strong>Si–Sol♯–Sol–La–Fa</strong> = 11, 8, 7, 9, 5.",
  segHeaders: ["Segmento", "pcs", "Forma normale", "Forma prima", "Classe"],
  segLabels: [
    "Si–Sol♯–Sol (l'inciso iniziale)",
    "Sol♯–Sol–La (sovrapposizione)",
    "Sol–La–Fa (la ricaduta)",
    "Le cinque note",
  ],
  segP2:
    "Il gesto iniziale espone <strong>3-3 [0,1,4]</strong> — semitono e terza maggiore fusi in un'unica sonorità, né maggiore né minore. È l'osservazione fondatrice delle analisi classiche di questo pezzo (Forte, Perle, Straus): la cellula [0,1,4] vi ritorna costantemente, trasposta, invertita, verticalizzata — la sezione 3 ha già mostrato T5 e T4I di {7,8,11}. La coerenza che la tonalità assicurava con la sintassi dei gradi, Schönberg la ottiene con la <strong>saturazione del tessuto da parte di una stessa classe di insiemi</strong>.",
  serieH3: "Dal motivo alla serie: la dodecafonia",
  serieP1:
    "Verso il 1921-1923, Schönberg sistematizza: al posto di cellule libere, una <strong>serie</strong> (<em>row</em>) — un ordine fissato una volta per tutte delle <strong>dodici</strong> classi di altezze, matrice dell'intero pezzo. Quattro trasformazioni generano la famiglia delle forme seriali:",
  serieFormes: [
    "<strong>P</strong> (prima): la serie, trasponibile (P0…P11 — nella convenzione di Straus, Pn comincia sul pc n);",
    "<strong>I</strong>: la sua inversione (ogni intervallo invertito);",
    "<strong>R</strong>: la sua retrogradazione (ordine inverso);",
    "<strong>RI</strong>: il retrogrado dell'inversione.",
  ],
  serieP2:
    "Ossia 12 × 4 = <strong>48 forme</strong>, che l'analista registra in una matrice 12 × 12 (non la costruiremo qui — l'esercizio 3 ne calcola le prime due righe, il che basta per capire il principio).",
  webernIntro:
    "<strong>Esempio reale</strong> — la serie della <strong>Sinfonia op. 21 (1928) di Webern</strong>, trasposta a 0:",
  webernI0P: "Calcolo di <strong>I0</strong>: I0(x) = −x (mod 12), applicato termine a termine:",
  webernControle:
    "Controllo con gli intervalli ordinati: P0 scende di 3 (0→9), I0 sale di 3 (0→3); P0 sale di 1 (9→10), I0 scende di 1 (3→2) — ogni intervallo è effettivamente invertito.",
  webernSym:
    "Questa serie è celebre per la sua simmetria: il suo <strong>secondo esacordo è il retrogrado del primo trasposto al tritono</strong>. Verifica: primo esacordo (0, 9, 10, 11, 7, 8); il suo retrogrado (8, 7, 11, 10, 9, 0); T6 di questo retrogrado: (2, 1, 5, 4, 3, 6) — esattamente il secondo esacordo. Conseguenza: R6(P0) = P0… la serie è il proprio retrogrado trasposto, e le 48 forme si riducono a <strong>24 forme distinte</strong>. Il serialismo non abolisce la teoria degli insiemi: gli esacordi, tetracordi e tricordi interni di una serie sono insiemi, e le loro classi governano l'armonia dell'opera.",

  entrainH2: "Applicazioni e allenamento",
  methodeH3: "Il metodo, in sintesi",
  methodeSteps: [
    "<strong>Segmentare</strong> l'estratto (motivi, accordi, strati), giustificando musicalmente ogni taglio.",
    "<strong>Identificare</strong> ogni segmento: pcs → forma normale → forma prima (→ numero di Forte, → vettore se utile).",
    "<strong>Confrontare</strong>: stesse classi? relazioni Tn/TnI precise (quale n?)? relazione Z? sottoinsiemi comuni?",
    "<strong>Interpretare</strong>: che cosa fa la ricorrenza? saturazione motivica, opposizione di due classi, progressione da una classe all'altra… La tabella delle classi non è l'analisi; ne è la materia prima.",
  ],
  calcTitle: "Calcolatore di insiemi",
  calcHelp:
    "Selezionate da 2 a 6 classi di altezze (0-11): il motore calcola la forma normale, la forma prima e il vettore intervallare — lo stesso motore che blinda ogni valore stampato in questo corso.",
  calcNormalLabel: "Forma normale",
  calcPrimeLabel: "Forma prima",
  calcVectorLabel: "Vettore intervallare",
  calcEmpty: "Selezionate almeno 2 classi di altezze.",
  exercicesH3: "Esercizi scritti (soluzioni complete)",
  exercices: [
    {
      titre: "Esercizio 1 — Carta d'identità completa",
      consigne:
        "Per l'insieme {Si♭, Si, Ré, Fa} = {10, 11, 2, 5}, determinare la forma normale, la forma prima, il numero di Forte e il vettore intervallare.",
      controle:
        "<strong>Forma normale.</strong> Ordine crescente: 2, 5, 10, 11. Rotazioni e ampiezze: (2,5,10,11) → 9; (5,10,11,14) → 9; <strong>(10,11,14,17) → 7</strong>; (11,14,17,22) → 11. <strong>Forma normale [10, 11, 2, 5]</strong> (Si♭, Si, Ré, Fa).<br/><strong>Forma prima.</strong> [10,11,2,5] − 10 → [0,1,4,7]. Inversione di {2,5,10,11}: {10, 7, 2, 1} = {1, 2, 7, 10}; rotazioni: (1,2,7,10) → 9; (2,7,10,13) → 11; <strong>(7,10,13,14) → 7</strong>; (10,13,14,19) → 9; forma normale [7,10,1,2] − 7 → [0,3,6,7]. Confronto [0,1,4,7] vs [0,3,6,7]: 1 &lt; 3. <strong>Forma prima [0,1,4,7]</strong>, numero di Forte <strong>4-18</strong>.<br/><strong>Vettore.</strong> Su [0,1,4,7]: (0,1)→1; (0,4)→4; (0,7)→5; (1,4)→3; (1,7)→6; (4,7)→3. <strong>Vettore &lt;102111&gt;</strong> (due terze minori, tutto il resto in un esemplare — salvo ic 2, assente).",
    },
    {
      titre: "Esercizio 2 — Dimostrare una relazione Z",
      consigne:
        "Dimostrare che {0,1,4,6} e {0,1,3,7} sono in relazione Z: (a) calcolare i loro due vettori; (b) provare che non sono equivalenti Tn/TnI calcolando le loro forme prime.",
      controle:
        "(a) {0,1,4,6}: (0,1)→1; (0,4)→4; (0,6)→6; (1,4)→3; (1,6)→5; (4,6)→2 → <strong>&lt;111111&gt;</strong>. {0,1,3,7}: (0,1)→1; (0,3)→3; (0,7)→5; (1,3)→2; (1,7)→6; (3,7)→4 → <strong>&lt;111111&gt;</strong>. Vettori identici.<br/>(b) {0,1,4,6}: rotazioni (0,1,4,6) → 6; (1,4,6,12) → 11; (4,6,12,13) → 9; (6,12,13,16) → 10: forma normale [0,1,4,6], già a 0. Inversione {0,11,8,6} = {0,6,8,11}: rotazioni (0,6,8,11) → 11; <strong>(6,8,11,12) → 6</strong>; (8,11,12,18) → 10; (11,12,18,20) → 9: [6,8,11,0] − 6 → [0,2,5,6]. Confronto: <strong>forma prima [0,1,4,6]</strong> (4-Z15).<br/>{0,1,3,7}: rotazioni (0,1,3,7) → 7; (1,3,7,12) → 11; (3,7,12,13) → 10; (7,12,13,15) → 8: forma normale [0,1,3,7]. Inversione {0,11,9,5} = {0,5,9,11}: rotazioni (0,5,9,11) → 11; <strong>(5,9,11,12) → 7</strong>; (9,11,12,17) → 8; (11,12,17,21) → 10: [5,9,11,0] − 5 → [0,4,6,7]. Confronto: <strong>forma prima [0,1,3,7]</strong> (4-Z29).<br/>[0,1,4,6] ≠ [0,1,3,7]: classi distinte, vettori identici → <strong>relazione Z</strong>. ∎",
    },
    {
      titre: "Esercizio 3 — Forme seriali",
      consigne:
        "Sia la serie della Sinfonia op. 21 di Webern, trasposta a 0: P0 = 0, 9, 10, 11, 7, 8, 2, 1, 5, 4, 3, 6. (a) Calcolare I0 e R0. (b) Verificare che il secondo esacordo di P0 è il retrogrado del primo trasposto al tritono.",
      controle:
        "(a) <strong>I0</strong> = (−x mod 12 per ogni termine) = <strong>0, 3, 2, 1, 5, 4, 10, 11, 7, 8, 9, 6</strong>; <strong>R0</strong> = (P0 letto a ritroso) = <strong>6, 3, 4, 5, 1, 2, 8, 7, 11, 10, 9, 0</strong>.<br/>(b) Primo esacordo: (0, 9, 10, 11, 7, 8). Retrogrado: (8, 7, 11, 10, 9, 0). T6: (8+6, 7+6, 11+6, 10+6, 9+6, 0+6) = <strong>(2, 1, 5, 4, 3, 6)</strong> = il secondo esacordo di P0. ∎ (Si osservi che R0 = T6(P0) come successioni ordinate: la serie è il proprio retrogrado al tritono, da cui 24 forme distinte invece di 48.)",
    },
    {
      titre: "Esercizio 4 — Identificare una relazione precisa",
      consigne:
        "Le cellule Mi–Fa–La = {4, 5, 9} e Sol–Si–Do = {7, 11, 0} appartengono alla stessa classe? Se sì, con quale operazione esatta (Tn o TnI, con il valore di n) si passa dalla prima alla seconda?",
      controle:
        "{4,5,9}: rotazioni (4,5,9) → 5; (5,9,16) → 11; (9,16,17) → 8: forma normale [4,5,9], tipo [0,1,5]. Inversione {8,7,3} = {3,7,8}: rotazioni <strong>(3,7,8) → 5</strong>; (7,8,15) → 8; (8,15,19) → 11: [3,7,8] − 3 → [0,4,5]. Forma prima <strong>[0,1,5]</strong> (3-4).<br/>{7,11,0} = {0,7,11}: rotazioni (0,7,11) → 11; <strong>(7,11,12) → 5</strong>; (11,12,19) → 8: forma normale [7,11,0], tipo [0,4,5] — la struttura <strong>invertita</strong>. Forma prima anch'essa [0,1,5]: <strong>stessa classe 3-4</strong>.<br/>Una è di tipo [0,1,5], l'altra di tipo [0,4,5]: nessuna trasposizione le collega (Tn conserva la successione degli intervalli). Cerchiamo n tale che n − {4,5,9} = {0,7,11}: n = 4 dà 4−4 = 0, 4−5 = 11, 4−9 = 7 ✓. <strong>Operazione: T4I.</strong> (Poiché 3-4 non è simmetrico per inversione, la risposta Tn/TnI è esclusiva: è TnI e soltanto TnI.)",
    },
  ],
  voirCorrige: "Vedi la soluzione",
  masquerCorrige: "Nascondi la soluzione",
  corrigeLabel: "Soluzione completa",
  quizH3: "Quiz — 10 domande",
  questions: [
    {
      q: "Qual è la forma normale di {Do, Mi, Fa♯, Si} = {0, 4, 6, 11}?",
      opts: ["[0,4,6,11]", "[11,0,4,6]", "[4,6,11,0]", "[6,11,0,4]"],
      a: 1,
      fb: "Ampiezze delle rotazioni: 11, 8, 10 e 7; la rotazione (11,12,16,18), cioè [11,0,4,6], è la più compatta (ampiezza 7).",
    },
    {
      q: "Qual è il vettore intervallare del tricordo viennese 3-5 [0,1,6]?",
      opts: ["<100011>", "<100110>", "<110001>", "<101100>"],
      a: 0,
      fb: "Coppie: (0,1) → ic 1; (0,6) → ic 6; (1,6) → ic 5, da cui <100011>.",
    },
    {
      q: "{Ré, Mi♭, Sol} = {2,3,7} e {La, Do♯, Ré} = {9,1,2} sono legati da Tn, da TnI, entrambi o nessuno?",
      opts: ["Solo Tn", "Solo TnI", "Entrambi", "Nessuno"],
      a: 1,
      fb: "Forme normali [2,3,7] (tipo [0,1,5]) e [9,1,2] (tipo [0,4,5]): strutture invertite, quindi niente Tn; T4I manda 2→2, 3→1, 7→9, ossia esattamente {9,1,2}.",
    },
    {
      q: "Qual è il vettore intervallare della triade maggiore {Do, Mi, Sol} = {0,4,7}?",
      opts: ["<001110>", "<011010>", "<001101>", "<010110>"],
      a: 0,
      fb: "(0,4) → ic 4; (0,7) → ic 5; (4,7) → ic 3: <001110> — identico a quello della triade minore (stessa classe 3-11).",
    },
    {
      q: "Qual è la forma prima di {Ré, Fa, Fa♯, La} = {2,5,6,9}?",
      opts: ["[0,1,4,7]", "[0,3,4,7]", "[0,1,3,7]", "[0,3,6,7]"],
      a: 1,
      fb: "Forma normale [2,5,6,9] (ampiezza 7) → −2 → [0,3,4,7]; l'inversione {3,6,7,10} dà anch'essa [0,3,4,7] (insieme simmetrico): classe 4-17, il tetracordo « maggiore-minore ».",
    },
    {
      q: "Quanti intervalli conta in totale il vettore di un pentacordo (somma delle sue sei cifre)?",
      opts: ["5", "10", "12", "15"],
      a: 1,
      fb: "Il vettore conta tutte le coppie: k(k−1)/2 = 5 × 4 / 2 = 10.",
    },
    {
      q: "4-Z15 [0,1,4,6] e 4-Z29 [0,1,3,7] hanno lo stesso vettore <111111> senza essere equivalenti Tn/TnI. Come si chiama questa relazione?",
      opts: ["Relazione Z", "Equivalenza Tn", "Equivalenza TnI", "Complementarità"],
      a: 0,
      fb: "Stesso contenuto intervallare, classi distinte: è la definizione della relazione Z di Forte.",
    },
    {
      q: "Quanto vale T8({Do♯, Mi, La}) = T8({1, 4, 9})?",
      opts: ["{0,5,9}", "{9,0,4}", "{1,5,8}", "{2,7,11}"],
      a: 0,
      fb: "1+8 = 9; 4+8 = 0; 9+8 = 5 (mod 12) → {9, 0, 5} = {0,5,9} (La, Do, Fa).",
    },
    {
      q: "Qual è la forma prima della scala per toni interi?",
      opts: ["[0,1,3,5,7,9]", "[0,2,4,6,8,10]", "[0,2,4,6,8,11]", "[0,1,4,6,8,10]"],
      a: 1,
      fb: "Sei pc distanziati di 2 semitoni: classe 6-35, vettore <060603>.",
    },
    {
      q: "Quale di queste proprietà di un insieme è invariante sotto tutte le trasposizioni E tutte le inversioni?",
      opts: ["La sua forma normale", "Il suo vettore intervallare", "Le sue altezze reali", "L'ordine delle sue note"],
      a: 1,
      fb: "Tn e TnI conservano tutte le classi di intervalli interne; la forma normale, invece, cambia con la trasposizione.",
    },
  ],

  listenBtn: "Ascolta",
};

// ════════════════════════════════════════════════════════════════════════════
// PT
// ════════════════════════════════════════════════════════════════════════════

const pt: Cours44Locale = {
  maitreConcept: "Os conjuntos de classes de alturas — a lingua franca da análise pós-tonal",
  maitreAnecdote:
    "A partir dos trabalhos de Milton Babbitt (que forja as noções de pitch class e de classe de intervalos), Allen Forte (1926-2014) sistematiza em The Structure of Atonal Music (1973) uma teoria dos conjuntos de classes de alturas: em vez de acordes e graus, conjuntos de notas considerados a menos de oitava e de enarmonia, comparáveis por transposição e inversão, catalogados e nomeados — os « números de Forte ». O manual de referência é a Introduction to Post-Tonal Theory de Joseph N. Straus, cujas convenções este curso segue.",
  maitreLesson:
    "A teoria dos conjuntos é uma ferramenta de análise, não um método de composição; não substitui o ouvido, dá-lhe um vocabulário exato. E não « destrona » Schenker: cada um reina sobre o seu repertório.",

  introH2: "Por que uma nova teoria?",
  introP1:
    "Por volta de 1908-1909 — o final do Segundo Quarteto, os <em>Lieder</em> do <em>Livro dos jardins suspensos</em>, depois as Três Peças op. 11 de Schoenberg —, surge uma música que já não repousa sobre uma tônica. É a <strong>atonalidade livre</strong>: sem hierarquia de graus, sem dissonância <em>em relação a</em> uma consonância de referência (Schoenberg fala de « emancipação da dissonância »), sem cadências que articulem a forma. As nossas ferramentas tonais emudecem: cifrar um acorde supõe uma fundamental e terças empilhadas que ele muitas vezes já não tem; falar de « grau » supõe uma escala de referência; e a redução schenkeriana (aulas 27 e 37) supõe precisamente o que esta música abole — a prolongação de uma tríade de tônica por movimentos lineares consonantes. O próprio Schenker reservava explicitamente a sua teoria ao repertório tonal: para Webern ou o Schoenberg atonal, é preciso outra coisa.",
  introP2:
    "Este vazio conceitual só foi preenchido tardiamente. A partir dos trabalhos de Milton Babbitt (que forja as noções de <em>pitch class</em> e de classe de intervalos), <strong>Allen Forte</strong> sistematiza em <strong><em>The Structure of Atonal Music</em> (1973)</strong> uma teoria dos <strong>conjuntos de classes de alturas</strong> (<em>pitch-class set theory</em>): em vez de acordes e graus, <em>conjuntos</em> de notas considerados a menos de oitava e de enarmonia, comparáveis entre si por transposição e inversão, catalogados e nomeados. A ideia-força: na atonalidade livre, a coerência já não vem da sintaxe tonal mas da <strong>recorrência de pequenas coleções de intervalos</strong> — células que o compositor transpõe, inverte, sobrepõe. A teoria dos conjuntos é hoje a <em>lingua franca</em> da análise pós-tonal; o manual de referência é a <em>Introduction to Post-Tonal Theory</em> de Joseph N. Straus, cujas convenções este curso segue.",
  introBox:
    "<strong>Para lembrar</strong>: a teoria dos conjuntos é uma ferramenta de <strong>análise</strong>, não um método de composição; não substitui o ouvido, dá-lhe um vocabulário exato. E não « destrona » Schenker: cada um reina sobre o seu repertório. Referências no percurso: aulas 27 e 37 (Schenker, análise motívica) — a ferramenta de referência <strong>para a música tonal</strong>, cujo lugar este curso assume fora da tonalidade; aulas 30, 31 e 36 (harmonia impressionista, politonalidade e harmonia quartal, Debussy/Ravel) — o repertório-charneira cujas coleções recebem aqui os seus nomes genéricos.",

  pcsH2: "Classes de alturas e classes de intervalos",
  hauteurH3: "Altura vs classe de altura",
  hauteurP1:
    "Uma <strong>altura</strong> (<em>pitch</em>) é um som preciso num registro preciso: Do4 (o do central do PianoPlayer) não é Do5. Uma <strong>classe de altura</strong> (<em>pitch class</em>, « pc ») é o que resta quando se adotam duas equivalências:",
  hauteurEquiv: [
    "<strong>equivalência de oitava</strong>: Do1, Do4, Do7 pertencem à mesma classe « Do »;",
    "<strong>equivalência enarmônica</strong>: Do♯ e Ré♭ são a mesma classe (o temperamento igual confunde-os; a atonalidade renuncia à distinção funcional que a tonalidade lhes dava).",
  ],
  hauteurP2:
    "Existem portanto exatamente <strong>12 classes de alturas</strong>, numeradas de 0 a 11 com a convenção do « dó fixo » <strong>Do = 0</strong>:",
  pcTableCaption: "As 12 classes de alturas (convenção « dó fixo », Do = 0)",
  pcLabel: "pc",
  noteLabel: "Nota",
  modP:
    "A aritmética é <strong>módulo 12</strong>, como no mostrador de um relógio: subir 2 a partir de Si (11) dá Do♯ (11 + 2 = 13 ≡ 1).",
  intervH3: "Intervalos ordenados, não ordenados, classes de intervalos",
  intervP1:
    "Entre <strong>alturas</strong>, o <strong>intervalo ordenado</strong> conta os semitons com a sua direção: de Do4 a Si3, −1; de Do4 a Si4, +11. O <strong>intervalo não ordenado</strong> é o seu valor absoluto. Entre <strong>classes de alturas</strong>, o intervalo ordenado de a para b vale b − a (mod 12): de Si para Do, 0 − 11 = 1; de Do para Si, 11. Por fim, se se renuncia também à direção, obtém-se a <strong>classe de intervalos</strong> (<em>interval class</em>, « ic »):",
  icFormule:
    "<strong>ic(i) = min(i, 12 − i)</strong> — um intervalo e a sua inversão pertencem à mesma classe.",
  icTableCaption: "As 7 classes de intervalos (ic 0 a ic 6)",
  icHeaders: ["ic", "Semitons (mod 12)", "Intervalos tonais correspondentes"],
  icTonal: [
    "uníssono, oitava",
    "segunda menor / sétima maior",
    "segunda maior / sétima menor",
    "terça menor / sexta maior",
    "terça maior / sexta menor",
    "quarta justa / quinta justa",
    "trítono (único intervalo igual à sua inversão)",
  ],
  icExemple:
    "<strong>Exemplo</strong>: de Sol♯ (8) para Ré (2), intervalo ordenado 2 − 8 = 6 → ic 6, trítono. De Mi (4) para Do (0), intervalo ordenado 8 → ic(8) = min(8, 4) = 4, a classe « terça maior / sexta menor ».",

  ensH2: "Os conjuntos de classes de alturas",
  defH3: "Definição",
  defP:
    "Um <strong>conjunto de classes de alturas</strong> (<em>pc set</em>) é uma coleção <strong>não ordenada e sem repetição</strong> de classes de alturas. {Sol, Sol♯, Si} = {7, 8, 11}: não importam a ordem de enunciação, o registro, a duplicação. O número de elementos é a <strong>cardinalidade</strong>: tricorde (3), tetracorde (4), pentacorde (5), hexacorde (6)…",
  opsH3: "Transposição Tn e inversão TnI",
  opsP: "Duas operações geram as equivalências da teoria:",
  opsList: [
    "<strong>Transposição Tn</strong>: somar n (mod 12) a cada pc. Tn(x) = x + n.",
    "<strong>Inversão TnI</strong>: inverter em torno de 0 (x ↦ −x, isto é 12 − x), <strong>depois</strong> transpor de n. TnI(x) = n − x (mod 12).",
  ],
  exTravIntro:
    "<strong>Exemplo trabalhado</strong> — a célula de abertura das Três Peças op. 11 n.º 1 (1909) de Schoenberg, as três primeiras notas da melodia: <strong>Si–Sol♯–Sol</strong>, ou seja o conjunto <strong>{7, 8, 11}</strong>.",
  opsTableCaption: "Transformações de {7, 8, 11} (a célula do op. 11)",
  opsHeaders: ["Operação", "Cálculo (sobre {7, 8, 11})", "Resultado", "Em notas"],
  ensP2:
    "Todos estes conjuntos « soam aparentados »: os mesmos intervalos internos (um semitom e uma terça maior imbricados), registro e ordem à parte. A teoria declara <strong>equivalentes</strong> dois conjuntos ligados por uma transposição ou uma inversão: pertencem à mesma <strong>classe de conjuntos</strong> (<em>set class</em>). É a exata generalização de um reflexo tonal: já consideramos todos os acordes perfeitos maiores como « o mesmo acorde » a menos de transposição — e a tonalidade considera até maior e menor (inversões um do outro) como duas espécies de um mesmo objeto, a tríade.",
  ensEcoute:
    "Ouça {7, 8, 11} e depois cada transformação, em bloco e arpejada — o ouvido reconhece o parentesco antes do cálculo.",

  formesH2: "Forma normal e forma prima",
  formesP1:
    "Para comparar conjuntos, é preciso uma <strong>escrita canônica</strong>. Dois níveis: a <em>forma normal</em> (o próprio conjunto, arrumado do modo mais compacto) e a <em>forma prima</em> (o representante de toda a classe de equivalência, começando por 0).",
  fnH3: "Forma normal: o algoritmo",
  fnSteps: [
    "Escrever os pcs em <strong>ordem crescente</strong> dentro de uma oitava, e formar todas as <strong>rotações</strong> (cada pc torna-se por sua vez a primeira nota, as precedentes passando à oitava acima, +12).",
    "Reter a rotação cujo <strong>intervalo exterior</strong> (última − primeira) é o <strong>menor</strong>: o conjunto mais compacto.",
    "Em caso de empate, comparar o intervalo da primeira nota à <strong>penúltima</strong>, depois à antepenúltima, etc.: reter o mais <strong>compactado à esquerda</strong>.",
    "(Empate perfeito — conjuntos totalmente simétricos como {0,4,8}: começar pelo número menor.)",
  ],
  fnNote:
    "<em>Nota de rigor</em>: este critério de desempate « compactado à esquerda » é o de Rahn e de Straus, seguido pela quase totalidade das ferramentas atuais. O critério original de Forte (1973) difere apenas para cinco classes (5-20, 6-Z29, 6-31, 7-20, 8-26) — nenhuma aparece neste curso.",
  rotHeaders: ["Rotação", "Amplitude"],
  exATitle: "Exemplo A — {Do, Do♯, Mi} = {0, 1, 4}",
  exAText:
    "Rotações: (0,1,4) → amplitude 4; (1,4,12) → 11; (4,12,13) → 9. A mais compacta: <strong>forma normal [0,1,4]</strong>.",
  exBTitle: "Exemplo B — {Sol, La, Do♯, Ré} = {7, 9, 1, 2}",
  exBIntro: "Ordem crescente: 1, 2, 7, 9.",
  exBResult: "<strong>Forma normal [7, 9, 1, 2]</strong> (Sol, La, Do♯, Ré).",
  exCTitle: "Exemplo C — {Si, Do, Ré, Mi♭, Fa♯} = {11, 0, 2, 3, 6}",
  exCIntro: "Ordem crescente: 0, 2, 3, 6, 11.",
  exCResult: "<strong>Forma normal [11, 0, 2, 3, 6]</strong> (Si, Do, Ré, Mi♭, Fa♯).",
  fpH3: "Forma prima: o algoritmo",
  fpSteps: [
    "Forma normal do conjunto, <strong>transposta para começar em 0</strong>.",
    "Forma normal da sua <strong>inversão</strong> (12 − cada pc), transposta para começar em 0.",
    "Reter a mais <strong>compactada à esquerda</strong> das duas (comparar algarismo a algarismo a partir da esquerda). É a <strong>forma prima</strong>, representante único da classe de conjuntos.",
  ],
  exA2Title: "Exemplo A (continuação)",
  exA2Text:
    "[0,1,4] já está em 0. Inversão de {0,1,4}: {0, 11, 8} = {0, 8, 11}. Rotações: (0,8,11) → 11; (8,11,12) → 4; (11,12,20) → 9. Forma normal [8,11,0], transposta a 0 (−8): [0,3,4]. Comparação: <strong>[0,1,4]</strong> vs [0,3,4] → 1 &lt; 3, a forma prima é <strong>[0,1,4]</strong>.",
  exB2Title: "Exemplo B (continuação)",
  exB2Text:
    "[7,9,1,2] transposta a 0 (−7): <strong>[0,2,6,7]</strong>. Inversão de {1,2,7,9}: {11, 10, 5, 3} = {3, 5, 10, 11}. Rotações: (3,5,10,11) → 8; (5,10,11,15) → 10; <strong>(10,11,15,17) → 7</strong>; (11,15,17,22) → 11. Forma normal [10,11,3,5], transposta a 0 (−10): <strong>[0,1,5,7]</strong>. Comparação: [0,2,6,7] vs [0,1,5,7] → 1 &lt; 2, a forma prima é <strong>[0,1,5,7]</strong> (número de Forte: 4-16).",
  exC2Title: "Exemplo C (continuação)",
  exC2Text:
    "[11,0,2,3,6] transposta a 0 (−11): <strong>[0,1,3,4,7]</strong>. Inversão de {0,2,3,6,11}: {0, 10, 9, 6, 1} = {0, 1, 6, 9, 10}. Rotações: (0,1,6,9,10) → 10; (1,6,9,10,12) → 11; <strong>(6,9,10,12,13) → 7</strong>; (9,10,12,13,18) → 9; (10,12,13,18,21) → 11. Forma normal [6,9,10,0,1], transposta a 0 (−6): <strong>[0,3,4,6,7]</strong>. Comparação: [0,1,3,4,7] vs [0,3,4,6,7] → 1 &lt; 3, a forma prima é <strong>[0,1,3,4,7]</strong> (número de Forte: 5-16).",
  reflexBox:
    "<strong>Verificação-reflexo</strong>: uma forma prima começa sempre por 0, e o seu último algarismo é a amplitude mínima do conjunto. Se a sua forma prima « pende para a direita » (por ex. [0,3,4] quando [0,1,4] existe na classe), é que a inversão foi esquecida.",

  vecH2: "O vetor intervalar e os números de Forte",
  vecP1:
    "O <strong>vetor intervalar</strong> (<em>interval-class vector</em>) conta, para um conjunto dado, o número de ocorrências de cada classe de intervalos ic 1 a ic 6, entre <strong>todos os pares</strong> de pcs. Um conjunto de cardinalidade k contém k(k−1)/2 pares: 3 para um tricorde, 6 para um tetracorde, 10 para um pentacorde. É a « impressão sonora » do conjunto: dois conjuntos com o mesmo vetor oferecem a mesma reserva de intervalos.",
  vecCalcs: [
    "<strong>Cálculo completo 1</strong> — [0, 1, 4] (a célula do op. 11): pares (0,1) → ic 1; (0,4) → ic 4; (1,4) → ic 3. Vetor: <strong>&lt;101100&gt;</strong>.",
    "<strong>Cálculo completo 2</strong> — a tríade maior/menor [0, 3, 7]: (0,3) → ic 3; (0,7) → ic 5; (3,7) → ic 4. Vetor: <strong>&lt;001110&gt;</strong>. (Maior e menor, inversões uma da outra, partilham este vetor — a inversão nunca muda o vetor.)",
    "<strong>Cálculo completo 3</strong> — o tetracorde de tons inteiros [0, 2, 4, 6]: (0,2) → ic 2; (0,4) → ic 4; (0,6) → ic 6; (2,4) → ic 2; (2,6) → ic 4; (4,6) → ic 2. Vetor: <strong>&lt;030201&gt;</strong> (três ic 2, dois ic 4, um ic 6 — nenhum semitom, nenhuma terça menor, nenhuma quarta: o som « tons inteiros »).",
  ],
  forteH3: "Os números de Forte",
  forteP:
    "Forte catalogou todas as classes de conjuntos (12 classes de tricordes, 29 de tetracordes, 38 de pentacordes, 50 de hexacordes) e nomeou-as <strong>cardinalidade-número de ordem</strong>: 3-3 é a 3.ª classe de tricordes do seu catálogo, 4-Z15 a 15.ª classe de tetracordes. Estas etiquetas são a referência universal dos escritos analíticos.",
  zH3: "A relação Z",
  zP1:
    "O vetor nem sempre determina a classe: dois conjuntos podem ter <strong>o mesmo vetor sem serem equivalentes Tn/TnI</strong>. Forte diz que estão em <strong>relação Z</strong> (o Z junta-se ao nome). Par clássico:",
  zList: [
    "<strong>4-Z15 = [0, 1, 4, 6]</strong>: (0,1)→1; (0,4)→4; (0,6)→6; (1,4)→3; (1,6)→5; (4,6)→2 → vetor <strong>&lt;111111&gt;</strong>;",
    "<strong>4-Z29 = [0, 1, 3, 7]</strong>: (0,1)→1; (0,3)→3; (0,7)→5; (1,3)→2; (1,7)→6; (3,7)→4 → vetor <strong>&lt;111111&gt;</strong>.",
  ],
  zP2:
    "A mesma reserva de intervalos — um exemplar de cada uma das seis classes, daí a alcunha de <em>tetracordes de todos os intervalos</em> — mas formas primas distintas: não são nem transposição nem inversão um do outro.",
  famousH3: "Conjuntos célebres — tabela de referência",
  famousCaption: "Conjuntos célebres (nome de Forte, forma prima, vetor)",
  famousHeaders: ["Nome de Forte", "Forma prima", "Vetor", "Identidade"],
  famousIdentites: [
    "cluster cromático",
    "célula de abertura do op. 11 n.º 1",
    "tricorde « segunda + quarta »",
    "<strong>tricorde vienense</strong> (semitom + trítono), onipresente em Schoenberg/Webern",
    "tríade maior/menor",
    "tríade aumentada",
    "o nosso exemplo B (Sol–La–Do♯–Ré)",
    "tetracorde de tons inteiros",
    "sétima diminuta",
    "acorde « <strong>Farben</strong> », Schoenberg op. 16 n.º 3: Do–Sol♯–Si–Mi–La = {0,8,11,4,9} (associado Z: 5-Z37 [0,3,4,5,8])",
    "coleção <strong>hexatônica</strong> (alternância 1-3)",
    "escala de <strong>tons inteiros</strong> (aulas 30/36: Debussy)",
    "coleção <strong>diatônica</strong> (a escala maior como <em>conjunto</em>)",
    "coleção <strong>octatônica</strong> (tom-semitom: Stravinsky, Bartók, Messiaen; aulas 30/31)",
  ],
  famousP2:
    "Reler esta tabela com o ouvido (botões 🔊): 6-35 sem quartas nem semitons, 8-28 saturada de terças menores e trítonos, 7-35 dominada pelas quartas/quintas (o 6 em ic 5) — o vetor <em>põe-se a soar</em>.",

  analyseH2: "Aplicação analítica e introdução ao serialismo",
  segH3: "Uma segmentação: Schoenberg, op. 11 n.º 1, comp. 1-3",
  segP1:
    "<strong>Analisar é primeiro segmentar</strong>: recortar o excerto em unidades plausíveis (motivos melódicos, acordes, vozes), depois identificar a classe de cada segmento e procurar as recorrências. A segmentação é um ato de interpretação — justifica-se pelo fraseado, pelo ritmo, pelo registro, nunca pelo simples desejo de reencontrar um conjunto conhecido.",
  segIntro:
    "As cinco primeiras notas da melodia (mão direita, comp. 1-3): <strong>Si–Sol♯–Sol–La–Fa</strong> = 11, 8, 7, 9, 5.",
  segHeaders: ["Segmento", "pcs", "Forma normal", "Forma prima", "Classe"],
  segLabels: [
    "Si–Sol♯–Sol (o inciso inicial)",
    "Sol♯–Sol–La (sobreposição)",
    "Sol–La–Fa (a recaída)",
    "As cinco notas",
  ],
  segP2:
    "O gesto inicial expõe <strong>3-3 [0,1,4]</strong> — semitom e terça maior fundidos numa única sonoridade, nem maior nem menor. É a observação fundadora das análises clássicas desta peça (Forte, Perle, Straus): a célula [0,1,4] regressa constantemente, transposta, invertida, verticalizada — a seção 3 já mostrou T5 e T4I de {7,8,11}. A coerência que a tonalidade assegurava pela sintaxe dos graus, Schoenberg obtém-na pela <strong>saturação do tecido por uma mesma classe de conjuntos</strong>.",
  serieH3: "Do motivo à série: o dodecafonismo",
  serieP1:
    "Por volta de 1921-1923, Schoenberg sistematiza: em vez de células livres, uma <strong>série</strong> (<em>row</em>) — uma ordem fixada de uma vez por todas das <strong>doze</strong> classes de alturas, matriz de toda a peça. Quatro transformações geram a família das formas seriais:",
  serieFormes: [
    "<strong>P</strong> (prima): a série, transponível (P0…P11 — na convenção de Straus, Pn começa no pc n);",
    "<strong>I</strong>: a sua inversão (cada intervalo invertido);",
    "<strong>R</strong>: a sua retrogradação (ordem inversa);",
    "<strong>RI</strong>: o retrógrado da inversão.",
  ],
  serieP2:
    "Ou seja 12 × 4 = <strong>48 formas</strong>, que o analista regista numa matriz 12 × 12 (não a construiremos aqui — o exercício 3 calcula as suas duas primeiras linhas, o que basta para compreender o princípio).",
  webernIntro:
    "<strong>Exemplo real</strong> — a série da <strong>Sinfonia op. 21 (1928) de Webern</strong>, transposta a 0:",
  webernI0P: "Cálculo de <strong>I0</strong>: I0(x) = −x (mod 12), aplicado termo a termo:",
  webernControle:
    "Controlo pelos intervalos ordenados: P0 desce 3 (0→9), I0 sobe 3 (0→3); P0 sobe 1 (9→10), I0 desce 1 (3→2) — cada intervalo fica efetivamente invertido.",
  webernSym:
    "Esta série é célebre pela sua simetria: o seu <strong>segundo hexacorde é o retrógrado do primeiro transposto ao trítono</strong>. Verificação: primeiro hexacorde (0, 9, 10, 11, 7, 8); o seu retrógrado (8, 7, 11, 10, 9, 0); T6 desse retrógrado: (2, 1, 5, 4, 3, 6) — exatamente o segundo hexacorde. Consequência: R6(P0) = P0… a série é o seu próprio retrógrado transposto, e as 48 formas reduzem-se a <strong>24 formas distintas</strong>. O serialismo não abole a teoria dos conjuntos: os hexacordes, tetracordes e tricordes internos de uma série são conjuntos, e as suas classes governam a harmonia da obra.",

  entrainH2: "Aplicações e treino",
  methodeH3: "O método, em resumo",
  methodeSteps: [
    "<strong>Segmentar</strong> o excerto (motivos, acordes, estratos), justificando musicalmente cada corte.",
    "<strong>Identificar</strong> cada segmento: pcs → forma normal → forma prima (→ número de Forte, → vetor se útil).",
    "<strong>Comparar</strong>: mesmas classes? relações Tn/TnI precisas (qual n?)? relação Z? subconjuntos comuns?",
    "<strong>Interpretar</strong>: que faz a recorrência? saturação motívica, oposição de duas classes, progressão de uma classe para outra… A tabela de classes não é a análise; é a sua matéria-prima.",
  ],
  calcTitle: "Calculadora de conjuntos",
  calcHelp:
    "Selecione de 2 a 6 classes de alturas (0-11): o motor calcula a forma normal, a forma prima e o vetor intervalar — o mesmo motor que tranca cada valor impresso neste curso.",
  calcNormalLabel: "Forma normal",
  calcPrimeLabel: "Forma prima",
  calcVectorLabel: "Vetor intervalar",
  calcEmpty: "Selecione pelo menos 2 classes de alturas.",
  exercicesH3: "Exercícios escritos (soluções completas)",
  exercices: [
    {
      titre: "Exercício 1 — Cartão de identidade completo",
      consigne:
        "Para o conjunto {Si♭, Si, Ré, Fa} = {10, 11, 2, 5}, determinar a forma normal, a forma prima, o número de Forte e o vetor intervalar.",
      controle:
        "<strong>Forma normal.</strong> Ordem crescente: 2, 5, 10, 11. Rotações e amplitudes: (2,5,10,11) → 9; (5,10,11,14) → 9; <strong>(10,11,14,17) → 7</strong>; (11,14,17,22) → 11. <strong>Forma normal [10, 11, 2, 5]</strong> (Si♭, Si, Ré, Fa).<br/><strong>Forma prima.</strong> [10,11,2,5] − 10 → [0,1,4,7]. Inversão de {2,5,10,11}: {10, 7, 2, 1} = {1, 2, 7, 10}; rotações: (1,2,7,10) → 9; (2,7,10,13) → 11; <strong>(7,10,13,14) → 7</strong>; (10,13,14,19) → 9; forma normal [7,10,1,2] − 7 → [0,3,6,7]. Comparação [0,1,4,7] vs [0,3,6,7]: 1 &lt; 3. <strong>Forma prima [0,1,4,7]</strong>, número de Forte <strong>4-18</strong>.<br/><strong>Vetor.</strong> Sobre [0,1,4,7]: (0,1)→1; (0,4)→4; (0,7)→5; (1,4)→3; (1,7)→6; (4,7)→3. <strong>Vetor &lt;102111&gt;</strong> (duas terças menores, todo o resto num exemplar — salvo ic 2, ausente).",
    },
    {
      titre: "Exercício 2 — Demonstrar uma relação Z",
      consigne:
        "Demonstrar que {0,1,4,6} e {0,1,3,7} estão em relação Z: (a) calcular os seus dois vetores; (b) provar que não são equivalentes Tn/TnI calculando as suas formas primas.",
      controle:
        "(a) {0,1,4,6}: (0,1)→1; (0,4)→4; (0,6)→6; (1,4)→3; (1,6)→5; (4,6)→2 → <strong>&lt;111111&gt;</strong>. {0,1,3,7}: (0,1)→1; (0,3)→3; (0,7)→5; (1,3)→2; (1,7)→6; (3,7)→4 → <strong>&lt;111111&gt;</strong>. Vetores idênticos.<br/>(b) {0,1,4,6}: rotações (0,1,4,6) → 6; (1,4,6,12) → 11; (4,6,12,13) → 9; (6,12,13,16) → 10: forma normal [0,1,4,6], já em 0. Inversão {0,11,8,6} = {0,6,8,11}: rotações (0,6,8,11) → 11; <strong>(6,8,11,12) → 6</strong>; (8,11,12,18) → 10; (11,12,18,20) → 9: [6,8,11,0] − 6 → [0,2,5,6]. Comparação: <strong>forma prima [0,1,4,6]</strong> (4-Z15).<br/>{0,1,3,7}: rotações (0,1,3,7) → 7; (1,3,7,12) → 11; (3,7,12,13) → 10; (7,12,13,15) → 8: forma normal [0,1,3,7]. Inversão {0,11,9,5} = {0,5,9,11}: rotações (0,5,9,11) → 11; <strong>(5,9,11,12) → 7</strong>; (9,11,12,17) → 8; (11,12,17,21) → 10: [5,9,11,0] − 5 → [0,4,6,7]. Comparação: <strong>forma prima [0,1,3,7]</strong> (4-Z29).<br/>[0,1,4,6] ≠ [0,1,3,7]: classes distintas, vetores idênticos → <strong>relação Z</strong>. ∎",
    },
    {
      titre: "Exercício 3 — Formas seriais",
      consigne:
        "Seja a série da Sinfonia op. 21 de Webern, transposta a 0: P0 = 0, 9, 10, 11, 7, 8, 2, 1, 5, 4, 3, 6. (a) Calcular I0 e R0. (b) Verificar que o segundo hexacorde de P0 é o retrógrado do primeiro transposto ao trítono.",
      controle:
        "(a) <strong>I0</strong> = (−x mod 12 para cada termo) = <strong>0, 3, 2, 1, 5, 4, 10, 11, 7, 8, 9, 6</strong>; <strong>R0</strong> = (P0 lido ao contrário) = <strong>6, 3, 4, 5, 1, 2, 8, 7, 11, 10, 9, 0</strong>.<br/>(b) Primeiro hexacorde: (0, 9, 10, 11, 7, 8). Retrógrado: (8, 7, 11, 10, 9, 0). T6: (8+6, 7+6, 11+6, 10+6, 9+6, 0+6) = <strong>(2, 1, 5, 4, 3, 6)</strong> = o segundo hexacorde de P0. ∎ (Observe-se que R0 = T6(P0) como sequências ordenadas: a série é o seu próprio retrógrado ao trítono, daí 24 formas distintas em vez de 48.)",
    },
    {
      titre: "Exercício 4 — Identificar uma relação precisa",
      consigne:
        "As células Mi–Fa–La = {4, 5, 9} e Sol–Si–Do = {7, 11, 0} pertencem à mesma classe? Em caso afirmativo, por que operação exata (Tn ou TnI, com o valor de n) se passa da primeira à segunda?",
      controle:
        "{4,5,9}: rotações (4,5,9) → 5; (5,9,16) → 11; (9,16,17) → 8: forma normal [4,5,9], tipo [0,1,5]. Inversão {8,7,3} = {3,7,8}: rotações <strong>(3,7,8) → 5</strong>; (7,8,15) → 8; (8,15,19) → 11: [3,7,8] − 3 → [0,4,5]. Forma prima <strong>[0,1,5]</strong> (3-4).<br/>{7,11,0} = {0,7,11}: rotações (0,7,11) → 11; <strong>(7,11,12) → 5</strong>; (11,12,19) → 8: forma normal [7,11,0], tipo [0,4,5] — a estrutura <strong>invertida</strong>. Forma prima também [0,1,5]: <strong>mesma classe 3-4</strong>.<br/>Uma é de tipo [0,1,5], a outra de tipo [0,4,5]: nenhuma transposição as liga (Tn preserva a sucessão dos intervalos). Procuramos n tal que n − {4,5,9} = {0,7,11}: n = 4 dá 4−4 = 0, 4−5 = 11, 4−9 = 7 ✓. <strong>Operação: T4I.</strong> (Como 3-4 não é simétrico por inversão, a resposta Tn/TnI é exclusiva: é TnI e apenas TnI.)",
    },
  ],
  voirCorrige: "Ver a solução",
  masquerCorrige: "Ocultar a solução",
  corrigeLabel: "Solução completa",
  quizH3: "Quiz — 10 perguntas",
  questions: [
    {
      q: "Qual é a forma normal de {Do, Mi, Fa♯, Si} = {0, 4, 6, 11}?",
      opts: ["[0,4,6,11]", "[11,0,4,6]", "[4,6,11,0]", "[6,11,0,4]"],
      a: 1,
      fb: "Amplitudes das rotações: 11, 8, 10 e 7; a rotação (11,12,16,18), ou seja [11,0,4,6], é a mais compacta (amplitude 7).",
    },
    {
      q: "Qual é o vetor intervalar do tricorde vienense 3-5 [0,1,6]?",
      opts: ["<100011>", "<100110>", "<110001>", "<101100>"],
      a: 0,
      fb: "Pares: (0,1) → ic 1; (0,6) → ic 6; (1,6) → ic 5, donde <100011>.",
    },
    {
      q: "{Ré, Mi♭, Sol} = {2,3,7} e {La, Do♯, Ré} = {9,1,2} estão ligados por Tn, por TnI, ambos ou nenhum?",
      opts: ["Só Tn", "Só TnI", "Ambos", "Nenhum"],
      a: 1,
      fb: "Formas normais [2,3,7] (tipo [0,1,5]) e [9,1,2] (tipo [0,4,5]): estruturas invertidas, logo sem Tn; T4I envia 2→2, 3→1, 7→9, ou seja exatamente {9,1,2}.",
    },
    {
      q: "Qual é o vetor intervalar da tríade maior {Do, Mi, Sol} = {0,4,7}?",
      opts: ["<001110>", "<011010>", "<001101>", "<010110>"],
      a: 0,
      fb: "(0,4) → ic 4; (0,7) → ic 5; (4,7) → ic 3: <001110> — idêntico ao da tríade menor (mesma classe 3-11).",
    },
    {
      q: "Qual é a forma prima de {Ré, Fa, Fa♯, La} = {2,5,6,9}?",
      opts: ["[0,1,4,7]", "[0,3,4,7]", "[0,1,3,7]", "[0,3,6,7]"],
      a: 1,
      fb: "Forma normal [2,5,6,9] (amplitude 7) → −2 → [0,3,4,7]; a inversão {3,6,7,10} dá também [0,3,4,7] (conjunto simétrico): classe 4-17, o tetracorde « maior-menor ».",
    },
    {
      q: "Quantos intervalos conta no total o vetor de um pentacorde (soma dos seus seis algarismos)?",
      opts: ["5", "10", "12", "15"],
      a: 1,
      fb: "O vetor conta todos os pares: k(k−1)/2 = 5 × 4 / 2 = 10.",
    },
    {
      q: "4-Z15 [0,1,4,6] e 4-Z29 [0,1,3,7] têm o mesmo vetor <111111> sem serem equivalentes Tn/TnI. Como se chama esta relação?",
      opts: ["Relação Z", "Equivalência Tn", "Equivalência TnI", "Complementaridade"],
      a: 0,
      fb: "Mesmo conteúdo intervalar, classes distintas: é a definição da relação Z de Forte.",
    },
    {
      q: "Quanto vale T8({Do♯, Mi, La}) = T8({1, 4, 9})?",
      opts: ["{0,5,9}", "{9,0,4}", "{1,5,8}", "{2,7,11}"],
      a: 0,
      fb: "1+8 = 9; 4+8 = 0; 9+8 = 5 (mod 12) → {9, 0, 5} = {0,5,9} (La, Do, Fa).",
    },
    {
      q: "Qual é a forma prima da escala de tons inteiros?",
      opts: ["[0,1,3,5,7,9]", "[0,2,4,6,8,10]", "[0,2,4,6,8,11]", "[0,1,4,6,8,10]"],
      a: 1,
      fb: "Seis pcs espaçados de 2 semitons: classe 6-35, vetor <060603>.",
    },
    {
      q: "Qual destas propriedades de um conjunto é invariante sob todas as transposições E todas as inversões?",
      opts: ["A sua forma normal", "O seu vetor intervalar", "As suas alturas reais", "A ordem das suas notas"],
      a: 1,
      fb: "Tn e TnI preservam todas as classes de intervalos internas; a forma normal, pelo contrário, muda com a transposição.",
    },
  ],

  listenBtn: "Ouvir",
};

export const cours44Content: Record<string, Cours44Locale> = { fr, en, de, es, it, pt };
