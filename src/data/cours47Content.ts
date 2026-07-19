// Cours 47 — Orchestration et lecture d'orchestre (Niveau 3, ≈ L3 · DNSPM)
// Deuxième cours du parcours DNSPM : il prolonge le cours 19 (Introduction à
// l'orchestration). Ici on ne décrit plus l'orchestre, on apprend à LE LIRE :
// architecture du conducteur, clés d'ut, instruments transpositeurs,
// verticalité, réduction au piano, équilibre.
// Contenu pédagogique locale-clé : le FR fait foi (transcrit de la spec validée
// 2026-07-19-cours-lecture-orchestre-contenu-fr.md — AUCUNE transposition,
// AUCUNE note modifiée : chaque calcul écrit → sonné a été vérifié dans les
// deux sens). Les cinq autres langues traduisent la prose avec le vocabulaire
// orchestral correct (conducteur = full score / Partitur / partitura general /
// partitura d'orchestra / partitura geral ; clé d'ut = C clef / C-Schlüssel ;
// instruments transpositeurs = transposing instruments / transponierende
// Instrumente ; le piège allemand « in B » = Si♭ reste expliqué partout).
// Les tables de noms d'instruments (IT/FR/DE) et de transposition sont
// COMPLÈTES dans les six langues — elles sont le cœur du cours ; les noms
// italiens/français/allemands de la table 1 sont des DONNÉES (identiques dans
// les six langues), seules les annotations se traduisent.
// CONVENTION : noms de notes en solfège FRANÇAIS partout (Do Ré Mi Fa Sol La
// Si), Do4 = do central — exigence de la couche audio Harmonia. Les NOTES des
// exemples gravés et des boutons écrit/sonnant vivent dans Cours47.tsx :
// identiques dans les six langues par construction.

export interface Question {
  q: string;
  opts: string[];
  a: number;
  fb: string;
}

export interface Cours47Locale {
  // ── Maître (MaitreCard) ──
  maitreConcept: string;
  maitreAnecdote: string;
  maitreLesson: string;

  // ── Section 1 — Lire une partition d'orchestre ──
  condH2: string;
  condP1: string;
  nomsCaption: string;
  nomsHeaders: string[]; // 3 : Italien / Français / Allemand
  nomsRows: { it: string; fr: string; de: string }[]; // 11 — noms = données, annotations traduites
  balayageH3: string;
  balayageP: string;
  linkCours19: { titre: string; desc: string };
  linkGo: string;

  // ── Section 2 — Les clés ──
  clesH2: string;
  clesP1: string;
  clesHeaders: string[]; // 3
  clesRows: { cle: string; instruments: string; do4: string }[]; // 4
  ancresH3: string;
  ancresP: string;
  ancresUt3Label: string;
  ancresUt4Label: string;
  ancresLignesHeaders: string[]; // 5 : 1re ligne (bas) … 5e ligne (haut)

  // ── Section 3 — Les instruments transpositeurs ──
  transpoH2: string;
  transpoP1: string;
  transpoCaption: string;
  transpoHeaders: string[]; // 5 (la 5e colonne porte les boutons écrit/sonnant)
  transpoRows: { instrument: string; regle: string; exemple: string; methode: string }[]; // 11
  transpoP2: string;
  clusterH3: string;
  clusterP: string;
  clusterCaption: string;
  btnEcrit: string;   // « Écrit » — joue la hauteur écrite
  btnSonnant: string; // « Sonnant (réel) » — joue la hauteur réelle

  // ── Section 4 — La verticalité ──
  vertH2: string;
  vertP1: string;
  tuttiH3: string;
  tuttiIntro: string;
  tuttiHeaders: string[]; // 5
  tuttiRows: { instr: string; a: string[] }[]; // 12 lignes × 4 accords (hauteurs écrites)
  resolCaption: string;
  resolRows: string[]; // 4 — résolution des transpositions
  contenuCaption: string;
  contenuList: string[]; // 4 — contenu réel accord par accord
  vertBilan: string;
  tuttiSonCaption: string; // gravure de la réduction sonnante
  btnTuttiSon: string;

  // ── Section 5 — La réduction au piano ──
  redH2: string;
  redP1: string;
  redCaption: string;
  redHeaders: string[]; // 5
  redRows: { main: string; a: string[] }[]; // 2 (MD, MG)
  redP2: string;
  redScoreCaption: string;
  btnReduction: string;
  btnTuttiComplet: string;

  // ── Section 6 — L'équilibre et les registres ──
  eqH2: string;
  eqP1: string;
  dispoH3: string;
  dispoIntro: string;
  dispoHeaders: string[]; // 5
  dispoRows: { nom: string; cells: string[] }[]; // 3 × 4
  dispoScoreCaption: string;
  btnDispo: string;
  eqP2: string;
  piegesWarn: string;

  // ── Section 7 — Entraînement ──
  entrainH2: string;
  methodeH3: string;
  methodeP: string;
  exercicesH3: string;
  exATitre: string;
  exAIntro: string;
  exAHeaders: string[]; // 3 : Instrument / Écrit / Réel (corrigé)
  exARows: { instrument: string; ecrit: string; reel: string }[]; // 3
  exAEchauffement: string;
  exBTitre: string;
  exBIntro: string;
  exBHeaders: string[]; // 4
  exBRows: { instr: string; a: string[] }[]; // 4 lignes × 3 accords (hauteurs écrites)
  exBConsigne: string;
  exBCorrige: string;
  exBScoreCaption: string;
  voirCorrige: string;
  masquerCorrige: string;
  corrigeLabel: string;
  capstoneH3: string;
  capstoneP: string;
  linkAnalyseur: { titre: string; desc: string };

  quizH3: string;
  questions: Question[];

  // ── UI partagée ──
  listenBtn: string;
}

// ════════════════════════════════════════════════════════════════════════════
// FR — fait foi (transcription de la spec validée)
// ════════════════════════════════════════════════════════════════════════════

const fr: Cours47Locale = {
  maitreConcept: "Lire l'orchestre — conducteur, transpositions, équilibre",
  maitreAnecdote:
    "Compositeur et chef, Hector Berlioz publie en 1844 le « Grand traité d'instrumentation et d'orchestration modernes », premier ouvrage à décrire méthodiquement chaque instrument — tessiture, timbre, transposition — et l'art de les combiner. Chef itinérant à travers l'Europe, il dirigeait ses partitions monumentales en lisant d'un coup d'œil des dizaines de portées et exigeait des copistes des conducteurs impeccables.",
  maitreLesson:
    "Un conducteur se lit avec méthode : l'ordre des familles, les clés, les transpositions résolues — puis l'oreille juge l'équilibre. La page la plus noire cache souvent une harmonie d'école.",

  condH2: "Lire une partition d'orchestre",
  condP1:
    "Ouvrir un conducteur pour la première fois est intimidant : vingt portées, cinq clés, des noms en italien. Mais la page est <strong>rigoureusement ordonnée</strong>, et cet ordre est le même depuis le XIXe siècle, de haut en bas : <strong>bois</strong> (flûtes, hautbois, clarinettes, bassons), <strong>cuivres</strong> (cors, trompettes, trombones, tuba), <strong>timbales et percussions</strong>, puis les intermédiaires éventuels (<strong>harpe, célesta, piano</strong>, voix solistes et chœur), et enfin les <strong>cordes</strong> (violons I, violons II, altos, violoncelles, contrebasses). À l'intérieur de chaque famille, l'aigu est en haut, le grave en bas. Les instruments sont presque toujours nommés en <strong>italien</strong> — et une partition allemande réserve un piège célèbre : <strong>« in B » signifie en Si♭</strong> (le Si naturel allemand s'écrit « H »).",
  nomsCaption: "Noms d'instruments : italien · français · allemand",
  nomsHeaders: ["Italien", "Français", "Allemand"],
  nomsRows: [
    { it: "Flauto (Fl.) / Ottavino", fr: "Flûte / Piccolo", de: "Flöte / Kleine Flöte" },
    { it: "Oboe (Ob.) / Corno inglese", fr: "Hautbois / Cor anglais", de: "Oboe / Englischhorn" },
    { it: "Clarinetto (Cl.)", fr: "Clarinette", de: "Klarinette (« in B » = en Si♭ !)" },
    { it: "Fagotto (Fg.) / Controfagotto", fr: "Basson / Contrebasson", de: "Fagott / Kontrafagott" },
    { it: "Corno (Cor.)", fr: "Cor", de: "Horn" },
    { it: "Tromba (Tr.)", fr: "Trompette", de: "Trompete" },
    { it: "Trombone (Trb.) — <em>Ottoni</em> = les cuivres", fr: "Trombone", de: "Posaune" },
    { it: "Timpani (Timp.)", fr: "Timbales", de: "Pauken" },
    { it: "Arpa", fr: "Harpe", de: "Harfe" },
    { it: "Violino (Vl.) / Viola (Vla.)", fr: "Violon / Alto", de: "Violine (Geige) / Bratsche" },
    { it: "Violoncello (Vc.) / Contrabbasso (Cb.)", fr: "Violoncelle / Contrebasse", de: "Violoncello / Kontrabass" },
  ],
  balayageH3: "Comment balayer une page",
  balayageP:
    "Jamais ligne à ligne de haut en bas. Trois passes : <strong>1) la basse</strong> (violoncelles/contrebasses, bassons, tuba — c'est le fondement harmonique, cf. section 4) ; <strong>2) la mélodie</strong> (souvent violons I, flûte ou hautbois — cherchez la ligne la plus active ou marquée <em>solo</em>) ; <strong>3) le remplissage</strong> (qui tient les notes du milieu, qui double qui — les rôles et doublures sont ceux du cours 19). Les <strong>repères de répétition</strong> (lettres A, B, C… ou numéros de mesure encadrés) servent à naviguer en répétition : citez-les toujours (« 4 après B ») — c'est la langue commune du pupitre et du chef.",
  linkCours19: {
    titre: "Cours 19 — Introduction à l'orchestration",
    desc: "Les quatre familles, tessitures, rôles et doublures : les fondations de ce cours, non répétées ici.",
  },
  linkGo: "Accéder →",

  clesH2: "Les clés",
  clesP1:
    "Pourquoi l'alto ne lit-il pas en clé de sol ? Parce que sa tessiture centrale (Do3–La5, cf. cours 19) tomberait en plein dans les lignes supplémentaires sous la portée. La <strong>clé d'ut</strong> résout ce problème : elle place le <strong>do central (Do4)</strong> sur la ligne qu'elle enlace. <strong>Clé d'ut 3e ligne (clé d'alto)</strong> : Do4 = 3e ligne — c'est la clé permanente de l'alto. <strong>Clé d'ut 4e ligne (clé de ténor)</strong> : Do4 = 4e ligne — violoncelles, bassons et trombones y passent dans leur registre aigu, pour éviter les lignes supplémentaires au-dessus de la clé de fa (un violoncelle qui chante autour de Sol3–Sol4 s'écrit bien plus lisiblement en clé d'ut 4).",
  clesHeaders: ["Clé", "Instruments", "Le Do central (Do4) s'écrit…"],
  clesRows: [
    { cle: "Clé de sol", instruments: "Violons, flûte, hautbois, clarinette, cor, trompette", do4: "1re ligne supplémentaire <strong>sous</strong> la portée" },
    { cle: "Clé d'ut 3e ligne (alto)", instruments: "Alto (permanente) ; trombone alto (répertoire ancien)", do4: "<strong>3e ligne</strong>" },
    { cle: "Clé d'ut 4e ligne (ténor)", instruments: "Violoncelle, basson, trombone ténor — en registre aigu", do4: "<strong>4e ligne</strong>" },
    { cle: "Clé de fa", instruments: "Violoncelle, contrebasse, basson, trombones, tuba, timbales", do4: "1re ligne supplémentaire <strong>au-dessus</strong> de la portée" },
  ],
  ancresH3: "La méthode des notes-ancres",
  ancresP:
    "La seule qui tienne en situation : <strong>mémoriser les lignes</strong>. En clé d'ut 3, les lignes sont <strong>Fa3 – La3 – Do4 – Mi4 – Sol4</strong> ; en clé d'ut 4, <strong>Ré3 – Fa3 – La3 – Do4 – Mi4</strong>. Deux exemples exacts à retenir comme étalons : <strong>La3 en clé d'alto = 2e ligne</strong> ; <strong>Mi4 en clé de ténor = 5e ligne</strong> (la ligne du haut). Dépannage possible mais à abandonner vite : lire « comme en clé de sol » puis corriger — en clé d'ut 3, monter d'une seconde et descendre d'une octave ; en clé d'ut 4, descendre d'une seconde puis d'une octave. Entraînez-vous cinq minutes par jour : la fluidité en clés d'ut est un prérequis absolu de la section 4.",
  ancresUt3Label: "Clé d'ut 3e ligne (alto) — les cinq lignes",
  ancresUt4Label: "Clé d'ut 4e ligne (ténor) — les cinq lignes",
  ancresLignesHeaders: ["1re ligne (bas)", "2e ligne", "3e ligne", "4e ligne", "5e ligne (haut)"],

  transpoH2: "Les instruments transpositeurs",
  transpoP1:
    "Le principe tient en une phrase : <strong>un instrument « en X » fait entendre X quand il lit Do</strong>. La partie est écrite dans une hauteur conventionnelle qui préserve les doigtés du musicien (toute la famille des clarinettes ou des saxophones se lit avec les mêmes doigtés) ou qui hérite des cors et trompettes naturels, jadis fabriqués dans tous les tons. Pour le lecteur de conducteur, une seule chose compte : <strong>de combien, et dans quel sens, transposer pour entendre la hauteur réelle</strong>.",
  transpoCaption: "LA table de référence du cours — chaque ligne vérifiée, à connaître par cœur. Écoutez chaque ligne : d'abord l'écrit, puis le sonnant.",
  transpoHeaders: ["Instrument", "Écrit → sonne", "Exemple exact", "Pour entendre la hauteur réelle", "Écouter"],
  transpoRows: [
    { instrument: "Piccolo", regle: "une <strong>octave plus haut</strong>", exemple: "écrit Do4 → sonne Do5", methode: "transposez d'une octave <strong>vers le haut</strong>" },
    { instrument: "Cor anglais (en Fa)", regle: "une <strong>5te juste plus bas</strong>", exemple: "écrit Do4 → sonne Fa3", methode: "transposez d'une 5te juste <strong>vers le bas</strong>" },
    { instrument: "Clarinette en Si♭", regle: "une <strong>2de majeure plus bas</strong>", exemple: "écrit Ré4 → sonne Do4", methode: "transposez d'une 2de majeure <strong>vers le bas</strong>" },
    { instrument: "Clarinette en La", regle: "une <strong>3ce mineure plus bas</strong>", exemple: "écrit Mi♭4 → sonne Do4 (écrit Do4 → sonne La3)", methode: "transposez d'une 3ce mineure <strong>vers le bas</strong>" },
    { instrument: "Cor en Fa", regle: "une <strong>5te juste plus bas</strong>", exemple: "écrit Sol4 → sonne Do4 (écrit Do4 → sonne Fa3)", methode: "transposez d'une 5te juste <strong>vers le bas</strong>" },
    { instrument: "Trompette en Si♭", regle: "une <strong>2de majeure plus bas</strong>", exemple: "écrit Ré4 → sonne Do4", methode: "transposez d'une 2de majeure <strong>vers le bas</strong>" },
    { instrument: "Saxophone alto en Mi♭", regle: "une <strong>6te majeure plus bas</strong>", exemple: "écrit Do4 → sonne Mi♭3 (écrit La4 → sonne Do4)", methode: "transposez d'une 6te majeure <strong>vers le bas</strong>" },
    { instrument: "Saxophone ténor en Si♭", regle: "une <strong>9e majeure plus bas</strong> (octave + 2de M)", exemple: "écrit Do4 → sonne Si♭2 (écrit Ré5 → sonne Do4)", methode: "transposez d'une octave puis d'une 2de majeure <strong>vers le bas</strong>" },
    { instrument: "Contrebasse", regle: "une <strong>octave plus bas</strong>", exemple: "écrit Do3 → sonne Do2", methode: "transposez d'une octave <strong>vers le bas</strong>" },
    { instrument: "Contrebasson", regle: "une <strong>octave plus bas</strong>", exemple: "écrit Do3 → sonne Do2", methode: "transposez d'une octave <strong>vers le bas</strong>" },
    { instrument: "Célesta", regle: "une <strong>octave plus haut</strong>", exemple: "écrit Do4 → sonne Do5", methode: "transposez d'une octave <strong>vers le haut</strong>" },
  ],
  transpoP2:
    "<strong>Remarques de terrain.</strong> Flûte, hautbois, bassons, trombones, tuba, timbales et toutes les cordes sauf la contrebasse sonnent <strong>comme écrit</strong> (la trompette « en Ut » aussi). Dans le répertoire classique et romantique, les cors changent de ton d'une œuvre à l'autre (« Corni in E♭, in D… ») : la règle reste la même — écrit Do → sonne la note du nom du cor, <strong>en dessous</strong> (un cor en Mi♭ sonne une 6te majeure plus bas : écrit Do4 → sonne Mi♭3). Conséquence d'armure à connaître : pour qu'un ensemble sonne en Do majeur, la partie de clarinette ou de trompette en Si♭ est écrite en <strong>Ré majeur</strong> (2 dièses), celle du cor en Fa en <strong>Sol majeur</strong> (les parties de cor sont d'ailleurs traditionnellement écrites sans armure, avec altérations accidentelles).",
  clusterH3: "Exemple travaillé — un « cluster » qui n'en est pas un",
  clusterP:
    "Sur le papier, trois notes voisines : Clarinette en Si♭ <strong>écrit Fa♯4</strong>, Cor en Fa <strong>écrit Sol4</strong>, Trompette en Si♭ <strong>écrit La4</strong>. Calculons : Cl. Si♭ Fa♯4 − 2de M = <strong>Mi4 réel</strong> ; Cor en Fa Sol4 − 5te J = <strong>Do4 réel</strong> ; Tr. Si♭ La4 − 2de M = <strong>Sol4 réel</strong>. Résultat sonnant : <strong>Do4 – Mi4 – Sol4</strong>, un accord parfait de <strong>Do majeur</strong> serré, à l'état fondamental. Ce qui ressemblait à un agrégat Fa♯–Sol–La est une consonance parfaite : voilà pourquoi on ne lit <strong>jamais</strong> un conducteur « à l'œil nu ». Jouez d'abord les trois notes écrites, puis les trois hauteurs réelles — le contraste s'entend immédiatement.",
  clusterCaption: "Mesure 1 : le pseudo-cluster écrit (Fa♯4 · Sol4 · La4) — mesure 2 : les hauteurs réelles (Do4 · Mi4 · Sol4).",
  btnEcrit: "Écrit",
  btnSonnant: "Sonnant (réel)",

  vertH2: "La verticalité : retrouver l'harmonie sous l'orchestre",
  vertP1:
    "Méthode en quatre temps, toujours dans cet ordre. <strong>1) La basse réelle</strong> : repérez la ligne la plus grave effectivement sonnante — violoncelles/contrebasses (attention : les contrebasses sonnent une octave sous ce qu'elles lisent), bassons, tuba. C'est elle qui donne l'état de l'accord. <strong>2) Chaque famille en hauteurs réelles</strong> : réduisez les bois, puis les cuivres, puis les cordes à leur contenu de hauteurs, en transposant ce qui doit l'être (section 3) et en lisant les clés d'ut (section 2). <strong>3) Replier les doublures et les octaves</strong> : une note doublée à l'unisson ou à l'octave (cours 19) ne compte qu'une fois comme classe de hauteur. <strong>4) Nommer l'accord</strong> au-dessus de la basse : fondamentale, renversement, éventuelle 7e — puis son chiffrage dans la tonalité.",
  tuttiH3: "Exemple travaillé — un tutti de quatre accords en Do majeur",
  tuttiIntro:
    "Voici, instrument par instrument, les hauteurs <strong>écrites</strong> (les clés indiquées sont celles de la partition) :",
  tuttiHeaders: ["Instrument (clé)", "Accord 1", "Accord 2", "Accord 3", "Accord 4"],
  tuttiRows: [
    { instr: "Flûte (sol)", a: ["Mi6", "Fa6", "Ré6", "Mi6"] },
    { instr: "Hautbois (sol)", a: ["Sol5", "La5", "Si5", "Do6"] },
    { instr: "Clarinette en Si♭ (sol)", a: ["<strong>Fa♯4</strong>", "<strong>Sol4</strong>", "<strong>Sol4</strong>", "<strong>Fa♯4</strong>"] },
    { instr: "Basson (fa)", a: ["Do3", "Fa3", "Sol3", "Do3"] },
    { instr: "Cor en Fa (sol)", a: ["<strong>Sol4</strong>", "<strong>Sol4</strong>", "<strong>La4</strong>", "<strong>Sol4</strong>"] },
    { instr: "Trompette en Si♭ (sol)", a: ["<strong>La4</strong>", "<strong>Si4</strong>", "<strong>La4</strong>", "<strong>La4</strong>"] },
    { instr: "Timbales Do–Sol (fa)", a: ["Do3", "—", "Sol2", "Do3"] },
    { instr: "Violons I (sol)", a: ["Mi5", "Fa5", "Ré5", "Mi5"] },
    { instr: "Violons II (sol)", a: ["Sol4", "La4", "Si4", "Do5"] },
    { instr: "Altos (ut 3)", a: ["Mi4", "Fa4", "Fa4", "Mi4"] },
    { instr: "Violoncelles (fa)", a: ["Do3", "Fa3", "Sol3", "Do3"] },
    { instr: "Contrebasses (fa)", a: ["<strong>Do3</strong>", "<strong>Fa3</strong>", "<strong>Sol3</strong>", "<strong>Do3</strong>"] },
  ],
  resolCaption: "Résolution des transpositions (tout le reste sonne comme écrit)",
  resolRows: [
    "<strong>Clarinette en Si♭</strong> (− 2de M) : Fa♯4 → <strong>Mi4</strong> ; Sol4 → <strong>Fa4</strong> ; Sol4 → <strong>Fa4</strong> ; Fa♯4 → <strong>Mi4</strong>.",
    "<strong>Cor en Fa</strong> (− 5te J) : Sol4 → <strong>Do4</strong> ; Sol4 → <strong>Do4</strong> ; La4 → <strong>Ré4</strong> ; Sol4 → <strong>Do4</strong>.",
    "<strong>Trompette en Si♭</strong> (− 2de M) : La4 → <strong>Sol4</strong> ; Si4 → <strong>La4</strong> ; La4 → <strong>Sol4</strong> ; La4 → <strong>Sol4</strong>.",
    "<strong>Contrebasses</strong> (− 8ve) : Do3 → <strong>Do2</strong> ; Fa3 → <strong>Fa2</strong> ; Sol3 → <strong>Sol2</strong> ; Do3 → <strong>Do2</strong>.",
  ],
  contenuCaption: "Contenu réel accord par accord (basse réelle en tête, doublures repliées)",
  contenuList: [
    "<strong>Accord 1</strong> : Do2 (Cb) ; Do3 (Vc, Bn, Timb.) ; Do4 (Cor) ; Mi4 (Alt., Cl.) ; Sol4 (Vl. II, Tr.) ; Mi5 (Vl. I) ; Sol5 (Htb.) ; Mi6 (Fl.) → classes {Do, Mi, Sol}, basse Do → <strong>Do majeur, état fondamental : I</strong>.",
    "<strong>Accord 2</strong> : Fa2 (Cb) ; Fa3 (Vc, Bn) ; Do4 (Cor) ; Fa4 (Alt., Cl.) ; La4 (Vl. II, Tr.) ; Fa5 (Vl. I) ; La5 (Htb.) ; Fa6 (Fl.) → {Fa, La, Do}, basse Fa → <strong>Fa majeur : IV</strong>. Remarquez : la quinte Do n'est présente <strong>qu'au cor</strong> (note commune tenue), et les timbales se taisent — accordées Do/Sol, elles n'ont pas de Fa.",
    "<strong>Accord 3</strong> : Sol2 (Cb, Timb.) ; Sol3 (Vc, Bn) ; Ré4 (Cor) ; Fa4 (Alt., Cl.) ; Sol4 (Tr.) ; Si4 (Vl. II) ; Ré5 (Vl. I) ; Si5 (Htb.) ; Ré6 (Fl.) → {Sol, Si, Ré, Fa}, basse Sol → <strong>7e de dominante complète : V7</strong>. La 7e (Fa4, altos + clarinette) est une note <strong>tenue</strong> depuis l'accord 2 — préparation audible.",
    "<strong>Accord 4</strong> : Do2 (Cb) ; Do3 (Vc, Bn, Timb.) ; Do4 (Cor) ; Mi4 (Alt., Cl.) ; Sol4 (Tr.) ; Do5 (Vl. II) ; Mi5 (Vl. I) ; Do6 (Htb.) ; Mi6 (Fl.) → {Do, Mi, Sol}, basse Do → <strong>I</strong>. Conduite exemplaire : la sensible Si4 (Vl. II) monte à Do5, la 7e Fa4 (Alt., Cl.) descend à Mi4, Ré (Cor, Vl. I, Fl.) rejoint Do ou Mi.",
  ],
  vertBilan:
    "Bilan : <strong>I – IV – V7 – I en Do majeur</strong>, cadence parfaite. Sous ses douze portées, ce tutti est une simple marche harmonique d'école — c'est exactement ce que l'exercice de verticalité doit révéler.",
  tuttiSonCaption:
    "La réduction <strong>sonnante</strong> du tutti — basse réelle (contrebasses − 8ve !) et classes de hauteurs repliées : I · IV · V7 · I.",
  btnTuttiSon: "Écouter la réduction sonnante",

  redH2: "La réduction au piano",
  redP1:
    "Réduire, c'est <strong>traduire les hauteurs réelles en deux portées jouables</strong> — pas recopier. Hiérarchie de ce qu'on garde : <strong>la basse réelle</strong> (toujours), <strong>la mélodie</strong> (toujours, à sa hauteur d'origine si possible), <strong>la conduite intérieure caractéristique</strong> (ici la ligne des altos Mi4–Fa4–Fa4–Mi4, qui porte la préparation et la résolution de la 7e), puis le remplissage harmonique. Ce qu'on élimine : les <strong>doublures</strong> d'unisson et d'octave (la flûte qui double les violons I à l'octave disparaît), les <strong>trémolos et batteries</strong> (on les replie en accords tenus), les <strong>notes répétées</strong> (une note tenue suffit). Règle de sacrifice quand la main ne suffit pas : on abandonne d'abord <strong>la quinte</strong> de l'accord, jamais la tierce ni la 7e. Et l'on resserre les octaves extrêmes vers le centre du clavier.",
  redCaption: "Le tutti de la section 4 se réduit ainsi (hauteurs réelles, deux portées) :",
  redHeaders: ["", "Accord 1 (I)", "Accord 2 (IV)", "Accord 3 (V7)", "Accord 4 (I)"],
  redRows: [
    { main: "Main droite (clé de sol)", a: ["Mi4 – Sol4 – Mi5", "Fa4 – La4 – Fa5", "Fa4 – Si4 – Ré5", "Mi4 – Sol4 – Do5 – Mi5"] },
    { main: "Main gauche (clé de fa)", a: ["Do2 – Do3", "Fa2 – Fa3", "Sol2 – Sol3", "Do2 – Do3"] },
  ],
  redP2:
    "Justification note à note. Main gauche : la basse réelle en octaves (Cb sonnant + Vc). Main droite : la mélodie des violons I au sommet (Mi5–Fa5–Ré5–Mi5), la voix intérieure des altos en bas de main (Mi4–Fa4–Fa4–Mi4 : la 7e Fa4 préparée puis résolue sur Mi4), et entre les deux le complément harmonique (Sol4 puis La4 puis Si4 → Do5 : la ligne des violons II, avec la sensible qui monte). À l'accord 2, la quinte Do (qui ne sonnait qu'au cor) est <strong>sacrifiée</strong> — application directe de la règle. À l'accord 4, Sol4 (trompette) réapparaît sous les doigts : l'accord final est complet. Chaque main tient dans l'octave : la réduction est <strong>jouable à vue</strong> — c'est le critère. Comparez à l'oreille le tutti « complet » et la réduction : l'harmonie est identique.",
  redScoreCaption: "La réduction gravée — chaque main tient dans l'octave : jouable à vue.",
  btnReduction: "Écouter la réduction",
  btnTuttiComplet: "Écouter le tutti complet (sonnant)",

  eqH2: "L'équilibre et les registres",
  eqP1:
    "Réduire ne suffit pas : il faut aussi juger <strong>ce qui s'entendra</strong>. La hiérarchie des puissances est sans appel — le cours 19 l'a posée : <strong>une seule trompette fortissimo couvre un pupitre entier de violons</strong>. Les cuivres dominent, puis les bois aigus perçants (piccolo, hautbois), puis la masse des cordes, enfin les bois moyens. L'orchestrateur compense par trois moyens : <strong>des nuances différenciées par famille</strong> (cuivres <em>mf</em> quand cordes et bois sont <em>f</em> — les nuances d'un conducteur ne sont pas uniformes, et c'est volontaire) ; <strong>la doublure de la mélodie à l'octave</strong> pour la projeter (flûte sur violons I, comme dans notre tutti) ; <strong>l'espacement calqué sur la série harmonique</strong> : intervalles larges au grave, serrés à l'aigu — notre tutti empile Do2–Do3 (octave), puis Do4–Mi4–Sol4 (tierces), jamais l'inverse.",
  dispoH3: "Les trois dispositions classiques d'un accord entre deux familles",
  dispoIntro:
    "Sur l'accord Do4–Mi4–Sol4–Do5 (Do majeur, quatre sons), confié à 2 flûtes et 2 clarinettes en Si♭ (hauteurs réelles, partie écrite des clarinettes entre parenthèses) :",
  dispoHeaders: ["Disposition", "Do5", "Sol4", "Mi4", "Do4"],
  dispoRows: [
    { nom: "<strong>Juxtaposition</strong> (chaque famille en bloc)", cells: ["Fl. 1", "Fl. 2", "Cl. 1 (écrit Fa♯4)", "Cl. 2 (écrit Ré4)"] },
    { nom: "<strong>Encastrement</strong> (voix alternées)", cells: ["Fl. 1", "Cl. 1 (écrit La4)", "Fl. 2", "Cl. 2 (écrit Ré4)"] },
    { nom: "<strong>Enrobage</strong> (une famille enveloppe l'autre)", cells: ["Fl. 1", "Cl. 1 (écrit La4)", "Cl. 2 (écrit Fa♯4)", "Fl. 2"] },
  ],
  dispoScoreCaption:
    "Les trois dispositions gravées (hauteurs réelles) — hampes vers le haut : flûtes ; hampes vers le bas : clarinettes. Mesure 1 : juxtaposition · mesure 2 : encastrement · mesure 3 : enrobage. Au piano, les trois sonnent identiques : seule la répartition des timbres change.",
  btnDispo: "Écouter l'accord (sonnant)",
  eqP2:
    "La juxtaposition garde les couleurs distinctes (deux étages de timbre) ; l'encastrement fond les timbres en un alliage homogène ; l'enrobage donne la couleur de la famille <strong>extérieure</strong> avec le soutien de l'intérieure.",
  piegesWarn:
    "<strong>Pièges d'équilibre classiques</strong> : mélodie confiée au registre médium d'un bois pendant que l'accompagnement des cordes occupe le même registre (elle disparaît) ; un cor seul en face d'un tutti de cordes <em>f</em> (insuffisant : le cor « compte » traditionnellement pour moitié d'un trombone) ; le <strong>trou de médium</strong> — graves et aigus fournis, rien entre Do3 et Do4 — qui rend le tutti creux (cours 19) ; et le <em>ff</em> uniforme écrit pour tout le monde, qui garantit qu'on n'entendra que les cuivres.",

  entrainH2: "Entraînement",
  methodeH3: "La méthode, en résumé — les passes de lecture",
  methodeP:
    "1) architecture de la page (qui joue ?) ; 2) basse réelle (contrebasses : − 8ve !) ; 3) mélodie et doublures ; 4) transpositions résolues, familles repliées ; 5) accords nommés ; 6) jugement d'équilibre. <strong>Dans cet ordre, toujours.</strong>",
  exercicesH3: "Exercices",
  exATitre: "Exercice a — drill de transposition",
  exAIntro:
    "Échauffement clés compris. Donnez la hauteur réelle de chaque note écrite, puis vérifiez au clavier : jouez l'écrit, puis le réel.",
  exAHeaders: ["Instrument", "Écrit", "Réel (corrigé)"],
  exARows: [
    { instrument: "Clarinette en Si♭", ecrit: "Sol4 · La4 · Si4", reel: "<strong>Fa4 · Sol4 · La4</strong> (− 2de M)" },
    { instrument: "Cor en Fa", ecrit: "Do5 · Si4 · Sol4", reel: "<strong>Fa4 · Mi4 · Do4</strong> (− 5te J)" },
    { instrument: "Saxophone alto en Mi♭", ecrit: "Mi5 · Do5 · La4", reel: "<strong>Sol4 · Mi♭4 · Do4</strong> (− 6te M)" },
  ],
  exAEchauffement:
    "Échauffement clés : en clé d'alto, écrivez La3 (2e ligne) et Mi4 (4e ligne) ; en clé de ténor, écrivez Fa3 (2e ligne) et Do4 (4e ligne).",
  exBTitre: "Exercice b — mini-conducteur à réduire",
  exBIntro: "Quatre instruments, trois accords, tonalité de Sol majeur. Hauteurs <strong>écrites</strong> :",
  exBHeaders: ["Instrument (clé)", "Accord 1", "Accord 2", "Accord 3"],
  exBRows: [
    { instr: "Flûte (sol)", a: ["Do5", "Do5", "Si4"] },
    { instr: "Clarinette en Si♭ (sol)", a: ["Fa♯4", "Sol♯4", "La4"] },
    { instr: "Cor en Fa (sol)", a: ["Ré4", "Mi4", "Ré4"] },
    { instr: "Violoncelle (fa)", a: ["Do3", "Ré3", "Sol2"] },
  ],
  exBConsigne:
    "<em>Consigne</em> : résolvez les transpositions, nommez les trois accords et le chiffrage en Sol majeur, puis proposez une réduction deux portées.",
  exBCorrige:
    "Transpositions — Cl. Si♭ (− 2de M) : Fa♯4 → <strong>Mi4</strong>, Sol♯4 → <strong>Fa♯4</strong>, La4 → <strong>Sol4</strong> ; Cor en Fa (− 5te J) : Ré4 → <strong>Sol3</strong>, Mi4 → <strong>La3</strong>, Ré4 → <strong>Sol3</strong> ; flûte et violoncelle sonnent comme écrit. Contenu réel : accord 1 = Do3–Sol3–Mi4–Do5 → <strong>Do majeur = IV</strong> ; accord 2 = Ré3–La3–Fa♯4–Do5 → <strong>Ré 7e de dominante complète = V7</strong> (la 7e Do5, tenue à la flûte depuis l'accord 1, est préparée) ; accord 3 = Sol2–Sol3–Sol4–Si4 → <strong>Sol majeur = I</strong>, quinte omise et fondamentale triplée — normal après un V7 complet : la sensible Fa♯4 monte à Sol4, la 7e Do5 descend à Si4. Bilan : <strong>IV – V7 – I, cadence parfaite en Sol majeur.</strong> Réduction proposée : MG Do3+Sol3 / Ré3+La3 / Sol2+Sol3 ; MD Mi4+Do5 / Fa♯4+Do5 / Sol4+Si4.",
  exBScoreCaption:
    "La réduction proposée, gravée (hauteurs réelles) : MD Mi4+Do5 · Fa♯4+Do5 · Sol4+Si4 ; MG Do3+Sol3 · Ré3+La3 · Sol2+Sol3.",
  voirCorrige: "Voir le corrigé",
  masquerCorrige: "Masquer le corrigé",
  corrigeLabel: "Corrigé",
  capstoneH3: "Exercice c — synthèse avec l'analyseur",
  capstoneP:
    "Prenez un court extrait orchestral libre de droits (4 à 8 mesures d'un choral de symphonie, d'un hymne, d'une réduction du domaine public), réduisez-le vous-même en hauteurs réelles sur deux portées, exportez la réduction en <strong>MusicXML</strong> et importez-la dans l'outil <strong>/analyse-partition</strong> : comparez les accords que l'outil identifie à votre analyse verticale. Tout écart a l'une de ces trois causes — une transposition oubliée (contrebasses !), une clé d'ut mal lue, une doublure prise pour une note nouvelle. C'est précisément la check-list de ce cours.",
  linkAnalyseur: {
    titre: "Analyseur de partitions",
    desc: "Importez votre réduction MusicXML et comparez les accords identifiés à votre analyse verticale.",
  },

  quizH3: "Quiz",
  questions: [
    {
      q: "La clarinette en Si♭ lit Mi4. Quelle est la hauteur réelle ?",
      opts: ["Fa♯4", "Ré4", "Mi4", "Ré♭4"],
      a: 1,
      fb: "La clarinette en Si♭ sonne une 2de majeure plus bas que l'écrit : Mi4 − 2de M = Ré4.",
    },
    {
      q: "Le cor en Fa lit Ré5. Hauteur réelle ?",
      opts: ["La4", "Ré4", "Sol4", "La5"],
      a: 2,
      fb: "Le cor en Fa sonne une 5te juste plus bas : Ré5 − 5te J = Sol4.",
    },
    {
      q: "Le saxophone alto en Mi♭ lit Sol4. Hauteur réelle ?",
      opts: ["Si♭3", "Mi♭4", "Si3", "Sol3"],
      a: 0,
      fb: "Le sax alto sonne une 6te majeure plus bas : Sol4 − 6te M = Si♭3.",
    },
    {
      q: "La clarinette en La lit Do5. Hauteur réelle ?",
      opts: ["Si♭4", "La3", "Mi♭5", "La4"],
      a: 3,
      fb: "La clarinette en La sonne une 3ce mineure plus bas : Do5 − 3ce m = La4.",
    },
    {
      q: "Le saxophone ténor en Si♭ lit Do4. Hauteur réelle ?",
      opts: ["Si♭3", "Si♭2", "Ré3", "Do3"],
      a: 1,
      fb: "Le ténor sonne une 9e majeure plus bas (octave + 2de M) : Do4 − 8ve = Do3, − 2de M = Si♭2. Ne pas confondre avec la clarinette en Si♭ (2de M seulement).",
    },
    {
      q: "En clé d'ut 3e ligne (alto), quelle note occupe la première ligne (en bas) ?",
      opts: ["Fa3", "Mi3", "Sol3", "Ré3"],
      a: 0,
      fb: "Lignes de la clé d'alto : Fa3 – La3 – Do4 – Mi4 – Sol4 (Do central sur la 3e ligne).",
    },
    {
      q: "En clé d'ut 4e ligne (ténor), quelle note occupe la 5e ligne (en haut) ?",
      opts: ["Ré4", "Sol4", "Mi4", "Do4"],
      a: 2,
      fb: "Lignes de la clé de ténor : Ré3 – Fa3 – La3 – Do4 – Mi4 (Do central sur la 4e ligne).",
    },
    {
      q: "Violoncelles et contrebasses lisent la même partie : Do3. Quelle est la vraie basse de l'accord ?",
      opts: ["Do3 (unisson)", "Do4", "Do1", "Do2, aux contrebasses"],
      a: 3,
      fb: "La contrebasse sonne une octave sous l'écrit : la basse réelle est Do2, une octave sous les violoncelles — c'est la doublure d'octave automatique des pupitres graves.",
    },
    {
      q: "Un choral confie la mélodie aux hautbois (f) doublés par les trompettes (f). Qu'entendra-t-on ?",
      opts: [
        "Surtout les trompettes : il faudrait les noter mf",
        "Un alliage équilibré",
        "Surtout les hautbois",
        "Rien : les timbres s'annulent",
      ],
      a: 0,
      fb: "Les cuivres dominent acoustiquement les bois à nuance égale (cours 19) : on différencie les nuances (trompettes mf, hautbois f) pour équilibrer la doublure.",
    },
    {
      q: "Le cor anglais lit Do5. Hauteur réelle ?",
      opts: ["Sol4", "Fa4", "Fa5", "Do4"],
      a: 1,
      fb: "Comme le cor en Fa, le cor anglais sonne une 5te juste plus bas : Do5 − 5te J = Fa4.",
    },
  ],

  listenBtn: "Écouter",
};

