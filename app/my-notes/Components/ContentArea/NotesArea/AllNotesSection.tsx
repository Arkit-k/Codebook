"use client";
import { SingleNoteType } from "@/app/types/Types";
import { useGlobalContext } from "@/Context/ContextApi";
import React, { useEffect, useLayoutEffect, useState } from "react";

import { NoteHeader } from "./SingleNoteComponents/SingleNoteHeader";
import { NoteTags } from "./SingleNoteComponents/SingleNoteTags";
import {
  NoteDate,
  NoteDescription,
} from "./SingleNoteComponents/SingleNoteDateAndDescription";
import { CodeBlock } from "./SingleNoteComponents/SingleNoteCodeBlock";
import { NoteFooter } from "./SingleNoteComponents/SingleNoteFooter";
import { NotesAreaHeader } from "./NotesAreaHeader";
import { NoNotes } from "./NoNotes";

function AllNotesSection() {
  const {
    allNotesObject: { allNotes },
    sideBarMenuObject: { sideBarMenu },
    tagsClickedObject: { tagsClicked },
  } = useGlobalContext();

  const [filteredNotes, setFilteredNotes] = useState(
    allNotes.filter((note) => note.isTrash === false)
  );

  // filter notes, get notes which are not deleted
  const filterIsTrashedNotes = allNotes.filter(
    (note) => note.isTrash === false
  );

  // =========================
  useEffect(() => {
    // all snippets
    if (sideBarMenu[0].isSelected) {
      // show all notes ----------------------------------------------------
      if (tagsClicked.length === 1 && tagsClicked[0] === "All") {
        setFilteredNotes(allNotes.filter((note) => !note.isTrash));
        return;
      }
      //how only notes with selected tags -------------------------------------
      if (tagsClicked.length > 0) {
        const updateNotes = allNotes
          .filter((note) => {
            return tagsClicked.every((selectedTag) =>
              note.tags.some((noteTag) => noteTag.name === selectedTag)
            );
          })
          .filter((note) => !note.isTrash);
        setFilteredNotes(updateNotes);
      }
    }
    // if favorites
    if (sideBarMenu[1].isSelected) {
      if (tagsClicked.length === 1 && tagsClicked[0] === "All") {
        setFilteredNotes(
          allNotes.filter((note) => note.isFavorite && note?.isTrash === false)
        );
      }
    }
    // show trash notes
    if (sideBarMenu[2].isSelected) {
      setFilteredNotes(allNotes.filter((note) => note?.isTrash === true));
    }
  }, [allNotes, tagsClicked]);

  // if sidebar changes
  useLayoutEffect(() => {
    if (sideBarMenu[0].isSelected) {
      setFilteredNotes(filterIsTrashedNotes);
    }
    if (sideBarMenu[1].isSelected) {
      const filteredFavoriteNotes = allNotes.filter(
        (note) => !note.isTrash && note.isFavorite
      );
      setFilteredNotes(filteredFavoriteNotes);
    }
    if (sideBarMenu[2].isSelected) {
      const filterTrashedNotes = allNotes.filter((note) => note.isTrash);
      setFilteredNotes(filterTrashedNotes);
    }
  }, [sideBarMenu]);

  // =======================================================
  return (
    <>
      <NotesAreaHeader length={filteredNotes.length} />
      <NoNotes notesLength={filteredNotes.length} tagsClicked={tagsClicked} />
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {filteredNotes.map((note, index) => (
          <div className="" key={index}>
            <SingleNote note={note} />
          </div>
        ))}
      </div>
    </>
  );
}

export default AllNotesSection;

function SingleNote({ note }: { note: SingleNoteType }) {
  const {
    darkModeObject: { darkMode },
  } = useGlobalContext();
  const {
    _id,
    title,
    creationDate,
    description,
    code,
    tags,
    isFavorite,
    language,
    isTrash,
  } = note;

  // -------------------------------------------
  return (
    <div
      className={`${
        darkMode[1].isSelected
          ? "bg-slate-900 text-white border-slate-700"
          : "bg-white border-gray-400"
      } max-sm:w-full rounded-md py-4 border-[1px] h-[420px] flex flex-col`}
    >
      <NoteHeader
        title={title}
        isFavorite={isFavorite}
        note={note}
        id={_id}
        isTrashed={isTrash}
      />
      <NoteDate creationDate={creationDate} />
      <NoteTags tags={tags} />
      <NoteDescription description={description} />
      <CodeBlock language={language} code={code} />
      <NoteFooter language={language} note={note} />
    </div>
  );
}
