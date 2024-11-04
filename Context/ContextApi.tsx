"use client";

import {
  CodeLanguageCounterType,
  DarkModeType,
  GlobalContextType,
  SideBarMenu,
  SingleCodeLanguageType,
  SingleNoteType,
  SingleTagType,
} from "@/app/types/Types";
import {
  BorderAll,
  DarkMode,
  DeleteOutlineOutlined,
  FavoriteBorder,
  LightMode,
  Logout,
  LogoutOutlined,
  StyleOutlined,
} from "@mui/icons-material";
import { createContext, useContext, useEffect, useState } from "react";

// create context ==========================================================
const ContextProvider = createContext<GlobalContextType>({
  sideBarMenuObject: {
    sideBarMenu: [],
    setSideBarMenu: () => {},
  },
  darkModeObject: {
    darkMode: [],
    setDarkMode: () => {},
  },
  openSidebarObject: {
    openSidebar: false,
    setOpenSidebar: () => {},
  },
  openContentNoteObject: {
    openContentNote: false,
    setOpenContentNote: () => {},
  },
  isMobileObject: {
    isMobile: false,
    setIsMobile: () => {},
  },
  allNotesObject: {
    allNotes: [],
    setAllNotes: () => {},
  },
  selectedNoteObject: {
    selectedNote: null,
    setSelectedNote: () => {},
  },
  isNewNoteObject: {
    isNewNote: false,
    setIsNewNote: () => {},
  },
  allTagsObject: {
    allTags: [],
    setAllTags: () => {},
  },
  selectedTagsObject: {
    selectedTags: [],
    setSelectedTags: () => {},
  },
  selectedLanguageObject: {
    selectedLanguage: null,
    setSelectedLanguage: () => {},
  },
  openDeleteConfirmationObject: {
    openDeleteConfirmationWindow: false,
    setOpenDeleteConfirmationWindow: () => {},
  },
  noteToDeleteObject: {
    noteToDelete: null,
    setNoteToDelete: () => {},
  },
  openDeleteAllNotesConfirmationObject: {
    openDeleteAllNotesConfirmationWindow: false,
    setOpenDeleteAllNotesConfirmationWindow: () => {},
  },
  codeLanguageCounterObject: {
    codeLanguageCounter: [],
    setCodeLanguageCounter: () => {},
  },
  openTagsWindowObject: {
    openTagsWindow: false,
    setOpenTagsWindow: () => {},
  },
  tagsAndLogoutMenuObject: {
    tagsAndLogoutMenu: [],
    setTagsAndLogoutMenu: () => {},
  },
  openNewTagsWindowObject: {
    openNewTagsWindow: false,
    setOpenNewTagsWindow: () => {},
  },
  selectedTagToEditObject: {
    selectedTagToEdit: null,
    setSelectedTagToEdit: () => {},
  },
});

// values ===============================================================
const sideBarMenuItems = [
  {
    id: 1,
    name: "All Snippets",
    isSelected: true,
    icons: <BorderAll sx={{ fontSize: 18 }} />,
  },
  {
    id: 2,
    name: "Favorites",
    isSelected: false,
    icons: <FavoriteBorder sx={{ fontSize: 18 }} />,
  },
  {
    id: 3,
    name: "Trash",
    isSelected: false,
    icons: <DeleteOutlineOutlined sx={{ fontSize: 18 }} />,
  },
  {
    id: 4,
    name: "Log Out",
    isSelected: false,
    icons: <Logout sx={{ fontSize: 18 }} />,
  },
];

const darkModeItems = [
  {
    id: 1,
    icon: <LightMode sx={{ fontSize: 18 }} />,
    isSelected: true,
  },
  {
    id: 2,
    icon: <DarkMode sx={{ fontSize: 18 }} />,
    isSelected: false,
  },
];

const tagsAndLogoutMenuItems = [
  {
    id: 1,
    name: "Tags",
    isSelected: false,
    icons: <StyleOutlined sx={{ fontSize: 18 }} />,
  },
  {
    id: 2,
    name: "Log out",
    isSelected: false,
    icons: <LogoutOutlined sx={{ fontSize: 18 }} />,
  },
];