// ════════════════════════════════════════════════════════════════════════════
// EN
// ════════════════════════════════════════════════════════════════════════════

const en: Cours47Locale = {
  maitreConcept: "Reading the orchestra — full score, transpositions, balance",
  maitreAnecdote:
    "Composer and conductor, Hector Berlioz published in 1844 the “Grand Treatise on Instrumentation and Modern Orchestration”, the first book to describe each instrument methodically — range, timbre, transposition — and the art of combining them. A travelling conductor across Europe, he directed his monumental scores reading dozens of staves at a glance and demanded impeccable full scores from his copyists.",
  maitreLesson:
    "A full score is read with a method: the order of the families, the clefs, the transpositions resolved — then the ear judges the balance. The blackest page often hides a textbook harmony.",

  condH2: "Reading an orchestral score",
  condP1:
    "Opening a full score for the first time is intimidating: twenty staves, five clefs, names in Italian. But the page is <strong>rigorously ordered</strong>, and this order has been the same since the 19th century, from top to bottom: <strong>woodwinds</strong> (flutes, oboes, clarinets, bassoons), <strong>brass</strong> (horns, trumpets, trombones, tuba), <strong>timpani and percussion</strong>, then the occasional in-betweens (<strong>harp, celesta, piano</strong>, solo voices and choir), and finally the <strong>strings</strong> (violins I, violins II, violas, cellos, double basses). Within each family, high is at the top, low at the bottom. Instruments are almost always named in <strong>Italian</strong> — and a German score holds a famous trap: <strong>“in B” means in Si♭</strong> (the German natural Si is written “H”).",
  nomsCaption: "Instrument names: Italian · French · German",
  nomsHeaders: ["Italian", "French", "German"],
  nomsRows: [
    { it: "Flauto (Fl.) / Ottavino", fr: "Flûte / Piccolo", de: "Flöte / Kleine Flöte" },
    { it: "Oboe (Ob.) / Corno inglese", fr: "Hautbois / Cor anglais", de: "Oboe / Englischhorn" },
    { it: "Clarinetto (Cl.)", fr: "Clarinette", de: "Klarinette (“in B” = in Si♭!)" },
    { it: "Fagotto (Fg.) / Controfagotto", fr: "Basson / Contrebasson", de: "Fagott / Kontrafagott" },
    { it: "Corno (Cor.)", fr: "Cor", de: "Horn" },
    { it: "Tromba (Tr.)", fr: "Trompette", de: "Trompete" },
    { it: "Trombone (Trb.) — <em>Ottoni</em> = the brass", fr: "Trombone", de: "Posaune" },
    { it: "Timpani (Timp.)", fr: "Timbales", de: "Pauken" },
    { it: "Arpa", fr: "Harpe", de: "Harfe" },
    { it: "Violino (Vl.) / Viola (Vla.)", fr: "Violon / Alto", de: "Violine (Geige) / Bratsche" },
    { it: "Violoncello (Vc.) / Contrabbasso (Cb.)", fr: "Violoncelle / Contrebasse", de: "Violoncello / Kontrabass" },
  ],
  balayageH3: "How to scan a page",
  balayageP:
    "Never line by line from top to bottom. Three passes: <strong>1) the bass</strong> (cellos/double basses, bassoons, tuba — it is the harmonic foundation, cf. section 4); <strong>2) the melody</strong> (often violins I, flute or oboe — look for the most active line or the one marked <em>solo</em>); <strong>3) the filling</strong> (who holds the middle notes, who doubles whom — the roles and doublings are those of course 19). The <strong>rehearsal marks</strong> (letters A, B, C… or boxed bar numbers) are how you navigate in rehearsal: always quote them (“4 after B”) — it is the common language of the desk and the conductor.",
  linkCours19: {
    titre: "Course 19 — Introduction to orchestration",
    desc: "The four families, ranges, roles and doublings: the foundations of this course, not repeated here.",
  },
  linkGo: "Open →",

  clesH2: "The clefs",
  clesP1:
    "Why doesn't the viola read in treble clef? Because its central range (Do3–La5, cf. course 19) would fall right into the ledger lines below the staff. The <strong>C clef</strong> solves this problem: it places <strong>middle C (Do4)</strong> on the line it wraps around. <strong>C clef on the 3rd line (alto clef)</strong>: Do4 = 3rd line — it is the viola's permanent clef. <strong>C clef on the 4th line (tenor clef)</strong>: Do4 = 4th line — cellos, bassoons and trombones switch to it in their high register, to avoid ledger lines above the bass clef (a cello singing around Sol3–Sol4 is written far more legibly in tenor clef).",
  clesHeaders: ["Clef", "Instruments", "Middle C (Do4) is written…"],
  clesRows: [
    { cle: "Treble clef", instruments: "Violins, flute, oboe, clarinet, horn, trumpet", do4: "1st ledger line <strong>below</strong> the staff" },
    { cle: "C clef, 3rd line (alto)", instruments: "Viola (permanent); alto trombone (early repertoire)", do4: "<strong>3rd line</strong>" },
    { cle: "C clef, 4th line (tenor)", instruments: "Cello, bassoon, tenor trombone — in the high register", do4: "<strong>4th line</strong>" },
    { cle: "Bass clef", instruments: "Cello, double bass, bassoon, trombones, tuba, timpani", do4: "1st ledger line <strong>above</strong> the staff" },
  ],
  ancresH3: "The anchor-note method",
  ancresP:
    "The only one that holds up in real situations: <strong>memorise the lines</strong>. In the alto clef the lines are <strong>Fa3 – La3 – Do4 – Mi4 – Sol4</strong>; in the tenor clef, <strong>Ré3 – Fa3 – La3 – Do4 – Mi4</strong>. Two exact examples to keep as reference points: <strong>La3 in alto clef = 2nd line</strong>; <strong>Mi4 in tenor clef = 5th line</strong> (the top line). A possible crutch, to be dropped quickly: read “as if in treble clef” then correct — in alto clef, go up a second and down an octave; in tenor clef, go down a second then an octave. Practise five minutes a day: fluency in the C clefs is an absolute prerequisite for section 4.",
  ancresUt3Label: "C clef on the 3rd line (alto) — the five lines",
  ancresUt4Label: "C clef on the 4th line (tenor) — the five lines",
  ancresLignesHeaders: ["1st line (bottom)", "2nd line", "3rd line", "4th line", "5th line (top)"],

  transpoH2: "Transposing instruments",
  transpoP1:
    "The principle fits in one sentence: <strong>an instrument “in X” sounds X when it reads Do</strong>. The part is written at a conventional pitch that preserves the player's fingerings (the whole clarinet or saxophone family is read with the same fingerings) or that is inherited from the natural horns and trumpets, once built in every key. For the score reader, only one thing matters: <strong>by how much, and in which direction, to transpose in order to hear the real pitch</strong>.",
  transpoCaption: "THE reference table of the course — every row verified, to be known by heart. Listen to each row: first the written pitch, then the sounding one.",
  transpoHeaders: ["Instrument", "Written → sounds", "Exact example", "To hear the real pitch", "Listen"],
  transpoRows: [
    { instrument: "Piccolo", regle: "an <strong>octave higher</strong>", exemple: "written Do4 → sounds Do5", methode: "transpose one octave <strong>upwards</strong>" },
    { instrument: "English horn (in Fa)", regle: "a <strong>perfect 5th lower</strong>", exemple: "written Do4 → sounds Fa3", methode: "transpose a perfect 5th <strong>downwards</strong>" },
    { instrument: "Clarinet in Si♭", regle: "a <strong>major 2nd lower</strong>", exemple: "written Ré4 → sounds Do4", methode: "transpose a major 2nd <strong>downwards</strong>" },
    { instrument: "Clarinet in La", regle: "a <strong>minor 3rd lower</strong>", exemple: "written Mi♭4 → sounds Do4 (written Do4 → sounds La3)", methode: "transpose a minor 3rd <strong>downwards</strong>" },
    { instrument: "Horn in Fa", regle: "a <strong>perfect 5th lower</strong>", exemple: "written Sol4 → sounds Do4 (written Do4 → sounds Fa3)", methode: "transpose a perfect 5th <strong>downwards</strong>" },
    { instrument: "Trumpet in Si♭", regle: "a <strong>major 2nd lower</strong>", exemple: "written Ré4 → sounds Do4", methode: "transpose a major 2nd <strong>downwards</strong>" },
    { instrument: "Alto saxophone in Mi♭", regle: "a <strong>major 6th lower</strong>", exemple: "written Do4 → sounds Mi♭3 (written La4 → sounds Do4)", methode: "transpose a major 6th <strong>downwards</strong>" },
    { instrument: "Tenor saxophone in Si♭", regle: "a <strong>major 9th lower</strong> (octave + major 2nd)", exemple: "written Do4 → sounds Si♭2 (written Ré5 → sounds Do4)", methode: "transpose an octave then a major 2nd <strong>downwards</strong>" },
    { instrument: "Double bass", regle: "an <strong>octave lower</strong>", exemple: "written Do3 → sounds Do2", methode: "transpose one octave <strong>downwards</strong>" },
    { instrument: "Contrabassoon", regle: "an <strong>octave lower</strong>", exemple: "written Do3 → sounds Do2", methode: "transpose one octave <strong>downwards</strong>" },
    { instrument: "Celesta", regle: "an <strong>octave higher</strong>", exemple: "written Do4 → sounds Do5", methode: "transpose one octave <strong>upwards</strong>" },
  ],
  transpoP2:
    "<strong>Field notes.</strong> Flute, oboe, bassoons, trombones, tuba, timpani and all the strings except the double bass sound <strong>as written</strong> (so does the trumpet “in Ut”). In the Classical and Romantic repertoire, horns change crook from one work to the next (“Corni in E♭, in D…”): the rule stays the same — written Do → sounds the note the horn is named after, <strong>below</strong> (a horn in Mi♭ sounds a major 6th lower: written Do4 → sounds Mi♭3). A key-signature consequence to know: for an ensemble to sound in Do major, the part of a clarinet or trumpet in Si♭ is written in <strong>Ré major</strong> (2 sharps), that of the horn in Fa in <strong>Sol major</strong> (horn parts are in fact traditionally written without a key signature, with accidentals).",
  clusterH3: "Worked example — a “cluster” that isn't one",
  clusterP:
    "On paper, three neighbouring notes: Clarinet in Si♭ <strong>written Fa♯4</strong>, Horn in Fa <strong>written Sol4</strong>, Trumpet in Si♭ <strong>written La4</strong>. Let's compute: Cl. Si♭ Fa♯4 − major 2nd = <strong>Mi4 real</strong>; Horn in Fa Sol4 − perfect 5th = <strong>Do4 real</strong>; Tr. Si♭ La4 − major 2nd = <strong>Sol4 real</strong>. Sounding result: <strong>Do4 – Mi4 – Sol4</strong>, a close-position <strong>Do major</strong> triad in root position. What looked like a Fa♯–Sol–La cluster is a perfect consonance: that is why you <strong>never</strong> read a full score “with the naked eye”. Play first the three written notes, then the three real pitches — the contrast is immediately audible.",
  clusterCaption: "Bar 1: the written pseudo-cluster (Fa♯4 · Sol4 · La4) — bar 2: the real pitches (Do4 · Mi4 · Sol4).",
  btnEcrit: "Written",
  btnSonnant: "Sounding (real)",

  vertH2: "Verticality: finding the harmony beneath the orchestra",
  vertP1:
    "A four-step method, always in this order. <strong>1) The real bass</strong>: locate the lowest actually sounding line — cellos/double basses (careful: double basses sound an octave below what they read), bassoons, tuba. It determines the inversion of the chord. <strong>2) Each family at real pitch</strong>: reduce the woodwinds, then the brass, then the strings to their pitch content, transposing what must be transposed (section 3) and reading the C clefs (section 2). <strong>3) Fold in the doublings and octaves</strong>: a note doubled at the unison or the octave (course 19) counts only once as a pitch class. <strong>4) Name the chord</strong> above the bass: root, inversion, possible 7th — then its Roman numeral in the key.",
  tuttiH3: "Worked example — a four-chord tutti in Do major",
  tuttiIntro:
    "Here, instrument by instrument, are the <strong>written</strong> pitches (the clefs shown are those of the score):",
  tuttiHeaders: ["Instrument (clef)", "Chord 1", "Chord 2", "Chord 3", "Chord 4"],
  tuttiRows: [
    { instr: "Flute (treble)", a: ["Mi6", "Fa6", "Ré6", "Mi6"] },
    { instr: "Oboe (treble)", a: ["Sol5", "La5", "Si5", "Do6"] },
    { instr: "Clarinet in Si♭ (treble)", a: ["<strong>Fa♯4</strong>", "<strong>Sol4</strong>", "<strong>Sol4</strong>", "<strong>Fa♯4</strong>"] },
    { instr: "Bassoon (bass)", a: ["Do3", "Fa3", "Sol3", "Do3"] },
    { instr: "Horn in Fa (treble)", a: ["<strong>Sol4</strong>", "<strong>Sol4</strong>", "<strong>La4</strong>", "<strong>Sol4</strong>"] },
    { instr: "Trumpet in Si♭ (treble)", a: ["<strong>La4</strong>", "<strong>Si4</strong>", "<strong>La4</strong>", "<strong>La4</strong>"] },
    { instr: "Timpani Do–Sol (bass)", a: ["Do3", "—", "Sol2", "Do3"] },
    { instr: "Violins I (treble)", a: ["Mi5", "Fa5", "Ré5", "Mi5"] },
    { instr: "Violins II (treble)", a: ["Sol4", "La4", "Si4", "Do5"] },
    { instr: "Violas (alto clef)", a: ["Mi4", "Fa4", "Fa4", "Mi4"] },
    { instr: "Cellos (bass)", a: ["Do3", "Fa3", "Sol3", "Do3"] },
    { instr: "Double basses (bass)", a: ["<strong>Do3</strong>", "<strong>Fa3</strong>", "<strong>Sol3</strong>", "<strong>Do3</strong>"] },
  ],
  resolCaption: "Resolving the transpositions (everything else sounds as written)",
  resolRows: [
    "<strong>Clarinet in Si♭</strong> (− major 2nd): Fa♯4 → <strong>Mi4</strong>; Sol4 → <strong>Fa4</strong>; Sol4 → <strong>Fa4</strong>; Fa♯4 → <strong>Mi4</strong>.",
    "<strong>Horn in Fa</strong> (− perfect 5th): Sol4 → <strong>Do4</strong>; Sol4 → <strong>Do4</strong>; La4 → <strong>Ré4</strong>; Sol4 → <strong>Do4</strong>.",
    "<strong>Trumpet in Si♭</strong> (− major 2nd): La4 → <strong>Sol4</strong>; Si4 → <strong>La4</strong>; La4 → <strong>Sol4</strong>; La4 → <strong>Sol4</strong>.",
    "<strong>Double basses</strong> (− 8ve): Do3 → <strong>Do2</strong>; Fa3 → <strong>Fa2</strong>; Sol3 → <strong>Sol2</strong>; Do3 → <strong>Do2</strong>.",
  ],
  contenuCaption: "Real content chord by chord (real bass first, doublings folded in)",
  contenuList: [
    "<strong>Chord 1</strong>: Do2 (Db); Do3 (Vc, Bn, Timp.); Do4 (Horn); Mi4 (Vla., Cl.); Sol4 (Vl. II, Tpt.); Mi5 (Vl. I); Sol5 (Ob.); Mi6 (Fl.) → classes {Do, Mi, Sol}, bass Do → <strong>Do major, root position: I</strong>.",
    "<strong>Chord 2</strong>: Fa2 (Db); Fa3 (Vc, Bn); Do4 (Horn); Fa4 (Vla., Cl.); La4 (Vl. II, Tpt.); Fa5 (Vl. I); La5 (Ob.); Fa6 (Fl.) → {Fa, La, Do}, bass Fa → <strong>Fa major: IV</strong>. Notice: the fifth Do is present <strong>only in the horn</strong> (held common tone), and the timpani fall silent — tuned Do/Sol, they have no Fa.",
    "<strong>Chord 3</strong>: Sol2 (Db, Timp.); Sol3 (Vc, Bn); Ré4 (Horn); Fa4 (Vla., Cl.); Sol4 (Tpt.); Si4 (Vl. II); Ré5 (Vl. I); Si5 (Ob.); Ré6 (Fl.) → {Sol, Si, Ré, Fa}, bass Sol → <strong>complete dominant 7th: V7</strong>. The 7th (Fa4, violas + clarinet) is a note <strong>held</strong> since chord 2 — an audible preparation.",
    "<strong>Chord 4</strong>: Do2 (Db); Do3 (Vc, Bn, Timp.); Do4 (Horn); Mi4 (Vla., Cl.); Sol4 (Tpt.); Do5 (Vl. II); Mi5 (Vl. I); Do6 (Ob.); Mi6 (Fl.) → {Do, Mi, Sol}, bass Do → <strong>I</strong>. Exemplary voice leading: the leading tone Si4 (Vl. II) rises to Do5, the 7th Fa4 (Vla., Cl.) falls to Mi4, Ré (Horn, Vl. I, Fl.) joins Do or Mi.",
  ],
  vertBilan:
    "Summary: <strong>I – IV – V7 – I in Do major</strong>, a perfect cadence. Beneath its twelve staves, this tutti is a simple textbook progression — exactly what the verticality exercise is meant to reveal.",
  tuttiSonCaption:
    "The <strong>sounding</strong> reduction of the tutti — real bass (double basses − 8ve!) and folded pitch classes: I · IV · V7 · I.",
  btnTuttiSon: "Listen to the sounding reduction",

  redH2: "The piano reduction",
  redP1:
    "Reducing means <strong>translating the real pitches onto two playable staves</strong> — not copying. Hierarchy of what to keep: <strong>the real bass</strong> (always), <strong>the melody</strong> (always, at its original pitch if possible), <strong>the characteristic inner voice</strong> (here the viola line Mi4–Fa4–Fa4–Mi4, which carries the preparation and resolution of the 7th), then the harmonic filling. What to eliminate: <strong>unison and octave doublings</strong> (the flute doubling violins I at the octave disappears), <strong>tremolos and repeated figuration</strong> (fold them into held chords), <strong>repeated notes</strong> (one held note suffices). Sacrifice rule when the hand isn't enough: give up <strong>the fifth</strong> of the chord first, never the third nor the 7th. And squeeze the extreme octaves towards the centre of the keyboard.",
  redCaption: "The tutti of section 4 reduces like this (real pitches, two staves):",
  redHeaders: ["", "Chord 1 (I)", "Chord 2 (IV)", "Chord 3 (V7)", "Chord 4 (I)"],
  redRows: [
    { main: "Right hand (treble clef)", a: ["Mi4 – Sol4 – Mi5", "Fa4 – La4 – Fa5", "Fa4 – Si4 – Ré5", "Mi4 – Sol4 – Do5 – Mi5"] },
    { main: "Left hand (bass clef)", a: ["Do2 – Do3", "Fa2 – Fa3", "Sol2 – Sol3", "Do2 – Do3"] },
  ],
  redP2:
    "Note-by-note justification. Left hand: the real bass in octaves (sounding Db + Vc). Right hand: the violins I melody on top (Mi5–Fa5–Ré5–Mi5), the violas' inner voice at the bottom of the hand (Mi4–Fa4–Fa4–Mi4: the 7th Fa4 prepared then resolved onto Mi4), and between the two the harmonic complement (Sol4 then La4 then Si4 → Do5: the violins II line, with the rising leading tone). In chord 2, the fifth Do (which sounded only in the horn) is <strong>sacrificed</strong> — a direct application of the rule. In chord 4, Sol4 (trumpet) reappears under the fingers: the final chord is complete. Each hand fits within an octave: the reduction is <strong>sight-readable</strong> — that is the criterion. Compare by ear the “complete” tutti and the reduction: the harmony is identical.",
  redScoreCaption: "The engraved reduction — each hand fits within an octave: sight-readable.",
  btnReduction: "Listen to the reduction",
  btnTuttiComplet: "Listen to the complete tutti (sounding)",

  eqH2: "Balance and registers",
  eqP1:
    "Reducing is not enough: you must also judge <strong>what will be heard</strong>. The hierarchy of power is final — course 19 laid it down: <strong>a single fortissimo trumpet covers an entire violin section</strong>. The brass dominate, then the piercing high woodwinds (piccolo, oboe), then the mass of the strings, finally the middle woodwinds. The orchestrator compensates by three means: <strong>dynamics differentiated by family</strong> (brass <em>mf</em> while strings and woodwinds are <em>f</em> — the dynamics of a full score are not uniform, and deliberately so); <strong>doubling the melody at the octave</strong> to project it (flute over violins I, as in our tutti); <strong>spacing modelled on the harmonic series</strong>: wide intervals in the low register, close ones at the top — our tutti stacks Do2–Do3 (octave), then Do4–Mi4–Sol4 (thirds), never the reverse.",
  dispoH3: "The three classic layouts of a chord between two families",
  dispoIntro:
    "On the chord Do4–Mi4–Sol4–Do5 (Do major, four notes), given to 2 flutes and 2 clarinets in Si♭ (real pitches, the clarinets' written part in brackets):",
  dispoHeaders: ["Layout", "Do5", "Sol4", "Mi4", "Do4"],
  dispoRows: [
    { nom: "<strong>Juxtaposition</strong> (each family as a block)", cells: ["Fl. 1", "Fl. 2", "Cl. 1 (written Fa♯4)", "Cl. 2 (written Ré4)"] },
    { nom: "<strong>Interlocking</strong> (alternating voices)", cells: ["Fl. 1", "Cl. 1 (written La4)", "Fl. 2", "Cl. 2 (written Ré4)"] },
    { nom: "<strong>Enclosure</strong> (one family envelops the other)", cells: ["Fl. 1", "Cl. 1 (written La4)", "Cl. 2 (written Fa♯4)", "Fl. 2"] },
  ],
  dispoScoreCaption:
    "The three layouts engraved (real pitches) — stems up: flutes; stems down: clarinets. Bar 1: juxtaposition · bar 2: interlocking · bar 3: enclosure. On the piano all three sound identical: only the distribution of timbres changes.",
  btnDispo: "Listen to the chord (sounding)",
  eqP2:
    "Juxtaposition keeps the colours distinct (two storeys of timbre); interlocking melts the timbres into a homogeneous alloy; enclosure gives the colour of the <strong>outer</strong> family with the support of the inner one.",
  piegesWarn:
    "<strong>Classic balance traps</strong>: a melody given to the middle register of a woodwind while the string accompaniment occupies the same register (it disappears); a single horn facing a <em>f</em> string tutti (insufficient: the horn traditionally “counts” for half a trombone); the <strong>middle-register hole</strong> — lows and highs supplied, nothing between Do3 and Do4 — which makes the tutti hollow (course 19); and the uniform <em>ff</em> written for everyone, which guarantees that only the brass will be heard.",

  entrainH2: "Practice",
  methodeH3: "The method, in summary — the reading passes",
  methodeP:
    "1) architecture of the page (who is playing?); 2) real bass (double basses: − 8ve!); 3) melody and doublings; 4) transpositions resolved, families folded in; 5) chords named; 6) balance judgement. <strong>In this order, always.</strong>",
  exercicesH3: "Exercises",
  exATitre: "Exercise a — transposition drill",
  exAIntro:
    "Clef warm-up included. Give the real pitch of each written note, then check at the keyboard: play the written pitch, then the real one.",
  exAHeaders: ["Instrument", "Written", "Real (answer)"],
  exARows: [
    { instrument: "Clarinet in Si♭", ecrit: "Sol4 · La4 · Si4", reel: "<strong>Fa4 · Sol4 · La4</strong> (− major 2nd)" },
    { instrument: "Horn in Fa", ecrit: "Do5 · Si4 · Sol4", reel: "<strong>Fa4 · Mi4 · Do4</strong> (− perfect 5th)" },
    { instrument: "Alto saxophone in Mi♭", ecrit: "Mi5 · Do5 · La4", reel: "<strong>Sol4 · Mi♭4 · Do4</strong> (− major 6th)" },
  ],
  exAEchauffement:
    "Clef warm-up: in alto clef, write La3 (2nd line) and Mi4 (4th line); in tenor clef, write Fa3 (2nd line) and Do4 (4th line).",
  exBTitre: "Exercise b — a mini full score to reduce",
  exBIntro: "Four instruments, three chords, key of Sol major. <strong>Written</strong> pitches:",
  exBHeaders: ["Instrument (clef)", "Chord 1", "Chord 2", "Chord 3"],
  exBRows: [
    { instr: "Flute (treble)", a: ["Do5", "Do5", "Si4"] },
    { instr: "Clarinet in Si♭ (treble)", a: ["Fa♯4", "Sol♯4", "La4"] },
    { instr: "Horn in Fa (treble)", a: ["Ré4", "Mi4", "Ré4"] },
    { instr: "Cello (bass)", a: ["Do3", "Ré3", "Sol2"] },
  ],
  exBConsigne:
    "<em>Task</em>: resolve the transpositions, name the three chords and their Roman numerals in Sol major, then propose a two-staff reduction.",
  exBCorrige:
    "Transpositions — Cl. Si♭ (− major 2nd): Fa♯4 → <strong>Mi4</strong>, Sol♯4 → <strong>Fa♯4</strong>, La4 → <strong>Sol4</strong>; Horn in Fa (− perfect 5th): Ré4 → <strong>Sol3</strong>, Mi4 → <strong>La3</strong>, Ré4 → <strong>Sol3</strong>; flute and cello sound as written. Real content: chord 1 = Do3–Sol3–Mi4–Do5 → <strong>Do major = IV</strong>; chord 2 = Ré3–La3–Fa♯4–Do5 → <strong>Ré complete dominant 7th = V7</strong> (the 7th Do5, held in the flute since chord 1, is prepared); chord 3 = Sol2–Sol3–Sol4–Si4 → <strong>Sol major = I</strong>, fifth omitted and root tripled — normal after a complete V7: the leading tone Fa♯4 rises to Sol4, the 7th Do5 falls to Si4. Summary: <strong>IV – V7 – I, a perfect cadence in Sol major.</strong> Proposed reduction: LH Do3+Sol3 / Ré3+La3 / Sol2+Sol3; RH Mi4+Do5 / Fa♯4+Do5 / Sol4+Si4.",
  exBScoreCaption:
    "The proposed reduction, engraved (real pitches): RH Mi4+Do5 · Fa♯4+Do5 · Sol4+Si4; LH Do3+Sol3 · Ré3+La3 · Sol2+Sol3.",
  voirCorrige: "Show the answer",
  masquerCorrige: "Hide the answer",
  corrigeLabel: "Answer",
  capstoneH3: "Exercise c — synthesis with the analyser",
  capstoneP:
    "Take a short royalty-free orchestral excerpt (4 to 8 bars of a symphony chorale, a hymn, a public-domain reduction), reduce it yourself at real pitch onto two staves, export the reduction as <strong>MusicXML</strong> and import it into the <strong>/analyse-partition</strong> tool: compare the chords the tool identifies with your vertical analysis. Any discrepancy has one of these three causes — a forgotten transposition (double basses!), a misread C clef, a doubling taken for a new note. That is precisely the checklist of this course.",
  linkAnalyseur: {
    titre: "Score analyser",
    desc: "Import your MusicXML reduction and compare the identified chords with your vertical analysis.",
  },

  quizH3: "Quiz",
  questions: [
    {
      q: "The clarinet in Si♭ reads Mi4. What is the real pitch?",
      opts: ["Fa♯4", "Ré4", "Mi4", "Ré♭4"],
      a: 1,
      fb: "The clarinet in Si♭ sounds a major 2nd below the written pitch: Mi4 − major 2nd = Ré4.",
    },
    {
      q: "The horn in Fa reads Ré5. Real pitch?",
      opts: ["La4", "Ré4", "Sol4", "La5"],
      a: 2,
      fb: "The horn in Fa sounds a perfect 5th lower: Ré5 − perfect 5th = Sol4.",
    },
    {
      q: "The alto saxophone in Mi♭ reads Sol4. Real pitch?",
      opts: ["Si♭3", "Mi♭4", "Si3", "Sol3"],
      a: 0,
      fb: "The alto sax sounds a major 6th lower: Sol4 − major 6th = Si♭3.",
    },
    {
      q: "The clarinet in La reads Do5. Real pitch?",
      opts: ["Si♭4", "La3", "Mi♭5", "La4"],
      a: 3,
      fb: "The clarinet in La sounds a minor 3rd lower: Do5 − minor 3rd = La4.",
    },
    {
      q: "The tenor saxophone in Si♭ reads Do4. Real pitch?",
      opts: ["Si♭3", "Si♭2", "Ré3", "Do3"],
      a: 1,
      fb: "The tenor sounds a major 9th lower (octave + major 2nd): Do4 − 8ve = Do3, − major 2nd = Si♭2. Not to be confused with the clarinet in Si♭ (major 2nd only).",
    },
    {
      q: "In the C clef on the 3rd line (alto), which note sits on the first line (at the bottom)?",
      opts: ["Fa3", "Mi3", "Sol3", "Ré3"],
      a: 0,
      fb: "Lines of the alto clef: Fa3 – La3 – Do4 – Mi4 – Sol4 (middle C on the 3rd line).",
    },
    {
      q: "In the C clef on the 4th line (tenor), which note sits on the 5th line (at the top)?",
      opts: ["Ré4", "Sol4", "Mi4", "Do4"],
      a: 2,
      fb: "Lines of the tenor clef: Ré3 – Fa3 – La3 – Do4 – Mi4 (middle C on the 4th line).",
    },
    {
      q: "Cellos and double basses read the same part: Do3. What is the true bass of the chord?",
      opts: ["Do3 (unison)", "Do4", "Do1", "Do2, in the double basses"],
      a: 3,
      fb: "The double bass sounds an octave below the written pitch: the real bass is Do2, an octave below the cellos — the automatic octave doubling of the low sections.",
    },
    {
      q: "A chorale gives the melody to the oboes (f) doubled by the trumpets (f). What will be heard?",
      opts: [
        "Mostly the trumpets: they should be marked mf",
        "A balanced alloy",
        "Mostly the oboes",
        "Nothing: the timbres cancel out",
      ],
      a: 0,
      fb: "The brass acoustically dominate the woodwinds at equal dynamics (course 19): dynamics are differentiated (trumpets mf, oboes f) to balance the doubling.",
    },
    {
      q: "The English horn reads Do5. Real pitch?",
      opts: ["Sol4", "Fa4", "Fa5", "Do4"],
      a: 1,
      fb: "Like the horn in Fa, the English horn sounds a perfect 5th lower: Do5 − perfect 5th = Fa4.",
    },
  ],

  listenBtn: "Listen",
};

