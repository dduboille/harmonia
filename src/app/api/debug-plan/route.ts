import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { auth } from "@clerk/nextjs/server";

export async function GET(req: NextRequest) {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: "not authenticated" }, { status: 401 });

  const { data, error } = await supabaseAdmin
    .from("user_subscriptions")
    .select("*")
    .eq("user_id", userId)
    .single();

  return NextResponse.json({
    clerk_user_id: userId,
    supabase_row: data ?? null,
    supabase_error: error?.message ?? null,
  });
}
