import { useGlobalContext } from "@/Context/ContextApi";
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
  } = useGlobalContext();

  return (
    <div className="overflow-hidden text-sm my-5">
      <SyntaxHighlighter
        language={language}
        style={darkMode[1].isSelected ? tomorrowNightBlue : monoBlue}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};
