import type { CoursConservatoireData } from "./conservatoireData";
import {
  SCHOENBERG_OP11_MESURES_1_64,
  SCHOENBERG_OP11_ANALYSE,
  SCHOENBERG_OP11_ANALYSE_NARRATIVE,
} from "./conservatoire-schoenberg-op11";

export const CONSERVATOIRE_DATA_44: CoursConservatoireData = {
  intuition: "Quand la tonalité disparaît, l'oreille cherche encore une cohérence — Schoenberg la lui donne autrement : non plus des degrés qui se répondent, mais une cellule d'intervalles qui sature tout le tissu.",
  reference: {
    badge: "Schoenberg · sur l'émancipation de la dissonance",
    citation: "La dissonance n'est qu'une consonance plus lointaine — l'oreille finira par s'y habituer comme elle s'est habituée à toutes les autres.",
    auteur: "Arnold Schoenberg, cité par ses biographes",
  },
  voix: [
    "L'op. 11 n°1 est, par convention historiographique, l'acte de naissance de l'atonalité libre — et son compositeur est l'inventeur du terme même que la discipline emploie : l'émancipation de la dissonance.",
    "Pour la première fois dans l'histoire du répertoire analysé ici, il n'y a littéralement rien à chiffrer : ni fondamentale, ni tierce empilée, ni degré. L'analyse change d'unités — des cellules d'intervalles, pas des fonctions.",
    "La mélodie et l'harmonie sont faites de la même substance intervallique chez Schoenberg : la cellule mélodique d'ouverture, dressée verticalement quelques mesures plus loin, devient l'accord d'accompagnement. Plus de différence de nature entre l'horizontal et le vertical.",
  ],
  repertoire: {
    titre: "Trois Pièces op. 11, n° 1 (intégrale)",
    compositeur: "Arnold Schoenberg",
    notes: ["Si:4", "Sol#:4", "Sol:4", "La:4", "Fa:4"],
    musicxml: SCHOENBERG_OP11_MESURES_1_64,
    analyse: SCHOENBERG_OP11_ANALYSE,
    analyseNarrative: SCHOENBERG_OP11_ANALYSE_NARRATIVE,
  },
  pieges: [
    {
      erreur: "Chercher un chiffrage romain ou une fonction T/SD/D dans une pièce atonale",
      correction: "Sans fondamentale ni tierce de référence, le chiffrage classique n'a pas d'objet. L'analyse post-tonale identifie des CELLULES d'intervalles (ensembles de classes de hauteurs) qui reviennent, transposées ou renversées, à la place des degrés.",
    },
    {
      erreur: "Croire qu'une pièce atonale est arbitraire, sans aucune cohérence",
      correction: "L'op. 11 n°1 est saturé par une seule cellule ([0,1,4], tierce mineure + demi-ton) qui engendre le thème ET l'accompagnement. La cohérence que la tonalité assurait par la syntaxe des degrés, Schoenberg l'obtient par la saturation du tissu par une même classe d'ensembles.",
    },
    {
      erreur: "Ignorer les 'fantômes tonals' résiduels dans une pièce atonale ancienne (1909)",
      correction: "L'atonalité libre de 1909 n'efface pas instantanément tout souvenir tonal : certains passages (comme les accords-flageolets de l'op. 11 n°1) font résonner des sonorités reconnaissables (triade augmentée, accord de 7e majeure) sans jamais s'y ancrer fonctionnellement. Les deux lectures — radicale et résiduelle — sont légitimes.",
    },
  ],
  resume: [
    "Analyse post-tonale : classes de hauteurs (pc 0-11), classes d'intervalles (ic 0-6), ensembles (Tn/TnI), forme normale/première, vecteur d'intervalles, numéros de Forte",
    "Op. 11 n°1 de Schoenberg (1909) : la cellule [0,1,4] engendre mélodie ET harmonie — zéro accord chiffrable, une première dans le corpus tonal étudié jusqu'ici",
    "1909-1911 : trois réponses simultanées à la saturation tonale — Debussy (collection), Schoenberg (cellules), Stravinsky (bitonalité en conflit)",
  ],
};
