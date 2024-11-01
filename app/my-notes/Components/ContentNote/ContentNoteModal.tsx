"use client";
import { SingleNoteType } from "@/app/types/Types";
import { useGlobalContext } from "@/Context/ContextApi";

import React, { useEffect, useState } from "react";
import { ContentNoteHeader } from "./ContentNoteComponents/ContentNoteHeader";
import { NoteTags } from "./ContentNoteComponents/NoteTags";
import { Description } from "./ContentNoteComponents/ContentNoteDescription";
import { CodeEditor } from "./ContentNoteComponents/CodeEditor";

function ContentNoteModal() {
  const {
    openContentNoteObject: { openContentNote },
    darkModeObject: { darkMode },
    selectedNoteObject: { selectedNote },
    isNewNoteObject: { isNewNote, setIsNewNote },
    allNotesObject: { allNotes, setAllNotes },
    selectedLanguageObject: { selectedLanguage },
  } = useGlobalContext();

  const [singleNote, setSingleNote] = useState<SingleNoteType | undefined>(
    undefined
  );

  const [isOpened, setIsOpened] = useState(false); // tags menu ---------

  // show selected note in modal ---------------------------------------
  useEffect(() => {
    if (openContentNote) {
      if (selectedNote) setSingleNote(selectedNote);
    }
  }, [openContentNote, selectedNote]);

  // create new note only if not empty -------------------------------------
  useEffect(() => {
    if (isNewNote) {
      if (singleNote && singleNote.title !== "") {
        const updateAllNotes = [...allNotes, singleNote];
        // sort notes by date ----------------------------------------
        const sortedAllNotes = updateAllNotes.sort((a, b) => {
          return (
            new Date(b.creationDate).getTime() -
            new Date(a.creationDate).getTime()
          );
        });
        // setAllNotes([...allNotes, singleNote]);
        setAllNotes(sortedAllNotes);
        setIsNewNote(false);
      }
    }
  }, [singleNote]);

  // update all notes after selecting note language----------------------------------------------------------
  useEffect(() => {
    if (selectedLanguage && singleNote) {
      const newLanguage = selectedLanguage.name;
      const updateSingleNote: SingleNoteType = {
        ...singleNote,
        language: newLanguage,
      };

      const updateAllNotes = allNotes.map((note) => {
        if (note._id === singleNote?._id) {
          return updateSingleNote;
        }
        return note;
      });
      setAllNotes(updateAllNotes);
      setSingleNote(updateSingleNote);
    }
  }, [selectedLanguage]);

  // =============================================
  return (
    <div
      className={`fixed w-full h-screen flex items-center justify-center z-[500] ${
        darkMode ? "bg-black/70" : "bg-black/50"
      } ${openContentNote ? "block no-doc-scroll" : "hidden"}`}
    >
      <div
        className={`h-[80%] max-md:w-[90%] max-lg:w-[80%] w-[60%] rounded-md p-4 overflow-scroll ${
          darkMode[1].isSelected
            ? "bg-slate-900 border-[1px] border-gray-400"
            : "bg-white"
        }`}
      >
        {singleNote && (
          <div>
            <ContentNoteHeader
              singleNote={singleNote}
              setSingleNote={setSingleNote}
              setIsOpened={setIsOpened}
            />
            <NoteTags
              singleNote={singleNote}
              setSingleNote={setSingleNote}
              isOpened={isOpened}
              setIsOpened={setIsOpened}
            />
            <Description
              singleNote={singleNote}
              setSingleNote={setSingleNote}
            />
            <CodeEditor singleNote={singleNote} setSingleNote={setSingleNote} />
          </div>
        )}
      </div>
    </div>
  );
}

export default ContentNoteModal;
