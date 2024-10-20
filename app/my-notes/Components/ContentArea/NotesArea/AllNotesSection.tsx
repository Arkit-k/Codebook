"use client";
import { useGlobalContext } from "@/Context/ContextApi";
import { DeleteRounded, FavoriteBorderOutlined } from "@mui/icons-material";
import React from "react";
import { SiJavascript } from "react-icons/si";
// import SyntaxHighlighter from "react-syntax-highlighter";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import { materialLight } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function AllNotesSection() {
  return (
    <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
      <SingleNote />
      <SingleNote />
      <SingleNote />
      <SingleNote />
    </div>
  );
}

export default AllNotesSection;

function SingleNote() {
  const {
    darkModeObject: { darkMode },
  } = useGlobalContext();
  return (
    <div
      className={`${
        darkMode[1].isSelected
          ? "bg-slate-900 text-white border-slate-700"
          : "bg-white border-gray-400"
      } max-sm:w-full rounded-md py-4  border-[1px]`}
    >
      <NoteHeader />
      <NoteTags />
      <NoteDate />
      <NoteDescription />
      <CodeBlock language="javascript" />
      <NoteFooter />
    </div>
  );
}

function NoteHeader() {
  return (
    <div className="flex justify-between mx-4">
      <span className="font-bold text-lg w-[87%]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, odit?
      </span>
      <FavoriteBorderOutlined className="text-blue-500 cursor-pointer" />
    </div>
  );
}

function NoteTags() {
  const {
    darkModeObject: { darkMode },
  } = useGlobalContext();
  return (
    <div
      className={`${
        darkMode[1].isSelected ? "" : ""
      } text-slate-500 text-[11px] mx-4 flex-wrap flex gap-1 mt-4`}
    >
      <span
        className={`${
          darkMode[1].isSelected
            ? "bg-blue-700 text-white"
            : "bg-slate-200 text-blue-700"
        } p-1 rounded-md px-2`}
      >
        functions
      </span>
    </div>
  );
}

function NoteDate() {
  return (
    <div className="text-slate-500 text-[12px] flex gap-1 font-light mx-4 mt-3">
      <span className="">23 june 2024</span>
    </div>
  );
}

function NoteDescription() {
  const {
    darkModeObject: { darkMode },
  } = useGlobalContext();
  return (
    <div
      className={`${
        darkMode[1].isSelected ? "text-slate-300" : ""
      } text-slate-500 text-[13px] mt-4 mx-4`}
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ratione
      nesciunt cupiditate fugiat. Corrupti voluptatibus reiciendis, ipsum
      perspiciatis exercitationem ad, similique itaque quo amet ipsa officia,
      nam inventore vero sint!
    </div>
  );
}

interface CodeBlockProps {
  language: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ language }) => {
  const {
    darkModeObject: { darkMode },
  } = useGlobalContext();

  const codeString = `
  import React from 'react';

  function HelloWorld(){
    return <h1>Hello world</h1>
  }

  export default HelloWorld;
  `;

  return (
    <div className="overflow-hidden text-sm">
      <SyntaxHighlighter
        language={language}
        style={darkMode[1].isSelected ? oneDark : materialLight}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

function NoteFooter() {
  return (
    <div className="flex justify-between text-[13px] text-slate-400 mx-4 mt-3">
      <div className="flex gap-1 items-center">
        <SiJavascript size={15} className="mb-[2px]" />
        Javascript
      </div>
      <DeleteRounded sx={{ fontSize: 17 }} className="cursor-pointer" />
    </div>
  );
}
