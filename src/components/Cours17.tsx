"use client";

/**
 * Cours17.tsx
 * Harmonia · Niveau 2 · Cours 17 — La phrase musicale et la forme
 * Convention : affichage anglais, dotKeys PianoPlayer français
 */

import React, { useRef, useState } from "react";
import { useCoursI18n } from "@/hooks/useCoursI18n";
import { useCoursContent } from "@/hooks/useCoursContent";
import { cours17Content } from "@/data/cours17Content";
import PianoPlayer, { PianoPlayerRef } from "@/components/PianoPlayer";
import MaitreCard from "@/components/MaitreCard";

// ── Audio helpers ─────────────────────────────────────────────────────────────

function playChord(ref: React.RefObject<PianoPlayerRef>, keys: string[], dur = 1.4) {
  keys.forEach(key => {
    const [n, o] = key.split(":");
    ref.current?.playNote(n, parseInt(o), { duration: dur });
  });
}

function playProg(
  ref: React.RefObject<PianoPlayerRef>,
  chords: string[][],
  gapMs = 1100,
  dur = 1.0,
) {
  chords.forEach((chord, i) => {
    setTimeout(() => playChord(ref, chord, dur), i * gapMs);
  });
}

// ── Audio demos (ascending pitch verified) ────────────────────────────────────

// Beethoven 5th motif: Sol–Sol–Sol–Mib (single notes played sequentially)
const BEETHOVEN: string[][] = [["Sol:4"],["Sol:4"],["Sol:4"],["Mib:4"]];

// Ascending march in C major: triads on I–II–III–IV
const MARCHE_DEMO: string[][] = [
  ["Do:4","Mi:4","Sol:4"],    // I   — C
  ["Ré:4","Fa:4","La:4"],     // II  — Dm
  ["Mi:4","Sol:4","Si:4"],    // III — Em
  ["Fa:4","La:4","Do:5"],     // IV  — F
];

// Strict repetition demo
const STRICTE_DEMO: string[][] = [
  ["Do:4","Mi:4","Sol:4"],
  ["Do:4","Mi:4","Sol:4"],
];

// Melodic transformation demo (motif → transposed a step up)
const TRANSFO_DEMO: string[][] = [
  ["Do:4","Mi:4","Sol:4"],    // motif original
  ["Ré:4","Fa:4","La:4"],     // un ton plus haut
];

// Period: antecedent (→ V) + consequent (→ I)
const ANTECEDENT: string[][] = [
  ["Do:4","Mi:4","Sol:4"],
  ["Ré:4","Fa:4","La:4"],
  ["Sol:3","Si:3","Ré:4","Fa:4"],   // G7 — demi-cadence V
];
const CONSEQUENT: string[][] = [
  ["Do:4","Mi:4","Sol:4"],
  ["Ré:4","Fa:4","La:4"],
  ["Do:3","Mi:3","Sol:3","Si:3"],   // CMaj7 — cadence parfaite I
];
const PERIOD_DEMO: string[][] = [...ANTECEDENT, ...CONSEQUENT];

// Blues 12 mesures (simplified chord outline)
const BLUES_DEMO: string[][] = [
  ["Do:3","Mi:3","Sol:3","Sib:3"],  // C7  (I7) — mes 1
  ["Do:3","Mi:3","Sol:3","Sib:3"],  // C7        — mes 2
  ["Do:3","Mi:3","Sol:3","Sib:3"],  // C7        — mes 3
  ["Do:3","Mi:3","Sol:3","Sib:3"],  // C7        — mes 4
  ["Fa:3","La:3","Do:4","Mib:4"],   // F7  (IV7) — mes 5
  ["Fa:3","La:3","Do:4","Mib:4"],   // F7        — mes 6
  ["Do:3","Mi:3","Sol:3","Sib:3"],  // C7        — mes 7
  ["Do:3","Mi:3","Sol:3","Sib:3"],  // C7        — mes 8
  ["Ré:3","Fa:3","La:3","Do:4"],    // Dm7 (II)  — mes 9
  ["Sol:3","Si:3","Ré:4","Fa:4"],   // G7  (V)   — mes 10
  ["Do:3","Mi:3","Sol:3","Sib:3"],  // C7        — mes 11
  ["Sol:3","Si:3","Ré:4","Fa:4"],   // G7  (turnaround) — mes 12
];

// ── Static data ───────────────────────────────────────────────────────────────

const ETAPES = [
  { n: "①", name: "Idée de base", desc: "Présentation du motif principal — l'énoncé du sujet musical." },
  { n: "②", name: "Répétition", desc: "Stricte ou transformée — ancre le motif dans l'oreille de l'auditeur." },
  { n: "③", name: "Accélération", desc: "Fragmentation et liquidation — le rythme harmonique s'accélère." },
  { n: "④", name: "Cadence", desc: "Résolution harmonique conclusive (V pour demi-cadence, I pour cadence parfaite)." },
];

interface Technique {
  id: string;
  name: string;
  color: string;
  bg: string;
  description: string;
  example: string;
  demo?: string[][];
  demoLabel?: string;
}

const TECHNIQUES: Technique[] = [
  {
    id: "stricte",
    name: "Répétition stricte",
    color: "#185FA5",
    bg: "#E6F1FB",
    description: "Le motif est répété identiquement — mêmes hauteurs, même rythme. Technique la plus directe : l'auditeur reconnaît le motif sans ambiguïté. Utilisée une seule fois avant de varier.",
    example: "Do–Mi–Sol  →  Do–Mi–Sol",
    demo: STRICTE_DEMO,
    demoLabel: "▶ Répétition stricte",
  },
  {
    id: "transformation",
    name: "Transformation mélodique",
    color: "#0F6E56",
    bg: "#E1F5EE",
    description: "Le motif est transposé à une autre hauteur tout en conservant son contour rythmique. L'identité rythmique maintient la cohérence ; la nouvelle hauteur apporte la variété.",
    example: "Do–Mi–Sol  →  Ré–Fa–La  (un ton plus haut)",
    demo: TRANSFO_DEMO,
    demoLabel: "▶ Transformation",
  },
  {
    id: "marche",
    name: "Marche / séquence",
    color: "#7B1F1F",
    bg: "#FCEAEA",
    description: "Le motif se répète à des degrés successifs de la gamme (marche tonale) ou par transposition stricte (marche réelle). Schoenberg distingue soigneusement ces deux types : la marche tonale reste diatonique, la marche réelle peut sortir de la gamme.",
    example: "Do–Mi–Sol  →  Ré–Fa–La  →  Mi–Sol–Si  (marche tonale ascendante)",
    demo: MARCHE_DEMO,
    demoLabel: "▶ Marche ascendante",
  },
  {
    id: "complementaire",
    name: "Motif complémentaire",
    color: "#6B3FA0",
    bg: "#F0EAFA",
    description: "Un second motif répond au premier et complète l'espace rythmique ou mélodique. Ensemble, les deux motifs forment la phrase complète — chacun est incomplet sans l'autre.",
    example: "Motif A (mes. 1–2)  +  Motif B complémentaire (mes. 3–4)",
  },
  {
    id: "harmonique",
    name: "Transformation mélodico-harmonique",
    color: "#BA7517",
    bg: "#FAEEDA",
    description: "Le contour mélodique est conservé mais les accords en dessous changent, modifiant la couleur harmonique. La mélodie est reconnaissable ; l'harmonie renouvelle l'expression.",
    example: "Mélodie Do–Mi–Sol sur I (CMaj7)  →  même mélodie sur VI (Am7)",
  },
];

