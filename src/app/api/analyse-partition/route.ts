import { auth } from "@clerk/nextjs/server";
import { getUserPlan } from "@/lib/progression";

// ── Types ─────────────────────────────────────────────────────────────────────

export type Fonction = "T" | "SD" | "D" | "?";

export interface ChordResult {
  rootFr: string;
  quality: string;
  degree: string;
  degreeNum: number;
  fonction: Fonction;
}

export interface CadenceResult {
  type: "parfaite" | "plagale" | "rompue" | "demi";
  label: string;
  measure: number;
  chords: string[];
}

export interface MesureResult {
  numero: number;
  accords: ChordResult[];
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
}

// ── XML Helpers ───────────────────────────────────────────────────────────────

function getTag(xml: string, tag: string): string {
  const m = new RegExp(`<${tag}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${tag}>`).exec(xml);
  return m ? m[1].trim() : "";
}

// ── Music Theory Constants ────────────────────────────────────────────────────

const NOTE_FR: Record<number, string> = {
  0: "Do", 1: "Do#", 2: "Ré", 3: "Ré#", 4: "Mi",
  5: "Fa", 6: "Fa#", 7: "Sol", 8: "Sol#", 9: "La", 10: "La#", 11: "Si",
};

const FIFTHS_PC = new Map<number, number>([
  [0, 0], [1, 7], [2, 2], [3, 9], [4, 4], [5, 11], [6, 6], [7, 1],
  [-1, 5], [-2, 10], [-3, 3], [-4, 8], [-5, 1], [-6, 6], [-7, 11],
]);

const STEP_PC: Record<string, number> = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };

const CHORD_PATTERNS: Array<{ quality: string; name: string; intervals: number[] }> = [
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

const MAJOR_SCALE = [0, 2, 4, 5, 7, 9, 11];
const MINOR_SCALE = [0, 2, 3, 5, 7, 8, 10];
const ROMANS = ["I", "II", "III", "IV", "V", "VI", "VII"];

// ── Chord Identification ──────────────────────────────────────────────────────

function identifyChord(pcs: number[]): {
  rootPc: number; rootFr: string; quality: string; qualityName: string;
} | null {
  const unique = [...new Set(pcs.map(p => ((p % 12) + 12) % 12))];
  if (unique.length < 2) return null;

  for (const pattern of CHORD_PATTERNS) {
    if (pattern.intervals.length > unique.length + 1) continue;
    for (const root of unique) {
      const norm = unique.map(p => ((p - root + 12) % 12));
      if (pattern.intervals.every(iv => norm.includes(iv))) {
        return {
          rootPc: root,
          rootFr: NOTE_FR[root] ?? "?",
          quality: pattern.quality,
          qualityName: pattern.name,
        };
      }
    }
  }
  return null;
}

function analyzeChord(
  chord: { rootPc: number; rootFr: string; quality: string; qualityName: string },
  tonicPc: number,
  mode: "major" | "minor",
): ChordResult {
  const scale = mode === "major" ? MAJOR_SCALE : MINOR_SCALE;
  const interval = ((chord.rootPc - tonicPc + 12) % 12);
  const idx = scale.indexOf(interval);

  if (idx === -1) {
    return { rootFr: chord.rootFr, quality: chord.quality, degree: "chr", degreeNum: 0, fonction: "?" };
  }

  const num = idx + 1;
  const degree = ROMANS[idx] + chord.quality;

  let fonction: Fonction;
  if ([1, 3, 6].includes(num)) fonction = "T";
  else if ([2, 4].includes(num)) fonction = "SD";
  else if ([5, 7].includes(num)) fonction = "D";
  else fonction = "?";

  return { rootFr: chord.rootFr, quality: chord.quality, degree, degreeNum: num, fonction };
}

// ── MusicXML Parser ───────────────────────────────────────────────────────────

function parseMusicXML(xml: string): {
  fifths: number;
  mode: "major" | "minor";
  signature: string;
  measurePcs: Array<{ numero: number; pcs: number[] }>;
} {
  const fifths = parseInt(getTag(xml, "fifths") || "0", 10);
  const mode: "major" | "minor" = getTag(xml, "mode") === "minor" ? "minor" : "major";

  const beatsStr = getTag(xml, "beats");
  const beatTypeStr = getTag(xml, "beat-type");
  const signature = beatsStr && beatTypeStr ? `${beatsStr}/${beatTypeStr}` : "4/4";

  // Collect all pitch classes per measure number, across all parts
  const measureMap = new Map<number, Set<number>>();

  // Extract all <part id="..."> music blocks (not <score-part> which is inside <part-list>)
  const partRe = /<part\b([^>]*)>([\s\S]*?)<\/part>/g;
  let pMatch: RegExpExecArray | null;

  while ((pMatch = partRe.exec(xml)) !== null) {
    const partContent = pMatch[2];
    const measureRe = /<measure\b([^>]*)>([\s\S]*?)<\/measure>/g;
    let mMatch: RegExpExecArray | null;
    let seqCounter = 0;

    while ((mMatch = measureRe.exec(partContent)) !== null) {
      seqCounter++;
      const attrs = mMatch[1];
      const measureContent = mMatch[2];
      const numM = attrs.match(/number="(\d+)"/);
      const measureNum = numM ? parseInt(numM[1], 10) : seqCounter;

      if (!measureMap.has(measureNum)) measureMap.set(measureNum, new Set());
      const pcSet = measureMap.get(measureNum)!;

      // Extract notes
      const noteRe = /<note\b[^>]*>([\s\S]*?)<\/note>/g;
      let nMatch: RegExpExecArray | null;
      while ((nMatch = noteRe.exec(measureContent)) !== null) {
        const noteContent = nMatch[1];
        // Skip rests
        if (noteContent.includes("<rest")) continue;

        const pitchXml = getTag(noteContent, "pitch");
        if (!pitchXml) continue;

        const step = getTag(pitchXml, "step");
        const alterStr = getTag(pitchXml, "alter");
        const alter = alterStr ? parseFloat(alterStr) : 0;

        const basePc = STEP_PC[step];
        if (basePc === undefined) continue;
        const pc = ((basePc + Math.round(alter)) % 12 + 12) % 12;
        pcSet.add(pc);
      }
    }
  }

  const measurePcs = [...measureMap.keys()]
    .sort((a, b) => a - b)
    .map(n => ({ numero: n, pcs: [...(measureMap.get(n) ?? [])] }));

  return { fifths, mode, signature, measurePcs };
}

// ── Main Analysis ─────────────────────────────────────────────────────────────

function analyze(xml: string, filename: string): AnalysisResult {
  const { fifths, mode, signature, measurePcs } = parseMusicXML(xml);

  const tonicPc = FIFTHS_PC.get(fifths) ?? 0;
  const tonicFr = NOTE_FR[tonicPc] ?? "Do";
  const tonalite = `${tonicFr} ${mode === "major" ? "majeur" : "mineur"}`;

  let nombreChromatiques = 0;
  const mesures: MesureResult[] = [];
  const chordSequence: Array<{ result: ChordResult; measure: number }> = [];

  for (const { numero, pcs } of measurePcs) {
    if (pcs.length === 0) {
      mesures.push({ numero, accords: [] });
      continue;
    }
    const chord = identifyChord(pcs);
    if (!chord) {
      mesures.push({ numero, accords: [] });
      continue;
    }
    const result = analyzeChord(chord, tonicPc, mode);
    if (result.fonction === "?") nombreChromatiques++;
    mesures.push({ numero, accords: [result] });
    chordSequence.push({ result, measure: numero });
  }

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
    fichier: filename,
    tonalite,
    tonicFr,
    mode,
    nombreMesures: measurePcs.length,
    signature,
    mesures,
    cadences,
    nombreChromatiques,
  };
}

