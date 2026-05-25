import type { CoursConservatoireData } from "./conservatoireData";

export const CONSERVATOIRE_DATA_25: CoursConservatoireData = {
  intuition:
    "Le chromatisme, c'est la tonalité qui se regarde dans un miroir déformant — la même logique, mais poussée vers ses limites.",
  reference: {
    badge: "Schönberg · Harmonielehre",
    citation:
      "La dissonance n'est pas le contraire de la consonance — elle est une consonance lointaine que l'oreille doit encore apprendre à entendre.",
    auteur: "Arnold Schönberg, 1911",
  },
  voix: [
    "Le chromatisme ascendant (sensibilisation) renforce l'attraction vers la note cible par demi-ton montant",
    "Le chromatisme descendant (assombrissement) crée une tension expressive qui réclame une résolution par demi-ton descendant",
    "Toute note chromatique doit se résoudre dans le sens de son altération : ♯ monte, ♭ descend — jamais l'inverse",
  ],
  repertoire: {
    titre: "Prélude de Tristan und Isolde",
    compositeur: "Richard Wagner",
    notes: ["F3", "B3", "D#4", "G#4"],
  },
  pieges: [
    {
      erreur: "Chromatisme gratuit sans direction harmonique — accumulation de notes altérées sans logique de résolution",
      correction: "Chaque note chromatique crée une attraction vers sa résolution ; le chromatisme est une logique, pas un ornement",
    },
    {
      erreur: "Confusion enharmonique : traiter G# et Ab comme équivalents sans distinguer leur direction de résolution",
      correction: "G# monte vers A (chromatisme ascendant), Ab descend vers G (chromatisme descendant) — l'enharmonie change tout",
    },
    {
      erreur: "Perdre le centre tonal en accumulant les chromatismes sans point d'ancrage diatonique",
      correction: "Maintenir au moins un accord diatonique de référence avant d'enchaîner les chromatismes ou de moduler par enharmonie",
    },
  ],
  resume: [
    "Lignes chromatiques : basse de lamento (descente), sensibilisation (montée), broderie chromatique",
    "Accord de Tristan : Fa–Si–Ré#–Sol# — ambiguïté fonctionnelle intentionnelle, toujours débattue",
    "Modulation enharmonique : le dim7 donne accès à 4 tonalités différentes selon l'interprétation choisie",
  ],
};
