/**
 * Test d'intégration de la chaîne complète : MusicXML → notes → tranches → accords.
 *
 * Les tests unitaires des trois modules ne prouvent rien de ce qui compte ici :
 * qu'un CHORAL À QUATRE VOIX, écrit comme un exportateur l'écrit vraiment (deux
 * portées, deux voix par portée, séparées par des <backup>), ressorte avec les bons
 * accords verticaux. C'est exactement ce que l'ancien parseur ne savait pas faire :
 * il sérialisait les voix au lieu de les superposer.
 */

import { describe, it, expect } from "vitest";
import { parseMusicXML, noteNameFr } from "./musicxml-parse";
import { sliceByBeat, mergeSlices, type Slice } from "./harmony-segmentation";
import {
  identifyChordFromNotes,
  analyzeChord,
  annotateResolutions,
  type ChordResult,
} from "./harmonic-analysis";
import { analyserHarmonie } from "./analyse-chaine";
import { construirePlanTonal, type AccordSequence } from "./modulations";

// ── Fabrique de MusicXML ──────────────────────────────────────────────────────

/** Une note : lettre, altération, octave, durée en noires. */
type N = [step: string, alter: number, octave: number, duree: number];

function note([step, alter, octave, duree]: N, voice: string): string {
  const alt = alter === 0 ? "" : `<alter>${alter}</alter>`;
  return (
    `<note><pitch><step>${step}</step>${alt}<octave>${octave}</octave></pitch>` +
    `<duration>${duree}</duration><voice>${voice}</voice></note>`
  );
}

/** Une mesure à deux voix, séparées par le <backup> — l'écriture réelle. */
function mesure(numero: number, haut: N[], bas: N[], attributs = ""): string {
  const duree = haut.reduce((t, n) => t + n[3], 0);
  return (
    `<measure number="${numero}">${attributs}` +
    haut.map((n) => note(n, "1")).join("") +
    `<backup><duration>${duree}</duration></backup>` +
    bas.map((n) => note(n, "2")).join("") +
    `</measure>`
  );
}

const ATTRS =
  `<attributes><divisions>1</divisions><key><fifths>0</fifths><mode>major</mode></key>` +
  `<time><beats>4</beats><beat-type>4</beat-type></time></attributes>`;

/**
 * Choral en Do majeur, quatre voix réelles sur deux portées.
 *
 *   temps    1        2        3        4     ‖    1        2-3-4
 *   S       Do5      Sol4     Mi5      Fa#4   ‖   Ré5      Do5 (tenu)
 *   A       Mi4      Ré4      Mi4      Do4    ‖   Si4      Mi4 (tenu)
 *   T       Sol3     Fa3      Sol3     La3    ‖   Sol3     Sol3 (tenu)
 *   B       Do3      Si2      Do3      Ré3    ‖   Sol2     Do3 (tenu)
 *           I       V6/5      I       V7/V    ‖    V         I
 *
 * Y sont réunis tout ce que le sous-projet devait débloquer : un RENVERSEMENT
 * (le V6/5, dont la basse est la sensible), une TONICISATION (le V7/V, avec son
 * Fa#), une BASSE TENUE sous des voix immobiles (le Do final, en blanche pointée),
 * et une CADENCE PARFAITE.
 */
const CHORAL =
  `<score-partwise><part-list><score-part id="P1"/><score-part id="P2"/></part-list>` +
  `<part id="P1">` +
  mesure(
    1,
    [["C", 0, 5, 1], ["G", 0, 4, 1], ["E", 0, 5, 1], ["F", 1, 4, 1]],
    [["E", 0, 4, 1], ["D", 0, 4, 1], ["E", 0, 4, 1], ["C", 0, 4, 1]],
    ATTRS,
  ) +
  mesure(2, [["D", 0, 5, 1], ["C", 0, 5, 3]], [["B", 0, 4, 1], ["E", 0, 4, 3]]) +
  `</part>` +
  `<part id="P2">` +
  mesure(
    1,
    [["G", 0, 3, 1], ["F", 0, 3, 1], ["G", 0, 3, 1], ["A", 0, 3, 1]],
    [["C", 0, 3, 1], ["B", 0, 2, 1], ["C", 0, 3, 1], ["D", 0, 3, 1]],
    ATTRS,
  ) +
  mesure(2, [["G", 0, 3, 1], ["G", 0, 3, 3]], [["G", 0, 2, 1], ["C", 0, 3, 3]]) +
  `</part></score-partwise>`;

