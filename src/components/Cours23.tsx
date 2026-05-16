"use client";

/**
 * Cours23.tsx
 * Harmonia · Niveau 2 · Cours 23 — Composer dans le style des maîtres
 * Convention : affichage anglais, dotKeys PianoPlayer français
 */

import React, { useRef, useState } from "react";
import { useCoursI18n } from "@/hooks/useCoursI18n";
import { useCoursContent } from "@/hooks/useCoursContent";
import { cours23Content } from "@/data/cours23Content";
import PianoPlayer, { PianoPlayerRef } from "@/components/PianoPlayer";
import MaitreCard from "@/components/MaitreCard";

const PRIMARY = "#5C3D6E";

function playProgression(ref: React.RefObject<PianoPlayerRef>, chords: string[][], chordGap = 750) {
  chords.forEach((chord, ci) => {
    chord.forEach((key, ni) => {
      const [note, octStr] = key.split(":");
      setTimeout(() => ref.current?.playNote(note, parseInt(octStr), { duration: 1.4 }), ci * chordGap + ni * 80);
    });
  });
}

// ── Données : 7 styles ─────────────────────────────────────────────────────────

interface Style {
  id: string;
  name: string;
  era: string;
  emoji: string;
  color: string;
  bg: string;
  signatures: string[];
  progression: string[];
  dotKeys: string[][];
  progressionLabel: string;
  tip: string;
}

const STYLES: Style[] = [
  {
    id: "bach",
    name: "Style Bach",
    era: "Baroque (1600–1750)",
    emoji: "⚙️",
    color: "#4A3520",
    bg: "#F5EFE8",
    signatures: [
      "Contrepoint rigoureux — pas de quintes ni d'octaves parallèles",
      "Cycle des quintes descendant : I–IV–VII–III–VI–II–V–I",
      "Résolution systématique du triton (sensible montante, 7te descendante)",
      "Basse continue active avec mouvement mélodique indépendant",
      "Doublures à l'octave dans le choral SATB",
    ],
    progression: ["CMaj", "Am", "Dm7", "G7", "CMaj"],
    dotKeys: [
      ["Do:3","Mi:3","Sol:3","Do:4"],
      ["La:2","Do:3","Mi:3","La:3"],
      ["Ré:3","Fa:3","La:3","Do:4"],
      ["Sol:2","Si:2","Ré:3","Fa:3"],
      ["Do:3","Mi:3","Sol:3","Do:4"],
    ],
    progressionLabel: "I – VIm – IIm7 – V7 – I (C majeur)",
    tip: "Cherchez la basse : chez Bach, elle est toujours mélodiquement intéressante. Si la basse fait des sauts, vérifiez qu'il n'y a pas de quintes parallèles avec la voix supérieure.",
  },
  {
    id: "mozart",
    name: "Style Mozart",
    era: "Classique (1750–1820)",
    emoji: "🎻",
    color: "#185FA5",
    bg: "#E6F1FB",
    signatures: [
      "Symétrie 4+4 mesures (antécédent + conséquent)",
      "Harmonie économe : I, IV, V7, IIm — rarement plus",
      "Cadences parfaites claires et affirmées à chaque phrase",
      "Basse d'Alberti (gauche : bas–milieu–haut–milieu)",
      "Pas d'emprunts modaux, pas de chromatisme gratuit",
    ],
    progression: ["CMaj", "FMaj", "G7", "CMaj"],
    dotKeys: [
      ["Do:3","Mi:3","Sol:3","Do:4"],
      ["Fa:3","La:3","Do:4","Fa:4"],
      ["Sol:2","Si:2","Ré:3","Fa:3"],
      ["Do:3","Mi:3","Sol:3","Do:4"],
    ],
    progressionLabel: "I – IV – V7 – I (C majeur, cadence parfaite)",
    tip: "La clarté est la règle absolue. Mozart dirait : si tu peux enlever un accord sans que la phrase souffre, enlève-le.",
  },
  {
    id: "chopin",
    name: "Style Chopin",
    era: "Romantique (1810–1850)",
    emoji: "🌙",
    color: "#8B3A62",
    bg: "#FAE8F3",
    signatures: [
      "Pédale de tonique longue à la basse (surtout dans les nocturnes)",
      "Emprunt fréquent au mode mineur parallèle : IVm, ♭VI, ♭VII",
      "Chromatisme expressif dans les voix intérieures",
      "Cadences évitées (V → VI) et suspensions expressives (4–3)",
      "Texture piano en arpèges étendus (main gauche) + mélodie chantante (droite)",
    ],
    progression: ["CMaj7", "Fm7", "A♭Maj7", "G7", "CMaj7"],
    dotKeys: [
      ["Do:3","Mi:3","Sol:3","Si:3"],
      ["Fa:3","La♭:3","Do:4","Mi♭:4"],
      ["La♭:2","Do:3","Mi♭:3","Sol:3"],
      ["Sol:2","Si:2","Ré:3","Fa:3"],
      ["Do:3","Mi:3","Sol:3","Si:3"],
    ],
    progressionLabel: "I – IVm – ♭VI – V7 – I (C majeur + emprunts mineurs)",
    tip: "La signature Chopin : une progression belle en C majeur avec soudain Fm — l'emprunt IVm crée une ombre inattendue. Cherchez toujours les notes ♭ qui ne sont pas dans la gamme d'origine.",
  },
  {
    id: "debussy",
    name: "Style Debussy",
    era: "Impressionnisme (1890–1920)",
    emoji: "🌊",
    color: "#2D8A7A",
    bg: "#E6F5F3",
    signatures: [
      "Accords Maj7 (ou 9e) parallèles sans résolution",
      "Gamme par tons (6 notes, demi-tons absents) ou pentatonique",
      "Absence de dominante fonctionnelle V7→I",
      "Mouvements par couleurs : les accords glissent, ils ne résolvent pas",
      "Pédales de couleur : un accord tenu pendant que d'autres glissent",
    ],
    progression: ["CMaj7", "B♭Maj7", "A♭Maj7", "G♭Maj7"],
    dotKeys: [
      ["Do:3","Mi:3","Sol:3","Si:3"],
      ["Si♭:2","Ré:3","Fa:3","La:3"],
      ["La♭:2","Do:3","Mi♭:3","Sol:3"],
      ["Sol♭:2","Si♭:2","Ré♭:3","Fa:3"],
    ],
    progressionLabel: "CMaj7 – B♭Maj7 – A♭Maj7 – G♭Maj7 (parallélisme descendant par tons)",
    tip: "Chez Debussy, posez-vous la question : 'est-ce que cet accord résout vers le suivant ?' Si oui, ce n'est probablement pas son style. Les accords glissent, ils ne tombent pas.",
  },
  {
    id: "jazz",
    name: "Style Jazz (Evans / post-bop)",
    era: "Jazz modal (1955–aujourd'hui)",
    emoji: "🎷",
    color: "#BA7517",
    bg: "#FAEEDA",
    signatures: [
      "II–V–I avec extensions : 9e, 11e (#4), 13e",
      "Voicings serrés sans quinte — 3ce, 7te, extensions",
      "Substitutions tritoniques fréquentes (V7 → ♭II7)",
      "Rythme harmonique rapide (2 accords/mesure ou plus)",
      "Emprunts modaux et turnarounds (I–VI–II–V cyclique)",
    ],
    progression: ["Dm9", "G13", "CMaj9"],
    dotKeys: [
      ["Ré:3","Fa:3","Do:4","Mi:4"],
      ["Sol:2","Si:2","Fa:3","Mi:4"],
      ["Do:3","Mi:3","Si:3","Ré:4"],
    ],
    progressionLabel: "IIm9 – V13 – IMaj9 (II–V–I jazz avec extensions)",
    tip: "Le test du style jazz Evans : est-ce que les accords ont des extensions (9e, 13e) ? Est-ce que la quinte est absente des voicings ? Si oui, vous êtes sur la bonne voie.",
  },
  {
    id: "rock",
    name: "Style Rock modal (Beatles / Radiohead)",
    era: "Rock modal (1965–aujourd'hui)",
    emoji: "🎸",
    color: "#993C1D",
    bg: "#FAECE7",
    signatures: [
      "I–♭VII–IV–I : progression mixolydienne cyclique",
      "Absence de dominante fonctionnelle V7→I",
      "Emprunts modaux libres (♭VII, ♭VI, IVm)",
      "Progressions cycliques sans résolution finale obligatoire",
      "Riffs et ostinatos harmoniques répétitifs",
    ],
    progression: ["GMaj", "FMaj", "CMaj", "GMaj"],
    dotKeys: [
      ["Sol:3","Si:3","Ré:4","Sol:4"],
      ["Fa:3","La:3","Do:4","Fa:4"],
      ["Do:3","Mi:3","Sol:3","Do:4"],
      ["Sol:3","Si:3","Ré:4","Sol:4"],
    ],
    progressionLabel: "I – ♭VII – IV – I (G mixolydien — Norwegian Wood, Creep...)",
    tip: "La clé du rock modal : cherchez le ♭VII. En G, c'est F (pas F#). Si la progression utilise F naturel en G majeur, vous êtes en mode mixolydien — le mode rock par excellence.",
  },
  {
    id: "romantique",
    name: "Style Romantique (Rachmaninov / Tchaïkovski)",
    era: "Romantisme tardif (1850–1910)",
    emoji: "🌹",
    color: PRIMARY,
    bg: "#F0EAFA",
    signatures: [
      "Relations de tierces descendantes : I → ♭VI → IV",
      "Pédales de dominante longues avant résolution dramatique",
      "Emprunts dramatiques au mineur (♭VI, ♭III, ♭VII)",
      "Densité harmonique maximale — beaucoup d'accords par mesure",
      "Voix nombreuses, chromatisme généralisé dans les doublures",
    ],
    progression: ["CMaj7", "A♭Maj7", "FMaj7", "G7"],
    dotKeys: [
      ["Do:3","Mi:3","Sol:3","Si:3"],
      ["La♭:2","Do:3","Mi♭:3","Sol:3"],
      ["Fa:3","La:3","Do:4","Mi:4"],
      ["Sol:2","Si:2","Ré:3","Fa:3"],
    ],
    progressionLabel: "I – ♭VI – IV – V7 (relations de tierces, C majeur)",
    tip: "Chez Rachmaninov, la densité est la règle. Comptez les voix, cherchez les accords à 5+ notes, les tierces qui descendent. Si c'est 'trop' pour Mozart, c'est probablement juste pour le romantisme tardif.",
  },
];

