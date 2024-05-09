import React from "react";
import { MdEventAvailable, MdOutlineDoNotDisturbOff } from "react-icons/md";
import { PiHandsPrayingBold } from "react-icons/pi";
import { GrLike } from "react-icons/gr";
import Loader from "../components/Loader";
import HomeRecentSlider from "../components/HomeRecentSlider";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";

const Home = () => {
  const {
    data: recentGames,
    error: recentGamesError,
    loading: recentGamesLoading,
  } = useFetch(
    `/api/games`,
    "fields *, cover.*; where first_release_date >= 1640995200 & first_release_date < 1672531199; limit 25;"
  );

  const {
    data: popularGames,
    error: popularGamesError,
    loading: popularGamesLoading,
  } = useFetch(
    `/api/games`,
    "fields *, cover.*; sort rating desc; where rating >= 70; limit 25;"
  );

  const {
    data: mobaGames,
    error: mobaGamesError,
    loading: mobaGamesLoading,
  } = useFetch(
    `/api/games`,
    "fields *, cover.*; where genres = 36 & cover.height > 500; sort cover asc; limit 8;"
  );

  return (
    <main className='flex flex-col items-center justify-center gap-[5vmax] my-[2vmin]'>
      <div className="bg-[url('/header-bg.png')] bg-cover bg-no-repeat bg-center min-h-[70vmin] flex items-center justify-center w-full">
        <div className='flex flex-col items-center justify-center px-[1vmax] py-[1vmin] gap-[2vmax] bg-black bg-opacity-20 rounded-2xl backdrop-blur-md'>
          <h1 className='text-[2.5vmax] font-bold text-neutral-100'>
            VirtualParadise
          </h1>
          <h2 className='text-[2vmax] font-semibold text-neutral-100'>
            Your all gaming information at 1 place
          </h2>
          <p className='text-[1.7vmax] font-medium text-neutral-100 max-w-[55vmax] text-center'>
            Here you can expect any information related virtual games. Eg: game
            characters, game&apos;s age ratings, released date, upcoming event
            details &amp; much more. Explore the website and dive deeper to
            virtual gaming world.
          </p>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <div className='flex flex-col items-center justify-center gap-[1vmax]'>
          <h1 className='text-[2vmax] font-bold text-neutral-100'>
            Games which are launched last year
          </h1>
          <p className='text-[1vmax] text-neutral-100 font-semibold max-w-[50vmax] text-center'>
            2023 is a year for game lovers, many launches &amp; events were
            happend. Lets see some of games you might be not fimiliar with.
          </p>
        </div>
        {recentGamesLoading ? (
          <Loader />
        ) : (
          <HomeRecentSlider games={recentGames} />
        )}
      </div>
      <div className='flex flex-col items-center justify-center gap-[3vmax]'>
        <h1 className='text-neutral-100 text-[2vmax] font-bold'>
          About Us- What&apos;s{" "}
          <span className='tracking-wider'>VirtualParadise</span>
        </h1>
        <div className='flex items-center justify-center gap-[2vmax]'>
          <div className='max-w-[35vmax] md:max-w-[45vmax] xl:max-w-[55vmax] text-[1.2vmax] text-neutral-100'>
            <p className='whitespace-pre-wrap'>
              Welcome to VirtualParadise, the ultimate destination for virtual
              gaming enthusiasts! Our website is dedicated to providing a vast
              and diverse collection of virtual games, ensuring that there's
              something for every type of gamer. Whether you're a fan of
              heart-pounding action, brain-teasing puzzles, or immersive
              simulations, you'll find it all here.&#10;&#10; At
              VirtualParadise, we're more than just a database of games. We're a
              passionate community of gamers who are dedicated to sharing our
              love for virtual worlds with others. Our goal is to create a
              welcoming and inclusive space where gamers can connect, discover
              new games, and share their experiences.&#10;&#10; With
              VirtualParadise, the possibilities are endless. Whether you're
              looking for your next gaming obsession or simply want to explore
              the vast world of virtual entertainment, we invite you to join us
              on this exciting journey. So come on in, and let's start exploring
              the virtual paradise together!
            </p>
          </div>
          <div>
            <img
              src={`/about0us-showcase.png`}
              alt='about-us'
              width={600}
              height={400}
              className='max-w-[25vmax] md:max-w-[35vmax] xl:max-w-[45vmax]'
            />
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center gap-[3vmax] mx-[3vmax]'>
        <h2 className='text-[2vmax] text-neutral-100 font-bold'>
          Why people trust on our recommendation?
        </h2>
        <div className='grid grid-cols-2 gap-[1.5vmax] items-center justify-items-center md:min-w-[85vmax]'>
          <div className='flex items-center justify-center gap-4 max-w-[25vmax]'>
            <MdOutlineDoNotDisturbOff className='text-[4vmax] text-neutral-100' />
            <p className='text-[1.1vmax] text-neutral-100 font-medium'>
              Our reviews &amp; recommendations are trustworthy &amp; also
              commercial independent
            </p>
          </div>
          <div className='flex items-center justify-center gap-4 max-w-[25vmax]'>
            <PiHandsPrayingBold className='text-[4vmax] text-neutral-100' />
            <p className='text-[1.1vmax] text-neutral-100 font-medium'>
              We recommend only those products which we really tested
            </p>
          </div>
          <div className='flex items-center justify-center gap-4 max-w-[25vmax]'>
            <MdEventAvailable className='text-[4vmax] text-neutral-100' />
            <p className='text-[1.1vmax] text-neutral-100 font-medium'>
              We also attend &amp; bring those momment of launch events to you
              through this platform
            </p>
          </div>
          <div className='flex items-center justify-center gap-4 max-w-[25vmax]'>
            <GrLike className='text-[4vmax] text-neutral-100' />
            <p className='text-[1.1vmax] text-neutral-100 font-medium'>
              We always try to bring best of bests game and latest news to you.
            </p>
          </div>
        </div>
        <button
          type='button'
          className='text-[1.2vmax] capitalize border hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f] transition duration-300 bg-blue-600 text-neutral-100 rounded-xl border-blue-600 px-[2vmax] py-[2vmin]'
        >
          watch our recommendation
        </button>
      </div>
      <div className='flex flex-col items-center md:items-stretch md:flex-row mx-[3vmax] gap-[2.5vmax]'>
        <div className='grid grid-cols-4 items-center justify-items-center gap-[5vmin]'>
          {mobaGamesLoading ? (
            <Loader />
          ) : (
            mobaGames?.map((item, index) => (
              <Link
                to={`/games/${item.id}`}
                key={index}
                className='rounded-xl overflow-hidden shadow-lg shadow-neutral-100 relative group'
              >
                <img
                  src={`${import.meta.env.VITE_IMAGE_URI}/${
                    item.cover?.image_id
                  }.jpg`}
                  alt='game-cover'
                  width={1920}
                  height={1080}
                  className='max-w-[10vmax]'
                />
                <p className='absolute bottom-0 left-0 text-center text-[1.3vmax] text-neutral-100 font-medium w-full bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out'>
                  {item.name}
                </p>
              </Link>
            ))
          )}
        </div>
        <div className='flex flex-col gap-[1.7vmax] items-center md:items-start justify-around max-w-[50vmax]'>
          <h2 className='text-[2vmax] font-bold text-neutral-100'>
            A large number of games based on your perticular choice
          </h2>
          <p className='text-[1.4vmax] font-medium text-neutral-100'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam at,
            sit delectus est accusantium modi possimus adipisci ducimus, cumque
            quo perferendis harum eum magni vero. Velit et molestiae dolores
            aliquid.
          </p>
          <Link
            to='/genres'
            type='button'
            className='text-[1.2vmax] capitalize border hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f] transition duration-300 bg-blue-600 text-neutral-100 rounded-xl border-blue-600 px-[2vmax] py-[2vmin]'
          >
            check out all genres
          </Link>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center mx-[3vmax] gap-[1.8vmax]'>
        <h1 className='text-[2vmax] font-bold text-neutral-100'>
          Games which you might get interest
        </h1>
        <div className='flex items-center justify-center'>
          <div className='flex flex-col items-center justify-center gap-[2vmin]'>
            <p className='text-[1.4vmax] font-medium text-neutral-100'>
              Mario is a beloved video game character created by Nintendo. He
              first appeared in the arcade game Donkey Kong in 1981. Mario is
              known for his iconic red cap, mustache, and overalls. He is a
              plumber by trade but is often seen embarking on adventures to
              rescue Princess Peach from the villain Bowser. Mario is known for
              his jumping ability and has starred in numerous games across
              various genres, becoming one of the most recognizable and enduring
              characters in gaming history.
            </p>
            <img
              src={`${import.meta.env.VITE_IMAGE_URI}/iurhmhenrrsdnsc4zbva.png`}
              alt='Lara Croft'
              width={1920}
              height={1080}
              className='max-w-[12vmax]'
            />
          </div>
          <div className='flex flex-col items-center justify-center gap-[2vmin]'>
            <img
              src={`${import.meta.env.VITE_IMAGE_URI}/bnzwhwclosyep4ligivs.png`}
              alt='Ezio Auditore'
              width={1920}
              height={1080}
              className='max-w-[12vmax]'
            />
            <p className='text-[1.4vmax] font-medium text-neutral-100'>
              Ezio Auditore da Firenze is a fictional character in the
              Assassin&apos;s Creed video game series. He is an Italian nobleman
              who becomes an Assassin after his family is betrayed and killed.
              Known for his charisma and skill, Ezio is a master of stealth,
              combat, and parkour. His story is set during the Italian
              Renaissance, where he fights against the Templar Order.
              Ezio&apos;s journey is marked by personal growth, from a young man
              seeking revenge to a wise mentor guiding future generations of
              Assassins.
            </p>
          </div>
        </div>
        <button
          type='button'
          className='text-[1.2vmax] capitalize border hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f] transition duration-300 bg-blue-600 text-neutral-100 rounded-xl border-blue-600 px-[2vmax] py-[2vmin]'
        >
          watch upcoming games
        </button>
      </div>
      <div className='flex flex-col items-center justify-center gap-[1.8vmax]'>
        <div className='flex flex-col items-center justify-center gap-[1vmax]'>
          <h1 className='text-[2vmax] font-bold text-neutral-100'>
            Popular games of all time
          </h1>
          <p className='text-[1vmax] text-neutral-100 font-semibold max-w-[50vmax] text-center'>
            2023 is a year for game lovers, many launches &amp; events were
            happend. Lets see some of games you might be not fimiliar with.
          </p>
        </div>
        {popularGamesLoading ? (
          <Loader />
        ) : (
          <HomeRecentSlider games={popularGames} />
        )}
      </div>
    </main>
  );
};

export default Home;
