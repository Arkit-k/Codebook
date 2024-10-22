"use client";
import { useGlobalContext } from "@/Context/ContextApi";
import React from "react";

function ContentNoteModal() {
  const {
    openContentNoteObject: { openContentNote, setOpenContentNote },
    darkModeObject: { darkMode },
  } = useGlobalContext();
  return (
    <div
      className={`fixed w-full h-screen flex items-center justify-center z-[500] ${
        darkMode ? "bg-black/70" : "bg-black/50"
      } ${openContentNote ? "block no-doc-scroll" : "hidden"}`}
    >
      <div
        className={`h-[80%] max-md:w-[90%] max-lg:w-[70%] w-[50%] rounded-md p-2 overflow-scroll ${
          darkMode[1].isSelected
            ? "bg-slate-800 border-[1px] border-gray-400"
            : "bg-white"
        }`}
      >
        <div className="">
          ContentNoteModal Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Asperiores aut repellendus a fugiat ipsum eum, blanditiis
          possimus labore pariatur repellat perspiciatis corporis voluptatum
          nemo similique recusandae vel deserunt assumenda, provident,
          aspernatur quasi explicabo? Ipsum animi possimus architecto fuga
          quisquam consectetur excepturi, alias placeat adipisci sequi enim quis
          id laborum consequuntur! elit. Asperiores aut repellendus a fugiat
          ipsum eum, blanditiis possimus labore pariatur repellat perspiciatis
          corporis voluptatum nemo similique recusandae vel deserunt assumenda,
          provident, aspernatur quasi explicabo? Ipsum animi possimus architecto
          fuga quisquam consectetur excepturi, alias placeat adipisci sequi enim
          quis id laborum consequuntur! aspernatur quasi explicabo? Ipsum animi
          possimus architecto fuga quisquam consectetur excepturi, alias placeat
          adipisci sequi enim quis id laborum consequuntur! elit. Asperiores aut
          repellendus a fugiat ipsum eum, blanditiis possimus labore pariatur
          repellat perspiciatis corporis voluptatum nemo similique recusandae
          vel deserunt assumenda, provident, aspernatur quasi explicabo? Ipsum
          animi possimus architecto fuga quisquam consectetur excepturi, alias
          placeat adipisci sequi enim quis id laborum consequuntur!
          <div
            className="cursor-pointer p-24 bg-red-400"
            onClick={() => setOpenContentNote(false)}
          >
            close
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentNoteModal;
