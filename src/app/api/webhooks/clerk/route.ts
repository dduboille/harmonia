/**
 * src/app/api/webhooks/clerk/route.ts
 * Harmonia — Webhook Clerk : email de bienvenue après inscription
 */

import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { type, data } = body;

    console.log("Clerk webhook event:", type);

    if (type === "user.created") {
      const email = data.email_addresses?.[0]?.email_address;
      const firstName = data.first_name ?? "Musicien";

      if (!email) {
        console.error("No email found in user.created event");
        return NextResponse.json({ error: "No email" }, { status: 400 });
      }

      console.log("Sending welcome email to:", email);

      const { error } = await resend.emails.send({
        from: "Harmonia <bonjour@getharmonia.app>",
        to: email,
        subject: "Bienvenue sur Harmonia 🎵",
        html: `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bienvenue sur Harmonia</title>
</head>
<body style="margin:0;padding:0;background:#f4f1ec;font-family:Georgia,serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f1ec;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">
          
          <!-- Header -->
          <tr>
            <td style="text-align:center;padding:40px 0 32px;">
              <span style="font-size:28px;font-weight:700;color:#1a1a1a;letter-spacing:-0.02em;">
                Harmonia<span style="color:#BA7517;">.</span>
              </span>
            </td>
          </tr>

          <!-- Card principale -->
          <tr>
            <td style="background:#fff;border-radius:12px;border:0.5px solid #e8e3db;padding:48px 40px;">
              
              <p style="font-size:13px;font-weight:600;letter-spacing:0.1em;color:#BA7517;text-transform:uppercase;margin:0 0 16px;">
                Bienvenue
              </p>
              
              <h1 style="font-size:32px;font-weight:400;color:#1a1a1a;margin:0 0 20px;line-height:1.2;letter-spacing:-0.02em;">
                Bonjour, ${firstName} 👋
              </h1>
              
              <p style="font-size:16px;color:#555;line-height:1.8;margin:0 0 24px;font-family:system-ui,sans-serif;">
                Ton compte Harmonia est créé. Tu as maintenant accès aux 
                <strong>3 premiers cours</strong> et à plus de <strong>100 exercices</strong> 
                pour commencer ton parcours en harmonie tonale.
              </p>

              <hr style="border:none;border-top:0.5px solid #e8e3db;margin:28px 0;">

              <!-- Ce qui t'attend -->
              <p style="font-size:13px;font-weight:600;letter-spacing:0.08em;color:#888;text-transform:uppercase;margin:0 0 16px;font-family:system-ui,sans-serif;">
                Ce qui t'attend
              </p>

              <table width="100%" cellpadding="0" cellspacing="0">
                ${[
                  ["𝄞", "Cours 1", "Gamme, degrés et intervalles — les fondements"],
                  ["🎹", "Cours 2", "Les accords à 3 et 4 sons — construction et renversements"],
                  ["✓", "Cours 3", "Fonctions tonales et conduites de voix — le cœur de l'harmonie"],
                ].map(([icon, title, desc]) => `
                <tr>
                  <td style="padding:10px 0;vertical-align:top;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td width="40" style="font-size:20px;vertical-align:top;padding-top:2px;">${icon}</td>
                        <td>
                          <p style="margin:0;font-size:14px;font-weight:500;color:#1a1a1a;">${title}</p>
                          <p style="margin:2px 0 0;font-size:13px;color:#888;font-family:system-ui,sans-serif;">${desc}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>`).join("")}
              </table>

              <hr style="border:none;border-top:0.5px solid #e8e3db;margin:28px 0;">

              <!-- CTA -->
              <div style="text-align:center;">
                <a href="https://www.getharmonia.app/fr/cours" 
                   style="display:inline-block;padding:14px 36px;background:#1a1a1a;color:#fff;text-decoration:none;border-radius:6px;font-size:15px;font-weight:500;font-family:system-ui,sans-serif;letter-spacing:0.02em;">
                  Commencer le cours 1 →
                </a>
                <p style="margin:16px 0 0;font-size:12px;color:#bbb;font-family:system-ui,sans-serif;">
                  Gratuit · Aucune carte requise · 6 langues disponibles
                </p>
              </div>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="text-align:center;padding:32px 0 0;">
              <p style="font-size:12px;color:#bbb;font-family:system-ui,sans-serif;margin:0;">
                © 2026 Harmonia · 
                <a href="https://www.getharmonia.app" style="color:#bbb;">getharmonia.app</a>
              </p>
              <p style="font-size:11px;color:#ccc;font-family:system-ui,sans-serif;margin:8px 0 0;">
                Tu reçois cet email car tu viens de créer un compte sur Harmonia.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
        `,
      });

      if (error) {
        console.error("Resend error:", error);
        return NextResponse.json({ error: "Email failed" }, { status: 500 });
      }

      console.log("Welcome email sent to:", email);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Clerk webhook error:", error);
    return NextResponse.json({ error: "Webhook error" }, { status: 500 });
  }
}