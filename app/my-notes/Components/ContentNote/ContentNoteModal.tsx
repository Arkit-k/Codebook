"use client";
import { SingleNoteType } from "@/types/Types";
import { useGlobalContext } from "@/Context/ContextApi";

import React, { useEffect, useState } from "react";
import { ContentNoteHeader } from "./ContentNoteComponents/ContentNoteHeader";
import { NoteTags } from "./ContentNoteComponents/NoteTags";
import { Description } from "./ContentNoteComponents/ContentNoteDescription";
import { CodeEditor } from "./ContentNoteComponents/CodeEditor";
import { SaveNote } from "./ContentNoteComponents/SaveNote";
import toast from "react-hot-toast";

function ContentNoteModal() {
  const {
    openContentNoteObject: { openContentNote, setOpenContentNote },
    darkModeObject: { darkMode },
    selectedNoteObject: { selectedNote },
    isNewNoteObject: { isNewNote, setIsNewNote },
    allNotesObject: { allNotes, setAllNotes },
    selectedLanguageObject: { selectedLanguage, setSelectedLanguage },
  } = useGlobalContext();

  const [singleNote, setSingleNote] = useState<SingleNoteType | undefined>(undefined);
  const [isOpened, setIsOpened] = useState(false); // Tags menu

  // Show selected note in modal
  useEffect(() => {
    if (openContentNote && selectedNote) {
      setSingleNote(selectedNote);
    }
  }, [openContentNote, selectedNote]);

  // Save snippet function
  const saveSnippet = () => {
    if (singleNote && singleNote.title !== "") {
      setOpenContentNote(false);
      setIsOpened(false);
      setSelectedLanguage(null);
      setSingleNote(undefined);
      setIsNewNote(false);
      saveNoteToDB(singleNote, isNewNote);
    } else {
      toast.error("Title required");
    }
  };

  // Add or update snippet in DB
  async function saveNoteToDB(note: SingleNoteType, isNew: boolean) {
    const url = isNew ? "/api/snippets" : `/api/snippets?snippetId=${note._id}`;
    const method = isNew ? "POST" : "PUT";

    const { _id, ...noteData } = note;
    const body = isNew ? JSON.stringify(noteData) : JSON.stringify(note);

    try {
      const response = await fetch(url, {
        method: method,
        headers: { "Content-Type": "application/json" },
        body: body,
      });

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

      const data = await response.json();
      const savedNote = isNew ? { ...note, _id: data.notes._id } : note;

      setAllNotes((prevNotes) => {
        const updatedNotes = isNew
          ? [...prevNotes, savedNote]
          : prevNotes.map((n) => (n._id === savedNote._id ? savedNote : n));

        return isNew
          ? updatedNotes.sort((a, b) => new Date(b.creationDate).getTime() - new Date(a.creationDate).getTime())
          : updatedNotes;
      });

      if (isNew) {
        setSingleNote(savedNote);
        setIsNewNote(false);
        toast.success("Snippet added");
      } else {
        toast.success("Snippet updated");
      }
    } catch (error) {
      console.log("Add note to DB error: ", error);
      toast.error("Failed to add snippet");
    }
  }

  // Update all notes when changing note language
  useEffect(() => {
    if (selectedLanguage && singleNote) {
      const updatedNote = { ...singleNote, language: selectedLanguage.name };
      setAllNotes((prevNotes) => prevNotes.map((note) => (note._id === singleNote._id ? updatedNote : note)));
      setSingleNote(updatedNote);
    }
  }, [selectedLanguage]);

  return (
    <div
      className={`fixed w-full h-screen flex items-center justify-center z-[500] transition-all ${
        darkMode[1].isSelected ? "bg-black/80" : "bg-white/80"
      } ${openContentNote ? "block no-doc-scroll" : "hidden"}`}
    >
      <div
        className={`h-[80%] max-md:w-[90%] max-lg:w-[80%] w-[60%] rounded-md p-4 overflow-scroll transition-all border ${
          darkMode[1].isSelected ? "bg-black text-white border-gray-600" : "bg-white text-black border-gray-300"
        }`}
      >
        {singleNote && (
          <>
            <SaveNote setIsOpened={setIsOpened} setSingleNote={setSingleNote} saveSnippet={saveSnippet} />
            <ContentNoteHeader singleNote={singleNote} setSingleNote={setSingleNote} setIsOpened={setIsOpened} />
            <NoteTags singleNote={singleNote} setSingleNote={setSingleNote} isOpened={isOpened} setIsOpened={setIsOpened} />
            <Description singleNote={singleNote} setSingleNote={setSingleNote} />
            <CodeEditor singleNote={singleNote} setSingleNote={setSingleNote} />
          </>
        )}
      </div>
    </div>
  );
}

export default ContentNoteModal;