// ════════════════════════════════════════════════════════════════════════════
// DE
// ════════════════════════════════════════════════════════════════════════════

const de: Cours47Locale = {
  maitreConcept: "Das Orchester lesen — Partitur, Transpositionen, Balance",
  maitreAnecdote:
    "Der Komponist und Dirigent Hector Berlioz veröffentlichte 1844 die „Grande Traité d'instrumentation et d'orchestration modernes“, das erste Werk, das jedes Instrument methodisch beschreibt — Umfang, Klangfarbe, Transposition — und die Kunst, sie zu kombinieren. Als reisender Dirigent quer durch Europa leitete er seine monumentalen Partituren, indem er Dutzende Systeme auf einen Blick las, und verlangte von den Kopisten makellose Partituren.",
  maitreLesson:
    "Eine Partitur liest man mit Methode: die Ordnung der Familien, die Schlüssel, die aufgelösten Transpositionen — dann beurteilt das Ohr die Balance. Die schwärzeste Seite verbirgt oft eine Schulharmonie.",

  condH2: "Eine Orchesterpartitur lesen",
  condP1:
    "Zum ersten Mal eine Partitur aufzuschlagen ist einschüchternd: zwanzig Systeme, fünf Schlüssel, italienische Namen. Aber die Seite ist <strong>streng geordnet</strong>, und diese Ordnung ist seit dem 19. Jahrhundert dieselbe, von oben nach unten: <strong>Holzbläser</strong> (Flöten, Oboen, Klarinetten, Fagotte), <strong>Blechbläser</strong> (Hörner, Trompeten, Posaunen, Tuba), <strong>Pauken und Schlagwerk</strong>, dann die eventuellen Zwischenstimmen (<strong>Harfe, Celesta, Klavier</strong>, Solostimmen und Chor), und schließlich die <strong>Streicher</strong> (Violinen I, Violinen II, Bratschen, Violoncelli, Kontrabässe). Innerhalb jeder Familie steht das Hohe oben, das Tiefe unten. Die Instrumente sind fast immer <strong>italienisch</strong> benannt — und eine deutsche Partitur birgt eine berühmte Falle: <strong>„in B“ bedeutet in Si♭</strong> (das deutsche B ohne Vorzeichen — unser Si — schreibt sich „H“).",
  nomsCaption: "Instrumentennamen: Italienisch · Französisch · Deutsch",
  nomsHeaders: ["Italienisch", "Französisch", "Deutsch"],
  nomsRows: [
    { it: "Flauto (Fl.) / Ottavino", fr: "Flûte / Piccolo", de: "Flöte / Kleine Flöte" },
    { it: "Oboe (Ob.) / Corno inglese", fr: "Hautbois / Cor anglais", de: "Oboe / Englischhorn" },
    { it: "Clarinetto (Cl.)", fr: "Clarinette", de: "Klarinette („in B“ = in Si♭!)" },
    { it: "Fagotto (Fg.) / Controfagotto", fr: "Basson / Contrebasson", de: "Fagott / Kontrafagott" },
    { it: "Corno (Cor.)", fr: "Cor", de: "Horn" },
    { it: "Tromba (Tr.)", fr: "Trompette", de: "Trompete" },
    { it: "Trombone (Trb.) — <em>Ottoni</em> = die Blechbläser", fr: "Trombone", de: "Posaune" },
    { it: "Timpani (Timp.)", fr: "Timbales", de: "Pauken" },
    { it: "Arpa", fr: "Harpe", de: "Harfe" },
    { it: "Violino (Vl.) / Viola (Vla.)", fr: "Violon / Alto", de: "Violine (Geige) / Bratsche" },
    { it: "Violoncello (Vc.) / Contrabbasso (Cb.)", fr: "Violoncelle / Contrebasse", de: "Violoncello / Kontrabass" },
  ],
  balayageH3: "Wie man eine Seite überfliegt",
  balayageP:
    "Niemals Zeile für Zeile von oben nach unten. Drei Durchgänge: <strong>1) der Bass</strong> (Violoncelli/Kontrabässe, Fagotte, Tuba — das harmonische Fundament, vgl. Abschnitt 4); <strong>2) die Melodie</strong> (oft Violinen I, Flöte oder Oboe — suchen Sie die aktivste oder mit <em>solo</em> bezeichnete Linie); <strong>3) die Füllung</strong> (wer hält die Mitteltöne, wer verdoppelt wen — Rollen und Verdopplungen sind die des Kurses 19). Die <strong>Studierzeichen</strong> (Buchstaben A, B, C… oder eingerahmte Taktzahlen) dienen der Orientierung in der Probe: Nennen Sie sie immer („4 nach B“) — das ist die gemeinsame Sprache von Pult und Dirigent.",
  linkCours19: {
    titre: "Kurs 19 — Einführung in die Orchestrierung",
    desc: "Die vier Familien, Umfänge, Rollen und Verdopplungen: die Grundlagen dieses Kurses, hier nicht wiederholt.",
  },
  linkGo: "Öffnen →",

  clesH2: "Die Schlüssel",
  clesP1:
    "Warum liest die Bratsche nicht im Violinschlüssel? Weil ihre zentrale Lage (Do3–La5, vgl. Kurs 19) mitten in die Hilfslinien unter dem System fiele. Der <strong>C-Schlüssel</strong> löst dieses Problem: Er legt das <strong>eingestrichene C (Do4)</strong> auf die Linie, die er umschließt. <strong>C-Schlüssel auf der 3. Linie (Altschlüssel)</strong>: Do4 = 3. Linie — der ständige Schlüssel der Bratsche. <strong>C-Schlüssel auf der 4. Linie (Tenorschlüssel)</strong>: Do4 = 4. Linie — Violoncelli, Fagotte und Posaunen wechseln in ihrer hohen Lage dorthin, um Hilfslinien über dem Bassschlüssel zu vermeiden (ein Violoncello, das um Sol3–Sol4 singt, schreibt sich im Tenorschlüssel weit lesbarer).",
  clesHeaders: ["Schlüssel", "Instrumente", "Das eingestrichene C (Do4) steht…"],
  clesRows: [
    { cle: "Violinschlüssel", instruments: "Violinen, Flöte, Oboe, Klarinette, Horn, Trompete", do4: "1. Hilfslinie <strong>unter</strong> dem System" },
    { cle: "C-Schlüssel, 3. Linie (Alt)", instruments: "Bratsche (ständig); Altposaune (altes Repertoire)", do4: "<strong>3. Linie</strong>" },
    { cle: "C-Schlüssel, 4. Linie (Tenor)", instruments: "Violoncello, Fagott, Tenorposaune — in hoher Lage", do4: "<strong>4. Linie</strong>" },
    { cle: "Bassschlüssel", instruments: "Violoncello, Kontrabass, Fagott, Posaunen, Tuba, Pauken", do4: "1. Hilfslinie <strong>über</strong> dem System" },
  ],
  ancresH3: "Die Ankernoten-Methode",
  ancresP:
    "Die einzige, die in der Praxis trägt: <strong>die Linien auswendig lernen</strong>. Im Altschlüssel lauten die Linien <strong>Fa3 – La3 – Do4 – Mi4 – Sol4</strong>; im Tenorschlüssel <strong>Ré3 – Fa3 – La3 – Do4 – Mi4</strong>. Zwei exakte Beispiele als Eichmaße: <strong>La3 im Altschlüssel = 2. Linie</strong>; <strong>Mi4 im Tenorschlüssel = 5. Linie</strong> (die oberste Linie). Eine mögliche Krücke, schnell aufzugeben: „wie im Violinschlüssel“ lesen und dann korrigieren — im Altschlüssel eine Sekunde hinauf und eine Oktave hinunter; im Tenorschlüssel eine Sekunde hinunter, dann eine Oktave. Üben Sie fünf Minuten täglich: Geläufigkeit in den C-Schlüsseln ist absolute Voraussetzung für Abschnitt 4.",
  ancresUt3Label: "C-Schlüssel auf der 3. Linie (Alt) — die fünf Linien",
  ancresUt4Label: "C-Schlüssel auf der 4. Linie (Tenor) — die fünf Linien",
  ancresLignesHeaders: ["1. Linie (unten)", "2. Linie", "3. Linie", "4. Linie", "5. Linie (oben)"],

  transpoH2: "Die transponierenden Instrumente",
  transpoP1:
    "Das Prinzip passt in einen Satz: <strong>Ein Instrument „in X“ lässt X erklingen, wenn es Do liest</strong>. Die Stimme ist in einer konventionellen Tonhöhe notiert, die die Griffe des Musikers bewahrt (die ganze Klarinetten- oder Saxophonfamilie liest sich mit denselben Griffen) oder von den Naturhörnern und -trompeten herrührt, die einst in allen Stimmungen gebaut wurden. Für den Partiturleser zählt nur eines: <strong>um wie viel und in welche Richtung transponieren, um die reale Tonhöhe zu hören</strong>.",
  transpoCaption: "DIE Referenztabelle des Kurses — jede Zeile geprüft, auswendig zu können. Hören Sie jede Zeile: erst notiert, dann klingend.",
  transpoHeaders: ["Instrument", "Notiert → klingt", "Exaktes Beispiel", "Um die reale Tonhöhe zu hören", "Anhören"],
  transpoRows: [
    { instrument: "Piccolo", regle: "eine <strong>Oktave höher</strong>", exemple: "notiert Do4 → klingt Do5", methode: "transponieren Sie eine Oktave <strong>nach oben</strong>" },
    { instrument: "Englischhorn (in Fa)", regle: "eine <strong>reine Quinte tiefer</strong>", exemple: "notiert Do4 → klingt Fa3", methode: "transponieren Sie eine reine Quinte <strong>nach unten</strong>" },
    { instrument: "Klarinette in Si♭", regle: "eine <strong>große Sekunde tiefer</strong>", exemple: "notiert Ré4 → klingt Do4", methode: "transponieren Sie eine große Sekunde <strong>nach unten</strong>" },
    { instrument: "Klarinette in La", regle: "eine <strong>kleine Terz tiefer</strong>", exemple: "notiert Mi♭4 → klingt Do4 (notiert Do4 → klingt La3)", methode: "transponieren Sie eine kleine Terz <strong>nach unten</strong>" },
    { instrument: "Horn in Fa", regle: "eine <strong>reine Quinte tiefer</strong>", exemple: "notiert Sol4 → klingt Do4 (notiert Do4 → klingt Fa3)", methode: "transponieren Sie eine reine Quinte <strong>nach unten</strong>" },
    { instrument: "Trompete in Si♭", regle: "eine <strong>große Sekunde tiefer</strong>", exemple: "notiert Ré4 → klingt Do4", methode: "transponieren Sie eine große Sekunde <strong>nach unten</strong>" },
    { instrument: "Altsaxophon in Mi♭", regle: "eine <strong>große Sexte tiefer</strong>", exemple: "notiert Do4 → klingt Mi♭3 (notiert La4 → klingt Do4)", methode: "transponieren Sie eine große Sexte <strong>nach unten</strong>" },
    { instrument: "Tenorsaxophon in Si♭", regle: "eine <strong>große None tiefer</strong> (Oktave + große Sekunde)", exemple: "notiert Do4 → klingt Si♭2 (notiert Ré5 → klingt Do4)", methode: "transponieren Sie eine Oktave, dann eine große Sekunde <strong>nach unten</strong>" },
    { instrument: "Kontrabass", regle: "eine <strong>Oktave tiefer</strong>", exemple: "notiert Do3 → klingt Do2", methode: "transponieren Sie eine Oktave <strong>nach unten</strong>" },
    { instrument: "Kontrafagott", regle: "eine <strong>Oktave tiefer</strong>", exemple: "notiert Do3 → klingt Do2", methode: "transponieren Sie eine Oktave <strong>nach unten</strong>" },
    { instrument: "Celesta", regle: "eine <strong>Oktave höher</strong>", exemple: "notiert Do4 → klingt Do5", methode: "transponieren Sie eine Oktave <strong>nach oben</strong>" },
  ],
  transpoP2:
    "<strong>Praxishinweise.</strong> Flöte, Oboe, Fagotte, Posaunen, Tuba, Pauken und alle Streicher außer dem Kontrabass klingen <strong>wie notiert</strong> (die Trompete „in Ut“ ebenfalls). Im klassischen und romantischen Repertoire wechseln die Hörner die Stimmung von Werk zu Werk („Corni in E♭, in D…“): Die Regel bleibt dieselbe — notiert Do → es klingt der Namenston des Horns, <strong>darunter</strong> (ein Horn in Mi♭ klingt eine große Sexte tiefer: notiert Do4 → klingt Mi♭3). Eine Vorzeichen-Konsequenz, die man kennen muss: Damit ein Ensemble in Do-Dur klingt, ist die Stimme der Klarinette oder Trompete in Si♭ in <strong>Ré-Dur</strong> notiert (2 Kreuze), die des Horns in Fa in <strong>Sol-Dur</strong> (Hornstimmen werden übrigens traditionell ohne Vorzeichnung geschrieben, mit Akzidentien).",
  clusterH3: "Durchgearbeitetes Beispiel — ein „Cluster“, der keiner ist",
  clusterP:
    "Auf dem Papier drei benachbarte Töne: Klarinette in Si♭ <strong>notiert Fa♯4</strong>, Horn in Fa <strong>notiert Sol4</strong>, Trompete in Si♭ <strong>notiert La4</strong>. Rechnen wir: Kl. Si♭ Fa♯4 − große Sekunde = <strong>Mi4 real</strong>; Horn in Fa Sol4 − reine Quinte = <strong>Do4 real</strong>; Tr. Si♭ La4 − große Sekunde = <strong>Sol4 real</strong>. Klingendes Ergebnis: <strong>Do4 – Mi4 – Sol4</strong>, ein enger <strong>Do-Dur</strong>-Dreiklang in Grundstellung. Was wie ein Cluster Fa♯–Sol–La aussah, ist eine vollkommene Konsonanz: Deshalb liest man eine Partitur <strong>niemals</strong> „mit bloßem Auge“. Spielen Sie erst die drei notierten Töne, dann die drei realen Tonhöhen — der Kontrast ist sofort hörbar.",
  clusterCaption: "Takt 1: der notierte Pseudo-Cluster (Fa♯4 · Sol4 · La4) — Takt 2: die realen Tonhöhen (Do4 · Mi4 · Sol4).",
  btnEcrit: "Notiert",
  btnSonnant: "Klingend (real)",

  vertH2: "Die Vertikale: die Harmonie unter dem Orchester finden",
  vertP1:
    "Eine Methode in vier Schritten, immer in dieser Reihenfolge. <strong>1) Der reale Bass</strong>: Finden Sie die tiefste tatsächlich klingende Linie — Violoncelli/Kontrabässe (Achtung: Kontrabässe klingen eine Oktave unter dem, was sie lesen), Fagotte, Tuba. Sie bestimmt die Umkehrung des Akkords. <strong>2) Jede Familie in realen Tonhöhen</strong>: Reduzieren Sie die Holzbläser, dann die Blechbläser, dann die Streicher auf ihren Tonhöhengehalt, transponieren Sie, was transponiert werden muss (Abschnitt 3), und lesen Sie die C-Schlüssel (Abschnitt 2). <strong>3) Verdopplungen und Oktaven einfalten</strong>: Ein im Einklang oder in der Oktave verdoppelter Ton (Kurs 19) zählt als Tonklasse nur einmal. <strong>4) Den Akkord benennen</strong> über dem Bass: Grundton, Umkehrung, eventuelle Septime — dann seine Stufe in der Tonart.",
  tuttiH3: "Durchgearbeitetes Beispiel — ein Tutti aus vier Akkorden in Do-Dur",
  tuttiIntro:
    "Hier, Instrument für Instrument, die <strong>notierten</strong> Tonhöhen (die angegebenen Schlüssel sind die der Partitur):",
  tuttiHeaders: ["Instrument (Schlüssel)", "Akkord 1", "Akkord 2", "Akkord 3", "Akkord 4"],
  tuttiRows: [
    { instr: "Flöte (Violinschl.)", a: ["Mi6", "Fa6", "Ré6", "Mi6"] },
    { instr: "Oboe (Violinschl.)", a: ["Sol5", "La5", "Si5", "Do6"] },
    { instr: "Klarinette in Si♭ (Violinschl.)", a: ["<strong>Fa♯4</strong>", "<strong>Sol4</strong>", "<strong>Sol4</strong>", "<strong>Fa♯4</strong>"] },
    { instr: "Fagott (Bassschl.)", a: ["Do3", "Fa3", "Sol3", "Do3"] },
    { instr: "Horn in Fa (Violinschl.)", a: ["<strong>Sol4</strong>", "<strong>Sol4</strong>", "<strong>La4</strong>", "<strong>Sol4</strong>"] },
    { instr: "Trompete in Si♭ (Violinschl.)", a: ["<strong>La4</strong>", "<strong>Si4</strong>", "<strong>La4</strong>", "<strong>La4</strong>"] },
    { instr: "Pauken Do–Sol (Bassschl.)", a: ["Do3", "—", "Sol2", "Do3"] },
    { instr: "Violinen I (Violinschl.)", a: ["Mi5", "Fa5", "Ré5", "Mi5"] },
    { instr: "Violinen II (Violinschl.)", a: ["Sol4", "La4", "Si4", "Do5"] },
    { instr: "Bratschen (Altschl.)", a: ["Mi4", "Fa4", "Fa4", "Mi4"] },
    { instr: "Violoncelli (Bassschl.)", a: ["Do3", "Fa3", "Sol3", "Do3"] },
    { instr: "Kontrabässe (Bassschl.)", a: ["<strong>Do3</strong>", "<strong>Fa3</strong>", "<strong>Sol3</strong>", "<strong>Do3</strong>"] },
  ],
  resolCaption: "Auflösung der Transpositionen (alles Übrige klingt wie notiert)",
  resolRows: [
    "<strong>Klarinette in Si♭</strong> (− große Sekunde): Fa♯4 → <strong>Mi4</strong>; Sol4 → <strong>Fa4</strong>; Sol4 → <strong>Fa4</strong>; Fa♯4 → <strong>Mi4</strong>.",
    "<strong>Horn in Fa</strong> (− reine Quinte): Sol4 → <strong>Do4</strong>; Sol4 → <strong>Do4</strong>; La4 → <strong>Ré4</strong>; Sol4 → <strong>Do4</strong>.",
    "<strong>Trompete in Si♭</strong> (− große Sekunde): La4 → <strong>Sol4</strong>; Si4 → <strong>La4</strong>; La4 → <strong>Sol4</strong>; La4 → <strong>Sol4</strong>.",
    "<strong>Kontrabässe</strong> (− 8ve): Do3 → <strong>Do2</strong>; Fa3 → <strong>Fa2</strong>; Sol3 → <strong>Sol2</strong>; Do3 → <strong>Do2</strong>.",
  ],
  contenuCaption: "Realer Gehalt Akkord für Akkord (realer Bass zuerst, Verdopplungen eingefaltet)",
  contenuList: [
    "<strong>Akkord 1</strong>: Do2 (Kb); Do3 (Vc, Fg, Pk.); Do4 (Horn); Mi4 (Br., Kl.); Sol4 (Vl. II, Tr.); Mi5 (Vl. I); Sol5 (Ob.); Mi6 (Fl.) → Klassen {Do, Mi, Sol}, Bass Do → <strong>Do-Dur, Grundstellung: I</strong>.",
    "<strong>Akkord 2</strong>: Fa2 (Kb); Fa3 (Vc, Fg); Do4 (Horn); Fa4 (Br., Kl.); La4 (Vl. II, Tr.); Fa5 (Vl. I); La5 (Ob.); Fa6 (Fl.) → {Fa, La, Do}, Bass Fa → <strong>Fa-Dur: IV</strong>. Beachten Sie: Die Quinte Do erklingt <strong>nur im Horn</strong> (gehaltener gemeinsamer Ton), und die Pauken schweigen — auf Do/Sol gestimmt, haben sie kein Fa.",
    "<strong>Akkord 3</strong>: Sol2 (Kb, Pk.); Sol3 (Vc, Fg); Ré4 (Horn); Fa4 (Br., Kl.); Sol4 (Tr.); Si4 (Vl. II); Ré5 (Vl. I); Si5 (Ob.); Ré6 (Fl.) → {Sol, Si, Ré, Fa}, Bass Sol → <strong>vollständiger Dominantseptakkord: V7</strong>. Die Septime (Fa4, Bratschen + Klarinette) ist ein seit Akkord 2 <strong>gehaltener</strong> Ton — hörbare Vorbereitung.",
    "<strong>Akkord 4</strong>: Do2 (Kb); Do3 (Vc, Fg, Pk.); Do4 (Horn); Mi4 (Br., Kl.); Sol4 (Tr.); Do5 (Vl. II); Mi5 (Vl. I); Do6 (Ob.); Mi6 (Fl.) → {Do, Mi, Sol}, Bass Do → <strong>I</strong>. Vorbildliche Stimmführung: Der Leitton Si4 (Vl. II) steigt nach Do5, die Septime Fa4 (Br., Kl.) fällt nach Mi4, Ré (Horn, Vl. I, Fl.) geht nach Do oder Mi.",
  ],
  vertBilan:
    "Bilanz: <strong>I – IV – V7 – I in Do-Dur</strong>, ein Ganzschluss. Unter seinen zwölf Systemen ist dieses Tutti eine schlichte Schulprogression — genau das soll die Vertikalitätsübung offenlegen.",
  tuttiSonCaption:
    "Die <strong>klingende</strong> Reduktion des Tuttis — realer Bass (Kontrabässe − 8ve!) und eingefaltete Tonklassen: I · IV · V7 · I.",
  btnTuttiSon: "Die klingende Reduktion anhören",

  redH2: "Der Klavierauszug",
  redP1:
    "Reduzieren heißt, <strong>die realen Tonhöhen auf zwei spielbare Systeme zu übersetzen</strong> — nicht abzuschreiben. Hierarchie dessen, was man behält: <strong>der reale Bass</strong> (immer), <strong>die Melodie</strong> (immer, möglichst in Originallage), <strong>die charakteristische Mittelstimme</strong> (hier die Bratschenlinie Mi4–Fa4–Fa4–Mi4, die Vorbereitung und Auflösung der Septime trägt), dann die harmonische Füllung. Was man streicht: die <strong>Verdopplungen</strong> im Einklang und in der Oktave (die Flöte, die die Violinen I in der Oktave verdoppelt, verschwindet), die <strong>Tremoli und Repetitionsfiguren</strong> (man faltet sie zu gehaltenen Akkorden), die <strong>Tonrepetitionen</strong> (ein gehaltener Ton genügt). Opferregel, wenn die Hand nicht reicht: Man gibt zuerst <strong>die Quinte</strong> des Akkords auf, niemals die Terz oder die Septime. Und man rückt die äußersten Oktaven zur Mitte der Klaviatur.",
  redCaption: "Das Tutti aus Abschnitt 4 reduziert sich so (reale Tonhöhen, zwei Systeme):",
  redHeaders: ["", "Akkord 1 (I)", "Akkord 2 (IV)", "Akkord 3 (V7)", "Akkord 4 (I)"],
  redRows: [
    { main: "Rechte Hand (Violinschlüssel)", a: ["Mi4 – Sol4 – Mi5", "Fa4 – La4 – Fa5", "Fa4 – Si4 – Ré5", "Mi4 – Sol4 – Do5 – Mi5"] },
    { main: "Linke Hand (Bassschlüssel)", a: ["Do2 – Do3", "Fa2 – Fa3", "Sol2 – Sol3", "Do2 – Do3"] },
  ],
  redP2:
    "Begründung Ton für Ton. Linke Hand: der reale Bass in Oktaven (klingender Kb + Vc). Rechte Hand: die Melodie der Violinen I oben (Mi5–Fa5–Ré5–Mi5), die Bratschen-Mittelstimme unten in der Hand (Mi4–Fa4–Fa4–Mi4: die Septime Fa4 vorbereitet, dann nach Mi4 aufgelöst), und dazwischen die harmonische Ergänzung (Sol4, dann La4, dann Si4 → Do5: die Linie der Violinen II, mit dem steigenden Leitton). In Akkord 2 wird die Quinte Do (die nur im Horn klang) <strong>geopfert</strong> — direkte Anwendung der Regel. In Akkord 4 kehrt Sol4 (Trompete) unter die Finger zurück: Der Schlussakkord ist vollständig. Jede Hand bleibt innerhalb der Oktave: Die Reduktion ist <strong>vom Blatt spielbar</strong> — das ist das Kriterium. Vergleichen Sie mit dem Ohr das „vollständige“ Tutti und die Reduktion: Die Harmonie ist identisch.",
  redScoreCaption: "Die gestochene Reduktion — jede Hand bleibt innerhalb der Oktave: vom Blatt spielbar.",
  btnReduction: "Die Reduktion anhören",
  btnTuttiComplet: "Das vollständige Tutti anhören (klingend)",

  eqH2: "Balance und Register",
  eqP1:
    "Reduzieren genügt nicht: Man muss auch beurteilen, <strong>was zu hören sein wird</strong>. Die Hierarchie der Klangstärken ist unerbittlich — Kurs 19 hat sie festgehalten: <strong>Eine einzige Fortissimo-Trompete deckt ein ganzes Violinpult zu</strong>. Die Blechbläser dominieren, dann die scharfen hohen Holzbläser (Piccolo, Oboe), dann die Masse der Streicher, zuletzt die mittleren Holzbläser. Der Orchestrator gleicht mit drei Mitteln aus: <strong>nach Familien differenzierte Dynamik</strong> (Blech <em>mf</em>, wenn Streicher und Holz <em>f</em> sind — die Dynamik einer Partitur ist nicht einheitlich, und zwar absichtlich); <strong>die Oktavverdopplung der Melodie</strong>, um sie zu projizieren (Flöte über Violinen I, wie in unserem Tutti); <strong>die an der Obertonreihe orientierte Spreizung</strong>: weite Intervalle in der Tiefe, enge in der Höhe — unser Tutti schichtet Do2–Do3 (Oktave), dann Do4–Mi4–Sol4 (Terzen), niemals umgekehrt.",
  dispoH3: "Die drei klassischen Anordnungen eines Akkords zwischen zwei Familien",
  dispoIntro:
    "Auf dem Akkord Do4–Mi4–Sol4–Do5 (Do-Dur, vier Töne), 2 Flöten und 2 Klarinetten in Si♭ anvertraut (reale Tonhöhen, notierte Klarinettenstimme in Klammern):",
  dispoHeaders: ["Anordnung", "Do5", "Sol4", "Mi4", "Do4"],
  dispoRows: [
    { nom: "<strong>Schichtung</strong> (jede Familie als Block)", cells: ["Fl. 1", "Fl. 2", "Kl. 1 (notiert Fa♯4)", "Kl. 2 (notiert Ré4)"] },
    { nom: "<strong>Verschränkung</strong> (alternierende Stimmen)", cells: ["Fl. 1", "Kl. 1 (notiert La4)", "Fl. 2", "Kl. 2 (notiert Ré4)"] },
    { nom: "<strong>Umschließung</strong> (eine Familie umhüllt die andere)", cells: ["Fl. 1", "Kl. 1 (notiert La4)", "Kl. 2 (notiert Fa♯4)", "Fl. 2"] },
  ],
  dispoScoreCaption:
    "Die drei Anordnungen gestochen (reale Tonhöhen) — Hälse nach oben: Flöten; Hälse nach unten: Klarinetten. Takt 1: Schichtung · Takt 2: Verschränkung · Takt 3: Umschließung. Am Klavier klingen alle drei identisch: Nur die Verteilung der Klangfarben ändert sich.",
  btnDispo: "Den Akkord anhören (klingend)",
  eqP2:
    "Die Schichtung hält die Farben getrennt (zwei Klangfarben-Etagen); die Verschränkung schmilzt die Klangfarben zu einer homogenen Legierung; die Umschließung gibt die Farbe der <strong>äußeren</strong> Familie mit der Stütze der inneren.",
  piegesWarn:
    "<strong>Klassische Balance-Fallen</strong>: die Melodie im Mittelregister eines Holzbläsers, während die Streicherbegleitung dasselbe Register besetzt (sie verschwindet); ein einzelnes Horn gegenüber einem <em>f</em>-Streichertutti (unzureichend: das Horn „zählt“ traditionell für eine halbe Posaune); das <strong>Mittenloch</strong> — Tiefen und Höhen besetzt, nichts zwischen Do3 und Do4 — das das Tutti hohl macht (Kurs 19); und das einheitliche <em>ff</em> für alle, das garantiert, dass man nur die Blechbläser hört.",

  entrainH2: "Training",
  methodeH3: "Die Methode im Überblick — die Lesedurchgänge",
  methodeP:
    "1) Architektur der Seite (wer spielt?); 2) realer Bass (Kontrabässe: − 8ve!); 3) Melodie und Verdopplungen; 4) Transpositionen aufgelöst, Familien eingefaltet; 5) Akkorde benannt; 6) Balance-Urteil. <strong>In dieser Reihenfolge, immer.</strong>",
  exercicesH3: "Übungen",
  exATitre: "Übung a — Transpositionsdrill",
  exAIntro:
    "Schlüssel-Aufwärmen inbegriffen. Geben Sie die reale Tonhöhe jeder notierten Note an, dann prüfen Sie am Klavier: Spielen Sie erst notiert, dann real.",
  exAHeaders: ["Instrument", "Notiert", "Real (Lösung)"],
  exARows: [
    { instrument: "Klarinette in Si♭", ecrit: "Sol4 · La4 · Si4", reel: "<strong>Fa4 · Sol4 · La4</strong> (− große Sekunde)" },
    { instrument: "Horn in Fa", ecrit: "Do5 · Si4 · Sol4", reel: "<strong>Fa4 · Mi4 · Do4</strong> (− reine Quinte)" },
    { instrument: "Altsaxophon in Mi♭", ecrit: "Mi5 · Do5 · La4", reel: "<strong>Sol4 · Mi♭4 · Do4</strong> (− große Sexte)" },
  ],
  exAEchauffement:
    "Schlüssel-Aufwärmen: Schreiben Sie im Altschlüssel La3 (2. Linie) und Mi4 (4. Linie); im Tenorschlüssel Fa3 (2. Linie) und Do4 (4. Linie).",
  exBTitre: "Übung b — eine Mini-Partitur zum Reduzieren",
  exBIntro: "Vier Instrumente, drei Akkorde, Tonart Sol-Dur. <strong>Notierte</strong> Tonhöhen:",
  exBHeaders: ["Instrument (Schlüssel)", "Akkord 1", "Akkord 2", "Akkord 3"],
  exBRows: [
    { instr: "Flöte (Violinschl.)", a: ["Do5", "Do5", "Si4"] },
    { instr: "Klarinette in Si♭ (Violinschl.)", a: ["Fa♯4", "Sol♯4", "La4"] },
    { instr: "Horn in Fa (Violinschl.)", a: ["Ré4", "Mi4", "Ré4"] },
    { instr: "Violoncello (Bassschl.)", a: ["Do3", "Ré3", "Sol2"] },
  ],
  exBConsigne:
    "<em>Aufgabe</em>: Lösen Sie die Transpositionen auf, benennen Sie die drei Akkorde und ihre Stufen in Sol-Dur, dann schlagen Sie eine Reduktion auf zwei Systemen vor.",
  exBCorrige:
    "Transpositionen — Kl. Si♭ (− große Sekunde): Fa♯4 → <strong>Mi4</strong>, Sol♯4 → <strong>Fa♯4</strong>, La4 → <strong>Sol4</strong>; Horn in Fa (− reine Quinte): Ré4 → <strong>Sol3</strong>, Mi4 → <strong>La3</strong>, Ré4 → <strong>Sol3</strong>; Flöte und Violoncello klingen wie notiert. Realer Gehalt: Akkord 1 = Do3–Sol3–Mi4–Do5 → <strong>Do-Dur = IV</strong>; Akkord 2 = Ré3–La3–Fa♯4–Do5 → <strong>Ré vollständiger Dominantseptakkord = V7</strong> (die Septime Do5, seit Akkord 1 in der Flöte gehalten, ist vorbereitet); Akkord 3 = Sol2–Sol3–Sol4–Si4 → <strong>Sol-Dur = I</strong>, Quinte ausgelassen und Grundton verdreifacht — normal nach einem vollständigen V7: Der Leitton Fa♯4 steigt nach Sol4, die Septime Do5 fällt nach Si4. Bilanz: <strong>IV – V7 – I, Ganzschluss in Sol-Dur.</strong> Vorgeschlagene Reduktion: LH Do3+Sol3 / Ré3+La3 / Sol2+Sol3; RH Mi4+Do5 / Fa♯4+Do5 / Sol4+Si4.",
  exBScoreCaption:
    "Die vorgeschlagene Reduktion, gestochen (reale Tonhöhen): RH Mi4+Do5 · Fa♯4+Do5 · Sol4+Si4; LH Do3+Sol3 · Ré3+La3 · Sol2+Sol3.",
  voirCorrige: "Lösung anzeigen",
  masquerCorrige: "Lösung ausblenden",
  corrigeLabel: "Lösung",
  capstoneH3: "Übung c — Synthese mit dem Analyseur",
  capstoneP:
    "Nehmen Sie einen kurzen gemeinfreien Orchesterausschnitt (4 bis 8 Takte eines Sinfoniechorals, einer Hymne, einer gemeinfreien Reduktion), reduzieren Sie ihn selbst in realen Tonhöhen auf zwei Systeme, exportieren Sie die Reduktion als <strong>MusicXML</strong> und importieren Sie sie in das Werkzeug <strong>/analyse-partition</strong>: Vergleichen Sie die vom Werkzeug erkannten Akkorde mit Ihrer vertikalen Analyse. Jede Abweichung hat eine dieser drei Ursachen — eine vergessene Transposition (Kontrabässe!), ein falsch gelesener C-Schlüssel, eine Verdopplung, die für einen neuen Ton gehalten wurde. Das ist genau die Checkliste dieses Kurses.",
  linkAnalyseur: {
    titre: "Partitur-Analyseur",
    desc: "Importieren Sie Ihre MusicXML-Reduktion und vergleichen Sie die erkannten Akkorde mit Ihrer vertikalen Analyse.",
  },

  quizH3: "Quiz",
  questions: [
    {
      q: "Die Klarinette in Si♭ liest Mi4. Welche ist die reale Tonhöhe?",
      opts: ["Fa♯4", "Ré4", "Mi4", "Ré♭4"],
      a: 1,
      fb: "Die Klarinette in Si♭ klingt eine große Sekunde unter der Notierung: Mi4 − große Sekunde = Ré4.",
    },
    {
      q: "Das Horn in Fa liest Ré5. Reale Tonhöhe?",
      opts: ["La4", "Ré4", "Sol4", "La5"],
      a: 2,
      fb: "Das Horn in Fa klingt eine reine Quinte tiefer: Ré5 − reine Quinte = Sol4.",
    },
    {
      q: "Das Altsaxophon in Mi♭ liest Sol4. Reale Tonhöhe?",
      opts: ["Si♭3", "Mi♭4", "Si3", "Sol3"],
      a: 0,
      fb: "Das Altsaxophon klingt eine große Sexte tiefer: Sol4 − große Sexte = Si♭3.",
    },
    {
      q: "Die Klarinette in La liest Do5. Reale Tonhöhe?",
      opts: ["Si♭4", "La3", "Mi♭5", "La4"],
      a: 3,
      fb: "Die Klarinette in La klingt eine kleine Terz tiefer: Do5 − kleine Terz = La4.",
    },
    {
      q: "Das Tenorsaxophon in Si♭ liest Do4. Reale Tonhöhe?",
      opts: ["Si♭3", "Si♭2", "Ré3", "Do3"],
      a: 1,
      fb: "Das Tenorsaxophon klingt eine große None tiefer (Oktave + große Sekunde): Do4 − 8ve = Do3, − große Sekunde = Si♭2. Nicht mit der Klarinette in Si♭ verwechseln (nur große Sekunde).",
    },
    {
      q: "Welche Note liegt im C-Schlüssel auf der 3. Linie (Alt) auf der ersten Linie (unten)?",
      opts: ["Fa3", "Mi3", "Sol3", "Ré3"],
      a: 0,
      fb: "Linien des Altschlüssels: Fa3 – La3 – Do4 – Mi4 – Sol4 (eingestrichenes C auf der 3. Linie).",
    },
    {
      q: "Welche Note liegt im C-Schlüssel auf der 4. Linie (Tenor) auf der 5. Linie (oben)?",
      opts: ["Ré4", "Sol4", "Mi4", "Do4"],
      a: 2,
      fb: "Linien des Tenorschlüssels: Ré3 – Fa3 – La3 – Do4 – Mi4 (eingestrichenes C auf der 4. Linie).",
    },
    {
      q: "Violoncelli und Kontrabässe lesen dieselbe Stimme: Do3. Was ist der wahre Bass des Akkords?",
      opts: ["Do3 (Einklang)", "Do4", "Do1", "Do2, in den Kontrabässen"],
      a: 3,
      fb: "Der Kontrabass klingt eine Oktave unter der Notierung: Der reale Bass ist Do2, eine Oktave unter den Violoncelli — die automatische Oktavverdopplung der tiefen Pulte.",
    },
    {
      q: "Ein Choral gibt die Melodie den Oboen (f), verdoppelt von den Trompeten (f). Was wird man hören?",
      opts: [
        "Vor allem die Trompeten: Man müsste sie mf notieren",
        "Eine ausgewogene Legierung",
        "Vor allem die Oboen",
        "Nichts: Die Klangfarben heben sich auf",
      ],
      a: 0,
      fb: "Die Blechbläser dominieren die Holzbläser akustisch bei gleicher Dynamik (Kurs 19): Man differenziert die Dynamik (Trompeten mf, Oboen f), um die Verdopplung auszugleichen.",
    },
    {
      q: "Das Englischhorn liest Do5. Reale Tonhöhe?",
      opts: ["Sol4", "Fa4", "Fa5", "Do4"],
      a: 1,
      fb: "Wie das Horn in Fa klingt das Englischhorn eine reine Quinte tiefer: Do5 − reine Quinte = Fa4.",
    },
  ],

  listenBtn: "Anhören",
};

