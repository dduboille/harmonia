/**
 * lib/analyse-chaine.ts
 * Harmonia — La CHAÎNE d'analyse : d'une partition lue à la suite de ses accords,
 * notes étrangères écartées et nommées.
 *
 * Ce module n'invente aucune théorie : il ORCHESTRE les modules purs (segmentation,
 * lignes mélodiques, choix par le coût, taxonomie). Il vit dans `lib` — et non dans
 * la route — pour une seule raison, mais elle est décisive : le test de bout en bout
 * doit exercer LA chaîne, celle que la route exécute, et non une copie qui pourrait
 * rester verte pendant que la route se casse. La route, elle, n'orchestre que le HTTP.
 *
 * DEUX PASSES, ET C'EST LA CONTRAINTE QUI LES IMPOSE :
 *
 *  - choisir un accord réclame l'accord PRÉCÉDENT — un retard s'y prépare ;
 *  - nommer une étrangère réclame l'accord SUIVANT — une anticipation s'y résout.
 *
 * On ne peut donc pas tout faire d'un temps sur l'autre. On choisit TOUS les accords
 * d'abord, on fusionne les temps de même accord (le rythme harmonique), et l'on
 * classe les étrangères ensuite, quand le futur est connu.
 */

import { noteNameFr, type ParsedNote, type ParsedScore } from "./musicxml-parse";
import { spansParTemps, type Span } from "./harmony-segmentation";
import { carteMelodique, type CarteMelodique } from "./voice-lines";
import { choisirAccord } from "./chord-choice";
import { classer, LIBELLE_ETRANGERE, type ContexteEtrangere } from "./notes-etrangeres";
import {
  RETARDS,
  analyzeChord,
  type Chord,
  type ChordResult,
} from "./harmonic-analysis";

/** Une note étrangère, telle qu'on la MONTRE : nommée, classée, située. */
export interface NoteEtrangere {
  /** L'orthographe RÉELLE : « Lab », jamais « Sol# ». */
  nom: string;
  /** Le libellé français du type, ou `null` — aucune règle ne l'explique, et le
   *  moteur ne devine pas : « étrangère » sans nom vaut mieux qu'un nom inventé. */
  type: string | null;
  voix: string;
}

export interface AccordAnalyse extends ChordResult {
  notesEtrangeres?: NoteEtrangere[];
}

export interface SegmentAnalyse {
  measure: number;
  /** Le temps où l'accord ENTRE (1-based) — pas celui où il finit. */
  beat: number;
  result: AccordAnalyse;
}

/**
 * La lecture d'un temps : l'accord retenu, et ce qu'il laisse de côté.
 * (Le coût, lui, a fait son office dans `choisirAccord` — il ne sert plus ici.)
 */
interface Lecture {
  chord: Chord;
  etrangeres: Array<{ note: ParsedNote; voix: string }>;
}

/** Une harmonie et sa durée réelle : un ou plusieurs temps de même accord. */
interface Segment {
  measure: number;
  beat: number;
  debut: number;
  fin: number;
  chord: Chord;
  /**
   * Le premier temps du segment — celui où l'accord a été CHOISI. C'est lui qui
   * donne la basse et l'orthographe : un accord se chiffre là où il entre.
   */
  premierSpan: Span;
  /** Chaque étrangère garde le TEMPS où elle a été vue : c'est lui qui dit son
   *  poids métrique (`tempsFort`), et non le segment, qui peut en couvrir plusieurs. */
  etrangeres: Array<{ note: ParsedNote; voix: string; span: Span }>;
}

/**
 * Relit un temps sous un accord IMPOSÉ (celui du temps suivant) : recalcule ce que
 * cet accord explique, ce qu'il laisse de côté, et la basse de SES sons.
 * Cf. `resoudreRetardsDebordants`.
 */
function relire(span: Span, chord: Chord): Lecture | null {
  const sons = new Set(chord.pcs);
  const graves = span.notes
    .filter((n) => sons.has(n.pc))
    .sort((a, b) => a.midi - b.midi);

  // L'accord emprunté n'explique RIEN de ce temps : ce n'est pas un retard, c'est
  // autre chose. On ne force pas une lecture qui ne tient à rien.
  if (graves.length === 0) return null;

  return {
    chord: { ...chord, bassPc: graves[0].pc },
    etrangeres: span.notes
      .filter((n) => !sons.has(n.pc))
      .map((n) => ({ note: n, voix: `${n.part}|${n.voice}` })),
  };
}

