// Cours 43 — Contrepoint modal de la Renaissance (style Palestrina) (Niveau 3, ≈ L3)
// Contenu pédagogique locale-clé : le FR fait foi (transcrit de la spec validée
// 2026-07-18-cours-contrepoint-renaissance-contenu-fr.md — musique/notes/règles
// NON modifiées). Les cinq autres langues traduisent la prose, les libellés de
// table, le quiz et les exercices avec le vocabulaire propre au contrepoint
// Renaissance (cantus firmus, prima pratica / stile antico, musica ficta, nota
// cambiata, retard/suspension/Vorhalt, clausule/cadence, cantizans/tenorizans,
// modes Dorien/Phrygien…).
// CONVENTION : les noms de notes restent en solfège FRANÇAIS partout
// (Do Ré Mi Fa Sol La Si) — exigence de la couche audio Harmonia.

export interface Question {
  q: string;
  opts: string[];
  a: number;
  fb: string;
}

/** Une ligne de la table des modes ecclésiastiques. */
export interface ModeRow {
  num: string;
  nom: string;
  type: string;
  finale: string;
  ambitus: string;
  teneur: string;
}

/** Une ligne de la table des sauts mélodiques. */
export interface SautRow {
  intervalle: string;
  statut: string;
}

/** Une ligne de la table des retards (suspensions). */
export interface RetardRow {
  type: string;
  prep: string;
  percussion: string;
  resolution: string;
}

/** Un exercice de contrepoint (le corrigé gravé vit dans le composant). */
export interface Exercice {
  titre: string;
  consigne: string;
  controle: string;
}

export interface Cours43Locale {
  // ── Maître (MaitreCard) ──
  maitreConcept: string;
  maitreAnecdote: string;
  maitreLesson: string;

  // ── Section 1 — Le style Palestrina et la prima pratica ──
  introH2: string;
  introP1: string;
  introP2: string;
  introJeppesenBox: string;

  // ── Section 2 — Les modes ecclésiastiques ──
  modesH2: string;
  modesP1: string;
  modesTableCaption: string;
  modesHeaders: string[];
  modesRows: ModeRow[];
  teneurRuleBox: string;
  pointsClesBox: string;

  // ── Section 3 — La ligne mélodique ──
  melodieH2: string;
  melodieP1: string;
  reglesTitle: string;
  reglesMelodiques: string[];
  sautsTableCaption: string;
  sautsHeaders: string[];
  sautsRows: SautRow[];
  cantusH3: string;
  cantusIntro: string;
  cantusAnalyse: string;

  // ── Section 4 — Consonances et contrepoint à deux voix ──
  contrepointH2: string;
  consonancesP1: string;
  conduiteTitle: string;
  conduiteRegles: string[];
  exempleH3: string;
  exempleIntro: string;
  exempleAnalyse: string;
  fleuriH3: string;
  fleuriP: string;
  fleuriAnalyse: string;

  // ── Section 5 — La dissonance ──
  dissonanceH2: string;
  dissonanceP1: string;
  passageH3: string;
  passageP: string;
  cambiataH3: string;
  cambiataP: string;
  retardH3: string;
  retardP1: string;
  retardTableCaption: string;
  retardHeaders: string[];
  retardRows: RetardRow[];
  retardP2: string;

  // ── Section 6 — Contrepoint à 3-4 voix et cadences modales ──
  cadencesH2: string;
  cadencesP1: string;
  clausuleTitle: string;
  clausuleP: string;
  dorienH3: string;
  dorienIntro: string;
  dorienAnalyse: string;
  phrygienH3: string;
  phrygienIntro: string;
  phrygienAnalyse: string;
  imitationBox: string;

  // ── Section 7 — Applications & entraînement ──
  entrainH2: string;
  methodeH3: string;
  methodeSteps: string[];
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

  // ── UI partagée ──
  listenBtn: string;
}

// ════════════════════════════════════════════════════════════════════════════
// FR — fait foi (transcription de la spec validée)
// ════════════════════════════════════════════════════════════════════════════

const fr: Cours43Locale = {
  maitreConcept: "La polyphonie vocale du stile antico",
  maitreAnecdote:
    "Giovanni Pierluigi da Palestrina (v. 1525-1594) incarne l'idéal de la polyphonie sacrée du XVIe siècle : messes et motets a cappella, écrits pour des voix qui doivent pouvoir chanter chaque ligne sans peine. La légende — née autour de sa Messe du pape Marcel — veut qu'il ait « sauvé » la polyphonie que le concile de Trente songeait à bannir, en prouvant qu'un contrepoint savant pouvait laisser le texte parfaitement intelligible. Trois siècles plus tard, le musicologue danois Knud Jeppesen dépouilla statistiquement ses œuvres pour en tirer les règles exactes du traitement de la dissonance : c'est le code que nous suivons.",
  maitreLesson:
    "Le style Palestrina n'est pas une tonalité fonctionnelle mais un art modal : la finale et le mode, non une dominante, organisent la pièce ; la consonance est l'état normal, la dissonance un événement bref et réglé.",

  introH2: "Le style Palestrina et la prima pratica",
  introP1:
    "Giovanni Pierluigi da Palestrina (v. 1525-1594) incarne l'idéal de la <strong>polyphonie vocale sacrée</strong> du XVIe siècle : messes et motets <em>a cappella</em>, écrits pour des voix qui doivent pouvoir chanter chaque ligne sans peine. Trois qualités définissent ce style : la <strong>fluidité</strong> (chaque voix avance surtout par degrés conjoints, le flux rythmique est continu et régulier), le <strong>contrôle absolu de la dissonance</strong> (la consonance est l'état normal, la dissonance un événement bref et réglé), et la <strong>chantabilité</strong> (intervalles naturels, ambitus mesuré, texte porté avec clarté).",
  introP2:
    "On nomme <em>stile antico</em> — le « style ancien » — la codification de cette manière, que les compositeurs baroques continueront d'enseigner comme modèle de rigueur, par opposition à la <em>seconda pratica</em> expressive de Monteverdi. C'est ce <em>stile antico</em> que Johann Joseph Fux abstrait en cinq espèces dans le <em>Gradus ad Parnassum</em> (cours 13). <strong>Notre cours fait le chemin inverse</strong> : là où Fux réduit le contrepoint à une échelle didactique (cantus firmus en valeurs égales, réflexes souvent tonalisés), nous revenons à la matière vivante — <strong>modale</strong>, textée, au rythme souple — que les espèces distillent. La différence est de fond : ici, pas de tonalité fonctionnelle, pas de dominante-tonique, mais un <strong>mode</strong> (finale, teneur) et des <strong>cadences modales</strong>.",
  introJeppesenBox:
    "C'est le musicologue danois <strong>Knud Jeppesen</strong> (<em>The Style of Palestrina and the Dissonance</em>, 1922 ; <em>Counterpoint</em>, 1930) qui a établi <strong>statistiquement</strong> les règles exactes du traitement de la dissonance dans ce répertoire : c'est sa codification que nous suivons. Prérequis utiles : le cours 13 (contrepoint des espèces, Fux) et le cours 10 (les modes).",

  modesH2: "Les modes ecclésiastiques",
  modesP1:
    "Le contrepoint Renaissance ne pense pas en tonalités mais en <strong>modes</strong>. Chaque mode se définit par sa <strong>finale</strong> (note de repos et d'achèvement), son <strong>ambitus</strong> (l'octave où se déploie la voix) et sa <strong>teneur</strong> (ou <em>repercussa</em>, corde de récitation vers laquelle la mélodie gravite). Chaque mode existe en version <strong>authente</strong> (l'octave part de la finale) et <strong>plagale</strong> (préfixe <em>hypo-</em> : l'octave est centrée autour de la finale). Le cours 10 en donne la couleur ; ici, le mode est un <strong>cadre d'écriture</strong>, non une échelle à improviser.",
  modesTableCaption: "Les douze modes (Glarean, Dodecachordon, 1547)",
  modesHeaders: ["N°", "Nom", "Type", "Finale", "Ambitus", "Teneur"],
  modesRows: [
    { num: "I", nom: "Dorien", type: "authente", finale: "Ré", ambitus: "Ré–Ré", teneur: "La" },
    { num: "II", nom: "Hypodorien", type: "plagal", finale: "Ré", ambitus: "La(grave)–La", teneur: "Fa" },
    { num: "III", nom: "Phrygien", type: "authente", finale: "Mi", ambitus: "Mi–Mi", teneur: "Do" },
    { num: "IV", nom: "Hypophrygien", type: "plagal", finale: "Mi", ambitus: "Si(grave)–Si", teneur: "La" },
    { num: "V", nom: "Lydien", type: "authente", finale: "Fa", ambitus: "Fa–Fa", teneur: "Do" },
    { num: "VI", nom: "Hypolydien", type: "plagal", finale: "Fa", ambitus: "Do–Do", teneur: "La" },
    { num: "VII", nom: "Mixolydien", type: "authente", finale: "Sol", ambitus: "Sol–Sol", teneur: "Ré" },
    { num: "VIII", nom: "Hypomixolydien", type: "plagal", finale: "Sol", ambitus: "Ré–Ré", teneur: "Do" },
    { num: "IX", nom: "Éolien", type: "authente", finale: "La", ambitus: "La–La", teneur: "Mi" },
    { num: "X", nom: "Hypoéolien", type: "plagal", finale: "La", ambitus: "Mi–Mi", teneur: "Do" },
    { num: "XI", nom: "Ionien", type: "authente", finale: "Do", ambitus: "Do–Do", teneur: "Sol" },
    { num: "XII", nom: "Hypoionien", type: "plagal", finale: "Do", ambitus: "Sol–Sol", teneur: "Mi" },
  ],
  teneurRuleBox:
    "<strong>Règle de la teneur.</strong> Dans les modes <strong>authentes</strong> elle est la <strong>quinte au-dessus de la finale</strong> ; dans les <strong>plagaux</strong>, une <strong>tierce sous</strong> la teneur de l'authente. Deux exceptions historiques : la teneur qui tomberait sur <strong>Si</strong> est remontée à <strong>Do</strong> (modes III et VIII), car Si est instable.",
  pointsClesBox:
    "<strong>Points-clés.</strong> Glarean (<em>Dodecachordon</em>, 1547) a officialisé l'<strong>Éolien</strong> et l'<strong>Ionien</strong> (modes IX à XII), reconnaissant les futurs « mineur » et « majeur ». Le <strong>Locrien</strong> (finale Si) reste théorique : sa quinte diminuée le rend inutilisable comme finale. La <strong><em>musica ficta</em></strong> apporte les altérations non écrites : le <strong>Si♭</strong> pour éviter le triton Fa–Si (<em>una nota super la…</em>), et surtout la <strong>sensible haussée à la cadence</strong> (le <em>subsemitonium modi</em> : Do♯ en Dorien, Fa♯ en Mixolydien, Sol♯ en Éolien) — jamais au cœur de la phrase, uniquement à la clausule.",

  melodieH2: "La ligne mélodique (le cantus)",
  melodieP1:
    "Chaque voix doit être une belle mélodie chantable, autonome, à l'arche équilibrée. Les règles mélodiques (codifiées par Jeppesen d'après le répertoire) sont plus strictes que chez Fux.",
  reglesTitle: "Les règles mélodiques",
  reglesMelodiques: [
    "<strong>Primat du mouvement conjoint</strong> (par secondes). Les sauts sont l'exception, jamais la norme.",
    "<strong>Compensation du saut</strong> : un saut, surtout large, se <strong>récupère par degré conjoint en sens contraire</strong>. Deux sauts de suite ne sont tolérés que s'ils dessinent une triade consonante sans dépasser l'octave, suivis d'un retour conjoint.",
    "<strong>Un seul sommet mélodique</strong> (<em>climax</em>) : la note la plus aiguë n'apparaît <strong>qu'une fois</strong>, sinon l'effet de sommet se dilue. La ligne monte vers lui puis redescend — l'arche.",
    "<strong>Valeurs longues / brèves</strong> : le saut se fait de préférence <strong>depuis</strong> une note longue et se <strong>quitte</strong> par une note au moins aussi longue ; les valeurs longues marquent débuts et fins de phrase.",
    "<strong>Pas de répétition de motif</strong> : la Renaissance proscrit les séquences mélodiques littérales (contrairement au baroque). On évite aussi de répéter obstinément la même note et d'<strong>esquisser un triton</strong> entre deux notes non voisines (ex. un Fa puis un Si).",
  ],
  sautsTableCaption: "Sauts mélodiques autorisés et interdits",
  sautsHeaders: ["Intervalle", "Statut"],
  sautsRows: [
    { intervalle: "Seconde (2de)", statut: "Le mouvement conjoint normal — la base de la ligne" },
    { intervalle: "Tierce mineure et majeure", statut: "Autorisé" },
    { intervalle: "Quarte juste", statut: "Autorisé" },
    { intervalle: "Quinte juste", statut: "Autorisé" },
    { intervalle: "Sixte mineure", statut: "Autorisé (rare, ascendant)" },
    { intervalle: "Octave", statut: "Autorisé" },
    { intervalle: "Sixte majeure", statut: "Interdit" },
    { intervalle: "Septième (toute)", statut: "Interdit" },
    { intervalle: "Triton (4te aug. / 5te dim.)", statut: "Interdit" },
    { intervalle: "Tout intervalle augmenté ou diminué", statut: "Interdit" },
    { intervalle: "Au-delà de l'octave", statut: "Interdit" },
  ],
  cantusH3: "Cantus modèle (mode I, Dorien, finale Ré)",
  cantusIntro:
    "Cantus firmus classique du répertoire des espèces, ici en semi-brèves — <strong>11 notes</strong> : Ré – Fa – Mi – Ré – Sol – Fa – La – Sol – Fa – Mi – Ré. C'est le modèle à faire chanter avant toute écriture à deux voix.",
  cantusAnalyse:
    "<strong>Analyse.</strong> Sommet <strong>La4</strong> atteint <strong>une seule fois</strong> (note 7). Deux petits sauts ascendants seulement — Ré4→Fa4 (3ce m.) et Ré4→Sol4 (4te juste) — chacun entouré de degrés conjoints ; aucun saut ne dépasse la quarte, aucun triton, aucune 7e. La ligne dessine une arche : montée mesurée vers La4, puis descente conjointe La–Sol–Fa–Mi–Ré vers la finale. Aucun Si (donc aucun risque de triton Fa–Si). Début et fin sur la finale Ré.",

  contrepointH2: "Les consonances et le contrepoint à deux voix",
  consonancesP1:
    "<strong>Consonances parfaites</strong> : unisson, quinte juste, octave (et redoublements). <strong>Consonances imparfaites</strong> : tierces (M et m) et sixtes (M et m). La <strong>quarte juste</strong> est <strong>dissonante</strong> face à la voix grave (comme au cours 13) ; elle ne devient consonante qu'entre deux voix supérieures d'une texture à 3-4 voix. Tout le reste (2de, 7e, triton) est dissonant.",
  conduiteTitle: "Règles de conduite (2 voix)",
  conduiteRegles: [
    "<strong>Interdits absolus</strong> : <strong>quintes justes parallèles</strong>, <strong>octaves parallèles</strong>, <strong>unissons parallèles</strong> — deux voix qui bougent ensemble sur un intervalle parfait perdent leur indépendance.",
    "<strong>Quintes et octaves directes (cachées)</strong> : atteindre une quinte ou une octave par <strong>mouvement direct</strong> (les deux voix dans le même sens) est proscrit, surtout si la voix supérieure y arrive par saut. On arrive aux parfaites par <strong>mouvement contraire</strong> (ou oblique).",
    "<strong>Autorisées</strong> : <strong>tierces et sixtes parallèles</strong> (imparfaites) — mais pas plus de <strong>trois de suite</strong>, pour préserver le dessin des voix.",
    "<strong>Cadres obligés</strong> : on <strong>commence</strong> et on <strong>termine</strong> sur une <strong>consonance parfaite</strong> ; la fin passe par la <strong>clausule</strong> (6te → 8ve, sensible haussée par ficta).",
    "Le <strong>mouvement contraire</strong> est privilégié partout ; pas de croisement systématique des voix.",
  ],
  exempleH3: "Exemple réalisé — 1re espèce (note contre note), mode dorien",
  exempleIntro:
    "Cantus firmus à la voix inférieure ; contrepoint à la voix supérieure. Contrepoint : Ré5 – La4 – Sol4 – La4 – Si4 – Do5 – Fa5 – Sol5 – Ré5 – Do♯5 – Ré5. Intervalles : 8 – 3 – 3 – 5 – 3 – 5 – 6 – 8 – 6 – 6 – 8.",
  exempleAnalyse:
    "<strong>Contrôles.</strong> Début et fin sur l'<strong>octave</strong> (parfaite). Les quintes et octaves internes et l'octave finale sont toutes atteintes par <strong>mouvement contraire</strong> — aucune quinte ni octave parallèle ou directe. Pas plus de deux imparfaites de suite. Le contrepoint est lui-même une bonne ligne : sommet unique <strong>Sol5</strong>, sauts ≤ 4te, pas de triton. À la cadence, la <strong>sensible Do♯5</strong> (musica ficta) monte à la finale Ré5 pendant que le cantus descend Mi4→Ré4 : clausule 6M → 8ve.",
  fleuriH3: "Vers le fleuri",
  fleuriP:
    "En contrepoint <strong>fleuri</strong> (proche de la 5e espèce, cours 13), on subdivise le contrepoint en valeurs plus brèves et l'on introduit les dissonances réglées de la section suivante. Fragment fleuri sur la première note du cantus : contre <strong>Ré4</strong> tenu, le contrepoint chante <strong>Ré5 – Do5 – Si4 – La4</strong> (quatre minimes).",
  fleuriAnalyse:
    "Les <strong>Do5</strong> et <strong>Si4</strong> sont des <strong>notes de passage</strong> conjointes sur temps faibles, reliant Ré5 (8ve) à La4 (5te).",

  dissonanceH2: "La dissonance : traitement strict",
  dissonanceP1:
    "Dans le <em>stile antico</em>, la dissonance n'est jamais un accord : c'est un <strong>incident mélodique</strong> bref, toujours conjoint et contrôlé. Jeppesen n'en admet que trois emplois.",
  passageH3: "1. La note de passage / la broderie — non accentuées",
  passageP:
    "La <strong>note de passage</strong> relie deux consonances par degré conjoint, <strong>sur temps faible</strong> uniquement, et se quitte dans le même sens. La <strong>broderie</strong> (note voisine) orne une consonance en s'en écartant d'un degré puis en y revenant, également <strong>sur temps faible</strong>. <em>Exemple (cantus tenu Do4).</em> Passage : contrepoint Mi5 – Ré5 – Do5, le Ré5 (dissonant) sur temps faible entre Mi5 (3ce) et Do5 (8ve). Broderie : Mi5 – Ré5 – Mi5, le Ré5 dissonant sur temps faible.",
  cambiataH3: "2. La nota cambiata (note échangée)",
  cambiataP:
    "Figure de quatre notes où la dissonance est <strong>quittée par un saut de tierce descendante</strong> au lieu d'une résolution conjointe — la seule licence de ce genre. <em>Exemple (cantus tenu Ré4).</em> Contrepoint <strong>Ré5 – Do5 – La4 – Si4</strong> : Ré5 (8ve, consonant) → <strong>Do5</strong> (7e mineure, <strong>dissonant</strong>, temps faible) → saut de <strong>tierce descendante</strong> vers La4 (5te, consonant) → Si4 (6te). La note de résolution attendue (Si4) n'arrive qu'à la fin : la dissonance est « échangée ».",
  retardH3: "3. Le retard préparé (suspensio) — la pierre angulaire",
  retardP1:
    "C'est LE geste du style, en trois temps. <strong>Préparation</strong> : la note est <strong>consonante</strong>, sur temps faible. <strong>Percussion (retard)</strong> : la voix grave bouge sur le <strong>temps fort</strong> ; la note tenue devient <strong>dissonante</strong>. <strong>Résolution</strong> : la note dissonante <strong>descend d'un degré conjoint</strong> vers une consonance, sur temps faible. Le retard résout <strong>toujours vers le bas, par degré conjoint</strong> ; la note de résolution ne doit pas être doublée simultanément.",
  retardTableCaption: "Les deux retards types (préparation → percussion → résolution)",
  retardHeaders: ["Type", "Préparation (faible)", "Percussion (fort, dissonant)", "Résolution (faible)"],
  retardRows: [
    { type: "7-6", prep: "Ténor Mi4 / Sup. Do5 → 6m", percussion: "Ténor Ré4 / Sup. Do5 tenu → 7m", resolution: "Ténor Ré4 / Sup. Si4 → 6M" },
    { type: "4-3", prep: "Basse Do4 / Sup. Sol4 → 5J", percussion: "Basse Ré4 / Sup. Sol4 tenu → 4te", resolution: "Basse Ré4 / Sup. Fa4 → 3m" },
  ],
  retardP2:
    "Dans le <strong>7-6</strong>, la voix supérieure descend Do5 → Si4 ; dans le <strong>4-3</strong>, elle descend Sol4 → Fa4. On rencontre aussi le <strong>2-3</strong> (retard à la voix <strong>grave</strong> : la basse suspendue résout en descendant, la 2de devient 3ce) et le <strong>9-8</strong>. Le retard est le moteur des cadences.",

  cadencesH2: "Contrepoint à 3-4 voix et cadences modales",
  cadencesP1:
    "À 3-4 voix, on raisonne toujours <strong>par paires de voix</strong> : chaque intervalle avec la basse doit être consonant (la quarte redevient consonante <strong>entre voix supérieures</strong>), les triades se complètent, mais les règles de dissonance et de parallèles restent intactes. On recherche l'indépendance rythmique (les voix ne bougent pas toutes ensemble) et l'imitation.",
  clausuleTitle: "La clausule (cadence modale)",
  clausuleP:
    "Toute cadence repose sur deux voix structurelles : le <strong>cantizans</strong> — la voix qui monte d'un <strong>demi-ton</strong> (la sensible, haussée par <em>musica ficta</em>) vers la finale ; le <strong>tenorizans</strong> — la voix qui descend d'un <strong>degré (2-1)</strong> vers la finale. Ensemble, ils forment le squelette <strong>6te → 8ve</strong> en mouvement contraire. On y ajoute souvent un <strong>retard 7-6</strong> (ou 2-3) juste avant, et une <strong>basse</strong> (<em>basizans</em>, saut de quinte/quarte vers la finale) qui donne à la cadence son allure de « V–I » — mais <strong>restant modale</strong> : c'est la ficta cadentielle, non une tonalité, qui produit la sensible.",
  dorienH3: "Cadence en mode dorien (finale Ré) — 4 voix, retard 7-6",
  dorienIntro:
    "Superius (cantizans) : Ré5 – Ré5 – Do♯5 – Ré5. Alto : La4 tenu. Ténor (tenorizans) : Fa4 – Mi4 – Mi4 – Ré4. Basse (basizans) : Ré3 – La2 – La2 – Ré3.",
  dorienAnalyse:
    "Le superius tient <strong>Ré5</strong> : consonant à la préparation (6M sur le ténor Fa4), il devient <strong>7e dissonante</strong> quand le ténor descend à Mi4, puis résout Ré5 → <strong>Do♯5</strong> (sensible haussée par ficta). La clausule : cantizans Do♯5 → Ré5 (demi-ton montant) contre tenorizans Mi4 → Ré4 (ton descendant) = <strong>6M → 8ve</strong>. La finale est une <strong>quinte à vide Ré–La</strong> — sonorité modale idiomatique ; on peut aussi hausser à la tierce picarde (Fa♯). La basse La2 → Ré3 confirme la finale.",
  phrygienH3: "Cadence en mode phrygien (finale Mi) — 4 voix",
  phrygienIntro:
    "Le phrygien <strong>ne hausse pas de sensible</strong> : le demi-ton diatonique <strong>Fa → Mi</strong> est déjà là, et il se trouve à la voix <strong>grave</strong> — c'est la signature du mode. Pénultième : Ré5 / Fa4 / La3 / Fa3 (basse). Finale : Mi5 / Sol4 / Si3 / Mi3 (basse).",
  phrygienAnalyse:
    "Squelette : le superius monte Ré5 → Mi5 (ton entier, <strong>sans</strong> sensible haussée), tandis que la basse descend Fa3 → Mi3 (<strong>demi-ton</strong>) — soit <strong>6M (Fa–Ré) → 8ve (Mi–Mi)</strong> en mouvement contraire. L'accord pénultième est un <strong>Ré mineur en premier renversement</strong> (Fa à la basse), qui résout sur <strong>Mi mineur</strong>. Toutes les parfaites finales sont atteintes par mouvement contraire ; les 6tes montent parallèlement (imparfaites, licites). C'est la cadence phrygienne, reconnaissable à ce demi-ton descendant à la basse.",
  imitationBox:
    "<strong>L'imitation.</strong> Une voix énonce un motif, une autre le reprend à la quinte ou à l'octave, quelques temps plus tard : c'est le germe du motet et de la fugue. On la traite ici brièvement, comme entrée en matière.",

  entrainH2: "Applications & entraînement",
  methodeH3: "Méthode : écrire un contrepoint fleuri sur un cantus firmus donné",
  methodeSteps: [
    "<strong>Identifier le mode</strong> : repérer la finale (première et dernière note du cantus) et l'ambitus ; en déduire finale, teneur, et la sensible à hausser <strong>à la cadence seulement</strong>.",
    "<strong>Squelette 1re espèce</strong> : placer une note consonante contre chaque note du cantus (commencer et finir sur une parfaite), en privilégiant 3ces et 6tes et le mouvement contraire ; vérifier l'<strong>absence de quintes/octaves parallèles ou directes</strong>.",
    "<strong>Vérifier la ligne</strong> : le contrepoint doit être chantable — conjoint, sommet unique, sauts compensés, sans triton.",
    "<strong>Fleurir</strong> : subdiviser les valeurs et introduire <strong>uniquement</strong> des dissonances réglées (passage/broderie sur temps faibles, éventuelle <em>cambiata</em>).",
    "<strong>Cadence</strong> : poser la clausule (cantizans + tenorizans, retard 7-6 ou 2-3, sensible par ficta).",
    "<strong>Contrôler</strong> à l'oreille et à l'écrit (gravure).",
  ],
  exercicesH3: "Exercices de contrepoint (corrigés-modèles gravés)",
  exercicesIntro:
    "L'éditeur SATB (4 voix) ne convient pas au contrepoint à 2 voix : ces exercices sont des <strong>corrigés-modèles gravés</strong>, pas des exercices d'éditeur. D'autres solutions correctes existent.",
  exercices: [
    {
      titre: "Exercice 1 — 1re espèce, contrepoint au-dessus (mode dorien)",
      consigne: "Cantus firmus (voix inférieure) : Ré4 – Fa4 – Mi4 – Ré4 – Sol4 – Fa4 – La4 – Sol4 – Fa4 – Mi4 – Ré4. Écrire une voix supérieure consonante (1:1), débutant et finissant sur une parfaite, avec clausule dorienne.",
      controle: "Corrigé : Ré5 – La4 – Sol4 – La4 – Si4 – Do5 – Fa5 – Sol5 – Ré5 – Do♯5 – Ré5 (8-3-3-5-3-5-6-8-6-6-8). Sommet Sol5 unique ; parfaites atteintes en mouvement contraire ; sensible Do♯5 à la cadence.",
    },
    {
      titre: "Exercice 2 — Contrepoint fleuri avec cadence (mode dorien)",
      consigne: "Cantus firmus (3 notes de fin) : Fa4 – Mi4 – Ré4. Au-dessus, un fleuri qui amène la clausule.",
      controle: "Corrigé (voix supérieure) : sur Fa4 → La4 – Do5 (3ce puis 5te, consonants) ; sur Mi4 → Ré5 puis Do♯5 (Ré5 amené comme passage/retard, résolvant sur la sensible) ; sur Ré4 → Ré5. Enchaînement cadentiel : cantus Mi4 → Ré4 contre superius Do♯5 → Ré5 = 6M → 8ve (clausule dorienne, sensible par ficta).",
    },
    {
      titre: "Exercice 3 — Réaliser une cadence modale (mode mixolydien, finale Sol)",
      consigne: "Cadence finale à 3 voix, tenorizans La3 → Sol3, à harmoniser avec cantizans et basse. Compléter avec la sensible haussée par ficta.",
      controle: "Corrigé : Superius (cantizans) Fa♯4 → Sol4 (sensible haussée, demi-ton) ; Ténor (tenorizans) La3 → Sol3 (ton descendant) ; Basse (basizans) Ré3 → Sol2 (saut de quinte vers la finale). Squelette : La3-Fa♯4 (6M) → Sol3-Sol4 (8ve), mouvement contraire. La sensible Fa♯ n'existe qu'ici, par musica ficta : au cœur du mode, le Fa reste naturel (7e mineure caractéristique du mixolydien).",
    },
    {
      titre: "Exercice 4 — Cadence phrygienne (finale Mi)",
      consigne: "Finale à 4 voix en mode phrygien. Réaliser la cadence sans hausser de sensible.",
      controle: "Corrigé : pénultième Fa3 (basse) – La3 (ténor) – Fa4 (alto) – Ré5 (superius) (Ré mineur, Fa à la basse) → finale Mi3 – Si3 – Sol4 – Mi5 (Mi mineur). Basse Fa3 → Mi3 (demi-ton, tenorizans à la grave), superius Ré5 → Mi5 (ton, cantizans). Squelette 6M (Fa–Ré) → 8ve (Mi–Mi) ; aucune quinte ni octave parallèle ; le demi-ton Fa→Mi à la basse signe le mode.",
    },
  ],
  voirCorrige: "Voir le modèle gravé",
  masquerCorrige: "Masquer le modèle",
  corrigeLabel: "Corrigé-modèle gravé",
  quizH3: "Quiz — 10 questions",
  questions: [
    {
      q: "Le contrepoint Palestrina s'organise autour de :",
      opts: ["La tonalité majeur/mineur", "Les modes ecclésiastiques (finale, teneur)", "La gamme par tons", "Les douze sons"],
      a: 1,
      fb: "Le style est modal, pas tonal : c'est la finale et le mode, non une dominante fonctionnelle, qui organisent la pièce.",
    },
    {
      q: "Qui a codifié statistiquement le traitement de la dissonance chez Palestrina ?",
      opts: ["Johann Joseph Fux", "Gioseffo Zarlino", "Knud Jeppesen", "Heinrich Schenker"],
      a: 2,
      fb: "Knud Jeppesen, The Style of Palestrina and the Dissonance (1922).",
    },
    {
      q: "Dans un mode authente, la teneur se situe le plus souvent :",
      opts: ["À la tierce sous la finale", "À la quinte au-dessus de la finale", "Sur la finale", "À l'octave"],
      a: 1,
      fb: "À la quinte au-dessus de la finale, sauf report du Si sur Do (modes III et VIII).",
    },
    {
      q: "Lequel de ces sauts mélodiques est interdit dans une ligne Palestrina ?",
      opts: ["La quarte juste", "L'octave", "La tierce mineure", "Le triton (4te augmentée)"],
      a: 3,
      fb: "Le triton est proscrit, comme les 7es, la 6te majeure et tout intervalle supérieur à l'octave.",
    },
    {
      q: "Après un saut large, la ligne doit :",
      opts: ["Continuer dans le même sens", "Revenir par degré conjoint en sens contraire", "Répéter la note", "Sauter à nouveau"],
      a: 1,
      fb: "C'est la compensation du saut : on le récupère par degré conjoint en sens contraire.",
    },
    {
      q: "Combien de fois le sommet mélodique (climax) doit-il apparaître ?",
      opts: ["Une seule fois", "Deux fois", "À chaque phrase", "Autant qu'on veut"],
      a: 0,
      fb: "Une seule fois : répété, il perd son effet de sommet.",
    },
    {
      q: "Deux quintes justes parallèles entre les mêmes voix sont :",
      opts: ["Autorisées si brèves", "Autorisées entre voix intérieures", "Interdites", "Autorisées à la cadence"],
      a: 2,
      fb: "Interdites, comme les octaves et unissons parallèles : elles effacent l'indépendance des voix.",
    },
    {
      q: "Une note de passage dissonante se place :",
      opts: ["Sur le temps fort", "Sur un temps faible, par degré conjoint", "Par saut", "N'importe où"],
      a: 1,
      fb: "Dans le style strict, passage et broderie sont non accentués (sur temps faible, par degré conjoint).",
    },
    {
      q: "Un retard (suspension) résout toujours :",
      opts: ["En montant d'un degré", "Par un saut de tierce", "En descendant d'un degré conjoint", "En restant sur place"],
      a: 2,
      fb: "Préparation (consonante) → percussion (dissonante, temps fort) → résolution conjointe descendante.",
    },
    {
      q: "La cadence phrygienne (finale Mi) se reconnaît à :",
      opts: ["Une sensible Ré♯ haussée", "Un demi-ton Fa → Mi à la voix grave", "Un 6/4 cadentiel", "Une pédale de dominante"],
      a: 1,
      fb: "Le phrygien ne hausse pas de sensible ; son demi-ton diatonique Fa–Mi est à la basse.",
    },
  ],
  bonusLabel: "Question bonus — la distinction clé",
  bonusQ: "Quelle différence entre les espèces de Fux (cours 13) et le style Palestrina ?",
  bonusToggle: "Voir la réponse",
  bonusA:
    "Fux <strong>abstrait</strong> le contrepoint en une échelle didactique (cantus firmus en valeurs égales, réflexes souvent tonalisés) ; Palestrina est le <strong>répertoire vocal modal</strong> vivant — texté, rythmiquement souple — que ces espèces distillent.",

  listenBtn: "Écouter",
};

