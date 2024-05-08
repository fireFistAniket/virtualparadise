import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import Loader from "../components/Loader";
import FullScreenImageView from "../components/FullScreenImageView";
import Error from "../components/Error";

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
      <main className='min-h-[80vmin] flex flex-col gap-[5vmin] my-[1.4vmin]'>
        <div className="bg-[url('/artwork-bg.png')] bg-cover bg-center bg-no-repeat flex items-center justify-center min-h-[75vmin]"></div>
        <div className='flex items-center flex-wrap gap-[1.5vmax] justify-center'>
          {artworks.map((item) => (
            <div
              key={item.id}
              className='flex flex-col items-center mx-[3vmax] cursor-pointer'
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
              />
              <h1 className='text-[1.7vmax] text-neutral-100 font-semibold'>
                {item.game.name}
              </h1>
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
