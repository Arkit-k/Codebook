import { useGlobalContext } from "@/Context/ContextApi";

export function NoteDate({ creationDate }: { creationDate: string }) {
  const {
    darkModeObject: { darkMode },
  } = useGlobalContext();
  function getDateOnly(dateTimeString: string) {
    const [date] = dateTimeString.split(", ");
    return date;
  }
  return (
    <div
      className={`${
        darkMode[1].isSelected ? "text-stone-200" : "text-stone-700"
      } text-[12px] font-normal flex gap-1 mx-4`}
    >
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
        darkMode[1].isSelected ? "text-stone-300" : "text-stone-600"
      }  text-[13px] mt-4 mx-4 line-clamp-1`}
    >
      {description}
    </div>
  );
}
