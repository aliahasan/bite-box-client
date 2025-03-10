import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { IFoodCart } from "@/types";
import { Clock, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const AllFoodCart = ({ foodCart }: { foodCart: IFoodCart }) => {
  return (
    <Link href={`/meal-providers/${foodCart._id}`}>
      <Card className="overflow-hidden hover:shadow-lg p-0 transition-shadow duration-300 h-full flex flex-col">
        {/* Image container with overlay for status badge */}
        <div className="relative h-48 sm:h-56">
          <div className="absolute inset-0">
            <Image
              src={foodCart.image}
              alt={foodCart.foodCartName}
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute top-3 right-3 z-10">
            <Badge
              className={
                foodCart.isActive
                  ? "bg-green-500 hover:bg-green-600"
                  : "bg-red-500 hover:bg-red-600"
              }
            >
              {foodCart.isActive ? "Open" : "Closed"}
            </Badge>
          </div>
          <div className="absolute bottom-0 w-full p-2 bg-gradient-to-t from-black/70 to-transparent">
            <div className="flex flex-wrap gap-1">
              {foodCart.cuisines.slice(0, 3).map((cuisine, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="bg-black/40 text-white border-gray-400"
                >
                  {cuisine}
                </Badge>
              ))}
              {foodCart.cuisines.length > 3 && (
                <Badge
                  variant="outline"
                  className="bg-black/40 text-white border-gray-400"
                >
                  +{foodCart.cuisines.length - 3} more
                </Badge>
              )}
            </div>
          </div>
        </div>

        {/* Content */}
        <CardContent className="flex-grow p-4">
          <h3 className="font-bold text-lg mb-2 line-clamp-1">
            {foodCart?.foodCartName}
          </h3>

          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-2">
              <MapPin className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
              <p className="text-gray-600 line-clamp-2">{foodCart?.address}</p>
            </div>

            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-gray-500 flex-shrink-0" />
              <p className="text-gray-600">{foodCart?.availability.hours}</p>
            </div>

            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-gray-500 flex-shrink-0" />
              <p className="text-gray-600">{foodCart?.contactNumber}</p>
            </div>
          </div>
        </CardContent>

        <CardFooter className="px-4 pb-4 pt-0 flex items-center justify-between">
          <p className="text-xs text-gray-500">
            Available: {foodCart?.availability?.days}
          </p>
          <div className="text-xs text-gray-500">
            Since {new Date(foodCart?.createdAt).toLocaleDateString()}
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default AllFoodCart;
