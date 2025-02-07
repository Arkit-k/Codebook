"use client";

import Link from "next/link";
import { Button } from "@/compo/ui/button";
import { useAuth } from "@clerk/nextjs";
import ThemeChanger from "@/app/theme-switcher";
import { useEffect, useState } from "react";

const Navbar = () => {
    const [mounted, setMounted] = useState(false);
  
    useEffect(() => {
      setMounted(true);
    }, []);
  
    if (!mounted) return null;
  return (
    <nav className="py-4 bg-background/30 backdrop-blur-sm">
      <div className="container flex flex-row justify-between items-center">
        <Link href="/">
          <h1 className="text-2xl">Logo</h1>
        </Link>

      

        <div className="flex flex-row justify-end space-x-2">
          <ThemeChanger />
          <Button>Get Started</Button>
          <Buttons />
        </div>
      </div>
    </nav>
  );
};

function Buttons() {
  const { userId } = useAuth();

  return (
    <div className="max-sm:w-full max-sm:hidden">
      {userId ? (
        <Link href="/my-notes">
          <Button className="max-sm:w-full bg-mainColor p-[8px] px-6 text-sm text-white rounded-full">
            Dashboard
          </Button>
        </Link>
      ) : (
        <div className="flex gap-2 max-sm:flex-col max-sm:w-full max-sm:mt-8">
          <Link href="/sign-up">
            <Button className="bg-color-white text-black">
              Sign up
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
