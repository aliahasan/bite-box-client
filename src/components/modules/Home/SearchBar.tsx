"use client";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Search } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  searchQuery: z.string().min(1, "Restaurant name is required"),
});

export type SearchForm = z.infer<typeof formSchema>;

const SearchBar = () => {
  // Initialize useForm correctly
  const form = useForm<SearchForm>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      searchQuery: "",
    },
  });

  // Submit handler function
  const onSubmit = (data: SearchForm) => {
    console.log("Search Query:", data.searchQuery);
    // Handle search logic here
  };

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex items-center gap-3 justify-between flex-row border-2 rounded-full p-3"
        >
          <Search
            strokeWidth={2.5}
            size={30}
            className="ml-1 text-orange-500 hidden md:block"
          />
          <FormField
            control={form.control}
            name="searchQuery"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <Input
                    {...field}
                    className="border-none shadow-none text-xl focus-visible:ring-0"
                    placeholder="Search"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          {/* Reset button to clear the input field */}
          <Button
            type="button"
            variant="outline"
            className="rounded-full"
            onClick={() => form.reset()} // Reset form
          >
            Reset
          </Button>

          {/* Submit button to trigger the search */}
          <Button type="submit" className="rounded-full bg-orange-500">
            Search
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default SearchBar;
