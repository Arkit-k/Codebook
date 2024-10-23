"use client";
import { SingleNoteType } from "@/app/types/Types";
import { useGlobalContext } from "@/Context/ContextApi";
import {
  EditOutlined,
  StyleOutlined,
  TitleOutlined,
} from "@mui/icons-material";
import React, { useEffect, useRef, useState } from "react";
import { BiCross } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";

function ContentNoteModal() {
  const {
    openContentNoteObject: { openContentNote, setOpenContentNote },
    darkModeObject: { darkMode },
    selectedNoteObject: { selectedNote, setSelectedNote },
    isNewNoteObject: { isNewNote, setIsNewNote },
    allNotesObject: { allNotes, setAllNotes },
  } = useGlobalContext();

  const [singleNote, setSingleNote] = useState<SingleNoteType | undefined>(
    undefined
  );

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
        setAllNotes([...allNotes, singleNote]);
        setIsNewNote(false);
      }
    }
  }, [singleNote]);
  // =============================================
  return (
    <div
      className={`fixed w-full h-screen flex items-center justify-center z-[500] ${
        darkMode ? "bg-black/70" : "bg-black/50"
      } ${openContentNote ? "block no-doc-scroll" : "hidden"}`}
    >
      <div
        className={`h-[80%] max-md:w-[90%] max-lg:w-[70%] w-[50%] rounded-md p-4 overflow-scroll ${
          darkMode[1].isSelected
            ? "bg-slate-800 border-[1px] border-gray-400"
            : "bg-white"
        }`}
      >
        {singleNote && (
          <>
            <ContentNoteHeader
              singleNote={singleNote}
              setSingleNote={setSingleNote}
            />
            <NoteTags
              singleNote={singleNote}
              setSingleNoteType={setSingleNote}
            />
          </>
        )}
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
    openContentNoteObject: { setOpenContentNote },
    selectedNoteObject: { setSelectedNote },
    darkModeObject: { darkMode },
  } = useGlobalContext();

  // update notes ----------------------------------
  function onUpdateTitle(event: React.ChangeEvent<HTMLTextAreaElement>) {
    const newSingleNote = { ...singleNote, title: event.target.value }; // get title
    setSingleNote(newSingleNote);

    // find and update main notes array
    const newAllNotes = allNotes.map((note) => {
      if (note._id === singleNote._id) {
        return newSingleNote;
      }
      return note;
    });
    setAllNotes(newAllNotes);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  }
  // ----------------------------------------------------------
  return (
    <div
      className={`flex justify-between gap-8 mt-[4px] ${
        darkMode[1].isSelected ? "bg-slate-800 text-white" : "bg-white"
      }`}
    >
      {/* title --------------------------------------------- */}
      <div className="flex gap-2 w-full">
        <div className="flex flex-1 gap-2 group">
          <TitleOutlined
            sx={{ fontSize: 19 }}
            className="text-slate-400 group-hover:text-blue-400 mt-[4px]"
          />
          <textarea
            placeholder="New title"
            className={`text-lg font-bold resize-none outline-none overflow-hidden w-full h-auto group-hover:text-blue-200 ${
              darkMode[1].isSelected ? "bg-slate-800" : "bg-white"
            }`}
            value={singleNote.title}
            onChange={onUpdateTitle}
            onKeyDown={handleKeyDown}
          />
        </div>
        {/* close modal btn --------------------------------------- */}
        <IoMdClose
          size={25}
          className="cursor-pointer font-bold"
          onClick={() => {
            setOpenContentNote(false);
            setSelectedNote(null);
          }}
        />
      </div>
    </div>
  );
}

function NoteTags({
  singleNote,
  setSingleNoteType,
}: {
  singleNote: SingleNoteType;
  setSingleNoteType: React.Dispatch<
    React.SetStateAction<SingleNoteType | undefined>
  >;
}) {
  const [hovered, setHovered] = useState(false);
  const {
    darkModeObject: { darkMode },
  } = useGlobalContext();

  return (
    <div className="flex text-[13px] items-center gap-2">
      <StyleOutlined
        sx={{ fontSize: 19 }}
        className={`${hovered ? "text-blue-400" : "text-slate-400"}`}
      />
      <div
        className="flex justify-between w-full"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="flex gap-2 items-center flex-wrap">
          {singleNote.tags.map((tag, index) => (
            <span
              key={index}
              className={`${
                darkMode[1].isSelected
                  ? "bg-blue-700 text-white"
                  : "bg-slate-200 text-blue-700"
              } p-1 text-xs rounded-full px-2 mr-1`}
            >
              {tag}
            </span>
          ))}
          {hovered && (
            <EditOutlined
              sx={{ fontSize: 19 }}
              className={`${
                darkMode[1].isSelected ? "text-blue-400" : "text-slate-200"
              } cursor-pointer`}
            />
          )}
        </div>
      </div>
    </div>
  );
}
