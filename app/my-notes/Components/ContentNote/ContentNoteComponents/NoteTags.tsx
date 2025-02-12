import { SingleNoteType, SingleTagType } from "@/types/Types";
import { useGlobalContext } from "@/Context/ContextApi";
import { EditOutlined, StyleOutlined } from "@mui/icons-material";
import { useEffect, useRef, useState } from "react";

export function NoteTags({
  singleNote,
  setSingleNote,
  isOpened,
  setIsOpened,
}: {
  singleNote: SingleNoteType;
  setSingleNote: React.Dispatch<
    React.SetStateAction<SingleNoteType | undefined>
  >;
  isOpened: boolean;
  setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [hovered, setHovered] = useState(false);
  // const [isOpened, setIsOpened] = useState(false);
  const {
    darkModeObject: { darkMode },
    selectedTagsObject: { selectedTags, setSelectedTags },
    allNotesObject: { allNotes, setAllNotes },
  } = useGlobalContext();

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpened) {
      setIsOpened(true);
    }
  }, [isOpened]);

  // function for selecting tags -------------------------------
  function onClickedTag(tag: SingleTagType) {
    if (selectedTags.some((t) => t.name === tag.name)) {
      setSelectedTags(selectedTags.filter((t) => t.name !== tag.name));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  }

  // set new tags ----------------------------------------------------
  useEffect(() => {
    const newSingleNote = { ...singleNote, tags: selectedTags }; // add new tags
    const newAllNotes = allNotes.map((note) => {
      if (note._id === singleNote._id) {
        return newSingleNote;
      }
      return note;
    });

    setAllNotes(newAllNotes);
    setSingleNote(newSingleNote);
  }, [selectedTags]);

  // to close drop down menu ----------------------------------------------------
  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpened(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  // ---------------------------------------------------------
  return (
    <div className="flex text-[13px] items-center gap-2 relative">
      <StyleOutlined
        sx={{ fontSize: 19 }}
        className={`${hovered ? "text-cyan-400" : "text-stone-400"}`}
      />
      <div
        className="flex justify-between w-full"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => {
          if (!isOpened) setHovered(false);
        }}
      >
        <div className="flex gap-2 items-center flex-wrap">
          {singleNote.tags.length > 0 ? (
            singleNote.tags.map((tag, index) => (
              <span
                key={index}
                className={`${
                  darkMode[1].isSelected
                    ? "bg-cyan-700 text-white"
                    : "bg-stone-200 text-cyan-700"
                } p-1 text-xs rounded-full px-3 mr-1`}
              >
                {tag.name}
              </span>
            ))
          ) : (
            <span
              className={`${
                darkMode[1].isSelected
                  ? "bg-cyan-700 text-white"
                  : "bg-stone-200 text-cyan-700"
              } p-1 text-xs rounded-full px-2 mr-1`}
            >
              No tags
            </span>
          )}
          {hovered && (
            <div className="relative">
              <EditOutlined
                onClick={() => {
                  setIsOpened(!isOpened);
                }}
                sx={{ fontSize: 19 }}
                className={`${
                  darkMode[1].isSelected ? "text-cyan-400" : "text-stone-800"
                } cursor-pointer`}
              />
              {/* show tags menu -------------------------------------------------- */}
              {isOpened && (
                <TagsMenu menuRef={menuRef} onClickedTag={onClickedTag} />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
  // ----------------------------------------------------------
  function TagsMenu({
    onClickedTag,
    menuRef,
  }: {
    onClickedTag: (tag: SingleTagType) => void;
    menuRef: any;
  }) {
    const {
      darkModeObject: { darkMode },
      allTagsObject: { allTags },
      selectedTagsObject: { selectedTags },
    } = useGlobalContext();
    // ----------------------------------------
    return (
      <ul
        ref={menuRef}
        className={`${
          darkMode[1].isSelected
            ? "bg-stone-700 border border-stone-400 text-slate-200"
            : "bg-stone-100 border border-stone-500 text-black"
        } absolute p-1 top-10 -left-10 rounded-md flex flex-col gap-1 overflow-auto z-[100] h-[350px]`}
      >
        {allTags.map((tag) => (
          <li
            key={tag._id}
            onClick={() => onClickedTag(tag)}
            className={`
              ${
                selectedTags.some(
                  (t) => t.name.toLowerCase() === tag.name.toLocaleLowerCase()
                )
                  ? `${
                      darkMode[1].isSelected ? "bg-stone-500" : "bg-stone-300"
                    }`
                  : ""
              }
              ${
                darkMode[1].isSelected
                  ? "hover:bg-stone-800"
                  : "hover:bg-stone-400"
              } py-2 px-4 select-none cursor-pointer transition-all rounded-md`}
          >
            {tag.name}
          </li>
        ))}
      </ul>
    );
  }
}