// ── La chaîne, telle que la route l'assemble ─────────────────────────────────

interface Analyse {
  mesure: number;
  temps: number;
  degre: string;
  fonction: string;
  basse: string;
}

function analyser(xml: string, tonicPc: number): Analyse[] {
  const score = parseMusicXML(xml);

  const identite = (s: Slice): string => {
    const c = identifyChordFromNotes(s.pcs, s.bass.pc);
    return c ? `${c.rootPc}:${c.quality}:${s.bass.pc}` : "";
  };

  const sorties: Array<{ result: ChordResult; slice: Slice }> = [];
  for (const s of mergeSlices(sliceByBeat(score), identite)) {
    const chord = identifyChordFromNotes(s.pcs, s.bass.pc);
    if (!chord) continue;
    chord.spelled = s.notes.map((n) => ({ step: n.step, alter: n.alter, pc: n.pc }));
    const result = analyzeChord(chord, tonicPc, score.mode);
    result.bassFr = noteNameFr(s.bass.step, s.bass.alter);
    sorties.push({ result, slice: s });
  }

  annotateResolutions(sorties.map((x) => x.result), tonicPc, score.mode);

  return sorties.map(({ result, slice }) => ({
    mesure: slice.measure,
    temps: slice.beat,
    degre: result.degree,
    fonction: result.fonction,
    basse: result.bassFr ?? "?",
  }));
}

// ── Le contrôle ───────────────────────────────────────────────────────────────

describe("chaîne complète — un choral à quatre voix", () => {
  const analyse = analyser(CHORAL, 0); // Do majeur

  it("rend les bons accords verticaux (le <backup> ne sérialise plus les voix)", () => {
    expect(analyse).toEqual([
      { mesure: 1, temps: 1, degre: "I",    fonction: "T",  basse: "Do"  },
      { mesure: 1, temps: 2, degre: "V6/5", fonction: "D",  basse: "Si"  },
      { mesure: 1, temps: 3, degre: "I",    fonction: "T",  basse: "Do"  },
      { mesure: 1, temps: 4, degre: "V7/V", fonction: "D",  basse: "Ré"  },
      { mesure: 2, temps: 1, degre: "V",    fonction: "D",  basse: "Sol" },
      { mesure: 2, temps: 2, degre: "I",    fonction: "T",  basse: "Do"  },
    ]);
  });

  it("l'accord final TENU n'est annoté qu'une fois (rythme harmonique)", () => {
    // Le Do majeur sonne aux temps 2, 3 et 4 : trois tranches, un seul segment.
    expect(analyse.filter((a) => a.mesure === 2)).toHaveLength(2);
  });

  it("la basse tenue ne disparaît pas : elle porte encore le dernier accord", () => {
    expect(analyse.at(-1)).toMatchObject({ mesure: 2, temps: 2, basse: "Do" });
  });
});

// ══ LE CHORAL ORNÉ ═══════════════════════════════════════════════════════════
//
// Même harmonie que le choral nu — I → V6/5 → I → V7/V ‖ V → I — mais habillée
// de trois notes étrangères, une par famille :
//
//  - une NOTE DE PASSAGE à l'alto (Mi–Ré–Do, le Ré en croche du contretemps),
//    que l'ancienne segmentation ne VOYAIT même pas ;
//  - un RETARD 4-3 sur la cadence : le Do de l'alto, préparé sur le V7/V, se tient
//    par-dessus la barre et ne rejoint le Si qu'au temps suivant ;
//  - une PÉDALE de tonique à la basse, sous les deux derniers accords.
//
// LE CONTRÔLE : l'harmonie ne bouge pas d'un iota, et les trois ornements sont
// nommés. C'est toute la thèse du chantier — l'ornement n'est pas l'accord.

/** Note du choral orné : durées en CROCHES (divisions = 2), liaison de tenue possible. */
type NO = [step: string, alter: number, octave: number, croches: number, tie?: "start" | "stop"];

function noteOrnee([step, alter, octave, croches, tie]: NO, voice: string): string {
  const alt = alter === 0 ? "" : `<alter>${alter}</alter>`;
  const liaison = tie === undefined ? "" : `<tie type="${tie}"/>`;
  return (
    `<note><pitch><step>${step}</step>${alt}<octave>${octave}</octave></pitch>` +
    `<duration>${croches}</duration>${liaison}<voice>${voice}</voice></note>`
  );
}

