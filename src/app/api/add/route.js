import { NextRequest, NextResponse } from "next/server";
import { query } from "@/lib/db";
import jwt from "jsonwebtoken";
import { verifyAuth } from "@/lib/auth";

export async function POST(request = NextRequest) {
  const user = await verifyAuth(request);

  if (!user.username) {
    return NextResponse.json({
      message: "Unauthorized Login Required for this action",
      status: 401,
      login: false,
    });
  }

  const fromFrontendData = await request.json();
  const {
    title,
    thumbnail,
    category,
    genres,
    startDate,
    endDate,
    status,
    rating,
  } = fromFrontendData.data;

  const token = request.cookies.get("user")?.value || "";

  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const decoded = jwt.verify(token, process.env.TOKON_SECRET);

    const username = decoded.username;
    // console.log(username);

    const q = `
      INSERT INTO watchlist_items (title, thumbnail, category, genres, start_date, end_date, status, rating)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      RETURNING *;
    `;
    const values = [
      title,
      thumbnail,
      category,
      genres,
      startDate || null,
      endDate || null,
      status,
      rating || 0,
    ];

    // console.log(values);

    const res = await query(q, values);
    // return NextResponse.json(res.rows[0], { status: 200 });

    return NextResponse.json({
      message: "Data Added Successfully",
      status: 200,
      login: true,
    });
  } catch (err) {
    return NextResponse.json({
      message: "Something went wrong while adding data",
      status: 401,
    });
  }
}
