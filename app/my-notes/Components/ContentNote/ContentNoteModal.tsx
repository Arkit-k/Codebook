"use client";
import { SingleNoteType, SingleTagType } from "@/app/types/Types";
import { useGlobalContext } from "@/Context/ContextApi";
import {
  DescriptionOutlined,
  EditOutlined,
  StyleOutlined,
  TitleOutlined,
} from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { ContentNoteHeader } from "./ContentNoteComponents/ContentNoteHeader";
import { NoteTags } from "./ContentNoteComponents/NoteTags";
import { Description } from "./ContentNoteComponents/ContentNoteDescription";
import { CodeEditor } from "./ContentNoteComponents/CodeEditor";

function ContentNoteModal() {
  const {
    openContentNoteObject: { openContentNote, setOpenContentNote },
    darkModeObject: { darkMode },
    selectedNoteObject: { selectedNote, setSelectedNote },
    isNewNoteObject: { isNewNote, setIsNewNote },
    allNotesObject: { allNotes, setAllNotes },
  } = useGlobalContext();

  const [singleNote, setSingleNote] = useState<SingleNoteType | undefined>(
    undefined
  );

  const [isOpened, setIsOpened] = useState(false); // tags menu ---------

  // show selected note in modal ---------------------------------------
  useEffect(() => {
    if (openContentNote) {
      if (selectedNote) setSingleNote(selectedNote);
    }
  }, [openContentNote, selectedNote]);

  // create new note only if not empty -------------------------------------
  useEffect(() => {
    if (isNewNote) {
      if (singleNote && singleNote.title !== "") {
        setAllNotes([...allNotes, singleNote]);
        setIsNewNote(false);
      }
    }
  }, [singleNote]);
  // =============================================
  return (
    <div
      className={`fixed w-full h-screen flex items-center justify-center z-[500] ${
        darkMode ? "bg-black/70" : "bg-black/50"
      } ${openContentNote ? "block no-doc-scroll" : "hidden"}`}
    >
      <div
        className={`h-[80%] max-md:w-[90%] max-lg:w-[70%] w-[50%] rounded-md p-4 overflow-scroll ${
          darkMode[1].isSelected
            ? "bg-slate-800 border-[1px] border-gray-400"
            : "bg-white"
        }`}
      >
        {singleNote && (
          <div>
            <ContentNoteHeader
              singleNote={singleNote}
              setSingleNote={setSingleNote}
              setIsOpened={setIsOpened}
            />
            <NoteTags
              singleNote={singleNote}
              setSingleNote={setSingleNote}
              isOpened={isOpened}
              setIsOpened={setIsOpened}
            />
            <Description
              singleNote={singleNote}
              setSingleNote={setSingleNote}
            />
            <CodeEditor singleNote={singleNote} />
          </div>
        )}
      </div>
    </div>
  );
}

export default ContentNoteModal;

// function ContentNoteHeader({
//   singleNote,
//   setSingleNote,
//   setIsOpened,
// }: {
//   singleNote: SingleNoteType;
//   setSingleNote: React.Dispatch<
//     React.SetStateAction<SingleNoteType | undefined>
//   >;
//   setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
// }) {
//   const {
//     allNotesObject: { allNotes, setAllNotes },
//     openContentNoteObject: { setOpenContentNote },
//     selectedNoteObject: { setSelectedNote },
//     darkModeObject: { darkMode },
//   } = useGlobalContext();

//   // update notes ----------------------------------
//   function onUpdateTitle(event: React.ChangeEvent<HTMLTextAreaElement>) {
//     const newSingleNote = { ...singleNote, title: event.target.value }; // get title
//     setSingleNote(newSingleNote);

//     // find and update main notes array
//     const newAllNotes = allNotes.map((note) => {
//       if (note._id === singleNote._id) {
//         return newSingleNote;
//       }
//       return note;
//     });
//     setAllNotes(newAllNotes);
//   }

