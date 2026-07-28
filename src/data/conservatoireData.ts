import { BWV846_MESURES_1_8, BWV846_ANALYSE, BWV846_ANALYSE_NARRATIVE, type MesureAnalyse, type AnalyseNarrative } from "./conservatoire-bwv846";
import { PATHETIQUE2_MESURES_1_8, PATHETIQUE2_ANALYSE, PATHETIQUE2_ANALYSE_NARRATIVE } from "./conservatoire-pathetique2";
import { K550_MESURES_1_9, K550_ANALYSE, K550_ANALYSE_NARRATIVE } from "./conservatoire-k550";
import { BWV227_MESURES_1_8, BWV227_ANALYSE, BWV227_ANALYSE_NARRATIVE } from "./conservatoire-bwv227";
import { CHOPIN_OP9_N2_MESURES_1_9, CHOPIN_OP9_N2_ANALYSE, CHOPIN_OP9_N2_ANALYSE_NARRATIVE } from "./conservatoire-chopin-op9n2";
import { SCHUBERT_D845_MESURES_1_10, SCHUBERT_D845_ANALYSE, SCHUBERT_D845_ANALYSE_NARRATIVE } from "./conservatoire-schubert-d845";
import { BRAHMS_OP118N2_MESURES_0_8, BRAHMS_OP118N2_ANALYSE, BRAHMS_OP118N2_ANALYSE_NARRATIVE } from "./conservatoire-brahms-op118n2";
import { BEETHOVEN_OP27N2_MESURES_1_9, BEETHOVEN_OP27N2_ANALYSE, BEETHOVEN_OP27N2_ANALYSE_NARRATIVE } from "./conservatoire-beethoven-op27n2";
import { CHACONNE_BWV1004_MESURES_0_8, CHACONNE_BWV1004_ANALYSE, CHACONNE_BWV1004_ANALYSE_NARRATIVE } from "./conservatoire-chaconne-bwv1004";
import { SO_WHAT_MESURES_1_9, SO_WHAT_ANALYSE, SO_WHAT_ANALYSE_NARRATIVE } from "./conservatoire-so-what";
import { ALL_THE_THINGS_MESURES_1_8, ALL_THE_THINGS_ANALYSE, ALL_THE_THINGS_ANALYSE_NARRATIVE } from "./conservatoire-all-the-things";
import { SATIN_DOLL_MESURES_1_8, SATIN_DOLL_ANALYSE, SATIN_DOLL_ANALYSE_NARRATIVE } from "./conservatoire-satin-doll";
import { BWV772_MESURES_1_8, BWV772_ANALYSE, BWV772_ANALYSE_NARRATIVE } from "./conservatoire-bwv772";
import { GYMNOPEDIE_MESURES_1_9, GYMNOPEDIE_ANALYSE, GYMNOPEDIE_ANALYSE_NARRATIVE } from "./conservatoire-gymnopedie";
import { AUTUMN_LEAVES_MESURES_1_10, AUTUMN_LEAVES_ANALYSE, AUTUMN_LEAVES_ANALYSE_NARRATIVE } from "./conservatoire-autumn-leaves";
import { MY_FUNNY_VALENTINE_MESURES_1_9, MY_FUNNY_VALENTINE_ANALYSE, MY_FUNNY_VALENTINE_ANALYSE_NARRATIVE } from "./conservatoire-my-funny-valentine";

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
  /** Analyse harmonique narrative (prose), affichée sous la partition — pas encore
   *  disponible pour tous les extraits, cf. `analyseNarrative` de chaque fichier. */
  analyseNarrative?: AnalyseNarrative;
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

