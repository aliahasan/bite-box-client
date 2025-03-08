"use client";
import { Button } from "@/components/ui/button";
import { clearCart, orderedMealSelector } from "@/redux/features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

const ClearCart = () => {
  const disPatch = useAppDispatch();
  const cartSelector = useAppSelector(orderedMealSelector);
  const handleClearCart = () => {
    disPatch(clearCart());
  };
  return (
    <div className="my-6 lg:text-right w-full md:w-max">
      <Button disabled={cartSelector.length === 0} onClick={handleClearCart}>
        Clear cart
      </Button>
    </div>
  );
};

export default ClearCart;
