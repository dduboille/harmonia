// Cours 48 — Méthodologie du relevé (Niveau 3, ≈ L3 · DNSPM)
// DERNIER cours du parcours DNSPM et du catalogue (48 cours). Compagnon
// méthodologique de l'outil /releve : le cours enseigne les stratégies
// (la basse d'abord, la cadence d'abord, l'écoute par formules), l'outil
// est le gymnase.
// Contenu pédagogique locale-clé : le FR fait foi (transcrit de la spec validée
// 2026-07-19-cours-methodologie-releve-contenu-fr.md — AUCUNE note, AUCUN degré
// modifiés). Les cinq autres langues traduisent la prose avec le vocabulaire FM
// correct (relevé = harmonic dictation / harmonisches Diktat / dictado armónico /
// dettato armonico / ditado armónico ; audiation conservé partout ; basse
// d'abord = bass first ; renversement = inversion / Umkehrung / inversión /
// rivolto / inversão). La table écoute→objectif (6 lignes) et la table de
// diagnostic des erreurs (3 lignes) sont COMPLÈTES dans les six langues.
// CONVENTION : noms de notes en solfège FRANÇAIS partout (Do Ré Mi Fa Sol La
// Si), Do4 = do central. Les NOTES des exemples gravés vivent dans Cours48.tsx :
// identiques dans les six langues par construction.

export interface Question {
  q: string;
  opts: string[];
  a: number;
  fb: string;
}

export interface Cours48Locale {
  // ── Maître (MaitreCard) ──
  maitreConcept: string;
  maitreAnecdote: string;
  maitreLesson: string;

  // ── Note « Comment travailler ce cours » (affichée en tête) ──
  noteTravail: string;

  // ── Section 1 — Qu'est-ce que le relevé ? ──
  quoiH2: string;
  quoiP1: string;
  quoiP2: string;
  regleOr: string;
  linkCours45: { titre: string; desc: string };
  linkGo: string;

  // ── Section 2 — La basse d'abord ──
  basseH2: string;
  basseP1: string;
  basseTechniques: string[]; // 3
  basseOctave: string;
  exS2H3: string;
  exS2P: string;
  s2ScoreCaption: string;
  s2Apres: string;
  btnProg: string;  // écoute de la progression SATB
  btnBasse: string; // écoute de la basse seule

  // ── Section 3 — Les fonctions avant les accords ──
  fonctH2: string;
  fonctP1: string;
  fonctP2: string;
  fonctP3: string;
  exS3H3: string;
  exS3P: string;
  s3ScoreCaption: string;
  s3Raisonnement: string;

  // ── Section 4 — Les renversements à l'oreille ──
  renvH2: string;
  renvP1: string;
  renvP2: string;
  s4ScoreCaption: string;
  s4Apres: string;
  septH3: string;
  septP: string;
  vCaption: string;
  v7Caption: string;
  septApres: string;

  // ── Section 5 — La mémoire harmonique ──
  ecoutesH2: string;
  ecoutesP1: string;
  ecoutesHeaders: string[]; // 2
  ecoutesRows: { n: string; objectif: string }[]; // 6
  crayonP: string;

  // ── Section 6 — Boucler la boucle ──
  boucleH2: string;
  boucleP1: string;
  diagIntro: string;
  diagHeaders: string[]; // 3
  diagRows: { erreur: string; revele: string; remede: string }[]; // 3
  boucleP2: string;

  // ── Section 7 — Entraînement ──
  entrainH2: string;
  ficheH3: string;
  ficheLines: string[]; // 6
  quizH3: string;
  questions: Question[]; // 9
  protoH3: string;
  protoSteps: { titre: string; desc: string }[]; // 3
  linkReleve: { titre: string; desc: string };
  drillsH3: string;
  drill1Titre: string;
  drill1Enonce: string;
  drill1Corrige: string;
  drill1ScoreCaption: string;
  drill2Titre: string;
  drill2Enonce: string;
  drill2Corrige: string;
  drill2ScoreCaption: string;
  voirCorrige: string;
  masquerCorrige: string;
  corrigeLabel: string;
}

// ════════════════════════════════════════════════════════════════════════════
// FR — fait foi (transcription de la spec validée)
// ════════════════════════════════════════════════════════════════════════════

const fr: Cours48Locale = {
  maitreConcept: "Le relevé — entendre pour écrire, écrire pour entendre",
  maitreAnecdote:
    "Nadia Boulanger (1887–1979) a formé à Paris et à Fontainebleau des générations de compositeurs — Aaron Copland, Philip Glass, Astor Piazzolla, Quincy Jones. Sa discipline était implacable : solfège, harmonie au clavier et dictée quotidiennes. Elle exigeait de ses élèves qu'ils sachent chanter chaque voix d'un choral avant de l'écrire, et faisait relever au piano des progressions entières — pour elle, l'oreille intérieure n'était pas un don, mais le produit d'un entraînement méthodique.",
  maitreLesson:
    "L'oreille se construit comme une technique instrumentale : la basse chantée en degrés, les formules reconnues comme des blocs, une écoute = un objectif. Le relevé n'est pas un test de don, c'est un protocole.",

  noteTravail:
    "<strong>Ici, le piano de synthèse est un atout, pas une limite.</strong> Le cours 45 (commentaire d'écoute) devait avouer que l'absence de phonothèque interdisait le travail du timbre et de l'orchestration. Pour le relevé, c'est l'inverse : l'épreuve consiste à transcrire <strong>exactement</strong> des hauteurs et des accords, et un piano de synthèse est précisément l'instrument idéal pour cela — justesse parfaite, notes identiques à chaque réécoute, tempo stable, aucune réverbération qui masque la basse. C'est d'ailleurs au piano que la plupart des professeurs de FM font travailler le relevé harmonique. Tout ce que l'épreuve demande — entendre une basse, des chiffrages, quatre voix — se travaille intégralement dans /releve. La seule chose que l'outil n'entraîne pas est la reconnaissance des timbres : c'est l'affaire du commentaire d'écoute (cours 45), pas du relevé.",

  quoiH2: "Qu'est-ce que le relevé ?",
  quoiP1:
    "Le relevé est l'exercice roi de la formation musicale supérieure : on vous fait entendre un fragment musical un nombre limité de fois, et vous devez le <strong>transcrire exactement</strong> — la basse, les accords, parfois les quatre voix. Il figure aux concours d'entrée des Pôles supérieurs et du CNSM, dans les cursus de FM supérieure et d'écriture. Là où le commentaire d'écoute (cours 45) demande de <strong>décrire, identifier et situer</strong> — un discours argumenté sur ce qu'on entend —, le relevé demande de <strong>noter, note à note</strong> : aucune approximation stylistique ne compense un accord faux. Et là où la dictée d'accords fait reconnaître des <strong>accords isolés</strong> (une étiquette par accord, hors contexte), le relevé porte sur une <strong>progression syntaxique</strong> : les accords s'enchaînent selon une grammaire, et cette grammaire est votre meilleure alliée — un accord deviné se vérifie par ceux qui l'entourent.",
  quoiP2:
    "Ce que le relevé entraîne réellement dépasse l'épreuve : la <strong>mémoire harmonique</strong> (retenir une progression entière entre deux écoutes), l'<strong>oreille intérieure</strong> — ce que les anglo-saxons nomment <em>audiation</em> : entendre mentalement une musique absente —, et le réflexe d'entendre la musique <strong>en fonctions et en voix</strong>, pas en masse sonore. C'est la compétence même de l'écriture (cours 26 et 42), prise dans l'autre sens.",
  regleOr:
    "<strong>La tonalité, puis la cadence, puis la basse, puis les chiffrages.</strong> On ne transcrit jamais un accord isolé « au milieu » : on installe d'abord le cadre (tonalité, cadence finale), puis le squelette (la basse en degrés), et les chiffrages viennent s'y poser. Commencer par le détail est la faute méthodologique la plus coûteuse.",
  linkCours45: {
    titre: "Cours 45 — Méthodologie du commentaire d'écoute",
    desc: "La discipline sœur : décrire et situer ce qu'on entend. Le relevé, lui, note — les deux épreuves se complètent.",
  },
  linkGo: "Accéder →",

  basseH2: "La basse d'abord : la stratégie fondamentale",
  basseP1:
    "Pourquoi la basse ? Parce qu'elle <strong>porte l'harmonie</strong> : c'est elle qui décide du degré et du renversement, et tout chiffrage se définit par rapport à elle (cours 42). Et parce que l'oreille s'accroche naturellement aux <strong>voix extrêmes</strong> : le soprano (la mélodie) et la basse s'entendent mieux que les voix intérieures. Le soprano, on l'entend sans effort ; la basse, il faut apprendre à l'<strong>isoler</strong> — c'est le premier geste du relevé, et c'est tout l'objet du palier ① de /releve.",
  basseTechniques: [
    "<strong>Chanter intérieurement la basse</strong> pendant l'écoute (ou à mi-voix en entraînement) : ce qu'on peut chanter, on peut le noter. Si vous ne pouvez pas la chanter, réécoutez — ne devinez pas.",
    "<strong>La solfier en degrés, pas en notes absolues</strong> : chanter « 1 – 4 – 5 – 1 » et non « Do – Fa – Sol – Do ». Le degré est transférable à toutes les tonalités et dit immédiatement la fonction ; la note absolue n'est retrouvée qu'à la fin, en appliquant la tonalité identifiée à la première écoute.",
    "<strong>Repérer les mouvements types</strong> : le saut de quarte ascendante ou de quinte descendante vers la tonique (5 → 1, la signature cadentielle), le mouvement conjoint (souvent signe de renversements — section 4), le chromatisme (souvent une dominante secondaire).",
  ],
  basseOctave:
    "<strong>Le principe de l'octave libre</strong> : au relevé de basse, on note la <strong>classe de la note</strong> — entendre « un Sol » suffit, que ce soit Sol2 ou Sol3. C'est le standard de l'épreuve, et c'est exactement ainsi que le palier ① de /releve corrige : à l'octave près.",
  exS2H3: "Exemple travaillé — la basse chantée en degrés (Do majeur, I–VI–IV–V–I)",
  exS2P:
    "Basse entendue : <strong>Do – La – Fa – Sol – Do</strong> (Do3, La2, Fa2, Sol2, Do3). On la chante : <strong>« 1 – 6 – 4 – 5 – 1 »</strong>. La lecture en degrés raconte déjà l'harmonie : départ tonique, descente de tierce vers le relatif (6), la sous-dominante (4), la dominante (5), retour tonique — T, T-substitut, SD, D, T.",
  s2ScoreCaption: "Do majeur, <strong>I – VI – IV – V – I</strong> — le SATB complet, pour l'oreille.",
  s2Apres:
    "<strong>À entendre</strong> : le soprano reste posé sur Do pendant trois accords — c'est la basse, et elle seule, qui fait avancer l'harmonie. Voilà pourquoi on la relève d'abord. Écoutez la basse seule et chantez-la en degrés : « 1 – 6 – 4 – 5 – 1 ».",
  btnProg: "La progression",
  btnBasse: "La basse seule",

  fonctH2: "Entendre les fonctions avant les accords",
  fonctP1:
    "Le débutant transcrit accord par accord et se noie ; l'oreille formée entend des <strong>fonctions</strong> puis des <strong>formules</strong>. Première passe : la grille <strong>T / SD / D</strong> (cours 3 et 4) — chaque accord entendu est d'abord rangé dans une des trois familles (stable / préparation / tension). C'est une classification grossière, mais elle est <strong>rapide et robuste</strong> : on l'obtient dès la deuxième écoute, et elle réduit drastiquement les candidats pour chaque mesure.",
  fonctP2:
    "Deuxième réflexe, le plus rentable de tout le cours : <strong>identifier la cadence finale en premier</strong>. Elle est l'endroit le plus prévisible et le plus audible de l'extrait ; elle confirme la tonalité et livre <strong>gratuitement les deux derniers accords</strong> (V–I si parfaite, arrêt sur V si demi-cadence, V–VI si rompue). Au relevé, on remplit la fin avant le milieu.",
  fonctP3:
    "Troisième réflexe : reconnaître les <strong>formules comme des blocs</strong> (<em>chunks</em>), pas note à note — II6–V–I, I6/4–V, la marche de quintes. Le 6/4 cadentiel a une sonorité <strong>immanquable</strong> : un accord de tonique suspendu au-dessus de la basse de dominante, un appui qui appelle sa résolution (section 4). Qui reconnaît le bloc écrit trois chiffrages d'un coup.",
  exS3H3: "Exemple travaillé — cinq accords, deux blocs (Do majeur)",
  exS3P:
    "Progression entendue : basse <strong>Do – Fa – Sol – Sol – Do</strong> (degrés <strong>1 – 4 – 5 – 5 – 1</strong>).",
  s3ScoreCaption: "Do majeur : <strong>I – II6 – I6/4 – V7 – I</strong>.",
  s3Raisonnement:
    "Raisonnement par blocs : premier accord = tonique d'installation (bloc 1). Puis l'oreille reconnaît <strong>la grande formule cadentielle [II6 – I6/4 – V7 – I]</strong> comme un seul geste : basse 4–5–5–1, l'appui caractéristique du 6/4 sur la dominante, la septième (Fa, à l'alto) qui descend sur Mi. Quatre chiffrages obtenus en une reconnaissance — au lieu de quatre paris successifs. Nuance honnête : le <em>chunking</em> suppose un vocabulaire déjà constitué ; il s'acquiert en réalisant ces formules à l'écrit (cours 26 et 42) jusqu'à ce qu'elles deviennent des unités d'écoute.",

  renvH2: "Les renversements à l'oreille",
  renvP1:
    "Un même accord change de visage selon sa basse (cours 42). À l'oreille : la <strong>position fondamentale</strong> est stable, assise, conclusive ; l'<strong>accord de sixte</strong> (basse = tierce) est plus léger, ouvert, « en marche » — il donne envie de continuer ; la <strong>quarte-et-sixte</strong> est instable, suspendue — la quarte contre la basse demande résolution, et c'est ce qui rend le 6/4 cadentiel si reconnaissable.",
  renvP2:
    "Le test le plus fiable est celui de la <strong>ligne de basse</strong> : quand la basse se déplace <strong>par degrés conjoints</strong> alors que l'harmonie reste dans la même couleur, il y a très probablement des renversements — l'école écrit ses basses chantantes en intercalant des sixtes. Écoutez :",
  s4ScoreCaption: "<strong>I – I6 – IV</strong> (Do majeur), basse <strong>Do3 – Mi3 – Fa3</strong>.",
  s4Apres:
    "Même couleur de tonique sur les deux premiers accords, mais la basse <strong>monte d'une tierce puis d'un degré</strong> : c'est la marque du I6 (la quinte de IV est doublée par prolongation du Do commun — doublure admise).",
  septH3: "La signature de V7 : la septième qui descend",
  septP:
    "Pour les accords de septième, la signature de <strong>V7 contre V</strong> est la <strong>septième qui descend</strong>. Comparez en Do majeur — les deux accords ne diffèrent que d'une note (l'alto) :",
  vCaption:
    "<strong>V → I</strong> : (Sol2, Ré4, Sol4, Si4) → (Do3, Mi4, Sol4, Do5) — tension simple, résolue par la sensible.",
  v7Caption:
    "<strong>V7 → I</strong> : (Sol2, Ré4, <strong>Fa4</strong>, Si4) → (Do3, Do4, <strong>Mi4</strong>, Do5) — le Fa ajouté frotte contre le Si (triton) et <strong>descend obligatoirement sur Mi</strong>.",
  septApres:
    "C'est cette note qui tombe d'un degré au moment de la résolution qui trahit la septième : si vous l'entendez, écrivez V7 ; sinon, V. Écoutez les deux paires l'une après l'autre — la différence tient à une seule note, l'alto : Sol4 dans V, Fa4 dans V7.",

  ecoutesH2: "La mémoire harmonique : stratégies d'écoute limitée",
  ecoutesP1:
    "Le mode examen de /releve reproduit la discipline du concours : <strong>6 écoutes</strong> de la progression entière, sans réécoute par accord, compteur affiché. Six écoutes semblent confortables ; elles fondent comme neige si chacune n'a pas un <strong>objectif unique et déclaré d'avance</strong>. La répartition d'école :",
  ecoutesHeaders: ["Écoute", "Objectif unique"],
  ecoutesRows: [
    { n: "1", objectif: "<strong>Tonalité et cadence finale</strong> : chanter intérieurement la tonique, identifier le mode, nommer la cadence — noter les deux derniers accords." },
    { n: "2", objectif: "<strong>La basse, en degrés</strong> : la chanter intérieurement d'un bout à l'autre, noter la suite de degrés (1–6–4–5–1…)." },
    { n: "3", objectif: "<strong>Vérifier la basse</strong> : confirmer les mesures sûres, cibler les mesures douteuses — c'est l'écoute de la certitude, pas de la nouveauté." },
    { n: "4", objectif: "<strong>Chiffrages et couleurs</strong> : renversements (basse conjointe ?), septièmes (une note qui descend ?), le 6/4 cadentiel." },
    { n: "5", objectif: "<strong>Voix supérieures</strong> : le soprano d'abord (il s'entend seul), puis les voix intérieures par déduction (les notes de l'accord non encore placées)." },
    { n: "6", objectif: "<strong>Contrôle global</strong> : relire sa copie en chantant intérieurement — l'écoute confronte ce qu'on a écrit à ce qui sonne. On ne découvre plus, on vérifie." },
  ],
  crayonP:
    "Deux disciplines de crayon. D'abord, <strong>noter les certitudes d'abord</strong> : la cadence finale, les mesures évidentes — une copie de relevé se remplit par les deux bouts, jamais linéairement. Ensuite, la <strong>discipline du décrochage</strong> : une mesure perdue ne doit jamais faire dérailler la suite. On laisse un blanc, on garde le compte des mesures (la pulsation continue), et on <strong>se raccroche à la cadence suivante</strong> — point d'ancrage toujours reconnaissable. Un blanc coûte une mesure ; une panique coûte la copie.",

  boucleH2: "Du relevé à l'écriture : boucler la boucle",
  boucleP1:
    "Le relevé est l'<strong>inverse exact de la réalisation</strong>. Aux cours 26 et 42, on vous donne une basse chiffrée et vous produisez les sons ; au relevé, on vous donne les sons et vous retrouvez la basse et les chiffrages. Ce sont les deux sens d'une même compétence : <strong>ce qu'on sait écrire, on sait l'entendre — et réciproquement</strong>. C'est pourquoi le palier ③ de /releve (écrire le SATB complet sous la dictée, avec la correction de conformité de l'éditeur) est la boucle complète : écoute → notation → vérification d'écriture, dans un seul exercice.",
  diagIntro: "Vos erreurs de relevé sont des <strong>diagnostics</strong>. Les trois patrons les plus fréquents :",
  diagHeaders: ["Erreur récurrente", "Ce qu'elle révèle", "Remédiation"],
  diagRows: [
    {
      erreur: "<strong>Confondre I6 et VI</strong> (deux notes communes : Do et Mi en Do majeur)",
      revele: "Vous entendez la <strong>fonction</strong> — la couleur de tonique prolongée — mais pas la <strong>basse réelle</strong> (Mi contre La).",
      remede: "Palier ① intensif : la basse seule, chantée en degrés, jusqu'à ce que Mi et La soient inconfondables.",
    },
    {
      erreur: "<strong>Rater les voix intérieures</strong> (soprano et basse justes, alto/ténor faux)",
      revele: "Vous écoutez <strong>en accords</strong> (une couleur globale) et non <strong>en lignes</strong> (quatre voix qui chantent).",
      remede: "Palier ③ en entraînement, avec réécoute par accord : chanter chaque voix intérieure, puis la noter. La déduction aide : les notes de l'accord déjà identifié qui ne sont ni au soprano ni à la basse.",
    },
    {
      erreur: "<strong>Écrire V quand c'était V7</strong> (ou l'inverse)",
      revele: "Vous n'avez pas suivi la <strong>note qui descend</strong> — la septième et sa résolution obligée (section 4).",
      remede: "Comparaisons ciblées V/V7 (l'exemple de la section 4, dans plusieurs tonalités), puis palier ② en traquant systématiquement les chiffrages de septième.",
    },
  ],
  boucleP2:
    "Le progrès au relevé nourrit l'écriture en retour : qui a entendu cent fois la septième de V7 descendre ne l'écrira plus jamais montante. C'est la fermeture du cursus DNSPM : analyser, écrire, entendre — trois verbes, une seule oreille.",

  entrainH2: "Entraînement",
  ficheH3: "La fiche réflexe du relevé (à mémoriser — 6 lignes)",
  ficheLines: [
    "<strong>Tonalité d'abord</strong> : chanter la tonique, identifier le mode.",
    "<strong>Cadence finale ensuite</strong> : elle donne les deux derniers accords gratuitement.",
    "<strong>La basse avant tout</strong>, chantée en degrés, à l'octave près.",
    "<strong>Des fonctions et des formules</strong> (T/SD/D, II6–V–I, 6/4 cadentiel), jamais des accords isolés.",
    "<strong>Basse conjointe = renversements probables ; une note qui descend à la résolution = septième.</strong>",
    "<strong>Au crayon, les certitudes d'abord</strong> ; une mesure perdue = un blanc, et on se raccroche à la cadence suivante.",
  ],

  quizH3: "Quiz",
  questions: [
    {
      q: "À la première écoute d'un relevé, vous notez en priorité :",
      opts: ["Le premier accord", "La tonalité et la cadence finale", "La ligne de soprano", "Le rythme harmonique"],
      a: 1,
      fb: "Le cadre d'abord : la tonalité permet de traduire les degrés en notes, la cadence finale livre les deux derniers accords.",
    },
    {
      q: "La basse descend par degrés conjoints sous une harmonie qui garde la même couleur. Vous soupçonnez :",
      opts: ["Une modulation", "Une marche de quintes", "Des renversements", "Une pédale"],
      a: 2,
      fb: "Une basse conjointe sous une harmonie stable est la marque des accords de sixte intercalés (test de la ligne de basse, section 4).",
    },
    {
      q: "Pourquoi relever la basse avant tout ?",
      opts: ["Elle porte l'harmonie et détermine degré et renversement", "Elle est la voix la plus grave donc la plus forte", "Elle bouge moins que les autres voix", "Elle est toujours doublée"],
      a: 0,
      fb: "Tout chiffrage se définit par rapport à la basse ; le soprano s'entend sans effort, la basse se travaille.",
    },
    {
      q: "En fin de phrase, la basse monte d'une quarte (Sol → Do en Do majeur). Vous entendez :",
      opts: ["Une cadence plagale", "Une demi-cadence", "Une cadence rompue", "Une cadence parfaite"],
      a: 3,
      fb: "Le saut 5 → 1 est la signature de basse de la cadence parfaite (V–I).",
    },
    {
      q: "Qu'est-ce qui distingue V7 de V à l'oreille ?",
      opts: ["V7 est plus fort", "La septième, qui frotte (triton) et descend d'un degré à la résolution", "V7 est toujours arpégé", "La basse est différente"],
      a: 1,
      fb: "En Do majeur : le Fa ajouté contre le Si, qui tombe sur Mi. Si aucune note ne descend ainsi, c'était V.",
    },
    {
      q: "Le 6/4 cadentiel s'entend comme :",
      opts: ["Un accord de tonique suspendu sur la basse de dominante, qui appelle V", "Un accord conclusif et stable", "Une modulation à la dominante", "Un accord de passage sans importance"],
      a: 0,
      fb: "L'appui caractéristique avant V : basse déjà sur 5, accord de tonique au-dessus, résolution attendue (6→5, 4→3).",
    },
    {
      q: "Vous perdez le fil à la mesure 3 d'un relevé de huit mesures. Vous :",
      opts: ["Réécrivez la mesure 2 en attendant", "Abandonnez la basse pour le soprano", "Laissez un blanc, gardez le compte des mesures et vous raccrochez à la cadence suivante", "Demandez une écoute supplémentaire"],
      a: 2,
      fb: "Un blanc coûte une mesure ; un décrochage non maîtrisé coûte la copie (section 5).",
    },
    {
      q: "Pourquoi solfier la basse en degrés (1–6–4–5–1) plutôt qu'en notes absolues ?",
      opts: ["C'est plus rapide à écrire", "Les notes absolues sont impossibles à entendre", "C'est la seule notation acceptée aux concours", "Le degré est transférable à toutes les tonalités et dit la fonction"],
      a: 3,
      fb: "Le degré porte la fonction (T/SD/D) ; la note absolue se déduit à la fin, une fois la tonalité posée.",
    },
    {
      q: "Vous confondez régulièrement I6 et VI. Le diagnostic :",
      opts: ["Vous entendez la fonction (couleur de tonique), pas la basse réelle", "Vous ne connaissez pas vos gammes", "Votre mémoire est trop courte", "Vous écoutez trop la basse"],
      a: 0,
      fb: "Les deux accords partagent Do et Mi (en Do majeur) ; seule la basse (Mi contre La) les départage. Remède : palier ① de /releve.",
    },
  ],

  protoH3: "Protocole guidé /releve — trois séances types",
  protoSteps: [
    {
      titre: "Séance 1 — Découverte (palier ①, mode entraînement)",
      desc: "Filtres : niveau 1, tonalités majeures. Écoutes illimitées, réécoute par accord autorisée. Pour chaque exercice : chanter la basse intérieurement <strong>avant</strong> de la noter, la solfier en degrés, puis seulement la saisir (l'octave est libre : la classe de note suffit). Faire cinq exercices ; objectif : toutes les mesures justes sur les deux derniers.",
    },
    {
      titre: "Séance 2 — Montée (palier ②, puis discipline d'examen)",
      desc: "Palier ② en entraînement : la basse correcte est donnée, choisir les chiffrages parmi les pastilles — traquer les renversements (basse conjointe ?) et les septièmes (note qui descend ?). Puis repasser au palier ① en <strong>mode examen</strong> : 6 écoutes comptées, appliquer la répartition de la section 5 (une écoute = un objectif). Ouvrir progressivement les filtres (niveau 2, tonalités mineures).",
    },
    {
      titre: "Séance 3 — Examen blanc (palier ③, mode examen)",
      desc: "Le relevé complet : écrire les quatre voix en 6 écoutes. Certitudes d'abord (cadence finale, puis basse), voix intérieures par déduction, dernière écoute en contrôle. Après notation, analyser chaque faute avec la table de diagnostic de la section 6 et en déduire la séance suivante.",
    },
  ],
  linkReleve: {
    titre: "/releve — Relevé harmonique",
    desc: "L'outil compagnon du cours : la basse, les chiffrages, le SATB complet — modes entraînement et examen (6 écoutes).",
  },

  drillsH3: "Drills écrits",
  drill1Titre: "Drill écrit 1 — Reconstruire un relevé décrit (Sol majeur)",
  drill1Enonce:
    "<em>On vous décrit l'écoute :</em> « Sol majeur, cinq accords. La basse chante 1 – 4 – 5 – 5 – 1. Sur le premier des deux 5, l'accord sonne comme une tonique suspendue qui appelle la suite ; sur le second, une note frotte puis descend d'un degré à la résolution. Cadence parfaite conclusive. » <strong>Écrivez la basse (notes exactes), les chiffrages, puis une réalisation SATB d'école.</strong>",
  drill1Corrige:
    "Basse : <strong>Sol2 – Do3 – Ré3 – Ré3 – Sol2</strong>. Chiffrages : <strong>I – II6 – I6/4 – V7 – I</strong> (la « tonique suspendue » sur la basse de dominante = 6/4 cadentiel ; la note qui frotte et descend = la septième Do → Si). Résolutions du 6/4 : Si→La (6→5) au soprano, Sol→Fa♯ (4→3) à l'alto ; la septième Do (ténor) descend sur Si ; V7 complet → I complet, la sensible intérieure Fa♯ descendant sur Ré — licence d'école. C'est la formule de la section 3, transposée : la preuve que le <em>chunk</em> se transporte dans toutes les tonalités.",
  drill1ScoreCaption: "Sol majeur : <strong>I – II6 – I6/4 – V7 – I</strong> — la réalisation d'école du corrigé.",
  drill2Titre: "Drill écrit 2 — Le tétracorde descendant (la mineur)",
  drill2Enonce:
    "<em>On vous décrit l'écoute :</em> « La mineur, quatre accords. La basse descend par degrés conjoints de la tonique à la dominante : 1 – 7 – 6 – 5. Le dernier accord est majeur, suspensif — la phrase reste ouverte. » <strong>Écrivez la basse (notes exactes) et les chiffrages, en justifiant les renversements.</strong>",
  drill2Corrige:
    "Basse : <strong>La2 – Sol2 – Fa2 – Mi2</strong>. Chiffrages : <strong>I – V6 – IV6 – V</strong> (en mineur : i – v6 – iv6 – V). Justification : la basse conjointe sous une couleur qui reste sombre impose des renversements sur les degrés intermédiaires — Sol est la tierce de Mi–Sol–Si (v6, le 7e degré non sensible du mineur naturel descendant), Fa la tierce de Ré–Fa–La (iv6) ; l'arrivée sur Mi porte le V <strong>majeur</strong> (avec Sol♯ : Mi–Sol♯–Si), d'où la demi-cadence suspensive. C'est le <strong>tétracorde de lamento</strong>, formule d'école par excellence : qui le reconnaît comme un bloc écrit les quatre chiffrages en une seule écoute.",
  drill2ScoreCaption:
    "La mineur, <strong>i – v6 – iv6 – V</strong> — le squelette des voix extrêmes : la basse du corrigé et un dessus en dixièmes (Do5–Si4–La4–Sol♯4). Le Sol♮ du mineur naturel à la basse, le Sol♯ de la dominante majeure au dessus.",
  voirCorrige: "Voir le corrigé",
  masquerCorrige: "Masquer le corrigé",
  corrigeLabel: "Corrigé modèle",
};

