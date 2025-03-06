import BBContainer from "@/components/core/BBContainer/BBContainer";
import CartMeals from "@/components/modules/cart/CartMeals";
import PaymentDetails from "@/components/modules/cart/PaymentDetails";
import MealBanner from "@/components/modules/Meal/Banner";

const CartPage = () => {
  return (
    <div>
      <BBContainer>
        <MealBanner title="Cart Page" path="Home-Cart" />
        <div className="grid grid-cols-12 gap-8 my-5">
          <CartMeals />
          <PaymentDetails />
        </div>
      </BBContainer>
    </div>
  );
};

export default CartPage;
