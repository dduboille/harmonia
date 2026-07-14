/**
 * lib/harmonic-analysis.ts
 * Harmonia — Moteur d'analyse harmonique (fonctions pures, sans XML ni HTTP).
 */

export type Fonction = "T" | "SD" | "D" | "?";

export type Categorie =
  | "diatonique"
  | "dominante_secondaire"
  | "sensible_degre"
  | "emprunt"
  | "napolitain"
  | "sixte_augmentee"
  | "chromatique";

/** Une note telle qu'ÉCRITE — l'orthographe seule distingue un Fa# d'un Solb. */
export interface SpelledNote {
  step: string;
  alter: number;
  pc: number;
}

export interface Chord {
  rootPc: number;
  rootFr: string;
  quality: string;
  pcs: number[];
  /** Hauteur de la note la plus GRAVE. C'est elle qui donne le renversement. */
  bassPc?: number;
  /** Notes du segment avec leur orthographe (pour les sixtes augmentées). */
  spelled?: SpelledNote[];
}

export interface ChordResult {
  rootPc: number;
  rootFr: string;
  quality: string;
  /**
   * Les classes de hauteurs de l'accord. Conservées car l'analyse d'un accord
   * isolé peut devoir être RÉVISÉE au vu de la séquence : la cible d'une 7e
   * diminuée n'est tranchée que par sa résolution (cf. `annotateResolutions`).
   */
  pcs: number[];
  bassPc?: number;
  /**
   * Nom français de la basse. Le moteur ne connaît que des CLASSES DE HAUTEURS :
   * il ne pose ici qu'un repli (`NOTE_FR`), qui rend "Sol#" là où la partition
   * écrit peut-être "Lab". L'appelant qui dispose de l'orthographe réelle
   * (`Chord.spelled`) doit écraser cette valeur.
   */
  bassFr?: string;
  degree: string;
  degreeNum: number;
  fonction: Fonction;
  categorie: Categorie;
  cible?: string;
  resolue?: boolean;
  beat?: number;
}

// ── Constantes ────────────────────────────────────────────────────────────────

export const NOTE_FR: Record<number, string> = {
  0: "Do", 1: "Do#", 2: "Ré", 3: "Ré#", 4: "Mi",
  5: "Fa", 6: "Fa#", 7: "Sol", 8: "Sol#", 9: "La", 10: "La#", 11: "Si",
};

/** Raccourci lisible pour les tests. */
export const PC = { Do: 0, Ré: 2, Mi: 4, Fa: 5, Sol: 7, La: 9, Si: 11 } as const;

export const CHORD_PATTERNS: Array<{ quality: string; intervals: number[] }> = [
  { quality: "Maj7", intervals: [0, 4, 7, 11] },
  { quality: "7",    intervals: [0, 4, 7, 10] },
  { quality: "m7",   intervals: [0, 3, 7, 10] },
  { quality: "°7",   intervals: [0, 3, 6, 9]  },
  { quality: "ø7",   intervals: [0, 3, 6, 10] },
  { quality: "aug",  intervals: [0, 4, 8]     },
  { quality: "",     intervals: [0, 4, 7]     },
  { quality: "m",    intervals: [0, 3, 7]     },
  { quality: "°",    intervals: [0, 3, 6]     },
  { quality: "sus4", intervals: [0, 5, 7]     },
  { quality: "sus2", intervals: [0, 2, 7]     },
];

/** Intervalles des 7 degrés (pour la numérotation romaine). */
const MAJOR_DEGREES = [0, 2, 4, 5, 7, 9, 11];
const MINOR_DEGREES = [0, 2, 3, 5, 7, 8, 10];

export const ROMANS = ["I", "II", "III", "IV", "V", "VI", "VII"];

// ── Identification d'accord ───────────────────────────────────────────────────

/**
 * ATTENTION — pour la 7e DIMINUÉE (empilement de tierces mineures, accord
 * SYMÉTRIQUE), la fondamentale renvoyée ici est ARBITRAIRE : c'est la première
 * note rencontrée dans l'ordre d'écriture. Elle ne doit jamais servir telle
 * quelle à chiffrer l'accord — cf. `canonicalRootPc`.
 */
export function identifyChord(pcs: number[]): Chord | null {
  const unique = [...new Set(pcs.map((p) => ((p % 12) + 12) % 12))];
  if (unique.length < 2) return null;

  for (const pattern of CHORD_PATTERNS) {
    if (pattern.intervals.length > unique.length) continue;
    for (const root of unique) {
      const norm = unique.map((p) => (p - root + 12) % 12);
      if (pattern.intervals.every((iv) => norm.includes(iv))) {
        return {
          rootPc: root,
          rootFr: NOTE_FR[root] ?? "?",
          quality: pattern.quality,
          pcs: unique,
        };
      }
    }
  }
  return null;
}

/**
 * Qualités dont la QUINTE peut manquer.
 *
 * L'ellipse de la quinte est l'usage courant de l'écriture à quatre voix — tout
 * choral de Bach en est plein — mais elle ne se conçoit que pour une quinte
 * JUSTE. Dans un accord diminué, augmenté ou de sensible, la quinte EST la
 * qualité : l'ôter ne l'ellipse pas, elle le détruit. Les accords sus, eux, n'ont
 * pas de tierce : privés de leur quinte, il ne resterait rien qui les qualifie.
 *
 * La TIERCE, elle, ne manque jamais : sans elle l'accord n'a pas de qualité, et
 * une quinte à vide (Do-Sol) doit rester non identifiée plutôt que d'être devinée.
 */
const QUINTE_OMISSIBLE = new Set(["", "m", "7", "m7", "Maj7"]);

/**
 * Les accords « sus » NE SONT PAS des accords de l'harmonie tonale : ce sont des
 * RETARDS — une note qui tarde à rejoindre la tierce. Ils n'ont donc leur mot à
 * dire que là où AUCUNE lecture en tierces n'existe.
 *
 * Sans cette barrière, la moindre pédale ou le moindre retard de cadence
 * renverse la fonction tonale : Sol-Si-Fa sur une basse de Do (V7 à quinte omise
 * au-dessus d'une pédale de tonique) se lit « Isus4 » — fonction T là où il faut
 * D — parce que le sus4 est COMPLET quand la 7e de dominante est incomplète.
 */
const RETARDS = new Set(["sus4", "sus2"]);

/**
 * Score d'une lecture, par ordre de priorité DÉCROISSANTE. Comparaison
 * lexicographique : le plus petit gagne.
 */
