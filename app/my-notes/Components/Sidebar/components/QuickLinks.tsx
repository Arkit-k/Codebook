import { useGlobalContext } from "@/Context/ContextApi";

export function QuickLinks() {
  const {
    sideBarMenuObject: { sideBarMenu, setSideBarMenu },
    openSidebarObject: { openSidebar, setOpenSidebar },
    tagsAndLogoutMenuObject: { tagsAndLogoutMenu },
    openTagsWindowObject: { setOpenTagsWindow },
  } = useGlobalContext();

  function clickedMenu(index: number) {
    if (openSidebar) setOpenSidebar(false);
    const updatedSideBarMenu = sideBarMenu.map((menu, i) => {
      if (i === index) {
        return { ...menu, isSelected: true };
      } else {
        return { ...menu, isSelected: false };
      }
    });
    setSideBarMenu(updatedSideBarMenu);
  }

  function clickedMenu2(index: number) {
    if (index === 0) {
      setOpenTagsWindow(true);
    } else if (index === 1) {
      console.log("logout");
    }
  }

  // =====================================================
  return (
    <div className="mt-20 text-sm ">
      <div className="font-bold text-slate-400">Links</div>
      <ul className="text-slate-400 mt-4 flex flex-col gap-2">
        {sideBarMenu.map((menu, index) => (
          <li
            key={index}
            onClick={() => clickedMenu(index)}
            className={`flex cursor-pointer select-none gap-1 items-center p-[7px] px-2 w-[80%] rounded-md
            ${menu.isSelected ? "bg-blue-400 text-white" : "text-slate-400"}
              `}
          >
            {menu.icons}
            <span>{menu.name}</span>
          </li>
        ))}
      </ul>
      <ul className="text-slate-400 mt-5 flex flex-col gap-2">
        {tagsAndLogoutMenu.map((menu, index) => (
          <li
            key={index}
            onClick={() => clickedMenu2(index)}
            className={`flex cursor-pointer select-none gap-1 items-center p-[7px] px-2 w-[80%] rounded-md hover:text-blue-500
            `}
          >
            {menu.icons}
            <span>{menu.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
