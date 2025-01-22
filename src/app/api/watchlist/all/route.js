import { NextRequest, NextResponse } from "next/server";
import { query } from "@/lib/db";
import { verifyAuth } from "@/lib/auth";

export async function GET(request = NextRequest) {
  // const user = await verifyAuth(request);

  // if (!user.username) {
  //   return NextResponse.json({
  //     message: "Unauthorized Login Required",
  //     status: 401,
  //     login: false,
  //   });
  // }
  const values = ["Plan to Watch"];

  const q = "SELECT * FROM watchlist_items WHERE status != $1 ORDER BY id DESC";
  const q2 = "SELECT total_show FROM total_show WHERE id = 1";

  try {
    const res = await query(q, values);
    const res2 = await query(q2);

    return NextResponse.json({
      message: "Data Fetched Successfully",
      status: 200,
      data: res.rows,
      total_show: res2.rows[0].total_show,
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
  // const user = await verifyAuth(request);

  // if (!user.username) {
  //   return NextResponse.json({
  //     message: "Unauthorized Login Required",
  //     status: 401,
  //     login: false,
  //   });
  // }
  const q =
    "SELECT * FROM watchlist_items WHERE title ILIKE $1 AND status != $2 ORDER BY id DESC";
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
