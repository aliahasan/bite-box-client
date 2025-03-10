"use client";

import Pagination from "@/components/core/BBPagination/Pagination";
import BBTable from "@/components/core/BBTable/BBTable";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { deleteMeal } from "@/services/Provider";
import { IMeal, IMeta } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { Edit, Eye, Plus } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import DeleteConfirmDialog from "./DeleteConfirmDialog";
import UpdateStock from "./UpdateStock";

interface IMangeMealProps {
  meals: IMeal[];
  meta: IMeta;
}

const ManageAllMeal = ({ meals, meta }: IMangeMealProps) => {
  const router = useRouter();

  const handleView = (product: IMeal) => {
    console.log("Viewing product:", product);
  };

  const handleDelete = async (mealId: string) => {
    const toastId = toast.loading("Deleting...");
    try {
      const res = await deleteMeal(mealId);
      if (res?.success) {
        toast.success(res?.message, { id: toastId });
      } else {
        toast.error(res?.message, { id: toastId });
      }
    } catch (error: any) {
      toast.error(error?.message);
      console.log(error);
    }
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
            width={100}
            height={100}
            className="object-cover rounded-lg"
          />
          <span className="truncate">{row.original.name}</span>
        </div>
      ),
    },
    {
      accessorKey: "available",
      header: "Availability",
      cell: ({ row }) => (
        <div className="flex items-center gap-x-2">
          <Badge className=" bg-green-500 rounded-lg text-white">
            <span>{row.original.available ? "Available" : "Stock out"}</span>
          </Badge>
          <UpdateStock mealId={row.original._id} />
        </div>
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
              router.push(`/provider/update-meal/${row.original._id}`)
            }
          >
            <Edit className="w-5 h-5" />
          </button>

          {/* Delete Confirmation Dialog */}
          <DeleteConfirmDialog
            mealId={row.original._id}
            onDelete={handleDelete}
          />
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Manage Meals</h1>
        <div className="flex items-center gap-2">
          <Button onClick={() => router.push("/provider/add-meal")} size="sm">
            Add Meal <Plus />
          </Button>
        </div>
      </div>
      <BBTable columns={columns} data={meals || []} />
      <Pagination totalPage={meta?.totalPage} />
    </div>
  );
};

export default ManageAllMeal;
