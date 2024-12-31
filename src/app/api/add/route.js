import { NextResponse } from "next/server";
import { query } from "@/lib/db";
import jwt from "jsonwebtoken";

export async function POST(request) {
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
    console.log(username);

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
      startDate,
      endDate,
      status,
      rating,
    ];

    const res = await query(q, values);
    // return NextResponse.json(res.rows[0], { status: 200 });

    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}
