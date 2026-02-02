import { NextRequest, NextResponse } from "next/server";

export async function authMiddleware(request: NextRequest) {
  const { pathname } = request.nextUrl;


  if (
    pathname.startsWith("/api/auth") ||
    pathname.startsWith("/api/public") ||
    pathname === "/login"
  ) {
    return NextResponse.next();
  }


  const sessionToken = request.cookies.get("__Secure-better-auth.session_token");

 
  if (!sessionToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

 
  return NextResponse.next();
}


export const config = {
  matcher: [
    "/api/customer/:path*",
    "/api/seller/:path*",
    "/api/admin/:path*",
  ],
};
