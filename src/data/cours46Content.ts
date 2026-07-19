// Cours 46 — Analyser une œuvre qu'on va jouer (Niveau 3, ≈ L3 · DNSPM)
// Premier cours du parcours DNSPM (diplôme d'interprète) : l'analyse AU SERVICE
// de l'interprétation, selon le fil conducteur « analyser → décider → entendre ».
// Contenu pédagogique locale-clé : le FR fait foi (transcrit de la spec validée
// 2026-07-19-cours-analyse-interprete-contenu-fr.md — AUCUNE note, AUCUN degré
// modifié). Les cinq autres langues traduisent la prose avec le vocabulaire
// correct (fiche d'interprétation = interpretation worksheet / Interpretations-
// blatt / ficha de interpretación / scheda interpretativa / ficha de
// interpretação ; carrure = phrase structure / Periodik / cuadratura /
// quadratura ; hémiole = hemiola / Hemiole / hemiolia / emiolia / hemíola ;
// anacrouse = upbeat / Auftakt / anacrusa / anacrusi / anacruse ; le tétracorde
// de lamento reste reconnaissable partout). Les tables événement → décision
// (section 3) et les fiches modèles sont COMPLÈTES dans les six langues —
// elles sont le cœur du cours.
// CONVENTION : noms de notes en solfège FRANÇAIS partout (Do Ré Mi Fa Sol La
// Si) — exigence de la couche audio Harmonia. Les NOTES des exemples gravés
// vivent dans Cours46.tsx : identiques dans les six langues par construction.

export interface Question {
  q: string;
  opts: string[];
  a: number;
  fb: string;
}

/** Un exercice de rédaction de fiche : description d'œuvre, consigne, corrigé modèle. */
export interface ExerciceFiche {
  titre: string;
  description: string;
  consigne: string;
  corrige: string;
}

export interface Cours46Locale {
  // ── Maître (MaitreCard) ──
  maitreConcept: string;
  maitreAnecdote: string;
  maitreLesson: string;

  // ── Section 1 — Pourquoi analyser avant de jouer ? ──
  introH2: string;
  introP1: string;
  introP2: string;
  introP3: string;
  regleOr: string; // la règle du cours « Analyser → décider → entendre »

  // ── Section 2 — La carte de l'œuvre ──
  carteH2: string;
  carteP1: string;
  carteP2: string;
  menuetH3: string;
  menuetIntro: string;
  menuetHeaders: string[]; // 5
  menuetRows: { section: string; mesures: string; plan: string; fonction: string; consequence: string }[]; // 3
  carteConclusion: string;

  // ── Section 3 — Le squelette harmonique de l'interprète ──
  squelH2: string;
  squelP1: string;
  phraseH3: string;
  phraseIntro: string;
  phraseCaption: string; // degrés mesure par mesure, sous la gravure
  squelP2: string;
  decisionsCaption: string;
  decisionsHeaders: string[]; // 3
  decisionsRows: { evenement: string; fait: string; decision: string }[]; // 7 — LE cœur du cours
  squelP3: string;
  linkSquelette: { titre: string; desc: string };
  linkGo: string;

  // ── Section 4 — Phrasé, carrures et respirations ──
  phraseeH2: string;
  phraseeP1: string;
  phraseeP2: string;
  conventionsCaption: string;
  conventionsHeaders: string[]; // 2
  conventionsRows: { signe: string; sens: string }[]; // 4 (→, ∨, (∨), —)
  annoteeH3: string;
  annoteeP: string;

  // ── Section 5 — Hiérarchie des voix ──
  voixH2: string;
  voixP1: string;
  satbH3: string;
  satbIntro: string;
  altoCaption: string; // légende de la ligne d'alto isolée
  altoBtn: string;     // « Écouter l'alto seul »
  satbBtn: string;     // « Écouter les 4 accords »
  voixEcouteTip: string; // le contraste seul/contexte EST la leçon
  voixP2: string;
  voixVerif: string;

  // ── Section 6 — La fiche d'interprétation ──
  ficheH2: string;
  ficheP1: string;
  rubriques: string[]; // 5
  ficheModeleH3: string;
  ficheModeleQuote: string; // fiche modèle du menuet (dépliable)
  ficheVoir: string;
  ficheMasquer: string;
  editionBox: string;
  humiliteBox: string;

  // ── Section 7 — Entraînement ──
  entrainH2: string;
  methodeH3: string;
  methodeP: string;
  exercicesH3: string;
  exercices: ExerciceFiche[]; // 2 (sarabande, romance)
  voirCorrige: string;
  masquerCorrige: string;
  corrigeLabel: string;
  capstoneH3: string;
  capstoneP1: string;
  capstoneChecklist: string[]; // 6 — liste à cocher (visuelle, sans persistance)
  capstoneP2: string;
  linkAnalyseur: { titre: string; desc: string };

  quizH3: string;
  questions: Question[];

  // ── UI partagée ──
  listenBtn: string;
}

// ════════════════════════════════════════════════════════════════════════════
// FR — fait foi (transcription de la spec validée)
// ════════════════════════════════════════════════════════════════════════════

const fr: Cours46Locale = {
  maitreConcept: "L'analyse au service de l'interprétation — analyser, décider, entendre",
  maitreAnecdote:
    "Pianiste et chef d'orchestre, Alfred Cortot fonde en 1919 l'École Normale de Musique de Paris et y donne des cours d'interprétation restés légendaires. Ses « éditions de travail » de Chopin ou de Schumann glissent dans la partition l'analyse de la forme et du phrasé, des conseils de doigté et des exercices ciblés : pour lui, le travail instrumental commence par la compréhension de l'architecture de l'œuvre.",
  maitreLesson:
    "Une interprétation se construit sur des faits d'analyse : savoir où va la phrase, où l'harmonie se tend et quelle voix conduit — puis vérifier chaque décision à l'oreille, instrument en main.",

  introH2: "Pourquoi analyser avant de jouer ?",
  introP1:
    "Un interprète qui ouvre une partition prend, qu'il le veuille ou non, des dizaines de décisions : où respirer, où mener le crescendo, quelle voix faire entendre, combien de temps tenir cette arrivée. La seule question est de savoir si ces décisions sont <strong>fondées</strong> ou improvisées. L'analyse n'est pas la garniture académique du travail instrumental : elle en est le fondement — c'est elle qui dit <strong>où va la phrase</strong> (direction), <strong>où l'harmonie se tend et se détend</strong> (timing), <strong>quelle voix conduit</strong> (équilibre).",
  introP2:
    "Concrètement, savoir que la mesure 6 porte une appoggiature de dominante change le geste : on y appuie, on ne s'y précipite pas. Savoir que la vraie tension d'un menuet culmine à la fin de sa section centrale interdit de tout donner dès la première reprise. Savoir que la ligne expressive est à l'alto interdit de laisser le soprano l'écraser.",
  introP3:
    "Deux pièges symétriques guettent. L'<strong>intuition seule</strong> : elle produit des interprétations séduisantes par endroits et incohérentes à l'échelle de l'œuvre — on phrase joliment une mesure contre le sens de la forme. Et l'<strong>analyse qui ne devient jamais du son</strong> : le tableau de degrés impeccable qui ne change rien au jeu est du temps perdu. D'où la règle du cours, qui structure tout ce qui suit :",
  regleOr:
    "<strong>Analyser → décider → entendre.</strong><br/>Chaque observation analytique doit se traduire en une décision de jeu, et chaque décision doit être vérifiée à l'oreille, instrument en main. Une analyse qui ne produit pas de décision est incomplète ; une décision que l'oreille dément se révise (voir la clause d'humilité, section 6).",

  carteH2: "La carte de l'œuvre : forme et proportions",
  carteP1:
    "Première passe, partition sur la table, <strong>avant</strong> de jouer : dresser la carte. On repère les <strong>sections</strong> (doubles barres, reprises, changements de texture ou d'armure), les <strong>retours</strong> (qu'est-ce qui revient, identique ou varié ?), les <strong>proportions</strong> (combien de mesures chacune ?) et le <strong>plan tonal</strong> (où va-t-on, quand revient-on ?). Les outils sont ceux des cours 17 et 28 (période, carrure, formes binaire, ternaire, rondo, sonate) — mais la finalité change : la carte sert à décider l'<strong>architecture de l'interprétation</strong>. Où est le <strong>vrai sommet</strong> de l'œuvre ? Qu'est-ce qu'on garde <strong>en réserve</strong> pour lui ? Quels rapports de tempo et de caractère entre sections ?",
  carteP2:
    "On <strong>annote la partition</strong> : lettres de section (A, B, A′) au crayon, flèches vers les points de tension, encadrement des cadences. Une partition de travail non annotée est une carte muette.",
  menuetH3: "Exemple travaillé — un menuet classique de 24 mesures",
  menuetIntro: "Forme binaire à reprises avec retour : ||: A :||: B + A′ :||.",
  menuetHeaders: ["Section", "Mesures", "Plan tonal", "Fonction dramatique", "Conséquence interprétative"],
  menuetRows: [
    {
      section: "A",
      mesures: "1–8",
      plan: "Do majeur → cadence parfaite en <strong>Sol majeur</strong> (m. 8)",
      fonction: "exposition, élan initial",
      consequence: "son affirmé mais <strong>réserve dynamique</strong> : rien au-dessus de <em>mf</em>",
    },
    {
      section: "B",
      mesures: "9–16",
      plan: "séquence par La mineur, puis <strong>pédale de dominante</strong> (Sol) m. 13–16",
      fonction: "instabilité croissante, tension maximale",
      consequence: "crescendo de longue portée ; <strong>sommet de l'œuvre m. 15–16</strong>, léger élargissement",
    },
    {
      section: "A′",
      mesures: "17–24",
      plan: "retour Do majeur, cadence parfaite conclusive (m. 24)",
      fonction: "résolution, retour éclairé",
      consequence: "une <strong>arrivée</strong>, pas un recommencement : détente, son plus rond qu'en A",
    },
  ],
  carteConclusion:
    "La carte tranche d'emblée la question la plus coûteuse : le sommet n'est <strong>pas</strong> dans A (erreur fréquente : tout donner d'entrée), il est au bout de B, là où la pédale de dominante suspend le retour. Tout le plan dynamique découle de cette seule observation.",

  squelH2: "Le squelette harmonique de l'interprète",
  squelP1:
    "Deuxième passe : réduire la surface (arpèges, broderies, figuration) à la <strong>progression sous-jacente</strong> — le geste du cours 27 (réduction, prolongation), outillé sur la plateforme par l'atelier Squelette harmonique. L'interprète y cherche quatre choses : les <strong>cadences</strong> (ce sont les respirations), les <strong>dominantes et leurs résolutions</strong> (le timing tension→détente), les <strong>pédales</strong> (plages de stabilité ou de suspens), les <strong>modulations</strong> (changements de couleur à projeter). S'y ajoute le <strong>rythme harmonique</strong> : quand les accords changent plus vite à l'approche d'une cadence, la musique accélère intérieurement — c'est un élan à soutenir, même à tempo constant.",
  phraseH3: "Exemple travaillé — phrase de 8 mesures en Do majeur, à 4/4",
  phraseIntro:
    "Mélodie et basse, un accord par mesure sauf indication. Ré4, Fa4 et Si4 sont des <em>notes de passage</em> ; toutes les autres notes de la mélodie appartiennent à l'accord.",
  phraseCaption: "Degrés, mesure par mesure : I · I · VI · IV · II6 · I6/4 · V7 · I",
  squelP2:
    "Le squelette est <strong>I – VI – IV – II6 – I6/4 – V7 – I</strong>, et chaque événement commande une décision :",
  decisionsCaption: "Du fait d'analyse à la décision de jeu",
  decisionsHeaders: ["Événement", "Fait d'analyse", "Décision de jeu"],
  decisionsRows: [
    {
      evenement: "I (m. 1–2)",
      fait: "tonique prolongée, rythme harmonique lent (1 accord / 2 mesures)",
      decision: "installer le tempo, son posé, aucune urgence",
    },
    {
      evenement: "VI (m. 3)",
      fait: "première inflexion, ombre relative",
      decision: "changement de <strong>couleur</strong>, pas d'accent",
    },
    {
      evenement: "IV → II6 (m. 4–5)",
      fait: "zone de pré-dominante ; le rythme harmonique est passé à 1 accord/mesure ; basse commune Fa",
      decision: "l'élan vers la cadence commence : <strong>crescendo directionnel</strong>, lier m. 4–5 sur la basse tenue",
    },
    {
      evenement: "Ré5 (m. 5)",
      fait: "<strong>sommet mélodique</strong> — mais pas le sommet de tension",
      decision: "le faire sonner sans s'y arrêter : la phrase n'est pas finie",
    },
    {
      evenement: "I6/4 (m. 6)",
      fait: "appoggiature de la dominante (Do5, quarte au-dessus de la basse Sol) : <strong>sommet de tension harmonique</strong>",
      decision: "point culminant dynamique, léger appui ; <strong>ne pas respirer</strong> avant sa résolution",
    },
    {
      evenement: "V7 (m. 7)",
      fait: "résolution de l'appoggiature (Do5 → Si4) : la détente commence",
      decision: "le 6/4 → V7 est l'<strong>expiration harmonique</strong> — placer le diminuendo ici",
    },
    {
      evenement: "I (m. 8)",
      fait: "arrivée, cadence parfaite",
      decision: "tenuto d'arrivée, puis respiration <strong>après</strong> l'accord",
    },
  ],
  squelP3:
    "Noter la dissociation sommet mélodique (m. 5) / sommet harmonique (m. 6) : c'est elle qui donne à la phrase sa trajectoire en deux temps — et c'est exactement le genre de fait que l'intuition seule manque.",
  linkSquelette: {
    titre: "Réduire avec l'atelier Squelette harmonique",
    desc: "La réduction guidée d'une surface à sa progression sous-jacente — l'outil de la deuxième passe.",
  },
  linkGo: "Accéder →",

  phraseeH2: "Phrasé, carrures et respirations",
  phraseeP1:
    "Troisième passe : le plan de phrasé. Les catégories viennent du cours 17 : la <strong>période</strong> (antécédent qui suspend — souvent demi-cadence —, conséquent qui conclut) et la <strong>phrase de type « sentence »</strong> (présentation 2+2, puis continuation vers la cadence). S'y ajoutent les accidents de carrure : l'<strong>élision</strong> (la mesure d'arrivée d'une phrase est en même temps la première de la suivante), l'<strong>extension</strong> (cadence évitée puis reconquise), l'<strong>hémiole</strong> (à 3/4, deux mesures entendues comme trois groupes de 2 temps — signal quasi systématique d'approche de cadence dans les danses baroques et les menuets).",
  phraseeP2:
    "Règles de respiration de l'interprète : on respire <strong>aux cadences et fins de phrase</strong>, après l'arrivée ; on ne respire <strong>jamais</strong> entre une tension et sa résolution (6/4 → V7, sensible → tonique), ni <strong>à travers une élision</strong> — la respiration y romprait le relais que le compositeur a précisément soudé. Une hémiole se phrase selon ses appuis réels (par 2 temps), avec l'élargissement naturel qu'elle induit vers la cadence. Enfin, le phrasé par <strong>anacrouse</strong> : une levée se dirige <em>vers</em> le temps fort suivant, elle ne s'accentue pas. Le modèle de tout cela reste le <strong>chant</strong> : là où un chanteur devrait respirer, la phrase respire — quel que soit l'instrument.",
  conventionsCaption: "Conventions d'annotation du cours",
  conventionsHeaders: ["Signe", "Sens"],
  conventionsRows: [
    { signe: "→", sens: "direction (« va vers »)" },
    { signe: "∨", sens: "respiration" },
    { signe: "(∨)", sens: "demi-respiration (césure sans rupture)" },
    { signe: "—", sens: "tenuto d'arrivée" },
  ],
  annoteeH3: "La phrase de la section 3, annotée",
  annoteeP:
    "M. 1–2 présentation, <strong>(∨)</strong> légère après le Mi4 de la m. 2 ; m. 3–4 réponse, <strong>(∨)</strong> après m. 4 ; puis un seul grand geste <strong>→</strong> de la m. 5 jusqu'au Do5 de la m. 6 (sommet), <strong>aucune respiration</strong> de m. 5 à m. 8 ; <strong>—</strong> sur le Do5 final (m. 8), <strong>∨</strong> franche après. La structure est une « sentence » : 2+2 puis continuation de 4 mesures d'un seul tenant.",

  voixH2: "Hiérarchie des voix et conduite intérieure",
  voixP1:
    "Quatrième passe : qui conduit ? Le réflexe « la voix supérieure est la mélodie » est statistiquement juste et musicalement paresseux. La ligne directrice peut être <strong>intérieure</strong> (descentes chromatiques, chaînes de retards — les projeter est un des gestes les plus payants du jeu polyphonique) ou à la <strong>basse</strong>, qu'il faut toujours travailler comme une <strong>seconde mélodie</strong> : c'est elle qui porte le squelette de la section 3. Au piano, cette hiérarchie se réalise par le <strong>voicing</strong> (doser les doigts d'un même accord) ; en ensemble, par l'<strong>équilibre</strong> (qui joue la ligne qui compte cède le premier plan). Même une texture d'apparence homophone s'écoute polyphoniquement : chaque voix a une ligne, et l'une d'elles mérite le premier plan.",
  satbH3: "Exemple note à note — 4 accords, écriture SATB d'école, en Do majeur",
  satbIntro: "Un accord par mesure. Degrés : <strong>I – V – V7/IV – II6</strong>.",
  altoCaption: "La ligne d'alto isolée : Do4 – Si3 – Si♭3 – La3",
  altoBtn: "Écouter l'alto seul",
  satbBtn: "Écouter les 4 accords",
  voixEcouteTip:
    "<strong>Écoutez dans cet ordre</strong> : d'abord la ligne d'alto seule, puis les quatre voix. Le contraste est la leçon — la ligne que vous venez d'entendre nue doit rester audible à l'intérieur des accords. C'est exactement ce que « projeter une voix intérieure » veut dire.",
  voixP2:
    "Le soprano est <strong>immobile</strong> (Sol4 tenu trois accords) : il ne conduit rien. La ligne expressive est la <strong>descente chromatique de l'alto</strong> Do4 – Si3 – Si♭3 – La3 : l'inflexion Si → Si♭ (dans la même voix, comme il se doit) fait basculer la tonique en dominante de IV — c'est l'instant d'ombre du passage, à faire entendre. Décision : projeter l'alto (au piano, le doigt de l'alto sonne un plan au-dessus des autres ; en quatuor, le second violon ou l'alto mène), soprano en retrait, basse Do–Sol–Do–Fa ferme mais sobre. La suite logique du II6 est la cadence de la section 3 (I6/4 – V7 – I) : les deux exemples se raccordent.",
  voixVerif:
    "<em>Conduite vérifiée : mouvements conjoints ou obliques dans les voix supérieures, aucune quinte ni octave consécutive, septième Si♭ introduite par inflexion chromatique dans la même voix et résolue par degré descendant sur La.</em>",

  ficheH2: "De l'analyse à la décision : la fiche d'interprétation",
  ficheP1:
    "Le livrable de la méthode tient sur <strong>une page</strong> — la fiche d'interprétation, à glisser dans la partition. Cinq rubriques :",
  rubriques: [
    "<strong>Carte formelle</strong> — sections, mesures, plan tonal (la table de la section 2).",
    "<strong>Squelette harmonique</strong> — cadences encadrées et pédales.",
    "<strong>Plan de phrasé</strong> — respirations ∨, directions →, élisions signalées.",
    "<strong>Hiérarchie des voix</strong> — par section.",
    "<strong>Trois à cinq décisions d'interprétation</strong>, chacune avec sa <strong>justification analytique</strong> — c'est la rubrique qui distingue une fiche d'un devoir d'analyse.",
  ],
  ficheModeleH3: "Fiche modèle — le menuet de la section 2",
  ficheModeleQuote:
    "<strong>Menuet en Do majeur, 24 mes.</strong> — Forme : ||: A 1–8 :||: B 9–16 + A′ 17–24 :||. Plan tonal : A module à Sol (CP m. 8) ; B séquence vers La mineur puis pédale de dominante m. 13–16 ; A′ conclut en Do (CP m. 24). Squelette : cadences m. 8, m. 16 (demi-cadence sur la pédale), m. 24 ; rythme harmonique s'accélérant m. 6–7 et 22–23 ; hémiole m. 6–7 et 22–23. Phrasé : périodes 4+4 en A ; respirations après m. 4, 8, 12, 24 ; <strong>aucune</strong> entre m. 15 et 17 (la pédale se résout dans le retour). Voix : soprano conduit en A ; m. 9–12 la basse mène (marche) ; m. 13–16 tenir la pédale comme un fil.<br/><br/><strong>Décisions</strong> : ① A à <em>mf</em> maximum — le sommet est m. 15–16 (pédale de dominante, tension maximale de la forme). ② Hémioles phrasées par 2 temps, léger élargissement vers les cadences. ③ A′ plus rond et plus détendu que A : c'est une arrivée (retour de tonique après tension), pas une reprise. ④ M. 9–12 : basse au premier plan (c'est elle qui séquence). ⑤ Reprises : première fois sobre, seconde fois ornementée — la forme le permet, la carrure le supporte.",
  ficheVoir: "Voir la fiche modèle",
  ficheMasquer: "Masquer la fiche modèle",
  editionBox:
    "<strong>Discuter une édition</strong> — les indications d'un éditeur (liaisons, nuances, doigtés) sont des interprétations, pas le texte. Armé de l'analyse, on peut s'en écarter — par exemple refuser un <em>crescendo</em> imprimé qui culmine en A quand la forme place la tension en B — à condition de savoir dire <em>pourquoi</em>, et de distinguer ce qui vient du compositeur de ce qui vient de l'éditeur.",
  humiliteBox:
    "<strong>Clause d'humilité</strong> — l'analyse <strong>informe</strong>, l'oreille <strong>décide</strong>. Si une décision analytiquement impeccable sonne faux à l'instrument, c'est la décision qu'on révise — souvent parce qu'un paramètre (tessiture, acoustique, tempo réel) manquait à l'analyse. La fiche est un document de travail, pas un contrat.",

  entrainH2: "Entraînement",
  methodeH3: "La méthode en 5 passes",
  methodeP:
    "① <strong>Forme</strong> (carte, proportions, plan tonal) → ② <strong>harmonie</strong> (squelette, cadences, pédales, rythme harmonique) → ③ <strong>phrasé</strong> (carrures, respirations, élisions, hémioles) → ④ <strong>voix</strong> (qui conduit, section par section) → ⑤ <strong>fiche</strong> (les décisions et leurs justifications). Dans cet ordre : chaque passe s'appuie sur la précédente.",
  exercicesH3: "Exercices écrits",
  exercices: [
    {
      titre: "Exercice 1 — Fiche sur description : sarabande baroque",
      description:
        "<em>Sarabande en Ré mineur, 3/4, 16 mesures ||: 8 :||: 8 :||, appui caractéristique sur le 2e temps. Mesures 1–4 : basse descendante Ré – Do – Si♭ – La (tétracorde de lamento), mélodie en valeurs longues. Demi-cadence sur La majeur m. 8. Seconde reprise : marche vers Fa majeur m. 9–12, retour de la basse descendante m. 13–14, hémiole m. 14–15, cadence parfaite en Ré mineur m. 16.</em>",
      consigne: "Rédigez la fiche d'interprétation (5 rubriques, 3 décisions minimum).",
      corrige:
        "Forme : binaire 8+8, plan tonal ré m. → La (DC m. 8) ; Fa (m. 9–12) → ré m. (CP m. 16). Squelette : tétracorde descendant m. 1–4 (et son retour m. 13–14) = colonne expressive de la pièce ; cadences m. 8 et 16 ; hémiole m. 14–15. Phrasé : 4+4 dans chaque reprise ; respirations après m. 4, 8, 12 et 16 ; l'hémiole se phrase par 2 temps et élargit vers la cadence finale. Voix : la <strong>basse</strong> conduit m. 1–4 et 13–14 (c'est elle qui « chante » le lamento) ; la mélodie reprend la main m. 5–8. <strong>Décisions</strong> : ① appui du 2e temps réalisé par durée (tenuto) plus que par accent — c'est une danse noble, pas une syncope ; ② projeter la basse descendante aux deux passages, mélodie en retrait ; ③ le retour du tétracorde m. 13 s'éclaire d'un <em>mezza voce</em> : même objet, second éclairage ; ④ hémiole m. 14–15 : élargissement, pas de respiration avant la résolution m. 16.",
    },
    {
      titre: "Exercice 2 — Fiche sur description : romance classique",
      description:
        "<em>Romance en Sol majeur, 4/4, mélodie accompagnée, forme A–B–A′. A (m. 1–16) : période 8+8, antécédent vers demi-cadence m. 8, conséquent vers cadence parfaite m. 16. B (m. 17–28) : Mi mineur, dialogue mélodie/basse en imitation, crescendo de tension jusqu'à une pédale de Ré (dominante de Sol) m. 25–28. A′ (m. 29–44) : retour orné de A, mais l'arrivée de la cadence m. 36 est élidée avec le départ d'une extension de 8 mesures qui reconquiert la cadence m. 44.</em>",
      consigne: "Rédigez la fiche.",
      corrige:
        "Forme : A (16) – B (12) – A′ étendu (16) ; plan tonal Sol → mi m. → pédale de Ré → Sol. Squelette : cadences m. 8 (DC), 16 (CP), pédale m. 25–28, cadence élidée m. 36, CP conclusive m. 44. Phrasé : période classique en A (respirer m. 8 et 16) ; <strong>ne pas respirer</strong> m. 36 (élision) — c'est la respiration interdite de la pièce ; l'extension m. 36–44 est un seul grand geste → vers la vraie conclusion. Voix : mélodie en A ; en B, le dialogue impose d'alterner le premier plan entre mélodie et basse, phrase par phrase ; sur la pédale, tenir le Ré comme un fil sous le crescendo. <strong>Décisions</strong> : ① sommet de l'œuvre m. 27–28 (fin de pédale), pas dans A′ ; ② A′ orné se joue plus intime que A (retour éclairé), la réserve dynamique étant déjà dépensée ; ③ l'élision m. 36 s'enchaîne sans césure, quitte à respirer discrètement m. 34 ; ④ cadence finale m. 44 : tenuto d'arrivée puis vraie respiration — la seule conclusive de la pièce.",
    },
  ],
  voirCorrige: "Voir le corrigé modèle",
  masquerCorrige: "Masquer le corrigé",
  corrigeLabel: "Corrigé modèle — une fiche possible, pas la seule",
  capstoneH3: "Exercice final — votre répertoire dans l'analyseur",
  capstoneP1:
    "<strong>Importez dans l'Analyseur de partitions une œuvre de VOTRE répertoire</strong> (fichier .xml, .musicxml ou .mxl — exportable depuis MuseScore ou tout éditeur de partitions) et produisez sa fiche d'interprétation. L'analyseur grave la partition, la joue et propose degrés, fonctions et cadences ; l'atelier Squelette harmonique vous aide à réduire les passages chargés. <strong>Confrontez l'analyse automatique à la vôtre</strong> — l'outil propose, vous disposez. La fiche doit contenir :",
  capstoneChecklist: [
    "la <strong>carte formelle</strong> : sections, mesures, plan tonal, proportions ;",
    "le <strong>squelette harmonique</strong> : cadences encadrées, pédales, zones d'accélération du rythme harmonique ;",
    "le <strong>plan de phrasé</strong> : respirations ∨, directions →, élisions et hémioles signalées ;",
    "la <strong>hiérarchie des voix</strong>, section par section ;",
    "<strong>3 à 5 décisions d'interprétation</strong>, chacune justifiée par un fait d'analyse précis (mesure à l'appui) ;",
    "une <strong>vérification à l'instrument</strong> : au moins une décision confirmée — ou révisée — par l'oreille (clause d'humilité).",
  ],
  capstoneP2:
    "C'est ce geste — la fiche sur sa propre pièce — que ce cours vous demande de refaire pour chaque œuvre que vous monterez désormais.",
  linkAnalyseur: {
    titre: "Importer votre partition dans l'Analyseur",
    desc: "Gravure, lecture et analyse harmonique automatique (degrés, fonctions, cadences, commentaire pédagogique) de votre fichier .xml, .musicxml ou .mxl.",
  },

  quizH3: "Quiz",
  questions: [
    {
      q: "Une période de 8 mesures se conclut par une cadence parfaite. Où respirer ?",
      opts: ["avant le V7", "entre le V7 et le I", "après le I", "nulle part"],
      a: 2,
      fb: "On respire après l'arrivée — jamais entre une tension et sa résolution.",
    },
    {
      q: "La cadence d'arrivée d'une phrase est aussi le premier temps de la suivante (élision). Que faire ?",
      opts: ["respirer quand même", "enchaîner sans respirer", "ralentir pour compenser", "accentuer l'arrivée"],
      a: 1,
      fb: "L'élision soude fin et début : une respiration romprait le relais écrit par le compositeur.",
    },
    {
      q: "À 3/4, les deux mesures précédant la cadence s'entendent comme trois groupes de 2 temps. C'est…",
      opts: [
        "une syncope, à accentuer temps par temps",
        "une hémiole : phraser par 2 temps, élargissement naturel vers la cadence",
        "un changement de mesure à ignorer",
        "une erreur de gravure",
      ],
      a: 1,
      fb: "L'hémiole se phrase selon ses appuis réels ; elle freine et élargit l'approche de la cadence.",
    },
    {
      q: "Le rythme harmonique passe d'un accord par mesure à deux accords par mesure à l'approche de la cadence. Implication ?",
      opts: [
        "ralentir aussitôt",
        "jouer plus fort chaque accord",
        "soutenir l'élan : l'accélération harmonique est une intensification directionnelle",
        "aucune",
      ],
      a: 2,
      fb: "Les accords qui se resserrent créent l'élan vers la cadence — même à tempo constant.",
    },
    {
      q: "Texture à 4 voix : soprano tenu immobile, alto en descente chromatique. Quelle voix projeter ?",
      opts: ["le soprano, c'est la voix supérieure", "l'alto : c'est lui qui conduit", "la basse, toujours", "toutes également"],
      a: 1,
      fb: "La ligne directrice n'est pas toujours en haut : on projette la voix qui bouge et signifie.",
    },
    {
      q: "Pédale de dominante à la fin d'une section centrale, avant le retour du thème. Conséquence ?",
      opts: [
        "détendre : l'harmonie est stable",
        "maintenir la tension : la pédale suspend la résolution jusqu'au retour",
        "respirer au milieu de la pédale",
        "accélérer",
      ],
      a: 1,
      fb: "La pédale de dominante est un suspens : la détente n'arrive qu'avec le retour de la tonique.",
    },
    {
      q: "Sur un 6/4 de cadence, où se place le geste de détente ?",
      opts: [
        "sur le 6/4 lui-même",
        "sur sa résolution 6/4 → V7 : l'appoggiature s'y résout",
        "après la tonique finale seulement",
        "avant le 6/4",
      ],
      a: 1,
      fb: "Le 6/4 est le sommet de tension (appoggiature de la dominante) ; le diminuendo se place sur sa résolution.",
    },
    {
      q: "La note la plus aiguë de la phrase est-elle toujours son sommet expressif ?",
      opts: [
        "oui, par définition",
        "non : le sommet de tension peut être harmonique et situé ailleurs",
        "oui, sauf en mineur",
        "seulement dans les phrases de 8 mesures",
      ],
      a: 1,
      fb: "Sommet mélodique et sommet harmonique peuvent se dissocier — la section 3 en donne un exemple.",
    },
    {
      q: "Une phrase commence par une anacrouse (levée). On la joue…",
      opts: [
        "accentuée : c'est la première note",
        "dirigée vers le temps fort suivant, sans accent",
        "détachée du reste",
        "plus lente",
      ],
      a: 1,
      fb: "La levée est un élan vers l'appui, pas un appui.",
    },
    {
      q: "Dans une forme A–B–A′, où réserver en général le sommet dynamique ?",
      opts: [
        "dès A, pour capter l'attention",
        "là où l'analyse situe la tension maximale — souvent la fin de B, quand la dominante prépare le retour",
        "toujours à la dernière mesure",
        "au début de A′",
      ],
      a: 1,
      fb: "La carte formelle décide : on garde en réserve ce que la forme dépense plus tard.",
    },
  ],

  listenBtn: "Écouter",
};

