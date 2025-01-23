import { NextRequest, NextResponse } from "next/server";
import { query } from "@/lib/db";

export async function POST(request = NextRequest) {
  const categoryData = await request.json();
  const values = [`%${categoryData.category}%`];

  const q =
    "SELECT * FROM watchlist_items WHERE genres ILIKE $1 ORDER BY id DESC";
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
      total_show: res.rows.length,
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: "Something went wrong while fetching data",
      error: error.message,
    });
  }
}
