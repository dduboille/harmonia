/**
 * lib/satb-rules.ts
 * Harmonia — Moteur de validation de l'écriture à quatre voix.
 *
 * Cette logique vivait à l'intérieur de HarmoniaEditor.tsx, non exportée : le
 * cœur pédagogique du produit — ce qui fait sa crédibilité académique — était
 * donc impossible à tester sans monter l'interface. Extrait ici tel quel, à
 * comportement identique, et couvert par satb-rules.test.ts.
 */

import { KEY_ACCIDENTALS } from "@/lib/key-accidentals";

export type NoteName = "C" | "D" | "E" | "F" | "G" | "A" | "B"
  | "C#" | "Db" | "D#" | "Eb" | "F#" | "Gb" | "G#" | "Ab" | "A#" | "Bb"
  | "Cbb" | "Dbb" | "Ebb" | "Fbb" | "Gbb" | "Abb" | "Bbb"
  | "C##" | "D##" | "E##" | "F##" | "G##" | "A##" | "B##";

export type Voice = "bass" | "tenor" | "alto" | "soprano";

export interface NoteEntry {
  name: NoteName | null; // null = case vide
  octave: number;
}

export type Measure = Record<Voice, NoteEntry>;

export type ValidationErrorType =
  | "parallel_fifth"
  | "parallel_octave"
  | "spacing"
  | "range"
  | "crossing"
  | "leading_tone"
  | "seventh"
  | "missing_accidental"
  | "cross_relation"
  | "wrong_chord"
  | "wrong_bass"
  | "doubled_leading_tone"
  | "hidden_fifth"
  | "hidden_octave";

/**
 * Une faute détectée par le moteur.
 *
 * Le moteur ne produit plus de phrase toute faite : il renvoie un code et ses
 * paramètres, et c'est l'interface qui les met en mots. Auparavant les messages
 * étaient écrits en français à l'intérieur du moteur, ce qui rendait le feedback
 * — le cœur pédagogique du produit — intraduisible.
 */
export interface ValidationError {
  type: ValidationErrorType;
  voices?: [Voice, Voice];
  measure?: number;
  severity: "error" | "warning";
  /** Paramètres d'affichage (numéros de mesure en numérotation humaine). */
  params: {
    voice?: Voice;
    from?: number;
    to?: number;
    note?: string;
    expected?: string;
  };
}

export const VOICES: Voice[] = ["bass", "tenor", "alto", "soprano"];

export const VOICE_RANGES: Record<Voice, { min: [NoteName, number]; max: [NoteName, number] }> = {
  bass:    { min: ["E", 2], max: ["C", 4] },
  tenor:   { min: ["C", 3], max: ["G", 4] },
  alto:    { min: ["G", 3], max: ["C", 5] },
  soprano: { min: ["C", 4], max: ["G", 5] },
};

export const CHROMATIC_ORDER = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

/** Normalise les bémols en dièses pour le calcul MIDI. */
export function noteName(name: string): string {
  const map: Record<string, string> = { Db: "C#", Eb: "D#", Gb: "F#", Ab: "G#", Bb: "A#" };
  return map[name] || name;
}

export function noteToMidi(name: string, octave: number): number {
  const base = CHROMATIC_ORDER.indexOf(
    name.replace("b", "#").replace("Db", "C#")
      .replace("Eb", "D#").replace("Gb", "F#")
      .replace("Ab", "G#").replace("Bb", "A#")
  );
  return (octave + 1) * 12 + (base === -1 ? 0 : base);
}

/** Pitch class (0-11) d'une case remplie. */
function pcOf(n: NoteEntry): number {
  return ((noteToMidi(noteName(n.name!), n.octave) % 12) + 12) % 12;
}

/** Une mesure est complète quand les quatre voix sont posées. */
function estComplete(m: Measure): boolean {
  return VOICES.every(v => m[v].name !== null);
}

/** L'ensemble des pitch classes d'une mesure complète. */
function pcsDe(m: Measure): Set<number> {
  return new Set(VOICES.map(v => pcOf(m[v])));
}

