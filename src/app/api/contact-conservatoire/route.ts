import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(req: NextRequest) {
  try {
    const { nom, email, etablissement, nbEleves, message } = await req.json();

    if (!nom || !email || !etablissement || !message) {
      return NextResponse.json({ error: "Champs requis manquants" }, { status: 400 });
    }
    if (!email.includes("@")) {
      return NextResponse.json({ error: "Email invalide" }, { status: 400 });
    }

    // Email interne → contact@getharmonia.app
    const { error: err1 } = await resend.emails.send({
      from: "Harmonia <bonjour@getharmonia.app>",
      to: "appliharmonia@gmail.com",
      replyTo: email,
      subject: `Demande démo conservatoire — ${etablissement}`,
      html: `
<div style="font-family:system-ui,sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#f4f1ec;">
  <h2 style="font-size:22px;font-weight:700;color:#1a1a1a;margin:0 0 24px;">Nouvelle demande de démonstration</h2>
  <table cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse;">
    ${[
      ["Nom", escapeHtml(nom)],
      ["Email", escapeHtml(email)],
      ["Établissement", escapeHtml(etablissement)],
      ["Nombre d'élèves", escapeHtml(nbEleves || "Non précisé")],
      ["Message", escapeHtml(message)],
    ].map(([label, val]) => `
    <tr>
      <td style="padding:10px 0;border-bottom:0.5px solid #e8e3db;font-size:13px;color:#888;width:140px;vertical-align:top;">${label}</td>
      <td style="padding:10px 0;border-bottom:0.5px solid #e8e3db;font-size:14px;color:#1a1a1a;vertical-align:top;">${val}</td>
    </tr>`).join("")}
  </table>
</div>
      `,
    });
    if (err1) {
      console.error("Resend internal email error:", err1);
      return NextResponse.json({ error: "Email failed" }, { status: 500 });
    }

    // Email de confirmation → expéditeur
    const { error: err2 } = await resend.emails.send({
      from: "Harmonia <bonjour@getharmonia.app>",
      to: email,
      subject: "Votre demande de démonstration Harmonia",
      html: `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f4f1ec;font-family:Georgia,serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f1ec;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">
        <tr>
          <td style="text-align:center;padding:40px 0 32px;">
            <span style="font-size:28px;font-weight:700;color:#1a1a1a;letter-spacing:-0.02em;">
              Harmonia<span style="color:#BA7517;">.</span>
            </span>
          </td>
        </tr>
        <tr>
          <td style="background:#fff;border-radius:12px;border:0.5px solid #e8e3db;padding:48px 40px;">
            <p style="font-size:13px;font-weight:600;letter-spacing:0.1em;color:#2D5A8E;text-transform:uppercase;margin:0 0 16px;font-family:system-ui,sans-serif;">
              Demande reçue
            </p>
            <h1 style="font-size:28px;font-weight:400;color:#1a1a1a;margin:0 0 20px;line-height:1.2;letter-spacing:-0.02em;">
              Merci, ${escapeHtml(nom)} 🎵
            </h1>
            <p style="font-size:16px;color:#555;line-height:1.8;margin:0 0 24px;font-family:system-ui,sans-serif;">
              Nous avons bien reçu votre demande de démonstration pour
              <strong>${escapeHtml(etablissement)}</strong>.
              Notre équipe reviendra vers vous sous 48 heures ouvrées.
            </p>
            <hr style="border:none;border-top:0.5px solid #e8e3db;margin:28px 0;">
            <p style="font-size:14px;color:#888;line-height:1.6;margin:0;font-family:system-ui,sans-serif;">
              En attendant, vous pouvez créer gratuitement votre première classe et inviter
              jusqu'à 10 élèves sur
              <a href="https://www.getharmonia.app/fr/prof" style="color:#2D5A8E;">getharmonia.app/fr/prof</a>.
            </p>
          </td>
        </tr>
        <tr>
          <td style="text-align:center;padding:32px 0 0;">
            <p style="font-size:12px;color:#bbb;font-family:system-ui,sans-serif;margin:0;">
              © 2026 Harmonia · <a href="https://www.getharmonia.app" style="color:#bbb;">getharmonia.app</a>
            </p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>
      `,
    });
    if (err2) {
      console.error("Resend confirmation email error:", err2);
      return NextResponse.json({ error: "Email failed" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("contact-conservatoire error:", err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
