import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "./services/authService";

const url = process.env.NEXT_PUBLIC_URL as string;
const app_url = process.env.NEXT_PUBLIC_APP_URL;

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
        new URL(`${url}/login?redirectPath=${pathname}`, request.url)
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
  return NextResponse.redirect(new URL(`${app_url}`, request.url));
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
