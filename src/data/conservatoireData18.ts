import type { CoursConservatoireData } from "./conservatoireData";
import {
  SIBELIUS_OP76_2_MESURES_1_72,
  SIBELIUS_OP76_2_ANALYSE,
  SIBELIUS_OP76_2_ANALYSE_NARRATIVE,
} from "./conservatoire-sibelius-op76-2";

export const CONSERVATOIRE_DATA_18: CoursConservatoireData = {
  intuition: "Une strophe entière de 36 mesures, rejouée presque à l'identique — et la vérification note à note montre que « presque » est le mot juste : la répétition la plus stricte laisse toujours passer quelques écarts minuscules, à qui sait les chercher.",
  reference: {
    badge: "Sibelius · sur la symphonie (à Mahler, 1907)",
    citation: "J'admirais sa sévérité de style et la logique profonde qui crée un lien intérieur entre tous les motifs.",
    auteur: "Jean Sibelius, rapporté par Karl Ekman",
  },
  voix: [
    "Répéter un matériau à l'identique n'est jamais totalement neutre : la reprise d'une grande section peut se permettre d'infimes redistributions (un voicing changé, une note mélodique substituée) qui passent inaperçues à l'oreille sans jamais être un copier-coller absolu.",
    "Une même cellule mélodique (ici, un tétracorde descendant) peut être développée en changeant uniquement son habillage harmonique — le tétracorde reste, les accords qui l'accompagnent changent.",
    "La technique du développement motivique ne se limite pas à un court motif : elle peut s'appliquer à l'échelle d'une strophe entière, y compris quand cette strophe est majoritairement répétée sans changement.",
  ],
  repertoire: {
    titre: "Étude op. 76 n°2 (Treize Pièces)",
    compositeur: "Jean Sibelius",
    notes: ["A2", "E5", "E4", "A3", "C4", "A4"],
    musicxml: SIBELIUS_OP76_2_MESURES_1_72,
    analyse: SIBELIUS_OP76_2_ANALYSE,
    analyseNarrative: SIBELIUS_OP76_2_ANALYSE_NARRATIVE,
  },
  pieges: [
    {
      erreur: "Croire qu'une grande reprise (une section entière rejouée) est forcément un copier-coller à 100%",
      correction: "La vérification note à note de cette pièce montre que 30 des 36 mesures de la reprise sont strictement identiques — mais 6 ne le sont pas (un voicing redistribué à l'entrée, 3 substitutions mélodiques isolées, et la clausule finale qui varie explicitement). Une répétition à grande échelle laisse presque toujours passer de menus écarts.",
    },
    {
      erreur: "Chercher une modulation réelle dans les couleurs harmoniques inhabituelles de cette pièce (♭13, tétracorde andalou)",
      correction: "La pièce reste en la mineur du début à la fin — la ♭13 éolienne du V7 et le tétracorde phrygien de la section B sont des COULEURS posées sur la même tonique, pas des modulations vers une autre tonalité.",
    },
    {
      erreur: "Analyser la descente ♭VII7-♭VI∆7-V7-i comme une suite d'accords sans lien entre eux",
      correction: "Ces quatre accords harmonisent une seule et même ligne mélodique fixe (le tétracorde phrygien La-Sol-Fa-Mi) — chaque accord est au service de cette ligne, pas une progression fonctionnelle indépendante d'elle.",
    },
  ],
  resume: [
    "Le développement motivique peut s'appliquer à l'échelle d'une strophe entière : cette étude de Sibelius répète une strophe de 36 mesures presque à l'identique, mais pas totalement — 6 mesures sur 36 portent d'infimes écarts, dont la clausule finale qui varie explicitement.",
    "Une même ligne mélodique fixe (ici, un tétracorde phrygien descendant) peut être développée en changeant seulement son habillage harmonique : le tétracorde reste, les accords qui l'accompagnent (♭VII7-♭VI∆7-V7-i) sont nouveaux.",
    "Le paradoxe de la répétition : répéter à l'identique et transformer un détail minuscule peuvent produire, à l'oreille, l'impression d'une seule et même chose.",
  ],
};
