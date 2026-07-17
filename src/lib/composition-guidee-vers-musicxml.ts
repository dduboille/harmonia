/**
 * lib/composition-guidee-vers-musicxml.ts
 * Harmonia — Sérialise une mélodie (le soprano, au rythme réel) et sa réalisation
 * SATB en accords-blocs en MusicXML, pour la gravure Verovio de la composition
 * guidée.
 *
 * POURQUOI un convertisseur dédié (et non `piece-vers-musicxml.ts`, le grand frère
 * de l'atelier) : deux besoins propres à ce module que le modèle `Piece` ne rend
 * pas naturellement :
 *  1. MODE À UNE PORTÉE. Tant qu'aucun accord n'est choisi, la composition guidée
 *     n'affiche QUE la mélodie (clé de Sol, portée unique) — parité avec l'ancienne
 *     présentation. `pieceVersMusicXML` émet toujours deux portées.
 *  2. ACCORDS-BLOCS alignés aux mesures. La mélodie porte un rythme libre
 *     (rondes/blanches/noires/croches) ; l'accompagnement, lui, est un ou deux
 *     accords tenus par mesure (ronde, ou deux blanches). Le soprano suit son
 *     rythme, les trois voix d'accompagnement tiennent leur bloc — un agencement
 *     que ce module calcule et que le convertisseur reçoit tout mâché
 *     (`AccompagnementSegment`), ce qui le garde pur et testable sans le moteur de
 *     réalisation SATB (`realiserSATB`).
 *
 * Répartition : soprano (mélodie) + alto sur la portée 1 (clé de Sol), ténor + basse
 * sur la portée 2 (clé de Fa) — l'alto grave sur la portée du haut, comme l'ancienne
 * présentation le dessinait. Armure gravée d'après la tonalité de l'exercice
 * (KEY_ACCIDENTALS) ; une note qui contredit l'armure porte un <accidental> affiché.
 *
 * Pas de tempo explicite : le défaut Verovio suffit à l'affichage (aucun appariement
 * de lecture ici, la lecture MIDI reste pilotée par le PianoPlayer du composant).
 */

import { KEY_ACCIDENTALS } from "@/lib/key-accidentals";
import type { MelodyNote, Duration } from "@/types/composition";

// Résolution : une noire = 2 divisions. Deux divisions suffisent à toutes les durées
// du module : croche = 1, noire = 2, blanche pointée = 6, ronde = 8, et la blanche
// pointée / noire pointée qu'un accord peut prendre en 3/4 (mesure à 3 temps).
const DIVISIONS = 2;

// Un temps du module vaut une noire (chiffrages en x/4). `beats` = nombre de noires.
function divisionsPourBeats(beats: number): number {
  return Math.round(beats * DIVISIONS);
}

const DIV_PAR_DUREE: Record<Duration, number> = {
  whole: 8, half: 4, quarter: 2, eighth: 1,
};

// Type + points d'une durée exprimée en divisions. Couvre les valeurs rencontrées :
// ronde (8), blanche pointée (6), blanche (4), noire pointée (3), noire (2), croche (1).
const TYPE_PAR_DIV: Record<number, { type: string; points: number }> = {
  8: { type: "whole", points: 0 },
  6: { type: "half", points: 1 },
  4: { type: "half", points: 0 },
  3: { type: "quarter", points: 1 },
  2: { type: "quarter", points: 0 },
  1: { type: "eighth", points: 0 },
};

function typePourDiv(div: number): { type: string; points: number } {
  return TYPE_PAR_DIV[div] ?? { type: "quarter", points: 0 };
}

/** Un accord tenu par une portion de mesure. Voix d'accompagnement en MIDI. */
export interface AccompagnementSegment {
  mesure: number;      // index de mesure (0-based)
  debutBeats: number;  // position de départ dans la mesure (en noires)
  dureeBeats: number;  // durée du segment (en noires)
  alto: number;        // MIDI
  tenor: number;       // MIDI
  bass: number;        // MIDI
}

export interface CompositionGuideeOptions {
  keySignature: string;          // « C », « G », « Am »…
  timeSignature: "4/4" | "3/4";
  measures: number;              // nombre de mesures de l'exercice
  showKeySignature?: boolean;    // grave l'armure (défaut : true)
}

