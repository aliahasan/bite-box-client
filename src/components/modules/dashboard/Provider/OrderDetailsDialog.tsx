"use client";

import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { TFoodCartOrder } from "@/types/orderType";
import Image from "next/image";

interface OrderDetailsDialogProps {
  isOpen: boolean;
  onClose: () => void;
  order: TFoodCartOrder;
}

const OrderDetailsDialog: React.FC<OrderDetailsDialogProps> = ({
  isOpen,
  onClose,
  order,
}) => {
  if (!order) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl p-6">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-gray-800">
            Order Details
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Meals Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-3">
              Ordered Meals
            </h3>
            <div className="grid grid-cols-1  gap-4">
              {order.meals.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between gap-4 bg-gray-100 p-4 rounded-lg shadow-sm"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={100}
                    height={100}
                    className="rounded-lg object-cover"
                  />
                  <div>
                    <h4 className="text-md font-semibold text-gray-800">
                      {item.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      Qty: {item.quantity}
                    </p>
                    <p className="text-sm text-gray-600">
                      Portion: {item.portionSize}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dietary Preferences */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Dietary Preferences
            </h3>
            {order.dietaryPreferences.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {order?.dietaryPreferences.map((item, index) => (
                  <Badge key={index} className="text-gray-700 bg-gray-200">
                    {item}
                  </Badge>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">No dietary preferences.</p>
            )}
          </div>

          {/* Dietary Restrictions */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Dietary Restrictions
            </h3>
            {order.dietaryRestrictions.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {order?.dietaryRestrictions.map((item, index) => (
                  <Badge key={index} className="bg-red-500 text-white">
                    {item}
                  </Badge>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">No dietary restrictions.</p>
            )}
          </div>

          {/* Order Schedule */}
          <div>
            <h3 className="text-lg mb-2">Delivery Address</h3>
            <p className="text-gray-500">{order?.shippingAddress}</p>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Scheduled Date
            </h3>
            <p className="text-gray-500">
              {order?.schedule
                ? new Date(order.schedule as string).toDateString()
                : "Not scheduled"}
            </p>
          </div>

          {/* Order Date */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Ordered On
            </h3>
            <p className="text-gray-500">
              {new Date(order.createdAt).toDateString()}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OrderDetailsDialog;
