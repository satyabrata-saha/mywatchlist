import { NextRequest, NextResponse } from "next/server";
import { query } from "@/lib/db";
import { verifyAuth } from "@/lib/auth";

export async function POST(request = NextRequest) {
  const user = await verifyAuth(request);
  // console.log(user);

  if (!user.username) {
    return NextResponse.json({
      message: "Unauthorized",
      status: 401,
      login: false,
    });
  }

  try {
    const q = "SELECT username FROM users WHERE username = $1";
    const values = [user.username];

    const res = await query(q, values);
    // console.log(res.rows[0].username);

    if (res.rows.length === 0) {
      return NextResponse.json({
        message: "User not found",
        status: 404,
        login: false,
      });
    }

    return NextResponse.json({
      status: 200,
      message: "Authorized",
      login: true,
      username: res.rows[0].username,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json({
      status: 500,
      message: "Something went wrong",
      login: false,
    });
  }
}