const NOMS_DIESES = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

const GLYPHE: Record<number, string> = {
  2: "double-sharp", 1: "sharp", 0: "natural", [-1]: "flat", [-2]: "flat-flat",
};

/** Lettre + altération (demi-tons, -2..+2) d'un nom anglais « F# », « Eb »… */
function decoderNom(nom: string): { step: string; alter: number } {
  const step = nom[0];
  const suffixe = nom.slice(1);
  const alter = suffixe.startsWith("#") ? suffixe.length : suffixe.startsWith("b") ? -suffixe.length : 0;
  return { step, alter };
}

/** MIDI → hauteur écrite (orthographe par dièses, comme l'ancienne présentation). */
function decoderMidi(midi: number): { step: string; alter: number; octave: number } {
  const pc = ((midi % 12) + 12) % 12;
  const octave = Math.floor(midi / 12) - 1;
  return { ...decoderNom(NOMS_DIESES[pc]), octave };
}

/**
 * Armure : nombre de quintes (positif = dièses, négatif = bémols) et altération
 * attendue par lettre, dérivés de KEY_ACCIDENTALS (un mineur « Xm » reprend l'armure
 * de son relatif majeur). Une note dont l'altération diffère de l'attendu s'affiche.
 */
function armure(keySignature: string): { fifths: number; attendu: Record<string, number> } {
  const entries = KEY_ACCIDENTALS[keySignature] ?? KEY_ACCIDENTALS[keySignature.replace(/m$/, "")] ?? [];
  const attendu: Record<string, number> = {};
  for (const e of entries) attendu[e.note] = e.acc === "#" ? 1 : -1;
  const fifths = entries.length === 0 ? 0 : entries[0].acc === "#" ? entries.length : -entries.length;
  return { fifths, attendu };
}

/** Un <note> chanté. `portee`/`hampe` omises en mode à une portée. */
function noteXML(
  step: string, alter: number, octave: number, div: number,
  voix: string, attendu: Record<string, number>,
  portee: number | null, hampe: "up" | "down" | null,
): string {
  const { type, points } = typePourDiv(div);
  const alterXML = alter !== 0 ? `<alter>${alter}</alter>` : "";
  const pitch = `<pitch><step>${step}</step>${alterXML}<octave>${octave}</octave></pitch>`;
  // Altération affichée seulement si elle contredit l'armure.
  const accidental = alter !== (attendu[step] ?? 0) ? `<accidental>${GLYPHE[alter]}</accidental>` : "";
  const dots = "<dot/>".repeat(points);
  const hampeXML = hampe ? `<stem>${hampe}</stem>` : "";
  const staffXML = portee ? `<staff>${portee}</staff>` : "";
  return `<note>${pitch}<duration>${div}</duration><voice>${voix}</voice><type>${type}</type>${dots}${accidental}${hampeXML}${staffXML}</note>`;
}

/** Un silence. */
function silenceXML(div: number, voix: string, portee: number | null): string {
  const { type, points } = typePourDiv(div);
  const dots = "<dot/>".repeat(points);
  const staffXML = portee ? `<staff>${portee}</staff>` : "";
  return `<note><rest/><duration>${div}</duration><voice>${voix}</voice><type>${type}</type>${dots}${staffXML}</note>`;
}

/** Événements (note ou silence) d'une voix d'accompagnement pour UNE mesure. */
function evenementsAccompagnement(
  segs: AccompagnementSegment[], voix: "alto" | "tenor" | "bass", capaciteBeats: number,
): Array<{ midi: number | null; beats: number }> {
  const tries = [...segs].sort((a, b) => a.debutBeats - b.debutBeats);
  const evs: Array<{ midi: number | null; beats: number }> = [];
  let pos = 0;
  for (const s of tries) {
    if (s.debutBeats > pos + 1e-6) { evs.push({ midi: null, beats: s.debutBeats - pos }); pos = s.debutBeats; }
    evs.push({ midi: s[voix], beats: s.dureeBeats });
    pos += s.dureeBeats;
  }
  if (pos < capaciteBeats - 1e-6) evs.push({ midi: null, beats: capaciteBeats - pos });
  if (evs.length === 0) evs.push({ midi: null, beats: capaciteBeats });
  return evs;
}

