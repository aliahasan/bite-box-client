import { IMeal } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface CartMeal extends IMeal {
  quantity: number;
}
interface InitialState {
  meals: CartMeal[];
  shippingAddress: string;
  foodCart: string;
  dietaryPreferences: string[];
  dietaryRestrictions: string[];
  discountAmount: 0;
}

const initialState: InitialState = {
  meals: [],
  shippingAddress: "",
  foodCart: "",
  dietaryPreferences: [],
  dietaryRestrictions: [],
  discountAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addMeal: (state, action) => {
      if (state.meals.length === 0) {
        state.foodCart = action.payload.meal._id;
      }
      const mealToAdd = state.meals.find(
        (meal) => meal._id === action.payload._id
      );
      if (mealToAdd) {
        mealToAdd.quantity += 1;
        return;
      }
      state.meals.push({ ...action.payload, quantity: 1 });
    },
    incrementOrderQuantity: (state, action) => {
      const incrementMeal = state.meals.find(
        (meal) => meal._id === action.payload
      );
      if (incrementMeal) {
        incrementMeal.quantity += 1;
        return;
      }
    },
    decrementOrderQuantity: (state, action) => {
      const decrementMeal = state.meals.find(
        (meal) => meal._id === action.payload
      );
      if (decrementMeal && decrementMeal.quantity > 1) {
        decrementMeal.quantity -= 1;
        return;
      }
    },
    removeMeal: (state, action) => {
      state.meals = state.meals.filter((meal) => meal._id !== action.payload);
    },
    updateShippingAddress: (state, action) => {
      state.shippingAddress = action.payload;
    },
    clearCart: (state) => {
      state.meals = [];
      state.shippingAddress = "";
    },
  },
});

export const orderedMealSelector = (state: RootState) => {
  return state.cart.meals;
};

export const cartReducer = cartSlice.reducer;