// ════════════════════════════════════════════════════════════════════════════
// EN
// ════════════════════════════════════════════════════════════════════════════

const en: Cours48Locale = {
  maitreConcept: "Harmonic dictation — hear to write, write to hear",
  maitreAnecdote:
    "Nadia Boulanger (1887–1979) trained generations of composers in Paris and at Fontainebleau — Aaron Copland, Philip Glass, Astor Piazzolla, Quincy Jones. Her discipline was relentless: daily solfège, keyboard harmony and dictation. She required her students to sing every voice of a chorale before writing it down, and had them transcribe whole progressions played at the piano — for her, the inner ear was not a gift but the product of methodical training.",
  maitreLesson:
    "The ear is built like an instrumental technique: the bass sung in scale degrees, formulas recognised as blocks, one listening = one goal. Harmonic dictation is not a test of talent — it is a protocol.",

  noteTravail:
    "<strong>Here, the synthesised piano is an asset, not a limitation.</strong> Course 45 (listening commentary) had to admit that the lack of a recording library ruled out any work on timbre and orchestration. For harmonic dictation it is the opposite: the exam consists of transcribing pitches and chords <strong>exactly</strong>, and a synthesised piano is precisely the ideal instrument for that — perfect intonation, identical notes on every replay, steady tempo, no reverberation masking the bass. It is at the piano, in fact, that most aural-training teachers work on harmonic dictation. Everything the exam demands — hearing a bass, figures, four voices — can be trained entirely in /releve. The only thing the tool does not train is timbre recognition: that is the business of the listening commentary (course 45), not of dictation.",

  quoiH2: "What is the relevé (harmonic dictation)?",
  quoiP1:
    "The relevé — harmonic dictation — is the king of exercises in advanced aural training: a musical fragment is played a limited number of times, and you must <strong>transcribe it exactly</strong> — the bass, the chords, sometimes all four voices. It appears in the entrance exams of the French Pôles supérieurs and the CNSM, and throughout advanced musicianship and writing curricula. Where the listening commentary (course 45) asks you to <strong>describe, identify and situate</strong> — an argued discourse about what you hear —, dictation asks you to <strong>write down, note by note</strong>: no stylistic approximation makes up for a wrong chord. And where chord dictation trains you to recognise <strong>isolated chords</strong> (one label per chord, out of context), the relevé deals with a <strong>syntactic progression</strong>: chords follow one another according to a grammar, and that grammar is your best ally — a guessed chord is checked against its neighbours.",
  quoiP2:
    "What dictation really trains goes beyond the exam: <strong>harmonic memory</strong> (holding a whole progression between two listenings), the <strong>inner ear</strong> — what English-language pedagogy calls <em>audiation</em>: mentally hearing music that is not sounding —, and the reflex of hearing music <strong>in functions and in voices</strong>, not as a mass of sound. It is the very skill of written harmony (courses 26 and 42), taken in the other direction.",
  regleOr:
    "<strong>The key, then the cadence, then the bass, then the figures.</strong> Never transcribe an isolated chord « in the middle »: first set the frame (key, final cadence), then the skeleton (the bass in degrees), and the figures settle onto it. Starting with the detail is the most costly methodological mistake.",
  linkCours45: {
    titre: "Course 45 — Listening commentary methodology",
    desc: "The sister discipline: describing and situating what you hear. Dictation, for its part, writes it down — the two exams complete each other.",
  },
  linkGo: "Open →",

  basseH2: "Bass first: the fundamental strategy",
  basseP1:
    "Why the bass? Because it <strong>carries the harmony</strong>: it decides the degree and the inversion, and every figure is defined relative to it (course 42). And because the ear naturally clings to the <strong>outer voices</strong>: the soprano (the melody) and the bass are heard better than the inner voices. The soprano is heard effortlessly; the bass must be learned — it must be <strong>isolated</strong>: that is the first gesture of dictation, and the whole point of level ① of /releve.",
  basseTechniques: [
    "<strong>Sing the bass inwardly</strong> while listening (or under your breath when practising): what you can sing, you can write down. If you cannot sing it, listen again — do not guess.",
    "<strong>Sol-fa it in scale degrees, not absolute notes</strong>: sing « 1 – 4 – 5 – 1 », not « Do – Fa – Sol – Do ». The degree transfers to every key and states the function immediately; the absolute note is recovered only at the end, by applying the key identified at the first listening.",
    "<strong>Spot the standard motions</strong>: the leap of a rising fourth or falling fifth to the tonic (5 → 1, the cadential signature), stepwise motion (often a sign of inversions — section 4), chromaticism (often a secondary dominant).",
  ],
  basseOctave:
    "<strong>The free-octave principle</strong>: in bass dictation you write the <strong>pitch class</strong> — hearing « a Sol » is enough, whether it is Sol2 or Sol3. That is the exam standard, and exactly how level ① of /releve marks: to within the octave.",
  exS2H3: "Worked example — the bass sung in degrees (Do major, I–VI–IV–V–I)",
  exS2P:
    "Bass heard: <strong>Do – La – Fa – Sol – Do</strong> (Do3, La2, Fa2, Sol2, Do3). You sing it: <strong>« 1 – 6 – 4 – 5 – 1 »</strong>. The reading in degrees already tells the harmony: tonic departure, a third down to the relative (6), the subdominant (4), the dominant (5), tonic return — T, T-substitute, SD, D, T.",
  s2ScoreCaption: "Do major, <strong>I – VI – IV – V – I</strong> — the full SATB, for the ear.",
  s2Apres:
    "<strong>Listen for this</strong>: the soprano sits on Do for three chords — it is the bass, and the bass alone, that moves the harmony forward. That is why you transcribe it first. Play the bass alone and sing it in degrees: « 1 – 6 – 4 – 5 – 1 ».",
  btnProg: "The progression",
  btnBasse: "The bass alone",

  fonctH2: "Hearing functions before chords",
  fonctP1:
    "The beginner transcribes chord by chord and drowns; the trained ear hears <strong>functions</strong>, then <strong>formulas</strong>. First pass: the <strong>T / SD / D</strong> grid (courses 3 and 4) — every chord heard is first filed into one of the three families (stable / preparation / tension). It is a coarse classification, but it is <strong>fast and robust</strong>: you have it by the second listening, and it drastically narrows the candidates for each bar.",
  fonctP2:
    "Second reflex, the most profitable of the whole course: <strong>identify the final cadence first</strong>. It is the most predictable and most audible spot of the excerpt; it confirms the key and hands you <strong>the last two chords for free</strong> (V–I if perfect, a stop on V if a half cadence, V–VI if deceptive). In dictation, you fill in the end before the middle.",
  fonctP3:
    "Third reflex: recognise <strong>formulas as blocks</strong> (<em>chunks</em>), not note by note — II6–V–I, I6/4–V, the circle-of-fifths sequence. The cadential 6/4 has an <strong>unmistakable</strong> sound: a tonic chord suspended above the dominant bass, a leaning that calls for its resolution (section 4). Whoever recognises the block writes three figures in one stroke.",
  exS3H3: "Worked example — five chords, two blocks (Do major)",
  exS3P:
    "Progression heard: bass <strong>Do – Fa – Sol – Sol – Do</strong> (degrees <strong>1 – 4 – 5 – 5 – 1</strong>).",
  s3ScoreCaption: "Do major: <strong>I – II6 – I6/4 – V7 – I</strong>.",
  s3Raisonnement:
    "Block reasoning: first chord = opening tonic (block 1). Then the ear recognises <strong>the great cadential formula [II6 – I6/4 – V7 – I]</strong> as a single gesture: bass 4–5–5–1, the characteristic leaning of the 6/4 on the dominant, the seventh (Fa, in the alto) falling to Mi. Four figures obtained in one recognition — instead of four successive bets. An honest nuance: <em>chunking</em> presupposes an established vocabulary; it is acquired by realising these formulas in writing (courses 26 and 42) until they become units of listening.",

  renvH2: "Inversions by ear",
  renvP1:
    "One and the same chord changes face with its bass (course 42). By ear: <strong>root position</strong> is stable, grounded, conclusive; the <strong>sixth chord</strong> (bass = third) is lighter, open, « on the move » — it makes you want to continue; the <strong>six-four</strong> is unstable, suspended — the fourth against the bass demands resolution, which is what makes the cadential 6/4 so recognisable.",
  renvP2:
    "The most reliable test is the <strong>bass line</strong>: when the bass moves <strong>by step</strong> while the harmony stays in the same colour, there are very probably inversions — the school writes its singing basses by interleaving sixth chords. Listen:",
  s4ScoreCaption: "<strong>I – I6 – IV</strong> (Do major), bass <strong>Do3 – Mi3 – Fa3</strong>.",
  s4Apres:
    "The same tonic colour on the first two chords, but the bass <strong>rises a third then a step</strong>: that is the mark of I6 (the fifth of IV is doubled by prolonging the common Do — an accepted doubling).",
  septH3: "The V7 signature: the seventh that falls",
  septP:
    "For seventh chords, the signature of <strong>V7 versus V</strong> is the <strong>seventh that falls</strong>. Compare in Do major — the two chords differ by a single note (the alto):",
  vCaption:
    "<strong>V → I</strong>: (Sol2, Ré4, Sol4, Si4) → (Do3, Mi4, Sol4, Do5) — plain tension, resolved by the leading tone.",
  v7Caption:
    "<strong>V7 → I</strong>: (Sol2, Ré4, <strong>Fa4</strong>, Si4) → (Do3, Do4, <strong>Mi4</strong>, Do5) — the added Fa grinds against the Si (tritone) and <strong>must fall to Mi</strong>.",
  septApres:
    "It is this note dropping one step at the moment of resolution that betrays the seventh: if you hear it, write V7; if not, V. Play the two pairs one after the other — the difference lies in a single note, the alto: Sol4 in V, Fa4 in V7.",

  ecoutesH2: "Harmonic memory: strategies for limited listenings",
  ecoutesP1:
    "The exam mode of /releve reproduces the discipline of the competition: <strong>6 listenings</strong> of the whole progression, no per-chord replay, counter displayed. Six listenings sound comfortable; they melt like snow if each one does not have a <strong>single goal declared in advance</strong>. The school allocation:",
  ecoutesHeaders: ["Listening", "Single goal"],
  ecoutesRows: [
    { n: "1", objectif: "<strong>Key and final cadence</strong>: inwardly sing the tonic, identify the mode, name the cadence — write down the last two chords." },
    { n: "2", objectif: "<strong>The bass, in degrees</strong>: sing it inwardly from end to end, write the sequence of degrees (1–6–4–5–1…)." },
    { n: "3", objectif: "<strong>Verify the bass</strong>: confirm the sure bars, target the doubtful ones — this is the listening of certainty, not of novelty." },
    { n: "4", objectif: "<strong>Figures and colours</strong>: inversions (stepwise bass?), sevenths (a note that falls?), the cadential 6/4." },
    { n: "5", objectif: "<strong>Upper voices</strong>: the soprano first (it is heard on its own), then the inner voices by deduction (the chord notes not yet placed)." },
    { n: "6", objectif: "<strong>Global check</strong>: reread your copy while singing inwardly — the listening confronts what you wrote with what sounds. You no longer discover, you verify." },
  ],
  crayonP:
    "Two pencil disciplines. First, <strong>write the certainties first</strong>: the final cadence, the obvious bars — a dictation copy fills in from both ends, never linearly. Second, the <strong>discipline of the dropout</strong>: one lost bar must never derail what follows. Leave a blank, keep counting bars (the pulse goes on), and <strong>latch onto the next cadence</strong> — an anchor point that is always recognisable. A blank costs one bar; a panic costs the whole copy.",

  boucleH2: "From dictation to writing: closing the loop",
  boucleP1:
    "Dictation is the <strong>exact inverse of realisation</strong>. In courses 26 and 42 you are given a figured bass and you produce the sounds; in dictation you are given the sounds and you recover the bass and the figures. They are the two directions of one and the same skill: <strong>what you can write, you can hear — and vice versa</strong>. That is why level ③ of /releve (writing the full SATB from dictation, with the editor's voice-leading checker) is the complete loop: listening → notation → written verification, in a single exercise.",
  diagIntro: "Your dictation errors are <strong>diagnoses</strong>. The three most frequent patterns:",
  diagHeaders: ["Recurring error", "What it reveals", "Remedy"],
  diagRows: [
    {
      erreur: "<strong>Confusing I6 and VI</strong> (two common notes: Do and Mi in Do major)",
      revele: "You hear the <strong>function</strong> — the prolonged tonic colour — but not the <strong>actual bass</strong> (Mi versus La).",
      remede: "Intensive level ①: the bass alone, sung in degrees, until Mi and La cannot be confused.",
    },
    {
      erreur: "<strong>Missing the inner voices</strong> (soprano and bass right, alto/tenor wrong)",
      revele: "You listen <strong>in chords</strong> (one global colour), not <strong>in lines</strong> (four singing voices).",
      remede: "Level ③ in practice mode, with per-chord replay: sing each inner voice, then write it. Deduction helps: the notes of the identified chord that are in neither the soprano nor the bass.",
    },
    {
      erreur: "<strong>Writing V when it was V7</strong> (or the reverse)",
      revele: "You did not follow the <strong>falling note</strong> — the seventh and its obligatory resolution (section 4).",
      remede: "Targeted V/V7 comparisons (the section 4 example, in several keys), then level ② while systematically hunting seventh figures.",
    },
  ],
  boucleP2:
    "Progress in dictation feeds writing in return: whoever has heard the seventh of V7 fall a hundred times will never again write it rising. This closes the DNSPM curriculum: analyse, write, hear — three verbs, one single ear.",

  entrainH2: "Training",
  ficheH3: "The dictation reflex card (memorise it — 6 lines)",
  ficheLines: [
    "<strong>Key first</strong>: sing the tonic, identify the mode.",
    "<strong>Final cadence next</strong>: it gives you the last two chords for free.",
    "<strong>The bass above all</strong>, sung in degrees, to within the octave.",
    "<strong>Functions and formulas</strong> (T/SD/D, II6–V–I, cadential 6/4), never isolated chords.",
    "<strong>Stepwise bass = probable inversions; a note falling at the resolution = a seventh.</strong>",
    "<strong>In pencil, certainties first</strong>; a lost bar = a blank, and you latch onto the next cadence.",
  ],

  quizH3: "Quiz",
  questions: [
    {
      q: "At the first listening of a dictation, you write down first:",
      opts: ["The first chord", "The key and the final cadence", "The soprano line", "The harmonic rhythm"],
      a: 1,
      fb: "The frame first: the key lets you translate degrees into notes, the final cadence hands you the last two chords.",
    },
    {
      q: "The bass descends by step under a harmony that keeps the same colour. You suspect:",
      opts: ["A modulation", "A circle-of-fifths sequence", "Inversions", "A pedal point"],
      a: 2,
      fb: "A stepwise bass under stable harmony is the mark of interleaved sixth chords (bass-line test, section 4).",
    },
    {
      q: "Why transcribe the bass first?",
      opts: ["It carries the harmony and determines degree and inversion", "It is the lowest voice, hence the loudest", "It moves less than the other voices", "It is always doubled"],
      a: 0,
      fb: "Every figure is defined relative to the bass; the soprano is heard effortlessly, the bass takes work.",
    },
    {
      q: "At the end of a phrase, the bass leaps up a fourth (Sol → Do in Do major). You hear:",
      opts: ["A plagal cadence", "A half cadence", "A deceptive cadence", "A perfect cadence"],
      a: 3,
      fb: "The 5 → 1 leap is the bass signature of the perfect cadence (V–I).",
    },
    {
      q: "What distinguishes V7 from V by ear?",
      opts: ["V7 is louder", "The seventh, which grinds (tritone) and falls one step at the resolution", "V7 is always arpeggiated", "The bass is different"],
      a: 1,
      fb: "In Do major: the added Fa against the Si, falling to Mi. If no note falls like this, it was V.",
    },
    {
      q: "The cadential 6/4 sounds like:",
      opts: ["A tonic chord suspended over the dominant bass, calling for V", "A conclusive, stable chord", "A modulation to the dominant", "An unimportant passing chord"],
      a: 0,
      fb: "The characteristic leaning before V: bass already on 5, tonic chord above, expected resolution (6→5, 4→3).",
    },
    {
      q: "You lose the thread at bar 3 of an eight-bar dictation. You:",
      opts: ["Rewrite bar 2 while waiting", "Abandon the bass for the soprano", "Leave a blank, keep counting bars and latch onto the next cadence", "Ask for an extra listening"],
      a: 2,
      fb: "A blank costs one bar; an unmanaged dropout costs the whole copy (section 5).",
    },
    {
      q: "Why sol-fa the bass in degrees (1–6–4–5–1) rather than in absolute notes?",
      opts: ["It is faster to write", "Absolute notes are impossible to hear", "It is the only notation accepted at exams", "The degree transfers to every key and states the function"],
      a: 3,
      fb: "The degree carries the function (T/SD/D); the absolute note is deduced at the end, once the key is set.",
    },
    {
      q: "You regularly confuse I6 and VI. The diagnosis:",
      opts: ["You hear the function (tonic colour), not the actual bass", "You do not know your scales", "Your memory is too short", "You listen to the bass too much"],
      a: 0,
      fb: "The two chords share Do and Mi (in Do major); only the bass (Mi versus La) tells them apart. Remedy: level ① of /releve.",
    },
  ],

  protoH3: "Guided /releve protocol — three model sessions",
  protoSteps: [
    {
      titre: "Session 1 — Discovery (level ①, practice mode)",
      desc: "Filters: level 1, major keys. Unlimited listenings, per-chord replay allowed. For each exercise: sing the bass inwardly <strong>before</strong> writing it, sol-fa it in degrees, and only then enter it (the octave is free: the pitch class is enough). Do five exercises; goal: every bar right on the last two.",
    },
    {
      titre: "Session 2 — Climbing (level ②, then exam discipline)",
      desc: "Level ② in practice mode: the correct bass is given, choose the figures among the chips — hunt the inversions (stepwise bass?) and the sevenths (a falling note?). Then return to level ① in <strong>exam mode</strong>: 6 counted listenings, apply the allocation of section 5 (one listening = one goal). Progressively open the filters (level 2, minor keys).",
    },
    {
      titre: "Session 3 — Mock exam (level ③, exam mode)",
      desc: "The full dictation: write the four voices in 6 listenings. Certainties first (final cadence, then bass), inner voices by deduction, last listening as a check. After writing, analyse every mistake with the diagnosis table of section 6 and derive the next session from it.",
    },
  ],
  linkReleve: {
    titre: "/releve — Harmonic dictation",
    desc: "The course's companion tool: the bass, the figures, the full SATB — practice and exam modes (6 listenings).",
  },

  drillsH3: "Written drills",
  drill1Titre: "Written drill 1 — Reconstructing a described dictation (Sol major)",
  drill1Enonce:
    "<em>The listening is described to you:</em> « Sol major, five chords. The bass sings 1 – 4 – 5 – 5 – 1. On the first of the two 5s, the chord sounds like a suspended tonic calling for what follows; on the second, a note grinds then falls one step at the resolution. Conclusive perfect cadence. » <strong>Write the bass (exact notes), the figures, then a school SATB realisation.</strong>",
  drill1Corrige:
    "Bass: <strong>Sol2 – Do3 – Ré3 – Ré3 – Sol2</strong>. Figures: <strong>I – II6 – I6/4 – V7 – I</strong> (the « suspended tonic » on the dominant bass = cadential 6/4; the note that grinds and falls = the seventh Do → Si). Resolutions of the 6/4: Si→La (6→5) in the soprano, Sol→Fa♯ (4→3) in the alto; the seventh Do (tenor) falls to Si; complete V7 → complete I, the inner leading tone Fa♯ falling to Ré — a school licence. It is the formula of section 3, transposed: proof that the <em>chunk</em> travels to every key.",
  drill1ScoreCaption: "Sol major: <strong>I – II6 – I6/4 – V7 – I</strong> — the model school realisation.",
  drill2Titre: "Written drill 2 — The descending tetrachord (La minor)",
  drill2Enonce:
    "<em>The listening is described to you:</em> « La minor, four chords. The bass descends by step from tonic to dominant: 1 – 7 – 6 – 5. The last chord is major, suspensive — the phrase stays open. » <strong>Write the bass (exact notes) and the figures, justifying the inversions.</strong>",
  drill2Corrige:
    "Bass: <strong>La2 – Sol2 – Fa2 – Mi2</strong>. Figures: <strong>I – V6 – IV6 – V</strong> (in minor: i – v6 – iv6 – V). Justification: the stepwise bass under a colour that stays dark forces inversions on the intermediate degrees — Sol is the third of Mi–Sol–Si (v6, the unraised 7th degree of the descending natural minor), Fa the third of Ré–Fa–La (iv6); the arrival on Mi carries the <strong>major</strong> V (with Sol♯: Mi–Sol♯–Si), hence the suspensive half cadence. This is the <strong>lamento tetrachord</strong>, the school formula par excellence: whoever recognises it as a block writes all four figures in a single listening.",
  drill2ScoreCaption:
    "La minor, <strong>i – v6 – iv6 – V</strong> — the outer-voice skeleton: the bass of the model answer and a top line in tenths (Do5–Si4–La4–Sol♯4). The Sol♮ of the natural minor in the bass, the Sol♯ of the major dominant on top.",
  voirCorrige: "Show the answer",
  masquerCorrige: "Hide the answer",
  corrigeLabel: "Model answer",
};

