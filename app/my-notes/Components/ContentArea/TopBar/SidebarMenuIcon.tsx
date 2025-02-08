import { useGlobalContext } from "@/Context/ContextApi";
import { CloseOutlined, MenuOutlined } from "@mui/icons-material";
import React from "react";

function SidebarMenuIcon() {
  const {
    openSidebarObject: { openSidebar, setOpenSidebar },
  } = useGlobalContext();
  return (
    <div className="cursor-pointer hidden max-lg:block">
      {!openSidebar ? (
        <MenuOutlined
          onClick={() => setOpenSidebar(!openSidebar)}
          // className="text-red-500 cursor-pointer md:hidden"
          className="text-stone-900 cursor-pointer hidden max-lg:block"
        />
      ) : (
        <CloseOutlined
          onClick={() => setOpenSidebar(!openSidebar)}
          // className="text-slate-500 cursor-pointer md:hidden"
          className="text-stone-200 "
        />
      )}
    </div>
  );
}

export default SidebarMenuIcon;
