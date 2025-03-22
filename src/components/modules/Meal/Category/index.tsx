"use client";
import BBTable from "@/components/core/BBTable/BBTable";
import { ICategory } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import CreateCategoryModal from "./CreateCategoryModal";

interface ICategoryProps {
  categories: ICategory[];
}
const MangeCategories = ({ categories }: ICategoryProps) => {
  const columns: ColumnDef<ICategory>[] = [
    {
      accessorKey: "name",
      header: () => <div>Category Name</div>,
    },
    {
      accessorKey: "image",
      header: "Image",
      cell: ({ row }) => (
        <div className="">
          <Image
            src={row.original?.image}
            alt={row.original.name}
            width={80}
            height={80}
            className="rounded"
          />
        </div>
      ),
    },

    {
      accessorKey: "createdAt",
      header: () => <div>Created At</div>,
      cell: ({ row }) => (
        <div>{new Date(row.original.createdAt).toLocaleDateString()}</div>
      ),
    },
  ];
  return (
    <div>
      <div className="flex items-center justify-between">
        <CreateCategoryModal />
      </div>
      <div>
        <BBTable data={categories} columns={columns} />
      </div>
    </div>
  );
};

export default MangeCategories;
