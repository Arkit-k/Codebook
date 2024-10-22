import { useGlobalContext } from "@/Context/ContextApi";
import { AddOutlined, Search } from "@mui/icons-material";
import React from "react";
import { v4 as uuidv4 } from "uuid";

function SearchBar() {
  const {
    darkModeObject: { darkMode },
  } = useGlobalContext();
  return (
    <div
      className={`relative pl-3 w-[60%] h-[36px] rounded-3xl flex items-center gap-2 ${
        darkMode[1].isSelected ? "bg-slate-700" : "bg-slate-100"
      }`}
    >
      <Search className="text-sky-400" sx={{ fontSize: 13 }} />
      <input
        placeholder="Search a snippet"
        className={`w-[70%] outline-none text-sm bg-slate-100 text-slate-500 ${
          darkMode[1].isSelected ? "bg-slate-700" : "bg-slate-100"
        }`}
      />
      <AddSnippetButton />
    </div>
  );
}

export default SearchBar;

function AddSnippetButton() {
  const {
    allNotesObject: { allNotes, setAllNotes },
    selectedNoteObject: { selectedNote, setSelectedNote },
    openContentNoteObject: { setOpenContentNote },
    isNewNoteObject: { isNewNote, setIsNewNote },
  } = useGlobalContext();

  function openTheContentNote() {
    const newSingleNote = {
      _id: uuidv4(),
      title: "",
      isFavorite: false,
      tags: [],
      description: "",
      code: "",
      language: "",
      creationDate: "",
    };
    setIsNewNote(true);
    setOpenContentNote(true);
    // setAllNotes([...allNotes, newSingleNote]);
    setSelectedNote(newSingleNote);
  }

  // ==================================================================
  return (
    <div
      className="flex absolute gap-2 px-[10px] rounded-3xl bg-blue-500 shadow-lg right-0 h-full text-[13px] text-white items-center cursor-pointer select-none"
      onClick={openTheContentNote}
    >
      {/* <div className="md:font-bold max-md:text-xl">+</div> */}
      <AddOutlined sx={{ fontSize: 18 }} />
      <div className="max-md:hidden">Snippet</div>
    </div>
  );
}