// ════════════════════════════════════════════════════════════════════════════
// ES
// ════════════════════════════════════════════════════════════════════════════

const es: Cours47Locale = {
  maitreConcept: "Leer la orquesta — partitura general, transposiciones, equilibrio",
  maitreAnecdote:
    "Compositor y director, Hector Berlioz publica en 1844 el «Gran tratado de instrumentación y orquestación modernas», primera obra que describe metódicamente cada instrumento — tesitura, timbre, transposición — y el arte de combinarlos. Director itinerante por toda Europa, dirigía sus partituras monumentales leyendo de un vistazo decenas de pentagramas y exigía a los copistas partituras generales impecables.",
  maitreLesson:
    "Una partitura general se lee con método: el orden de las familias, las claves, las transposiciones resueltas — y luego el oído juzga el equilibrio. La página más negra esconde a menudo una armonía de escuela.",

  condH2: "Leer una partitura de orquesta",
  condP1:
    "Abrir una partitura general por primera vez intimida: veinte pentagramas, cinco claves, nombres en italiano. Pero la página está <strong>rigurosamente ordenada</strong>, y ese orden es el mismo desde el siglo XIX, de arriba abajo: <strong>maderas</strong> (flautas, oboes, clarinetes, fagotes), <strong>metales</strong> (trompas, trompetas, trombones, tuba), <strong>timbales y percusión</strong>, luego los intermedios eventuales (<strong>arpa, celesta, piano</strong>, voces solistas y coro), y por último las <strong>cuerdas</strong> (violines I, violines II, violas, violonchelos, contrabajos). Dentro de cada familia, lo agudo va arriba, lo grave abajo. Los instrumentos se nombran casi siempre en <strong>italiano</strong> — y una partitura alemana reserva una trampa célebre: <strong>«in B» significa en Si♭</strong> (el Si natural alemán se escribe «H»).",
  nomsCaption: "Nombres de instrumentos: italiano · francés · alemán",
  nomsHeaders: ["Italiano", "Francés", "Alemán"],
  nomsRows: [
    { it: "Flauto (Fl.) / Ottavino", fr: "Flûte / Piccolo", de: "Flöte / Kleine Flöte" },
    { it: "Oboe (Ob.) / Corno inglese", fr: "Hautbois / Cor anglais", de: "Oboe / Englischhorn" },
    { it: "Clarinetto (Cl.)", fr: "Clarinette", de: "Klarinette («in B» = ¡en Si♭!)" },
    { it: "Fagotto (Fg.) / Controfagotto", fr: "Basson / Contrebasson", de: "Fagott / Kontrafagott" },
    { it: "Corno (Cor.)", fr: "Cor", de: "Horn" },
    { it: "Tromba (Tr.)", fr: "Trompette", de: "Trompete" },
    { it: "Trombone (Trb.) — <em>Ottoni</em> = los metales", fr: "Trombone", de: "Posaune" },
    { it: "Timpani (Timp.)", fr: "Timbales", de: "Pauken" },
    { it: "Arpa", fr: "Harpe", de: "Harfe" },
    { it: "Violino (Vl.) / Viola (Vla.)", fr: "Violon / Alto", de: "Violine (Geige) / Bratsche" },
    { it: "Violoncello (Vc.) / Contrabbasso (Cb.)", fr: "Violoncelle / Contrebasse", de: "Violoncello / Kontrabass" },
  ],
  balayageH3: "Cómo barrer una página",
  balayageP:
    "Nunca línea a línea de arriba abajo. Tres pasadas: <strong>1) el bajo</strong> (violonchelos/contrabajos, fagotes, tuba — es el fundamento armónico, cf. sección 4); <strong>2) la melodía</strong> (a menudo violines I, flauta u oboe — busque la línea más activa o marcada <em>solo</em>); <strong>3) el relleno</strong> (quién sostiene las notas del medio, quién dobla a quién — los papeles y duplicaciones son los del curso 19). Las <strong>letras de ensayo</strong> (letras A, B, C… o números de compás enmarcados) sirven para orientarse en el ensayo: cítelas siempre («4 después de B») — es la lengua común del atril y del director.",
  linkCours19: {
    titre: "Curso 19 — Introducción a la orquestación",
    desc: "Las cuatro familias, tesituras, papeles y duplicaciones: los cimientos de este curso, no repetidos aquí.",
  },
  linkGo: "Acceder →",

  clesH2: "Las claves",
  clesP1:
    "¿Por qué la viola no lee en clave de sol? Porque su tesitura central (Do3–La5, cf. curso 19) caería de lleno en las líneas adicionales bajo el pentagrama. La <strong>clave de do</strong> resuelve este problema: coloca el <strong>do central (Do4)</strong> sobre la línea que abraza. <strong>Clave de do en 3.ª línea (clave de contralto)</strong>: Do4 = 3.ª línea — es la clave permanente de la viola. <strong>Clave de do en 4.ª línea (clave de tenor)</strong>: Do4 = 4.ª línea — violonchelos, fagotes y trombones pasan a ella en su registro agudo, para evitar las líneas adicionales por encima de la clave de fa (un violonchelo que canta en torno a Sol3–Sol4 se escribe con mucha más legibilidad en clave de do en 4.ª).",
  clesHeaders: ["Clave", "Instrumentos", "El do central (Do4) se escribe…"],
  clesRows: [
    { cle: "Clave de sol", instruments: "Violines, flauta, oboe, clarinete, trompa, trompeta", do4: "1.ª línea adicional <strong>bajo</strong> el pentagrama" },
    { cle: "Clave de do en 3.ª (contralto)", instruments: "Viola (permanente); trombón alto (repertorio antiguo)", do4: "<strong>3.ª línea</strong>" },
    { cle: "Clave de do en 4.ª (tenor)", instruments: "Violonchelo, fagot, trombón tenor — en registro agudo", do4: "<strong>4.ª línea</strong>" },
    { cle: "Clave de fa", instruments: "Violonchelo, contrabajo, fagot, trombones, tuba, timbales", do4: "1.ª línea adicional <strong>sobre</strong> el pentagrama" },
  ],
  ancresH3: "El método de las notas ancla",
  ancresP:
    "El único que aguanta en situación real: <strong>memorizar las líneas</strong>. En clave de do en 3.ª, las líneas son <strong>Fa3 – La3 – Do4 – Mi4 – Sol4</strong>; en clave de do en 4.ª, <strong>Ré3 – Fa3 – La3 – Do4 – Mi4</strong>. Dos ejemplos exactos que retener como patrones: <strong>La3 en clave de contralto = 2.ª línea</strong>; <strong>Mi4 en clave de tenor = 5.ª línea</strong> (la línea de arriba). Recurso de emergencia, a abandonar pronto: leer «como en clave de sol» y corregir — en clave de do en 3.ª, subir una segunda y bajar una octava; en clave de do en 4.ª, bajar una segunda y luego una octava. Practique cinco minutos al día: la fluidez en las claves de do es un prerrequisito absoluto de la sección 4.",
  ancresUt3Label: "Clave de do en 3.ª línea (contralto) — las cinco líneas",
  ancresUt4Label: "Clave de do en 4.ª línea (tenor) — las cinco líneas",
  ancresLignesHeaders: ["1.ª línea (abajo)", "2.ª línea", "3.ª línea", "4.ª línea", "5.ª línea (arriba)"],

  transpoH2: "Los instrumentos transpositores",
  transpoP1:
    "El principio cabe en una frase: <strong>un instrumento «en X» hace sonar X cuando lee Do</strong>. La parte se escribe en una altura convencional que preserva las digitaciones del músico (toda la familia de clarinetes o de saxofones se lee con las mismas digitaciones) o que hereda de las trompas y trompetas naturales, antaño fabricadas en todos los tonos. Para el lector de partitura general, solo una cosa cuenta: <strong>cuánto, y en qué sentido, transponer para oír la altura real</strong>.",
  transpoCaption: "LA tabla de referencia del curso — cada línea verificada, para saber de memoria. Escuche cada línea: primero lo escrito, luego lo sonante.",
  transpoHeaders: ["Instrumento", "Escrito → suena", "Ejemplo exacto", "Para oír la altura real", "Escuchar"],
  transpoRows: [
    { instrument: "Piccolo", regle: "una <strong>octava más alto</strong>", exemple: "escrito Do4 → suena Do5", methode: "transponga una octava <strong>hacia arriba</strong>" },
    { instrument: "Corno inglés (en Fa)", regle: "una <strong>5.ª justa más bajo</strong>", exemple: "escrito Do4 → suena Fa3", methode: "transponga una 5.ª justa <strong>hacia abajo</strong>" },
    { instrument: "Clarinete en Si♭", regle: "una <strong>2.ª mayor más bajo</strong>", exemple: "escrito Ré4 → suena Do4", methode: "transponga una 2.ª mayor <strong>hacia abajo</strong>" },
    { instrument: "Clarinete en La", regle: "una <strong>3.ª menor más bajo</strong>", exemple: "escrito Mi♭4 → suena Do4 (escrito Do4 → suena La3)", methode: "transponga una 3.ª menor <strong>hacia abajo</strong>" },
    { instrument: "Trompa en Fa", regle: "una <strong>5.ª justa más bajo</strong>", exemple: "escrito Sol4 → suena Do4 (escrito Do4 → suena Fa3)", methode: "transponga una 5.ª justa <strong>hacia abajo</strong>" },
    { instrument: "Trompeta en Si♭", regle: "una <strong>2.ª mayor más bajo</strong>", exemple: "escrito Ré4 → suena Do4", methode: "transponga una 2.ª mayor <strong>hacia abajo</strong>" },
    { instrument: "Saxofón alto en Mi♭", regle: "una <strong>6.ª mayor más bajo</strong>", exemple: "escrito Do4 → suena Mi♭3 (escrito La4 → suena Do4)", methode: "transponga una 6.ª mayor <strong>hacia abajo</strong>" },
    { instrument: "Saxofón tenor en Si♭", regle: "una <strong>9.ª mayor más bajo</strong> (octava + 2.ª M)", exemple: "escrito Do4 → suena Si♭2 (escrito Ré5 → suena Do4)", methode: "transponga una octava y luego una 2.ª mayor <strong>hacia abajo</strong>" },
    { instrument: "Contrabajo", regle: "una <strong>octava más bajo</strong>", exemple: "escrito Do3 → suena Do2", methode: "transponga una octava <strong>hacia abajo</strong>" },
    { instrument: "Contrafagot", regle: "una <strong>octava más bajo</strong>", exemple: "escrito Do3 → suena Do2", methode: "transponga una octava <strong>hacia abajo</strong>" },
    { instrument: "Celesta", regle: "una <strong>octava más alto</strong>", exemple: "escrito Do4 → suena Do5", methode: "transponga una octava <strong>hacia arriba</strong>" },
  ],
  transpoP2:
    "<strong>Notas de terreno.</strong> Flauta, oboe, fagotes, trombones, tuba, timbales y todas las cuerdas salvo el contrabajo suenan <strong>como está escrito</strong> (la trompeta «en Ut» también). En el repertorio clásico y romántico, las trompas cambian de tono de una obra a otra («Corni in E♭, in D…»): la regla sigue siendo la misma — escrito Do → suena la nota del nombre de la trompa, <strong>por debajo</strong> (una trompa en Mi♭ suena una 6.ª mayor más bajo: escrito Do4 → suena Mi♭3). Consecuencia de armadura que hay que conocer: para que un conjunto suene en Do mayor, la parte de clarinete o de trompeta en Si♭ se escribe en <strong>Ré mayor</strong> (2 sostenidos), la de la trompa en Fa en <strong>Sol mayor</strong> (las partes de trompa se escriben además tradicionalmente sin armadura, con alteraciones accidentales).",
  clusterH3: "Ejemplo trabajado — un «clúster» que no lo es",
  clusterP:
    "Sobre el papel, tres notas vecinas: Clarinete en Si♭ <strong>escrito Fa♯4</strong>, Trompa en Fa <strong>escrito Sol4</strong>, Trompeta en Si♭ <strong>escrito La4</strong>. Calculemos: Cl. Si♭ Fa♯4 − 2.ª M = <strong>Mi4 real</strong>; Trompa en Fa Sol4 − 5.ª J = <strong>Do4 real</strong>; Tr. Si♭ La4 − 2.ª M = <strong>Sol4 real</strong>. Resultado sonante: <strong>Do4 – Mi4 – Sol4</strong>, un acorde perfecto de <strong>Do mayor</strong> cerrado, en estado fundamental. Lo que parecía un agregado Fa♯–Sol–La es una consonancia perfecta: por eso <strong>nunca</strong> se lee una partitura general «a simple vista». Toque primero las tres notas escritas, luego las tres alturas reales — el contraste se oye de inmediato.",
  clusterCaption: "Compás 1: el pseudoclúster escrito (Fa♯4 · Sol4 · La4) — compás 2: las alturas reales (Do4 · Mi4 · Sol4).",
  btnEcrit: "Escrito",
  btnSonnant: "Sonante (real)",

  vertH2: "La verticalidad: encontrar la armonía bajo la orquesta",
  vertP1:
    "Método en cuatro tiempos, siempre en este orden. <strong>1) El bajo real</strong>: localice la línea más grave que suena efectivamente — violonchelos/contrabajos (atención: los contrabajos suenan una octava por debajo de lo que leen), fagotes, tuba. Es ella la que da el estado del acorde. <strong>2) Cada familia en alturas reales</strong>: reduzca las maderas, luego los metales, luego las cuerdas a su contenido de alturas, transponiendo lo que deba serlo (sección 3) y leyendo las claves de do (sección 2). <strong>3) Plegar las duplicaciones y las octavas</strong>: una nota doblada al unísono o a la octava (curso 19) solo cuenta una vez como clase de altura. <strong>4) Nombrar el acorde</strong> sobre el bajo: fundamental, inversión, eventual 7.ª — y luego su cifrado en la tonalidad.",
  tuttiH3: "Ejemplo trabajado — un tutti de cuatro acordes en Do mayor",
  tuttiIntro:
    "He aquí, instrumento por instrumento, las alturas <strong>escritas</strong> (las claves indicadas son las de la partitura):",
  tuttiHeaders: ["Instrumento (clave)", "Acorde 1", "Acorde 2", "Acorde 3", "Acorde 4"],
  tuttiRows: [
    { instr: "Flauta (sol)", a: ["Mi6", "Fa6", "Ré6", "Mi6"] },
    { instr: "Oboe (sol)", a: ["Sol5", "La5", "Si5", "Do6"] },
    { instr: "Clarinete en Si♭ (sol)", a: ["<strong>Fa♯4</strong>", "<strong>Sol4</strong>", "<strong>Sol4</strong>", "<strong>Fa♯4</strong>"] },
    { instr: "Fagot (fa)", a: ["Do3", "Fa3", "Sol3", "Do3"] },
    { instr: "Trompa en Fa (sol)", a: ["<strong>Sol4</strong>", "<strong>Sol4</strong>", "<strong>La4</strong>", "<strong>Sol4</strong>"] },
    { instr: "Trompeta en Si♭ (sol)", a: ["<strong>La4</strong>", "<strong>Si4</strong>", "<strong>La4</strong>", "<strong>La4</strong>"] },
    { instr: "Timbales Do–Sol (fa)", a: ["Do3", "—", "Sol2", "Do3"] },
    { instr: "Violines I (sol)", a: ["Mi5", "Fa5", "Ré5", "Mi5"] },
    { instr: "Violines II (sol)", a: ["Sol4", "La4", "Si4", "Do5"] },
    { instr: "Violas (do en 3.ª)", a: ["Mi4", "Fa4", "Fa4", "Mi4"] },
    { instr: "Violonchelos (fa)", a: ["Do3", "Fa3", "Sol3", "Do3"] },
    { instr: "Contrabajos (fa)", a: ["<strong>Do3</strong>", "<strong>Fa3</strong>", "<strong>Sol3</strong>", "<strong>Do3</strong>"] },
  ],
  resolCaption: "Resolución de las transposiciones (todo lo demás suena como está escrito)",
  resolRows: [
    "<strong>Clarinete en Si♭</strong> (− 2.ª M): Fa♯4 → <strong>Mi4</strong>; Sol4 → <strong>Fa4</strong>; Sol4 → <strong>Fa4</strong>; Fa♯4 → <strong>Mi4</strong>.",
    "<strong>Trompa en Fa</strong> (− 5.ª J): Sol4 → <strong>Do4</strong>; Sol4 → <strong>Do4</strong>; La4 → <strong>Ré4</strong>; Sol4 → <strong>Do4</strong>.",
    "<strong>Trompeta en Si♭</strong> (− 2.ª M): La4 → <strong>Sol4</strong>; Si4 → <strong>La4</strong>; La4 → <strong>Sol4</strong>; La4 → <strong>Sol4</strong>.",
    "<strong>Contrabajos</strong> (− 8.ª): Do3 → <strong>Do2</strong>; Fa3 → <strong>Fa2</strong>; Sol3 → <strong>Sol2</strong>; Do3 → <strong>Do2</strong>.",
  ],
  contenuCaption: "Contenido real acorde por acorde (bajo real en cabeza, duplicaciones plegadas)",
  contenuList: [
    "<strong>Acorde 1</strong>: Do2 (Cb); Do3 (Vc, Fg, Timb.); Do4 (Trompa); Mi4 (Vla., Cl.); Sol4 (Vl. II, Tpta.); Mi5 (Vl. I); Sol5 (Ob.); Mi6 (Fl.) → clases {Do, Mi, Sol}, bajo Do → <strong>Do mayor, estado fundamental: I</strong>.",
    "<strong>Acorde 2</strong>: Fa2 (Cb); Fa3 (Vc, Fg); Do4 (Trompa); Fa4 (Vla., Cl.); La4 (Vl. II, Tpta.); Fa5 (Vl. I); La5 (Ob.); Fa6 (Fl.) → {Fa, La, Do}, bajo Fa → <strong>Fa mayor: IV</strong>. Observe: la quinta Do solo está presente <strong>en la trompa</strong> (nota común tenida), y los timbales callan — afinados Do/Sol, no tienen Fa.",
    "<strong>Acorde 3</strong>: Sol2 (Cb, Timb.); Sol3 (Vc, Fg); Ré4 (Trompa); Fa4 (Vla., Cl.); Sol4 (Tpta.); Si4 (Vl. II); Ré5 (Vl. I); Si5 (Ob.); Ré6 (Fl.) → {Sol, Si, Ré, Fa}, bajo Sol → <strong>7.ª de dominante completa: V7</strong>. La 7.ª (Fa4, violas + clarinete) es una nota <strong>tenida</strong> desde el acorde 2 — preparación audible.",
    "<strong>Acorde 4</strong>: Do2 (Cb); Do3 (Vc, Fg, Timb.); Do4 (Trompa); Mi4 (Vla., Cl.); Sol4 (Tpta.); Do5 (Vl. II); Mi5 (Vl. I); Do6 (Ob.); Mi6 (Fl.) → {Do, Mi, Sol}, bajo Do → <strong>I</strong>. Conducción ejemplar: la sensible Si4 (Vl. II) sube a Do5, la 7.ª Fa4 (Vla., Cl.) baja a Mi4, Ré (Trompa, Vl. I, Fl.) se une a Do o Mi.",
  ],
  vertBilan:
    "Balance: <strong>I – IV – V7 – I en Do mayor</strong>, cadencia perfecta. Bajo sus doce pentagramas, este tutti es una simple progresión de escuela — exactamente lo que el ejercicio de verticalidad debe revelar.",
  tuttiSonCaption:
    "La reducción <strong>sonante</strong> del tutti — bajo real (¡contrabajos − 8.ª!) y clases de altura plegadas: I · IV · V7 · I.",
  btnTuttiSon: "Escuchar la reducción sonante",

  redH2: "La reducción al piano",
  redP1:
    "Reducir es <strong>traducir las alturas reales a dos pentagramas tocables</strong> — no copiar. Jerarquía de lo que se conserva: <strong>el bajo real</strong> (siempre), <strong>la melodía</strong> (siempre, a su altura de origen si es posible), <strong>la conducción interior característica</strong> (aquí la línea de las violas Mi4–Fa4–Fa4–Mi4, que lleva la preparación y la resolución de la 7.ª), luego el relleno armónico. Lo que se elimina: las <strong>duplicaciones</strong> de unísono y de octava (la flauta que dobla a los violines I a la octava desaparece), los <strong>trémolos y baterías</strong> (se pliegan en acordes tenidos), las <strong>notas repetidas</strong> (una nota tenida basta). Regla de sacrificio cuando la mano no alcanza: se abandona primero <strong>la quinta</strong> del acorde, nunca la tercera ni la 7.ª. Y se estrechan las octavas extremas hacia el centro del teclado.",
  redCaption: "El tutti de la sección 4 se reduce así (alturas reales, dos pentagramas):",
  redHeaders: ["", "Acorde 1 (I)", "Acorde 2 (IV)", "Acorde 3 (V7)", "Acorde 4 (I)"],
  redRows: [
    { main: "Mano derecha (clave de sol)", a: ["Mi4 – Sol4 – Mi5", "Fa4 – La4 – Fa5", "Fa4 – Si4 – Ré5", "Mi4 – Sol4 – Do5 – Mi5"] },
    { main: "Mano izquierda (clave de fa)", a: ["Do2 – Do3", "Fa2 – Fa3", "Sol2 – Sol3", "Do2 – Do3"] },
  ],
  redP2:
    "Justificación nota a nota. Mano izquierda: el bajo real en octavas (Cb sonante + Vc). Mano derecha: la melodía de los violines I en la cima (Mi5–Fa5–Ré5–Mi5), la voz interior de las violas en la parte baja de la mano (Mi4–Fa4–Fa4–Mi4: la 7.ª Fa4 preparada y luego resuelta sobre Mi4), y entre las dos el complemento armónico (Sol4, luego La4, luego Si4 → Do5: la línea de los violines II, con la sensible que sube). En el acorde 2, la quinta Do (que solo sonaba en la trompa) se <strong>sacrifica</strong> — aplicación directa de la regla. En el acorde 4, Sol4 (trompeta) reaparece bajo los dedos: el acorde final está completo. Cada mano cabe en la octava: la reducción es <strong>tocable a primera vista</strong> — ese es el criterio. Compare de oído el tutti «completo» y la reducción: la armonía es idéntica.",
  redScoreCaption: "La reducción grabada — cada mano cabe en la octava: tocable a primera vista.",
  btnReduction: "Escuchar la reducción",
  btnTuttiComplet: "Escuchar el tutti completo (sonante)",

  eqH2: "El equilibrio y los registros",
  eqP1:
    "Reducir no basta: también hay que juzgar <strong>lo que se oirá</strong>. La jerarquía de las potencias es inapelable — el curso 19 la estableció: <strong>una sola trompeta fortissimo cubre un atril entero de violines</strong>. Los metales dominan, luego las maderas agudas penetrantes (piccolo, oboe), luego la masa de las cuerdas, por último las maderas medias. El orquestador compensa por tres medios: <strong>matices diferenciados por familia</strong> (metales <em>mf</em> cuando cuerdas y maderas están <em>f</em> — los matices de una partitura general no son uniformes, y es voluntario); <strong>la duplicación de la melodía a la octava</strong> para proyectarla (flauta sobre violines I, como en nuestro tutti); <strong>el espaciado calcado de la serie armónica</strong>: intervalos amplios en el grave, cerrados en el agudo — nuestro tutti apila Do2–Do3 (octava), luego Do4–Mi4–Sol4 (terceras), nunca al revés.",
  dispoH3: "Las tres disposiciones clásicas de un acorde entre dos familias",
  dispoIntro:
    "Sobre el acorde Do4–Mi4–Sol4–Do5 (Do mayor, cuatro sonidos), confiado a 2 flautas y 2 clarinetes en Si♭ (alturas reales, parte escrita de los clarinetes entre paréntesis):",
  dispoHeaders: ["Disposición", "Do5", "Sol4", "Mi4", "Do4"],
  dispoRows: [
    { nom: "<strong>Yuxtaposición</strong> (cada familia en bloque)", cells: ["Fl. 1", "Fl. 2", "Cl. 1 (escrito Fa♯4)", "Cl. 2 (escrito Ré4)"] },
    { nom: "<strong>Encaje</strong> (voces alternadas)", cells: ["Fl. 1", "Cl. 1 (escrito La4)", "Fl. 2", "Cl. 2 (escrito Ré4)"] },
    { nom: "<strong>Envoltura</strong> (una familia envuelve a la otra)", cells: ["Fl. 1", "Cl. 1 (escrito La4)", "Cl. 2 (escrito Fa♯4)", "Fl. 2"] },
  ],
  dispoScoreCaption:
    "Las tres disposiciones grabadas (alturas reales) — plicas hacia arriba: flautas; plicas hacia abajo: clarinetes. Compás 1: yuxtaposición · compás 2: encaje · compás 3: envoltura. Al piano, las tres suenan idénticas: solo cambia la repartición de los timbres.",
  btnDispo: "Escuchar el acorde (sonante)",
  eqP2:
    "La yuxtaposición mantiene los colores distintos (dos pisos de timbre); el encaje funde los timbres en una aleación homogénea; la envoltura da el color de la familia <strong>exterior</strong> con el apoyo de la interior.",
  piegesWarn:
    "<strong>Trampas de equilibrio clásicas</strong>: melodía confiada al registro medio de una madera mientras el acompañamiento de las cuerdas ocupa el mismo registro (desaparece); una trompa sola frente a un tutti de cuerdas <em>f</em> (insuficiente: la trompa «cuenta» tradicionalmente por la mitad de un trombón); el <strong>hueco del medio</strong> — graves y agudos provistos, nada entre Do3 y Do4 — que vuelve el tutti hueco (curso 19); y el <em>ff</em> uniforme escrito para todo el mundo, que garantiza que solo se oirán los metales.",

  entrainH2: "Entrenamiento",
  methodeH3: "El método, en resumen — las pasadas de lectura",
  methodeP:
    "1) arquitectura de la página (¿quién toca?); 2) bajo real (contrabajos: ¡− 8.ª!); 3) melodía y duplicaciones; 4) transposiciones resueltas, familias plegadas; 5) acordes nombrados; 6) juicio de equilibrio. <strong>En este orden, siempre.</strong>",
  exercicesH3: "Ejercicios",
  exATitre: "Ejercicio a — drill de transposición",
  exAIntro:
    "Calentamiento de claves incluido. Dé la altura real de cada nota escrita, luego verifique al teclado: toque lo escrito, luego lo real.",
  exAHeaders: ["Instrumento", "Escrito", "Real (corrección)"],
  exARows: [
    { instrument: "Clarinete en Si♭", ecrit: "Sol4 · La4 · Si4", reel: "<strong>Fa4 · Sol4 · La4</strong> (− 2.ª M)" },
    { instrument: "Trompa en Fa", ecrit: "Do5 · Si4 · Sol4", reel: "<strong>Fa4 · Mi4 · Do4</strong> (− 5.ª J)" },
    { instrument: "Saxofón alto en Mi♭", ecrit: "Mi5 · Do5 · La4", reel: "<strong>Sol4 · Mi♭4 · Do4</strong> (− 6.ª M)" },
  ],
  exAEchauffement:
    "Calentamiento de claves: en clave de contralto, escriba La3 (2.ª línea) y Mi4 (4.ª línea); en clave de tenor, escriba Fa3 (2.ª línea) y Do4 (4.ª línea).",
  exBTitre: "Ejercicio b — mini partitura general para reducir",
  exBIntro: "Cuatro instrumentos, tres acordes, tonalidad de Sol mayor. Alturas <strong>escritas</strong>:",
  exBHeaders: ["Instrumento (clave)", "Acorde 1", "Acorde 2", "Acorde 3"],
  exBRows: [
    { instr: "Flauta (sol)", a: ["Do5", "Do5", "Si4"] },
    { instr: "Clarinete en Si♭ (sol)", a: ["Fa♯4", "Sol♯4", "La4"] },
    { instr: "Trompa en Fa (sol)", a: ["Ré4", "Mi4", "Ré4"] },
    { instr: "Violonchelo (fa)", a: ["Do3", "Ré3", "Sol2"] },
  ],
  exBConsigne:
    "<em>Consigna</em>: resuelva las transposiciones, nombre los tres acordes y el cifrado en Sol mayor, luego proponga una reducción a dos pentagramas.",
  exBCorrige:
    "Transposiciones — Cl. Si♭ (− 2.ª M): Fa♯4 → <strong>Mi4</strong>, Sol♯4 → <strong>Fa♯4</strong>, La4 → <strong>Sol4</strong>; Trompa en Fa (− 5.ª J): Ré4 → <strong>Sol3</strong>, Mi4 → <strong>La3</strong>, Ré4 → <strong>Sol3</strong>; flauta y violonchelo suenan como está escrito. Contenido real: acorde 1 = Do3–Sol3–Mi4–Do5 → <strong>Do mayor = IV</strong>; acorde 2 = Ré3–La3–Fa♯4–Do5 → <strong>Ré 7.ª de dominante completa = V7</strong> (la 7.ª Do5, tenida en la flauta desde el acorde 1, está preparada); acorde 3 = Sol2–Sol3–Sol4–Si4 → <strong>Sol mayor = I</strong>, quinta omitida y fundamental triplicada — normal tras un V7 completo: la sensible Fa♯4 sube a Sol4, la 7.ª Do5 baja a Si4. Balance: <strong>IV – V7 – I, cadencia perfecta en Sol mayor.</strong> Reducción propuesta: MI Do3+Sol3 / Ré3+La3 / Sol2+Sol3; MD Mi4+Do5 / Fa♯4+Do5 / Sol4+Si4.",
  exBScoreCaption:
    "La reducción propuesta, grabada (alturas reales): MD Mi4+Do5 · Fa♯4+Do5 · Sol4+Si4; MI Do3+Sol3 · Ré3+La3 · Sol2+Sol3.",
  voirCorrige: "Ver la corrección",
  masquerCorrige: "Ocultar la corrección",
  corrigeLabel: "Corrección",
  capstoneH3: "Ejercicio c — síntesis con el analizador",
  capstoneP:
    "Tome un breve fragmento orquestal libre de derechos (4 a 8 compases de un coral de sinfonía, de un himno, de una reducción de dominio público), redúzcalo usted mismo en alturas reales a dos pentagramas, exporte la reducción en <strong>MusicXML</strong> e impórtela en la herramienta <strong>/analyse-partition</strong>: compare los acordes que la herramienta identifica con su análisis vertical. Toda discrepancia tiene una de estas tres causas — una transposición olvidada (¡contrabajos!), una clave de do mal leída, una duplicación tomada por una nota nueva. Es precisamente la lista de verificación de este curso.",
  linkAnalyseur: {
    titre: "Analizador de partituras",
    desc: "Importe su reducción MusicXML y compare los acordes identificados con su análisis vertical.",
  },

  quizH3: "Quiz",
  questions: [
    {
      q: "El clarinete en Si♭ lee Mi4. ¿Cuál es la altura real?",
      opts: ["Fa♯4", "Ré4", "Mi4", "Ré♭4"],
      a: 1,
      fb: "El clarinete en Si♭ suena una 2.ª mayor más bajo que lo escrito: Mi4 − 2.ª M = Ré4.",
    },
    {
      q: "La trompa en Fa lee Ré5. ¿Altura real?",
      opts: ["La4", "Ré4", "Sol4", "La5"],
      a: 2,
      fb: "La trompa en Fa suena una 5.ª justa más bajo: Ré5 − 5.ª J = Sol4.",
    },
    {
      q: "El saxofón alto en Mi♭ lee Sol4. ¿Altura real?",
      opts: ["Si♭3", "Mi♭4", "Si3", "Sol3"],
      a: 0,
      fb: "El saxo alto suena una 6.ª mayor más bajo: Sol4 − 6.ª M = Si♭3.",
    },
    {
      q: "El clarinete en La lee Do5. ¿Altura real?",
      opts: ["Si♭4", "La3", "Mi♭5", "La4"],
      a: 3,
      fb: "El clarinete en La suena una 3.ª menor más bajo: Do5 − 3.ª m = La4.",
    },
    {
      q: "El saxofón tenor en Si♭ lee Do4. ¿Altura real?",
      opts: ["Si♭3", "Si♭2", "Ré3", "Do3"],
      a: 1,
      fb: "El tenor suena una 9.ª mayor más bajo (octava + 2.ª M): Do4 − 8.ª = Do3, − 2.ª M = Si♭2. No confundir con el clarinete en Si♭ (solo 2.ª M).",
    },
    {
      q: "En clave de do en 3.ª línea (contralto), ¿qué nota ocupa la primera línea (abajo)?",
      opts: ["Fa3", "Mi3", "Sol3", "Ré3"],
      a: 0,
      fb: "Líneas de la clave de contralto: Fa3 – La3 – Do4 – Mi4 – Sol4 (do central en la 3.ª línea).",
    },
    {
      q: "En clave de do en 4.ª línea (tenor), ¿qué nota ocupa la 5.ª línea (arriba)?",
      opts: ["Ré4", "Sol4", "Mi4", "Do4"],
      a: 2,
      fb: "Líneas de la clave de tenor: Ré3 – Fa3 – La3 – Do4 – Mi4 (do central en la 4.ª línea).",
    },
    {
      q: "Violonchelos y contrabajos leen la misma parte: Do3. ¿Cuál es el verdadero bajo del acorde?",
      opts: ["Do3 (unísono)", "Do4", "Do1", "Do2, en los contrabajos"],
      a: 3,
      fb: "El contrabajo suena una octava por debajo de lo escrito: el bajo real es Do2, una octava bajo los violonchelos — es la duplicación de octava automática de los atriles graves.",
    },
    {
      q: "Un coral confía la melodía a los oboes (f) doblados por las trompetas (f). ¿Qué se oirá?",
      opts: [
        "Sobre todo las trompetas: habría que marcarlas mf",
        "Una aleación equilibrada",
        "Sobre todo los oboes",
        "Nada: los timbres se anulan",
      ],
      a: 0,
      fb: "Los metales dominan acústicamente a las maderas a matiz igual (curso 19): se diferencian los matices (trompetas mf, oboes f) para equilibrar la duplicación.",
    },
    {
      q: "El corno inglés lee Do5. ¿Altura real?",
      opts: ["Sol4", "Fa4", "Fa5", "Do4"],
      a: 1,
      fb: "Como la trompa en Fa, el corno inglés suena una 5.ª justa más bajo: Do5 − 5.ª J = Fa4.",
    },
  ],

  listenBtn: "Escuchar",
};

