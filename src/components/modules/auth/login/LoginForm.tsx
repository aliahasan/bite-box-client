"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useUser } from "@/hooks/useUser";
import { loginUser } from "@/services/authService";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { loginSchema } from "./LoginValidation";

type Credentials = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const { setIsLoading } = useUser();
  const router = useRouter();

  const credentials = {
    user: { email: "shomoy@gmail.com", password: "shomoy123" },
    provider: { email: "nabin@gmail.com", password: "nabin123" },
  };

  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const fillCredentials = (role: keyof typeof credentials) => {
    form.setValue("email", credentials[role].email);
    form.setValue("password", credentials[role].password);
  };

  const onSubmit = async (data: Credentials) => {
    try {
      const toastId = toast.loading("Logging in...");
      setIsLoading(true);

      const res = await loginUser(data);

      if (res?.success) {
        toast.success(res.message, { id: toastId });
        router.push("/");
      } else {
        toast.error(res?.message || "Login failed", { id: toastId });
      }
    } catch (error) {
      toast.error("An unexpected error occurred");
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Card className="shadow-none border">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center">
            Sign in to your account
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-gray-700">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
                        placeholder="your.email@example.com"
                        autoComplete="username"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="password"
                        placeholder="••••••••"
                        autoComplete="current-password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex gap-2 py-3">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => fillCredentials("user")}
                  className="flex-1"
                >
                  User Credentials
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => fillCredentials("provider")}
                  className="flex-1"
                >
                  Provider Credentials
                </Button>
              </div>

              <Button type="submit" className="w-full ">
                Sign in
              </Button>
            </form>
          </Form>

          <p className="px-8 text-center text-sm text-muted-foreground">
            Don&apos;t have an account?{" "}
            <Link
              href="/register"
              className="underline underline-offset-4 text-blue-600"
            >
              Register
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginForm;
