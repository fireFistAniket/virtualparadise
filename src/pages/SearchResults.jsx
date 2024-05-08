import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Loader from "../components/Loader";
import Error from "../components/Error";

const SearchResults = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const [offeset, setOffset] = useState(0);
  const [searchResults, setSearchResult] = useState([]);
  const {
    data,
    error: searchError,
    loading: searchLoading,
  } = useFetch(
    `/api/search`,
    `fields *, character.*, collection.*, company.*, game.*, game.cover.*; search "${searchParams.get(
      "q"
    )}"; limit 15; offset ${offeset};`
  );
  useEffect(() => {
    if (!data) {
      return;
    }
    setSearchResult((prev) => [...prev, ...data]);
  }, [data]);

  if (searchError) {
    return <Error />;
  }

  return (
    <main className='min-h-[80vmin] flex flex-col gap-[5vmin] my-[1.4vmin] items-center'>
      <h1 className='text-[2.5vmax] font-bold text-neutral-100'>
        Showing search results of <q>{searchParams.get("q")}</q>
      </h1>
      <div className='flex flex-wrap justify-center gap-[1.8vmax] mx-[3vmax]'>
        {searchResults?.map((item) => (
          <Link
            to={`/games/${item.game?.id}`}
            key={item.id}
            className='flex flex-col items-center gap-[1vmax] max-w-[21vmax]'
          >
            <img
              src={`${import.meta.env.VITE_IMAGE_URI}/${
                item.game?.cover?.image_id
              }.jpg`}
              alt='game-cover'
              width={1920}
              height={1080}
              className='max-w-[20vmax]'
            />
            <h1
              className='text-[1.3vmax] text-neutral-100 font-semibold line-clamp-1'
              title={item.game?.slug}
            >
              {item.game?.name}
            </h1>
          </Link>
        ))}
      </div>
      {searchLoading && <Loader />}
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

export default SearchResults;