// ── Données : 7 exercices guidés ───────────────────────────────────────────────

interface ExerciceChoice {
  chords: string[];
  dotKeys: string[][];
  isCorrect: boolean;
  feedback: string;
}
interface Exercice {
  id: string;
  style: string;
  emoji: string;
  color: string;
  bg: string;
  context: string;
  choices: ExerciceChoice[];
}

const EXERCICES: Exercice[] = [
  {
    id: "ex_bach",
    style: "Style Bach",
    emoji: "⚙️",
    color: "#4A3520",
    bg: "#F5EFE8",
    context: "Vous harmonisez la mélodie Do–Ré–Mi–Do dans un choral à 4 voix. Quelle progression est dans le style de Bach ?",
    choices: [
      {
        chords: ["GMaj", "FMaj", "CMaj", "GMaj"],
        dotKeys: [["Sol:3","Si:3","Ré:4","Sol:4"],["Fa:3","La:3","Do:4","Fa:4"],["Do:3","Mi:3","Sol:3","Do:4"],["Sol:3","Si:3","Ré:4","Sol:4"]],
        isCorrect: false,
        feedback: "I–♭VII–IV–I est une progression rock modal (mixolydien) — F naturel en G est une 7te mineure. Bach n'utilise pas cette couleur modale dans ses chorals.",
      },
      {
        chords: ["CMaj", "Am", "Dm7", "G7"],
        dotKeys: [["Do:3","Mi:3","Sol:3","Do:4"],["La:2","Do:3","Mi:3","La:3"],["Ré:3","Fa:3","La:3","Do:4"],["Sol:2","Si:2","Ré:3","Fa:3"]],
        isCorrect: true,
        feedback: "Exactement ! I–VIm–IIm–V7 est le cycle des quintes descendant caractéristique de Bach. Chaque accord est à distance de quinte du suivant : C→Am→Dm→G7→C. La résolution G7→C résout le triton B–F. Style choral baroque authentique.",
      },
      {
        chords: ["CMaj7", "B♭Maj7", "A♭Maj7", "G♭Maj7"],
        dotKeys: [["Do:3","Mi:3","Sol:3","Si:3"],["Si♭:2","Ré:3","Fa:3","La:3"],["La♭:2","Do:3","Mi♭:3","Sol:3"],["Sol♭:2","Si♭:2","Ré♭:3","Fa:3"]],
        isCorrect: false,
        feedback: "Parallélisme Maj7 descendant par tons entiers — c'est la couleur impressionniste de Debussy, deux siècles après Bach ! Ce type de progression sans résolution est à l'opposé du contrepoint rigoureux baroque.",
      },
    ],
  },
  {
    id: "ex_mozart",
    style: "Style Mozart",
    emoji: "🎻",
    color: "#185FA5",
    bg: "#E6F1FB",
    context: "Dans une sonate de style Mozart, vous harmonisez Do–Mi–Sol–Mi en 4 mesures symétriques (2+2). Quelle progression choisissez-vous ?",
    choices: [
      {
        chords: ["CMaj", "G7", "FMaj", "G7"],
        dotKeys: [["Do:3","Mi:3","Sol:3","Do:4"],["Sol:2","Si:2","Ré:3","Fa:3"],["Fa:3","La:3","Do:4","Fa:4"],["Sol:2","Si:2","Ré:3","Fa:3"]],
        isCorrect: true,
        feedback: "Parfait style Mozart ! I–V–IV–V en 2+2 mesures : symétrie parfaite, trois accords seulement (I, IV, V), cadence intermédiaire sur V à mesure 2, cadence finale sur V→I implicite. Économie harmonique et clarté absolue.",
      },
      {
        chords: ["CMaj7", "Fm7", "A♭Maj7", "G7"],
        dotKeys: [["Do:3","Mi:3","Sol:3","Si:3"],["Fa:3","La♭:3","Do:4","Mi♭:4"],["La♭:2","Do:3","Mi♭:3","Sol:3"],["Sol:2","Si:2","Ré:3","Fa:3"]],
        isCorrect: false,
        feedback: "Fm7 et A♭Maj7 sont des emprunts au mode mineur parallèle — technique caractéristique de Chopin (romantisme), pas de Mozart. Mozart évite ces couleurs sombres au profit de la clarté diatonique.",
      },
      {
        chords: ["CMaj7", "DMaj7", "EMaj7", "FMaj7"],
        dotKeys: [["Do:3","Mi:3","Sol:3","Si:3"],["Ré:3","Fa♯:3","La:3","Do♯:4"],["Mi:3","Sol♯:3","Si:3","Ré♯:4"],["Fa:3","La:3","Do:4","Mi:4"]],
        isCorrect: false,
        feedback: "Parallélisme Maj7 ascendant — c'est Debussy (1862–1918), soit 70 ans après Mozart. Un anachronisme complet ! Mozart n'utilise pas d'accords de 7te majeure en parallèle.",
      },
    ],
  },
  {
    id: "ex_chopin",
    style: "Style Chopin",
    emoji: "🌙",
    color: "#8B3A62",
    bg: "#FAE8F3",
    context: "Dans un nocturne de style Chopin, vous harmonisez Mi–Ré–Do–Si avec une couleur mélancolique. Quelle progression convient ?",
    choices: [
      {
        chords: ["CMaj", "FMaj", "G7", "CMaj"],
        dotKeys: [["Do:3","Mi:3","Sol:3","Do:4"],["Fa:3","La:3","Do:4","Fa:4"],["Sol:2","Si:2","Ré:3","Fa:3"],["Do:3","Mi:3","Sol:3","Do:4"]],
        isCorrect: false,
        feedback: "I–IV–V–I est trop classique et symétrique pour Chopin — c'est du Mozart. Chopin cherche la surprise harmonique : l'emprunt modal, la cadence évitée, le chromatisme dans les voix intérieures.",
      },
      {
        chords: ["CMaj7", "DMaj7", "EMaj7", "CMaj7"],
        dotKeys: [["Do:3","Mi:3","Sol:3","Si:3"],["Ré:3","Fa♯:3","La:3","Do♯:4"],["Mi:3","Sol♯:3","Si:3","Ré♯:4"],["Do:3","Mi:3","Sol:3","Si:3"]],
        isCorrect: false,
        feedback: "Parallélisme Maj7 ascendant — c'est Debussy, pas Chopin. Chopin utilise encore des dominantes fonctionnelles et des emprunts modaux, il n'abandonne pas complètement la tonalité comme Debussy.",
      },
      {
        chords: ["CMaj7", "Fm7", "A♭Maj7", "G7"],
        dotKeys: [["Do:3","Mi:3","Sol:3","Si:3"],["Fa:3","La♭:3","Do:4","Mi♭:4"],["La♭:2","Do:3","Mi♭:3","Sol:3"],["Sol:2","Si:2","Ré:3","Fa:3"]],
        isCorrect: true,
        feedback: "Style Chopin authentique ! Fm7 (IVm) et A♭Maj7 (♭VI) sont empruntés au mode mineur parallèle — la couleur sombre caractéristique. La résolution G7→CMaj7 maintient la structure tonale. Ces ♭ dans Fm et A♭ créent un chromatisme expressif dans les voix intérieures.",
      },
    ],
  },
  {
    id: "ex_debussy",
    style: "Style Debussy",
    emoji: "🌊",
    color: "#2D8A7A",
    bg: "#E6F5F3",
    context: "Dans une pièce impressionniste, vous harmonisez Sol–La–Si–La. Quelle progression crée la couleur Debussy ?",
    choices: [
      {
        chords: ["GMaj7", "FMaj7", "E♭Maj7", "D♭Maj7"],
        dotKeys: [["Sol:3","Si:3","Ré:4","Fa♯:4"],["Fa:3","La:3","Do:4","Mi:4"],["Mi♭:3","Sol:3","Si♭:3","Ré:4"],["Ré♭:3","Fa:3","La♭:3","Do:4"]],
        isCorrect: true,
        feedback: "Couleur Debussy parfaite ! Quatre Maj7 descendant par tons entiers (G–F–Eb–Db) — parallélisme chromatique sans résolution de dominante. Chaque accord est une couleur autonome. La mélodie Sol–La–Si–La reste compatible comme 9te, 3ce, 4te augmentée des accords.",
      },
      {
        chords: ["GMaj", "CMaj", "D7", "GMaj"],
        dotKeys: [["Sol:3","Si:3","Ré:4","Sol:4"],["Do:3","Mi:3","Sol:3","Do:4"],["Ré:3","Fa♯:3","La:3","Do:4"],["Sol:3","Si:3","Ré:4","Sol:4"]],
        isCorrect: false,
        feedback: "I–IV–V7–I est une cadence parfaite classique — parfaitement fonctionnelle et résolue. Debussy fuit précisément cette cadence V7→I qu'il trouve trop prévisible. Il préfère les glissements parallèles sans résolution.",
      },
      {
        chords: ["GMaj", "Em", "Am7", "D7"],
        dotKeys: [["Sol:3","Si:3","Ré:4","Sol:4"],["Mi:3","Sol:3","Si:3","Mi:4"],["La:3","Do:4","Mi:4","Sol:4"],["Ré:3","Fa♯:3","La:3","Do:4"]],
        isCorrect: false,
        feedback: "I–VIm–IIm7–V7 est un cycle des quintes — style diatonique fonctionnel classique. Ce type de progression crée tension et résolution directionnelle, l'opposé de la pensée coloriste de Debussy.",
      },
    ],
  },
  {
    id: "ex_jazz",
    style: "Style Jazz Evans",
    emoji: "🎷",
    color: "#BA7517",
    bg: "#FAEEDA",
    context: "Dans le style jazz post-bop, vous harmonisez La–Si♭–Sol–Mi sur un II–V–I. Quelle version est la plus idiomatique ?",
    choices: [
      {
        chords: ["Dm", "G7", "CMaj"],
        dotKeys: [["Ré:3","Fa:3","La:3","Ré:4"],["Sol:2","Si:2","Ré:3","Fa:3"],["Do:3","Mi:3","Sol:3","Do:4"]],
        isCorrect: false,
        feedback: "II–V–I correct mais trop dépouillé pour le post-bop. Pas d'extensions (9e, 13e), pas de voicings sophistiqués. Ce serait acceptable pour une progression bebop simple, mais Bill Evans ou Brad Mehldau n'harmoniseraient pas ainsi.",
      },
      {
        chords: ["Dm9", "G13", "CMaj9"],
        dotKeys: [["Ré:3","Fa:3","Do:4","Mi:4"],["Sol:2","Si:2","Fa:3","Mi:4"],["Do:3","Mi:3","Si:3","Ré:4"]],
        isCorrect: true,
        feedback: "Style jazz post-bop parfait ! Dm9 (3ce+7te+9te, sans quinte), G13 (3ce+7te+13te, voicing shell), CMaj9 (3ce+7te+9te). Les extensions colorent sans alourdir. La 13te (A) sur G résout vers la 9te (D) de CMaj9 — voix intérieure lisse. Signature d'Evans.",
      },
      {
        chords: ["CMaj", "FMaj", "GMaj", "CMaj"],
        dotKeys: [["Do:3","Mi:3","Sol:3","Do:4"],["Fa:3","La:3","Do:4","Fa:4"],["Sol:3","Si:3","Ré:4","Sol:4"],["Do:3","Mi:3","Sol:3","Do:4"]],
        isCorrect: false,
        feedback: "I–IV–V–I n'est pas du tout un II–V–I, et n'utilise aucune des extensions caractéristiques du jazz. C'est une progression classique sans saveur jazz. Il manque le IIm7, les 7tes, et tout le vocabulaire post-bop.",
      },
    ],
  },
  {
    id: "ex_rock",
    style: "Style Rock modal",
    emoji: "🎸",
    color: "#993C1D",
    bg: "#FAECE7",
    context: "Dans une chanson rock modal (G mixolydien, style Beatles/Radiohead), vous harmonisez Sol–Fa–Mi–Ré. Quelle progression convient ?",
    choices: [
      {
        chords: ["GMaj", "Am7", "D7", "GMaj"],
        dotKeys: [["Sol:3","Si:3","Ré:4","Sol:4"],["La:2","Do:3","Mi:3","Sol:3"],["Ré:3","Fa♯:3","La:3","Do:4"],["Sol:3","Si:3","Ré:4","Sol:4"]],
        isCorrect: false,
        feedback: "D7 est une dominante fonctionnelle (V7 de G) — exactement ce que le rock modal évite. En G mixolydien, la 7te est F naturel (pas F#). D7 contient F#, qui détruit la couleur mixolydienne.",
      },
      {
        chords: ["Gm7", "Cm7", "F7", "B♭Maj7"],
        dotKeys: [["Sol:2","Si♭:2","Ré:3","Fa:3"],["Do:3","Mi♭:3","Sol:3","Si♭:3"],["Fa:3","La:3","Do:4","Mi♭:4"],["Si♭:2","Ré:3","Fa:3","La:3"]],
        isCorrect: false,
        feedback: "C'est un II–V–I en B♭ mineur — progression jazz fonctionnelle en mineur. Pas du tout du rock modal en G ! Le rock modal reste en G (majeur ou mixolydien) et évite les progressions de dominante.",
      },
      {
        chords: ["GMaj", "FMaj", "CMaj", "GMaj"],
        dotKeys: [["Sol:3","Si:3","Ré:4","Sol:4"],["Fa:3","La:3","Do:4","Fa:4"],["Do:3","Mi:3","Sol:3","Do:4"],["Sol:3","Si:3","Ré:4","Sol:4"]],
        isCorrect: true,
        feedback: "I–♭VII–IV–I mixolydien — la progression rock modal par excellence ! F naturel est le ♭VII de G mixolydien. Cette progression peut se répéter indéfiniment sans résolution V→I. Norwegian Wood (Beatles), Hey You (Pink Floyd), Creep (Radiohead) utilisent ce pattern.",
      },
    ],
  },
  {
    id: "ex_romantique",
    style: "Style Romantique",
    emoji: "🌹",
    color: PRIMARY,
    bg: "#F0EAFA",
    context: "Dans le style grand romantisme, vous harmonisez Do–Si♭–La♭–Sol (mélodie descendante). Quelle progression convient ?",
    choices: [
      {
        chords: ["CMaj7", "A♭Maj7", "FMaj7", "G7"],
        dotKeys: [["Do:3","Mi:3","Sol:3","Si:3"],["La♭:2","Do:3","Mi♭:3","Sol:3"],["Fa:3","La:3","Do:4","Mi:4"],["Sol:2","Si:2","Ré:3","Fa:3"]],
        isCorrect: true,
        feedback: "Style romantique tardif parfait ! I–♭VI–IV–V crée des relations de tierces (C→A♭→F = tierces majeures et mineures). A♭Maj7 est emprunté au mineur parallèle. La basse descend chromatiquement : C→A♭→F→G. Densité harmonique maximale, tension dramatique avant la résolution.",
      },
      {
        chords: ["CMaj", "FMaj", "G7", "CMaj"],
        dotKeys: [["Do:3","Mi:3","Sol:3","Do:4"],["Fa:3","La:3","Do:4","Fa:4"],["Sol:2","Si:2","Ré:3","Fa:3"],["Do:3","Mi:3","Sol:3","Do:4"]],
        isCorrect: false,
        feedback: "I–IV–V–I est trop simple et classique pour le romantisme tardif. Rachmaninov ou Tchaïkovski n'utiliseraient pas une harmonie aussi dépouillée — ils cherchent la densité, les emprunts dramatiques, les relations de tierces.",
      },
      {
        chords: ["CMaj7", "Cm7", "Fm7", "CMaj7"],
        dotKeys: [["Do:3","Mi:3","Sol:3","Si:3"],["Do:3","Mi♭:3","Sol:3","Si♭:3"],["Fa:3","La♭:3","Do:4","Mi♭:4"],["Do:3","Mi:3","Sol:3","Si:3"]],
        isCorrect: false,
        feedback: "CMaj7→Cm7→Fm7 est un emprunt modal style Chopin/Evans — trop léger pour le grand romantisme. Rachmaninov préfère les accords massifs, les relations de tierces et les pédales de dominante longues plutôt que les glissements modaux subtils.",
      },
    ],
  },
];

