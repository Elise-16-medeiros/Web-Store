"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { cn } from "@/lib/utils";


export default function AdminNav() {
  return (
    <nav className="mx-4 flex items-center justify-between">
      <Link href="/">Logo</Link>
      <MainNavbarAdmin />
    </nav>
  );
}



export function MainNavbarAdmin({
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
            "text-sm font-medium transition-colors hover:text-primary",
            route.active ? "text-black" : "text-muted-foreground",
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
}


