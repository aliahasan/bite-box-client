import BBContainer from "@/components/core/BBContainer/BBContainer";
import MealCard from "@/components/core/MealCard";
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
  const { relatedMeals } = meal;
  return (
    <div>
      <div>
        <MealsDetails meal={meal} />
        <section>
          <BBContainer>
            <div>
              {relatedMeals && (
                <div>
                  <h1 className="text-3xl font-medium">Related Meals</h1>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-10">
                    {relatedMeals?.map((meal: IMeal, index: number) => (
                      <div key={index}>
                        <div></div>
                        <MealCard meal={meal}></MealCard>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </BBContainer>
        </section>
      </div>
    </div>
  );
};

export default MealDetailsPage;
