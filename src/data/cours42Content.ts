// Cours 42 — Harmonisation au clavier & basse chiffrée (Niveau 3, ≈ Licence L3)
// Contenu pédagogique locale-clé : le FR fait foi (transcrit de la spec validée
// 2026-07-18-cours-basse-chiffree-contenu-fr.md — musique/chiffrages/exemples
// NON modifiés). Les cinq autres langues traduisent la prose, les libellés de
// table, le quiz et les exercices avec le vocabulaire musical propre à chaque
// langue (Generalbass / basso continuo / bajo cifrado / baixo cifrado…).
// CONVENTION : les noms de notes restent en solfège FRANÇAIS partout
// (Do Ré Mi Fa Sol La Si) — exigence de la couche audio Harmonia.

export interface Question {
  q: string;
  opts: string[];
  a: number;
  fb: string;
}

/** Une ligne de la table de référence des chiffrages. */
export interface RefRow {
  chiffrage: string;
  nom: string;
  position: string;
  intervalles: string;
  exemple: string;
  accord: string;
}

/** Une ligne de la table des altérations et signes. */
export interface AltRow {
  signe: string;
  sens: string;
}

/** Un exercice de réalisation SATB (le corrigé gravé vit dans le composant). */
export interface Exercice {
  titre: string;
  consigne: string;
  controle: string;
}

export interface Cours42Locale {
  // ── Maître (MaitreCard) ──
  maitreConcept: string;
  maitreAnecdote: string;
  maitreLesson: string;

  // ── Section 1 — La basse chiffrée ──
  introH2: string;
  introP1: string;
  introP2: string;
  introDistinctionBox: string;

  // ── Section 2 — Le code des chiffrages ──
  codeH2: string;
  codeP1: string;
  refCaption: string;
  refHeaders: string[];
  refRows: RefRow[];
  memoBox: string;
  altH3: string;
  altHeaders: string[];
  altRows: AltRow[];
  altExampleBox: string;
  altAudioLabel: string;
  altAudioBtn: string;

  // ── Section 3 — Réaliser à quatre voix ──
  realiserH2: string;
  realiserP1: string;
  methodStepsTitle: string;
  methodSteps: string[];
  exempleH3: string;
  exempleConsigne: string;
  exempleEnchainement: string;
  exempleControles: string;
  scoreHint: string;

  // ── Section 4 — Au clavier ──
  clavierH2: string;
  clavierP1: string;
  clavierMGItem: string;
  clavierMDItem: string;
  clavierP2: string;
  clavierTableCaption: string;
  clavierCols: string[];
  clavierRowMDLabel: string;
  clavierRowMGLabel: string;
  clavierMD: string[];
  clavierMG: string[];
  clavierDiffBox: string;
  clavierAudioLabel: string;
  clavierListenBtn: string;

  // ── Section 5 — Chiffrages courants et marches ──
  marchesH2: string;
  marchesP1: string;
  sixQuatreH3: string;
  sixQuatreP: string;
  sixQuatreCaption: string;
  retardH3: string;
  retardP1: string;
  retardCaption: string;
  retardP2: string;
  sixtesH3: string;
  sixtesP1: string;
  sixtesCaption: string;
  sixtesNote: string;
  progH3: string;
  progItems: string[];
  listenBtn: string;

  // ── Section 6 — Applications ──
  appliH2: string;
  appliP1: string;
  appliStepsH3: string;
  appliSteps: string[];
  extraitLabel: string;
  extraitConsigne: string;
  corrigeBox: string;
  examenH3: string;
  examenP1: string;

  // ── Section 7 — Entraînement (exercices + quiz) ──
  entrainH2: string;
  exercicesH3: string;
  exercicesIntro: string;
  exercices: Exercice[];
  voirCorrige: string;
  masquerCorrige: string;
  corrigeLabel: string;
  quizH3: string;
  questions: Question[];
  bonusLabel: string;
  bonusQ: string;
  bonusToggle: string;
  bonusA: string;
}

// ════════════════════════════════════════════════════════════════════════════
// FR — fait foi (transcription de la spec validée)
// ════════════════════════════════════════════════════════════════════════════

const fr: Cours42Locale = {
  maitreConcept: "La réalisation du continuo",
  maitreAnecdote:
    "Bach était un continuiste redouté. À Leipzig, il enseignait l'accompagnement à partir de la seule basse chiffrée. Vers 1738, il consigna pour ses élèves des « Préceptes et principes pour jouer à quatre voix la basse continue » (Vorschriften und Grundsätze zum vierstimmigen Spielen des Generalbasses) — un véritable manuel de réalisation. Pour lui, une basse bien chiffrée contenait déjà toute l'harmonie : il ne restait qu'à la déployer proprement.",
  maitreLesson:
    "Le continuo n'est pas un accompagnement au rabais : c'est de l'harmonie écrite « en code ». Lire les chiffres, c'est lire l'harmonie.",

  introH2: "Qu'est-ce que la basse chiffrée ?",
  introP1:
    "La <strong>basse chiffrée</strong> (ou <em>basse continue</em>, <em>basso continuo</em>) est le système de notation abrégée qui a régné sur toute la musique baroque, d'environ 1600 à 1750. Le compositeur n'écrit qu'une seule ligne — la basse — surmontée de <strong>chiffres</strong> : ces chiffres codent les intervalles à superposer au-dessus de chaque note de basse, et donc l'harmonie complète. Une portée de deux lignes (basse + chiffres) suffit à noter tout l'accompagnement.",
  introP2:
    "À l'époque, ce chiffrage était <strong>réalisé en temps réel</strong> par un instrument polyphonique — le clavecin ou l'orgue — souvent doublé d'un violoncelle ou d'une viole tenant la ligne de basse. Le claveciniste lisait la basse, interprétait les chiffres et improvisait la texture des accords : c'est la <em>réalisation</em>. Le continuo est le socle harmonique de la cantate, de la sonate en trio, de l'opéra et de l'oratorio.",
  introDistinctionBox:
    "On distingue dès maintenant deux situations que le cours ne confondra jamais : la <strong>basse chiffrée</strong> — les chiffres imposent l'harmonie exacte, on <em>réalise</em> — et la <strong>basse donnée</strong> sans chiffres, où l'on <em>choisit</em> l'harmonie (travail du cours 26).",

  codeH2: "Le code des chiffrages",
  codeP1:
    "Les chiffres indiquent toujours des <strong>intervalles comptés à partir de la note de basse</strong> (ramenés à l'octave). Ils ne disent rien du registre : c'est le réalisateur qui dispose les notes. Voici la table de référence, illustrée en Do majeur.",
  refCaption: "Table de référence des chiffrages (Do majeur)",
  refHeaders: ["Chiffrage", "Nom", "Position", "Intervalles sur la basse", "Exemple (Do majeur)", "Accord"],
  refRows: [
    { chiffrage: "(rien) · 5/3", nom: "accord parfait", position: "état fondamental", intervalles: "3ce + 5te", exemple: "Basse Do → Do-Mi-Sol", accord: "I" },
    { chiffrage: "6", nom: "sixte", position: "1er renversement", intervalles: "3ce + 6te", exemple: "Basse Mi → Do-Mi-Sol", accord: "I6" },
    { chiffrage: "6/4", nom: "quarte et sixte", position: "2e renversement", intervalles: "4te + 6te", exemple: "Basse Sol → Do-Mi-Sol", accord: "I6/4" },
    { chiffrage: "7", nom: "septième", position: "état fond. (accord de 7e)", intervalles: "3ce + 5te + 7e", exemple: "Basse Sol → Sol-Si-Ré-Fa", accord: "V7" },
    { chiffrage: "6/5", nom: "sixte et quinte", position: "1er renv. de 7e", intervalles: "3ce + 5te + 6te", exemple: "Basse Si → Sol-Si-Ré-Fa", accord: "V6/5" },
    { chiffrage: "4/3", nom: "tierce et quarte", position: "2e renv. de 7e", intervalles: "3ce + 4te + 6te", exemple: "Basse Ré → Sol-Si-Ré-Fa", accord: "V4/3" },
    { chiffrage: "2 · 4/2", nom: "seconde", position: "3e renv. de 7e", intervalles: "2de + 4te + 6te", exemple: "Basse Fa → Sol-Si-Ré-Fa", accord: "V2" },
  ],
  memoBox:
    "<strong>Mémo — les renversements de Sol7 (Sol-Si-Ré-Fa) en Do majeur :</strong> basse Sol = 7 (V7) ; basse Si = 6/5 (V6/5) ; basse Ré = 4/3 (V4/3) ; basse Fa = 2 / 4/2 (V2). On lit la basse, on identifie de quel degré de l'accord il s'agit, le chiffre confirme le renversement.",
  altH3: "Altérations et signes particuliers",
  altHeaders: ["Signe", "Signification"],
  altRows: [
    { signe: "♯ / ♭ / ♮ seul (sous la basse)", sens: "altère la tierce au-dessus de la basse (jamais la basse elle-même)" },
    { signe: "altération accolée à un chiffre (♯6, 6♭, ♯4)", sens: "altère uniquement l'intervalle chiffré indiqué" },
    { signe: "chiffre barré ou suivi de « + » (4+, 6+)", sens: "hausse la note d'un demi-ton — le plus souvent la sensible" },
    { signe: "tiret horizontal ( — )", sens: "prolonge la même harmonie pendant que la basse se déplace" },
  ],
  altExampleBox:
    "<strong>Exemple clé.</strong> En <strong>La mineur</strong>, sous la basse <strong>Mi</strong> (fondamentale de la dominante), un <strong>♯</strong> seul hausse la tierce au-dessus de la basse (Sol → <strong>Sol♯</strong>). On obtient Mi-Sol♯-Si, l'accord de dominante <strong>V</strong> avec sa <strong>sensible</strong>. Réflexe indispensable en mineur, où la sensible n'est jamais à l'armure. En Do majeur, la sensible Si étant diatonique, aucun signe n'est nécessaire.",
  altAudioLabel: "Écouter l'accord de dominante en La mineur",
  altAudioBtn: "Mi-Sol♯-Si (V)",

  realiserH2: "Réaliser un chiffrage à quatre voix",
  realiserP1:
    "Réaliser, c'est passer de la basse + chiffre à quatre voix complètes (SATB : Soprano, Alto, Ténor, Basse). La méthode se déroule en trois temps.",
  methodStepsTitle: "La méthode en trois temps",
  methodSteps: [
    "<strong>Identifier l'accord.</strong> Lire la basse, lire le chiffre, en déduire l'accord et son renversement. Ex. : basse Ré chiffrée 4/3 en Do majeur → 2e renversement de Sol7 → <strong>V4/3</strong> (Sol-Si-Ré-Fa).",
    "<strong>Disposer.</strong> Choisir le doublement (à l'état fondamental et en sixte, doubler de préférence la fondamentale ; au 6/4 cadentiel, doubler la basse). L'accord de septième complet se réalise sans doublement. Respecter l'ordre des voix (B ≤ T ≤ A ≤ S) et l'écart maximal d'une octave entre voix supérieures voisines.",
    "<strong>Conduire les voix.</strong> Garder les notes communes, privilégier le mouvement conjoint et contraire, <strong>résoudre la sensible</strong> (montée vers la tonique) et la <strong>septième</strong> (descente conjointe), proscrire les <strong>quintes et octaves parallèles</strong>.",
  ],
  exempleH3: "Exemple entièrement réalisé (Do majeur)",
  exempleConsigne: "Do (5/3) — Fa (5/3) — Sol (6/4) — Sol (5/3) — Do (5/3)",
  exempleEnchainement: "I – IV – I6/4 – V – I (avec 6/4 cadentiel)",
  exempleControles:
    "<strong>Contrôles.</strong> Soprano descendante Sol-Fa-Mi-Ré-Mi ; au 6/4 cadentiel, la basse Sol est <strong>doublée</strong> (Basse + Ténor) ; la résolution 6/4 → 5/3 fait descendre la 6te (Mi → Ré, soprano) et la 4te (Do → Si, alto) ; la <strong>sensible Si</strong> (alto) monte au Do final ; aucune quinte ni octave parallèle.",
  scoreHint: "Portée gravée par Verovio — Soprano/Alto en clé de sol, Ténor/Basse en clé de fa.",

  clavierH2: "La réalisation au clavier",
  clavierP1:
    "La réalisation à quatre voix « en partition » (SATB) espace les voix sur deux portées, chacune menant sa ligne. La réalisation <strong>au clavier</strong>, elle, cherche l'efficacité et le confort du continuiste : <strong>la basse à la main gauche, l'accord serré à la main droite</strong>.",
  clavierMGItem: "<strong>Main gauche</strong> : la note de basse (souvent seule, parfois doublée à l'octave).",
  clavierMDItem: "<strong>Main droite</strong> : les trois autres notes en <strong>position serrée</strong>, resserrées au centre du clavier (grosso modo entre Do4 et Do5), sans chercher l'écart régulier des voix SATB.",
  clavierP2:
    "Deux principes rendent le jeu fluide : <strong>garder les notes communes</strong> d'un accord au suivant (les doigts bougent le moins possible) et <strong>mélodiser le soprano</strong> (soigner la note supérieure de la main droite). On applique les mêmes interdits (quintes/octaves parallèles), mais la disposition serrée les rend plus rares et l'oreille prime.",
  clavierTableCaption: "Même progression I – IV – I6/4 – V – I, disposition clavier (Do majeur)",
  clavierCols: ["I", "IV", "I6/4", "V", "I"],
  clavierRowMDLabel: "Main droite (serré, grave→aigu)",
  clavierRowMGLabel: "Main gauche (basse)",
  clavierMD: ["Mi4-Sol4-Do5", "Fa4-La4-Do5", "Mi4-Sol4-Do5", "Ré4-Sol4-Si4", "Mi4-Sol4-Do5"],
  clavierMG: ["Do3", "Fa3", "Sol3", "Sol3", "Do3"],
  clavierDiffBox:
    "<strong>Différence avec le SATB.</strong> Ici les notes communes Do5 et Sol4 restent sous les mêmes doigts ; l'accord est compact, prêt à orner ou arpéger. Le SATB répartit au contraire les voix sur près de deux octaves pour l'écriture chorale — la réalisation clavier n'est pas une « faute » de spacing, c'est une pratique d'accompagnement.",
  clavierAudioLabel: "Écouter la disposition clavier (main droite + basse)",
  clavierListenBtn: "Écouter I – IV – I6/4 – V – I",

  marchesH2: "Chiffrages courants et marches",
  marchesP1: "Quelques formules reviennent sans cesse : les identifier accélère le déchiffrage.",
  sixQuatreH3: "Le 6/4 cadentiel",
  sixQuatreP:
    "Sur une <strong>basse de dominante tenue</strong>, le chiffrage <strong>6/4 → 5/3</strong> note le 6/4 cadentiel : la tonique posée « en suspens » sur la dominante, puis résolue sur l'accord de dominante. En Do majeur, basse Sol : le 6/4 donne Do/Mi au-dessus de Sol (I6/4), puis 6te → 5te et 4te → 3ce donnent Ré/Si (V). C'est un ornement de la dominante, toujours sur temps fort.",
  sixQuatreCaption: "6/4 cadentiel → V → I (Do majeur)",
  retardH3: "Le retard 4-3 (suspension)",
  retardP1:
    "Le retard <strong>4-3</strong> prolonge une note consonante qui devient une <strong>quarte dissonante</strong> sur la nouvelle basse, avant de résoudre par degré conjoint descendant sur la <strong>tierce</strong>. Trois temps : préparation → percussion → résolution. En Do majeur, le Do tenu sur une basse Sol devient une 4te et résout sur Si. Chiffrage : 5/4 → 5/3, soit la formule « 4 — 3 ».",
  retardCaption: "Retard 4-3 : la voix suspendue est l'alto (Do4 → Si3)",
  retardP2:
    "La voix suspendue est l'<strong>alto</strong> : Do4 consonant (préparation), Do4 dissonant (4te sur la basse Sol), puis Do4 → <strong>Si3</strong> (résolution sur la 3ce). Le retard <strong>7-6</strong> fonctionne de même sur un accord de sixte : la 7e au-dessus de la basse résout sur la 6te.",
  sixtesH3: "La marche de sixtes",
  sixtesP1:
    "Une <strong>marche de sixtes</strong> est une chaîne d'accords de <strong>sixte (6)</strong> enchaînés par mouvement conjoint de la basse — une suite de premiers renversements. Le modèle classique se réalise à <strong>trois voix réelles</strong> (faux-bourdon) : au-dessus de chaque basse, une voix à la tierce et une voix à la sixte. Les voix supérieures descendent en 6tes parallèles avec la basse (et en 3ces parallèles entre elles) — parallèles licites, à l'inverse des quintes/octaves.",
  sixtesCaption: "Marche de sixtes IV6 – iii6 – ii6 – I6 (3 voix réelles, le ténor se tait)",
  sixtesNote:
    "<strong>À quatre voix</strong>, ajouter un ténor à une chaîne de 6/3 parallèles produit inévitablement des octaves ou quintes parallèles si l'on garde un doublement fixe. On <strong>alterne alors le doublement</strong> (une note double la basse, la suivante double la 6te…) pour briser les parallèles.",
  progH3: "Progressions types à connaître",
  progItems: [
    "<strong>T → SD → D → T</strong> : I – IV (ou II6) – V(7) – I.",
    "<strong>Cadence parfaite ornée</strong> : I – IV – I6/4 – V(7) – I.",
    "<strong>Descente par sixtes</strong> puis cadence : marche de sixtes → II6 – V – I.",
    "<strong>Retards à la cadence</strong> : suspension 4-3 sur la dominante, ou 7-6 sur un accord de passage.",
  ],
  listenBtn: "Écouter",

  appliH2: "Applications",
  appliP1: "On applique la méthode de la section « Réaliser » à un extrait de style baroque.",
  appliStepsH3: "Démarche recommandée",
  appliSteps: [
    "<strong>Repérer la tonalité</strong> (armure + cadence finale) et le mode (présence de la sensible ?).",
    "<strong>Segmenter la basse</strong> et lire chaque chiffre ; traduire chaque colonne en accord + renversement.",
    "<strong>Repérer les formules</strong> (6/4 cadentiel, retards 4-3 / 7-6, marches) qui dictent la conduite.",
    "<strong>Réaliser</strong> : d'abord la basse, puis les voix supérieures en gardant les notes communes et en résolvant sensibles et septièmes.",
    "<strong>Vérifier</strong> à l'oreille (PianoPlayer) et à l'écrit (éditeur SATB + analyseur de chiffrage).",
  ],
  extraitLabel: "Petit extrait modèle (Do majeur, à réaliser)",
  extraitConsigne: "Do (5/3) — La (6) — Ré (6) — Sol (6/4) — Sol (7) — Do (5/3)",
  corrigeBox:
    "<strong>Corrigé — analyse colonne par colonne :</strong><br/>• Do (5/3) = <strong>I</strong> (Do-Mi-Sol).<br/>• La (6) = 1er renv. : basse La, 3ce Do, 6te Fa → Fa-La-Do = <strong>IV6</strong>.<br/>• Ré (6) = 1er renv. : basse Ré, 3ce Fa, 6te Si → Si-Ré-Fa = <strong>VII6</strong> (fonction de dominante).<br/>• Sol (6/4) = <strong>I6/4</strong> cadentiel.<br/>• Sol (7) = <strong>V7</strong> (Sol-Si-Ré-Fa).<br/>• Do (5/3) = <strong>I</strong>.<br/>Enchaînement : <strong>I – IV6 – VII6 – I6/4 – V7 – I</strong>. Le VII6 (la basse Ré évite la 5te diminuée à la basse) prépare le 6/4 cadentiel, puis V7 → I.",
  examenH3: "Le déchiffrage à l'examen",
  examenP1:
    "À l'épreuve, le temps est compté : on chiffre d'abord <strong>mentalement</strong> la basse (degré + renversement) avant d'écrire une seule note, on marque les <strong>sensibles</strong> et les <strong>septièmes</strong> à résoudre, on repère les <strong>formules</strong>. Rappel : ici l'harmonie est <strong>imposée</strong> par les chiffres (basse chiffrée), contrairement à la <strong>basse donnée</strong> du cours 26 où l'on choisit les accords. Un chiffrage mal lu est une faute d'analyse, pas de goût.",

  entrainH2: "Entraînement",
  exercicesH3: "Exercices de réalisation SATB",
  exercicesIntro:
    "Réaliser à quatre voix (sauf mention contraire), en Do majeur. Le corrigé donne une réalisation-type ; d'autres dispositions correctes sont possibles.",
  exercices: [
    { titre: "Exercice 1 — Cadence fondamentale", consigne: "Basse : Do3 (5/3) — Sol3 (5/3) — Do3 (5/3) → I – V – I", controle: "Sensible Si3 (alto) → Do4 ; mouvement contraire basse/soprano ; pas de parallèles." },
    { titre: "Exercice 2 — Septième de dominante, 1er renversement", consigne: "Basse : Do3 (5/3) — Si2 (6/5) — Do3 (5/3) → I – V6/5 – I", controle: "Accord de 7e complet (aucun doublement) ; le triton Fa/Si résout vers l'intérieur (Fa3→Mi3, Si2→Do3) ; septième Fa3 (ténor) → Mi3." },
    { titre: "Exercice 3 — Le 6/4 cadentiel", consigne: "Basse : Fa3 (5/3) — Sol3 (6/4) — Sol3 (5/3) — Do3 (5/3) → IV – I6/4 – V – I", controle: "Au 6/4, doubler la basse Sol (Basse + Ténor) ; résolution 6te→5te (Mi4→Ré4) et 4te→3ce (Do4→Si3) ; sensible Si3 → Do4." },
    { titre: "Exercice 4 — Marche de sixtes (3 voix, faux-bourdon)", consigne: "Basse : La3 (6) — Sol3 (6) — Fa3 (6) — Mi3 (6) → IV6 – iii6 – ii6 – I6", controle: "Soprano en 6tes parallèles avec la basse, alto en 3ces parallèles (parallèles licites) ; aucune 5te ni 8ve parallèle. À 4 voix, alterner le doublement du ténor pour éviter les octaves parallèles." },
  ],
  voirCorrige: "Voir le corrigé gravé",
  masquerCorrige: "Masquer le corrigé",
  corrigeLabel: "Corrigé — une réalisation-type",
  quizH3: "Quiz — 10 questions",
  questions: [
    {
      q: "Dans une basse chiffrée, à partir de quelle note comptent les chiffres ?",
      opts: ["À partir du Do central", "À partir de la note de basse", "À partir du soprano", "À partir de la tonique"],
      a: 1,
      fb: "Les chiffres notent des intervalles au-dessus de la note de basse, ramenés à l'octave.",
    },
    {
      q: "Quel chiffrage note l'accord parfait à l'état fondamental ?",
      opts: ["6", "6/4", "Rien (ou 5/3)", "7"],
      a: 2,
      fb: "Une basse sans chiffre (ou « 5/3 ») = accord parfait à l'état fondamental (3ce + 5te).",
    },
    {
      q: "Le chiffre 6 seul indique :",
      opts: ["Un accord de septième", "Un accord de sixte (1er renversement)", "Un 2e renversement", "Une pédale"],
      a: 1,
      fb: "« 6 » (= 6/3) = premier renversement : la basse est la tierce de l'accord.",
    },
    {
      q: "En Do majeur, une basse Si chiffrée 6/5 correspond à :",
      opts: ["VII à l'état fondamental", "V6/5 (Sol-Si-Ré-Fa, 1er renversement)", "I6", "V4/3"],
      a: 1,
      fb: "Basse Si + 6/5 = premier renversement de l'accord de septième de dominante Sol-Si-Ré-Fa.",
    },
    {
      q: "En Do majeur, une basse Ré chiffrée 4/3 correspond à :",
      opts: ["II à l'état fondamental", "V4/3 (Sol7, 2e renversement)", "V6/5", "I6/4"],
      a: 1,
      fb: "Basse Ré (quinte de Sol7) + 4/3 = deuxième renversement de l'accord de septième de dominante.",
    },
    {
      q: "En Do majeur, une basse Fa chiffrée 2 (ou 4/2) correspond à :",
      opts: ["IV à l'état fondamental", "V2 (Sol7, 3e renversement)", "V4/3", "II6"],
      a: 1,
      fb: "Basse Fa (septième de Sol7) + 2 / 4/2 = troisième renversement de l'accord de septième de dominante.",
    },
    {
      q: "Un ♯ seul placé sous une note de basse altère :",
      opts: ["La basse elle-même", "La quinte au-dessus de la basse", "La tierce au-dessus de la basse", "Toutes les notes de l'accord"],
      a: 2,
      fb: "Une altération isolée agit sur la tierce au-dessus de la basse.",
    },
    {
      q: "En La mineur, un ♯ seul sous la basse Mi produit :",
      opts: ["Un accord de Mi mineur", "Mi-Sol♯-Si : l'accord de dominante V avec sa sensible Sol♯", "Un 6/4", "Une septième diminuée"],
      a: 1,
      fb: "Le ♯ hausse la tierce Sol → Sol♯ : c'est la sensible, qui fait de l'accord une vraie dominante (indispensable en mineur).",
    },
    {
      q: "Sur une basse de dominante, le chiffrage 6/4 → 5/3 note :",
      opts: ["Une marche de sixtes", "Un retard 7-6", "Le 6/4 cadentiel (I6/4 → V)", "Une pédale de tonique"],
      a: 2,
      fb: "La tonique posée sur la dominante (6/4), puis 6te→5te et 4te→3ce : le 6/4 cadentiel, sur temps fort.",
    },
    {
      q: "À quoi sert le tiret horizontal ( — ) dans un chiffrage ?",
      opts: ["À supprimer l'accord", "À prolonger la même harmonie pendant que la basse se déplace", "À indiquer un silence", "À doubler la basse"],
      a: 1,
      fb: "Le tiret prolonge les notes tenues : l'harmonie reste, seule la basse bouge.",
    },
  ],
  bonusLabel: "Question bonus — la distinction clé",
  bonusQ: "Quelle différence entre basse chiffrée et basse donnée ?",
  bonusToggle: "Voir la réponse",
  bonusA:
    "Dans la basse <strong>chiffrée</strong>, les chiffres <strong>imposent</strong> l'harmonie exacte à réaliser ; dans la basse <strong>donnée</strong> (sans chiffres, cours 26), c'est à l'élève de <strong>choisir</strong> l'harmonie.",
};

