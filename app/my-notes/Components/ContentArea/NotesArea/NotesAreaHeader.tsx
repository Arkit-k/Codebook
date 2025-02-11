import { useGlobalContext } from "@/Context/ContextApi";
import React, { useEffect, useState } from "react";

export const NotesAreaHeader = ({ length }: { length: number }) => {
  const {
    sideBarMenuObject: { sideBarMenu },
    darkModeObject: { darkMode },
    openDeleteAllNotesConfirmationObject: {
      setOpenDeleteAllNotesConfirmationWindow,
    },
  } = useGlobalContext();
  const [currentMenu, setCurrentMenu] = useState("");

  useEffect(() => {
    sideBarMenu.map((item) => {
      if (item.isSelected) setCurrentMenu(item.name);
    });
  }, [sideBarMenu]);

  // ==============================================================
  return (
    <div className="flex justify-between items-center mt-6 md:mt-10">
      <div
        className={` ml-5 text-xl md:text-2xl font-bold ${
          darkMode[1].isSelected ? "text-stone-200" : "text-black"
        }`}
      >
        {currentMenu}
      </div>

      {/* delete all button for trash section ---------------------- */}
      {currentMenu === "Trash" && length > 0 && (
        <button
          onClick={() => setOpenDeleteAllNotesConfirmationWindow(true)}
          className="px-2 py-1 mr-5 rounded-md bg-red-500 text-white hover:bg-red-700"
        >
          Delete All
        </button>
      )}
    </div>
  );
};