function mesureOrnee(numero: number, haut: NO[], bas: NO[], attributs = ""): string {
  const duree = haut.reduce((t, n) => t + n[3], 0);
  return (
    `<measure number="${numero}">${attributs}` +
    haut.map((n) => noteOrnee(n, "1")).join("") +
    `<backup><duration>${duree}</duration></backup>` +
    bas.map((n) => noteOrnee(n, "2")).join("") +
    `</measure>`
  );
}

/** Divisions à la CROCHE : sans elles, pas de note de passage à écrire. */
const ATTRS_ORNE =
  `<attributes><divisions>2</divisions><key><fifths>0</fifths><mode>major</mode></key>` +
  `<time><beats>4</beats><beat-type>4</beat-type></time></attributes>`;

/**
 *   temps    1        2        3          4    ‖    1         2        3-4
 *   S       Do5      Sol4     Mi5        Fa#4  ‖   Ré5 ─────────────  Do5
 *   A       Mi4      Ré4      Mi4 [Ré4]  Do4 ──‖── Do4      Si3       Mi4
 *   T       Sol3     Fa3      Sol3       La3   ‖   Sol3 ────────────────────
 *   B       Do3      Si2      Do3        Ré3   ‖   Do3 ─────────────────────
 *           I       V6/5      I          V7/V  ‖    V  (retard 4-3)    I
 *                                  ↑ passage        ↑ pédale de tonique
 */
const CHORAL_ORNE =
  `<score-partwise><part-list><score-part id="P1"/><score-part id="P2"/></part-list>` +
  `<part id="P1">` +
  mesureOrnee(
    1,
    [["C", 0, 5, 2], ["G", 0, 4, 2], ["E", 0, 5, 2], ["F", 1, 4, 2]],
    // Le Ré de passage entre les deux Mi et le Do ; puis le Do, PRÉPARÉ (consonant
    // au V7/V, dont il est la 7e) et lié par-dessus la barre : c'est le retard.
    [["E", 0, 4, 2], ["D", 0, 4, 2], ["E", 0, 4, 1], ["D", 0, 4, 1], ["C", 0, 4, 2, "start"]],
    ATTRS_ORNE,
  ) +
  mesureOrnee(
    2,
    [["D", 0, 5, 4], ["C", 0, 5, 4]],
    [["C", 0, 4, 2, "stop"], ["B", 0, 3, 2], ["E", 0, 4, 4]],
  ) +
  `</part>` +
  `<part id="P2">` +
  mesureOrnee(
    1,
    [["G", 0, 3, 2], ["F", 0, 3, 2], ["G", 0, 3, 2], ["A", 0, 3, 2]],
    [["C", 0, 3, 2], ["B", 0, 2, 2], ["C", 0, 3, 2], ["D", 0, 3, 2]],
    ATTRS_ORNE,
  ) +
  // La pédale : le Do de basse tient sous le V comme sous le I.
  mesureOrnee(2, [["G", 0, 3, 8]], [["C", 0, 3, 8]]) +
  `</part></score-partwise>`;

// ── La NOUVELLE chaîne, celle que la route assemble désormais ─────────────────

interface AnalyseOrnee extends Analyse {
  etrangeres: Array<{ nom: string; type: string | null }>;
}

function analyserNouvelle(xml: string, tonicPc: number): AnalyseOrnee[] {
  const score = parseMusicXML(xml);
  const segments = analyserHarmonie(score, tonicPc, score.mode);

  annotateResolutions(segments.map((s) => s.result), tonicPc, score.mode);

  return segments.map(({ measure, beat, result }) => ({
    mesure: measure,
    temps: beat,
    degre: result.degree,
    fonction: result.fonction,
    basse: result.bassFr ?? "?",
    etrangeres: (result.notesEtrangeres ?? []).map((e) => ({ nom: e.nom, type: e.type })),
  }));
}

/** L'accord seul, sans le TEMPS où il tombe : c'est lui qui doit être identique
 *  d'un choral à l'autre. L'ornement, lui, déplace la cadence d'un temps — c'est
 *  son droit, ce n'est pas de l'harmonie. */
function harmonie(a: Analyse[]): Array<Omit<Analyse, "temps">> {
  return a.map(({ mesure, degre, fonction, basse }) => ({ mesure, degre, fonction, basse }));
}

