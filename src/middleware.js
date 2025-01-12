import { NextResponse, NextRequest } from "next/server";
import { verifyAuth } from "./lib/auth";

export async function middleware(request = NextRequest) {
  const path = request.nextUrl.pathname;
  const isPublicPath = path === "/login" || path === "/";

  const user = await verifyAuth(request);
  // console.log(user.username);

  const verifiedToken = user?.username;

  // console.log(verifiedToken);

  if (isPublicPath && verifiedToken) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }
  if (!isPublicPath && !verifiedToken) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }
}

export const config = {
  matcher: ["/login", "/watchlist", "/anime/:id"],
};
