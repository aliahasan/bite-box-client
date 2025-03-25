import { Skeleton } from "@/components/ui/skeleton";

const SearchBarSkeleton = () => {
  return (
    <div className="bg-white p-4 rounded-xl">
      {/* Search Input Skeleton */}
      <Skeleton className="h-10 w-full rounded-lg bg-gray-300" />
    </div>
  );
};

export default SearchBarSkeleton;
