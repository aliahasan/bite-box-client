"use server";

import { getValidToken } from "@/lib/verifyToken";

const url = process.env.NEXT_PUBLIC_URL;
export const createOrder = async (order: any) => {
  const token = await getValidToken();
  try {
    const res = await fetch(`${url}/order/create-order`, {
      method: "POST",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    });
    return await res.json();
  } catch (error: any) {
    return Error(error);
  }
};