// ════════════════════════════════════════════════════════════════════════════
// DE
// ════════════════════════════════════════════════════════════════════════════

const de: Cours48Locale = {
  maitreConcept: "Das harmonische Diktat — hören, um zu schreiben; schreiben, um zu hören",
  maitreAnecdote:
    "Nadia Boulanger (1887–1979) bildete in Paris und Fontainebleau Generationen von Komponisten aus — Aaron Copland, Philip Glass, Astor Piazzolla, Quincy Jones. Ihre Disziplin war unerbittlich: täglich Solfège, Harmonielehre am Klavier und Diktat. Sie verlangte von ihren Schülern, jede Stimme eines Chorals singen zu können, bevor sie sie niederschrieben, und ließ ganze Akkordfolgen vom Klavier abhören — das innere Ohr war für sie keine Gabe, sondern das Ergebnis methodischen Trainings.",
  maitreLesson:
    "Das Gehör wird aufgebaut wie eine Instrumentaltechnik: der Bass in Stufen gesungen, Formeln als Blöcke erkannt, ein Hördurchgang = ein Ziel. Das harmonische Diktat ist kein Begabungstest, sondern ein Protokoll.",

  noteTravail:
    "<strong>Hier ist das Synthesizer-Klavier ein Vorteil, keine Einschränkung.</strong> Kurs 45 (Hörkommentar) musste eingestehen, dass ohne Phonothek die Arbeit an Klangfarbe und Orchestrierung unmöglich war. Beim harmonischen Diktat ist es umgekehrt: Die Prüfung besteht darin, Tonhöhen und Akkorde <strong>exakt</strong> zu transkribieren, und ein Synthesizer-Klavier ist genau das ideale Instrument dafür — perfekte Intonation, identische Töne bei jedem erneuten Anhören, stabiles Tempo, kein Nachhall, der den Bass verdeckt. Die meisten Gehörbildungslehrer üben das harmonische Diktat ohnehin am Klavier. Alles, was die Prüfung verlangt — einen Bass, Bezifferungen, vier Stimmen hören — lässt sich vollständig in /releve trainieren. Das Einzige, was das Werkzeug nicht übt, ist das Erkennen von Klangfarben: Das ist Sache des Hörkommentars (Kurs 45), nicht des Diktats.",

  quoiH2: "Was ist der relevé (das harmonische Diktat)?",
  quoiP1:
    "Der <em>relevé</em> — das harmonische Diktat — ist die Königsübung der höheren Gehörbildung: Ein musikalisches Fragment wird eine begrenzte Zahl von Malen vorgespielt, und Sie müssen es <strong>exakt transkribieren</strong> — den Bass, die Akkorde, manchmal alle vier Stimmen. Es steht in den Aufnahmeprüfungen der französischen Pôles supérieurs und des CNSM sowie in den Studiengängen für höhere Gehörbildung und Tonsatz. Wo der Hörkommentar (Kurs 45) verlangt zu <strong>beschreiben, zu identifizieren und einzuordnen</strong> — ein argumentierter Diskurs über das Gehörte —, verlangt das Diktat, <strong>Note für Note aufzuschreiben</strong>: Keine stilistische Annäherung gleicht einen falschen Akkord aus. Und wo das Akkorddiktat <strong>isolierte Akkorde</strong> erkennen lässt (ein Etikett pro Akkord, ohne Kontext), betrifft der relevé eine <strong>syntaktische Progression</strong>: Die Akkorde folgen einer Grammatik, und diese Grammatik ist Ihr bester Verbündeter — ein erratener Akkord wird an seinen Nachbarn überprüft.",
  quoiP2:
    "Was das Diktat wirklich trainiert, geht über die Prüfung hinaus: das <strong>harmonische Gedächtnis</strong> (eine ganze Progression zwischen zwei Hördurchgängen behalten), das <strong>innere Ohr</strong> — was die angelsächsische Pädagogik <em>audiation</em> nennt: abwesende Musik innerlich hören —, und den Reflex, Musik <strong>in Funktionen und Stimmen</strong> zu hören, nicht als Klangmasse. Es ist genau die Kompetenz des Tonsatzes (Kurse 26 und 42), in umgekehrter Richtung.",
  regleOr:
    "<strong>Erst die Tonart, dann die Kadenz, dann der Bass, dann die Bezifferungen.</strong> Man transkribiert nie einen isolierten Akkord « mittendrin »: Zuerst wird der Rahmen gesetzt (Tonart, Schlusskadenz), dann das Gerüst (der Bass in Stufen), und die Bezifferungen legen sich darauf. Mit dem Detail zu beginnen ist der teuerste methodische Fehler.",
  linkCours45: {
    titre: "Kurs 45 — Methodik des Hörkommentars",
    desc: "Die Schwesterdisziplin: beschreiben und einordnen, was man hört. Das Diktat dagegen notiert — die beiden Prüfungen ergänzen einander.",
  },
  linkGo: "Öffnen →",

  basseH2: "Der Bass zuerst: die Grundstrategie",
  basseP1:
    "Warum der Bass? Weil er <strong>die Harmonie trägt</strong>: Er entscheidet über Stufe und Umkehrung, und jede Bezifferung definiert sich relativ zu ihm (Kurs 42). Und weil sich das Ohr natürlich an die <strong>Außenstimmen</strong> klammert: Sopran (die Melodie) und Bass hört man besser als die Mittelstimmen. Den Sopran hört man mühelos; den Bass muss man <strong>isolieren</strong> lernen — das ist die erste Geste des Diktats und der ganze Zweck von Stufe ① in /releve.",
  basseTechniques: [
    "<strong>Den Bass innerlich singen</strong> während des Hörens (oder halblaut beim Üben): Was man singen kann, kann man notieren. Wenn Sie ihn nicht singen können, hören Sie erneut — raten Sie nicht.",
    "<strong>Ihn in Stufen solmisieren, nicht in absoluten Noten</strong>: « 1 – 4 – 5 – 1 » singen, nicht « Do – Fa – Sol – Do ». Die Stufe ist auf alle Tonarten übertragbar und nennt sofort die Funktion; die absolute Note wird erst am Ende gefunden, indem man die beim ersten Hören identifizierte Tonart anwendet.",
    "<strong>Die typischen Bewegungen erkennen</strong>: der Sprung einer aufsteigenden Quarte oder absteigenden Quinte zur Tonika (5 → 1, die kadenzielle Signatur), die Schrittbewegung (oft ein Zeichen für Umkehrungen — Abschnitt 4), die Chromatik (oft eine Zwischendominante).",
  ],
  basseOctave:
    "<strong>Das Prinzip der freien Oktave</strong>: Beim Bassdiktat notiert man die <strong>Tonklasse</strong> — « ein Sol » zu hören genügt, ob Sol2 oder Sol3. Das ist der Prüfungsstandard, und genau so korrigiert Stufe ① von /releve: auf die Oktave genau.",
  exS2H3: "Durchgearbeitetes Beispiel — der in Stufen gesungene Bass (Do-Dur, I–VI–IV–V–I)",
  exS2P:
    "Gehörter Bass: <strong>Do – La – Fa – Sol – Do</strong> (Do3, La2, Fa2, Sol2, Do3). Man singt: <strong>« 1 – 6 – 4 – 5 – 1 »</strong>. Die Lesart in Stufen erzählt bereits die Harmonie: Aufbruch von der Tonika, Terzabstieg zur Parallele (6), die Subdominante (4), die Dominante (5), Rückkehr zur Tonika — T, T-Stellvertreter, SD, D, T.",
  s2ScoreCaption: "Do-Dur, <strong>I – VI – IV – V – I</strong> — der vollständige SATB, für das Ohr.",
  s2Apres:
    "<strong>Hören Sie</strong>: Der Sopran bleibt drei Akkorde lang auf Do liegen — es ist der Bass, und nur er, der die Harmonie voranbringt. Deshalb wird er zuerst notiert. Spielen Sie den Bass allein und singen Sie ihn in Stufen: « 1 – 6 – 4 – 5 – 1 ».",
  btnProg: "Die Progression",
  btnBasse: "Der Bass allein",

  fonctH2: "Funktionen hören, bevor man Akkorde hört",
  fonctP1:
    "Der Anfänger transkribiert Akkord für Akkord und ertrinkt; das geschulte Ohr hört <strong>Funktionen</strong>, dann <strong>Formeln</strong>. Erster Durchgang: das Raster <strong>T / SD / D</strong> (Kurse 3 und 4) — jeder gehörte Akkord wird zunächst in eine der drei Familien eingeordnet (stabil / Vorbereitung / Spannung). Eine grobe Klassifikation, aber <strong>schnell und robust</strong>: Man hat sie ab dem zweiten Hören, und sie reduziert die Kandidaten für jeden Takt drastisch.",
  fonctP2:
    "Zweiter Reflex, der rentabelste des ganzen Kurses: <strong>zuerst die Schlusskadenz identifizieren</strong>. Sie ist die vorhersehbarste und hörbarste Stelle des Ausschnitts; sie bestätigt die Tonart und liefert <strong>die letzten beiden Akkorde gratis</strong> (V–I bei authentischer Kadenz, Halt auf V beim Halbschluss, V–VI beim Trugschluss). Im Diktat füllt man das Ende vor der Mitte aus.",
  fonctP3:
    "Dritter Reflex: <strong>Formeln als Blöcke</strong> (<em>Chunks</em>) erkennen, nicht Note für Note — II6–V–I, I6/4–V, die Quintfallsequenz. Der kadenzierende Quartsextakkord hat einen <strong>unverwechselbaren</strong> Klang: ein Tonika-Akkord, der über dem Dominantbass schwebt, ein Vorhalt, der nach Auflösung ruft (Abschnitt 4). Wer den Block erkennt, schreibt drei Bezifferungen auf einen Streich.",
  exS3H3: "Durchgearbeitetes Beispiel — fünf Akkorde, zwei Blöcke (Do-Dur)",
  exS3P:
    "Gehörte Progression: Bass <strong>Do – Fa – Sol – Sol – Do</strong> (Stufen <strong>1 – 4 – 5 – 5 – 1</strong>).",
  s3ScoreCaption: "Do-Dur: <strong>I – II6 – I6/4 – V7 – I</strong>.",
  s3Raisonnement:
    "Block-Denken: erster Akkord = Eröffnungstonika (Block 1). Dann erkennt das Ohr <strong>die große Kadenzformel [II6 – I6/4 – V7 – I]</strong> als eine einzige Geste: Bass 4–5–5–1, der charakteristische Vorhalt des 6/4 auf der Dominante, die Septime (Fa, im Alt), die auf Mi fällt. Vier Bezifferungen in einer einzigen Erkennung — statt vier aufeinanderfolgender Wetten. Ehrliche Nuance: das <em>Chunking</em> setzt ein bereits aufgebautes Vokabular voraus; man erwirbt es, indem man diese Formeln schriftlich aussetzt (Kurse 26 und 42), bis sie zu Höreinheiten werden.",

  renvH2: "Umkehrungen mit dem Ohr",
  renvP1:
    "Ein und derselbe Akkord wechselt sein Gesicht mit dem Bass (Kurs 42). Für das Ohr: Die <strong>Grundstellung</strong> ist stabil, gesetzt, schlusskräftig; der <strong>Sextakkord</strong> (Bass = Terz) ist leichter, offen, « in Bewegung » — er will weitergehen; der <strong>Quartsextakkord</strong> ist instabil, schwebend — die Quarte gegen den Bass verlangt Auflösung, und genau das macht den kadenzierenden 6/4 so erkennbar.",
  renvP2:
    "Der zuverlässigste Test ist der der <strong>Basslinie</strong>: Wenn der Bass sich <strong>schrittweise</strong> bewegt, während die Harmonie in derselben Farbe bleibt, gibt es sehr wahrscheinlich Umkehrungen — die Schule schreibt ihre sanglichen Bässe, indem sie Sextakkorde einschiebt. Hören Sie:",
  s4ScoreCaption: "<strong>I – I6 – IV</strong> (Do-Dur), Bass <strong>Do3 – Mi3 – Fa3</strong>.",
  s4Apres:
    "Dieselbe Tonika-Farbe auf den ersten beiden Akkorden, aber der Bass <strong>steigt eine Terz, dann einen Schritt</strong>: Das ist das Merkmal des I6 (die Quinte von IV wird durch Weiterführung des gemeinsamen Do verdoppelt — zulässige Verdopplung).",
  septH3: "Die Signatur von V7: die fallende Septime",
  septP:
    "Bei Septakkorden ist die Signatur von <strong>V7 gegenüber V</strong> die <strong>fallende Septime</strong>. Vergleichen Sie in Do-Dur — die beiden Akkorde unterscheiden sich nur in einer Note (dem Alt):",
  vCaption:
    "<strong>V → I</strong>: (Sol2, Ré4, Sol4, Si4) → (Do3, Mi4, Sol4, Do5) — einfache Spannung, durch den Leitton aufgelöst.",
  v7Caption:
    "<strong>V7 → I</strong>: (Sol2, Ré4, <strong>Fa4</strong>, Si4) → (Do3, Do4, <strong>Mi4</strong>, Do5) — das hinzugefügte Fa reibt gegen das Si (Tritonus) und <strong>muss auf Mi fallen</strong>.",
  septApres:
    "Diese Note, die im Moment der Auflösung einen Schritt fällt, verrät die Septime: Hören Sie sie, schreiben Sie V7; sonst V. Spielen Sie beide Paare nacheinander — der Unterschied liegt in einer einzigen Note, dem Alt: Sol4 in V, Fa4 in V7.",

  ecoutesH2: "Das harmonische Gedächtnis: Strategien bei begrenzten Hördurchgängen",
  ecoutesP1:
    "Der Prüfungsmodus von /releve reproduziert die Disziplin des Concours: <strong>6 Hördurchgänge</strong> der ganzen Progression, ohne Wiederholung pro Akkord, mit angezeigtem Zähler. Sechs Durchgänge wirken komfortabel; sie schmelzen wie Schnee, wenn nicht jeder ein <strong>einziges, vorab erklärtes Ziel</strong> hat. Die Schulverteilung:",
  ecoutesHeaders: ["Hördurchgang", "Einziges Ziel"],
  ecoutesRows: [
    { n: "1", objectif: "<strong>Tonart und Schlusskadenz</strong>: die Tonika innerlich singen, den Modus identifizieren, die Kadenz benennen — die letzten beiden Akkorde notieren." },
    { n: "2", objectif: "<strong>Der Bass, in Stufen</strong>: ihn von Anfang bis Ende innerlich singen, die Stufenfolge notieren (1–6–4–5–1…)." },
    { n: "3", objectif: "<strong>Den Bass überprüfen</strong>: die sicheren Takte bestätigen, die zweifelhaften anvisieren — dies ist der Durchgang der Gewissheit, nicht der Neuheit." },
    { n: "4", objectif: "<strong>Bezifferungen und Farben</strong>: Umkehrungen (schrittweiser Bass?), Septimen (eine fallende Note?), der kadenzierende 6/4." },
    { n: "5", objectif: "<strong>Oberstimmen</strong>: zuerst der Sopran (er ist allein hörbar), dann die Mittelstimmen durch Deduktion (die noch nicht platzierten Akkordtöne)." },
    { n: "6", objectif: "<strong>Globale Kontrolle</strong>: die eigene Niederschrift lesen und dabei innerlich singen — der Durchgang konfrontiert das Geschriebene mit dem Klingenden. Man entdeckt nicht mehr, man überprüft." },
  ],
  crayonP:
    "Zwei Bleistift-Disziplinen. Erstens: <strong>Zuerst die Gewissheiten notieren</strong> — die Schlusskadenz, die offensichtlichen Takte: Eine Diktatniederschrift füllt sich von beiden Enden her, nie linear. Zweitens die <strong>Disziplin des Fadenverlusts</strong>: Ein verlorener Takt darf nie den Rest entgleisen lassen. Man lässt eine Lücke, zählt die Takte weiter (der Puls läuft) und <strong>hängt sich an die nächste Kadenz</strong> — ein stets erkennbarer Ankerpunkt. Eine Lücke kostet einen Takt; eine Panik kostet die ganze Niederschrift.",

  boucleH2: "Vom Diktat zum Tonsatz: den Kreis schließen",
  boucleP1:
    "Das Diktat ist die <strong>exakte Umkehrung der Aussetzung</strong>. In den Kursen 26 und 42 bekommt man einen bezifferten Bass und produziert die Klänge; im Diktat bekommt man die Klänge und findet Bass und Bezifferungen wieder. Es sind die zwei Richtungen ein und derselben Kompetenz: <strong>Was man schreiben kann, kann man hören — und umgekehrt</strong>. Deshalb ist Stufe ③ von /releve (den vollständigen SATB nach Diktat schreiben, mit der Konformitätskorrektur des Editors) die vollständige Schleife: Hören → Notation → Satzprüfung, in einer einzigen Übung.",
  diagIntro: "Ihre Diktatfehler sind <strong>Diagnosen</strong>. Die drei häufigsten Muster:",
  diagHeaders: ["Wiederkehrender Fehler", "Was er verrät", "Abhilfe"],
  diagRows: [
    {
      erreur: "<strong>I6 und VI verwechseln</strong> (zwei gemeinsame Töne: Do und Mi in Do-Dur)",
      revele: "Sie hören die <strong>Funktion</strong> — die verlängerte Tonika-Farbe —, aber nicht den <strong>realen Bass</strong> (Mi gegen La).",
      remede: "Stufe ① intensiv: der Bass allein, in Stufen gesungen, bis Mi und La unverwechselbar sind.",
    },
    {
      erreur: "<strong>Die Mittelstimmen verfehlen</strong> (Sopran und Bass richtig, Alt/Tenor falsch)",
      revele: "Sie hören <strong>in Akkorden</strong> (eine Gesamtfarbe) und nicht <strong>in Linien</strong> (vier singende Stimmen).",
      remede: "Stufe ③ im Übungsmodus, mit Wiederholung pro Akkord: jede Mittelstimme singen, dann notieren. Die Deduktion hilft: die Töne des bereits identifizierten Akkords, die weder im Sopran noch im Bass liegen.",
    },
    {
      erreur: "<strong>V schreiben, wenn es V7 war</strong> (oder umgekehrt)",
      revele: "Sie sind der <strong>fallenden Note</strong> nicht gefolgt — der Septime und ihrer obligatorischen Auflösung (Abschnitt 4).",
      remede: "Gezielte V/V7-Vergleiche (das Beispiel aus Abschnitt 4, in mehreren Tonarten), dann Stufe ②, wobei Sie systematisch Septbezifferungen aufspüren.",
    },
  ],
  boucleP2:
    "Der Fortschritt im Diktat nährt im Gegenzug den Tonsatz: Wer die Septime von V7 hundertmal hat fallen hören, wird sie nie wieder steigend schreiben. Das ist der Abschluss des DNSPM-Curriculums: analysieren, schreiben, hören — drei Verben, ein einziges Ohr.",

  entrainH2: "Training",
  ficheH3: "Die Reflexkarte des Diktats (auswendig lernen — 6 Zeilen)",
  ficheLines: [
    "<strong>Zuerst die Tonart</strong>: die Tonika singen, den Modus identifizieren.",
    "<strong>Dann die Schlusskadenz</strong>: sie liefert die letzten beiden Akkorde gratis.",
    "<strong>Der Bass vor allem</strong>, in Stufen gesungen, auf die Oktave genau.",
    "<strong>Funktionen und Formeln</strong> (T/SD/D, II6–V–I, kadenzierender 6/4), nie isolierte Akkorde.",
    "<strong>Schrittweiser Bass = wahrscheinliche Umkehrungen; eine bei der Auflösung fallende Note = Septime.</strong>",
    "<strong>Mit dem Bleistift zuerst die Gewissheiten</strong>; ein verlorener Takt = eine Lücke, und man hängt sich an die nächste Kadenz.",
  ],

  quizH3: "Quiz",
  questions: [
    {
      q: "Beim ersten Hören eines Diktats notieren Sie zuerst:",
      opts: ["Den ersten Akkord", "Die Tonart und die Schlusskadenz", "Die Sopranlinie", "Den harmonischen Rhythmus"],
      a: 1,
      fb: "Zuerst der Rahmen: Die Tonart erlaubt, Stufen in Noten zu übersetzen; die Schlusskadenz liefert die letzten beiden Akkorde.",
    },
    {
      q: "Der Bass steigt schrittweise ab, während die Harmonie dieselbe Farbe behält. Sie vermuten:",
      opts: ["Eine Modulation", "Eine Quintfallsequenz", "Umkehrungen", "Einen Orgelpunkt"],
      a: 2,
      fb: "Ein schrittweiser Bass unter stabiler Harmonie ist das Merkmal eingeschobener Sextakkorde (Basslinien-Test, Abschnitt 4).",
    },
    {
      q: "Warum zuerst den Bass notieren?",
      opts: ["Er trägt die Harmonie und bestimmt Stufe und Umkehrung", "Er ist die tiefste, also lauteste Stimme", "Er bewegt sich weniger als die anderen Stimmen", "Er ist immer verdoppelt"],
      a: 0,
      fb: "Jede Bezifferung definiert sich relativ zum Bass; den Sopran hört man mühelos, der Bass verlangt Arbeit.",
    },
    {
      q: "Am Phrasenende springt der Bass eine Quarte aufwärts (Sol → Do in Do-Dur). Sie hören:",
      opts: ["Eine plagale Kadenz", "Einen Halbschluss", "Einen Trugschluss", "Eine authentische Kadenz"],
      a: 3,
      fb: "Der Sprung 5 → 1 ist die Bass-Signatur der authentischen Kadenz (V–I).",
    },
    {
      q: "Was unterscheidet V7 von V für das Ohr?",
      opts: ["V7 ist lauter", "Die Septime, die reibt (Tritonus) und bei der Auflösung einen Schritt fällt", "V7 ist immer arpeggiert", "Der Bass ist anders"],
      a: 1,
      fb: "In Do-Dur: das hinzugefügte Fa gegen das Si, das auf Mi fällt. Fällt keine Note so, war es V.",
    },
    {
      q: "Der kadenzierende 6/4 klingt wie:",
      opts: ["Ein über dem Dominantbass schwebender Tonika-Akkord, der nach V ruft", "Ein schlusskräftiger, stabiler Akkord", "Eine Modulation zur Dominante", "Ein unwichtiger Durchgangsakkord"],
      a: 0,
      fb: "Der charakteristische Vorhalt vor V: Bass schon auf 5, Tonika-Akkord darüber, erwartete Auflösung (6→5, 4→3).",
    },
    {
      q: "Sie verlieren den Faden in Takt 3 eines achttaktigen Diktats. Sie:",
      opts: ["Schreiben wartend Takt 2 um", "Geben den Bass für den Sopran auf", "Lassen eine Lücke, zählen die Takte weiter und hängen sich an die nächste Kadenz", "Bitten um einen zusätzlichen Hördurchgang"],
      a: 2,
      fb: "Eine Lücke kostet einen Takt; ein unbeherrschter Fadenverlust kostet die ganze Niederschrift (Abschnitt 5).",
    },
    {
      q: "Warum den Bass in Stufen solmisieren (1–6–4–5–1) statt in absoluten Noten?",
      opts: ["Es ist schneller zu schreiben", "Absolute Noten sind unmöglich zu hören", "Es ist die einzige bei Prüfungen akzeptierte Notation", "Die Stufe ist auf alle Tonarten übertragbar und nennt die Funktion"],
      a: 3,
      fb: "Die Stufe trägt die Funktion (T/SD/D); die absolute Note ergibt sich am Ende, sobald die Tonart feststeht.",
    },
    {
      q: "Sie verwechseln regelmäßig I6 und VI. Die Diagnose:",
      opts: ["Sie hören die Funktion (Tonika-Farbe), nicht den realen Bass", "Sie kennen Ihre Tonleitern nicht", "Ihr Gedächtnis ist zu kurz", "Sie hören zu sehr auf den Bass"],
      a: 0,
      fb: "Beide Akkorde teilen Do und Mi (in Do-Dur); nur der Bass (Mi gegen La) unterscheidet sie. Abhilfe: Stufe ① von /releve.",
    },
  ],

  protoH3: "Geführtes /releve-Protokoll — drei Modellsitzungen",
  protoSteps: [
    {
      titre: "Sitzung 1 — Entdeckung (Stufe ①, Übungsmodus)",
      desc: "Filter: Niveau 1, Durtonarten. Unbegrenzte Hördurchgänge, Wiederholung pro Akkord erlaubt. Für jede Übung: den Bass innerlich singen, <strong>bevor</strong> man ihn notiert, ihn in Stufen solmisieren, erst dann eingeben (die Oktave ist frei: die Tonklasse genügt). Fünf Übungen; Ziel: alle Takte richtig in den letzten beiden.",
    },
    {
      titre: "Sitzung 2 — Aufstieg (Stufe ②, dann Prüfungsdisziplin)",
      desc: "Stufe ② im Übungsmodus: Der korrekte Bass ist gegeben, die Bezifferungen unter den Plaketten wählen — Umkehrungen aufspüren (schrittweiser Bass?) und Septimen (fallende Note?). Dann zurück zu Stufe ① im <strong>Prüfungsmodus</strong>: 6 gezählte Hördurchgänge, die Verteilung aus Abschnitt 5 anwenden (ein Durchgang = ein Ziel). Die Filter schrittweise öffnen (Niveau 2, Molltonarten).",
    },
    {
      titre: "Sitzung 3 — Probeprüfung (Stufe ③, Prüfungsmodus)",
      desc: "Das vollständige Diktat: die vier Stimmen in 6 Hördurchgängen schreiben. Zuerst die Gewissheiten (Schlusskadenz, dann Bass), Mittelstimmen durch Deduktion, letzter Durchgang zur Kontrolle. Nach der Notation jeden Fehler mit der Diagnosetabelle aus Abschnitt 6 analysieren und daraus die nächste Sitzung ableiten.",
    },
  ],
  linkReleve: {
    titre: "/releve — Harmonisches Diktat",
    desc: "Das Begleitwerkzeug des Kurses: der Bass, die Bezifferungen, der vollständige SATB — Übungs- und Prüfungsmodus (6 Hördurchgänge).",
  },

  drillsH3: "Schriftliche Drills",
  drill1Titre: "Schriftlicher Drill 1 — Ein beschriebenes Diktat rekonstruieren (Sol-Dur)",
  drill1Enonce:
    "<em>Man beschreibt Ihnen das Gehörte:</em> « Sol-Dur, fünf Akkorde. Der Bass singt 1 – 4 – 5 – 5 – 1. Auf der ersten der beiden 5 klingt der Akkord wie eine schwebende Tonika, die nach Fortsetzung ruft; auf der zweiten reibt eine Note und fällt bei der Auflösung einen Schritt. Schlusskräftige authentische Kadenz. » <strong>Schreiben Sie den Bass (exakte Noten), die Bezifferungen, dann eine SATB-Schulaussetzung.</strong>",
  drill1Corrige:
    "Bass: <strong>Sol2 – Do3 – Ré3 – Ré3 – Sol2</strong>. Bezifferungen: <strong>I – II6 – I6/4 – V7 – I</strong> (die « schwebende Tonika » über dem Dominantbass = kadenzierender 6/4; die Note, die reibt und fällt = die Septime Do → Si). Auflösungen des 6/4: Si→La (6→5) im Sopran, Sol→Fa♯ (4→3) im Alt; die Septime Do (Tenor) fällt auf Si; vollständiger V7 → vollständiges I, der innere Leitton Fa♯ fällt auf Ré — Schullizenz. Es ist die Formel aus Abschnitt 3, transponiert: der Beweis, dass der <em>Chunk</em> in alle Tonarten reist.",
  drill1ScoreCaption: "Sol-Dur: <strong>I – II6 – I6/4 – V7 – I</strong> — die Schulaussetzung des Lösungsmodells.",
  drill2Titre: "Schriftlicher Drill 2 — Der absteigende Tetrachord (La-Moll)",
  drill2Enonce:
    "<em>Man beschreibt Ihnen das Gehörte:</em> « La-Moll, vier Akkorde. Der Bass steigt schrittweise von der Tonika zur Dominante hinab: 1 – 7 – 6 – 5. Der letzte Akkord ist Dur, offen — die Phrase bleibt unabgeschlossen. » <strong>Schreiben Sie den Bass (exakte Noten) und die Bezifferungen, und begründen Sie die Umkehrungen.</strong>",
  drill2Corrige:
    "Bass: <strong>La2 – Sol2 – Fa2 – Mi2</strong>. Bezifferungen: <strong>I – V6 – IV6 – V</strong> (in Moll: i – v6 – iv6 – V). Begründung: Der schrittweise Bass unter einer dunkel bleibenden Farbe erzwingt Umkehrungen auf den Zwischenstufen — Sol ist die Terz von Mi–Sol–Si (v6, die nicht leittönige 7. Stufe des absteigenden natürlichen Molls), Fa die Terz von Ré–Fa–La (iv6); die Ankunft auf Mi trägt die <strong>Dur</strong>-Dominante V (mit Sol♯: Mi–Sol♯–Si), daher der offene Halbschluss. Das ist der <strong>Lamento-Tetrachord</strong>, die Schulformel schlechthin: Wer ihn als Block erkennt, schreibt die vier Bezifferungen in einem einzigen Hördurchgang.",
  drill2ScoreCaption:
    "La-Moll, <strong>i – v6 – iv6 – V</strong> — das Außenstimmen-Gerüst: der Bass des Lösungsmodells und eine Oberstimme in Dezimen (Do5–Si4–La4–Sol♯4). Das Sol♮ des natürlichen Molls im Bass, das Sol♯ der Dur-Dominante oben.",
  voirCorrige: "Lösung anzeigen",
  masquerCorrige: "Lösung ausblenden",
  corrigeLabel: "Lösungsmodell",
};

