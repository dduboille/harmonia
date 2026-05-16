"use client";

/**
 * Cours14.tsx
 * Harmonia · Niveau 2 · Cours 14 — L'harmonisation modale
 * Convention : affichage anglais, dotKeys PianoPlayer français
 */

import React, { useRef, useState } from "react";
import { useCoursI18n } from "@/hooks/useCoursI18n";
import { useCoursContent } from "@/hooks/useCoursContent";
import { cours14Content } from "@/data/cours14Content";
import PianoPlayer, { PianoPlayerRef } from "@/components/PianoPlayer";
import MaitreCard from "@/components/MaitreCard";

// ── Audio helpers ─────────────────────────────────────────────────────────────

function playChord(ref: React.RefObject<PianoPlayerRef>, keys: string[], dur = 1.8) {
  keys.forEach(key => {
    const [n, o] = key.split(":");
    ref.current?.playNote(n, parseInt(o), { duration: dur });
  });
}

function playProg(
  ref: React.RefObject<PianoPlayerRef>,
  chords: string[][],
  gapMs = 1600,
  dur = 1.5,
) {
  chords.forEach((chord, i) => {
    setTimeout(() => playChord(ref, chord, dur), i * gapMs);
  });
}

// ── Chord data ────────────────────────────────────────────────────────────────

// Tonal demo: C – F – G7 – C (I–IV–V7–I)
const TONAL_DEMO: string[][] = [
  ["Do:3","Mi:3","Sol:3"],
  ["Fa:3","La:3","Do:4"],
  ["Sol:3","Si:3","Ré:4","Fa:4"],
  ["Do:3","Mi:3","Sol:3"],
];

// Modal demo: Dm – G – Dm – G (D dorien Im–IV–Im–IV)
const DORIAN_DEMO: string[][] = [
  ["Ré:3","Fa:3","La:3"],
  ["Sol:3","Si:3","Ré:4"],
  ["Ré:3","Fa:3","La:3"],
  ["Sol:3","Si:3","Ré:4"],
];

// ── Mode data ─────────────────────────────────────────────────────────────────

interface ModalMode {
  id: string;
  name: string;
  color: string;
  bg: string;
  emoji: string;
  rootKey: string;
  characteristicChord: string;
  progression: string;
  progExample: string;
  avoidChord: string;
  avoidReason: string;
  description: string;
  chords: string[][];
}

const MODAL_MODES: ModalMode[] = [
  {
    id: "dorien",
    name: "Dorien",
    color: "#185FA5",
    bg: "#E6F1FB",
    emoji: "🌊",
    rootKey: "D dorien",
    characteristicChord: "IV majeur — grâce à la 6te majeure (B en D dorien)",
    progression: "Im – IV – Im",
    progExample: "Dm – G – Dm",
    avoidChord: "A7 (V7 en D dorien)",
    avoidReason: "A7 introduit C# — la sensible que le dorien n'a pas (C naturel). Ce C# crée une attraction tonale vers Dm, transformant la couleur modale en mineur harmonique classique.",
    description: "Le dorien se distingue du mineur éolien par son IV majeur — grâce à la 6te majeure. L'oscillation Im–IV sans résolution est la couleur jazz-modal par excellence. So What de Miles Davis tourne sur Dm7–G pendant tout le morceau.",
    chords: [
      ["Ré:3","Fa:3","La:3"],
      ["Sol:3","Si:3","Ré:4"],
      ["Ré:3","Fa:3","La:3"],
    ],
  },
  {
    id: "phrygien",
    name: "Phrygien",
    color: "#993C1D",
    bg: "#FAECE7",
    emoji: "🔥",
    rootKey: "E phrygien",
    characteristicChord: "♭II majeur — la cadence phrygienne",
    progression: "Im – ♭II – Im",
    progExample: "Em – F – Em",
    avoidChord: "B7 (V7 en E phrygien)",
    avoidReason: "B7 introduit D# — une sensible étrangère au phrygien (D naturel). Ce D# crée une résolution tonale vers Em qui efface complètement la couleur méditerranéenne sombre du mode.",
    description: "Le ♭II (F en E phrygien) est l'accord le plus caractéristique de ce mode. La cadence ♭II→Im est l'ADN du flamenco — le mouvement descendant par demi-ton crée une tension unique, très différente de V7→I.",
    chords: [
      ["Mi:3","Sol:3","Si:3"],
      ["Fa:3","La:3","Do:4"],
      ["Mi:3","Sol:3","Si:3"],
    ],
  },
  {
    id: "lydien",
    name: "Lydien",
    color: "#6B3FA0",
    bg: "#F0EAFA",
    emoji: "✨",
    rootKey: "F lydien",
    characteristicChord: "II majeur — grâce au #4 (B naturel en F lydien)",
    progression: "I – II – I",
    progExample: "F – G – F",
    avoidChord: "Bb (IV de F majeur standard)",
    avoidReason: "Bb réintroduit exactement la note que le lydien remplace par B naturel (#4). Jouer Bb efface instantanément la couleur onirique du lydien et fait entendre une gamme majeure standard.",
    description: "La progression I–II en lydien n'existe pas en majeur tonal (II y est mineur). Ici II est majeur grâce au #4 — un mouvement de seconde ascendante majeur–majeur unique, couleur lumineuse et magique utilisée par John Williams dans ses musiques de films.",
    chords: [
      ["Fa:3","La:3","Do:4"],
      ["Sol:3","Si:3","Ré:4"],
      ["Fa:3","La:3","Do:4"],
    ],
  },
  {
    id: "mixolydien",
    name: "Mixolydien",
    color: "#BA7517",
    bg: "#FAEEDA",
    emoji: "🎸",
    rootKey: "G mixolydien",
    characteristicChord: "♭VII majeur — sans résolution de sensible",
    progression: "I – ♭VII – IV – I",
    progExample: "G – F – C – G",
    avoidChord: "D7 (V7 en G mixolydien)",
    avoidReason: "D7 introduit F# — la sensible absente du mixolydien (F naturel). Ce F# crée une tension vers G (résolution tonale) qui brise la couleur cyclique blues/rock du mode.",
    description: "Le mixolydien est la base harmonique du blues et du rock. La progression I–♭VII–IV–I tourne en boucle sans jamais résoudre — énergie perpétuelle. Le ♭VII (F en G mixolydien) est un accord majeur flamboyant qui ancre la couleur.",
    chords: [
      ["Sol:3","Si:3","Ré:4"],
      ["Fa:3","La:3","Do:4"],
      ["Do:3","Mi:3","Sol:3"],
      ["Sol:3","Si:3","Ré:4"],
    ],
  },
  {
    id: "eolien",
    name: "Éolien",
    color: "#2D4A8A",
    bg: "#E8EEF8",
    emoji: "🌙",
    rootKey: "A éolien",
    characteristicChord: "♭VII majeur — sans sensible",
    progression: "Im – ♭VI – ♭VII – Im",
    progExample: "Am – F – G – Am",
    avoidChord: "E7 (V7 en A éolien)",
    avoidReason: "E7 introduit G# — la sensible absente de l'éolien (G naturel). Ce G# appelle impérativement la résolution vers A, transformant le mode en mineur harmonique et brisant la mélancolie naturelle de l'éolien.",
    description: "L'éolien est la gamme mineure naturelle — le mode le plus naturellement modal. Sans sensible, il n'appelle pas de résolution. Im–♭VI–♭VII–Im est la base de centaines de chansons pop et rock mélancoliques (House of the Rising Sun, Losing My Religion...).",
    chords: [
      ["La:3","Do:4","Mi:4"],
      ["Fa:3","La:3","Do:4"],
      ["Sol:3","Si:3","Ré:4"],
      ["La:3","Do:4","Mi:4"],
    ],
  },
];

