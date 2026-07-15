/**
 * lib/correction-harmonisation.ts
 * Harmonia — La correction de la composition guidée, PAR LE MOTEUR.
 *
 * Remplace l'ancien `harmonization-engine`, qui avait sa propre théorie codée en
 * dur. Ici, chaque accord est analysé par `analyzeChord`/`annotateResolutions`, et
 * chaque note de la mélodie par le classifieur de notes étrangères de C1. La
 * composition guidée note donc sur la MÊME théorie que l'analyseur de partitions.
 */

import type { MelodyExercise } from "@/types/composition";
import {
  analyzeChord, annotateResolutions, identifyChordFromNotes,
  NOTE_FR, type ChordResult, type Fonction,
} from "./harmonic-analysis";
import { resoudreAccord } from "./palette-fonctionnelle";
import { classer, contigues, LIBELLE_ETRANGERE, type ContexteEtrangere, type TypeEtrangere } from "./notes-etrangeres";
import type { ParsedNote } from "./musicxml-parse";
import type { Voisinage } from "./voice-lines";

const DUREE_BEATS: Record<string, number> = { whole: 4, half: 2, quarter: 1, eighth: 0.5 };
const NAME_PC: Record<string, number> = {
  C: 0, "C#": 1, Db: 1, D: 2, "D#": 3, Eb: 3, E: 4, F: 5, "F#": 6, Gb: 6,
  G: 7, "G#": 8, Ab: 8, A: 9, "A#": 10, Bb: 10, B: 11,
};
const STEP_ALTER: Record<string, { step: string; alter: number }> = {
  C: { step: "C", alter: 0 }, "C#": { step: "C", alter: 1 }, Db: { step: "D", alter: -1 },
  D: { step: "D", alter: 0 }, "D#": { step: "D", alter: 1 }, Eb: { step: "E", alter: -1 },
  E: { step: "E", alter: 0 }, F: { step: "F", alter: 0 }, "F#": { step: "F", alter: 1 },
  Gb: { step: "G", alter: -1 }, G: { step: "G", alter: 0 }, "G#": { step: "G", alter: 1 },
  Ab: { step: "A", alter: -1 }, A: { step: "A", alter: 0 }, "A#": { step: "A", alter: 1 },
  Bb: { step: "B", alter: -1 }, B: { step: "B", alter: 0 },
};

export interface AccordCorrige {
  degree: string;
  fonction: Fonction;
  categorie: string;
  resolue?: boolean;
  mesure: number;
}

export interface NoteMelodieCorrigee {
  nom: string;       // "Do", "Ré"…
  mesure: number;
  /**
   * La note appartient-elle à l'accord actif ? Ce booléen lève l'ambiguïté de
   * `type: null`, qui servait à la fois pour « note de l'accord » et pour une
   * étrangère que le classifieur ne sait pas nommer. Désormais :
   *   estAccord=true               → note de l'accord (type null) ;
   *   estAccord=false, type=null   → étrangère INNOMMÉE (dissonance non expliquée) ;
   *   estAccord=false, type="…"    → étrangère nommée par C1.
   */
  estAccord: boolean;
  type: string | null; // libellé C1 d'une étrangère nommée, sinon null
}

export interface CorrectionResult {
  accords: AccordCorrige[];
  notesMelodie: NoteMelodieCorrigee[];
  score: { global: number; compatibilite: number; fonctions: number; cadence: number; feedback: string[] };
}

const TPQ = 768;

/** Les notes étrangères qui relèvent d'une écriture LÉGITIME (le reste est suspect). */
const ETRANGERES_LEGITIMES: Set<TypeEtrangere> = new Set([
  "passage", "broderie", "retard", "appoggiature", "echappee", "anticipation",
]);

/** Un segment temporel = un accord posé, avec sa durée en temps (unité = noire). */
interface Segment {
  id: string;
  pcs: number[];
  bassPc: number;
  result: ChordResult;
  startBeat: number;
  endBeat: number;
  mesure: number;
}

