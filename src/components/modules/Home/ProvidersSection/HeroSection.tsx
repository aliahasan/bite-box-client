"use client";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { BarChart, ClipboardList, MessageCircle, Users } from "lucide-react";
export const HeroSection = () => {
  const features = [
    {
      icon: <ClipboardList className="h-10 w-10 text-primary" />,
      title: "Menu Management",
      description:
        "Easily upload and update your menu items. Add descriptions, prices, and dietary tags to attract more customers.",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Customer Engagement",
      description:
        "Respond to customer requests and feedback directly through the platform. Build lasting relationships with your audience.",
    },
    {
      icon: <BarChart className="h-10 w-10 text-primary" />,
      title: "Order Tracking",
      description:
        "Track orders in real-time and manage deliveries efficiently. Get insights into your most popular dishes.",
    },
    {
      icon: <MessageCircle className="h-10 w-10 text-primary" />,
      title: "Marketing Support",
      description:
        "Promote your meals to a wider audience with our built-in marketing tools. Boost your visibility and sales.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Why Partner with Us?
          </motion.h2>
          <p className="mt-4 text-lg py-4 text-gray-600">
            Join our network of meal providers and grow your business
            effortlessly.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:pt-4 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <Card className="h-full text-center px-6 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <CardTitle className="text-2xl font-bold mb-4">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-lg">
                    {feature.description}
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
