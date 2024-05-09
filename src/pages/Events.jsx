import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import Error from "../components/Error";

const Events = () => {
  const [offeset, setOffset] = useState(0);
  const [events, setEvents] = useState([]);
  const {
    data,
    error: eventsError,
    loading: eventsLoading,
  } = useFetch(
    `/api/events`,
    `fields *, games.*, videos.*, event_logo.*, games.cover.*; sort event_logo asc; sort start_time desc; limit 10; offset ${offeset};`
  );
  useEffect(() => {
    if (!data) {
      return;
    }
    setEvents((prev) => [...prev, ...data]);
  }, [data]);
  if (eventsError) {
    return <Error />;
  }
  return (
    <main className='min-h-[80vmin] flex flex-col gap-[5vmin] my-[1.4vmin]'>
      <div className="bg-[url('/events-header-bg.png')] bg-cover bg-center bg-no-repeat flex items-center justify-center min-h-[70vmin]">
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
            className='text-[1.2vmax] capitalize border hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f] transition duration-300 bg-blue-600 text-neutral-100 rounded-xl border-blue-600 px-[2vmax] py-[2vmin]'
          >
            start exploring
          </Link>
        </div>
      </div>
      <h1 className="text-center text-[2.7vmax] font-bold text-neutral-100">Witness The recent Game Launch events</h1>
      <div
        className='flex flex-wrap gap-[1.5vmax] justify-around mx-[3vmax]'
        id='event-list'
      >
        {events?.map((item) => (
          <Link
            to={`/events/${item.id}`}
            key={item.id}
            className='flex flex-shrink flex-grow basis-[25vmax] group relative'
          >
            <img
              src={`${import.meta.env.VITE_IMAGE_URI}/${
                item.event_logo?.image_id
              }.jpg`}
              alt='event-cover'
              width={450}
              height={175}
              className='inline-block w-full h-auto rounded-lg object-cover'
            />
            <div className='absolute bottom-0 w-full py-[2vmin] bg-neutral-800 rounded-b-lg bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out'>
              <h1 className='text-[1.7vmax] line-clamp-1 text-neutral-100 font-semibold text-center'>
                {item.name}
              </h1>
            </div>
          </Link>
        ))}
      </div>
      {eventsLoading && <Loader />}
      <button
        type='button'
        className='text-[1.2vmax] capitalize border hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f] transition duration-300 bg-blue-600 text-neutral-100 rounded-xl border-blue-600 px-[2vmax] py-[2vmin] self-center'
        onClick={() => setOffset(offeset + 10)}
      >
        view more
      </button>
    </main>
  );
};

export default Events;
