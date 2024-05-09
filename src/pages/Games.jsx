import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";
import Error from "../components/Error";

const Games = () => {
  const [offeset, setOffset] = useState(0);
  const [games, setGames] = useState([]);
  const currentDateTimeStamp = (
    new Date(new Date().toISOString().slice(0, 10)).getTime() / 1000
  ).toFixed(0);
  const {
    data,
    error: gamesError,
    loading: gamesLoading,
  } = useFetch(
    `/api/games`,
    `fields *, cover.*; where first_release_date < ${parseInt(
      currentDateTimeStamp
    )}; sort first_release_date desc; limit 10; offset ${offeset};`
  );
  useEffect(() => {
    if (!data) {
      return;
    }
    setGames((prev) => [...prev, ...data]);
  }, [data]);
  if (gamesError) {
    return <Error />;
  }
  return (
    <main className='min-h-[80vmin] flex flex-col gap-[5vmin] my-[1.4vmin]'>
      <div className="bg-[url('/games-bg.png')] bg-cover bg-center bg-no-repeat flex items-center justify-center min-h-[70vmin]">
        <div className='flex flex-col items-center justify-center px-[1vmax] py-[1vmin] gap-[2vmax] bg-black bg-opacity-50 rounded-2xl backdrop-blur-md'>
          <h2 className='text-[2vmax] font-semibold text-neutral-100'>
            Discover the World of Electronic Games with Us
          </h2>
          <p className='text-[1.7vmax] font-medium text-neutral-100 max-w-[60vmax] text-center'>
            We are your gateway to a vast world of gaming information. Dive into
            our collection of game data, from release dates to developer
            details, and uncover the stories behind your favorite games. Join us
            on a journey through the rich tapestry of the gaming universe.
          </p>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center gap-[5vmin] mx-[3vmax]'>
        <h1 className='text-[2.5vmax] font-bold text-neutral-100'>
          Meet the games, which gives us the most relaxation.
        </h1>
        <div className='flex items-center flex-wrap gap-[1.5vmax] justify-center'>
          {games?.map((item) => (
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
                <h1 className='text-[1.7vmax] text-neutral-100 font-semibold text-center'>
                  {item.name}
                </h1>
              </div>
            </Link>
          ))}
        </div>
        {gamesLoading && <Loader />}
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

export default Games;
