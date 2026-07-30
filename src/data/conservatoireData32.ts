import type { CoursConservatoireData } from "./conservatoireData";
import {
  GIANT_STEPS_MESURES_1_98,
  GIANT_STEPS_ANALYSE,
  GIANT_STEPS_ANALYSE_NARRATIVE,
} from "./conservatoire-giant-steps";

export const CONSERVATOIRE_DATA_32: CoursConservatoireData = {
  intuition: "Coltrane n'a pas cassé les règles — il a découvert un niveau de règles plus profond que celui que tout le monde voyait.",
  reference: {
    badge: "Levine · The Jazz Theory Book",
    citation: "Les substitutions de Coltrane ne sont pas des erreurs harmoniques — ce sont des modulations ultra-rapides vers des tonalités liées par des tierces majeures.",
    auteur: "Mark Levine, 1995",
  },
  voix: [
    "Chaque degré d'accord a ses tensions 'disponibles' spécifiques : V7 accepte b9/#9/#11/b13 ; IMaj7 accepte 9/#11/13 ; IIm7 accepte 9/11. Hors de ces tensions, la note crée une dissonance non-stylistique.",
    "Le b9 (neuvième bémol) sonne sombre et espagnol ; le #9 (neuvième dièse) sonne 'Hendrix' et funk. Même accord de base, couleurs radicalement différentes.",
    "Giant Steps tourne autour de 3 tonalités à distance de tierce majeure : Si, Sol, Mib — un triangle parfait sur le cercle des quintes qui se parcourt en 16 mesures.",
  ],
  repertoire: {
    titre: "Giant Steps (arrangement piano en 7/4, Jacob Koller)",
    compositeur: "John Coltrane",
    notes: ["B2", "D2", "F#2", "G2", "Bb2", "Eb3"],
    musicxml: GIANT_STEPS_MESURES_1_98,
    analyse: GIANT_STEPS_ANALYSE,
    analyseNarrative: GIANT_STEPS_ANALYSE_NARRATIVE,
  },
  pieges: [
    {
      erreur: "Utiliser toutes les extensions simultanément",
      correction: "Les extensions s'empilent mais se contredisent : b9 et #9 ensemble créent un cluster inharmonieux. Choisir une couleur : sombre (b9) ou funky (#9) ou lydien (#11).",
    },
    {
      erreur: "Altérations sans direction de conduite de voix",
      correction: "Chaque altération implique une résolution : b9 résout vers la tierce de I, #11 vers la 5te de I. L'altération sans résolution n'a pas de sens fonctionnel.",
    },
    {
      erreur: "Confondre b9 et #9 (couleurs très différentes)",
      correction: "G7b9 = Sol–Si–Ré–Fa–Lab → sombre, expressif, flamenco. G7#9 = Sol–Si–Ré–Fa–La# → funky, électrique, 'Purple Haze'. Même fondamentale, effet complètement opposé.",
    },
  ],
  resume: [
    "Extensions altérées : b9 (sombre) · #9 (funky/Hendrix) · #11 (lydien dominant) · b5/b13 (altéré) — chacune avec sa couleur spécifique",
    "Tensions disponibles par degré : IMaj7 (9,#11,13) · IIm7 (9,11) · V7 (b9,#9,#11,b13) · Im7 (9,11,b13) · IIm7b5 (b9,11,b13)",
    "Giant Steps : cycle de tierces majeures Si–Sol–Mib — triangle parfait qui balaye 3 tonalités en 16 mesures à tempo rapide",
  ],
};
