"use client";

/**
 * Cours18.tsx
 * Harmonia · Niveau 2 · Cours 18 — Le développement motivique
 * Convention : affichage anglais, dotKeys PianoPlayer français
 */

import React, { useRef, useState } from "react";
import { useCoursI18n } from "@/hooks/useCoursI18n";
import { useCoursContent } from "@/hooks/useCoursContent";
import { cours18Content } from "@/data/cours18Content";
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

// Beethoven 5th — motif original (Sol–Sol–Sol–Mib, descending minor 3rd)
const MOTIF_ORIG: string[][] = [["Sol:4"],["Sol:4"],["Sol:4"],["Mib:4"]];

// Renversement (inversion): ascending minor 3rd (Sol–Sol–Sol–Sib)
const MOTIF_INV: string[][] = [["Sol:4"],["Sol:4"],["Sol:4"],["Sib:4"]];

// Rétrograde: reversed motif (Mib–Sol–Sol–Sol)
const MOTIF_RETRO: string[][] = [["Mib:4"],["Sol:4"],["Sol:4"],["Sol:4"]];

// Arpège: C major broken chord ascending
const ARPEGE_DEMO: string[][] = [["Do:4"],["Mi:4"],["Sol:4"],["Do:5"]];

// Contrepoint: contrary motion — bass ascending, treble descending
const CONTREPOINT_DEMO: string[][] = [
  ["Do:3","Sol:4"],   // Do3=48, Sol4=67 ✓
  ["Ré:3","Fa:4"],    // Ré3=50, Fa4=65 ✓
  ["Mi:3","Mi:4"],    // Mi3=52, Mi4=64 ✓
  ["Sol:3","Do:4"],   // Sol3=55, Do4=60 ✓
];

// Harmonic I–V7–I (original)
const HARM_ORIG: string[][] = [
  ["Do:3","Mi:3","Sol:3"],          // I   — CMaj  (48,52,55) ✓
  ["Sol:3","Si:3","Ré:4","Fa:4"],   // V7  — G7    (55,59,62,65) ✓
  ["Do:3","Mi:3","Sol:3"],          // I   — CMaj
];

// Harmonic I–VI–I (diatonic substitution: V → VI)
const HARM_SUBST: string[][] = [
  ["Do:3","Mi:3","Sol:3"],   // I  — CMaj  (48,52,55) ✓
  ["La:3","Do:4","Mi:4"],    // VI — Am    (57,60,64) ✓
  ["Do:3","Mi:3","Sol:3"],   // I  — CMaj
];

// ── Static data ───────────────────────────────────────────────────────────────

const ELEMENTS = [
  {
    n: "①",
    name: "Intervalles",
    desc: "Les sauts mélodiques caractéristiques — l'identité mélodique distinctive (tierce, quinte, triton). Le motif de Beethoven : une chute de tierce mineure Sol→Mib.",
  },
  {
    n: "②",
    name: "Rythme",
    desc: "Le schéma rythmique distinctif — souvent plus identifiable que la mélodie. Trois notes courtes + une longue (ta-ta-ta-TAA) chez Beethoven.",
  },
  {
    n: "③",
    name: "Harmonie",
    desc: "Les accords qui soutiennent et colorent le motif — déterminant si l'expression est tendue, résolue ou ambiguë.",
  },
  {
    n: "④",
    name: "Accompagnement",
    desc: "La texture qui entoure le motif : arpèges, accords plaqués, ligne de basse indépendante, contrepoint.",
  },
  {
    n: "⑤",
    name: "Dynamique",
    desc: "Nuances, articulation, attaque — le caractère expressif physique. Forte ou piano, legato ou staccato.",
  },
];

const EXEMPLES = [
  {
    name: "Beethoven — 5e Symphonie (1808)",
    color: "#6B3D00",
    bg: "#FDF2E0",
    motif: "Sol – Sol – Sol – Mib",
    desc: "Quatre notes seulement. Beethoven fragmente, transpose, augmente et liquide ce motif tout au long des quatre mouvements. Vingt minutes de symphonie issues d'une cellule de quatre notes.",
  },
  {
    name: "Wagner — Leitmotiv (opéras, 1850–1882)",
    color: "#185FA5",
    bg: "#E6F1FB",
    motif: "Motif associé à un personnage ou une idée",
    desc: "Wagner associe un motif à chaque personnage (l'épée de Siegfried, la malédiction de l'Or). Le motif revient transformé selon l'état dramatique — un motif de gloire devient sinistre par changement harmonique.",
  },
  {
    name: "John Williams — Star Wars (1977)",
    color: "#0F6E56",
    bg: "#E1F5EE",
    motif: "Thème de la Force, marche impériale...",
    desc: "Williams hérite directement de Wagner : chaque personnage ou concept a son leitmotiv. Le thème de la Force est transformé en marche militaire pour Dark Vador — même contour, contexte harmonique radicalement différent.",
  },
];

interface Family {
  id: string;
  letter: string;
  name: string;
  color: string;
  bg: string;
  order: string;
  desc: string;
  subs: { name: string; detail: string }[];
  demo?: string[][];
  demoLabel?: string;
  demoGapMs?: number;
  demoDur?: number;
  demo2?: string[][];
  demo2Label?: string;
  demo2GapMs?: number;
  demo2Dur?: number;
}

