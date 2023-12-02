import React from 'react';

export default function FeaturedCityCard({ image, title }) {
  return (
    <>
      {/*<!-- Component: Basic image card --> */}
      <div className="overflow-hidden min-h-[400px] hover:scale-105 cursor-pointer rounded bg-white text-slate-500 shadow-md shadow-slate-200 flex flex-col">
        {/*  <!--  Image --> */}
        <figure className="flex-grow">
          <img
            src={image}
            alt="card image"
            className="aspect-video w-full h-full object-cover"
          />
        </figure>
        {/*  <!-- Body--> */}
        <div className="p-6">
          <header className="">
            <h3 className="text-xl font-medium text-slate-700">{title}</h3>
          </header>
        </div>
      </div>
      {/*<!-- End Basic image card --> */}
    </>
  );
}
