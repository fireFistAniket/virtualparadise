import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";

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

  return (
    <main className="min-h-[80vmin] flex flex-col gap-[5vmin] my-[1.4vmin]">
      <div className="bg-[url('/games-bg.png')] bg-cover bg-center bg-no-repeat flex items-center justify-center min-h-[50vmin]"></div>
      <div className="flex flex-col items-center justify-center gap-[5vmin]">
        <h1 className="text-[2.5vmax] font-bold text-neutral-100">
          Meet the games, which gives us the most relaxation.
        </h1>
        <div
          className="flex items-center flex-wrap gap-[1.5vmax] justify-center"
          id="event-list"
        >
          {games?.map((item) => (
            <Link
              to={`/games/${item.id}`}
              key={item.id}
              className="flex flex-col items-center mx-[3vmax]"
            >
              <img
                src={`${import.meta.env.VITE_IMAGE_URI}/${
                  item.cover?.image_id
                }.jpg`}
                alt="game-cover"
                width={450}
                height={175}
                className="max-w-[15vmax]"
              />
              <h1 className="text-[1.7vmax] text-neutral-100 font-semibold">
                {item.name}
              </h1>
            </Link>
          ))}
        </div>
        {gamesLoading && <Loader />}
        <button
          type="button"
          className="text-[1.2vmax] capitalize border shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f] bg-blue-600 text-neutral-100 rounded-xl border-blue-600 px-[2vmax] py-[2vmin] self-center"
          onClick={() => setOffset(offeset + 10)}
        >
          view more
        </button>
      </div>
    </main>
  );
};

export default Games;
