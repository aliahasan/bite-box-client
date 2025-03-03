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
  const [loading, isLoading] = useState(false);
  const router = useRouter();

  const handleSubmit: SubmitHandler<FieldValues> = async (data) => {
    const userData = {
      ...data,
    };
    try {
      isLoading(true);
      const res = await registerUser(userData);
      setIsLoading(true);
      if (res?.success) {
        toast.success(res?.message);
        router.push("/login");
      } else {
        toast.error(res?.message);
        isLoading(false);
      }
    } catch (error: any) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="max-w-md w-full space-y-8">
        <BBForm onSubmit={handleSubmit} resolver={zodResolver(registerSchema)}>
          <div className="rounded-md  space-y-4">
            <div>
              <BBInput
                name="name"
                type="text"
                placeholder="name"
                label="Name"
                required
              />
            </div>
            <div>
              <BBInput
                name="email"
                type="email"
                placeholder="email"
                label="Email"
                required
              />
            </div>
            <div>
              <BBInput
                name="password"
                type="password"
                placeholder="Password"
                label="Password"
                required
              />
            </div>
          </div>

          <div>
            <Button
              disabled={loading}
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white"
            >
              {loading ? "Processing...." : "Register"}
            </Button>
          </div>
          <div>
            <p>
              Already have an account ? Please{" "}
              <Link className="text-blue-700" href="/login">
                Login
              </Link>
            </p>
          </div>
        </BBForm>
      </div>
    </div>
  );
};

export default CustomerForm;
