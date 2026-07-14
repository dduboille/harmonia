import { auth } from "@clerk/nextjs/server";
import { getUserPlan } from "@/lib/progression";
import { unzipSync, strFromU8 } from "fflate";
import {
  identifyChord,
  analyzeChord,
  annotateResolutions,
  buildChromaEvents,
  NOTE_FR,
  type Fonction,
  type Categorie,
  type ChordResult,
  type ChromaEvent,
} from "@/lib/harmonic-analysis";

// La théorie harmonique vit tout entière dans `@/lib/harmonic-analysis` (testée
// unitairement). Cette route ne garde que le parsing MusicXML et le HTTP.
export type { Fonction, Categorie, ChordResult, ChromaEvent };

// ── Types ─────────────────────────────────────────────────────────────────────

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
  chromatisme: {
    tonicisations: number;
    emprunts: number;
    napolitains: number;
    inexpliques: number;
    evenements: ChromaEvent[];
  };
}

// ── XML Helpers ───────────────────────────────────────────────────────────────

function getTag(xml: string, tag: string): string {
  const m = new RegExp(`<${tag}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${tag}>`).exec(xml);
  return m ? m[1].trim() : "";
}

// ── Constantes de parsing MusicXML ────────────────────────────────────────────

const FIFTHS_PC = new Map<number, number>([
  [0, 0], [1, 7], [2, 2], [3, 9], [4, 4], [5, 11], [6, 6], [7, 1],
  [-1, 5], [-2, 10], [-3, 3], [-4, 8], [-5, 1], [-6, 6], [-7, 11],
]);

const STEP_PC: Record<string, number> = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };

// ── MusicXML Parser ───────────────────────────────────────────────────────────

function parseMusicXML(xml: string): {
  fifths: number;
  mode: "major" | "minor";
  signature: string;
  measureBeats: Array<{ numero: number; onsets: Array<{ beat: number; pcs: number[] }> }>;
} {
  const fifths = parseInt(getTag(xml, "fifths") || "0", 10);
  const mode: "major" | "minor" = getTag(xml, "mode") === "minor" ? "minor" : "major";

  const beatsStr = getTag(xml, "beats");
  const beatTypeStr = getTag(xml, "beat-type");
  const signature = beatsStr && beatTypeStr ? `${beatsStr}/${beatTypeStr}` : "4/4";

  // measureBeatMap: measure# -> Map<beat#, Set<pc>>
  const measureBeatMap = new Map<number, Map<number, Set<number>>>();
  const measureDivMap = new Map<number, number>();

  const partRe = /<part\b([^>]*)>([\s\S]*?)<\/part>/g;
  let pMatch: RegExpExecArray | null;

  while ((pMatch = partRe.exec(xml)) !== null) {
    const partContent = pMatch[2];
    const measureRe = /<measure\b([^>]*)>([\s\S]*?)<\/measure>/g;
    let mMatch: RegExpExecArray | null;
    let seqCounter = 0;
    let currentDivisions = 1;

    while ((mMatch = measureRe.exec(partContent)) !== null) {
      seqCounter++;
      const attrs = mMatch[1];
      const measureContent = mMatch[2];
      const numM = attrs.match(/number="(\d+)"/);
      const measureNum = numM ? parseInt(numM[1], 10) : seqCounter;

      const divStr = getTag(measureContent, "divisions");
      if (divStr) currentDivisions = Math.max(1, parseInt(divStr, 10) || 1);

      if (!measureBeatMap.has(measureNum)) {
        measureBeatMap.set(measureNum, new Map());
        measureDivMap.set(measureNum, currentDivisions);
      }
      const beatMap = measureBeatMap.get(measureNum)!;

      const noteRe = /<note\b[^>]*>([\s\S]*?)<\/note>/g;
      let nMatch: RegExpExecArray | null;
      let currentOnset = 0;
      let lastDuration = 0;

      while ((nMatch = noteRe.exec(measureContent)) !== null) {
        const noteContent = nMatch[1];
        // <chord/> means this note is simultaneous with the previous note
        const isChord = /<chord[\s/>]/.test(noteContent);
        const dur = parseInt(getTag(noteContent, "duration") || "0", 10);

        if (!isChord) {
          currentOnset += lastDuration;
          lastDuration = dur;
        }

        if (noteContent.includes("<rest")) continue;

        const pitchXml = getTag(noteContent, "pitch");
        if (!pitchXml) continue;

        const step = getTag(pitchXml, "step");
        const alterStr = getTag(pitchXml, "alter");
        const alter = alterStr ? parseFloat(alterStr) : 0;
        const basePc = STEP_PC[step];
        if (basePc === undefined) continue;
        const pc = ((basePc + Math.round(alter)) % 12 + 12) % 12;

        const beat = Math.floor(currentOnset / currentDivisions) + 1;
        if (!beatMap.has(beat)) beatMap.set(beat, new Set());
        beatMap.get(beat)!.add(pc);
      }
    }
  }

  const measureBeats = [...measureBeatMap.keys()]
    .sort((a, b) => a - b)
    .map(num => {
      const beatMap = measureBeatMap.get(num)!;
      const onsets = [...beatMap.keys()]
        .sort((a, b) => a - b)
        .map(beat => ({ beat, pcs: [...beatMap.get(beat)!] }));
      return { numero: num, onsets };
    });

  return { fifths, mode, signature, measureBeats };
}

