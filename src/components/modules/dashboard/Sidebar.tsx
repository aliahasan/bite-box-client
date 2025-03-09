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
  History,
  LayoutDashboard,
  Map,
  PieChart,
  SquareTerminal,
  UserPen,
  Utensils,
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
      icon: LayoutDashboard,
      isActive: true,
    },
    {
      title: "Order History",
      url: "my-orders",
      icon: History,
    },
    {
      title: "Profile",
      url: "/customer/profile",
      icon: UserPen,
    },
  ],
  navProvider: [
    {
      title: "Dashboard",
      url: "/provider/dashboard",
      icon: LayoutDashboard,
    },

    {
      title: "My Food Cart",
      url: "#",
      icon: Utensils,
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
    {
      title: "All orders",
      url: "cart-orders",
      icon: History,
    },
    {
      title: "Food Cart Profile",
      url: "/provider/profile",
      icon: UserPen,
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
