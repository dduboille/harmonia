import type { CoursConservatoireData } from "./conservatoireData";
import {
  GRIEG_PRAELUDIUM_MESURES_1_72,
  GRIEG_PRAELUDIUM_ANALYSE,
  GRIEG_PRAELUDIUM_ANALYSE_NARRATIVE,
} from "./conservatoire-grieg-praeludium";

export const CONSERVATOIRE_DATA_23: CoursConservatoireData = {
  intuition: "Imiter un style ancien n'efface jamais complètement son époque d'origine — chaque détour laisse une empreinte digitale du moment où il a été écrit, aussi discrète soit-elle.",
  reference: {
    badge: "Grieg · sur la Suite Holberg",
    citation: "Fra Holbergs tid — du temps de Holberg.",
    auteur: "Edvard Grieg, sous-titre de la Suite Holberg op. 40 (1884)",
  },
  voix: [
    "Un néo-archaïsme reproduit la CHARPENTE d'un style ancien (ici, le prélude baroque en moto perpetuo sur pédale) tout en laissant transparaître, dans les détails, les réflexes harmoniques de son époque réelle de composition.",
    "Une pédale peut hésiter entre majeur et mineur sans jamais se fixer — une ambiguïté modale que le baroque ne se serait pas permise, et qui trahit ici la main d'un compositeur du XIXe siècle.",
    "Une résolution déceptive (un ii-V qui surgit là où l'oreille attendait une résolution directe) peut se glisser au cœur même d'une page qui, par ailleurs, respecte scrupuleusement la syntaxe du XVIIIe siècle.",
  ],
  repertoire: {
    titre: "Suite Holberg op. 40, I. Praeludium",
    compositeur: "Edvard Grieg",
    notes: ["G1", "G2", "B3", "D4", "G4", "D5", "F#5", "A5"],
    musicxml: GRIEG_PRAELUDIUM_MESURES_1_72,
    analyse: GRIEG_PRAELUDIUM_ANALYSE,
    analyseNarrative: GRIEG_PRAELUDIUM_ANALYSE_NARRATIVE,
  },
  pieges: [
    {
      erreur: "Analyser ce prélude comme une pièce purement baroque, sans chercher les traces de son époque réelle de composition (1884)",
      correction: "La charpente est baroque (pédale de tonique, moto perpetuo, oscillations 6/4/diminué sur pédale de dominante), mais plusieurs détails trahissent le romantisme : les nuances fz/ff structurelles, la pédale de dominante qui hésite entre majeur et mineur (m.38-39), la résolution déceptive (m.40-41), et la onzième augmentée fugitive de la coda (m.70).",
    },
    {
      erreur: "Chercher une préparation classique à la résolution déceptive des mesures 40-41",
      correction: "Il n'y en a aucune : la pédale de dominante de mi (Si, 9 mesures) devrait résoudre sur mi mineur, mais glisse directement en ii7-V7 de Sol (Lam7-Ré7) — un pur réflexe romantique de subversion de l'attente, au cœur d'une page par ailleurs très régulière.",
    },
    {
      erreur: "Considérer la onzième augmentée de la mesure 70 comme une simple note de passage sans conséquence analytique",
      correction: "C'est une vraie couleur harmonique délibérée (un Fa# ajouté sur un accord de Do majeur) — une sonorité qu'aucune grammaire du XVIIIe siècle n'aurait produite, et qui signe, l'espace d'un instant, la main d'un compositeur du XIXe.",
    },
  ],
  resume: [
    "La Suite Holberg (Grieg, 1884) est un néo-archaïsme délibéré : un prélude baroque en moto perpetuo sur pédale de tonique, écrit avec les moyens harmoniques du romantisme tardif — quinze ans avant la Pavane de Ravel, quarante ans avant le néoclassicisme de Stravinsky.",
    "La pédale de dominante de mi (m.30-39, neuf mesures) alterne explicitement majeur et mineur (Ré# contre Ré naturel) avant de glisser en résolution déceptive (Lam7-Ré7) plutôt que de résoudre comme attendu — deux réflexes typiquement romantiques dans une machine par ailleurs baroque.",
    "Chaque imitation d'un style ancien laisse ses propres empreintes digitales : ici les nuances structurelles, l'ambiguïté modale de la pédale, la résolution déceptive, et la onzième augmentée de la coda (m.70) trahissent 1884 sous le masque du XVIIIe siècle.",
  ],
};
