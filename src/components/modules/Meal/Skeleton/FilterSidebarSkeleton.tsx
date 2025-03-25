import { Skeleton } from "@/components/ui/skeleton";

const FilterSidebarSkeleton = () => {
  return (
    <div className="bg-white border rounded-2xl p-4">
      {/* Filter Title */}
      <Skeleton className="h-6 w-3/4 mb-4 rounded bg-gray-300" />

      {/* Filter Options */}
      <div className="space-y-4">
        <Skeleton className="h-8 w-full rounded bg-gray-300" />
        <Skeleton className="h-8 w-full rounded bg-gray-300" />
        <Skeleton className="h-8 w-full rounded bg-gray-300" />
      </div>
    </div>
  );
};

export default FilterSidebarSkeleton;
