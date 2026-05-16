"use client";

/**
 * Cours13.tsx
 * Harmonia · Niveau 2 · Cours 13 — Le contrepoint à 2 voix
 * Convention : affichage anglais, dotKeys PianoPlayer français
 */

import React, { useRef, useState } from "react";
import { useCoursI18n } from "@/hooks/useCoursI18n";
import { useCoursContent } from "@/hooks/useCoursContent";
import { useTerm } from "@/hooks/useTerm";
import { cours13Content } from "@/data/cours13Content";
import PianoPlayer, { PianoPlayerRef } from "@/components/PianoPlayer";
import MaitreCard from "@/components/MaitreCard";

// Play one beat: CF + CP simultaneously
function playBeat(ref: React.RefObject<PianoPlayerRef>, cf: string, cp: string, dur = 1.6) {
  for (const key of [cf, cp]) {
    const [n, o] = key.split(":");
    ref.current?.playNote(n, parseInt(o), { duration: dur });
  }
}

// Play a sequence of beat pairs at a given interval
function playSpecies(
  ref: React.RefObject<PianoPlayerRef>,
  beats: [string, string][],
  gapMs: number,
  noteDur = 1.5,
) {
  beats.forEach(([cf, cp], i) => {
    setTimeout(() => playBeat(ref, cf, cp, noteDur), i * gapMs);
  });
}

// ── Species data ──────────────────────────────────────────────────────────────

interface Species {
  id: string;
  num: number;
  name: string;
  ratio: string;
  color: string;
  bg: string;
  description: string;
  dissonanceRule: string;
  rhythmNote: string;
  // 1:1 beat pairs — CF in octave 3, CP in octave 4-5
  beats: [string, string][];
  gapMs: number;     // playback gap (faster = higher species)
  noteDur: number;
}

const SPECIES: Species[] = [
  {
    id: "sp1",
    num: 1,
    name: "1ère espèce — Note contre note",
    ratio: "1 : 1",
    color: "#1B5E4A",
    bg: "#E1F5EE",
    description: "Pour chaque note du cantus firmus, une note dans le contrepoint. Toutes les notes doivent être consonantes. C'est la plus simple et la plus rigoureuse des espèces.",
    dissonanceRule: "Aucune dissonance autorisée. Toutes les notes sont consonantes.",
    rhythmNote: "Même valeur dans les deux voix — la plus lente.",
    beats: [
      ["Do:3","Mi:4"], ["Ré:3","Fa:4"], ["Mi:3","Sol:4"],
      ["Fa:3","La:4"], ["Sol:3","Si:4"], ["Fa:3","La:4"],
      ["Mi:3","Sol:4"], ["Ré:3","Fa:4"], ["Do:3","Mi:4"],
    ],
    gapMs: 750,
    noteDur: 1.6,
  },
  {
    id: "sp2",
    num: 2,
    name: "2ème espèce — Deux notes contre une",
    ratio: "2 : 1",
    color: "#1A4A8A",
    bg: "#E6F1FB",
    description: "La voix de contrepoint joue deux notes pendant que le cantus firmus tient une note. La note sur le temps fort doit être consonante ; la note sur le temps faible peut être une note de passage (dissonante si elle relie deux consonances par mouvement conjoint).",
    dissonanceRule: "Dissonance autorisée sur le temps faible uniquement, si note de passage par mouvement conjoint.",
    rhythmNote: "CP en noires (ou croches), CF en blanches — 2× plus rapide.",
    beats: [
      ["Do:3","Mi:4"], ["Do:3","Sol:4"],
      ["Ré:3","Fa:4"], ["Ré:3","La:4"],
      ["Mi:3","Sol:4"], ["Mi:3","Mi:4"],
      ["Fa:3","La:4"], ["Fa:3","Sol:4"],
      ["Mi:3","Sol:4"], ["Mi:3","Si:4"],
      ["Ré:3","Fa:4"], ["Ré:3","Fa:4"],
      ["Do:3","Mi:4"],
    ],
    gapMs: 420,
    noteDur: 0.85,
  },
  {
    id: "sp3",
    num: 3,
    name: "3ème espèce — Quatre notes contre une",
    ratio: "4 : 1",
    color: "#6B3FA0",
    bg: "#F0EAFA",
    description: "Le contrepoint joue quatre notes pour chaque note du cantus firmus. Outre les notes de passage, on peut utiliser des broderies (notes auxiliaires) et des échappées. Le mouvement doit rester principalement conjoint pour garder la fluidité.",
    dissonanceRule: "Dissonances sur temps faibles 2, 3 et 4 : notes de passage, broderies, échappées.",
    rhythmNote: "CP en croches (quadruples plus rapides), CF en rondes — 4× plus rapide.",
    beats: [
      ["Do:3","Mi:4"], ["Do:3","Ré:4"], ["Do:3","Mi:4"], ["Do:3","Sol:4"],
      ["Ré:3","Fa:4"], ["Ré:3","Mi:4"], ["Ré:3","Fa:4"], ["Ré:3","La:4"],
      ["Mi:3","Sol:4"], ["Mi:3","Fa:4"], ["Mi:3","Sol:4"], ["Mi:3","Si:4"],
      ["Do:3","Mi:4"],
    ],
    gapMs: 230,
    noteDur: 0.45,
  },
  {
    id: "sp4",
    num: 4,
    name: "4ème espèce — Syncopes et retards",
    ratio: "2 : 1 (syncopes)",
    color: "#8B2252",
    bg: "#FDEEF5",
    description: "La note du contrepoint est introduite sur le temps faible et tenue (liée) sur le temps fort suivant, créant une dissonance sur le temps fort. Cette dissonance — le retard (suspension) — se résout ensuite par mouvement conjoint descendant. C'est l'espèce la plus expressive.",
    dissonanceRule: "Dissonance sur le temps fort (suspension 7-6, 4-3, 9-8) : préparée sur le temps faible précédent, résolue par descente d'un degré.",
    rhythmNote: "Notes liées en syncope : temps faible → temps fort (retard). La résolution se fait sur le temps faible suivant.",
    beats: [
      ["Do:3","Mi:4"], ["Do:3","Sol:4"],
      ["Ré:3","Sol:4"], ["Ré:3","La:4"],
      ["Mi:3","La:4"], ["Mi:3","Sol:4"],
      ["Fa:3","Sol:4"], ["Fa:3","La:4"],
      ["Sol:3","La:4"], ["Sol:3","Si:4"],
      ["Do:3","Si:4"], ["Do:3","Do:5"],
      ["Do:3","Mi:4"],
    ],
    gapMs: 500,
    noteDur: 1.1,
  },
  {
    id: "sp5",
    num: 5,
    name: "5ème espèce — Contrepoint fleuri",
    ratio: "Libre",
    color: "#BA7517",
    bg: "#FAEEDA",
    description: "Combinaison libre de toutes les espèces précédentes dans une même voix. Le contrepoint fleuri ressemble à une mélodie naturelle : il mêle notes longues, notes de passage, broderies, retards et ornements. C'est l'aboutissement du contrepoint strict.",
    dissonanceRule: "Toutes les règles des espèces 1 à 4 s'appliquent selon la valeur rythmique utilisée à chaque instant.",
    rhythmNote: "Libre : rondes, blanches, noires, croches — le compositeur choisit selon l'expression.",
    beats: [
      ["Do:3","Mi:4"], ["Do:3","Ré:4"],
      ["Ré:3","Fa:4"], ["Ré:3","Fa:4"], ["Ré:3","Sol:4"],
      ["Mi:3","Sol:4"], ["Mi:3","Sol:4"],
      ["Fa:3","La:4"], ["Fa:3","Sol:4"], ["Fa:3","Fa:4"],
      ["Mi:3","Sol:4"], ["Mi:3","Si:4"],
      ["Ré:3","La:4"],
      ["Do:3","Mi:4"],
    ],
    gapMs: 320,
    noteDur: 0.7,
  },
];

