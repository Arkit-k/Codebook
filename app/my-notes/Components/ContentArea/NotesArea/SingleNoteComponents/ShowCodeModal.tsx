"use client";
import { useGlobalContext } from "@/Context/ContextApi";
import { ContentCopyOutlined, DoneAllOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  monoBlue,
  tomorrowNightBlue,
} from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function ShowCodeModal() {
  const {
    darkModeObject: { darkMode },
    showCodeModalObject: { showCodeModal, setShowCodeModal },
    currentSelectedCodeObject: { currentSelectedCode, setCurrentSelectedCode },
  } = useGlobalContext();
  const [isCopied, setIsCopied] = useState(false);

  // copy code ------------------------------------
  function clickedCopyBtn() {
    navigator.clipboard.writeText(currentSelectedCode);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1200);
  }

  return (
    <div
      className={`fixed w-full h-screen flex items-center justify-center z-[600] ${
        darkMode ? "bg-black/70" : "bg-black/50"
      } ${showCodeModal ? "block no-doc-scroll" : "hidden"}`}
    >
      <div
        className={`h-[500px] max-md:w-[90%] max-lg:w-[80%] max-xl:w-[60%] w-[60%] rounded-md p-4 justify-between flex flex-col gap-3  ${
          darkMode[1].isSelected
            ? "bg-slate-900 border-[1px] border-gray-400 text-white"
            : "bg-white"
        }`}
      >
        <div className="flex justify-end items-center">
          {/* copy button ------------------------------------------------------------- */}
          <div className="mr-4">
            {/* <div className="absolute top-4 right-4 z-50 "> */}
            <IconButton disabled={isCopied}>
              {isCopied ? (
                <DoneAllOutlined
                  sx={{ fontSize: 18 }}
                  className={`${
                    darkMode[1].isSelected ? "text-white" : "text-slate-700"
                  }`}
                />
              ) : (
                <ContentCopyOutlined
                  onClick={() => clickedCopyBtn()}
                  sx={{ fontSize: 18 }}
                  className={`${
                    darkMode[1].isSelected ? "text-white" : "text-slate-700"
                  }`}
                />
              )}
            </IconButton>
          </div>
          {/* close button ----------------------------------------- */}
          <button
            onClick={() => {
              setCurrentSelectedCode("");
              setShowCodeModal(false);
            }}
            className={`${
              darkMode[1].isSelected
                ? "border-slate-600 hover:bg-slate-800"
                : "border-slate-500 bg-slate-200 hover:bg-slate-300"
            } p-2 rounded-md border `}
          >
            Close
          </button>
        </div>
        <SyntaxHighlighter
          className="h-full"
          style={darkMode[1].isSelected ? tomorrowNightBlue : monoBlue}
        >
          {currentSelectedCode}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
