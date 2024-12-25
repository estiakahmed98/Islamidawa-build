import { NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth";

export function middleware(req) {
  const token = req.cookies.get("authToken");

  if (!token || !verifyToken(token)) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/profile", "/api/profile", "/api/:path*"],
};

// import { NextResponse } from "next/server";
// import { verifyToken } from "./lib/auth";

// export function middleware(req) {
//   const { pathname } = req.nextUrl;
//   const token = req.cookies.get("authToken");

//   if (pathname.startsWith("/api/auth") || pathname === "/") {
//     return NextResponse.next();
//   }

//   if (!token || !verifyToken(token)) {
//     return NextResponse.redirect(new URL("/login", req.url));
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/api/:path*"],
// };