/**
 * LE RETARD QUI DÉBORDE DU TEMPS — le seul cas que la barrière des `sus` ne peut
 * pas trancher.
 *
 * Un 4-3 de cadence dont la suspension occupe TOUT le temps et ne se résout qu'au
 * suivant n'a AUCUNE lecture en tierces : pendant que le Do sonne, la tierce du V
 * est réellement absente. Sol-Do-Ré, ce sont là toutes les notes, et « Gsus4 » en
 * est la seule description exacte. `choisirAccord` a donc raison — et le résultat
 * est faux : un retard n'est pas un accord, et le V est bel et bien là.
 *
 * Ce n'est pas au CHOIX de le corriger (il n'a rien d'autre à choisir), c'est à la
 * FUSION : si le temps suivant porte le même accord une fois le retard résolu, les
 * deux temps ne forment qu'une harmonie — celle du temps suivant. On relit donc le
 * temps du retard sous l'accord de sa résolution, et la suspension redevient ce
 * qu'elle est : une note étrangère.
 *
 * On remonte le temps (`i` décroissant) : une suspension double — deux temps de
 * `sus` d'affilée — se résout ainsi de proche en proche, chacun héritant du suivant
 * déjà réparé.
 */
function resoudreRetardsDebordants(spans: Span[], lectures: Array<Lecture | null>): void {
  for (let i = lectures.length - 2; i >= 0; i--) {
    const ici = lectures[i];
    const apres = lectures[i + 1];
    if (ici === null || apres === null) continue;

    // Seule une lecture qui n'est QU'un sus est concernée : `choisirAccord` écarte
    // d'office les sus dès qu'une lecture en tierces existe. Un sus qui survit est
    // donc un temps sans alternative.
    if (!RETARDS.has(ici.chord.quality)) continue;
    if (RETARDS.has(apres.chord.quality)) continue;

    // « Le même accord, une fois le retard résolu » : même fondamentale. Le sus et
    // sa résolution partagent la fondamentale et la quinte ; seule la tierce arrive.
    if (apres.chord.rootPc !== ici.chord.rootPc) continue;

    const relu = relire(spans[i], apres.chord);
    if (relu !== null) lectures[i] = relu;
  }
}

/** Identité harmonique d'un temps : c'est elle qui définit le RYTHME HARMONIQUE. */
function signature(chord: Chord): string {
  return `${chord.rootPc}:${chord.quality}:${chord.bassPc ?? "?"}`;
}

/**
 * Fusionne les temps consécutifs de même accord. On garde le PREMIER — c'est là
 * qu'un musicien annote, et non sur chaque temps d'une harmonie tenue.
 *
 * Un temps sans accord (une quinte à vide, un unisson) ROMPT la série : deux temps
 * séparés par de l'illisible ne sont pas « la même harmonie ».
 */
function fusionner(spans: Span[], lectures: Array<Lecture | null>): Segment[] {
  const segments: Segment[] = [];
  let courant: Segment | null = null;
  let sigCourante = "";

  for (let i = 0; i < spans.length; i++) {
    const lecture = lectures[i];
    const span = spans[i];

    if (lecture === null) {
      courant = null;
      sigCourante = "";
      continue;
    }

    const sig = signature(lecture.chord);

    if (courant !== null && sig === sigCourante) {
      courant.fin = span.fin;
      // Une note tenue est étrangère à CHAQUE temps du segment : on ne la nomme
      // qu'une fois, au temps où on l'a vue paraître.
      for (const e of lecture.etrangeres) {
        if (!courant.etrangeres.some((x) => x.note === e.note)) {
          courant.etrangeres.push({ ...e, span });
        }
      }
      continue;
    }

    courant = {
      measure: span.measure,
      beat: span.beat,
      debut: span.debut,
      fin: span.fin,
      chord: lecture.chord,
      premierSpan: span,
      etrangeres: lecture.etrangeres.map((e) => ({ ...e, span })),
    };
    sigCourante = sig;
    segments.push(courant);
  }

  return segments;
}

