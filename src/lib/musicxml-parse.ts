/**
 * lib/musicxml-parse.ts
 * Harmonia — Lecture d'un MusicXML en TIMELINE DE NOTES RÉELLES (fonctions pures,
 * sans HTTP ni théorie harmonique).
 *
 * Ce module remplace le parsing « au fil des <note> » qui vivait dans la route et
 * qui portait deux défauts rédhibitoires :
 *  - il ignorait <backup>, la balise par laquelle MusicXML recule le curseur pour
 *    écrire une SECONDE VOIX. Dans tout choral, toute pièce de piano, la voix 2
 *    était donc placée APRÈS la voix 1 : les onsets étaient faux, donc les accords ;
 *  - il n'enregistrait chaque note qu'à son ATTAQUE, sans durée. Une basse en ronde
 *    disparaissait dès le 2e temps, et les accords suivants étaient analysés sans elle.
 */

/**
 * Résolution interne : 768 ticks par noire. Divisible par 2, 3, 4, 6, 8, 12, 16…
 * — les <divisions> de chaque partie y sont converties, ce qui permet d'aligner
 * sur une même grille des parties qui n'ont pas la même résolution.
 */
export const TPQ = 768;

export interface ParsedNote {
  step: string;      // "C".."B" — l'orthographe est CONSERVÉE
  alter: number;     // -2..+2
  octave: number;
  pc: number;        // classe de hauteur (0-11), dérivée
  midi: number;      // hauteur absolue → permet de désigner la basse
  onset: number;     // ticks, depuis le début de la pièce
  duration: number;  // ticks
  measure: number;
  beat: number;      // temps dans la mesure (1-based, unité = noire)
  voice: string;
  part: string;
}

export interface ParsedMeasure {
  numero: number;
  start: number;   // ticks
  length: number;  // ticks
}

export interface ParsedScore {
  fifths: number;
  mode: "major" | "minor";
  signature: string;
  notes: ParsedNote[];
  measures: ParsedMeasure[];
}

const STEP_PC: Record<string, number> = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };
const STEP_FR: Record<string, string> = {
  C: "Do", D: "Ré", E: "Mi", F: "Fa", G: "Sol", A: "La", B: "Si",
};

/** Nom français d'une note, ORTHOGRAPHE COMPRISE : "Lab", pas "Sol#". */
export function noteNameFr(step: string, alter: number): string {
  const base = STEP_FR[step] ?? step;
  if (alter > 0) return base + "#".repeat(alter);
  if (alter < 0) return base + "b".repeat(-alter);
  return base;
}

function getTag(xml: string, tag: string): string {
  const m = new RegExp(`<${tag}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${tag}>`).exec(xml);
  return m ? m[1].trim() : "";
}

function intTag(xml: string, tag: string, fallback = 0): number {
  const n = parseInt(getTag(xml, tag), 10);
  return Number.isFinite(n) ? n : fallback;
}

/** Note telle que lue dans une mesure : onset RELATIF à la mesure. */
interface RawNote {
  step: string;
  alter: number;
  octave: number;
  midi: number;
  measure: number;
  rel: number;       // ticks depuis le début de la mesure
  abs: number;       // ticks depuis le début de la pièce (rempli en 2e passe)
  dur: number;
  voice: string;
  part: string;
  tieStart: boolean;
  tieStop: boolean;
}

/**
 * Lecture d'une partie. Le CURSEUR est la seule notion qui compte :
 *  - une note ordinaire l'avance de sa durée ;
 *  - une note de <chord/> ne l'avance pas et reprend l'onset de la précédente ;
 *  - <backup> le RECULE (c'est ainsi qu'on revient au début de la mesure pour
 *    écrire la voix suivante) et <forward> l'avance.
 */
