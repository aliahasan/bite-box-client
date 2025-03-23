import BBButton from "@/components/core/BBButton/BBButton";
import BBContainer from "@/components/core/BBContainer/BBContainer";
import MealCard from "@/components/core/MealCard";
import { getAllMeals } from "@/services/Meal";
import { IMeal } from "@/types";
import Link from "next/link";

const FeaturedMeals = async () => {
  const { data: meals } = await getAllMeals();
  return (
    <div className="my-24">
      <BBContainer>
        <div className="flex items-center justify-between ">
          <h2 className="text-3xl font-bold">Featured Products</h2>
          <Link href="/find-meal">
            <BBButton label="All Meals"></BBButton>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mt-10">
          {meals?.slice(0, 5).map((meal: IMeal, idx: number) => (
            <MealCard key={idx} meal={meal} />
          ))}
        </div>
      </BBContainer>
    </div>
  );
};

export default FeaturedMeals;
