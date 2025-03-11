import BBContainer from "@/components/core/BBContainer/BBContainer";
import MarkDownText from "@/components/shared/MarkDownText";
import Image from "next/image";
import BuyNow from "./BuyNow";

interface Meal {
  image?: string;
  name?: string;
  price?: number;
  dietaryPreferences?: string[];
  cuisine?: string;
  ingredients?: string[];
  portionSize?: string[];
  averageRating?: number;
  ratingCount?: number;
  available?: boolean;
  description?: string;
}

const MealsDetails = ({ meal }: { meal: Meal }) => {
  return (
    <div>
      {/* Meal Image */}
      <div className="relative h-[70vh] w-full mb-8">
        <Image
          src={meal?.image || "/default-meal-image.jpg"}
          alt={meal?.name || "Meal Image"}
          layout="fill"
          objectFit="cover"
          className=""
        />
      </div>

      <BBContainer>
        <div className="my-10">
          <div className="mb-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
              {meal?.name || "Meal Name"}
            </h1>
            <p className="text-2xl font-semibold text-gray-700">
              ৳ {meal?.price?.toFixed(2) || "0.00"}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Dietary Preferences */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Dietary Preferences
              </h3>
              <div className="flex flex-wrap gap-2">
                {meal?.dietaryPreferences?.map(
                  (preference: string, index: number) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-green-50 text-green-700 text-sm font-medium rounded-full"
                    >
                      {preference}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Cuisine */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Cuisine
              </h3>
              <p className="text-gray-600">
                {meal?.cuisine || "No cuisine specified"}
              </p>
            </div>

            {/* Ingredients */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Ingredients
              </h3>
              <ul className="list-disc list-inside text-gray-600">
                {meal?.ingredients?.map((ingredient: string, index: number) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>

            {/* Portion Size */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Portion Size
              </h3>
              <div className="flex flex-wrap gap-2">
                {meal?.portionSize?.map((size: string, index: number) => (
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
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
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
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
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
          <div className="mb-8">
            <MarkDownText
              text={meal?.description || "No description available."}
            />
          </div>
          <div>
            <BuyNow meal={meal} />
          </div>
        </div>
      </BBContainer>
    </div>
  );
};

export default MealsDetails;
