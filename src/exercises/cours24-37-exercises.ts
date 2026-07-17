/**
 * exercises/cours24-37-exercises.ts
 * Harmonia — Exercices pour les cours 24 à 37 (chantier « vitrine » ③)
 *
 * Ce fichier regroupe les exercices des cours 24-37, écrits par lots successifs
 * (voir docs/superpowers/plans/2026-07-17-exercices-cours-24-37.md). Chaque
 * solution SATB en `regles: "ecole"` passe `validateSATB` avec 0 faute et 0
 * avertissement noté (invariant du corpus, cf. corpus-invariant.test.ts).
 *
 * LOT 1 — Cours 26 (Harmonisation DEM : basse donnée et soprano donné) et
 *         Cours 24 (les trois sixtes augmentées et leurs résolutions).
 *   - satb     : réalisations d'école complètes (basse donnée, soprano donné),
 *                cadences claires, sensible et 7es conduites selon les règles.
 *                Pour les sixtes augmentées, voir la note `regles: "libre"`
 *                ci-dessous (COURS 24).
 *   - identify : raisonnement de choix d'accord de la méthode en 5 étapes ;
 *                distinction des trois sixtes augmentées et piège enharmonique.
 *   - build    : construction d'une sixte augmentée sur basse donnée.
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
    tags: ["basse donnée", "Do majeur", "V6", "résolution déceptive", "cadence parfaite", "harmonisation DEM"],
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
      "Basse donnée typique du DEM : chaque note de basse révèle l'accord (fondamentale → état fondamental, tierce → 1er renversement). La sensible à la basse donne V⁶ (Sol–Si–Ré), qui enchaîne ici sur vi (résolution déceptive V⁶–vi — et non « cadence rompue », terme réservé au V fondamental en position cadentielle). La basse DONNÉE descend ici par degrés (8̂–7̂–6̂ : Do–Si–La) : dans ce geste séquentiel, la sensible à la basse peut exceptionnellement descendre d'un degré vers La, ce qui lève la contradiction apparente avec l'identify c26-sensible-basse-v6 (où, faute de ce contexte descendant, la sensible à la basse monte vers la tonique). La sensible n'est jamais doublée dans les voix supérieures. Le soprano monte doucement Sol–Sol–La–La–Si–Do ; la cadence parfaite finale (V–I) résout la sensible Si → Do au soprano. Vérification : aucune quinte ni octave parallèle, tessitures et ordre des voix respectés.",
    concepts: ["basse donnée", "analyse des notes de basse", "V6", "résolution déceptive", "cadence parfaite", "T-SD-D-T"],
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
      { soprano: n("B", 4), alto: n("G", 4), tenor: n("D", 4), bass: n("G", 2) },
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

// ════════════════════════════════════════════════════════════════════════════
// COURS 24 — Les trois sixtes augmentées et leurs résolutions
// ════════════════════════════════════════════════════════════════════════════
//
// NOTE SUR `regles: "libre"` POUR LES RÉALISATIONS SATB (documentée, cf. spec) :
// le moteur identifie les accords par CLASSES DE HAUTEURS (enharmonie aveugle).
// Une sixte augmentée s'y lit donc comme une 7e de dominante : la 6te italienne
// Fa–La–Ré# ressort en Fa7 (Ré# = 7e), l'allemande Lab–Do–Mib–Fa# en Lab7
// (Fa# = 7e). La règle d'école « la 7e descend » exige alors que le #4 DESCENDE,
// alors que l'idiome commande qu'il MONTE d'un demi-ton vers la quinte de
// dominante (Ré#→Mi, Fa#→Sol). Ce conflit est STRUCTUREL — inhérent à toute
// résolution de sixte augmentée — d'où `regles: "libre"` sur les deux SATB
// (conformité + tessitures vérifiées ; la conduite reste écrite « à l'école »,
// sans parallèles ni fausses relations, comme le montre la revue voix par voix).

const COURS24_EXERCISES: Exercise[] = [
  // ── identify 1 — reconnaître les trois structures (diff 1) ─────────────────
  {
    id: "c24-identifier-trois-sixtes",
    type: "identify",
    cours: 24,
    difficulty: 1,
    tags: ["sixte augmentée", "italienne", "française", "allemande", "napolitain"],
    concepts: ["It+6 = ♭6–1–♯4", "Fr+6 ajoute le 2", "Al+6 ajoute le ♭3", "note distinctive"],
    question:
      "Toutes les sixtes augmentées se bâtissent sur le même socle en Do majeur : Lab (♭6, à la basse) – Do (tonique) – Fa# (♯4). Laquelle de ces quatre propositions est la sixte FRANÇAISE ?",
    context: "Tonalité : Do majeur. Basse imposée : Lab (6e degré abaissé).",
    options: [
      { id: "a", label: "Lab–Do–Fa# — trois notes seulement", isCorrect: false },
      { id: "b", label: "Lab–Do–Ré–Fa# — le socle plus le Ré (2e degré)", isCorrect: true },
      { id: "c", label: "Lab–Do–Mib–Fa# — le socle plus le Mib (3e degré abaissé)", isCorrect: false },
      { id: "d", label: "Lab–Réb–Fa — les notes de l'accord napolitain (♭II)", isCorrect: false },
    ],
    explanation:
      "La française (Fr+6) ajoute au socle ♭6–1–♯4 le 2e degré (Ré en Do majeur) : Lab–Do–Ré–Fa#. Ce Ré est la neuvième de la dominante Sol, d'où sa couleur. Lab–Do–Fa# (3 notes) est l'italienne ; Lab–Do–Mib–Fa# (avec le ♭3) est l'allemande ; Lab–Réb–Fa donne les notes de l'accord napolitain (le ♭II ; sa position idiomatique, la sixte napolitaine, met Fa à la basse — ici c'est Lab qui est à la basse), une autre prédominante qu'il ne faut pas confondre avec les sixtes augmentées.",
    hint: "Les trois sixtes se distinguent par leur note AJOUTÉE : rien (italienne), le 2 (française), le ♭3 (allemande).",
  },

  // ── build — construire la sixte française sur basse donnée (diff 2) ────────
  {
    id: "c24-construire-sixte-francaise",
    type: "build",
    cours: 24,
    difficulty: 2,
    tags: ["sixte augmentée", "française", "construction", "Do majeur", "♯4"],
    concepts: ["♭6 à la basse", "socle ♭6–1–♯4", "2e degré ajouté", "orthographe ♯4 (Fa#, non Solb)"],
    question:
      "Construisez la sixte augmentée FRANÇAISE en Do majeur, à partir de la basse Lab. Donnez les quatre notes dans l'ordre, de la plus grave à la plus aiguë.",
    keySignature: "C",
    correctNotes: ["Ab", "C", "D", "F#"],
    explanation:
      "La française en Do majeur = Lab (♭6) – Do (1) – Ré (2) – Fa# (♯4). L'intervalle de sixte augmentée se forme entre la basse Lab et le Fa#. On écrit bien Fa# (4e degré ÉLEVÉ) et non Solb : c'est cette orthographe qui distingue la sixte augmentée de son équivalent enharmonique — pour l'italienne et l'allemande, une 7e de dominante ; pour la française, plus précisément une 7e de dominante à la quinte diminuée (Lab–Do–Ré–Fa# sonne comme un Ré7♭5) — et qui impose la résolution ascendante du Fa# vers Sol.",
    hint: "Partez du socle Lab–Do–Fa#, puis intercalez la note distinctive de la française : le 2e degré.",
  },

  // ── identify 2 — pourquoi le I6/4 avant V pour l'allemande (diff 2) ────────
  {
    id: "c24-al6-quintes-i64",
    type: "identify",
    cours: 24,
    difficulty: 2,
    tags: ["sixte allemande", "quintes parallèles", "I6/4", "résolution", "cadence"],
    concepts: ["Al+6 → I6/4 → V", "quintes parallèles ♭6–♭3", "6/4 de cadence"],
    question:
      "On résout très souvent la sixte ALLEMANDE (Lab–Do–Mib–Fa# en Do majeur) en passant d'abord par un I6/4, plutôt qu'en allant directement sur la dominante. Pourquoi ?",
    context: "Contexte : cadence en Do majeur, … Al+6 – ? – V – I.",
    options: [
      { id: "a", label: "Parce que la basse Lab et le Mib forment une quinte juste qui glisserait en quintes parallèles vers Sol–Ré sur la dominante ; le I6/4 intercalé les évite", isCorrect: true },
      { id: "b", label: "Parce que la sixte allemande est incapable de résoudre sur la dominante", isCorrect: false },
      { id: "c", label: "Parce que le I6/4 est un accord de repos plus consonant que la dominante", isCorrect: false },
      { id: "d", label: "Parce que seule la sixte italienne peut aller directement sur V", isCorrect: false },
    ],
    explanation:
      "Dans l'allemande, Lab (♭6) et Mib (♭3) forment une quinte juste. Si l'on résout directement sur V, cette quinte glisse vers Sol–Ré (autre quinte juste) par mouvement direct : quintes parallèles. On intercale donc le I6/4 de cadence — le Mib monte vers Mi, puis le 6/4 se résout sur V. La formule Al+6 → I6/4 → V est la parade classique. (La française et l'italienne, elles, peuvent aller directement sur V sans ce problème.)",
    hint: "Repérez la quinte juste cachée dans l'accord (♭6–♭3) et voyez où elle irait sur la dominante.",
  },

  // ── satb 1 — résolution de la sixte italienne en La mineur (diff 2) ────────
  //
  // `regles: "libre"` : voir la note en tête de section. It+6 = Fa–La–Ré# se lit
  // Fa7 aux hauteurs (Ré# = 7e) ; le Ré# doit MONTER vers Mi (idiome), ce que la
  // règle d'école de la 7e interdirait. La conduite ci-dessous est néanmoins
  // pleinement « école » : aucune parallèle, aucune fausse relation.
  {
    id: "c24-resolution-italienne-lam",
    type: "satb",
    cours: 24,
    title: "Résolution de la sixte italienne en La mineur",
    subtitle: "iv⁶ – It+6 – V – i · mouvement contraire vers l'octave de dominante",
    difficulty: 2,
    tags: ["sixte italienne", "La mineur", "résolution", "mouvement contraire", "prédominante"],
    keySignature: "Am",
    measures: ["iv⁶ · Fa", "It+6 · Fa", "V · Mi", "i · La"],
    solution: [
      { soprano: n("A", 4), alto: n("D", 4),  tenor: n("A", 3),  bass: n("F", 3) },
      { soprano: n("A", 4), alto: n("D#", 4), tenor: n("A", 3),  bass: n("F", 3) },
      { soprano: n("B", 4), alto: n("E", 4),  tenor: n("G#", 3), bass: n("E", 3) },
      { soprano: n("C", 5), alto: n("E", 4),  tenor: n("A", 3),  bass: n("A", 2) },
    ],
    hint: "La sixte italienne n'a que trois notes (Fa–La–Ré#) : on double la tonique (La). Le Ré# naît chromatiquement du Ré du iv⁶ (une seule voix bouge). À la résolution, les deux notes de la sixte augmentée — la basse Fa (♭6) et le Ré# (♯4) — convergent par demi-tons contraires sur l'octave de Mi (dominante).",
    explanation:
      "En La mineur, la sixte italienne = Fa (♭6, basse) – La (1) – Ré# (♯4), la tonique La étant doublée. Elle naît du iv⁶ (Ré–Fa–La, Fa à la basse) par la simple montée chromatique Ré→Ré#. Résolution caractéristique : la basse Fa DESCEND vers Mi, le Ré# MONTE vers Mi — mouvement contraire des deux voix extrêmes vers l'octave de dominante (Mi–Mi). La tonique doublée se partage : une La monte vers Si (quinte de V), l'autre descend vers Sol# (tierce sensible). Puis V→i résout Sol#→La. Vérification voix par voix : aucune quinte ni octave parallèle, aucune fausse relation (le Ré# vient du Ré de la même voix).",
    concepts: ["sixte italienne", "♭6 à la basse", "mouvement contraire", "octave de dominante", "tonique doublée"],
    // Conflit structurel 7e/♯4 : la sixte augmentée impose la montée du ♯4, la
    // règle d'école exigerait la descente de la « 7e » enharmonique. → libre.
    regles: "libre",
  },

  // ── identify 3 — le piège enharmonique Al+6 vs V7 (diff 3) ─────────────────
  {
    id: "c24-al6-vs-v7-enharmonie",
    type: "identify",
    cours: 24,
    difficulty: 3,
    tags: ["sixte allemande", "enharmonie", "V7", "substitution tritonique", "orthographe"],
    concepts: ["Al+6 ≡ Lab7 aux hauteurs", "orthographe ♯4 vs ♭5", "la résolution tranche la fonction"],
    question:
      "En Do majeur, l'accord Lab–Do–Mib–Fa# a exactement les mêmes hauteurs qu'un Lab7 (accord de dominante). Qu'est-ce qui prouve qu'il s'agit d'une sixte allemande, et non d'un V7 ?",
    context: "Hauteurs entendues : Lab, Do, Mib, Fa#/Solb — identiques dans les deux lectures.",
    options: [
      { id: "a", label: "Rien : les deux accords sont identiques et parfaitement interchangeables", isCorrect: false },
      { id: "b", label: "Le triton est écrit ♯4 (Fa#, note élevée) et l'accord résout sur V (Sol) par mouvement contraire — Lab↓Sol, Fa#↑Sol ; un vrai Lab7 s'écrirait Solb et résoudrait sur Réb", isCorrect: true },
      { id: "c", label: "La sixte allemande contient une quinte juste que le Lab7 ne possède pas", isCorrect: false },
      { id: "d", label: "Le Lab7 se résout toujours sur Do, la sixte allemande toujours sur Fa", isCorrect: false },
    ],
    explanation:
      "Aux seules classes de hauteurs, Lab–Do–Mib–Fa# (Al+6) et Lab–Do–Mib–Solb (Lab7) sont indiscernables. Deux indices tranchent : l'ORTHOGRAPHE — le triton s'écrit Fa# (4e degré élevé) dans la sixte augmentée, Solb (7e de l'accord) dans le Lab7 ; et la RÉSOLUTION — la sixte allemande s'épanouit sur V (Sol) avec Lab et Fa# convergeant vers Sol, tandis que le Lab7 (= V7 du ♭II) résoudrait sur Réb. C'est cette ambiguïté que le jazz exploite dans la substitution tritonique (remplacer Sol7 par Réb7).",
    hint: "Deux choses distinguent des accords aux mêmes hauteurs : comment on les ÉCRIT, et où ils vont ENSUITE.",
  },

  // ── satb 2 — résolution de la sixte allemande en Do majeur (diff 3) ────────
  //
  // `regles: "libre"` : voir la note en tête de section. Al+6 = Lab–Do–Mib–Fa#
  // se lit Lab7 aux hauteurs (Fa# = 7e) ; le Fa# doit MONTER vers Sol (idiome).
  // Conduite « école » : le I6/4 intercalé évite les quintes parallèles ♭6–♭3.
  {
    id: "c24-resolution-allemande-do",
    type: "satb",
    cours: 24,
    title: "Résolution de la sixte allemande en Do majeur",
    subtitle: "iv⁶ – Al+6 – I⁶/⁴ – V – I · le 6/4 qui dissout les quintes",
    difficulty: 3,
    tags: ["sixte allemande", "Do majeur", "I6/4", "quintes parallèles", "cadence", "prédominante"],
    keySignature: "C",
    measures: ["iv⁶ · Lab", "Al+6 · Lab", "I⁶/⁴ · Sol", "V · Sol", "I · Do"],
    solution: [
      { soprano: n("F", 4),  alto: n("C", 4), tenor: n("Ab", 3), bass: n("Ab", 2) },
      { soprano: n("F#", 4), alto: n("C", 4), tenor: n("Eb", 3), bass: n("Ab", 2) },
      { soprano: n("G", 4),  alto: n("C", 4), tenor: n("E", 3),  bass: n("G", 2) },
      { soprano: n("G", 4),  alto: n("B", 3), tenor: n("D", 3),  bass: n("G", 2) },
      { soprano: n("G", 4),  alto: n("C", 4), tenor: n("E", 3),  bass: n("C", 3) },
    ],
    hint: "La sixte allemande (Lab–Do–Mib–Fa#) a quatre notes distinctes. Sa quinte Lab–Mib interdit la résolution directe sur V (quintes parallèles). On intercale donc le I⁶/⁴ : le Mib monte vers Mi, le Fa# et la basse Lab convergent vers Sol (octave de dominante), puis le 6/4 se résout sur V.",
    explanation:
      "En Do majeur, la sixte allemande = Lab (♭6, basse) – Do (1) – Mib (♭3) – Fa# (♯4). Elle naît du iv⁶ (Fa mineur, Lab à la basse) : le Fa monte chromatiquement vers Fa#, le socle apporte le Mib. Sa quinte interne Lab–Mib rendrait la résolution directe sur V parallèle — on passe donc par le I⁶/⁴ de cadence : la basse Lab et le Fa# convergent par demi-tons contraires vers Sol (octave), le Mib monte vers Mi, le Do reste. Le I⁶/⁴ (double retard de la dominante) se résout ensuite sur V (Do→Si, Mi→Ré au-dessus de la basse Sol tenue), puis V→I. Vérification voix par voix : aucune quinte ni octave parallèle, aucune fausse relation.",
    concepts: ["sixte allemande", "♭6 à la basse", "quintes parallèles évitées", "6/4 de cadence", "mouvement contraire"],
    // Conflit structurel 7e/♯4 : le Fa# (♯4) doit monter vers Sol, alors que la
    // règle d'école le lirait comme la 7e de Lab7 et exigerait sa descente. → libre.
    regles: "libre",
  },
];

// ════════════════════════════════════════════════════════════════════════════
// COURS 32 — Extensions altérées (b9, #9, #11, b13) et reharmonisation moderne
// ════════════════════════════════════════════════════════════════════════════
//
// NOTE SUR `regles: "libre"` POUR LES RÉALISATIONS SATB (documentée, cf. spec) :
// ce cours traite du JAZZ DE COULEUR — dominantes altérées, cycle de tierces de
// Coltrane. Le moteur d'école n'a rien à y valider utilement :
//   1. les TENSIONS (b9, #9, #11, b13) ne sont pas des sons d'accord au sens
//      tonal : identifyChordFromNotes lit un G7(b9) {Sol,Si,Fa,Lab} comme un
//      Sol7 à quinte omise avec un Lab « en trop » ; la règle d'école « pas de
//      ♭9 non préparée » condamnerait précisément la couleur recherchée ;
//   2. la cellule de Coltrane MODULE par tierces majeures (Si maj → Sol maj) —
//      aucune tonalité unique ne la régit, donc sensible et 7e n'y ont pas de
//      fonction stable.
// → `regles: "libre"` sur les deux SATB (conformité + tessitures vérifiées ;
// la conduite reste écrite « proprement », comme le montre la revue voix par
// voix), à l'identique des SATB jazz du cours 11.

const COURS32_EXERCISES: Exercise[] = [
  // ── identify 1 — nommer la tension altérée écrite (piège enharmonique) ──────
  {
    id: "c32-nommer-tension-alteree",
    type: "identify",
    cours: 32,
    difficulty: 1,
    tags: ["tensions altérées", "#9", "enharmonie", "Hendrix", "ambiguïté maj/min"],
    concepts: ["#9 ≡ ♭3 enharmonique", "coexistence 3ce majeure / #9", "orthographe de la tension"],
    question:
      "Un voicing de dominante est écrit Sol – Si – Fa – La# (une couleur de G7 enrichie). Quelle tension le La# apporte-t-il ?",
    context: "Dominante de Do majeur. Notes du voicing : Sol (fond.), Si (3ce majeure), Fa (♭7), La#.",
    options: [
      { id: "a", label: "#9 (neuvième dièse) — La# = La haussé d'un demi-ton, à l'octave", isCorrect: true },
      { id: "b", label: "♭3 (tierce mineure Si♭) — l'accord serait donc mineur", isCorrect: false },
      { id: "c", label: "♭9 (neuvième bémol, La♭)", isCorrect: false },
      { id: "d", label: "♭13 (treizième bémol, Mi♭)", isCorrect: false },
    ],
    explanation:
      "La# est bien la #9 : le 9e degré (La) haussé d'un demi-ton. Le piège est enharmonique — La# sonne exactement comme Si♭, la tierce mineure. Mais ce n'EST PAS la tierce mineure, car la tierce MAJEURE (Si) est déjà présente : les deux coexistent, et c'est justement cette ambiguïté majeur/mineur qui fait le son « Hendrix » du G7#9 (Purple Haze). On écrit donc La# (9e altérée) et non Si♭ (3ce), l'orthographe suivant la fonction.",
    hint: "La 3ce majeure Si est déjà dans l'accord : la note ajoutée ne peut donc pas être une seconde tierce.",
  },

  // ── identify 2 — la gamme source d'un V7 altéré (G7alt) ────────────────────
  {
    id: "c32-gamme-source-alteree",
    type: "identify",
    cours: 32,
    difficulty: 2,
    tags: ["gamme altérée", "super-locrien", "G7alt", "gammes sources"],
    concepts: ["G7alt ← gamme altérée", "super-locrien = 7e mode de la mineure mélodique", "une gamme par couleur d'accord"],
    question:
      "Sur quelle gamme repose un accord altéré complet G7alt (b9, #9, b5, b13), tension maximale avant résolution ?",
    context: "V7 altéré de Do majeur/mineur. G7alt réunit toutes les altérations de la dominante.",
    options: [
      { id: "a", label: "La gamme altérée (super-locrien = 7e mode de la mineure mélodique)", isCorrect: true },
      { id: "b", label: "Le mode lydien dominant (4e mode de la mineure mélodique)", isCorrect: false },
      { id: "c", label: "La gamme diminuée (demi-ton/ton)", isCorrect: false },
      { id: "d", label: "Le mode mixolydien (gamme majeure à 7te bémolisée)", isCorrect: false },
    ],
    explanation:
      "G7alt provient de la gamme ALTÉRÉE (aussi appelée super-locrien, le 7e mode de la gamme mineure mélodique) : elle contient précisément toutes les tensions altérées b9, #9, b5(=#11) et b13. Le lydien dominant est la gamme du G7#11 (une seule altération, la #11), la gamme diminuée demi-ton/ton celle du G7b9, et le mixolydien celle du G13 naturel — chaque couleur de dominante a SA gamme source.",
    hint: "Une seule de ces gammes contient à la fois b9, #9, b5 ET b13.",
  },

  // ── build — construire une dominante altérée G7(b9,b13) ────────────────────
  {
    id: "c32-build-g7-b9-b13",
    type: "build",
    cours: 32,
    difficulty: 2,
    tags: ["dominante altérée", "b9", "b13", "construction", "voicing"],
    concepts: ["♭9 = Lab sur Sol", "♭13 = Mib sur Sol", "quinte omise", "guide-tones + tensions"],
    question:
      "Construisez le voicing d'une dominante altérée G7(♭9, ♭13) en empilant, dans l'ordre : fondamentale, tierce, septième, puis les deux tensions ♭9 et ♭13 (la quinte est omise). Donnez les cinq notes.",
    keySignature: "C",
    correctNotes: ["G", "B", "F", "Ab", "Eb"],
    explanation:
      "G7(♭9, ♭13) = Sol (fond.) – Si (3ce majeure) – Fa (♭7) – Lab (♭9 = 9e bémolisée) – Mib (♭13 = 13e bémolisée). On garde les guide-tones (3ce + ♭7, qui définissent la dominante) et on ajoute les deux tensions ; la quinte (Ré) est omise, comme presque toujours dès qu'on empile des tensions. Mib s'écrit bien ♭13 (et non #5 = Ré#) car il colore une 13e abaissée au-dessus des guide-tones.",
    hint: "Sur Sol : la ♭9 est un demi-ton au-dessus de la fondamentale, la ♭13 un demi-ton sous la 13e naturelle (Mi).",
  },

  // ── satb 1 — II–V–I mineur avec dominante altérée (b9 → 5) ──────────────────
  //
  // `regles: "libre"` : voir la note en tête de section. Le G7(♭9) est une
  // couleur jazz — sa ♭9 (Lab) n'est pas un son d'accord tonal, et la règle
  // d'école la refuserait. La conduite reste néanmoins « propre » : ♭9 et ♭7
  // descendent, la sensible monte, aucune parallèle.
  {
    id: "c32-satb-iivi-mineur-altere",
    type: "satb",
    cours: 32,
    title: "II–V–I mineur avec dominante altérée",
    subtitle: "Dm7♭5 – G7(♭9) – Cm · la ♭9 descend sur la quinte",
    difficulty: 3,
    tags: ["II-V-I mineur", "dominante altérée", "b9", "résolution des tensions", "Do mineur"],
    keySignature: "Cm",
    measures: ["iiø7 · Dm7♭5", "V7(♭9) · G7(♭9)", "i · Cm"],
    solution: [
      { soprano: n("Ab", 4), alto: n("C", 4), tenor: n("F", 3), bass: n("D", 3) },
      { soprano: n("Ab", 4), alto: n("B", 3), tenor: n("F", 3), bass: n("G", 2) },
      { soprano: n("G", 4),  alto: n("C", 4), tenor: n("Eb", 3), bass: n("C", 3) },
    ],
    hint: "La ♭9 de G7 est Lab — déjà présente comme ♭5 du Dm7♭5 : elle est donc PRÉPARÉE (note commune au soprano). À la résolution sur Cm, chaque tension descend : la ♭9 (Lab) descend d'un demi-ton sur la quinte Sol, la ♭7 (Fa) descend sur la tierce Mib, tandis que la sensible Si monte vers Do.",
    explanation:
      "Le II–V–I mineur est le terrain naturel des dominantes altérées. Ici G7(♭9) = Sol – Si – Fa – Lab (quinte omise). La ♭9 (Lab) est préparée : c'est déjà la quinte diminuée du Dm7♭5, tenue au soprano. À la résolution, les tensions se conduisent par mouvement DESCENDANT — c'est la règle d'or : la ♭9 (Lab) descend d'un demi-ton sur la 5te de Cm (Sol), la ♭7 (Fa) descend sur la 3ce (Mib) ; la sensible Si, elle, monte vers Do. Le même principe régit la ♭13, qui descendrait sur la 9e. Réalisation « libre » : la ♭9 est une couleur, non un son d'accord tonal — mais la conduite reste sans parallèle ni saut disgracieux (revue voix par voix).",
    concepts: ["dominante altérée", "b9 préparée", "résolution descendante des tensions", "II-V-I mineur", "note commune"],
    regles: "libre",
  },

  // ── satb 2 — cellule de Coltrane (cycle de tierces majeures) ────────────────
  //
  // `regles: "libre"` : voir la note en tête de section. La cellule MODULE par
  // tierces majeures (Si maj → Sol maj) ; aucune tonalité unique ne la régit.
  // Le Fa# est le pivot commun aux trois accords (5te de Si, 3ce de Ré7, 7e de
  // Sol) : il est tenu au soprano, seul lien entre les trois pôles.
  {
    id: "c32-satb-coltrane-cellule",
    type: "satb",
    cours: 32,
    title: "Cellule de Coltrane (Giant Steps)",
    subtitle: "BMaj7 – D7 – GMaj7 · cycle de tierces majeures, Fa# pivot",
    difficulty: 3,
    tags: ["Coltrane changes", "Giant Steps", "cycle de tierces", "modulation par tierces", "note pivot"],
    keySignature: "G",
    measures: ["I(Si) · BMaj7", "V7(Sol) · D7", "I(Sol) · GMaj7"],
    solution: [
      { soprano: n("F#", 4), alto: n("D#", 4), tenor: n("A#", 3), bass: n("B", 2) },
      { soprano: n("F#", 4), alto: n("C", 4),  tenor: n("A", 3),  bass: n("D", 3) },
      { soprano: n("F#", 4), alto: n("B", 3),  tenor: n("G", 3),  bass: n("G", 2) },
    ],
    hint: "Les trois accords sont séparés de tierces majeures (Si → Sol). Cherchez la note COMMUNE aux trois : Fa# est la quinte de BMaj7, la tierce de D7 et la 7te de GMaj7. Tenez-la au soprano — c'est le fil qui relie les trois tonalités. Les voix intérieures glissent par demi-tons (La#→La, Do→Si).",
    explanation:
      "La cellule de base de Giant Steps : BMaj7 (tonique Si) → D7 (dominante de Sol) → GMaj7 (tonique Sol), un mouvement de tierce majeure descendante Si→Sol introduit par la dominante D7. La difficulté du morceau vient de ces modulations par tierces, étrangères au cycle des quintes. Astuce de conduite : le Fa#, commun aux trois accords (5te / 3ce / 7te), tient lieu de pivot au soprano ; en dessous, les voix se conduisent par degrés (La#→La = 7te de Si qui descend ; Do→Si = 7te de Ré7 qui descend sur la 3ce de Sol). Le GMaj7 final est disposé Sol2–Sol3–Si3–Fa#4 : quinte (Ré) omise, fondamentale doublée — voicing courant de l'accord de 7e majeure ; le ténor descend La→Sol par degré, ce qui supprime la quinte La–Ré du D7 et évite toute quinte parallèle ténor/basse. Réalisation « libre » : la cellule module — aucune tonalité unique ne la régit —, mais la conduite reste conjointe et sans parallèle.",
    concepts: ["Coltrane changes", "cycle de tierces majeures", "note pivot commune", "modulation rapide", "Giant Steps"],
    regles: "libre",
  },
];

// ════════════════════════════════════════════════════════════════════════════
// COURS 27 — Analyse fonctionnelle profonde : régions, Urlinie, Bassbrechung, Ursatz
// ════════════════════════════════════════════════════════════════════════════
//
// Cours d'ANALYSE : dominante `identify` (raisonner sur une progression donnée,
// distinguer surface et structure, lire une réduction) et `build` (écrire
// l'Urlinie en notes). Un unique SATB : la Ursatz elle-même — Urlinie 3̂–2̂–1̂ au
// soprano sur la Bassbrechung I–V–I à la basse, le « modèle de base » que le
// cours illustre (Der freie Satz). Réalisation d'école complète : la sensible
// (ténor) est frustrée — elle descend d'une tierce (Si3→Sol3) vers la quinte
// pour garder l'accord de tonique complet ; aucune parallèle ; l'unique quinte
// directe soprano–basse est de l'espèce permise (soprano conjoint). D'où
// `regles: "ecole"`.

const COURS27_EXERCISES: Exercise[] = [
  // ── identify 1 — régions fonctionnelles dans une progression donnée (diff 1) ─
  {
    id: "c27-region-vi-progression",
    type: "identify",
    cours: 27,
    difficulty: 1,
    tags: ["régions tonales", "T-SD-D", "vi", "prolongation tonique", "analyse fonctionnelle"],
    concepts: ["région tonique = I, iii, vi", "vi partage deux notes avec I", "prolongation avant SD"],
    question:
      "Analyse fonctionnelle de la progression I – vi – IV – V – I en Do majeur. À quelle région (T, SD ou D) le vi (La mineur) appartient-il, et quel rôle joue-t-il ici ?",
    context: "Do majeur. I (Do) – vi (La mineur) – IV (Fa) – V (Sol) – I (Do).",
    options: [
      { id: "a", label: "Région tonique — vi prolonge la tonique (il partage Do et Mi avec I) avant le mouvement vers la sous-dominante IV", isCorrect: true },
      { id: "b", label: "Région sous-dominante — vi prépare la dominante au même titre que IV", isCorrect: false },
      { id: "c", label: "Région dominante — vi contient la sensible et tend vers I", isCorrect: false },
      { id: "d", label: "Aucune région — vi n'est ici qu'un accord de passage sans fonction", isCorrect: false },
    ],
    explanation:
      "La région tonique regroupe I, iii et vi : tous partagent deux notes avec l'accord de tonique. La mineur (La–Do–Mi) partage Do et Mi avec Do majeur — c'est la couleur de repos. Dans I–vi–IV–V–I, le vi prolonge donc la région T avant le vrai mouvement fonctionnel T→SD(IV)→D(V)→T. Le piège (b) est la confusion classique vi/pré-dominante : le vi peut parfois préparer V, mais le cours le range dans la région tonique. Réponse (c) fausse : La–Do–Mi ne contient pas la sensible Si.",
    hint: "Comptez les notes communes entre La mineur (La–Do–Mi) et Do majeur (Do–Mi–Sol).",
  },

  // ── build — écrire l'Urlinie 3̂–2̂–1̂ en Fa majeur (diff 1) ────────────────────
  {
    id: "c27-build-urlinie-fa",
    type: "build",
    cours: 27,
    difficulty: 1,
    tags: ["Urlinie", "ligne fondamentale", "Kopfton", "Fa majeur", "Schenker"],
    concepts: ["Urlinie de tierce 3̂–2̂–1̂", "descente diatonique vers 1̂", "Kopfton = 3̂"],
    question:
      "L'Urlinie de tierce (3̂–2̂–1̂) est la ligne fondamentale la plus simple selon Schenker : une descente diatonique du soprano jusqu'à la tonique. Donnez-la en Fa majeur, du Kopfton (3̂) jusqu'à 1̂, dans l'ordre.",
    keySignature: "F",
    correctNotes: ["A", "G", "F"],
    explanation:
      "En Fa majeur : 3̂ = La (le Kopfton, note de couverture qui ouvre la ligne), 2̂ = Sol (harmonisé par V), 1̂ = Fa (harmonisé par I). L'Urlinie descend donc La–Sol–Fa. Toute tension mélodique tonale doit résoudre sur 1̂ : c'est la loi que matérialise l'Urlinie. Les deux autres formes sont 5̂–4̂–3̂–2̂–1̂ (Do–Sib–La–Sol–Fa ici) et 8̂–7̂–6̂–5̂–4̂–3̂–2̂–1̂.",
    hint: "3̂ est la tierce de la gamme de Fa majeur ; descendez ensuite par degré conjoint jusqu'à la tonique.",
  },

  // ── identify 2 — piliers structuraux vs prolongations de surface (diff 2) ────
  {
    id: "c27-surface-vs-structure-piliers",
    type: "identify",
    cours: 27,
    difficulty: 2,
    tags: ["surface vs structure", "piliers structuraux", "prolongation", "réduction", "Bassbrechung"],
    concepts: ["piliers = ouverture / dominante / conclusion", "vi et I⁶ prolongent la tonique", "accord structural vs accord de surface"],
    question:
      "On réduit la phrase I – vi – I⁶ – V⁷ – I (Do majeur). Selon la lecture en couches (surface vs structure profonde), quels sont les PILIERS structuraux, et quels accords ne sont que des prolongations de surface de la tonique ?",
    context: "Do majeur. I – vi – I⁶ – V⁷ – I.",
    options: [
      { id: "a", label: "Piliers : I (ouverture) – V⁷ (dominante) – I (conclusion) ; vi et I⁶ prolongent la région tonique (surface)", isCorrect: true },
      { id: "b", label: "Piliers : vi – I⁶ – V⁷ ; le premier I n'est qu'une anacrouse sans poids structural", isCorrect: false },
      { id: "c", label: "Piliers : I – vi – I ; le V⁷ n'est qu'un ornement de passage vers la tonique finale", isCorrect: false },
      { id: "d", label: "Les cinq accords sont des piliers de poids structural égal", isCorrect: false },
    ],
    explanation:
      "La stratégie schenkérienne repère trois points d'ancrage : l'ouverture (I), la dominante structurale (V⁷) et la conclusion (I) — c'est la Bassbrechung I–V–I sous-jacente. Le vi et le I⁶ appartiennent tous deux à la région tonique (vi partage deux notes avec I ; I⁶ est I renversé) : ils prolongent la couleur de repos initiale sans créer de mouvement fonctionnel propre. Ce sont des accords de surface. Nier le poids du V⁷ (c) ou mettre tous les accords sur le même plan (d) revient à rester à la surface, sans voir la hiérarchie.",
    hint: "Un accord dont la suppression ne change pas la logique tonale (ex. I⁶, même accord que I) est une prolongation, pas un pilier.",
  },

  // ── satb — la Ursatz : Urlinie 3̂–2̂–1̂ sur Bassbrechung I–V–I (diff 2) ─────────
  {
    id: "c27-ursatz-satb-do",
    type: "satb",
    cours: 27,
    title: "La Ursatz en Do majeur",
    subtitle: "Urlinie 3̂–2̂–1̂ (Mi–Ré–Do) sur Bassbrechung I–V–I",
    difficulty: 2,
    tags: ["Ursatz", "Urlinie", "Bassbrechung", "Do majeur", "Schenker", "structure fondamentale"],
    keySignature: "C",
    measures: ["I · Do (3̂=Mi)", "V · Sol (2̂=Ré)", "I · Do (1̂=Do)"],
    solution: [
      { soprano: n("E", 5), alto: n("G", 4), tenor: n("C", 4), bass: n("C", 3) },
      { soprano: n("D", 5), alto: n("G", 4), tenor: n("B", 3), bass: n("G", 2) },
      { soprano: n("C", 5), alto: n("E", 4), tenor: n("G", 3), bass: n("C", 3) },
    ],
    hint: "Le soprano réalise l'Urlinie 3̂–2̂–1̂ (Mi–Ré–Do) ; la basse réalise la Bassbrechung I–V–I (Do–Sol–Do). 3̂ coïncide avec I, 2̂ avec V, 1̂ avec I. À la cadence, la sensible Si est au ténor (voix intérieure) : elle est frustrée vers Sol pour laisser l'accord de tonique complet.",
    explanation:
      "La Ursatz est la structure contrapuntique fondamentale de Schenker : l'Urlinie au soprano (descente 3̂–2̂–1̂ = Mi–Ré–Do) superposée à la Bassbrechung à la basse (arche I–V–I = Do–Sol–Do). L'alignement canonique est ici respecté à la note : 3̂/Mi sur I, 2̂/Ré sur V, 1̂/Do sur I. Conduite d'école : la sensible Si (ténor, voix interne) est « frustrée » — elle descend d'une tierce vers Sol (quinte de la tonique) plutôt que de monter, ce qui permet à l'accord final Do–Mi–Sol d'être complet. Aucune quinte ni octave parallèle ; le soprano se meut par degré, donc aucune octave/quinte directe soprano–basse. C'est le « modèle de base » que Schenker illustre dans Der freie Satz : toute œuvre tonale n'est qu'une prolongation élaborée de cette arche.",
    concepts: ["Ursatz", "Urlinie 3̂–2̂–1̂", "Bassbrechung I–V–I", "sensible frustrée", "accord de tonique complet"],
    regles: "ecole",
  },

  // ── identify 3 — le V structurel de la Bassbrechung à grande échelle (diff 3) ─
  {
    id: "c27-bassbrechung-menuet-16",
    type: "identify",
    cours: 27,
    difficulty: 3,
    tags: ["Bassbrechung", "grande échelle", "V structurel", "tonicisation vs modulation", "forme"],
    concepts: ["arche I–V–I à l'échelle de la pièce", "V médian = tension structurale", "tonicisation ≠ modulation définitive"],
    question:
      "Un menuet classique de 16 mesures (Do majeur) cadence nettement sur V (Sol) à la mesure 8, puis revient à I (Do) à la mesure 16. Comment la lecture schenkérienne interprète-t-elle cette cadence sur V à mi-parcours ?",
    context: "Do majeur, 16 mesures. Cadence sur V (m.8), retour à I (m.16).",
    options: [
      { id: "a", label: "C'est le V structurel de la Bassbrechung : le point de tension médian de l'arche I–V–I qui structure les 16 mesures ; la seconde moitié prolonge le retour vers I", isCorrect: true },
      { id: "b", label: "C'est une modulation définitive en Sol majeur : la pièce change réellement de tonalité pour la seconde moitié", isCorrect: false },
      { id: "c", label: "C'est une simple demi-cadence de surface, sans aucune portée structurale", isCorrect: false },
      { id: "d", label: "C'est une faute de forme : un menuet doit rester à la tonique de bout en bout", isCorrect: false },
    ],
    explanation:
      "La Bassbrechung (I–V–I) est scalable : elle structure aussi bien une phrase de 4 mesures que toute une pièce. Ici, la cadence sur V à la mesure 8 est le V STRUCTUREL — le sommet de tension de l'arche I–V–I sur 16 mesures. Tout ce qui précède prolonge le I (aller), tout ce qui suit prolonge le retour vers I (retour). Le piège (b) confond la tonicisation de V (momentanée, réabsorbée par le retour à I) avec une modulation définitive : la pièce ne quitte jamais vraiment Do majeur. Sous-estimer ce V (c) revient à ignorer la structure profonde.",
    hint: "À quelle échelle la Bassbrechung I–V–I peut-elle s'étendre ? Le V du milieu est-il quitté définitivement ou ré-absorbé par le retour à I ?",
  },
];

// ════════════════════════════════════════════════════════════════════════════
// COURS 28 — Formes musicales : binaire, ternaire, rondo, forme sonate
// ════════════════════════════════════════════════════════════════════════════
//
// Cours d'ANALYSE des formes : exclusivement `identify`, chaque question ancrée
// dans un PLAN de forme concret (tonalités des sections, retours thématiques) et
// un exemple du répertoire enseigné (Bach, Mozart, Beethoven). Les distracteurs
// sont les confusions que le cours combat : binaire fermée vs ouverte, T2 qui
// « resterait » à la dominante en réexposition, fausse réexposition prise pour
// la vraie, rondo confondu avec la forme sonate.

const COURS28_EXERCISES: Exercise[] = [
  // ── identify 1 — plan tonal de la forme binaire majeure (diff 1) ────────────
  {
    id: "c28-binaire-plan-tonal",
    type: "identify",
    cours: 28,
    difficulty: 1,
    tags: ["forme binaire", "plan tonal", "baroque", "danse", "dominante"],
    concepts: ["fin de A à la dominante en majeur", "arc tonal instabilité → retour", "B ramène à la tonique"],
    question:
      "Une allemande de Bach en Sol majeur est en forme binaire (||:A:||·||:B:||). La section A se referme par une cadence à la mesure 8. Sur quelle tonalité aboutit typiquement cette cadence, et pourquoi ?",
    context: "Forme binaire baroque, Sol majeur. Cadence de fin de section A.",
    options: [
      { id: "a", label: "À la dominante (Ré majeur) : la fin de A sur V crée l'instabilité qui appelle la section B, laquelle ramènera à la tonique", isCorrect: true },
      { id: "b", label: "À la tonique (Sol majeur) : chaque section d'une forme binaire se referme obligatoirement sur I", isCorrect: false },
      { id: "c", label: "Au relatif mineur (Mi mineur), passage obligé en mode majeur", isCorrect: false },
      { id: "d", label: "À la sous-dominante (Do majeur)", isCorrect: false },
    ],
    explanation:
      "Dans la forme binaire baroque en majeur, la section A se termine à la dominante (V) : en Sol majeur, cette cadence aboutit à Ré majeur. Cette fin instable (forme binaire « ouverte ») appelle la section B, qui module et revient à la tonique pour conclure — un arc tonal instabilité → résolution à l'échelle de la pièce. La réponse (b) décrit la forme binaire « tonalement fermée », rare et beaucoup moins dynamique. En mineur, ce serait le relatif majeur (III), pas le relatif mineur.",
    hint: "La forme binaire dessine un arc de tension : où doit s'arrêter A pour que B ait un but tonal à atteindre ?",
  },

  // ── identify 2 — forme ternaire menuet–trio–menuet da capo (diff 1) ─────────
  {
    id: "c28-ternaire-menuet-trio",
    type: "identify",
    cours: 28,
    difficulty: 1,
    tags: ["forme ternaire", "ABA", "menuet", "trio", "da capo"],
    concepts: ["Menuet–Trio–Menuet D.C. = ternaire A–B–A", "da capo = retour intégral de A", "grande forme ternaire"],
    question:
      "Un menuet classique est noté « Menuet – Trio – Menuet D.C. ». Quelle est la forme globale, et que désigne le « da capo » ?",
    context: "Menuet (section A) – Trio (section B) – Menuet da capo.",
    options: [
      { id: "a", label: "Forme ternaire A–B–A : le da capo (« depuis le début ») indique le retour intégral du menuet (A) après le trio (B)", isCorrect: true },
      { id: "b", label: "Forme binaire A–B : le da capo est une coda ajoutée à la fin", isCorrect: false },
      { id: "c", label: "Forme rondo A–B–A–C–A : le trio est le premier de plusieurs épisodes", isCorrect: false },
      { id: "d", label: "Forme sonate : le trio joue le rôle du développement", isCorrect: false },
    ],
    explanation:
      "Menuet – Trio – Menuet da capo est l'archétype de la (grande) forme ternaire A–B–A. Le trio (nommé ainsi car joué à l'origine par trois instruments) est la section B contrastante ; le « da capo » renvoie au début et fait rejouer le menuet (A) — souvent sans les reprises. Chez Beethoven, le scherzo remplace le menuet mais garde exactement cette architecture Scherzo–Trio–Scherzo. Le distracteur (d) confond le trio (simple contraste) avec le développement de la forme sonate (fragmentation et errance tonale).",
    hint: "Combien de sections distinctes entend-on, et laquelle revient à l'identique à la fin ?",
  },

  // ── identify 3 — le refrain du rondo comme ancrage tonal (diff 2) ────────────
  {
    id: "c28-rondo-refrain-tonique",
    type: "identify",
    cours: 28,
    difficulty: 2,
    tags: ["rondo", "ABACA", "refrain", "épisodes", "Beethoven Pathétique"],
    concepts: ["le refrain A revient toujours à la tonique", "les épisodes explorent d'autres tonalités", "rondo ≠ forme sonate"],
    question:
      "Le finale de la Sonate « Pathétique » op.13 de Beethoven (Do mineur) est un rondo. À chaque retour, dans quelle tonalité le refrain A revient-il, et qu'est-ce qui le distingue des épisodes ?",
    context: "Rondo, tonique principale Do mineur.",
    options: [
      { id: "a", label: "Toujours à la tonique (Do mineur) : le refrain est le point d'ancrage tonal, tandis que les épisodes B et C explorent d'autres tonalités", isCorrect: true },
      { id: "b", label: "Transposé d'un degré plus haut à chaque retour, pour créer une progression", isCorrect: false },
      { id: "c", label: "Toujours à la dominante (Sol) ; ce sont les épisodes qui reviennent à la tonique", isCorrect: false },
      { id: "d", label: "Une seule fois, comme le thème 1 d'une forme sonate en réexposition", isCorrect: false },
    ],
    explanation:
      "Dans le rondo, le refrain A revient toujours à la tonique principale (Do mineur ici) : c'est ce qui définit son rôle de « foyer » tonal, retrouvé après chaque excursion. Les épisodes (B, C…), eux, voyagent dans d'autres tonalités pour créer le contraste. Le distracteur (d) pointe la différence-clé avec la forme sonate : dans une sonate, T1 et T2 ne reviennent qu'une seule fois (en réexposition) — logique narrative de tension/résolution ; le rondo est cyclique, le thème revenant après CHAQUE épisode.",
    hint: "Qu'est-ce qui fait qu'un rondo « tourne » (ronde) plutôt qu'il ne raconte une histoire en une seule fois ?",
  },

  // ── identify 4 — forme sonate en mineur : T2 en réexposition (diff 2) ────────
  {
    id: "c28-sonate-t2-reexposition",
    type: "identify",
    cours: 28,
    difficulty: 2,
    tags: ["forme sonate", "réexposition", "thème 2", "mode mineur", "Mozart Symphonie 40"],
    concepts: ["exposition mineure : T2 au relatif majeur III", "réexposition : T2 revient à la tonique", "résolution de la polarité tonale"],
    question:
      "Dans l'exposition du 1er mouvement de la Symphonie n°40 de Mozart (Sol mineur), le thème 2 (T2) est en Sib majeur. En réexposition, dans quelle tonalité T2 revient-il, et quel principe fondamental cela illustre-t-il ?",
    context: "Forme sonate, Sol mineur. Exposition : T1 en Sol mineur, T2 en Sib majeur (relatif = III).",
    options: [
      { id: "a", label: "À la tonique (Sol mineur) : la réexposition ramène T2 au ton principal — c'est la résolution de la tension, le principe même de la forme sonate", isCorrect: true },
      { id: "b", label: "Il reste en Sib majeur (III), inchangé par rapport à l'exposition", isCorrect: false },
      { id: "c", label: "Il passe à la dominante (Ré majeur) en réexposition", isCorrect: false },
      { id: "d", label: "Il monte à la sous-dominante (Do mineur)", isCorrect: false },
    ],
    explanation:
      "En mode mineur, T2 est au relatif majeur (III) dans l'exposition — ici Sib majeur. La règle d'or de la forme sonate est que la réexposition ramène T2 à la TONIQUE : le thème 2 revient donc à Sol mineur (parfois en Sol majeur pour adoucir la fin, mais toujours sur la tonique). C'est la résolution de la polarité tonale ouverte par l'exposition. Le distracteur (b) est l'erreur que le cours combat frontalement : si T2 « restait » à la dominante ou au relatif en réexposition, il n'y aurait pas de résolution — et ce ne serait plus une forme sonate.",
    hint: "Toute la tension de la forme sonate vient de T2 « hors du foyer ». Que doit-il se passer pour qu'elle se résolve ?",
  },

  // ── identify 5 — développement : la fausse réexposition (diff 3) ─────────────
  {
    id: "c28-sonate-fausse-reexposition",
    type: "identify",
    cours: 28,
    difficulty: 3,
    tags: ["forme sonate", "développement", "fausse réexposition", "tonalité", "Beethoven Héroïque"],
    concepts: ["réexposition définie par le retour à la TONIQUE, pas seulement du thème", "le développement doit aboutir sur V", "fausse réexposition = leurre"],
    question:
      "Au sein du développement d'une forme sonate en Do majeur, un compositeur ramène le thème 1 — mais en Mi bémol majeur, pas à la tonique. Comment nomme-t-on ce procédé, et que doit encore accomplir le développement ensuite ?",
    context: "Forme sonate, tonique Do majeur. Retour de T1 en Mib majeur, au milieu du développement.",
    options: [
      { id: "a", label: "Une fausse réexposition : le retour de T1 hors tonique est un leurre ; le développement doit repartir moduler puis aboutir sur V (dominante) pour préparer la vraie réexposition à la tonique", isCorrect: true },
      { id: "b", label: "La vraie réexposition : dès que T1 réapparaît, la réexposition commence, quelle que soit la tonalité", isCorrect: false },
      { id: "c", label: "Une coda anticipée qui conclut le mouvement", isCorrect: false },
      { id: "d", label: "Une faute de forme : le thème 1 ne peut jamais reparaître dans le développement", isCorrect: false },
    ],
    explanation:
      "C'est une fausse réexposition : le thème 1 réapparaît, mais dans une tonalité étrangère (Mib majeur au lieu de Do), ce qui trompe l'auditeur avant que la musique ne reparte moduler. Ce qui définit la vraie réexposition n'est pas le retour du thème mais le retour à la TONIQUE — d'où l'erreur du distracteur (b). Le développement doit encore accomplir son office : traverser d'autres tonalités puis se fixer sur la dominante (V), souvent en pédale, pour préparer le vrai retour de T1 à la tonique. Beethoven en fait un usage célèbre dans la Symphonie n°3 « Héroïque ».",
    hint: "Qu'est-ce qui définit une réexposition : le retour du thème, ou le retour de la tonique ?",
  },
];

// ════════════════════════════════════════════════════════════════════════════
// COURS 29 — Analyse comparative du répertoire : identifier une période au style
// ════════════════════════════════════════════════════════════════════════════
//
// Cours COMPARATIF (baroque / classique / romantique / impressionniste) : la
// même mélodie harmonisée selon les époques, et l'art d'identifier une période
// par ses critères. Dominante `identify` (reconnaître un style à un faisceau de
// traits, opposer deux écritures) ; un `build` central de l'impressionnisme (la
// gamme par tons, que le cours donne explicitement). Les distracteurs sont les
// confusions de période que le cours démonte (chromatisme romantique vs
// impressionniste ; basse continue vs basse d'Alberti).

const COURS29_EXERCISES: Exercise[] = [
  // ── identify 1 — reconnaître le baroque à ses trois critères (diff 1) ────────
  {
    id: "c29-identifier-baroque",
    type: "identify",
    cours: 29,
    difficulty: 1,
    tags: ["baroque", "basse continue", "contrepoint", "cadences", "identification de période"],
    concepts: ["basse continue chiffrée", "contrepoint rigoureux", "cadences V–I fréquentes et ornées"],
    question:
      "Une pièce présente une basse continue chiffrée, un contrepoint rigoureux à plusieurs voix indépendantes, et des cadences V–I fréquentes ornées d'un trille sur la sensible. De quelle période stylistique s'agit-il ?",
    context: "Faisceau d'indices : basse continue + contrepoint + cadences fréquentes ornées.",
    options: [
      { id: "a", label: "La période baroque (Bach, Haendel, Vivaldi)", isCorrect: true },
      { id: "b", label: "Le classicisme viennois (Mozart, Haydn)", isCorrect: false },
      { id: "c", label: "Le romantisme (Schubert, Chopin, Wagner)", isCorrect: false },
      { id: "d", label: "L'impressionnisme (Debussy, Ravel)", isCorrect: false },
    ],
    explanation:
      "Trois critères combinés signent le baroque : (1) la basse continue chiffrée réalisée au continuo (clavecin, orgue, théorbe), (2) le contrepoint rigoureux entre voix indépendantes, (3) des cadences V–I fréquentes et affirmées, ornées d'un trille cadentiel sur la sensible. Aucun de ces traits seul ne suffit, mais leur combinaison est caractéristique. Le classicisme abandonne la basse continue pour la basse d'Alberti et l'écriture homophonique ; l'impressionnisme dissout la cadence V–I fonctionnelle.",
    hint: "Un seul de ces indices — la basse continue chiffrée — écarte déjà le classicisme et tout ce qui suit.",
  },

  // ── identify 2 — baroque vs classique : la texture d'accompagnement (diff 2) ─
  {
    id: "c29-baroque-vs-classique-basse",
    type: "identify",
    cours: 29,
    difficulty: 2,
    tags: ["baroque", "classique", "basse continue", "basse d'Alberti", "phrases symétriques"],
    concepts: ["basse continue + contrepoint = baroque", "basse d'Alberti + phrases 4+4 = classique viennois", "texture d'accompagnement comme indice"],
    question:
      "On compare deux accompagnements. Extrait 1 : une basse continue chiffrée réalisée au clavecin sous un contrepoint à voix indépendantes. Extrait 2 : une basse d'Alberti (arpège brisé fondamentale–quinte–tierce–quinte) sous une mélodie chantante taillée en phrases de 4+4 mesures. À quelles périodes appartiennent-ils respectivement ?",
    context: "Extrait 1 : basse continue + contrepoint. Extrait 2 : basse d'Alberti + phrases 4+4.",
    options: [
      { id: "a", label: "Baroque puis classique : la basse continue et le contrepoint signent le baroque ; la basse d'Alberti et les phrases symétriques signent le classicisme viennois", isCorrect: true },
      { id: "b", label: "Classique puis baroque : l'ordre est inversé", isCorrect: false },
      { id: "c", label: "Les deux sont baroques : la basse d'Alberti est une forme de basse continue", isCorrect: false },
      { id: "d", label: "Les deux sont classiques : le contrepoint est typique de Mozart", isCorrect: false },
    ],
    explanation:
      "La texture d'accompagnement est un indice de période très sûr. La basse continue chiffrée sous un contrepoint est baroque : plusieurs voix indépendantes, réalisation au continuo. La basse d'Alberti (arpège régulier fondamentale–quinte–tierce–quinte) sous une mélodie en phrases symétriques de 4+4 mesures (antécédent/conséquent) est la signature du classicisme viennois (Mozart, Haydn) : une mélodie accompagnée homophonique remplace le contrepoint. Le distracteur (c) est faux : la basse d'Alberti est un accompagnement écrit d'accords brisés, sans rien de la basse continue chiffrée improvisée.",
    hint: "Contrepoint de voix indépendantes vs mélodie accompagnée d'arpèges réguliers : deux mondes, deux époques.",
  },

  // ── identify 3 — la même mélodie : où la cadence V–I disparaît (diff 1) ──────
  {
    id: "c29-melodie-cadence-vi",
    type: "identify",
    cours: 29,
    difficulty: 1,
    tags: ["comparatif", "cadence V–I", "impressionnisme", "fonction vs couleur", "Debussy"],
    concepts: ["une mélodie, cinq harmonisations", "l'impressionnisme abandonne la cadence V–I fonctionnelle", "accord = couleur, non fonction"],
    question:
      "Cœur du cours : une même mélodie est harmonisée dans cinq styles. Dans lequel la cadence V–I cesse-t-elle d'être le pilier qui structure l'harmonie ?",
    context: "Comparaison baroque / classique / romantique / post-romantique / impressionniste de la même mélodie.",
    options: [
      { id: "a", label: "L'impressionnisme (Debussy) : les accords progressent par couleur et registre, non par tension–résolution ; y chercher un V–I fonctionnel serait le mauvais outil", isCorrect: true },
      { id: "b", label: "Le baroque de Bach, où la dominante est évitée", isCorrect: false },
      { id: "c", label: "Le classicisme de Mozart, qui préfère la cadence plagale IV–I", isCorrect: false },
      { id: "d", label: "Le romantisme de Schubert, qui n'utilise jamais la dominante", isCorrect: false },
    ],
    explanation:
      "Bach, Mozart et Schubert structurent tous leur discours autour de la cadence V–I (avec, chez Schubert, un enrichissement chromatique). Debussy est le seul à l'abandonner délibérément : chez lui, un accord est une couleur, non une fonction ; les accords de 9e, 11e, 13e glissent d'une couleur à l'autre sans « résoudre ». Analyser un prélude de Debussy avec les fonctions T/SD/D, c'est appliquer le mauvais outil — l'analyse modale et timbrale est plus adaptée. Les distracteurs inversent les faits : baroque et classicisme affirment au contraire la dominante.",
    hint: "Quel style pense en couleurs sonores plutôt qu'en tensions à résoudre ?",
  },

  // ── build — la gamme par tons de Debussy (diff 2) ────────────────────────────
  {
    id: "c29-build-gamme-par-tons",
    type: "build",
    cours: 29,
    difficulty: 2,
    tags: ["impressionnisme", "gamme par tons", "Debussy", "ambiguïté tonale", "construction"],
    concepts: ["six sons séparés d'un ton entier", "ni sensible ni sous-tonique", "orthographe Fa#–Sol#–La#"],
    question:
      "Debussy emploie la gamme par tons pour dissoudre la tonalité : sans demi-ton, elle n'a ni sensible ni sous-tonique, donc aucune tonique claire. Construisez-la à partir de Do, en montant (six sons).",
    keySignature: "C",
    correctNotes: ["C", "D", "E", "F#", "G#", "A#"],
    explanation:
      "La gamme par tons à partir de Do : Do – Ré – Mi – Fa# – Sol# – La# (puis Do à l'octave). Chaque degré est séparé du suivant par un ton entier. Faute de demi-ton, il n'y a ni sensible (pas de Si→Do) ni sous-tonique : impossible d'y désigner une tonique — d'où l'atmosphère flottante et l'ambiguïté tonale totale recherchées par Debussy (Voiles, La cathédrale engloutie). On écrit Fa#, Sol#, La# (et non Solb, Lab, Sib) pour conserver une note par degré alphabétique jusqu'au dièse.",
    hint: "Ne posez que des tons entiers : après Mi, le ton entier tombe sur Fa#, non sur Fa.",
  },

  // ── identify 4 — chromatisme romantique vs impressionniste (diff 3) ──────────
  {
    id: "c29-chromatisme-romantique-vs-impressionniste",
    type: "identify",
    cours: 29,
    difficulty: 3,
    tags: ["romantisme", "impressionnisme", "chromatisme", "fonction vs couleur", "Tristan"],
    concepts: ["chromatisme romantique = tensions fonctionnelles résolues", "chromatisme impressionniste = couleurs non fonctionnelles", "même densité, usages opposés"],
    question:
      "Deux extraits usent abondamment de notes altérées. Extrait A : les altérations créent des tensions (dominantes secondaires, sixte augmentée, accord de Tristan) qui finissent par se résoudre vers des degrés fonctionnels. Extrait B : des accords de 9e se déplacent en mouvement parallèle (planing) sur une gamme par tons, sans jamais résoudre. Comment classer ces deux chromatismes ?",
    context: "A : altérations qui tendent puis résolvent. B : accords parallèles non résolus sur gamme par tons.",
    options: [
      { id: "a", label: "A = chromatisme romantique (fonctionnel : les tensions se résolvent) ; B = chromatisme impressionniste (couleurs non fonctionnelles, sans tension–résolution)", isCorrect: true },
      { id: "b", label: "A = impressionniste, B = romantique : l'ordre est inversé", isCorrect: false },
      { id: "c", label: "Les deux relèvent du même chromatisme ; seule l'époque de composition change", isCorrect: false },
      { id: "d", label: "A est baroque (le triton y est résolu) et B est classique", isCorrect: false },
    ],
    explanation:
      "La distinction ne tient pas à la quantité de chromatisme mais à son usage. Le chromatisme romantique (Wagner, Chopin, Brahms) est fonctionnel : dominantes secondaires, sixtes augmentées, accord de Tristan créent des tensions qui — même longtemps différées — s'inscrivent dans un système de tension–résolution. Le chromatisme impressionniste (Debussy) est non fonctionnel : modes, gamme par tons, accords parallèles produisent des couleurs qui glissent sans résolution obligatoire. Le distracteur (c) est précisément l'erreur que le cours démonte : ce n'est pas « plus de chromatisme », c'est un chromatisme d'une autre nature.",
    hint: "Demandez-vous si les altérations veulent aller quelque part (se résoudre) ou si elles ne font que colorer.",
  },
];

export {
  COURS26_EXERCISES,
  COURS24_EXERCISES,
  COURS32_EXERCISES,
  COURS27_EXERCISES,
  COURS28_EXERCISES,
  COURS29_EXERCISES,
};