// ════════════════════════════════════════════════════════════════════════════
// EN
// ════════════════════════════════════════════════════════════════════════════

const en: Cours43Locale = {
  maitreConcept: "The vocal polyphony of the stile antico",
  maitreAnecdote:
    "Giovanni Pierluigi da Palestrina (c. 1525-1594) embodies the ideal of sixteenth-century sacred polyphony: a cappella masses and motets, written for voices that must be able to sing each line effortlessly. The legend — born around his Missa Papae Marcelli — holds that he « saved » the polyphony the Council of Trent was minded to ban, by proving that learned counterpoint could leave the text perfectly intelligible. Three centuries later, the Danish musicologist Knud Jeppesen surveyed his works statistically to extract the exact rules of dissonance treatment: that is the code we follow.",
  maitreLesson:
    "The Palestrina style is not functional tonality but a modal art: the final and the mode, not a dominant, organize the piece; consonance is the normal state, dissonance a brief and regulated event.",

  introH2: "The Palestrina style and the prima pratica",
  introP1:
    "Giovanni Pierluigi da Palestrina (c. 1525-1594) embodies the ideal of sixteenth-century <strong>sacred vocal polyphony</strong>: a cappella masses and motets, written for voices that must be able to sing each line effortlessly. Three qualities define this style: <strong>fluency</strong> (each voice moves mostly by step, the rhythmic flow is continuous and even), <strong>absolute control of dissonance</strong> (consonance is the normal state, dissonance a brief and regulated event), and <strong>singability</strong> (natural intervals, measured range, text carried with clarity).",
  introP2:
    "We call <em>stile antico</em> — the « ancient style » — the codification of this manner, which Baroque composers would keep teaching as a model of rigour, as opposed to Monteverdi's expressive <em>seconda pratica</em>. It is this <em>stile antico</em> that Johann Joseph Fux abstracts into five species in the <em>Gradus ad Parnassum</em> (course 13). <strong>Our course goes the other way</strong>: where Fux reduces counterpoint to a didactic ladder (cantus firmus in equal values, often tonalized reflexes), we return to the living material — <strong>modal</strong>, texted, rhythmically supple — that the species distil. The difference is fundamental: here, no functional tonality, no dominant-tonic, but a <strong>mode</strong> (final, tenor) and <strong>modal cadences</strong>.",
  introJeppesenBox:
    "It was the Danish musicologist <strong>Knud Jeppesen</strong> (<em>The Style of Palestrina and the Dissonance</em>, 1922; <em>Counterpoint</em>, 1930) who established <strong>statistically</strong> the exact rules of dissonance treatment in this repertoire: we follow his codification. Useful prerequisites: course 13 (species counterpoint, Fux) and course 10 (the modes).",

  modesH2: "The church modes",
  modesP1:
    "Renaissance counterpoint thinks not in keys but in <strong>modes</strong>. Each mode is defined by its <strong>final</strong> (the note of rest and completion), its <strong>ambitus</strong> (the octave in which the voice unfolds) and its <strong>tenor</strong> (or <em>repercussa</em>, reciting tone toward which the melody gravitates). Each mode exists in an <strong>authentic</strong> form (the octave rises from the final) and a <strong>plagal</strong> one (prefix <em>hypo-</em>: the octave is centred around the final). Course 10 gives their colour; here, the mode is a <strong>framework for writing</strong>, not a scale to improvise on.",
  modesTableCaption: "The twelve modes (Glarean, Dodecachordon, 1547)",
  modesHeaders: ["No.", "Name", "Type", "Final", "Ambitus", "Tenor"],
  modesRows: [
    { num: "I", nom: "Dorian", type: "authentic", finale: "Ré", ambitus: "Ré–Ré", teneur: "La" },
    { num: "II", nom: "Hypodorian", type: "plagal", finale: "Ré", ambitus: "La(low)–La", teneur: "Fa" },
    { num: "III", nom: "Phrygian", type: "authentic", finale: "Mi", ambitus: "Mi–Mi", teneur: "Do" },
    { num: "IV", nom: "Hypophrygian", type: "plagal", finale: "Mi", ambitus: "Si(low)–Si", teneur: "La" },
    { num: "V", nom: "Lydian", type: "authentic", finale: "Fa", ambitus: "Fa–Fa", teneur: "Do" },
    { num: "VI", nom: "Hypolydian", type: "plagal", finale: "Fa", ambitus: "Do–Do", teneur: "La" },
    { num: "VII", nom: "Mixolydian", type: "authentic", finale: "Sol", ambitus: "Sol–Sol", teneur: "Ré" },
    { num: "VIII", nom: "Hypomixolydian", type: "plagal", finale: "Sol", ambitus: "Ré–Ré", teneur: "Do" },
    { num: "IX", nom: "Aeolian", type: "authentic", finale: "La", ambitus: "La–La", teneur: "Mi" },
    { num: "X", nom: "Hypoaeolian", type: "plagal", finale: "La", ambitus: "Mi–Mi", teneur: "Do" },
    { num: "XI", nom: "Ionian", type: "authentic", finale: "Do", ambitus: "Do–Do", teneur: "Sol" },
    { num: "XII", nom: "Hypoionian", type: "plagal", finale: "Do", ambitus: "Sol–Sol", teneur: "Mi" },
  ],
  teneurRuleBox:
    "<strong>The tenor rule.</strong> In <strong>authentic</strong> modes it is the <strong>fifth above the final</strong>; in <strong>plagal</strong> modes, a <strong>third below</strong> the authentic tenor. Two historical exceptions: a tenor that would fall on <strong>Si</strong> is raised to <strong>Do</strong> (modes III and VIII), because Si is unstable.",
  pointsClesBox:
    "<strong>Key points.</strong> Glarean (<em>Dodecachordon</em>, 1547) officialized the <strong>Aeolian</strong> and <strong>Ionian</strong> (modes IX to XII), recognizing the future « minor » and « major ». The <strong>Locrian</strong> (final Si) remains theoretical: its diminished fifth makes it unusable as a final. <strong><em>Musica ficta</em></strong> supplies the unwritten accidentals: <strong>Si♭</strong> to avoid the Fa–Si tritone (<em>una nota super la…</em>), and above all the <strong>leading tone raised at the cadence</strong> (the <em>subsemitonium modi</em>: Do♯ in Dorian, Fa♯ in Mixolydian, Sol♯ in Aeolian) — never in mid-phrase, only at the clausula.",

  melodieH2: "The melodic line (the cantus)",
  melodieP1:
    "Each voice must be a fine, singable, self-standing melody with a balanced arch. The melodic rules (codified by Jeppesen from the repertoire) are stricter than in Fux.",
  reglesTitle: "The melodic rules",
  reglesMelodiques: [
    "<strong>Primacy of stepwise motion</strong> (by seconds). Leaps are the exception, never the norm.",
    "<strong>Compensating the leap</strong>: a leap, especially a wide one, is <strong>recovered by step in the opposite direction</strong>. Two leaps in a row are tolerated only if they outline a consonant triad within the octave, followed by a stepwise return.",
    "<strong>A single melodic peak</strong> (<em>climax</em>): the highest note appears <strong>only once</strong>, otherwise the sense of climax dissolves. The line rises toward it, then descends — the arch.",
    "<strong>Long / short values</strong>: a leap is preferably taken <strong>from</strong> a long note and <strong>left</strong> by a note at least as long; long values mark the beginnings and ends of phrases.",
    "<strong>No motif repetition</strong>: the Renaissance forbids literal melodic sequences (unlike the Baroque). One also avoids stubbornly repeating the same note and <strong>outlining a tritone</strong> between two non-adjacent notes (e.g. a Fa then a Si).",
  ],
  sautsTableCaption: "Permitted and forbidden melodic leaps",
  sautsHeaders: ["Interval", "Status"],
  sautsRows: [
    { intervalle: "Second (2nd)", statut: "The normal stepwise motion — the basis of the line" },
    { intervalle: "Minor and major third", statut: "Permitted" },
    { intervalle: "Perfect fourth", statut: "Permitted" },
    { intervalle: "Perfect fifth", statut: "Permitted" },
    { intervalle: "Minor sixth", statut: "Permitted (rare, ascending)" },
    { intervalle: "Octave", statut: "Permitted" },
    { intervalle: "Major sixth", statut: "Forbidden" },
    { intervalle: "Seventh (any)", statut: "Forbidden" },
    { intervalle: "Tritone (aug. 4th / dim. 5th)", statut: "Forbidden" },
    { intervalle: "Any augmented or diminished interval", statut: "Forbidden" },
    { intervalle: "Beyond the octave", statut: "Forbidden" },
  ],
  cantusH3: "Model cantus (mode I, Dorian, final Ré)",
  cantusIntro:
    "A classic cantus firmus from the species repertoire, here in semibreves — <strong>11 notes</strong>: Ré – Fa – Mi – Ré – Sol – Fa – La – Sol – Fa – Mi – Ré. This is the model to sing before any two-voice writing.",
  cantusAnalyse:
    "<strong>Analysis.</strong> Peak <strong>La4</strong> reached <strong>only once</strong> (note 7). Only two small ascending leaps — Ré4→Fa4 (m3rd) and Ré4→Sol4 (P4th) — each surrounded by steps; no leap exceeds a fourth, no tritone, no 7th. The line draws an arch: a measured rise toward La4, then a stepwise descent La–Sol–Fa–Mi–Ré to the final. No Si (hence no risk of a Fa–Si tritone). Begins and ends on the final Ré.",

  contrepointH2: "Consonances and two-voice counterpoint",
  consonancesP1:
    "<strong>Perfect consonances</strong>: unison, perfect fifth, octave (and their compounds). <strong>Imperfect consonances</strong>: thirds (M and m) and sixths (M and m). The <strong>perfect fourth</strong> is <strong>dissonant</strong> against the lower voice (as in course 13); it becomes consonant only between two upper voices in a 3-4 voice texture. Everything else (2nd, 7th, tritone) is dissonant.",
  conduiteTitle: "Voice-leading rules (2 voices)",
  conduiteRegles: [
    "<strong>Absolute prohibitions</strong>: <strong>parallel perfect fifths</strong>, <strong>parallel octaves</strong>, <strong>parallel unisons</strong> — two voices moving together on a perfect interval lose their independence.",
    "<strong>Direct (hidden) fifths and octaves</strong>: reaching a fifth or octave by <strong>similar motion</strong> (both voices in the same direction) is forbidden, especially if the upper voice arrives by leap. Perfect intervals are approached by <strong>contrary motion</strong> (or oblique).",
    "<strong>Permitted</strong>: <strong>parallel thirds and sixths</strong> (imperfect) — but no more than <strong>three in a row</strong>, to preserve the shape of the voices.",
    "<strong>Fixed frames</strong>: one <strong>begins</strong> and <strong>ends</strong> on a <strong>perfect consonance</strong>; the ending goes through the <strong>clausula</strong> (6th → 8ve, leading tone raised by ficta).",
    "<strong>Contrary motion</strong> is favoured throughout; no systematic crossing of the voices.",
  ],
  exempleH3: "Worked example — first species (note against note), Dorian mode",
  exempleIntro:
    "Cantus firmus in the lower voice; counterpoint in the upper voice. Counterpoint: Ré5 – La4 – Sol4 – La4 – Si4 – Do5 – Fa5 – Sol5 – Ré5 – Do♯5 – Ré5. Intervals: 8 – 3 – 3 – 5 – 3 – 5 – 6 – 8 – 6 – 6 – 8.",
  exempleAnalyse:
    "<strong>Checks.</strong> Begins and ends on the <strong>octave</strong> (perfect). The internal fifths and octaves and the final octave are all reached by <strong>contrary motion</strong> — no parallel or direct fifths or octaves. No more than two imperfect consonances in a row. The counterpoint is itself a good line: a single peak <strong>Sol5</strong>, leaps ≤ 4th, no tritone. At the cadence, the <strong>leading tone Do♯5</strong> (musica ficta) rises to the final Ré5 while the cantus descends Mi4→Ré4: clausula 6M → 8ve.",
  fleuriH3: "Toward florid counterpoint",
  fleuriP:
    "In <strong>florid</strong> counterpoint (close to the 5th species, course 13), the counterpoint is subdivided into shorter values and the regulated dissonances of the next section are introduced. A florid fragment over the first cantus note: against a held <strong>Ré4</strong>, the counterpoint sings <strong>Ré5 – Do5 – Si4 – La4</strong> (four minims).",
  fleuriAnalyse:
    "<strong>Do5</strong> and <strong>Si4</strong> are stepwise <strong>passing notes</strong> on weak beats, linking Ré5 (8ve) to La4 (5th).",

  dissonanceH2: "Dissonance: strict treatment",
  dissonanceP1:
    "In the <em>stile antico</em>, dissonance is never a chord: it is a brief <strong>melodic incident</strong>, always stepwise and controlled. Jeppesen admits only three uses.",
  passageH3: "1. The passing note / the neighbor note — unaccented",
  passageP:
    "The <strong>passing note</strong> links two consonances by step, <strong>on a weak beat</strong> only, and is left in the same direction. The <strong>neighbor note</strong> ornaments a consonance by moving away a step and returning, also <strong>on a weak beat</strong>. <em>Example (held cantus Do4).</em> Passing: counterpoint Mi5 – Ré5 – Do5, the Ré5 (dissonant) on a weak beat between Mi5 (3rd) and Do5 (8ve). Neighbor: Mi5 – Ré5 – Mi5, the Ré5 dissonant on a weak beat.",
  cambiataH3: "2. The nota cambiata (exchanged note)",
  cambiataP:
    "A four-note figure in which the dissonance is <strong>left by a descending leap of a third</strong> instead of a stepwise resolution — the only licence of this kind. <em>Example (held cantus Ré4).</em> Counterpoint <strong>Ré5 – Do5 – La4 – Si4</strong>: Ré5 (8ve, consonant) → <strong>Do5</strong> (minor 7th, <strong>dissonant</strong>, weak beat) → <strong>descending leap of a third</strong> to La4 (5th, consonant) → Si4 (6th). The expected note of resolution (Si4) arrives only at the end: the dissonance is « exchanged ».",
  retardH3: "3. The prepared suspension (suspensio) — the cornerstone",
  retardP1:
    "This is THE gesture of the style, in three stages. <strong>Preparation</strong>: the note is <strong>consonant</strong>, on a weak beat. <strong>Percussion (suspension)</strong>: the lower voice moves on the <strong>strong beat</strong>; the held note becomes <strong>dissonant</strong>. <strong>Resolution</strong>: the dissonant note <strong>descends by step</strong> to a consonance, on a weak beat. The suspension always resolves <strong>downward, by step</strong>; the note of resolution must not be doubled simultaneously.",
  retardTableCaption: "The two standard suspensions (preparation → percussion → resolution)",
  retardHeaders: ["Type", "Preparation (weak)", "Percussion (strong, dissonant)", "Resolution (weak)"],
  retardRows: [
    { type: "7-6", prep: "Tenor Mi4 / Sup. Do5 → m6", percussion: "Tenor Ré4 / Sup. Do5 held → m7", resolution: "Tenor Ré4 / Sup. Si4 → M6" },
    { type: "4-3", prep: "Bass Do4 / Sup. Sol4 → P5", percussion: "Bass Ré4 / Sup. Sol4 held → 4th", resolution: "Bass Ré4 / Sup. Fa4 → m3" },
  ],
  retardP2:
    "In the <strong>7-6</strong>, the upper voice descends Do5 → Si4; in the <strong>4-3</strong>, it descends Sol4 → Fa4. One also meets the <strong>2-3</strong> (suspension in the <strong>lower</strong> voice: the suspended bass resolves downward, the 2nd becoming a 3rd) and the <strong>9-8</strong>. The suspension is the engine of the cadences.",

  cadencesH2: "Three- and four-voice counterpoint and modal cadences",
  cadencesP1:
    "In 3-4 voices, one always reasons <strong>by pairs of voices</strong>: every interval with the bass must be consonant (the fourth becomes consonant again <strong>between upper voices</strong>), the triads are completed, but the rules of dissonance and parallels remain intact. One seeks rhythmic independence (the voices do not all move together) and imitation.",
  clausuleTitle: "The clausula (modal cadence)",
  clausuleP:
    "Every cadence rests on two structural voices: the <strong>cantizans</strong> — the voice that rises by a <strong>semitone</strong> (the leading tone, raised by <em>musica ficta</em>) to the final; the <strong>tenorizans</strong> — the voice that descends by a <strong>step (2-1)</strong> to the final. Together they form the <strong>6th → 8ve</strong> skeleton in contrary motion. A <strong>7-6 suspension</strong> (or 2-3) is often added just before, and a <strong>bass</strong> (<em>basizans</em>, a leap of a fifth/fourth to the final) that gives the cadence its « V–I » air — but <strong>remaining modal</strong>: it is the cadential ficta, not a key, that produces the leading tone.",
  dorienH3: "Cadence in the Dorian mode (final Ré) — 4 voices, 7-6 suspension",
  dorienIntro:
    "Superius (cantizans): Ré5 – Ré5 – Do♯5 – Ré5. Alto: held La4. Tenor (tenorizans): Fa4 – Mi4 – Mi4 – Ré4. Bass (basizans): Ré3 – La2 – La2 – Ré3.",
  dorienAnalyse:
    "The superius holds <strong>Ré5</strong>: consonant at the preparation (M6 over the tenor Fa4), it becomes a <strong>dissonant 7th</strong> when the tenor drops to Mi4, then resolves Ré5 → <strong>Do♯5</strong> (leading tone raised by ficta). The clausula: cantizans Do♯5 → Ré5 (rising semitone) against tenorizans Mi4 → Ré4 (descending tone) = <strong>M6 → 8ve</strong>. The final is an <strong>open fifth Ré–La</strong> — an idiomatic modal sonority; one may also raise it to the Picardy third (Fa♯). The bass La2 → Ré3 confirms the final.",
  phrygienH3: "Cadence in the Phrygian mode (final Mi) — 4 voices",
  phrygienIntro:
    "The Phrygian <strong>does not raise a leading tone</strong>: the diatonic semitone <strong>Fa → Mi</strong> is already there, and it lies in the <strong>lower</strong> voice — the signature of the mode. Penultimate: Ré5 / Fa4 / La3 / Fa3 (bass). Final: Mi5 / Sol4 / Si3 / Mi3 (bass).",
  phrygienAnalyse:
    "Skeleton: the superius rises Ré5 → Mi5 (a whole tone, <strong>without</strong> a raised leading tone), while the bass descends Fa3 → Mi3 (a <strong>semitone</strong>) — that is <strong>M6 (Fa–Ré) → 8ve (Mi–Mi)</strong> in contrary motion. The penultimate chord is a <strong>Ré minor in first inversion</strong> (Fa in the bass), resolving to <strong>Mi minor</strong>. All the final perfect intervals are reached by contrary motion; the sixths rise in parallel (imperfect, allowed). This is the Phrygian cadence, recognizable by that descending semitone in the bass.",
  imitationBox:
    "<strong>Imitation.</strong> One voice states a motif, another takes it up at the fifth or the octave a few beats later: this is the seed of the motet and the fugue. We treat it briefly here, as an introduction.",

  entrainH2: "Applications & practice",
  methodeH3: "Method: writing a florid counterpoint over a given cantus firmus",
  methodeSteps: [
    "<strong>Identify the mode</strong>: spot the final (first and last note of the cantus) and the ambitus; deduce final, tenor, and the leading tone to raise <strong>at the cadence only</strong>.",
    "<strong>First-species skeleton</strong>: place a consonant note against each cantus note (begin and end on a perfect consonance), favouring 3rds and 6ths and contrary motion; check for the <strong>absence of parallel or direct fifths/octaves</strong>.",
    "<strong>Check the line</strong>: the counterpoint must be singable — stepwise, single peak, compensated leaps, no tritone.",
    "<strong>Add ornaments</strong>: subdivide the values and introduce <strong>only</strong> regulated dissonances (passing/neighbor on weak beats, possibly a <em>cambiata</em>).",
    "<strong>Cadence</strong>: set the clausula (cantizans + tenorizans, 7-6 or 2-3 suspension, leading tone by ficta).",
    "<strong>Check</strong> by ear and in writing (engraving).",
  ],
  exercicesH3: "Counterpoint exercises (engraved model answers)",
  exercicesIntro:
    "The SATB editor (4 voices) does not suit two-voice counterpoint: these exercises are <strong>engraved model answers</strong>, not editor exercises. Other correct solutions exist.",
  exercices: [
    {
      titre: "Exercise 1 — First species, counterpoint above (Dorian mode)",
      consigne: "Cantus firmus (lower voice): Ré4 – Fa4 – Mi4 – Ré4 – Sol4 – Fa4 – La4 – Sol4 – Fa4 – Mi4 – Ré4. Write a consonant upper voice (1:1), beginning and ending on a perfect consonance, with a Dorian clausula.",
      controle: "Model: Ré5 – La4 – Sol4 – La4 – Si4 – Do5 – Fa5 – Sol5 – Ré5 – Do♯5 – Ré5 (8-3-3-5-3-5-6-8-6-6-8). Single peak Sol5; perfect intervals reached by contrary motion; leading tone Do♯5 at the cadence.",
    },
    {
      titre: "Exercise 2 — Florid counterpoint with cadence (Dorian mode)",
      consigne: "Cantus firmus (last 3 notes): Fa4 – Mi4 – Ré4. Above it, a florid line that brings in the clausula.",
      controle: "Model (upper voice): over Fa4 → La4 – Do5 (3rd then 5th, consonant); over Mi4 → Ré5 then Do♯5 (Ré5 introduced as a passing/suspended note, resolving to the leading tone); over Ré4 → Ré5. Cadential motion: cantus Mi4 → Ré4 against superius Do♯5 → Ré5 = 6M → 8ve (Dorian clausula, leading tone by ficta).",
    },
    {
      titre: "Exercise 3 — Realizing a modal cadence (Mixolydian mode, final Sol)",
      consigne: "Final cadence in 3 voices, tenorizans La3 → Sol3, to be harmonized with cantizans and bass. Complete it with the leading tone raised by ficta.",
      controle: "Model: Superius (cantizans) Fa♯4 → Sol4 (raised leading tone, semitone); Tenor (tenorizans) La3 → Sol3 (descending tone); Bass (basizans) Ré3 → Sol2 (leap of a fifth to the final). Skeleton: La3-Fa♯4 (M6) → Sol3-Sol4 (8ve), contrary motion. The leading tone Fa♯ exists only here, by musica ficta: within the mode, Fa stays natural (the minor 7th characteristic of the Mixolydian).",
    },
    {
      titre: "Exercise 4 — Phrygian cadence (final Mi)",
      consigne: "Final in 4 voices in the Phrygian mode. Realize the cadence without raising a leading tone.",
      controle: "Model: penultimate Fa3 (bass) – La3 (tenor) – Fa4 (alto) – Ré5 (superius) (Ré minor, Fa in the bass) → final Mi3 – Si3 – Sol4 – Mi5 (Mi minor). Bass Fa3 → Mi3 (semitone, tenorizans in the lower voice), superius Ré5 → Mi5 (tone, cantizans). Skeleton 6M (Fa–Ré) → 8ve (Mi–Mi); no parallel fifths or octaves; the Fa→Mi semitone in the bass signs the mode.",
    },
  ],
  voirCorrige: "Show the engraved model",
  masquerCorrige: "Hide the model",
  corrigeLabel: "Engraved model answer",
  quizH3: "Quiz — 10 questions",
  questions: [
    {
      q: "Palestrina counterpoint is organized around:",
      opts: ["Major/minor tonality", "The church modes (final, tenor)", "The whole-tone scale", "The twelve tones"],
      a: 1,
      fb: "The style is modal, not tonal: it is the final and the mode, not a functional dominant, that organize the piece.",
    },
    {
      q: "Who statistically codified the treatment of dissonance in Palestrina?",
      opts: ["Johann Joseph Fux", "Gioseffo Zarlino", "Knud Jeppesen", "Heinrich Schenker"],
      a: 2,
      fb: "Knud Jeppesen, The Style of Palestrina and the Dissonance (1922).",
    },
    {
      q: "In an authentic mode, the tenor most often lies:",
      opts: ["A third below the final", "A fifth above the final", "On the final", "At the octave"],
      a: 1,
      fb: "A fifth above the final, except when Si is shifted to Do (modes III and VIII).",
    },
    {
      q: "Which of these melodic leaps is forbidden in a Palestrina line?",
      opts: ["The perfect fourth", "The octave", "The minor third", "The tritone (augmented 4th)"],
      a: 3,
      fb: "The tritone is banned, as are sevenths, the major sixth and any interval greater than an octave.",
    },
    {
      q: "After a wide leap, the line must:",
      opts: ["Continue in the same direction", "Return by step in the opposite direction", "Repeat the note", "Leap again"],
      a: 1,
      fb: "That is the compensation of the leap: it is recovered by step in the opposite direction.",
    },
    {
      q: "How many times should the melodic peak (climax) appear?",
      opts: ["Only once", "Twice", "In every phrase", "As often as you like"],
      a: 0,
      fb: "Only once: repeated, it loses its sense of climax.",
    },
    {
      q: "Two parallel perfect fifths between the same voices are:",
      opts: ["Allowed if brief", "Allowed between inner voices", "Forbidden", "Allowed at the cadence"],
      a: 2,
      fb: "Forbidden, like parallel octaves and unisons: they erase the independence of the voices.",
    },
    {
      q: "A dissonant passing note is placed:",
      opts: ["On the strong beat", "On a weak beat, by step", "By leap", "Anywhere"],
      a: 1,
      fb: "In the strict style, passing and neighbor notes are unaccented (on a weak beat, by step).",
    },
    {
      q: "A suspension always resolves:",
      opts: ["Rising by a step", "By a leap of a third", "Descending by a step", "By staying in place"],
      a: 2,
      fb: "Preparation (consonant) → percussion (dissonant, strong beat) → downward stepwise resolution.",
    },
    {
      q: "The Phrygian cadence (final Mi) is recognized by:",
      opts: ["A raised leading tone Ré♯", "A Fa → Mi semitone in the lower voice", "A cadential 6/4", "A dominant pedal"],
      a: 1,
      fb: "The Phrygian raises no leading tone; its diatonic Fa–Mi semitone is in the bass.",
    },
  ],
  bonusLabel: "Bonus question — the key distinction",
  bonusQ: "What is the difference between Fux's species (course 13) and the Palestrina style?",
  bonusToggle: "Show the answer",
  bonusA:
    "Fux <strong>abstracts</strong> counterpoint into a didactic ladder (cantus firmus in equal values, often tonalized reflexes); Palestrina is the living <strong>modal vocal repertoire</strong> — texted, rhythmically supple — that those species distil.",

  listenBtn: "Listen",
};

