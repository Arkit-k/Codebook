import { useGlobalContext } from "@/Context/ContextApi";
import { ContentCopyOutlined, DoneAllOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { FaArrowDown, FaArrowUp, FaCode, FaSearch } from "react-icons/fa";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/theme-terminal";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/mode-javascript";

import { SingleCodeLanguageType, SingleNoteType } from "@/types/Types";
import { useEffect, useRef, useState } from "react";
import { allLanguages } from "@/utils/localData/Languages";

export function CodeEditor({
  singleNote,
  setSingleNote,
}: {
  singleNote: SingleNoteType;
  setSingleNote: (value: SingleNoteType) => void;
}) {
  const {
    darkModeObject: { darkMode },
    selectedLanguageObject: { selectedLanguage, setSelectedLanguage },
    selectedNoteObject: { selectedNote },
    allNotesObject: { allNotes, setAllNotes },
  } = useGlobalContext();

  const [isOpened, setIsOpened] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  // to get selected language ---------------------------------------------
  useEffect(() => {
    if (selectedNote) {
      const findLanguage = allLanguages.find(
        (language) =>
          language.name.toLocaleLowerCase() ===
          selectedNote.language.toLocaleLowerCase()
      );
      if (findLanguage) setSelectedLanguage(findLanguage);
    }
  }, [selectedNote]);

  // code editor handle change -----------------------------------------------
  function handleChange(code: string) {
    const newSingleNote = { ...singleNote, code };
    const updateAllNotes = allNotes.map((note) => {
      if (note._id === singleNote._id) {
        return newSingleNote;
      }
      return note;
    });
    setAllNotes(updateAllNotes);
    setSingleNote(newSingleNote);
  }

  // copy code ------------------------------------
  function clickedCopyBtn() {
    navigator.clipboard.writeText(singleNote.code);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1200);
  }
  // ======================================
  return (
    <div className="flex gap-2 text-[12px] mt-8 group">
      <FaCode
        size={16}
        className={`mt-[9px] text-stone-400 group-hover:textstone-400`}
      />
      <div
        className={`w-full overflow-scroll border border-stone-300 rounded-lg p-3 pt-16 relative group-hover:border-blue-400
          ${darkMode[1].isSelected ? "bg-stone-800" : "bg-stone-100 text-stone-700"}
          `}
      >
        {/* copy button ------------------------------------------------------------- */}
        <div className="absolute top-4 right-4 z-50 ">
          <IconButton disabled={isCopied}>
            {isCopied ? (
              <DoneAllOutlined
                sx={{ fontSize: 18 }}
                className={`${
                  darkMode[1].isSelected ? "text-white" : "text-stone-700"
                }`}
              />
            ) : (
              <ContentCopyOutlined
                onClick={() => clickedCopyBtn()}
                sx={{ fontSize: 18 }}
                className={`${
                  darkMode[1].isSelected ? "text-white" : "text-stone-700"
                }`}
              />
            )}
          </IconButton>
        </div>
        {/* language selector -------------------------------------------- */}
        <div
          className={`flex gap-2 justify-between p-[6px] px-3 rounded-md items-center text-[12px] mt-3 absolute top-1 left-3 cursor-pointer ${
            darkMode[1].isSelected
              ? "bg-stone-600 text-black hover:bg-black"
              : "bg-stone-750 text-stone-700"
          }`}
          onClick={() => setIsOpened(!isOpened)}
        >
          <div>
            {!selectedLanguage ? (
              <span className="">Select language</span>
            ) : (
              <div className={`flex gap-1 items-center`}>
                {selectedLanguage?.icon}
                <span className="mt-[1px]">{selectedLanguage?.name}</span>
                {/* {getLanguageIcon(selectedNote?.language)}
                <span className="mt-[1px]">{selectedNote?.language}</span> */}
              </div>
            )}
          </div>
          {isOpened ? <FaArrowUp size={12} /> : <FaArrowDown size={12} />}
        </div>
        {/* language drop down menu ------------------------------------------------------ */}

        {isOpened && <LanguageMenu />}
        {/* editor ---------------------------------------------------- */}
        <AceEditor
          placeholder="Placeholder Text"
          mode="javascript"
          theme="terminal"
          name="blah2"
          width="100%"
          height="300px"
          fontSize={14}
          lineHeight={19}
          showPrintMargin={false}
          showGutter={false}
          highlightActiveLine={false}
          // className={`bg-transparent`}
          // className={`${
          //   darkMode[1].isSelected
          //     ? "bg-gray-900 text-slate-200"
          //     : "bg-slate-200  text-black"
          // }`}
          value={singleNote?.code}
          onChange={handleChange}
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
  // =========================================================
  function LanguageMenu() {
    const textRef = useRef<HTMLInputElement>(null); // for search input
    const [filteredLanguages, setFilteredLanguages] = useState(allLanguages);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
      textRef.current?.focus();
    }, [isOpened]);

    const menuRef = useRef<HTMLDivElement>(null);
    const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(event.target.value.toLowerCase());
    };

    useEffect(() => {
      // update filters on search
      const filtered = allLanguages.filter((language) =>
        language.name.toLowerCase().includes(searchQuery)
      );
      setFilteredLanguages(filtered);
    }, [searchQuery]);

    // to close drop down menu ----------------------------------------------------
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpened(false);
      }
    };
    useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

    // select language function -----------------------------------------------------
    // useeffect in note modal file after change
    function clickedLanguage(language: SingleCodeLanguageType) {
      setSelectedLanguage(language);
      setIsOpened(false);
    }

    // -----------------------------------------------------
    return (
      <div
        ref={menuRef}
        className={`flex flex-col h-[220px] w-[250px] gap-2 justify-between p-[6px] px-1 rounded-md items-center text-[12px] mt-3 absolute top-10 left-3 border z-50  ${
          darkMode[1].isSelected
            ? "bg-stone-900 text-white border-stone-400"
            : "bg-stone-100 text-slate-800 border-stone-500"
        }`}
      >
        <div
          className={`flex w-full gap-1 p-2 items-center rounded-md ${
            darkMode[1].isSelected
              ? "bg-stone-800"
              : "bg-stone-300 stonestone-900 "
          }`}
        >
          <FaSearch />
          <input
            ref={textRef}
            placeholder="Search..."
            className="bg-transparent outline-none"
            onChange={onChangeSearch}
            value={searchQuery}
          />
        </div>
        <div className="flex-1 overflow-x-auto w-full">
          {filteredLanguages?.map((language) => (
            <div
              onClick={() => clickedLanguage(language)}
              key={language.id}
              className={`flex mb-2 gap-2 bg-transparent p-[6px] px-2 rounded-md items-center cursor-pointer ${
                darkMode[1].isSelected
                  ? "hover:bg-stone-800"
                  : "hover:bg-stone-300"
              }`}
            >
              {language?.icon}
              <span className="">{language?.name}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
