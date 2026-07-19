// Cours 45 — Méthodologie du commentaire d'écoute (Niveau 3, ≈ L3)
// Contenu pédagogique locale-clé : le FR fait foi (transcrit de la spec validée
// 2026-07-18-cours-commentaire-ecoute-contenu-fr.md — AUCUNE note, AUCUN marqueur
// stylistique modifié). Les cinq autres langues traduisent la prose avec le
// vocabulaire correct (commentaire d'écoute = listening commentary / Höranalyse /
// comentario de audición / commento d'ascolto / comentário auditivo ; texture
// homophone = homophonic texture / homophoner Satz ; carrure = phrase structure /
// Periodik / cuadratura / quadratura ; la basse continue reste « basso continuo »
// partout). Les deux grandes tables de référence (8 paramètres ; 6 périodes) sont
// COMPLÈTES dans les six langues — elles sont le cœur du cours.
// CONVENTION : noms de notes en solfège FRANÇAIS partout (Do Ré Mi Fa Sol La Si) —
// exigence de la couche audio Harmonia. Les NOTES des exemples SATB vivent dans
// Cours45.tsx : identiques dans les six langues par construction.

export interface Question {
  q: string;
  opts: string[];
  a: number;
  fb: string;
}

/** Un exercice de rédaction : description d'extrait, consigne, corrigé modèle. */
export interface ExerciceRedaction {
  titre: string;
  description: string;
  consigne: string;
  corrige: string;
}

export interface Cours45Locale {
  // ── Maître (MaitreCard) ──
  maitreConcept: string;
  maitreAnecdote: string;
  maitreLesson: string;

  // ── Note « Comment travailler ce cours » (encadré d'honnêteté, en tête) ──
  honneteTitle: string;
  honneteBody: string;

  // ── Section 1 — Qu'est-ce que le commentaire d'écoute ? ──
  introH2: string;
  introP1: string;
  introP2: string;
  regleOr: string; // la règle d'or « Décrire → identifier → situer »
  introP3: string;

  // ── Section 2 — La grille des paramètres ──
  grilleH2: string;
  grilleP1: string;
  grilleCaption: string;
  grilleHeaders: string[]; // 3
  grilleRows: { param: string; questions: string; vocab: string }[]; // 8
  grilleP2: string;

  // ── Section 3 — Les marqueurs stylistiques ──
  periodesH2: string;
  periodesP1: string;
  periodesCaption: string;
  periodesHeaders: string[]; // 6
  periodesRows: {
    periode: string;
    effectif: string;
    texture: string;
    harmonie: string;
    formes: string;
    indices: string;
  }[]; // 6 périodes
  periodesP2: string;

  // ── Section 4 — Reconnaître les formes à l'oreille ──
  formesH2: string;
  formesP1: string;
  formesList: string[]; // 6 formes
  illu1H3: string;
  illu1P: string;
  illu1Chords: string; // ligne des accords mesure par mesure
  illu1Ecoute: string;
  illu2H3: string;
  illu2P1: string;
  illu2P2: string;

  // ── Section 5 — Entendre l'harmonie ──
  harmH2: string;
  harmP1: string;
  cadH3: string;
  cadLabels: { nom: string; accords: string }[]; // 4 (parfaite, plagale, demi, rompue)
  cadEcoute: string;
  modeH3: string;
  modeP1: string;
  modeP2: string;
  modeMajBtn: string;
  modeMinBtn: string;
  modulH3: string;
  modulP1: string;
  modulDomTitle: string;
  modulRelTitle: string;
  modulEcoute: string;
  rythmeH3: string;
  rythmeP1: string;
  rythmeP2: string;
  rythmeLentBtn: string;
  rythmeRapideBtn: string;
  textureH3: string;
  textureP1: string;
  textureLabels: { titre: string; desc: string }[]; // 4 textures
  textureP2: string;

  // ── Section 6 — Construire le commentaire ──
  planH2: string;
  planP1: string;
  planSteps: string[]; // 3
  registreBox: string;
  piegesBox: string;
  modeleH3: string;
  modeleDesc: string;
  modeleQuote: string;

  // ── Section 7 — Entraînement ──
  entrainH2: string;
  methodeH3: string;
  methodeP: string;
  exercicesH3: string;
  exercices: ExerciceRedaction[]; // 2
  voirCorrige: string;
  masquerCorrige: string;
  corrigeLabel: string;

  // Drills à l'aveugle (exercices 3 et 4)
  drillCadH3: string;
  drillCadConsigne: string;
  drillModH3: string;
  drillModConsigne: string;
  drillRytH3: string;
  drillRytConsigne: string;
  drillPlayBtn: string;
  drillReplayBtn: string;
  drillAnswerPrompt: string;
  drillCorrect: string;
  drillWrong: string;
  drillResetBtn: string;
  cadenceNames: string[]; // 4 — même ordre que CADENCES dans Cours45.tsx
  modulationNames: string[]; // 2 — dominante / relatif
  rythmeNames: string[]; // 2 — lent / rapide

  quizH3: string;
  questions: Question[];

  // ── UI partagée ──
  listenBtn: string;
}

// ════════════════════════════════════════════════════════════════════════════
// FR — fait foi (transcription de la spec validée)
// ════════════════════════════════════════════════════════════════════════════

const fr: Cours45Locale = {
  maitreConcept: "Le commentaire d'écoute — décrire, identifier, situer",
  maitreAnecdote:
    "Professeur au Conservatoire de Paris de 1941 à 1978, Olivier Messiaen y tint une classe d'analyse qui fut le laboratoire d'écoute le plus célèbre du siècle : on y analysait tout — chant grégorien, Mozart, Debussy, rythmes hindous, chants d'oiseaux — partition et oreille ensemble. Boulez, Xenakis ou Stockhausen y sont passés. Sa discipline : écouter d'abord, nommer précisément ensuite, conclure prudemment enfin.",
  maitreLesson:
    "L'épreuve du commentaire d'écoute évalue une démarche, pas une discothèque intérieure : une description hiérarchisée et argumentée vaut toujours mieux qu'un nom de compositeur lancé au hasard.",

  honneteTitle: "Comment travailler ce cours",
  honneteBody:
    "<strong>Harmonia ne contient aucun enregistrement.</strong> Pour des raisons de droits, la plateforme ne dispose d'aucune phonothèque : tout ce que vous entendrez ici est joué par un <strong>piano de synthèse</strong>, à partir de partitions gravées. Ce cours vous donne donc deux choses : la <strong>méthodologie complète</strong> du commentaire d'écoute (la grille d'analyse, les marqueurs stylistiques, le plan, le vocabulaire — tout l'outillage intellectuel de l'épreuve) et l'<strong>entraînement des paramètres réellement travaillables au piano de synthèse</strong> : cadences, modes majeur/mineur, modulations, rythme harmonique, textures, formes. En revanche, l'identification des <strong>timbres</strong> et de l'<strong>orchestration</strong> sur des œuvres réelles ne peut pas se travailler ici : elle relève de l'écoute en classe et de votre fréquentation personnelle du répertoire (concerts, radio, plateformes). Ce cours est la méthode et le gymnase harmonique — pas un substitut à l'écoute des œuvres.",

  introH2: "Qu'est-ce que le commentaire d'écoute ?",
  introP1:
    "Le commentaire d'écoute est une épreuve reine des cursus français : à l'université (licence de musicologie, CAPES/agrégation), en conservatoire (DEM d'analyse — voir cours 26 pour l'autre versant de l'examen, l'écriture) et dans de nombreux concours. Le principe : on vous fait entendre un extrait d'une œuvre, <strong>le plus souvent inconnue de vous</strong>, deux à quatre fois ; vous devez en produire un commentaire structuré qui identifie l'<strong>effectif</strong>, la <strong>texture</strong>, le <strong>langage</strong>, la <strong>forme</strong>, le <strong>genre probable</strong>, et qui <strong>situe l'œuvre</strong> dans une période stylistique — le tout argumenté par ce que vous avez réellement entendu.",
  introP2:
    "Ce que le correcteur attend n'est <strong>pas</strong> un catalogue d'effets (« il y a des violons, puis c'est fort, puis il y a une flûte ») ni un pari sur le titre. Il attend une description <strong>hiérarchisée</strong> (les paramètres décisifs d'abord), <strong>argumentée</strong> (chaque affirmation appuyée sur un indice audible) et <strong>prudente</strong> (une hypothèse de datation, pas une certitude proclamée). D'où la règle d'or du cours, dans cet ordre et jamais dans l'autre :",
  regleOr:
    "<strong>Décrire → identifier → situer.</strong><br/>On décrit d'abord ce qu'on entend (paramètres objectifs), on en identifie ensuite les éléments techniques (cadences, forme, langage), et l'on propose enfin une situation historique argumentée. <strong>Jamais l'inverse</strong> : deviner d'emblée un titre ou un compositeur, puis tordre la description pour la faire coller, est la faute méthodologique la plus sanctionnée — et la plus fréquente.",
  introP3:
    "Un extrait bien décrit mais prudemment situé vaut toujours mieux qu'un nom lancé juste par chance : l'épreuve évalue une <strong>démarche</strong>, pas une discothèque intérieure.",

  grilleH2: "La boîte à outils : que faut-il écouter ?",
  grilleP1:
    "Avant toute technique, il faut une <strong>grille de paramètres</strong> : la check-list mentale que l'on déroule dès la première écoute. La voici — c'est LA table de référence du cours, à connaître par cœur. À la première écoute, on balaie tout ; aux écoutes suivantes, on approfondit les paramètres décisifs pour l'extrait donné.",
  grilleCaption: "La grille des paramètres d'écoute — à connaître par cœur",
  grilleHeaders: ["Paramètre", "Questions à se poser", "Vocabulaire clé"],
  grilleRows: [
    {
      param: "<strong>Effectif / timbre</strong>",
      questions: "Voix ou instruments ? Combien ? Familles (cordes, vents, claviers) ? Soliste + accompagnement ?",
      vocab: "orchestre symphonique, formation de chambre, <em>a cappella</em>, basse continue, effectif mixte",
    },
    {
      param: "<strong>Texture</strong>",
      questions: "Une seule ligne ? Toutes les voix ensemble ? Des lignes indépendantes ? Une mélodie qui domine ?",
      vocab: "<strong>monodie</strong>, <strong>homophonie</strong> (homorythmie), <strong>polyphonie / contrepoint</strong> (imitation), <strong>mélodie accompagnée</strong>",
    },
    {
      param: "<strong>Langage</strong>",
      questions: "Sent-on une tonique ? Le langage est-il modal, tonal, atonal ? Consonant ou dissonant ?",
      vocab: "modal, tonal (majeur/mineur), chromatique, atonal ; consonance, dissonance, cluster",
    },
    {
      param: "<strong>Harmonie</strong>",
      questions: "Entend-on des cadences ? Les accords changent-ils vite ou lentement ? Y a-t-il des modulations ?",
      vocab: "cadence parfaite / plagale / rompue / demi-cadence (cours 4), <strong>rythme harmonique</strong>, modulation",
    },
    {
      param: "<strong>Forme</strong>",
      questions: "Des phrases régulières ? Des sections qui reviennent ? Des contrastes ?",
      vocab: "carrure, période, refrain/couplet, reprise, A-B-A, développement (cours 17 et 28)",
    },
    {
      param: "<strong>Rythme / tempo / métrique</strong>",
      questions: "Binaire ou ternaire ? Tempo stable ou fluctuant ? Pulsation dansante ?",
      vocab: "mesure à 2, 3, 4 temps ; rubato ; ostinato ; syncope ; caractère de danse",
    },
    {
      param: "<strong>Dynamiques / articulation</strong>",
      questions: "Nuances en terrasses ou progressives ? Legato, staccato ? Grands crescendos ?",
      vocab: "nuances en terrasses, crescendo/decrescendo, accents, contrastes dynamiques",
    },
    {
      param: "<strong>Texte (s'il y en a)</strong>",
      questions: "Langue ? Sacré ou profane ? Rapport musique-texte (syllabique, mélismatique) ?",
      vocab: "liturgique, madrigalisme, syllabique, mélismatique, récitatif / air",
    },
  ],
  grilleP2:
    "Deux conseils d'usage. D'abord, <strong>hiérarchiser</strong> : tous les paramètres ne sont pas également parlants pour un extrait donné — une fugue de clavier se joue sur la texture et la forme, un lied sur le texte et l'harmonie. Ensuite, <strong>croiser</strong> : c'est le <strong>faisceau d'indices</strong> convergents qui autorise une hypothèse de période (section suivante), jamais un indice isolé.",

  periodesH2: "Situer une période : les marqueurs stylistiques",
  periodesP1:
    "Voici la table de synthèse des marqueurs audibles par période. Elle condense le cours 29 (<em>Analyse comparative du répertoire</em> — la même mélodie harmonisée cinq fois) et les cours 20/21 (signatures des compositeurs). <strong>Avertissement méthodologique</strong> : un marqueur est un <strong>indice, pas une preuve</strong>. La basse continue signe le baroque, mais un compositeur du XXe peut pasticher le baroque (cf. cours 41) ; le chromatisme dense existe chez Gesualdo (fin XVIe) comme chez Wagner. C'est la <strong>convergence</strong> de plusieurs marqueurs qui fonde l'hypothèse — et l'on énonce toujours celle-ci avec prudence (« l'ensemble des indices oriente vers… »).",
  periodesCaption: "Marqueurs audibles par période — des indices, jamais des preuves",
  periodesHeaders: ["Période", "Effectif typique", "Texture", "Harmonie / langage", "Formes et gestes", "Indices immédiats"],
  periodesRows: [
    {
      periode: "<strong>Renaissance</strong> (v. 1450-1600)",
      effectif: "Voix <em>a cappella</em> (messe, motet, chanson, madrigal) ; consorts d'instruments",
      texture: "Polyphonie imitative équilibrée, sans hiérarchie de voix",
      harmonie: "<strong>Modal</strong>, consonant ; dissonance strictement réglée (retards) ; cadences modales",
      formes: "Formes liées au texte ; pas de carrure de danse dans le sacré",
      indices: "Voix seules, imitation continue, absence de sensation tonique-dominante franche",
    },
    {
      periode: "<strong>Baroque</strong> (v. 1600-1750)",
      effectif: "<strong>Basse continue</strong> (clavecin, orgue + basse) ; orchestre à cordes, concerto soliste/<em>grosso</em> ; voix + continuo",
      texture: "Polyphonie (fugue) ou mélodie + continuo ; basse très active",
      harmonie: "<strong>Tonal</strong> ; séquences et marches harmoniques ; rythme harmonique souvent rapide et régulier",
      formes: "Fugue, suite de danses, concerto (ritournelle), récitatif/air ; ornementation abondante",
      indices: "<strong>Clavecin audible</strong>, basse obstinée en mouvement, nuances en terrasses, motorique rythmique",
    },
    {
      periode: "<strong>Classique</strong> (v. 1750-1800)",
      effectif: "Orchestre modéré (cordes + bois par 2), quatuor à cordes, piano-forte",
      texture: "<strong>Mélodie accompagnée</strong> dominante (basse d'Alberti)",
      harmonie: "Tonal clair et diatonique ; <strong>cadences fréquentes et très audibles</strong> ; rythme harmonique plutôt lent",
      formes: "<strong>Carrures de 4 + 4</strong>, période antécédent/conséquent, forme sonate, menuet, rondo",
      indices: "Phrasé régulier « question/réponse », clarté, contrastes de thèmes maîtrisés",
    },
    {
      periode: "<strong>Romantique</strong> (XIXe)",
      effectif: "Grand orchestre (cuivres, harpe), piano moderne, lied voix + piano",
      texture: "Mélodie accompagnée enrichie ; textures denses",
      harmonie: "<strong>Chromatisme croissant</strong>, modulations éloignées, appoggiatures expressives",
      formes: "<strong>Grandes phrases</strong> dépassant la carrure, formes cycliques, pièce de caractère, poème symphonique",
      indices: "Souffle lyrique, rubato, grands crescendos, harmonie qui « retarde » la résolution",
    },
    {
      periode: "<strong>Post-romantique / impressionniste</strong> (v. 1880-1920)",
      effectif: "Orchestre très fourni ou piano seul ; timbre traité comme couleur",
      texture: "Nappes, plans sonores superposés",
      harmonie: "<strong>Parallélismes d'accords</strong>, modes, <strong>gamme par tons</strong>, pentatonique, accords enrichis (9es, 11es) non résolus",
      formes: "Formes libres, arche, pièce brève évocatrice (titre-image)",
      indices: "La cadence perd sa force directionnelle ; couleur avant direction ; flou métrique",
    },
    {
      periode: "<strong>XXe / contemporain</strong> (après 1910)",
      effectif: "Effectifs éclatés : percussions, piano percussif, ensembles inédits, électronique",
      texture: "Toutes textures, y compris masses et pointillisme",
      harmonie: "<strong>Atonalité</strong>, clusters, polytonalité, série (cours 44) ; dissonance émancipée",
      formes: "Formes par blocs, collages, œuvres ouvertes ; rythmes irréguliers, mesures changeantes",
      indices: "Absence de tonique perceptible, agrégats, violence ou raréfaction du son",
    },
  ],
  periodesP2:
    "Complément de méthode : quand deux périodes restent en balance (classique ou romantique précoce ? impressionniste ou post-romantique ?), on le <strong>dit</strong> dans le commentaire et l'on donne le critère qui ferait pencher — c'est valorisé, pas pénalisé.",

  formesH2: "Reconnaître les formes à l'oreille",
  formesP1:
    "À l'écrit, on voit la forme sur la partition (cours 17 et 28) ; à l'écoute, la forme s'entend par deux signaux : <strong>ce qui revient</strong> (identique ou varié) et <strong>ce qui contraste</strong> (nouveau thème, nouvelle tonalité, nouvelle texture). Voici les grandes formes ramenées à leurs indices auditifs :",
  formesList: [
    "<strong>Binaire (A-B, souvent avec reprises)</strong> : deux volets ; le premier s'éloigne (arrêt suspensif ou cadence dans un autre ton), le second revient. Indice : la « respiration » médiane, souvent soulignée par une reprise.",
    "<strong>Ternaire (A-B-A)</strong> : un début, un milieu contrastant (ton, caractère, texture), puis le <strong>retour reconnaissable du début</strong>. Indice : sensation de « retour à la maison » après un détour.",
    "<strong>Rondo (A-B-A-C-A…)</strong> : un <strong>refrain</strong> qui revient à l'identique dans le ton principal, entre des couplets contrastants. Indice : plus de deux retours du même thème = probable rondo.",
    "<strong>Thème et variations</strong> : une même carrure harmonique et phraséologique répétée, dont la surface change à chaque tour (ornementation, mode, rythme). Indice : la « longueur de phrase » revient identique alors que l'habillage change.",
    "<strong>Forme sonate</strong> : entendue comme <strong>dramaturgie de la tension</strong> — exposition (deux zones thématiques, la seconde dans un autre ton), développement (instabilité : fragments, modulations rapides, tension), réexposition (retour du début, mais cette fois tout reste dans le ton principal : sensation de résolution). Indice : le retour du thème initial <em>après</em> une zone d'instabilité maximale.",
    "<strong>Fugue</strong> : <strong>entrées successives</strong> du même sujet dans chaque voix, seul indice quasi infaillible ; ensuite alternance d'épisodes et de retours du sujet. Indice : on entend « la même phrase » entrer une voix après l'autre, en s'empilant.",
  ],
  illu1H3: "Illustration 1 — Période antécédent/conséquent (Do majeur, 8 mesures)",
  illu1P:
    "Rondes, un accord par mesure, mesure à 4/4. L'antécédent pose une <strong>question</strong> (demi-cadence), le conséquent y <strong>répond</strong> (cadence parfaite) — même début, deux fins différentes.",
  illu1Chords:
    "Mesures 1-4 : I – IV – I6/4 – <strong>V</strong> (demi-cadence) · Mesures 5-8 : I – IV – <strong>V7</strong> – <strong>I</strong> (cadence parfaite)",
  illu1Ecoute:
    "<strong>À entendre</strong> : mesure 4, la mélodie reste suspendue sur <strong>Ré5</strong> (2e degré) au-dessus de l'accord de Sol — la phrase est ouverte ; mesure 8, elle se pose sur <strong>Do5</strong> (tonique) au-dessus de l'accord de Do — la phrase est close. C'est ce contraste ouvert/fermé qui structure toute la phraséologie classique (cours 17).",
  illu2H3: "Illustration 2 — Mini-rondo (schéma A-B-A-C-A)",
  illu2P1:
    "<strong>Refrain A</strong> (Do majeur, 4 mesures, monodie, noires puis blanches finales) — gravé et joué ci-dessous :",
  illu2P2:
    "<strong>Couplet B</strong> : 4 mesures contrastantes en <strong>Sol majeur</strong> (le Fa♯ apparaît). <strong>Couplet C</strong> : 4 mesures en <strong>La mineur</strong> (le Sol♯ apparaît). Entre chaque couplet, le refrain <strong>revient à l'identique, dans le ton principal</strong> : c'est précisément ce retour littéral que l'oreille doit apprendre à repérer — quand vous entendez ce thème pour la troisième fois, vous savez que vous êtes dans un rondo.",

  harmH2: "Entendre l'harmonie : l'entraînement possible ici",
  harmP1:
    "C'est ici que Harmonia est dans son élément : tout ce qui suit se joue au piano de synthèse à partir des notes exactes gravées ci-dessous. Ces réflexes — cadences, mode, modulation, rythme harmonique, texture — sont le <strong>cœur harmonique</strong> du commentaire d'écoute, et ils s'acquièrent par répétition.",
  cadH3: "Les quatre cadences (rappel du cours 4, en Do majeur, SATB)",
  cadLabels: [
    { nom: "<strong>Parfaite</strong> (conclusive)", accords: "I – IV – V7 – I" },
    { nom: "<strong>Plagale</strong> (« Amen »)", accords: "I – IV – I" },
    { nom: "<strong>Demi-cadence</strong> (suspensive)", accords: "I – IV – <strong>V</strong>" },
    { nom: "<strong>Rompue</strong> (fausse résolution)", accords: "I – V7 – <strong>vi</strong>" },
  ],
  cadEcoute:
    "<strong>À entendre</strong> : la parfaite <strong>ferme la porte</strong> (V7 → I, soprano sur la tonique) ; la plagale ferme en douceur, sans sensible, soprano immobile sur Do ; la demi-cadence <strong>laisse la porte ouverte</strong> (on s'arrête sur V) ; la rompue <strong>promet I et donne vi</strong> — la basse monte Sol→La au lieu de retomber sur Do, et la tierce de vi est doublée (Do au soprano et au ténor), conformément à la règle.",
  modeH3: "Majeur / mineur : même progression, deux modes",
  modeP1:
    "La même marche I–IV–V7–I, en <strong>Do mineur</strong> cette fois (comparer à l'oreille avec la version majeure ci-dessus) :",
  modeP2:
    "Le <strong>Si bécarre</strong> est la sensible du mineur harmonique : la dominante reste majeure. L'oreille doit apprendre à nommer la différence de couleur dès le premier accord (Mi vs Mi♭).",
  modeMajBtn: "Version majeure (I–IV–V7–I)",
  modeMinBtn: "Version mineure (i–iv–V7–i)",
  modulH3: "Modulation : vers la dominante ou vers le relatif ?",
  modulP1:
    "Deux trajets au départ du même Do majeur — le jeu consiste à identifier <strong>quelle note étrangère apparaît</strong>.",
  modulDomTitle:
    "<strong>Vers la dominante (Do → Sol majeur)</strong> — signal : le <strong>Fa♯</strong>. Cinq accords : Do (I) – Fa (IV) – Sol (pivot : V de Do = I de Sol) – Ré7 (V7 de Sol) – Sol (nouvelle tonique).",
  modulRelTitle:
    "<strong>Vers le relatif (Do → La mineur)</strong> — signal : le <strong>Sol♯</strong>. Trois accords : Do (I) – Mi7 (V7 de La mineur) – La mineur (nouvelle tonique).",
  modulEcoute:
    "<strong>À entendre</strong> : vers la dominante, on reste <strong>en majeur</strong>, un ton plus « lumineux » d'un dièse ; vers le relatif, la cadence d'arrivée est <strong>mineure</strong> — même armure, couleur assombrie. Réflexe : « nouvelle sensible entendue = vers où mène-t-elle ? »",
  rythmeH3: "Le rythme harmonique : vite ou lent ?",
  rythmeP1:
    "Progression I – vi – IV – V – I en Do majeur. <strong>Version lente</strong> : un accord par ronde (un changement par mesure). <strong>Version rapide</strong> : la même progression en noires (quatre changements par mesure), jouée deux fois. Le contenu harmonique est identique ; seule change la <strong>vitesse de renouvellement des accords</strong>.",
  rythmeP2:
    "Exercice d'écoute : compter les changements d'accord par mesure — un rythme harmonique rapide et régulier oriente plutôt vers le baroque, un rythme lent avec cadences espacées plutôt vers le style classique (voir les marqueurs stylistiques).",
  rythmeLentBtn: "Version lente",
  rythmeRapideBtn: "Version rapide (jouée deux fois)",
  textureH3: "Entendre un changement de texture",
  textureP1:
    "Un même thème de quatre notes (noires) : <strong>Do5 – Ré5 – Mi5 – Do5</strong>, présenté sous quatre textures :",
  textureLabels: [
    { titre: "Monodie", desc: "le thème seul, sans accompagnement." },
    {
      titre: "Homophonie",
      desc: "le thème harmonisé note contre note en SATB — Do5 (I : Sol4/Mi4/Do3), Ré5 (V : Sol4/Si3/Sol2), Mi5 (I : Sol4/Do4/Do3), Do5 (I : Sol4/Mi4/Do3).",
    },
    {
      titre: "Polyphonie (canon)",
      desc: "voix 1 : m. 1 : Do5–Ré5–Mi5–Do5, m. 2 : Mi5–Fa5–Sol5 (blanche) ; voix 2, entrant une mesure plus tard à l'octave inférieure. (Oui, c'est l'incipit de <em>Frère Jacques</em> — le canon le plus audible qui soit.)",
    },
    {
      titre: "Mélodie accompagnée",
      desc: "le thème en blanches au soprano, basse d'Alberti en croches à la main gauche — sous Do5 et Mi5 : Do3–Sol3–Mi3–Sol3 ; sous Ré5 : Sol2–Ré3–Si2–Ré3.",
    },
  ],
  textureP2:
    "Savoir nommer la texture en une écoute est l'un des gestes les plus rentables de l'épreuve : c'est souvent le premier indice de période.",

  planH2: "Construire le commentaire : plan et vocabulaire",
  planP1:
    "Le livrable — écrit (2 à 4 paragraphes) ou oral (2 à 3 minutes) — suit un plan stable :",
  planSteps: [
    "<strong>Introduction — vue d'ensemble</strong> : effectif, caractère global, tempo, une phrase de cadrage (« Extrait pour piano seul, de caractère méditatif, tempo lent et rubato »). Pas encore d'hypothèse historique.",
    "<strong>Développement — les paramètres, organisés</strong> : forme perçue (sections, retours, carrures), langage et harmonie (tonal/modal/atonal, cadences entendues, modulations, rythme harmonique), texture et son évolution, éléments rythmiques et dynamiques saillants. On <strong>hiérarchise</strong> : d'abord ce qui est décisif pour cet extrait.",
    "<strong>Conclusion — l'hypothèse argumentée</strong> : période et genre probables, énoncés comme un faisceau d'indices (« la mélodie accompagnée, les carrures régulières et les cadences fréquentes orientent vers le style classique ; il pourrait s'agir d'un mouvement lent de sonate »). Un nom de compositeur ne vient — éventuellement — qu'ici, et toujours au conditionnel.",
  ],
  registreBox:
    "<strong>Le registre de vocabulaire</strong> : on écrit « texture homophone », pas « ça sonne plein » ; « cadence suspensive », pas « ça s'arrête bizarrement » ; « rythme harmonique lent », pas « les accords traînent ». Le vocabulaire technique n'est pas un ornement : il est la preuve que vous avez identifié, pas seulement ressenti.",
  piegesBox:
    "<strong>Les pièges classiques</strong> : (1) <strong>deviner le compositeur d'abord</strong> et sélectionner ensuite les indices qui arrangent ; (2) le <strong>catalogue sans hiérarchie</strong> — tout lister au fil de l'eau sans dégager l'essentiel ; (3) <strong>confondre genre et forme</strong> — la « sonate » est un genre (une œuvre pour un ou deux instruments en plusieurs mouvements), la « forme sonate » est le plan d'un mouvement ; un concerto peut contenir une forme sonate ; (4) affirmer sans indice (« c'est du Mozart ») au lieu d'argumenter.",
  modeleH3: "Mini-commentaire modèle (~150 mots)",
  modeleDesc:
    "Extrait décrit : quatuor à cordes ; thème chantant au premier violon sur accompagnement régulier ; phrases de quatre mesures ; arrêt suspensif à mi-parcours, conclusion affirmée ; bref passage central plus instable, puis retour du thème initial.",
  modeleQuote:
    "« L'extrait fait entendre un quatuor à cordes : le premier violon expose un thème cantabile sur un accompagnement homorythmique des trois autres voix — texture de mélodie accompagnée. Le discours est clairement tonal et diatonique : les phrases, en carrures régulières de quatre mesures, forment une période — une demi-cadence suspend la première phrase, une cadence parfaite conclut la seconde. Un passage central module et fragmente le thème, créant une instabilité vite résolue par le retour du thème initial dans le ton principal, ce qui suggère une coupe ternaire, voire une forme sonate abrégée. Le rythme harmonique est posé, les cadences fréquentes et audibles. Ce faisceau d'indices — effectif de quatuor, mélodie accompagnée, carrures, clarté cadentielle — oriente vers le style classique (seconde moitié du XVIIIe siècle) ; il pourrait s'agir d'un mouvement de quatuor de type haydnien. »",

  entrainH2: "Entraînement",
  methodeH3: "La méthode en bref",
  methodeP:
    "1) première écoute, grille complète (la boîte à outils) ; 2) écoutes suivantes, paramètres décisifs ; 3) identifier formes et cadences ; 4) faisceau d'indices → hypothèse de période ; 5) rédiger selon le plan : <strong>décrire → identifier → situer</strong>.",
  exercicesH3: "Exercices 1-2 — Mini-commentaires à rédiger",
  exercices: [
    {
      titre: "Exercice 1 — Mini-commentaire à rédiger (description donnée)",
      description:
        "<em>Description de l'extrait :</em> ensemble de cordes avec clavecin ; une basse en croches régulières avance sans répit ; au-dessus, deux violons dialoguent en imitation ; les accords changent à chaque temps ; nuances par blocs, sans crescendo ; une séquence descendante revient plusieurs fois avant une cadence conclusive.",
      consigne:
        "<em>Consigne :</em> rédigez un commentaire de 120-160 mots selon le plan de la section « Le plan » (description → identification → hypothèse).",
      corrige:
        "« L'extrait associe un ensemble de cordes à un clavecin qui réalise la basse continue, portée par une basse en croches régulières — une marche obstinée typique. La texture est polyphonique : deux violons dialoguent en imitation au-dessus du continuo. Le langage est tonal, le rythme harmonique rapide et régulier (un accord par temps) ; une marche harmonique descendante, répétée en séquence, conduit à une cadence parfaite conclusive. Les nuances procèdent par plans opposés, en terrasses, sans transition progressive. Ce faisceau d'indices — basse continue au clavecin, imitation, séquences, rythme harmonique rapide, nuances en terrasses — oriente nettement vers la période baroque (première moitié du XVIIIe siècle). L'effectif et le dialogue concertant suggèrent un mouvement vif de concerto pour cordes, voire de concerto grosso. »",
    },
    {
      titre: "Exercice 2 — Mini-commentaire à rédiger (description donnée)",
      description:
        "<em>Description de l'extrait :</em> piano seul ; tempo lent et fluctuant ; une mélodie ample à la main droite sur des arpèges larges de la main gauche ; harmonie riche en chromatismes, résolutions retardées, une modulation vers un ton éloigné ; grande montée en intensité puis retombée ; la phrase initiale revient, ornée, à la fin.",
      consigne: "<em>Consigne :</em> même exercice, 120-160 mots.",
      corrige:
        "« Pièce pour piano seul, de caractère lyrique, dans un tempo lent animé de rubato. La texture est celle d'une mélodie accompagnée : un chant ample à la main droite se déploie sur de larges arpèges. Le langage est tonal mais fortement chromatique : appoggiatures expressives, résolutions retardées, et une modulation vers un ton éloigné au centre de l'extrait. Les phrases débordent la carrure régulière et culminent dans un long crescendo avant de retomber ; le retour final de la phrase initiale, ornée, dessine une coupe ternaire A-B-A'. Ce faisceau — piano seul, lyrisme, chromatisme, rubato, forme ternaire de pièce brève — oriente vers le romantisme (XIXe siècle) ; il pourrait s'agir d'une pièce de caractère, de type nocturne. »",
    },
  ],
  voirCorrige: "Voir le corrigé modèle",
  masquerCorrige: "Masquer le corrigé",
  corrigeLabel: "Corrigé modèle",

  drillCadH3: "Exercice 3 — Drill : reconnaître les cadences à l'aveugle",
  drillCadConsigne:
    "Le bouton joue, <strong>sans afficher la partition</strong>, l'une des quatre progressions de la table ci-dessus (parfaite, plagale, demi-cadence, rompue), dans un ordre aléatoire. Pour chacune : 1) fermée ou ouverte ? 2) la basse retombe-t-elle sur la tonique ? 3) nommez la cadence, puis vérifiez. Refaites la série jusqu'à quatre identifications sur quatre. Points de contrôle : la rompue se trahit par la basse Sol→La ; la plagale par l'absence de sensible et le soprano immobile.",
  drillModH3: "Exercice 4a — Drill : dominante ou relatif ?",
  drillModConsigne:
    "Le bouton joue, à l'aveugle, l'un des deux trajets de modulation : dites s'il mène à la <strong>dominante</strong> (arrivée majeure, Fa♯) ou au <strong>relatif mineur</strong> (arrivée mineure, Sol♯) ; recommencez en alternant.",
  drillRytH3: "Exercice 4b — Drill : rythme harmonique lent ou rapide ?",
  drillRytConsigne:
    "Le bouton joue l'une des deux versions de la progression I – vi – IV – V – I : comptez les changements d'accord par mesure et formulez la réponse dans le vocabulaire du commentaire (« rythme harmonique lent : un changement par mesure » / « rapide : quatre par mesure »). Rappel : toutes choses égales par ailleurs, un profil rapide et régulier oriente plutôt vers le baroque, un profil lent vers le style classique.",
  drillPlayBtn: "Jouer un exemple au hasard",
  drillReplayBtn: "Réécouter",
  drillAnswerPrompt: "Votre réponse :",
  drillCorrect: "Exact !",
  drillWrong: "Non — c'était :",
  drillResetBtn: "Remettre le score à zéro",
  cadenceNames: ["Cadence parfaite", "Cadence plagale", "Demi-cadence", "Cadence rompue"],
  modulationNames: ["Vers la dominante (arrivée majeure, Fa♯)", "Vers le relatif mineur (arrivée mineure, Sol♯)"],
  rythmeNames: ["Rythme harmonique lent (un changement par mesure)", "Rythme harmonique rapide (quatre par mesure)"],

  quizH3: "Quiz — 10 questions",
  questions: [
    {
      q: "Vous entendez : basse continue au clavecin, texture polyphonique, motorique rythmique régulière. Période probable ?",
      opts: ["Renaissance", "Baroque", "Classique", "Romantique"],
      a: 1,
      fb: "La basse continue au clavecin est le marqueur baroque par excellence (v. 1600-1750).",
    },
    {
      q: "Vous entendez : mélodie accompagnée, carrures de 4+4, cadences fréquentes et claires, orchestre modéré. Période probable ?",
      opts: ["Baroque", "Classique", "Impressionniste", "XXe"],
      a: 1,
      fb: "Carrure régulière + clarté cadentielle + mélodie accompagnée = faisceau classique typique.",
    },
    {
      q: "Vous entendez : accords parallèles non résolus, gamme par tons, flou métrique, timbre-couleur. Période probable ?",
      opts: ["Renaissance", "Classique", "Impressionniste", "Baroque"],
      a: 2,
      fb: "Parallélismes, modes et gamme par tons sont les marqueurs impressionnistes (Debussy — cours 21).",
    },
    {
      q: "En Do majeur, vous entendez V7 puis un accord de La mineur au lieu du Do attendu. Quelle cadence ?",
      opts: ["Parfaite", "Plagale", "Demi-cadence", "Rompue"],
      a: 3,
      fb: "V7 → vi : la résolution promise est déjouée — cadence rompue (cours 4).",
    },
    {
      q: "La phrase s'interrompt sur l'accord de Sol (V) en Do majeur, sensation de suspension. Quelle cadence ?",
      opts: ["Demi-cadence", "Parfaite", "Rompue", "Plagale"],
      a: 0,
      fb: "S'arrêter sur V laisse la phrase ouverte : demi-cadence, la « virgule » musicale.",
    },
    {
      q: "Enchaînement IV → I, sans sensible, soprano immobile sur la tonique. Quelle cadence ?",
      opts: ["Parfaite", "Plagale", "Rompue", "Demi-cadence"],
      a: 1,
      fb: "IV → I est la cadence plagale, la conclusion « Amen » sans sensible.",
    },
    {
      q: "Un même thème revient une troisième fois à l'identique, dans le ton principal, entre des épisodes contrastants. Forme probable ?",
      opts: ["Forme sonate", "Thème et variations", "Rondo", "Binaire"],
      a: 2,
      fb: "Le retour répété d'un refrain dans le ton principal est la signature du rondo (cours 28).",
    },
    {
      q: "Vous entendez la même phrase mélodique entrer successivement dans chaque voix, en s'empilant. Forme probable ?",
      opts: ["Fugue", "Rondo", "Ternaire", "Variations"],
      a: 0,
      fb: "Les entrées successives du sujet sont l'indice quasi infaillible de la fugue.",
    },
    {
      q: "Quelle formulation appartient au registre attendu du commentaire ?",
      opts: [
        "« Ça sonne plein et riche »",
        "« La texture est homophone et dense »",
        "« C'est joli mais triste »",
        "« On dirait du Chopin, donc c'est romantique »",
      ],
      a: 1,
      fb: "Vocabulaire technique et descriptif ; la dernière option inverse la méthode (identifier avant de décrire).",
    },
    {
      q: "Un extrait vous évoque immédiatement un compositeur précis. Que faites-vous en premier ?",
      opts: [
        "L'écrire aussitôt",
        "Décrire d'abord les paramètres, garder le nom pour la conclusion au conditionnel",
        "Chercher le titre exact",
        "Bâtir la description autour de ce nom",
      ],
      a: 1,
      fb: "Décrire → identifier → situer : l'intuition se vérifie par les indices, jamais l'inverse.",
    },
  ],

  listenBtn: "Écouter",
};

