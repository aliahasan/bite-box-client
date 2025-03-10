import ManageAllMeal from "@/components/modules/dashboard/Provider/ManageAllMeal";
import { getMyFoodCartMeals } from "@/services/Provider";

const AllMealPage = async () => {
  const { data, meta } = await getMyFoodCartMeals();
  return (
    <div>
      <ManageAllMeal meals={data} meta={meta} />
    </div>
  );
};

export default AllMealPage;
