"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { getAllMealCategories } from "@/services/category";
import { getAllCuisines } from "@/services/Meal";
import { ICategory } from "@/types";
import { ChevronDown, Star } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const FilterSidebar = () => {
  const [price, setPrice] = useState([0]);
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [cuisines, setCuisines] = useState([]);
  const [expandedSections, setExpandedSections] = useState({
    price: false,
    category: false,
    cuisine: false,
    rating: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const [{ data: categoriesData }, { data: cuisinesData }] =
          await Promise.all([getAllMealCategories(), getAllCuisines()]);
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

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
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
      <div className="my-6">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection("price")}
        >
          <h2 className="text-md font-semibold">Price</h2>
          <ChevronDown
            className={`transition-transform ${
              expandedSections.price ? "rotate-180" : ""
            }`}
          />
        </div>
        {expandedSections.price && (
          <>
            <div className="flex items-center justify-between text-sm  my-4">
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
            <p className="text-sm mt-2">Selected Price: ৳ {price[0]}</p>
          </>
        )}
        <Separator className="my-4" />
      </div>

      {/* Product Categories */}
      <div className="mb-6">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection("category")}
        >
          <h2 className="text-md font-semibold">Category</h2>
          <ChevronDown
            className={`transition-transform ${
              expandedSections.category ? "rotate-180" : ""
            }`}
          />
        </div>
        {expandedSections.category && !isLoading && (
          <RadioGroup className="space-y-2 my-4">
            {categories?.map((category: ICategory) => (
              <div key={category._id} className="flex items-center space-x-2 ">
                <RadioGroupItem
                  onClick={() => handleSearchQuery("category", category._id)}
                  value={category._id}
                  id={category._id}
                />
                <Label
                  htmlFor={category._id}
                  className="text-gray-700 font-medium"
                >
                  {category.name}
                </Label>
              </div>
            ))}
          </RadioGroup>
        )}
        <Separator className="my-4" />
      </div>

      {/* Cuisines */}
      <div className="mb-6">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection("cuisine")}
        >
          <h2 className="text-md font-semibold">Cuisines</h2>
          <ChevronDown
            className={`transition-transform ${
              expandedSections.cuisine ? "rotate-180 ease-linear" : ""
            }`}
          />
        </div>
        {expandedSections.cuisine && !isLoading && (
          <RadioGroup className="space-y-2  my-4">
            {cuisines?.map((cuisine, index) => (
              <div key={index} className="flex items-center space-x-2">
                <RadioGroupItem
                  onClick={() => handleSearchQuery("cuisine", cuisine)}
                  value={cuisine}
                  id={cuisine}
                />
                <Label htmlFor={cuisine} className="text-gray-700 font-medium">
                  {cuisine}
                </Label>
              </div>
            ))}
          </RadioGroup>
        )}
        <Separator className="my-4" />
      </div>

      {/* Rating */}
      <div className="mb-6">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection("rating")}
        >
          <h2 className="text-md font-semibold">Rating</h2>
          <ChevronDown
            className={`transition-transform ${
              expandedSections.rating ? "rotate-180" : ""
            }`}
          />
        </div>
        {expandedSections.rating && (
          <RadioGroup className="space-y-3  my-4">
            {[5, 4, 3, 2, 1].map((rating) => (
              <div key={rating} className="flex items-center space-x-2">
                <RadioGroupItem
                  onClick={() => handleSearchQuery("averageRating", rating)}
                  value={`${rating}`}
                  id={`rating-${rating}`}
                />
                <Label
                  htmlFor={`rating-${rating}`}
                  className="flex items-center"
                >
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
        )}
      </div>
    </div>
  );
};

export default FilterSidebar;