// ════════════════════════════════════════════════════════════════════════════
// ES
// ════════════════════════════════════════════════════════════════════════════

const es: Cours48Locale = {
  maitreConcept: "El dictado armónico — oír para escribir, escribir para oír",
  maitreAnecdote:
    "Nadia Boulanger (1887–1979) formó en París y en Fontainebleau a generaciones de compositores — Aaron Copland, Philip Glass, Astor Piazzolla, Quincy Jones. Su disciplina era implacable: solfeo, armonía al teclado y dictado a diario. Exigía a sus alumnos saber cantar cada voz de un coral antes de escribirla, y les hacía transcribir progresiones enteras tocadas al piano — para ella, el oído interior no era un don, sino el producto de un entrenamiento metódico.",
  maitreLesson:
    "El oído se construye como una técnica instrumental: el bajo cantado en grados, las fórmulas reconocidas como bloques, una escucha = un objetivo. El dictado armónico no es una prueba de talento: es un protocolo.",

  noteTravail:
    "<strong>Aquí, el piano de síntesis es una ventaja, no un límite.</strong> El curso 45 (comentario de escucha) debía admitir que la ausencia de fonoteca impedía el trabajo del timbre y de la orquestación. Para el dictado armónico es al revés: la prueba consiste en transcribir <strong>exactamente</strong> alturas y acordes, y un piano de síntesis es precisamente el instrumento ideal para ello — afinación perfecta, notas idénticas en cada reescucha, tempo estable, ninguna reverberación que enmascare el bajo. De hecho, es al piano donde la mayoría de los profesores de formación musical trabajan el dictado armónico. Todo lo que la prueba exige — oír un bajo, cifrados, cuatro voces — se entrena íntegramente en /releve. Lo único que la herramienta no entrena es el reconocimiento de timbres: eso es asunto del comentario de escucha (curso 45), no del dictado.",

  quoiH2: "¿Qué es el relevé (dictado armónico)?",
  quoiP1:
    "El <em>relevé</em> — el dictado armónico — es el ejercicio rey de la formación musical superior: se le hace escuchar un fragmento musical un número limitado de veces, y debe <strong>transcribirlo exactamente</strong> — el bajo, los acordes, a veces las cuatro voces. Figura en las oposiciones de entrada de los Pôles supérieurs franceses y del CNSM, y en los cursos de formación musical superior y de escritura. Donde el comentario de escucha (curso 45) pide <strong>describir, identificar y situar</strong> — un discurso argumentado sobre lo que se oye —, el dictado pide <strong>anotar, nota a nota</strong>: ninguna aproximación estilística compensa un acorde falso. Y donde el dictado de acordes hace reconocer <strong>acordes aislados</strong> (una etiqueta por acorde, fuera de contexto), el relevé trata una <strong>progresión sintáctica</strong>: los acordes se encadenan según una gramática, y esa gramática es su mejor aliada — un acorde adivinado se verifica por los que lo rodean.",
  quoiP2:
    "Lo que el dictado entrena realmente va más allá de la prueba: la <strong>memoria armónica</strong> (retener una progresión entera entre dos escuchas), el <strong>oído interior</strong> — lo que los anglosajones llaman <em>audiation</em>: oír mentalmente una música ausente —, y el reflejo de oír la música <strong>en funciones y en voces</strong>, no como masa sonora. Es la competencia misma de la escritura (cursos 26 y 42), tomada en el otro sentido.",
  regleOr:
    "<strong>La tonalidad, luego la cadencia, luego el bajo, luego los cifrados.</strong> Nunca se transcribe un acorde aislado « en medio »: primero se instala el marco (tonalidad, cadencia final), luego el esqueleto (el bajo en grados), y los cifrados vienen a posarse encima. Empezar por el detalle es la falta metodológica más costosa.",
  linkCours45: {
    titre: "Curso 45 — Metodología del comentario de escucha",
    desc: "La disciplina hermana: describir y situar lo que se oye. El dictado, en cambio, anota — las dos pruebas se complementan.",
  },
  linkGo: "Abrir →",

  basseH2: "El bajo primero: la estrategia fundamental",
  basseP1:
    "¿Por qué el bajo? Porque <strong>sostiene la armonía</strong>: es él quien decide el grado y la inversión, y todo cifrado se define respecto a él (curso 42). Y porque el oído se aferra naturalmente a las <strong>voces extremas</strong>: la soprano (la melodía) y el bajo se oyen mejor que las voces interiores. La soprano se oye sin esfuerzo; el bajo hay que aprender a <strong>aislarlo</strong> — es el primer gesto del dictado, y es todo el objeto del nivel ① de /releve.",
  basseTechniques: [
    "<strong>Cantar interiormente el bajo</strong> durante la escucha (o a media voz al entrenar): lo que se puede cantar, se puede anotar. Si no puede cantarlo, vuelva a escuchar — no adivine.",
    "<strong>Solfearlo en grados, no en notas absolutas</strong>: cantar « 1 – 4 – 5 – 1 » y no « Do – Fa – Sol – Do ». El grado es transferible a todas las tonalidades y dice inmediatamente la función; la nota absoluta solo se recupera al final, aplicando la tonalidad identificada en la primera escucha.",
    "<strong>Detectar los movimientos típicos</strong>: el salto de cuarta ascendente o de quinta descendente hacia la tónica (5 → 1, la firma cadencial), el movimiento por grados conjuntos (a menudo señal de inversiones — sección 4), el cromatismo (a menudo una dominante secundaria).",
  ],
  basseOctave:
    "<strong>El principio de la octava libre</strong>: en el dictado de bajo se anota la <strong>clase de la nota</strong> — oír « un Sol » basta, sea Sol2 o Sol3. Es el estándar de la prueba, y es exactamente así como corrige el nivel ① de /releve: a la octava.",
  exS2H3: "Ejemplo trabajado — el bajo cantado en grados (Do mayor, I–VI–IV–V–I)",
  exS2P:
    "Bajo escuchado: <strong>Do – La – Fa – Sol – Do</strong> (Do3, La2, Fa2, Sol2, Do3). Se canta: <strong>« 1 – 6 – 4 – 5 – 1 »</strong>. La lectura en grados ya cuenta la armonía: salida de tónica, descenso de tercera hacia el relativo (6), la subdominante (4), la dominante (5), regreso a la tónica — T, sustituto de T, SD, D, T.",
  s2ScoreCaption: "Do mayor, <strong>I – VI – IV – V – I</strong> — el SATB completo, para el oído.",
  s2Apres:
    "<strong>Para oír</strong>: la soprano permanece posada en Do durante tres acordes — es el bajo, y solo él, quien hace avanzar la armonía. Por eso se transcribe primero. Escuche el bajo solo y cántelo en grados: « 1 – 6 – 4 – 5 – 1 ».",
  btnProg: "La progresión",
  btnBasse: "El bajo solo",

  fonctH2: "Oír las funciones antes que los acordes",
  fonctP1:
    "El principiante transcribe acorde por acorde y se ahoga; el oído formado oye <strong>funciones</strong> y luego <strong>fórmulas</strong>. Primera pasada: la rejilla <strong>T / SD / D</strong> (cursos 3 y 4) — cada acorde escuchado se clasifica primero en una de las tres familias (estable / preparación / tensión). Es una clasificación gruesa, pero es <strong>rápida y robusta</strong>: se obtiene desde la segunda escucha, y reduce drásticamente los candidatos para cada compás.",
  fonctP2:
    "Segundo reflejo, el más rentable de todo el curso: <strong>identificar primero la cadencia final</strong>. Es el lugar más previsible y más audible del fragmento; confirma la tonalidad y entrega <strong>gratis los dos últimos acordes</strong> (V–I si es perfecta, parada en V si es semicadencia, V–VI si es rota). En el dictado se rellena el final antes que el medio.",
  fonctP3:
    "Tercer reflejo: reconocer las <strong>fórmulas como bloques</strong> (<em>chunks</em>), no nota a nota — II6–V–I, I6/4–V, la marcha de quintas. El 6/4 cadencial tiene una sonoridad <strong>inconfundible</strong>: un acorde de tónica suspendido sobre el bajo de dominante, un apoyo que llama a su resolución (sección 4). Quien reconoce el bloque escribe tres cifrados de una vez.",
  exS3H3: "Ejemplo trabajado — cinco acordes, dos bloques (Do mayor)",
  exS3P:
    "Progresión escuchada: bajo <strong>Do – Fa – Sol – Sol – Do</strong> (grados <strong>1 – 4 – 5 – 5 – 1</strong>).",
  s3ScoreCaption: "Do mayor: <strong>I – II6 – I6/4 – V7 – I</strong>.",
  s3Raisonnement:
    "Razonamiento por bloques: primer acorde = tónica de instalación (bloque 1). Luego el oído reconoce <strong>la gran fórmula cadencial [II6 – I6/4 – V7 – I]</strong> como un solo gesto: bajo 4–5–5–1, el apoyo característico del 6/4 sobre la dominante, la séptima (Fa, en el contralto) que baja a Mi. Cuatro cifrados obtenidos en un reconocimiento — en lugar de cuatro apuestas sucesivas. Matiz honesto: el <em>chunking</em> supone un vocabulario ya constituido; se adquiere realizando estas fórmulas por escrito (cursos 26 y 42) hasta que se convierten en unidades de escucha.",

  renvH2: "Las inversiones de oído",
  renvP1:
    "Un mismo acorde cambia de rostro según su bajo (curso 42). De oído: el <strong>estado fundamental</strong> es estable, asentado, conclusivo; el <strong>acorde de sexta</strong> (bajo = tercera) es más ligero, abierto, « en marcha » — da ganas de continuar; la <strong>cuarta y sexta</strong> es inestable, suspendida — la cuarta contra el bajo pide resolución, y eso es lo que hace tan reconocible el 6/4 cadencial.",
  renvP2:
    "La prueba más fiable es la de la <strong>línea del bajo</strong>: cuando el bajo se desplaza <strong>por grados conjuntos</strong> mientras la armonía permanece en el mismo color, muy probablemente hay inversiones — la escuela escribe sus bajos cantables intercalando sextas. Escuche:",
  s4ScoreCaption: "<strong>I – I6 – IV</strong> (Do mayor), bajo <strong>Do3 – Mi3 – Fa3</strong>.",
  s4Apres:
    "Mismo color de tónica en los dos primeros acordes, pero el bajo <strong>sube una tercera y luego un grado</strong>: es la marca del I6 (la quinta de IV se dobla por prolongación del Do común — duplicación admitida).",
  septH3: "La firma de V7: la séptima que baja",
  septP:
    "Para los acordes de séptima, la firma de <strong>V7 frente a V</strong> es la <strong>séptima que baja</strong>. Compare en Do mayor — los dos acordes solo difieren en una nota (el contralto):",
  vCaption:
    "<strong>V → I</strong>: (Sol2, Ré4, Sol4, Si4) → (Do3, Mi4, Sol4, Do5) — tensión simple, resuelta por la sensible.",
  v7Caption:
    "<strong>V7 → I</strong>: (Sol2, Ré4, <strong>Fa4</strong>, Si4) → (Do3, Do4, <strong>Mi4</strong>, Do5) — el Fa añadido roza contra el Si (tritono) y <strong>baja obligatoriamente a Mi</strong>.",
  septApres:
    "Es esa nota que cae un grado en el momento de la resolución la que delata la séptima: si la oye, escriba V7; si no, V. Escuche las dos parejas una tras otra — la diferencia está en una sola nota, el contralto: Sol4 en V, Fa4 en V7.",

  ecoutesH2: "La memoria armónica: estrategias de escucha limitada",
  ecoutesP1:
    "El modo examen de /releve reproduce la disciplina de la oposición: <strong>6 escuchas</strong> de la progresión entera, sin reescucha por acorde, contador visible. Seis escuchas parecen cómodas; se derriten como nieve si cada una no tiene un <strong>objetivo único y declarado de antemano</strong>. El reparto de escuela:",
  ecoutesHeaders: ["Escucha", "Objetivo único"],
  ecoutesRows: [
    { n: "1", objectif: "<strong>Tonalidad y cadencia final</strong>: cantar interiormente la tónica, identificar el modo, nombrar la cadencia — anotar los dos últimos acordes." },
    { n: "2", objectif: "<strong>El bajo, en grados</strong>: cantarlo interiormente de principio a fin, anotar la serie de grados (1–6–4–5–1…)." },
    { n: "3", objectif: "<strong>Verificar el bajo</strong>: confirmar los compases seguros, apuntar a los dudosos — es la escucha de la certeza, no de la novedad." },
    { n: "4", objectif: "<strong>Cifrados y colores</strong>: inversiones (¿bajo por grados conjuntos?), séptimas (¿una nota que baja?), el 6/4 cadencial." },
    { n: "5", objectif: "<strong>Voces superiores</strong>: la soprano primero (se oye sola), luego las voces interiores por deducción (las notas del acorde aún no colocadas)." },
    { n: "6", objectif: "<strong>Control global</strong>: releer la copia cantando interiormente — la escucha confronta lo escrito con lo que suena. Ya no se descubre, se verifica." },
  ],
  crayonP:
    "Dos disciplinas de lápiz. Primero, <strong>anotar las certezas primero</strong>: la cadencia final, los compases evidentes — una copia de dictado se rellena por los dos extremos, nunca linealmente. Después, la <strong>disciplina del descuelgue</strong>: un compás perdido nunca debe descarrilar lo que sigue. Se deja un blanco, se mantiene la cuenta de los compases (la pulsación continúa), y uno <strong>se reengancha en la cadencia siguiente</strong> — punto de anclaje siempre reconocible. Un blanco cuesta un compás; un pánico cuesta la copia.",

  boucleH2: "Del dictado a la escritura: cerrar el círculo",
  boucleP1:
    "El dictado es el <strong>inverso exacto de la realización</strong>. En los cursos 26 y 42 se le da un bajo cifrado y usted produce los sonidos; en el dictado se le dan los sonidos y usted recupera el bajo y los cifrados. Son los dos sentidos de una misma competencia: <strong>lo que se sabe escribir, se sabe oír — y recíprocamente</strong>. Por eso el nivel ③ de /releve (escribir el SATB completo al dictado, con la corrección de conformidad del editor) es el bucle completo: escucha → notación → verificación de escritura, en un solo ejercicio.",
  diagIntro: "Sus errores de dictado son <strong>diagnósticos</strong>. Los tres patrones más frecuentes:",
  diagHeaders: ["Error recurrente", "Lo que revela", "Remedio"],
  diagRows: [
    {
      erreur: "<strong>Confundir I6 y VI</strong> (dos notas comunes: Do y Mi en Do mayor)",
      revele: "Usted oye la <strong>función</strong> — el color de tónica prolongado — pero no el <strong>bajo real</strong> (Mi contra La).",
      remede: "Nivel ① intensivo: el bajo solo, cantado en grados, hasta que Mi y La sean inconfundibles.",
    },
    {
      erreur: "<strong>Fallar las voces interiores</strong> (soprano y bajo correctos, contralto/tenor falsos)",
      revele: "Usted escucha <strong>en acordes</strong> (un color global) y no <strong>en líneas</strong> (cuatro voces que cantan).",
      remede: "Nivel ③ en entrenamiento, con reescucha por acorde: cantar cada voz interior, luego anotarla. La deducción ayuda: las notas del acorde ya identificado que no están ni en la soprano ni en el bajo.",
    },
    {
      erreur: "<strong>Escribir V cuando era V7</strong> (o al revés)",
      revele: "No siguió la <strong>nota que baja</strong> — la séptima y su resolución obligada (sección 4).",
      remede: "Comparaciones dirigidas V/V7 (el ejemplo de la sección 4, en varias tonalidades), luego nivel ② rastreando sistemáticamente los cifrados de séptima.",
    },
  ],
  boucleP2:
    "El progreso en el dictado alimenta la escritura a cambio: quien ha oído cien veces bajar la séptima de V7 no la escribirá nunca más ascendente. Es el cierre del currículo DNSPM: analizar, escribir, oír — tres verbos, un solo oído.",

  entrainH2: "Entrenamiento",
  ficheH3: "La ficha refleja del dictado (para memorizar — 6 líneas)",
  ficheLines: [
    "<strong>La tonalidad primero</strong>: cantar la tónica, identificar el modo.",
    "<strong>La cadencia final después</strong>: da gratis los dos últimos acordes.",
    "<strong>El bajo ante todo</strong>, cantado en grados, a la octava.",
    "<strong>Funciones y fórmulas</strong> (T/SD/D, II6–V–I, 6/4 cadencial), nunca acordes aislados.",
    "<strong>Bajo por grados conjuntos = inversiones probables; una nota que baja en la resolución = séptima.</strong>",
    "<strong>Con el lápiz, las certezas primero</strong>; un compás perdido = un blanco, y uno se reengancha en la cadencia siguiente.",
  ],

  quizH3: "Quiz",
  questions: [
    {
      q: "En la primera escucha de un dictado, usted anota en prioridad:",
      opts: ["El primer acorde", "La tonalidad y la cadencia final", "La línea de soprano", "El ritmo armónico"],
      a: 1,
      fb: "El marco primero: la tonalidad permite traducir los grados en notas, la cadencia final entrega los dos últimos acordes.",
    },
    {
      q: "El bajo desciende por grados conjuntos bajo una armonía que mantiene el mismo color. Usted sospecha:",
      opts: ["Una modulación", "Una marcha de quintas", "Inversiones", "Un pedal"],
      a: 2,
      fb: "Un bajo por grados conjuntos bajo una armonía estable es la marca de los acordes de sexta intercalados (prueba de la línea del bajo, sección 4).",
    },
    {
      q: "¿Por qué transcribir el bajo antes que nada?",
      opts: ["Sostiene la armonía y determina grado e inversión", "Es la voz más grave, luego la más fuerte", "Se mueve menos que las otras voces", "Siempre está doblado"],
      a: 0,
      fb: "Todo cifrado se define respecto al bajo; la soprano se oye sin esfuerzo, el bajo se trabaja.",
    },
    {
      q: "Al final de la frase, el bajo sube una cuarta (Sol → Do en Do mayor). Usted oye:",
      opts: ["Una cadencia plagal", "Una semicadencia", "Una cadencia rota", "Una cadencia perfecta"],
      a: 3,
      fb: "El salto 5 → 1 es la firma de bajo de la cadencia perfecta (V–I).",
    },
    {
      q: "¿Qué distingue V7 de V de oído?",
      opts: ["V7 es más fuerte", "La séptima, que roza (tritono) y baja un grado en la resolución", "V7 siempre está arpegiado", "El bajo es diferente"],
      a: 1,
      fb: "En Do mayor: el Fa añadido contra el Si, que cae en Mi. Si ninguna nota baja así, era V.",
    },
    {
      q: "El 6/4 cadencial se oye como:",
      opts: ["Un acorde de tónica suspendido sobre el bajo de dominante, que llama a V", "Un acorde conclusivo y estable", "Una modulación a la dominante", "Un acorde de paso sin importancia"],
      a: 0,
      fb: "El apoyo característico antes de V: bajo ya en 5, acorde de tónica encima, resolución esperada (6→5, 4→3).",
    },
    {
      q: "Pierde el hilo en el compás 3 de un dictado de ocho compases. Usted:",
      opts: ["Reescribe el compás 2 mientras espera", "Abandona el bajo por la soprano", "Deja un blanco, mantiene la cuenta de compases y se reengancha en la cadencia siguiente", "Pide una escucha suplementaria"],
      a: 2,
      fb: "Un blanco cuesta un compás; un descuelgue no controlado cuesta la copia (sección 5).",
    },
    {
      q: "¿Por qué solfear el bajo en grados (1–6–4–5–1) en lugar de notas absolutas?",
      opts: ["Es más rápido de escribir", "Las notas absolutas son imposibles de oír", "Es la única notación aceptada en las oposiciones", "El grado es transferible a todas las tonalidades y dice la función"],
      a: 3,
      fb: "El grado lleva la función (T/SD/D); la nota absoluta se deduce al final, una vez fijada la tonalidad.",
    },
    {
      q: "Confunde con regularidad I6 y VI. El diagnóstico:",
      opts: ["Oye la función (color de tónica), no el bajo real", "No conoce sus escalas", "Su memoria es demasiado corta", "Escucha demasiado el bajo"],
      a: 0,
      fb: "Los dos acordes comparten Do y Mi (en Do mayor); solo el bajo (Mi contra La) los distingue. Remedio: nivel ① de /releve.",
    },
  ],

  protoH3: "Protocolo guiado /releve — tres sesiones tipo",
  protoSteps: [
    {
      titre: "Sesión 1 — Descubrimiento (nivel ①, modo entrenamiento)",
      desc: "Filtros: nivel 1, tonalidades mayores. Escuchas ilimitadas, reescucha por acorde autorizada. Para cada ejercicio: cantar el bajo interiormente <strong>antes</strong> de anotarlo, solfearlo en grados, y solo entonces introducirlo (la octava es libre: la clase de nota basta). Hacer cinco ejercicios; objetivo: todos los compases correctos en los dos últimos.",
    },
    {
      titre: "Sesión 2 — Ascenso (nivel ②, luego disciplina de examen)",
      desc: "Nivel ② en entrenamiento: el bajo correcto está dado, elegir los cifrados entre las pastillas — rastrear las inversiones (¿bajo por grados conjuntos?) y las séptimas (¿nota que baja?). Después volver al nivel ① en <strong>modo examen</strong>: 6 escuchas contadas, aplicar el reparto de la sección 5 (una escucha = un objetivo). Abrir progresivamente los filtros (nivel 2, tonalidades menores).",
    },
    {
      titre: "Sesión 3 — Examen simulado (nivel ③, modo examen)",
      desc: "El dictado completo: escribir las cuatro voces en 6 escuchas. Certezas primero (cadencia final, luego bajo), voces interiores por deducción, última escucha como control. Tras la notación, analizar cada falta con la tabla de diagnóstico de la sección 6 y deducir de ella la sesión siguiente.",
    },
  ],
  linkReleve: {
    titre: "/releve — Dictado armónico",
    desc: "La herramienta compañera del curso: el bajo, los cifrados, el SATB completo — modos entrenamiento y examen (6 escuchas).",
  },

  drillsH3: "Ejercicios escritos",
  drill1Titre: "Ejercicio escrito 1 — Reconstruir un dictado descrito (Sol mayor)",
  drill1Enonce:
    "<em>Le describen la escucha:</em> « Sol mayor, cinco acordes. El bajo canta 1 – 4 – 5 – 5 – 1. En el primero de los dos 5, el acorde suena como una tónica suspendida que llama a la continuación; en el segundo, una nota roza y luego baja un grado en la resolución. Cadencia perfecta conclusiva. » <strong>Escriba el bajo (notas exactas), los cifrados, y luego una realización SATB de escuela.</strong>",
  drill1Corrige:
    "Bajo: <strong>Sol2 – Do3 – Ré3 – Ré3 – Sol2</strong>. Cifrados: <strong>I – II6 – I6/4 – V7 – I</strong> (la « tónica suspendida » sobre el bajo de dominante = 6/4 cadencial; la nota que roza y baja = la séptima Do → Si). Resoluciones del 6/4: Si→La (6→5) en la soprano, Sol→Fa♯ (4→3) en el contralto; la séptima Do (tenor) baja a Si; V7 completo → I completo, la sensible interior Fa♯ bajando a Ré — licencia de escuela. Es la fórmula de la sección 3, transpuesta: la prueba de que el <em>chunk</em> viaja a todas las tonalidades.",
  drill1ScoreCaption: "Sol mayor: <strong>I – II6 – I6/4 – V7 – I</strong> — la realización de escuela del corregido.",
  drill2Titre: "Ejercicio escrito 2 — El tetracordo descendente (La menor)",
  drill2Enonce:
    "<em>Le describen la escucha:</em> « La menor, cuatro acordes. El bajo desciende por grados conjuntos de la tónica a la dominante: 1 – 7 – 6 – 5. El último acorde es mayor, suspensivo — la frase queda abierta. » <strong>Escriba el bajo (notas exactas) y los cifrados, justificando las inversiones.</strong>",
  drill2Corrige:
    "Bajo: <strong>La2 – Sol2 – Fa2 – Mi2</strong>. Cifrados: <strong>I – V6 – IV6 – V</strong> (en menor: i – v6 – iv6 – V). Justificación: el bajo por grados conjuntos bajo un color que permanece sombrío impone inversiones en los grados intermedios — Sol es la tercera de Mi–Sol–Si (v6, el 7.º grado no sensible del menor natural descendente), Fa la tercera de Ré–Fa–La (iv6); la llegada a Mi lleva el V <strong>mayor</strong> (con Sol♯: Mi–Sol♯–Si), de ahí la semicadencia suspensiva. Es el <strong>tetracordo de lamento</strong>, fórmula de escuela por excelencia: quien lo reconoce como bloque escribe los cuatro cifrados en una sola escucha.",
  drill2ScoreCaption:
    "La menor, <strong>i – v6 – iv6 – V</strong> — el esqueleto de las voces extremas: el bajo del corregido y una voz superior en décimas (Do5–Si4–La4–Sol♯4). El Sol♮ del menor natural en el bajo, el Sol♯ de la dominante mayor arriba.",
  voirCorrige: "Ver el corregido",
  masquerCorrige: "Ocultar el corregido",
  corrigeLabel: "Corregido modelo",
};

