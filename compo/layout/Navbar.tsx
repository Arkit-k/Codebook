"use client";

import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { Button } from "@/compo/ui/button";
import { useAuth } from "@clerk/nextjs";
import ThemeToggle from "@/app/provider";
import { Menu, X } from "lucide-react"; // Icons for mobile menu
import { useGlobalContext } from "@/Context/ContextApi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="py-4 bg-background/30 backdrop-blur-md shadow-sm">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <Link href="/">
          <Logo />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4">
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2">
      {/* GitHub Button */}
          <Link href="https://github.com/Arkit-k/Codebook">
            <FaGithub className="w-5 h-5" />
          </Link>
        </div>
     
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
          <Button className="w-full bg-gradient-to-r from-cyan-400 to-emerald-400 text-white dark:text-stone-900 font-medium py-3 px-6 rounded-lg hover:opacity-90 transition-opacity">
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
            <Button className="w-full bg-gradient-to-r from-cyan-400 to-emerald-400 text-white dark:text-stone-900 font-medium py-3 px-6 rounded-lg hover:opacity-90 transition-opacity">
              Sign In
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}

export function Logo() {
  const {
    darkModeObject: { darkMode },
  } = useGlobalContext();
  return (
    // <div className="flex gap-2 items-center">
    <div
      className={`flex gap-2 items-center pointer-events-none ${
        darkMode[1].isSelected ? "text-gray-50" : "text-stone-900"
      }`}
    >
      <div className="flex items-center gap-1 text-[23px]">
  {/* Opening Bracket */}
  <span className="font-extrabold text-stone-900 dark:bg-gradient-to-r dark:from-cyan-400 dark:to-emerald-400 dark:text-transparent dark:bg-clip-text transition-opacity">
    {"</"}
  </span>

  {/* CodeBook Text */}
  <div className="flex gap-1">
    <span className="text-stone-900 dark:text-gray-100 font-bold">Code</span>
    <span className=" text-cyan-400  font-bold">Book</span>
  </div>

  {/* Closing Bracket */}
  <span className="font-extrabold text-stone-900 dark:bg-gradient-to-r dark:from-cyan-400 dark:to-emerald-400 dark:text-transparent dark:bg-clip-text transition-opacity">
    {">"}
  </span>
</div>

    </div>
  );
}


export default Navbar;

