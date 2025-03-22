"use server";

import { getValidToken } from "@/lib/verifyToken";
import { revalidateTag } from "next/cache";

const url = process.env.NEXT_PUBLIC_URL;

export const createCategory = async (data: FormData) => {
  const token = await getValidToken();
  try {
    const res = await fetch(`${url}/category`, {
      method: "POST",
      headers: {
        Authorization: token,
      },
      body: data,
    });
    revalidateTag("CATEGORY");
    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

export const getAllMealCategories = async () => {
  try {
    const res = await fetch(`${url}/category`, {
      next: {
        tags: ["CATEGORY"],
      },
    });
    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};
