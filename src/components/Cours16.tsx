"use client";

/**
 * Cours16.tsx
 * Harmonia · Niveau 2 · Cours 16 — La réharmonisation
 * Convention : affichage anglais, dotKeys PianoPlayer français
 */

import React, { useRef, useState } from "react";
import { useCoursI18n } from "@/hooks/useCoursI18n";
import { useCoursContent } from "@/hooks/useCoursContent";
import { cours16Content } from "@/data/cours16Content";
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

// ── Chord voicings (ascending pitch order verified) ───────────────────────────

// Basic II–V–I in C
const DM7:    string[] = ["Ré:3","Fa:3","La:3","Do:4"];          // D F A C
const G7:     string[] = ["Sol:3","Si:3","Ré:4","Fa:4"];          // G B D F
const CMAJ7:  string[] = ["Do:3","Mi:3","Sol:3","Si:3"];          // C E G B

// Diatonic substitutes
const AM7:    string[] = ["La:3","Do:4","Mi:4","Sol:4"];          // A C E G  (VIm7)
const EM7:    string[] = ["Mi:3","Sol:3","Si:3","Ré:4"];          // E G B D  (IIIm7)
const FMAJ7:  string[] = ["Fa:3","La:3","Do:4","Mi:4"];           // F A C E  (IVMaj7)

// Tritone substitutes
const DB7:    string[] = ["Réb:3","Fa:3","Lab:3","Si:3"];         // Db F Ab Cb(=B)

// Modal borrows from C minor
const FM:     string[] = ["Fa:3","Lab:3","Do:4","Mib:4"];         // F Ab C Eb  (IVm)
const ABMAJ7: string[] = ["Lab:3","Do:4","Mib:4","Sol:4"];        // Ab C Eb G  (bVIMaj7)

// Parallel harmonization
const DBMAJ7: string[] = ["Réb:3","Fa:3","Lab:3","Do:4"];         // Db F Ab C
const DMAJ7:  string[] = ["Ré:3","Fa#:3","La:3","Do#:4"];        // D F# A C#

// Extensions (Evans style)
const DM9:    string[] = ["Ré:3","Fa:3","La:3","Do:4","Mi:4"];   // D F A C E
const G13:    string[] = ["Sol:2","Si:3","Mi:4","Fa:4"];           // G B E F (root,3,13,b7)
const CMAJ9:  string[] = ["Do:3","Mi:3","Sol:3","Si:3","Ré:4"];  // C E G B D

// ── Technique data ────────────────────────────────────────────────────────────

interface Technique {
  id: string;
  name: string;
  color: string;
  bg: string;
  rule: string;
  example: string;
  description: string;
  tip: string;
  originalLabel: string;
  originalChords: string[][];
  reharmLabel: string;
  reharmChords: string[][];
}

const TECHNIQUES: Technique[] = [
  {
    id: "diatonique",
    name: "Substitution diatonique",
    color: "#185FA5",
    bg: "#E6F1FB",
    rule: "I ↔ VI  ·  II ↔ IV",
    example: "CMaj7 → Am7  ·  Dm7 → FMaj7",
    description: "Deux accords partageant au moins deux notes communes peuvent se remplacer mutuellement. En C : CMaj7 (C E G B) et Am7 (A C E G) partagent Do, Mi et Sol. La mélodie reste compatible car ses notes sont présentes dans les deux accords.",
    tip: "Remplacer I par VI crée une 'résolution déceptive douce' — V7→VIm au lieu de V7→I. Moins définitif, plus expressif. Omniprésent chez Bill Evans et Keith Jarrett.",
    originalLabel: "Dm7 – G7 – CMaj7",
    originalChords: [DM7, G7, CMAJ7],
    reharmLabel: "Dm7 – G7 – Am7  (I → VI)",
    reharmChords: [DM7, G7, AM7],
  },
  {
    id: "tritonique",
    name: "Substitution tritonique",
    color: "#7B1F1F",
    bg: "#FCEAEA",
    rule: "V7 → ♭II7  (un triton plus bas)",
    example: "G7 → Db7  ·  D7 → Ab7",
    description: "V7 est remplacé par l'accord situé un triton (6 demi-tons) plus bas. G7 et Db7 partagent le même triton (Si–Fa / Fa–Cb) — mêmes notes de tension, rôles inversés. La basse descend d'un demi-ton vers I au lieu d'une quinte.",
    tip: "Basse Db→C (demi-ton) vs G→C (quinte). Le mouvement chromatique est la signature acoustique de cette substitution : même tension de résolution, son radicalement différent.",
    originalLabel: "Dm7 – G7 – CMaj7",
    originalChords: [DM7, G7, CMAJ7],
    reharmLabel: "Dm7 – Db7 – CMaj7  (V7 → ♭II7)",
    reharmChords: [DM7, DB7, CMAJ7],
  },
  {
    id: "modal",
    name: "Emprunt modal",
    color: "#0F6E56",
    bg: "#E1F5EE",
    rule: "IV → IVm  ·  I → Im  ·  bVI  ·  bVII",
    example: "FMaj7 → Fm  ·  I → bVIMaj7",
    description: "On emprunte un accord à la gamme mineure parallèle (homonyme). En C majeur, Fm (IVm), AbMaj7 (bVI) ou Bb7 (bVII) proviennent de C mineur. Ces bémols inattendus assombrissent momentanément la couleur — effet poignant et introspectif.",
    tip: "FMaj7 → Fm est l'emprunt le plus courant. Lab (3ce de Fm) bémolise la couleur. Evans l'utilise sur Waltz for Debby pour créer un contraste expressif au sein d'une section lumineuse.",
    originalLabel: "CMaj7 – FMaj7 – G7 – CMaj7",
    originalChords: [CMAJ7, FMAJ7, G7, CMAJ7],
    reharmLabel: "CMaj7 – Fm – G7 – CMaj7  (IV → IVm)",
    reharmChords: [CMAJ7, FM, G7, CMAJ7],
  },
  {
    id: "parallele",
    name: "Harmonisation parallèle",
    color: "#6B3FA0",
    bg: "#F0EAFA",
    rule: "Même type d'accord, mouvement chromatique",
    example: "CMaj7 – DbMaj7 – DMaj7",
    description: "Le même type d'accord se déplace chromatiquement sous la mélodie. Les voix internes bougent toutes en parallèle du même intervalle. Technique impressionniste (Debussy, Ravel) adoptée par le jazz — Evans, Mehldau.",
    tip: "Les accords parallèles sont 'neutres' en eux-mêmes. C'est la mélodie qui crée l'intérêt et la logique harmonique. Trois Maj7 consécutifs chromatiquement créent un effet impressionniste immédiat.",
    originalLabel: "CMaj7 – Dm7 – Em7",
    originalChords: [CMAJ7, DM7, EM7],
    reharmLabel: "CMaj7 – DbMaj7 – DMaj7  (parallèle chromatique)",
    reharmChords: [CMAJ7, DBMAJ7, DMAJ7],
  },
];

