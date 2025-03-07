"use client";
import emptyCart from "@/assets/empty-cart.png";
import { orderedMealSelector } from "@/redux/features/cartSlice";
import { useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import CartMealCard from "./CartMealCard";
const CartMeals = () => {
  const cartMeals = useAppSelector(orderedMealSelector);
  return (
    <div className="border-2 brightness-105 rounded-md w-full p-4 space-y-5">
      {cartMeals?.length === 0 && (
        <div className="text-center text-gray-500">
          <p className="text-lg font-semibold">Your cart is empty</p>
          <p className="mt-2">
            Looks like your cart is on vacation—bring it back to work by adding
            some items!
          </p>
          <div className="flex justify-center items-center ">
            <Image src={emptyCart} alt="empty cart" />
          </div>
        </div>
      )}
      <div className="w-full">
        {cartMeals?.map((meal: any) => (
          <CartMealCard key={meal._id} meal={meal} />
        ))}
      </div>
    </div>
  );
};

export default CartMeals;
