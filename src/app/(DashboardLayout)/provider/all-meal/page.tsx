import ManageAllMeal from "@/components/modules/dashboard/Provider/ManageAllMeal";
import { getMyFoodCartMeals } from "@/services/Provider";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;
const AllMealPage = async ({
  searchParams,
}: {
  searchParams: SearchParams;
}) => {
  const query = await searchParams;
  const { page } = await searchParams;
  const { data, meta } = await getMyFoodCartMeals(
    page as string,
    undefined,
    query
  );
  return (
    <div>
      <ManageAllMeal meals={data} meta={meta} />
    </div>
  );
};

export default AllMealPage;