// ── Comparison data ───────────────────────────────────────────────────────────

interface Comparison {
  id: string;
  technique: string;
  techniqueColor: string;
  originalLabel: string;
  reharmLabel: string;
  note: string;
  originalChords: string[][];
  reharmChords: string[][];
}

const COMPARISONS: Comparison[] = [
  {
    id: "tritonsub",
    technique: "Substitution tritonique",
    techniqueColor: "#7B1F1F",
    originalLabel: "Dm7 – G7 – CMaj7",
    reharmLabel: "Dm7 – Db7 – CMaj7",
    note: "Basse D–Db–C : mouvement chromatique descendant, signature bebop",
    originalChords: [DM7, G7, CMAJ7],
    reharmChords: [DM7, DB7, CMAJ7],
  },
  {
    id: "modalborrow",
    technique: "Emprunt modal  (IV → IVm)",
    techniqueColor: "#0F6E56",
    originalLabel: "CMaj7 – FMaj7 – G7 – CMaj7",
    reharmLabel: "CMaj7 – Fm – G7 – CMaj7",
    note: "Fm introduit Lab — couleur sombre et poignante très Bill Evans",
    originalChords: [CMAJ7, FMAJ7, G7, CMAJ7],
    reharmChords: [CMAJ7, FM, G7, CMAJ7],
  },
  {
    id: "extensions",
    technique: "Extensions  (9e, 13e)",
    techniqueColor: "#185FA5",
    originalLabel: "Dm7 – G7 – CMaj7",
    reharmLabel: "Dm9 – G13 – CMaj9",
    note: "Même fonction, couleur enrichie — signature sonore de Bill Evans",
    originalChords: [DM7, G7, CMAJ7],
    reharmChords: [DM9, G13, CMAJ9],
  },
  {
    id: "diatonic",
    technique: "Substitution diatonique  (I → VI)",
    techniqueColor: "#185FA5",
    originalLabel: "Dm7 – G7 – CMaj7",
    reharmLabel: "Dm7 – G7 – Am7",
    note: "Am7 partage Do, Mi, Sol avec CMaj7 — résolution déceptive douce",
    originalChords: [DM7, G7, CMAJ7],
    reharmChords: [DM7, G7, AM7],
  },
];

// ── Quiz ──────────────────────────────────────────────────────────────────────

