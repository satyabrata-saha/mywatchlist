import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function verifyAuth(req = NextRequest) {
  const token = req.cookies.get("user")?.value || "";

  if (!token)
    return NextResponse.json({
      message: "Missing user token",
      status: 401,
    });

  try {
    const decode = jwt.decode(token);
    return { username: decode.username || "" };
  } catch (err) {
    return NextResponse.json({
      message: "Your token has expired or is invalid",
      status: 401,
    });
  }
}
