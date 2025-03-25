"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const Newsletter = () => {
  const { register, handleSubmit, reset } = useForm<{ email: string }>();

  const onSubmit = (data: { email: string }) => {
    console.log("Subscribed with:", data.email);
    toast.success("Successfully subscribed!");
    reset();
  };

  return (
    <section className="w-full bg-gray-100 py-12 px-6 md:px-12 lg:px-24 flex flex-col items-center text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
        Subscribe to Our Newsletter
      </h2>
      <p className="text-gray-600 mt-2 max-w-lg">
        Stay updated with the latest deals, offers, and new arrivals. Subscribe
        now!
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-6 flex flex-col md:flex-row items-center gap-4 w-full max-w-lg"
      >
        <div className="relative w-full">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <Input
            type="email"
            placeholder="Enter your email"
            {...register("email", { required: "Email is required" })}
            className="pl-10 py-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
          />
        </div>
        <Button
          type="submit"
          className="w-full md:w-auto bg-primary text-white px-6 py-3 rounded-lg"
        >
          Subscribe
        </Button>
      </form>
    </section>
  );
};

export default Newsletter;