// ════════════════════════════════════════════════════════════════════════════
// IT
// ════════════════════════════════════════════════════════════════════════════

const it: Cours48Locale = {
  maitreConcept: "Il dettato armonico — sentire per scrivere, scrivere per sentire",
  maitreAnecdote:
    "Nadia Boulanger (1887–1979) formò a Parigi e a Fontainebleau generazioni di compositori — Aaron Copland, Philip Glass, Astor Piazzolla, Quincy Jones. La sua disciplina era implacabile: solfeggio, armonia alla tastiera e dettato quotidiani. Esigeva dai suoi allievi che sapessero cantare ogni voce di un corale prima di scriverla, e faceva trascrivere intere progressioni suonate al pianoforte — per lei l'orecchio interiore non era un dono, ma il prodotto di un allenamento metodico.",
  maitreLesson:
    "L'orecchio si costruisce come una tecnica strumentale: il basso cantato in gradi, le formule riconosciute come blocchi, un ascolto = un obiettivo. Il dettato armonico non è una prova di talento: è un protocollo.",

  noteTravail:
    "<strong>Qui il pianoforte di sintesi è un vantaggio, non un limite.</strong> Il corso 45 (commento d'ascolto) doveva ammettere che l'assenza di fonoteca impediva il lavoro sul timbro e sull'orchestrazione. Per il dettato armonico è l'inverso: la prova consiste nel trascrivere <strong>esattamente</strong> altezze e accordi, e un pianoforte di sintesi è precisamente lo strumento ideale per questo — intonazione perfetta, note identiche a ogni riascolto, tempo stabile, nessun riverbero che mascheri il basso. È del resto al pianoforte che la maggior parte dei docenti di formazione musicale fa lavorare il dettato armonico. Tutto ciò che la prova richiede — sentire un basso, delle cifrature, quattro voci — si allena integralmente in /releve. L'unica cosa che lo strumento non allena è il riconoscimento dei timbri: è affare del commento d'ascolto (corso 45), non del dettato.",

  quoiH2: "Che cos'è il relevé (dettato armonico)?",
  quoiP1:
    "Il <em>relevé</em> — il dettato armonico — è l'esercizio re della formazione musicale superiore: vi si fa ascoltare un frammento musicale un numero limitato di volte, e dovete <strong>trascriverlo esattamente</strong> — il basso, gli accordi, talvolta le quattro voci. Figura nei concorsi d'ingresso dei Pôles supérieurs francesi e del CNSM, nei percorsi di formazione musicale superiore e di scrittura. Là dove il commento d'ascolto (corso 45) chiede di <strong>descrivere, identificare e collocare</strong> — un discorso argomentato su ciò che si sente —, il dettato chiede di <strong>annotare, nota per nota</strong>: nessuna approssimazione stilistica compensa un accordo sbagliato. E là dove il dettato di accordi fa riconoscere <strong>accordi isolati</strong> (un'etichetta per accordo, fuori contesto), il relevé riguarda una <strong>progressione sintattica</strong>: gli accordi si concatenano secondo una grammatica, e questa grammatica è la vostra migliore alleata — un accordo indovinato si verifica con quelli che lo circondano.",
  quoiP2:
    "Ciò che il dettato allena davvero va oltre la prova: la <strong>memoria armonica</strong> (trattenere un'intera progressione tra due ascolti), l'<strong>orecchio interiore</strong> — ciò che gli anglosassoni chiamano <em>audiation</em>: sentire mentalmente una musica assente —, e il riflesso di sentire la musica <strong>in funzioni e in voci</strong>, non come massa sonora. È la competenza stessa della scrittura (corsi 26 e 42), presa nell'altro senso.",
  regleOr:
    "<strong>La tonalità, poi la cadenza, poi il basso, poi le cifrature.</strong> Non si trascrive mai un accordo isolato « nel mezzo »: si installa prima la cornice (tonalità, cadenza finale), poi lo scheletro (il basso in gradi), e le cifrature vi si posano sopra. Cominciare dal dettaglio è l'errore metodologico più costoso.",
  linkCours45: {
    titre: "Corso 45 — Metodologia del commento d'ascolto",
    desc: "La disciplina sorella: descrivere e collocare ciò che si sente. Il dettato, invece, annota — le due prove si completano.",
  },
  linkGo: "Apri →",

  basseH2: "Prima il basso: la strategia fondamentale",
  basseP1:
    "Perché il basso? Perché <strong>porta l'armonia</strong>: è lui che decide il grado e il rivolto, e ogni cifratura si definisce rispetto a lui (corso 42). E perché l'orecchio si aggrappa naturalmente alle <strong>voci estreme</strong>: il soprano (la melodia) e il basso si sentono meglio delle voci interne. Il soprano lo si sente senza sforzo; il basso bisogna imparare a <strong>isolarlo</strong> — è il primo gesto del dettato, ed è tutto l'oggetto del livello ① di /releve.",
  basseTechniques: [
    "<strong>Cantare interiormente il basso</strong> durante l'ascolto (o a mezza voce in allenamento): ciò che si può cantare, si può annotare. Se non riuscite a cantarlo, riascoltate — non indovinate.",
    "<strong>Solfeggiarlo in gradi, non in note assolute</strong>: cantare « 1 – 4 – 5 – 1 » e non « Do – Fa – Sol – Do ». Il grado è trasferibile a tutte le tonalità e dice immediatamente la funzione; la nota assoluta si ritrova solo alla fine, applicando la tonalità identificata al primo ascolto.",
    "<strong>Individuare i movimenti tipici</strong>: il salto di quarta ascendente o di quinta discendente verso la tonica (5 → 1, la firma cadenzale), il movimento congiunto (spesso segno di rivolti — sezione 4), il cromatismo (spesso una dominante secondaria).",
  ],
  basseOctave:
    "<strong>Il principio dell'ottava libera</strong>: nel dettato di basso si annota la <strong>classe della nota</strong> — sentire « un Sol » basta, che sia Sol2 o Sol3. È lo standard della prova, ed è esattamente così che corregge il livello ① di /releve: a meno dell'ottava.",
  exS2H3: "Esempio svolto — il basso cantato in gradi (Do maggiore, I–VI–IV–V–I)",
  exS2P:
    "Basso ascoltato: <strong>Do – La – Fa – Sol – Do</strong> (Do3, La2, Fa2, Sol2, Do3). Lo si canta: <strong>« 1 – 6 – 4 – 5 – 1 »</strong>. La lettura in gradi racconta già l'armonia: partenza dalla tonica, discesa di terza verso il relativo (6), la sottodominante (4), la dominante (5), ritorno alla tonica — T, sostituto di T, SD, D, T.",
  s2ScoreCaption: "Do maggiore, <strong>I – VI – IV – V – I</strong> — il SATB completo, per l'orecchio.",
  s2Apres:
    "<strong>Da sentire</strong>: il soprano resta posato sul Do per tre accordi — è il basso, e lui solo, a far avanzare l'armonia. Ecco perché lo si trascrive per primo. Ascoltate il basso da solo e cantatelo in gradi: « 1 – 6 – 4 – 5 – 1 ».",
  btnProg: "La progressione",
  btnBasse: "Il basso da solo",

  fonctH2: "Sentire le funzioni prima degli accordi",
  fonctP1:
    "Il principiante trascrive accordo per accordo e affoga; l'orecchio formato sente <strong>funzioni</strong> e poi <strong>formule</strong>. Prima passata: la griglia <strong>T / SD / D</strong> (corsi 3 e 4) — ogni accordo ascoltato viene prima classificato in una delle tre famiglie (stabile / preparazione / tensione). È una classificazione grossolana, ma è <strong>rapida e robusta</strong>: la si ottiene già al secondo ascolto, e riduce drasticamente i candidati per ogni battuta.",
  fonctP2:
    "Secondo riflesso, il più redditizio di tutto il corso: <strong>identificare per prima la cadenza finale</strong>. È il punto più prevedibile e più udibile dell'estratto; conferma la tonalità e consegna <strong>gratuitamente gli ultimi due accordi</strong> (V–I se perfetta, arresto su V se semicadenza, V–VI se d'inganno). Nel dettato si riempie la fine prima del mezzo.",
  fonctP3:
    "Terzo riflesso: riconoscere le <strong>formule come blocchi</strong> (<em>chunks</em>), non nota per nota — II6–V–I, I6/4–V, la progressione di quinte. Il 6/4 cadenzale ha una sonorità <strong>inconfondibile</strong>: un accordo di tonica sospeso sopra il basso di dominante, un appoggio che chiama la sua risoluzione (sezione 4). Chi riconosce il blocco scrive tre cifrature in un colpo solo.",
  exS3H3: "Esempio svolto — cinque accordi, due blocchi (Do maggiore)",
  exS3P:
    "Progressione ascoltata: basso <strong>Do – Fa – Sol – Sol – Do</strong> (gradi <strong>1 – 4 – 5 – 5 – 1</strong>).",
  s3ScoreCaption: "Do maggiore: <strong>I – II6 – I6/4 – V7 – I</strong>.",
  s3Raisonnement:
    "Ragionamento per blocchi: primo accordo = tonica d'impianto (blocco 1). Poi l'orecchio riconosce <strong>la grande formula cadenzale [II6 – I6/4 – V7 – I]</strong> come un solo gesto: basso 4–5–5–1, l'appoggio caratteristico del 6/4 sulla dominante, la settima (Fa, al contralto) che scende sul Mi. Quattro cifrature ottenute in un riconoscimento — invece di quattro scommesse successive. Sfumatura onesta: il <em>chunking</em> presuppone un vocabolario già costituito; si acquisisce realizzando queste formule per iscritto (corsi 26 e 42) finché diventano unità d'ascolto.",

  renvH2: "I rivolti all'orecchio",
  renvP1:
    "Uno stesso accordo cambia volto secondo il suo basso (corso 42). All'orecchio: lo <strong>stato fondamentale</strong> è stabile, seduto, conclusivo; l'<strong>accordo di sesta</strong> (basso = terza) è più leggero, aperto, « in cammino » — dà voglia di continuare; la <strong>quarta e sesta</strong> è instabile, sospesa — la quarta contro il basso chiede risoluzione, ed è ciò che rende il 6/4 cadenzale così riconoscibile.",
  renvP2:
    "Il test più affidabile è quello della <strong>linea del basso</strong>: quando il basso si muove <strong>per gradi congiunti</strong> mentre l'armonia resta nello stesso colore, ci sono molto probabilmente dei rivolti — la scuola scrive i suoi bassi cantabili intercalando delle seste. Ascoltate:",
  s4ScoreCaption: "<strong>I – I6 – IV</strong> (Do maggiore), basso <strong>Do3 – Mi3 – Fa3</strong>.",
  s4Apres:
    "Stesso colore di tonica sui primi due accordi, ma il basso <strong>sale di una terza e poi di un grado</strong>: è il segno del I6 (la quinta di IV è raddoppiata per prolungamento del Do comune — raddoppio ammesso).",
  septH3: "La firma di V7: la settima che scende",
  septP:
    "Per gli accordi di settima, la firma di <strong>V7 contro V</strong> è la <strong>settima che scende</strong>. Confrontate in Do maggiore — i due accordi differiscono per una sola nota (il contralto):",
  vCaption:
    "<strong>V → I</strong>: (Sol2, Ré4, Sol4, Si4) → (Do3, Mi4, Sol4, Do5) — tensione semplice, risolta dalla sensibile.",
  v7Caption:
    "<strong>V7 → I</strong>: (Sol2, Ré4, <strong>Fa4</strong>, Si4) → (Do3, Do4, <strong>Mi4</strong>, Do5) — il Fa aggiunto stride contro il Si (tritono) e <strong>scende obbligatoriamente sul Mi</strong>.",
  septApres:
    "È questa nota che cade di un grado al momento della risoluzione a tradire la settima: se la sentite, scrivete V7; altrimenti, V. Ascoltate le due coppie una dopo l'altra — la differenza sta in una sola nota, il contralto: Sol4 in V, Fa4 in V7.",

  ecoutesH2: "La memoria armonica: strategie d'ascolto limitato",
  ecoutesP1:
    "La modalità esame di /releve riproduce la disciplina del concorso: <strong>6 ascolti</strong> dell'intera progressione, senza riascolto per accordo, contatore visibile. Sei ascolti sembrano comodi; si sciolgono come neve se ognuno non ha un <strong>obiettivo unico e dichiarato in anticipo</strong>. La ripartizione di scuola:",
  ecoutesHeaders: ["Ascolto", "Obiettivo unico"],
  ecoutesRows: [
    { n: "1", objectif: "<strong>Tonalità e cadenza finale</strong>: cantare interiormente la tonica, identificare il modo, nominare la cadenza — annotare gli ultimi due accordi." },
    { n: "2", objectif: "<strong>Il basso, in gradi</strong>: cantarlo interiormente da cima a fondo, annotare la serie di gradi (1–6–4–5–1…)." },
    { n: "3", objectif: "<strong>Verificare il basso</strong>: confermare le battute sicure, mirare alle battute dubbie — è l'ascolto della certezza, non della novità." },
    { n: "4", objectif: "<strong>Cifrature e colori</strong>: rivolti (basso congiunto?), settime (una nota che scende?), il 6/4 cadenzale." },
    { n: "5", objectif: "<strong>Voci superiori</strong>: prima il soprano (si sente da solo), poi le voci interne per deduzione (le note dell'accordo non ancora piazzate)." },
    { n: "6", objectif: "<strong>Controllo globale</strong>: rileggere la propria copia cantando interiormente — l'ascolto confronta ciò che si è scritto con ciò che suona. Non si scopre più, si verifica." },
  ],
  crayonP:
    "Due discipline di matita. Innanzitutto, <strong>annotare prima le certezze</strong>: la cadenza finale, le battute evidenti — una copia di dettato si riempie dai due capi, mai linearmente. Poi, la <strong>disciplina dello sgancio</strong>: una battuta persa non deve mai far deragliare il seguito. Si lascia un vuoto, si tiene il conto delle battute (la pulsazione continua), e ci si <strong>riaggancia alla cadenza successiva</strong> — punto d'ancoraggio sempre riconoscibile. Un vuoto costa una battuta; un panico costa la copia.",

  boucleH2: "Dal dettato alla scrittura: chiudere il cerchio",
  boucleP1:
    "Il dettato è l'<strong>inverso esatto della realizzazione</strong>. Nei corsi 26 e 42 vi si dà un basso cifrato e voi producete i suoni; nel dettato vi si danno i suoni e voi ritrovate il basso e le cifrature. Sono i due sensi di una stessa competenza: <strong>ciò che si sa scrivere, si sa sentire — e reciprocamente</strong>. Ecco perché il livello ③ di /releve (scrivere il SATB completo sotto dettatura, con la correzione di conformità dell'editor) è il cerchio completo: ascolto → notazione → verifica di scrittura, in un solo esercizio.",
  diagIntro: "I vostri errori di dettato sono <strong>diagnosi</strong>. I tre schemi più frequenti:",
  diagHeaders: ["Errore ricorrente", "Ciò che rivela", "Rimedio"],
  diagRows: [
    {
      erreur: "<strong>Confondere I6 e VI</strong> (due note comuni: Do e Mi in Do maggiore)",
      revele: "Sentite la <strong>funzione</strong> — il colore di tonica prolungato — ma non il <strong>basso reale</strong> (Mi contro La).",
      remede: "Livello ① intensivo: il basso da solo, cantato in gradi, finché Mi e La non siano inconfondibili.",
    },
    {
      erreur: "<strong>Sbagliare le voci interne</strong> (soprano e basso giusti, contralto/tenore sbagliati)",
      revele: "Ascoltate <strong>in accordi</strong> (un colore globale) e non <strong>in linee</strong> (quattro voci che cantano).",
      remede: "Livello ③ in allenamento, con riascolto per accordo: cantare ogni voce interna, poi annotarla. La deduzione aiuta: le note dell'accordo già identificato che non sono né al soprano né al basso.",
    },
    {
      erreur: "<strong>Scrivere V quando era V7</strong> (o l'inverso)",
      revele: "Non avete seguito la <strong>nota che scende</strong> — la settima e la sua risoluzione obbligata (sezione 4).",
      remede: "Confronti mirati V/V7 (l'esempio della sezione 4, in più tonalità), poi livello ② cacciando sistematicamente le cifrature di settima.",
    },
  ],
  boucleP2:
    "Il progresso nel dettato nutre in cambio la scrittura: chi ha sentito cento volte scendere la settima di V7 non la scriverà mai più ascendente. È la chiusura del percorso DNSPM: analizzare, scrivere, sentire — tre verbi, un solo orecchio.",

  entrainH2: "Allenamento",
  ficheH3: "La scheda riflessa del dettato (da memorizzare — 6 righe)",
  ficheLines: [
    "<strong>Prima la tonalità</strong>: cantare la tonica, identificare il modo.",
    "<strong>Poi la cadenza finale</strong>: regala gli ultimi due accordi.",
    "<strong>Il basso prima di tutto</strong>, cantato in gradi, a meno dell'ottava.",
    "<strong>Funzioni e formule</strong> (T/SD/D, II6–V–I, 6/4 cadenzale), mai accordi isolati.",
    "<strong>Basso congiunto = rivolti probabili; una nota che scende alla risoluzione = settima.</strong>",
    "<strong>Alla matita, prima le certezze</strong>; una battuta persa = un vuoto, e ci si riaggancia alla cadenza successiva.",
  ],

  quizH3: "Quiz",
  questions: [
    {
      q: "Al primo ascolto di un dettato, annotate in priorità:",
      opts: ["Il primo accordo", "La tonalità e la cadenza finale", "La linea del soprano", "Il ritmo armonico"],
      a: 1,
      fb: "Prima la cornice: la tonalità permette di tradurre i gradi in note, la cadenza finale consegna gli ultimi due accordi.",
    },
    {
      q: "Il basso scende per gradi congiunti sotto un'armonia che mantiene lo stesso colore. Sospettate:",
      opts: ["Una modulazione", "Una progressione di quinte", "Dei rivolti", "Un pedale"],
      a: 2,
      fb: "Un basso congiunto sotto un'armonia stabile è il segno degli accordi di sesta intercalati (test della linea del basso, sezione 4).",
    },
    {
      q: "Perché trascrivere il basso prima di tutto?",
      opts: ["Porta l'armonia e determina grado e rivolto", "È la voce più grave, quindi la più forte", "Si muove meno delle altre voci", "È sempre raddoppiato"],
      a: 0,
      fb: "Ogni cifratura si definisce rispetto al basso; il soprano si sente senza sforzo, il basso si lavora.",
    },
    {
      q: "A fine frase, il basso sale di una quarta (Sol → Do in Do maggiore). Sentite:",
      opts: ["Una cadenza plagale", "Una semicadenza", "Una cadenza d'inganno", "Una cadenza perfetta"],
      a: 3,
      fb: "Il salto 5 → 1 è la firma di basso della cadenza perfetta (V–I).",
    },
    {
      q: "Che cosa distingue V7 da V all'orecchio?",
      opts: ["V7 è più forte", "La settima, che stride (tritono) e scende di un grado alla risoluzione", "V7 è sempre arpeggiato", "Il basso è diverso"],
      a: 1,
      fb: "In Do maggiore: il Fa aggiunto contro il Si, che cade sul Mi. Se nessuna nota scende così, era V.",
    },
    {
      q: "Il 6/4 cadenzale si sente come:",
      opts: ["Un accordo di tonica sospeso sul basso di dominante, che chiama V", "Un accordo conclusivo e stabile", "Una modulazione alla dominante", "Un accordo di passaggio senza importanza"],
      a: 0,
      fb: "L'appoggio caratteristico prima di V: basso già sul 5, accordo di tonica sopra, risoluzione attesa (6→5, 4→3).",
    },
    {
      q: "Perdete il filo alla battuta 3 di un dettato di otto battute. Voi:",
      opts: ["Riscrivete la battuta 2 aspettando", "Abbandonate il basso per il soprano", "Lasciate un vuoto, tenete il conto delle battute e vi riagganciate alla cadenza successiva", "Chiedete un ascolto supplementare"],
      a: 2,
      fb: "Un vuoto costa una battuta; uno sgancio non gestito costa la copia (sezione 5).",
    },
    {
      q: "Perché solfeggiare il basso in gradi (1–6–4–5–1) piuttosto che in note assolute?",
      opts: ["È più rapido da scrivere", "Le note assolute sono impossibili da sentire", "È l'unica notazione accettata ai concorsi", "Il grado è trasferibile a tutte le tonalità e dice la funzione"],
      a: 3,
      fb: "Il grado porta la funzione (T/SD/D); la nota assoluta si deduce alla fine, una volta posta la tonalità.",
    },
    {
      q: "Confondete regolarmente I6 e VI. La diagnosi:",
      opts: ["Sentite la funzione (colore di tonica), non il basso reale", "Non conoscete le vostre scale", "La vostra memoria è troppo corta", "Ascoltate troppo il basso"],
      a: 0,
      fb: "I due accordi condividono Do e Mi (in Do maggiore); solo il basso (Mi contro La) li distingue. Rimedio: livello ① di /releve.",
    },
  ],

  protoH3: "Protocollo guidato /releve — tre sedute tipo",
  protoSteps: [
    {
      titre: "Seduta 1 — Scoperta (livello ①, modalità allenamento)",
      desc: "Filtri: livello 1, tonalità maggiori. Ascolti illimitati, riascolto per accordo autorizzato. Per ogni esercizio: cantare il basso interiormente <strong>prima</strong> di annotarlo, solfeggiarlo in gradi, e solo allora inserirlo (l'ottava è libera: la classe della nota basta). Fare cinque esercizi; obiettivo: tutte le battute giuste negli ultimi due.",
    },
    {
      titre: "Seduta 2 — Salita (livello ②, poi disciplina d'esame)",
      desc: "Livello ② in allenamento: il basso corretto è dato, scegliere le cifrature tra le pastiglie — cacciare i rivolti (basso congiunto?) e le settime (nota che scende?). Poi tornare al livello ① in <strong>modalità esame</strong>: 6 ascolti contati, applicare la ripartizione della sezione 5 (un ascolto = un obiettivo). Aprire progressivamente i filtri (livello 2, tonalità minori).",
    },
    {
      titre: "Seduta 3 — Esame simulato (livello ③, modalità esame)",
      desc: "Il dettato completo: scrivere le quattro voci in 6 ascolti. Prima le certezze (cadenza finale, poi basso), voci interne per deduzione, ultimo ascolto come controllo. Dopo la notazione, analizzare ogni errore con la tabella di diagnosi della sezione 6 e dedurne la seduta successiva.",
    },
  ],
  linkReleve: {
    titre: "/releve — Dettato armonico",
    desc: "Lo strumento compagno del corso: il basso, le cifrature, il SATB completo — modalità allenamento ed esame (6 ascolti).",
  },

  drillsH3: "Esercizi scritti",
  drill1Titre: "Esercizio scritto 1 — Ricostruire un dettato descritto (Sol maggiore)",
  drill1Enonce:
    "<em>Vi si descrive l'ascolto:</em> « Sol maggiore, cinque accordi. Il basso canta 1 – 4 – 5 – 5 – 1. Sul primo dei due 5, l'accordo suona come una tonica sospesa che chiama il seguito; sul secondo, una nota stride e poi scende di un grado alla risoluzione. Cadenza perfetta conclusiva. » <strong>Scrivete il basso (note esatte), le cifrature, poi una realizzazione SATB di scuola.</strong>",
  drill1Corrige:
    "Basso: <strong>Sol2 – Do3 – Ré3 – Ré3 – Sol2</strong>. Cifrature: <strong>I – II6 – I6/4 – V7 – I</strong> (la « tonica sospesa » sul basso di dominante = 6/4 cadenzale; la nota che stride e scende = la settima Do → Si). Risoluzioni del 6/4: Si→La (6→5) al soprano, Sol→Fa♯ (4→3) al contralto; la settima Do (tenore) scende sul Si; V7 completo → I completo, la sensibile interna Fa♯ che scende sul Ré — licenza di scuola. È la formula della sezione 3, trasposta: la prova che il <em>chunk</em> viaggia in tutte le tonalità.",
  drill1ScoreCaption: "Sol maggiore: <strong>I – II6 – I6/4 – V7 – I</strong> — la realizzazione di scuola della soluzione.",
  drill2Titre: "Esercizio scritto 2 — Il tetracordo discendente (La minore)",
  drill2Enonce:
    "<em>Vi si descrive l'ascolto:</em> « La minore, quattro accordi. Il basso scende per gradi congiunti dalla tonica alla dominante: 1 – 7 – 6 – 5. L'ultimo accordo è maggiore, sospensivo — la frase resta aperta. » <strong>Scrivete il basso (note esatte) e le cifrature, giustificando i rivolti.</strong>",
  drill2Corrige:
    "Basso: <strong>La2 – Sol2 – Fa2 – Mi2</strong>. Cifrature: <strong>I – V6 – IV6 – V</strong> (in minore: i – v6 – iv6 – V). Giustificazione: il basso congiunto sotto un colore che resta scuro impone rivolti sui gradi intermedi — Sol è la terza di Mi–Sol–Si (v6, il 7º grado non sensibile del minore naturale discendente), Fa la terza di Ré–Fa–La (iv6); l'arrivo sul Mi porta il V <strong>maggiore</strong> (con Sol♯: Mi–Sol♯–Si), da cui la semicadenza sospensiva. È il <strong>tetracordo di lamento</strong>, formula di scuola per eccellenza: chi lo riconosce come blocco scrive le quattro cifrature in un solo ascolto.",
  drill2ScoreCaption:
    "La minore, <strong>i – v6 – iv6 – V</strong> — lo scheletro delle voci estreme: il basso della soluzione e una voce superiore in decime (Do5–Si4–La4–Sol♯4). Il Sol♮ del minore naturale al basso, il Sol♯ della dominante maggiore sopra.",
  voirCorrige: "Vedi la soluzione",
  masquerCorrige: "Nascondi la soluzione",
  corrigeLabel: "Soluzione modello",
};

