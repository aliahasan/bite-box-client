import { Button } from "@/components/ui/button";
import BBForm from "@/form/BBForm";
import BBInput from "@/form/BBInput";
import { useUser } from "@/hooks/useUser";
import { registerUser } from "@/services/authService";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { registerSchema } from "./RegisterValidation";

const ProviderForm = () => {
  const { setIsLoading } = useUser();
  const [loading, isLoading] = useState(false);
  const router = useRouter();

  const handleSubmit: SubmitHandler<FieldValues> = async (data) => {
    isLoading(true);
    setIsLoading(true);

    const userData = {
      ...data,
      role: "provider",
    };

    try {
      const res = await registerUser(userData);
      if (res?.success) {
        toast.success(res?.message);
        router.push("/login");
      } else {
        toast.error(res?.message);
      }
    } catch (error: any) {
      toast.error("Something went wrong. Please try again.");
      console.error(error);
    } finally {
      isLoading(false);
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md w-full space-y-8">
      <BBForm onSubmit={handleSubmit} resolver={zodResolver(registerSchema)}>
        <input type="hidden" name="remember" defaultValue="true" />

        <div className="rounded-md space-y-4">
          <BBInput
            name="name"
            type="text"
            placeholder="Name"
            label="Name"
            required
          />
          <BBInput
            name="email"
            type="email"
            placeholder="Email"
            label="Email"
            required
          />
          <BBInput
            name="password"
            type="password"
            placeholder="Password"
            label="Password"
            required
          />
        </div>

        <div>
          <Button
            type="submit"
            disabled={loading}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white cursor-pointer"
          >
            {loading ? "Processing..." : "Register"}
          </Button>
        </div>

        <div>
          <p>
            Already have an account?{" "}
            <Link className="text-blue-700" href="/login">
              Login
            </Link>
          </p>
        </div>
      </BBForm>
    </div>
  );
};

export default ProviderForm;
