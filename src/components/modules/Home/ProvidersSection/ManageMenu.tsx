"use client";
import dashboardImg from "@/assets/cheef.jpg";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const ManageMenu = () => {
  return (
    <div className="relative container mx-auto px-4 bg-white py-16 flex flex-col md:flex-row items-center gap-12">
      {/* Image Section */}
      <div className="w-full md:w-1/2">
        <Image
          src={dashboardImg}
          alt="Manage Menu Dashboard"
          className="rounded-md "
          width={600}
          height={400}
        />
      </div>

      {/* Content Section */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Manage Your <span className="text-orange-500">Menu Effortlessly</span>
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Add, update, or remove meals with just a few clicks. Our intuitive
          dashboard helps you stay in control of your offerings.
        </p>

        <ul className="mt-6 space-y-3 text-gray-700">
          <li>✔️ Upload high-quality meal images</li>
          <li>✔️ Set meal prices and descriptions</li>
          <li>✔️ Update availability based on stock</li>
        </ul>

        <Button className="mt-6 px-6 py-3 text-sm rounded-full bg-orange-500 hover:bg-orange-600 transition">
          Start Managing Your Menu
        </Button>
      </div>
    </div>
  );
};

export default ManageMenu;
