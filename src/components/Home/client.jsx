import React from 'react';

const images = [
  { name: '/coursel1.png' },
  { name: '/coursel2.png' },
  { name: '/coursel3.png' },
  { name: '/coursel4.png' },
  { name: '/coursel5.png' },
  { name: '/coursel6.png' },
  { name: '/coursel1.png' },
  { name: '/coursel2.png' },
  { name: '/coursel3.png' },
  { name: '/coursel4.png' },
  { name: '/coursel5.png' },
  { name: '/coursel6.png' },
];

const Client = () => {
  return (
    <div className="logos px-4">
      <h1 className="text-center text-[#172A44] my-10 font-semibold text-[32px] sm:text-[40px] md:text-[60px]">
        Our Clients
      </h1>
      <div className="border-b-[3px] border-[rgb(83,183,105)] mb-6"></div>
      <div className="logos-slide flex flex-wrap justify-center gap-6">
        {images.map((item, index) => (
          <img
            src={item.name}
            key={index}
            alt="Client logo"
            className="w-24 sm:w-28 md:w-32 lg:w-36 object-contain mx-auto"
          />
        ))}
      </div>
      <div className="border-t-[3px] border-[rgb(83,183,105)] mt-6"></div>
    </div>
  );
};

export default Client;
