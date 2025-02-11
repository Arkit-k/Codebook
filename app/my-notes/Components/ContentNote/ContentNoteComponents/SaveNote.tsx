import { SingleNoteType } from "@/types/Types";
import { useGlobalContext } from "@/Context/ContextApi";
import React from "react";

export const SaveNote = ({
  setIsOpened,
  setSingleNote,
  saveSnippet,
}: {
  setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
  setSingleNote: React.Dispatch<
    React.SetStateAction<SingleNoteType | undefined>
  >;
  saveSnippet: () => void;
}) => {
  const {
    darkModeObject: { darkMode },
    openContentNoteObject: { setOpenContentNote },
    selectedLanguageObject: { setSelectedLanguage },
    isNewNoteObject: { setIsNewNote },
  } = useGlobalContext();
  return (
    <div className="flex gap-2 *:w-[90px] justify-end *:rounded-md *:px-3 *:py-2 mb-3">
      {/* <button className="bg-blue-500 text-white hover:bg-blue-700">Save</button> */}
      <button
        onClick={() => {
          saveSnippet();
        }}
        className={`bg-cyan-500 text-white hover:bg-cyan-700`}
      >
        Save
      </button>
      <button
        onClick={() => {
          setOpenContentNote(false);
          setIsOpened(false);
          setSelectedLanguage(null);
          // setSelectedNote(null);
          setSingleNote(undefined);
          setIsNewNote(false);
        }}
        className={`${
          darkMode[1].isSelected
            ? "text-white border-stone-700 bg-black"
            : "bg-stone-200 border-stone-400 text-black"
        } border`}
      >
        Close
      </button>
    </div>
  );
};
