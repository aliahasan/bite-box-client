"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { getAllCategories, getAllCuisines } from "@/services/Meal";
import { Star } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const FilterSidebar = () => {
  const [price, setPrice] = useState([0]);

  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [cuisines, setCuisines] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const [{ data: categoriesData }, { data: cuisinesData }] =
          await Promise.all([getAllCategories(), getAllCuisines()]);
        setCategories(categoriesData);
        setCuisines(cuisinesData);
      } catch (error: any) {
        console.error(error);
        toast.error("Failed to fetch filters");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleSearchQuery = (query: string, value: string | number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(query, value.toString());
    router.push(`${pathname}?${params.toString()}`, {
      scroll: false,
    });
  };

  return (
    <div className="p-6 bg-white border rounded-lg w-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Filter</h2>
        {searchParams.toString().length > 0 && (
          <Button
            onClick={() => {
              router.push(`${pathname}`, { scroll: false });
            }}
            size="sm"
            className="bg-orange-500 ml-5 hover:bg-orange-500"
          >
            Clear Filters
          </Button>
        )}
      </div>
      <Separator />

      {/* Filter by Price */}
      <div className="my-6 ">
        <h2 className="text-lg font-semibold mb-4">Price</h2>
        <div className="flex items-center justify-between text-sm mb-2">
          <span>৳ 0</span>
          <span>৳ 1000</span>
        </div>
        <Slider
          max={1000}
          step={1}
          onValueChange={(value) => {
            setPrice(value);
            handleSearchQuery("price", value[0]);
          }}
          className="w-full"
        />
        <p className="text-sm mt-2">Selected Price: ${price[0]}</p>
      </div>
      {/* Product Categories */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-4">Meal Category</h2>
        {!isLoading && (
          <RadioGroup className="space-y-2">
            {categories?.map((category, index) => (
              <div key={index} className="flex items-center space-x-2 ">
                <RadioGroupItem
                  onClick={() => handleSearchQuery("category", category)}
                  value={category}
                  id={category}
                />
                <Label htmlFor={category} className="font-medium text-black">
                  {category}
                </Label>
              </div>
            ))}
          </RadioGroup>
        )}
      </div>
      {/* Brands */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-4">Cuisines</h2>
        {!isLoading && (
          <RadioGroup className="space-y-2">
            {cuisines?.map((cuisine, index) => (
              <div key={index} className="flex items-center space-x-2">
                <RadioGroupItem
                  onClick={() => handleSearchQuery("cuisine", cuisine)}
                  value={cuisine}
                  id={cuisine}
                />
                <Label htmlFor={cuisine} className="text-gray-500 font-light">
                  {cuisine}
                </Label>
              </div>
            ))}
          </RadioGroup>
        )}
      </div>
      {/* Rating */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-4">Rating</h2>
        <RadioGroup className="space-y-3">
          {[5, 4, 3, 2, 1].map((rating) => (
            <div key={rating} className="flex items-center space-x-2">
              <RadioGroupItem
                onClick={() => handleSearchQuery("averageRating", rating)}
                value={`${rating}`}
                id={`rating-${rating}`}
              />
              <Label htmlFor={`rating-${rating}`} className="flex items-center">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star
                    size={18}
                    key={i}
                    fill={i < rating ? "orange" : "lightgray"}
                    stroke={i < rating ? "orange" : "lightgray"}
                  />
                ))}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>
    </div>
  );
};

export default FilterSidebar;