type ScoreLecture = [
  retard: number,
  manquantes: number,
  restes: number,
  rang: number,
  pasFondAuBasse: number,
];

function scoreInferieur(a: ScoreLecture, b: ScoreLecture): boolean {
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return a[i] < b[i];
  }
  return false;
}

/**
 * Identification d'accord par SCORE, la BASSE en arbitre.
 *
 * `identifyChord` rendait le PREMIER motif de `CHORD_PATTERNS` qui collait :
 * l'ordre du tableau décidait de l'analyse. On énumère ici toutes les lectures
 * (motif × fondamentale candidate) et on retient la meilleure, dans cet ordre :
 *
 *  1. `retard` — toute lecture EN TIERCES bat un sus2 / sus4, fût-elle incomplète
 *     (cf. `RETARDS`) : un retard n'est pas un accord ;
 *  2. `manquantes` — une lecture COMPLÈTE bat toujours une lecture à quinte omise
 *     (cf. `QUINTE_OMISSIBLE`) ;
 *  3. `restes` — le moins de notes INEXPLIQUÉES : la 7e de dominante explique le
 *     Fa que la triade laisserait de côté ;
 *  4. `rang` — l'ordre de `CHORD_PATTERNS`. Il DOIT passer avant la basse. Sinon
 *     une note de PÉDALE, étrangère à l'harmonie, se fait fondamentale du sus2 /
 *     sus4 qu'elle forme avec l'accord réel, et la FONCTION TONALE s'inverse sur
 *     la texture la plus banale du répertoire : le ii sur pédale de dominante
 *     (Ré-Fa-La sur Sol) se lirait « Vsus2 » — dominante au lieu de
 *     sous-dominante ; le V sur pédale de tonique, « Isus2 ». Les accords sus
 *     étant derniers dans `CHORD_PATTERNS`, le rang les écarte au profit du vrai
 *     accord ;
 *  5. `fondAuBasse` — à rang égal, la basse tranche : c'est le cas de la 7e
 *     diminuée, dont les quatre lectures relèvent du MÊME motif symétrique et ne
 *     se départagent donc pas par le rang. L'état fondamental prime alors sur le
 *     renversement.
 *
 * (La fondamentale d'une 7e diminuée reste ensuite soumise à `canonicalRootPc`
 * puis à la résolution : voir `annotateResolutions`.)
 */
export function identifyChordFromNotes(pcs: number[], bassPc?: number): Chord | null {
  const unique = [...new Set(pcs.map((p) => ((p % 12) + 12) % 12))];
  if (unique.length < 2) return null;

  let meilleur: { chord: Chord; score: ScoreLecture } | null = null;

  for (let rang = 0; rang < CHORD_PATTERNS.length; rang++) {
    const pattern = CHORD_PATTERNS[rang];
    // Un motif peut compter UNE note de plus que l'effectif entendu : la quinte omise.
    if (pattern.intervals.length > unique.length + 1) continue;

    for (const root of unique) {
      const norm = new Set(unique.map((p) => (p - root + 12) % 12));
      const presents = pattern.intervals.filter((iv) => norm.has(iv));
      const manquantes = pattern.intervals.length - presents.length;

      if (manquantes > 1) continue;
      // La seule note tolérée absente est la QUINTE (`intervals[2]`), et seulement
      // là où elle est juste.
      if (manquantes === 1 &&
          (!QUINTE_OMISSIBLE.has(pattern.quality) || norm.has(pattern.intervals[2]))) {
        continue;
      }

      const score: ScoreLecture = [
        RETARDS.has(pattern.quality) ? 1 : 0,
        manquantes,
        unique.length - presents.length,
        rang,
        bassPc !== undefined && root === bassPc ? 0 : 1,
      ];

      if (meilleur === null || scoreInferieur(score, meilleur.score)) {
        meilleur = {
          chord: {
            rootPc: root,
            rootFr: NOTE_FR[root] ?? "?",
            quality: pattern.quality,
            pcs: unique,
            bassPc,
          },
          score,
        };
      }
    }
  }

  return meilleur ? meilleur.chord : null;
}

// ── Helpers tonalité ──────────────────────────────────────────────────────────

/**
 * Ensemble des hauteurs considérées diatoniques.
 * En MINEUR, on inclut la 7e ÉLEVÉE (11) : sans cela, l'accord de V (Sol-Si♮-Ré
 * en Do mineur) serait déclaré non diatonique — régression inacceptable.
 */
export function diatonicSet(tonicPc: number, mode: "major" | "minor"): Set<number> {
  const base = mode === "major" ? MAJOR_DEGREES : [...MINOR_DEGREES, 11];
  return new Set(base.map((s) => (tonicPc + s) % 12));
}

/** Numéro de degré (1-7) de la fondamentale, ou null si chromatique. */
export function degreeOfRoot(
  rootPc: number, tonicPc: number, mode: "major" | "minor",
): number | null {
  const iv = (rootPc - tonicPc + 12) % 12;
  const degrees = mode === "major" ? MAJOR_DEGREES : MINOR_DEGREES;
  let idx = degrees.indexOf(iv);
  if (idx === -1 && mode === "minor" && iv === 11) idx = 6; // sensible (7e élevée)
  return idx === -1 ? null : idx + 1;
}

/** Hauteur (pc) d'un degré donné. */
export function pcOfDegree(num: number, tonicPc: number, mode: "major" | "minor"): number {
  const degrees = mode === "major" ? MAJOR_DEGREES : MINOR_DEGREES;
  return (tonicPc + degrees[num - 1]) % 12;
}

/**
 * Fonction tonale d'un degré.
 *
 * LE MINEUR A DEUX 7es DEGRÉS, et ils n'ont pas la même fonction :
 *  - la SENSIBLE (7e élevée, `tonic+11`) est la tierce du V : fonction D ;
 *  - la SOUS-TONIQUE naturelle (`tonic+10`) n'a rien d'une dominante — elle ne
 *    conduit pas à la tonique. Le même Sib majeur est un emprunt bVII de
 *    fonction SD en Do majeur : il ne peut pas devenir dominante au seul motif
 *    que la tonalité est mineure. Fonction SD.
 * En majeur, le 7e degré est la sensible : fonction D.
 */
export function fonctionOfDegree(
  num: number, rootPc: number, tonicPc: number, mode: "major" | "minor",
): Fonction {
  if ([1, 3, 6].includes(num)) return "T";
  if ([2, 4].includes(num)) return "SD";
  if (num === 5) return "D";
  if (num === 7) {
    if (mode === "major") return "D";
    return (rootPc - tonicPc + 12) % 12 === 11 ? "D" : "SD";
  }
  return "?";
}

