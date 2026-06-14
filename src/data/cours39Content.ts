// Cours 39 — Les 7èmes d'espèces (Niveau 2, aligné DEM 3Cp2)
// Contenu pédagogique : FR validé en premier (le quiz vit ici, comme dans cours11Content).
// Les autres locales sont aliasées sur le FR en attendant la traduction.

export interface Question { q: string; opts: string[]; a: number; fb: string; }
export interface Cours39Locale { questions: Question[]; }

const questionsFr: Question[] = [
  // Rappel V7 et point de départ
  {
    q: "L'accord de 7e de dominante (V7) sert de point de départ aux 7èmes d'espèces parce que...",
    opts: [
      "c'est le seul accord de 7e existant",
      "c'est l'accord de 7e déjà connu, dont la 7e ne se prépare pas obligatoirement",
      "il ne contient pas de dissonance",
      "il est toujours à l'état fondamental",
    ],
    a: 1,
    fb: "Le V7 est l'accord de 7e que l'élève connaît déjà : sa 7e (note sensible de la dissonance) peut entrer sans préparation grâce à sa fonction dominante. Les autres 7èmes d'espèces, elles, demandent en principe une préparation.",
  },
  // 7e sur chaque degré
  {
    q: "En empilant des tierces sur chaque degré de la gamme majeure, on obtient...",
    opts: [
      "un seul type d'accord de 7e",
      "sept accords de 7e (I7 à VII7) de natures différentes",
      "uniquement des accords de 7e de dominante",
      "trois accords de 7e",
    ],
    a: 1,
    fb: "Sur chaque degré (I, II, III, IV, V, VI, VII) on peut bâtir un accord de 7e en superposant trois tierces. Leur nature varie selon les intervalles fournis par la gamme.",
  },
  {
    q: "En do majeur, l'accord de 7e bâti sur le Ier degré (do – mi – sol – si) est...",
    opts: [
      "une 7e de dominante",
      "une 7e majeure (IM7)",
      "une 7e mineure",
      "une 7e diminuée",
    ],
    a: 1,
    fb: "Do–mi–sol–si : triade majeure surmontée d'une 7e majeure (do→si) = accord de 7e majeure, noté IM7. Le IVe degré (faM7) a la même nature en majeur.",
  },
  {
    q: "En do majeur, l'accord de 7e sur le IIe degré (ré – fa – la – do) est...",
    opts: [
      "une 7e majeure",
      "une 7e mineure (IIm7)",
      "une 7e de dominante",
      "une 7e mi-diminuée",
    ],
    a: 1,
    fb: "Ré–fa–la–do : triade mineure + 7e mineure = accord de 7e mineure (IIm7). Les degrés II, III et VI donnent des 7èmes mineures en majeur.",
  },
  {
    q: "En do majeur, l'accord de 7e sur le VIIe degré (si – ré – fa – la) est...",
    opts: [
      "une 7e majeure",
      "une 7e de dominante",
      "une 7e mi-diminuée (VIIø7)",
      "une 7e diminuée",
    ],
    a: 2,
    fb: "Si–ré–fa–la : triade diminuée (si–ré–fa) surmontée d'une 7e mineure (si→la) = accord de 7e mi-diminuée, noté VIIø7. C'est l'accord de sensible en mode majeur.",
  },
  {
    q: "En mineur harmonique, l'accord de 7e sur le VIIe degré (la sensible) est...",
    opts: [
      "une 7e mi-diminuée",
      "une 7e diminuée (VII°7)",
      "une 7e majeure",
      "une 7e mineure",
    ],
    a: 1,
    fb: "En la mineur harmonique : sol#–si–ré–fa = triade diminuée + 7e diminuée (sol#→fa) = accord de 7e diminuée (VII°7), empilement de trois tierces mineures. Couleur de tension caractéristique du mode mineur.",
  },
  // Nature des accords
  {
    q: "Parmi ces accords de 7e du mode majeur, lequel a une 7e MAJEURE ?",
    opts: ["IIm7", "V7", "IVM7", "VIIø7"],
    a: 2,
    fb: "Seuls le I et le IV portent une 7e majeure en mode majeur (IM7, IVM7). Le V donne la 7e de dominante, les II/III/VI des 7èmes mineures, le VII une 7e mi-diminuée.",
  },
  {
    q: "L'accord de 7e de dominante (V7) se distingue des autres 7èmes par sa structure...",
    opts: [
      "triade majeure + 7e majeure",
      "triade majeure + 7e mineure",
      "triade mineure + 7e mineure",
      "triade diminuée + 7e diminuée",
    ],
    a: 1,
    fb: "Le V7 = triade majeure surmontée d'une 7e mineure. Cette combinaison (majeure + mineure) ne se trouve que sur le Ve degré dans la gamme — d'où son rôle d'accord directionnel unique.",
  },
  // Préparation
  {
    q: "Préparer la 7e d'un accord, c'est...",
    opts: [
      "la faire entendre comme note consonante de l'accord précédent, à la même voix",
      "la doubler à l'octave",
      "la placer toujours à la basse",
      "l'introduire par un saut de quarte",
    ],
    a: 0,
    fb: "La 7e étant une dissonance, on la prépare : la note qui portera la 7e est d'abord entendue comme note consonante (souvent réelle de l'accord précédent), à la même voix, juste avant de devenir dissonante.",
  },
  {
    q: "La préparation de la 7e n'est PAS obligatoire sur quel accord ?",
    opts: ["IIm7", "VIm7", "V7 (7e de dominante)", "IVM7"],
    a: 2,
    fb: "Le V7 est l'exception classique : sa 7e peut entrer librement (par mouvement conjoint, voire par saut) car sa fonction dominante justifie la dissonance. Les autres 7èmes d'espèces se préparent en écriture rigoureuse.",
  },
  // Résolution
  {
    q: "Comment la 7e se résout-elle en règle générale ?",
    opts: [
      "elle monte par degré conjoint",
      "elle descend par degré conjoint",
      "elle reste immobile",
      "elle saute d'une quarte",
    ],
    a: 1,
    fb: "La dissonance de 7e se résout en descendant d'un degré conjoint (la 7e « tombe »). Dans V7→I, la 7e du V (fa en do majeur) descend sur mi (3ce du I).",
  },
  {
    q: "Dans l'enchaînement V7 → I en do majeur, la 7e (fa) résout sur...",
    opts: ["sol", "mi", "ré", "fa#"],
    a: 1,
    fb: "Fa (7e du V7) descend par degré conjoint sur mi, qui est la tierce de l'accord de tonique. Simultanément la sensible (si) monte sur do.",
  },
  // Renversements et chiffrage
  {
    q: "Le chiffrage du 1er renversement d'un accord de 7e (7e à la basse retirée, tierce à la basse) est...",
    opts: ["7", "6/5", "4/3", "+2 (ou 2)"],
    a: 1,
    fb: "État fondamental = 7 ; 1er renversement (tierce à la basse) = 6/5 ; 2e renversement (quinte à la basse) = 4/3 ; 3e renversement (7e à la basse) = +2 ou 2.",
  },
  {
    q: "Quand la 7e de l'accord est à la BASSE, on est au...",
    opts: [
      "1er renversement (6/5)",
      "2e renversement (4/3)",
      "3e renversement (chiffré +2 ou 2)",
      "état fondamental (7)",
    ],
    a: 2,
    fb: "La 7e à la basse correspond au 3e renversement, chiffré +2 (ou simplement 2). La basse, étant la 7e dissonante, doit alors se résoudre en descendant d'un degré.",
  },
  // Marche d'harmonie de 7èmes / VII
  {
    q: "La marche d'harmonie de 7èmes (chaîne de Corelli) procède le plus souvent par...",
    opts: [
      "cycle des quintes descendant, en alternant accords complets et incomplets",
      "tons entiers ascendants",
      "tierces parallèles",
      "demi-tons chromatiques",
    ],
    a: 0,
    fb: "La marche de 7èmes enchaîne les accords par quintes descendantes (ex. I–IV–VII–III–VI–II–V–I). Pour conduire correctement les voix, on alterne accords complets (4 sons) et incomplets (sans quinte), modèle hérité de Corelli et Bach.",
  },
];

export const cours39Content: Record<string, Cours39Locale> = {
  fr: { questions: questionsFr },
  // Traductions à venir — alias temporaire sur le FR (validation pédagogique d'abord).
  en: { questions: questionsFr },
  es: { questions: questionsFr },
  de: { questions: questionsFr },
  it: { questions: questionsFr },
  pt: { questions: questionsFr },
};
