"use server";

import { getValidToken } from "@/lib/verifyToken";
import { revalidateTag } from "next/cache";

const url = process.env.NEXT_PUBLIC_URL;

export const getMyOrders = async () => {
  const token = await getValidToken();
  try {
    const res = await fetch(`${url}/order/my-orders`, {
      method: "GET",
      headers: {
        Authorization: token,
      },
      next: {
        tags: ["ORDERS"],
      },
    });
    return await res.json();
  } catch (error: any) {
    return Error(error);
  }
};

export const getMyFoodCartOrders = async () => {
  const token = await getValidToken();
  try {
    const res = await fetch(`${url}/order/my-foodCart-orders`, {
      method: "GET",
      headers: {
        Authorization: token,
      },
      next: {
        tags: ["ORDERS"],
      },
    });
    return await res.json();
  } catch (error: any) {
    return Error(error);
  }
};

export const updateOrder = async (orderId: string, status: string) => {
  const token = await getValidToken();

  try {
    const res = await fetch(`${url}/order/${orderId}/update-status`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json", // Ensure proper header for JSON
        Authorization: token,
      },
      body: JSON.stringify({ status }), // Send as an object, not a string
    });

    revalidateTag("ORDERS");

    return await res.json();
  } catch (error: any) {
    return new Error(error);
  }
};
