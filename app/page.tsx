"use client";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import Img1 from "../assets/img1.png";
import Img2 from "../assets/img2.png";
import Img3 from "../assets/img3.png";
import Image from "next/image";

export default function Home() {
  return (
    <div
      className={`poppins flex flex-col bg-gradient-to-b from-white/90 to-blue-400/50 min-h-screen`}
    >
      <Navbar />
      <HeroSection />
      <Buttons2 />
      <ImagesSection />
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
    <div className="flex gap-2 items-center text-4xl">
      {/* <div className={`bg-[${mainColor}] p-[6px] rounded-md`}>
        <DataObjectIcon sx={{ fontSize: 27, color: "white" }} />
      </div> */}
      <span className="font-extrabold text-slate-600 ">{"{"}</span>
      <div className="flex gap-1 text-3xl sm:text-[23px]">
        <span className={`font-bold text-mainColor`}>Code</span>
        <span className="text-slate-600">Board</span>
        {/* <span className={`font-bold text-[${mainColor}]`}>Snippet</span>
        <span className="text-slate-600">Master</span> */}
      </div>
      <span className="font-extrabold text-slate-600 ">{"}"}</span>
    </div>
  );
}

function Buttons() {
  const { userId } = useAuth();
  return (
    <div className="max-sm:w-full max-sm:hidden">
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
          <Link href="/sign-in">
            <button
              className={`max-sm:w-full bg-mainColor p-[8px] px-6 text-sm text-white rounded-full`}
            >
              Sign in
            </button>
          </Link>
          <Link href="/sign-up">
            <button
              className={`max-sm:w-full text-sm border border-mainColor text-mainColor hover:bg-mainColor hover:text-white p-[8px] px-6 rounded-full`}
            >
              Sign up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

function Buttons2() {
  const { userId } = useAuth();
  return (
    <div className="w-[80%] mx-auto hidden max-sm:block mt-20">
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
          <Link href="/sign-in">
            <button
              className={`max-sm:w-full bg-mainColor hover:bg-blue-500 p-[8px] px-6 text-sm text-white rounded-full`}
            >
              Sign in
            </button>
          </Link>
          <Link href="/sign-up">
            <button
              className={`max-sm:w-full text-sm border bg-white border-mainColor text-mainColor hover:bg-mainColor hover:text-white p-[8px] px-6 rounded-full`}
            >
              Sign up
            </button>
          </Link>
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
      <div className="flex flex-col items-center mt-[50px] sm:mt-[120px] gap-6">
        <h1 className="font-bold text-2xl md:text-4xl text-center">
          Organize your code snippets
          <span className="text-blue-700"> Efficiently</span>
        </h1>
        <p className="text-center text-md md:text-lg w-[550px] max-sm:w-full text-black">
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

function ImagesSection() {
  return (
    <div className="*:object-contain flex flex-col gap-4 mt-16 mx-auto px-10 mb-10">
      <Image
        src={Img1}
        alt="code"
        className="object-cover w-full md:w-[90%] mx-auto"
      />
      <div className="flex gap-3 max-xl:flex-col mx-auto md:*:h-[380px]  md:*:w-[700px]">
        <Image src={Img2} alt="code" className="object-cover" />
        <Image src={Img3} alt="code" className="object-cover" />
      </div>
    </div>
  );
}