function parsePart(content: string, partId: string): {
  notes: RawNote[];
  lengths: Map<number, number>;
} {
  const notes: RawNote[] = [];
  const lengths = new Map<number, number>();

  // Les <divisions> valent jusqu'à nouvel ordre : elles traversent les mesures, et
  // peuvent changer EN COURS de mesure — d'où la lecture au fil du parcours, et non
  // une fois pour toutes en tête de mesure (ce qui les appliquerait rétroactivement
  // aux notes précédant le changement).
  let divisions = 1;
  const toTicks = (d: number) => Math.round((d * TPQ) / divisions);

  let seq = 0;
  const measureRe = /<measure\s+([^>]*)>([\s\S]*?)<\/measure>/g;
  let mm: RegExpExecArray | null;

  while ((mm = measureRe.exec(content)) !== null) {
    seq++;
    // ATTENTION : 0 est un numéro de mesure LÉGITIME — c'est la convention de
    // l'anacrouse (<measure number="0" implicit="yes">), par laquelle commence la
    // quasi-totalité des chorals. Un test de vérité (`|| seq`) le confondrait avec
    // la mesure 1 : les deux partageraient le même départ et la levée se plaquerait
    // sur le premier temps. D'où le test de NULLITÉ explicite.
    const lu = parseInt(/number=["'](\d+)["']/.exec(mm[1])?.[1] ?? "", 10);
    const numero = Number.isFinite(lu) ? lu : seq;
    const body = mm[2];

    let cursor = 0;    // ticks
    let prevOnset = 0; // onset de la dernière note NON-<chord/>
    let maxCursor = 0;

    const elemRe =
      /<note\b[^>]*>([\s\S]*?)<\/note>|<backup\b[^>]*>([\s\S]*?)<\/backup>|<forward\b[^>]*>([\s\S]*?)<\/forward>|<attributes\b[^>]*>([\s\S]*?)<\/attributes>/g;
    let em: RegExpExecArray | null;

    while ((em = elemRe.exec(body)) !== null) {
      const [, noteBody, backupBody, forwardBody, attrBody] = em;

      if (attrBody !== undefined) {
        const div = intTag(attrBody, "divisions", 0);
        if (div > 0) divisions = div;
        continue;
      }
      if (backupBody !== undefined) {
        cursor = Math.max(0, cursor - toTicks(intTag(backupBody, "duration")));
        continue;
      }
      if (forwardBody !== undefined) {
        cursor += toTicks(intTag(forwardBody, "duration"));
        maxCursor = Math.max(maxCursor, cursor);
        continue;
      }
      if (noteBody === undefined) continue;

      // Ornement : pas de durée, pas d'harmonie. On l'ignore, curseur inchangé.
      if (/<grace\b/.test(noteBody)) continue;

      const isChord = /<chord\s*\/?>/.test(noteBody);
      const dur = toTicks(intTag(noteBody, "duration"));
      const onset = isChord ? prevOnset : cursor;

      if (!isChord) {
        cursor += dur;
        prevOnset = onset;
        maxCursor = Math.max(maxCursor, cursor);
      }

      // Une note de REPÈRE (<cue/>) n'est pas jouée : elle rappelle au musicien ce
      // que fait une autre partie. Contrairement à l'ornement, elle a une durée et
      // occupe le temps — on avance donc le curseur, comme pour un silence, mais on
      // n'émet aucune note : la faire sonner injecterait une hauteur fantôme dans
      // l'accord vertical.
      if (/<rest\b/.test(noteBody) || /<cue\b/.test(noteBody)) continue;

      const pitch = getTag(noteBody, "pitch");
      if (!pitch) continue;
      const step = getTag(pitch, "step");
      if (STEP_PC[step] === undefined) continue;

      const alter = Math.round(parseFloat(getTag(pitch, "alter") || "0")) || 0;
      const octave = intTag(pitch, "octave", 4);

      notes.push({
        step,
        alter,
        octave,
        midi: (octave + 1) * 12 + STEP_PC[step] + alter,
        measure: numero,
        rel: onset,
        abs: 0,
        dur,
        voice: getTag(noteBody, "voice") || "1",
        part: partId,
        // XML autorise indifféremment les guillemets doubles et simples.
        tieStart: /<tie\b[^>]*type=["']start["']/.test(noteBody),
        tieStop: /<tie\b[^>]*type=["']stop["']/.test(noteBody),
      });
    }

    lengths.set(numero, Math.max(lengths.get(numero) ?? 0, maxCursor));
  }

  return { notes, lengths };
}

/**
 * Liaisons de TENUE : une note liée ne se réattaque pas, elle prolonge la
 * précédente. On fusionne donc les durées, y compris par-dessus la barre de mesure
 * (d'où l'usage d'onsets ABSOLUS ici).
 */
function mergeTies(raws: RawNote[]): RawNote[] {
  const sorted = [...raws].sort((a, b) => a.abs - b.abs);
  const out: RawNote[] = [];
  const ouvertes = new Map<string, RawNote>(); // partie|voix|hauteur

  for (const n of sorted) {
    const cle = `${n.part}|${n.voice}|${n.midi}`;
    const tenue = ouvertes.get(cle);

    // Adjacence RELÂCHÉE : on exige seulement que la note liée ne commence pas AVANT
    // la fin de la tenue. Une égalité stricte (`fin === début`) serait juste en
    // théorie mais se casse en pratique : la longueur d'une mesure est celle de la
    // partie qui la lit le plus longue, si bien qu'une partie qui remplit sa mesure
    // plus court (encodage approximatif, arrondi de toTicks) voit sa liaison
    // par-dessus la barre ne plus se refermer — et la note SE RÉATTAQUE, ce que ce
    // module existe précisément pour empêcher. On étire donc la tenue jusqu'à la fin
    // réelle de la note liée, en absorbant l'écart.
    if (n.tieStop && tenue && n.abs >= tenue.abs + tenue.dur) {
      tenue.dur = n.abs + n.dur - tenue.abs;
      if (!n.tieStart) ouvertes.delete(cle);
      continue; // pas de nouvelle attaque
    }

    out.push(n);
    if (n.tieStart) {
      ouvertes.set(cle, n);
    } else if (!tenue || n.abs !== tenue.abs) {
      // Une note NON liée referme la tenue de même hauteur : c'est une réattaque.
      // Sauf si elle commence au MÊME onset que la tenue — ce n'est alors pas une
      // réattaque mais un DOUBLEMENT à l'unisson dans le même accord (deux fois la
      // même hauteur, une seule liée) : refermer ici tuerait la liaison de l'autre.
      ouvertes.delete(cle);
    }
  }

  return out;
}

export function parseMusicXML(source: string): ParsedScore {
  // Un <note> mis en commentaire n'existe pas : le parser le ferait sonner ET
  // avancer le curseur, décalant tout le reste de la mesure. On les retire d'entrée.
  const xml = source.replace(/<!--[\s\S]*?-->/g, "");

  const fifths = intTag(xml, "fifths", 0);
  const mode: "major" | "minor" = getTag(xml, "mode") === "minor" ? "minor" : "major";
  const beats = getTag(xml, "beats");
  const beatType = getTag(xml, "beat-type");
  const signature = beats && beatType ? `${beats}/${beatType}` : "4/4";

  const raws: RawNote[] = [];
  const lengths = new Map<number, number>();

  // `\s+` et non `\b` : « - » est une frontière de mot, si bien que `<part\b` matche
  // aussi <part-list> — le catalogue des parties, présent dans TOUT fichier réel.
  // La première vraie partie y perdait son id et retombait sur le repli « P1 », or
  // `part` est une clé de fusion des liaisons.
  const partRe = /<part\s+([^>]*)>([\s\S]*?)<\/part>/g;
  let pm: RegExpExecArray | null;
  let idx = 0;

  while ((pm = partRe.exec(xml)) !== null) {
    idx++;
    const partId = /id=["']([^"']+)["']/.exec(pm[1])?.[1] ?? `P${idx}`;
    const lu = parsePart(pm[2], partId);
    raws.push(...lu.notes);
    // Les parties d'un MusicXML valide ont les mêmes mesures ; on retient la
    // lecture la plus longue de chacune, pour rester robuste aux parties creuses.
    for (const [numero, len] of lu.lengths) {
      lengths.set(numero, Math.max(lengths.get(numero) ?? 0, len));
    }
  }

  const measures: ParsedMeasure[] = [];
  let start = 0;
  for (const numero of [...lengths.keys()].sort((a, b) => a - b)) {
    const length = lengths.get(numero) || 4 * TPQ;
    measures.push({ numero, start, length });
    start += length;
  }
  const startOf = new Map(measures.map((m) => [m.numero, m.start]));

  for (const r of raws) r.abs = (startOf.get(r.measure) ?? 0) + r.rel;

  const notes: ParsedNote[] = mergeTies(raws)
    .map((r) => ({
      step: r.step,
      alter: r.alter,
      octave: r.octave,
      pc: (((STEP_PC[r.step] + r.alter) % 12) + 12) % 12,
      midi: r.midi,
      onset: r.abs,
      duration: r.dur,
      measure: r.measure,
      beat: Math.floor(r.rel / TPQ) + 1,
      voice: r.voice,
      part: r.part,
    }))
    .sort((a, b) => a.onset - b.onset || a.midi - b.midi);

  return { fifths, mode, signature, notes, measures };
}
