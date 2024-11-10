import { getLanguageIcon } from "@/app/localData/Languages";
import { SingleNoteType } from "@/app/types/Types";
import { useGlobalContext } from "@/Context/ContextApi";
import { DeleteRounded, RestoreFromTrashOutlined } from "@mui/icons-material";
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
    allNotesObject: { setAllNotes },
    openDeleteConfirmationObject: { setOpenDeleteConfirmationWindow },
    noteToDeleteObject: { setNoteToDelete },
  } = useGlobalContext();

  async function trashNoteFunction() {
    // if note is already in trash open modal-------------------
    if (note.isTrash) {
      setOpenDeleteConfirmationWindow(true);
      setNoteToDelete(note._id);
      // setSelectedNote(note);
      return;
    }

    try {
      const response = await fetch(`api/snippets?snippetId=${note._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ isTrash: true }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // const updateNote = await response.json();

      setAllNotes((prev) =>
        prev.map((n) => (n._id === note._id ? { ...n, isTrash: true } : n))
      );
    } catch (error) {
      console.error("Error moving note to trash: ", error);
    }

    // -----------------------------------------
    // const copyAllNotes = [...allNotes]; // copy of all notes
    // const findIndex = copyAllNotes.findIndex((n) => n._id === note._id); // find index

    // const clickedNote = { ...copyAllNotes[findIndex], isTrash: true }; // mark as trashed

    // copyAllNotes[findIndex] = clickedNote; // update note

    // setAllNotes(copyAllNotes);

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
  async function resetNoteFunction() {
    try {
      const response = await fetch(`api/snippets?snippetId=${note._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ isTrash: false }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // const updateNote = await response.json();

      setAllNotes((prev) =>
        prev.map((n) => (n._id === note._id ? { ...n, isTrash: false } : n))
      );
    } catch (error) {
      console.error("Error moving note to trash: ", error);
    }
    // --------------------------
    // const trashedNoteIndex = allNotes.findIndex((n) => n._id === note._id);
    // if (trashedNoteIndex !== -1) {
    //   const trashedNote = allNotes[trashedNoteIndex];
    //   trashedNote.isTrash = false;
    //   setAllNotes([...allNotes]);
    // }

    toast(() => (
      <div className="flex gap-2 items-center">
        <span>Note restored from trash</span>
        {/* <button
           className="bg-white p-[4px] px-3 text-sm text-blue-500 rounded-md flex gap-1 items-center"
           onClick={() => {
             toast.dismiss(t.id);
             resetNoteFunction();
           }}
         >
           <LuUndo2 size={15} />
           <span>Undo</span>
         </button> */}
      </div>
    ));
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
      {/* delete and restore button --------------------------------- */}
      <div className="flex gap-2 items-center">
        {note.isTrash && (
          <div
            onClick={resetNoteFunction}
            className="cursor-pointer flex items-center"
          >
            <RestoreFromTrashOutlined sx={{ fontSize: 17 }} className="" />
            <span>Restore</span>
          </div>
        )}
        <DeleteRounded
          onClick={trashNoteFunction}
          sx={{ fontSize: 17 }}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
}
