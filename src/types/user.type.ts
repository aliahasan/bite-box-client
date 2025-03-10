export interface IUser {
  userId: string;
  name: string;
  email: string;
  image?: string;
  hasFoodCart?: boolean;
  isActive?: boolean;
  role: "customer" | "provider" | "admin";
  iat?: number;
  exp?: number;
}

export interface IUserProfile {
  _id: string;
  name: string;
  email: string;
  phone: string | null;
  photo: string | null;
  role: string;
  deliveryAddress: string;
  dietaryPreferences: string[];
  dietaryRestrictions: string[];
  preferredCuisine: string;
  hasFoodCart: boolean;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}
