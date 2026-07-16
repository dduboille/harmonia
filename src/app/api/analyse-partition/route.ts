import { auth } from "@clerk/nextjs/server";
import { getUserPlan } from "@/lib/progression";
import { unzipSync, strFromU8 } from "fflate";
import { parseMusicXML } from "@/lib/musicxml-parse";
import { analyserPartition } from "@/lib/analyse-resultat";
import type { AccordAnalyse, NoteEtrangere } from "@/lib/analyse-chaine";
import type { Fonction, Categorie, ChordResult, ChromaEvent } from "@/lib/harmonic-analysis";

// L'ANALYSE vit dans `@/lib/analyse-resultat` (orchestration) au-dessus de
// `@/lib/analyse-chaine` (la théorie) — toutes deux pures et testées, et partagées
// avec l'atelier `/composer` qui les exécute au navigateur. Cette route n'orchestre
// que le HTTP. Les ré-exports ci-dessous préservent les imports existants
// (Studio.tsx, StudioAnalyse.tsx, AnalysePartition.tsx…).
export type { Fonction, Categorie, ChordResult, ChromaEvent, AccordAnalyse, NoteEtrangere };
export type { AnalysisResult, MesureResult, CadenceResult } from "@/lib/analyse-resultat";

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
    return Response.json(analyserPartition(parseMusicXML(xmlText), file.name));
  } catch {
    return Response.json(
      { error: "Impossible d'analyser ce fichier. Vérifiez qu'il s'agit bien d'un MusicXML valide." },
      { status: 422 },
    );
  }
}
