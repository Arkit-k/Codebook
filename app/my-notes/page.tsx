import React from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import ContentArea from "./Components/ContentArea/ContentArea";
import ContentNoteModal from "./Components/ContentNote/ContentNoteModal";
import { Toaster } from "react-hot-toast";
import { DeleteNotePermanently } from "./Components/ContentArea/NotesArea/SingleNoteComponents/DeleteNotePermanently";
import { DeleteAllTrashedNotesConfirmationWindow } from "./Components/ContentArea/NotesArea/DeleteAllTrashedNotesConfirmationWindow";
import { TagsWindow } from "./Components/Sidebar/components/TagsWindowModal/TagsWindow";

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
    </div>
  );
};

export default page;
