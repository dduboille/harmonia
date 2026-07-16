/**
 * lib/analyse-resultat.ts
 * Harmonia — L'ORCHESTRATION de l'analyse : d'une partition lue (ParsedScore) au
 * résultat complet (accords par mesure, cadences, chromatisme, plan tonal).
 *
 * Extraite de la route `/api/analyse-partition` pour la même raison que la chaîne
 * avant elle : le Studio, l'analyseur ET l'atelier `/composer` doivent exécuter LA
 * même analyse — celle-ci tourne au navigateur (aucune dépendance serveur), l'atelier
 * l'appelle à chaque frappe. La route, elle, n'orchestre que le HTTP.
 *
 * LA TONIQUE : l'armure ne suffit pas — armure 0 c'est Do majeur OU la mineur. En
 * mode mineur, la tonique est le RELATIF de l'armure (majeure + 9 demi-tons). C'est
 * la correction d'un bug historique de la route, qui lisait « Do mineur » là où la
 * pièce était en la mineur.
 */

import type { ParsedScore } from "./musicxml-parse";
import { analyserHarmonie, type AccordAnalyse } from "./analyse-chaine";
import {
  annotateResolutions,
  buildChromaEvents,
  NOTE_FR,
  type ChordResult,
  type ChromaEvent,
} from "./harmonic-analysis";
import { construirePlanTonal, type PlanTonal } from "./modulations";

// ── Types (déménagés de la route, à l'identique) ──────────────────────────────

export interface CadenceResult {
  type: "parfaite" | "plagale" | "rompue" | "demi";
  label: string;
  measure: number;
  chords: string[];
}

export interface MesureResult {
  numero: number;
  /** Chaque accord porte, le cas échéant, les notes qu'il ÉCARTE (cf. `AccordAnalyse`). */
  accords: AccordAnalyse[];
}

export interface AnalysisResult {
  fichier: string;
  tonalite: string;
  tonicFr: string;
  mode: "major" | "minor";
  nombreMesures: number;
  signature: string;
  mesures: MesureResult[];
  cadences: CadenceResult[];
  nombreChromatiques: number;
  chromatisme: {
    tonicisations: number;
    emprunts: number;
    napolitains: number;
    sixtesAugmentees: number;
    inexpliques: number;
    evenements: ChromaEvent[];
  };
  planTonal: PlanTonal;
}

// ── La tonique ────────────────────────────────────────────────────────────────

/** Tonique MAJEURE (pitch class) de chaque armure. */
const FIFTHS_PC = new Map<number, number>([
  [0, 0], [1, 7], [2, 2], [3, 9], [4, 4], [5, 11], [6, 6], [7, 1],
  [-1, 5], [-2, 10], [-3, 3], [-4, 8], [-5, 1], [-6, 6], [-7, 11],
]);

/** Tonique (pitch class) d'une armure et d'un mode. Mineur = RELATIF de l'armure. */
export function toniqueDe(fifths: number, mode: "major" | "minor"): number {
  const majeure = FIFTHS_PC.get(fifths) ?? 0;
  return mode === "minor" ? (majeure + 9) % 12 : majeure;
}

// ── L'analyse complète ────────────────────────────────────────────────────────

