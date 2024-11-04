export interface SideBarMenu {
  id: number;
  name: string;
  isSelected: boolean;
  icons: React.ReactNode;
}

export interface DarkModeType {
  id: number;
  icon: React.ReactNode;
  isSelected: boolean;
}

export interface SingleNoteType {
  _id: string;
  title: string;
  isFavorite: boolean;
  tags: SingleTagType[];
  // tags: string[];
  description: string;
  code: string;
  language: string;
  creationDate: string;
  isTrash: boolean;
}

export interface SingleTagType {
  _id: string;
  name: string;
}

export interface SingleCodeLanguageType {
  id: string;
  name: string;
  icon: React.ReactNode;
}

export interface CodeLanguageCounterType {
  language: string;
  count: number;
}

export interface GlobalContextType {
  sideBarMenuObject: {
    sideBarMenu: SideBarMenu[];
    setSideBarMenu: React.Dispatch<React.SetStateAction<SideBarMenu[]>>;
  };
  darkModeObject: {
    darkMode: DarkModeType[];
    setDarkMode: React.Dispatch<React.SetStateAction<DarkModeType[]>>;
  };
  openSidebarObject: {
    openSidebar: boolean;
    setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  };
  openContentNoteObject: {
    openContentNote: boolean;
    setOpenContentNote: React.Dispatch<React.SetStateAction<boolean>>;
  };

  isMobileObject: {
    isMobile: boolean;
    setIsMobile: React.Dispatch<React.SetStateAction<boolean>>;
  };
  allNotesObject: {
    allNotes: SingleNoteType[];
    setAllNotes: React.Dispatch<React.SetStateAction<SingleNoteType[]>>;
  };
  selectedNoteObject: {
    selectedNote: SingleNoteType | null;
    setSelectedNote: React.Dispatch<
      React.SetStateAction<SingleNoteType | null>
    >;
  };
  isNewNoteObject: {
    isNewNote: boolean;
    setIsNewNote: React.Dispatch<React.SetStateAction<boolean>>;
  };
  allTagsObject: {
    allTags: SingleTagType[];
    setAllTags: React.Dispatch<React.SetStateAction<SingleTagType[]>>;
  };
  selectedTagsObject: {
    selectedTags: SingleTagType[];
    setSelectedTags: React.Dispatch<React.SetStateAction<SingleTagType[]>>;
  };
  selectedLanguageObject: {
    selectedLanguage: SingleCodeLanguageType | null;
    setSelectedLanguage: React.Dispatch<
      React.SetStateAction<SingleCodeLanguageType | null>
    >;
  };
  openDeleteConfirmationObject: {
    openDeleteConfirmationWindow: boolean;
    setOpenDeleteConfirmationWindow: React.Dispatch<
      React.SetStateAction<boolean>
    >;
  };
  noteToDeleteObject: {
    noteToDelete: string | null;
    setNoteToDelete: React.Dispatch<React.SetStateAction<string | null>>;
  };
  openDeleteAllNotesConfirmationObject: {
    openDeleteAllNotesConfirmationWindow: boolean;
    setOpenDeleteAllNotesConfirmationWindow: React.Dispatch<
      React.SetStateAction<boolean>
    >;
  };
  codeLanguageCounterObject: {
    codeLanguageCounter: CodeLanguageCounterType[];
    setCodeLanguageCounter: React.Dispatch<
      React.SetStateAction<CodeLanguageCounterType[]>
    >;
  };
  openTagsWindowObject: {
    openTagsWindow: boolean;
    setOpenTagsWindow: React.Dispatch<React.SetStateAction<boolean>>;
  };
  tagsAndLogoutMenuObject: {
    tagsAndLogoutMenu: SideBarMenu[];
    setTagsAndLogoutMenu: React.Dispatch<React.SetStateAction<SideBarMenu[]>>;
  };
  openNewTagsWindowObject: {
    openNewTagsWindow: boolean;
    setOpenNewTagsWindow: React.Dispatch<React.SetStateAction<boolean>>;
  };
  selectedTagToEditObject: {
    selectedTagToEdit: SingleTagType | null;
    setSelectedTagToEdit: React.Dispatch<
      React.SetStateAction<SingleTagType | null>
    >;
  };
}
