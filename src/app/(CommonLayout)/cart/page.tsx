import BBContainer from "@/components/core/BBContainer/BBContainer";
import Address from "@/components/modules/cart/Address";
import CartMeals from "@/components/modules/cart/CartMeals";
import PaymentDetails from "@/components/modules/cart/PaymentDetails";
import MealBanner from "@/components/modules/Meal/Banner";

const CartPage = () => {
  return (
    <>
      <MealBanner title="Cart Page" path="Home-Cart" />
      <BBContainer>
        <div className="flex flex-col  lg:gap-x-8 lg:flex-row w-full py-20">
          <div className="w-full lg:w-[1000px]">
            <CartMeals />
          </div>
          <div className="flex-1 pt-10 lg:pt-0">
            <Address />
            <PaymentDetails />
          </div>
        </div>
      </BBContainer>
    </>
  );
};

export default CartPage;
