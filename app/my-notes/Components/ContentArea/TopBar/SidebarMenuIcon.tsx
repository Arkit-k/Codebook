import { useGlobalContext } from "@/Context/ContextApi";
import { CloseOutlined, MenuOutlined } from "@mui/icons-material";
import React from "react";

function SidebarMenuIcon() {
  const {
    openSidebarObject: { openSidebar, setOpenSidebar },
  } = useGlobalContext();
  return (
    <>
      {!openSidebar ? (
        <MenuOutlined
          onClick={() => setOpenSidebar(!openSidebar)}
          // className="text-red-500 cursor-pointer md:hidden"
          className="text-slate-500 cursor-pointer hidden max-md:block"
        />
      ) : (
        <CloseOutlined
          onClick={() => setOpenSidebar(!openSidebar)}
          // className="text-slate-500 cursor-pointer md:hidden"
          className="text-slate-500 cursor-pointer hidden max-md:block"
        />
      )}
    </>
  );
}

export default SidebarMenuIcon;
