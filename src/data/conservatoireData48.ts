import type { CoursConservatoireData } from "./conservatoireData";
import {
  VIVALDI_HIVER_MESURES_1_124,
  VIVALDI_HIVER_ANALYSE,
  VIVALDI_HIVER_ANALYSE_NARRATIVE,
} from "./conservatoire-vivaldi-hiver";

export const CONSERVATOIRE_DATA_48: CoursConservatoireData = {
  intuition: "Une « reprise littérale » annoncée dans une partition ne se vérifie jamais au premier coup d'œil sur le rythme ou le toucher — elle se vérifie à la basse, en suivant la seule ligne qui porte la progression réelle, dégagée de tout ce qui varie autour d'elle.",
  reference: {
    badge: "Vivaldi · Sonnet de « L'Hiver » (1725)",
    citation: "Aggiacciato tremar trà nevi algenti, al severo spirar d'orrido vento.",
    auteur: "Sonnet accompagnant l'édition originale des Quatre Saisons (1725), attribué à Vivaldi lui-même",
  },
  voix: [
    "La basse d'abord, toujours : c'est en suivant la seule ligne de basse, indépendamment d'une figuration qui change du tout au tout, qu'on identifie qu'une séquence harmonique se répète réellement.",
    "Une même sonorité peut changer de STATUT selon son contexte — texture tenue sans mouvement fonctionnel, ou fonction précise dans une cadence — le relevé doit d'abord établir CE QUE FAIT l'accord avant de le nommer.",
    "Vérifier une affirmation « littéralement identique » exige de comparer les bons repères : un décalage d'une seule mesure dans l'alignement peut faire conclure à tort qu'une reprise n'est pas exacte.",
  ],
  repertoire: {
    titre: "« L'Hiver » (L'Inverno), 1er mouvement des Quatre Saisons (arrangement piano développé)",
    compositeur: "Antonio Vivaldi",
    notes: ["F3", "Ab3", "C4", "F4", "G4", "Bb4", "Db5"],
    musicxml: VIVALDI_HIVER_MESURES_1_124,
    analyse: VIVALDI_HIVER_ANALYSE,
    analyseNarrative: VIVALDI_HIVER_ANALYSE_NARRATIVE,
  },
  pieges: [
    {
      erreur: "Confondre un accord TENU en texture (qui ne fonctionne pas encore) avec un accord fonctionnel qui prépare une cadence précise",
      correction: "Le même accord (Sol-Sib-Réb-Fa, une septième demi-diminuée) ouvre le mouvement comme pure texture — le froid, représenté physiquement — et le referme, cinquante mesures plus loin, comme cheville de cadence fonctionnelle (iiø6/5–V–i) : deux statuts biens distincts pour une même sonorité.",
    },
    {
      erreur: "Vérifier une « reprise littérale » en comparant les mesures dans l'ordre où elles sont mentionnées, sans vérifier l'alignement réel",
      correction: "Le cycle des quintes de la mesure 111 ne reprend PAS celui de la mesure 44 mesure pour mesure, mais celui de la mesure 45 — un décalage d'une station dans le cycle qu'un alignement naïf aurait manqué.",
    },
    {
      erreur: "Assembler un accord à partir de plusieurs relevés partiels sans vérifier l'ordre des arguments (hauteur, altération, octave)",
      correction: "Une erreur d'arguments décalés (déjà rencontrée sur le fichier de la Folia, cours 42) peut transformer silencieusement un accord juste en un accord faux — se relire systématiquement plutôt que de faire confiance à un premier jet.",
    },
  ],
  resume: [
    "L'ouverture du mouvement (m.1-22) construit une septième demi-diminuée (Sol-Sib-Réb-Fa) par accumulation, note après note, comme pure texture représentant le froid — dix mesures de dissonance gelée avant la première résolution en fa mineur.",
    "Le cycle des quintes complet (Do-Fa-Sib-Mib-Lab-Réb-Sol-Do, m.44-51) revient littéralement — même séquence de basse — à la mesure 111, mais dans une figuration entièrement différente : la basse d'abord est la seule façon fiable de le vérifier.",
    "La grande cadence finale (m.111-124) referme la boucle : le même accord du gel initial (Sol-Sib-Réb-Fa) y revient comme iiø6/5, une cheville de cadence parfaitement fonctionnelle — les deux vies du même accord, à cinquante mesures d'écart, dans l'écriture la plus orthodoxe du baroque.",
  ],
};
