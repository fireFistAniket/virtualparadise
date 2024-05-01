import React from "react";
import { MdEventAvailable, MdOutlineDoNotDisturbOff } from "react-icons/md";
import { PiHandsPrayingBold } from "react-icons/pi";
import { GrLike } from "react-icons/gr";

const Home = () => {
  return (
    <main className="flex flex-col items-center justify-center gap-[5vmax] my-[2vmin]">
      <div className="bg-[url('/virtualparadise/header-bg.png')] bg-cover bg-no-repeat bg-center min-h-[70vmin] flex items-center justify-center w-full">
        <div className="flex flex-col items-center justify-center px-[1vmax] py-[1vmin] gap-[2vmax] bg-black bg-opacity-20 rounded-2xl">
          <h1 className="text-[2.5vmax] font-bold text-neutral-100">
            VirtualParadise
          </h1>
          <h2 className="text-[2vmax] font-semibold text-neutral-100">
            You all gaming information at 1 place
          </h2>
          <p className="text-[1.7vmax] font-medium text-neutral-100 max-w-[55vmax] text-center">
            Here you can expect any information related virtual games. Eg: game
            characters, game&apos;s age ratings, released date, upcoming event
            details &amp; much more. Explore the website and dive deeper to
            virtual gaming world.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-[1vmax]">
          <h1 className="text-[2vmax] font-bold text-neutral-100">
            Games which are launched last year
          </h1>
          <p className="text-[1vmax] text-neutral-100 font-semibold max-w-[50vmax] text-center">
            2023 is a year for game lovers, many launches &amp; events were
            happend. Lets see some of games you might be not fimiliar with.
          </p>
        </div>
        {/* <HomeRecentSlider games={[]} /> */}
      </div>
      <div className="flex flex-col items-center justify-center gap-[1.4vmin]">
        <h1 className="text-neutral-100 text-[2vmax] font-bold">
          About Us- What&apos;s{" "}
          <span className="tracking-wider">VirtualParadise</span>
        </h1>
        <div className="flex items-center justify-center gap-[2vmax]">
          <div className="max-w-[55vmax] text-[1.2vmax] text-neutral-100">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              voluptas eligendi illo perspiciatis vero? Provident magni minus
              labore placeat non quo nemo eaque delectus, suscipit error vitae
              voluptate similique odit!
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptas, a dolorem. Reprehenderit ipsam praesentium dolor nihil?
              Provident voluptatum magni deleniti temporibus impedit et velit
              eligendi, aperiam aliquid cum deserunt facere.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Reprehenderit omnis tempore esse neque repellat vero possimus
              perspiciatis consequatur. At doloremque eum quia pariatur facilis
              similique a commodi libero quis numquam. Quam error minima, ullam
              impedit quidem laborum rerum, corporis voluptatum eum assumenda
              expedita nisi recusandae? Ut amet, fugiat nostrum corrupti nulla
              quod quisquam illum nam quos suscipit. Blanditiis, unde
              recusandae! Tenetur ut ducimus, rem reiciendis maxime blanditiis
              dicta molestiae, quos voluptatem at commodi odit necessitatibus
              cumque. Quibusdam expedita, qui sequi maxime fuga ea sit vero
              explicabo tempore ullam. Iure, consequuntur.
            </p>
          </div>
          <div>
            <img
              src="/about0us-showcase.png"
              alt="about-us"
              width={600}
              height={400}
              className="max-w-[45vmax]"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-[2vmin] mx-[3vmax]">
        <h2 className="text-[2vmax] text-neutral-100 font-bold">
          Why people trust on our recommendation?
        </h2>
        <div className="grid grid-cols-2 gap-[1.5vmax] items-center justify-items-center min-w-[85vmax]">
          <div className="flex items-center justify-center gap-4 max-w-[25vmax]">
            <MdOutlineDoNotDisturbOff className="text-[4vmax] text-neutral-100" />
            <p className="text-[1.1vmax] text-neutral-100 font-medium">
              Our reviews &amp; recommendations are trustworthy &amp; also
              commercial independent
            </p>
          </div>
          <div className="flex items-center justify-center gap-4 max-w-[25vmax]">
            <PiHandsPrayingBold className="text-[4vmax] text-neutral-100" />
            <p className="text-[1.1vmax] text-neutral-100 font-medium">
              We recommend only those products which we really tested
            </p>
          </div>
          <div className="flex items-center justify-center gap-4 max-w-[25vmax]">
            <MdEventAvailable className="text-[4vmax] text-neutral-100" />
            <p className="text-[1.1vmax] text-neutral-100 font-medium">
              We also attend &amp; bring those momment of launch events to you
              through this platform
            </p>
          </div>
          <div className="flex items-center justify-center gap-4 max-w-[25vmax]">
            <GrLike className="text-[4vmax] text-neutral-100" />
            <p className="text-[1.1vmax] text-neutral-100 font-medium">
              We always try to bring best of bests game and latest news to you.
            </p>
          </div>
        </div>
        <button
          type="button"
          className="text-[1.2vmax] capitalize border shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f] bg-blue-600 text-neutral-100 rounded-xl border-blue-600 px-[2vmax] py-[2vmin]"
        >
          watch our recommendation
        </button>
      </div>
      <div className="flex mx-[3vmax] gap-[1.8vmax]">
        {/* <div className="grid grid-cols-2 items-center justify-items-center gap-[5vmin]">
          {mobaGames &&
            mobaGames?.map((item, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden shadow-lg shadow-neutral-100 relative"
              >
                <img
                  src={`${process.env.NEXT_PUBLIC_IMAGE_URI}/${item.cover.image_id}.jpg`}
                  alt="game-cover"
                  width={1920}
                  height={1080}
                  className="max-w-[10vmax]"
                />
                <p className="absolute bottom-0 left-0 text-center text-[1.3vmax] text-neutral-100 font-medium w-full bg-black bg-opacity-40">
                  {item.name}
                </p>
              </div>
            ))}
        </div> */}
        <div className="flex flex-col gap-[1.7vmax] items-start justify-around max-w-[50vmax]">
          <h2 className="text-[2vmax] font-bold text-neutral-100">
            A large number of games based on your perticular choice
          </h2>
          <p className="text-[1.4vmax] font-medium text-neutral-100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam at,
            sit delectus est accusantium modi possimus adipisci ducimus, cumque
            quo perferendis harum eum magni vero. Velit et molestiae dolores
            aliquid.
          </p>
          <button
            type="button"
            className="text-[1.2vmax] capitalize border shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f] bg-blue-600 text-neutral-100 rounded-xl border-blue-600 px-[2vmax] py-[2vmin]"
          >
            check out all genres
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mx-[3vmax] gap-[1.8vmax]">
        <h1 className="text-[2vmax] font-bold text-neutral-100">
          Games which you might get interest
        </h1>
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-[2vmin]">
            <p className="text-[1.4vmax] font-medium text-neutral-100">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              molestiae provident vero culpa cum atque autem quod inventore
              consequatur voluptatum libero, quisquam amet mollitia tenetur
              cumque sequi! Eum, vero velit.
            </p>
            <img
              src={`${process.env.NEXT_PUBLIC_IMAGE_URI}/iurhmhenrrsdnsc4zbva.png`}
              alt="Lara Croft"
              width={1920}
              height={1080}
              className="max-w-[12vmax]"
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-[2vmin]">
            <img
              src={`${process.env.NEXT_PUBLIC_IMAGE_URI}/bnzwhwclosyep4ligivs.png`}
              alt="Lara Croft"
              width={1920}
              height={1080}
              className="max-w-[12vmax]"
            />
            <p className="text-[1.4vmax] font-medium text-neutral-100">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              molestiae provident vero culpa cum atque autem quod inventore
              consequatur voluptatum libero, quisquam amet mollitia tenetur
              cumque sequi! Eum, vero velit.
            </p>
          </div>
        </div>
        <button
          type="button"
          className="text-[1.2vmax] capitalize border shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f] bg-blue-600 text-neutral-100 rounded-xl border-blue-600 px-[2vmax] py-[2vmin]"
        >
          watch upcoming games
        </button>
      </div>
    </main>
  );
};

export default Home;
