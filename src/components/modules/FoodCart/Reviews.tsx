"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TabsContent } from "@/components/ui/tabs";
import { useUser } from "@/hooks/useUser";
import { createReview } from "@/services/Review";
import { IFoodCart, IReview } from "@/types";
import { formatDistanceToNow } from "date-fns";
import { Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";

interface ReviewsProps {
  foodCart: IFoodCart;
  reviews: IReview[];
}

const Reviews = ({ foodCart, reviews }: ReviewsProps) => {
  const { user } = useUser();
  const [showInput, setShowInput] = useState(false);
  const [review, setReview] = useState("");

  const handleToggleInput = () => {
    setShowInput(!showInput);
  };

  const handleReviewSubmit = async () => {
    if (!review.trim()) {
      toast.error("Review cannot be empty!");
      return;
    }

    const toastId = toast.loading("Posting review...");
    try {
      const reviewData = {
        review,
      };
      const res = await createReview(foodCart._id, reviewData);
      if (res?.success) {
        toast.success(res?.message, { id: toastId });
        setReview("");
        setShowInput(false);
      } else {
        toast.error(res?.message, { id: toastId });
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to submit review", { id: toastId });
    }
  };

  return (
    <div>
      <TabsContent value="reviews">
        <Card>
          <CardHeader>
            <CardTitle>Customer Reviews</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Show reviews if available */}
            {reviews.length > 0 ? (
              <div className="space-y-6">
                {reviews.map((rev) => (
                  <div
                    key={rev._id}
                    className="flex items-start space-x-4 p-4 border rounded-lg shadow-sm"
                  >
                    {/* User Image */}
                    <Image
                      src={
                        rev?.user?.photo ||
                        "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png"
                      }
                      alt={rev.user?.name}
                      width={50}
                      height={50}
                      className="rounded-full border"
                    />
                    {/* Review Content */}
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <h4 className="font-semibold">{rev.user.name}</h4>
                        <span className="text-sm text-gray-500">
                          {formatDistanceToNow(new Date(rev.createdAt), {
                            addSuffix: true,
                          })}
                        </span>
                      </div>
                      <p className="text-gray-700 mt-1">{rev?.review}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                  <Star className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium">No Reviews Yet</h3>
                <p className="text-gray-500 mt-2">
                  Be the first to review this food cart!
                </p>
              </div>
            )}

            {/* Review Input Section */}
            <div className=" mt-6">
              <Button className="mt-4" onClick={handleToggleInput}>
                {showInput ? "Cancel" : "Write a Review"}
              </Button>
              {showInput && (
                <div className="mt-4 flex flex-col  gap-y-4">
                  <textarea
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    placeholder="Write your review..."
                    className="border p-2 rounded w-full md:w-2/3 h-24 resize-none"
                  />
                  <Button
                    disabled={!user}
                    onClick={handleReviewSubmit}
                    className="w-32"
                  >
                    Submit Review
                  </Button>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </div>
  );
};

export default Reviews;