// ════════════════════════════════════════════════════════════════════════════
// DE
// ════════════════════════════════════════════════════════════════════════════

const de: Cours43Locale = {
  maitreConcept: "Die Vokalpolyphonie des stile antico",
  maitreAnecdote:
    "Giovanni Pierluigi da Palestrina (um 1525-1594) verkörpert das Ideal der geistlichen Polyphonie des 16. Jahrhunderts: Messen und Motetten a cappella, geschrieben für Stimmen, die jede Linie mühelos singen können müssen. Die Legende — entstanden um seine Missa Papae Marcelli — will, dass er die Polyphonie « gerettet » habe, die das Konzil von Trient zu verbieten erwog, indem er bewies, dass ein kunstvoller Kontrapunkt den Text vollkommen verständlich lassen kann. Drei Jahrhunderte später wertete der dänische Musikwissenschaftler Knud Jeppesen seine Werke statistisch aus, um die genauen Regeln der Dissonanzbehandlung abzuleiten: das ist der Kodex, dem wir folgen.",
  maitreLesson:
    "Der Palestrina-Stil ist keine funktionale Tonalität, sondern eine modale Kunst: die Finalis und der Modus, nicht eine Dominante, ordnen das Stück; die Konsonanz ist der Normalzustand, die Dissonanz ein kurzes, geregeltes Ereignis.",

  introH2: "Der Palestrina-Stil und die prima pratica",
  introP1:
    "Giovanni Pierluigi da Palestrina (um 1525-1594) verkörpert das Ideal der geistlichen <strong>Vokalpolyphonie</strong> des 16. Jahrhunderts: Messen und Motetten a cappella, geschrieben für Stimmen, die jede Linie mühelos singen können müssen. Drei Eigenschaften bestimmen diesen Stil: die <strong>Flüssigkeit</strong> (jede Stimme schreitet vorwiegend in Sekundschritten fort, der rhythmische Fluss ist stetig und gleichmäßig), die <strong>absolute Kontrolle der Dissonanz</strong> (die Konsonanz ist der Normalzustand, die Dissonanz ein kurzes, geregeltes Ereignis) und die <strong>Singbarkeit</strong> (natürliche Intervalle, gemessener Ambitus, klar getragener Text).",
  introP2:
    "Man nennt <em>stile antico</em> — den « alten Stil » — die Kodifizierung dieser Schreibweise, die die Barockkomponisten weiterhin als Vorbild der Strenge lehren werden, im Gegensatz zur ausdrucksvollen <em>seconda pratica</em> Monteverdis. Es ist dieser <em>stile antico</em>, den Johann Joseph Fux im <em>Gradus ad Parnassum</em> (Kurs 13) zu fünf Gattungen abstrahiert. <strong>Unser Kurs geht den umgekehrten Weg</strong>: wo Fux den Kontrapunkt zu einer didaktischen Leiter reduziert (Cantus firmus in gleichen Werten, oft tonalisierte Reflexe), kehren wir zum lebendigen Material zurück — <strong>modal</strong>, textiert, rhythmisch geschmeidig —, das die Gattungen destillieren. Der Unterschied ist grundlegend: hier keine funktionale Tonalität, keine Dominant-Tonika, sondern ein <strong>Modus</strong> (Finalis, Tenor) und <strong>modale Kadenzen</strong>.",
  introJeppesenBox:
    "Es war der dänische Musikwissenschaftler <strong>Knud Jeppesen</strong> (<em>The Style of Palestrina and the Dissonance</em>, 1922; <em>Counterpoint</em>, 1930), der die genauen Regeln der Dissonanzbehandlung in diesem Repertoire <strong>statistisch</strong> festlegte: wir folgen seiner Kodifizierung. Nützliche Voraussetzungen: Kurs 13 (Gattungskontrapunkt, Fux) und Kurs 10 (die Modi).",

  modesH2: "Die Kirchentonarten",
  modesP1:
    "Der Renaissance-Kontrapunkt denkt nicht in Tonarten, sondern in <strong>Modi</strong>. Jeder Modus wird durch seine <strong>Finalis</strong> (Ruhe- und Schlusston), seinen <strong>Ambitus</strong> (die Oktave, in der sich die Stimme entfaltet) und seinen <strong>Tenor</strong> (oder <em>Repercussa</em>, Rezitationston, zu dem die Melodie strebt) bestimmt. Jeder Modus existiert in einer <strong>authentischen</strong> Form (die Oktave steigt von der Finalis auf) und einer <strong>plagalen</strong> (Präfix <em>hypo-</em>: die Oktave ist um die Finalis zentriert). Kurs 10 gibt ihre Farbe; hier ist der Modus ein <strong>Schreibrahmen</strong>, keine zu improvisierende Skala.",
  modesTableCaption: "Die zwölf Modi (Glarean, Dodecachordon, 1547)",
  modesHeaders: ["Nr.", "Name", "Typ", "Finalis", "Ambitus", "Tenor"],
  modesRows: [
    { num: "I", nom: "Dorisch", type: "authentisch", finale: "Ré", ambitus: "Ré–Ré", teneur: "La" },
    { num: "II", nom: "Hypodorisch", type: "plagal", finale: "Ré", ambitus: "La(tief)–La", teneur: "Fa" },
    { num: "III", nom: "Phrygisch", type: "authentisch", finale: "Mi", ambitus: "Mi–Mi", teneur: "Do" },
    { num: "IV", nom: "Hypophrygisch", type: "plagal", finale: "Mi", ambitus: "Si(tief)–Si", teneur: "La" },
    { num: "V", nom: "Lydisch", type: "authentisch", finale: "Fa", ambitus: "Fa–Fa", teneur: "Do" },
    { num: "VI", nom: "Hypolydisch", type: "plagal", finale: "Fa", ambitus: "Do–Do", teneur: "La" },
    { num: "VII", nom: "Mixolydisch", type: "authentisch", finale: "Sol", ambitus: "Sol–Sol", teneur: "Ré" },
    { num: "VIII", nom: "Hypomixolydisch", type: "plagal", finale: "Sol", ambitus: "Ré–Ré", teneur: "Do" },
    { num: "IX", nom: "Äolisch", type: "authentisch", finale: "La", ambitus: "La–La", teneur: "Mi" },
    { num: "X", nom: "Hypoäolisch", type: "plagal", finale: "La", ambitus: "Mi–Mi", teneur: "Do" },
    { num: "XI", nom: "Ionisch", type: "authentisch", finale: "Do", ambitus: "Do–Do", teneur: "Sol" },
    { num: "XII", nom: "Hypoionisch", type: "plagal", finale: "Do", ambitus: "Sol–Sol", teneur: "Mi" },
  ],
  teneurRuleBox:
    "<strong>Die Tenor-Regel.</strong> In den <strong>authentischen</strong> Modi ist er die <strong>Quinte über der Finalis</strong>; in den <strong>plagalen</strong> eine <strong>Terz unter</strong> dem authentischen Tenor. Zwei historische Ausnahmen: ein Tenor, der auf <strong>Si</strong> fiele, wird auf <strong>Do</strong> angehoben (Modi III und VIII), weil Si instabil ist.",
  pointsClesBox:
    "<strong>Kernpunkte.</strong> Glarean (<em>Dodecachordon</em>, 1547) machte das <strong>Äolische</strong> und das <strong>Ionische</strong> (Modi IX bis XII) offiziell und erkannte damit das künftige « Moll » und « Dur » an. Das <strong>Lokrische</strong> (Finalis Si) bleibt theoretisch: seine verminderte Quinte macht es als Finalis unbrauchbar. Die <strong><em>musica ficta</em></strong> liefert die ungeschriebenen Alterationen: das <strong>Si♭</strong>, um den Tritonus Fa–Si zu vermeiden (<em>una nota super la…</em>), und vor allem den <strong>an der Kadenz erhöhten Leitton</strong> (das <em>subsemitonium modi</em>: Do♯ im Dorischen, Fa♯ im Mixolydischen, Sol♯ im Äolischen) — nie mitten in der Phrase, nur an der Klausel.",

  melodieH2: "Die melodische Linie (der Cantus)",
  melodieP1:
    "Jede Stimme muss eine schöne, singbare, eigenständige Melodie mit ausgewogenem Bogen sein. Die melodischen Regeln (von Jeppesen aus dem Repertoire kodifiziert) sind strenger als bei Fux.",
  reglesTitle: "Die melodischen Regeln",
  reglesMelodiques: [
    "<strong>Vorrang der Sekundbewegung</strong> (schrittweise). Sprünge sind die Ausnahme, nie die Norm.",
    "<strong>Ausgleich des Sprungs</strong>: ein Sprung, zumal ein weiter, wird <strong>durch einen Schritt in die Gegenrichtung ausgeglichen</strong>. Zwei Sprünge hintereinander sind nur geduldet, wenn sie einen konsonanten Dreiklang innerhalb der Oktave umreißen und ein schrittweiser Rückgang folgt.",
    "<strong>Ein einziger melodischer Gipfel</strong> (<em>Climax</em>): der höchste Ton erscheint <strong>nur einmal</strong>, sonst verwischt sich die Gipfelwirkung. Die Linie steigt zu ihm auf und wieder ab — der Bogen.",
    "<strong>Lange / kurze Werte</strong>: der Sprung erfolgt vorzugsweise <strong>von</strong> einem langen Ton aus und wird <strong>durch</strong> einen mindestens ebenso langen Ton verlassen; lange Werte markieren Anfang und Ende der Phrase.",
    "<strong>Keine Motivwiederholung</strong>: die Renaissance verbietet wörtliche melodische Sequenzen (anders als der Barock). Man vermeidet auch, denselben Ton hartnäckig zu wiederholen und einen <strong>Tritonus zu umreißen</strong> zwischen zwei nicht benachbarten Tönen (z. B. ein Fa, dann ein Si).",
  ],
  sautsTableCaption: "Erlaubte und verbotene melodische Sprünge",
  sautsHeaders: ["Intervall", "Status"],
  sautsRows: [
    { intervalle: "Sekunde (2.)", statut: "Die normale Schrittbewegung — die Grundlage der Linie" },
    { intervalle: "Kleine und große Terz", statut: "Erlaubt" },
    { intervalle: "Reine Quarte", statut: "Erlaubt" },
    { intervalle: "Reine Quinte", statut: "Erlaubt" },
    { intervalle: "Kleine Sexte", statut: "Erlaubt (selten, aufwärts)" },
    { intervalle: "Oktave", statut: "Erlaubt" },
    { intervalle: "Große Sexte", statut: "Verboten" },
    { intervalle: "Septime (jede)", statut: "Verboten" },
    { intervalle: "Tritonus (übermäßige 4. / verminderte 5.)", statut: "Verboten" },
    { intervalle: "Jedes übermäßige oder verminderte Intervall", statut: "Verboten" },
    { intervalle: "Über die Oktave hinaus", statut: "Verboten" },
  ],
  cantusH3: "Muster-Cantus (Modus I, Dorisch, Finalis Ré)",
  cantusIntro:
    "Ein klassischer Cantus firmus aus dem Gattungsrepertoire, hier in Semibreven — <strong>11 Töne</strong>: Ré – Fa – Mi – Ré – Sol – Fa – La – Sol – Fa – Mi – Ré. Das ist das Modell, das man vor jedem zweistimmigen Satz singen sollte.",
  cantusAnalyse:
    "<strong>Analyse.</strong> Gipfel <strong>La4</strong> <strong>nur einmal</strong> erreicht (Ton 7). Nur zwei kleine aufsteigende Sprünge — Ré4→Fa4 (kl. 3) und Ré4→Sol4 (r. 4) — jeweils von Schritten umgeben; kein Sprung übersteigt die Quarte, kein Tritonus, keine 7. Die Linie zeichnet einen Bogen: ein gemessener Aufstieg zu La4, dann ein schrittweiser Abstieg La–Sol–Fa–Mi–Ré zur Finalis. Kein Si (also kein Risiko eines Tritonus Fa–Si). Beginnt und endet auf der Finalis Ré.",

  contrepointH2: "Die Konsonanzen und der zweistimmige Kontrapunkt",
  consonancesP1:
    "<strong>Vollkommene Konsonanzen</strong>: Einklang, reine Quinte, Oktave (und ihre Erweiterungen). <strong>Unvollkommene Konsonanzen</strong>: Terzen (gr. und kl.) und Sexten (gr. und kl.). Die <strong>reine Quarte</strong> ist gegenüber der Unterstimme <strong>dissonant</strong> (wie in Kurs 13); sie wird nur zwischen zwei Oberstimmen eines 3-4-stimmigen Satzes konsonant. Alles Übrige (2., 7., Tritonus) ist dissonant.",
  conduiteTitle: "Regeln der Stimmführung (2 Stimmen)",
  conduiteRegles: [
    "<strong>Absolute Verbote</strong>: <strong>Parallelquinten</strong>, <strong>Paralleloktaven</strong>, <strong>Paralleleinklänge</strong> — zwei Stimmen, die sich gemeinsam auf einem vollkommenen Intervall bewegen, verlieren ihre Selbständigkeit.",
    "<strong>Verdeckte (direkte) Quinten und Oktaven</strong>: eine Quinte oder Oktave durch <strong>Seitenbewegung</strong> (beide Stimmen in dieselbe Richtung) zu erreichen ist untersagt, besonders wenn die Oberstimme im Sprung ankommt. Vollkommene Intervalle werden durch <strong>Gegenbewegung</strong> (oder Seitengang) erreicht.",
    "<strong>Erlaubt</strong>: <strong>Parallelterzen und -sexten</strong> (unvollkommen) — aber nicht mehr als <strong>drei hintereinander</strong>, um die Linienführung zu wahren.",
    "<strong>Feste Rahmen</strong>: man <strong>beginnt</strong> und <strong>endet</strong> auf einer <strong>vollkommenen Konsonanz</strong>; der Schluss führt über die <strong>Klausel</strong> (6. → 8., durch ficta erhöhter Leitton).",
    "Die <strong>Gegenbewegung</strong> wird überall bevorzugt; keine systematische Stimmkreuzung.",
  ],
  exempleH3: "Ausgeführtes Beispiel — erste Gattung (Note gegen Note), dorischer Modus",
  exempleIntro:
    "Cantus firmus in der Unterstimme; Kontrapunkt in der Oberstimme. Kontrapunkt: Ré5 – La4 – Sol4 – La4 – Si4 – Do5 – Fa5 – Sol5 – Ré5 – Do♯5 – Ré5. Intervalle: 8 – 3 – 3 – 5 – 3 – 5 – 6 – 8 – 6 – 6 – 8.",
  exempleAnalyse:
    "<strong>Kontrollen.</strong> Beginn und Ende auf der <strong>Oktave</strong> (vollkommen). Die inneren Quinten und Oktaven sowie die Schlussoktave werden alle durch <strong>Gegenbewegung</strong> erreicht — keine Parallel- oder Deckquinten/-oktaven. Nicht mehr als zwei unvollkommene Konsonanzen hintereinander. Der Kontrapunkt ist selbst eine gute Linie: ein einziger Gipfel <strong>Sol5</strong>, Sprünge ≤ 4., kein Tritonus. An der Kadenz steigt der <strong>Leitton Do♯5</strong> (musica ficta) zur Finalis Ré5, während der Cantus Mi4→Ré4 absteigt: Klausel gr. 6 → 8.",
  fleuriH3: "Zum floriden Satz",
  fleuriP:
    "Im <strong>floriden</strong> Kontrapunkt (nahe der 5. Gattung, Kurs 13) unterteilt man den Kontrapunkt in kürzere Werte und führt die geregelten Dissonanzen des nächsten Abschnitts ein. Ein florides Fragment über dem ersten Cantus-Ton: gegen ein gehaltenes <strong>Ré4</strong> singt der Kontrapunkt <strong>Ré5 – Do5 – Si4 – La4</strong> (vier Minimen).",
  fleuriAnalyse:
    "<strong>Do5</strong> und <strong>Si4</strong> sind schrittweise <strong>Durchgangstöne</strong> auf unbetonten Zeiten, die Ré5 (8.) mit La4 (5.) verbinden.",

  dissonanceH2: "Die Dissonanz: strenge Behandlung",
  dissonanceP1:
    "Im <em>stile antico</em> ist die Dissonanz nie ein Akkord: sie ist ein kurzer <strong>melodischer Zwischenfall</strong>, stets schrittweise und kontrolliert. Jeppesen lässt nur drei Verwendungen zu.",
  passageH3: "1. Der Durchgangston / die Wechselnote — unbetont",
  passageP:
    "Der <strong>Durchgangston</strong> verbindet zwei Konsonanzen schrittweise, <strong>nur auf unbetonter Zeit</strong>, und wird in derselben Richtung verlassen. Die <strong>Wechselnote</strong> (Nebennote) ziert eine Konsonanz, indem sie sich einen Schritt entfernt und zurückkehrt, ebenfalls <strong>auf unbetonter Zeit</strong>. <em>Beispiel (gehaltener Cantus Do4).</em> Durchgang: Kontrapunkt Mi5 – Ré5 – Do5, das Ré5 (dissonant) auf unbetonter Zeit zwischen Mi5 (3.) und Do5 (8.). Wechselnote: Mi5 – Ré5 – Mi5, das Ré5 dissonant auf unbetonter Zeit.",
  cambiataH3: "2. Die nota cambiata (ausgetauschte Note)",
  cambiataP:
    "Eine viertönige Figur, in der die Dissonanz <strong>durch einen abwärts gerichteten Terzsprung verlassen</strong> wird statt durch eine schrittweise Auflösung — die einzige Lizenz dieser Art. <em>Beispiel (gehaltener Cantus Ré4).</em> Kontrapunkt <strong>Ré5 – Do5 – La4 – Si4</strong>: Ré5 (8., konsonant) → <strong>Do5</strong> (kleine Septime, <strong>dissonant</strong>, unbetont) → <strong>abwärts gerichteter Terzsprung</strong> zu La4 (5., konsonant) → Si4 (6.). Der erwartete Auflösungston (Si4) kommt erst am Ende: die Dissonanz wird « ausgetauscht ».",
  retardH3: "3. Der vorbereitete Vorhalt (suspensio) — der Eckpfeiler",
  retardP1:
    "Das ist DIE Geste des Stils, in drei Schritten. <strong>Vorbereitung</strong>: der Ton ist <strong>konsonant</strong>, auf unbetonter Zeit. <strong>Aufschlag (Vorhalt)</strong>: die Unterstimme bewegt sich auf der <strong>betonten Zeit</strong>; der gehaltene Ton wird <strong>dissonant</strong>. <strong>Auflösung</strong>: der dissonante Ton <strong>steigt schrittweise ab</strong> zu einer Konsonanz, auf unbetonter Zeit. Der Vorhalt löst sich stets <strong>abwärts, im Schritt</strong> auf; der Auflösungston darf nicht gleichzeitig verdoppelt werden.",
  retardTableCaption: "Die zwei Standard-Vorhalte (Vorbereitung → Aufschlag → Auflösung)",
  retardHeaders: ["Typ", "Vorbereitung (unbetont)", "Aufschlag (betont, dissonant)", "Auflösung (unbetont)"],
  retardRows: [
    { type: "7-6", prep: "Tenor Mi4 / Ob. Do5 → kl. 6", percussion: "Tenor Ré4 / Ob. Do5 gehalten → kl. 7", resolution: "Tenor Ré4 / Ob. Si4 → gr. 6" },
    { type: "4-3", prep: "Bass Do4 / Ob. Sol4 → r. 5", percussion: "Bass Ré4 / Ob. Sol4 gehalten → 4.", resolution: "Bass Ré4 / Ob. Fa4 → kl. 3" },
  ],
  retardP2:
    "Im <strong>7-6</strong> steigt die Oberstimme Do5 → Si4 ab; im <strong>4-3</strong> steigt sie Sol4 → Fa4 ab. Man begegnet auch dem <strong>2-3</strong> (Vorhalt in der <strong>Unterstimme</strong>: der aufgehaltene Bass löst sich absteigend auf, die 2. wird zur 3.) und dem <strong>9-8</strong>. Der Vorhalt ist der Motor der Kadenzen.",

  cadencesH2: "Drei- und vierstimmiger Kontrapunkt und modale Kadenzen",
  cadencesP1:
    "Bei 3-4 Stimmen denkt man stets <strong>in Stimmpaaren</strong>: jedes Intervall zum Bass muss konsonant sein (die Quarte wird <strong>zwischen Oberstimmen</strong> wieder konsonant), die Dreiklänge werden vervollständigt, doch die Regeln zu Dissonanz und Parallelen bleiben unangetastet. Man sucht die rhythmische Selbständigkeit (die Stimmen bewegen sich nicht alle zugleich) und die Imitation.",
  clausuleTitle: "Die Klausel (modale Kadenz)",
  clausuleP:
    "Jede Kadenz beruht auf zwei strukturellen Stimmen: dem <strong>Cantizans</strong> — der Stimme, die einen <strong>Halbton</strong> (den durch <em>musica ficta</em> erhöhten Leitton) zur Finalis aufsteigt; dem <strong>Tenorizans</strong> — der Stimme, die einen <strong>Schritt (2-1)</strong> zur Finalis absteigt. Gemeinsam bilden sie das Gerüst <strong>6. → 8.</strong> in Gegenbewegung. Oft fügt man kurz davor einen <strong>7-6-Vorhalt</strong> (oder 2-3) hinzu und einen <strong>Bass</strong> (<em>basizans</em>, Quint-/Quartsprung zur Finalis), der der Kadenz ihren « V–I »-Charakter gibt — aber <strong>modal bleibend</strong>: es ist die kadenzielle ficta, keine Tonart, die den Leitton erzeugt.",
  dorienH3: "Kadenz im dorischen Modus (Finalis Ré) — 4 Stimmen, 7-6-Vorhalt",
  dorienIntro:
    "Superius (cantizans): Ré5 – Ré5 – Do♯5 – Ré5. Alt: gehaltenes La4. Tenor (tenorizans): Fa4 – Mi4 – Mi4 – Ré4. Bass (basizans): Ré3 – La2 – La2 – Ré3.",
  dorienAnalyse:
    "Der Superius hält <strong>Ré5</strong>: konsonant bei der Vorbereitung (gr. 6 über dem Tenor Fa4), wird er zur <strong>dissonanten 7.</strong>, wenn der Tenor auf Mi4 absteigt, und löst sich dann Ré5 → <strong>Do♯5</strong> auf (durch ficta erhöhter Leitton). Die Klausel: cantizans Do♯5 → Ré5 (aufsteigender Halbton) gegen tenorizans Mi4 → Ré4 (absteigender Ton) = <strong>gr. 6 → 8.</strong> Der Schluss ist eine <strong>leere Quinte Ré–La</strong> — eine idiomatische modale Klangfarbe; man kann auch zur pikardischen Terz (Fa♯) erhöhen. Der Bass La2 → Ré3 bestätigt die Finalis.",
  phrygienH3: "Kadenz im phrygischen Modus (Finalis Mi) — 4 Stimmen",
  phrygienIntro:
    "Das Phrygische <strong>erhöht keinen Leitton</strong>: der diatonische Halbton <strong>Fa → Mi</strong> ist bereits da, und er liegt in der <strong>Unterstimme</strong> — das Kennzeichen des Modus. Vorletzter Akkord: Ré5 / Fa4 / La3 / Fa3 (Bass). Schluss: Mi5 / Sol4 / Si3 / Mi3 (Bass).",
  phrygienAnalyse:
    "Gerüst: der Superius steigt Ré5 → Mi5 auf (ganzer Ton, <strong>ohne</strong> erhöhten Leitton), während der Bass Fa3 → Mi3 absteigt (<strong>Halbton</strong>) — also <strong>gr. 6 (Fa–Ré) → 8. (Mi–Mi)</strong> in Gegenbewegung. Der vorletzte Akkord ist ein <strong>Ré-Moll in erster Umkehrung</strong> (Fa im Bass), der sich nach <strong>Mi-Moll</strong> auflöst. Alle vollkommenen Schlussintervalle werden durch Gegenbewegung erreicht; die Sexten steigen parallel (unvollkommen, erlaubt). Das ist die phrygische Kadenz, kenntlich an diesem absteigenden Halbton im Bass.",
  imitationBox:
    "<strong>Die Imitation.</strong> Eine Stimme stellt ein Motiv vor, eine andere greift es wenige Zeiten später in der Quinte oder Oktave auf: das ist der Keim der Motette und der Fuge. Wir behandeln sie hier kurz, als Einführung.",

  entrainH2: "Anwendungen & Übung",
  methodeH3: "Methode: einen floriden Kontrapunkt über einem gegebenen Cantus firmus schreiben",
  methodeSteps: [
    "<strong>Den Modus bestimmen</strong>: die Finalis (erster und letzter Ton des Cantus) und den Ambitus erkennen; daraus Finalis, Tenor und den <strong>nur an der Kadenz</strong> zu erhöhenden Leitton ableiten.",
    "<strong>Gerüst erster Gattung</strong>: einen konsonanten Ton gegen jeden Cantus-Ton setzen (auf einer vollkommenen Konsonanz beginnen und enden), Terzen und Sexten sowie die Gegenbewegung bevorzugen; das <strong>Fehlen von Parallel- oder Deckquinten/-oktaven</strong> prüfen.",
    "<strong>Die Linie prüfen</strong>: der Kontrapunkt muss singbar sein — schrittweise, ein einziger Gipfel, ausgeglichene Sprünge, kein Tritonus.",
    "<strong>Verzieren</strong>: die Werte unterteilen und <strong>nur</strong> geregelte Dissonanzen einführen (Durchgang/Wechselnote auf unbetonten Zeiten, eventuell eine <em>cambiata</em>).",
    "<strong>Kadenz</strong>: die Klausel setzen (cantizans + tenorizans, 7-6- oder 2-3-Vorhalt, Leitton durch ficta).",
    "<strong>Kontrollieren</strong> nach Gehör und schriftlich (Notensatz).",
  ],
  exercicesH3: "Kontrapunkt-Übungen (gestochene Musterlösungen)",
  exercicesIntro:
    "Der SATB-Editor (4 Stimmen) eignet sich nicht für den zweistimmigen Kontrapunkt: diese Übungen sind <strong>gestochene Musterlösungen</strong>, keine Editor-Übungen. Andere korrekte Lösungen existieren.",
  exercices: [
    {
      titre: "Übung 1 — Erste Gattung, Kontrapunkt darüber (dorischer Modus)",
      consigne: "Cantus firmus (Unterstimme): Ré4 – Fa4 – Mi4 – Ré4 – Sol4 – Fa4 – La4 – Sol4 – Fa4 – Mi4 – Ré4. Eine konsonante Oberstimme (1:1) schreiben, auf einer vollkommenen Konsonanz beginnend und endend, mit dorischer Klausel.",
      controle: "Lösung: Ré5 – La4 – Sol4 – La4 – Si4 – Do5 – Fa5 – Sol5 – Ré5 – Do♯5 – Ré5 (8-3-3-5-3-5-6-8-6-6-8). Einziger Gipfel Sol5; vollkommene Intervalle durch Gegenbewegung erreicht; Leitton Do♯5 an der Kadenz.",
    },
    {
      titre: "Übung 2 — Florider Kontrapunkt mit Kadenz (dorischer Modus)",
      consigne: "Cantus firmus (letzte 3 Töne): Fa4 – Mi4 – Ré4. Darüber ein florider Satz, der die Klausel herbeiführt.",
      controle: "Lösung (Oberstimme): über Fa4 → La4 – Do5 (3. dann 5., konsonant); über Mi4 → Ré5 dann Do♯5 (Ré5 als Durchgang/Vorhalt eingeführt, sich zum Leitton auflösend); über Ré4 → Ré5. Kadenzwendung: Cantus Mi4 → Ré4 gegen Superius Do♯5 → Ré5 = gr. 6 → 8. (dorische Klausel, Leitton durch ficta).",
    },
    {
      titre: "Übung 3 — Eine modale Kadenz ausführen (mixolydischer Modus, Finalis Sol)",
      consigne: "Schlusskadenz in 3 Stimmen, tenorizans La3 → Sol3, mit cantizans und Bass zu harmonisieren. Mit dem durch ficta erhöhten Leitton vervollständigen.",
      controle: "Lösung: Superius (cantizans) Fa♯4 → Sol4 (erhöhter Leitton, Halbton); Tenor (tenorizans) La3 → Sol3 (absteigender Ton); Bass (basizans) Ré3 → Sol2 (Quintsprung zur Finalis). Gerüst: La3-Fa♯4 (gr. 6) → Sol3-Sol4 (8.), Gegenbewegung. Der Leitton Fa♯ existiert nur hier, durch musica ficta: im Innern des Modus bleibt Fa natürlich (die für das Mixolydische charakteristische kleine 7.).",
    },
    {
      titre: "Übung 4 — Phrygische Kadenz (Finalis Mi)",
      consigne: "Schluss in 4 Stimmen im phrygischen Modus. Die Kadenz ohne Erhöhung eines Leittons ausführen.",
      controle: "Lösung: vorletzter Akkord Fa3 (Bass) – La3 (Tenor) – Fa4 (Alt) – Ré5 (Superius) (Ré-Moll, Fa im Bass) → Schluss Mi3 – Si3 – Sol4 – Mi5 (Mi-Moll). Bass Fa3 → Mi3 (Halbton, tenorizans in der Unterstimme), Superius Ré5 → Mi5 (Ton, cantizans). Gerüst gr. 6 (Fa–Ré) → 8. (Mi–Mi); keine Parallelquinten oder -oktaven; der Halbton Fa→Mi im Bass kennzeichnet den Modus.",
    },
  ],
  voirCorrige: "Gestochenes Modell zeigen",
  masquerCorrige: "Modell ausblenden",
  corrigeLabel: "Gestochene Musterlösung",
  quizH3: "Quiz — 10 Fragen",
  questions: [
    {
      q: "Der Palestrina-Kontrapunkt organisiert sich um:",
      opts: ["Die Dur/Moll-Tonalität", "Die Kirchentonarten (Finalis, Tenor)", "Die Ganztonleiter", "Die zwölf Töne"],
      a: 1,
      fb: "Der Stil ist modal, nicht tonal: es sind die Finalis und der Modus, nicht eine funktionale Dominante, die das Stück ordnen.",
    },
    {
      q: "Wer hat die Dissonanzbehandlung bei Palestrina statistisch kodifiziert?",
      opts: ["Johann Joseph Fux", "Gioseffo Zarlino", "Knud Jeppesen", "Heinrich Schenker"],
      a: 2,
      fb: "Knud Jeppesen, The Style of Palestrina and the Dissonance (1922).",
    },
    {
      q: "In einem authentischen Modus liegt der Tenor meist:",
      opts: ["Eine Terz unter der Finalis", "Eine Quinte über der Finalis", "Auf der Finalis", "In der Oktave"],
      a: 1,
      fb: "Eine Quinte über der Finalis, außer bei der Verschiebung von Si nach Do (Modi III und VIII).",
    },
    {
      q: "Welcher dieser melodischen Sprünge ist in einer Palestrina-Linie verboten?",
      opts: ["Die reine Quarte", "Die Oktave", "Die kleine Terz", "Der Tritonus (übermäßige 4.)"],
      a: 3,
      fb: "Der Tritonus ist untersagt, ebenso Septimen, die große Sexte und jedes Intervall über der Oktave.",
    },
    {
      q: "Nach einem weiten Sprung muss die Linie:",
      opts: ["In derselben Richtung fortfahren", "Im Schritt in die Gegenrichtung zurückkehren", "Den Ton wiederholen", "Erneut springen"],
      a: 1,
      fb: "Das ist der Ausgleich des Sprungs: man holt ihn durch einen Schritt in die Gegenrichtung wieder ein.",
    },
    {
      q: "Wie oft soll der melodische Gipfel (Climax) erscheinen?",
      opts: ["Nur einmal", "Zweimal", "In jeder Phrase", "So oft man will"],
      a: 0,
      fb: "Nur einmal: wiederholt verliert er seine Gipfelwirkung.",
    },
    {
      q: "Zwei Parallelquinten zwischen denselben Stimmen sind:",
      opts: ["Erlaubt, wenn kurz", "Zwischen Innenstimmen erlaubt", "Verboten", "An der Kadenz erlaubt"],
      a: 2,
      fb: "Verboten, wie Paralleloktaven und -einklänge: sie tilgen die Selbständigkeit der Stimmen.",
    },
    {
      q: "Ein dissonanter Durchgangston steht:",
      opts: ["Auf der betonten Zeit", "Auf einer unbetonten Zeit, im Schritt", "Im Sprung", "Irgendwo"],
      a: 1,
      fb: "Im strengen Stil sind Durchgang und Wechselnote unbetont (auf unbetonter Zeit, im Schritt).",
    },
    {
      q: "Ein Vorhalt löst sich stets auf:",
      opts: ["Einen Schritt aufwärts", "Durch einen Terzsprung", "Einen Schritt abwärts", "Am Platz bleibend"],
      a: 2,
      fb: "Vorbereitung (konsonant) → Aufschlag (dissonant, betonte Zeit) → abwärts schreitende Auflösung.",
    },
    {
      q: "Die phrygische Kadenz (Finalis Mi) erkennt man an:",
      opts: ["Einem erhöhten Leitton Ré♯", "Einem Halbton Fa → Mi in der Unterstimme", "Einem Kadenz-6/4", "Einem Dominantorgelpunkt"],
      a: 1,
      fb: "Das Phrygische erhöht keinen Leitton; sein diatonischer Halbton Fa–Mi liegt im Bass.",
    },
  ],
  bonusLabel: "Bonusfrage — die zentrale Unterscheidung",
  bonusQ: "Was unterscheidet die Gattungen von Fux (Kurs 13) vom Palestrina-Stil?",
  bonusToggle: "Antwort anzeigen",
  bonusA:
    "Fux <strong>abstrahiert</strong> den Kontrapunkt zu einer didaktischen Leiter (Cantus firmus in gleichen Werten, oft tonalisierte Reflexe); Palestrina ist das lebendige <strong>modale Vokalrepertoire</strong> — textiert, rhythmisch geschmeidig —, das diese Gattungen destillieren.",

  listenBtn: "Anhören",
};

