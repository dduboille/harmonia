import type { CoursConservatoireData } from "./conservatoireData";
import {
  SYMPHONIE5_MESURES_1_502,
  SYMPHONIE5_ANALYSE,
  SYMPHONIE5_ANALYSE_NARRATIVE,
} from "./conservatoire-symphonie5";

export const CONSERVATOIRE_DATA_37: CoursConservatoireData = {
  intuition: "L'analyse schenkérienne n'explique pas pourquoi la musique est belle — elle montre la charpente osseuse sous la peau. Savoir que la Joconde est de la peinture sur bois ne la rend ni plus ni moins belle.",
  reference: {
    badge: "Schenker · Der freie Satz, 1935",
    citation: "Toute musique tonale est une ornementale de l'Ursatz — la ligne fondamentale descendante vers la tonique, soutenue par la basse qui monte de I vers V et redescend vers I. Le reste est prolongation.",
    auteur: "Heinrich Schenker, Der freie Satz, 1935",
  },
  voix: [
    "L'analyse motivique de Beethoven révèle que la 5e Symphonie entière est construite sur 4 notes (Sol–Sol–Sol–Mib). Pas seulement le premier mouvement — les 4 mouvements. C'est le même motif transformé à chaque fois. Voir ce niveau structural, c'est comprendre la composition à un niveau que l'analyse d'accords ne permet pas.",
    "La réduction schenkérienne n'est pas une simplification — c'est une radiographie. À chaque niveau de réduction, on voit une couche de signification différente. Le niveau 4 (surface) montre les accords ; le niveau 1 (Urlinie) montre l'ossature de toute l'œuvre.",
    "Brahms est le maître de l'unité motivique : dans ses quatuors, un seul intervalle (souvent une seconde ou une tierce) revient sous toutes les transformations possibles pendant 30 minutes. Identifier ce motif générateur est le premier geste analytique.",
  ],
  repertoire: {
    titre: "Symphonie n° 5 en do mineur, 1er mouvement (intégral)",
    compositeur: "Ludwig van Beethoven (transcription pour piano d'Ernest Pauer)",
    notes: ["Sol:4", "Sol:4", "Sol:4", "Mib:4"],
    musicxml: SYMPHONIE5_MESURES_1_502,
    analyse: SYMPHONIE5_ANALYSE,
    analyseNarrative: SYMPHONIE5_ANALYSE_NARRATIVE,
  },
  pieges: [
    {
      erreur: "Confondre réduction schenkérienne et simplification",
      correction: "La réduction schenkérienne ne supprime pas des notes au hasard — elle identifie les notes structurelles selon des critères précis (durée, position métrique, rôle harmonique). Les notes ornementales ne sont pas 'moins importantes' — elles sont la surface expressive de la musique.",
    },
    {
      erreur: "Chercher le motif de la 5e Symphonie uniquement dans le rythme",
      correction: "Le motif Sol–Sol–Sol–Mib est à la fois rythmique (3 croches + noire) ET mélodique (tierce mineure descendante). Les deux dimensions sont inséparables. Dans le 2e mouvement, le motif rythmique est transformé mais l'intervalle mélodique (tierce) reste le lien.",
    },
    {
      erreur: "Analyser chaque accord de surface sans chercher la structure profonde",
      correction: "L'analyse accord-par-accord ('Do–Sol–Fa–Do') ne révèle pas la structure de l'œuvre. La réduction schenkérienne montre que ces 4 accords peuvent être une simple prolongation de I (Do majeur) avec une broderie mélodique. Le sens structural est différent du sens de surface.",
    },
  ],
  resume: [
    "Schenker : Urlinie (ligne descendante 5̂-4̂-3̂-2̂-1̂) + Bassbrechung (basse I→V→I) = Ursatz — ossature de toute musique tonale",
    "4 niveaux de réduction : surface (tous accords) → intermédiaire → régions tonales → structure (Urlinie seule)",
    "Analyse motivique : identifier un motif de 2-4 notes → suivre ses transformations (transposition, inversion, augmentation, fragmentation) dans toute l'œuvre",
  ],
};