// ── Motion types ──────────────────────────────────────────────────────────────

interface Motion {
  id: string;
  name: string;
  description: string;
  rule: string;
  allowed: boolean;
  color: string;
  bg: string;
  cfKeys: string[];
  cpKeys: string[];
}

const MOTIONS: Motion[] = [
  {
    id: "contraire",
    name: "Contraire",
    description: "Les deux voix se déplacent en directions opposées (l'une monte, l'autre descend).",
    rule: "Mouvement le plus indépendant, le plus recommandé. Assure l'autonomie des voix.",
    allowed: true,
    color: "#0F6E56",
    bg: "#E1F5EE",
    cfKeys: ["Sol:3","Fa:3","Mi:3","Ré:3","Do:3"],
    cpKeys: ["Mi:4","Fa:4","Sol:4","La:4","Si:4"],
  },
  {
    id: "oblique",
    name: "Oblique",
    description: "Une voix reste sur la même note ; l'autre se déplace.",
    rule: "Bon mouvement — crée un ancrage harmonique pendant que l'autre voix apporte du mouvement.",
    allowed: true,
    color: "#185FA5",
    bg: "#E6F1FB",
    cfKeys: ["Mi:3","Mi:3","Mi:3","Mi:3","Mi:3"],
    cpKeys: ["Do:4","Ré:4","Mi:4","Fa:4","Sol:4"],
  },
  {
    id: "direct",
    name: "Direct (semblable)",
    description: "Les deux voix se déplacent dans le même sens, mais par des intervalles différents.",
    rule: "Autorisé avec modération. Dangereux s'il mène à une quinte ou octave parfaite (quinte cachée).",
    allowed: true,
    color: "#BA7517",
    bg: "#FAEEDA",
    cfKeys: ["Do:3","Ré:3","Mi:3","Fa:3","Sol:3"],
    cpKeys: ["Mi:4","Sol:4","La:4","Si:4","Ré:5"],
  },
  {
    id: "parallele",
    name: "Parallèle (interdit si parfait)",
    description: "Les deux voix se déplacent dans le même sens par le même intervalle.",
    rule: "INTERDIT pour les consonances parfaites (quinte, octave, unisson). Autorisé pour les imparfaites (tierces, sixtes).",
    allowed: false,
    color: "#A32D2D",
    bg: "#FCEBEB",
    cfKeys: ["Do:3","Ré:3"],
    cpKeys: ["Sol:3","La:3"],
  },
];

// ── Dissonance treatments ─────────────────────────────────────────────────────

interface Suspension {
  name: string;
  formula: string;
  description: string;
  resolution: string;
}

const SUSPENSIONS: Suspension[] = [
  {
    name: "Retard 7 – 6",
    formula: "7 → 6",
    description: "La septième (dissonante) se prépare comme sixte sur le temps faible, est tenue sur le temps fort, puis résout par mouvement descendant vers la sixte.",
    resolution: "Septième ↓ un degré → Sixte",
  },
  {
    name: "Retard 4 – 3",
    formula: "4 → 3",
    description: "La quarte (dissonante) est préparée sur le temps faible, tenue sur le temps fort, puis résout vers la tierce. C'est le retard le plus expressif en contrepoint strict.",
    resolution: "Quarte ↓ un degré → Tierce",
  },
  {
    name: "Retard 9 – 8",
    formula: "9 → 8",
    description: "La neuvième (dissonante, = 2de à l'octave) se résout vers l'octave. Très courant dans les suspensions de basse (suspension de bassus).",
    resolution: "Neuvième ↓ un degré → Octave",
  },
  {
    name: "Retard 2 – 3 (bassus)",
    formula: "2 → 3",
    description: "Suspension de basse : la voix inférieure crée une seconde qui résout vers la tierce par mouvement descendant. Le sens de résolution est inversé par rapport aux autres suspensions.",
    resolution: "Seconde ↓ un degré → Tierce",
  },
];

// ── Quiz ──────────────────────────────────────────────────────────────────────

