import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "./services/authService";

type Role = keyof typeof roleBasedPrivateRotes;

const authRoutes = ["/login", "/register"];
const roleBasedPrivateRotes = {
  customer: [/^\/customer/],
  provider: [/^\/provider/, /^\/create-food-Cart/],
  admin: [/^\/admin/],
};

export const middleware = async (request: NextRequest) => {
  const { pathname } = request.nextUrl;
  const userInfo = await getCurrentUser();
  if (!userInfo) {
    if (authRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(
        new URL(
          `http://localhost:3000/login?redirectPath=${pathname}`,
          request.url
        )
      );
    }
  }
  if (
    userInfo &&
    userInfo?.role &&
    roleBasedPrivateRotes[userInfo?.role as Role]
  ) {
    const routes = roleBasedPrivateRotes[userInfo?.role as Role];
    if (routes.some((route) => pathname.match(route))) {
      return NextResponse.next();
    }
  }
  return NextResponse.redirect(new URL("http://localhost:3000", request.url));
};

export const config = {
  matcher: [
    "/login",
    "/create-food-Cart",
    "/customer",
    "/customer/:page",
    "/provider",
    "/provider/:page",
    "/admin",
    "/admin/:page",
  ],
};
