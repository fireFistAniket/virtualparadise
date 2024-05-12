import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoClose, IoSearchOutline } from "react-icons/io5";
import { RiMenu3Fill } from "react-icons/ri";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showSideNav, setShowSideNav] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handelSearch = async (searchParam, limit) => {
    try {
      const resp = await fetch("/api/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: `fields *, character.*, collection.*, company.*, game.*, game.cover.*; search *"${searchParam}"*; limit ${limit};`,
        }),
      });
      const rest = await resp.json();
      setSearchResult(rest);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setShowSideNav(false);
    setShowSearch(false);
    setSearchQuery("");
  }, [location]);

  return (
    <nav className="flex items-center justify-between mx-[2vmax] my-[2vmin]">
      <Link to="/" className="flex items-center justify-center gap-[0.8vmax]">
        <img
          width={450}
          height={200}
          src={`/logo.png`}
          alt="logo"
          loading="lazy"
          className="max-w-[4vmax] sm:max-w-[5vmax]"
        />
        <h1 className="text-[1.6vmax] sm:text-[2.2vmax] font-bold text-neutral-100">
          VirtualParadise
        </h1>
      </Link>
      <ul className="hidden md:flex items-center gap-[1.9vmax] ">
        <li className="text-[1.8vmax] font-semibold text-neutral-100 capitalize">
          <Link to="/artworks">artworks</Link>
        </li>
        <li className="text-[1.8vmax] font-semibold text-neutral-100 capitalize">
          <Link to="/companies">companies</Link>
        </li>
        <li className="text-[1.8vmax] font-semibold text-neutral-100 capitalize">
          <Link to="/events">events</Link>
        </li>
      </ul>
      <div className="hidden md:block relative">
        <div className="flex items-center gap-[1.1vmax] border-b border-neutral-500">
          <input
            type="search"
            placeholder="What are you looking for?"
            className="placeholder:text-neutral-300 bg-transparent px-[1vmax] py-[1vmin] placeholder:overflow-visible text-neutral-300 focus:outline-none min-w-[20vmax]"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              handelSearch(e.target.value, 5);
            }}
          />
          <button
            type="button"
            className="text-[1.3vmax] text-neutral-500"
            onClick={() => {
              navigate(`/search?q=${searchQuery}`);
              setSearchQuery("");
              setSearchResult([]);
            }}
          >
            <FaSearch />
          </button>
        </div>
        {searchResult.length > 0 && (
          <div className="flex flex-col gap-[1.5vmax] absolute top-full left-0 px-[1.5vmin] py-[1vmin] bg-black bg-opacity-50 rounded-lg rounded-tr-none z-50 backdrop-blur">
            {searchResult?.map((item) => (
              <Link
                to={`/games/${item.game?.id}`}
                key={item.id}
                className="flex items-center gap-[1vmax] even:bg-neutral-500 p-[1vmin]"
              >
                <img
                  src={`${import.meta.env.VITE_IMAGE_URI}/${
                    item.game?.cover?.image_id
                  }.jpg`}
                  alt="game-cover"
                  width={450}
                  height={175}
                  className="max-w-[4vmax] rounded-full max-h-[4vmax]"
                />
                <h1
                  className="text-[1.3vmax] text-neutral-100 font-semibold line-clamp-1"
                  title={item.game?.slug}
                >
                  {item.game?.name}
                </h1>
              </Link>
            ))}
          </div>
        )}
      </div>
      <div className="flex md:hidden items-center gap-[0.8vmax]">
        <button
          onClick={() => setShowSearch(true)}
          type="button"
          className="md:hidden text-neutral-100 text-[2.4vmax] border border-neutral-100 rounded-md p-[1vmin]"
        >
          <IoSearchOutline />
        </button>
        <button
          onClick={() => setShowSideNav(true)}
          type="button"
          className="md:hidden text-neutral-100 text-[2.4vmax] border border-neutral-100 rounded-md p-[1vmin]"
        >
          <RiMenu3Fill />
        </button>
      </div>
      <div
        className={`fixed top-0 left-0 w-full bg-[linear-gradient(180deg,_rgba(52,_7,_99,_1)_0%,_rgba(41,_38,_142,_1)_33%,_rgba(26,_17,_136,_1)_65%,_rgba(1,_61,_136,_1)_100%)] h-full z-[1100] p-[2vmax] flex flex-col gap-[3vmax] transition duration-500 ease-in-out ${
          showSearch ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="relative">
          <div className="flex items-center w-full justify-between gap-[1.1vmax] border-b border-neutral-500">
            <input
              type="search"
              placeholder="What are you looking for?"
              className="placeholder:text-neutral-300 w-full bg-transparent px-[1vmax] py-[1vmin] placeholder:overflow-visible text-neutral-300 focus:outline-none min-w-[20vmax]"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                handelSearch(e.target.value, 10);
              }}
            />
            {searchQuery.length > 0 ? (
              <button
                type="button"
                className="text-[2.5vmax] text-neutral-500"
                onClick={() => {
                  navigate(`/search?q=${searchQuery}`);
                  setSearchQuery("");
                  setSearchResult([]);
                  setShowSearch(false);
                }}
              >
                <FaSearch />
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setShowSearch(false)}
                className="text-[3vmax] text-neutral-100"
              >
                <IoClose />
              </button>
            )}
          </div>
          {searchResult.length > 0 && (
            <div className="flex flex-col gap-[1.5vmax] absolute top-full left-0 px-[1.5vmin] py-[1vmin] bg-black bg-opacity-50 rounded-lg rounded-tr-none z-50 backdrop-blur w-full">
              {searchResult?.map((item) => (
                <Link
                  to={`/games/${item.game?.id}`}
                  key={item.id}
                  className="flex items-center gap-[1vmax] even:bg-neutral-500 p-[1vmin]"
                >
                  <img
                    src={`${import.meta.env.VITE_IMAGE_URI}/${
                      item.game?.cover?.image_id
                    }.jpg`}
                    alt="game-cover"
                    width={450}
                    height={175}
                    className="max-w-[6vmax] rounded-full max-h-[6vmax]"
                  />
                  <h1
                    className="text-[1.8vmax] text-neutral-100 font-semibold line-clamp-1"
                    title={item.game?.slug}
                  >
                    {item.game?.name}
                  </h1>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 w-full bg-[linear-gradient(180deg,_rgba(52,_7,_99,_1)_0%,_rgba(41,_38,_142,_1)_33%,_rgba(26,_17,_136,_1)_65%,_rgba(1,_61,_136,_1)_100%)] h-full z-[1100] p-[2vmax] flex flex-col gap-[3vmax] transition duration-500 ease-in-out ${
          showSideNav ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-[0.8vmax]">
            <img
              width={450}
              height={200}
              src={`/logo.png`}
              alt="logo"
              loading="lazy"
              className="max-w-[5vmax]"
            />
            <h1 className="text-[2.2vmax] font-bold text-neutral-100">
              VirtualParadise
            </h1>
          </Link>
          <button
            type="button"
            onClick={() => setShowSideNav(false)}
            className="text-[3vmax] text-neutral-100"
          >
            <IoClose />
          </button>
        </div>
        <ul className="flex flex-col items-start gap-[1.9vmax]">
          <h1 className="text-neutral-100 text-[2vmax] font-medium underline">
            Useful Routes
          </h1>
          <li className="text-[1.8vmax] font-semibold text-neutral-100 capitalize">
            <Link to="/artworks">artworks</Link>
          </li>
          <li className="text-[1.8vmax] font-semibold text-neutral-100 capitalize">
            <Link to="/companies">companies</Link>
          </li>
          <li className="text-[1.8vmax] font-semibold text-neutral-100 capitalize">
            <Link to="/events">events</Link>
          </li>
          <li className="text-[1.8vmax] font-semibold text-neutral-100 capitalize">
            <Link to="/games">all games</Link>
          </li>
          <li className="text-[1.8vmax] font-semibold text-neutral-100 capitalize">
            <Link to="/franchise">franchises</Link>
          </li>
          <li className="text-[1.8vmax] font-semibold text-neutral-100 capitalize">
            <Link to="/genres">genres</Link>
          </li>
        </ul>
        <hr className="w-full bg-neutral-600 border-neutral-600" />
        <h1 className="text-neutral-100 text-[2vmax] font-medium">
          Subscribe our Newsletter for latest updates
        </h1>
        <div className="bg-blue-400 pl-2 rounded-md flex justify-between items-center max-w-[35vmax]">
          <input
            type="email"
            placeholder="Enter your email"
            className="focus:outline-none placeholder:text-neutral-200 bg-transparent"
          />
          <button
            type="button"
            className="bg-blue-600 rounded-lg px-2 py-1 capitalize font-medium text-neutral-100 whitespace-nowrap"
          >
            subscribe now
          </button>
        </div>
        <hr className="w-full bg-neutral-600 border-neutral-600" />
        <div className="flex flex-col items-start gap-[1.9vmax]">
          <h1 className="text-neutral-100 text-[2vmax] font-medium">
            Follow our social handel for further contact
          </h1>
          <ul className="flex items-center gap-[1.5vmax]">
            <li>
              <img
                src={`/instagram-icon-footer.png`}
                alt="intagram"
                width={200}
                height={50}
                className="max-w-[3vmax]"
              />
            </li>
            <li>
              <img
                src={`/linkedin-icon-footer.png`}
                alt="linkedin"
                width={200}
                height={50}
                className="max-w-[3vmax]"
              />
            </li>
            <li>
              <img
                src={`/pinterest-icon-footer.png`}
                alt="pinterest"
                width={200}
                height={50}
                className="max-w-[3vmax]"
              />
            </li>
            <li>
              <img
                src={`/upwork-icon-footer.png`}
                alt="upwork"
                width={200}
                height={50}
                className="max-w-[3vmax]"
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
