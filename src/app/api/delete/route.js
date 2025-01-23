import { NextRequest, NextResponse } from "next/server";
import { query } from "@/lib/db";
import { verifyAuth } from "@/lib/auth";

export async function POST(request = NextRequest) {
  const { id } = await request.json();

  const user = await verifyAuth(request);

  if (!user.username) {
    return NextResponse.json({
      message: "Unauthorized! Login Required for this action",
      status: 401,
      login: false,
    });
  }
  const q = "DELETE FROM watchlist_items WHERE id=$1";

  const values = [id];

  try {
    const res = await query(q, values);

    return NextResponse.json({
      login: true,
      status: 200,
      message: "Data Deleted Successfully",
    });
  } catch (error) {
    return NextResponse.json({
      login: true,
      status: 500,
      message: "Something went wrong while deleting data",
    });
  }
}
