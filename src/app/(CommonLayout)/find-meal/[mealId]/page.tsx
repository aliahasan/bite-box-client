import BBContainer from "@/components/core/BBContainer/BBContainer";
import MealDescription from "@/components/modules/Meal/MealDescription";
import { getSingleMeal } from "@/services/Meal";

const MealDetailsPage = async ({
  params,
}: {
  params: Promise<{ mealId: string }>;
}) => {
  const { mealId } = await params;
  const { data: meal } = await getSingleMeal(mealId);
  return (
    <div>
      <BBContainer>
        <h1>{meal.name}</h1>
        <MealDescription description={meal.description} />
      </BBContainer>
    </div>
  );
};

export default MealDetailsPage;
