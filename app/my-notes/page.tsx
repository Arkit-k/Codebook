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

const page = () => {
  return (
    <div className="flex min-h-screen">
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            backgroundColor: "#3b82f6",
            color: "white",
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
    </div>
  );
};

export default page;