/**
 * Cibles TONICISABLES : ni la tonique, ni un degré diminué.
 *
 * La tonique en est exclue à dessein, et cette exclusion vaut pour les
 * dominantes secondaires : un « V de la tonique », c'est le V — il n'y a rien à
 * toniciser. (Les accords de SENSIBLE, eux, peuvent viser la tonique : ils ont
 * leur propre liste, cf. `leadingTargets`.)
 *
 * L'ordre est celui de la PRIORITÉ de tonicisation, et non celui de la gamme :
 * il sert d'arbitre en repli quand plusieurs cibles sont possibles (cas de la
 * 7e diminuée, symétrique — cf. `analyzeChord`, règle 3). La dominante est de
 * loin la cible la plus fréquente, viennent ensuite les degrés du relatif.
 * Quand la séquence fournit une résolution, c'est elle qui tranche
 * (cf. `annotateResolutions`) — cette priorité ne s'applique qu'à défaut.
 */
export function tonicizableTargets(mode: "major" | "minor"): Array<{ num: number; label: string }> {
  return mode === "major"
    ? [{ num: 5, label: "V" }, { num: 2, label: "ii" }, { num: 6, label: "vi" },
       { num: 4, label: "IV" }, { num: 3, label: "iii" }]
    : [{ num: 5, label: "V" }, { num: 4, label: "iv" }, { num: 6, label: "VI" },
       { num: 3, label: "III" }, { num: 7, label: "VII" }];
}

/** Le degré visé est-il la TONIQUE ? (chiffrage sans barre — cf. `leadingReading`) */
function isTonicTarget(target: { num: number }): boolean {
  return target.num === 1;
}

/**
 * Cibles d'un accord de SENSIBLE (° / °7 / ø7) : la TONIQUE d'abord, puis les
 * degrés tonicisables.
 *
 * La tonique n'est pas « tonicisable » — mais un accord de sensible qui s'y
 * résout n'est pas une tonicisation : c'est le vii° de la tonalité, tout
 * simplement. Lui refuser la tonique pour cible condamnait Si-Ré-Fa-Lab en Do
 * MAJEUR — la 7e diminuée de sensible, l'accord chromatique le plus banal du
 * répertoire — à se faire lire « vii°7/vi » sur son seul Lab (sensible de La),
 * alors qu'il porte la dominante et résout sur Do. Il est premier dans l'ordre
 * de priorité : la tonique est la résolution de loin la plus probable d'un
 * accord bâti sur la sensible de la tonalité.
 */
export function leadingTargets(mode: "major" | "minor"): Array<{ num: number; label: string }> {
  return [
    { num: 1, label: mode === "major" ? "I" : "i" },
    ...tonicizableTargets(mode),
  ];
}

/**
 * Toutes les lectures possibles d'un accord de sensible : couples
 * (fondamentale candidate, cible visée), rendus dans l'ordre de priorité des
 * cibles.
 *
 * La 7e diminuée est SYMÉTRIQUE (empilement de tierces mineures) : ses quatre
 * notes peuvent chacune être la fondamentale, et donc viser quatre cibles
 * différentes. `identifyChord` en choisit une arbitrairement (la première
 * rencontrée dans l'ordre du MusicXML) : on ne peut pas s'y fier.
 * Pour les autres qualités (° et ø7), la fondamentale est univoque.
 */
export function leadingCandidates(
  pcs: number[], quality: string, rootPc: number,
  tonicPc: number, mode: "major" | "minor",
): Array<{ root: number; target: { num: number; label: string } }> {
  const candidats = quality === "°7" ? pcs : [rootPc];
  const out: Array<{ root: number; target: { num: number; label: string } }> = [];

  // Boucle externe sur les CIBLES (par priorité) : le résultat ne dépend donc
  // pas de l'ordre des notes de l'accord.
  for (const target of leadingTargets(mode)) {
    const targetPc = pcOfDegree(target.num, tonicPc, mode);
    for (const root of candidats) {
      if (root === (targetPc + 11) % 12) out.push({ root, target }); // demi-ton sous la cible
    }
  }
  return out;
}

const DOMINANT_QUALITIES = new Set(["", "7"]);

const LEADING_QUALITIES = new Set(["°", "°7", "ø7"]);

/**
 * Cibles tonicisables situées une quinte juste SOUS la fondamentale : lectures
 * « dominante secondaire » plausibles de l'accord, par ordre de priorité.
 */
export function dominantCandidates(
  rootPc: number, tonicPc: number, mode: "major" | "minor",
): Array<{ num: number; label: string }> {
  return tonicizableTargets(mode).filter(
    (t) => rootPc === (pcOfDegree(t.num, tonicPc, mode) + 7) % 12,
  );
}

function leadingPrefix(
  rootPc: number, quality: string, inversion: number, tonicPc: number,
): string {
  return "vii" + chiffrage(rootPc, quality, inversion, tonicPc);
}

/**
 * Ensemble diatonique du mode HOMONYME (pour détecter les emprunts).
 *
 * ATTENTION : on construit cet ensemble sur les degrés BRUTS, et non via
 * `diatonicSet`. L'homonyme du majeur est le mineur NATUREL, sans 7e élevée.
 * `diatonicSet(_, "minor")` inclut la 7e élevée — c'est indispensable pour que
 * le V du mode mineur reste diatonique, mais c'est bien trop permissif ici :
 * avec elle, un Mi♭ AUGMENTÉ (Mi♭-Sol-Si♮) en Do majeur passait pour un
 * « emprunt bIII », alors que le Si♮ n'appartient pas au Do mineur naturel.
 */
function parallelSet(tonicPc: number, mode: "major" | "minor"): Set<number> {
  const base = mode === "major" ? MINOR_DEGREES : MAJOR_DEGREES;
  return new Set(base.map((s) => (tonicPc + s) % 12));
}

/**
 * Étiquettes des degrés ALTÉRÉS atteignables par la règle de l'emprunt :
 * fondamentales à la fois HORS de la gamme et DANS le mode homonyme.
 *
 *  - en MAJEUR, l'homonyme est le mineur : il apporte les degrés ABAISSÉS
 *    b3, b6, b7 (Mib, Lab, Sib en Do majeur) ;
 *  - en MINEUR, l'homonyme est le majeur : il apporte les degrés ÉLEVÉS #3 et
 *    #6 (Mi♮, La♮ en Do mineur — la 6te élevée est l'inflexion dorienne). La 7e
 *    élevée n'y figure pas : `degreeOfRoot` la reconnaît déjà comme la sensible,
 *    7e degré à part entière du mineur harmonique.
 *
 * (Le napolitain bII a sa propre règle — il n'est pas un emprunt modal.)
 *
 * L'altération est un PRÉFIXE (bVI, #VI) ; la CASSE du chiffre romain dit la
 * qualité (majeur / mineur), et le symbole de qualité est accolé comme partout
 * ailleurs — cf. `empruntLabel`.
 */
