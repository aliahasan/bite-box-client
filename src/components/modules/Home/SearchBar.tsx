"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SearchBar = () => {
  const router = useRouter();
  const pathName = "/find-meal";
  const [search, setSearch] = useState("");

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedSearch = search.trim();
    if (trimmedSearch) {
      router.push(`${pathName}?search=${encodeURIComponent(trimmedSearch)}`);
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit}>
        <div className="flex w-full items-center gap-2">
          <Input
            name="search"
            type="text"
            value={search}
            onChange={handleChange}
            placeholder="Search meal"
            className="flex-1 w-full px-4 py-4 rounded-full border border-gray-300"
          />
          <Button
            type="submit"
            className="px-6 py-2 rounded-full bg-orange-500 text-white cursor-pointer"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
