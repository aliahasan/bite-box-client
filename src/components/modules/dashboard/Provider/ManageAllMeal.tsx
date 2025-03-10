"use client";

import Pagination from "@/components/core/BBPagination/Pagination";
import BBTable from "@/components/core/BBTable/BBTable";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { IMeal, IMeta } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { Edit, Eye, Plus, Trash } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface IMangeMealProps {
  meals: IMeal[];
  meta: IMeta;
}
const ManageAllMeal = ({ meals, meta }: IMangeMealProps) => {
  const router = useRouter();

  const handleView = (product: IMeal) => {
    console.log("Viewing product:", product);
  };

  const handleDelete = (mealId: string) => {
    console.log("Deleting product with ID:", mealId);
  };

  const columns: ColumnDef<IMeal>[] = [
    {
      accessorKey: "image",
      header: "Image",
      cell: ({ row }) => (
        <div className="flex items-center space-x-3">
          <Image
            src={row.original.image}
            alt={row.original.name}
            width={40}
            height={40}
            className="w-8 h-8 rounded-full"
          />
          <span className="truncate">{row.original.name}</span>
        </div>
      ),
    },
    {
      accessorKey: "available",
      header: "Availability",
      cell: ({ row }) => (
        <Badge className="px-2 py-2 bg-green-500 rounded-lg text-white">
          <span>{row.original.available ? "Available" : "Stock out"}</span>
        </Badge>
      ),
    },
    {
      accessorKey: "category",
      header: "Category",
      cell: ({ row }) => <span>{row.original.category}</span>,
    },
    {
      accessorKey: "cuisine",
      header: "Cuisine",
      cell: ({ row }) => <span>{row.original.cuisine}</span>,
    },
    {
      accessorKey: "price",
      header: "Price",
      cell: ({ row }) => <span>{row.original.price}</span>,
    },
    {
      accessorKey: "action",
      header: "Action",
      cell: ({ row }) => (
        <div className="flex items-center space-x-3">
          <button
            className="text-gray-500 hover:text-blue-500"
            title="View"
            onClick={() => handleView(row.original)}
          >
            <Eye className="w-5 h-5" />
          </button>

          <button
            className="text-gray-500 hover:text-green-500"
            title="Edit"
            onClick={() =>
              router.push(
                `/user/shop/products/update-product/${row.original._id}`
              )
            }
          >
            <Edit className="w-5 h-5" />
          </button>

          <button
            className="text-gray-500 hover:text-red-500"
            title="Delete"
            onClick={() => handleDelete(row.original._id)}
          >
            <Trash className="w-5 h-5" />
          </button>
        </div>
      ),
    },
  ];
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Manage Products</h1>
        <div className="flex items-center gap-2">
          <Button onClick={() => router.push("/provider/add-meal")} size="sm">
            Add Product <Plus />
          </Button>
          {/* <DiscountModal
        selectedIds={selectedIds}
        setSelectedIds={setSelectedIds}
      /> */}
        </div>
      </div>
      <BBTable columns={columns} data={meals || []} />
      <Pagination totalPage={meta.totalPage} />
    </div>
  );
};

export default ManageAllMeal;
