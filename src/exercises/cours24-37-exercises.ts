/**
 * exercises/cours24-37-exercises.ts
 * Harmonia — Exercices pour les cours 24 à 37 (chantier « vitrine » ③)
 *
 * Ce fichier regroupe les exercices des cours 24-37, écrits par lots successifs
 * (voir docs/superpowers/plans/2026-07-17-exercices-cours-24-37.md). Chaque
 * solution SATB en `regles: "ecole"` passe `validateSATB` avec 0 faute et 0
 * avertissement noté (invariant du corpus, cf. corpus-invariant.test.ts).
 *
 * LOT 1 — Cours 26 (Harmonisation DEM : basse donnée et soprano donné).
 *   - satb     : réalisations d'école complètes (basse donnée, soprano donné),
 *                cadences claires, sensible et 7es conduites selon les règles.
 *   - identify : raisonnement de choix d'accord de la méthode en 5 étapes.
 */

import type { Exercise } from "@/types/exercise";
import type { NoteName, NoteEntry } from "@/components/HarmoniaEditor";

function n(name: NoteName, octave: number): NoteEntry {
  return { name, octave };
}

// ════════════════════════════════════════════════════════════════════════════
// COURS 26 — Harmonisation DEM : basse donnée et soprano donné
// ════════════════════════════════════════════════════════════════════════════

