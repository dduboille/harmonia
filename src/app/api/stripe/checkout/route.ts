import { NextRequest, NextResponse } from "next/server";
import { PLANS } from "@/lib/stripe";
import { supabaseAdmin } from "@/lib/supabase";
import { auth, currentUser } from "@clerk/nextjs/server";

export async function POST(req: NextRequest) {
  console.log("TEST - clerk import OK");
  const { userId } = await auth();
  console.log("TEST - userId:", userId);
  return NextResponse.json({ test: true, userId });
}