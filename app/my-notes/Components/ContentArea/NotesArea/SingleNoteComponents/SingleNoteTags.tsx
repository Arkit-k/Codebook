import { SingleTagType } from "@/types/Types";
import { useGlobalContext } from "@/Context/ContextApi";

export function NoteTags({ tags }: { tags: SingleTagType[] }) {
  const {
    darkModeObject: { darkMode },
  } = useGlobalContext();

  return (
    <div
      className={`${
        darkMode[1].isSelected ? "" : ""
      } text-stone-500 text-[11px] mx-4 flex-wrap flex gap-1 mt-4`}
    >
      {tags.length === 0 && (
        <span
          className={`${
            darkMode[1].isSelected
              ? "bg-stone-700 text-white"
              : "bg-slate-200 text-white-700"
          } p-1 text-xs rounded-full px-2 mr-1`}
        >
          No Tags
        </span>
      )}
      {tags.map((tag, index) => (
        <span
          key={index}
          className={`${
            darkMode[1].isSelected
              ? "bg-stone-700 text-white"
              : "bg-slate-200 text-white-700"
          } p-1 text-xs rounded-full px-2 mr-1`}
        >
          {tag.name}
        </span>
      ))}
    </div>
  );
}