export function validateSATB(
  measures: Measure[],
  keySignature?: string,
  checkAccidentals?: boolean,
  solution?: Measure[],
): ValidationError[] {
  const errors: ValidationError[] = [];

  // ── Conformité à la solution : précalculée par mesure (les règles de résolution
  //    ne parlent que sur des mesures conformes, pour éviter les cascades absurdes).
  const conforme: boolean[] = measures.map((cur, m) => {
    const sol = solution?.[m];
    if (!sol || !estComplete(cur) || !estComplete(sol)) return false;
    const a = pcsDe(cur), b = pcsDe(sol);
    return a.size === b.size && [...a].every(pc => b.has(pc)) && pcOf(cur.bass) === pcOf(sol.bass);
  });

  for (let m = 0; m < measures.length; m++) {
    const cur = measures[m];

    // 1. Tessitures
    VOICES.forEach(v => {
      const n = cur[v];
      if (!n.name) return;
      const midi = noteToMidi(noteName(n.name), n.octave);
      const [minN, minO] = VOICE_RANGES[v].min;
      const [maxN, maxO] = VOICE_RANGES[v].max;
      const midiMin = noteToMidi(noteName(minN), minO);
      const midiMax = noteToMidi(noteName(maxN), maxO);
      if (midi < midiMin || midi > midiMax) {
        errors.push({ type: "range", measure: m, severity: "error", params: { voice: v, from: m + 1 } });
      }
    });

    // 2. Espacements (S-A et A-T : une octave au maximum)
    const pairs: [Voice, Voice][] = [["soprano", "alto"], ["alto", "tenor"]];
    pairs.forEach(([v1, v2]) => {
      const n1 = cur[v1], n2 = cur[v2];
      if (!n1.name || !n2.name) return;
      const diff = Math.abs(noteToMidi(noteName(n1.name), n1.octave) - noteToMidi(noteName(n2.name), n2.octave));
      if (diff > 12) {
        errors.push({ type: "spacing", voices: [v1, v2], measure: m, severity: "error", params: { from: m + 1 } });
      }
    });

    // 3. Croisements (voix inférieure au-dessus de la voix supérieure)
    const order: Voice[] = ["soprano", "alto", "tenor", "bass"];
    for (let i = 0; i < order.length - 1; i++) {
      const upper = cur[order[i]], lower = cur[order[i + 1]];
      if (!upper.name || !lower.name) continue;
      const midiUpper = noteToMidi(noteName(upper.name), upper.octave);
      const midiLower = noteToMidi(noteName(lower.name), lower.octave);
      if (midiLower > midiUpper) {
        // voices[0] est la voix qui passe au-dessus de voices[1].
        errors.push({ type: "crossing", voices: [order[i + 1], order[i]], measure: m, severity: "error", params: { from: m + 1 } });
      }
    }

    // 4. Quintes et octaves parallèles (d'une mesure à la suivante)
    if (m > 0) {
      const prev = measures[m - 1];
      const allPairs: [Voice, Voice][] = [
        ["soprano", "alto"], ["soprano", "tenor"], ["soprano", "bass"],
        ["alto", "tenor"], ["alto", "bass"], ["tenor", "bass"],
      ];
      allPairs.forEach(([v1, v2]) => {
        const p1 = prev[v1], p2 = prev[v2];
        const c1 = cur[v1], c2 = cur[v2];
        if (!p1.name || !p2.name || !c1.name || !c2.name) return;
        const prevInterval = Math.abs(noteToMidi(noteName(p1.name), p1.octave) - noteToMidi(noteName(p2.name), p2.octave)) % 12;
        const curInterval = Math.abs(noteToMidi(noteName(c1.name), c1.octave) - noteToMidi(noteName(c2.name), c2.octave)) % 12;
        const dir1 = noteToMidi(noteName(c1.name), c1.octave) - noteToMidi(noteName(p1.name), p1.octave);
        const dir2 = noteToMidi(noteName(c2.name), c2.octave) - noteToMidi(noteName(p2.name), p2.octave);
        const sameDir = (dir1 > 0 && dir2 > 0) || (dir1 < 0 && dir2 < 0);
        if (!sameDir) return;
        if (prevInterval === 7 && curInterval === 7) {
          errors.push({ type: "parallel_fifth", voices: [v1, v2], measure: m, severity: "error", params: { from: m, to: m + 1 } });
        }
        if (prevInterval === 0 && curInterval === 0 && p1.name !== c1.name) {
          errors.push({ type: "parallel_octave", voices: [v1, v2], measure: m, severity: "error", params: { from: m, to: m + 1 } });
        }
      });

      // 4b. Fausses relations : même lettre de note à des voix DIFFÉRENTES entre
      // deux accords successifs, avec une altération différente (le chromatisme
      // conduit dans la même voix reste autorisé).
      const flagged = new Set<string>();
      VOICES.forEach(va => {
        VOICES.forEach(vb => {
          if (va === vb) return;
          const a = prev[va], b = cur[vb];
          if (!a.name || !b.name) return;
          if (a.name[0].toUpperCase() !== b.name[0].toUpperCase()) return;
          const pcA = ((noteToMidi(noteName(a.name), 0) % 12) + 12) % 12;
          const pcB = ((noteToMidi(noteName(b.name), 0) % 12) + 12) % 12;
          if (pcA === pcB) return; // même hauteur → pas de contradiction
          const key = [va, vb].sort().join("-");
          if (flagged.has(key)) return;
          flagged.add(key);
          errors.push({
            type: "cross_relation",
            voices: [va, vb],
            measure: m,
            severity: "warning",
            params: { note: `${a.name}→${b.name}`, from: m, to: m + 1 },
          });
        });
      });
    }

    // 5. Altérations manquantes (mode sans armure)
    if (checkAccidentals && keySignature) {
      const accReqs = KEY_ACCIDENTALS[keySignature] ?? KEY_ACCIDENTALS[keySignature.replace(/m$/, "")] ?? [];
      if (accReqs.length > 0) {
        VOICES.forEach(v => {
          const n = cur[v];
          if (!n.name) return;
          const baseLetter = n.name[0];
          const accsInName = n.name.slice(1);
          const req = accReqs.find(r => r.note === baseLetter);
          if (!req) return;
          const hasReqAcc = req.acc === "#" ? accsInName.includes("#") : accsInName.includes("b");
          if (!hasReqAcc) {
            errors.push({
              type: "missing_accidental",
              measure: m,
              severity: "warning",
              params: { voice: v, note: `${n.name}${n.octave}`, expected: req.frName, from: m + 1 },
            });
          }
        });
      }
    }

    // 6. Conformité à l'harmonie demandée (mesures complètes seulement)
    const sol = solution?.[m];
    if (sol && estComplete(cur) && estComplete(sol) && !conforme[m]) {
      const a = pcsDe(cur), b = pcsDe(sol);
      const memeAccord = a.size === b.size && [...a].every(pc => b.has(pc));
      if (!memeAccord) {
        errors.push({ type: "wrong_chord", measure: m, severity: "error", params: { from: m + 1 } });
      } else {
        errors.push({ type: "wrong_bass", measure: m, severity: "error", params: { from: m + 1, expected: sol.bass.name! } });
      }
    }
  }

  return errors;
}
