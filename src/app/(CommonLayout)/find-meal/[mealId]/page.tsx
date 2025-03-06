import BBContainer from "@/components/core/BBContainer/BBContainer";
import MealsDetails from "@/components/modules/Meal/MealDetails.tsx";
import { getSingleMeal } from "@/services/Meal";

const MealDetailsPage = async ({
  params,
}: {
  params: Promise<{ mealId: string }>;
}) => {
  const { mealId } = await params;
  const { data: meal } = await getSingleMeal(mealId);

  return (
    <div className="py-10">
      <BBContainer>
        <div className="flex">
          <div className="flex-1">
            <MealsDetails meal={meal} />
          </div>
          <div className="flex-1">
            <h1>This is Name</h1>
          </div>
        </div>
      </BBContainer>
    </div>
  );
};

export default MealDetailsPage;
