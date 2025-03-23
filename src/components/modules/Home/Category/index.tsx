import BBButton from "@/components/core/BBButton/BBButton";
import BBContainer from "@/components/core/BBContainer/BBContainer";
import CategoryCard from "@/components/core/CategoryCard/CategoryCard";
import { getAllMealCategories } from "@/services/category";
import { ICategory } from "@/types";
import Link from "next/link";

const Category = async () => {
  const { data: categories } = await getAllMealCategories();
  return (
    <div className="my-24 ">
      <BBContainer>
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold">Category</h2>
          <Link href="/products">
            <BBButton label="View All"></BBButton>
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-6">
          {categories?.slice(0, 6)?.map((category: ICategory, idx: number) => (
            <CategoryCard key={idx} category={category} />
          ))}
        </div>
      </BBContainer>
    </div>
  );
};

export default Category;
