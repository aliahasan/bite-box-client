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

const CustomerForm = () => {
  const { setIsLoading } = useUser();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit: SubmitHandler<FieldValues> = async (data) => {
    setLoading(true);
    setIsLoading(true);
    try {
      const res = await registerUser(data);

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
      setLoading(false);
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md w-full">
      <BBForm onSubmit={handleSubmit} resolver={zodResolver(registerSchema)}>
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
            disabled={loading}
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white cursor-pointer"
          >
            {loading ? "Processing..." : "Register"}
          </Button>
        </div>

        <div>
          <p className="px-8 text-center text-sm text-muted-foreground">
            Already have an account? Please{" "}
            <Link
              href="/login"
              className="underline underline-offset-4 text-blue-600"
            >
              Login
            </Link>
          </p>
        </div>
      </BBForm>
    </div>
  );
};

export default CustomerForm;
