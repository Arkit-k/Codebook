"use client";
import React from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import ContentArea from "./Components/ContentArea/ContentArea";
import ContentNoteModal from "./Components/ContentNote/ContentNoteModal";
import { Toaster } from "react-hot-toast";
import { DeleteNotePermanently } from "./Components/ContentArea/NotesArea/SingleNoteComponents/DeleteNotePermanently";
import { DeleteAllTrashedNotesConfirmationWindow } from "./Components/ContentArea/NotesArea/DeleteAllTrashedNotesConfirmationWindow";
import { TagsWindow } from "./Components/Sidebar/components/TagsWindowModal/TagsWindow";
import { AddTagWindow } from "./Components/Sidebar/components/TagsWindowModal/AddTagWindow";
import LogoutConfirmationWindow from "./Components/Sidebar/components/LogoutConfirmationWindow";
import ShowCodeModal from "./Components/ContentArea/NotesArea/SingleNoteComponents/ShowCodeModal";
import { useGlobalContext } from "@/Context/ContextApi"; // Import context

const Page = () => {
  const { darkModeObject: { darkMode } } = useGlobalContext(); // Get dark mode state

  return (
    <div className={`flex min-h-screen transition-all ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            backgroundColor: darkMode ? "#202020" : "#ffffff",
            color: darkMode ? "white" : "black",
          },
        }}
      />
      <Sidebar />
      <ContentArea />
      <ContentNoteModal />
      <DeleteNotePermanently />
      <DeleteAllTrashedNotesConfirmationWindow />
      <TagsWindow />
      <AddTagWindow />
      <LogoutConfirmationWindow />
      <ShowCodeModal />
    </div>
  );
};

export default Page;
