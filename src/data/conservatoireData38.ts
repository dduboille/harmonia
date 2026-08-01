import type { CoursConservatoireData } from "./conservatoireData";
import {
  DIDO_LAMENT_MESURES_1_65,
  DIDO_LAMENT_ANALYSE,
  DIDO_LAMENT_ANALYSE_NARRATIVE,
} from "./conservatoire-dido-lament";

export const CONSERVATOIRE_DATA_38: CoursConservatoireData = {
  intuition: "Une basse ne change jamais d'une seule note en onze passages — et pourtant rien ne se répète : toute l'invention se loge dans les notes étrangères que la voix chantée superpose à cette descente immuable.",
  reference: {
    badge: "Purcell · préface aux Sonnata's of III Parts",
    citation: "Musick is yet but in its Nonage, a forward Child, which gives hope of what he may be hereafter in England, when the Masters of it shall find more Encouragement.",
    auteur: "Henry Purcell, 1683",
  },
  voix: [
    "Le retard (7-6, puis 4-3) est la note étrangère par excellence du ground : une voix tient la note de l'accord précédent pendant que la basse a déjà changé, créant la dissonance avant la résolution attendue.",
    "Une basse obstinée (ground) peut porter des harmonies différentes à chaque retour — la note étrangère naît de l'écart entre ce que la basse impose et ce que la voix chantée choisit de tenir encore un instant.",
    "Le déphasage entre la longueur des phrases vocales et celle du ground (5 mesures) est lui-même une note étrangère à l'échelle de la forme entière : la plainte et la basse ne cadencent presque jamais ensemble.",
  ],
  repertoire: {
    titre: "Dido's Lament — « When I am laid in earth » (Dido and Aeneas)",
    compositeur: "Henry Purcell",
    notes: ["G3", "F#3", "F3", "E3", "Eb3", "D3"],
    musicxml: DIDO_LAMENT_MESURES_1_65,
    analyse: DIDO_LAMENT_ANALYSE,
    analyseNarrative: DIDO_LAMENT_ANALYSE_NARRATIVE,
  },
  pieges: [
    {
      erreur: "Confondre le tétracorde chromatique de la basse (Sol-Fa#-Fa-Mi-Mib-Ré) avec une suite de notes étrangères",
      correction: "Cette ligne descendante EST le cantus firmus structurel (le ground lui-même, répété sans variante) — ce ne sont pas des notes de passage mais la fondation harmonique. Les vraies notes étrangères (les retards) sont dans la voix chantée au-dessus de cette basse.",
    },
    {
      erreur: "Résoudre un retard vers le haut",
      correction: "Comme toute suspension classique, chaque retard du ground résout par mouvement descendant — la voix chantée retombe d'un degré sur la note réelle de l'accord.",
    },
    {
      erreur: "Chercher le même chiffrage à chaque retour du ground",
      correction: "Purcell réharmonise la même basse différemment à chaque passage (les « habillages » changent) — seule la ligne de basse est invariante, l'accord réel au-dessus varie d'un passage à l'autre.",
    },
  ],
  resume: [
    "Le retard (suspension) : préparation consonante → percussion dissonante → résolution descendante — Dido's Lament (Purcell, 1689) l'illustre en chaînes 7-6/4-3 sur onze passages du même ground.",
    "Le ground (basse obstinée, ici un tétracorde chromatique descendant Sol-Ré, le passus duriusculus) reste invariant pendant que son habillage harmonique change à chaque retour — la note étrangère naît de cet écart.",
    "1689, domaine public : la pièce la plus ancienne du corpus Harmonia après la Missa Brevis de Palestrina (1570, cours 43), et la source commune à la basse de lamento (Chopin), la 7e préparée (Bach) et la résolution différée (Wagner).",
  ],
};
