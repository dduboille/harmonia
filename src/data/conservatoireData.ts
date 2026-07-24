import { BWV846_MESURES_1_8, BWV846_ANALYSE, type MesureAnalyse } from "./conservatoire-bwv846";
import { PATHETIQUE2_MESURES_1_8, PATHETIQUE2_ANALYSE } from "./conservatoire-pathetique2";
import { K550_MESURES_1_4, K550_ANALYSE } from "./conservatoire-k550";

export interface CoursPieceData {
  titre: string;
  compositeur: string;
  notes: string[]; // format "C4", "F#3", "G#5"
  /**
   * Extrait MusicXML complet, gravé (Verovio) et joué en synchronisé si présent —
   * remplace la lecture simplifiée par `notes` pour ce morceau. Optionnel : les
   * morceaux sans transcription complète retombent sur `notes`.
   */
  musicxml?: string;
  /** Analyse mesure par mesure (accord/degré/fonction), affichée sous la partition
   *  quand `musicxml` est présent. */
  analyse?: MesureAnalyse[];
}

export interface CoursConservatoireData {
  intuition: string;
  reference: {
    badge: string;
    citation: string;
    auteur: string;
  };
  voix: string[];
  repertoire: CoursPieceData;
  pieges: Array<{ erreur: string; correction: string }>;
  resume: string[];
}

