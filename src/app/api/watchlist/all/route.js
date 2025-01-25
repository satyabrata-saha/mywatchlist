import { NextRequest, NextResponse } from "next/server";
import { query } from "@/lib/db";

export async function GET(request = NextRequest) {
  const values = ["Plan to Watch"];

  const q = "SELECT * FROM watchlist_items WHERE status != $1 ORDER BY id DESC";

  try {
    const res = await query(q, values);

    return NextResponse.json({
      message: "Data Fetched Successfully",
      status: 200,
      data: res.rows,
      total_show: res.rows.length,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Something went wrong while fetching data",
      status: 500,
    });
  }
}

export async function POST(request = NextRequest) {
  const searchData = await request.json();
  const q =
    "SELECT * FROM watchlist_items WHERE (title ILIKE $1 OR alternative_title ILIKE $1) AND status != $2 ORDER BY id DESC";
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
    });
  }
}
