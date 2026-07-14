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
  | "chromatique";

export interface Chord {
  rootPc: number;
  rootFr: string;
  quality: string;
  qualityName: string;
  pcs: number[];
}

export interface ChordResult {
  rootPc: number;
  rootFr: string;
  quality: string;
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

export const CHORD_PATTERNS: Array<{ quality: string; name: string; intervals: number[] }> = [
  { quality: "Maj7", name: "maj7", intervals: [0, 4, 7, 11] },
  { quality: "7",    name: "dom7", intervals: [0, 4, 7, 10] },
  { quality: "m7",   name: "min7", intervals: [0, 3, 7, 10] },
  { quality: "°7",   name: "dim7", intervals: [0, 3, 6, 9]  },
  { quality: "ø7",   name: "m7b5", intervals: [0, 3, 6, 10] },
  { quality: "aug",  name: "aug",  intervals: [0, 4, 8]     },
  { quality: "",     name: "maj",  intervals: [0, 4, 7]     },
  { quality: "m",    name: "min",  intervals: [0, 3, 7]     },
  { quality: "°",    name: "dim",  intervals: [0, 3, 6]     },
  { quality: "sus4", name: "sus4", intervals: [0, 5, 7]     },
  { quality: "sus2", name: "sus2", intervals: [0, 2, 7]     },
];

/** Intervalles des 7 degrés (pour la numérotation romaine). */
const MAJOR_DEGREES = [0, 2, 4, 5, 7, 9, 11];
const MINOR_DEGREES = [0, 2, 3, 5, 7, 8, 10];

export const ROMANS = ["I", "II", "III", "IV", "V", "VI", "VII"];

// ── Identification d'accord ───────────────────────────────────────────────────

export function identifyChord(pcs: number[]): Chord | null {
  const unique = [...new Set(pcs.map((p) => ((p % 12) + 12) % 12))];
  if (unique.length < 2) return null;

  for (const pattern of CHORD_PATTERNS) {
    if (pattern.intervals.length > unique.length + 1) continue;
    for (const root of unique) {
      const norm = unique.map((p) => (p - root + 12) % 12);
      if (pattern.intervals.every((iv) => norm.includes(iv))) {
        return {
          rootPc: root,
          rootFr: NOTE_FR[root] ?? "?",
          quality: pattern.quality,
          qualityName: pattern.name,
          pcs: unique,
        };
      }
    }
  }
  return null;
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

export function fonctionOfDegree(num: number): Fonction {
  if ([1, 3, 6].includes(num)) return "T";
  if ([2, 4].includes(num)) return "SD";
  if ([5, 7].includes(num)) return "D";
  return "?";
}

/** Cibles tonicisables : ni la tonique, ni un degré diminué. */
export function tonicizableTargets(mode: "major" | "minor"): Array<{ num: number; label: string }> {
  return mode === "major"
    ? [{ num: 2, label: "ii" }, { num: 3, label: "iii" }, { num: 4, label: "IV" },
       { num: 5, label: "V" }, { num: 6, label: "vi" }]
    : [{ num: 3, label: "III" }, { num: 4, label: "iv" }, { num: 5, label: "V" },
       { num: 6, label: "VI" }, { num: 7, label: "VII" }];
}

const DOMINANT_QUALITIES = new Set(["", "7"]);

// ── Analyse d'un accord ───────────────────────────────────────────────────────

export function analyzeChord(
  chord: Chord, tonicPc: number, mode: "major" | "minor",
): ChordResult {
  const base = {
    rootPc: chord.rootPc,
    rootFr: chord.rootFr,
    quality: chord.quality,
  };

  // ── Règle 1 : diatonique = TOUTES les notes dans la gamme ──
  const dia = diatonicSet(tonicPc, mode);
  const toutesDiatoniques = chord.pcs.every((pc) => dia.has(pc));
  const deg = degreeOfRoot(chord.rootPc, tonicPc, mode);

  if (toutesDiatoniques && deg !== null) {
    return {
      ...base,
      degree: ROMANS[deg - 1] + chord.quality,
      degreeNum: deg,
      fonction: fonctionOfDegree(deg),
      categorie: "diatonique",
    };
  }

  // ── Règle 2 : dominante secondaire ──
  if (DOMINANT_QUALITIES.has(chord.quality)) {
    for (const t of tonicizableTargets(mode)) {
      const targetPc = pcOfDegree(t.num, tonicPc, mode);
      if (chord.rootPc === (targetPc + 7) % 12) {
        return {
          ...base,
          degree: (chord.quality === "7" ? "V7/" : "V/") + t.label,
          degreeNum: 0,
          fonction: "D",
          categorie: "dominante_secondaire",
          cible: t.label,
        };
      }
    }
  }

  // Règles 3 à 5 ajoutées aux tâches suivantes.
  return {
    ...base,
    degree: "chr",
    degreeNum: 0,
    fonction: "?",
    categorie: "chromatique",
  };
}
