"use client";

import logo from "@/assets/logo.png";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useUser } from "@/hooks/useUser";
import {
  Bot,
  Home,
  Map,
  PieChart,
  Settings,
  SquareTerminal,
  User2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { NavMain } from "./NavMain";
import { SidebarUser } from "./SidebarUser";
const data = {
  navCustomer: [
    {
      title: "Dashboard",
      url: "/customer/dashboard",
      icon: SquareTerminal,
      isActive: true,
    },
    {
      title: "Shop",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Manage Products",
          url: "/customer/products",
        },
        {
          title: "Manage Categories",
          url: "/user/shop/category",
        },
        {
          title: "Manage Brands",
          url: "/user/shop/brand",
        },
        {
          title: "Manage Coupon",
          url: "/user/shop/manage-coupon",
        },
      ],
    },

    {
      title: "Settings",
      url: "#",
      icon: Settings,
      items: [
        {
          title: "Profile",
          url: "/profile",
        },
      ],
    },
  ],
  navProvider: [
    {
      title: "Dashboard",
      url: "/provider/dashboard",
      icon: SquareTerminal,
    },
    {
      title: "Food cart Profile",
      url: "#",
      icon: User2,
    },
    {
      title: "Food Cart",
      url: "#",
      icon: Home,
      items: [
        {
          title: "All Meal",
          url: "/provider/all-meal",
        },
        {
          title: "Add Meal",
          url: "/provider/add-meal",
        },
      ],
    },
  ],
  navAdmin: [
    {
      title: "Dashboard",
      url: "/admin/dashboard",
      icon: SquareTerminal,
      isActive: true,
    },
    {
      title: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      title: "Travel",
      url: "#",
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { user } = useUser();

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="flex items-center justify-center">
                  <Image src={logo} alt="logo" className="w-12 rounded-full" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <h2 className="font-bold text-xl">BiteBox</h2>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        {user?.role === "customer" ? (
          <NavMain items={data.navCustomer} />
        ) : user?.role === "provider" ? (
          <NavMain items={data.navProvider} />
        ) : user?.role === "admin" ? (
          <NavMain items={data.navAdmin} />
        ) : null}
      </SidebarContent>
      <SidebarFooter>
        <SidebarUser />
      </SidebarFooter>
    </Sidebar>
  );
}