const ALTERED_DEGREES: Record<
  "major" | "minor",
  Record<number, { prefix: string; roman: string; fonction: Fonction }>
> = {
  major: {
    3:  { prefix: "b", roman: "III", fonction: "T"  },
    8:  { prefix: "b", roman: "VI",  fonction: "SD" },
    10: { prefix: "b", roman: "VII", fonction: "SD" },
  },
  minor: {
    4: { prefix: "#", roman: "III", fonction: "T"  },
    9: { prefix: "#", roman: "VI",  fonction: "SD" },
  },
};

function isMinorish(quality: string): boolean {
  return quality === "m" || quality === "m7" || quality === "°" ||
         quality === "°7" || quality === "ø7";
}

const INTERVALS_OF: Record<string, number[]> = Object.fromEntries(
  CHORD_PATTERNS.map((p): [string, number[]] => [p.quality, p.intervals]),
);

/**
 * Renversement d'après la BASSE RÉELLE : 0 = état fondamental, 1/2/3 = 1er, 2e, 3e.
 *
 * Si la basse n'appartient pas à l'accord (pédale, note étrangère, basse
 * inconnue), on ne chiffre pas au jugé : état fondamental. Un chiffrage inventé
 * serait pire que pas de chiffrage — il se lit comme une affirmation.
 */
export function inversionOf(rootPc: number, quality: string, bassPc?: number): number {
  if (bassPc === undefined) return 0;
  const intervals = INTERVALS_OF[quality];
  if (!intervals) return 0;
  const idx = intervals.indexOf((((bassPc - rootPc) % 12) + 12) % 12);
  return idx === -1 ? 0 : idx;
}

/**
 * Symbole de QUALITÉ accolé au chiffre romain.
 *
 * La casse du chiffre dit déjà « majeur » ou « mineur » ; ce symbole dit le
 * RESTE (diminué, demi-diminué, augmenté, 7e majeure) — et il n'est jamais
 * facultatif : « ii7 » se lit Rém7, ce n'est pas l'accord Ré-Fa-Lab-Do (iiø7) ;
 * « bVI7 » se lit Lab7, ce n'est pas Lab Maj7 (bVIΔ7). Un symbole manquant,
 * c'est un autre accord.
 *
 * Le chiffre, lui, ne vient plus d'ici : il dit le RENVERSEMENT (cf. `figureOf`).
 */
const QUALITY_MARK: Record<string, string> = {
  "":     "",     // parfait majeur   → I
  "m":    "",     // parfait mineur   → i
  "°":    "°",    // diminué          → vii°
  "aug":  "+",    // augmenté         → III+
  "7":    "",     // 7e de dominante  → V7   (le « 7 » est le chiffrage)
  "m7":   "",     // 7e mineure       → ii7  (la minuscule dit « mineur »)
  "Maj7": "Δ",    // 7e majeure       → IΔ7
  "°7":   "°",    // 7e diminuée      → vii°7
  "ø7":   "ø",    // 7e de sensible   → iiø7
  "sus4": "sus4",
  "sus2": "sus2",
};

/** Chiffrage des triades — aucune n'a jamais porté de « + ». */
const FIGURES_TRIADE = ["", "6", "6/4"];

const SEVENTHS = new Set(["7", "m7", "Maj7", "°7", "ø7"]);

/** Degrés d'échelle des sons de l'accord (fondamentale, 3ce, 5te, 7e). */
const DEGRES_ACCORD = [0, 2, 4, 6];

/**
 * Intervalle (1..7) auquel se trouve la SENSIBLE de la tonalité au-dessus de la
 * basse, ou `null` si l'accord ne la contient pas. 1 = la sensible EST la basse.
 */
function intervalleSensible(
  rootPc: number, quality: string, inversion: number, tonicPc: number,
): number | null {
  const intervals = INTERVALS_OF[quality];
  if (!intervals) return null;
  const j = intervals.indexOf(((((tonicPc + 11) - rootPc) % 12) + 12) % 12);
  if (j === -1 || inversion >= DEGRES_ACCORD.length) return null;
  return ((((DEGRES_ACCORD[j] - DEGRES_ACCORD[inversion]) % 7) + 7) % 7) + 1;
}

/**
 * Chiffrage FRANÇAIS. Le « + » marque la SENSIBLE de la tonalité, à l'intervalle
 * où elle se trouve au-dessus de la basse : c'est lui qui NOMME l'accord (« sixte
 * sensible » = +6, « triton » = +4). Le chiffre dépend donc de la TONALITÉ, et
 * pas seulement de l'accord : Sol-Si-Ré-Fa sur une basse de Ré porte la sensible
 * (Si) à la 6te — +6 ; sur une basse de Fa, à la quarte augmentée — +4.
 *
 * Sans sensible dans l'accord — un ii7, un IΔ7 —, il n'y a rien à marquer :
 * chiffres nus (6/5, 4/3, 2).
 *
 * Le « + » est réservé aux SEPTIÈMES : c'est là que la tradition l'emploie (7e de
 * dominante, 7e diminuée, 7e de sensible). Les triades gardent "", "6", "6/4".
 */
export function figureOf(
  rootPc: number, quality: string, inversion: number, tonicPc: number,
): string {
  if (!SEVENTHS.has(quality)) return FIGURES_TRIADE[inversion] ?? "";

  const sens = intervalleSensible(rootPc, quality, inversion, tonicPc);
  switch (inversion) {
    case 0: return "7";
    case 1: return sens === 6 ? "+6/5" : "6/5";
    case 2: return sens === 6 ? "+6" : sens === 4 ? "+4" : "4/3";
    case 3: return sens === 4 ? "+4" : sens === 2 ? "+2" : "2";
    default: return "7";
  }
}

/** Suffixe complet d'un chiffre romain : symbole de qualité + chiffrage. */
function chiffrage(
  rootPc: number, quality: string, inversion: number, tonicPc: number,
): string {
  return (QUALITY_MARK[quality] ?? quality) + figureOf(rootPc, quality, inversion, tonicPc);
}