const FAMILIES: Family[] = [
  {
    id: "harmonie",
    letter: "A",
    name: "Harmonie et accompagnement",
    color: "#185FA5",
    bg: "#E6F1FB",
    order: "En premier — changements les moins radicaux. L'identité mélodique et rythmique du motif reste intacte.",
    desc: "Transformer le contexte harmonique ou la texture d'accompagnement. Le motif reste pleinement reconnaissable car sa mélodie et son rythme sont préservés — seule la 'couleur' change.",
    subs: [
      { name: "Substitution harmonique", detail: "Remplacer I par VI (substitution diatonique), ou V7 par son substitut tritonique. Même mélodie, couleur harmonique différente." },
      { name: "Ligne de basse", detail: "Transformer la basse en contrepoint indépendant — tierce ou sixte parallèle, ou mouvement contraire à la mélodie." },
      { name: "Arpèges", detail: "Briser les accords en notes successives montantes ou descendantes. Transforme la texture sans toucher au motif mélodique." },
      { name: "Contrepoint", detail: "Ajouter une voix indépendante qui répond ou imite le motif. Enrichit la densité polyphonique." },
    ],
    demo: HARM_ORIG,
    demoLabel: "▶ I–V7–I (original)",
    demoGapMs: 1200,
    demoDur: 1.1,
    demo2: HARM_SUBST,
    demo2Label: "▶ I–VI–I (substitution VI)",
    demo2GapMs: 1200,
    demo2Dur: 1.1,
  },
  {
    id: "dynamique",
    letter: "B",
    name: "Arrangement dynamique",
    color: "#0F6E56",
    bg: "#E1F5EE",
    order: "En deuxième — changements d'expression sans altérer notes ni rythme.",
    desc: "Modifier les paramètres d'expression : nuances, articulation, tessiture, timbre. Le motif garde sa structure intacte — seule son 'énergie' ou son 'costume' change.",
    subs: [
      { name: "Nuances", detail: "Forte → piano, crescendo, decrescendo. Même mélodie, contraste d'intensité dramatique radicalement différent." },
      { name: "Articulation", detail: "Legato → staccato, accents sur des temps inattendus. Change le caractère sans toucher aux hauteurs ni aux durées." },
      { name: "Tessiture", detail: "Transposer d'une octave : monter apporte luminosité et urgence ; descendre crée gravité et profondeur." },
      { name: "Timbre", detail: "Changer l'instrument ou le registre : même motif aux violons, puis aux cuivres, puis au tutti — effets entièrement différents." },
    ],
  },
  {
    id: "melodique",
    letter: "C",
    name: "Transformations mélodiques",
    color: "#7B1F1F",
    bg: "#FCEAEA",
    order: "En troisième — les hauteurs changent, mais le rythme reste souvent reconnaissable.",
    desc: "Modifier le contour mélodique du motif tout en maintenant souvent sa structure rythmique. L'oreille reconnaît le motif par son rythme même quand les hauteurs changent significativement.",
    subs: [
      { name: "Renversement (inversion des intervalles)", detail: "Chaque intervalle est inversé : une montée de tierce devient une descente de tierce. Sol–Sol–Sol–Mib devient Sol–Sol–Sol–Sib." },
      { name: "Rétrograde", detail: "Le motif est joué à l'envers — de la dernière note à la première. Mib–Sol–Sol–Sol (rétrograde du motif de Beethoven)." },
      { name: "Ajout/omission de notes", detail: "Insérer des notes de passage, ou supprimer une note du motif. Le contour reste reconnaissable, allégé ou enrichi." },
      { name: "Transformation non rythmique", detail: "Les hauteurs changent selon la gamme (marche harmonique) mais le schéma rythmique reste identique." },
    ],
    demo: MOTIF_ORIG,
    demoLabel: "▶ Motif original (↓ tierce min.)",
    demoGapMs: 500,
    demoDur: 0.4,
    demo2: MOTIF_INV,
    demo2Label: "▶ Renversement (↑ tierce min.)",
    demo2GapMs: 500,
    demo2Dur: 0.4,
  },
  {
    id: "rythmique",
    letter: "D",
    name: "Altérations rythmiques",
    color: "#6B3FA0",
    bg: "#F0EAFA",
    order: "En dernier — les changements les plus radicaux. Le motif peut devenir méconnaissable.",
    desc: "Modifier la durée des notes ou la carrure métrique. Les altérations rythmiques sont les plus transformatrices : le rythme est souvent le trait le plus distinctif d'un motif — le toucher, c'est le risquer.",
    subs: [
      { name: "Augmentation", detail: "Doubler (ou tripler) la durée de chaque note. Le motif ralentit, prend une ampleur solennelle — Beethoven l'utilise dans les développements de sonates." },
      { name: "Diminution", detail: "Diviser la durée de chaque note. Le motif s'accélère, devient nerveux ou urgent — effet de liquidation en fin de phrase." },
      { name: "Changement de carrure", detail: "Passer de 4/4 à 3/4 (ou inversement). Le même motif dans un mètre différent produit un sentiment de déséquilibre ou de légèreté." },
      { name: "Régularisation/dérégulation", detail: "Transformer des syncopes en temps forts (régularisation) ou des temps forts en syncopes (dérégulation). Change l'énergie rythmique sans toucher aux hauteurs." },
    ],
    demo: MOTIF_ORIG,
    demoLabel: "▶ Motif (tempo normal)",
    demoGapMs: 500,
    demoDur: 0.4,
    demo2: MOTIF_RETRO,
    demo2Label: "▶ Rétrograde (fam. C — écoute comparative)",
    demo2GapMs: 500,
    demo2Dur: 0.4,
  },
];

// ── Quiz ──────────────────────────────────────────────────────────────────────

