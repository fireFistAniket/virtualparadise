import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import Loader from "../components/Loader";
import FullScreenImageView from "../components/FullScreenImageView";
import Error from "../components/Error";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import TitleManager from "../components/TitleManager";

const Artworks = () => {
  const [offeset, setOffset] = useState(0);
  const [artworks, setArtworks] = useState([]);
  const [fullView, setFullView] = useState(false);
  const [imgPath, setImgPath] = useState("");
  const [altPath, setAltPath] = useState("");
  const {
    data,
    error: artWorksError,
    loading: artWorksLoading,
  } = useFetch(
    `/api/artworks`,
    `fields *, game.*; limit 10; offset ${offeset};`
  );
  useEffect(() => {
    if (!data) {
      return;
    }
    setArtworks((prev) => [...prev, ...data]);
  }, [data]);

  if (artWorksError) {
    return <Error />;
  }

  return (
    <>
      <TitleManager title={"VirtualParadise | Artworks"} />
      <main className='min-h-[80vmin] flex flex-col gap-[5vmin] my-[1.4vmin]'>
        <div className="bg-[url('/artwork-bg.png')] bg-cover bg-center bg-no-repeat flex items-center justify-center min-h-[45vmin] md:min-h-[75vmin]">
          <div className='flex flex-col items-center justify-center px-[1vmax] py-[1vmin] gap-[2vmax] bg-black bg-opacity-50 rounded-2xl backdrop-blur-md w-[40vmax] sm:w-[60vmax] md:w-auto my-[1.4vmax] sm:my-0'>
            <h1 className='text-[2.5vmax] font-bold text-neutral-100'>
              VirtualParadise Artworks
            </h1>
            <h2 className='text-[2vmax] font-semibold text-neutral-100 text-center'>
              Discover the Art of Gaming: Explore Stunning Game Artworks
            </h2>
            <p className='text-[1.7vmax] font-medium text-neutral-100 sm:max-w-[70vmax] text-center'>
              Explore captivating game artworks that bring virtual worlds to
              life. Immerse yourself in stunning visuals that capture the
              essence of each game, from epic landscapes to intricate character
              designs. Discover the artistry behind your favorite games and
              experience their stories in a whole new light.
            </p>
          </div>
        </div>
        <div className='flex flex-wrap justify-around mx-[3vmax]'>
          {artworks.map((item) => (
            <div
              key={item.id}
              className='flex cursor-pointer flex-shrink flex-grow basis-[15vmax] m-[3vmin] group relative'
              onClick={() => {
                setImgPath(item.image_id);
                setAltPath(item.game.name);
                setFullView(true);
              }}
            >
              <img
                src={`${import.meta.env.VITE_IMAGE_URI}/${item.image_id}.jpg`}
                alt='event-cover'
                width={450}
                height={175}
                className='inline-block w-full h-auto object-cover rounded-lg'
              />
              <div className='absolute bottom-0 w-full py-[2vmin] bg-neutral-800 rounded-b-lg bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out'>
                <h1 className='text-[1.7vmax] text-neutral-100 font-semibold text-center'>
                  {item.game.name}
                </h1>
              </div>
              <Link
                to={`/games/${item.game.id}`}
                title={`Go to ${item.game.name}`}
                className='text-[1.3vmax] text-neutral-100 font-semibold capitalize absolute top-[2%] right-[2%] opacity-0 group-hover:opacity-100 transition duration-500'
              >
                <BsArrowUpRightCircleFill />
              </Link>
            </div>
          ))}
        </div>
        {artWorksLoading && <Loader />}
        <button
          type='button'
          className='text-[1.2vmax] capitalize border hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f] transition duration-300 bg-blue-600 text-neutral-100 rounded-xl border-blue-600 px-[2vmax] py-[2vmin] self-center'
          onClick={() => setOffset(offeset + 10)}
        >
          view more
        </button>
      </main>
      {fullView && (
        <FullScreenImageView
          path={imgPath}
          altName={altPath}
          close={setFullView}
        />
      )}
    </>
  );
};

export default Artworks;
