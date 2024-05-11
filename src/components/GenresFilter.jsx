import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const GenresFilter = ({ currentGenre, setCurrentGenre }) => {
  const [translateX, setTranslateX] = useState(0);
  const handelTransition = (pos) => {
    let limit;
    if (window.innerWidth < 768) {
      limit = 327;
    } else {
      limit = 375;
    }
    if (translateX < 0 && translateX >= limit) {
      return;
    }

    if (pos === "right" && translateX < limit) {
      setTranslateX(translateX + 8);
    } else if (pos === "left" && translateX > 0) {
      setTranslateX(translateX - 8);
    }
  };

  const {
    data,
    error: franchiseError,
    loading: franchiseLoading,
  } = useFetch(`/api/genres`, `fields *; limit 50;`);
  return (
    <div className="relative">
      <div
        className={`flex items-center gap-[2vmax] transition duration-300 px-[2vmax] py-[2vmin] scroll-smooth`}
        style={{ transform: `translateX(-${translateX}vmin)` }}
      >
        {data &&
          data.map((item) => (
            <div
              key={item.id}
              className={`px-[2vmin] py-[1vmin] rounded-lg cursor-pointer ${
                currentGenre === item.id && `bg-neutral-100`
              }`}
              onClick={() => setCurrentGenre(item.id)}
            >
              <h2
                className={`text-[1.6vmax] font-medium whitespace-nowrap ${
                  currentGenre === item.id
                    ? "bg-[linear-gradient(270deg,_rgba(52,_7,_99,_1)_0%,_rgba(41,_38,_142,_1)_33%,_rgba(26,_17,_136,_1)_65%,_rgba(1,_61,_136,_1)_100%)] bg-clip-text text-transparent"
                    : "text-neutral-100"
                }`}
              >
                {item.name}
              </h2>
            </div>
          ))}
      </div>
      <button
        onClick={() => handelTransition("left")}
        className="text-[2vmax] text-neutral-100 bg-black bg-opacity-60 h-full absolute top-0 left-0 md:opacity-0 hover:opacity-100 transition duration-500"
        type="button"
      >
        <FaChevronLeft className="opacity-60 hover:opacity-100" />
      </button>
      <button
        onClick={() => handelTransition("right")}
        className="text-[2vmax] text-neutral-100 bg-black bg-opacity-60 h-full absolute top-0 right-0 md:opacity-0 hover:opacity-100 transition duration-500"
        type="button"
      >
        <FaChevronRight className="opacity-60 hover:opacity-100" />
      </button>
    </div>
  );
};

export default GenresFilter;
