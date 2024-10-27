import { getLanguageIcon } from "@/app/localData/Languages";
import { SingleNoteType } from "@/app/types/Types";
import { useGlobalContext } from "@/Context/ContextApi";
import { DeleteRounded } from "@mui/icons-material";
import toast from "react-hot-toast";
import { LuUndo2 } from "react-icons/lu";

export function NoteFooter({
  language,
  note,
}: {
  language: string;
  note: SingleNoteType;
}) {
  const {
    allNotesObject: { allNotes, setAllNotes },
  } = useGlobalContext();

  function trashNoteFunction() {
    const copyAllNotes = [...allNotes]; // copy of all notes
    const findIndex = copyAllNotes.findIndex((n) => n._id === note._id); // find index

    const clickedNote = { ...copyAllNotes[findIndex], isTrash: true }; // mark as trashed

    copyAllNotes[findIndex] = clickedNote; // update note

    console.log("delete note: ", clickedNote);
    setAllNotes(copyAllNotes);

    // toast notification
    toast((t) => (
      <div className="flex gap-2 items-center">
        <span>Note moved to trash</span>
        <button
          className="bg-white p-[4px] px-3 text-sm text-blue-500 rounded-md flex gap-1 items-center"
          onClick={() => {
            toast.dismiss(t.id);
            resetNoteFunction();
          }}
        >
          <LuUndo2 size={15} />
          <span>Undo</span>
        </button>
      </div>
    ));
  }

  // undo note deletion -----------------------------------
  function resetNoteFunction() {
    const trashedNoteIndex = allNotes.findIndex((n) => n._id === note._id);
    if (trashedNoteIndex !== -1) {
      const trashedNote = allNotes[trashedNoteIndex];
      trashedNote.isTrash = false;
      setAllNotes([...allNotes]);
    }
  }

  // ===========================================================
  return (
    <div className="flex justify-between text-[13px] text-slate-500 mx-4 mt-3 h-fit">
      {language ? (
        <div className="flex gap-1 items-center">
          {getLanguageIcon(language)}
          <span>{language}</span>
        </div>
      ) : (
        <span>No language selected</span>
      )}
      {/* delete button --------------------------------- */}
      <DeleteRounded
        onClick={trashNoteFunction}
        sx={{ fontSize: 17 }}
        className="cursor-pointer"
      />
    </div>
  );
}
