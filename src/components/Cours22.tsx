"use client";

/**
 * Cours22.tsx
 * Harmonia · Niveau 2 · Cours 22 — La réharmonisation
 * Convention : affichage anglais, dotKeys PianoPlayer français
 */

import React, { useRef, useState } from "react";
import { useCoursI18n } from "@/hooks/useCoursI18n";
import { useCoursContent } from "@/hooks/useCoursContent";
import { cours22Content } from "@/data/cours22Content";
import PianoPlayer, { PianoPlayerRef } from "@/components/PianoPlayer";
import MaitreCard from "@/components/MaitreCard";

const PRIMARY = "#2D5A8E";

function playProgression(ref: React.RefObject<PianoPlayerRef>, chords: string[][], chordGap = 800) {
  chords.forEach((chord, ci) => {
    chord.forEach((key, ni) => {
      const [note, octStr] = key.split(":");
      setTimeout(() => ref.current?.playNote(note, parseInt(octStr), { duration: 1.4 }), ci * chordGap + ni * 80);
    });
  });
}

// ── Techniques ────────────────────────────────────────────────────────────────

interface Technique {
  id: string;
  name: string;
  emoji: string;
  color: string;
  bg: string;
  description: string;
  rule: string;
  before: string[];
  after: string[];
  dotKeysBefore: string[][];
  dotKeysAfter: string[][];
  tip: string;
}

const TECHNIQUES: Technique[] = [
  {
    id: "diatonique",
    name: "Substitution diatonique",
    emoji: "🔄",
    color: "#0F6E56",
    bg: "#E1F5EE",
    description: "Remplacer un accord par un autre accord diatonique qui partage au moins 2 notes communes. Les accords à distance de tierce sont les meilleurs candidats — ils partagent 2 notes sur 3.",
    rule: "Substitut = accord diatonique à distance de 3ce ou 6te (2 notes communes minimum).",
    before: ["Dm7", "G7", "CMaj7"],
    after: ["Fmaj7", "Em7", "CMaj7"],
    dotKeysBefore: [
      ["Ré:3","Fa:3","La:3","Do:4"],
      ["Sol:3","Si:3","Ré:4","Fa:4"],
      ["Do:3","Mi:3","Sol:3","Si:3"],
    ],
    dotKeysAfter: [
      ["Fa:3","La:3","Do:4","Mi:4"],
      ["Mi:3","Sol:3","Si:3","Ré:4"],
      ["Do:3","Mi:3","Sol:3","Si:3"],
    ],
    tip: "Les substituts à tierce gardent 2 notes communes — la mélodie reste compatible. Fmaj7 substitue Dm7 : partagent F, A, C.",
  },
  {
    id: "tritonique",
    name: "Substitution tritonique",
    emoji: "🔀",
    color: "#993C1D",
    bg: "#FAECE7",
    description: "Remplacer V7 par l'accord de dominante situé un triton plus bas (6 demi-tons). Les deux accords partagent leur guide-tone (3ce et 7te permutées) et créent une basse chromatique descendante.",
    rule: "Substitut tritonique de V7 = ♭II7 (triton = 6 demi-tons). G7 → D♭7.",
    before: ["Dm7", "G7", "CMaj7"],
    after: ["Dm7", "D♭7", "CMaj7"],
    dotKeysBefore: [
      ["Ré:3","Fa:3","La:3","Do:4"],
      ["Sol:3","Si:3","Ré:4","Fa:4"],
      ["Do:3","Mi:3","Sol:3","Si:3"],
    ],
    dotKeysAfter: [
      ["Ré:3","Fa:3","La:3","Do:4"],
      ["Ré♭:3","Fa:3","La♭:3","Si:3"],
      ["Do:3","Mi:3","Sol:3","Si:3"],
    ],
    tip: "La basse D♭→C (demi-ton) crée un mouvement chromatique expressif — signature du bebop et du jazz moderne.",
  },
  {
    id: "modal",
    name: "Emprunt modal",
    emoji: "🌓",
    color: "#6B3FA0",
    bg: "#F0EAFA",
    description: "Emprunter un accord au mode parallèle (même tonique, mode différent). Fmaj7 → Fm7 : on emprunte le IVm du mode mineur parallèle, créant une couleur sombre inattendue.",
    rule: "Emprunt modal = accord d'un mode parallèle (même tonique, couleur différente).",
    before: ["CMaj7", "Fmaj7", "G7"],
    after: ["CMaj7", "Fm7", "G7"],
    dotKeysBefore: [
      ["Do:3","Mi:3","Sol:3","Si:3"],
      ["Fa:3","La:3","Do:4","Mi:4"],
      ["Sol:3","Si:3","Ré:4","Fa:4"],
    ],
    dotKeysAfter: [
      ["Do:3","Mi:3","Sol:3","Si:3"],
      ["Fa:3","La♭:3","Do:4","Mi♭:4"],
      ["Sol:3","Si:3","Ré:4","Fa:4"],
    ],
    tip: "L'emprunt modal introduit une note étrangère — vérifiez que la mélodie supporte le ♭ supplémentaire.",
  },
  {
    id: "parallele",
    name: "Harmonisation parallèle",
    emoji: "⬇️",
    color: "#BA7517",
    bg: "#FAEEDA",
    description: "Transposer un accord de même qualité par mouvement conjoint (demi-tons ou tons entiers). CMaj7 → BMaj7 → B♭Maj7 : trois Maj7 descendant chromatiquement sous une mélodie tenue.",
    rule: "Parallélisme = même type d'accord transposé par mouvement conjoint.",
    before: ["CMaj7", "Am7", "Fmaj7"],
    after: ["CMaj7", "BMaj7", "B♭Maj7"],
    dotKeysBefore: [
      ["Do:3","Mi:3","Sol:3","Si:3"],
      ["La:2","Do:3","Mi:3","Sol:3"],
      ["Fa:3","La:3","Do:4","Mi:4"],
    ],
    dotKeysAfter: [
      ["Do:3","Mi:3","Sol:3","Si:3"],
      ["Si:2","Ré♯:3","Fa♯:3","La♯:3"],
      ["Si♭:2","Ré:3","Fa:3","La:3"],
    ],
    tip: "Le parallélisme crée une couleur impressionniste. La mélodie peut rester sur une note tenue pendant que les accords descendent.",
  },
];

