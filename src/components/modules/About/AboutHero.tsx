import healthy from "@/assets/healthy.jpg";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function AboutHero() {
  return (
    <main>
      <section className="my-20">
        <div className="flex flex-col md:flex-row items-center gap-5 pt-5">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              Nourishing Lives, One Meal at a Time
            </h1>
            <p className="text-lg text-gray-600">
              At MealPlan, we believe healthy eating should be simple,
              delicious, and tailored to your lifestyle. Our mission is to take
              the stress out of meal planning so you can focus on what matters
              most.
            </p>
            <div className="space-y-4">
              <p className="text-gray-600">
                We combine nutrition science with culinary excellence to create
                meals that are:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2 text-green-600">✓</span>
                  <span>
                    Perfectly balanced for your dietary needs and goals
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-600">✓</span>
                  <span>Prepared with fresh, high-quality ingredients</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-600">✓</span>
                  <span>Delivered at your convenience, ready to enjoy</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-600">✓</span>
                  <span>
                    Customizable to your taste preferences and schedule
                  </span>
                </li>
              </ul>
              {/* <p className="text-gray-600">
              Whether you&apos;re managing dietary restrictions, pursuing
              fitness goals, or simply want to eat better without the hassle,
              we&apos;ve got you covered.
            </p> */}
            </div>
            <div className="flex gap-4">
              <Link href="/find-meal">
                <Button size="lg">Start Your Plan</Button>
              </Link>
            </div>
          </div>
          <div className="flex-1">
            <Image
              src={healthy}
              alt="Healthy meals on a table"
              width={1000}
              height={400}
              className="rounded-lg"
              priority
            />
          </div>
        </div>
      </section>
    </main>
  );
}