// ════════════════════════════════════════════════════════════════════════════
// EN
// ════════════════════════════════════════════════════════════════════════════

const en: Cours46Locale = {
  maitreConcept: "Analysis in the service of interpretation — analyse, decide, listen",
  maitreAnecdote:
    "Pianist and conductor Alfred Cortot founded the École Normale de Musique de Paris in 1919, where his interpretation classes became legendary. His « working editions » of Chopin and Schumann slip into the score an analysis of form and phrasing, fingering advice and targeted exercises: for him, instrumental work begins with understanding the architecture of the piece.",
  maitreLesson:
    "An interpretation is built on analytical facts: knowing where the phrase is going, where the harmony tenses, and which voice leads — then checking every decision by ear, instrument in hand.",

  introH2: "Why analyse before playing?",
  introP1:
    "A performer who opens a score makes, willingly or not, dozens of decisions: where to breathe, where to lead the crescendo, which voice to bring out, how long to hold that arrival. The only question is whether those decisions are <strong>grounded</strong> or improvised. Analysis is not the academic garnish of instrumental work: it is its foundation — it is what tells you <strong>where the phrase is going</strong> (direction), <strong>where the harmony tenses and releases</strong> (timing), and <strong>which voice leads</strong> (balance).",
  introP2:
    "Concretely, knowing that bar 6 carries an appoggiatura of the dominant changes the gesture: you lean into it, you do not rush through it. Knowing that the true tension of a minuet peaks at the end of its central section forbids giving everything from the first repeat. Knowing that the expressive line lies in the alto forbids letting the soprano crush it.",
  introP3:
    "Two symmetrical traps lie in wait. <strong>Intuition alone</strong>: it produces interpretations that are seductive in places and incoherent at the scale of the work — you phrase one bar prettily against the sense of the form. And <strong>analysis that never becomes sound</strong>: the impeccable table of degrees that changes nothing in the playing is wasted time. Hence the rule of this course, which structures everything that follows:",
  regleOr:
    "<strong>Analyse → decide → listen.</strong><br/>Every analytical observation must translate into a playing decision, and every decision must be verified by ear, instrument in hand. An analysis that produces no decision is incomplete; a decision the ear contradicts gets revised (see the humility clause, section 6).",

  carteH2: "The map of the work: form and proportions",
  carteP1:
    "First pass, score on the table, <strong>before</strong> playing: draw the map. You spot the <strong>sections</strong> (double bars, repeats, changes of texture or key signature), the <strong>returns</strong> (what comes back, identical or varied?), the <strong>proportions</strong> (how many bars each?) and the <strong>tonal plan</strong> (where do we go, when do we come back?). The tools are those of courses 17 and 28 (period, phrase structure, binary, ternary, rondo and sonata forms) — but the purpose changes: the map serves to decide the <strong>architecture of the interpretation</strong>. Where is the <strong>true summit</strong> of the work? What do we keep <strong>in reserve</strong> for it? Which tempo and character relations between sections?",
  carteP2:
    "You <strong>annotate the score</strong>: section letters (A, B, A′) in pencil, arrows towards the points of tension, boxes around the cadences. An unannotated working score is a mute map.",
  menuetH3: "Worked example — a classical minuet of 24 bars",
  menuetIntro: "Binary form with repeats and return: ||: A :||: B + A′ :||.",
  menuetHeaders: ["Section", "Bars", "Tonal plan", "Dramatic function", "Interpretive consequence"],
  menuetRows: [
    {
      section: "A",
      mesures: "1–8",
      plan: "Do major → perfect cadence in <strong>Sol major</strong> (m. 8)",
      fonction: "exposition, initial impulse",
      consequence: "assured sound but <strong>dynamic reserve</strong>: nothing above <em>mf</em>",
    },
    {
      section: "B",
      mesures: "9–16",
      plan: "sequence through La minor, then <strong>dominant pedal</strong> (Sol) m. 13–16",
      fonction: "growing instability, maximum tension",
      consequence: "long-range crescendo; <strong>summit of the work m. 15–16</strong>, slight broadening",
    },
    {
      section: "A′",
      mesures: "17–24",
      plan: "return to Do major, conclusive perfect cadence (m. 24)",
      fonction: "resolution, illuminated return",
      consequence: "an <strong>arrival</strong>, not a fresh start: release, a rounder sound than in A",
    },
  ],
  carteConclusion:
    "The map settles at once the most costly question: the summit is <strong>not</strong> in A (a frequent mistake: giving everything from the start), it is at the end of B, where the dominant pedal suspends the return. The entire dynamic plan follows from this single observation.",

  squelH2: "The performer's harmonic skeleton",
  squelP1:
    "Second pass: reduce the surface (arpeggios, neighbour notes, figuration) to the <strong>underlying progression</strong> — the gesture of course 27 (reduction, prolongation), tooled on the platform by the Harmonic Skeleton workshop. The performer looks for four things: the <strong>cadences</strong> (they are the breaths), the <strong>dominants and their resolutions</strong> (the tension→release timing), the <strong>pedals</strong> (stretches of stability or suspense), the <strong>modulations</strong> (colour changes to project). Add the <strong>harmonic rhythm</strong>: when chords change faster as a cadence approaches, the music accelerates inwardly — an impulse to sustain, even at constant tempo.",
  phraseH3: "Worked example — an 8-bar phrase in Do major, in 4/4",
  phraseIntro:
    "Melody and bass, one chord per bar unless indicated. Ré4, Fa4 and Si4 are <em>passing notes</em>; all other melody notes belong to the chord.",
  phraseCaption: "Degrees, bar by bar: I · I · VI · IV · II6 · I6/4 · V7 · I",
  squelP2:
    "The skeleton is <strong>I – VI – IV – II6 – I6/4 – V7 – I</strong>, and each event commands a decision:",
  decisionsCaption: "From analytical fact to playing decision",
  decisionsHeaders: ["Event", "Analytical fact", "Playing decision"],
  decisionsRows: [
    {
      evenement: "I (m. 1–2)",
      fait: "prolonged tonic, slow harmonic rhythm (1 chord / 2 bars)",
      decision: "settle the tempo, poised sound, no urgency",
    },
    {
      evenement: "VI (m. 3)",
      fait: "first inflection, relative shadow",
      decision: "a change of <strong>colour</strong>, not an accent",
    },
    {
      evenement: "IV → II6 (m. 4–5)",
      fait: "pre-dominant zone; the harmonic rhythm has moved to 1 chord per bar; shared bass Fa",
      decision: "the drive towards the cadence begins: <strong>directional crescendo</strong>, bind m. 4–5 over the held bass",
    },
    {
      evenement: "Ré5 (m. 5)",
      fait: "<strong>melodic peak</strong> — but not the peak of tension",
      decision: "let it ring without stopping on it: the phrase is not over",
    },
    {
      evenement: "I6/4 (m. 6)",
      fait: "appoggiatura of the dominant (Do5, a fourth above the bass Sol): <strong>peak of harmonic tension</strong>",
      decision: "dynamic high point, slight leaning; <strong>do not breathe</strong> before its resolution",
    },
    {
      evenement: "V7 (m. 7)",
      fait: "resolution of the appoggiatura (Do5 → Si4): the release begins",
      decision: "the 6/4 → V7 is the <strong>harmonic exhalation</strong> — place the diminuendo here",
    },
    {
      evenement: "I (m. 8)",
      fait: "arrival, perfect cadence",
      decision: "arrival tenuto, then breath <strong>after</strong> the chord",
    },
  ],
  squelP3:
    "Note the dissociation between the melodic peak (m. 5) and the harmonic peak (m. 6): it is what gives the phrase its two-stage trajectory — and it is exactly the kind of fact that intuition alone misses.",
  linkSquelette: {
    titre: "Reduce with the Harmonic Skeleton workshop",
    desc: "Guided reduction of a surface to its underlying progression — the tool of the second pass.",
  },
  linkGo: "Open →",

  phraseeH2: "Phrasing, phrase structure and breaths",
  phraseeP1:
    "Third pass: the phrasing plan. The categories come from course 17: the <strong>period</strong> (an antecedent that suspends — often a half cadence —, a consequent that concludes) and the <strong>sentence-type phrase</strong> (2+2 presentation, then continuation towards the cadence). Add the accidents of phrase structure: <strong>elision</strong> (the arrival bar of one phrase is at the same time the first of the next), <strong>extension</strong> (a cadence evaded then reconquered), the <strong>hemiola</strong> (in 3/4, two bars heard as three groups of 2 beats — an almost systematic signal of an approaching cadence in Baroque dances and minuets).",
  phraseeP2:
    "The performer's breathing rules: breathe <strong>at cadences and phrase endings</strong>, after the arrival; <strong>never</strong> breathe between a tension and its resolution (6/4 → V7, leading tone → tonic), nor <strong>across an elision</strong> — a breath there would break the relay the composer deliberately welded. A hemiola is phrased according to its real accents (in 2-beat groups), with the natural broadening it induces towards the cadence. Finally, phrasing by <strong>upbeat</strong>: an upbeat is directed <em>towards</em> the next strong beat, it is not accented. The model for all of this remains <strong>singing</strong>: wherever a singer would have to breathe, the phrase breathes — whatever the instrument.",
  conventionsCaption: "Annotation conventions of this course",
  conventionsHeaders: ["Sign", "Meaning"],
  conventionsRows: [
    { signe: "→", sens: "direction (« goes towards »)" },
    { signe: "∨", sens: "breath" },
    { signe: "(∨)", sens: "half-breath (caesura without a break)" },
    { signe: "—", sens: "arrival tenuto" },
  ],
  annoteeH3: "The phrase from section 3, annotated",
  annoteeP:
    "M. 1–2 presentation, light <strong>(∨)</strong> after the Mi4 of m. 2; m. 3–4 response, <strong>(∨)</strong> after m. 4; then one single large gesture <strong>→</strong> from m. 5 up to the Do5 of m. 6 (summit), <strong>no breath</strong> from m. 5 to m. 8; <strong>—</strong> on the final Do5 (m. 8), frank <strong>∨</strong> after it. The structure is a « sentence »: 2+2 then a 4-bar continuation in a single span.",

  voixH2: "Voice hierarchy and inner lines",
  voixP1:
    "Fourth pass: who leads? The reflex « the top voice is the melody » is statistically right and musically lazy. The guiding line may be <strong>inner</strong> (chromatic descents, chains of suspensions — projecting them is one of the most rewarding gestures of polyphonic playing) or in the <strong>bass</strong>, which must always be worked as a <strong>second melody</strong>: it is the bass that carries the skeleton of section 3. At the piano this hierarchy is realised through <strong>voicing</strong> (weighting the fingers within one chord); in ensemble, through <strong>balance</strong> (whoever plays the line that matters is given the foreground). Even a seemingly homophonic texture is heard polyphonically: every voice has a line, and one of them deserves the foreground.",
  satbH3: "Note-by-note example — 4 chords, school SATB writing, in Do major",
  satbIntro: "One chord per bar. Degrees: <strong>I – V – V7/IV – II6</strong>.",
  altoCaption: "The isolated alto line: Do4 – Si3 – Si♭3 – La3",
  altoBtn: "Listen to the alto alone",
  satbBtn: "Listen to the 4 chords",
  voixEcouteTip:
    "<strong>Listen in this order</strong>: first the alto line alone, then the four voices. The contrast is the lesson — the line you have just heard bare must remain audible inside the chords. That is exactly what « projecting an inner voice » means.",
  voixP2:
    "The soprano is <strong>immobile</strong> (Sol4 held for three chords): it leads nothing. The expressive line is the <strong>chromatic descent of the alto</strong> Do4 – Si3 – Si♭3 – La3: the inflection Si → Si♭ (within the same voice, as it should be) tips the tonic into the dominant of IV — the moment of shadow in the passage, to be made audible. Decision: project the alto (at the piano, the alto finger sounds one plane above the others; in a quartet, the second violin or the viola leads), soprano held back, bass Do–Sol–Do–Fa firm but sober. The logical continuation of the II6 is the cadence of section 3 (I6/4 – V7 – I): the two examples join up.",
  voixVerif:
    "<em>Voice leading checked: stepwise or oblique motion in the upper voices, no consecutive fifths or octaves, the seventh Si♭ introduced by chromatic inflection within the same voice and resolved by descending step onto La.</em>",

  ficheH2: "From analysis to decision: the interpretation worksheet",
  ficheP1:
    "The method's deliverable fits on <strong>one page</strong> — the interpretation worksheet, to slip inside the score. Five headings:",
  rubriques: [
    "<strong>Formal map</strong> — sections, bars, tonal plan (the table of section 2).",
    "<strong>Harmonic skeleton</strong> — cadences boxed, pedals marked.",
    "<strong>Phrasing plan</strong> — breaths ∨, directions →, elisions flagged.",
    "<strong>Voice hierarchy</strong> — section by section.",
    "<strong>Three to five interpretive decisions</strong>, each with its <strong>analytical justification</strong> — the heading that distinguishes a worksheet from an analysis assignment.",
  ],
  ficheModeleH3: "Model worksheet — the minuet of section 2",
  ficheModeleQuote:
    "<strong>Minuet in Do major, 24 bars.</strong> — Form: ||: A 1–8 :||: B 9–16 + A′ 17–24 :||. Tonal plan: A modulates to Sol (PC m. 8); B sequences towards La minor then dominant pedal m. 13–16; A′ concludes in Do (PC m. 24). Skeleton: cadences m. 8, m. 16 (half cadence on the pedal), m. 24; harmonic rhythm accelerating m. 6–7 and 22–23; hemiola m. 6–7 and 22–23. Phrasing: 4+4 periods in A; breaths after m. 4, 8, 12, 24; <strong>none</strong> between m. 15 and 17 (the pedal resolves into the return). Voices: soprano leads in A; m. 9–12 the bass leads (sequence); m. 13–16 hold the pedal like a thread.<br/><br/><strong>Decisions</strong>: ① A at <em>mf</em> maximum — the summit is m. 15–16 (dominant pedal, maximum tension of the form). ② Hemiolas phrased in 2-beat groups, slight broadening towards the cadences. ③ A′ rounder and more relaxed than A: it is an arrival (return of the tonic after tension), not a restart. ④ M. 9–12: bass in the foreground (it is the bass that sequences). ⑤ Repeats: first time sober, second time ornamented — the form allows it, the phrase structure supports it.",
  ficheVoir: "Show the model worksheet",
  ficheMasquer: "Hide the model worksheet",
  editionBox:
    "<strong>Questioning an edition</strong> — an editor's markings (slurs, dynamics, fingerings) are interpretations, not the text. Armed with the analysis, you may depart from them — for instance refusing a printed <em>crescendo</em> that peaks in A when the form places the tension in B — provided you can say <em>why</em>, and distinguish what comes from the composer from what comes from the editor.",
  humiliteBox:
    "<strong>Humility clause</strong> — analysis <strong>informs</strong>, the ear <strong>decides</strong>. If an analytically impeccable decision sounds wrong at the instrument, it is the decision that gets revised — often because a parameter (register, acoustics, actual tempo) was missing from the analysis. The worksheet is a working document, not a contract.",

  entrainH2: "Training",
  methodeH3: "The method in 5 passes",
  methodeP:
    "① <strong>Form</strong> (map, proportions, tonal plan) → ② <strong>harmony</strong> (skeleton, cadences, pedals, harmonic rhythm) → ③ <strong>phrasing</strong> (phrase structure, breaths, elisions, hemiolas) → ④ <strong>voices</strong> (who leads, section by section) → ⑤ <strong>worksheet</strong> (the decisions and their justifications). In that order: each pass builds on the previous one.",
  exercicesH3: "Written exercises",
  exercices: [
    {
      titre: "Exercise 1 — Worksheet from a description: Baroque sarabande",
      description:
        "<em>Sarabande in Ré minor, 3/4, 16 bars ||: 8 :||: 8 :||, characteristic emphasis on beat 2. Bars 1–4: descending bass Ré – Do – Si♭ – La (lamento tetrachord), melody in long values. Half cadence on La major m. 8. Second repeat: sequence towards Fa major m. 9–12, return of the descending bass m. 13–14, hemiola m. 14–15, perfect cadence in Ré minor m. 16.</em>",
      consigne: "Write the interpretation worksheet (5 headings, at least 3 decisions).",
      corrige:
        "Form: binary 8+8, tonal plan Ré minor → La (HC m. 8); Fa (m. 9–12) → Ré minor (PC m. 16). Skeleton: descending tetrachord m. 1–4 (and its return m. 13–14) = the expressive column of the piece; cadences m. 8 and 16; hemiola m. 14–15. Phrasing: 4+4 in each repeat; breaths after m. 4, 8, 12 and 16; the hemiola is phrased in 2-beat groups and broadens towards the final cadence. Voices: the <strong>bass</strong> leads m. 1–4 and 13–14 (it is the bass that « sings » the lamento); the melody takes over m. 5–8. <strong>Decisions</strong>: ① the beat-2 emphasis realised through duration (tenuto) rather than accent — this is a noble dance, not a syncopation; ② project the descending bass in both passages, melody held back; ③ the return of the tetrachord m. 13 is lit <em>mezza voce</em>: same object, second lighting; ④ hemiola m. 14–15: broadening, no breath before the resolution m. 16.",
    },
    {
      titre: "Exercise 2 — Worksheet from a description: Classical romance",
      description:
        "<em>Romance in Sol major, 4/4, accompanied melody, A–B–A′ form. A (m. 1–16): 8+8 period, antecedent towards a half cadence m. 8, consequent towards a perfect cadence m. 16. B (m. 17–28): Mi minor, melody/bass dialogue in imitation, crescendo of tension up to a Ré pedal (dominant of Sol) m. 25–28. A′ (m. 29–44): ornamented return of A, but the cadential arrival m. 36 is elided with the start of an 8-bar extension that reconquers the cadence m. 44.</em>",
      consigne: "Write the worksheet.",
      corrige:
        "Form: A (16) – B (12) – extended A′ (16); tonal plan Sol → Mi minor → Ré pedal → Sol. Skeleton: cadences m. 8 (HC), 16 (PC), pedal m. 25–28, elided cadence m. 36, conclusive PC m. 44. Phrasing: classical period in A (breathe m. 8 and 16); <strong>do not breathe</strong> m. 36 (elision) — the forbidden breath of the piece; the extension m. 36–44 is one single gesture → towards the true conclusion. Voices: melody in A; in B, the dialogue demands alternating the foreground between melody and bass, phrase by phrase; over the pedal, hold the Ré like a thread beneath the crescendo. <strong>Decisions</strong>: ① summit of the work m. 27–28 (end of the pedal), not in A′; ② the ornamented A′ is played more intimately than A (illuminated return), the dynamic reserve having already been spent; ③ the elision m. 36 is chained without caesura, breathing discreetly at m. 34 if need be; ④ final cadence m. 44: arrival tenuto then a true breath — the only conclusive one of the piece.",
    },
  ],
  voirCorrige: "Show the model answer",
  masquerCorrige: "Hide the model answer",
  corrigeLabel: "Model answer — one possible worksheet, not the only one",
  capstoneH3: "Final exercise — your repertoire in the analyser",
  capstoneP1:
    "<strong>Import into the Score Analyser a piece from YOUR repertoire</strong> (.xml, .musicxml or .mxl file — exportable from MuseScore or any score editor) and produce its interpretation worksheet. The analyser engraves the score, plays it and proposes degrees, functions and cadences; the Harmonic Skeleton workshop helps you reduce busy passages. <strong>Confront the automatic analysis with your own</strong> — the tool proposes, you dispose. The worksheet must contain:",
  capstoneChecklist: [
    "the <strong>formal map</strong>: sections, bars, tonal plan, proportions;",
    "the <strong>harmonic skeleton</strong>: cadences boxed, pedals, zones of accelerating harmonic rhythm;",
    "the <strong>phrasing plan</strong>: breaths ∨, directions →, elisions and hemiolas flagged;",
    "the <strong>voice hierarchy</strong>, section by section;",
    "<strong>3 to 5 interpretive decisions</strong>, each justified by a precise analytical fact (bar number in support);",
    "a <strong>check at the instrument</strong>: at least one decision confirmed — or revised — by ear (humility clause).",
  ],
  capstoneP2:
    "It is this gesture — the worksheet on your own piece — that this course asks you to repeat for every work you prepare from now on.",
  linkAnalyseur: {
    titre: "Import your score into the Analyser",
    desc: "Engraving, playback and automatic harmonic analysis (degrees, functions, cadences, pedagogical commentary) of your .xml, .musicxml or .mxl file.",
  },

  quizH3: "Quiz",
  questions: [
    {
      q: "An 8-bar period ends with a perfect cadence. Where do you breathe?",
      opts: ["before the V7", "between the V7 and the I", "after the I", "nowhere"],
      a: 2,
      fb: "You breathe after the arrival — never between a tension and its resolution.",
    },
    {
      q: "The arrival cadence of a phrase is also the first beat of the next one (elision). What do you do?",
      opts: ["breathe anyway", "chain on without breathing", "slow down to compensate", "accent the arrival"],
      a: 1,
      fb: "The elision welds ending and beginning: a breath would break the relay the composer wrote.",
    },
    {
      q: "In 3/4, the two bars before the cadence are heard as three groups of 2 beats. This is…",
      opts: [
        "a syncopation, to be accented beat by beat",
        "a hemiola: phrase in 2-beat groups, natural broadening towards the cadence",
        "a metre change to ignore",
        "an engraving error",
      ],
      a: 1,
      fb: "The hemiola is phrased according to its real accents; it brakes and broadens the approach to the cadence.",
    },
    {
      q: "The harmonic rhythm moves from one chord per bar to two chords per bar as the cadence approaches. Implication?",
      opts: [
        "slow down at once",
        "play each chord louder",
        "sustain the drive: the harmonic acceleration is a directional intensification",
        "none",
      ],
      a: 2,
      fb: "Chords tightening up create the drive towards the cadence — even at constant tempo.",
    },
    {
      q: "Four-voice texture: soprano held immobile, alto in a chromatic descent. Which voice do you project?",
      opts: ["the soprano, it is the top voice", "the alto: it is the one that leads", "the bass, always", "all equally"],
      a: 1,
      fb: "The guiding line is not always on top: you project the voice that moves and means.",
    },
    {
      q: "Dominant pedal at the end of a central section, before the theme returns. Consequence?",
      opts: [
        "relax: the harmony is stable",
        "maintain the tension: the pedal suspends the resolution until the return",
        "breathe in the middle of the pedal",
        "speed up",
      ],
      a: 1,
      fb: "The dominant pedal is a suspense: the release only arrives with the return of the tonic.",
    },
    {
      q: "On a cadential 6/4, where does the gesture of release belong?",
      opts: [
        "on the 6/4 itself",
        "on its resolution 6/4 → V7: the appoggiatura resolves there",
        "only after the final tonic",
        "before the 6/4",
      ],
      a: 1,
      fb: "The 6/4 is the peak of tension (appoggiatura of the dominant); the diminuendo belongs on its resolution.",
    },
    {
      q: "Is the highest note of a phrase always its expressive summit?",
      opts: [
        "yes, by definition",
        "no: the peak of tension can be harmonic and located elsewhere",
        "yes, except in minor",
        "only in 8-bar phrases",
      ],
      a: 1,
      fb: "Melodic peak and harmonic peak can dissociate — section 3 gives an example.",
    },
    {
      q: "A phrase begins with an upbeat. You play it…",
      opts: [
        "accented: it is the first note",
        "directed towards the next strong beat, without accent",
        "detached from the rest",
        "slower",
      ],
      a: 1,
      fb: "The upbeat is an impulse towards the accent, not an accent itself.",
    },
    {
      q: "In an A–B–A′ form, where do you generally reserve the dynamic summit?",
      opts: [
        "in A already, to catch attention",
        "where the analysis locates the maximum tension — often the end of B, when the dominant prepares the return",
        "always in the last bar",
        "at the start of A′",
      ],
      a: 1,
      fb: "The formal map decides: you keep in reserve what the form spends later.",
    },
  ],

  listenBtn: "Listen",
};