// ── Analyses ──────────────────────────────────────────────────────────────────

interface Analyse {
  id: string;
  title: string;
  artist: string;
  technique: string;
  emoji: string;
  color: string;
  bg: string;
  context: string;
  before: string[];
  after: string[];
  dotKeysBefore: string[][];
  dotKeysAfter: string[][];
  insight: string;
}

const ANALYSES: Analyse[] = [
  {
    id: "peace",
    title: "Peace Piece",
    artist: "Bill Evans",
    technique: "Emprunt modal",
    emoji: "🕊️",
    color: PRIMARY,
    bg: "#E8EFF8",
    context: "Peace Piece (1958) repose sur une pédale de basse C. Evans transforme la couleur harmonique en empruntant des accords au mode mineur parallèle — sans jamais quitter la fondamentale C.",
    before: ["CMaj7", "G7", "CMaj7"],
    after: ["CMaj7", "Cm7", "Fm7"],
    dotKeysBefore: [
      ["Do:3","Mi:3","Sol:3","Si:3"],
      ["Sol:3","Si:3","Ré:4","Fa:4"],
      ["Do:3","Mi:3","Sol:3","Si:3"],
    ],
    dotKeysAfter: [
      ["Do:3","Mi:3","Sol:3","Si:3"],
      ["Do:3","Mi♭:3","Sol:3","Si♭:3"],
      ["Fa:3","La♭:3","Do:4","Mi♭:4"],
    ],
    insight: "Cm7 et Fm7 (C mineur parallèle) transforment la clarté majeure en méditation sombre — même basse C, couleur radicalement différente.",
  },
  {
    id: "autumn",
    title: "Autumn Leaves (sub tritonique)",
    artist: "Jazz standard",
    technique: "Substitution tritonique",
    emoji: "🍂",
    color: "#993C1D",
    bg: "#FAECE7",
    context: "En Cm, la progression II–V–I (Dm7♭5–G7–Cm) est réharmonisée avec une substitution tritonique sur G7 → D♭7, créant la basse chromatique D–D♭–C.",
    before: ["Dm7♭5", "G7", "Cm"],
    after: ["Dm7♭5", "D♭7", "Cm"],
    dotKeysBefore: [
      ["Ré:3","Fa:3","La♭:3","Do:4"],
      ["Sol:3","Si:3","Ré:4","Fa:4"],
      ["Do:3","Mi♭:3","Sol:3"],
    ],
    dotKeysAfter: [
      ["Ré:3","Fa:3","La♭:3","Do:4"],
      ["Ré♭:3","Fa:3","La♭:3","Si:3"],
      ["Do:3","Mi♭:3","Sol:3"],
    ],
    insight: "La basse D → D♭ → C descend chromatiquement — une des progressions les plus élégantes du jazz. D♭7 et G7 partagent leurs guide-tones (tierce et septième inversées).",
  },
  {
    id: "mehldau",
    title: "Harmonisation parallèle",
    artist: "Brad Mehldau",
    technique: "Harmonisation parallèle",
    emoji: "🎹",
    color: "#BA7517",
    bg: "#FAEEDA",
    context: "Mehldau utilise régulièrement des blocs d'accords Maj7 descendant chromatiquement — héritage de Bill Evans et de l'impressionnisme de Debussy. Une note de mélodie tenue crée une tension/relâchement unique.",
    before: ["CMaj7", "Am7", "Fmaj7"],
    after: ["CMaj7", "BMaj7", "B♭Maj7"],
    dotKeysBefore: [
      ["Do:3","Mi:3","Sol:3","Si:3"],
      ["La:2","Do:3","Mi:3","Sol:3"],
      ["Fa:3","La:3","Do:4","Mi:4"],
    ],
    dotKeysAfter: [
      ["Do:3","Mi:3","Sol:3","Si:3"],
      ["Si:2","Ré♯:3","Fa♯:3","La♯:3"],
      ["Si♭:2","Ré:3","Fa:3","La:3"],
    ],
    insight: "Trois Maj7 descendant chromatiquement — chaque accord est indépendant de la tonalité d'origine, mais l'ensemble sonne cohérent grâce au mouvement régulier de la basse.",
  },
];

// ── Quiz ──────────────────────────────────────────────────────────────────────