//   function handleKeyDown(event: React.KeyboardEvent<HTMLTextAreaElement>) {
//     if (event.key === "Enter") {
//       event.preventDefault();
//     }
//   }
//   // ----------------------------------------------------------
//   return (
//     <div
//       className={`flex justify-between gap-8 mt-[4px] ${
//         darkMode[1].isSelected ? "bg-slate-800 text-white" : "bg-white"
//       }`}
//     >
//       {/* title --------------------------------------------- */}
//       <div className="flex gap-2 w-full">
//         <div className="flex flex-1 gap-2 group">
//           <TitleOutlined
//             sx={{ fontSize: 19 }}
//             className="text-slate-400 group-hover:text-blue-400 mt-[4px]"
//           />
//           <textarea
//             placeholder="New title"
//             className={`text-lg font-bold resize-none outline-none overflow-hidden w-full h-auto group-hover:text-blue-500 ${
//               darkMode[1].isSelected ? "bg-slate-800" : "bg-white"
//             }`}
//             value={singleNote.title}
//             onChange={onUpdateTitle}
//             onKeyDown={handleKeyDown}
//           />
//         </div>
//         {/* close modal btn --------------------------------------- */}
//         <IoMdClose
//           size={25}
//           className="cursor-pointer font-bold"
//           onClick={() => {
//             setOpenContentNote(false);
//             setIsOpened(false);
//           }}
//         />
//       </div>
//     </div>
//   );
// }

// function NoteTags({
//   singleNote,
//   setSingleNote,
//   isOpened,
//   setIsOpened,
// }: {
//   singleNote: SingleNoteType;
//   setSingleNote: React.Dispatch<
//     React.SetStateAction<SingleNoteType | undefined>
//   >;
//   isOpened: boolean;
//   setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
// }) {
//   const [hovered, setHovered] = useState(false);
//   // const [isOpened, setIsOpened] = useState(false);
//   const {
//     darkModeObject: { darkMode },
//     selectedTagsObject: { selectedTags, setSelectedTags },
//     allNotesObject: { allNotes, setAllNotes },
//   } = useGlobalContext();

//   useEffect(() => {
//     if (isOpened) {
//       setIsOpened(true);
//     }
//   }, [isOpened]);

//   // function for selecting tags -------------------------------
//   function onClickedTag(tag: SingleTagType) {
//     if (selectedTags.some((t) => t.name === tag.name)) {
//       setSelectedTags(selectedTags.filter((t) => t.name !== tag.name));
//     } else {
//       setSelectedTags([...selectedTags, tag]);
//     }
//   }

//   // set new tags ----------------------------------------------------
//   useEffect(() => {
//     const newSingleNote = { ...singleNote, tags: selectedTags }; // add new tags
//     const newAllNotes = allNotes.map((note) => {
//       if (note._id === singleNote._id) {
//         return newSingleNote;
//       }
//       return note;
//     });