// ════════════════════════════════════════════════════════════════════════════
// DE
// ════════════════════════════════════════════════════════════════════════════

const de: Cours46Locale = {
  maitreConcept: "Analyse im Dienst der Interpretation — analysieren, entscheiden, hören",
  maitreAnecdote:
    "Der Pianist und Dirigent Alfred Cortot gründete 1919 die École Normale de Musique de Paris, wo seine Interpretationskurse legendär wurden. Seine « éditions de travail » (Arbeitsausgaben) von Chopin und Schumann legen in die Partitur die Analyse von Form und Phrasierung, Fingersatzhinweise und gezielte Übungen: Für ihn beginnt die instrumentale Arbeit mit dem Verständnis der Architektur des Werks.",
  maitreLesson:
    "Eine Interpretation baut auf analytischen Fakten auf: wissen, wohin die Phrase geht, wo sich die Harmonik spannt und welche Stimme führt — und dann jede Entscheidung mit dem Ohr überprüfen, das Instrument in der Hand.",

  introH2: "Warum analysieren, bevor man spielt?",
  introP1:
    "Wer eine Partitur aufschlägt, trifft — ob er will oder nicht — Dutzende von Entscheidungen: wo atmen, wohin das Crescendo führen, welche Stimme hörbar machen, wie lange diese Ankunft halten. Die einzige Frage ist, ob diese Entscheidungen <strong>begründet</strong> oder improvisiert sind. Die Analyse ist nicht die akademische Beigabe der instrumentalen Arbeit: Sie ist ihr Fundament — sie sagt, <strong>wohin die Phrase geht</strong> (Richtung), <strong>wo sich die Harmonik spannt und entspannt</strong> (Timing), <strong>welche Stimme führt</strong> (Balance).",
  introP2:
    "Konkret: Zu wissen, dass Takt 6 einen Vorhalt zur Dominante trägt, verändert die Geste — man lehnt sich hinein, man eilt nicht hindurch. Zu wissen, dass die wahre Spannung eines Menuetts am Ende seines Mittelteils gipfelt, verbietet es, schon in der ersten Wiederholung alles zu geben. Zu wissen, dass die expressive Linie im Alt liegt, verbietet es, den Sopran sie erdrücken zu lassen.",
  introP3:
    "Zwei symmetrische Fallen lauern. Die <strong>Intuition allein</strong>: Sie erzeugt Interpretationen, die stellenweise verführerisch und im Maßstab des Werks inkohärent sind — man phrasiert einen Takt hübsch gegen den Sinn der Form. Und die <strong>Analyse, die nie zu Klang wird</strong>: Die makellose Stufentabelle, die am Spiel nichts ändert, ist verlorene Zeit. Daher die Regel dieses Kurses, die alles Folgende strukturiert:",
  regleOr:
    "<strong>Analysieren → entscheiden → hören.</strong><br/>Jede analytische Beobachtung muss sich in eine Spielentscheidung übersetzen, und jede Entscheidung muss mit dem Ohr überprüft werden, das Instrument in der Hand. Eine Analyse, die keine Entscheidung hervorbringt, ist unvollständig; eine Entscheidung, der das Ohr widerspricht, wird revidiert (siehe die Demutsklausel, Abschnitt 6).",

  carteH2: "Die Karte des Werks: Form und Proportionen",
  carteP1:
    "Erster Durchgang, Partitur auf dem Tisch, <strong>bevor</strong> man spielt: die Karte zeichnen. Man erfasst die <strong>Abschnitte</strong> (Doppelstriche, Wiederholungen, Wechsel von Satzweise oder Vorzeichnung), die <strong>Wiederkehr</strong> (was kehrt zurück, identisch oder variiert?), die <strong>Proportionen</strong> (wie viele Takte je Abschnitt?) und den <strong>Tonartenplan</strong> (wohin geht es, wann kehrt man zurück?). Die Werkzeuge sind die der Kurse 17 und 28 (Periode, Periodik, zwei- und dreiteilige Form, Rondo, Sonate) — aber der Zweck ändert sich: Die Karte dient dazu, die <strong>Architektur der Interpretation</strong> zu entscheiden. Wo liegt der <strong>wahre Gipfel</strong> des Werks? Was hält man für ihn <strong>in Reserve</strong>? Welche Tempo- und Charakterverhältnisse zwischen den Abschnitten?",
  carteP2:
    "Man <strong>annotiert die Partitur</strong>: Abschnittsbuchstaben (A, B, A′) mit Bleistift, Pfeile zu den Spannungspunkten, Kadenzen einrahmen. Eine nicht annotierte Arbeitspartitur ist eine stumme Karte.",
  menuetH3: "Durchgearbeitetes Beispiel — ein klassisches Menuett von 24 Takten",
  menuetIntro: "Zweiteilige Form mit Wiederholungen und Reprise: ||: A :||: B + A′ :||.",
  menuetHeaders: ["Abschnitt", "Takte", "Tonartenplan", "Dramatische Funktion", "Interpretatorische Konsequenz"],
  menuetRows: [
    {
      section: "A",
      mesures: "1–8",
      plan: "C-Dur → Ganzschluss in <strong>G-Dur</strong> (T. 8)",
      fonction: "Exposition, Anfangsschwung",
      consequence: "bestimmter Klang, aber <strong>dynamische Reserve</strong>: nichts über <em>mf</em>",
    },
    {
      section: "B",
      mesures: "9–16",
      plan: "Sequenz über a-Moll, dann <strong>Dominant-Orgelpunkt</strong> (Sol) T. 13–16",
      fonction: "wachsende Instabilität, maximale Spannung",
      consequence: "Crescendo mit langem Atem; <strong>Gipfel des Werks T. 15–16</strong>, leichte Verbreiterung",
    },
    {
      section: "A′",
      mesures: "17–24",
      plan: "Rückkehr nach C-Dur, abschließender Ganzschluss (T. 24)",
      fonction: "Auflösung, erhellte Wiederkehr",
      consequence: "eine <strong>Ankunft</strong>, kein Neubeginn: Entspannung, ein runderer Klang als in A",
    },
  ],
  carteConclusion:
    "Die Karte entscheidet sofort die teuerste Frage: Der Gipfel liegt <strong>nicht</strong> in A (häufiger Fehler: von Anfang an alles geben), sondern am Ende von B, dort, wo der Dominant-Orgelpunkt die Wiederkehr in der Schwebe hält. Der gesamte dynamische Plan folgt aus dieser einen Beobachtung.",

  squelH2: "Das harmonische Gerüst des Interpreten",
  squelP1:
    "Zweiter Durchgang: die Oberfläche (Arpeggien, Umspielungen, Figuration) auf die <strong>zugrunde liegende Fortschreitung</strong> reduzieren — die Geste des Kurses 27 (Reduktion, Prolongation), auf der Plattform unterstützt von der Werkstatt Harmonisches Gerüst. Der Interpret sucht darin vier Dinge: die <strong>Kadenzen</strong> (sie sind die Atemzüge), die <strong>Dominanten und ihre Auflösungen</strong> (das Timing Spannung→Entspannung), die <strong>Orgelpunkte</strong> (Zonen der Stabilität oder des Schwebens), die <strong>Modulationen</strong> (Farbwechsel, die zu projizieren sind). Hinzu kommt der <strong>harmonische Rhythmus</strong>: Wenn die Akkorde sich zur Kadenz hin schneller ablösen, beschleunigt die Musik innerlich — ein Schwung, den es zu tragen gilt, auch bei konstantem Tempo.",
  phraseH3: "Durchgearbeitetes Beispiel — 8-taktige Phrase in C-Dur, im 4/4-Takt",
  phraseIntro:
    "Melodie und Bass, ein Akkord pro Takt, sofern nicht anders angegeben. Ré4, Fa4 und Si4 sind <em>Durchgangsnoten</em>; alle übrigen Melodienoten gehören zum Akkord.",
  phraseCaption: "Stufen, Takt für Takt: I · I · VI · IV · II6 · I6/4 · V7 · I",
  squelP2:
    "Das Gerüst ist <strong>I – VI – IV – II6 – I6/4 – V7 – I</strong>, und jedes Ereignis verlangt eine Entscheidung:",
  decisionsCaption: "Vom analytischen Faktum zur Spielentscheidung",
  decisionsHeaders: ["Ereignis", "Analytisches Faktum", "Spielentscheidung"],
  decisionsRows: [
    {
      evenement: "I (T. 1–2)",
      fait: "prolongierte Tonika, langsamer harmonischer Rhythmus (1 Akkord / 2 Takte)",
      decision: "das Tempo einrichten, gesetzter Klang, keine Eile",
    },
    {
      evenement: "VI (T. 3)",
      fait: "erste Einfärbung, Schatten der Parallele",
      decision: "ein Wechsel der <strong>Farbe</strong>, kein Akzent",
    },
    {
      evenement: "IV → II6 (T. 4–5)",
      fait: "Subdominantzone; der harmonische Rhythmus ist auf 1 Akkord pro Takt übergegangen; gemeinsamer Bass Fa",
      decision: "der Zug zur Kadenz beginnt: <strong>gerichtetes Crescendo</strong>, T. 4–5 über dem liegenden Bass binden",
    },
    {
      evenement: "Ré5 (T. 5)",
      fait: "<strong>melodischer Höhepunkt</strong> — aber nicht der Spannungsgipfel",
      decision: "ihn klingen lassen, ohne stehen zu bleiben: die Phrase ist nicht zu Ende",
    },
    {
      evenement: "I6/4 (T. 6)",
      fait: "Vorhalt zur Dominante (Do5, Quarte über dem Bass Sol): <strong>Gipfel der harmonischen Spannung</strong>",
      decision: "dynamischer Höhepunkt, leichtes Anlehnen; <strong>nicht atmen</strong> vor seiner Auflösung",
    },
    {
      evenement: "V7 (T. 7)",
      fait: "Auflösung des Vorhalts (Do5 → Si4): die Entspannung beginnt",
      decision: "das 6/4 → V7 ist das <strong>harmonische Ausatmen</strong> — das Diminuendo hierher legen",
    },
    {
      evenement: "I (T. 8)",
      fait: "Ankunft, Ganzschluss",
      decision: "Ankunfts-Tenuto, dann Atmung <strong>nach</strong> dem Akkord",
    },
  ],
  squelP3:
    "Man beachte die Dissoziation von melodischem Höhepunkt (T. 5) und harmonischem Höhepunkt (T. 6): Sie gibt der Phrase ihren zweistufigen Verlauf — und genau diese Art von Faktum entgeht der Intuition allein.",
  linkSquelette: {
    titre: "Reduzieren mit der Werkstatt Harmonisches Gerüst",
    desc: "Die geführte Reduktion einer Oberfläche auf ihre zugrunde liegende Fortschreitung — das Werkzeug des zweiten Durchgangs.",
  },
  linkGo: "Öffnen →",

  phraseeH2: "Phrasierung, Periodik und Atmung",
  phraseeP1:
    "Dritter Durchgang: der Phrasierungsplan. Die Kategorien stammen aus Kurs 17: die <strong>Periode</strong> (Vordersatz, der offen lässt — oft Halbschluss —, Nachsatz, der schließt) und die <strong>Phrase vom Typ « sentence »</strong> (Präsentation 2+2, dann Fortspinnung zur Kadenz). Hinzu kommen die Unfälle der Periodik: die <strong>Elision</strong> (der Ankunftstakt einer Phrase ist zugleich der erste der nächsten), die <strong>Erweiterung</strong> (eine vermiedene, dann zurückeroberte Kadenz), die <strong>Hemiole</strong> (im 3/4-Takt zwei Takte, die als drei Gruppen zu 2 Schlägen gehört werden — fast systematisches Signal einer nahenden Kadenz in barocken Tänzen und Menuetten).",
  phraseeP2:
    "Atemregeln des Interpreten: Man atmet <strong>an Kadenzen und Phrasenenden</strong>, nach der Ankunft; man atmet <strong>nie</strong> zwischen einer Spannung und ihrer Auflösung (6/4 → V7, Leitton → Tonika), und nie <strong>durch eine Elision hindurch</strong> — die Atmung würde dort die Staffelübergabe zerbrechen, die der Komponist gerade zusammengeschweißt hat. Eine Hemiole wird nach ihren wirklichen Schwerpunkten phrasiert (in 2er-Gruppen), mit der natürlichen Verbreiterung, die sie zur Kadenz hin bewirkt. Schließlich die Phrasierung per <strong>Auftakt</strong>: Ein Auftakt richtet sich <em>auf</em> die nächste schwere Zeit, er wird nicht akzentuiert. Das Modell für all dies bleibt der <strong>Gesang</strong>: Wo ein Sänger atmen müsste, atmet die Phrase — gleichgültig, welches Instrument.",
  conventionsCaption: "Annotationskonventionen dieses Kurses",
  conventionsHeaders: ["Zeichen", "Bedeutung"],
  conventionsRows: [
    { signe: "→", sens: "Richtung (« geht nach »)" },
    { signe: "∨", sens: "Atmung" },
    { signe: "(∨)", sens: "halbe Atmung (Zäsur ohne Bruch)" },
    { signe: "—", sens: "Ankunfts-Tenuto" },
  ],
  annoteeH3: "Die Phrase aus Abschnitt 3, annotiert",
  annoteeP:
    "T. 1–2 Präsentation, leichtes <strong>(∨)</strong> nach dem Mi4 von T. 2; T. 3–4 Antwort, <strong>(∨)</strong> nach T. 4; dann eine einzige große Geste <strong>→</strong> von T. 5 bis zum Do5 von T. 6 (Gipfel), <strong>keine Atmung</strong> von T. 5 bis T. 8; <strong>—</strong> auf dem letzten Do5 (T. 8), deutliches <strong>∨</strong> danach. Die Struktur ist eine « sentence »: 2+2, dann eine 4-taktige Fortspinnung in einem Zug.",

  voixH2: "Stimmenhierarchie und innere Stimmführung",
  voixP1:
    "Vierter Durchgang: Wer führt? Der Reflex « die Oberstimme ist die Melodie » ist statistisch richtig und musikalisch bequem. Die Leitlinie kann <strong>innen</strong> liegen (chromatische Abstiege, Vorhaltsketten — sie zu projizieren ist eine der lohnendsten Gesten des polyphonen Spiels) oder im <strong>Bass</strong>, den man immer als <strong>zweite Melodie</strong> erarbeiten muss: Er trägt das Gerüst aus Abschnitt 3. Am Klavier verwirklicht sich diese Hierarchie durch das <strong>Voicing</strong> (die Finger eines Akkords dosieren); im Ensemble durch die <strong>Balance</strong> (wer die Linie spielt, die zählt, bekommt den Vordergrund). Auch eine scheinbar homophone Satzweise hört man polyphon: Jede Stimme hat eine Linie, und eine davon verdient den Vordergrund.",
  satbH3: "Beispiel Note für Note — 4 Akkorde, SATB-Schulsatz, in C-Dur",
  satbIntro: "Ein Akkord pro Takt. Stufen: <strong>I – V – V7/IV – II6</strong>.",
  altoCaption: "Die isolierte Altstimme: Do4 – Si3 – Si♭3 – La3",
  altoBtn: "Den Alt allein hören",
  satbBtn: "Die 4 Akkorde hören",
  voixEcouteTip:
    "<strong>In dieser Reihenfolge hören</strong>: zuerst die Altlinie allein, dann die vier Stimmen. Der Kontrast ist die Lektion — die Linie, die Sie soeben nackt gehört haben, muss im Innern der Akkorde hörbar bleiben. Genau das bedeutet « eine Innenstimme projizieren ».",
  voixP2:
    "Der Sopran ist <strong>unbeweglich</strong> (Sol4, drei Akkorde lang gehalten): Er führt nichts. Die expressive Linie ist der <strong>chromatische Abstieg des Alts</strong> Do4 – Si3 – Si♭3 – La3: Die Einfärbung Si → Si♭ (in derselben Stimme, wie es sich gehört) kippt die Tonika in die Dominante der IV — der Schattenmoment der Passage, hörbar zu machen. Entscheidung: den Alt projizieren (am Klavier klingt der Alt-Finger eine Ebene über den anderen; im Quartett führt die zweite Violine oder die Bratsche), Sopran zurückgenommen, Bass Do–Sol–Do–Fa fest, aber nüchtern. Die logische Fortsetzung des II6 ist die Kadenz aus Abschnitt 3 (I6/4 – V7 – I): Die beiden Beispiele fügen sich zusammen.",
  voixVerif:
    "<em>Stimmführung geprüft: schrittweise oder Seitenbewegung in den Oberstimmen, keine Quint- oder Oktavparallelen, die Septime Si♭ durch chromatische Einfärbung in derselben Stimme eingeführt und stufenweise abwärts nach La aufgelöst.</em>",

  ficheH2: "Von der Analyse zur Entscheidung: das Interpretationsblatt",
  ficheP1:
    "Das Ergebnis der Methode passt auf <strong>eine Seite</strong> — das Interpretationsblatt, das man in die Partitur legt. Fünf Rubriken:",
  rubriques: [
    "<strong>Formkarte</strong> — Abschnitte, Takte, Tonartenplan (die Tabelle aus Abschnitt 2).",
    "<strong>Harmonisches Gerüst</strong> — Kadenzen eingerahmt, Orgelpunkte markiert.",
    "<strong>Phrasierungsplan</strong> — Atmungen ∨, Richtungen →, Elisionen gekennzeichnet.",
    "<strong>Stimmenhierarchie</strong> — Abschnitt für Abschnitt.",
    "<strong>Drei bis fünf Interpretationsentscheidungen</strong>, jede mit ihrer <strong>analytischen Begründung</strong> — die Rubrik, die ein Interpretationsblatt von einer Analyseaufgabe unterscheidet.",
  ],
  ficheModeleH3: "Musterblatt — das Menuett aus Abschnitt 2",
  ficheModeleQuote:
    "<strong>Menuett in C-Dur, 24 T.</strong> — Form: ||: A 1–8 :||: B 9–16 + A′ 17–24 :||. Tonartenplan: A moduliert nach G (GS T. 8); B sequenziert über a-Moll, dann Dominant-Orgelpunkt T. 13–16; A′ schließt in C (GS T. 24). Gerüst: Kadenzen T. 8, T. 16 (Halbschluss auf dem Orgelpunkt), T. 24; harmonischer Rhythmus beschleunigt T. 6–7 und 22–23; Hemiole T. 6–7 und 22–23. Phrasierung: 4+4-Perioden in A; Atmungen nach T. 4, 8, 12, 24; <strong>keine</strong> zwischen T. 15 und 17 (der Orgelpunkt löst sich in die Wiederkehr auf). Stimmen: der Sopran führt in A; T. 9–12 führt der Bass (Sequenz); T. 13–16 den Orgelpunkt wie einen Faden halten.<br/><br/><strong>Entscheidungen</strong>: ① A höchstens <em>mf</em> — der Gipfel liegt T. 15–16 (Dominant-Orgelpunkt, maximale Spannung der Form). ② Hemiolen in 2er-Gruppen phrasiert, leichte Verbreiterung zu den Kadenzen. ③ A′ runder und entspannter als A: Es ist eine Ankunft (Rückkehr der Tonika nach der Spannung), keine Wiederholung. ④ T. 9–12: Bass im Vordergrund (er ist es, der sequenziert). ⑤ Wiederholungen: beim ersten Mal schlicht, beim zweiten Mal verziert — die Form erlaubt es, die Periodik trägt es.",
  ficheVoir: "Musterblatt anzeigen",
  ficheMasquer: "Musterblatt ausblenden",
  editionBox:
    "<strong>Eine Ausgabe hinterfragen</strong> — die Angaben eines Herausgebers (Bögen, Dynamik, Fingersätze) sind Interpretationen, nicht der Text. Mit der Analyse im Rücken darf man davon abweichen — etwa ein gedrucktes <em>Crescendo</em> verweigern, das in A gipfelt, wenn die Form die Spannung nach B legt — vorausgesetzt, man kann sagen, <em>warum</em>, und unterscheidet, was vom Komponisten und was vom Herausgeber stammt.",
  humiliteBox:
    "<strong>Demutsklausel</strong> — die Analyse <strong>informiert</strong>, das Ohr <strong>entscheidet</strong>. Wenn eine analytisch makellose Entscheidung am Instrument falsch klingt, wird die Entscheidung revidiert — oft, weil der Analyse ein Parameter fehlte (Lage, Akustik, tatsächliches Tempo). Das Blatt ist ein Arbeitsdokument, kein Vertrag.",

  entrainH2: "Training",
  methodeH3: "Die Methode in 5 Durchgängen",
  methodeP:
    "① <strong>Form</strong> (Karte, Proportionen, Tonartenplan) → ② <strong>Harmonik</strong> (Gerüst, Kadenzen, Orgelpunkte, harmonischer Rhythmus) → ③ <strong>Phrasierung</strong> (Periodik, Atmungen, Elisionen, Hemiolen) → ④ <strong>Stimmen</strong> (wer führt, Abschnitt für Abschnitt) → ⑤ <strong>Blatt</strong> (die Entscheidungen und ihre Begründungen). In dieser Reihenfolge: Jeder Durchgang baut auf dem vorigen auf.",
  exercicesH3: "Schriftliche Übungen",
  exercices: [
    {
      titre: "Übung 1 — Blatt nach Beschreibung: barocke Sarabande",
      description:
        "<em>Sarabande in d-Moll, 3/4, 16 Takte ||: 8 :||: 8 :||, charakteristischer Schwerpunkt auf der 2. Zeit. Takte 1–4: absteigender Bass Ré – Do – Si♭ – La (Lamento-Tetrachord), Melodie in langen Werten. Halbschluss auf La-Dur T. 8. Zweiter Teil: Sequenz nach F-Dur T. 9–12, Wiederkehr des absteigenden Basses T. 13–14, Hemiole T. 14–15, Ganzschluss in d-Moll T. 16.</em>",
      consigne: "Verfassen Sie das Interpretationsblatt (5 Rubriken, mindestens 3 Entscheidungen).",
      corrige:
        "Form: zweiteilig 8+8, Tonartenplan d-Moll → La (HS T. 8); F (T. 9–12) → d-Moll (GS T. 16). Gerüst: absteigender Tetrachord T. 1–4 (und seine Wiederkehr T. 13–14) = die expressive Säule des Stücks; Kadenzen T. 8 und 16; Hemiole T. 14–15. Phrasierung: 4+4 in jedem Teil; Atmungen nach T. 4, 8, 12 und 16; die Hemiole wird in 2er-Gruppen phrasiert und verbreitert zur Schlusskadenz. Stimmen: der <strong>Bass</strong> führt T. 1–4 und 13–14 (er ist es, der das Lamento « singt »); die Melodie übernimmt T. 5–8. <strong>Entscheidungen</strong>: ① der Schwerpunkt der 2. Zeit durch Dauer (Tenuto) statt durch Akzent — dies ist ein edler Tanz, keine Synkope; ② den absteigenden Bass an beiden Stellen projizieren, Melodie zurückgenommen; ③ die Wiederkehr des Tetrachords T. 13 erhellt sich <em>mezza voce</em>: derselbe Gegenstand, zweite Beleuchtung; ④ Hemiole T. 14–15: Verbreiterung, keine Atmung vor der Auflösung T. 16.",
    },
    {
      titre: "Übung 2 — Blatt nach Beschreibung: klassische Romanze",
      description:
        "<em>Romanze in G-Dur, 4/4, begleitete Melodie, Form A–B–A′. A (T. 1–16): Periode 8+8, Vordersatz zum Halbschluss T. 8, Nachsatz zum Ganzschluss T. 16. B (T. 17–28): e-Moll, Dialog Melodie/Bass in Imitation, Spannungscrescendo bis zu einem Orgelpunkt auf Ré (Dominante von G) T. 25–28. A′ (T. 29–44): verzierte Wiederkehr von A, aber die Kadenzankunft T. 36 wird mit dem Beginn einer 8-taktigen Erweiterung elidiert, die die Kadenz T. 44 zurückerobert.</em>",
      consigne: "Verfassen Sie das Blatt.",
      corrige:
        "Form: A (16) – B (12) – erweitertes A′ (16); Tonartenplan G → e-Moll → Orgelpunkt auf Ré → G. Gerüst: Kadenzen T. 8 (HS), 16 (GS), Orgelpunkt T. 25–28, elidierte Kadenz T. 36, abschließender GS T. 44. Phrasierung: klassische Periode in A (atmen T. 8 und 16); <strong>nicht atmen</strong> T. 36 (Elision) — die verbotene Atmung des Stücks; die Erweiterung T. 36–44 ist eine einzige große Geste → zum wahren Schluss. Stimmen: Melodie in A; in B verlangt der Dialog, den Vordergrund Phrase für Phrase zwischen Melodie und Bass wechseln zu lassen; auf dem Orgelpunkt das Ré wie einen Faden unter dem Crescendo halten. <strong>Entscheidungen</strong>: ① Gipfel des Werks T. 27–28 (Ende des Orgelpunkts), nicht in A′; ② das verzierte A′ wird intimer gespielt als A (erhellte Wiederkehr), die dynamische Reserve ist bereits ausgegeben; ③ die Elision T. 36 wird ohne Zäsur verkettet, notfalls diskret T. 34 geatmet; ④ Schlusskadenz T. 44: Ankunfts-Tenuto, dann echte Atmung — die einzige schließende des Stücks.",
    },
  ],
  voirCorrige: "Musterlösung anzeigen",
  masquerCorrige: "Musterlösung ausblenden",
  corrigeLabel: "Musterlösung — ein mögliches Blatt, nicht das einzige",
  capstoneH3: "Abschlussübung — Ihr Repertoire im Analyseur",
  capstoneP1:
    "<strong>Importieren Sie in den Partitur-Analyseur ein Werk aus IHREM Repertoire</strong> (Datei .xml, .musicxml oder .mxl — exportierbar aus MuseScore oder jedem Notensatzprogramm) und erstellen Sie sein Interpretationsblatt. Der Analyseur graviert die Partitur, spielt sie ab und schlägt Stufen, Funktionen und Kadenzen vor; die Werkstatt Harmonisches Gerüst hilft Ihnen, dichte Passagen zu reduzieren. <strong>Konfrontieren Sie die automatische Analyse mit Ihrer eigenen</strong> — das Werkzeug schlägt vor, Sie entscheiden. Das Blatt muss enthalten:",
  capstoneChecklist: [
    "die <strong>Formkarte</strong>: Abschnitte, Takte, Tonartenplan, Proportionen;",
    "das <strong>harmonische Gerüst</strong>: Kadenzen eingerahmt, Orgelpunkte, Zonen beschleunigten harmonischen Rhythmus;",
    "den <strong>Phrasierungsplan</strong>: Atmungen ∨, Richtungen →, Elisionen und Hemiolen gekennzeichnet;",
    "die <strong>Stimmenhierarchie</strong>, Abschnitt für Abschnitt;",
    "<strong>3 bis 5 Interpretationsentscheidungen</strong>, jede durch ein präzises analytisches Faktum begründet (mit Taktangabe);",
    "eine <strong>Überprüfung am Instrument</strong>: mindestens eine Entscheidung, die das Ohr bestätigt — oder revidiert — hat (Demutsklausel).",
  ],
  capstoneP2:
    "Genau diese Geste — das Blatt zum eigenen Stück — verlangt dieser Kurs von Ihnen für jedes Werk, das Sie von nun an erarbeiten.",
  linkAnalyseur: {
    titre: "Ihre Partitur in den Analyseur importieren",
    desc: "Gravur, Wiedergabe und automatische harmonische Analyse (Stufen, Funktionen, Kadenzen, pädagogischer Kommentar) Ihrer Datei .xml, .musicxml oder .mxl.",
  },

  quizH3: "Quiz",
  questions: [
    {
      q: "Eine 8-taktige Periode schließt mit einem Ganzschluss. Wo atmen?",
      opts: ["vor dem V7", "zwischen V7 und I", "nach dem I", "nirgends"],
      a: 2,
      fb: "Man atmet nach der Ankunft — nie zwischen einer Spannung und ihrer Auflösung.",
    },
    {
      q: "Der Ankunftstakt einer Phrase ist zugleich die erste Zeit der nächsten (Elision). Was tun?",
      opts: ["trotzdem atmen", "ohne Atmung weiterführen", "zum Ausgleich verlangsamen", "die Ankunft akzentuieren"],
      a: 1,
      fb: "Die Elision verschweißt Ende und Anfang: Eine Atmung würde die vom Komponisten geschriebene Übergabe zerbrechen.",
    },
    {
      q: "Im 3/4-Takt werden die beiden Takte vor der Kadenz als drei Gruppen zu 2 Schlägen gehört. Das ist…",
      opts: [
        "eine Synkope, Schlag für Schlag zu akzentuieren",
        "eine Hemiole: in 2er-Gruppen phrasieren, natürliche Verbreiterung zur Kadenz",
        "ein Taktwechsel, den man ignoriert",
        "ein Stichfehler",
      ],
      a: 1,
      fb: "Die Hemiole wird nach ihren wirklichen Schwerpunkten phrasiert; sie bremst und verbreitert den Weg zur Kadenz.",
    },
    {
      q: "Der harmonische Rhythmus geht zur Kadenz hin von einem Akkord pro Takt zu zwei Akkorden pro Takt über. Folge?",
      opts: [
        "sofort verlangsamen",
        "jeden Akkord lauter spielen",
        "den Zug tragen: die harmonische Beschleunigung ist eine gerichtete Intensivierung",
        "keine",
      ],
      a: 2,
      fb: "Sich verdichtende Akkorde erzeugen den Zug zur Kadenz — auch bei konstantem Tempo.",
    },
    {
      q: "Vierstimmiger Satz: Sopran unbeweglich gehalten, Alt im chromatischen Abstieg. Welche Stimme projizieren?",
      opts: ["den Sopran, er ist die Oberstimme", "den Alt: er ist es, der führt", "immer den Bass", "alle gleich"],
      a: 1,
      fb: "Die Leitlinie liegt nicht immer oben: Man projiziert die Stimme, die sich bewegt und etwas sagt.",
    },
    {
      q: "Dominant-Orgelpunkt am Ende eines Mittelteils, vor der Wiederkehr des Themas. Konsequenz?",
      opts: [
        "entspannen: die Harmonik ist stabil",
        "die Spannung halten: der Orgelpunkt hält die Auflösung bis zur Wiederkehr in der Schwebe",
        "mitten im Orgelpunkt atmen",
        "beschleunigen",
      ],
      a: 1,
      fb: "Der Dominant-Orgelpunkt ist ein Schwebezustand: Die Entspannung kommt erst mit der Rückkehr der Tonika.",
    },
    {
      q: "Auf einem Kadenz-Quartsextakkord: Wo liegt die Geste der Entspannung?",
      opts: [
        "auf dem 6/4 selbst",
        "auf seiner Auflösung 6/4 → V7: dort löst sich der Vorhalt",
        "erst nach der Schlusstonika",
        "vor dem 6/4",
      ],
      a: 1,
      fb: "Das 6/4 ist der Spannungsgipfel (Vorhalt zur Dominante); das Diminuendo liegt auf seiner Auflösung.",
    },
    {
      q: "Ist die höchste Note der Phrase immer ihr expressiver Gipfel?",
      opts: [
        "ja, per Definition",
        "nein: der Spannungsgipfel kann harmonisch sein und woanders liegen",
        "ja, außer in Moll",
        "nur in 8-taktigen Phrasen",
      ],
      a: 1,
      fb: "Melodischer und harmonischer Gipfel können auseinanderfallen — Abschnitt 3 gibt ein Beispiel.",
    },
    {
      q: "Eine Phrase beginnt mit einem Auftakt. Man spielt ihn…",
      opts: [
        "akzentuiert: es ist die erste Note",
        "auf die nächste schwere Zeit gerichtet, ohne Akzent",
        "vom Rest abgesetzt",
        "langsamer",
      ],
      a: 1,
      fb: "Der Auftakt ist ein Schwung zum Schwerpunkt hin, kein Schwerpunkt.",
    },
    {
      q: "Wo hält man in einer A–B–A′-Form im Allgemeinen den dynamischen Gipfel zurück?",
      opts: [
        "schon in A, um Aufmerksamkeit zu wecken",
        "dort, wo die Analyse die maximale Spannung verortet — oft am Ende von B, wenn die Dominante die Wiederkehr vorbereitet",
        "immer im letzten Takt",
        "am Anfang von A′",
      ],
      a: 1,
      fb: "Die Formkarte entscheidet: Man hält in Reserve, was die Form später ausgibt.",
    },
  ],

  listenBtn: "Anhören",
};

