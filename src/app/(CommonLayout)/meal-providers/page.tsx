import BBContainer from "@/components/core/BBContainer/BBContainer";
import NoData from "@/components/core/NoData";
import AllFoodCart from "@/components/modules/FoodCart/AllFoodCart";
import MealBanner from "@/components/modules/Meal/Banner";
import { getAllFoodCarts } from "@/services/FoodCart";
import { IFoodCart } from "@/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BiteBox | Meal Providers",
  description: "This is Meal provider those are serving delicious food to you",
};

const MealProviders = async () => {
  const { data: foodCarts } = await getAllFoodCarts();
  return (
    <>
      <MealBanner path="Home-Meals-FoodCart" title="Meal Provider Page" />
      <BBContainer>
        <div className="my-20">
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
