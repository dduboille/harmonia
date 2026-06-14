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

import type { IdentifyExercise, BuildExercise, SATBExercise } from "@/types/exercise";
import type { NoteName, NoteEntry } from "@/components/HarmoniaEditor";

function n(name: NoteName, octave: number): NoteEntry {
  return { name, octave };
}

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

// ════════════════════════════════════════════════════════════════════════════
// COURS 39 — Les 7èmes d'espèces (accords de septième sur chaque degré)
// ════════════════════════════════════════════════════════════════════════════

export const COURS39_EXERCISES: SATBExercise[] = [
  {
    id: "c39-ii7-v7-i-do",
    type: "satb",
    cours: 39,
    title: "II⁷ – V⁷ – I en Do majeur",
    subtitle: "La septième de II⁷ préparée puis résolue",
    difficulty: 1,
    tags: ["7èmes d'espèces", "II-V-I", "septième préparée", "Do majeur"],
    keySignature: "C",
    measures: ["II⁷ · Dm7", "V⁷ · G7", "I · C"],
    solution: [
      { soprano: n("C", 5), alto: n("A", 4), tenor: n("F", 4), bass: n("D", 3) },
      { soprano: n("B", 4), alto: n("F", 4), tenor: n("D", 4), bass: n("G", 3) },
      { soprano: n("C", 5), alto: n("E", 4), tenor: n("C", 4), bass: n("C", 3) },
    ],
    hint: "La 7e de Dm7 (C, au soprano) descend d'un degré vers B, la sensible de G7. La 7e de G7 (F, au ténor) descendra ensuite vers E.",
    explanation:
      "II⁷ – V⁷ – I, la cellule fondamentale du langage tonal. La 7e de Dm7 (C, soprano) est consonante dans l'accord puis se résout par mouvement conjoint descendant sur B (sensible de G7). De Dm7 à G7, F est commun (5e de Dm7 → 7e de G7), D est commun (fondamentale → quinte). Résolution de G7 vers I : la sensible B monte vers C, la 7e F descend vers E. L'accord de tonique est ici incomplet (tierce et fondamentale triplée, sans quinte) — résolution classique lorsque toutes les notes attractives de V⁷ se résolvent normalement. Vérification : aucune quinte ni octave parallèle.",
    concepts: ["septième d'espèce", "septième préparée", "résolution descendante de la 7e", "sensible", "II-V-I"],
  },
  {
    id: "c39-iv-maj7-v7-i-do",
    type: "satb",
    cours: 39,
    title: "IV⁷(M) – V⁷ – I en Do majeur",
    subtitle: "La septième majeure de la sous-dominante",
    difficulty: 2,
    tags: ["7èmes d'espèces", "septième majeure", "IV-V-I", "Do majeur"],
    keySignature: "C",
    measures: ["IV⁷ · Fmaj7", "V⁷ · G7", "I · C"],
    solution: [
      { soprano: n("E", 5), alto: n("C", 5), tenor: n("A", 4), bass: n("F", 3) },
      { soprano: n("D", 5), alto: n("B", 4), tenor: n("F", 4), bass: n("G", 3) },
      { soprano: n("C", 5), alto: n("G", 4), tenor: n("E", 4), bass: n("C", 3) },
    ],
    hint: "La 7e majeure de Fmaj7 (E, au soprano) descend d'un degré vers D (quinte de G7). La sensible B (alto) montera vers C.",
    explanation:
      "Fmaj7 contient une 7e majeure (E), dissonance plus tendue, qui se résout par mouvement conjoint descendant sur D (quinte de G7). De Fmaj7 à G7, F est commun (fondamentale → 7e de G7, donc 7e préparée). Sur G7 (complet : G B D F), la résolution amène la sensible B vers C ; comme elle est à une voix intérieure (alto), elle est ici 'frustrée' et bondit vers G pour compléter l'accord de tonique (C E G complet) — exception classique de la sensible intérieure. La 7e F descend vers E. Vérification : aucune quinte ni octave parallèle ; la 5e→8ve alto-basse de G7 à I se fait par mouvement contraire.",
    concepts: ["septième majeure", "septième préparée", "sensible frustrée", "résolution descendante de la 7e", "IV-V-I"],
  },
  {
    id: "c39-cycle-septiemes-do",
    type: "satb",
    cours: 39,
    title: "Chaîne de septièmes par quintes descendantes",
    subtitle: "VII⁷ – III⁷ – VI⁷ – II⁷ – V⁷ – I en Do majeur",
    difficulty: 3,
    tags: ["7èmes d'espèces", "cycle des quintes", "chaîne de septièmes", "Do majeur"],
    keySignature: "C",
    measures: ["VII⁷ · Bø7", "III⁷ · Em7", "VI⁷ · Am7", "II⁷ · Dm7", "V⁷ · G7", "I · C"],
    solution: [
      { soprano: n("A", 4), alto: n("F", 4), tenor: n("D", 4), bass: n("B", 2) },
      { soprano: n("G", 4), alto: n("E", 4), tenor: n("D", 4), bass: n("E", 3) },
      { soprano: n("G", 4), alto: n("E", 4), tenor: n("C", 4), bass: n("A", 2) },
      { soprano: n("F", 4), alto: n("D", 4), tenor: n("C", 4), bass: n("D", 3) },
      { soprano: n("F", 4), alto: n("D", 4), tenor: n("B", 3), bass: n("G", 2) },
      { soprano: n("E", 4), alto: n("C", 4), tenor: n("C", 4), bass: n("C", 3) },
    ],
    hint: "À chaque accord, la 7e (note dissonante) descend d'un degré conjoint vers la tierce de l'accord suivant, où elle est aussitôt préparée comme 7e suivante. La basse descend de quinte (ou monte de quarte) à chaque fois.",
    explanation:
      "Chaîne diatonique de septièmes par quintes descendantes — le mouvement harmonique le plus naturel. Chaque 7e est préparée (tenue depuis l'accord précédent comme note consonante) puis résolue par mouvement conjoint descendant sur la tierce de l'accord suivant : A (7e de Bø7) → G, D (7e de Em7) → C, G (7e de Am7) → F, C (7e de Dm7) → B (sensible), F (7e de G7) → E. Les accords alternent complets et incomplets (quinte omise) pour permettre cette conduite sans fautes. La sensible finale B monte vers C ; la tonique finale est incomplète (fondamentale triplée, sans quinte). Vérification : aucune quinte ni octave parallèle ; les rares passages 5e→8ve (alto-basse de VI⁷ à II⁷ et de V⁷ à I) se font par mouvement contraire.",
    concepts: ["chaîne de septièmes", "cycle des quintes", "septième préparée et résolue", "accords incomplets", "demi-diminué"],
  },
  {
    id: "c39-vii-dim7-i-mineur",
    type: "satb",
    cours: 39,
    title: "i – iv – VII°⁷ – i en La mineur",
    subtitle: "La septième diminuée résolue sur la tonique",
    difficulty: 3,
    tags: ["7èmes d'espèces", "septième diminuée", "La mineur", "sensible"],
    keySignature: "Am",
    measures: ["i · Am", "iv · Dm", "VII°⁷ · G#°7", "i · Am"],
    solution: [
      { soprano: n("A", 4), alto: n("E", 4), tenor: n("C", 4), bass: n("A", 2) },
      { soprano: n("A", 4), alto: n("F", 4), tenor: n("D", 4), bass: n("D", 3) },
      { soprano: n("B", 4), alto: n("F", 4), tenor: n("D", 4), bass: n("G#", 2) },
      { soprano: n("C", 5), alto: n("E", 4), tenor: n("C", 4), bass: n("A", 2) },
    ],
    hint: "L'accord de septième diminuée G#°7 (G#–B–D–F) est entièrement attractif : chaque note se résout par demi-ton ou ton. G# (sensible, basse) monte vers A ; F (7e) descend vers E.",
    explanation:
      "En La mineur harmonique, le VII°⁷ (G#°7 : G#–B–D–F) est un accord de septième diminuée, empilement de tierces mineures où toutes les notes sont dissonantes et attractives. De Dm à G#°7, D et F sont communs (la 7e F est ainsi préparée). Résolution sur i : la sensible G# (basse) monte vers A ; B monte vers C ; D descend vers C ; F (7e diminuée) descend vers E. L'accord de tonique Am (A–C–E) est complet (tierce doublée). Vérification : aucune quinte ni octave parallèle ; l'octave soprano-ténor de VII°⁷ à i se fait par mouvement contraire.",
    concepts: ["septième diminuée", "VII°7", "mineur harmonique", "septième préparée", "sensible", "résolution par demi-tons"],
  },
];
