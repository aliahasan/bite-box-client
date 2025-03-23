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
      hours: string;
    };
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  };
  name: string;
  price: number;
  offerPrice?: number | null;
  description: string;
  image: string;
  category: {
    _id: string;
    name: string;
  };
  available: boolean;
  dietaryPreferences: string[];
  cuisine: string;
  ingredients: string[];
  portionSize: string[];
  averageRating: number;
  ratingCount: number;
  createdAt: string;
  updatedAt: string;
  relatedMeals?: IMeal[];
}
