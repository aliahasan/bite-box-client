"use server";

import { getValidToken } from "@/lib/verifyToken";
import { revalidateTag } from "next/cache";

const url = process.env.NEXT_PUBLIC_URL;

export const createReview = async (foodCartId: string, data: any) => {
  const token = await getValidToken();
  try {
    const res = await fetch(`${url}/review/${foodCartId}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(data),
    });
    revalidateTag("FOODCART");
    return await res.json();
  } catch (error: any) {
    return Error(error);
  }
};
