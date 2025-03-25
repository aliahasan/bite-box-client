"use client";

import BBContainer from "@/components/core/BBContainer/BBContainer";
import { Skeleton } from "@/components/ui/skeleton";
import FilterSidebarSkeleton from "./FilterSidebarSkeleton";
import SearchBarSkeleton from "./SearchBarSkeleton";

export const MealSkeleton = () => {
  const array = new Array(10).fill(null);

  return (
    <BBContainer>
      <div>
        {/* Search Bar Skeleton */}
        <div className="my-6">
          <SearchBarSkeleton />
        </div>

        <div className="my-10 flex flex-col md:flex-row gap-4">
          {/* Filter Sidebar Skeleton */}
          <div className="w-full md:w-[300px]">
            <FilterSidebarSkeleton />
          </div>

          {/* Meals Grid Skeleton */}
          <div className="w-full md:w-3/4 flex-grow">
            {/* Check if meals are available; otherwise, show skeleton */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {array.map((_, idx) => (
                <div
                  key={idx}
                  className="w-full h-auto bg-white border rounded-2xl overflow-hidden p-2"
                >
                  {/* Image placeholder */}
                  <div className="relative w-full h-48 rounded-lg overflow-hidden">
                    <Skeleton className="w-full h-full rounded-lg bg-gray-300" />
                  </div>

                  {/* Title placeholder */}
                  <div className="px-1 pt-4">
                    <Skeleton className="h-6 w-3/4 rounded bg-gray-300" />
                  </div>

                  {/* Content placeholders */}
                  <div className="flex flex-col gap-3 p-1">
                    {/* Category and rating row */}
                    <div className="flex items-center justify-between">
                      <Skeleton className="h-4 w-20 rounded bg-gray-300" />
                      <div className="flex items-center gap-1">
                        <Skeleton className="h-4 w-4 rounded-full bg-gray-300" />
                        <Skeleton className="h-4 w-8 rounded bg-gray-300" />
                      </div>
                    </div>

                    {/* Price and tag row */}
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Skeleton className="h-5 w-16 rounded bg-gray-300" />
                        <Skeleton className="h-3 w-12 rounded bg-gray-300" />
                      </div>
                      <Skeleton className="h-6 w-16 rounded-full bg-gray-300" />
                    </div>

                    {/* Buttons row */}
                    <div className="flex justify-between items-center mt-4">
                      <Skeleton className="h-10 w-24 rounded-lg bg-gray-300" />
                      <Skeleton className="h-10 w-10 rounded-lg bg-gray-300" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </BBContainer>
  );
};
