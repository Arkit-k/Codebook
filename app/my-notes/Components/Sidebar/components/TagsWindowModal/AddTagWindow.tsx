"use client";
import { useGlobalContext } from "@/Context/ContextApi";
import React, { useEffect, useRef, useState } from "react";

export const AddTagWindow = () => {
  const {
    darkModeObject: { darkMode },
    openNewTagsWindowObject: { openNewTagsWindow, setOpenNewTagsWindow },
  } = useGlobalContext();
  const [tagName, setTagName] = useState("");
  // const [placeholder, setPlaceholder] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  function handleAddTag() {
    // add tag
  }

  useEffect(() => {
    inputRef.current?.focus();
  }, [openNewTagsWindow]);
  // =========================================
  return (
    <div
      className={`fixed w-full h-screen flex items-center justify-center z-[600] ${
        darkMode ? "bg-black/70" : "bg-black/50"
      } ${openNewTagsWindow ? "block no-doc-scroll" : "hidden"}`}
    >
      <div
        className={`h-[200px] max-md:w-[90%] max-lg:w-[80%] w-[40%] rounded-md p-4 justify-between flex flex-col ${
          darkMode[1].isSelected
            ? "bg-slate-900 border-[1px] border-gray-400 text-white"
            : "bg-white"
        }`}
      >
        <span className="font-bold">Add new tag</span>
        <div className="flex my-5 gap-3 items-center">
          <span>Tag name</span>
          <input
            ref={inputRef}
            value={tagName}
            onChange={(e) => setTagName(e.target.value)}
            placeholder="Tag name here."
            className={`${
              darkMode[1].isSelected
                ? "bg-slate-900 border-gray-500 "
                : "bg-gray-100 border-gray-300"
            } flex-1 rounded-md p-2 border-[1px] outline-none`}
          />
        </div>
        {/* buttons ------------------------- */}
        <div className="flex justify-end gap-4 transition-all ">
          <button
            onClick={() => {
              setOpenNewTagsWindow(false);
              setTagName("");
            }}
            className={`${
              darkMode[1].isSelected
                ? "hover:bg-slate-950"
                : " hover:border-black"
            } py-2 px-4 rounded-md border`}
          >
            Cancel
          </button>
          <button
            onClick={handleAddTag}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 "
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};