// ════════════════════════════════════════════════════════════════════════════
// EN
// ════════════════════════════════════════════════════════════════════════════

const en: Cours42Locale = {
  maitreConcept: "Realizing the continuo",
  maitreAnecdote:
    "Bach was a formidable continuo player. In Leipzig he taught accompaniment from the figured bass alone. Around 1738 he set down for his pupils his « Precepts and Principles for playing thorough-bass in four parts » (Vorschriften und Grundsätze zum vierstimmigen Spielen des Generalbasses) — a genuine manual of realization. For him, a well-figured bass already contained the whole harmony: all that remained was to deploy it cleanly.",
  maitreLesson:
    "Continuo is no second-rate accompaniment: it is harmony written « in code ». To read the figures is to read the harmony.",

  introH2: "What is figured bass?",
  introP1:
    "<strong>Figured bass</strong> (or <em>thorough-bass</em>, <em>basso continuo</em>) is the shorthand notation system that reigned over all Baroque music, from about 1600 to 1750. The composer writes a single line — the bass — topped with <strong>figures</strong>: these figures encode the intervals to stack above each bass note, and hence the complete harmony. A two-line staff (bass + figures) is thus enough to notate the entire accompaniment.",
  introP2:
    "At the time, this figuring was <strong>realized in real time</strong> by a polyphonic instrument — the harpsichord or the organ — often doubled by a cello or a viol holding the bass line. The harpsichordist read the bass, interpreted the figures and improvised the texture of the chords: that is the <em>realization</em>. Continuo is the harmonic bedrock of the cantata, the trio sonata, opera and oratorio.",
  introDistinctionBox:
    "From the outset we distinguish two situations the course will never confuse: <strong>figured bass</strong> — the figures impose the exact harmony, you <em>realize</em> it — and the <strong>unfigured (given) bass</strong>, where you <em>choose</em> the harmony (the work of course 26).",

  codeH2: "The code of the figures",
  codeP1:
    "The figures always indicate <strong>intervals counted from the bass note</strong> (reduced to the octave). They say nothing about register: the player chooses how to space the notes. Here is the reference table, illustrated in Do major.",
  refCaption: "Reference table of figures (Do major)",
  refHeaders: ["Figures", "Name", "Position", "Intervals above the bass", "Example (Do major)", "Chord"],
  refRows: [
    { chiffrage: "(none) · 5/3", nom: "root-position triad", position: "root position", intervalles: "3rd + 5th", exemple: "Bass Do → Do-Mi-Sol", accord: "I" },
    { chiffrage: "6", nom: "chord of the sixth", position: "1st inversion", intervalles: "3rd + 6th", exemple: "Bass Mi → Do-Mi-Sol", accord: "I6" },
    { chiffrage: "6/4", nom: "six-four chord", position: "2nd inversion", intervalles: "4th + 6th", exemple: "Bass Sol → Do-Mi-Sol", accord: "I6/4" },
    { chiffrage: "7", nom: "seventh chord", position: "root position (7th chord)", intervalles: "3rd + 5th + 7th", exemple: "Bass Sol → Sol-Si-Ré-Fa", accord: "V7" },
    { chiffrage: "6/5", nom: "six-five chord", position: "1st inv. of the 7th", intervalles: "3rd + 5th + 6th", exemple: "Bass Si → Sol-Si-Ré-Fa", accord: "V6/5" },
    { chiffrage: "4/3", nom: "four-three chord", position: "2nd inv. of the 7th", intervalles: "3rd + 4th + 6th", exemple: "Bass Ré → Sol-Si-Ré-Fa", accord: "V4/3" },
    { chiffrage: "2 · 4/2", nom: "second chord", position: "3rd inv. of the 7th", intervalles: "2nd + 4th + 6th", exemple: "Bass Fa → Sol-Si-Ré-Fa", accord: "V2" },
  ],
  memoBox:
    "<strong>Memo — the inversions of Sol7 (Sol-Si-Ré-Fa) in Do major:</strong> bass Sol = 7 (V7); bass Si = 6/5 (V6/5); bass Ré = 4/3 (V4/3); bass Fa = 2 / 4/2 (V2). Read the bass, identify which chord tone it is, and the figure confirms the inversion.",
  altH3: "Accidentals and special signs",
  altHeaders: ["Sign", "Meaning"],
  altRows: [
    { signe: "♯ / ♭ / ♮ alone (below the bass)", sens: "alters the third above the bass (never the bass itself)" },
    { signe: "accidental attached to a figure (♯6, 6♭, ♯4)", sens: "alters only the figured interval indicated" },
    { signe: "slashed figure or figure followed by « + » (4+, 6+)", sens: "raises the note by a semitone — most often the leading tone" },
    { signe: "horizontal dash ( — )", sens: "prolongs the same harmony while the bass moves" },
  ],
  altExampleBox:
    "<strong>Key example.</strong> In <strong>La minor</strong>, below the bass <strong>Mi</strong> (root of the dominant), a lone <strong>♯</strong> raises the third above the bass (Sol → <strong>Sol♯</strong>). You obtain Mi-Sol♯-Si, the dominant chord <strong>V</strong> with its <strong>leading tone</strong>. An indispensable reflex in minor, where the leading tone is never in the key signature. In Do major the leading tone Si is already diatonic, so no sign is needed.",
  altAudioLabel: "Hear the dominant chord in La minor",
  altAudioBtn: "Mi-Sol♯-Si (V)",

  realiserH2: "Realizing a figured bass in four parts",
  realiserP1:
    "To realize is to move from bass + figure to four complete parts (SATB: Soprano, Alto, Tenor, Bass). The method unfolds in three stages.",
  methodStepsTitle: "The method in three stages",
  methodSteps: [
    "<strong>Identify the chord.</strong> Read the bass, read the figure, deduce the chord and its inversion. E.g.: bass Ré figured 4/3 in Do major → 2nd inversion of Sol7 → <strong>V4/3</strong> (Sol-Si-Ré-Fa).",
    "<strong>Space the notes.</strong> Choose the doubling (in root position and in the sixth chord, preferably double the root; in the cadential six-four, double the bass). The complete seventh chord is realized without doubling. Keep the order of the voices (B ≤ T ≤ A ≤ S) and a maximum gap of one octave between adjacent upper voices.",
    "<strong>Lead the voices.</strong> Keep common tones, favour stepwise and contrary motion, <strong>resolve the leading tone</strong> (up to the tonic) and the <strong>seventh</strong> (down by step), and forbid <strong>parallel fifths and octaves</strong>.",
  ],
  exempleH3: "A fully realized example (Do major)",
  exempleConsigne: "Do (5/3) — Fa (5/3) — Sol (6/4) — Sol (5/3) — Do (5/3)",
  exempleEnchainement: "I – IV – I6/4 – V – I (with cadential six-four)",
  exempleControles:
    "<strong>Checks.</strong> Descending soprano Sol-Fa-Mi-Ré-Mi; at the cadential six-four the bass Sol is <strong>doubled</strong> (Bass + Tenor); the resolution 6/4 → 5/3 makes the 6th descend (Mi → Ré, soprano) and the 4th descend (Do → Si, alto); the <strong>leading tone Si</strong> (alto) rises to the final Do; no parallel fifths or octaves.",
  scoreHint: "Staves engraved by Verovio — Soprano/Alto in treble clef, Tenor/Bass in bass clef.",

  clavierH2: "Realization at the keyboard",
  clavierP1:
    "The four-part realization « in score » (SATB) spaces the voices across two staves, each carrying its own line. Keyboard <strong>realization</strong>, however, seeks the efficiency and playing comfort of the continuo player: <strong>the bass in the left hand, the close-position chord in the right hand</strong>.",
  clavierMGItem: "<strong>Left hand</strong>: the bass note (often alone, sometimes doubled at the octave).",
  clavierMDItem: "<strong>Right hand</strong>: the other three notes in <strong>close position</strong>, kept in a tight range at the centre of the keyboard (roughly between Do4 and Do5), without seeking the even spacing of SATB voices.",
  clavierP2:
    "Two principles make the playing fluent: <strong>keep the common tones</strong> from one chord to the next (the fingers move as little as possible) and <strong>make the soprano sing</strong> (shape the top note of the right hand). The same prohibitions apply (parallel fifths/octaves), but close position makes them rarer and the ear comes first.",
  clavierTableCaption: "Same progression I – IV – I6/4 – V – I, keyboard layout (Do major)",
  clavierCols: ["I", "IV", "I6/4", "V", "I"],
  clavierRowMDLabel: "Right hand (close, low→high)",
  clavierRowMGLabel: "Left hand (bass)",
  clavierMD: ["Mi4-Sol4-Do5", "Fa4-La4-Do5", "Mi4-Sol4-Do5", "Ré4-Sol4-Si4", "Mi4-Sol4-Do5"],
  clavierMG: ["Do3", "Fa3", "Sol3", "Sol3", "Do3"],
  clavierDiffBox:
    "<strong>Difference from SATB.</strong> Here the common tones Do5 and Sol4 stay under the same fingers; the chord is compact, ready to ornament or arpeggiate. SATB, by contrast, spreads the voices across almost two octaves for choral writing — the keyboard realization is not a spacing « error », it is an accompaniment practice.",
  clavierAudioLabel: "Hear the keyboard layout (right hand + bass)",
  clavierListenBtn: "Play I – IV – I6/4 – V – I",

  marchesH2: "Common figures and sequences",
  marchesP1: "A few formulas keep recurring: recognizing them speeds up your reading.",
  sixQuatreH3: "The cadential six-four",
  sixQuatreP:
    "Over a <strong>sustained dominant bass</strong>, the figuring <strong>6/4 → 5/3</strong> writes the cadential six-four: the tonic « suspended » over the dominant, then resolved onto the dominant chord. In Do major, bass Sol: the 6/4 gives Do/Mi above Sol (I6/4), then 6th → 5th and 4th → 3rd give Ré/Si (V). It is an ornament of the dominant, always on a strong beat.",
  sixQuatreCaption: "Cadential six-four → V → I (Do major)",
  retardH3: "The 4-3 suspension",
  retardP1:
    "The <strong>4-3</strong> suspension prolongs a consonant note that becomes a <strong>dissonant fourth</strong> over the new bass, before resolving by descending step onto the <strong>third</strong>. Three stages: preparation → suspension → resolution. In Do major, the Do held over a bass Sol becomes a 4th and resolves onto Si. Figuring: 5/4 → 5/3, i.e. the « 4 — 3 » formula.",
  retardCaption: "4-3 suspension: the suspended voice is the alto (Do4 → Si3)",
  retardP2:
    "The suspended voice is the <strong>alto</strong>: Do4 consonant (preparation), Do4 dissonant (4th over the bass Sol), then Do4 → <strong>Si3</strong> (resolution onto the 3rd). The <strong>7-6</strong> suspension works the same way over a sixth chord: the 7th above the bass resolves onto the 6th.",
  sixtesH3: "The chain of sixth chords",
  sixtesP1:
    "A <strong>chain of sixth chords</strong> is a series of <strong>sixth chords (6)</strong> linked by stepwise motion of the bass — a run of first inversions. The classic model is realized in <strong>three real parts</strong> (fauxbourdon): above each bass, one voice at the third and one at the sixth. The upper voices descend in parallel 6ths with the bass (and in parallel 3rds with each other) — legitimate parallels, unlike fifths/octaves.",
  sixtesCaption: "Chain of sixths IV6 – iii6 – ii6 – I6 (3 real parts, the tenor is silent)",
  sixtesNote:
    "<strong>In four parts</strong>, adding a tenor to a chain of parallel 6/3 chords inevitably produces parallel octaves or fifths if the doubling stays fixed. You therefore <strong>alternate the doubling</strong> (one note doubles the bass, the next doubles the 6th…) to break the parallels.",
  progH3: "Standard progressions to know",
  progItems: [
    "<strong>T → SD → D → T</strong>: I – IV (or II6) – V(7) – I.",
    "<strong>Ornamented perfect cadence</strong>: I – IV – I6/4 – V(7) – I.",
    "<strong>Descent by sixths</strong> then cadence: chain of sixths → II6 – V – I.",
    "<strong>Suspensions at the cadence</strong>: 4-3 on the dominant, or 7-6 over a passing chord.",
  ],
  listenBtn: "Play",

  appliH2: "Applications",
  appliP1: "We apply the method from the « Realize » section to an excerpt in Baroque style.",
  appliStepsH3: "Recommended procedure",
  appliSteps: [
    "<strong>Identify the key</strong> (key signature + final cadence) and the mode (is the leading tone present?).",
    "<strong>Segment the bass</strong> and read each figure; translate each column into chord + inversion.",
    "<strong>Spot the formulas</strong> (cadential six-four, 4-3 / 7-6 suspensions, sequences) that dictate the voice leading.",
    "<strong>Realize</strong>: the bass first, then the upper voices, keeping common tones and resolving leading tones and sevenths.",
    "<strong>Check</strong> by ear (PianoPlayer) and in writing (SATB editor + figure analyser).",
  ],
  extraitLabel: "Short model excerpt (Do major, to be realized)",
  extraitConsigne: "Do (5/3) — La (6) — Ré (6) — Sol (6/4) — Sol (7) — Do (5/3)",
  corrigeBox:
    "<strong>Answer key — column-by-column analysis:</strong><br/>• Do (5/3) = <strong>I</strong> (Do-Mi-Sol).<br/>• La (6) = 1st inv.: bass La, 3rd Do, 6th Fa → Fa-La-Do = <strong>IV6</strong>.<br/>• Ré (6) = 1st inv.: bass Ré, 3rd Fa, 6th Si → Si-Ré-Fa = <strong>VII6</strong> (dominant function).<br/>• Sol (6/4) = <strong>I6/4</strong> cadential.<br/>• Sol (7) = <strong>V7</strong> (Sol-Si-Ré-Fa).<br/>• Do (5/3) = <strong>I</strong>.<br/>Progression: <strong>I – IV6 – VII6 – I6/4 – V7 – I</strong>. The VII6 (bass Ré avoids the diminished fifth in the bass) prepares the cadential six-four, then V7 → I.",
  examenH3: "Sight-reading figures in the exam",
  examenP1:
    "In the exam, time is short: first figure the bass <strong>mentally</strong> (degree + inversion) before writing a single note, mark the <strong>leading tones</strong> and <strong>sevenths</strong> to be resolved, and spot the <strong>formulas</strong>. Reminder: here the harmony is <strong>imposed</strong> by the figures (figured bass), unlike the <strong>given bass</strong> of course 26 where you choose the chords. A misread figure is an error of analysis, not of taste.",

  entrainH2: "Practice",
  exercicesH3: "SATB realization exercises",
  exercicesIntro:
    "Realize in four parts (unless stated otherwise), in Do major. The answer key gives one model realization; other correct spacings are possible.",
  exercices: [
    { titre: "Exercise 1 — Root-position cadence", consigne: "Bass: Do3 (5/3) — Sol3 (5/3) — Do3 (5/3) → I – V – I", controle: "Leading tone Si3 (alto) → Do4; contrary motion bass/soprano; no parallels." },
    { titre: "Exercise 2 — Dominant seventh, first inversion", consigne: "Bass: Do3 (5/3) — Si2 (6/5) — Do3 (5/3) → I – V6/5 – I", controle: "Complete 7th chord (no doubling); the tritone Fa/Si resolves inward (Fa3→Mi3, Si2→Do3); seventh Fa3 (tenor) → Mi3." },
    { titre: "Exercise 3 — The cadential six-four", consigne: "Bass: Fa3 (5/3) — Sol3 (6/4) — Sol3 (5/3) — Do3 (5/3) → IV – I6/4 – V – I", controle: "At the 6/4, double the bass Sol (Bass + Tenor); resolution 6th→5th (Mi4→Ré4) and 4th→3rd (Do4→Si3); leading tone Si3 → Do4." },
    { titre: "Exercise 4 — Chain of sixths (3 parts, fauxbourdon)", consigne: "Bass: La3 (6) — Sol3 (6) — Fa3 (6) — Mi3 (6) → IV6 – iii6 – ii6 – I6", controle: "Soprano in parallel 6ths with the bass, alto in parallel 3rds (legitimate parallels); no parallel 5ths or octaves. In four parts, alternate the tenor's doubling to avoid parallel octaves." },
  ],
  voirCorrige: "Show the engraved answer",
  masquerCorrige: "Hide the answer",
  corrigeLabel: "Answer key — one model realization",
  quizH3: "Quiz — 10 questions",
  questions: [
    { q: "In a figured bass, from which note are the figures counted?", opts: ["From middle Do", "From the bass note", "From the soprano", "From the tonic"], a: 1, fb: "The figures notate intervals above the bass note, reduced to the octave." },
    { q: "Which figuring notates the root-position triad?", opts: ["6", "6/4", "Nothing (or 5/3)", "7"], a: 2, fb: "A bass with no figure (or « 5/3 ») = root-position triad (3rd + 5th)." },
    { q: "The figure 6 alone indicates:", opts: ["A seventh chord", "A sixth chord (first inversion)", "A second inversion", "A pedal"], a: 1, fb: "« 6 » (= 6/3) = first inversion: the bass is the third of the chord." },
    { q: "In Do major, a bass Si figured 6/5 corresponds to:", opts: ["VII in root position", "V6/5 (Sol-Si-Ré-Fa, first inversion)", "I6", "V4/3"], a: 1, fb: "Bass Si + 6/5 = first inversion of the dominant seventh chord Sol-Si-Ré-Fa." },
    { q: "In Do major, a bass Ré figured 4/3 corresponds to:", opts: ["II in root position", "V4/3 (Sol7, second inversion)", "V6/5", "I6/4"], a: 1, fb: "Bass Ré (fifth of Sol7) + 4/3 = second inversion of the dominant seventh chord." },
    { q: "In Do major, a bass Fa figured 2 (or 4/2) corresponds to:", opts: ["IV in root position", "V2 (Sol7, third inversion)", "V4/3", "II6"], a: 1, fb: "Bass Fa (seventh of Sol7) + 2 / 4/2 = third inversion of the dominant seventh chord." },
    { q: "A lone ♯ placed below a bass note alters:", opts: ["The bass itself", "The fifth above the bass", "The third above the bass", "All the notes of the chord"], a: 2, fb: "An isolated accidental acts on the third above the bass." },
    { q: "In La minor, a lone ♯ below the bass Mi produces:", opts: ["A Mi minor chord", "Mi-Sol♯-Si: the dominant chord V with its leading tone Sol♯", "A 6/4", "A diminished seventh"], a: 1, fb: "The ♯ raises the third Sol → Sol♯: it is the leading tone, which turns the chord into a true dominant (indispensable in minor)." },
    { q: "Over a dominant bass, the figuring 6/4 → 5/3 notates:", opts: ["A chain of sixths", "A 7-6 suspension", "The cadential six-four (I6/4 → V)", "A tonic pedal"], a: 2, fb: "The tonic placed over the dominant (6/4), then 6th→5th and 4th→3rd: the cadential six-four, on a strong beat." },
    { q: "What is the horizontal dash ( — ) for in a figuring?", opts: ["To remove the chord", "To prolong the same harmony while the bass moves", "To indicate a rest", "To double the bass"], a: 1, fb: "The dash prolongs the sustained notes: the harmony stays, only the bass moves." },
  ],
  bonusLabel: "Bonus question — the key distinction",
  bonusQ: "What is the difference between figured bass and given (unfigured) bass?",
  bonusToggle: "Show the answer",
  bonusA:
    "In the <strong>figured</strong> bass, the figures <strong>impose</strong> the exact harmony to realize; in the <strong>given</strong> bass (unfigured, course 26), it is up to the student to <strong>choose</strong> the harmony.",
};

