import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseAdmin } from '@/lib/supabase';

const resend = new Resend(process.env.RESEND_API_KEY);

function getClientIp(req: NextRequest): string {
  return (
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    req.headers.get('x-real-ip') ??
    'unknown'
  );
}

export async function POST(request: NextRequest) {
  try {
    const { type, message, email } = await request.json();

    if (!type || !message || message.trim().length < 5) {
      return NextResponse.json({ error: 'Données invalides' }, { status: 400 });
    }

    const ip = getClientIp(request);
    const db = getSupabaseAdmin();

    // Rate limit: max 3 feedbacks per IP per hour
    const oneHourAgo = new Date(Date.now() - 3600 * 1000).toISOString();
    const { count } = await db
      .from('feedbacks')
      .select('*', { count: 'exact', head: true })
      .eq('ip', ip)
      .gte('created_at', oneHourAgo);

    if ((count ?? 0) >= 3) {
      return NextResponse.json({ error: 'Limite atteinte. Réessayez dans 1h.' }, { status: 429 });
    }

    // Save to Supabase
    await db.from('feedbacks').insert({
      type,
      message: message.trim(),
      email: email?.trim() || null,
      ip,
    });

    // Send email via Resend
    await resend.emails.send({
      from: 'Harmonia Feedback <noreply@getharmonia.app>',
      to: 'appliharmonia@gmail.com',
      replyTo: email?.trim() || undefined,
      subject: `[Feedback ${type}] — Harmonia`,
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #faf8f4; border-radius: 8px;">
          <h2 style="font-size: 18px; color: #1a1a1a; margin: 0 0 16px;">Nouveau feedback — ${type}</h2>
          <div style="background: #fff; border: 1px solid #e8e3db; border-radius: 6px; padding: 16px; margin-bottom: 16px; white-space: pre-wrap; font-size: 14px; color: #333; line-height: 1.6;">
            ${message.trim().replace(/</g, '&lt;').replace(/>/g, '&gt;')}
          </div>
          ${email ? `<p style="font-size: 12px; color: #888;">Email : <a href="mailto:${email}">${email}</a></p>` : ''}
          <p style="font-size: 11px; color: #bbb; margin-top: 24px;">IP : ${ip}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Feedback error:', error);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
