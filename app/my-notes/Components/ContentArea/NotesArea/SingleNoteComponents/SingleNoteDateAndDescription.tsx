import { useGlobalContext } from "@/Context/ContextApi";

export function NoteDate({ creationDate }: { creationDate: string }) {
  return (
    <div className="text-slate-500 text-[12px] flex gap-1 font-light mx-4 mt-3">
      <span className="">{creationDate}</span>
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
      }  text-[13px] mt-4 mx-4`}
    >
      {description}
    </div>
  );
}
