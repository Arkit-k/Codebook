import { SingleNoteType } from "@/app/types/Types";
import { useGlobalContext } from "@/Context/ContextApi";
import { Favorite, FavoriteBorderOutlined } from "@mui/icons-material";
import { Checkbox } from "@mui/material";

export function NoteHeader({
  id,
  title,
  note,
  isFavorite,
  isTrashed,
}: {
  id: string;
  title: string;
  isFavorite: boolean;
  note: SingleNoteType;
  isTrashed: boolean;
}) {
  const {
    openContentNoteObject: { setOpenContentNote },
    selectedNoteObject: { setSelectedNote },
    allNotesObject: { setAllNotes },
  } = useGlobalContext();

  async function handleClickedCheckbox() {
    const currentFavorite = isFavorite;
    const newFavorite = !currentFavorite;

    try {
      const response = await fetch(`api/snippets?snippetId=${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ isFavorite: newFavorite }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const updatedNote = await response.json();

      setAllNotes((prev) =>
        prev.map((note) =>
          note._id === id ? { ...note, isFavorite: newFavorite } : note
        )
      );
    } catch (error) {
      console.error("error updating favorite note status: ", error);
    }

    // const newAllNotes = allNotes.map((note) => {
    //   if (note._id === id) {
    //     return { ...note, isFavorite: newFavorite };
    //   }
    //   return note;
    // });
    // setAllNotes(newAllNotes);
  }

  // ========================================================
  return (
    <div className="flex justify-between mx-4">
      <div
        className={`font-bold text-lg w-[87%] line-clamp-1 h-fit ${
          !isTrashed ? "hover:text-blue-500 cursor-pointer" : ""
        }`}
        onClick={() => {
          if (isTrashed) return;
          setOpenContentNote(true);
          setSelectedNote(note);
        }}
      >
        {!title ? <span>No title</span> : <span>{title}</span>}
      </div>

      {/* favorite button --------------------- */}
      {!isTrashed && (
        <Checkbox
          icon={
            <FavoriteBorderOutlined className="text-blue-500 cursor-pointer" />
          }
          checkedIcon={<Favorite className="text-blue-500 cursor-pointer" />}
          checked={isFavorite}
          onClick={handleClickedCheckbox}
        />
      )}
    </div>
  );
}
