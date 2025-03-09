"use server";

import { getValidToken } from "@/lib/verifyToken";
import { revalidateTag } from "next/cache";
const url = process.env.NEXT_PUBLIC_URL;

export const getMyProfileInfo = async () => {
  const token = await getValidToken();
  try {
    const res = await fetch(`${url}/user/me`, {
      method: "GET",
      headers: {
        Authorization: token,
      },
      next: {
        tags: ["PROFILE"],
      },
    });
    return await res.json();
  } catch (error: any) {
    return Error(error);
  }
};

export const updateProfile = async (data: FormData) => {
  const token = await getValidToken();
  try {
    const res = await fetch(`${url}/user/update-profile`, {
      method: "PATCH",
      headers: {
        Authorization: token,
      },
      body: data,
    });
    revalidateTag("PROFILE");
    return await res.json();
  } catch (error: any) {
    return Error(error);
  }
};
