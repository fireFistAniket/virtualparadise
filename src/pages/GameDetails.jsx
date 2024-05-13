import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player/lazy";
import FullScreenImageView from "../components/FullScreenImageView";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { FaStar } from "react-icons/fa";
import TitleManager from "../components/TitleManager";

const GameDetails = () => {
  const { gameId } = useParams();
  const [gameDetails, setGameDetails] = useState({});
  const [fullView, setFullView] = useState(false);
  const [imgPath, setImgPath] = useState("");
  const [altPath, setAltPath] = useState("");
  const {
    data,
    error: gameError,
    loading: gameLoading,
  } = useFetch(
    `/api/games`,
    `fields *, cover.*, screenshots.*, player_perspectives.*, websites.*, language_supports.*, platforms.*, similar_games.*, alternative_names.*, external_games.*, platforms.platform_logo.*, platforms.websites.*, genres.*, game_modes.*, artworks.*, age_ratings.*, involved_companies.*, keywords.*, similar_games.cover.*, videos.*, language_supports.language.*, dlcs.*; where id = ${gameId};`
  );
  useEffect(() => {
    if (!data) {
      return;
    }
    setGameDetails(data[0]);
  }, [data]);

  if (gameLoading) {
    return <Loader />;
  }
  if (gameError) {
    return <Error />;
  }
  return (
    <>
      <TitleManager title={`VirtualParadise | ${gameDetails.name}`} />
      <main className="min-h-[80vmin] flex flex-col gap-[5vmin] my-[1.4vmin]">
        <div className="flex items-center justify-center bg-[linear-gradient(270deg,_rgba(118,75,162,1)_0%,_rgba(102,126,234,1)_100%)]">
          <div className="w-full flex items-center justify-center relative">
            <img
              src={`${import.meta.env.VITE_IMAGE_URI}/${
                gameDetails?.cover?.image_id
              }.jpg`}
              alt="company_cover"
              width={1920}
              height={1080}
              className="sm:max-h-[70vmin] w-full object-contain"
            />
            {gameDetails?.rating && (
              <div className="bg-neutral-900 bg-opacity-60 px-[1.4vmin] py-[1vmin] rounded-lg absolute top-0 right-0">
                <h3 className="text-[1.7vmax] text-neutral-100 flex items-center justify-center font-bold gap-2">
                  {((gameDetails?.rating / 100) * 5).toFixed()}/5{" "}
                  <FaStar color="#ffcb2b" />
                </h3>
              </div>
            )}
          </div>
          <div className="hidden sm:flex flex-col items-start gap-[2vmin] mx-[3vmax]">
            {gameDetails.websites ? (
              gameDetails?.websites?.slice(0, 1).map((item) => (
                <Link
                  to={item.url}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  key={item.id}
                >
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
        </div>
        <div className="flex sm:hidden flex-col items-start gap-[2vmin] mx-[3vmax]">
        {gameDetails.websites ? (
          gameDetails?.websites?.slice(0, 1).map((item) => (
            <Link
              to={item.url}
              target="_blank"
              referrerPolicy="no-referrer"
              key={item.id}
            >
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
        {gameDetails.screenshots && (
          <div className="flex flex-col items-start gap-[2vmin] mx-[3vmax]">
            <h2 className="text-neutral-100 text-[2vmax] font-semibold underline">
              Gameplay Images
            </h2>
            <div className="flex flex-wrap items-center justify-center sm:justify-between gap-[3vmin]">
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
                    src={`${import.meta.env.VITE_IMAGE_URI}/${
                      item?.image_id
                    }.jpg`}
                    alt="company_cover"
                    width={1920}
                    height={1080}
                    className="max-w-[40vmax] sm:max-w-[30vmax]"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
        {gameDetails.videos && (
          <div className="flex flex-col items-start gap-[2vmin] mx-[3vmax]">
            <h2 className="text-neutral-100 text-[2vmax] font-semibold underline">
              Game Videos
            </h2>
            <div className="flex flex-wrap items-center justify-center sm:justify-between gap-[3vmin]">
              {gameDetails.videos?.map((item) => (
                <ReactPlayer
                  key={item.id}
                  url={`${import.meta.env.VITE_YOUTUBE_URI}${item.video_id}`}
                  width={640}
                  height={360}
                  className="max-w-[40vmax] max-h-[45vmin]"
                />
              ))}
            </div>
          </div>
        )}
        {gameDetails.platforms && (
          <div className="flex flex-col items-start gap-[2vmin] mx-[3vmax]">
            <h2 className="text-neutral-100 text-[2vmax] font-semibold underline">
              Platforms Availabilty
            </h2>
            <div className="flex flex-wrap items-center justify-between gap-[3vmin]">
              {gameDetails.platforms?.map((item) => (
                <Link
                  to={item.url}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  key={item.id}
                  className="flex flex-col items-center"
                >
                  <img
                    src={`${import.meta.env.VITE_IMAGE_URI}/${
                      item?.platform_logo.image_id
                    }.png`}
                    alt="company_cover"
                    width={1920}
                    height={1080}
                    className="max-w-[20vmax]"
                  />
                  <h3 className="text-[1.6vmax] text-neutral-100 font-semibold">
                    {item.name}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        )}
        {gameDetails.artworks && (
          <div className="flex flex-col items-start gap-[2vmin] mx-[3vmax]">
            <h2 className="text-neutral-100 text-[2vmax] font-semibold underline">
              Artworks
            </h2>
            <div className="flex flex-wrap items-center justify-center sm:justify-between gap-[3vmin]">
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
                    src={`${import.meta.env.VITE_IMAGE_URI}/${
                      item?.image_id
                    }.jpg`}
                    alt="company_cover"
                    width={1920}
                    height={1080}
                    className="max-w-[40vmax] sm:max-w-[30vmax]"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
        {gameDetails.language_supports && (
          <div className="flex flex-col items-start gap-[2vmin] mx-[3vmax]">
            <h2 className="text-neutral-100 text-[2vmax] font-semibold underline">
              Supported Languages
            </h2>
            <div className="flex flex-wrap items-center gap-[1.6vmax]">
              {gameDetails.language_supports?.map((item) => (
                <div key={item.id} className="flex items-end gap-2">
                  <h2 className="text-[1.8vmax] font-medium text-neutral-100">
                    {item.language.name}
                  </h2>
                  <pre className="text-[1.2vmax] text-neutral-100">
                    &#40;{item.language.locale}&#41;
                  </pre>
                </div>
              ))}
            </div>
          </div>
        )}
        {fullView && (
          <FullScreenImageView
            path={imgPath}
            altName={altPath}
            close={setFullView}
          />
        )}
      </main>
    </>
  );
};

export default GameDetails;