// ════════════════════════════════════════════════════════════════════════════
// ES
// ════════════════════════════════════════════════════════════════════════════

const es: Cours46Locale = {
  maitreConcept: "El análisis al servicio de la interpretación — analizar, decidir, escuchar",
  maitreAnecdote:
    "Pianista y director, Alfred Cortot fundó en 1919 la École Normale de Musique de Paris, donde sus cursos de interpretación se hicieron legendarios. Sus « ediciones de trabajo » de Chopin o Schumann deslizan en la partitura el análisis de la forma y del fraseo, consejos de digitación y ejercicios específicos: para él, el trabajo instrumental comienza por comprender la arquitectura de la obra.",
  maitreLesson:
    "Una interpretación se construye sobre hechos de análisis: saber adónde va la frase, dónde se tensa la armonía y qué voz conduce — y luego verificar cada decisión de oído, con el instrumento en las manos.",

  introH2: "¿Por qué analizar antes de tocar?",
  introP1:
    "Un intérprete que abre una partitura toma, lo quiera o no, decenas de decisiones: dónde respirar, adónde llevar el crescendo, qué voz hacer oír, cuánto sostener esa llegada. La única cuestión es saber si esas decisiones están <strong>fundamentadas</strong> o improvisadas. El análisis no es la guarnición académica del trabajo instrumental: es su fundamento — es él quien dice <strong>adónde va la frase</strong> (dirección), <strong>dónde se tensa y se distiende la armonía</strong> (timing), <strong>qué voz conduce</strong> (equilibrio).",
  introP2:
    "Concretamente, saber que el compás 6 lleva una apoyatura de la dominante cambia el gesto: uno se apoya en ella, no se precipita. Saber que la verdadera tensión de un minueto culmina al final de su sección central prohíbe darlo todo desde la primera repetición. Saber que la línea expresiva está en el contralto prohíbe dejar que el soprano la aplaste.",
  introP3:
    "Acechan dos trampas simétricas. La <strong>intuición sola</strong>: produce interpretaciones seductoras por momentos e incoherentes a la escala de la obra — se frasea bonito un compás contra el sentido de la forma. Y el <strong>análisis que nunca se convierte en sonido</strong>: la tabla de grados impecable que no cambia nada en la ejecución es tiempo perdido. De ahí la regla del curso, que estructura todo lo que sigue:",
  regleOr:
    "<strong>Analizar → decidir → escuchar.</strong><br/>Cada observación analítica debe traducirse en una decisión de ejecución, y cada decisión debe verificarse de oído, con el instrumento en las manos. Un análisis que no produce ninguna decisión está incompleto; una decisión que el oído desmiente se revisa (véase la cláusula de humildad, sección 6).",

  carteH2: "El mapa de la obra: forma y proporciones",
  carteP1:
    "Primera pasada, partitura sobre la mesa, <strong>antes</strong> de tocar: trazar el mapa. Se localizan las <strong>secciones</strong> (dobles barras, repeticiones, cambios de textura o de armadura), los <strong>retornos</strong> (¿qué vuelve, idéntico o variado?), las <strong>proporciones</strong> (¿cuántos compases cada una?) y el <strong>plan tonal</strong> (¿adónde se va, cuándo se vuelve?). Las herramientas son las de los cursos 17 y 28 (período, cuadratura, formas binaria, ternaria, rondó, sonata) — pero la finalidad cambia: el mapa sirve para decidir la <strong>arquitectura de la interpretación</strong>. ¿Dónde está la <strong>verdadera cima</strong> de la obra? ¿Qué se guarda <strong>en reserva</strong> para ella? ¿Qué relaciones de tempo y de carácter entre secciones?",
  carteP2:
    "Se <strong>anota la partitura</strong>: letras de sección (A, B, A′) a lápiz, flechas hacia los puntos de tensión, cadencias enmarcadas. Una partitura de trabajo sin anotar es un mapa mudo.",
  menuetH3: "Ejemplo trabajado — un minueto clásico de 24 compases",
  menuetIntro: "Forma binaria con repeticiones y retorno: ||: A :||: B + A′ :||.",
  menuetHeaders: ["Sección", "Compases", "Plan tonal", "Función dramática", "Consecuencia interpretativa"],
  menuetRows: [
    {
      section: "A",
      mesures: "1–8",
      plan: "Do mayor → cadencia perfecta en <strong>Sol mayor</strong> (c. 8)",
      fonction: "exposición, impulso inicial",
      consequence: "sonido afirmado pero <strong>reserva dinámica</strong>: nada por encima de <em>mf</em>",
    },
    {
      section: "B",
      mesures: "9–16",
      plan: "secuencia por La menor, luego <strong>pedal de dominante</strong> (Sol) c. 13–16",
      fonction: "inestabilidad creciente, tensión máxima",
      consequence: "crescendo de largo alcance; <strong>cima de la obra c. 15–16</strong>, ligero ensanchamiento",
    },
    {
      section: "A′",
      mesures: "17–24",
      plan: "retorno a Do mayor, cadencia perfecta conclusiva (c. 24)",
      fonction: "resolución, retorno iluminado",
      consequence: "una <strong>llegada</strong>, no un nuevo comienzo: distensión, sonido más redondo que en A",
    },
  ],
  carteConclusion:
    "El mapa zanja de entrada la cuestión más costosa: la cima <strong>no</strong> está en A (error frecuente: darlo todo de entrada), está al final de B, allí donde el pedal de dominante suspende el retorno. Todo el plan dinámico se desprende de esta única observación.",

  squelH2: "El esqueleto armónico del intérprete",
  squelP1:
    "Segunda pasada: reducir la superficie (arpegios, bordaduras, figuración) a la <strong>progresión subyacente</strong> — el gesto del curso 27 (reducción, prolongación), equipado en la plataforma por el taller Esqueleto armónico. El intérprete busca en ella cuatro cosas: las <strong>cadencias</strong> (son las respiraciones), las <strong>dominantes y sus resoluciones</strong> (el timing tensión→distensión), los <strong>pedales</strong> (zonas de estabilidad o de suspenso), las <strong>modulaciones</strong> (cambios de color que proyectar). Se añade el <strong>ritmo armónico</strong>: cuando los acordes cambian más deprisa al acercarse una cadencia, la música acelera interiormente — es un impulso que sostener, incluso a tempo constante.",
  phraseH3: "Ejemplo trabajado — frase de 8 compases en Do mayor, en 4/4",
  phraseIntro:
    "Melodía y bajo, un acorde por compás salvo indicación. Ré4, Fa4 y Si4 son <em>notas de paso</em>; todas las demás notas de la melodía pertenecen al acorde.",
  phraseCaption: "Grados, compás a compás: I · I · VI · IV · II6 · I6/4 · V7 · I",
  squelP2:
    "El esqueleto es <strong>I – VI – IV – II6 – I6/4 – V7 – I</strong>, y cada acontecimiento dicta una decisión:",
  decisionsCaption: "Del hecho de análisis a la decisión de ejecución",
  decisionsHeaders: ["Acontecimiento", "Hecho de análisis", "Decisión de ejecución"],
  decisionsRows: [
    {
      evenement: "I (c. 1–2)",
      fait: "tónica prolongada, ritmo armónico lento (1 acorde / 2 compases)",
      decision: "instalar el tempo, sonido asentado, ninguna urgencia",
    },
    {
      evenement: "VI (c. 3)",
      fait: "primera inflexión, sombra del relativo",
      decision: "cambio de <strong>color</strong>, no de acento",
    },
    {
      evenement: "IV → II6 (c. 4–5)",
      fait: "zona de predominante; el ritmo armónico ha pasado a 1 acorde/compás; bajo común Fa",
      decision: "comienza el impulso hacia la cadencia: <strong>crescendo direccional</strong>, ligar c. 4–5 sobre el bajo sostenido",
    },
    {
      evenement: "Ré5 (c. 5)",
      fait: "<strong>cima melódica</strong> — pero no la cima de tensión",
      decision: "hacerla sonar sin detenerse en ella: la frase no ha terminado",
    },
    {
      evenement: "I6/4 (c. 6)",
      fait: "apoyatura de la dominante (Do5, cuarta sobre el bajo Sol): <strong>cima de tensión armónica</strong>",
      decision: "punto culminante dinámico, ligero apoyo; <strong>no respirar</strong> antes de su resolución",
    },
    {
      evenement: "V7 (c. 7)",
      fait: "resolución de la apoyatura (Do5 → Si4): comienza la distensión",
      decision: "el 6/4 → V7 es la <strong>espiración armónica</strong> — colocar aquí el diminuendo",
    },
    {
      evenement: "I (c. 8)",
      fait: "llegada, cadencia perfecta",
      decision: "tenuto de llegada, luego respiración <strong>después</strong> del acorde",
    },
  ],
  squelP3:
    "Nótese la disociación cima melódica (c. 5) / cima armónica (c. 6): es ella la que da a la frase su trayectoria en dos tiempos — y es exactamente el tipo de hecho que la intuición sola pasa por alto.",
  linkSquelette: {
    titre: "Reducir con el taller Esqueleto armónico",
    desc: "La reducción guiada de una superficie a su progresión subyacente — la herramienta de la segunda pasada.",
  },
  linkGo: "Acceder →",

  phraseeH2: "Fraseo, cuadraturas y respiraciones",
  phraseeP1:
    "Tercera pasada: el plan de fraseo. Las categorías vienen del curso 17: el <strong>período</strong> (antecedente que suspende — a menudo semicadencia —, consecuente que concluye) y la <strong>frase de tipo « sentence »</strong> (presentación 2+2, luego continuación hacia la cadencia). Se añaden los accidentes de cuadratura: la <strong>elisión</strong> (el compás de llegada de una frase es al mismo tiempo el primero de la siguiente), la <strong>extensión</strong> (cadencia evitada y luego reconquistada), la <strong>hemiolia</strong> (en 3/4, dos compases oídos como tres grupos de 2 tiempos — señal casi sistemática de cadencia próxima en las danzas barrocas y los minuetos).",
  phraseeP2:
    "Reglas de respiración del intérprete: se respira <strong>en las cadencias y finales de frase</strong>, después de la llegada; no se respira <strong>nunca</strong> entre una tensión y su resolución (6/4 → V7, sensible → tónica), ni <strong>a través de una elisión</strong> — la respiración rompería allí el relevo que el compositor ha soldado precisamente. Una hemiolia se frasea según sus apoyos reales (por 2 tiempos), con el ensanchamiento natural que induce hacia la cadencia. Por último, el fraseo por <strong>anacrusa</strong>: una anacrusa se dirige <em>hacia</em> el tiempo fuerte siguiente, no se acentúa. El modelo de todo esto sigue siendo el <strong>canto</strong>: allí donde un cantante debería respirar, la frase respira — sea cual sea el instrumento.",
  conventionsCaption: "Convenciones de anotación del curso",
  conventionsHeaders: ["Signo", "Sentido"],
  conventionsRows: [
    { signe: "→", sens: "dirección (« va hacia »)" },
    { signe: "∨", sens: "respiración" },
    { signe: "(∨)", sens: "semirrespiración (cesura sin ruptura)" },
    { signe: "—", sens: "tenuto de llegada" },
  ],
  annoteeH3: "La frase de la sección 3, anotada",
  annoteeP:
    "C. 1–2 presentación, <strong>(∨)</strong> ligera después del Mi4 del c. 2; c. 3–4 respuesta, <strong>(∨)</strong> después del c. 4; luego un solo gran gesto <strong>→</strong> del c. 5 hasta el Do5 del c. 6 (cima), <strong>ninguna respiración</strong> del c. 5 al c. 8; <strong>—</strong> sobre el Do5 final (c. 8), <strong>∨</strong> franca después. La estructura es una « sentence »: 2+2 y luego continuación de 4 compases de un solo trazo.",

  voixH2: "Jerarquía de las voces y conducción interior",
  voixP1:
    "Cuarta pasada: ¿quién conduce? El reflejo « la voz superior es la melodía » es estadísticamente justo y musicalmente perezoso. La línea directriz puede ser <strong>interior</strong> (descensos cromáticos, cadenas de retardos — proyectarlos es uno de los gestos más rentables del juego polifónico) o estar en el <strong>bajo</strong>, que hay que trabajar siempre como una <strong>segunda melodía</strong>: es él quien lleva el esqueleto de la sección 3. En el piano, esta jerarquía se realiza mediante el <strong>voicing</strong> (dosificar los dedos de un mismo acorde); en conjunto, mediante el <strong>equilibrio</strong> (quien toca la línea que cuenta recibe el primer plano). Incluso una textura de apariencia homofónica se escucha polifónicamente: cada voz tiene una línea, y una de ellas merece el primer plano.",
  satbH3: "Ejemplo nota a nota — 4 acordes, escritura SATB de escuela, en Do mayor",
  satbIntro: "Un acorde por compás. Grados: <strong>I – V – V7/IV – II6</strong>.",
  altoCaption: "La línea de contralto aislada: Do4 – Si3 – Si♭3 – La3",
  altoBtn: "Escuchar el contralto solo",
  satbBtn: "Escuchar los 4 acordes",
  voixEcouteTip:
    "<strong>Escuche en este orden</strong>: primero la línea de contralto sola, luego las cuatro voces. El contraste es la lección — la línea que acaba de oír desnuda debe seguir siendo audible dentro de los acordes. Eso es exactamente lo que significa « proyectar una voz interior ».",
  voixP2:
    "El soprano está <strong>inmóvil</strong> (Sol4 sostenido tres acordes): no conduce nada. La línea expresiva es el <strong>descenso cromático del contralto</strong> Do4 – Si3 – Si♭3 – La3: la inflexión Si → Si♭ (en la misma voz, como debe ser) convierte la tónica en dominante de IV — es el instante de sombra del pasaje, que hay que hacer oír. Decisión: proyectar el contralto (en el piano, el dedo del contralto suena un plano por encima de los demás; en cuarteto, conduce el segundo violín o la viola), soprano en retirada, bajo Do–Sol–Do–Fa firme pero sobrio. La continuación lógica del II6 es la cadencia de la sección 3 (I6/4 – V7 – I): los dos ejemplos se enlazan.",
  voixVerif:
    "<em>Conducción verificada: movimientos por grados conjuntos u oblicuos en las voces superiores, ninguna quinta ni octava consecutiva, séptima Si♭ introducida por inflexión cromática en la misma voz y resuelta por grado descendente sobre La.</em>",

  ficheH2: "Del análisis a la decisión: la ficha de interpretación",
  ficheP1:
    "El entregable del método cabe en <strong>una página</strong> — la ficha de interpretación, para deslizar dentro de la partitura. Cinco rúbricas:",
  rubriques: [
    "<strong>Mapa formal</strong> — secciones, compases, plan tonal (la tabla de la sección 2).",
    "<strong>Esqueleto armónico</strong> — cadencias enmarcadas y pedales.",
    "<strong>Plan de fraseo</strong> — respiraciones ∨, direcciones →, elisiones señaladas.",
    "<strong>Jerarquía de las voces</strong> — por sección.",
    "<strong>De tres a cinco decisiones de interpretación</strong>, cada una con su <strong>justificación analítica</strong> — es la rúbrica que distingue una ficha de un ejercicio de análisis.",
  ],
  ficheModeleH3: "Ficha modelo — el minueto de la sección 2",
  ficheModeleQuote:
    "<strong>Minueto en Do mayor, 24 c.</strong> — Forma: ||: A 1–8 :||: B 9–16 + A′ 17–24 :||. Plan tonal: A modula a Sol (CP c. 8); B secuencia hacia La menor y luego pedal de dominante c. 13–16; A′ concluye en Do (CP c. 24). Esqueleto: cadencias c. 8, c. 16 (semicadencia sobre el pedal), c. 24; ritmo armónico acelerándose c. 6–7 y 22–23; hemiolia c. 6–7 y 22–23. Fraseo: períodos 4+4 en A; respiraciones después de c. 4, 8, 12, 24; <strong>ninguna</strong> entre c. 15 y 17 (el pedal se resuelve en el retorno). Voces: el soprano conduce en A; c. 9–12 el bajo lleva la voz cantante (marcha); c. 13–16 sostener el pedal como un hilo.<br/><br/><strong>Decisiones</strong>: ① A a <em>mf</em> máximo — la cima está en c. 15–16 (pedal de dominante, tensión máxima de la forma). ② Hemiolias fraseadas por 2 tiempos, ligero ensanchamiento hacia las cadencias. ③ A′ más redondo y más distendido que A: es una llegada (retorno de la tónica tras la tensión), no una repetición. ④ C. 9–12: bajo en primer plano (es él quien secuencia). ⑤ Repeticiones: primera vez sobria, segunda vez ornamentada — la forma lo permite, la cuadratura lo soporta.",
  ficheVoir: "Ver la ficha modelo",
  ficheMasquer: "Ocultar la ficha modelo",
  editionBox:
    "<strong>Discutir una edición</strong> — las indicaciones de un editor (ligaduras, matices, digitaciones) son interpretaciones, no el texto. Armado con el análisis, uno puede apartarse de ellas — por ejemplo rechazar un <em>crescendo</em> impreso que culmina en A cuando la forma sitúa la tensión en B — a condición de saber decir <em>por qué</em>, y de distinguir lo que viene del compositor de lo que viene del editor.",
  humiliteBox:
    "<strong>Cláusula de humildad</strong> — el análisis <strong>informa</strong>, el oído <strong>decide</strong>. Si una decisión analíticamente impecable suena mal en el instrumento, es la decisión la que se revisa — a menudo porque al análisis le faltaba un parámetro (tesitura, acústica, tempo real). La ficha es un documento de trabajo, no un contrato.",

  entrainH2: "Entrenamiento",
  methodeH3: "El método en 5 pasadas",
  methodeP:
    "① <strong>Forma</strong> (mapa, proporciones, plan tonal) → ② <strong>armonía</strong> (esqueleto, cadencias, pedales, ritmo armónico) → ③ <strong>fraseo</strong> (cuadraturas, respiraciones, elisiones, hemiolias) → ④ <strong>voces</strong> (quién conduce, sección por sección) → ⑤ <strong>ficha</strong> (las decisiones y sus justificaciones). En este orden: cada pasada se apoya en la anterior.",
  exercicesH3: "Ejercicios escritos",
  exercices: [
    {
      titre: "Ejercicio 1 — Ficha sobre descripción: zarabanda barroca",
      description:
        "<em>Zarabanda en Ré menor, 3/4, 16 compases ||: 8 :||: 8 :||, apoyo característico en el 2.º tiempo. Compases 1–4: bajo descendente Ré – Do – Si♭ – La (tetracordo de lamento), melodía en valores largos. Semicadencia sobre La mayor c. 8. Segunda repetición: marcha hacia Fa mayor c. 9–12, retorno del bajo descendente c. 13–14, hemiolia c. 14–15, cadencia perfecta en Ré menor c. 16.</em>",
      consigne: "Redacte la ficha de interpretación (5 rúbricas, 3 decisiones como mínimo).",
      corrige:
        "Forma: binaria 8+8, plan tonal Ré m. → La (SC c. 8); Fa (c. 9–12) → Ré m. (CP c. 16). Esqueleto: tetracordo descendente c. 1–4 (y su retorno c. 13–14) = columna expresiva de la pieza; cadencias c. 8 y 16; hemiolia c. 14–15. Fraseo: 4+4 en cada repetición; respiraciones después de c. 4, 8, 12 y 16; la hemiolia se frasea por 2 tiempos y ensancha hacia la cadencia final. Voces: el <strong>bajo</strong> conduce c. 1–4 y 13–14 (es él quien « canta » el lamento); la melodía retoma la mano c. 5–8. <strong>Decisiones</strong>: ① apoyo del 2.º tiempo realizado por duración (tenuto) más que por acento — es una danza noble, no una síncopa; ② proyectar el bajo descendente en los dos pasajes, melodía en retirada; ③ el retorno del tetracordo c. 13 se ilumina con un <em>mezza voce</em>: mismo objeto, segunda iluminación; ④ hemiolia c. 14–15: ensanchamiento, sin respiración antes de la resolución c. 16.",
    },
    {
      titre: "Ejercicio 2 — Ficha sobre descripción: romanza clásica",
      description:
        "<em>Romanza en Sol mayor, 4/4, melodía acompañada, forma A–B–A′. A (c. 1–16): período 8+8, antecedente hacia semicadencia c. 8, consecuente hacia cadencia perfecta c. 16. B (c. 17–28): Mi menor, diálogo melodía/bajo en imitación, crescendo de tensión hasta un pedal de Ré (dominante de Sol) c. 25–28. A′ (c. 29–44): retorno ornamentado de A, pero la llegada de la cadencia c. 36 queda elidida con el arranque de una extensión de 8 compases que reconquista la cadencia c. 44.</em>",
      consigne: "Redacte la ficha.",
      corrige:
        "Forma: A (16) – B (12) – A′ extendido (16); plan tonal Sol → Mi m. → pedal de Ré → Sol. Esqueleto: cadencias c. 8 (SC), 16 (CP), pedal c. 25–28, cadencia elidida c. 36, CP conclusiva c. 44. Fraseo: período clásico en A (respirar c. 8 y 16); <strong>no respirar</strong> c. 36 (elisión) — es la respiración prohibida de la pieza; la extensión c. 36–44 es un solo gran gesto → hacia la verdadera conclusión. Voces: melodía en A; en B, el diálogo obliga a alternar el primer plano entre melodía y bajo, frase a frase; sobre el pedal, sostener el Ré como un hilo bajo el crescendo. <strong>Decisiones</strong>: ① cima de la obra c. 27–28 (final del pedal), no en A′; ② el A′ ornamentado se toca más íntimo que A (retorno iluminado), la reserva dinámica ya está gastada; ③ la elisión c. 36 se encadena sin cesura, respirando discretamente en c. 34 si hace falta; ④ cadencia final c. 44: tenuto de llegada y luego verdadera respiración — la única conclusiva de la pieza.",
    },
  ],
  voirCorrige: "Ver la corrección modelo",
  masquerCorrige: "Ocultar la corrección",
  corrigeLabel: "Corrección modelo — una ficha posible, no la única",
  capstoneH3: "Ejercicio final — su repertorio en el analizador",
  capstoneP1:
    "<strong>Importe en el Analizador de partituras una obra de SU repertorio</strong> (archivo .xml, .musicxml o .mxl — exportable desde MuseScore o cualquier editor de partituras) y produzca su ficha de interpretación. El analizador graba la partitura, la reproduce y propone grados, funciones y cadencias; el taller Esqueleto armónico le ayuda a reducir los pasajes cargados. <strong>Confronte el análisis automático con el suyo</strong> — la herramienta propone, usted dispone. La ficha debe contener:",
  capstoneChecklist: [
    "el <strong>mapa formal</strong>: secciones, compases, plan tonal, proporciones;",
    "el <strong>esqueleto armónico</strong>: cadencias enmarcadas, pedales, zonas de aceleración del ritmo armónico;",
    "el <strong>plan de fraseo</strong>: respiraciones ∨, direcciones →, elisiones y hemiolias señaladas;",
    "la <strong>jerarquía de las voces</strong>, sección por sección;",
    "<strong>3 a 5 decisiones de interpretación</strong>, cada una justificada por un hecho de análisis preciso (con el compás como apoyo);",
    "una <strong>verificación en el instrumento</strong>: al menos una decisión confirmada — o revisada — por el oído (cláusula de humildad).",
  ],
  capstoneP2:
    "Es este gesto — la ficha sobre la propia pieza — el que este curso le pide repetir para cada obra que monte de ahora en adelante.",
  linkAnalyseur: {
    titre: "Importar su partitura en el Analizador",
    desc: "Grabado, reproducción y análisis armónico automático (grados, funciones, cadencias, comentario pedagógico) de su archivo .xml, .musicxml o .mxl.",
  },

  quizH3: "Quiz",
  questions: [
    {
      q: "Un período de 8 compases concluye con una cadencia perfecta. ¿Dónde respirar?",
      opts: ["antes del V7", "entre el V7 y el I", "después del I", "en ninguna parte"],
      a: 2,
      fb: "Se respira después de la llegada — nunca entre una tensión y su resolución.",
    },
    {
      q: "La cadencia de llegada de una frase es también el primer tiempo de la siguiente (elisión). ¿Qué hacer?",
      opts: ["respirar de todos modos", "encadenar sin respirar", "ralentizar para compensar", "acentuar la llegada"],
      a: 1,
      fb: "La elisión suelda final y comienzo: una respiración rompería el relevo escrito por el compositor.",
    },
    {
      q: "En 3/4, los dos compases que preceden a la cadencia se oyen como tres grupos de 2 tiempos. Es…",
      opts: [
        "una síncopa, que se acentúa tiempo a tiempo",
        "una hemiolia: frasear por 2 tiempos, ensanchamiento natural hacia la cadencia",
        "un cambio de compás que ignorar",
        "un error de grabado",
      ],
      a: 1,
      fb: "La hemiolia se frasea según sus apoyos reales; frena y ensancha la llegada a la cadencia.",
    },
    {
      q: "El ritmo armónico pasa de un acorde por compás a dos acordes por compás al acercarse la cadencia. ¿Implicación?",
      opts: [
        "ralentizar de inmediato",
        "tocar más fuerte cada acorde",
        "sostener el impulso: la aceleración armónica es una intensificación direccional",
        "ninguna",
      ],
      a: 2,
      fb: "Los acordes que se estrechan crean el impulso hacia la cadencia — incluso a tempo constante.",
    },
    {
      q: "Textura a 4 voces: soprano sostenido inmóvil, contralto en descenso cromático. ¿Qué voz proyectar?",
      opts: ["el soprano, es la voz superior", "el contralto: es él quien conduce", "el bajo, siempre", "todas por igual"],
      a: 1,
      fb: "La línea directriz no está siempre arriba: se proyecta la voz que se mueve y significa.",
    },
    {
      q: "Pedal de dominante al final de una sección central, antes del retorno del tema. ¿Consecuencia?",
      opts: [
        "distender: la armonía es estable",
        "mantener la tensión: el pedal suspende la resolución hasta el retorno",
        "respirar en medio del pedal",
        "acelerar",
      ],
      a: 1,
      fb: "El pedal de dominante es un suspenso: la distensión no llega hasta el retorno de la tónica.",
    },
    {
      q: "Sobre un 6/4 cadencial, ¿dónde se coloca el gesto de distensión?",
      opts: [
        "sobre el 6/4 mismo",
        "sobre su resolución 6/4 → V7: la apoyatura se resuelve ahí",
        "solo después de la tónica final",
        "antes del 6/4",
      ],
      a: 1,
      fb: "El 6/4 es la cima de tensión (apoyatura de la dominante); el diminuendo se coloca en su resolución.",
    },
    {
      q: "¿Es la nota más aguda de la frase siempre su cima expresiva?",
      opts: [
        "sí, por definición",
        "no: la cima de tensión puede ser armónica y estar situada en otro lugar",
        "sí, salvo en menor",
        "solo en las frases de 8 compases",
      ],
      a: 1,
      fb: "Cima melódica y cima armónica pueden disociarse — la sección 3 da un ejemplo.",
    },
    {
      q: "Una frase comienza con una anacrusa. Se toca…",
      opts: [
        "acentuada: es la primera nota",
        "dirigida hacia el tiempo fuerte siguiente, sin acento",
        "separada del resto",
        "más lenta",
      ],
      a: 1,
      fb: "La anacrusa es un impulso hacia el apoyo, no un apoyo.",
    },
    {
      q: "En una forma A–B–A′, ¿dónde reservar en general la cima dinámica?",
      opts: [
        "desde A, para captar la atención",
        "allí donde el análisis sitúa la tensión máxima — a menudo el final de B, cuando la dominante prepara el retorno",
        "siempre en el último compás",
        "al comienzo de A′",
      ],
      a: 1,
      fb: "El mapa formal decide: se guarda en reserva lo que la forma gasta más tarde.",
    },
  ],

  listenBtn: "Escuchar",
};

