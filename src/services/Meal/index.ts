"use server";
const url = process.env.NEXT_PUBLIC_URL;

export const getAllMeals = async () => {
  try {
    const response = await fetch(`${url}/meal`, {
      next: {
        tags: ["MEAL"],
      },
    });
    const data = await response.json();
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};
