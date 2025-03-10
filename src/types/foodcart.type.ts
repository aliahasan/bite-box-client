export interface IFoodCart {
  _id: string;
  foodCartName: string;
  owner: string;
  image: string;
  address: string;
  contactNumber: string;
  description: string;
  cuisines: string[];
  availability: {
    days: string;
    hours: string;
  };
  isActive: boolean;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
}
