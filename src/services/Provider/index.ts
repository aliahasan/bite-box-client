"use server";

import { getValidToken } from "@/lib/verifyToken";
import { revalidateTag } from "next/cache";
const url = process.env.NEXT_PUBLIC_URL;

export const getFoodCartProfile = async () => {
  const token = await getValidToken();
  try {
    const res = await fetch(`${url}/foodcart/profile`, {
      method: "GET",
      headers: {
        Authorization: token,
      },
    });
    return await res.json();
  } catch (error: any) {
    return Error(error);
  }
};

export const getMyFoodCartMeals = async (
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
  if (query?.search) {
    params.append("search", query?.search.toString());
  }
  if (query?.cuisine) {
    params.append("cuisine", query?.cuisine.toString());
  }
  if (query?.averageRating) {
    params.append("averageRating", query.averageRating.toString());
  }
  const token = await getValidToken();
  try {
    const res = await fetch(
      `${url}/foodcart-meal?page=${page}&limit=${limit}&${params}`,
      {
        method: "GET",
        headers: {
          Authorization: token,
        },
      }
    );
    return await res.json();
  } catch (error: any) {
    return Error(error);
  }
};

// update meal
export const updateMealInfo = async (mealId: string, mealData: FormData) => {
  const token = await getValidToken();
  try {
    const res = await fetch(`${url}/meal/${mealId}`, {
      method: "PATCH",
      headers: {
        Authorization: token,
      },
      body: mealData,
    });
    revalidateTag("MEAL");
    return await res.json();
  } catch (error: any) {
    return Error(error);
  }
};

export const updateMealStock = async (
  mealId: string,
  stockInfo: Record<string, unknown>
) => {
  const token = await getValidToken();
  try {
    const res = await fetch(`${url}/foodcart-meal/${mealId}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(stockInfo),
    });
    revalidateTag("MEAL");
    return await res.json();
  } catch (error: any) {
    return Error(error);
  }
};

export const deleteMeal = async (mealId: string) => {
  const token = await getValidToken();
  const res = await fetch(`${url}/meal/${mealId}`, {
    method: "DELETE",
    headers: {
      Authorization: token,
    },
  });
  revalidateTag("MEAL");
  return res.json();
};

export const getProviderMetaData = async () => {
  const token = await getValidToken();
  try {
    const res = await fetch(`${url}/providermeta`, {
      method: "GET",
      headers: {
        Authorization: token,
      },
      cache: "no-store",
    });
    return await res.json();
  } catch (error: any) {
    return Error(error);
  }
};
