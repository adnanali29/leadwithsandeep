import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, phone, challenge } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required fields." },
        { status: 400 }
      );
    }

    // Server-side logging of inbound founder inquiries
    console.log("[LeadWithSandeep] Inbound Founder Dialogue Request:", {
      name,
      email,
      company: company || "Not specified",
      phone: phone || "Not specified",
      challenge: challenge || "None provided",
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: "Inquiry received. Sandeep will review and respond shortly.",
    });
  } catch {
    return NextResponse.json(
      { error: "Unable to process message at this time." },
      { status: 500 }
    );
  }
}

