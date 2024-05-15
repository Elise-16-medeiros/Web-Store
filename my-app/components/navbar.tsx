'use client'

import Link from "next/link";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "./ui/button";

export default async function Navbar() {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    const isAdmin = user?.email === process.env.ADMIN_EMAIL;
    
    return (
        <nav>
            <div className='h-full flex items-center space-x-4'>
                <Link href="/">
                    <h1 className="text-2xl font-bold">
                    Store
                    </h1>
                </Link>
            {user ? (
              <>
                <Link
                  href='/api/auth/logout'
                  className={buttonVariants({
                    size: 'sm',
                    variant: 'ghost',
                  })}>
                  Sign out
                </Link>
                {isAdmin ? (
                  <Link
                    href='/dashboard'
                    className={buttonVariants({
                      size: 'sm',
                      variant: 'ghost',
                    })}>
                    Dashboard ✨
                  </Link>
                ) : null}
              </>
            ) : (
              <>
                <Link
                  href='/api/auth/register'
                  className={buttonVariants({
                    size: 'sm',
                    variant: 'ghost',
                  })}>
                  Sign up
                </Link>

                <Link
                  href='/api/auth/login'
                  className={buttonVariants({
                    size: 'sm',
                    variant: 'ghost',
                  })}>
                  Login
                </Link>
              </>
            )}
          </div>
       </nav>
    )
}


