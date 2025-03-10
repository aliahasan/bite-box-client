import OrderTable from "@/components/modules/dashboard/Customer/OrderTable";
import { getMyOrders } from "@/services/Order";

const CustomerOrdersPage = async () => {
  const { data } = await getMyOrders();
  return (
    <div>
      <OrderTable orders={data} />
    </div>
  );
};

export default CustomerOrdersPage;
