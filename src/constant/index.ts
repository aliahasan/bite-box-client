export const protectedRoutes = [
  "/login",
  "/create-food-cart",
  "/admin",
  "/admin/:page",
  "/customer",
  "/customer/:page",
  "/provider/:page",
];

export type UserRole = {
  customer: "customer";
  admin: "admin";
  provider: "provider";
};