// ════════════════════════════════════════════════════════════════════════════
// ES
// ════════════════════════════════════════════════════════════════════════════

const es: Cours43Locale = {
  maitreConcept: "La polifonía vocal del stile antico",
  maitreAnecdote:
    "Giovanni Pierluigi da Palestrina (h. 1525-1594) encarna el ideal de la polifonía sacra del siglo XVI: misas y motetes a cappella, escritos para voces que deben poder cantar cada línea sin esfuerzo. La leyenda — nacida en torno a su Missa Papae Marcelli — quiere que « salvara » la polifonía que el concilio de Trento pensaba prohibir, al probar que un contrapunto culto podía dejar el texto perfectamente inteligible. Tres siglos después, el musicólogo danés Knud Jeppesen analizó estadísticamente sus obras para extraer las reglas exactas del tratamiento de la disonancia: es el código que seguimos.",
  maitreLesson:
    "El estilo Palestrina no es una tonalidad funcional sino un arte modal: la finalis y el modo, no una dominante, organizan la pieza; la consonancia es el estado normal, la disonancia un acontecimiento breve y reglado.",

  introH2: "El estilo Palestrina y la prima pratica",
  introP1:
    "Giovanni Pierluigi da Palestrina (h. 1525-1594) encarna el ideal de la <strong>polifonía vocal sacra</strong> del siglo XVI: misas y motetes a cappella, escritos para voces que deben poder cantar cada línea sin esfuerzo. Tres cualidades definen este estilo: la <strong>fluidez</strong> (cada voz avanza sobre todo por grados conjuntos, el flujo rítmico es continuo y regular), el <strong>control absoluto de la disonancia</strong> (la consonancia es el estado normal, la disonancia un acontecimiento breve y reglado) y la <strong>cantabilidad</strong> (intervalos naturales, ámbito mesurado, texto llevado con claridad).",
  introP2:
    "Se llama <em>stile antico</em> — el « estilo antiguo » — a la codificación de esta manera, que los compositores barrocos seguirán enseñando como modelo de rigor, por oposición a la <em>seconda pratica</em> expresiva de Monteverdi. Es ese <em>stile antico</em> el que Johann Joseph Fux abstrae en cinco especies en el <em>Gradus ad Parnassum</em> (curso 13). <strong>Nuestro curso hace el camino inverso</strong>: donde Fux reduce el contrapunto a una escalera didáctica (cantus firmus en valores iguales, reflejos a menudo tonalizados), volvemos a la materia viva — <strong>modal</strong>, con texto, de ritmo flexible — que las especies destilan. La diferencia es de fondo: aquí, ninguna tonalidad funcional, ninguna dominante-tónica, sino un <strong>modo</strong> (finalis, tenor) y <strong>cadencias modales</strong>.",
  introJeppesenBox:
    "Fue el musicólogo danés <strong>Knud Jeppesen</strong> (<em>The Style of Palestrina and the Dissonance</em>, 1922; <em>Counterpoint</em>, 1930) quien estableció <strong>estadísticamente</strong> las reglas exactas del tratamiento de la disonancia en este repertorio: seguimos su codificación. Requisitos útiles: el curso 13 (contrapunto de especies, Fux) y el curso 10 (los modos).",

  modesH2: "Los modos eclesiásticos",
  modesP1:
    "El contrapunto renacentista no piensa en tonalidades sino en <strong>modos</strong>. Cada modo se define por su <strong>finalis</strong> (nota de reposo y conclusión), su <strong>ámbito</strong> (la octava en que se despliega la voz) y su <strong>tenor</strong> (o <em>repercussa</em>, cuerda de recitación hacia la que gravita la melodía). Cada modo existe en versión <strong>auténtica</strong> (la octava parte de la finalis) y <strong>plagal</strong> (prefijo <em>hipo-</em>: la octava se centra en torno a la finalis). El curso 10 da su color; aquí, el modo es un <strong>marco de escritura</strong>, no una escala para improvisar.",
  modesTableCaption: "Los doce modos (Glareano, Dodecachordon, 1547)",
  modesHeaders: ["N.º", "Nombre", "Tipo", "Finalis", "Ámbito", "Tenor"],
  modesRows: [
    { num: "I", nom: "Dórico", type: "auténtico", finale: "Ré", ambitus: "Ré–Ré", teneur: "La" },
    { num: "II", nom: "Hipodórico", type: "plagal", finale: "Ré", ambitus: "La(grave)–La", teneur: "Fa" },
    { num: "III", nom: "Frigio", type: "auténtico", finale: "Mi", ambitus: "Mi–Mi", teneur: "Do" },
    { num: "IV", nom: "Hipofrigio", type: "plagal", finale: "Mi", ambitus: "Si(grave)–Si", teneur: "La" },
    { num: "V", nom: "Lidio", type: "auténtico", finale: "Fa", ambitus: "Fa–Fa", teneur: "Do" },
    { num: "VI", nom: "Hipolidio", type: "plagal", finale: "Fa", ambitus: "Do–Do", teneur: "La" },
    { num: "VII", nom: "Mixolidio", type: "auténtico", finale: "Sol", ambitus: "Sol–Sol", teneur: "Ré" },
    { num: "VIII", nom: "Hipomixolidio", type: "plagal", finale: "Sol", ambitus: "Ré–Ré", teneur: "Do" },
    { num: "IX", nom: "Eólico", type: "auténtico", finale: "La", ambitus: "La–La", teneur: "Mi" },
    { num: "X", nom: "Hipoeólico", type: "plagal", finale: "La", ambitus: "Mi–Mi", teneur: "Do" },
    { num: "XI", nom: "Jónico", type: "auténtico", finale: "Do", ambitus: "Do–Do", teneur: "Sol" },
    { num: "XII", nom: "Hipojónico", type: "plagal", finale: "Do", ambitus: "Sol–Sol", teneur: "Mi" },
  ],
  teneurRuleBox:
    "<strong>Regla del tenor.</strong> En los modos <strong>auténticos</strong> es la <strong>quinta por encima de la finalis</strong>; en los <strong>plagales</strong>, una <strong>tercera por debajo</strong> del tenor del auténtico. Dos excepciones históricas: el tenor que caería en <strong>Si</strong> se sube a <strong>Do</strong> (modos III y VIII), porque Si es inestable.",
  pointsClesBox:
    "<strong>Puntos clave.</strong> Glareano (<em>Dodecachordon</em>, 1547) oficializó el <strong>Eólico</strong> y el <strong>Jónico</strong> (modos IX a XII), reconociendo el futuro « menor » y « mayor ». El <strong>Locrio</strong> (finalis Si) sigue siendo teórico: su quinta disminuida lo hace inutilizable como finalis. La <strong><em>musica ficta</em></strong> aporta las alteraciones no escritas: el <strong>Si♭</strong> para evitar el tritono Fa–Si (<em>una nota super la…</em>) y sobre todo la <strong>sensible elevada en la cadencia</strong> (el <em>subsemitonium modi</em>: Do♯ en el Dórico, Fa♯ en el Mixolidio, Sol♯ en el Eólico) — nunca en medio de la frase, solo en la cláusula.",

  melodieH2: "La línea melódica (el cantus)",
  melodieP1:
    "Cada voz debe ser una bella melodía cantable, autónoma, de arco equilibrado. Las reglas melódicas (codificadas por Jeppesen a partir del repertorio) son más estrictas que en Fux.",
  reglesTitle: "Las reglas melódicas",
  reglesMelodiques: [
    "<strong>Primacía del movimiento conjunto</strong> (por segundas). Los saltos son la excepción, nunca la norma.",
    "<strong>Compensación del salto</strong>: un salto, sobre todo amplio, se <strong>recupera por grado conjunto en sentido contrario</strong>. Dos saltos seguidos solo se toleran si dibujan una tríada consonante sin exceder la octava, seguidos de un retorno conjunto.",
    "<strong>Una sola cima melódica</strong> (<em>clímax</em>): la nota más aguda aparece <strong>una sola vez</strong>, si no el efecto de cima se diluye. La línea sube hacia ella y luego desciende — el arco.",
    "<strong>Valores largos / breves</strong>: el salto se hace preferentemente <strong>desde</strong> una nota larga y se <strong>abandona</strong> con una nota al menos igual de larga; los valores largos marcan los comienzos y finales de frase.",
    "<strong>Sin repetición de motivo</strong>: el Renacimiento proscribe las secuencias melódicas literales (a diferencia del Barroco). También se evita repetir obstinadamente la misma nota y <strong>esbozar un tritono</strong> entre dos notas no vecinas (p. ej. un Fa y luego un Si).",
  ],
  sautsTableCaption: "Saltos melódicos permitidos y prohibidos",
  sautsHeaders: ["Intervalo", "Estatus"],
  sautsRows: [
    { intervalle: "Segunda (2.ª)", statut: "El movimiento conjunto normal — la base de la línea" },
    { intervalle: "Tercera menor y mayor", statut: "Permitido" },
    { intervalle: "Cuarta justa", statut: "Permitido" },
    { intervalle: "Quinta justa", statut: "Permitido" },
    { intervalle: "Sexta menor", statut: "Permitido (raro, ascendente)" },
    { intervalle: "Octava", statut: "Permitido" },
    { intervalle: "Sexta mayor", statut: "Prohibido" },
    { intervalle: "Séptima (cualquiera)", statut: "Prohibido" },
    { intervalle: "Tritono (4.ª aum. / 5.ª dism.)", statut: "Prohibido" },
    { intervalle: "Todo intervalo aumentado o disminuido", statut: "Prohibido" },
    { intervalle: "Más allá de la octava", statut: "Prohibido" },
  ],
  cantusH3: "Cantus modelo (modo I, Dórico, finalis Ré)",
  cantusIntro:
    "Un cantus firmus clásico del repertorio de especies, aquí en semibreves — <strong>11 notas</strong>: Ré – Fa – Mi – Ré – Sol – Fa – La – Sol – Fa – Mi – Ré. Es el modelo que hay que cantar antes de toda escritura a dos voces.",
  cantusAnalyse:
    "<strong>Análisis.</strong> Cima <strong>La4</strong> alcanzada <strong>una sola vez</strong> (nota 7). Solo dos pequeños saltos ascendentes — Ré4→Fa4 (3.ª m.) y Ré4→Sol4 (4.ª justa) — cada uno rodeado de grados conjuntos; ningún salto excede la cuarta, ningún tritono, ninguna 7.ª. La línea dibuja un arco: subida mesurada hacia La4, luego descenso conjunto La–Sol–Fa–Mi–Ré hacia la finalis. Ningún Si (por tanto sin riesgo de tritono Fa–Si). Empieza y termina en la finalis Ré.",

  contrepointH2: "Las consonancias y el contrapunto a dos voces",
  consonancesP1:
    "<strong>Consonancias perfectas</strong>: unísono, quinta justa, octava (y sus duplicaciones). <strong>Consonancias imperfectas</strong>: terceras (M y m) y sextas (M y m). La <strong>cuarta justa</strong> es <strong>disonante</strong> frente a la voz grave (como en el curso 13); solo se vuelve consonante entre dos voces superiores de una textura a 3-4 voces. Todo lo demás (2.ª, 7.ª, tritono) es disonante.",
  conduiteTitle: "Reglas de conducción (2 voces)",
  conduiteRegles: [
    "<strong>Prohibiciones absolutas</strong>: <strong>quintas justas paralelas</strong>, <strong>octavas paralelas</strong>, <strong>unísonos paralelos</strong> — dos voces que se mueven juntas sobre un intervalo perfecto pierden su independencia.",
    "<strong>Quintas y octavas directas (ocultas)</strong>: alcanzar una quinta o una octava por <strong>movimiento directo</strong> (ambas voces en el mismo sentido) está proscrito, sobre todo si la voz superior llega por salto. Se llega a las perfectas por <strong>movimiento contrario</strong> (u oblicuo).",
    "<strong>Permitidas</strong>: <strong>terceras y sextas paralelas</strong> (imperfectas) — pero no más de <strong>tres seguidas</strong>, para preservar el dibujo de las voces.",
    "<strong>Marcos obligados</strong>: se <strong>empieza</strong> y se <strong>termina</strong> en una <strong>consonancia perfecta</strong>; el final pasa por la <strong>cláusula</strong> (6.ª → 8.ª, sensible elevada por ficta).",
    "El <strong>movimiento contrario</strong> se privilegia en todas partes; sin cruce sistemático de las voces.",
  ],
  exempleH3: "Ejemplo realizado — primera especie (nota contra nota), modo dórico",
  exempleIntro:
    "Cantus firmus en la voz inferior; contrapunto en la voz superior. Contrapunto: Ré5 – La4 – Sol4 – La4 – Si4 – Do5 – Fa5 – Sol5 – Ré5 – Do♯5 – Ré5. Intervalos: 8 – 3 – 3 – 5 – 3 – 5 – 6 – 8 – 6 – 6 – 8.",
  exempleAnalyse:
    "<strong>Controles.</strong> Empieza y termina en la <strong>octava</strong> (perfecta). Las quintas y octavas internas y la octava final se alcanzan todas por <strong>movimiento contrario</strong> — ninguna quinta ni octava paralela o directa. No más de dos imperfectas seguidas. El contrapunto es en sí una buena línea: cima única <strong>Sol5</strong>, saltos ≤ 4.ª, sin tritono. En la cadencia, la <strong>sensible Do♯5</strong> (musica ficta) sube a la finalis Ré5 mientras el cantus desciende Mi4→Ré4: cláusula 6.ª M → 8.ª.",
  fleuriH3: "Hacia el florido",
  fleuriP:
    "En el contrapunto <strong>florido</strong> (cercano a la 5.ª especie, curso 13), se subdivide el contrapunto en valores más breves y se introducen las disonancias regladas de la sección siguiente. Fragmento florido sobre la primera nota del cantus: contra un <strong>Ré4</strong> sostenido, el contrapunto canta <strong>Ré5 – Do5 – Si4 – La4</strong> (cuatro mínimas).",
  fleuriAnalyse:
    "<strong>Do5</strong> y <strong>Si4</strong> son <strong>notas de paso</strong> conjuntas en tiempos débiles, que enlazan Ré5 (8.ª) con La4 (5.ª).",

  dissonanceH2: "La disonancia: tratamiento estricto",
  dissonanceP1:
    "En el <em>stile antico</em>, la disonancia nunca es un acorde: es un <strong>incidente melódico</strong> breve, siempre conjunto y controlado. Jeppesen solo admite tres empleos.",
  passageH3: "1. La nota de paso / la bordadura — no acentuadas",
  passageP:
    "La <strong>nota de paso</strong> enlaza dos consonancias por grado conjunto, <strong>solo en tiempo débil</strong>, y se abandona en el mismo sentido. La <strong>bordadura</strong> (nota vecina) adorna una consonancia alejándose un grado y volviendo, también <strong>en tiempo débil</strong>. <em>Ejemplo (cantus sostenido Do4).</em> Paso: contrapunto Mi5 – Ré5 – Do5, el Ré5 (disonante) en tiempo débil entre Mi5 (3.ª) y Do5 (8.ª). Bordadura: Mi5 – Ré5 – Mi5, el Ré5 disonante en tiempo débil.",
  cambiataH3: "2. La nota cambiata (nota cambiada)",
  cambiataP:
    "Figura de cuatro notas en la que la disonancia se <strong>abandona por un salto de tercera descendente</strong> en lugar de una resolución conjunta — la única licencia de este tipo. <em>Ejemplo (cantus sostenido Ré4).</em> Contrapunto <strong>Ré5 – Do5 – La4 – Si4</strong>: Ré5 (8.ª, consonante) → <strong>Do5</strong> (séptima menor, <strong>disonante</strong>, tiempo débil) → <strong>salto de tercera descendente</strong> hacia La4 (5.ª, consonante) → Si4 (6.ª). La nota de resolución esperada (Si4) solo llega al final: la disonancia se « cambia ».",
  retardH3: "3. El retardo preparado (suspensio) — la piedra angular",
  retardP1:
    "Es EL gesto del estilo, en tres tiempos. <strong>Preparación</strong>: la nota es <strong>consonante</strong>, en tiempo débil. <strong>Percusión (retardo)</strong>: la voz grave se mueve en el <strong>tiempo fuerte</strong>; la nota sostenida se vuelve <strong>disonante</strong>. <strong>Resolución</strong>: la nota disonante <strong>desciende por grado conjunto</strong> a una consonancia, en tiempo débil. El retardo resuelve <strong>siempre hacia abajo, por grado conjunto</strong>; la nota de resolución no debe duplicarse simultáneamente.",
  retardTableCaption: "Los dos retardos tipo (preparación → percusión → resolución)",
  retardHeaders: ["Tipo", "Preparación (débil)", "Percusión (fuerte, disonante)", "Resolución (débil)"],
  retardRows: [
    { type: "7-6", prep: "Tenor Mi4 / Sup. Do5 → 6.ª m", percussion: "Tenor Ré4 / Sup. Do5 sost. → 7.ª m", resolution: "Tenor Ré4 / Sup. Si4 → 6.ª M" },
    { type: "4-3", prep: "Bajo Do4 / Sup. Sol4 → 5.ª J", percussion: "Bajo Ré4 / Sup. Sol4 sost. → 4.ª", resolution: "Bajo Ré4 / Sup. Fa4 → 3.ª m" },
  ],
  retardP2:
    "En el <strong>7-6</strong>, la voz superior desciende Do5 → Si4; en el <strong>4-3</strong>, desciende Sol4 → Fa4. También se encuentra el <strong>2-3</strong> (retardo en la voz <strong>grave</strong>: el bajo suspendido resuelve descendiendo, la 2.ª se vuelve 3.ª) y el <strong>9-8</strong>. El retardo es el motor de las cadencias.",

  cadencesH2: "Contrapunto a 3-4 voces y cadencias modales",
  cadencesP1:
    "A 3-4 voces, siempre se razona <strong>por pares de voces</strong>: cada intervalo con el bajo debe ser consonante (la cuarta vuelve a ser consonante <strong>entre voces superiores</strong>), las tríadas se completan, pero las reglas de disonancia y de paralelas quedan intactas. Se busca la independencia rítmica (las voces no se mueven todas a la vez) y la imitación.",
  clausuleTitle: "La cláusula (cadencia modal)",
  clausuleP:
    "Toda cadencia reposa sobre dos voces estructurales: el <strong>cantizans</strong> — la voz que sube un <strong>semitono</strong> (la sensible, elevada por <em>musica ficta</em>) hacia la finalis; el <strong>tenorizans</strong> — la voz que desciende un <strong>grado (2-1)</strong> hacia la finalis. Juntos forman el esqueleto <strong>6.ª → 8.ª</strong> en movimiento contrario. A menudo se añade un <strong>retardo 7-6</strong> (o 2-3) justo antes, y un <strong>bajo</strong> (<em>basizans</em>, salto de quinta/cuarta hacia la finalis) que da a la cadencia su aire de « V–I » — pero <strong>siguiendo modal</strong>: es la ficta cadencial, no una tonalidad, la que produce la sensible.",
  dorienH3: "Cadencia en modo dórico (finalis Ré) — 4 voces, retardo 7-6",
  dorienIntro:
    "Superius (cantizans): Ré5 – Ré5 – Do♯5 – Ré5. Alto: La4 sostenido. Tenor (tenorizans): Fa4 – Mi4 – Mi4 – Ré4. Bajo (basizans): Ré3 – La2 – La2 – Ré3.",
  dorienAnalyse:
    "El superius sostiene <strong>Ré5</strong>: consonante en la preparación (6.ª M sobre el tenor Fa4), se vuelve <strong>7.ª disonante</strong> cuando el tenor desciende a Mi4, y luego resuelve Ré5 → <strong>Do♯5</strong> (sensible elevada por ficta). La cláusula: cantizans Do♯5 → Ré5 (semitono ascendente) contra tenorizans Mi4 → Ré4 (tono descendente) = <strong>6.ª M → 8.ª</strong>. El final es una <strong>quinta vacía Ré–La</strong> — sonoridad modal idiomática; también se puede elevar a la tercera de Picardía (Fa♯). El bajo La2 → Ré3 confirma la finalis.",
  phrygienH3: "Cadencia en modo frigio (finalis Mi) — 4 voces",
  phrygienIntro:
    "El frigio <strong>no eleva sensible</strong>: el semitono diatónico <strong>Fa → Mi</strong> ya está ahí, y se encuentra en la voz <strong>grave</strong> — es la firma del modo. Penúltimo acorde: Ré5 / Fa4 / La3 / Fa3 (bajo). Final: Mi5 / Sol4 / Si3 / Mi3 (bajo).",
  phrygienAnalyse:
    "Esqueleto: el superius sube Ré5 → Mi5 (tono entero, <strong>sin</strong> sensible elevada), mientras el bajo desciende Fa3 → Mi3 (<strong>semitono</strong>) — es decir <strong>6.ª M (Fa–Ré) → 8.ª (Mi–Mi)</strong> en movimiento contrario. El acorde penúltimo es un <strong>Ré menor en primera inversión</strong> (Fa en el bajo), que resuelve sobre <strong>Mi menor</strong>. Todas las perfectas finales se alcanzan por movimiento contrario; las sextas suben en paralelo (imperfectas, lícitas). Es la cadencia frigia, reconocible por ese semitono descendente en el bajo.",
  imitationBox:
    "<strong>La imitación.</strong> Una voz enuncia un motivo, otra lo retoma a la quinta o a la octava, unos tiempos después: es el germen del motete y de la fuga. La tratamos aquí brevemente, como introducción.",

  entrainH2: "Aplicaciones y práctica",
  methodeH3: "Método: escribir un contrapunto florido sobre un cantus firmus dado",
  methodeSteps: [
    "<strong>Identificar el modo</strong>: localizar la finalis (primera y última nota del cantus) y el ámbito; deducir finalis, tenor y la sensible que hay que elevar <strong>solo en la cadencia</strong>.",
    "<strong>Esqueleto de primera especie</strong>: colocar una nota consonante contra cada nota del cantus (empezar y terminar en una perfecta), privilegiando 3.as y 6.as y el movimiento contrario; verificar la <strong>ausencia de quintas/octavas paralelas o directas</strong>.",
    "<strong>Verificar la línea</strong>: el contrapunto debe ser cantable — conjunto, cima única, saltos compensados, sin tritono.",
    "<strong>Florear</strong>: subdividir los valores e introducir <strong>únicamente</strong> disonancias regladas (paso/bordadura en tiempos débiles, eventual <em>cambiata</em>).",
    "<strong>Cadencia</strong>: colocar la cláusula (cantizans + tenorizans, retardo 7-6 o 2-3, sensible por ficta).",
    "<strong>Controlar</strong> de oído y por escrito (grabado).",
  ],
  exercicesH3: "Ejercicios de contrapunto (soluciones-modelo grabadas)",
  exercicesIntro:
    "El editor SATB (4 voces) no conviene al contrapunto a 2 voces: estos ejercicios son <strong>soluciones-modelo grabadas</strong>, no ejercicios de editor. Existen otras soluciones correctas.",
  exercices: [
    {
      titre: "Ejercicio 1 — Primera especie, contrapunto encima (modo dórico)",
      consigne: "Cantus firmus (voz inferior): Ré4 – Fa4 – Mi4 – Ré4 – Sol4 – Fa4 – La4 – Sol4 – Fa4 – Mi4 – Ré4. Escribir una voz superior consonante (1:1), empezando y terminando en una perfecta, con cláusula dórica.",
      controle: "Solución: Ré5 – La4 – Sol4 – La4 – Si4 – Do5 – Fa5 – Sol5 – Ré5 – Do♯5 – Ré5 (8-3-3-5-3-5-6-8-6-6-8). Cima única Sol5; perfectas alcanzadas por movimiento contrario; sensible Do♯5 en la cadencia.",
    },
    {
      titre: "Ejercicio 2 — Contrapunto florido con cadencia (modo dórico)",
      consigne: "Cantus firmus (3 notas finales): Fa4 – Mi4 – Ré4. Encima, un florido que trae la cláusula.",
      controle: "Solución (voz superior): sobre Fa4 → La4 – Do5 (3.ª y luego 5.ª, consonantes); sobre Mi4 → Ré5 y luego Do♯5 (Ré5 introducido como paso/retardo, resolviendo en la sensible); sobre Ré4 → Ré5. Enlace cadencial: cantus Mi4 → Ré4 contra superius Do♯5 → Ré5 = 6.ª M → 8.ª (cláusula dórica, sensible por ficta).",
    },
    {
      titre: "Ejercicio 3 — Realizar una cadencia modal (modo mixolidio, finalis Sol)",
      consigne: "Cadencia final a 3 voces, tenorizans La3 → Sol3, a armonizar con cantizans y bajo. Completar con la sensible elevada por ficta.",
      controle: "Solución: Superius (cantizans) Fa♯4 → Sol4 (sensible elevada, semitono); Tenor (tenorizans) La3 → Sol3 (tono descendente); Bajo (basizans) Ré3 → Sol2 (salto de quinta hacia la finalis). Esqueleto: La3-Fa♯4 (6.ª M) → Sol3-Sol4 (8.ª), movimiento contrario. La sensible Fa♯ solo existe aquí, por musica ficta: en el interior del modo, el Fa sigue natural (la 7.ª menor característica del mixolidio).",
    },
    {
      titre: "Ejercicio 4 — Cadencia frigia (finalis Mi)",
      consigne: "Final a 4 voces en modo frigio. Realizar la cadencia sin elevar sensible.",
      controle: "Solución: penúltimo acorde Fa3 (bajo) – La3 (tenor) – Fa4 (alto) – Ré5 (superius) (Ré menor, Fa en el bajo) → final Mi3 – Si3 – Sol4 – Mi5 (Mi menor). Bajo Fa3 → Mi3 (semitono, tenorizans en la grave), superius Ré5 → Mi5 (tono, cantizans). Esqueleto 6.ª M (Fa–Ré) → 8.ª (Mi–Mi); ninguna quinta ni octava paralela; el semitono Fa→Mi en el bajo firma el modo.",
    },
  ],
  voirCorrige: "Ver el modelo grabado",
  masquerCorrige: "Ocultar el modelo",
  corrigeLabel: "Solución-modelo grabada",
  quizH3: "Cuestionario — 10 preguntas",
  questions: [
    {
      q: "El contrapunto Palestrina se organiza en torno a:",
      opts: ["La tonalidad mayor/menor", "Los modos eclesiásticos (finalis, tenor)", "La escala de tonos enteros", "Los doce sonidos"],
      a: 1,
      fb: "El estilo es modal, no tonal: son la finalis y el modo, no una dominante funcional, los que organizan la pieza.",
    },
    {
      q: "¿Quién codificó estadísticamente el tratamiento de la disonancia en Palestrina?",
      opts: ["Johann Joseph Fux", "Gioseffo Zarlino", "Knud Jeppesen", "Heinrich Schenker"],
      a: 2,
      fb: "Knud Jeppesen, The Style of Palestrina and the Dissonance (1922).",
    },
    {
      q: "En un modo auténtico, el tenor se sitúa por lo general:",
      opts: ["A la tercera bajo la finalis", "A la quinta por encima de la finalis", "Sobre la finalis", "A la octava"],
      a: 1,
      fb: "A la quinta por encima de la finalis, salvo el traslado de Si a Do (modos III y VIII).",
    },
    {
      q: "¿Cuál de estos saltos melódicos está prohibido en una línea Palestrina?",
      opts: ["La cuarta justa", "La octava", "La tercera menor", "El tritono (4.ª aumentada)"],
      a: 3,
      fb: "El tritono está proscrito, como las 7.as, la sexta mayor y todo intervalo superior a la octava.",
    },
    {
      q: "Tras un salto amplio, la línea debe:",
      opts: ["Continuar en el mismo sentido", "Volver por grado conjunto en sentido contrario", "Repetir la nota", "Saltar de nuevo"],
      a: 1,
      fb: "Es la compensación del salto: se recupera por grado conjunto en sentido contrario.",
    },
    {
      q: "¿Cuántas veces debe aparecer la cima melódica (clímax)?",
      opts: ["Una sola vez", "Dos veces", "En cada frase", "Cuantas se quiera"],
      a: 0,
      fb: "Una sola vez: repetida, pierde su efecto de cima.",
    },
    {
      q: "Dos quintas justas paralelas entre las mismas voces son:",
      opts: ["Permitidas si son breves", "Permitidas entre voces interiores", "Prohibidas", "Permitidas en la cadencia"],
      a: 2,
      fb: "Prohibidas, como las octavas y unísonos paralelos: borran la independencia de las voces.",
    },
    {
      q: "Una nota de paso disonante se coloca:",
      opts: ["En el tiempo fuerte", "En un tiempo débil, por grado conjunto", "Por salto", "En cualquier lugar"],
      a: 1,
      fb: "En el estilo estricto, paso y bordadura son no acentuados (en tiempo débil, por grado conjunto).",
    },
    {
      q: "Un retardo (suspensión) resuelve siempre:",
      opts: ["Subiendo un grado", "Por un salto de tercera", "Descendiendo un grado conjunto", "Quedándose en su sitio"],
      a: 2,
      fb: "Preparación (consonante) → percusión (disonante, tiempo fuerte) → resolución conjunta descendente.",
    },
    {
      q: "La cadencia frigia (finalis Mi) se reconoce por:",
      opts: ["Una sensible Ré♯ elevada", "Un semitono Fa → Mi en la voz grave", "Un 6/4 cadencial", "Un pedal de dominante"],
      a: 1,
      fb: "El frigio no eleva sensible; su semitono diatónico Fa–Mi está en el bajo.",
    },
  ],
  bonusLabel: "Pregunta extra — la distinción clave",
  bonusQ: "¿Qué diferencia hay entre las especies de Fux (curso 13) y el estilo Palestrina?",
  bonusToggle: "Ver la respuesta",
  bonusA:
    "Fux <strong>abstrae</strong> el contrapunto en una escalera didáctica (cantus firmus en valores iguales, reflejos a menudo tonalizados); Palestrina es el <strong>repertorio vocal modal</strong> vivo — con texto, rítmicamente flexible — que esas especies destilan.",

  listenBtn: "Escuchar",
};

