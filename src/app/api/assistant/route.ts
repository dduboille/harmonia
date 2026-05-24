import { auth } from "@clerk/nextjs/server";
import Anthropic from "@anthropic-ai/sdk";
import { getUserPlan } from "@/lib/progression";

const SYSTEM_PROMPT = `Tu es un professeur expert en théorie musicale et harmonie tonale pour la plateforme Harmonia (getharmonia.app). Tu enseignes de la gamme aux modes, du contrepoint au jazz. Tu réponds toujours en français sauf si l'élève écrit dans une autre langue. Tes réponses sont claires, pédagogiques et illustrées d'exemples musicaux concrets. Tu utilises les noms d'accords en anglais (C, Dm7, G7) et les noms de notes en français (Do, Ré, Mi). Tu te réfères aux cours Harmonia quand c'est pertinent. Sois concis : max 4-5 paragraphes par réponse.`;

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

type ChatMessage = { role: "user" | "assistant"; content: string };

export async function POST(req: Request) {
  const { userId } = await auth();
  if (!userId) {
    return Response.json({ error: "Non autorisé" }, { status: 401 });
  }

  const plan = await getUserPlan(userId);
  if (plan === "free") {
    return Response.json({ error: "Réservé au plan Pro" }, { status: 403 });
  }

  let messages: ChatMessage[];
  try {
    const body = await req.json();
    messages = body.messages ?? [];
    if (!Array.isArray(messages) || messages.length === 0) throw new Error();
  } catch {
    return Response.json({ error: "Corps de requête invalide" }, { status: 400 });
  }

  // Keep last 20 messages to limit context size
  const trimmedMessages = messages.slice(-20);

  try {
    const message = await anthropic.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1000,
      system: SYSTEM_PROMPT,
      messages: trimmedMessages,
    });

    const text = message.content[0]?.type === "text" ? message.content[0].text : "";
    return Response.json({ text });
  } catch (error) {
    console.error("Anthropic error:", error);
    const msg = error instanceof Error ? error.message : String(error);
    return Response.json({ error: msg }, { status: 500 });
  }
}
