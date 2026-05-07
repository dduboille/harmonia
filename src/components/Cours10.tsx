"use client";

/**
 * Cours10.tsx
 * Harmonia · Niveau 2 · Cours 10 — Les modes de la gamme majeure
 * Convention : affichage anglais, dotKeys PianoPlayer français
 */

import React, { useRef, useState } from "react";
import { useCoursI18n } from "@/hooks/useCoursI18n";
import PianoPlayer, { PianoPlayerRef } from "@/components/PianoPlayer";
import MaitreCard from "@/components/MaitreCard";

interface Section { id: string; label: string; }

function playScale(ref: React.RefObject<PianoPlayerRef>, notes: string[], gap = 300) {
  notes.forEach((key, i) => {
    const [note, octStr] = key.split(":");
    setTimeout(() => ref.current?.playNote(note, parseInt(octStr), { duration: 1.2 }), i * gap);
  });
}

// ── Données modes ─────────────────────────────────────────────────────────────

interface Mode {
  id: string;
  name: string;
  degree: number;         // degré de la gamme majeure dont il est issu
  degreeLabel: string;    // "I", "II", etc.
  rootExample: string;    // note de départ pour l'exemple en C majeur
  structure: string;      // "T T ½T T T T ½T"
  alteration: string;     // ce qui le distingue du mode ionien
  color: string;
  bg: string;
  emoji: string;
  character: string;      // couleur émotionnelle
  famous: string;         // exemple musical célèbre
  famousDetail: string;
  notes: string[];        // notes de la gamme depuis Do (exemple en C majeur)
  dotKeys: string[];      // dotKeys PianoPlayer pour jouer la gamme
}

const MODES: Mode[] = [
  {
    id: "ionien",
    name: "Ionien",
    degree: 1,
    degreeLabel: "I",
    rootExample: "C",
    structure: "T – T – ½T – T – T – T – ½T",
    alteration: "Aucune — c'est la gamme majeure standard",
    color: "#0F6E56",
    bg: "#E1F5EE",
    emoji: "☀️",
    character: "Lumineux, stable, affirmé. La référence tonale absolue.",
    famous: "Twinkle Twinkle Little Star, Happy Birthday",
    famousDetail: "Pratiquement toute la musique populaire occidentale repose sur ce mode — c'est la gamme majeure.",
    notes: ["C", "D", "E", "F", "G", "A", "B", "C"],
    dotKeys: ["Do:4","Ré:4","Mi:4","Fa:4","Sol:4","La:4","Si:4","Do:5"],
  },
  {
    id: "dorien",
    name: "Dorien",
    degree: 2,
    degreeLabel: "II",
    rootExample: "D",
    structure: "T – ½T – T – T – T – ½T – T",
    alteration: "Mineur avec 6te majeure — ni trop sombre, ni trop clair",
    color: "#185FA5",
    bg: "#E6F1FB",
    emoji: "🌊",
    character: "Mineur mais lumineux, mystérieux, modal. La couleur du jazz et du folk celtique.",
    famous: "So What – Miles Davis / Scarborough Fair / Oye Como Va – Santana",
    famousDetail: "So What de Miles Davis (1959) est l'exemple modal par excellence. La 6te majeure (B dans D dorien) donne cette couleur unique — ni vraiment triste, ni vraiment joyeux.",
    notes: ["D", "E", "F", "G", "A", "B", "C", "D"],
    dotKeys: ["Ré:4","Mi:4","Fa:4","Sol:4","La:4","Si:4","Do:5","Ré:5"],
  },
  {
    id: "phrygien",
    name: "Phrygien",
    degree: 3,
    degreeLabel: "III",
    rootExample: "E",
    structure: "½T – T – T – T – ½T – T – T",
    alteration: "Mineur avec 2de bémolisée — la note caractéristique la plus distinctive",
    color: "#993C1D",
    bg: "#FAECE7",
    emoji: "🔥",
    character: "Sombre, intense, dramatique. La couleur du flamenco et de la musique espagnole.",
    famous: "Flamenco / Metallica – Wherever I May Roam / thème de Star Wars (Duel of Fates)",
    famousDetail: "Le demi-ton initial (E→F) crée une tension immédiate et une couleur méditerranéenne inconfondable. Le mouvement ♭II→I est la cadence phrygienne emblématique du flamenco.",
    notes: ["E", "F", "G", "A", "B", "C", "D", "E"],
    dotKeys: ["Mi:4","Fa:4","Sol:4","La:4","Si:4","Do:5","Ré:5","Mi:5"],
  },
  {
    id: "lydien",
    name: "Lydien",
    degree: 4,
    degreeLabel: "IV",
    rootExample: "F",
    structure: "T – T – T – ½T – T – T – ½T",
    alteration: "Majeur avec 4te augmentée (#4) — note la plus caractéristique",
    color: "#6B3FA0",
    bg: "#F0EAFA",
    emoji: "✨",
    character: "Lumineux, onirique, éthéré. La couleur de la magie et de l'émerveillement.",
    famous: "The Simpsons (thème) / Flying – John Williams / Lydian Chromatic Concept – George Russell",
    famousDetail: "Le #4 crée une tension douce et rêveuse. John Williams l'utilise abondamment dans ses musiques de films pour évoquer le merveilleux (E.T., Superman). Le thème des Simpsons commence par ce triton ascendant emblématique.",
    notes: ["F", "G", "A", "B", "C", "D", "E", "F"],
    dotKeys: ["Fa:4","Sol:4","La:4","Si:4","Do:5","Ré:5","Mi:5","Fa:5"],
  },
  {
    id: "mixolydien",
    name: "Mixolydien",
    degree: 5,
    degreeLabel: "V",
    rootExample: "G",
    structure: "T – T – ½T – T – T – ½T – T",
    alteration: "Majeur avec 7te mineure — accord de dominante sans résolution",
    color: "#BA7517",
    bg: "#FAEEDA",
    emoji: "🎸",
    character: "Majeur mais non résolu, énergique, bluesy. La couleur du rock et du blues.",
    famous: "Norwegian Wood – Beatles / Sweet Home Chicago / La Grange – ZZ Top",
    famousDetail: "Pratiquement tout le blues et le rock utilisent ce mode. La 7te mineure (F dans G mixolydien) crée un accord de dominante sans tension de résolution — ce qui donne cette couleur énergique et cyclique.",
    notes: ["G", "A", "B", "C", "D", "E", "F", "G"],
    dotKeys: ["Sol:4","La:4","Si:4","Do:5","Ré:5","Mi:5","Fa:5","Sol:5"],
  },
  {
    id: "eolien",
    name: "Éolien",
    degree: 6,
    degreeLabel: "VI",
    rootExample: "A",
    structure: "T – ½T – T – T – ½T – T – T",
    alteration: "C'est la gamme mineure naturelle — le mode le plus utilisé après l'ionien",
    color: "#2D4A8A",
    bg: "#E8EEF8",
    emoji: "🌙",
    character: "Mélancolique, introspectif, naturel. La gamme mineure naturelle.",
    famous: "Stairway to Heaven – Led Zeppelin / Summertime – Gershwin / Losing My Religion – R.E.M.",
    famousDetail: "L'éolien est simplement la gamme mineure naturelle — issu du VIe degré de la gamme majeure. Toute musique en mineur naturel utilise ce mode. Il manque la sensible, ce qui le distingue du mineur harmonique.",
    notes: ["A", "B", "C", "D", "E", "F", "G", "A"],
    dotKeys: ["La:4","Si:4","Do:5","Ré:5","Mi:5","Fa:5","Sol:5","La:5"],
  },
  {
    id: "locrien",
    name: "Locrien",
    degree: 7,
    degreeLabel: "VII",
    rootExample: "B",
    structure: "½T – T – T – ½T – T – T – T",
    alteration: "Mineur avec 2de et 5te bémolisées — le mode le plus instable",
    color: "#555",
    bg: "#F0F0F0",
    emoji: "💀",
    character: "Très sombre, instable, dissonant. Rarement utilisé seul — surtout en métal et jazz avant-garde.",
    famous: "YYZ – Rush / utilisé ponctuellement dans le métal progressif",
    famousDetail: "La quinte diminuée (triton) entre la fondamentale et la quinte rend cet accord extrêmement instable. C'est le VIIe degré de la gamme majeure — Bdim en C majeur. Utilisé avec parcimonie pour des effets dramatiques extrêmes.",
    notes: ["B", "C", "D", "E", "F", "G", "A", "B"],
    dotKeys: ["Si:4","Do:5","Ré:5","Mi:5","Fa:5","Sol:5","La:5","Si:5"],
  },
];

