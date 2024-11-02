import { useGlobalContext } from "@/Context/ContextApi";
import React from "react";
import { MdDragIndicator } from "react-icons/md";

export const TagsList = () => {
  const {
    darkModeObject: { darkMode },
  } = useGlobalContext();
  return (
    <div
      className={`${
        darkMode[1].isSelected ? "text-white border-slate-600" : "text-black"
      } rounded-md flex-1 p-4 h-[70%] border overflow-auto mt-8 flex flex-col gap-4 `}
    >
      <SingleTag />
      <SingleTag />
      <SingleTag />
      <SingleTag />
      <SingleTag />
      <SingleTag />
    </div>
  );
};

function SingleTag() {
  return (
    <div className={` flex gap-3 items-center justify-between px-4 p-2`}>
      <div className="flex gap-3 items-center">
        <MdDragIndicator size={20} />
        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
        <div className="flex flex-col">
          <span className="font-bold">All</span>
          <span className="text-xl">Snippets</span>
        </div>
      </div>
    </div>
  );
}
