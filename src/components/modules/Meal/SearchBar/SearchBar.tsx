"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const SearchBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleSearch = (query: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(query, value.toString());
    router.push(`${pathname}?${params.toString()}`, {
      scroll: false,
    });
  };

  return (
    <div className="flex flex-col items-start justify-start gap-y-2 relative">
      <Label className="text-left">Search Food</Label>
      <Input
        onChange={(e) => handleSearch("search", e.target.value)}
        type="text"
        placeholder="Search food"
        className="w-full"
      />
      <div>
        <button
          onClick={() => {
            router.push(`${pathname}`, { scroll: false });
          }}
          className="absolute right-6 bottom-4"
        >
          <X className="w-5 h-5 bg-orange-500 rounded-full text-white" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