// ════════════════════════════════════════════════════════════════════════════
// IT
// ════════════════════════════════════════════════════════════════════════════

const it: Cours43Locale = {
  maitreConcept: "La polifonia vocale dello stile antico",
  maitreAnecdote:
    "Giovanni Pierluigi da Palestrina (1525 ca.-1594) incarna l'ideale della polifonia sacra del Cinquecento: messe e mottetti a cappella, scritti per voci che devono poter cantare ogni linea senza sforzo. La leggenda — nata attorno alla sua Missa Papae Marcelli — vuole che egli abbia « salvato » la polifonia che il concilio di Trento pensava di vietare, dimostrando che un contrappunto dotto poteva lasciare il testo perfettamente intelligibile. Tre secoli dopo, il musicologo danese Knud Jeppesen analizzò statisticamente le sue opere per ricavarne le regole esatte del trattamento della dissonanza: è il codice che seguiamo.",
  maitreLesson:
    "Lo stile Palestrina non è una tonalità funzionale ma un'arte modale: la finalis e il modo, non una dominante, organizzano il brano; la consonanza è lo stato normale, la dissonanza un evento breve e regolato.",

  introH2: "Lo stile Palestrina e la prima pratica",
  introP1:
    "Giovanni Pierluigi da Palestrina (1525 ca.-1594) incarna l'ideale della <strong>polifonia vocale sacra</strong> del Cinquecento: messe e mottetti a cappella, scritti per voci che devono poter cantare ogni linea senza sforzo. Tre qualità definiscono questo stile: la <strong>fluidità</strong> (ogni voce procede soprattutto per gradi congiunti, il flusso ritmico è continuo e regolare), il <strong>controllo assoluto della dissonanza</strong> (la consonanza è lo stato normale, la dissonanza un evento breve e regolato) e la <strong>cantabilità</strong> (intervalli naturali, ambito misurato, testo portato con chiarezza).",
  introP2:
    "Si chiama <em>stile antico</em> — lo « stile antico » — la codificazione di questa maniera, che i compositori barocchi continueranno a insegnare come modello di rigore, in opposizione alla <em>seconda pratica</em> espressiva di Monteverdi. È questo <em>stile antico</em> che Johann Joseph Fux astrae in cinque specie nel <em>Gradus ad Parnassum</em> (corso 13). <strong>Il nostro corso fa il cammino inverso</strong>: là dove Fux riduce il contrappunto a una scala didattica (cantus firmus in valori uguali, riflessi spesso tonalizzati), torniamo alla materia viva — <strong>modale</strong>, con testo, dal ritmo flessibile — che le specie distillano. La differenza è di fondo: qui, nessuna tonalità funzionale, nessuna dominante-tonica, ma un <strong>modo</strong> (finalis, tenor) e <strong>cadenze modali</strong>.",
  introJeppesenBox:
    "Fu il musicologo danese <strong>Knud Jeppesen</strong> (<em>The Style of Palestrina and the Dissonance</em>, 1922; <em>Counterpoint</em>, 1930) a stabilire <strong>statisticamente</strong> le regole esatte del trattamento della dissonanza in questo repertorio: seguiamo la sua codificazione. Prerequisiti utili: il corso 13 (contrappunto per specie, Fux) e il corso 10 (i modi).",

  modesH2: "I modi ecclesiastici",
  modesP1:
    "Il contrappunto rinascimentale non pensa per tonalità ma per <strong>modi</strong>. Ogni modo si definisce per la sua <strong>finalis</strong> (nota di riposo e di conclusione), il suo <strong>ambito</strong> (l'ottava in cui si dispiega la voce) e il suo <strong>tenor</strong> (o <em>repercussa</em>, corda di recita verso cui gravita la melodia). Ogni modo esiste in versione <strong>autentica</strong> (l'ottava parte dalla finalis) e <strong>plagale</strong> (prefisso <em>ipo-</em>: l'ottava è centrata attorno alla finalis). Il corso 10 ne dà il colore; qui, il modo è un <strong>quadro di scrittura</strong>, non una scala da improvvisare.",
  modesTableCaption: "I dodici modi (Glareano, Dodecachordon, 1547)",
  modesHeaders: ["N.", "Nome", "Tipo", "Finalis", "Ambito", "Tenor"],
  modesRows: [
    { num: "I", nom: "Dorico", type: "autentico", finale: "Ré", ambitus: "Ré–Ré", teneur: "La" },
    { num: "II", nom: "Ipodorico", type: "plagale", finale: "Ré", ambitus: "La(grave)–La", teneur: "Fa" },
    { num: "III", nom: "Frigio", type: "autentico", finale: "Mi", ambitus: "Mi–Mi", teneur: "Do" },
    { num: "IV", nom: "Ipofrigio", type: "plagale", finale: "Mi", ambitus: "Si(grave)–Si", teneur: "La" },
    { num: "V", nom: "Lidio", type: "autentico", finale: "Fa", ambitus: "Fa–Fa", teneur: "Do" },
    { num: "VI", nom: "Ipolidio", type: "plagale", finale: "Fa", ambitus: "Do–Do", teneur: "La" },
    { num: "VII", nom: "Misolidio", type: "autentico", finale: "Sol", ambitus: "Sol–Sol", teneur: "Ré" },
    { num: "VIII", nom: "Ipomisolidio", type: "plagale", finale: "Sol", ambitus: "Ré–Ré", teneur: "Do" },
    { num: "IX", nom: "Eolio", type: "autentico", finale: "La", ambitus: "La–La", teneur: "Mi" },
    { num: "X", nom: "Ipoeolio", type: "plagale", finale: "La", ambitus: "Mi–Mi", teneur: "Do" },
    { num: "XI", nom: "Ionico", type: "autentico", finale: "Do", ambitus: "Do–Do", teneur: "Sol" },
    { num: "XII", nom: "Ipoionico", type: "plagale", finale: "Do", ambitus: "Sol–Sol", teneur: "Mi" },
  ],
  teneurRuleBox:
    "<strong>Regola del tenor.</strong> Nei modi <strong>autentici</strong> è la <strong>quinta sopra la finalis</strong>; nei <strong>plagali</strong>, una <strong>terza sotto</strong> il tenor dell'autentico. Due eccezioni storiche: il tenor che cadrebbe su <strong>Si</strong> è innalzato a <strong>Do</strong> (modi III e VIII), perché Si è instabile.",
  pointsClesBox:
    "<strong>Punti chiave.</strong> Glareano (<em>Dodecachordon</em>, 1547) ufficializzò l'<strong>Eolio</strong> e lo <strong>Ionico</strong> (modi IX-XII), riconoscendo il futuro « minore » e « maggiore ». Il <strong>Locrio</strong> (finalis Si) resta teorico: la sua quinta diminuita lo rende inutilizzabile come finalis. La <strong><em>musica ficta</em></strong> fornisce le alterazioni non scritte: il <strong>Si♭</strong> per evitare il tritono Fa–Si (<em>una nota super la…</em>) e soprattutto la <strong>sensibile innalzata alla cadenza</strong> (il <em>subsemitonium modi</em>: Do♯ nel Dorico, Fa♯ nel Misolidio, Sol♯ nell'Eolio) — mai in mezzo alla frase, solo alla clausola.",

  melodieH2: "La linea melodica (il cantus)",
  melodieP1:
    "Ogni voce deve essere una bella melodia cantabile, autonoma, dall'arco equilibrato. Le regole melodiche (codificate da Jeppesen sul repertorio) sono più severe che in Fux.",
  reglesTitle: "Le regole melodiche",
  reglesMelodiques: [
    "<strong>Primato del moto congiunto</strong> (per seconde). I salti sono l'eccezione, mai la norma.",
    "<strong>Compensazione del salto</strong>: un salto, soprattutto ampio, si <strong>recupera per grado congiunto in senso contrario</strong>. Due salti di seguito sono tollerati solo se disegnano una triade consonante entro l'ottava, seguiti da un ritorno congiunto.",
    "<strong>Un solo apice melodico</strong> (<em>climax</em>): la nota più acuta appare <strong>una sola volta</strong>, altrimenti l'effetto di apice si diluisce. La linea sale verso di esso e poi ridiscende — l'arco.",
    "<strong>Valori lunghi / brevi</strong>: il salto si fa preferibilmente <strong>da</strong> una nota lunga e si <strong>lascia</strong> con una nota almeno altrettanto lunga; i valori lunghi segnano inizi e fini di frase.",
    "<strong>Nessuna ripetizione di motivo</strong>: il Rinascimento proscrive le sequenze melodiche letterali (a differenza del Barocco). Si evita anche di ripetere ostinatamente la stessa nota e di <strong>tratteggiare un tritono</strong> tra due note non vicine (es. un Fa e poi un Si).",
  ],
  sautsTableCaption: "Salti melodici consentiti e vietati",
  sautsHeaders: ["Intervallo", "Stato"],
  sautsRows: [
    { intervalle: "Seconda (2ª)", statut: "Il moto congiunto normale — la base della linea" },
    { intervalle: "Terza minore e maggiore", statut: "Consentito" },
    { intervalle: "Quarta giusta", statut: "Consentito" },
    { intervalle: "Quinta giusta", statut: "Consentito" },
    { intervalle: "Sesta minore", statut: "Consentito (raro, ascendente)" },
    { intervalle: "Ottava", statut: "Consentito" },
    { intervalle: "Sesta maggiore", statut: "Vietato" },
    { intervalle: "Settima (qualsiasi)", statut: "Vietato" },
    { intervalle: "Tritono (4ª aum. / 5ª dim.)", statut: "Vietato" },
    { intervalle: "Ogni intervallo aumentato o diminuito", statut: "Vietato" },
    { intervalle: "Oltre l'ottava", statut: "Vietato" },
  ],
  cantusH3: "Cantus modello (modo I, Dorico, finalis Ré)",
  cantusIntro:
    "Un cantus firmus classico del repertorio delle specie, qui in semibrevi — <strong>11 note</strong>: Ré – Fa – Mi – Ré – Sol – Fa – La – Sol – Fa – Mi – Ré. È il modello da cantare prima di ogni scrittura a due voci.",
  cantusAnalyse:
    "<strong>Analisi.</strong> Apice <strong>La4</strong> raggiunto <strong>una sola volta</strong> (nota 7). Solo due piccoli salti ascendenti — Ré4→Fa4 (3ª m.) e Ré4→Sol4 (4ª giusta) — ciascuno circondato da gradi congiunti; nessun salto supera la quarta, nessun tritono, nessuna 7ª. La linea disegna un arco: salita misurata verso La4, poi discesa congiunta La–Sol–Fa–Mi–Ré verso la finalis. Nessun Si (quindi nessun rischio di tritono Fa–Si). Inizia e finisce sulla finalis Ré.",

  contrepointH2: "Le consonanze e il contrappunto a due voci",
  consonancesP1:
    "<strong>Consonanze perfette</strong>: unisono, quinta giusta, ottava (e i loro raddoppi). <strong>Consonanze imperfette</strong>: terze (M e m) e seste (M e m). La <strong>quarta giusta</strong> è <strong>dissonante</strong> rispetto alla voce grave (come nel corso 13); diventa consonante solo tra due voci superiori di una trama a 3-4 voci. Tutto il resto (2ª, 7ª, tritono) è dissonante.",
  conduiteTitle: "Regole di condotta (2 voci)",
  conduiteRegles: [
    "<strong>Divieti assoluti</strong>: <strong>quinte giuste parallele</strong>, <strong>ottave parallele</strong>, <strong>unisoni paralleli</strong> — due voci che si muovono insieme su un intervallo perfetto perdono la loro indipendenza.",
    "<strong>Quinte e ottave dirette (nascoste)</strong>: raggiungere una quinta o un'ottava per <strong>moto diretto</strong> (entrambe le voci nello stesso senso) è proscritto, soprattutto se la voce superiore vi arriva per salto. Si giunge alle perfette per <strong>moto contrario</strong> (od obliquo).",
    "<strong>Consentite</strong>: <strong>terze e seste parallele</strong> (imperfette) — ma non più di <strong>tre di seguito</strong>, per preservare il disegno delle voci.",
    "<strong>Cornici obbligate</strong>: si <strong>inizia</strong> e si <strong>finisce</strong> su una <strong>consonanza perfetta</strong>; la fine passa per la <strong>clausola</strong> (6ª → 8ª, sensibile innalzata per ficta).",
    "Il <strong>moto contrario</strong> è privilegiato ovunque; nessun incrocio sistematico delle voci.",
  ],
  exempleH3: "Esempio realizzato — prima specie (nota contro nota), modo dorico",
  exempleIntro:
    "Cantus firmus alla voce inferiore; contrappunto alla voce superiore. Contrappunto: Ré5 – La4 – Sol4 – La4 – Si4 – Do5 – Fa5 – Sol5 – Ré5 – Do♯5 – Ré5. Intervalli: 8 – 3 – 3 – 5 – 3 – 5 – 6 – 8 – 6 – 6 – 8.",
  exempleAnalyse:
    "<strong>Controlli.</strong> Inizio e fine sull'<strong>ottava</strong> (perfetta). Le quinte e ottave interne e l'ottava finale sono tutte raggiunte per <strong>moto contrario</strong> — nessuna quinta né ottava parallela o diretta. Non più di due imperfette di seguito. Il contrappunto è esso stesso una buona linea: apice unico <strong>Sol5</strong>, salti ≤ 4ª, nessun tritono. Alla cadenza, la <strong>sensibile Do♯5</strong> (musica ficta) sale alla finalis Ré5 mentre il cantus scende Mi4→Ré4: clausola 6ª M → 8ª.",
  fleuriH3: "Verso il fiorito",
  fleuriP:
    "Nel contrappunto <strong>fiorito</strong> (vicino alla 5ª specie, corso 13), si suddivide il contrappunto in valori più brevi e si introducono le dissonanze regolate della sezione seguente. Frammento fiorito sulla prima nota del cantus: contro un <strong>Ré4</strong> tenuto, il contrappunto canta <strong>Ré5 – Do5 – Si4 – La4</strong> (quattro minime).",
  fleuriAnalyse:
    "<strong>Do5</strong> e <strong>Si4</strong> sono <strong>note di passaggio</strong> congiunte su tempi deboli, che collegano Ré5 (8ª) a La4 (5ª).",

  dissonanceH2: "La dissonanza: trattamento rigoroso",
  dissonanceP1:
    "Nello <em>stile antico</em>, la dissonanza non è mai un accordo: è un breve <strong>incidente melodico</strong>, sempre congiunto e controllato. Jeppesen ne ammette solo tre impieghi.",
  passageH3: "1. La nota di passaggio / la nota di volta — non accentate",
  passageP:
    "La <strong>nota di passaggio</strong> collega due consonanze per grado congiunto, <strong>solo su tempo debole</strong>, e si lascia nello stesso senso. La <strong>nota di volta</strong> (nota vicina) orna una consonanza allontanandosene di un grado e ritornandovi, anch'essa <strong>su tempo debole</strong>. <em>Esempio (cantus tenuto Do4).</em> Passaggio: contrappunto Mi5 – Ré5 – Do5, il Ré5 (dissonante) su tempo debole tra Mi5 (3ª) e Do5 (8ª). Nota di volta: Mi5 – Ré5 – Mi5, il Ré5 dissonante su tempo debole.",
  cambiataH3: "2. La nota cambiata",
  cambiataP:
    "Figura di quattro note in cui la dissonanza è <strong>lasciata con un salto di terza discendente</strong> invece di una risoluzione congiunta — l'unica licenza di questo genere. <em>Esempio (cantus tenuto Ré4).</em> Contrappunto <strong>Ré5 – Do5 – La4 – Si4</strong>: Ré5 (8ª, consonante) → <strong>Do5</strong> (settima minore, <strong>dissonante</strong>, tempo debole) → <strong>salto di terza discendente</strong> verso La4 (5ª, consonante) → Si4 (6ª). La nota di risoluzione attesa (Si4) arriva solo alla fine: la dissonanza è « cambiata ».",
  retardH3: "3. Il ritardo preparato (suspensio) — la pietra angolare",
  retardP1:
    "È IL gesto dello stile, in tre tempi. <strong>Preparazione</strong>: la nota è <strong>consonante</strong>, su tempo debole. <strong>Percussione (ritardo)</strong>: la voce grave si muove sul <strong>tempo forte</strong>; la nota tenuta diventa <strong>dissonante</strong>. <strong>Risoluzione</strong>: la nota dissonante <strong>scende per grado congiunto</strong> verso una consonanza, su tempo debole. Il ritardo risolve <strong>sempre verso il basso, per grado congiunto</strong>; la nota di risoluzione non deve essere raddoppiata simultaneamente.",
  retardTableCaption: "I due ritardi tipo (preparazione → percussione → risoluzione)",
  retardHeaders: ["Tipo", "Preparazione (debole)", "Percussione (forte, dissonante)", "Risoluzione (debole)"],
  retardRows: [
    { type: "7-6", prep: "Tenore Mi4 / Sup. Do5 → 6ª m", percussion: "Tenore Ré4 / Sup. Do5 tenuto → 7ª m", resolution: "Tenore Ré4 / Sup. Si4 → 6ª M" },
    { type: "4-3", prep: "Basso Do4 / Sup. Sol4 → 5ª G", percussion: "Basso Ré4 / Sup. Sol4 tenuto → 4ª", resolution: "Basso Ré4 / Sup. Fa4 → 3ª m" },
  ],
  retardP2:
    "Nel <strong>7-6</strong>, la voce superiore scende Do5 → Si4; nel <strong>4-3</strong>, scende Sol4 → Fa4. Si incontra anche il <strong>2-3</strong> (ritardo alla voce <strong>grave</strong>: il basso sospeso risolve scendendo, la 2ª diventa 3ª) e il <strong>9-8</strong>. Il ritardo è il motore delle cadenze.",

  cadencesH2: "Contrappunto a 3-4 voci e cadenze modali",
  cadencesP1:
    "A 3-4 voci si ragiona sempre <strong>per coppie di voci</strong>: ogni intervallo con il basso deve essere consonante (la quarta torna consonante <strong>tra voci superiori</strong>), le triadi si completano, ma le regole di dissonanza e di parallele restano intatte. Si cerca l'indipendenza ritmica (le voci non si muovono tutte insieme) e l'imitazione.",
  clausuleTitle: "La clausola (cadenza modale)",
  clausuleP:
    "Ogni cadenza poggia su due voci strutturali: il <strong>cantizans</strong> — la voce che sale di un <strong>semitono</strong> (la sensibile, innalzata per <em>musica ficta</em>) verso la finalis; il <strong>tenorizans</strong> — la voce che scende di un <strong>grado (2-1)</strong> verso la finalis. Insieme formano lo scheletro <strong>6ª → 8ª</strong> in moto contrario. Spesso vi si aggiunge un <strong>ritardo 7-6</strong> (o 2-3) subito prima, e un <strong>basso</strong> (<em>basizans</em>, salto di quinta/quarta verso la finalis) che dà alla cadenza il suo aspetto « V–I » — ma <strong>restando modale</strong>: è la ficta cadenzale, non una tonalità, a produrre la sensibile.",
  dorienH3: "Cadenza in modo dorico (finalis Ré) — 4 voci, ritardo 7-6",
  dorienIntro:
    "Superius (cantizans): Ré5 – Ré5 – Do♯5 – Ré5. Alto: La4 tenuto. Tenore (tenorizans): Fa4 – Mi4 – Mi4 – Ré4. Basso (basizans): Ré3 – La2 – La2 – Ré3.",
  dorienAnalyse:
    "Il superius tiene <strong>Ré5</strong>: consonante alla preparazione (6ª M sul tenore Fa4), diventa <strong>7ª dissonante</strong> quando il tenore scende a Mi4, poi risolve Ré5 → <strong>Do♯5</strong> (sensibile innalzata per ficta). La clausola: cantizans Do♯5 → Ré5 (semitono ascendente) contro tenorizans Mi4 → Ré4 (tono discendente) = <strong>6ª M → 8ª</strong>. La finale è una <strong>quinta vuota Ré–La</strong> — sonorità modale idiomatica; si può anche innalzare alla terza piccarda (Fa♯). Il basso La2 → Ré3 conferma la finalis.",
  phrygienH3: "Cadenza in modo frigio (finalis Mi) — 4 voci",
  phrygienIntro:
    "Il frigio <strong>non innalza sensibile</strong>: il semitono diatonico <strong>Fa → Mi</strong> è già presente, e si trova nella voce <strong>grave</strong> — è la firma del modo. Penultimo accordo: Ré5 / Fa4 / La3 / Fa3 (basso). Finale: Mi5 / Sol4 / Si3 / Mi3 (basso).",
  phrygienAnalyse:
    "Scheletro: il superius sale Ré5 → Mi5 (tono intero, <strong>senza</strong> sensibile innalzata), mentre il basso scende Fa3 → Mi3 (<strong>semitono</strong>) — cioè <strong>6ª M (Fa–Ré) → 8ª (Mi–Mi)</strong> in moto contrario. L'accordo penultimo è un <strong>Ré minore in primo rivolto</strong> (Fa al basso), che risolve su <strong>Mi minore</strong>. Tutte le perfette finali sono raggiunte per moto contrario; le seste salgono in parallelo (imperfette, lecite). È la cadenza frigia, riconoscibile da quel semitono discendente al basso.",
  imitationBox:
    "<strong>L'imitazione.</strong> Una voce enuncia un motivo, un'altra lo riprende alla quinta o all'ottava, qualche tempo dopo: è il germe del mottetto e della fuga. La trattiamo qui brevemente, come introduzione.",

  entrainH2: "Applicazioni ed esercizio",
  methodeH3: "Metodo: scrivere un contrappunto fiorito su un cantus firmus dato",
  methodeSteps: [
    "<strong>Identificare il modo</strong>: individuare la finalis (prima e ultima nota del cantus) e l'ambito; dedurne finalis, tenor e la sensibile da innalzare <strong>solo alla cadenza</strong>.",
    "<strong>Scheletro di prima specie</strong>: porre una nota consonante contro ogni nota del cantus (iniziare e finire su una perfetta), privilegiando 3ª e 6ª e il moto contrario; verificare l'<strong>assenza di quinte/ottave parallele o dirette</strong>.",
    "<strong>Verificare la linea</strong>: il contrappunto deve essere cantabile — congiunto, apice unico, salti compensati, senza tritono.",
    "<strong>Fiorire</strong>: suddividere i valori e introdurre <strong>soltanto</strong> dissonanze regolate (passaggio/nota di volta su tempi deboli, eventuale <em>cambiata</em>).",
    "<strong>Cadenza</strong>: porre la clausola (cantizans + tenorizans, ritardo 7-6 o 2-3, sensibile per ficta).",
    "<strong>Controllare</strong> a orecchio e per iscritto (incisione).",
  ],
  exercicesH3: "Esercizi di contrappunto (soluzioni-modello incise)",
  exercicesIntro:
    "L'editor SATB (4 voci) non si adatta al contrappunto a 2 voci: questi esercizi sono <strong>soluzioni-modello incise</strong>, non esercizi d'editor. Esistono altre soluzioni corrette.",
  exercices: [
    {
      titre: "Esercizio 1 — Prima specie, contrappunto sopra (modo dorico)",
      consigne: "Cantus firmus (voce inferiore): Ré4 – Fa4 – Mi4 – Ré4 – Sol4 – Fa4 – La4 – Sol4 – Fa4 – Mi4 – Ré4. Scrivere una voce superiore consonante (1:1), che inizia e finisce su una perfetta, con clausola dorica.",
      controle: "Soluzione: Ré5 – La4 – Sol4 – La4 – Si4 – Do5 – Fa5 – Sol5 – Ré5 – Do♯5 – Ré5 (8-3-3-5-3-5-6-8-6-6-8). Apice unico Sol5; perfette raggiunte per moto contrario; sensibile Do♯5 alla cadenza.",
    },
    {
      titre: "Esercizio 2 — Contrappunto fiorito con cadenza (modo dorico)",
      consigne: "Cantus firmus (3 note finali): Fa4 – Mi4 – Ré4. Sopra, un fiorito che porta la clausola.",
      controle: "Soluzione (voce superiore): su Fa4 → La4 – Do5 (3ª poi 5ª, consonanti); su Mi4 → Ré5 poi Do♯5 (Ré5 introdotto come passaggio/ritardo, che risolve sulla sensibile); su Ré4 → Ré5. Concatenazione cadenzale: cantus Mi4 → Ré4 contro superius Do♯5 → Ré5 = 6ª M → 8ª (clausola dorica, sensibile per ficta).",
    },
    {
      titre: "Esercizio 3 — Realizzare una cadenza modale (modo misolidio, finalis Sol)",
      consigne: "Cadenza finale a 3 voci, tenorizans La3 → Sol3, da armonizzare con cantizans e basso. Completare con la sensibile innalzata per ficta.",
      controle: "Soluzione: Superius (cantizans) Fa♯4 → Sol4 (sensibile innalzata, semitono); Tenore (tenorizans) La3 → Sol3 (tono discendente); Basso (basizans) Ré3 → Sol2 (salto di quinta verso la finalis). Scheletro: La3-Fa♯4 (6ª M) → Sol3-Sol4 (8ª), moto contrario. La sensibile Fa♯ esiste solo qui, per musica ficta: all'interno del modo, il Fa resta naturale (la 7ª minore caratteristica del misolidio).",
    },
    {
      titre: "Esercizio 4 — Cadenza frigia (finalis Mi)",
      consigne: "Finale a 4 voci in modo frigio. Realizzare la cadenza senza innalzare sensibile.",
      controle: "Soluzione: penultimo accordo Fa3 (basso) – La3 (tenore) – Fa4 (alto) – Ré5 (superius) (Ré minore, Fa al basso) → finale Mi3 – Si3 – Sol4 – Mi5 (Mi minore). Basso Fa3 → Mi3 (semitono, tenorizans alla grave), superius Ré5 → Mi5 (tono, cantizans). Scheletro 6ª M (Fa–Ré) → 8ª (Mi–Mi); nessuna quinta né ottava parallela; il semitono Fa→Mi al basso firma il modo.",
    },
  ],
  voirCorrige: "Vedi il modello inciso",
  masquerCorrige: "Nascondi il modello",
  corrigeLabel: "Soluzione-modello incisa",
  quizH3: "Quiz — 10 domande",
  questions: [
    {
      q: "Il contrappunto di Palestrina si organizza intorno a:",
      opts: ["La tonalità maggiore/minore", "I modi ecclesiastici (finalis, tenor)", "La scala esatonale", "I dodici suoni"],
      a: 1,
      fb: "Lo stile è modale, non tonale: sono la finalis e il modo, non una dominante funzionale, a organizzare il brano.",
    },
    {
      q: "Chi ha codificato statisticamente il trattamento della dissonanza in Palestrina?",
      opts: ["Johann Joseph Fux", "Gioseffo Zarlino", "Knud Jeppesen", "Heinrich Schenker"],
      a: 2,
      fb: "Knud Jeppesen, The Style of Palestrina and the Dissonance (1922).",
    },
    {
      q: "In un modo autentico, il tenor si situa il più delle volte:",
      opts: ["Alla terza sotto la finalis", "Alla quinta sopra la finalis", "Sulla finalis", "All'ottava"],
      a: 1,
      fb: "Alla quinta sopra la finalis, salvo lo spostamento di Si su Do (modi III e VIII).",
    },
    {
      q: "Quale di questi salti melodici è vietato in una linea di Palestrina?",
      opts: ["La quarta giusta", "L'ottava", "La terza minore", "Il tritono (4ª aumentata)"],
      a: 3,
      fb: "Il tritono è proscritto, come le 7ª, la sesta maggiore e ogni intervallo superiore all'ottava.",
    },
    {
      q: "Dopo un salto ampio, la linea deve:",
      opts: ["Continuare nello stesso senso", "Tornare per grado congiunto in senso contrario", "Ripetere la nota", "Saltare di nuovo"],
      a: 1,
      fb: "È la compensazione del salto: lo si recupera per grado congiunto in senso contrario.",
    },
    {
      q: "Quante volte deve apparire l'apice melodico (climax)?",
      opts: ["Una sola volta", "Due volte", "In ogni frase", "Quante si vuole"],
      a: 0,
      fb: "Una sola volta: ripetuto, perde il suo effetto di apice.",
    },
    {
      q: "Due quinte giuste parallele tra le stesse voci sono:",
      opts: ["Consentite se brevi", "Consentite tra voci interne", "Vietate", "Consentite alla cadenza"],
      a: 2,
      fb: "Vietate, come le ottave e gli unisoni paralleli: cancellano l'indipendenza delle voci.",
    },
    {
      q: "Una nota di passaggio dissonante si colloca:",
      opts: ["Sul tempo forte", "Su un tempo debole, per grado congiunto", "Per salto", "Ovunque"],
      a: 1,
      fb: "Nello stile rigoroso, passaggio e nota di volta sono non accentati (su tempo debole, per grado congiunto).",
    },
    {
      q: "Un ritardo (sospensione) risolve sempre:",
      opts: ["Salendo di un grado", "Con un salto di terza", "Scendendo di un grado congiunto", "Restando sul posto"],
      a: 2,
      fb: "Preparazione (consonante) → percussione (dissonante, tempo forte) → risoluzione congiunta discendente.",
    },
    {
      q: "La cadenza frigia (finalis Mi) si riconosce da:",
      opts: ["Una sensibile Ré♯ innalzata", "Un semitono Fa → Mi alla voce grave", "Un 6/4 cadenzale", "Un pedale di dominante"],
      a: 1,
      fb: "Il frigio non innalza sensibile; il suo semitono diatonico Fa–Mi è al basso.",
    },
  ],
  bonusLabel: "Domanda bonus — la distinzione chiave",
  bonusQ: "Qual è la differenza tra le specie di Fux (corso 13) e lo stile Palestrina?",
  bonusToggle: "Vedi la risposta",
  bonusA:
    "Fux <strong>astrae</strong> il contrappunto in una scala didattica (cantus firmus in valori uguali, riflessi spesso tonalizzati); Palestrina è il <strong>repertorio vocale modale</strong> vivo — con testo, ritmicamente flessibile — che quelle specie distillano.",

  listenBtn: "Ascolta",
};

