import { NextResponse } from "next/server";
import { query } from "@/lib/db";

export async function GET() {
  const values = ["Plan to Watch"];
  const q =
    "SELECT * FROM watchlist_items WHERE status != $1 ORDER BY id DESC LIMIT 24";
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

export async function POST(request = NextRequest) {
  const searchData = await request.json();
  const q =
    "SELECT * FROM watchlist_items WHERE title ILIKE $1 AND status != $2 ORDER BY id DESC LIMIT 24";
  const values = [`%${searchData.title}%`, "Plan to Watch"];
  try {
    const res = await query(q, values);
    if (res.rows.length === 0) {
      return NextResponse.json({
        status: 200,
        message: "No Data Found",
        data: [],
      });
    }
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
