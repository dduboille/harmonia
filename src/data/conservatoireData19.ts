import type { CoursConservatoireData } from "./conservatoireData";
import {
  BOLERO_MESURES_1_98,
  BOLERO_ANALYSE,
  BOLERO_ANALYSE_NARRATIVE,
} from "./conservatoire-bolero";

export const CONSERVATOIRE_DATA_19: CoursConservatoireData = {
  intuition: "Une seule harmonie tenue pendant 84 mesures, un unique déplacement, un unique accident — le Boléro pousse l'immobilité harmonique jusqu'à son point de rupture, et démontre que toute la tension d'une œuvre peut se loger ailleurs que dans les accords.",
  reference: {
    badge: "Ravel · à propos du Boléro",
    citation: "C'est de l'orchestration sans musique.",
    auteur: "Maurice Ravel (rapporté par ses biographes)",
  },
  voix: [
    "Une pédale peut tenir une œuvre entière : ici, la basse ne quitte jamais Do-Sol pendant 84 mesures consécutives — toute la tension attendue de l'harmonie est déléguée au crescendo et à l'épaisseur de la texture.",
    "Une modulation sans préparation ni pivot (ici, une tierce majeure ascendante Do → Mi) reste lisible à l'oreille même sans aucun accord de transition — le déplacement suffit à lui seul à faire événement, précisément parce que rien d'autre n'a bougé avant lui.",
    "Une note étrangère obstinément redite (pas une ligne qui progresse) peut créer une tension aussi forte qu'un vrai développement mélodique — le « grincement » du retour tient à la répétition d'une seule aspérité, pas à son évolution.",
  ],
  repertoire: {
    titre: "Boléro (arrangement piano harmonisé)",
    compositeur: "Maurice Ravel",
    notes: ["C2", "G2", "A4", "G4", "E4", "F4", "G#5", "C5"],
    musicxml: BOLERO_MESURES_1_98,
    analyse: BOLERO_ANALYSE,
    analyseNarrative: BOLERO_ANALYSE_NARRATIVE,
  },
  pieges: [
    {
      erreur: "Chercher une progression harmonique complexe dans les 84 premières mesures du Boléro",
      correction: "Il n'y en a aucune : la main gauche ne joue que Do et Sol du début à la fin de cette section, vérifié mesure par mesure sans exception. Toute la construction musicale vient du crescendo et de l'orchestration, pas de l'harmonie.",
    },
    {
      erreur: "Croire que la « ligne chromatique » annoncée au retour (m.93-96) est une ligne mélodique qui progresse degré par degré",
      correction: "Vérification note à note : ces quatre mesures répètent EXACTEMENT le même motif, avec une seule note étrangère (La♭) redite à l'identique à chaque fois — ce n'est pas une ligne qui avance, mais un ressassement. La vraie ligne qui descend degré par degré n'apparaît qu'à la mesure suivante, dans l'accord du crash lui-même.",
    },
    {
      erreur: "Analyser l'accord du crash (m.97) comme un accord de septième ou de neuvième altéré du vocabulaire tonal habituel",
      correction: "C'est un polyaccord non fonctionnel : deux empilements incompatibles (Do-Fa et La♭-Si-Réb) claqués simultanément, qui ne se laissent pas réduire à un seul accord chiffrable dans le système tonal — d'où le chiffrage « ? », pas une case vide mais une vraie catégorie d'analyse.",
    },
  ],
  resume: [
    "Le Boléro (Ravel, 1928) tient 84 mesures sur une seule pédale Do-Sol — le cas-limite de l'harmonie immobile : toute la tension de l'œuvre vient du crescendo et de la texture, pas des accords.",
    "L'unique modulation de la pièce (Do → Mi, m.85-92) est un déplacement d'une tierce majeure sans préparation ni pivot — l'intervalle qui divise l'octave en trois parties égales, sans rien devoir à la logique des quintes.",
    "Le seul vrai désordre harmonique de l'œuvre est son dernier accord fort (m.97) : un polyaccord non fonctionnel (Do-Fa contre La♭-Si-Réb) — dans une pièce sans tension harmonique, la dissonance ne résout plus, elle casse.",
  ],
};
