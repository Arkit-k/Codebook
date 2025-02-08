"use client";
import { useGlobalContext } from "@/Context/ContextApi";
import { useUser } from "@clerk/nextjs";
import React from "react";

function ProfileUser() {
  const { user } = useUser();
  const imageUrl = user?.imageUrl;
  const {
    darkModeObject: { darkMode },
  } = useGlobalContext();

  const loading = (
    <div className="w-9 h-9 rounded-full mb-[5px] bg-slate-200"></div>
  );

  const loadingUsername = (
    <span className="font-semibold bg-slate-100 h-4 w-[100px] rounded-full"></span>
  );
  const loadingUserEmail = (
    <span className="text-slate-500 text-[11px] bg-slate-100 h-2 w-[130px] rounded-full"></span>
  );

  // ========================================================================
  return (
    <div className="flex gap-3 items-center">
      {!user ? (
        loading
      ) : (
        <img
          src={imageUrl}
          alt={`${user?.firstName} ${user?.lastName}`}
          className="w-9 h-9 rounded-full mb-[5px]"
        />
      )}

      <div
        className={`flex flex-col max-md:hidden text-sm ${
          !user ? "gap-1" : ""
        }`}
      >
        {!user ? (
          loadingUsername
        ) : (
          <span
            className={`font-semibold ${
              darkMode[1].isSelected ? "text-white" : "text-black"
            }`}
          >
            {user?.lastName} {user?.firstName}
          </span>
        )}
        {!user ? (
          loadingUserEmail
        ) : (
          <span
            className={` text-[11px] ${
              darkMode[1].isSelected ? "text-slate-300" : "text-stone-900"
            }`}
          >
            {user?.emailAddresses[0].emailAddress}
          </span>
        )}
      </div>
    </div>
  );
}

export default ProfileUser;
