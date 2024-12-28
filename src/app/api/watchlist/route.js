import { NextResponse } from "next/server";
import { query } from "@/lib/db";

export async function GET() {
  const q = "SELECT * FROM watchlist_items";
  const res = await query(q);
  console.log(res.rows);

  return NextResponse.json({
    status: 200,
    body: {
      message: "Hello World",
    },
  });
}
