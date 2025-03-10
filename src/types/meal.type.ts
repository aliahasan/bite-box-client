export interface IMeal {
  _id: string;
  foodCart: {
    _id: string;
    foodCartName: string;
    image: string;
    address: string;
    contactNumber: string;
    description: string;
    cuisines: string[];
    availability: {
      days: string;
      hour: string;
    };
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  available: boolean;
  dietaryPreferences: string[];
  cuisine: string;
  ingredients: string[];
  portionSize: string[]; // "small" | "medium" | "large";
  averageRating: number;
  ratingCount: number;
  createdAt: string;
  updatedAt: string;
}
