import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Loader from "../components/Loader";

const CompanyDetails = () => {
  const { companyId } = useParams();
  const [companyDetails, setCompanyDetails] = useState({});
  const {
    data,
    error: companyError,
    loading: companyLoading,
  } = useFetch(
    `/api/companies`,
    `fields *, logo.*, developed.*, developed.cover.*, published.*, published.cover.*, websites.*; where id = ${companyId};`
  );
  useEffect(() => {
    if (!data) {
      return;
    }
    setCompanyDetails(data[0]);
  }, [data]);
  if (companyLoading) {
    return <Loader />;
  }
  return (
    <main className='min-h-[80vmin] flex flex-col gap-[5vmin] my-[1.4vmin]'>
      <div className='flex items-center justify-center'>
        <img
          src={`${import.meta.env.VITE_IMAGE_URI}/${
            companyDetails?.logo?.image_id
          }.jpg`}
          alt='company_cover'
          width={1920}
          height={1080}
          className='max-h-[70vmin] w-full'
        />
      </div>
      <div className='flex flex-col gap-[2vmin] mx-[3vmax]'>
        {companyDetails.websites ? (
          companyDetails?.websites.map((item) => (
            <Link to={item.url} target='_blank' key={item.id}>
              <h1 className='text-neutral-100 text-[2.5vmax] font-bold'>
                {companyDetails.name}
              </h1>
            </Link>
          ))
        ) : (
          <h1 className='text-neutral-100 text-[2.5vmax] font-bold'>
            {companyDetails.name}
          </h1>
        )}
        <p className='text-neutral-100 text-[1.6vmax] font-medium'>
          {companyDetails.description}
        </p>
      </div>
      <div className='flex flex-col items-start gap-[2vmin] mx-[3vmax]'>
        <h2 className='text-[2vmax] text-neutral-100 font-semibold'>
          Launched Games from {companyDetails.name}
        </h2>
        <div
          className={`flex items-center gap-[2vmax] flex-wrap justify-between`}
        >
          {companyDetails?.published?.map((item) => (
            <div key={item.id} className='flex flex-col items-center relative'>
              <img
                src={`${import.meta.env.VITE_IMAGE_URI}/${
                  item.cover?.image_id
                }.jpg`}
                alt='game cover'
                width={400}
                height={250}
                className='max-w-[15vmax]'
              />
              <p className='text-[1.5vmax] font-bold absolute bottom-0 bg-black bg-opacity-50 text-neutral-100 text-center w-full'>
                {item.name}
              </p>
            </div>
          ))}
          {companyDetails?.developed?.map((item) => (
            <div key={item.id} className='flex flex-col items-center relative'>
              <img
                src={`${import.meta.env.VITE_IMAGE_URI}/${
                  item.cover?.image_id
                }.jpg`}
                alt='game cover'
                width={400}
                height={250}
                className='max-w-[15vmax]'
              />
              <p className='text-[1.5vmax] font-bold absolute bottom-0 bg-black bg-opacity-50 text-neutral-100 text-center w-full'>
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default CompanyDetails;