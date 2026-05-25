import type { CoursConservatoireData } from "./conservatoireData";

export const CONSERVATOIRE_DATA_29: CoursConservatoireData = {
  intuition: "L'histoire de l'harmonie c'est l'histoire de la dissonance qui devient consonance.",
  reference: {
    badge: "Schönberg · Harmonielehre",
    citation: "Toute dissonance est une consonance non encore résolue. L'oreille s'habitue à tout — ce qui choque aujourd'hui sera banal demain.",
    auteur: "Arnold Schönberg, 1911",
  },
  voix: [
    "Identifier la période historique d'une œuvre en 3 indices : densité du chromatisme, présence ou absence de résolution V–I, traitement des dissonances.",
    "Analyser Debussy avec ses propres outils (couleur, parallélismes, modes) et non avec les fonctions T/SD/D — ses accords sont des taches de couleur, pas des fonctions.",
    "Le contexte historique n'excuse pas les erreurs d'analyse : Debussy connaissait parfaitement les règles qu'il transgressait.",
  ],
  repertoire: {
    titre: "Prélude à l'après-midi d'un faune",
    compositeur: "Claude Debussy",
    notes: ["Do:4", "Ré:4", "Mi:4", "Fa#:4", "Sol#:4", "La#:4"],
  },
  pieges: [
    {
      erreur: "Croire que Debussy n'a pas de règles harmoniques",
      correction: "Debussy avait une maîtrise parfaite du contrepoint et de l'harmonie classique. Sa liberté est une transgression consciente et calculée, pas une ignorance.",
    },
    {
      erreur: "Confondre style et époque",
      correction: "Bach et Haendel sont contemporains mais très différents. Analyser un compositeur par son époque seule est insuffisant — les signatures individuelles priment.",
    },
    {
      erreur: "Analyser Debussy avec les fonctions T/SD/D",
      correction: "Debussy refuse ces fonctions. Ses accords progressent par couleur, registre et contour mélodique — pas par tension-résolution. Chercher des 'dominantes' dans Debussy, c'est chercher la mauvaise chose.",
    },
    {
      erreur: "Ignorer le contexte historique dans l'analyse",
      correction: "Une quinte parallèle chez Bach est une faute. Chez Debussy, c'est un effet voulu (planing). Le contexte détermine si c'est une erreur ou une technique.",
    },
  ],
  resume: [
    "5 périodes : Baroque (contrepoint + fonctions claires) → Classique (formes symétriques + cadences affirmées) → Romantique (chromatisme + modulations) → Post-romantique (tonalité élargie) → Impressionniste (couleur sans fonctions)",
    "Même mélodie, 5 harmonisations : la mélodie Do–Mi–Sol–Do révèle les différences stylistiques mieux que n'importe quel traité",
    "Critère d'identification : quelle est la relation à la dominante ? (Bach : obligatoire → Debussy : inexistante)",
  ],
};