//     setAllNotes(newAllNotes);
//     setSingleNote(newSingleNote);
//   }, [selectedTags]);
//   // ---------------------------------------------------------
//   return (
//     <div className="flex text-[13px] items-center gap-2 relative">
//       <StyleOutlined
//         sx={{ fontSize: 19 }}
//         className={`${hovered ? "text-blue-400" : "text-slate-400"}`}
//       />
//       <div
//         className="flex justify-between w-full"
//         onMouseEnter={() => setHovered(true)}
//         onMouseLeave={() => {
//           if (!isOpened) setHovered(false);
//         }}
//       >
//         <div className="flex gap-2 items-center flex-wrap">
//           {singleNote.tags.length > 0 ? (
//             singleNote.tags.map((tag, index) => (
//               <span
//                 key={index}
//                 className={`${
//                   darkMode[1].isSelected
//                     ? "bg-blue-700 text-white"
//                     : "bg-slate-200 text-blue-700"
//                 } p-1 text-xs rounded-full px-2 mr-1`}
//               >
//                 {tag.name}
//               </span>
//             ))
//           ) : (
//             <span
//               className={`${
//                 darkMode[1].isSelected
//                   ? "bg-blue-700 text-white"
//                   : "bg-slate-200 text-blue-700"
//               } p-1 text-xs rounded-full px-2 mr-1`}
//             >
//               No tags
//             </span>
//           )}
//           {hovered && (
//             <div className="relative">
//               <EditOutlined
//                 onClick={() => {
//                   setIsOpened(!isOpened);
//                 }}
//                 sx={{ fontSize: 19 }}
//                 className={`${
//                   darkMode[1].isSelected ? "text-blue-400" : "text-slate-800"
//                 } cursor-pointer`}
//               />
//               {isOpened && <TagsMenu onClickedTag={onClickedTag} />}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
//   function TagsMenu({
//     onClickedTag,
//   }: {
//     onClickedTag: (tag: SingleTagType) => void;
//   }) {
//     const {
//       darkModeObject: { darkMode },
//       allTagsObject: { allTags },
//       selectedTagsObject: { selectedTags },
//     } = useGlobalContext();
//     // ----------------------------------------
//     return (
//       <ul
//         className={`${
//           darkMode[1].isSelected
//             ? "bg-slate-700 border border-slate-400 text-slate-200"
//             : "bg-slate-100 border border-slate-500"
//         } absolute p-1 top-10 rounded-md flex flex-col gap-1 overflow-hidden`}
//       >
//         {allTags.map((tag) => (
//           <li
//             key={tag._id}
//             onClick={() => onClickedTag(tag)}
//             className={`
//               ${
//                 selectedTags.some(
//                   (t) => t.name.toLowerCase() === tag.name.toLocaleLowerCase()
//                 )
//                   ? `${
//                       darkMode[1].isSelected ? "bg-slate-500" : "bg-slate-300"
//                     }`
//                   : ""
//               }
//               ${
//                 darkMode[1].isSelected
//                   ? "hover:bg-slate-800"
//                   : "hover:bg-slate-400"
//               } py-2 px-4 select-none cursor-pointer transition-all rounded-md`}
//           >
//             {tag.name}
//           </li>
//         ))}
//       </ul>
//     );
//   }
// }

// ====================================================

// function Description({
//   singleNote,
//   setSingleNote,
// }: {
//   singleNote: SingleNoteType;
//   setSingleNote: React.Dispatch<
//     React.SetStateAction<SingleNoteType | undefined>
//   >;
// }) {
//   const {
//     darkModeObject: { darkMode },
//     allNotesObject: { allNotes, setAllNotes },
//   } = useGlobalContext();
//   // const [isHovered, setisHovered] = useState(second)

//   function onUpdateDescription(event: React.ChangeEvent<HTMLTextAreaElement>) {
//     const newSingleNote = { ...singleNote, description: event.target.value };
//     setSingleNote(newSingleNote);

//     const newAllnotes = allNotes.map((note) => {
//       if (note._id === singleNote._id) {
//         return newSingleNote;
//       }
//       return note;
//     });
//     setAllNotes(newAllnotes);
//   }

//   // ===============================================================
//   return (
//     <div className="flex gap-2 text-[12px] mt-8 group">
//       <DescriptionOutlined
//         sx={{ fontSize: 18 }}
//         className={`text-slate-400 group-hover:text-blue-400 mt-[4px]`}
//       />
//       <textarea
//         placeholder="Description"
//         className={`p-2 rounded-md w-full text-sm outline-none border border-slate-400 group-hover:border-blue-400 resize-none ${
//           darkMode[1].isSelected ? "bg-slate-700 text-white" : "bg-slate-50"
//         }`}
//         value={singleNote.description}
//         onChange={onUpdateDescription}
//       />
//     </div>
//   );
// }
