import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  return NextResponse.redirect(new URL("/", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/about/:path*",
};

// import { NextResponse } from "next/server";
// import { NextRequest } from "next/server";

// export function middleware(NextRequest) {
//   const path = NextRequest.nextUrl.pathname;
//   const isPublicPath =
//     path === "/login" || path === "/signup" || path === "/verifyemail";
//   const token = NextRequest.cookies.get("token")?.value || "";

//   if (isPublicPath && token) {
//     return NextResponse.redirect(new URL("/profile", NextRequest.nextUrl));
//   }
//   if (!isPublicPath && !token) {
//     return NextResponse.redirect(new URL("/login", NextRequest.nextUrl));
//   }
// }

// export const config = {
//   matcher: ["/", "/profile", "/login", "/signup", "/verifyemail"],
// };
