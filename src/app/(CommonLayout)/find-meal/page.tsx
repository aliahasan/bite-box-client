import BBContainer from "@/components/core/BBContainer/BBContainer";
import AllMeals from "@/components/modules/Meal";
import MealBanner from "@/components/modules/Meal/Banner";
import { getAllMeals } from "@/services/Meal";

const FindMealPage = async () => {
  const { data: meals } = await getAllMeals();
  return (
    <>
      <BBContainer>
        <MealBanner title="All-Meals" path="Home-Meal" />
      </BBContainer>
      <div>
        <AllMeals meals={meals} />
      </div>
    </>
  );
};

export default FindMealPage;
