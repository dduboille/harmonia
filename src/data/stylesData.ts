/**
 * Données des 11 styles harmoniques — Comparateur de styles Harmonia.
 * Les voicings utilisent le format "Note:octave" compatible avec PianoPlayer.playVoicing().
 * Octave 2 = basse grave, 3 = médium (Do central), 4 = aigu.
 */

export interface StyleData {
  id: string;
  name: string;
  emoji: string;
  period: string;
  color: string;
  bg: string;
  border: string;
  description: string;
  techniques: string[];
  reference: string;
  referenceWork: string;
  /** 4 chords, each as an array of "Note:octave" specs */
  voicings: string[][];
  /** Display names for the 4 chords */
  chordNames: string[];
  /** What harmonically distinguishes this style */
  harmonicSignature: string;
}

export const STYLES: StyleData[] = [
  {
    id: "bach",
    name: "Bach",
    emoji: "🎼",
    period: "Baroque · 1685–1750",
    color: "#1a3a5c",
    bg: "#E8F0F8",
    border: "#C2D5EC",
    description:
      "La logique contrapuntique au service de la tension harmonique. Chaque voix est autonome, chaque résolution inévitable. Le triton entre Si et Fa structure tout l'espace tonal.",
    techniques: ["SATB strict à 4 voix", "Résolution du triton B–F", "Cycle des quintes"],
    reference: "J.S. Bach",
    referenceWork: "Le Clavier Bien Tempéré (1722)",
    harmonicSignature: "I – IV – V – I · Résolution tritonique obligatoire",
    voicings: [
      // I (C major, SATB)
      ["C:2", "G:3", "E:4", "C:5"],
      // IV (F major)
      ["F:2", "A:3", "F:4", "C:5"],
      // V (G major)
      ["G:2", "B:3", "D:4", "G:4"],
      // I (C major)
      ["C:2", "G:3", "E:4", "C:5"],
    ],
    chordNames: ["I – Do M", "IV – Fa M", "V – Sol M", "I – Do M"],
  },

  {
    id: "mozart",
    name: "Mozart",
    emoji: "🎹",
    period: "Classicisme · 1756–1791",
    color: "#0F6E56",
    bg: "#E1F5EE",
    border: "#A8DFD0",
    description:
      "L'élégance symétrique de la forme sonate. La cadence parfaite I–II⁶–V7–I ponctue le discours avec la clarté d'une virgule musicale. La mélodie prime, l'harmonie l'accompagne sans l'écraser.",
    techniques: ["Cadence parfaite I–II⁶–V7–I", "Antécédent / conséquent", "Économie harmonique"],
    reference: "W.A. Mozart",
    referenceWork: "Sonate K.331 · Symphonie n°40",
    harmonicSignature: "I – II⁶ – V7 – I · Symétrie 4+4 mesures",
    voicings: [
      // I (C)
      ["C:3", "E:3", "G:3", "C:4"],
      // II6 (Dm/F — 1st inversion)
      ["F:2", "D:3", "F:3", "A:3"],
      // V7 (G7)
      ["G:2", "B:2", "D:3", "F:3"],
      // I (C)
      ["C:3", "E:3", "G:3", "C:4"],
    ],
    chordNames: ["I – Do M", "II⁶ – Ré m/Fa", "V7 – Sol 7", "I – Do M"],
  },

  {
    id: "chopin",
    name: "Chopin",
    emoji: "🌹",
    period: "Romantisme · 1810–1849",
    color: "#185FA5",
    bg: "#E6F1FB",
    border: "#A8C7EE",
    description:
      "Le chromatisme au service de l'expressivité pianistique. La pédale de tonique maintient l'ancrage pendant que les harmonies glissent vers les bémols. Le ♭VI crée une couleur mélancolique immédiate.",
    techniques: ["Chromatisme expressif", "Emprunt au ♭VI et ♭III", "Pédale de basse tenue"],
    reference: "F. Chopin",
    referenceWork: "Nocturne op.9 n°2 · Ballade n°1",
    harmonicSignature: "I – ♭VI – ♭III – V7 · Glissement par tierces bémolisées",
    voicings: [
      // IMaj7 (C major 7)
      ["C:3", "E:3", "G:3", "B:3"],
      // ♭VI Maj (Ab major)
      ["Ab:2", "Eb:3", "Ab:3", "C:4"],
      // ♭III Maj (Eb major)
      ["Eb:2", "G:2", "Bb:2", "G:3"],
      // V7 (G7)
      ["G:2", "F:3", "B:3", "D:4"],
    ],
    chordNames: ["I Maj7 – Do M7", "♭VI – La♭ M", "♭III – Mi♭ M", "V7 – Sol 7"],
  },

  {
    id: "debussy",
    name: "Debussy",
    emoji: "🎨",
    period: "Impressionnisme · 1862–1918",
    color: "#1A6B8A",
    bg: "#EAF3F8",
    border: "#9FCCDF",
    description:
      "Les accords en blocs parallèles créent des atmosphères, non des tensions. La résolution fonctionnelle disparaît : chaque accord est une couleur autonome. La gamme par tons et les neuvièmes parallèles flottent sans destination.",
    techniques: ["Neuvièmes parallèles sans résolution", "Mouvement parallèle interdit en classique", "Gamme par tons (aucun demi-ton)"],
    reference: "C. Debussy",
    referenceWork: "Préludes pour piano · La Mer",
    harmonicSignature: "Accords de 9e parallèles · Pas de résolution fonctionnelle",
    voicings: [
      // CMaj9
      ["C:3", "E:3", "G:3", "B:3", "D:4"],
      // AbMaj9 (parallel motion, a major 3rd down)
      ["Ab:2", "C:3", "Eb:3", "G:3", "Bb:3"],
      // FMaj9
      ["F:2", "A:2", "C:3", "E:3", "G:3"],
      // DbMaj9
      ["Db:3", "F:3", "Ab:3", "C:4", "Eb:4"],
    ],
    chordNames: ["Do Maj9", "La♭ Maj9", "Fa Maj9", "Ré♭ Maj9"],
  },

  {
    id: "jazz",
    name: "Jazz · Bill Evans",
    emoji: "🎷",
    period: "Jazz · 1950–présent",
    color: "#7B4A00",
    bg: "#FEF0D9",
    border: "#F5C77E",
    description:
      "Le II–V–I est la colonne vertébrale du jazz. Les extensions 9e, 11e, 13e transforment de simples triades en palettes de couleurs. Bill Evans ajoute la voix intérieure et l'ambiguïté tonale au service de l'émotion.",
    techniques: ["IIm9 – V13 – IMaj9", "Voicings ouverts (sans quinte)", "Extensions et tensions disponibles"],
    reference: "Bill Evans",
    referenceWork: "Peace Piece · Waltz for Debby",
    harmonicSignature: "IIm9 – V13 – IMaj9 · Logique II–V–I avec extensions",
    voicings: [
      // Dm9 (shell voicing: root, b7, 9, 11)
      ["D:3", "F:3", "A:3", "C:4", "E:4"],
      // G13 (root, b7, 3, 13)
      ["G:2", "F:3", "B:3", "E:4"],
      // CMaj9 (root, 3, 7, 9)
      ["C:3", "E:3", "B:3", "D:4"],
      // CMaj9 alt voicing (more open)
      ["C:3", "G:3", "B:3", "E:4"],
    ],
    chordNames: ["IIm9 – Ré m9", "V13 – Sol 13", "IMaj9 – Do Maj9", "IMaj9 – voicing alt."],
  },

  {
    id: "beatles",
    name: "Beatles / Rock",
    emoji: "🎸",
    period: "Rock · 1960–présent",
    color: "#CC2200",
    bg: "#FEEEEA",
    border: "#F5B5AA",
    description:
      "L'emprunt mixolydien I–♭VII–IV–I amène la triade de Si♭ dans un contexte de Do majeur — une note étrangère à la gamme, mais naturelle à l'oreille pop. Pas de sensible, pas de tension dominante : juste une couleur ouverte et affirmée.",
    techniques: ["Mode mixolydien (♭VII naturel)", "Triades simples, impact maximal", "Absence de sensible (pas de B naturel au V)"],
    reference: "The Beatles",
    referenceWork: "Hey Jude · Let It Be · Norwegian Wood",
    harmonicSignature: "I – ♭VII – IV – I · Emprunt mixolydien",
    voicings: [
      // C major
      ["C:3", "G:3", "C:4", "E:4"],
      // Bb major (♭VII)
      ["Bb:2", "F:3", "Bb:3", "D:4"],
      // F major (IV)
      ["F:2", "C:3", "F:3", "A:3"],
      // C major
      ["C:3", "G:3", "C:4", "E:4"],
    ],
    chordNames: ["I – Do M", "♭VII – Si♭ M", "IV – Fa M", "I – Do M"],
  },

  {
    id: "rachmaninov",
    name: "Rachmaninov",
    emoji: "🌊",
    period: "Post-Romantisme · 1873–1943",
    color: "#1a3a6c",
    bg: "#E8EEF8",
    border: "#A8BCE0",
    description:
      "La densité harmonique comme expression de l'émotion slave. Les progressions par tierces (I–♭VI–IV–V) créent un mouvement de basse chromatique descendant. La texture est épaisse, lyrique, orchestrale — même au piano.",
    techniques: ["Progression par tierces", "Basse chromatique descendante", "Texture dense et orchestrale"],
    reference: "S. Rachmaninov",
    referenceWork: "Concerto n°2 · Vocalise · Rhapsodie Paganini",
    harmonicSignature: "I – ♭VI – IV – V · Progressions par tierces, densité harmonique",
    voicings: [
      // C major (full, orchestral)
      ["C:2", "G:2", "E:3", "G:3", "C:4"],
      // Ab major (♭VI)
      ["Ab:2", "Eb:3", "Ab:3", "C:4", "Eb:4"],
      // F minor (IV in C minor tonality)
      ["F:2", "C:3", "F:3", "Ab:3", "C:4"],
      // G7 (V, full)
      ["G:2", "D:3", "G:3", "B:3", "F:4"],
    ],
    chordNames: ["I – Do M (plein)", "♭VI – La♭ M", "IV – Fa m", "V7 – Sol 7"],
  },

  {
    id: "bossa",
    name: "Bossa Nova · Jobim",
    emoji: "🌴",
    period: "Bossa Nova · 1958–présent",
    color: "#2D6A4F",
    bg: "#E5F3EE",
    border: "#8ECFB7",
    description:
      "L'élégance syncopée brésilienne allie triades enrichies et accords altérés. Le V7♯9 avec quinte diminuée crée une tension chromatique irrésistible. Le I6/9 final suspend la résolution dans une couleur ouverte et ensoleillée.",
    techniques: ["IMaj9 – II7♭5 – V7♯9 – I6/9", "Altérations jazz (♭5, ♯9)", "Voicings compacts à la guitare"],
    reference: "A.C. Jobim",
    referenceWork: "Garota de Ipanema · Corcovado · Wave",
    harmonicSignature: "IMaj9 – II7♭5 – V7♯9 – I6/9 · Syncopation et accords altérés",
    voicings: [
      // CMaj9 (shell)
      ["C:3", "B:3", "D:4", "G:4"],
      // D7b5 (Lydian dominant sub)
      ["D:3", "C:4", "F#:4", "Ab:4"],
      // G7#9 (altered dominant)
      ["G:2", "F:3", "B:3", "D#:4"],
      // C6/9
      ["C:3", "E:3", "A:3", "D:4"],
    ],
    chordNames: ["IMaj9 – Do Maj9", "II7♭5 – Ré 7♭5", "V7♯9 – Sol 7♯9", "I6/9 – Do 6/9"],
  },

  {
    id: "film",
    name: "Musique de Film",
    emoji: "🎬",
    period: "Cinéma · 1970–présent",
    color: "#5C2D91",
    bg: "#F0E8F8",
    border: "#C9A8E8",
    description:
      "Les médiantes chromatiques (relations de tierces entre accords sans notes communes) créent un sentiment de grandeur ou de mystère. Im–♭VI–♭III–♭VII parcourt les bémols du mode éolien avec une puissance orchestrale.",
    techniques: ["Médiantes chromatiques (tierces sans notes communes)", "Mode éolien naturel Im–♭VI–♭III–♭VII", "Ostinato de basse + nappes de cordes"],
    reference: "H. Zimmer · J. Williams",
    referenceWork: "Interstellar · Star Wars · Gladiator",
    harmonicSignature: "Im – ♭VI – ♭III – ♭VII · Médiantes chromatiques, puissance orchestrale",
    voicings: [
      // Cm (C minor, open)
      ["C:2", "G:2", "C:3", "Eb:3", "G:3"],
      // Ab major (♭VI)
      ["Ab:2", "Eb:3", "Ab:3", "C:4"],
      // Eb major (♭III)
      ["Eb:2", "Bb:2", "Eb:3", "G:3", "Bb:3"],
      // Bb major (♭VII)
      ["Bb:2", "F:3", "Bb:3", "D:4"],
    ],
    chordNames: ["Im – Do m", "♭VI – La♭ M", "♭III – Mi♭ M", "♭VII – Si♭ M"],
  },

  {
    id: "gospel",
    name: "Gospel · R&B",
    emoji: "✝️",
    period: "Gospel & Soul · 1930–présent",
    color: "#6B1A1A",
    bg: "#FAE8E8",
    border: "#E8A8A8",
    description:
      "La cadence plagale IV–I (Amen) et les mouvements de basse conjoints définissent l'esthétique gospel. Le I9 dominant (avec septième mineure) glisse vers le IV par mouvement de basse d'un ton. Le IVdim7 chromatique précède la résolution finale.",
    techniques: ["Cadence plagale IV–I (« Amen »)", "I9 dominant : mouvement de basse conjoint", "Accord diminué de passage (IVdim7)"],
    reference: "Mahalia Jackson · Aretha Franklin",
    referenceWork: "Oh Happy Day · Amazing Grace (arr. R&B)",
    harmonicSignature: "I – I9 – IV – IVdim7 · Cadences plagales et basse chromatique",
    voicings: [
      // C major
      ["C:3", "E:3", "G:3", "C:4"],
      // C9 dominant (C7add9 → walk to F)
      ["C:2", "Bb:2", "E:3", "G:3", "D:4"],
      // F major (IV)
      ["F:2", "A:2", "C:3", "F:3", "A:3"],
      // F#dim7 (chromatic passing chord)
      ["F#:2", "A:2", "C:3", "Eb:3"],
    ],
    chordNames: ["I – Do M", "I9 – Do 9 dom.", "IV – Fa M", "IVdim7 – Fa♯ dim7"],
  },

  {
    id: "renaissance",
    name: "Renaissance · Palestrina",
    emoji: "⛪",
    period: "Renaissance · 1525–1594",
    color: "#5C4A1A",
    bg: "#FAF5E8",
    border: "#DDD0A0",
    description:
      "La polyphonie vocale pure. Aucune sensible artificielle : le mode dorien conserve le Si♭ naturel au Ve degré. Les mouvements de voix sont contraires ou obliques, jamais parallèles en quintes. L'harmonie n'est que le résultat du contrepoint.",
    techniques: ["Mode dorien (Ré–Ré, sans sensible)", "Triades pures sans septièmes", "Mouvement contraire systématique"],
    reference: "G.P. da Palestrina",
    referenceWork: "Missa Papae Marcelli (1567)",
    harmonicSignature: "Im – IV – V (sans sensible) – Im · Mode dorien, pures triades",
    voicings: [
      // Dm (I dorian)
      ["D:3", "F:3", "A:3", "D:4"],
      // G major (IV — natural B in dorian)
      ["G:2", "D:3", "G:3", "B:3"],
      // Am (V — no leading tone: A-C-E, no G#)
      ["A:2", "E:3", "A:3", "C:4"],
      // Dm (I)
      ["D:3", "A:3", "D:4", "F:4"],
    ],
    chordNames: ["Im – Ré m", "IV – Sol M", "Vm – La m (sans sensible)", "Im – Ré m"],
  },
];
