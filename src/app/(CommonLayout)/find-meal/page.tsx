import BBContainer from "@/components/core/BBContainer/BBContainer";
import Pagination from "@/components/core/BBPagination/Pagination";
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
  const { page } = await searchParams;
  const { data: meals, meta } = await getAllMeals(
    page as string,
    undefined,
    query
  );
  return (
    <>
      <BBContainer>
        <MealBanner title="All-Meals" path="Home-Meal" />
        <AllMeals meals={meals} />
        <div className="my-10 flex items-center justify-center">
          <Pagination totalPage={meta?.totalPage} />
        </div>
      </BBContainer>
    </>
  );
};

export default FindMealPage;