// ════════════════════════════════════════════════════════════════════════════
// IT
// ════════════════════════════════════════════════════════════════════════════

const it: Cours46Locale = {
  maitreConcept: "L'analisi al servizio dell'interpretazione — analizzare, decidere, ascoltare",
  maitreAnecdote:
    "Pianista e direttore d'orchestra, Alfred Cortot fondò nel 1919 l'École Normale de Musique de Paris, dove i suoi corsi di interpretazione divennero leggendari. Le sue « edizioni di lavoro » di Chopin o Schumann inseriscono nella partitura l'analisi della forma e del fraseggio, consigli di diteggiatura ed esercizi mirati: per lui, il lavoro strumentale comincia dalla comprensione dell'architettura dell'opera.",
  maitreLesson:
    "Un'interpretazione si costruisce su fatti d'analisi: sapere dove va la frase, dove l'armonia si tende e quale voce conduce — poi verificare ogni decisione con l'orecchio, strumento alla mano.",

  introH2: "Perché analizzare prima di suonare?",
  introP1:
    "Un interprete che apre una partitura prende, che lo voglia o no, decine di decisioni: dove respirare, dove condurre il crescendo, quale voce far sentire, quanto tenere quell'arrivo. L'unica questione è sapere se queste decisioni sono <strong>fondate</strong> o improvvisate. L'analisi non è la guarnizione accademica del lavoro strumentale: ne è il fondamento — è lei che dice <strong>dove va la frase</strong> (direzione), <strong>dove l'armonia si tende e si distende</strong> (timing), <strong>quale voce conduce</strong> (equilibrio).",
  introP2:
    "Concretamente, sapere che la battuta 6 porta un'appoggiatura della dominante cambia il gesto: ci si appoggia, non ci si precipita. Sapere che la vera tensione di un minuetto culmina alla fine della sua sezione centrale vieta di dare tutto fin dalla prima ripresa. Sapere che la linea espressiva è al contralto vieta di lasciare che il soprano la schiacci.",
  introP3:
    "Due trappole simmetriche sono in agguato. L'<strong>intuizione da sola</strong>: produce interpretazioni seducenti a tratti e incoerenti alla scala dell'opera — si fraseggia con grazia una battuta contro il senso della forma. E l'<strong>analisi che non diventa mai suono</strong>: la tabella di gradi impeccabile che non cambia nulla nell'esecuzione è tempo perso. Da qui la regola del corso, che struttura tutto ciò che segue:",
  regleOr:
    "<strong>Analizzare → decidere → ascoltare.</strong><br/>Ogni osservazione analitica deve tradursi in una decisione esecutiva, e ogni decisione deve essere verificata con l'orecchio, strumento alla mano. Un'analisi che non produce decisioni è incompleta; una decisione che l'orecchio smentisce si rivede (vedi la clausola di umiltà, sezione 6).",

  carteH2: "La mappa dell'opera: forma e proporzioni",
  carteP1:
    "Prima passata, partitura sul tavolo, <strong>prima</strong> di suonare: tracciare la mappa. Si individuano le <strong>sezioni</strong> (doppie stanghette, riprese, cambi di testura o di armatura), i <strong>ritorni</strong> (che cosa ritorna, identico o variato?), le <strong>proporzioni</strong> (quante battute ciascuna?) e il <strong>piano tonale</strong> (dove si va, quando si ritorna?). Gli strumenti sono quelli dei corsi 17 e 28 (periodo, quadratura, forme binaria, ternaria, rondò, sonata) — ma la finalità cambia: la mappa serve a decidere l'<strong>architettura dell'interpretazione</strong>. Dov'è il <strong>vero culmine</strong> dell'opera? Che cosa si tiene <strong>in riserva</strong> per lui? Quali rapporti di tempo e di carattere tra le sezioni?",
  carteP2:
    "Si <strong>annota la partitura</strong>: lettere di sezione (A, B, A′) a matita, frecce verso i punti di tensione, cadenze riquadrate. Una partitura di lavoro non annotata è una mappa muta.",
  menuetH3: "Esempio svolto — un minuetto classico di 24 battute",
  menuetIntro: "Forma binaria con riprese e ritorno: ||: A :||: B + A′ :||.",
  menuetHeaders: ["Sezione", "Battute", "Piano tonale", "Funzione drammatica", "Conseguenza interpretativa"],
  menuetRows: [
    {
      section: "A",
      mesures: "1–8",
      plan: "Do maggiore → cadenza perfetta in <strong>Sol maggiore</strong> (b. 8)",
      fonction: "esposizione, slancio iniziale",
      consequence: "suono affermato ma <strong>riserva dinamica</strong>: niente al di sopra di <em>mf</em>",
    },
    {
      section: "B",
      mesures: "9–16",
      plan: "sequenza per La minore, poi <strong>pedale di dominante</strong> (Sol) b. 13–16",
      fonction: "instabilità crescente, tensione massima",
      consequence: "crescendo di lunga portata; <strong>culmine dell'opera b. 15–16</strong>, leggero allargamento",
    },
    {
      section: "A′",
      mesures: "17–24",
      plan: "ritorno a Do maggiore, cadenza perfetta conclusiva (b. 24)",
      fonction: "risoluzione, ritorno illuminato",
      consequence: "un <strong>arrivo</strong>, non un ricominciare: distensione, suono più rotondo che in A",
    },
  ],
  carteConclusion:
    "La mappa risolve subito la questione più costosa: il culmine <strong>non</strong> è in A (errore frequente: dare tutto dall'inizio), è alla fine di B, là dove il pedale di dominante sospende il ritorno. Tutto il piano dinamico discende da questa sola osservazione.",

  squelH2: "Lo scheletro armonico dell'interprete",
  squelP1:
    "Seconda passata: ridurre la superficie (arpeggi, fioriture, figurazione) alla <strong>progressione soggiacente</strong> — il gesto del corso 27 (riduzione, prolungamento), attrezzato sulla piattaforma dal laboratorio Scheletro armonico. L'interprete vi cerca quattro cose: le <strong>cadenze</strong> (sono i respiri), le <strong>dominanti e le loro risoluzioni</strong> (il timing tensione→distensione), i <strong>pedali</strong> (zone di stabilità o di sospensione), le <strong>modulazioni</strong> (cambi di colore da proiettare). Si aggiunge il <strong>ritmo armonico</strong>: quando gli accordi cambiano più in fretta all'avvicinarsi di una cadenza, la musica accelera interiormente — è uno slancio da sostenere, anche a tempo costante.",
  phraseH3: "Esempio svolto — frase di 8 battute in Do maggiore, in 4/4",
  phraseIntro:
    "Melodia e basso, un accordo per battuta salvo indicazione. Ré4, Fa4 e Si4 sono <em>note di passaggio</em>; tutte le altre note della melodia appartengono all'accordo.",
  phraseCaption: "Gradi, battuta per battuta: I · I · VI · IV · II6 · I6/4 · V7 · I",
  squelP2:
    "Lo scheletro è <strong>I – VI – IV – II6 – I6/4 – V7 – I</strong>, e ogni evento impone una decisione:",
  decisionsCaption: "Dal fatto d'analisi alla decisione esecutiva",
  decisionsHeaders: ["Evento", "Fatto d'analisi", "Decisione esecutiva"],
  decisionsRows: [
    {
      evenement: "I (b. 1–2)",
      fait: "tonica prolungata, ritmo armonico lento (1 accordo / 2 battute)",
      decision: "installare il tempo, suono posato, nessuna urgenza",
    },
    {
      evenement: "VI (b. 3)",
      fait: "prima inflessione, ombra del relativo",
      decision: "cambio di <strong>colore</strong>, non accento",
    },
    {
      evenement: "IV → II6 (b. 4–5)",
      fait: "zona di predominante; il ritmo armonico è passato a 1 accordo/battuta; basso comune Fa",
      decision: "comincia lo slancio verso la cadenza: <strong>crescendo direzionale</strong>, legare b. 4–5 sul basso tenuto",
    },
    {
      evenement: "Ré5 (b. 5)",
      fait: "<strong>culmine melodico</strong> — ma non il culmine di tensione",
      decision: "farlo suonare senza fermarcisi: la frase non è finita",
    },
    {
      evenement: "I6/4 (b. 6)",
      fait: "appoggiatura della dominante (Do5, quarta sopra il basso Sol): <strong>culmine di tensione armonica</strong>",
      decision: "punto culminante dinamico, leggero appoggio; <strong>non respirare</strong> prima della sua risoluzione",
    },
    {
      evenement: "V7 (b. 7)",
      fait: "risoluzione dell'appoggiatura (Do5 → Si4): comincia la distensione",
      decision: "il 6/4 → V7 è l'<strong>espirazione armonica</strong> — collocare qui il diminuendo",
    },
    {
      evenement: "I (b. 8)",
      fait: "arrivo, cadenza perfetta",
      decision: "tenuto d'arrivo, poi respiro <strong>dopo</strong> l'accordo",
    },
  ],
  squelP3:
    "Si noti la dissociazione culmine melodico (b. 5) / culmine armonico (b. 6): è lei che dà alla frase la sua traiettoria in due tempi — ed è esattamente il genere di fatto che l'intuizione da sola manca.",
  linkSquelette: {
    titre: "Ridurre con il laboratorio Scheletro armonico",
    desc: "La riduzione guidata di una superficie alla sua progressione soggiacente — lo strumento della seconda passata.",
  },
  linkGo: "Apri →",

  phraseeH2: "Fraseggio, quadrature e respiri",
  phraseeP1:
    "Terza passata: il piano di fraseggio. Le categorie vengono dal corso 17: il <strong>periodo</strong> (antecedente che sospende — spesso semicadenza —, conseguente che conclude) e la <strong>frase di tipo « sentence »</strong> (presentazione 2+2, poi continuazione verso la cadenza). Si aggiungono gli accidenti di quadratura: l'<strong>elisione</strong> (la battuta d'arrivo di una frase è al tempo stesso la prima della successiva), l'<strong>estensione</strong> (cadenza evitata poi riconquistata), l'<strong>emiolia</strong> (in 3/4, due battute sentite come tre gruppi di 2 tempi — segnale quasi sistematico di cadenza in arrivo nelle danze barocche e nei minuetti).",
  phraseeP2:
    "Regole di respirazione dell'interprete: si respira <strong>alle cadenze e alle fini di frase</strong>, dopo l'arrivo; non si respira <strong>mai</strong> tra una tensione e la sua risoluzione (6/4 → V7, sensibile → tonica), né <strong>attraverso un'elisione</strong> — il respiro vi spezzerebbe la staffetta che il compositore ha precisamente saldato. Un'emiolia si fraseggia secondo i suoi appoggi reali (per 2 tempi), con l'allargamento naturale che induce verso la cadenza. Infine, il fraseggio per <strong>anacrusi</strong>: un levare si dirige <em>verso</em> il tempo forte successivo, non si accenta. Il modello di tutto ciò resta il <strong>canto</strong>: là dove un cantante dovrebbe respirare, la frase respira — qualunque sia lo strumento.",
  conventionsCaption: "Convenzioni di annotazione del corso",
  conventionsHeaders: ["Segno", "Senso"],
  conventionsRows: [
    { signe: "→", sens: "direzione (« va verso »)" },
    { signe: "∨", sens: "respiro" },
    { signe: "(∨)", sens: "mezzo respiro (cesura senza rottura)" },
    { signe: "—", sens: "tenuto d'arrivo" },
  ],
  annoteeH3: "La frase della sezione 3, annotata",
  annoteeP:
    "B. 1–2 presentazione, <strong>(∨)</strong> leggero dopo il Mi4 della b. 2; b. 3–4 risposta, <strong>(∨)</strong> dopo la b. 4; poi un solo grande gesto <strong>→</strong> dalla b. 5 fino al Do5 della b. 6 (culmine), <strong>nessun respiro</strong> dalla b. 5 alla b. 8; <strong>—</strong> sul Do5 finale (b. 8), <strong>∨</strong> franco dopo. La struttura è una « sentence »: 2+2 poi continuazione di 4 battute d'un solo fiato.",

  voixH2: "Gerarchia delle voci e condotta interna",
  voixP1:
    "Quarta passata: chi conduce? Il riflesso « la voce superiore è la melodia » è statisticamente giusto e musicalmente pigro. La linea direttrice può essere <strong>interna</strong> (discese cromatiche, catene di ritardi — proiettarle è uno dei gesti più remunerativi del gioco polifonico) o al <strong>basso</strong>, che va sempre lavorato come una <strong>seconda melodia</strong>: è lui che porta lo scheletro della sezione 3. Al pianoforte, questa gerarchia si realizza con il <strong>voicing</strong> (dosare le dita di uno stesso accordo); in ensemble, con l'<strong>equilibrio</strong> (chi suona la linea che conta riceve il primo piano). Anche una testura d'apparenza omofonica si ascolta polifonicamente: ogni voce ha una linea, e una di esse merita il primo piano.",
  satbH3: "Esempio nota per nota — 4 accordi, scrittura SATB di scuola, in Do maggiore",
  satbIntro: "Un accordo per battuta. Gradi: <strong>I – V – V7/IV – II6</strong>.",
  altoCaption: "La linea di contralto isolata: Do4 – Si3 – Si♭3 – La3",
  altoBtn: "Ascoltare il contralto da solo",
  satbBtn: "Ascoltare i 4 accordi",
  voixEcouteTip:
    "<strong>Ascoltate in quest'ordine</strong>: prima la linea di contralto da sola, poi le quattro voci. Il contrasto è la lezione — la linea che avete appena sentito nuda deve restare udibile dentro gli accordi. È esattamente ciò che significa « proiettare una voce interna ».",
  voixP2:
    "Il soprano è <strong>immobile</strong> (Sol4 tenuto per tre accordi): non conduce nulla. La linea espressiva è la <strong>discesa cromatica del contralto</strong> Do4 – Si3 – Si♭3 – La3: l'inflessione Si → Si♭ (nella stessa voce, come si deve) fa scivolare la tonica in dominante di IV — è l'istante d'ombra del passaggio, da far sentire. Decisione: proiettare il contralto (al pianoforte, il dito del contralto suona un piano sopra gli altri; in quartetto, conduce il secondo violino o la viola), soprano in ritiro, basso Do–Sol–Do–Fa fermo ma sobrio. Il seguito logico del II6 è la cadenza della sezione 3 (I6/4 – V7 – I): i due esempi si raccordano.",
  voixVerif:
    "<em>Condotta verificata: moti congiunti od obliqui nelle voci superiori, nessuna quinta né ottava consecutiva, settima Si♭ introdotta per inflessione cromatica nella stessa voce e risolta per grado discendente su La.</em>",

  ficheH2: "Dall'analisi alla decisione: la scheda interpretativa",
  ficheP1:
    "Il prodotto del metodo sta su <strong>una pagina</strong> — la scheda interpretativa, da infilare nella partitura. Cinque rubriche:",
  rubriques: [
    "<strong>Mappa formale</strong> — sezioni, battute, piano tonale (la tabella della sezione 2).",
    "<strong>Scheletro armonico</strong> — cadenze riquadrate e pedali.",
    "<strong>Piano di fraseggio</strong> — respiri ∨, direzioni →, elisioni segnalate.",
    "<strong>Gerarchia delle voci</strong> — per sezione.",
    "<strong>Da tre a cinque decisioni interpretative</strong>, ciascuna con la sua <strong>giustificazione analitica</strong> — è la rubrica che distingue una scheda da un compito d'analisi.",
  ],
  ficheModeleH3: "Scheda modello — il minuetto della sezione 2",
  ficheModeleQuote:
    "<strong>Minuetto in Do maggiore, 24 b.</strong> — Forma: ||: A 1–8 :||: B 9–16 + A′ 17–24 :||. Piano tonale: A modula a Sol (CP b. 8); B sequenzia verso La minore poi pedale di dominante b. 13–16; A′ conclude in Do (CP b. 24). Scheletro: cadenze b. 8, b. 16 (semicadenza sul pedale), b. 24; ritmo armonico che accelera b. 6–7 e 22–23; emiolia b. 6–7 e 22–23. Fraseggio: periodi 4+4 in A; respiri dopo b. 4, 8, 12, 24; <strong>nessuno</strong> tra b. 15 e 17 (il pedale si risolve nel ritorno). Voci: il soprano conduce in A; b. 9–12 il basso guida (progressione); b. 13–16 tenere il pedale come un filo.<br/><br/><strong>Decisioni</strong>: ① A a <em>mf</em> massimo — il culmine è b. 15–16 (pedale di dominante, tensione massima della forma). ② Emiolie fraseggiate per 2 tempi, leggero allargamento verso le cadenze. ③ A′ più rotondo e più disteso di A: è un arrivo (ritorno della tonica dopo la tensione), non una ripresa. ④ B. 9–12: basso in primo piano (è lui che sequenzia). ⑤ Riprese: prima volta sobria, seconda volta ornata — la forma lo permette, la quadratura lo sostiene.",
  ficheVoir: "Vedi la scheda modello",
  ficheMasquer: "Nascondi la scheda modello",
  editionBox:
    "<strong>Discutere un'edizione</strong> — le indicazioni di un editore (legature, dinamiche, diteggiature) sono interpretazioni, non il testo. Armati dell'analisi, ci si può discostare — per esempio rifiutare un <em>crescendo</em> stampato che culmina in A quando la forma colloca la tensione in B — a condizione di saper dire <em>perché</em>, e di distinguere ciò che viene dal compositore da ciò che viene dall'editore.",
  humiliteBox:
    "<strong>Clausola di umiltà</strong> — l'analisi <strong>informa</strong>, l'orecchio <strong>decide</strong>. Se una decisione analiticamente impeccabile suona male allo strumento, è la decisione che si rivede — spesso perché all'analisi mancava un parametro (tessitura, acustica, tempo reale). La scheda è un documento di lavoro, non un contratto.",

  entrainH2: "Allenamento",
  methodeH3: "Il metodo in 5 passate",
  methodeP:
    "① <strong>Forma</strong> (mappa, proporzioni, piano tonale) → ② <strong>armonia</strong> (scheletro, cadenze, pedali, ritmo armonico) → ③ <strong>fraseggio</strong> (quadrature, respiri, elisioni, emiolie) → ④ <strong>voci</strong> (chi conduce, sezione per sezione) → ⑤ <strong>scheda</strong> (le decisioni e le loro giustificazioni). In quest'ordine: ogni passata si appoggia sulla precedente.",
  exercicesH3: "Esercizi scritti",
  exercices: [
    {
      titre: "Esercizio 1 — Scheda su descrizione: sarabanda barocca",
      description:
        "<em>Sarabanda in Ré minore, 3/4, 16 battute ||: 8 :||: 8 :||, appoggio caratteristico sul 2º tempo. Battute 1–4: basso discendente Ré – Do – Si♭ – La (tetracordo di lamento), melodia in valori lunghi. Semicadenza su La maggiore b. 8. Seconda ripresa: progressione verso Fa maggiore b. 9–12, ritorno del basso discendente b. 13–14, emiolia b. 14–15, cadenza perfetta in Ré minore b. 16.</em>",
      consigne: "Redigete la scheda interpretativa (5 rubriche, almeno 3 decisioni).",
      corrige:
        "Forma: binaria 8+8, piano tonale Ré m. → La (SC b. 8); Fa (b. 9–12) → Ré m. (CP b. 16). Scheletro: tetracordo discendente b. 1–4 (e il suo ritorno b. 13–14) = colonna espressiva del brano; cadenze b. 8 e 16; emiolia b. 14–15. Fraseggio: 4+4 in ogni ripresa; respiri dopo b. 4, 8, 12 e 16; l'emiolia si fraseggia per 2 tempi e allarga verso la cadenza finale. Voci: il <strong>basso</strong> conduce b. 1–4 e 13–14 (è lui che « canta » il lamento); la melodia riprende la mano b. 5–8. <strong>Decisioni</strong>: ① appoggio del 2º tempo realizzato con la durata (tenuto) più che con l'accento — è una danza nobile, non una sincope; ② proiettare il basso discendente nei due passaggi, melodia in ritiro; ③ il ritorno del tetracordo b. 13 si illumina di un <em>mezza voce</em>: stesso oggetto, seconda illuminazione; ④ emiolia b. 14–15: allargamento, nessun respiro prima della risoluzione b. 16.",
    },
    {
      titre: "Esercizio 2 — Scheda su descrizione: romanza classica",
      description:
        "<em>Romanza in Sol maggiore, 4/4, melodia accompagnata, forma A–B–A′. A (b. 1–16): periodo 8+8, antecedente verso semicadenza b. 8, conseguente verso cadenza perfetta b. 16. B (b. 17–28): Mi minore, dialogo melodia/basso in imitazione, crescendo di tensione fino a un pedale di Ré (dominante di Sol) b. 25–28. A′ (b. 29–44): ritorno ornato di A, ma l'arrivo della cadenza b. 36 è eliso con la partenza di un'estensione di 8 battute che riconquista la cadenza b. 44.</em>",
      consigne: "Redigete la scheda.",
      corrige:
        "Forma: A (16) – B (12) – A′ esteso (16); piano tonale Sol → Mi m. → pedale di Ré → Sol. Scheletro: cadenze b. 8 (SC), 16 (CP), pedale b. 25–28, cadenza elisa b. 36, CP conclusiva b. 44. Fraseggio: periodo classico in A (respirare b. 8 e 16); <strong>non respirare</strong> b. 36 (elisione) — è il respiro proibito del brano; l'estensione b. 36–44 è un solo grande gesto → verso la vera conclusione. Voci: melodia in A; in B, il dialogo impone di alternare il primo piano tra melodia e basso, frase per frase; sul pedale, tenere il Ré come un filo sotto il crescendo. <strong>Decisioni</strong>: ① culmine dell'opera b. 27–28 (fine del pedale), non in A′; ② l'A′ ornato si suona più intimo di A (ritorno illuminato), la riserva dinamica è già stata spesa; ③ l'elisione b. 36 si concatena senza cesura, salvo respirare discretamente b. 34; ④ cadenza finale b. 44: tenuto d'arrivo poi vero respiro — l'unica conclusiva del brano.",
    },
  ],
  voirCorrige: "Vedi la correzione modello",
  masquerCorrige: "Nascondi la correzione",
  corrigeLabel: "Correzione modello — una scheda possibile, non l'unica",
  capstoneH3: "Esercizio finale — il vostro repertorio nell'analizzatore",
  capstoneP1:
    "<strong>Importate nell'Analizzatore di partiture un'opera del VOSTRO repertorio</strong> (file .xml, .musicxml o .mxl — esportabile da MuseScore o da qualsiasi editor di partiture) e producete la sua scheda interpretativa. L'analizzatore incide la partitura, la suona e propone gradi, funzioni e cadenze; il laboratorio Scheletro armonico vi aiuta a ridurre i passaggi densi. <strong>Confrontate l'analisi automatica con la vostra</strong> — lo strumento propone, voi disponete. La scheda deve contenere:",
  capstoneChecklist: [
    "la <strong>mappa formale</strong>: sezioni, battute, piano tonale, proporzioni;",
    "lo <strong>scheletro armonico</strong>: cadenze riquadrate, pedali, zone di accelerazione del ritmo armonico;",
    "il <strong>piano di fraseggio</strong>: respiri ∨, direzioni →, elisioni ed emiolie segnalate;",
    "la <strong>gerarchia delle voci</strong>, sezione per sezione;",
    "<strong>da 3 a 5 decisioni interpretative</strong>, ciascuna giustificata da un fatto d'analisi preciso (con la battuta a sostegno);",
    "una <strong>verifica allo strumento</strong>: almeno una decisione confermata — o rivista — dall'orecchio (clausola di umiltà).",
  ],
  capstoneP2:
    "È questo gesto — la scheda sul proprio brano — che questo corso vi chiede di rifare per ogni opera che monterete d'ora in poi.",
  linkAnalyseur: {
    titre: "Importare la vostra partitura nell'Analizzatore",
    desc: "Incisione, riproduzione e analisi armonica automatica (gradi, funzioni, cadenze, commento pedagogico) del vostro file .xml, .musicxml o .mxl.",
  },

  quizH3: "Quiz",
  questions: [
    {
      q: "Un periodo di 8 battute si conclude con una cadenza perfetta. Dove respirare?",
      opts: ["prima del V7", "tra il V7 e il I", "dopo il I", "da nessuna parte"],
      a: 2,
      fb: "Si respira dopo l'arrivo — mai tra una tensione e la sua risoluzione.",
    },
    {
      q: "La cadenza d'arrivo di una frase è anche il primo tempo della successiva (elisione). Che fare?",
      opts: ["respirare comunque", "concatenare senza respirare", "rallentare per compensare", "accentare l'arrivo"],
      a: 1,
      fb: "L'elisione salda fine e inizio: un respiro spezzerebbe la staffetta scritta dal compositore.",
    },
    {
      q: "In 3/4, le due battute che precedono la cadenza si sentono come tre gruppi di 2 tempi. È…",
      opts: [
        "una sincope, da accentare tempo per tempo",
        "un'emiolia: fraseggiare per 2 tempi, allargamento naturale verso la cadenza",
        "un cambio di metro da ignorare",
        "un errore di incisione",
      ],
      a: 1,
      fb: "L'emiolia si fraseggia secondo i suoi appoggi reali; frena e allarga l'avvicinamento alla cadenza.",
    },
    {
      q: "Il ritmo armonico passa da un accordo per battuta a due accordi per battuta all'avvicinarsi della cadenza. Implicazione?",
      opts: [
        "rallentare subito",
        "suonare più forte ogni accordo",
        "sostenere lo slancio: l'accelerazione armonica è un'intensificazione direzionale",
        "nessuna",
      ],
      a: 2,
      fb: "Gli accordi che si stringono creano lo slancio verso la cadenza — anche a tempo costante.",
    },
    {
      q: "Testura a 4 voci: soprano tenuto immobile, contralto in discesa cromatica. Quale voce proiettare?",
      opts: ["il soprano, è la voce superiore", "il contralto: è lui che conduce", "il basso, sempre", "tutte ugualmente"],
      a: 1,
      fb: "La linea direttrice non è sempre in alto: si proietta la voce che si muove e significa.",
    },
    {
      q: "Pedale di dominante alla fine di una sezione centrale, prima del ritorno del tema. Conseguenza?",
      opts: [
        "distendere: l'armonia è stabile",
        "mantenere la tensione: il pedale sospende la risoluzione fino al ritorno",
        "respirare in mezzo al pedale",
        "accelerare",
      ],
      a: 1,
      fb: "Il pedale di dominante è una sospensione: la distensione arriva solo con il ritorno della tonica.",
    },
    {
      q: "Su un 6/4 di cadenza, dove si colloca il gesto di distensione?",
      opts: [
        "sul 6/4 stesso",
        "sulla sua risoluzione 6/4 → V7: l'appoggiatura vi si risolve",
        "solo dopo la tonica finale",
        "prima del 6/4",
      ],
      a: 1,
      fb: "Il 6/4 è il culmine di tensione (appoggiatura della dominante); il diminuendo si colloca sulla sua risoluzione.",
    },
    {
      q: "La nota più acuta della frase è sempre il suo culmine espressivo?",
      opts: [
        "sì, per definizione",
        "no: il culmine di tensione può essere armonico e trovarsi altrove",
        "sì, salvo in minore",
        "solo nelle frasi di 8 battute",
      ],
      a: 1,
      fb: "Culmine melodico e culmine armonico possono dissociarsi — la sezione 3 ne dà un esempio.",
    },
    {
      q: "Una frase comincia con un'anacrusi (levare). La si suona…",
      opts: [
        "accentata: è la prima nota",
        "diretta verso il tempo forte successivo, senza accento",
        "staccata dal resto",
        "più lenta",
      ],
      a: 1,
      fb: "Il levare è uno slancio verso l'appoggio, non un appoggio.",
    },
    {
      q: "In una forma A–B–A′, dove riservare in generale il culmine dinamico?",
      opts: [
        "già in A, per catturare l'attenzione",
        "là dove l'analisi situa la tensione massima — spesso la fine di B, quando la dominante prepara il ritorno",
        "sempre all'ultima battuta",
        "all'inizio di A′",
      ],
      a: 1,
      fb: "La mappa formale decide: si tiene in riserva ciò che la forma spende più tardi.",
    },
  ],

  listenBtn: "Ascolta",
};

