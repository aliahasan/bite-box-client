import MangeCategories from "@/components/modules/Meal/Category";
import { getAllMealCategories } from "@/services/category";

const MealCategoryPage = async () => {
  const { data } = await getAllMealCategories();
  console.log(data);
  return (
    <div>
      <MangeCategories categories={data} />
    </div>
  );
};

export default MealCategoryPage;
