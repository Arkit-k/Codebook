import { useGlobalContext } from "@/Context/ContextApi";
import { AddOutlined } from "@mui/icons-material";
import React from "react";
import { FaSearch } from "react-icons/fa";

export const TagsSearch = () => {
  const {
    darkModeObject: { darkMode },
  } = useGlobalContext();
  return (
    <div className="flex justify-between gap-2 md:gap-5 items-center mt-11">
      <div
        className={`${
          darkMode[1].isSelected
            ? "text-white border-slate-600"
            : "text-black bg-gray-50"
        } flex items-center gap-2 border p-2 flex-1 rounded-md max-md:text-sm`}
      >
        <FaSearch size={20} />
        <input
          type="text"
          placeholder="Search tags"
          className="bg-transparent outline-none w-full"
        />
      </div>
      <button className="bg-blue-600 rounded-md max-md:text-sm p-2 flex gap-1 items-center text-white">
        <AddOutlined sx={{ fontSize: 18 }} />
        <span>Add Tag</span>
      </button>
    </div>
  );
};
