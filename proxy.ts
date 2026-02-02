// proxy.ts
import { NextRequest, NextResponse } from "next/server";

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow public routes
  if (
    pathname.startsWith("/api/auth") ||
    pathname.startsWith("/api/public") ||
    pathname === "/login"
  ) {
    return NextResponse.next();
  }

  // Check session token
  const sessionToken = request.cookies.get("__Secure-better-auth.session_token");

  if (!sessionToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

// Optional: Define matcher if needed
export const config = {
  matcher: [
    "/api/customer/:path*",
    "/api/seller/:path*",
    "/api/admin/:path*",
  ],
};
