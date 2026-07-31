import type { CoursConservatoireData } from "./conservatoireData";
import {
  AUGURES_FICHE_MESURES_1_6,
  AUGURES_FICHE_ANALYSE,
  AUGURES_FICHE_ANALYSE_NARRATIVE,
} from "./conservatoire-augures-fiche";

export const CONSERVATOIRE_DATA_21: CoursConservatoireData = {
  intuition: "Un accord n'a pas besoin de bouger pour faire évènement — s'il ne change plus jamais et qu'on le frappe avec des accents qui tombent chaque fois ailleurs, c'est le rythme, seul, qui prend en charge tout le discours.",
  reference: {
    badge: "Stravinsky · sur Le Sacre du printemps",
    citation: "J'étais le vase à travers lequel passait Le Sacre.",
    auteur: "Igor Stravinsky (rapporté par Robert Craft)",
  },
  voix: [
    "Deux accords parfaitement consonants (une triade, une septième de dominante) peuvent être superposés à la distance la plus petite possible — un demi-ton — pour créer la collision la plus brutale de tout le vocabulaire polytonal.",
    "Une fois posé, un polyaccord peut rester totalement immobile pendant plusieurs mesures : c'est alors le rythme (des accents qui changent de place à chaque répétition) qui produit l'évènement musical, pas l'harmonie.",
    "La dissonance n'a pas qu'un seul rôle : elle peut être un évènement isolé, un drame, une suspension, un état, un vocabulaire — ou, comme ici, une pure percussion.",
  ],
  repertoire: {
    titre: "L'accord des Augures (fiche didactique)",
    compositeur: "D'après Igor Stravinsky, Le Sacre du printemps — Les Augures printaniers (1913)",
    notes: ["Eb3", "G3", "Bb3", "Db4", "Fb4", "Ab4", "Cb5"],
    musicxml: AUGURES_FICHE_MESURES_1_6,
    analyse: AUGURES_FICHE_ANALYSE,
    analyseNarrative: AUGURES_FICHE_ANALYSE_NARRATIVE,
  },
  pieges: [
    {
      erreur: "Chercher une évolution ou une résolution harmonique dans le martèlement de l'accord des Augures",
      correction: "Il n'y en a aucune : la verticalité reste rigoureusement identique du début à la fin du martèlement — seuls les accents rythmiques se déplacent d'une répétition à l'autre. L'analyse doit porter sur le rythme, pas chercher une progression qui n'existe pas.",
    },
    {
      erreur: "Confondre ce polyaccord avec celui de Petrouchka (Stravinsky, 1911) sous prétexte que les deux superposent deux objets consonants",
      correction: "Les deux sont aux extrêmes opposés de l'adjacence : Petrouchka superpose deux triades au TRITON (la distance maximale, aucune note ne se frotte), les Augures superposent une triade et une septième au DEMI-TON (la distance minimale, chaque note de la triade frotte une note de la septième).",
    },
    {
      erreur: "Analyser cette fiche comme une transcription du Sacre du printemps",
      correction: "C'est une pièce entièrement originale, composée pour illustrer le phénomène — Le Sacre du printemps reste protégé par le droit d'auteur en France jusqu'en 2042, et aucune de ses notes n'est reproduite ici.",
    },
  ],
  resume: [
    "L'accord des Augures (Stravinsky, 1913) superpose une triade majeure et une septième de dominante à un demi-ton de distance — la collision la plus brutale possible, puisque chaque note de la triade frotte directement une note de la septième.",
    "Une fois posé, l'accord ne change plus : c'est le rythme (des accents déplacés à chaque répétition) qui produit l'évènement, pas l'harmonie — la dissonance traitée comme percussion plutôt que comme tension.",
    "Comparé à l'accord de Petrouchka (deux triades au triton, 1911), celui des Augures choisit l'extrême opposé de l'adjacence — deux réponses de Stravinsky, à deux ans d'écart, à la même question : que faire de la fonction tonale ?",
  ],
};
