import { NextResponse, NextRequest } from "next/server";
import { verifyAuth } from "./lib/auth";

export async function middleware(request = NextRequest) {
  const path = request.nextUrl.pathname;
  const isPublicPath = path === "/login" || path === "/welcome";

  const verifiedToken = await verifyAuth(request).catch((err) => {
    console.error(err.message);
  });

  // console.log(verifiedToken);

  if (isPublicPath && verifiedToken) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }
  if (!isPublicPath && !verifiedToken) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }
}

export const config = {
  matcher: ["/login", "/welcome"],
};
