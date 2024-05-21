import Link from "next/link";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";

export default function UserDrop() {
  const { isAuthenticated, user } = useKindeBrowserClient();
  const isAdmin = user?.email === process.env.ADMIN_EMAIL;
  return (
    <>
      {!isAdmin ? (
        <div className="flex items-center gap-x-2">
          <LoginLink>
            <Button variant="outline" size="sm">
              Sign in
            </Button>
          </LoginLink>
          <RegisterLink>
            <Button variant="outline" size="sm">
              Sign up
            </Button>
          </RegisterLink>
        </div>
      ) : (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size="icon">{user?.given_name || "User"}</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/dashboard">Dashboard</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/">Store</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>Team</DropdownMenuItem>
            <DropdownMenuItem asChild>
              <LogoutLink>Log out</LogoutLink>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
      {isAuthenticated ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size="icon">{user?.given_name || "User"}</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>{user?.given_name || "User"}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/favorite">Favorite</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/">Orders</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>Team</DropdownMenuItem>
            <DropdownMenuItem asChild>
              <LogoutLink>Log out</LogoutLink>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : null}
    </>
  );
}
