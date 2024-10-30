import { useGlobalContext } from "@/Context/ContextApi";
import React from "react";

export const NoNotes = ({ notesLength }: { notesLength: number }) => {
  const {
    sideBarMenuObject: { sideBarMenu },
    darkModeObject: { darkMode },
  } = useGlobalContext();

  let currentMenu: string = "";
  if (sideBarMenu[0].isSelected) {
    currentMenu = "No Notes!";
  } else if (sideBarMenu[1].isSelected) {
    currentMenu = "No Favorites Added!";
  } else if (sideBarMenu[2].isSelected) {
    currentMenu = "Trash is Empty!";
  }
  return (
    notesLength === 0 && (
      <div
        className={`text-2xl mt-8 ml-5 ${
          darkMode[1].isSelected ? "text-slate-300" : "text-black"
        }`}
      >
        {currentMenu}
      </div>
    )
  );
};
