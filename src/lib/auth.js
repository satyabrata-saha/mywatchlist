import { NextRequest, NextResponse } from "next/server";
import { SignJWT, jwtVerify } from "jose";

export async function verifyAuth(req = NextRequest) {
  const token = req.cookies.get("user")?.value || "";

  if (!token) throw new Error("Missing user token");

  try {
    const verified = await jwtVerify(
      token,
      new TextEncoder().encode(process.env.TOKON_SECRET)
    );

    return verified.payload;
  } catch (err) {
    throw new Error("Your token has expired or is invalid");
  }
}
