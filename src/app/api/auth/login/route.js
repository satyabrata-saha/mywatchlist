import { NextResponse } from "next/server";
import { query } from "@/lib/db";
import jwt from "jsonwebtoken";

export async function POST(request) {
  const { username, password } = await request.json();

  if (!username || !password) {
    return NextResponse.json(
      { error: "Username and password are required" },
      { status: 400 }
    );
  }

  try {
    const res = await query(
      "SELECT * FROM users WHERE username = $1 AND password = $2",
      [username, password]
    );
    if (res.rows.length > 0) {
      const user = res.rows[0];
      const tokenData = {
        username: user.username,
      };
      const token = jwt.sign(tokenData, process.env.TOKON_SECRET, {
        expiresIn: "14d",
      });

      const response = NextResponse.json({
        status: 200,
        message: "Login successful",
        success: true,
      });
      response.cookies.set("user", token, {
        httpOnly: true,
      });

      return response;
    } else {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }
  } catch (error) {
    console.log(error);
  }
}
