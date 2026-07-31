import type { CoursConservatoireData } from "./conservatoireData";
import {
  PENDULE_FICHE_MESURES_1_8,
  PENDULE_FICHE_ANALYSE,
  PENDULE_FICHE_ANALYSE_NARRATIVE,
} from "./conservatoire-pendule-fiche";

export const CONSERVATOIRE_DATA_22: CoursConservatoireData = {
  intuition: "Un ostinato immobile n'est pas une contrainte — c'est un fond fixe sur lequel une seule courbe (la densité de notes étrangères à la tonalité) peut porter, seule, toute la forme d'une pièce.",
  reference: {
    badge: "Bill Evans · notes de pochette, Kind of Blue",
    citation: "There is a Japanese visual art in which the artist is forced to be spontaneous. He must paint on a thin stretched parchment with a special brush... Erasures or changes are impossible.",
    auteur: "Bill Evans, « Improvisation in Jazz », notes de pochette de Kind of Blue (1959)",
  },
  voix: [
    "Un ostinato à deux accords-couleurs (une septième majeure, un accord voisin non résolu) peut soutenir une pièce entière sans jamais produire une seule cadence.",
    "Quand l'harmonie d'accompagnement reste rigoureusement fixe, un seul paramètre mélodique — la densité de notes étrangères à la tonalité — peut porter, seul, toute la courbe formelle d'une pièce.",
    "Une quarte suspendue (accord « sus ») qui ne se résout jamais en tierce n'est pas une dominante en attente : c'est une seconde couleur, au même rang que la première.",
  ],
  repertoire: {
    titre: "Le pendule (fiche didactique)",
    compositeur: "D'après Bill Evans, Peace Piece (1958)",
    notes: ["C2", "C4", "E4", "B3", "G3", "A3", "F4", "G2"],
    musicxml: PENDULE_FICHE_MESURES_1_8,
    analyse: PENDULE_FICHE_ANALYSE,
    analyseNarrative: PENDULE_FICHE_ANALYSE_NARRATIVE,
  },
  pieges: [
    {
      erreur: "Chiffrer l'accord de Sol comme un simple G7 appelant sa résolution sur Do",
      correction: "C'est un Sol9sus : la quarte (Do) n'est jamais remplacée par la tierce (Si). Un G7 appelle une résolution ; un G9sus flotte à côté, sans tension dirigée — la nuance de chiffrage change tout le sens de l'écoute.",
    },
    {
      erreur: "Chercher une progression harmonique qui explique la vague de tension de la pièce",
      correction: "Il n'y en a aucune : l'ostinato ne change pas une seule note du début à la fin. Toute la courbe de tension vient exclusivement de la main droite (la densité de notes étrangères à la tonalité), pas d'un mouvement d'accords.",
    },
    {
      erreur: "Traiter la septième majeure de l'accord initial comme une dissonance qui devrait se résoudre",
      correction: "Dans ce langage, la septième majeure fait partie de la couleur constitutive de l'accord — elle n'est ni préparée ni résolue, elle EST la sonorité de départ.",
    },
  ],
  resume: [
    "Un ostinato à deux accords-couleurs (Do∆7, Sol9sus) peut soutenir une pièce entière sans jamais produire une seule cadence — la fonction cède la place à la couleur pure.",
    "Le Sol9sus n'est pas un G7 : sa quarte ne se résout jamais en tierce, ce qui en fait une seconde couleur plutôt qu'une dominante en attente.",
    "Pendant que l'harmonie reste fixe, la densité de notes étrangères à la tonalité dans la mélodie peut, seule, porter toute la forme — une vague qui monte puis redescend au-dessus d'un fond immobile.",
  ],
};