// ════════════════════════════════════════════════════════════════════════════
// EN
// ════════════════════════════════════════════════════════════════════════════

const en: Cours45Locale = {
  maitreConcept: "The listening commentary — describe, identify, situate",
  maitreAnecdote:
    "A professor at the Paris Conservatoire from 1941 to 1978, Olivier Messiaen led an analysis class there that was the century's most famous listening laboratory: everything was analysed there — Gregorian chant, Mozart, Debussy, Hindu rhythms, birdsong — score and ear together. Boulez, Xenakis and Stockhausen passed through it. His discipline: listen first, name precisely next, conclude cautiously last.",
  maitreLesson:
    "The listening-commentary exam assesses a method, not an inner record collection: a hierarchical, well-argued description is always worth more than a composer's name thrown out at random.",

  honneteTitle: "How to work through this course",
  honneteBody:
    "<strong>Harmonia contains no recordings.</strong> For rights reasons, the platform has no sound library: everything you will hear here is played by a <strong>synthesized piano</strong>, from engraved scores. This course therefore gives you two things: the <strong>complete methodology</strong> of the listening commentary (the analysis grid, the stylistic markers, the plan, the vocabulary — the exam's entire intellectual toolkit) and <strong>training in the parameters that can genuinely be practised on a synthesized piano</strong>: cadences, major/minor modes, modulations, harmonic rhythm, textures, forms. On the other hand, identifying <strong>timbres</strong> and <strong>orchestration</strong> in real works cannot be practised here: that belongs to classroom listening and to your personal acquaintance with the repertoire (concerts, radio, streaming). This course is the method and the harmonic gymnasium — not a substitute for listening to the works themselves.",

  introH2: "What is the listening commentary?",
  introP1:
    "The listening commentary is a flagship exam of the French curricula: at university (musicology degree, CAPES/agrégation), at the conservatoire (analysis DEM — see course 26 for the other side of the exam, written harmony) and in many competitions. The principle: you are played an excerpt from a work, <strong>usually unknown to you</strong>, two to four times; you must produce a structured commentary identifying the <strong>forces</strong>, the <strong>texture</strong>, the <strong>language</strong>, the <strong>form</strong>, the <strong>probable genre</strong>, and <strong>situating the work</strong> in a stylistic period — all of it argued from what you actually heard.",
  introP2:
    "What the examiner expects is <strong>not</strong> a catalogue of effects (« there are violins, then it's loud, then there's a flute ») nor a bet on the title. They expect a description that is <strong>hierarchical</strong> (decisive parameters first), <strong>argued</strong> (every claim backed by an audible clue) and <strong>cautious</strong> (a dating hypothesis, not a proclaimed certainty). Hence the course's golden rule, in this order and never the other:",
  regleOr:
    "<strong>Describe → identify → situate.</strong><br/>First describe what you hear (objective parameters), then identify its technical elements (cadences, form, language), and finally propose an argued historical placement. <strong>Never the reverse</strong>: guessing a title or a composer straight away, then bending the description to fit, is the most heavily penalised methodological error — and the most frequent.",
  introP3:
    "A well-described but cautiously situated excerpt is always worth more than a name that happens to be right by luck: the exam assesses a <strong>method</strong>, not an inner record collection.",

  grilleH2: "The toolbox: what should you listen for?",
  grilleP1:
    "Before any technique, you need a <strong>grid of parameters</strong>: the mental checklist you run through from the very first hearing. Here it is — THE reference table of this course, to be known by heart. On the first hearing you sweep everything; on later hearings you deepen the parameters that are decisive for the given excerpt.",
  grilleCaption: "The grid of listening parameters — to be known by heart",
  grilleHeaders: ["Parameter", "Questions to ask yourself", "Key vocabulary"],
  grilleRows: [
    {
      param: "<strong>Forces / timbre</strong>",
      questions: "Voices or instruments? How many? Families (strings, winds, keyboards)? Soloist + accompaniment?",
      vocab: "symphony orchestra, chamber ensemble, <em>a cappella</em>, basso continuo, mixed forces",
    },
    {
      param: "<strong>Texture</strong>",
      questions: "A single line? All voices together? Independent lines? One dominating melody?",
      vocab: "<strong>monody</strong>, <strong>homophony</strong> (homorhythm), <strong>polyphony / counterpoint</strong> (imitation), <strong>accompanied melody</strong>",
    },
    {
      param: "<strong>Language</strong>",
      questions: "Do you feel a tonic? Is the language modal, tonal, atonal? Consonant or dissonant?",
      vocab: "modal, tonal (major/minor), chromatic, atonal; consonance, dissonance, cluster",
    },
    {
      param: "<strong>Harmony</strong>",
      questions: "Do you hear cadences? Do the chords change quickly or slowly? Are there modulations?",
      vocab: "perfect / plagal / deceptive / half cadence (course 4), <strong>harmonic rhythm</strong>, modulation",
    },
    {
      param: "<strong>Form</strong>",
      questions: "Regular phrases? Sections that return? Contrasts?",
      vocab: "phrase structure, period, refrain/episode, repeat, A-B-A, development (courses 17 and 28)",
    },
    {
      param: "<strong>Rhythm / tempo / metre</strong>",
      questions: "Duple or triple? Steady or fluctuating tempo? Dance-like pulse?",
      vocab: "metre in 2, 3, 4 beats; rubato; ostinato; syncopation; dance character",
    },
    {
      param: "<strong>Dynamics / articulation</strong>",
      questions: "Terraced or gradual dynamics? Legato, staccato? Long crescendos?",
      vocab: "terraced dynamics, crescendo/decrescendo, accents, dynamic contrasts",
    },
    {
      param: "<strong>Text (if any)</strong>",
      questions: "Language? Sacred or secular? Music-text relationship (syllabic, melismatic)?",
      vocab: "liturgical, madrigalism, syllabic, melismatic, recitative / aria",
    },
  ],
  grilleP2:
    "Two pieces of practical advice. First, <strong>prioritise</strong>: not all parameters speak equally for a given excerpt — a keyboard fugue is decided on texture and form, a lied on text and harmony. Second, <strong>cross-check</strong>: it is the <strong>converging bundle of clues</strong> that warrants a period hypothesis (next section), never a single isolated clue.",

  periodesH2: "Situating a period: the stylistic markers",
  periodesP1:
    "Here is the synthesis table of audible markers by period. It condenses course 29 (<em>Comparative repertoire analysis</em> — the same melody harmonised five ways) and courses 20/21 (composers' signatures). <strong>Methodological warning</strong>: a marker is a <strong>clue, not a proof</strong>. Basso continuo signals the Baroque, but a 20th-century composer can pastiche the Baroque (cf. course 41); dense chromaticism exists in Gesualdo (late 16th century) as in Wagner. It is the <strong>convergence</strong> of several markers that grounds the hypothesis — and it is always stated cautiously (« the body of clues points towards… »).",
  periodesCaption: "Audible markers by period — clues, never proofs",
  periodesHeaders: ["Period", "Typical forces", "Texture", "Harmony / language", "Forms and gestures", "Immediate clues"],
  periodesRows: [
    {
      periode: "<strong>Renaissance</strong> (c. 1450-1600)",
      effectif: "<em>A cappella</em> voices (mass, motet, chanson, madrigal); instrumental consorts",
      texture: "Balanced imitative polyphony, no hierarchy of voices",
      harmonie: "<strong>Modal</strong>, consonant; strictly regulated dissonance (suspensions); modal cadences",
      formes: "Text-bound forms; no dance-like squareness in sacred music",
      indices: "Voices alone, continuous imitation, no clear tonic-dominant feeling",
    },
    {
      periode: "<strong>Baroque</strong> (c. 1600-1750)",
      effectif: "<strong>Basso continuo</strong> (harpsichord, organ + bass); string orchestra, solo/<em>grosso</em> concerto; voice + continuo",
      texture: "Polyphony (fugue) or melody + continuo; very active bass",
      harmonie: "<strong>Tonal</strong>; sequences and harmonic progressions; harmonic rhythm often fast and regular",
      formes: "Fugue, dance suite, concerto (ritornello), recitative/aria; abundant ornamentation",
      indices: "<strong>Audible harpsichord</strong>, relentless driving bass, terraced dynamics, rhythmic motor",
    },
    {
      periode: "<strong>Classical</strong> (c. 1750-1800)",
      effectif: "Moderate orchestra (strings + winds in pairs), string quartet, fortepiano",
      texture: "Dominant <strong>accompanied melody</strong> (Alberti bass)",
      harmonie: "Clear diatonic tonality; <strong>frequent, highly audible cadences</strong>; rather slow harmonic rhythm",
      formes: "<strong>4 + 4 phrase structure</strong>, antecedent/consequent period, sonata form, minuet, rondo",
      indices: "Regular « question/answer » phrasing, clarity, controlled thematic contrasts",
    },
    {
      periode: "<strong>Romantic</strong> (19th c.)",
      effectif: "Large orchestra (brass, harp), modern piano, lied for voice + piano",
      texture: "Enriched accompanied melody; dense textures",
      harmonie: "<strong>Growing chromaticism</strong>, remote modulations, expressive appoggiaturas",
      formes: "<strong>Long phrases</strong> overflowing the square structure, cyclic forms, character piece, symphonic poem",
      indices: "Lyrical breadth, rubato, long crescendos, harmony that « delays » resolution",
    },
    {
      periode: "<strong>Post-Romantic / Impressionist</strong> (c. 1880-1920)",
      effectif: "Very large orchestra or solo piano; timbre treated as colour",
      texture: "Washes of sound, superimposed sound planes",
      harmonie: "<strong>Parallel chords</strong>, modes, <strong>whole-tone scale</strong>, pentatonic, unresolved extended chords (9ths, 11ths)",
      formes: "Free forms, arch, short evocative piece (image-title)",
      indices: "The cadence loses its directional force; colour before direction; metrical blur",
    },
    {
      periode: "<strong>20th c. / contemporary</strong> (after 1910)",
      effectif: "Exploded forces: percussion, percussive piano, novel ensembles, electronics",
      texture: "All textures, including masses and pointillism",
      harmonie: "<strong>Atonality</strong>, clusters, polytonality, series (course 44); emancipated dissonance",
      formes: "Block forms, collages, open works; irregular rhythms, changing metres",
      indices: "No perceptible tonic, aggregates, violence or rarefaction of sound",
    },
  ],
  periodesP2:
    "A methodological complement: when two periods remain in the balance (Classical or early Romantic? Impressionist or post-Romantic?), <strong>say so</strong> in the commentary and give the criterion that would tip the scale — this is rewarded, not penalised.",

  formesH2: "Recognising forms by ear",
  formesP1:
    "On paper, you see the form in the score (courses 17 and 28); by ear, form is heard through two signals: <strong>what returns</strong> (identical or varied) and <strong>what contrasts</strong> (new theme, new key, new texture). Here are the major forms reduced to their aural clues:",
  formesList: [
    "<strong>Binary (A-B, often with repeats)</strong>: two halves; the first moves away (suspensive stop or cadence in another key), the second returns. Clue: the central « breath », often underlined by a repeat.",
    "<strong>Ternary (A-B-A)</strong>: a beginning, a contrasting middle (key, character, texture), then the <strong>recognisable return of the opening</strong>. Clue: the feeling of « coming home » after a detour.",
    "<strong>Rondo (A-B-A-C-A…)</strong>: a <strong>refrain</strong> that returns identically in the main key, between contrasting episodes. Clue: more than two returns of the same theme = probable rondo.",
    "<strong>Theme and variations</strong>: the same harmonic and phrase framework repeated, whose surface changes with each round (ornamentation, mode, rhythm). Clue: the « phrase length » returns identical while the clothing changes.",
    "<strong>Sonata form</strong>: heard as a <strong>dramaturgy of tension</strong> — exposition (two thematic areas, the second in another key), development (instability: fragments, fast modulations, tension), recapitulation (return of the opening, but this time everything stays in the main key: feeling of resolution). Clue: the return of the opening theme <em>after</em> a zone of maximal instability.",
    "<strong>Fugue</strong>: <strong>successive entries</strong> of the same subject in each voice, the only near-infallible clue; then alternation of episodes and subject returns. Clue: you hear « the same phrase » enter one voice after another, piling up.",
  ],
  illu1H3: "Illustration 1 — Antecedent/consequent period (C major, 8 bars)",
  illu1P:
    "Whole notes, one chord per bar, 4/4 time. The antecedent asks a <strong>question</strong> (half cadence), the consequent <strong>answers</strong> it (perfect cadence) — same beginning, two different endings.",
  illu1Chords:
    "Bars 1-4: I – IV – I6/4 – <strong>V</strong> (half cadence) · Bars 5-8: I – IV – <strong>V7</strong> – <strong>I</strong> (perfect cadence)",
  illu1Ecoute:
    "<strong>What to hear</strong>: in bar 4, the melody hangs suspended on <strong>Ré5</strong> (2nd degree) above the Sol chord — the phrase is open; in bar 8, it settles on <strong>Do5</strong> (tonic) above the Do chord — the phrase is closed. This open/closed contrast structures all Classical phraseology (course 17).",
  illu2H3: "Illustration 2 — Mini-rondo (A-B-A-C-A scheme)",
  illu2P1:
    "<strong>Refrain A</strong> (C major, 4 bars, monody, quarter notes then final half notes) — engraved and played below:",
  illu2P2:
    "<strong>Episode B</strong>: 4 contrasting bars in <strong>G major</strong> (Fa♯ appears). <strong>Episode C</strong>: 4 bars in <strong>A minor</strong> (Sol♯ appears). Between episodes, the refrain <strong>returns identically, in the main key</strong>: it is precisely this literal return that the ear must learn to spot — when you hear this theme for the third time, you know you are in a rondo.",

  harmH2: "Hearing harmony: the training possible here",
  harmP1:
    "This is where Harmonia is in its element: everything that follows is played on the synthesized piano from the exact notes engraved below. These reflexes — cadences, mode, modulation, harmonic rhythm, texture — are the <strong>harmonic core</strong> of the listening commentary, and they are acquired through repetition.",
  cadH3: "The four cadences (recap of course 4, in C major, SATB)",
  cadLabels: [
    { nom: "<strong>Perfect</strong> (conclusive)", accords: "I – IV – V7 – I" },
    { nom: "<strong>Plagal</strong> (« Amen »)", accords: "I – IV – I" },
    { nom: "<strong>Half cadence</strong> (suspensive)", accords: "I – IV – <strong>V</strong>" },
    { nom: "<strong>Deceptive</strong> (false resolution)", accords: "I – V7 – <strong>vi</strong>" },
  ],
  cadEcoute:
    "<strong>What to hear</strong>: the perfect cadence <strong>closes the door</strong> (V7 → I, soprano on the tonic); the plagal closes gently, with no leading tone, soprano motionless on Do; the half cadence <strong>leaves the door open</strong> (we stop on V); the deceptive one <strong>promises I and gives vi</strong> — the bass rises Sol→La instead of falling back to Do, and the third of vi is doubled (Do in soprano and tenor), as the rule requires.",
  modeH3: "Major / minor: same progression, two modes",
  modeP1:
    "The same I–IV–V7–I progression, this time in <strong>C minor</strong> (compare by ear with the major version above):",
  modeP2:
    "The <strong>Si natural</strong> is the leading tone of the harmonic minor: the dominant remains major. The ear must learn to name the difference of colour from the very first chord (Mi vs Mi♭).",
  modeMajBtn: "Major version (I–IV–V7–I)",
  modeMinBtn: "Minor version (i–iv–V7–i)",
  modulH3: "Modulation: towards the dominant or towards the relative?",
  modulP1:
    "Two journeys departing from the same C major — the game is to identify <strong>which foreign note appears</strong>.",
  modulDomTitle:
    "<strong>Towards the dominant (Do → Sol major)</strong> — signal: the <strong>Fa♯</strong>. Five chords: Do (I) – Fa (IV) – Sol (pivot: V of Do = I of Sol) – Ré7 (V7 of Sol) – Sol (new tonic).",
  modulRelTitle:
    "<strong>Towards the relative (Do → La minor)</strong> — signal: the <strong>Sol♯</strong>. Three chords: Do (I) – Mi7 (V7 of La minor) – La minor (new tonic).",
  modulEcoute:
    "<strong>What to hear</strong>: towards the dominant, we stay <strong>in major</strong>, one sharp « brighter »; towards the relative, the arrival cadence is <strong>minor</strong> — same key signature, darkened colour. Reflex: « new leading tone heard = where does it lead? »",
  rythmeH3: "Harmonic rhythm: fast or slow?",
  rythmeP1:
    "Progression I – vi – IV – V – I in C major. <strong>Slow version</strong>: one chord per whole note (one change per bar). <strong>Fast version</strong>: the same progression in quarter notes (four changes per bar), played twice. The harmonic content is identical; only the <strong>rate of chord renewal</strong> changes.",
  rythmeP2:
    "Listening exercise: count the chord changes per bar — a fast, regular harmonic rhythm points rather to the Baroque, a slow one with spaced-out cadences rather to the Classical style (see the stylistic markers).",
  rythmeLentBtn: "Slow version",
  rythmeRapideBtn: "Fast version (played twice)",
  textureH3: "Hearing a change of texture",
  textureP1:
    "One four-note theme (quarter notes): <strong>Do5 – Ré5 – Mi5 – Do5</strong>, presented in four textures:",
  textureLabels: [
    { titre: "Monody", desc: "the theme alone, without accompaniment." },
    {
      titre: "Homophony",
      desc: "the theme harmonised note against note in SATB — Do5 (I: Sol4/Mi4/Do3), Ré5 (V: Sol4/Si3/Sol2), Mi5 (I: Sol4/Do4/Do3), Do5 (I: Sol4/Mi4/Do3).",
    },
    {
      titre: "Polyphony (canon)",
      desc: "voice 1: bar 1: Do5–Ré5–Mi5–Do5, bar 2: Mi5–Fa5–Sol5 (half note); voice 2 entering one bar later at the lower octave. (Yes, it is the incipit of <em>Frère Jacques</em> — the most audible canon there is.)",
    },
    {
      titre: "Accompanied melody",
      desc: "the theme in half notes in the soprano, Alberti bass in eighth notes in the left hand — under Do5 and Mi5: Do3–Sol3–Mi3–Sol3; under Ré5: Sol2–Ré3–Si2–Ré3.",
    },
  ],
  textureP2:
    "Being able to name the texture in one hearing is one of the most profitable gestures of the exam: it is often the first clue to the period.",

  planH2: "Building the commentary: plan and vocabulary",
  planP1:
    "The deliverable — written (2 to 4 paragraphs) or oral (2 to 3 minutes) — follows a stable plan:",
  planSteps: [
    "<strong>Introduction — overview</strong>: forces, overall character, tempo, one framing sentence (« Excerpt for solo piano, meditative in character, slow tempo with rubato »). No historical hypothesis yet.",
    "<strong>Development — the parameters, organised</strong>: perceived form (sections, returns, phrase structure), language and harmony (tonal/modal/atonal, cadences heard, modulations, harmonic rhythm), texture and its evolution, salient rhythmic and dynamic elements. You <strong>prioritise</strong>: first what is decisive for this excerpt.",
    "<strong>Conclusion — the argued hypothesis</strong>: probable period and genre, stated as a bundle of clues (« the accompanied melody, the regular phrase structure and the frequent cadences point towards the Classical style; this could be a slow movement of a sonata »). A composer's name comes — if at all — only here, and always in the conditional.",
  ],
  registreBox:
    "<strong>The register of vocabulary</strong>: write « homophonic texture », not « it sounds full »; « suspensive cadence », not « it stops weirdly »; « slow harmonic rhythm », not « the chords drag ». Technical vocabulary is not an ornament: it is the proof that you have identified, not merely felt.",
  piegesBox:
    "<strong>The classic traps</strong>: (1) <strong>guessing the composer first</strong> and then selecting the convenient clues; (2) the <strong>catalogue without hierarchy</strong> — listing everything as it comes without extracting the essential; (3) <strong>confusing genre and form</strong> — the « sonata » is a genre (a work for one or two instruments in several movements), « sonata form » is the plan of a movement; a concerto can contain a sonata form; (4) asserting without a clue (« it's Mozart ») instead of arguing.",
  modeleH3: "Model mini-commentary (~150 words)",
  modeleDesc:
    "Excerpt described: string quartet; singing theme in the first violin over a regular accompaniment; four-bar phrases; suspensive stop halfway, affirmed conclusion; brief, more unstable central passage, then return of the opening theme.",
  modeleQuote:
    "« The excerpt presents a string quartet: the first violin states a cantabile theme over a homorhythmic accompaniment in the three other voices — an accompanied-melody texture. The discourse is clearly tonal and diatonic: the phrases, in regular four-bar units, form a period — a half cadence suspends the first phrase, a perfect cadence concludes the second. A central passage modulates and fragments the theme, creating an instability quickly resolved by the return of the opening theme in the main key, suggesting a ternary design, or even an abridged sonata form. The harmonic rhythm is steady, the cadences frequent and audible. This bundle of clues — quartet forces, accompanied melody, regular phrase structure, cadential clarity — points towards the Classical style (second half of the 18th century); this could be a quartet movement of Haydnesque type. »",

  entrainH2: "Practice",
  methodeH3: "The method in brief",
  methodeP:
    "1) first hearing, full grid (the toolbox); 2) later hearings, decisive parameters; 3) identify forms and cadences; 4) bundle of clues → period hypothesis; 5) write according to the plan: <strong>describe → identify → situate</strong>.",
  exercicesH3: "Exercises 1-2 — Mini-commentaries to write",
  exercices: [
    {
      titre: "Exercise 1 — Mini-commentary to write (description given)",
      description:
        "<em>Description of the excerpt:</em> string ensemble with harpsichord; a bass in steady eighth notes drives forward relentlessly; above it, two violins dialogue in imitation; the chords change on every beat; block dynamics, no crescendo; a descending sequence returns several times before a conclusive cadence.",
      consigne:
        "<em>Task:</em> write a commentary of 120-160 words following the plan of the « The plan » section (description → identification → hypothesis).",
      corrige:
        "« The excerpt combines a string ensemble with a harpsichord realising the basso continuo, carried by a bass in steady eighth notes — a typically relentless drive. The texture is polyphonic: two violins dialogue in imitation above the continuo. The language is tonal, the harmonic rhythm fast and regular (one chord per beat); a descending harmonic sequence, repeated, leads to a conclusive perfect cadence. The dynamics proceed by opposed planes, in terraces, without gradual transition. This bundle of clues — basso continuo with harpsichord, imitation, sequences, fast harmonic rhythm, terraced dynamics — points clearly to the Baroque period (first half of the 18th century). The forces and the concertante dialogue suggest a fast movement of a string concerto, or even a concerto grosso. »",
    },
    {
      titre: "Exercise 2 — Mini-commentary to write (description given)",
      description:
        "<em>Description of the excerpt:</em> solo piano; slow, fluctuating tempo; an ample melody in the right hand over wide left-hand arpeggios; harmony rich in chromaticism, delayed resolutions, a modulation to a remote key; a great rise in intensity then a subsiding; the opening phrase returns, ornamented, at the end.",
      consigne: "<em>Task:</em> same exercise, 120-160 words.",
      corrige:
        "« A piece for solo piano, lyrical in character, in a slow tempo animated by rubato. The texture is that of an accompanied melody: an ample song in the right hand unfolds over wide arpeggios. The language is tonal but strongly chromatic: expressive appoggiaturas, delayed resolutions, and a modulation to a remote key at the centre of the excerpt. The phrases overflow the regular structure and culminate in a long crescendo before subsiding; the final return of the opening phrase, ornamented, outlines a ternary A-B-A' design. This bundle — solo piano, lyricism, chromaticism, rubato, ternary form of a short piece — points to Romanticism (19th century); this could be a character piece, of nocturne type. »",
    },
  ],
  voirCorrige: "See the model answer",
  masquerCorrige: "Hide the model answer",
  corrigeLabel: "Model answer",

  drillCadH3: "Exercise 3 — Drill: recognising cadences blind",
  drillCadConsigne:
    "The button plays, <strong>without showing the score</strong>, one of the four progressions from the table above (perfect, plagal, half, deceptive), in random order. For each one: 1) closed or open? 2) does the bass fall back onto the tonic? 3) name the cadence, then check. Repeat the series until you get four out of four. Checkpoints: the deceptive cadence betrays itself by the bass Sol→La; the plagal by the absence of a leading tone and the motionless soprano.",
  drillModH3: "Exercise 4a — Drill: dominant or relative?",
  drillModConsigne:
    "The button plays, blind, one of the two modulation journeys: say whether it leads to the <strong>dominant</strong> (major arrival, Fa♯) or to the <strong>relative minor</strong> (minor arrival, Sol♯); repeat, alternating.",
  drillRytH3: "Exercise 4b — Drill: slow or fast harmonic rhythm?",
  drillRytConsigne:
    "The button plays one of the two versions of the I – vi – IV – V – I progression: count the chord changes per bar and phrase your answer in commentary vocabulary (« slow harmonic rhythm: one change per bar » / « fast: four per bar »). Reminder: all else being equal, a fast, regular profile points rather to the Baroque, a slow profile to the Classical style.",
  drillPlayBtn: "Play a random example",
  drillReplayBtn: "Play again",
  drillAnswerPrompt: "Your answer:",
  drillCorrect: "Correct!",
  drillWrong: "No — it was:",
  drillResetBtn: "Reset the score",
  cadenceNames: ["Perfect cadence", "Plagal cadence", "Half cadence", "Deceptive cadence"],
  modulationNames: ["Towards the dominant (major arrival, Fa♯)", "Towards the relative minor (minor arrival, Sol♯)"],
  rythmeNames: ["Slow harmonic rhythm (one change per bar)", "Fast harmonic rhythm (four per bar)"],

  quizH3: "Quiz — 10 questions",
  questions: [
    {
      q: "You hear: basso continuo with harpsichord, polyphonic texture, steady rhythmic motor. Probable period?",
      opts: ["Renaissance", "Baroque", "Classical", "Romantic"],
      a: 1,
      fb: "Basso continuo with harpsichord is the Baroque marker par excellence (c. 1600-1750).",
    },
    {
      q: "You hear: accompanied melody, 4+4 phrase structure, frequent and clear cadences, moderate orchestra. Probable period?",
      opts: ["Baroque", "Classical", "Impressionist", "20th century"],
      a: 1,
      fb: "Regular phrase structure + cadential clarity + accompanied melody = the typical Classical bundle.",
    },
    {
      q: "You hear: unresolved parallel chords, whole-tone scale, metrical blur, timbre as colour. Probable period?",
      opts: ["Renaissance", "Classical", "Impressionist", "Baroque"],
      a: 2,
      fb: "Parallelisms, modes and the whole-tone scale are the Impressionist markers (Debussy — course 21).",
    },
    {
      q: "In C major, you hear V7 then an A-minor chord instead of the expected Do. Which cadence?",
      opts: ["Perfect", "Plagal", "Half cadence", "Deceptive"],
      a: 3,
      fb: "V7 → vi: the promised resolution is thwarted — deceptive cadence (course 4).",
    },
    {
      q: "The phrase stops on the Sol chord (V) in C major, with a feeling of suspension. Which cadence?",
      opts: ["Half cadence", "Perfect", "Deceptive", "Plagal"],
      a: 0,
      fb: "Stopping on V leaves the phrase open: half cadence, the musical « comma ».",
    },
    {
      q: "Progression IV → I, no leading tone, soprano motionless on the tonic. Which cadence?",
      opts: ["Perfect", "Plagal", "Deceptive", "Half cadence"],
      a: 1,
      fb: "IV → I is the plagal cadence, the « Amen » conclusion without a leading tone.",
    },
    {
      q: "The same theme returns for a third time, identically, in the main key, between contrasting episodes. Probable form?",
      opts: ["Sonata form", "Theme and variations", "Rondo", "Binary"],
      a: 2,
      fb: "The repeated return of a refrain in the main key is the signature of the rondo (course 28).",
    },
    {
      q: "You hear the same melodic phrase enter successively in each voice, piling up. Probable form?",
      opts: ["Fugue", "Rondo", "Ternary", "Variations"],
      a: 0,
      fb: "The successive entries of the subject are the near-infallible clue of the fugue.",
    },
    {
      q: "Which formulation belongs to the expected register of the commentary?",
      opts: [
        "« It sounds full and rich »",
        "« The texture is homophonic and dense »",
        "« It's pretty but sad »",
        "« It sounds like Chopin, so it's Romantic »",
      ],
      a: 1,
      fb: "Technical, descriptive vocabulary; the last option inverts the method (identifying before describing).",
    },
    {
      q: "An excerpt immediately reminds you of a specific composer. What do you do first?",
      opts: [
        "Write it down at once",
        "Describe the parameters first, keep the name for the conclusion in the conditional",
        "Look for the exact title",
        "Build the description around that name",
      ],
      a: 1,
      fb: "Describe → identify → situate: intuition is verified by the clues, never the other way round.",
    },
  ],

  listenBtn: "Listen",
};