const COURS26_EXERCISES: Exercise[] = [
  // ── identify 1 — la sensible à la basse impose V6 ──────────────────────────
  {
    id: "c26-sensible-basse-v6",
    type: "identify",
    cours: 26,
    difficulty: 1,
    tags: ["basse donnée", "sensible à la basse", "V6", "renversements"],
    concepts: ["sensible à la basse", "premier renversement de la dominante", "quinte diminuée à la basse"],
    question:
      "Dans une basse donnée en Do majeur, la note de basse est Si — la sensible — sur un temps fort. En style d'école, quel accord et quel état faut-il choisir ?",
    context: "Tonalité : Do majeur. Note de basse imposée : Si (7e degré, sensible).",
    options: [
      { id: "a", label: "V⁶ — premier renversement de la dominante (Sol–Si–Ré), la sensible étant la tierce de V à la basse", isCorrect: true },
      { id: "b", label: "VII° à l'état fondamental (Si–Ré–Fa)", isCorrect: false },
      { id: "c", label: "iii en 2e renversement (Mi–Sol–Si, Si à la basse)", isCorrect: false },
      { id: "d", label: "Une note étrangère : on ne l'harmonise pas", isCorrect: false },
    ],
    explanation:
      "La sensible à la basse impose V⁶ : Si est la tierce de Sol–Si–Ré, donc la dominante en premier renversement. On écarte le VII° à l'état fondamental, dont la quinte diminuée (Si–Fa) à la basse est instable et difficile à conduire. La sensible n'est jamais doublée et doit monter vers la tonique ; à la basse d'un V⁶, elle monte d'un demi-ton vers Do au changement d'accord.",
    hint: "La sensible ne peut pas rester fondamentale à la basse en style strict — cherchez de quel accord elle est la tierce.",
  },

  // ── identify 2 — choisir IV ou II6 pour préparer la cadence ────────────────
  {
    id: "c26-choix-iv-ii6",
    type: "identify",
    cours: 26,
    difficulty: 2,
    tags: ["basse donnée", "II6", "sous-dominante", "T-SD-D-T"],
    concepts: ["choix d'accord sur une note de basse", "II6 vers V", "logique fonctionnelle SD→D"],
    question:
      "Basse donnée en Do majeur : la basse est Fa, juste avant la cadence Sol–Do (V–I). Deux accords conviennent sur ce Fa — IV (Fa–La–Do) ou II⁶ (Ré–Fa–La, Fa à la basse). Lequel prépare le mieux la dominante, et pourquoi ?",
    context: "Contexte cadentiel : … Fa – Sol – Do, soit … ? – V – I en Do majeur.",
    options: [
      { id: "a", label: "II⁶ — sous-dominante mobile dont la basse Fa monte d'un degré vers Sol (V) : la progression SD→D est nette", isCorrect: true },
      { id: "b", label: "IV — parce qu'un accord doit toujours être à l'état fondamental avant une cadence", isCorrect: false },
      { id: "c", label: "Ni l'un ni l'autre : il faut un I⁶/⁴ à la place du Fa", isCorrect: false },
      { id: "d", label: "II⁶ — parce que le 2e renversement est le plus stable des renversements", isCorrect: false },
    ],
    explanation:
      "IV et II sont tous deux des sous-dominantes (ils partagent Fa et La), mais sur une basse Fa, le II⁶ oriente plus directement vers V : sa basse Fa monte d'un degré conjoint vers Sol, dessinant la progression II⁶–V–I, l'une des plus fréquentes de l'harmonisation. Le IV à l'état fondamental reste correct, mais moins « tendu » vers la dominante. Le choix relève de la logique fonctionnelle (étape 4 de la méthode), pas d'une règle d'état imposée.",
    hint: "Les deux accords sont des sous-dominantes ; regardez lequel fait avancer la basse vers la dominante par mouvement conjoint.",
  },

  // ── satb 1 — basse donnée en Do majeur (I – V6 – vi – IV – V – I) ──────────
  {
    id: "c26-basse-donnee-do",
    type: "satb",
    cours: 26,
    title: "Basse donnée en Do majeur",
    subtitle: "I – V⁶ – vi – IV – V – I · réalisation d'école",
    difficulty: 2,
    tags: ["basse donnée", "Do majeur", "V6", "cadence rompue", "cadence parfaite", "harmonisation DEM"],
    keySignature: "C",
    measures: ["I · Do", "V⁶ · Si", "vi · La", "IV · Fa", "V · Sol", "I · Do"],
    solution: [
      { soprano: n("G", 4), alto: n("E", 4), tenor: n("C", 4), bass: n("C", 3) },
      { soprano: n("G", 4), alto: n("D", 4), tenor: n("G", 3), bass: n("B", 2) },
      { soprano: n("A", 4), alto: n("E", 4), tenor: n("C", 4), bass: n("A", 2) },
      { soprano: n("A", 4), alto: n("F", 4), tenor: n("C", 4), bass: n("F", 2) },
      { soprano: n("B", 4), alto: n("D", 4), tenor: n("G", 3), bass: n("G", 2) },
      { soprano: n("C", 5), alto: n("E", 4), tenor: n("G", 3), bass: n("C", 3) },
    ],
    hint: "Analysez d'abord la basse : Do = I, Si (sensible) = V⁶, La = vi, Fa = IV, Sol = V, Do = I. La basse Si → La du V⁶ vers le vi descend d'un ton (geste séquentiel de Pachelbel) ; à la cadence finale, la sensible Si du soprano monte vers Do.",
    explanation:
      "Basse donnée typique du DEM : chaque note de basse révèle l'accord (fondamentale → état fondamental, tierce → 1er renversement). La sensible à la basse donne V⁶ (Sol–Si–Ré), qui enchaîne ici sur vi (cadence rompue) : la basse sensible descend vers La et ne double jamais la sensible dans les voix supérieures. Le soprano monte doucement Sol–Sol–La–La–Si–Do ; la cadence parfaite finale (V–I) résout la sensible Si → Do au soprano. Vérification : aucune quinte ni octave parallèle, tessitures et ordre des voix respectés.",
    concepts: ["basse donnée", "analyse des notes de basse", "V6", "cadence rompue", "cadence parfaite", "T-SD-D-T"],
    regles: "ecole",
  },

  // ── satb 2 — basse donnée en Sol majeur (I – vi – II6 – I6/4 – V – I) ──────
  {
    id: "c26-basse-donnee-sol",
    type: "satb",
    title: "Basse donnée en Sol majeur",
    subtitle: "I – vi – II⁶ – I⁶/⁴ – V – I · 6/4 de cadence",
    cours: 26,
    difficulty: 3,
    tags: ["basse donnée", "Sol majeur", "II6", "6/4 de cadence", "cadence parfaite", "harmonisation DEM"],
    keySignature: "G",
    measures: ["I · Sol", "vi · Mi", "II⁶ · Do", "I⁶/⁴ · Ré", "V · Ré", "I · Sol"],
    solution: [
      { soprano: n("D", 5), alto: n("G", 4), tenor: n("B", 3), bass: n("G", 2) },
      { soprano: n("B", 4), alto: n("G", 4), tenor: n("E", 4), bass: n("E", 3) },
      { soprano: n("C", 5), alto: n("A", 4), tenor: n("E", 4), bass: n("C", 3) },
      { soprano: n("B", 4), alto: n("G", 4), tenor: n("D", 4), bass: n("D", 3) },
      { soprano: n("A", 4), alto: n("F#", 4), tenor: n("D", 4), bass: n("D", 3) },
      { soprano: n("G", 4), alto: n("D", 4), tenor: n("B", 3), bass: n("G", 2) },
    ],
    hint: "La sous-dominante II⁶ (Do à la basse, tierce de La–Do–Mi) prépare le 6/4 de cadence : sur la basse de dominante Ré tenue, le I⁶/⁴ (Sol/Ré) résout sur V (Ré–Fa#–La) avant la tonique. La sensible Fa# (alto) bondit vers Ré à la cadence pour garder l'accord complet.",
    explanation:
      "Basse donnée de niveau DEM avec 6/4 de cadence. Le II⁶ (Ré–Fa–La… ici La–Do–Mi, Do à la basse) est une sous-dominante qui conduit à la formule cadentielle : la basse Ré porte d'abord le I⁶/⁴ (2e renversement de la tonique, temps fort), puis le V. Le I⁶/⁴ n'est pas une vraie tonique mais un double retard de la dominante — il résout obligatoirement sur V. À la cadence, la sensible Fa# est à une voix intérieure (alto) : elle est « frustrée » et descend vers Ré pour compléter l'accord de tonique (Sol–Si–Ré). Vérification : aucune quinte ni octave parallèle ; le passage vi→II⁶ et l'enchaînement II⁶→I⁶/⁴ se font par mouvement contraire à la basse.",
    concepts: ["basse donnée", "II6", "6/4 de cadence", "double retard de la dominante", "sensible frustrée", "cadence parfaite"],
    regles: "ecole",
  },

  // ── satb 3 — basse donnée en Ré mineur (Im – V6 – Im – iv – V – Im) ────────
  {
    id: "c26-basse-donnee-re-mineur",
    type: "satb",
    title: "Basse donnée en Ré mineur",
    subtitle: "Im – V⁶ – Im – iv – V – Im · mineur harmonique (DEM)",
    cours: 26,
    difficulty: 3,
    tags: ["basse donnée", "Ré mineur", "mineur harmonique", "V6", "sous-dominante mineure", "harmonisation DEM"],
    keySignature: "Dm",
    measures: ["Im · Ré", "V⁶ · Do#", "Im · Ré", "iv · Sol", "V · La", "Im · Ré"],
    solution: [
      { soprano: n("D", 5), alto: n("A", 4), tenor: n("F", 4), bass: n("D", 3) },
      { soprano: n("E", 5), alto: n("A", 4), tenor: n("E", 4), bass: n("C#", 3) },
      { soprano: n("D", 5), alto: n("A", 4), tenor: n("F", 4), bass: n("D", 3) },
      { soprano: n("D", 5), alto: n("Bb", 4), tenor: n("G", 4), bass: n("G", 2) },
      { soprano: n("C#", 5), alto: n("A", 4), tenor: n("E", 4), bass: n("A", 2) },
      { soprano: n("D", 5), alto: n("A", 4), tenor: n("F", 4), bass: n("D", 3) },
    ],
    hint: "En Ré mineur harmonique la sensible est Do# : à la basse (Do#), elle donne V⁶ et monte d'un demi-ton vers Ré. Le iv (Sol–Sib–Ré) est la sous-dominante mineure ; à la cadence finale V–Im, la sensible Do# du soprano monte vers Ré.",
    explanation:
      "Basse donnée en mineur harmonique : la sensible rehaussée Do# apparaît deux fois, portant chaque fois la dominante. À la basse (mesure 2), Do# impose V⁶ et se résout en montant d'un demi-ton vers Ré (Im). La sous-dominante mineure iv (Sol–Sib–Ré) précède la dominante ; sa liaison iv→V se fait par mouvement contraire à la basse (Sol→La) pour éviter les parallèles. La cadence parfaite V–Im résout la sensible Do# → Ré au soprano. L'alto tient un La quasi immobile (pédale intérieure). Vérification : aucune quinte ni octave parallèle, sensible jamais doublée.",
    concepts: ["basse donnée", "mineur harmonique", "sensible à la basse", "V6", "sous-dominante mineure", "cadence parfaite"],
    regles: "ecole",
  },

  // ── satb 4 — soprano donné en Do majeur (I6 – V6 – I – V – I) ──────────────
  {
    id: "c26-soprano-donne-do",
    type: "satb",
    title: "Soprano donné en Do majeur",
    subtitle: "Chant Mi–Ré–Do–Si–Do · I⁶ – V⁶ – I – V – I",
    cours: 26,
    difficulty: 2,
    tags: ["soprano donné", "Do majeur", "chant donné", "V6", "cadence parfaite", "harmonisation DEM"],
    keySignature: "C",
    measures: ["I⁶ · Mi", "V⁶ · Ré", "I · Do", "V · Si", "I · Do"],
    solution: [
      { soprano: n("E", 5), alto: n("G", 4), tenor: n("C", 4), bass: n("E", 3) },
      { soprano: n("D", 5), alto: n("G", 4), tenor: n("D", 4), bass: n("B", 2) },
      { soprano: n("C", 5), alto: n("G", 4), tenor: n("E", 4), bass: n("C", 3) },
      { soprano: n("B", 4), alto: n("G", 4), tenor: n("D", 4), bass: n("G", 2) },
      { soprano: n("C", 5), alto: n("G", 4), tenor: n("E", 4), bass: n("C", 3) },
    ],
    hint: "Le chant donné Mi–Ré–Do–Si–Do est ici entièrement fait de notes réelles. Cherchez pour chaque note un accord qui la contient : Mi = I⁶ (tierce à la basse), Ré = V⁶, Do = I, Si = V (sensible au soprano), Do = I. L'alto peut tenir un Sol commun à tous les accords.",
    explanation:
      "Soprano donné : on construit la basse et les voix intérieures sous une mélodie imposée. Chaque note du chant est ici réelle (aucune note étrangère) et occupe une position d'accord : Mi = tierce de I (I⁶), Ré = quinte de V (V⁶), Do = fondamentale de I, Si = tierce de V (sensible), Do = fondamentale de I. La basse dessine Mi–Si–Do–Sol–Do et le Sol de l'alto, commun aux cinq accords, devient une pédale intérieure qui garantit une conduite sans faute. À la cadence, la sensible Si du soprano monte vers Do. Vérification : aucune quinte ni octave parallèle, sensible du V⁶ (basse) et du V (soprano) jamais doublée.",
    concepts: ["soprano donné", "chant donné", "positions d'accord au soprano", "V6", "note commune", "cadence parfaite"],
    regles: "ecole",
  },
];

export { COURS26_EXERCISES };
