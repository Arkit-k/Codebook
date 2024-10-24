import { useGlobalContext } from "@/Context/ContextApi";
import { ContentCopyOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { FaArrowDown, FaCode } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import AceEditor from "react-ace";
import { SingleNoteType } from "@/app/types/Types";

export function CodeEditor({ singleNote }: { singleNote: SingleNoteType }) {
  const {
    darkModeObject: { darkMode },
  } = useGlobalContext();
  return (
    <div className="flex gap-2 text-[12px] mt-8 group">
      <FaCode
        size={16}
        className={`mt-[9px] text-slate-400 group-hover:text-blue-400`}
      />
      <div className="w-full overflow-scroll border border-slate-300 rounded-lg p-3 pt-16 relative group-hover:border-blue-400">
        {/* copy button ------------------------------------------------------------- */}
        <div className="absolute top-4 right-4 z-50 ">
          <IconButton>
            <ContentCopyOutlined
              sx={{ fontSize: 18 }}
              className={`${
                darkMode[1].isSelected ? "text-white" : "text-slate-700"
              }`}
            />
          </IconButton>
        </div>
        {/* language drop down -------------------------------------------- */}
        <div
          className={`flex gap-2 justify-between p-[6px] px-3 rounded-md items-center text-[12px] mt-3 absolute top-1 left-3 ${
            darkMode[1].isSelected
              ? "bg-slate-600 text-white"
              : "bg-slate-300 text-slate-700"
          }`}
        >
          <div className={`flex gap-1 items-center`}>
            <SiJavascript size={15} />
            <span className="mt-[1px]">Javascript</span>
          </div>
          <FaArrowDown size={12} />
        </div>
        <AceEditor
          placeholder="Placeholder Text"
          mode="javascript"
          theme="github"
          name="blah2"
          width="100%"
          height="300px"
          fontSize={14}
          lineHeight={19}
          showPrintMargin={false}
          showGutter={false}
          highlightActiveLine={false}
          className={`
            ${
              darkMode[1].isSelected
                ? "bg-transparent text-slate-200"
                : "bg-white"
            }`}
          value={singleNote?.code}
          //           value={`function onLoad(editor) {
          //   console.log("i've loaded");
          // }`}
          setOptions={{
            enableBasicAutocompletion: false,
            enableLiveAutocompletion: false,
            enableSnippets: false,
            showLineNumbers: true,
            tabSize: 2,
          }}
        />
      </div>
    </div>
  );
}
