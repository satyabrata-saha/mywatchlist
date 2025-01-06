import { NextRequest, NextResponse } from "next/server";
import { query } from "@/lib/db";
import { verifyAuth } from "@/lib/auth";

export async function POST(request = NextRequest) {
  const categoryData = await request.json();
  const user = await verifyAuth(request);

  if (!user.username) {
    return NextResponse.json({
      message: "Unauthorized",
      status: 401,
      login: false,
    });
  }
  const q =
    "SELECT * FROM watchlist_items WHERE category ILIKE $1 ORDER BY id DESC";
  const values = [`%${categoryData.category}%`];
  const res = await query(q, values);

  return NextResponse.json({
    status: 200,
    message: "Success",
    data: res.rows,
  });
}
