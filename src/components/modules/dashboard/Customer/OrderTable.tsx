"use client";

import BBTable from "@/components/core/BBTable/BBTable";
import { Badge } from "@/components/ui/badge";
import { IMealOrder } from "@/types/orderType";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { useMemo } from "react";

type TOrderProps = {
  orders: IMealOrder[];
};

const OrderTable = ({ orders }: TOrderProps) => {
  const flattenedData = useMemo(() => {
    return orders.flatMap((order) =>
      order.meals.map((meal) => ({
        ...order,
        meal,
      }))
    );
  }, [orders]);

  const columns: ColumnDef<(typeof flattenedData)[0]>[] = [
    {
      accessorKey: "meal",
      header: () => <div>Food</div>,
      cell: ({ row }) => {
        const meal = row.original.meal;
        const imageUrl = meal?.image;
        return (
          <div>
            {imageUrl ? (
              <Image
                src={imageUrl}
                alt={meal?.name || "name"}
                width={80}
                height={80}
                className="rounded object-center object-cover"
              />
            ) : (
              <div>No Image</div>
            )}
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
      cell: ({ row }) => <div>{row.original.meal.unitPrice}</div>,
    },
    {
      accessorKey: "price",
      header: () => <div>Total Price</div>,
      cell: ({ row }) => <div>{row.original.finalAmount}</div>,
    },
    {
      accessorKey: "orderStatus",
      header: () => <div>Order Status</div>,
      cell: ({ row }) => (
        <div>
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
        </div>
      ),
    },
    {
      accessorKey: "paymentStatus",
      header: () => <div>Payment Status</div>,
      cell: ({ row }) => (
        <div>
          <Badge
            className={`${
              row.original.paymentStatus === "Paid"
                ? "bg-green-600"
                : "bg-red-600"
            }`}
          >
            {row.original.paymentStatus}
          </Badge>
        </div>
      ),
    },
    {
      accessorKey: "createdAt",
      header: () => <div>Date</div>,
      cell: ({ row }) => (
        <div>{new Date(row.original.createdAt).toDateString()}</div>
      ),
    },
  ];

  return (
    <div>
      <BBTable data={flattenedData} columns={columns} />
    </div>
  );
};

export default OrderTable;
