import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between mx-[2vmax] my-[2vmin]">
      <Link href="/" className="flex items-center justify-center gap-[0.8vmax]">
        <Image
          width={450}
          height={200}
          src="/logo.png"
          alt="logo"
          loading="lazy"
          className="max-w-[5vmax]"
        />
        <h1 className="text-[2.2vmax] font-bold text-neutral-100">
          VirtualParadise
        </h1>
      </Link>
      <ul className="flex items-center gap-[1.9vmax] ">
        <li className="text-[1.8vmax] font-semibold text-neutral-100 capitalize">
          artworks
        </li>
        <li className="text-[1.8vmax] font-semibold text-neutral-100 capitalize">
          colletions
        </li>
        <li className="text-[1.8vmax] font-semibold text-neutral-100 capitalize">
          <Link href="/events">events</Link>
        </li>
      </ul>
      <div className="flex items-center gap-[1.1vmax] border-b border-neutral-500">
        <input
          type="search"
          placeholder="What are you looking for?"
          className="placeholder:text-neutral-300 bg-transparent px-[1vmax] py-[1vmin] placeholder:overflow-visible text-neutral-300 focus:outline-none"
        />
        <button type="button" className="text-[1.3vmax] text-neutral-500">
          <FaSearch />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;