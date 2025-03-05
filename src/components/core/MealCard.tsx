import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IMeal } from "@/types/meal.type";
import { ShoppingCart, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const MealCard = ({ meal }: { meal: IMeal }) => {
  return (
    <Card className="w-full max-w-sm bg-white shadow-sm rounded-2xl overflow-hidden p-2 ">
      <div className="relative w-full h-60">
        <Image
          src={meal.image}
          alt={meal.name}
          fill
          className="object-cover rounded-lg  transition duration-300"
          priority
        />
      </div>
      <CardHeader className="px-2">
        <CardTitle className="text-lg  font-semibold text-gray-800 truncate">
          {meal.name}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex  flex-col gap-3 p-2">
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-600 font-bold">{meal.category}</p>
          <div className="flex items-center gap-1 text-yellow-500">
            <Star size={16} fill="currentColor" />
            <span className="text-sm font-medium">
              {meal.averageRating.toFixed(1)}
            </span>
          </div>
        </div>
        <p className="text-sm text-gray-600 line-clamp-2">{meal.description}</p>
        <div className="flex justify-between gap-2">
          <span className="text-lg font-semibold text-gray-800">
            ${meal.price.toFixed(2)}
          </span>
          {meal.dietaryPreferences.slice(0, 1).map((tag, index) => (
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
          <div>
            <span className="text-sm text-gray-600">
              <Link href={`/meal/${meal._id}`}>
                {" "}
                <Button className="bg-orange-500 hover:bg-orange-600 cursor-pointer">
                  View Details
                </Button>
              </Link>
            </span>
          </div>
          <Button
            size="sm"
            className="bg-orange-500 hover:bg-orange-600 text-white cursor-pointer"
          >
            <ShoppingCart />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default MealCard;
