"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const HomeRecentSlider = ({ games }) => {
  const [translateX, setTranslateX] = useState(0);
  const handelTransition = (pos) => {
    if (translateX < 0 && translateX >= 100) {
      return;
    }
    if (pos === "right" && translateX < 100) {
      setTranslateX(translateX + 8);
    } else if (pos === "left" && translateX > 0) {
      setTranslateX(translateX - 8);
    }
  };
  return (
    <div className="">
      <div className="flex items-center gap-[2vmax] overflow-hidden max-w-[85vmax] relative">
        <div
          className={`flex items-center gap-[2vmax] transition duration-300`}
          style={{ transform: `translateX(-${translateX}%)` }}
        >
          {games?.map((item, index) => (
            <div key={index} className="flex flex-col items-center relative">
              <Image
                src={`${process.env.NEXT_PUBLIC_IMAGE_URI}/${item.cover.image_id}.jpg`}
                alt="game cover"
                width={500}
                height={500}
                className="max-w-[15vmax]"
              />
              <p className="text-[1.5vmax] font-bold absolute bottom-0 bg-black bg-opacity-50 text-neutral-100 text-center w-full">
                {item.name}
              </p>
              <div className="absolute top-0 right-0">
                <Image
                  src={`${process.env.NEXT_PUBLIC_IMAGE_URI}/${item.platforms[0].platform_logo.image_id}.png`}
                  alt="platform_logo"
                  width={200}
                  height={200}
                  className="max-w-[7vmax]"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="absolute w-full flex justify-between h-full">
          <button
            onClick={() => handelTransition("left")}
            className="text-[4vmax] text-neutral-100 bg-black bg-opacity-60 h-full"
            type="button"
          >
            <FaChevronLeft className="opacity-60 hover:opacity-100" />
          </button>
          <button
            onClick={() => handelTransition("right")}
            className="text-[4vmax] text-neutral-100 bg-black bg-opacity-60 h-full"
            type="button"
          >
            <FaChevronRight className="opacity-60 hover:opacity-100" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeRecentSlider;
