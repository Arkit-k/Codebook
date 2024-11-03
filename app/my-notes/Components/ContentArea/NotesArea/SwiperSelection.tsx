import React, { useEffect, useState } from "react";
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
    openNewTagsWindowObject: { setOpenNewTagsWindow },
    allTagsObject: { allTags },
  } = useGlobalContext();

  const [tagsSelected, setTagsSelected] = useState<boolean[]>([]);

  // initially get all tags and set selected to false other than ALL -----------------------------
  useEffect(() => {
    if (allTags) {
      const newTagsSelected = Array(allTags.length).fill(false);
      newTagsSelected[0] = true;
      setTagsSelected(newTagsSelected);
    }
  }, [allTags]);

  // -----------------------------------------------
  function handleTagClick(index: number) {
    const newTagsSelected = [...tagsSelected];
    // if clicked all, turn all tags to false
    if (index === 0) {
      newTagsSelected[0] = true;
      for (let i = 1; i < newTagsSelected.length; i++) {
        newTagsSelected[i] = false;
      }
      setTagsSelected(newTagsSelected);
      return;
    } else {
      newTagsSelected[0] = false;
      newTagsSelected[index] = !newTagsSelected[index];
      setTagsSelected(newTagsSelected);
    }
    // if all tags are false, turn first one to true
    if (newTagsSelected.every((tag) => !tag)) {
      newTagsSelected[0] = true;
      setTagsSelected(newTagsSelected);
    }
  }

  // ===========================================================
  return (
    <div
      className={`${
        darkMode[1].isSelected ? "bg-slate-900 text-slate-400" : "bg-white"
      } p-3 rounded-lg flex gap-5 justify-between`}
    >
      <div className="overflow-x-auto pb-1">
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
          {allTags.map((tag, index) => (
            <SwiperSlide
              key={index}
              className={`${
                tagsSelected[index] ? "bg-blue-500 text-white" : ""
              }`}
              onClick={() => handleTagClick(index)}
            >
              {tag.name}
            </SwiperSlide>
          ))}
          {/* <SwiperSlide className="bg-blue-600 p-1 rounded-md text-white">
            All
          </SwiperSlide>
          <SwiperSlide className="">Slide 2</SwiperSlide>
          <SwiperSlide className="">Slide 3</SwiperSlide>
          <SwiperSlide className="">Slide 4</SwiperSlide>
          <SwiperSlide className="">Slide 5</SwiperSlide>
          <SwiperSlide className="">Slide 6</SwiperSlide>
          <SwiperSlide className="">Slide 7</SwiperSlide>
          <SwiperSlide className="">Slide 8</SwiperSlide>
          <SwiperSlide className="">Slide 9</SwiperSlide> */}
        </Swiper>
      </div>
      <button
        onClick={() => setOpenNewTagsWindow(true)}
        className="bg-blue-600 rounded-md px-3 flex gap-1 items-center text-white"
      >
        <AddOutlined sx={{ fontSize: 18 }} />
        <span>Tag</span>
      </button>
    </div>
  );
}
