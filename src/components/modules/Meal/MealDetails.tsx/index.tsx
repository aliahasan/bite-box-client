import BBContainer from "@/components/core/BBContainer/BBContainer";
import MarkDownText from "@/components/shared/MarkDownText";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IMeal } from "@/types";
import { Star } from "lucide-react";
import Image from "next/image";
import BuyNow from "./BuyNow";

interface MealDetailsProps {
  meal: IMeal;
}

const MealsDetails = ({ meal }: MealDetailsProps) => {
  return (
    <div className="my-10">
      <BBContainer>
        <div className="flex flex-col lg:flex-row gap-x-10">
          {/* Meal Image */}
          <div className="flex-1">
            <Image
              src={meal?.image as string}
              alt={meal?.name || "Meal Image"}
              objectFit="cover"
              height={500}
              width={500}
              className="rounded w-full h-full"
            />
          </div>

          <div className="w-full lg:w-1/2">
            {/* Meal Name and Price */}
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {meal?.name || "Meal Name"}
              </h1>
              <p className="text-sm text-gray-600">
                {meal?.offerPrice ? (
                  <>
                    <span className="text-lg font-semibold mr-2 text-orange-400">
                      ৳ {meal?.offerPrice.toFixed(2)}
                    </span>
                    <del className="font-semibold text-lg">
                      ৳ {meal?.price.toFixed(2)}
                    </del>
                  </>
                ) : (
                  <span className="font-semibold">
                    {" "}
                    ৳ {meal?.price.toFixed(2)}
                  </span>
                )}
              </p>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Dietary Preferences */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Dietary Preferences
                </h3>
                <div className="flex flex-wrap gap-2">
                  {meal?.dietaryPreferences?.map((preference, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-green-50 text-green-700 text-sm font-medium rounded-full"
                    >
                      {preference}
                    </span>
                  ))}
                </div>
              </div>

              {/* Cuisine */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Cuisine
                </h3>
                <p className="text-gray-600">
                  {meal?.cuisine || "No cuisine specified"}
                </p>
              </div>

              {/* Ingredients  */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Ingredients
                </h3>
                <ul className="list-disc list-inside text-gray-600">
                  {meal?.ingredients?.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </div>

              {/* Portion Size */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Portion Size
                </h3>
                <div className="flex flex-wrap gap-2">
                  {meal?.portionSize?.map((size, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-purple-50 text-purple-700 text-sm font-medium rounded-full"
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>

              {/* Ratings */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Ratings
                </h3>
                <div className="flex items-center">
                  <span className="text-yellow-500 text-2xl">★</span>
                  <span className="ml-2 text-gray-700">
                    {meal?.averageRating?.toFixed(1) || "0.0"} (
                    {meal?.ratingCount || 0} reviews)
                  </span>
                </div>
              </div>

              {/* Availability */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Availability
                </h3>
                <p
                  className={`text-md font-medium ${
                    meal?.available ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {meal?.available ? "Available" : "Not Available"}
                </p>
              </div>
            </div>
            <div className="mt-8 w-full">
              <BuyNow meal={meal} />
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="my-10">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid grid-cols-2 mb-4">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>

            {/* Description Tab Content */}
            <TabsContent value="description">
              <Card>
                <CardHeader>
                  <CardTitle>{meal?.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="prose max-w-none">
                    <MarkDownText text={meal?.description} />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Reviews Tab Content */}
            <TabsContent value="reviews">
              <div className="text-center py-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                  <Star className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium">No Reviews Yet</h3>
                <p className="text-gray-500 mt-2">
                  Be the first to review this food cart!
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </BBContainer>
      <section></section>
    </div>
  );
};

export default MealsDetails;
