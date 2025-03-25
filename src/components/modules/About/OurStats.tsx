export default function OurStats() {
  const stats = [
    { value: "10,000+", label: "Happy Customers" },
    { value: "500+", label: "Meal Options" },
    { value: "98%", label: "Delivery On Time" },
    { value: "50+", label: "Cities Served" },
  ];

  return (
    <section className="my-20">
      <div>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <p className="text-4xl font-bold">{stat.value}</p>
              <p className="text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
