import { Button } from "@/components/ui/button";
import { currencyFormatter } from "@/lib/utils";
import {
  CartMeal,
  decrementOrderQuantity,
  incrementOrderQuantity,
  portionSelector,
  removeMeal,
} from "@/redux/features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Minus, Plus, Trash } from "lucide-react";
import Image from "next/image";
import CustomizeDialog from "./CustomizeDialog";

const CartMealCard = ({ meal }: { meal: CartMeal }) => {
  const dispatch = useAppDispatch();
  const selectedPotion = useAppSelector(portionSelector);
  const handleIncrementQuantity = (id: string) => {
    dispatch(incrementOrderQuantity(id));
  };

  const handleDecrementQuantity = (id: string) => {
    dispatch(decrementOrderQuantity(id));
  };

  const handleRemove = (id: string) => {
    dispatch(removeMeal(id));
  };
  return (
    <div className="bg-[#F9FAFB] rounded-lg flex md:p-5 gap-3 md:gap-5 ">
      <div className="h-full w-32 rounded-md overflow-hidden">
        <Image
          src={meal?.image}
          height={200}
          width={200}
          alt="meal"
          className="aspect-square object-cover rounded"
        />
      </div>
      <div className="flex flex-col justify-between flex-grow relative">
        <h1 className="text-md md:text-xl font-semibold">{meal?.name}</h1>
        <div className="flex gap-5 my-2 text-sm md:text-lg">
          <p>
            <span className="text-gray-500">Stock Availability : </span>
            <span className="font-semibold">
              {meal?.available ? "Available" : "not available"}
            </span>
          </p>
        </div>
        <hr className="my-1" />
        <div className="flex items-center justify-between text-sm md:text-lg">
          <div>
            <p>
              <span className="text-gray-500"> Price : </span>
              <span className="font-medium text-[12px] md:text-sm">
                {" "}
                {currencyFormatter(meal?.price)}
              </span>
            </p>
            <p>
              <span className="text-gray-500 "> Portion Size : </span>
              <span>{selectedPotion}</span>
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm md:text-lg">
            <p className="text-gray-500 ">Quantity</p>
            <Button
              onClick={() => handleDecrementQuantity(meal._id)}
              variant="outline"
              className="size-6 md:size-8 rounded-sm"
            >
              <Minus />
            </Button>
            <p className="font-semibold text-xl p-2">{meal?.quantity}</p>
            <Button
              onClick={() => handleIncrementQuantity(meal._id)}
              variant="outline"
              className="size-6 md:size-8 rounded-sm"
            >
              <Plus />
            </Button>
            <Button
              onClick={() => handleRemove(meal._id)}
              variant="outline"
              className="size-6 md:size-8 rounded-sm"
            >
              <Trash className="text-red-500/50" />
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute right-3 md:right-7">
        <CustomizeDialog></CustomizeDialog>
      </div>
    </div>
  );
};

export default CartMealCard;
