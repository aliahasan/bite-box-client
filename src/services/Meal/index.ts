"use server";

import { getValidToken } from "@/lib/verifyToken";

const url = process.env.NEXT_PUBLIC_URL;

export const getAllMeals = async (
  page?: string,
  limit?: string,
  query?: { [key: string]: string | string[] | undefined }
) => {
  const params = new URLSearchParams();
  if (query?.price) {
    params.append("minPrice", "0");
    params.append("maxPrice", query?.price.toString());
  }
  if (query?.category) {
    params.append("category", query?.category.toString());
  }
  if (query?.cuisine) {
    params.append("cuisine", query?.cuisine.toString());
  }
  if (query?.averageRating) {
    params.append("averageRating", query.averageRating.toString());
  }
  try {
    const response = await fetch(
      `${url}/meal?limit=${limit}&page=${page}&${params}`,
      {
        next: {
          tags: ["MEAL"],
        },
      }
    );
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

// categories and cuisines

export const getAllCategories = async () => {
  try {
    const response = await fetch(`${url}/meal/categories`);
    const data = await response.json();
    return data;
  } catch (error: any) {
    return Error(error);
  }
};

export const getAllCuisines = async () => {
  try {
    const response = await fetch(`${url}/meal/cuisines`);
    const data = await response.json();
    return data;
  } catch (error: any) {
    return Error(error);
  }
};
