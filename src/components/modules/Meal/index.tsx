import MealCard from "@/components/core/MealCard";
import { IMeal } from "@/types/meal.type";

const AllMeals = ({ meals }: { meals: IMeal[] }) => {
  return (
    <div className="container mx-auto px-4 my-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {meals?.map((meal, idx) => (
          <MealCard meal={meal} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default AllMeals;
