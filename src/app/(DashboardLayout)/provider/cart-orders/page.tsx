import FoodCartOrderTable from "@/components/modules/dashboard/Provider/FoodCartOrderTable";
import { getMyFoodCartOrders } from "@/services/Order";

const FooCartOrders = async () => {
  const { data } = await getMyFoodCartOrders();
  return (
    <div>
      <FoodCartOrderTable orders={data} />
    </div>
  );
};

export default FooCartOrders;
