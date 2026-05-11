/**
 * Endpoint admin temporaire — force l'abonnement d'un userId Clerk
 * Protégé par un secret passé en query param
 */
import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

const ADMIN_SECRET = process.env.ADMIN_SECRET ?? "harmonia_admin_2026";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const secret = searchParams.get("secret");
  const userId = searchParams.get("userId");
  const plan   = searchParams.get("plan") ?? "student";

  if (secret !== ADMIN_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  if (!userId) {
    return NextResponse.json({ error: "userId required" }, { status: 400 });
  }

  const { data, error } = await supabaseAdmin
    .from("user_subscriptions")
    .upsert({
      user_id:               userId,
      plan,
      stripe_customer_id:    "manual_fix",
      stripe_subscription_id:"manual_fix",
      current_period_end:    "2027-06-01T00:00:00.000Z",
      updated_at:            new Date().toISOString(),
    }, { onConflict: "user_id" })
    .select();

  if (error) {
    return NextResponse.json({ error: error.message, details: error }, { status: 500 });
  }

  return NextResponse.json({ success: true, inserted: data });
}
