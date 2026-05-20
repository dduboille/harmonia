import { auth } from "@clerk/nextjs/server";
import Anthropic from "@anthropic-ai/sdk";
import { getUserPlan } from "@/lib/progression";

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const SYSTEM_PROMPT = `Tu es un professeur expert en analyse harmonique pour la plateforme Harmonia (getharmonia.app). Tu reçois une analyse automatique d'une partition MusicXML et tu rédiges un commentaire pédagogique structuré et accessible. Tes commentaires :
- Commencent par présenter la tonalité et le caractère général de la pièce
- Expliquent les progressions harmoniques mesure par mesure (en regroupant les passages similaires)
- Identifient les cadences et leur rôle structurel
- Signalent les accords chromatiques ou empruntés et leur effet expressif
- Utilisent les noms de notes en français (Do, Ré, Mi...) et les degrés en chiffres romains (I, V7, IIm...)
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
      model: "claude-sonnet-4-6",
      max_tokens: 1500,
      system: SYSTEM_PROMPT,
      messages: [{ role: "user", content: userMessage }],
    });
    const text = message.content[0]?.type === "text" ? message.content[0].text : "";
    return Response.json({ text });
  } catch {
    return Response.json({ error: "Erreur du modèle" }, { status: 500 });
  }
}
