import { useGlobalContext } from "@/Context/ContextApi";
import { AddOutlined, Search } from "@mui/icons-material";
import React from "react";
import { v4 as uuidv4 } from "uuid";

function SearchBar() {
  const {
    darkModeObject: { darkMode },
    searchSnippetObject: { searchSnippetText, setSearchSnippetText },
  } = useGlobalContext();

  const searchSnippet = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchSnippetText(event.target.value.toLowerCase());
  };

  // -----------------------------------------------------
  return (
    <div
      className={`relative pl-3 w-[60%] h-[36px] rounded-md flex items-center gap-2 ${
        darkMode[1].isSelected ? "bg-stone-700" : "bg-stone-100"
      }`}
    >
      <Search className="text-sky-400" sx={{ fontSize: 13 }} />
      <input
        placeholder="Search a snippet"
        value={searchSnippetText}
        onChange={searchSnippet}
        // onChange={(e) => setSearchSnippetText(e.target.value.toLowerCase())}
        className={`w-[70%] outline-none text-sm bg-stone-100 text-stone-500 ${
          darkMode[1].isSelected ? "bg-stone-700" : "bg-stone-100"
        }`}
      />
      <AddSnippetButton />
    </div>
  );
}

export default SearchBar;

function AddSnippetButton() {
  const {
    selectedNoteObject: { setSelectedNote },
    openContentNoteObject: { setOpenContentNote },
    isNewNoteObject: { setIsNewNote },
    sharedUserIdObject: { sharedUserId },
  } = useGlobalContext();

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

  // ==================================================================
  return (
    <div
      className="flex absolute gap-2 px-[10px] rounded-md bg-cyan-500 hover:bg-cyan-700 shadow-lg right-0 h-full text-[13px] text-white items-center cursor-pointer select-none"
      onClick={openTheContentNote}
    >
      {/* <div className="md:font-bold max-md:text-xl">+</div> */}
      <AddOutlined sx={{ fontSize: 18 }} />
      <div className="max-md:hidden">Snippet</div>
    </div>
  );
}