// ════════════════════════════════════════════════════════════════════════════
// IT
// ════════════════════════════════════════════════════════════════════════════

const it: Cours47Locale = {
  maitreConcept: "Leggere l'orchestra — partitura d'orchestra, trasposizioni, equilibrio",
  maitreAnecdote:
    "Compositore e direttore, Hector Berlioz pubblica nel 1844 il «Grande trattato di strumentazione e orchestrazione moderne», prima opera a descrivere metodicamente ogni strumento — estensione, timbro, trasposizione — e l'arte di combinarli. Direttore itinerante attraverso l'Europa, dirigeva le sue partiture monumentali leggendo a colpo d'occhio decine di pentagrammi ed esigeva dai copisti partiture impeccabili.",
  maitreLesson:
    "Una partitura d'orchestra si legge con metodo: l'ordine delle famiglie, le chiavi, le trasposizioni risolte — poi l'orecchio giudica l'equilibrio. La pagina più nera nasconde spesso un'armonia da manuale.",

  condH2: "Leggere una partitura d'orchestra",
  condP1:
    "Aprire una partitura d'orchestra per la prima volta intimidisce: venti pentagrammi, cinque chiavi, nomi in italiano. Ma la pagina è <strong>rigorosamente ordinata</strong>, e quest'ordine è lo stesso dal XIX secolo, dall'alto in basso: <strong>legni</strong> (flauti, oboi, clarinetti, fagotti), <strong>ottoni</strong> (corni, trombe, tromboni, tuba), <strong>timpani e percussioni</strong>, poi gli eventuali intermedi (<strong>arpa, celesta, pianoforte</strong>, voci soliste e coro), e infine gli <strong>archi</strong> (violini I, violini II, viole, violoncelli, contrabbassi). All'interno di ogni famiglia, l'acuto sta in alto, il grave in basso. Gli strumenti sono quasi sempre nominati in <strong>italiano</strong> — e una partitura tedesca riserva una trappola celebre: <strong>«in B» significa in Si♭</strong> (il Si naturale tedesco si scrive «H»).",
  nomsCaption: "Nomi degli strumenti: italiano · francese · tedesco",
  nomsHeaders: ["Italiano", "Francese", "Tedesco"],
  nomsRows: [
    { it: "Flauto (Fl.) / Ottavino", fr: "Flûte / Piccolo", de: "Flöte / Kleine Flöte" },
    { it: "Oboe (Ob.) / Corno inglese", fr: "Hautbois / Cor anglais", de: "Oboe / Englischhorn" },
    { it: "Clarinetto (Cl.)", fr: "Clarinette", de: "Klarinette («in B» = in Si♭!)" },
    { it: "Fagotto (Fg.) / Controfagotto", fr: "Basson / Contrebasson", de: "Fagott / Kontrafagott" },
    { it: "Corno (Cor.)", fr: "Cor", de: "Horn" },
    { it: "Tromba (Tr.)", fr: "Trompette", de: "Trompete" },
    { it: "Trombone (Trb.) — <em>Ottoni</em> = gli ottoni", fr: "Trombone", de: "Posaune" },
    { it: "Timpani (Timp.)", fr: "Timbales", de: "Pauken" },
    { it: "Arpa", fr: "Harpe", de: "Harfe" },
    { it: "Violino (Vl.) / Viola (Vla.)", fr: "Violon / Alto", de: "Violine (Geige) / Bratsche" },
    { it: "Violoncello (Vc.) / Contrabbasso (Cb.)", fr: "Violoncelle / Contrebasse", de: "Violoncello / Kontrabass" },
  ],
  balayageH3: "Come scorrere una pagina",
  balayageP:
    "Mai riga per riga dall'alto in basso. Tre passate: <strong>1) il basso</strong> (violoncelli/contrabbassi, fagotti, tuba — è il fondamento armonico, cfr. sezione 4); <strong>2) la melodia</strong> (spesso violini I, flauto o oboe — cercate la linea più attiva o segnata <em>solo</em>); <strong>3) il riempimento</strong> (chi tiene le note del mezzo, chi raddoppia chi — i ruoli e i raddoppi sono quelli del corso 19). Le <strong>lettere di chiamata</strong> (lettere A, B, C… o numeri di battuta riquadrati) servono a orientarsi in prova: citatele sempre («4 dopo B») — è la lingua comune del leggio e del direttore.",
  linkCours19: {
    titre: "Corso 19 — Introduzione all'orchestrazione",
    desc: "Le quattro famiglie, estensioni, ruoli e raddoppi: le fondamenta di questo corso, non ripetute qui.",
  },
  linkGo: "Apri →",

  clesH2: "Le chiavi",
  clesP1:
    "Perché la viola non legge in chiave di violino? Perché la sua estensione centrale (Do3–La5, cfr. corso 19) cadrebbe in pieno nei tagli addizionali sotto il pentagramma. La <strong>chiave di do</strong> risolve questo problema: pone il <strong>do centrale (Do4)</strong> sulla linea che abbraccia. <strong>Chiave di do sulla 3ª linea (chiave di contralto)</strong>: Do4 = 3ª linea — è la chiave permanente della viola. <strong>Chiave di do sulla 4ª linea (chiave di tenore)</strong>: Do4 = 4ª linea — violoncelli, fagotti e tromboni vi passano nel registro acuto, per evitare i tagli addizionali sopra la chiave di basso (un violoncello che canta intorno a Sol3–Sol4 si scrive molto più leggibilmente in chiave di tenore).",
  clesHeaders: ["Chiave", "Strumenti", "Il do centrale (Do4) si scrive…"],
  clesRows: [
    { cle: "Chiave di violino", instruments: "Violini, flauto, oboe, clarinetto, corno, tromba", do4: "1º taglio addizionale <strong>sotto</strong> il pentagramma" },
    { cle: "Chiave di do sulla 3ª (contralto)", instruments: "Viola (permanente); trombone contralto (repertorio antico)", do4: "<strong>3ª linea</strong>" },
    { cle: "Chiave di do sulla 4ª (tenore)", instruments: "Violoncello, fagotto, trombone tenore — nel registro acuto", do4: "<strong>4ª linea</strong>" },
    { cle: "Chiave di basso", instruments: "Violoncello, contrabbasso, fagotto, tromboni, tuba, timpani", do4: "1º taglio addizionale <strong>sopra</strong> il pentagramma" },
  ],
  ancresH3: "Il metodo delle note-àncora",
  ancresP:
    "L'unico che regge in situazione reale: <strong>memorizzare le linee</strong>. In chiave di do sulla 3ª, le linee sono <strong>Fa3 – La3 – Do4 – Mi4 – Sol4</strong>; in chiave di do sulla 4ª, <strong>Ré3 – Fa3 – La3 – Do4 – Mi4</strong>. Due esempi esatti da tenere come campioni: <strong>La3 in chiave di contralto = 2ª linea</strong>; <strong>Mi4 in chiave di tenore = 5ª linea</strong> (la linea in alto). Espediente possibile ma da abbandonare presto: leggere «come in chiave di violino» e poi correggere — in chiave di do sulla 3ª, salire di una seconda e scendere di un'ottava; in chiave di do sulla 4ª, scendere di una seconda e poi di un'ottava. Esercitatevi cinque minuti al giorno: la scioltezza nelle chiavi di do è un prerequisito assoluto della sezione 4.",
  ancresUt3Label: "Chiave di do sulla 3ª linea (contralto) — le cinque linee",
  ancresUt4Label: "Chiave di do sulla 4ª linea (tenore) — le cinque linee",
  ancresLignesHeaders: ["1ª linea (in basso)", "2ª linea", "3ª linea", "4ª linea", "5ª linea (in alto)"],

  transpoH2: "Gli strumenti traspositori",
  transpoP1:
    "Il principio sta in una frase: <strong>uno strumento «in X» fa sentire X quando legge Do</strong>. La parte è scritta a un'altezza convenzionale che preserva le diteggiature del musicista (tutta la famiglia dei clarinetti o dei sassofoni si legge con le stesse diteggiature) o che eredita dai corni e dalle trombe naturali, un tempo costruiti in tutti i toni. Per il lettore di partitura, conta una sola cosa: <strong>di quanto, e in quale direzione, trasporre per sentire l'altezza reale</strong>.",
  transpoCaption: "LA tabella di riferimento del corso — ogni riga verificata, da sapere a memoria. Ascoltate ogni riga: prima lo scritto, poi il reale.",
  transpoHeaders: ["Strumento", "Scritto → suona", "Esempio esatto", "Per sentire l'altezza reale", "Ascolta"],
  transpoRows: [
    { instrument: "Ottavino", regle: "un'<strong>ottava più in alto</strong>", exemple: "scritto Do4 → suona Do5", methode: "trasponete di un'ottava <strong>verso l'alto</strong>" },
    { instrument: "Corno inglese (in Fa)", regle: "una <strong>5ª giusta più in basso</strong>", exemple: "scritto Do4 → suona Fa3", methode: "trasponete di una 5ª giusta <strong>verso il basso</strong>" },
    { instrument: "Clarinetto in Si♭", regle: "una <strong>2ª maggiore più in basso</strong>", exemple: "scritto Ré4 → suona Do4", methode: "trasponete di una 2ª maggiore <strong>verso il basso</strong>" },
    { instrument: "Clarinetto in La", regle: "una <strong>3ª minore più in basso</strong>", exemple: "scritto Mi♭4 → suona Do4 (scritto Do4 → suona La3)", methode: "trasponete di una 3ª minore <strong>verso il basso</strong>" },
    { instrument: "Corno in Fa", regle: "una <strong>5ª giusta più in basso</strong>", exemple: "scritto Sol4 → suona Do4 (scritto Do4 → suona Fa3)", methode: "trasponete di una 5ª giusta <strong>verso il basso</strong>" },
    { instrument: "Tromba in Si♭", regle: "una <strong>2ª maggiore più in basso</strong>", exemple: "scritto Ré4 → suona Do4", methode: "trasponete di una 2ª maggiore <strong>verso il basso</strong>" },
    { instrument: "Sassofono contralto in Mi♭", regle: "una <strong>6ª maggiore più in basso</strong>", exemple: "scritto Do4 → suona Mi♭3 (scritto La4 → suona Do4)", methode: "trasponete di una 6ª maggiore <strong>verso il basso</strong>" },
    { instrument: "Sassofono tenore in Si♭", regle: "una <strong>9ª maggiore più in basso</strong> (ottava + 2ª M)", exemple: "scritto Do4 → suona Si♭2 (scritto Ré5 → suona Do4)", methode: "trasponete di un'ottava e poi di una 2ª maggiore <strong>verso il basso</strong>" },
    { instrument: "Contrabbasso", regle: "un'<strong>ottava più in basso</strong>", exemple: "scritto Do3 → suona Do2", methode: "trasponete di un'ottava <strong>verso il basso</strong>" },
    { instrument: "Controfagotto", regle: "un'<strong>ottava più in basso</strong>", exemple: "scritto Do3 → suona Do2", methode: "trasponete di un'ottava <strong>verso il basso</strong>" },
    { instrument: "Celesta", regle: "un'<strong>ottava più in alto</strong>", exemple: "scritto Do4 → suona Do5", methode: "trasponete di un'ottava <strong>verso l'alto</strong>" },
  ],
  transpoP2:
    "<strong>Note dal campo.</strong> Flauto, oboe, fagotti, tromboni, tuba, timpani e tutti gli archi tranne il contrabbasso suonano <strong>come scritto</strong> (anche la tromba «in Do»). Nel repertorio classico e romantico, i corni cambiano tono da un'opera all'altra («Corni in E♭, in D…»): la regola resta la stessa — scritto Do → suona la nota del nome del corno, <strong>al di sotto</strong> (un corno in Mi♭ suona una 6ª maggiore più in basso: scritto Do4 → suona Mi♭3). Conseguenza d'armatura da conoscere: perché un ensemble suoni in Do maggiore, la parte del clarinetto o della tromba in Si♭ è scritta in <strong>Ré maggiore</strong> (2 diesis), quella del corno in Fa in <strong>Sol maggiore</strong> (le parti di corno sono peraltro tradizionalmente scritte senza armatura, con alterazioni accidentali).",
  clusterH3: "Esempio svolto — un «cluster» che non lo è",
  clusterP:
    "Sulla carta, tre note vicine: Clarinetto in Si♭ <strong>scritto Fa♯4</strong>, Corno in Fa <strong>scritto Sol4</strong>, Tromba in Si♭ <strong>scritto La4</strong>. Calcoliamo: Cl. Si♭ Fa♯4 − 2ª M = <strong>Mi4 reale</strong>; Corno in Fa Sol4 − 5ª G = <strong>Do4 reale</strong>; Tr. Si♭ La4 − 2ª M = <strong>Sol4 reale</strong>. Risultato reale: <strong>Do4 – Mi4 – Sol4</strong>, una triade di <strong>Do maggiore</strong> stretta, in stato fondamentale. Ciò che sembrava un agglomerato Fa♯–Sol–La è una consonanza perfetta: ecco perché non si legge <strong>mai</strong> una partitura «a occhio nudo». Suonate prima le tre note scritte, poi le tre altezze reali — il contrasto si sente immediatamente.",
  clusterCaption: "Battuta 1: lo pseudo-cluster scritto (Fa♯4 · Sol4 · La4) — battuta 2: le altezze reali (Do4 · Mi4 · Sol4).",
  btnEcrit: "Scritto",
  btnSonnant: "Reale (suona)",

  vertH2: "La verticalità: ritrovare l'armonia sotto l'orchestra",
  vertP1:
    "Metodo in quattro tempi, sempre in quest'ordine. <strong>1) Il basso reale</strong>: individuate la linea più grave effettivamente sonante — violoncelli/contrabbassi (attenzione: i contrabbassi suonano un'ottava sotto ciò che leggono), fagotti, tuba. È lei che dà lo stato dell'accordo. <strong>2) Ogni famiglia in altezze reali</strong>: riducete i legni, poi gli ottoni, poi gli archi al loro contenuto di altezze, trasponendo ciò che va trasposto (sezione 3) e leggendo le chiavi di do (sezione 2). <strong>3) Ripiegare i raddoppi e le ottave</strong>: una nota raddoppiata all'unisono o all'ottava (corso 19) conta una sola volta come classe di altezza. <strong>4) Nominare l'accordo</strong> sopra il basso: fondamentale, rivolto, eventuale 7ª — poi la sua sigla nella tonalità.",
  tuttiH3: "Esempio svolto — un tutti di quattro accordi in Do maggiore",
  tuttiIntro:
    "Ecco, strumento per strumento, le altezze <strong>scritte</strong> (le chiavi indicate sono quelle della partitura):",
  tuttiHeaders: ["Strumento (chiave)", "Accordo 1", "Accordo 2", "Accordo 3", "Accordo 4"],
  tuttiRows: [
    { instr: "Flauto (violino)", a: ["Mi6", "Fa6", "Ré6", "Mi6"] },
    { instr: "Oboe (violino)", a: ["Sol5", "La5", "Si5", "Do6"] },
    { instr: "Clarinetto in Si♭ (violino)", a: ["<strong>Fa♯4</strong>", "<strong>Sol4</strong>", "<strong>Sol4</strong>", "<strong>Fa♯4</strong>"] },
    { instr: "Fagotto (basso)", a: ["Do3", "Fa3", "Sol3", "Do3"] },
    { instr: "Corno in Fa (violino)", a: ["<strong>Sol4</strong>", "<strong>Sol4</strong>", "<strong>La4</strong>", "<strong>Sol4</strong>"] },
    { instr: "Tromba in Si♭ (violino)", a: ["<strong>La4</strong>", "<strong>Si4</strong>", "<strong>La4</strong>", "<strong>La4</strong>"] },
    { instr: "Timpani Do–Sol (basso)", a: ["Do3", "—", "Sol2", "Do3"] },
    { instr: "Violini I (violino)", a: ["Mi5", "Fa5", "Ré5", "Mi5"] },
    { instr: "Violini II (violino)", a: ["Sol4", "La4", "Si4", "Do5"] },
    { instr: "Viole (do in 3ª)", a: ["Mi4", "Fa4", "Fa4", "Mi4"] },
    { instr: "Violoncelli (basso)", a: ["Do3", "Fa3", "Sol3", "Do3"] },
    { instr: "Contrabbassi (basso)", a: ["<strong>Do3</strong>", "<strong>Fa3</strong>", "<strong>Sol3</strong>", "<strong>Do3</strong>"] },
  ],
  resolCaption: "Risoluzione delle trasposizioni (tutto il resto suona come scritto)",
  resolRows: [
    "<strong>Clarinetto in Si♭</strong> (− 2ª M): Fa♯4 → <strong>Mi4</strong>; Sol4 → <strong>Fa4</strong>; Sol4 → <strong>Fa4</strong>; Fa♯4 → <strong>Mi4</strong>.",
    "<strong>Corno in Fa</strong> (− 5ª G): Sol4 → <strong>Do4</strong>; Sol4 → <strong>Do4</strong>; La4 → <strong>Ré4</strong>; Sol4 → <strong>Do4</strong>.",
    "<strong>Tromba in Si♭</strong> (− 2ª M): La4 → <strong>Sol4</strong>; Si4 → <strong>La4</strong>; La4 → <strong>Sol4</strong>; La4 → <strong>Sol4</strong>.",
    "<strong>Contrabbassi</strong> (− 8ª): Do3 → <strong>Do2</strong>; Fa3 → <strong>Fa2</strong>; Sol3 → <strong>Sol2</strong>; Do3 → <strong>Do2</strong>.",
  ],
  contenuCaption: "Contenuto reale accordo per accordo (basso reale in testa, raddoppi ripiegati)",
  contenuList: [
    "<strong>Accordo 1</strong>: Do2 (Cb); Do3 (Vc, Fg, Timp.); Do4 (Corno); Mi4 (Vle, Cl.); Sol4 (Vl. II, Tr.); Mi5 (Vl. I); Sol5 (Ob.); Mi6 (Fl.) → classi {Do, Mi, Sol}, basso Do → <strong>Do maggiore, stato fondamentale: I</strong>.",
    "<strong>Accordo 2</strong>: Fa2 (Cb); Fa3 (Vc, Fg); Do4 (Corno); Fa4 (Vle, Cl.); La4 (Vl. II, Tr.); Fa5 (Vl. I); La5 (Ob.); Fa6 (Fl.) → {Fa, La, Do}, basso Fa → <strong>Fa maggiore: IV</strong>. Notate: la quinta Do è presente <strong>solo al corno</strong> (nota comune tenuta), e i timpani tacciono — accordati Do/Sol, non hanno il Fa.",
    "<strong>Accordo 3</strong>: Sol2 (Cb, Timp.); Sol3 (Vc, Fg); Ré4 (Corno); Fa4 (Vle, Cl.); Sol4 (Tr.); Si4 (Vl. II); Ré5 (Vl. I); Si5 (Ob.); Ré6 (Fl.) → {Sol, Si, Ré, Fa}, basso Sol → <strong>7ª di dominante completa: V7</strong>. La 7ª (Fa4, viole + clarinetto) è una nota <strong>tenuta</strong> dall'accordo 2 — preparazione udibile.",
    "<strong>Accordo 4</strong>: Do2 (Cb); Do3 (Vc, Fg, Timp.); Do4 (Corno); Mi4 (Vle, Cl.); Sol4 (Tr.); Do5 (Vl. II); Mi5 (Vl. I); Do6 (Ob.); Mi6 (Fl.) → {Do, Mi, Sol}, basso Do → <strong>I</strong>. Condotta esemplare: la sensibile Si4 (Vl. II) sale a Do5, la 7ª Fa4 (Vle, Cl.) scende a Mi4, Ré (Corno, Vl. I, Fl.) raggiunge Do o Mi.",
  ],
  vertBilan:
    "Bilancio: <strong>I – IV – V7 – I in Do maggiore</strong>, cadenza perfetta. Sotto i suoi dodici pentagrammi, questo tutti è una semplice progressione da manuale — è esattamente ciò che l'esercizio di verticalità deve rivelare.",
  tuttiSonCaption:
    "La riduzione <strong>reale</strong> del tutti — basso reale (contrabbassi − 8ª!) e classi di altezza ripiegate: I · IV · V7 · I.",
  btnTuttiSon: "Ascolta la riduzione reale",

  redH2: "La riduzione al pianoforte",
  redP1:
    "Ridurre significa <strong>tradurre le altezze reali su due pentagrammi suonabili</strong> — non ricopiare. Gerarchia di ciò che si conserva: <strong>il basso reale</strong> (sempre), <strong>la melodia</strong> (sempre, alla sua altezza d'origine se possibile), <strong>la condotta interna caratteristica</strong> (qui la linea delle viole Mi4–Fa4–Fa4–Mi4, che porta la preparazione e la risoluzione della 7ª), poi il riempimento armonico. Ciò che si elimina: i <strong>raddoppi</strong> d'unisono e d'ottava (il flauto che raddoppia i violini I all'ottava scompare), i <strong>tremoli e le figurazioni ribattute</strong> (si ripiegano in accordi tenuti), le <strong>note ripetute</strong> (una nota tenuta basta). Regola di sacrificio quando la mano non basta: si abbandona prima <strong>la quinta</strong> dell'accordo, mai la terza né la 7ª. E si stringono le ottave estreme verso il centro della tastiera.",
  redCaption: "Il tutti della sezione 4 si riduce così (altezze reali, due pentagrammi):",
  redHeaders: ["", "Accordo 1 (I)", "Accordo 2 (IV)", "Accordo 3 (V7)", "Accordo 4 (I)"],
  redRows: [
    { main: "Mano destra (chiave di violino)", a: ["Mi4 – Sol4 – Mi5", "Fa4 – La4 – Fa5", "Fa4 – Si4 – Ré5", "Mi4 – Sol4 – Do5 – Mi5"] },
    { main: "Mano sinistra (chiave di basso)", a: ["Do2 – Do3", "Fa2 – Fa3", "Sol2 – Sol3", "Do2 – Do3"] },
  ],
  redP2:
    "Giustificazione nota per nota. Mano sinistra: il basso reale in ottave (Cb reale + Vc). Mano destra: la melodia dei violini I in cima (Mi5–Fa5–Ré5–Mi5), la voce interna delle viole in basso alla mano (Mi4–Fa4–Fa4–Mi4: la 7ª Fa4 preparata e poi risolta su Mi4), e tra le due il complemento armonico (Sol4, poi La4, poi Si4 → Do5: la linea dei violini II, con la sensibile che sale). All'accordo 2, la quinta Do (che suonava solo al corno) è <strong>sacrificata</strong> — applicazione diretta della regola. All'accordo 4, Sol4 (tromba) riappare sotto le dita: l'accordo finale è completo. Ogni mano sta nell'ottava: la riduzione è <strong>suonabile a prima vista</strong> — è il criterio. Confrontate a orecchio il tutti «completo» e la riduzione: l'armonia è identica.",
  redScoreCaption: "La riduzione incisa — ogni mano sta nell'ottava: suonabile a prima vista.",
  btnReduction: "Ascolta la riduzione",
  btnTuttiComplet: "Ascolta il tutti completo (reale)",

  eqH2: "L'equilibrio e i registri",
  eqP1:
    "Ridurre non basta: bisogna anche giudicare <strong>ciò che si sentirà</strong>. La gerarchia delle potenze è inappellabile — il corso 19 l'ha posta: <strong>una sola tromba fortissimo copre un'intera fila di violini</strong>. Gli ottoni dominano, poi i legni acuti penetranti (ottavino, oboe), poi la massa degli archi, infine i legni medi. L'orchestratore compensa con tre mezzi: <strong>dinamiche differenziate per famiglia</strong> (ottoni <em>mf</em> quando archi e legni sono <em>f</em> — le dinamiche di una partitura non sono uniformi, ed è voluto); <strong>il raddoppio della melodia all'ottava</strong> per proiettarla (flauto sui violini I, come nel nostro tutti); <strong>la spaziatura ricalcata sulla serie armonica</strong>: intervalli larghi al grave, stretti all'acuto — il nostro tutti impila Do2–Do3 (ottava), poi Do4–Mi4–Sol4 (terze), mai il contrario.",
  dispoH3: "Le tre disposizioni classiche di un accordo tra due famiglie",
  dispoIntro:
    "Sull'accordo Do4–Mi4–Sol4–Do5 (Do maggiore, quattro suoni), affidato a 2 flauti e 2 clarinetti in Si♭ (altezze reali, parte scritta dei clarinetti tra parentesi):",
  dispoHeaders: ["Disposizione", "Do5", "Sol4", "Mi4", "Do4"],
  dispoRows: [
    { nom: "<strong>Giustapposizione</strong> (ogni famiglia in blocco)", cells: ["Fl. 1", "Fl. 2", "Cl. 1 (scritto Fa♯4)", "Cl. 2 (scritto Ré4)"] },
    { nom: "<strong>Incastro</strong> (voci alternate)", cells: ["Fl. 1", "Cl. 1 (scritto La4)", "Fl. 2", "Cl. 2 (scritto Ré4)"] },
    { nom: "<strong>Avvolgimento</strong> (una famiglia avvolge l'altra)", cells: ["Fl. 1", "Cl. 1 (scritto La4)", "Cl. 2 (scritto Fa♯4)", "Fl. 2"] },
  ],
  dispoScoreCaption:
    "Le tre disposizioni incise (altezze reali) — gambi in su: flauti; gambi in giù: clarinetti. Battuta 1: giustapposizione · battuta 2: incastro · battuta 3: avvolgimento. Al pianoforte le tre suonano identiche: cambia solo la ripartizione dei timbri.",
  btnDispo: "Ascolta l'accordo (reale)",
  eqP2:
    "La giustapposizione mantiene i colori distinti (due piani di timbro); l'incastro fonde i timbri in una lega omogenea; l'avvolgimento dà il colore della famiglia <strong>esterna</strong> col sostegno dell'interna.",
  piegesWarn:
    "<strong>Trappole d'equilibrio classiche</strong>: melodia affidata al registro medio di un legno mentre l'accompagnamento degli archi occupa lo stesso registro (scompare); un corno solo di fronte a un tutti d'archi <em>f</em> (insufficiente: il corno «conta» tradizionalmente per metà di un trombone); il <strong>buco del medio</strong> — gravi e acuti forniti, nulla tra Do3 e Do4 — che rende il tutti vuoto (corso 19); e il <em>ff</em> uniforme scritto per tutti, che garantisce che si sentiranno solo gli ottoni.",

  entrainH2: "Allenamento",
  methodeH3: "Il metodo, in sintesi — le passate di lettura",
  methodeP:
    "1) architettura della pagina (chi suona?); 2) basso reale (contrabbassi: − 8ª!); 3) melodia e raddoppi; 4) trasposizioni risolte, famiglie ripiegate; 5) accordi nominati; 6) giudizio d'equilibrio. <strong>In quest'ordine, sempre.</strong>",
  exercicesH3: "Esercizi",
  exATitre: "Esercizio a — drill di trasposizione",
  exAIntro:
    "Riscaldamento chiavi compreso. Date l'altezza reale di ogni nota scritta, poi verificate alla tastiera: suonate lo scritto, poi il reale.",
  exAHeaders: ["Strumento", "Scritto", "Reale (soluzione)"],
  exARows: [
    { instrument: "Clarinetto in Si♭", ecrit: "Sol4 · La4 · Si4", reel: "<strong>Fa4 · Sol4 · La4</strong> (− 2ª M)" },
    { instrument: "Corno in Fa", ecrit: "Do5 · Si4 · Sol4", reel: "<strong>Fa4 · Mi4 · Do4</strong> (− 5ª G)" },
    { instrument: "Sassofono contralto in Mi♭", ecrit: "Mi5 · Do5 · La4", reel: "<strong>Sol4 · Mi♭4 · Do4</strong> (− 6ª M)" },
  ],
  exAEchauffement:
    "Riscaldamento chiavi: in chiave di contralto, scrivete La3 (2ª linea) e Mi4 (4ª linea); in chiave di tenore, scrivete Fa3 (2ª linea) e Do4 (4ª linea).",
  exBTitre: "Esercizio b — mini-partitura da ridurre",
  exBIntro: "Quattro strumenti, tre accordi, tonalità di Sol maggiore. Altezze <strong>scritte</strong>:",
  exBHeaders: ["Strumento (chiave)", "Accordo 1", "Accordo 2", "Accordo 3"],
  exBRows: [
    { instr: "Flauto (violino)", a: ["Do5", "Do5", "Si4"] },
    { instr: "Clarinetto in Si♭ (violino)", a: ["Fa♯4", "Sol♯4", "La4"] },
    { instr: "Corno in Fa (violino)", a: ["Ré4", "Mi4", "Ré4"] },
    { instr: "Violoncello (basso)", a: ["Do3", "Ré3", "Sol2"] },
  ],
  exBConsigne:
    "<em>Consegna</em>: risolvete le trasposizioni, nominate i tre accordi e la sigla in Sol maggiore, poi proponete una riduzione su due pentagrammi.",
  exBCorrige:
    "Trasposizioni — Cl. Si♭ (− 2ª M): Fa♯4 → <strong>Mi4</strong>, Sol♯4 → <strong>Fa♯4</strong>, La4 → <strong>Sol4</strong>; Corno in Fa (− 5ª G): Ré4 → <strong>Sol3</strong>, Mi4 → <strong>La3</strong>, Ré4 → <strong>Sol3</strong>; flauto e violoncello suonano come scritto. Contenuto reale: accordo 1 = Do3–Sol3–Mi4–Do5 → <strong>Do maggiore = IV</strong>; accordo 2 = Ré3–La3–Fa♯4–Do5 → <strong>Ré 7ª di dominante completa = V7</strong> (la 7ª Do5, tenuta al flauto dall'accordo 1, è preparata); accordo 3 = Sol2–Sol3–Sol4–Si4 → <strong>Sol maggiore = I</strong>, quinta omessa e fondamentale triplicata — normale dopo un V7 completo: la sensibile Fa♯4 sale a Sol4, la 7ª Do5 scende a Si4. Bilancio: <strong>IV – V7 – I, cadenza perfetta in Sol maggiore.</strong> Riduzione proposta: MS Do3+Sol3 / Ré3+La3 / Sol2+Sol3; MD Mi4+Do5 / Fa♯4+Do5 / Sol4+Si4.",
  exBScoreCaption:
    "La riduzione proposta, incisa (altezze reali): MD Mi4+Do5 · Fa♯4+Do5 · Sol4+Si4; MS Do3+Sol3 · Ré3+La3 · Sol2+Sol3.",
  voirCorrige: "Vedi la soluzione",
  masquerCorrige: "Nascondi la soluzione",
  corrigeLabel: "Soluzione",
  capstoneH3: "Esercizio c — sintesi con l'analizzatore",
  capstoneP:
    "Prendete un breve estratto orchestrale libero da diritti (4–8 battute di un corale di sinfonia, di un inno, di una riduzione di dominio pubblico), riducetelo voi stessi in altezze reali su due pentagrammi, esportate la riduzione in <strong>MusicXML</strong> e importatela nello strumento <strong>/analyse-partition</strong>: confrontate gli accordi che lo strumento identifica con la vostra analisi verticale. Ogni scarto ha una di queste tre cause — una trasposizione dimenticata (contrabbassi!), una chiave di do letta male, un raddoppio scambiato per una nota nuova. È precisamente la check-list di questo corso.",
  linkAnalyseur: {
    titre: "Analizzatore di partiture",
    desc: "Importate la vostra riduzione MusicXML e confrontate gli accordi identificati con la vostra analisi verticale.",
  },

  quizH3: "Quiz",
  questions: [
    {
      q: "Il clarinetto in Si♭ legge Mi4. Qual è l'altezza reale?",
      opts: ["Fa♯4", "Ré4", "Mi4", "Ré♭4"],
      a: 1,
      fb: "Il clarinetto in Si♭ suona una 2ª maggiore sotto lo scritto: Mi4 − 2ª M = Ré4.",
    },
    {
      q: "Il corno in Fa legge Ré5. Altezza reale?",
      opts: ["La4", "Ré4", "Sol4", "La5"],
      a: 2,
      fb: "Il corno in Fa suona una 5ª giusta più in basso: Ré5 − 5ª G = Sol4.",
    },
    {
      q: "Il sassofono contralto in Mi♭ legge Sol4. Altezza reale?",
      opts: ["Si♭3", "Mi♭4", "Si3", "Sol3"],
      a: 0,
      fb: "Il sax contralto suona una 6ª maggiore più in basso: Sol4 − 6ª M = Si♭3.",
    },
    {
      q: "Il clarinetto in La legge Do5. Altezza reale?",
      opts: ["Si♭4", "La3", "Mi♭5", "La4"],
      a: 3,
      fb: "Il clarinetto in La suona una 3ª minore più in basso: Do5 − 3ª m = La4.",
    },
    {
      q: "Il sassofono tenore in Si♭ legge Do4. Altezza reale?",
      opts: ["Si♭3", "Si♭2", "Ré3", "Do3"],
      a: 1,
      fb: "Il tenore suona una 9ª maggiore più in basso (ottava + 2ª M): Do4 − 8ª = Do3, − 2ª M = Si♭2. Da non confondere con il clarinetto in Si♭ (solo 2ª M).",
    },
    {
      q: "In chiave di do sulla 3ª linea (contralto), quale nota occupa la prima linea (in basso)?",
      opts: ["Fa3", "Mi3", "Sol3", "Ré3"],
      a: 0,
      fb: "Linee della chiave di contralto: Fa3 – La3 – Do4 – Mi4 – Sol4 (do centrale sulla 3ª linea).",
    },
    {
      q: "In chiave di do sulla 4ª linea (tenore), quale nota occupa la 5ª linea (in alto)?",
      opts: ["Ré4", "Sol4", "Mi4", "Do4"],
      a: 2,
      fb: "Linee della chiave di tenore: Ré3 – Fa3 – La3 – Do4 – Mi4 (do centrale sulla 4ª linea).",
    },
    {
      q: "Violoncelli e contrabbassi leggono la stessa parte: Do3. Qual è il vero basso dell'accordo?",
      opts: ["Do3 (unisono)", "Do4", "Do1", "Do2, ai contrabbassi"],
      a: 3,
      fb: "Il contrabbasso suona un'ottava sotto lo scritto: il basso reale è Do2, un'ottava sotto i violoncelli — è il raddoppio d'ottava automatico delle file gravi.",
    },
    {
      q: "Un corale affida la melodia agli oboi (f) raddoppiati dalle trombe (f). Che cosa si sentirà?",
      opts: [
        "Soprattutto le trombe: bisognerebbe segnarle mf",
        "Una lega equilibrata",
        "Soprattutto gli oboi",
        "Nulla: i timbri si annullano",
      ],
      a: 0,
      fb: "Gli ottoni dominano acusticamente i legni a dinamica uguale (corso 19): si differenziano le dinamiche (trombe mf, oboi f) per equilibrare il raddoppio.",
    },
    {
      q: "Il corno inglese legge Do5. Altezza reale?",
      opts: ["Sol4", "Fa4", "Fa5", "Do4"],
      a: 1,
      fb: "Come il corno in Fa, il corno inglese suona una 5ª giusta più in basso: Do5 − 5ª G = Fa4.",
    },
  ],

  listenBtn: "Ascolta",
};

