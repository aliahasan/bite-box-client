import founder from "@/assets/founder.jpg";
import { Card } from "@/components/ui/card";
import Image from "next/image";
export default function OurStory() {
  return (
    <section className="my-20 bg-white">
      <div>
        <h2 className="text-3xl font-bold  mb-8 text-gray-900">Our Story</h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <p className="text-gray-600">
              MealPlan was founded in 2020 by nutritionist Sarah Johnson and
              chef Michael Chen, who shared a vision of making healthy eating
              accessible to everyone, regardless of their cooking skills or busy
              schedules.
            </p>
            <p className="text-gray-600">
              What started as a small meal prep service for local clients has
              grown into a comprehensive platform serving thousands of customers
              nationwide, with a network of talented chefs and nutrition
              experts.
            </p>
            <Card className="p-6 bg-green-50 border-green-100">
              <p className="text-green-800 font-medium">
                &quot;We&apos;re not just delivering meals - we&apos;re
                delivering peace of mind, health, and time back to our
                customers&lsquo; lives.&quot;
              </p>
            </Card>
          </div>
          <div className="relative h-80">
            <Image
              src={founder}
              alt="MealPlan founders"
              fill
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
