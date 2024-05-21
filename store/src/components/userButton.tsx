'use client'

import Image from "next/image";
import Link from "next/link";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

import { Heart, Lock } from "lucide-react";

export default function UserButton() {
  const { isAuthenticated, user } = useKindeBrowserClient();

const isAdmin = user?.email === process.env.ADMIN_EMAIL;
 
  return (
    <>
      {isAuthenticated ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size="icon" className="flex-none rounded-full">
              <Image
                src={user?.picture || ""}
                alt="User profile picture"
                width={50}
                height={50}
                className="aspect-square rounded-full bg-background object-cover"
              />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>{user?.given_name || "User"}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem asChild>
                <Link href="/dashboard">
                  <Heart className="mr-2 h-4 w-4" />
                  <span>Dashboard</span>
                </Link>
              </DropdownMenuItem>

              {isAdmin ? (
                <DropdownMenuItem asChild>
                  <Link href="/dashboard">
                    <Lock className="mr-2 h-4 w-4" />
                    Admin
                  </Link>
                </DropdownMenuItem>
              ) : null}
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <button className="flex w-full items-center">
                <LogoutLink>Log out</LogoutLink>
              </button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <div className="flex items-center justify-end gap-x-2">
          <LoginLink>Sign in</LoginLink>
          <RegisterLink>Sign up</RegisterLink>
        </div>
      )}
    </>
  );
}
