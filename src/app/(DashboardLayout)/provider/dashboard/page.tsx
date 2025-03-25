import ProviderChart from "@/components/modules/dashboard/Provider/ProviderChart";
import { getProviderMetaData } from "@/services/Provider";

const ProviderDashboard = async () => {
  const { data } = await getProviderMetaData();

  return (
    <div className="min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Meal Provider Dashboard</h1>
      <div>
        {data && data.orderBreakdown && data.totalOrders !== undefined ? (
          <ProviderChart data={data} />
        ) : (
          <div>
            <p className="text-lg text-gray-300">
              No Food cart data available at the moment. Please check back
              later.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProviderDashboard;