/** Nomme les notes qu'un segment laisse de côté. */
function nommerEtrangeres(
  segment: Segment,
  carte: CarteMelodique,
  precedent: number[] | undefined,
  suivant: number[] | undefined,
): NoteEtrangere[] {
  return segment.etrangeres.map(({ note, voix, span }) => {
    const ctx: ContexteEtrangere = {
      pcsAccord: segment.chord.pcs,
      pcsAccordPrecedent: precedent,
      pcsAccordSuivant: suivant,
      debutSegment: segment.debut,
      finSegment: segment.fin,
      // Le poids métrique est celui du TEMPS où la note paraît — pas celui du
      // segment, qui peut en couvrir plusieurs.
      tempsFort: span.beat === 1,
      // Elle DÉBORDE de l'harmonie : elle sonnait déjà sous l'accord précédent, ou
      // sonne encore sous le suivant. C'est la marque du retard et de la pédale.
      traverseAccords:
        note.onset < segment.debut || note.onset + note.duration > segment.fin,
    };

    const type = classer(note, carte.voisinage(note), ctx);
    return {
      nom: noteNameFr(note.step, note.alter),
      type: type === null ? null : LIBELLE_ETRANGERE[type],
      voix,
    };
  });
}

/**
 * La chaîne complète : une partition lue → la suite de ses accords.
 *
 * L'appelant reste maître de la SÉQUENCE : `annotateResolutions` (qui peut encore
 * changer un degré au vu de sa résolution) et `buildChromaEvents` s'appliquent
 * ensuite sur les `result` rendus ici.
 */
export function analyserHarmonie(
  score: ParsedScore,
  tonicPc: number,
  mode: "major" | "minor",
): SegmentAnalyse[] {
  const carte = carteMelodique(score.notes);
  const spans = spansParTemps(score);

  // ── PASSE 1 : un accord par temps, au fil de l'eau ──
  // L'accord précédent se transmet ici : c'est sur lui que se prépare un retard, et
  // sans lui le coût d'abandon d'une note tenue serait mal jugé.
  const lectures: Array<Lecture | null> = [];
  let pcsPrecedent: number[] | undefined;

  for (const span of spans) {
    const choix = choisirAccord(span, carte, { pcsAccordPrecedent: pcsPrecedent });
    lectures.push(choix === null ? null : { chord: choix.chord, etrangeres: choix.etrangeres });
    if (choix !== null) pcsPrecedent = choix.chord.pcs;
  }

  // ── PASSE 2 : le rythme harmonique (et le retard qui déborde du temps) ──
  resoudreRetardsDebordants(spans, lectures);
  const segments = fusionner(spans, lectures);

  // ── PASSE 3 : nommer les étrangères, analyser les accords ──
  // Le futur est enfin connu : l'anticipation peut être reconnue à l'accord qu'elle
  // devance.
  return segments.map((segment, i) => {
    const sons = new Set(segment.chord.pcs);
    const dansLAccord = segment.premierSpan.notes.filter((n) => sons.has(n.pc));

    const chord: Chord = {
      ...segment.chord,
      // L'orthographe des seules notes DE L'ACCORD : une sixte augmentée se
      // reconnaît à son 4e degré ÉLEVÉ, et une étrangère chromatique de passage ne
      // doit pas pouvoir se faire passer pour lui.
      spelled: dansLAccord.map((n) => ({ step: n.step, alter: n.alter, pc: n.pc })),
    };

    const result: AccordAnalyse = analyzeChord(chord, tonicPc, mode);
    result.beat = segment.beat;

    // La basse est nommée d'après ce qui est ÉCRIT — et c'est la basse de l'ACCORD,
    // le plus grave de SES sons : une pédale ne chiffre pas un renversement.
    const basse = dansLAccord.reduce<ParsedNote | null>(
      (grave, n) => (grave === null || n.midi < grave.midi ? n : grave),
      null,
    );
    if (basse !== null) result.bassFr = noteNameFr(basse.step, basse.alter);

    const etrangeres = nommerEtrangeres(
      segment,
      carte,
      segments[i - 1]?.chord.pcs,
      segments[i + 1]?.chord.pcs,
    );
    if (etrangeres.length > 0) result.notesEtrangeres = etrangeres;

    return { measure: segment.measure, beat: segment.beat, result };
  });
}
