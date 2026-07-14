import { auth } from "@clerk/nextjs/server";
import Anthropic from "@anthropic-ai/sdk";
import { getUserPlan } from "@/lib/progression";

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const SYSTEM_PROMPT = `Tu es un professeur expert en analyse harmonique pour la plateforme Harmonia (getharmonia.app). Tu reçois une analyse automatique d'une partition MusicXML et tu rédiges un commentaire pédagogique structuré et accessible.

L'analyse fournie contient un bloc "chromatisme" qui identifie précisément chaque accord non diatonique. Exploite-le : c'est le cœur de l'intérêt musical de la pièce.
- categorie "dominante_secondaire" (ex. V7/ii) : une tonicisation. Explique quel degré est momentanément traité comme une tonique, et si elle est résolue (champ "resolue").
- categorie "sensible_degre" (ex. vii°7/V) : l'accord de sensible d'un degré, même fonction dominante.
- categorie "emprunt" (ex. iv, bVI, bVII) : un emprunt au mode homonyme — commente son effet expressif (assombrissement, couleur modale).
- categorie "napolitain" (bII) : l'accord napolitain, prédominante expressive.
- categorie "chromatique" : non identifié — reste prudent, ne surinterprète pas.

Tes commentaires :
- Commencent par présenter la tonalité et le caractère général de la pièce
- Expliquent les progressions harmoniques mesure par mesure (en regroupant les passages similaires)
- Identifient les cadences et leur rôle structurel
- Analysent le chromatisme à partir du bloc fourni : tonicisations, emprunts, napolitain — leur effet expressif et leur rôle dans le discours
- Utilisent les noms de notes en français (Do, Ré, Mi...) et les chiffrages tels qu'ils sont fournis, en respectant la convention : majuscules pour les accords majeurs, minuscules pour les mineurs et diminués (I, ii, iii, IV, V7, vi, vii°, iv, bVI, V7/ii)
- Sont rédigés en 5-8 paragraphes clairs, sans jargon excessif
- Se concluent par une synthèse du langage harmonique de la pièce`;

export async function POST(req: Request) {
  const { userId } = await auth();
  if (!userId) return Response.json({ error: "Non autorisé" }, { status: 401 });

  const plan = await getUserPlan(userId);
  if (plan === "free") return Response.json({ error: "Réservé au plan Pro" }, { status: 403 });

  let body: { analysis: unknown };
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Corps de requête invalide" }, { status: 400 });
  }

  if (!body.analysis) return Response.json({ error: "Analyse manquante" }, { status: 400 });

  const userMessage = `Voici l'analyse harmonique automatique de la partition "${(body.analysis as { fichier?: string }).fichier ?? "inconnue"}" :\n\n${JSON.stringify(body.analysis, null, 2)}\n\nRédige un commentaire pédagogique complet sur cette pièce, en expliquant les choix harmoniques, les cadences détectées, les éventuels accords chromatiques, et le langage harmonique global.`;

  try {
    const message = await anthropic.messages.create({
      model: "claude-sonnet-5",
      max_tokens: 2000,
      // Sur Sonnet 5, le « thinking » est actif par défaut et consommerait une
      // part de max_tokens (au risque de tronquer le commentaire). On le laisse
      // désactivé pour conserver le profil de coût actuel.
      thinking: { type: "disabled" },
      system: SYSTEM_PROMPT,
      messages: [{ role: "user", content: userMessage }],
    });
    const text = message.content[0]?.type === "text" ? message.content[0].text : "";
    return Response.json({ text });
  } catch (error) {
    console.error("Anthropic error:", error);
    const msg = error instanceof Error ? error.message : String(error);
    return Response.json({ error: msg }, { status: 500 });
  }
}
