import BBContainer from "@/components/core/BBContainer/BBContainer";
import Address from "@/components/modules/cart/Address";
import CartMeals from "@/components/modules/cart/CartMeals";
import ClearCart from "@/components/modules/cart/ClearCart";
import PaymentDetails from "@/components/modules/cart/PaymentDetails";
import MealBanner from "@/components/modules/Meal/Banner";

const CartPage = () => {
  return (
    <div>
      <BBContainer>
        <MealBanner title="Cart Page" path="Home-Cart" />
        <div className="flex flex-col lg:gap-x-8 lg:flex-row w-full py-10">
          <div className="w-full lg:w-[1000px]">
            <CartMeals />
            <ClearCart />
          </div>
          <div className="flex-1 pt-10 lg:pt-0">
            <Address />
            <PaymentDetails />
          </div>
        </div>
      </BBContainer>
    </div>
  );
};

export default CartPage;
