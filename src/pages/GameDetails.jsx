import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { Link, useParams } from "react-router-dom";

const GameDetails = () => {
  const { gameId } = useParams();
  const [gameDetails, setGameDetails] = useState({});
  const {
    data,
    error: companyError,
    loading: companyLoading,
  } = useFetch(
    `/api/games`,
    `fields *, cover.*, screenshots.*, player_perspectives.*, websites.*, language_supports.*, platforms.*, similar_games.*, alternative_names.*, external_games.*; where id = ${gameId};`
  );
  useEffect(() => {
    if (!data) {
      return;
    }
    setGameDetails(data[0]);
  }, [data]);
  return (
    <main className='min-h-[80vmin] flex flex-col gap-[5vmin] my-[1.4vmin]'>
      <div className='flex items-center justify-center'>
        <img
          src={`${import.meta.env.VITE_IMAGE_URI}/${
            gameDetails?.cover?.image_id
          }.jpg`}
          alt='company_cover'
          width={1920}
          height={1080}
          className='max-h-[70vmin] w-full'
        />
      </div>
      <div className='flex flex-col gap-[2vmin] mx-[3vmax]'>
        {gameDetails.websites ? (
          gameDetails?.websites.map((item) => (
            <Link to={item.url} target='_blank' key={item.id}>
              <h1 className='text-neutral-100 text-[2.5vmax] font-bold'>
                {gameDetails.name}
              </h1>
            </Link>
          ))
        ) : (
          <h1 className='text-neutral-100 text-[2.5vmax] font-bold'>
            {gameDetails.name}
          </h1>
        )}
        <p className='text-neutral-100 text-[1.6vmax] font-medium'>
          {gameDetails.description || gameDetails.summary}
        </p>
      </div>
    </main>
  );
};

export default GameDetails;
