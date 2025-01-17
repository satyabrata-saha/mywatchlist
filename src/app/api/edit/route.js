import { NextRequest, NextResponse } from "next/server";
import { query } from "@/lib/db";
import { verifyAuth } from "@/lib/auth";

export async function POST(request = NextRequest) {
  const { id, data } = await request.json();

  const user = await verifyAuth(request);

  if (!user.username) {
    return NextResponse.json({
      message: "Unauthorized Login Required for this action",
      status: 401,
      login: false,
    });
  }
  const q =
    "UPDATE watchlist_items SET (title, category, genres, start_date, end_date, thumbnail, status, rating, alternative_title, link) = ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) WHERE id=$11 RETURNING *";

  const values = [
    data.title,
    data.category,
    data.genres,
    data.startDate || null,
    data.endDate || null,
    data.thumbnail || null,
    data.status,
    data.rating,
    data.alternativeTitle || null,
    data.link || null,
    id,
  ];
  // console.log(values);

  try {
    const res = await query(q, values);

    return NextResponse.json({
      login: true,
      status: 200,
      message: "Data Updated Successfully",
    });
  } catch (error) {
    return NextResponse.json({
      login: true,
      status: 500,
      message: "Something went wrong while updating data",
    });
  }
}
