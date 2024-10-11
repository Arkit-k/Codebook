"use client";
import React from "react";
import ProfileUser from "./TopBar/ProfileUser";
import SearchBar from "./TopBar/SearchBar";
import DarkMode from "./TopBar/DarkMode";
import { useGlobalContext } from "@/Context/ContextApi";

function ContentArea() {
  const {
    darkModeObject: { darkMode },
  } = useGlobalContext();
  return (
    <div
      className={`w-[80%] p-5 ${
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
      className={`rounded-lg flex justify-between items-center p-3 ${
        darkMode[1].isSelected ? "bg-slate-900" : "bg-white"
      }`}
    >
      <ProfileUser />
      <SearchBar />
      <DarkMode />
    </div>
  );
}
