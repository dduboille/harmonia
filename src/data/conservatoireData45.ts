import type { CoursConservatoireData } from "./conservatoireData";
import {
  FAURE_NOCTURNE6_MESURES_0_141,
  FAURE_NOCTURNE6_ANALYSE,
  FAURE_NOCTURNE6_ANALYSE_NARRATIVE,
} from "./conservatoire-faure-nocturne6";

export const CONSERVATOIRE_DATA_45: CoursConservatoireData = {
  intuition: "Une tonalité peut rester parfaitement stable dans son identité tout en devenant mobile jusqu'au vertige — majeur ou mineur, dièse ou bémol, un même accord peut se donner deux visages sans jamais quitter le système.",
  reference: {
    badge: "Fauré · sur sa propre esthétique",
    citation: "L'art, et particulièrement la musique, consiste à nous élever le plus loin possible au-dessus de ce qui est.",
    auteur: "Gabriel Fauré (propos rapportés par ses biographes)",
  },
  voix: [
    "Une même hauteur peut être réécrite dans une autre orthographe (do# pour ré♭) pour composer, pas seulement transcrire : le changement de mode qui l'accompagne devient un vrai évènement expressif, pas un simple choix de notation.",
    "Une progression peut voyager par tierces successives (médiantes) sans jamais passer par une cadence V-I — chaque station harmonique reste consonante, mais aucune n'est préparée ni résolue au sens classique.",
    "Un retour au ton principal peut se faire par la sous-dominante plutôt que par la dominante (cadence plagale) — un geste qui privilégie la douceur du degré conjoint à la force de l'attraction dominante-tonique.",
  ],
  repertoire: {
    titre: "Nocturne n° 6 en Ré♭ majeur, op. 63",
    compositeur: "Gabriel Fauré",
    notes: ["Db4", "Ab3", "Bb3", "C4", "C#4", "E4", "G#4", "Db5"],
    musicxml: FAURE_NOCTURNE6_MESURES_0_141,
    analyse: FAURE_NOCTURNE6_ANALYSE,
    analyseNarrative: FAURE_NOCTURNE6_ANALYSE_NARRATIVE,
  },
  pieges: [
    {
      erreur: "Analyser la charnière do# mineur / ré♭ majeur (m.19) comme une modulation classique vers une nouvelle tonalité éloignée",
      correction: "Do# et Ré♭ sont la MÊME hauteur : Fauré ne module pas, il réécrit la tonique en dièses et l'assombrit en mineur — un changement d'éclairage, pas de lieu.",
    },
    {
      erreur: "Chercher un enchaînement V-I pour expliquer le passage de Ré♭ à La majeur puis à Do majeur (m.64-66)",
      correction: "Il n'y en a aucun : chaque station est reliée à la précédente par un simple glissement de tierce (médiante), un procédé entièrement différent de la logique des quintes qui gouverne les cadences classiques.",
    },
    {
      erreur: "Considérer le retour au ton principal (m.109-110) comme une cadence authentique (V-I)",
      correction: "C'est une cadence PLAGALE déguisée en dominante secondaire : un Ré♭7 (V7/IV) qui résout sur Sol♭ (IV), pas sur la dominante — le retour se fait par la sous-dominante.",
    },
  ],
  resume: [
    "Fauré compose l'enharmonie comme un vrai geste expressif : do# mineur et ré♭ majeur sont la même hauteur, réécrite et assombrie en mode mineur — un changement d'éclairage sans déplacement (m.19).",
    "Le carrousel de médiantes (Ré♭ → La → Do, m.64-66) voyage par glissements de tierce successifs, sans jamais passer par une cadence V-I — chaque station un accord 6/9 autonome.",
    "Le retour au ton principal se fait par la cadence plagale (V7/IV → IV → I) plutôt que par la dominante — et la coda referme la pièce sur l'ombre du mineur parallèle avant la tonique pure, le même geste qui l'avait ouverte.",
  ],
};
