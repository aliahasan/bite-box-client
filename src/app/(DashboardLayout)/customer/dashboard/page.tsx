import CustomerChart from "@/components/modules/dashboard/Customer/CustomerChart";
import { getCustomerMeta } from "@/services/User";

const CustomerDashboard = async () => {
  const { data } = await getCustomerMeta();
  return (
    <div>
      <h1 className="text-3xl font-bold  mb-6">Customer Dashboard</h1>
      <div>
        {data && data.orderBreakdown && data.totalOrders !== undefined ? (
          <CustomerChart data={data} />
        ) : (
          <div>
            <p className="text-lg text-gray-300 text-center">
              No customer data available at the moment. Please check back later.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomerDashboard;
