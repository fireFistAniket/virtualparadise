import React, { useState } from "react";
import GenresFilter from "../components/GenresFilter";
import useFetch from "../hooks/useFetch";

const Genres = () => {
  const [offeset, setOffset] = useState(0);
  const [currentGenre, setCurrentGenre] = useState(36);
  const {
    data: genreGames,
    error: genreError,
    loading: genreLoading,
  } = useFetch(
    `/api/games`,
    `fields *, cover.*; where genres = ${currentGenre}; sort cover asc; limit 10; offset ${offeset};`
  );
  return (
    <main className="min-h-[80vmin] flex flex-col gap-[5vmin] my-[1.4vmin]">
      <div className="bg-[url('/genre-bg.png')] bg-cover bg-center bg-no-repeat flex items-center justify-center min-h-[60vmin]"></div>
      <div className="flex flex-col self-center gap-[2vmax] overflow-hidden max-w-[85vmax] relative">
        <h1 className="text-[2.5vmax] font-bold text-center text-neutral-100">
          Find games based on Genres
        </h1>
        <GenresFilter
          currentGenre={currentGenre}
          setCurrentGenre={setCurrentGenre}
        />
      </div>
    </main>
  );
};

export default Genres;
