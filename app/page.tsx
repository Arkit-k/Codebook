"use client";
import { useAuth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import HomeBg from "../assets/01.jpg";

export default function Home() {
  return (
    <div
      className={`poppins flex flex-col bg-gradient-to-b from-white/90 to-black/90 h-screen`}
    >
      <Navbar />
      <HeroSection />
    </div>
  );
}

function Navbar() {
  return (
    <div className="flex m-5 max-sm:mt-9 mx-8 items-center justify-between max-sm:flex-col">
      <Logo />
      <Buttons />
    </div>
  );
}

function Logo() {
  return (
    <div className="flex gap-2 items-center">
      {/* <div className={`bg-[${mainColor}] p-[6px] rounded-md`}>
        <DataObjectIcon sx={{ fontSize: 27, color: "white" }} />
      </div> */}
      <span className="font-extrabold text-slate-600 text-3xl">{"{"}</span>
      <div className="flex gap-1 text-[23px]">
        <span className={`font-bold text-mainColor`}>Code</span>
        <span className="text-slate-600">Board</span>
        {/* <span className={`font-bold text-[${mainColor}]`}>Snippet</span>
        <span className="text-slate-600">Master</span> */}
      </div>
      <span className="font-extrabold text-slate-600 text-3xl">{"}"}</span>
    </div>
  );
}

function Buttons() {
  const { userId } = useAuth();
  return (
    <div className="max-sm:w-full">
      {userId ? (
        <Link href="/my-notes">
          <button
            className={`max-sm:w-full bg-mainColor p-[8px] px-6 text-sm text-white rounded-full`}
          >
            Dashboard
          </button>
        </Link>
      ) : (
        <div className="flex gap-2 max-sm:flex-col max-sm:w-full max-sm:mt-8">
          <button
            className={`max-sm:w-full bg-mainColor p-[8px] px-6 text-sm text-white rounded-full`}
          >
            <Link href="/sign-in">Sign in</Link>
          </button>
          <button
            className={`text-sm border border-mainColor text-mainColor hover:bg-mainColor hover:text-white p-[8px] px-6 rounded-full`}
          >
            <Link href="/sign-up">Sign up</Link>
          </button>
        </div>
      )}
    </div>
  );
}

function HeroSection() {
  return (
    <>
      {/* bg image */}
      {/* <div className="h-full w-full -z-10 absolute">
        <Image src={HomeBg} alt="home" fill />
      </div> */}
      <div className="flex flex-col mx-16 items-center mt-[120px] gap-6">
        <h1 className="font-bold text-2xl md:text-4xl text-center">
          Organize your code snippets
          <span className="text-blue-700"> Efficiently</span>
        </h1>
        <p className="text-center text-md md:text-lg w-[450px] max-sm:w-full text-white">
          Store and save all your snippets. With tagging and search features,
          you can quickly find the snippet you need.
        </p>
        {/* <button
          className="block  px-9 py-3 text-md text-blue-400 transition focus:outline-none"
          type="button"
        >
          {`Let's get started`}
        </button> */}
      </div>
    </>
  );
}