// ════════════════════════════════════════════════════════════════════════════
// DE
// ════════════════════════════════════════════════════════════════════════════

const de: Cours42Locale = {
  maitreConcept: "Die Aussetzung des Continuo",
  maitreAnecdote:
    "Bach war ein gefürchteter Continuo-Spieler. In Leipzig unterrichtete er die Begleitung allein aus dem bezifferten Bass. Um 1738 hielt er für seine Schüler seine « Vorschriften und Grundsätze zum vierstimmigen Spielen des Generalbasses » fest — ein regelrechtes Handbuch der Aussetzung. Für ihn enthielt ein gut bezifferter Bass bereits die ganze Harmonie: es blieb nur, sie sauber zu entfalten.",
  maitreLesson:
    "Der Continuo ist keine minderwertige Begleitung: er ist « verschlüsselt » notierte Harmonie. Die Ziffern lesen heißt die Harmonie lesen.",

  introH2: "Was ist der bezifferte Bass?",
  introP1:
    "Der <strong>bezifferte Bass</strong> (Generalbass, <em>basso continuo</em>) ist das Kurznotationssystem, das die gesamte Barockmusik von etwa 1600 bis 1750 beherrschte. Der Komponist schreibt nur eine Linie — den Bass — mit darüberstehenden <strong>Ziffern</strong>: diese Ziffern kodieren die Intervalle, die über jede Bassnote zu schichten sind, und damit die ganze Harmonie. Ein zweizeiliges System (Bass + Ziffern) genügt, um die gesamte Begleitung zu notieren.",
  introP2:
    "Damals wurde diese Bezifferung <strong>in Echtzeit ausgesetzt</strong> von einem mehrstimmigen Instrument — Cembalo oder Orgel —, oft verdoppelt durch ein Cello oder eine Gambe, die die Basslinie hielt. Der Cembalist las den Bass, deutete die Ziffern und improvisierte den Akkordsatz: das ist die <em>Aussetzung</em>. Der Continuo ist das harmonische Fundament der Kantate, der Triosonate, der Oper und des Oratoriums.",
  introDistinctionBox:
    "Wir unterscheiden von Anfang an zwei Situationen, die der Kurs nie verwechseln wird: den <strong>bezifferten Bass</strong> — die Ziffern schreiben die exakte Harmonie vor, man <em>setzt aus</em> — und den <strong>unbezifferten (gegebenen) Bass</strong>, bei dem man die Harmonie <em>wählt</em> (Arbeit von Kurs 26).",

  codeH2: "Der Code der Bezifferung",
  codeP1:
    "Die Ziffern bezeichnen stets <strong>Intervalle, gezählt von der Bassnote</strong> (auf die Oktave reduziert). Über die Lage sagen sie nichts: der Aussetzende ordnet die Noten an. Hier die Referenztabelle, illustriert in Do-Dur.",
  refCaption: "Referenztabelle der Bezifferung (Do-Dur)",
  refHeaders: ["Bezifferung", "Name", "Lage", "Intervalle über dem Bass", "Beispiel (Do-Dur)", "Akkord"],
  refRows: [
    { chiffrage: "(nichts) · 5/3", nom: "Dreiklang", position: "Grundstellung", intervalles: "Terz + Quinte", exemple: "Bass Do → Do-Mi-Sol", accord: "I" },
    { chiffrage: "6", nom: "Sextakkord", position: "1. Umkehrung", intervalles: "Terz + Sexte", exemple: "Bass Mi → Do-Mi-Sol", accord: "I6" },
    { chiffrage: "6/4", nom: "Quartsextakkord", position: "2. Umkehrung", intervalles: "Quarte + Sexte", exemple: "Bass Sol → Do-Mi-Sol", accord: "I6/4" },
    { chiffrage: "7", nom: "Septakkord", position: "Grundstellung (Septakkord)", intervalles: "Terz + Quinte + Septime", exemple: "Bass Sol → Sol-Si-Ré-Fa", accord: "V7" },
    { chiffrage: "6/5", nom: "Quintsextakkord", position: "1. Umk. des Septakkords", intervalles: "Terz + Quinte + Sexte", exemple: "Bass Si → Sol-Si-Ré-Fa", accord: "V6/5" },
    { chiffrage: "4/3", nom: "Terzquartakkord", position: "2. Umk. des Septakkords", intervalles: "Terz + Quarte + Sexte", exemple: "Bass Ré → Sol-Si-Ré-Fa", accord: "V4/3" },
    { chiffrage: "2 · 4/2", nom: "Sekundakkord", position: "3. Umk. des Septakkords", intervalles: "Sekunde + Quarte + Sexte", exemple: "Bass Fa → Sol-Si-Ré-Fa", accord: "V2" },
  ],
  memoBox:
    "<strong>Merke — die Umkehrungen von Sol7 (Sol-Si-Ré-Fa) in Do-Dur:</strong> Bass Sol = 7 (V7); Bass Si = 6/5 (V6/5); Bass Ré = 4/3 (V4/3); Bass Fa = 2 / 4/2 (V2). Man liest den Bass, erkennt, welcher Akkordton er ist, und die Ziffer bestätigt die Umkehrung.",
  altH3: "Vorzeichen und Sonderzeichen",
  altHeaders: ["Zeichen", "Bedeutung"],
  altRows: [
    { signe: "♯ / ♭ / ♮ allein (unter dem Bass)", sens: "verändert die Terz über dem Bass (nie den Bass selbst)" },
    { signe: "Vorzeichen an einer Ziffer (♯6, 6♭, ♯4)", sens: "verändert nur das bezeichnete bezifferte Intervall" },
    { signe: "durchgestrichene Ziffer oder Ziffer mit « + » (4+, 6+)", sens: "erhöht die Note um einen Halbton — meist den Leitton" },
    { signe: "waagerechter Strich ( — )", sens: "hält dieselbe Harmonie, während sich der Bass bewegt" },
  ],
  altExampleBox:
    "<strong>Schlüsselbeispiel.</strong> In <strong>La-Moll</strong>, unter dem Bass <strong>Mi</strong> (Grundton der Dominante), erhöht ein einzelnes <strong>♯</strong> die Terz über dem Bass (Sol → <strong>Sol♯</strong>). Man erhält Mi-Sol♯-Si, den Dominantakkord <strong>V</strong> mit seinem <strong>Leitton</strong>. Ein unerlässlicher Reflex in Moll, wo der Leitton nie in der Vorzeichnung steht. In Do-Dur ist der Leitton Si bereits diatonisch, es braucht kein Zeichen.",
  altAudioLabel: "Den Dominantakkord in La-Moll hören",
  altAudioBtn: "Mi-Sol♯-Si (V)",

  realiserH2: "Einen bezifferten Bass vierstimmig aussetzen",
  realiserP1:
    "Aussetzen heißt, von Bass + Ziffer zu vier vollständigen Stimmen zu gelangen (SATB: Sopran, Alt, Tenor, Bass). Die Methode verläuft in drei Schritten.",
  methodStepsTitle: "Die Methode in drei Schritten",
  methodSteps: [
    "<strong>Den Akkord bestimmen.</strong> Bass lesen, Ziffer lesen, daraus Akkord und Umkehrung ableiten. Z. B.: Bass Ré, beziffert 4/3, in Do-Dur → 2. Umkehrung von Sol7 → <strong>V4/3</strong> (Sol-Si-Ré-Fa).",
    "<strong>Anordnen.</strong> Die Verdopplung wählen (in Grundstellung und im Sextakkord vorzugsweise den Grundton verdoppeln; im Kadenzquartsextakkord den Bass verdoppeln). Der vollständige Septakkord wird ohne Verdopplung ausgesetzt. Die Stimmordnung wahren (B ≤ T ≤ A ≤ S) und höchstens eine Oktave Abstand zwischen benachbarten Oberstimmen.",
    "<strong>Die Stimmen führen.</strong> Gemeinsame Töne halten, Schritt- und Gegenbewegung bevorzugen, den <strong>Leitton auflösen</strong> (aufwärts zum Grundton) und die <strong>Septime</strong> (schrittweise abwärts), <strong>Parallelquinten und -oktaven</strong> vermeiden.",
  ],
  exempleH3: "Ein vollständig ausgesetztes Beispiel (Do-Dur)",
  exempleConsigne: "Do (5/3) — Fa (5/3) — Sol (6/4) — Sol (5/3) — Do (5/3)",
  exempleEnchainement: "I – IV – I6/4 – V – I (mit Kadenzquartsextakkord)",
  exempleControles:
    "<strong>Kontrollen.</strong> Absteigender Sopran Sol-Fa-Mi-Ré-Mi; im Kadenzquartsextakkord ist der Bass Sol <strong>verdoppelt</strong> (Bass + Tenor); die Auflösung 6/4 → 5/3 lässt die Sexte absteigen (Mi → Ré, Sopran) und die Quarte (Do → Si, Alt); der <strong>Leitton Si</strong> (Alt) steigt zum abschließenden Do; keine Parallelquinten oder -oktaven.",
  scoreHint: "Von Verovio gestochene Systeme — Sopran/Alt im Violinschlüssel, Tenor/Bass im Bassschlüssel.",

  clavierH2: "Die Aussetzung am Tasteninstrument",
  clavierP1:
    "Die vierstimmige Aussetzung « in Partitur » (SATB) verteilt die Stimmen auf zwei Systeme, jede führt ihre Linie. Die Aussetzung <strong>am Tasteninstrument</strong> sucht dagegen die Effizienz und den Spielkomfort des Continuo-Spielers: <strong>der Bass in der linken Hand, der enge Akkord in der rechten Hand</strong>.",
  clavierMGItem: "<strong>Linke Hand</strong>: die Bassnote (oft allein, manchmal in der Oktave verdoppelt).",
  clavierMDItem: "<strong>Rechte Hand</strong>: die drei übrigen Töne in <strong>enger Lage</strong>, in einem engen Ambitus in der Mitte der Klaviatur (etwa zwischen Do4 und Do5), ohne den gleichmäßigen Abstand der SATB-Stimmen zu suchen.",
  clavierP2:
    "Zwei Prinzipien machen das Spiel flüssig: <strong>die gemeinsamen Töne halten</strong> von einem Akkord zum nächsten (die Finger bewegen sich möglichst wenig) und <strong>den Sopran melodisieren</strong> (die obere Note der rechten Hand pflegen). Es gelten dieselben Verbote (Parallelquinten/-oktaven), doch die enge Lage macht sie seltener, und das Ohr entscheidet.",
  clavierTableCaption: "Dieselbe Folge I – IV – I6/4 – V – I, Tastensatz (Do-Dur)",
  clavierCols: ["I", "IV", "I6/4", "V", "I"],
  clavierRowMDLabel: "Rechte Hand (eng, tief→hoch)",
  clavierRowMGLabel: "Linke Hand (Bass)",
  clavierMD: ["Mi4-Sol4-Do5", "Fa4-La4-Do5", "Mi4-Sol4-Do5", "Ré4-Sol4-Si4", "Mi4-Sol4-Do5"],
  clavierMG: ["Do3", "Fa3", "Sol3", "Sol3", "Do3"],
  clavierDiffBox:
    "<strong>Unterschied zum SATB.</strong> Hier bleiben die gemeinsamen Töne Do5 und Sol4 unter denselben Fingern; der Akkord ist kompakt, bereit zum Verzieren oder Arpeggieren. SATB verteilt die Stimmen dagegen über fast zwei Oktaven für den Chorsatz — die Tastenaussetzung ist kein Lagenfehler, sondern eine Begleitpraxis.",
  clavierAudioLabel: "Den Tastensatz hören (rechte Hand + Bass)",
  clavierListenBtn: "I – IV – I6/4 – V – I abspielen",

  marchesH2: "Häufige Bezifferungen und Sequenzen",
  marchesP1: "Einige Formeln kehren ständig wieder: sie zu erkennen beschleunigt das Entziffern.",
  sixQuatreH3: "Der Kadenzquartsextakkord",
  sixQuatreP:
    "Über einem <strong>gehaltenen Dominantbass</strong> notiert die Bezifferung <strong>6/4 → 5/3</strong> den Kadenzquartsextakkord: die Tonika, « aufgehalten » über der Dominante, dann auf den Dominantakkord aufgelöst. In Do-Dur, Bass Sol: das 6/4 gibt Do/Mi über Sol (I6/4), dann Sexte → Quinte und Quarte → Terz ergeben Ré/Si (V). Es ist eine Verzierung der Dominante, stets auf betontem Taktteil.",
  sixQuatreCaption: "Kadenzquartsextakkord → V → I (Do-Dur)",
  retardH3: "Der Vorhalt 4-3",
  retardP1:
    "Der Vorhalt <strong>4-3</strong> hält einen konsonanten Ton, der über dem neuen Bass zur <strong>dissonanten Quarte</strong> wird, ehe er schrittweise abwärts auf die <strong>Terz</strong> auflöst. Drei Schritte: Vorbereitung → Anschlag → Auflösung. In Do-Dur wird das über dem Bass Sol gehaltene Do zur Quarte und löst auf Si auf. Bezifferung: 5/4 → 5/3, also die Formel « 4 — 3 ».",
  retardCaption: "Vorhalt 4-3: die vorgehaltene Stimme ist der Alt (Do4 → Si3)",
  retardP2:
    "Die vorgehaltene Stimme ist der <strong>Alt</strong>: Do4 konsonant (Vorbereitung), Do4 dissonant (Quarte über dem Bass Sol), dann Do4 → <strong>Si3</strong> (Auflösung auf die Terz). Der Vorhalt <strong>7-6</strong> funktioniert ebenso über einem Sextakkord: die Septime über dem Bass löst auf die Sexte auf.",
  sixtesH3: "Die Sextakkordkette",
  sixtesP1:
    "Eine <strong>Sextakkordkette</strong> ist eine Folge von <strong>Sextakkorden (6)</strong>, durch schrittweise Bassbewegung verbunden — eine Reihe erster Umkehrungen. Das klassische Modell wird <strong>dreistimmig</strong> ausgesetzt (Fauxbourdon): über jedem Bass eine Stimme in der Terz und eine in der Sexte. Die Oberstimmen steigen in Parallelsexten mit dem Bass ab (und in Parallelterzen untereinander) — erlaubte Parallelen, anders als Quinten/Oktaven.",
  sixtesCaption: "Sextakkordkette IV6 – iii6 – ii6 – I6 (3 reale Stimmen, der Tenor schweigt)",
  sixtesNote:
    "<strong>Vierstimmig</strong> erzeugt das Hinzufügen eines Tenors zu einer Kette paralleler 6/3-Akkorde zwangsläufig Paralleloktaven oder -quinten, wenn die Verdopplung fest bleibt. Man <strong>wechselt daher die Verdopplung</strong> (eine Note verdoppelt den Bass, die nächste die Sexte…), um die Parallelen zu brechen.",
  progH3: "Typische Progressionen, die man kennen sollte",
  progItems: [
    "<strong>T → S → D → T</strong>: I – IV (oder II6) – V(7) – I.",
    "<strong>Verzierte authentische Kadenz</strong>: I – IV – I6/4 – V(7) – I.",
    "<strong>Abstieg in Sexten</strong> dann Kadenz: Sextakkordkette → II6 – V – I.",
    "<strong>Vorhalte an der Kadenz</strong>: Vorhalt 4-3 auf der Dominante oder 7-6 über einem Durchgangsakkord.",
  ],
  listenBtn: "Abspielen",

  appliH2: "Anwendungen",
  appliP1: "Wir wenden die Methode des Abschnitts « Aussetzen » auf einen Ausschnitt im Barockstil an.",
  appliStepsH3: "Empfohlenes Vorgehen",
  appliSteps: [
    "<strong>Die Tonart bestimmen</strong> (Vorzeichnung + Schlusskadenz) und den Modus (ist der Leitton vorhanden?).",
    "<strong>Den Bass gliedern</strong> und jede Ziffer lesen; jede Spalte in Akkord + Umkehrung übersetzen.",
    "<strong>Die Formeln erkennen</strong> (Kadenzquartsextakkord, Vorhalte 4-3 / 7-6, Sequenzen), die die Stimmführung bestimmen.",
    "<strong>Aussetzen</strong>: zuerst den Bass, dann die Oberstimmen, gemeinsame Töne halten und Leittöne und Septimen auflösen.",
    "<strong>Prüfen</strong> nach Gehör (PianoPlayer) und schriftlich (SATB-Editor + Bezifferungsanalyse).",
  ],
  extraitLabel: "Kurzer Modellausschnitt (Do-Dur, auszusetzen)",
  extraitConsigne: "Do (5/3) — La (6) — Ré (6) — Sol (6/4) — Sol (7) — Do (5/3)",
  corrigeBox:
    "<strong>Lösung — Spalte für Spalte:</strong><br/>• Do (5/3) = <strong>I</strong> (Do-Mi-Sol).<br/>• La (6) = 1. Umk.: Bass La, Terz Do, Sexte Fa → Fa-La-Do = <strong>IV6</strong>.<br/>• Ré (6) = 1. Umk.: Bass Ré, Terz Fa, Sexte Si → Si-Ré-Fa = <strong>VII6</strong> (Dominantfunktion).<br/>• Sol (6/4) = <strong>I6/4</strong> Kadenz.<br/>• Sol (7) = <strong>V7</strong> (Sol-Si-Ré-Fa).<br/>• Do (5/3) = <strong>I</strong>.<br/>Folge: <strong>I – IV6 – VII6 – I6/4 – V7 – I</strong>. Der VII6 (Bass Ré vermeidet die verminderte Quinte im Bass) bereitet den Kadenzquartsextakkord vor, dann V7 → I.",
  examenH3: "Das Entziffern in der Prüfung",
  examenP1:
    "In der Prüfung ist die Zeit knapp: man beziffert den Bass zuerst <strong>im Kopf</strong> (Stufe + Umkehrung), bevor man eine Note schreibt, markiert die aufzulösenden <strong>Leittöne</strong> und <strong>Septimen</strong> und erkennt die <strong>Formeln</strong>. Erinnerung: hier ist die Harmonie durch die Ziffern <strong>vorgeschrieben</strong> (bezifferter Bass), anders als beim <strong>gegebenen Bass</strong> von Kurs 26, wo man die Akkorde wählt. Eine falsch gelesene Ziffer ist ein Analysefehler, kein Geschmacksfehler.",

  entrainH2: "Übung",
  exercicesH3: "Übungen zur SATB-Aussetzung",
  exercicesIntro:
    "Vierstimmig aussetzen (sofern nicht anders angegeben), in Do-Dur. Die Lösung gibt eine Modellaussetzung; andere korrekte Lagen sind möglich.",
  exercices: [
    { titre: "Übung 1 — Kadenz in Grundstellung", consigne: "Bass: Do3 (5/3) — Sol3 (5/3) — Do3 (5/3) → I – V – I", controle: "Leitton Si3 (Alt) → Do4; Gegenbewegung Bass/Sopran; keine Parallelen." },
    { titre: "Übung 2 — Dominantseptakkord, 1. Umkehrung", consigne: "Bass: Do3 (5/3) — Si2 (6/5) — Do3 (5/3) → I – V6/5 – I", controle: "Vollständiger Septakkord (keine Verdopplung); der Tritonus Fa/Si löst nach innen auf (Fa3→Mi3, Si2→Do3); Septime Fa3 (Tenor) → Mi3." },
    { titre: "Übung 3 — Der Kadenzquartsextakkord", consigne: "Bass: Fa3 (5/3) — Sol3 (6/4) — Sol3 (5/3) — Do3 (5/3) → IV – I6/4 – V – I", controle: "Beim 6/4 den Bass Sol verdoppeln (Bass + Tenor); Auflösung Sexte→Quinte (Mi4→Ré4) und Quarte→Terz (Do4→Si3); Leitton Si3 → Do4." },
    { titre: "Übung 4 — Sextakkordkette (3 Stimmen, Fauxbourdon)", consigne: "Bass: La3 (6) — Sol3 (6) — Fa3 (6) — Mi3 (6) → IV6 – iii6 – ii6 – I6", controle: "Sopran in Parallelsexten mit dem Bass, Alt in Parallelterzen (erlaubte Parallelen); keine Parallelquinten oder -oktaven. Vierstimmig die Tenorverdopplung wechseln, um Paralleloktaven zu vermeiden." },
  ],
  voirCorrige: "Gestochene Lösung zeigen",
  masquerCorrige: "Lösung verbergen",
  corrigeLabel: "Lösung — eine Modellaussetzung",
  quizH3: "Quiz — 10 Fragen",
  questions: [
    { q: "Von welcher Note aus werden im bezifferten Bass die Ziffern gezählt?", opts: ["Vom mittleren Do", "Von der Bassnote", "Vom Sopran", "Von der Tonika"], a: 1, fb: "Die Ziffern bezeichnen Intervalle über der Bassnote, auf die Oktave reduziert." },
    { q: "Welche Bezifferung notiert den Dreiklang in Grundstellung?", opts: ["6", "6/4", "Nichts (oder 5/3)", "7"], a: 2, fb: "Ein Bass ohne Ziffer (oder « 5/3 ») = Dreiklang in Grundstellung (Terz + Quinte)." },
    { q: "Die Ziffer 6 allein bezeichnet:", opts: ["Einen Septakkord", "Einen Sextakkord (1. Umkehrung)", "Eine 2. Umkehrung", "Einen Orgelpunkt"], a: 1, fb: "« 6 » (= 6/3) = erste Umkehrung: der Bass ist die Terz des Akkords." },
    { q: "In Do-Dur entspricht ein Bass Si, beziffert 6/5:", opts: ["VII in Grundstellung", "V6/5 (Sol-Si-Ré-Fa, 1. Umkehrung)", "I6", "V4/3"], a: 1, fb: "Bass Si + 6/5 = erste Umkehrung des Dominantseptakkords Sol-Si-Ré-Fa." },
    { q: "In Do-Dur entspricht ein Bass Ré, beziffert 4/3:", opts: ["II in Grundstellung", "V4/3 (Sol7, 2. Umkehrung)", "V6/5", "I6/4"], a: 1, fb: "Bass Ré (Quinte von Sol7) + 4/3 = zweite Umkehrung des Dominantseptakkords." },
    { q: "In Do-Dur entspricht ein Bass Fa, beziffert 2 (oder 4/2):", opts: ["IV in Grundstellung", "V2 (Sol7, 3. Umkehrung)", "V4/3", "II6"], a: 1, fb: "Bass Fa (Septime von Sol7) + 2 / 4/2 = dritte Umkehrung des Dominantseptakkords." },
    { q: "Ein einzelnes ♯ unter einer Bassnote verändert:", opts: ["Den Bass selbst", "Die Quinte über dem Bass", "Die Terz über dem Bass", "Alle Töne des Akkords"], a: 2, fb: "Ein isoliertes Vorzeichen wirkt auf die Terz über dem Bass." },
    { q: "In La-Moll ergibt ein einzelnes ♯ unter dem Bass Mi:", opts: ["Einen Mi-Moll-Akkord", "Mi-Sol♯-Si: den Dominantakkord V mit seinem Leitton Sol♯", "Ein 6/4", "Einen verminderten Septakkord"], a: 1, fb: "Das ♯ erhöht die Terz Sol → Sol♯: es ist der Leitton, der den Akkord zur echten Dominante macht (in Moll unerlässlich)." },
    { q: "Über einem Dominantbass notiert die Bezifferung 6/4 → 5/3:", opts: ["Eine Sextakkordkette", "Einen Vorhalt 7-6", "Den Kadenzquartsextakkord (I6/4 → V)", "Einen Tonika-Orgelpunkt"], a: 2, fb: "Die Tonika über der Dominante (6/4), dann Sexte→Quinte und Quarte→Terz: der Kadenzquartsextakkord, auf betontem Taktteil." },
    { q: "Wozu dient der waagerechte Strich ( — ) in einer Bezifferung?", opts: ["Den Akkord zu streichen", "Dieselbe Harmonie zu halten, während sich der Bass bewegt", "Eine Pause anzuzeigen", "Den Bass zu verdoppeln"], a: 1, fb: "Der Strich hält die gehaltenen Töne: die Harmonie bleibt, nur der Bass bewegt sich." },
  ],
  bonusLabel: "Bonusfrage — die entscheidende Unterscheidung",
  bonusQ: "Was ist der Unterschied zwischen beziffertem und gegebenem (unbeziffertem) Bass?",
  bonusToggle: "Antwort zeigen",
  bonusA:
    "Beim <strong>bezifferten</strong> Bass <strong>schreiben</strong> die Ziffern die exakte auszusetzende Harmonie vor; beim <strong>gegebenen</strong> Bass (unbeziffert, Kurs 26) muss der Schüler die Harmonie <strong>wählen</strong>.",
};

