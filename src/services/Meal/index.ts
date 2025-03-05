"use server";

import { getValidToken } from "@/lib/verifyToken";

const url = process.env.NEXT_PUBLIC_URL;

export const getAllMeals = async () => {
  try {
    const response = await fetch(`${url}/meal`, {
      next: {
        tags: ["MEAL"],
      },
    });
    const data = await response.json();
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};

export const createMeal = async (data: FormData) => {
  const token = await getValidToken();
  try {
    const res = await fetch(`${url}/meal/create-meal`, {
      method: "POST",
      headers: {
        Authorization: token,
      },
      body: data,
    });
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

export const getSingleMeal = async (mealId: string) => {
  try {
    const res = await fetch(`${url}/meal/${mealId}`, {
      next: {
        tags: ["MEAL"],
      },
    });
    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error);
  }
};
