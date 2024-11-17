"use client";
import { SingleNoteType } from "@/types/Types";
import { useGlobalContext } from "@/Context/ContextApi";

import React, { useEffect, useMemo, useState } from "react";
import { ContentNoteHeader } from "./ContentNoteComponents/ContentNoteHeader";
import { NoteTags } from "./ContentNoteComponents/NoteTags";
import { Description } from "./ContentNoteComponents/ContentNoteDescription";
import { CodeEditor } from "./ContentNoteComponents/CodeEditor";
import { Error } from "mongoose";
import { debounce } from "lodash";
import { SaveNote } from "./ContentNoteComponents/SaveNote";

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

  // debounce title -----------------------------------------------
  useEffect(() => {
    if (singleNote && singleNote.title !== "") {
      debouncedSaveNote(singleNote, isNewNote);
    }
  }, [singleNote, isNewNote]);

  const debouncedSaveNote = useMemo(
    () =>
      debounce((note: SingleNoteType, isNew: boolean) => {
        saveNoteToDB(note, isNew);
      }, 500),
    []
  );

  // create new note only if not empty -------------------------------------
  // useEffect(() => {
  //   if (isNewNote) {
  //     if (singleNote && singleNote.title !== "") {
  //       saveNoteToDB(singleNote, setAllNotes, isNewNote, setIsNewNote);
  // addNoteToDB(singleNote, allNotes, setAllNotes);

  // const updateAllNotes = [...allNotes, singleNote];
  // // sort notes by date ----------------------------------------
  // const sortedAllNotes = updateAllNotes.sort((a, b) => {
  //   return (
  //     new Date(b.creationDate).getTime() -
  //     new Date(a.creationDate).getTime()
  //   );
  // });
  // // setAllNotes([...allNotes, singleNote]);
  // setAllNotes(sortedAllNotes);

  // setIsNewNote(false);
  //     }
  //   }
  // }, [singleNote]);

  // add snippet in DB -----------------------------------------------
  async function saveNoteToDB(note: SingleNoteType, isNew: boolean) {
    const url = isNew ? "/api/snippets" : `/api/snippets?snippetId=${note._id}`;
    const method = isNew ? "POST" : "PUT";

    // copy of note object without '_id' field
    const { _id, ...noteData } = note;

    const body = isNew ? JSON.stringify(noteData) : JSON.stringify(note);

    try {
      const response = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: body,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const savedNote = isNew ? { ...note, _id: data.notes._id } : note;

      setAllNotes((prevNotes) => {
        const updatedNotes = isNew
          ? [...prevNotes, savedNote]
          : prevNotes.map((n) => (n._id === savedNote._id ? savedNote : n));

        if (isNew) {
          return updatedNotes.sort(
            (a, b) =>
              new Date(b.creationDate).getTime() -
              new Date(a.creationDate).getTime()
          );
        }
        return updatedNotes;
      });

      if (isNew) {
        setSingleNote(savedNote);
        setIsNewNote(false);
      }
    } catch (error) {
      console.log("add note to db error: ", error);
    }
  }

  // // add snippet in DB -----------------------------------------------
  // async function addNoteToDB(
  //   note: SingleNoteType,
  //   allNotes: SingleNoteType[],
  //   setAllNotes: React.Dispatch<React.SetStateAction<SingleNoteType[]>>
  // ) {
  //   // copy of note object without '_id' field
  //   const { _id, ...noteWithoutId } = note;
  //   console.log("note without id: ", noteWithoutId);

  //   try {
  //     const response = await fetch(`/api/snippets`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(noteWithoutId),
  //     });

  //     if (!response.ok) {
  //       throw new Error(`HTTP error! status: ${response.status}`);
  //     }

  //     const data = await response.json();
  //     console.log("Data: ", data);

  //     const id = data.notes._id; // get id from response

  //     // update singlenote with id
  //     const singleNote = { ...note, _id: id };
  //     const updateAllNotes = [...allNotes, singleNote];
  //     console.log("Single note: ", singleNote);

  //     // sort note
  //     const sortedAllNotes = updateAllNotes.sort((a, b) => {
  //       return (
  //         new Date(b.creationDate).getTime() -
  //         new Date(a.creationDate).getTime()
  //       );
  //     });
  //     setAllNotes(sortedAllNotes);
  //   } catch (error) {
  //     console.log("add note to db error: ", error);
  //   }
  // }

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
            <SaveNote setIsOpened={setIsOpened} setSingleNote={setSingleNote} />
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
