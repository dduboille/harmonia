import type { CoursConservatoireData } from "./conservatoireData";
import {
  BWV775_MESURES_1_52,
  BWV775_ANALYSE,
  BWV775_ANALYSE_NARRATIVE,
} from "./conservatoire-bwv775";

export const CONSERVATOIRE_DATA_40: CoursConservatoireData = {
  intuition: "Un sujet d'invention peut contenir, dans son seul ambitus mélodique, l'accord qui structurera toute la pièce — la ligne et la verticalité ne sont jamais que deux façons d'entendre la même tension.",
  reference: {
    badge: "Bach · en tête de ses Inventions",
    citation: "Une manière sincère... d'apprendre à jouer proprement à deux voix, mais aussi, en progressant, à bien traiter trois voix obligées.",
    auteur: "J.S. Bach, préface aux Inventions et Sinfonies (1723)",
  },
  voix: [
    "Un sujet peut dessiner mélodiquement le même intervalle qu'un accord fondamental de la tonalité — ici, l'ambitus du sujet (Do#-Si♭) trace exactement une septième diminuée, l'accord qui reviendra plus tard verticalisé.",
    "Un trille écrit (des notes réellement alternées, pas un simple symbole d'ornement) peut fonctionner comme une pédale : la voix qui semble immobile est en réalité celle qui vibre le plus, pendant que l'autre voix déroule tout le mouvement harmonique.",
    "Une pièce entièrement en mineur peut refuser de trancher jusqu'au bout : conclure sur un octave nu, sans tierce, laisse la question majeur/mineur ouverte au tout dernier accord.",
  ],
  repertoire: {
    titre: "Invention n° 4 en ré mineur, BWV 775",
    compositeur: "J.S. Bach",
    notes: ["D4", "E4", "F4", "G4", "A4", "Bb4", "C#4"],
    musicxml: BWV775_MESURES_1_52,
    analyse: BWV775_ANALYSE,
    analyseNarrative: BWV775_ANALYSE_NARRATIVE,
  },
  pieges: [
    {
      erreur: "Chercher des accords écrits pour analyser l'harmonie de cette invention",
      correction: "Il n'y en a aucun : les deux voix sont strictement mélodiques du début à la fin. L'harmonie doit être déduite de la rencontre verticale des deux lignes à chaque instant, jamais lue directement sur la partition.",
    },
    {
      erreur: "Confondre le trille écrit des mesures 19-21 et 29-33 avec une simple ornementation décorative sans conséquence structurelle",
      correction: "Ces trilles fonctionnent comme de vraies pédales harmoniques : la note qui semble se répéter immobile porte en réalité toute la tension (une pédale de tonique m.19-21, le ♭6→5 de la dominante m.29-33), pendant que l'autre voix assure le mouvement.",
    },
    {
      erreur: "Analyser la basse en gamme descendante de la mesure 39 comme une simple ligne mélodique sans lien avec l'harmonie",
      correction: "C'est un accord de septième diminuée (vii°7 de sol mineur) entièrement déployé en ligne — les 4 notes de l'accord (Fa#-La-Do-Mib) sont toutes présentes dans la gamme descendante, entourées de 2 notes de passage.",
    },
  ],
  resume: [
    "Le sujet de l'Invention n° 4 (Bach, BWV 775) dessine mélodiquement une septième diminuée (ambitus Do#-Si♭) — le même accord qui reviendra verticalisé à la mesure 50, juste avant la cadence finale.",
    "Deux trilles écrits (Ré-Do puis Fa-Mi, jusqu'à 5 mesures d'affilée) fonctionnent comme de vraies pédales harmoniques : la voix immobile en apparence porte la tension pendant que l'autre voix assure tout le mouvement.",
    "La pièce s'achève sur un octave nu (Ré-Ré), sans tierce — après cinquante-deux mesures de mineur harmonique, le dernier accord refuse de trancher entre majeur et mineur.",
  ],
};
