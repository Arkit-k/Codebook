import { useGlobalContext } from "@/Context/ContextApi";
import React from "react";

export const NotesAreaHeader = () => {
  const {
    sideBarMenuObject: { sideBarMenu },
    darkModeObject: { darkMode },
  } = useGlobalContext();

  const currentMenu = sideBarMenu.map((item) => {
    if (item.isSelected) return item.name;
  });

  return (
    <div
      className={`mt-6 md:mt-10 ml-5 text-xl md:text-2xl font-bold ${
        darkMode[1].isSelected ? "text-slate-200" : "text-black"
      }`}
    >
      {currentMenu}
    </div>
  );
};
