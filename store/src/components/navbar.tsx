'use client'
import { useParams, usePathname } from "next/navigation";
import Link from "next/link";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { cn } from "@/lib/utils"

import { Button } from "./ui/button";

export default function Navbar() {

  
  return (
    <nav className="flex items-center justify-between mx-4">
      <Link href="/">Logo</Link>
      <MainNavbar />
      <div className="flex items-center justify-end gap-x-2">
        <LoginLink>
          <Button>Sign in</Button>
        </LoginLink>
        <RegisterLink>
          <Button>Sign up</Button>
        </RegisterLink>
      </div>
    </nav>
  );
}


export function MainNavbar({
   className,
   ...props
 }: React.HTMLAttributes<HTMLElement>) {
       const pathname = usePathname();
       const params = useParams();

       const routes = [
         {
           href: "/",
           label: "Dashboard",
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
                     route.active
                         ? "text-black"
                         : "text-muted-foreground",
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
        
        
        
        
        