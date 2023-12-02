import React from 'react';

export default function FeaturedProjectCard({
  image,
  logo,
  title,
  price,
  city,
  address,
}) {
  return (
    <>
      {/*<!-- Component: Blog card with avatar --> */}
      <div className="overflow-hidden hover:scale-105 cursor-pointer rounded bg-white text-slate-500 shadow-md shadow-slate-200">
        {/*  <!-- Image --> */}
        <figure>
          <img src={image} alt="card image" className="aspect-video w-full object-cover" />
        </figure>
        {/*  <!-- Body--> */}
        <div className="p-6">
          <header className="mb-4 flex gap-4">
            <a
              href="#"
              className="relative inline-flex h-12 w-12 items-center justify-center rounded-full text-white"
            >
              <img
                src={logo}
                alt="user name"
                title="user name"
                width="48"
                height="48"
                className="max-w-full rounded-full"
              />
            </a>
            <div className='min-h-[80px]'>
              <h3 className="text-xl font-medium text-slate-700">{title}</h3>
              <p className="text-xl font-medium text-slate-700">{price}</p>
            </div>
          </header>
          <p>
            {city} <br /> {address}
          </p>
        </div>
      </div>
      {/*<!-- End Blog card with avatar --> */}
    </>
  );
}
