import MealsDetails from "@/components/modules/Meal/MealDetails.tsx";
import { getAllMeals, getSingleMeal } from "@/services/Meal";
import { IMeal } from "@/types";

export const generateStaticParams = async () => {
  const { data } = await getAllMeals();
  return data?.slice(0, 4).map((meal: IMeal) => ({
    mealId: meal?._id,
  }));
};

const MealDetailsPage = async ({
  params,
}: {
  params: Promise<{ mealId: string }>;
}) => {
  const { mealId } = await params;
  const { data: meal } = await getSingleMeal(mealId);

  return (
    <div>
      <div>
        <MealsDetails meal={meal} />
      </div>
    </div>
  );
};

export default MealDetailsPage;
