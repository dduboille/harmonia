import { auth } from "@clerk/nextjs/server";
import { getUserPlan } from "@/lib/progression";
import { unzipSync, strFromU8 } from "fflate";
import { parseMusicXML } from "@/lib/musicxml-parse";
import {
  analyserHarmonie,
  type AccordAnalyse,
  type NoteEtrangere,
} from "@/lib/analyse-chaine";
import {
  annotateResolutions,
  buildChromaEvents,
  NOTE_FR,
  type Fonction,
  type Categorie,
  type ChordResult,
  type ChromaEvent,
} from "@/lib/harmonic-analysis";
import { construirePlanTonal, type PlanTonal } from "@/lib/modulations";

// La théorie harmonique vit dans `@/lib/harmonic-analysis`, la lecture du MusicXML
// dans `@/lib/musicxml-parse`, et la CHAÎNE (segmentation → choix de l'accord par le
// coût → notes étrangères) dans `@/lib/analyse-chaine` — tous testés unitairement et
// de bout en bout. Cette route n'orchestre que le HTTP.
export type { Fonction, Categorie, ChordResult, ChromaEvent, AccordAnalyse, NoteEtrangere };

// ── Types ─────────────────────────────────────────────────────────────────────

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
    planTonal,
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
