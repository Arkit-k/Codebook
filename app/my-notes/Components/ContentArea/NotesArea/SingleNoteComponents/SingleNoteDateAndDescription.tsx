import { useGlobalContext } from "@/Context/ContextApi";

export function NoteDate({ creationDate }: { creationDate: string }) {
  function getDateOnly(dateTimeString: string) {
    const [date] = dateTimeString.split(", ");
    return date;
  }
  return (
    <div className="text-slate-500 text-[12px] flex gap-1 font-light mx-4 mt-3">
      <span className="">{getDateOnly(creationDate)}</span>
    </div>
  );
}

export function NoteDescription({ description }: { description: string }) {
  const {
    darkModeObject: { darkMode },
  } = useGlobalContext();
  return (
    <div
      className={`${
        darkMode[1].isSelected ? "text-slate-300" : "text-slate-600"
      }  text-[13px] mt-4 mx-4 line-clamp-1`}
    >
      {description}
    </div>
  );
}
