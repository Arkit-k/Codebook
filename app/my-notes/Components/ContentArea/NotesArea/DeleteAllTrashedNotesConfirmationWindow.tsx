"use client";
import { useGlobalContext } from "@/Context/ContextApi";
import React from "react";
import toast from "react-hot-toast";

export const DeleteAllTrashedNotesConfirmationWindow = () => {
  const {
    openDeleteAllNotesConfirmationObject: {
      openDeleteAllNotesConfirmationWindow,
      setOpenDeleteAllNotesConfirmationWindow,
    },
    darkModeObject: { darkMode },
    allNotesObject: { allNotes, setAllNotes },
  } = useGlobalContext();

  async function deleteAllTrashedNotes() {
    try {
      const response = await fetch("api/delete-all-snippets", {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // update local state after successful deletion ----------------------
      const newNotes = allNotes.filter((note) => note.isTrash === false);
      setAllNotes(newNotes);
      setOpenDeleteAllNotesConfirmationWindow(false);
      toast.success("All notes deleted");
    } catch (error) {
      console.error("Error deleting snippets: ", error);
      toast.error("Failed to delete all snippets, please try again");
    }
  }
  // ===================================
  return (
    <div
      className={`fixed w-full h-screen flex items-center justify-center z-[500] ${
        darkMode ? "bg-black/70" : "bg-black/50"
      } ${
        openDeleteAllNotesConfirmationWindow ? "block no-doc-scroll" : "hidden"
      }`}
    >
      <div
        className={`h-[200px] max-sm:w-[90%] max-lg:w-[50%] w-[30%] rounded-md p-4 flex flex-col  ${
          darkMode[1].isSelected
            ? "bg-slate-900 border-[1px] border-gray-400 text-white"
            : "bg-white text-black"
        }`}
      >
        <div className="font-bold text-lg">Delete All notes?</div>
        <div className="flex-1 text-sm mt-3">You cannot undo this task.</div>
        <div className="flex justify-end gap-4 transition-all ">
          <button
            onClick={() => setOpenDeleteAllNotesConfirmationWindow(false)}
            className={`${
              darkMode[1].isSelected
                ? "hover:bg-slate-600"
                : " hover:border-black"
            } py-2 px-4 rounded-md border`}
          >
            Cancel
          </button>
          <button
            onClick={deleteAllTrashedNotes}
            className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-700 "
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};
