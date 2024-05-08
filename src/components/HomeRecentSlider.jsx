import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const HomeRecentSlider = ({ games }) => {
  const [translateX, setTranslateX] = useState(0);
  const handelTransition = (pos) => {
    if (translateX < 0 && translateX >= 80) {
      return;
    }

    if (pos === "right" && translateX < 80) {
      setTranslateX(translateX + 8);
    } else if (pos === "left" && translateX > 0) {
      setTranslateX(translateX - 8);
    }
  };
  return (
    <div className=''>
      <div className='flex items-center gap-[2vmax] overflow-hidden sm:max-w-[65vmax] lg:max-w-[85vmax] relative'>
        <div
          className={`flex items-center gap-[2vmax] transition duration-300`}
          style={{ transform: `translateX(-${translateX}%)` }}
        >
          {games?.map((item, index) => (
            <Link
              to={`/games/${item.id}`}
              key={index}
              className='flex flex-col items-center relative'
            >
              <img
                src={`${import.meta.env.VITE_IMAGE_URI}/${
                  item.cover?.image_id
                }.jpg`}
                alt='game cover'
                width={500}
                height={500}
                className='max-w-[15vmax]'
              />
              <p className='text-[1.5vmax] font-bold absolute bottom-0 bg-black bg-opacity-50 text-neutral-100 text-center w-full'>
                {item.name}
              </p>
            </Link>
          ))}
        </div>
        <button
          onClick={() => handelTransition("left")}
          className='text-[4vmax] text-neutral-100 bg-black bg-opacity-60 h-full absolute top-0 left-0'
          type='button'
        >
          <FaChevronLeft className='opacity-60 hover:opacity-100' />
        </button>
        <button
          onClick={() => handelTransition("right")}
          className='text-[4vmax] text-neutral-100 bg-black bg-opacity-60 h-full absolute top-0 right-0'
          type='button'
        >
          <FaChevronRight className='opacity-60 hover:opacity-100' />
        </button>
      </div>
    </div>
  );
};

export default HomeRecentSlider;
