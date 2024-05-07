import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player/lazy";
import FullScreenImageView from "../components/FullScreenImageView";

const GameDetails = () => {
  const { gameId } = useParams();
  const [gameDetails, setGameDetails] = useState({});
  const [fullView, setFullView] = useState(false);
  const [imgPath, setImgPath] = useState("");
  const [altPath, setAltPath] = useState("");
  const {
    data,
    error: companyError,
    loading: companyLoading,
  } = useFetch(
    `/api/games`,
    `fields *, cover.*, screenshots.*, player_perspectives.*, websites.*, language_supports.*, platforms.*, similar_games.*, alternative_names.*, external_games.*, platforms.platform_logo.*, platforms.websites.*, genres.*, game_modes.*, artworks.*, age_ratings.*, involved_companies.*, keywords.*, similar_games.cover.*, videos.*, language_supports.language.*; where id = ${gameId};`
  );
  useEffect(() => {
    if (!data) {
      return;
    }
    setGameDetails(data[0]);
  }, [data]);
  return (
    <main className="min-h-[80vmin] flex flex-col gap-[5vmin] my-[1.4vmin]">
      <div className="flex items-center justify-center bg-[linear-gradient(270deg,_rgba(118,75,162,1)_0%,_rgba(102,126,234,1)_100%)]">
        <img
          src={`${import.meta.env.VITE_IMAGE_URI}/${
            gameDetails?.cover?.image_id
          }.jpg`}
          alt="company_cover"
          width={1920}
          height={1080}
          className="max-h-[70vmin] w-full object-contain"
        />
      </div>
      <div className="flex flex-col items-start gap-[2vmin] mx-[3vmax]">
        {gameDetails.websites ? (
          gameDetails?.websites?.slice(0, 1).map((item) => (
            <Link to={item.url} target="_blank" key={item.id}>
              <h1 className="text-neutral-100 text-[2.5vmax] font-bold">
                {gameDetails.name}
              </h1>
            </Link>
          ))
        ) : (
          <h1 className="text-neutral-100 text-[2.5vmax] font-bold">
            {gameDetails.name}
          </h1>
        )}
        <p className="text-neutral-100 text-[1.6vmax] font-medium">
          {gameDetails.description || gameDetails.summary}
        </p>
      </div>
      <div className="flex flex-col items-start gap-[2vmin] mx-[3vmax]">
        <h2 className="text-neutral-100 text-[2vmax] font-semibold underline">
          Gameplay Images
        </h2>
        <div className="flex flex-wrap items-center justify-between gap-[3vmin]">
          {gameDetails.screenshots?.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                setImgPath(item.image_id);
                setAltPath(gameDetails.slug);
                setFullView(true);
              }}
              className="cursor-pointer"
            >
              <img
                src={`${import.meta.env.VITE_IMAGE_URI}/${item?.image_id}.jpg`}
                alt="company_cover"
                width={1920}
                height={1080}
                className="max-w-[20vmax]"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-start gap-[2vmin] mx-[3vmax]">
        <h2 className="text-neutral-100 text-[2vmax] font-semibold underline">
          Game Videos
        </h2>
        <div className="flex flex-wrap items-center justify-between gap-[3vmin]">
          {gameDetails.videos?.map((item) => (
            <ReactPlayer
              key={item.id}
              url={`${import.meta.env.VITE_YOUTUBE_URI}${item.video_id}`}
              width={400}
              height={250}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col items-start gap-[2vmin] mx-[3vmax]">
        <h2 className="text-neutral-100 text-[2vmax] font-semibold underline">
          Platforms Availabilty
        </h2>
        <div className="flex flex-wrap items-center justify-between gap-[3vmin]">
          {gameDetails.platforms?.map((item) => (
            <div key={item.id} className="flex flex-col items-center">
              <img
                src={`${import.meta.env.VITE_IMAGE_URI}/${
                  item?.platform_logo.image_id
                }.jpg`}
                alt="company_cover"
                width={1920}
                height={1080}
                className="max-w-[20vmax]"
              />
              <Link to={item.url} target="_blank">
                <h3 className="text-[1.6vmax] text-neutral-100 font-semibold">
                  {item.name}
                </h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-start gap-[2vmin] mx-[3vmax]">
        <h2 className="text-neutral-100 text-[2vmax] font-semibold underline">
          Artworks
        </h2>
        <div className="flex flex-wrap items-center justify-between gap-[3vmin]">
          {gameDetails.artworks?.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                setImgPath(item.image_id);
                setAltPath(gameDetails.slug);
                setFullView(true);
              }}
              className="cursor-pointer"
            >
              <img
                src={`${import.meta.env.VITE_IMAGE_URI}/${item?.image_id}.jpg`}
                alt="company_cover"
                width={1920}
                height={1080}
                className="max-w-[20vmax]"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-start gap-[2vmin] mx-[3vmax]">
        <h2 className="text-neutral-100 text-[2vmax] font-semibold underline">
          Supported Languages
        </h2>
      </div>
      {fullView && (
        <FullScreenImageView
          path={imgPath}
          altName={altPath}
          close={setFullView}
        />
      )}
    </main>
  );
};

export default GameDetails;
