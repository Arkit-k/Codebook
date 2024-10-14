"use client";
import React from "react";
import ProfileUser from "./TopBar/ProfileUser";
import SearchBar from "./TopBar/SearchBar";
import DarkMode from "./TopBar/DarkMode";
import { useGlobalContext } from "@/Context/ContextApi";
import SidebarMenuIcon from "./TopBar/SidebarMenuIcon";

function ContentArea() {
  const {
    darkModeObject: { darkMode },
  } = useGlobalContext();
  return (
    <div
      className={`w-full p-0 sm:p-5 ${
        darkMode[1].isSelected ? "bg-slate-800" : "bg-slate-100"
      }`}
    >
      <TopBar />
    </div>
  );
}

export default ContentArea;

function TopBar() {
  const {
    darkModeObject: { darkMode },
  } = useGlobalContext();
  return (
    <div
      className={`flex justify-between items-center p-2 ${
        darkMode[1].isSelected ? "bg-slate-900" : "bg-white"
      }`}
    >
      <ProfileUser />
      <SearchBar />
      <div className="flex gap-4 items-center">
        <DarkMode />
        <SidebarMenuIcon />
      </div>
    </div>
  );
}
