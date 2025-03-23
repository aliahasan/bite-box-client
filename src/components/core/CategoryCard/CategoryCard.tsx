import { ICategory } from "@/types";
import Image from "next/image";

const CategoryCard = ({ category }: { category: ICategory }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <div>
        <div className="mx-auto">
          <Image
            src={category?.image}
            width={80}
            height={80}
            alt="category image"
            className="w-full h-full object-contain rounded"
          />
        </div>
      </div>
      <h3 className="text-md pt-2 text-center font-semibold truncate">
        {category?.name}
      </h3>
    </div>
  );
};

export default CategoryCard;
