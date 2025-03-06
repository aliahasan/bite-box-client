import MealCard from "@/components/core/MealCard";
import { IMeal } from "@/types/meal.type";
import FilterSidebar from "./FilterSidebar";

const AllMeals = ({ meals }: { meals: IMeal[] }) => {
  return (
    <div className="my-10 flex flex-col md:flex-row gap-4">
      {/* Filter Sidebar */}
      <div className="w-full md:w-[300px]">
        <FilterSidebar />
      </div>

      {/* Meals Grid */}
      <div className="w-full md:w-3/4 flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {meals?.map((meal, idx) => (
            <MealCard meal={meal} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllMeals;
