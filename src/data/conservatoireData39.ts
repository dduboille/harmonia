import type { CoursConservatoireData } from "./conservatoireData";
import {
  PATHETIQUE_GRAVE_MESURES_1_10,
  PATHETIQUE_GRAVE_ANALYSE,
  PATHETIQUE_GRAVE_ANALYSE_NARRATIVE,
} from "./conservatoire-pathetique-grave";

export const CONSERVATOIRE_DATA_39: CoursConservatoireData = {
  intuition:
    "La 7e diminuée est le caméléon de l'harmonie tonale — un seul accord, symétrique en tierces mineures, qui peut se réinterpréter et résoudre vers quatre toniques différentes.",
  reference: {
    badge: "Piston · Harmony",
    citation:
      "The diminished seventh chord, because of its symmetrical structure, is the most useful chord for enharmonic modulation.",
    auteur: "Walter Piston, 1941",
  },
  voix: [
    "vii°7 (7e diminuée sur la sensible) résout vers la tonique par mouvement conjoint des deux voix extrêmes",
    "Sa symétrie (empilement de tierces mineures égales) permet 4 réécritures enharmoniques, donc 4 résolutions possibles vers des tonalités différentes",
    "vii°7 peut se construire sur N'IMPORTE QUEL degré comme dominante secondaire (vii°7/V, vii°7/IV...), pas seulement sur la tonique",
  ],
  repertoire: {
    titre: "Sonate n°8 \"Pathétique\" op.13 — introduction Grave",
    compositeur: "L. van Beethoven",
    notes: ["C4", "Eb3", "G3", "C4", "F#3", "A3", "C4", "Eb4"],
    musicxml: PATHETIQUE_GRAVE_MESURES_1_10,
    analyse: PATHETIQUE_GRAVE_ANALYSE,
    analyseNarrative: PATHETIQUE_GRAVE_ANALYSE_NARRATIVE,
  },
  pieges: [
    {
      erreur: "Ne reconnaître la 7e diminuée que sous sa forme fondamentale, en tonique",
      correction: "vii°7 apparaît aussi bien en dominante secondaire (vii°7/V, vii°7/IV) qu'en pivot enharmonique — c'est le même accord, réinterprété",
    },
  ],
  resume: [
    "vii°7 = empilement de tierces mineures égales, symétrique, résout par mouvement conjoint vers la tonique",
    "Cette symétrie permet 4 réécritures enharmoniques : un même accord peut moduler vers 4 tonalités différentes",
    "Introduction Grave de la Pathétique (Beethoven) : vii°7 y assume tour à tour dominante secondaire, dominante principale, et pivot enharmonique",
  ],
};
