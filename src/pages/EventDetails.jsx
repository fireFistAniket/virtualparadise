import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Loader from "../components/Loader";
import ReactPlayer from "react-player/lazy";
import Error from "../components/Error";
import TitleManager from "../components/TitleManager";

const EventDetails = () => {
  const { eventId } = useParams();
  const [eventDetails, setEventDetails] = useState({});
  const {
    data,
    error: eventsError,
    loading: eventsLoading,
  } = useFetch(
    `/api/events`,
    `fields *, event_logo.*, games.*, videos.*, games.cover.*; where id = ${eventId};`
  );
  useEffect(() => {
    if (!data) {
      return;
    }
    setEventDetails(data[0]);
  }, [data]);

  if (eventsLoading) {
    return <Loader />;
  }
  if (eventsError) {
    return <Error />;
  }
  return (
    <>
      <TitleManager
        title={`VirtualParadise | Search Results of ${eventDetails.name}`}
      />
      <main className="min-h-[80vmin] flex flex-col gap-[5vmin] my-[1.4vmin]">
        <div className="flex items-center justify-center">
          <img
            src={`${import.meta.env.VITE_IMAGE_URI}/${
              eventDetails?.event_logo?.image_id
            }.jpg`}
            alt="event_cover"
            width={1920}
            height={1080}
            className="max-h-[70vmin] w-full object-cover"
          />
        </div>
        <div className="mx-[3vmax] flex flex-col items-stretch gap-[3vmin]">
          <div className="flex flex-col gap-[2vmin]">
            <h1 className="text-neutral-100 text-[2.5vmax] font-bold">
              {eventDetails.name}
            </h1>
            <p className="text-neutral-100 text-[1.6vmax] font-medium">
              {eventDetails.description}
            </p>
          </div>
          <ReactPlayer
            url={eventDetails.live_stream_url}
            width={800}
            height={600}
            className="max-w-[60vmax] max-h-[45vmin]"
          />
          {eventDetails?.games && (
            <div className="flex flex-col items-start gap-[2vmin]">
              <h2 className="text-[2vmax] text-neutral-100 font-semibold">
                Launched Games at {eventDetails.name}
              </h2>
              <div
                className={`flex items-center gap-[2vmax] flex-wrap justify-between`}
              >
                {eventDetails?.games?.map((item) => (
                  <Link
                    to={`/games/${item.id}`}
                    key={item.id}
                    className="flex flex-col items-center relative"
                  >
                    <img
                      src={`${import.meta.env.VITE_IMAGE_URI}/${
                        item.cover.image_id
                      }.jpg`}
                      alt="game cover"
                      width={400}
                      height={250}
                      className="max-w-[15vmax]"
                    />
                    <p className="text-[1.5vmax] font-bold absolute bottom-0 bg-black bg-opacity-50 text-neutral-100 text-center w-full">
                      {item.name}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
          {eventDetails.videos && (
            <div className="flex flex-col items-start gap-[2vmin]">
              <h2 className="text-[2vmax] text-neutral-100 font-semibold">
                Videos of {eventDetails.name}
              </h2>
              <div
                className={`flex items-center gap-[2vmax] flex-wrap justify-between`}
              >
                {eventDetails.videos?.map((item) => (
                  <ReactPlayer
                    key={item.id}
                    url={`${import.meta.env.VITE_YOUTUBE_URI}${item.video_id}`}
                    width={400}
                    height={250}
                    className="max-w-[60vmax] max-h-[45vmin]"
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default EventDetails;
