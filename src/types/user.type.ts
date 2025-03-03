export interface IUser {
  userId: string;
  name: string;
  email: string;
  hasFoodCart?: boolean;
  isActive?: boolean;
  role: "customer" | "provider" | "admin";
  iat?: number;
  exp?: number;
}