// ── Quiz ──────────────────────────────────────────────────────────────────────

const ALL_QUESTIONS = [
  // Identifier le style
  { q: "Quelle progression est caractéristique du style Bach ?", opts: ["CMaj7–B♭Maj7–A♭Maj7 (parallélisme)","CMaj–Am–Dm7–G7 (cycle des quintes)","GMaj–FMaj–CMaj (mixolydien)","Dm9–G13–CMaj9 (jazz extensions)"], a: 1, fb: "I–VIm–IIm–V7 est le cycle des quintes descendant de Bach. Chaque accord est à distance de quinte du suivant. La résolution G7→C résout le triton B–F. C'est le mouvement harmonique fondamental du contrepoint baroque." },
  { q: "La basse d'Alberti (gauche : bas–milieu–haut–milieu) est caractéristique de :", opts: ["Bach","Mozart","Chopin","Debussy"], a: 1, fb: "La basse d'Alberti est une figure d'accompagnement caractéristique du style classique (Mozart, Haydn). La main gauche alterne basse–accord–milieu–accord, créant un accompagnement fluide et symétrique sous la mélodie de la main droite." },
  { q: "L'emprunt IVm (ex. Fm7 en C) dans les nocturnes est caractéristique de :", opts: ["Bach","Mozart","Chopin","Debussy"], a: 2, fb: "Fm7 (IVm) en C majeur est l'emprunt romantique par excellence de Chopin. Il emprunte le IVm au mode mineur parallèle (C mineur), créant une couleur sombre inattendue. Cette technique est rarement utilisée par Bach ou Mozart." },
  { q: "Les accords Maj7 parallèles sans résolution de dominante sont caractéristiques de :", opts: ["Bach","Mozart","Chopin","Debussy"], a: 3, fb: "Debussy (impressionnisme) fait glisser des blocs d'accords parallèles — Maj7, 9e, accords de quintes — sans jamais résoudre vers une dominante. La couleur prime sur la fonction harmonique." },
  { q: "II–V–I avec extensions (9e, 13e) et voicings sans quinte caractérisent :", opts: ["Rock modal","Jazz post-bop (Evans)","Romantique","Baroque (Bach)"], a: 1, fb: "Le jazz post-bop (Bill Evans, Brad Mehldau) utilise II–V–I enrichi d'extensions — 9e sur II, 13e sur V, 9te sur I. Les voicings omettent la quinte (neutre) pour garder 3ce, 7te et extensions colorantes." },
  { q: "I–♭VII–IV–I sans dominante fonctionnelle est la progression du :", opts: ["Style Chopin","Style baroque","Rock modal (mixolydien)","Jazz bebop"], a: 2, fb: "I–♭VII–IV–I est la progression rock modal par excellence. Le ♭VII vient du mode mixolydien (7te mineure). Cette progression peut se répéter indéfiniment sans résolution V→I — Norwegian Wood, Creep, Hey You." },
  { q: "Relations de tierces descendantes et emprunts dramatiques au mineur caractérisent :", opts: ["Style Mozart","Style Debussy","Style Bach","Romantisme tardif (Rachmaninov)"], a: 3, fb: "Le romantisme tardif (Rachmaninov, Tchaïkovski) exploite les relations de tierces (I→♭VI→IV) et les emprunts dramatiques au mineur. La densité harmonique est maximale, les pédales de dominante longues." },
  { q: "Quel style utilise le contrepoint le plus rigoureux ?", opts: ["Jazz","Romantique","Bach (baroque)","Rock modal"], a: 2, fb: "Bach est le maître du contrepoint strict. Ses règles : pas de quintes parallèles, pas d'octaves parallèles, résolution obligatoire du triton, voix intérieures avec mouvement mélodique indépendant. Ces règles définissent le contrepoint à 4 voix (SATB)." },
  { q: "Quel style évite le plus les dominantes fonctionnelles V7→I ?", opts: ["Debussy (impressionnisme)","Bach","Mozart","Jazz bebop"], a: 0, fb: "Debussy évite systématiquement la résolution V7→I qu'il trouve trop prévisible. À la place, il fait glisser des accords parallèles ou utilise des gammes par tons. Cette liberté par rapport à la tonalité fonctionnelle est la signature de l'impressionnisme." },
  { q: "La symétrie 4+4 mesures (antécédent + conséquent) est caractéristique de :", opts: ["Romantique","Jazz modal","Mozart (classique)","Debussy"], a: 2, fb: "La forme période (4+4 mesures) est la cellule de base du style classique viennois — Mozart, Haydn, Beethoven jeune. L'antécédent (4 mesures finissant sur V) est répondu par le conséquent (4 mesures finissant sur I). Symétrie et clarté absolues." },
  { q: "La gamme par tons (6 notes équidistantes, aucun demi-ton) est associée à :", opts: ["Bach","Jazz bebop","Debussy","Rock modal"], a: 2, fb: "Debussy utilise la gamme par tons (C D E F# G# Bb) comme couleur harmonique. Sans demi-ton, elle crée une flottaison ambiguë — pas de sens tonal établi, pas de sensible. C'est l'une des signatures de l'impressionnisme." },
  { q: "La substitution tritonique (G7 → D♭7) est surtout utilisée dans :", opts: ["Style Bach","Style Mozart","Style Debussy","Jazz (bebop/post-bop)"], a: 3, fb: "La substitution tritonique est une technique jazz développée dans le bebop (années 1940). Elle remplace V7 par l'accord de dominante situé un triton plus bas, créant une basse chromatique descendante (♭II→I)." },
  { q: "Les progressions cycliques sans résolution finale sont typiques de :", opts: ["Bach","Mozart","Rock modal","Chopin"], a: 2, fb: "Le rock modal utilise des progressions cycliques (I–♭VII–IV–I) qui peuvent se répéter indéfiniment. Il n'y a pas de besoin de résolution finale V→I. C'est la grande différence avec le style tonal classique." },
  { q: "La densité harmonique maximale avec voix nombreuses est caractéristique de :", opts: ["Debussy","Mozart","Romantisme tardif","Jazz modal"], a: 2, fb: "Rachmaninov et Tchaïkovski écrivent des textures orchestralement denses, avec de nombreuses voix doublées, des accords riches et un chromatisme généralisé. C'est l'apogée du romantisme — tout le contraire de l'économie de Mozart." },
  { q: "Quelle progression identifie le plus clairement un style impressionniste de Debussy ?", opts: ["I–IV–V7–I","I–♭VI–IV–V","CMaj7–B♭Maj7–A♭Maj7–G♭Maj7","Dm9–G13–CMaj9"], a: 2, fb: "Quatre Maj7 descendant par tons entiers sans résolution — c'est le parallélisme impressionniste de Debussy. Pas de V7→I, pas de tension-résolution. Chaque accord est une couleur autonome qui 'glisse' vers la suivante." },
  // Techniques spécifiques
  { q: "Pourquoi Bach évite-t-il les quintes parallèles ?", opts: ["Elles sont trop difficiles à jouer","Elles créent une dissonance de 'quinte cachée' interdite en contrepoint strict","Elles ne sonnent pas bien sur le clavecin","Elles étaient interdites par l'Église"], a: 1, fb: "Les quintes parallèles ('fifths parallèles') créent une 'quinte cachée' (hidden 5th) dans le contrepoint strict — deux voix se déplacent dans le même sens et tombent sur une quinte. Ce mouvement réduit l'indépendance des voix, règle fondamentale du contrepoint à 4 voix." },
  { q: "Le 'cycle des quintes descendant' en C majeur donne :", opts: ["C – G – D – A – E – B – F# – C","C – F – Bdim – Em – Am – Dm – G – C","C – Am – Em – G – Dm – F – C","C – Dm – Em – F – G – Am – Bdim – C"], a: 1, fb: "Le cycle des quintes descendant : C→F→B→E→A→D→G→C. En C majeur diatonique : CMaj – FMaj – Bdim – Em – Am – Dm – G7 – CMaj. Chaque accord descend d'une quinte (ou monte d'une quarte). C'est la progression harmonique fondamentale de la musique baroque." },
  { q: "La gamme par tons de Debussy contient combien de notes ?", opts: ["5 (pentatonique)","6 (hexatonique)","7 (diatonique)","8 (octatonique)"], a: 1, fb: "La gamme par tons est hexatonique — 6 notes équidistantes d'un ton entier : C D E F# G# Bb (puis retour à C). L'absence de demi-ton lui donne son ambiguïté tonale caractéristique. On l'appelle aussi 'gamme de Debussy'." },
  { q: "Un voicing jazz 'sans quinte' omit la 5te car :", opts: ["La quinte est difficile à jouer","La quinte (5te juste) est acoustiquement neutre et apporte peu de couleur","La quinte n'existe pas dans la gamme pentatonique","La quinte crée un parallélisme interdit"], a: 1, fb: "La quinte juste est acoustiquement la plus consonante après l'octave — elle ne colore pas l'accord. En jazz, on garde 3ce+7te (guide-tones) et on ajoute 9te, 11e (#4), 13te. La quinte est souvent omise pour garder les voicings serrés et expressifs." },
  { q: "La progression I–♭VII–IV–I est mixolydienne car :", opts: ["Elle contient 3 accords majeurs","Le ♭VII vient du mode mixolydien (7te mineure du ton)","Elle évite la tonique","Elle descend par quintes"], a: 1, fb: "En G mixolydien, la 7te est F naturel (pas F#). L'accord construit sur ce F naturel est FMaj (♭VIIMaj) — un accord majeur étranger à G majeur mais naturel en G mixolydien. C'est la note caractéristique qui distingue mixolydien de ionien." },
  { q: "Un emprunt 'à l'homonyme' signifie :", opts: ["Emprunter d'une tonalité voisine (quinte)","Emprunter au mode parallèle (même tonique, mode différent : C majeur ↔ C mineur)","Emprunter d'une gamme pentatonique","Emprunter d'un accord de dominante secondaire"], a: 1, fb: "L'emprunt à l'homonyme (ou mode parallèle) utilise des accords de la tonalité de même nom mais de mode différent. En C majeur, emprunter Fm7 (IVm de C mineur) est un emprunt à l'homonyme — même tonique C, mais couleur mineure." },
  { q: "Le rythme harmonique 'rapide' en jazz signifie :", opts: ["Tempo rapide","2 accords par mesure ou plus (vs 1 accord par 2-4 mesures)","Tous les accords sont des croches","Beaucoup de syncopes"], a: 1, fb: "Le rythme harmonique est la fréquence des changements d'accords. En jazz bebop/post-bop, il est souvent rapide : 2 accords par mesure (ou plus dans les Coltrane Changes). Mozart change souvent d'accord toutes les 2-4 mesures. Debussy peut tenir un accord 8 mesures." },
  { q: "Pourquoi Debussy n'utilise pas la dominante fonctionnelle ?", opts: ["Il ne connaissait pas cet accord","Il préfère la couleur harmonique à la tension-résolution fonctionnelle","La dominante est interdite en impressionnisme","Il utilisait uniquement la gamme pentatonique"], a: 1, fb: "Debussy recherche la couleur sonore pure — les accords comme textures plutôt que comme fonctions. La résolution V7→I crée une tension-résolution directionnelle qu'il trouve trop prévisible. Il lui préfère les glissements parallèles qui créent une impression, pas une direction." },
  { q: "La 'basse continue' baroque consiste en :", opts: ["Une ligne de basse contrapuntique complexe","Une ligne de basse chiffrée que le claveciniste/organiste réalise librement avec accords","Une basse en pizzicato des cordes","La basse qui joue le même rythme que la mélodie"], a: 1, fb: "La basse continue (basso continuo) est une ligne de basse chiffrée — des chiffres au-dessus des notes indiquent quels intervalles jouer. L'instrumentiste (clavecin, orgue, luth) réalise les accords librement à partir de ces chiffres. Fondamentale à la musique baroque." },
  { q: "Qu'est-ce qu'une 'relation de tierce' romantique ?", opts: ["Deux voix à distance de tierce","Mouvement de basse par tierce (ex. C→A♭, A♭→F) au lieu de quinte","Un accord de tierce augmentée","La résolution de la sensible vers la tonique"], a: 1, fb: "La relation de tierce est un mouvement harmonique par tierce entre fondamentales — typique du romantisme. CMaj → A♭Maj (tierce mineure) ou CMaj → EMaj (tierce majeure). Ces mouvements créent une surprise harmonique mais restent cohérents grâce aux notes communes." },
  { q: "La 'cadence évitée' chez Chopin signifie :", opts: ["Le V7 résout vers VI ou autre accord au lieu de I","On évite toute cadence dans les nocturnes","La pièce ne se termine pas","On évite l'accord V7"], a: 0, fb: "La cadence évitée (ou interrompue) : V7 ne résout pas vers I attendu mais vers VIm (ou autre accord). En C : G7→Am au lieu de G7→C. Chopin utilise fréquemment cette technique pour éviter la conclusion trop prévisible et maintenir la tension narrative." },
  // Compositeurs et œuvres
  { q: "Brahms disait entendre 'le pas de géants' derrière lui, désignant :", opts: ["Beethoven uniquement","Bach et Beethoven","Mozart et Haydn","Wagner et Liszt"], a: 1, fb: "Brahms était profondément intimidé par l'héritage de Bach (contrepoint) et Beethoven (structure symphonique). Il publie sa 1ère Symphonie à 43 ans seulement, après plus de 20 ans de travail. Sa synthèse de ces deux géants définit son style." },
  { q: "Quel album de Miles Davis (1959) est fondateur du jazz modal ?", opts: ["Kind of Blue","Bitches Brew","A Love Supreme","Giant Steps"], a: 0, fb: "Kind of Blue (1959) est l'album de jazz le plus vendu de tous les temps et le manifeste du jazz modal. Bill Evans et Wynton Kelly au piano. So What est en D dorien. Flamenco Sketches change de mode à chaque phrase. L'harmonie prime sur le bebop rapide." },
  { q: "Quelle pièce de Debussy illustre le mieux le parallélisme d'accords ?", opts: ["Arabesque n°1","La cathédrale engloutie","Für Elise","Le Lac des Cygnes"], a: 1, fb: "La cathédrale engloutie (Préludes, Livre I, n°10) de Debussy utilise des blocs d'accords de quintes parallèles évoquant les orgues d'une cathédrale sous l'eau. Les accords parallèles sans résolution sont la signature de cette pièce emblématique." },
  { q: "Brad Mehldau est connu pour ses réharmonisations jazz de :", opts: ["Bach et Haendel","Radiohead, Beatles et Nick Drake","Brahms et Schubert","Wagner et Liszt"], a: 1, fb: "Brad Mehldau (né 1970) réinterprète régulièrement des chansons de Radiohead (Exit Music, Paranoid Android), Beatles (Blackbird, Martha My Dear), et Nick Drake en jazz post-bop. Ses réharmonisations combinent improvisation jazz et sensibilité pop." },
  { q: "John Coltrane dans 'Giant Steps' (1960) utilise :", opts: ["Substitutions diatoniques uniquement","Cycle de tierces majeures divisant l'octave en 3 (Coltrane Changes)","Mode dorien exclusivement","La gamme par tons de Debussy"], a: 1, fb: "Giant Steps divise l'octave en trois tierces majeures égales : B – G – E♭ – B (Coltrane Changes). Chaque tonalité dure 2 beats. C'est une réharmonisation radicale du cycle de quintes — les musiciens de l'époque avaient du mal à improviser dessus à vitesse." },
  { q: "Chopin a passé la majeure partie de sa carrière à :", opts: ["Varsovie","Vienne","Paris","Londres"], a: 2, fb: "Frédéric Chopin (1810–1849) s'installe à Paris en 1831 et y passe la quasi-totalité de sa vie artistique, entouré des plus grands artistes romantiques (Liszt, Berlioz, Delacroix, George Sand). Paris était alors le centre de la vie musicale européenne." },
  { q: "Mozart compose ses trois symphonies les plus célèbres (n°39, 40, 41) :", opts: ["À 12 ans","En 1788, en 6 semaines","Dans ses premières années viennoises","À Salzburg sous Colloredo"], a: 1, fb: "Les symphonies n°39, 40 et 41 'Jupiter' sont composées à l'été 1788 en quelques semaines — un des exploits créatifs les plus stupéfiants de l'histoire de la musique. Mozart était alors en difficultés financières graves. Ces œuvres ne furent peut-être jamais jouées de son vivant." },
  { q: "Herbie Hancock dans 'Maiden Voyage' (1965) utilise des accords :", opts: ["De dominante classiques V7","Suspendus 7sus4 — sans tierce, approche quartalec","Parallèles de style Debussy","Du cycle de Coltrane Changes"], a: 1, fb: "Maiden Voyage utilise systématiquement des accords 7sus4 (quarte à la place de la tierce) — sans caractère majeur/mineur défini. Cette approche 'quartal' (par quartes) crée une ambiguïté modale proche de Debussy, une révolution dans le vocabulaire jazz." },
  { q: "Bach composait des chorals selon la pratique :", opts: ["Baroque italienne (bel canto)","SATB (Soprano Alto Ténor Basse) à 4 voix indépendantes","Romantique avec extensions","Impressionniste sans dominante"], a: 1, fb: "Les chorals de Bach sont écrits à 4 voix SATB. Chaque voix a son propre mouvement mélodique indépendant, sans quintes ni octaves parallèles. Ces chorals sont encore aujourd'hui le modèle pédagogique du contrepoint à 4 voix." },
  { q: "Quel pianiste romantique a le plus influencé le piano jazz moderne ?", opts: ["Liszt (technique virtuose)","Chopin (harmonies, emprunts modaux, texture)","Brahms (contrepoint)","Schubert (mélodie)"], a: 1, fb: "Chopin est l'influence pianistique la plus directe sur le jazz moderne. Bill Evans citait Chopin comme référence majeure pour ses voicings, ses emprunts modaux et sa texture arpégée. La parenté entre un nocturne de Chopin et un ballade d'Evans est frappante." },
  { q: "Que signifie 'musique impressionniste' en musique (par analogie à la peinture) ?", opts: ["Musique qui imite des sons de la nature","Musique qui crée une impression sensorielle par la couleur harmonique et le timbre, sans narration directionnelle","Musique peinte sur des tableaux","Musique pour accompagner des peintures"], a: 1, fb: "Comme les peintres impressionnistes capturent une impression de lumière (Monet, Renoir), Debussy et Ravel créent des 'impressions' sonores — La cathédrale engloutie, La Mer, Nuages. L'harmonie et le timbre priment sur la structure narrative." },
  // Distinguer styles proches
  { q: "Quelle est la principale différence entre Chopin et Debussy ?", opts: ["Chopin est plus ancien","Chopin utilise encore des dominantes fonctionnelles ; Debussy les évite","Debussy utilise plus d'emprunts modaux","Chopin compose uniquement pour orchestre"], a: 1, fb: "Chopin reste dans le cadre tonal — il résout ses V7 vers I, même s'il retarde, décore et emprunte. Debussy abandonne la résolution fonctionnelle — ses accords ne 'tombent' pas vers I, ils glissent en couleur. Cette différence est fondamentale." },
  { q: "Quelle est la différence de 'basse' entre Bach et Mozart ?", opts: ["Bach : octaves seules ; Mozart : accords seulement","Bach : basse continue mélodiquement active ; Mozart : Alberti bass répétitive","Bach : basse en pizzicato ; Mozart : arco","Aucune différence"], a: 1, fb: "La basse de Bach est une voix à part entière — elle fait contrepoint à la mélodie, avec son propre mouvement mélodique (descentes chromatiques, sauts expressifs). La basse d'Alberti de Mozart est une figure d'accompagnement répétitive qui soutient la mélodie sans l'égaler." },
  { q: "Jazz Evans vs Jazz Coltrane : principale différence harmonique ?", opts: ["Evans est plus rapide","Evans : voicings denses Maj7 et emprunts modaux ; Coltrane : cycle de tierces rapides (Coltrane Changes)","Coltrane utilise plus de pentatonique","Evans compose, Coltrane improvise uniquement"], a: 1, fb: "Bill Evans exploite les voicings riches en extensions (Maj9, Maj7#11) et les emprunts modaux. Coltrane dans Giant Steps utilise les 'Coltrane Changes' — cycle de tierces majeures qui change de tonalité toutes les 2 croches. Deux langages jazz distincts." },
  { q: "Rock modal vs Rock tonal : différence fondamentale ?", opts: ["Le rock tonal est plus rapide","Modal : pas de V7→I fonctionnel, progressions cycliques ; tonal : cadences parfaites V→I","Le rock modal utilise uniquement la gamme pentatonique","Le rock tonal est en mode mineur uniquement"], a: 1, fb: "Le rock tonal utilise les cadences fonctionnelles classiques (V7→I). Le rock modal évite délibérément le V7 — il lui substitue le ♭VII (mixolydien) ou laisse la progression cyclique sans résolution. I–♭VII–IV–I peut tourner indéfiniment." },
  { q: "Chopin vs Romantisme tardif (Rachmaninov) : différence de densité ?", opts: ["Aucune différence — même époque","Chopin : texture pianistique légère, emprunts ponctuels ; Rachmaninov : densité orchestrale maximale","Rachmaninov est plus simple","Chopin compose pour orchestre, Rachmaninov pour piano seul"], a: 1, fb: "Chopin est pianistique et intimiste — ses nocturnes ont 3-4 voix légères. Rachmaninov pense orchestralement — ses pièces pour piano ont la densité d'une partition orchestrale, avec de nombreuses voix, doublures et emprunts dramatiques permanents." },
  { q: "Quelle technique partage le style jazz Evans et le style Chopin ?", opts: ["La substitution tritonique","L'emprunt modal au mode mineur parallèle","La gamme par tons","La basse d'Alberti"], a: 1, fb: "Les deux utilisent l'emprunt modal au mode mineur parallèle. Chopin : IVm, ♭VI dans des progressions romantiques. Evans : CMaj7→Cm7→Fm7 dans Peace Piece. Cette parenté n'est pas un hasard — Evans citait Chopin comme influence majeure." },
  { q: "Quelle technique est UNIQUEMENT caractéristique du jazz parmi les styles étudiés ?", opts: ["L'emprunt modal","La substitution tritonique (V7 → ♭II7)","Les progressions par tierces","Les accords parallèles"], a: 1, fb: "La substitution tritonique est une invention du jazz bebop (années 1940). Elle n'existe pas dans la musique classique de Bach, Mozart, Chopin ou Debussy. Aucun des styles classiques ou rock ne l'utilise systématiquement." },
  { q: "La progression I–IV–V–I est caractéristique de quel(s) style(s) ?", opts: ["Uniquement Mozart","Bach et Mozart (mais pas Debussy ni jazz)","Tous les styles","Uniquement Bach"], a: 1, fb: "I–IV–V–I (cadence parfaite) est la progression tonale fondamentale — utilisée abondamment par Bach et Mozart. Chopin l'utilise mais enrichie (avec emprunts). Debussy l'évite. Le jazz la remplace par II–V–I. Le rock modal l'évite (pas de V7)." },
  { q: "Quel style utilise les 'doublures' (notes jouées en octaves simultanées) de façon systématique ?", opts: ["Jazz post-bop","Romantisme tardif (texture orchestrale dense)","Rock modal","Impressionnisme"], a: 1, fb: "Le romantisme tardif (Rachmaninov, Liszt) utilise les doublures en octaves — deux mains qui jouent la même mélodie à l'octave — pour atteindre une puissance orchestrale sur le piano. Cette technique est rarement utilisée dans le jazz ou l'impressionnisme." },
  { q: "Distinguer Bach (baroque) et Brahms (romantique) dans l'utilisation du contrepoint :", opts: ["Brahms n'utilise pas le contrepoint","Bach : fugue et contrepoint strict ; Brahms : contrepoint intégré à une texture romantique dense","Ils utilisent exactement le même type de contrepoint","Bach est plus harmonique que Brahms"], a: 1, fb: "Bach écrit des fugues avec contrepoint strict (invertible counterpoint, stretto). Brahms intègre le contrepoint à une texture romantique — ses œuvres ont des imitations, des canons, des lignes contrapuntiques, mais noyés dans une harmonie romantique riche." },
  { q: "Debussy et le jazz post-bop (Evans) partagent :", opts: ["Le cycle des quintes","Le parallélisme et l'évitement des dominantes fonctionnelles","La basse d'Alberti","Les cadences parfaites V→I"], a: 1, fb: "Les deux évitent les cadences V7→I et utilisent le parallélisme. Debussy : accords de 9e/Maj7 parallèles. Evans : blocs d'accords qui glissent, emprunts modaux. Cette parenté n'est pas un hasard — Evans était un grand lecteur de Debussy." },
  { q: "En style Mozart, l'harmonie est 'économe' car :", opts: ["Mozart n'avait pas d'accords complexes","Il utilise principalement I, IV, V7, IIm — peu d'accords différents par phrase","L'économie était une règle académique de l'époque","Il composait vite et n'avait pas le temps de complexifier"], a: 1, fb: "Mozart choisit délibérément la clarté harmonique — une phrase de 4 mesures peut n'utiliser que 3-4 accords. Cette économie n'est pas une limitation mais une esthétique : 'la perfection est atteinte quand il n'y a plus rien à enlever'." },
  // Reconnaissance de techniques
  { q: "On entend A♭Maj7 dans une progression en C majeur. C'est probablement :", opts: ["Un accord diatonique de C majeur","Un emprunt modal ♭VI (de C mineur)","Une substitution tritonique","Un accord de dominante secondaire"], a: 1, fb: "A♭Maj7 est ♭VI de C majeur — un accord emprunté à C mineur (naturel/éolien) où A♭ est le VIe degré naturel. C'est l'emprunt modal ♭VIMaj7, très utilisé dans le romantisme (Chopin, Rachmaninov) et le rock modal." },
  { q: "Dans une progression CMaj7–B♭Maj7–A♭Maj7, on reconnaît :", opts: ["Cycle des quintes descendant","Harmonisation parallèle Maj7 descendant par tons","Substitution tritonique","Emprunt de la gamme napolitaine"], a: 1, fb: "CMaj7→B♭Maj7→A♭Maj7 : chaque accord descend d'un ton entier, même structure Maj7 maintenue. C'est le parallélisme impressionniste. Aucune résolution de dominante, pas de fonction harmonique — pure couleur." },
  { q: "GMaj – FMaj – CMaj – GMaj en G : le F est :", opts: ["La quinte de C","Le ♭VII du mode mixolydien de G","Un emprunt napolitain","Un accord de sous-dominante en F majeur"], a: 1, fb: "En G majeur diatonique, la 7te est F# (pas F naturel). F naturel est la 7te mineure — c'est la note caractéristique du mode G mixolydien. L'accord FMaj est donc l'accord ♭VII mixolydien, emprunté au mode mixolydien." },
  { q: "Si on remplace G7 par D♭7 dans une progression en C, c'est :", opts: ["Un emprunt modal","Une substitution tritonique (rappel Cours 22)","Un accord napolitain","Une harmonisation parallèle"], a: 1, fb: "G7 → D♭7 est la substitution tritonique classique. G et D♭ sont à distance de triton (6 demi-tons). D♭7 résout vers C par mouvement de ½ ton (D♭→C), créant la basse chromatique D♭→C au lieu du saut de quinte G→C." },
  { q: "CMaj–Am–Dm–G7–CMaj : c'est :", opts: ["I–♭VI–♭II–♭VII–I","I–VIm–IIm–V7–I — cycle des quintes, style baroque/classique","I–♭VII–IV–V–I — mixolydien","Dm9–G13–CMaj9 — jazz avec extensions"], a: 1, fb: "I–VIm–IIm–V7–I est le cycle des quintes descendant fondamental. Chaque accord est à distance de quinte du précédent. C'est la progression de Bach et du classicisme. Cette 'ligne de basse' C→A→D→G→C forme le fondement du contrepoint baroque." },
  { q: "La note B♭ naturel dans une progression en G majeur indique :", opts: ["Une faute harmonique","Le mode G mixolydien (7te mineure ♭7)","Un accord napolitain","Une modulation en F majeur"], a: 1, fb: "En G majeur, B♭ n'existe pas (la 7te est B naturel). B♭ indique soit le mode G mixolydien (où la 7te est mineure), soit une modulation. Dans un contexte rock/modal, c'est presque toujours G mixolydien — la couleur rock par excellence." },
  { q: "Quel style utilise le plus les suspensions expressives (retards 4–3, 7–6) ?", opts: ["Debussy","Jazz bebop","Chopin et le romantisme","Bach baroque"], a: 2, fb: "Chopin et les romantiques utilisent fréquemment les suspensions (une note est retenue d'un accord à l'autre avant de résoudre). La suspension 4–3 (quarte qui résout vers tierce) est particulièrement expressive dans les nocturnes de Chopin." },
  { q: "Qu'est-ce qu'une 'note de passage chromatique' dans les voix intérieures ?", opts: ["Une note qui ne s'entend pas","Une note étrangère qui descend (ou monte) chromatiquement entre deux notes de l'accord","La fondamentale de l'accord","La note la plus haute de la voix de soprano"], a: 1, fb: "Une note de passage chromatique (ex. A♭ entre A et G dans la voix alto) glisse chromatiquement d'une note de l'accord à la suivante. Chopin en est maître — ses voix intérieures font de petits chromatismes expressifs qui ne s'entendent pas toujours consciemment mais enrichissent la texture." },
  { q: "La progression Am–G–F–G (en C majeur) est typique de :", opts: ["Style Chopin (emprunt modal)","Rock modal éolien (VI–♭VII–♭VI–♭VII cyclique)","Jazz II–V–I","Bach cycle des quintes"], a: 1, fb: "Am–G–F–G en C majeur = VIm–V–IV–V. En A éolien (ou C majeur modal), c'est la progression folk/rock éolienne — Stairway to Heaven (Led Zeppelin), Hotel California. Cyclique, sans dominante fonctionnelle, couleur modale naturelle." },
  { q: "Quel style combine le plus jazz et écriture pianistique classique ?", opts: ["Bebop traditionnel (Parker)","Jazz post-bop (Evans, Mehldau) — influences Debussy et Chopin","Rock modal","Neo-soul"], a: 1, fb: "Bill Evans et Brad Mehldau sont explicitement influencés par Debussy (parallélisme) et Chopin (emprunts modaux, texture arpégée). Evans a étudié de manière approfondie le répertoire de piano classique. Le jazz post-bop est la synthèse la plus directe entre jazz et piano classique." },
  { q: "La 'coda' d'une pièce romantique utilise souvent :", opts: ["Un retour soudain au premier thème","Une pédale de dominante longue avant la résolution finale","Un changement de tonalité vers le relatif majeur","Un motif exclusivement rythmique"], a: 1, fb: "La coda romantique utilise fréquemment la pédale de dominante (note V répétée en basse pendant que l'harmonie change au-dessus) pour créer une tension maximale avant la résolution finale. Rachmaninov et Tchaïkovski l'utilisent pour des finales dramatiques." },
  { q: "Quelle affirmation décrit le mieux le style de Brahms ?", opts: ["Moderniste et avant-gardiste","Contrepoint rigoureux dans une texture romantique dense — synthèse de Bach et Beethoven","Purement baroque, sans romantisme","Jazz et impressionnisme mélangés"], a: 1, fb: "Brahms est le 'conservateur romantique' — il maintient des structures classiques (contrepoint fugué, formes sonate rigoureuses) dans un langage harmonique romantique dense. Sa synthèse de Bach (contrepoint) et Beethoven (développement thématique) est unique." },
  { q: "Pourquoi la mélodie Do–Mi–Sol–Mi (arpège de C) peut-elle s'harmoniser dans presque tous les styles ?", opts: ["Parce qu'elle ne contient que 2 notes","Parce que C, E, G sont communes à de nombreux accords — CMaj, Am, Em, Fmaj7, A♭Maj7 (E=la 5te), etc.","Parce qu'elle est en mode dorien","Parce qu'elle est trop simple pour poser des contraintes"], a: 1, fb: "C, E, G sont présents dans CMaj, Am, Em, FMaj (C+E=3ce+5te), et même dans des accords de jazz (CMaj9, Am7, etc.). Cette flexibilité permet d'harmoniser cette mélodie dans n'importe quel style — c'est pourquoi on l'utilise comme mélodie-test pédagogique." },
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
const SECTIONS_IDS = ["styles", "exercices", "quiz"] as const;

const S = {
  wrap:     { fontFamily: "var(--font-sans, system-ui)", maxWidth: 720, margin: "0 auto", padding: "0 1rem 3rem" } as React.CSSProperties,
  header:   { padding: "1.5rem 0 1rem", borderBottom: "0.5px solid #e5e5e5", marginBottom: "1.25rem" } as React.CSSProperties,
  badge:    { display: "inline-block", background: "#F0EAFA", color: PRIMARY, fontSize: 11, fontWeight: 500, padding: "2px 10px", borderRadius: 20, marginBottom: 6 } as React.CSSProperties,
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
  infoBox:  { borderLeft: `2px solid ${PRIMARY}`, padding: "8px 14px", background: "#F0EAFA", borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#3D2450", lineHeight: 1.6 } as React.CSSProperties,
  warnBox:  { borderLeft: "2px solid #BA7517", padding: "8px 14px", background: "#FAEEDA", borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#633806", lineHeight: 1.6 } as React.CSSProperties,
  tip:      { borderLeft: "2px solid #0F6E56", padding: "8px 14px", background: "#E1F5EE", borderRadius: "0 6px 6px 0", margin: "12px 0", fontSize: 13, color: "#085041", lineHeight: 1.6 } as React.CSSProperties,
};

export default function Cours23() {
  const [activeSection, setActiveSection] = useState<string>("styles");
  const i18n = useCoursI18n("cours23");
  const { questions: ALL_QUESTIONS } = useCoursContent(cours23Content);
  const [activeStyle, setActiveStyle] = useState<string | null>(null);
  const [activeEx,    setActiveEx]    = useState<number | null>(null);
  const [exAnswers,   setExAnswers]   = useState<(number | null)[]>(Array(EXERCICES.length).fill(null));

  const [quizQuestions] = useState(() => shuffle(ALL_QUESTIONS).slice(0, QUIZ_COUNT));
  const [quizIdx,      setQuizIdx]      = useState(0);
  const [quizScore,    setQuizScore]    = useState(0);
  const [quizAnswered, setQuizAnswered] = useState(false);
  const [quizDone,     setQuizDone]     = useState(false);
  const [selectedOpt,  setSelectedOpt]  = useState<number | null>(null);

  const pianoRef = useRef<PianoPlayerRef>(null);

  const answerEx = (exIdx: number, choiceIdx: number) => {
    if (exAnswers[exIdx] !== null) return;
    setExAnswers(prev => { const n = [...prev]; n[exIdx] = choiceIdx; return n; });
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
    if (id === "styles") return "Les styles";
    if (id === "exercices") return "Exercices";
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
        <span style={S.badge}>Niveau 2 · Cours 23</span>
        <h1 style={S.h1}>Composer dans le style des maîtres</h1>
        <p style={S.subtitle}>{i18n.subtitle}</p>
      </div>

      <MaitreCard
        composer="Johannes Brahms"
        period="1833–1897"
        emoji="📚"
        concept="Style et maîtrise"
        anecdote="Brahms passa des années à étudier Bach et Beethoven avant de publier sa première symphonie à 43 ans. Il disait entendre le pas de géants derrière lui. Pourtant son style est immédiatement reconnaissable : harmonie dense, rythmes syncopés, mélancolie nordique. Étudier les maîtres ne dilue pas le style — il le forge."
        lesson="Connaître les styles des autres est le chemin le plus court vers le sien."
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

      {/* ══ SECTION 1 : LES STYLES ══ */}
      {activeSection === "styles" && (
        <div>
          <h2 style={S.h2}>7 signatures harmoniques</h2>
          <p style={S.p}>
            Chaque compositeur ou mouvement possède une <strong>signature harmonique</strong> —
            un ensemble de techniques, progressions et couleurs qui le rendent immédiatement
            reconnaissable. Cliquez sur un style pour écouter sa progression type.
          </p>

          <div style={S.infoBox}>
            <strong>Comment reconnaître un style ?</strong> Cherchez ces 3 indices :
            (1) quels accords sont utilisés (diatoniques ? empruntés ? extensions ?) ;
            (2) comment les accords se succèdent (par quintes ? par tierces ? parallèlement ?) ;
            (3) y a-t-il une résolution V7→I ou non ?
          </div>

          <p style={{ fontSize: 13, color: "#888", marginBottom: 16 }}>
            Cliquez sur un style pour voir ses caractéristiques et écouter sa progression type.
          </p>

          {STYLES.map(style => (
            <div
              key={style.id}
              onClick={() => setActiveStyle(activeStyle === style.id ? null : style.id)}
              style={{
                border: `0.5px solid ${activeStyle === style.id ? style.color : "#e5e5e5"}`,
                borderRadius: 10, marginBottom: 8, overflow: "hidden", cursor: "pointer",
                background: activeStyle === style.id ? style.bg : "#fff", transition: "all .15s",
              }}
            >
              {/* Header style */}
              <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 16px" }}>
                <div style={{ fontSize: 22, flexShrink: 0 }}>{style.emoji}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" as const }}>
                    <span style={{ fontSize: 14, fontWeight: 500, color: "#111" }}>{style.name}</span>
                    <span style={{ fontSize: 11, color: "#aaa", fontStyle: "italic" }}>{style.era}</span>
                  </div>
                  <div style={{ fontSize: 12, color: "#888", marginTop: 2 }}>
                    {style.progressionLabel}
                  </div>
                </div>
                <div style={{ fontSize: 11, color: "#bbb", flexShrink: 0 }}>
                  {activeStyle === style.id ? "▲" : "▼"}
                </div>
              </div>

              {/* Détail */}
              {activeStyle === style.id && (
                <div style={{ padding: "0 16px 16px", borderTop: `0.5px solid ${style.color}20` }}>
                  {/* Signatures */}
                  <div style={{ marginTop: 12, marginBottom: 14 }}>
                    <div style={{ fontSize: 11, fontWeight: 600, color: style.color, textTransform: "uppercase" as const, letterSpacing: "0.08em", marginBottom: 8 }}>
                      Signatures
                    </div>
                    <ul style={{ margin: 0, padding: "0 0 0 16px" }}>
                      {style.signatures.map((sig, i) => (
                        <li key={i} style={{ fontSize: 13, color: "#444", lineHeight: 1.6, marginBottom: 2 }}>{sig}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Progression + bouton écouter */}
                  <div style={{ background: style.bg, border: `0.5px solid ${style.color}40`, borderRadius: 8, padding: "10px 12px", marginBottom: 12 }}>
                    <div style={{ fontSize: 10, fontWeight: 600, color: style.color, textTransform: "uppercase" as const, letterSpacing: "0.08em", marginBottom: 8 }}>
                      Progression type
                    </div>
                    <div style={{ display: "flex", gap: 6, flexWrap: "wrap" as const, marginBottom: 8 }}>
                      {style.progression.map((chord, ci) => (
                        <span key={ci} style={{
                          fontSize: 12, fontWeight: 600, color: style.color,
                          background: "white", padding: "2px 8px", borderRadius: 6,
                          border: `0.5px solid ${style.color}`, fontFamily: "monospace",
                        }}>{chord}</span>
                      ))}
                    </div>
                    <button
                      onClick={e => { e.stopPropagation(); playProgression(pianoRef as React.RefObject<PianoPlayerRef>, style.dotKeys); }}
                      style={{ fontSize: 11, padding: "4px 12px", border: `0.5px solid ${style.color}`, borderRadius: 20, cursor: "pointer", background: "white", color: style.color }}
                    >
                      ▶ Écouter
                    </button>
                  </div>

                  <div style={S.tip}><strong>À retenir :</strong> {style.tip}</div>
                </div>
              )}
            </div>
          ))}

          <div style={S.warnBox}>
            <strong>Les styles ne sont pas des cases :</strong> un compositeur peut mélanger
            plusieurs styles dans une même pièce. Chopin emprunte à Bach (contrepoint) et
            anticipe Debussy (emprunts modaux). Reconnaître un style, c'est identifier le
            langage dominant, pas classer absolument.
          </div>
        </div>
      )}

      {/* ══ SECTION 2 : EXERCICES ══ */}
      {activeSection === "exercices" && (
        <div>
          <h2 style={S.h2}>Exercices guidés — composer dans le style</h2>
          <p style={S.p}>
            Pour chaque style, choisissez la progression qui lui correspond.
            Écoutez chaque option avant de répondre — l'oreille guide la théorie.
          </p>

          {EXERCICES.map((ex, exIdx) => {
            const answered = exAnswers[exIdx] !== null;
            const selected = exAnswers[exIdx];
            const style = STYLES.find(s => s.name === ex.style || s.id === ex.id.replace("ex_", ""))!;

            return (
              <div key={ex.id} style={{ border: `0.5px solid ${activeEx === exIdx ? ex.color : "#e5e5e5"}`, borderRadius: 10, marginBottom: 10, overflow: "hidden" }}>
                {/* Header exercice */}
                <div
                  onClick={() => setActiveEx(activeEx === exIdx ? null : exIdx)}
                  style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 16px", cursor: "pointer", background: activeEx === exIdx ? ex.bg : "#fff" }}
                >
                  <div style={{ fontSize: 20, flexShrink: 0 }}>{ex.emoji}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ fontSize: 13, fontWeight: 500, color: "#111" }}>{ex.style}</span>
                      {answered && (
                        <span style={{
                          fontSize: 10, fontWeight: 600, padding: "1px 8px", borderRadius: 10,
                          background: ex.choices[selected!].isCorrect ? "#E1F5EE" : "#FCEBEB",
                          color: ex.choices[selected!].isCorrect ? "#0F6E56" : "#A32D2D",
                        }}>
                          {ex.choices[selected!].isCorrect ? "✓ Correct" : "✗ Incorrect"}
                        </span>
                      )}
                    </div>
                    <div style={{ fontSize: 12, color: "#888", marginTop: 2 }}>
                      {ex.context.substring(0, 60)}...
                    </div>
                  </div>
                  <div style={{ fontSize: 11, color: "#bbb", flexShrink: 0 }}>
                    {activeEx === exIdx ? "▲" : "▼"}
                  </div>
                </div>

                {/* Contenu exercice */}
                {activeEx === exIdx && (
                  <div style={{ padding: "12px 16px 16px", borderTop: `0.5px solid ${ex.color}20`, background: ex.bg }}>
                    <p style={{ ...S.p, marginBottom: 16, fontWeight: 500, color: "#111", fontSize: 13 }}>{ex.context}</p>

                    <div style={{ display: "flex", flexDirection: "column" as const, gap: 10 }}>
                      {ex.choices.map((choice, ci) => {
                        let bg = "#fff", border = "#e5e5e5", color = "#333";
                        if (answered) {
                          if (choice.isCorrect)   { bg = "#E1F5EE"; border = "#0F6E56"; color = "#085041"; }
                          else if (selected === ci) { bg = "#FCEBEB"; border = "#A32D2D"; color = "#501313"; }
                          else                      { bg = "#f8f8f8"; border = "#e5e5e5"; color = "#aaa"; }
                        } else if (selected === ci) {
                          bg = ex.bg; border = ex.color; color = ex.color;
                        }

                        return (
                          <div key={ci} style={{ border: `0.5px solid ${border}`, borderRadius: 8, overflow: "hidden", background: bg }}>
                            <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 12px" }}>
                              {/* Chords */}
                              <div style={{ flex: 1 }}>
                                <div style={{ display: "flex", gap: 5, flexWrap: "wrap" as const, marginBottom: 6 }}>
                                  {choice.chords.map((chord, k) => (
                                    <span key={k} style={{
                                      fontSize: 11, fontWeight: 600, fontFamily: "monospace",
                                      padding: "1px 7px", borderRadius: 5,
                                      background: answered ? (choice.isCorrect ? "#c8f0df" : selected === ci ? "#fdd" : "#eee") : "#f0f0f0",
                                      color: answered ? (choice.isCorrect ? "#085041" : selected === ci ? "#501313" : "#aaa") : "#444",
                                    }}>{chord}</span>
                                  ))}
                                </div>
                                {answered && (
                                  <div style={{ fontSize: 12, color: color, lineHeight: 1.55 }}>{choice.feedback}</div>
                                )}
                              </div>
                              {/* Boutons */}
                              <div style={{ display: "flex", gap: 6, flexShrink: 0, flexDirection: "column" as const }}>
                                <button
                                  onClick={e => { e.stopPropagation(); playProgression(pianoRef as React.RefObject<PianoPlayerRef>, choice.dotKeys); }}
                                  style={{ fontSize: 11, padding: "3px 10px", border: "0.5px solid #ccc", borderRadius: 16, cursor: "pointer", background: "white", color: "#666" }}
                                >
                                  ▶
                                </button>
                                {!answered && (
                                  <button
                                    onClick={e => { e.stopPropagation(); answerEx(exIdx, ci); }}
                                    style={{ fontSize: 11, padding: "3px 10px", border: `0.5px solid ${ex.color}`, borderRadius: 16, cursor: "pointer", background: ex.bg, color: ex.color }}
                                  >
                                    Choisir
                                  </button>
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          <div style={S.tip}>
            <strong>Méthode :</strong> écoutez d'abord toutes les options (bouton ▶) avant de choisir.
            L'oreille reconnaît le style avant la théorie — faites confiance à votre écoute,
            puis vérifiez avec les explications.
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
                {quizScore >= 8 ? "📚" : quizScore >= 6 ? "👍" : "💪"}
              </div>
              <div style={{ fontSize: 20, fontWeight: 500, color: "#111", marginBottom: 4 }}>
                Score : {quizScore} / {QUIZ_COUNT}
              </div>
              <div style={{ fontSize: 14, color: "#666", marginBottom: 20 }}>
                {quizScore >= 8 ? "Excellent — les styles des maîtres n'ont plus de secrets !" :
                 quizScore >= 6 ? "Bien — encore quelques écoutes comparées et ce sera parfait." :
                 "Continue à écouter les progressions de chaque style — l'oreille s'éduque !"}
              </div>
              <button
                onClick={resetQuiz}
                style={{ fontSize: 13, padding: "8px 20px", border: `0.5px solid ${PRIMARY}`, borderRadius: 20, cursor: "pointer", background: "#F0EAFA", color: PRIMARY }}
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