// ── Main Analysis ─────────────────────────────────────────────────────────────

function analyze(xml: string, filename: string): AnalysisResult {
  const { fifths, mode, signature, measureBeats } = parseMusicXML(xml);

  const tonicPc = FIFTHS_PC.get(fifths) ?? 0;
  const tonicFr = NOTE_FR[tonicPc] ?? "Do";
  const tonalite = `${tonicFr} ${mode === "major" ? "majeur" : "mineur"}`;

  const mesures: MesureResult[] = [];
  const chordSequence: Array<{ result: ChordResult; measure: number }> = [];

  for (const { numero, onsets } of measureBeats) {
    if (onsets.length === 0) {
      mesures.push({ numero, accords: [] });
      continue;
    }

    const accordsMesure: ChordResult[] = [];
    for (const { beat, pcs } of onsets) {
      if (pcs.length < 2) continue;
      const chord = identifyChord(pcs);
      if (!chord) continue;
      const result = analyzeChord(chord, tonicPc, mode);
      result.beat = beat;
      accordsMesure.push(result);
      chordSequence.push({ result, measure: numero });
    }

    mesures.push({ numero, accords: accordsMesure });
  }

  // ── Arbitrage par la résolution (analyse au niveau de la SÉQUENCE) ──
  //
  // Cet appel peut CHANGER le degré, la catégorie, la cible et même la
  // fondamentale d'un accord (promotion en dominante secondaire, rétrogradation
  // en emprunt, révision de la cible d'une 7e diminuée). Il doit donc précéder
  // tout ce qui lit ces étiquettes : le comptage du chromatisme comme la
  // détection des cadences.
  annotateResolutions(chordSequence.map((c) => c.result), tonicPc, mode);

  const evenements = buildChromaEvents(chordSequence, tonicPc, mode);

  const chromatisme = {
    tonicisations: evenements.filter(
      (e) => e.categorie === "dominante_secondaire" || e.categorie === "sensible_degre",
    ).length,
    emprunts: evenements.filter((e) => e.categorie === "emprunt").length,
    napolitains: evenements.filter((e) => e.categorie === "napolitain").length,
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
    fichier: filename,
    tonalite,
    tonicFr,
    mode,
    nombreMesures: measureBeats.length,
    signature,
    mesures,
    cadences,
    nombreChromatiques,
    chromatisme,
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
  const isMxl = name.endsWith(".mxl");
  if (!name.endsWith(".xml") && !name.endsWith(".musicxml") && !isMxl) {
    return Response.json({ error: "Format non supporté. Utilisez un fichier .xml, .musicxml ou .mxl." }, { status: 400 });
  }

  if (file.size > 5 * 1024 * 1024) {
    return Response.json({ error: "Fichier trop volumineux (maximum 5 Mo)" }, { status: 400 });
  }

  let xmlText: string;
  try {
    if (isMxl) {
      const buffer = await file.arrayBuffer();
      const unzipped = unzipSync(new Uint8Array(buffer));

      // Locate rootfile path from META-INF/container.xml
      let rootPath: string | null = null;
      const containerEntry = unzipped["META-INF/container.xml"];
      if (containerEntry) {
        const containerXml = strFromU8(containerEntry);
        const m = /full-path="([^"]+)"/.exec(containerXml);
        if (m) rootPath = m[1];
      }

      // Fallback: first .xml/.musicxml entry that's not in META-INF
      if (!rootPath) {
        rootPath = Object.keys(unzipped).find(
          k => !k.startsWith("META-INF") && (k.endsWith(".xml") || k.endsWith(".musicxml"))
        ) ?? null;
      }

      if (!rootPath || !unzipped[rootPath]) {
        return Response.json({ error: "Archive .mxl invalide : aucun fichier MusicXML trouvé à l'intérieur." }, { status: 422 });
      }

      xmlText = strFromU8(unzipped[rootPath]);
    } else {
      xmlText = await file.text();
    }
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