// ════════════════════════════════════════════════════════════════════════════
// DE
// ════════════════════════════════════════════════════════════════════════════

const de: Cours45Locale = {
  maitreConcept: "Die Höranalyse — beschreiben, bestimmen, einordnen",
  maitreAnecdote:
    "Als Professor am Pariser Conservatoire (1941–1978) leitete Olivier Messiaen eine Analyseklasse, die zum berühmtesten Hörlabor des Jahrhunderts wurde: Dort wurde alles analysiert — Gregorianik, Mozart, Debussy, hinduistische Rhythmen, Vogelgesänge — Partitur und Ohr gemeinsam. Boulez, Xenakis und Stockhausen gingen dort ein und aus. Seine Disziplin: zuerst hören, dann präzise benennen, zuletzt vorsichtig schließen.",
  maitreLesson:
    "Die Höranalyse-Prüfung bewertet eine Methode, keine innere Plattensammlung: Eine hierarchisch geordnete, begründete Beschreibung ist immer mehr wert als ein aufs Geratewohl geworfener Komponistenname.",

  honneteTitle: "Wie Sie diesen Kurs bearbeiten",
  honneteBody:
    "<strong>Harmonia enthält keine Aufnahmen.</strong> Aus rechtlichen Gründen verfügt die Plattform über keine Phonothek: Alles, was Sie hier hören, spielt ein <strong>Synthesizer-Klavier</strong> nach gravierten Partituren. Dieser Kurs gibt Ihnen daher zwei Dinge: die <strong>vollständige Methodik</strong> der Höranalyse (das Parameterraster, die Stilmarker, den Aufbau, das Vokabular — das gesamte intellektuelle Werkzeug der Prüfung) und das <strong>Training der Parameter, die sich am Synthesizer-Klavier wirklich üben lassen</strong>: Kadenzen, Dur/Moll, Modulationen, harmonisches Tempo, Satzarten, Formen. Das Erkennen von <strong>Klangfarben</strong> und <strong>Orchestrierung</strong> an realen Werken lässt sich hier hingegen nicht üben: Es gehört in den Unterricht und zu Ihrer persönlichen Vertrautheit mit dem Repertoire (Konzerte, Radio, Streaming). Dieser Kurs ist die Methode und das harmonische Trainingsstudio — kein Ersatz für das Hören der Werke selbst.",

  introH2: "Was ist die Höranalyse?",
  introP1:
    "Die Höranalyse ist eine Königsprüfung der französischen Ausbildungsgänge: an der Universität (Musikwissenschafts-Studium, CAPES/Agrégation), am Konservatorium (Analyse-DEM — siehe Kurs 26 für die andere Seite der Prüfung, den Tonsatz) und in vielen Wettbewerben. Das Prinzip: Man spielt Ihnen einen Ausschnitt aus einem Werk vor, <strong>meist unbekannt</strong>, zwei- bis viermal; Sie müssen einen strukturierten Kommentar verfassen, der <strong>Besetzung</strong>, <strong>Satzart</strong>, <strong>Tonsprache</strong>, <strong>Form</strong> und <strong>wahrscheinliche Gattung</strong> bestimmt und das Werk <strong>stilistisch einordnet</strong> — alles begründet durch das, was Sie wirklich gehört haben.",
  introP2:
    "Der Korrektor erwartet <strong>keinen</strong> Effektkatalog (« da sind Geigen, dann ist es laut, dann kommt eine Flöte ») und keine Wette auf den Titel. Er erwartet eine Beschreibung, die <strong>hierarchisch geordnet</strong> (die entscheidenden Parameter zuerst), <strong>begründet</strong> (jede Behauptung durch ein hörbares Indiz gestützt) und <strong>vorsichtig</strong> ist (eine Datierungshypothese, keine verkündete Gewissheit). Daher die goldene Regel des Kurses, in dieser Reihenfolge und niemals umgekehrt:",
  regleOr:
    "<strong>Beschreiben → bestimmen → einordnen.</strong><br/>Man beschreibt zuerst, was man hört (objektive Parameter), bestimmt dann die technischen Elemente (Kadenzen, Form, Tonsprache) und schlägt zuletzt eine begründete historische Einordnung vor. <strong>Niemals umgekehrt</strong>: sofort einen Titel oder Komponisten zu raten und die Beschreibung dann passend zu biegen, ist der am härtesten sanktionierte Methodenfehler — und der häufigste.",
  introP3:
    "Ein gut beschriebener, aber vorsichtig eingeordneter Ausschnitt ist immer mehr wert als ein zufällig richtiger Name: Die Prüfung bewertet eine <strong>Vorgehensweise</strong>, keine innere Plattensammlung.",

  grilleH2: "Der Werkzeugkasten: Worauf ist zu hören?",
  grilleP1:
    "Vor aller Technik braucht es ein <strong>Parameterraster</strong>: die mentale Checkliste, die man vom ersten Hören an durchgeht. Hier ist sie — DIE Referenztabelle des Kurses, auswendig zu können. Beim ersten Hören überfliegt man alles; bei den folgenden vertieft man die für den Ausschnitt entscheidenden Parameter.",
  grilleCaption: "Das Raster der Hörparameter — auswendig zu können",
  grilleHeaders: ["Parameter", "Fragen an sich selbst", "Schlüsselvokabular"],
  grilleRows: [
    {
      param: "<strong>Besetzung / Klangfarbe</strong>",
      questions: "Stimmen oder Instrumente? Wie viele? Familien (Streicher, Bläser, Tasten)? Solist + Begleitung?",
      vocab: "Sinfonieorchester, Kammerbesetzung, <em>a cappella</em>, Basso continuo, gemischte Besetzung",
    },
    {
      param: "<strong>Satzart</strong>",
      questions: "Eine einzige Linie? Alle Stimmen zusammen? Unabhängige Linien? Eine dominierende Melodie?",
      vocab: "<strong>Monodie</strong>, <strong>Homophonie</strong> (Homorhythmie), <strong>Polyphonie / Kontrapunkt</strong> (Imitation), <strong>begleitete Melodie</strong>",
    },
    {
      param: "<strong>Tonsprache</strong>",
      questions: "Spürt man eine Tonika? Ist die Sprache modal, tonal, atonal? Konsonant oder dissonant?",
      vocab: "modal, tonal (Dur/Moll), chromatisch, atonal; Konsonanz, Dissonanz, Cluster",
    },
    {
      param: "<strong>Harmonik</strong>",
      questions: "Hört man Kadenzen? Wechseln die Akkorde schnell oder langsam? Gibt es Modulationen?",
      vocab: "authentische / plagale / Trugschluss- / Halbkadenz (Kurs 4), <strong>harmonisches Tempo</strong>, Modulation",
    },
    {
      param: "<strong>Form</strong>",
      questions: "Regelmäßige Phrasen? Wiederkehrende Abschnitte? Kontraste?",
      vocab: "Periodik (carrure), Periode, Refrain/Couplet, Wiederholung, A-B-A, Durchführung (Kurse 17 und 28)",
    },
    {
      param: "<strong>Rhythmus / Tempo / Metrum</strong>",
      questions: "Gerade oder ungerade? Stabiles oder schwankendes Tempo? Tänzerischer Puls?",
      vocab: "2er-, 3er-, 4er-Takt; Rubato; Ostinato; Synkope; Tanzcharakter",
    },
    {
      param: "<strong>Dynamik / Artikulation</strong>",
      questions: "Terrassen- oder Übergangsdynamik? Legato, Staccato? Große Crescendi?",
      vocab: "Terrassendynamik, Crescendo/Decrescendo, Akzente, dynamische Kontraste",
    },
    {
      param: "<strong>Text (falls vorhanden)</strong>",
      questions: "Sprache? Geistlich oder weltlich? Musik-Text-Verhältnis (syllabisch, melismatisch)?",
      vocab: "liturgisch, Madrigalismus, syllabisch, melismatisch, Rezitativ / Arie",
    },
  ],
  grilleP2:
    "Zwei praktische Ratschläge. Erstens <strong>hierarchisieren</strong>: Nicht alle Parameter sind für einen gegebenen Ausschnitt gleich aussagekräftig — eine Klavierfuge entscheidet sich an Satzart und Form, ein Lied an Text und Harmonik. Zweitens <strong>kreuzen</strong>: Erst das <strong>konvergierende Indizienbündel</strong> erlaubt eine Epochenhypothese (nächster Abschnitt), niemals ein isoliertes Indiz.",

  periodesH2: "Eine Epoche einordnen: die Stilmarker",
  periodesP1:
    "Hier die Synthesetabelle der hörbaren Marker je Epoche. Sie verdichtet Kurs 29 (<em>Vergleichende Repertoireanalyse</em> — dieselbe Melodie fünfmal harmonisiert) und die Kurse 20/21 (Komponistensignaturen). <strong>Methodische Warnung</strong>: Ein Marker ist ein <strong>Indiz, kein Beweis</strong>. Der Basso continuo signiert den Barock, aber ein Komponist des 20. Jahrhunderts kann den Barock pastichieren (vgl. Kurs 41); dichte Chromatik gibt es bei Gesualdo (Ende 16. Jh.) wie bei Wagner. Erst die <strong>Konvergenz</strong> mehrerer Marker begründet die Hypothese — und man formuliert sie stets vorsichtig (« die Gesamtheit der Indizien deutet auf… »).",
  periodesCaption: "Hörbare Marker je Epoche — Indizien, niemals Beweise",
  periodesHeaders: ["Epoche", "Typische Besetzung", "Satzart", "Harmonik / Tonsprache", "Formen und Gesten", "Sofortindizien"],
  periodesRows: [
    {
      periode: "<strong>Renaissance</strong> (ca. 1450-1600)",
      effectif: "<em>A-cappella</em>-Stimmen (Messe, Motette, Chanson, Madrigal); Instrumentalconsorts",
      texture: "Ausgewogene imitatorische Polyphonie, keine Stimmhierarchie",
      harmonie: "<strong>Modal</strong>, konsonant; streng geregelte Dissonanz (Vorhalte); modale Kadenzen",
      formes: "Textgebundene Formen; keine tänzerische Periodik in der geistlichen Musik",
      indices: "Stimmen allein, ständige Imitation, kein klares Tonika-Dominante-Gefühl",
    },
    {
      periode: "<strong>Barock</strong> (ca. 1600-1750)",
      effectif: "<strong>Basso continuo</strong> (Cembalo, Orgel + Bass); Streichorchester, Solo-/<em>Grosso</em>-Konzert; Stimme + Continuo",
      texture: "Polyphonie (Fuge) oder Melodie + Continuo; sehr aktiver Bass",
      harmonie: "<strong>Tonal</strong>; Sequenzen und harmonische Fortschreitungen; harmonisches Tempo oft schnell und regelmäßig",
      formes: "Fuge, Tanzsuite, Konzert (Ritornell), Rezitativ/Arie; reiche Verzierung",
      indices: "<strong>Hörbares Cembalo</strong>, unablässig laufender Bass, Terrassendynamik, rhythmische Motorik",
    },
    {
      periode: "<strong>Klassik</strong> (ca. 1750-1800)",
      effectif: "Mäßiges Orchester (Streicher + Bläser zu zweit), Streichquartett, Hammerklavier",
      texture: "Dominierende <strong>begleitete Melodie</strong> (Alberti-Bass)",
      harmonie: "Klare diatonische Tonalität; <strong>häufige, sehr hörbare Kadenzen</strong>; eher langsames harmonisches Tempo",
      formes: "<strong>4 + 4-Periodik</strong>, Vordersatz/Nachsatz-Periode, Sonatenform, Menuett, Rondo",
      indices: "Regelmäßige « Frage/Antwort »-Phrasierung, Klarheit, beherrschte Themenkontraste",
    },
    {
      periode: "<strong>Romantik</strong> (19. Jh.)",
      effectif: "Großes Orchester (Blech, Harfe), modernes Klavier, Lied für Stimme + Klavier",
      texture: "Angereicherte begleitete Melodie; dichte Satzarten",
      harmonie: "<strong>Wachsende Chromatik</strong>, entfernte Modulationen, expressive Appoggiaturen",
      formes: "<strong>Große Phrasen</strong> über die Periodik hinaus, zyklische Formen, Charakterstück, sinfonische Dichtung",
      indices: "Lyrischer Atem, Rubato, große Crescendi, Harmonik, die die Auflösung « verzögert »",
    },
    {
      periode: "<strong>Postromantik / Impressionismus</strong> (ca. 1880-1920)",
      effectif: "Sehr großes Orchester oder Klavier solo; Klangfarbe als Farbe behandelt",
      texture: "Klangflächen, überlagerte Klangebenen",
      harmonie: "<strong>Akkordparallelen</strong>, Modi, <strong>Ganztonleiter</strong>, Pentatonik, unaufgelöste erweiterte Akkorde (Nonen, Undezimen)",
      formes: "Freie Formen, Bogen, kurzes evokatives Stück (Bildtitel)",
      indices: "Die Kadenz verliert ihre Richtungskraft; Farbe vor Richtung; metrische Unschärfe",
    },
    {
      periode: "<strong>20. Jh. / Gegenwart</strong> (nach 1910)",
      effectif: "Gesprengte Besetzungen: Schlagwerk, perkussives Klavier, neuartige Ensembles, Elektronik",
      texture: "Alle Satzarten, auch Klangmassen und Pointillismus",
      harmonie: "<strong>Atonalität</strong>, Cluster, Polytonalität, Reihe (Kurs 44); emanzipierte Dissonanz",
      formes: "Blockformen, Collagen, offene Werke; unregelmäßige Rhythmen, wechselnde Takte",
      indices: "Keine wahrnehmbare Tonika, Aggregate, Gewalt oder Verknappung des Klangs",
    },
  ],
  periodesP2:
    "Methodische Ergänzung: Wenn zwei Epochen in der Schwebe bleiben (Klassik oder frühe Romantik? Impressionismus oder Postromantik?), <strong>sagt man es</strong> im Kommentar und nennt das Kriterium, das den Ausschlag gäbe — das wird belohnt, nicht bestraft.",

  formesH2: "Formen mit dem Ohr erkennen",
  formesP1:
    "Auf dem Papier sieht man die Form in der Partitur (Kurse 17 und 28); beim Hören zeigt sich die Form durch zwei Signale: <strong>was wiederkehrt</strong> (identisch oder variiert) und <strong>was kontrastiert</strong> (neues Thema, neue Tonart, neue Satzart). Hier die großen Formen, auf ihre Hörindizien reduziert:",
  formesList: [
    "<strong>Zweiteilig (A-B, oft mit Wiederholungen)</strong>: zwei Teile; der erste entfernt sich (suspensiver Halt oder Kadenz in anderer Tonart), der zweite kehrt zurück. Indiz: das mittlere « Atemholen », oft durch eine Wiederholung unterstrichen.",
    "<strong>Dreiteilig (A-B-A)</strong>: ein Anfang, eine kontrastierende Mitte (Tonart, Charakter, Satzart), dann die <strong>wiedererkennbare Rückkehr des Anfangs</strong>. Indiz: das Gefühl des « Nachhausekommens » nach einem Umweg.",
    "<strong>Rondo (A-B-A-C-A…)</strong>: ein <strong>Refrain</strong>, der identisch in der Haupttonart wiederkehrt, zwischen kontrastierenden Couplets. Indiz: mehr als zwei Wiederkehren desselben Themas = wahrscheinlich Rondo.",
    "<strong>Thema und Variationen</strong>: derselbe harmonische und phrasenmäßige Rahmen wiederholt, dessen Oberfläche sich bei jeder Runde ändert (Verzierung, Modus, Rhythmus). Indiz: die « Phrasenlänge » kehrt identisch wieder, während das Gewand wechselt.",
    "<strong>Sonatenform</strong>: gehört als <strong>Dramaturgie der Spannung</strong> — Exposition (zwei Themenzonen, die zweite in anderer Tonart), Durchführung (Instabilität: Fragmente, schnelle Modulationen, Spannung), Reprise (Rückkehr des Anfangs, aber diesmal bleibt alles in der Haupttonart: Auflösungsgefühl). Indiz: die Rückkehr des Anfangsthemas <em>nach</em> einer Zone maximaler Instabilität.",
    "<strong>Fuge</strong>: <strong>sukzessive Einsätze</strong> desselben Subjekts in jeder Stimme, das einzige nahezu unfehlbare Indiz; danach Wechsel von Episoden und Subjektwiederkehr. Indiz: man hört « dieselbe Phrase » Stimme für Stimme eintreten und sich aufschichten.",
  ],
  illu1H3: "Illustration 1 — Vordersatz/Nachsatz-Periode (C-Dur, 8 Takte)",
  illu1P:
    "Ganze Noten, ein Akkord pro Takt, 4/4-Takt. Der Vordersatz stellt eine <strong>Frage</strong> (Halbkadenz), der Nachsatz <strong>antwortet</strong> (authentische Kadenz) — gleicher Anfang, zwei verschiedene Schlüsse.",
  illu1Chords:
    "Takte 1-4: I – IV – I6/4 – <strong>V</strong> (Halbkadenz) · Takte 5-8: I – IV – <strong>V7</strong> – <strong>I</strong> (authentische Kadenz)",
  illu1Ecoute:
    "<strong>Zu hören</strong>: In Takt 4 bleibt die Melodie auf <strong>Ré5</strong> (2. Stufe) über dem Sol-Akkord hängen — die Phrase ist offen; in Takt 8 setzt sie sich auf <strong>Do5</strong> (Tonika) über dem Do-Akkord — die Phrase ist geschlossen. Dieser Offen/Geschlossen-Kontrast strukturiert die gesamte klassische Phraseologie (Kurs 17).",
  illu2H3: "Illustration 2 — Mini-Rondo (Schema A-B-A-C-A)",
  illu2P1:
    "<strong>Refrain A</strong> (C-Dur, 4 Takte, Monodie, Viertel und abschließende Halbe) — unten graviert und abspielbar:",
  illu2P2:
    "<strong>Couplet B</strong>: 4 kontrastierende Takte in <strong>G-Dur</strong> (das Fa♯ erscheint). <strong>Couplet C</strong>: 4 Takte in <strong>a-Moll</strong> (das Sol♯ erscheint). Zwischen den Couplets kehrt der Refrain <strong>identisch in der Haupttonart</strong> wieder: Genau diese wörtliche Wiederkehr muss das Ohr erkennen lernen — wenn Sie dieses Thema zum dritten Mal hören, wissen Sie, dass Sie in einem Rondo sind.",

  harmH2: "Harmonik hören: das hier mögliche Training",
  harmP1:
    "Hier ist Harmonia in seinem Element: Alles Folgende wird am Synthesizer-Klavier nach den unten gravierten exakten Noten gespielt. Diese Reflexe — Kadenzen, Modus, Modulation, harmonisches Tempo, Satzart — sind der <strong>harmonische Kern</strong> der Höranalyse, und sie werden durch Wiederholung erworben.",
  cadH3: "Die vier Kadenzen (Rückblick auf Kurs 4, in C-Dur, SATB)",
  cadLabels: [
    { nom: "<strong>Authentisch</strong> (schließend)", accords: "I – IV – V7 – I" },
    { nom: "<strong>Plagal</strong> (« Amen »)", accords: "I – IV – I" },
    { nom: "<strong>Halbkadenz</strong> (suspensiv)", accords: "I – IV – <strong>V</strong>" },
    { nom: "<strong>Trugschluss</strong> (falsche Auflösung)", accords: "I – V7 – <strong>vi</strong>" },
  ],
  cadEcoute:
    "<strong>Zu hören</strong>: Die authentische Kadenz <strong>schließt die Tür</strong> (V7 → I, Sopran auf der Tonika); die plagale schließt sanft, ohne Leitton, Sopran unbeweglich auf Do; die Halbkadenz <strong>lässt die Tür offen</strong> (man hält auf V); der Trugschluss <strong>verspricht I und gibt vi</strong> — der Bass steigt Sol→La, statt auf Do zurückzufallen, und die Terz von vi ist verdoppelt (Do in Sopran und Tenor), regelkonform.",
  modeH3: "Dur / Moll: gleiche Fortschreitung, zwei Modi",
  modeP1:
    "Dieselbe Folge I–IV–V7–I, diesmal in <strong>c-Moll</strong> (mit dem Ohr mit der Dur-Version oben vergleichen):",
  modeP2:
    "Das <strong>aufgelöste Si</strong> ist der Leitton des harmonischen Molls: Die Dominante bleibt Dur. Das Ohr muss lernen, den Farbunterschied vom ersten Akkord an zu benennen (Mi vs. Mi♭).",
  modeMajBtn: "Dur-Version (I–IV–V7–I)",
  modeMinBtn: "Moll-Version (i–iv–V7–i)",
  modulH3: "Modulation: zur Dominante oder zur Paralleltonart?",
  modulP1:
    "Zwei Wege vom selben C-Dur aus — das Spiel besteht darin zu erkennen, <strong>welcher leiterfremde Ton erscheint</strong>.",
  modulDomTitle:
    "<strong>Zur Dominante (Do → Sol-Dur)</strong> — Signal: das <strong>Fa♯</strong>. Fünf Akkorde: Do (I) – Fa (IV) – Sol (Pivot: V von Do = I von Sol) – Ré7 (V7 von Sol) – Sol (neue Tonika).",
  modulRelTitle:
    "<strong>Zur Paralleltonart (Do → la-Moll)</strong> — Signal: das <strong>Sol♯</strong>. Drei Akkorde: Do (I) – Mi7 (V7 von la-Moll) – la-Moll (neue Tonika).",
  modulEcoute:
    "<strong>Zu hören</strong>: Zur Dominante bleibt man <strong>in Dur</strong>, um ein Kreuz « heller »; zur Paralleltonart ist die Ankunftskadenz <strong>Moll</strong> — gleiche Vorzeichnung, verdunkelte Farbe. Reflex: « neuer Leitton gehört = wohin führt er? »",
  rythmeH3: "Das harmonische Tempo: schnell oder langsam?",
  rythmeP1:
    "Fortschreitung I – vi – IV – V – I in C-Dur. <strong>Langsame Version</strong>: ein Akkord pro ganzer Note (ein Wechsel pro Takt). <strong>Schnelle Version</strong>: dieselbe Fortschreitung in Vierteln (vier Wechsel pro Takt), zweimal gespielt. Der harmonische Inhalt ist identisch; nur die <strong>Erneuerungsgeschwindigkeit der Akkorde</strong> ändert sich.",
  rythmeP2:
    "Hörübung: die Akkordwechsel pro Takt zählen — ein schnelles, regelmäßiges harmonisches Tempo deutet eher auf den Barock, ein langsames mit weit gesetzten Kadenzen eher auf den klassischen Stil (siehe die Stilmarker).",
  rythmeLentBtn: "Langsame Version",
  rythmeRapideBtn: "Schnelle Version (zweimal gespielt)",
  textureH3: "Einen Satzartwechsel hören",
  textureP1:
    "Ein und dasselbe viertönige Thema (Viertel): <strong>Do5 – Ré5 – Mi5 – Do5</strong>, in vier Satzarten präsentiert:",
  textureLabels: [
    { titre: "Monodie", desc: "das Thema allein, ohne Begleitung." },
    {
      titre: "Homophonie",
      desc: "das Thema Note gegen Note in SATB harmonisiert — Do5 (I: Sol4/Mi4/Do3), Ré5 (V: Sol4/Si3/Sol2), Mi5 (I: Sol4/Do4/Do3), Do5 (I: Sol4/Mi4/Do3).",
    },
    {
      titre: "Polyphonie (Kanon)",
      desc: "Stimme 1: T. 1: Do5–Ré5–Mi5–Do5, T. 2: Mi5–Fa5–Sol5 (Halbe); Stimme 2, einen Takt später in der unteren Oktave einsetzend. (Ja, es ist der Beginn von <em>Frère Jacques</em> — der hörbarste Kanon überhaupt.)",
    },
    {
      titre: "Begleitete Melodie",
      desc: "das Thema in Halben im Sopran, Alberti-Bass in Achteln in der linken Hand — unter Do5 und Mi5: Do3–Sol3–Mi3–Sol3; unter Ré5: Sol2–Ré3–Si2–Ré3.",
    },
  ],
  textureP2:
    "Die Satzart in einem einzigen Hördurchgang benennen zu können ist einer der lohnendsten Griffe der Prüfung: Sie ist oft das erste Epochenindiz.",

  planH2: "Den Kommentar aufbauen: Plan und Vokabular",
  planP1:
    "Das Ergebnis — schriftlich (2 bis 4 Absätze) oder mündlich (2 bis 3 Minuten) — folgt einem stabilen Plan:",
  planSteps: [
    "<strong>Einleitung — Überblick</strong>: Besetzung, Gesamtcharakter, Tempo, ein rahmender Satz (« Ausschnitt für Klavier solo, meditativer Charakter, langsames Tempo mit Rubato »). Noch keine historische Hypothese.",
    "<strong>Hauptteil — die Parameter, geordnet</strong>: wahrgenommene Form (Abschnitte, Wiederkehr, Periodik), Tonsprache und Harmonik (tonal/modal/atonal, gehörte Kadenzen, Modulationen, harmonisches Tempo), Satzart und ihre Entwicklung, markante rhythmische und dynamische Elemente. Man <strong>hierarchisiert</strong>: zuerst, was für diesen Ausschnitt entscheidend ist.",
    "<strong>Schluss — die begründete Hypothese</strong>: wahrscheinliche Epoche und Gattung, als Indizienbündel formuliert (« die begleitete Melodie, die regelmäßige Periodik und die häufigen Kadenzen deuten auf den klassischen Stil; es könnte sich um einen langsamen Sonatensatz handeln »). Ein Komponistenname kommt — allenfalls — erst hier, und stets im Konjunktiv.",
  ],
  registreBox:
    "<strong>Das Vokabularregister</strong>: Man schreibt « homophoner Satz », nicht « es klingt voll »; « suspensive Kadenz », nicht « es hört komisch auf »; « langsames harmonisches Tempo », nicht « die Akkorde schleppen ». Das Fachvokabular ist kein Schmuck: Es ist der Beweis, dass Sie bestimmt haben, nicht nur empfunden.",
  piegesBox:
    "<strong>Die klassischen Fallen</strong>: (1) <strong>zuerst den Komponisten raten</strong> und dann die passenden Indizien auswählen; (2) der <strong>Katalog ohne Hierarchie</strong> — alles der Reihe nach auflisten, ohne das Wesentliche herauszuarbeiten; (3) <strong>Gattung und Form verwechseln</strong> — die « Sonate » ist eine Gattung (ein Werk für ein oder zwei Instrumente in mehreren Sätzen), die « Sonatenform » ist der Plan eines Satzes; ein Konzert kann eine Sonatenform enthalten; (4) ohne Indiz behaupten (« das ist Mozart ») statt zu argumentieren.",
  modeleH3: "Muster-Minikommentar (~150 Wörter)",
  modeleDesc:
    "Beschriebener Ausschnitt: Streichquartett; sanglich geführtes Thema in der ersten Violine über regelmäßiger Begleitung; viertaktige Phrasen; suspensiver Halt auf halbem Weg, bekräftigter Schluss; kurze, instabilere Mittelpassage, dann Rückkehr des Anfangsthemas.",
  modeleQuote:
    "« Der Ausschnitt lässt ein Streichquartett hören: Die erste Violine stellt ein kantables Thema über einer homorhythmischen Begleitung der drei anderen Stimmen vor — Satzart der begleiteten Melodie. Der Diskurs ist klar tonal und diatonisch: Die Phrasen, in regelmäßiger viertaktiger Periodik, bilden eine Periode — eine Halbkadenz lässt die erste Phrase offen, eine authentische Kadenz schließt die zweite. Eine Mittelpassage moduliert und fragmentiert das Thema und erzeugt eine Instabilität, die durch die Rückkehr des Anfangsthemas in der Haupttonart rasch aufgelöst wird, was auf eine dreiteilige Anlage, ja eine verkürzte Sonatenform hindeutet. Das harmonische Tempo ist ruhig, die Kadenzen häufig und hörbar. Dieses Indizienbündel — Quartettbesetzung, begleitete Melodie, Periodik, kadenzielle Klarheit — deutet auf den klassischen Stil (zweite Hälfte des 18. Jahrhunderts); es könnte sich um einen Quartettsatz Haydnschen Typs handeln. »",

  entrainH2: "Training",
  methodeH3: "Die Methode in Kürze",
  methodeP:
    "1) erstes Hören, vollständiges Raster (der Werkzeugkasten); 2) folgende Hördurchgänge, entscheidende Parameter; 3) Formen und Kadenzen bestimmen; 4) Indizienbündel → Epochenhypothese; 5) nach dem Plan schreiben: <strong>beschreiben → bestimmen → einordnen</strong>.",
  exercicesH3: "Übungen 1-2 — Minikommentare zum Verfassen",
  exercices: [
    {
      titre: "Übung 1 — Minikommentar verfassen (Beschreibung gegeben)",
      description:
        "<em>Beschreibung des Ausschnitts:</em> Streicherensemble mit Cembalo; ein Bass in gleichmäßigen Achteln schreitet unablässig voran; darüber dialogisieren zwei Violinen in Imitation; die Akkorde wechseln auf jeder Zählzeit; Blockdynamik, kein Crescendo; eine absteigende Sequenz kehrt mehrmals wieder vor einer schließenden Kadenz.",
      consigne:
        "<em>Aufgabe:</em> Verfassen Sie einen Kommentar von 120-160 Wörtern nach dem Plan des Abschnitts « Der Plan » (Beschreibung → Bestimmung → Hypothese).",
      corrige:
        "« Der Ausschnitt verbindet ein Streicherensemble mit einem Cembalo, das den Basso continuo aussetzt, getragen von einem Bass in gleichmäßigen Achteln — ein typisch unablässiges Fortschreiten. Die Satzart ist polyphon: Zwei Violinen dialogisieren in Imitation über dem Continuo. Die Tonsprache ist tonal, das harmonische Tempo schnell und regelmäßig (ein Akkord pro Zählzeit); eine absteigende harmonische Sequenz führt, wiederholt, zu einer schließenden authentischen Kadenz. Die Dynamik verläuft in entgegengesetzten Ebenen, terrassiert, ohne allmählichen Übergang. Dieses Indizienbündel — Basso continuo mit Cembalo, Imitation, Sequenzen, schnelles harmonisches Tempo, Terrassendynamik — deutet klar auf die Barockzeit (erste Hälfte des 18. Jahrhunderts). Besetzung und konzertierender Dialog legen einen schnellen Satz eines Streicherkonzerts, ja eines Concerto grosso nahe. »",
    },
    {
      titre: "Übung 2 — Minikommentar verfassen (Beschreibung gegeben)",
      description:
        "<em>Beschreibung des Ausschnitts:</em> Klavier solo; langsames, schwankendes Tempo; eine weit gespannte Melodie in der rechten Hand über breiten Arpeggien der linken; chromatikreiche Harmonik, verzögerte Auflösungen, eine Modulation in eine entfernte Tonart; große Steigerung, dann Abklingen; die Anfangsphrase kehrt am Ende verziert wieder.",
      consigne: "<em>Aufgabe:</em> gleiche Übung, 120-160 Wörter.",
      corrige:
        "« Stück für Klavier solo, lyrischen Charakters, in langsamem, von Rubato belebtem Tempo. Die Satzart ist die der begleiteten Melodie: Ein weiter Gesang der rechten Hand entfaltet sich über breiten Arpeggien. Die Tonsprache ist tonal, aber stark chromatisch: expressive Appoggiaturen, verzögerte Auflösungen und eine Modulation in eine entfernte Tonart in der Mitte des Ausschnitts. Die Phrasen sprengen die regelmäßige Periodik und gipfeln in einem langen Crescendo, bevor sie abklingen; die verzierte Schlusswiederkehr der Anfangsphrase zeichnet eine dreiteilige Anlage A-B-A'. Dieses Bündel — Klavier solo, Lyrismus, Chromatik, Rubato, dreiteilige Form eines kurzen Stücks — deutet auf die Romantik (19. Jahrhundert); es könnte sich um ein Charakterstück vom Typ Nocturne handeln. »",
    },
  ],
  voirCorrige: "Musterlösung ansehen",
  masquerCorrige: "Musterlösung ausblenden",
  corrigeLabel: "Musterlösung",

  drillCadH3: "Übung 3 — Drill: Kadenzen blind erkennen",
  drillCadConsigne:
    "Der Knopf spielt, <strong>ohne die Partitur zu zeigen</strong>, eine der vier Fortschreitungen aus der Tabelle oben (authentisch, plagal, Halbkadenz, Trugschluss), in zufälliger Reihenfolge. Für jede: 1) geschlossen oder offen? 2) fällt der Bass auf die Tonika zurück? 3) benennen Sie die Kadenz, dann prüfen Sie. Wiederholen Sie die Serie bis vier von vier richtig sind. Kontrollpunkte: Der Trugschluss verrät sich durch den Bass Sol→La; die plagale durch das Fehlen des Leittons und den unbeweglichen Sopran.",
  drillModH3: "Übung 4a — Drill: Dominante oder Paralleltonart?",
  drillModConsigne:
    "Der Knopf spielt blind einen der beiden Modulationswege: Sagen Sie, ob er zur <strong>Dominante</strong> führt (Dur-Ankunft, Fa♯) oder zur <strong>Mollparallele</strong> (Moll-Ankunft, Sol♯); wiederholen Sie abwechselnd.",
  drillRytH3: "Übung 4b — Drill: harmonisches Tempo langsam oder schnell?",
  drillRytConsigne:
    "Der Knopf spielt eine der beiden Versionen der Fortschreitung I – vi – IV – V – I: Zählen Sie die Akkordwechsel pro Takt und formulieren Sie die Antwort im Kommentarvokabular (« langsames harmonisches Tempo: ein Wechsel pro Takt » / « schnell: vier pro Takt »). Zur Erinnerung: Unter sonst gleichen Bedingungen deutet ein schnelles, regelmäßiges Profil eher auf den Barock, ein langsames auf den klassischen Stil.",
  drillPlayBtn: "Ein zufälliges Beispiel spielen",
  drillReplayBtn: "Noch einmal hören",
  drillAnswerPrompt: "Ihre Antwort:",
  drillCorrect: "Richtig!",
  drillWrong: "Nein — es war:",
  drillResetBtn: "Punktestand zurücksetzen",
  cadenceNames: ["Authentische Kadenz", "Plagale Kadenz", "Halbkadenz", "Trugschluss"],
  modulationNames: ["Zur Dominante (Dur-Ankunft, Fa♯)", "Zur Mollparallele (Moll-Ankunft, Sol♯)"],
  rythmeNames: ["Langsames harmonisches Tempo (ein Wechsel pro Takt)", "Schnelles harmonisches Tempo (vier pro Takt)"],

  quizH3: "Quiz — 10 Fragen",
  questions: [
    {
      q: "Sie hören: Basso continuo mit Cembalo, polyphoner Satz, gleichmäßige rhythmische Motorik. Wahrscheinliche Epoche?",
      opts: ["Renaissance", "Barock", "Klassik", "Romantik"],
      a: 1,
      fb: "Der Basso continuo mit Cembalo ist der Barockmarker schlechthin (ca. 1600-1750).",
    },
    {
      q: "Sie hören: begleitete Melodie, 4+4-Periodik, häufige und klare Kadenzen, mäßiges Orchester. Wahrscheinliche Epoche?",
      opts: ["Barock", "Klassik", "Impressionismus", "20. Jahrhundert"],
      a: 1,
      fb: "Regelmäßige Periodik + kadenzielle Klarheit + begleitete Melodie = das typische klassische Bündel.",
    },
    {
      q: "Sie hören: unaufgelöste Akkordparallelen, Ganztonleiter, metrische Unschärfe, Klangfarbe als Farbe. Wahrscheinliche Epoche?",
      opts: ["Renaissance", "Klassik", "Impressionismus", "Barock"],
      a: 2,
      fb: "Parallelen, Modi und Ganztonleiter sind die impressionistischen Marker (Debussy — Kurs 21).",
    },
    {
      q: "In C-Dur hören Sie V7 und dann einen a-Moll-Akkord statt des erwarteten Do. Welche Kadenz?",
      opts: ["Authentisch", "Plagal", "Halbkadenz", "Trugschluss"],
      a: 3,
      fb: "V7 → vi: Die versprochene Auflösung wird vereitelt — Trugschluss (Kurs 4).",
    },
    {
      q: "Die Phrase hält auf dem Sol-Akkord (V) in C-Dur, Gefühl des Schwebens. Welche Kadenz?",
      opts: ["Halbkadenz", "Authentisch", "Trugschluss", "Plagal"],
      a: 0,
      fb: "Auf V anzuhalten lässt die Phrase offen: Halbkadenz, das musikalische « Komma ».",
    },
    {
      q: "Verbindung IV → I, ohne Leitton, Sopran unbeweglich auf der Tonika. Welche Kadenz?",
      opts: ["Authentisch", "Plagal", "Trugschluss", "Halbkadenz"],
      a: 1,
      fb: "IV → I ist die plagale Kadenz, der « Amen »-Schluss ohne Leitton.",
    },
    {
      q: "Dasselbe Thema kehrt zum dritten Mal identisch in der Haupttonart wieder, zwischen kontrastierenden Episoden. Wahrscheinliche Form?",
      opts: ["Sonatenform", "Thema und Variationen", "Rondo", "Zweiteilig"],
      a: 2,
      fb: "Die wiederholte Wiederkehr eines Refrains in der Haupttonart ist die Signatur des Rondos (Kurs 28).",
    },
    {
      q: "Sie hören dieselbe melodische Phrase nacheinander in jeder Stimme eintreten und sich aufschichten. Wahrscheinliche Form?",
      opts: ["Fuge", "Rondo", "Dreiteilig", "Variationen"],
      a: 0,
      fb: "Die sukzessiven Einsätze des Subjekts sind das nahezu unfehlbare Indiz der Fuge.",
    },
    {
      q: "Welche Formulierung gehört zum erwarteten Register des Kommentars?",
      opts: [
        "« Es klingt voll und reich »",
        "« Der Satz ist homophon und dicht »",
        "« Es ist hübsch, aber traurig »",
        "« Es klingt nach Chopin, also ist es Romantik »",
      ],
      a: 1,
      fb: "Technisches, beschreibendes Vokabular; die letzte Option kehrt die Methode um (bestimmen vor beschreiben).",
    },
    {
      q: "Ein Ausschnitt erinnert Sie sofort an einen bestimmten Komponisten. Was tun Sie zuerst?",
      opts: [
        "Ihn sofort hinschreiben",
        "Zuerst die Parameter beschreiben, den Namen für den Schluss im Konjunktiv aufheben",
        "Den genauen Titel suchen",
        "Die Beschreibung um diesen Namen herum bauen",
      ],
      a: 1,
      fb: "Beschreiben → bestimmen → einordnen: Die Intuition wird durch die Indizien geprüft, niemals umgekehrt.",
    },
  ],

  listenBtn: "Anhören",
};

