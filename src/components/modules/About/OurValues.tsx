import { Card } from "@/components/ui/card";

export default function OurValues() {
  const values = [
    {
      title: "Nutrition First",
      description:
        "Every meal is crafted by nutritionists to ensure balanced macros and micronutrients.",
      icon: "🥗",
    },
    {
      title: "Personalization",
      description:
        "Tailored to your dietary needs, preferences, and health goals.",
      icon: "🎯",
    },
    {
      title: "Sustainability",
      description:
        "Eco-friendly packaging and locally-sourced ingredients whenever possible.",
      icon: "🌱",
    },
    {
      title: "Convenience",
      description:
        "Flexible delivery schedules that fit your routine, not the other way around.",
      icon: "⏱️",
    },
  ];

  return (
    <section className="my-20">
      <div>
        <h2 className="text-3xl font-bold  mb-8 text-gray-900">
          Our Core Values
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card
              key={index}
              className="p-6  hover:shadow-md transition-shadow duration-300 h-full"
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
