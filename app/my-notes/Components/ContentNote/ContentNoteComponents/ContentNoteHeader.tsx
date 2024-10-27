import { SingleNoteType } from "@/app/types/Types";
import { useGlobalContext } from "@/Context/ContextApi";
import { TitleOutlined } from "@mui/icons-material";
import { IoMdClose } from "react-icons/io";

export function ContentNoteHeader({
  singleNote,
  setSingleNote,
  setIsOpened,
}: {
  singleNote: SingleNoteType;
  setSingleNote: React.Dispatch<
    React.SetStateAction<SingleNoteType | undefined>
  >;
  setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const {
    allNotesObject: { allNotes, setAllNotes },
    openContentNoteObject: { setOpenContentNote },
    selectedLanguageObject: { setSelectedLanguage },
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
            className={`text-lg font-bold resize-none outline-none overflow-hidden w-full h-auto group-hover:text-blue-500 ${
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
            setIsOpened(false);
            setSelectedLanguage(null);
          }}
        />
      </div>
    </div>
  );
}
