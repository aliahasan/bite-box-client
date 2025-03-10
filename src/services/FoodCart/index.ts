"use server";

import { getValidToken } from "@/lib/verifyToken";

const url = process.env.NEXT_PUBLIC_URL;

export const createFoodCart = async (data: FormData): Promise<any> => {
  const token = await getValidToken();
  try {
    const res = await fetch(`${url}/foodcart/create`, {
      method: "POST",
      headers: {
        Authorization: token,
      },
      body: data,
    });
    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

export const getSingleFoodCart = async (foodCartId: string) => {
  try {
    const res = await fetch(`${url}/foodcart/${foodCartId}`, {
      next: {
        tags: ["FOODCART"],
      },
    });
    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};
export const getAllFoodCarts = async () => {
  try {
    const res = await fetch(`${url}/foodcart`, {
      next: {
        tags: ["FOODCART"],
      },
    });
    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};