/** Chiffre romain d'un degré : MAJUSCULE = majeur/augmenté, minuscule = mineur/diminué. */
function romanOfDegree(
  deg: number, rootPc: number, quality: string, inversion: number, tonicPc: number,
): string {
  const roman = ROMANS[deg - 1];
  return (isMinorish(quality) ? roman.toLowerCase() : roman) +
    chiffrage(rootPc, quality, inversion, tonicPc);
}

/**
 * Fondamentale CANONIQUE — indépendante de l'ordre d'écriture des notes.
 *
 * La 7e diminuée est symétrique : ses quatre notes sont candidates à la
 * fondamentale, et `identifyChord` en choisit une au hasard. Or, si l'une
 * d'elles est la SENSIBLE de la tonalité, le doute n'existe pas : l'accord est
 * le vii°7 du degré, la fondamentale est la sensible. C'est le seul °7 que la
 * gamme mineure harmonique contienne (Si-Ré-Fa-Lab en Do mineur), et sans cela
 * son chiffrage — et sa fonction ! — dépendraient de l'ordre du MusicXML :
 * II°7 (SD), IV°7 (SD) ou VI°7 (T) selon la note écrite en premier.
 *
 * Pour toute autre 7e diminuée, on ne tranche pas ici : c'est la règle 3
 * (sensible de degré) puis la RÉSOLUTION qui désignent la fondamentale, par une
 * logique déjà indépendante de l'ordre des notes.
 */
export function canonicalRootPc(chord: Chord, tonicPc: number): number {
  if (chord.quality !== "°7") return chord.rootPc;
  const sensible = (tonicPc + 11) % 12;
  return chord.pcs.includes(sensible) ? sensible : chord.rootPc;
}

/**
 * Étiquette d'un accord emprunté : "iv", "bVI", "bVII7", "iiø7", "#vi", "bVIΔ"…
 * `null` si la fondamentale n'a pas d'étiquette d'emprunt connue — l'appelant
 * doit alors laisser la suite des règles trancher, et surtout ne pas chiffrer
 * l'accord « emprunt » sans savoir de quel degré il s'agit.
 */
function empruntLabel(
  chord: { rootPc: number; quality: string; bassPc?: number },
  tonicPc: number,
  mode: "major" | "minor",
): { label: string; fonction: Fonction } | null {
  const deg = degreeOfRoot(chord.rootPc, tonicPc, mode);
  const inv = inversionOf(chord.rootPc, chord.quality, chord.bassPc);

  if (deg !== null) {
    // Fondamentale diatonique, seule la qualité est empruntée (ex. Fa mineur → iv)
    return {
      label: romanOfDegree(deg, chord.rootPc, chord.quality, inv, tonicPc),
      fonction: fonctionOfDegree(deg, chord.rootPc, tonicPc, mode),
    };
  }

  // Fondamentale altérée (ex. Lab en Do majeur → bVI ; La♮ en Do mineur → #vi)
  const iv = (chord.rootPc - tonicPc + 12) % 12;
  const alt = ALTERED_DEGREES[mode][iv];
  if (alt === undefined) return null;

  const roman = isMinorish(chord.quality) ? alt.roman.toLowerCase() : alt.roman;
  return {
    label: alt.prefix + roman + chiffrage(chord.rootPc, chord.quality, inv, tonicPc),
    fonction: alt.fonction,
  };
}

/**
 * Chiffrage d'un accord de sensible, une fois désignés sa fondamentale et le
 * degré qu'il vise.
 *
 * Deux lectures, et une seule différence — la CIBLE :
 *  - un autre degré → tonicisation : chiffrage à BARRE (vii°7/ii), catégorie
 *    « sensible de degré », `cible` renseignée (la résolution sera vérifiée) ;
 *  - la TONIQUE → ce n'est pas une tonicisation, c'est le vii° de la tonalité :
 *    chiffrage SANS barre (vii°7), degré 7, fonction D, AUCUNE cible — il n'y a
 *    rien à « résoudre » au sens des accords secondaires.
 *
 * La catégorie du vii° de la tonalité suit sa composition, non son mode d'emploi :
 * il est DIATONIQUE en mineur harmonique (Si-Ré-Fa-Lab est tout entier dans la
 * gamme de Do mineur), et EMPRUNTÉ au mineur homonyme en majeur (le Lab y est la
 * 6te abaissée).
 */
function leadingReading(
  quality: string, pcs: number[], root: number,
  target: { num: number; label: string }, tonicPc: number, mode: "major" | "minor",
  bassPc?: number,
): {
  rootPc: number; rootFr: string; degree: string;
  degreeNum: number; fonction: Fonction; categorie: Categorie; cible?: string;
} {
  // Le renversement dépend de la fondamentale que l'on vient de retenir : pour une
  // 7e diminuée, elle peut changer d'une lecture à l'autre. On le recalcule ici.
  const inv = inversionOf(root, quality, bassPc);
  const commun = {
    rootPc: root,
    rootFr: NOTE_FR[root] ?? "?",
    fonction: "D" as Fonction,
  };

  if (isTonicTarget(target)) {
    const dia = diatonicSet(tonicPc, mode);
    return {
      ...commun,
      degree: leadingPrefix(root, quality, inv, tonicPc),
      degreeNum: 7,
      categorie: pcs.every((pc) => dia.has(pc)) ? "diatonique" : "emprunt",
    };
  }

  return {
    ...commun,
    degree: leadingPrefix(root, quality, inv, tonicPc) + "/" + target.label,
    degreeNum: 0,
    categorie: "sensible_degre",
    cible: target.label,
  };
}

// ── Sixte augmentée ───────────────────────────────────────────────────────────

/**
 * Les trois sixtes augmentées se distinguent par ce qu'elles AJOUTENT au socle
 * commun (b6 à la basse + tonique + #4). L'ordre compte : l'allemande contient un
 * b3 que la française n'a pas, la française un 2 que l'italienne n'a pas — on
 * cherche donc du plus fourni au plus dépouillé, l'italienne n'étant retenue que
 * faute des deux autres.
 */
const SIXTES_AUGMENTEES: Array<{ ajout: number | null; label: string }> = [
  { ajout: 3, label: "+6 all." },   // b3 (Mib en Do) — 6te allemande
  { ajout: 2, label: "+6 fr." },    // 2  (Ré en Do)  — 6te française
  { ajout: null, label: "+6 it." }, // rien de plus   — 6te italienne
];