interface Forme {
  id: string;
  name: string;
  schema: string;
  color: string;
  bg: string;
  description: string;
  examples: string;
  demo?: string[][];
}

const FORMES: Forme[] = [
  {
    id: "aba",
    name: "Forme ABA (lied)",
    schema: "A – B – A",
    color: "#185FA5",
    bg: "#E6F1FB",
    description: "Section A (principale), section B contrastante (nouvelle tonalité ou mode), retour de A. La symétrie crée équilibre et satisfaction : on part, on revient.",
    examples: "Nocturnes de Chopin, arias d'opéra (aria da capo)",
  },
  {
    id: "aaba",
    name: "Forme AABA (32 mesures)",
    schema: "A – A – B – A",
    color: "#0F6E56",
    bg: "#E1F5EE",
    description: "Section A (8 mes.) répétée 2 fois, pont B contrastant (8 mes.), retour de A (8 mes.). Forme standard du jazz américain des années 1930–60. Le pont B est souvent dans une tonalité voisine.",
    examples: "Autumn Leaves, I Got Rhythm, Stardust, Over the Rainbow",
  },
  {
    id: "blues",
    name: "Blues 12 mesures",
    schema: "I⁷(4) – IV⁷(2) – I⁷(2) – II–V–I(4)",
    color: "#7B1F1F",
    bg: "#FCEAEA",
    description: "Question/réponse/résolution en 12 mesures : tonic statement (4 mes.), subdominant response (2 mes.), retour (2 mes.), turnaround (4 mes.). Structure prévisible exploitée par musiciens et improvisateurs.",
    examples: "12-bar blues, jazz blues avec II–V substitutions",
    demo: BLUES_DEMO,
  },
  {
    id: "abac",
    name: "Forme ABAC (32 mesures)",
    schema: "A – B – A – C",
    color: "#6B3FA0",
    bg: "#F0EAFA",
    description: "Variante de la forme standard : A revient deux fois mais se termine différemment (B puis C). Chaque retour de A crée une légère surprise dans la conclusion.",
    examples: "All The Things You Are, My Romance",
  },
  {
    id: "sonate",
    name: "Forme sonate",
    schema: "Exposition – Développement – Réexposition",
    color: "#BA7517",
    bg: "#FAEEDA",
    description: "Exposition : thème A (tonique) + thème B (dominante/relatif). Développement : manipulation thématique dans des tonalités éloignées. Réexposition : A et B en tonique. Forme la plus complexe du classicisme.",
    examples: "1er mouvement des sonates de Beethoven, Mozart, Haydn",
  },
];

// ── Quiz ──────────────────────────────────────────────────────────────────────

