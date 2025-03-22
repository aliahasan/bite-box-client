"use server";

import { getValidToken } from "@/lib/verifyToken";
import { revalidateTag } from "next/cache";

const url = process.env.NEXT_PUBLIC_URL;

export const addFlashSale = async (mealData: any): Promise<any> => {
  const token = await getValidToken();
  try {
    const res = await fetch(`${url}/flash-sale`, {
      method: "POST",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mealData),
    });
    revalidateTag("MEAL");
    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

// get all flash sale meals

export const getAllFlashSaleMeals = async () => {
  try {
    const res = await fetch(`${url}/flash-sale`, {
      next: {
        tags: ["MEAL"],
      },
    });
    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};
