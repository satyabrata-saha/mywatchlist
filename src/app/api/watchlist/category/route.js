import { NextRequest, NextResponse } from "next/server";
import { query } from "@/lib/db";
import { verifyAuth } from "@/lib/auth";

export async function POST(request = NextRequest) {
  const categoryData = await request.json();
  const user = await verifyAuth(request);

  if (!user.username) {
    return NextResponse.json({
      message: "Unauthorized Login Required",
      status: 401,
      login: false,
    });
  }
  const q =
    "SELECT * FROM watchlist_items WHERE category ILIKE $1 ORDER BY id DESC";
  const values = [`%${categoryData.category}%`];
  try {
    const res = await query(q, values);

    return NextResponse.json({
      status: 200,
      message: "Data Fetched Successfully",
      data: res.rows,
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: "Something went wrong while fetching data",
      error: error.message,
    });
  }
}