// ════════════════════════════════════════════════════════════════════════════
// ES
// ════════════════════════════════════════════════════════════════════════════

const es: Cours42Locale = {
  maitreConcept: "La realización del continuo",
  maitreAnecdote:
    "Bach era un temible intérprete de continuo. En Leipzig enseñaba el acompañamiento a partir únicamente del bajo cifrado. Hacia 1738 dejó por escrito para sus alumnos sus « Preceptos y principios para tocar a cuatro voces el bajo continuo » (Vorschriften und Grundsätze zum vierstimmigen Spielen des Generalbasses), un verdadero manual de realización. Para él, un bajo bien cifrado ya contenía toda la armonía: solo faltaba desplegarla con limpieza.",
  maitreLesson:
    "El continuo no es un acompañamiento de segunda: es armonía escrita « en clave ». Leer las cifras es leer la armonía.",

  introH2: "¿Qué es el bajo cifrado?",
  introP1:
    "El <strong>bajo cifrado</strong> (o <em>bajo continuo</em>, <em>basso continuo</em>) es el sistema de notación abreviada que reinó sobre toda la música barroca, de hacia 1600 a 1750. El compositor escribe una sola línea — el bajo — coronada por <strong>cifras</strong>: esas cifras codifican los intervalos que hay que superponer sobre cada nota del bajo, y por tanto la armonía completa. Un pentagrama de dos líneas (bajo + cifras) basta para anotar todo el acompañamiento.",
  introP2:
    "En su época, este cifrado se <strong>realizaba en tiempo real</strong> con un instrumento polifónico — el clave o el órgano —, a menudo doblado por un violonchelo o una viola que sostenía la línea del bajo. El clavecinista leía el bajo, interpretaba las cifras e improvisaba la textura de los acordes: eso es la <em>realización</em>. El continuo es el cimiento armónico de la cantata, de la sonata en trío, de la ópera y del oratorio.",
  introDistinctionBox:
    "Distinguimos desde ya dos situaciones que el curso nunca confundirá: el <strong>bajo cifrado</strong> — las cifras imponen la armonía exacta, se <em>realiza</em> — y el <strong>bajo dado</strong> sin cifras, en el que se <em>elige</em> la armonía (trabajo del curso 26).",

  codeH2: "El código del cifrado",
  codeP1:
    "Las cifras indican siempre <strong>intervalos contados desde la nota del bajo</strong> (reducidos a la octava). No dicen nada del registro: es quien realiza quien dispone las notas. Aquí está la tabla de referencia, ilustrada en Do mayor.",
  refCaption: "Tabla de referencia del cifrado (Do mayor)",
  refHeaders: ["Cifrado", "Nombre", "Posición", "Intervalos sobre el bajo", "Ejemplo (Do mayor)", "Acorde"],
  refRows: [
    { chiffrage: "(nada) · 5/3", nom: "acorde perfecto", position: "estado fundamental", intervalles: "3ª + 5ª", exemple: "Bajo Do → Do-Mi-Sol", accord: "I" },
    { chiffrage: "6", nom: "acorde de sexta", position: "1ª inversión", intervalles: "3ª + 6ª", exemple: "Bajo Mi → Do-Mi-Sol", accord: "I6" },
    { chiffrage: "6/4", nom: "acorde de cuarta y sexta", position: "2ª inversión", intervalles: "4ª + 6ª", exemple: "Bajo Sol → Do-Mi-Sol", accord: "I6/4" },
    { chiffrage: "7", nom: "acorde de séptima", position: "estado fund. (acorde de 7ª)", intervalles: "3ª + 5ª + 7ª", exemple: "Bajo Sol → Sol-Si-Ré-Fa", accord: "V7" },
    { chiffrage: "6/5", nom: "acorde de quinta y sexta", position: "1ª inv. de 7ª", intervalles: "3ª + 5ª + 6ª", exemple: "Bajo Si → Sol-Si-Ré-Fa", accord: "V6/5" },
    { chiffrage: "4/3", nom: "acorde de tercera y cuarta", position: "2ª inv. de 7ª", intervalles: "3ª + 4ª + 6ª", exemple: "Bajo Ré → Sol-Si-Ré-Fa", accord: "V4/3" },
    { chiffrage: "2 · 4/2", nom: "acorde de segunda", position: "3ª inv. de 7ª", intervalles: "2ª + 4ª + 6ª", exemple: "Bajo Fa → Sol-Si-Ré-Fa", accord: "V2" },
  ],
  memoBox:
    "<strong>Memo — las inversiones de Sol7 (Sol-Si-Ré-Fa) en Do mayor:</strong> bajo Sol = 7 (V7); bajo Si = 6/5 (V6/5); bajo Ré = 4/3 (V4/3); bajo Fa = 2 / 4/2 (V2). Se lee el bajo, se identifica de qué nota del acorde se trata y la cifra confirma la inversión.",
  altH3: "Alteraciones y signos particulares",
  altHeaders: ["Signo", "Significado"],
  altRows: [
    { signe: "♯ / ♭ / ♮ solo (bajo el bajo)", sens: "altera la tercera sobre el bajo (nunca el bajo mismo)" },
    { signe: "alteración pegada a una cifra (♯6, 6♭, ♯4)", sens: "altera únicamente el intervalo cifrado indicado" },
    { signe: "cifra tachada o seguida de « + » (4+, 6+)", sens: "sube la nota un semitono — casi siempre la sensible" },
    { signe: "guion horizontal ( — )", sens: "prolonga la misma armonía mientras el bajo se desplaza" },
  ],
  altExampleBox:
    "<strong>Ejemplo clave.</strong> En <strong>La menor</strong>, bajo la nota <strong>Mi</strong> (fundamental de la dominante), un <strong>♯</strong> solo sube la tercera sobre el bajo (Sol → <strong>Sol♯</strong>). Se obtiene Mi-Sol♯-Si, el acorde de dominante <strong>V</strong> con su <strong>sensible</strong>. Reflejo indispensable en modo menor, donde la sensible nunca está en la armadura. En Do mayor, al ser la sensible Si ya diatónica, no hace falta ningún signo.",
  altAudioLabel: "Escuchar el acorde de dominante en La menor",
  altAudioBtn: "Mi-Sol♯-Si (V)",

  realiserH2: "Realizar un bajo cifrado a cuatro voces",
  realiserP1:
    "Realizar es pasar del bajo + cifra a cuatro voces completas (SATB: Soprano, Alto, Tenor, Bajo). El método se desarrolla en tres tiempos.",
  methodStepsTitle: "El método en tres tiempos",
  methodSteps: [
    "<strong>Identificar el acorde.</strong> Leer el bajo, leer la cifra, deducir el acorde y su inversión. Ej.: bajo Ré cifrado 4/3 en Do mayor → 2ª inversión de Sol7 → <strong>V4/3</strong> (Sol-Si-Ré-Fa).",
    "<strong>Disponer.</strong> Elegir la duplicación (en estado fundamental y en acorde de sexta, duplicar preferentemente la fundamental; en el 6/4 cadencial, duplicar el bajo). El acorde de séptima completo se realiza sin duplicación. Respetar el orden de las voces (B ≤ T ≤ A ≤ S) y la distancia máxima de una octava entre voces superiores contiguas.",
    "<strong>Conducir las voces.</strong> Mantener las notas comunes, favorecer el movimiento conjunto y contrario, <strong>resolver la sensible</strong> (subida a la tónica) y la <strong>séptima</strong> (bajada por grados conjuntos), proscribir las <strong>quintas y octavas paralelas</strong>.",
  ],
  exempleH3: "Un ejemplo enteramente realizado (Do mayor)",
  exempleConsigne: "Do (5/3) — Fa (5/3) — Sol (6/4) — Sol (5/3) — Do (5/3)",
  exempleEnchainement: "I – IV – I6/4 – V – I (con 6/4 cadencial)",
  exempleControles:
    "<strong>Controles.</strong> Soprano descendente Sol-Fa-Mi-Ré-Mi; en el 6/4 cadencial, el bajo Sol está <strong>duplicado</strong> (Bajo + Tenor); la resolución 6/4 → 5/3 hace bajar la 6ª (Mi → Ré, soprano) y la 4ª (Do → Si, alto); la <strong>sensible Si</strong> (alto) sube al Do final; ninguna quinta ni octava paralela.",
  scoreHint: "Pentagramas grabados por Verovio — Soprano/Alto en clave de sol, Tenor/Bajo en clave de fa.",

  clavierH2: "La realización al teclado",
  clavierP1:
    "La realización a cuatro voces « en partitura » (SATB) reparte las voces en dos pentagramas, cada una llevando su línea. La realización <strong>al teclado</strong>, en cambio, busca la eficacia y la comodidad de quien toca el continuo: <strong>el bajo en la mano izquierda, el acorde cerrado en la mano derecha</strong>.",
  clavierMGItem: "<strong>Mano izquierda</strong>: la nota del bajo (a menudo sola, a veces duplicada a la octava).",
  clavierMDItem: "<strong>Mano derecha</strong>: las otras tres notas en <strong>posición cerrada</strong>, en un ámbito ceñido al centro del teclado (grosso modo entre Do4 y Do5), sin buscar la distancia regular de las voces SATB.",
  clavierP2:
    "Dos principios hacen fluido el toque: <strong>mantener las notas comunes</strong> de un acorde al siguiente (los dedos se mueven lo menos posible) y <strong>melodizar el soprano</strong> (cuidar la nota superior de la mano derecha). Se aplican las mismas prohibiciones (quintas/octavas paralelas), pero la posición cerrada las hace más raras y el oído prima.",
  clavierTableCaption: "La misma progresión I – IV – I6/4 – V – I, disposición de teclado (Do mayor)",
  clavierCols: ["I", "IV", "I6/4", "V", "I"],
  clavierRowMDLabel: "Mano derecha (cerrada, grave→agudo)",
  clavierRowMGLabel: "Mano izquierda (bajo)",
  clavierMD: ["Mi4-Sol4-Do5", "Fa4-La4-Do5", "Mi4-Sol4-Do5", "Ré4-Sol4-Si4", "Mi4-Sol4-Do5"],
  clavierMG: ["Do3", "Fa3", "Sol3", "Sol3", "Do3"],
  clavierDiffBox:
    "<strong>Diferencia con el SATB.</strong> Aquí las notas comunes Do5 y Sol4 permanecen bajo los mismos dedos; el acorde es compacto, listo para ornamentar o arpegiar. El SATB, al contrario, reparte las voces en casi dos octavas para la escritura coral — la realización de teclado no es un « error » de disposición, es una práctica de acompañamiento.",
  clavierAudioLabel: "Escuchar la disposición de teclado (mano derecha + bajo)",
  clavierListenBtn: "Escuchar I – IV – I6/4 – V – I",

  marchesH2: "Cifrados frecuentes y marchas",
  marchesP1: "Algunas fórmulas reaparecen sin cesar: identificarlas acelera el descifrado.",
  sixQuatreH3: "El 6/4 cadencial",
  sixQuatreP:
    "Sobre un <strong>bajo de dominante sostenido</strong>, el cifrado <strong>6/4 → 5/3</strong> anota el 6/4 cadencial: la tónica puesta « en suspenso » sobre la dominante, luego resuelta en el acorde de dominante. En Do mayor, bajo Sol: el 6/4 da Do/Mi sobre Sol (I6/4), luego 6ª → 5ª y 4ª → 3ª dan Ré/Si (V). Es un adorno de la dominante, siempre en tiempo fuerte.",
  sixQuatreCaption: "6/4 cadencial → V → I (Do mayor)",
  retardH3: "El retardo 4-3 (suspensión)",
  retardP1:
    "El retardo <strong>4-3</strong> prolonga una nota consonante que se vuelve una <strong>cuarta disonante</strong> sobre el nuevo bajo, antes de resolver por grado conjunto descendente en la <strong>tercera</strong>. Tres tiempos: preparación → percusión → resolución. En Do mayor, el Do sostenido sobre un bajo Sol se vuelve una 4ª y resuelve en Si. Cifrado: 5/4 → 5/3, es decir la fórmula « 4 — 3 ».",
  retardCaption: "Retardo 4-3: la voz suspendida es el alto (Do4 → Si3)",
  retardP2:
    "La voz suspendida es el <strong>alto</strong>: Do4 consonante (preparación), Do4 disonante (4ª sobre el bajo Sol), luego Do4 → <strong>Si3</strong> (resolución en la 3ª). El retardo <strong>7-6</strong> funciona igual sobre un acorde de sexta: la 7ª sobre el bajo resuelve en la 6ª.",
  sixtesH3: "La marcha de sextas",
  sixtesP1:
    "Una <strong>marcha de sextas</strong> es una cadena de acordes de <strong>sexta (6)</strong> encadenados por movimiento conjunto del bajo — una sucesión de primeras inversiones. El modelo clásico se realiza a <strong>tres voces reales</strong> (fabordón): sobre cada bajo, una voz a la tercera y otra a la sexta. Las voces superiores descienden en 6ªs paralelas con el bajo (y en 3ªs paralelas entre sí) — paralelismos lícitos, al contrario que quintas/octavas.",
  sixtesCaption: "Marcha de sextas IV6 – iii6 – ii6 – I6 (3 voces reales, el tenor calla)",
  sixtesNote:
    "<strong>A cuatro voces</strong>, añadir un tenor a una cadena de 6/3 paralelos produce inevitablemente octavas o quintas paralelas si se mantiene una duplicación fija. Por eso se <strong>alterna la duplicación</strong> (una nota duplica el bajo, la siguiente la 6ª…) para romper los paralelismos.",
  progH3: "Progresiones tipo que hay que conocer",
  progItems: [
    "<strong>T → SD → D → T</strong>: I – IV (o II6) – V(7) – I.",
    "<strong>Cadencia perfecta adornada</strong>: I – IV – I6/4 – V(7) – I.",
    "<strong>Descenso por sextas</strong> y luego cadencia: marcha de sextas → II6 – V – I.",
    "<strong>Retardos en la cadencia</strong>: suspensión 4-3 sobre la dominante, o 7-6 sobre un acorde de paso.",
  ],
  listenBtn: "Escuchar",

  appliH2: "Aplicaciones",
  appliP1: "Aplicamos el método de la sección « Realizar » a un fragmento de estilo barroco.",
  appliStepsH3: "Procedimiento recomendado",
  appliSteps: [
    "<strong>Localizar la tonalidad</strong> (armadura + cadencia final) y el modo (¿está presente la sensible?).",
    "<strong>Segmentar el bajo</strong> y leer cada cifra; traducir cada columna en acorde + inversión.",
    "<strong>Detectar las fórmulas</strong> (6/4 cadencial, retardos 4-3 / 7-6, marchas) que dictan la conducción.",
    "<strong>Realizar</strong>: primero el bajo, luego las voces superiores manteniendo las notas comunes y resolviendo sensibles y séptimas.",
    "<strong>Verificar</strong> de oído (PianoPlayer) y por escrito (editor SATB + analizador de cifrado).",
  ],
  extraitLabel: "Breve fragmento modelo (Do mayor, para realizar)",
  extraitConsigne: "Do (5/3) — La (6) — Ré (6) — Sol (6/4) — Sol (7) — Do (5/3)",
  corrigeBox:
    "<strong>Solución — análisis columna por columna:</strong><br/>• Do (5/3) = <strong>I</strong> (Do-Mi-Sol).<br/>• La (6) = 1ª inv.: bajo La, 3ª Do, 6ª Fa → Fa-La-Do = <strong>IV6</strong>.<br/>• Ré (6) = 1ª inv.: bajo Ré, 3ª Fa, 6ª Si → Si-Ré-Fa = <strong>VII6</strong> (función de dominante).<br/>• Sol (6/4) = <strong>I6/4</strong> cadencial.<br/>• Sol (7) = <strong>V7</strong> (Sol-Si-Ré-Fa).<br/>• Do (5/3) = <strong>I</strong>.<br/>Encadenamiento: <strong>I – IV6 – VII6 – I6/4 – V7 – I</strong>. El VII6 (el bajo Ré evita la quinta disminuida en el bajo) prepara el 6/4 cadencial, luego V7 → I.",
  examenH3: "El descifrado en el examen",
  examenP1:
    "En la prueba el tiempo apremia: primero se cifra el bajo <strong>mentalmente</strong> (grado + inversión) antes de escribir una sola nota, se marcan las <strong>sensibles</strong> y las <strong>séptimas</strong> por resolver, se detectan las <strong>fórmulas</strong>. Recuerda: aquí la armonía está <strong>impuesta</strong> por las cifras (bajo cifrado), a diferencia del <strong>bajo dado</strong> del curso 26 donde se eligen los acordes. Una cifra mal leída es un error de análisis, no de gusto.",

  entrainH2: "Entrenamiento",
  exercicesH3: "Ejercicios de realización SATB",
  exercicesIntro:
    "Realizar a cuatro voces (salvo indicación contraria), en Do mayor. La solución da una realización tipo; son posibles otras disposiciones correctas.",
  exercices: [
    { titre: "Ejercicio 1 — Cadencia fundamental", consigne: "Bajo: Do3 (5/3) — Sol3 (5/3) — Do3 (5/3) → I – V – I", controle: "Sensible Si3 (alto) → Do4; movimiento contrario bajo/soprano; sin paralelismos." },
    { titre: "Ejercicio 2 — Séptima de dominante, 1ª inversión", consigne: "Bajo: Do3 (5/3) — Si2 (6/5) — Do3 (5/3) → I – V6/5 – I", controle: "Acorde de 7ª completo (sin duplicación); el tritono Fa/Si resuelve hacia dentro (Fa3→Mi3, Si2→Do3); séptima Fa3 (tenor) → Mi3." },
    { titre: "Ejercicio 3 — El 6/4 cadencial", consigne: "Bajo: Fa3 (5/3) — Sol3 (6/4) — Sol3 (5/3) — Do3 (5/3) → IV – I6/4 – V – I", controle: "En el 6/4, duplicar el bajo Sol (Bajo + Tenor); resolución 6ª→5ª (Mi4→Ré4) y 4ª→3ª (Do4→Si3); sensible Si3 → Do4." },
    { titre: "Ejercicio 4 — Marcha de sextas (3 voces, fabordón)", consigne: "Bajo: La3 (6) — Sol3 (6) — Fa3 (6) — Mi3 (6) → IV6 – iii6 – ii6 – I6", controle: "Soprano en 6ªs paralelas con el bajo, alto en 3ªs paralelas (paralelismos lícitos); ninguna 5ª ni 8ª paralela. A 4 voces, alternar la duplicación del tenor para evitar las octavas paralelas." },
  ],
  voirCorrige: "Ver la solución grabada",
  masquerCorrige: "Ocultar la solución",
  corrigeLabel: "Solución — una realización tipo",
  quizH3: "Cuestionario — 10 preguntas",
  questions: [
    { q: "En un bajo cifrado, ¿desde qué nota se cuentan las cifras?", opts: ["Desde el Do central", "Desde la nota del bajo", "Desde el soprano", "Desde la tónica"], a: 1, fb: "Las cifras anotan intervalos sobre la nota del bajo, reducidos a la octava." },
    { q: "¿Qué cifrado anota el acorde perfecto en estado fundamental?", opts: ["6", "6/4", "Nada (o 5/3)", "7"], a: 2, fb: "Un bajo sin cifra (o « 5/3 ») = acorde perfecto en estado fundamental (3ª + 5ª)." },
    { q: "La cifra 6 sola indica:", opts: ["Un acorde de séptima", "Un acorde de sexta (1ª inversión)", "Una 2ª inversión", "Un pedal"], a: 1, fb: "« 6 » (= 6/3) = primera inversión: el bajo es la tercera del acorde." },
    { q: "En Do mayor, un bajo Si cifrado 6/5 corresponde a:", opts: ["VII en estado fundamental", "V6/5 (Sol-Si-Ré-Fa, 1ª inversión)", "I6", "V4/3"], a: 1, fb: "Bajo Si + 6/5 = primera inversión del acorde de séptima de dominante Sol-Si-Ré-Fa." },
    { q: "En Do mayor, un bajo Ré cifrado 4/3 corresponde a:", opts: ["II en estado fundamental", "V4/3 (Sol7, 2ª inversión)", "V6/5", "I6/4"], a: 1, fb: "Bajo Ré (quinta de Sol7) + 4/3 = segunda inversión del acorde de séptima de dominante." },
    { q: "En Do mayor, un bajo Fa cifrado 2 (o 4/2) corresponde a:", opts: ["IV en estado fundamental", "V2 (Sol7, 3ª inversión)", "V4/3", "II6"], a: 1, fb: "Bajo Fa (séptima de Sol7) + 2 / 4/2 = tercera inversión del acorde de séptima de dominante." },
    { q: "Un ♯ solo colocado bajo una nota del bajo altera:", opts: ["El bajo mismo", "La quinta sobre el bajo", "La tercera sobre el bajo", "Todas las notas del acorde"], a: 2, fb: "Una alteración aislada actúa sobre la tercera sobre el bajo." },
    { q: "En La menor, un ♯ solo bajo la nota Mi produce:", opts: ["Un acorde de Mi menor", "Mi-Sol♯-Si: el acorde de dominante V con su sensible Sol♯", "Un 6/4", "Una séptima disminuida"], a: 1, fb: "El ♯ sube la tercera Sol → Sol♯: es la sensible, que convierte el acorde en una verdadera dominante (indispensable en menor)." },
    { q: "Sobre un bajo de dominante, el cifrado 6/4 → 5/3 anota:", opts: ["Una marcha de sextas", "Un retardo 7-6", "El 6/4 cadencial (I6/4 → V)", "Un pedal de tónica"], a: 2, fb: "La tónica puesta sobre la dominante (6/4), luego 6ª→5ª y 4ª→3ª: el 6/4 cadencial, en tiempo fuerte." },
    { q: "¿Para qué sirve el guion horizontal ( — ) en un cifrado?", opts: ["Para suprimir el acorde", "Para prolongar la misma armonía mientras el bajo se desplaza", "Para indicar un silencio", "Para duplicar el bajo"], a: 1, fb: "El guion prolonga las notas sostenidas: la armonía permanece, solo el bajo se mueve." },
  ],
  bonusLabel: "Pregunta extra — la distinción clave",
  bonusQ: "¿Qué diferencia hay entre bajo cifrado y bajo dado?",
  bonusToggle: "Ver la respuesta",
  bonusA:
    "En el bajo <strong>cifrado</strong>, las cifras <strong>imponen</strong> la armonía exacta a realizar; en el bajo <strong>dado</strong> (sin cifras, curso 26), es el alumno quien debe <strong>elegir</strong> la armonía.",
};