export const CONSERVATOIRE_DATA: Record<`cours${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}`, CoursConservatoireData> = {
  cours1: {
    intuition:
      "Avant toute théorie, la gamme est une expérience physique — sentir la tension des demi-tons et la résolution vers la tonique.",
    reference: {
      badge: "Dubois · Traité d'Harmonie",
      citation: "La gamme est l'alphabet du musicien ; sans elle, nulle phrase ne peut s'écrire.",
      auteur: "Théodore Dubois, 1901",
    },
    voix: [
      "Les demi-tons diatoniques (mi–fa, si–do) créent les tensions harmoniques fondamentales",
      "Chaque degré possède une fonction : tonique, dominante, sous-dominante",
      "La sensible (VII) monte obligatoirement vers la tonique à la voix de soprano",
    ],
    repertoire: {
      titre: "Prélude en Do majeur BWV 846",
      compositeur: "J.S. Bach",
      notes: ["C4", "E4", "G4", "C5", "E5", "G4", "C5", "E5"],
      musicxml: BWV846_MESURES_1_8,
      analyse: BWV846_ANALYSE,
    },
    pieges: [
      {
        erreur: "Utiliser la gamme mineure naturelle à la dominante",
        correction: "Toujours élever la sensible (VII#) dans le contexte harmonique mineur",
      },
    ],
    resume: [
      "Gamme = 7 degrés, 2 demi-tons diatoniques",
      "Sensible obligatoirement ascendante",
      "Modes grecs dérivés des rotations de la gamme majeure",
    ],
  },
  cours2: {
    intuition:
      "Un accord n'est pas une superposition de notes mais une tension entre elles — comprendre les intervalles, c'est entendre l'harmonie avant de la lire.",
    reference: {
      badge: "Piston · Harmony",
      citation: "Chaque accord a une personnalité déterminée par les intervalles qu'il contient.",
      auteur: "Walter Piston, 1941",
    },
    voix: [
      "L'accord de dominante (V) contient le triton si–fa qui résout sur l'accord de tonique",
      "Les quintes et octaves parallèles entre voix sont interdites",
      "Doubler la fondamentale à l'état fondamental, la tierce en premier renversement",
    ],
    repertoire: {
      titre: "Sonate op.13 'Pathétique' mvt.II",
      compositeur: "L. van Beethoven",
      notes: ["G#4", "C5", "D#5", "G#5", "C5", "D#5", "G#4", "C5"],
      musicxml: PATHETIQUE2_MESURES_1_8,
      analyse: PATHETIQUE2_ANALYSE,
    },
    pieges: [
      {
        erreur: "Doubler la tierce de l'accord de dominante (sensible)",
        correction: "Doubler la fondamentale ou la quinte, jamais la sensible",
      },
    ],
    resume: [
      "Triade = fondamentale + tierce + quinte",
      "Accord parfait majeur : tierce M + quinte J",
      "Renversements : 1er (tierce basse), 2e (quinte basse)",
    ],
  },
  cours3: {
    intuition:
      "La fonction harmonique, c'est le rôle dramaturgique de chaque accord dans le discours musical — tonique repose, dominante tend, sous-dominante prépare.",
    reference: {
      badge: "Schönberg · Harmonielehre",
      citation: "L'harmonie n'est pas une fin en soi, mais un moyen d'expression.",
      auteur: "Arnold Schönberg, 1911",
    },
    voix: [
      "La progression authentique V–I est la cadence par excellence",
      "La cadence plagale IV–I conclut en douceur (amen cadence)",
      "Éviter les mouvements de basse par triton non résolu",
    ],
    repertoire: {
      titre: "Symphonie n°40 KV550, mvt.I",
      compositeur: "W.A. Mozart",
      notes: ["D4", "D#4", "D4", "C4", "A#3", "G3", "A#3", "D4"],
      musicxml: K550_MESURES_1_4,
      analyse: K550_ANALYSE,
    },
    pieges: [
      {
        erreur: "Enchaîner IV–V–IV (retour arrière fonctionnel)",
        correction: "Respecter le sens tonal : T → S → D → T",
      },
    ],
    resume: [
      "Fonctions : Tonique (I, III, VI), Dominante (V, VII), Sous-dominante (II, IV)",
      "Cadence authentique V–I = clôture forte",
      "Le triton dans V7 résout : si→do, fa→mi",
    ],
  },
  cours4: {
    intuition:
      "La cadence est la ponctuation du discours musical — une virgule, un point-virgule, un point final selon son type.",
    reference: {
      badge: "Aldwell & Schachter · Harmony and Voice Leading",
      citation: "Les cadences articulent la forme musicale à tous les niveaux, de la phrase à l'œuvre entière.",
      auteur: "Aldwell & Schachter, 2003",
    },
    voix: [
      "La cadence parfaite (V–I) exige la fondamentale à la basse ET au soprano",
      "La cadence imparfaite (V–I avec tierce au soprano) conclut moins définitivement",
      "La cadence rompue (V–VI) déjoue l'attente — usage expressif",
    ],
    repertoire: {
      titre: "Choral BWV 227 'Jesu, meine Freude'",
      compositeur: "J.S. Bach",
      notes: ["E4", "F#4", "G4", "A4", "B4", "A4", "G4", "F#4", "E4"],
    },
    pieges: [
      {
        erreur: "Placer une cadence rompue en fin de pièce",
        correction: "La cadence rompue relance le discours — réserver la cadence parfaite aux conclusions",
      },
    ],
    resume: [
      "4 cadences : parfaite, imparfaite, demi-cadence (I–V), rompue (V–VI)",
      "Cadence parfaite = accord de tonique en position fondamentale",
      "La cadence structure la forme : période, section, mouvement",
    ],
  },
  cours5: {
    intuition:
      "L'emprunt modal est le clair-obscur de l'harmonie tonale — une note étrangère qui colore sans rompre la tonalité.",
    reference: {
      badge: "Gallon & Truchot · Précis d'harmonie",
      citation: "L'emprunt est une modulation avortée qui enrichit la palette harmonique sans quitter la tonalité.",
      auteur: "Jean Gallon, 1947",
    },
    voix: [
      "L'accord de sixte napolitaine (bII en 1er renversement) prépare la dominante",
      "Les accords de région mineure (bVI, bVII) s'empruntent fréquemment en majeur",
      "Résoudre les altérations chromatiques dans le sens de leur tension",
    ],
    repertoire: {
      titre: "Sonate D.845 mvt.I",
      compositeur: "F. Schubert",
      notes: ["A3", "C4", "E4", "A4", "F4", "A4", "C5", "E5"],
    },
    pieges: [
      {
        erreur: "Emprunter sans résoudre les altérations",
        correction: "Toute note empruntée crée une tension qui doit se résoudre dans les voix concernées",
      },
    ],
    resume: [
      "Emprunt = accord d'une tonalité parallèle ou relative",
      "Sixte napolitaine : bII6 → V → I",
      "Région modale : accords majeurs sur degrés naturellement mineurs",
    ],
  },
  cours6: {
    intuition:
      "Les notes étrangères sont le poivre de l'harmonie — elles créent la dissonance qui rend la consonance désirable.",
    reference: {
      badge: "Piston · Harmony",
      citation:
        "Les notes étrangères sont le poivre de la texture musicale ; utilisées avec discernement, elles ajoutent variété et élan.",
      auteur: "Walter Piston, 1941",
    },
    voix: [
      "Le retard (suspension) se prépare consonante, frappe dissonante, résout descendante",
      "La pédale de tonique ou dominante peut supporter des harmonies étrangères",
      "Les broderies (notes auxiliaires) ne doublent jamais la basse en leur point de dissonance",
    ],
    repertoire: {
      titre: "Nocturne op.9 n°2",
      compositeur: "F. Chopin",
      notes: ["D#4", "G4", "A#4", "D#5", "D5", "C5", "A#4", "G#4", "G4"],
    },
    pieges: [
      {
        erreur: "Résoudre une suspension vers le haut",
        correction: "La suspension résout toujours par mouvement descendant (sauf rares exceptions baroques)",
      },
    ],
    resume: [
      "Notes étrangères : passage, broderie, retard, anticipation, échappée, cambiata",
      "Retard : préparation → dissonance → résolution",
      "Pédale : note tenue sous harmonies changeantes",
    ],
  },
  cours7: {
    intuition:
      "La dominante secondaire est un rayon de soleil dans une autre tonalité — elle tonicise momentanément un degré sans vraiment moduler.",
    reference: {
      badge: "Levine · The Jazz Theory Book",
      citation:
        "Les dominantes secondaires tonicisent temporairement des degrés de la gamme, créant une couleur harmonique sans moduler complètement.",
      auteur: "Mark Levine, 1995",
    },
    voix: [
      "V/V (dominante de la dominante) rehausse la cadence authentique",
      "Chaque degré sauf VII peut être précédé de sa dominante secondaire",
      "Les dominantes secondaires introduisent des altérations chromatiques à résoudre",
    ],
    repertoire: {
      titre: "Intermezzo op.118 n°2",
      compositeur: "J. Brahms",
      notes: ["A4", "C#5", "E5", "A5", "G#5", "F#5", "E5", "D5", "C#5"],
    },
    pieges: [
      {
        erreur: "Appliquer V/IV en majeur (produit un accord de IV mineur inattendu)",
        correction: "Vérifier la qualité de l'accord tonicisé avant d'appliquer la dominante secondaire",
      },
    ],
    resume: [
      "V7/X → X : tonicisation temporaire",
      "Altérations toujours résolues dans le sens chromatique",
      "Fréquents en jazz et musique de la période romantique",
    ],
  },
  cours8: {
    intuition:
      "L'accord pivot est le pont entre deux tonalités — le même accord, deux fonctions, une transition imperceptible.",
    reference: {
      badge: "Aldwell & Schachter · Harmony and Voice Leading",
      citation:
        "L'accord pivot appartient simultanément aux deux tonalités, ce qui rend la modulation fluide et logique.",
      auteur: "Aldwell & Schachter, 2003",
    },
    voix: [
      "Choisir le pivot parmi les accords communs aux deux tonalités",
      "Confirmer la nouvelle tonalité par une cadence authentique après le pivot",
      "La modulation aux tonalités voisines (±1 dièse/bémol) est la plus fluide",
    ],
    repertoire: {
      titre: "Sonate op.27 n°2 'Clair de Lune' mvt.I",
      compositeur: "L. van Beethoven",
      notes: ["C#4", "E4", "G#4", "C#5", "E5", "G#4", "C#5", "E5", "G#5"],
    },
    pieges: [
      {
        erreur: "Utiliser un accord diminué comme pivot (ambiguïté trop grande)",
        correction: "Préférer des accords majeurs ou mineurs comme pivot pour garantir la clarté tonale",
      },
    ],
    resume: [
      "Accord pivot = commun à la tonalité de départ et d'arrivée",
      "Modulations proches : relatives, parallèles, quinte supérieure/inférieure",
      "Toujours confirmer par cadence dans la nouvelle tonalité",
    ],
  },
  cours9: {
    intuition:
      "La marche harmonique est la répétition d'un motif mélodico-harmonique à intervalles réguliers — elle crée une logique interne perceptible même sans connaissance théorique.",
    reference: {
      badge: "Schönberg · Harmonielehre",
      citation:
        "Les marches harmoniques sont l'outil le plus puissant du développement tonal ; elles génèrent à la fois l'attente et la surprise.",
      auteur: "Arnold Schönberg, 1911",
    },
    voix: [
      "La marche harmonique (séquence) se transpose à la même qualité d'intervalle",
      "Les marches tonales maintiennent la tonalité ; les marches réelles la quittent",
      "Les pédaliers (notes communes) fondent les transitions chromatiques",
    ],
    repertoire: {
      titre: "Chaconne BWV 1004",
      compositeur: "J.S. Bach",
      notes: ["D4", "A3", "F4", "D4", "C#4", "A3", "E4", "C#4"],
    },
    pieges: [
      {
        erreur: "Réaliser une marche réelle en conservant toutes les altérations du ton initial",
        correction:
          "La marche réelle transpose exactement les intervalles ; les altérations changent selon le degré",
      },
    ],
    resume: [
      "Marche tonale : transposition dans le même ton (intervalles diatoniques)",
      "Marche réelle : transposition exacte (intervalles chromatiques identiques)",
      "Chromatisme : altérations non diatoniques enrichissant l'harmonie sans moduler",
    ],
  },
};
