import { auth } from "@clerk/nextjs/server";
import { clerkClient } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET(req: NextRequest) {
  try {
    const { userId } = await auth();
    if (!userId) return NextResponse.json({ error: "Non authentifié" }, { status: 401 });

    const { searchParams } = new URL(req.url);
    const classeId = searchParams.get("classeId");
    if (!classeId) return NextResponse.json({ error: "classeId requis" }, { status: 400 });

    // Verify the requester is the professor of this class
    const { data: classe } = await supabaseAdmin
      .from("classes")
      .select("prof_id")
      .eq("id", classeId)
      .single();
    if (!classe || classe.prof_id !== userId)
      return NextResponse.json({ error: "Non autorisé" }, { status: 403 });

    // Get all devoir IDs for this class
    const { data: devoirs } = await supabaseAdmin
      .from("devoirs")
      .select("id")
      .eq("classe_id", classeId);

    const devoirIds = (devoirs ?? []).map((d: { id: string }) => d.id);
    if (devoirIds.length === 0) return NextResponse.json({ soumissions: [] });

    const { data: soumissions, error } = await supabaseAdmin
      .from("soumissions")
      .select("id, devoir_id, eleve_id, note, commentaire, submitted_at, corrected_at")
      .in("devoir_id", devoirIds);

    if (error) throw error;

    return NextResponse.json({
      soumissions: (soumissions ?? []).map((s: {
        id: string; devoir_id: string; eleve_id: string; note: number | null;
        commentaire: string | null; submitted_at: string; corrected_at: string | null;
      }) => ({
        id: s.id,
        devoirId: s.devoir_id,
        eleveId: s.eleve_id,
        note: s.note,
        commentaire: s.commentaire ?? null,
        submittedAt: s.submitted_at,
        correctedAt: s.corrected_at ?? null,
      })),
    });
  } catch (err) {
    console.error("GET /api/conservatoire/soumissions:", err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { userId } = await auth();
    if (!userId) return NextResponse.json({ error: "Non authentifié" }, { status: 401 });

    const body = await req.json();
    const { devoirId, contenu, note } = body;
    if (!devoirId) return NextResponse.json({ error: "devoirId requis" }, { status: 400 });

    // Check if this is a first-time submission (to avoid re-triggering the email)
    const { count: priorCount } = await supabaseAdmin
      .from("soumissions")
      .select("*", { count: "exact", head: true })
      .eq("devoir_id", devoirId)
      .eq("eleve_id", userId);
    const isFirstSubmission = (priorCount ?? 0) === 0;

    const { data, error } = await supabaseAdmin
      .from("soumissions")
      .insert({ devoir_id: devoirId, eleve_id: userId, contenu: contenu ?? null, note: note ?? null })
      .select()
      .single();

    if (error) throw error;

    // Email notification: only on first submission, check if all students have now submitted
    if (isFirstSubmission) {
      try {
        const { data: devoir } = await supabaseAdmin
          .from("devoirs")
          .select("classe_id, titre")
          .eq("id", devoirId)
          .single();

        if (devoir?.classe_id) {
          const [{ count: elevesCount }, { data: allSoumissions }] = await Promise.all([
            supabaseAdmin
              .from("classe_eleves")
              .select("*", { count: "exact", head: true })
              .eq("classe_id", devoir.classe_id),
            supabaseAdmin
              .from("soumissions")
              .select("eleve_id")
              .eq("devoir_id", devoirId),
          ]);

          const uniqueSubmitters = new Set((allSoumissions ?? []).map((s: { eleve_id: string }) => s.eleve_id));
          const total = elevesCount ?? 0;

          if (total > 0 && uniqueSubmitters.size >= total) {
            const { data: classeData } = await supabaseAdmin
              .from("classes")
              .select("prof_id, nom")
              .eq("id", devoir.classe_id)
              .single();

            if (classeData?.prof_id) {
              const clerk = await clerkClient();
              const prof = await clerk.users.getUser(classeData.prof_id);
              const profEmail = prof.emailAddresses[0]?.emailAddress;

              if (profEmail) {
                await resend.emails.send({
                  from: "Harmonia <noreply@getharmonia.app>",
                  to: profEmail,
                  subject: `✓ Tous les élèves ont rendu « ${devoir.titre} »`,
                  html: `
                    <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background: #f4f1ec; padding: 3rem 2rem; border-radius: 12px;">
                      <h1 style="font-size: 1.5rem; font-weight: 700; color: #2D5A8E; margin-bottom: 0.25rem;">Harmonia · Conservatoire</h1>
                      <p style="font-size: 0.75rem; letter-spacing: 0.12em; text-transform: uppercase; color: #aaa; margin-bottom: 2rem;">Notification pédagogique</p>
                      <h2 style="font-size: 1.2rem; font-weight: 500; color: #1a1a1a; margin-bottom: 1rem;">
                        Toutes les soumissions reçues
                      </h2>
                      <p style="color: #555; line-height: 1.8; margin-bottom: 1.5rem;">
                        Tous les élèves de la classe <strong>${classeData.nom}</strong> ont remis leur travail pour le devoir
                        <strong>« ${devoir.titre} »</strong>.
                      </p>
                      <p style="margin-top: 1.5rem;">
                        <a href="https://getharmonia.app/fr/prof"
                          style="display:inline-block; background: #2D5A8E; color: #fff; padding: 10px 22px; border-radius: 8px; text-decoration: none; font-weight: 700; font-size: 0.9rem;">
                          Consulter les soumissions →
                        </a>
                      </p>
                      <hr style="border: none; border-top: 1px solid #e0dbd3; margin: 2rem 0;" />
                      <p style="color: #bbb; font-size: 0.75rem;">Harmonia — Plateforme pédagogique musicale · getharmonia.app</p>
                    </div>
                  `,
                });
              }
            }
          }
        }
      } catch (emailErr) {
        console.error("Email notification failed:", emailErr);
      }
    }

    return NextResponse.json({
      soumission: {
        id: data.id,
        devoirId: data.devoir_id,
        eleveId: data.eleve_id,
        contenu: data.contenu,
        note: data.note,
        submittedAt: data.submitted_at,
      },
    });
  } catch (err) {
    console.error("POST /api/conservatoire/soumissions:", err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