// ════════════════════════════════════════════════════════════════════════════
// PT
// ════════════════════════════════════════════════════════════════════════════

const pt: Cours43Locale = {
  maitreConcept: "A polifonia vocal do stile antico",
  maitreAnecdote:
    "Giovanni Pierluigi da Palestrina (c. 1525-1594) encarna o ideal da polifonia sacra do século XVI: missas e motetes a cappella, escritos para vozes que devem poder cantar cada linha sem esforço. A lenda — nascida em torno da sua Missa Papae Marcelli — quer que ele tenha « salvado » a polifonia que o concílio de Trento pensava proibir, ao provar que um contraponto erudito podia deixar o texto perfeitamente inteligível. Três séculos depois, o musicólogo dinamarquês Knud Jeppesen analisou estatisticamente as suas obras para extrair as regras exatas do tratamento da dissonância: é o código que seguimos.",
  maitreLesson:
    "O estilo Palestrina não é uma tonalidade funcional mas uma arte modal: a finalis e o modo, não uma dominante, organizam a peça; a consonância é o estado normal, a dissonância um acontecimento breve e regrado.",

  introH2: "O estilo Palestrina e a prima pratica",
  introP1:
    "Giovanni Pierluigi da Palestrina (c. 1525-1594) encarna o ideal da <strong>polifonia vocal sacra</strong> do século XVI: missas e motetes a cappella, escritos para vozes que devem poder cantar cada linha sem esforço. Três qualidades definem este estilo: a <strong>fluidez</strong> (cada voz avança sobretudo por graus conjuntos, o fluxo rítmico é contínuo e regular), o <strong>controlo absoluto da dissonância</strong> (a consonância é o estado normal, a dissonância um acontecimento breve e regrado) e a <strong>cantabilidade</strong> (intervalos naturais, âmbito comedido, texto conduzido com clareza).",
  introP2:
    "Chama-se <em>stile antico</em> — o « estilo antigo » — à codificação desta maneira, que os compositores barrocos continuarão a ensinar como modelo de rigor, por oposição à <em>seconda pratica</em> expressiva de Monteverdi. É esse <em>stile antico</em> que Johann Joseph Fux abstrai em cinco espécies no <em>Gradus ad Parnassum</em> (curso 13). <strong>O nosso curso faz o caminho inverso</strong>: onde Fux reduz o contraponto a uma escada didática (cantus firmus em valores iguais, reflexos muitas vezes tonalizados), voltamos à matéria viva — <strong>modal</strong>, com texto, de ritmo flexível — que as espécies destilam. A diferença é de fundo: aqui, nenhuma tonalidade funcional, nenhuma dominante-tónica, mas um <strong>modo</strong> (finalis, tenor) e <strong>cadências modais</strong>.",
  introJeppesenBox:
    "Foi o musicólogo dinamarquês <strong>Knud Jeppesen</strong> (<em>The Style of Palestrina and the Dissonance</em>, 1922; <em>Counterpoint</em>, 1930) que estabeleceu <strong>estatisticamente</strong> as regras exatas do tratamento da dissonância neste repertório: seguimos a sua codificação. Pré-requisitos úteis: o curso 13 (contraponto de espécies, Fux) e o curso 10 (os modos).",

  modesH2: "Os modos eclesiásticos",
  modesP1:
    "O contraponto renascentista não pensa em tonalidades mas em <strong>modos</strong>. Cada modo define-se pela sua <strong>finalis</strong> (nota de repouso e de conclusão), o seu <strong>âmbito</strong> (a oitava em que a voz se desdobra) e o seu <strong>tenor</strong> (ou <em>repercussa</em>, corda de recitação para a qual a melodia gravita). Cada modo existe em versão <strong>autêntica</strong> (a oitava parte da finalis) e <strong>plagal</strong> (prefixo <em>hipo-</em>: a oitava centra-se em torno da finalis). O curso 10 dá a sua cor; aqui, o modo é um <strong>quadro de escrita</strong>, não uma escala para improvisar.",
  modesTableCaption: "Os doze modos (Glareano, Dodecachordon, 1547)",
  modesHeaders: ["N.º", "Nome", "Tipo", "Finalis", "Âmbito", "Tenor"],
  modesRows: [
    { num: "I", nom: "Dórico", type: "autêntico", finale: "Ré", ambitus: "Ré–Ré", teneur: "La" },
    { num: "II", nom: "Hipodórico", type: "plagal", finale: "Ré", ambitus: "La(grave)–La", teneur: "Fa" },
    { num: "III", nom: "Frígio", type: "autêntico", finale: "Mi", ambitus: "Mi–Mi", teneur: "Do" },
    { num: "IV", nom: "Hipofrígio", type: "plagal", finale: "Mi", ambitus: "Si(grave)–Si", teneur: "La" },
    { num: "V", nom: "Lídio", type: "autêntico", finale: "Fa", ambitus: "Fa–Fa", teneur: "Do" },
    { num: "VI", nom: "Hipolídio", type: "plagal", finale: "Fa", ambitus: "Do–Do", teneur: "La" },
    { num: "VII", nom: "Mixolídio", type: "autêntico", finale: "Sol", ambitus: "Sol–Sol", teneur: "Ré" },
    { num: "VIII", nom: "Hipomixolídio", type: "plagal", finale: "Sol", ambitus: "Ré–Ré", teneur: "Do" },
    { num: "IX", nom: "Eólio", type: "autêntico", finale: "La", ambitus: "La–La", teneur: "Mi" },
    { num: "X", nom: "Hipoeólio", type: "plagal", finale: "La", ambitus: "Mi–Mi", teneur: "Do" },
    { num: "XI", nom: "Jônico", type: "autêntico", finale: "Do", ambitus: "Do–Do", teneur: "Sol" },
    { num: "XII", nom: "Hipojônico", type: "plagal", finale: "Do", ambitus: "Sol–Sol", teneur: "Mi" },
  ],
  teneurRuleBox:
    "<strong>Regra do tenor.</strong> Nos modos <strong>autênticos</strong> é a <strong>quinta acima da finalis</strong>; nos <strong>plagais</strong>, uma <strong>terceira abaixo</strong> do tenor do autêntico. Duas exceções históricas: o tenor que cairia em <strong>Si</strong> é subido a <strong>Do</strong> (modos III e VIII), porque Si é instável.",
  pointsClesBox:
    "<strong>Pontos-chave.</strong> Glareano (<em>Dodecachordon</em>, 1547) oficializou o <strong>Eólio</strong> e o <strong>Jônico</strong> (modos IX a XII), reconhecendo o futuro « menor » e « maior ». O <strong>Lócrio</strong> (finalis Si) permanece teórico: a sua quinta diminuta torna-o inutilizável como finalis. A <strong><em>musica ficta</em></strong> traz as alterações não escritas: o <strong>Si♭</strong> para evitar o trítono Fa–Si (<em>una nota super la…</em>) e sobretudo a <strong>sensível elevada na cadência</strong> (o <em>subsemitonium modi</em>: Do♯ no Dórico, Fa♯ no Mixolídio, Sol♯ no Eólio) — nunca no meio da frase, apenas na cláusula.",

  melodieH2: "A linha melódica (o cantus)",
  melodieP1:
    "Cada voz deve ser uma bela melodia cantável, autónoma, de arco equilibrado. As regras melódicas (codificadas por Jeppesen a partir do repertório) são mais estritas do que em Fux.",
  reglesTitle: "As regras melódicas",
  reglesMelodiques: [
    "<strong>Primazia do movimento conjunto</strong> (por segundas). Os saltos são a exceção, nunca a norma.",
    "<strong>Compensação do salto</strong>: um salto, sobretudo amplo, <strong>recupera-se por grau conjunto em sentido contrário</strong>. Dois saltos seguidos só se toleram se desenharem uma tríade consonante sem exceder a oitava, seguidos de um retorno conjunto.",
    "<strong>Um único cume melódico</strong> (<em>clímax</em>): a nota mais aguda aparece <strong>uma só vez</strong>, senão o efeito de cume dilui-se. A linha sobe até ele e depois desce — o arco.",
    "<strong>Valores longos / breves</strong>: o salto faz-se de preferência <strong>a partir de</strong> uma nota longa e <strong>abandona-se</strong> por uma nota pelo menos tão longa; os valores longos marcam os inícios e finais de frase.",
    "<strong>Sem repetição de motivo</strong>: o Renascimento proscreve as sequências melódicas literais (ao contrário do Barroco). Evita-se também repetir obstinadamente a mesma nota e <strong>esboçar um trítono</strong> entre duas notas não vizinhas (ex. um Fa e depois um Si).",
  ],
  sautsTableCaption: "Saltos melódicos permitidos e proibidos",
  sautsHeaders: ["Intervalo", "Estatuto"],
  sautsRows: [
    { intervalle: "Segunda (2.ª)", statut: "O movimento conjunto normal — a base da linha" },
    { intervalle: "Terceira menor e maior", statut: "Permitido" },
    { intervalle: "Quarta justa", statut: "Permitido" },
    { intervalle: "Quinta justa", statut: "Permitido" },
    { intervalle: "Sexta menor", statut: "Permitido (raro, ascendente)" },
    { intervalle: "Oitava", statut: "Permitido" },
    { intervalle: "Sexta maior", statut: "Proibido" },
    { intervalle: "Sétima (qualquer)", statut: "Proibido" },
    { intervalle: "Trítono (4.ª aum. / 5.ª dim.)", statut: "Proibido" },
    { intervalle: "Todo intervalo aumentado ou diminuto", statut: "Proibido" },
    { intervalle: "Além da oitava", statut: "Proibido" },
  ],
  cantusH3: "Cantus modelo (modo I, Dórico, finalis Ré)",
  cantusIntro:
    "Um cantus firmus clássico do repertório de espécies, aqui em semibreves — <strong>11 notas</strong>: Ré – Fa – Mi – Ré – Sol – Fa – La – Sol – Fa – Mi – Ré. É o modelo a cantar antes de toda a escrita a duas vozes.",
  cantusAnalyse:
    "<strong>Análise.</strong> Cume <strong>La4</strong> alcançado <strong>uma só vez</strong> (nota 7). Apenas dois pequenos saltos ascendentes — Ré4→Fa4 (3.ª m.) e Ré4→Sol4 (4.ª justa) — cada um rodeado de graus conjuntos; nenhum salto excede a quarta, nenhum trítono, nenhuma 7.ª. A linha desenha um arco: subida comedida até La4, depois descida conjunta La–Sol–Fa–Mi–Ré até à finalis. Nenhum Si (portanto sem risco de trítono Fa–Si). Começa e termina na finalis Ré.",

  contrepointH2: "As consonâncias e o contraponto a duas vozes",
  consonancesP1:
    "<strong>Consonâncias perfeitas</strong>: uníssono, quinta justa, oitava (e as suas duplicações). <strong>Consonâncias imperfeitas</strong>: terceiras (M e m) e sextas (M e m). A <strong>quarta justa</strong> é <strong>dissonante</strong> face à voz grave (como no curso 13); só se torna consonante entre duas vozes superiores de uma textura a 3-4 vozes. Todo o resto (2.ª, 7.ª, trítono) é dissonante.",
  conduiteTitle: "Regras de condução (2 vozes)",
  conduiteRegles: [
    "<strong>Proibições absolutas</strong>: <strong>quintas justas paralelas</strong>, <strong>oitavas paralelas</strong>, <strong>uníssonos paralelos</strong> — duas vozes que se movem juntas sobre um intervalo perfeito perdem a sua independência.",
    "<strong>Quintas e oitavas diretas (ocultas)</strong>: alcançar uma quinta ou uma oitava por <strong>movimento direto</strong> (ambas as vozes no mesmo sentido) é proscrito, sobretudo se a voz superior chega por salto. Chega-se às perfeitas por <strong>movimento contrário</strong> (ou oblíquo).",
    "<strong>Permitidas</strong>: <strong>terceiras e sextas paralelas</strong> (imperfeitas) — mas não mais de <strong>três seguidas</strong>, para preservar o desenho das vozes.",
    "<strong>Molduras obrigatórias</strong>: <strong>começa-se</strong> e <strong>termina-se</strong> numa <strong>consonância perfeita</strong>; o final passa pela <strong>cláusula</strong> (6.ª → 8.ª, sensível elevada por ficta).",
    "O <strong>movimento contrário</strong> é privilegiado em toda a parte; sem cruzamento sistemático das vozes.",
  ],
  exempleH3: "Exemplo realizado — primeira espécie (nota contra nota), modo dórico",
  exempleIntro:
    "Cantus firmus na voz inferior; contraponto na voz superior. Contraponto: Ré5 – La4 – Sol4 – La4 – Si4 – Do5 – Fa5 – Sol5 – Ré5 – Do♯5 – Ré5. Intervalos: 8 – 3 – 3 – 5 – 3 – 5 – 6 – 8 – 6 – 6 – 8.",
  exempleAnalyse:
    "<strong>Controlos.</strong> Começa e termina na <strong>oitava</strong> (perfeita). As quintas e oitavas internas e a oitava final são todas alcançadas por <strong>movimento contrário</strong> — nenhuma quinta nem oitava paralela ou direta. Não mais de duas imperfeitas seguidas. O contraponto é ele próprio uma boa linha: cume único <strong>Sol5</strong>, saltos ≤ 4.ª, sem trítono. Na cadência, a <strong>sensível Do♯5</strong> (musica ficta) sobe à finalis Ré5 enquanto o cantus desce Mi4→Ré4: cláusula 6.ª M → 8.ª.",
  fleuriH3: "Rumo ao florido",
  fleuriP:
    "No contraponto <strong>florido</strong> (próximo da 5.ª espécie, curso 13), subdivide-se o contraponto em valores mais breves e introduzem-se as dissonâncias regradas da secção seguinte. Fragmento florido sobre a primeira nota do cantus: contra um <strong>Ré4</strong> sustentado, o contraponto canta <strong>Ré5 – Do5 – Si4 – La4</strong> (quatro mínimas).",
  fleuriAnalyse:
    "<strong>Do5</strong> e <strong>Si4</strong> são <strong>notas de passagem</strong> conjuntas em tempos fracos, que ligam Ré5 (8.ª) a La4 (5.ª).",

  dissonanceH2: "A dissonância: tratamento estrito",
  dissonanceP1:
    "No <em>stile antico</em>, a dissonância nunca é um acorde: é um breve <strong>incidente melódico</strong>, sempre conjunto e controlado. Jeppesen só admite três empregos.",
  passageH3: "1. A nota de passagem / a bordadura — não acentuadas",
  passageP:
    "A <strong>nota de passagem</strong> liga duas consonâncias por grau conjunto, <strong>apenas em tempo fraco</strong>, e abandona-se no mesmo sentido. A <strong>bordadura</strong> (nota vizinha) orna uma consonância afastando-se um grau e voltando, também <strong>em tempo fraco</strong>. <em>Exemplo (cantus sustentado Do4).</em> Passagem: contraponto Mi5 – Ré5 – Do5, o Ré5 (dissonante) em tempo fraco entre Mi5 (3.ª) e Do5 (8.ª). Bordadura: Mi5 – Ré5 – Mi5, o Ré5 dissonante em tempo fraco.",
  cambiataH3: "2. A nota cambiata (nota trocada)",
  cambiataP:
    "Figura de quatro notas em que a dissonância é <strong>abandonada por um salto de terceira descendente</strong> em vez de uma resolução conjunta — a única licença deste género. <em>Exemplo (cantus sustentado Ré4).</em> Contraponto <strong>Ré5 – Do5 – La4 – Si4</strong>: Ré5 (8.ª, consonante) → <strong>Do5</strong> (sétima menor, <strong>dissonante</strong>, tempo fraco) → <strong>salto de terceira descendente</strong> para La4 (5.ª, consonante) → Si4 (6.ª). A nota de resolução esperada (Si4) só chega no fim: a dissonância é « trocada ».",
  retardH3: "3. O retardo preparado (suspensio) — a pedra angular",
  retardP1:
    "É O gesto do estilo, em três tempos. <strong>Preparação</strong>: a nota é <strong>consonante</strong>, em tempo fraco. <strong>Percussão (retardo)</strong>: a voz grave move-se no <strong>tempo forte</strong>; a nota sustentada torna-se <strong>dissonante</strong>. <strong>Resolução</strong>: a nota dissonante <strong>desce por grau conjunto</strong> para uma consonância, em tempo fraco. O retardo resolve <strong>sempre para baixo, por grau conjunto</strong>; a nota de resolução não deve ser duplicada em simultâneo.",
  retardTableCaption: "Os dois retardos-tipo (preparação → percussão → resolução)",
  retardHeaders: ["Tipo", "Preparação (fraco)", "Percussão (forte, dissonante)", "Resolução (fraco)"],
  retardRows: [
    { type: "7-6", prep: "Tenor Mi4 / Sup. Do5 → 6.ª m", percussion: "Tenor Ré4 / Sup. Do5 sust. → 7.ª m", resolution: "Tenor Ré4 / Sup. Si4 → 6.ª M" },
    { type: "4-3", prep: "Baixo Do4 / Sup. Sol4 → 5.ª J", percussion: "Baixo Ré4 / Sup. Sol4 sust. → 4.ª", resolution: "Baixo Ré4 / Sup. Fa4 → 3.ª m" },
  ],
  retardP2:
    "No <strong>7-6</strong>, a voz superior desce Do5 → Si4; no <strong>4-3</strong>, desce Sol4 → Fa4. Encontra-se também o <strong>2-3</strong> (retardo na voz <strong>grave</strong>: o baixo suspenso resolve descendo, a 2.ª torna-se 3.ª) e o <strong>9-8</strong>. O retardo é o motor das cadências.",

  cadencesH2: "Contraponto a 3-4 vozes e cadências modais",
  cadencesP1:
    "A 3-4 vozes, raciocina-se sempre <strong>por pares de vozes</strong>: cada intervalo com o baixo deve ser consonante (a quarta volta a ser consonante <strong>entre vozes superiores</strong>), as tríades completam-se, mas as regras de dissonância e de paralelas permanecem intactas. Procura-se a independência rítmica (as vozes não se movem todas juntas) e a imitação.",
  clausuleTitle: "A cláusula (cadência modal)",
  clausuleP:
    "Toda a cadência assenta em duas vozes estruturais: o <strong>cantizans</strong> — a voz que sobe um <strong>semitom</strong> (a sensível, elevada por <em>musica ficta</em>) até à finalis; o <strong>tenorizans</strong> — a voz que desce um <strong>grau (2-1)</strong> até à finalis. Juntos formam o esqueleto <strong>6.ª → 8.ª</strong> em movimento contrário. Muitas vezes acrescenta-se um <strong>retardo 7-6</strong> (ou 2-3) mesmo antes, e um <strong>baixo</strong> (<em>basizans</em>, salto de quinta/quarta até à finalis) que dá à cadência o seu ar de « V–I » — mas <strong>permanecendo modal</strong>: é a ficta cadencial, não uma tonalidade, que produz a sensível.",
  dorienH3: "Cadência em modo dórico (finalis Ré) — 4 vozes, retardo 7-6",
  dorienIntro:
    "Superius (cantizans): Ré5 – Ré5 – Do♯5 – Ré5. Contralto: La4 sustentado. Tenor (tenorizans): Fa4 – Mi4 – Mi4 – Ré4. Baixo (basizans): Ré3 – La2 – La2 – Ré3.",
  dorienAnalyse:
    "O superius sustenta <strong>Ré5</strong>: consonante na preparação (6.ª M sobre o tenor Fa4), torna-se <strong>7.ª dissonante</strong> quando o tenor desce a Mi4, e depois resolve Ré5 → <strong>Do♯5</strong> (sensível elevada por ficta). A cláusula: cantizans Do♯5 → Ré5 (semitom ascendente) contra tenorizans Mi4 → Ré4 (tom descendente) = <strong>6.ª M → 8.ª</strong>. O final é uma <strong>quinta vazia Ré–La</strong> — sonoridade modal idiomática; também se pode elevar à terceira de Picardia (Fa♯). O baixo La2 → Ré3 confirma a finalis.",
  phrygienH3: "Cadência em modo frígio (finalis Mi) — 4 vozes",
  phrygienIntro:
    "O frígio <strong>não eleva sensível</strong>: o semitom diatónico <strong>Fa → Mi</strong> já está presente, e encontra-se na voz <strong>grave</strong> — é a assinatura do modo. Penúltimo acorde: Ré5 / Fa4 / La3 / Fa3 (baixo). Final: Mi5 / Sol4 / Si3 / Mi3 (baixo).",
  phrygienAnalyse:
    "Esqueleto: o superius sobe Ré5 → Mi5 (tom inteiro, <strong>sem</strong> sensível elevada), enquanto o baixo desce Fa3 → Mi3 (<strong>semitom</strong>) — ou seja <strong>6.ª M (Fa–Ré) → 8.ª (Mi–Mi)</strong> em movimento contrário. O acorde penúltimo é um <strong>Ré menor em primeira inversão</strong> (Fa no baixo), que resolve sobre <strong>Mi menor</strong>. Todas as perfeitas finais são alcançadas por movimento contrário; as sextas sobem em paralelo (imperfeitas, lícitas). É a cadência frígia, reconhecível por esse semitom descendente no baixo.",
  imitationBox:
    "<strong>A imitação.</strong> Uma voz enuncia um motivo, outra retoma-o à quinta ou à oitava, alguns tempos depois: é o germe do motete e da fuga. Tratamo-la aqui brevemente, como introdução.",

  entrainH2: "Aplicações e prática",
  methodeH3: "Método: escrever um contraponto florido sobre um cantus firmus dado",
  methodeSteps: [
    "<strong>Identificar o modo</strong>: localizar a finalis (primeira e última nota do cantus) e o âmbito; deduzir finalis, tenor e a sensível a elevar <strong>apenas na cadência</strong>.",
    "<strong>Esqueleto de primeira espécie</strong>: colocar uma nota consonante contra cada nota do cantus (começar e terminar numa perfeita), privilegiando 3.as e 6.as e o movimento contrário; verificar a <strong>ausência de quintas/oitavas paralelas ou diretas</strong>.",
    "<strong>Verificar a linha</strong>: o contraponto deve ser cantável — conjunto, cume único, saltos compensados, sem trítono.",
    "<strong>Florear</strong>: subdividir os valores e introduzir <strong>unicamente</strong> dissonâncias regradas (passagem/bordadura em tempos fracos, eventual <em>cambiata</em>).",
    "<strong>Cadência</strong>: colocar a cláusula (cantizans + tenorizans, retardo 7-6 ou 2-3, sensível por ficta).",
    "<strong>Controlar</strong> de ouvido e por escrito (gravação).",
  ],
  exercicesH3: "Exercícios de contraponto (soluções-modelo gravadas)",
  exercicesIntro:
    "O editor SATB (4 vozes) não convém ao contraponto a 2 vozes: estes exercícios são <strong>soluções-modelo gravadas</strong>, não exercícios de editor. Existem outras soluções corretas.",
  exercices: [
    {
      titre: "Exercício 1 — Primeira espécie, contraponto acima (modo dórico)",
      consigne: "Cantus firmus (voz inferior): Ré4 – Fa4 – Mi4 – Ré4 – Sol4 – Fa4 – La4 – Sol4 – Fa4 – Mi4 – Ré4. Escrever uma voz superior consonante (1:1), começando e terminando numa perfeita, com cláusula dórica.",
      controle: "Solução: Ré5 – La4 – Sol4 – La4 – Si4 – Do5 – Fa5 – Sol5 – Ré5 – Do♯5 – Ré5 (8-3-3-5-3-5-6-8-6-6-8). Cume único Sol5; perfeitas alcançadas por movimento contrário; sensível Do♯5 na cadência.",
    },
    {
      titre: "Exercício 2 — Contraponto florido com cadência (modo dórico)",
      consigne: "Cantus firmus (3 notas finais): Fa4 – Mi4 – Ré4. Por cima, um florido que traz a cláusula.",
      controle: "Solução (voz superior): sobre Fa4 → La4 – Do5 (3.ª depois 5.ª, consonantes); sobre Mi4 → Ré5 depois Do♯5 (Ré5 introduzido como passagem/retardo, resolvendo na sensível); sobre Ré4 → Ré5. Encadeamento cadencial: cantus Mi4 → Ré4 contra superius Do♯5 → Ré5 = 6.ª M → 8.ª (cláusula dórica, sensível por ficta).",
    },
    {
      titre: "Exercício 3 — Realizar uma cadência modal (modo mixolídio, finalis Sol)",
      consigne: "Cadência final a 3 vozes, tenorizans La3 → Sol3, a harmonizar com cantizans e baixo. Completar com a sensível elevada por ficta.",
      controle: "Solução: Superius (cantizans) Fa♯4 → Sol4 (sensível elevada, semitom); Tenor (tenorizans) La3 → Sol3 (tom descendente); Baixo (basizans) Ré3 → Sol2 (salto de quinta até à finalis). Esqueleto: La3-Fa♯4 (6.ª M) → Sol3-Sol4 (8.ª), movimento contrário. A sensível Fa♯ só existe aqui, por musica ficta: no interior do modo, o Fa permanece natural (a 7.ª menor característica do mixolídio).",
    },
    {
      titre: "Exercício 4 — Cadência frígia (finalis Mi)",
      consigne: "Final a 4 vozes em modo frígio. Realizar a cadência sem elevar sensível.",
      controle: "Solução: penúltimo acorde Fa3 (baixo) – La3 (tenor) – Fa4 (contralto) – Ré5 (superius) (Ré menor, Fa no baixo) → final Mi3 – Si3 – Sol4 – Mi5 (Mi menor). Baixo Fa3 → Mi3 (semitom, tenorizans na grave), superius Ré5 → Mi5 (tom, cantizans). Esqueleto 6.ª M (Fa–Ré) → 8.ª (Mi–Mi); nenhuma quinta nem oitava paralela; o semitom Fa→Mi no baixo assina o modo.",
    },
  ],
  voirCorrige: "Ver o modelo gravado",
  masquerCorrige: "Ocultar o modelo",
  corrigeLabel: "Solução-modelo gravada",
  quizH3: "Questionário — 10 perguntas",
  questions: [
    {
      q: "O contraponto de Palestrina organiza-se em torno de:",
      opts: ["A tonalidade maior/menor", "Os modos eclesiásticos (finalis, tenor)", "A escala de tons inteiros", "Os doze sons"],
      a: 1,
      fb: "O estilo é modal, não tonal: são a finalis e o modo, não uma dominante funcional, que organizam a peça.",
    },
    {
      q: "Quem codificou estatisticamente o tratamento da dissonância em Palestrina?",
      opts: ["Johann Joseph Fux", "Gioseffo Zarlino", "Knud Jeppesen", "Heinrich Schenker"],
      a: 2,
      fb: "Knud Jeppesen, The Style of Palestrina and the Dissonance (1922).",
    },
    {
      q: "Num modo autêntico, o tenor situa-se na maioria das vezes:",
      opts: ["À terceira abaixo da finalis", "À quinta acima da finalis", "Sobre a finalis", "À oitava"],
      a: 1,
      fb: "À quinta acima da finalis, salvo a transposição de Si para Do (modos III e VIII).",
    },
    {
      q: "Qual destes saltos melódicos é proibido numa linha de Palestrina?",
      opts: ["A quarta justa", "A oitava", "A terceira menor", "O trítono (4.ª aumentada)"],
      a: 3,
      fb: "O trítono é proscrito, tal como as 7.as, a sexta maior e todo o intervalo superior à oitava.",
    },
    {
      q: "Após um salto amplo, a linha deve:",
      opts: ["Continuar no mesmo sentido", "Voltar por grau conjunto em sentido contrário", "Repetir a nota", "Saltar de novo"],
      a: 1,
      fb: "É a compensação do salto: recupera-se por grau conjunto em sentido contrário.",
    },
    {
      q: "Quantas vezes deve aparecer o cume melódico (clímax)?",
      opts: ["Uma só vez", "Duas vezes", "Em cada frase", "Quantas se quiser"],
      a: 0,
      fb: "Uma só vez: repetido, perde o seu efeito de cume.",
    },
    {
      q: "Duas quintas justas paralelas entre as mesmas vozes são:",
      opts: ["Permitidas se breves", "Permitidas entre vozes interiores", "Proibidas", "Permitidas na cadência"],
      a: 2,
      fb: "Proibidas, como as oitavas e uníssonos paralelos: apagam a independência das vozes.",
    },
    {
      q: "Uma nota de passagem dissonante coloca-se:",
      opts: ["No tempo forte", "Num tempo fraco, por grau conjunto", "Por salto", "Em qualquer lugar"],
      a: 1,
      fb: "No estilo estrito, passagem e bordadura são não acentuadas (em tempo fraco, por grau conjunto).",
    },
    {
      q: "Um retardo (suspensão) resolve sempre:",
      opts: ["Subindo um grau", "Por um salto de terceira", "Descendo um grau conjunto", "Ficando no lugar"],
      a: 2,
      fb: "Preparação (consonante) → percussão (dissonante, tempo forte) → resolução conjunta descendente.",
    },
    {
      q: "A cadência frígia (finalis Mi) reconhece-se por:",
      opts: ["Uma sensível Ré♯ elevada", "Um semitom Fa → Mi na voz grave", "Um 6/4 cadencial", "Um pedal de dominante"],
      a: 1,
      fb: "O frígio não eleva sensível; o seu semitom diatónico Fa–Mi está no baixo.",
    },
  ],
  bonusLabel: "Pergunta bónus — a distinção-chave",
  bonusQ: "Qual a diferença entre as espécies de Fux (curso 13) e o estilo Palestrina?",
  bonusToggle: "Ver a resposta",
  bonusA:
    "Fux <strong>abstrai</strong> o contraponto numa escada didática (cantus firmus em valores iguais, reflexos muitas vezes tonalizados); Palestrina é o <strong>repertório vocal modal</strong> vivo — com texto, ritmicamente flexível — que essas espécies destilam.",

  listenBtn: "Ouvir",
};

export const cours43Content: Record<string, Cours43Locale> = { fr, en, de, es, it, pt };
