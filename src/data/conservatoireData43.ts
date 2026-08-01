import type { CoursConservatoireData } from "./conservatoireData";
import {
  PALESTRINA_AGNUS_MESURES_1_56,
  PALESTRINA_AGNUS_ANALYSE,
  PALESTRINA_AGNUS_ANALYSE_NARRATIVE,
} from "./conservatoire-palestrina-agnus";

export const CONSERVATOIRE_DATA_43: CoursConservatoireData = {
  intuition: "Avant que la dissonance ne devienne un évènement, un drame ou une couleur qu'on habite, elle fut une simple règle de circulation entre les voix — un accident si rare qu'on peut le compter sur les doigts d'une main, en cinquante-six mesures à quatre voix.",
  reference: {
    badge: "Palestrina · Missa Brevis",
    citation: "Le style de Palestrina devint, pour le concile de Trente, le modèle même de la musique d'église.",
    auteur: "Tradition musicologique sur la réception de Palestrina",
  },
  voix: [
    "Un point d'imitation classique fait naître chaque voix de la précédente à un intervalle réglé (la quinte, l'octave) — ici confirmé note pour note : soprano, puis alto à la quinte inférieure, puis ténor à l'octave du soprano.",
    "Dans le contrepoint modal strict, la dissonance appartient à deux catégories seulement : la note de passage (sur temps faible) et le retard (préparé en consonance, frappé sur temps fort, résolu par degré descendant) — jamais un objet libre.",
    "Une pièce modale peut se refermer sans dominante ni polarité V-I : la finale s'impose alors par le poids et la fréquence de ses clausules, pas par une attraction fonctionnelle.",
  ],
  repertoire: {
    titre: "Missa Brevis, Agnus Dei II",
    compositeur: "Giovanni Pierluigi da Palestrina",
    notes: ["Bb4", "Ab4", "G4", "Eb4", "D4", "Eb4", "F4"],
    musicxml: PALESTRINA_AGNUS_MESURES_1_56,
    analyse: PALESTRINA_AGNUS_ANALYSE,
    analyseNarrative: PALESTRINA_AGNUS_ANALYSE_NARRATIVE,
  },
  pieges: [
    {
      erreur: "Chiffrer cette pièce en degrés fonctionnels (I, IV, V) comme une pièce tonale classique",
      correction: "Ce serait anachronique : en 1570, la tonalité fonctionnelle codifiée n'existe pas encore. L'analyse doit se faire en CLAUSULES (points de repos cadentiels) — la finale s'impose par le poids de ses clausules, pas par une polarité dominante-tonique.",
    },
    {
      erreur: "Chercher de nombreuses altérations chromatiques dans une pièce de la Renaissance",
      correction: "C'est l'inverse : cette pièce ne contient qu'UN SEUL accident sur ses 56 mesures à quatre voix (un La naturel, musica ficta, m.45) — le régime de la dissonance ici est d'une sévérité que la musique tonale postérieure n'aura plus jamais.",
    },
    {
      erreur: "Traiter chaque dissonance rencontrée comme un évènement expressif à interpréter individuellement",
      correction: "Dans ce style, la dissonance est une simple règle de circulation entre les voix (note de passage sur temps faible, ou retard préparé-frappé-résolu) — un phénomène de trafic réglé, pas un objet expressif isolé à commenter au cas par cas.",
    },
  ],
  resume: [
    "Le style de Palestrina (Missa Brevis, 1570) traite la dissonance comme une règle de circulation stricte entre les voix — passage sur temps faible, ou retard préparé-frappé-résolu — jamais comme un évènement libre.",
    "Un point d'imitation classique fait entrer chaque voix à un intervalle réglé de la précédente : ici soprano, puis alto à la quinte inférieure, puis ténor à l'octave du soprano, confirmés note pour note.",
    "Sans dominante conclusive, la finale modale s'établit par le poids et la fréquence des clausules plutôt que par une polarité V-I — un mécanisme d'attraction tonale entièrement différent de celui de la musique fonctionnelle postérieure.",
  ],
};
