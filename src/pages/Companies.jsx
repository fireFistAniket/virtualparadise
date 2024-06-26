import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import Error from "../components/Error";
import TitleManager from "../components/TitleManager";

const Companies = () => {
  const [offeset, setOffset] = useState(0);
  const [companies, setCompanies] = useState([]);
  const {
    data,
    error: companiesError,
    loading: companiesLoading,
  } = useFetch(
    `/api/companies`,
    `fields *, logo.*; sort logo asc; limit 10; offset ${offeset};`
  );
  useEffect(() => {
    if (!data) {
      return;
    }
    setCompanies((prev) => [...prev, ...data]);
  }, [data]);
  if (companiesError) {
    return <Error />;
  }
  return (
    <>
      <TitleManager title={"VirtualParadise | Companies"} />
      <main className="min-h-[80vmin] flex flex-col gap-[5vmin] my-[1.4vmin]">
        <div className="bg-[url('/companies-header-bg.png')] bg-cover bg-center bg-no-repeat flex items-center justify-center min-h-[45vmin] md:min-h-[70vmin]">
          <div className="flex flex-col items-center justify-center px-[1vmax] py-[1vmin] gap-[2vmax] bg-black bg-opacity-50 rounded-2xl backdrop-blur-md my-[1.4vmax] sm:my-0 mx-[1.8vmax] sm:mx-0">
            <h2 className="text-[2vmax] font-semibold text-neutral-100">
              About Our Game Development Studio
            </h2>
            <p className="text-[1.7vmax] font-medium text-neutral-100 sm:max-w-[60vmax] text-center">
              We are a passionate game development studio dedicated to creating
              immersive and unforgettable gaming experiences. With a focus on
              innovation and storytelling, we strive to push the boundaries of
              gaming excellence. Join us on a journey where creativity knows no
              limits, and every game is a masterpiece in the making.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-[5vmin]">
          <h1 className="text-[2.5vmax] font-bold text-neutral-100">
            Meet top game development companies
          </h1>
          <div
            className="flex items-center flex-wrap gap-[1.5vmax] justify-center"
            id="event-list"
          >
            {companies?.map((item) => (
              <Link
                to={`/companies/${item.id}`}
                key={item.id}
                className="flex flex-col items-center mx-[3vmax]"
              >
                <img
                  src={`${import.meta.env.VITE_IMAGE_URI}/${
                    item.logo?.image_id
                  }.png`}
                  alt="company-cover"
                  width={450}
                  height={175}
                  className="max-w-[25vmax]"
                />
                <h1 className="text-[1.7vmax] text-neutral-100 font-semibold">
                  {item.name}
                </h1>
              </Link>
            ))}
          </div>
          {companiesLoading && <Loader />}
          <button
            type="button"
            className="text-[1.2vmax] capitalize border hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f] transition duration-300 bg-blue-600 text-neutral-100 rounded-xl border-blue-600 px-[2vmax] py-[2vmin] self-center"
            onClick={() => setOffset(offeset + 10)}
          >
            view more
          </button>
        </div>
      </main>
    </>
  );
};

export default Companies;
