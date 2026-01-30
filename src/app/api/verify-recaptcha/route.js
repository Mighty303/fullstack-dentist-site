import { NextResponse } from "next/server";

export async function POST(request) {
  const { token } = await request.json();
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  if (!secretKey) {
    return NextResponse.json(
      { success: false, error: ["RECAPTCHA_SECRET_KEY not configured"] },
      { status: 500 }
    );
  }

  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${secretKey}&response=${token}`,
    }
  );

  const data = await response.json();

  if (data.success) {
    return NextResponse.json({ success: true });
  } else {
    return NextResponse.json({ success: false, error: data["error-codes"] });
  }
}