// ── Route Handler ─────────────────────────────────────────────────────────────

export async function POST(req: Request) {
  const { userId } = await auth();
  if (!userId) return Response.json({ error: "Non autorisé" }, { status: 401 });

  const plan = await getUserPlan(userId);
  if (plan === "free") return Response.json({ error: "Réservé au plan Pro" }, { status: 403 });

  let formData: FormData;
  try {
    formData = await req.formData();
  } catch {
    return Response.json({ error: "Requête invalide" }, { status: 400 });
  }

  const file = formData.get("file") as File | null;
  if (!file) return Response.json({ error: "Aucun fichier fourni" }, { status: 400 });

  const name = file.name.toLowerCase();
  if (!name.endsWith(".xml") && !name.endsWith(".musicxml")) {
    const msg = name.endsWith(".mxl")
      ? "Format .mxl non supporté. Exportez en .xml depuis MuseScore (Fichier > Exporter > MusicXML) ou Sibelius (File > Export > MusicXML)."
      : "Format non supporté. Utilisez un fichier .xml ou .musicxml.";
    return Response.json({ error: msg }, { status: 400 });
  }

  if (file.size > 5 * 1024 * 1024) {
    return Response.json({ error: "Fichier trop volumineux (maximum 5 Mo)" }, { status: 400 });
  }

  let xmlText: string;
  try {
    xmlText = await file.text();
  } catch {
    return Response.json({ error: "Impossible de lire le fichier" }, { status: 400 });
  }

  try {
    return Response.json(analyze(xmlText, file.name));
  } catch {
    return Response.json(
      { error: "Impossible d'analyser ce fichier. Vérifiez qu'il s'agit bien d'un MusicXML valide." },
      { status: 422 },
    );
  }
}
