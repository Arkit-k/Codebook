import React from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import ContentArea from "./Components/ContentArea/ContentArea";
import ContentNoteModal from "./Components/ContentNote/ContentNoteModal";
import { Toaster } from "react-hot-toast";

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
    </div>
  );
};

export default page;