/**
 * SIXTE AUGMENTÉE — reconnue à l'ORTHOGRAPHE, seul moyen de la distinguer d'une
 * 7e de dominante ENHARMONIQUE : Lab-Do-Mib-Fa# (6te allemande en Do) et
 * Lab-Do-Mib-Solb (V7 de Réb) sonnent EXACTEMENT les mêmes hauteurs. Le triton y
 * est écrit #4 dans un cas (note ÉLEVÉE, `alter > 0`), b5 dans l'autre (note
 * ABAISSÉE). Cette différence est invisible aux classes de hauteurs : sans
 * `Chord.spelled`, aucun arbitrage n'est possible, et l'on rend `null` plutôt que
 * de deviner.
 *
 * Critères : la BASSE est le 6e degré abaissé (b6), la tonique est présente, et le
 * triton du degré est écrit comme un 4e degré ÉLEVÉ. Ce sont b6 et #4 qui forment
 * l'intervalle de sixte augmentée — d'où le nom, et d'où l'exigence que le b6 soit
 * bien à la BASSE : renversé, l'intervalle serait une tierce diminuée.
 *
 * Fonction : PRÉDOMINANTE (SD) — la sixte augmentée s'épanouit vers la dominante,
 * ses deux notes extrêmes convergeant par demi-tons contraires sur l'octave de V.
 */
export function augmentedSixth(chord: Chord, tonicPc: number): { degree: string } | null {
  const { bassPc, pcs, spelled } = chord;
  if (bassPc === undefined || !spelled) return null;
  if (bassPc !== (tonicPc + 8) % 12) return null; // basse = b6
  if (!pcs.includes(tonicPc)) return null;        // la tonique

  const quarte = spelled.find((n) => n.pc === (tonicPc + 6) % 12);
  if (!quarte || quarte.alter <= 0) return null;  // #4, et non b5

  for (const s of SIXTES_AUGMENTEES) {
    if (s.ajout === null) return { degree: s.label };
    if (pcs.includes((tonicPc + s.ajout) % 12)) return { degree: s.label };
  }
  return null;
}

// ── Analyse d'un accord ───────────────────────────────────────────────────────

export function analyzeChord(
  chord: Chord, tonicPc: number, mode: "major" | "minor",
): ChordResult {
  // La fondamentale d'une 7e diminuée ne se lit PAS dans l'ordre des notes.
  const rootPc = canonicalRootPc(chord, tonicPc);
  const inv = inversionOf(rootPc, chord.quality, chord.bassPc);

  const base = {
    rootPc,
    rootFr: NOTE_FR[rootPc] ?? chord.rootFr,
    quality: chord.quality,
    pcs: chord.pcs,
    bassPc: chord.bassPc,
    bassFr: chord.bassPc === undefined ? undefined : NOTE_FR[chord.bassPc],
  };

  // ── Règle 1 : diatonique = TOUTES les notes dans la gamme ──
  //
  // En mineur harmonique, la seule 7e diminuée entièrement diatonique est celle
  // bâtie sur la sensible (Si-Ré-Fa-Lab en Do mineur) : `canonicalRootPc` lui a
  // donc déjà rendu sa vraie fondamentale, et elle est chiffrée vii°7 (D).
  const dia = diatonicSet(tonicPc, mode);
  const toutesDiatoniques = chord.pcs.every((pc) => dia.has(pc));
  const deg = degreeOfRoot(rootPc, tonicPc, mode);

  if (toutesDiatoniques && deg !== null) {
    return {
      ...base,
      degree: romanOfDegree(deg, rootPc, chord.quality, inv, tonicPc),
      degreeNum: deg,
      fonction: fonctionOfDegree(deg, rootPc, tonicPc, mode),
      categorie: "diatonique",
    };
  }

  // ── Règle 2 : sixte augmentée (l'ORTHOGRAPHE tranche) ──
  //
  // Placée AVANT la dominante secondaire : une 6te allemande est enharmoniquement
  // une 7e de dominante (Lab-Do-Mib-Fa# = Lab7), et se ferait happer par une règle
  // qui ne lit que les classes de hauteurs — en Do, elle ressortirait tôt ou tard
  // en dominante d'un degré qu'elle ne vise pas. Elle n'est jamais diatonique (le
  // #4 n'appartient à aucune des deux gammes), donc la règle 1 n'a pas pu la
  // prendre : cette place est la première où elle puisse être vue.
  const sixte = augmentedSixth(chord, tonicPc);
  if (sixte) {
    return {
      ...base,
      degree: sixte.degree,
      degreeNum: 0,
      fonction: "SD",
      categorie: "sixte_augmentee",
    };
  }

  // ── Règle 3 : dominante secondaire (lecture PROVISOIRE) ──
  //
  // ATTENTION : sur un accord isolé, cette lecture n'est qu'une HYPOTHÈSE. En
  // mineur, la tonique est une quinte juste au-dessus du iv ((t+5)+7 ≡ t) :
  // tout accord majeur sur la tonique — une tierce picarde — tombe ici et
  // ressortirait en « V/iv », ce qui est absurde. De même le Fa majeur en Do
  // mineur (IV emprunté) est une quinte au-dessus du VII.
  // Seule la RÉSOLUTION tranche : `annotateResolutions` rétrograde en emprunt
  // les accords PARFAITS qui ne rejoignent pas leur cible (cf. « Rétrogradation »).
  if (DOMINANT_QUALITIES.has(chord.quality)) {
    const [t] = dominantCandidates(rootPc, tonicPc, mode);
    if (t) {
      return {
        ...base,
        degree: "V" + chiffrage(rootPc, chord.quality, inv, tonicPc) + "/" + t.label,
        degreeNum: 0,
        fonction: "D",
        categorie: "dominante_secondaire",
        cible: t.label,
      };
    }
  }

  // ── Règle 4 : accord de sensible (tonique OU autre degré) ──
  //
  // La cible peut être la TONIQUE : le chiffrage est alors vii°7, sans barre
  // (cf. `leadingReading`). En majeur, cet accord n'est pas diatonique — il
  // emprunte au mineur homonyme — et c'est ici, et non à la règle 5, qu'il est
  // pris : sa fondamentale est la sensible, pas la 6te abaissée.
  if (LEADING_QUALITIES.has(chord.quality)) {
    // La 7e diminuée peut désigner plusieurs cibles valides. En l'absence de
    // contexte, on retient la plus prioritaire ; la séquence pourra corriger ce
    // choix au vu de la résolution réelle (cf. `annotateResolutions`).
    const [meilleur] = leadingCandidates(
      chord.pcs, chord.quality, rootPc, tonicPc, mode,
    );
    if (meilleur) {
      return {
        ...base,
        ...leadingReading(
          chord.quality, chord.pcs, meilleur.root, meilleur.target, tonicPc, mode,
          chord.bassPc,
        ),
      };
    }
  }

  // ── Règle 5 : emprunt modal (toutes les notes dans le mode homonyme) ──
  const par = parallelSet(tonicPc, mode);
  if (chord.pcs.every((pc) => par.has(pc))) {
    const emprunt = empruntLabel(base, tonicPc, mode);
    // Fondamentale sans étiquette d'emprunt connue : on ne chiffre pas au jugé,
    // on laisse la suite des règles (napolitain, puis chromatisme) trancher.
    if (emprunt) {
      return {
        ...base,
        degree: emprunt.label,
        degreeNum: deg ?? 0,
        fonction: emprunt.fonction,
        categorie: "emprunt",
      };
    }
  }

  // ── Règle 6 : napolitain (accord majeur sur le 2e degré abaissé) ──
  if (chord.quality === "" && rootPc === (tonicPc + 1) % 12) {
    return {
      ...base,
      degree: "bII" + figureOf(rootPc, "", inv, tonicPc),
      degreeNum: 0,
      fonction: "SD",
      categorie: "napolitain",
    };
  }

  // ── Règle 7 : chromatisme non classé ──
  return {
    ...base,
    degree: "chr",
    degreeNum: 0,
    fonction: "?",
    categorie: "chromatique",
  };
}

