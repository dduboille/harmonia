import { auth, clerkClient } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// GET ?classeId=xxx → liste des invitations en attente (badge prof)
export async function GET(req: NextRequest) {
  try {
    const { userId } = await auth();
    if (!userId) return NextResponse.json({ error: "Non authentifié" }, { status: 401 });

    const classeId = new URL(req.url).searchParams.get("classeId");
    if (!classeId) return NextResponse.json({ error: "classeId requis" }, { status: 400 });

    const { data: classe } = await supabaseAdmin
      .from("classes").select("prof_id").eq("id", classeId).single();
    if (!classe || classe.prof_id !== userId)
      return NextResponse.json({ error: "Accès refusé" }, { status: 403 });

    const { data } = await supabaseAdmin
      .from("classe_invitations")
      .select("email, nom, status, created_at")
      .eq("classe_id", classeId)
      .eq("status", "pending")
      .order("created_at", { ascending: true });

    return NextResponse.json({ invitations: data ?? [] });
  } catch (err) {
    console.error("GET /api/conservatoire/invitations:", err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}

// POST { classeId, eleves: [{email, nom}], locale? } → import en masse
export async function POST(req: NextRequest) {
  try {
    const { userId } = await auth();
    if (!userId) return NextResponse.json({ error: "Non authentifié" }, { status: 401 });

    const body = await req.json();
    const { classeId, eleves, locale } = body;
    const loc = typeof locale === "string" && locale ? locale : "fr";

    if (!classeId || !Array.isArray(eleves)) {
      return NextResponse.json({ error: "Données manquantes" }, { status: 400 });
    }

    const { data: classe } = await supabaseAdmin
      .from("classes").select("prof_id, nom, code_acces").eq("id", classeId).single();
    if (!classe || classe.prof_id !== userId)
      return NextResponse.json({ error: "Accès refusé" }, { status: 403 });

    // Nom du professeur (pour l'e-mail)
    let profNom = "Votre professeur";
    try {
      const clerk = await clerkClient();
      const prof = await clerk.users.getUser(userId);
      profNom = [prof.firstName, prof.lastName].filter(Boolean).join(" ") || profNom;
    } catch { /* ignore */ }

    // Dédoublonne + valide les lignes
    const seen = new Set<string>();
    const rows: Array<{ email: string; nom: string | null }> = [];
    for (const r of eleves) {
      const email = String(r?.email ?? "").trim().toLowerCase();
      if (!EMAIL_RE.test(email) || seen.has(email)) continue;
      seen.add(email);
      rows.push({ email, nom: (r?.nom ? String(r.nom).trim() : null) || null });
    }

    if (rows.length === 0) {
      return NextResponse.json({ error: "Aucun e-mail valide dans le fichier" }, { status: 400 });
    }

    const clerk = await clerkClient();
    let rattaches = 0, invites = 0, dejaMembres = 0;

    for (const row of rows) {
      // Un compte existe-t-il déjà avec cet e-mail ?
      let existingUserId: string | null = null;
      try {
        const list = await clerk.users.getUserList({ emailAddress: [row.email] });
        existingUserId = list.data?.[0]?.id ?? null;
      } catch { /* ignore */ }

      if (existingUserId) {
        // Déjà membre ?
        const { data: membership } = await supabaseAdmin
          .from("classe_eleves")
          .select("eleve_id")
          .eq("classe_id", classeId)
          .eq("eleve_id", existingUserId)
          .maybeSingle();

        if (membership) {
          dejaMembres++;
        } else {
          await supabaseAdmin
            .from("classe_eleves")
            .upsert({ classe_id: classeId, eleve_id: existingUserId }, { onConflict: "classe_id,eleve_id" });
          rattaches++;
        }
        await supabaseAdmin
          .from("classe_invitations")
          .upsert({ classe_id: classeId, email: row.email, nom: row.nom, status: "joined" }, { onConflict: "classe_id,email" });
      } else {
        await supabaseAdmin
          .from("classe_invitations")
          .upsert({ classe_id: classeId, email: row.email, nom: row.nom, status: "pending" }, { onConflict: "classe_id,email" });
        invites++;

        // E-mail d'invitation (best effort)
        try {
          await resend.emails.send({
            from: "Harmonia <noreply@getharmonia.app>",
            to: row.email,
            subject: `Invitation à rejoindre la classe « ${classe.nom} » sur Harmonia`,
            html: `
              <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background: #f4f1ec; padding: 3rem 2rem; border-radius: 12px;">
                <h1 style="font-size: 1.5rem; font-weight: 700; color: #2D5A8E; margin-bottom: 0.25rem;">Harmonia · Conservatoire</h1>
                <p style="font-size: 0.75rem; letter-spacing: 0.12em; text-transform: uppercase; color: #aaa; margin-bottom: 2rem;">Invitation</p>
                <h2 style="font-size: 1.2rem; font-weight: 500; color: #1a1a1a; margin-bottom: 1rem;">Vous êtes invité(e) à rejoindre une classe</h2>
                <p style="color: #555; line-height: 1.8; margin-bottom: 1.5rem;">
                  <strong>${profNom}</strong> vous invite à rejoindre la classe <strong>« ${classe.nom} »</strong> sur Harmonia.
                  Créez votre compte <strong>avec cette adresse e-mail</strong> pour être automatiquement ajouté(e) à la classe.
                </p>
                <p style="margin-top: 1.5rem;">
                  <a href="https://getharmonia.app/${loc}/sign-up"
                    style="display:inline-block; background: #2D5A8E; color: #fff; padding: 10px 22px; border-radius: 8px; text-decoration: none; font-weight: 700; font-size: 0.9rem;">
                    Créer mon compte →
                  </a>
                </p>
                <p style="color: #888; font-size: 0.8rem; margin-top: 1.5rem;">
                  Vous pouvez aussi rejoindre directement avec le code <strong>${classe.code_acces}</strong> depuis votre tableau de bord.
                </p>
                <hr style="border: none; border-top: 1px solid #e0dbd3; margin: 2rem 0;" />
                <p style="color: #bbb; font-size: 0.75rem;">Harmonia — Plateforme pédagogique musicale · getharmonia.app</p>
              </div>
            `,
          });
        } catch (e) {
          console.error("Invitation email failed for", row.email, e);
        }
      }
    }

    return NextResponse.json({ rattaches, invites, dejaMembres, total: rows.length });
  } catch (err) {
    console.error("POST /api/conservatoire/invitations:", err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
