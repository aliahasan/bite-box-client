import NoData from "@/components/core/NoData";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getFoodCartProfile } from "@/services/Provider";
import { Calendar, Clock, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

const FoodCartProfilePage = async () => {
  const { data: foodCart } = await getFoodCartProfile();

  return (
    <div>
      {foodCart ? (
        <div className="">
          {/* Main Content */}
          <div className="px-4 py-6 md:py-6">
            {/* Hero Section */}
            <div className="relative rounded-xl overflow-hidden mb-8">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10 z-10"></div>
              <Image
                src={foodCart.image}
                alt={foodCart.foodCartName}
                width={600}
                height={600}
                priority
                className="w-full h-64 md:h-96 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 z-20">
                <div className="flex flex-col gap-2">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {foodCart.cuisines.map((cuisine: string, index: number) => (
                      <Badge
                        key={index}
                        className="bg-primary/90 hover:bg-primary"
                      >
                        {cuisine}
                      </Badge>
                    ))}
                  </div>
                  <h1 className="text-2xl md:text-4xl font-bold text-white mb-2">
                    {foodCart.foodCartName}
                  </h1>

                  <div className="flex items-center gap-2 mt-2">
                    <Badge
                      variant={foodCart.isActive ? "default" : "destructive"}
                      className={
                        foodCart.isActive
                          ? "bg-green-500/90 hover:bg-green-500"
                          : "bg-red-500/90 hover:bg-red-500"
                      }
                    >
                      {foodCart.isActive ? "Open Now" : "Closed"}
                    </Badge>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Left Column - Information */}
              <div className="md:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>About</CardTitle>
                    <CardDescription>
                      Food cart details and information
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <Clock className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Hours</p>
                          <p className="font-medium">
                            {foodCart.availability.hours}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <Calendar className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Days</p>
                          <p className="font-medium">
                            {foodCart.availability.days}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <Phone className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Contact</p>
                          <p className="font-medium">
                            {foodCart.contactNumber}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <MapPin className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Location</p>
                          <p className="font-medium">View on Map</p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <h3 className="text-lg font-medium mb-2">
                        Cuisine Types
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {foodCart.cuisines.map(
                          (cuisine: string, index: number) => (
                            <Badge
                              key={index}
                              variant="outline"
                              className="px-3 py-1"
                            >
                              {cuisine}
                            </Badge>
                          )
                        )}
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <h3 className="text-lg font-medium mb-2">Description</h3>
                      <p className="text-gray-600">{foodCart.description}</p>
                    </div>
                  </CardContent>
                </Card>

                {/* This would be where you add a menu section or food items */}
                <Card>
                  <CardHeader>
                    <CardTitle>Popular Items</CardTitle>
                    <CardDescription>
                      Most ordered dishes from this food cart
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-center h-40 bg-gray-100 rounded-lg">
                      <p className="text-gray-500">
                        Menu items will appear here
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right Column - Owner Info & Actions */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Owner</CardTitle>
                    <CardDescription>Cart managed by</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col items-center gap-4 p-4">
                      <Avatar className="h-20 w-20">
                        <AvatarImage
                          src={foodCart.owner.photo || ""}
                          alt={foodCart.owner.name}
                        />
                        <AvatarFallback className="text-xl">
                          {foodCart.owner.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="text-center">
                        <h3 className="text-lg font-medium">
                          {foodCart.owner.name}
                        </h3>
                        <p className="text-gray-500">{foodCart.owner.email}</p>
                      </div>
                      <div className="grid grid-cols-2 gap-2 w-full mt-2">
                        <Button variant="default" className="w-full">
                          <Phone className="mr-2 h-4 w-4" /> Call
                        </Button>
                        <Button variant="outline" className="w-full">
                          <Mail className="mr-2 h-4 w-4" /> Email
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Active Since</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      {new Date(foodCart.createdAt).toLocaleDateString(
                        "en-US",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }
                      )}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <NoData message="No Profile Data found Please crete food cart to show data" />
        </div>
      )}
    </div>
  );
};

export default FoodCartProfilePage;
