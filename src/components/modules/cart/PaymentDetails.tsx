"use client";
import { Button } from "@/components/ui/button";
import { currencyFormatter } from "@/lib/utils";
import {
  deliveryChargeSelector,
  grandTotalSelector,
  subtotalSelector,
} from "@/redux/features/cartSlice";
import { useAppSelector } from "@/redux/hooks";

const PaymentDetails = () => {
  const subTotal = useAppSelector(subtotalSelector);
  const deliveryCost = useAppSelector(deliveryChargeSelector);
  const grandTotal = useAppSelector(grandTotalSelector);

  return (
    <div className="border-2 bg-gray-50  brightness-105 rounded-md  h-fit p-5">
      <h1 className="text-2xl font-bold">Payment Details</h1>
      <>
        <div className="space-y-2 mt-4">
          <div className="flex justify-between">
            <p className="text-gray-500 ">Subtotal</p>
            <p className="font-semibold">{currencyFormatter(subTotal)}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-500 ">Discount</p>
            <p className="font-semibold">{currencyFormatter(0)}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-500 ">Delivery charge</p>
            <p className="font-semibold">{currencyFormatter(deliveryCost)}</p>
          </div>
        </div>
        <div className="flex justify-between mt-10 mb-5">
          <p className="text-gray-500 ">Grand Total</p>
          <p className="font-semibold">{currencyFormatter(grandTotal)}</p>
        </div>
      </>
      <Button className="w-full text-sm font-semibold py-5">Order Now</Button>
    </div>
  );
};

export default PaymentDetails;
