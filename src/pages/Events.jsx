import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";

const Events = () => {
  const [offeset, setOffset] = useState(0);
  const [events, setEvents] = useState([]);
  const {
    data,
    error: eventsError,
    loading: eventsLoading,
  } = useFetch(
    `/api/events`,
    `fields *, games.*, videos.*, event_logo.*, games.cover.*; sort event_logo asc; limit 10; offset ${offeset};`
  );
  useEffect(() => {
    if (!data) {
      return;
    }
    setEvents((prev) => [...prev, ...data]);
  }, [data]);

  return (
    <main className='min-h-[80vmin] flex flex-col gap-[5vmin] my-[1.4vmin]'>
      <div className="bg-[url('/events-header-bg.png')] bg-cover bg-center bg-no-repeat flex items-center justify-center min-h-[50vmin]">
        <div className='flex flex-col items-center justify-center gap-[2vmin] bg-black bg-opacity-60 px-[2vmax] py-[2vmin]'>
          <h1 className='text-[2.5vmax] font-bold text-neutral-100'>
            Game launch &amp; esports evnts
          </h1>
          <p className='text-[1.7vmax] font-medium text-neutral-100'>
            The information of launch event, video shot, images.
          </p>
          <Link
            to='#event-list'
            type='button'
            className='text-[1.2vmax] capitalize border shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f] bg-blue-600 text-neutral-100 rounded-xl border-blue-600 px-[2vmax] py-[2vmin]'
          >
            start exploring
          </Link>
        </div>
      </div>
      <div
        className='flex items-center flex-wrap gap-[1.5vmax] justify-center'
        id='event-list'
      >
        {eventsLoading ? (
          <Loader />
        ) : (
          events?.map((item) => (
            <Link
              to={`/events/${item.id}`}
              key={item.id}
              className='flex flex-col items-center mx-[3vmax]'
            >
              <img
                src={`${import.meta.env.VITE_IMAGE_URI}/${
                  item.event_logo?.image_id
                }.jpg`}
                alt='event-cover'
                width={450}
                height={175}
              />
              <h1 className='text-[1.7vmax] text-neutral-100 font-semibold'>
                {item.name}
              </h1>
            </Link>
          ))
        )}
      </div>
      <button
        type='button'
        className='text-[1.2vmax] capitalize border shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f] bg-blue-600 text-neutral-100 rounded-xl border-blue-600 px-[2vmax] py-[2vmin] self-center'
        onClick={() => setOffset(offeset + 10)}
      >
        view more
      </button>
    </main>
  );
};

export default Events;
