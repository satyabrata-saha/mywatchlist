import { NextResponse } from "next/server";
import { query } from "@/lib/db";

export async function GET() {
  const values = ["Plan to Watch"];
  const q =
    "SELECT * FROM watchlist_items WHERE status != $1 ORDER BY id DESC LIMIT 25";
  const q2 = "SELECT total_show FROM total_show WHERE id = 1";
  try {
    const res = await query(q, values);
    const res2 = await query(q2);
    return NextResponse.json({
      status: 200,
      message: "Data Fetched Successfully",
      data: res.rows,
      total_show: res2.rows[0].total_show,
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
