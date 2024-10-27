import { SingleNoteType } from "@/app/types/Types";
import { useGlobalContext } from "@/Context/ContextApi";
import { FavoriteBorderOutlined } from "@mui/icons-material";

export function NoteHeader({
  title,
  note,
}: {
  title: string;
  isFavorite: boolean;
  note: SingleNoteType;
}) {
  const {
    openContentNoteObject: { setOpenContentNote },
    selectedNoteObject: { setSelectedNote },
  } = useGlobalContext();
  return (
    <div className="flex justify-between mx-4">
      <div
        className="font-bold text-lg w-[87%] cursor-pointer hover:text-blue-500"
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

      <FavoriteBorderOutlined className="text-blue-500 cursor-pointer" />
    </div>
  );
}
