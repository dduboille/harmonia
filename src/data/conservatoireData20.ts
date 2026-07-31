import type { CoursConservatoireData } from "./conservatoireData";
import {
  BERLIOZ_MARCHE_MESURES_1_178,
  BERLIOZ_MARCHE_ANALYSE,
  BERLIOZ_MARCHE_ANALYSE_NARRATIVE,
} from "./conservatoire-berlioz-marche";

export const CONSERVATOIRE_DATA_20: CoursConservatoireData = {
  intuition: "L'harmonie peut cesser de représenter un sentiment pour raconter une action : Berlioz interrompt une mélodie en plein vol et la remplace par une chute d'octave — la résolution refusée, poussée jusqu'à devenir un geste littéral.",
  reference: {
    badge: "Berlioz · Mémoires",
    citation: "Je passai la nuit à rêver de mort, avec un enthousiasme frénétique.",
    auteur: "Hector Berlioz, à propos de la genèse de la Symphonie fantastique",
  },
  voix: [
    "Une même formule mélodique (ici, une gamme descendante) peut porter deux affects opposés selon son contexte rythmique — le lamento devient marche funèbre sans qu'une seule note ne change.",
    "Une interruption physique (une phrase coupée net, remplacée par un saut brusque) peut fonctionner comme un vrai geste narratif — l'harmonie ne colore plus une émotion, elle raconte un évènement précis.",
    "Un changement de mode (mineur vers majeur) peut être utilisé comme une didascalie plutôt qu'une simple couleur — ici, la bascule marque littéralement le passage d'une scène à une autre.",
  ],
  repertoire: {
    titre: "Symphonie fantastique, 4e mouvement — Marche au supplice (arr. trio à cordes)",
    compositeur: "Hector Berlioz",
    notes: ["G3", "Bb3", "G2", "G4", "F4", "Eb4", "D4", "B4"],
    musicxml: BERLIOZ_MARCHE_MESURES_1_178,
    analyse: BERLIOZ_MARCHE_ANALYSE,
    analyseNarrative: BERLIOZ_MARCHE_ANALYSE_NARRATIVE,
  },
  pieges: [
    {
      erreur: "Chercher un accord complexe ou chromatique pour expliquer l'effet du « couperet » (m.169)",
      correction: "C'est l'inverse : l'accord y est dépouillé à l'extrême (un simple Sol, sans tierce), et l'effet vient d'un geste RYTHMIQUE — une chute d'octave synchronisée entre les instruments extrêmes — pas d'une harmonie inhabituelle.",
    },
    {
      erreur: "Analyser le thème 2 (m.62, en Si♭ majeur) comme une modulation classique préparée par une dominante",
      correction: "Aucune préparation : le relatif majeur s'installe directement, par simple juxtaposition de blocs contrastés — la fanfare de la foule succède au thème funèbre sans transition, à dessein.",
    },
    {
      erreur: "Traiter le passage final au majeur (m.170) comme une simple tierce picarde décorative",
      correction: "Ici le changement de mode a une fonction NARRATIVE explicite (la foule qui exulte après l'exécution) — le mode devient une didascalie, pas seulement une couleur harmonique.",
    },
  ],
  resume: [
    "Une gamme descendante de sol mineur (thème 1) reprend la vieille formule du lamento baroque et la transforme, par le seul contexte rythmique, en marche funèbre — la preuve que le sens musical ne loge jamais dans la hauteur seule.",
    "Le couperet (m.169) interrompt l'idée fixe en plein vol et la remplace par une chute d'octave synchronisée aux deux instruments extrêmes — la résolution refusée poussée jusqu'au geste littéral.",
    "Le basculement final en Sol majeur (m.170) fonctionne comme une didascalie plutôt qu'une couleur : l'harmonie cesse de représenter un affect pour raconter une action, la foule qui exulte.",
  ],
};
