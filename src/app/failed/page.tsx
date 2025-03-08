"use client";
import { AlertTriangle } from "lucide-react";
import { useRouter } from "next/navigation";

const OrderFailedPage = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-lg w-full text-center">
        <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">
          Oops! Your Order Failed
        </h1>
        <p className="text-gray-600 mb-6">
          Something went wrong while processing your order. Please try again or
          contact support.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button
            onClick={() => router.push("/")}
            className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg transition"
          >
            Go to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderFailedPage;
