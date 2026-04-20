import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Email invalide' },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: 'Harmonia <onboarding@resend.dev>',
      to: email,
      subject: 'Bienvenue sur Harmonia — Accès bêta confirmé',
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background: #0E0B08; color: #FAF8F4; padding: 3rem 2rem;">
          <h1 style="font-size: 2rem; font-weight: 400; color: #C9A84C; margin-bottom: 0.5rem;">Harmonia</h1>
          <p style="font-size: 0.8rem; letter-spacing: 0.2em; text-transform: uppercase; color: rgba(250,248,244,0.4); margin-bottom: 2rem;">Théorie musicale vivante</p>
          <h2 style="font-size: 1.4rem; font-weight: 400; margin-bottom: 1rem;">Votre inscription est confirmée.</h2>
          <p style="color: rgba(250,248,244,0.7); line-height: 1.8; margin-bottom: 1.5rem;">
            Merci de rejoindre les premiers explorateurs d'Harmonia. Vous serez parmi les premiers à accéder à la plateforme dès son ouverture.
          </p>
          <p style="color: rgba(250,248,244,0.7); line-height: 1.8; margin-bottom: 2rem;">
            En attendant, nous construisons pour vous des exercices interactifs de conduite des voix, d'analyse harmonique et bien plus encore.
          </p>
          <p style="color: rgba(250,248,244,0.4); font-size: 0.85rem;">— L'équipe Harmonia</p>
          <hr style="border: none; border-top: 1px solid rgba(201,168,76,0.2); margin: 2rem 0;" />
          <p style="color: rgba(250,248,244,0.2); font-size: 0.75rem;">Vous recevez cet email car vous vous êtes inscrit sur getharmonia.app</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Erreur Resend:', error);
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}