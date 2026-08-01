import type { CoursConservatoireData } from "./conservatoireData";
import {
  TRAUMEREI_MESURES_0_24,
  TRAUMEREI_ANALYSE,
  TRAUMEREI_ANALYSE_NARRATIVE,
} from "./conservatoire-traumerei";

export const CONSERVATOIRE_DATA_46: CoursConservatoireData = {
  intuition: "Le même thème, réharmonisé six fois vers six destinations différentes, révèle qu'une mélodie n'a pas UN sens harmonique — elle en a autant que d'harmonisations possibles, et chacune raconte une histoire différente.",
  reference: {
    badge: "Schumann · sur les Kinderszenen",
    citation: "Ce sont des réminiscences d'un adulte pour des adultes, et non des scènes destinées aux enfants.",
    auteur: "Robert Schumann, à propos des Kinderszenen (lettre à Clara Wieck, 1838)",
  },
  voix: [
    "Une même phrase mélodique peut être harmonisée vers des destinations tonales différentes à chaque retour — la forme-rêve, où l'on repart toujours du même seuil sans jamais se réveiller au même endroit.",
    "Un accord de septième diminuée peut fonctionner comme un simple pivot modulant, sans intention dramatique — un gond qui tourne sans grincer, la modulation comme pure association d'idées.",
    "Un point d'orgue peut être promu au rang d'évènement structurel à part entière : un accord de neuvième de dominante tenu pour lui-même, savouré avant même sa résolution.",
  ],
  repertoire: {
    titre: "« Träumerei » (Kinderszenen op. 15, n° 7)",
    compositeur: "Robert Schumann",
    notes: ["C4", "F4", "A4", "C5", "F5", "A5", "Bb5"],
    musicxml: TRAUMEREI_MESURES_0_24,
    analyse: TRAUMEREI_ANALYSE,
    analyseNarrative: TRAUMEREI_ANALYSE_NARRATIVE,
  },
  pieges: [
    {
      erreur: "Analyser les six retours du thème comme une simple répétition sans différence",
      correction: "Chaque retour du thème est réharmonisé vers une destination tonale différente (I, V, ii, IV avec détour par vi, puis I) — seules les strophes 1 et 5 sont, elles, rigoureusement identiques (vérifié note pour note).",
    },
    {
      erreur: "Considérer le point d'orgue de la mesure 22 comme une simple pause sans fonction harmonique",
      correction: "C'est un véritable accord (Sol9, la dominante de la dominante) tenu et savouré pour lui-même — le sommet expressif de toute la pièce, pas un silence ni une simple prolongation.",
    },
    {
      erreur: "Chercher une fonction dramatique (à la Beethoven) ou suspensive (à la Wagner) dans les accords de septième diminuée de cette pièce",
      correction: "Ici, la septième diminuée fonctionne comme un pivot modulant discret — un gond qui tourne sans grincer, la modulation comme association d'idées plutôt que comme drame ou tension prolongée.",
    },
  ],
  resume: [
    "Le même thème (l'anacrouse de Do, la montée vers Fa) revient six fois dans Träumerei, chaque fois réharmonisé vers une destination différente — I, V, ii, IV (avec détour par vi), puis I : le cercle de famille complet de Fa majeur.",
    "Deux accords de septième diminuée fonctionnent comme des portes tournantes silencieuses, faisant pivoter la phrase vers de nouvelles régions sans jamais dramatiser la transition.",
    "Le point d'orgue de la mesure 22 (un Sol9 tenu, la dominante de la dominante) est promu évènement structurel à part entière — la rêverie tenue dans la main, avant le réveil sur la pointe des pieds via un V9 complet.",
  ],
};