export function corrigerHarmonisation(
  melody: MelodyExercise, copie: string[][],
): CorrectionResult {
  const tonicPc = NAME_PC[melody.keySignature.replace(/m$/, "")] ?? 0;
  const mode: "major" | "minor" = melody.isMinor ? "minor" : "major";
  const bpm = melody.timeSignature === "4/4" ? 4 : 3;

  // ── 1. Les segments d'accords, dans l'ordre du discours ──
  //
  // Une case de copie porte 1 ou 2 accords ; à 2, l'accord bascule à la moitié de
  // la mesure. On résout chaque id (palette ou nom d'exercice) en hauteurs + basse,
  // puis on l'analyse. La séquence entière passe ensuite par `annotateResolutions`,
  // qui renseigne les résolutions des dominantes (secondaires comme principales).
  const segments: Segment[] = [];
  for (let mi = 0; mi < copie.length; mi++) {
    const ids = copie[mi] ?? [];
    const debutMesure = mi * bpm;
    const bornes: Array<{ id: string; startBeat: number; endBeat: number }> =
      ids.length === 0
        ? []
        : ids.length === 1
          ? [{ id: ids[0], startBeat: debutMesure, endBeat: debutMesure + bpm }]
          : [
              { id: ids[0], startBeat: debutMesure, endBeat: debutMesure + bpm / 2 },
              { id: ids[1], startBeat: debutMesure + bpm / 2, endBeat: debutMesure + bpm },
            ];
    for (const b of bornes) {
      const acc = resoudreAccord(b.id, tonicPc, mode);
      if (!acc) continue; // id illisible : on n'invente pas d'accord
      const chord = identifyChordFromNotes(acc.pcs, acc.bassPc);
      if (!chord) continue;
      chord.spelled = undefined;
      const result = analyzeChord(chord, tonicPc, mode);
      segments.push({
        id: b.id, pcs: acc.pcs, bassPc: acc.bassPc, result,
        startBeat: b.startBeat, endBeat: b.endBeat, mesure: mi + 1,
      });
    }
  }
  annotateResolutions(segments.map((s) => s.result), tonicPc, mode);

  const accords: AccordCorrige[] = segments.map((s) => ({
    degree: s.result.degree,
    fonction: s.result.fonction,
    categorie: s.result.categorie,
    resolue: s.result.resolue,
    mesure: s.mesure,
  }));

  // ── 2. Les ParsedNote de la mélodie (onset/durée en ticks) ──
  const parsed: ParsedNote[] = [];
  let cumBeats = 0;
  for (const n of melody.notes) {
    const beats = DUREE_BEATS[n.duration] ?? 1;
    const pc = NAME_PC[n.note] ?? 0;
    const sa = STEP_ALTER[n.note] ?? { step: n.note[0] ?? "C", alter: 0 };
    const mesure = Math.floor(cumBeats / bpm);
    const beatDansMesure = cumBeats - mesure * bpm;
    parsed.push({
      step: sa.step, alter: sa.alter, octave: n.octave, pc,
      midi: (n.octave + 1) * 12 + pc,
      onset: Math.round(cumBeats * TPQ),
      duration: Math.round(beats * TPQ),
      measure: mesure + 1,
      beat: beatDansMesure + 1,
      voice: "1", part: "P1",
    });
    cumBeats += beats;
  }

  // ── 3. Classer chaque note : note de l'accord, ou note étrangère nommée ──
  const notesMelodie: NoteMelodieCorrigee[] = [];
  let expliquees = 0;
  for (let i = 0; i < parsed.length; i++) {
    const note = parsed[i];
    const onsetBeat = note.onset / TPQ;
    const idx = segments.findIndex((s) => onsetBeat >= s.startBeat && onsetBeat < s.endBeat);
    const seg = idx >= 0 ? segments[idx] : undefined;

    let estAccord = false;
    let typeEtr: TypeEtrangere | null = null;

    if (seg) {
      estAccord = seg.pcs.includes(note.pc);
      if (!estAccord) {
        // Voisinage mélodique : la note précédente et la suivante de la mélodie,
        // pourvu que le discours ne soit pas rompu par un silence.
        const av = parsed[i - 1];
        const ap = parsed[i + 1];
        const voisinage: Voisinage = {
          precedente: av && contigues(av, note) ? av : undefined,
          suivante: ap && contigues(note, ap) ? ap : undefined,
        };
        const ctx: ContexteEtrangere = {
          pcsAccord: seg.pcs,
          pcsAccordPrecedent: segments[idx - 1]?.pcs,
          pcsAccordSuivant: segments[idx + 1]?.pcs,
          debutSegment: Math.round(seg.startBeat * TPQ),
          finSegment: Math.round(seg.endBeat * TPQ),
          // Le temps fort est MÉTRIQUE (1er temps de la MESURE), et non le début du
          // segment : sur le 2e accord d'une mesure (temps 3 en 4/4), la note d'attaque
          // n'est pas sur un temps fort. C'est la lecture de C1 (`span.beat === 1`).
          tempsFort: note.beat === 1,
          traverseAccords:
            note.onset < Math.round(seg.startBeat * TPQ) ||
            note.onset + note.duration > Math.round(seg.endBeat * TPQ),
        };
        typeEtr = classer(note, voisinage, ctx);
      }
    }

    if (estAccord || (typeEtr !== null && ETRANGERES_LEGITIMES.has(typeEtr))) expliquees++;

    notesMelodie.push({
      nom: NOTE_FR[note.pc] ?? "?",
      mesure: note.measure,
      estAccord,
      type: estAccord ? null : typeEtr !== null ? LIBELLE_ETRANGERE[typeEtr] : null,
    });
  }

  // ── 4. Le score ──
  const feedback: string[] = [];

  // Compatibilité : part des notes de mélodie expliquées (accord ou étrangère légitime).
  const compatibilite = parsed.length === 0 ? 100 : Math.round((expliquees / parsed.length) * 100);
  if (compatibilite < 100) {
    feedback.push("Des notes de la mélodie ne s'expliquent ni comme notes de l'accord, ni comme notes étrangères classiques.");
  }

  // Syntaxe fonctionnelle : la marche prédominante → dominante → tonique est
  // récompensée, le recul dominante → prédominante pénalisé. On lit les fonctions
  // RÉELLES rendues par le moteur, jamais une théorie parallèle.
  //
  // Base délibérément BASSE (50) : une harmonisation immobile (I–I–I–I) n'engrange
  // aucun bonus de marche fonctionnelle et doit plafonner bas — l'immobilisme n'est
  // pas une syntaxe. Seuls les enchaînements gagnent des points.
  let fonctions = 50;
  for (let i = 0; i < segments.length - 1; i++) {
    const a = segments[i].result.fonction;
    const b = segments[i + 1].result.fonction;
    if (a === "SD" && b === "D") fonctions += 14;
    else if (a === "D" && b === "T") fonctions += 14;
    else if (a === "T" && b === "SD") fonctions += 6;
    else if (a === "T" && b === "D") fonctions += 6;
    else if (a === "D" && b === "SD") fonctions -= 20; // recul : la dominante ne recule pas
    else if (a === "SD" && b === "T") fonctions -= 6;  // saute la dominante
    // Bonus : une dominante (secondaire ou non) effectivement résolue.
    if (segments[i].result.resolue) fonctions += 6;
  }
  fonctions = Math.max(0, Math.min(100, fonctions));
  if (fonctions >= 74) feedback.push("Bonne syntaxe fonctionnelle (prédominante → dominante → tonique).");
  else if (fonctions < 50) feedback.push("La syntaxe fonctionnelle recule (une dominante ne devrait pas retourner vers la prédominante).");

  // Cadence : le motif final V(7) → I (ou i) couronne la phrase.
  let cadence = 40;
  if (segments.length >= 2) {
    const avantDernier = segments[segments.length - 2].result;
    const dernier = segments[segments.length - 1].result;
    if (avantDernier.fonction === "D" && dernier.fonction === "T" && dernier.degreeNum === 1) {
      cadence = 100;
      feedback.push("Cadence parfaite (V → I) : la phrase est conclue.");
    } else if (dernier.fonction === "D") {
      cadence = 60; // demi-cadence
      feedback.push("Demi-cadence : la phrase reste suspendue sur la dominante.");
    }
  }

  const global = Math.round(0.4 * compatibilite + 0.4 * fonctions + 0.2 * cadence);

  return {
    accords,
    notesMelodie,
    score: { global, compatibilite, fonctions, cadence, feedback },
  };
}
