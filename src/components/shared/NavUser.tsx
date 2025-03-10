import { protectedRoutes } from "@/constant";
import { useUser } from "@/hooks/useUser";
import { clearCart } from "@/redux/features/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import { logout } from "@/services/authService";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const NavUser = () => {
  const { user, setIsLoading } = useUser();
  const dispatch = useAppDispatch();
  const pathName = usePathname();
  const router = useRouter();
  const handleLogout = () => {
    logout();
    setIsLoading(true);
    if (protectedRoutes.some((route) => pathName.match(route))) {
      router.push("/");
    }
    dispatch(clearCart());
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className="cursor-pointer">
          <AvatarImage src={user?.image || "https://github.com/shadcn.png"} />
          <AvatarFallback>User</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="cursor-pointer">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />

        {/* Wrap DropdownMenuItem with Link */}
        <Link href={`${user?.role}/dashboard`}>
          <DropdownMenuItem>Dashboard</DropdownMenuItem>
        </Link>

        {user && user?.role === "provider" && (
          <Link href="/provider/create-food-cart">
            <DropdownMenuItem>Create food cart</DropdownMenuItem>
          </Link>
        )}

        <DropdownMenuSeparator />

        <DropdownMenuItem
          className="bg-red-500 cursor-pointer"
          onClick={handleLogout}
        >
          <LogOut /> <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavUser;
