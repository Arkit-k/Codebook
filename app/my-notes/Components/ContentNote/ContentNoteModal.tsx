"use client";
import { SingleNoteType } from "@/app/types/Types";
import { useGlobalContext } from "@/Context/ContextApi";
import React, { useEffect, useState } from "react";

function ContentNoteModal() {
  const {
    openContentNoteObject: { openContentNote, setOpenContentNote },
    darkModeObject: { darkMode },
    selectedNoteObject: { selectedNote, setSelectedNote },
  } = useGlobalContext();

  const [singleNote, setSingleNote] = useState<SingleNoteType | undefined>(
    undefined
  );

  useEffect(() => {
    if (openContentNote) {
      if (selectedNote) setSingleNote(selectedNote);
    }
  }, [openContentNote, selectedNote]);
  // =============================================
  return (
    <div
      className={`fixed w-full h-screen flex items-center justify-center z-[500] ${
        darkMode ? "bg-black/70" : "bg-black/50"
      } ${openContentNote ? "block no-doc-scroll" : "hidden"}`}
    >
      <div
        className={`h-[80%] max-md:w-[90%] max-lg:w-[70%] w-[50%] rounded-md p-2 overflow-scroll ${
          darkMode[1].isSelected
            ? "bg-slate-800 border-[1px] border-gray-400"
            : "bg-white"
        }`}
      >
        {singleNote && (
          <ContentNoteHeader
            singleNote={singleNote}
            setSingleNote={setSingleNote}
          />
        )}
        <div
          className="cursor-pointer px-10 py-5 bg-red-400"
          onClick={() => setOpenContentNote(false)}
        >
          close
        </div>
      </div>
    </div>
  );
}

export default ContentNoteModal;

function ContentNoteHeader({
  singleNote,
  setSingleNote,
}: {
  singleNote: SingleNoteType;
  setSingleNote: React.Dispatch<
    React.SetStateAction<SingleNoteType | undefined>
  >;
}) {
  const {
    allNotesObject: { allNotes, setAllNotes },
  } = useGlobalContext();

  // update notes ----------------------------------
  function onUpdateTitle(event: React.ChangeEvent<HTMLInputElement>) {
    const newSingleNote = { ...singleNote, title: event.target.value }; // get title
    setSingleNote(newSingleNote);

    // find and update main notes array
    const newAllNotes = allNotes.map((note) => {
      if (note.id === singleNote.id) {
        return singleNote;
      }
      return note;
    });
    setAllNotes(newAllNotes);
  }
  // ----------------------------------------------------------
  return (
    <input
      placeholder="new title"
      value={singleNote.title}
      onChange={onUpdateTitle}
    />
  );
}
