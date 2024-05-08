import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className='flex flex-col gap-[4vmin] px-[3vmax] py-[3vmin] bg-[linear-gradient(270deg,_rgba(52,_7,_99,_1)_0%,_rgba(41,_38,_142,_1)_33%,_rgba(26,_17,_136,_1)_65%,_rgba(1,_61,_136,_1)_100%)]'>
      <div className='flex items-center justify-between'>
        <div className='flex flex-col items-start gap-[2vmin]'>
          <Link
            to='/'
            className='flex items-center justify-center gap-[0.8vmax]'
          >
            <img
              width={450}
              height={200}
              src={`/logo.png`}
              alt='logo'
              loading='lazy'
              className='max-w-[4vmax]'
            />
            <h1 className='text-[2vmax] font-bold text-neutral-100'>
              VirtualParadise
            </h1>
          </Link>
          <h3 className='text-neutral-400 text-[1vmax]'>
            &#169; 2024 virtualparadise.com
          </h3>
        </div>
        <div className='bg-blue-400 pl-2 rounded-md'>
          <input
            type='email'
            placeholder='Enter your email'
            className='focus:outline-none placeholder:text-neutral-200 bg-transparent'
          />
          <button
            type='button'
            className='bg-blue-600 rounded-lg px-2 py-1 capitalize font-medium text-neutral-100'
          >
            subscribe now
          </button>
        </div>
      </div>
      <ul className='flex items-center justify-between'>
        <li className='capitalize text-[1.2vmax] font-medium text-neutral-100'>
          <Link
            to='https://www.igdb.com/'
            target='_blank'
            referrerPolicy='no-referrer'
          >
            api home page
          </Link>
        </li>
        <li className='capitalize text-[1.2vmax] font-medium text-neutral-100'>
          guide
        </li>
        <li className='capitalize text-[1.2vmax] font-medium text-neutral-100'>
          <Link to='/games'>games</Link>
        </li>
        <li className='capitalize text-[1.2vmax] font-medium text-neutral-100'>
          <Link to='/franchise'>franchise</Link>
        </li>
        <li className='capitalize text-[1.2vmax] font-medium text-neutral-100'>
          <Link to='/characters'>characters</Link>
        </li>
        <li className='capitalize text-[1.2vmax] font-medium text-neutral-100'>
          <Link to='/genres'>genres</Link>
        </li>
        <li className='capitalize text-[1.2vmax] font-medium text-neutral-100'>
          <Link
            to='https://dportfolio-b5697.web.app/'
            target='_blank'
            referrerPolicy='no-referrer'
          >
            contact
          </Link>
        </li>
        <li>
          <img
            src={`/instagram-icon-footer.png`}
            alt='intagram'
            width={200}
            height={50}
            className='max-w-[3vmax]'
          />
        </li>
        <li>
          <img
            src={`/linkedin-icon-footer.png`}
            alt='linkedin'
            width={200}
            height={50}
            className='max-w-[3vmax]'
          />
        </li>
        <li>
          <img
            src={`/pinterest-icon-footer.png`}
            alt='pinterest'
            width={200}
            height={50}
            className='max-w-[3vmax]'
          />
        </li>
        <li>
          <img
            src={`/english-icon-footer.png`}
            alt='english'
            width={200}
            height={50}
            className='max-w-[3vmax]'
          />
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