// ════════════════════════════════════════════════════════════════════════════
// PT
// ════════════════════════════════════════════════════════════════════════════

const pt: Cours46Locale = {
  maitreConcept: "A análise ao serviço da interpretação — analisar, decidir, ouvir",
  maitreAnecdote:
    "Pianista e maestro, Alfred Cortot fundou em 1919 a École Normale de Musique de Paris, onde os seus cursos de interpretação se tornaram lendários. As suas « edições de trabalho » de Chopin ou Schumann inserem na partitura a análise da forma e do fraseado, conselhos de dedilhação e exercícios dirigidos: para ele, o trabalho instrumental começa pela compreensão da arquitetura da obra.",
  maitreLesson:
    "Uma interpretação constrói-se sobre factos de análise: saber para onde vai a frase, onde a harmonia se tensiona e que voz conduz — e depois verificar cada decisão de ouvido, com o instrumento nas mãos.",

  introH2: "Porquê analisar antes de tocar?",
  introP1:
    "Um intérprete que abre uma partitura toma, queira ou não, dezenas de decisões: onde respirar, para onde conduzir o crescendo, que voz fazer ouvir, quanto tempo sustentar aquela chegada. A única questão é saber se essas decisões são <strong>fundamentadas</strong> ou improvisadas. A análise não é a guarnição académica do trabalho instrumental: é o seu fundamento — é ela que diz <strong>para onde vai a frase</strong> (direção), <strong>onde a harmonia se tensiona e se distende</strong> (timing), <strong>que voz conduz</strong> (equilíbrio).",
  introP2:
    "Concretamente, saber que o compasso 6 traz uma apojatura da dominante muda o gesto: apoiamo-nos nela, não nos precipitamos. Saber que a verdadeira tensão de um minuete culmina no fim da sua secção central proíbe dar tudo desde a primeira repetição. Saber que a linha expressiva está no contralto proíbe deixar o soprano esmagá-la.",
  introP3:
    "Duas armadilhas simétricas espreitam. A <strong>intuição sozinha</strong>: produz interpretações sedutoras por momentos e incoerentes à escala da obra — fraseia-se lindamente um compasso contra o sentido da forma. E a <strong>análise que nunca se torna som</strong>: a tabela de graus impecável que nada muda na execução é tempo perdido. Daí a regra do curso, que estrutura tudo o que se segue:",
  regleOr:
    "<strong>Analisar → decidir → ouvir.</strong><br/>Cada observação analítica deve traduzir-se numa decisão de execução, e cada decisão deve ser verificada de ouvido, com o instrumento nas mãos. Uma análise que não produz decisão está incompleta; uma decisão que o ouvido desmente revê-se (ver a cláusula de humildade, secção 6).",

  carteH2: "O mapa da obra: forma e proporções",
  carteP1:
    "Primeira passagem, partitura sobre a mesa, <strong>antes</strong> de tocar: traçar o mapa. Identificam-se as <strong>secções</strong> (barras duplas, repetições, mudanças de textura ou de armação), os <strong>regressos</strong> (o que regressa, idêntico ou variado?), as <strong>proporções</strong> (quantos compassos cada uma?) e o <strong>plano tonal</strong> (para onde se vai, quando se regressa?). As ferramentas são as dos cursos 17 e 28 (período, quadratura, formas binária, ternária, rondó, sonata) — mas a finalidade muda: o mapa serve para decidir a <strong>arquitetura da interpretação</strong>. Onde está o <strong>verdadeiro cume</strong> da obra? O que se guarda <strong>em reserva</strong> para ele? Que relações de tempo e de carácter entre secções?",
  carteP2:
    "<strong>Anota-se a partitura</strong>: letras de secção (A, B, A′) a lápis, setas para os pontos de tensão, cadências emolduradas. Uma partitura de trabalho não anotada é um mapa mudo.",
  menuetH3: "Exemplo trabalhado — um minuete clássico de 24 compassos",
  menuetIntro: "Forma binária com repetições e regresso: ||: A :||: B + A′ :||.",
  menuetHeaders: ["Secção", "Compassos", "Plano tonal", "Função dramática", "Consequência interpretativa"],
  menuetRows: [
    {
      section: "A",
      mesures: "1–8",
      plan: "Dó maior → cadência perfeita em <strong>Sol maior</strong> (c. 8)",
      fonction: "exposição, impulso inicial",
      consequence: "som afirmado mas <strong>reserva dinâmica</strong>: nada acima de <em>mf</em>",
    },
    {
      section: "B",
      mesures: "9–16",
      plan: "sequência por Lá menor, depois <strong>pedal de dominante</strong> (Sol) c. 13–16",
      fonction: "instabilidade crescente, tensão máxima",
      consequence: "crescendo de longo alcance; <strong>cume da obra c. 15–16</strong>, ligeiro alargamento",
    },
    {
      section: "A′",
      mesures: "17–24",
      plan: "regresso a Dó maior, cadência perfeita conclusiva (c. 24)",
      fonction: "resolução, regresso iluminado",
      consequence: "uma <strong>chegada</strong>, não um recomeço: distensão, som mais redondo do que em A",
    },
  ],
  carteConclusion:
    "O mapa resolve de imediato a questão mais custosa: o cume <strong>não</strong> está em A (erro frequente: dar tudo à partida), está no fim de B, ali onde o pedal de dominante suspende o regresso. Todo o plano dinâmico decorre desta única observação.",

  squelH2: "O esqueleto harmónico do intérprete",
  squelP1:
    "Segunda passagem: reduzir a superfície (arpejos, bordaduras, figuração) à <strong>progressão subjacente</strong> — o gesto do curso 27 (redução, prolongamento), apoiado na plataforma pelo atelier Esqueleto harmónico. O intérprete procura aí quatro coisas: as <strong>cadências</strong> (são as respirações), as <strong>dominantes e as suas resoluções</strong> (o timing tensão→distensão), os <strong>pedais</strong> (zonas de estabilidade ou de suspensão), as <strong>modulações</strong> (mudanças de cor a projetar). Acresce o <strong>ritmo harmónico</strong>: quando os acordes mudam mais depressa à aproximação de uma cadência, a música acelera interiormente — é um impulso a sustentar, mesmo a tempo constante.",
  phraseH3: "Exemplo trabalhado — frase de 8 compassos em Dó maior, em 4/4",
  phraseIntro:
    "Melodia e baixo, um acorde por compasso salvo indicação. Ré4, Fa4 e Si4 são <em>notas de passagem</em>; todas as outras notas da melodia pertencem ao acorde.",
  phraseCaption: "Graus, compasso a compasso: I · I · VI · IV · II6 · I6/4 · V7 · I",
  squelP2:
    "O esqueleto é <strong>I – VI – IV – II6 – I6/4 – V7 – I</strong>, e cada acontecimento dita uma decisão:",
  decisionsCaption: "Do facto de análise à decisão de execução",
  decisionsHeaders: ["Acontecimento", "Facto de análise", "Decisão de execução"],
  decisionsRows: [
    {
      evenement: "I (c. 1–2)",
      fait: "tónica prolongada, ritmo harmónico lento (1 acorde / 2 compassos)",
      decision: "instalar o tempo, som assente, nenhuma urgência",
    },
    {
      evenement: "VI (c. 3)",
      fait: "primeira inflexão, sombra do relativo",
      decision: "mudança de <strong>cor</strong>, não de acento",
    },
    {
      evenement: "IV → II6 (c. 4–5)",
      fait: "zona de pré-dominante; o ritmo harmónico passou a 1 acorde/compasso; baixo comum Fa",
      decision: "começa o impulso para a cadência: <strong>crescendo direcional</strong>, ligar c. 4–5 sobre o baixo sustentado",
    },
    {
      evenement: "Ré5 (c. 5)",
      fait: "<strong>cume melódico</strong> — mas não o cume de tensão",
      decision: "fazê-lo soar sem parar nele: a frase não terminou",
    },
    {
      evenement: "I6/4 (c. 6)",
      fait: "apojatura da dominante (Do5, quarta acima do baixo Sol): <strong>cume de tensão harmónica</strong>",
      decision: "ponto culminante dinâmico, ligeiro apoio; <strong>não respirar</strong> antes da sua resolução",
    },
    {
      evenement: "V7 (c. 7)",
      fait: "resolução da apojatura (Do5 → Si4): começa a distensão",
      decision: "o 6/4 → V7 é a <strong>expiração harmónica</strong> — colocar aqui o diminuendo",
    },
    {
      evenement: "I (c. 8)",
      fait: "chegada, cadência perfeita",
      decision: "tenuto de chegada, depois respiração <strong>depois</strong> do acorde",
    },
  ],
  squelP3:
    "Note-se a dissociação cume melódico (c. 5) / cume harmónico (c. 6): é ela que dá à frase a sua trajetória em dois tempos — e é exatamente o género de facto que a intuição sozinha deixa escapar.",
  linkSquelette: {
    titre: "Reduzir com o atelier Esqueleto harmónico",
    desc: "A redução guiada de uma superfície à sua progressão subjacente — a ferramenta da segunda passagem.",
  },
  linkGo: "Aceder →",

  phraseeH2: "Fraseado, quadraturas e respirações",
  phraseeP1:
    "Terceira passagem: o plano de fraseado. As categorias vêm do curso 17: o <strong>período</strong> (antecedente que suspende — muitas vezes meia cadência —, consequente que conclui) e a <strong>frase de tipo « sentence »</strong> (apresentação 2+2, depois continuação para a cadência). Acrescem os acidentes de quadratura: a <strong>elisão</strong> (o compasso de chegada de uma frase é ao mesmo tempo o primeiro da seguinte), a <strong>extensão</strong> (cadência evitada e depois reconquistada), a <strong>hemíola</strong> (em 3/4, dois compassos ouvidos como três grupos de 2 tempos — sinal quase sistemático de aproximação de cadência nas danças barrocas e nos minuetes).",
  phraseeP2:
    "Regras de respiração do intérprete: respira-se <strong>nas cadências e fins de frase</strong>, depois da chegada; não se respira <strong>nunca</strong> entre uma tensão e a sua resolução (6/4 → V7, sensível → tónica), nem <strong>através de uma elisão</strong> — a respiração quebraria aí a passagem de testemunho que o compositor precisamente soldou. Uma hemíola fraseia-se segundo os seus apoios reais (por 2 tempos), com o alargamento natural que induz para a cadência. Por fim, o fraseado por <strong>anacruse</strong>: uma anacruse dirige-se <em>para</em> o tempo forte seguinte, não se acentua. O modelo de tudo isto continua a ser o <strong>canto</strong>: ali onde um cantor deveria respirar, a frase respira — seja qual for o instrumento.",
  conventionsCaption: "Convenções de anotação do curso",
  conventionsHeaders: ["Sinal", "Sentido"],
  conventionsRows: [
    { signe: "→", sens: "direção (« vai para »)" },
    { signe: "∨", sens: "respiração" },
    { signe: "(∨)", sens: "meia respiração (cesura sem rutura)" },
    { signe: "—", sens: "tenuto de chegada" },
  ],
  annoteeH3: "A frase da secção 3, anotada",
  annoteeP:
    "C. 1–2 apresentação, <strong>(∨)</strong> ligeira depois do Mi4 do c. 2; c. 3–4 resposta, <strong>(∨)</strong> depois do c. 4; depois um só grande gesto <strong>→</strong> do c. 5 até ao Do5 do c. 6 (cume), <strong>nenhuma respiração</strong> do c. 5 ao c. 8; <strong>—</strong> sobre o Do5 final (c. 8), <strong>∨</strong> franca depois. A estrutura é uma « sentence »: 2+2 e depois continuação de 4 compassos de um só fôlego.",

  voixH2: "Hierarquia das vozes e condução interior",
  voixP1:
    "Quarta passagem: quem conduz? O reflexo « a voz superior é a melodia » é estatisticamente justo e musicalmente preguiçoso. A linha diretriz pode ser <strong>interior</strong> (descidas cromáticas, cadeias de retardos — projetá-las é um dos gestos mais compensadores do jogo polifónico) ou estar no <strong>baixo</strong>, que é preciso trabalhar sempre como uma <strong>segunda melodia</strong>: é ele que transporta o esqueleto da secção 3. No piano, esta hierarquia realiza-se pelo <strong>voicing</strong> (dosear os dedos de um mesmo acorde); em conjunto, pelo <strong>equilíbrio</strong> (quem toca a linha que conta recebe o primeiro plano). Mesmo uma textura de aparência homofónica se escuta polifonicamente: cada voz tem uma linha, e uma delas merece o primeiro plano.",
  satbH3: "Exemplo nota a nota — 4 acordes, escrita SATB de escola, em Dó maior",
  satbIntro: "Um acorde por compasso. Graus: <strong>I – V – V7/IV – II6</strong>.",
  altoCaption: "A linha de contralto isolada: Do4 – Si3 – Si♭3 – La3",
  altoBtn: "Ouvir o contralto sozinho",
  satbBtn: "Ouvir os 4 acordes",
  voixEcouteTip:
    "<strong>Ouça por esta ordem</strong>: primeiro a linha de contralto sozinha, depois as quatro vozes. O contraste é a lição — a linha que acabou de ouvir nua deve permanecer audível dentro dos acordes. É exatamente isso que significa « projetar uma voz interior ».",
  voixP2:
    "O soprano está <strong>imóvel</strong> (Sol4 sustentado três acordes): não conduz nada. A linha expressiva é a <strong>descida cromática do contralto</strong> Do4 – Si3 – Si♭3 – La3: a inflexão Si → Si♭ (na mesma voz, como deve ser) faz a tónica tombar em dominante de IV — é o instante de sombra da passagem, a fazer ouvir. Decisão: projetar o contralto (no piano, o dedo do contralto soa um plano acima dos outros; em quarteto, conduz o segundo violino ou a viola), soprano em retirada, baixo Do–Sol–Do–Fa firme mas sóbrio. A continuação lógica do II6 é a cadência da secção 3 (I6/4 – V7 – I): os dois exemplos encaixam.",
  voixVerif:
    "<em>Condução verificada: movimentos conjuntos ou oblíquos nas vozes superiores, nenhuma quinta nem oitava consecutiva, sétima Si♭ introduzida por inflexão cromática na mesma voz e resolvida por grau descendente sobre La.</em>",

  ficheH2: "Da análise à decisão: a ficha de interpretação",
  ficheP1:
    "O produto do método cabe numa <strong>página</strong> — a ficha de interpretação, a deslizar dentro da partitura. Cinco rubricas:",
  rubriques: [
    "<strong>Mapa formal</strong> — secções, compassos, plano tonal (a tabela da secção 2).",
    "<strong>Esqueleto harmónico</strong> — cadências emolduradas e pedais.",
    "<strong>Plano de fraseado</strong> — respirações ∨, direções →, elisões assinaladas.",
    "<strong>Hierarquia das vozes</strong> — por secção.",
    "<strong>Três a cinco decisões de interpretação</strong>, cada uma com a sua <strong>justificação analítica</strong> — é a rubrica que distingue uma ficha de um trabalho de análise.",
  ],
  ficheModeleH3: "Ficha modelo — o minuete da secção 2",
  ficheModeleQuote:
    "<strong>Minuete em Dó maior, 24 c.</strong> — Forma: ||: A 1–8 :||: B 9–16 + A′ 17–24 :||. Plano tonal: A modula para Sol (CP c. 8); B sequencia para Lá menor e depois pedal de dominante c. 13–16; A′ conclui em Dó (CP c. 24). Esqueleto: cadências c. 8, c. 16 (meia cadência sobre o pedal), c. 24; ritmo harmónico a acelerar c. 6–7 e 22–23; hemíola c. 6–7 e 22–23. Fraseado: períodos 4+4 em A; respirações depois de c. 4, 8, 12, 24; <strong>nenhuma</strong> entre c. 15 e 17 (o pedal resolve-se no regresso). Vozes: o soprano conduz em A; c. 9–12 o baixo lidera (marcha); c. 13–16 sustentar o pedal como um fio.<br/><br/><strong>Decisões</strong>: ① A a <em>mf</em> no máximo — o cume está em c. 15–16 (pedal de dominante, tensão máxima da forma). ② Hemíolas fraseadas por 2 tempos, ligeiro alargamento para as cadências. ③ A′ mais redondo e mais distendido do que A: é uma chegada (regresso da tónica após a tensão), não uma repetição. ④ C. 9–12: baixo em primeiro plano (é ele que sequencia). ⑤ Repetições: primeira vez sóbria, segunda vez ornamentada — a forma permite-o, a quadratura suporta-o.",
  ficheVoir: "Ver a ficha modelo",
  ficheMasquer: "Ocultar a ficha modelo",
  editionBox:
    "<strong>Discutir uma edição</strong> — as indicações de um editor (ligaduras, dinâmicas, dedilhações) são interpretações, não o texto. Munido da análise, pode afastar-se delas — por exemplo recusar um <em>crescendo</em> impresso que culmina em A quando a forma coloca a tensão em B — desde que saiba dizer <em>porquê</em>, e distinguir o que vem do compositor do que vem do editor.",
  humiliteBox:
    "<strong>Cláusula de humildade</strong> — a análise <strong>informa</strong>, o ouvido <strong>decide</strong>. Se uma decisão analiticamente impecável soa mal no instrumento, é a decisão que se revê — muitas vezes porque faltava à análise um parâmetro (tessitura, acústica, tempo real). A ficha é um documento de trabalho, não um contrato.",

  entrainH2: "Treino",
  methodeH3: "O método em 5 passagens",
  methodeP:
    "① <strong>Forma</strong> (mapa, proporções, plano tonal) → ② <strong>harmonia</strong> (esqueleto, cadências, pedais, ritmo harmónico) → ③ <strong>fraseado</strong> (quadraturas, respirações, elisões, hemíolas) → ④ <strong>vozes</strong> (quem conduz, secção por secção) → ⑤ <strong>ficha</strong> (as decisões e as suas justificações). Por esta ordem: cada passagem apoia-se na anterior.",
  exercicesH3: "Exercícios escritos",
  exercices: [
    {
      titre: "Exercício 1 — Ficha sobre descrição: sarabanda barroca",
      description:
        "<em>Sarabanda em Ré menor, 3/4, 16 compassos ||: 8 :||: 8 :||, apoio característico no 2.º tempo. Compassos 1–4: baixo descendente Ré – Do – Si♭ – La (tetracorde de lamento), melodia em valores longos. Meia cadência sobre Lá maior c. 8. Segunda repetição: marcha para Fá maior c. 9–12, regresso do baixo descendente c. 13–14, hemíola c. 14–15, cadência perfeita em Ré menor c. 16.</em>",
      consigne: "Redija a ficha de interpretação (5 rubricas, 3 decisões no mínimo).",
      corrige:
        "Forma: binária 8+8, plano tonal Ré m. → Lá (MC c. 8); Fá (c. 9–12) → Ré m. (CP c. 16). Esqueleto: tetracorde descendente c. 1–4 (e o seu regresso c. 13–14) = coluna expressiva da peça; cadências c. 8 e 16; hemíola c. 14–15. Fraseado: 4+4 em cada repetição; respirações depois de c. 4, 8, 12 e 16; a hemíola fraseia-se por 2 tempos e alarga para a cadência final. Vozes: o <strong>baixo</strong> conduz c. 1–4 e 13–14 (é ele que « canta » o lamento); a melodia retoma a dianteira c. 5–8. <strong>Decisões</strong>: ① apoio do 2.º tempo realizado por duração (tenuto) mais do que por acento — é uma dança nobre, não uma síncopa; ② projetar o baixo descendente nas duas passagens, melodia em retirada; ③ o regresso do tetracorde c. 13 ilumina-se com um <em>mezza voce</em>: mesmo objeto, segunda iluminação; ④ hemíola c. 14–15: alargamento, sem respiração antes da resolução c. 16.",
    },
    {
      titre: "Exercício 2 — Ficha sobre descrição: romança clássica",
      description:
        "<em>Romança em Sol maior, 4/4, melodia acompanhada, forma A–B–A′. A (c. 1–16): período 8+8, antecedente para meia cadência c. 8, consequente para cadência perfeita c. 16. B (c. 17–28): Mi menor, diálogo melodia/baixo em imitação, crescendo de tensão até um pedal de Ré (dominante de Sol) c. 25–28. A′ (c. 29–44): regresso ornamentado de A, mas a chegada da cadência c. 36 é elidida com o arranque de uma extensão de 8 compassos que reconquista a cadência c. 44.</em>",
      consigne: "Redija a ficha.",
      corrige:
        "Forma: A (16) – B (12) – A′ estendido (16); plano tonal Sol → Mi m. → pedal de Ré → Sol. Esqueleto: cadências c. 8 (MC), 16 (CP), pedal c. 25–28, cadência elidida c. 36, CP conclusiva c. 44. Fraseado: período clássico em A (respirar c. 8 e 16); <strong>não respirar</strong> c. 36 (elisão) — é a respiração proibida da peça; a extensão c. 36–44 é um só grande gesto → para a verdadeira conclusão. Vozes: melodia em A; em B, o diálogo obriga a alternar o primeiro plano entre melodia e baixo, frase a frase; sobre o pedal, sustentar o Ré como um fio sob o crescendo. <strong>Decisões</strong>: ① cume da obra c. 27–28 (fim do pedal), não em A′; ② o A′ ornamentado toca-se mais íntimo do que A (regresso iluminado), a reserva dinâmica já foi gasta; ③ a elisão c. 36 encadeia-se sem cesura, respirando discretamente no c. 34 se necessário; ④ cadência final c. 44: tenuto de chegada e depois verdadeira respiração — a única conclusiva da peça.",
    },
  ],
  voirCorrige: "Ver a correção modelo",
  masquerCorrige: "Ocultar a correção",
  corrigeLabel: "Correção modelo — uma ficha possível, não a única",
  capstoneH3: "Exercício final — o seu repertório no analisador",
  capstoneP1:
    "<strong>Importe no Analisador de partituras uma obra do SEU repertório</strong> (ficheiro .xml, .musicxml ou .mxl — exportável do MuseScore ou de qualquer editor de partituras) e produza a sua ficha de interpretação. O analisador grava a partitura, toca-a e propõe graus, funções e cadências; o atelier Esqueleto harmónico ajuda-o a reduzir as passagens carregadas. <strong>Confronte a análise automática com a sua</strong> — a ferramenta propõe, você dispõe. A ficha deve conter:",
  capstoneChecklist: [
    "o <strong>mapa formal</strong>: secções, compassos, plano tonal, proporções;",
    "o <strong>esqueleto harmónico</strong>: cadências emolduradas, pedais, zonas de aceleração do ritmo harmónico;",
    "o <strong>plano de fraseado</strong>: respirações ∨, direções →, elisões e hemíolas assinaladas;",
    "a <strong>hierarquia das vozes</strong>, secção por secção;",
    "<strong>3 a 5 decisões de interpretação</strong>, cada uma justificada por um facto de análise preciso (com o compasso como apoio);",
    "uma <strong>verificação no instrumento</strong>: pelo menos uma decisão confirmada — ou revista — pelo ouvido (cláusula de humildade).",
  ],
  capstoneP2:
    "É este gesto — a ficha sobre a própria peça — que este curso lhe pede que repita para cada obra que montar de agora em diante.",
  linkAnalyseur: {
    titre: "Importar a sua partitura no Analisador",
    desc: "Gravação, reprodução e análise harmónica automática (graus, funções, cadências, comentário pedagógico) do seu ficheiro .xml, .musicxml ou .mxl.",
  },

  quizH3: "Quiz",
  questions: [
    {
      q: "Um período de 8 compassos conclui com uma cadência perfeita. Onde respirar?",
      opts: ["antes do V7", "entre o V7 e o I", "depois do I", "em lado nenhum"],
      a: 2,
      fb: "Respira-se depois da chegada — nunca entre uma tensão e a sua resolução.",
    },
    {
      q: "A cadência de chegada de uma frase é também o primeiro tempo da seguinte (elisão). O que fazer?",
      opts: ["respirar na mesma", "encadear sem respirar", "abrandar para compensar", "acentuar a chegada"],
      a: 1,
      fb: "A elisão solda fim e início: uma respiração quebraria a passagem de testemunho escrita pelo compositor.",
    },
    {
      q: "Em 3/4, os dois compassos que precedem a cadência ouvem-se como três grupos de 2 tempos. É…",
      opts: [
        "uma síncopa, a acentuar tempo a tempo",
        "uma hemíola: frasear por 2 tempos, alargamento natural para a cadência",
        "uma mudança de compasso a ignorar",
        "um erro de gravação",
      ],
      a: 1,
      fb: "A hemíola fraseia-se segundo os seus apoios reais; trava e alarga a aproximação à cadência.",
    },
    {
      q: "O ritmo harmónico passa de um acorde por compasso para dois acordes por compasso à aproximação da cadência. Implicação?",
      opts: [
        "abrandar de imediato",
        "tocar mais forte cada acorde",
        "sustentar o impulso: a aceleração harmónica é uma intensificação direcional",
        "nenhuma",
      ],
      a: 2,
      fb: "Os acordes que se estreitam criam o impulso para a cadência — mesmo a tempo constante.",
    },
    {
      q: "Textura a 4 vozes: soprano sustentado imóvel, contralto em descida cromática. Que voz projetar?",
      opts: ["o soprano, é a voz superior", "o contralto: é ele que conduz", "o baixo, sempre", "todas igualmente"],
      a: 1,
      fb: "A linha diretriz não está sempre em cima: projeta-se a voz que se move e significa.",
    },
    {
      q: "Pedal de dominante no fim de uma secção central, antes do regresso do tema. Consequência?",
      opts: [
        "distender: a harmonia é estável",
        "manter a tensão: o pedal suspende a resolução até ao regresso",
        "respirar a meio do pedal",
        "acelerar",
      ],
      a: 1,
      fb: "O pedal de dominante é uma suspensão: a distensão só chega com o regresso da tónica.",
    },
    {
      q: "Sobre um 6/4 de cadência, onde se coloca o gesto de distensão?",
      opts: [
        "sobre o próprio 6/4",
        "sobre a sua resolução 6/4 → V7: a apojatura resolve-se aí",
        "só depois da tónica final",
        "antes do 6/4",
      ],
      a: 1,
      fb: "O 6/4 é o cume de tensão (apojatura da dominante); o diminuendo coloca-se na sua resolução.",
    },
    {
      q: "A nota mais aguda da frase é sempre o seu cume expressivo?",
      opts: [
        "sim, por definição",
        "não: o cume de tensão pode ser harmónico e situar-se noutro lugar",
        "sim, exceto em menor",
        "só nas frases de 8 compassos",
      ],
      a: 1,
      fb: "Cume melódico e cume harmónico podem dissociar-se — a secção 3 dá um exemplo.",
    },
    {
      q: "Uma frase começa com uma anacruse. Toca-se…",
      opts: [
        "acentuada: é a primeira nota",
        "dirigida para o tempo forte seguinte, sem acento",
        "destacada do resto",
        "mais lenta",
      ],
      a: 1,
      fb: "A anacruse é um impulso para o apoio, não um apoio.",
    },
    {
      q: "Numa forma A–B–A′, onde reservar em geral o cume dinâmico?",
      opts: [
        "logo em A, para captar a atenção",
        "ali onde a análise situa a tensão máxima — muitas vezes o fim de B, quando a dominante prepara o regresso",
        "sempre no último compasso",
        "no início de A′",
      ],
      a: 1,
      fb: "O mapa formal decide: guarda-se em reserva o que a forma gasta mais tarde.",
    },
  ],

  listenBtn: "Ouvir",
};

export const cours46Content: Record<string, Cours46Locale> = { fr, en, de, es, it, pt };
