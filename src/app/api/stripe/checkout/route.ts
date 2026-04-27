import { NextRequest, NextResponse } from "next/server";
import { PLANS } from "@/lib/stripe";
import { supabaseAdmin } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  console.log("TEST - supabase import OK");
  return NextResponse.json({ test: true });
}