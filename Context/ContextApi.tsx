"use client";

import {
  DarkModeType,
  GlobalContextType,
  SideBarMenu,
  SingleNoteType,
} from "@/app/types/Types";
import {
  BorderAll,
  DarkMode,
  DeleteOutlineOutlined,
  FavoriteBorder,
  LightMode,
  Logout,
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
          id: "1",
          title: "this is a note",
          isFavorite: false,
          tags: ["tag1", "tag2"],
          description: "this is a note",
          code: `
          import React from 'react';

          function HelloWorld(){
            return <h1>Hello</h1>
          }
            export default HelloWorld
          `,
          language: "javascript",
          creationDate: "2024-01-02",
        },
        {
          id: "2",
          title: "this is a note2",
          isFavorite: false,
          tags: ["tag1", "tag2"],
          description: "this is a note2",
          code: `
          import React from 'react';

          function HelloWorld(){
            return <h1>Hello</h1>
          }
            export default HelloWorld
          `,
          language: "javascript",
          creationDate: "2024-01-02",
        },
        {
          id: "3",
          title: "this is a note3",
          isFavorite: false,
          tags: ["tag1", "tag2"],
          description: "this is a note3",
          code: `
          import React from 'react';

          function HelloWorld(){
            return <h1>Hello</h1>
          }
            export default HelloWorld
          `,
          language: "javascript",
          creationDate: "2024-01-02",
        },
      ];
      setTimeout(() => {
        setAllNotes(allNotes);
      }, 1200);
    }
    updateAllNotes();
  }, []);

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
