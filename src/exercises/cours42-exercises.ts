/**
 * exercises/cours42-exercises.ts
 * Harmonia — Exercices interactifs de basse chiffrée (cours 42)
 *
 * Version « éditeur » des exercices de réalisation de la section 7 du cours 42
 * (Harmonisation au clavier & basse chiffrée). La BASSE est pré-remplie via
 * `initialNotes` et les chiffrages sont énoncés dans le sous-titre ; l'élève
 * réalise les voix supérieures dans HarmoniaEditor et est corrigé contre la
 * solution armée (identique aux corrigés gravés du composant Cours42).
 *
 * Tonalité : Do majeur. Convention notes : C D E F G A B + octave (Do4 = do central).
 * Voix : soprano (S), alto (A), tenor (T), bass (B).
 *
 * Note sur l'exercice 4 (marche de sixtes en faux-bourdon, 3 voix réelles,
 * ténor tacet) : l'éditeur SATB exige les quatre voix posées pour « Terminer »
 * et ne sait pas exprimer proprement une voix qui se tait. Le remplir à quatre
 * voix impliquerait d'abandonner le corrigé vérifié (l'ajout d'un ténor à une
 * chaîne de 6/3 parallèles crée des octaves/quintes parallèles sauf à réécrire
 * toute la disposition). Il reste donc en corrigé gravé dans Cours42.tsx
 * (EX_SIXTES) et n'est PAS proposé ici en exercice interactif.
 */

import type { SATBExercise } from "@/types/exercise";

function n(name: string, octave: number) {
  return { name: name as any, octave };
}

// ════════════════════════════════════════════════════════════════════════════
// COURS 42 — Basse chiffrée (réalisation SATB, Do majeur)
// ════════════════════════════════════════════════════════════════════════════

export const COURS42_EXERCISES: SATBExercise[] = [
  {
    id: "c42-basse-chiffree-i-v-i",
    type: "satb",
    cours: 42,
    title: "Basse chiffrée — Cadence fondamentale I–V–I",
    subtitle: "Réalisez : Do (5/3) – Sol (5/3) – Do (5/3)",
    difficulty: 1,
    tags: ["basse chiffrée", "cadence", "Do majeur", "I-V-I"],
    keySignature: "C",
    measures: ["Do 5/3 · I", "Sol 5/3 · V", "Do 5/3 · I"],
    // Basse donnée : l'élève complète Ténor, Alto, Soprano.
    initialNotes: { bass: [n("C", 3), n("G", 3), n("C", 3)] },
    solution: [
      { soprano: n("E", 4), alto: n("C", 4), tenor: n("G", 3), bass: n("C", 3) },
      { soprano: n("D", 4), alto: n("B", 3), tenor: n("G", 3), bass: n("G", 3) },
      { soprano: n("E", 4), alto: n("C", 4), tenor: n("G", 3), bass: n("C", 3) },
    ],
    hint: "Sensible Si3 (alto) → Do4 ; mouvement contraire basse/soprano ; pas de parallèles.",
    explanation: "Trois accords parfaits à l'état fondamental (5/3), la fondamentale doublée. La sensible Si (alto) monte au Do final ; le soprano descend (Mi → Ré → Mi) en mouvement contraire à la basse.",
    concepts: ["basse chiffrée", "accord parfait", "sensible", "mouvement contraire"],
  },
  {
    id: "c42-basse-chiffree-v65",
    type: "satb",
    cours: 42,
    title: "Basse chiffrée — Septième de dominante (V6/5)",
    subtitle: "Réalisez : Do (5/3) – Si (6/5) – Do (5/3)",
    difficulty: 2,
    tags: ["basse chiffrée", "V6/5", "septième de dominante", "Do majeur"],
    keySignature: "C",
    measures: ["Do 5/3 · I", "Si 6/5 · V6/5", "Do 5/3 · I"],
    initialNotes: { bass: [n("C", 3), n("B", 2), n("C", 3)] },
    solution: [
      { soprano: n("C", 4), alto: n("G", 3), tenor: n("E", 3), bass: n("C", 3) },
      { soprano: n("D", 4), alto: n("G", 3), tenor: n("F", 3), bass: n("B", 2) },
      { soprano: n("C", 4), alto: n("G", 3), tenor: n("E", 3), bass: n("C", 3) },
    ],
    hint: "Accord de 7e complet (aucun doublement) ; le triton Fa/Si résout vers l'intérieur (Fa3 → Mi3, Si2 → Do3) ; septième Fa3 (ténor) → Mi3.",
    explanation: "Le 6/5 note le 1er renversement de Sol7 (Sol-Si-Ré-Fa), basse Si. L'accord de septième se réalise complet, sans doublement. Le triton résout : la sensible Si (basse) monte au Do, la septième Fa (ténor) descend au Mi.",
    concepts: ["basse chiffrée", "V6/5", "renversement de septième", "résolution du triton", "septième"],
  },
  {
    id: "c42-basse-chiffree-64-cadentiel",
    type: "satb",
    cours: 42,
    title: "Basse chiffrée — Le 6/4 cadentiel",
    subtitle: "Réalisez : Fa (5/3) – Sol (6/4) – Sol (5/3) – Do (5/3)",
    difficulty: 3,
    tags: ["basse chiffrée", "6/4 cadentiel", "cadence", "Do majeur"],
    keySignature: "C",
    measures: ["Fa 5/3 · IV", "Sol 6/4 · I6/4", "Sol 5/3 · V", "Do 5/3 · I"],
    initialNotes: { bass: [n("F", 3), n("G", 3), n("G", 3), n("C", 3)] },
    solution: [
      { soprano: n("F", 4), alto: n("C", 4), tenor: n("A", 3), bass: n("F", 3) },
      { soprano: n("E", 4), alto: n("C", 4), tenor: n("G", 3), bass: n("G", 3) },
      { soprano: n("D", 4), alto: n("B", 3), tenor: n("G", 3), bass: n("G", 3) },
      { soprano: n("E", 4), alto: n("C", 4), tenor: n("G", 3), bass: n("C", 3) },
    ],
    hint: "Au 6/4, doubler la basse Sol (Basse + Ténor) ; résolution 6te → 5te (Mi4 → Ré4) et 4te → 3ce (Do4 → Si3) ; sensible Si3 → Do4.",
    explanation: "Sur la basse de dominante tenue (Sol), le 6/4 cadentiel pose la tonique « en suspens » (I6/4) puis résout sur V. On double la basse Sol ; la sixte (Mi, soprano) descend à la quinte (Ré) et la quarte (Do, alto) à la tierce (Si), sensible qui monte enfin au Do.",
    concepts: ["basse chiffrée", "6/4 cadentiel", "deuxième renversement", "retard", "sensible"],
  },
];