// ════════════════════════════════════════════════════════════════════════════
// IT
// ════════════════════════════════════════════════════════════════════════════

const it: Cours42Locale = {
  maitreConcept: "La realizzazione del continuo",
  maitreAnecdote:
    "Bach era un temuto continuista. A Lipsia insegnava l'accompagnamento a partire dal solo basso numerato. Verso il 1738 mise per iscritto per i suoi allievi i suoi « Precetti e principi per suonare a quattro voci il basso continuo » (Vorschriften und Grundsätze zum vierstimmigen Spielen des Generalbasses), un vero manuale di realizzazione. Per lui un basso ben numerato conteneva già tutta l'armonia: restava solo da dispiegarla con pulizia.",
  maitreLesson:
    "Il continuo non è un accompagnamento di serie B: è armonia scritta « in codice ». Leggere le cifre è leggere l'armonia.",

  introH2: "Che cos'è il basso numerato?",
  introP1:
    "Il <strong>basso numerato</strong> (o <em>basso continuo</em>, <em>basso cifrato</em>) è il sistema di notazione abbreviata che ha regnato su tutta la musica barocca, dal 1600 circa al 1750. Il compositore scrive una sola linea — il basso — sormontata da <strong>cifre</strong>: queste cifre codificano gli intervalli da sovrapporre a ogni nota del basso, e dunque l'armonia completa. Un rigo di due linee (basso + cifre) basta ad annotare tutto l'accompagnamento.",
  introP2:
    "All'epoca questa numerica veniva <strong>realizzata in tempo reale</strong> da uno strumento polifonico — il clavicembalo o l'organo —, spesso raddoppiato da un violoncello o da una viola che teneva la linea del basso. Il cembalista leggeva il basso, interpretava le cifre e improvvisava la tessitura degli accordi: è la <em>realizzazione</em>. Il continuo è il fondamento armonico della cantata, della sonata a tre, dell'opera e dell'oratorio.",
  introDistinctionBox:
    "Distinguiamo fin d'ora due situazioni che il corso non confonderà mai: il <strong>basso numerato</strong> — le cifre impongono l'armonia esatta, si <em>realizza</em> — e il <strong>basso dato</strong> senza cifre, in cui si <em>sceglie</em> l'armonia (lavoro del corso 26).",

  codeH2: "Il codice della numerica",
  codeP1:
    "Le cifre indicano sempre <strong>intervalli contati dalla nota del basso</strong> (ridotti all'ottava). Non dicono nulla del registro: è chi realizza a disporre le note. Ecco la tabella di riferimento, illustrata in Do maggiore.",
  refCaption: "Tabella di riferimento della numerica (Do maggiore)",
  refHeaders: ["Numerica", "Nome", "Posizione", "Intervalli sul basso", "Esempio (Do maggiore)", "Accordo"],
  refRows: [
    { chiffrage: "(niente) · 5/3", nom: "accordo perfetto", position: "stato fondamentale", intervalles: "3ª + 5ª", exemple: "Basso Do → Do-Mi-Sol", accord: "I" },
    { chiffrage: "6", nom: "accordo di sesta", position: "1º rivolto", intervalles: "3ª + 6ª", exemple: "Basso Mi → Do-Mi-Sol", accord: "I6" },
    { chiffrage: "6/4", nom: "accordo di quarta e sesta", position: "2º rivolto", intervalles: "4ª + 6ª", exemple: "Basso Sol → Do-Mi-Sol", accord: "I6/4" },
    { chiffrage: "7", nom: "accordo di settima", position: "stato fond. (accordo di 7ª)", intervalles: "3ª + 5ª + 7ª", exemple: "Basso Sol → Sol-Si-Ré-Fa", accord: "V7" },
    { chiffrage: "6/5", nom: "accordo di quinta e sesta", position: "1º riv. di 7ª", intervalles: "3ª + 5ª + 6ª", exemple: "Basso Si → Sol-Si-Ré-Fa", accord: "V6/5" },
    { chiffrage: "4/3", nom: "accordo di terza e quarta", position: "2º riv. di 7ª", intervalles: "3ª + 4ª + 6ª", exemple: "Basso Ré → Sol-Si-Ré-Fa", accord: "V4/3" },
    { chiffrage: "2 · 4/2", nom: "accordo di seconda", position: "3º riv. di 7ª", intervalles: "2ª + 4ª + 6ª", exemple: "Basso Fa → Sol-Si-Ré-Fa", accord: "V2" },
  ],
  memoBox:
    "<strong>Memo — i rivolti di Sol7 (Sol-Si-Ré-Fa) in Do maggiore:</strong> basso Sol = 7 (V7); basso Si = 6/5 (V6/5); basso Ré = 4/3 (V4/3); basso Fa = 2 / 4/2 (V2). Si legge il basso, si identifica quale nota dell'accordo sia, e la cifra conferma il rivolto.",
  altH3: "Alterazioni e segni particolari",
  altHeaders: ["Segno", "Significato"],
  altRows: [
    { signe: "♯ / ♭ / ♮ da solo (sotto il basso)", sens: "altera la terza sopra il basso (mai il basso stesso)" },
    { signe: "alterazione accanto a una cifra (♯6, 6♭, ♯4)", sens: "altera unicamente l'intervallo numerato indicato" },
    { signe: "cifra barrata o seguita da « + » (4+, 6+)", sens: "alza la nota di un semitono — il più delle volte la sensibile" },
    { signe: "trattino orizzontale ( — )", sens: "prolunga la stessa armonia mentre il basso si sposta" },
  ],
  altExampleBox:
    "<strong>Esempio chiave.</strong> In <strong>La minore</strong>, sotto la nota <strong>Mi</strong> (fondamentale della dominante), un <strong>♯</strong> da solo alza la terza sopra il basso (Sol → <strong>Sol♯</strong>). Si ottiene Mi-Sol♯-Si, l'accordo di dominante <strong>V</strong> con la sua <strong>sensibile</strong>. Riflesso indispensabile in minore, dove la sensibile non è mai in armatura. In Do maggiore, essendo la sensibile Si già diatonica, non serve alcun segno.",
  altAudioLabel: "Ascolta l'accordo di dominante in La minore",
  altAudioBtn: "Mi-Sol♯-Si (V)",

  realiserH2: "Realizzare un basso numerato a quattro voci",
  realiserP1:
    "Realizzare significa passare dal basso + cifra a quattro voci complete (SATB: Soprano, Contralto, Tenore, Basso). Il metodo si svolge in tre tempi.",
  methodStepsTitle: "Il metodo in tre tempi",
  methodSteps: [
    "<strong>Identificare l'accordo.</strong> Leggere il basso, leggere la cifra, dedurne l'accordo e il suo rivolto. Es.: basso Ré numerato 4/3 in Do maggiore → 2º rivolto di Sol7 → <strong>V4/3</strong> (Sol-Si-Ré-Fa).",
    "<strong>Disporre.</strong> Scegliere il raddoppio (allo stato fondamentale e nell'accordo di sesta, raddoppiare preferibilmente la fondamentale; nella quartasesta cadenzale, raddoppiare il basso). L'accordo di settima completo si realizza senza raddoppio. Rispettare l'ordine delle voci (B ≤ T ≤ A ≤ S) e la distanza massima di un'ottava tra voci superiori contigue.",
    "<strong>Condurre le voci.</strong> Mantenere le note comuni, privilegiare il moto congiunto e contrario, <strong>risolvere la sensibile</strong> (salita alla tonica) e la <strong>settima</strong> (discesa per grado congiunto), proscrivere le <strong>quinte e ottave parallele</strong>.",
  ],
  exempleH3: "Un esempio interamente realizzato (Do maggiore)",
  exempleConsigne: "Do (5/3) — Fa (5/3) — Sol (6/4) — Sol (5/3) — Do (5/3)",
  exempleEnchainement: "I – IV – I6/4 – V – I (con quartasesta cadenzale)",
  exempleControles:
    "<strong>Controlli.</strong> Soprano discendente Sol-Fa-Mi-Ré-Mi; nella quartasesta cadenzale il basso Sol è <strong>raddoppiato</strong> (Basso + Tenore); la risoluzione 6/4 → 5/3 fa scendere la 6ª (Mi → Ré, soprano) e la 4ª (Do → Si, contralto); la <strong>sensibile Si</strong> (contralto) sale al Do finale; nessuna quinta o ottava parallela.",
  scoreHint: "Righi incisi da Verovio — Soprano/Contralto in chiave di violino, Tenore/Basso in chiave di basso.",

  clavierH2: "La realizzazione alla tastiera",
  clavierP1:
    "La realizzazione a quattro voci « in partitura » (SATB) distribuisce le voci su due righi, ciascuna con la sua linea. La realizzazione <strong>alla tastiera</strong>, invece, cerca l'efficienza e la comodità del continuista: <strong>il basso alla mano sinistra, l'accordo stretto alla mano destra</strong>.",
  clavierMGItem: "<strong>Mano sinistra</strong>: la nota del basso (spesso sola, talvolta raddoppiata all'ottava).",
  clavierMDItem: "<strong>Mano destra</strong>: le altre tre note in <strong>posizione stretta</strong>, in un ambito ristretto al centro della tastiera (grosso modo tra Do4 e Do5), senza cercare la distanza regolare delle voci SATB.",
  clavierP2:
    "Due principi rendono fluido il gioco: <strong>mantenere le note comuni</strong> da un accordo all'altro (le dita si muovono il meno possibile) e <strong>melodizzare il soprano</strong> (curare la nota superiore della mano destra). Valgono gli stessi divieti (quinte/ottave parallele), ma la posizione stretta le rende più rare e l'orecchio prevale.",
  clavierTableCaption: "Stessa progressione I – IV – I6/4 – V – I, disposizione per tastiera (Do maggiore)",
  clavierCols: ["I", "IV", "I6/4", "V", "I"],
  clavierRowMDLabel: "Mano destra (stretta, grave→acuto)",
  clavierRowMGLabel: "Mano sinistra (basso)",
  clavierMD: ["Mi4-Sol4-Do5", "Fa4-La4-Do5", "Mi4-Sol4-Do5", "Ré4-Sol4-Si4", "Mi4-Sol4-Do5"],
  clavierMG: ["Do3", "Fa3", "Sol3", "Sol3", "Do3"],
  clavierDiffBox:
    "<strong>Differenza con il SATB.</strong> Qui le note comuni Do5 e Sol4 restano sotto le stesse dita; l'accordo è compatto, pronto a ornamenti o arpeggi. Il SATB, al contrario, distribuisce le voci su quasi due ottave per la scrittura corale — la realizzazione alla tastiera non è un « errore » di disposizione, è una prassi d'accompagnamento.",
  clavierAudioLabel: "Ascolta la disposizione per tastiera (mano destra + basso)",
  clavierListenBtn: "Ascolta I – IV – I6/4 – V – I",

  marchesH2: "Numeriche frequenti e marce",
  marchesP1: "Alcune formule ricorrono di continuo: riconoscerle velocizza la lettura.",
  sixQuatreH3: "La quartasesta cadenzale",
  sixQuatreP:
    "Su un <strong>basso di dominante tenuto</strong>, la numerica <strong>6/4 → 5/3</strong> annota la quartasesta cadenzale: la tonica posta « in sospeso » sulla dominante, poi risolta sull'accordo di dominante. In Do maggiore, basso Sol: la 6/4 dà Do/Mi sopra Sol (I6/4), poi 6ª → 5ª e 4ª → 3ª danno Ré/Si (V). È un ornamento della dominante, sempre sul tempo forte.",
  sixQuatreCaption: "Quartasesta cadenzale → V → I (Do maggiore)",
  retardH3: "Il ritardo 4-3 (sospensione)",
  retardP1:
    "Il ritardo <strong>4-3</strong> prolunga una nota consonante che diventa una <strong>quarta dissonante</strong> sul nuovo basso, prima di risolvere per grado congiunto discendente sulla <strong>terza</strong>. Tre tempi: preparazione → percussione → risoluzione. In Do maggiore, il Do tenuto su un basso Sol diventa una 4ª e risolve su Si. Numerica: 5/4 → 5/3, cioè la formula « 4 — 3 ».",
  retardCaption: "Ritardo 4-3: la voce sospesa è il contralto (Do4 → Si3)",
  retardP2:
    "La voce sospesa è il <strong>contralto</strong>: Do4 consonante (preparazione), Do4 dissonante (4ª sul basso Sol), poi Do4 → <strong>Si3</strong> (risoluzione sulla 3ª). Il ritardo <strong>7-6</strong> funziona allo stesso modo su un accordo di sesta: la 7ª sopra il basso risolve sulla 6ª.",
  sixtesH3: "La marcia di seste",
  sixtesP1:
    "Una <strong>marcia di seste</strong> è una catena di accordi di <strong>sesta (6)</strong> concatenati per moto congiunto del basso — una successione di primi rivolti. Il modello classico si realizza a <strong>tre voci reali</strong> (falsobordone): sopra ogni basso, una voce alla terza e una alla sesta. Le voci superiori scendono in 6ª parallele con il basso (e in 3ª parallele tra loro) — parallelismi leciti, al contrario di quinte/ottave.",
  sixtesCaption: "Marcia di seste IV6 – iii6 – ii6 – I6 (3 voci reali, il tenore tace)",
  sixtesNote:
    "<strong>A quattro voci</strong>, aggiungere un tenore a una catena di 6/3 paralleli produce inevitabilmente ottave o quinte parallele se si mantiene un raddoppio fisso. Si <strong>alterna allora il raddoppio</strong> (una nota raddoppia il basso, la successiva la 6ª…) per spezzare i parallelismi.",
  progH3: "Progressioni tipo da conoscere",
  progItems: [
    "<strong>T → SD → D → T</strong>: I – IV (o II6) – V(7) – I.",
    "<strong>Cadenza perfetta ornata</strong>: I – IV – I6/4 – V(7) – I.",
    "<strong>Discesa per seste</strong> poi cadenza: marcia di seste → II6 – V – I.",
    "<strong>Ritardi alla cadenza</strong>: sospensione 4-3 sulla dominante, o 7-6 su un accordo di passaggio.",
  ],
  listenBtn: "Ascolta",

  appliH2: "Applicazioni",
  appliP1: "Applichiamo il metodo della sezione « Realizzare » a un estratto in stile barocco.",
  appliStepsH3: "Procedimento consigliato",
  appliSteps: [
    "<strong>Individuare la tonalità</strong> (armatura + cadenza finale) e il modo (è presente la sensibile?).",
    "<strong>Segmentare il basso</strong> e leggere ogni cifra; tradurre ogni colonna in accordo + rivolto.",
    "<strong>Riconoscere le formule</strong> (quartasesta cadenzale, ritardi 4-3 / 7-6, marce) che dettano la condotta.",
    "<strong>Realizzare</strong>: prima il basso, poi le voci superiori mantenendo le note comuni e risolvendo sensibili e settime.",
    "<strong>Verificare</strong> a orecchio (PianoPlayer) e per iscritto (editor SATB + analizzatore della numerica).",
  ],
  extraitLabel: "Breve estratto modello (Do maggiore, da realizzare)",
  extraitConsigne: "Do (5/3) — La (6) — Ré (6) — Sol (6/4) — Sol (7) — Do (5/3)",
  corrigeBox:
    "<strong>Soluzione — analisi colonna per colonna:</strong><br/>• Do (5/3) = <strong>I</strong> (Do-Mi-Sol).<br/>• La (6) = 1º riv.: basso La, 3ª Do, 6ª Fa → Fa-La-Do = <strong>IV6</strong>.<br/>• Ré (6) = 1º riv.: basso Ré, 3ª Fa, 6ª Si → Si-Ré-Fa = <strong>VII6</strong> (funzione di dominante).<br/>• Sol (6/4) = <strong>I6/4</strong> cadenzale.<br/>• Sol (7) = <strong>V7</strong> (Sol-Si-Ré-Fa).<br/>• Do (5/3) = <strong>I</strong>.<br/>Concatenazione: <strong>I – IV6 – VII6 – I6/4 – V7 – I</strong>. Il VII6 (il basso Ré evita la quinta diminuita al basso) prepara la quartasesta cadenzale, poi V7 → I.",
  examenH3: "La lettura della numerica all'esame",
  examenP1:
    "Alla prova il tempo è contato: si numera dapprima il basso <strong>mentalmente</strong> (grado + rivolto) prima di scrivere una sola nota, si segnano le <strong>sensibili</strong> e le <strong>settime</strong> da risolvere, si riconoscono le <strong>formule</strong>. Promemoria: qui l'armonia è <strong>imposta</strong> dalle cifre (basso numerato), a differenza del <strong>basso dato</strong> del corso 26 dove si scelgono gli accordi. Una cifra letta male è un errore d'analisi, non di gusto.",

  entrainH2: "Allenamento",
  exercicesH3: "Esercizi di realizzazione SATB",
  exercicesIntro:
    "Realizzare a quattro voci (salvo diversa indicazione), in Do maggiore. La soluzione dà una realizzazione tipo; sono possibili altre disposizioni corrette.",
  exercices: [
    { titre: "Esercizio 1 — Cadenza fondamentale", consigne: "Basso: Do3 (5/3) — Sol3 (5/3) — Do3 (5/3) → I – V – I", controle: "Sensibile Si3 (contralto) → Do4; moto contrario basso/soprano; nessun parallelismo." },
    { titre: "Esercizio 2 — Settima di dominante, 1º rivolto", consigne: "Basso: Do3 (5/3) — Si2 (6/5) — Do3 (5/3) → I – V6/5 – I", controle: "Accordo di 7ª completo (nessun raddoppio); il tritono Fa/Si risolve verso l'interno (Fa3→Mi3, Si2→Do3); settima Fa3 (tenore) → Mi3." },
    { titre: "Esercizio 3 — La quartasesta cadenzale", consigne: "Basso: Fa3 (5/3) — Sol3 (6/4) — Sol3 (5/3) — Do3 (5/3) → IV – I6/4 – V – I", controle: "Nella 6/4, raddoppiare il basso Sol (Basso + Tenore); risoluzione 6ª→5ª (Mi4→Ré4) e 4ª→3ª (Do4→Si3); sensibile Si3 → Do4." },
    { titre: "Esercizio 4 — Marcia di seste (3 voci, falsobordone)", consigne: "Basso: La3 (6) — Sol3 (6) — Fa3 (6) — Mi3 (6) → IV6 – iii6 – ii6 – I6", controle: "Soprano in 6ª parallele con il basso, contralto in 3ª parallele (parallelismi leciti); nessuna 5ª né 8ª parallela. A 4 voci, alternare il raddoppio del tenore per evitare le ottave parallele." },
  ],
  voirCorrige: "Mostra la soluzione incisa",
  masquerCorrige: "Nascondi la soluzione",
  corrigeLabel: "Soluzione — una realizzazione tipo",
  quizH3: "Quiz — 10 domande",
  questions: [
    { q: "In un basso numerato, da quale nota si contano le cifre?", opts: ["Dal Do centrale", "Dalla nota del basso", "Dal soprano", "Dalla tonica"], a: 1, fb: "Le cifre annotano intervalli sopra la nota del basso, ridotti all'ottava." },
    { q: "Quale numerica annota l'accordo perfetto allo stato fondamentale?", opts: ["6", "6/4", "Niente (o 5/3)", "7"], a: 2, fb: "Un basso senza cifra (o « 5/3 ») = accordo perfetto allo stato fondamentale (3ª + 5ª)." },
    { q: "La cifra 6 da sola indica:", opts: ["Un accordo di settima", "Un accordo di sesta (1º rivolto)", "Un 2º rivolto", "Un pedale"], a: 1, fb: "« 6 » (= 6/3) = primo rivolto: il basso è la terza dell'accordo." },
    { q: "In Do maggiore, un basso Si numerato 6/5 corrisponde a:", opts: ["VII allo stato fondamentale", "V6/5 (Sol-Si-Ré-Fa, 1º rivolto)", "I6", "V4/3"], a: 1, fb: "Basso Si + 6/5 = primo rivolto dell'accordo di settima di dominante Sol-Si-Ré-Fa." },
    { q: "In Do maggiore, un basso Ré numerato 4/3 corrisponde a:", opts: ["II allo stato fondamentale", "V4/3 (Sol7, 2º rivolto)", "V6/5", "I6/4"], a: 1, fb: "Basso Ré (quinta di Sol7) + 4/3 = secondo rivolto dell'accordo di settima di dominante." },
    { q: "In Do maggiore, un basso Fa numerato 2 (o 4/2) corrisponde a:", opts: ["IV allo stato fondamentale", "V2 (Sol7, 3º rivolto)", "V4/3", "II6"], a: 1, fb: "Basso Fa (settima di Sol7) + 2 / 4/2 = terzo rivolto dell'accordo di settima di dominante." },
    { q: "Un ♯ da solo posto sotto una nota del basso altera:", opts: ["Il basso stesso", "La quinta sopra il basso", "La terza sopra il basso", "Tutte le note dell'accordo"], a: 2, fb: "Un'alterazione isolata agisce sulla terza sopra il basso." },
    { q: "In La minore, un ♯ da solo sotto la nota Mi produce:", opts: ["Un accordo di Mi minore", "Mi-Sol♯-Si: l'accordo di dominante V con la sua sensibile Sol♯", "Un 6/4", "Una settima diminuita"], a: 1, fb: "Il ♯ alza la terza Sol → Sol♯: è la sensibile, che fa dell'accordo una vera dominante (indispensabile in minore)." },
    { q: "Su un basso di dominante, la numerica 6/4 → 5/3 annota:", opts: ["Una marcia di seste", "Un ritardo 7-6", "La quartasesta cadenzale (I6/4 → V)", "Un pedale di tonica"], a: 2, fb: "La tonica posta sulla dominante (6/4), poi 6ª→5ª e 4ª→3ª: la quartasesta cadenzale, sul tempo forte." },
    { q: "A cosa serve il trattino orizzontale ( — ) in una numerica?", opts: ["A sopprimere l'accordo", "A prolungare la stessa armonia mentre il basso si sposta", "A indicare una pausa", "A raddoppiare il basso"], a: 1, fb: "Il trattino prolunga le note tenute: l'armonia resta, solo il basso si muove." },
  ],
  bonusLabel: "Domanda bonus — la distinzione chiave",
  bonusQ: "Che differenza c'è tra basso numerato e basso dato?",
  bonusToggle: "Vedi la risposta",
  bonusA:
    "Nel basso <strong>numerato</strong>, le cifre <strong>impongono</strong> l'armonia esatta da realizzare; nel basso <strong>dato</strong> (senza cifre, corso 26), spetta all'allievo <strong>scegliere</strong> l'armonia.",
};