const ALL_QUESTIONS = [
  // Définition et principe
  { q: "Qu'est-ce que la réharmonisation ?", opts: ["Transposer une mélodie dans une autre tonalité","Remplacer les accords d'une progression tout en conservant la mélodie","Ajouter des extensions à tous les accords","Changer le rythme harmonique"], a: 1, fb: "La réharmonisation consiste à remplacer les accords d'une progression existante par d'autres accords, tout en conservant la mélodie intacte. C'est l'art de modifier 'le sol' sans toucher 'le toit'." },
  { q: "Quelle est la contrainte fondamentale de la réharmonisation ?", opts: ["Les nouveaux accords doivent être dans la même tonalité","La mélodie doit rester compatible avec les nouveaux accords","Le rythme harmonique doit doubler","Les accords doivent être plus complexes"], a: 1, fb: "La mélodie doit rester compatible avec les nouveaux accords — c'est la contrainte fondamentale. La note de mélodie doit être consonante avec chaque nouvel accord (fondamentale, tierce, quinte, 7te, 9te, 11te, 13te)." },
  { q: "Qu'est-ce qu'un 'guide-tone' ?", opts: ["La note la plus haute de l'accord","La tierce et la septième d'un accord de dominante","La fondamentale et la quinte","La 9te d'un accord étendu"], a: 1, fb: "Les guide-tones sont la tierce et la septième d'un accord de dominante. Ces deux notes définissent le triton caractéristique — elles sont au cœur des substitutions tritoniques." },
  { q: "Quel compositeur est célèbre pour ses réharmonisations impressionnistes ?", opts: ["Beethoven","Mozart","Bill Evans","Haendel"], a: 2, fb: "Bill Evans (1929–1980) est l'un des plus grands maîtres de la réharmonisation. Ses réharmonisations de standards jazz, utilisant emprunts modaux et harmonisation parallèle, ont révolutionné le piano jazz." },
  { q: "Pourquoi réharmoniser ?", opts: ["Pour faciliter la lecture","Pour corriger une erreur harmonique","Pour enrichir la couleur, créer de l'intérêt, personnaliser l'arrangement","Pour raccourcir la progression"], a: 2, fb: "On réharmonise pour enrichir la couleur harmonique, créer de l'intérêt ou de la surprise, personnaliser un arrangement, ou exprimer une vision musicale différente." },
  { q: "Une note de mélodie est 'compatible' avec un accord si :", opts: ["Elle est la fondamentale de l'accord uniquement","Elle est fondamentale, 3ce, 5te, 7te, 9te, #11 ou 13te de l'accord","Elle n'est pas dans l'accord","Elle est la plus haute de l'accord"], a: 1, fb: "Une note est compatible si elle fait partie des extensions de l'accord : fondamentale, tierce, quinte, 7te, 9te, 11te augmentée (#4), 13te. Les notes de tension forte (9te mineure, 11te juste sur accord majeur) sont généralement à éviter." },
  { q: "Quelle est l'avoid note classique sur un accord Maj7 ?", opts: ["La 9te","La 4te juste (11te naturelle)","La 6te majeure","La 7te mineure"], a: 1, fb: "La 4te juste (11te naturelle) est l'avoid note classique sur un accord Maj7. En CMaj7, F est à ½ ton de E (tierce de l'accord) — dissonance de ½ ton très forte. On préfère utiliser F# (#11) en jazz." },
  { q: "Quel mouvement de basse est souvent créé par une bonne réharmonisation ?", opts: ["Basse statique","Basse par sauts d'octave","Basse avec mouvement chromatique ou conjoint","Basse par quintes"], a: 2, fb: "Une réharmonisation efficace crée souvent un mouvement de basse chromatique ou conjoint — ex. D → D♭ → C dans la substitution tritonique sur Autumn Leaves. Ce mouvement fluide est une signature des meilleures réharmonisations." },
  { q: "La réharmonisation est particulièrement utilisée dans :", opts: ["La musique baroque","La musique sérielle","Le jazz et la musique impressionniste","La polyphonie médiévale"], a: 2, fb: "La réharmonisation est au cœur du jazz (Bill Evans, Miles Davis, Brad Mehldau) et de la musique impressionniste (Debussy, Ravel). Ces styles partagent un goût pour la couleur harmonique plutôt que la tension-résolution." },
  { q: "Dans une réharmonisation, quel paramètre ne change PAS par définition ?", opts: ["Les accords","La mélodie","Le rythme harmonique","La tonalité d'ensemble"], a: 1, fb: "Par définition, la réharmonisation conserve la mélodie intacte. C'est le principe fondateur : on change les accords 'sous' la mélodie, qui reste la même." },
  { q: "La notion d'harmonie 'fonctionnelle' vs harmonie 'coloriste' est centrale car :", opts: ["L'une est jazz et l'autre classique","L'harmonisation fonctionnelle crée tension-résolution, la coloriste crée des atmosphères","La coloriste est uniquement modale","La fonctionnelle est uniquement diatonique"], a: 1, fb: "Harmonie fonctionnelle : les accords créent tension–résolution. Harmonie coloriste : les accords sont des couleurs autonomes. La réharmonisation peut aller vers plus de colorisme (Evans, Debussy) ou rester fonctionnelle (bebop)." },
  { q: "Peut-on réharmoniser en modifiant le rythme harmonique ?", opts: ["Non, le rythme harmonique ne fait pas partie de la réharmonisation","Oui — accélérer (plus d'accords) ou ralentir (pédales) est aussi une forme de réharmonisation","Oui, mais uniquement en accélérant","Non, la mélodie empêche tout changement de rythme"], a: 1, fb: "Le rythme harmonique (fréquence des changements d'accords) peut être modifié dans une réharmonisation. Une pédale (accord tenu) ou une subdivision plus dense sont des outils de réharmonisation à part entière." },
  { q: "Une réharmonisation peut-elle modifier la tonalité d'une pièce ?", opts: ["Non, jamais","Oui — une réharmonisation peut induire une nouvelle tonalité","Oui, mais seulement vers le relatif mineur","Seulement si on change aussi le mode"], a: 1, fb: "Oui — une réharmonisation audacieuse peut glisser vers une nouvelle tonalité implicite. C'est d'ailleurs une manière de créer une modulation progressive et fluide, sans rupture brutale." },
  { q: "Quel style musical a popularisé la réharmonisation comme technique d'arrangement codifiée ?", opts: ["La musique classique baroque","Le jazz des années 1950–1970","La musique folk","La musique contemporaine dodécaphonique"], a: 1, fb: "Le jazz des années 1950–1970 — particulièrement le jazz modal et post-bop — a popularisé la réharmonisation systématique. Miles Davis, Bill Evans et leurs contemporains ont élevé cette technique au rang d'art." },
  { q: "Quelle est la différence entre substitution et réharmonisation ?", opts: ["Ce sont des synonymes exacts","La substitution remplace un accord, la réharmonisation transforme toute une progression","La substitution est plus avancée","La réharmonisation ne change pas la mélodie"], a: 1, fb: "La substitution désigne le remplacement d'un accord spécifique (ex. G7 → D♭7). La réharmonisation est un terme plus large qui peut transformer toute une progression — elle englobe la substitution et d'autres techniques." },
  // Substitution diatonique
  { q: "Qu'est-ce que la substitution diatonique ?", opts: ["Remplacer un accord par son accord de dominante","Remplacer un accord par un autre accord diatonique qui partage des notes communes","Ajouter la 7te à tous les accords","Remplacer les accords mineurs par des majeurs"], a: 1, fb: "La substitution diatonique remplace un accord par un autre accord de la même gamme (diatonique) qui partage des notes communes. Les accords à distance de tierce sont les meilleurs candidats — ils partagent 2 notes sur 3." },
  { q: "Pourquoi les accords à distance de tierce sont-ils de bons substituts diatoniques ?", opts: ["Ils ont la même fondamentale","Ils partagent 2 notes communes sur 3 (triade)","Ils sont toujours de la même qualité","Ils créent la même couleur exactement"], a: 1, fb: "En C majeur : CMaj (C E G) et Em (E G B) partagent E et G. Cette communauté de notes garantit que la mélodie reste compatible — c'est le principe de la substitution diatonique." },
  { q: "Quel accord est le substitut diatonique naturel de I (accord de tonique) ?", opts: ["IV","V","VI (relatif mineur)","VII"], a: 2, fb: "Le VIm (relatif mineur) est le substitut diatonique naturel de I. En C majeur : Am est le substitut de CMaj — ils partagent C et E, deux des trois notes de la triade." },
  { q: "En C majeur, quel accord peut substituer Dm7 par substitution diatonique ?", opts: ["GMaj7","Fmaj7","Bm7♭5","CMaj7"], a: 1, fb: "Fmaj7 peut substituer Dm7 — ils partagent F, A, C (3 notes communes). Fmaj7 = F A C E ; Dm7 = D F A C. Trois notes communes : F, A, C." },
  { q: "La progression II–V–I (Dm7–G7–CMaj7) réharmonisée en Fmaj7–Em7–CMaj7 illustre :", opts: ["Substitution tritonique","Substitution diatonique des deux premiers accords","Emprunt modal","Harmonisation parallèle"], a: 1, fb: "Fmaj7 substitue Dm7 (3 notes communes : F A C), Em7 substitue G7 (3 notes communes : G B D). Double substitution diatonique — la tension du II–V est diffusée, la couleur devient plus modale." },
  { q: "En G majeur, quel accord est le substitut diatonique naturel de GMaj7 (I) ?", opts: ["Am7 (II)","Bm7 (III)","Em7 (VI)","D7 (V)"], a: 2, fb: "Em7 (VIm) est le substitut diatonique naturel de GMaj7 (I) en G majeur. GMaj7 = G B D F# ; Em7 = E G B D. Ils partagent G, B, D — trois notes communes." },
  { q: "Quel risque principal comporte la substitution diatonique ?", opts: ["Sortir de la tonalité","Perdre la tension harmonique de l'original (le V7 perd sa fonction de dominante)","Rendre la progression trop complexe","Créer des mouvements de basse parallèles"], a: 1, fb: "En substituant V7, on peut perdre la tension de dominante. C'est un risque (moins de tension) mais aussi un avantage (atmosphère plus modale, moins tonale)." },
  { q: "Em7 → G7 en C majeur illustre quelle relation diatonique ?", opts: ["Substitut à distance de 2de","IIIm substitue V7 (partagent G, B, D)","Substitut à distance de quinte","Substitut de sous-dominante"], a: 1, fb: "Em7 et G7 partagent G, B, D — trois notes communes. Em7 peut substituer G7 en créant une couleur moins tendue. C'est la substitution par le IIIm du Ve degré." },
  { q: "La substitution diatonique préserve toujours :", opts: ["La qualité (majeur/mineur) de l'accord original","La fonction harmonique de l'accord original","La tonalité générale de la progression","La note de basse originale"], a: 2, fb: "La substitution diatonique reste dans la même gamme — elle préserve la tonalité générale. En revanche, elle peut modifier la fonction et la qualité de l'accord." },
  // Substitution tritonique
  { q: "Qu'est-ce que la substitution tritonique ?", opts: ["Remplacer tout accord par sa transposition de triton","Remplacer V7 par l'accord de dominante situé un triton plus bas","Ajouter un triton à l'accord de dominante","Utiliser des accords augmentés"], a: 1, fb: "La substitution tritonique remplace V7 par l'accord de dominante situé un triton plus bas (6 demi-tons). G7 → D♭7. Ces deux accords partagent leur guide-tone (tierce et septième inversées)." },
  { q: "Pourquoi G7 et D♭7 sont-ils des substituts tritoniques l'un de l'autre ?", opts: ["Ils ont la même fondamentale octaviée","Ils partagent le même guide-tone : B/C♭ et F (enharmoniques)","Ils sont tous deux en mode dorien","Ils ont la même quinte"], a: 1, fb: "G7 : guide-tone B (3ce) et F (7te). D♭7 : guide-tone F (3ce) et C♭/B (7te). B et C♭ sont enharmoniques, F est commun. Ces deux notes de tension sont partagées." },
  { q: "Quel est le substitut tritonique de C7 ?", opts: ["F7","G♭7","G7","E♭7"], a: 1, fb: "G♭7 est le substitut tritonique de C7. Distance C → G♭ = 6 demi-tons. C7 : guide-tone E (3ce) et B♭ (7te) ; G♭7 : guide-tone B♭ (3ce) et F♭/E (7te)." },
  { q: "Quel effet crée la substitution tritonique sur la basse ?", opts: ["Basse qui monte d'une quinte","Basse chromatique descendante (ex. G → D♭ → C)","Basse statique","Basse qui descend par quintes"], a: 1, fb: "La substitution tritonique crée une basse chromatique descendante. Dans II–V–I en C avec sub tri sur V : D → D♭ → C. Ce mouvement de ½ ton D♭→C est très expressif et fluide." },
  { q: "La substitution tritonique s'applique principalement à :", opts: ["Tous les types d'accords","Les accords de tonique (Maj7)","Les accords de dominante (7te)","Les accords de sous-dominante mineurs"], a: 2, fb: "La substitution tritonique s'applique principalement aux accords de dominante (7te). Le triton interne de V7 (guide-tone) est la condition nécessaire." },
  { q: "Dans Autumn Leaves en Cm, la substitution tritonique de G7 donne :", opts: ["C7","F#7 / G♭7","D♭7","A♭7"], a: 2, fb: "G7 → D♭7 (triton de G). La basse devient : Dm7♭5 (D) → D♭7 (D♭) → Cm (C) — mouvement chromatique D → D♭ → C. C'est l'une des réharmonisations les plus célèbres du jazz." },
  { q: "La substitution tritonique a été développée principalement dans :", opts: ["La musique baroque (XVIIe siècle)","Le jazz bebop (années 1940–1950)","La musique sérielle (XXe siècle)","L'impressionnisme (début XXe)"], a: 1, fb: "La substitution tritonique a été développée dans le bebop des années 1940–1950, popularisée par Charlie Parker, Dizzy Gillespie et Thelonious Monk." },
  { q: "Quel est le substitut tritonique de D7 ?", opts: ["G♯7 / A♭7","A7","E♭7 / D♯7","F7"], a: 0, fb: "A♭7 est le substitut tritonique de D7. Distance D → A♭ = 6 demi-tons. Guide-tones de D7 : F# (3ce) et C (7te). Guide-tones de A♭7 : C (3ce) et G♭ (7te = F# enharmonique)." },
  { q: "Quel est le substitut tritonique de F7 ?", opts: ["B7","C7","E7","G7"], a: 0, fb: "B7 est le substitut tritonique de F7. Distance F → B = 6 demi-tons. Guide-tones de F7 : A (3ce) et E♭ (7te). Guide-tones de B7 : D# (3ce = E♭ enharmonique) et A (7te)." },
  { q: "Peut-on appliquer la substitution tritonique à une dominante secondaire ?", opts: ["Non, uniquement au V7 principal","Oui — le V7/II (A7 en C) peut être remplacé par E♭7","Oui, mais uniquement si c'est le V7/IV","Seulement si la progression dure 2 mesures minimum"], a: 1, fb: "Oui — la substitution tritonique s'applique à tout accord de dominante, y compris les dominantes secondaires. V7/II = A7 en C majeur → E♭7 (triton de A)." },
  // Emprunt modal
  { q: "Qu'est-ce qu'un emprunt modal ?", opts: ["Utiliser des gammes modales dans une progression tonale","Emprunter un accord au mode parallèle (même tonique, mode différent)","Transposer un accord dans un autre mode","Utiliser le mode lydien sur un accord majeur"], a: 1, fb: "L'emprunt modal consiste à emprunter un accord au mode parallèle — même tonique, mode différent. En C majeur, Fm7 est emprunté à C mineur. La tonique reste identique, on emprunte la couleur du mineur." },
  { q: "En C majeur, quels accords sont typiquement empruntés au mode mineur parallèle ?", opts: ["Am7, Em7, Dm7","♭VIMaj7, ♭VIIMaj7, IVm7","II7, III7, VI7","VIIdim, IVdim, IIdim"], a: 1, fb: "Les emprunts classiques du mineur parallèle en C majeur : Fm7 (IVm), A♭Maj7 (♭VI), B♭Maj7 (♭VII). Ces accords bémolisés introduisent des ♭ étrangers à C majeur mais naturels dans C mineur." },
  { q: "L'accord ♭VIIMaj7 en C majeur (B♭Maj7) est emprunté à :", opts: ["G mixolydien","C mineur (éolien)","F lydien","D dorien"], a: 1, fb: "B♭Maj7 = ♭VIIMaj7 en C majeur. En C mineur naturel (éolien), le VIIe degré est B♭ — c'est l'accord ♭VII naturel du mineur, emprunté au mode mineur parallèle." },
  { q: "La succession CMaj7 → Cm7 illustre :", opts: ["Substitution tritonique","Emprunt modal (même tonique, couleur majeur → mineur)","Harmonisation parallèle","Substitution diatonique"], a: 1, fb: "CMaj7 → Cm7 : même fondamentale C, passage du mode majeur au mode mineur. C'est le cœur de l'emprunt modal — même tonique, couleur différente. Bill Evans exploite ce geste dans Peace Piece." },
  { q: "Bill Evans utilise l'emprunt modal dans Peace Piece en :", opts: ["Remplaçant G7 par D♭7","Empruntant Cm7 et Fm7 au mode C mineur sur une pédale de C","Utilisant des gammes pentatoniques","Transposant la mélodie en mode dorien"], a: 1, fb: "Dans Peace Piece, Evans maintient C comme pédale de basse et emprunte Cm7 et Fm7 au C mineur parallèle. Ce balancement Maj7 ↔ m7 crée la couleur méditative caractéristique de la pièce." },
  { q: "En G majeur, quel accord est l'emprunt modal ♭VIMaj7 ?", opts: ["E♭Maj7","FMaj7","B♭Maj7","A♭Maj7"], a: 0, fb: "♭VI en G = E♭. E♭Maj7 est emprunté à G mineur (G éolien) où le VIe degré est E♭. C'est un accord très expressif dans une progression en G majeur." },
  { q: "L'accord IVm dans une tonalité majeure (ex. Fm dans C) crée quel effet ?", opts: ["Clarté et stabilité renforcée","Une couleur sombre inattendue due à la tierce mineure et la 7te bémolisée empruntées","Plus de tension de dominante","Résolution plagale pure"], a: 1, fb: "Fm7 = F A♭ C E♭. Le A♭ et le E♭ sont empruntés à C mineur. Ces notes ♭ créent une couleur sombre inattendue dans un contexte majeur — c'est précisément l'effet recherché." },
  { q: "Peut-on emprunter des accords à d'autres modes que le mineur parallèle ?", opts: ["Non, uniquement au mineur parallèle","Oui — phrygien, lydien, dorien, etc. sont aussi des sources d'emprunts","Oui, mais uniquement dans le jazz","Seulement pour les accords de sous-dominante"], a: 1, fb: "Oui — on peut emprunter à n'importe quel mode parallèle. ♭II (de phrygien), #IV (de lydien), ♭VI (de mixolydien ou éolien), etc. Plus l'emprunt vient d'un mode éloigné, plus la couleur est surprenante." },
  // Harmonisation parallèle
  { q: "Qu'est-ce que l'harmonisation parallèle ?", opts: ["Harmoniser une mélodie avec deux voix à la tierce","Transposer un accord de même qualité par mouvement conjoint (demi-tons ou tons)","Doubler la mélodie à l'octave inférieure","Utiliser des accords parallèles à distance de quinte"], a: 1, fb: "L'harmonisation parallèle consiste à transposer un bloc d'accords (de même qualité) par mouvement conjoint. CMaj7 → BMaj7 → B♭Maj7 : trois Maj7 descendant chromatiquement." },
  { q: "Le parallélisme chromatique avec des accords Maj7 est associé à :", opts: ["Le contrepoint baroque strict","L'impressionnisme français et le jazz modal (Debussy, Bill Evans)","La musique sérielle","Le blues traditionnel"], a: 1, fb: "Le parallélisme chromatique avec des Maj7 est la signature de l'impressionnisme (Debussy) et du jazz modal (Bill Evans, Herbie Hancock). C'est l'une des sonorités les plus 'contemporaines' en harmonie." },
  { q: "Dans une harmonisation parallèle, la mélodie :", opts: ["Doit impérativement se mouvoir conjointement","Peut rester sur une note tenue pendant que les accords bougent","Doit suivre la même direction que les accords","Doit être doublée à la tierce inférieure"], a: 1, fb: "La note de mélodie peut rester tenue (pédale mélodique) pendant que les accords descendent chromatiquement. Cette tension entre mélodie fixe et harmonie mobile est très expressive." },
  { q: "CMaj7 → BMaj7 → B♭Maj7 illustre une harmonisation parallèle :", opts: ["Par tons entiers","Chromatique descendante (½ ton ½ ton)","Par tierces descendantes","Par quintes descendantes"], a: 1, fb: "C → B → B♭ : chaque fondamentale descend d'un demi-ton. C'est le parallélisme chromatique — le plus expressif dans le jazz moderne." },
  { q: "Quel compositeur classique a popularisé les accords en glissement parallèle ?", opts: ["Debussy","Beethoven","Brahms","Schoenberg"], a: 0, fb: "Claude Debussy a popularisé les accords en glissement parallèle dans l'impressionnisme. Dans 'La cathédrale engloutie', des blocs parallèles créent la couleur organique caractéristique." },
  { q: "Pourquoi l'harmonisation parallèle 'libère' les accords de leurs fonctions tonales ?", opts: ["Elle élimine les accords de dominante","Les accords parallèles créent une couleur, pas une tension-résolution — pensée coloriste","Elle change la tonalité à chaque accord","Elle utilise uniquement des accords de sous-dominante"], a: 1, fb: "Dans le parallélisme, les accords ne jouent plus leur rôle fonctionnel (T/SD/D) — chaque accord est une couleur à part entière. C'est la pensée modale/coloriste plutôt que fonctionnelle/tonale." },
  // Analyse comparative
  { q: "Comparer substitution diatonique et tritonique : quelle affirmation est vraie ?", opts: ["La diatonique s'applique à V7, la tritonique à tous les accords","La tritonique s'applique spécifiquement à V7 ; la diatonique s'applique à tous les degrés","Les deux s'appliquent uniquement aux accords mineurs","La diatonique sort de la gamme, la tritonique non"], a: 1, fb: "La substitution tritonique cible spécifiquement V7 (et les dominantes secondaires). La substitution diatonique s'applique à n'importe quel degré de la gamme." },
  { q: "Quelle technique crée le mouvement de basse le plus chromatique ?", opts: ["Substitution diatonique","Emprunt modal","Substitution tritonique","Harmonisation parallèle par tons"], a: 2, fb: "La substitution tritonique crée le mouvement de basse chromatique le plus direct : V7 → sub(V7) → I donne ½ ton → I (ex. G → D♭ → C). C'est le plus expressif et le plus 'jazz'." },
  { q: "Quelle technique est la plus 'douce' (moins chromatique, dans la tonalité) ?", opts: ["Substitution tritonique","Emprunt modal","Harmonisation parallèle chromatique","Substitution diatonique"], a: 3, fb: "La substitution diatonique reste entièrement dans la gamme — elle ne sort jamais de la tonalité. C'est la technique la moins chromatique, la plus 'intérieure' à la tonalité." },
  { q: "Bill Evans est né et mort en :", opts: ["1910–1975","1929–1980","1945–1990","1920–1965"], a: 1, fb: "Bill Evans (1929–1980) est l'un des pianistes jazz les plus influents du XXe siècle. Ses innovations harmoniques — réharmonisations, voicings en clusters, emprunts modaux — ont défini le piano jazz moderne." },
  { q: "Quel album de Miles Davis (avec Bill Evans) est fondateur du jazz modal ?", opts: ["A Love Supreme","Kind of Blue (1959)","Bitches Brew","Sketches of Spain"], a: 1, fb: "Kind of Blue (1959) est l'album de jazz le plus vendu de tous les temps. Bill Evans a contribué aux notes de programme. So What, Flamenco Sketches — chacun illustre une approche modale distincte." },
  { q: "Brad Mehldau est particulièrement connu pour ses réharmonisations de :", opts: ["Bach et Haendel uniquement","Standards jazz et chansons pop/rock (Radiohead, Beatles)","Musiques de films","Opéras italiens"], a: 1, fb: "Brad Mehldau (né 1970) est célèbre pour ses réinterprétations jazz de pop et rock — Radiohead (Exit Music for a Film), Beatles (Blackbird). Ses réharmonisations transforment ces mélodies connues en œuvres jazz sophistiquées." },
  { q: "La progression 'Coltrane changes' (Giant Steps) utilise quel principe ?", opts: ["Substitutions diatoniques uniquement","Cycle de tierces majeures divisant l'octave en 3 parties égales","Harmonisation parallèle en blocs","Emprunts modaux au mode phrygien"], a: 1, fb: "John Coltrane dans Giant Steps (1960) divise l'octave en trois tierces majeures : B – G – E♭ – B. Chaque tonalité dure seulement 2 beats. C'est une réharmonisation radicale qui remplace le cycle de quintes." },
  { q: "Quel pianiste classique a fortement influencé l'harmonisation parallèle jazz ?", opts: ["Rachmaninov","Debussy (impressionnisme français)","Brahms","Bartók"], a: 1, fb: "Claude Debussy (1862–1918) a directement influencé le jazz via ses accords parallèles, gammes par tons et couleurs harmoniques non fonctionnelles. Bill Evans citait Debussy comme influence majeure." },
  { q: "Quelle affirmation décrit le mieux la réharmonisation comme outil créatif ?", opts: ["C'est une technique de correction d'harmonies incorrectes","C'est l'art de transformer la couleur harmonique d'une œuvre tout en respectant sa mélodie — une signature personnelle","C'est uniquement une technique pédagogique","C'est une technique de simplification pour débutants"], a: 1, fb: "La réharmonisation est une signature musicale personnelle. Bill Evans, Miles Davis, Keith Jarrett, Brad Mehldau — chacun a développé un langage reconnaissable. C'est l'art de transformer une œuvre en expression personnelle, en respectant la mélodie." },
  { q: "Pour réharmoniser une progression gospel I–IV–I–V, quelle technique serait idiomatique ?", opts: ["Substitutions tritoniques sur chaque accord","Emprunts modaux (IVm, ♭VII) pour ajouter couleur mineure dans un contexte majeur","Harmonisation parallèle chromatique","Coltrane Changes"], a: 1, fb: "Le gospel utilise fréquemment les emprunts modaux — IVm (Fm dans C), ♭VI, ♭VII — qui introduisent la couleur bleue dans un contexte majeur. La progression I – IVm – I – V est caractéristique du gospel." },
  { q: "Lequel illustre une double technique : emprunt modal + harmonisation parallèle ?", opts: ["Dm7 → G7 → CMaj7","CMaj7 → Cm7 → Fm7 puis Fm7 → EMaj7 → E♭Maj7","G7 → D♭7 → C","Am7 → Fmaj7 → G7"], a: 1, fb: "CMaj7 → Cm7 → Fm7 : emprunt modal (C mineur). Puis Fm7 → EMaj7 → E♭Maj7 : harmonisation parallèle chromatique descendante. La combinaison crée une progression très 'Bill Evans'." },
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

export default function Cours22() {
  const [activeSection, setActiveSection] = useState<string>("principe");
  const i18n = useCoursI18n("cours22");
  const { questions: ALL_QUESTIONS } = useCoursContent(cours22Content);
  const [activeTech,    setActiveTech]    = useState<string | null>(null);
  const [activeAnalyse, setActiveAnalyse] = useState<string | null>(null);

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
    if (id === "principe") return "Les techniques";
    if (id === "application") return "Analyses";
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
        <span style={S.badge}>Niveau 2 · Cours 22</span>
        <h1 style={S.h1}>La réharmonisation</h1>
        <p style={S.subtitle}>Transformer une progression en conservant la mélodie — substitutions diatonique et tritonique, emprunt modal, harmonisation parallèle.</p>
      </div>

      <MaitreCard
        composer="Bill Evans"
        period="1929–1980"
        emoji="🎹"
        concept="Réharmonisation"
        anecdote="En 1958, Bill Evans enregistre 'Peace Piece' en une seule prise. Pendant huit minutes, il explore les couleurs harmoniques possibles sur une seule pédale de basse — C. Il emprunte des accords au mode mineur, fait glisser des blocs de Maj7 chromatiquement, sans jamais quitter la fondamentale C. Cette pièce est un manifeste de la réharmonisation comme couleur."
        lesson="Réharmoniser, c'est voir les mêmes notes sous des éclairages différents. La mélodie est le soliste — les accords sont la lumière que tu choisis pour l'éclairer."
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

      {/* ══ SECTION 1 : LES TECHNIQUES ══ */}
      {activeSection === "principe" && (
        <div>
          <h2 style={S.h2}>Les 4 techniques de réharmonisation</h2>
          <p style={S.p}>
            Réharmoniser, c'est remplacer les accords d'une progression tout en conservant
            la mélodie intacte. La contrainte fondamentale : chaque note de mélodie doit
            rester <strong>consonante</strong> avec le nouvel accord.
          </p>

          <div style={S.infoBox}>
            <strong>Principe :</strong> la mélodie est fixe — c'est "le toit". Les accords
            peuvent changer — c'est "le sol". Choisir un nouvel accord, c'est choisir
            sous quelle lumière la mélodie sera entendue.
          </div>

          <p style={{ fontSize: 13, color: "#888", marginBottom: 16 }}>
            Cliquez sur une technique pour voir et entendre les progressions.
          </p>

          {TECHNIQUES.map(tech => (
            <div
              key={tech.id}
              onClick={() => setActiveTech(activeTech === tech.id ? null : tech.id)}
              style={{
                border: `0.5px solid ${activeTech === tech.id ? tech.color : "#e5e5e5"}`,
                borderRadius: 10, marginBottom: 8, overflow: "hidden", cursor: "pointer",
                background: activeTech === tech.id ? tech.bg : "#fff", transition: "all .15s",
              }}
            >
              {/* Header technique */}
              <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 16px" }}>
                <div style={{ fontSize: 22, flexShrink: 0 }}>{tech.emoji}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 500, color: "#111" }}>{tech.name}</div>
                  <div style={{ fontSize: 12, color: "#888", marginTop: 2, fontStyle: "italic" }}>{tech.rule}</div>
                </div>
                <div style={{ fontSize: 11, color: "#bbb", flexShrink: 0 }}>
                  {activeTech === tech.id ? "▲" : "▼"}
                </div>
              </div>

              {/* Détail si sélectionné */}
              {activeTech === tech.id && (
                <div style={{ padding: "0 16px 16px", borderTop: `0.5px solid ${tech.color}20` }}>
                  <p style={{ ...S.p, marginTop: 12 }}>{tech.description}</p>

                  {/* Avant / Après */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 12 }}>
                    {/* Avant */}
                    <div style={{ background: "#f8f8f8", border: "0.5px solid #e5e5e5", borderRadius: 8, padding: "10px 12px" }}>
                      <div style={{ fontSize: 10, fontWeight: 600, color: "#888", textTransform: "uppercase" as const, letterSpacing: "0.08em", marginBottom: 8 }}>
                        Avant
                      </div>
                      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" as const, marginBottom: 8 }}>
                        {tech.before.map((chord, ci) => (
                          <span key={ci} style={{
                            fontSize: 12, fontWeight: 500, color: "#555",
                            background: "#eee", padding: "2px 8px", borderRadius: 6,
                            fontFamily: "monospace",
                          }}>{chord}</span>
                        ))}
                      </div>
                      <button
                        onClick={e => { e.stopPropagation(); playProgression(pianoRef as React.RefObject<PianoPlayerRef>, tech.dotKeysBefore); }}
                        style={{ fontSize: 11, padding: "4px 12px", border: "0.5px solid #ccc", borderRadius: 20, cursor: "pointer", background: "transparent", color: "#666" }}
                      >
                        ▶ Écouter
                      </button>
                    </div>

                    {/* Après */}
                    <div style={{ background: tech.bg, border: `0.5px solid ${tech.color}40`, borderRadius: 8, padding: "10px 12px" }}>
                      <div style={{ fontSize: 10, fontWeight: 600, color: tech.color, textTransform: "uppercase" as const, letterSpacing: "0.08em", marginBottom: 8 }}>
                        Après
                      </div>
                      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" as const, marginBottom: 8 }}>
                        {tech.after.map((chord, ci) => (
                          <span key={ci} style={{
                            fontSize: 12, fontWeight: 600, color: tech.color,
                            background: "white", padding: "2px 8px", borderRadius: 6,
                            border: `0.5px solid ${tech.color}`,
                            fontFamily: "monospace",
                          }}>{chord}</span>
                        ))}
                      </div>
                      <button
                        onClick={e => { e.stopPropagation(); playProgression(pianoRef as React.RefObject<PianoPlayerRef>, tech.dotKeysAfter); }}
                        style={{ fontSize: 11, padding: "4px 12px", border: `0.5px solid ${tech.color}`, borderRadius: 20, cursor: "pointer", background: "transparent", color: tech.color }}
                      >
                        ▶ Écouter
                      </button>
                    </div>
                  </div>

                  <div style={S.tip}><strong>Conseil :</strong> {tech.tip}</div>
                </div>
              )}
            </div>
          ))}

          <div style={S.warnBox}>
            <strong>Vérification mélodique :</strong> avant toute réharmonisation, identifiez
            les notes longues de la mélodie. Une note tenue qui crée un ½ ton avec une note
            de l'accord = dissonance forte. Vérifiez systématiquement.
          </div>
        </div>
      )}

      {/* ══ SECTION 2 : ANALYSES ══ */}
      {activeSection === "application" && (
        <div>
          <h2 style={S.h2}>Réharmonisations célèbres analysées</h2>
          <p style={S.p}>
            Trois exemples issus du répertoire jazz, chacun illustrant une technique différente.
            Comparez les progressions originales et réharmonisées en les écoutant.
          </p>

          {ANALYSES.map(analyse => (
            <div
              key={analyse.id}
              onClick={() => setActiveAnalyse(activeAnalyse === analyse.id ? null : analyse.id)}
              style={{
                border: `0.5px solid ${activeAnalyse === analyse.id ? analyse.color : "#e5e5e5"}`,
                borderRadius: 10, marginBottom: 10, overflow: "hidden", cursor: "pointer",
                background: activeAnalyse === analyse.id ? analyse.bg : "#fff",
                transition: "all .15s",
              }}
            >
              {/* Header */}
              <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 16px" }}>
                <div style={{ fontSize: 22, flexShrink: 0 }}>{analyse.emoji}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" as const }}>
                    <span style={{ fontSize: 14, fontWeight: 500, color: "#111" }}>{analyse.title}</span>
                    <span style={{ fontSize: 12, color: "#888" }}>— {analyse.artist}</span>
                  </div>
                  <div style={{ marginTop: 4 }}>
                    <span style={{
                      fontSize: 11, fontWeight: 600,
                      color: analyse.color, background: "white",
                      padding: "1px 8px", borderRadius: 6,
                      border: `0.5px solid ${analyse.color}`,
                    }}>
                      {analyse.technique}
                    </span>
                  </div>
                </div>
                <div style={{ fontSize: 11, color: "#bbb", flexShrink: 0 }}>
                  {activeAnalyse === analyse.id ? "▲" : "▼"}
                </div>
              </div>

              {/* Détail */}
              {activeAnalyse === analyse.id && (
                <div style={{ padding: "0 16px 16px", borderTop: `0.5px solid ${analyse.color}20` }}>
                  <p style={{ ...S.p, marginTop: 12 }}>{analyse.context}</p>

                  {/* Avant / Après */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 12 }}>
                    <div style={{ background: "#f8f8f8", border: "0.5px solid #e5e5e5", borderRadius: 8, padding: "10px 12px" }}>
                      <div style={{ fontSize: 10, fontWeight: 600, color: "#888", textTransform: "uppercase" as const, letterSpacing: "0.08em", marginBottom: 8 }}>Original</div>
                      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" as const, marginBottom: 8 }}>
                        {analyse.before.map((chord, ci) => (
                          <span key={ci} style={{ fontSize: 12, fontWeight: 500, color: "#555", background: "#eee", padding: "2px 8px", borderRadius: 6, fontFamily: "monospace" }}>{chord}</span>
                        ))}
                      </div>
                      <button
                        onClick={e => { e.stopPropagation(); playProgression(pianoRef as React.RefObject<PianoPlayerRef>, analyse.dotKeysBefore); }}
                        style={{ fontSize: 11, padding: "4px 12px", border: "0.5px solid #ccc", borderRadius: 20, cursor: "pointer", background: "transparent", color: "#666" }}
                      >
                        ▶ Écouter
                      </button>
                    </div>

                    <div style={{ background: analyse.bg, border: `0.5px solid ${analyse.color}40`, borderRadius: 8, padding: "10px 12px" }}>
                      <div style={{ fontSize: 10, fontWeight: 600, color: analyse.color, textTransform: "uppercase" as const, letterSpacing: "0.08em", marginBottom: 8 }}>Réharmonisé</div>
                      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" as const, marginBottom: 8 }}>
                        {analyse.after.map((chord, ci) => (
                          <span key={ci} style={{ fontSize: 12, fontWeight: 600, color: analyse.color, background: "white", padding: "2px 8px", borderRadius: 6, border: `0.5px solid ${analyse.color}`, fontFamily: "monospace" }}>{chord}</span>
                        ))}
                      </div>
                      <button
                        onClick={e => { e.stopPropagation(); playProgression(pianoRef as React.RefObject<PianoPlayerRef>, analyse.dotKeysAfter); }}
                        style={{ fontSize: 11, padding: "4px 12px", border: `0.5px solid ${analyse.color}`, borderRadius: 20, cursor: "pointer", background: "transparent", color: analyse.color }}
                      >
                        ▶ Écouter
                      </button>
                    </div>
                  </div>

                  <div style={S.infoBox}><strong>Analyse :</strong> {analyse.insight}</div>
                </div>
              )}
            </div>
          ))}

          <div style={S.tip}>
            <strong>Exercice :</strong> prenez un standard que vous connaissez (Autumn Leaves,
            All The Things You Are) et réharmonisez 2–3 accords avec les techniques de cette leçon.
            Commencez par la substitution diatonique — c'est la plus proche de l'original.
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
                {quizScore >= 8 ? "Excellent — la réharmonisation n'a plus de secrets !" :
                 quizScore >= 6 ? "Bien — encore quelques progressions à écouter et ce sera parfait." :
                 "Continue à écouter les progressions activement — l'oreille s'éduque !"}
              </div>
              <button
                onClick={resetQuiz}
                style={{ fontSize: 13, padding: "8px 20px", border: `0.5px solid ${PRIMARY}`, borderRadius: 20, cursor: "pointer", background: "#E8EFF8", color: PRIMARY }}
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