const ALL_QUESTIONS = [
  // Espèces
  { q: "La 1ère espèce de contrepoint se caractérise par...", opts: ["deux notes contre une", "note contre note (rapport 1:1)", "quatre notes contre une", "des syncopes et retards"], a: 1, fb: "La 1ère espèce = note contre note = rapport 1:1. Pour chaque note du cantus firmus, une seule note dans le contrepoint. Toutes les notes doivent être consonantes — c'est la plus rigoureuse des espèces." },
  { q: "La 2ème espèce se caractérise par...", opts: ["note contre note (1:1)", "quatre notes contre une (4:1)", "deux notes contre une (2:1)", "des retards syncopés"], a: 2, fb: "La 2ème espèce = rapport 2:1 : deux notes de contrepoint pour une note de cantus firmus. La note sur le temps fort doit être consonante ; le temps faible peut avoir une note de passage dissonante." },
  { q: "La 3ème espèce se caractérise par...", opts: ["note contre note", "deux notes contre une", "des syncopes", "quatre notes contre une (4:1)"], a: 3, fb: "La 3ème espèce = rapport 4:1 : quatre notes de contrepoint pour une note de CF. Les temps faibles 2, 3 et 4 peuvent utiliser des notes de passage, broderies et échappées." },
  { q: "La 4ème espèce utilise principalement...", opts: ["notes de passage", "broderies et échappées", "syncopes et retards (suspensions)", "contrepoint libre"], a: 2, fb: "La 4ème espèce est définie par les syncopes et retards (suspensions). La note de CP est jouée sur le temps faible, tenue sur le temps fort (créant une dissonance), puis résolue par descente d'un degré." },
  { q: "La 5ème espèce est aussi appelée...", opts: ["contrepoint strict", "contrepoint fleuri", "contrepoint de basse", "contrepoint modal"], a: 1, fb: "La 5ème espèce = contrepoint fleuri : combinaison libre de toutes les espèces précédentes. C'est la forme la plus proche d'une mélodie naturelle — on mélange notes longues, notes de passage, retards et ornements." },
  { q: "Qu'est-ce que le cantus firmus ?", opts: ["une cadence finale", "la mélodie de référence donnée sur laquelle on écrit le contrepoint", "un ornement mélodique", "un accord de dominante"], a: 1, fb: "Le cantus firmus (CF) = 'chant ferme' en latin. C'est la mélodie préexistante (souvent en notes longues) sur laquelle on compose la voix de contrepoint. Chez Fux, le CF est généralement un chant grégorien ou une mélodie modale en rondes." },
  { q: "Dans quelle espèce les notes de passage apparaissent-elles pour la première fois ?", opts: ["1ère espèce", "3ème espèce", "2ème espèce", "4ème espèce"], a: 2, fb: "Les notes de passage apparaissent dès la 2ème espèce (sur le temps faible). En 3ème espèce, elles sont plus nombreuses car le rapport 4:1 offre 3 temps faibles. En 1ère espèce, aucune dissonance n'est tolérée." },
  { q: "Le contrepoint fleuri (5ème espèce) combine...", opts: ["uniquement les 2e et 3e espèces", "toutes les 4 espèces précédentes librement", "uniquement les suspensions et les notes de passage", "des modes différents dans chaque voix"], a: 1, fb: "La 5ème espèce combine librement les 4 premières. C'est pourquoi elle est appelée 'contrepoint fleuri' — le contrepoint 'fleurit' par la variété rythmique et ornementale. Les mêmes règles de dissonance s'appliquent selon la valeur rythmique utilisée." },
  // Intervalles
  { q: "Les consonances parfaites en contrepoint à 2 voix sont...", opts: ["tierces, sixtes et quintes", "unisson, quinte juste, octave", "secondes, quartes et septièmes", "tierces et sixtes seulement"], a: 1, fb: "Consonances parfaites : unisson (1), quinte juste (5J), octave (8). Ces intervalles sont stables mais doivent être utilisés avec soin : on ne peut pas les enchaîner en parallèle. Ils sont réservés aux débuts et fins de phrase." },
  { q: "Les consonances imparfaites en contrepoint sont...", opts: ["quarte et quinte", "unisson et octave", "tierces (majeures et mineures) et sixtes (majeures et mineures)", "secondes et septièmes"], a: 2, fb: "Consonances imparfaites : tierce majeure (M3), tierce mineure (m3), sixte majeure (M6), sixte mineure (m6). Ces intervalles sont préférés dans le contrepoint car ils peuvent être enchaînés en parallèle sans briser les règles." },
  { q: "La quarte juste est-elle consonante en contrepoint à 2 voix ?", opts: ["Oui — consonance parfaite", "Non — dissonance dans ce contexte", "Oui — consonance imparfaite", "Cela dépend du mode"], a: 1, fb: "La quarte juste est dissonante dans le contrepoint strict à 2 voix au-dessus de la basse. Bien qu'elle soit acoustiquement stable, elle crée une tension harmonique inacceptable entre la basse et la voix supérieure. Au Moyen Âge, elle était consonante — la théorie a évolué." },
  { q: "Parmi ces intervalles, lesquels sont des dissonances ?", opts: ["Tierce mineure, sixte majeure", "Quinte juste, octave, unisson", "Seconde majeure, quarte juste, triton, septième", "Tierce majeure seulement"], a: 2, fb: "Dissonances : seconde (M2/m2), quarte juste (4J) au-dessus de la basse, triton (4A/5D), septième (M7/m7), et leurs renversements. Ces intervalles créent une tension qui exige résolution (sauf en tant que notes de passage ou retards bien préparés)." },
  { q: "Le triton est considéré comme...", opts: ["une consonance parfaite", "une consonance imparfaite", "une dissonance (quarte augmentée = quinte diminuée)", "un ornement neutre"], a: 2, fb: "Le triton (= 6 demi-tons = quarte augmentée = quinte diminuée) est la dissonance la plus forte. Il était interdit au Moyen Âge sous l'appellation 'diabolus in musica'. En contrepoint strict, il ne peut apparaître que comme note de passage très brève ou dans un retard bien préparé." },
  { q: "Peut-on commencer un contrepoint à 2 voix par une dissonance ?", opts: ["Oui — si elle est brève", "Non — toujours par une consonance (unisson, quinte ou octave)", "Oui — si la résolution suit immédiatement", "Cela dépend de l'espèce"], a: 1, fb: "On commence toujours par une consonance parfaite (unisson, quinte ou octave). La tierce est parfois acceptable au début, mais les consonances parfaites assurent la stabilité de l'ouverture. Jamais de dissonance au départ." },
  { q: "Par quoi doit se terminer un contrepoint strict ?", opts: ["N'importe quelle consonance", "Une consonance parfaite (unisson ou octave de préférence)", "Une dissonance résolue", "Une tierce ou sixte"], a: 1, fb: "La conclusion doit toujours se faire sur une consonance parfaite — de préférence l'unisson ou l'octave, parfois la quinte. Chez Fux, la fin comporte souvent une formule cadentielle : 7-8 ou 6-8 (sensible montant vers la tonique)." },
  // Mouvements
  { q: "Quel mouvement mélodique est le plus recommandé en contrepoint ?", opts: ["Le mouvement direct", "Le mouvement parallèle", "Le mouvement contraire", "Le mouvement oblique"], a: 2, fb: "Le mouvement contraire (les deux voix vont en sens opposés) est le plus valorisé en contrepoint car il assure un maximum d'indépendance entre les voix. Fux le recommande systématiquement, notamment aux moments cadentiels." },
  { q: "Qu'est-ce que le mouvement contraire ?", opts: ["Les deux voix restent sur les mêmes notes", "Les deux voix montent ensemble", "Une voix monte pendant que l'autre descend (ou vice versa)", "Les deux voix restent immobiles"], a: 2, fb: "Mouvement contraire : une voix monte pendant que l'autre descend. C'est l'opposé du mouvement parallèle. Il crée la plus grande indépendance entre les voix et évite les erreurs de parallèles." },
  { q: "Qu'est-ce que le mouvement oblique ?", opts: ["Les deux voix montent", "Une voix se maintient sur la même note tandis que l'autre se déplace", "Les deux voix descendent", "Les voix se croisent"], a: 1, fb: "Mouvement oblique : une voix reste sur place (pédale ou tenue) pendant que l'autre se déplace. Ce mouvement est toujours sûr — il n'y a pas de risque de parallèles puisqu'une voix est immobile." },
  { q: "Les quintes parallèles sont...", opts: ["autorisées en 2ème espèce", "toujours interdites en contrepoint strict", "autorisées entre voix intérieures uniquement", "autorisées si elles sont brèves"], a: 1, fb: "Les quintes parallèles (deux quintes justes successives entre les mêmes voix) sont interdites en contrepoint strict. Elles effacent l'indépendance des voix qui semblent 'fusionner'. C'est l'une des règles les plus fondamentales, de Palestrina à Bach." },
  { q: "Les octaves parallèles sont...", opts: ["autorisées en 1ère espèce", "autorisées si les voix s'éloignent ensuite", "toujours interdites en contrepoint strict", "autorisées en 5ème espèce"], a: 2, fb: "Les octaves parallèles sont interdites exactement pour la même raison que les quintes : les deux voix se déplacent de façon identique et perdent leur indépendance. Deux voix à l'octave sonnent comme une seule voix doublée." },
  { q: "Les tierces parallèles sont-elles autorisées ?", opts: ["Non — toutes les parallèles sont interdites", "Oui — les consonances imparfaites parallèles sont autorisées", "Seulement en 3ème espèce", "Non — elles créent des quintes cachées"], a: 1, fb: "Oui ! Les tierces et les sixtes parallèles sont autorisées car ce sont des consonances imparfaites. En contrepoint, on peut enchaîner plusieurs tierces ou plusieurs sixtes. Seules les parallèles de consonances parfaites (quintes, octaves, unissons) sont interdites." },
  { q: "Qu'est-ce qu'une 'quinte cachée' (quinte par mouvement direct) ?", opts: ["Une quinte diminuée entre deux voix", "Un mouvement vers une quinte parfaite par mouvement direct (les deux voix vont dans le même sens)", "Une quinte dans le registre grave", "Une quinte entre voix non adjacentes"], a: 1, fb: "Quinte cachée : les deux voix se rapprochent d'une quinte parfaite par mouvement direct (même sens, intervalles différents). Ex : Si les deux voix montent toutes les deux pour arriver sur une quinte, la quinte est 'cachée'. Interdite entre voix extrêmes (soprano et basse), notamment dans les traités classiques." },
  { q: "Les sixtes parallèles sont-elles autorisées ?", opts: ["Non — comme les quintes", "Oui — ce sont des consonances imparfaites", "Seulement en 1ère espèce", "Seulement en descente"], a: 1, fb: "Les sixtes parallèles sont autorisées et même agréables. Avec les tierces parallèles, elles forment les 'fauxbourdons' médiévaux et les 'parallel 6ths passages' très courants dans le contrepoint Renaissance." },
  // Dissonances et règles
  { q: "Une note de passage est...", opts: ["toujours une consonance", "une note dissonante reliant par mouvement conjoint deux consonances", "une note tenue sur le temps fort", "une note à distance de saut d'une consonance"], a: 1, fb: "Note de passage : note dissonante qui relie deux consonances par mouvement conjoint (par degrés). Elle passe 'en chemin' entre deux notes stables — exemple : Mi–Fa(passe)–Sol où Fa est une seconde dissonante entre Mi (tierce) et Sol (quinte)." },
  { q: "Une broderie (note auxiliaire) est...", opts: ["une note de passage entre deux consonances", "une note dissonante entourant une note consonante (broderie sup. ou inf.)", "une note tenue sur plusieurs temps", "une ornementale à l'octave"], a: 1, fb: "Broderie (ou note auxiliaire) : on quitte une note consonante d'un degré (vers le haut ou le bas), puis on revient à la même note consonante. La note intermédiaire peut être dissonante. Ex : Mi–Fa–Mi (Fa est broderie supérieure de Mi)." },
  { q: "Un retard (suspension) en 4ème espèce est...", opts: ["une note consonante tenue", "une note dissonante introduite sur le temps faible, tenue sur le temps fort, puis résolue par descente", "une note de passage rapide", "un ornement libre"], a: 1, fb: "Retard/suspension : la note de CP est jouée sur le temps FAIBLE (consonante), tenue (liée) sur le temps FORT suivant (dissonante car le CF a bougé), puis résolue par descente conjointe. Préparation → dissonance → résolution est le cycle complet." },
  { q: "La suspension '7 – 6' signifie que...", opts: ["la 7te monte vers l'octave", "la 6te monte vers la 7te", "une 7te dissonante résout vers une 6te par descente d'un degré", "une 6te est suivie d'une 7te montante"], a: 2, fb: "7–6 : septième (dissonante) → sixte (consonante) par mouvement descendant conjoint. C'est la suspension la plus fréquente en contrepoint supérieur. Ex : sur un CF Do, CP tient Si (7te = dissonante) puis descend vers La (6te = consonante)." },
  { q: "La suspension '4 – 3' signifie que...", opts: ["la 4te monte vers la 5te", "une quarte dissonante résout vers une tierce par descente", "une tierce monte vers une quarte", "la 4te descend vers la 2de"], a: 1, fb: "4–3 : quarte (dissonante au-dessus de la basse) → tierce (consonante imparfaite) par descente d'un degré. Très expressive — la tension de la quarte vers la tierce est particulièrement sensible. Très fréquente dans le style Palestrina." },
  { q: "Une dissonance doit toujours être...", opts: ["évitée complètement", "préparée (consonante au temps faible) et résolue (descente par degré conjoint)", "suivie d'une consonance parfaite uniquement", "anticipée par un saut mélodique"], a: 1, fb: "En contrepoint strict, toute dissonance doit être : (1) préparée — la même note était consonante au temps faible précédent ; (2) résolue — elle descend par mouvement conjoint vers une consonance. Préparer et résoudre est la règle d'or des dissonances." },
  { q: "Après un grand saut mélodique (>tierce), Fux recommande...", opts: ["de continuer dans le même sens", "de rester sur la note atteinte", "de revenir par mouvement contraire (et de préférence conjoint)", "un autre saut dans la même direction"], a: 2, fb: "Après un grand saut, la ligne doit 'compenser' en revenant dans le sens contraire, de préférence par mouvement conjoint. Un saut d'octave vers le haut devrait être suivi d'une descente progressive. Cela donne équilibre et naturel à la ligne mélodique." },
  { q: "La 'culmination mélodique' dans une ligne de contrepoint désigne...", opts: ["la note la plus basse", "la note répétée le plus souvent", "le point culminant (note la plus haute) qui ne doit apparaître qu'une seule fois", "la cadence finale"], a: 2, fb: "La culmination = le sommet de la ligne mélodique. Elle ne doit apparaître qu'une seule fois — si la note haute est répétée, l'effet de sommet est dilué. Atteindre ce sommet puis descendre vers la cadence finale donne une direction narrative à la ligne." },
  { q: "Peut-on répéter la même note plusieurs fois de suite en contrepoint strict ?", opts: ["Oui — c'est une pédale autorisée", "Rarement — les répétitions affaiblissent l'indépendance mélodique de la ligne", "Oui, mais seulement en 1ère espèce", "Non — c'est explicitement interdit dans toutes les espèces"], a: 1, fb: "Les répétitions de note sont à éviter en contrepoint strict car elles stagnent la ligne mélodique et réduisent son intérêt. Dans la 4ème espèce, la note liée donne une apparence de répétition, mais le contexte rythmique est différent (syncope expressive)." },
  // Fux et histoire
  { q: "Qui a écrit le Gradus ad Parnassum ?", opts: ["Johann Sebastian Bach", "Giovanni Pierluigi da Palestrina", "Johann Joseph Fux", "Heinrich Schütz"], a: 2, fb: "Johann Joseph Fux (1660–1741), compositeur et théoricien autrichien. Son Gradus ad Parnassum (1725) est le traité de contrepoint le plus influent de l'histoire de la musique. Fux était maître de chapelle à la cour de Vienne." },
  { q: "En quelle année le Gradus ad Parnassum est-il publié ?", opts: ["1650", "1725", "1800", "1685"], a: 1, fb: "1725. Fux avait alors 65 ans. Le titre signifie en latin 'Pas vers le Parnasse' — le Parnasse étant la montagne des Muses dans la mythologie grecque, symbole de la perfection artistique." },
  { q: "Le Gradus ad Parnassum est structuré comme...", opts: ["un traité académique en 3 volumes", "un dialogue entre un maître (Aloysius) et son élève (Josephus)", "une série d'exercices sans commentaires", "une encyclopédie musicale alphabétique"], a: 1, fb: "Fux écrit son traité sous forme de dialogue socratique : Aloysius (le maître, qui représente Palestrina) enseigne à Josephus (l'élève, qui représente Fux lui-même). Cette forme pédagogique rend le contenu accessible et progressif." },
  { q: "Quel compositeur représente 'Aloysius' dans le traité de Fux ?", opts: ["Johann Sebastian Bach", "Georg Friedrich Haendel", "Giovanni Pierluigi da Palestrina", "Claudio Monteverdi"], a: 2, fb: "Aloysius = Giovanni Pierluigi da Palestrina (1525–1594). Fux vénérait Palestrina comme le sommet du contrepoint vocal Renaissance. En plaçant Palestrina comme maître, Fux ancre son traité dans cette tradition de polyphonie vocale pure." },
  { q: "Quels compositeurs majeurs ont étudié grâce au Gradus ad Parnassum ?", opts: ["Debussy, Ravel, Fauré", "Haydn, Mozart, Beethoven", "Berlioz, Liszt, Wagner", "Brahms, Schumann, Mendelssohn"], a: 1, fb: "Haydn a étudié le Gradus ad Parnassum seul dans sa jeunesse (il s'est enseigné le contrepoint avec ce livre). Mozart a reçu une formation au contrepoint basée en partie sur Fux. Beethoven a étudié avec Albrechtsberger, lui-même formé dans la tradition de Fux." },
  { q: "Haydn a-t-il étudié directement avec Johann Joseph Fux ?", opts: ["Oui — il était son élève principal", "Non — Fux est mort en 1741 quand Haydn avait 9 ans ; il a étudié seul avec le livre", "Oui — de 1745 à 1750", "Non — Haydn n'a jamais étudié le contrepoint"], a: 1, fb: "Fux est décédé en 1741. Haydn (né en 1732) avait 9 ans. Haydn a étudié seul le Gradus ad Parnassum pendant ses années de formation à Vienne — il a fait de ce livre son principal guide de composition. Il racontait lui-même cette anecdote sur son autodidaxie." },
  { q: "Le contrepoint strict de Fux est basé sur quel style ?", opts: ["Le style baroque de Bach", "La polyphonie vocale de la Renaissance (style Palestrina)", "Le style galant du XVIIIe siècle", "Le contrepoint médiéval des organa"], a: 1, fb: "Fux base son contrepoint sur le style de Palestrina — la polyphonie vocale de la Renaissance (XVIe siècle). Ce style privilégie le mouvement conjoint, les consonances imparfaites, et un traitement très strict des dissonances. C'est différent du contrepoint plus libre de Bach (style baroque)." },
  // Règles pratiques
  { q: "Le mouvement mélodique préféré en contrepoint est...", opts: ["les sauts de sixte", "le mouvement par degrés conjoints (secondes)", "les sauts d'octave", "les sauts de quinte"], a: 1, fb: "Le mouvement conjoint (par secondes = degrés conjoints) est préféré pour les lignes de contrepoint. Il rend la mélodie vocalement naturelle et chantable. Les sauts sont permis mais doivent être compensés par un retour en direction opposée." },
  { q: "Quel saut est généralement évité en contrepoint vocal ?", opts: ["La tierce (M3 ou m3)", "La quarte juste ascendante", "La sixte ascendante ou descendante", "Les sauts d'augmentée ou diminuée (ex : seconde augmentée)"], a: 3, fb: "Les intervalles augmentés ou diminués (seconde augmentée = A2, quinte diminuée, triton) sont évités dans les lignes vocales de contrepoint car ils sont difficiles à chanter et créent des difficultés d'intonation. La seconde augmentée (ex : La–Si# ou Sol–La# en mineur) est particulièrement proscrite." },
  { q: "La ligne mélodique en contrepoint strict doit être...", opts: ["principalement par sauts pour l'intérêt mélodique", "principalement conjointe, vocalement chantable, avec une direction claire", "essentiellement statique pour laisser le CF se déplacer", "aussi ornementée que possible"], a: 1, fb: "La ligne de contrepoint doit être : principalement conjointe (mouvement par degrés), vocalement chantable (intervalles naturels), équilibrée (mélange de montées et descentes), et orientée vers un climax puis une résolution. Fux insiste sur la beauté mélodique intrinsèque de chaque voix." },
  { q: "Les unissons parallèles sont-ils autorisés en contrepoint ?", opts: ["Oui — ce n'est pas un intervalle parfait", "Non — comme les quintes et octaves parallèles, ils font disparaître l'indépendance des voix", "Oui, mais seulement en début de pièce", "Cela dépend du mode"], a: 1, fb: "Les unissons parallèles (deux voix sur la même note qui se déplacent ensemble à l'unisson) sont interdits pour la même raison que les quintes et octaves parallèles : les deux voix fusionnent et perdent toute indépendance. Un seul unisson est toléré, jamais deux consécutifs." },
  { q: "Que recommande Fux pour le croisement de voix ?", opts: ["Il l'encourage pour l'intérêt mélodique", "Il l'interdit formellement — les voix ne doivent pas se croiser", "Il l'autorise mais une seule fois", "Il n'en parle pas"], a: 1, fb: "Le croisement de voix (quand la voix supérieure descend sous la voix inférieure ou vice versa) est interdit en contrepoint strict. Il brouille la clarté de chaque ligne mélodique et peut créer des parallèles cachées. Chaque voix doit maintenir son registre distinct." },
  { q: "En 1ère espèce, sur combien de temps fort peut-on avoir une dissonance ?", opts: ["Jamais — 0 dissonances autorisées", "1 par mesure", "Sur les temps pairs uniquement", "Librement si elle est brève"], a: 0, fb: "En 1ère espèce, zéro dissonance est autorisée — c'est la règle la plus stricte. Chaque note doit être consonante (unisson, 3te, 5te, 6te, 8ve). C'est pourquoi la 1ère espèce est le meilleur entraînement à la reconnaissance des intervalles." },
  { q: "Dans la 4ème espèce, la dissonance se produit sur...", opts: ["le temps faible (upbeat)", "le temps fort, par la note tenue (syncope)", "n'importe quel temps", "uniquement en fin de mesure"], a: 1, fb: "Dans la 4ème espèce, la note est jouée sur le TEMPS FAIBLE (consonante), puis tenue par liaison sur le TEMPS FORT suivant. Comme le CF a changé, la note tenue crée une DISSONANCE sur le temps fort — c'est le mécanisme du retard (suspension)." },
  { q: "Pourquoi les quintes parallèles sont-elles interdites ?", opts: ["Car elles sonnent faux dans les modes médiévaux", "Car elles réduisent l'indépendance des voix — les lignes semblent fusionner", "Car elles ne sont pas jouables à la voix", "Car elles créent des dissonances involontaires"], a: 1, fb: "Les quintes parallèles font sonner les deux voix comme une seule entité — elles 'bougent ensemble' et perdent leur caractère indépendant. Le but du contrepoint est d'avoir deux lignes mélodiques autonomes et intéressantes. Les parallèles parfaites sabotent cet objectif." },
  { q: "Quelle est la différence entre contrepoint strict et contrepoint libre ?", opts: ["Il n'y a pas de différence", "Le strict suit les règles des 5 espèces de Fux ; le libre adapte ces règles pour une expression plus grande (Bach, fugue)", "Le strict est uniquement vocal ; le libre est instrumental", "Le strict est moderne ; le libre est Renaissance"], a: 1, fb: "Contrepoint strict = règles des 5 espèces de Fux, style Palestrina, pas de chromatisme, dissonances très réglementées. Contrepoint libre (Bach, Haendel) = même principes fondamentaux mais avec plus de liberté : chromatisme, modulations, ornements, dissonances moins strictement réglées." },
  { q: "Combien d'espèces de contrepoint Fux distingue-t-il ?", opts: ["3", "4", "5", "7"], a: 2, fb: "Fux distingue 5 espèces : 1ère (1:1), 2ème (2:1), 3ème (4:1), 4ème (syncopes), 5ème (fleuri). Ce système progressif permet d'introduire les difficultés une par une : d'abord les consonances pures, puis les dissonances de passage, puis les retards, puis tout combiné." },
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

// ── Styles ────────────────────────────────────────────────────────────────────

const PRIMARY    = "#5C3A1E";
const PRIMARY_BG = "#F7F0E6";

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
  h2:   { fontSize: 17, fontWeight: 500, color: "#111", marginBottom: 8 } as React.CSSProperties,
  h3:   { fontSize: 14, fontWeight: 500, margin: "20px 0 10px", color: "#111" } as React.CSSProperties,
  p:    { fontSize: 14, color: "#555", lineHeight: 1.75, marginBottom: "1rem" } as React.CSSProperties,
  info: { borderLeft: `2px solid ${PRIMARY}`, padding: "8px 14px", background: PRIMARY_BG, borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#3A1A08", lineHeight: 1.6 } as React.CSSProperties,
  warn: { borderLeft: "2px solid #A32D2D", padding: "8px 14px", background: "#FCEBEB", borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#501313", lineHeight: 1.6 } as React.CSSProperties,
  tip:  { borderLeft: "2px solid #0F6E56", padding: "8px 14px", background: "#E1F5EE", borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#085041", lineHeight: 1.6 } as React.CSSProperties,
};

// ── Component ─────────────────────────────────────────────────────────────────

export default function Cours13() {
  const [activeSection, setActiveSection] = useState<string>("especes");
  const i18n = useCoursI18n("cours13");
  const tr = useTerm();
  const { questions: ALL_QUESTIONS } = useCoursContent(cours13Content);
  const [activeSp, setActiveSp] = useState<string | null>(null);

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
    if (id === "especes") return "Les 5 espèces";
    if (id === "regles") return "Règles fondamentales";
    return "Entraînement";
  };

  const playMotion = (motion: Motion) => {
    const cfKeys = motion.cfKeys;
    const cpKeys = motion.cpKeys;
    const n = Math.max(cfKeys.length, cpKeys.length);
    for (let i = 0; i < n; i++) {
      const cf = cfKeys[Math.min(i, cfKeys.length - 1)];
      const cp = cpKeys[Math.min(i, cpKeys.length - 1)];
      setTimeout(() => {
        const [cn, co] = cf.split(":");
        const [tn, to] = cp.split(":");
        pianoRef.current?.playNote(cn, parseInt(co), { duration: 1.2 });
        pianoRef.current?.playNote(tn, parseInt(to), { duration: 1.2 });
      }, i * 600);
    }
  };

  return (
    <div style={S.wrap}>
      {/* Piano caché */}
      <div style={{ position: "absolute", opacity: 0, pointerEvents: "none", height: 0, overflow: "hidden" }}>
        <PianoPlayer ref={pianoRef} octaves={4} startOctave={2} showLabels={false} />
      </div>

      {/* Header */}
      <div style={S.header}>
        <span style={S.badge}>Niveau 2 · Cours 13</span>
        <h1 style={S.h1}>{tr("Le contrepoint à 2 voix")}</h1>
        <p style={S.subtitle}>{i18n.subtitle}</p>
      </div>

      <MaitreCard
        composer="Johann Joseph Fux"
        period="1660–1741"
        emoji="📜"
        concept="Contrepoint"
        anecdote="En 1725, Fux publie le Gradus ad Parnassum ('Pas vers le Parnasse') à Vienne. Il a 65 ans et est atteint de la goutte. Il écrit sous forme de dialogue : Aloysius (son idéal, Palestrina) enseigne à Josephus (lui-même). Ce livre traversera les siècles : le jeune Haydn l'étudiera seul dans sa chambre à Vienne. Mozart l'utilisera pour enseigner. Beethoven en recopiera des passages entiers dans ses cahiers."
        lesson="Écrire deux voix indépendantes est plus difficile qu'écrire une seule voix complexe. Chaque voix doit avoir sa vie propre — et pourtant, ensemble, elles doivent former une harmonie cohérente."
        accentColor={PRIMARY}
      />

      {/* Navigation */}
      <nav style={S.nav}>
        {(["especes", "regles", "quiz"] as const).map(id => (
          <button key={id} style={S.pill(activeSection === id)} onClick={() => setActiveSection(id)}>
            {sectionLabel(id)}
          </button>
        ))}
      </nav>

      {/* ══ SECTION 1 : ESPÈCES ══ */}
      {activeSection === "especes" && (
        <div>
          <h2 style={S.h2}>{tr("Les 5 espèces de contrepoint")}</h2>
          <p style={S.p}>
            Fux organise l&apos;apprentissage du contrepoint en 5 espèces progressives.
            Chaque espèce introduit une nouvelle difficulté : d&apos;abord les consonances pures,
            puis les notes de passage, puis les retards, jusqu&apos;à la combinaison libre.
          </p>

          <div style={S.info}>
            <strong>Principe général :</strong> le contrepoint à 2 voix s&apos;écrit sur un
            <em> cantus firmus</em> — une mélodie de référence en notes longues.
            La voix de contrepoint doit être mélodiquement intéressante et
            harmoniquement correcte vis-à-vis du CF.
          </div>

          <p style={{ fontSize: 13, color: "#888", marginBottom: 16 }}>
            Cliquez sur une espèce pour l&apos;entendre et voir ses règles.
          </p>

          {SPECIES.map(sp => (
            <div
              key={sp.id}
              onClick={() => {
                const opening = activeSp !== sp.id;
                setActiveSp(opening ? sp.id : null);
                if (opening) playSpecies(pianoRef as React.RefObject<PianoPlayerRef>, sp.beats, sp.gapMs, sp.noteDur);
              }}
              style={{
                border: `0.5px solid ${activeSp === sp.id ? sp.color : "#e5e5e5"}`,
                borderRadius: 10,
                marginBottom: 8,
                overflow: "hidden",
                cursor: "pointer",
                background: activeSp === sp.id ? sp.bg : "#fff",
                transition: "all .15s",
              }}
            >
              {/* Header espèce */}
              <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 16px" }}>
                <div style={{
                  fontSize: 11, fontWeight: 700, color: sp.color,
                  background: sp.bg, border: `0.5px solid ${sp.color}`,
                  padding: "3px 10px", borderRadius: 6, fontFamily: "monospace",
                  flexShrink: 0, whiteSpace: "nowrap" as const,
                }}>
                  {sp.ratio}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 500, color: "#111" }}>{sp.name}</div>
                  <div style={{ fontSize: 12, color: "#888", marginTop: 2, fontStyle: "italic" }}>
                    {sp.rhythmNote}
                  </div>
                </div>
              </div>

              {/* Détail */}
              {activeSp === sp.id && (
                <div style={{ padding: "0 16px 16px", borderTop: `0.5px solid ${sp.color}20` }}>
                  <div style={{ marginTop: 12, marginBottom: 10 }}>
                    <div style={{ fontSize: 11, fontWeight: 600, color: sp.color, marginBottom: 4, textTransform: "uppercase" as const, letterSpacing: "0.08em" }}>Description</div>
                    <div style={{ fontSize: 13, color: "#444", lineHeight: 1.65 }}>{sp.description}</div>
                  </div>
                  <div style={{ marginBottom: 14 }}>
                    <div style={{ fontSize: 11, fontWeight: 600, color: sp.color, marginBottom: 4, textTransform: "uppercase" as const, letterSpacing: "0.08em" }}>Traitement des dissonances</div>
                    <div style={{ fontSize: 13, color: "#444", background: "#f8f8f8", padding: "6px 10px", borderRadius: 6, fontFamily: "monospace" }}>
                      {sp.dissonanceRule}
                    </div>
                  </div>
                  <button
                    onClick={e => { e.stopPropagation(); playSpecies(pianoRef as React.RefObject<PianoPlayerRef>, sp.beats, sp.gapMs, sp.noteDur); }}
                    style={{ fontSize: 12, padding: "5px 14px", border: `0.5px solid ${sp.color}`, borderRadius: 20, cursor: "pointer", background: "transparent", color: sp.color }}
                  >
                    ▶ Réécouter
                  </button>
                </div>
              )}
            </div>
          ))}

          {/* Récap tableau */}
          <h3 style={S.h3}>Récapitulatif des 5 espèces</h3>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
              <thead>
                <tr style={{ borderBottom: "0.5px solid #e5e5e5" }}>
                  {["Espèce", "Ratio", "Dissonances", "Principales figures"].map(h => (
                    <th key={h} style={{ textAlign: "left", padding: "6px 10px", fontWeight: 500, color: "#666" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { esp: "1ère", ratio: "1 : 1", diss: "Aucune", fig: "Consonances uniquement" },
                  { esp: "2ème", ratio: "2 : 1", diss: "Temps faible", fig: "Notes de passage" },
                  { esp: "3ème", ratio: "4 : 1", diss: "Temps 2, 3, 4", fig: "Broderies, échappées, passages" },
                  { esp: "4ème", ratio: "2 : 1 syncopé", diss: "Temps fort (retard)", fig: "Suspensions 7–6, 4–3, 9–8" },
                  { esp: "5ème", ratio: "Libre", diss: "Selon espèce utilisée", fig: "Toutes les figures combinées" },
                ].map((r, i) => (
                  <tr key={r.esp} style={{ borderBottom: "0.5px solid #f0f0f0", background: i % 2 === 0 ? "#fff" : "#fafafa" }}>
                    <td style={{ padding: "7px 10px", fontWeight: 500, color: SPECIES[i].color }}>{r.esp}</td>
                    <td style={{ padding: "7px 10px", fontFamily: "monospace", fontSize: 11 }}>{r.ratio}</td>
                    <td style={{ padding: "7px 10px", fontSize: 11, color: "#555" }}>{r.diss}</td>
                    <td style={{ padding: "7px 10px", fontSize: 11, color: "#666" }}>{r.fig}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ══ SECTION 2 : RÈGLES ══ */}
      {activeSection === "regles" && (
        <div>
          <h2 style={S.h2}>{tr("Règles fondamentales du contrepoint")}</h2>
          <p style={S.p}>
            Le contrepoint strict repose sur trois piliers : la qualité des intervalles
            (consonances vs dissonances), le type de mouvement entre les voix,
            et le traitement rigoureux de chaque dissonance.
          </p>

          {/* Intervalles */}
          <h3 style={S.h3}>{tr("Intervalles consonants et dissonants")}</h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 16 }}>
            <div style={{ border: "0.5px solid #0F6E5640", borderRadius: 10, padding: "14px 16px", background: "#E1F5EE" }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: "#0F6E56", marginBottom: 10, textTransform: "uppercase" as const, letterSpacing: "0.08em" }}>{tr("Consonances ✓")}</div>
              {[
                { name: "Parfaites", intervals: "Unisson (1), Quinte (5J), Octave (8)" },
                { name: "Imparfaites", intervals: "Tierces (M3, m3) · Sixtes (M6, m6)" },
              ].map(g => (
                <div key={g.name} style={{ marginBottom: 8 }}>
                  <div style={{ fontSize: 11, color: "#0F6E56", fontWeight: 500, marginBottom: 2 }}>{g.name}</div>
                  <div style={{ fontSize: 12, fontFamily: "monospace", color: "#444" }}>{g.intervals}</div>
                </div>
              ))}
            </div>
            <div style={{ border: "0.5px solid #A32D2D40", borderRadius: 10, padding: "14px 16px", background: "#FCEBEB" }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: "#A32D2D", marginBottom: 10, textTransform: "uppercase" as const, letterSpacing: "0.08em" }}>{tr("Dissonances ✗")}</div>
              {[
                { name: "Toutes espèces", intervals: "Seconde (M2, m2) · Septième (M7, m7)" },
                { name: "Contrepoint 2 voix", intervals: "Quarte juste (4J) · Triton (A4/D5)" },
              ].map(g => (
                <div key={g.name} style={{ marginBottom: 8 }}>
                  <div style={{ fontSize: 11, color: "#A32D2D", fontWeight: 500, marginBottom: 2 }}>{g.name}</div>
                  <div style={{ fontSize: 12, fontFamily: "monospace", color: "#444" }}>{g.intervals}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Mouvements */}
          <h3 style={S.h3}>{tr("Les 4 types de mouvement")}</h3>

          {MOTIONS.map(motion => (
            <div key={motion.id} style={{
              border: `0.5px solid ${motion.allowed ? motion.color : "#A32D2D"}40`,
              borderRadius: 10, padding: "12px 16px", marginBottom: 8,
              background: motion.bg,
            }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 12, flexWrap: "wrap" as const }}>
                <div style={{ flexShrink: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
                    <span style={{ fontWeight: 500, fontSize: 13, color: motion.allowed ? motion.color : "#A32D2D" }}>{motion.name}</span>
                    <span style={{ fontSize: 11, padding: "1px 7px", borderRadius: 10, background: motion.allowed ? motion.color : "#A32D2D", color: "#fff" }}>
                      {motion.allowed ? "Autorisé" : "Interdit (si parfait)"}
                    </span>
                  </div>
                  <div style={{ fontSize: 12, color: "#555", lineHeight: 1.5, marginBottom: 8 }}>{motion.description}</div>
                  <div style={{ fontSize: 11, color: "#666", fontStyle: "italic", lineHeight: 1.5, marginBottom: 10 }}>{motion.rule}</div>
                  <button
                    onClick={() => playMotion(motion)}
                    style={{ fontSize: 11, padding: "3px 10px", border: `0.5px solid ${motion.allowed ? motion.color : "#A32D2D"}`, borderRadius: 20, cursor: "pointer", background: "transparent", color: motion.allowed ? motion.color : "#A32D2D" }}
                  >
                    ▶ Écouter
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div style={S.warn}>
            <strong>Quintes et octaves cachées :</strong> même si les voix arrivent sur une quinte
            ou une octave par mouvement <em>direct</em> (pas parallèle), cette &laquo; quinte cachée &raquo;
            est interdite entre voix extrêmes (soprano et basse) dans le style strict.
            Les deux voix ne doivent pas s&apos;approcher d&apos;une quinte ou octave parfaite
            en allant dans le même sens.
          </div>

          {/* Retards / suspensions */}
          <h3 style={S.h3}>Les retards (suspensions) de la 4ème espèce</h3>
          <p style={S.p}>
            Un retard se déroule en 3 étapes obligatoires : préparation → dissonance → résolution.
          </p>

          <div style={S.info}>
            <strong>Cycle d&apos;un retard :</strong>{" "}
            <strong>1. Préparation</strong> — la note est présente comme consonance sur le temps faible.
            <strong> 2. Dissonance</strong> — la note est tenue par liaison sur le temps fort (le CF a changé, créant une dissonance).
            <strong> 3. Résolution</strong> — la dissonance descend d&apos;un degré conjoint vers une consonance.
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 16 }}>
            {SUSPENSIONS.map(s => (
              <div key={s.name} style={{ border: "0.5px solid #e5e5e5", borderRadius: 10, padding: "12px 16px", background: "#fafafa" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                  <span style={{ fontFamily: "monospace", fontSize: 15, fontWeight: 700, color: PRIMARY }}>{s.formula}</span>
                  <span style={{ fontSize: 12, fontWeight: 500, color: "#333" }}>{s.name}</span>
                </div>
                <div style={{ fontSize: 12, color: "#555", lineHeight: 1.5, marginBottom: 6 }}>{s.description}</div>
                <div style={{ fontSize: 11, fontFamily: "monospace", color: "#0F6E56" }}>{s.resolution}</div>
              </div>
            ))}
          </div>

          {/* Règles mélodiques */}
          <h3 style={S.h3}>Règles de la ligne mélodique</h3>

          <div style={{ display: "flex", flexDirection: "column" as const, gap: 8 }}>
            {[
              { rule: "Préférer le mouvement conjoint (par degrés)", detail: "La ligne doit être principalement stepwise — naturellement chantable. Les sauts doivent rester rares et justifiés." },
              { rule: "Après un grand saut, revenir en sens contraire", detail: "Un saut de sixte, septième ou octave doit être suivi d'un retour mélodique progressif dans le sens opposé." },
              { rule: "Un seul climax mélodique (note culminante)", detail: "Le point le plus aigu de la ligne ne doit apparaître qu'une seule fois. La répéter dilue l'effet dramatique." },
              { rule: "Éviter les sauts d'intervalles augmentés ou diminués", detail: "La seconde augmentée, la quinte diminuée et le triton sont difficiles à chanter et créent des ambiguïtés tonales." },
              { rule: "Éviter les répétitions prolongées de la même note", detail: "Une note répétée plusieurs fois de suite stagne la ligne et nuit à son indépendance mélodique." },
              { rule: "Les voix ne doivent pas se croiser", detail: "Quand la voix supérieure passe sous la voix inférieure (ou vice versa), les identités mélodiques s'emmêlent." },
            ].map((r, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 10, padding: "10px 14px", borderRadius: 8, background: i % 2 === 0 ? "#fafafa" : "#fff", border: "0.5px solid #f0f0f0" }}>
                <div style={{ fontSize: 13, color: "#0F6E56", fontWeight: 500, marginTop: 1 }}>→</div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 500, color: "#333", marginBottom: 2 }}>{r.rule}</div>
                  <div style={{ fontSize: 12, color: "#666", lineHeight: 1.5 }}>{r.detail}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={S.tip}>
            <strong>Méthode Fux :</strong> commencez toujours par maîtriser la 1ère espèce dans tous
            les modes avant de passer à la 2ème. Fux insiste : chaque espèce est un outil
            indispensable. Le contrepoint fleuri (5ème espèce) n&apos;est accessible que si les
            4 premières sont intégrées intuitivement.
          </div>
        </div>
      )}

      {/* ══ SECTION 3 : QUIZ ══ */}
      {activeSection === "quiz" && (
        <div>
          <h2 style={S.h2}>{tr("Entraînement")}</h2>

          {quizDone ? (
            <div style={{ textAlign: "center", padding: "2rem 0" }}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>
                {quizScore >= 8 ? "📜" : quizScore >= 6 ? "👍" : "💪"}
              </div>
              <div style={{ fontSize: 20, fontWeight: 500, color: "#111", marginBottom: 4 }}>
                Score : {quizScore} / {QUIZ_COUNT}
              </div>
              <div style={{ fontSize: 14, color: "#666", marginBottom: 20 }}>
                {quizScore >= 8
                  ? "Excellent — Fux serait fier de vous !"
                  : quizScore >= 6
                  ? "Bien — encore quelques espèces à pratiquer."
                  : "Continue à pratiquer les espèces une par une — l'ordre compte !"}
              </div>
              <button
                onClick={resetQuiz}
                style={{ fontSize: 13, padding: "8px 20px", border: `0.5px solid ${PRIMARY}`, borderRadius: 20, cursor: "pointer", background: PRIMARY_BG, color: PRIMARY }}
              >{tr("Nouveau quiz")}</button>
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
