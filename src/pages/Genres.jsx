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
      <div className="bg-[url('/genre-bg.png')] bg-cover bg-center bg-no-repeat flex items-center justify-center min-h-[60vmin]">
        <div className='flex flex-col items-center justify-center px-[1vmax] py-[1vmin] gap-[2vmax] bg-black bg-opacity-50 rounded-2xl backdrop-blur-md'>
          <h2 className='text-[2vmax] font-semibold text-neutral-100'>
            Explore Game Based on Genres
          </h2>
          <p className='text-[1.7vmax] font-medium text-neutral-100 max-w-[50vmax] text-center'>
            Dive into the diverse world of gaming genres, each offering a unique
            gameplay experience and storytelling style. From action-packed
            adventures to mind-bending puzzles, there&apos;s a genre to suit
            every player&apos;s taste. Discover new favorites and explore the
            breadth of gaming creativity.
          </p>
        </div>
      </div>
      <div className='flex flex-col self-center gap-[2vmax] overflow-hidden max-w-[85vmax] relative'>
        <h1 className='text-[2.5vmax] font-bold text-center text-neutral-100'>
          Find games based on Genres
        </h1>
        <GenresFilter
          currentGenre={currentGenre}
          setCurrentGenre={setCurrentGenre}
        />
      </div>
      <div className='flex flex-col items-center justify-center gap-[5vmin] mx-[3vmax]'>
        <h1 className='text-[2.5vmax] font-bold text-neutral-100'>
          Meet the games, which gives us the most relaxation.
        </h1>
        <div className='flex flex-wrap justify-around'>
          {genreGames?.map((item) => (
            <Link
              to={`/games/${item.id}`}
              key={item.id}
              className='flex cursor-pointer flex-shrink flex-grow basis-[15vmax] m-[3vmin] group relative'
            >
              <img
                src={`${import.meta.env.VITE_IMAGE_URI}/${
                  item.cover?.image_id
                }.jpg`}
                alt='game-cover'
                width={450}
                height={175}
                className='inline-block w-full h-auto object-cover rounded-lg'
              />
              <div className='absolute bottom-0 w-full py-[2vmin] bg-neutral-800 rounded-b-lg bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out'>
                <h1 className='text-[1.7vmax] text-neutral-100 font-semibold line-clamp-1 text-center'>
                  {item.name}
                </h1>
              </div>
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
