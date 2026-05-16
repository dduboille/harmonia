"use client";

/**
 * Cours11.tsx
 * Harmonia · Niveau 2 · Cours 11 — Les extensions d'accords (9e, 11e, 13e)
 * Convention : affichage anglais, dotKeys PianoPlayer français
 */

import React, { useRef, useState } from "react";
import { useCoursI18n } from "@/hooks/useCoursI18n";
import { useCoursContent } from "@/hooks/useCoursContent";
import { cours11Content } from "@/data/cours11Content";
import PianoPlayer, { PianoPlayerRef } from "@/components/PianoPlayer";
import MaitreCard from "@/components/MaitreCard";

function playChord(ref: React.RefObject<PianoPlayerRef>, keys: string[], duration = 2.5) {
  keys.forEach(key => {
    const [note, octStr] = key.split(":");
    ref.current?.playNote(note, parseInt(octStr), { duration });
  });
}

function playArpeggio(ref: React.RefObject<PianoPlayerRef>, keys: string[], gap = 140) {
  keys.forEach((key, i) => {
    const [note, octStr] = key.split(":");
    setTimeout(() => ref.current?.playNote(note, parseInt(octStr), { duration: 2.2 }), i * gap);
  });
}

// ── Données extensions ────────────────────────────────────────────────────────

interface Extension {
  id: string;
  name: string;
  symbol: string;
  example: string;
  formula: string;
  color: string;
  bg: string;
  description: string;
  jazzContext: string;
  notes: string[];
  dotKeys: string[];
}

const EXTENSIONS: Extension[] = [
  {
    id: "maj9",
    name: "9e majeure",
    symbol: "Maj9",
    example: "CMaj9",
    formula: "1 – 3 – 5 – 7M – 9M",
    color: "#0F6E56",
    bg: "#E1F5EE",
    description: "Ajoute la 9te majeure (= 2de à l'octave) à un accord Maj7. La 9te majeure est la tension la plus consonante — elle enrichit sans déstabiliser.",
    jazzContext: "Accord de tonique par excellence. CMaj9 remplace CMaj7 dans la quasi-totalité du jazz et de la pop. La 9te donne de la chaleur et de la profondeur.",
    notes: ["C", "E", "G", "B", "D"],
    dotKeys: ["Do:3", "Mi:3", "Sol:3", "Si:3", "Ré:4"],
  },
  {
    id: "dom9",
    name: "9e (dominante)",
    symbol: "9",
    example: "G9, C9",
    formula: "1 – 3 – 5 – ♭7 – 9M",
    color: "#185FA5",
    bg: "#E6F1FB",
    description: "Ajoute la 9te majeure à un accord de dominante 7 (C7). Différence cruciale avec CMaj9 : la 7te est mineure (♭7). C9 sous-entend toujours une ♭7.",
    jazzContext: "Accord de dominante enrichi. G9 → C : la 9te (La dans G9) résout naturellement vers Sol dans CMaj9. Très courant dans le jazz des années 50-60.",
    notes: ["C", "E", "G", "B♭", "D"],
    dotKeys: ["Do:3", "Mi:3", "Sol:3", "Sib:3", "Ré:4"],
  },
  {
    id: "b9",
    name: "♭9 (9e mineure)",
    symbol: "7♭9",
    example: "G7♭9, B7♭9",
    formula: "1 – 3 – 5 – ♭7 – ♭9",
    color: "#993C1D",
    bg: "#FAECE7",
    description: "La 9te est bémolisée : elle forme un demi-ton au-dessus de la fondamentale. Très tendue, elle appelle une résolution urgente. La ♭9 est à 13 demi-tons de la fondamentale.",
    jazzContext: "Tension maximale sur la dominante. G7♭9 → Cm : le Lab crée une dissonance criante qui veut se résoudre. Caractéristique du jazz mineur, du bebop et du flamenco (E7♭9 → Am).",
    notes: ["C", "E", "G", "B♭", "D♭"],
    dotKeys: ["Do:3", "Mi:3", "Sol:3", "Sib:3", "Réb:4"],
  },
  {
    id: "sharp11",
    name: "#11 (11e augmentée)",
    symbol: "7#11 / Maj7#11",
    example: "C7#11, FMaj7#11",
    formula: "1 – 3 – (5) – ♭7 – #11",
    color: "#6B3FA0",
    bg: "#F0EAFA",
    description: "La 11te est augmentée (haussée d'un demi-ton). La #11 est le triton au-dessus de la fondamentale. On omet souvent la quinte juste pour éviter la dissonance avec #11. Couleur lydienne / lydienne-dominante.",
    jazzContext: "Accord lydien-dominant (C7#11 = mode lydien-dominant). Très utilisé comme dominante de substitution ou comme accord statique avec couleur lydienne. Thelonious Monk en fait sa signature.",
    notes: ["C", "E", "(G)", "B♭", "F#"],
    dotKeys: ["Do:3", "Mi:3", "Sib:3", "Fa#:4"],
  },
  {
    id: "13th",
    name: "13e majeure",
    symbol: "13",
    example: "G13, C13",
    formula: "1 – 3 – ♭7 – 13 (5, 9, 11 optionnels)",
    color: "#BA7517",
    bg: "#FAEEDA",
    description: "La 13te = 6te majeure à l'octave. G13 = G B F E (fondamentale, 3ce, ♭7, 13te). En pratique, on omet 5te, 9te et 11te. La 13te est la tension la plus haute de la série.",
    jazzContext: "G13 est l'accord de dominante le plus riche avant la résolution. La 13te (Mi dans G13) résout vers la 5te (Sol dans CMaj9). Caractéristique du jazz post-bop et de la musique soul.",
    notes: ["G", "B", "F", "E"],
    dotKeys: ["Sol:2", "Si:3", "Mi:4", "Fa:4"],
  },
];

// ── Données II-V-I étendu ─────────────────────────────────────────────────────

interface ChordDemo {
  symbol: string;
  function: string;
  description: string;
  dotKeys: string[];
  color: string;
}

const II_V_I: ChordDemo[] = [
  {
    symbol: "Dm9",
    function: "II — Sous-dominante",
    description: "Ré Fa La Do Mi — le IIm9 ajoute la 9te majeure (Mi) au IIm7. La 9te est toujours disponible sur les accords mineurs.",
    dotKeys: ["Ré:3", "Fa:3", "La:3", "Do:4", "Mi:4"],
    color: "#185FA5",
  },
  {
    symbol: "G13",
    function: "V — Dominante",
    description: "Sol Si Mi Fa — voicing jazz compact : fondamentale, 3ce, 13te, ♭7te. La 13te (Mi) résout vers Sol dans CMaj9.",
    dotKeys: ["Sol:2", "Si:3", "Mi:4", "Fa:4"],
    color: "#BA7517",
  },
  {
    symbol: "CMaj9",
    function: "I — Tonique",
    description: "Do Mi Sol Si Ré — la résolution. La 9te (Ré) arrive depuis La (13te de G13) par mouvement descendant de quinte.",
    dotKeys: ["Do:3", "Mi:3", "Sol:3", "Si:3", "Ré:4"],
    color: "#0F6E56",
  },
];

// ── Tensions disponibles ──────────────────────────────────────────────────────

interface TensionRow {
  function: string;
  example: string;
  available: string;
  avoid: string;
  color: string;
}

const TENSIONS: TensionRow[] = [
  {
    function: "Tonique Maj7",
    example: "CMaj7",
    available: "9M, #11, 13M",
    avoid: "11 juste (Fa — ♭9 avec Mi)",
    color: "#0F6E56",
  },
  {
    function: "Sous-dominante IIm7",
    example: "Dm7",
    available: "9M, 11, 13M",
    avoid: "♭9, #11",
    color: "#185FA5",
  },
  {
    function: "Dominante V7 (majeur)",
    example: "G7",
    available: "9M, #11, 13M",
    avoid: "11 juste (Sol — ♭9 avec Fa#...)",
    color: "#BA7517",
  },
  {
    function: "Dominante V7 (mineur)",
    example: "G7 → Cm",
    available: "♭9, #9, #11, ♭13",
    avoid: "9M, 13M naturelles",
    color: "#993C1D",
  },
];

// ── Quiz ──────────────────────────────────────────────────────────────────────

