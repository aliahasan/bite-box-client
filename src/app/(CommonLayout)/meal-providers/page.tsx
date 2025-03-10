import BBContainer from "@/components/core/BBContainer/BBContainer";
import NoData from "@/components/core/NoData";
import AllFoodCart from "@/components/modules/FoodCart/AllFoodCart";
import MealBanner from "@/components/modules/Meal/Banner";
import { getAllFoodCarts } from "@/services/FoodCart";
import { IFoodCart } from "@/types";

const MealProviders = async () => {
  const { data: foodCarts } = await getAllFoodCarts();
  return (
    <>
      <MealBanner path="Home-Meals-FoodCart" title="Meal Provider Page" />
      <BBContainer>
        <div>
          {foodCarts?.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-10">
              {foodCarts?.map((foodCart: IFoodCart, index: number) => (
                <AllFoodCart key={index} foodCart={foodCart} />
              ))}
            </div>
          ) : (
            <div>
              <NoData message="There is no data !Sorry" />
            </div>
          )}
        </div>
      </BBContainer>
    </>
  );
};

export default MealProviders;
