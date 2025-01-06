import { NextRequest, NextResponse } from "next/server";
import { query } from "@/lib/db";
import { verifyAuth } from "@/lib/auth";

export async function POST(request = NextRequest) {
  const { id, data } = await request.json();

  //   const user = await verifyAuth(request);

  //   if (!user.username) {
  //     return NextResponse.json({
  //       message: "Unauthorized",
  //       status: 401,
  //       login: false,
  //     });
  //   }
  const q =
    "UPDATE watchlist_items SET (title, category, genres, start_date, end_date, thumbnail, status, rating) = ($1, $2, $3, $4, $5, $6, $7, $8) WHERE id=$9 RETURNING *";

  const values = [
    data.title,
    data.category,
    data.genres,
    data.startDate || null,
    data.endDate || null,
    data.thumbnail || null,
    data.status,
    data.rating,
    id,
  ];
  console.log(values);

  const res = await query(q, values);

  return NextResponse.json({
    login: true,
    status: 200,
    message: "Success",
  });
}
