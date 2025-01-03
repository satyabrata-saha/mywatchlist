import { NextRequest, NextResponse } from "next/server";
import { SignJWT, jwtVerify } from "jose";

export async function verifyAuth(req = NextRequest) {
  const token = req.cookies.get("user")?.value || "";

  if (!token)
    return NextResponse.json({
      message: "Missing user token",
      status: 401,
    });

  try {
    const verified = await jwtVerify(
      token,
      new TextEncoder().encode(process.env.TOKON_SECRET)
    );

    return verified.payload;
  } catch (err) {
    return NextResponse.json({
      message: "Your token has expired or is invalid",
      status: 401,
    });
  }
}
