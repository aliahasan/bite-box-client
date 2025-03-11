import BBContainer from "@/components/core/BBContainer/BBContainer";
import Reviews from "@/components/modules/FoodCart/Reviews";
import MarkDownText from "@/components/shared/MarkDownText";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getSingleFoodCart } from "@/services/FoodCart";
import { Clock, MapPin, Phone, Share2, ShoppingBag, User } from "lucide-react";
import Image from "next/image";

const FoodCartDetailsPage = async ({
  params,
}: {
  params: Promise<{ foodCartId: string }>;
}) => {
  const { foodCartId } = await params;
  const { data: result } = await getSingleFoodCart(foodCartId);
  const foodCart = result?.foodCart;
  const reviews = result?.reviews;
  console.log(reviews);
  return (
    <div className="min-h-screen ">
      {/* Hero Banner */}
      <div className="relative w-full h-64 md:h-80 lg:h-96">
        <Image
          src={foodCart?.image}
          alt={foodCart?.foodCartName}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-4 md:p-8">
          <BBContainer>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <div className="flex flex-wrap gap-2 mb-2">
                  {foodCart?.cuisines?.map((cuisine: string) => (
                    <Badge key={cuisine} className="bg-primary/90">
                      {cuisine}
                    </Badge>
                  ))}
                  <Badge
                    variant={foodCart.isActive ? "default" : "destructive"}
                    className={
                      foodCart.isActive ? "bg-green-500" : "bg-red-500"
                    }
                  >
                    {foodCart.isActive ? "Open Now" : "Closed"}
                  </Badge>
                </div>
                <h1 className="text-2xl md:text-4xl font-bold text-white">
                  {foodCart.foodCartName}
                </h1>
              </div>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
                <Button size="sm" className="bg-primary hover:bg-primary/90">
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  Order Now
                </Button>
              </div>
            </div>
          </BBContainer>
        </div>
      </div>

      {/* Main Content */}
      <BBContainer>
        <div className="py-6 md:py-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Key Information */}
            <div className="lg:col-span-2 space-y-6">
              {/* Quick Info Card */}
              <Card className="overflow-hidden">
                <div className="bg-gray-100 p-4 md:p-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-white p-2 rounded-full">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Open Hours</p>
                      <p className="font-medium">
                        {foodCart?.availability?.hours}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-white p-2 rounded-full">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="font-medium">{foodCart?.address}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-white p-2 rounded-full">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Contact</p>
                      <p className="font-medium">{foodCart?.contactNumber}</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Tabs Section */}
              <Tabs defaultValue="about" className="w-full">
                <TabsList className="grid grid-cols-2 mb-4">
                  <TabsTrigger value="about">About</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>

                <TabsContent value="about">
                  <Card>
                    <CardHeader>
                      <CardTitle>About {foodCart?.foodCartName}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="prose max-w-none">
                        <MarkDownText text={foodCart?.description} />
                      </div>
                      <div className="mt-6">
                        <h3 className="text-lg font-medium mb-3">Cuisines</h3>
                        <div className="flex flex-wrap gap-2">
                          {foodCart?.cuisines?.map((cuisine: string) => (
                            <Badge key={cuisine} className="px-3 py-1">
                              {cuisine}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="mt-6">
                        <h3 className="text-lg font-medium mb-3">
                          Opening Hours
                        </h3>
                        <div className="bg-gray-50 rounded-lg p-4 flex items-center gap-3">
                          <Clock className="h-5 w-5 text-gray-500" />
                          <div>
                            <p className="font-medium">
                              {foodCart?.availability?.days}
                            </p>
                            <p className="text-gray-600">
                              {foodCart?.availability?.hours}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                {/* reviews section */}
                <Reviews foodCart={foodCart} reviews={reviews} />
              </Tabs>
            </div>

            {/* Right Column - Additional Info */}
            <div className="space-y-6">
              {/* Action Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Order Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full">Place an Order</Button>
                  <Button variant="outline" className="w-full">
                    View Menu
                  </Button>

                  <div className="mt-4 pt-4 border-t">
                    <h3 className="text-sm font-medium mb-2">Operating Days</h3>
                    <p className="text-gray-600">
                      {foodCart.availability.days}
                    </p>

                    <h3 className="text-sm font-medium mb-2 mt-4">
                      Operating Hours
                    </h3>
                    <p className="text-gray-600">
                      {foodCart?.availability?.hours}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Location Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Location</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-gray-200 rounded-md overflow-hidden relative mb-3">
                    {/* Placeholder for map - in a real app, implement actual map */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <MapPin className="h-10 w-10 text-gray-400" />
                    </div>
                  </div>
                  <p className="text-gray-700 font-medium">
                    {foodCart.address}
                  </p>
                  <Button variant="outline" className="w-full mt-3">
                    Get Directions
                  </Button>
                </CardContent>
              </Card>

              {/* Contact Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-gray-500" />
                    <p className="text-gray-700">{foodCart.contactNumber}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <User className="h-5 w-5 text-gray-500" />
                    <p className="text-gray-700">
                      Owner ID: {foodCart.owner.substring(0, 8)}...
                    </p>
                  </div>
                  <div className="pt-3">
                    <p className="text-xs text-gray-500">
                      Food cart active since{" "}
                      {new Date(foodCart.createdAt).toLocaleDateString(
                        "en-US",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }
                      )}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </BBContainer>
    </div>
  );
};

export default FoodCartDetailsPage;
