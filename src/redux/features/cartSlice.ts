import { IMeal } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface CartMeal extends IMeal {
  quantity: number;
  selectedPortionSize: string; // Stores the user-selected portion size
}

interface InitialState {
  meals: CartMeal[];
  shippingAddress: string;
  foodCart: string;
  dietaryPreferences: string[];
  dietaryRestrictions: string[];
  discountAmount: number;
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
  initialState,
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

      state.meals.push({
        ...action.payload,
        quantity: 1,
        selectedPortionSize: action.payload.selectedPortionSize || "small",
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

    updatePortionSize: (state, action) => {
      const { mealId, portionSize } = action.payload;
      const meal = state.meals.find((meal) => meal._id === mealId);
      if (meal) {
        meal.selectedPortionSize = portionSize;
      }
    },

    clearCart: (state) => {
      state.meals = [];
      state.shippingAddress = "";
      state.foodCart = "";
      state.dietaryPreferences = [];
      state.dietaryRestrictions = [];
    },
  },
});

export const orderedMealSelector = (state: RootState) => state.cart.meals;

export const orderSelector = (state: RootState) => {
  return {
    meals: state.cart.meals.map((meal) => ({
      meal: meal._id,
      quantity: meal.quantity,
      portionSize: meal.selectedPortionSize,
    })),
    shippingAddress: state.cart.shippingAddress,
    paymentMethod: "Online",
    foodCart: state.cart.foodCart,
    dietaryPreferences: state.cart.dietaryPreferences,
    dietaryRestrictions: state.cart.dietaryRestrictions,
  };
};

export const foodCartSelector = (state: RootState) => {
  return state.cart.foodCart;
};

// here is the payment calculation
export const subtotalSelector = (state: RootState) => {
  return state.cart.meals.reduce((acc, meal) => {
    if (meal.portionSize === "medium") {
      return acc + meal.price * meal.quantity + 10;
    }
    if (meal.portionSize === "large") {
      return acc + meal.price * meal.quantity + 20;
    } else {
      return acc + meal.price * meal.quantity;
    }
  }, 0);
};

export const shippingAddressSelector = (state: RootState) => {
  return state.cart.shippingAddress;
};

export const dietaryPreferencesSelector = (state: RootState) => {
  return state.cart.dietaryPreferences;
};

export const dietaryRestrictionsSelector = (state: RootState) => {
  return state.cart.dietaryRestrictions;
};

export const {
  addMeal,
  incrementOrderQuantity,
  decrementOrderQuantity,
  removeMeal,
  updateShippingAddress,
  setDietaryPreferences,
  setDietaryRestrictions,
  updatePortionSize,
  clearCart,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
