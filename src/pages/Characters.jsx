import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import Loader from "../components/Loader";
import Error from "../components/Error";

const Characters = () => {
  const [offeset, setOffset] = useState(0);
  const [characters, setCharacters] = useState([]);
  const {
    data,
    error: charactersError,
    loading: charactersLoading,
  } = useFetch(
    `/api/characters`,
    `fields *, games.*, games.cover.*, mug_shot.*; sort mug_shot asc; limit 10; offset ${offeset};`
  );
  useEffect(() => {
    if (!data) {
      return;
    }
    setCharacters((prev) => [...prev, ...data]);
  }, [data]);
  if (charactersError) {
    return <Error />;
  }
  return (
    <main className='min-h-[80vmin] flex flex-col gap-[5vmin] my-[1.4vmin]'>
      <div className="bg-[url('/characters-bg.jpeg')] bg-cover bg-center bg-no-repeat flex items-center justify-center min-h-[50vmin]"></div>
      <div className='flex items-center flex-wrap justify-between gap-[1.8vmax] mx-[3vmax]'>
        {characters.map((item) => (
          <div
            key={item.id}
            className='flex items-center justify-center gap-[2vmax] border px-[1vmax] py-[1vmin] rounded-xl shadow-md shadow-slate-500 relative group min-h-[20vmax]'
          >
            <img
              src={`${import.meta.env.VITE_IMAGE_URI}/${
                item.mug_shot?.image_id
              }.png`}
              alt='game-character'
              width={450}
              height={175}
              className='max-w-[15vmax]'
            />
            <div className='flex flex-col items-start gap-[1.5vmax]'>
              <h1 className='text-[1.7vmax] text-neutral-100 font-semibold'>
                {item.name}
              </h1>
              <div className='flex flex-wrap justify-center gap-[1vmin]'>
                {item.games?.map((it) => (
                  <Link
                    to={`/games/${it.id}`}
                    key={it.id}
                    className='flex flex-col items-center max-w-[8vmax]'
                  >
                    <img
                      src={`${import.meta.env.VITE_IMAGE_URI}/${
                        it.cover?.image_id
                      }.jpg`}
                      alt='game-cover'
                      width={450}
                      height={175}
                      className='max-w-[6vmax]'
                    />
                    <h1
                      className='text-[1.2vmax] text-neutral-100 font-semibold line-clamp-1'
                      title={it.name}
                    >
                      {it.name}
                    </h1>
                  </Link>
                ))}
              </div>
              <Link
                to={item.url}
                target='_blank' referrerPolicy='no-referrer'
                className='text-[1.3vmax] text-neutral-100 font-semibold capitalize absolute top-[2%] right-[2%] opacity-0 group-hover:opacity-100 transition duration-500'
              >
                <BsArrowUpRightCircleFill />
              </Link>
            </div>
          </div>
        ))}
      </div>
      {charactersLoading && <Loader />}
      <button
        type='button'
        className='text-[1.2vmax] capitalize border hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f] transition duration-300 bg-blue-600 text-neutral-100 rounded-xl border-blue-600 px-[2vmax] py-[2vmin] self-center'
        onClick={() => setOffset(offeset + 10)}
      >
        view more
      </button>
    </main>
  );
};

export default Characters;
