import React from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import ContentArea from "./Components/ContentArea/ContentArea";
import ContentNoteModal from "./Components/ContentNote/ContentNoteModal";

const page = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <ContentArea />
      <ContentNoteModal />
    </div>
  );
};

export default page;