// ════════════════════════════════════════════════════════════════════════════
// PT
// ════════════════════════════════════════════════════════════════════════════

const pt: Cours42Locale = {
  maitreConcept: "A realização do contínuo",
  maitreAnecdote:
    "Bach era um temível continuísta. Em Leipzig ensinava o acompanhamento a partir apenas do baixo cifrado. Por volta de 1738 registou para os seus alunos os seus « Preceitos e princípios para tocar a quatro vozes o baixo contínuo » (Vorschriften und Grundsätze zum vierstimmigen Spielen des Generalbasses), um verdadeiro manual de realização. Para ele, um baixo bem cifrado já continha toda a harmonia: restava apenas desdobrá-la com limpeza.",
  maitreLesson:
    "O contínuo não é um acompanhamento de segunda: é harmonia escrita « em código ». Ler as cifras é ler a harmonia.",

  introH2: "O que é o baixo cifrado?",
  introP1:
    "O <strong>baixo cifrado</strong> (ou <em>baixo contínuo</em>, <em>basso continuo</em>) é o sistema de notação abreviada que reinou sobre toda a música barroca, de cerca de 1600 a 1750. O compositor escreve uma só linha — o baixo — encimada por <strong>cifras</strong>: essas cifras codificam os intervalos a sobrepor a cada nota do baixo, e portanto a harmonia completa. Uma pauta de duas linhas (baixo + cifras) basta para anotar todo o acompanhamento.",
  introP2:
    "Na época, esta cifragem era <strong>realizada em tempo real</strong> por um instrumento polifónico — o cravo ou o órgão —, muitas vezes dobrado por um violoncelo ou uma viola que sustinha a linha do baixo. O cravista lia o baixo, interpretava as cifras e improvisava a textura dos acordes: é a <em>realização</em>. O contínuo é o alicerce harmónico da cantata, da sonata em trio, da ópera e do oratório.",
  introDistinctionBox:
    "Distinguimos desde já duas situações que o curso nunca confundirá: o <strong>baixo cifrado</strong> — as cifras impõem a harmonia exata, <em>realiza-se</em> — e o <strong>baixo dado</strong> sem cifras, no qual se <em>escolhe</em> a harmonia (trabalho do curso 26).",

  codeH2: "O código das cifras",
  codeP1:
    "As cifras indicam sempre <strong>intervalos contados a partir da nota do baixo</strong> (reduzidos à oitava). Nada dizem do registo: é quem realiza que dispõe as notas. Eis a tabela de referência, ilustrada em Do maior.",
  refCaption: "Tabela de referência das cifras (Do maior)",
  refHeaders: ["Cifra", "Nome", "Posição", "Intervalos sobre o baixo", "Exemplo (Do maior)", "Acorde"],
  refRows: [
    { chiffrage: "(nada) · 5/3", nom: "acorde perfeito", position: "estado fundamental", intervalles: "3ª + 5ª", exemple: "Baixo Do → Do-Mi-Sol", accord: "I" },
    { chiffrage: "6", nom: "acorde de sexta", position: "1ª inversão", intervalles: "3ª + 6ª", exemple: "Baixo Mi → Do-Mi-Sol", accord: "I6" },
    { chiffrage: "6/4", nom: "acorde de quarta e sexta", position: "2ª inversão", intervalles: "4ª + 6ª", exemple: "Baixo Sol → Do-Mi-Sol", accord: "I6/4" },
    { chiffrage: "7", nom: "acorde de sétima", position: "estado fund. (acorde de 7ª)", intervalles: "3ª + 5ª + 7ª", exemple: "Baixo Sol → Sol-Si-Ré-Fa", accord: "V7" },
    { chiffrage: "6/5", nom: "acorde de quinta e sexta", position: "1ª inv. de 7ª", intervalles: "3ª + 5ª + 6ª", exemple: "Baixo Si → Sol-Si-Ré-Fa", accord: "V6/5" },
    { chiffrage: "4/3", nom: "acorde de terceira e quarta", position: "2ª inv. de 7ª", intervalles: "3ª + 4ª + 6ª", exemple: "Baixo Ré → Sol-Si-Ré-Fa", accord: "V4/3" },
    { chiffrage: "2 · 4/2", nom: "acorde de segunda", position: "3ª inv. de 7ª", intervalles: "2ª + 4ª + 6ª", exemple: "Baixo Fa → Sol-Si-Ré-Fa", accord: "V2" },
  ],
  memoBox:
    "<strong>Memo — as inversões de Sol7 (Sol-Si-Ré-Fa) em Do maior:</strong> baixo Sol = 7 (V7); baixo Si = 6/5 (V6/5); baixo Ré = 4/3 (V4/3); baixo Fa = 2 / 4/2 (V2). Lê-se o baixo, identifica-se que nota do acorde é, e a cifra confirma a inversão.",
  altH3: "Alterações e sinais particulares",
  altHeaders: ["Sinal", "Significado"],
  altRows: [
    { signe: "♯ / ♭ / ♮ sozinho (sob o baixo)", sens: "altera a terceira acima do baixo (nunca o próprio baixo)" },
    { signe: "alteração junto a uma cifra (♯6, 6♭, ♯4)", sens: "altera unicamente o intervalo cifrado indicado" },
    { signe: "cifra cortada ou seguida de « + » (4+, 6+)", sens: "sobe a nota um semitom — na maioria das vezes a sensível" },
    { signe: "traço horizontal ( — )", sens: "prolonga a mesma harmonia enquanto o baixo se desloca" },
  ],
  altExampleBox:
    "<strong>Exemplo-chave.</strong> Em <strong>La menor</strong>, sob a nota <strong>Mi</strong> (fundamental da dominante), um <strong>♯</strong> sozinho sobe a terceira acima do baixo (Sol → <strong>Sol♯</strong>). Obtém-se Mi-Sol♯-Si, o acorde de dominante <strong>V</strong> com a sua <strong>sensível</strong>. Reflexo indispensável em modo menor, onde a sensível nunca está na armação. Em Do maior, sendo a sensível Si já diatónica, não é preciso qualquer sinal.",
  altAudioLabel: "Ouvir o acorde de dominante em La menor",
  altAudioBtn: "Mi-Sol♯-Si (V)",

  realiserH2: "Realizar um baixo cifrado a quatro vozes",
  realiserP1:
    "Realizar é passar do baixo + cifra a quatro vozes completas (SATB: Soprano, Contralto, Tenor, Baixo). O método desenrola-se em três tempos.",
  methodStepsTitle: "O método em três tempos",
  methodSteps: [
    "<strong>Identificar o acorde.</strong> Ler o baixo, ler a cifra, deduzir o acorde e a sua inversão. Ex.: baixo Ré cifrado 4/3 em Do maior → 2ª inversão de Sol7 → <strong>V4/3</strong> (Sol-Si-Ré-Fa).",
    "<strong>Dispor.</strong> Escolher a duplicação (no estado fundamental e no acorde de sexta, duplicar de preferência a fundamental; na quarta e sexta cadencial, duplicar o baixo). O acorde de sétima completo realiza-se sem duplicação. Respeitar a ordem das vozes (B ≤ T ≤ A ≤ S) e o afastamento máximo de uma oitava entre vozes superiores contíguas.",
    "<strong>Conduzir as vozes.</strong> Manter as notas comuns, privilegiar o movimento conjunto e contrário, <strong>resolver a sensível</strong> (subida à tónica) e a <strong>sétima</strong> (descida por grau conjunto), proscrever as <strong>quintas e oitavas paralelas</strong>.",
  ],
  exempleH3: "Um exemplo inteiramente realizado (Do maior)",
  exempleConsigne: "Do (5/3) — Fa (5/3) — Sol (6/4) — Sol (5/3) — Do (5/3)",
  exempleEnchainement: "I – IV – I6/4 – V – I (com quarta e sexta cadencial)",
  exempleControles:
    "<strong>Controlos.</strong> Soprano descendente Sol-Fa-Mi-Ré-Mi; na quarta e sexta cadencial, o baixo Sol está <strong>duplicado</strong> (Baixo + Tenor); a resolução 6/4 → 5/3 faz descer a 6ª (Mi → Ré, soprano) e a 4ª (Do → Si, contralto); a <strong>sensível Si</strong> (contralto) sobe ao Do final; nenhuma quinta ou oitava paralela.",
  scoreHint: "Pautas gravadas pelo Verovio — Soprano/Contralto em clave de sol, Tenor/Baixo em clave de fá.",

  clavierH2: "A realização ao teclado",
  clavierP1:
    "A realização a quatro vozes « em partitura » (SATB) distribui as vozes por duas pautas, cada uma conduzindo a sua linha. A realização <strong>ao teclado</strong>, essa, procura a eficácia e o conforto do continuísta: <strong>o baixo na mão esquerda, o acorde cerrado na mão direita</strong>.",
  clavierMGItem: "<strong>Mão esquerda</strong>: a nota do baixo (muitas vezes só, por vezes duplicada à oitava).",
  clavierMDItem: "<strong>Mão direita</strong>: as outras três notas em <strong>posição cerrada</strong>, num âmbito apertado ao centro do teclado (grosso modo entre Do4 e Do5), sem procurar o afastamento regular das vozes SATB.",
  clavierP2:
    "Dois princípios tornam o toque fluido: <strong>manter as notas comuns</strong> de um acorde para o seguinte (os dedos movem-se o menos possível) e <strong>melodizar o soprano</strong> (cuidar da nota superior da mão direita). Aplicam-se as mesmas proibições (quintas/oitavas paralelas), mas a posição cerrada torna-as mais raras e o ouvido prevalece.",
  clavierTableCaption: "Mesma progressão I – IV – I6/4 – V – I, disposição de teclado (Do maior)",
  clavierCols: ["I", "IV", "I6/4", "V", "I"],
  clavierRowMDLabel: "Mão direita (cerrada, grave→agudo)",
  clavierRowMGLabel: "Mão esquerda (baixo)",
  clavierMD: ["Mi4-Sol4-Do5", "Fa4-La4-Do5", "Mi4-Sol4-Do5", "Ré4-Sol4-Si4", "Mi4-Sol4-Do5"],
  clavierMG: ["Do3", "Fa3", "Sol3", "Sol3", "Do3"],
  clavierDiffBox:
    "<strong>Diferença face ao SATB.</strong> Aqui as notas comuns Do5 e Sol4 permanecem sob os mesmos dedos; o acorde é compacto, pronto a ornamentar ou arpejar. O SATB, ao contrário, distribui as vozes por quase duas oitavas para a escrita coral — a realização de teclado não é um « erro » de disposição, é uma prática de acompanhamento.",
  clavierAudioLabel: "Ouvir a disposição de teclado (mão direita + baixo)",
  clavierListenBtn: "Ouvir I – IV – I6/4 – V – I",

  marchesH2: "Cifras frequentes e marchas",
  marchesP1: "Algumas fórmulas reaparecem sem cessar: identificá-las acelera a decifração.",
  sixQuatreH3: "A quarta e sexta cadencial",
  sixQuatreP:
    "Sobre um <strong>baixo de dominante sustentado</strong>, a cifra <strong>6/4 → 5/3</strong> anota a quarta e sexta cadencial: a tónica posta « em suspenso » sobre a dominante, depois resolvida no acorde de dominante. Em Do maior, baixo Sol: a 6/4 dá Do/Mi sobre Sol (I6/4), depois 6ª → 5ª e 4ª → 3ª dão Ré/Si (V). É um ornamento da dominante, sempre em tempo forte.",
  sixQuatreCaption: "Quarta e sexta cadencial → V → I (Do maior)",
  retardH3: "O retardo 4-3 (suspensão)",
  retardP1:
    "O retardo <strong>4-3</strong> prolonga uma nota consonante que se torna uma <strong>quarta dissonante</strong> sobre o novo baixo, antes de resolver por grau conjunto descendente na <strong>terceira</strong>. Três tempos: preparação → percussão → resolução. Em Do maior, o Do sustentado sobre um baixo Sol torna-se uma 4ª e resolve em Si. Cifra: 5/4 → 5/3, ou seja a fórmula « 4 — 3 ».",
  retardCaption: "Retardo 4-3: a voz suspensa é o contralto (Do4 → Si3)",
  retardP2:
    "A voz suspensa é o <strong>contralto</strong>: Do4 consonante (preparação), Do4 dissonante (4ª sobre o baixo Sol), depois Do4 → <strong>Si3</strong> (resolução na 3ª). O retardo <strong>7-6</strong> funciona do mesmo modo sobre um acorde de sexta: a 7ª sobre o baixo resolve na 6ª.",
  sixtesH3: "A marcha de sextas",
  sixtesP1:
    "Uma <strong>marcha de sextas</strong> é uma cadeia de acordes de <strong>sexta (6)</strong> encadeados por movimento conjunto do baixo — uma sucessão de primeiras inversões. O modelo clássico realiza-se a <strong>três vozes reais</strong> (fabordão): sobre cada baixo, uma voz à terceira e outra à sexta. As vozes superiores descem em 6ªs paralelas com o baixo (e em 3ªs paralelas entre si) — paralelismos lícitos, ao contrário de quintas/oitavas.",
  sixtesCaption: "Marcha de sextas IV6 – iii6 – ii6 – I6 (3 vozes reais, o tenor cala-se)",
  sixtesNote:
    "<strong>A quatro vozes</strong>, acrescentar um tenor a uma cadeia de 6/3 paralelos produz inevitavelmente oitavas ou quintas paralelas se se mantiver uma duplicação fixa. <strong>Alterna-se então a duplicação</strong> (uma nota duplica o baixo, a seguinte a 6ª…) para quebrar os paralelismos.",
  progH3: "Progressões-tipo a conhecer",
  progItems: [
    "<strong>T → SD → D → T</strong>: I – IV (ou II6) – V(7) – I.",
    "<strong>Cadência perfeita ornamentada</strong>: I – IV – I6/4 – V(7) – I.",
    "<strong>Descida por sextas</strong> e depois cadência: marcha de sextas → II6 – V – I.",
    "<strong>Retardos na cadência</strong>: suspensão 4-3 sobre a dominante, ou 7-6 sobre um acorde de passagem.",
  ],
  listenBtn: "Ouvir",

  appliH2: "Aplicações",
  appliP1: "Aplicamos o método da secção « Realizar » a um excerto de estilo barroco.",
  appliStepsH3: "Procedimento recomendado",
  appliSteps: [
    "<strong>Localizar a tonalidade</strong> (armação + cadência final) e o modo (está presente a sensível?).",
    "<strong>Segmentar o baixo</strong> e ler cada cifra; traduzir cada coluna em acorde + inversão.",
    "<strong>Identificar as fórmulas</strong> (quarta e sexta cadencial, retardos 4-3 / 7-6, marchas) que ditam a condução.",
    "<strong>Realizar</strong>: primeiro o baixo, depois as vozes superiores mantendo as notas comuns e resolvendo sensíveis e sétimas.",
    "<strong>Verificar</strong> de ouvido (PianoPlayer) e por escrito (editor SATB + analisador de cifras).",
  ],
  extraitLabel: "Breve excerto modelo (Do maior, para realizar)",
  extraitConsigne: "Do (5/3) — La (6) — Ré (6) — Sol (6/4) — Sol (7) — Do (5/3)",
  corrigeBox:
    "<strong>Resolução — análise coluna a coluna:</strong><br/>• Do (5/3) = <strong>I</strong> (Do-Mi-Sol).<br/>• La (6) = 1ª inv.: baixo La, 3ª Do, 6ª Fa → Fa-La-Do = <strong>IV6</strong>.<br/>• Ré (6) = 1ª inv.: baixo Ré, 3ª Fa, 6ª Si → Si-Ré-Fa = <strong>VII6</strong> (função de dominante).<br/>• Sol (6/4) = <strong>I6/4</strong> cadencial.<br/>• Sol (7) = <strong>V7</strong> (Sol-Si-Ré-Fa).<br/>• Do (5/3) = <strong>I</strong>.<br/>Encadeamento: <strong>I – IV6 – VII6 – I6/4 – V7 – I</strong>. O VII6 (o baixo Ré evita a quinta diminuta no baixo) prepara a quarta e sexta cadencial, depois V7 → I.",
  examenH3: "A decifração no exame",
  examenP1:
    "Na prova o tempo é curto: cifra-se primeiro o baixo <strong>mentalmente</strong> (grau + inversão) antes de escrever uma única nota, marcam-se as <strong>sensíveis</strong> e as <strong>sétimas</strong> a resolver, identificam-se as <strong>fórmulas</strong>. Lembrete: aqui a harmonia está <strong>imposta</strong> pelas cifras (baixo cifrado), ao contrário do <strong>baixo dado</strong> do curso 26 onde se escolhem os acordes. Uma cifra mal lida é um erro de análise, não de gosto.",

  entrainH2: "Treino",
  exercicesH3: "Exercícios de realização SATB",
  exercicesIntro:
    "Realizar a quatro vozes (salvo indicação em contrário), em Do maior. A resolução dá uma realização-tipo; são possíveis outras disposições corretas.",
  exercices: [
    { titre: "Exercício 1 — Cadência fundamental", consigne: "Baixo: Do3 (5/3) — Sol3 (5/3) — Do3 (5/3) → I – V – I", controle: "Sensível Si3 (contralto) → Do4; movimento contrário baixo/soprano; sem paralelismos." },
    { titre: "Exercício 2 — Sétima da dominante, 1ª inversão", consigne: "Baixo: Do3 (5/3) — Si2 (6/5) — Do3 (5/3) → I – V6/5 – I", controle: "Acorde de 7ª completo (sem duplicação); o trítono Fa/Si resolve para dentro (Fa3→Mi3, Si2→Do3); sétima Fa3 (tenor) → Mi3." },
    { titre: "Exercício 3 — A quarta e sexta cadencial", consigne: "Baixo: Fa3 (5/3) — Sol3 (6/4) — Sol3 (5/3) — Do3 (5/3) → IV – I6/4 – V – I", controle: "Na 6/4, duplicar o baixo Sol (Baixo + Tenor); resolução 6ª→5ª (Mi4→Ré4) e 4ª→3ª (Do4→Si3); sensível Si3 → Do4." },
    { titre: "Exercício 4 — Marcha de sextas (3 vozes, fabordão)", consigne: "Baixo: La3 (6) — Sol3 (6) — Fa3 (6) — Mi3 (6) → IV6 – iii6 – ii6 – I6", controle: "Soprano em 6ªs paralelas com o baixo, contralto em 3ªs paralelas (paralelismos lícitos); nenhuma 5ª nem 8ª paralela. A 4 vozes, alternar a duplicação do tenor para evitar as oitavas paralelas." },
  ],
  voirCorrige: "Ver a resolução gravada",
  masquerCorrige: "Ocultar a resolução",
  corrigeLabel: "Resolução — uma realização-tipo",
  quizH3: "Questionário — 10 perguntas",
  questions: [
    { q: "Num baixo cifrado, a partir de que nota se contam as cifras?", opts: ["A partir do Do central", "A partir da nota do baixo", "A partir do soprano", "A partir da tónica"], a: 1, fb: "As cifras anotam intervalos acima da nota do baixo, reduzidos à oitava." },
    { q: "Que cifra anota o acorde perfeito no estado fundamental?", opts: ["6", "6/4", "Nada (ou 5/3)", "7"], a: 2, fb: "Um baixo sem cifra (ou « 5/3 ») = acorde perfeito no estado fundamental (3ª + 5ª)." },
    { q: "A cifra 6 sozinha indica:", opts: ["Um acorde de sétima", "Um acorde de sexta (1ª inversão)", "Uma 2ª inversão", "Um pedal"], a: 1, fb: "« 6 » (= 6/3) = primeira inversão: o baixo é a terceira do acorde." },
    { q: "Em Do maior, um baixo Si cifrado 6/5 corresponde a:", opts: ["VII no estado fundamental", "V6/5 (Sol-Si-Ré-Fa, 1ª inversão)", "I6", "V4/3"], a: 1, fb: "Baixo Si + 6/5 = primeira inversão do acorde de sétima da dominante Sol-Si-Ré-Fa." },
    { q: "Em Do maior, um baixo Ré cifrado 4/3 corresponde a:", opts: ["II no estado fundamental", "V4/3 (Sol7, 2ª inversão)", "V6/5", "I6/4"], a: 1, fb: "Baixo Ré (quinta de Sol7) + 4/3 = segunda inversão do acorde de sétima da dominante." },
    { q: "Em Do maior, um baixo Fa cifrado 2 (ou 4/2) corresponde a:", opts: ["IV no estado fundamental", "V2 (Sol7, 3ª inversão)", "V4/3", "II6"], a: 1, fb: "Baixo Fa (sétima de Sol7) + 2 / 4/2 = terceira inversão do acorde de sétima da dominante." },
    { q: "Um ♯ sozinho colocado sob uma nota do baixo altera:", opts: ["O próprio baixo", "A quinta acima do baixo", "A terceira acima do baixo", "Todas as notas do acorde"], a: 2, fb: "Uma alteração isolada atua sobre a terceira acima do baixo." },
    { q: "Em La menor, um ♯ sozinho sob a nota Mi produz:", opts: ["Um acorde de Mi menor", "Mi-Sol♯-Si: o acorde de dominante V com a sua sensível Sol♯", "Um 6/4", "Uma sétima diminuta"], a: 1, fb: "O ♯ sobe a terceira Sol → Sol♯: é a sensível, que faz do acorde uma verdadeira dominante (indispensável em menor)." },
    { q: "Sobre um baixo de dominante, a cifra 6/4 → 5/3 anota:", opts: ["Uma marcha de sextas", "Um retardo 7-6", "A quarta e sexta cadencial (I6/4 → V)", "Um pedal de tónica"], a: 2, fb: "A tónica posta sobre a dominante (6/4), depois 6ª→5ª e 4ª→3ª: a quarta e sexta cadencial, em tempo forte." },
    { q: "Para que serve o traço horizontal ( — ) numa cifra?", opts: ["Para suprimir o acorde", "Para prolongar a mesma harmonia enquanto o baixo se desloca", "Para indicar uma pausa", "Para duplicar o baixo"], a: 1, fb: "O traço prolonga as notas sustentadas: a harmonia mantém-se, só o baixo se move." },
  ],
  bonusLabel: "Pergunta bónus — a distinção-chave",
  bonusQ: "Qual a diferença entre baixo cifrado e baixo dado?",
  bonusToggle: "Ver a resposta",
  bonusA:
    "No baixo <strong>cifrado</strong>, as cifras <strong>impõem</strong> a harmonia exata a realizar; no baixo <strong>dado</strong> (sem cifras, curso 26), cabe ao aluno <strong>escolher</strong> a harmonia.",
};

export const cours42Content: Record<string, Cours42Locale> = { fr, en, de, es, it, pt };
