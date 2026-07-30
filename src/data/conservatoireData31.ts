import type { CoursConservatoireData } from "./conservatoireData";
import {
  PETROUCHKA_FICHE_MESURES_1_7,
  PETROUCHKA_FICHE_ANALYSE,
  PETROUCHKA_FICHE_ANALYSE_NARRATIVE,
} from "./conservatoire-petrouchka-fiche";

export const CONSERVATOIRE_DATA_31: CoursConservatoireData = {
  intuition: "Deux tonalités simultanées c'est comme deux conversations en langues différentes — le cerveau entend les deux et crée un sens impossible à analyser séparément.",
  reference: {
    badge: "Messiaen · Technique de mon langage musical",
    citation: "La polytonalité est la superposition de deux centres tonaux distincts. Le résultat n'appartient ni à l'un ni à l'autre — il crée un espace harmonique nouveau.",
    auteur: "Olivier Messiaen, 1944",
  },
  voix: [
    "La polytonalité n'est pas de l'atonalité — chaque couche reste tonale, c'est leur combinaison qui crée la tension. On peut toujours entendre les deux tonalités séparément.",
    "L'harmonie quartale n'a pas de tierce → pas de majeur ni mineur → ambiguïté contrôlée. C'est cette absence de qualité qui crée le son 'ouvert' et 'moderne'.",
    "Le 'So What chord' de Miles Davis (Ré–Sol–Do–Fa–La) est l'accord quartal par excellence du jazz modal — apprenez à le construire sur toutes les notes.",
  ],
  repertoire: {
    titre: "L'accord de Petrouchka (fiche didactique)",
    compositeur: "D'après Igor Stravinsky, Petrouchka (2e tableau, 1911)",
    notes: ["C4", "E4", "G4", "F#3", "A#3", "C#4"],
    musicxml: PETROUCHKA_FICHE_MESURES_1_7,
    analyse: PETROUCHKA_FICHE_ANALYSE,
    analyseNarrative: PETROUCHKA_FICHE_ANALYSE_NARRATIVE,
  },
  pieges: [
    {
      erreur: "Confondre polytonalité et atonalité",
      correction: "La polytonalité superpose des tonalités distinctes — chaque couche reste tonale. L'atonalité évite toute référence tonale. Ce sont deux systèmes différents.",
    },
    {
      erreur: "Croire que les accords quartaux n'ont pas de logique",
      correction: "L'harmonie quartale a une logique précise : empilement de quartes (justes ou augmentées). La 'So What voicing' suit des règles strictes de registration.",
    },
    {
      erreur: "Chercher des fonctions T/SD/D dans la musique polytonale",
      correction: "La polytonalité fonctionne par superposition de plans, pas par progression fonctionnelle. L'analyse doit identifier les deux (ou plusieurs) centres tonaux, pas les fonctions.",
    },
  ],
  resume: [
    "Polytonalité : superposition simultanée de tonalités différentes — douce (tonalités voisines) ou brutale (triton, comme Stravinsky Pétrouchka)",
    "Accords quartaux : construction par superposition de quartes (Do–Fa–Sib ou Do–Fa–Si). Ni majeur ni mineur → ambiguïté moderne.",
    "So What chord : Ré–Sol–Do–Fa–La (4 quartes + tierce majeure au sommet) — voicing emblématique du jazz modal",
  ],
};
