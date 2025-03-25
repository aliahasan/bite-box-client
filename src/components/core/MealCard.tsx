"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { addMeal, foodCartSelector } from "@/redux/features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { IMeal } from "@/types/meal.type";
import { ShoppingCart, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";

const MealCard = ({ meal }: { meal: IMeal }) => {
  const dispatch = useAppDispatch();
  const foodCart = useAppSelector(foodCartSelector);

  const handleAddToCart = (meal: IMeal) => {
    if (foodCart && foodCart !== meal.foodCart._id) {
      toast.error("You can only add meals from the same food cart!");
      return;
    }
    dispatch(addMeal(meal));
    toast.success("Meal added to cart!");
  };

  return (
    <div className="w-full h-auto bg-white border rounded-2xl overflow-hidden p-2">
      <div className="relative w-full h-48 rounded-lg overflow-hidden">
        <Image
          src={meal?.image}
          alt={meal?.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover rounded-lg transition-transform duration-300 hover:scale-105"
          priority
        />
      </div>
      <CardHeader className="px-1 pt-4">
        <CardTitle className="text-lg font-semibold text-gray-800 truncate">
          {meal?.name}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3 p-1">
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-600 font-bold">
            {meal?.category?.name}
          </p>
          <div className="flex items-center gap-1 text-yellow-500">
            <Star size={16} fill="currentColor" />
            <span className="text-sm font-medium">
              {meal?.averageRating?.toFixed(1)}
            </span>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-600">
            {meal?.offerPrice ? (
              <>
                <span className="font-semibold mr-2 text-orange-400">
                  ৳ {meal?.offerPrice.toFixed(2)}
                </span>
                <del className="font-semibold text-xs">
                  ৳ {meal?.price.toFixed(2)}
                </del>
              </>
            ) : (
              <span className="font-semibold"> ৳ {meal?.price.toFixed(2)}</span>
            )}
          </p>
          {meal?.dietaryPreferences.slice(0, 1).map((tag, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="text-xs px-2 py-1 bg-gray-100 text-gray-700"
            >
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex justify-between items-center mt-4">
          <Link href={`/find-meal/${meal._id}`} passHref>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white transition-colors duration-300 cursor-pointer">
              View Details
            </Button>
          </Link>
          <Button
            onClick={() => handleAddToCart(meal)}
            disabled={!meal?.available}
            size="sm"
            className="bg-orange-500 hover:bg-orange-600 text-white transition-colors duration-300 cursor-pointer"
          >
            <ShoppingCart size={20} />
          </Button>
        </div>
      </CardContent>
    </div>
  );
};

export default MealCard;
