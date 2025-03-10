import UpdateMealForm from "@/components/modules/dashboard/Provider/UpdateMealForm";
import { getSingleMeal } from "@/services/Meal";

const UpdateProductPage = async ({
  params,
}: {
  params: Promise<{ mealId: string }>;
}) => {
  const { mealId } = await params;
  const { data: meal } = await getSingleMeal(mealId);

  return (
    <div className="flex items-center justify-center">
      <UpdateMealForm meal={meal} />
    </div>
  );
};

export default UpdateProductPage;
