import type { CoursConservatoireData } from "./conservatoireData";
import {
  HAYDN94_MESURES_1_148,
  HAYDN94_ANALYSE,
  HAYDN94_ANALYSE_NARRATIVE,
} from "./conservatoire-haydn94";

export const CONSERVATOIRE_DATA_17: CoursConservatoireData = {
  intuition: "Une phrase de huit mesures, un arpège nu, une alternance tonique-dominante d'école — et pourtant Haydn en tire un coup de théâtre. La forme la plus simple peut porter la surprise la plus efficace, à condition de savoir exactement où placer l'accent.",
  reference: {
    badge: "Haydn · Symphonie n°94 « La Surprise »",
    citation: "That will make the ladies jump.",
    auteur: "Joseph Haydn, à propos du coup de la mesure 16 (rapporté par ses biographes)",
  },
  voix: [
    "Une phrase classique se découpe en motif, développement et cadence — le thème de la Surprise expose cette anatomie à l'état le plus nu possible : huit mesures, un seul arpège, une seule polarité (tonique-dominante).",
    "La reprise d'une phrase peut rejouer note pour note le même matériau tout en changeant complètement son effet — ici, simplement en changeant la dynamique (p puis pp puis, soudain, ff).",
    "Une forme binaire (thème = deux volets A/B, chaque variation aussi) organise la phrase à une échelle plus large : la surprise elle-même tombe exactement au moment où la reprise du volet A allait se refermer sur elle-même.",
  ],
  repertoire: {
    titre: "Symphonie n°94 « La Surprise », 2e mouvement (Andante)",
    compositeur: "Joseph Haydn",
    notes: ["C4", "E4", "G4", "E4", "F4", "D4", "G4", "B3"],
    musicxml: HAYDN94_MESURES_1_148,
    analyse: HAYDN94_ANALYSE,
    analyseNarrative: HAYDN94_ANALYSE_NARRATIVE,
  },
  pieges: [
    {
      erreur: "Chercher une harmonie étrange ou chromatique pour expliquer l'effet de surprise de la mesure 16",
      correction: "L'accord est un simple V, exactement celui qu'appelait la demi-cadence du thème — l'effet ne loge pas dans l'accord mais dans sa dynamique (ff après deux phrases p/pp) et son placement sur le temps faible. Une phrase peut surprendre sans qu'aucune règle harmonique ne soit transgressée.",
    },
    {
      erreur: "Croire qu'un thème aussi simple (un arpège, une alternance I-V) est un défaut d'écriture",
      correction: "La nudité du thème est une stratégie, pas une faiblesse : il faut un matériau minimal pour que les quatre variations aient de la place pour l'habiller, et pour que la surprise détonne sur un fond d'innocence totale.",
    },
    {
      erreur: "Analyser chaque variation comme une pièce harmoniquement indépendante",
      correction: "Sauf la variation II (le minore, seule vraie excursion hors de la tonique), toutes les variations gardent la MÊME charpente harmonique que le thème — seule la texture (contrechant, octaves martelées, notes répétées, fanfare) change d'une variation à l'autre.",
    },
  ],
  resume: [
    "Une phrase classique s'articule en motif + développement + cadence — le thème de la Surprise (Haydn, 1791) l'expose à l'état le plus dépouillé : arpège nu, alternance I-V, demi-cadences aux mesures 4 et 8.",
    "La forme binaire à reprises organise thème ET variations à une échelle plus large que la simple phrase : chaque volet est répété, et c'est précisément sur une reprise (pp) que Haydn place son coup de théâtre (m.16, ff).",
    "L'humour est une catégorie harmonique à part entière : la mesure 16 ne transgresse aucune règle (un simple V), elle change seulement le statut — dynamique, orchestration — de cet accord. Rien ne prouve mieux l'existence d'une norme que la possibilité d'en rire.",
  ],
};
