/**
 * lib/squelette-realisation.ts
 * Harmonia — Réalise le squelette harmonique en SATB à quatre voix.
 *
 * Deux chemins :
 *  1. CONDUITE — `voiceProgression` (moteur d'école) cherche une conduite propre
 *     de toute la suite d'accords. On lui essaie plusieurs sopranos de départ pour
 *     maximiser ses chances ; le premier qui aboutit gagne (`approx = false`).
 *  2. REPLI BLOC — si aucune conduite légale n'existe (suite libre inconduisible),
 *     on réalise CHAQUE accord isolément en bloc : la basse porte la note du
 *     renversement, les autres hauteurs s'empilent vers l'aigu dans leurs
 *     tessitures. L'outil affiche TOUJOURS quelque chose (`approx = true`), et la
 *     vérification de conduite sera désactivée en aval (voicing non censé conduit).
 *
 * La sortie est REGROUPÉE par mesure : `mesures[i]` porte les `VoicedMeasure` des
 * emplacements REMPLIS de la mesure `i` (0, 1 ou 2), dans l'ordre de lecture.
 */

import type { AccordPalette } from "@/lib/palette-fonctionnelle";
import {
  voiceProgression,
  pcOfMidi,
  RANGES,
  type ChordSpec,
  type SpecEntry,
  type VoicedMeasure,
} from "@/lib/voicing-ecole";
import { accordsEnSuite, type Squelette, type Tonalite } from "@/lib/squelette-model";

/**
 * `AccordPalette` → `ChordSpec`. La palette empile fondamentale → tierce → quinte →
 * [7e] dans `pcs` (le renversement ne touche QUE `bassPc`) : `pcs[0]` est donc la
 * fondamentale, y compris sur les accords chromatiques (napolitain, sixte augmentée,
 * dominantes secondaires) — c'est attesté par squelette-realisation.test.ts. La
 * quinte est omissible seulement si elle est JUSTE (7 demi-tons au-dessus de la
 * fondamentale).
 */
export function accordVersChordSpec(a: AccordPalette): ChordSpec {
  const rootPc = a.pcs[0];
  const thirdPc = a.pcs[1];
  const fifthPc = a.pcs[2];
  const seventhPc = a.pcs[3] ?? null;
  return {
    rootPc,
    thirdPc,
    fifthPc,
    seventhPc,
    pcs: a.pcs,
    fifthOmissible: ((fifthPc - rootPc + 12) % 12) === 7,
  };
}

/**
 * Cherche une conduite en essayant plusieurs sopranos de départ. `voiceProgression`
 * impose le soprano de la 1re mesure ; on lui présente successivement chaque hauteur
 * de l'accord de départ (fondamentale d'abord), et on retient la première conduite
 * complète. `null` si aucune ne tient.
 */
function essayerConduite(entrees: SpecEntry[], tonalite: Tonalite): VoicedMeasure[] | null {
  const minor = tonalite.mode === "minor";
  const sopranosDepart = [...new Set(entrees[0].spec.pcs)];
  for (const sopranoPc of sopranosDepart) {
    const essai = entrees.map((e, i) => (i === 0 ? { ...e, firstSopranoPc: sopranoPc } : e));
    const r = voiceProgression(essai, tonalite.tonicPc, minor);
    if (r) return r;
  }
  return null;
}

/** Plus grave MIDI de la classe `pc`, au-dessus de `plancher`, dans [`min`, `max`]
 *  si possible (sinon le premier au-dessus du plancher, quitte à sortir de la
 *  tessiture — le repli garantit d'abord la présence des quatre voix). */
function placer(pc: number, min: number, max: number, plancher: number): number {
  const depart = Math.max(min, plancher);
  for (let m = depart; m <= max; m++) if (pcOfMidi(m) === pc) return m;
  let m = depart;
  while (pcOfMidi(m) !== pc) m++;
  return m;
}

/** Réalisation en bloc d'un accord isolé (repli, non nul par construction). */
function realiserBloc(spec: ChordSpec, bassPc: number): VoicedMeasure {
  const bass = placer(bassPc, RANGES.bass.min, RANGES.bass.max, RANGES.bass.min);
  // Trois voix supérieures : les hauteurs de l'accord moins UNE occurrence de la
  // basse, complétées par la fondamentale s'il en manque (doublure de fondamentale).
  const superieures = [...spec.pcs];
  const idxBasse = superieures.indexOf(bassPc);
  if (idxBasse >= 0) superieures.splice(idxBasse, 1);
  while (superieures.length < 3) superieures.push(spec.rootPc);
  const [pcTenor, pcAlto, pcSoprano] = superieures.slice(0, 3);
  const tenor = placer(pcTenor, RANGES.tenor.min, RANGES.tenor.max, Math.max(RANGES.tenor.min, bass));
  const alto = placer(pcAlto, RANGES.alto.min, RANGES.alto.max, Math.max(RANGES.alto.min, tenor));
  const soprano = placer(pcSoprano, RANGES.soprano.min, RANGES.soprano.max, Math.max(RANGES.soprano.min, alto));
  return { soprano, alto, tenor, bass };
}

/**
 * Réalise tout le squelette. Renvoie les voicings REGROUPÉS par mesure et un drapeau
 * `approx` (vrai = repli bloc, la conduite n'est pas garantie).
 */
export function realiserSquelette(sq: Squelette): { mesures: VoicedMeasure[][]; approx: boolean } {
  const suite = accordsEnSuite(sq);
  const specs = suite.map(({ accord }) => accordVersChordSpec(accord));

  let plat: VoicedMeasure[];
  let approx = false;

  if (suite.length === 0) {
    plat = [];
  } else {
    const entrees: SpecEntry[] = suite.map(({ accord }, i) => ({
      spec: specs[i],
      firstSopranoPc: specs[i].rootPc, // remplacé par essayerConduite
      bassPc: accord.bassPc,
    }));
    const conduit = essayerConduite(entrees, sq.tonalite);
    if (conduit) {
      plat = conduit;
    } else {
      approx = true;
      plat = suite.map(({ accord }, i) => realiserBloc(specs[i], accord.bassPc));
    }
  }

  // Regroupement : chaque mesure reçoit les voicings de ses emplacements REMPLIS.
  const mesures: VoicedMeasure[][] = [];
  let k = 0;
  for (const m of sq.mesures) {
    const nb = m.emplacements.filter((e) => e.accord !== null).length;
    mesures.push(plat.slice(k, k + nb));
    k += nb;
  }
  return { mesures, approx };
}
