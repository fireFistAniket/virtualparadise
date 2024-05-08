import React, { useEffect, useState } from "react";
import GenresFilter from "../components/GenresFilter";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import Error from "../components/Error";

const Genres = () => {
  const [offeset, setOffset] = useState(0);
  const [currentGenre, setCurrentGenre] = useState(36);
  const [genreGames, setGenreGames] = useState([]);
  const {
    data,
    error: genreError,
    loading: genreLoading,
  } = useFetch(
    `/api/games`,
    `fields *, cover.*; where genres = ${currentGenre} & cover.height > 700 ; sort cover asc; limit 10; offset ${offeset};`
  );
  useEffect(() => {
    if (!data) {
      return;
    }
    setGenreGames((prev) => [...prev, ...data]);
  }, [data]);

  useEffect(() => {
    setGenreGames([]);
  }, [currentGenre]);
  if (genreError) {
    return <Error />;
  }
  return (
    <main className='min-h-[80vmin] flex flex-col gap-[5vmin] my-[1.4vmin]'>
      <div className="bg-[url('/genre-bg.png')] bg-cover bg-center bg-no-repeat flex items-center justify-center min-h-[60vmin]"></div>
      <div className='flex flex-col self-center gap-[2vmax] overflow-hidden max-w-[85vmax] relative'>
        <h1 className='text-[2.5vmax] font-bold text-center text-neutral-100'>
          Find games based on Genres
        </h1>
        <GenresFilter
          currentGenre={currentGenre}
          setCurrentGenre={setCurrentGenre}
        />
      </div>
      <div className='flex flex-col items-center justify-center gap-[5vmin]'>
        <h1 className='text-[2.5vmax] font-bold text-neutral-100'>
          Meet the games, which gives us the most relaxation.
        </h1>
        <div className='flex items-start flex-wrap gap-[1.5vmax] justify-center'>
          {genreGames?.map((item) => (
            <Link
              to={`/games/${item.id}`}
              key={item.id}
              className='flex flex-col items-center max-w-[18vmax]'
            >
              <img
                src={`${import.meta.env.VITE_IMAGE_URI}/${
                  item.cover?.image_id
                }.jpg`}
                alt='game-cover'
                width={450}
                height={175}
                className='max-w-[15vmax]'
              />
              <h1 className='text-[1.7vmax] text-neutral-100 font-semibold line-clamp-1'>
                {item.name}
              </h1>
            </Link>
          ))}
        </div>
        {genreLoading && <Loader />}
        <button
          type='button'
          className='text-[1.2vmax] capitalize border hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f] transition duration-300 bg-blue-600 text-neutral-100 rounded-xl border-blue-600 px-[2vmax] py-[2vmin] self-center'
          onClick={() => setOffset(offeset + 10)}
        >
          view more
        </button>
      </div>
    </main>
  );
};

export default Genres;
