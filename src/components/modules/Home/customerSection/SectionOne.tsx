"use client";
import bgImage from "@/assets/mealbox-3.jpg";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const SectionOne = () => {
  return (
    <div
      className="relative h-[80vh] w-full flex items-center justify-center text-center 
    bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage.src})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-white max-w-2xl">
        <h1 className="text-3xl md:text-5xl font-bold">
          Your Personalized{" "}
          <span className="text-orange-500">Meal, Delivered!</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          Choose your meals, set your dietary preferences, and get fresh meals
          delivered right to your doorstep.
        </p>
        <Link href="/find-meal">
          <Button className="mt-6 px-6 py-3 text-sm rounded-full bg-orange-500 hover:bg-orange-600 cursor-pointer transition">
            Explore Meal Plans
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default SectionOne;
