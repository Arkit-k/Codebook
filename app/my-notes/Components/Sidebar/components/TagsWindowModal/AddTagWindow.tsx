"use client";
import { useGlobalContext } from "@/Context/ContextApi";
import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { MdErrorOutline } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";

export const AddTagWindow = () => {
  const {
    darkModeObject: { darkMode },
    openNewTagsWindowObject: { openNewTagsWindow, setOpenNewTagsWindow },
    allTagsObject: { allTags, setAllTags },
  } = useGlobalContext();
  const [tagName, setTagName] = useState("");
  // const [placeholder, setPlaceholder] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const [errorMessage, setErrorMessage] = useState("");

  // ---------------------------------------------------------
  function onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newValue = e.target.value;
    setErrorMessage("");
    setTagName(newValue);
  }

  // ------------------------------------------------------
  function handleAddTag() {
    // if tag empty
    if (tagName.trim().length === 0) {
      setErrorMessage("Please add a tag name");
      inputRef.current?.focus();
      return;
    }

    // check if tag already exist
    if (!allTags.some((tag) => tag.name === tagName)) {
      addNewTagFunction();
    } else {
      setErrorMessage("Tag already exists");
      inputRef.current?.focus();
    }
  }

  function addNewTagFunction() {
    const newTag = { _id: uuidv4(), name: tagName };
    try {
      setAllTags([...allTags, newTag]);

      setOpenNewTagsWindow(false);
      setTagName("");
      toast.success("Tag has been added successfully");
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    inputRef.current?.focus();
    setTagName("");
    setErrorMessage("");
  }, [openNewTagsWindow]);

  // useEffect(() => {
  //   inputRef.current?.focus();
  // }, [errorMessage, setErrorMessage]);
  // =============================================================================
  return (
    <div
      className={`fixed w-full h-screen flex items-center justify-center z-[600] ${
        darkMode ? "bg-black/70" : "bg-black/50"
      } ${openNewTagsWindow ? "block no-doc-scroll" : "hidden"}`}
    >
      <div
        className={`h-[230px] max-md:w-[90%] max-lg:w-[80%] max-xl:w-[60%] w-[40%] rounded-md p-4 justify-between flex flex-col  ${
          darkMode[1].isSelected
            ? "bg-slate-900 border-[1px] border-gray-400 text-white"
            : "bg-white"
        }`}
      >
        <span className="font-bold">Add new tag</span>
        <div className="flex my-5 gap-3 items-center relative ">
          <span>Tag name</span>
          <input
            ref={inputRef}
            value={tagName}
            onChange={(e) => onInputChange(e)}
            placeholder="Tag name here."
            className={`${
              darkMode[1].isSelected
                ? "bg-slate-900 border-gray-500 "
                : "bg-gray-100 border-gray-300"
            } flex-1 rounded-md p-2 border-[1px] outline-none`}
          />
          {/* error message ----------------------------- */}
          {errorMessage.length > 0 && (
            <div className="flex absolute -bottom-8 items-center gap-2 text-red-500 text-sm">
              <MdErrorOutline />
              <span>{errorMessage}</span>
            </div>
          )}
        </div>
        {/* buttons ------------------------- */}
        <div className="flex justify-end gap-4 transition-all ">
          <button
            onClick={() => {
              setOpenNewTagsWindow(false);
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