// ════════════════════════════════════════════════════════════════════════════
// PT
// ════════════════════════════════════════════════════════════════════════════

const pt: Cours48Locale = {
  maitreConcept: "O ditado harmónico — ouvir para escrever, escrever para ouvir",
  maitreAnecdote:
    "Nadia Boulanger (1887–1979) formou em Paris e em Fontainebleau gerações de compositores — Aaron Copland, Philip Glass, Astor Piazzolla, Quincy Jones. A sua disciplina era implacável: solfejo, harmonia ao teclado e ditado diários. Exigia dos seus alunos que soubessem cantar cada voz de um coral antes de a escreverem, e fazia transcrever progressões inteiras tocadas ao piano — para ela, o ouvido interior não era um dom, mas o produto de um treino metódico.",
  maitreLesson:
    "O ouvido constrói-se como uma técnica instrumental: o baixo cantado em graus, as fórmulas reconhecidas como blocos, uma escuta = um objetivo. O ditado harmónico não é um teste de talento — é um protocolo.",

  noteTravail:
    "<strong>Aqui, o piano de síntese é uma vantagem, não um limite.</strong> O curso 45 (comentário de escuta) tinha de admitir que a ausência de fonoteca impedia o trabalho do timbre e da orquestração. Para o ditado harmónico é o inverso: a prova consiste em transcrever <strong>exatamente</strong> alturas e acordes, e um piano de síntese é precisamente o instrumento ideal para isso — afinação perfeita, notas idênticas a cada nova escuta, tempo estável, nenhuma reverberação a mascarar o baixo. É aliás ao piano que a maioria dos professores de formação musical trabalha o ditado harmónico. Tudo o que a prova exige — ouvir um baixo, cifras, quatro vozes — treina-se integralmente em /releve. A única coisa que a ferramenta não treina é o reconhecimento dos timbres: isso é assunto do comentário de escuta (curso 45), não do ditado.",

  quoiH2: "O que é o relevé (ditado harmónico)?",
  quoiP1:
    "O <em>relevé</em> — o ditado harmónico — é o exercício rei da formação musical superior: fazem-nos ouvir um fragmento musical um número limitado de vezes, e temos de o <strong>transcrever exatamente</strong> — o baixo, os acordes, por vezes as quatro vozes. Figura nos concursos de entrada dos Pôles supérieurs franceses e do CNSM, nos cursos de formação musical superior e de escrita. Onde o comentário de escuta (curso 45) pede para <strong>descrever, identificar e situar</strong> — um discurso argumentado sobre o que se ouve —, o ditado pede para <strong>anotar, nota a nota</strong>: nenhuma aproximação estilística compensa um acorde errado. E onde o ditado de acordes faz reconhecer <strong>acordes isolados</strong> (uma etiqueta por acorde, fora de contexto), o relevé incide sobre uma <strong>progressão sintática</strong>: os acordes encadeiam-se segundo uma gramática, e essa gramática é a sua melhor aliada — um acorde adivinhado verifica-se pelos que o rodeiam.",
  quoiP2:
    "O que o ditado treina realmente ultrapassa a prova: a <strong>memória harmónica</strong> (reter uma progressão inteira entre duas escutas), o <strong>ouvido interior</strong> — aquilo a que os anglo-saxónicos chamam <em>audiation</em>: ouvir mentalmente uma música ausente —, e o reflexo de ouvir a música <strong>em funções e em vozes</strong>, não como massa sonora. É a própria competência da escrita (cursos 26 e 42), tomada no outro sentido.",
  regleOr:
    "<strong>A tonalidade, depois a cadência, depois o baixo, depois as cifras.</strong> Nunca se transcreve um acorde isolado « no meio »: instala-se primeiro o quadro (tonalidade, cadência final), depois o esqueleto (o baixo em graus), e as cifras vêm pousar-se em cima. Começar pelo detalhe é a falta metodológica mais cara.",
  linkCours45: {
    titre: "Curso 45 — Metodologia do comentário de escuta",
    desc: "A disciplina irmã: descrever e situar o que se ouve. O ditado, por seu lado, anota — as duas provas completam-se.",
  },
  linkGo: "Abrir →",

  basseH2: "O baixo primeiro: a estratégia fundamental",
  basseP1:
    "Porquê o baixo? Porque <strong>sustenta a harmonia</strong>: é ele que decide o grau e a inversão, e toda a cifra se define em relação a ele (curso 42). E porque o ouvido se agarra naturalmente às <strong>vozes extremas</strong>: o soprano (a melodia) e o baixo ouvem-se melhor do que as vozes interiores. O soprano ouve-se sem esforço; o baixo, é preciso aprender a <strong>isolá-lo</strong> — é o primeiro gesto do ditado, e é todo o objeto do nível ① de /releve.",
  basseTechniques: [
    "<strong>Cantar interiormente o baixo</strong> durante a escuta (ou a meia-voz no treino): o que se pode cantar, pode-se anotar. Se não conseguir cantá-lo, volte a ouvir — não adivinhe.",
    "<strong>Solfejá-lo em graus, não em notas absolutas</strong>: cantar « 1 – 4 – 5 – 1 » e não « Do – Fa – Sol – Do ». O grau é transferível para todas as tonalidades e diz imediatamente a função; a nota absoluta só se recupera no fim, aplicando a tonalidade identificada na primeira escuta.",
    "<strong>Detetar os movimentos típicos</strong>: o salto de quarta ascendente ou de quinta descendente para a tónica (5 → 1, a assinatura cadencial), o movimento por graus conjuntos (muitas vezes sinal de inversões — secção 4), o cromatismo (muitas vezes uma dominante secundária).",
  ],
  basseOctave:
    "<strong>O princípio da oitava livre</strong>: no ditado de baixo anota-se a <strong>classe da nota</strong> — ouvir « um Sol » basta, seja Sol2 ou Sol3. É o padrão da prova, e é exatamente assim que o nível ① de /releve corrige: à oitava.",
  exS2H3: "Exemplo trabalhado — o baixo cantado em graus (Do maior, I–VI–IV–V–I)",
  exS2P:
    "Baixo ouvido: <strong>Do – La – Fa – Sol – Do</strong> (Do3, La2, Fa2, Sol2, Do3). Canta-se: <strong>« 1 – 6 – 4 – 5 – 1 »</strong>. A leitura em graus já conta a harmonia: partida da tónica, descida de terceira para o relativo (6), a subdominante (4), a dominante (5), regresso à tónica — T, substituto de T, SD, D, T.",
  s2ScoreCaption: "Do maior, <strong>I – VI – IV – V – I</strong> — o SATB completo, para o ouvido.",
  s2Apres:
    "<strong>Para ouvir</strong>: o soprano fica pousado no Do durante três acordes — é o baixo, e só ele, que faz avançar a harmonia. Eis porque se transcreve primeiro. Ouça o baixo sozinho e cante-o em graus: « 1 – 6 – 4 – 5 – 1 ».",
  btnProg: "A progressão",
  btnBasse: "O baixo sozinho",

  fonctH2: "Ouvir as funções antes dos acordes",
  fonctP1:
    "O principiante transcreve acorde a acorde e afoga-se; o ouvido formado ouve <strong>funções</strong> e depois <strong>fórmulas</strong>. Primeira passagem: a grelha <strong>T / SD / D</strong> (cursos 3 e 4) — cada acorde ouvido é primeiro arrumado numa das três famílias (estável / preparação / tensão). É uma classificação grosseira, mas é <strong>rápida e robusta</strong>: obtém-se logo à segunda escuta, e reduz drasticamente os candidatos para cada compasso.",
  fonctP2:
    "Segundo reflexo, o mais rentável de todo o curso: <strong>identificar primeiro a cadência final</strong>. É o lugar mais previsível e mais audível do excerto; confirma a tonalidade e entrega <strong>gratuitamente os dois últimos acordes</strong> (V–I se perfeita, paragem em V se meia cadência, V–VI se interrompida). No ditado, preenche-se o fim antes do meio.",
  fonctP3:
    "Terceiro reflexo: reconhecer as <strong>fórmulas como blocos</strong> (<em>chunks</em>), não nota a nota — II6–V–I, I6/4–V, a marcha de quintas. O 6/4 cadencial tem uma sonoridade <strong>inconfundível</strong>: um acorde de tónica suspenso sobre o baixo de dominante, um apoio que chama a sua resolução (secção 4). Quem reconhece o bloco escreve três cifras de uma vez.",
  exS3H3: "Exemplo trabalhado — cinco acordes, dois blocos (Do maior)",
  exS3P:
    "Progressão ouvida: baixo <strong>Do – Fa – Sol – Sol – Do</strong> (graus <strong>1 – 4 – 5 – 5 – 1</strong>).",
  s3ScoreCaption: "Do maior: <strong>I – II6 – I6/4 – V7 – I</strong>.",
  s3Raisonnement:
    "Raciocínio por blocos: primeiro acorde = tónica de instalação (bloco 1). Depois o ouvido reconhece <strong>a grande fórmula cadencial [II6 – I6/4 – V7 – I]</strong> como um só gesto: baixo 4–5–5–1, o apoio característico do 6/4 sobre a dominante, a sétima (Fa, no contralto) que desce para Mi. Quatro cifras obtidas num reconhecimento — em vez de quatro apostas sucessivas. Nuance honesta: o <em>chunking</em> pressupõe um vocabulário já constituído; adquire-se realizando estas fórmulas por escrito (cursos 26 e 42) até se tornarem unidades de escuta.",

  renvH2: "As inversões de ouvido",
  renvP1:
    "Um mesmo acorde muda de rosto conforme o seu baixo (curso 42). De ouvido: o <strong>estado fundamental</strong> é estável, assente, conclusivo; o <strong>acorde de sexta</strong> (baixo = terceira) é mais leve, aberto, « em marcha » — dá vontade de continuar; a <strong>quarta e sexta</strong> é instável, suspensa — a quarta contra o baixo pede resolução, e é isso que torna o 6/4 cadencial tão reconhecível.",
  renvP2:
    "O teste mais fiável é o da <strong>linha do baixo</strong>: quando o baixo se desloca <strong>por graus conjuntos</strong> enquanto a harmonia permanece na mesma cor, há muito provavelmente inversões — a escola escreve os seus baixos cantantes intercalando sextas. Ouça:",
  s4ScoreCaption: "<strong>I – I6 – IV</strong> (Do maior), baixo <strong>Do3 – Mi3 – Fa3</strong>.",
  s4Apres:
    "A mesma cor de tónica nos dois primeiros acordes, mas o baixo <strong>sobe uma terceira e depois um grau</strong>: é a marca do I6 (a quinta de IV é dobrada por prolongamento do Do comum — dobra admitida).",
  septH3: "A assinatura de V7: a sétima que desce",
  septP:
    "Para os acordes de sétima, a assinatura de <strong>V7 contra V</strong> é a <strong>sétima que desce</strong>. Compare em Do maior — os dois acordes só diferem numa nota (o contralto):",
  vCaption:
    "<strong>V → I</strong>: (Sol2, Ré4, Sol4, Si4) → (Do3, Mi4, Sol4, Do5) — tensão simples, resolvida pela sensível.",
  v7Caption:
    "<strong>V7 → I</strong>: (Sol2, Ré4, <strong>Fa4</strong>, Si4) → (Do3, Do4, <strong>Mi4</strong>, Do5) — o Fa acrescentado atrita contra o Si (trítono) e <strong>desce obrigatoriamente para Mi</strong>.",
  septApres:
    "É essa nota que cai um grau no momento da resolução que trai a sétima: se a ouvir, escreva V7; senão, V. Ouça os dois pares um após o outro — a diferença está numa única nota, o contralto: Sol4 em V, Fa4 em V7.",

  ecoutesH2: "A memória harmónica: estratégias de escuta limitada",
  ecoutesP1:
    "O modo exame de /releve reproduz a disciplina do concurso: <strong>6 escutas</strong> da progressão inteira, sem nova escuta por acorde, contador visível. Seis escutas parecem confortáveis; derretem como neve se cada uma não tiver um <strong>objetivo único e declarado de antemão</strong>. A repartição de escola:",
  ecoutesHeaders: ["Escuta", "Objetivo único"],
  ecoutesRows: [
    { n: "1", objectif: "<strong>Tonalidade e cadência final</strong>: cantar interiormente a tónica, identificar o modo, nomear a cadência — anotar os dois últimos acordes." },
    { n: "2", objectif: "<strong>O baixo, em graus</strong>: cantá-lo interiormente de uma ponta à outra, anotar a sequência de graus (1–6–4–5–1…)." },
    { n: "3", objectif: "<strong>Verificar o baixo</strong>: confirmar os compassos seguros, visar os compassos duvidosos — é a escuta da certeza, não da novidade." },
    { n: "4", objectif: "<strong>Cifras e cores</strong>: inversões (baixo conjunto?), sétimas (uma nota que desce?), o 6/4 cadencial." },
    { n: "5", objectif: "<strong>Vozes superiores</strong>: o soprano primeiro (ouve-se sozinho), depois as vozes interiores por dedução (as notas do acorde ainda não colocadas)." },
    { n: "6", objectif: "<strong>Controlo global</strong>: reler a cópia cantando interiormente — a escuta confronta o que se escreveu com o que soa. Já não se descobre, verifica-se." },
  ],
  crayonP:
    "Duas disciplinas de lápis. Primeiro, <strong>anotar primeiro as certezas</strong>: a cadência final, os compassos evidentes — uma cópia de ditado preenche-se pelas duas pontas, nunca linearmente. Depois, a <strong>disciplina do descarrilamento</strong>: um compasso perdido nunca deve fazer descarrilar o que se segue. Deixa-se um espaço em branco, mantém-se a conta dos compassos (a pulsação continua), e <strong>agarra-se à cadência seguinte</strong> — ponto de ancoragem sempre reconhecível. Um branco custa um compasso; um pânico custa a cópia.",

  boucleH2: "Do ditado à escrita: fechar o ciclo",
  boucleP1:
    "O ditado é o <strong>inverso exato da realização</strong>. Nos cursos 26 e 42 dão-lhe um baixo cifrado e você produz os sons; no ditado dão-lhe os sons e você recupera o baixo e as cifras. São os dois sentidos de uma mesma competência: <strong>o que se sabe escrever, sabe-se ouvir — e reciprocamente</strong>. É por isso que o nível ③ de /releve (escrever o SATB completo sob ditado, com a correção de conformidade do editor) é o ciclo completo: escuta → notação → verificação de escrita, num só exercício.",
  diagIntro: "Os seus erros de ditado são <strong>diagnósticos</strong>. Os três padrões mais frequentes:",
  diagHeaders: ["Erro recorrente", "O que revela", "Remediação"],
  diagRows: [
    {
      erreur: "<strong>Confundir I6 e VI</strong> (duas notas comuns: Do e Mi em Do maior)",
      revele: "Ouve a <strong>função</strong> — a cor de tónica prolongada — mas não o <strong>baixo real</strong> (Mi contra La).",
      remede: "Nível ① intensivo: o baixo sozinho, cantado em graus, até que Mi e La sejam inconfundíveis.",
    },
    {
      erreur: "<strong>Falhar as vozes interiores</strong> (soprano e baixo certos, contralto/tenor errados)",
      revele: "Escuta <strong>em acordes</strong> (uma cor global) e não <strong>em linhas</strong> (quatro vozes que cantam).",
      remede: "Nível ③ em treino, com nova escuta por acorde: cantar cada voz interior, depois anotá-la. A dedução ajuda: as notas do acorde já identificado que não estão nem no soprano nem no baixo.",
    },
    {
      erreur: "<strong>Escrever V quando era V7</strong> (ou o inverso)",
      revele: "Não seguiu a <strong>nota que desce</strong> — a sétima e a sua resolução obrigatória (secção 4).",
      remede: "Comparações dirigidas V/V7 (o exemplo da secção 4, em várias tonalidades), depois nível ② perseguindo sistematicamente as cifras de sétima.",
    },
  ],
  boucleP2:
    "O progresso no ditado alimenta a escrita em troca: quem ouviu cem vezes a sétima de V7 descer nunca mais a escreverá ascendente. É o fecho do percurso DNSPM: analisar, escrever, ouvir — três verbos, um só ouvido.",

  entrainH2: "Treino",
  ficheH3: "A ficha reflexa do ditado (a memorizar — 6 linhas)",
  ficheLines: [
    "<strong>A tonalidade primeiro</strong>: cantar a tónica, identificar o modo.",
    "<strong>A cadência final a seguir</strong>: dá gratuitamente os dois últimos acordes.",
    "<strong>O baixo antes de tudo</strong>, cantado em graus, à oitava.",
    "<strong>Funções e fórmulas</strong> (T/SD/D, II6–V–I, 6/4 cadencial), nunca acordes isolados.",
    "<strong>Baixo conjunto = inversões prováveis; uma nota que desce na resolução = sétima.</strong>",
    "<strong>A lápis, as certezas primeiro</strong>; um compasso perdido = um branco, e agarra-se à cadência seguinte.",
  ],

  quizH3: "Quiz",
  questions: [
    {
      q: "Na primeira escuta de um ditado, anota em prioridade:",
      opts: ["O primeiro acorde", "A tonalidade e a cadência final", "A linha de soprano", "O ritmo harmónico"],
      a: 1,
      fb: "O quadro primeiro: a tonalidade permite traduzir os graus em notas, a cadência final entrega os dois últimos acordes.",
    },
    {
      q: "O baixo desce por graus conjuntos sob uma harmonia que mantém a mesma cor. Suspeita de:",
      opts: ["Uma modulação", "Uma marcha de quintas", "Inversões", "Um pedal"],
      a: 2,
      fb: "Um baixo conjunto sob uma harmonia estável é a marca dos acordes de sexta intercalados (teste da linha do baixo, secção 4).",
    },
    {
      q: "Porquê transcrever o baixo antes de tudo?",
      opts: ["Sustenta a harmonia e determina grau e inversão", "É a voz mais grave, logo a mais forte", "Move-se menos do que as outras vozes", "Está sempre dobrado"],
      a: 0,
      fb: "Toda a cifra se define em relação ao baixo; o soprano ouve-se sem esforço, o baixo trabalha-se.",
    },
    {
      q: "No fim da frase, o baixo sobe uma quarta (Sol → Do em Do maior). Ouve:",
      opts: ["Uma cadência plagal", "Uma meia cadência", "Uma cadência interrompida", "Uma cadência perfeita"],
      a: 3,
      fb: "O salto 5 → 1 é a assinatura de baixo da cadência perfeita (V–I).",
    },
    {
      q: "O que distingue V7 de V de ouvido?",
      opts: ["V7 é mais forte", "A sétima, que atrita (trítono) e desce um grau na resolução", "V7 está sempre arpejado", "O baixo é diferente"],
      a: 1,
      fb: "Em Do maior: o Fa acrescentado contra o Si, que cai em Mi. Se nenhuma nota desce assim, era V.",
    },
    {
      q: "O 6/4 cadencial ouve-se como:",
      opts: ["Um acorde de tónica suspenso sobre o baixo de dominante, que chama V", "Um acorde conclusivo e estável", "Uma modulação para a dominante", "Um acorde de passagem sem importância"],
      a: 0,
      fb: "O apoio característico antes de V: baixo já no 5, acorde de tónica por cima, resolução esperada (6→5, 4→3).",
    },
    {
      q: "Perde o fio no compasso 3 de um ditado de oito compassos. Você:",
      opts: ["Reescreve o compasso 2 enquanto espera", "Abandona o baixo pelo soprano", "Deixa um branco, mantém a conta dos compassos e agarra-se à cadência seguinte", "Pede uma escuta suplementar"],
      a: 2,
      fb: "Um branco custa um compasso; um descarrilamento não controlado custa a cópia (secção 5).",
    },
    {
      q: "Porquê solfejar o baixo em graus (1–6–4–5–1) em vez de notas absolutas?",
      opts: ["É mais rápido de escrever", "As notas absolutas são impossíveis de ouvir", "É a única notação aceite nos concursos", "O grau é transferível para todas as tonalidades e diz a função"],
      a: 3,
      fb: "O grau transporta a função (T/SD/D); a nota absoluta deduz-se no fim, uma vez fixada a tonalidade.",
    },
    {
      q: "Confunde regularmente I6 e VI. O diagnóstico:",
      opts: ["Ouve a função (cor de tónica), não o baixo real", "Não conhece as suas escalas", "A sua memória é demasiado curta", "Escuta demasiado o baixo"],
      a: 0,
      fb: "Os dois acordes partilham Do e Mi (em Do maior); só o baixo (Mi contra La) os distingue. Remédio: nível ① de /releve.",
    },
  ],

  protoH3: "Protocolo guiado /releve — três sessões tipo",
  protoSteps: [
    {
      titre: "Sessão 1 — Descoberta (nível ①, modo treino)",
      desc: "Filtros: nível 1, tonalidades maiores. Escutas ilimitadas, nova escuta por acorde autorizada. Para cada exercício: cantar o baixo interiormente <strong>antes</strong> de o anotar, solfejá-lo em graus, e só então introduzi-lo (a oitava é livre: a classe da nota basta). Fazer cinco exercícios; objetivo: todos os compassos certos nos dois últimos.",
    },
    {
      titre: "Sessão 2 — Subida (nível ②, depois disciplina de exame)",
      desc: "Nível ② em treino: o baixo correto é dado, escolher as cifras entre as pastilhas — perseguir as inversões (baixo conjunto?) e as sétimas (nota que desce?). Depois voltar ao nível ① em <strong>modo exame</strong>: 6 escutas contadas, aplicar a repartição da secção 5 (uma escuta = um objetivo). Abrir progressivamente os filtros (nível 2, tonalidades menores).",
    },
    {
      titre: "Sessão 3 — Exame simulado (nível ③, modo exame)",
      desc: "O ditado completo: escrever as quatro vozes em 6 escutas. Certezas primeiro (cadência final, depois baixo), vozes interiores por dedução, última escuta como controlo. Após a notação, analisar cada falta com a tabela de diagnóstico da secção 6 e deduzir dela a sessão seguinte.",
    },
  ],
  linkReleve: {
    titre: "/releve — Ditado harmónico",
    desc: "A ferramenta companheira do curso: o baixo, as cifras, o SATB completo — modos treino e exame (6 escutas).",
  },

  drillsH3: "Exercícios escritos",
  drill1Titre: "Exercício escrito 1 — Reconstruir um ditado descrito (Sol maior)",
  drill1Enonce:
    "<em>Descrevem-lhe a escuta:</em> « Sol maior, cinco acordes. O baixo canta 1 – 4 – 5 – 5 – 1. No primeiro dos dois 5, o acorde soa como uma tónica suspensa que chama a continuação; no segundo, uma nota atrita e depois desce um grau na resolução. Cadência perfeita conclusiva. » <strong>Escreva o baixo (notas exatas), as cifras, e depois uma realização SATB de escola.</strong>",
  drill1Corrige:
    "Baixo: <strong>Sol2 – Do3 – Ré3 – Ré3 – Sol2</strong>. Cifras: <strong>I – II6 – I6/4 – V7 – I</strong> (a « tónica suspensa » sobre o baixo de dominante = 6/4 cadencial; a nota que atrita e desce = a sétima Do → Si). Resoluções do 6/4: Si→La (6→5) no soprano, Sol→Fa♯ (4→3) no contralto; a sétima Do (tenor) desce para Si; V7 completo → I completo, a sensível interior Fa♯ descendo para Ré — licença de escola. É a fórmula da secção 3, transposta: a prova de que o <em>chunk</em> viaja para todas as tonalidades.",
  drill1ScoreCaption: "Sol maior: <strong>I – II6 – I6/4 – V7 – I</strong> — a realização de escola da correção.",
  drill2Titre: "Exercício escrito 2 — O tetracorde descendente (La menor)",
  drill2Enonce:
    "<em>Descrevem-lhe a escuta:</em> « La menor, quatro acordes. O baixo desce por graus conjuntos da tónica à dominante: 1 – 7 – 6 – 5. O último acorde é maior, suspensivo — a frase fica aberta. » <strong>Escreva o baixo (notas exatas) e as cifras, justificando as inversões.</strong>",
  drill2Corrige:
    "Baixo: <strong>La2 – Sol2 – Fa2 – Mi2</strong>. Cifras: <strong>I – V6 – IV6 – V</strong> (em menor: i – v6 – iv6 – V). Justificação: o baixo conjunto sob uma cor que permanece sombria impõe inversões nos graus intermédios — Sol é a terceira de Mi–Sol–Si (v6, o 7.º grau não sensível do menor natural descendente), Fa a terceira de Ré–Fa–La (iv6); a chegada a Mi carrega o V <strong>maior</strong> (com Sol♯: Mi–Sol♯–Si), daí a meia cadência suspensiva. É o <strong>tetracorde do lamento</strong>, fórmula de escola por excelência: quem o reconhece como bloco escreve as quatro cifras numa só escuta.",
  drill2ScoreCaption:
    "La menor, <strong>i – v6 – iv6 – V</strong> — o esqueleto das vozes extremas: o baixo da correção e uma voz superior em décimas (Do5–Si4–La4–Sol♯4). O Sol♮ do menor natural no baixo, o Sol♯ da dominante maior em cima.",
  voirCorrige: "Ver a correção",
  masquerCorrige: "Ocultar a correção",
  corrigeLabel: "Correção modelo",
};

export const cours48Content: Record<string, Cours48Locale> = { fr, en, de, es, it, pt };