const ALL_QUESTIONS = [
  // Définitions
  { q: "Une 9e dans un accord est équivalente à...", opts: ["la 7te à l'octave supérieure", "la 2de à l'octave supérieure", "la 3ce à l'octave supérieure", "la 6te à l'octave supérieure"], a: 1, fb: "La 9te = 2de transposée à l'octave supérieure. Do → Ré est une 2de ; Do → Ré (octave au-dessus) est une 9te. Distance en demi-tons : 14 (12 + 2)." },
  { q: "Une 11e dans un accord est équivalente à...", opts: ["la 5te à l'octave", "la 4te à l'octave supérieure", "la 6te à l'octave", "la 3ce à l'octave supérieure"], a: 1, fb: "La 11te = 4te transposée à l'octave supérieure. Distance : 17 demi-tons (12 + 5). La 11te juste (parfaite) correspond à la sous-dominante." },
  { q: "Une 13e dans un accord est équivalente à...", opts: ["la 7te à l'octave", "la 5te à l'octave", "la 6te à l'octave supérieure", "la 9te à l'octave supérieure"], a: 2, fb: "La 13te = 6te transposée à l'octave supérieure. Distance : 21 demi-tons (12 + 9). La 13te de Sol est Mi — la 6te de Sol." },
  { q: "Les extensions s'obtiennent en empilant des tierces au-delà de...", opts: ["la 3ce", "la 5te", "la 7te", "la 9te"], a: 2, fb: "La série des extensions continue après la 7te : 7te → 9te → 11te → 13te. Chaque étape ajoute une tierce. Au-delà de la 13te, on retombe sur la fondamentale (15e = octave de la fondamentale)." },
  { q: "Combien de notes contient un accord de 13e complet ?", opts: ["5", "6", "7", "8"], a: 2, fb: "Un accord de 13e complet : 1 – 3 – 5 – 7 – 9 – 11 – 13 = 7 notes. C'est toute la gamme jouée simultanément ! En pratique, on en omet plusieurs (souvent la 5te, la 11te)." },
  { q: "Pourquoi n'utilise-t-on jamais toutes les notes d'un accord de 13e complet ?", opts: ["Trop de notes — 7 notes = toute la gamme simultanément", "Les extensions s'annulent entre elles", "Le piano n'a pas assez de touches", "C'est interdit en jazz"], a: 0, fb: "7 notes simultanées = toute la gamme. En pratique, on choisit les notes les plus caractéristiques : fondamentale, 3ce, ♭7te et la tension voulue (9te, #11 ou 13te)." },
  { q: "Quelle est la 9te majeure de Sol ?", opts: ["Fa#", "Si", "La", "Mi"], a: 2, fb: "Sol → La est une 2de majeure. À l'octave supérieure, Sol → La est une 9te majeure. Dans G9, la 9te est La (A)." },
  { q: "Quelle est la ♭9 de Mi ?", opts: ["Fa#", "Ré#", "Fa naturel", "Sol"], a: 2, fb: "La ♭9 de Mi = 9te bémolisée = Fa naturel. Distance : 13 demi-tons (12 + 1). Dans E7♭9, la ♭9 est Fa — le demi-ton supérieur crée une tension extrême." },
  { q: "Quelle est la #11 de Do ?", opts: ["Sib", "Fa naturel", "Fa#", "Sol#"], a: 2, fb: "La 11te juste de Do est Fa (5 demi-tons + octave = 17). La #11 hausse d'un demi-ton : Fa# (18 demi-tons). Dans C7#11, la note caractéristique est Fa#." },
  { q: "Quelle est la 13te de Sol ?", opts: ["La", "Si", "Ré", "Mi"], a: 3, fb: "La 13te de Sol = 6te majeure à l'octave = Mi. Sol → Mi = 9 demi-tons (6te majeure). À l'octave : 21 demi-tons. Dans G13, la 13te est Mi (E)." },
  // Notation
  { q: "CMaj9 — quelle est la 7te de cet accord ?", opts: ["♭7 (mineure)", "7M (majeure)", "pas de 7te", "♭9"], a: 1, fb: "Le 'Maj' dans CMaj9 indique une 7te majeure (Si en Do). Sans 'Maj', la 7te est mineure (♭7). CMaj9 = Do Mi Sol Si Ré." },
  { q: "C9 (sans 'Maj') — quelle est la 7te ?", opts: ["7M (majeure)", "♭7 (mineure / dominante)", "pas de 7te", "♭9"], a: 1, fb: "Sans 'Maj', la 7te est toujours mineure (dominante). C9 = C7 + 9te = Do Mi Sol Sib Ré. La notation 'C9' implique ♭7 + 9M." },
  { q: "Dm11 — quel type d'accord est-ce ?", opts: ["accord majeur avec #11", "accord mineur avec 7M et 11e juste", "accord mineur avec ♭7 et 11e juste", "accord dominant avec #11"], a: 2, fb: "Dm11 = accord mineur avec ♭7 et 11e juste. Formule : 1 – ♭3 – 5 – ♭7 – 9M – 11. La 11te juste est disponible sur les accords mineurs (pas de demi-ton avec ♭3)." },
  { q: "G13 — à quoi correspond le '13' depuis Sol ?", opts: ["Ré", "La", "Si", "Mi"], a: 3, fb: "La 13te de Sol = 6te majeure à l'octave = Mi (E). G13 contient (au minimum) : Sol Si Fa Mi — fondamentale, 3ce majeure, ♭7te, 13te." },
  { q: "La notation 'Maj' dans un accord (CMaj9) indique...", opts: ["la 9te est majeure", "la 7te est majeure (7M)", "l'accord est en mode majeur", "la fondamentale est majeure"], a: 1, fb: "'Maj' indique spécifiquement que la 7te est majeure (grande septième). Sans ce mot, par convention jazz, la 7te est mineure (dominante)." },
  { q: "G7♭9 — combien de notes différentes dans cet accord ?", opts: ["4", "5", "3", "6"], a: 1, fb: "G7♭9 = Sol Si (Ré) Fa Lab = fondamentale, 3ce, (5te), ♭7te, ♭9te = 5 notes (4 si on omet la 5te). La ♭9 = Lab (Ab) dans G7♭9." },
  { q: "C7#11 — la #11 est enharmonique de...", opts: ["Sol bémol", "Fa#", "Sib", "Mi♭"], a: 0, fb: "La #11 de Do est Fa# (6 demi-tons + octave). Fa# est enharmonique de Sol♭. Dans C7#11, Fa# peut aussi s'écrire Sol♭ — même son, notation différente." },
  // Construction
  { q: "CMaj9 en Do se construit avec...", opts: ["Do Ré Mi Sol Si", "Do Mi Sol Si Ré", "Do Mi Sol Sib Ré", "Do Mi Fa Si Ré"], a: 1, fb: "CMaj9 = 1 – 3 – 5 – 7M – 9M = Do – Mi – Sol – Si – Ré. La 7te est majeure (Si), la 9te est Ré (2de de Do à l'octave)." },
  { q: "Dm9 en Ré se construit avec...", opts: ["Ré Fa La Si Mi", "Ré Fa# La Do Mi", "Ré Fa La Do Mi", "Ré Mi Fa La Do"], a: 2, fb: "Dm9 = 1 – ♭3 – 5 – ♭7 – 9M = Ré – Fa – La – Do – Mi. La ♭3 = Fa, ♭7 = Do, 9te = Mi (2de majeure de Ré à l'octave)." },
  { q: "G13 en Sol — quelles notes essentielles garder dans un voicing jazz compact ?", opts: ["1, 5, 9, 11", "1, 3, ♭7, 13", "1, 3, 5, 9, 13", "1, 9, 11, 13"], a: 1, fb: "Dans G13, l'essentiel est : Sol (fondamentale), Si (3ce — précise la qualité de l'accord), Fa (♭7te — tension dominante), Mi (13te — la couleur). La 5te, 9te, 11te peuvent être omises." },
  { q: "Dans C7#11, on omet souvent la quinte juste (Sol) car...", opts: ["elle crée un accord trop large", "elle crée une dissonance de ♭9 avec Fa# (#11)", "elle est trop grave", "elle double la 13te"], a: 1, fb: "Sol (5te juste) et Fa# (#11) sont distants d'un demi-ton augmenté — cette friction est évitée. En omettant Sol, C7#11 gagne en clarté : Do Mi Sib Fa# = 1, 3, ♭7, #11." },
  { q: "La 13te de Fa est...", opts: ["Si♭", "Mi", "Ré", "La"], a: 2, fb: "La 13te = 6te majeure à l'octave. 6te majeure de Fa = Ré (9 demi-tons). FMaj13 contient donc Ré comme 13te." },
  { q: "La 9te de Si♭ est...", opts: ["Ré♭", "Do", "La", "Si"], a: 1, fb: "La 9te de Si♭ = 2de majeure à l'octave. Si♭ → Do est une 2de majeure. Dans B♭Maj9, la 9te est Do (C)." },
  // Tensions disponibles
  { q: "La règle des 'tensions disponibles' dit qu'une tension est utilisable si...", opts: ["elle est dans la gamme majeure", "elle ne crée pas de demi-ton avec une note de l'accord (sauf entre 7te et fondamentale)", "elle est toujours une 9te", "elle est plus haute que la 7te"], a: 1, fb: "Une tension est 'disponible' si elle ne crée pas d'intervalle de ♭9 (demi-ton + octave) avec les notes de l'accord. La ♭9 est la dissonance rédhibitoire — sauf quand elle est elle-même la tension voulue." },
  { q: "Sur CMaj7, quelle extension est NON disponible ?", opts: ["9te majeure (Ré)", "11te juste (Fa)", "13te majeure (La)", "#11 (Fa#)"], a: 1, fb: "La 11te juste (Fa) crée un demi-ton avec la 3ce majeure (Mi) de CMaj7. Mi – Fa = demi-ton = ♭9 — tension rédhibitoire. La #11 (Fa#) est disponible car Fa# est à ton de Mi." },
  { q: "Sur Dm7, la 11te juste (Sol) est-elle disponible ?", opts: ["Non — crée un ♭9 avec Fa", "Oui — Sol est à ton de Fa (♭3 de Ré)", "Non — interdit sur les accords mineurs", "Oui, mais uniquement en soprano"], a: 1, fb: "Fa (♭3 de Dm7) → Sol = 2de majeure = ton entier. Pas de demi-ton problématique. La 11te est disponible sur tous les accords mineurs, contrairement aux accords majeurs." },
  { q: "Sur G7 (dominante en Do majeur), les tensions disponibles sont...", opts: ["♭9, #9, #11, ♭13 uniquement", "9M, #11, 13M", "uniquement 9M", "toutes les extensions sans restriction"], a: 1, fb: "En Do majeur, G7 peut utiliser 9M (La), #11 (Do# — mais attention au contexte), 13M (Mi). La ♭9 (Lab) est réservée au contexte mineur ou au jazz alteré." },
  { q: "En mineur (G7 → Cm), quelles tensions sont disponibles sur la dominante ?", opts: ["9M, 13M seulement", "♭9, #9, #11, ♭13 (tensions altérées)", "11 juste, 13M uniquement", "aucune tension n'est disponible"], a: 1, fb: "En mode mineur, la dominante peut recevoir toutes les tensions altérées : ♭9 (Lab), #9 (La# = Si♭ enharmonique), #11 (Do#), ♭13 (Mi♭). Ces tensions proviennent de la gamme mineure harmonique et de la gamme altérée." },
  { q: "La #11 sur CMaj7 est disponible car...", opts: ["Fa# est dans la gamme de Do majeur", "Fa# est à distance de ton de Mi (3ce majeure de Do)", "Fa# remplace la quinte Sol", "La #11 est toujours disponible"], a: 1, fb: "Mi (3ce de CMaj7) → Fa# (#11) = 2de majeure = ton entier, pas de demi-ton. La #11 est disponible sur tous les accords majeurs. Elle leur donne une couleur lydienne caractéristique." },
  // Jazz et II-V-I
  { q: "La progression Dm9 – G13 – CMaj9 est une version étendue du...", opts: ["I-IV-V", "II-V-I", "I-VI-II-V", "IV-V-I"], a: 1, fb: "Dm9 = IIm9, G13 = V13, CMaj9 = IMaj9 en Do majeur. C'est le II-V-I fondamental du jazz, enrichi d'extensions sur chaque accord." },
  { q: "Dans un II-V-I jazz en Do majeur, le IIm est généralement...", opts: ["DMaj9", "Dm7 sans extension", "Dm9", "D9"], a: 2, fb: "Le IIm en Do majeur est Dm. Avec extension, il devient Dm9 (Ré Fa La Do Mi). La 9te (Mi) est toujours disponible sur les accords mineurs et enrichit la couleur sans tension." },
  { q: "Dm9 → G13 → CMaj9 : quelle conduite de voix s'entend dans la résolution G13 → CMaj9 ?", opts: ["La 13te de G13 (Mi) reste en place dans CMaj9", "La ♭7 de G13 (Fa) descend vers Mi dans CMaj9", "La 3ce de G13 (Si) descend vers Do dans CMaj9", "La 13te de G13 (Mi) monte vers Fa dans CMaj9"], a: 1, fb: "La ♭7te (Fa) de G13 descend d'un demi-ton vers Mi (3ce de CMaj9). C'est la résolution classique de la sensible harmonique — le mouvement de voix le plus tendu dans le II-V-I." },
  { q: "En mineur, le II-V-I avec extensions typique est...", opts: ["Dm9 – G13 – CMaj9", "Dm7♭5 – G7♭9 – Cm(Maj7)", "Dm11 – G9 – CMaj7#11", "D9 – G13 – Cm9"], a: 1, fb: "En Do mineur : IIm7♭5 = Dm7♭5 (accord demi-diminué), V7 avec ♭9 = G7♭9 (tension maximale vers mineur), I = CmMaj7 ou Cm9. La ♭9 est la tension caractéristique de la dominante en mineur." },
  { q: "Pourquoi utilise-t-on des extensions dans le jazz plutôt que de simples triades ?", opts: ["Par convention historique uniquement", "Pour enrichir la couleur harmonique tout en conservant la fonction tonale", "Pour éviter les dissonances", "Pour simplifier la lecture"], a: 1, fb: "Les extensions (9te, 11te, 13te) ajoutent de la couleur et du caractère sans changer la fonction tonale de l'accord. Dm9 reste sous-dominant, G13 reste dominant, CMaj9 reste tonique." },
  // Formules
  { q: "CMaj9 = ...", opts: ["1 – 3 – 5 – ♭7 – 9M", "1 – 3 – ♭5 – 7M – 9M", "1 – 3 – 5 – 7M – 9M", "1 – ♭3 – 5 – 7M – 9M"], a: 2, fb: "CMaj9 : 1 (Do) – 3 (Mi) – 5 (Sol) – 7M (Si) – 9M (Ré). Toutes les tierces sont majeures (1→3, 5→7M) sauf 3→5 (tierce mineure Sol dans C majeur = quinte juste). La 7te est bien majeure (Maj)." },
  { q: "C9 (dominante) = ...", opts: ["1 – 3 – 5 – 7M – 9M", "1 – 3 – 5 – ♭7 – 9M", "1 – 3 – 5 – ♭7 – ♭9", "1 – ♭3 – 5 – ♭7 – 9M"], a: 1, fb: "C9 = 1 (Do) – 3 (Mi) – 5 (Sol) – ♭7 (Sib) – 9M (Ré). C'est C7 + 9te majeure. La 7te est mineure (♭7, dominante) — d'où l'absence de 'Maj' dans la notation." },
  { q: "Cm9 = ...", opts: ["1 – ♭3 – 5 – 7M – 9M", "1 – 3 – 5 – ♭7 – 9M", "1 – ♭3 – 5 – ♭7 – 9M", "1 – ♭3 – ♭5 – ♭7 – 9M"], a: 2, fb: "Cm9 = 1 (Do) – ♭3 (Mi♭) – 5 (Sol) – ♭7 (Si♭) – 9M (Ré). C'est Cm7 + 9te majeure. La 9te reste naturelle (majeure) même sur un accord mineur." },
  { q: "C7♭9 = ...", opts: ["1 – 3 – 5 – 7M – ♭9", "1 – 3 – 5 – ♭7 – ♭9", "1 – 3 – ♭5 – ♭7 – ♭9", "1 – ♭3 – 5 – ♭7 – ♭9"], a: 1, fb: "C7♭9 = 1 (Do) – 3 (Mi) – 5 (Sol) – ♭7 (Sib) – ♭9 (Réb). C'est C7 + ♭9. La 9te est bémolisée (Réb), la 7te est mineure (Sib). Très tension, résout vers Fm ou F." },
  { q: "C7#11 = ...", opts: ["1 – 3 – 5 – 7M – #11", "1 – 3 – (5) – ♭7 – #11", "1 – ♭3 – 5 – ♭7 – #11", "1 – 3 – #5 – ♭7 – #11"], a: 1, fb: "C7#11 = 1 (Do) – 3 (Mi) – (5 omis) – ♭7 (Sib) – #11 (Fa#). La quinte est souvent omise pour éviter la friction avec #11. C'est l'accord lydien-dominant — mode Lydien-Mixolydien." },
  { q: "C13 (voicing jazz simplifié) = ...", opts: ["1 – 3 – 5 – 7M – 13", "1 – 3 – ♭7 – 13", "1 – 3 – 5 – ♭7 – 9 – 11 – 13 (complet)", "1 – ♭3 – ♭7 – 13"], a: 1, fb: "En pratique jazz, C13 se voicé avec l'essentiel : 1 – 3 – ♭7 – 13 (Do – Mi – Sib – La). Les notes 5te, 9te, 11te sont omises. La 13te (La) est la couleur principale." },
  // Intervalles en demi-tons
  { q: "L'intervalle de 9te majeure en demi-tons = ...", opts: ["13", "14", "15", "12"], a: 1, fb: "9te majeure = octave + 2de majeure = 12 + 2 = 14 demi-tons. Ex : Do → Ré (9te) = 14 demi-tons." },
  { q: "L'intervalle de 11te juste en demi-tons = ...", opts: ["16", "17", "18", "15"], a: 1, fb: "11te juste = octave + quarte juste = 12 + 5 = 17 demi-tons. Ex : Do → Fa (11te) = 17 demi-tons." },
  { q: "L'intervalle de 13te majeure en demi-tons = ...", opts: ["20", "21", "22", "19"], a: 1, fb: "13te majeure = octave + 6te majeure = 12 + 9 = 21 demi-tons. Ex : Do → La (13te) = 21 demi-tons." },
  { q: "La ♭9 en demi-tons depuis la fondamentale = ...", opts: ["12", "13", "14", "11"], a: 1, fb: "♭9 = octave + demi-ton = 12 + 1 = 13 demi-tons. C'est l'intervalle le plus tendu des extensions — presque une octave, mais pas tout à fait." },
  { q: "La #11 en demi-tons depuis la fondamentale = ...", opts: ["17", "18", "19", "16"], a: 1, fb: "#11 = octave + triton = 12 + 6 = 18 demi-tons. Le triton (6 demi-tons) est l'intervalle le plus instable. La #11 est donc une tension forte mais caractéristique." },
  // Comparaisons
  { q: "CMaj7 vs CMaj9 — quelle est la seule différence ?", opts: ["la fondamentale change", "CMaj9 ajoute la 9te majeure (Ré) à CMaj7", "la 7te change", "CMaj9 omet la 5te"], a: 1, fb: "CMaj9 = CMaj7 + 9te majeure. CMaj7 : Do Mi Sol Si. CMaj9 : Do Mi Sol Si Ré. C'est simplement l'ajout de Ré — la 2de (9te) de Do." },
  { q: "G7 vs G9 — quelle est la différence ?", opts: ["la 7te change dans G9", "G9 ajoute la 9te majeure (La) à G7", "G9 omet la 5te", "G9 change la fondamentale"], a: 1, fb: "G9 = G7 + 9te majeure. G7 : Sol Si Ré Fa. G9 : Sol Si Ré Fa La. La 9te de Sol est La (A). La ♭7te (Fa) reste — c'est toujours un accord de dominante." },
  { q: "G9 vs G7♭9 — quelle est la différence ?", opts: ["seule la 7te change", "G9 a une 9te naturelle (La), G7♭9 a une ♭9 (Lab) — demi-ton différence", "G9 a une 7M, G7♭9 a une ♭7", "ils sont identiques"], a: 1, fb: "G9 : 9te = La (A naturel). G7♭9 : ♭9 = Lab (A♭). Un seul demi-ton de différence, mais la couleur est radicalement différente — G9 est chaleureux, G7♭9 est très tendu." },
  { q: "C7#11 et FMaj7#11 partagent quel concept ?", opts: ["exactement les mêmes notes", "la même fondamentale", "la couleur lydienne (#11 = triton)", "la même 7te"], a: 2, fb: "#11 correspond au mode lydien (sur accord majeur) ou lydien-dominant (sur accord de dominante). C7#11 et FMaj7#11 utilisent tous deux le triton au-dessus de leur fondamentale comme couleur principale." },
  // Voicings pratiques
  { q: "Dans un voicing jazz, la note la moins importante est souvent...", opts: ["la 3ce", "la fondamentale", "la 7te", "la 9te"], a: 1, fb: "La fondamentale est souvent omise dans les voicings jazz pianistiques car la contrebasse la joue. Les notes essentielles sont 3ce et 7te (les 'guide tones') qui définissent la qualité et la tension de l'accord." },
  { q: "Un 'shell voicing' contient...", opts: ["toutes les extensions", "fondamentale + 3ce + 7te uniquement", "3ce + 7te (sans fondamentale)", "5te + 7te + 9te"], a: 2, fb: "Un shell voicing ('voicing coquille') = 3ce + 7te, sans fondamentale. Ces deux notes définissent complètement l'accord : elles indiquent la qualité (maj/min) et la fonction (7M, ♭7). La basse joue la fondamentale." },
  { q: "Pourquoi les pianistes jazz omettent-ils souvent la 5te dans leurs voicings ?", opts: ["pour simplifier la lecture", "la 5te est la note la moins informative — la basse la joue souvent", "la 5te crée une dissonance", "la 5te est trop grave"], a: 1, fb: "La quinte juste (5te) est acoustiquement présente dans le timbre de la fondamentale (harmonique 3). Elle n'apporte pas d'information sur la qualité ou les tensions de l'accord — on l'omet pour laisser place aux extensions." },
  { q: "La 11te juste est évitée sur les accords majeurs car...", opts: ["elle sonne trop grave", "elle crée un ♭9 avec la 3ce majeure (ex : Mi – Fa en C)", "elle n'existe pas en harmonie", "elle double la quinte"], a: 1, fb: "Mi (3ce de CMaj7) + Fa (11te) = demi-ton = ♭9. Cette dissonance de ♭9 avec la 3ce est rédhibitoire. Solution : utiliser la #11 (Fa#) à la place — elle est disponible et sonne bien (couleur lydienne)." },
  // Applications
  { q: "G7♭9 en Do mineur résout naturellement vers...", opts: ["CMaj7", "Cm ou CmMaj7", "DMaj9", "Am9"], a: 1, fb: "G7♭9 est la dominante en Do mineur (V7♭9 → Im). La ♭9 (Lab) provient du IIe degré bémolisé de la gamme mineure harmonique et crée une tension maximale vers CmMaj7 ou Cm7." },
  { q: "Dans quel style la progression V7♭9 → Im est-elle particulièrement caractéristique ?", opts: ["Pop moderne", "Flamenco, Jazz mineur, Bebop", "Rock alternatif", "Musique baroque uniquement"], a: 1, fb: "V7♭9 → Im est au cœur du flamenco (E7♭9 → Am), du jazz mineur (G7♭9 → Cm) et du bebop. C'est la tension maximale de dominante en contexte mineur." },
  { q: "Quel accord incarne la couleur 'lydienne-dominante' ?", opts: ["CMaj7#11", "C7#11", "Cm9", "C13"], a: 1, fb: "C7#11 = accord lydien-dominant : il combine la 7te mineure (dominant = mixolydien) et la #11 (lyidien). C'est le mode Lydien-Mixolydien (4e mode de la gamme mineure mélodique) — signature de Thelonious Monk et du jazz moderne." },
  { q: "FMaj7#11 → CMaj9 illustre...", opts: ["une cadence parfaite V-I", "un mouvement modal IV → I avec couleur lydienne", "une modulation", "une cadence rompue"], a: 1, fb: "FMaj7 = IVMaj7 en Do majeur. Avec #11 (Si), il prend une couleur lydienne. Le mouvement IV → I (sous-dominant → tonique) avec cette couleur est très courant dans le jazz et la musique de film." },
  // Culture
  { q: "Bill Evans est particulièrement connu pour ses voicings riches en...", opts: ["triades simples", "9tes et 11tes en voix intérieures, clusters expressifs", "accords de quintes vides", "accords diminués"], a: 1, fb: "Bill Evans a révolutionné le piano jazz avec des voicings incluant 9tes, 11tes et 13tes dans les voix intérieures. Son approche 'impressionniste' (influencée par Ravel et Debussy) a défini le son du piano jazz moderne." },
  { q: "L'album 'Kind of Blue' (Miles Davis, 1959) utilise des extensions principalement...", opts: ["sur des progressions rapides II-V-I", "sur des accords modaux statiques (Dm11 dans So What)", "sur des accords de blues uniquement", "sans aucune extension"], a: 1, fb: "Kind of Blue est l'album fondateur du jazz modal. So What est construit sur un accord statique Dm11 (puis E♭m11). Les extensions créent de la richesse dans la texture sans progressions harmoniques rapides." },
  { q: "Le 'Hendrix chord' (E7#9) est caractérisé par...", opts: ["uniquement la 7te mineure", "la coexistence de 3ce majeure (Sol#) et de #9 (Sol nat.) — ambiguïté majeur/mineur", "la fondamentale doublée", "la quinte augmentée"], a: 1, fb: "E7#9 contient Sol# (3ce majeure) ET Sol naturel (#9 = ♭3 à l'octave). Cette coexistence crée une ambiguïté majeur/mineur unique, très utilisée dans le rock (Purple Haze de Jimi Hendrix, 1967)." },
  { q: "McCoy Tyner (pianiste de John Coltrane) est connu pour ses voicings en...", opts: ["triades uniquement", "4tes empilées (quartal harmony)", "accords diminués", "octaves parallèles"], a: 1, fb: "McCoy Tyner utilisait abondamment des voicings en quartes superposées (quartal harmony) — ex : Do Fa Sib Mi♭. Cette technique évite les 3ces traditionnelles et crée une sonorité ouverte et modale très caractéristique." },
  { q: "Herbie Hancock dans 'Maiden Voyage' utilise des accords de...", opts: ["11te juste suspendus avec 9te", "♭9 uniquement", "triades majeures simples", "#11 systématique"], a: 0, fb: "Maiden Voyage est construit sur des accords 'sus' avec 9te et 11te (ex : D7sus4 add9). Cette texture planante, sans 3ce définitive, crée l'atmosphère aquatique et modale de l'album (1965)." },
  // Avancé
  { q: "La substitution tritonique de G7 est...", opts: ["C7", "A♭7", "D♭7", "F7"], a: 2, fb: "La substitution tritonique remplace V7 par l'accord situé à un triton (6 demi-tons). G → D♭ = 6 demi-tons. D♭7 partage les notes de guide (3ce/7te) avec G7 : Fa = ♭7 de G7 = 3ce de D♭7 ; Si = 3ce de G7 = ♭7 de D♭7." },
  { q: "La différence entre G9 et G7#9 est...", opts: ["seule la 7te change", "G7#9 a une 9te augmentée (La#/Si♭), G9 a une 9te majeure (La)", "G9 a une 7M, G7#9 a une ♭7", "ils sont identiques"], a: 1, fb: "#9 = 9te augmentée = même son que ♭3 à l'octave. Dans G7#9 : La# (enharmonique Si♭). C'est le 'Hendrix chord' — la coexistence de Si (3ce majeure) et Si♭ (#9) crée l'ambiguïté majeur/mineur." },
  { q: "En harmonie classique, une 9te sur un accord est traitée comme...", opts: ["une tension disponible permanente", "une appoggiature ou note étrangère qui résout", "une erreur harmonique", "un accord de passage"], a: 1, fb: "En harmonie classique (Bach, Beethoven), la 9te est une note de passage ou une appoggiature — elle arrive sur le temps fort et résout vers l'octave ou la 8te en descendant d'un ton. En jazz, elle reste comme couleur sans résoudre." },
  { q: "La ♭13 de Sol est...", opts: ["Mi naturel", "Ré#", "Mi♭", "Fa#"], a: 2, fb: "La 13te naturelle de Sol = Mi. La ♭13 = 13te bémolisée = Mi♭. Dans G7♭13, Mi♭ crée une tension altérée — combinée avec ♭9 (Lab), elle définit l'accord 'altéré' du jazz (G7alt)." },
  { q: "Un accord 'altéré' (ex: G7alt) peut contenir...", opts: ["seulement ♭9", "seulement #11", "♭9, #9, #11, ♭13 — toutes les tensions altérées", "uniquement 13te majeure"], a: 2, fb: "G7alt (accord altéré) = G7 avec toutes les tensions altérées : ♭9 (Lab), #9 (La#), #11 (Do#), ♭13 (Mi♭). Il correspond au mode 'superlocrien' (7e mode de la gamme mineure mélodique). Tension maximale avant résolution." },
  { q: "Dm7♭5 (accord demi-diminué) — quelle extension est disponible ?", opts: ["9M et 11 juste", "♭9 et #11 uniquement", "aucune", "13M uniquement"], a: 0, fb: "Sur Dm7♭5 (Ré Fa Lab Do), la 9te majeure (Mi) et la 11te juste (Sol) sont disponibles. Dm9♭5 (Ré Fa Lab Do Mi) est courant dans le II-V-I mineur (IIm7♭5 → V7♭9 → Im)." },
  { q: "La notation 'Dm11' implique par convention...", opts: ["Dm7 avec 11te uniquement, sans 9te", "Dm7 avec 9te ET 11te (toutes les extensions jusqu'à la 11te)", "Dm avec #11 seulement", "Dm avec 11te et 13te"], a: 1, fb: "Par convention, si on note un accord jusqu'à la 11te, cela implique toutes les extensions en dessous : Dm11 = Dm7 + 9te + 11te. Dm11 = Ré Fa La Do Mi Sol (si complet)." },
  { q: "La tension #9 dans un accord de dominante crée quel effet particulier ?", opts: ["une résolution très douce", "une ambiguïté majeur/mineur — coexistence de 3ce majeure et ♭3 à l'octave", "une stabilité accrue", "une couleur lydienne"], a: 1, fb: "#9 = ♭3 à l'octave supérieure. Sur G7#9, Si (3ce M) et Si♭ (#9 = ♭3) coexistent. Cette ambiguïté tonale est très expressive — le son est à la fois majeur (3ce) et mineur (#9). Signature du blues et du rock." },
  { q: "Quel pianiste jazz du XXe siècle a le plus influencé l'utilisation des extensions ?", opts: ["Scott Joplin", "Bill Evans", "Jelly Roll Morton", "Fats Waller"], a: 1, fb: "Bill Evans (1929-1980) a défini l'usage moderne des extensions au piano jazz. Son approche impressionniste avec des voicings riches en 9tes, 11tes et 13tes — influencée par Chopin, Debussy et Ravel — est devenue la référence du piano jazz contemporain." },
  { q: "Pourquoi la #11 donne-t-elle une couleur 'lydienne' à un accord majeur ?", opts: ["Car le mode lydien a une 4te bémolisée", "Car le mode lydien a une 4te augmentée (#4) — identique à #11", "Car lydien signifie 'aigu' en grec", "Car Bill Evans l'utilisait en mode lydien"], a: 1, fb: "Le mode lydien (IVe mode de la gamme majeure) se caractérise par sa 4te augmentée (#4). La #11 = 4te augmentée à l'octave. CMaj7#11 sonne 'lydien' car il contient exactement cette note caractéristique du mode." },
  { q: "G13 dans une progression II-V-I : comment la 13te résout-elle ?", opts: ["La 13te (Mi) monte vers Fa dans CMaj9", "La 13te (Mi) descend vers Ré (9te de CMaj9) par mouvement de quinte", "La 13te reste en place — elle est dans CMaj9", "La 13te disparaît — elle ne résout pas"], a: 2, fb: "Mi (13te de G13) reste présent dans CMaj9 comme sa 3ce (Mi = 3ce de Do). La note se maintient en place lors de la résolution G13 → CMaj9 — c'est une conduite de voix économique. G (basse) descend de quinte vers C." },
  { q: "Sur FMaj7 (IVMaj7 en Do majeur), la 9te majeure (Sol) est-elle disponible ?", opts: ["Non — Sol crée une ♭9 avec Fa", "Oui — Sol est à ton de Fa (la fondamentale)", "Non — Sol est dans la gamme de Do, pas de Fa", "Oui — mais uniquement en basse"], a: 0, fb: "Attention : Sol (9te de Fa) crée un intervalle de 2de (demi-ton supérieur) avec... non, Sol est à ton de Fa (2de majeure). Aucun demi-ton problématique. Sol (9M de FMaj7) est disponible. FMaj9 est très utilisé." },
  { q: "Quel intervalle est commun au triton (♭5) et à la #11 ?", opts: ["Ils ne sont pas liés", "Ce sont exactement le même intervalle (triton = 6 demi-tons = augmented 4th = #11 à l'octave)", "La #11 est plus grand que le triton", "Le triton est à 5 demi-tons, la #11 à 6"], a: 1, fb: "Triton = 6 demi-tons = quarte augmentée = quinte diminuée. La #11 = 4te augmentée à l'octave = 18 demi-tons = octave + triton. La #11 est donc le triton 'ouvert' (à l'octave supérieure)." },
  { q: "Dm9 → G13 → CMaj9 : quelle est la qualité harmonique de cette progression ?", opts: ["Modulatoire — on change de tonalité", "Tonale — II-V-I en Do majeur avec extensions", "Modale — on reste sur un accord statique", "Plagale — SD → T seulement"], a: 1, fb: "C'est une progression tonale II-V-I en Do majeur, enrichie d'extensions. La fonction reste identique : Dm9 = sous-dominant, G13 = dominant, CMaj9 = tonique. Les extensions colorent sans modifier la fonction." },
  { q: "Quelle est la couleur caractéristique de CMaj7#11 vs CMaj7 ?", opts: ["CMaj7#11 est plus sombre", "CMaj7#11 est plus brillant/onirique — couleur lydienne", "Ils ont la même couleur", "CMaj7#11 est plus instable et appelle une résolution"], a: 1, fb: "CMaj7#11 a une couleur lydienne — brillante, onirique, 'flottante'. La #11 (Fa#) évite la stabilité parfaite de CMaj7 et crée une légère tension non résolue, très utilisée pour les accords de tonique en jazz et musique de film." },
  { q: "Sur un accord Am7 (IIm7 en sol majeur), quelles extensions sont disponibles ?", opts: ["♭9, #11, ♭13", "9M (Si), 11 juste (Ré), 13M (Fa#)", "9M uniquement", "11 juste uniquement"], a: 1, fb: "Am7 = La Do Mi Sol. 9M = Si (à ton de La et à ton de Do — pas de ♭9). 11 juste = Ré (à ton de Do et de Mi — pas de ♭9). 13M = Fa# (à ton de Mi). Toutes ces extensions sont disponibles sur Am7." },
  { q: "Quelle est la différence fondamentale entre l'approche classique et jazz des 9tes ?", opts: ["Le jazz n'utilise pas de 9tes", "En jazz la 9te reste comme couleur ; en classique c'est une note étrangère qui résout", "Les intervalles sont calculés différemment", "La 7te est différente dans les deux contextes"], a: 1, fb: "En harmonie classique (style tonal commun), la 9te est un 'non-chord tone' — appoggiature ou retard — qui résout vers l'octave. En jazz, la 9te est une tension disponible qui reste comme partie intégrante de l'accord, sans résoudre." },
];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const QUIZ_COUNT = 10;

