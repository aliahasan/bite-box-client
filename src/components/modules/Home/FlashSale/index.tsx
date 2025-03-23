import BBButton from "@/components/core/BBButton/BBButton";
import BBContainer from "@/components/core/BBContainer/BBContainer";
import MealCard from "@/components/core/MealCard";
import { getAllFlashSaleMeals } from "@/services/FlashSale";
import { IMeal } from "@/types";
import Link from "next/link";
import CountDown from "./CountDown";

const FlashSaleSection = async () => {
  const { data: flashSaleMeals } = await getAllFlashSaleMeals();
  return (
    <div className="my-24">
      <BBContainer>
        <div className="flex flex-col">
          <div>
            <div className="flex justify-between">
              <h2 className="text-3xl font-bold ">Flash Sale</h2>
              <Link href="/find-meal">
                <BBButton label="All collection"></BBButton>
              </Link>
            </div>
          </div>
          <div>
            <CountDown />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 my-10">
          {flashSaleMeals?.map((meal: IMeal, index: number) => (
            <MealCard key={index} meal={meal} />
          ))}
        </div>
      </BBContainer>
    </div>
  );
};

export default FlashSaleSection;
