import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

const Artworks = () => {
  const [offeset, setOffset] = useState(0);
  const [artworks, setArtworks] = useState([]);
  const {
    data,
    error: artWorksError,
    loading: artWorksLoading,
  } = useFetch(
    `/api/artworks`,
    `fields *, game.*, game.cover.*; limit 10; offset ${offeset};`
  );
  useEffect(() => {
    if (!data) {
      return;
    }
    setArtworks((prev) => [...prev, ...data]);
  }, [data]);

  return (
    <main className='min-h-[80vmin] flex flex-col gap-[5vmin] my-[1.4vmin]'>
      <div className="bg-[url('/artwork-bg.png')] bg-cover bg-center bg-no-repeat flex items-center justify-center min-h-[75vmin]"></div>
      <div>
        <div></div>
      </div>
    </main>
  );
};

export default Artworks;
