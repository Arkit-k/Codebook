import { useGlobalContext } from "@/Context/ContextApi";
import { FaCode } from "react-icons/fa";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  monoBlue,
  tomorrowNightBlue,
} from "react-syntax-highlighter/dist/esm/styles/hljs";

interface CodeBlockProps {
  code: string;
  language: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ code, language }) => {
  const {
    darkModeObject: { darkMode },
    showCodeModalObject: { setShowCodeModal },
    currentSelectedCodeObject: { setCurrentSelectedCode },
  } = useGlobalContext();

  return (
    <div className="overflow-hidden text-sm my-5 flex-1 relative">
      <SyntaxHighlighter
        language={language}
        className="h-full"
        style={darkMode[1].isSelected ? tomorrowNightBlue : monoBlue}
      >
        {code}
      </SyntaxHighlighter>
      {/* show code button ------------------------------------------------------------- */}
      {code.length > 0 && (
        <button
          onClick={() => {
            setShowCodeModal(true);
            setCurrentSelectedCode(code);
          }}
          className={`bg-stone-500 hover:bg-stone-700 transition-all py-2 px-3 rounded-full absolute text-white bottom-5 right-5 hover:shadow-md text-sm flex items-center gap-1`}
        >
          View code
          <FaCode size={18} />
        </button>
      )}
    </div>
  );
};
