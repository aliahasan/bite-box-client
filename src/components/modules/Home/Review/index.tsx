import BBContainer from "@/components/core/BBContainer/BBContainer";
import { getAllReviews } from "@/services/Review";
import ReviewSlide from "./ReviewSlide";

const Reviews = async () => {
  const { data: reviews } = await getAllReviews();
  return (
    <section className="bg-gray-50">
      <BBContainer>
        <div className="my-20">
          <div className="py-10">
            <div className="text-center">
              <h1 className="text-3xl font-bold">Testimonials</h1>
              <p className="text-lg py-2 text-gray-700">
                What our clients says
              </p>
            </div>
            <div className="py-10">
              <ReviewSlide reviews={reviews} />
            </div>
          </div>
        </div>
      </BBContainer>
    </section>
  );
};

export default Reviews;
