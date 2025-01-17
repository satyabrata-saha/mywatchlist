import { NextRequest, NextResponse } from "next/server";
import { query } from "@/lib/db";
import { verifyAuth } from "@/lib/auth";

export async function POST(request = NextRequest) {
  const categoryData = await request.json();
  // const user = await verifyAuth(request);
  const values = [`%${categoryData.category}%`];

  // if (!user.username) {
  //   const q =
  //     "SELECT * FROM watchlist_items WHERE category ILIKE $1 ORDER BY id DESC LIMIT 25";
  //   try {
  //     const res = await query(q, values);

  //     if (res.rows.length === 0) {
  //       return NextResponse.json({
  //         status: 200,
  //         message: "No Data Found",
  //         data: [],
  //       });
  //     }

  //     return NextResponse.json({
  //       status: 200,
  //       message: "You are not logged in that's why only last 25 data fetched",
  //       data: res.rows,
  //     });
  //   } catch (error) {
  //     return NextResponse.json({
  //       status: 500,
  //       message: "Something went wrong while fetching data",
  //       error: error.message,
  //     });
  //   }
  //   // return NextResponse.json({
  //   //   message: "Unauthorized Login Required",
  //   //   status: 401,
  //   //   login: false,
  //   // });
  // }
  const q =
    "SELECT * FROM watchlist_items WHERE category ILIKE $1 ORDER BY id DESC";
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
