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
        className="bg-rose-500 hover:bg-amber-600"
      >
        Buy Now
      </Button>
    </div>
  );
};

export default BuyNow;
