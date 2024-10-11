import { Search } from "@mui/icons-material";
import React from "react";

function SearchBar() {
  return (
    <div className="relative pl-3 w-[60%] h-[36px] bg-slate-100 rounded-3xl flex items-center gap-2">
      <Search className="text-sky-400" sx={{ fontSize: 13 }} />
      <input
        placeholder="Search a snippet"
        className="w-[70%] outline-none text-sm bg-slate-100 text-slate-500"
      />
      <AddSnippetButton />
    </div>
  );
}

export default SearchBar;

function AddSnippetButton() {
  return (
    <div className="flex absolute gap-2 px-3 rounded-3xl bg-blue-500 p-1 shadow-lg right-0 h-full text-[13px] text-white items-center cursor-pointer select-none">
      <div className="font-bold">+</div>
      <div className="">Snippet</div>
    </div>
  );
}
