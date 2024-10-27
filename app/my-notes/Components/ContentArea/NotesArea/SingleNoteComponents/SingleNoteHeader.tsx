import { SingleNoteType } from "@/app/types/Types";
import { useGlobalContext } from "@/Context/ContextApi";
import { Favorite, FavoriteBorderOutlined } from "@mui/icons-material";
import { Checkbox } from "@mui/material";

export function NoteHeader({
  id,
  title,
  note,
  isFavorite,
}: {
  id: string;
  title: string;
  isFavorite: boolean;
  note: SingleNoteType;
}) {
  const {
    openContentNoteObject: { setOpenContentNote },
    selectedNoteObject: { setSelectedNote },
    allNotesObject: { allNotes, setAllNotes },
  } = useGlobalContext();

  function handleClickedCheckbox() {
    const currentFavorite = isFavorite;
    const newFavorite = !currentFavorite;
    const newAllNotes = allNotes.map((note) => {
      if (note._id === id) {
        return { ...note, isFavorite: newFavorite };
      }
      return note;
    });
    setAllNotes(newAllNotes);
  }

  // ========================================================
  return (
    <div className="flex justify-between mx-4">
      <div
        className="font-bold text-lg w-[87%] cursor-pointer hover:text-blue-500 line-clamp-1 h-fit"
        onClick={() => {
          setOpenContentNote(true);
          setSelectedNote(note);
        }}
      >
        {!title ? (
          <span className="text-slate-400 hover:text-blue-500">No title</span>
        ) : (
          <span>{title}</span>
        )}
      </div>

      <Checkbox
        icon={
          <FavoriteBorderOutlined className="text-blue-500 cursor-pointer" />
        }
        checkedIcon={<Favorite className="text-blue-500 cursor-pointer" />}
        checked={isFavorite}
        onClick={handleClickedCheckbox}
      />
    </div>
  );
}
