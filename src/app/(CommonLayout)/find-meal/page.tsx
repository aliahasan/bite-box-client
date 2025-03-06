import BBContainer from "@/components/core/BBContainer/BBContainer";
import AllMeals from "@/components/modules/Meal";
import MealBanner from "@/components/modules/Meal/Banner";
import { getAllMeals } from "@/services/Meal";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;
const FindMealPage = async ({
  searchParams,
}: {
  searchParams: SearchParams;
}) => {
  const query = await searchParams;
  const { data: meals } = await getAllMeals(undefined, undefined, query);
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
