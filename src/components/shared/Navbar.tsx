"use client";

import { useUser } from "@/hooks/useUser";
import { orderedMealSelector } from "@/redux/features/cartSlice";
import { useAppSelector } from "@/redux/hooks";
import { motion } from "framer-motion";
import { Menu, ShoppingCart, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import logo from "../../assets/logo.png";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import NavUser from "./NavUser";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useUser();
  const pathname = usePathname();
  const cartData = useAppSelector(orderedMealSelector);

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
              className={`hover:text-orange-500 transition relative ${
                pathname === link.href ? "text-orange-500 font-semibold" : ""
              }`}
            >
              {link.label}
              {pathname === link.href && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-orange-500"></span>
              )}
            </Link>
          ))}
        </div>

        {/* Right Side: Cart + NavUser + Mobile Menu */}
        <div className="flex items-center space-x-4">
          <div className="relative cursor-pointer">
            <Link href="/cart">
              <ShoppingCart />
              {cartData.length > 0 && (
                <Badge className="absolute -top-4 left-2 bg-white text-black rounded-full text-xs p-1 min-w-[24px] min-h-[20px] flex items-center justify-center shadow-lg">
                  {cartData.length}
                </Badge>
              )}
            </Link>
          </div>
          {user ? (
            <NavUser />
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
              className={`text-sm hover:text-orange-400 transition ${
                pathname === link.href ? "text-orange-400 underline" : ""
              }`}
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