// ── Analyse de séquence ───────────────────────────────────────────────────────

export interface ChromaEvent {
  measure: number;
  beat?: number;
  accord: string;
  degree: string;
  categorie: Categorie;
  cible?: string;
  resolue?: boolean;
  explication: string;
}

/**
 * Numéro de degré à partir de son étiquette ("ii", "IV"…), ou `null` si
 * l'étiquette n'est pas un chiffre romain connu. Renvoyer 0 en cas d'échec —
 * comme auparavant — produisait silencieusement un `NaN` de hauteur, donc une
 * cible fantôme jamais atteinte : mieux vaut l'absence explicite.
 */
function numOfLabel(label: string): number | null {
  const idx = ROMANS.findIndex((r) => r.toLowerCase() === label.toLowerCase());
  return idx === -1 ? null : idx + 1;
}

/** Hauteur de la cible désignée par une étiquette de degré, ou `null`. */
function targetPcOfLabel(
  label: string, tonicPc: number, mode: "major" | "minor",
): number | null {
  const num = numOfLabel(label);
  return num === null ? null : pcOfDegree(num, tonicPc, mode);
}

/**
 * Applique à un accord de sensible la lecture désignée par sa RÉSOLUTION, si
 * l'accord suivant est bien l'une de ses cibles possibles.
 *
 * La cible confirmée peut être la TONIQUE : l'accord est alors (re)chiffré
 * vii°7, sans barre et sans cible (cf. `leadingReading`) — c'est le cas du
 * Si-Ré-Fa-Lab → Do, en majeur comme en mineur.
 */
function reviseLeadingReading(
  c: ChordResult, next: ChordResult, tonicPc: number, mode: "major" | "minor",
): boolean {
  const lectures = leadingCandidates(c.pcs, c.quality, c.rootPc, tonicPc, mode);
  const confirmee = lectures.find(
    (l) => next.rootPc === pcOfDegree(l.target.num, tonicPc, mode),
  );
  if (!confirmee) return false;

  // La lecture précédente est intégralement remplacée : une cible héritée d'un
  // chiffrage abandonné ferait vérifier une résolution qui n'a plus de sens.
  delete c.cible;
  delete c.resolue;
  Object.assign(
    c,
    leadingReading(c.quality, c.pcs, confirmee.root, confirmee.target, tonicPc, mode, c.bassPc),
  );
  return true;
}

/**
 * PROMOTION — un accord provisoirement lu comme diatonique (ou emprunté) peut
 * être, en réalité, la dominante du degré qui le suit.
 *
 * Cas d'école : en Do mineur, Sib7 (Sib-Ré-Fa-Lab) appartient tout entier au
 * mineur naturel ; la règle 1 le happe donc en « VII7 ». Mais Sib7 → Mib est la
 * tonicisation du relatif majeur : c'est un V7/III. Sans cet arbitrage, la
 * cible III serait à jamais inatteignable pour une 7e de dominante.
 *
 * CONDITION DE TRITON — on ne promeut QUE les accords porteurs d'un triton
 * (7e de dominante, ou accord de sensible ° / °7 / ø7), jamais un accord
 * PARFAIT diatonique. Un accord parfait n'a aucune tension dominante : sans
 * altération chromatique ni 7e, ce n'est pas une dominante secondaire, c'est le
 * degré qu'il est. Promouvoir les accords parfaits relirait toute marche de
 * quintes comme une chaîne de dominantes (en Do majeur, I → IV deviendrait
 * V/IV → IV ; en Do mineur, VII → III → VI deviendrait V/III → V/VI → …).
 */
function promoteIfTonicizing(
  c: ChordResult, next: ChordResult, tonicPc: number, mode: "major" | "minor",
): boolean {
  // Voie de la quinte : seule la 7e de dominante (triton 3ce–7e) qualifie.
  if (c.quality === "7") {
    const t = dominantCandidates(c.rootPc, tonicPc, mode).find(
      (t) => next.rootPc === pcOfDegree(t.num, tonicPc, mode),
    );
    if (t) {
      const inv = inversionOf(c.rootPc, c.quality, c.bassPc);
      c.degree = "V" + chiffrage(c.rootPc, c.quality, inv, tonicPc) + "/" + t.label;
      c.degreeNum = 0;
      c.fonction = "D";
      c.categorie = "dominante_secondaire";
      c.cible = t.label;
      return true;
    }
  }

  // Voie du demi-ton : accord de sensible diatonique visant un autre degré
  // (en Do mineur, Ré° → Mib est le vii° du relatif majeur).
  if (LEADING_QUALITIES.has(c.quality)) {
    return reviseLeadingReading(c, next, tonicPc, mode);
  }

  return false;
}

/**
 * RÉTROGRADATION — une dominante secondaire provisoire portée par un accord
 * PARFAIT (sans 7e) n'est pas confirmée si la cible ne vient pas.
 *
 * C'est ce qui sauve la tierce picarde : en Do mineur, la tonique est une quinte
 * juste au-dessus du iv, donc TOUT accord majeur de tonique est capté par la
 * règle 2 en « V/iv ». S'il ne va pas sur Fa mineur, ce n'est pas une dominante :
 * c'est un I emprunté au majeur homonyme (fonction T). Idem pour Fa majeur en Do
 * mineur : « V/VII » s'il va sur Sib, IV emprunté (SD) sinon.
 *
 * On ne rétrograde JAMAIS une 7e de dominante : une dominante secondaire non
 * résolue existe bel et bien (rompue secondaire), et le triton la trahit.
 */
