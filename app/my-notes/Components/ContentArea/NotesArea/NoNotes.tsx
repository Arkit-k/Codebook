import { useGlobalContext } from "@/Context/ContextApi";
import React from "react";
import { FaTrash } from "react-icons/fa";
import { GrNotes } from "react-icons/gr";
import { MdFavoriteBorder } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";

export const NoNotes = ({
  notesLength,
  tagsClicked,
}: {
  notesLength: number;
  tagsClicked: string[];
}) => {
  const {
    sideBarMenuObject: { sideBarMenu },
    darkModeObject: { darkMode },
    isNewNoteObject: { setIsNewNote },
    openContentNoteObject: { setOpenContentNote },
    selectedNoteObject: { setSelectedNote },
    sharedUserIdObject: { sharedUserId },
  } = useGlobalContext();

  return (
    notesLength === 0 &&
    (tagsClicked.filter((tag) => tag !== "All").length > 0 ? (
      <>
        {sideBarMenu[0].isSelected && (
          <EmptyPlaceholder
            icon={<GrNotes size={100} className="text-stone-400" />}
            text={"No snippets found with that tag"}
          />
        )}
        {sideBarMenu[1].isSelected && (
          <EmptyPlaceholder
            icon={<MdFavoriteBorder size={100} className="text-stone-400" />}
            text={"No favorites with that tag"}
          />
        )}
        {sideBarMenu[2].isSelected && (
          <EmptyPlaceholder
            icon={<FaTrash size={100} className="text-stone-400" />}
            text={"Trash is empty"}
          />
        )}
      </>
    ) : (
      <>
        {sideBarMenu[0].isSelected && (
          <EmptyPlaceholder
            icon={<GrNotes size={100} className="text-stone-400" />}
            text={""}
            isNew={true}
          />
        )}
        {sideBarMenu[1].isSelected && (
          <EmptyPlaceholder
            icon={<MdFavoriteBorder size={100} className="text-stone-400" />}
            text={"No favorites added"}
          />
        )}
        {sideBarMenu[2].isSelected && (
          <EmptyPlaceholder
            icon={<FaTrash size={100} className="text-stone-400" />}
            text={"Trash is empty"}
          />
        )}
      </>
    ))
  );

  function EmptyPlaceholder({
    icon,
    text,
    isNew,
  }: {
    icon: React.ReactNode;
    text?: React.ReactNode;
    isNew?: boolean;
  }) {
    function openTheContentNote() {
      setIsNewNote(true);
      const newSingleNote = {
        _id: uuidv4(),
        clerkUserId: sharedUserId || "",
        title: "",
        isFavorite: false,
        tags: [],
        description: "",
        code: "",
        language: "",
        creationDate: formatDate(new Date()),
        isTrash: false,
      };
      setOpenContentNote(true);
      // setAllNotes([...allNotes, newSingleNote]);
      setSelectedNote(newSingleNote);
    }
    function formatDate(date: Date) {
      const options: Intl.DateTimeFormatOptions = {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      return new Intl.DateTimeFormat("en-US", options).format(date);
    }
    // ============================================================
    return (
      <div className="flex flex-col gap-4  justify-center items-center h-full w-full">
        {icon}
        <span
          className={`${darkMode[1].isSelected ? "text-white" : "text-black"}`}
        >
          {text}
        </span>
        {isNew && (
          <div className="flex h-fit justify-center items-center">
            <button
              onClick={openTheContentNote}
              className="bg-cyan-500 text-sm md:text-lg hover:bg-cyan-700 text-white p-2 rounded-md"
            >
              + Add new snippet
            </button>
          </div>
        )}
      </div>
    );
  }
};
