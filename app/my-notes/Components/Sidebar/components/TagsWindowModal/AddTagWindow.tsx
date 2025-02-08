"use client";
import { SingleTagType } from "@/types/Types";
import { useGlobalContext } from "@/Context/ContextApi";
import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { MdErrorOutline } from "react-icons/md";

export const AddTagWindow = () => {
  const {
    darkModeObject: { darkMode },
    openNewTagsWindowObject: { openNewTagsWindow, setOpenNewTagsWindow },
    allTagsObject: { allTags, setAllTags },
    selectedTagToEditObject: { selectedTagToEdit, setSelectedTagToEdit },
    allNotesObject: { allNotes, setAllNotes },
    sharedUserIdObject: { sharedUserId },
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
  function handleClickedTag() {
    // if tag empty
    if (tagName.trim().length === 0) {
      setErrorMessage("Please add a tag name");
      inputRef.current?.focus();
      return;
    }

    // check if tag already exist
    if (!allTags.some((tag) => tag.name === tagName)) {
      // if new tag
      if (!selectedTagToEdit) {
        addNewTagFunction();
      } else {
        handleEditTag();
      }
      setOpenNewTagsWindow(false);
    } else {
      setErrorMessage("Tag already exists");
      inputRef.current?.focus();
    }
  }

  // add tag ------------------------------------------------
  async function addNewTagFunction() {
    const newTag = { name: tagName, clerkUserId: sharedUserId || "" };

    try {
      const response = await fetch("/api/tags", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTag),
      });

      if (!response.ok) {
        throw new Error("Failed to add tag");
      }

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      // update tag locally
      const addedTag: SingleTagType = {
        _id: data.tags._id,
        name: data.tags.name,
        clerkUserId: data.tags.clerkUserId,
      };

      setAllTags((prev) => [...prev, addedTag]);
      setOpenNewTagsWindow(false);
      toast.success("Tag added successfully");
    } catch (error) {
      console.error("Error adding new tag: ", error);
      toast.error(error instanceof Error ? error.message : "Failed to add tag");
    }

    // const newTag = {
    //   _id: uuidv4(),
    //   clerkUserId: sharedUserId || "",
    //   name: tagName,
    // };
    // try {
    //   setAllTags([...allTags, newTag]);

    //   setTagName("");
    //   toast.success("Tag has been added successfully");
    // } catch (error) {
    //   console.log(error);
    // }
  }

  // edit tag and update in all notes
  function handleEditTag() {
    const updateAllTags = allTags.map((tag) => {
      if (tag._id === selectedTagToEdit?._id) {
        return { ...tag, name: tagName };
      }
      return tag;
    });
    const updatedNotes = allNotes.map((note) => {
      if (
        note.tags.some(
          (tag) =>
            tag.name.toLocaleLowerCase() ===
            selectedTagToEdit?.name.toLocaleLowerCase()
        )
      ) {
        return {
          ...note,
          tags: note.tags.map((tag) => {
            if (
              tag.name.toLocaleLowerCase() ===
              selectedTagToEdit?.name.toLocaleLowerCase()
            ) {
              return { ...tag, name: tagName };
            }
            return tag;
          }),
        };
      }
      return note;
    });
    setAllTags(updateAllTags);
    setAllNotes(updatedNotes);
    setSelectedTagToEdit(null);
  }

  // -----------------------------------------
  useEffect(() => {
    inputRef.current?.focus();
    // if editing a tag -----------------
    if (selectedTagToEdit) {
      setTagName(selectedTagToEdit.name);
    } else {
      setTagName("");
    }
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
            ? "bg-stone-900 border-[1px] border-gray-400 text-white"
            : "bg-white"
        }`}
      >
        <span className="font-bold">
          {selectedTagToEdit ? "Edit tag" : "Add new tag"}
        </span>
        <div className="flex my-5 gap-3 items-center relative ">
          <span>Tag name:</span>
          <input
            ref={inputRef}
            value={tagName}
            onChange={(e) => onInputChange(e)}
            placeholder="Tag name here."
            className={`${
              darkMode[1].isSelected
                ? "bg-stone-900 border-gray-500 "
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
              setSelectedTagToEdit(null);
            }}
            className={`${
              darkMode[1].isSelected
                ? "hover:bg-stone-950"
                : " hover:border-black"
            } py-2 px-4 rounded-md border`}
          >
            Cancel
          </button>
          <button
            onClick={handleClickedTag}
            className="bg-stone-900 text-white py-2 px-4 rounded-md hover:bg-stone-700 "
          >
            {selectedTagToEdit ? "Save changes" : "Add tag"}
          </button>
        </div>
      </div>
    </div>
  );
};
