"use client";

import BBTable from "@/components/core/BBTable/BBTable";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { updateOrder } from "@/services/Order";
import { TFoodCartOrder } from "@/types/orderType";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";
import OrderDetailsDialog from "./OrderDetailsDialog";

interface IFoodCartProps {
  orders: TFoodCartOrder[];
}

export const updateOptions = [
  "Pending",
  "Processing",
  "Completed",
  "Cancelled",
];

const FoodCartOrderTable = ({ orders }: IFoodCartProps) => {
  const [selectedOrder, setSelectedOrder] = useState<any>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const flattenedData = orders?.flatMap((order) =>
    order.meals.map((meal) => ({
      ...order,
      meal,
    }))
  );

  const handleUpdate = async (orderId: string, option: string) => {
    const loading = toast.loading("Updating...");

    try {
      const res = await updateOrder(orderId, option);
      if (res?.success) {
        toast.success(res?.message, { id: loading });
      } else {
        toast.error(res?.message, { id: loading });
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to update order status", { id: loading });
    }
  };

  const openDialog = (order: any) => {
    setSelectedOrder(order);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setSelectedOrder(null);
  };

  const columns: ColumnDef<(typeof flattenedData)[0]>[] = [
    {
      accessorKey: "meal",
      header: () => <div>Food</div>,
      cell: ({ row }) => {
        const meal = row.original.meal;
        return (
          <div>
            <Image
              src={meal?.image}
              alt={meal?.name || "No Name"}
              width={80}
              height={80}
              className="rounded object-cover"
            />
            <span className="truncate">{meal?.name || "No Name"}</span>
          </div>
        );
      },
    },
    {
      accessorKey: "Quantity",
      header: () => <div>Quantity</div>,
      cell: ({ row }) => (
        <div className="align-middle">{row.original.meal.quantity}</div>
      ),
    },
    {
      accessorKey: "meal.unitPrice",
      header: () => <div>Unit Price</div>,
      cell: ({ row }) => <div>${row.original.meal.unitPrice}</div>,
    },
    {
      accessorKey: "price",
      header: () => <div>Total Price</div>,
      cell: ({ row }) => <div>${row.original.finalAmount}</div>,
    },
    {
      accessorKey: "paymentStatus",
      header: () => <div>Payment Status</div>,
      cell: ({ row }) => (
        <Badge
          className={`${
            row?.original?.paymentStatus === "Paid"
              ? "bg-green-500"
              : "bg-red-500"
          }`}
        >
          <div>${row.original.paymentStatus}</div>
        </Badge>
      ),
    },
    {
      accessorKey: "orderStatus",
      header: () => <div>Order Status</div>,
      cell: ({ row }) => (
        <Badge
          className={`${
            row.original.orderStatus === "Cancelled"
              ? "bg-red-600"
              : row.original.orderStatus === "Pending" ||
                row.original.orderStatus === "Processing"
              ? "bg-blue-500"
              : "bg-green-600"
          }`}
        >
          {row.original.orderStatus === "Completed"
            ? "Delivered"
            : row.original.orderStatus}
        </Badge>
      ),
    },
    {
      accessorKey: "details",
      header: () => <div>See Preferences</div>,
      cell: ({ row }) => (
        <button
          onClick={() => openDialog(row.original)}
          className="py-1 px-3 bg-blue-500 rounded-xl text-white cursor-pointer"
        >
          View
        </button>
      ),
    },
    {
      accessorKey: "update",
      header: () => <div>Update Status</div>,
      cell: ({ row }) => {
        const orderId = row.original._id;
        return (
          <Select onValueChange={(option) => handleUpdate(orderId, option)}>
            <SelectTrigger className="mb-5 w-32">
              <SelectValue placeholder="update status" />
            </SelectTrigger>
            <SelectContent className="w-32">
              {updateOptions.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );
      },
    },
  ];

  return (
    <div>
      <BBTable columns={columns} data={flattenedData} />
      <OrderDetailsDialog
        isOpen={isDialogOpen}
        onClose={closeDialog}
        order={selectedOrder}
      />
    </div>
  );
};

export default FoodCartOrderTable;
