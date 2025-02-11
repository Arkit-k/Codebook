"use client";
import { useGlobalContext } from "@/Context/ContextApi";
import { useClerk } from "@clerk/nextjs";
import React from "react";

function LogoutConfirmationWindow() {
  const { signOut } = useClerk();
  const {
    darkModeObject: { darkMode },
    showLogoutConfirmationModal: {
      showLogoutConfirmationModal,
      setShowLogoutConfirmationModal,
    },
  } = useGlobalContext();
  return (
    <div
      className={`fixed w-full h-screen flex items-center justify-center z-[500] ${
        darkMode ? "bg-black/70" : "bg-black/50"
      } ${showLogoutConfirmationModal ? "block no-doc-scroll" : "hidden"}`}
    >
      <div
        className={`h-[200px] max-md:w-[80%] max-lg:w-[50%] w-[40%] rounded-md p-4 overflow-scroll flex flex-col justify-between ${
          darkMode[1].isSelected
            ? "bg-text-c-900 border-[1px] bordertext-c-400 text-white"
            : "bg-white "
        }`}
      >
        <span className="text-xl font-bold">Logout?</span>
        <div className="flex justify-end *:py-2 *:px-3 *:rounded-md gap-3">
          <button
            className={`border ${
              darkMode[1].isSelected
                ? "border-text-c-500 hover:bg-text-c-800"
                : "border-text-c-400 hover:bg-text-c-200"
            }`}
            onClick={() => {
              setShowLogoutConfirmationModal(false);
            }}
          >
            Cancel
          </button>
          <button
            onClick={() => {
              setShowLogoutConfirmationModal(false);
              signOut({ redirectUrl: "/" });
            }}
            className="bg-red-500 hover:bg-red-700 text-white"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default LogoutConfirmationWindow;
