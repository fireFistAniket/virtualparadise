import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Loader from "../components/Loader";

const EventDetails = () => {
  let { eventId } = useParams();
  const {
    data,
    error: eventsError,
    loading: eventsLoading,
  } = useFetch(
    `/api/events`,
    `fields *, event_logo.*, games.*, videos.*; where id = ${eventId};`
  );
  let eventDetails;
  useEffect(() => {
    if (!data) {
      return;
    }
    eventDetails = data[0];
  }, [data]);
  if (!eventDetails && eventsLoading) {
    return <Loader />;
  }
  return (
    <main className="min-h-[80vmin] flex flex-col gap-[5vmin] my-[1.4vmin]">
      <div className="flex items-center justify-center min-h-[50vmin]">
        <img
          src={`${import.meta.env.VITE_IMAGE_URI}/${
            eventDetails?.event_logo?.image_id
          }.jpg`}
          alt="event_cover"
          width={1920}
          height={1080}
        />
      </div>
    </main>
  );
};

export default EventDetails;