// ════════════════════════════════════════════════════════════════════════════
// ES
// ════════════════════════════════════════════════════════════════════════════

const es: Cours45Locale = {
  maitreConcept: "El comentario de audición — describir, identificar, situar",
  maitreAnecdote:
    "Profesor del Conservatorio de París de 1941 a 1978, Olivier Messiaen dirigió allí una clase de análisis que fue el laboratorio de escucha más célebre del siglo: allí se analizaba todo — canto gregoriano, Mozart, Debussy, ritmos hindúes, cantos de pájaros — partitura y oído juntos. Boulez, Xenakis o Stockhausen pasaron por ella. Su disciplina: escuchar primero, nombrar con precisión después, concluir con prudencia al final.",
  maitreLesson:
    "La prueba del comentario de audición evalúa un método, no una discoteca interior: una descripción jerarquizada y argumentada vale siempre más que un nombre de compositor lanzado al azar.",

  honneteTitle: "Cómo trabajar este curso",
  honneteBody:
    "<strong>Harmonia no contiene ninguna grabación.</strong> Por razones de derechos, la plataforma no dispone de fonoteca: todo lo que escuchará aquí lo toca un <strong>piano de síntesis</strong>, a partir de partituras grabadas. Este curso le da, pues, dos cosas: la <strong>metodología completa</strong> del comentario de audición (la tabla de análisis, los marcadores estilísticos, el plan, el vocabulario — todo el utillaje intelectual de la prueba) y el <strong>entrenamiento de los parámetros realmente trabajables con el piano de síntesis</strong>: cadencias, modos mayor/menor, modulaciones, ritmo armónico, texturas, formas. En cambio, la identificación de los <strong>timbres</strong> y de la <strong>orquestación</strong> en obras reales no puede trabajarse aquí: pertenece a la escucha en clase y a su frecuentación personal del repertorio (conciertos, radio, plataformas). Este curso es el método y el gimnasio armónico — no un sustituto de la escucha de las obras.",

  introH2: "¿Qué es el comentario de audición?",
  introP1:
    "El comentario de audición es una prueba reina de los cursus franceses: en la universidad (grado de musicología, CAPES/agregación), en el conservatorio (DEM de análisis — véase el curso 26 para la otra vertiente del examen, la escritura) y en numerosos concursos. El principio: se le hace escuchar un fragmento de una obra, <strong>casi siempre desconocida para usted</strong>, de dos a cuatro veces; debe producir un comentario estructurado que identifique la <strong>plantilla</strong>, la <strong>textura</strong>, el <strong>lenguaje</strong>, la <strong>forma</strong>, el <strong>género probable</strong>, y que <strong>sitúe la obra</strong> en un período estilístico — todo ello argumentado por lo que realmente ha oído.",
  introP2:
    "Lo que el corrector espera <strong>no</strong> es un catálogo de efectos (« hay violines, luego suena fuerte, luego hay una flauta ») ni una apuesta por el título. Espera una descripción <strong>jerarquizada</strong> (los parámetros decisivos primero), <strong>argumentada</strong> (cada afirmación apoyada en un indicio audible) y <strong>prudente</strong> (una hipótesis de datación, no una certeza proclamada). De ahí la regla de oro del curso, en este orden y nunca al revés:",
  regleOr:
    "<strong>Describir → identificar → situar.</strong><br/>Primero se describe lo que se oye (parámetros objetivos), luego se identifican los elementos técnicos (cadencias, forma, lenguaje), y por último se propone una situación histórica argumentada. <strong>Nunca al revés</strong>: adivinar de entrada un título o un compositor, y torcer después la descripción para que encaje, es la falta metodológica más sancionada — y la más frecuente.",
  introP3:
    "Un fragmento bien descrito pero prudentemente situado vale siempre más que un nombre acertado por suerte: la prueba evalúa una <strong>manera de proceder</strong>, no una discoteca interior.",

  grilleH2: "La caja de herramientas: ¿qué hay que escuchar?",
  grilleP1:
    "Antes de toda técnica, hace falta una <strong>tabla de parámetros</strong>: la lista mental que se despliega desde la primera escucha. Aquí está — es LA tabla de referencia del curso, para saberse de memoria. En la primera escucha se barre todo; en las siguientes, se profundizan los parámetros decisivos para el fragmento dado.",
  grilleCaption: "La tabla de parámetros de escucha — para saberse de memoria",
  grilleHeaders: ["Parámetro", "Preguntas que hacerse", "Vocabulario clave"],
  grilleRows: [
    {
      param: "<strong>Plantilla / timbre</strong>",
      questions: "¿Voces o instrumentos? ¿Cuántos? ¿Familias (cuerdas, vientos, teclados)? ¿Solista + acompañamiento?",
      vocab: "orquesta sinfónica, formación de cámara, <em>a cappella</em>, basso continuo, plantilla mixta",
    },
    {
      param: "<strong>Textura</strong>",
      questions: "¿Una sola línea? ¿Todas las voces juntas? ¿Líneas independientes? ¿Una melodía que domina?",
      vocab: "<strong>monodia</strong>, <strong>homofonía</strong> (homorritmia), <strong>polifonía / contrapunto</strong> (imitación), <strong>melodía acompañada</strong>",
    },
    {
      param: "<strong>Lenguaje</strong>",
      questions: "¿Se siente una tónica? ¿El lenguaje es modal, tonal, atonal? ¿Consonante o disonante?",
      vocab: "modal, tonal (mayor/menor), cromático, atonal; consonancia, disonancia, cluster",
    },
    {
      param: "<strong>Armonía</strong>",
      questions: "¿Se oyen cadencias? ¿Los acordes cambian deprisa o despacio? ¿Hay modulaciones?",
      vocab: "cadencia perfecta / plagal / rota / semicadencia (curso 4), <strong>ritmo armónico</strong>, modulación",
    },
    {
      param: "<strong>Forma</strong>",
      questions: "¿Frases regulares? ¿Secciones que vuelven? ¿Contrastes?",
      vocab: "cuadratura, período, estribillo/copla, repetición, A-B-A, desarrollo (cursos 17 y 28)",
    },
    {
      param: "<strong>Ritmo / tempo / métrica</strong>",
      questions: "¿Binario o ternario? ¿Tempo estable o fluctuante? ¿Pulsación danzante?",
      vocab: "compás de 2, 3, 4 tiempos; rubato; ostinato; síncopa; carácter de danza",
    },
    {
      param: "<strong>Dinámicas / articulación</strong>",
      questions: "¿Matices en terrazas o progresivos? ¿Legato, staccato? ¿Grandes crescendos?",
      vocab: "dinámicas en terrazas, crescendo/decrescendo, acentos, contrastes dinámicos",
    },
    {
      param: "<strong>Texto (si lo hay)</strong>",
      questions: "¿Idioma? ¿Sacro o profano? ¿Relación música-texto (silábico, melismático)?",
      vocab: "litúrgico, madrigalismo, silábico, melismático, recitativo / aria",
    },
  ],
  grilleP2:
    "Dos consejos de uso. Primero, <strong>jerarquizar</strong>: no todos los parámetros hablan igual para un fragmento dado — una fuga de teclado se juega en la textura y la forma, un lied en el texto y la armonía. Después, <strong>cruzar</strong>: es el <strong>haz de indicios</strong> convergentes lo que autoriza una hipótesis de período (sección siguiente), nunca un indicio aislado.",

  periodesH2: "Situar un período: los marcadores estilísticos",
  periodesP1:
    "He aquí la tabla de síntesis de los marcadores audibles por período. Condensa el curso 29 (<em>Análisis comparativo del repertorio</em> — la misma melodía armonizada cinco veces) y los cursos 20/21 (firmas de los compositores). <strong>Advertencia metodológica</strong>: un marcador es un <strong>indicio, no una prueba</strong>. El basso continuo firma el barroco, pero un compositor del XX puede pastichar el barroco (cf. curso 41); el cromatismo denso existe en Gesualdo (finales del XVI) como en Wagner. Es la <strong>convergencia</strong> de varios marcadores lo que funda la hipótesis — y siempre se enuncia con prudencia (« el conjunto de indicios orienta hacia… »).",
  periodesCaption: "Marcadores audibles por período — indicios, nunca pruebas",
  periodesHeaders: ["Período", "Plantilla típica", "Textura", "Armonía / lenguaje", "Formas y gestos", "Indicios inmediatos"],
  periodesRows: [
    {
      periode: "<strong>Renacimiento</strong> (h. 1450-1600)",
      effectif: "Voces <em>a cappella</em> (misa, motete, chanson, madrigal); consorts de instrumentos",
      texture: "Polifonía imitativa equilibrada, sin jerarquía de voces",
      harmonie: "<strong>Modal</strong>, consonante; disonancia estrictamente reglada (retardos); cadencias modales",
      formes: "Formas ligadas al texto; sin cuadratura de danza en lo sacro",
      indices: "Voces solas, imitación continua, ausencia de sensación tónica-dominante clara",
    },
    {
      periode: "<strong>Barroco</strong> (h. 1600-1750)",
      effectif: "<strong>Basso continuo</strong> (clave, órgano + bajo); orquesta de cuerdas, concierto solista/<em>grosso</em>; voz + continuo",
      texture: "Polifonía (fuga) o melodía + continuo; bajo muy activo",
      harmonie: "<strong>Tonal</strong>; secuencias y marchas armónicas; ritmo armónico a menudo rápido y regular",
      formes: "Fuga, suite de danzas, concierto (ritornello), recitativo/aria; ornamentación abundante",
      indices: "<strong>Clave audible</strong>, bajo obstinado en movimiento, dinámicas en terrazas, motricidad rítmica",
    },
    {
      periode: "<strong>Clásico</strong> (h. 1750-1800)",
      effectif: "Orquesta moderada (cuerdas + maderas a 2), cuarteto de cuerdas, pianoforte",
      texture: "<strong>Melodía acompañada</strong> dominante (bajo de Alberti)",
      harmonie: "Tonal claro y diatónico; <strong>cadencias frecuentes y muy audibles</strong>; ritmo armónico más bien lento",
      formes: "<strong>Cuadraturas de 4 + 4</strong>, período antecedente/consecuente, forma sonata, minueto, rondó",
      indices: "Fraseo regular « pregunta/respuesta », claridad, contrastes temáticos controlados",
    },
    {
      periode: "<strong>Romántico</strong> (s. XIX)",
      effectif: "Gran orquesta (metales, arpa), piano moderno, lied voz + piano",
      texture: "Melodía acompañada enriquecida; texturas densas",
      harmonie: "<strong>Cromatismo creciente</strong>, modulaciones lejanas, apoyaturas expresivas",
      formes: "<strong>Grandes frases</strong> que desbordan la cuadratura, formas cíclicas, pieza de carácter, poema sinfónico",
      indices: "Aliento lírico, rubato, grandes crescendos, armonía que « retrasa » la resolución",
    },
    {
      periode: "<strong>Posromántico / impresionista</strong> (h. 1880-1920)",
      effectif: "Orquesta muy nutrida o piano solo; timbre tratado como color",
      texture: "Capas, planos sonoros superpuestos",
      harmonie: "<strong>Paralelismos de acordes</strong>, modos, <strong>escala de tonos enteros</strong>, pentatónica, acordes enriquecidos (9as, 11as) sin resolver",
      formes: "Formas libres, arco, pieza breve evocadora (título-imagen)",
      indices: "La cadencia pierde su fuerza direccional; color antes que dirección; vaguedad métrica",
    },
    {
      periode: "<strong>Siglo XX / contemporáneo</strong> (después de 1910)",
      effectif: "Plantillas estalladas: percusiones, piano percusivo, conjuntos inéditos, electrónica",
      texture: "Todas las texturas, incluidas masas y puntillismo",
      harmonie: "<strong>Atonalidad</strong>, clusters, politonalidad, serie (curso 44); disonancia emancipada",
      formes: "Formas por bloques, collages, obras abiertas; ritmos irregulares, compases cambiantes",
      indices: "Ausencia de tónica perceptible, agregados, violencia o rarefacción del sonido",
    },
  ],
  periodesP2:
    "Complemento de método: cuando dos períodos quedan en balanza (¿clásico o romántico temprano? ¿impresionista o posromántico?), se <strong>dice</strong> en el comentario y se da el criterio que inclinaría la balanza — eso se valora, no se penaliza.",

  formesH2: "Reconocer las formas de oído",
  formesP1:
    "Por escrito, la forma se ve en la partitura (cursos 17 y 28); de oído, la forma se percibe por dos señales: <strong>lo que vuelve</strong> (idéntico o variado) y <strong>lo que contrasta</strong> (nuevo tema, nueva tonalidad, nueva textura). He aquí las grandes formas reducidas a sus indicios auditivos:",
  formesList: [
    "<strong>Binaria (A-B, a menudo con repeticiones)</strong>: dos partes; la primera se aleja (parada suspensiva o cadencia en otro tono), la segunda vuelve. Indicio: la « respiración » central, a menudo subrayada por una repetición.",
    "<strong>Ternaria (A-B-A)</strong>: un comienzo, un centro contrastante (tono, carácter, textura), luego el <strong>retorno reconocible del comienzo</strong>. Indicio: sensación de « volver a casa » tras un rodeo.",
    "<strong>Rondó (A-B-A-C-A…)</strong>: un <strong>estribillo</strong> que vuelve idéntico en el tono principal, entre coplas contrastantes. Indicio: más de dos retornos del mismo tema = probable rondó.",
    "<strong>Tema y variaciones</strong>: una misma cuadratura armónica y fraseológica repetida, cuya superficie cambia en cada vuelta (ornamentación, modo, ritmo). Indicio: la « longitud de frase » vuelve idéntica mientras el ropaje cambia.",
    "<strong>Forma sonata</strong>: oída como <strong>dramaturgia de la tensión</strong> — exposición (dos zonas temáticas, la segunda en otro tono), desarrollo (inestabilidad: fragmentos, modulaciones rápidas, tensión), reexposición (retorno del comienzo, pero esta vez todo permanece en el tono principal: sensación de resolución). Indicio: el retorno del tema inicial <em>después</em> de una zona de inestabilidad máxima.",
    "<strong>Fuga</strong>: <strong>entradas sucesivas</strong> del mismo sujeto en cada voz, único indicio casi infalible; después alternancia de episodios y retornos del sujeto. Indicio: se oye « la misma frase » entrar voz tras voz, apilándose.",
  ],
  illu1H3: "Ilustración 1 — Período antecedente/consecuente (Do mayor, 8 compases)",
  illu1P:
    "Redondas, un acorde por compás, compás de 4/4. El antecedente plantea una <strong>pregunta</strong> (semicadencia), el consecuente <strong>responde</strong> (cadencia perfecta) — mismo comienzo, dos finales distintos.",
  illu1Chords:
    "Compases 1-4: I – IV – I6/4 – <strong>V</strong> (semicadencia) · Compases 5-8: I – IV – <strong>V7</strong> – <strong>I</strong> (cadencia perfecta)",
  illu1Ecoute:
    "<strong>Qué escuchar</strong>: en el compás 4, la melodía queda suspendida en <strong>Ré5</strong> (2.º grado) sobre el acorde de Sol — la frase está abierta; en el compás 8, se posa en <strong>Do5</strong> (tónica) sobre el acorde de Do — la frase está cerrada. Este contraste abierto/cerrado estructura toda la fraseología clásica (curso 17).",
  illu2H3: "Ilustración 2 — Mini-rondó (esquema A-B-A-C-A)",
  illu2P1:
    "<strong>Estribillo A</strong> (Do mayor, 4 compases, monodia, negras y blancas finales) — grabado y reproducible abajo:",
  illu2P2:
    "<strong>Copla B</strong>: 4 compases contrastantes en <strong>Sol mayor</strong> (aparece el Fa♯). <strong>Copla C</strong>: 4 compases en <strong>La menor</strong> (aparece el Sol♯). Entre cada copla, el estribillo <strong>vuelve idéntico, en el tono principal</strong>: es precisamente ese retorno literal lo que el oído debe aprender a detectar — cuando oiga este tema por tercera vez, sabrá que está en un rondó.",

  harmH2: "Oír la armonía: el entrenamiento posible aquí",
  harmP1:
    "Aquí es donde Harmonia está en su elemento: todo lo que sigue se toca con el piano de síntesis a partir de las notas exactas grabadas abajo. Estos reflejos — cadencias, modo, modulación, ritmo armónico, textura — son el <strong>corazón armónico</strong> del comentario de audición, y se adquieren por repetición.",
  cadH3: "Las cuatro cadencias (repaso del curso 4, en Do mayor, SATB)",
  cadLabels: [
    { nom: "<strong>Perfecta</strong> (conclusiva)", accords: "I – IV – V7 – I" },
    { nom: "<strong>Plagal</strong> (« Amén »)", accords: "I – IV – I" },
    { nom: "<strong>Semicadencia</strong> (suspensiva)", accords: "I – IV – <strong>V</strong>" },
    { nom: "<strong>Rota</strong> (falsa resolución)", accords: "I – V7 – <strong>vi</strong>" },
  ],
  cadEcoute:
    "<strong>Qué escuchar</strong>: la perfecta <strong>cierra la puerta</strong> (V7 → I, soprano en la tónica); la plagal cierra con suavidad, sin sensible, soprano inmóvil en Do; la semicadencia <strong>deja la puerta abierta</strong> (nos detenemos en V); la rota <strong>promete I y da vi</strong> — el bajo sube Sol→La en vez de recaer en Do, y la tercera de vi está duplicada (Do en soprano y tenor), conforme a la regla.",
  modeH3: "Mayor / menor: misma progresión, dos modos",
  modeP1:
    "La misma marcha I–IV–V7–I, esta vez en <strong>Do menor</strong> (comparar de oído con la versión mayor de arriba):",
  modeP2:
    "El <strong>Si becuadro</strong> es la sensible del menor armónico: la dominante sigue siendo mayor. El oído debe aprender a nombrar la diferencia de color desde el primer acorde (Mi vs Mi♭).",
  modeMajBtn: "Versión mayor (I–IV–V7–I)",
  modeMinBtn: "Versión menor (i–iv–V7–i)",
  modulH3: "Modulación: ¿hacia la dominante o hacia el relativo?",
  modulP1:
    "Dos trayectos partiendo del mismo Do mayor — el juego consiste en identificar <strong>qué nota extraña aparece</strong>.",
  modulDomTitle:
    "<strong>Hacia la dominante (Do → Sol mayor)</strong> — señal: el <strong>Fa♯</strong>. Cinco acordes: Do (I) – Fa (IV) – Sol (pivote: V de Do = I de Sol) – Ré7 (V7 de Sol) – Sol (nueva tónica).",
  modulRelTitle:
    "<strong>Hacia el relativo (Do → La menor)</strong> — señal: el <strong>Sol♯</strong>. Tres acordes: Do (I) – Mi7 (V7 de La menor) – La menor (nueva tónica).",
  modulEcoute:
    "<strong>Qué escuchar</strong>: hacia la dominante, seguimos <strong>en mayor</strong>, un tono más « luminoso » de un sostenido; hacia el relativo, la cadencia de llegada es <strong>menor</strong> — misma armadura, color ensombrecido. Reflejo: « ¿nueva sensible oída = adónde conduce? »",
  rythmeH3: "El ritmo armónico: ¿rápido o lento?",
  rythmeP1:
    "Progresión I – vi – IV – V – I en Do mayor. <strong>Versión lenta</strong>: un acorde por redonda (un cambio por compás). <strong>Versión rápida</strong>: la misma progresión en negras (cuatro cambios por compás), tocada dos veces. El contenido armónico es idéntico; solo cambia la <strong>velocidad de renovación de los acordes</strong>.",
  rythmeP2:
    "Ejercicio de escucha: contar los cambios de acorde por compás — un ritmo armónico rápido y regular orienta más bien hacia el barroco, un ritmo lento con cadencias espaciadas más bien hacia el estilo clásico (véanse los marcadores estilísticos).",
  rythmeLentBtn: "Versión lenta",
  rythmeRapideBtn: "Versión rápida (tocada dos veces)",
  textureH3: "Oír un cambio de textura",
  textureP1:
    "Un mismo tema de cuatro notas (negras): <strong>Do5 – Ré5 – Mi5 – Do5</strong>, presentado bajo cuatro texturas:",
  textureLabels: [
    { titre: "Monodia", desc: "el tema solo, sin acompañamiento." },
    {
      titre: "Homofonía",
      desc: "el tema armonizado nota contra nota en SATB — Do5 (I: Sol4/Mi4/Do3), Ré5 (V: Sol4/Si3/Sol2), Mi5 (I: Sol4/Do4/Do3), Do5 (I: Sol4/Mi4/Do3).",
    },
    {
      titre: "Polifonía (canon)",
      desc: "voz 1: c. 1: Do5–Ré5–Mi5–Do5, c. 2: Mi5–Fa5–Sol5 (blanca); voz 2, entrando un compás más tarde a la octava inferior. (Sí, es el íncipit de <em>Frère Jacques</em> — el canon más audible que existe.)",
    },
    {
      titre: "Melodía acompañada",
      desc: "el tema en blancas en el soprano, bajo de Alberti en corcheas en la mano izquierda — bajo Do5 y Mi5: Do3–Sol3–Mi3–Sol3; bajo Ré5: Sol2–Ré3–Si2–Ré3.",
    },
  ],
  textureP2:
    "Saber nombrar la textura en una sola escucha es uno de los gestos más rentables de la prueba: suele ser el primer indicio de período.",

  planH2: "Construir el comentario: plan y vocabulario",
  planP1:
    "El entregable — escrito (2 a 4 párrafos) u oral (2 a 3 minutos) — sigue un plan estable:",
  planSteps: [
    "<strong>Introducción — visión de conjunto</strong>: plantilla, carácter global, tempo, una frase de encuadre (« Fragmento para piano solo, de carácter meditativo, tempo lento y rubato »). Todavía sin hipótesis histórica.",
    "<strong>Desarrollo — los parámetros, organizados</strong>: forma percibida (secciones, retornos, cuadraturas), lenguaje y armonía (tonal/modal/atonal, cadencias oídas, modulaciones, ritmo armónico), textura y su evolución, elementos rítmicos y dinámicos salientes. Se <strong>jerarquiza</strong>: primero lo decisivo para ese fragmento.",
    "<strong>Conclusión — la hipótesis argumentada</strong>: período y género probables, enunciados como un haz de indicios (« la melodía acompañada, las cuadraturas regulares y las cadencias frecuentes orientan hacia el estilo clásico; podría tratarse de un movimiento lento de sonata »). Un nombre de compositor solo llega — eventualmente — aquí, y siempre en condicional.",
  ],
  registreBox:
    "<strong>El registro de vocabulario</strong>: se escribe « textura homofónica », no « suena lleno »; « cadencia suspensiva », no « se para raro »; « ritmo armónico lento », no « los acordes se arrastran ». El vocabulario técnico no es un adorno: es la prueba de que ha identificado, no solo sentido.",
  piegesBox:
    "<strong>Las trampas clásicas</strong>: (1) <strong>adivinar primero el compositor</strong> y seleccionar después los indicios convenientes; (2) el <strong>catálogo sin jerarquía</strong> — listarlo todo sobre la marcha sin destacar lo esencial; (3) <strong>confundir género y forma</strong> — la « sonata » es un género (una obra para uno o dos instrumentos en varios movimientos), la « forma sonata » es el plan de un movimiento; un concierto puede contener una forma sonata; (4) afirmar sin indicio (« es Mozart ») en vez de argumentar.",
  modeleH3: "Mini-comentario modelo (~150 palabras)",
  modeleDesc:
    "Fragmento descrito: cuarteto de cuerdas; tema cantable en el primer violín sobre acompañamiento regular; frases de cuatro compases; parada suspensiva a mitad de camino, conclusión afirmada; breve pasaje central más inestable, luego retorno del tema inicial.",
  modeleQuote:
    "« El fragmento hace oír un cuarteto de cuerdas: el primer violín expone un tema cantabile sobre un acompañamiento homorrítmico de las otras tres voces — textura de melodía acompañada. El discurso es claramente tonal y diatónico: las frases, en cuadraturas regulares de cuatro compases, forman un período — una semicadencia suspende la primera frase, una cadencia perfecta concluye la segunda. Un pasaje central modula y fragmenta el tema, creando una inestabilidad pronto resuelta por el retorno del tema inicial en el tono principal, lo que sugiere un corte ternario, incluso una forma sonata abreviada. El ritmo armónico es reposado, las cadencias frecuentes y audibles. Este haz de indicios — plantilla de cuarteto, melodía acompañada, cuadraturas, claridad cadencial — orienta hacia el estilo clásico (segunda mitad del siglo XVIII); podría tratarse de un movimiento de cuarteto de tipo haydniano. »",

  entrainH2: "Entrenamiento",
  methodeH3: "El método en breve",
  methodeP:
    "1) primera escucha, tabla completa (la caja de herramientas); 2) escuchas siguientes, parámetros decisivos; 3) identificar formas y cadencias; 4) haz de indicios → hipótesis de período; 5) redactar según el plan: <strong>describir → identificar → situar</strong>.",
  exercicesH3: "Ejercicios 1-2 — Mini-comentarios por redactar",
  exercices: [
    {
      titre: "Ejercicio 1 — Mini-comentario por redactar (descripción dada)",
      description:
        "<em>Descripción del fragmento:</em> conjunto de cuerdas con clave; un bajo en corcheas regulares avanza sin tregua; encima, dos violines dialogan en imitación; los acordes cambian en cada tiempo; matices por bloques, sin crescendo; una secuencia descendente vuelve varias veces antes de una cadencia conclusiva.",
      consigne:
        "<em>Consigna:</em> redacte un comentario de 120-160 palabras según el plan de la sección « El plan » (descripción → identificación → hipótesis).",
      corrige:
        "« El fragmento asocia un conjunto de cuerdas a un clave que realiza el basso continuo, sostenido por un bajo en corcheas regulares — una marcha obstinada típica. La textura es polifónica: dos violines dialogan en imitación sobre el continuo. El lenguaje es tonal, el ritmo armónico rápido y regular (un acorde por tiempo); una marcha armónica descendente, repetida en secuencia, conduce a una cadencia perfecta conclusiva. Los matices proceden por planos opuestos, en terrazas, sin transición progresiva. Este haz de indicios — basso continuo con clave, imitación, secuencias, ritmo armónico rápido, dinámicas en terrazas — orienta claramente hacia el período barroco (primera mitad del siglo XVIII). La plantilla y el diálogo concertante sugieren un movimiento rápido de concierto para cuerdas, incluso de concerto grosso. »",
    },
    {
      titre: "Ejercicio 2 — Mini-comentario por redactar (descripción dada)",
      description:
        "<em>Descripción del fragmento:</em> piano solo; tempo lento y fluctuante; una melodía amplia en la mano derecha sobre arpegios anchos de la mano izquierda; armonía rica en cromatismos, resoluciones retardadas, una modulación hacia un tono lejano; gran subida de intensidad y luego caída; la frase inicial vuelve, ornamentada, al final.",
      consigne: "<em>Consigna:</em> mismo ejercicio, 120-160 palabras.",
      corrige:
        "« Pieza para piano solo, de carácter lírico, en un tempo lento animado por el rubato. La textura es la de una melodía acompañada: un canto amplio en la mano derecha se despliega sobre anchos arpegios. El lenguaje es tonal pero fuertemente cromático: apoyaturas expresivas, resoluciones retardadas, y una modulación hacia un tono lejano en el centro del fragmento. Las frases desbordan la cuadratura regular y culminan en un largo crescendo antes de caer; el retorno final de la frase inicial, ornamentada, dibuja un corte ternario A-B-A'. Este haz — piano solo, lirismo, cromatismo, rubato, forma ternaria de pieza breve — orienta hacia el romanticismo (siglo XIX); podría tratarse de una pieza de carácter, de tipo nocturno. »",
    },
  ],
  voirCorrige: "Ver el modelo de respuesta",
  masquerCorrige: "Ocultar el modelo",
  corrigeLabel: "Modelo de respuesta",

  drillCadH3: "Ejercicio 3 — Drill: reconocer las cadencias a ciegas",
  drillCadConsigne:
    "El botón toca, <strong>sin mostrar la partitura</strong>, una de las cuatro progresiones de la tabla anterior (perfecta, plagal, semicadencia, rota), en orden aleatorio. Para cada una: 1) ¿cerrada o abierta? 2) ¿el bajo recae en la tónica? 3) nombre la cadencia y compruebe. Repita la serie hasta lograr cuatro de cuatro. Puntos de control: la rota se delata por el bajo Sol→La; la plagal por la ausencia de sensible y el soprano inmóvil.",
  drillModH3: "Ejercicio 4a — Drill: ¿dominante o relativo?",
  drillModConsigne:
    "El botón toca, a ciegas, uno de los dos trayectos de modulación: diga si conduce a la <strong>dominante</strong> (llegada mayor, Fa♯) o al <strong>relativo menor</strong> (llegada menor, Sol♯); repita alternando.",
  drillRytH3: "Ejercicio 4b — Drill: ¿ritmo armónico lento o rápido?",
  drillRytConsigne:
    "El botón toca una de las dos versiones de la progresión I – vi – IV – V – I: cuente los cambios de acorde por compás y formule la respuesta con el vocabulario del comentario (« ritmo armónico lento: un cambio por compás » / « rápido: cuatro por compás »). Recuerde: en igualdad de condiciones, un perfil rápido y regular orienta más bien hacia el barroco, un perfil lento hacia el estilo clásico.",
  drillPlayBtn: "Tocar un ejemplo al azar",
  drillReplayBtn: "Volver a escuchar",
  drillAnswerPrompt: "Su respuesta:",
  drillCorrect: "¡Exacto!",
  drillWrong: "No — era:",
  drillResetBtn: "Poner el marcador a cero",
  cadenceNames: ["Cadencia perfecta", "Cadencia plagal", "Semicadencia", "Cadencia rota"],
  modulationNames: ["Hacia la dominante (llegada mayor, Fa♯)", "Hacia el relativo menor (llegada menor, Sol♯)"],
  rythmeNames: ["Ritmo armónico lento (un cambio por compás)", "Ritmo armónico rápido (cuatro por compás)"],

  quizH3: "Quiz — 10 preguntas",
  questions: [
    {
      q: "Oye: basso continuo con clave, textura polifónica, motricidad rítmica regular. ¿Período probable?",
      opts: ["Renacimiento", "Barroco", "Clásico", "Romántico"],
      a: 1,
      fb: "El basso continuo con clave es el marcador barroco por excelencia (h. 1600-1750).",
    },
    {
      q: "Oye: melodía acompañada, cuadraturas de 4+4, cadencias frecuentes y claras, orquesta moderada. ¿Período probable?",
      opts: ["Barroco", "Clásico", "Impresionista", "Siglo XX"],
      a: 1,
      fb: "Cuadratura regular + claridad cadencial + melodía acompañada = haz clásico típico.",
    },
    {
      q: "Oye: acordes paralelos sin resolver, escala de tonos enteros, vaguedad métrica, timbre-color. ¿Período probable?",
      opts: ["Renacimiento", "Clásico", "Impresionista", "Barroco"],
      a: 2,
      fb: "Paralelismos, modos y escala de tonos enteros son los marcadores impresionistas (Debussy — curso 21).",
    },
    {
      q: "En Do mayor, oye V7 y luego un acorde de La menor en vez del Do esperado. ¿Qué cadencia?",
      opts: ["Perfecta", "Plagal", "Semicadencia", "Rota"],
      a: 3,
      fb: "V7 → vi: la resolución prometida se frustra — cadencia rota (curso 4).",
    },
    {
      q: "La frase se interrumpe en el acorde de Sol (V) en Do mayor, sensación de suspensión. ¿Qué cadencia?",
      opts: ["Semicadencia", "Perfecta", "Rota", "Plagal"],
      a: 0,
      fb: "Detenerse en V deja la frase abierta: semicadencia, la « coma » musical.",
    },
    {
      q: "Encadenamiento IV → I, sin sensible, soprano inmóvil en la tónica. ¿Qué cadencia?",
      opts: ["Perfecta", "Plagal", "Rota", "Semicadencia"],
      a: 1,
      fb: "IV → I es la cadencia plagal, la conclusión « Amén » sin sensible.",
    },
    {
      q: "Un mismo tema vuelve por tercera vez idéntico, en el tono principal, entre episodios contrastantes. ¿Forma probable?",
      opts: ["Forma sonata", "Tema y variaciones", "Rondó", "Binaria"],
      a: 2,
      fb: "El retorno repetido de un estribillo en el tono principal es la firma del rondó (curso 28).",
    },
    {
      q: "Oye la misma frase melódica entrar sucesivamente en cada voz, apilándose. ¿Forma probable?",
      opts: ["Fuga", "Rondó", "Ternaria", "Variaciones"],
      a: 0,
      fb: "Las entradas sucesivas del sujeto son el indicio casi infalible de la fuga.",
    },
    {
      q: "¿Qué formulación pertenece al registro esperado del comentario?",
      opts: [
        "« Suena lleno y rico »",
        "« La textura es homofónica y densa »",
        "« Es bonito pero triste »",
        "« Parece Chopin, así que es romántico »",
      ],
      a: 1,
      fb: "Vocabulario técnico y descriptivo; la última opción invierte el método (identificar antes de describir).",
    },
    {
      q: "Un fragmento le evoca de inmediato un compositor preciso. ¿Qué hace primero?",
      opts: [
        "Escribirlo enseguida",
        "Describir primero los parámetros, guardar el nombre para la conclusión en condicional",
        "Buscar el título exacto",
        "Construir la descripción en torno a ese nombre",
      ],
      a: 1,
      fb: "Describir → identificar → situar: la intuición se verifica con los indicios, nunca al revés.",
    },
  ],

  listenBtn: "Escuchar",
};