/** L'analyse complète d'une partition déjà lue. Pure ; peut tourner au navigateur. */
export function analyserPartition(score: ParsedScore, fichier: string): AnalysisResult {
  const { mode, signature } = score;

  const tonicPc = toniqueDe(score.fifths, mode);
  const tonicFr = NOTE_FR[tonicPc] ?? "Do";
  const tonalite = `${tonicFr} ${mode === "major" ? "majeur" : "mineur"}`;

  // LA CHAÎNE. Elle segmente au temps mais VOIT toute note qui sonne, choisit chaque
  // accord par le coût de ce qu'il explique contre ce qu'il écarte, fusionne les temps
  // de même harmonie (le rythme harmonique), et nomme les notes étrangères.
  // Cf. `@/lib/analyse-chaine` — toute la théorie y est, et elle y est testée.
  const segments = analyserHarmonie(score, tonicPc, mode);

  const accordsParMesure = new Map<number, AccordAnalyse[]>();
  const chordSequence: Array<{ result: ChordResult; measure: number }> = [];

  for (const { measure, result } of segments) {
    const liste = accordsParMesure.get(measure) ?? [];
    liste.push(result);
    accordsParMesure.set(measure, liste);
    chordSequence.push({ result, measure });
  }

  const mesures: MesureResult[] = score.measures.map((m) => ({
    numero: m.numero,
    accords: accordsParMesure.get(m.numero) ?? [],
  }));

  // ── Arbitrage par la résolution (analyse au niveau de la SÉQUENCE) ──
  //
  // Cet appel peut CHANGER le degré, la catégorie, la cible et même la
  // fondamentale d'un accord (promotion en dominante secondaire, rétrogradation
  // en emprunt, révision de la cible d'une 7e diminuée). Il doit donc précéder
  // tout ce qui lit ces étiquettes : le comptage du chromatisme comme la
  // détection des cadences.
  annotateResolutions(chordSequence.map((c) => c.result), tonicPc, mode);

  // ── Plan tonal (les MODULATIONS) ──
  //
  // On construit le plan tonal APRÈS `annotateResolutions` : la détection des
  // modulations relit chaque accord dans une tonalité candidate, et cette lecture
  // n'a de sens que sur des degrés déjà stabilisés (dominantes secondaires promues,
  // cibles révisées). Couche PURE au-dessus de la séquence, cf. `@/lib/modulations`.
  const planTonal = construirePlanTonal(chordSequence, { tonicPc, mode });

  const evenements = buildChromaEvents(chordSequence, tonicPc, mode);

  const chromatisme = {
    tonicisations: evenements.filter(
      (e) => e.categorie === "dominante_secondaire" || e.categorie === "sensible_degre",
    ).length,
    emprunts: evenements.filter((e) => e.categorie === "emprunt").length,
    napolitains: evenements.filter((e) => e.categorie === "napolitain").length,
    sixtesAugmentees: evenements.filter((e) => e.categorie === "sixte_augmentee").length,
    inexpliques: evenements.filter((e) => e.categorie === "chromatique").length,
    evenements,
  };

  // Tout accord non diatonique compte pour le chromatisme (et plus seulement
  // ceux dont la fonction est inconnue : une dominante secondaire a une fonction).
  const nombreChromatiques = chordSequence.filter(
    ({ result }) => result.categorie !== "diatonique",
  ).length;

  // Cadence detection on the chord sequence
  const cadences: CadenceResult[] = [];
  for (let i = 1; i < chordSequence.length; i++) {
    const prev = chordSequence[i - 1].result;
    const curr = chordSequence[i].result;
    const prevName = `${prev.rootFr}${prev.quality}`;
    const currName = `${curr.rootFr}${curr.quality}`;
    const m = chordSequence[i].measure;

    if (prev.degreeNum === 5 && curr.degreeNum === 1 && curr.fonction === "T") {
      cadences.push({ type: "parfaite", label: "Cadence parfaite", measure: m, chords: [prevName, currName] });
    } else if (prev.degreeNum === 4 && curr.degreeNum === 1 && curr.fonction === "T") {
      cadences.push({ type: "plagale",  label: "Cadence plagale",  measure: m, chords: [prevName, currName] });
    } else if (prev.degreeNum === 5 && prev.fonction === "D" && curr.degreeNum === 6) {
      cadences.push({ type: "rompue",   label: "Cadence rompue",   measure: m, chords: [prevName, currName] });
    } else if (
      curr.degreeNum === 5 && curr.fonction === "D" &&
      (i === chordSequence.length - 1 || chordSequence[i + 1]?.result.degreeNum !== 1)
    ) {
      cadences.push({ type: "demi", label: "Demi-cadence", measure: m, chords: [prevName, currName] });
    }
  }

  return {
    fichier,
    tonalite,
    tonicFr,
    mode,
    nombreMesures: score.measures.length,
    signature,
    mesures,
    cadences,
    nombreChromatiques,
    chromatisme,
    planTonal,
  };
}
