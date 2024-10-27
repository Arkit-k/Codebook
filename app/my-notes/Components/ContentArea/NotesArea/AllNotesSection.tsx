"use client";
import { SingleNoteType } from "@/app/types/Types";
import { useGlobalContext } from "@/Context/ContextApi";
import React from "react";

import { NoteHeader } from "./SingleNoteComponents/SingleNoteHeader";
import { NoteTags } from "./SingleNoteComponents/SingleNoteTags";
import {
  NoteDate,
  NoteDescription,
} from "./SingleNoteComponents/SingleNoteDateAndDescription";
import { CodeBlock } from "./SingleNoteComponents/SingleNoteCodeBlock";
import { NoteFooter } from "./SingleNoteComponents/SingleNoteFooter";

function AllNotesSection() {
  const {
    allNotesObject: { allNotes },
  } = useGlobalContext();

  return (
    // <div
    //   className={`${
    //     openContentNote
    //       ? "grid-cols-1"
    //       : "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3"
    //   } mt-5 grid  gap-4`}
    // >
    <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
      {allNotes.map((note, index) => (
        <div className="" key={index}>
          <SingleNote note={note} />
        </div>
      ))}
    </div>
  );
}

export default AllNotesSection;

function SingleNote({ note }: { note: SingleNoteType }) {
  const {
    darkModeObject: { darkMode },
  } = useGlobalContext();
  const { title, creationDate, description, code, tags, isFavorite, language } =
    note;

  // -------------------------------------------
  return (
    <div
      className={`${
        darkMode[1].isSelected
          ? "bg-slate-900 text-white border-slate-700"
          : "bg-white border-gray-400"
      } max-sm:w-full rounded-md py-4 border-[1px]`}
    >
      <NoteHeader title={title} isFavorite={isFavorite} note={note} />
      <NoteDate creationDate={creationDate} />
      <NoteTags tags={tags} />
      <NoteDescription description={description} />
      <CodeBlock language={language} code={code} />
      <NoteFooter language={language} />
    </div>
  );
}
