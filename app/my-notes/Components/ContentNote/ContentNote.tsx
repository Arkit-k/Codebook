import { useGlobalContext } from "@/Context/ContextApi";
import React from "react";

function ContentNote() {
  const {
    openContentNoteObject: { openContentNote, setOpenContentNote },
    isMobileObject: { isMobile, setIsMobile },
  } = useGlobalContext();

  return (
    // <div
    //   className={`border ${
    //     isMobile
    //       ? "w-4/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  bg-red-500"
    //       : "w-1/2"
    //   } z-50 bg-white p-3 rounded-lg h-[700px]  ${
    //     openContentNote ? "block" : "hidden"
    //   } `}
    // >
    // ====================================================
    <div
    // className={`border ${
    //   isMobile ? "w-full fixed top-5 bg-red-500" : "w-1/2"
    // } z-50 bg-white p-3 rounded-lg h-[700px]  ${
    //   openContentNote ? "block" : "hidden"
    // } `}
    >
      ContentNote
      <div className="cursor-pointer" onClick={() => setOpenContentNote(false)}>
        close
      </div>
    </div>
  );
}

export default ContentNote;
