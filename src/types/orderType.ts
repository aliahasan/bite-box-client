export interface IMealOrder {
  _id: string;
  meals: {
    _id: string;
    name: string;
    image: string;
    portionSize: string;
    quantity: number;
    unitPrice: number;
  }[];
  orderConfirmation: string;
  orderStatus: string;
  paymentStatus: string;
  totalAmount: number;
  createdAt: string;
  finalAmount: number;
}

export type TFoodCartOrder = {
  _id: string;
  meals: {
    _id: string;
    name: string;
    image: string;
    portionSize: string;
    quantity: number;
    unitPrice: number;
  }[];
  orderConfirmation: string;
  orderStatus: string;
  paymentStatus: string;
  totalAmount: number;
  createdAt: string;
  finalAmount: number;
  dietaryPreferences: string[] | [];
  dietaryRestrictions: string[] | [];
  shippingAddress: string;
  schedule: string | null;
};