/** L'analyse de l'ancienne chaîne, mise au format de la nouvelle pour comparaison. */
function sansEtrangeres(a: AnalyseOrnee[]): Analyse[] {
  return a.map((x) => ({
    mesure: x.mesure, temps: x.temps, degre: x.degre, fonction: x.fonction, basse: x.basse,
  }));
}

describe("nouvelle chaîne — le choral NU n'a pas bougé", () => {
  it("rend exactement les mêmes accords que l'ancienne chaîne", () => {
    // Le garde-fou du chantier : les notes étrangères ne se paient pas d'une
    // régression sur l'écriture sans ornement.
    expect(sansEtrangeres(analyserNouvelle(CHORAL, 0))).toEqual(analyser(CHORAL, 0));
  });

  it("n'invente aucune note étrangère là où il n'y en a pas", () => {
    expect(analyserNouvelle(CHORAL, 0).flatMap((a) => a.etrangeres)).toEqual([]);
  });
});

describe("nouvelle chaîne — le choral ORNÉ", () => {
  const orne = analyserNouvelle(CHORAL_ORNE, 0);

  it("L'ORNEMENT NE TROUBLE PAS L'HARMONIE : la même que celle du choral nu", () => {
    expect(harmonie(orne)).toEqual(harmonie(analyserNouvelle(CHORAL, 0)));
  });

  it("nomme la NOTE DE PASSAGE de l'alto (la croche du contretemps, jadis invisible)", () => {
    const t3 = orne.find((a) => a.mesure === 1 && a.temps === 3)!;
    expect(t3.degre).toBe("I");
    expect(t3.etrangeres).toEqual([{ nom: "Ré", type: "note de passage" }]);
  });

  it("nomme le RETARD 4-3 et la PÉDALE de tonique sous la cadence", () => {
    const v = orne.find((a) => a.mesure === 2 && a.temps === 1)!;
    expect(v.etrangeres).toEqual([
      { nom: "Do", type: "retard" },
      { nom: "Do", type: "pédale" },
    ]);
  });

  it("LE PIÈGE DU 4-3 : la suspension occupe tout le temps, et l'accord reste V", () => {
    // Pendant que le Do sonne, la tierce du V est RÉELLEMENT absente : la seule
    // lecture du temps 1 est un « Gsus4 ». Aucune barrière des sus ne peut trancher
    // — il n'y a rien d'autre à choisir. C'est la FUSION des temps qui le résout :
    // le temps suivant porte le même accord, retard résolu, et les deux ne font
    // qu'une harmonie — celle du temps suivant.
    const v = orne.find((a) => a.mesure === 2 && a.temps === 1)!;
    expect(v.degre).toBe("V");
    expect(v.fonction).toBe("D");
    expect(orne.map((a) => a.degre)).not.toContain("Vsus4");
  });

  it("LA PÉDALE NE FAUSSE PAS LE RENVERSEMENT : la basse du V est Sol, pas Do", () => {
    // Le Do de basse est la note la plus GRAVE entendue, mais il n'appartient pas à
    // l'accord : la basse qui chiffre est le plus grave de SES sons.
    expect(orne.find((a) => a.mesure === 2 && a.temps === 1)!.basse).toBe("Sol");
  });

  it("l'accord final tenu n'est annoté qu'une fois (rythme harmonique)", () => {
    expect(orne.filter((a) => a.mesure === 2)).toHaveLength(2);
  });
});

// ══ LE PLAN TONAL, DE BOUT EN BOUT ═══════════════════════════════════════════
//
// C2 (les modulations) est une couche au-dessus de la suite d'accords. Les tests
// unitaires de `modulations.ts` la prouvent sur des séquences fabriquées à la main ;
// ici on la branche sur la CHAÎNE RÉELLE — MusicXML → accords → plan tonal — comme
// la route le fait. Deux contrôles complémentaires :
//   1. le choral NU ne module pas : une seule région (le garde-fou anti-fausse-
//      modulation — sa tonicisation V7/V ne doit PAS être prise pour un départ vers
//      Sol) ;
//   2. un choral qui module vraiment de Do vers Sol : deux régions, avec pivot et
//      cadence confirmant la bascule.

/** La séquence d'accords telle que la route l'assemble pour `construirePlanTonal` :
 *  chaîne complète, puis stabilisation des degrés par la résolution. */
