import React from "react";

const Events = () => {
  return (
    <main className="min-h-[80vmin] flex flex-col gap-[5vmin]">
      <div className="bg-[url('/virtualparadise/events-header-bg.png')] bg-cover bg-center bg-no-repeat flex items-center justify-center min-h-[50vmin]">
        <div className="flex flex-col items-center justify-center gap-[2vmin] bg-black bg-opacity-60 px-[2vmax] py-[2vmin]">
          <h1 className="text-[2.5vmax] font-bold text-neutral-100">
            Game launch &amp; esports evnts
          </h1>
          <p className="text-[1.7vmax] font-medium text-neutral-100">
            The information of launch event, video shot, images.
          </p>
          <button
            type="button"
            className="text-[1.2vmax] capitalize border shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f] bg-blue-600 text-neutral-100 rounded-xl border-blue-600 px-[2vmax] py-[2vmin]"
          >
            start exploring
          </button>
        </div>
      </div>
      {/* <div className="flex items-center flex-wrap gap-[1.5vmax] justify-center">
        {events &&
          events.map((item) => (
            <Link
              href={`/events/${item.id}`}
              key={item.id}
              className="flex flex-col items-center mx-[3vmax]"
            >
              <img
                src={`${process.env.NEXT_PUBLIC_IMAGE_URI}/${item.event_logo.image_id}.jpg`}
                alt="event-cover"
                width={450}
                height={175}
              />
              <h1 className="text-[1.7vmax] text-neutral-100 font-semibold">
                {item.name}
              </h1>
            </Link>
          ))}
      </div> */}
    </main>
  );
};

export default Events;
