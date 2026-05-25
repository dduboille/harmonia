import type { CoursConservatoireData } from "./conservatoireData";

export const CONSERVATOIRE_DATA_27: CoursConservatoireData = {
  intuition: "Une symphonie de 40 minutes est souvent I–V–I à grande échelle avec des ornements.",
  reference: {
    badge: "Schenker · Der freie Satz",
    citation: "Toute musique tonale repose sur une structure fondamentale identique : une descente du soprano et un arpège de quinte à la basse. Le reste n'est qu'ornementation.",
    auteur: "Heinrich Schenker, 1935",
  },
  voix: [
    "Distinguer harmonie de surface (tous les accords) et harmonie structurelle (les piliers tonaux) : une prolongation peut faire 'durer' un accord pendant plusieurs mesures.",
    "L'Urlinie descend toujours vers 1̂ (tonique) — repérer la note de départ (3̂, 5̂ ou 8̂) et tracer la descente mélodique fondamentale.",
    "Ne pas analyser chaque accord isolément : chercher le groupe fonctionnel (T, SD, D) puis la prolongation qui le réalise.",
  ],
  repertoire: {
    titre: "Choral BWV 227 (réduction)",
    compositeur: "Johann Sebastian Bach",
    notes: ["Do:3", "Mi:3", "Sol:3", "Do:4", "Si:3", "Sol:3", "La:3", "Do:4"],
  },
  pieges: [
    {
      erreur: "Analyser chaque accord sans voir la structure d'ensemble",
      correction: "Commencer par identifier les piliers : début (I), cadence médiane, cadence finale (V–I). Tout le reste est prolongation.",
    },
    {
      erreur: "Confondre harmonie de surface et harmonie structurelle",
      correction: "Un accord de broderie ou de passage (entre deux accords d'un même pilier) n'est pas un pilier structural — il prolonge l'accord principal.",
    },
    {
      erreur: "Réduction trop rapide sans étapes",
      correction: "Réduire en 3 étapes : 1) noter tous les accords, 2) regrouper par fonction (T/SD/D), 3) identifier la prolongation principale.",
    },
  ],
  resume: [
    "Analyse en couches : surface (tous les accords) → intermédiaire (fonctions regroupées) → profond (une seule prolongation T→D→T)",
    "Urlinie : descente du soprano de 3̂, 5̂ ou 8̂ vers 1̂ — ligne fondamentale du discours mélodique",
    "Bassbrechung : arche de basse I–V–I — la structure tonale à l'échelle de l'œuvre entière",
  ],
};
