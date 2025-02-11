"use client";
import { useGlobalContext } from "@/Context/ContextApi";
import React, { useState } from "react";
import toast from "react-hot-toast";

export const DeleteNotePermanently = () => {
  const {
    openDeleteConfirmationObject: {
      openDeleteConfirmationWindow,
      setOpenDeleteConfirmationWindow,
    },
    darkModeObject: { darkMode },
    allNotesObject: { allNotes, setAllNotes },
    noteToDeleteObject: { noteToDelete, setNoteToDelete },
  } = useGlobalContext();

  const [isDeleting, setIsDeleting] = useState(false);

  // ---------------------------------------------------
  async function deleteSnippet() {
    if (noteToDelete) {
      setIsDeleting(true);
      try {
        const response = await fetch(`api/snippets?snippetId=${noteToDelete}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        // update local state after successful deletion -------------------------------
        const copyAllNotes = [...allNotes];
        const updateAllNotes = copyAllNotes.filter(
          (note) => note._id !== noteToDelete
        );
        setAllNotes(updateAllNotes);
        setOpenDeleteConfirmationWindow(false);
        setNoteToDelete(null);
        toast.success("snippet deleted");
      } catch (error) {
        console.error("Error deleting snippet: ", error);
        toast.error("Failed to delete snippet, please try again");
      } finally {
        setIsDeleting(false);
      }
    }
    // --------------------------------------------
    // if (noteToDelete) {
    //   // const updateAllNotes = allNotes.filter(
    //   //   (note) => note._id !== selectedNote._id
    //   // );
    //   // setAllNotes(updateAllNotes);
    //   // setOpenDeleteConfirmationWindow(false);
    //   // setSelectedNote(null);

    //   const updateAllNotes = allNotes.filter(
    //     (note) => note._id !== noteToDelete
    //   );
    //   setAllNotes(updateAllNotes);
    //   setOpenDeleteConfirmationWindow(false);
    //   // setSelectedNote(null);

    //   toast.success("snippet deleted");
    // }
  }
  // ======================================================
  return (
    <div
      className={`fixed w-full h-screen flex items-center justify-center z-[500] ${
        darkMode ? "bg-black/70" : "bg-black/50"
      } ${openDeleteConfirmationWindow ? "block no-doc-scroll" : "hidden"}`}
    >
      <div
        className={`h-[200px] max-sm:w-[90%] max-lg:w-[50%] w-[30%] rounded-md p-4 flex flex-col  ${
          darkMode[1].isSelected
            ? "bg-stone-900 border-[1px] border-gray-400 text-white"
            : "bg-white text-black"
        }`}
      >
        <div className="font-bold text-lg">Delete note?</div>
        <div className="flex-1 text-sm mt-3">You cannot undo this task.</div>
        <div className="flex justify-end gap-4 transition-all ">
          <button
            onClick={() => setOpenDeleteConfirmationWindow(false)}
            className={`${
              darkMode[1].isSelected
                ? "hover:bg-slate-600"
                : " hover:border-black"
            } py-2 px-4 rounded-md border`}
          >
            Cancel
          </button>
          <button
            onClick={deleteSnippet}
            className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-700 "
          >
            {isDeleting ? "Deleting..." : "Confirm"}
          </button>
        </div>
      </div>
    </div>
  );
};
