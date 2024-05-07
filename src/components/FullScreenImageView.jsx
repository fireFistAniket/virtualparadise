import React from "react";
import { IoMdCloseCircle } from "react-icons/io";

const FullScreenImageView = ({ path, altName, close }) => {
  return (
    <div className='fixed top-0 left-0 min-h-screen w-full flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-lg'>
      <div className='relative w-full h-screen flex items-center justify-center'>
        <button
          type='button'
          onClick={() => close(false)}
          className='absolute top-[2%] right-[1%] text-white z-10 text-[3vmax]'
        >
          <IoMdCloseCircle />
        </button>
        <img
          src={`${import.meta.env.VITE_IMAGE_URI}/${path}.jpg`}
          alt={altName}
          width={1920}
          height={1080}
          className='max-w-[60vmax]'
        />
      </div>
    </div>
  );
};

export default FullScreenImageView;