// ════════════════════════════════════════════════════════════════════════════
// PT
// ════════════════════════════════════════════════════════════════════════════

const pt: Cours47Locale = {
  maitreConcept: "Ler a orquestra — partitura geral, transposições, equilíbrio",
  maitreAnecdote:
    "Compositor e maestro, Hector Berlioz publica em 1844 o «Grande tratado de instrumentação e orquestração modernas», primeira obra a descrever metodicamente cada instrumento — tessitura, timbre, transposição — e a arte de os combinar. Maestro itinerante pela Europa, dirigia as suas partituras monumentais lendo num relance dezenas de pautas e exigia dos copistas partituras gerais impecáveis.",
  maitreLesson:
    "Uma partitura geral lê-se com método: a ordem das famílias, as claves, as transposições resolvidas — depois o ouvido julga o equilíbrio. A página mais negra esconde muitas vezes uma harmonia de escola.",

  condH2: "Ler uma partitura de orquestra",
  condP1:
    "Abrir uma partitura geral pela primeira vez intimida: vinte pautas, cinco claves, nomes em italiano. Mas a página está <strong>rigorosamente ordenada</strong>, e essa ordem é a mesma desde o século XIX, de cima para baixo: <strong>madeiras</strong> (flautas, oboés, clarinetes, fagotes), <strong>metais</strong> (trompas, trompetes, trombones, tuba), <strong>tímpanos e percussão</strong>, depois os eventuais intermédios (<strong>harpa, celesta, piano</strong>, vozes solistas e coro), e por fim as <strong>cordas</strong> (violinos I, violinos II, violas, violoncelos, contrabaixos). Dentro de cada família, o agudo fica em cima, o grave em baixo. Os instrumentos são quase sempre nomeados em <strong>italiano</strong> — e uma partitura alemã reserva uma armadilha célebre: <strong>«in B» significa em Si♭</strong> (o Si natural alemão escreve-se «H»).",
  nomsCaption: "Nomes de instrumentos: italiano · francês · alemão",
  nomsHeaders: ["Italiano", "Francês", "Alemão"],
  nomsRows: [
    { it: "Flauto (Fl.) / Ottavino", fr: "Flûte / Piccolo", de: "Flöte / Kleine Flöte" },
    { it: "Oboe (Ob.) / Corno inglese", fr: "Hautbois / Cor anglais", de: "Oboe / Englischhorn" },
    { it: "Clarinetto (Cl.)", fr: "Clarinette", de: "Klarinette («in B» = em Si♭!)" },
    { it: "Fagotto (Fg.) / Controfagotto", fr: "Basson / Contrebasson", de: "Fagott / Kontrafagott" },
    { it: "Corno (Cor.)", fr: "Cor", de: "Horn" },
    { it: "Tromba (Tr.)", fr: "Trompette", de: "Trompete" },
    { it: "Trombone (Trb.) — <em>Ottoni</em> = os metais", fr: "Trombone", de: "Posaune" },
    { it: "Timpani (Timp.)", fr: "Timbales", de: "Pauken" },
    { it: "Arpa", fr: "Harpe", de: "Harfe" },
    { it: "Violino (Vl.) / Viola (Vla.)", fr: "Violon / Alto", de: "Violine (Geige) / Bratsche" },
    { it: "Violoncello (Vc.) / Contrabbasso (Cb.)", fr: "Violoncelle / Contrebasse", de: "Violoncello / Kontrabass" },
  ],
  balayageH3: "Como varrer uma página",
  balayageP:
    "Nunca linha a linha de cima para baixo. Três passagens: <strong>1) o baixo</strong> (violoncelos/contrabaixos, fagotes, tuba — é o fundamento harmónico, cf. secção 4); <strong>2) a melodia</strong> (muitas vezes violinos I, flauta ou oboé — procure a linha mais ativa ou marcada <em>solo</em>); <strong>3) o preenchimento</strong> (quem sustém as notas do meio, quem dobra quem — os papéis e dobragens são os do curso 19). As <strong>marcas de ensaio</strong> (letras A, B, C… ou números de compasso emoldurados) servem para navegar no ensaio: cite-as sempre («4 depois de B») — é a língua comum da estante e do maestro.",
  linkCours19: {
    titre: "Curso 19 — Introdução à orquestração",
    desc: "As quatro famílias, tessituras, papéis e dobragens: as fundações deste curso, não repetidas aqui.",
  },
  linkGo: "Aceder →",

  clesH2: "As claves",
  clesP1:
    "Porque é que a viola não lê em clave de sol? Porque a sua tessitura central (Do3–La5, cf. curso 19) cairia em cheio nas linhas suplementares abaixo da pauta. A <strong>clave de dó</strong> resolve este problema: coloca o <strong>dó central (Do4)</strong> na linha que abraça. <strong>Clave de dó na 3.ª linha (clave de contralto)</strong>: Do4 = 3.ª linha — é a clave permanente da viola. <strong>Clave de dó na 4.ª linha (clave de tenor)</strong>: Do4 = 4.ª linha — violoncelos, fagotes e trombones passam para ela no registo agudo, para evitar as linhas suplementares acima da clave de fá (um violoncelo que canta à volta de Sol3–Sol4 escreve-se com muito mais legibilidade em clave de dó na 4.ª).",
  clesHeaders: ["Clave", "Instrumentos", "O dó central (Do4) escreve-se…"],
  clesRows: [
    { cle: "Clave de sol", instruments: "Violinos, flauta, oboé, clarinete, trompa, trompete", do4: "1.ª linha suplementar <strong>abaixo</strong> da pauta" },
    { cle: "Clave de dó na 3.ª (contralto)", instruments: "Viola (permanente); trombone alto (repertório antigo)", do4: "<strong>3.ª linha</strong>" },
    { cle: "Clave de dó na 4.ª (tenor)", instruments: "Violoncelo, fagote, trombone tenor — em registo agudo", do4: "<strong>4.ª linha</strong>" },
    { cle: "Clave de fá", instruments: "Violoncelo, contrabaixo, fagote, trombones, tuba, tímpanos", do4: "1.ª linha suplementar <strong>acima</strong> da pauta" },
  ],
  ancresH3: "O método das notas-âncora",
  ancresP:
    "O único que aguenta em situação real: <strong>memorizar as linhas</strong>. Em clave de dó na 3.ª, as linhas são <strong>Fa3 – La3 – Do4 – Mi4 – Sol4</strong>; em clave de dó na 4.ª, <strong>Ré3 – Fa3 – La3 – Do4 – Mi4</strong>. Dois exemplos exatos a reter como padrões: <strong>La3 em clave de contralto = 2.ª linha</strong>; <strong>Mi4 em clave de tenor = 5.ª linha</strong> (a linha de cima). Recurso de emergência, a abandonar depressa: ler «como em clave de sol» e corrigir — em clave de dó na 3.ª, subir uma segunda e descer uma oitava; em clave de dó na 4.ª, descer uma segunda e depois uma oitava. Treine cinco minutos por dia: a fluência nas claves de dó é um pré-requisito absoluto da secção 4.",
  ancresUt3Label: "Clave de dó na 3.ª linha (contralto) — as cinco linhas",
  ancresUt4Label: "Clave de dó na 4.ª linha (tenor) — as cinco linhas",
  ancresLignesHeaders: ["1.ª linha (baixo)", "2.ª linha", "3.ª linha", "4.ª linha", "5.ª linha (cima)"],

  transpoH2: "Os instrumentos transpositores",
  transpoP1:
    "O princípio cabe numa frase: <strong>um instrumento «em X» faz soar X quando lê Do</strong>. A parte é escrita numa altura convencional que preserva as dedilhações do músico (toda a família dos clarinetes ou dos saxofones lê-se com as mesmas dedilhações) ou que herda das trompas e trompetes naturais, outrora fabricados em todos os tons. Para o leitor de partitura geral, só uma coisa conta: <strong>quanto, e em que sentido, transpor para ouvir a altura real</strong>.",
  transpoCaption: "A tabela de referência do curso — cada linha verificada, para saber de cor. Ouça cada linha: primeiro o escrito, depois o soante.",
  transpoHeaders: ["Instrumento", "Escrito → soa", "Exemplo exato", "Para ouvir a altura real", "Ouvir"],
  transpoRows: [
    { instrument: "Piccolo", regle: "uma <strong>oitava mais alto</strong>", exemple: "escrito Do4 → soa Do5", methode: "transponha uma oitava <strong>para cima</strong>" },
    { instrument: "Corne inglês (em Fa)", regle: "uma <strong>5.ª perfeita mais baixo</strong>", exemple: "escrito Do4 → soa Fa3", methode: "transponha uma 5.ª perfeita <strong>para baixo</strong>" },
    { instrument: "Clarinete em Si♭", regle: "uma <strong>2.ª maior mais baixo</strong>", exemple: "escrito Ré4 → soa Do4", methode: "transponha uma 2.ª maior <strong>para baixo</strong>" },
    { instrument: "Clarinete em La", regle: "uma <strong>3.ª menor mais baixo</strong>", exemple: "escrito Mi♭4 → soa Do4 (escrito Do4 → soa La3)", methode: "transponha uma 3.ª menor <strong>para baixo</strong>" },
    { instrument: "Trompa em Fa", regle: "uma <strong>5.ª perfeita mais baixo</strong>", exemple: "escrito Sol4 → soa Do4 (escrito Do4 → soa Fa3)", methode: "transponha uma 5.ª perfeita <strong>para baixo</strong>" },
    { instrument: "Trompete em Si♭", regle: "uma <strong>2.ª maior mais baixo</strong>", exemple: "escrito Ré4 → soa Do4", methode: "transponha uma 2.ª maior <strong>para baixo</strong>" },
    { instrument: "Saxofone alto em Mi♭", regle: "uma <strong>6.ª maior mais baixo</strong>", exemple: "escrito Do4 → soa Mi♭3 (escrito La4 → soa Do4)", methode: "transponha uma 6.ª maior <strong>para baixo</strong>" },
    { instrument: "Saxofone tenor em Si♭", regle: "uma <strong>9.ª maior mais baixo</strong> (oitava + 2.ª M)", exemple: "escrito Do4 → soa Si♭2 (escrito Ré5 → soa Do4)", methode: "transponha uma oitava e depois uma 2.ª maior <strong>para baixo</strong>" },
    { instrument: "Contrabaixo", regle: "uma <strong>oitava mais baixo</strong>", exemple: "escrito Do3 → soa Do2", methode: "transponha uma oitava <strong>para baixo</strong>" },
    { instrument: "Contrafagote", regle: "uma <strong>oitava mais baixo</strong>", exemple: "escrito Do3 → soa Do2", methode: "transponha uma oitava <strong>para baixo</strong>" },
    { instrument: "Celesta", regle: "uma <strong>oitava mais alto</strong>", exemple: "escrito Do4 → soa Do5", methode: "transponha uma oitava <strong>para cima</strong>" },
  ],
  transpoP2:
    "<strong>Notas de terreno.</strong> Flauta, oboé, fagotes, trombones, tuba, tímpanos e todas as cordas exceto o contrabaixo soam <strong>como está escrito</strong> (o trompete «em Dó» também). No repertório clássico e romântico, as trompas mudam de tom de uma obra para outra («Corni in E♭, in D…»): a regra continua a mesma — escrito Do → soa a nota do nome da trompa, <strong>abaixo</strong> (uma trompa em Mi♭ soa uma 6.ª maior mais baixo: escrito Do4 → soa Mi♭3). Consequência de armação a conhecer: para que um conjunto soe em Do maior, a parte do clarinete ou do trompete em Si♭ é escrita em <strong>Ré maior</strong> (2 sustenidos), a da trompa em Fa em <strong>Sol maior</strong> (as partes de trompa são aliás tradicionalmente escritas sem armação, com acidentes).",
  clusterH3: "Exemplo trabalhado — um «cluster» que não o é",
  clusterP:
    "No papel, três notas vizinhas: Clarinete em Si♭ <strong>escrito Fa♯4</strong>, Trompa em Fa <strong>escrito Sol4</strong>, Trompete em Si♭ <strong>escrito La4</strong>. Calculemos: Cl. Si♭ Fa♯4 − 2.ª M = <strong>Mi4 real</strong>; Trompa em Fa Sol4 − 5.ª P = <strong>Do4 real</strong>; Tr. Si♭ La4 − 2.ª M = <strong>Sol4 real</strong>. Resultado soante: <strong>Do4 – Mi4 – Sol4</strong>, um acorde perfeito de <strong>Do maior</strong> cerrado, no estado fundamental. O que parecia um aglomerado Fa♯–Sol–La é uma consonância perfeita: eis porque <strong>nunca</strong> se lê uma partitura geral «a olho nu». Toque primeiro as três notas escritas, depois as três alturas reais — o contraste ouve-se imediatamente.",
  clusterCaption: "Compasso 1: o pseudo-cluster escrito (Fa♯4 · Sol4 · La4) — compasso 2: as alturas reais (Do4 · Mi4 · Sol4).",
  btnEcrit: "Escrito",
  btnSonnant: "Soante (real)",

  vertH2: "A verticalidade: reencontrar a harmonia sob a orquestra",
  vertP1:
    "Método em quatro tempos, sempre nesta ordem. <strong>1) O baixo real</strong>: localize a linha mais grave efetivamente soante — violoncelos/contrabaixos (atenção: os contrabaixos soam uma oitava abaixo do que leem), fagotes, tuba. É ela que dá o estado do acorde. <strong>2) Cada família em alturas reais</strong>: reduza as madeiras, depois os metais, depois as cordas ao seu conteúdo de alturas, transpondo o que deve sê-lo (secção 3) e lendo as claves de dó (secção 2). <strong>3) Dobrar para dentro as dobragens e as oitavas</strong>: uma nota dobrada em uníssono ou à oitava (curso 19) só conta uma vez como classe de altura. <strong>4) Nomear o acorde</strong> acima do baixo: fundamental, inversão, eventual 7.ª — depois a sua cifra na tonalidade.",
  tuttiH3: "Exemplo trabalhado — um tutti de quatro acordes em Do maior",
  tuttiIntro:
    "Eis, instrumento por instrumento, as alturas <strong>escritas</strong> (as claves indicadas são as da partitura):",
  tuttiHeaders: ["Instrumento (clave)", "Acorde 1", "Acorde 2", "Acorde 3", "Acorde 4"],
  tuttiRows: [
    { instr: "Flauta (sol)", a: ["Mi6", "Fa6", "Ré6", "Mi6"] },
    { instr: "Oboé (sol)", a: ["Sol5", "La5", "Si5", "Do6"] },
    { instr: "Clarinete em Si♭ (sol)", a: ["<strong>Fa♯4</strong>", "<strong>Sol4</strong>", "<strong>Sol4</strong>", "<strong>Fa♯4</strong>"] },
    { instr: "Fagote (fá)", a: ["Do3", "Fa3", "Sol3", "Do3"] },
    { instr: "Trompa em Fa (sol)", a: ["<strong>Sol4</strong>", "<strong>Sol4</strong>", "<strong>La4</strong>", "<strong>Sol4</strong>"] },
    { instr: "Trompete em Si♭ (sol)", a: ["<strong>La4</strong>", "<strong>Si4</strong>", "<strong>La4</strong>", "<strong>La4</strong>"] },
    { instr: "Tímpanos Do–Sol (fá)", a: ["Do3", "—", "Sol2", "Do3"] },
    { instr: "Violinos I (sol)", a: ["Mi5", "Fa5", "Ré5", "Mi5"] },
    { instr: "Violinos II (sol)", a: ["Sol4", "La4", "Si4", "Do5"] },
    { instr: "Violas (dó na 3.ª)", a: ["Mi4", "Fa4", "Fa4", "Mi4"] },
    { instr: "Violoncelos (fá)", a: ["Do3", "Fa3", "Sol3", "Do3"] },
    { instr: "Contrabaixos (fá)", a: ["<strong>Do3</strong>", "<strong>Fa3</strong>", "<strong>Sol3</strong>", "<strong>Do3</strong>"] },
  ],
  resolCaption: "Resolução das transposições (todo o resto soa como está escrito)",
  resolRows: [
    "<strong>Clarinete em Si♭</strong> (− 2.ª M): Fa♯4 → <strong>Mi4</strong>; Sol4 → <strong>Fa4</strong>; Sol4 → <strong>Fa4</strong>; Fa♯4 → <strong>Mi4</strong>.",
    "<strong>Trompa em Fa</strong> (− 5.ª P): Sol4 → <strong>Do4</strong>; Sol4 → <strong>Do4</strong>; La4 → <strong>Ré4</strong>; Sol4 → <strong>Do4</strong>.",
    "<strong>Trompete em Si♭</strong> (− 2.ª M): La4 → <strong>Sol4</strong>; Si4 → <strong>La4</strong>; La4 → <strong>Sol4</strong>; La4 → <strong>Sol4</strong>.",
    "<strong>Contrabaixos</strong> (− 8.ª): Do3 → <strong>Do2</strong>; Fa3 → <strong>Fa2</strong>; Sol3 → <strong>Sol2</strong>; Do3 → <strong>Do2</strong>.",
  ],
  contenuCaption: "Conteúdo real acorde por acorde (baixo real à cabeça, dobragens dobradas para dentro)",
  contenuList: [
    "<strong>Acorde 1</strong>: Do2 (Cb); Do3 (Vc, Fg, Timp.); Do4 (Trompa); Mi4 (Vla., Cl.); Sol4 (Vl. II, Tpte.); Mi5 (Vl. I); Sol5 (Ob.); Mi6 (Fl.) → classes {Do, Mi, Sol}, baixo Do → <strong>Do maior, estado fundamental: I</strong>.",
    "<strong>Acorde 2</strong>: Fa2 (Cb); Fa3 (Vc, Fg); Do4 (Trompa); Fa4 (Vla., Cl.); La4 (Vl. II, Tpte.); Fa5 (Vl. I); La5 (Ob.); Fa6 (Fl.) → {Fa, La, Do}, baixo Fa → <strong>Fa maior: IV</strong>. Repare: a quinta Do só está presente <strong>na trompa</strong> (nota comum sustida), e os tímpanos calam-se — afinados Do/Sol, não têm Fa.",
    "<strong>Acorde 3</strong>: Sol2 (Cb, Timp.); Sol3 (Vc, Fg); Ré4 (Trompa); Fa4 (Vla., Cl.); Sol4 (Tpte.); Si4 (Vl. II); Ré5 (Vl. I); Si5 (Ob.); Ré6 (Fl.) → {Sol, Si, Ré, Fa}, baixo Sol → <strong>7.ª da dominante completa: V7</strong>. A 7.ª (Fa4, violas + clarinete) é uma nota <strong>sustida</strong> desde o acorde 2 — preparação audível.",
    "<strong>Acorde 4</strong>: Do2 (Cb); Do3 (Vc, Fg, Timp.); Do4 (Trompa); Mi4 (Vla., Cl.); Sol4 (Tpte.); Do5 (Vl. II); Mi5 (Vl. I); Do6 (Ob.); Mi6 (Fl.) → {Do, Mi, Sol}, baixo Do → <strong>I</strong>. Condução exemplar: a sensível Si4 (Vl. II) sobe a Do5, a 7.ª Fa4 (Vla., Cl.) desce a Mi4, Ré (Trompa, Vl. I, Fl.) junta-se a Do ou Mi.",
  ],
  vertBilan:
    "Balanço: <strong>I – IV – V7 – I em Do maior</strong>, cadência perfeita. Sob as suas doze pautas, este tutti é uma simples progressão de escola — é exatamente o que o exercício de verticalidade deve revelar.",
  tuttiSonCaption:
    "A redução <strong>soante</strong> do tutti — baixo real (contrabaixos − 8.ª!) e classes de altura dobradas para dentro: I · IV · V7 · I.",
  btnTuttiSon: "Ouvir a redução soante",

  redH2: "A redução ao piano",
  redP1:
    "Reduzir é <strong>traduzir as alturas reais em duas pautas tocáveis</strong> — não copiar. Hierarquia do que se guarda: <strong>o baixo real</strong> (sempre), <strong>a melodia</strong> (sempre, na sua altura de origem se possível), <strong>a condução interior característica</strong> (aqui a linha das violas Mi4–Fa4–Fa4–Mi4, que carrega a preparação e a resolução da 7.ª), depois o preenchimento harmónico. O que se elimina: as <strong>dobragens</strong> de uníssono e de oitava (a flauta que dobra os violinos I à oitava desaparece), os <strong>trémulos e baterias</strong> (dobram-se em acordes sustidos), as <strong>notas repetidas</strong> (uma nota sustida basta). Regra de sacrifício quando a mão não chega: abandona-se primeiro <strong>a quinta</strong> do acorde, nunca a terça nem a 7.ª. E apertam-se as oitavas extremas para o centro do teclado.",
  redCaption: "O tutti da secção 4 reduz-se assim (alturas reais, duas pautas):",
  redHeaders: ["", "Acorde 1 (I)", "Acorde 2 (IV)", "Acorde 3 (V7)", "Acorde 4 (I)"],
  redRows: [
    { main: "Mão direita (clave de sol)", a: ["Mi4 – Sol4 – Mi5", "Fa4 – La4 – Fa5", "Fa4 – Si4 – Ré5", "Mi4 – Sol4 – Do5 – Mi5"] },
    { main: "Mão esquerda (clave de fá)", a: ["Do2 – Do3", "Fa2 – Fa3", "Sol2 – Sol3", "Do2 – Do3"] },
  ],
  redP2:
    "Justificação nota a nota. Mão esquerda: o baixo real em oitavas (Cb soante + Vc). Mão direita: a melodia dos violinos I no topo (Mi5–Fa5–Ré5–Mi5), a voz interior das violas na parte baixa da mão (Mi4–Fa4–Fa4–Mi4: a 7.ª Fa4 preparada e depois resolvida sobre Mi4), e entre as duas o complemento harmónico (Sol4, depois La4, depois Si4 → Do5: a linha dos violinos II, com a sensível a subir). No acorde 2, a quinta Do (que só soava na trompa) é <strong>sacrificada</strong> — aplicação direta da regra. No acorde 4, Sol4 (trompete) reaparece sob os dedos: o acorde final está completo. Cada mão cabe na oitava: a redução é <strong>tocável à primeira vista</strong> — é o critério. Compare de ouvido o tutti «completo» e a redução: a harmonia é idêntica.",
  redScoreCaption: "A redução gravada — cada mão cabe na oitava: tocável à primeira vista.",
  btnReduction: "Ouvir a redução",
  btnTuttiComplet: "Ouvir o tutti completo (soante)",

  eqH2: "O equilíbrio e os registos",
  eqP1:
    "Reduzir não basta: é preciso também julgar <strong>o que se ouvirá</strong>. A hierarquia das potências é inapelável — o curso 19 estabeleceu-a: <strong>um único trompete fortissimo cobre uma estante inteira de violinos</strong>. Os metais dominam, depois as madeiras agudas penetrantes (piccolo, oboé), depois a massa das cordas, por fim as madeiras médias. O orquestrador compensa por três meios: <strong>dinâmicas diferenciadas por família</strong> (metais <em>mf</em> quando cordas e madeiras estão <em>f</em> — as dinâmicas de uma partitura geral não são uniformes, e é voluntário); <strong>a dobragem da melodia à oitava</strong> para a projetar (flauta sobre violinos I, como no nosso tutti); <strong>o espaçamento decalcado da série harmónica</strong>: intervalos largos no grave, cerrados no agudo — o nosso tutti empilha Do2–Do3 (oitava), depois Do4–Mi4–Sol4 (terças), nunca o inverso.",
  dispoH3: "As três disposições clássicas de um acorde entre duas famílias",
  dispoIntro:
    "Sobre o acorde Do4–Mi4–Sol4–Do5 (Do maior, quatro sons), confiado a 2 flautas e 2 clarinetes em Si♭ (alturas reais, parte escrita dos clarinetes entre parênteses):",
  dispoHeaders: ["Disposição", "Do5", "Sol4", "Mi4", "Do4"],
  dispoRows: [
    { nom: "<strong>Justaposição</strong> (cada família em bloco)", cells: ["Fl. 1", "Fl. 2", "Cl. 1 (escrito Fa♯4)", "Cl. 2 (escrito Ré4)"] },
    { nom: "<strong>Encaixe</strong> (vozes alternadas)", cells: ["Fl. 1", "Cl. 1 (escrito La4)", "Fl. 2", "Cl. 2 (escrito Ré4)"] },
    { nom: "<strong>Envolvimento</strong> (uma família envolve a outra)", cells: ["Fl. 1", "Cl. 1 (escrito La4)", "Cl. 2 (escrito Fa♯4)", "Fl. 2"] },
  ],
  dispoScoreCaption:
    "As três disposições gravadas (alturas reais) — hastes para cima: flautas; hastes para baixo: clarinetes. Compasso 1: justaposição · compasso 2: encaixe · compasso 3: envolvimento. Ao piano, as três soam idênticas: só muda a repartição dos timbres.",
  btnDispo: "Ouvir o acorde (soante)",
  eqP2:
    "A justaposição mantém as cores distintas (dois andares de timbre); o encaixe funde os timbres numa liga homogénea; o envolvimento dá a cor da família <strong>exterior</strong> com o apoio da interior.",
  piegesWarn:
    "<strong>Armadilhas de equilíbrio clássicas</strong>: melodia confiada ao registo médio de uma madeira enquanto o acompanhamento das cordas ocupa o mesmo registo (desaparece); uma trompa sozinha frente a um tutti de cordas <em>f</em> (insuficiente: a trompa «conta» tradicionalmente por metade de um trombone); o <strong>buraco do médio</strong> — graves e agudos fornecidos, nada entre Do3 e Do4 — que torna o tutti oco (curso 19); e o <em>ff</em> uniforme escrito para toda a gente, que garante que só se ouvirão os metais.",

  entrainH2: "Treino",
  methodeH3: "O método, em resumo — as passagens de leitura",
  methodeP:
    "1) arquitetura da página (quem toca?); 2) baixo real (contrabaixos: − 8.ª!); 3) melodia e dobragens; 4) transposições resolvidas, famílias dobradas para dentro; 5) acordes nomeados; 6) juízo de equilíbrio. <strong>Nesta ordem, sempre.</strong>",
  exercicesH3: "Exercícios",
  exATitre: "Exercício a — drill de transposição",
  exAIntro:
    "Aquecimento de claves incluído. Dê a altura real de cada nota escrita, depois verifique ao teclado: toque o escrito, depois o real.",
  exAHeaders: ["Instrumento", "Escrito", "Real (correção)"],
  exARows: [
    { instrument: "Clarinete em Si♭", ecrit: "Sol4 · La4 · Si4", reel: "<strong>Fa4 · Sol4 · La4</strong> (− 2.ª M)" },
    { instrument: "Trompa em Fa", ecrit: "Do5 · Si4 · Sol4", reel: "<strong>Fa4 · Mi4 · Do4</strong> (− 5.ª P)" },
    { instrument: "Saxofone alto em Mi♭", ecrit: "Mi5 · Do5 · La4", reel: "<strong>Sol4 · Mi♭4 · Do4</strong> (− 6.ª M)" },
  ],
  exAEchauffement:
    "Aquecimento de claves: em clave de contralto, escreva La3 (2.ª linha) e Mi4 (4.ª linha); em clave de tenor, escreva Fa3 (2.ª linha) e Do4 (4.ª linha).",
  exBTitre: "Exercício b — mini-partitura geral para reduzir",
  exBIntro: "Quatro instrumentos, três acordes, tonalidade de Sol maior. Alturas <strong>escritas</strong>:",
  exBHeaders: ["Instrumento (clave)", "Acorde 1", "Acorde 2", "Acorde 3"],
  exBRows: [
    { instr: "Flauta (sol)", a: ["Do5", "Do5", "Si4"] },
    { instr: "Clarinete em Si♭ (sol)", a: ["Fa♯4", "Sol♯4", "La4"] },
    { instr: "Trompa em Fa (sol)", a: ["Ré4", "Mi4", "Ré4"] },
    { instr: "Violoncelo (fá)", a: ["Do3", "Ré3", "Sol2"] },
  ],
  exBConsigne:
    "<em>Instrução</em>: resolva as transposições, nomeie os três acordes e a cifra em Sol maior, depois proponha uma redução em duas pautas.",
  exBCorrige:
    "Transposições — Cl. Si♭ (− 2.ª M): Fa♯4 → <strong>Mi4</strong>, Sol♯4 → <strong>Fa♯4</strong>, La4 → <strong>Sol4</strong>; Trompa em Fa (− 5.ª P): Ré4 → <strong>Sol3</strong>, Mi4 → <strong>La3</strong>, Ré4 → <strong>Sol3</strong>; flauta e violoncelo soam como está escrito. Conteúdo real: acorde 1 = Do3–Sol3–Mi4–Do5 → <strong>Do maior = IV</strong>; acorde 2 = Ré3–La3–Fa♯4–Do5 → <strong>Ré 7.ª da dominante completa = V7</strong> (a 7.ª Do5, sustida na flauta desde o acorde 1, está preparada); acorde 3 = Sol2–Sol3–Sol4–Si4 → <strong>Sol maior = I</strong>, quinta omitida e fundamental triplicada — normal depois de um V7 completo: a sensível Fa♯4 sobe a Sol4, a 7.ª Do5 desce a Si4. Balanço: <strong>IV – V7 – I, cadência perfeita em Sol maior.</strong> Redução proposta: ME Do3+Sol3 / Ré3+La3 / Sol2+Sol3; MD Mi4+Do5 / Fa♯4+Do5 / Sol4+Si4.",
  exBScoreCaption:
    "A redução proposta, gravada (alturas reais): MD Mi4+Do5 · Fa♯4+Do5 · Sol4+Si4; ME Do3+Sol3 · Ré3+La3 · Sol2+Sol3.",
  voirCorrige: "Ver a correção",
  masquerCorrige: "Ocultar a correção",
  corrigeLabel: "Correção",
  capstoneH3: "Exercício c — síntese com o analisador",
  capstoneP:
    "Pegue num curto excerto orquestral livre de direitos (4 a 8 compassos de um coral de sinfonia, de um hino, de uma redução do domínio público), reduza-o você mesmo em alturas reais em duas pautas, exporte a redução em <strong>MusicXML</strong> e importe-a na ferramenta <strong>/analyse-partition</strong>: compare os acordes que a ferramenta identifica com a sua análise vertical. Qualquer discrepância tem uma destas três causas — uma transposição esquecida (contrabaixos!), uma clave de dó mal lida, uma dobragem tomada por uma nota nova. É precisamente a check-list deste curso.",
  linkAnalyseur: {
    titre: "Analisador de partituras",
    desc: "Importe a sua redução MusicXML e compare os acordes identificados com a sua análise vertical.",
  },

  quizH3: "Quiz",
  questions: [
    {
      q: "O clarinete em Si♭ lê Mi4. Qual é a altura real?",
      opts: ["Fa♯4", "Ré4", "Mi4", "Ré♭4"],
      a: 1,
      fb: "O clarinete em Si♭ soa uma 2.ª maior abaixo do escrito: Mi4 − 2.ª M = Ré4.",
    },
    {
      q: "A trompa em Fa lê Ré5. Altura real?",
      opts: ["La4", "Ré4", "Sol4", "La5"],
      a: 2,
      fb: "A trompa em Fa soa uma 5.ª perfeita mais baixo: Ré5 − 5.ª P = Sol4.",
    },
    {
      q: "O saxofone alto em Mi♭ lê Sol4. Altura real?",
      opts: ["Si♭3", "Mi♭4", "Si3", "Sol3"],
      a: 0,
      fb: "O sax alto soa uma 6.ª maior mais baixo: Sol4 − 6.ª M = Si♭3.",
    },
    {
      q: "O clarinete em La lê Do5. Altura real?",
      opts: ["Si♭4", "La3", "Mi♭5", "La4"],
      a: 3,
      fb: "O clarinete em La soa uma 3.ª menor mais baixo: Do5 − 3.ª m = La4.",
    },
    {
      q: "O saxofone tenor em Si♭ lê Do4. Altura real?",
      opts: ["Si♭3", "Si♭2", "Ré3", "Do3"],
      a: 1,
      fb: "O tenor soa uma 9.ª maior mais baixo (oitava + 2.ª M): Do4 − 8.ª = Do3, − 2.ª M = Si♭2. Não confundir com o clarinete em Si♭ (só 2.ª M).",
    },
    {
      q: "Em clave de dó na 3.ª linha (contralto), que nota ocupa a primeira linha (em baixo)?",
      opts: ["Fa3", "Mi3", "Sol3", "Ré3"],
      a: 0,
      fb: "Linhas da clave de contralto: Fa3 – La3 – Do4 – Mi4 – Sol4 (dó central na 3.ª linha).",
    },
    {
      q: "Em clave de dó na 4.ª linha (tenor), que nota ocupa a 5.ª linha (em cima)?",
      opts: ["Ré4", "Sol4", "Mi4", "Do4"],
      a: 2,
      fb: "Linhas da clave de tenor: Ré3 – Fa3 – La3 – Do4 – Mi4 (dó central na 4.ª linha).",
    },
    {
      q: "Violoncelos e contrabaixos leem a mesma parte: Do3. Qual é o verdadeiro baixo do acorde?",
      opts: ["Do3 (uníssono)", "Do4", "Do1", "Do2, nos contrabaixos"],
      a: 3,
      fb: "O contrabaixo soa uma oitava abaixo do escrito: o baixo real é Do2, uma oitava abaixo dos violoncelos — é a dobragem de oitava automática das estantes graves.",
    },
    {
      q: "Um coral confia a melodia aos oboés (f) dobrados pelos trompetes (f). O que se ouvirá?",
      opts: [
        "Sobretudo os trompetes: seria preciso marcá-los mf",
        "Uma liga equilibrada",
        "Sobretudo os oboés",
        "Nada: os timbres anulam-se",
      ],
      a: 0,
      fb: "Os metais dominam acusticamente as madeiras a dinâmica igual (curso 19): diferenciam-se as dinâmicas (trompetes mf, oboés f) para equilibrar a dobragem.",
    },
    {
      q: "O corne inglês lê Do5. Altura real?",
      opts: ["Sol4", "Fa4", "Fa5", "Do4"],
      a: 1,
      fb: "Como a trompa em Fa, o corne inglês soa uma 5.ª perfeita mais baixo: Do5 − 5.ª P = Fa4.",
    },
  ],

  listenBtn: "Ouvir",
};

export const cours47Content: Record<string, Cours47Locale> = { fr, en, de, es, it, pt };
