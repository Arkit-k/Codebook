import { useGlobalContext } from "@/Context/ContextApi";
import { AddOutlined } from "@mui/icons-material";
import React from "react";
import { FaSearch } from "react-icons/fa";

export const TagsSearch = ({
  searchQuery,
  setSearchQuery,
}: {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const {
    darkModeObject: { darkMode },
    openNewTagsWindowObject: { setOpenNewTagsWindow },
  } = useGlobalContext();
  return (
    <div className="flex justify-between gap-2 md:gap-5 items-center mt-8">
      <div
        className={`${
          darkMode[1].isSelected
            ? "text-white border-stone-600"
            : "text-black bg-gray-50"
        } flex items-center gap-2 border p-2 flex-1 rounded-md max-md:text-sm`}
      >
        <FaSearch size={20} />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search tags"
          className="bg-transparent outline-none w-full"
        />
      </div>
      <button
        onClick={() => setOpenNewTagsWindow(true)}
        className="bg-cyan-500 hover:bg-cyan-700 rounded-md max-md:text-sm p-2 flex gap-1 items-center text-white"
      >
        <AddOutlined sx={{ fontSize: 18 }} />
        <span>Add Tag</span>
      </button>
    </div>
  );
};