export const CONSERVATOIRE_DATA: Record<`cours${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16}`, CoursConservatoireData> = {
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
      analyseNarrative: BWV846_ANALYSE_NARRATIVE,
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
      analyseNarrative: PATHETIQUE2_ANALYSE_NARRATIVE,
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
      musicxml: K550_MESURES_1_9,
      analyse: K550_ANALYSE,
      analyseNarrative: K550_ANALYSE_NARRATIVE,
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
      musicxml: BWV227_MESURES_1_8,
      analyse: BWV227_ANALYSE,
      analyseNarrative: BWV227_ANALYSE_NARRATIVE,
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
      musicxml: SCHUBERT_D845_MESURES_1_10,
      analyse: SCHUBERT_D845_ANALYSE,
      analyseNarrative: SCHUBERT_D845_ANALYSE_NARRATIVE,
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
      musicxml: CHOPIN_OP9_N2_MESURES_1_9,
      analyse: CHOPIN_OP9_N2_ANALYSE,
      analyseNarrative: CHOPIN_OP9_N2_ANALYSE_NARRATIVE,
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
      musicxml: BRAHMS_OP118N2_MESURES_0_8,
      analyse: BRAHMS_OP118N2_ANALYSE,
      analyseNarrative: BRAHMS_OP118N2_ANALYSE_NARRATIVE,
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
      musicxml: BEETHOVEN_OP27N2_MESURES_1_9,
      analyse: BEETHOVEN_OP27N2_ANALYSE,
      analyseNarrative: BEETHOVEN_OP27N2_ANALYSE_NARRATIVE,
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
      musicxml: CHACONNE_BWV1004_MESURES_0_8,
      analyse: CHACONNE_BWV1004_ANALYSE,
      analyseNarrative: CHACONNE_BWV1004_ANALYSE_NARRATIVE,
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
  cours10: {
    intuition:
      "Un mode, c'est la même gamme majeure vue depuis un autre degré — le paysage ne change pas, seul le point d'écoute change, et avec lui la couleur entière de la musique.",
    reference: {
      badge: "Russell · Lydian Chromatic Concept",
      citation:
        "Chaque mode porte sa propre gravité tonale, indépendante de toute fonction harmonique classique.",
      auteur: "George Russell, 1953",
    },
    voix: [
      "Le dorien (2e degré) est le mode mineur le plus lumineux : sa 6te majeure le distingue de la gamme mineure naturelle",
      "Une pièce modale peut rester sur un seul accord des mesures durant — la couleur remplace le mouvement harmonique",
      "Sans dominante ni cadence, c'est le degré caractéristique du mode (ici la 6te du dorien) qui porte toute son identité",
    ],
    repertoire: {
      titre: "So What",
      compositeur: "Miles Davis",
      notes: ["D3", "A3", "B3", "C4", "D4", "G4", "B4", "E4"],
      musicxml: SO_WHAT_MESURES_1_9,
      analyse: SO_WHAT_ANALYSE,
      analyseNarrative: SO_WHAT_ANALYSE_NARRATIVE,
    },
    pieges: [
      {
        erreur: "Chercher une cadence V–I dans une pièce modale comme « So What »",
        correction:
          "La musique modale ne cadence pas : elle colore un centre tonal fixe, sans jamais s'en éloigner ni y revenir par une dominante",
      },
    ],
    resume: [
      "7 modes = 7 rotations de la même gamme, chacun avec sa propre tonique",
      "Le dorien colore le mineur d'une 6te majeure : le mode le plus utilisé en jazz modal",
      "« So What » (Miles Davis, 1959) : un vamp en ré dorien, sans harmonie fonctionnelle",
    ],
  },
  cours11: {
    intuition:
      "Une extension, c'est une couleur qu'on empile au-delà de la 7e — la 9e, la 11e, la 13e ne changent pas la fonction de l'accord, elles enrichissent son timbre sans le trahir.",
    reference: {
      badge: "Nettles & Graf · The Chord Scale Theory & Jazz Harmony",
      citation:
        "Chaque tension disponible colore l'accord sans en changer la fonction fondamentale, à condition de respecter les notes évitées de la gamme sur laquelle il repose.",
      auteur: "Barrie Nettles & Richard Graf, 1997",
    },
    voix: [
      "La 9e (majeure), la 11e (juste ou augmentée) et la 13e (majeure) sont les tensions les plus consonantes des accords de septième",
      "Une altération (b9, #9, #11, b13) colore fortement un accord de dominante sans changer sa fonction",
      "Sur un accord mineur 7, la 9e est presque toujours disponible ; la 11e naturelle heurte la tierce majeure d'un accord majeur",
    ],
    repertoire: {
      titre: "All the Things You Are",
      compositeur: "Jerome Kern",
      notes: ["G#3", "C#4", "F3", "B3", "E4", "F3", "B3", "E4"],
      musicxml: ALL_THE_THINGS_MESURES_1_8,
      analyse: ALL_THE_THINGS_ANALYSE,
      analyseNarrative: ALL_THE_THINGS_ANALYSE_NARRATIVE,
    },
    pieges: [
      {
        erreur: "Ajouter la 11e naturelle sur un accord de dominante ou majeur (elle heurte la tierce)",
        correction: "Préférer la 11e augmentée (#11) sur ces accords, ou omettre l'extension",
      },
    ],
    resume: [
      "9e = 2e degré à l'octave supérieure, 11e = 4e, 13e = 6e",
      "#9 et b9 sont des tensions typiques de l'accord de dominante altéré",
      "« All the Things You Are » (Kern/Hammerstein) : un vamp d'introduction tout en accords de dominante altérés (#9)",
    ],
  },
  cours12: {
    intuition:
      "Deux accords de dominante situés à un triton de distance partagent exactement le même triton — leur tension est identique, seule la direction de résolution de la basse change.",
    reference: {
      badge: "Mulholland & Hojnacki · The Berklee Book of Jazz Harmony",
      citation:
        "Tout accord de dominante peut être remplacé par celui construit un triton plus loin : les deux partagent la même tierce et la même septième, simplement échangées.",
      auteur: "Joe Mulholland & Tom Hojnacki, 2013",
    },
    voix: [
      "V7 et bII7 (subV7) partagent le même triton (tierce et 7e échangées) — la tension de résolution est identique",
      "La substitution tritonique crée un mouvement de basse chromatique descendant vers l'accord de résolution",
      "Elle est particulièrement efficace juste avant un accord de tonique",
    ],
    repertoire: {
      titre: "Satin Doll",
      compositeur: "Duke Ellington",
      notes: ["D4", "G3", "E4", "A3", "A3", "D3", "G#3", "C#3"],
      musicxml: SATIN_DOLL_MESURES_1_8,
      analyse: SATIN_DOLL_ANALYSE,
      analyseNarrative: SATIN_DOLL_ANALYSE_NARRATIVE,
    },
    pieges: [
      {
        erreur: "Utiliser la substitution tritonique sur un accord qui n'est pas un vrai V7 fonctionnel",
        correction: "Réserver subV7 aux dominantes (V7 ou dominantes secondaires), jamais à un accord de tonique ou de sous-dominante",
      },
    ],
    resume: [
      "subV7 = accord de dominante construit un triton au-dessus (ou en-dessous) de V7",
      "Les deux accords partagent tierce et 7e (juste échangées) : même tension, résolution différente",
      "« Satin Doll » (Ellington) : Réb7 remplace Sol7 (subV7) juste avant le retour à Do majeur",
    ],
  },
  cours13: {
    intuition:
      "Le contrepoint, c'est écrire une deuxième voix qui a sa propre vie mélodique tout en s'accordant avec la première à chaque instant — deux lignes qui se répondent, jamais une simple harmonie doublée.",
    reference: {
      badge: "Fux · Gradus ad Parnassum",
      citation:
        "Le contrepoint est l'art de combiner des voix ou des parties de telle sorte qu'elles s'accordent entre elles selon certaines lois fixes.",
      auteur: "Johann Joseph Fux, 1725",
    },
    voix: [
      "Note contre note (1ère espèce) : les consonances parfaites (8ve, 5te) s'abordent de préférence par mouvement contraire ou oblique",
      "Le mouvement contraire entre les deux voix est le plus sûr moyen d'éviter quintes et octaves parallèles",
      "Chaque voix garde son indépendance mélodique — pas de croisement ni d'unisson prolongé",
    ],
    repertoire: {
      titre: "Invention n°1 BWV 772",
      compositeur: "J.S. Bach",
      notes: ["C4", "D4", "E4", "F4", "D4", "E4", "C4", "G3"],
      musicxml: BWV772_MESURES_1_8,
      analyse: BWV772_ANALYSE,
      analyseNarrative: BWV772_ANALYSE_NARRATIVE,
    },
    pieges: [
      {
        erreur: "Faire progresser les deux voix par mouvement direct vers une quinte ou une octave",
        correction: "Préférer le mouvement contraire ou oblique pour aborder les consonances parfaites",
      },
    ],
    resume: [
      "Contrepoint = deux voix mélodiquement indépendantes qui s'accordent verticalement",
      "5 espèces de Fux : note contre note, 2 contre 1, syncopes/retards, fleuretis, contrepoint fleuri",
      "Invention n°1 BWV 772 (Bach) : sujet et réponse échangés entre les deux mains, module vers la dominante",
    ],
  },
  cours14: {
    intuition:
      "L'harmonie modale n'installe pas de tension à résoudre — elle pose une couleur et la maintient, en évitant justement le mouvement vers la dominante qui romprait le charme.",
    reference: {
      badge: "Messiaen · Technique de mon langage musical",
      citation:
        "Le charme des impossibilités réside surtout dans cette impossibilité même de sortir du mode sans revenir en arrière : c'est ce qui donne à ces harmonies leur atmosphère si particulière.",
      auteur: "Olivier Messiaen, 1944",
    },
    voix: [
      "L'harmonie modale oscille autour de la tonique par couleur, pas par tension à résoudre",
      "Éviter V7→I : cet enchaînement introduit la sensible absente du mode et brise l'atmosphère modale",
      "Un accord « caractéristique » (contenant la note distinctive du mode) suffit à installer la couleur",
    ],
    repertoire: {
      titre: "Première Gymnopédie",
      compositeur: "Erik Satie",
      notes: ["F#5", "A5", "G5", "F#5", "C#5", "B4", "C#5", "D5"],
      musicxml: GYMNOPEDIE_MESURES_1_9,
      analyse: GYMNOPEDIE_ANALYSE,
      analyseNarrative: GYMNOPEDIE_ANALYSE_NARRATIVE,
    },
    pieges: [
      {
        erreur: "Chercher une dominante ou une résolution tonale dans une progression qui n'en a pas",
        correction: "Reconnaître une oscillation coloriste (ex. IV-I sans jamais V) et l'analyser comme telle, pas comme une tonalité « incomplète »",
      },
    ],
    resume: [
      "Harmonie modale = couleur maintenue, pas tension puis résolution (contrairement à l'harmonie tonale)",
      "Le mouvement V7→I est évité : il introduirait la sensible et romprait l'atmosphère du mode",
      "« Première Gymnopédie » (Satie) : IVmaj7-Imaj7 en boucle sur 9 mesures, jamais de dominante",
    ],
  },
  cours15: {
    intuition:
      "Le II-V-I n'est pas une formule figée — c'est un squelette que le jazz habille d'extensions, de substitutions et de dominantes secondaires, chaîne après chaîne, sans jamais perdre le fil qui ramène à la tonique.",
    reference: {
      badge: "Aebersold · Jazz Handbook",
      citation:
        "Le musicien de jazz ne joue pas des accords : il joue des lignes qui racontent l'histoire des accords, en anticipant toujours celui qui vient.",
      auteur: "Jamey Aebersold, 1967",
    },
    voix: [
      "Une dominante secondaire (V7/X) tonicise brièvement le degré X avant d'y résoudre",
      "Le substitut tritonique (subV7) remplace une dominante par l'accord de 7e à un triton de distance — même tension, basse qui descend par demi-ton",
      "Un enchaînement de dominantes secondaires forme une chaîne descendante par quintes, l'ossature de nombreux standards",
    ],
    repertoire: {
      titre: "Autumn Leaves",
      compositeur: "Joseph Kosma",
      notes: ["G4", "A4", "Bb4", "Eb5", "C#4", "A3", "D4", "G4"],
      musicxml: AUTUMN_LEAVES_MESURES_1_10,
      analyse: AUTUMN_LEAVES_ANALYSE,
      analyseNarrative: AUTUMN_LEAVES_ANALYSE_NARRATIVE,
    },
    pieges: [
      {
        erreur: "Analyser chaque accord isolément sans repérer la dominante secondaire qui le précède",
        correction: "Toujours vérifier si un accord dominant résout un demi-ton ou une quinte plus loin vers un degré autre que la tonique — c'est une dominante secondaire (V7/X)",
      },
    ],
    resume: [
      "Une chaîne de dominantes secondaires (V7/III, subV7/VI, V7/V...) tonicise brièvement chaque degré avant la résolution finale",
      "Le substitut tritonique remplace une dominante par son triton : même tension (3ce/7e échangées), basse chromatique",
      "« Autumn Leaves » (Kosma) : marche descendante iv-VII-III-VI-ii°/V-V-i, puis turnaround V7/IV qui referme la boucle",
    ],
  },
  cours16: {
    intuition:
      "Réharmoniser, ce n'est pas remplacer une mélodie — c'est lui trouver de nouveaux compagnons de voyage : chaque accord substitué doit encore porter la note mélodique sans la trahir.",
    reference: {
      badge: "Levine · The Jazz Piano Book",
      citation:
        "Une bonne réharmonisation ne change pas ce que joue la mélodie — elle change ce qu'elle raconte.",
      auteur: "Mark Levine, 1989",
    },
    voix: [
      "Avant de valider un accord substitué, vérifier que chaque note mélodique reste 1, 3, 5, 7 ou une extension de ce nouvel accord",
      "Une dominante secondaire peut remplacer un accord diatonique par son propre V7 (ex. V/IV à la place d'un accord d'emprunt)",
      "Préférer le mouvement conjoint dans les voix internes — une réharmonisation correcte mais heurtée sonne toujours faux",
    ],
    repertoire: {
      titre: "My Funny Valentine",
      compositeur: "Richard Rodgers",
      notes: ["C5", "D5", "Eb5", "F4", "Bb4", "D5", "C5", "D5"],
      musicxml: MY_FUNNY_VALENTINE_MESURES_1_9,
      analyse: MY_FUNNY_VALENTINE_ANALYSE,
      analyseNarrative: MY_FUNNY_VALENTINE_ANALYSE_NARRATIVE,
    },
    pieges: [
      {
        erreur: "Introduire une dominante secondaire dont l'une des extensions contredit une note déjà présente à la mélodie",
        correction: "Toujours confronter la nouvelle couleur d'accord à la note mélodique réelle avant de la valider",
      },
    ],
    resume: [
      "Réharmoniser = remplacer les accords sous une mélodie intacte, en gardant chaque note mélodique compatible avec son nouvel accord",
      "Dominantes secondaires (V/V, V/IV) et substituts tritoniques sont les outils les plus courants",
      "« My Funny Valentine » (Bill Evans) : cadence mineure iiø7-V7alt-i précédée d'une excursion par la sous-dominante (IV9-IV13sus)",
    ],
  },
};
