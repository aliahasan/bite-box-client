import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const currencyFormatter = (value: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "BDT",
  }).format(value);
};

export const commaSeparatedValue = (text: string) => {
  const result = text
    .split(",")
    .map((restriction: string) => restriction.trim())
    .filter((restriction: string) => restriction !== "");
  return result || [];
};
