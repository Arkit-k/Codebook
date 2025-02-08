"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/compo/ui/button";
import { useAuth } from "@clerk/nextjs";
import ThemeToggle from "@/app/provider";
import { Menu, X } from "lucide-react"; // Icons for mobile menu

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="py-4 bg-background/30 backdrop-blur-md shadow-sm">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-2xl font-bold">Logo</h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle />
          <Buttons />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-dark dark:bg-gray-900 transition-transform transform 
           -translate-y-full
         md:hidden flex flex-col items-center space-y-4 py-6 z-50 shadow-lg">
          <div className="flex dark:bg-gray-900 flex-col items-center space-y-4 py-4">
            <ThemeToggle />
            <Buttons />
          </div>
        </div>
      )}
    </nav>
  );
};

function Buttons() {
  const { userId } = useAuth();

  return (
    <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2">
      {userId ? (
        <Link href="/my-notes">
          <Button className="bg-gray-200 text-black dark:bg-gray-700 dark:text-white w-full md:w-auto">
            Dashboard
          </Button>
        </Link>
      ) : (
        <div className="flex flex-col md:flex-row gap-2 w-full">
          <Link href="/sign-in">
          <Button>
  Get Started
</Button>

          </Link>
          <Link href="/sign-in">
            <Button className="bg-gray-200 text-black dark:bg-gray-700 dark:text-white w-full md:w-auto">
              Sign In
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;