// ── Accords caractéristiques de chaque mode ───────────────────────────────────

interface ModeChord {
  mode: string;
  triads: string;      // accords diatoniques principaux
  characteristic: string; // accord le plus caractéristique
  progression: string; // progression typique
}

const MODE_CHORDS: ModeChord[] = [
  { mode: "Ionien",     triads: "I – IIm – IIIm – IV – V – VIm – VIIdim", characteristic: "V7 (dominante active)", progression: "I – IV – V7 – I" },
  { mode: "Dorien",     triads: "Im – IIm – ♭III – IV – Vm – ♭VIdim – ♭VII", characteristic: "IV majeur (6te majeure)", progression: "Im – IV – Im" },
  { mode: "Phrygien",   triads: "Im – ♭II – ♭III – IVm – ♭Vdim – ♭VI – ♭VIIm", characteristic: "♭II (2de bémolisée)", progression: "Im – ♭II – Im" },
  { mode: "Lydien",     triads: "I – II – IIIm – #IVdim – V – VIm – VIIm", characteristic: "#IVdim (triton)", progression: "I – II – I" },
  { mode: "Mixolydien", triads: "I – IIm – IIIdim – IV – Vm – VIm – ♭VII", characteristic: "♭VII majeur (7te mineure)", progression: "I – ♭VII – IV – I" },
  { mode: "Éolien",     triads: "Im – IIdim – ♭III – IVm – Vm – ♭VI – ♭VII", characteristic: "♭VII majeur (sans sensible)", progression: "Im – ♭VI – ♭VII – Im" },
  { mode: "Locrien",    triads: "Idim – ♭II – ♭IIIm – IVm – ♭V – ♭VI – ♭VIIm", characteristic: "Idim (quinte diminuée)", progression: "Idim – ♭II – Idim" },
];

// ── Quiz ───────────────────────────────────────────────────────────────────────

