"use client";

import { useUser } from "@/hooks/useUser";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../../assets/logo.png";
import { Button } from "../ui/button";
import NavUser from "./NavUser";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useUser();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Find Meals", href: "/find-meal" },
    { label: "Meal Providers", href: "/meal-providers" },
  ];

  return (
    <nav className="sticky top-0 left-0 w-full bg-gray-900 text-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold flex items-center space-x-1">
          <Image
            src={logo}
            alt="BiteBox"
            className="h-12 w-auto rounded-full"
          />
          <Link href="/">
            Bite<span className="text-orange-500">Box</span>
          </Link>
        </div>

        {/* Desktop Menu (Centered) */}
        <div className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-orange-500 transition"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Side: Create Food Cart + NavUser + Mobile Menu */}
        <div className="flex items-center space-x-4">
          {user ? (
            <>
              <Link href="/create-food-cart">
                <Button className="rounded-full text-[12px] bg-red-500 hover:bg-red-500">
                  Create Food Cart
                </Button>
              </Link>
              <NavUser />
            </>
          ) : (
            <Link href="/login">
              <Button
                variant="outline"
                className="rounded-full text-black cursor-pointer"
              >
                Login
              </Button>
            </Link>
          )}
          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed top-16 left-0 w-full h-auto bg-gray-800 backdrop-blur-2xl text-white flex flex-col items-center py-10 space-y-8 md:hidden"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm hover:text-orange-400 transition"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
