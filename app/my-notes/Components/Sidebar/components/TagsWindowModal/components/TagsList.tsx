"use client";
import { SingleNoteType, SingleTagType } from "@/app/types/Types";
import { useGlobalContext } from "@/Context/ContextApi";
import { SearchRounded, StyleOutlined } from "@mui/icons-material";
import React from "react";
import toast from "react-hot-toast";
import { FaEdit } from "react-icons/fa";
import { MdDelete, MdDragIndicator } from "react-icons/md";

export const TagsList = ({
  searchQuery,
  setSearchQuery,
}: {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const {
    darkModeObject: { darkMode },
    allTagsObject: { allTags },
  } = useGlobalContext();

  const filterAllTag = allTags.filter((t) => t.name !== "All"); // dont show first All tag
  const filterTagsOnSearch = filterAllTag.filter((tag) =>
    tag.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  // ================================================================
  return (
    <div
      className={`${
        darkMode[1].isSelected
          ? "text-white border-slate-600"
          : "bg-gray-50 text-black"
      } rounded-md flex-1 p-4 h-[70%] border overflow-auto mt-8 flex flex-col gap-3`}
    >
      {/* if no tag created ------------------------ */}
      {filterAllTag.length === 0 && (
        <div className="flex flex-col h-full justify-center items-center">
          <StyleOutlined sx={{ fontSize: 70 }} />
          <span>No tags added</span>
        </div>
      )}
      {/* if no tags found on search */}
      {filterTagsOnSearch.length === 0 && filterAllTag.length !== 0 && (
        <div className="flex flex-col h-full justify-center items-center">
          <SearchRounded sx={{ fontSize: 70 }} />
          <span>No tags Found</span>
        </div>
      )}
      {/* show searched tags */}
      {filterTagsOnSearch.map((tag, index) => (
        <SingleTag tag={tag} key={index} />
      ))}

      {/* show all tags only if search is empty and no tags were found */}
      {searchQuery.length === 0 &&
        filterTagsOnSearch.length === 0 &&
        filterAllTag.map((tag, index) => <SingleTag tag={tag} key={index} />)}
    </div>
  );
};

function SingleTag({ tag }: { tag: SingleTagType }) {
  const {
    darkModeObject: { darkMode },
    openNewTagsWindowObject: { setOpenNewTagsWindow },
    selectedTagToEditObject: { setSelectedTagToEdit },

    allTagsObject: { allTags, setAllTags },
    allNotesObject: { allNotes, setAllNotes },
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
          {/* <span className="text-sm">Snippets</span> */}
        </div>
        {/* edit and delete buttons ------------------------------------- */}
        <div
          className={`flex gap-2 text-white *:p-2 *:rounded-full *:bg-blue-500 hover:*:bg-blue-800`}
        >
          <button className="" onClick={() => openTagEditWindow(tag)}>
            <FaEdit className="pl-[2px]" />
          </button>
          <button
            className=""
            onClick={() =>
              deleteTag(tag, allTags, setAllTags, allNotes, setAllNotes)
            }
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

// delete tag ---------------------
function deleteTag(
  tag: SingleTagType,
  allTags: SingleTagType[],
  setAllTags: React.Dispatch<React.SetStateAction<SingleTagType[]>>,
  allNotes: SingleNoteType[],
  setAllNotes: React.Dispatch<React.SetStateAction<SingleNoteType[]>>
) {
  try {
    // update tags
    const updateAllTags = allTags.filter(
      (t) => t.name.toLocaleLowerCase() !== tag.name.toLocaleLowerCase()
    );
    // update tags in all notes
    const updateAllNotes = allNotes.map((note) => {
      // if a note has tag
      if (
        note.tags.some(
          (t) => t.name.toLocaleLowerCase() === tag.name.toLocaleLowerCase()
        )
      ) {
        return {
          ...note,
          tags: note.tags.filter(
            (t) => t.name.toLocaleLowerCase() !== tag.name.toLocaleLowerCase()
          ),
        };
      }
      return note;
    });

    toast.success("Tag deleted");
    setAllNotes(updateAllNotes);
    setAllTags(updateAllTags);
  } catch (error) {
    console.log("error deleting tag ", error);
  }
}