// ===============================================================
export default function GlobalContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sideBarMenu, setSideBarMenu] =
    useState<SideBarMenu[]>(sideBarMenuItems);

  const [darkMode, setDarkMode] = useState<DarkModeType[]>(darkModeItems);
  const [openSidebar, setOpenSidebar] = useState(false);
  const [openContentNote, setOpenContentNote] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [allNotes, setAllNotes] = useState<SingleNoteType[]>([]);
  const [selectedNote, setSelectedNote] = useState<SingleNoteType | null>(null);
  const [isNewNote, setIsNewNote] = useState(false);
  const [allTags, setAllTags] = useState<SingleTagType[]>([]);
  const [selectedTags, setSelectedTags] = useState<SingleTagType[]>([]);
  const [selectedLanguage, setSelectedLanguage] =
    useState<SingleCodeLanguageType | null>(null);
  const [openDeleteConfirmationWindow, setOpenDeleteConfirmationWindow] =
    useState(false);
  const [noteToDelete, setNoteToDelete] = useState<string | null>(null);
  const [
    openDeleteAllNotesConfirmationWindow,
    setOpenDeleteAllNotesConfirmationWindow,
  ] = useState(false);
  const [codeLanguageCounter, setCodeLanguageCounter] = useState<
    CodeLanguageCounterType[]
  >([]);
  const [openTagsWindow, setOpenTagsWindow] = useState(false);
  const [openNewTagsWindow, setOpenNewTagsWindow] = useState(false);
  const [tagsAndLogoutMenu, setTagsAndLogoutMenu] = useState<SideBarMenu[]>(
    tagsAndLogoutMenuItems
  );
  const [selectedTagToEdit, setSelectedTagToEdit] =
    useState<SingleTagType | null>(null);
  // ================================================================

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 640);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    function updateAllNotes() {
      const allNotes = [
        {
          _id: "1",
          title: "this is a note",
          isFavorite: false,
          tags: [
            { _id: "1", name: "Tag1" },
            { _id: "2", name: "Tag2" },
          ],
          description: "this is a note",
          code: `
          import React from 'react';

          function HelloWorld(){
            return <h1>Hello</h1>
          }
            export default HelloWorld
          `,
          language: "",
          creationDate: "2024-01-02",
          isTrash: false,
        },
        {
          _id: "2",
          title: "this is a note2",
          isFavorite: false,
          tags: [],
          description: "this is a note2",
          code: `
          import React from 'react';

          function HelloWorld(){
            return <h1>Hello</h1>
          }
            export default HelloWorld
          `,
          language: "",
          creationDate: "2024-01-02",
          isTrash: false,
        },
      ];
      setTimeout(() => {
        setAllNotes(allNotes);
      }, 1200);
    }

    function updateAllTags() {
      const allTags = [
        { _id: "0", name: "All" },
        { _id: "1", name: "Tag1" },
        { _id: "2", name: "Tag2" },
        { _id: "3", name: "Tag3" },
        { _id: "4", name: "Tag4" },
        { _id: "5", name: "Tag5" },
        { _id: "6", name: "Tag6" },
      ];
      setAllTags(allTags);
    }

    updateAllNotes();
    updateAllTags();
  }, []);

  useEffect(() => {
    setSelectedTags(selectedNote?.tags || []);
  }, [selectedNote]);

  // for language count
  useEffect(() => {
    const languageCounts: Record<string, number> = {};
    allNotes.forEach((note) => {
      const language = note.language.toLowerCase();
      if (language) {
        if (languageCounts[language]) {
          languageCounts[language]++;
        } else {
          languageCounts[language] = 1;
        }
      }
    });

    // convert to array
    const convertedLanguageCounts: CodeLanguageCounterType[] = Object.entries(
      languageCounts
    )
      .map(([language, count]) => ({
        language,
        count,
      }))
      .sort((a, b) => b.count - a.count);
    setCodeLanguageCounter(convertedLanguageCounts);
  }, [allNotes]);

  // ==========================================================
  return (
    <ContextProvider.Provider
      value={{
        sideBarMenuObject: { sideBarMenu, setSideBarMenu },
        darkModeObject: { darkMode, setDarkMode },
        openSidebarObject: { openSidebar, setOpenSidebar },
        openContentNoteObject: { openContentNote, setOpenContentNote },
        isMobileObject: { isMobile, setIsMobile },
        allNotesObject: { allNotes, setAllNotes },
        selectedNoteObject: { selectedNote, setSelectedNote },
        isNewNoteObject: { isNewNote, setIsNewNote },
        allTagsObject: { allTags, setAllTags },
        selectedTagsObject: { selectedTags, setSelectedTags },
        selectedLanguageObject: { selectedLanguage, setSelectedLanguage },
        openDeleteConfirmationObject: {
          openDeleteConfirmationWindow,
          setOpenDeleteConfirmationWindow,
        },
        noteToDeleteObject: { noteToDelete, setNoteToDelete },
        openDeleteAllNotesConfirmationObject: {
          openDeleteAllNotesConfirmationWindow,
          setOpenDeleteAllNotesConfirmationWindow,
        },
        codeLanguageCounterObject: {
          codeLanguageCounter,
          setCodeLanguageCounter,
        },
        openTagsWindowObject: {
          openTagsWindow,
          setOpenTagsWindow,
        },
        tagsAndLogoutMenuObject: {
          tagsAndLogoutMenu,
          setTagsAndLogoutMenu,
        },
        openNewTagsWindowObject: {
          setOpenNewTagsWindow,
          openNewTagsWindow,
        },
        selectedTagToEditObject: {
          selectedTagToEdit,
          setSelectedTagToEdit,
        },
      }}
    >
      {children}
    </ContextProvider.Provider>
  );
}

export const useGlobalContext = () => {
  const context = useContext(ContextProvider);
  if (!context) {
    throw new Error("useGlobalContext must be within a GlobalContextProvider");
  }
  return context;
};
