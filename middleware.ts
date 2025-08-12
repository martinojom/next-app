import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL("/api/auth/signin", request.url));
}

export const config = {
  // *: Zero or More
  // +: One or More
  // ?: Zero or One
  matcher: ["/dashboard/:path*"],
};
