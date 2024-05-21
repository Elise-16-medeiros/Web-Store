"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { cn } from "@/lib/utils";
import UserDrop from "./userDrop";

export default function Navbar() {
  return (
    <div className="mx-4 flex items-center justify-between p-4">
      <div>
        <Link href="/" className="text-2xl font-bold">
          Logo
        </Link>
      </div>
      <div>
        <MainNavbar />
      </div>
      <div className="flex items-center justify-end">
        <UserDrop />
      </div>
    </div>
  );
}

export function MainNavbar({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();

  const routes = [
    {
      href: "/",
      label: "Dashboard",
      active: pathname === "/",
    },
    {
      href: "/",
      label: "Products",
      active: pathname === "/",
    },
    {
      href: "/",
      label: "Orders",
      active: pathname === "/",
    },
  ];
  return (
    <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)}>
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-gray-600",
            route.active ? "text-black" : "text-muted-foreground",
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
}

//
/** 
 * <LogoutLink>
          <Button>Log out</Button>
        </LogoutLink> 
        
 * <LogoutLink>Log out</LogoutLink>
 * import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
 * 
 *  <LoginLink>
          <Button>Sign in</Button>
        </LoginLink>
        <RegisterLink>
          <Button>Sign up</Button>
        </RegisterLink>
 * 
 * 
 * */