// Ordre d'émission et hampe des voix d'accompagnement (S/T hampe haute, A/B basse).
const VOIX_ACC = [
  { nom: "alto" as const, voix: "2", portee: 1, hampe: "down" as const },
  { nom: "tenor" as const, voix: "3", portee: 2, hampe: "up" as const },
  { nom: "bass" as const, voix: "4", portee: 2, hampe: "down" as const },
];

/**
 * @param melody         la mélodie (soprano), au rythme réel
 * @param accompagnement les accords-blocs réalisés (null/[] → mélodie seule, 1 portée)
 * @param options        tonalité, chiffrage, nombre de mesures
 */
export function compositionGuideeVersMusicXML(
  melody: MelodyNote[],
  accompagnement: AccompagnementSegment[] | null,
  options: CompositionGuideeOptions,
): string {
  const { keySignature, timeSignature, measures } = options;
  const showKey = options.showKeySignature ?? true;
  const bpm = timeSignature === "4/4" ? 4 : 3;
  const { fifths, attendu } = showKey ? armure(keySignature) : { fifths: 0, attendu: {} };
  const grandStaff = Boolean(accompagnement && accompagnement.length > 0);
  const capaciteDiv = divisionsPourBeats(bpm);
  const backup = `<backup><duration>${capaciteDiv}</duration></backup>`;

  // Regrouper la mélodie par mesure (accumulation des durées jusqu'à la capacité).
  const parMesure: MelodyNote[][] = Array.from({ length: measures }, () => []);
  {
    let mi = 0, acc = 0;
    for (const n of melody) {
      if (mi < measures) parMesure[mi].push(n);
      acc += (DIV_PAR_DUREE[n.duration] ?? 2) / DIVISIONS;
      if (acc >= bpm - 1e-6) { mi++; acc = 0; }
    }
  }

  const attributs = (i: number): string => {
    if (i !== 0) return "";
    const cles = grandStaff
      ? `<staves>2</staves>` +
        `<clef number="1"><sign>G</sign><line>2</line></clef>` +
        `<clef number="2"><sign>F</sign><line>4</line></clef>`
      : `<clef><sign>G</sign><line>2</line></clef>`;
    return (
      `<attributes><divisions>${DIVISIONS}</divisions>` +
      `<key><fifths>${fifths}</fifths></key>` +
      `<time><beats>${bpm}</beats><beat-type>4</beat-type></time>` +
      cles +
      `</attributes>`
    );
  };

  const mesures = Array.from({ length: measures }, (_, i) => {
    // Voix de soprano : la mélodie de cette mesure (ou un silence de mesure si vide).
    const notesMes = parMesure[i];
    const sopHampe = grandStaff ? ("up" as const) : null;
    const sopPortee = grandStaff ? 1 : null;
    const soprano = notesMes.length > 0
      ? notesMes.map((n) => {
          const { step, alter } = decoderNom(n.note);
          return noteXML(step, alter, n.octave, DIV_PAR_DUREE[n.duration] ?? 2, "1", attendu, sopPortee, sopHampe);
        }).join("")
      : silenceXML(capaciteDiv, "1", sopPortee);

    let corps = soprano;

    if (grandStaff) {
      const segsMes = (accompagnement ?? []).filter((s) => s.mesure === i);
      for (const cfg of VOIX_ACC) {
        const evs = evenementsAccompagnement(segsMes, cfg.nom, bpm);
        const voixXML = evs.map((ev) => {
          const div = divisionsPourBeats(ev.beats);
          if (ev.midi === null) return silenceXML(div, cfg.voix, cfg.portee);
          const { step, alter, octave } = decoderMidi(ev.midi);
          return noteXML(step, alter, octave, div, cfg.voix, attendu, cfg.portee, cfg.hampe);
        }).join("");
        corps += backup + voixXML;
      }
    }

    return `<measure number="${i + 1}">${attributs(i)}${corps}</measure>`;
  }).join("");

  return (
    `<?xml version="1.0" encoding="UTF-8"?>` +
    `<score-partwise version="4.0">` +
    `<part-list><score-part id="P1"><part-name>Harmonia</part-name></score-part></part-list>` +
    `<part id="P1">${mesures}</part>` +
    `</score-partwise>`
  );
}
