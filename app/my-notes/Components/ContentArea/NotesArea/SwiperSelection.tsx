import React from "react";
import { AddOutlined } from "@mui/icons-material";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { FreeMode } from "swiper/modules";
import { useGlobalContext } from "@/Context/ContextApi";

export default function SwiperSelection() {
  const {
    darkModeObject: { darkMode },
  } = useGlobalContext();
  // ===========================================================
  return (
    <div
      className={`${
        darkMode[1].isSelected ? "bg-slate-900 text-slate-400" : "bg-white"
      } p-3 rounded-lg flex gap-5 justify-between `}
    >
      <div className="overflow-x-auto">
        {/* <div className="overflow-x-auto w-[1112px]"> */}
        <Swiper
          slidesPerView="auto"
          spaceBetween={10}
          freeMode={true}
          // pagination={{
          //   clickable: true,
          // }}
          modules={[FreeMode]}
          // modules={[FreeMode, Pagination]}
          className="mySwiper w-fit"
        >
          <SwiperSlide className="bg-blue-600 p-1 rounded-md text-white">
            All
          </SwiperSlide>
          <SwiperSlide className="">Slide 2</SwiperSlide>
          <SwiperSlide className="">Slide 3</SwiperSlide>
          <SwiperSlide className="">Slide 4</SwiperSlide>
          <SwiperSlide className="">Slide 5</SwiperSlide>
          <SwiperSlide className="">Slide 6</SwiperSlide>
          <SwiperSlide className="">Slide 7</SwiperSlide>
          <SwiperSlide className="">Slide 8</SwiperSlide>
          <SwiperSlide className="">Slide 9</SwiperSlide>
        </Swiper>
      </div>
      <button className="bg-blue-600 rounded-md px-3 flex gap-1 items-center text-white">
        <AddOutlined sx={{ fontSize: 18 }} />
        <span>Tag</span>
      </button>
    </div>
  );
}
