"use client";
import { Button } from "@/components/ui/button";
import { addMeal } from "@/redux/features/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import { useRouter } from "next/navigation";

const BuyNow = ({ meal }: any) => {
  const router = useRouter();
  const disPatch = useAppDispatch();
  const handleBuyNow = () => {
    disPatch(addMeal(meal));
    router.push("/cart");
  };
  return (
    <div>
      <Button
        onClick={handleBuyNow}
        disabled={!meal?.available}
        className="bg-orange-500 hover:bg-orange-500 cursor-pointer w-full md:w-1/2"
      >
        Buy Now
      </Button>
    </div>
  );
};

export default BuyNow;
