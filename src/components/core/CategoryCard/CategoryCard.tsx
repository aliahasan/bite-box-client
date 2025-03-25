"use client";
import { ICategory } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";

const CategoryCard = ({ category }: { category: ICategory }) => {
  const router = useRouter();
  const pathName = "/find-meal";

  const handleClick = () => {
    if (category?._id) {
      router.push(`${pathName}?category=${category._id}`);
    }
  };

  return (
    <div
      className="bg-gray-100 p-4 rounded-lg hover:cursor-pointer transition hover:shadow-md"
      role="button"
      tabIndex={0}
      onClick={handleClick}
    >
      <div className="mx-auto">
        <Image
          src={category?.image}
          width={80}
          height={80}
          alt={category?.name || "Category Image"}
          className="w-full h-full object-contain rounded"
        />
      </div>
      <h3 className="text-md pt-2 text-center font-semibold truncate">
        {category?.name || "Unknown Category"}
      </h3>
    </div>
  );
};

export default CategoryCard;
