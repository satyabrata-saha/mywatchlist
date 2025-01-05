import { NextResponse } from "next/server";
import { query } from "@/lib/db";

export async function GET() {
  const q = "SELECT * FROM watchlist_items ORDER BY id DESC LIMIT 10";
  const res = await query(q);
  // console.log(res.rows);

  return NextResponse.json({
    status: 200,
    body: {
      message: "Hello World",
    },
    data: res.rows,
  });
}

export async function POST(request = NextRequest) {
  const searchData = await request.json();
  const q =
    "SELECT * FROM watchlist_items WHERE title ILIKE $1 ORDER BY id DESC LIMIT 10";
  const values = [`%${searchData.title}%`];
  const res = await query(q, values);

  return NextResponse.json({
    status: 200,
    body: {
      message: "Hello World",
    },
    data: res.rows,
  });
}
