import { NextRequest, NextResponse } from "next/server";
import { PLANS } from "@/lib/stripe";

export async function POST(req: NextRequest) {
  console.log("TEST - stripe import OK, plans:", Object.keys(PLANS));
  return NextResponse.json({ test: true });
}