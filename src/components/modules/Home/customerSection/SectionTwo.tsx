"use client";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { ClipboardList, Truck, Utensils } from "lucide-react";

const SectionTwo = () => {
  const steps = [
    {
      icon: <ClipboardList className="h-10 w-10 text-primary" />,
      title: "Set Your Preferences",
      description:
        "Tell us your dietary needs, allergies, and favorite cuisines. We’ll create a personalized meal plan just for you.",
    },
    {
      icon: <Utensils className="h-10 w-10 text-primary" />,
      title: "Choose Your Meals",
      description:
        "Browse our curated menu and select your meals for the week. Our chefs prepare everything fresh and delicious.",
    },
    {
      icon: <Truck className="h-10 w-10 text-primary" />,
      title: "Schedule Delivery",
      description:
        "Pick a delivery time that works for you. We’ll deliver your meals right to your doorstep.",
    },
  ];

  return (
    <section className="md:py-32 py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          How It Works
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <Card className="h-full text-center p-6 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">{step.icon}</div>
                  <CardTitle className="text-2xl font-bold mb-4">
                    {step.title}
                  </CardTitle>
                  <CardDescription className="text-lg">
                    {step.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
