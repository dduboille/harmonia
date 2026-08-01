import type { CoursConservatoireData } from "./conservatoireData";
import {
  SCHEHERAZADE3_MESURES_1_80,
  SCHEHERAZADE3_ANALYSE,
  SCHEHERAZADE3_ANALYSE_NARRATIVE,
} from "./conservatoire-scheherazade3";

export const CONSERVATOIRE_DATA_47: CoursConservatoireData = {
  intuition: "Une texture orchestrale n'est pas toujours un empilement d'accords frappés ensemble : le plus souvent, c'est une ligne mélodique portée par des pédales tenues — et savoir distinguer une pédale soutenue d'un vrai tutti attaqué ensemble, c'est déjà savoir lire une partition d'orchestre.",
  reference: {
    badge: "Rimsky-Korsakov · Principes d'orchestration",
    citation: "L'orchestration fait partie intégrante de l'âme même de l'œuvre.",
    auteur: "Nicolaï Rimski-Korsakov, Principes d'orchestration (traité posthume, éd. Steinberg, 1913)",
  },
  voix: [
    "Un accompagnement de cordes peut soutenir une mélodie sans jamais former d'accord réellement frappé ensemble — la « verticalité » n'est parfois qu'une pédale tenue, pas un accord attaqué.",
    "Distinguer un vrai tutti (toutes les parties attaquent ensemble, même rythme) d'une pédale simplement soutenue exige de vérifier les onsets réels, pas seulement les hauteurs qui sonnent ensemble à un instant donné.",
    "Les indications pizz./arco ne sont pas de simples nuances de jeu : elles redistribuent le rôle des pupitres entre porteurs de mélodie et porteurs d'harmonie implicite.",
  ],
  repertoire: {
    titre: "Schéhérazade, 3e mouvement « Le jeune Prince et la jeune Princesse » (extrait, version condensée)",
    compositeur: "Nikolaï Rimski-Korsakov",
    notes: ["G3", "B3", "D4", "G4", "B4", "D5", "G5"],
    musicxml: SCHEHERAZADE3_MESURES_1_80,
    analyse: SCHEHERAZADE3_ANALYSE,
    analyseNarrative: SCHEHERAZADE3_ANALYSE_NARRATIVE,
  },
  pieges: [
    {
      erreur: "Croire qu'un arrangement à 5 parties instrumentales forme un accord complet à chaque instant",
      correction: "Ici, une seule ligne (violon) porte la mélodie presque tout du long tandis que les 4 autres parties tiennent une pédale — les rares tuttis (5 parties attaquant ensemble, même rythme) se concentrent aux articulations de la forme, et l'accord de la toute dernière mesure est de loin le plus dense de la pièce.",
    },
    {
      erreur: "Chercher une grille d'accords chiffrable mesure par mesure dans tout arrangement orchestral",
      correction: "Un arrangement essentiellement mélodique (comme celui-ci, ou le premier fichier du Boléro/cours19) ne porte pas de progression harmonique à chiffrer — l'harmonie y reste implicite, et l'analyse porte alors sur la ligne et la texture plutôt que sur des degrés.",
    },
    {
      erreur: "Considérer l'ornement chromatique « oriental » (le Do# de la Princesse) comme une vraie modulation ou un emprunt fonctionnel",
      correction: "C'est un pur décor sonore, jamais résolu, qui colore la mélodie sans jamais entrer dans une syntaxe harmonique — une quarte augmentée brodée, pas un accord altéré.",
    },
  ],
  resume: [
    "Ce mouvement est un diptyque : le Prince (Sol majeur, diatonisme pur, m.1-42) contre la Princesse (sol mineur orné d'un Do# « oriental », m.43-58), avant un retour du Prince puis une coda (m.75-80).",
    "L'accompagnement est presque toujours une pédale tenue sous la mélodie ; les rares tuttis (5 parties ensemble, même rythme) marquent les articulations de la forme, et l'accord de la toute dernière mesure — où l'alto ajoute même son propre arpège Mi-Do-La par-dessus la triade de Sol majeur des autres parties — en est de loin le plus dense.",
    "Le tétracorde descendant de la Princesse (Ré-Do-Sib-La-Sol) et son ornement chromatique jamais résolu relient ce mouvement à toute une lignée du corpus (Folia, Purcell, Sibelius, Boléro, Morricone) — Rimsky en est la source russe, transmise à Stravinsky, son élève.",
  ],
};