// ════════════════════════════════════════════════════════════════════════════
// IT
// ════════════════════════════════════════════════════════════════════════════

const it: Cours45Locale = {
  maitreConcept: "Il commento d'ascolto — descrivere, identificare, collocare",
  maitreAnecdote:
    "Professore al Conservatorio di Parigi dal 1941 al 1978, Olivier Messiaen vi tenne una classe di analisi che fu il laboratorio d'ascolto più celebre del secolo: vi si analizzava tutto — canto gregoriano, Mozart, Debussy, ritmi indù, canti d'uccelli — partitura e orecchio insieme. Boulez, Xenakis o Stockhausen vi passarono. La sua disciplina: prima ascoltare, poi nominare con precisione, infine concludere con prudenza.",
  maitreLesson:
    "La prova del commento d'ascolto valuta un metodo, non una discoteca interiore: una descrizione gerarchizzata e argomentata vale sempre più di un nome di compositore lanciato a caso.",

  honneteTitle: "Come lavorare su questo corso",
  honneteBody:
    "<strong>Harmonia non contiene alcuna registrazione.</strong> Per ragioni di diritti, la piattaforma non dispone di alcuna fonoteca: tutto ciò che ascolterete qui è suonato da un <strong>pianoforte di sintesi</strong>, a partire da partiture incise. Questo corso vi dà quindi due cose: la <strong>metodologia completa</strong> del commento d'ascolto (la griglia d'analisi, i marcatori stilistici, il piano, il vocabolario — tutto l'attrezzario intellettuale della prova) e l'<strong>allenamento dei parametri realmente esercitabili al pianoforte di sintesi</strong>: cadenze, modi maggiore/minore, modulazioni, ritmo armonico, testure, forme. In compenso, l'identificazione dei <strong>timbri</strong> e dell'<strong>orchestrazione</strong> su opere reali non può esercitarsi qui: appartiene all'ascolto in classe e alla vostra frequentazione personale del repertorio (concerti, radio, piattaforme). Questo corso è il metodo e la palestra armonica — non un sostituto dell'ascolto delle opere.",

  introH2: "Che cos'è il commento d'ascolto?",
  introP1:
    "Il commento d'ascolto è una prova regina dei percorsi francesi: all'università (laurea in musicologia, CAPES/agrégation), in conservatorio (DEM di analisi — si veda il corso 26 per l'altro versante dell'esame, la scrittura) e in numerosi concorsi. Il principio: vi si fa ascoltare un estratto di un'opera, <strong>il più delle volte a voi sconosciuta</strong>, da due a quattro volte; dovete produrne un commento strutturato che identifichi l'<strong>organico</strong>, la <strong>testura</strong>, il <strong>linguaggio</strong>, la <strong>forma</strong>, il <strong>genere probabile</strong>, e che <strong>collochi l'opera</strong> in un periodo stilistico — il tutto argomentato da ciò che avete realmente udito.",
  introP2:
    "Ciò che il correttore attende <strong>non</strong> è un catalogo di effetti (« ci sono i violini, poi è forte, poi c'è un flauto ») né una scommessa sul titolo. Attende una descrizione <strong>gerarchizzata</strong> (prima i parametri decisivi), <strong>argomentata</strong> (ogni affermazione poggiata su un indizio udibile) e <strong>prudente</strong> (un'ipotesi di datazione, non una certezza proclamata). Da qui la regola d'oro del corso, in quest'ordine e mai nell'altro:",
  regleOr:
    "<strong>Descrivere → identificare → collocare.</strong><br/>Si descrive prima ciò che si sente (parametri oggettivi), se ne identificano poi gli elementi tecnici (cadenze, forma, linguaggio), e si propone infine una collocazione storica argomentata. <strong>Mai il contrario</strong>: indovinare subito un titolo o un compositore, poi piegare la descrizione per farla combaciare, è l'errore metodologico più sanzionato — e il più frequente.",
  introP3:
    "Un estratto ben descritto ma prudentemente collocato vale sempre più di un nome azzeccato per fortuna: la prova valuta un <strong>procedimento</strong>, non una discoteca interiore.",

  grilleH2: "La cassetta degli attrezzi: che cosa ascoltare?",
  grilleP1:
    "Prima di ogni tecnica, serve una <strong>griglia di parametri</strong>: la check-list mentale che si scorre fin dal primo ascolto. Eccola — è LA tabella di riferimento del corso, da sapere a memoria. Al primo ascolto si passa in rassegna tutto; agli ascolti successivi si approfondiscono i parametri decisivi per l'estratto dato.",
  grilleCaption: "La griglia dei parametri d'ascolto — da sapere a memoria",
  grilleHeaders: ["Parametro", "Domande da porsi", "Vocabolario chiave"],
  grilleRows: [
    {
      param: "<strong>Organico / timbro</strong>",
      questions: "Voci o strumenti? Quanti? Famiglie (archi, fiati, tastiere)? Solista + accompagnamento?",
      vocab: "orchestra sinfonica, formazione da camera, <em>a cappella</em>, basso continuo, organico misto",
    },
    {
      param: "<strong>Testura</strong>",
      questions: "Una sola linea? Tutte le voci insieme? Linee indipendenti? Una melodia che domina?",
      vocab: "<strong>monodia</strong>, <strong>omofonia</strong> (omoritmia), <strong>polifonia / contrappunto</strong> (imitazione), <strong>melodia accompagnata</strong>",
    },
    {
      param: "<strong>Linguaggio</strong>",
      questions: "Si sente una tonica? Il linguaggio è modale, tonale, atonale? Consonante o dissonante?",
      vocab: "modale, tonale (maggiore/minore), cromatico, atonale; consonanza, dissonanza, cluster",
    },
    {
      param: "<strong>Armonia</strong>",
      questions: "Si sentono cadenze? Gli accordi cambiano in fretta o lentamente? Ci sono modulazioni?",
      vocab: "cadenza perfetta / plagale / d'inganno / semicadenza (corso 4), <strong>ritmo armonico</strong>, modulazione",
    },
    {
      param: "<strong>Forma</strong>",
      questions: "Frasi regolari? Sezioni che ritornano? Contrasti?",
      vocab: "quadratura, periodo, ritornello/strofa, ripresa, A-B-A, sviluppo (corsi 17 e 28)",
    },
    {
      param: "<strong>Ritmo / tempo / metrica</strong>",
      questions: "Binario o ternario? Tempo stabile o fluttuante? Pulsazione danzante?",
      vocab: "misura a 2, 3, 4 tempi; rubato; ostinato; sincope; carattere di danza",
    },
    {
      param: "<strong>Dinamiche / articolazione</strong>",
      questions: "Dinamiche a terrazze o progressive? Legato, staccato? Grandi crescendo?",
      vocab: "dinamiche a terrazze, crescendo/decrescendo, accenti, contrasti dinamici",
    },
    {
      param: "<strong>Testo (se c'è)</strong>",
      questions: "Lingua? Sacro o profano? Rapporto musica-testo (sillabico, melismatico)?",
      vocab: "liturgico, madrigalismo, sillabico, melismatico, recitativo / aria",
    },
  ],
  grilleP2:
    "Due consigli d'uso. Anzitutto <strong>gerarchizzare</strong>: non tutti i parametri parlano allo stesso modo per un estratto dato — una fuga per tastiera si gioca su testura e forma, un lied su testo e armonia. Poi <strong>incrociare</strong>: è il <strong>fascio di indizi</strong> convergenti che autorizza un'ipotesi di periodo (sezione seguente), mai un indizio isolato.",

  periodesH2: "Collocare un periodo: i marcatori stilistici",
  periodesP1:
    "Ecco la tabella di sintesi dei marcatori udibili per periodo. Condensa il corso 29 (<em>Analisi comparata del repertorio</em> — la stessa melodia armonizzata cinque volte) e i corsi 20/21 (firme dei compositori). <strong>Avvertenza metodologica</strong>: un marcatore è un <strong>indizio, non una prova</strong>. Il basso continuo firma il barocco, ma un compositore del Novecento può fare il pastiche del barocco (cfr. corso 41); il cromatismo denso esiste in Gesualdo (fine Cinquecento) come in Wagner. È la <strong>convergenza</strong> di più marcatori che fonda l'ipotesi — e la si enuncia sempre con prudenza (« l'insieme degli indizi orienta verso… »).",
  periodesCaption: "Marcatori udibili per periodo — indizi, mai prove",
  periodesHeaders: ["Periodo", "Organico tipico", "Testura", "Armonia / linguaggio", "Forme e gesti", "Indizi immediati"],
  periodesRows: [
    {
      periode: "<strong>Rinascimento</strong> (c. 1450-1600)",
      effectif: "Voci <em>a cappella</em> (messa, mottetto, chanson, madrigale); consort di strumenti",
      texture: "Polifonia imitativa equilibrata, senza gerarchia di voci",
      harmonie: "<strong>Modale</strong>, consonante; dissonanza rigorosamente regolata (ritardi); cadenze modali",
      formes: "Forme legate al testo; nessuna quadratura di danza nel sacro",
      indices: "Voci sole, imitazione continua, assenza di netta sensazione tonica-dominante",
    },
    {
      periode: "<strong>Barocco</strong> (c. 1600-1750)",
      effectif: "<strong>Basso continuo</strong> (clavicembalo, organo + basso); orchestra d'archi, concerto solista/<em>grosso</em>; voce + continuo",
      texture: "Polifonia (fuga) o melodia + continuo; basso molto attivo",
      harmonie: "<strong>Tonale</strong>; sequenze e progressioni armoniche; ritmo armonico spesso rapido e regolare",
      formes: "Fuga, suite di danze, concerto (ritornello), recitativo/aria; ornamentazione abbondante",
      indices: "<strong>Clavicembalo udibile</strong>, basso ostinato in movimento, dinamiche a terrazze, motorica ritmica",
    },
    {
      periode: "<strong>Classico</strong> (c. 1750-1800)",
      effectif: "Orchestra moderata (archi + legni a 2), quartetto d'archi, fortepiano",
      texture: "<strong>Melodia accompagnata</strong> dominante (basso albertino)",
      harmonie: "Tonale chiaro e diatonico; <strong>cadenze frequenti e ben udibili</strong>; ritmo armonico piuttosto lento",
      formes: "<strong>Quadrature di 4 + 4</strong>, periodo antecedente/conseguente, forma-sonata, minuetto, rondò",
      indices: "Fraseggio regolare « domanda/risposta », chiarezza, contrasti tematici controllati",
    },
    {
      periode: "<strong>Romantico</strong> (XIX sec.)",
      effectif: "Grande orchestra (ottoni, arpa), pianoforte moderno, lied voce + pianoforte",
      texture: "Melodia accompagnata arricchita; testure dense",
      harmonie: "<strong>Cromatismo crescente</strong>, modulazioni lontane, appoggiature espressive",
      formes: "<strong>Grandi frasi</strong> che superano la quadratura, forme cicliche, pezzo di carattere, poema sinfonico",
      indices: "Respiro lirico, rubato, grandi crescendo, armonia che « ritarda » la risoluzione",
    },
    {
      periode: "<strong>Post-romantico / impressionista</strong> (c. 1880-1920)",
      effectif: "Orchestra molto nutrita o pianoforte solo; timbro trattato come colore",
      texture: "Campiture, piani sonori sovrapposti",
      harmonie: "<strong>Parallelismi di accordi</strong>, modi, <strong>scala per toni interi</strong>, pentatonica, accordi arricchiti (none, undicesime) non risolti",
      formes: "Forme libere, arco, pezzo breve evocativo (titolo-immagine)",
      indices: "La cadenza perde la sua forza direzionale; colore prima della direzione; sfocatura metrica",
    },
    {
      periode: "<strong>Novecento / contemporaneo</strong> (dopo il 1910)",
      effectif: "Organici esplosi: percussioni, pianoforte percussivo, ensemble inediti, elettronica",
      texture: "Tutte le testure, comprese masse e puntillismo",
      harmonie: "<strong>Atonalità</strong>, cluster, politonalità, serie (corso 44); dissonanza emancipata",
      formes: "Forme a blocchi, collage, opere aperte; ritmi irregolari, misure cangianti",
      indices: "Assenza di tonica percepibile, aggregati, violenza o rarefazione del suono",
    },
  ],
  periodesP2:
    "Complemento di metodo: quando due periodi restano in bilico (classico o primo romantico? impressionista o post-romantico?), lo si <strong>dice</strong> nel commento e si dà il criterio che farebbe pendere la bilancia — è valorizzato, non penalizzato.",

  formesH2: "Riconoscere le forme a orecchio",
  formesP1:
    "Allo scritto, la forma si vede sulla partitura (corsi 17 e 28); all'ascolto, la forma si sente attraverso due segnali: <strong>ciò che ritorna</strong> (identico o variato) e <strong>ciò che contrasta</strong> (nuovo tema, nuova tonalità, nuova testura). Ecco le grandi forme ricondotte ai loro indizi uditivi:",
  formesList: [
    "<strong>Binaria (A-B, spesso con riprese)</strong>: due parti; la prima si allontana (arresto sospensivo o cadenza in un altro tono), la seconda ritorna. Indizio: la « respirazione » mediana, spesso sottolineata da una ripresa.",
    "<strong>Ternaria (A-B-A)</strong>: un inizio, un centro contrastante (tono, carattere, testura), poi il <strong>ritorno riconoscibile dell'inizio</strong>. Indizio: sensazione di « ritorno a casa » dopo una deviazione.",
    "<strong>Rondò (A-B-A-C-A…)</strong>: un <strong>ritornello</strong> che ritorna identico nel tono principale, tra strofe contrastanti. Indizio: più di due ritorni dello stesso tema = probabile rondò.",
    "<strong>Tema e variazioni</strong>: una stessa quadratura armonica e fraseologica ripetuta, la cui superficie cambia a ogni giro (ornamentazione, modo, ritmo). Indizio: la « lunghezza di frase » ritorna identica mentre l'abito cambia.",
    "<strong>Forma-sonata</strong>: udita come <strong>drammaturgia della tensione</strong> — esposizione (due zone tematiche, la seconda in un altro tono), sviluppo (instabilità: frammenti, modulazioni rapide, tensione), ripresa (ritorno dell'inizio, ma questa volta tutto resta nel tono principale: sensazione di risoluzione). Indizio: il ritorno del tema iniziale <em>dopo</em> una zona di massima instabilità.",
    "<strong>Fuga</strong>: <strong>entrate successive</strong> dello stesso soggetto in ciascuna voce, unico indizio quasi infallibile; poi alternanza di episodi e ritorni del soggetto. Indizio: si sente « la stessa frase » entrare una voce dopo l'altra, impilandosi.",
  ],
  illu1H3: "Illustrazione 1 — Periodo antecedente/conseguente (Do maggiore, 8 misure)",
  illu1P:
    "Semibrevi, un accordo per misura, misura in 4/4. L'antecedente pone una <strong>domanda</strong> (semicadenza), il conseguente <strong>risponde</strong> (cadenza perfetta) — stesso inizio, due finali diversi.",
  illu1Chords:
    "Misure 1-4: I – IV – I6/4 – <strong>V</strong> (semicadenza) · Misure 5-8: I – IV – <strong>V7</strong> – <strong>I</strong> (cadenza perfetta)",
  illu1Ecoute:
    "<strong>Da sentire</strong>: alla misura 4, la melodia resta sospesa su <strong>Ré5</strong> (2º grado) sopra l'accordo di Sol — la frase è aperta; alla misura 8, si posa su <strong>Do5</strong> (tonica) sopra l'accordo di Do — la frase è chiusa. È questo contrasto aperto/chiuso che struttura tutta la fraseologia classica (corso 17).",
  illu2H3: "Illustrazione 2 — Mini-rondò (schema A-B-A-C-A)",
  illu2P1:
    "<strong>Ritornello A</strong> (Do maggiore, 4 misure, monodia, semiminime poi minime finali) — inciso e riproducibile qui sotto:",
  illu2P2:
    "<strong>Strofa B</strong>: 4 misure contrastanti in <strong>Sol maggiore</strong> (appare il Fa♯). <strong>Strofa C</strong>: 4 misure in <strong>La minore</strong> (appare il Sol♯). Tra ogni strofa, il ritornello <strong>ritorna identico, nel tono principale</strong>: è proprio questo ritorno letterale che l'orecchio deve imparare a individuare — quando sentite questo tema per la terza volta, sapete di essere in un rondò.",

  harmH2: "Sentire l'armonia: l'allenamento possibile qui",
  harmP1:
    "È qui che Harmonia è nel suo elemento: tutto ciò che segue si suona al pianoforte di sintesi a partire dalle note esatte incise qui sotto. Questi riflessi — cadenze, modo, modulazione, ritmo armonico, testura — sono il <strong>cuore armonico</strong> del commento d'ascolto, e si acquisiscono con la ripetizione.",
  cadH3: "Le quattro cadenze (ripasso del corso 4, in Do maggiore, SATB)",
  cadLabels: [
    { nom: "<strong>Perfetta</strong> (conclusiva)", accords: "I – IV – V7 – I" },
    { nom: "<strong>Plagale</strong> (« Amen »)", accords: "I – IV – I" },
    { nom: "<strong>Semicadenza</strong> (sospensiva)", accords: "I – IV – <strong>V</strong>" },
    { nom: "<strong>D'inganno</strong> (falsa risoluzione)", accords: "I – V7 – <strong>vi</strong>" },
  ],
  cadEcoute:
    "<strong>Da sentire</strong>: la perfetta <strong>chiude la porta</strong> (V7 → I, soprano sulla tonica); la plagale chiude con dolcezza, senza sensibile, soprano immobile su Do; la semicadenza <strong>lascia la porta aperta</strong> (ci si ferma su V); quella d'inganno <strong>promette I e dà vi</strong> — il basso sale Sol→La invece di ricadere su Do, e la terza di vi è raddoppiata (Do al soprano e al tenore), conformemente alla regola.",
  modeH3: "Maggiore / minore: stessa progressione, due modi",
  modeP1:
    "La stessa marcia I–IV–V7–I, questa volta in <strong>Do minore</strong> (confrontare a orecchio con la versione maggiore qui sopra):",
  modeP2:
    "Il <strong>Si bequadro</strong> è la sensibile del minore armonico: la dominante resta maggiore. L'orecchio deve imparare a nominare la differenza di colore fin dal primo accordo (Mi vs Mi♭).",
  modeMajBtn: "Versione maggiore (I–IV–V7–I)",
  modeMinBtn: "Versione minore (i–iv–V7–i)",
  modulH3: "Modulazione: verso la dominante o verso il relativo?",
  modulP1:
    "Due tragitti in partenza dallo stesso Do maggiore — il gioco consiste nell'identificare <strong>quale nota estranea appare</strong>.",
  modulDomTitle:
    "<strong>Verso la dominante (Do → Sol maggiore)</strong> — segnale: il <strong>Fa♯</strong>. Cinque accordi: Do (I) – Fa (IV) – Sol (perno: V di Do = I di Sol) – Ré7 (V7 di Sol) – Sol (nuova tonica).",
  modulRelTitle:
    "<strong>Verso il relativo (Do → La minore)</strong> — segnale: il <strong>Sol♯</strong>. Tre accordi: Do (I) – Mi7 (V7 di La minore) – La minore (nuova tonica).",
  modulEcoute:
    "<strong>Da sentire</strong>: verso la dominante, si resta <strong>in maggiore</strong>, un tono più « luminoso » di un diesis; verso il relativo, la cadenza d'arrivo è <strong>minore</strong> — stessa armatura, colore incupito. Riflesso: « nuova sensibile udita = verso dove conduce? »",
  rythmeH3: "Il ritmo armonico: veloce o lento?",
  rythmeP1:
    "Progressione I – vi – IV – V – I in Do maggiore. <strong>Versione lenta</strong>: un accordo per semibreve (un cambio per misura). <strong>Versione rapida</strong>: la stessa progressione in semiminime (quattro cambi per misura), suonata due volte. Il contenuto armonico è identico; cambia solo la <strong>velocità di rinnovo degli accordi</strong>.",
  rythmeP2:
    "Esercizio d'ascolto: contare i cambi di accordo per misura — un ritmo armonico rapido e regolare orienta piuttosto verso il barocco, un ritmo lento con cadenze distanziate piuttosto verso lo stile classico (si vedano i marcatori stilistici).",
  rythmeLentBtn: "Versione lenta",
  rythmeRapideBtn: "Versione rapida (suonata due volte)",
  textureH3: "Sentire un cambiamento di testura",
  textureP1:
    "Uno stesso tema di quattro note (semiminime): <strong>Do5 – Ré5 – Mi5 – Do5</strong>, presentato sotto quattro testure:",
  textureLabels: [
    { titre: "Monodia", desc: "il tema solo, senza accompagnamento." },
    {
      titre: "Omofonia",
      desc: "il tema armonizzato nota contro nota in SATB — Do5 (I: Sol4/Mi4/Do3), Ré5 (V: Sol4/Si3/Sol2), Mi5 (I: Sol4/Do4/Do3), Do5 (I: Sol4/Mi4/Do3).",
    },
    {
      titre: "Polifonia (canone)",
      desc: "voce 1: m. 1: Do5–Ré5–Mi5–Do5, m. 2: Mi5–Fa5–Sol5 (minima); voce 2, che entra una misura dopo all'ottava inferiore. (Sì, è l'incipit di <em>Frère Jacques</em> — il canone più udibile che esista.)",
    },
    {
      titre: "Melodia accompagnata",
      desc: "il tema in minime al soprano, basso albertino in crome alla mano sinistra — sotto Do5 e Mi5: Do3–Sol3–Mi3–Sol3; sotto Ré5: Sol2–Ré3–Si2–Ré3.",
    },
  ],
  textureP2:
    "Saper nominare la testura in un solo ascolto è uno dei gesti più redditizi della prova: è spesso il primo indizio di periodo.",

  planH2: "Costruire il commento: piano e vocabolario",
  planP1:
    "L'elaborato — scritto (da 2 a 4 paragrafi) od orale (da 2 a 3 minuti) — segue un piano stabile:",
  planSteps: [
    "<strong>Introduzione — visione d'insieme</strong>: organico, carattere globale, tempo, una frase di inquadramento (« Estratto per pianoforte solo, di carattere meditativo, tempo lento e rubato »). Ancora nessuna ipotesi storica.",
    "<strong>Sviluppo — i parametri, organizzati</strong>: forma percepita (sezioni, ritorni, quadrature), linguaggio e armonia (tonale/modale/atonale, cadenze udite, modulazioni, ritmo armonico), testura e sua evoluzione, elementi ritmici e dinamici salienti. Si <strong>gerarchizza</strong>: prima ciò che è decisivo per quell'estratto.",
    "<strong>Conclusione — l'ipotesi argomentata</strong>: periodo e genere probabili, enunciati come un fascio di indizi (« la melodia accompagnata, le quadrature regolari e le cadenze frequenti orientano verso lo stile classico; potrebbe trattarsi di un movimento lento di sonata »). Un nome di compositore arriva — eventualmente — solo qui, e sempre al condizionale.",
  ],
  registreBox:
    "<strong>Il registro di vocabolario</strong>: si scrive « testura omofonica », non « suona pieno »; « cadenza sospensiva », non « si ferma in modo strano »; « ritmo armonico lento », non « gli accordi si trascinano ». Il vocabolario tecnico non è un ornamento: è la prova che avete identificato, non solo percepito.",
  piegesBox:
    "<strong>Le trappole classiche</strong>: (1) <strong>indovinare prima il compositore</strong> e selezionare poi gli indizi convenienti; (2) il <strong>catalogo senza gerarchia</strong> — elencare tutto man mano senza far emergere l'essenziale; (3) <strong>confondere genere e forma</strong> — la « sonata » è un genere (un'opera per uno o due strumenti in più movimenti), la « forma-sonata » è il piano di un movimento; un concerto può contenere una forma-sonata; (4) affermare senza indizio (« è Mozart ») invece di argomentare.",
  modeleH3: "Mini-commento modello (~150 parole)",
  modeleDesc:
    "Estratto descritto: quartetto d'archi; tema cantabile al primo violino su accompagnamento regolare; frasi di quattro misure; arresto sospensivo a metà percorso, conclusione affermata; breve passaggio centrale più instabile, poi ritorno del tema iniziale.",
  modeleQuote:
    "« L'estratto fa sentire un quartetto d'archi: il primo violino espone un tema cantabile su un accompagnamento omoritmico delle altre tre voci — testura di melodia accompagnata. Il discorso è chiaramente tonale e diatonico: le frasi, in quadrature regolari di quattro misure, formano un periodo — una semicadenza sospende la prima frase, una cadenza perfetta conclude la seconda. Un passaggio centrale modula e frammenta il tema, creando un'instabilità presto risolta dal ritorno del tema iniziale nel tono principale, il che suggerisce un impianto ternario, se non una forma-sonata abbreviata. Il ritmo armonico è posato, le cadenze frequenti e udibili. Questo fascio di indizi — organico di quartetto, melodia accompagnata, quadrature, chiarezza cadenzale — orienta verso lo stile classico (seconda metà del Settecento); potrebbe trattarsi di un movimento di quartetto di tipo haydniano. »",

  entrainH2: "Allenamento",
  methodeH3: "Il metodo in breve",
  methodeP:
    "1) primo ascolto, griglia completa (la cassetta degli attrezzi); 2) ascolti successivi, parametri decisivi; 3) identificare forme e cadenze; 4) fascio di indizi → ipotesi di periodo; 5) redigere secondo il piano: <strong>descrivere → identificare → collocare</strong>.",
  exercicesH3: "Esercizi 1-2 — Mini-commenti da redigere",
  exercices: [
    {
      titre: "Esercizio 1 — Mini-commento da redigere (descrizione data)",
      description:
        "<em>Descrizione dell'estratto:</em> ensemble d'archi con clavicembalo; un basso in crome regolari avanza senza tregua; sopra, due violini dialogano in imitazione; gli accordi cambiano a ogni tempo; dinamiche a blocchi, senza crescendo; una sequenza discendente ritorna più volte prima di una cadenza conclusiva.",
      consigne:
        "<em>Consegna:</em> redigete un commento di 120-160 parole secondo il piano della sezione « Il piano » (descrizione → identificazione → ipotesi).",
      corrige:
        "« L'estratto associa un ensemble d'archi a un clavicembalo che realizza il basso continuo, sorretto da un basso in crome regolari — una marcia ostinata tipica. La testura è polifonica: due violini dialogano in imitazione sopra il continuo. Il linguaggio è tonale, il ritmo armonico rapido e regolare (un accordo per tempo); una progressione armonica discendente, ripetuta in sequenza, conduce a una cadenza perfetta conclusiva. Le dinamiche procedono per piani opposti, a terrazze, senza transizione progressiva. Questo fascio di indizi — basso continuo al clavicembalo, imitazione, sequenze, ritmo armonico rapido, dinamiche a terrazze — orienta nettamente verso il periodo barocco (prima metà del Settecento). L'organico e il dialogo concertante suggeriscono un movimento vivace di concerto per archi, se non di concerto grosso. »",
    },
    {
      titre: "Esercizio 2 — Mini-commento da redigere (descrizione data)",
      description:
        "<em>Descrizione dell'estratto:</em> pianoforte solo; tempo lento e fluttuante; una melodia ampia alla mano destra su larghi arpeggi della mano sinistra; armonia ricca di cromatismi, risoluzioni ritardate, una modulazione verso un tono lontano; grande ascesa d'intensità poi ricaduta; la frase iniziale ritorna, ornata, alla fine.",
      consigne: "<em>Consegna:</em> stesso esercizio, 120-160 parole.",
      corrige:
        "« Pezzo per pianoforte solo, di carattere lirico, in un tempo lento animato dal rubato. La testura è quella di una melodia accompagnata: un canto ampio alla mano destra si dispiega su larghi arpeggi. Il linguaggio è tonale ma fortemente cromatico: appoggiature espressive, risoluzioni ritardate, e una modulazione verso un tono lontano al centro dell'estratto. Le frasi superano la quadratura regolare e culminano in un lungo crescendo prima di ricadere; il ritorno finale della frase iniziale, ornata, disegna un impianto ternario A-B-A'. Questo fascio — pianoforte solo, lirismo, cromatismo, rubato, forma ternaria di pezzo breve — orienta verso il romanticismo (XIX secolo); potrebbe trattarsi di un pezzo di carattere, di tipo notturno. »",
    },
  ],
  voirCorrige: "Vedi la soluzione modello",
  masquerCorrige: "Nascondi la soluzione",
  corrigeLabel: "Soluzione modello",

  drillCadH3: "Esercizio 3 — Drill: riconoscere le cadenze alla cieca",
  drillCadConsigne:
    "Il pulsante suona, <strong>senza mostrare la partitura</strong>, una delle quattro progressioni della tabella qui sopra (perfetta, plagale, semicadenza, d'inganno), in ordine casuale. Per ciascuna: 1) chiusa o aperta? 2) il basso ricade sulla tonica? 3) nominate la cadenza, poi verificate. Rifate la serie fino a quattro identificazioni su quattro. Punti di controllo: quella d'inganno si tradisce con il basso Sol→La; la plagale con l'assenza di sensibile e il soprano immobile.",
  drillModH3: "Esercizio 4a — Drill: dominante o relativo?",
  drillModConsigne:
    "Il pulsante suona, alla cieca, uno dei due tragitti di modulazione: dite se conduce alla <strong>dominante</strong> (arrivo maggiore, Fa♯) o al <strong>relativo minore</strong> (arrivo minore, Sol♯); ricominciate alternando.",
  drillRytH3: "Esercizio 4b — Drill: ritmo armonico lento o rapido?",
  drillRytConsigne:
    "Il pulsante suona una delle due versioni della progressione I – vi – IV – V – I: contate i cambi di accordo per misura e formulate la risposta nel vocabolario del commento (« ritmo armonico lento: un cambio per misura » / « rapido: quattro per misura »). Promemoria: a parità di condizioni, un profilo rapido e regolare orienta piuttosto verso il barocco, un profilo lento verso lo stile classico.",
  drillPlayBtn: "Suona un esempio a caso",
  drillReplayBtn: "Riascolta",
  drillAnswerPrompt: "La vostra risposta:",
  drillCorrect: "Esatto!",
  drillWrong: "No — era:",
  drillResetBtn: "Azzera il punteggio",
  cadenceNames: ["Cadenza perfetta", "Cadenza plagale", "Semicadenza", "Cadenza d'inganno"],
  modulationNames: ["Verso la dominante (arrivo maggiore, Fa♯)", "Verso il relativo minore (arrivo minore, Sol♯)"],
  rythmeNames: ["Ritmo armonico lento (un cambio per misura)", "Ritmo armonico rapido (quattro per misura)"],

  quizH3: "Quiz — 10 domande",
  questions: [
    {
      q: "Sentite: basso continuo al clavicembalo, testura polifonica, motorica ritmica regolare. Periodo probabile?",
      opts: ["Rinascimento", "Barocco", "Classico", "Romantico"],
      a: 1,
      fb: "Il basso continuo al clavicembalo è il marcatore barocco per eccellenza (c. 1600-1750).",
    },
    {
      q: "Sentite: melodia accompagnata, quadrature di 4+4, cadenze frequenti e chiare, orchestra moderata. Periodo probabile?",
      opts: ["Barocco", "Classico", "Impressionista", "Novecento"],
      a: 1,
      fb: "Quadratura regolare + chiarezza cadenzale + melodia accompagnata = fascio classico tipico.",
    },
    {
      q: "Sentite: accordi paralleli non risolti, scala per toni interi, sfocatura metrica, timbro-colore. Periodo probabile?",
      opts: ["Rinascimento", "Classico", "Impressionista", "Barocco"],
      a: 2,
      fb: "Parallelismi, modi e scala per toni interi sono i marcatori impressionisti (Debussy — corso 21).",
    },
    {
      q: "In Do maggiore, sentite V7 e poi un accordo di La minore al posto del Do atteso. Quale cadenza?",
      opts: ["Perfetta", "Plagale", "Semicadenza", "D'inganno"],
      a: 3,
      fb: "V7 → vi: la risoluzione promessa è elusa — cadenza d'inganno (corso 4).",
    },
    {
      q: "La frase si interrompe sull'accordo di Sol (V) in Do maggiore, sensazione di sospensione. Quale cadenza?",
      opts: ["Semicadenza", "Perfetta", "D'inganno", "Plagale"],
      a: 0,
      fb: "Fermarsi su V lascia la frase aperta: semicadenza, la « virgola » musicale.",
    },
    {
      q: "Concatenazione IV → I, senza sensibile, soprano immobile sulla tonica. Quale cadenza?",
      opts: ["Perfetta", "Plagale", "D'inganno", "Semicadenza"],
      a: 1,
      fb: "IV → I è la cadenza plagale, la conclusione « Amen » senza sensibile.",
    },
    {
      q: "Uno stesso tema ritorna una terza volta identico, nel tono principale, tra episodi contrastanti. Forma probabile?",
      opts: ["Forma-sonata", "Tema e variazioni", "Rondò", "Binaria"],
      a: 2,
      fb: "Il ritorno ripetuto di un ritornello nel tono principale è la firma del rondò (corso 28).",
    },
    {
      q: "Sentite la stessa frase melodica entrare successivamente in ogni voce, impilandosi. Forma probabile?",
      opts: ["Fuga", "Rondò", "Ternaria", "Variazioni"],
      a: 0,
      fb: "Le entrate successive del soggetto sono l'indizio quasi infallibile della fuga.",
    },
    {
      q: "Quale formulazione appartiene al registro atteso del commento?",
      opts: [
        "« Suona pieno e ricco »",
        "« La testura è omofonica e densa »",
        "« È carino ma triste »",
        "« Sembra Chopin, quindi è romantico »",
      ],
      a: 1,
      fb: "Vocabolario tecnico e descrittivo; l'ultima opzione inverte il metodo (identificare prima di descrivere).",
    },
    {
      q: "Un estratto vi evoca immediatamente un compositore preciso. Che cosa fate per prima cosa?",
      opts: [
        "Scriverlo subito",
        "Descrivere prima i parametri, tenere il nome per la conclusione al condizionale",
        "Cercare il titolo esatto",
        "Costruire la descrizione attorno a quel nome",
      ],
      a: 1,
      fb: "Descrivere → identificare → collocare: l'intuizione si verifica con gli indizi, mai il contrario.",
    },
  ],

  listenBtn: "Ascolta",
};

