"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Bar, Pie } from "react-chartjs-2";

// Registering all necessary chart elements
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

interface ChartProps {
  data: {
    totalOrders: number;
    totalRevenue: number;
    orderBreakdown: { status: string; total: number }[];
    totalMealItems: number;
  };
}

const ProviderChart = ({ data }: ChartProps) => {
  // Pie chart data
  const pieData = {
    labels: data.orderBreakdown.map((item) => item?.status),
    datasets: [
      {
        data: data.orderBreakdown.map((item) => item?.total),
        backgroundColor: ["#FFB6B6", "#FF7043", "#FF8C00"],
        hoverOffset: 4,
      },
    ],
  };

  // Bar chart data
  const barData = {
    labels: data.orderBreakdown.map((item) => item?.status),
    datasets: [
      {
        label: "Orders",
        data: data.orderBreakdown.map((item) => item?.total),
        backgroundColor: ["#FFB6B6", "#FF7043", "#FF8C00"],
        borderColor: ["#FFB6B6", "#FF7043", "#FF8C00"],
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem: { raw: any }) => `${tooltipItem.raw} orders`,
        },
      },
    },
  };

  return (
    <div>
      {/* Dashboard cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Total Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-red-500">
              {data?.totalOrders}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-green-500">
              ${data?.totalRevenue}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Total Meal Items</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-blue-500">
              {data?.totalMealItems}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Order Statistics</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Responsive Charts */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 w-full">
              {/* Pie Chart */}
              <div className="w-full lg:w-1/2">
                <div className="h-64 sm:h-80 md:h-96">
                  <Pie data={pieData} options={options} />
                </div>
              </div>

              {/* Bar Chart */}
              <div className="w-full lg:w-1/2">
                <div className="h-64 sm:h-80 md:h-96">
                  <Bar data={barData} options={options} />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProviderChart;
