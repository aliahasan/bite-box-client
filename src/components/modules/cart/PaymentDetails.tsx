"use client";
import { Button } from "@/components/ui/button";
import { useUser } from "@/hooks/useUser";
import { currencyFormatter } from "@/lib/utils";
import {
  clearCart,
  deliveryChargeSelector,
  grandTotalSelector,
  orderedMealSelector,
  orderSelector,
  shippingAddressSelector,
  subtotalSelector,
} from "@/redux/features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { createOrder } from "@/services/Cart";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { toast } from "sonner";

const PaymentDetails = () => {
  const { user } = useUser();
  const router = useRouter();
  const disPatch = useAppDispatch();
  const subTotal = useAppSelector(subtotalSelector);
  const deliveryCost = useAppSelector(deliveryChargeSelector);
  const shippingAddress = useAppSelector(shippingAddressSelector);
  const grandTotal = useAppSelector(grandTotalSelector);
  const cartMeals = useAppSelector(orderedMealSelector);
  const order = useAppSelector(orderSelector);

  const handleOrder = useCallback(async () => {
    const loading = toast.loading("Order is being placed...");
    try {
      if (!user) {
        router.push("/login");
        throw new Error("Please login first");
      }

      if (cartMeals.length < 1) {
        throw new Error("Cart is empty, what are you trying to order ??");
      }
      if (!shippingAddress) {
        throw new Error("Shipping address is missing");
      }
      const res = await createOrder(order);
      console.log(res);
      if (res?.success) {
        toast.success(res.message, { id: loading });
        disPatch(clearCart());
        router.push(res.data?.paymentUrl);
      }
    } catch (error: any) {
      toast.error(error.message, { id: loading });
    }
  }, [user, shippingAddress, cartMeals.length, order, router, disPatch]);
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
      <Button
        onClick={handleOrder}
        disabled={cartMeals.length === 0 || !shippingAddress}
        className="w-full text-sm bg-orange-500 hover:bg-orange-600 font-semibold py-5"
      >
        Order Now
      </Button>
    </div>
  );
};

export default PaymentDetails;
