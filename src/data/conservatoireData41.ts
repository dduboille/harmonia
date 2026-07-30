import type { CoursConservatoireData } from "./conservatoireData";
import {
  PASTICHE_CLASSIQUE_MESURES_1_8,
  PASTICHE_CLASSIQUE_ANALYSE,
  PASTICHE_CLASSIQUE_ANALYSE_NARRATIVE,
} from "./conservatoire-pastiche-classique";

export const CONSERVATOIRE_DATA_41: CoursConservatoireData = {
  intuition: "Un bon pastiche ne se juge pas à sa ressemblance de surface — il se juge à ce qu'un connaisseur du style ne pourrait pas y trouver en défaut. La méthode, avant l'inspiration.",
  reference: {
    badge: "Dukas · sur l'enseignement du style",
    citation: "Écrire dans le style d'un maître, ce n'est pas l'imiter — c'est en comprendre si intimement la grammaire qu'on pourrait, l'espace d'une phrase, penser comme lui.",
    auteur: "Paul Dukas, professeur de composition au Conservatoire de Paris",
  },
  voix: [
    "La carrure (4+4, 8+8) est le squelette invisible de la phrase classique — la briser sans raison casse l'illusion stylistique aussi sûrement qu'une fausse note.",
    "La basse d'Alberti n'est pas un simple remplissage rythmique : c'est un dispositif qui rend l'harmonie audible sans jamais attirer l'attention sur elle-même — la transparence est son unique fonction.",
    "Une demi-cadence n'est pas une fin — c'est une respiration. Elle doit laisser l'oreille en attente, jamais satisfaite : c'est ce qui rend la cadence parfaite finale nécessaire, et non décorative.",
  ],
  repertoire: {
    titre: "Période classique (exercice de style, Do majeur)",
    compositeur: "Exercice original Harmonia — pastiche classique (Haydn/Mozart)",
    notes: ["Do:5", "Mi:5", "Sol:5", "Do:6"],
    musicxml: PASTICHE_CLASSIQUE_MESURES_1_8,
    analyse: PASTICHE_CLASSIQUE_ANALYSE,
    analyseNarrative: PASTICHE_CLASSIQUE_ANALYSE_NARRATIVE,
  },
  pieges: [
    {
      erreur: "Introduire un procédé harmonique postérieur au style visé (anachronisme)",
      correction: "Une neuvième non résolue, un accord parallèle debussyste ou une sixte augmentée romantique dans un pastiche classique trahit immédiatement l'exercice — même une seule occurrence suffit à briser l'illusion stylistique.",
    },
    {
      erreur: "Rompre la carrure sans raison stylistique",
      correction: "Le classicisme viennois pense par phrases symétriques (4+4, 8+8). Une phrase de 5 ou 7 mesures sans justification motivique n'est pas une audace — c'est une erreur de méthode qui signale un manque de maîtrise de la grammaire du style.",
    },
    {
      erreur: "Traiter la basse d'Alberti comme un simple remplissage sans lien avec l'harmonie",
      correction: "La basse d'Alberti doit épouser exactement l'accord du moment (fondamentale-quinte-tierce-quinte) — elle n'est pas une formule automatique indépendante de la grille, elle EST la grille rendue audible.",
    },
  ],
  resume: [
    "Méthode de pastiche : analyser le modèle (carrure, rythme harmonique, cadences, texture) avant d'écrire — jamais l'inverse",
    "Période classique : antécédent (demi-cadence) + conséquent (cadence parfaite), carrure stricte 4+4",
    "L'anachronisme harmonique est le piège n°1 : tout procédé étranger à l'époque visée trahit l'exercice, même isolé",
  ],
};