const ALL_QUESTIONS = [
  // Définition du motif
  { q: "Qu'est-ce qu'un motif musical ?", opts: ["Un accord de 4 sons", "La plus petite unité musicale distincte, immédiatement reconnaissable — fil conducteur du discours", "Une gamme complète", "Un accord de dominante"], a: 1, fb: "Le motif est la plus petite cellule musicale autonome et distincte. Il contient une identité rythmique et/ou mélodique reconnaissable, qui sera répétée et transformée pour construire un discours musical cohérent. Beethoven construit toute sa 5e Symphonie depuis un motif de 4 notes seulement." },
  { q: "Quel est le rôle principal du motif dans une composition ?", opts: ["Fixer le tempo", "Servir de fil conducteur — répété et transformé, il donne cohérence et direction au discours musical", "Indiquer la tonalité", "Déterminer le nombre de mesures"], a: 1, fb: "Le motif est le fil conducteur. Sa répétition (stricte ou transformée) crée la cohérence : l'auditeur reconnaît l'idée même transformée, et suit ainsi le discours musical. Sans motif directeur, une succession d'accords est 'hors sol' — une liste sans direction." },
  { q: "Quelle différence entre 'musique de support' et 'musique de discours' ?", opts: ["La musique de support est plus rapide", "La musique de support accompagne une action extérieure ; la musique de discours développe ses propres idées musicales de façon autonome", "La musique de discours est plus courte", "Il n'y a aucune différence"], a: 1, fb: "La musique de support (film, ballet, publicité) sert une action extérieure — sa structure peut être fragmentée selon la narration. La musique de discours (sonate, fugue, standard jazz) développe ses propres idées de façon logique, indépendamment de tout contexte extra-musical." },
  { q: "Le 'paradoxe de la répétition' en composition musicale signifie que :", opts: ["Il ne faut jamais répéter", "La répétition est nécessaire pour la cohérence, mais dangereuse si elle est trop pure — la monotonie menace", "Il faut toujours répéter exactement", "La répétition est uniquement rythmique"], a: 1, fb: "Paradoxe central : sans répétition, pas de cohérence (l'auditeur ne reconnaît rien) ; avec trop de répétition identique, la monotonie s'installe. La solution : répéter en transformant. La variété dans la répétition est l'art même du développement motivique." },
  { q: "Les trois étapes de la vie d'un motif sont :", opts: ["Introduction, développement, coda", "Présentation → Répétition → Évolution", "Exposition, fugue, réexposition", "Motif, thème, période"], a: 1, fb: "Un motif suit trois étapes rhétoriques : Présentation (établir l'identité), Répétition (ancrer le motif dans l'oreille), Évolution (transformer, développer, combiner). Cette trajectoire s'applique à l'échelle de la phrase (8 mesures), du mouvement et de l'œuvre entière." },

  // Les 5 éléments constitutifs
  { q: "Combien d'éléments constitutifs définissent un motif ?", opts: ["2 (mélodie et rythme)", "3 (mélodie, rythme, harmonie)", "5 (intervalles, rythme, harmonie, accompagnement, dynamique)", "7 (un par note)"], a: 2, fb: "Cinq éléments constituent un motif : (1) intervalles (contour mélodique), (2) rythme (schéma de durées), (3) harmonie (accords de soutien), (4) accompagnement (texture), (5) dynamique (nuances et articulation). Chaque élément peut être modifié indépendamment lors du développement." },
  { q: "Parmi les 5 éléments d'un motif, lequel est souvent le plus immédiatement reconnaissable ?", opts: ["La mélodie (intervalles)", "Le rythme — son schéma est souvent identifiable même si les hauteurs changent", "L'harmonie", "La dynamique"], a: 1, fb: "Le rythme est souvent l'élément le plus distinctif. Dans le motif ta-ta-ta-TAA de Beethoven (3 croches + noire), on le reconnaît même transposé dans une autre tonalité ou joué par un instrument différent. Le rythme est l'ADN temporel du motif." },
  { q: "L'élément 'accompagnement' d'un motif désigne :", opts: ["La mélodie principale", "La texture qui entoure le motif : arpèges, accords plaqués, ligne de basse indépendante", "Les nuances dynamiques", "Le tempo"], a: 1, fb: "L'accompagnement est la texture musicale qui entoure le motif mélodique. Un même motif peut sonner radicalement différent selon qu'il est accompagné d'arpèges (légèreté), d'accords plaqués (solidité) ou d'une ligne de basse en contrepoint (richesse polyphonique)." },
  { q: "L'élément 'dynamique' d'un motif inclut :", opts: ["Les hauteurs de notes uniquement", "Les nuances (forte/piano), l'articulation (legato/staccato) et l'attaque — l'expression physique du motif", "Le nombre de répétitions", "La tonalité du morceau"], a: 1, fb: "La dynamique regroupe les nuances (forte, piano, crescendo), l'articulation (legato, staccato, accent), et le type d'attaque. Même motif joué pianissimo legato vs fortissimo staccato : deux caractères entièrement différents, sans changer une note." },
  { q: "Pourquoi les intervalles sont-ils un élément constitutif du motif ?", opts: ["Car ils fixent le tempo", "Car les sauts mélodiques caractéristiques (tierce, quinte, triton) créent l'identité mélodique distinctive du motif", "Car ils indiquent la mesure", "Car ils sont toujours les mêmes dans tous les motifs"], a: 1, fb: "Les intervalles sont l'empreinte mélodique du motif. La chute de tierce mineure (Sol–Mib) dans le motif de Beethoven est immédiatement reconnaissable. Un motif construit sur un triton sonnera tendu ; sur une tierce majeure, brillant. Les intervalles fixent le caractère mélodique." },

  // Exemples
  { q: "Quel motif Beethoven utilise dans sa 5e Symphonie (1808) ?", opts: ["4 notes descendantes par demi-tons", "3 notes répétées + une chute de tierce mineure (Sol–Sol–Sol–Mib, ta-ta-ta-TAA)", "Un arpège de Do majeur", "Une gamme ascendante"], a: 1, fb: "Sol–Sol–Sol–Mib : 3 notes répétées identiquement + chute de tierce mineure. Ce motif est le germe de toute la 5e Symphonie. Beethoven le fragmente, le transpose, l'augmente dans les 4 mouvements — démonstration absolue de l'économie de moyens." },
  { q: "Qu'est-ce qu'un 'leitmotiv' chez Wagner ?", opts: ["Un tempo particulier", "Un motif récurrent associé à un personnage ou une idée dramatique — transformé selon le contexte", "Un accord de dominante", "Une fugue pour orchestre"], a: 1, fb: "Wagner associe dans ses opéras un motif musical (leitmotiv) à chaque personnage, concept ou objet dramatique. Le motif de l'épée de Siegfried revient transformé selon la situation — glorieux dans les moments de triomphe, sombre dans les moments de danger. C'est la forme motivique étendue à l'échelle d'un opéra entier." },
  { q: "Comment John Williams hérite-t-il de la technique de Wagner dans Star Wars ?", opts: ["Il utilise les mêmes harmonies", "Il associe un leitmotiv à chaque personnage (thème de la Force, marche impériale) qu'il transforme selon le contexte dramatique", "Il copie les rythmes de Wagner", "Il utilise les mêmes instruments"], a: 1, fb: "Williams hérite directement de Wagner : chaque personnage a son motif. Le thème de la Force — calme et lumineux — devient la marche impériale pour Dark Vador, avec le même contour mélodique mais une harmonisation radicalement différente (mineur, cuivres, dynamique forte). Même technique, un siècle plus tard." },
  { q: "Ce qui rend le motif de Beethoven (5e Symphonie) si efficace est :", opts: ["Sa longueur — plus de 8 notes", "Sa brièveté et sa distinctivité : 4 notes seulement, avec un rythme et un intervalle immédiatement mémorisables", "Sa complexité harmonique", "Son orchestration rare"], a: 1, fb: "La force du motif est son économie. 4 notes : 3 répétées (l'insistance) + 1 chute de tierce mineure (la résolution descendante). Ce dépouillement le rend universellement mémorable et infiniment transformable. Beethoven en tire 20 minutes de symphonie — économie maximale, expressivité maximale." },
  { q: "La technique du leitmotiv est notamment utilisée par :", opts: ["Bach dans ses fugues", "Wagner et, plus tard, John Williams dans ses musiques de film", "Chopin dans ses nocturnes", "Debussy dans ses préludes"], a: 1, fb: "Wagner développe le leitmotiv dans ses opéras (L'Anneau du Nibelung, Tristan und Isolde). Cette technique passe dans le cinéma via Korngold, Herrmann et surtout John Williams — qui reconnait ouvertement sa dette envers Wagner dans Star Wars et les séries qui suivent." },

  // Famille A — Harmonie et accompagnement
  { q: "La famille A (harmonie et accompagnement) est appliquée en premier car :", opts: ["Elle est plus facile", "C'est la transformation la moins radicale — l'identité mélodique et rythmique du motif reste intacte", "Elle donne le meilleur résultat", "Elle est la plus rapide à réaliser"], a: 1, fb: "En modifiant l'harmonie ou la texture d'accompagnement, on transforme la 'couleur' du motif sans toucher à son identité mélodie-rythme. L'auditeur reconnaît pleinement le motif — le changement est subtil. C'est pourquoi cette famille est appliquée en premier : effet remarquable, risque de perte d'identité minimal." },
  { q: "La 'substitution harmonique' dans le développement motivique consiste à :", opts: ["Changer le motif mélodique", "Remplacer un accord par un autre de même fonction ou couleur (I → VI, V7 → SubV) sous le même motif", "Changer la tonalité du morceau", "Supprimer des accords"], a: 1, fb: "La substitution harmonique change les accords qui soutiennent le motif sans toucher aux notes du motif lui-même. Remplacer I par VI (substitution diatonique) donne une couleur plus douce ; V7 par SubV (substitution tritonique) produit une basse chromatique. Le motif reste reconnaissable, la couleur change totalement." },
  { q: "Transformer l'accompagnement en 'arpèges' plutôt qu'en 'accords plaqués' modifie :", opts: ["Les notes du motif", "La texture — la façon dont les accords sont déployés dans le temps, créant légèreté ou mouvement", "La tonalité", "Le rythme du motif"], a: 1, fb: "Les arpèges brisent les accords en notes successives — ce qui crée du mouvement et de la légèreté (Chopin). Les accords plaqués créent solidité et impact (Beethoven). Même harmonie, même motif mélodique, textures totalement différentes. La transformation d'accompagnement est l'une des plus fréquentes en composition." },
  { q: "Le 'contrepoint' comme technique de développement motivique consiste à :", opts: ["Répéter le motif deux fois", "Ajouter une voix indépendante qui répond, imite ou contraste avec le motif — enrichissant la polyphonie", "Changer le tempo", "Inverser les intervalles"], a: 1, fb: "Le contrepoint ajoute une ou plusieurs voix qui dialoguent avec le motif principal. Cette voix peut l'imiter (canon), lui répondre en mouvement contraire, ou l'accompagner en sixte parallèle. L'œuvre devient plus dense sans modifier le motif — c'est l'enrichissement par addition, pas par transformation." },
  { q: "La 'ligne de basse' comme développement motivique signifie :", opts: ["Jouer le motif à la basse", "Transformer la basse en contrepoint mélodique indépendant — tierce, sixte ou mouvement contraire — qui dialogue avec le motif", "Supprimer la basse", "Doubler la basse à l'octave"], a: 1, fb: "Au lieu de simplement doubler la basse harmonique, on lui donne un contour mélodique propre — une ligne de basse en mouvement contraire au motif, ou en tierce/sixte parallèle. Cette technique est très présente chez Bach (chorals) et Beethoven (sonates) : elle enrichit la texture sans altérer le motif." },

  // Famille B — Dynamique
  { q: "Modifier les 'nuances' d'un motif (forte → piano) transforme :", opts: ["Les hauteurs de notes", "L'intensité et le caractère expressif — même mélodie, impact émotionnel radicalement différent", "Le rythme", "La tonalité"], a: 1, fb: "Le même motif joué fortissimo est menaçant ou triomphal ; pianissimo, il devient mystérieux ou tendre. Beethoven exploite systématiquement cette dichotomie : il présente son motif fortissimo, puis le répète pianissimo — double affirmation, double caractère. Les nuances transforment le sens sans toucher aux notes." },
  { q: "Transposer un motif d'une octave vers le haut produit :", opts: ["Le même effet qu'à l'octave inférieure", "Luminosité, urgence et clarté — la tessiture aiguë est perçue comme plus brillante et intense", "Un ralentissement perçu", "Un changement de tonalité"], a: 1, fb: "La tessiture aiguë crée luminosité et tension (perçue comme plus urgente psychologiquement). L'octave grave crée profondeur, gravité, autorité. Beethoven utilise cette transformation de tessiture systématiquement dans ses développements — même motif, registres différents, effets dramatiques contrastants." },
  { q: "Passer d'un jeu legato à un jeu staccato sur le même motif :", opts: ["Ralentit le motif", "Change l'articulation — le caractère devient incisif, léger ou nerveux selon le contexte, sans toucher aux hauteurs", "Modifie les intervalles", "Change l'harmonie"], a: 1, fb: "Legato = notes liées, flux continu, caractère lyrique ou doux. Staccato = notes détachées, caractère vif, léger ou incisif. Le même motif en legato semble nostalgique ; en staccato, espiègle ou urgent. L'articulation est l'un des paramètres les plus fins et expressifs du développement dynamique." },
  { q: "Changer le 'timbre' dans un développement motivique signifie :", opts: ["Changer le compositeur", "Confier le même motif à un instrument différent (violons → cuivres, piano → orchestre) — même mélodie, couleur instrumentale radicalement différente", "Changer la tonalité", "Modifier le rythme"], a: 1, fb: "Le même motif aux violons semble lyrique ; aux cuivres, héroïque ; à la flûte, aérien ; au piano fortissimo, percutant. Le timbre est la 'voix' de l'instrument. Dans les développements symphoniques, Beethoven passe le même motif à travers différentes familles orchestrales — transformation pure de timbre, pas de notes." },

  // Famille C — Transformations mélodiques
  { q: "Le 'renversement' (inversion des intervalles) d'un motif consiste à :", opts: ["Jouer le motif à l'envers", "Inverser chaque intervalle : une montée de tierce devient une descente de tierce (et vice versa)", "Répéter le motif deux fois plus vite", "Transposer d'une octave"], a: 1, fb: "Le renversement mirror chaque intervalle. Sol–Sol–Sol–Mib (chute de tierce mineure) devient Sol–Sol–Sol–Sib (montée de tierce mineure). Le contour rythmique reste identique ; le profil mélodique est inversé. Technique fréquente dans les fugues de Bach et les développements de Beethoven." },
  { q: "Le 'rétrograde' d'un motif est :", opts: ["Le motif joué plus lentement", "Le motif joué à l'envers — de la dernière note à la première", "Le motif transposé à l'octave", "Le motif répété deux fois"], a: 1, fb: "Le rétrograde inverse l'ordre des notes : Mib–Sol–Sol–Sol est le rétrograde de Sol–Sol–Sol–Mib (Beethoven). Technique utilisée par Bach dans les canons, par Beethoven et par les sérialistes. Elle peut sembler méconnaissable à l'oreille mais maintient une cohérence logique avec le matériel original." },
  { q: "Ajouter des 'notes de passage' à un motif :", opts: ["Supprime le motif", "Enrichit le contour mélodique en comblant les sauts — le motif original reste reconnaissable, la mélodie devient plus fluide", "Change le rythme", "Change la tonalité"], a: 1, fb: "Les notes de passage remplissent les intervalles du motif. Un saut de tierce (Do–Mi) devient une gamme descendante (Do–Ré–Mi). Le contour rythmique peut rester identique. Le motif est plus riche mélodiquement, moins 'anguleux', mais son identité de départ reste perceptible." },
  { q: "La 'transformation non rythmique' d'un motif signifie :", opts: ["Garder le rythme identique mais modifier les hauteurs selon la gamme (marche harmonique ou transposition)", "Changer uniquement le rythme", "Supprimer toutes les notes", "Inverser le motif"], a: 0, fb: "La transformation non rythmique conserve le schéma rythmique du motif mais fait glisser les hauteurs selon la gamme (marche tonale) ou par transposition exacte (marche réelle). Le rythme — souvent l'identité la plus forte — reste reconnaissable ; les hauteurs varient. C'est la marche harmonique ou séquence." },
  { q: "Pourquoi le renversement et le rétrograde sont-ils des transformations 'de la famille C' ?", opts: ["Parce qu'ils sont les plus simples", "Parce qu'ils transforment le contour mélodique sans nécessairement toucher au rythme — hauteurs modifiées, structure temporelle préservée", "Parce qu'ils s'appliquent après les altérations rythmiques", "Parce qu'ils ne modifient que l'harmonie"], a: 1, fb: "Renversement et rétrograde modifient les hauteurs tout en maintenant (souvent) la structure rythmique. Ils appartiennent aux transformations mélodiques (famille C). Ce sont des transformations plus radicales que la famille A (harmonie) mais moins radicales que la famille D (altérations rythmiques)." },
  { q: "L'omission d'une note d'un motif :", opts: ["Détruit le motif entièrement", "Allège le motif — le contour général peut rester reconnaissable, créant une version réduite ou fragmentée", "N'est jamais utilisée en composition", "Doit toujours être compensée par une autre note"], a: 1, fb: "Omettre une note crée une version 'allégée' du motif — technique de liquidation progressive (terme de Schoenberg). Le motif perd progressivement ses traits distinctifs. Beethoven utilise cette technique en fin de développement : le motif se fragmente jusqu'à se dissoudre dans la cadence finale." },

  // Famille D — Altérations rythmiques
  { q: "L'augmentation d'un motif consiste à :", opts: ["Jouer le motif plus fort", "Doubler (ou tripler) la durée de chaque note — le motif ralentit, prend une ampleur solennelle", "Transposer d'une octave", "Inverser les intervalles"], a: 1, fb: "L'augmentation double chaque durée : une croche devient une noire, une noire devient une blanche. Le motif est le même mais s'étire dans le temps — effet de ralenti, de solennité, de grandeur. Beethoven l'utilise dans les développements pour créer un sentiment d'inéluctabilité." },
  { q: "La diminution d'un motif consiste à :", opts: ["Jouer le motif moins fort", "Diviser la durée de chaque note — le motif s'accélère, devient nerveux ou urgent", "Supprimer des notes", "Inverser le motif"], a: 1, fb: "La diminution divise chaque durée : une noire devient une croche, une croche une double croche. Le motif s'accélère — effet de tension montante, d'impatience, d'urgence. Technique fréquente dans les développements de fugues (Bach) et les sections de liquidation de Beethoven." },
  { q: "Le changement de carrure (3/4 → 4/4) transforme un motif en :", opts: ["Lui ajoutant des notes", "Changeant son contexte métrique — le même motif dans un mètre différent crée un sentiment de légèreté, déséquilibre ou nouvelle énergie", "Modifiant ses hauteurs", "Doublant sa durée"], a: 1, fb: "Transposer un motif de 4/4 en 3/4 lui donne une allure de valse ; de 3/4 en 2/4, une énergie de marche. La barre de mesure se déplace par rapport aux notes — des accents tombent à d'autres endroits. Le motif est identique, mais son rapport au temps a changé. Chopin utilise cette technique dans son Scherzo n°2." },
  { q: "Pourquoi les altérations rythmiques sont-elles appliquées en dernier ?", opts: ["Parce qu'elles sont plus difficiles à écrire", "Parce que le rythme est souvent l'élément le plus distinctif du motif — le modifier est le changement le plus radical, risquant de rendre le motif méconnaissable", "Parce qu'elles nécessitent un orchestre", "Parce qu'elles sont les moins expressives"], a: 1, fb: "Le rythme est souvent l'ADN le plus robuste d'un motif — on reconnaît le ta-ta-ta-TAA de Beethoven même transposé dans une autre tonalité. Toucher au rythme, c'est risquer de perdre l'identité du motif. C'est pourquoi les altérations rythmiques viennent en dernier : elles ont le plus grand pouvoir transformateur — et le plus grand risque." },
  { q: "La 'dérégulation' rythmique d'un motif consiste à :", opts: ["Regulariser les syncopes", "Transformer des temps forts en syncopes — déplacer les accents du motif pour créer tension ou surprise rythmique", "Doubler la durée des notes", "Changer le tempo"], a: 1, fb: "La dérégulation crée des syncopes là où le motif original avait des temps forts. L'effet est de déstabilisation rythmique — l'oreille attendait un accent à un endroit, il arrive décalé. Technique très présente en jazz (off-beat phrasing) et dans les développements beethovéniens." },

  // Ordre d'application
  { q: "L'ordre correct d'application des 4 familles est :", opts: ["D → C → B → A (rythme en premier)", "A → B → C → D (harmonie en premier, rythme en dernier)", "C → A → D → B (mélodique en premier)", "Il n'y a pas d'ordre défini"], a: 1, fb: "L'ordre A–B–C–D va du moins au plus radical : A (harmonie/accompagnement) transforme le moins l'identité du motif ; D (rythme) la transforme le plus. On commence par les transformations qui laissent le motif pleinement reconnaissable, pour aller progressivement vers des transformations plus profondes." },
  { q: "Si on veut appliquer une transformation qui laisse le motif pleinement identifiable, on utilise :", opts: ["La famille D (altérations rythmiques)", "La famille A (harmonie et accompagnement) — le contour mélodique et le rythme restent intacts", "La famille C (transformations mélodiques)", "La famille B et D ensemble"], a: 1, fb: "La famille A est la moins radicale : changer l'harmonie ou la texture (arpèges, contrepoint, substitution) laisse le motif entièrement reconnaissable. La mélodie et le rythme — ses deux traits les plus identifiables — restent intacts. C'est le 'recoloriage' du motif, pas sa transformation." },
  { q: "Combien de familles de techniques de développement motivique existe-t-il ?", opts: ["3", "4", "5", "7"], a: 1, fb: "Il y a 4 familles : A (harmonie et accompagnement), B (arrangement dynamique), C (transformations mélodiques), D (altérations rythmiques). Chaque famille regroupe des techniques d'un degré de radicalité similaire et s'applique dans cet ordre — du moins au plus transformateur." },

  // Beethoven biographique
  { q: "En quelle année Beethoven compose-t-il sa 5e Symphonie ?", opts: ["1789", "1808", "1820", "1827"], a: 1, fb: "La 5e Symphonie de Beethoven est achevée en 1808 (dédiée au prince Lobkowitz et au comte Razumovsky). La même année sort la 6e Symphonie (Pastorale). Beethoven est alors en pleine période 'héroïque' — il est également sourd depuis plusieurs années, ce qui rend sa maîtrise motivique d'autant plus remarquable." },
  { q: "Beethoven est souvent associé à quel principe esthétique ?", opts: ["L'ornementation baroque", "L'économie de moyens — construire le maximum à partir du minimum de matériel motivique", "La mélodie opératique", "L'improvisation modale"], a: 1, fb: "L'économie de moyens est le principe beethovénien par excellence : en tirer le maximum du minimum. 4 notes génèrent une symphonie. Cette approche contrastait avec le style galant et ornemental de ses prédécesseurs. Pour Beethoven, la richesse n'est pas dans la quantité de matériel, mais dans la profondeur de son développement." },
  { q: "À quelle époque compositionnelle appartient Beethoven ?", opts: ["Baroque (1600–1750)", "Classicisme (1750–1820) — avec un pied dans le Romantisme", "Romantisme tardif (1850–1900)", "Impressionnisme (1890–1920)"], a: 1, fb: "Beethoven (1770–1827) est une charnière : ses premières œuvres s'inscrivent dans le classicisme viennois (Haydn, Mozart), mais ses œuvres tardives (Quatuors op.132, Sonate op.111, 9e Symphonie) anticipent le Romantisme et même le XXe siècle. Il transcende les catégories époque." },
  { q: "Schoenberg a notamment analysé la technique de Beethoven dans :", opts: ["L'Art de la fugue", "Fundamentals of Musical Composition — traité formalisant la phrase, le motif, la période et les formes beethovéniennes", "Le Clavecin bien tempéré", "Traité d'orchestration de Berlioz"], a: 1, fb: "Schoenberg rédige Fundamentals of Musical Composition à UCLA dans les années 1930–40 (publié posthumement en 1967). Son traité analyse systématiquement la phrase et le développement motivique de Beethoven — paradoxalement, Schoenberg est aussi le père du dodécaphonisme, qui abolit la tonalité beethovénienne." },

  // Applications
  { q: "Comment reconnaît-on un bon motif de départ ?", opts: ["Il doit être très long", "Il est court, distinctif, mémorisable, et suffisamment flexible pour être transformé de multiples façons", "Il doit contenir toutes les notes de la gamme", "Il doit éviter les dissonances"], a: 1, fb: "Un bon motif combine brièveté (mémorisable), distinctivité (reconnaissable parmi d'autres) et flexibilité (transformable). Sol–Sol–Sol–Mib satisfait ces trois critères. Un motif trop complexe est difficile à transformer ; trop simple, il devient monotone. L'équilibre est l'art du compositeur." },
  { q: "Quelle est l'erreur la plus commune avec un motif en composition ?", opts: ["L'utiliser trop souvent", "Répéter le motif identiquement trop de fois de suite sans transformation — la monotonie s'installe rapidement", "Le transposer dans d'autres tonalités", "L'utiliser dans différentes familles instrumentales"], a: 1, fb: "La répétition pure est la tentation et le piège. Un motif répété identiquement plus de deux fois perd son pouvoir d'attraction. L'oreille attend de la variété. L'art est de maintenir la reconnaissance (cohérence) tout en renouvelant (variété) — c'est le paradoxe de la répétition." },
  { q: "Quel est l'effet d'une 'marche harmonique' dans le développement d'un motif ?", opts: ["Supprimer le motif", "Répéter le motif à des degrés successifs de la gamme — l'effet est d'élargissement tonal progressif", "Changer le tempo uniquement", "Arrêter le discours musical"], a: 1, fb: "La marche harmonique répète le motif à chaque degré de la gamme (I, II, III, IV...). L'auditeur perçoit à la fois la cohérence (même motif) et le mouvement (changement de hauteur à chaque répétition). Effet de 'progression' ou d''escalade' très efficace en développement." },
  { q: "En improvisation jazz, comment la connaissance du développement motivique améliore-t-elle le jeu ?", opts: ["Elle permet de jouer plus de notes", "Elle donne des outils pour construire un discours cohérent — exposer une idée, la répéter/transformer, la développer vers un climax, conclure", "Elle force à rester dans la gamme pentatonique", "Elle remplace la connaissance de la grille harmonique"], a: 1, fb: "Un improvisateur qui maîtrise le développement motivique construit un 'discours' plutôt qu'une suite de notes. Il expose un motif (quelques notes), le répète et le transforme (famille A, B, C ou D), crée un climax, puis conclut. L'auditeur suit l'histoire. C'est la différence entre improviser 'dans' la grille et improviser 'à travers' la grille." },
  { q: "La 'liquidation' d'un motif en fin de phrase (Schoenberg) produit :", opts: ["Un silence", "Une dissolution progressive du motif — il perd ses traits distinctifs un par un, signalant que la cadence approche", "Une modulation", "Un changement de tempo"], a: 1, fb: "La liquidation est l'érosion progressive du motif en fin de phrase. D'abord on en garde le rythme et la mélodie, puis juste le rythme, puis presque rien — la phrase se dissout dans la cadence. Procédé rhétorique très sophistiqué de 'conclusion' que Beethoven maîtrise parfaitement dans ses sonates." },
  { q: "La combinaison de plusieurs techniques de développement (ex. augmentation + substitution harmonique) :", opts: ["Est interdite en composition", "Produit des transformations plus riches et complexes — les familles se combinent librement", "N'est utilisée qu'au XXe siècle", "Efface complètement l'identité du motif"], a: 1, fb: "Les 4 familles de techniques se combinent librement. Un motif peut être simultanément transposé (famille C), avec une harmonie substituée (famille A) et joué pianissimo (famille B). Les combinaisons créent des transformations plus riches — c'est exactement ce que fait Beethoven dans les grands développements de ses sonates et symphonies." },
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
const SECTIONS_IDS = ["motif", "techniques", "quiz"] as const;
type SectionId = typeof SECTIONS_IDS[number];

const PRIMARY    = "#6B3D00";
const PRIMARY_BG = "#FDF2E0";

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
  infoBox:  { borderLeft: `2px solid ${PRIMARY}`, padding: "8px 14px", background: PRIMARY_BG, borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#3D2000", lineHeight: 1.6 } as React.CSSProperties,
  warnBox:  { borderLeft: "2px solid #BA7517", padding: "8px 14px", background: "#FAEEDA", borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#633806", lineHeight: 1.6 } as React.CSSProperties,
  tip:      { borderLeft: "2px solid #0F6E56", padding: "8px 14px", background: "#E1F5EE", borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#085041", lineHeight: 1.6 } as React.CSSProperties,
};

export default function Cours18() {
  const [activeSection, setActiveSection] = useState<SectionId>("motif");
  const i18n = useCoursI18n("cours18");
  const { questions: ALL_QUESTIONS } = useCoursContent(cours18Content);
  const [activeFamily, setActiveFamily] = useState<string | null>(null);

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
    if (id === "motif")      return "Le motif";
    if (id === "techniques") return "Techniques";
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
        <span style={S.badge}>Niveau 2 · Cours 18</span>
        <h1 style={S.h1}>Le développement motivique</h1>
        <p style={S.subtitle}>
          Les 5 éléments du motif, le paradoxe de la répétition, et les 4 familles de
          techniques — de l'harmonie (moins radical) au rythme (plus radical).
        </p>
      </div>

      <MaitreCard
        composer="Ludwig van Beethoven"
        period="1770–1827"
        emoji="🎼"
        concept="Développement motivique & économie de moyens"
        anecdote="En 1808, Beethoven présente sa 5e Symphonie. Le motif d'ouverture — Sol–Sol–Sol–Mib, quatre notes seulement — génère vingt minutes de musique. Un élève lui demande comment il a pu construire autant à partir de si peu. Beethoven répond : 'C'est exactement la question qu'il faut poser. La richesse n'est pas dans la quantité de matériel — elle est dans la profondeur avec laquelle on le développe.'"
        lesson="Avant de composer, pose-toi cette question : mon motif de départ est-il assez court pour être mémorisable ? Assez distinctif pour être reconnaissable ? Assez flexible pour être transformé ? Un motif qui répond oui aux trois peut générer une symphonie. Un motif trop complexe se développe difficilement ; trop simple, il s'épuise vite."
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

      {/* ══ SECTION 1 : LE MOTIF ══ */}
      {activeSection === "motif" && (
        <div>
          <h2 style={S.h2}>Le motif et ses transformations</h2>
          <p style={S.p}>
            Le <strong>motif</strong> est la plus petite unité musicale distincte et immédiatement
            reconnaissable. Il sert de fil conducteur au discours musical : répété et transformé, il
            donne cohérence et direction à une phrase, un mouvement ou une œuvre entière.
            Contrairement à la musique de support (qui accompagne une action extérieure),
            la <em>musique de discours</em> développe ses propres idées de façon autonome.
          </p>

          {/* Beethoven demo */}
          <div style={{ background: "#f8f8f8", border: "0.5px solid #e5e5e5", borderRadius: 10, padding: "14px 16px", marginBottom: "1.25rem" }}>
            <div style={{ fontSize: 13, fontWeight: 500, color: "#111", marginBottom: 4 }}>
              Le motif le plus célèbre : 5e Symphonie de Beethoven
            </div>
            <div style={{ fontFamily: "monospace", fontSize: 14, color: PRIMARY, marginBottom: 6, letterSpacing: "0.04em" }}>
              Sol – Sol – Sol – Mib  (ta-ta-ta-TAA)
            </div>
            <div style={{ fontSize: 12, color: "#666", lineHeight: 1.6, marginBottom: 10 }}>
              4 notes seulement — 3 répétées + une chute de tierce mineure.
              Ce motif est fragmenté, transposé, augmenté et liquidé dans les 4 mouvements
              de la symphonie : 20 minutes de musique issues d'une cellule de 4 notes.
            </div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" as const }}>
              <button
                onClick={() => playProg(pianoRef as React.RefObject<PianoPlayerRef>, MOTIF_ORIG, 450, 0.4)}
                style={{ fontSize: 12, padding: "5px 14px", border: `0.5px solid ${PRIMARY}`, borderRadius: 20, cursor: "pointer", background: "transparent", color: PRIMARY }}
              >
                ▶ Motif original
              </button>
              <button
                onClick={() => playProg(pianoRef as React.RefObject<PianoPlayerRef>, MOTIF_INV, 450, 0.4)}
                style={{ fontSize: 12, padding: "5px 14px", border: "0.5px solid #185FA5", borderRadius: 20, cursor: "pointer", background: "transparent", color: "#185FA5" }}
              >
                ▶ Renversement
              </button>
              <button
                onClick={() => playProg(pianoRef as React.RefObject<PianoPlayerRef>, MOTIF_RETRO, 450, 0.4)}
                style={{ fontSize: 12, padding: "5px 14px", border: "0.5px solid #7B1F1F", borderRadius: 20, cursor: "pointer", background: "transparent", color: "#7B1F1F" }}
              >
                ▶ Rétrograde
              </button>
            </div>
          </div>

          {/* 5 éléments */}
          <h3 style={S.h3}>Les 5 éléments constitutifs d'un motif</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 8, marginBottom: "1.25rem" }}>
            {ELEMENTS.map(({ n, name, desc }) => (
              <div key={n} style={{ border: `0.5px solid ${PRIMARY}25`, borderRadius: 8, padding: "12px 14px", background: PRIMARY_BG }}>
                <div style={{ fontSize: 20, fontWeight: 700, color: PRIMARY, marginBottom: 4, lineHeight: 1 }}>{n}</div>
                <div style={{ fontSize: 13, fontWeight: 500, color: "#111", marginBottom: 3 }}>{name}</div>
                <div style={{ fontSize: 12, color: "#666", lineHeight: 1.5 }}>{desc}</div>
              </div>
            ))}
          </div>

          {/* Paradoxe de la répétition */}
          <div style={S.warnBox}>
            <strong>Le paradoxe de la répétition :</strong> la répétition est <em>nécessaire</em> —
            sans elle, l'auditeur ne reconnaît rien et le discours musical perd toute cohérence.
            Mais elle est <em>dangereuse</em> si elle est trop pure : répéter identiquement plus de
            deux fois installe rapidement la monotonie. La solution est de <strong>répéter en
            transformant</strong> — maintenir la reconnaissance tout en renouvelant l'intérêt.
          </div>

          {/* Motif comme personnage */}
          <h3 style={S.h3}>Le motif comme personnage : 3 étapes rhétoriques</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8, marginBottom: "1.25rem" }}>
            {[
              { step: "①", name: "Présentation", desc: "Établir l'identité du motif — le présenter clairement, sans équivoque." },
              { step: "②", name: "Répétition", desc: "Ancrer le motif dans l'oreille de l'auditeur — répéter (transformé) pour confirmer l'identité." },
              { step: "③", name: "Évolution", desc: "Transformer, développer, combiner — le motif voyage et mûrit." },
            ].map(({ step, name, desc }) => (
              <div key={step} style={{ border: "0.5px solid #e5e5e5", borderRadius: 8, padding: "12px 14px", background: "#fff", textAlign: "center" as const }}>
                <div style={{ fontSize: 22, fontWeight: 700, color: PRIMARY, marginBottom: 4 }}>{step}</div>
                <div style={{ fontSize: 13, fontWeight: 500, color: "#111", marginBottom: 4 }}>{name}</div>
                <div style={{ fontSize: 12, color: "#666", lineHeight: 1.5 }}>{desc}</div>
              </div>
            ))}
          </div>

          {/* Exemples célèbres */}
          <h3 style={S.h3}>Exemples célèbres</h3>
          {EXEMPLES.map(({ name, color, bg, motif, desc }) => (
            <div key={name} style={{ border: `0.5px solid ${color}30`, borderRadius: 10, padding: "12px 16px", background: bg, marginBottom: 8 }}>
              <div style={{ fontSize: 13, fontWeight: 500, color, marginBottom: 3 }}>{name}</div>
              <div style={{ fontFamily: "monospace", fontSize: 11, color, marginBottom: 6 }}>{motif}</div>
              <div style={{ fontSize: 12, color: "#555", lineHeight: 1.6 }}>{desc}</div>
            </div>
          ))}

          <div style={S.infoBox}>
            <strong>Le motif n'est pas un ornement</strong> — c'est le germe de toute la pensée
            musicale. Avant de composer une phrase, pose-toi : mon idée de base est-elle assez
            distincte pour être reconnaissable ? Assez flexible pour être transformée 10 façons
            différentes ? Une bonne idée génère une phrase ; une excellente idée génère une symphonie.
          </div>
        </div>
      )}

      {/* ══ SECTION 2 : TECHNIQUES ══ */}
      {activeSection === "techniques" && (
        <div>
          <h2 style={S.h2}>Les 4 familles de techniques de développement</h2>
          <p style={S.p}>
            Les techniques de développement sont organisées en 4 familles, classées du moins
            au plus radical. On commence par transformer le contexte (harmonie, dynamique) avant
            de toucher à la mélodie, et on modifie le rythme en dernier — car c'est souvent l'élément
            le plus identifiant du motif.
          </p>

          {/* Ordre d'application */}
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: "1.5rem", flexWrap: "wrap" as const }}>
            {[
              { letter: "A", label: "Harmonie", color: "#185FA5" },
              { letter: "B", label: "Dynamique", color: "#0F6E56" },
              { letter: "C", label: "Mélodie", color: "#7B1F1F" },
              { letter: "D", label: "Rythme", color: "#6B3FA0" },
            ].map(({ letter, label, color }, idx, arr) => (
              <React.Fragment key={letter}>
                <div style={{ textAlign: "center" as const }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: color, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700, margin: "0 auto 2px" }}>
                    {letter}
                  </div>
                  <div style={{ fontSize: 10, color, fontWeight: 500 }}>{label}</div>
                </div>
                {idx < arr.length - 1 && (
                  <div style={{ fontSize: 12, color: "#bbb", marginBottom: 14 }}>→</div>
                )}
              </React.Fragment>
            ))}
            <div style={{ fontSize: 11, color: "#999", marginLeft: 8, marginBottom: 14 }}>
              moins radical → plus radical
            </div>
          </div>

          {/* 4 familles expandables */}
          {FAMILIES.map(fam => (
            <div
              key={fam.id}
              style={{
                border: `0.5px solid ${activeFamily === fam.id ? fam.color : "#e5e5e5"}`,
                borderRadius: 10,
                marginBottom: 8,
                overflow: "hidden",
                cursor: "pointer",
                background: activeFamily === fam.id ? fam.bg : "#fff",
                transition: "all .15s",
              }}
              onClick={() => setActiveFamily(activeFamily === fam.id ? null : fam.id)}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 16px" }}>
                <div style={{
                  width: 28, height: 28, borderRadius: "50%",
                  background: fam.color, color: "#fff",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 12, fontWeight: 700, flexShrink: 0,
                }}>
                  {fam.letter}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 500, color: "#111", marginBottom: 2 }}>{fam.name}</div>
                  <div style={{ fontSize: 11, color: "#999" }}>{fam.order}</div>
                </div>
                <div style={{ fontSize: 11, color: "#bbb" }}>{activeFamily === fam.id ? "▲" : "▼"}</div>
              </div>

              {activeFamily === fam.id && (
                <div style={{ padding: "0 16px 16px", borderTop: `0.5px solid ${fam.color}20` }}>
                  <p style={{ ...S.p, marginTop: 12 }}>{fam.desc}</p>

                  {/* Sous-techniques */}
                  <div style={{ display: "flex", flexDirection: "column" as const, gap: 6, marginBottom: fam.demo ? 12 : 0 }}>
                    {fam.subs.map(sub => (
                      <div key={sub.name} style={{ borderLeft: `2px solid ${fam.color}`, paddingLeft: 10, paddingTop: 2, paddingBottom: 2 }}>
                        <div style={{ fontSize: 12, fontWeight: 500, color: "#333", marginBottom: 1 }}>{sub.name}</div>
                        <div style={{ fontSize: 12, color: "#666", lineHeight: 1.5 }}>{sub.detail}</div>
                      </div>
                    ))}
                  </div>

                  {/* Boutons audio */}
                  {(fam.demo || fam.demo2) && (
                    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" as const, marginTop: 12 }}>
                      {fam.demo && (
                        <button
                          onClick={e => {
                            e.stopPropagation();
                            playProg(pianoRef as React.RefObject<PianoPlayerRef>, fam.demo!, fam.demoGapMs ?? 1100, fam.demoDur ?? 1.0);
                          }}
                          style={{ fontSize: 11, padding: "4px 12px", border: `0.5px solid ${fam.color}`, borderRadius: 20, cursor: "pointer", background: "transparent", color: fam.color }}
                        >
                          {fam.demoLabel ?? "▶ Écouter"}
                        </button>
                      )}
                      {fam.demo2 && (
                        <button
                          onClick={e => {
                            e.stopPropagation();
                            playProg(pianoRef as React.RefObject<PianoPlayerRef>, fam.demo2!, fam.demo2GapMs ?? 1100, fam.demo2Dur ?? 1.0);
                          }}
                          style={{ fontSize: 11, padding: "4px 12px", border: `0.5px solid ${fam.color}80`, borderRadius: 20, cursor: "pointer", background: fam.bg, color: fam.color }}
                        >
                          {fam.demo2Label ?? "▶ Écouter (variante)"}
                        </button>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}

          {/* Démos supplémentaires */}
          <h3 style={S.h3}>Démos complémentaires</h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            <div style={{ border: "0.5px solid #185FA5", borderRadius: 10, padding: "14px 16px", background: "#E6F1FB" }}>
              <div style={{ fontSize: 12, fontWeight: 500, color: "#185FA5", marginBottom: 4 }}>Arpège (fam. A)</div>
              <div style={{ fontFamily: "monospace", fontSize: 11, color: "#0D3C6E", marginBottom: 8 }}>
                Do – Mi – Sol – Do  (accord brisé ascendant)
              </div>
              <div style={{ fontSize: 12, color: "#555", lineHeight: 1.5, marginBottom: 10 }}>
                L'accompagnement en arpèges transforme la texture sans toucher au motif mélodique.
              </div>
              <button
                onClick={() => playProg(pianoRef as React.RefObject<PianoPlayerRef>, ARPEGE_DEMO, 350, 0.3)}
                style={{ fontSize: 11, padding: "4px 12px", border: "0.5px solid #185FA5", borderRadius: 20, cursor: "pointer", background: "transparent", color: "#185FA5" }}
              >
                ▶ Arpège de Do
              </button>
            </div>
            <div style={{ border: "0.5px solid #0F6E56", borderRadius: 10, padding: "14px 16px", background: "#E1F5EE" }}>
              <div style={{ fontSize: 12, fontWeight: 500, color: "#0F6E56", marginBottom: 4 }}>Contrepoint (fam. A)</div>
              <div style={{ fontFamily: "monospace", fontSize: 11, color: "#085041", marginBottom: 8 }}>
                Basse ↑ Do–Ré–Mi–Sol / Voix ↓ Sol–Fa–Mi–Do
              </div>
              <div style={{ fontSize: 12, color: "#555", lineHeight: 1.5, marginBottom: 10 }}>
                Deux voix en mouvement contraire — la basse monte pendant que la voix supérieure descend.
              </div>
              <button
                onClick={() => playProg(pianoRef as React.RefObject<PianoPlayerRef>, CONTREPOINT_DEMO, 700, 0.6)}
                style={{ fontSize: 11, padding: "4px 12px", border: "0.5px solid #0F6E56", borderRadius: 20, cursor: "pointer", background: "transparent", color: "#0F6E56" }}
              >
                ▶ Contrepoint contraire
              </button>
            </div>
          </div>

          <div style={{ ...S.tip, marginTop: "1.25rem" }}>
            <strong>Combinaisons :</strong> les 4 familles se combinent librement. Un motif peut
            simultanément recevoir une substitution harmonique (A), être joué pianissimo (B),
            et être légèrement transposé (C). Les combinaisons créent les transformations les plus
            riches — c'est exactement ce que fait Beethoven dans ses grands développements.
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
                {quizScore >= 8 ? "🎼" : quizScore >= 6 ? "👍" : "💪"}
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
