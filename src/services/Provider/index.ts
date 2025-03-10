"use server";

import { getValidToken } from "@/lib/verifyToken";
const url = process.env.NEXT_PUBLIC_URL;

export const getMyFoodCartMeals = async () => {
  const token = await getValidToken();
  try {
    const res = await fetch(`${url}/foodcart-meal`, {
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
