import type { CoursConservatoireData } from "./conservatoireData";
import {
  FOLIA_GRILLE_MESURES_1_16,
  FOLIA_GRILLE_ANALYSE,
  FOLIA_GRILLE_ANALYSE_NARRATIVE,
} from "./conservatoire-folia-grille";

export const CONSERVATOIRE_DATA_42: CoursConservatoireData = {
  intuition: "Une grille harmonique peut appartenir à tout le monde et à personne — la Folia a traversé cinq siècles de compositeurs qui l'ont chacun réalisée à sa façon, sans qu'aucun ne l'ait jamais possédée.",
  reference: {
    badge: "Formule anonyme · XVIe siècle",
    citation: "La Folia est peut-être la plus ancienne mélodie qui ait survécu jusqu'à nous en Europe occidentale sous une forme continûment reconnaissable.",
    auteur: "Tradition musicologique sur l'origine ibérique de la Folia",
  },
  voix: [
    "Une grille harmonique fixe peut porter, sans jamais changer, des siècles de réalisations différentes — le principe même de la basse chiffrée : une même charpente, une infinité de façons de la vêtir.",
    "La sous-tonique majeure (VII, un accord majeur construit sur le 7e degré d'un ton mineur) est une empreinte modale antérieure à la tonalité pleinement codifiée — elle survit dans des formules bien plus tardives.",
    "Un faux-rapport (deux voix qui frappent presque ensemble la même note à des hauteurs chromatiquement voisines, ex. Do naturel contre Do#) est une technique d'écriture authentique du XVIe-XVIIe siècle, pas une simple erreur d'harmonie.",
  ],
  repertoire: {
    titre: "La Folia (la grille)",
    compositeur: "Formule anonyme (d'origine ibérique, XVIe siècle)",
    notes: ["D3", "A2", "D3", "C3", "F3", "C#3", "Bb2", "A2"],
    musicxml: FOLIA_GRILLE_MESURES_1_16,
    analyse: FOLIA_GRILLE_ANALYSE,
    analyseNarrative: FOLIA_GRILLE_ANALYSE_NARRATIVE,
  },
  pieges: [
    {
      erreur: "Chiffrer l'accord de la mesure 4 (Do majeur, en ré mineur) comme une simple erreur ou une modulation",
      correction: "C'est le VII de la grille — la sous-tonique majeure, une couleur modale caractéristique de la Folia (et de bien des formules populaires antérieures à la tonalité codifiée), pas un accident ni un changement de tonalité.",
    },
    {
      erreur: "Considérer le Do naturel contre le Do# (m.6 et m.14) comme une faute d'écriture à corriger",
      correction: "C'est un faux-rapport (cross-relation) délibéré, une technique authentique de l'écriture ancienne — la sensible et la sous-tonique entendues presque simultanément, pas une erreur de conduite des voix.",
    },
    {
      erreur: "Chercher un compositeur ou une source unique pour « la » Folia",
      correction: "La grille est anonyme et antérieure à toute notion moderne de droit d'auteur — Corelli, Vivaldi, Marais, C.P.E. Bach, Liszt et Rachmaninov l'ont tous réalisée séparément, chacun à sa manière, sans qu'aucun ne l'ait inventée ni possédée.",
    },
  ],
  resume: [
    "La Folia est un cycle harmonique fixe de 16 mesures (i-V-i-VII-III-VII-iv6-V, deux fois), anonyme et d'origine ibérique — la plus ancienne et la plus reprise des grilles harmoniques occidentales.",
    "Deux signatures caractérisent la formule : la sous-tonique majeure (VII), une empreinte modale antérieure à la tonalité codifiée, et la cadence iv6-V portée par un sixième degré abaissé qui descend vers la dominante.",
    "Une grille harmonique partagée par des générations de compositeurs, sans qu'aucun ne la possède, est le même principe qu'un standard de jazz — une progression que tout le monde connaît et que chacun traverse à sa manière.",
  ],
};
