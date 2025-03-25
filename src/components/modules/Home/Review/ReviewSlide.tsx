"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { IReview } from "@/types";
import Image from "next/image";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
interface ReviewSlideProps {
  reviews: IReview[];
}
const ReviewSlide = ({ reviews }: ReviewSlideProps) => {
  return (
    <section>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Autoplay]}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 4, spaceBetween: 30 },
        }}
        className="mySwiper"
      >
        {reviews.map((review: IReview, index: number) => (
          <SwiperSlide key={index} className="flex justify-center">
            <Card className="w-full flex flex-col justify-between bg-white text-gray-700 shadow-sm">
              <CardHeader className="flex items-center space-x-4">
                <div>
                  <Image
                    src={review?.user?.photo || "https://github.com/shadcn.png"}
                    width={60}
                    height={60}
                    alt={review.user?.name}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <span className="font-medium">{review?.user?.name}</span>
                </div>
                <div>
                  <p className="text-sm text-gray-400">⭐⭐⭐⭐⭐</p>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-my-text_clr text-center">{review.review}</p>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ReviewSlide;