function demoteIfUnconfirmed(
  c: ChordResult, next: ChordResult | undefined, tonicPc: number, mode: "major" | "minor",
): void {
  const targetPc = c.cible ? targetPcOfLabel(c.cible, tonicPc, mode) : null;
  if (targetPc === null) return;
  if (next && next.rootPc === targetPc) return; // cible atteinte : lecture confirmée

  // La cible n'arrive pas. L'accord est-il tout entier dans le mode homonyme
  // NATUREL ? Alors c'est un emprunt modal, et non une dominante.
  const par = parallelSet(tonicPc, mode);
  if (!c.pcs.every((pc) => par.has(pc))) return; // sinon : V/x non résolu

  const emprunt = empruntLabel(c, tonicPc, mode);
  if (!emprunt) return; // fondamentale sans étiquette d'emprunt : on ne touche à rien

  c.degree = emprunt.label;
  c.degreeNum = degreeOfRoot(c.rootPc, tonicPc, mode) ?? 0;
  c.fonction = emprunt.fonction;
  c.categorie = "emprunt";
  delete c.cible;
  delete c.resolue;
}

/**
 * Arbitre chaque accord au vu de sa RÉSOLUTION, puis renseigne `resolue`.
 * Mutation en place (la séquence est l'unité d'analyse).
 *
 * `analyzeChord` ne voit qu'un accord isolé : sa lecture est PROVISOIRE. Trois
 * arbitrages sont ici rendus, tous fondés sur le même principe — c'est l'accord
 * suivant qui décide :
 *
 *  1. PROMOTION (cf. `promoteIfTonicizing`) : un accord diatonique porteur d'un
 *     triton et suivi de la cible qu'il annonce devient dominante secondaire
 *     (Sib7 → Mib = V7/III).
 *  2. RÉTROGRADATION (cf. `demoteIfUnconfirmed`) : une dominante secondaire
 *     provisoire sur accord parfait, privée de sa cible, redevient un emprunt
 *     (tierce picarde = I ; Fa majeur en Do mineur = IV).
 *  3. RÉVISION DE CIBLE des 7es diminuées : cet accord est SYMÉTRIQUE, ses
 *     quatre notes peuvent viser quatre cibles ; `analyzeChord` s'est rabattu
 *     sur un ordre de priorité. Un °7 suivi de Rém est un vii°7/ii, le même
 *     accord suivi de Fa est un vii°7/IV.
 */
export function annotateResolutions(
  chords: ChordResult[], tonicPc: number, mode: "major" | "minor",
): void {
  for (let i = 0; i < chords.length; i++) {
    const c = chords[i];
    const next = chords[i + 1];

    if (next && c.categorie === "sensible_degre" && c.quality === "°7") {
      // Révision de la cible au vu de la résolution réelle. Sinon : aucune
      // résolution reconnaissable, on garde la cible prioritaire.
      reviseLeadingReading(c, next, tonicPc, mode);
    } else if (next && (c.categorie === "diatonique" || c.categorie === "emprunt")) {
      promoteIfTonicizing(c, next, tonicPc, mode);
    } else if (c.categorie === "dominante_secondaire" && c.quality === "") {
      demoteIfUnconfirmed(c, next, tonicPc, mode);
    }

    if (!c.cible) continue;
    const targetPc = targetPcOfLabel(c.cible, tonicPc, mode);
    if (targetPc === null) continue;
    c.resolue = !!next && next.rootPc === targetPc;
  }
}

/** Construit les événements chromatiques expliqués (pour l'onglet dédié). */
export function buildChromaEvents(
  seq: Array<{ result: ChordResult; measure: number }>,
  tonicPc: number,
  mode: "major" | "minor",
): ChromaEvent[] {
  const events: ChromaEvent[] = [];

  for (let i = 0; i < seq.length; i++) {
    const { result: c, measure } = seq[i];
    if (c.categorie === "diatonique") continue;

    const next = seq[i + 1]?.result;
    const chaine = !!c.resolue && !!next &&
      (next.categorie === "dominante_secondaire" || next.categorie === "sensible_degre");

    let explication: string;
    if (c.categorie === "dominante_secondaire" || c.categorie === "sensible_degre") {
      const targetPc = c.cible ? targetPcOfLabel(c.cible, tonicPc, mode) : null;
      const cibleNom = targetPc === null ? "?" : NOTE_FR[targetPc];
      // « chaîne de dominantes » : l'accord suivant peut être une dominante
      // SECONDAIRE (V7/x) ou une SENSIBLE de degré (vii°7/x) — dans les deux cas
      // un accord de fonction dominante, jamais une « autre dominante secondaire ».
      const suite = c.resolue
        ? (chaine
            ? "Enchaîne sur un autre accord de fonction dominante (chaîne de dominantes)."
            : "Résolue sur sa cible à l'accord suivant.")
        : "Non résolue (rompue secondaire).";
      explication = `Tonicise le ${c.cible} (${cibleNom}). ${suite}`;
    } else if (c.categorie === "emprunt") {
      const homonyme = mode === "major" ? "mineur" : "majeur";
      explication = `Emprunt au mode homonyme (${homonyme}).`;
    } else if (c.categorie === "napolitain") {
      // La basse est désormais connue : on ne renvoie plus le renversement à plus
      // tard, on le lit. Le napolitain est presque toujours à l'état de sixte.
      explication =
        c.degree === "bII6"
          ? "Accord napolitain (bII6), à l'état de sixte — prédominante expressive."
          : "Accord napolitain (bII). Rare hors du 1er renversement.";
    } else if (c.categorie === "sixte_augmentee") {
      explication =
        "Sixte augmentée : la basse (6e degré abaissé) et le 4e degré élevé forment " +
        "l'intervalle de sixte augmentée, qui s'épanouit sur la dominante. Prédominante chromatique.";
    } else {
      explication = "Accord chromatique non identifié.";
    }

    events.push({
      measure,
      beat: c.beat,
      accord: `${c.rootFr}${c.quality}`,
      degree: c.degree,
      categorie: c.categorie,
      cible: c.cible,
      resolue: c.resolue,
      explication,
    });
  }

  return events;
}
