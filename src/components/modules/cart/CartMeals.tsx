"use client";
import emptyCart from "@/assets/empty-cart.png";
import { orderedMealSelector } from "@/redux/features/cartSlice";
import { useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import CartMealCard from "./CartMealCard";
import ClearCart from "./ClearCart";
const CartMeals = () => {
  const cartMeals = useAppSelector(orderedMealSelector);
  return (
    <div>
      <div className="border-2  rounded-md w-full ">
        {cartMeals?.length === 0 && (
          <div className="text-center text-gray-500 py-5">
            <p className="text-lg font-semibold">Your cart is empty</p>
            <p className="mt-2">
              Looks like your cart is on vacation—bring it back to work by
              adding some items!
            </p>
            <div className="flex justify-center items-center ">
              <Image src={emptyCart} alt="empty cart" className="w-80" />
            </div>
          </div>
        )}
        <div className="w-full">
          {cartMeals?.map((meal: any) => (
            <div key={meal._id}>
              <CartMealCard meal={meal} />
            </div>
          ))}
        </div>
      </div>
      {cartMeals?.length > 0 && <ClearCart />}
    </div>
  );
};

export default CartMeals;