const S = {
  wrap:     { fontFamily: "var(--font-sans, system-ui)", maxWidth: 720, margin: "0 auto", padding: "0 1rem 3rem" } as React.CSSProperties,
  header:   { padding: "1.5rem 0 1rem", borderBottom: "0.5px solid #e5e5e5", marginBottom: "1.25rem" } as React.CSSProperties,
  badge:    { display: "inline-block", background: "#F0EAFA", color: "#6B3FA0", fontSize: 11, fontWeight: 500, padding: "2px 10px", borderRadius: 20, marginBottom: 6 } as React.CSSProperties,
  h1:       { fontSize: 26, fontWeight: 500, color: "#111", margin: 0 } as React.CSSProperties,
  subtitle: { fontSize: 14, color: "#666", marginTop: 4, lineHeight: 1.6 } as React.CSSProperties,
  nav:      { display: "flex", gap: 6, flexWrap: "wrap" as const, marginBottom: "1.5rem" },
  pill:     (active: boolean): React.CSSProperties => ({
    fontSize: 12, padding: "5px 14px",
    border: `0.5px solid ${active ? "#333" : "#ddd"}`,
    borderRadius: 20, cursor: "pointer",
    background: active ? "#111" : "transparent",
    color: active ? "#fff" : "#666",
    transition: "all .15s",
  }),
  h2:       { fontSize: 17, fontWeight: 500, color: "#111", marginBottom: 8 } as React.CSSProperties,
  h3:       { fontSize: 14, fontWeight: 500, margin: "20px 0 10px", color: "#111" } as React.CSSProperties,
  p:        { fontSize: 14, color: "#555", lineHeight: 1.75, marginBottom: "1rem" } as React.CSSProperties,
  infoBox:  { borderLeft: "2px solid #6B3FA0", padding: "8px 14px", background: "#F0EAFA", borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#3B1F5A", lineHeight: 1.6 } as React.CSSProperties,
  warnBox:  { borderLeft: "2px solid #BA7517", padding: "8px 14px", background: "#FAEEDA", borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#633806", lineHeight: 1.6 } as React.CSSProperties,
  tip:      { borderLeft: "2px solid #0F6E56", padding: "8px 14px", background: "#E1F5EE", borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#085041", lineHeight: 1.6 } as React.CSSProperties,
};

export default function Cours11() {
  const [activeSection, setActiveSection] = useState<string>("extensions");
  const i18n = useCoursI18n("cours11");
  const { questions: ALL_QUESTIONS } = useCoursContent(cours11Content);
  const [activeExt, setActiveExt] = useState<string | null>(null);

  const [quizQuestions] = useState(() => shuffle(ALL_QUESTIONS).slice(0, QUIZ_COUNT));
  const [quizIdx,      setQuizIdx]      = useState(0);
  const [quizScore,    setQuizScore]    = useState(0);
  const [quizAnswered, setQuizAnswered] = useState(false);
  const [quizDone,     setQuizDone]     = useState(false);
  const [selectedOpt,  setSelectedOpt]  = useState<number | null>(null);

  const pianoRef = useRef<PianoPlayerRef>(null);

  const answerQuiz = (optIdx: number) => {
    if (quizAnswered) return;
    setSelectedOpt(optIdx);
    setQuizAnswered(true);
    if (optIdx === quizQuestions[quizIdx].a) setQuizScore(s => s + 1);
  };

  const nextQuiz = () => {
    if (quizIdx + 1 >= QUIZ_COUNT) setQuizDone(true);
    else { setQuizIdx(i => i + 1); setQuizAnswered(false); setSelectedOpt(null); }
  };

  const resetQuiz = () => {
    setQuizIdx(0); setQuizScore(0);
    setQuizAnswered(false); setSelectedOpt(null); setQuizDone(false);
  };

  const sectionLabel = (id: string) => {
    if (id === "extensions") return "Les extensions";
    if (id === "application") return "Application harmonique";
    return "Entraînement";
  };

  return (
    <div style={S.wrap}>
      {/* Piano caché */}
      <div style={{ position: "absolute", opacity: 0, pointerEvents: "none", height: 0, overflow: "hidden" }}>
        <PianoPlayer ref={pianoRef} octaves={3} startOctave={2} showLabels={false} />
      </div>

      {/* Header */}
      <div style={S.header}>
        <span style={S.badge}>Niveau 2 · Cours 11</span>
        <h1 style={S.h1}>Les extensions d&apos;accords</h1>
        <p style={S.subtitle}>{i18n.subtitle}</p>
      </div>

      <MaitreCard
        composer="Bill Evans"
        period="1929–1980"
        emoji="🎹"
        concept="Extensions d'accords"
        anecdote="Bill Evans avait étudié Ravel, Debussy et Chopin avant de rejoindre Miles Davis en 1958. Quand Kind of Blue est enregistré, Evans impose un style de voicings radicalement nouveau : 9tes en voix intérieures, 11tes dans les clusters, 13tes qui remplacent les 5tes. Son trio (avec Scott LaFaro et Paul Motian) redéfinit le jazz de chambre. Waltz for Debby (1961) est aujourd'hui le standard des extensions au piano."
        lesson="Une 9te ne 'remplace' pas une note de l'accord — elle l'enrichit. La différence entre un accord et une couleur, c'est souvent une seule note à l'octave supérieure."
        accentColor="#6B3FA0"
      />

      {/* Navigation */}
      <nav style={S.nav}>
        {(["extensions", "application", "quiz"] as const).map(id => (
          <button key={id} style={S.pill(activeSection === id)} onClick={() => setActiveSection(id)}>
            {sectionLabel(id)}
          </button>
        ))}
      </nav>

      {/* ══ SECTION 1 : LES EXTENSIONS ══ */}
      {activeSection === "extensions" && (
        <div>
          <h2 style={S.h2}>Les extensions : 9e, 11e, 13e</h2>
          <p style={S.p}>
            Un accord de base (triade ou tétrade) peut être enrichi par des extensions :
            on continue d&apos;empiler des tierces au-delà de la 7te.
            La 9te est la 2de à l&apos;octave, la 11te est la 4te à l&apos;octave,
            la 13te est la 6te à l&apos;octave.
          </p>

          <div style={S.infoBox}>
            <strong>La série des tierces :</strong>{" "}
            fondamentale → 3ce → 5te → 7te → <strong>9te</strong> → <strong>11te</strong> → <strong>13te</strong>.
            Chaque étape ajoute une tierce. Un accord de 13e complet contient 7 notes — toute la gamme simultanément.
            En pratique, on en omet plusieurs pour garder la clarté.
          </div>

          <p style={{ fontSize: 13, color: "#888", marginBottom: 16 }}>
            Cliquez sur une extension pour l&apos;entendre et voir ses détails.
          </p>

          {EXTENSIONS.map(ext => (
            <div
              key={ext.id}
              onClick={() => {
                const isActive = activeExt === ext.id;
                setActiveExt(isActive ? null : ext.id);
                if (ext.id === "13th") {
                  playArpeggio(pianoRef as React.RefObject<PianoPlayerRef>, ext.dotKeys, 180);
                } else {
                  playChord(pianoRef as React.RefObject<PianoPlayerRef>, ext.dotKeys);
                }
              }}
              style={{
                border: `0.5px solid ${activeExt === ext.id ? ext.color : "#e5e5e5"}`,
                borderRadius: 10,
                marginBottom: 8,
                overflow: "hidden",
                cursor: "pointer",
                background: activeExt === ext.id ? ext.bg : "#fff",
                transition: "all .15s",
              }}
            >
              {/* Header extension */}
              <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 16px" }}>
                <div style={{
                  fontSize: 11, fontWeight: 700, color: ext.color,
                  background: ext.bg, border: `0.5px solid ${ext.color}`,
                  padding: "3px 10px", borderRadius: 6, fontFamily: "monospace",
                  flexShrink: 0, whiteSpace: "nowrap" as const,
                }}>
                  {ext.symbol}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 500, color: "#111" }}>{ext.name}</div>
                  <div style={{ fontSize: 12, color: "#888", marginTop: 2, fontFamily: "monospace" }}>
                    Ex : <span style={{ color: ext.color }}>{ext.example}</span>
                  </div>
                </div>
                <div style={{ fontSize: 11, color: "#bbb", fontFamily: "monospace", flexShrink: 0, textAlign: "right" as const }}>
                  {ext.notes.join(" – ")}
                </div>
              </div>

              {/* Détail si sélectionné */}
              {activeExt === ext.id && (
                <div style={{ padding: "0 16px 16px", borderTop: `0.5px solid ${ext.color}20` }}>
                  {/* Formule */}
                  <div style={{ marginTop: 12, marginBottom: 12 }}>
                    <div style={{ fontSize: 11, fontWeight: 600, color: ext.color, marginBottom: 6, textTransform: "uppercase" as const, letterSpacing: "0.08em" }}>
                      Formule
                    </div>
                    <div style={{ fontFamily: "monospace", fontSize: 13, color: "#444", background: "#f8f8f8", padding: "6px 10px", borderRadius: 6 }}>
                      {ext.formula}
                    </div>
                  </div>

                  {/* Description */}
                  <div style={{ marginBottom: 12 }}>
                    <div style={{ fontSize: 11, fontWeight: 600, color: ext.color, marginBottom: 4, textTransform: "uppercase" as const, letterSpacing: "0.08em" }}>
                      Caractéristique
                    </div>
                    <div style={{ fontSize: 13, color: "#444", lineHeight: 1.6 }}>{ext.description}</div>
                  </div>

                  {/* Contexte jazz */}
                  <div style={{ marginBottom: 14 }}>
                    <div style={{ fontSize: 11, fontWeight: 600, color: ext.color, marginBottom: 4, textTransform: "uppercase" as const, letterSpacing: "0.08em" }}>
                      Utilisation
                    </div>
                    <div style={{ fontSize: 13, color: "#555", lineHeight: 1.6 }}>{ext.jazzContext}</div>
                  </div>

                  <button
                    onClick={e => {
                      e.stopPropagation();
                      if (ext.id === "13th") playArpeggio(pianoRef as React.RefObject<PianoPlayerRef>, ext.dotKeys, 180);
                      else playChord(pianoRef as React.RefObject<PianoPlayerRef>, ext.dotKeys);
                    }}
                    style={{ fontSize: 12, padding: "5px 14px", border: `0.5px solid ${ext.color}`, borderRadius: 20, cursor: "pointer", background: "transparent", color: ext.color }}
                  >
                    ▶ Réécouter {ext.name}
                  </button>
                </div>
              )}
            </div>
          ))}

          {/* Tableau récap */}
          <h3 style={S.h3}>Récapitulatif</h3>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
              <thead>
                <tr style={{ borderBottom: "0.5px solid #e5e5e5" }}>
                  {["Extension", "Notation", "Formule", "Couleur", "Demi-tons"].map(h => (
                    <th key={h} style={{ textAlign: "left", padding: "6px 10px", fontWeight: 500, color: "#666", whiteSpace: "nowrap" as const }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "9e majeure", sym: "Maj9 / 9", formula: "1–3–5–7M–9M", color: "Chaleureux", dt: "14" },
                  { name: "9e dominante", sym: "9", formula: "1–3–5–♭7–9M", color: "Jazz ouvert", dt: "14" },
                  { name: "♭9", sym: "7♭9", formula: "1–3–5–♭7–♭9", color: "Très tendu", dt: "13" },
                  { name: "#11", sym: "7#11 / Maj7#11", formula: "1–3–♭7–#11", color: "Lydien", dt: "18" },
                  { name: "13e majeure", sym: "13", formula: "1–3–♭7–13", color: "Riche, plein", dt: "21" },
                ].map((r, i) => (
                  <tr key={r.name} style={{ borderBottom: "0.5px solid #f0f0f0", background: i % 2 === 0 ? "#fff" : "#fafafa" }}>
                    <td style={{ padding: "7px 10px", fontWeight: 500 }}>{r.name}</td>
                    <td style={{ padding: "7px 10px", fontFamily: "monospace", fontSize: 11, color: "#6B3FA0" }}>{r.sym}</td>
                    <td style={{ padding: "7px 10px", fontFamily: "monospace", fontSize: 11, color: "#555" }}>{r.formula}</td>
                    <td style={{ padding: "7px 10px", fontSize: 11, color: "#666", fontStyle: "italic" as const }}>{r.color}</td>
                    <td style={{ padding: "7px 10px", fontFamily: "monospace", fontSize: 11, color: "#888" }}>{r.dt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ══ SECTION 2 : APPLICATION ══ */}
      {activeSection === "application" && (
        <div>
          <h2 style={S.h2}>Application harmonique</h2>
          <p style={S.p}>
            Les extensions s&apos;appliquent sur les trois fonctions tonales (T, SD, D) sans changer
            leur rôle dans la progression. Dm9 reste sous-dominant, G13 reste dominant,
            CMaj9 reste tonique — mais chaque accord gagne en richesse et en couleur.
          </p>

          {/* II-V-I étendu */}
          <h3 style={S.h3}>II – V – I avec extensions (jazz)</h3>

          <div style={{ display: "flex", flexDirection: "column" as const, gap: 8, marginBottom: 20 }}>
            {II_V_I.map((chord, i) => (
              <div key={chord.symbol} style={{
                border: `0.5px solid ${chord.color}40`,
                borderRadius: 10,
                padding: "14px 16px",
                background: i === 0 ? "#E6F1FB" : i === 1 ? "#FAEEDA" : "#E1F5EE",
              }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 14, flexWrap: "wrap" as const }}>
                  <div style={{ flexShrink: 0 }}>
                    <div style={{ fontFamily: "monospace", fontSize: 20, fontWeight: 700, color: chord.color }}>{chord.symbol}</div>
                    <div style={{ fontSize: 10, color: "#888", marginTop: 2, whiteSpace: "nowrap" as const }}>{chord.function}</div>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, color: "#444", lineHeight: 1.6, marginBottom: 8 }}>{chord.description}</div>
                    <button
                      onClick={() => playChord(pianoRef as React.RefObject<PianoPlayerRef>, chord.dotKeys, 2.5)}
                      style={{ fontSize: 11, padding: "4px 12px", border: `0.5px solid ${chord.color}`, borderRadius: 20, cursor: "pointer", background: "transparent", color: chord.color }}
                    >
                      ▶ Écouter
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => {
              playChord(pianoRef as React.RefObject<PianoPlayerRef>, II_V_I[0].dotKeys, 2.0);
              setTimeout(() => playChord(pianoRef as React.RefObject<PianoPlayerRef>, II_V_I[1].dotKeys, 2.0), 2200);
              setTimeout(() => playChord(pianoRef as React.RefObject<PianoPlayerRef>, II_V_I[2].dotKeys, 3.0), 4400);
            }}
            style={{ fontSize: 13, padding: "8px 20px", border: "0.5px solid #333", borderRadius: 20, cursor: "pointer", background: "#111", color: "#fff", marginBottom: 24 }}
          >
            ▶ Écouter la progression complète
          </button>

          {/* Jazz vs classique */}
          <h3 style={S.h3}>Extensions jazz vs classique</h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 20 }}>
            <div style={{ border: "0.5px solid #e5e5e5", borderRadius: 10, padding: "14px 16px", background: "#fafafa" }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: "#555", marginBottom: 8, textTransform: "uppercase" as const, letterSpacing: "0.08em" }}>Classique</div>
              <ul style={{ margin: 0, padding: "0 0 0 16px", fontSize: 13, color: "#555", lineHeight: 1.8 }}>
                <li>9te = appoggiature → résout vers 8ve</li>
                <li>Extensions toujours transitoires</li>
                <li>Elles appellent une résolution</li>
                <li>Conduites de voix strictes (règles)</li>
              </ul>
            </div>
            <div style={{ border: "0.5px solid #6B3FA040", borderRadius: 10, padding: "14px 16px", background: "#F0EAFA" }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: "#6B3FA0", marginBottom: 8, textTransform: "uppercase" as const, letterSpacing: "0.08em" }}>Jazz</div>
              <ul style={{ margin: 0, padding: "0 0 0 16px", fontSize: 13, color: "#3B1F5A", lineHeight: 1.8 }}>
                <li>9te = tension disponible (reste)</li>
                <li>Extensions comme couleur permanente</li>
                <li>Pas de résolution obligatoire</li>
                <li>Tensions choisies selon la sonorité</li>
              </ul>
            </div>
          </div>

          {/* Tensions disponibles */}
          <h3 style={S.h3}>Tensions disponibles par fonction</h3>
          <div style={S.infoBox}>
            <strong>La règle des tensions disponibles :</strong> une extension est &laquo; disponible &raquo;
            si elle ne crée pas d&apos;intervalle de ♭9 (demi-ton + octave) avec une note
            de l&apos;accord. La ♭9 est la dissonance rédhibitoire — sauf quand elle est elle-même
            la tension recherchée.
          </div>

          <div style={{ overflowX: "auto", marginBottom: 16 }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
              <thead>
                <tr style={{ borderBottom: "0.5px solid #e5e5e5" }}>
                  {["Fonction", "Accord type", "Tensions disponibles", "À éviter"].map(h => (
                    <th key={h} style={{ textAlign: "left", padding: "8px 10px", fontWeight: 500, color: "#666" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TENSIONS.map((r, i) => (
                  <tr key={r.function} style={{ borderBottom: "0.5px solid #f0f0f0", background: i % 2 === 0 ? "#fff" : "#fafafa" }}>
                    <td style={{ padding: "8px 10px", fontWeight: 500, color: r.color, fontSize: 11 }}>{r.function}</td>
                    <td style={{ padding: "8px 10px", fontFamily: "monospace", fontSize: 11 }}>{r.example}</td>
                    <td style={{ padding: "8px 10px", color: "#0F6E56", fontSize: 11 }}>{r.available}</td>
                    <td style={{ padding: "8px 10px", color: "#993C1D", fontSize: 11 }}>{r.avoid}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={S.warnBox}>
            <strong>Exception clé :</strong> la 11te juste est évitée sur les accords <em>majeurs</em>{" "}
            (elle crée un ♭9 avec la 3ce majeure), mais elle est disponible et très courante
            sur les accords <em>mineurs</em> (la ♭3 est à distance de ton de la 11te).
            C&apos;est pourquoi Dm11 fonctionne, mais CMaj11 sonne mal.
          </div>

          <div style={S.tip}>
            <strong>Voicing pratique :</strong> en jazz pianistique, gardez <strong>3ce + 7te</strong>{" "}
            comme noyau (shell voicing) et ajoutez la tension voulue en soprano ou en voix intérieure.
            La fondamentale est jouée par la contrebasse — inutile de la doubler au piano.
          </div>
        </div>
      )}

      {/* ══ SECTION 3 : QUIZ ══ */}
      {activeSection === "quiz" && (
        <div>
          <h2 style={S.h2}>Entraînement</h2>

          {quizDone ? (
            <div style={{ textAlign: "center", padding: "2rem 0" }}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>
                {quizScore >= 8 ? "🎹" : quizScore >= 6 ? "👍" : "💪"}
              </div>
              <div style={{ fontSize: 20, fontWeight: 500, color: "#111", marginBottom: 4 }}>
                Score : {quizScore} / {QUIZ_COUNT}
              </div>
              <div style={{ fontSize: 14, color: "#666", marginBottom: 20 }}>
                {quizScore >= 8
                  ? "Excellent — les extensions n'ont plus de secrets !"
                  : quizScore >= 6
                  ? "Bien — encore quelques accords à pratiquer et ce sera parfait."
                  : "Continue à écouter les extensions activement — l'oreille s'éduque !"}
              </div>
              <button
                onClick={resetQuiz}
                style={{ fontSize: 13, padding: "8px 20px", border: "0.5px solid #6B3FA0", borderRadius: 20, cursor: "pointer", background: "#F0EAFA", color: "#6B3FA0" }}
              >
                Nouveau quiz
              </button>
            </div>
          ) : (
            <div>
              <div style={{ fontSize: 12, color: "#999", marginBottom: 10 }}>
                Question {quizIdx + 1} / {QUIZ_COUNT}
                <span style={{ marginLeft: 12, color: "#bbb" }}>{ALL_QUESTIONS.length} questions dans le pool</span>
              </div>
              <div style={{ fontSize: 15, fontWeight: 500, color: "#111", lineHeight: 1.6, marginBottom: 16 }}>
                {quizQuestions[quizIdx].q}
              </div>
              <div style={{ display: "flex", flexDirection: "column" as const, gap: 8 }}>
                {quizQuestions[quizIdx].opts.map((opt, i) => {
                  const isCorrect  = i === quizQuestions[quizIdx].a;
                  const isSelected = selectedOpt === i;
                  let bg = "#fff", border = "#e5e5e5", color = "#333";
                  if (quizAnswered) {
                    if (isCorrect)       { bg = "#E1F5EE"; border = "#0F6E56"; color = "#085041"; }
                    else if (isSelected) { bg = "#FCEBEB"; border = "#A32D2D"; color = "#501313"; }
                  }
                  return (
                    <button key={i} onClick={() => answerQuiz(i)} disabled={quizAnswered}
                      style={{ fontSize: 13, padding: "10px 14px", border: `0.5px solid ${border}`, borderRadius: 8, cursor: quizAnswered ? "default" : "pointer", background: bg, color, textAlign: "left" as const, transition: "all .12s" }}>
                      {opt}
                    </button>
                  );
                })}
              </div>

              {quizAnswered && (
                <div style={{ marginTop: 12, padding: "10px 14px", borderRadius: 8, background: selectedOpt === quizQuestions[quizIdx].a ? "#E1F5EE" : "#FCEBEB", fontSize: 13, color: selectedOpt === quizQuestions[quizIdx].a ? "#085041" : "#501313", lineHeight: 1.6 }}>
                  {quizQuestions[quizIdx].fb}
                </div>
              )}

              {quizAnswered && (
                <button onClick={nextQuiz}
                  style={{ marginTop: 12, fontSize: 13, padding: "7px 18px", border: "0.5px solid #333", borderRadius: 20, cursor: "pointer", background: "transparent", color: "#333" }}>
                  {quizIdx + 1 < QUIZ_COUNT ? "Question suivante →" : "Voir mon score"}
                </button>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
