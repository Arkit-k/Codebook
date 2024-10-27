import { getLanguageIcon } from "@/app/localData/Languages";
import { DeleteRounded } from "@mui/icons-material";

export function NoteFooter({ language }: { language: string }) {
  return (
    <div className="flex justify-between text-[13px] text-slate-400 mx-4 mt-3">
      {language ? (
        <div className="flex gap-1 items-center">
          {getLanguageIcon(language)}
          <span>{language}</span>
        </div>
      ) : (
        <span>No language selected</span>
      )}
      <DeleteRounded sx={{ fontSize: 17 }} className="cursor-pointer" />
    </div>
  );
}
