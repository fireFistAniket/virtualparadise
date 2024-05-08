import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-[45vmax] gap-[3vmax]'>
      <img src='/error-cover.png' alt='error' width={650} height={400} />
      <Link
        to='/'
        className='uppercase text-[1.8vmax] tracking-widest border hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f] transition duration-300 bg-blue-600 text-neutral-100 rounded-xl border-blue-600 px-[1.8vmax] py-[1.8vmin]'
      >
        back to home
      </Link>
    </div>
  );
};

export default Error;