// ── Quiz ───────────────────────────────────────────────────────────────────────

const ALL_QUESTIONS = [
  // Principes fondamentaux
  { q: "En harmonisation modale, quel est l'objectif principal des accords ?", opts: ["Créer tension et résolution (SD→D→T)", "Maintenir et colorer le mode sans résolution obligatoire", "Toujours finir sur V7→I", "Utiliser les 7 accords diatoniques de manière égale"], a: 1, fb: "En modal, les accords doivent préserver la couleur du mode — pas créer de tension tonale. L'oscillation entre Im et un accord caractéristique suffit ; une résolution V7→I briserait l'identité modale." },
  { q: "Pourquoi faut-il éviter V7→I dans un contexte modal ?", opts: ["V7 est trop dissonant", "V7 introduit la sensible absente du mode, créant une résolution tonale qui efface la couleur modale", "V7 n'existe pas en musique modale", "V7 est réservé aux modes majeurs"], a: 1, fb: "La sensible dans V7 crée une tension irrésistible vers I — c'est le moteur tonal. En modal, on veut éviter cette attraction pour maintenir la couleur flottante du mode." },
  { q: "Quelle est la différence fondamentale entre une harmonisation tonale et modale ?", opts: ["La tonale utilise plus d'accords", "La tonale organise les accords en hiérarchie tension/résolution ; la modale maintient une couleur stable", "La modale n'utilise que des accords mineurs", "La tonale est plus moderne"], a: 1, fb: "Tonal = hiérarchie fonctionnelle (T, SD, D) avec résolution obligatoire. Modal = couleur harmonique stable — les accords oscillent autour de la tonique sans l'appeler de manière impérative." },
  { q: "Comment identifier l'accord caractéristique d'un mode pour l'harmonisation ?", opts: ["C'est toujours l'accord IV", "C'est l'accord construit sur la note distinctive du mode par rapport à la gamme majeure ou mineure standard", "C'est toujours l'accord ♭VII", "C'est le premier accord diatonique"], a: 1, fb: "L'accord caractéristique met en valeur la note distinctive du mode. En dorien : IV majeur (6te majeure). En phrygien : ♭II (2de bémolisée). En lydien : II majeur (#4). En mixolydien : ♭VII (7te mineure)." },
  { q: "Laquelle de ces progressions est modale (pas tonale) ?", opts: ["I – IV – V7 – I", "IIm – V7 – Imaj7", "Im – IV – Im – IV (dorien)", "I – VI – II – V"], a: 2, fb: "Im – IV – Im – IV (D dorien : Dm – G – Dm – G) est une progression modale — elle oscille sans résolution V7→I. Les 3 autres sont des progressions tonales classiques avec un V7 actif vers I." },
  { q: "Qu'est-ce qui maintient la couleur modale dans une harmonisation ?", opts: ["Jouer toujours en mineur", "Utiliser régulièrement l'accord caractéristique du mode et éviter V7→I", "Éviter toute dissonance", "Rester sur un seul accord"], a: 1, fb: "La couleur modale est maintenue par deux éléments : l'utilisation de l'accord caractéristique (qui contient la note distinctive) et l'évitement de V7→I (qui créerait une résolution tonale)." },
  { q: "Comment la musique modale sonne-t-elle comparée à la musique tonale ?", opts: ["La modale 'arrive quelque part' comme la tonale", "La modale 'reste quelque part' — elle flotte et colore plutôt qu'elle ne progresse", "La modale est toujours plus rapide", "La modale utilise plus de dissonances"], a: 1, fb: "La musique tonale crée un sentiment de direction et d'arrivée (tension → résolution). La musique modale crée un sentiment de suspension, de couleur stable — elle 'est' quelque part plutôt qu'elle n'y 'arrive'." },
  { q: "En modal, que remplace fonctionnellement l'accord caractéristique du mode ?", opts: ["L'accord de sous-dominante", "La dominante V7 — il apporte de l'intérêt harmonique sans créer de résolution tonale", "La tonique", "L'accord de sixte napolitaine"], a: 1, fb: "L'accord caractéristique (IV en dorien, ♭II en phrygien…) est le point d'intérêt harmonique du mode — il évite la monotonie d'un accord unique, mais sans l'attraction directionnelle de V7." },

  // Dorien
  { q: "Quelle progression caractérise l'harmonisation en mode dorien ?", opts: ["Im – ♭II – Im", "Im – IV – Im", "I – ♭VII – IV – I", "Im – ♭VI – ♭VII – Im"], a: 1, fb: "Im – IV en dorien (ex. Dm – G en D dorien) est la progression modale fondamentale. IV est majeur grâce à la 6te majeure — c'est la couleur jazz-modal de So What de Miles Davis." },
  { q: "En D dorien, quel accord est IV et pourquoi est-il caractéristique ?", opts: ["Gm — il rappelle le mineur naturel", "G majeur — la 6te majeure (B naturel) le rend majeur", "G7 — il crée de la tension", "Gdim — il est instable"], a: 1, fb: "En D dorien : D E F G A B C. Sur G : G B D = G majeur. Le B naturel (6te majeure) rend cet accord majeur. En D mineur naturel, IV serait Gm — c'est cette différence qui fait la couleur dorienne." },
  { q: "Quel accord faut-il éviter en harmonisation dorienne ?", opts: ["IV majeur (G en D dorien)", "V7 (A7 en D dorien)", "♭III (F en D dorien)", "♭VII (C en D dorien)"], a: 1, fb: "A7 (V7 en D dorien) introduit C# — la sensible que le dorien n'a pas (C naturel). Ce C# crée une attraction tonale vers Dm qui brise la couleur modale et transforme le dorien en mineur harmonique." },
  { q: "Quelle pièce de Miles Davis est l'exemple modal dorien par excellence ?", opts: ["Kind of Blue — All Blues", "So What (D dorien)", "Round Midnight", "Autumn Leaves"], a: 1, fb: "So What (1959) est entièrement en D dorien. Miles Davis et Bill Evans construisent l'harmonie sur Dm7–G (Im–IV), sans jamais appeler de résolution tonale — c'est l'archétype du jazz modal." },
  { q: "En harmonisation dorienne, Im – IV crée :", opts: ["Une tension qui demande résolution", "Une oscillation colorée sans résolution", "Une cadence parfaite", "Un mouvement de sous-dominante vers dominante"], a: 1, fb: "Im – IV en dorien (Dm – G) oscille entre deux accords sans hiérarchie fonctionnelle. Pas de tension qui appelle résolution — c'est une couleur qui se maintient, flotte, respire." },
  { q: "En G dorien, quel accord est IV ?", opts: ["Cm (C mineur)", "C majeur", "Cdim", "C7"], a: 1, fb: "G dorien : G A Bb C D E F. Sur C : C E G = C majeur. La 6te majeure du dorien (E naturel au lieu de Eb) rend cet accord IV majeur — la marque harmonique du mode dorien." },
  { q: "La Bossa Nova utilise souvent le dorien car :", opts: ["Le dorien est uniquement brésilien", "La 6te majeure du dorien crée une couleur sophistiquée mi-sombre mi-lumineuse, parfaite pour la saudade", "Le dorien est le plus simple des modes", "La Bossa Nova évite les accords majeurs"], a: 1, fb: "La saudade brésilienne — mélancolie douce et lumineuse — trouve dans le dorien son expression harmonique parfaite. La 6te majeure empêche IV d'être sombre (Gm) — il reste lumineux (G), créant l'équilibre entre ombre et lumière." },

  // Phrygien
  { q: "Quelle est la cadence caractéristique du mode phrygien ?", opts: ["V7 – I", "IV – I", "♭II – Im (cadence phrygienne)", "♭VII – I"], a: 2, fb: "La cadence phrygienne ♭II→Im (ex. F→Em en E phrygien) est l'ADN harmonique du flamenco. Le mouvement descendant par demi-ton crée une tension unique différente de V7→I." },
  { q: "En E phrygien, quel accord est ♭II ?", opts: ["D majeur", "F majeur", "Eb majeur", "B majeur"], a: 1, fb: "E phrygien : E F G A B C D. Le ♭II est construit sur F : F A C = F majeur. La 2de bémolisée du phrygien (F au lieu de F#) crée cet accord très caractéristique." },
  { q: "Pourquoi le mouvement F→Em (en E phrygien) est-il si expressif ?", opts: ["F est une quarte de Em", "C'est un mouvement descendant par demi-ton — le plus serré de tous les intervalles", "F est la dominante de Em", "C'est un triton"], a: 1, fb: "F→E est un demi-ton descendant — l'intervalle le plus petit et le plus tendu. Ce mouvement ♭II→Im crée une attraction puissante par proximité chromatique, très différente de la résolution tonale V7→I." },
  { q: "Quel genre musical utilise principalement la cadence phrygienne ?", opts: ["Blues américain", "Jazz modal", "Flamenco espagnol", "Gospel"], a: 2, fb: "Le flamenco espagnol est fondé sur la cadence phrygienne ♭II→Im et ses variations. La couleur sombre et méditerranéenne du phrygien — avec sa 2de bémolisée — est l'identité sonore de la musique andalouse." },
  { q: "En harmonisation phrygienne, quel accord faut-il éviter ?", opts: ["♭II (F en E phrygien)", "Im (Em)", "V7 (B7 en E phrygien)", "♭VII (D en E phrygien)"], a: 2, fb: "B7 (V7 en E phrygien) introduit D# — une sensible étrangère au phrygien (D naturel). Ce D# crée une résolution tonale vers Em, effaçant la couleur phrygienne." },
  { q: "En A phrygien, quel accord est ♭II ?", opts: ["G majeur", "Bb majeur", "B majeur", "Ab majeur"], a: 1, fb: "A phrygien : A Bb C D E F G. Le ♭II est construit sur Bb : Bb D F = Bb majeur. La 2de bémolisée (Bb au lieu de B) crée cet accord caractéristique du phrygien." },
  { q: "La couleur 'sombre et méditerranéenne' est associée à quel mode ?", opts: ["Dorien", "Lydien", "Phrygien", "Éolien"], a: 2, fb: "Le phrygien est le mode de la méditerranée — sa 2de bémolisée et la cadence ♭II→Im créent une couleur sombre, intense, dramatique. C'est l'identité sonore du flamenco et de la musique espagnole." },

  // Lydien
  { q: "Quelle progression caractérise l'harmonisation en mode lydien ?", opts: ["Im – ♭II – Im", "Im – IV – Im", "I – II – I", "I – ♭VII – IV – I"], a: 2, fb: "I – II en lydien (ex. F – G en F lydien) est la progression caractéristique. Le II est majeur grâce au #4 — un mouvement de seconde montante majeur–majeur impossible en gamme majeure standard (où II est mineur)." },
  { q: "Pourquoi l'accord II est-il majeur en mode lydien ?", opts: ["Car le lydien est un mode mineur", "Car le #4 (4te augmentée) du lydien est dans l'accord II", "Car II est toujours majeur en modal", "Car le lydien est issu du IVe degré"], a: 1, fb: "En F lydien : F G A B C D E. Sur G (II) : G B D = G majeur. Le B naturel (#4 du lydien) est la tierce de G — il rend l'accord II majeur. En F majeur standard, II serait Gm (avec Bb)." },
  { q: "Quel compositeur de musiques de films utilise abondamment le lydien pour évoquer le merveilleux ?", opts: ["Ennio Morricone", "John Williams", "Hans Zimmer", "Bernard Herrmann"], a: 1, fb: "John Williams utilise le lydien dans E.T., Superman et ses musiques magiques. Le #4 crée une couleur lumineuse et onirique — la 4te augmentée évite la stabilité parfaite de la gamme majeure et fait 'flotter' la musique." },
  { q: "En F lydien, quel accord faut-il éviter pour préserver la couleur ?", opts: ["G majeur (II)", "Bb (IV de F majeur standard)", "Am (IIIm)", "C (V)"], a: 1, fb: "Bb réintroduit exactement la note que le lydien remplace par B naturel (#4). Jouer Bb efface instantanément la couleur lydienne et fait entendre une gamme majeure standard." },
  { q: "En C lydien, quel accord est II ?", opts: ["Dm", "D majeur", "Ddim", "D7"], a: 1, fb: "C lydien : C D E F# G A B. Sur D : D F# A = D majeur. Le F# (#4 du lydien) est la tierce de D — il rend l'accord II majeur et révèle le mode à l'oreille." },
  { q: "La couleur 'lumineuse et onirique' est associée à quel mode ?", opts: ["Éolien", "Phrygien", "Mixolydien", "Lydien"], a: 3, fb: "Le lydien avec son #4 crée une couleur lumineuse et onirique. La 4te augmentée évite la stabilité parfaite de la gamme majeure — elle flotte, elle brille. C'est le mode de l'émerveillement et de la magie." },
  { q: "Le thème principal des Simpsons commence par un :", opts: ["Saut de phrygien (♭2)", "Triton ascendant lydien (fondamentale vers #4)", "Accord de dominante", "Mouvement éolien (♭VII)"], a: 1, fb: "Le thème des Simpsons commence par un saut ascendant vers le #4 lydien — le triton F→B en F lydien. C'est ce #4 légèrement bizarre qui crée cette couleur si reconnaissable." },

  // Mixolydien
  { q: "Quelle progression est typique du mode mixolydien ?", opts: ["Im – IV – Im", "Im – ♭VI – ♭VII – Im", "I – ♭VII – IV – I", "I – II – I"], a: 2, fb: "I – ♭VII – IV – I (ex. G – F – C – G en G mixolydien) est la progression rock/blues par excellence. Le ♭VII (F) crée un mouvement de retour sans résolution de sensible." },
  { q: "En G mixolydien, quel accord est ♭VII ?", opts: ["F# majeur", "F mineur", "F majeur", "Fdim"], a: 2, fb: "G mixolydien : G A B C D E F. Le ♭VII est construit sur F : F A C = F majeur. La 7te mineure (F au lieu de F#) rend cet accord majeur — c'est la marque harmonique du mixolydien." },
  { q: "Pourquoi évite-t-on V7 en harmonisation mixolydienne ?", opts: ["V7 est trop simple", "V7 introduit la sensible (F# en G mixolydien) absente du mode, créant une résolution vers G", "V7 crée une quinte parallèle", "V7 change le mode en lydien"], a: 1, fb: "En G mixolydien, F est ♭7 (note caractéristique). D7 (V7) introduit F# — la sensible qui n'existe pas dans le mode. Ce F# crée une tension vers G (résolution tonale) qui brise la couleur cyclique du mixolydien." },
  { q: "Quel style musical est harmoniquement basé sur le mode mixolydien ?", opts: ["Musique baroque", "Flamenco espagnol", "Blues et rock", "Musique romantique"], a: 2, fb: "Le blues et le rock utilisent principalement le mixolydien. L'accord I7 du blues (avec 7te mineure) est l'accord du mixolydien. La progression I7–IV7–V7 du blues est fondamentalement mixolydienne." },
  { q: "Norwegian Wood des Beatles est en quel mode ?", opts: ["Dorien", "Phrygien", "Éolien", "Mixolydien"], a: 3, fb: "Norwegian Wood (1965) est en E mixolydien. La 7te mineure (D naturel au lieu de D#) dans la mélodie et l'harmonie donne cette couleur modale caractéristique — majeur mais non résolu." },
  { q: "En D mixolydien, quel accord est ♭VII ?", opts: ["C# majeur", "C mineur", "C majeur", "Cdim"], a: 2, fb: "D mixolydien : D E F# G A B C. Sur C : C E G = C majeur. La 7te mineure (C au lieu de C#) est la note caractéristique du mixolydien — et cet accord ♭VII majeur en est la signature harmonique." },
  { q: "La couleur 'énergique et cyclique sans résolution' est associée à quel mode ?", opts: ["Ionien", "Dorien", "Éolien", "Mixolydien"], a: 3, fb: "Le mixolydien crée une énergie perpétuelle — la progression I–♭VII–IV–I tourne sans jamais vraiment 'arriver'. La 7te mineure empêche la résolution vers I tout en gardant la couleur majeure. C'est l'essence du blues et du rock." },

  // Éolien
  { q: "Quelle progression est typique du mode éolien ?", opts: ["Im – IV – Im", "Im – ♭II – Im", "I – ♭VII – IV – I", "Im – ♭VI – ♭VII – Im"], a: 3, fb: "Im – ♭VI – ♭VII – Im (ex. Am – F – G – Am en A éolien) est la progression mineure naturelle la plus répandue en pop et rock. Elle oscille sans sensible, créant une mélancolie douce et naturelle." },
  { q: "En A éolien, pourquoi ♭VII est-il G majeur ?", opts: ["Car G est la quinte de C", "Car en A éolien (A B C D E F G), l'accord sur G est G B D = G majeur", "Car G est toujours majeur en mineur", "Car G est la tonique relative"], a: 1, fb: "A éolien : A B C D E F G. Sur G (♭VII) : G B D = G majeur. Le B naturel dans G donne un accord majeur lumineux sur le ♭VII — c'est lui qui empêche la couleur d'être trop sombre." },
  { q: "Comment l'éolien se distingue-t-il harmoniquement du mineur harmonique ?", opts: ["L'éolien a une tierce majeure", "L'éolien n'a pas de sensible — son V est Vm (mineur), pas V7", "L'éolien n'a pas de IVe degré", "L'éolien utilise l'accord napolitain"], a: 1, fb: "En éolien, V = Em (mineur, sans sensible). En mineur harmonique, V = E7 (avec G# sensible). Cette sensible crée la résolution tonale. L'éolien évite cette tension — plus naturel, moins dirigé." },
  { q: "La progression Am – F – G – Am est typiquement :", opts: ["Tonale (mineur harmonique)", "Modale (éolien naturel)", "Tonale (majeur)", "Pentatonique"], a: 1, fb: "Am – F – G – Am est purement éolienne — sans E7 (V7). G (♭VII) et F (♭VI) sont caractéristiques du mineur naturel/éolien. C'est la progression de House of the Rising Sun, Losing My Religion..." },
  { q: "En A éolien, quel problème pose E7 (V7) ?", opts: ["Il est trop grave", "Il introduit G# — la sensible absente de l'éolien — créant une résolution tonale vers Am", "Il crée une quinte parallèle", "Il force le passage en lydien"], a: 1, fb: "E7 contient G# — la sensible que l'éolien n'a pas (G naturel). Ce G# appelle impérativement la résolution vers A, transformant le mode en mineur harmonique et brisant la mélancolie naturelle de l'éolien." },
  { q: "En E éolien, quel accord est ♭VII ?", opts: ["D# majeur", "D mineur", "D majeur", "Ddim"], a: 2, fb: "E éolien : E F# G A B C D. Sur D : D F# A = D majeur. Le D naturel (♭7) rend l'accord ♭VII majeur — sa présence caractérise harmoniquement le mode éolien et distingue sa couleur du mineur harmonique." },
  { q: "Stairway to Heaven de Led Zeppelin utilise principalement :", opts: ["Le mode lydien", "Le mode mixolydien", "Le mode éolien (mineur naturel)", "Le mode phrygien"], a: 2, fb: "Stairway to Heaven s'appuie sur A mineur naturel (A éolien) — la progression Am – G – F caractéristique. La mélancolie introspective du mineur naturel sans sensible est typiquement éolienne." },

  // Applications comparatives
  { q: "Un accord IV majeur dans un contexte mineur indique probablement quel mode ?", opts: ["Mineur harmonique", "Mode dorien", "Mode phrygien", "Mode locrien"], a: 1, fb: "IV majeur dans un contexte mineur est la signature harmonique du dorien. En mineur naturel (éolien), IV serait mineur. La présence d'un IV majeur (ex. G en D mineur) signale la 6te majeure dorienne." },
  { q: "Un accord ♭II dans un contexte mineur indique probablement quel mode ?", opts: ["Mode dorien", "Mineur harmonique", "Mode phrygien", "Mode éolien"], a: 2, fb: "♭II dans un contexte mineur est la signature du phrygien. L'accord bâti sur la 2de bémolisée (ex. F en E phrygien) est unique à ce mode — aucun autre mode mineur ne le possède naturellement." },
  { q: "Un accord ♭VII majeur dans un contexte majeur indique probablement quel mode ?", opts: ["Mode lydien", "Mode ionien", "Mode mixolydien", "Mode dorien"], a: 2, fb: "♭VII majeur dans un contexte majeur est la signature du mixolydien. En gamme majeure standard, ♭VII n'existe pas (le VIIe degré est diminué). La présence de ♭VII majeur (ex. F en G majeur) signale la 7te mineure mixolydienne." },
  { q: "Quelle est la différence entre Im–IV (dorien) et Im–Vm (éolien) ?", opts: ["Im–IV est plus fort dynamiquement", "Im–IV utilise IV majeur (dorien, 6te majeure) ; Im–Vm utilise V mineur (éolien, 6te mineure)", "Im–Vm est une cadence parfaite", "Il n'y a pas de différence"], a: 1, fb: "La différence est la 6te du mode. Dorien : 6te majeure → IV est majeur (G en D dorien). Éolien : 6te mineure → Vm est mineur (Em en A éolien). Ces deux accords créent une couleur radicalement différente." },
  { q: "Quelle progression est la plus tonale parmi ces options ?", opts: ["Dm – G – Dm (Im–IV dorien)", "Em – F – Em (♭II phrygien)", "Am – Dm – E7 – Am", "G – F – C – G (mixolydien)"], a: 2, fb: "Am – Dm – E7 – Am contient E7 (V7) qui introduit G# (sensible) et résout tonalement vers Am — c'est du mineur harmonique, pas du modal. Les 3 autres évitent V7→I et maintiennent une couleur modale." },
  { q: "Pour harmoniser une mélodie rock avec un riff G – F – C – G, le mode est :", opts: ["Ionien (G majeur)", "Dorien", "Mixolydien (G mixolydien)", "Lydien"], a: 2, fb: "G – F – C – G = I – ♭VII – IV – I en G mixolydien. Le F (♭VII) n'existe pas en G majeur standard (F# y est naturel). La présence de F naturel confirme le G mixolydien — mode du blues et du rock." },
  { q: "Pour harmoniser une mélodie de flamenco, quel mode choisir ?", opts: ["Dorien (Im–IV)", "Phrygien (Im–♭II)", "Mixolydien (I–♭VII)", "Éolien (Im–♭VI–♭VII)"], a: 1, fb: "Le flamenco utilise le mode phrygien. La cadence ♭II→Im (ex. F→Em en E phrygien) est l'ADN harmonique du flamenco — la couleur sombre et méditerranéenne vient directement de la 2de bémolisée." },
  { q: "So What de Miles Davis (1959) est harmonisé avec :", opts: ["Des accords phrygiens", "Des accords doriens (Dm7–G)", "Des accords mixolydiens", "Des accords lydiens"], a: 1, fb: "So What est en D dorien. Miles Davis utilise l'oscillation Dm7 – G (Im – IV en dorien) — pas de V7→I. La couleur jazz-modal vient de ce IV majeur (G) dans un contexte mineur (Dm)." },
  { q: "Une harmonisation modale typique :", opts: ["Contient toujours V7→I", "Évite V7→I et utilise l'accord caractéristique du mode de manière répétée", "N'utilise que des accords mineurs", "Module vers la relative majeure"], a: 1, fb: "Une harmonisation modale repose sur : éviter V7→I (résolution tonale) et utiliser régulièrement l'accord caractéristique (IV en dorien, ♭II en phrygien, etc.) qui révèle la couleur du mode." },

  // Accords caractéristiques
  { q: "Quel est l'accord caractéristique du mode éolien ?", opts: ["IV majeur", "♭II majeur", "♭VII majeur (sans sensible)", "II majeur"], a: 2, fb: "♭VII majeur distingue harmoniquement l'éolien du mineur harmonique. En A éolien : G majeur (♭VII). L'absence de sensible (G au lieu de G#) est la marque de l'éolien naturel." },
  { q: "Quel accord est unique au mode lydien parmi les modes majeurs ?", opts: ["IV majeur", "V dominant", "II majeur", "♭VII majeur"], a: 2, fb: "II majeur n'existe qu'en lydien parmi les modes de la gamme majeure. En ionien et mixolydien, II est mineur. En lydien, le #4 rend II majeur — c'est l'accord qui 'trahit' le mode à l'oreille." },
  { q: "En mode phrygien, quel accord n'appartient PAS au mode ?", opts: ["Im (Em en E phrygien)", "♭II (F en E phrygien)", "V7 (B7 en E phrygien)", "♭VII (D en E phrygien)"], a: 2, fb: "B7 contient D# — la sensible absente du phrygien (D naturel). Cet accord est 'étranger' au mode : il brise la couleur phrygienne en créant une attraction tonale vers Em." },
  { q: "Comparer dorien et éolien : quelle est l'unique note différente ?", opts: ["La 3ce (majeure vs mineure)", "La 6te (majeure en dorien, mineure en éolien)", "La 5te (juste vs diminuée)", "La 2de (majeure vs bémolisée)"], a: 1, fb: "Dorien et éolien ont les mêmes degrés sauf la 6te : dorien a une 6te majeure (B en D dorien), éolien a une 6te mineure (Bb en D éolien). Cette seule note change l'accord IV de Gm à G majeur — toute la couleur en découle." },
  { q: "Comparer mixolydien et ionien : quelle est l'unique note différente ?", opts: ["La 3ce (majeure vs mineure)", "La 4te (juste vs augmentée)", "La 7te (majeure en ionien, mineure en mixolydien)", "La 5te (juste vs diminuée)"], a: 2, fb: "Mixolydien = ionien avec ♭7. En G majeur : F# devient F naturel. Cette seule altération transforme l'accord VII de F#dim en F majeur (♭VII) — et crée la couleur blues/rock sans résolution." },

  // Questions avancées
  { q: "Pourquoi la musique modale semble-t-elle parfois 'flotter' ou 'tourner en rond' ?", opts: ["Car les musiciens jouent mal les transitions", "Car il n'y a pas de résolution tonale obligatoire — les accords oscillent plutôt qu'ils ne progressent", "Car le tempo est trop lent", "Car les modes n'ont pas de tonique"], a: 1, fb: "La musique tonale crée direction et arrivée (tension → résolution). La musique modale crée suspension, couleur stable — les accords oscillent autour de la tonique sans l'appeler de manière impérative. C'est voulu." },
  { q: "Les progressions d'accords parallèles de Debussy sont-elles tonales ou modales ?", opts: ["Tonales — technique classique", "Modales — les accords colorent le mode sans rôle fonctionnel", "Atonales — pas de tonalité", "Pentatoniques"], a: 1, fb: "Les accords parallèles de Debussy sont une technique modale : les accords ne créent pas de tension fonctionnelle (SD→D→T), ils se déplacent comme des blocs de couleur — libération des contraintes du contrepoint tonal." },
  { q: "Dans quelle œuvre de Debussy l'influence modale est-elle la plus évidente ?", opts: ["Clair de Lune (mineur classique)", "La Cathédrale engloutie (modes médiévaux et accords parallèles)", "Nocturnes de Chopin (romantique)", "Symphonie de Franck"], a: 1, fb: "La Cathédrale engloutie (1910) utilise des modes médiévaux (lydien, mixolydien) et des accords parallèles pour évoquer la cathédrale sous les eaux — l'exemple parfait de l'harmonie modale impressionniste." },
  { q: "Quel élément harmonique permet d'identifier un mode à l'oreille ?", opts: ["La vitesse de la progression", "L'accord caractéristique — l'accord qui contient la note distinctive du mode", "Le nombre d'accords utilisés", "Le registre de la mélodie"], a: 1, fb: "L'accord caractéristique 'révèle' le mode. Dorien : IV majeur. Phrygien : ♭II. Lydien : II majeur. Mixolydien : ♭VII. Éolien : ♭VII sans sensible. C'est lui qu'on entend comme 'la couleur' du mode." },
  { q: "La progression I7 – IV7 – V7 du blues sur 12 mesures est :", opts: ["Tonale (mineur harmonique)", "Modale (mixolydienne)", "Atonale", "Modale (dorienne)"], a: 1, fb: "Le blues est fondamentalement mixolydien : chaque accord (I, IV, V) a une 7te mineure, aucun ne résout vers l'autre de manière tonale. C'est un système circulaire qui tourne, pas une progression vers une résolution finale." },
  { q: "En modal, une 'pédale' est :", opts: ["Un accord très grave", "Une note tenue à la basse sous laquelle la mélodie change de couleur", "Un accord diminué", "Un accord de dominante"], a: 1, fb: "Une pédale (note ou accord tenu) maintient une couleur fixe pendant que la mélodie explore le mode. C'est une technique modale classique — l'accord ne change pas fonctionnellement, il établit un centre coloristique stable." },
  { q: "Oye Como Va de Santana est en quel mode ?", opts: ["Phrygien", "Lydien", "Dorien", "Éolien"], a: 2, fb: "Oye Como Va est en A dorien. La progression Am–D (Im–IV) est typiquement dorienne — l'accord IV (D majeur) révèle la 6te majeure (F#) du mode. Carlos Santana est l'un des maîtres du son dorien." },
  { q: "Quelle est la signature harmonique du dorien par rapport au phrygien ?", opts: ["Le dorien a ♭II ; le phrygien a IV majeur", "Le dorien a IV majeur ; le phrygien a ♭II", "Les deux ont le même accord caractéristique", "Le dorien a ♭VII ; le phrygien a #IV"], a: 1, fb: "Dorien : l'accord caractéristique est IV majeur (grâce à la 6te majeure). Phrygien : l'accord caractéristique est ♭II (grâce à la 2de bémolisée). Ces deux accords 'trahissent' immédiatement le mode à l'oreille." },
  { q: "Dans quelle harmonisation Am – G – F – E7 y a-t-il une 'sortie' du mode éolien ?", opts: ["Am – G", "G – F", "F – E7", "E7 est la sortie : V7 avec sensible G# absente de l'éolien"], a: 3, fb: "E7 (V7) introduit G# — la sensible absente de A éolien (G naturel). Cet accord brise la couleur modale éolienne et transforme temporairement le contexte en mineur harmonique, créant une résolution tonale vers Am." },
  { q: "Parmi ces descriptions, laquelle correspond à une harmonisation dorienne ?", opts: ["Sombre et tendue, avec V7→Im", "Mi-mineure mi-lumineuse, avec IV majeur caractéristique et sans V7→I", "Lumineuse et flottante, avec II majeur", "Cyclique et blues, avec ♭VII–IV"], a: 1, fb: "Le dorien est mi-mineur (Im, 3ce mineure) mi-lumineux (IV majeur, 6te majeure). Cette ambiguïté est sa couleur — ni trop sombre ni trop clair. L'absence de V7→I maintient la flottaison modale." },
  { q: "Quels modes sont dits 'majeurs' (tierce majeure) ?", opts: ["Ionien, Lydien, Mixolydien", "Dorien, Éolien, Phrygien", "Ionien, Dorien, Phrygien", "Lydien, Éolien, Locrien"], a: 0, fb: "Ionien (I), Lydien (IV) et Mixolydien (V) ont une tierce majeure — ce sont les modes 'majeurs'. Les 4 autres (Dorien, Phrygien, Éolien, Locrien) ont une tierce mineure." },
  { q: "Quel mode est le plus difficile à utiliser comme centre tonal stable ?", opts: ["Dorien", "Phrygien", "Éolien", "Locrien"], a: 3, fb: "Le locrien a une tonique diminuée — la quinte entre la fondamentale et la quinte est bémolisée (ex. B–F en B locrien, un triton). Cet accord de tonique est si instable qu'il est presque impossible d'établir le locrien comme centre tonal." },
  { q: "Quelle est la différence entre 'Dm en ré mineur tonal' et 'Dm en D dorien' ?", opts: ["Aucune — c'est le même accord", "En ré mineur, IV est Gm ; en D dorien, IV est G majeur — la couleur harmonique est totalement différente", "En dorien, Im est majeur", "En ré mineur, la tonique est Do"], a: 1, fb: "Dm existe dans les deux, mais l'environnement harmonique diffère. En D mineur naturel : IV = Gm (avec Bb). En D dorien : IV = G majeur (avec B naturel). Ce seul accord change complètement la couleur du mode." },
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
const SECTIONS_IDS = ["principes", "modes", "quiz"] as const;
type SectionId = typeof SECTIONS_IDS[number];

const PRIMARY    = "#1A6B7A";
const PRIMARY_BG = "#E3F4F7";

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
  p:        { fontSize: 14, color: "#555", lineHeight: 1.75, marginBottom: "1rem" } as React.CSSProperties,
  infoBox:  { borderLeft: `2px solid ${PRIMARY}`, padding: "8px 14px", background: PRIMARY_BG, borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#0C5060", lineHeight: 1.6 } as React.CSSProperties,
  warnBox:  { borderLeft: "2px solid #BA7517", padding: "8px 14px", background: "#FAEEDA", borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#633806", lineHeight: 1.6 } as React.CSSProperties,
};

export default function Cours14() {
  const [activeSection, setActiveSection] = useState<SectionId>("principes");
  const i18n = useCoursI18n("cours14");
  const { questions: ALL_QUESTIONS } = useCoursContent(cours14Content);
  const [activeMode, setActiveMode] = useState<string | null>(null);

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
    if (id === "principes") return "Harmonisation modale";
    if (id === "modes") return "Par mode";
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
        <span style={S.badge}>Niveau 2 · Cours 14</span>
        <h1 style={S.h1}>L'harmonisation modale</h1>
        <p style={S.subtitle}>{i18n.subtitle}</p>
      </div>

      <MaitreCard
        composer="Claude Debussy"
        period="1862–1918"
        emoji="🌊"
        concept="Harmonie modale"
        anecdote="Debussy rompt avec l'harmonie tonale en utilisant des modes médiévaux, des gammes pentatoniques et des accords parallèles. Dans La Cathédrale engloutie (1910), des blocs d'accords se déplacent ensemble sans résolution fonctionnelle. Il dira : 'J'entends des couleurs, pas des fonctions.'"
        lesson="Les accords ne sont pas des fonctions (T, SD, D) — ils sont des couleurs. En modal, on peint avec des accords plutôt qu'on ne les enchaîne en direction."
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

      {/* ══ SECTION 1 : PRINCIPES ══ */}
      {activeSection === "principes" && (
        <div>
          <h2 style={S.h2}>Harmonisation modale vs tonale</h2>
          <p style={S.p}>
            En harmonie tonale, les accords ont des <strong>fonctions</strong> : Tonique (T),
            Sous-dominante (SD), Dominante (D). La progression SD→D→T crée tension et résolution.
            En harmonie modale, les accords ont des <strong>couleurs</strong> : ils oscillent autour
            de la tonique et maintiennent la couleur du mode — sans résolution obligatoire.
          </p>

          {/* Tableau comparatif */}
          <div style={{ overflowX: "auto", marginBottom: "1.5rem" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ borderBottom: "0.5px solid #e5e5e5" }}>
                  <th style={{ textAlign: "left", padding: "8px 12px", fontWeight: 500, color: "#666" }}> </th>
                  <th style={{ textAlign: "left", padding: "8px 12px", fontWeight: 500, color: "#BA7517" }}>Tonal</th>
                  <th style={{ textAlign: "left", padding: "8px 12px", fontWeight: 500, color: PRIMARY }}>Modal</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Objectif", "Créer tension → résolution", "Maintenir une couleur modale"],
                  ["Progression type", "II–V7–I (ou IV–V7–I)", "Im–IV (dorien) / Im–♭II–Im (phrygien)"],
                  ["Rôle des accords", "Fonctionnel (T / SD / D)", "Coloristique (caractéristique du mode)"],
                  ["V7→I", "Essentiel — résolution obligatoire", "Évité — brise la couleur modale"],
                  ["Sentiment à l'écoute", "'Arrive quelque part'", "'Reste quelque part'"],
                  ["Accord clé", "Dominante V7 (tension)", "Accord caractéristique du mode"],
                ].map(([aspect, tonal, modal], i) => (
                  <tr key={aspect} style={{ borderBottom: "0.5px solid #f0f0f0", background: i % 2 === 0 ? "#fff" : "#fafafa" }}>
                    <td style={{ padding: "8px 12px", fontWeight: 500, color: "#444", fontSize: 12 }}>{aspect}</td>
                    <td style={{ padding: "8px 12px", color: "#633806", fontSize: 12 }}>{tonal}</td>
                    <td style={{ padding: "8px 12px", color: "#0C5060", fontSize: 12 }}>{modal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={S.infoBox}>
            <strong>Règle d'or :</strong> pour maintenir la couleur modale, utilise régulièrement
            l'accord caractéristique du mode (celui qui contient la note distinctive) et
            évite V7→I (qui introduit la sensible absente du mode et crée une résolution tonale).
          </div>

          {/* Comparaison audio */}
          <h3 style={{ fontSize: 14, fontWeight: 500, margin: "20px 0 10px", color: "#111" }}>
            Écouter la différence
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: "1.5rem" }}>
            <div style={{ border: "0.5px solid #BA7517", borderRadius: 10, padding: "14px 16px", background: "#FAEEDA" }}>
              <div style={{ fontSize: 13, fontWeight: 500, color: "#BA7517", marginBottom: 6 }}>Tonal — C majeur</div>
              <div style={{ fontFamily: "monospace", fontSize: 12, color: "#444", marginBottom: 4 }}>C – F – G7 – C</div>
              <div style={{ fontSize: 12, color: "#888", marginBottom: 10, lineHeight: 1.5 }}>
                I – IV – V7 – I : tension sur G7, résolution vers C.
              </div>
              <button
                onClick={() => playProg(pianoRef as React.RefObject<PianoPlayerRef>, TONAL_DEMO, 1600, 1.5)}
                style={{ fontSize: 12, padding: "5px 12px", border: "0.5px solid #BA7517", borderRadius: 20, cursor: "pointer", background: "transparent", color: "#BA7517" }}
              >
                ▶ Écouter
              </button>
            </div>
            <div style={{ border: `0.5px solid ${PRIMARY}`, borderRadius: 10, padding: "14px 16px", background: PRIMARY_BG }}>
              <div style={{ fontSize: 13, fontWeight: 500, color: PRIMARY, marginBottom: 6 }}>Modal — D dorien</div>
              <div style={{ fontFamily: "monospace", fontSize: 12, color: "#444", marginBottom: 4 }}>Dm – G – Dm – G</div>
              <div style={{ fontSize: 12, color: "#888", marginBottom: 10, lineHeight: 1.5 }}>
                Im – IV – Im – IV : oscillation colorée, pas de résolution.
              </div>
              <button
                onClick={() => playProg(pianoRef as React.RefObject<PianoPlayerRef>, DORIAN_DEMO, 1400, 1.5)}
                style={{ fontSize: 12, padding: "5px 12px", border: `0.5px solid ${PRIMARY}`, borderRadius: 20, cursor: "pointer", background: "transparent", color: PRIMARY }}
              >
                ▶ Écouter
              </button>
            </div>
          </div>

          {/* Tableau récap accords caractéristiques */}
          <h3 style={{ fontSize: 14, fontWeight: 500, margin: "20px 0 10px", color: "#111" }}>
            Accord caractéristique par mode
          </h3>
          <div style={{ overflowX: "auto", marginBottom: "1.5rem" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
              <thead>
                <tr style={{ borderBottom: "0.5px solid #e5e5e5" }}>
                  {["Mode", "Note distinctive", "Accord caractéristique", "Progression typique"].map(h => (
                    <th key={h} style={{ textAlign: "left", padding: "6px 10px", fontWeight: 500, color: "#666", whiteSpace: "nowrap" as const }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { mode: "Dorien",     color: "#185FA5", note: "6te majeure (♮6)",        chord: "IV majeur",   prog: "Im – IV – Im" },
                  { mode: "Phrygien",   color: "#993C1D", note: "2de bémolisée (♭2)",      chord: "♭II majeur",  prog: "Im – ♭II – Im" },
                  { mode: "Lydien",     color: "#6B3FA0", note: "4te augmentée (#4)",        chord: "II majeur",   prog: "I – II – I" },
                  { mode: "Mixolydien", color: "#BA7517", note: "7te mineure (♭7)",          chord: "♭VII majeur", prog: "I – ♭VII – IV – I" },
                  { mode: "Éolien",     color: "#2D4A8A", note: "Pas de sensible (♭6, ♭7)", chord: "♭VII majeur", prog: "Im – ♭VI – ♭VII – Im" },
                ].map((row, i) => (
                  <tr key={row.mode} style={{ borderBottom: "0.5px solid #f0f0f0", background: i % 2 === 0 ? "#fff" : "#fafafa" }}>
                    <td style={{ padding: "7px 10px", fontWeight: 500, color: row.color }}>{row.mode}</td>
                    <td style={{ padding: "7px 10px", color: "#555", fontFamily: "monospace", fontSize: 11 }}>{row.note}</td>
                    <td style={{ padding: "7px 10px", color: row.color, fontFamily: "monospace", fontWeight: 500 }}>{row.chord}</td>
                    <td style={{ padding: "7px 10px", color: "#333", fontFamily: "monospace" }}>{row.prog}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={S.warnBox}>
            <strong>Piège courant :</strong> harmoniser une mélodie modale avec V7→I "par réflexe".
            Ex. en D dorien, jouer A7→Dm introduit C# (sensible absente du dorien) et transforme
            immédiatement la couleur modale en mineur harmonique classique.
          </div>
        </div>
      )}

      {/* ══ SECTION 2 : PAR MODE ══ */}
      {activeSection === "modes" && (
        <div>
          <h2 style={S.h2}>Harmonisation par mode</h2>
          <p style={S.p}>
            Chaque mode a sa progression caractéristique. Clique sur un mode pour voir
            ses accords, entendre la progression et comprendre ce qu'il faut éviter.
          </p>

          {MODAL_MODES.map(mode => (
            <div
              key={mode.id}
              style={{
                border: `0.5px solid ${activeMode === mode.id ? mode.color : "#e5e5e5"}`,
                borderRadius: 10,
                marginBottom: 10,
                overflow: "hidden",
                cursor: "pointer",
                background: activeMode === mode.id ? mode.bg : "#fff",
                transition: "all .15s",
              }}
              onClick={() => setActiveMode(activeMode === mode.id ? null : mode.id)}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 16px" }}>
                <span style={{ fontSize: 22, flexShrink: 0 }}>{mode.emoji}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ fontSize: 14, fontWeight: 500, color: "#111" }}>{mode.name}</span>
                    <span style={{ fontSize: 11, color: "#888" }}>— {mode.rootKey}</span>
                  </div>
                  <div style={{ fontFamily: "monospace", fontSize: 12, color: mode.color, marginTop: 2 }}>
                    {mode.progression} · {mode.progExample}
                  </div>
                </div>
                <div style={{ fontSize: 11, color: "#bbb" }}>{activeMode === mode.id ? "▲" : "▼"}</div>
              </div>

              {activeMode === mode.id && (
                <div style={{ padding: "0 16px 16px", borderTop: `0.5px solid ${mode.color}20` }}>
                  <p style={{ ...S.p, marginTop: 12 }}>{mode.description}</p>

                  <div style={{ marginBottom: 12 }}>
                    <div style={{ fontSize: 11, fontWeight: 600, color: mode.color, marginBottom: 4, textTransform: "uppercase" as const, letterSpacing: "0.08em" }}>
                      Accord caractéristique
                    </div>
                    <div style={{ fontFamily: "monospace", fontSize: 13, color: "#333", background: "#f8f8f8", padding: "5px 10px", borderRadius: 6, display: "inline-block" }}>
                      {mode.characteristicChord}
                    </div>
                  </div>

                  <div style={{ marginBottom: 14, padding: "8px 12px", background: "#FFF3F3", border: "0.5px solid #E8AAAA", borderRadius: 8 }}>
                    <div style={{ fontSize: 11, fontWeight: 600, color: "#A32D2D", marginBottom: 4, textTransform: "uppercase" as const, letterSpacing: "0.08em" }}>
                      ✗ À éviter : {mode.avoidChord}
                    </div>
                    <div style={{ fontSize: 12, color: "#501313", lineHeight: 1.6 }}>{mode.avoidReason}</div>
                  </div>

                  <button
                    onClick={e => {
                      e.stopPropagation();
                      playProg(pianoRef as React.RefObject<PianoPlayerRef>, mode.chords, 1400, 1.5);
                    }}
                    style={{ fontSize: 12, padding: "6px 16px", border: `0.5px solid ${mode.color}`, borderRadius: 20, cursor: "pointer", background: "transparent", color: mode.color }}
                  >
                    ▶ Écouter {mode.progExample}
                  </button>
                </div>
              )}
            </div>
          ))}

          <div style={S.warnBox}>
            <strong>Le locrien :</strong> son accord de tonique est diminué — presque impossible
            à utiliser comme centre tonal stable. On l'emploie plutôt comme couleur ponctuelle
            dans un contexte modal plus large.
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
                {quizScore >= 8 ? "🎵" : quizScore >= 6 ? "👍" : "💪"}
              </div>
              <div style={{ fontSize: 20, fontWeight: 500, color: "#111", marginBottom: 4 }}>
                Score : {quizScore} / {QUIZ_COUNT}
              </div>
              <div style={{ fontSize: 14, color: "#666", marginBottom: 20 }}>
                {quizScore >= 8
                  ? i18n.quizMessage(quizScore, QUIZ_COUNT)
                  : quizScore >= 6
                  ? i18n.quizMessage(quizScore, QUIZ_COUNT)
                  : i18n.quizMessage(quizScore, QUIZ_COUNT)}
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
