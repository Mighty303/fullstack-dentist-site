import { NextResponse } from "next/server";

export async function POST(request) {
  const { token } = await request.json();
  const secretKey = process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY;
  console.log(secretKey);
  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=REDACTED-SECRET-KEY&response=${token}`,
    }
  );

  const data = await response.json();

  if (data.success) {
    return NextResponse.json({ success: true });
  } else {
    return NextResponse.json({ success: false, error: data["error-codes"] });
  }
}
