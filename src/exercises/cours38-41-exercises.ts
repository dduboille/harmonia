/**
 * exercises/cours38-41-exercises.ts
 * Harmonia — Exercices pour les cours 38 à 41
 *
 * Types couverts :
 * - identify : QCM sur les notes étrangères (notes de passage, broderies, retards,
 *              appogiatures, échappées, anticipations)
 * - build    : construire une figure ornementale (note de passage, résolution d'un retard)
 *
 * NB : le système `build` vérifie l'ENSEMBLE des notes (sans ordre ni octave) —
 * `correctNotes` est une liste de noms de notes (ex : "C", "F#", "Bb").
 */

import type { IdentifyExercise, BuildExercise } from "@/types/exercise";

// ════════════════════════════════════════════════════════════════════════════
// COURS 38 — Les notes étrangères
// ════════════════════════════════════════════════════════════════════════════

export const COURS38_EXERCISES: (IdentifyExercise | BuildExercise)[] = [
  {
    id: "c38-note-de-passage",
    type: "identify",
    cours: 38,
    difficulty: 1,
    tags: ["notes étrangères", "note de passage", "mouvement conjoint"],
    concepts: ["note de passage", "mouvement conjoint entre deux notes réelles", "temps faible"],
    question:
      "Sur un accord de Do majeur (C–E–G), la voix supérieure joue G – F – E (croches). Quelle est la nature de la note F ?",
    context: "Accord tenu : C majeur (C–E–G). Mélodie : G → F → E, F sur un temps faible.",
    options: [
      { id: "a", label: "Une note réelle de l'accord", isCorrect: false },
      { id: "b", label: "Une note de passage", isCorrect: true },
      { id: "c", label: "Un retard", isCorrect: false },
      { id: "d", label: "Une anticipation", isCorrect: false },
    ],
    explanation:
      "F n'appartient pas à l'accord de C (C–E–G). Elle relie deux notes réelles, G et E, par mouvement conjoint descendant et tombe sur un temps faible : c'est une note de passage. La note de passage comble l'intervalle de tierce entre deux notes de l'accord par degrés conjoints.",
    hint: "La note se situe entre deux notes réelles, atteinte et quittée par degré conjoint, sur un temps faible.",
  },
  {
    id: "c38-broderie",
    type: "identify",
    cours: 38,
    difficulty: 1,
    tags: ["notes étrangères", "broderie", "note voisine"],
    concepts: ["broderie", "note étrangère encadrée par la même note réelle", "broderie inférieure"],
    question:
      "Sur un accord de Do majeur, la voix joue E – D – E. Quelle est la nature de la note D ?",
    context: "Accord tenu : C majeur (C–E–G). Mélodie : E → D → E.",
    options: [
      { id: "a", label: "Une note de passage", isCorrect: false },
      { id: "b", label: "Une broderie (inférieure)", isCorrect: true },
      { id: "c", label: "Une appogiature", isCorrect: false },
      { id: "d", label: "Une échappée", isCorrect: false },
    ],
    explanation:
      "D est une note étrangère encadrée des deux côtés par la même note réelle E (note de l'accord). Comme elle est plus basse que la note brodée, c'est une broderie inférieure. La broderie quitte une note réelle par degré conjoint puis y revient.",
    hint: "La note étrangère est précédée ET suivie de la même note réelle.",
  },
  {
    id: "c38-build-note-de-passage",
    type: "build",
    cours: 38,
    difficulty: 2,
    tags: ["notes étrangères", "note de passage", "construction"],
    concepts: ["note de passage", "remplir une tierce par mouvement conjoint", "gamme de Do"],
    question:
      "Sur un accord de C majeur, on veut relier C (note réelle) à E (note réelle) par une note de passage diatonique sur le temps faible intermédiaire. Sélectionne les trois notes de la figure complète (C → ? → E).",
    correctNotes: ["C", "D", "E"],
    keySignature: "C",
    explanation:
      "Pour relier C et E (intervalle de tierce) par mouvement conjoint ascendant, on insère D, la note diatonique intermédiaire de la gamme de Do. La figure C – D – E place D, étrangère à l'accord, en note de passage sur le temps faible. La note de passage comble l'intervalle de tierce sans rupture.",
    hint: "Entre C et E, la seule note diatonique intermédiaire est le IIe degré de Do majeur.",
  },
  {
    id: "c38-build-retard-4-3",
    type: "build",
    cours: 38,
    difficulty: 3,
    tags: ["notes étrangères", "retard", "retard 4-3", "résolution"],
    concepts: ["retard 4-3", "dissonance préparée puis résolue", "résolution conjointe descendante"],
    question:
      "Sur l'accord de dominante G (G–B–D) en Do majeur, on réalise un retard 4–3 à la voix supérieure : la quarte C (prolongée de l'accord précédent) se résout sur la tierce de G. Sélectionne les deux notes successives de la voix supérieure (retard puis résolution).",
    correctNotes: ["C", "B"],
    keySignature: "C",
    explanation:
      "Le retard 4–3 : sur G (G–B–D), la note C forme une quarte au-dessus de la basse G — c'est la dissonance retardée, prolongée de l'accord précédent. Elle se résout par mouvement conjoint descendant sur B, la tierce de G (intervalle de tierce au-dessus de la basse). On a donc C (retard, dissonance) → B (résolution, note réelle). Le retard tombe sur un temps fort et se résout en descendant d'un degré.",
    hint: "La quarte au-dessus de G est C ; sa résolution descend d'un degré conjoint vers la tierce de l'accord.",
  },
];
