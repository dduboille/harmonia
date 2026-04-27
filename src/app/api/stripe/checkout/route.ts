import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  console.log("MINIMAL TEST - route reached");
  return NextResponse.json({ test: true, env: !!process.env.STRIPE_SECRET_KEY });
}