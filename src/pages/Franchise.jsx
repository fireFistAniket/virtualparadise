import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import Error from "../components/Error";
import TitleManager from "../components/TitleManager";

const Franchise = () => {
  const [offeset, setOffset] = useState(0);
  const [franchises, setFranchises] = useState([]);
  const {
    data,
    error: franchiseError,
    loading: franchiseLoading,
  } = useFetch(
    `/api/franchises`,
    `fields *, games.*, games.cover.*; limit 10; offset ${offeset};`
  );
  useEffect(() => {
    if (!data) {
      return;
    }
    setFranchises((prev) => [...prev, ...data]);
  }, [data]);
  if (franchiseError) {
    return <Error />;
  }
  return (
    <>
    <TitleManager title={`VirtualParadise | Franchises`} />
    <main className='min-h-[80vmin] flex flex-col gap-[5vmin] my-[1.4vmin]'>
      <div className="bg-[url('/franchise-bg.png')] bg-cover bg-center bg-no-repeat flex items-center justify-center min-h-[50vmin]"></div>
      <div className='flex items-center justify-center'>
        <h1 className='text-[2.5vmax] font-bold text-neutral-100 text-center'>
          Meet the game franchises, which is still popular till now.
        </h1>
      </div>
      <div className='mx-[3vmax] flex flex-wrap gap-[5vmin]'>
        {franchises.map((item) => (
          <div
            key={item.id}
            className='flex flex-col gap-[1.8vmax] border px-[1vmax] py-[1vmin] rounded-xl shadow-md shadow-slate-500 relative group min-h-[20vmax]'
          >
            <div className='flex items-center justify-between'>
              <h1 className='text-[2vmax] text-neutral-100 font-bold'>
                Franchise Name: <span className='underline'>{item.name}</span>
              </h1>
              <Link
                to={item.url}
                target='_blank' referrerPolicy='no-referrer'
                className='text-[1.3vmax] text-neutral-100 font-semibold capitalize absolute top-[2%] right-[2%] opacity-0 group-hover:opacity-100 transition duration-500'
                title='Visit official website'
              >
                <BsArrowUpRightCircleFill />
              </Link>
            </div>
            <div className='flex flex-wrap items-center justify-between gap-[5vmin]'>
              {item.games?.map((subItem) => (
                <Link
                  to={`/games/${subItem.id}`}
                  key={subItem.id}
                  className='flex flex-col items-center max-w-[8vmax]'
                >
                  <img
                    src={`${import.meta.env.VITE_IMAGE_URI}/${
                      subItem.cover?.image_id
                    }.jpg`}
                    alt='game-cover'
                    width={450}
                    height={175}
                    className='max-w-[8vmax]'
                  />
                  <h1
                    className='text-[1.2vmax] text-neutral-100 font-semibold line-clamp-1'
                    title={subItem.name}
                  >
                    {subItem.name}
                  </h1>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      {franchiseLoading && <Loader />}
      <button
        type='button'
        className='text-[1.2vmax] capitalize border hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f] transition duration-300 bg-blue-600 text-neutral-100 rounded-xl border-blue-600 px-[2vmax] py-[2vmin] self-center'
        onClick={() => setOffset(offeset + 10)}
      >
        view more
      </button>
    </main>
    </>
  );
};

export default Franchise;
