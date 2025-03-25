import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutCTA() {
  return (
    <section className="mb-10">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Transform Your Eating Habits?
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Join thousands of satisfied customers enjoying delicious, healthy
          meals tailored just for them.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/find-meal">
            <Button size="lg">Get Started</Button>
          </Link>
          <Link href="#">
            <Button size="lg">Contact Us</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
