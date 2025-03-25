"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CustomerForm from "./CustomerForm";
import ProviderForm from "./ProviderForm";

const RegisterForm = () => {
  return (
    <section>
      <Card
        className="
      shadow-none border"
      >
        <CardHeader>
          <CardTitle className="text-center text-2xl">Create Account</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="customer" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-4">
              <TabsTrigger value="customer">Customer</TabsTrigger>
              <TabsTrigger value="provider">Provider</TabsTrigger>
            </TabsList>
            <TabsContent value="customer">
              <div className="">
                <CardDescription className="text-center">
                  Register as Customer
                </CardDescription>
                <CustomerForm />
              </div>
            </TabsContent>
            <TabsContent value="provider">
              <div className="">
                <CardDescription className="text-center">
                  Register as Provider
                </CardDescription>
                <ProviderForm />
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </section>
  );
};

export default RegisterForm;