// ════════════════════════════════════════════════════════════════════════════
// PT
// ════════════════════════════════════════════════════════════════════════════

const pt: Cours45Locale = {
  maitreConcept: "O comentário auditivo — descrever, identificar, situar",
  maitreAnecdote:
    "Professor no Conservatório de Paris de 1941 a 1978, Olivier Messiaen dirigiu ali uma classe de análise que foi o laboratório de escuta mais célebre do século: ali analisava-se tudo — canto gregoriano, Mozart, Debussy, ritmos hindus, cantos de pássaros — partitura e ouvido juntos. Boulez, Xenakis ou Stockhausen passaram por ela. A sua disciplina: escutar primeiro, nomear com precisão depois, concluir com prudência no fim.",
  maitreLesson:
    "A prova do comentário auditivo avalia um método, não uma discoteca interior: uma descrição hierarquizada e argumentada vale sempre mais do que um nome de compositor lançado ao acaso.",

  honneteTitle: "Como trabalhar este curso",
  honneteBody:
    "<strong>O Harmonia não contém nenhuma gravação.</strong> Por razões de direitos, a plataforma não dispõe de fonoteca: tudo o que ouvirá aqui é tocado por um <strong>piano de síntese</strong>, a partir de partituras gravadas. Este curso dá-lhe, portanto, duas coisas: a <strong>metodologia completa</strong> do comentário auditivo (a grelha de análise, os marcadores estilísticos, o plano, o vocabulário — todo o instrumental intelectual da prova) e o <strong>treino dos parâmetros realmente trabalháveis no piano de síntese</strong>: cadências, modos maior/menor, modulações, ritmo harmónico, texturas, formas. Em contrapartida, a identificação dos <strong>timbres</strong> e da <strong>orquestração</strong> em obras reais não pode ser trabalhada aqui: pertence à escuta em aula e à sua frequentação pessoal do repertório (concertos, rádio, plataformas). Este curso é o método e o ginásio harmónico — não um substituto da escuta das obras.",

  introH2: "O que é o comentário auditivo?",
  introP1:
    "O comentário auditivo é uma prova rainha dos percursos franceses: na universidade (licenciatura em musicologia, CAPES/agregação), no conservatório (DEM de análise — ver o curso 26 para a outra vertente do exame, a escrita) e em numerosos concursos. O princípio: fazem-no ouvir um excerto de uma obra, <strong>na maioria das vezes desconhecida para si</strong>, duas a quatro vezes; deve produzir um comentário estruturado que identifique o <strong>efetivo</strong>, a <strong>textura</strong>, a <strong>linguagem</strong>, a <strong>forma</strong>, o <strong>género provável</strong>, e que <strong>situe a obra</strong> num período estilístico — tudo argumentado pelo que realmente ouviu.",
  introP2:
    "O que o corretor espera <strong>não</strong> é um catálogo de efeitos (« há violinos, depois é forte, depois há uma flauta ») nem uma aposta no título. Espera uma descrição <strong>hierarquizada</strong> (os parâmetros decisivos primeiro), <strong>argumentada</strong> (cada afirmação apoiada num indício audível) e <strong>prudente</strong> (uma hipótese de datação, não uma certeza proclamada). Daí a regra de ouro do curso, nesta ordem e nunca na outra:",
  regleOr:
    "<strong>Descrever → identificar → situar.</strong><br/>Descreve-se primeiro o que se ouve (parâmetros objetivos), identificam-se depois os elementos técnicos (cadências, forma, linguagem), e propõe-se por fim uma situação histórica argumentada. <strong>Nunca o inverso</strong>: adivinhar de imediato um título ou um compositor, e depois torcer a descrição para a fazer encaixar, é a falta metodológica mais sancionada — e a mais frequente.",
  introP3:
    "Um excerto bem descrito mas prudentemente situado vale sempre mais do que um nome certeiro por sorte: a prova avalia um <strong>procedimento</strong>, não uma discoteca interior.",

  grilleH2: "A caixa de ferramentas: o que escutar?",
  grilleP1:
    "Antes de qualquer técnica, é precisa uma <strong>grelha de parâmetros</strong>: a check-list mental que se percorre desde a primeira escuta. Ei-la — é A tabela de referência do curso, a saber de cor. Na primeira escuta, varre-se tudo; nas escutas seguintes, aprofundam-se os parâmetros decisivos para o excerto dado.",
  grilleCaption: "A grelha dos parâmetros de escuta — a saber de cor",
  grilleHeaders: ["Parâmetro", "Perguntas a fazer-se", "Vocabulário-chave"],
  grilleRows: [
    {
      param: "<strong>Efetivo / timbre</strong>",
      questions: "Vozes ou instrumentos? Quantos? Famílias (cordas, sopros, teclados)? Solista + acompanhamento?",
      vocab: "orquestra sinfónica, formação de câmara, <em>a cappella</em>, basso continuo, efetivo misto",
    },
    {
      param: "<strong>Textura</strong>",
      questions: "Uma só linha? Todas as vozes juntas? Linhas independentes? Uma melodia que domina?",
      vocab: "<strong>monodia</strong>, <strong>homofonia</strong> (homorritmia), <strong>polifonia / contraponto</strong> (imitação), <strong>melodia acompanhada</strong>",
    },
    {
      param: "<strong>Linguagem</strong>",
      questions: "Sente-se uma tónica? A linguagem é modal, tonal, atonal? Consonante ou dissonante?",
      vocab: "modal, tonal (maior/menor), cromática, atonal; consonância, dissonância, cluster",
    },
    {
      param: "<strong>Harmonia</strong>",
      questions: "Ouvem-se cadências? Os acordes mudam depressa ou devagar? Há modulações?",
      vocab: "cadência perfeita / plagal / interrompida / semicadência (curso 4), <strong>ritmo harmónico</strong>, modulação",
    },
    {
      param: "<strong>Forma</strong>",
      questions: "Frases regulares? Secções que voltam? Contrastes?",
      vocab: "quadratura, período, refrão/copla, repetição, A-B-A, desenvolvimento (cursos 17 e 28)",
    },
    {
      param: "<strong>Ritmo / tempo / métrica</strong>",
      questions: "Binário ou ternário? Tempo estável ou flutuante? Pulsação dançante?",
      vocab: "compasso de 2, 3, 4 tempos; rubato; ostinato; síncopa; caráter de dança",
    },
    {
      param: "<strong>Dinâmicas / articulação</strong>",
      questions: "Dinâmicas em terraços ou progressivas? Legato, staccato? Grandes crescendos?",
      vocab: "dinâmicas em terraços, crescendo/decrescendo, acentos, contrastes dinâmicos",
    },
    {
      param: "<strong>Texto (se existir)</strong>",
      questions: "Língua? Sacro ou profano? Relação música-texto (silábico, melismático)?",
      vocab: "litúrgico, madrigalismo, silábico, melismático, recitativo / ária",
    },
  ],
  grilleP2:
    "Dois conselhos de uso. Primeiro, <strong>hierarquizar</strong>: nem todos os parâmetros falam igualmente para um excerto dado — uma fuga de teclado joga-se na textura e na forma, um lied no texto e na harmonia. Depois, <strong>cruzar</strong>: é o <strong>feixe de indícios</strong> convergentes que autoriza uma hipótese de período (secção seguinte), nunca um indício isolado.",

  periodesH2: "Situar um período: os marcadores estilísticos",
  periodesP1:
    "Eis a tabela de síntese dos marcadores audíveis por período. Condensa o curso 29 (<em>Análise comparativa do repertório</em> — a mesma melodia harmonizada cinco vezes) e os cursos 20/21 (assinaturas dos compositores). <strong>Advertência metodológica</strong>: um marcador é um <strong>indício, não uma prova</strong>. O basso continuo assina o barroco, mas um compositor do século XX pode pasticar o barroco (cf. curso 41); o cromatismo denso existe em Gesualdo (final do séc. XVI) como em Wagner. É a <strong>convergência</strong> de vários marcadores que fundamenta a hipótese — e enuncia-se sempre com prudência (« o conjunto dos indícios orienta para… »).",
  periodesCaption: "Marcadores audíveis por período — indícios, nunca provas",
  periodesHeaders: ["Período", "Efetivo típico", "Textura", "Harmonia / linguagem", "Formas e gestos", "Indícios imediatos"],
  periodesRows: [
    {
      periode: "<strong>Renascimento</strong> (c. 1450-1600)",
      effectif: "Vozes <em>a cappella</em> (missa, moteto, chanson, madrigal); consorts de instrumentos",
      texture: "Polifonia imitativa equilibrada, sem hierarquia de vozes",
      harmonie: "<strong>Modal</strong>, consonante; dissonância estritamente regulada (retardos); cadências modais",
      formes: "Formas ligadas ao texto; sem quadratura de dança no sacro",
      indices: "Vozes sós, imitação contínua, ausência de sensação tónica-dominante clara",
    },
    {
      periode: "<strong>Barroco</strong> (c. 1600-1750)",
      effectif: "<strong>Basso continuo</strong> (cravo, órgão + baixo); orquestra de cordas, concerto solista/<em>grosso</em>; voz + contínuo",
      texture: "Polifonia (fuga) ou melodia + contínuo; baixo muito ativo",
      harmonie: "<strong>Tonal</strong>; sequências e marchas harmónicas; ritmo harmónico frequentemente rápido e regular",
      formes: "Fuga, suite de danças, concerto (ritornello), recitativo/ária; ornamentação abundante",
      indices: "<strong>Cravo audível</strong>, baixo obstinado em movimento, dinâmicas em terraços, motricidade rítmica",
    },
    {
      periode: "<strong>Clássico</strong> (c. 1750-1800)",
      effectif: "Orquestra moderada (cordas + madeiras a 2), quarteto de cordas, pianoforte",
      texture: "<strong>Melodia acompanhada</strong> dominante (baixo de Alberti)",
      harmonie: "Tonal claro e diatónico; <strong>cadências frequentes e muito audíveis</strong>; ritmo harmónico bastante lento",
      formes: "<strong>Quadraturas de 4 + 4</strong>, período antecedente/consequente, forma-sonata, minuete, rondó",
      indices: "Fraseado regular « pergunta/resposta », clareza, contrastes temáticos controlados",
    },
    {
      periode: "<strong>Romântico</strong> (séc. XIX)",
      effectif: "Grande orquestra (metais, harpa), piano moderno, lied voz + piano",
      texture: "Melodia acompanhada enriquecida; texturas densas",
      harmonie: "<strong>Cromatismo crescente</strong>, modulações afastadas, apogiaturas expressivas",
      formes: "<strong>Grandes frases</strong> que ultrapassam a quadratura, formas cíclicas, peça de caráter, poema sinfónico",
      indices: "Fôlego lírico, rubato, grandes crescendos, harmonia que « atrasa » a resolução",
    },
    {
      periode: "<strong>Pós-romântico / impressionista</strong> (c. 1880-1920)",
      effectif: "Orquestra muito numerosa ou piano só; timbre tratado como cor",
      texture: "Camadas, planos sonoros sobrepostos",
      harmonie: "<strong>Paralelismos de acordes</strong>, modos, <strong>escala de tons inteiros</strong>, pentatónica, acordes enriquecidos (9as, 11as) não resolvidos",
      formes: "Formas livres, arco, peça breve evocadora (título-imagem)",
      indices: "A cadência perde a sua força direcional; cor antes da direção; desfocagem métrica",
    },
    {
      periode: "<strong>Séc. XX / contemporâneo</strong> (depois de 1910)",
      effectif: "Efetivos estilhaçados: percussões, piano percussivo, conjuntos inéditos, eletrónica",
      texture: "Todas as texturas, incluindo massas e pontilhismo",
      harmonie: "<strong>Atonalidade</strong>, clusters, politonalidade, série (curso 44); dissonância emancipada",
      formes: "Formas por blocos, colagens, obras abertas; ritmos irregulares, compassos cambiantes",
      indices: "Ausência de tónica percetível, agregados, violência ou rarefação do som",
    },
  ],
  periodesP2:
    "Complemento de método: quando dois períodos ficam em equilíbrio (clássico ou romântico inicial? impressionista ou pós-romântico?), <strong>diz-se</strong> no comentário e dá-se o critério que faria pender a balança — isso é valorizado, não penalizado.",

  formesH2: "Reconhecer as formas de ouvido",
  formesP1:
    "Na escrita, vê-se a forma na partitura (cursos 17 e 28); na escuta, a forma ouve-se por dois sinais: <strong>o que volta</strong> (idêntico ou variado) e <strong>o que contrasta</strong> (novo tema, nova tonalidade, nova textura). Eis as grandes formas reduzidas aos seus indícios auditivos:",
  formesList: [
    "<strong>Binária (A-B, muitas vezes com repetições)</strong>: dois painéis; o primeiro afasta-se (paragem suspensiva ou cadência noutro tom), o segundo regressa. Indício: a « respiração » mediana, muitas vezes sublinhada por uma repetição.",
    "<strong>Ternária (A-B-A)</strong>: um início, um meio contrastante (tom, caráter, textura), depois o <strong>regresso reconhecível do início</strong>. Indício: sensação de « regresso a casa » após um desvio.",
    "<strong>Rondó (A-B-A-C-A…)</strong>: um <strong>refrão</strong> que regressa idêntico no tom principal, entre coplas contrastantes. Indício: mais de dois regressos do mesmo tema = provável rondó.",
    "<strong>Tema e variações</strong>: uma mesma quadratura harmónica e fraseológica repetida, cuja superfície muda a cada volta (ornamentação, modo, ritmo). Indício: o « comprimento de frase » volta idêntico enquanto a roupagem muda.",
    "<strong>Forma-sonata</strong>: ouvida como <strong>dramaturgia da tensão</strong> — exposição (duas zonas temáticas, a segunda noutro tom), desenvolvimento (instabilidade: fragmentos, modulações rápidas, tensão), reexposição (regresso do início, mas desta vez tudo fica no tom principal: sensação de resolução). Indício: o regresso do tema inicial <em>depois</em> de uma zona de instabilidade máxima.",
    "<strong>Fuga</strong>: <strong>entradas sucessivas</strong> do mesmo sujeito em cada voz, único indício quase infalível; depois alternância de episódios e regressos do sujeito. Indício: ouve-se « a mesma frase » entrar voz após voz, empilhando-se.",
  ],
  illu1H3: "Ilustração 1 — Período antecedente/consequente (Dó maior, 8 compassos)",
  illu1P:
    "Semibreves, um acorde por compasso, compasso de 4/4. O antecedente coloca uma <strong>pergunta</strong> (semicadência), o consequente <strong>responde</strong> (cadência perfeita) — mesmo início, dois finais diferentes.",
  illu1Chords:
    "Compassos 1-4: I – IV – I6/4 – <strong>V</strong> (semicadência) · Compassos 5-8: I – IV – <strong>V7</strong> – <strong>I</strong> (cadência perfeita)",
  illu1Ecoute:
    "<strong>A ouvir</strong>: no compasso 4, a melodia fica suspensa em <strong>Ré5</strong> (2.º grau) sobre o acorde de Sol — a frase está aberta; no compasso 8, pousa em <strong>Do5</strong> (tónica) sobre o acorde de Do — a frase está fechada. É este contraste aberto/fechado que estrutura toda a fraseologia clássica (curso 17).",
  illu2H3: "Ilustração 2 — Mini-rondó (esquema A-B-A-C-A)",
  illu2P1:
    "<strong>Refrão A</strong> (Dó maior, 4 compassos, monodia, semínimas e mínimas finais) — gravado e reproduzível abaixo:",
  illu2P2:
    "<strong>Copla B</strong>: 4 compassos contrastantes em <strong>Sol maior</strong> (aparece o Fa♯). <strong>Copla C</strong>: 4 compassos em <strong>Lá menor</strong> (aparece o Sol♯). Entre cada copla, o refrão <strong>regressa idêntico, no tom principal</strong>: é precisamente esse regresso literal que o ouvido deve aprender a detetar — quando ouvir este tema pela terceira vez, saberá que está num rondó.",

  harmH2: "Ouvir a harmonia: o treino possível aqui",
  harmP1:
    "É aqui que o Harmonia está no seu elemento: tudo o que se segue toca-se no piano de síntese a partir das notas exatas gravadas abaixo. Estes reflexos — cadências, modo, modulação, ritmo harmónico, textura — são o <strong>coração harmónico</strong> do comentário auditivo, e adquirem-se pela repetição.",
  cadH3: "As quatro cadências (revisão do curso 4, em Dó maior, SATB)",
  cadLabels: [
    { nom: "<strong>Perfeita</strong> (conclusiva)", accords: "I – IV – V7 – I" },
    { nom: "<strong>Plagal</strong> (« Amém »)", accords: "I – IV – I" },
    { nom: "<strong>Semicadência</strong> (suspensiva)", accords: "I – IV – <strong>V</strong>" },
    { nom: "<strong>Interrompida</strong> (falsa resolução)", accords: "I – V7 – <strong>vi</strong>" },
  ],
  cadEcoute:
    "<strong>A ouvir</strong>: a perfeita <strong>fecha a porta</strong> (V7 → I, soprano na tónica); a plagal fecha com doçura, sem sensível, soprano imóvel em Do; a semicadência <strong>deixa a porta aberta</strong> (para-se em V); a interrompida <strong>promete I e dá vi</strong> — o baixo sobe Sol→La em vez de recair em Do, e a terceira de vi é dobrada (Do no soprano e no tenor), conforme a regra.",
  modeH3: "Maior / menor: mesma progressão, dois modos",
  modeP1:
    "A mesma marcha I–IV–V7–I, desta vez em <strong>Dó menor</strong> (comparar de ouvido com a versão maior acima):",
  modeP2:
    "O <strong>Si bequadro</strong> é a sensível do menor harmónico: a dominante permanece maior. O ouvido deve aprender a nomear a diferença de cor desde o primeiro acorde (Mi vs Mi♭).",
  modeMajBtn: "Versão maior (I–IV–V7–I)",
  modeMinBtn: "Versão menor (i–iv–V7–i)",
  modulH3: "Modulação: para a dominante ou para o relativo?",
  modulP1:
    "Dois trajetos partindo do mesmo Dó maior — o jogo consiste em identificar <strong>que nota estranha aparece</strong>.",
  modulDomTitle:
    "<strong>Para a dominante (Do → Sol maior)</strong> — sinal: o <strong>Fa♯</strong>. Cinco acordes: Do (I) – Fa (IV) – Sol (pivô: V de Do = I de Sol) – Ré7 (V7 de Sol) – Sol (nova tónica).",
  modulRelTitle:
    "<strong>Para o relativo (Do → Lá menor)</strong> — sinal: o <strong>Sol♯</strong>. Três acordes: Do (I) – Mi7 (V7 de Lá menor) – Lá menor (nova tónica).",
  modulEcoute:
    "<strong>A ouvir</strong>: para a dominante, permanece-se <strong>em maior</strong>, um tom mais « luminoso » de um sustenido; para o relativo, a cadência de chegada é <strong>menor</strong> — mesma armação, cor ensombrada. Reflexo: « nova sensível ouvida = para onde conduz? »",
  rythmeH3: "O ritmo harmónico: rápido ou lento?",
  rythmeP1:
    "Progressão I – vi – IV – V – I em Dó maior. <strong>Versão lenta</strong>: um acorde por semibreve (uma mudança por compasso). <strong>Versão rápida</strong>: a mesma progressão em semínimas (quatro mudanças por compasso), tocada duas vezes. O conteúdo harmónico é idêntico; só muda a <strong>velocidade de renovação dos acordes</strong>.",
  rythmeP2:
    "Exercício de escuta: contar as mudanças de acorde por compasso — um ritmo harmónico rápido e regular orienta antes para o barroco, um ritmo lento com cadências espaçadas antes para o estilo clássico (ver os marcadores estilísticos).",
  rythmeLentBtn: "Versão lenta",
  rythmeRapideBtn: "Versão rápida (tocada duas vezes)",
  textureH3: "Ouvir uma mudança de textura",
  textureP1:
    "Um mesmo tema de quatro notas (semínimas): <strong>Do5 – Ré5 – Mi5 – Do5</strong>, apresentado sob quatro texturas:",
  textureLabels: [
    { titre: "Monodia", desc: "o tema só, sem acompanhamento." },
    {
      titre: "Homofonia",
      desc: "o tema harmonizado nota contra nota em SATB — Do5 (I: Sol4/Mi4/Do3), Ré5 (V: Sol4/Si3/Sol2), Mi5 (I: Sol4/Do4/Do3), Do5 (I: Sol4/Mi4/Do3).",
    },
    {
      titre: "Polifonia (cânone)",
      desc: "voz 1: c. 1: Do5–Ré5–Mi5–Do5, c. 2: Mi5–Fa5–Sol5 (mínima); voz 2, entrando um compasso mais tarde à oitava inferior. (Sim, é o incipit de <em>Frère Jacques</em> — o cânone mais audível que existe.)",
    },
    {
      titre: "Melodia acompanhada",
      desc: "o tema em mínimas no soprano, baixo de Alberti em colcheias na mão esquerda — sob Do5 e Mi5: Do3–Sol3–Mi3–Sol3; sob Ré5: Sol2–Ré3–Si2–Ré3.",
    },
  ],
  textureP2:
    "Saber nomear a textura numa só escuta é um dos gestos mais rentáveis da prova: é muitas vezes o primeiro indício de período.",

  planH2: "Construir o comentário: plano e vocabulário",
  planP1:
    "O produto final — escrito (2 a 4 parágrafos) ou oral (2 a 3 minutos) — segue um plano estável:",
  planSteps: [
    "<strong>Introdução — visão de conjunto</strong>: efetivo, caráter global, tempo, uma frase de enquadramento (« Excerto para piano só, de caráter meditativo, tempo lento e rubato »). Ainda sem hipótese histórica.",
    "<strong>Desenvolvimento — os parâmetros, organizados</strong>: forma percebida (secções, regressos, quadraturas), linguagem e harmonia (tonal/modal/atonal, cadências ouvidas, modulações, ritmo harmónico), textura e a sua evolução, elementos rítmicos e dinâmicos salientes. <strong>Hierarquiza-se</strong>: primeiro o que é decisivo para esse excerto.",
    "<strong>Conclusão — a hipótese argumentada</strong>: período e género prováveis, enunciados como um feixe de indícios (« a melodia acompanhada, as quadraturas regulares e as cadências frequentes orientam para o estilo clássico; poderia tratar-se de um andamento lento de sonata »). Um nome de compositor só chega — eventualmente — aqui, e sempre no condicional.",
  ],
  registreBox:
    "<strong>O registo de vocabulário</strong>: escreve-se « textura homofónica », não « soa cheio »; « cadência suspensiva », não « para de forma estranha »; « ritmo harmónico lento », não « os acordes arrastam-se ». O vocabulário técnico não é um ornamento: é a prova de que identificou, não apenas sentiu.",
  piegesBox:
    "<strong>As armadilhas clássicas</strong>: (1) <strong>adivinhar primeiro o compositor</strong> e selecionar depois os indícios convenientes; (2) o <strong>catálogo sem hierarquia</strong> — listar tudo à medida sem destacar o essencial; (3) <strong>confundir género e forma</strong> — a « sonata » é um género (uma obra para um ou dois instrumentos em vários andamentos), a « forma-sonata » é o plano de um andamento; um concerto pode conter uma forma-sonata; (4) afirmar sem indício (« é Mozart ») em vez de argumentar.",
  modeleH3: "Mini-comentário modelo (~150 palavras)",
  modeleDesc:
    "Excerto descrito: quarteto de cordas; tema cantante no primeiro violino sobre acompanhamento regular; frases de quatro compassos; paragem suspensiva a meio do percurso, conclusão afirmada; breve passagem central mais instável, depois regresso do tema inicial.",
  modeleQuote:
    "« O excerto faz ouvir um quarteto de cordas: o primeiro violino expõe um tema cantabile sobre um acompanhamento homorrítmico das outras três vozes — textura de melodia acompanhada. O discurso é claramente tonal e diatónico: as frases, em quadraturas regulares de quatro compassos, formam um período — uma semicadência suspende a primeira frase, uma cadência perfeita conclui a segunda. Uma passagem central modula e fragmenta o tema, criando uma instabilidade rapidamente resolvida pelo regresso do tema inicial no tom principal, o que sugere um corte ternário, ou mesmo uma forma-sonata abreviada. O ritmo harmónico é pousado, as cadências frequentes e audíveis. Este feixe de indícios — efetivo de quarteto, melodia acompanhada, quadraturas, clareza cadencial — orienta para o estilo clássico (segunda metade do século XVIII); poderia tratar-se de um andamento de quarteto de tipo haydniano. »",

  entrainH2: "Treino",
  methodeH3: "O método em resumo",
  methodeP:
    "1) primeira escuta, grelha completa (a caixa de ferramentas); 2) escutas seguintes, parâmetros decisivos; 3) identificar formas e cadências; 4) feixe de indícios → hipótese de período; 5) redigir segundo o plano: <strong>descrever → identificar → situar</strong>.",
  exercicesH3: "Exercícios 1-2 — Mini-comentários a redigir",
  exercices: [
    {
      titre: "Exercício 1 — Mini-comentário a redigir (descrição dada)",
      description:
        "<em>Descrição do excerto:</em> conjunto de cordas com cravo; um baixo em colcheias regulares avança sem descanso; por cima, dois violinos dialogam em imitação; os acordes mudam a cada tempo; dinâmicas por blocos, sem crescendo; uma sequência descendente volta várias vezes antes de uma cadência conclusiva.",
      consigne:
        "<em>Instrução:</em> redija um comentário de 120-160 palavras segundo o plano da secção « O plano » (descrição → identificação → hipótese).",
      corrige:
        "« O excerto associa um conjunto de cordas a um cravo que realiza o basso continuo, sustentado por um baixo em colcheias regulares — uma marcha obstinada típica. A textura é polifónica: dois violinos dialogam em imitação por cima do contínuo. A linguagem é tonal, o ritmo harmónico rápido e regular (um acorde por tempo); uma marcha harmónica descendente, repetida em sequência, conduz a uma cadência perfeita conclusiva. As dinâmicas procedem por planos opostos, em terraços, sem transição progressiva. Este feixe de indícios — basso continuo no cravo, imitação, sequências, ritmo harmónico rápido, dinâmicas em terraços — orienta nitidamente para o período barroco (primeira metade do século XVIII). O efetivo e o diálogo concertante sugerem um andamento vivo de concerto para cordas, ou mesmo de concerto grosso. »",
    },
    {
      titre: "Exercício 2 — Mini-comentário a redigir (descrição dada)",
      description:
        "<em>Descrição do excerto:</em> piano só; tempo lento e flutuante; uma melodia ampla na mão direita sobre arpejos largos da mão esquerda; harmonia rica em cromatismos, resoluções retardadas, uma modulação para um tom afastado; grande subida de intensidade e depois retração; a frase inicial volta, ornamentada, no fim.",
      consigne: "<em>Instrução:</em> mesmo exercício, 120-160 palavras.",
      corrige:
        "« Peça para piano só, de caráter lírico, num tempo lento animado de rubato. A textura é a de uma melodia acompanhada: um canto amplo na mão direita desdobra-se sobre largos arpejos. A linguagem é tonal mas fortemente cromática: apogiaturas expressivas, resoluções retardadas, e uma modulação para um tom afastado no centro do excerto. As frases transbordam a quadratura regular e culminam num longo crescendo antes de retrair; o regresso final da frase inicial, ornamentada, desenha um corte ternário A-B-A'. Este feixe — piano só, lirismo, cromatismo, rubato, forma ternária de peça breve — orienta para o romantismo (século XIX); poderia tratar-se de uma peça de caráter, de tipo noturno. »",
    },
  ],
  voirCorrige: "Ver a resposta modelo",
  masquerCorrige: "Esconder a resposta",
  corrigeLabel: "Resposta modelo",

  drillCadH3: "Exercício 3 — Drill: reconhecer as cadências às cegas",
  drillCadConsigne:
    "O botão toca, <strong>sem mostrar a partitura</strong>, uma das quatro progressões da tabela acima (perfeita, plagal, semicadência, interrompida), por ordem aleatória. Para cada uma: 1) fechada ou aberta? 2) o baixo recai na tónica? 3) nomeie a cadência e depois verifique. Refaça a série até quatro identificações em quatro. Pontos de controlo: a interrompida trai-se pelo baixo Sol→La; a plagal pela ausência de sensível e pelo soprano imóvel.",
  drillModH3: "Exercício 4a — Drill: dominante ou relativo?",
  drillModConsigne:
    "O botão toca, às cegas, um dos dois trajetos de modulação: diga se conduz à <strong>dominante</strong> (chegada maior, Fa♯) ou ao <strong>relativo menor</strong> (chegada menor, Sol♯); recomece alternando.",
  drillRytH3: "Exercício 4b — Drill: ritmo harmónico lento ou rápido?",
  drillRytConsigne:
    "O botão toca uma das duas versões da progressão I – vi – IV – V – I: conte as mudanças de acorde por compasso e formule a resposta no vocabulário do comentário (« ritmo harmónico lento: uma mudança por compasso » / « rápido: quatro por compasso »). Lembrete: em igualdade de circunstâncias, um perfil rápido e regular orienta antes para o barroco, um perfil lento para o estilo clássico.",
  drillPlayBtn: "Tocar um exemplo ao acaso",
  drillReplayBtn: "Ouvir de novo",
  drillAnswerPrompt: "A sua resposta:",
  drillCorrect: "Exato!",
  drillWrong: "Não — era:",
  drillResetBtn: "Repor a pontuação a zero",
  cadenceNames: ["Cadência perfeita", "Cadência plagal", "Semicadência", "Cadência interrompida"],
  modulationNames: ["Para a dominante (chegada maior, Fa♯)", "Para o relativo menor (chegada menor, Sol♯)"],
  rythmeNames: ["Ritmo harmónico lento (uma mudança por compasso)", "Ritmo harmónico rápido (quatro por compasso)"],

  quizH3: "Quiz — 10 perguntas",
  questions: [
    {
      q: "Ouve: basso continuo no cravo, textura polifónica, motricidade rítmica regular. Período provável?",
      opts: ["Renascimento", "Barroco", "Clássico", "Romântico"],
      a: 1,
      fb: "O basso continuo no cravo é o marcador barroco por excelência (c. 1600-1750).",
    },
    {
      q: "Ouve: melodia acompanhada, quadraturas de 4+4, cadências frequentes e claras, orquestra moderada. Período provável?",
      opts: ["Barroco", "Clássico", "Impressionista", "Séc. XX"],
      a: 1,
      fb: "Quadratura regular + clareza cadencial + melodia acompanhada = feixe clássico típico.",
    },
    {
      q: "Ouve: acordes paralelos não resolvidos, escala de tons inteiros, desfocagem métrica, timbre-cor. Período provável?",
      opts: ["Renascimento", "Clássico", "Impressionista", "Barroco"],
      a: 2,
      fb: "Paralelismos, modos e escala de tons inteiros são os marcadores impressionistas (Debussy — curso 21).",
    },
    {
      q: "Em Dó maior, ouve V7 e depois um acorde de Lá menor em vez do Do esperado. Que cadência?",
      opts: ["Perfeita", "Plagal", "Semicadência", "Interrompida"],
      a: 3,
      fb: "V7 → vi: a resolução prometida é frustrada — cadência interrompida (curso 4).",
    },
    {
      q: "A frase interrompe-se no acorde de Sol (V) em Dó maior, sensação de suspensão. Que cadência?",
      opts: ["Semicadência", "Perfeita", "Interrompida", "Plagal"],
      a: 0,
      fb: "Parar em V deixa a frase aberta: semicadência, a « vírgula » musical.",
    },
    {
      q: "Encadeamento IV → I, sem sensível, soprano imóvel na tónica. Que cadência?",
      opts: ["Perfeita", "Plagal", "Interrompida", "Semicadência"],
      a: 1,
      fb: "IV → I é a cadência plagal, a conclusão « Amém » sem sensível.",
    },
    {
      q: "Um mesmo tema volta pela terceira vez idêntico, no tom principal, entre episódios contrastantes. Forma provável?",
      opts: ["Forma-sonata", "Tema e variações", "Rondó", "Binária"],
      a: 2,
      fb: "O regresso repetido de um refrão no tom principal é a assinatura do rondó (curso 28).",
    },
    {
      q: "Ouve a mesma frase melódica entrar sucessivamente em cada voz, empilhando-se. Forma provável?",
      opts: ["Fuga", "Rondó", "Ternária", "Variações"],
      a: 0,
      fb: "As entradas sucessivas do sujeito são o indício quase infalível da fuga.",
    },
    {
      q: "Que formulação pertence ao registo esperado do comentário?",
      opts: [
        "« Soa cheio e rico »",
        "« A textura é homofónica e densa »",
        "« É bonito mas triste »",
        "« Parece Chopin, logo é romântico »",
      ],
      a: 1,
      fb: "Vocabulário técnico e descritivo; a última opção inverte o método (identificar antes de descrever).",
    },
    {
      q: "Um excerto evoca-lhe de imediato um compositor preciso. O que faz primeiro?",
      opts: [
        "Escrevê-lo de imediato",
        "Descrever primeiro os parâmetros, guardar o nome para a conclusão no condicional",
        "Procurar o título exato",
        "Construir a descrição em torno desse nome",
      ],
      a: 1,
      fb: "Descrever → identificar → situar: a intuição verifica-se pelos indícios, nunca o inverso.",
    },
  ],

  listenBtn: "Ouvir",
};

export const cours45Content: Record<string, Cours45Locale> = { fr, en, de, es, it, pt };
