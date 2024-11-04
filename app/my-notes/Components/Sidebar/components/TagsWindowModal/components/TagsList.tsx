import { SingleTagType } from "@/app/types/Types";
import { useGlobalContext } from "@/Context/ContextApi";
import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete, MdDragIndicator } from "react-icons/md";

export const TagsList = () => {
  const {
    darkModeObject: { darkMode },
    allTagsObject: { allTags },
  } = useGlobalContext();
  return (
    <div
      className={`${
        darkMode[1].isSelected
          ? "text-white border-slate-600"
          : "bg-gray-50 text-black"
      } rounded-md flex-1 p-4 h-[70%] border overflow-auto mt-8 flex flex-col gap-3`}
    >
      {allTags.slice(1).map((tag, index) => (
        <SingleTag tag={tag} key={index} />
      ))}
    </div>
  );
};

function SingleTag({ tag }: { tag: SingleTagType }) {
  const {
    darkModeObject: { darkMode },
    openNewTagsWindowObject: { setOpenNewTagsWindow },
    selectedTagToEditObject: { setSelectedTagToEdit },
  } = useGlobalContext();

  function openTagEditWindow(tag: SingleTagType) {
    setOpenNewTagsWindow(true);
    setSelectedTagToEdit(tag);
  }
  // ============================================================
  return (
    <div
      className={`${
        darkMode[1].isSelected
          ? "border-slate-600 bg-slate-800"
          : "bg-gray-200 border-slate-300"
      } flex gap-2 border items-center justify-between px-4 p-2 rounded-md`}
    >
      <div className="flex gap-3 items-center w-full">
        <MdDragIndicator size={20} />
        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
        <div className="flex flex-col flex-1">
          <span className="font-bold">{tag.name}</span>
          <span className="text-sm">Snippets</span>
        </div>
        {/* edit and delete buttons ------------------------------------- */}
        <div
          className={`flex gap-2 text-white *:p-2 *:rounded-full *:bg-blue-500 hover:*:bg-blue-800`}
        >
          <button className="" onClick={() => openTagEditWindow(tag)}>
            <FaEdit className="pl-[2px]" />
          </button>
          <button className="">
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}
