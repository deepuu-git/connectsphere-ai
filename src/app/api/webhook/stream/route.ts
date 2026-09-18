import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    console.log("Stream webhook received:", body);

    return NextResponse.json({ received: true }, { status: 200 });
  } catch (error) {
    console.error("Webhook error:", error);

    return NextResponse.json(
      { error: "Invalid webhook" },
      { status: 400 }
    );
  }
}