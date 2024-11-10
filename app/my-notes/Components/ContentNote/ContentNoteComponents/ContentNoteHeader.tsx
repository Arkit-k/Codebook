import { SingleNoteType } from "@/app/types/Types";
import { useGlobalContext } from "@/Context/ContextApi";
import { TitleOutlined } from "@mui/icons-material";
import { useEffect, useRef, useState } from "react";

export function ContentNoteHeader({
  singleNote,
  setSingleNote,
}: {
  singleNote: SingleNoteType;
  setSingleNote: React.Dispatch<
    React.SetStateAction<SingleNoteType | undefined>
  >;
  setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const {
    openContentNoteObject: { openContentNote },
    darkModeObject: { darkMode },
  } = useGlobalContext();

  const textRef = useRef<HTMLTextAreaElement>(null);
  const [onFocus, setOnFocus] = useState(false);
  // update notes ----------------------------------
  function onUpdateTitle(event: React.ChangeEvent<HTMLTextAreaElement>) {
    const newSingleNote = { ...singleNote, title: event.target.value }; // get title
    setSingleNote(newSingleNote);

    // find and update main notes array
    // const newAllNotes = allNotes.map((note) => {
    //   if (note._id === singleNote._id) {
    //     return newSingleNote;
    //   }
    //   return note;
    // });
    // setAllNotes(newAllNotes);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  }

  // set focus on text area ---------------------
  useEffect(() => {
    if (openContentNote) {
      textRef.current?.focus();
      setOnFocus(true);
    }
  }, [openContentNote]);
  // ----------------------------------------------------------
  return (
    <div
      className={`flex justify-between gap-8 mt-[4px] ${
        darkMode[1].isSelected ? "bg-transparent text-white" : "bg-white"
      }`}
    >
      {/* title --------------------------------------------- */}
      <div className="flex gap-2 w-full mb-3">
        <div className="flex flex-1 gap-2 group">
          <TitleOutlined
            sx={{ fontSize: 19 }}
            className={`${
              onFocus ? "text-blue-400" : "text-slate-400"
            }  group-hover:text-blue-400 mt-[4px]`}
          />
          <textarea
            ref={textRef}
            placeholder="New title"
            className={`text-lg p-1 font-bold resize-none outline-none overflow-scroll w-full h-[45px] border border-slate-400 rounded-md group-hover:text-blue-500 ${
              darkMode[1].isSelected ? "bg-slate-800" : "bg-white"
            }`}
            value={singleNote.title}
            onChange={onUpdateTitle}
            onKeyDown={handleKeyDown}
          />
        </div>
        {/* close modal btn --------------------------------------- */}
        {/* <IoMdClose
          size={25}
          className="cursor-pointer font-bold"
          onClick={() => {
            setOpenContentNote(false);
            setIsOpened(false);
            setSelectedLanguage(null);
            // setSelectedNote(null);
            setIsNewNote(false);
          }}
        /> */}
      </div>
    </div>
  );
}
