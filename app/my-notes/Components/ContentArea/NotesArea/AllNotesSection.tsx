"use client";
import { getLanguageIcon } from "@/app/localData/Languages";
import {
  SingleCodeLanguageType,
  SingleNoteType,
  SingleTagType,
} from "@/app/types/Types";
import { useGlobalContext } from "@/Context/ContextApi";
import { DeleteRounded, FavoriteBorderOutlined } from "@mui/icons-material";
import React from "react";
// import SyntaxHighlighter from "react-syntax-highlighter";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import { materialLight } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

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

function NoteHeader({
  title,
  note,
}: {
  title: string;
  isFavorite: boolean;
  note: SingleNoteType;
}) {
  const {
    openContentNoteObject: { setOpenContentNote },
    selectedNoteObject: { setSelectedNote },
  } = useGlobalContext();
  return (
    <div className="flex justify-between mx-4">
      <span
        className="font-bold text-lg w-[87%] cursor-pointer hover:text-blue-500"
        onClick={() => {
          setOpenContentNote(true);
          setSelectedNote(note);
        }}
      >
        {title}
      </span>
      <FavoriteBorderOutlined className="text-blue-500 cursor-pointer" />
    </div>
  );
}

function NoteTags({ tags }: { tags: SingleTagType[] }) {
  const {
    darkModeObject: { darkMode },
  } = useGlobalContext();

  return (
    <div
      className={`${
        darkMode[1].isSelected ? "" : ""
      } text-slate-500 text-[11px] mx-4 flex-wrap flex gap-1 mt-4`}
    >
      {tags.length === 0 && (
        <span
          className={`${
            darkMode[1].isSelected
              ? "bg-blue-700 text-white"
              : "bg-slate-200 text-blue-700"
          } p-1 text-xs rounded-full px-2 mr-1`}
        >
          No Tags
        </span>
      )}
      {tags.map((tag, index) => (
        <span
          key={index}
          className={`${
            darkMode[1].isSelected
              ? "bg-blue-700 text-white"
              : "bg-slate-200 text-blue-700"
          } p-1 text-xs rounded-full px-2 mr-1`}
        >
          {tag.name}
        </span>
      ))}
    </div>
  );
}

function NoteDate({ creationDate }: { creationDate: string }) {
  return (
    <div className="text-slate-500 text-[12px] flex gap-1 font-light mx-4 mt-3">
      <span className="">{creationDate}</span>
    </div>
  );
}

function NoteDescription({ description }: { description: string }) {
  const {
    darkModeObject: { darkMode },
  } = useGlobalContext();
  return (
    <div
      className={`${
        darkMode[1].isSelected ? "text-slate-300" : "text-slate-600"
      }  text-[13px] mt-4 mx-4`}
    >
      {description}
    </div>
  );
}

interface CodeBlockProps {
  code: string;
  language: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language }) => {
  const {
    darkModeObject: { darkMode },
  } = useGlobalContext();

  return (
    <div className="overflow-hidden text-sm">
      <SyntaxHighlighter
        language={language}
        style={darkMode[1].isSelected ? oneDark : materialLight}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

function NoteFooter({ language }: { language: string }) {
  return (
    <div className="flex justify-between text-[13px] text-slate-400 mx-4 mt-3">
      {language ? (
        <div className="flex gap-1 items-center">
          {getLanguageIcon(language)}
          <span>{language}</span>
        </div>
      ) : (
        <span>No language selected</span>
      )}
      <DeleteRounded sx={{ fontSize: 17 }} className="cursor-pointer" />
    </div>
  );
}
