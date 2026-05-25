import type { CoursConservatoireData } from "./conservatoireData";

export const CONSERVATOIRE_DATA_24: CoursConservatoireData = {
  intuition:
    "Un accord qui compresse toute la tension tonale en un point — comme un ressort prêt à se détendre vers la dominante.",
  reference: {
    badge: "Aldwell & Schachter · Harmony and Voice Leading",
    citation:
      "The augmented sixth chord is the most intensely dissonant pre-dominant chord in tonal music; its two characteristic tones resolve outward by half step to the dominant fifth.",
    auteur: "Aldwell & Schachter, 2003",
  },
  voix: [
    "La sixte augmentée (Lab–Fa#) résout toujours vers la quinte de la dominante (Sol–Sol) par mouvement contraire obligatoire",
    "La basse est invariablement sur le bVI (Lab en Do majeur) — le premier renversement est constitutif de l'accord",
    "La sixte allemande (bVI–I–bIII–#IV) est enharmoniquement identique à un V7/IV — sa résolution diffère radicalement",
  ],
  repertoire: {
    titre: "Der Wanderer, D.489",
    compositeur: "Franz Schubert",
    notes: ["G#3", "C4", "D#4", "F#4"],
  },
  pieges: [
    {
      erreur: "Oublier le mouvement contraire : faire monter Lab et Fa# ensemble",
      correction: "Lab descend vers Sol, Fa# monte vers Sol — les voix extrêmes convergent impérativement vers la quinte de dominante",
    },
    {
      erreur: "Résoudre la sixte allemande comme un V7/IV (vers IV) plutôt que vers V",
      correction: "Al+6 se résout vers V par mouvement contraire ; V7/IV se résout vers IV — même notes, résolutions opposées",
    },
    {
      erreur: "Placer la sixte augmentée hors du contexte pré-dominant (pas avant V ou I6/4–V)",
      correction: "La sixte augmentée n'est idiomatique que dans la zone pré-dominante, toujours immédiatement avant la dominante",
    },
  ],
  resume: [
    "3 types : It+6 (bVI–I–#IV), Fr+6 (bVI–I–II–#IV), Al+6 (bVI–I–bIII–#IV)",
    "Résolution universelle : sixte augmentée → quinte de dominante, par mouvement contraire",
    "Al+6 = enharmonique de V7/IV — mêmes notes, contextes et résolutions totalement différents",
  ],
};
