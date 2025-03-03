"use client";
import { Button } from "@/components/ui/button";
import BBForm from "@/form/BBForm";
import BBInput from "@/form/BBInput";
import { useUser } from "@/hooks/useUser";
import { loginUser } from "@/services/authService";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { loginSchema } from "./LoginValidation";

const LoginForm = () => {
  const { setIsLoading } = useUser();
  const [loading, isLoading] = useState(false);
  const router = useRouter();

  const handleSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      isLoading(true);
      const res = await loginUser(data);
      console.log(res);
      setIsLoading(true);
      if (res?.success) {
        toast.success(res?.message);
        router.push("/");
      } else {
        toast.error(res?.message);
        isLoading(false);
      }
    } catch (error: any) {
      console.log(error);
    }
  };
  return (
    <div className="flex justify-center">
      <div className="max-w-md w-full space-y-8 bg-white  p-6 rounded-lg shadow-sm">
        <h2 className="text-center text-3xl font-extrabold text-black dark:text-white">
          Sign in to your account
        </h2>

        {/* Form Start */}
        <BBForm onSubmit={handleSubmit} resolver={zodResolver(loginSchema)}>
          <div className="space-y-4">
            <BBInput
              name="email"
              type="email"
              placeholder="Email"
              label="Email"
            />
            <BBInput
              name="password"
              type="password"
              placeholder="Password"
              label="Password"
            />
          </div>

          <div className="flex items-center justify-between text-sm mt-2">
            <Link
              href="#"
              aria-label="Forgot Password?"
              className="text-indigo-600 hover:text-indigo-500"
            >
              Forgot your password?
            </Link>
          </div>

          <Button
            type="submit"
            className="w-full py-2 text-sm font-medium rounded-md bg-indigo-600 hover:bg-indigo-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 mt-4"
          >
            {loading ? "Signing in..." : "Sign in"}
          </Button>
        </BBForm>
        <p className=" text-sm text-gray-600 dark:text-gray-400">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-indigo-600 hover:underline">
            Register
          </Link>
        </p>
        {/* Form End */}
      </div>
    </div>
  );
};

export default LoginForm;