const ALL_QUESTIONS = [
  // Définition générale
  { q: "Qu'est-ce que la réharmonisation ?", opts: ["Jouer plus de notes", "Remplacer les accords d'une progression existante par d'autres tout en conservant la mélodie", "Changer la mélodie d'un morceau", "Transposer dans une autre tonalité"], a: 1, fb: "La réharmonisation conserve la mélodie mais remplace les accords. Condition fondamentale : chaque note mélodique doit être compatible avec le nouvel accord (fondamentale, tierce, quinte, septième ou extension). C'est de la sculpture harmonique." },
  { q: "Quelle est la condition fondamentale d'une réharmonisation réussie ?", opts: ["Utiliser des accords plus complexes", "La note mélodique doit être compatible avec le nouvel accord", "Toujours rester dans la même tonalité", "N'utiliser que la substitution tritonique"], a: 1, fb: "Chaque note mélodique doit appartenir au nouvel accord ou être une tension acceptable : fondamentale, tierce, quinte, septième ou extension (9e, 11e, 13e). Si la mélodie sonne faux sur le nouvel accord, la réharmonisation échoue." },
  { q: "Une note mélodique est compatible avec un accord si elle est :", opts: ["Uniquement la fondamentale", "Fondamentale, tierce, quinte, septième ou extension (9e/11e/13e)", "Seulement la tierce ou la quinte", "N'importe quelle note"], a: 1, fb: "Les notes compatibles : fondamentale (1), tierce (3), quinte (5), septième (7), et les extensions (9e, 11e, 13e). Si la mélodie chante Mi sur un accord réharmonisé, cet accord doit contenir Mi dans l'une de ces positions." },
  { q: "Réharmoniser une progression revient à :", opts: ["Changer le tempo", "Remplacer tout ou partie des accords en conservant la mélodie intacte", "Ajouter de nouveaux instruments", "Changer la tonalité"], a: 1, fb: "Réharmoniser = changer les accords, garder la mélodie. La mélodie est l'élément fixe ; les accords en dessous sont modifiables tant que chaque note mélodique reste compatible. C'est l'art de trouver de nouveaux 'habillages harmoniques' pour un même air." },

  // Substitution diatonique
  { q: "Quelle paire d'accords peut se substituer dans la substitution diatonique ?", opts: ["I et II", "I et VI", "V et IV", "III et VII"], a: 1, fb: "I et VI partagent deux à trois notes communes (en C : CMaj7 partage Mi et Sol avec Am7 — même Do). Cette proximité permet de les permuter sans affecter la mélodie. II et IV se substituent aussi (Dm7 et FMaj7 partagent Fa et La)." },
  { q: "En C majeur, quels accords se substituent dans la substitution diatonique ?", opts: ["CMaj7 ↔ Dm7", "CMaj7 ↔ Am7  ·  Dm7 ↔ FMaj7", "G7 ↔ Em7", "Dm7 ↔ G7"], a: 1, fb: "CMaj7 et Am7 partagent Mi et Sol (et Do). FMaj7 et Dm7 partagent Fa et La. Ces notes communes créent une continuité harmonique suffisante pour que la mélodie reste logique sur l'accord substitué." },
  { q: "Pourquoi I et VI peuvent-ils se substituer ?", opts: ["Car ils ont la même fondamentale", "Car ils partagent deux à trois notes communes", "Car ils sont à distance de triton", "Car ils ont la même qualité majeur/mineur"], a: 1, fb: "En C : CMaj7 = C E G B, Am7 = A C E G. Notes communes : Do, Mi, Sol. La mélodie sonne juste sur Am7 si elle chantait Do, Mi ou Sol sur CMaj7. Plus de notes communes = substitution plus naturelle." },
  { q: "La substitution diatonique 'II ↔ IV' en C majeur correspond à :", opts: ["Dm7 ↔ G7", "Dm7 ↔ FMaj7", "Am7 ↔ Em7", "CMaj7 ↔ FMaj7"], a: 1, fb: "IIm7 = Dm7 (D F A C), IV = FMaj7 (F A C E). Notes communes : Fa, La, Do. Ces deux accords ont une fonction sous-dominante similaire et peuvent se substituer dans beaucoup de contextes." },
  { q: "Remplacer CMaj7 par Am7 (I → VI) crée quel effet ?", opts: ["Une résolution plus forte", "Une légère couleur mineure, plus douce — 'résolution déceptive douce'", "Une tension maximale", "Un changement de tonalité"], a: 1, fb: "Am7 partage les notes de CMaj7 mais son fondement mineur crée une couleur plus douce, parfois mélancolique. C'est une 'cadence déceptive douce' — la résolution attendue sur I arrive mais teintée de VIm, moins définitive." },

  // Substitution tritonique
  { q: "Le substitut tritonique de G7 est :", opts: ["F#7", "Db7", "Ab7", "C#7"], a: 1, fb: "Db7 est situé un triton (6 demi-tons) au-dessus de G7. Db7 (Db F Ab Cb) partage le même triton que G7 (Si/Cb et Fa) — les notes de tension sont identiques mais leurs rôles s'inversent. La basse descend d'un demi-ton Db→C." },
  { q: "Que partagent G7 et Db7, rendant la substitution tritonique possible ?", opts: ["La fondamentale", "La même quinte", "Le même triton — Si et Fa (notes de tension)", "La même septième"], a: 2, fb: "G7 contient Si–Fa (triton). Db7 contient Fa–Cb (= Si, enharmonique). Ces deux notes de tension sont identiques dans les deux accords mais leurs noms s'inversent. C'est ce partage qui rend la substitution cohérente harmoniquement." },
  { q: "Quel effet crée la substitution tritonique sur la basse ?", opts: ["Un saut de quinte", "Un mouvement chromatique descendant (demi-ton) vers I", "Un mouvement ascendant par demi-tons", "Une basse fixe"], a: 1, fb: "Db7 → CMaj7 : la basse descend d'un demi-ton. Comparé à G7 → CMaj7 (quinte descendante), c'est bien plus élégant. Ce mouvement chromatique est caractéristique du jazz bebop et de la réharmonisation jazz." },
  { q: "Le substitut tritonique de D7 (dominante de GMaj7) est :", opts: ["Eb7", "Ab7", "Bb7", "F#7"], a: 1, fb: "Un triton au-dessus de D (Ré) = Ab (La bémol). Ab7 est le substitut tritonique de D7. En II–V–I de G : Am7–D7–GMaj7 peut devenir Am7–Ab7–GMaj7 (basse La–Lab–Sol, descente chromatique)." },
  { q: "Pourquoi la substitution tritonique fonctionne-t-elle harmoniquement ?", opts: ["Car les deux accords ont la même quinte", "Car V7 et ♭II7 partagent les mêmes notes de tension (le triton), juste avec les rôles inversés", "Car ils sont dans la même gamme", "Car la fondamentale reste la même"], a: 1, fb: "Le triton de V7 (ex. Si–Fa de G7) est aussi le triton de ♭II7 (Fa–Si de Db7). Les deux accords créent la même tension de résolution vers I — même 'carburant', fondamentale différente. La basse descend par demi-ton au lieu de quinte." },
  { q: "Dans 'Dm7 – Db7 – CMaj7', Db7 remplace quel accord original ?", opts: ["Dm7 (II)", "G7 (V) par substitution tritonique", "Am7 (VI)", "Em7 (III)"], a: 1, fb: "Db7 est le substitut tritonique de G7. La progression originale Dm7–G7–CMaj7 devient Dm7–Db7–CMaj7. La basse D–Db–C descend chromatiquement, rendant la progression très élégante." },

  // Emprunt modal
  { q: "Qu'est-ce qu'un emprunt modal en réharmonisation ?", opts: ["Utiliser un accord d'un autre instrument", "Remplacer un accord par son homonyme de la gamme mineure parallèle", "Utiliser le mode dorien", "Emprunter des accords au jazz modal"], a: 1, fb: "L'emprunt modal prend un accord de la tonalité homonyme mineure. En C majeur, on emprunte à C mineur : Fm (IVm), Cm (Im), AbMaj7 (bVI), Bb7 (bVII). Ces accords apportent une couleur sombre et modale dans un contexte majeur." },
  { q: "En C majeur, 'FMaj7 → Fm' est un emprunt de :", opts: ["La gamme de Fa majeur", "C mineur parallèle (IVm = Fm dans la gamme homonyme mineure)", "La gamme de Ré dorien", "La gamme pentatonique"], a: 1, fb: "Fm (F Ab C Eb) est le IVe degré de C mineur. On l'emprunte à la tonalité homonyme mineure. Lab (3ce de Fm) crée la couleur sombre. Bill Evans usait fréquemment de cette 'bémolisation' du IV dans ses standards." },
  { q: "Quelle note caractéristique apparaît quand on remplace FMaj7 par Fm en C majeur ?", opts: ["Fa#", "Lab (bIII de C mineur)", "Do#", "Sib"], a: 1, fb: "Fm = F Ab C Eb. Le Lab (Ab) est la note étrangère issue de C mineur. Cette bémolisation de la tierce (La→Lab) caractérise l'emprunt modal — couleur sombre immédiatement reconnaissable." },
  { q: "Quels accords peut-on emprunter à C mineur parallèle ?", opts: ["Uniquement Cm", "Fm (IVm), Cm (Im), AbMaj7 (bVI), Bb7 (bVII), EbMaj7 (bIII)", "Seulement Fm et Cm", "G7 et D7 seulement"], a: 1, fb: "La gamme de C mineur fournit : Im=Cm, IIm7b5=Dm7b5, bIII=EbMaj7, IVm=Fm, V7=G7, bVI=AbMaj7, bVII=Bb7. Tous peuvent être empruntés en C majeur. Les plus courants : Fm, AbMaj7, Bb7 (pour leurs bémols expressifs)." },
  { q: "Pourquoi l'emprunt modal crée-t-il un effet poignant ?", opts: ["Car c'est plus facile à jouer", "Car il introduit des bémols inattendus qui assombrissent momentanément une couleur majeure", "Car ça supprime le triton", "Car c'est imposé par la forme AABA"], a: 1, fb: "Les emprunts modaux (IV→IVm, I→Im) introduisent des bémols issus du mineur parallèle — Lab, Mib, Sib. Ces couleurs sombres inattendues dans un contexte majeur créent un contraste expressif puissant — signature du son de Bill Evans." },

  // Harmonisation parallèle
  { q: "Qu'est-ce que l'harmonisation parallèle ?", opts: ["Jouer deux mélodies simultanément", "Déplacer le même type d'accord chromatiquement sous la mélodie", "Harmoniser à la tierce", "Doubler les voix à l'octave"], a: 1, fb: "L'harmonisation parallèle déplace un type d'accord identique (ex. Maj7) chromatiquement ou par tons en suivant la mélodie. CMaj7–DbMaj7–DMaj7 : même structure, bases successives. Technique impressionniste adoptée par le jazz." },
  { q: "CMaj7 → DbMaj7 → DMaj7 est un exemple de :", opts: ["Substitution tritonique successive", "Harmonisation parallèle chromatique ascendante", "Substitution diatonique", "Cycle des quintes"], a: 1, fb: "Même type d'accord (Maj7) déplacé chromatiquement (C→Db→D). La conduite de voix est mécanique — toutes les voix bougent du même intervalle. La mélodie flottant au-dessus crée l'intérêt harmonique." },
  { q: "Quel compositeur est surtout associé à l'harmonisation parallèle ?", opts: ["Bach", "Beethoven", "Debussy", "Vivaldi"], a: 2, fb: "Debussy a systématisé les accords parallèles dans ses préludes et nocturnes. L'impressionnisme français a introduit cette technique que le jazz a adoptée — notamment Bill Evans sur My Foolish Heart et Peace Piece." },
  { q: "Dans l'harmonisation parallèle, qu'est-ce qui crée l'intérêt harmonique ?", opts: ["La complexité des accords", "La mélodie — les accords se déplacent en bloc sous elle", "Le mouvement de basse rapide", "Les notes de tension"], a: 1, fb: "Les accords parallèles sont 'neutres' en eux-mêmes. C'est la mélodie immuable qui crée la logique et l'intérêt. La succession chromatique des accords crée l'effet impressionniste ; la mélodie porte l'auditeur." },

  // Compatibilité mélodie/accord
  { q: "Si la mélodie chante 'Mi' sur un accord réharmonisé, quel accord convient ?", opts: ["Fm7 (Mi absent)", "CMaj7 (Mi = 3ce)", "Dm7b5 (Mi absent)", "Bb7 (Mi absent)"], a: 1, fb: "CMaj7 = C E G B. Mi (E) est la 3ce de CMaj7 — note constitutive. La mélodie Mi est parfaitement compatible. Règle : la note mélodique doit être 1, 3, 5, 7 ou extension de l'accord." },
  { q: "Si la mélodie chante 'La' sur un accord réharmonisé, lequel convient ?", opts: ["Dm7 (La = 5te)", "FMaj7 (La = 3ce)", "Am7 (La = fondamentale)", "Tous fonctionnent"], a: 3, fb: "La (A) est : 5te de Dm7, 3ce de FMaj7, fondamentale d'Am7. Les trois accords sont compatibles avec la mélodie La. C'est pourquoi la réharmonisation offre tant de possibilités — une même note peut appartenir à de nombreux accords." },
  { q: "Pour vérifier la compatibilité mélodie/accord, la note doit être :", opts: ["Plus haute que la basse", "1, 3, 5, 7 ou extension (9e, 11e, 13e) de l'accord", "Dans la même octave que la fondamentale", "Inférieure à la 5te"], a: 1, fb: "Règle universelle : fondamentale (1), tierce (3), quinte (5), septième (7) ou extension (9e, 11e, 13e). Les notes hors de ces catégories créent des frottements involontaires. Une b9 non intentionnelle sonne faux." },
  { q: "Pourquoi 'Si' (B naturel) est-il problématique sur un accord Fm ?", opts: ["Car Si est trop grave", "Car Si (= 4te augmentée / triton de Fm) n'est pas une extension naturelle d'un accord mineur", "Car Si est toujours dissonant", "Car Si est trop aigu"], a: 1, fb: "Fm = F Ab C Eb. Si (B) est la 4te augmentée de Fm — un triton par rapport à la fondamentale Fa. Ce n'est pas une extension naturelle. Si la mélodie chante Si au-dessus de Fm, la réharmonisation sonne faux : il faut choisir un autre accord." },
  { q: "Dans 'Dm7 – Db7 – CMaj7' avec mélodie Sol–Sol–Sol, Db7 est-il compatible ?", opts: ["Non — Sol est la 4te bémolisée de Db7, très dissonante", "Oui — Sol est la quinte de Db7", "Non — Sol n'est jamais compatible", "Oui — Sol est toujours possible"], a: 0, fb: "Db7 = Db F Ab Cb. Sol (G) par rapport à Db : c'est la quarte augmentée (= triton). Très dissonant, non naturel. Avant de valider une réharmonisation, vérifier chaque note mélodique sur chaque nouvel accord." },

  // Bill Evans
  { q: "Bill Evans est associé à quel courant du jazz ?", opts: ["Bebop des années 1940", "Jazz cool et post-bop des années 1950–70", "Free jazz", "Dixieland"], a: 1, fb: "Bill Evans (1929–1980) est une figure centrale du jazz cool et post-bop. Son jeu avec le Miles Davis Sextet (Kind of Blue, 1959) et son trio ont défini un son introspectif harmoniquement sophistiqué." },
  { q: "Bill Evans est célèbre pour ses réharmonisations dans lesquelles il :", opts: ["Supprime tous les accords de passage", "Ajoute des emprunts modaux, des extensions et des substitutions subtiles transformant des progressions simples en œuvres sophistiquées", "Joue uniquement en mineur", "Évite les dissonances"], a: 1, fb: "Evans transformait des standards simples (Autumn Leaves, Waltz for Debby) par des emprunts modaux (IVm, bVI), des extensions (9e, b11), des substitutions tritoniques délicates et une conduite de voix impeccable." },
  { q: "Sur 'My Foolish Heart', Evans utilise notamment :", opts: ["Le mode locrien exclusivement", "Des accords parallèles chromatiques et des emprunts au mineur parallèle", "Le jazz blues 12 mesures", "Uniquement des triades"], a: 1, fb: "Evans réharmonise My Foolish Heart avec des accords parallèles chromatiques (impression debussyste) et des emprunts modaux (IVm, bVI) qui assombrissent la couleur. Réharmonisation 'par blocs' caractéristique de son style." },
  { q: "Quelle est la contribution principale de Bill Evans à la réharmonisation jazz ?", opts: ["Inventer la substitution tritonique", "Montrer que les standards peuvent être transformés harmoniquement par des substitutions subtiles sans jamais perturber la mélodie", "Créer la forme blues", "Introduire le mode dorien"], a: 1, fb: "Evans a prouvé qu'une réharmonisation peut être subtile et préserver le 'caractère' d'un standard. Sa version de Waltz for Debby illustre comment réharmoniser pour amplifier — et non masquer — la beauté originale." },
  { q: "Keith Jarrett et Brad Mehldau ont continué la tradition de :", opts: ["Charlie Parker (bebop pur)", "Bill Evans — réharmonisation introspective, emprunts modaux et conduite de voix soignée", "Miles Davis (électrique)", "Oscar Peterson (stride)"], a: 1, fb: "Jarrett et Mehldau héritent directement d'Evans : même attention à la conduite de voix, même usage des emprunts modaux, même capacité à réharmoniser un standard tout en préservant son identité émotionnelle." },
  { q: "Brad Mehldau est connu pour réharmoniser des chansons de :", opts: ["Beethoven", "Radiohead, Nick Drake et d'autres artistes pop/rock", "Vivaldi", "Wagner"], a: 1, fb: "Brad Mehldau réharmonise des chansons pop (Radiohead : Knives Out, Exit Music for a Film ; Nick Drake) avec le langage jazz (extensions, substitutions, emprunts modaux). Réharmonisation cross-genre — mélodie pop, harmonie jazz." },

  // Conduite de voix
  { q: "Pourquoi la conduite de voix est-elle cruciale en réharmonisation ?", opts: ["Car elle détermine le tempo", "Car des changements d'accords brusques créent des sauts peu élégants — la fluidité des voix internes est un critère de qualité", "Car elle supprime les dissonances", "Car elle est imposée par Fux"], a: 1, fb: "Une réharmonisation peut être techniquement correcte (notes compatibles) mais sonner brusquement si les voix internes font de grands sauts. La bonne réharmonisation déplace les voix par demi-tons ou tons — minimum de mouvement, maximum de fluidité." },
  { q: "Quelle règle de conduite de voix s'applique en réharmonisation ?", opts: ["Les voix doivent toujours monter", "Préférer le mouvement conjoint (demi-ton, ton) pour les voix internes", "Ne jamais doubler la fondamentale", "Toujours placer la mélodie à la voix la plus grave"], a: 1, fb: "En réharmonisation : mouvement des voix par petits intervalles (conjoint). G7 → Db7 : les voix internes Si–Ré–Fa trouvent facilement Fa–Lab–Si dans Db7 par mouvement de demi-tons. C'est ce que Evans maîtrisait parfaitement." },
  { q: "Comment la substitution tritonique facilite-t-elle la conduite de voix ?", opts: ["Car elle supprime une voix", "Car les notes de tension (triton) partagées entre V7 et ♭II7 permettent une conduite très fluide", "Car elle n'a que 2 notes", "Car elle est toujours en position fermée"], a: 1, fb: "G7 (G B D F) et Db7 (Db F Ab Cb) partagent Si/Cb et Fa. La substitution tritonique crée un accord voisin avec notes communes — les voix n'ont presque pas à bouger. C'est pourquoi cette substitution semble 'douce' malgré le changement radical de fondamentale." },

  // Applications pratiques
  { q: "Qu'est-ce que réharmoniser 'par blocs' ?", opts: ["Changer tous les accords d'un seul coup", "Modifier un accord à la fois, en laissant le reste intact", "Regrouper les accords par 4", "Jouer tous les accords simultanément"], a: 1, fb: "Réharmoniser par blocs = modifier un accord à la fois dans la progression. Ex. changer uniquement V7 par substitution tritonique, en laissant les autres accords originaux. C'est l'approche la plus sécurisée — on contrôle l'impact de chaque changement." },
  { q: "La 'réharmonisation complète' consiste à :", opts: ["Jouer plus fort", "Remplacer entièrement la grille originale par une nouvelle progression tout en gardant la mélodie", "Transposer dans une autre tonalité", "Jouer sans accords"], a: 1, fb: "La réharmonisation complète reconstruit totalement la grille. La mélodie reste ; les accords en dessous sont entièrement nouveaux. Exemple : Coltrane prend My Favorite Things (mélodie intacte) et lui crée une grille modale totalement différente." },
  { q: "Pourquoi réharmonise-t-on un standard jazz ?", opts: ["Car les accords originaux sont incorrects", "Pour renouveler l'expression artistique, explorer de nouvelles couleurs harmoniques et personnaliser l'interprétation", "Car c'est imposé par les règles du jazz", "Pour faciliter l'improvisation"], a: 1, fb: "La réharmonisation est un outil d'expression. Elle permet à un musicien de 'signer' sa version d'un standard, d'explorer de nouvelles émotions harmoniques, de surprendre l'auditeur familier avec la version originale. C'est de la composition en temps réel." },
  { q: "Sur quel répertoire la réharmonisation est-elle le plus souvent appliquée ?", opts: ["La musique baroque", "Les standards jazz et les mélodies populaires connues", "Les symphonies classiques", "La musique contemporaine uniquement"], a: 1, fb: "On réharmonise surtout les standards jazz (Autumn Leaves, All The Things You Are) et les mélodies populaires. La mélodie connue de l'auditeur crée un contraste avec les accords inattendus — l'effet de surprise est au cœur de la réharmonisation." },

  // Techniques avancées
  { q: "La substitution 'Dm7 – Db7 – Am7' combine :", opts: ["Deux substitutions tritoniques", "Substitution tritonique sur G7 + substitution diatonique I→VI sur CMaj7", "Deux emprunts modaux", "Harmonisation parallèle + emprunt modal"], a: 1, fb: "G7→Db7 (tritonique) et CMaj7→Am7 (diatonique I→VI) combinées donnent Dm7–Db7–Am7. Combiner les techniques multiplie les possibilités de réharmonisation. C'est ainsi que Bill Evans construisait des réharmonisations complexes et subtiles." },
  { q: "Coltrane a réharmonisé 'My Favorite Things' en :", opts: ["La transposant dans toutes les tonalités", "Gardant la mélodie intacte et créant une grille modale (dorien) entièrement nouvelle", "Ajoutant des accords diminués", "Supprimant toutes les cadences"], a: 1, fb: "My Favorite Things chez Coltrane (1960) : mélodie de Rodgers & Hammerstein intacte, grille entièrement modale (ré dorien / mi dorien alternés). La valse 3/4 reste ; les accords sont réinventés. Réharmonisation complète emblématique." },
  { q: "Autumn Leaves peut être réharmonisé en :", opts: ["Changeant uniquement la tonalité", "Substituant les V7 par leurs substituts tritoniques et remplaçant IV par IVm tout en gardant la mélodie", "Le tempo seulement", "La clé seulement"], a: 1, fb: "Autumn Leaves alterne II–V–I majeur et mineur. On peut substituer les V7 par leurs substituts tritoniques (basse chromatique), remplacer FMaj7 par Fm (emprunt modal). La mélodie si connue contraste avec la richesse harmonique ajoutée." },
  { q: "La technique d'harmonisation parallèle a été importée de :", opts: ["Le contrepoint baroque", "Le romantisme allemand", "L'impressionnisme français (Debussy, Ravel)", "Le bebop américain"], a: 2, fb: "Debussy a introduit les accords parallèles dans la musique classique (premières années 1900) — quintes, quartes, accords de 7te parallèles. Les jazzmen américains l'adoptent ensuite. Evans, Jarrett et Mehldau en sont les héritiers jazz." },

  // Révision générale
  { q: "Laquelle des 4 techniques crée le mouvement de basse le plus chromatique ?", opts: ["Substitution diatonique", "Substitution tritonique (♭II7→I = un demi-ton)", "Emprunt modal", "Harmonisation parallèle"], a: 1, fb: "La substitution tritonique crée une résolution par demi-ton descendant — le mouvement de basse le plus court possible. Ex. Db7→CMaj7 : basse Réb→Do, un demi-ton. Ce mouvement chromatique est la caractéristique acoustique la plus reconnaissable de cette technique." },
  { q: "Quelle technique introduit des bémols inattendus dans un contexte majeur ?", opts: ["Substitution tritonique", "Emprunt modal (accords de la gamme mineure parallèle)", "Harmonisation parallèle", "Substitution diatonique"], a: 1, fb: "L'emprunt modal prend des accords de la gamme mineure parallèle — qui contient des bémols (bIII, bVI, bVII). Ces bémols inattendus dans un contexte majeur créent la couleur sombre caractéristique. Ex. en C majeur : Fm introduit Lab, AbMaj7 introduit Lab et Mib." },
  { q: "Quelle technique conserve exactement les mêmes notes de tension que l'accord original ?", opts: ["Emprunt modal", "Harmonisation parallèle", "Substitution tritonique — le triton est partagé", "Substitution diatonique"], a: 2, fb: "La substitution tritonique partage le même triton entre V7 et ♭II7. G7 et Db7 ont tous deux Si et Fa (= Cb) — mêmes notes de tension, rôles inversés. C'est pourquoi la résolution semble 'différente mais familière'." },
  { q: "Une réharmonisation de qualité se reconnaît à :", opts: ["Au nombre d'accords utilisés", "À la fluidité de la conduite de voix, la compatibilité de chaque note mélodique et la cohérence expressive", "Au tempo d'exécution", "À l'absence de dissonances"], a: 1, fb: "Critères : (1) chaque note mélodique est compatible avec le nouvel accord, (2) les voix internes bougent par petits intervalles, (3) l'effet expressif amplifie (ne masque pas) la mélodie. C'est technique ET artistique." },
  { q: "Quel risque majeur existe dans la réharmonisation ?", opts: ["D'utiliser trop peu d'accords", "De sacrifier la fluidité mélodique — si trop radicale, la mélodie semble 'perdue' sur les accords", "De jouer trop doucement", "De jouer les accords trop vite"], a: 1, fb: "Le danger principal : incompatibilité mélodie/accord. Si une note mélodique ne se retrouve pas dans l'accord substitué, la sonorité est agressive et la mélodie flotte dans le vide. La fluidité mélodique prime toujours sur la sophistication harmonique." },
  { q: "Qu'est-ce que le 'bVI emprunt' en C majeur ?", opts: ["Bm7b5", "AbMaj7 (emprunté à C mineur — bVI)", "Am7 (VI diatonique)", "Fm7"], a: 1, fb: "bVI en C majeur = AbMaj7. Cet accord est emprunté à C mineur parallèle (où le 6e degré est bémolisé). AbMaj7 introduit Lab, Mib et Do — couleur très sombre et romantique. Beaucoup utilisé dans le jazz post-bop et la pop (Let It Be inclut cette couleur)." },
  { q: "Dans la substitution diatonique, combien de notes communes idéalement ?", opts: ["Aucune — les accords doivent contraster", "Au moins 2 notes communes (idéalement 3)", "Exactement 1 note commune", "Toutes les notes communes"], a: 1, fb: "Au moins 2 notes communes garantit que la mélodie reste logique sur l'accord substitué. CMaj7–Am7 partagent 3 notes — substitution très naturelle. Moins de notes communes = substitution plus 'risquée' mélodiquement." },
  { q: "Réharmoniser 'Dm7–G7–CMaj7' en 'Dm7–G7–Am7' est une substitution :", opts: ["Tritonique sur G7", "Diatonique I→VI sur CMaj7", "Modale (emprunt de Am7 au mineur)", "Parallèle chromatique"], a: 1, fb: "Am7 remplace CMaj7 par substitution diatonique I→VI. CMaj7 (I) et Am7 (VIm) partagent Do, Mi, Sol — trois notes communes. C'est une résolution déceptive douce : la cadence V7→I devient V7→VIm, moins définitive mais très expressive." },
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
const SECTIONS_IDS = ["principe", "application", "quiz"] as const;
type SectionId = typeof SECTIONS_IDS[number];

const PRIMARY    = "#1A4A7A";
const PRIMARY_BG = "#E6EFF8";

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
  infoBox:  { borderLeft: `2px solid ${PRIMARY}`, padding: "8px 14px", background: PRIMARY_BG, borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#0D2D4F", lineHeight: 1.6 } as React.CSSProperties,
  warnBox:  { borderLeft: "2px solid #BA7517", padding: "8px 14px", background: "#FAEEDA", borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#633806", lineHeight: 1.6 } as React.CSSProperties,
  tip:      { borderLeft: "2px solid #0F6E56", padding: "8px 14px", background: "#E1F5EE", borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#085041", lineHeight: 1.6 } as React.CSSProperties,
};

export default function Cours16() {
  const [activeSection, setActiveSection] = useState<SectionId>("principe");
  const i18n = useCoursI18n("cours16");
  const { questions: ALL_QUESTIONS } = useCoursContent(cours16Content);
  const [activeTechnique, setActiveTechnique]   = useState<string | null>(null);
  const [activeComparison, setActiveComparison] = useState<string | null>(null);

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
    if (id === "principe")    return "Le principe";
    if (id === "application") return "Applications";
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
        <span style={S.badge}>Niveau 2 · Cours 16</span>
        <h1 style={S.h1}>La réharmonisation</h1>
        <p style={S.subtitle}>
          Substitution diatonique, tritonique, emprunt modal, harmonisation parallèle —
          transformer les accords sous une mélodie intacte.
        </p>
      </div>

      <MaitreCard
        composer="Bill Evans"
        period="1929–1980"
        emoji="🎹"
        concept="Réharmonisation & impressionnisme jazz"
        anecdote="Evans joue Autumn Leaves dans son premier album solo (1956) et l'auditeur reconnaît la mélodie familière — mais les accords ont changé. FMaj7 est devenu Fm, G7 est devenu Db7. Sans modifier une seule note de la mélodie de Joseph Kosma, Evans a transformé un standard printanier en nocturne mélancolique."
        lesson="La réharmonisation n'est pas de la virtuosité — c'est de l'écoute. Avant de substituer un accord, demande-toi : est-ce que la mélodie s'entend encore ? Est-ce que le nouvel accord dit quelque chose que l'original ne pouvait pas dire ?"
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

      {/* ══ SECTION 1 : LE PRINCIPE ══ */}
      {activeSection === "principe" && (
        <div>
          <h2 style={S.h2}>Qu'est-ce que la réharmonisation ?</h2>
          <p style={S.p}>
            Réharmoniser une progression, c'est remplacer tout ou partie des accords par
            d'autres — <strong>en conservant la mélodie intacte</strong>. La condition
            fondamentale : chaque note mélodique doit être compatible avec le nouvel accord
            (fondamentale, tierce, quinte, septième ou extension).
          </p>
          <div style={S.infoBox}>
            <strong>Règle d'or :</strong> avant de valider un accord substitué, vérifier que
            chaque note mélodique est 1, 3, 5, 7 ou une extension (9e, 11e, 13e) de cet accord.
            Si une note 'flotte dans le vide', choisir un autre accord ou une autre technique.
          </div>

          <h3 style={S.h3}>Les 4 grandes techniques</h3>
          {TECHNIQUES.map(tech => (
            <div
              key={tech.id}
              style={{
                border: `0.5px solid ${activeTechnique === tech.id ? tech.color : "#e5e5e5"}`,
                borderRadius: 10,
                marginBottom: 10,
                overflow: "hidden",
                cursor: "pointer",
                background: activeTechnique === tech.id ? tech.bg : "#fff",
                transition: "all .15s",
              }}
              onClick={() => setActiveTechnique(activeTechnique === tech.id ? null : tech.id)}
            >
              {/* Header de la carte */}
              <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 16px" }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 500, color: "#111", marginBottom: 2 }}>
                    {tech.name}
                  </div>
                  <div style={{ fontFamily: "monospace", fontSize: 12, color: tech.color }}>
                    {tech.rule}  ·  {tech.example}
                  </div>
                </div>
                <div style={{ fontSize: 11, color: "#bbb" }}>{activeTechnique === tech.id ? "▲" : "▼"}</div>
              </div>

              {/* Contenu développé */}
              {activeTechnique === tech.id && (
                <div style={{ padding: "0 16px 16px", borderTop: `0.5px solid ${tech.color}20` }}>
                  <p style={{ ...S.p, marginTop: 12 }}>{tech.description}</p>
                  <div style={{ ...S.tip, marginBottom: 14 }}>
                    <strong>À l'oreille :</strong> {tech.tip}
                  </div>

                  {/* Avant / Après audio */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                    <div style={{ background: "#fafafa", border: "0.5px solid #e5e5e5", borderRadius: 8, padding: "10px 12px" }}>
                      <div style={{ fontSize: 11, color: "#999", marginBottom: 4 }}>Original</div>
                      <div style={{ fontFamily: "monospace", fontSize: 12, color: "#444", marginBottom: 8 }}>
                        {tech.originalLabel}
                      </div>
                      <button
                        onClick={e => {
                          e.stopPropagation();
                          playProg(pianoRef as React.RefObject<PianoPlayerRef>, tech.originalChords, 1600, 1.5);
                        }}
                        style={{ fontSize: 11, padding: "4px 12px", border: "0.5px solid #ccc", borderRadius: 20, cursor: "pointer", background: "transparent", color: "#666" }}
                      >
                        ▶ Écouter
                      </button>
                    </div>
                    <div style={{ background: tech.bg, border: `0.5px solid ${tech.color}40`, borderRadius: 8, padding: "10px 12px" }}>
                      <div style={{ fontSize: 11, color: tech.color, marginBottom: 4 }}>Réharmonisé</div>
                      <div style={{ fontFamily: "monospace", fontSize: 12, color: tech.color, marginBottom: 8 }}>
                        {tech.reharmLabel}
                      </div>
                      <button
                        onClick={e => {
                          e.stopPropagation();
                          playProg(pianoRef as React.RefObject<PianoPlayerRef>, tech.reharmChords, 1600, 1.5);
                        }}
                        style={{ fontSize: 11, padding: "4px 12px", border: `0.5px solid ${tech.color}`, borderRadius: 20, cursor: "pointer", background: "transparent", color: tech.color }}
                      >
                        ▶ Écouter
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}

          <div style={S.warnBox}>
            <strong>Conduite de voix :</strong> une réharmonisation techniquement correcte peut
            sonner brusquement si les voix internes font de grands sauts. Préférer toujours le
            mouvement conjoint (demi-ton, ton) pour les voix internes — critère de qualité autant
            que la compatibilité mélodique.
          </div>
        </div>
      )}

      {/* ══ SECTION 2 : APPLICATIONS ══ */}
      {activeSection === "application" && (
        <div>
          <h2 style={S.h2}>Applications pratiques</h2>
          <p style={S.p}>
            La réharmonisation peut être appliquée <strong>par blocs</strong> (modifier un accord
            à la fois) ou de façon <strong>complète</strong> (reconstruire toute la grille sous la
            mélodie). Les grands pianistes jazz combinent les quatre techniques pour créer des
            progressions personnelles.
          </p>

          {/* Tableau comparatif */}
          <h3 style={S.h3}>Progressions originales vs réharmonisées</h3>
          {COMPARISONS.map(cmp => (
            <div
              key={cmp.id}
              style={{
                border: `0.5px solid ${activeComparison === cmp.id ? cmp.techniqueColor : "#e5e5e5"}`,
                borderRadius: 10,
                marginBottom: 10,
                overflow: "hidden",
                cursor: "pointer",
                background: activeComparison === cmp.id ? "#fafafa" : "#fff",
                transition: "all .15s",
              }}
              onClick={() => setActiveComparison(activeComparison === cmp.id ? null : cmp.id)}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 16px" }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 11, fontWeight: 600, color: cmp.techniqueColor, marginBottom: 2, letterSpacing: "0.04em" }}>
                    {cmp.technique}
                  </div>
                  <div style={{ fontFamily: "monospace", fontSize: 12, color: "#888" }}>
                    {cmp.originalLabel} <span style={{ color: "#ccc" }}>→</span>{" "}
                    <span style={{ color: cmp.techniqueColor }}>{cmp.reharmLabel}</span>
                  </div>
                </div>
                <div style={{ fontSize: 11, color: "#bbb" }}>{activeComparison === cmp.id ? "▲" : "▼"}</div>
              </div>

              {activeComparison === cmp.id && (
                <div style={{ padding: "0 16px 14px", borderTop: `0.5px solid ${cmp.techniqueColor}20` }}>
                  <div style={{ fontSize: 13, color: "#666", margin: "10px 0 14px", lineHeight: 1.6 }}>
                    {cmp.note}
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                    <div style={{ background: "#fafafa", border: "0.5px solid #e5e5e5", borderRadius: 8, padding: "10px 12px" }}>
                      <div style={{ fontSize: 11, color: "#999", marginBottom: 4 }}>Original</div>
                      <div style={{ fontFamily: "monospace", fontSize: 12, color: "#444", marginBottom: 8 }}>{cmp.originalLabel}</div>
                      <button
                        onClick={e => {
                          e.stopPropagation();
                          playProg(pianoRef as React.RefObject<PianoPlayerRef>, cmp.originalChords, 1600, 1.5);
                        }}
                        style={{ fontSize: 11, padding: "4px 12px", border: "0.5px solid #ccc", borderRadius: 20, cursor: "pointer", background: "transparent", color: "#666" }}
                      >
                        ▶ Original
                      </button>
                    </div>
                    <div style={{ background: "#f0f4f8", border: `0.5px solid ${cmp.techniqueColor}40`, borderRadius: 8, padding: "10px 12px" }}>
                      <div style={{ fontSize: 11, color: cmp.techniqueColor, marginBottom: 4 }}>Réharmonisé</div>
                      <div style={{ fontFamily: "monospace", fontSize: 12, color: cmp.techniqueColor, marginBottom: 8 }}>{cmp.reharmLabel}</div>
                      <button
                        onClick={e => {
                          e.stopPropagation();
                          playProg(pianoRef as React.RefObject<PianoPlayerRef>, cmp.reharmChords, 1600, 1.5);
                        }}
                        style={{ fontSize: 11, padding: "4px 12px", border: `0.5px solid ${cmp.techniqueColor}`, borderRadius: 20, cursor: "pointer", background: "transparent", color: cmp.techniqueColor }}
                      >
                        ▶ Réharm
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Pianistes célèbres */}
          <h3 style={S.h3}>Pianistes et réharmonisations célèbres</h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: "1.5rem" }}>
            {[
              { name: "Bill Evans", works: "Waltz for Debby, Autumn Leaves, My Foolish Heart", style: "Emprunts modaux, extensions, substitutions discrètes — 'signer' un standard sans le trahir", color: PRIMARY, bg: PRIMARY_BG },
              { name: "Keith Jarrett", works: "Stella by Starlight, My Song", style: "Réharmonisations libres, harmonisation parallèle, chromatismes expressifs", color: "#0F6E56", bg: "#E1F5EE" },
              { name: "Brad Mehldau", works: "Knives Out (Radiohead), Blackbird", style: "Réharmonisation cross-genre — mélodie pop, grille jazz complexe avec substitutions", color: "#6B3FA0", bg: "#F0EAFA" },
              { name: "John Coltrane", works: "My Favorite Things, Body and Soul", style: "Réharmonisation complète — grille entièrement remplacée (modale ou cycle de Coltrane)", color: "#7B1F1F", bg: "#FCEAEA" },
            ].map(({ name, works, style, color, bg }) => (
              <div key={name} style={{ border: `0.5px solid ${color}40`, borderRadius: 10, padding: "14px 16px", background: bg }}>
                <div style={{ fontSize: 13, fontWeight: 500, color, marginBottom: 4 }}>{name}</div>
                <div style={{ fontSize: 11, color: "#888", marginBottom: 6, fontStyle: "italic" }}>{works}</div>
                <div style={{ fontSize: 12, color: "#555", lineHeight: 1.6 }}>{style}</div>
              </div>
            ))}
          </div>

          {/* Réharm par blocs vs complète */}
          <div style={{ border: "0.5px solid #e5e5e5", borderRadius: 10, padding: "16px", marginBottom: "1rem" }}>
            <div style={{ fontSize: 14, fontWeight: 500, color: "#111", marginBottom: 12 }}>
              Par blocs vs réharmonisation complète
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <div>
                <div style={{ fontSize: 12, fontWeight: 500, color: "#555", marginBottom: 6 }}>Par blocs</div>
                <div style={{ fontSize: 12, color: "#777", lineHeight: 1.6 }}>
                  Modifier un accord à la fois. Plus sécurisé — on contrôle l'impact de chaque substitution.
                  Bill Evans procède souvent ainsi : un IVm ici, un Db7 là.
                </div>
              </div>
              <div>
                <div style={{ fontSize: 12, fontWeight: 500, color: "#555", marginBottom: 6 }}>Complète</div>
                <div style={{ fontSize: 12, color: "#777", lineHeight: 1.6 }}>
                  Reconstruire toute la grille. Plus radical et créatif. Coltrane transforme My Favorite Things
                  en grille modale totalement nouvelle — mélodie intacte.
                </div>
              </div>
            </div>
          </div>

          <div style={S.tip}>
            <strong>Principle de Bill Evans :</strong> 'ne jamais sacrifier la conduite de voix'.
            Chaque changement d'accord doit laisser les voix internes bouger par demi-tons ou tons.
            Les grandes progressions jazz sonnent fluides précisément parce que les voix internes
            se déplacent peu — la mélodie fait le travail expressif.
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
