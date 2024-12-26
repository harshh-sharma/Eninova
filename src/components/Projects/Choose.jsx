import React from 'react';

import { FaWifi } from "react-icons/fa";

const tools1 = [
  {
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    icon: <FaWifi />
  },
  {
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    icon: <FaWifi />
  },
  {
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    icon: <FaWifi />
  },
  {
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    icon: <FaWifi />
  },
];

const Choose = () => {
  return (
    <div className="w-full max-w-[1440px] h-auto bg-[#4EB768] border-2 mt-5 flex flex-col px-4 py-6 rounded-lg shadow-lg">
      {/* Title Section */}
      <h1 className="text-center text-[32px] font-semibold text-white mb-8">
        Why Choose Us?
      </h1>

      {/* Section Layout */}
      <div className="flex flex-col sm:flex-row sm:justify-center sm:space-x-8 space-y-8 sm:space-y-0">
        {/* First Section */}
        <div className="w-full sm:w-[296px] h-[433px] flex justify-center items-center flex-col gap-4">
          {tools1?.map((item, index) => (
            <div key={index} className="flex justify-center items-center space-x-4 mb-4">
              <div className="w-[228px] h-[51px] text-center">
                <p className="text-white font-medium">{item?.text}</p>
              </div>
              <div className="w-[80px] h-[80px] rounded-full border-4 border-white flex justify-center items-center transform transition duration-300 hover:scale-110 hover:shadow-lg">
                {item?.icon}
              </div>
            </div>
          ))}
        </div>

        {/* Image Section */}
        <div className="w-full sm:w-[296px] h-[433px] flex justify-center items-center">
          <div className="w-[296px] h-[433px] rounded-t-full rounded-b-full border-4 border-white overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300">
            <img
              src="/choose.png"
              alt="Rounded Content"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Second Section */}
        <div className="w-full sm:w-[296px] h-[433px] flex justify-center items-center flex-col gap-4">
          {tools1?.map((item, index) => (
            <div key={index} className="flex justify-center items-center space-x-4 mb-4">
              <div className="w-[228px] h-[51px] text-center">
                <p className="text-white font-medium">{item?.text}</p>
              </div>
              <div className="w-[80px] h-[80px] rounded-full border-4 border-white flex justify-center items-center transform transition duration-300 hover:scale-110 hover:shadow-lg">
                {item?.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Choose;
