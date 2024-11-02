"use client";
import { useGlobalContext } from "@/Context/ContextApi";
import React from "react";
import { MdClose } from "react-icons/md";
import { TagsSearch } from "./components/TagsSearch";
import { TagsList } from "./components/TagsList";

export const TagsWindow = () => {
  const {
    openTagsWindowObject: { openTagsWindow, setOpenTagsWindow },
    darkModeObject: { darkMode },
  } = useGlobalContext();
  // ==========================================
  return (
    <div
      className={`fixed w-full h-screen flex items-center justify-center z-[500] ${
        darkMode ? "bg-black/70" : "bg-black/50"
      } ${openTagsWindow ? "block no-doc-scroll" : "hidden"}`}
    >
      <div
        className={`h-[80%] max-md:w-[90%] max-lg:w-[80%] w-[60%] rounded-md p-4 overflow-scroll ${
          darkMode[1].isSelected
            ? "bg-slate-900 border-[1px] border-gray-400"
            : "bg-white"
        }`}
      >
        {/* tags header -------- */}
        <div
          className={`${
            darkMode[1].isSelected ? "text-white" : "text-black"
          } flex justify-between items-center`}
        >
          <span className="text-xl font-bold">Tags</span>
          <button onClick={() => setOpenTagsWindow(false)}>
            <MdClose size={20} />
          </button>
        </div>
        {/* search --------------- */}
        <TagsSearch />
        {/* list ------------------- */}
        <TagsList />
      </div>
    </div>
  );
};
