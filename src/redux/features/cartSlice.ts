import { IMeal } from "@/types";
import { createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface CartMeal extends IMeal {
  quantity: number;
}

interface InitialState {
  meals: CartMeal[];
  shippingAddress: string;
  foodCart: string;
  dietaryPreferences?: string[];
  dietaryRestrictions?: string[];
  discountAmount: number;
  portionSize?: string;
  deliveryCharge: number;
  schedule?: string;
}

const initialState: InitialState = {
  meals: [],
  shippingAddress: "",
  foodCart: "",
  dietaryPreferences: [],
  dietaryRestrictions: [],
  discountAmount: 0,
  portionSize: "",
  schedule: new Date().toISOString(),
  deliveryCharge: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addMeal: (state, action) => {
      if (state.meals.length === 0) {
        state.foodCart = action.payload?.foodCart._id;
      } else if (
        state.foodCart &&
        state.foodCart !== action.payload.foodCart._id
      ) {
        return;
      }
      const mealToAdd = state.meals.find(
        (meal) => meal._id === action.payload._id
      );

      if (mealToAdd) {
        mealToAdd.quantity += 1;
        return;
      }

      state.meals.push({
        ...action.payload,
        quantity: 1,
      });
    },

    incrementOrderQuantity: (state, action) => {
      const meal = state.meals.find((meal) => meal._id === action.payload);
      if (meal) {
        meal.quantity += 1;
      }
    },

    decrementOrderQuantity: (state, action) => {
      const meal = state.meals.find((meal) => meal._id === action.payload);
      if (meal && meal.quantity > 1) {
        meal.quantity -= 1;
      }
    },

    removeMeal: (state, action) => {
      state.meals = state.meals.filter((meal) => meal._id !== action.payload);
    },

    updateShippingAddress: (state, action) => {
      state.shippingAddress = action.payload;
    },

    setDietaryPreferences: (state, action) => {
      state.dietaryPreferences = action.payload;
    },

    setDietaryRestrictions: (state, action) => {
      state.dietaryRestrictions = action.payload;
    },

    setSchedule: (state, action) => {
      state.schedule = action.payload || new Date().toISOString();
    },

    setPortionSize: (state, action) => {
      state.portionSize = action.payload;
    },

    clearCart: (state) => {
      state.meals = [];
      state.shippingAddress = "";
      state.foodCart = "";
      state.dietaryPreferences = [];
      state.dietaryRestrictions = [];
      state.schedule = "";
    },
  },
});

export const orderedMealSelector = (state: RootState) => state.cart.meals;

const selectCart = (state: RootState) => state.cart;

export const orderSelector = createSelector([selectCart], (cart) => ({
  meals: cart.meals.map((meal) => ({
    meal: meal._id,
    quantity: meal.quantity,
    portionSize: cart.portionSize,
  })),
  shippingAddress: cart.shippingAddress,
  paymentMethod: "Online",
  foodCart: cart.foodCart,
  dietaryPreferences: cart.dietaryPreferences,
  dietaryRestrictions: cart.dietaryRestrictions,
  schedule: cart.schedule,
}));

export const foodCartSelector = (state: RootState) => state.cart.foodCart;

export const portionSelector = (state: RootState) => state.cart.portionSize;

export const deliveryChargeSelector = (state: RootState) => {
  if (
    state.cart.shippingAddress &&
    state.cart.shippingAddress === "Dhaka" &&
    state.cart.meals.length > 0
  ) {
    return 60;
  } else if (
    state.cart.shippingAddress &&
    state.cart.shippingAddress !== "Dhaka" &&
    state.cart.meals.length > 0
  ) {
    return 100;
  } else {
    return 0;
  }
};
// Payment calculation
export const subtotalSelector = (state: RootState) => {
  return state.cart.meals.reduce((acc, meal) => {
    // If the meal has an offer price, calculate using offer price
    const price = meal.offerPrice ? meal.offerPrice : meal.price;
    let finalPrice = price;
    if (state.cart.portionSize === "medium") {
      finalPrice += 20;
    } else if (state.cart.portionSize === "large") {
      finalPrice += 40;
    }
    return acc + finalPrice * meal.quantity;
  }, 0);
};

export const grandTotalSelector = (state: RootState) => {
  const subTotal = subtotalSelector(state);
  const deliveryCharge = deliveryChargeSelector(state);
  return subTotal + deliveryCharge;
};

export const shippingAddressSelector = (state: RootState) =>
  state.cart.shippingAddress;

export const dietaryPreferencesSelector = (state: RootState) =>
  state.cart.dietaryPreferences;

export const dietaryRestrictionsSelector = (state: RootState) =>
  state.cart.dietaryRestrictions;

export const scheduleSelector = (state: RootState) => state.cart.schedule;

export const {
  addMeal,
  incrementOrderQuantity,
  decrementOrderQuantity,
  removeMeal,
  updateShippingAddress,
  setDietaryPreferences,
  setDietaryRestrictions,
  setSchedule,
  setPortionSize,
  clearCart,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
