import { auth } from "@clerk/nextjs/server";
import { getUserPlan } from "@/lib/progression";
import { unzipSync, strFromU8 } from "fflate";
import { parseMusicXML, noteNameFr } from "@/lib/musicxml-parse";
import { sliceByBeat, mergeSlices, type Slice } from "@/lib/harmony-segmentation";
import {
  identifyChordFromNotes,
  analyzeChord,
  annotateResolutions,
  buildChromaEvents,
  NOTE_FR,
  type Fonction,
  type Categorie,
  type ChordResult,
  type ChromaEvent,
} from "@/lib/harmonic-analysis";

// La théorie harmonique vit dans `@/lib/harmonic-analysis`, la lecture du MusicXML
// dans `@/lib/musicxml-parse` et la segmentation dans `@/lib/harmony-segmentation`
// — tous testés unitairement. Cette route n'orchestre que le HTTP.
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
    sixtesAugmentees: number;
    inexpliques: number;
    evenements: ChromaEvent[];
  };
}

// ── Constantes ────────────────────────────────────────────────────────────────

const FIFTHS_PC = new Map<number, number>([
  [0, 0], [1, 7], [2, 2], [3, 9], [4, 4], [5, 11], [6, 6], [7, 1],
  [-1, 5], [-2, 10], [-3, 3], [-4, 8], [-5, 1], [-6, 6], [-7, 11],
]);

// ── Main Analysis ─────────────────────────────────────────────────────────────

function analyze(xml: string, filename: string): AnalysisResult {
  const score = parseMusicXML(xml);
  const { mode, signature } = score;

  const tonicPc = FIFTHS_PC.get(score.fifths) ?? 0;
  const tonicFr = NOTE_FR[tonicPc] ?? "Do";
  const tonalite = `${tonicFr} ${mode === "major" ? "majeur" : "mineur"}`;

  // Identité harmonique d'une tranche : c'est elle qui définit le RYTHME
  // HARMONIQUE. Deux temps consécutifs de même identité ne font qu'un segment —
  // on n'annote qu'aux changements d'accord, comme le ferait un musicien.
  const identite = (s: Slice): string => {
    const c = identifyChordFromNotes(s.pcs, s.bass.pc);
    return c ? `${c.rootPc}:${c.quality}:${s.bass.pc}` : "";
  };
  const segments = mergeSlices(sliceByBeat(score), identite);

  const accordsParMesure = new Map<number, ChordResult[]>();
  const chordSequence: Array<{ result: ChordResult; measure: number }> = [];

  for (const s of segments) {
    if (s.pcs.length < 2) continue;
    const chord = identifyChordFromNotes(s.pcs, s.bass.pc);
    if (!chord) continue;

    // L'orthographe des notes du segment : sans elle, pas de sixte augmentée
    // (un Fa# et un Solb sonnent la même hauteur, mais ne s'analysent pas pareil).
    chord.spelled = s.notes.map((n) => ({ step: n.step, alter: n.alter, pc: n.pc }));

    const result = analyzeChord(chord, tonicPc, mode);
    result.beat = s.beat;
    // La basse est nommée d'après ce qui est ÉCRIT : « Lab », jamais « Sol# ». Le
    // moteur, qui ne connaît que des classes de hauteurs, n'a pu poser qu'un repli.
    result.bassFr = noteNameFr(s.bass.step, s.bass.alter);

    const liste = accordsParMesure.get(s.measure) ?? [];
    liste.push(result);
    accordsParMesure.set(s.measure, liste);
    chordSequence.push({ result, measure: s.measure });
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
    fichier: filename,
    tonalite,
    tonicFr,
    mode,
    nombreMesures: score.measures.length,
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
