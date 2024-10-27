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
      <span
        className="font-bold text-lg w-[87%] cursor-pointer hover:text-blue-500"
        onClick={() => {
          setOpenContentNote(true);
          setSelectedNote(note);
        }}
      >
        {title}
      </span>
      <FavoriteBorderOutlined className="text-blue-500 cursor-pointer" />
    </div>
  );
}
