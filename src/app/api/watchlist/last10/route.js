import { NextResponse } from "next/server";
import { query } from "@/lib/db";

export async function GET() {
  const q = "SELECT * FROM watchlist_items ORDER BY id DESC LIMIT 10";
  try {
    const res = await query(q);
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

export async function POST(request = NextRequest) {
  const searchData = await request.json();
  const q =
    "SELECT * FROM watchlist_items WHERE title ILIKE $1 ORDER BY id DESC LIMIT 10";
  const values = [`%${searchData.title}%`];
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
