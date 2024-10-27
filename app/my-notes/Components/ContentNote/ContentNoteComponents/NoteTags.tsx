import { SingleNoteType, SingleTagType } from "@/app/types/Types";
import { useGlobalContext } from "@/Context/ContextApi";
import { EditOutlined, StyleOutlined } from "@mui/icons-material";
import { useEffect, useState } from "react";

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
  // ---------------------------------------------------------
  return (
    <div className="flex text-[13px] items-center gap-2 relative">
      <StyleOutlined
        sx={{ fontSize: 19 }}
        className={`${hovered ? "text-blue-400" : "text-slate-400"}`}
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
                    ? "bg-blue-700 text-white"
                    : "bg-slate-200 text-blue-700"
                } p-1 text-xs rounded-full px-3 mr-1`}
              >
                {tag.name}
              </span>
            ))
          ) : (
            <span
              className={`${
                darkMode[1].isSelected
                  ? "bg-blue-700 text-white"
                  : "bg-slate-200 text-blue-700"
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
                  darkMode[1].isSelected ? "text-blue-400" : "text-slate-800"
                } cursor-pointer`}
              />
              {/* show tags menu -------------------------------------------------- */}
              {isOpened && <TagsMenu onClickedTag={onClickedTag} />}
            </div>
          )}
        </div>
      </div>
    </div>
  );
  // ----------------------------------------------------------
  function TagsMenu({
    onClickedTag,
  }: {
    onClickedTag: (tag: SingleTagType) => void;
  }) {
    const {
      darkModeObject: { darkMode },
      allTagsObject: { allTags },
      selectedTagsObject: { selectedTags },
    } = useGlobalContext();
    // ----------------------------------------
    return (
      <ul
        className={`${
          darkMode[1].isSelected
            ? "bg-slate-700 border border-slate-400 text-slate-200"
            : "bg-slate-100 border border-slate-500"
        } absolute p-1 top-10 rounded-md flex flex-col gap-1 overflow-hidden z-50`}
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
                      darkMode[1].isSelected ? "bg-slate-500" : "bg-slate-300"
                    }`
                  : ""
              }
              ${
                darkMode[1].isSelected
                  ? "hover:bg-slate-800"
                  : "hover:bg-slate-400"
              } py-2 px-4 select-none cursor-pointer transition-all rounded-md`}
          >
            {tag.name}
          </li>
        ))}
      </ul>
    );
  }
}
