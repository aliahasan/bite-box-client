import MealCard from "@/components/core/MealCard";
import { IMeal } from "@/types/meal.type";
import FilterSidebar from "./FilterSidebar";
import SearchBar from "./SearchBar/SearchBar";

const AllMeals = ({ meals }: { meals: IMeal[] }) => {
  return (
    <div>
      <div className="my-6">
        {/* Search */}
        <SearchBar />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-4">
        {/* Filter Sidebar */}
        <div className="w-full md:w-[300px]">
          <FilterSidebar />
        </div>

        {/* Meals Grid */}
        <div className="w-full md:w-3/4 flex-grow">
          {meals.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {meals.map((meal, idx) => (
                <MealCard meal={meal} key={idx} />
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500 text-lg font-semibold">
              No meals available at the moment. Please check back later!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllMeals;
