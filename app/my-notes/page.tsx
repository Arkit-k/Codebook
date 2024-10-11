import { UserButton } from "@clerk/nextjs";
import React from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import ContentArea from "./Components/ContentArea/ContentArea";

const page = () => {
  return (
    <div className="flex">
      <Sidebar />
      <ContentArea />
    </div>
  );
};

export default page;
