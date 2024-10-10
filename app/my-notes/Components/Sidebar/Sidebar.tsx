import {
  BorderAll,
  DeleteOutlineOutlined,
  FavoriteBorder,
} from "@mui/icons-material";
import { FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiCplusplus } from "react-icons/si";

export default function Sidebar() {
  return (
    <div className="w-[20%] p-5 flex flex-col gap-2 h-screen pt-7 border-r">
      <Logo />
      <QuickLinks />
      <Languages />
    </div>
  );
}

function Logo() {
  return (
    <div className="flex gap-2 items-center">
      <span className="font-extrabold text-slate-600 text-3xl">{"{"}</span>
      <div className="flex gap-1 text-[23px]">
        <span className={`font-bold text-mainColor`}>Code</span>
        <span className="text-slate-600">Board</span>
      </div>
      <span className="font-extrabold text-slate-600 text-3xl">{"}"}</span>
    </div>
  );
}

function QuickLinks() {
  return (
    <div className="mt-20 text-sm">
      <div className="font-bold text-slate-400">Links</div>
      <ul className="text-slate-400 mt-4 flex flex-col gap-2">
        <li className="flex gap-1 items-center bg-purple-600 text-white p-[7px] px-2 rounded-md w-[60%]">
          <BorderAll sx={{ fontSize: 18 }} />
          <span>All snippets</span>
        </li>
        <li className="flex gap-1 items-center hover:bg-purple-600 hover:text-white p-[7px] px-2 rounded-md w-[60%]">
          <FavoriteBorder sx={{ fontSize: 18 }} />
          <span>Favourites</span>
        </li>
        <li className="flex gap-1 items-center hover:bg-purple-600 hover:text-white p-[7px] px-2 rounded-md w-[60%]">
          <DeleteOutlineOutlined sx={{ fontSize: 18 }} />

          <span>Trash</span>
        </li>
      </ul>
    </div>
  );
}

function Languages() {
  return (
    <div className="mt-12 text-sm">
      <div className="font-bold text-slate-400">Languages</div>
      <div className="mt-5 ml-2 text-slate-400 flex flex-col gap-4">
        <div className="flex justify-between">
          <div className="flex gap-1 items-center">
            <IoLogoJavascript size={15} /> Javascript
          </div>
          <span className="font-bold">3</span>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-1 items-center">
            <FaPython size={15} /> Python
          </div>
          <span className="font-bold">3</span>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-1 items-center">
            <SiCplusplus size={15} /> C++
          </div>
          <span className="font-bold">3</span>
        </div>
      </div>
    </div>
  );
}
