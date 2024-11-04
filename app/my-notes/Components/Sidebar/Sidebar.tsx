"use client";
import { useGlobalContext } from "@/Context/ContextApi";
import { useEffect } from "react";
import useWindowDimensions from "./WindowDimensions";
import { QuickLinks } from "./components/QuickLinks";
import { Languages } from "./components/Languages";

export default function Sidebar() {
  const {
    darkModeObject: { darkMode },
    openSidebarObject: { openSidebar, setOpenSidebar },
  } = useGlobalContext();

  const { width } = useWindowDimensions();

  useEffect(() => {
    if (openSidebar) {
      if (width && width > 1024) {
        setOpenSidebar(false);
      }
    }
  }, [width]);
  // ====================================================
  return (
    <div
      className={`
        ${
          openSidebar
            ? "fixed z-50 shadow-lg overflow-y-auto h-full"
            : "max-lg:hidden"
        }
        pr-5 flex flex-col gap-2 p-6 min-h-screen shadow-lg pt-7 ${
          darkMode[1].isSelected ? "bg-slate-900" : "bg-white"
        }`}
    >
      <Logo />
      <QuickLinks />
      <Languages />
    </div>
  );
}

function Logo() {
  const {
    darkModeObject: { darkMode },
  } = useGlobalContext();
  return (
    // <div className="flex gap-2 items-center">
    <div
      className={`flex gap-2 items-center pointer-events-none ${
        darkMode[1].isSelected ? "text-white" : "text-slate-600"
      }`}
    >
      <span className="font-extrabold text-3xl">{"{"}</span>
      <div className="flex gap-1 text-[23px]">
        <span className={`font-bold text-mainColor`}>Code</span>
        <span className="">Board</span>
      </div>
      <span className="font-extrabold  text-3xl">{"}"}</span>
    </div>
  );
}
