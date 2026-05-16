/**
 * Bibliothèque de progressions harmoniques — Harmonia.
 * Échantillon de 10 progressions fondamentales.
 * Les voicings "Note:octave" sont compatibles avec PianoPlayer.playVoicingSequence().
 */

export interface Progression {
  id: string;
  nom: string;
  style: "classique" | "jazz" | "rock" | "modal" | "romantique";
  epoque: "baroque" | "classique" | "romantique" | "moderne" | "contemporain";
  emotion: "joyeux" | "melancolique" | "dramatique" | "mystérieux" | "energique";
  difficulte: 1 | 2 | 3;
  /** Noms d'accords pour l'affichage (ex: "I – Do M") */
  accords: string[];
  /** Voicings "Note:octave" — compatibles PianoPlayer.playVoicingSequence() */
  voicings: string[][];
  /** Degrés en chiffres romains */
  analyse: string[];
  /** Fonctions tonales : T = Tonique, SD = Sous-dominante, D = Dominante */
  fonctions: string[];
  description: string;
  exempleMusical: string;
  compositeur?: string;
}

export const PROGRESSIONS: Progression[] = [
  {
    id: "bach-cadence-parfaite",
    nom: "Cadence parfaite I–IV–V–I",
    style: "classique",
    epoque: "baroque",
    emotion: "energique",
    difficulte: 1,
    accords: ["I – Do M", "IV – Fa M", "V – Sol M", "I – Do M"],
    voicings: [
      ["C:2", "G:3", "E:4", "C:5"],
      ["F:2", "A:3", "F:4", "C:5"],
      ["G:2", "B:3", "D:4", "G:4"],
      ["C:2", "G:3", "E:4", "C:5"],
    ],
    analyse: ["I", "IV", "V", "I"],
    fonctions: ["T", "SD", "D", "T"],
    description: "La progression fondamentale de la musique tonale occidentale. Le mouvement IV→V crée un triton (Si–Fa dans le V7) qui exige une résolution vers le I. Bach en fait le squelette de toute fugue, choral ou sonate. La basse monte par quintes (Do–Fa–Sol–Do), articulant l'espace tonal avec une clarté absolue.",
    exempleMusical: "Chorals BWV 227–438 · Préludes du Clavier bien tempéré",
    compositeur: "J.S. Bach",
  },
  {
    id: "mozart-cadence-italienne",
    nom: "Cadence italienne I–II⁶–V7–I",
    style: "classique",
    epoque: "classique",
    emotion: "joyeux",
    difficulte: 1,
    accords: ["I – Do M", "II⁶ – Ré m/Fa", "V7 – Sol 7", "I – Do M"],
    voicings: [
      ["C:3", "E:3", "G:3", "C:4"],
      ["F:2", "D:3", "F:3", "A:3"],
      ["G:2", "B:2", "D:3", "F:3"],
      ["C:3", "E:3", "G:3", "C:4"],
    ],
    analyse: ["I", "II⁶", "V7", "I"],
    fonctions: ["T", "SD", "D", "T"],
    description: "Mozart raffine la cadence parfaite avec le IIe degré en premier renversement (basse sur Fa). Ce mouvement crée un voice-leading chromatique descendant dans la basse (Mi–Fa–Ré–Do) qui confère à la cadence son élégance symétrique. Le V7 contient le triton Si–Fa, résolu par mouvement contraire vers Do–Mi.",
    exempleMusical: "Sonate pour piano K.331 · Symphonie n°40 en Sol m",
    compositeur: "W.A. Mozart",
  },
  {
    id: "evans-II-V-I",
    nom: "II–V–I (voicings Bill Evans)",
    style: "jazz",
    epoque: "moderne",
    emotion: "melancolique",
    difficulte: 3,
    accords: ["IIm9 – Ré m9", "V13 – Sol 13", "IMaj9 – Do Maj9"],
    voicings: [
      ["D:3", "F:3", "A:3", "C:4", "E:4"],
      ["G:2", "F:3", "B:3", "E:4"],
      ["C:3", "E:3", "B:3", "D:4"],
    ],
    analyse: ["IIm9", "V13", "IMaj9"],
    fonctions: ["SD", "D", "T"],
    description: "La colonne vertébrale du jazz moderne. Evans enrichit chaque accord de 9es et 13es, supprime souvent la quinte (fonctionnellement inutile) et crée un voice-leading de notes guides (La→F→Mi au ténor). La résolution V13→IMaj9 conserve la note Sol comme 5e du Ré m, créant une continuité vocale subtile.",
    exempleMusical: "Waltz for Debby · Peace Piece · My Foolish Heart",
    compositeur: "Bill Evans",
  },
  {
    id: "coltrane-changes",
    nom: "Coltrane Changes — cycle de tierces",
    style: "jazz",
    epoque: "contemporain",
    emotion: "mystérieux",
    difficulte: 3,
    accords: ["IMaj7 – Do Maj7", "♭IIIMaj7 – Mi♭ Maj7", "♭VIMaj7 – La♭ Maj7", "IMaj7 – Do M7"],
    voicings: [
      ["C:3", "E:3", "G:3", "B:3"],
      ["Eb:3", "G:3", "Bb:3", "D:4"],
      ["Ab:2", "C:3", "Eb:3", "G:3"],
      ["C:3", "E:3", "G:3", "B:3"],
    ],
    analyse: ["IMaj7", "♭IIIMaj7", "♭VIMaj7", "IMaj7"],
    fonctions: ["T", "T", "T", "T"],
    description: "Coltrane remplace la progression II–V–I par un cycle de trois toniques séparées de tierces majeures, divisant l'octave en trois parties égales. Do→Mi♭→La♭→Do : chaque accord est à distance de tierce majeure (4 demi-tons) du suivant. Le triton est préservé dans chaque relation (Mi♭–La♭ est un triton), créant une ambiguïté tonale vertigineuse sans résolution fonctionnelle.",
    exempleMusical: "Giant Steps · Countdown · Mr. P.C.",
    compositeur: "John Coltrane",
  },
  {
    id: "axis-I-V-VIm-IV",
    nom: "Axis Progression I–V–VIm–IV",
    style: "rock",
    epoque: "moderne",
    emotion: "joyeux",
    difficulte: 1,
    accords: ["I – Do M", "V – Sol M", "VIm – La m", "IV – Fa M"],
    voicings: [
      ["C:3", "G:3", "C:4", "E:4"],
      ["G:2", "D:3", "G:3", "B:3"],
      ["A:2", "E:3", "A:3", "C:4"],
      ["F:2", "C:3", "F:3", "A:3"],
    ],
    analyse: ["I", "V", "VIm", "IV"],
    fonctions: ["T", "D", "T", "SD"],
    description: "La progression la plus répandue de la pop-rock depuis 1960. Sa polyvalence tient à sa rotabilité : en partant du VIm, elle devient mineure (VIm–IV–I–V), changeant totalement de caractère émotionnel. Toutes les notes restent dans la gamme de Do majeur — aucun emprunt, aucune tension — juste une gravitation naturelle entre quatre degrés fondamentaux.",
    exempleMusical: "Let It Be (Beatles) · Don't Stop Believin' (Journey) · Someone Like You (Adele)",
  },
  {
    id: "rock-mixolydien",
    nom: "Rock mixolydien I–♭VII–IV–I",
    style: "rock",
    epoque: "moderne",
    emotion: "energique",
    difficulte: 1,
    accords: ["I – Do M", "♭VII – Si♭ M", "IV – Fa M", "I – Do M"],
    voicings: [
      ["C:3", "G:3", "C:4", "E:4"],
      ["Bb:2", "F:3", "Bb:3", "D:4"],
      ["F:2", "C:3", "F:3", "A:3"],
      ["C:3", "G:3", "C:4", "E:4"],
    ],
    analyse: ["I", "♭VII", "IV", "I"],
    fonctions: ["T", "SD", "SD", "T"],
    description: "Le son du rock classique. Le ♭VII (Si♭ dans un contexte de Do) est étranger à la gamme majeure mais naturel en mode mixolydien (Do–Ré–Mi–Fa–Sol–La–Si♭). L'absence de sensible (B naturel) supprime toute tension dominante : aucun triton, une ouverture brute et affirmée. Le retour au I n'est pas une résolution tendue mais un geste d'énergie pure.",
    exempleMusical: "Hey Jude (Beatles) · Sweet Home Alabama (Lynyrd Skynyrd) · Born to Run (Springsteen)",
  },
  {
    id: "chopin-glissement-bemols",
    nom: "Glissement romantique I–♭VI–♭III–V7",
    style: "romantique",
    epoque: "romantique",
    emotion: "melancolique",
    difficulte: 2,
    accords: ["IMaj7 – Do Maj7", "♭VI – La♭ M", "♭III – Mi♭ M", "V7 – Sol 7"],
    voicings: [
      ["C:3", "E:3", "G:3", "B:3"],
      ["Ab:2", "Eb:3", "Ab:3", "C:4"],
      ["Eb:2", "G:2", "Bb:2", "G:3"],
      ["G:2", "F:3", "B:3", "D:4"],
    ],
    analyse: ["IMaj7", "♭VIMaj", "♭IIIMaj", "V7"],
    fonctions: ["T", "T", "SD", "D"],
    description: "Chopin emprunte au mode parallèle pour créer une mélancolie raffinée. Le ♭VI (La♭) arrive par glissement chromatique depuis le I (Do→Lab : tierce majeure descendante), puis le ♭III (Mi♭) étend ce mouvement bémolisant. Chaque accord est relié au suivant par une note commune — La♭ reste entre ♭VI et ♭III — avant que le V7 ne réintroduit la tension tonale et exige la résolution finale.",
    exempleMusical: "Nocturne op.9 n°2 · Ballade n°1 en Sol m · Fantaisie-impromptu",
    compositeur: "F. Chopin",
  },
  {
    id: "rachmaninov-progressions-tierces",
    nom: "Progression slave Im–♭VI–IVm–V7",
    style: "romantique",
    epoque: "romantique",
    emotion: "dramatique",
    difficulte: 2,
    accords: ["Im – Do m", "♭VI – La♭ M", "IVm – Fa m", "V7 – Sol 7"],
    voicings: [
      ["C:2", "G:2", "Eb:3", "G:3", "C:4"],
      ["Ab:2", "Eb:3", "Ab:3", "C:4"],
      ["F:2", "C:3", "F:3", "Ab:3"],
      ["G:2", "D:3", "G:3", "B:3", "F:4"],
    ],
    analyse: ["Im", "♭VIMaj", "IVm", "V7"],
    fonctions: ["T", "T", "SD", "D"],
    description: "La grande progression post-romantique slave. La basse descend par tierces (Do–La♭–Fa), créant un mouvement harmonique dense et lyrique caractéristique de l'esthétique russe. Le IVm (Fa mineur, avec La♭) ajoute une sombre nuance napolitaine avant la résolution dominante. La texture à 5 voix simule l'orchestre au piano — tessitures distinctes des cordes, cuivres et bois.",
    exempleMusical: "Concerto pour piano n°2 · Vocalise op.34 n°14 · Rhapsodie sur un thème de Paganini",
    compositeur: "S. Rachmaninov",
  },
  {
    id: "modal-dorien",
    nom: "Boucle dorienne Im–IV–♭VII–Im",
    style: "modal",
    epoque: "moderne",
    emotion: "mystérieux",
    difficulte: 2,
    accords: ["Im – Ré m", "IV – Sol M", "♭VII – Do M", "Im – Ré m"],
    voicings: [
      ["D:3", "F:3", "A:3", "D:4"],
      ["G:2", "D:3", "G:3", "B:3"],
      ["C:3", "G:3", "C:4", "E:4"],
      ["D:3", "F:3", "A:3", "D:4"],
    ],
    analyse: ["Im", "IV", "♭VII", "Im"],
    fonctions: ["T", "SD", "SD", "T"],
    description: "Le mode dorien (Ré–Mi–Fa–Sol–La–Si–Do–Ré) est le mode mineur le plus lumineux : son 6e degré majeur (Si naturel, absent du mineur naturel) lui donne une couleur ouverte et sophistiquée. Le IV est donc majeur (Sol M), ce qui caractérise l'esthétique jazz-modale. Pas de sensible artificielle, pas de résolution tonale : la progression tourne sur elle-même.",
    exempleMusical: "So What (Miles Davis) · Oye Como Va (Santana) · Scarborough Fair (trad.)",
  },
  {
    id: "modal-lydien",
    nom: "Suspension lydienne IMaj7–IIMaj",
    style: "modal",
    epoque: "contemporain",
    emotion: "mystérieux",
    difficulte: 2,
    accords: ["FMaj7 – Fa Maj7", "G M – Sol M", "FMaj7 – Fa Maj7", "G M – Sol M"],
    voicings: [
      ["F:3", "A:3", "C:4", "E:4"],
      ["G:3", "B:3", "D:4", "G:4"],
      ["F:3", "A:3", "C:4", "E:4"],
      ["G:3", "B:3", "D:4", "G:4"],
    ],
    analyse: ["IMaj7", "IIMaj", "IMaj7", "IIMaj"],
    fonctions: ["T", "SD", "T", "SD"],
    description: "Le mode lydien (Fa–Sol–La–Si♮–Do–Ré–Mi) se distingue par sa quarte augmentée (Si♮ au lieu de Si♭). Cette note caractéristique apparaît dans le IIe degré majeur (Sol M, avec Si♮) — impossible en Fa majeur standard qui exigerait Si♭. L'oscillation FMaj7↔Sol M suspend la progression dans un espace flottant, sans tension dominante ni résolution. John Williams exploite ce son pour l'émerveillement et la magie.",
    exempleMusical: "E.T. the Extra-Terrestrial (J. Williams) · The Simpsons theme (D. Elfman) · Superman March",
  },
];