const ALL_QUESTIONS = [
  // Motif
  { q: "Qu'est-ce qu'un motif musical ?", opts: ["Un accord de 4 sons", "Le plus petit élément musical distinctif — fil conducteur du discours d'une phrase", "Une gamme complète", "Un accord de dominante"], a: 1, fb: "Le motif est le plus petit élément musical reconnaissable et structurant. Il contient l'identité rythmique et/ou mélodique qui sera répétée et transformée. Beethoven construit toute sa 5e Symphonie à partir d'un motif de 4 notes seulement (Sol–Sol–Sol–Mib)." },
  { q: "Le motif de la 5e Symphonie de Beethoven (Sol–Sol–Sol–Mib) illustre que :", opts: ["Un motif doit être long pour être expressif", "Un motif extrêmement court peut générer un discours musical complet par répétition et transformation", "La 5e utilise un mode mineur exclusivement", "Ce motif vient d'une chanson populaire"], a: 1, fb: "Sol–Sol–Sol–Mib : 4 notes, 3 répétées + une chute de tierce. Ce motif est le germe de toute la 5e Symphonie (1808). Beethoven le fragmente, le transpose, l'augmente — démontrant qu'un motif minimal peut construire vingt minutes de musique." },
  { q: "Quelle différence entre 'musique de support' et 'musique de discours' ?", opts: ["La musique de support est plus longue", "La musique de support accompagne une action extérieure ; la musique de discours développe ses propres idées musicales de façon autonome", "La musique de discours est plus courte", "Il n'y a aucune différence"], a: 1, fb: "La musique de support (film, ballet) sert une action extérieure — sa structure peut être fragmentée selon la narration. La musique de discours (sonate, fugue, standard jazz) développe ses propres idées de façon logique et autonome, indépendamment de tout contexte extra-musical." },
  { q: "Le fil conducteur d'une phrase musicale est :", opts: ["La tonalité", "Le motif — répété et transformé pour donner cohérence à la phrase", "Le tempo", "L'accompagnement"], a: 1, fb: "Le motif est le fil conducteur. Sa répétition (stricte ou transformée) crée la cohérence. L'auditeur reconnaît le motif même transformé — c'est ce qui donne l'impression d'un discours musical suivi plutôt qu'une succession d'idées disparates." },

  // Les 4 étapes
  { q: "Combien d'étapes comporte une phrase musicale typique de 8 mesures ?", opts: ["2", "3", "4", "8"], a: 2, fb: "La phrase de 8 mesures suit 4 étapes : (1) idée de base, (2) répétition, (3) accélération/fragmentation, (4) cadence. Ce schéma est présent chez Beethoven, Mozart, Haydn et dans la plupart des formes jazz standard." },
  { q: "Quelle est la première étape d'une phrase musicale ?", opts: ["La cadence", "L'idée de base — présentation du motif principal", "La répétition", "La liquidation"], a: 1, fb: "L'idée de base est l'énoncé du 'sujet' de la phrase : présentation du motif ou de la cellule motivique. Les 3 étapes suivantes (répétition, accélération, cadence) découlent de cette idée initiale." },
  { q: "Qu'est-ce que la 'liquidation' d'une phrase (terme de Schoenberg) ?", opts: ["Répéter le motif plus lentement", "Accélérer le rythme harmonique en fin de phrase — les harmonies changent plus vite pour signaler la cadence imminente", "Réduire le nombre d'instruments", "Jouer moins fort"], a: 1, fb: "La liquidation désigne l'accélération du rythme harmonique en fin de phrase. Les harmonies qui changeaient toutes les 2 mesures changent maintenant toutes les mesures, puis à chaque temps — signal rhétorique que la cadence approche : 'la conclusion arrive'." },
  { q: "Dans la 3e étape d'une phrase de Beethoven, l'accélération se manifeste par :", opts: ["Un tempo plus rapide", "Des motifs fragmentés et un rythme harmonique plus dense, créant tension avant la cadence", "Un changement d'instrument", "Une mélodie plus grave"], a: 1, fb: "L'accélération de la 3e étape = fragmentation du motif et densification du rythme harmonique. Beethoven répète des fragments de motif de plus en plus courts, les accords changent de plus en plus vite — tension qui 'appelle' la cadence finale." },

  // Techniques de répétition
  { q: "Qu'est-ce que la 'répétition stricte' d'un motif ?", opts: ["Répéter dans une autre tonalité", "Répéter le motif identiquement — mêmes hauteurs, même rythme", "Répéter avec des ornements", "Répéter uniquement à l'octave inférieure"], a: 1, fb: "La répétition stricte reproduit le motif exactement. Technique la plus directe : l'auditeur reconnaît immédiatement le motif. Elle peut sembler mécanique ; c'est pourquoi elle est souvent combinée avec d'autres techniques de transformation." },
  { q: "La 'transformation mélodique' d'un motif consiste à :", opts: ["Changer son rythme", "Transposer le motif à une autre hauteur tout en gardant le même contour rythmique", "Inverser les intervalles", "Jouer le motif à l'envers"], a: 1, fb: "La transformation mélodique transpose le motif — le contour rythmique reste identique, les hauteurs changent. Do–Mi–Sol devient Ré–Fa–La (un ton plus haut). L'identité rythmique maintient la cohérence ; la nouvelle hauteur apporte la variété." },
  { q: "Une 'marche' (ou séquence) musicale est :", opts: ["Un rythme de marche militaire", "Un motif répété à des degrés successifs de la gamme ou par transposition chromatique", "Un accord de passage", "Une forme de 16 mesures"], a: 1, fb: "La marche (séquence) répète un motif à des hauteurs successives. Marche tonale : reste dans la gamme diatonique. Marche réelle (chromatique) : transpose strictement le même intervalle (peut sortir de la gamme). Ex. Do–Mi–Sol, Ré–Fa–La, Mi–Sol–Si (marche tonale ascendante)." },
  { q: "La différence entre 'marche tonale' et 'marche réelle' est :", opts: ["Le tempo", "La marche tonale reste diatonique (intervalles légèrement ajustés) ; la marche réelle transpose strictement le même intervalle, créant des chromatismes", "La marche réelle est plus longue", "Il n'y a aucune différence"], a: 1, fb: "Distinction clé de Schoenberg : marche tonale = le motif s'adapte aux intervalles de la gamme (peut changer légèrement d'intervalle) ; marche réelle = transposition stricte du même intervalle (peut introduire des notes étrangères à la gamme)." },
  { q: "Un motif 'complémentaire' est :", opts: ["Un motif qui imite le principal à l'unisson", "Un second motif qui répond au premier, complétant l'espace rythmique ou mélodique de la phrase", "Un motif inversé", "Un motif joué simultanément"], a: 1, fb: "Le motif complémentaire répond au motif principal — souvent dans les mesures suivantes. Ex. Motif A (mesures 1–2) + Motif B (mesures 3–4). Ensemble, A et B forment la phrase complète ; chacun est incomplet sans l'autre." },
  { q: "La 'transformation mélodico-harmonique' consiste à :", opts: ["Changer le rythme et la mélodie", "Garder le contour mélodique du motif mais changer les accords en dessous, modifiant la couleur harmonique", "Inverser la mélodie et les accords", "Transposer dans 12 tonalités"], a: 1, fb: "La transformation mélodico-harmonique conserve le contour mélodique reconnaissable mais change les accords en dessous. La mélodie Do–Mi–Sol sonnera différemment sur I (CMaj7) que sur VI (Am7). La mélodie crée la cohérence ; l'harmonie renouvelle l'expression." },

  // Période antécédent-conséquent
  { q: "Qu'est-ce qu'une période musicale ?", opts: ["Une phrase de 4 mesures", "Une structure en deux phrases : antécédent (cadence faible) + conséquent (cadence forte)", "Un groupe de 3 phrases", "Une section de 32 mesures"], a: 1, fb: "La période est binaire : l'antécédent (phrase 1) se termine sur une cadence faible (souvent V — demi-cadence), créant une question. Le conséquent (phrase 2) se termine sur une cadence forte (I — cadence parfaite), apportant la réponse. Longueur typique : 16 mesures (8+8)." },
  { q: "L'antécédent d'une période se termine sur :", opts: ["La tonique (I) — cadence parfaite", "La dominante (V) — demi-cadence, effet de question suspendue", "La sous-dominante (IV)", "La médiante (III)"], a: 1, fb: "L'antécédent se termine sur V (demi-cadence) — l'oreille attend une conclusion. C'est la 'question'. Le conséquent répond en terminant sur I. Ce schéma question/réponse est la structure rhétorique fondamentale de la musique tonale." },
  { q: "Le conséquent d'une période se termine sur :", opts: ["La dominante (V)", "La tonique (I) — cadence parfaite, conclusion", "La sous-dominante (IV)", "Un accord de septième"], a: 1, fb: "Le conséquent se termine sur I (cadence parfaite). Après la 'question' de l'antécédent (qui finit sur V), le conséquent apporte la 'réponse' conclusive en s'ancrant sur la tonique. C'est la rhétorique musicale la plus naturelle." },
  { q: "La différence principale entre une phrase et une période est :", opts: ["La longueur uniquement", "La phrase = une unité autonome (8 mes.) avec sa cadence ; la période = deux phrases (antécédent + conséquent, 16 mes.) avec cadence faible puis forte", "Le nombre de motifs", "La tonalité"], a: 1, fb: "La phrase est une unité autonome (typiquement 8 mesures) avec sa propre cadence. La période est une structure de deux phrases : antécédent (cadence V — question) + conséquent (cadence I — réponse). La période fait donc typiquement 16 mesures." },
  { q: "Antécédent et conséquent partagent souvent :", opts: ["Exactement les mêmes notes", "Le même matériel thématique de départ — liés par un même motif initial, mais conclus différemment", "Le même tempo", "La même durée absolument"], a: 1, fb: "Antécédent et conséquent commencent souvent avec le même motif — c'est ce qui les unit en une période cohérente. Mais leurs fins diffèrent : cadence V (antécédent) vs cadence I (conséquent). Même début, conclusions contrastantes : question/réponse." },
  { q: "L'effet de 'question/réponse' dans une période est créé par :", opts: ["Deux motifs différents", "La cadence faible de l'antécédent (V) qui crée l'attente, résolue par la cadence forte du conséquent (I)", "Le changement de tempo", "L'augmentation du volume"], a: 1, fb: "V (demi-cadence) = question suspendue. I (cadence parfaite) = réponse conclusive. Ce schéma question/réponse à l'échelle de la période reflète la même logique que la tension/résolution à l'échelle de l'accord (triton de V7 → résolution vers I). Même principe, plus grande échelle." },

  // Formes musicales
  { q: "Qu'est-ce que la forme ABA ?", opts: ["3 sections identiques", "Section A (principale) — section B contrastante — retour de A", "A répété deux fois puis B", "Une forme de 32 mesures"], a: 1, fb: "La forme ABA (lied) présente A (thème principal), B contrastant (nouvelle tonalité ou mode), puis le retour de A. La symétrie A–B–A crée équilibre et satisfaction : on part, on revient. Omniprésent dans les Nocturnes de Chopin et les arias d'opéra." },
  { q: "La forme AABA de 32 mesures est :", opts: ["4 sections identiques", "A (8 mes.) répété 2 fois, pont B (8 mes.) contrastant, retour de A (8 mes.)", "A répété 4 fois", "Une forme uniquement classique"], a: 1, fb: "AABA = 32 mesures : A (8) + A (8) + B pont (8) + A (8). Le pont B est souvent dans une tonalité voisine ou avec un rythme harmonique différent. C'est la forme standard des standards jazz américains des années 1930–60." },
  { q: "Dans la forme AABA, la section B est appelée :", opts: ["Coda", "Pont (bridge)", "Refrain", "Développement"], a: 1, fb: "La section B dans une forme AABA est le 'pont' (bridge). Il contraste avec A par la tonalité, le rythme harmonique ou la texture. Le pont crée la variété nécessaire avant le retour final de A — 'on revient à la maison'." },
  { q: "Autumn Leaves utilise quelle forme ?", opts: ["ABA", "AABA", "ABAB", "Blues 12 mesures"], a: 1, fb: "Autumn Leaves (Kosma, 1945) est en forme AABA de 32 mesures. C'est l'un des standards les plus joués pour enseigner la forme jazz — ses deux II–V–I successifs (majeur et mineur) dans la section A en font aussi un exemple de progression type." },
  { q: "Le blues sur 12 mesures est structuré autour de :", opts: ["I–V–I seulement", "I7 (4 mes.) – IV7 (2 mes.) – I7 (2 mes.) – II–V–I (4 mes.)", "16 mesures égales", "Deux sections de 6 mesures"], a: 1, fb: "Blues 12 mesures : I7 (4 mes.) | IV7 (2 mes.) | I7 (2 mes.) | turnaround (4 mes.). Structure de question/réponse/résolution à l'échelle de 12 mesures. Forme prévisible dont la stabilité libère l'improvisateur." },
  { q: "La forme sonate comprend :", opts: ["Un seul thème développé", "Exposition (thèmes A+B), Développement, Réexposition", "Introduction et Coda seulement", "4 sections de 8 mesures"], a: 1, fb: "Forme sonate : Exposition = thème A (tonique) + thème B (dominante/relatif) ; Développement = manipulation thématique dans des tonalités éloignées ; Réexposition = A et B en tonique. La forme la plus téléologique du classicisme." },
  { q: "Dans la forme sonate, le 'développement' se caractérise par :", opts: ["La répétition de l'exposition", "La manipulation thématique — fragmenter, moduler — dans des tonalités éloignées", "L'introduction de nouveaux thèmes", "La conclusion du morceau"], a: 1, fb: "Le développement est la section la plus instable. Les thèmes de l'exposition sont fragmentés, transformés, transposés dans des tonalités éloignées — c'est le 'voyage' entre l'exposition (départ) et la réexposition (retour). Beethoven excelle dans l'art du développement." },
  { q: "Pourquoi la forme crée-t-elle le sens musical ?", opts: ["Car elle détermine la durée", "Car elle organise le temps — sans forme, une succession d'accords n'est qu'une liste sans direction ni sens", "Car elle fixe le tempo", "Car elle indique l'instrumentation"], a: 1, fb: "La forme donne une direction au discours musical. Sans forme, une suite d'accords est 'hors sol' — on ne sait ni d'où l'on vient ni où l'on va. La forme crée l'attente (tension) et sa résolution (satisfaction) : c'est la rhétorique de la musique." },
  { q: "La forme couplet-refrain est :", opts: ["Identique à la forme sonate", "Alternance entre couplets (contenu narratif changeant) et refrain (mélodie récurrente identique)", "Trois sections identiques", "Une forme uniquement instrumentale"], a: 1, fb: "Couplet-refrain : les couplets racontent (texte et parfois mélodie variables) ; le refrain revient avec le même texte et la même mélodie. Forme dominante de la chanson populaire (pop, rock, folk). Elle allie variété (couplets) et récurrence mémorable (refrain)." },
  { q: "La forme rondo est :", opts: ["ABA uniquement", "Un thème A qui revient alternativement entre des épisodes contrastants : ABACADA...", "Une forme de 32 mesures jazz", "Deux sections de développement"], a: 1, fb: "Le rondo alterne un refrain (thème A) avec des épisodes contrastants (B, C, D...). Le thème A (souvent mémorable) revient comme ancrage entre des aventures musicales contrastantes. Très présent dans les finales de sonates classiques." },

  // Schoenberg et théorie
  { q: "Schoenberg a formalisé la notion de phrase musicale dans :", opts: ["Die Kunst der Fuge", "Fundamentals of Musical Composition (rédigé dans les années 1930–40)", "Le Clavecin bien tempéré", "Traité d'orchestration de Berlioz"], a: 1, fb: "Arnold Schoenberg a rédigé Fundamentals of Musical Composition dans les années 1930–40 à UCLA, publié posthumement en 1967. Ce traité pédagogique analyse systématiquement la phrase, le motif, la période et les grandes formes — référence fondamentale pour l'enseignement de la composition." },
  { q: "Schoenberg distingue deux types de marches musicales :", opts: ["Marche lente et marche rapide", "Marche tonale (diatonique) et marche réelle (transposition stricte, parfois chromatique)", "Marche ascendante et descendante", "Marche simple et double"], a: 1, fb: "Marche tonale : le motif s'adapte aux intervalles de la gamme diatonique. Marche réelle : transposition stricte du même intervalle exact (peut sortir de la gamme). Cette distinction est centrale dans l'analyse de Schoenberg — les deux types ont des effets expressifs très différents." },
  { q: "Le concept de 'liquidation' chez Schoenberg désigne :", opts: ["La suppression d'accords", "L'élimination progressive des caractéristiques distinctives du motif en fin de phrase pour signaler la cadence", "Un changement de tonalité", "La réduction du nombre de voix"], a: 1, fb: "La liquidation est le processus par lequel un motif perd progressivement ses traits distinctifs en fin de phrase. On en garde le rythme, puis juste le contour, puis presque rien — la phrase se dissout dans la cadence. Procédé rhétorique de 'conclusion' très sophistiqué." },
  { q: "Selon Schoenberg, la répétition dans la composition musicale sert à :", opts: ["Allonger un morceau sans effort", "Établir la cohérence — l'auditeur reconnaît ce qu'il a déjà entendu et peut suivre le discours musical", "Compenser le manque d'idées", "Satisfaire aux conventions du genre"], a: 1, fb: "Schoenberg insiste sur la répétition comme outil de cohérence (Verständlichkeit). Un motif répété (même transformé) est reconnaissable. La répétition crée le sentiment d'une idée développée plutôt qu'une succession d'idées disparates — c'est la 'compréhensibilité' musicale." },
  { q: "Schoenberg est paradoxalement aussi célèbre pour :", opts: ["Avoir inventé la tonalité", "Avoir développé le dodécaphonisme — composition avec les 12 demi-tons à égalité, sans tonalité centrale", "Avoir composé uniquement du jazz", "Avoir écrit des opéras baroques"], a: 1, fb: "Schoenberg est le théoricien de la phrase tonale ET le fondateur du dodécaphonisme (méthode des 12 sons, 1921). Paradoxe : son traité analyse la forme tonale, mais sa musique (Pierrot Lunaire, Suite op.25) abolit la tonalité. Il est le pont entre tradition et rupture." },

  // Applications pratiques
  { q: "Qu'est-ce qui distingue une progression 'hors sol' d'une vraie phrase musicale ?", opts: ["Le nombre d'accords", "La phrase a un motif directeur, une structure d'étapes et une cadence — la progression 'hors sol' n'a ni direction ni conclusion", "La tonalité", "Le tempo"], a: 1, fb: "Une progression 'hors sol' = accords enchaînés sans logique motivique ni cadence préméditée. Une phrase musicale = motif + développement en 4 étapes + cadence. La différence est celle entre une conversation (discours structuré) et une liste de mots (absence de discours)." },
  { q: "Comment reconnaît-on une cadence dans une phrase musicale ?", opts: ["Par un silence", "Par un repos sur V (demi-cadence) ou I (cadence parfaite) — moment de résolution de la tension harmonique", "Par un changement de tempo", "Par une note plus aiguë"], a: 1, fb: "La cadence est un moment de repos harmonique. Demi-cadence (V) : question suspendue. Cadence parfaite (I) : résolution complète. Cadence plagale (IV–I) : conclusion douce. Cadence rompue (V→VI) : résolution déceptive. Chaque type crée un effet de ponctuation différent." },
  { q: "Dans un standard jazz de forme AABA, le pont (B) sert à :", opts: ["Répéter A", "Créer un contraste harmonique et mélodique qui rend le retour de A d'autant plus satisfaisant", "Conclure le morceau", "Introduire le soliste uniquement"], a: 1, fb: "Le pont crée un contraste — souvent dans une tonalité voisine, avec un rythme harmonique ou une direction mélodique opposée à A. Ce contraste rend le retour final de A plus attendu et plus satisfaisant — 'on revient à la maison'. C'est la dialectique tension/résolution à l'échelle formelle." },
  { q: "La Sonate Pathétique de Beethoven est un exemple classique de la phrase de 8 mesures car :", opts: ["Elle dure 8 minutes", "Son premier thème illustre les 4 étapes : idée de base, répétition, accélération (liquidation), cadence", "Elle n'a que 8 mesures", "Schoenberg l'a analysée dans son traité"], a: 1, fb: "Le premier thème de l'Allegro de la Pathétique (op.13, 1798) illustre les 4 étapes : motif distinctif (mes. 1–2), répétition transformée (mes. 3–4), accélération avec liquidation (mes. 5–7), cadence (mes. 8). Exemple pédagogique parfait régulièrement cité dans les traités d'analyse." },
  { q: "Comment marche harmonique et marche mélodique sont-elles liées ?", opts: ["Elles sont toujours opposées", "La marche mélodique répète un motif à des hauteurs successives ; la marche harmonique soutient ces hauteurs par des accords progressant dans le même sens", "Elles sont toujours indépendantes", "La marche harmonique précède toujours la mélodie"], a: 1, fb: "Dans une marche, mélodie et harmonie avancent ensemble : mélodie Do–Mi–Sol, Ré–Fa–La, Mi–Sol–Si (marche mélodique ascendante) sur des accords I, II, III (marche harmonique ascendante). Les deux dimensions bougent en parallèle — c'est ce qui crée l'effet de progression soutenu." },
  { q: "Pourquoi le blues sur 12 mesures est-il considéré comme une forme musicale ?", opts: ["Car il dure toujours 12 secondes", "Car il a une structure répétable et prévisible (I7–IV7–I7–V7–I7) créant attentes et résolutions à chaque cycle", "Car il ne contient que 3 accords", "Car il vient du Delta du Mississippi"], a: 1, fb: "Le blues 12 mesures est une forme car sa structure est prévisible et partagée par musiciens et auditeurs. Cette prévisibilité est une ressource : l'improvisateur peut jouer 'sur' la forme (contre les attentes) ou 'avec' (en les confirmant). La forme = cadre du discours musical." },
  { q: "Quelle est la longueur typique d'une phrase musicale dans le répertoire classique et jazz ?", opts: ["4 mesures", "8 mesures", "12 mesures", "16 mesures"], a: 1, fb: "8 mesures est la longueur standard de la phrase. Cette convention s'est établie au XVIIIe siècle et est passée dans le jazz (sections A et B de la forme AABA font chacune 8 mesures). La période (antécédent + conséquent) fait donc typiquement 16 mesures (8+8)." },
  { q: "Qu'est-ce qu'un 'thème' par rapport à un 'motif' ?", opts: ["Un thème est plus court qu'un motif", "Le motif est le plus petit élément ; le thème est une idée plus développée (souvent une phrase entière) construite à partir d'un ou plusieurs motifs", "Un thème est harmonique, un motif est mélodique", "Ce sont des synonymes exacts"], a: 1, fb: "Motif = cellule minimale (4 notes). Thème = idée musicale développée (souvent 8–16 mesures) construite à partir d'un ou plusieurs motifs. Le thème est mémorable et 'jouable' ; le motif est le 'germe' générateur. Beethoven tire de grands thèmes d'un seul motif de 4 notes." },
  { q: "Dans la forme sonate classique, l'exposition présente généralement :", opts: ["Un seul thème", "Deux thèmes contrastants — thème A (tonique) et thème B (dominante ou relatif mineur)", "Quatre thèmes", "Le développement uniquement"], a: 1, fb: "L'exposition présente deux thèmes : A (tonique, souvent énergique) et B (dominante si majeur, relatif si mineur — souvent plus lyrique). Ce contraste A/B crée la 'tension dramatique' que le développement et la réexposition vont explorer et résoudre." },
  { q: "Un 'motif récurrent' dans une grande forme (leitmotiv, idée fixe) sert à :", opts: ["Répéter un passage de façon mécanique", "Créer une unité à grande échelle — le motif réapparaît à des moments clés pour tisser la cohérence de toute l'œuvre", "Faciliter la mémorisation du musicien", "Indiquer une modulation"], a: 1, fb: "Le motif récurrent crée la cohérence à grande échelle. Wagner utilise des Leitmotive associés à des personnages qui reviennent tout au long d'un opéra. Berlioz invente l'idée fixe (Symphonie Fantastique). C'est la logique de la forme ABA étendue à l'échelle d'une œuvre entière." },
  { q: "La forme ABAC est notamment utilisée dans :", opts: ["Le blues", "All The Things You Are, My Romance — standards avec deux deuxièmes voltes différentes (B puis C)", "La symphonie classique", "Le rondo"], a: 1, fb: "ABAC : A revient deux fois mais se termine différemment la seconde fois (C au lieu de B). All The Things You Are (Kern, 1939) en est l'exemple le plus célèbre. Chaque retour de A est légèrement différent dans sa conclusion — légère surprise malgré la récurrence." },
  { q: "Pourquoi comprendre la forme est-il utile pour un improvisateur jazz ?", opts: ["Pour respecter les conventions", "Pour savoir où l'on est dans la grille — début ou fin de A, pont B, retour final — et adapter son jeu en conséquence", "Pour lire la partition", "Pour jouer plus de notes"], a: 1, fb: "Un improvisateur qui connaît la forme joue 'avec' la structure : plus de tension au pont (B), résolution plus marquée au retour de A, climax placé au bon moment. Ignorer la forme revient à improviser 'dans le vide' — techniquement correct mais musicalement inexpressif." },
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
const SECTIONS_IDS = ["phrase", "periode", "quiz"] as const;
type SectionId = typeof SECTIONS_IDS[number];

const PRIMARY    = "#6B2D8A";
const PRIMARY_BG = "#F0E8F8";

const S = {
  wrap:     { fontFamily: "var(--font-sans, system-ui)", maxWidth: 720, margin: "0 auto", padding: "0 1rem 3rem" } as React.CSSProperties,
  header:   { padding: "1.5rem 0 1rem", borderBottom: "0.5px solid #e5e5e5", marginBottom: "1.25rem" } as React.CSSProperties,
  badge:    { display: "inline-block", background: PRIMARY_BG, color: PRIMARY, fontSize: 11, fontWeight: 500, padding: "2px 10px", borderRadius: 20, marginBottom: 6 } as React.CSSProperties,
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
  h3:       { fontSize: 14, fontWeight: 500, color: "#111", margin: "20px 0 10px" } as React.CSSProperties,
  p:        { fontSize: 14, color: "#555", lineHeight: 1.75, marginBottom: "1rem" } as React.CSSProperties,
  infoBox:  { borderLeft: `2px solid ${PRIMARY}`, padding: "8px 14px", background: PRIMARY_BG, borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#3A0A50", lineHeight: 1.6 } as React.CSSProperties,
  warnBox:  { borderLeft: "2px solid #BA7517", padding: "8px 14px", background: "#FAEEDA", borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#633806", lineHeight: 1.6 } as React.CSSProperties,
  tip:      { borderLeft: "2px solid #0F6E56", padding: "8px 14px", background: "#E1F5EE", borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#085041", lineHeight: 1.6 } as React.CSSProperties,
};

export default function Cours17() {
  const [activeSection, setActiveSection] = useState<SectionId>("phrase");
  const i18n = useCoursI18n("cours17");
  const { questions: ALL_QUESTIONS } = useCoursContent(cours17Content);
  const [activeTech,  setActiveTech]  = useState<string | null>(null);
  const [activeForme, setActiveForme] = useState<string | null>(null);

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

  const sectionLabel = (id: SectionId) => {
    if (id === "phrase")  return "La phrase";
    if (id === "periode") return "Période & formes";
    return "Entraînement";
  };

  return (
    <div style={S.wrap}>
      {/* Piano caché */}
      <div style={{ position: "absolute", opacity: 0, pointerEvents: "none", height: 0, overflow: "hidden" }}>
        <PianoPlayer ref={pianoRef} octaves={3} startOctave={3} showLabels={false} />
      </div>

      {/* Header */}
      <div style={S.header}>
        <span style={S.badge}>Niveau 2 · Cours 17</span>
        <h1 style={S.h1}>La phrase musicale et la forme</h1>
        <p style={S.subtitle}>{i18n.subtitle}</p>
      </div>

      <MaitreCard
        composer="Arnold Schoenberg"
        period="1874–1951"
        emoji="📖"
        concept="Théorie de la phrase & développement motivique"
        anecdote="À UCLA dans les années 1940, Schoenberg demande à ses étudiants d'analyser la 5e Symphonie de Beethoven : 'Voyez comment ces quatre notes — Sol–Sol–Sol–Mib — génèrent vingt minutes de symphonie. Un motif n'est pas un ornement : c'est le germe de toute la pensée musicale.' Son traité Fundamentals of Musical Composition formalise ces principes pour ses classes américaines."
        lesson="Le motif est la plus petite unité de discours musical. Avant de composer une phrase, demande-toi : mon idée de base est-elle assez distincte pour être reconnaissable ? Assez flexible pour être transformée ? Une bonne idée génère une phrase ; une excellente idée génère une symphonie."
        accentColor={PRIMARY}
      />

      {/* Navigation */}
      <nav style={S.nav}>
        {SECTIONS_IDS.map(id => (
          <button key={id} style={S.pill(activeSection === id)} onClick={() => setActiveSection(id)}>
            {sectionLabel(id)}
          </button>
        ))}
      </nav>

      {/* ══ SECTION 1 : LA PHRASE ══ */}
      {activeSection === "phrase" && (
        <div>
          <h2 style={S.h2}>La phrase musicale de 8 mesures</h2>
          <p style={S.p}>
            La phrase musicale est l'unité de base du discours. Elle repose sur un <strong>motif</strong> —
            le plus petit élément musical distinctif — qui est répété et transformé selon 4 étapes
            typiques. Contrairement à la musique de support (qui accompagne une action), la musique
            de discours développe ses propres idées de façon autonome.
          </p>

          {/* Beethoven motif demo */}
          <div style={{ background: "#f8f8f8", border: "0.5px solid #e5e5e5", borderRadius: 10, padding: "14px 16px", marginBottom: "1.25rem" }}>
            <div style={{ fontSize: 13, fontWeight: 500, color: "#111", marginBottom: 4 }}>
              Motif de la 5e Symphonie de Beethoven
            </div>
            <div style={{ fontFamily: "monospace", fontSize: 13, color: PRIMARY, marginBottom: 10 }}>
              Sol – Sol – Sol – Mib  (3 répétitions + chute de tierce mineure)
            </div>
            <div style={{ fontSize: 12, color: "#666", marginBottom: 10, lineHeight: 1.6 }}>
              4 notes seulement — et pourtant le germe de toute une symphonie. Ce motif est fragmenté,
              transposé, augmenté et liquidé tout au long des 4 mouvements.
            </div>
            <button
              onClick={() => playProg(pianoRef as React.RefObject<PianoPlayerRef>, BEETHOVEN, 450, 0.4)}
              style={{ fontSize: 12, padding: "5px 14px", border: `0.5px solid ${PRIMARY}`, borderRadius: 20, cursor: "pointer", background: "transparent", color: PRIMARY }}
            >
              ▶ Écouter le motif
            </button>
          </div>

          {/* 4 étapes */}
          <h3 style={S.h3}>Les 4 étapes de la phrase (8 mesures)</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 8, marginBottom: "1.25rem" }}>
            {ETAPES.map(({ n, name, desc }) => (
              <div key={n} style={{ border: `0.5px solid ${PRIMARY}25`, borderRadius: 8, padding: "12px 14px", background: PRIMARY_BG }}>
                <div style={{ fontSize: 22, fontWeight: 700, color: PRIMARY, marginBottom: 4, lineHeight: 1 }}>{n}</div>
                <div style={{ fontSize: 13, fontWeight: 500, color: "#111", marginBottom: 3 }}>{name}</div>
                <div style={{ fontSize: 12, color: "#666", lineHeight: 1.5 }}>{desc}</div>
              </div>
            ))}
          </div>
          <div style={S.infoBox}>
            <strong>Liquidation</strong> (terme de Schoenberg) : en fin de phrase (étape 3), le
            motif perd progressivement ses caractéristiques distinctives. On en garde d'abord le
            rythme, puis juste le contour, puis presque rien — la phrase se dissout dans la cadence.
            Procédé rhétorique de 'conclusion' très expressif.
          </div>

          {/* Techniques de répétition */}
          <h3 style={S.h3}>Techniques de répétition du motif</h3>
          {TECHNIQUES.map(tech => (
            <div
              key={tech.id}
              style={{
                border: `0.5px solid ${activeTech === tech.id ? tech.color : "#e5e5e5"}`,
                borderRadius: 10,
                marginBottom: 8,
                overflow: "hidden",
                cursor: "pointer",
                background: activeTech === tech.id ? tech.bg : "#fff",
                transition: "all .15s",
              }}
              onClick={() => setActiveTech(activeTech === tech.id ? null : tech.id)}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 16px" }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 500, color: "#111", marginBottom: 2 }}>{tech.name}</div>
                  <div style={{ fontFamily: "monospace", fontSize: 11, color: tech.color }}>{tech.example}</div>
                </div>
                <div style={{ fontSize: 11, color: "#bbb" }}>{activeTech === tech.id ? "▲" : "▼"}</div>
              </div>
              {activeTech === tech.id && (
                <div style={{ padding: "0 16px 14px", borderTop: `0.5px solid ${tech.color}20` }}>
                  <p style={{ ...S.p, marginTop: 10, marginBottom: tech.demo ? 10 : 0 }}>{tech.description}</p>
                  {tech.demo && (
                    <button
                      onClick={e => {
                        e.stopPropagation();
                        playProg(pianoRef as React.RefObject<PianoPlayerRef>, tech.demo!, tech.id === "stricte" ? 1000 : 1100, 0.9);
                      }}
                      style={{ fontSize: 11, padding: "4px 12px", border: `0.5px solid ${tech.color}`, borderRadius: 20, cursor: "pointer", background: "transparent", color: tech.color }}
                    >
                      {tech.demoLabel}
                    </button>
                  )}
                </div>
              )}
            </div>
          ))}

          <div style={S.warnBox}>
            <strong>À retenir :</strong> la répétition doit être variée — répéter identiquement plus
            de deux fois crée de la monotonie. L'art est de maintenir la reconnaissance du motif
            (cohérence) tout en le renouvelant (variété). Beethoven ne répète jamais le même motif
            exactement de la même façon deux fois de suite.
          </div>
        </div>
      )}

      {/* ══ SECTION 2 : PÉRIODE & FORMES ══ */}
      {activeSection === "periode" && (
        <div>
          <h2 style={S.h2}>La période et les grandes formes</h2>
          <p style={S.p}>
            La <strong>période</strong> est une structure de deux phrases : l'antécédent pose une
            question (cadence faible sur V), le conséquent apporte la réponse (cadence forte sur I).
            Les grandes formes organisent ces périodes en sections contrastantes pour construire
            un discours musical à plus grande échelle.
          </p>

          {/* Antécédent / Conséquent demos */}
          <h3 style={S.h3}>Antécédent → Conséquent : question / réponse</h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 12 }}>
            <div style={{ border: "0.5px solid #BA7517", borderRadius: 10, padding: "14px 16px", background: "#FAEEDA" }}>
              <div style={{ fontSize: 12, fontWeight: 500, color: "#BA7517", marginBottom: 4 }}>Antécédent — question</div>
              <div style={{ fontFamily: "monospace", fontSize: 11, color: "#633806", marginBottom: 8 }}>
                I – IIm – V  (se termine sur V)
              </div>
              <div style={{ fontSize: 12, color: "#555", lineHeight: 1.5, marginBottom: 10 }}>
                La demi-cadence sur V laisse la phrase 'ouverte' — l'oreille attend une résolution.
              </div>
              <button
                onClick={() => playProg(pianoRef as React.RefObject<PianoPlayerRef>, ANTECEDENT, 1200, 1.1)}
                style={{ fontSize: 11, padding: "4px 12px", border: "0.5px solid #BA7517", borderRadius: 20, cursor: "pointer", background: "transparent", color: "#BA7517" }}
              >
                ▶ Antécédent (→ V)
              </button>
            </div>
            <div style={{ border: `0.5px solid ${PRIMARY}`, borderRadius: 10, padding: "14px 16px", background: PRIMARY_BG }}>
              <div style={{ fontSize: 12, fontWeight: 500, color: PRIMARY, marginBottom: 4 }}>Conséquent — réponse</div>
              <div style={{ fontFamily: "monospace", fontSize: 11, color: "#3A0A50", marginBottom: 8 }}>
                I – IIm – I  (se termine sur I)
              </div>
              <div style={{ fontSize: 12, color: "#555", lineHeight: 1.5, marginBottom: 10 }}>
                La cadence parfaite sur I résout la tension — la 'réponse' est donnée, la période complète.
              </div>
              <button
                onClick={() => playProg(pianoRef as React.RefObject<PianoPlayerRef>, CONSEQUENT, 1200, 1.1)}
                style={{ fontSize: 11, padding: "4px 12px", border: `0.5px solid ${PRIMARY}`, borderRadius: 20, cursor: "pointer", background: "transparent", color: PRIMARY }}
              >
                ▶ Conséquent (→ I)
              </button>
            </div>
          </div>
          <div style={{ textAlign: "center", marginBottom: "1.25rem" }}>
            <button
              onClick={() => playProg(pianoRef as React.RefObject<PianoPlayerRef>, PERIOD_DEMO, 1100, 1.0)}
              style={{ fontSize: 12, padding: "6px 18px", border: "0.5px solid #333", borderRadius: 20, cursor: "pointer", background: "transparent", color: "#333" }}
            >
              ▶ Écouter la période complète (antécédent + conséquent)
            </button>
          </div>

          {/* Tableau comparatif phrase vs période */}
          <h3 style={S.h3}>Phrase vs Période</h3>
          <div style={{ overflowX: "auto", marginBottom: "1.5rem" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
              <thead>
                <tr style={{ borderBottom: "0.5px solid #e5e5e5" }}>
                  {["Aspect", "Phrase", "Période"].map(h => (
                    <th key={h} style={{ textAlign: "left", padding: "7px 12px", fontWeight: 500, color: "#666" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Longueur typique", "8 mesures", "16 mesures (8+8)"],
                  ["Structure", "Un seul bloc d'idée", "Antécédent + Conséquent"],
                  ["Cadence finale", "Une cadence conclusive", "V (antécédent) + I (conséquent)"],
                  ["Effet expressif", "Phrase autonome", "Question → Réponse"],
                  ["Exemple classique", "Premier thème de sonate", "Nocturne de Chopin, Menuet"],
                ].map(([aspect, phrase, periode], idx) => (
                  <tr key={aspect} style={{ borderBottom: "0.5px solid #f0f0f0", background: idx % 2 === 0 ? "#fff" : "#fafafa" }}>
                    <td style={{ padding: "7px 12px", fontWeight: 500, color: "#555" }}>{aspect}</td>
                    <td style={{ padding: "7px 12px", color: "#444" }}>{phrase}</td>
                    <td style={{ padding: "7px 12px", color: "#444" }}>{periode}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Grandes formes */}
          <h3 style={S.h3}>Les grandes formes musicales</h3>
          {FORMES.map(forme => (
            <div
              key={forme.id}
              style={{
                border: `0.5px solid ${activeForme === forme.id ? forme.color : "#e5e5e5"}`,
                borderRadius: 10,
                marginBottom: 8,
                overflow: "hidden",
                cursor: "pointer",
                background: activeForme === forme.id ? forme.bg : "#fff",
                transition: "all .15s",
              }}
              onClick={() => setActiveForme(activeForme === forme.id ? null : forme.id)}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 16px" }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 500, color: "#111", marginBottom: 2 }}>{forme.name}</div>
                  <div style={{ fontFamily: "monospace", fontSize: 12, color: forme.color }}>{forme.schema}</div>
                </div>
                <div style={{ fontSize: 11, color: "#bbb" }}>{activeForme === forme.id ? "▲" : "▼"}</div>
              </div>
              {activeForme === forme.id && (
                <div style={{ padding: "0 16px 14px", borderTop: `0.5px solid ${forme.color}20` }}>
                  <p style={{ ...S.p, marginTop: 10, marginBottom: 6 }}>{forme.description}</p>
                  <div style={{ fontSize: 12, color: "#888", marginBottom: forme.demo ? 12 : 0 }}>
                    <em>Exemples :</em> {forme.examples}
                  </div>
                  {forme.demo && (
                    <button
                      onClick={e => {
                        e.stopPropagation();
                        playProg(pianoRef as React.RefObject<PianoPlayerRef>, forme.demo!, 900, 0.85);
                      }}
                      style={{ fontSize: 11, padding: "4px 12px", border: `0.5px solid ${forme.color}`, borderRadius: 20, cursor: "pointer", background: "transparent", color: forme.color }}
                    >
                      ▶ Écouter la grille blues
                    </button>
                  )}
                </div>
              )}
            </div>
          ))}

          <div style={S.tip}>
            <strong>Jazz et forme :</strong> un improvisateur qui connaît la forme joue
            'avec' la structure. Plus de tension dans le pont B, résolution plus marquée au retour
            de A, climax au bon moment du chorus. Ignorer la forme revient à improviser dans le vide —
            techniquement correct, musicalement inexpressif. La forme est le cadre du discours.
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
                {quizScore >= 8 ? "📖" : quizScore >= 6 ? "👍" : "💪"}
              </div>
              <div style={{ fontSize: 20, fontWeight: 500, color: "#111", marginBottom: 4 }}>
                Score : {quizScore} / {QUIZ_COUNT}
              </div>
              <div style={{ fontSize: 14, color: "#666", marginBottom: 20 }}>
                {i18n.quizMessage(quizScore, QUIZ_COUNT)}
              </div>
              <button
                onClick={resetQuiz}
                style={{ fontSize: 13, padding: "8px 20px", border: `0.5px solid ${PRIMARY}`, borderRadius: 20, cursor: "pointer", background: PRIMARY_BG, color: PRIMARY }}
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
