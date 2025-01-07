import { NextResponse } from "next/server";
import { verifyAuth } from "@/lib/auth";

export async function POST(request = NextRequest) {
  const user = await verifyAuth(request);

  if (user.username) {
    const response = NextResponse.json({ message: "Logout successful" });
    response.cookies.set("user", "", { httpOnly: true, expires: new Date(0) });
    return response;
  }

  return NextResponse.json({
    message: "Already logged out or not logged in",
    status: 401,
  });
}