const ALL_QUESTIONS = [
  // Identification des modes
  { q: "Quel mode correspond à la gamme majeure standard ?", opts: ["Dorien", "Lydien", "Ionien", "Mixolydien"], a: 2, fb: "L'ionien est simplement la gamme majeure — Do Ré Mi Fa Sol La Si Do. C'est le mode I, la référence de tout le système modal." },
  { q: "Quel mode est la gamme mineure naturelle ?", opts: ["Dorien", "Phrygien", "Locrien", "Éolien"], a: 3, fb: "L'éolien = gamme mineure naturelle. Il part du VIe degré de la gamme majeure — Am en C majeur, par exemple." },
  { q: "Quel mode part du IIe degré de la gamme majeure ?", opts: ["Phrygien", "Dorien", "Mixolydien", "Lydien"], a: 1, fb: "Le dorien part du IIe degré. En C majeur, c'est D dorien (D E F G A B C D). Sa note caractéristique est la 6te majeure." },
  { q: "Quel mode part du IIIe degré ?", opts: ["Lydien", "Éolien", "Phrygien", "Locrien"], a: 2, fb: "Le phrygien part du IIIe degré. En C majeur, c'est E phrygien (E F G A B C D E). Sa note caractéristique est la 2de bémolisée." },
  { q: "Quel mode part du IVe degré ?", opts: ["Mixolydien", "Lydien", "Dorien", "Ionien"], a: 1, fb: "Le lydien part du IVe degré. En C majeur, c'est F lydien (F G A B C D E F). Sa note caractéristique est la 4te augmentée (#4)." },
  { q: "Quel mode part du Ve degré ?", opts: ["Éolien", "Locrien", "Ionien", "Mixolydien"], a: 3, fb: "Le mixolydien part du Ve degré. En C majeur, c'est G mixolydien (G A B C D E F G). Sa note caractéristique est la 7te mineure." },
  { q: "Quel mode part du VIIe degré ?", opts: ["Phrygien", "Éolien", "Locrien", "Dorien"], a: 2, fb: "Le locrien part du VIIe degré. En C majeur, c'est B locrien (B C D E F G A B). C'est le mode le plus instable — il contient une quinte diminuée." },
  // Notes caractéristiques
  { q: "Quelle est la note caractéristique du mode dorien ?", opts: ["♭2", "♭7", "♮6 (6te majeure)", "#4"], a: 2, fb: "La 6te majeure distingue le dorien du mineur naturel (éolien). En D dorien, c'est B naturel — absent en D mineur naturel (où B est bémolisé)." },
  { q: "Quelle est la note caractéristique du mode phrygien ?", opts: ["♭7", "♭2 (2de bémolisée)", "#4", "♮6"], a: 1, fb: "La 2de bémolisée est la note la plus distinctive du phrygien. En E phrygien, c'est F naturel — qui crée le demi-ton initial E→F, couleur très sombre et méditerranéenne." },
  { q: "Quelle est la note caractéristique du mode lydien ?", opts: ["♭7", "♭2", "♮6", "#4 (4te augmentée)"], a: 3, fb: "La 4te augmentée (#4) est la note distincte du lydien. En F lydien, c'est B naturel au lieu de Bb — ce triton ascendant F→B crée la couleur onirique et lumineuse du lydien." },
  { q: "Quelle est la note caractéristique du mode mixolydien ?", opts: ["♭2", "#4", "♭7 (7te mineure)", "♭6"], a: 2, fb: "La 7te mineure distingue le mixolydien de la gamme majeure (ionien). En G mixolydien, c'est F naturel au lieu de F# — ce qui crée l'accord de dominante sans résolution, couleur bluesy." },
  { q: "Quelle est la note caractéristique du mode locrien ?", opts: ["♭2 seulement", "♭5 (quinte diminuée)", "♭7", "♭6 seulement"], a: 1, fb: "La quinte diminuée (♭5) rend le locrien unique et extrêmement instable. En B locrien, c'est F naturel — le triton B→F, le même que dans Bdim, le VIIe degré de C majeur." },
  // Structure
  { q: "Combien de modes contient la gamme majeure ?", opts: ["5", "6", "7", "12"], a: 2, fb: "La gamme majeure à 7 degrés génère 7 modes — un mode par degré. Ionien, Dorien, Phrygien, Lydien, Mixolydien, Éolien, Locrien." },
  { q: "Comment obtient-on le mode dorien depuis la gamme de C majeur ?", opts: ["On joue C majeur depuis A", "On joue C majeur depuis D", "On joue C majeur depuis E", "On joue C majeur depuis G"], a: 1, fb: "D dorien = C majeur joué depuis D. On utilise les mêmes notes (C D E F G A B), mais on les recentre sur D. La note D devient la tonique, et la gamme prend la couleur dorienne." },
  { q: "Le mode phrygien se distingue du mode mineur naturel par :", opts: ["Sa 5te bémolisée", "Sa 2de bémolisée", "Sa 6te bémolisée", "Sa 7te bémolisée"], a: 1, fb: "Phrygien vs Éolien : tous deux sont mineurs, mais le phrygien a une 2de bémolisée (♭2) que l'éolien n'a pas. C'est cet intervalle de demi-ton initial qui crée la couleur sombre et méditerranéenne." },
  { q: "Le mixolydien est identique à la gamme majeure sauf :", opts: ["La tierce est mineure", "La 6te est bémolisée", "La 7te est mineure (♭7)", "La 4te est augmentée"], a: 2, fb: "Mixolydien = gamme majeure avec ♭7. En G majeur : F# devient F naturel. Cette seule altération transforme l'accord V (G) en accord de dominante sans résolution — la base du blues et du rock." },
  { q: "Le lydien est identique à la gamme majeure sauf :", opts: ["La 3ce est augmentée", "La 4te est augmentée (#4)", "La 7te est mineure", "La 6te est bémolisée"], a: 1, fb: "Lydien = gamme majeure avec #4. En F lydien : Bb devient B naturel. Ce triton F→B est la note caractéristique du lydien — couleur lumineuse et onirique, utilisée par John Williams pour évoquer le merveilleux." },
  // Modes majeurs vs mineurs
  { q: "Quels modes ont une tierce majeure (modes 'majeurs') ?", opts: ["Ionien, Lydien, Mixolydien", "Dorien, Éolien, Phrygien", "Ionien, Dorien, Phrygien", "Lydien, Éolien, Locrien"], a: 0, fb: "Ionien (I), Lydien (IV) et Mixolydien (V) ont une tierce majeure — ce sont les modes 'majeurs'. Les 4 autres (Dorien, Phrygien, Éolien, Locrien) ont une tierce mineure." },
  { q: "Quels modes ont une tierce mineure (modes 'mineurs') ?", opts: ["Ionien, Lydien, Mixolydien", "Dorien, Phrygien, Éolien, Locrien", "Dorien, Éolien seulement", "Phrygien, Locrien seulement"], a: 1, fb: "Dorien (II), Phrygien (III), Éolien (VI) et Locrien (VII) ont une tierce mineure. Le locrien a en plus une quinte diminuée, ce qui le rend particulièrement instable." },
  { q: "Le dorien se distingue de l'éolien par :", opts: ["Sa 7te majeure", "Sa 6te majeure", "Sa 2de majeure", "Sa 4te augmentée"], a: 1, fb: "Dorien vs Éolien : le dorien a une 6te majeure là où l'éolien a une 6te mineure. En D dorien : B naturel. En D éolien : Bb. Cette seule note change radicalement la couleur — le dorien est moins sombre." },
  // Applications musicales
  { q: "Quel mode est typiquement utilisé dans le flamenco ?", opts: ["Dorien", "Lydien", "Phrygien", "Mixolydien"], a: 2, fb: "Le phrygien et sa variante phrygien dominant sont au cœur du flamenco. La 2de bémolisée (♭2) et la cadence ♭II→I créent la couleur espagnole inconfondable." },
  { q: "Quel mode caractérise le jazz modal (So What de Miles Davis) ?", opts: ["Lydien", "Dorien", "Mixolydien", "Phrygien"], a: 1, fb: "So What (1959) est en D dorien. Miles Davis et Bill Evans utilisent le mode dorien pour sa couleur mi-mineure mi-lumineuse — ce qui définit le jazz modal." },
  { q: "Quel mode est au cœur du blues et du rock ?", opts: ["Éolien", "Phrygien", "Lydien", "Mixolydien"], a: 3, fb: "Le mixolydien est la couleur du blues et du rock. La 7te mineure crée des accords de dominante sans résolution — I7, IV7, V7 — qui forment la base harmonique du blues sur 12 mesures." },
  { q: "Quel mode John Williams utilise-t-il pour évoquer le merveilleux dans ses musiques de films ?", opts: ["Dorien", "Mixolydien", "Lydien", "Éolien"], a: 2, fb: "Le lydien, avec sa 4te augmentée, crée une couleur lumineuse et onirique. John Williams l'utilise dans E.T., Superman et de nombreuses scènes magiques. Le thème des Simpsons commence par ce triton ascendant lydien." },
  { q: "Quel est le mode le plus rarement utilisé seul en composition ?", opts: ["Phrygien", "Locrien", "Dorien", "Éolien"], a: 1, fb: "Le locrien est presque impossible à utiliser comme centre tonal stable — sa tonique forme une quinte diminuée, la plus instable de tous les intervalles. On le rencontre surtout dans le métal extrême et le jazz avant-garde." },
  // Relation à la gamme majeure
  { q: "En C majeur, quel mode commence sur G ?", opts: ["Dorien", "Lydien", "Éolien", "Mixolydien"], a: 3, fb: "G est le Ve degré de C majeur → G mixolydien. G A B C D E F G — les mêmes notes que C majeur, mais centrées sur G. La 7te mineure (F naturel) est la note caractéristique." },
  { q: "En G majeur, quel mode commence sur A ?", opts: ["Dorien", "Mixolydien", "Éolien", "Phrygien"], a: 0, fb: "A est le IIe degré de G majeur → A dorien. A B C D E F# G A — les notes de G majeur centrées sur A. La 6te majeure (F#) est la note caractéristique du dorien." },
  { q: "En F majeur, quel mode commence sur C ?", opts: ["Ionien", "Lydien", "Mixolydien", "Dorien"], a: 2, fb: "C est le Ve degré de F majeur → C mixolydien. C D E F G A Bb C — les notes de F majeur centrées sur C. Le Bb (♭7) est la note caractéristique du mixolydien." },
  { q: "Le mode éolien sur A utilise les mêmes notes que :", opts: ["G majeur", "F majeur", "C majeur", "D majeur"], a: 2, fb: "A éolien = A B C D E F G A = C majeur joué depuis A. A est le VIe degré de C majeur. Toute gamme mineure naturelle partage ses notes avec la gamme majeure dont elle est le VIe degré." },
  { q: "Le mode dorien sur D utilise les mêmes notes que :", opts: ["G majeur", "F majeur", "C majeur", "Bb majeur"], a: 2, fb: "D dorien = D E F G A B C D = C majeur joué depuis D. D est le IIe degré de C majeur. Le mode dorien partage toujours ses notes avec la gamme majeure dont il est le IIe degré." },
  // Notes caractéristiques avancées
  { q: "En D dorien, quelle est la note qui le distingue de D mineur naturel ?", opts: ["C naturel (♭7)", "B naturel (♮6)", "F naturel (♭3)", "A naturel (♮5)"], a: 1, fb: "D dorien : D E F G A B C D. D mineur naturel : D E F G A Bb C D. La seule différence est B naturel (Bb en mineur) — c'est la 6te majeure qui caractérise le dorien." },
  { q: "En G mixolydien, quelle note le distingue de G majeur ?", opts: ["F naturel (♭7)", "Bb (♭3)", "Eb (♭6)", "Ab (♭2)"], a: 0, fb: "G majeur : G A B C D E F# G. G mixolydien : G A B C D E F G. La seule différence est F naturel au lieu de F# — c'est la 7te mineure qui caractérise le mixolydien." },
  { q: "En F lydien, quelle note le distingue de F majeur ?", opts: ["Eb (♭7)", "B naturel (#4)", "Ab (♭3)", "Db (♭6)"], a: 1, fb: "F majeur : F G A Bb C D E F. F lydien : F G A B C D E F. La seule différence est B naturel au lieu de Bb — c'est la 4te augmentée (#4) qui caractérise le lydien." },
  { q: "En E phrygien, quelle note le distingue de E mineur naturel ?", opts: ["D naturel (♭7)", "C naturel (♭6)", "F naturel (♭2)", "A naturel (♮4)"], a: 2, fb: "E mineur naturel : E F# G A B C D E. E phrygien : E F G A B C D E. La seule différence est F naturel au lieu de F# — c'est la 2de bémolisée (♭2) qui caractérise le phrygien." },
  // Progressions modales
  { q: "Une progression Im – IV en mode dorien illustre :", opts: ["La gamme majeure", "La 6te majeure du dorien — IV est majeur", "La gamme mineure harmonique", "Le mode phrygien"], a: 1, fb: "Im – IV (ex. Dm – G en D dorien) : l'accord IV est majeur grâce à la 6te majeure du dorien. En D mineur naturel, IV serait Gm. C'est cette couleur majeure sur IV qui caractérise harmoniquement le dorien." },
  { q: "La cadence ♭II → I est caractéristique de :", opts: ["Lydien", "Mixolydien", "Phrygien", "Dorien"], a: 2, fb: "♭II → I (ex. F → E en E phrygien) est la cadence phrygienne par excellence. C'est le fondement harmonique du flamenco — le mouvement de demi-ton descendant de ♭II vers I crée une tension unique." },
  { q: "La progression I – ♭VII – IV – I est typique du :", opts: ["Dorien", "Phrygien", "Lydien", "Mixolydien"], a: 3, fb: "I – ♭VII – IV – I (ex. G – F – C – G en G mixolydien) est la progression rock/blues par excellence. Le ♭VII (F en G mixolydien) est majeur et crée ce mouvement de tension sans résolution dominante." },
  { q: "La progression I – II en mode lydien est distinctive car :", opts: ["Le II est diminué", "Le II est majeur (grâce au #4)", "Le II est mineur", "Le II n'existe pas en lydien"], a: 1, fb: "En F lydien : F – G. L'accord II (G majeur) est possible grâce au #4 (B naturel) qui est dans G majeur. C'est un mouvement de seconde montante majeur–majeur unique au lydien, utilisé abondamment par John Williams." },
  // Modes et émotions
  { q: "Quel mode évoque le mieux la mélancolie et l'introspection ?", opts: ["Ionien", "Lydien", "Éolien", "Mixolydien"], a: 2, fb: "L'éolien (mineur naturel) est la couleur de la mélancolie et de l'introspection. Sans sensible, il ne crée pas de tension de résolution — il reste dans un état de douce tristesse, plus naturel que le mineur harmonique." },
  { q: "Quel mode évoque le mystère et l'ambiguïté jazz ?", opts: ["Ionien", "Dorien", "Locrien", "Lydien"], a: 1, fb: "Le dorien crée une ambiguïté entre major et mineur — ni vraiment triste ni vraiment joyeux. C'est cette couleur intermédiaire qui en fait le mode de prédilection du jazz modal et de la musique celtique." },
  { q: "Quel mode crée un sentiment de légèreté et de magie ?", opts: ["Éolien", "Phrygien", "Mixolydien", "Lydien"], a: 3, fb: "Le lydien avec son #4 crée une couleur lumineuse et onirique. La 4te augmentée évite la stabilité parfaite de la gamme majeure — elle flotte, elle brille. C'est le mode de l'émerveillement." },
  { q: "Quel mode est le plus utilisé dans la musique heavy metal ?", opts: ["Ionien", "Lydien", "Phrygien", "Dorien"], a: 2, fb: "Le phrygien est très présent dans le metal — sa 2de bémolisée et sa sombre tonalité créent une tension et une agressivité caractéristiques. Metallica, Slayer, et de nombreux groupes de metal l'utilisent abondamment." },
  // Révision générale
  { q: "Classer ces modes du plus clair au plus sombre :", opts: ["Ionien > Lydien > Mixolydien", "Lydien > Ionien > Mixolydien > Dorien > Éolien > Phrygien > Locrien", "Dorien > Ionien > Lydien", "Éolien > Phrygien > Locrien"], a: 1, fb: "Du plus clair au plus sombre : Lydien (#4) > Ionien > Mixolydien (♭7) > Dorien (♭3, ♮6) > Éolien (♭3, ♭6, ♭7) > Phrygien (♭2, ♭3, ♭6, ♭7) > Locrien (♭2, ♭3, ♭5, ♭6, ♭7)." },
  { q: "Un accord de tonique majeur avec une 7te mineure (ex. G7 utilisé comme tonique) suggère quel mode ?", opts: ["Ionien", "Dorien", "Mixolydien", "Lydien"], a: 2, fb: "G7 utilisé comme tonique (sans résolution vers C) = G mixolydien. La 7te mineure (F) dans l'accord de tonique est la marque du mixolydien — c'est exactement l'accord I7 du blues." },
  { q: "Dans quel mode la tonique forme-t-elle un accord diminué ?", opts: ["Éolien", "Phrygien", "Dorien", "Locrien"], a: 3, fb: "En locrien, l'accord de tonique est diminué — la quinte est bémolisée (♭5). C'est pourquoi ce mode est presque inutilisable comme centre tonal stable : la tonique elle-même est instable." },
  { q: "Quelle est la structure de la gamme dorienne ? (T = ton, ½ = demi-ton)", opts: ["T T ½ T T T ½", "T ½ T T T ½ T", "½ T T T ½ T T", "T T T ½ T T ½"], a: 1, fb: "Dorien : T – ½T – T – T – T – ½T – T. La différence avec l'ionien (T T ½ T T T ½) : le 2e intervalle est ½T au lieu de T (la 3ce est mineure) et le 6e est T au lieu de ½T (la 6te est majeure)." },
  { q: "Quelle est la structure de la gamme lydienne ?", opts: ["T T T ½ T T ½", "T ½ T T ½ T T", "T T ½ T T T ½", "½ T T T ½ T T"], a: 0, fb: "Lydien : T – T – T – ½T – T – T – ½T. Par rapport à l'ionien, le 3e intervalle est T au lieu de ½T — ce qui place le ½T (demi-ton) après la 4te augmentée. C'est ce #4 qui crée la couleur lydienne." },
  { q: "Pourquoi le mode ionien est-il la référence de tous les autres modes ?", opts: ["Car il est le plus ancien", "Car tous les autres modes s'obtiennent en modifiant ses degrés", "Car il est le plus utilisé en jazz", "Car il ne contient pas de triton"], a: 1, fb: "Tous les modes de la gamme majeure peuvent être décrits par rapport à l'ionien : dorien = ionien avec ♭3 et ♭7 ; phrygien = ionien avec ♭2, ♭3, ♭6, ♭7 ; etc. L'ionien est l'étalon de mesure." },
  { q: "En A éolien, quel accord occupe la position I ?", opts: ["A majeur", "A7", "Am", "Adim"], a: 2, fb: "En A éolien (mineur naturel) : A B C D E F G. L'accord I est Am (A C E) — tierce mineure, quinte juste. C'est l'accord tonique de tout mineur naturel." },
  { q: "En G mixolydien, quel accord occupe la position ♭VII ?", opts: ["F# majeur", "F mineur", "F majeur", "Fdim"], a: 2, fb: "En G mixolydien : G A B C D E F. Le ♭VII est construit sur F : F A C = F majeur. C'est cet accord F majeur en G mixolydien qui est si caractéristique du rock (ex. G – F – C – G)." },
  { q: "En D dorien, quel accord occupe la position IV ?", opts: ["Gm", "G majeur", "Gdim", "G7"], a: 1, fb: "En D dorien : D E F G A B C. Sur G (IVe degré) : G B D = G majeur. C'est la 6te majeure du dorien (B naturel) qui rend cet accord IV majeur — et c'est ce qui le distingue du D mineur naturel où IV serait Gm." },
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
const SECTIONS_IDS = ["modes", "harmonie", "quiz"] as const;

const S = {
  wrap:     { fontFamily: "var(--font-sans, system-ui)", maxWidth: 720, margin: "0 auto", padding: "0 1rem 3rem" } as React.CSSProperties,
  header:   { padding: "1.5rem 0 1rem", borderBottom: "0.5px solid #e5e5e5", marginBottom: "1.25rem" } as React.CSSProperties,
  badge:    { display: "inline-block", background: "#E6F1FB", color: "#185FA5", fontSize: 11, fontWeight: 500, padding: "2px 10px", borderRadius: 20, marginBottom: 6 } as React.CSSProperties,
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
  p:        { fontSize: 14, color: "#555", lineHeight: 1.75, marginBottom: "1rem" } as React.CSSProperties,
  infoBox:  { borderLeft: "2px solid #185FA5", padding: "8px 14px", background: "#E6F1FB", borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#0C447C", lineHeight: 1.6 } as React.CSSProperties,
  warnBox:  { borderLeft: "2px solid #BA7517", padding: "8px 14px", background: "#FAEEDA", borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#633806", lineHeight: 1.6 } as React.CSSProperties,
  tip:      { borderLeft: "2px solid #0F6E56", padding: "8px 14px", background: "#E1F5EE", borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#085041", lineHeight: 1.6 } as React.CSSProperties,
};

export default function Cours10() {
  const [activeSection, setActiveSection] = useState<string>("modes");
  const i18n = useCoursI18n("cours10");
  const [activeMode, setActiveMode] = useState<string | null>(null);

  const [quizQuestions] = useState(() => shuffle(ALL_QUESTIONS).slice(0, QUIZ_COUNT));
  const [quizIdx,      setQuizIdx]      = useState(0);
  const [quizScore,    setQuizScore]    = useState(0);
  const [quizAnswered, setQuizAnswered] = useState(false);
  const [quizDone,     setQuizDone]     = useState(false);
  const [selectedOpt,  setSelectedOpt]  = useState<number | null>(null);

  const pianoRef = useRef<PianoPlayerRef>(null);

  const handlePlayMode = (mode: Mode) => {
    playScale(pianoRef as React.RefObject<PianoPlayerRef>, mode.dotKeys, 280);
  };

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
    if (id === "modes") return "Les 7 modes";
    if (id === "harmonie") return "Harmonie modale";
    return "Entraînement";
  };

  return (
    <div style={S.wrap}>
      {/* Piano caché */}
      <div style={{ position: "absolute", opacity: 0, pointerEvents: "none", height: 0, overflow: "hidden" }}>
        <PianoPlayer ref={pianoRef} octaves={2} startOctave={4} showLabels={false} />
      </div>

      {/* Header */}
      <div style={S.header}>
        <span style={S.badge}>Niveau 2 · Cours 10</span>
        <h1 style={S.h1}>Les modes de la gamme majeure</h1>
        <p style={S.subtitle}>Ionien, dorien, phrygien, lydien, mixolydien, éolien, locrien — sept couleurs, une seule gamme.</p>
      </div>

      <MaitreCard
        composer="Miles Davis"
        period="1926–1991"
        emoji="🎺"
        concept="Modes"
        anecdote="En 1959, Miles Davis enregistre Kind of Blue — l'album de jazz le plus vendu de tous les temps. Au lieu d'enchaîner des accords complexes, il construit chaque morceau sur un seul mode. So What est entièrement en D dorien. Davis dira : 'Je voulais que les musiciens pensent à une couleur, pas à une suite d'accords.'"
        lesson="Un mode n'est pas une gamme avec une note différente — c'est une couleur harmonique, une façon d'entendre le monde."
        accentColor="#185FA5"
      />

      {/* Navigation */}
      <nav style={S.nav}>
        {SECTIONS_IDS.map(id => (
          <button key={id} style={S.pill(activeSection === id)} onClick={() => setActiveSection(id)}>
            {sectionLabel(id)}
          </button>
        ))}
      </nav>

      {/* ══ SECTION 1 : LES 7 MODES ══ */}
      {activeSection === "modes" && (
        <div>
          <h2 style={S.h2}>Les 7 modes de la gamme majeure</h2>
          <p style={S.p}>
            Un mode est simplement la gamme majeure jouée depuis un degré différent.
            En C majeur (Do Ré Mi Fa Sol La Si), si on commence sur D et qu'on joue
            les mêmes notes jusqu'à D, on obtient le mode <strong>dorien</strong>.
            Chaque degré de départ crée une couleur harmonique unique.
          </p>

          <div style={S.infoBox}>
            <strong>Principe fondamental :</strong> tous les modes partagent les mêmes notes —
            c'est la note de départ (la tonique) qui change tout. En déplaçant la tonique,
            on change les intervalles et donc la couleur émotionnelle.
          </div>

          <p style={{ fontSize: 13, color: "#888", marginBottom: 16 }}>
            Cliquez sur un mode pour l'entendre et voir ses détails.
          </p>

          {MODES.map(mode => (
            <div
              key={mode.id}
              onClick={() => {
                setActiveMode(activeMode === mode.id ? null : mode.id);
                handlePlayMode(mode);
              }}
              style={{
                border: `0.5px solid ${activeMode === mode.id ? mode.color : "#e5e5e5"}`,
                borderRadius: 10,
                marginBottom: 8,
                overflow: "hidden",
                cursor: "pointer",
                background: activeMode === mode.id ? mode.bg : "#fff",
                transition: "all .15s",
              }}
            >
              {/* Header mode */}
              <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 16px" }}>
                <div style={{ fontSize: 22, flexShrink: 0 }}>{mode.emoji}</div>
                <div style={{
                  fontSize: 11, fontWeight: 700, color: mode.color,
                  background: mode.bg, border: `0.5px solid ${mode.color}`,
                  padding: "2px 8px", borderRadius: 6, fontFamily: "monospace",
                  flexShrink: 0,
                }}>
                  {mode.degreeLabel}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ fontSize: 14, fontWeight: 500, color: "#111" }}>{mode.name}</span>
                    <span style={{ fontSize: 12, color: "#888" }}>— depuis {mode.rootExample}</span>
                  </div>
                  <div style={{ fontSize: 12, color: "#888", marginTop: 2, fontStyle: "italic" }}>{mode.character.split(".")[0]}</div>
                </div>
                <div style={{ fontSize: 11, color: "#bbb", fontFamily: "monospace", flexShrink: 0 }}>
                  {mode.notes.join(" ")}
                </div>
              </div>

              {/* Détail si sélectionné */}
              {activeMode === mode.id && (
                <div style={{ padding: "0 16px 16px", borderTop: `0.5px solid ${mode.color}20` }}>
                  {/* Structure */}
                  <div style={{ marginTop: 12, marginBottom: 12 }}>
                    <div style={{ fontSize: 11, fontWeight: 600, color: mode.color, marginBottom: 6, textTransform: "uppercase" as const, letterSpacing: "0.08em" }}>
                      Structure
                    </div>
                    <div style={{ fontFamily: "monospace", fontSize: 13, color: "#444", background: "#f8f8f8", padding: "6px 10px", borderRadius: 6 }}>
                      {mode.structure}
                    </div>
                  </div>

                  {/* Note caractéristique */}
                  <div style={{ marginBottom: 12 }}>
                    <div style={{ fontSize: 11, fontWeight: 600, color: mode.color, marginBottom: 4, textTransform: "uppercase" as const, letterSpacing: "0.08em" }}>
                      Note caractéristique
                    </div>
                    <div style={{ fontSize: 13, color: "#444" }}>{mode.alteration}</div>
                  </div>

                  {/* Couleur émotionnelle */}
                  <div style={{ marginBottom: 12 }}>
                    <div style={{ fontSize: 11, fontWeight: 600, color: mode.color, marginBottom: 4, textTransform: "uppercase" as const, letterSpacing: "0.08em" }}>
                      Couleur
                    </div>
                    <div style={{ fontSize: 13, color: "#444", lineHeight: 1.6 }}>{mode.character}</div>
                  </div>

                  {/* Exemples musicaux */}
                  <div style={{ marginBottom: 14 }}>
                    <div style={{ fontSize: 11, fontWeight: 600, color: mode.color, marginBottom: 4, textTransform: "uppercase" as const, letterSpacing: "0.08em" }}>
                      Exemples musicaux
                    </div>
                    <div style={{ fontSize: 13, color: "#185FA5", fontWeight: 500, marginBottom: 4 }}>{mode.famous}</div>
                    <div style={{ fontSize: 13, color: "#555", lineHeight: 1.6 }}>{mode.famousDetail}</div>
                  </div>

                  <button
                    onClick={e => { e.stopPropagation(); handlePlayMode(mode); }}
                    style={{ fontSize: 12, padding: "5px 14px", border: `0.5px solid ${mode.color}`, borderRadius: 20, cursor: "pointer", background: "transparent", color: mode.color }}
                  >
                    ▶ Réécouter {mode.name}
                  </button>
                </div>
              )}
            </div>
          ))}

          {/* Tableau récap */}
          <h3 style={{ fontSize: 14, fontWeight: 500, margin: "24px 0 8px", color: "#111" }}>Récapitulatif</h3>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
              <thead>
                <tr style={{ borderBottom: "0.5px solid #e5e5e5" }}>
                  {["Degré", "Mode", "Couleur", "Altération vs majeur", "Couleur émotionnelle"].map(h => (
                    <th key={h} style={{ textAlign: "left", padding: "6px 10px", fontWeight: 500, color: "#666", whiteSpace: "nowrap" as const }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {MODES.map((m, i) => (
                  <tr key={m.id} style={{ borderBottom: "0.5px solid #f0f0f0", background: i % 2 === 0 ? "#fff" : "#fafafa" }}>
                    <td style={{ padding: "7px 10px", fontFamily: "monospace", color: m.color, fontWeight: 700 }}>{m.degreeLabel}</td>
                    <td style={{ padding: "7px 10px", fontWeight: 500 }}>{m.name} {m.emoji}</td>
                    <td style={{ padding: "7px 10px", color: "#555", fontStyle: "italic" as const }}>
                      {m.id === "ionien" || m.id === "lydien" || m.id === "mixolydien" ? "Majeur" : m.id === "locrien" ? "Dim." : "Mineur"}
                    </td>
                    <td style={{ padding: "7px 10px", fontFamily: "monospace", fontSize: 11, color: "#888" }}>
                      {m.id === "ionien" ? "—" :
                       m.id === "dorien" ? "♭3, ♭7, ♮6" :
                       m.id === "phrygien" ? "♭2, ♭3, ♭6, ♭7" :
                       m.id === "lydien" ? "#4" :
                       m.id === "mixolydien" ? "♭7" :
                       m.id === "eolien" ? "♭3, ♭6, ♭7" :
                       "♭2, ♭3, ♭5, ♭6, ♭7"}
                    </td>
                    <td style={{ padding: "7px 10px", color: "#666", fontSize: 11 }}>{m.character.split(".")[0]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ══ SECTION 2 : HARMONIE MODALE ══ */}
      {activeSection === "harmonie" && (
        <div>
          <h2 style={S.h2}>Harmonie modale — accords et progressions</h2>
          <p style={S.p}>
            Chaque mode génère ses propres accords diatoniques. La couleur harmonique d'un mode
            vient autant de ses accords que de sa gamme — c'est la relation entre la tonique
            et les accords environnants qui crée l'identité modale.
          </p>

          <div style={S.infoBox}>
            <strong>Penser modal vs penser tonal :</strong> en musique tonale, les accords créent
            de la tension et appellent une résolution (SD → D → T). En musique modale, les accords
            établissent une couleur — ils n'appellent pas forcément de résolution. Le mouvement
            Im → IV en dorien n'est pas une cadence, c'est une oscillation colorée.
          </div>

          {/* Accords par mode */}
          <h3 style={{ fontSize: 14, fontWeight: 500, margin: "20px 0 12px", color: "#111" }}>
            Accords caractéristiques par mode
          </h3>

          {MODE_CHORDS.map((mc, i) => {
            const mode = MODES.find(m => m.name === mc.mode)!;
            return (
              <div key={mc.mode} style={{
                border: "0.5px solid #e5e5e5",
                borderRadius: 10,
                marginBottom: 8,
                padding: "14px 16px",
                background: i % 2 === 0 ? "#fff" : "#fafafa",
              }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 12, flexWrap: "wrap" as const }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, minWidth: 120 }}>
                    <span style={{ fontSize: 16 }}>{mode.emoji}</span>
                    <span style={{ fontSize: 14, fontWeight: 500, color: mode.color }}>{mc.mode}</span>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 12, fontFamily: "monospace", color: "#555", marginBottom: 6 }}>
                      {mc.triads}
                    </div>
                    <div style={{ display: "flex", gap: 12, flexWrap: "wrap" as const }}>
                      <div>
                        <span style={{ fontSize: 11, color: "#888" }}>Accord caractéristique : </span>
                        <span style={{ fontSize: 12, fontWeight: 500, color: mode.color, fontFamily: "monospace" }}>{mc.characteristic}</span>
                      </div>
                      <div>
                        <span style={{ fontSize: 11, color: "#888" }}>Progression type : </span>
                        <span style={{ fontSize: 12, fontWeight: 500, color: "#333", fontFamily: "monospace" }}>{mc.progression}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Progressions modales emblématiques */}
          <h3 style={{ fontSize: 14, fontWeight: 500, margin: "24px 0 12px", color: "#111" }}>
            Progressions modales emblématiques
          </h3>

          {[
            {
              mode: "Dorien", emoji: "🌊", color: "#185FA5", bg: "#E6F1FB",
              prog: "Im – IV – Im – IV",
              example: "Dm – G – Dm – G (D dorien)",
              desc: "L'accord IV majeur (G en D dorien) est la marque harmonique du dorien. Im – IV oscille sans résolution — c'est la couleur jazz-modal.",
            },
            {
              mode: "Phrygien", emoji: "🔥", color: "#993C1D", bg: "#FAECE7",
              prog: "Im – ♭II – Im",
              example: "Em – F – Em (E phrygien)",
              desc: "La cadence phrygienne ♭II → Im est l'ADN du flamenco. Le mouvement F → E crée cette tension méditerranéenne unique.",
            },
            {
              mode: "Lydien", emoji: "✨", color: "#6B3FA0", bg: "#F0EAFA",
              prog: "I – II – I",
              example: "F – G – F (F lydien)",
              desc: "La progression I – II en lydien (F – G) est possible grâce au #4. Ce mouvement de seconde montante crée la couleur onirique caractéristique.",
            },
            {
              mode: "Mixolydien", emoji: "🎸", color: "#BA7517", bg: "#FAEEDA",
              prog: "I – ♭VII – IV – I",
              example: "G – F – C – G (G mixolydien)",
              desc: "La progression rock par excellence. Le ♭VII (F en G mixolydien) crée un accord de sous-dominante sans résolution de sensible — énergie pure.",
            },
            {
              mode: "Éolien", emoji: "🌙", color: "#2D4A8A", bg: "#E8EEF8",
              prog: "Im – ♭VI – ♭VII – Im",
              example: "Am – F – G – Am (A éolien)",
              desc: "La progression mineure naturelle la plus courante en pop et rock. Sans sensible, elle ne résout pas — elle oscille dans la mélancolie.",
            },
          ].map(item => (
            <div key={item.mode} style={{
              border: `0.5px solid ${item.color}40`,
              borderRadius: 10,
              marginBottom: 10,
              padding: "14px 16px",
              background: item.bg,
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                <span style={{ fontSize: 18 }}>{item.emoji}</span>
                <span style={{ fontSize: 14, fontWeight: 500, color: item.color }}>{item.mode}</span>
                <span style={{ fontSize: 13, fontFamily: "monospace", color: item.color, background: "white", padding: "2px 8px", borderRadius: 6, border: `0.5px solid ${item.color}` }}>
                  {item.prog}
                </span>
              </div>
              <div style={{ fontSize: 13, fontFamily: "monospace", color: "#444", marginBottom: 6 }}>{item.example}</div>
              <div style={{ fontSize: 13, color: "#555", lineHeight: 1.6 }}>{item.desc}</div>
            </div>
          ))}

          <div style={S.warnBox}>
            <strong>Modal vs Tonal :</strong> en musique tonale, V7 → I est la résolution fondamentale.
            En musique modale, cette résolution est évitée — on préfère des progressions qui
            <em> maintiennent</em> la couleur modale plutôt que de la résoudre. C'est pourquoi
            la musique modale semble parfois "flotter" ou "tourner en rond" — c'est intentionnel.
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
                {quizScore >= 8 ? "Excellent — les modes n'ont plus de secrets !" :
                 quizScore >= 6 ? "Bien — encore quelques écoutes et ce sera parfait." :
                 "Continue à écouter les modes activement — l'oreille s'éduque !"}
              </div>
              <button
                onClick={resetQuiz}
                style={{ fontSize: 13, padding: "8px 20px", border: "0.5px solid #185FA5", borderRadius: 20, cursor: "pointer", background: "#E6F1FB", color: "#185FA5" }}
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
