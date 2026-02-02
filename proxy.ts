// proxy.ts
import { NextRequest, NextResponse } from "next/server";

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Public paths (no auth required)
  if (
    pathname.startsWith("/api/auth") ||
    pathname.startsWith("/api/public") ||
    pathname === "/login" ||
    pathname.startsWith("/verify-email")
  ) {
    return NextResponse.next();
  }

  // Check better-auth session token
  const sessionToken = request.cookies.get("better-auth.session_token");

  // User is not authenticated
  if (!sessionToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // User is authenticated
  return NextResponse.next();
}

// Apply proxy only to protected routes
export const config = {
  matcher: [
    "/api/customer/:path*",
    "/api/seller/:path*",
    "/api/admin/:path*",
    "/dashboard/:path*",
    "/admin-dashboard/:path*",
  ],
};
