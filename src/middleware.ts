import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("2c.token")?.value;

  const returnAuth = NextResponse.redirect(new URL("/home", request.url));

  if (request.nextUrl.pathname.length === 1) {
    if (!token) {
      return returnAuth;
    }
    return NextResponse.redirect(new URL("/services", request.url));
  }
  if (!token) {
    return returnAuth;
  }

  return NextResponse.next();
}
export const config = {
  matcher: ["/", "/services/:path*"],
};
