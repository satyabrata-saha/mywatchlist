import { NextRequest, NextResponse } from "next/server";
import { query } from "@/lib/db";
import { verifyAuth } from "@/lib/auth";

export async function GET(request = NextRequest) {
  const user = await verifyAuth(request);

  if (!user.username) {
    return NextResponse.json({
      message: "Unauthorized",
      status: 401,
      login: false,
    });
  }

  const q = "SELECT * FROM watchlist_items ORDER BY id DESC";
  const res = await query(q);
  // console.log(res.rows);

  return NextResponse.json({
    message: "Success",
    status: 200,
    data: res.rows,
  });
}

export async function POST(request = NextRequest) {
  const searchData = await request.json();
  const user = await verifyAuth(request);

  if (!user.username) {
    return NextResponse.json({
      message: "Unauthorized",
      status: 401,
      login: false,
    });
  }
  const q =
    "SELECT * FROM watchlist_items WHERE title ILIKE $1 ORDER BY id DESC";
  const values = [`%${searchData.title}%`];
  const res = await query(q, values);

  return NextResponse.json({
    status: 200,
    message: "Success",
    data: res.rows,
  });
}
