import { SingleNoteType } from "@/types/Types";
import { useGlobalContext } from "@/Context/ContextApi";
import { DescriptionOutlined } from "@mui/icons-material";

export function Description({
  singleNote,
  setSingleNote,
}: {
  singleNote: SingleNoteType;
  setSingleNote: React.Dispatch<
    React.SetStateAction<SingleNoteType | undefined>
  >;
}) {
  const {
    darkModeObject: { darkMode },
  } = useGlobalContext();
  // const [isHovered, setisHovered] = useState(second)

  function onUpdateDescription(event: React.ChangeEvent<HTMLTextAreaElement>) {
    const newSingleNote = { ...singleNote, description: event.target.value };
    setSingleNote(newSingleNote);

    // const newAllnotes = allNotes.map((note) => {
    //   if (note._id === singleNote._id) {
    //     return newSingleNote;
    //   }
    //   return note;
    // });
    // setAllNotes(newAllnotes);
  }

  // ===============================================================
  return (
    <div className="flex gap-2 text-[12px] mt-8 group">
      <DescriptionOutlined
        sx={{ fontSize: 18 }}
        className={`text-stone-400 group-hover:text-cyan-400 mt-[4px]`}
      />
      <textarea
        placeholder="Description"
        className={`p-2 rounded-md w-full text-sm outline-none border border-stone-300 group-hover:border-cyan-400 resize-none ${
          darkMode[1].isSelected ? "bg-stone-700 text-white" : "bg-stone-50"
        }`}
        value={singleNote.description}
        onChange={onUpdateDescription}
      />
    </div>
  );
}
