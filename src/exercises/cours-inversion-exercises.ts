/**
 * src/exercises/cours-inversion-exercises.ts
 * Harmonia — Exercices de choix de renversements
 *
 * Type : l'élève voit une progression et choisit le meilleur renversement
 * pour assurer une bonne conduite de voix.
 */

export interface InversionChoice {
  label: string;       // ex: "G7/B"
  description: string; // ex: "1er renversement — Si à la basse"
  isCorrect: boolean;
  feedback: string;    // explication spécifique à ce choix
}

export interface InversionExercise {
  id: string;
  type: "inversion";
  cours: number;
  title: string;
  difficulty: 1 | 2 | 3;
  tags: string[];
  concepts: string[];
  // La progression complète avec contexte
  progressionBefore: string;  // ex: "Dm7 →"
  targetChord: string;        // ex: "G7"
  progressionAfter: string;   // ex: "→ C"
  question: string;
  choices: InversionChoice[];
  explanation: string;        // explication générale après réponse
  hint?: string;
}

export const INVERSION_EXERCISES: InversionExercise[] = [

  // ── Cours 4 — Cadences ────────────────────────────────────────────────────

  {
    id: "inv-4-001",
    type: "inversion",
    cours: 4,
    difficulty: 1,
    tags: ["cadence parfaite", "renversement", "conduite de voix"],
    concepts: ["renversement", "ligne de basse", "cadence V→I"],
    progressionBefore: "Dm →",
    targetChord: "G7",
    progressionAfter: "→ C",
    question: "Dans la progression Dm → G7 → C, quel renversement de G7 assure la meilleure conduite de voix ?",
    hint: "Regarde la note de basse de Dm (Ré) et de C (Do) — quel renversement de G7 crée une ligne de basse la plus conjointe ?",
    choices: [
      {
        label: "G7",
        description: "État fondamental — Sol à la basse",
        isCorrect: false,
        feedback: "La basse ferait Ré → Sol → Do — un saut de quarte puis une quinte descendante. Fonctionnel mais moins fluide.",
      },
      {
        label: "G7/B",
        description: "1er renversement — Si à la basse",
        isCorrect: true,
        feedback: "Excellent ! La basse fait Ré → Si → Do — mouvement conjoint descendant puis demi-ton. C'est la conduite de voix optimale pour cette cadence.",
      },
      {
        label: "G7/D",
        description: "2e renversement — Ré à la basse",
        isCorrect: false,
        feedback: "La basse reste sur Ré puis saute vers Do. Le 2e renversement crée une instabilité (accord de quarte et sixte) qui appelle une résolution différente.",
      },
      {
        label: "G7/F",
        description: "3e renversement — Fa à la basse",
        isCorrect: false,
        feedback: "Le 3e renversement (sensible de résolution) est très instable et rarement utilisé en cadence finale. La basse Fa → Do est une quarte — acceptable mais pas optimal ici.",
      },
    ],
    explanation: "Dans une cadence Dm → G7 → C, G7/B crée une ligne de basse descendante Ré→Si→Do — mouvement conjoint qui donne de la fluidité. C'est pourquoi le 1er renversement de V7 est si fréquent dans les cadences.",
  },

  {
    id: "inv-4-002",
    type: "inversion",
    cours: 4,
    difficulty: 1,
    tags: ["cadence plagale", "renversement", "ligne de basse"],
    concepts: ["renversement", "cadence IV→I", "conduite de voix"],
    progressionBefore: "",
    targetChord: "F",
    progressionAfter: "→ C",
    question: "Dans la progression F → C (cadence plagale), quel renversement de F crée la ligne de basse la plus fluide ?",
    hint: "La tonique C a Do à la basse. Quel renversement de F se rapproche le plus de Do par mouvement conjoint ?",
    choices: [
      {
        label: "F",
        description: "État fondamental — Fa à la basse",
        isCorrect: false,
        feedback: "La basse fait Fa → Do — une quinte descendante. C'est la cadence plagale classique, correcte mais avec un grand saut.",
      },
      {
        label: "F/A",
        description: "1er renversement — La à la basse",
        isCorrect: true,
        feedback: "Parfait ! La basse fait La → Do — une tierce ascendante conjointe. Beaucoup plus fluide que Fa → Do.",
      },
      {
        label: "F/C",
        description: "2e renversement — Do à la basse",
        isCorrect: false,
        feedback: "La basse ne bouge pas (Do → Do). C'est une pédale de tonique, pas vraiment une progression — l'effet de cadence est perdu.",
      },
    ],
    explanation: "F/A → C crée une ligne de basse La→Do, mouvement de tierce ascendant très naturel. Le 1er renversement du IV enrichit la cadence plagale en évitant le grand saut de quinte.",
  },

  {
    id: "inv-4-003",
    type: "inversion",
    cours: 4,
    difficulty: 2,
    tags: ["cycle des quintes", "renversement", "basse conjointe"],
    concepts: ["renversement", "cycle des quintes", "conduite de voix"],
    progressionBefore: "C →",
    targetChord: "F",
    progressionAfter: "→ G7 → C",
    question: "Dans C → F → G7 → C, quel renversement de F crée la meilleure ligne de basse ?",
    hint: "La basse part de Do (C) et va vers Sol (G7). Quel renversement de F se place le mieux entre Do et Sol ?",
    choices: [
      {
        label: "F",
        description: "État fondamental — Fa à la basse",
        isCorrect: false,
        feedback: "La basse : Do → Fa → Sol → Do. Le saut Do→Fa (quarte) puis Fa→Sol (seconde) est acceptable mais irrégulier.",
      },
      {
        label: "F/A",
        description: "1er renversement — La à la basse",
        isCorrect: true,
        feedback: "Excellent ! La basse : Do → La → Sol → Do. Ligne descendante conjointe Do→La→Sol, puis octave de résolution. C'est élégant et très courant.",
      },
      {
        label: "F/C",
        description: "2e renversement — Do à la basse",
        isCorrect: false,
        feedback: "La basse : Do → Do → Sol → Do. La basse reste immobile sur Do avant de sauter à Sol — peu intéressant mélodiquement.",
      },
    ],
    explanation: "C → F/A → G7 → C crée une basse Do→La→Sol→Do — ligne descendante conjointe, très fluide. C'est pourquoi le IVe degré en 1er renversement est si courant dans le cycle I→IV→V→I.",
  },

  {
    id: "inv-4-004",
    type: "inversion",
    cours: 4,
    difficulty: 2,
    tags: ["pendule", "renversement", "alternance T-SD"],
    concepts: ["renversement", "pendule harmonique", "basse mélodique"],
    progressionBefore: "C →",
    targetChord: "F",
    progressionAfter: "→ C (pendule)",
    question: "Dans un pendule C → F → C → F, quel renversement de F rend la basse plus mélodique ?",
    hint: "Le pendule oscille entre Do (C) et un accord de F. Quelle note de F se trouve le plus proche de Do ?",
    choices: [
      {
        label: "F",
        description: "État fondamental — Fa à la basse",
        isCorrect: false,
        feedback: "La basse oscille Do → Fa → Do → Fa. Le saut de quarte en permanence crée un effet de balancement grossier.",
      },
      {
        label: "F/A",
        description: "1er renversement — La à la basse",
        isCorrect: true,
        feedback: "Bien ! La basse : Do → La → Do → La. La tierce Do↔La est un mouvement bien plus élégant pour un pendule — l'oreille perçoit une ligne mélodique.",
      },
      {
        label: "F/C",
        description: "2e renversement — Do à la basse",
        isCorrect: false,
        feedback: "La basse reste sur Do en permanence — c'est une pédale, pas vraiment un pendule. L'effet harmonique est brouillé.",
      },
    ],
    explanation: "Dans un pendule T–SD, le 1er renversement du IV crée une basse oscillante Do↔La — bien plus musical qu'un saut de quarte répété. C'est la technique classique des ostinatos de basse dans la musique baroque et pop.",
  },

  // ── Cours 5 — Emprunts ────────────────────────────────────────────────────

  {
    id: "inv-5-001",
    type: "inversion",
    cours: 5,
    difficulty: 2,
    tags: ["accord napolitain", "renversement", "bII6"],
    concepts: ["accord napolitain", "1er renversement", "conduite de voix"],
    progressionBefore: "",
    targetChord: "Db",
    progressionAfter: "→ G7 → Cm",
    question: "L'accord napolitain Db précède G7 → Cm. Quel renversement de Db est traditionnellement utilisé ?",
    hint: "L'accord napolitain s'écrit traditionnellement ♭II6 — le chiffre 6 indique un renversement. La 6te au-dessus de la basse, c'est le 1er renversement.",
    choices: [
      {
        label: "Db",
        description: "État fondamental — Réb à la basse",
        isCorrect: false,
        feedback: "L'état fondamental du napolitain est inhabituel et crée un saut de basse peu élégant vers Sol (G7). Le napolitain s'utilise traditionnellement en 1er renversement.",
      },
      {
        label: "Db/F",
        description: "1er renversement — Fa à la basse",
        isCorrect: true,
        feedback: "Parfait ! Db/F = ♭II6 — c'est la notation traditionnelle du napolitain. La basse Fa → Sol est une seconde ascendante, très naturelle. C'est la forme standard dans toute la littérature classique.",
      },
      {
        label: "Db/Ab",
        description: "2e renversement — Lab à la basse",
        isCorrect: false,
        feedback: "Le 2e renversement du napolitain est très rare et crée une instabilité harmonique supplémentaire difficile à résoudre élégamment.",
      },
    ],
    explanation: "L'accord napolitain s'écrit toujours ♭II6 — en 1er renversement avec Fa à la basse en Do mineur. Db/F → G7 : la basse Fa→Sol est conjointe, et la résolution du triton Réb→Do / La→Sol est claire.",
  },

  {
    id: "inv-5-002",
    type: "inversion",
    cours: 5,
    difficulty: 3,
    tags: ["basse de chaconne", "renversement", "ligne descendante"],
    concepts: ["basse de chaconne", "renversement", "mouvement conjoint"],
    progressionBefore: "Cm →",
    targetChord: "Gm",
    progressionAfter: "→ Fm → G7",
    question: "Dans la basse de chaconne Cm → Gm → Fm → G7, quel renversement de Gm crée la ligne de basse descendante caractéristique ?",
    hint: "La basse de chaconne est célèbre pour sa ligne conjointe descendante. Cm a Do à la basse, Fm/Ab a Lab à la basse. Quelle note de Gm s'intercale entre Do et Lab ?",
    choices: [
      {
        label: "Gm",
        description: "État fondamental — Sol à la basse",
        isCorrect: false,
        feedback: "La basse : Do → Sol → Lab → Sol. Pas de ligne descendante — c'est une suite de sauts discontinus.",
      },
      {
        label: "Gm/Bb",
        description: "1er renversement — Sib à la basse",
        isCorrect: true,
        feedback: "Parfait ! La basse : Do → Sib → Lab → Sol. Ligne descendante conjointe Do→Sib→Lab→Sol — c'est exactement la basse de chaconne caractéristique !",
      },
      {
        label: "Gm/D",
        description: "2e renversement — Ré à la basse",
        isCorrect: false,
        feedback: "La basse : Do → Ré → Lab → Sol. La montée Do→Ré brise la descente caractéristique de la chaconne.",
      },
    ],
    explanation: "La basse de chaconne Cm → Gm/Bb → Fm/Ab → G7 crée la ligne Do→Sib→Lab→Sol — descente conjointe d'une quarte. C'est l'une des progressions les plus célèbres du Baroque, utilisée par Purcell, Bach et de nombreux compositeurs modernes.",
  },

  // ── Cours 7 — Tonicisation ────────────────────────────────────────────────

  {
    id: "inv-7-001",
    type: "inversion",
    cours: 7,
    difficulty: 2,
    tags: ["dominante secondaire", "renversement", "V/II"],
    concepts: ["tonicisation", "renversement", "conduite de voix"],
    progressionBefore: "C →",
    targetChord: "A7",
    progressionAfter: "→ Dm → G7 → C",
    question: "Dans C → A7 → Dm → G7 → C, quel renversement de A7 améliore la conduite de voix ?",
    hint: "C a Do à la basse, Dm a Ré à la basse. Quel renversement de A7 crée un mouvement de basse conjoint entre Do et Ré ?",
    choices: [
      {
        label: "A7",
        description: "État fondamental — La à la basse",
        isCorrect: false,
        feedback: "La basse : Do → La → Ré → Sol → Do. Le saut Do→La (tierce) est acceptable mais interrompt la fluidité.",
      },
      {
        label: "A7/C#",
        description: "1er renversement — Do# à la basse",
        isCorrect: true,
        feedback: "Excellent ! La basse : Do → Do# → Ré → Sol → Do. Mouvement chromatique ascendant Do→Do#→Ré — très expressif et très fluide. C'est le renversement typique des dominantes secondaires.",
      },
      {
        label: "A7/G",
        description: "3e renversement — Sol à la basse",
        isCorrect: false,
        feedback: "La basse : Do → Sol → Ré — les sauts sont importants et la progression devient lourde. Le 3e renversement est très instable ici.",
      },
    ],
    explanation: "A7/C# crée un chromatisme ascendant Do→Do#→Ré dans la basse — mouvement expressif typique des dominantes secondaires. La sensible Do# monte vers Ré (tonique de Dm), ce qui renforce la résolution.",
  },

  {
    id: "inv-7-002",
    type: "inversion",
    cours: 7,
    difficulty: 3,
    tags: ["chaîne de dominantes", "renversement", "conduite de voix"],
    concepts: ["tonicisation en chaîne", "renversement", "basse chromatique"],
    progressionBefore: "C →",
    targetChord: "D7",
    progressionAfter: "→ G7 → C",
    question: "Dans C → D7 → G7 → C (V/V), quel renversement de D7 crée une basse plus intéressante ?",
    hint: "C a Do à la basse, G7/B a Si à la basse. Quel renversement de D7 s'intercale entre Do et Si de façon conjointe ?",
    choices: [
      {
        label: "D7",
        description: "État fondamental — Ré à la basse",
        isCorrect: false,
        feedback: "La basse : Do → Ré → Si → Do. Le saut Ré→Si (tierce) brise la fluidité descendante.",
      },
      {
        label: "D7/F#",
        description: "1er renversement — Fa# à la basse",
        isCorrect: false,
        feedback: "La basse : Do → Fa# → Si → Do. Le saut Do→Fa# (triton) est très instable et difficile à justifier musicalement ici.",
      },
      {
        label: "D7/C",
        description: "3e renversement — Do à la basse",
        isCorrect: true,
        feedback: "Bien vu ! La basse : Do → Do → Si → Do. La basse reste sur Do (pédale) pendant que D7/C crée une tension de dominante secondaire au-dessus. Puis Si→Do est la résolution de la sensible. Technique très utilisée en jazz.",
      },
    ],
    explanation: "D7/C (3e renversement) crée une pédale de tonique Do pendant que l'harmonie module vers G. C'est une technique sophistiquée — la basse tient la tonique pendant que les voix supérieures créent la tension de la dominante secondaire.",
  },

  // ── Cours 8 — Modulation ──────────────────────────────────────────────────

  {
    id: "inv-8-001",
    type: "inversion",
    cours: 8,
    difficulty: 2,
    tags: ["modulation", "accord pivot", "renversement"],
    concepts: ["accord pivot", "renversement", "conduite de voix"],
    progressionBefore: "C → F → G7 → C →",
    targetChord: "Am",
    progressionAfter: "→ D7 → G",
    question: "Am est l'accord pivot (VI en C = II en G). Quel renversement d'Am facilite la transition vers D7 → G ?",
    hint: "D7 a Ré à la basse. Quel renversement d'Am crée un mouvement conjoint vers Ré ?",
    choices: [
      {
        label: "Am",
        description: "État fondamental — La à la basse",
        isCorrect: false,
        feedback: "La basse : Do (C) → La → Ré (D7) → Sol (G). Le saut La→Ré (quarte) est acceptable mais peu élégant pour un pivot.",
      },
      {
        label: "Am/C",
        description: "1er renversement — Do à la basse",
        isCorrect: true,
        feedback: "Excellent ! La basse : Do → Do → Ré → Sol. La basse reste sur Do pendant Am/C, puis monte conjointement Do→Ré→Sol. Très fluide — le pivot est presque imperceptible !",
      },
      {
        label: "Am/E",
        description: "2e renversement — Mi à la basse",
        isCorrect: false,
        feedback: "La basse : Do → Mi → Ré → Sol. La montée Do→Mi puis la descente Mi→Ré créent un mouvement irrégulier qui attire trop l'attention sur le pivot.",
      },
    ],
    explanation: "Am/C maintient Do à la basse (même note que C), rendant le pivot Am quasi imperceptible. C'est la technique idéale pour une modulation fluide : la basse ne bouge pas au moment du pivot, puis reprend son mouvement naturellement.",
  },

];