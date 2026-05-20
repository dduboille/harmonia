export type NEType =
  | "reelle"
  | "passage"
  | "broderie"
  | "retard"
  | "anticipation"
  | "appoggiature"
  | "echappee";

export interface NENote {
  pitch: string;           // "C4", "D4", "G#4"...
  duration: "quarter" | "half" | "eighth";
  position: number;        // beat position (1-based)
}

export interface NESolution {
  pitch: string;
  type: NEType;
  explication: string;
}

export interface NEExercise {
  id: string;
  titre: string;
  difficulte: 1 | 2 | 3;
  accord: string;          // "C", "G7", "Am"...
  accordLabel: string;     // "Do majeur", "Sol7"...
  tonalite: string;        // "Do majeur"
  contexte?: string;       // contextual info for retards/anticipations
  notes: NENote[];
  solution: NESolution[];
}

// ── 20 exercices ───────────────────────────────────────────────────────────────

export const NE_EXERCISES: NEExercise[] = [

  // ── Niveau 1 — Passage et Broderie (8 exercices) ──────────────────────────

  {
    id: "ne-01",
    titre: "Note de passage ascendante",
    difficulte: 1,
    accord: "C",
    accordLabel: "Do majeur",
    tonalite: "Do majeur",
    notes: [
      { pitch: "C4", duration: "quarter", position: 1 },
      { pitch: "D4", duration: "quarter", position: 2 },
      { pitch: "E4", duration: "quarter", position: 3 },
    ],
    solution: [
      { pitch: "C4", type: "reelle",   explication: "Do est la fondamentale de l'accord de Do majeur (Do–Mi–Sol)." },
      { pitch: "D4", type: "passage",  explication: "Ré relie Do et Mi par mouvement conjoint ascendant sur un temps faible — note de passage." },
      { pitch: "E4", type: "reelle",   explication: "Mi est la tierce de Do majeur — note réelle." },
    ],
  },

  {
    id: "ne-02",
    titre: "Broderie supérieure",
    difficulte: 1,
    accord: "C",
    accordLabel: "Do majeur",
    tonalite: "Do majeur",
    notes: [
      { pitch: "E4", duration: "quarter", position: 1 },
      { pitch: "D4", duration: "quarter", position: 2 },
      { pitch: "E4", duration: "quarter", position: 3 },
    ],
    solution: [
      { pitch: "E4", type: "reelle",   explication: "Mi est la tierce de Do majeur — note réelle." },
      { pitch: "D4", type: "broderie", explication: "Ré quitte Mi et y revient — broderie inférieure." },
      { pitch: "E4", type: "reelle",   explication: "Mi revient — note réelle de l'accord." },
    ],
  },

  {
    id: "ne-03",
    titre: "Note de passage sur Sol majeur",
    difficulte: 1,
    accord: "G",
    accordLabel: "Sol majeur",
    tonalite: "Sol majeur",
    notes: [
      { pitch: "G4", duration: "quarter", position: 1 },
      { pitch: "A4", duration: "quarter", position: 2 },
      { pitch: "B4", duration: "quarter", position: 3 },
    ],
    solution: [
      { pitch: "G4", type: "reelle",  explication: "Sol est la fondamentale de Sol majeur (Sol–Si–Ré)." },
      { pitch: "A4", type: "passage", explication: "La relie Sol et Si par degré conjoint ascendant — note de passage." },
      { pitch: "B4", type: "reelle",  explication: "Si est la tierce de Sol majeur — note réelle." },
    ],
  },

  {
    id: "ne-04",
    titre: "Broderie sur Sol majeur",
    difficulte: 1,
    accord: "G",
    accordLabel: "Sol majeur",
    tonalite: "Sol majeur",
    notes: [
      { pitch: "B4", duration: "quarter", position: 1 },
      { pitch: "A4", duration: "quarter", position: 2 },
      { pitch: "B4", duration: "quarter", position: 3 },
    ],
    solution: [
      { pitch: "B4", type: "reelle",   explication: "Si est la tierce de Sol majeur — note réelle." },
      { pitch: "A4", type: "broderie", explication: "La quitte Si et y revient — broderie inférieure." },
      { pitch: "B4", type: "reelle",   explication: "Si revient — note réelle de Sol majeur." },
    ],
  },

  {
    id: "ne-05",
    titre: "Broderie sur La mineur",
    difficulte: 1,
    accord: "Am",
    accordLabel: "La mineur",
    tonalite: "La mineur",
    notes: [
      { pitch: "A4", duration: "quarter", position: 1 },
      { pitch: "B4", duration: "quarter", position: 2 },
      { pitch: "A4", duration: "quarter", position: 3 },
    ],
    solution: [
      { pitch: "A4", type: "reelle",   explication: "La est la fondamentale de La mineur (La–Do–Mi)." },
      { pitch: "B4", type: "broderie", explication: "Si quitte La et y revient — broderie supérieure." },
      { pitch: "A4", type: "reelle",   explication: "La revient — fondamentale de l'accord." },
    ],
  },

  {
    id: "ne-06",
    titre: "Note de passage descendante — La mineur",
    difficulte: 1,
    accord: "Am",
    accordLabel: "La mineur",
    tonalite: "La mineur",
    notes: [
      { pitch: "E4", duration: "quarter", position: 1 },
      { pitch: "D4", duration: "quarter", position: 2 },
      { pitch: "C4", duration: "quarter", position: 3 },
    ],
    solution: [
      { pitch: "E4", type: "reelle",  explication: "Mi est la quinte de La mineur (La–Do–Mi)." },
      { pitch: "D4", type: "passage", explication: "Ré relie Mi et Do par mouvement conjoint descendant — note de passage." },
      { pitch: "C4", type: "reelle",  explication: "Do est la tierce mineure de La mineur — note réelle." },
    ],
  },

  {
    id: "ne-07",
    titre: "Note de passage — Fa majeur",
    difficulte: 1,
    accord: "F",
    accordLabel: "Fa majeur",
    tonalite: "Fa majeur",
    notes: [
      { pitch: "F4", duration: "quarter", position: 1 },
      { pitch: "G4", duration: "quarter", position: 2 },
      { pitch: "A4", duration: "quarter", position: 3 },
    ],
    solution: [
      { pitch: "F4", type: "reelle",  explication: "Fa est la fondamentale de Fa majeur (Fa–La–Do)." },
      { pitch: "G4", type: "passage", explication: "Sol relie Fa et La par degré conjoint ascendant — note de passage." },
      { pitch: "A4", type: "reelle",  explication: "La est la tierce de Fa majeur — note réelle." },
    ],
  },

  {
    id: "ne-08",
    titre: "Broderie et notes réelles — Do majeur",
    difficulte: 1,
    accord: "C",
    accordLabel: "Do majeur",
    tonalite: "Do majeur",
    notes: [
      { pitch: "G4", duration: "quarter", position: 1 },
      { pitch: "A4", duration: "quarter", position: 2 },
      { pitch: "G4", duration: "quarter", position: 3 },
      { pitch: "E4", duration: "quarter", position: 4 },
    ],
    solution: [
      { pitch: "G4", type: "reelle",   explication: "Sol est la quinte de Do majeur (Do–Mi–Sol)." },
      { pitch: "A4", type: "broderie", explication: "La quitte Sol et y revient — broderie supérieure." },
      { pitch: "G4", type: "reelle",   explication: "Sol revient — quinte de l'accord." },
      { pitch: "E4", type: "reelle",   explication: "Mi est la tierce de Do majeur — note réelle." },
    ],
  },

  // ── Niveau 2 — Retard et Anticipation (7 exercices) ──────────────────────

  {
    id: "ne-09",
    titre: "Retard 4–3 sur Do majeur",
    difficulte: 2,
    accord: "C",
    accordLabel: "Do majeur",
    tonalite: "Do majeur",
    contexte: "Accord précédent : Sol7. Fa était la septième de Sol7 et reste suspendu sur Do.",
    notes: [
      { pitch: "F4", duration: "quarter", position: 1 },
      { pitch: "E4", duration: "quarter", position: 2 },
      { pitch: "G4", duration: "quarter", position: 3 },
    ],
    solution: [
      { pitch: "F4", type: "retard",  explication: "Fa est le retard 4–3 : tenu de Sol7 sur le temps fort de Do, il descend d'un degré vers Mi (la tierce)." },
      { pitch: "E4", type: "reelle",  explication: "Mi est la tierce de Do majeur — note réelle, résolution du retard." },
      { pitch: "G4", type: "reelle",  explication: "Sol est la quinte de Do majeur — note réelle." },
    ],
  },

  {
    id: "ne-10",
    titre: "Retard 9–8 sur Sol majeur",
    difficulte: 2,
    accord: "G",
    accordLabel: "Sol majeur",
    tonalite: "Sol majeur",
    contexte: "La arrivait de l'accord précédent (Ré) et reste suspendu sur Sol.",
    notes: [
      { pitch: "A4", duration: "quarter", position: 1 },
      { pitch: "G4", duration: "quarter", position: 2 },
      { pitch: "B4", duration: "quarter", position: 3 },
    ],
    solution: [
      { pitch: "A4", type: "retard",  explication: "La est le retard 9–8 : dissonant sur le temps fort, il descend vers Sol (la fondamentale)." },
      { pitch: "G4", type: "reelle",  explication: "Sol est la fondamentale de Sol majeur — résolution du retard." },
      { pitch: "B4", type: "reelle",  explication: "Si est la tierce de Sol majeur — note réelle." },
    ],
  },

  {
    id: "ne-11",
    titre: "Retard 2–1 sur La mineur",
    difficulte: 2,
    accord: "Am",
    accordLabel: "La mineur",
    tonalite: "La mineur",
    contexte: "Si était dans l'accord précédent (Mi7) et reste suspendu sur La mineur.",
    notes: [
      { pitch: "B4", duration: "quarter", position: 1 },
      { pitch: "A4", duration: "quarter", position: 2 },
      { pitch: "C5", duration: "quarter", position: 3 },
    ],
    solution: [
      { pitch: "B4", type: "retard",  explication: "Si est le retard 2–1 : dissonant sur le temps fort de La mineur, il descend d'un degré vers La." },
      { pitch: "A4", type: "reelle",  explication: "La est la fondamentale de La mineur — résolution du retard." },
      { pitch: "C5", type: "reelle",  explication: "Do est la tierce mineure de La mineur — note réelle." },
    ],
  },

  {
    id: "ne-12",
    titre: "Passage et anticipation — La mineur",
    difficulte: 2,
    accord: "Am",
    accordLabel: "La mineur",
    tonalite: "La mineur",
    contexte: "L'accord suivant sera Sol majeur.",
    notes: [
      { pitch: "E4", duration: "quarter", position: 1 },
      { pitch: "D4", duration: "quarter", position: 2 },
      { pitch: "G4", duration: "quarter", position: 3 },
    ],
    solution: [
      { pitch: "E4", type: "reelle",       explication: "Mi est la quinte de La mineur (La–Do–Mi) — note réelle." },
      { pitch: "D4", type: "passage",      explication: "Ré relie Mi et Sol par mouvement conjoint descendant — note de passage." },
      { pitch: "G4", type: "anticipation", explication: "Sol anticipe l'accord suivant (Sol majeur) avant qu'il arrive — anticipation." },
    ],
  },

  {
    id: "ne-13",
    titre: "Anticipation sur Sol majeur",
    difficulte: 2,
    accord: "G",
    accordLabel: "Sol majeur",
    tonalite: "Sol majeur",
    contexte: "L'accord suivant sera La mineur.",
    notes: [
      { pitch: "D5", duration: "quarter", position: 1 },
      { pitch: "B4", duration: "quarter", position: 2 },
      { pitch: "A4", duration: "quarter", position: 3 },
    ],
    solution: [
      { pitch: "D5", type: "reelle",       explication: "Ré est la quinte de Sol majeur (Sol–Si–Ré) — note réelle." },
      { pitch: "B4", type: "reelle",       explication: "Si est la tierce de Sol majeur — note réelle." },
      { pitch: "A4", type: "anticipation", explication: "La anticipe la fondamentale de l'accord suivant (La mineur) — anticipation sur temps faible." },
    ],
  },

  {
    id: "ne-14",
    titre: "Anticipation sur Fa majeur",
    difficulte: 2,
    accord: "F",
    accordLabel: "Fa majeur",
    tonalite: "Fa majeur",
    contexte: "L'accord suivant sera Do majeur.",
    notes: [
      { pitch: "A4", duration: "quarter", position: 1 },
      { pitch: "C5", duration: "quarter", position: 2 },
      { pitch: "G4", duration: "quarter", position: 3 },
    ],
    solution: [
      { pitch: "A4", type: "reelle",       explication: "La est la tierce de Fa majeur (Fa–La–Do) — note réelle." },
      { pitch: "C5", type: "reelle",       explication: "Do est la quinte de Fa majeur — note réelle." },
      { pitch: "G4", type: "anticipation", explication: "Sol anticipe la quinte de l'accord suivant (Do majeur : Do–Mi–Sol) — anticipation." },
    ],
  },

  {
    id: "ne-15",
    titre: "Anticipation sur Do majeur",
    difficulte: 2,
    accord: "C",
    accordLabel: "Do majeur",
    tonalite: "Do majeur",
    contexte: "L'accord suivant sera Fa majeur.",
    notes: [
      { pitch: "G4", duration: "quarter", position: 1 },
      { pitch: "E4", duration: "quarter", position: 2 },
      { pitch: "F4", duration: "quarter", position: 3 },
    ],
    solution: [
      { pitch: "G4", type: "reelle",       explication: "Sol est la quinte de Do majeur (Do–Mi–Sol) — note réelle." },
      { pitch: "E4", type: "reelle",       explication: "Mi est la tierce de Do majeur — note réelle." },
      { pitch: "F4", type: "anticipation", explication: "Fa anticipe la fondamentale de l'accord suivant (Fa majeur) — anticipation." },
    ],
  },

  // ── Niveau 3 — Appoggiature, Échappée, Combinaisons (5 exercices) ─────────

  {
    id: "ne-16",
    titre: "Appoggiature sur Do majeur",
    difficulte: 3,
    accord: "C",
    accordLabel: "Do majeur",
    tonalite: "Do majeur",
    contexte: "Ré arrive sans préparation harmonique — c'est une appoggiature.",
    notes: [
      { pitch: "D4", duration: "quarter", position: 1 },
      { pitch: "C4", duration: "quarter", position: 2 },
      { pitch: "E4", duration: "quarter", position: 3 },
    ],
    solution: [
      { pitch: "D4", type: "appoggiature", explication: "Ré arrive sur le temps fort sans préparation, crée une dissonance forte, et descend d'un degré vers Do — appoggiature." },
      { pitch: "C4", type: "reelle",       explication: "Do est la fondamentale de Do majeur — résolution de l'appoggiature." },
      { pitch: "E4", type: "reelle",       explication: "Mi est la tierce de Do majeur — note réelle." },
    ],
  },

  {
    id: "ne-17",
    titre: "Appoggiature ascendante — La mineur",
    difficulte: 3,
    accord: "Am",
    accordLabel: "La mineur",
    tonalite: "La mineur",
    contexte: "Sol# arrive sans préparation et monte par demi-ton vers La.",
    notes: [
      { pitch: "G#4", duration: "quarter", position: 1 },
      { pitch: "A4",  duration: "quarter", position: 2 },
      { pitch: "E4",  duration: "quarter", position: 3 },
    ],
    solution: [
      { pitch: "G#4", type: "appoggiature", explication: "Sol# arrive sur le temps fort sans préparation et monte par demi-ton vers La (la fondamentale) — appoggiature ascendante." },
      { pitch: "A4",  type: "reelle",       explication: "La est la fondamentale de La mineur — résolution de l'appoggiature." },
      { pitch: "E4",  type: "reelle",       explication: "Mi est la quinte de La mineur — note réelle." },
    ],
  },

  {
    id: "ne-18",
    titre: "Échappée — Do majeur",
    difficulte: 3,
    accord: "C",
    accordLabel: "Do majeur",
    tonalite: "Do majeur",
    notes: [
      { pitch: "G4", duration: "quarter", position: 1 },
      { pitch: "A4", duration: "quarter", position: 2 },
      { pitch: "C5", duration: "quarter", position: 3 },
    ],
    solution: [
      { pitch: "G4", type: "reelle",   explication: "Sol est la quinte de Do majeur — note réelle." },
      { pitch: "A4", type: "echappee", explication: "La arrive conjointement depuis Sol (un ton), puis s'échappe par un saut de tierce mineure jusqu'à Do — c'est l'échappée." },
      { pitch: "C5", type: "reelle",   explication: "Do est la fondamentale de Do majeur (octave supérieure) — note réelle." },
    ],
  },

  {
    id: "ne-19",
    titre: "Retard suivi d'une note de passage",
    difficulte: 3,
    accord: "C",
    accordLabel: "Do majeur",
    tonalite: "Do majeur",
    contexte: "Accord précédent : Sol7. Fa était la septième de Sol7.",
    notes: [
      { pitch: "F4", duration: "quarter", position: 1 },
      { pitch: "E4", duration: "quarter", position: 2 },
      { pitch: "D4", duration: "quarter", position: 3 },
      { pitch: "C4", duration: "quarter", position: 4 },
    ],
    solution: [
      { pitch: "F4", type: "retard",  explication: "Fa : retard 4–3 tenu de Sol7, dissonant sur le temps fort de Do majeur, résolution vers Mi." },
      { pitch: "E4", type: "reelle",  explication: "Mi est la tierce de Do majeur — résolution du retard." },
      { pitch: "D4", type: "passage", explication: "Ré relie Mi et Do par degré conjoint descendant — note de passage." },
      { pitch: "C4", type: "reelle",  explication: "Do est la fondamentale de Do majeur — note réelle." },
    ],
  },

  {
    id: "ne-20",
    titre: "Appoggiature et note de passage — Fa majeur",
    difficulte: 3,
    accord: "F",
    accordLabel: "Fa majeur",
    tonalite: "Fa majeur",
    notes: [
      { pitch: "B4", duration: "quarter", position: 1 },
      { pitch: "A4", duration: "quarter", position: 2 },
      { pitch: "G4", duration: "quarter", position: 3 },
      { pitch: "F4", duration: "quarter", position: 4 },
    ],
    solution: [
      { pitch: "B4", type: "appoggiature", explication: "Si♭ arrive sur le temps fort sans préparation (B♮ ici est très expressif) et descend par degré vers La — appoggiature." },
      { pitch: "A4", type: "reelle",       explication: "La est la tierce de Fa majeur (Fa–La–Do) — résolution de l'appoggiature." },
      { pitch: "G4", type: "passage",      explication: "Sol relie La et Fa par degré conjoint descendant — note de passage." },
      { pitch: "F4", type: "reelle",       explication: "Fa est la fondamentale de Fa majeur — note réelle." },
    ],
  },
];
