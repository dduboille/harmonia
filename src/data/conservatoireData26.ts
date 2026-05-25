import type { CoursConservatoireData } from "./conservatoireData";

export const CONSERVATOIRE_DATA_26: CoursConservatoireData = {
  intuition:
    "La basse donnée, c'est le squelette — l'harmonisation, c'est la chair et le sang que le musicien lui donne.",
  reference: {
    badge: "Dubois · Traité d'Harmonie",
    citation:
      "L'art d'harmoniser une basse n'est autre que l'art de penser musicalement : chaque note de basse porte en germe les voix qui la surmontent.",
    auteur: "Théodore Dubois, 1901",
  },
  voix: [
    "Analyser la fonction de chaque note de basse avant de choisir l'accord : est-ce une fondamentale (état fondamental), une tierce (1er renversement) ou une quinte (2e renversement) ?",
    "Le 6/4 de cadence n'apparaît que sur temps fort, suivi obligatoirement de V puis I — jamais sur temps faible",
    "Identifier les notes étrangères au soprano (passage, broderie, retard) avant d'harmoniser, pour éviter de créer de faux accords sur des notes non réelles",
  ],
  repertoire: {
    titre: "Prélude en Do majeur, BWV 846",
    compositeur: "Johann Sebastian Bach",
    notes: ["C3", "E3", "G3", "C4", "E4", "G3", "C4", "E4"],
  },
  pieges: [
    {
      erreur: "Changer d'accord sur chaque note rapide du soprano",
      correction: "Les notes courtes sont souvent des notes de passage ou broderies — harmoniser sur la structure rythmique, pas sur chaque note individuelle",
    },
    {
      erreur: "Placer un 6/4 sur un temps faible ou sans résolution V obligatoire",
      correction: "Le 6/4 de cadence est exclusivement sur temps fort (2e ou 4e temps), toujours suivi de V résolvant sur I",
    },
    {
      erreur: "Ignorer les notes étrangères et créer des accords incorrects sur des broderies ou passages",
      correction: "Identifier d'abord passage, broderie, retard, anticipation — puis harmoniser uniquement les notes réelles",
    },
  ],
  resume: [
    "Basse donnée : identifier fondamentale/tierce/quinte, proposer 2–3 accords possibles, choisir selon T→SD→D→T",
    "Soprano donné : notes longues = notes réelles à harmoniser, notes courtes = potentiellement étrangères",
    "6/4 de cadence : uniquement sur temps fort, résolution V–I obligatoire et immédiate",
  ],
};
