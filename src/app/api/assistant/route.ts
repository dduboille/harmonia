import { auth } from "@clerk/nextjs/server";
import Anthropic from "@anthropic-ai/sdk";
import { getUserPlan } from "@/lib/progression";
import { rateLimit, tooManyRequests } from "@/lib/rate-limit";

const SYSTEM_PROMPT = `Tu es un professeur expert en théorie musicale et harmonie tonale pour la plateforme Harmonia (getharmonia.app). Tu enseignes de la gamme aux modes, du contrepoint au jazz. Tu réponds toujours en français sauf si l'élève écrit dans une autre langue. Tes réponses sont claires, pédagogiques et illustrées d'exemples musicaux concrets. Tu utilises les noms d'accords en anglais (C, Dm7, G7) et les noms de notes en français (Do, Ré, Mi). Tu te réfères aux cours Harmonia quand c'est pertinent. Sois concis : max 4-5 paragraphes par réponse.`;

const MODEL = "claude-sonnet-5";

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

  // Chaque appel consomme des tokens facturés : un abonné pouvait solliciter
  // l'assistant sans aucun plafond. La limite est par utilisateur, pas par IP.
  const limit = rateLimit(`assistant:${userId}`, 30, 10 * 60 * 1000);
  if (!limit.ok) return tooManyRequests(limit.retryAfter);

  let messages: ChatMessage[];
  try {
    const body = await req.json();
    messages = body.messages ?? [];
    if (!Array.isArray(messages) || messages.length === 0) throw new Error();
  } catch {
    return Response.json({ error: "Corps de requête invalide" }, { status: 400 });
  }

  // On borne le contexte envoyé au modèle.
  const trimmedMessages = messages.slice(-20).map(m => ({
    role: m.role,
    content: String(m.content ?? "").slice(0, 4000),
  }));

  /**
   * Réponse en flux : l'appel était bloquant et l'utilisateur Pro attendait
   * 5 à 15 secondes devant une interface figée — sur la fonctionnalité même qui
   * justifie le passage de 9 € à 19 €.
   */
  try {
    const stream = anthropic.messages.stream({
      model: MODEL,
      max_tokens: 1000,
      system: SYSTEM_PROMPT,
      messages: trimmedMessages,
    });

    const encoder = new TextEncoder();
    const body = new ReadableStream<Uint8Array>({
      async start(controller) {
        try {
          for await (const event of stream) {
            if (
              event.type === "content_block_delta" &&
              event.delta.type === "text_delta"
            ) {
              controller.enqueue(encoder.encode(event.delta.text));
            }
          }
          controller.close();
        } catch (error) {
          console.error("Anthropic stream error:", error);
          controller.error(error);
        }
      },
      cancel() {
        stream.abort();
      },
    });

    return new Response(body, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-store",
        "X-Accel-Buffering": "no",
      },
    });
  } catch (error) {
    // Le détail de l'erreur fournisseur reste dans les logs : il était jusqu'ici
    // renvoyé tel quel au client.
    console.error("Anthropic error:", error);
    return Response.json(
      { error: "L'assistant est momentanément indisponible. Réessayez dans un instant." },
      { status: 502 }
    );
  }
}