function sequenceAccords(xml: string, tonicPc: number): AccordSequence[] {
  const score = parseMusicXML(xml);
  const segments = analyserHarmonie(score, tonicPc, score.mode);
  annotateResolutions(segments.map((s) => s.result), tonicPc, score.mode);
  return segments.map((s) => ({ result: s.result, measure: s.measure }));
}

/**
 *   temps    1        2        3        4     ‖    1          2          3-4
 *   S       Do5      Do5      Ré5      Mi5    ‖   Mi5        La4       Si4  Ré5
 *   A       Mi4      Fa4      Sol4     Sol4   ‖   La4        Fa#4      Sol4 Sol4
 *   T       Sol3     La3      Si3      Do4    ‖   Do4        Do4       Ré4  Si3
 *   B       Do3      Fa3      Sol2     Do3    ‖   La2        Ré3       Sol2 Sol2
 *           I        IV       V        I      ‖   vi(=ii Sol) V7/V→V Sol  Sol I(Sol)
 *                                                 ↑ pivot     ↑ dominante ↑ cadence
 *
 * Mesure 1 : une cadence I–IV–V–I qui INSTALLE Do. Mesure 2 : le La mineur (vi de Do,
 * mais ii de Sol) sert de PIVOT, la dominante Ré7 (V de Sol) le confirme, et Sol
 * majeur cadence — la modulation est installée, ce n'est pas une tonicisation.
 */
const CHORAL_MODULANT =
  `<score-partwise><part-list><score-part id="P1"/><score-part id="P2"/></part-list>` +
  `<part id="P1">` +
  mesure(
    1,
    [["C", 0, 5, 1], ["C", 0, 5, 1], ["D", 0, 5, 1], ["E", 0, 5, 1]],
    [["E", 0, 4, 1], ["F", 0, 4, 1], ["G", 0, 4, 1], ["G", 0, 4, 1]],
    ATTRS,
  ) +
  mesure(
    2,
    [["E", 0, 5, 1], ["A", 0, 4, 1], ["B", 0, 4, 1], ["D", 0, 5, 1]],
    [["A", 0, 4, 1], ["F", 1, 4, 1], ["G", 0, 4, 1], ["G", 0, 4, 1]],
  ) +
  `</part>` +
  `<part id="P2">` +
  mesure(
    1,
    [["G", 0, 3, 1], ["A", 0, 3, 1], ["B", 0, 3, 1], ["C", 0, 4, 1]],
    [["C", 0, 3, 1], ["F", 0, 3, 1], ["G", 0, 2, 1], ["C", 0, 3, 1]],
    ATTRS,
  ) +
  mesure(
    2,
    [["C", 0, 4, 1], ["C", 0, 4, 1], ["D", 0, 4, 1], ["B", 0, 3, 1]],
    [["A", 0, 2, 1], ["D", 0, 3, 1], ["G", 0, 2, 1], ["G", 0, 2, 1]],
  ) +
  `</part></score-partwise>`;

describe("plan tonal — de bout en bout sur la chaîne réelle", () => {
  it("le choral NU ne module pas : une seule région (garde-fou anti-fausse-modulation)", () => {
    // Sa tonicisation V7/V ne doit PAS être lue comme un départ vers Sol : le V6/5
    // (un Sol7, avec Fa bécarre) n'est pas diatonique en Sol et rompt la cellule.
    const plan = construirePlanTonal(sequenceAccords(CHORAL, 0), { tonicPc: 0, mode: "major" });
    expect(plan.regions).toHaveLength(1);
    expect(plan.regions[0].nom).toBe("Do majeur");
  });

  it("un choral qui module de Do vers Sol : deux régions, pivot et cadence", () => {
    const plan = construirePlanTonal(sequenceAccords(CHORAL_MODULANT, 0), { tonicPc: 0, mode: "major" });

    expect(plan.regions.map((r) => r.nom)).toEqual(["Do majeur", "Sol majeur"]);

    const sol = plan.regions[1];
    // Le pivot est le dernier accord commun aux deux tons avant la dominante : le
    // La mineur, vi de Do ET ii de Sol.
    expect(sol.pivot).toBeDefined();
    expect(sol.pivot!.etiquetteAncienne).toBe("vi"); // en Do
    expect(sol.pivot!.etiquetteNouvelle).toBe("ii");  // en Sol
    // La bascule est confirmée par la cadence Ré7 → Sol, en mesure 2.
    expect(sol.cadence).toBeDefined();
    expect(sol.cadence!.mesure).toBe(2);
  });
});
